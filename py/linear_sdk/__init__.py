# Linear SDK

from linear_sdk.utility.voxgig_struct import voxgig_struct as vs
from linear_sdk.core.utility_type import LinearUtility
from linear_sdk.core.spec import LinearSpec
from linear_sdk.core import helpers

# Load utility registration (populates Utility._registrar)
from linear_sdk.utility import register

# Load features
from linear_sdk.feature.base_feature import LinearBaseFeature
from linear_sdk.features import _has_feature, _make_feature


class LinearSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = LinearUtility()
        self._utility = utility

        from linear_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        # Extension feature INSTANCES come from the RAW construction
        # options - extend is consumed exactly once, here. make_options
        # strips the key before cloning (vs.clone flattens arbitrary
        # objects), so self.options never carries the instances.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        extend = options.get("extend") if isinstance(options, dict) else None
        if not isinstance(extend, list):
            extend = []
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        # An active name with no generated feature class is
                        # legal when an extend-supplied instance carries that
                        # name (station's adopt path): the instance is added
                        # below, positioned by its own __after__ entry, so
                        # skip it here rather than add a BaseFeature stray
                        # that would silently shift feature positions.
                        if not _has_feature(fname) and any(
                            fname == (f.get("name") if isinstance(f, dict)
                                      else getattr(f, "name", None))
                            for f in extend
                        ):
                            continue
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        for f in extend:
            if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return LinearUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = LinearSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return isinstance(allow_op, str) and op in allow_op

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "LinearSDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("LinearSDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def AccessKeyRelease(self, data=None) -> "AccessKeyReleaseEntity":
        """Entity factory: client.AccessKeyRelease().list() / client.AccessKeyRelease().load({"id": ...})."""
        from linear_sdk.entity.access_key_release_entity import AccessKeyReleaseEntity
        return AccessKeyReleaseEntity(self, data)


    def AccessKeyReleasePipeline(self, data=None) -> "AccessKeyReleasePipelineEntity":
        """Entity factory: client.AccessKeyReleasePipeline().list() / client.AccessKeyReleasePipeline().load({"id": ...})."""
        from linear_sdk.entity.access_key_release_pipeline_entity import AccessKeyReleasePipelineEntity
        return AccessKeyReleasePipelineEntity(self, data)


    def AgentActivity(self, data=None) -> "AgentActivityEntity":
        """Entity factory: client.AgentActivity().list() / client.AgentActivity().load({"id": ...})."""
        from linear_sdk.entity.agent_activity_entity import AgentActivityEntity
        return AgentActivityEntity(self, data)


    def AgentSession(self, data=None) -> "AgentSessionEntity":
        """Entity factory: client.AgentSession().list() / client.AgentSession().load({"id": ...})."""
        from linear_sdk.entity.agent_session_entity import AgentSessionEntity
        return AgentSessionEntity(self, data)


    def AgentSkill(self, data=None) -> "AgentSkillEntity":
        """Entity factory: client.AgentSkill().list() / client.AgentSkill().load({"id": ...})."""
        from linear_sdk.entity.agent_skill_entity import AgentSkillEntity
        return AgentSkillEntity(self, data)


    def Application(self, data=None) -> "ApplicationEntity":
        """Entity factory: client.Application().list() / client.Application().load({"id": ...})."""
        from linear_sdk.entity.application_entity import ApplicationEntity
        return ApplicationEntity(self, data)


    def Attachment(self, data=None) -> "AttachmentEntity":
        """Entity factory: client.Attachment().list() / client.Attachment().load({"id": ...})."""
        from linear_sdk.entity.attachment_entity import AttachmentEntity
        return AttachmentEntity(self, data)


    def AuditEntry(self, data=None) -> "AuditEntryEntity":
        """Entity factory: client.AuditEntry().list() / client.AuditEntry().load({"id": ...})."""
        from linear_sdk.entity.audit_entry_entity import AuditEntryEntity
        return AuditEntryEntity(self, data)


    def AuditEntryType(self, data=None) -> "AuditEntryTypeEntity":
        """Entity factory: client.AuditEntryType().list() / client.AuditEntryType().load({"id": ...})."""
        from linear_sdk.entity.audit_entry_type_entity import AuditEntryTypeEntity
        return AuditEntryTypeEntity(self, data)


    def AuthResolverResponse(self, data=None) -> "AuthResolverResponseEntity":
        """Entity factory: client.AuthResolverResponse().list() / client.AuthResolverResponse().load({"id": ...})."""
        from linear_sdk.entity.auth_resolver_response_entity import AuthResolverResponseEntity
        return AuthResolverResponseEntity(self, data)


    def AuthenticationSessionResponse(self, data=None) -> "AuthenticationSessionResponseEntity":
        """Entity factory: client.AuthenticationSessionResponse().list() / client.AuthenticationSessionResponse().load({"id": ...})."""
        from linear_sdk.entity.authentication_session_response_entity import AuthenticationSessionResponseEntity
        return AuthenticationSessionResponseEntity(self, data)


    def Comment(self, data=None) -> "CommentEntity":
        """Entity factory: client.Comment().list() / client.Comment().load({"id": ...})."""
        from linear_sdk.entity.comment_entity import CommentEntity
        return CommentEntity(self, data)


    def CreateOrJoinOrganizationResponse(self, data=None) -> "CreateOrJoinOrganizationResponseEntity":
        """Entity factory: client.CreateOrJoinOrganizationResponse().list() / client.CreateOrJoinOrganizationResponse().load({"id": ...})."""
        from linear_sdk.entity.create_or_join_organization_response_entity import CreateOrJoinOrganizationResponseEntity
        return CreateOrJoinOrganizationResponseEntity(self, data)


    def CustomView(self, data=None) -> "CustomViewEntity":
        """Entity factory: client.CustomView().list() / client.CustomView().load({"id": ...})."""
        from linear_sdk.entity.custom_view_entity import CustomViewEntity
        return CustomViewEntity(self, data)


    def Customer(self, data=None) -> "CustomerEntity":
        """Entity factory: client.Customer().list() / client.Customer().load({"id": ...})."""
        from linear_sdk.entity.customer_entity import CustomerEntity
        return CustomerEntity(self, data)


    def CustomerNeed(self, data=None) -> "CustomerNeedEntity":
        """Entity factory: client.CustomerNeed().list() / client.CustomerNeed().load({"id": ...})."""
        from linear_sdk.entity.customer_need_entity import CustomerNeedEntity
        return CustomerNeedEntity(self, data)


    def CustomerStatus(self, data=None) -> "CustomerStatusEntity":
        """Entity factory: client.CustomerStatus().list() / client.CustomerStatus().load({"id": ...})."""
        from linear_sdk.entity.customer_status_entity import CustomerStatusEntity
        return CustomerStatusEntity(self, data)


    def CustomerTier(self, data=None) -> "CustomerTierEntity":
        """Entity factory: client.CustomerTier().list() / client.CustomerTier().load({"id": ...})."""
        from linear_sdk.entity.customer_tier_entity import CustomerTierEntity
        return CustomerTierEntity(self, data)


    def Cycle(self, data=None) -> "CycleEntity":
        """Entity factory: client.Cycle().list() / client.Cycle().load({"id": ...})."""
        from linear_sdk.entity.cycle_entity import CycleEntity
        return CycleEntity(self, data)


    def Diff(self, data=None) -> "DiffEntity":
        """Entity factory: client.Diff().list() / client.Diff().load({"id": ...})."""
        from linear_sdk.entity.diff_entity import DiffEntity
        return DiffEntity(self, data)


    def Document(self, data=None) -> "DocumentEntity":
        """Entity factory: client.Document().list() / client.Document().load({"id": ...})."""
        from linear_sdk.entity.document_entity import DocumentEntity
        return DocumentEntity(self, data)


    def DocumentSearchResult(self, data=None) -> "DocumentSearchResultEntity":
        """Entity factory: client.DocumentSearchResult().list() / client.DocumentSearchResult().load({"id": ...})."""
        from linear_sdk.entity.document_search_result_entity import DocumentSearchResultEntity
        return DocumentSearchResultEntity(self, data)


    def EmailIntakeAddress(self, data=None) -> "EmailIntakeAddressEntity":
        """Entity factory: client.EmailIntakeAddress().list() / client.EmailIntakeAddress().load({"id": ...})."""
        from linear_sdk.entity.email_intake_address_entity import EmailIntakeAddressEntity
        return EmailIntakeAddressEntity(self, data)


    def EmailUserAccountAuthChallengeResponse(self, data=None) -> "EmailUserAccountAuthChallengeResponseEntity":
        """Entity factory: client.EmailUserAccountAuthChallengeResponse().list() / client.EmailUserAccountAuthChallengeResponse().load({"id": ...})."""
        from linear_sdk.entity.email_user_account_auth_challenge_response_entity import EmailUserAccountAuthChallengeResponseEntity
        return EmailUserAccountAuthChallengeResponseEntity(self, data)


    def Emoji(self, data=None) -> "EmojiEntity":
        """Entity factory: client.Emoji().list() / client.Emoji().load({"id": ...})."""
        from linear_sdk.entity.emoji_entity import EmojiEntity
        return EmojiEntity(self, data)


    def EntityExternalLink(self, data=None) -> "EntityExternalLinkEntity":
        """Entity factory: client.EntityExternalLink().list() / client.EntityExternalLink().load({"id": ...})."""
        from linear_sdk.entity.entity_external_link_entity import EntityExternalLinkEntity
        return EntityExternalLinkEntity(self, data)


    def ExternalUser(self, data=None) -> "ExternalUserEntity":
        """Entity factory: client.ExternalUser().list() / client.ExternalUser().load({"id": ...})."""
        from linear_sdk.entity.external_user_entity import ExternalUserEntity
        return ExternalUserEntity(self, data)


    def Favorite(self, data=None) -> "FavoriteEntity":
        """Entity factory: client.Favorite().list() / client.Favorite().load({"id": ...})."""
        from linear_sdk.entity.favorite_entity import FavoriteEntity
        return FavoriteEntity(self, data)


    def GitAutomationState(self, data=None) -> "GitAutomationStateEntity":
        """Entity factory: client.GitAutomationState().list() / client.GitAutomationState().load({"id": ...})."""
        from linear_sdk.entity.git_automation_state_entity import GitAutomationStateEntity
        return GitAutomationStateEntity(self, data)


    def GitAutomationTargetBranch(self, data=None) -> "GitAutomationTargetBranchEntity":
        """Entity factory: client.GitAutomationTargetBranch().list() / client.GitAutomationTargetBranch().load({"id": ...})."""
        from linear_sdk.entity.git_automation_target_branch_entity import GitAutomationTargetBranchEntity
        return GitAutomationTargetBranchEntity(self, data)


    def GitHubIntegrationConnectDetail(self, data=None) -> "GitHubIntegrationConnectDetailEntity":
        """Entity factory: client.GitHubIntegrationConnectDetail().list() / client.GitHubIntegrationConnectDetail().load({"id": ...})."""
        from linear_sdk.entity.git_hub_integration_connect_detail_entity import GitHubIntegrationConnectDetailEntity
        return GitHubIntegrationConnectDetailEntity(self, data)


    def Initiative(self, data=None) -> "InitiativeEntity":
        """Entity factory: client.Initiative().list() / client.Initiative().load({"id": ...})."""
        from linear_sdk.entity.initiative_entity import InitiativeEntity
        return InitiativeEntity(self, data)


    def InitiativeLabel(self, data=None) -> "InitiativeLabelEntity":
        """Entity factory: client.InitiativeLabel().list() / client.InitiativeLabel().load({"id": ...})."""
        from linear_sdk.entity.initiative_label_entity import InitiativeLabelEntity
        return InitiativeLabelEntity(self, data)


    def InitiativeLeadTeamChangeImpact(self, data=None) -> "InitiativeLeadTeamChangeImpactEntity":
        """Entity factory: client.InitiativeLeadTeamChangeImpact().list() / client.InitiativeLeadTeamChangeImpact().load({"id": ...})."""
        from linear_sdk.entity.initiative_lead_team_change_impact_entity import InitiativeLeadTeamChangeImpactEntity
        return InitiativeLeadTeamChangeImpactEntity(self, data)


    def InitiativeRelation(self, data=None) -> "InitiativeRelationEntity":
        """Entity factory: client.InitiativeRelation().list() / client.InitiativeRelation().load({"id": ...})."""
        from linear_sdk.entity.initiative_relation_entity import InitiativeRelationEntity
        return InitiativeRelationEntity(self, data)


    def InitiativeToProject(self, data=None) -> "InitiativeToProjectEntity":
        """Entity factory: client.InitiativeToProject().list() / client.InitiativeToProject().load({"id": ...})."""
        from linear_sdk.entity.initiative_to_project_entity import InitiativeToProjectEntity
        return InitiativeToProjectEntity(self, data)


    def InitiativeUpdate(self, data=None) -> "InitiativeUpdateEntity":
        """Entity factory: client.InitiativeUpdate().list() / client.InitiativeUpdate().load({"id": ...})."""
        from linear_sdk.entity.initiative_update_entity import InitiativeUpdateEntity
        return InitiativeUpdateEntity(self, data)


    def Integration(self, data=None) -> "IntegrationEntity":
        """Entity factory: client.Integration().list() / client.Integration().load({"id": ...})."""
        from linear_sdk.entity.integration_entity import IntegrationEntity
        return IntegrationEntity(self, data)


    def IntegrationTemplate(self, data=None) -> "IntegrationTemplateEntity":
        """Entity factory: client.IntegrationTemplate().list() / client.IntegrationTemplate().load({"id": ...})."""
        from linear_sdk.entity.integration_template_entity import IntegrationTemplateEntity
        return IntegrationTemplateEntity(self, data)


    def IntegrationsSetting(self, data=None) -> "IntegrationsSettingEntity":
        """Entity factory: client.IntegrationsSetting().list() / client.IntegrationsSetting().load({"id": ...})."""
        from linear_sdk.entity.integrations_setting_entity import IntegrationsSettingEntity
        return IntegrationsSettingEntity(self, data)


    def Issue(self, data=None) -> "IssueEntity":
        """Entity factory: client.Issue().list() / client.Issue().load({"id": ...})."""
        from linear_sdk.entity.issue_entity import IssueEntity
        return IssueEntity(self, data)


    def IssueImport(self, data=None) -> "IssueImportEntity":
        """Entity factory: client.IssueImport().list() / client.IssueImport().load({"id": ...})."""
        from linear_sdk.entity.issue_import_entity import IssueImportEntity
        return IssueImportEntity(self, data)


    def IssueLabel(self, data=None) -> "IssueLabelEntity":
        """Entity factory: client.IssueLabel().list() / client.IssueLabel().load({"id": ...})."""
        from linear_sdk.entity.issue_label_entity import IssueLabelEntity
        return IssueLabelEntity(self, data)


    def IssuePriorityValue(self, data=None) -> "IssuePriorityValueEntity":
        """Entity factory: client.IssuePriorityValue().list() / client.IssuePriorityValue().load({"id": ...})."""
        from linear_sdk.entity.issue_priority_value_entity import IssuePriorityValueEntity
        return IssuePriorityValueEntity(self, data)


    def IssueRelation(self, data=None) -> "IssueRelationEntity":
        """Entity factory: client.IssueRelation().list() / client.IssueRelation().load({"id": ...})."""
        from linear_sdk.entity.issue_relation_entity import IssueRelationEntity
        return IssueRelationEntity(self, data)


    def IssueSearchResult(self, data=None) -> "IssueSearchResultEntity":
        """Entity factory: client.IssueSearchResult().list() / client.IssueSearchResult().load({"id": ...})."""
        from linear_sdk.entity.issue_search_result_entity import IssueSearchResultEntity
        return IssueSearchResultEntity(self, data)


    def IssueToRelease(self, data=None) -> "IssueToReleaseEntity":
        """Entity factory: client.IssueToRelease().list() / client.IssueToRelease().load({"id": ...})."""
        from linear_sdk.entity.issue_to_release_entity import IssueToReleaseEntity
        return IssueToReleaseEntity(self, data)


    def LogoutResponse(self, data=None) -> "LogoutResponseEntity":
        """Entity factory: client.LogoutResponse().list() / client.LogoutResponse().load({"id": ...})."""
        from linear_sdk.entity.logout_response_entity import LogoutResponseEntity
        return LogoutResponseEntity(self, data)


    def Notification(self, data=None) -> "NotificationEntity":
        """Entity factory: client.Notification().list() / client.Notification().load({"id": ...})."""
        from linear_sdk.entity.notification_entity import NotificationEntity
        return NotificationEntity(self, data)


    def NotificationSubscription(self, data=None) -> "NotificationSubscriptionEntity":
        """Entity factory: client.NotificationSubscription().list() / client.NotificationSubscription().load({"id": ...})."""
        from linear_sdk.entity.notification_subscription_entity import NotificationSubscriptionEntity
        return NotificationSubscriptionEntity(self, data)


    def OAuthApplication(self, data=None) -> "OAuthApplicationEntity":
        """Entity factory: client.OAuthApplication().list() / client.OAuthApplication().load({"id": ...})."""
        from linear_sdk.entity.o_auth_application_entity import OAuthApplicationEntity
        return OAuthApplicationEntity(self, data)


    def Organization(self, data=None) -> "OrganizationEntity":
        """Entity factory: client.Organization().list() / client.Organization().load({"id": ...})."""
        from linear_sdk.entity.organization_entity import OrganizationEntity
        return OrganizationEntity(self, data)


    def OrganizationDomain(self, data=None) -> "OrganizationDomainEntity":
        """Entity factory: client.OrganizationDomain().list() / client.OrganizationDomain().load({"id": ...})."""
        from linear_sdk.entity.organization_domain_entity import OrganizationDomainEntity
        return OrganizationDomainEntity(self, data)


    def OrganizationInvite(self, data=None) -> "OrganizationInviteEntity":
        """Entity factory: client.OrganizationInvite().list() / client.OrganizationInvite().load({"id": ...})."""
        from linear_sdk.entity.organization_invite_entity import OrganizationInviteEntity
        return OrganizationInviteEntity(self, data)


    def OrganizationMeta(self, data=None) -> "OrganizationMetaEntity":
        """Entity factory: client.OrganizationMeta().list() / client.OrganizationMeta().load({"id": ...})."""
        from linear_sdk.entity.organization_meta_entity import OrganizationMetaEntity
        return OrganizationMetaEntity(self, data)


    def PasskeyLoginStartResponse(self, data=None) -> "PasskeyLoginStartResponseEntity":
        """Entity factory: client.PasskeyLoginStartResponse().list() / client.PasskeyLoginStartResponse().load({"id": ...})."""
        from linear_sdk.entity.passkey_login_start_response_entity import PasskeyLoginStartResponseEntity
        return PasskeyLoginStartResponseEntity(self, data)


    def Project(self, data=None) -> "ProjectEntity":
        """Entity factory: client.Project().list() / client.Project().load({"id": ...})."""
        from linear_sdk.entity.project_entity import ProjectEntity
        return ProjectEntity(self, data)


    def ProjectLabel(self, data=None) -> "ProjectLabelEntity":
        """Entity factory: client.ProjectLabel().list() / client.ProjectLabel().load({"id": ...})."""
        from linear_sdk.entity.project_label_entity import ProjectLabelEntity
        return ProjectLabelEntity(self, data)


    def ProjectMilestone(self, data=None) -> "ProjectMilestoneEntity":
        """Entity factory: client.ProjectMilestone().list() / client.ProjectMilestone().load({"id": ...})."""
        from linear_sdk.entity.project_milestone_entity import ProjectMilestoneEntity
        return ProjectMilestoneEntity(self, data)


    def ProjectMilestoneMoveProjectTeam(self, data=None) -> "ProjectMilestoneMoveProjectTeamEntity":
        """Entity factory: client.ProjectMilestoneMoveProjectTeam().list() / client.ProjectMilestoneMoveProjectTeam().load({"id": ...})."""
        from linear_sdk.entity.project_milestone_move_project_team_entity import ProjectMilestoneMoveProjectTeamEntity
        return ProjectMilestoneMoveProjectTeamEntity(self, data)


    def ProjectRelation(self, data=None) -> "ProjectRelationEntity":
        """Entity factory: client.ProjectRelation().list() / client.ProjectRelation().load({"id": ...})."""
        from linear_sdk.entity.project_relation_entity import ProjectRelationEntity
        return ProjectRelationEntity(self, data)


    def ProjectSearchResult(self, data=None) -> "ProjectSearchResultEntity":
        """Entity factory: client.ProjectSearchResult().list() / client.ProjectSearchResult().load({"id": ...})."""
        from linear_sdk.entity.project_search_result_entity import ProjectSearchResultEntity
        return ProjectSearchResultEntity(self, data)


    def ProjectStatus(self, data=None) -> "ProjectStatusEntity":
        """Entity factory: client.ProjectStatus().list() / client.ProjectStatus().load({"id": ...})."""
        from linear_sdk.entity.project_status_entity import ProjectStatusEntity
        return ProjectStatusEntity(self, data)


    def ProjectUpdate(self, data=None) -> "ProjectUpdateEntity":
        """Entity factory: client.ProjectUpdate().list() / client.ProjectUpdate().load({"id": ...})."""
        from linear_sdk.entity.project_update_entity import ProjectUpdateEntity
        return ProjectUpdateEntity(self, data)


    def PushSubscription(self, data=None) -> "PushSubscriptionEntity":
        """Entity factory: client.PushSubscription().list() / client.PushSubscription().load({"id": ...})."""
        from linear_sdk.entity.push_subscription_entity import PushSubscriptionEntity
        return PushSubscriptionEntity(self, data)


    def Reaction(self, data=None) -> "ReactionEntity":
        """Entity factory: client.Reaction().list() / client.Reaction().load({"id": ...})."""
        from linear_sdk.entity.reaction_entity import ReactionEntity
        return ReactionEntity(self, data)


    def Release(self, data=None) -> "ReleaseEntity":
        """Entity factory: client.Release().list() / client.Release().load({"id": ...})."""
        from linear_sdk.entity.release_entity import ReleaseEntity
        return ReleaseEntity(self, data)


    def ReleaseNote(self, data=None) -> "ReleaseNoteEntity":
        """Entity factory: client.ReleaseNote().list() / client.ReleaseNote().load({"id": ...})."""
        from linear_sdk.entity.release_note_entity import ReleaseNoteEntity
        return ReleaseNoteEntity(self, data)


    def ReleasePipeline(self, data=None) -> "ReleasePipelineEntity":
        """Entity factory: client.ReleasePipeline().list() / client.ReleasePipeline().load({"id": ...})."""
        from linear_sdk.entity.release_pipeline_entity import ReleasePipelineEntity
        return ReleasePipelineEntity(self, data)


    def ReleaseStage(self, data=None) -> "ReleaseStageEntity":
        """Entity factory: client.ReleaseStage().list() / client.ReleaseStage().load({"id": ...})."""
        from linear_sdk.entity.release_stage_entity import ReleaseStageEntity
        return ReleaseStageEntity(self, data)


    def Roadmap(self, data=None) -> "RoadmapEntity":
        """Entity factory: client.Roadmap().list() / client.Roadmap().load({"id": ...})."""
        from linear_sdk.entity.roadmap_entity import RoadmapEntity
        return RoadmapEntity(self, data)


    def RoadmapToProject(self, data=None) -> "RoadmapToProjectEntity":
        """Entity factory: client.RoadmapToProject().list() / client.RoadmapToProject().load({"id": ...})."""
        from linear_sdk.entity.roadmap_to_project_entity import RoadmapToProjectEntity
        return RoadmapToProjectEntity(self, data)


    def SlaConfiguration(self, data=None) -> "SlaConfigurationEntity":
        """Entity factory: client.SlaConfiguration().list() / client.SlaConfiguration().load({"id": ...})."""
        from linear_sdk.entity.sla_configuration_entity import SlaConfigurationEntity
        return SlaConfigurationEntity(self, data)


    def SsoUrlFromEmailResponse(self, data=None) -> "SsoUrlFromEmailResponseEntity":
        """Entity factory: client.SsoUrlFromEmailResponse().list() / client.SsoUrlFromEmailResponse().load({"id": ...})."""
        from linear_sdk.entity.sso_url_from_email_response_entity import SsoUrlFromEmailResponseEntity
        return SsoUrlFromEmailResponseEntity(self, data)


    def Team(self, data=None) -> "TeamEntity":
        """Entity factory: client.Team().list() / client.Team().load({"id": ...})."""
        from linear_sdk.entity.team_entity import TeamEntity
        return TeamEntity(self, data)


    def TeamMembership(self, data=None) -> "TeamMembershipEntity":
        """Entity factory: client.TeamMembership().list() / client.TeamMembership().load({"id": ...})."""
        from linear_sdk.entity.team_membership_entity import TeamMembershipEntity
        return TeamMembershipEntity(self, data)


    def Template(self, data=None) -> "TemplateEntity":
        """Entity factory: client.Template().list() / client.Template().load({"id": ...})."""
        from linear_sdk.entity.template_entity import TemplateEntity
        return TemplateEntity(self, data)


    def TimeSchedule(self, data=None) -> "TimeScheduleEntity":
        """Entity factory: client.TimeSchedule().list() / client.TimeSchedule().load({"id": ...})."""
        from linear_sdk.entity.time_schedule_entity import TimeScheduleEntity
        return TimeScheduleEntity(self, data)


    def TriageResponsibility(self, data=None) -> "TriageResponsibilityEntity":
        """Entity factory: client.TriageResponsibility().list() / client.TriageResponsibility().load({"id": ...})."""
        from linear_sdk.entity.triage_responsibility_entity import TriageResponsibilityEntity
        return TriageResponsibilityEntity(self, data)


    def UploadFile(self, data=None) -> "UploadFileEntity":
        """Entity factory: client.UploadFile().list() / client.UploadFile().load({"id": ...})."""
        from linear_sdk.entity.upload_file_entity import UploadFileEntity
        return UploadFileEntity(self, data)


    def UsageAlert(self, data=None) -> "UsageAlertEntity":
        """Entity factory: client.UsageAlert().list() / client.UsageAlert().load({"id": ...})."""
        from linear_sdk.entity.usage_alert_entity import UsageAlertEntity
        return UsageAlertEntity(self, data)


    def User(self, data=None) -> "UserEntity":
        """Entity factory: client.User().list() / client.User().load({"id": ...})."""
        from linear_sdk.entity.user_entity import UserEntity
        return UserEntity(self, data)


    def UserSetting(self, data=None) -> "UserSettingEntity":
        """Entity factory: client.UserSetting().list() / client.UserSetting().load({"id": ...})."""
        from linear_sdk.entity.user_setting_entity import UserSettingEntity
        return UserSettingEntity(self, data)


    def ViewPreference(self, data=None) -> "ViewPreferenceEntity":
        """Entity factory: client.ViewPreference().list() / client.ViewPreference().load({"id": ...})."""
        from linear_sdk.entity.view_preference_entity import ViewPreferenceEntity
        return ViewPreferenceEntity(self, data)


    def Webhook(self, data=None) -> "WebhookEntity":
        """Entity factory: client.Webhook().list() / client.Webhook().load({"id": ...})."""
        from linear_sdk.entity.webhook_entity import WebhookEntity
        return WebhookEntity(self, data)


    def WebhookFailureEvent(self, data=None) -> "WebhookFailureEventEntity":
        """Entity factory: client.WebhookFailureEvent().list() / client.WebhookFailureEvent().load({"id": ...})."""
        from linear_sdk.entity.webhook_failure_event_entity import WebhookFailureEventEntity
        return WebhookFailureEventEntity(self, data)


    def WorkflowState(self, data=None) -> "WorkflowStateEntity":
        """Entity factory: client.WorkflowState().list() / client.WorkflowState().load({"id": ...})."""
        from linear_sdk.entity.workflow_state_entity import WorkflowStateEntity
        return WorkflowStateEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "LinearSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from linear_sdk.entity.access_key_release_entity import AccessKeyReleaseEntity
    from linear_sdk.entity.access_key_release_pipeline_entity import AccessKeyReleasePipelineEntity
    from linear_sdk.entity.agent_activity_entity import AgentActivityEntity
    from linear_sdk.entity.agent_session_entity import AgentSessionEntity
    from linear_sdk.entity.agent_skill_entity import AgentSkillEntity
    from linear_sdk.entity.application_entity import ApplicationEntity
    from linear_sdk.entity.attachment_entity import AttachmentEntity
    from linear_sdk.entity.audit_entry_entity import AuditEntryEntity
    from linear_sdk.entity.audit_entry_type_entity import AuditEntryTypeEntity
    from linear_sdk.entity.auth_resolver_response_entity import AuthResolverResponseEntity
    from linear_sdk.entity.authentication_session_response_entity import AuthenticationSessionResponseEntity
    from linear_sdk.entity.comment_entity import CommentEntity
    from linear_sdk.entity.create_or_join_organization_response_entity import CreateOrJoinOrganizationResponseEntity
    from linear_sdk.entity.custom_view_entity import CustomViewEntity
    from linear_sdk.entity.customer_entity import CustomerEntity
    from linear_sdk.entity.customer_need_entity import CustomerNeedEntity
    from linear_sdk.entity.customer_status_entity import CustomerStatusEntity
    from linear_sdk.entity.customer_tier_entity import CustomerTierEntity
    from linear_sdk.entity.cycle_entity import CycleEntity
    from linear_sdk.entity.diff_entity import DiffEntity
    from linear_sdk.entity.document_entity import DocumentEntity
    from linear_sdk.entity.document_search_result_entity import DocumentSearchResultEntity
    from linear_sdk.entity.email_intake_address_entity import EmailIntakeAddressEntity
    from linear_sdk.entity.email_user_account_auth_challenge_response_entity import EmailUserAccountAuthChallengeResponseEntity
    from linear_sdk.entity.emoji_entity import EmojiEntity
    from linear_sdk.entity.entity_external_link_entity import EntityExternalLinkEntity
    from linear_sdk.entity.external_user_entity import ExternalUserEntity
    from linear_sdk.entity.favorite_entity import FavoriteEntity
    from linear_sdk.entity.git_automation_state_entity import GitAutomationStateEntity
    from linear_sdk.entity.git_automation_target_branch_entity import GitAutomationTargetBranchEntity
    from linear_sdk.entity.git_hub_integration_connect_detail_entity import GitHubIntegrationConnectDetailEntity
    from linear_sdk.entity.initiative_entity import InitiativeEntity
    from linear_sdk.entity.initiative_label_entity import InitiativeLabelEntity
    from linear_sdk.entity.initiative_lead_team_change_impact_entity import InitiativeLeadTeamChangeImpactEntity
    from linear_sdk.entity.initiative_relation_entity import InitiativeRelationEntity
    from linear_sdk.entity.initiative_to_project_entity import InitiativeToProjectEntity
    from linear_sdk.entity.initiative_update_entity import InitiativeUpdateEntity
    from linear_sdk.entity.integration_entity import IntegrationEntity
    from linear_sdk.entity.integration_template_entity import IntegrationTemplateEntity
    from linear_sdk.entity.integrations_setting_entity import IntegrationsSettingEntity
    from linear_sdk.entity.issue_entity import IssueEntity
    from linear_sdk.entity.issue_import_entity import IssueImportEntity
    from linear_sdk.entity.issue_label_entity import IssueLabelEntity
    from linear_sdk.entity.issue_priority_value_entity import IssuePriorityValueEntity
    from linear_sdk.entity.issue_relation_entity import IssueRelationEntity
    from linear_sdk.entity.issue_search_result_entity import IssueSearchResultEntity
    from linear_sdk.entity.issue_to_release_entity import IssueToReleaseEntity
    from linear_sdk.entity.logout_response_entity import LogoutResponseEntity
    from linear_sdk.entity.notification_entity import NotificationEntity
    from linear_sdk.entity.notification_subscription_entity import NotificationSubscriptionEntity
    from linear_sdk.entity.o_auth_application_entity import OAuthApplicationEntity
    from linear_sdk.entity.organization_entity import OrganizationEntity
    from linear_sdk.entity.organization_domain_entity import OrganizationDomainEntity
    from linear_sdk.entity.organization_invite_entity import OrganizationInviteEntity
    from linear_sdk.entity.organization_meta_entity import OrganizationMetaEntity
    from linear_sdk.entity.passkey_login_start_response_entity import PasskeyLoginStartResponseEntity
    from linear_sdk.entity.project_entity import ProjectEntity
    from linear_sdk.entity.project_label_entity import ProjectLabelEntity
    from linear_sdk.entity.project_milestone_entity import ProjectMilestoneEntity
    from linear_sdk.entity.project_milestone_move_project_team_entity import ProjectMilestoneMoveProjectTeamEntity
    from linear_sdk.entity.project_relation_entity import ProjectRelationEntity
    from linear_sdk.entity.project_search_result_entity import ProjectSearchResultEntity
    from linear_sdk.entity.project_status_entity import ProjectStatusEntity
    from linear_sdk.entity.project_update_entity import ProjectUpdateEntity
    from linear_sdk.entity.push_subscription_entity import PushSubscriptionEntity
    from linear_sdk.entity.reaction_entity import ReactionEntity
    from linear_sdk.entity.release_entity import ReleaseEntity
    from linear_sdk.entity.release_note_entity import ReleaseNoteEntity
    from linear_sdk.entity.release_pipeline_entity import ReleasePipelineEntity
    from linear_sdk.entity.release_stage_entity import ReleaseStageEntity
    from linear_sdk.entity.roadmap_entity import RoadmapEntity
    from linear_sdk.entity.roadmap_to_project_entity import RoadmapToProjectEntity
    from linear_sdk.entity.sla_configuration_entity import SlaConfigurationEntity
    from linear_sdk.entity.sso_url_from_email_response_entity import SsoUrlFromEmailResponseEntity
    from linear_sdk.entity.team_entity import TeamEntity
    from linear_sdk.entity.team_membership_entity import TeamMembershipEntity
    from linear_sdk.entity.template_entity import TemplateEntity
    from linear_sdk.entity.time_schedule_entity import TimeScheduleEntity
    from linear_sdk.entity.triage_responsibility_entity import TriageResponsibilityEntity
    from linear_sdk.entity.upload_file_entity import UploadFileEntity
    from linear_sdk.entity.usage_alert_entity import UsageAlertEntity
    from linear_sdk.entity.user_entity import UserEntity
    from linear_sdk.entity.user_setting_entity import UserSettingEntity
    from linear_sdk.entity.view_preference_entity import ViewPreferenceEntity
    from linear_sdk.entity.webhook_entity import WebhookEntity
    from linear_sdk.entity.webhook_failure_event_entity import WebhookFailureEventEntity
    from linear_sdk.entity.workflow_state_entity import WorkflowStateEntity
