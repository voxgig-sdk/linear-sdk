# Linear SDK

require_relative 'utility/struct/voxgig_struct'
require_relative 'core/utility_type'
require_relative 'core/spec'
require_relative 'core/helpers'

# Load utility registration
require_relative 'utility/register'

# Load config and features
require_relative 'config'
require_relative 'feature/base_feature'
require_relative 'features'

# Load typed models (Struct value objects).
require_relative 'Linear_types'


class LinearSDK
  attr_accessor :mode, :features, :options

  def initialize(options = {})
    @mode = "live"
    @features = []
    @options = nil

    utility = LinearUtility.new
    @_utility = utility

    config = LinearConfig.shared_config

    @_rootctx = utility.make_context.call({
      "client" => self,
      "utility" => utility,
      "config" => config,
      "options" => options || {},
      "shared" => {},
    }, nil)

    @options = utility.make_options.call(@_rootctx)

    if VoxgigStruct.getpath(@options, "feature.test.active") == true
      @mode = "test"
    end

    @_rootctx.options = @options

    # Add features in the resolved order (make_options puts an explicit array
    # order first, else defaults to test-first). Ordering matters: the `test`
    # feature installs the base mock transport and the transport features
    # (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
    # must be added before them to sit at the base of the chain.
    feature_opts = LinearHelpers.to_map(VoxgigStruct.getprop(@options, "feature"))
    if feature_opts
      featureorder = VoxgigStruct.getpath(@options, "__derived__.featureorder")
      if featureorder.is_a?(Array)
        featureorder.each do |fname|
          fopts = LinearHelpers.to_map(feature_opts[fname])
          if fopts && fopts["active"] == true
            utility.feature_add.call(@_rootctx, LinearFeatures.make_feature(fname))
          end
        end
      end
    end

    # Add extension features.
    extend_val = VoxgigStruct.getprop(@options, "extend")
    if extend_val.is_a?(Array)
      extend_val.each do |f|
        if f.respond_to?(:get_name)
          utility.feature_add.call(@_rootctx, f)
        end
      end
    end

    # Initialize features.
    @features.each do |f|
      utility.feature_init.call(@_rootctx, f)
    end

    utility.feature_hook.call(@_rootctx, "PostConstruct")
  end

  def options_map
    out = VoxgigStruct.clone(@options)
    out.is_a?(Hash) ? out : {}
  end

  def get_utility
    LinearUtility.copy(@_utility)
  end

  def get_root_ctx
    @_rootctx
  end

  def prepare(fetchargs = {})
    utility = @_utility
    fetchargs ||= {}

    ctrl = LinearHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "prepare",
      "ctrl" => ctrl,
    }, @_rootctx)

    opts = @options
    path = VoxgigStruct.getprop(fetchargs, "path") || ""
    path = "" unless path.is_a?(String)
    method_val = VoxgigStruct.getprop(fetchargs, "method") || "GET"
    method_val = "GET" unless method_val.is_a?(String)
    params = LinearHelpers.to_map(VoxgigStruct.getprop(fetchargs, "params")) || {}
    query = LinearHelpers.to_map(VoxgigStruct.getprop(fetchargs, "query")) || {}
    headers = utility.prepare_headers.call(ctx)

    base = VoxgigStruct.getprop(opts, "base") || ""
    base = "" unless base.is_a?(String)
    prefix = VoxgigStruct.getprop(opts, "prefix") || ""
    prefix = "" unless prefix.is_a?(String)
    suffix = VoxgigStruct.getprop(opts, "suffix") || ""
    suffix = "" unless suffix.is_a?(String)

    ctx.spec = LinearSpec.new({
      "base" => base, "prefix" => prefix, "suffix" => suffix,
      "path" => path, "method" => method_val,
      "params" => params, "query" => query, "headers" => headers,
      "body" => VoxgigStruct.getprop(fetchargs, "body"),
      "step" => "start",
    })

    # Merge user-provided headers.
    uh = VoxgigStruct.getprop(fetchargs, "headers")
    if uh.is_a?(Hash)
      uh.each { |k, v| ctx.spec.headers[k] = v }
    end

    _, err = utility.prepare_auth.call(ctx)
    raise err if err

    # make_fetch_def returns a (fetchdef, err) tuple; destructure it and
    # return just the fetchdef Hash (raising on error) so callers — including
    # direct(), which indexes fetchdef["url"] — receive a Hash, mirroring the
    # ts/py prepare().
    fetchdef, fd_err = utility.make_fetch_def.call(ctx)
    raise fd_err if fd_err

    fetchdef
  end

  # Raw endpoint access is operator-controllable, like every entity op.
  # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  # either one reaches the same endpoint.
  def direct(fetchargs = {})
    return op_denied("direct") unless op_allowed?("direct")

    raw_request(fetchargs)
  end

  # Is this raw-access op permitted by the SDK's allow.op option?
  def op_allowed?(op)
    allow_op = VoxgigStruct.getpath(@options, "allow.op")
    allow_op.is_a?(String) && allow_op.include?(op)
  end

  def op_denied(op)
    allow_op = VoxgigStruct.getpath(@options, "allow.op")
    {
      "ok" => false,
      "err" => LinearError.new(
        "#{op}_allow",
        "LinearSDK: #{op}: operation not allowed by" \
        " SDK option allow.op value: \"#{allow_op}\""),
    }
  end

  # Ungated request path shared by direct and graphql, each of which checks
  # its own allow.op token first. Separate, rather than a flag on fetchargs:
  # a caller-supplied marker would let anyone opt straight back out of the
  # gate by passing it.
  def raw_request(fetchargs = {})
    utility = @_utility

    # direct() is the raw-HTTP escape hatch: it always returns a result hash
    # ({ "ok" => ..., ... }) and never raises. prepare() raises on error, so
    # trap that and surface it in the hash.
    begin
      fetchdef = prepare(fetchargs)
    rescue LinearError => err
      return { "ok" => false, "err" => err }
    end

    fetchargs ||= {}
    ctrl = LinearHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "direct",
      "ctrl" => ctrl,
    }, @_rootctx)

    url = fetchdef["url"] || ""
    fetched, fetch_err = utility.fetcher.call(ctx, url, fetchdef)

    return { "ok" => false, "err" => fetch_err } if fetch_err

    if fetched.nil?
      return {
        "ok" => false,
        "err" => ctx.make_error("direct_no_response", "response: undefined"),
      }
    end

    if fetched.is_a?(Hash)
      status = LinearHelpers.to_int(VoxgigStruct.getprop(fetched, "status"))
      headers = VoxgigStruct.getprop(fetched, "headers") || {}

      # No-body responses (204, 304) and explicit zero content-length must
      # skip JSON parsing — calling json() on an empty body errors.
      content_length = headers.is_a?(Hash) ? headers["content-length"] : nil
      no_body = status == 204 || status == 304 || content_length.to_s == "0"

      json_data = nil
      unless no_body
        jf = VoxgigStruct.getprop(fetched, "json")
        if jf.is_a?(Proc)
          begin
            json_data = jf.call
          rescue StandardError
            # Non-JSON body — leave data nil, keep status/headers.
            json_data = nil
          end
        end
      end

      return {
        "ok" => status >= 200 && status < 300,
        "status" => status,
        "headers" => headers,
        "data" => json_data,
      }
    end

    return {
      "ok" => false,
      "err" => ctx.make_error("direct_invalid", "invalid response type"),
    }
  end

  # Raw GraphQL access: the pressure valve that makes the generated surface's
  # deliberate omissions (per-call selection sets, typed filter builders,
  # batching, subscriptions) livable — the whole schema stays reachable.
  #
  # Thin wrapper over the same prepare/fetch path direct uses, with the one
  # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
  # as a top-level `errors` array, so status alone would report a failed
  # query as ok.
  #
  # NOTE: like direct, this bypasses the feature pipeline — no retry,
  # ratelimit or paging features apply.
  def graphql(query, variables = nil, ctrl = nil)
    return op_denied("graphql") unless op_allowed?("graphql")

    res = raw_request({
      "method" => "POST",
      "headers" => { "content-type" => "application/json" },
      "body" => { "query" => query, "variables" => variables || {} },
      "ctrl" => ctrl || {},
    })

    # Errors are read BEFORE any status check: a GraphQL parse or validation
    # failure comes back as HTTP 400 carrying the standard { errors: [...] }
    # body, and the raw path represents a non-2xx as ok:false with no err —
    # so returning early on status would discard the server's own
    # diagnostics, which are the only useful part of that response.
    errors = VoxgigStruct.getpath(res, "data.errors")

    if errors.is_a?(Array) && !errors.empty?
      first = errors[0].is_a?(Hash) ? errors[0] : {}
      msg = first["message"]
      msg = "graphql error" if msg.nil? || msg.to_s.empty?
      res["ok"] = false
      res["err"] = LinearError.new(
        "graphql_error", "LinearSDK: graphql: #{msg}")
      res["graphql"] = errors
    end

    res
  end


  # Canonical facade: client.AccessKeyRelease.list / client.AccessKeyRelease.load({ "id" => ... })
  def AccessKeyRelease(data = nil)
    require_relative 'entity/access_key_release_entity'
    AccessKeyReleaseEntity.new(self, data)
  end


  # Canonical facade: client.AccessKeyReleasePipeline.list / client.AccessKeyReleasePipeline.load({ "id" => ... })
  def AccessKeyReleasePipeline(data = nil)
    require_relative 'entity/access_key_release_pipeline_entity'
    AccessKeyReleasePipelineEntity.new(self, data)
  end


  # Canonical facade: client.AgentActivity.list / client.AgentActivity.load({ "id" => ... })
  def AgentActivity(data = nil)
    require_relative 'entity/agent_activity_entity'
    AgentActivityEntity.new(self, data)
  end


  # Canonical facade: client.AgentSession.list / client.AgentSession.load({ "id" => ... })
  def AgentSession(data = nil)
    require_relative 'entity/agent_session_entity'
    AgentSessionEntity.new(self, data)
  end


  # Canonical facade: client.AgentSkill.list / client.AgentSkill.load({ "id" => ... })
  def AgentSkill(data = nil)
    require_relative 'entity/agent_skill_entity'
    AgentSkillEntity.new(self, data)
  end


  # Canonical facade: client.Application.list / client.Application.load({ "id" => ... })
  def Application(data = nil)
    require_relative 'entity/application_entity'
    ApplicationEntity.new(self, data)
  end


  # Canonical facade: client.Attachment.list / client.Attachment.load({ "id" => ... })
  def Attachment(data = nil)
    require_relative 'entity/attachment_entity'
    AttachmentEntity.new(self, data)
  end


  # Canonical facade: client.AuditEntry.list / client.AuditEntry.load({ "id" => ... })
  def AuditEntry(data = nil)
    require_relative 'entity/audit_entry_entity'
    AuditEntryEntity.new(self, data)
  end


  # Canonical facade: client.AuditEntryType.list / client.AuditEntryType.load({ "id" => ... })
  def AuditEntryType(data = nil)
    require_relative 'entity/audit_entry_type_entity'
    AuditEntryTypeEntity.new(self, data)
  end


  # Canonical facade: client.AuthResolverResponse.list / client.AuthResolverResponse.load({ "id" => ... })
  def AuthResolverResponse(data = nil)
    require_relative 'entity/auth_resolver_response_entity'
    AuthResolverResponseEntity.new(self, data)
  end


  # Canonical facade: client.AuthenticationSessionResponse.list / client.AuthenticationSessionResponse.load({ "id" => ... })
  def AuthenticationSessionResponse(data = nil)
    require_relative 'entity/authentication_session_response_entity'
    AuthenticationSessionResponseEntity.new(self, data)
  end


  # Canonical facade: client.Comment.list / client.Comment.load({ "id" => ... })
  def Comment(data = nil)
    require_relative 'entity/comment_entity'
    CommentEntity.new(self, data)
  end


  # Canonical facade: client.CreateOrJoinOrganizationResponse.list / client.CreateOrJoinOrganizationResponse.load({ "id" => ... })
  def CreateOrJoinOrganizationResponse(data = nil)
    require_relative 'entity/create_or_join_organization_response_entity'
    CreateOrJoinOrganizationResponseEntity.new(self, data)
  end


  # Canonical facade: client.CustomView.list / client.CustomView.load({ "id" => ... })
  def CustomView(data = nil)
    require_relative 'entity/custom_view_entity'
    CustomViewEntity.new(self, data)
  end


  # Canonical facade: client.Customer.list / client.Customer.load({ "id" => ... })
  def Customer(data = nil)
    require_relative 'entity/customer_entity'
    CustomerEntity.new(self, data)
  end


  # Canonical facade: client.CustomerNeed.list / client.CustomerNeed.load({ "id" => ... })
  def CustomerNeed(data = nil)
    require_relative 'entity/customer_need_entity'
    CustomerNeedEntity.new(self, data)
  end


  # Canonical facade: client.CustomerStatus.list / client.CustomerStatus.load({ "id" => ... })
  def CustomerStatus(data = nil)
    require_relative 'entity/customer_status_entity'
    CustomerStatusEntity.new(self, data)
  end


  # Canonical facade: client.CustomerTier.list / client.CustomerTier.load({ "id" => ... })
  def CustomerTier(data = nil)
    require_relative 'entity/customer_tier_entity'
    CustomerTierEntity.new(self, data)
  end


  # Canonical facade: client.Cycle.list / client.Cycle.load({ "id" => ... })
  def Cycle(data = nil)
    require_relative 'entity/cycle_entity'
    CycleEntity.new(self, data)
  end


  # Canonical facade: client.Diff.list / client.Diff.load({ "id" => ... })
  def Diff(data = nil)
    require_relative 'entity/diff_entity'
    DiffEntity.new(self, data)
  end


  # Canonical facade: client.Document.list / client.Document.load({ "id" => ... })
  def Document(data = nil)
    require_relative 'entity/document_entity'
    DocumentEntity.new(self, data)
  end


  # Canonical facade: client.DocumentSearchResult.list / client.DocumentSearchResult.load({ "id" => ... })
  def DocumentSearchResult(data = nil)
    require_relative 'entity/document_search_result_entity'
    DocumentSearchResultEntity.new(self, data)
  end


  # Canonical facade: client.EmailIntakeAddress.list / client.EmailIntakeAddress.load({ "id" => ... })
  def EmailIntakeAddress(data = nil)
    require_relative 'entity/email_intake_address_entity'
    EmailIntakeAddressEntity.new(self, data)
  end


  # Canonical facade: client.EmailUserAccountAuthChallengeResponse.list / client.EmailUserAccountAuthChallengeResponse.load({ "id" => ... })
  def EmailUserAccountAuthChallengeResponse(data = nil)
    require_relative 'entity/email_user_account_auth_challenge_response_entity'
    EmailUserAccountAuthChallengeResponseEntity.new(self, data)
  end


  # Canonical facade: client.Emoji.list / client.Emoji.load({ "id" => ... })
  def Emoji(data = nil)
    require_relative 'entity/emoji_entity'
    EmojiEntity.new(self, data)
  end


  # Canonical facade: client.EntityExternalLink.list / client.EntityExternalLink.load({ "id" => ... })
  def EntityExternalLink(data = nil)
    require_relative 'entity/entity_external_link_entity'
    EntityExternalLinkEntity.new(self, data)
  end


  # Canonical facade: client.ExternalUser.list / client.ExternalUser.load({ "id" => ... })
  def ExternalUser(data = nil)
    require_relative 'entity/external_user_entity'
    ExternalUserEntity.new(self, data)
  end


  # Canonical facade: client.Favorite.list / client.Favorite.load({ "id" => ... })
  def Favorite(data = nil)
    require_relative 'entity/favorite_entity'
    FavoriteEntity.new(self, data)
  end


  # Canonical facade: client.GitAutomationState.list / client.GitAutomationState.load({ "id" => ... })
  def GitAutomationState(data = nil)
    require_relative 'entity/git_automation_state_entity'
    GitAutomationStateEntity.new(self, data)
  end


  # Canonical facade: client.GitAutomationTargetBranch.list / client.GitAutomationTargetBranch.load({ "id" => ... })
  def GitAutomationTargetBranch(data = nil)
    require_relative 'entity/git_automation_target_branch_entity'
    GitAutomationTargetBranchEntity.new(self, data)
  end


  # Canonical facade: client.GitHubIntegrationConnectDetail.list / client.GitHubIntegrationConnectDetail.load({ "id" => ... })
  def GitHubIntegrationConnectDetail(data = nil)
    require_relative 'entity/git_hub_integration_connect_detail_entity'
    GitHubIntegrationConnectDetailEntity.new(self, data)
  end


  # Canonical facade: client.Initiative.list / client.Initiative.load({ "id" => ... })
  def Initiative(data = nil)
    require_relative 'entity/initiative_entity'
    InitiativeEntity.new(self, data)
  end


  # Canonical facade: client.InitiativeLabel.list / client.InitiativeLabel.load({ "id" => ... })
  def InitiativeLabel(data = nil)
    require_relative 'entity/initiative_label_entity'
    InitiativeLabelEntity.new(self, data)
  end


  # Canonical facade: client.InitiativeLeadTeamChangeImpact.list / client.InitiativeLeadTeamChangeImpact.load({ "id" => ... })
  def InitiativeLeadTeamChangeImpact(data = nil)
    require_relative 'entity/initiative_lead_team_change_impact_entity'
    InitiativeLeadTeamChangeImpactEntity.new(self, data)
  end


  # Canonical facade: client.InitiativeRelation.list / client.InitiativeRelation.load({ "id" => ... })
  def InitiativeRelation(data = nil)
    require_relative 'entity/initiative_relation_entity'
    InitiativeRelationEntity.new(self, data)
  end


  # Canonical facade: client.InitiativeToProject.list / client.InitiativeToProject.load({ "id" => ... })
  def InitiativeToProject(data = nil)
    require_relative 'entity/initiative_to_project_entity'
    InitiativeToProjectEntity.new(self, data)
  end


  # Canonical facade: client.InitiativeUpdate.list / client.InitiativeUpdate.load({ "id" => ... })
  def InitiativeUpdate(data = nil)
    require_relative 'entity/initiative_update_entity'
    InitiativeUpdateEntity.new(self, data)
  end


  # Canonical facade: client.Integration.list / client.Integration.load({ "id" => ... })
  def Integration(data = nil)
    require_relative 'entity/integration_entity'
    IntegrationEntity.new(self, data)
  end


  # Canonical facade: client.IntegrationTemplate.list / client.IntegrationTemplate.load({ "id" => ... })
  def IntegrationTemplate(data = nil)
    require_relative 'entity/integration_template_entity'
    IntegrationTemplateEntity.new(self, data)
  end


  # Canonical facade: client.IntegrationsSetting.list / client.IntegrationsSetting.load({ "id" => ... })
  def IntegrationsSetting(data = nil)
    require_relative 'entity/integrations_setting_entity'
    IntegrationsSettingEntity.new(self, data)
  end


  # Canonical facade: client.Issue.list / client.Issue.load({ "id" => ... })
  def Issue(data = nil)
    require_relative 'entity/issue_entity'
    IssueEntity.new(self, data)
  end


  # Canonical facade: client.IssueImport.list / client.IssueImport.load({ "id" => ... })
  def IssueImport(data = nil)
    require_relative 'entity/issue_import_entity'
    IssueImportEntity.new(self, data)
  end


  # Canonical facade: client.IssueLabel.list / client.IssueLabel.load({ "id" => ... })
  def IssueLabel(data = nil)
    require_relative 'entity/issue_label_entity'
    IssueLabelEntity.new(self, data)
  end


  # Canonical facade: client.IssuePriorityValue.list / client.IssuePriorityValue.load({ "id" => ... })
  def IssuePriorityValue(data = nil)
    require_relative 'entity/issue_priority_value_entity'
    IssuePriorityValueEntity.new(self, data)
  end


  # Canonical facade: client.IssueRelation.list / client.IssueRelation.load({ "id" => ... })
  def IssueRelation(data = nil)
    require_relative 'entity/issue_relation_entity'
    IssueRelationEntity.new(self, data)
  end


  # Canonical facade: client.IssueSearchResult.list / client.IssueSearchResult.load({ "id" => ... })
  def IssueSearchResult(data = nil)
    require_relative 'entity/issue_search_result_entity'
    IssueSearchResultEntity.new(self, data)
  end


  # Canonical facade: client.IssueToRelease.list / client.IssueToRelease.load({ "id" => ... })
  def IssueToRelease(data = nil)
    require_relative 'entity/issue_to_release_entity'
    IssueToReleaseEntity.new(self, data)
  end


  # Canonical facade: client.LogoutResponse.list / client.LogoutResponse.load({ "id" => ... })
  def LogoutResponse(data = nil)
    require_relative 'entity/logout_response_entity'
    LogoutResponseEntity.new(self, data)
  end


  # Canonical facade: client.Notification.list / client.Notification.load({ "id" => ... })
  def Notification(data = nil)
    require_relative 'entity/notification_entity'
    NotificationEntity.new(self, data)
  end


  # Canonical facade: client.NotificationSubscription.list / client.NotificationSubscription.load({ "id" => ... })
  def NotificationSubscription(data = nil)
    require_relative 'entity/notification_subscription_entity'
    NotificationSubscriptionEntity.new(self, data)
  end


  # Canonical facade: client.OAuthApplication.list / client.OAuthApplication.load({ "id" => ... })
  def OAuthApplication(data = nil)
    require_relative 'entity/o_auth_application_entity'
    OAuthApplicationEntity.new(self, data)
  end


  # Canonical facade: client.Organization.list / client.Organization.load({ "id" => ... })
  def Organization(data = nil)
    require_relative 'entity/organization_entity'
    OrganizationEntity.new(self, data)
  end


  # Canonical facade: client.OrganizationDomain.list / client.OrganizationDomain.load({ "id" => ... })
  def OrganizationDomain(data = nil)
    require_relative 'entity/organization_domain_entity'
    OrganizationDomainEntity.new(self, data)
  end


  # Canonical facade: client.OrganizationInvite.list / client.OrganizationInvite.load({ "id" => ... })
  def OrganizationInvite(data = nil)
    require_relative 'entity/organization_invite_entity'
    OrganizationInviteEntity.new(self, data)
  end


  # Canonical facade: client.OrganizationMeta.list / client.OrganizationMeta.load({ "id" => ... })
  def OrganizationMeta(data = nil)
    require_relative 'entity/organization_meta_entity'
    OrganizationMetaEntity.new(self, data)
  end


  # Canonical facade: client.PasskeyLoginStartResponse.list / client.PasskeyLoginStartResponse.load({ "id" => ... })
  def PasskeyLoginStartResponse(data = nil)
    require_relative 'entity/passkey_login_start_response_entity'
    PasskeyLoginStartResponseEntity.new(self, data)
  end


  # Canonical facade: client.Project.list / client.Project.load({ "id" => ... })
  def Project(data = nil)
    require_relative 'entity/project_entity'
    ProjectEntity.new(self, data)
  end


  # Canonical facade: client.ProjectLabel.list / client.ProjectLabel.load({ "id" => ... })
  def ProjectLabel(data = nil)
    require_relative 'entity/project_label_entity'
    ProjectLabelEntity.new(self, data)
  end


  # Canonical facade: client.ProjectMilestone.list / client.ProjectMilestone.load({ "id" => ... })
  def ProjectMilestone(data = nil)
    require_relative 'entity/project_milestone_entity'
    ProjectMilestoneEntity.new(self, data)
  end


  # Canonical facade: client.ProjectMilestoneMoveProjectTeam.list / client.ProjectMilestoneMoveProjectTeam.load({ "id" => ... })
  def ProjectMilestoneMoveProjectTeam(data = nil)
    require_relative 'entity/project_milestone_move_project_team_entity'
    ProjectMilestoneMoveProjectTeamEntity.new(self, data)
  end


  # Canonical facade: client.ProjectRelation.list / client.ProjectRelation.load({ "id" => ... })
  def ProjectRelation(data = nil)
    require_relative 'entity/project_relation_entity'
    ProjectRelationEntity.new(self, data)
  end


  # Canonical facade: client.ProjectSearchResult.list / client.ProjectSearchResult.load({ "id" => ... })
  def ProjectSearchResult(data = nil)
    require_relative 'entity/project_search_result_entity'
    ProjectSearchResultEntity.new(self, data)
  end


  # Canonical facade: client.ProjectStatus.list / client.ProjectStatus.load({ "id" => ... })
  def ProjectStatus(data = nil)
    require_relative 'entity/project_status_entity'
    ProjectStatusEntity.new(self, data)
  end


  # Canonical facade: client.ProjectUpdate.list / client.ProjectUpdate.load({ "id" => ... })
  def ProjectUpdate(data = nil)
    require_relative 'entity/project_update_entity'
    ProjectUpdateEntity.new(self, data)
  end


  # Canonical facade: client.PushSubscription.list / client.PushSubscription.load({ "id" => ... })
  def PushSubscription(data = nil)
    require_relative 'entity/push_subscription_entity'
    PushSubscriptionEntity.new(self, data)
  end


  # Canonical facade: client.Reaction.list / client.Reaction.load({ "id" => ... })
  def Reaction(data = nil)
    require_relative 'entity/reaction_entity'
    ReactionEntity.new(self, data)
  end


  # Canonical facade: client.Release.list / client.Release.load({ "id" => ... })
  def Release(data = nil)
    require_relative 'entity/release_entity'
    ReleaseEntity.new(self, data)
  end


  # Canonical facade: client.ReleaseNote.list / client.ReleaseNote.load({ "id" => ... })
  def ReleaseNote(data = nil)
    require_relative 'entity/release_note_entity'
    ReleaseNoteEntity.new(self, data)
  end


  # Canonical facade: client.ReleasePipeline.list / client.ReleasePipeline.load({ "id" => ... })
  def ReleasePipeline(data = nil)
    require_relative 'entity/release_pipeline_entity'
    ReleasePipelineEntity.new(self, data)
  end


  # Canonical facade: client.ReleaseStage.list / client.ReleaseStage.load({ "id" => ... })
  def ReleaseStage(data = nil)
    require_relative 'entity/release_stage_entity'
    ReleaseStageEntity.new(self, data)
  end


  # Canonical facade: client.Roadmap.list / client.Roadmap.load({ "id" => ... })
  def Roadmap(data = nil)
    require_relative 'entity/roadmap_entity'
    RoadmapEntity.new(self, data)
  end


  # Canonical facade: client.RoadmapToProject.list / client.RoadmapToProject.load({ "id" => ... })
  def RoadmapToProject(data = nil)
    require_relative 'entity/roadmap_to_project_entity'
    RoadmapToProjectEntity.new(self, data)
  end


  # Canonical facade: client.SlaConfiguration.list / client.SlaConfiguration.load({ "id" => ... })
  def SlaConfiguration(data = nil)
    require_relative 'entity/sla_configuration_entity'
    SlaConfigurationEntity.new(self, data)
  end


  # Canonical facade: client.SsoUrlFromEmailResponse.list / client.SsoUrlFromEmailResponse.load({ "id" => ... })
  def SsoUrlFromEmailResponse(data = nil)
    require_relative 'entity/sso_url_from_email_response_entity'
    SsoUrlFromEmailResponseEntity.new(self, data)
  end


  # Canonical facade: client.Team.list / client.Team.load({ "id" => ... })
  def Team(data = nil)
    require_relative 'entity/team_entity'
    TeamEntity.new(self, data)
  end


  # Canonical facade: client.TeamMembership.list / client.TeamMembership.load({ "id" => ... })
  def TeamMembership(data = nil)
    require_relative 'entity/team_membership_entity'
    TeamMembershipEntity.new(self, data)
  end


  # Canonical facade: client.Template.list / client.Template.load({ "id" => ... })
  def Template(data = nil)
    require_relative 'entity/template_entity'
    TemplateEntity.new(self, data)
  end


  # Canonical facade: client.TimeSchedule.list / client.TimeSchedule.load({ "id" => ... })
  def TimeSchedule(data = nil)
    require_relative 'entity/time_schedule_entity'
    TimeScheduleEntity.new(self, data)
  end


  # Canonical facade: client.TriageResponsibility.list / client.TriageResponsibility.load({ "id" => ... })
  def TriageResponsibility(data = nil)
    require_relative 'entity/triage_responsibility_entity'
    TriageResponsibilityEntity.new(self, data)
  end


  # Canonical facade: client.UploadFile.list / client.UploadFile.load({ "id" => ... })
  def UploadFile(data = nil)
    require_relative 'entity/upload_file_entity'
    UploadFileEntity.new(self, data)
  end


  # Canonical facade: client.UsageAlert.list / client.UsageAlert.load({ "id" => ... })
  def UsageAlert(data = nil)
    require_relative 'entity/usage_alert_entity'
    UsageAlertEntity.new(self, data)
  end


  # Canonical facade: client.User.list / client.User.load({ "id" => ... })
  def User(data = nil)
    require_relative 'entity/user_entity'
    UserEntity.new(self, data)
  end


  # Canonical facade: client.UserSetting.list / client.UserSetting.load({ "id" => ... })
  def UserSetting(data = nil)
    require_relative 'entity/user_setting_entity'
    UserSettingEntity.new(self, data)
  end


  # Canonical facade: client.ViewPreference.list / client.ViewPreference.load({ "id" => ... })
  def ViewPreference(data = nil)
    require_relative 'entity/view_preference_entity'
    ViewPreferenceEntity.new(self, data)
  end


  # Canonical facade: client.Webhook.list / client.Webhook.load({ "id" => ... })
  def Webhook(data = nil)
    require_relative 'entity/webhook_entity'
    WebhookEntity.new(self, data)
  end


  # Canonical facade: client.WebhookFailureEvent.list / client.WebhookFailureEvent.load({ "id" => ... })
  def WebhookFailureEvent(data = nil)
    require_relative 'entity/webhook_failure_event_entity'
    WebhookFailureEventEntity.new(self, data)
  end


  # Canonical facade: client.WorkflowState.list / client.WorkflowState.load({ "id" => ... })
  def WorkflowState(data = nil)
    require_relative 'entity/workflow_state_entity'
    WorkflowStateEntity.new(self, data)
  end



  def self.test(testopts = nil, sdkopts = nil)
    sdkopts = sdkopts || {}
    sdkopts = VoxgigStruct.clone(sdkopts)
    sdkopts = {} unless sdkopts.is_a?(Hash)

    testopts = testopts || {}
    testopts = VoxgigStruct.clone(testopts)
    testopts = {} unless testopts.is_a?(Hash)
    testopts["active"] = true

    VoxgigStruct.setpath(sdkopts, "feature.test", testopts)

    sdk = LinearSDK.new(sdkopts)
    sdk.mode = "test"
    sdk
  end
end
