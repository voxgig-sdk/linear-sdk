"use strict";
// Linear Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.LinearSDK = exports.LinearEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const AccessKeyReleaseEntity_1 = require("./entity/AccessKeyReleaseEntity");
const AccessKeyReleasePipelineEntity_1 = require("./entity/AccessKeyReleasePipelineEntity");
const AgentActivityEntity_1 = require("./entity/AgentActivityEntity");
const AgentSessionEntity_1 = require("./entity/AgentSessionEntity");
const AgentSkillEntity_1 = require("./entity/AgentSkillEntity");
const ApplicationEntity_1 = require("./entity/ApplicationEntity");
const AttachmentEntity_1 = require("./entity/AttachmentEntity");
const AuditEntryEntity_1 = require("./entity/AuditEntryEntity");
const AuditEntryTypeEntity_1 = require("./entity/AuditEntryTypeEntity");
const AuthResolverResponseEntity_1 = require("./entity/AuthResolverResponseEntity");
const AuthenticationSessionResponseEntity_1 = require("./entity/AuthenticationSessionResponseEntity");
const CommentEntity_1 = require("./entity/CommentEntity");
const CreateOrJoinOrganizationResponseEntity_1 = require("./entity/CreateOrJoinOrganizationResponseEntity");
const CustomViewEntity_1 = require("./entity/CustomViewEntity");
const CustomerEntity_1 = require("./entity/CustomerEntity");
const CustomerNeedEntity_1 = require("./entity/CustomerNeedEntity");
const CustomerStatusEntity_1 = require("./entity/CustomerStatusEntity");
const CustomerTierEntity_1 = require("./entity/CustomerTierEntity");
const CycleEntity_1 = require("./entity/CycleEntity");
const DiffEntity_1 = require("./entity/DiffEntity");
const DocumentEntity_1 = require("./entity/DocumentEntity");
const DocumentSearchResultEntity_1 = require("./entity/DocumentSearchResultEntity");
const EmailIntakeAddressEntity_1 = require("./entity/EmailIntakeAddressEntity");
const EmailUserAccountAuthChallengeResponseEntity_1 = require("./entity/EmailUserAccountAuthChallengeResponseEntity");
const EmojiEntity_1 = require("./entity/EmojiEntity");
const EntityExternalLinkEntity_1 = require("./entity/EntityExternalLinkEntity");
const ExternalUserEntity_1 = require("./entity/ExternalUserEntity");
const FavoriteEntity_1 = require("./entity/FavoriteEntity");
const GitAutomationStateEntity_1 = require("./entity/GitAutomationStateEntity");
const GitAutomationTargetBranchEntity_1 = require("./entity/GitAutomationTargetBranchEntity");
const GitHubIntegrationConnectDetailEntity_1 = require("./entity/GitHubIntegrationConnectDetailEntity");
const InitiativeEntity_1 = require("./entity/InitiativeEntity");
const InitiativeLabelEntity_1 = require("./entity/InitiativeLabelEntity");
const InitiativeLeadTeamChangeImpactEntity_1 = require("./entity/InitiativeLeadTeamChangeImpactEntity");
const InitiativeRelationEntity_1 = require("./entity/InitiativeRelationEntity");
const InitiativeToProjectEntity_1 = require("./entity/InitiativeToProjectEntity");
const InitiativeUpdateEntity_1 = require("./entity/InitiativeUpdateEntity");
const IntegrationEntity_1 = require("./entity/IntegrationEntity");
const IntegrationTemplateEntity_1 = require("./entity/IntegrationTemplateEntity");
const IntegrationsSettingEntity_1 = require("./entity/IntegrationsSettingEntity");
const IssueEntity_1 = require("./entity/IssueEntity");
const IssueImportEntity_1 = require("./entity/IssueImportEntity");
const IssueLabelEntity_1 = require("./entity/IssueLabelEntity");
const IssuePriorityValueEntity_1 = require("./entity/IssuePriorityValueEntity");
const IssueRelationEntity_1 = require("./entity/IssueRelationEntity");
const IssueSearchResultEntity_1 = require("./entity/IssueSearchResultEntity");
const IssueToReleaseEntity_1 = require("./entity/IssueToReleaseEntity");
const LogoutResponseEntity_1 = require("./entity/LogoutResponseEntity");
const NotificationEntity_1 = require("./entity/NotificationEntity");
const NotificationSubscriptionEntity_1 = require("./entity/NotificationSubscriptionEntity");
const OAuthApplicationEntity_1 = require("./entity/OAuthApplicationEntity");
const OrganizationEntity_1 = require("./entity/OrganizationEntity");
const OrganizationDomainEntity_1 = require("./entity/OrganizationDomainEntity");
const OrganizationInviteEntity_1 = require("./entity/OrganizationInviteEntity");
const OrganizationMetaEntity_1 = require("./entity/OrganizationMetaEntity");
const PasskeyLoginStartResponseEntity_1 = require("./entity/PasskeyLoginStartResponseEntity");
const ProjectEntity_1 = require("./entity/ProjectEntity");
const ProjectLabelEntity_1 = require("./entity/ProjectLabelEntity");
const ProjectMilestoneEntity_1 = require("./entity/ProjectMilestoneEntity");
const ProjectMilestoneMoveProjectTeamEntity_1 = require("./entity/ProjectMilestoneMoveProjectTeamEntity");
const ProjectRelationEntity_1 = require("./entity/ProjectRelationEntity");
const ProjectSearchResultEntity_1 = require("./entity/ProjectSearchResultEntity");
const ProjectStatusEntity_1 = require("./entity/ProjectStatusEntity");
const ProjectUpdateEntity_1 = require("./entity/ProjectUpdateEntity");
const PushSubscriptionEntity_1 = require("./entity/PushSubscriptionEntity");
const ReactionEntity_1 = require("./entity/ReactionEntity");
const ReleaseEntity_1 = require("./entity/ReleaseEntity");
const ReleaseNoteEntity_1 = require("./entity/ReleaseNoteEntity");
const ReleasePipelineEntity_1 = require("./entity/ReleasePipelineEntity");
const ReleaseStageEntity_1 = require("./entity/ReleaseStageEntity");
const RoadmapEntity_1 = require("./entity/RoadmapEntity");
const RoadmapToProjectEntity_1 = require("./entity/RoadmapToProjectEntity");
const SlaConfigurationEntity_1 = require("./entity/SlaConfigurationEntity");
const SsoUrlFromEmailResponseEntity_1 = require("./entity/SsoUrlFromEmailResponseEntity");
const TeamEntity_1 = require("./entity/TeamEntity");
const TeamMembershipEntity_1 = require("./entity/TeamMembershipEntity");
const TemplateEntity_1 = require("./entity/TemplateEntity");
const TimeScheduleEntity_1 = require("./entity/TimeScheduleEntity");
const TriageResponsibilityEntity_1 = require("./entity/TriageResponsibilityEntity");
const UploadFileEntity_1 = require("./entity/UploadFileEntity");
const UsageAlertEntity_1 = require("./entity/UsageAlertEntity");
const UserEntity_1 = require("./entity/UserEntity");
const UserSettingEntity_1 = require("./entity/UserSettingEntity");
const ViewPreferenceEntity_1 = require("./entity/ViewPreferenceEntity");
const WebhookEntity_1 = require("./entity/WebhookEntity");
const WebhookFailureEventEntity_1 = require("./entity/WebhookFailureEventEntity");
const WorkflowStateEntity_1 = require("./entity/WorkflowStateEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const LinearEntityBase_1 = require("./LinearEntityBase");
Object.defineProperty(exports, "LinearEntityBase", { enumerable: true, get: function () { return LinearEntityBase_1.LinearEntityBase; } });
const Utility_1 = require("./utility/Utility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class LinearSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        const spec = {
            base: options.base,
            prefix: options.prefix,
            suffix: options.suffix,
            path: fetchargs.path || '',
            method: fetchargs.method || 'GET',
            params: fetchargs.params || {},
            query: fetchargs.query || {},
            headers: prepareHeaders(ctx),
            body: fetchargs.body,
            step: 'start',
        };
        ctx.spec = spec;
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!this._options.allow.op.includes('direct')) {
            return {
                ok: false,
                err: new Error('LinearSDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return fetchdef;
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: fetched };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            if (!noBody) {
                try {
                    json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                }
                catch (parseErr) {
                    // Body wasn't valid JSON — surface the raw response rather than
                    // throwing. data stays undefined; callers can inspect status/headers.
                    json = undefined;
                }
            }
            return {
                ok: status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
            };
        }
        catch (err) {
            return { ok: false, err };
        }
    }
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!options.allow.op.includes('graphql')) {
            return {
                ok: false,
                err: new Error('LinearSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        if (res instanceof Error) {
            return res;
        }
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('LinearSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.AccessKeyRelease().list()` / `client.AccessKeyRelease().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AccessKeyRelease(entopts) {
        const self = this;
        return new AccessKeyReleaseEntity_1.AccessKeyReleaseEntity(self, entopts);
    }
    // Entity access: `client.AccessKeyReleasePipeline().list()` / `client.AccessKeyReleasePipeline().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AccessKeyReleasePipeline(entopts) {
        const self = this;
        return new AccessKeyReleasePipelineEntity_1.AccessKeyReleasePipelineEntity(self, entopts);
    }
    // Entity access: `client.AgentActivity().list()` / `client.AgentActivity().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AgentActivity(entopts) {
        const self = this;
        return new AgentActivityEntity_1.AgentActivityEntity(self, entopts);
    }
    // Entity access: `client.AgentSession().list()` / `client.AgentSession().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AgentSession(entopts) {
        const self = this;
        return new AgentSessionEntity_1.AgentSessionEntity(self, entopts);
    }
    // Entity access: `client.AgentSkill().list()` / `client.AgentSkill().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AgentSkill(entopts) {
        const self = this;
        return new AgentSkillEntity_1.AgentSkillEntity(self, entopts);
    }
    // Entity access: `client.Application().list()` / `client.Application().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Application(entopts) {
        const self = this;
        return new ApplicationEntity_1.ApplicationEntity(self, entopts);
    }
    // Entity access: `client.Attachment().list()` / `client.Attachment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Attachment(entopts) {
        const self = this;
        return new AttachmentEntity_1.AttachmentEntity(self, entopts);
    }
    // Entity access: `client.AuditEntry().list()` / `client.AuditEntry().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AuditEntry(entopts) {
        const self = this;
        return new AuditEntryEntity_1.AuditEntryEntity(self, entopts);
    }
    // Entity access: `client.AuditEntryType().list()` / `client.AuditEntryType().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AuditEntryType(entopts) {
        const self = this;
        return new AuditEntryTypeEntity_1.AuditEntryTypeEntity(self, entopts);
    }
    // Entity access: `client.AuthResolverResponse().list()` / `client.AuthResolverResponse().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AuthResolverResponse(entopts) {
        const self = this;
        return new AuthResolverResponseEntity_1.AuthResolverResponseEntity(self, entopts);
    }
    // Entity access: `client.AuthenticationSessionResponse().list()` / `client.AuthenticationSessionResponse().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AuthenticationSessionResponse(entopts) {
        const self = this;
        return new AuthenticationSessionResponseEntity_1.AuthenticationSessionResponseEntity(self, entopts);
    }
    // Entity access: `client.Comment().list()` / `client.Comment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Comment(entopts) {
        const self = this;
        return new CommentEntity_1.CommentEntity(self, entopts);
    }
    // Entity access: `client.CreateOrJoinOrganizationResponse().list()` / `client.CreateOrJoinOrganizationResponse().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CreateOrJoinOrganizationResponse(entopts) {
        const self = this;
        return new CreateOrJoinOrganizationResponseEntity_1.CreateOrJoinOrganizationResponseEntity(self, entopts);
    }
    // Entity access: `client.CustomView().list()` / `client.CustomView().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CustomView(entopts) {
        const self = this;
        return new CustomViewEntity_1.CustomViewEntity(self, entopts);
    }
    // Entity access: `client.Customer().list()` / `client.Customer().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Customer(entopts) {
        const self = this;
        return new CustomerEntity_1.CustomerEntity(self, entopts);
    }
    // Entity access: `client.CustomerNeed().list()` / `client.CustomerNeed().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CustomerNeed(entopts) {
        const self = this;
        return new CustomerNeedEntity_1.CustomerNeedEntity(self, entopts);
    }
    // Entity access: `client.CustomerStatus().list()` / `client.CustomerStatus().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CustomerStatus(entopts) {
        const self = this;
        return new CustomerStatusEntity_1.CustomerStatusEntity(self, entopts);
    }
    // Entity access: `client.CustomerTier().list()` / `client.CustomerTier().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CustomerTier(entopts) {
        const self = this;
        return new CustomerTierEntity_1.CustomerTierEntity(self, entopts);
    }
    // Entity access: `client.Cycle().list()` / `client.Cycle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Cycle(entopts) {
        const self = this;
        return new CycleEntity_1.CycleEntity(self, entopts);
    }
    // Entity access: `client.Diff().list()` / `client.Diff().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Diff(entopts) {
        const self = this;
        return new DiffEntity_1.DiffEntity(self, entopts);
    }
    // Entity access: `client.Document().list()` / `client.Document().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Document(entopts) {
        const self = this;
        return new DocumentEntity_1.DocumentEntity(self, entopts);
    }
    // Entity access: `client.DocumentSearchResult().list()` / `client.DocumentSearchResult().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DocumentSearchResult(entopts) {
        const self = this;
        return new DocumentSearchResultEntity_1.DocumentSearchResultEntity(self, entopts);
    }
    // Entity access: `client.EmailIntakeAddress().list()` / `client.EmailIntakeAddress().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EmailIntakeAddress(entopts) {
        const self = this;
        return new EmailIntakeAddressEntity_1.EmailIntakeAddressEntity(self, entopts);
    }
    // Entity access: `client.EmailUserAccountAuthChallengeResponse().list()` / `client.EmailUserAccountAuthChallengeResponse().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EmailUserAccountAuthChallengeResponse(entopts) {
        const self = this;
        return new EmailUserAccountAuthChallengeResponseEntity_1.EmailUserAccountAuthChallengeResponseEntity(self, entopts);
    }
    // Entity access: `client.Emoji().list()` / `client.Emoji().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Emoji(entopts) {
        const self = this;
        return new EmojiEntity_1.EmojiEntity(self, entopts);
    }
    // Entity access: `client.EntityExternalLink().list()` / `client.EntityExternalLink().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EntityExternalLink(entopts) {
        const self = this;
        return new EntityExternalLinkEntity_1.EntityExternalLinkEntity(self, entopts);
    }
    // Entity access: `client.ExternalUser().list()` / `client.ExternalUser().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ExternalUser(entopts) {
        const self = this;
        return new ExternalUserEntity_1.ExternalUserEntity(self, entopts);
    }
    // Entity access: `client.Favorite().list()` / `client.Favorite().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Favorite(entopts) {
        const self = this;
        return new FavoriteEntity_1.FavoriteEntity(self, entopts);
    }
    // Entity access: `client.GitAutomationState().list()` / `client.GitAutomationState().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GitAutomationState(entopts) {
        const self = this;
        return new GitAutomationStateEntity_1.GitAutomationStateEntity(self, entopts);
    }
    // Entity access: `client.GitAutomationTargetBranch().list()` / `client.GitAutomationTargetBranch().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GitAutomationTargetBranch(entopts) {
        const self = this;
        return new GitAutomationTargetBranchEntity_1.GitAutomationTargetBranchEntity(self, entopts);
    }
    // Entity access: `client.GitHubIntegrationConnectDetail().list()` / `client.GitHubIntegrationConnectDetail().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GitHubIntegrationConnectDetail(entopts) {
        const self = this;
        return new GitHubIntegrationConnectDetailEntity_1.GitHubIntegrationConnectDetailEntity(self, entopts);
    }
    // Entity access: `client.Initiative().list()` / `client.Initiative().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Initiative(entopts) {
        const self = this;
        return new InitiativeEntity_1.InitiativeEntity(self, entopts);
    }
    // Entity access: `client.InitiativeLabel().list()` / `client.InitiativeLabel().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    InitiativeLabel(entopts) {
        const self = this;
        return new InitiativeLabelEntity_1.InitiativeLabelEntity(self, entopts);
    }
    // Entity access: `client.InitiativeLeadTeamChangeImpact().list()` / `client.InitiativeLeadTeamChangeImpact().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    InitiativeLeadTeamChangeImpact(entopts) {
        const self = this;
        return new InitiativeLeadTeamChangeImpactEntity_1.InitiativeLeadTeamChangeImpactEntity(self, entopts);
    }
    // Entity access: `client.InitiativeRelation().list()` / `client.InitiativeRelation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    InitiativeRelation(entopts) {
        const self = this;
        return new InitiativeRelationEntity_1.InitiativeRelationEntity(self, entopts);
    }
    // Entity access: `client.InitiativeToProject().list()` / `client.InitiativeToProject().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    InitiativeToProject(entopts) {
        const self = this;
        return new InitiativeToProjectEntity_1.InitiativeToProjectEntity(self, entopts);
    }
    // Entity access: `client.InitiativeUpdate().list()` / `client.InitiativeUpdate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    InitiativeUpdate(entopts) {
        const self = this;
        return new InitiativeUpdateEntity_1.InitiativeUpdateEntity(self, entopts);
    }
    // Entity access: `client.Integration().list()` / `client.Integration().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Integration(entopts) {
        const self = this;
        return new IntegrationEntity_1.IntegrationEntity(self, entopts);
    }
    // Entity access: `client.IntegrationTemplate().list()` / `client.IntegrationTemplate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IntegrationTemplate(entopts) {
        const self = this;
        return new IntegrationTemplateEntity_1.IntegrationTemplateEntity(self, entopts);
    }
    // Entity access: `client.IntegrationsSetting().list()` / `client.IntegrationsSetting().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IntegrationsSetting(entopts) {
        const self = this;
        return new IntegrationsSettingEntity_1.IntegrationsSettingEntity(self, entopts);
    }
    // Entity access: `client.Issue().list()` / `client.Issue().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Issue(entopts) {
        const self = this;
        return new IssueEntity_1.IssueEntity(self, entopts);
    }
    // Entity access: `client.IssueImport().list()` / `client.IssueImport().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IssueImport(entopts) {
        const self = this;
        return new IssueImportEntity_1.IssueImportEntity(self, entopts);
    }
    // Entity access: `client.IssueLabel().list()` / `client.IssueLabel().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IssueLabel(entopts) {
        const self = this;
        return new IssueLabelEntity_1.IssueLabelEntity(self, entopts);
    }
    // Entity access: `client.IssuePriorityValue().list()` / `client.IssuePriorityValue().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IssuePriorityValue(entopts) {
        const self = this;
        return new IssuePriorityValueEntity_1.IssuePriorityValueEntity(self, entopts);
    }
    // Entity access: `client.IssueRelation().list()` / `client.IssueRelation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IssueRelation(entopts) {
        const self = this;
        return new IssueRelationEntity_1.IssueRelationEntity(self, entopts);
    }
    // Entity access: `client.IssueSearchResult().list()` / `client.IssueSearchResult().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IssueSearchResult(entopts) {
        const self = this;
        return new IssueSearchResultEntity_1.IssueSearchResultEntity(self, entopts);
    }
    // Entity access: `client.IssueToRelease().list()` / `client.IssueToRelease().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IssueToRelease(entopts) {
        const self = this;
        return new IssueToReleaseEntity_1.IssueToReleaseEntity(self, entopts);
    }
    // Entity access: `client.LogoutResponse().list()` / `client.LogoutResponse().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    LogoutResponse(entopts) {
        const self = this;
        return new LogoutResponseEntity_1.LogoutResponseEntity(self, entopts);
    }
    // Entity access: `client.Notification().list()` / `client.Notification().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Notification(entopts) {
        const self = this;
        return new NotificationEntity_1.NotificationEntity(self, entopts);
    }
    // Entity access: `client.NotificationSubscription().list()` / `client.NotificationSubscription().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NotificationSubscription(entopts) {
        const self = this;
        return new NotificationSubscriptionEntity_1.NotificationSubscriptionEntity(self, entopts);
    }
    // Entity access: `client.OAuthApplication().list()` / `client.OAuthApplication().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OAuthApplication(entopts) {
        const self = this;
        return new OAuthApplicationEntity_1.OAuthApplicationEntity(self, entopts);
    }
    // Entity access: `client.Organization().list()` / `client.Organization().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Organization(entopts) {
        const self = this;
        return new OrganizationEntity_1.OrganizationEntity(self, entopts);
    }
    // Entity access: `client.OrganizationDomain().list()` / `client.OrganizationDomain().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OrganizationDomain(entopts) {
        const self = this;
        return new OrganizationDomainEntity_1.OrganizationDomainEntity(self, entopts);
    }
    // Entity access: `client.OrganizationInvite().list()` / `client.OrganizationInvite().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OrganizationInvite(entopts) {
        const self = this;
        return new OrganizationInviteEntity_1.OrganizationInviteEntity(self, entopts);
    }
    // Entity access: `client.OrganizationMeta().list()` / `client.OrganizationMeta().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OrganizationMeta(entopts) {
        const self = this;
        return new OrganizationMetaEntity_1.OrganizationMetaEntity(self, entopts);
    }
    // Entity access: `client.PasskeyLoginStartResponse().list()` / `client.PasskeyLoginStartResponse().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PasskeyLoginStartResponse(entopts) {
        const self = this;
        return new PasskeyLoginStartResponseEntity_1.PasskeyLoginStartResponseEntity(self, entopts);
    }
    // Entity access: `client.Project().list()` / `client.Project().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Project(entopts) {
        const self = this;
        return new ProjectEntity_1.ProjectEntity(self, entopts);
    }
    // Entity access: `client.ProjectLabel().list()` / `client.ProjectLabel().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectLabel(entopts) {
        const self = this;
        return new ProjectLabelEntity_1.ProjectLabelEntity(self, entopts);
    }
    // Entity access: `client.ProjectMilestone().list()` / `client.ProjectMilestone().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectMilestone(entopts) {
        const self = this;
        return new ProjectMilestoneEntity_1.ProjectMilestoneEntity(self, entopts);
    }
    // Entity access: `client.ProjectMilestoneMoveProjectTeam().list()` / `client.ProjectMilestoneMoveProjectTeam().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectMilestoneMoveProjectTeam(entopts) {
        const self = this;
        return new ProjectMilestoneMoveProjectTeamEntity_1.ProjectMilestoneMoveProjectTeamEntity(self, entopts);
    }
    // Entity access: `client.ProjectRelation().list()` / `client.ProjectRelation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectRelation(entopts) {
        const self = this;
        return new ProjectRelationEntity_1.ProjectRelationEntity(self, entopts);
    }
    // Entity access: `client.ProjectSearchResult().list()` / `client.ProjectSearchResult().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectSearchResult(entopts) {
        const self = this;
        return new ProjectSearchResultEntity_1.ProjectSearchResultEntity(self, entopts);
    }
    // Entity access: `client.ProjectStatus().list()` / `client.ProjectStatus().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectStatus(entopts) {
        const self = this;
        return new ProjectStatusEntity_1.ProjectStatusEntity(self, entopts);
    }
    // Entity access: `client.ProjectUpdate().list()` / `client.ProjectUpdate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectUpdate(entopts) {
        const self = this;
        return new ProjectUpdateEntity_1.ProjectUpdateEntity(self, entopts);
    }
    // Entity access: `client.PushSubscription().list()` / `client.PushSubscription().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PushSubscription(entopts) {
        const self = this;
        return new PushSubscriptionEntity_1.PushSubscriptionEntity(self, entopts);
    }
    // Entity access: `client.Reaction().list()` / `client.Reaction().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Reaction(entopts) {
        const self = this;
        return new ReactionEntity_1.ReactionEntity(self, entopts);
    }
    // Entity access: `client.Release().list()` / `client.Release().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Release(entopts) {
        const self = this;
        return new ReleaseEntity_1.ReleaseEntity(self, entopts);
    }
    // Entity access: `client.ReleaseNote().list()` / `client.ReleaseNote().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ReleaseNote(entopts) {
        const self = this;
        return new ReleaseNoteEntity_1.ReleaseNoteEntity(self, entopts);
    }
    // Entity access: `client.ReleasePipeline().list()` / `client.ReleasePipeline().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ReleasePipeline(entopts) {
        const self = this;
        return new ReleasePipelineEntity_1.ReleasePipelineEntity(self, entopts);
    }
    // Entity access: `client.ReleaseStage().list()` / `client.ReleaseStage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ReleaseStage(entopts) {
        const self = this;
        return new ReleaseStageEntity_1.ReleaseStageEntity(self, entopts);
    }
    // Entity access: `client.Roadmap().list()` / `client.Roadmap().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Roadmap(entopts) {
        const self = this;
        return new RoadmapEntity_1.RoadmapEntity(self, entopts);
    }
    // Entity access: `client.RoadmapToProject().list()` / `client.RoadmapToProject().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RoadmapToProject(entopts) {
        const self = this;
        return new RoadmapToProjectEntity_1.RoadmapToProjectEntity(self, entopts);
    }
    // Entity access: `client.SlaConfiguration().list()` / `client.SlaConfiguration().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SlaConfiguration(entopts) {
        const self = this;
        return new SlaConfigurationEntity_1.SlaConfigurationEntity(self, entopts);
    }
    // Entity access: `client.SsoUrlFromEmailResponse().list()` / `client.SsoUrlFromEmailResponse().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SsoUrlFromEmailResponse(entopts) {
        const self = this;
        return new SsoUrlFromEmailResponseEntity_1.SsoUrlFromEmailResponseEntity(self, entopts);
    }
    // Entity access: `client.Team().list()` / `client.Team().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Team(entopts) {
        const self = this;
        return new TeamEntity_1.TeamEntity(self, entopts);
    }
    // Entity access: `client.TeamMembership().list()` / `client.TeamMembership().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TeamMembership(entopts) {
        const self = this;
        return new TeamMembershipEntity_1.TeamMembershipEntity(self, entopts);
    }
    // Entity access: `client.Template().list()` / `client.Template().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Template(entopts) {
        const self = this;
        return new TemplateEntity_1.TemplateEntity(self, entopts);
    }
    // Entity access: `client.TimeSchedule().list()` / `client.TimeSchedule().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TimeSchedule(entopts) {
        const self = this;
        return new TimeScheduleEntity_1.TimeScheduleEntity(self, entopts);
    }
    // Entity access: `client.TriageResponsibility().list()` / `client.TriageResponsibility().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TriageResponsibility(entopts) {
        const self = this;
        return new TriageResponsibilityEntity_1.TriageResponsibilityEntity(self, entopts);
    }
    // Entity access: `client.UploadFile().list()` / `client.UploadFile().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UploadFile(entopts) {
        const self = this;
        return new UploadFileEntity_1.UploadFileEntity(self, entopts);
    }
    // Entity access: `client.UsageAlert().list()` / `client.UsageAlert().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UsageAlert(entopts) {
        const self = this;
        return new UsageAlertEntity_1.UsageAlertEntity(self, entopts);
    }
    // Entity access: `client.User().list()` / `client.User().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    User(entopts) {
        const self = this;
        return new UserEntity_1.UserEntity(self, entopts);
    }
    // Entity access: `client.UserSetting().list()` / `client.UserSetting().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UserSetting(entopts) {
        const self = this;
        return new UserSettingEntity_1.UserSettingEntity(self, entopts);
    }
    // Entity access: `client.ViewPreference().list()` / `client.ViewPreference().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ViewPreference(entopts) {
        const self = this;
        return new ViewPreferenceEntity_1.ViewPreferenceEntity(self, entopts);
    }
    // Entity access: `client.Webhook().list()` / `client.Webhook().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Webhook(entopts) {
        const self = this;
        return new WebhookEntity_1.WebhookEntity(self, entopts);
    }
    // Entity access: `client.WebhookFailureEvent().list()` / `client.WebhookFailureEvent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WebhookFailureEvent(entopts) {
        const self = this;
        return new WebhookFailureEventEntity_1.WebhookFailureEventEntity(self, entopts);
    }
    // Entity access: `client.WorkflowState().list()` / `client.WorkflowState().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkflowState(entopts) {
        const self = this;
        return new WorkflowStateEntity_1.WorkflowStateEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new LinearSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return LinearSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'Linear' };
    }
    toString() {
        return 'Linear ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.LinearSDK = LinearSDK;
const SDK = LinearSDK;
exports.SDK = SDK;
//# sourceMappingURL=LinearSDK.js.map