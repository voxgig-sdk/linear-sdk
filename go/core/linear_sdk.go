package core

import (
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/linear-sdk/go/utility/struct"
)

type LinearSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewLinearSDK(options map[string]any) *LinearSDK {
	sdk := &LinearSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := SharedConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath(sdk.options, []any{"feature", "test", "active"}) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath(sdk.options, []any{"__derived__", "featureorder"}).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *LinearSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *LinearSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *LinearSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *LinearSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *LinearSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *LinearSDK) opAllowed(op string) bool {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return strings.Contains(allowOp, op)
}

func (sdk *LinearSDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("LinearSDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *LinearSDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					// f() returns nil on parse error in our fetcher.
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

// Raw GraphQL access: the pressure valve that makes the generated surface's
// deliberate omissions (per-call selection sets, typed filter builders,
// batching, subscriptions) livable — the whole schema stays reachable.
//
// Thin wrapper over the same prepare/fetch path Direct uses, with the one
// thing raw Direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
// as a top-level `errors` array, so status alone would report a failed query
// as ok.
//
// NOTE: like Direct, this bypasses the feature pipeline — no retry,
// ratelimit or paging features apply.
func (sdk *LinearSDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath(res, []any{"data", "errors"}).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("LinearSDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// AccessKeyRelease returns a AccessKeyRelease entity bound to this client.
// Idiomatic usage: client.AccessKeyRelease(nil).List(nil, nil) or
// client.AccessKeyRelease(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) AccessKeyRelease(data map[string]any) LinearEntity {
	return NewAccessKeyReleaseEntityFunc(sdk, data)
}


// AccessKeyReleasePipeline returns a AccessKeyReleasePipeline entity bound to this client.
// Idiomatic usage: client.AccessKeyReleasePipeline(nil).List(nil, nil) or
// client.AccessKeyReleasePipeline(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) AccessKeyReleasePipeline(data map[string]any) LinearEntity {
	return NewAccessKeyReleasePipelineEntityFunc(sdk, data)
}


// AgentActivity returns a AgentActivity entity bound to this client.
// Idiomatic usage: client.AgentActivity(nil).List(nil, nil) or
// client.AgentActivity(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) AgentActivity(data map[string]any) LinearEntity {
	return NewAgentActivityEntityFunc(sdk, data)
}


// AgentSession returns a AgentSession entity bound to this client.
// Idiomatic usage: client.AgentSession(nil).List(nil, nil) or
// client.AgentSession(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) AgentSession(data map[string]any) LinearEntity {
	return NewAgentSessionEntityFunc(sdk, data)
}


// AgentSkill returns a AgentSkill entity bound to this client.
// Idiomatic usage: client.AgentSkill(nil).List(nil, nil) or
// client.AgentSkill(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) AgentSkill(data map[string]any) LinearEntity {
	return NewAgentSkillEntityFunc(sdk, data)
}


// Application returns a Application entity bound to this client.
// Idiomatic usage: client.Application(nil).List(nil, nil) or
// client.Application(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) Application(data map[string]any) LinearEntity {
	return NewApplicationEntityFunc(sdk, data)
}


// Attachment returns a Attachment entity bound to this client.
// Idiomatic usage: client.Attachment(nil).List(nil, nil) or
// client.Attachment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) Attachment(data map[string]any) LinearEntity {
	return NewAttachmentEntityFunc(sdk, data)
}


// AuditEntry returns a AuditEntry entity bound to this client.
// Idiomatic usage: client.AuditEntry(nil).List(nil, nil) or
// client.AuditEntry(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) AuditEntry(data map[string]any) LinearEntity {
	return NewAuditEntryEntityFunc(sdk, data)
}


// AuditEntryType returns a AuditEntryType entity bound to this client.
// Idiomatic usage: client.AuditEntryType(nil).List(nil, nil) or
// client.AuditEntryType(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) AuditEntryType(data map[string]any) LinearEntity {
	return NewAuditEntryTypeEntityFunc(sdk, data)
}


// AuthResolverResponse returns a AuthResolverResponse entity bound to this client.
// Idiomatic usage: client.AuthResolverResponse(nil).List(nil, nil) or
// client.AuthResolverResponse(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) AuthResolverResponse(data map[string]any) LinearEntity {
	return NewAuthResolverResponseEntityFunc(sdk, data)
}


// AuthenticationSessionResponse returns a AuthenticationSessionResponse entity bound to this client.
// Idiomatic usage: client.AuthenticationSessionResponse(nil).List(nil, nil) or
// client.AuthenticationSessionResponse(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) AuthenticationSessionResponse(data map[string]any) LinearEntity {
	return NewAuthenticationSessionResponseEntityFunc(sdk, data)
}


// Comment returns a Comment entity bound to this client.
// Idiomatic usage: client.Comment(nil).List(nil, nil) or
// client.Comment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) Comment(data map[string]any) LinearEntity {
	return NewCommentEntityFunc(sdk, data)
}


// CreateOrJoinOrganizationResponse returns a CreateOrJoinOrganizationResponse entity bound to this client.
// Idiomatic usage: client.CreateOrJoinOrganizationResponse(nil).List(nil, nil) or
// client.CreateOrJoinOrganizationResponse(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) CreateOrJoinOrganizationResponse(data map[string]any) LinearEntity {
	return NewCreateOrJoinOrganizationResponseEntityFunc(sdk, data)
}


// CustomView returns a CustomView entity bound to this client.
// Idiomatic usage: client.CustomView(nil).List(nil, nil) or
// client.CustomView(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) CustomView(data map[string]any) LinearEntity {
	return NewCustomViewEntityFunc(sdk, data)
}


// Customer returns a Customer entity bound to this client.
// Idiomatic usage: client.Customer(nil).List(nil, nil) or
// client.Customer(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) Customer(data map[string]any) LinearEntity {
	return NewCustomerEntityFunc(sdk, data)
}


// CustomerNeed returns a CustomerNeed entity bound to this client.
// Idiomatic usage: client.CustomerNeed(nil).List(nil, nil) or
// client.CustomerNeed(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) CustomerNeed(data map[string]any) LinearEntity {
	return NewCustomerNeedEntityFunc(sdk, data)
}


// CustomerStatus returns a CustomerStatus entity bound to this client.
// Idiomatic usage: client.CustomerStatus(nil).List(nil, nil) or
// client.CustomerStatus(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) CustomerStatus(data map[string]any) LinearEntity {
	return NewCustomerStatusEntityFunc(sdk, data)
}


// CustomerTier returns a CustomerTier entity bound to this client.
// Idiomatic usage: client.CustomerTier(nil).List(nil, nil) or
// client.CustomerTier(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) CustomerTier(data map[string]any) LinearEntity {
	return NewCustomerTierEntityFunc(sdk, data)
}


// Cycle returns a Cycle entity bound to this client.
// Idiomatic usage: client.Cycle(nil).List(nil, nil) or
// client.Cycle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) Cycle(data map[string]any) LinearEntity {
	return NewCycleEntityFunc(sdk, data)
}


// Diff returns a Diff entity bound to this client.
// Idiomatic usage: client.Diff(nil).List(nil, nil) or
// client.Diff(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) Diff(data map[string]any) LinearEntity {
	return NewDiffEntityFunc(sdk, data)
}


// Document returns a Document entity bound to this client.
// Idiomatic usage: client.Document(nil).List(nil, nil) or
// client.Document(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) Document(data map[string]any) LinearEntity {
	return NewDocumentEntityFunc(sdk, data)
}


// DocumentSearchResult returns a DocumentSearchResult entity bound to this client.
// Idiomatic usage: client.DocumentSearchResult(nil).List(nil, nil) or
// client.DocumentSearchResult(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) DocumentSearchResult(data map[string]any) LinearEntity {
	return NewDocumentSearchResultEntityFunc(sdk, data)
}


// EmailIntakeAddress returns a EmailIntakeAddress entity bound to this client.
// Idiomatic usage: client.EmailIntakeAddress(nil).List(nil, nil) or
// client.EmailIntakeAddress(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) EmailIntakeAddress(data map[string]any) LinearEntity {
	return NewEmailIntakeAddressEntityFunc(sdk, data)
}


// EmailUserAccountAuthChallengeResponse returns a EmailUserAccountAuthChallengeResponse entity bound to this client.
// Idiomatic usage: client.EmailUserAccountAuthChallengeResponse(nil).List(nil, nil) or
// client.EmailUserAccountAuthChallengeResponse(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) EmailUserAccountAuthChallengeResponse(data map[string]any) LinearEntity {
	return NewEmailUserAccountAuthChallengeResponseEntityFunc(sdk, data)
}


// Emoji returns a Emoji entity bound to this client.
// Idiomatic usage: client.Emoji(nil).List(nil, nil) or
// client.Emoji(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) Emoji(data map[string]any) LinearEntity {
	return NewEmojiEntityFunc(sdk, data)
}


// EntityExternalLink returns a EntityExternalLink entity bound to this client.
// Idiomatic usage: client.EntityExternalLink(nil).List(nil, nil) or
// client.EntityExternalLink(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) EntityExternalLink(data map[string]any) LinearEntity {
	return NewEntityExternalLinkEntityFunc(sdk, data)
}


// ExternalUser returns a ExternalUser entity bound to this client.
// Idiomatic usage: client.ExternalUser(nil).List(nil, nil) or
// client.ExternalUser(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) ExternalUser(data map[string]any) LinearEntity {
	return NewExternalUserEntityFunc(sdk, data)
}


// Favorite returns a Favorite entity bound to this client.
// Idiomatic usage: client.Favorite(nil).List(nil, nil) or
// client.Favorite(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) Favorite(data map[string]any) LinearEntity {
	return NewFavoriteEntityFunc(sdk, data)
}


// GitAutomationState returns a GitAutomationState entity bound to this client.
// Idiomatic usage: client.GitAutomationState(nil).List(nil, nil) or
// client.GitAutomationState(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) GitAutomationState(data map[string]any) LinearEntity {
	return NewGitAutomationStateEntityFunc(sdk, data)
}


// GitAutomationTargetBranch returns a GitAutomationTargetBranch entity bound to this client.
// Idiomatic usage: client.GitAutomationTargetBranch(nil).List(nil, nil) or
// client.GitAutomationTargetBranch(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) GitAutomationTargetBranch(data map[string]any) LinearEntity {
	return NewGitAutomationTargetBranchEntityFunc(sdk, data)
}


// GitHubIntegrationConnectDetail returns a GitHubIntegrationConnectDetail entity bound to this client.
// Idiomatic usage: client.GitHubIntegrationConnectDetail(nil).List(nil, nil) or
// client.GitHubIntegrationConnectDetail(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) GitHubIntegrationConnectDetail(data map[string]any) LinearEntity {
	return NewGitHubIntegrationConnectDetailEntityFunc(sdk, data)
}


// Initiative returns a Initiative entity bound to this client.
// Idiomatic usage: client.Initiative(nil).List(nil, nil) or
// client.Initiative(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) Initiative(data map[string]any) LinearEntity {
	return NewInitiativeEntityFunc(sdk, data)
}


// InitiativeLabel returns a InitiativeLabel entity bound to this client.
// Idiomatic usage: client.InitiativeLabel(nil).List(nil, nil) or
// client.InitiativeLabel(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) InitiativeLabel(data map[string]any) LinearEntity {
	return NewInitiativeLabelEntityFunc(sdk, data)
}


// InitiativeLeadTeamChangeImpact returns a InitiativeLeadTeamChangeImpact entity bound to this client.
// Idiomatic usage: client.InitiativeLeadTeamChangeImpact(nil).List(nil, nil) or
// client.InitiativeLeadTeamChangeImpact(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) InitiativeLeadTeamChangeImpact(data map[string]any) LinearEntity {
	return NewInitiativeLeadTeamChangeImpactEntityFunc(sdk, data)
}


// InitiativeRelation returns a InitiativeRelation entity bound to this client.
// Idiomatic usage: client.InitiativeRelation(nil).List(nil, nil) or
// client.InitiativeRelation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) InitiativeRelation(data map[string]any) LinearEntity {
	return NewInitiativeRelationEntityFunc(sdk, data)
}


// InitiativeToProject returns a InitiativeToProject entity bound to this client.
// Idiomatic usage: client.InitiativeToProject(nil).List(nil, nil) or
// client.InitiativeToProject(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) InitiativeToProject(data map[string]any) LinearEntity {
	return NewInitiativeToProjectEntityFunc(sdk, data)
}


// InitiativeUpdate returns a InitiativeUpdate entity bound to this client.
// Idiomatic usage: client.InitiativeUpdate(nil).List(nil, nil) or
// client.InitiativeUpdate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) InitiativeUpdate(data map[string]any) LinearEntity {
	return NewInitiativeUpdateEntityFunc(sdk, data)
}


// Integration returns a Integration entity bound to this client.
// Idiomatic usage: client.Integration(nil).List(nil, nil) or
// client.Integration(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) Integration(data map[string]any) LinearEntity {
	return NewIntegrationEntityFunc(sdk, data)
}


// IntegrationTemplate returns a IntegrationTemplate entity bound to this client.
// Idiomatic usage: client.IntegrationTemplate(nil).List(nil, nil) or
// client.IntegrationTemplate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) IntegrationTemplate(data map[string]any) LinearEntity {
	return NewIntegrationTemplateEntityFunc(sdk, data)
}


// IntegrationsSetting returns a IntegrationsSetting entity bound to this client.
// Idiomatic usage: client.IntegrationsSetting(nil).List(nil, nil) or
// client.IntegrationsSetting(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) IntegrationsSetting(data map[string]any) LinearEntity {
	return NewIntegrationsSettingEntityFunc(sdk, data)
}


// Issue returns a Issue entity bound to this client.
// Idiomatic usage: client.Issue(nil).List(nil, nil) or
// client.Issue(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) Issue(data map[string]any) LinearEntity {
	return NewIssueEntityFunc(sdk, data)
}


// IssueImport returns a IssueImport entity bound to this client.
// Idiomatic usage: client.IssueImport(nil).List(nil, nil) or
// client.IssueImport(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) IssueImport(data map[string]any) LinearEntity {
	return NewIssueImportEntityFunc(sdk, data)
}


// IssueLabel returns a IssueLabel entity bound to this client.
// Idiomatic usage: client.IssueLabel(nil).List(nil, nil) or
// client.IssueLabel(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) IssueLabel(data map[string]any) LinearEntity {
	return NewIssueLabelEntityFunc(sdk, data)
}


// IssuePriorityValue returns a IssuePriorityValue entity bound to this client.
// Idiomatic usage: client.IssuePriorityValue(nil).List(nil, nil) or
// client.IssuePriorityValue(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) IssuePriorityValue(data map[string]any) LinearEntity {
	return NewIssuePriorityValueEntityFunc(sdk, data)
}


// IssueRelation returns a IssueRelation entity bound to this client.
// Idiomatic usage: client.IssueRelation(nil).List(nil, nil) or
// client.IssueRelation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) IssueRelation(data map[string]any) LinearEntity {
	return NewIssueRelationEntityFunc(sdk, data)
}


// IssueSearchResult returns a IssueSearchResult entity bound to this client.
// Idiomatic usage: client.IssueSearchResult(nil).List(nil, nil) or
// client.IssueSearchResult(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) IssueSearchResult(data map[string]any) LinearEntity {
	return NewIssueSearchResultEntityFunc(sdk, data)
}


// IssueToRelease returns a IssueToRelease entity bound to this client.
// Idiomatic usage: client.IssueToRelease(nil).List(nil, nil) or
// client.IssueToRelease(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) IssueToRelease(data map[string]any) LinearEntity {
	return NewIssueToReleaseEntityFunc(sdk, data)
}


// LogoutResponse returns a LogoutResponse entity bound to this client.
// Idiomatic usage: client.LogoutResponse(nil).List(nil, nil) or
// client.LogoutResponse(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) LogoutResponse(data map[string]any) LinearEntity {
	return NewLogoutResponseEntityFunc(sdk, data)
}


// Notification returns a Notification entity bound to this client.
// Idiomatic usage: client.Notification(nil).List(nil, nil) or
// client.Notification(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) Notification(data map[string]any) LinearEntity {
	return NewNotificationEntityFunc(sdk, data)
}


// NotificationSubscription returns a NotificationSubscription entity bound to this client.
// Idiomatic usage: client.NotificationSubscription(nil).List(nil, nil) or
// client.NotificationSubscription(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) NotificationSubscription(data map[string]any) LinearEntity {
	return NewNotificationSubscriptionEntityFunc(sdk, data)
}


// OAuthApplication returns a OAuthApplication entity bound to this client.
// Idiomatic usage: client.OAuthApplication(nil).List(nil, nil) or
// client.OAuthApplication(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) OAuthApplication(data map[string]any) LinearEntity {
	return NewOAuthApplicationEntityFunc(sdk, data)
}


// Organization returns a Organization entity bound to this client.
// Idiomatic usage: client.Organization(nil).List(nil, nil) or
// client.Organization(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) Organization(data map[string]any) LinearEntity {
	return NewOrganizationEntityFunc(sdk, data)
}


// OrganizationDomain returns a OrganizationDomain entity bound to this client.
// Idiomatic usage: client.OrganizationDomain(nil).List(nil, nil) or
// client.OrganizationDomain(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) OrganizationDomain(data map[string]any) LinearEntity {
	return NewOrganizationDomainEntityFunc(sdk, data)
}


// OrganizationInvite returns a OrganizationInvite entity bound to this client.
// Idiomatic usage: client.OrganizationInvite(nil).List(nil, nil) or
// client.OrganizationInvite(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) OrganizationInvite(data map[string]any) LinearEntity {
	return NewOrganizationInviteEntityFunc(sdk, data)
}


// OrganizationMeta returns a OrganizationMeta entity bound to this client.
// Idiomatic usage: client.OrganizationMeta(nil).List(nil, nil) or
// client.OrganizationMeta(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) OrganizationMeta(data map[string]any) LinearEntity {
	return NewOrganizationMetaEntityFunc(sdk, data)
}


// PasskeyLoginStartResponse returns a PasskeyLoginStartResponse entity bound to this client.
// Idiomatic usage: client.PasskeyLoginStartResponse(nil).List(nil, nil) or
// client.PasskeyLoginStartResponse(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) PasskeyLoginStartResponse(data map[string]any) LinearEntity {
	return NewPasskeyLoginStartResponseEntityFunc(sdk, data)
}


// Project returns a Project entity bound to this client.
// Idiomatic usage: client.Project(nil).List(nil, nil) or
// client.Project(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) Project(data map[string]any) LinearEntity {
	return NewProjectEntityFunc(sdk, data)
}


// ProjectLabel returns a ProjectLabel entity bound to this client.
// Idiomatic usage: client.ProjectLabel(nil).List(nil, nil) or
// client.ProjectLabel(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) ProjectLabel(data map[string]any) LinearEntity {
	return NewProjectLabelEntityFunc(sdk, data)
}


// ProjectMilestone returns a ProjectMilestone entity bound to this client.
// Idiomatic usage: client.ProjectMilestone(nil).List(nil, nil) or
// client.ProjectMilestone(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) ProjectMilestone(data map[string]any) LinearEntity {
	return NewProjectMilestoneEntityFunc(sdk, data)
}


// ProjectMilestoneMoveProjectTeam returns a ProjectMilestoneMoveProjectTeam entity bound to this client.
// Idiomatic usage: client.ProjectMilestoneMoveProjectTeam(nil).List(nil, nil) or
// client.ProjectMilestoneMoveProjectTeam(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) ProjectMilestoneMoveProjectTeam(data map[string]any) LinearEntity {
	return NewProjectMilestoneMoveProjectTeamEntityFunc(sdk, data)
}


// ProjectRelation returns a ProjectRelation entity bound to this client.
// Idiomatic usage: client.ProjectRelation(nil).List(nil, nil) or
// client.ProjectRelation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) ProjectRelation(data map[string]any) LinearEntity {
	return NewProjectRelationEntityFunc(sdk, data)
}


// ProjectSearchResult returns a ProjectSearchResult entity bound to this client.
// Idiomatic usage: client.ProjectSearchResult(nil).List(nil, nil) or
// client.ProjectSearchResult(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) ProjectSearchResult(data map[string]any) LinearEntity {
	return NewProjectSearchResultEntityFunc(sdk, data)
}


// ProjectStatus returns a ProjectStatus entity bound to this client.
// Idiomatic usage: client.ProjectStatus(nil).List(nil, nil) or
// client.ProjectStatus(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) ProjectStatus(data map[string]any) LinearEntity {
	return NewProjectStatusEntityFunc(sdk, data)
}


// ProjectUpdate returns a ProjectUpdate entity bound to this client.
// Idiomatic usage: client.ProjectUpdate(nil).List(nil, nil) or
// client.ProjectUpdate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) ProjectUpdate(data map[string]any) LinearEntity {
	return NewProjectUpdateEntityFunc(sdk, data)
}


// PushSubscription returns a PushSubscription entity bound to this client.
// Idiomatic usage: client.PushSubscription(nil).List(nil, nil) or
// client.PushSubscription(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) PushSubscription(data map[string]any) LinearEntity {
	return NewPushSubscriptionEntityFunc(sdk, data)
}


// Reaction returns a Reaction entity bound to this client.
// Idiomatic usage: client.Reaction(nil).List(nil, nil) or
// client.Reaction(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) Reaction(data map[string]any) LinearEntity {
	return NewReactionEntityFunc(sdk, data)
}


// Release returns a Release entity bound to this client.
// Idiomatic usage: client.Release(nil).List(nil, nil) or
// client.Release(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) Release(data map[string]any) LinearEntity {
	return NewReleaseEntityFunc(sdk, data)
}


// ReleaseNote returns a ReleaseNote entity bound to this client.
// Idiomatic usage: client.ReleaseNote(nil).List(nil, nil) or
// client.ReleaseNote(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) ReleaseNote(data map[string]any) LinearEntity {
	return NewReleaseNoteEntityFunc(sdk, data)
}


// ReleasePipeline returns a ReleasePipeline entity bound to this client.
// Idiomatic usage: client.ReleasePipeline(nil).List(nil, nil) or
// client.ReleasePipeline(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) ReleasePipeline(data map[string]any) LinearEntity {
	return NewReleasePipelineEntityFunc(sdk, data)
}


// ReleaseStage returns a ReleaseStage entity bound to this client.
// Idiomatic usage: client.ReleaseStage(nil).List(nil, nil) or
// client.ReleaseStage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) ReleaseStage(data map[string]any) LinearEntity {
	return NewReleaseStageEntityFunc(sdk, data)
}


// Roadmap returns a Roadmap entity bound to this client.
// Idiomatic usage: client.Roadmap(nil).List(nil, nil) or
// client.Roadmap(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) Roadmap(data map[string]any) LinearEntity {
	return NewRoadmapEntityFunc(sdk, data)
}


// RoadmapToProject returns a RoadmapToProject entity bound to this client.
// Idiomatic usage: client.RoadmapToProject(nil).List(nil, nil) or
// client.RoadmapToProject(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) RoadmapToProject(data map[string]any) LinearEntity {
	return NewRoadmapToProjectEntityFunc(sdk, data)
}


// SlaConfiguration returns a SlaConfiguration entity bound to this client.
// Idiomatic usage: client.SlaConfiguration(nil).List(nil, nil) or
// client.SlaConfiguration(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) SlaConfiguration(data map[string]any) LinearEntity {
	return NewSlaConfigurationEntityFunc(sdk, data)
}


// SsoUrlFromEmailResponse returns a SsoUrlFromEmailResponse entity bound to this client.
// Idiomatic usage: client.SsoUrlFromEmailResponse(nil).List(nil, nil) or
// client.SsoUrlFromEmailResponse(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) SsoUrlFromEmailResponse(data map[string]any) LinearEntity {
	return NewSsoUrlFromEmailResponseEntityFunc(sdk, data)
}


// Team returns a Team entity bound to this client.
// Idiomatic usage: client.Team(nil).List(nil, nil) or
// client.Team(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) Team(data map[string]any) LinearEntity {
	return NewTeamEntityFunc(sdk, data)
}


// TeamMembership returns a TeamMembership entity bound to this client.
// Idiomatic usage: client.TeamMembership(nil).List(nil, nil) or
// client.TeamMembership(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) TeamMembership(data map[string]any) LinearEntity {
	return NewTeamMembershipEntityFunc(sdk, data)
}


// Template returns a Template entity bound to this client.
// Idiomatic usage: client.Template(nil).List(nil, nil) or
// client.Template(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) Template(data map[string]any) LinearEntity {
	return NewTemplateEntityFunc(sdk, data)
}


// TimeSchedule returns a TimeSchedule entity bound to this client.
// Idiomatic usage: client.TimeSchedule(nil).List(nil, nil) or
// client.TimeSchedule(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) TimeSchedule(data map[string]any) LinearEntity {
	return NewTimeScheduleEntityFunc(sdk, data)
}


// TriageResponsibility returns a TriageResponsibility entity bound to this client.
// Idiomatic usage: client.TriageResponsibility(nil).List(nil, nil) or
// client.TriageResponsibility(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) TriageResponsibility(data map[string]any) LinearEntity {
	return NewTriageResponsibilityEntityFunc(sdk, data)
}


// UploadFile returns a UploadFile entity bound to this client.
// Idiomatic usage: client.UploadFile(nil).List(nil, nil) or
// client.UploadFile(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) UploadFile(data map[string]any) LinearEntity {
	return NewUploadFileEntityFunc(sdk, data)
}


// UsageAlert returns a UsageAlert entity bound to this client.
// Idiomatic usage: client.UsageAlert(nil).List(nil, nil) or
// client.UsageAlert(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) UsageAlert(data map[string]any) LinearEntity {
	return NewUsageAlertEntityFunc(sdk, data)
}


// User returns a User entity bound to this client.
// Idiomatic usage: client.User(nil).List(nil, nil) or
// client.User(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) User(data map[string]any) LinearEntity {
	return NewUserEntityFunc(sdk, data)
}


// UserSetting returns a UserSetting entity bound to this client.
// Idiomatic usage: client.UserSetting(nil).List(nil, nil) or
// client.UserSetting(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) UserSetting(data map[string]any) LinearEntity {
	return NewUserSettingEntityFunc(sdk, data)
}


// ViewPreference returns a ViewPreference entity bound to this client.
// Idiomatic usage: client.ViewPreference(nil).List(nil, nil) or
// client.ViewPreference(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) ViewPreference(data map[string]any) LinearEntity {
	return NewViewPreferenceEntityFunc(sdk, data)
}


// Webhook returns a Webhook entity bound to this client.
// Idiomatic usage: client.Webhook(nil).List(nil, nil) or
// client.Webhook(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) Webhook(data map[string]any) LinearEntity {
	return NewWebhookEntityFunc(sdk, data)
}


// WebhookFailureEvent returns a WebhookFailureEvent entity bound to this client.
// Idiomatic usage: client.WebhookFailureEvent(nil).List(nil, nil) or
// client.WebhookFailureEvent(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) WebhookFailureEvent(data map[string]any) LinearEntity {
	return NewWebhookFailureEventEntityFunc(sdk, data)
}


// WorkflowState returns a WorkflowState entity bound to this client.
// Idiomatic usage: client.WorkflowState(nil).List(nil, nil) or
// client.WorkflowState(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LinearSDK) WorkflowState(data map[string]any) LinearEntity {
	return NewWorkflowStateEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *LinearSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewLinearSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
