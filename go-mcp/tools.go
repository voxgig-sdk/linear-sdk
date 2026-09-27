package main

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"

	"github.com/modelcontextprotocol/go-sdk/mcp"
	sdk "github.com/voxgig-sdk/linear-sdk/go"
)

// Args is the common argument shape for both tools. `entity` selects
// the SDK entity to operate on; `query` is the optional reqmatch /
// reqdata map passed through to the SDK. For load, `query` should be
// `{"id": <value>}`. For list, omit `query` or pass an empty map.
type Args struct {
	Entity string         `json:"entity" jsonschema:"access_key_release | access_key_release_pipeline | agent_activity | agent_session | agent_skill | application | attachment | audit_entry | audit_entry_type | auth_resolver_response | authentication_session_response | comment | create_or_join_organization_response | custom_view | customer | customer_need | customer_status | customer_tier | cycle | diff | document | document_search_result | email_intake_address | email_user_account_auth_challenge_response | emoji | entity_external_link | external_user | favorite | git_automation_state | git_automation_target_branch | git_hub_integration_connect_detail | initiative | initiative_label | initiative_lead_team_change_impact | initiative_relation | initiative_to_project | initiative_update | integration | integration_template | integrations_setting | issue | issue_import | issue_label | issue_priority_value | issue_relation | issue_search_result | issue_to_release | logout_response | notification | notification_subscription | o_auth_application | organization | organization_domain | organization_invite | organization_meta | passkey_login_start_response | project | project_label | project_milestone | project_milestone_move_project_team | project_relation | project_search_result | project_status | project_update | push_subscription | reaction | release | release_note | release_pipeline | release_stage | roadmap | roadmap_to_project | sla_configuration | sso_url_from_email_response | team | team_membership | template | time_schedule | triage_responsibility | upload_file | usage_alert | user | user_setting | view_preference | webhook | webhook_failure_event | workflow_state"`
	Query  map[string]any `json:"query,omitempty" jsonschema:"optional match map e.g. {\"id\":1} for load, omit for list"`
}

func registerTools(server *mcp.Server, client *sdk.LinearSDK) {
	mcp.AddTool(server, &mcp.Tool{
		Name: "linear_list",
		Description: "List records from Linear. " +
			"Args: entity (one of the supported SDK entities), query (optional filter map). " +
			"Returns the first page of records as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "list", args)
	})

	mcp.AddTool(server, &mcp.Tool{
		Name: "linear_load",
		Description: "Load a single record from Linear. " +
			"Args: entity, query ({\"id\":N} required). Returns the record as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "load", args)
	})
}

func runOp(client *sdk.LinearSDK, op string, args Args) (*mcp.CallToolResult, any, error) {
	ent, err := entityFor(client, args.Entity)
	if err != nil {
		return toolError(err.Error())
	}

	var result any
	switch op {
	case "list":
		result, err = ent.List(args.Query, nil)
	case "load":
		result, err = ent.Load(args.Query, nil)
	default:
		return toolError(fmt.Sprintf("unknown op %q", op))
	}
	if err != nil {
		return toolError(err.Error())
	}

	// SDK returns *Entity wrappers; unwrap each via .Data() to get a
	// plain map[string]any (or []any of maps for list) suitable for
	// JSON marshalling.
	data := extractData(result)
	body, err := json.MarshalIndent(data, "", "  ")
	if err != nil {
		return toolError(fmt.Sprintf("marshal: %v", err))
	}
	return &mcp.CallToolResult{
		Content: []mcp.Content{
			&mcp.TextContent{Text: string(body)},
		},
	}, data, nil
}

// entityFor dispatches on the lowercase entity name. The generator
// emits one `case "<name>":` per entity defined in the SDK model.
func entityFor(client *sdk.LinearSDK, name string) (sdk.LinearEntity, error) {
	switch strings.ToLower(name) {
	case "access_key_release":
		return client.AccessKeyRelease(nil), nil
	case "access_key_release_pipeline":
		return client.AccessKeyReleasePipeline(nil), nil
	case "agent_activity":
		return client.AgentActivity(nil), nil
	case "agent_session":
		return client.AgentSession(nil), nil
	case "agent_skill":
		return client.AgentSkill(nil), nil
	case "application":
		return client.Application(nil), nil
	case "attachment":
		return client.Attachment(nil), nil
	case "audit_entry":
		return client.AuditEntry(nil), nil
	case "audit_entry_type":
		return client.AuditEntryType(nil), nil
	case "auth_resolver_response":
		return client.AuthResolverResponse(nil), nil
	case "authentication_session_response":
		return client.AuthenticationSessionResponse(nil), nil
	case "comment":
		return client.Comment(nil), nil
	case "create_or_join_organization_response":
		return client.CreateOrJoinOrganizationResponse(nil), nil
	case "custom_view":
		return client.CustomView(nil), nil
	case "customer":
		return client.Customer(nil), nil
	case "customer_need":
		return client.CustomerNeed(nil), nil
	case "customer_status":
		return client.CustomerStatus(nil), nil
	case "customer_tier":
		return client.CustomerTier(nil), nil
	case "cycle":
		return client.Cycle(nil), nil
	case "diff":
		return client.Diff(nil), nil
	case "document":
		return client.Document(nil), nil
	case "document_search_result":
		return client.DocumentSearchResult(nil), nil
	case "email_intake_address":
		return client.EmailIntakeAddress(nil), nil
	case "email_user_account_auth_challenge_response":
		return client.EmailUserAccountAuthChallengeResponse(nil), nil
	case "emoji":
		return client.Emoji(nil), nil
	case "entity_external_link":
		return client.EntityExternalLink(nil), nil
	case "external_user":
		return client.ExternalUser(nil), nil
	case "favorite":
		return client.Favorite(nil), nil
	case "git_automation_state":
		return client.GitAutomationState(nil), nil
	case "git_automation_target_branch":
		return client.GitAutomationTargetBranch(nil), nil
	case "git_hub_integration_connect_detail":
		return client.GitHubIntegrationConnectDetail(nil), nil
	case "initiative":
		return client.Initiative(nil), nil
	case "initiative_label":
		return client.InitiativeLabel(nil), nil
	case "initiative_lead_team_change_impact":
		return client.InitiativeLeadTeamChangeImpact(nil), nil
	case "initiative_relation":
		return client.InitiativeRelation(nil), nil
	case "initiative_to_project":
		return client.InitiativeToProject(nil), nil
	case "initiative_update":
		return client.InitiativeUpdate(nil), nil
	case "integration":
		return client.Integration(nil), nil
	case "integration_template":
		return client.IntegrationTemplate(nil), nil
	case "integrations_setting":
		return client.IntegrationsSetting(nil), nil
	case "issue":
		return client.Issue(nil), nil
	case "issue_import":
		return client.IssueImport(nil), nil
	case "issue_label":
		return client.IssueLabel(nil), nil
	case "issue_priority_value":
		return client.IssuePriorityValue(nil), nil
	case "issue_relation":
		return client.IssueRelation(nil), nil
	case "issue_search_result":
		return client.IssueSearchResult(nil), nil
	case "issue_to_release":
		return client.IssueToRelease(nil), nil
	case "logout_response":
		return client.LogoutResponse(nil), nil
	case "notification":
		return client.Notification(nil), nil
	case "notification_subscription":
		return client.NotificationSubscription(nil), nil
	case "o_auth_application":
		return client.OAuthApplication(nil), nil
	case "organization":
		return client.Organization(nil), nil
	case "organization_domain":
		return client.OrganizationDomain(nil), nil
	case "organization_invite":
		return client.OrganizationInvite(nil), nil
	case "organization_meta":
		return client.OrganizationMeta(nil), nil
	case "passkey_login_start_response":
		return client.PasskeyLoginStartResponse(nil), nil
	case "project":
		return client.Project(nil), nil
	case "project_label":
		return client.ProjectLabel(nil), nil
	case "project_milestone":
		return client.ProjectMilestone(nil), nil
	case "project_milestone_move_project_team":
		return client.ProjectMilestoneMoveProjectTeam(nil), nil
	case "project_relation":
		return client.ProjectRelation(nil), nil
	case "project_search_result":
		return client.ProjectSearchResult(nil), nil
	case "project_status":
		return client.ProjectStatus(nil), nil
	case "project_update":
		return client.ProjectUpdate(nil), nil
	case "push_subscription":
		return client.PushSubscription(nil), nil
	case "reaction":
		return client.Reaction(nil), nil
	case "release":
		return client.Release(nil), nil
	case "release_note":
		return client.ReleaseNote(nil), nil
	case "release_pipeline":
		return client.ReleasePipeline(nil), nil
	case "release_stage":
		return client.ReleaseStage(nil), nil
	case "roadmap":
		return client.Roadmap(nil), nil
	case "roadmap_to_project":
		return client.RoadmapToProject(nil), nil
	case "sla_configuration":
		return client.SlaConfiguration(nil), nil
	case "sso_url_from_email_response":
		return client.SsoUrlFromEmailResponse(nil), nil
	case "team":
		return client.Team(nil), nil
	case "team_membership":
		return client.TeamMembership(nil), nil
	case "template":
		return client.Template(nil), nil
	case "time_schedule":
		return client.TimeSchedule(nil), nil
	case "triage_responsibility":
		return client.TriageResponsibility(nil), nil
	case "upload_file":
		return client.UploadFile(nil), nil
	case "usage_alert":
		return client.UsageAlert(nil), nil
	case "user":
		return client.User(nil), nil
	case "user_setting":
		return client.UserSetting(nil), nil
	case "view_preference":
		return client.ViewPreference(nil), nil
	case "webhook":
		return client.Webhook(nil), nil
	case "webhook_failure_event":
		return client.WebhookFailureEvent(nil), nil
	case "workflow_state":
		return client.WorkflowState(nil), nil

	}
	return nil, fmt.Errorf("unknown entity %q", name)
}

func extractData(x any) any {
	switch v := x.(type) {
	case sdk.Entity:
		return extractData(v.Data())
	case []any:
		out := make([]any, len(v))
		for i, e := range v {
			out[i] = extractData(e)
		}
		return out
	case map[string]any:
		out := make(map[string]any, len(v))
		for k, vv := range v {
			out[k] = extractData(vv)
		}
		return out
	}
	return x
}

func toolError(msg string) (*mcp.CallToolResult, any, error) {
	return &mcp.CallToolResult{
		IsError: true,
		Content: []mcp.Content{
			&mcp.TextContent{Text: msg},
		},
	}, nil, nil
}
