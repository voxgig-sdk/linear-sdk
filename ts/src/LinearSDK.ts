// Linear Ts SDK

import { AccessKeyReleaseEntity } from './entity/AccessKeyReleaseEntity'
import { AccessKeyReleasePipelineEntity } from './entity/AccessKeyReleasePipelineEntity'
import { AgentActivityEntity } from './entity/AgentActivityEntity'
import { AgentSessionEntity } from './entity/AgentSessionEntity'
import { AgentSkillEntity } from './entity/AgentSkillEntity'
import { ApplicationEntity } from './entity/ApplicationEntity'
import { AttachmentEntity } from './entity/AttachmentEntity'
import { AuditEntryEntity } from './entity/AuditEntryEntity'
import { AuditEntryTypeEntity } from './entity/AuditEntryTypeEntity'
import { AuthResolverResponseEntity } from './entity/AuthResolverResponseEntity'
import { AuthenticationSessionResponseEntity } from './entity/AuthenticationSessionResponseEntity'
import { CommentEntity } from './entity/CommentEntity'
import { CreateOrJoinOrganizationResponseEntity } from './entity/CreateOrJoinOrganizationResponseEntity'
import { CustomViewEntity } from './entity/CustomViewEntity'
import { CustomerEntity } from './entity/CustomerEntity'
import { CustomerNeedEntity } from './entity/CustomerNeedEntity'
import { CustomerStatusEntity } from './entity/CustomerStatusEntity'
import { CustomerTierEntity } from './entity/CustomerTierEntity'
import { CycleEntity } from './entity/CycleEntity'
import { DiffEntity } from './entity/DiffEntity'
import { DocumentEntity } from './entity/DocumentEntity'
import { DocumentSearchResultEntity } from './entity/DocumentSearchResultEntity'
import { EmailIntakeAddressEntity } from './entity/EmailIntakeAddressEntity'
import { EmailUserAccountAuthChallengeResponseEntity } from './entity/EmailUserAccountAuthChallengeResponseEntity'
import { EmojiEntity } from './entity/EmojiEntity'
import { EntityExternalLinkEntity } from './entity/EntityExternalLinkEntity'
import { ExternalUserEntity } from './entity/ExternalUserEntity'
import { FavoriteEntity } from './entity/FavoriteEntity'
import { GitAutomationStateEntity } from './entity/GitAutomationStateEntity'
import { GitAutomationTargetBranchEntity } from './entity/GitAutomationTargetBranchEntity'
import { GitHubIntegrationConnectDetailEntity } from './entity/GitHubIntegrationConnectDetailEntity'
import { InitiativeEntity } from './entity/InitiativeEntity'
import { InitiativeLabelEntity } from './entity/InitiativeLabelEntity'
import { InitiativeLeadTeamChangeImpactEntity } from './entity/InitiativeLeadTeamChangeImpactEntity'
import { InitiativeRelationEntity } from './entity/InitiativeRelationEntity'
import { InitiativeToProjectEntity } from './entity/InitiativeToProjectEntity'
import { InitiativeUpdateEntity } from './entity/InitiativeUpdateEntity'
import { IntegrationEntity } from './entity/IntegrationEntity'
import { IntegrationTemplateEntity } from './entity/IntegrationTemplateEntity'
import { IntegrationsSettingEntity } from './entity/IntegrationsSettingEntity'
import { IssueEntity } from './entity/IssueEntity'
import { IssueImportEntity } from './entity/IssueImportEntity'
import { IssueLabelEntity } from './entity/IssueLabelEntity'
import { IssuePriorityValueEntity } from './entity/IssuePriorityValueEntity'
import { IssueRelationEntity } from './entity/IssueRelationEntity'
import { IssueSearchResultEntity } from './entity/IssueSearchResultEntity'
import { IssueToReleaseEntity } from './entity/IssueToReleaseEntity'
import { LogoutResponseEntity } from './entity/LogoutResponseEntity'
import { NotificationEntity } from './entity/NotificationEntity'
import { NotificationSubscriptionEntity } from './entity/NotificationSubscriptionEntity'
import { OAuthApplicationEntity } from './entity/OAuthApplicationEntity'
import { OrganizationEntity } from './entity/OrganizationEntity'
import { OrganizationDomainEntity } from './entity/OrganizationDomainEntity'
import { OrganizationInviteEntity } from './entity/OrganizationInviteEntity'
import { OrganizationMetaEntity } from './entity/OrganizationMetaEntity'
import { PasskeyLoginStartResponseEntity } from './entity/PasskeyLoginStartResponseEntity'
import { ProjectEntity } from './entity/ProjectEntity'
import { ProjectLabelEntity } from './entity/ProjectLabelEntity'
import { ProjectMilestoneEntity } from './entity/ProjectMilestoneEntity'
import { ProjectMilestoneMoveProjectTeamEntity } from './entity/ProjectMilestoneMoveProjectTeamEntity'
import { ProjectRelationEntity } from './entity/ProjectRelationEntity'
import { ProjectSearchResultEntity } from './entity/ProjectSearchResultEntity'
import { ProjectStatusEntity } from './entity/ProjectStatusEntity'
import { ProjectUpdateEntity } from './entity/ProjectUpdateEntity'
import { PushSubscriptionEntity } from './entity/PushSubscriptionEntity'
import { ReactionEntity } from './entity/ReactionEntity'
import { ReleaseEntity } from './entity/ReleaseEntity'
import { ReleaseNoteEntity } from './entity/ReleaseNoteEntity'
import { ReleasePipelineEntity } from './entity/ReleasePipelineEntity'
import { ReleaseStageEntity } from './entity/ReleaseStageEntity'
import { RoadmapEntity } from './entity/RoadmapEntity'
import { RoadmapToProjectEntity } from './entity/RoadmapToProjectEntity'
import { SlaConfigurationEntity } from './entity/SlaConfigurationEntity'
import { SsoUrlFromEmailResponseEntity } from './entity/SsoUrlFromEmailResponseEntity'
import { TeamEntity } from './entity/TeamEntity'
import { TeamMembershipEntity } from './entity/TeamMembershipEntity'
import { TemplateEntity } from './entity/TemplateEntity'
import { TimeScheduleEntity } from './entity/TimeScheduleEntity'
import { TriageResponsibilityEntity } from './entity/TriageResponsibilityEntity'
import { UploadFileEntity } from './entity/UploadFileEntity'
import { UsageAlertEntity } from './entity/UsageAlertEntity'
import { UserEntity } from './entity/UserEntity'
import { UserSettingEntity } from './entity/UserSettingEntity'
import { ViewPreferenceEntity } from './entity/ViewPreferenceEntity'
import { WebhookEntity } from './entity/WebhookEntity'
import { WebhookFailureEventEntity } from './entity/WebhookFailureEventEntity'
import { WorkflowStateEntity } from './entity/WorkflowStateEntity'

export type * from './LinearTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { LinearEntityBase } from './LinearEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'



const stdutil = new Utility()


class LinearSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context
  

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const extend = this._options.extend || []

    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        // An active name with no generated class is legal when an
        // extend-supplied instance carries that name (station's adopt
        // path): the instance is added below, positioned by its own
        // __after__ entry, so skip it here rather than fail construction.
        if (!this._rootctx.config.hasFeature(fname) &&
          extend.some((f: any) => fname === f.name)) {
          continue
        }
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    for (let f of extend) {
      featureAdd(this._rootctx, f)
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }

  


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    const spec: any = {
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
    }

    ctx.spec = spec

    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    

    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  // Raw endpoint access is operator-controllable, like every entity op.
  // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  // either one reaches the same endpoint.
  async direct(fetchargs?: any) {
    if (!this._options.allow.op.includes('direct')) {
      return {
        ok: false,
        err: new Error('LinearSDK: direct: operation not allowed by' +
          ' SDK option allow.op value: "' + this._options.allow.op + '"'),
      }
    }

    return this._rawRequest(fetchargs)
  }


  // Ungated request path shared by direct() and graphql(), each of which
  // checks its own allow.op token first. Private, rather than a flag on
  // fetchargs: a caller-supplied marker would let anyone opt straight back
  // out of the gate by passing it.
  async _rawRequest(fetchargs?: any) {
    const utility = this._utility

    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
    }
  }



  async graphql(query: string, variables?: any, ctrl?: any) {
    const options = this._options

    if (!options.allow.op.includes('graphql')) {
      return {
        ok: false,
        err: new Error('LinearSDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res: any = await this._rawRequest({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: { query, variables: variables || {} },
      ctrl,
    })

    if (res instanceof Error) {
      return res
    }

    // Errors are read BEFORE any status check: a GraphQL parse or validation
    // failure comes back as HTTP 400 carrying the standard { errors: [...] }
    // body, and the raw path represents a non-2xx as { ok: false } with no
    // err — so returning early on status would discard the server's own
    // diagnostics, which are the only useful part of that response.
    const errors = null == res.data ? undefined : res.data.errors

    if (null != errors && Array.isArray(errors) && 0 < errors.length) {
      const first = errors[0] || {}
      const err: any = new Error('LinearSDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.AccessKeyRelease().list()` / `client.AccessKeyRelease().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AccessKeyRelease(entopts?: Record<string, any>) {
    const self = this
    return new AccessKeyReleaseEntity(self, entopts)
  }


  // Entity access: `client.AccessKeyReleasePipeline().list()` / `client.AccessKeyReleasePipeline().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AccessKeyReleasePipeline(entopts?: Record<string, any>) {
    const self = this
    return new AccessKeyReleasePipelineEntity(self, entopts)
  }


  // Entity access: `client.AgentActivity().list()` / `client.AgentActivity().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AgentActivity(entopts?: Record<string, any>) {
    const self = this
    return new AgentActivityEntity(self, entopts)
  }


  // Entity access: `client.AgentSession().list()` / `client.AgentSession().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AgentSession(entopts?: Record<string, any>) {
    const self = this
    return new AgentSessionEntity(self, entopts)
  }


  // Entity access: `client.AgentSkill().list()` / `client.AgentSkill().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AgentSkill(entopts?: Record<string, any>) {
    const self = this
    return new AgentSkillEntity(self, entopts)
  }


  // Entity access: `client.Application().list()` / `client.Application().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Application(entopts?: Record<string, any>) {
    const self = this
    return new ApplicationEntity(self, entopts)
  }


  // Entity access: `client.Attachment().list()` / `client.Attachment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Attachment(entopts?: Record<string, any>) {
    const self = this
    return new AttachmentEntity(self, entopts)
  }


  // Entity access: `client.AuditEntry().list()` / `client.AuditEntry().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AuditEntry(entopts?: Record<string, any>) {
    const self = this
    return new AuditEntryEntity(self, entopts)
  }


  // Entity access: `client.AuditEntryType().list()` / `client.AuditEntryType().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AuditEntryType(entopts?: Record<string, any>) {
    const self = this
    return new AuditEntryTypeEntity(self, entopts)
  }


  // Entity access: `client.AuthResolverResponse().list()` / `client.AuthResolverResponse().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AuthResolverResponse(entopts?: Record<string, any>) {
    const self = this
    return new AuthResolverResponseEntity(self, entopts)
  }


  // Entity access: `client.AuthenticationSessionResponse().list()` / `client.AuthenticationSessionResponse().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AuthenticationSessionResponse(entopts?: Record<string, any>) {
    const self = this
    return new AuthenticationSessionResponseEntity(self, entopts)
  }


  // Entity access: `client.Comment().list()` / `client.Comment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Comment(entopts?: Record<string, any>) {
    const self = this
    return new CommentEntity(self, entopts)
  }


  // Entity access: `client.CreateOrJoinOrganizationResponse().list()` / `client.CreateOrJoinOrganizationResponse().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CreateOrJoinOrganizationResponse(entopts?: Record<string, any>) {
    const self = this
    return new CreateOrJoinOrganizationResponseEntity(self, entopts)
  }


  // Entity access: `client.CustomView().list()` / `client.CustomView().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CustomView(entopts?: Record<string, any>) {
    const self = this
    return new CustomViewEntity(self, entopts)
  }


  // Entity access: `client.Customer().list()` / `client.Customer().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Customer(entopts?: Record<string, any>) {
    const self = this
    return new CustomerEntity(self, entopts)
  }


  // Entity access: `client.CustomerNeed().list()` / `client.CustomerNeed().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CustomerNeed(entopts?: Record<string, any>) {
    const self = this
    return new CustomerNeedEntity(self, entopts)
  }


  // Entity access: `client.CustomerStatus().list()` / `client.CustomerStatus().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CustomerStatus(entopts?: Record<string, any>) {
    const self = this
    return new CustomerStatusEntity(self, entopts)
  }


  // Entity access: `client.CustomerTier().list()` / `client.CustomerTier().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CustomerTier(entopts?: Record<string, any>) {
    const self = this
    return new CustomerTierEntity(self, entopts)
  }


  // Entity access: `client.Cycle().list()` / `client.Cycle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Cycle(entopts?: Record<string, any>) {
    const self = this
    return new CycleEntity(self, entopts)
  }


  // Entity access: `client.Diff().list()` / `client.Diff().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Diff(entopts?: Record<string, any>) {
    const self = this
    return new DiffEntity(self, entopts)
  }


  // Entity access: `client.Document().list()` / `client.Document().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Document(entopts?: Record<string, any>) {
    const self = this
    return new DocumentEntity(self, entopts)
  }


  // Entity access: `client.DocumentSearchResult().list()` / `client.DocumentSearchResult().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DocumentSearchResult(entopts?: Record<string, any>) {
    const self = this
    return new DocumentSearchResultEntity(self, entopts)
  }


  // Entity access: `client.EmailIntakeAddress().list()` / `client.EmailIntakeAddress().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EmailIntakeAddress(entopts?: Record<string, any>) {
    const self = this
    return new EmailIntakeAddressEntity(self, entopts)
  }


  // Entity access: `client.EmailUserAccountAuthChallengeResponse().list()` / `client.EmailUserAccountAuthChallengeResponse().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EmailUserAccountAuthChallengeResponse(entopts?: Record<string, any>) {
    const self = this
    return new EmailUserAccountAuthChallengeResponseEntity(self, entopts)
  }


  // Entity access: `client.Emoji().list()` / `client.Emoji().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Emoji(entopts?: Record<string, any>) {
    const self = this
    return new EmojiEntity(self, entopts)
  }


  // Entity access: `client.EntityExternalLink().list()` / `client.EntityExternalLink().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EntityExternalLink(entopts?: Record<string, any>) {
    const self = this
    return new EntityExternalLinkEntity(self, entopts)
  }


  // Entity access: `client.ExternalUser().list()` / `client.ExternalUser().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ExternalUser(entopts?: Record<string, any>) {
    const self = this
    return new ExternalUserEntity(self, entopts)
  }


  // Entity access: `client.Favorite().list()` / `client.Favorite().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Favorite(entopts?: Record<string, any>) {
    const self = this
    return new FavoriteEntity(self, entopts)
  }


  // Entity access: `client.GitAutomationState().list()` / `client.GitAutomationState().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GitAutomationState(entopts?: Record<string, any>) {
    const self = this
    return new GitAutomationStateEntity(self, entopts)
  }


  // Entity access: `client.GitAutomationTargetBranch().list()` / `client.GitAutomationTargetBranch().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GitAutomationTargetBranch(entopts?: Record<string, any>) {
    const self = this
    return new GitAutomationTargetBranchEntity(self, entopts)
  }


  // Entity access: `client.GitHubIntegrationConnectDetail().list()` / `client.GitHubIntegrationConnectDetail().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GitHubIntegrationConnectDetail(entopts?: Record<string, any>) {
    const self = this
    return new GitHubIntegrationConnectDetailEntity(self, entopts)
  }


  // Entity access: `client.Initiative().list()` / `client.Initiative().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Initiative(entopts?: Record<string, any>) {
    const self = this
    return new InitiativeEntity(self, entopts)
  }


  // Entity access: `client.InitiativeLabel().list()` / `client.InitiativeLabel().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  InitiativeLabel(entopts?: Record<string, any>) {
    const self = this
    return new InitiativeLabelEntity(self, entopts)
  }


  // Entity access: `client.InitiativeLeadTeamChangeImpact().list()` / `client.InitiativeLeadTeamChangeImpact().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  InitiativeLeadTeamChangeImpact(entopts?: Record<string, any>) {
    const self = this
    return new InitiativeLeadTeamChangeImpactEntity(self, entopts)
  }


  // Entity access: `client.InitiativeRelation().list()` / `client.InitiativeRelation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  InitiativeRelation(entopts?: Record<string, any>) {
    const self = this
    return new InitiativeRelationEntity(self, entopts)
  }


  // Entity access: `client.InitiativeToProject().list()` / `client.InitiativeToProject().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  InitiativeToProject(entopts?: Record<string, any>) {
    const self = this
    return new InitiativeToProjectEntity(self, entopts)
  }


  // Entity access: `client.InitiativeUpdate().list()` / `client.InitiativeUpdate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  InitiativeUpdate(entopts?: Record<string, any>) {
    const self = this
    return new InitiativeUpdateEntity(self, entopts)
  }


  // Entity access: `client.Integration().list()` / `client.Integration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Integration(entopts?: Record<string, any>) {
    const self = this
    return new IntegrationEntity(self, entopts)
  }


  // Entity access: `client.IntegrationTemplate().list()` / `client.IntegrationTemplate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IntegrationTemplate(entopts?: Record<string, any>) {
    const self = this
    return new IntegrationTemplateEntity(self, entopts)
  }


  // Entity access: `client.IntegrationsSetting().list()` / `client.IntegrationsSetting().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IntegrationsSetting(entopts?: Record<string, any>) {
    const self = this
    return new IntegrationsSettingEntity(self, entopts)
  }


  // Entity access: `client.Issue().list()` / `client.Issue().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Issue(entopts?: Record<string, any>) {
    const self = this
    return new IssueEntity(self, entopts)
  }


  // Entity access: `client.IssueImport().list()` / `client.IssueImport().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IssueImport(entopts?: Record<string, any>) {
    const self = this
    return new IssueImportEntity(self, entopts)
  }


  // Entity access: `client.IssueLabel().list()` / `client.IssueLabel().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IssueLabel(entopts?: Record<string, any>) {
    const self = this
    return new IssueLabelEntity(self, entopts)
  }


  // Entity access: `client.IssuePriorityValue().list()` / `client.IssuePriorityValue().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IssuePriorityValue(entopts?: Record<string, any>) {
    const self = this
    return new IssuePriorityValueEntity(self, entopts)
  }


  // Entity access: `client.IssueRelation().list()` / `client.IssueRelation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IssueRelation(entopts?: Record<string, any>) {
    const self = this
    return new IssueRelationEntity(self, entopts)
  }


  // Entity access: `client.IssueSearchResult().list()` / `client.IssueSearchResult().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IssueSearchResult(entopts?: Record<string, any>) {
    const self = this
    return new IssueSearchResultEntity(self, entopts)
  }


  // Entity access: `client.IssueToRelease().list()` / `client.IssueToRelease().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IssueToRelease(entopts?: Record<string, any>) {
    const self = this
    return new IssueToReleaseEntity(self, entopts)
  }


  // Entity access: `client.LogoutResponse().list()` / `client.LogoutResponse().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LogoutResponse(entopts?: Record<string, any>) {
    const self = this
    return new LogoutResponseEntity(self, entopts)
  }


  // Entity access: `client.Notification().list()` / `client.Notification().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Notification(entopts?: Record<string, any>) {
    const self = this
    return new NotificationEntity(self, entopts)
  }


  // Entity access: `client.NotificationSubscription().list()` / `client.NotificationSubscription().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NotificationSubscription(entopts?: Record<string, any>) {
    const self = this
    return new NotificationSubscriptionEntity(self, entopts)
  }


  // Entity access: `client.OAuthApplication().list()` / `client.OAuthApplication().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OAuthApplication(entopts?: Record<string, any>) {
    const self = this
    return new OAuthApplicationEntity(self, entopts)
  }


  // Entity access: `client.Organization().list()` / `client.Organization().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Organization(entopts?: Record<string, any>) {
    const self = this
    return new OrganizationEntity(self, entopts)
  }


  // Entity access: `client.OrganizationDomain().list()` / `client.OrganizationDomain().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationDomain(entopts?: Record<string, any>) {
    const self = this
    return new OrganizationDomainEntity(self, entopts)
  }


  // Entity access: `client.OrganizationInvite().list()` / `client.OrganizationInvite().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationInvite(entopts?: Record<string, any>) {
    const self = this
    return new OrganizationInviteEntity(self, entopts)
  }


  // Entity access: `client.OrganizationMeta().list()` / `client.OrganizationMeta().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationMeta(entopts?: Record<string, any>) {
    const self = this
    return new OrganizationMetaEntity(self, entopts)
  }


  // Entity access: `client.PasskeyLoginStartResponse().list()` / `client.PasskeyLoginStartResponse().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PasskeyLoginStartResponse(entopts?: Record<string, any>) {
    const self = this
    return new PasskeyLoginStartResponseEntity(self, entopts)
  }


  // Entity access: `client.Project().list()` / `client.Project().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Project(entopts?: Record<string, any>) {
    const self = this
    return new ProjectEntity(self, entopts)
  }


  // Entity access: `client.ProjectLabel().list()` / `client.ProjectLabel().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectLabel(entopts?: Record<string, any>) {
    const self = this
    return new ProjectLabelEntity(self, entopts)
  }


  // Entity access: `client.ProjectMilestone().list()` / `client.ProjectMilestone().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectMilestone(entopts?: Record<string, any>) {
    const self = this
    return new ProjectMilestoneEntity(self, entopts)
  }


  // Entity access: `client.ProjectMilestoneMoveProjectTeam().list()` / `client.ProjectMilestoneMoveProjectTeam().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectMilestoneMoveProjectTeam(entopts?: Record<string, any>) {
    const self = this
    return new ProjectMilestoneMoveProjectTeamEntity(self, entopts)
  }


  // Entity access: `client.ProjectRelation().list()` / `client.ProjectRelation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectRelation(entopts?: Record<string, any>) {
    const self = this
    return new ProjectRelationEntity(self, entopts)
  }


  // Entity access: `client.ProjectSearchResult().list()` / `client.ProjectSearchResult().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectSearchResult(entopts?: Record<string, any>) {
    const self = this
    return new ProjectSearchResultEntity(self, entopts)
  }


  // Entity access: `client.ProjectStatus().list()` / `client.ProjectStatus().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectStatus(entopts?: Record<string, any>) {
    const self = this
    return new ProjectStatusEntity(self, entopts)
  }


  // Entity access: `client.ProjectUpdate().list()` / `client.ProjectUpdate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectUpdate(entopts?: Record<string, any>) {
    const self = this
    return new ProjectUpdateEntity(self, entopts)
  }


  // Entity access: `client.PushSubscription().list()` / `client.PushSubscription().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PushSubscription(entopts?: Record<string, any>) {
    const self = this
    return new PushSubscriptionEntity(self, entopts)
  }


  // Entity access: `client.Reaction().list()` / `client.Reaction().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Reaction(entopts?: Record<string, any>) {
    const self = this
    return new ReactionEntity(self, entopts)
  }


  // Entity access: `client.Release().list()` / `client.Release().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Release(entopts?: Record<string, any>) {
    const self = this
    return new ReleaseEntity(self, entopts)
  }


  // Entity access: `client.ReleaseNote().list()` / `client.ReleaseNote().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ReleaseNote(entopts?: Record<string, any>) {
    const self = this
    return new ReleaseNoteEntity(self, entopts)
  }


  // Entity access: `client.ReleasePipeline().list()` / `client.ReleasePipeline().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ReleasePipeline(entopts?: Record<string, any>) {
    const self = this
    return new ReleasePipelineEntity(self, entopts)
  }


  // Entity access: `client.ReleaseStage().list()` / `client.ReleaseStage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ReleaseStage(entopts?: Record<string, any>) {
    const self = this
    return new ReleaseStageEntity(self, entopts)
  }


  // Entity access: `client.Roadmap().list()` / `client.Roadmap().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Roadmap(entopts?: Record<string, any>) {
    const self = this
    return new RoadmapEntity(self, entopts)
  }


  // Entity access: `client.RoadmapToProject().list()` / `client.RoadmapToProject().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RoadmapToProject(entopts?: Record<string, any>) {
    const self = this
    return new RoadmapToProjectEntity(self, entopts)
  }


  // Entity access: `client.SlaConfiguration().list()` / `client.SlaConfiguration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SlaConfiguration(entopts?: Record<string, any>) {
    const self = this
    return new SlaConfigurationEntity(self, entopts)
  }


  // Entity access: `client.SsoUrlFromEmailResponse().list()` / `client.SsoUrlFromEmailResponse().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SsoUrlFromEmailResponse(entopts?: Record<string, any>) {
    const self = this
    return new SsoUrlFromEmailResponseEntity(self, entopts)
  }


  // Entity access: `client.Team().list()` / `client.Team().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Team(entopts?: Record<string, any>) {
    const self = this
    return new TeamEntity(self, entopts)
  }


  // Entity access: `client.TeamMembership().list()` / `client.TeamMembership().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TeamMembership(entopts?: Record<string, any>) {
    const self = this
    return new TeamMembershipEntity(self, entopts)
  }


  // Entity access: `client.Template().list()` / `client.Template().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Template(entopts?: Record<string, any>) {
    const self = this
    return new TemplateEntity(self, entopts)
  }


  // Entity access: `client.TimeSchedule().list()` / `client.TimeSchedule().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TimeSchedule(entopts?: Record<string, any>) {
    const self = this
    return new TimeScheduleEntity(self, entopts)
  }


  // Entity access: `client.TriageResponsibility().list()` / `client.TriageResponsibility().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TriageResponsibility(entopts?: Record<string, any>) {
    const self = this
    return new TriageResponsibilityEntity(self, entopts)
  }


  // Entity access: `client.UploadFile().list()` / `client.UploadFile().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UploadFile(entopts?: Record<string, any>) {
    const self = this
    return new UploadFileEntity(self, entopts)
  }


  // Entity access: `client.UsageAlert().list()` / `client.UsageAlert().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UsageAlert(entopts?: Record<string, any>) {
    const self = this
    return new UsageAlertEntity(self, entopts)
  }


  // Entity access: `client.User().list()` / `client.User().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  User(entopts?: Record<string, any>) {
    const self = this
    return new UserEntity(self, entopts)
  }


  // Entity access: `client.UserSetting().list()` / `client.UserSetting().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UserSetting(entopts?: Record<string, any>) {
    const self = this
    return new UserSettingEntity(self, entopts)
  }


  // Entity access: `client.ViewPreference().list()` / `client.ViewPreference().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ViewPreference(entopts?: Record<string, any>) {
    const self = this
    return new ViewPreferenceEntity(self, entopts)
  }


  // Entity access: `client.Webhook().list()` / `client.Webhook().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Webhook(entopts?: Record<string, any>) {
    const self = this
    return new WebhookEntity(self, entopts)
  }


  // Entity access: `client.WebhookFailureEvent().list()` / `client.WebhookFailureEvent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WebhookFailureEvent(entopts?: Record<string, any>) {
    const self = this
    return new WebhookFailureEventEntity(self, entopts)
  }


  // Entity access: `client.WorkflowState().list()` / `client.WorkflowState().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkflowState(entopts?: Record<string, any>) {
    const self = this
    return new WorkflowStateEntity(self, entopts)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new LinearSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return LinearSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'Linear' }
  }

  toString() {
    return 'Linear ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = LinearSDK


export {
  stdutil,
  config,
  

  BaseFeature,
  LinearEntityBase,

  LinearSDK,
  SDK,
}


