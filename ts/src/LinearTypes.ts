// Typed models for the Linear SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface AccessKeyRelease {
  archivedAt?: any
  commitSha?: string
  completedAt?: any
  createdAt: any
  id: string
  name: string
  url: string
  version?: string
}

export interface AccessKeyReleaseLoadMatch {
  archivedAt?: any
  commitSha?: string
  completedAt?: any
  createdAt?: any
  id: string
  name?: string
  url?: string
  version?: string
}

export interface AccessKeyReleaseListMatch {
  limit?: number
}

export interface AccessKeyReleaseCreateData {
  archivedAt?: any
  commitSha?: string
  completedAt?: any
  createdAt: any
  id: string
  name: string
  url: string
  version?: string

  // Selects a custom action instead of the plain create:
  //   'release_complete_by_access_key' | 'release_sync_by_access_key' | 'release_update_by_pipeline_by_access_key'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface AccessKeyReleasePipeline {
  id: string
  includePathPatterns: string
}

export interface AccessKeyReleasePipelineLoadMatch {
  id: string
  includePathPatterns?: string
}

export interface AgentActivity {
  agentSession?: Record<string, any>
  archivedAt?: any
  contextualMetadata?: any
  createdAt: any
  ephemeral: boolean
  executionSkippedReason?: string
  id: string
  queued: boolean
  sentAt?: any
  signal?: string
  signalMetadata?: any
  sourceComment?: Record<string, any>
  sourceMetadata?: any
  updatedAt: any
  user?: Record<string, any>
}

export interface AgentActivityLoadMatch {
  id: string
}

export interface AgentActivityListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface AgentActivityCreateData {
  agentSession?: Record<string, any>
  archivedAt?: any
  contextualMetadata?: any
  createdAt: any
  ephemeral: boolean
  executionSkippedReason?: string
  id: string
  queued: boolean
  sentAt?: any
  signal?: string
  signalMetadata?: any
  sourceComment?: Record<string, any>
  sourceMetadata?: any
  updatedAt: any
  user?: Record<string, any>

  // Selects a custom action instead of the plain create:
  //   'create_prompt'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface AgentActivityUpdateData {
  id: string
  agentSession?: Record<string, any>
  archivedAt?: any
  contextualMetadata?: any
  createdAt?: any
  ephemeral?: boolean
  executionSkippedReason?: string
  queued?: boolean
  sentAt?: any
  signal?: string
  signalMetadata?: any
  sourceComment?: Record<string, any>
  sourceMetadata?: any
  updatedAt?: any
  user?: Record<string, any>

  // Selects a custom action instead of the plain update:
  //   'delete_queued' | 'send_queued'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface AgentSession {
  appUser?: Record<string, any>
  archivedAt?: any
  codingHarnessModelLabel?: string
  comment?: Record<string, any>
  context: any
  createdAt: any
  creator?: Record<string, any>
  dismissedAt?: any
  dismissedBy?: Record<string, any>
  endedAt?: any
  id: string
  issue?: Record<string, any>
  modelSelection?: any
  plan?: any
  pullRequest?: Record<string, any>
  slugId: string
  sourceComment?: Record<string, any>
  sourceMetadata?: any
  startedAt?: any
  status: string
  summary?: string
  updatedAt: any
  url?: string
}

export interface AgentSessionLoadMatch {
  id: string
}

export interface AgentSessionListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface AgentSessionCreateData {
  pull_request_id?: string
  appUser?: Record<string, any>
  archivedAt?: any
  codingHarnessModelLabel?: string
  comment?: Record<string, any>
  context: any
  createdAt: any
  creator?: Record<string, any>
  dismissedAt?: any
  dismissedBy?: Record<string, any>
  endedAt?: any
  id: string
  issue?: Record<string, any>
  modelSelection?: any
  plan?: any
  pullRequest?: Record<string, any>
  slugId: string
  sourceComment?: Record<string, any>
  sourceMetadata?: any
  startedAt?: any
  status: string
  summary?: string
  updatedAt: any
  url?: string

  // Selects a custom action instead of the plain create:
  //   'create_on_comment' | 'create_on_issue'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface AgentSessionUpdateData {
  id: string
  appUser?: Record<string, any>
  archivedAt?: any
  codingHarnessModelLabel?: string
  comment?: Record<string, any>
  context?: any
  createdAt?: any
  creator?: Record<string, any>
  dismissedAt?: any
  dismissedBy?: Record<string, any>
  endedAt?: any
  issue?: Record<string, any>
  modelSelection?: any
  plan?: any
  pullRequest?: Record<string, any>
  slugId?: string
  sourceComment?: Record<string, any>
  sourceMetadata?: any
  startedAt?: any
  status?: string
  summary?: string
  updatedAt?: any
  url?: string

  // Selects a custom action instead of the plain update:
  //   'restart_with_default_model' | 'update_external_url'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface AgentSkill {
  archivedAt?: any
  body: string
  color?: string
  createdAt: any
  creator?: Record<string, any>
  description?: string
  icon?: string
  id: string
  inheritedFrom?: Record<string, any>
  lastUpdatedBy?: Record<string, any>
  lastUsedAt?: any
  owner?: Record<string, any>
  recentUsageCount: number
  shared: boolean
  slugId: string
  teamId?: string
  title: string
  updatedAt: any
}

export interface AgentSkillLoadMatch {
  id: string
}

export interface AgentSkillListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface AgentSkillCreateData {
  archivedAt?: any
  body: string
  color?: string
  createdAt: any
  creator?: Record<string, any>
  description?: string
  icon?: string
  id: string
  inheritedFrom?: Record<string, any>
  lastUpdatedBy?: Record<string, any>
  lastUsedAt?: any
  owner?: Record<string, any>
  recentUsageCount: number
  shared: boolean
  slugId: string
  teamId?: string
  title: string
  updatedAt: any
}

export interface AgentSkillUpdateData {
  id: string
  archivedAt?: any
  body?: string
  color?: string
  createdAt?: any
  creator?: Record<string, any>
  description?: string
  icon?: string
  inheritedFrom?: Record<string, any>
  lastUpdatedBy?: Record<string, any>
  lastUsedAt?: any
  owner?: Record<string, any>
  recentUsageCount?: number
  shared?: boolean
  slugId?: string
  teamId?: string
  title?: string
  updatedAt?: any
}

export interface AgentSkillRemoveMatch {
  id: string
}

export interface Application {
  clientId: string
  description?: string
  developer: string
  developerUrl: string
  id: string
  imageUrl?: string
  name: string
}

export interface ApplicationLoadMatch {
  client_id: string
}

export interface Attachment {
  archivedAt?: any
  bodyData?: string
  createdAt: any
  creator?: Record<string, any>
  externalUserCreator?: Record<string, any>
  groupBySource: boolean
  id: string
  issue?: Record<string, any>
  metadata: any
  originalIssue?: Record<string, any>
  source?: any
  sourceType?: string
  subtitle?: string
  title: string
  updatedAt: any
  url: string
}

export interface AttachmentLoadMatch {
  id: string
}

export interface AttachmentListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
  url?: string
}

export interface AttachmentCreateData {
  archivedAt?: any
  bodyData?: string
  createdAt: any
  creator?: Record<string, any>
  externalUserCreator?: Record<string, any>
  groupBySource: boolean
  id: string
  issue?: Record<string, any>
  metadata: any
  originalIssue?: Record<string, any>
  source?: any
  sourceType?: string
  subtitle?: string
  title: string
  updatedAt: any
  url: string
}

export interface AttachmentUpdateData {
  id: string
  archivedAt?: any
  bodyData?: string
  createdAt?: any
  creator?: Record<string, any>
  externalUserCreator?: Record<string, any>
  groupBySource?: boolean
  issue?: Record<string, any>
  metadata?: any
  originalIssue?: Record<string, any>
  source?: any
  sourceType?: string
  subtitle?: string
  title?: string
  updatedAt?: any
  url?: string

  // Selects a custom action instead of the plain update:
  //   'link_discord' | 'link_front' | 'link_git_hub_issue' | 'link_git_hub_pr' | 'link_git_lab_mr' | 'link_intercom' | 'link_jira_issue' | 'link_salesforce' | 'link_slack' | 'link_url' | 'link_zendesk' | 'sync_to_slack'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface AttachmentRemoveMatch {
  id: string
}

export interface AuditEntry {
  actor?: Record<string, any>
  actorId?: string
  archivedAt?: any
  countryCode?: string
  createdAt: any
  id: string
  ip?: string
  metadata?: any
  organization?: Record<string, any>
  requestInformation?: any
  type: string
  updatedAt: any
}

export interface AuditEntryListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface AuditEntryType {
  description: string
  type: string
}

export interface AuditEntryTypeListMatch {
  description?: string
  type?: string
}

export interface AuthResolverResponse {
  allowDomainAccess?: boolean
  email: string
  id: string
  lastUsedOrganizationId?: string
  service?: string
}

export interface AuthResolverResponseLoadMatch {
  allowDomainAccess?: boolean
  email?: string
  id: string
  lastUsedOrganizationId?: string
  service?: string
}

export interface AuthResolverResponseCreateData {
  allowDomainAccess?: boolean
  email: string
  id: string
  lastUsedOrganizationId?: string
  service?: string

  // Selects a custom action instead of the plain create:
  //   'email_token_user_account_auth' | 'google_user_account_auth' | 'saml_token_user_account_auth'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface AuthResolverResponseUpdateData {
  auth_id: string
  response: any
  allowDomainAccess?: boolean
  email?: string
  id?: string
  lastUsedOrganizationId?: string
  service?: string

  // Selects a custom action instead of the plain update:
  //   'passkey_login_finish'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface AuthenticationSessionResponse {
  browserType?: string
  client?: string
  countryCodes: string
  createdAt: any
  detailedName: string
  id: string
  ip?: string
  isCurrentSession: boolean
  lastActiveAt?: any
  location?: string
  locationCity?: string
  locationCountry?: string
  locationCountryCode?: string
  locationRegionCode?: string
  name: string
  operatingSystem?: string
  service?: string
  type: string
  updatedAt: any
  userAgent?: string
}

export interface AuthenticationSessionResponseListMatch {
  id?: string
}

export interface Comment {
  agentSession?: Record<string, any>
  archivedAt?: any
  body: string
  bodyData: string
  botActor?: Record<string, any>
  createdAt: any
  documentContent?: Record<string, any>
  documentContentId?: string
  editedAt?: any
  externalThread?: Record<string, any>
  externalUser?: Record<string, any>
  hideInLinear: boolean
  id: string
  initiative?: Record<string, any>
  initiativeId?: string
  initiativeUpdate?: Record<string, any>
  initiativeUpdateId?: string
  isArtificialAgentSessionRoot: boolean
  issue?: Record<string, any>
  issueId?: string
  onBehalfOf?: Record<string, any>
  parent?: Record<string, any>
  parentId?: string
  post?: Record<string, any>
  project?: Record<string, any>
  projectId?: string
  projectUpdate?: Record<string, any>
  projectUpdateId?: string
  quotedText?: string
  reactionData: any
  resolvedAt?: any
  resolvingComment?: Record<string, any>
  resolvingCommentId?: string
  resolvingUser?: Record<string, any>
  threadSummary?: any
  updatedAt: any
  url: string
  user?: Record<string, any>
}

export interface CommentLoadMatch {
  hash?: string
  id?: string
}

export interface CommentListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface CommentCreateData {
  agentSession?: Record<string, any>
  archivedAt?: any
  body: string
  bodyData: string
  botActor?: Record<string, any>
  createdAt: any
  documentContent?: Record<string, any>
  documentContentId?: string
  editedAt?: any
  externalThread?: Record<string, any>
  externalUser?: Record<string, any>
  hideInLinear: boolean
  id: string
  initiative?: Record<string, any>
  initiativeId?: string
  initiativeUpdate?: Record<string, any>
  initiativeUpdateId?: string
  isArtificialAgentSessionRoot: boolean
  issue?: Record<string, any>
  issueId?: string
  onBehalfOf?: Record<string, any>
  parent?: Record<string, any>
  parentId?: string
  post?: Record<string, any>
  project?: Record<string, any>
  projectId?: string
  projectUpdate?: Record<string, any>
  projectUpdateId?: string
  quotedText?: string
  reactionData: any
  resolvedAt?: any
  resolvingComment?: Record<string, any>
  resolvingCommentId?: string
  resolvingUser?: Record<string, any>
  threadSummary?: any
  updatedAt: any
  url: string
  user?: Record<string, any>
}

export interface CommentUpdateData {
  id: string
  skip_edited_at?: boolean
  agentSession?: Record<string, any>
  archivedAt?: any
  body?: string
  bodyData?: string
  botActor?: Record<string, any>
  createdAt?: any
  documentContent?: Record<string, any>
  documentContentId?: string
  editedAt?: any
  externalThread?: Record<string, any>
  externalUser?: Record<string, any>
  hideInLinear?: boolean
  initiative?: Record<string, any>
  initiativeId?: string
  initiativeUpdate?: Record<string, any>
  initiativeUpdateId?: string
  isArtificialAgentSessionRoot?: boolean
  issue?: Record<string, any>
  issueId?: string
  onBehalfOf?: Record<string, any>
  parent?: Record<string, any>
  parentId?: string
  post?: Record<string, any>
  project?: Record<string, any>
  projectId?: string
  projectUpdate?: Record<string, any>
  projectUpdateId?: string
  quotedText?: string
  reactionData?: any
  resolvedAt?: any
  resolvingComment?: Record<string, any>
  resolvingCommentId?: string
  resolvingUser?: Record<string, any>
  threadSummary?: any
  updatedAt?: any
  url?: string
  user?: Record<string, any>

  // Selects a custom action instead of the plain update:
  //   'resolve' | 'unresolve'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CommentRemoveMatch {
  id: string
}

export interface CreateOrJoinOrganizationResponse {
  organization?: Record<string, any>
  user?: Record<string, any>
}

export interface CreateOrJoinOrganizationResponseCreateData {
  partner_offer_token?: string
  session_id?: string
  organization?: Record<string, any>
  user?: Record<string, any>

  // Selects a custom action instead of the plain create:
  //   'create_organization_from_onboarding' | 'join_organization_from_onboarding'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CreateOrJoinOrganizationResponseUpdateData {
  organization_id: string
  organization?: Record<string, any>
  user?: Record<string, any>

  // Selects a custom action instead of the plain update:
  //   'leave_organization'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CustomView {
  archivedAt?: any
  color?: string
  createdAt: any
  creator?: Record<string, any>
  description?: string
  facet?: Record<string, any>
  feedItemFilterData?: any
  filterData: any
  icon?: string
  id: string
  initiativeFilterData?: any
  modelName: string
  name: string
  organization?: Record<string, any>
  organizationViewPreferences?: Record<string, any>
  owner?: Record<string, any>
  projectFilterData?: any
  shared: boolean
  slugId: string
  team?: Record<string, any>
  updatedAt: any
  updatedBy?: Record<string, any>
  userViewPreferences?: Record<string, any>
}

export interface CustomViewLoadMatch {
  id: string
}

export interface CustomViewListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface CustomViewCreateData {
  archivedAt?: any
  color?: string
  createdAt: any
  creator?: Record<string, any>
  description?: string
  facet?: Record<string, any>
  feedItemFilterData?: any
  filterData: any
  icon?: string
  id: string
  initiativeFilterData?: any
  modelName: string
  name: string
  organization?: Record<string, any>
  organizationViewPreferences?: Record<string, any>
  owner?: Record<string, any>
  projectFilterData?: any
  shared: boolean
  slugId: string
  team?: Record<string, any>
  updatedAt: any
  updatedBy?: Record<string, any>
  userViewPreferences?: Record<string, any>
}

export interface CustomViewUpdateData {
  id: string
  archivedAt?: any
  color?: string
  createdAt?: any
  creator?: Record<string, any>
  description?: string
  facet?: Record<string, any>
  feedItemFilterData?: any
  filterData?: any
  icon?: string
  initiativeFilterData?: any
  modelName?: string
  name?: string
  organization?: Record<string, any>
  organizationViewPreferences?: Record<string, any>
  owner?: Record<string, any>
  projectFilterData?: any
  shared?: boolean
  slugId?: string
  team?: Record<string, any>
  updatedAt?: any
  updatedBy?: Record<string, any>
  userViewPreferences?: Record<string, any>
}

export interface CustomViewRemoveMatch {
  id: string
}

export interface Customer {
  approximateNeedCount: number
  archivedAt?: any
  createdAt: any
  domains: string
  externalIds: string
  id: string
  integration?: Record<string, any>
  logoUrl?: string
  mainSourceId?: string
  name: string
  owner?: Record<string, any>
  revenue?: number
  size?: number
  slackChannelId?: string
  slugId: string
  status?: Record<string, any>
  tier?: Record<string, any>
  updatedAt: any
  url: string
}

export interface CustomerLoadMatch {
  id: string
}

export interface CustomerListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface CustomerCreateData {
  approximateNeedCount: number
  archivedAt?: any
  createdAt: any
  domains: string
  externalIds: string
  id: string
  integration?: Record<string, any>
  logoUrl?: string
  mainSourceId?: string
  name: string
  owner?: Record<string, any>
  revenue?: number
  size?: number
  slackChannelId?: string
  slugId: string
  status?: Record<string, any>
  tier?: Record<string, any>
  updatedAt: any
  url: string

  // Selects a custom action instead of the plain create:
  //   'upsert'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CustomerUpdateData {
  id: string
  approximateNeedCount?: number
  archivedAt?: any
  createdAt?: any
  domains?: string
  externalIds?: string
  integration?: Record<string, any>
  logoUrl?: string
  mainSourceId?: string
  name?: string
  owner?: Record<string, any>
  revenue?: number
  size?: number
  slackChannelId?: string
  slugId?: string
  status?: Record<string, any>
  tier?: Record<string, any>
  updatedAt?: any
  url?: string

  // Selects a custom action instead of the plain update:
  //   'merge' | 'unsync'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CustomerRemoveMatch {
  id: string
}

export interface CustomerNeed {
  archivedAt?: any
  attachment?: Record<string, any>
  body?: string
  bodyData?: string
  comment?: Record<string, any>
  content?: string
  createdAt: any
  creator?: Record<string, any>
  customer?: Record<string, any>
  id: string
  issue?: Record<string, any>
  originalIssue?: Record<string, any>
  priority: number
  project?: Record<string, any>
  projectAttachment?: Record<string, any>
  updatedAt: any
  url?: string
}

export interface CustomerNeedLoadMatch {
  hash?: string
  id?: string
}

export interface CustomerNeedListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface CustomerNeedCreateData {
  archivedAt?: any
  attachment?: Record<string, any>
  body?: string
  bodyData?: string
  comment?: Record<string, any>
  content?: string
  createdAt: any
  creator?: Record<string, any>
  customer?: Record<string, any>
  id: string
  issue?: Record<string, any>
  originalIssue?: Record<string, any>
  priority: number
  project?: Record<string, any>
  projectAttachment?: Record<string, any>
  updatedAt: any
  url?: string

  // Selects a custom action instead of the plain create:
  //   'create_from_attachment'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CustomerNeedUpdateData {
  clear_attachment?: boolean
  id: string
  archivedAt?: any
  attachment?: Record<string, any>
  body?: string
  bodyData?: string
  comment?: Record<string, any>
  content?: string
  createdAt?: any
  creator?: Record<string, any>
  customer?: Record<string, any>
  issue?: Record<string, any>
  originalIssue?: Record<string, any>
  priority?: number
  project?: Record<string, any>
  projectAttachment?: Record<string, any>
  updatedAt?: any
  url?: string

  // Selects a custom action instead of the plain update:
  //   'archive' | 'unarchive'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CustomerNeedRemoveMatch {
  id: string
  keep_attachment?: boolean
}

export interface CustomerStatus {
  archivedAt?: any
  color: string
  createdAt: any
  description?: string
  displayName: string
  id: string
  name: string
  position: number
  updatedAt: any
}

export interface CustomerStatusLoadMatch {
  id: string
}

export interface CustomerStatusListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface CustomerStatusCreateData {
  archivedAt?: any
  color: string
  createdAt: any
  description?: string
  displayName: string
  id: string
  name: string
  position: number
  updatedAt: any
}

export interface CustomerStatusUpdateData {
  id: string
  archivedAt?: any
  color?: string
  createdAt?: any
  description?: string
  displayName?: string
  name?: string
  position?: number
  updatedAt?: any
}

export interface CustomerStatusRemoveMatch {
  id: string
}

export interface CustomerTier {
  archivedAt?: any
  color: string
  createdAt: any
  description?: string
  displayName: string
  id: string
  name: string
  position: number
  updatedAt: any
}

export interface CustomerTierLoadMatch {
  id: string
}

export interface CustomerTierListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface CustomerTierCreateData {
  archivedAt?: any
  color: string
  createdAt: any
  description?: string
  displayName: string
  id: string
  name: string
  position: number
  updatedAt: any
}

export interface CustomerTierUpdateData {
  id: string
  archivedAt?: any
  color?: string
  createdAt?: any
  description?: string
  displayName?: string
  name?: string
  position?: number
  updatedAt?: any
}

export interface CustomerTierRemoveMatch {
  id: string
}

export interface Cycle {
  archivedAt?: any
  autoArchivedAt?: any
  completedAt?: any
  completedIssueCountHistory: number
  completedScopeHistory: number
  createdAt: any
  currentProgress: any
  description?: string
  endsAt: any
  id: string
  inProgressScopeHistory: number
  inheritedFrom?: Record<string, any>
  isActive: boolean
  isFuture: boolean
  isNext: boolean
  isPast: boolean
  isPrevious: boolean
  issueCountHistory: number
  name?: string
  number: number
  progress: number
  progressHistory: any
  scopeHistory: number
  startsAt: any
  team?: Record<string, any>
  updatedAt: any
}

export interface CycleLoadMatch {
  id: string
}

export interface CycleListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface CycleCreateData {
  archivedAt?: any
  autoArchivedAt?: any
  completedAt?: any
  completedIssueCountHistory: number
  completedScopeHistory: number
  createdAt: any
  currentProgress: any
  description?: string
  endsAt: any
  id: string
  inProgressScopeHistory: number
  inheritedFrom?: Record<string, any>
  isActive: boolean
  isFuture: boolean
  isNext: boolean
  isPast: boolean
  isPrevious: boolean
  issueCountHistory: number
  name?: string
  number: number
  progress: number
  progressHistory: any
  scopeHistory: number
  startsAt: any
  team?: Record<string, any>
  updatedAt: any

  // Selects a custom action instead of the plain create:
  //   'shift_all'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CycleUpdateData {
  id: string
  archivedAt?: any
  autoArchivedAt?: any
  completedAt?: any
  completedIssueCountHistory?: number
  completedScopeHistory?: number
  createdAt?: any
  currentProgress?: any
  description?: string
  endsAt?: any
  inProgressScopeHistory?: number
  inheritedFrom?: Record<string, any>
  isActive?: boolean
  isFuture?: boolean
  isNext?: boolean
  isPast?: boolean
  isPrevious?: boolean
  issueCountHistory?: number
  name?: string
  number?: number
  progress?: number
  progressHistory?: any
  scopeHistory?: number
  startsAt?: any
  team?: Record<string, any>
  updatedAt?: any

  // Selects a custom action instead of the plain update:
  //   'archive' | 'start_upcoming_cycle_today'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Diff {
  additions: number
  agentSession?: Record<string, any>
  archivedAt?: any
  contentHash: string
  createdAt: any
  creator?: Record<string, any>
  deletions: number
  fileCount: number
  id: string
  organization?: Record<string, any>
  pullRequest?: Record<string, any>
  slugId: string
  truncated: boolean
  updatedAt: any
}

export interface DiffLoadMatch {
  id: string
}

export interface Document {
  archivedAt?: any
  color?: string
  content?: string
  contentState?: string
  createdAt: any
  creator?: Record<string, any>
  cycle?: Record<string, any>
  documentContentId?: string
  hiddenAt?: any
  icon?: string
  id: string
  initiative?: Record<string, any>
  issue?: Record<string, any>
  lastAppliedTemplate?: Record<string, any>
  owner?: Record<string, any>
  project?: Record<string, any>
  release?: Record<string, any>
  slugId: string
  sortOrder: number
  summary?: string
  team?: Record<string, any>
  title: string
  trashed?: boolean
  updatedAt: any
  updatedBy?: Record<string, any>
  url: string
}

export interface DocumentLoadMatch {
  id: string
}

export interface DocumentListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface DocumentCreateData {
  archivedAt?: any
  color?: string
  content?: string
  contentState?: string
  createdAt: any
  creator?: Record<string, any>
  cycle?: Record<string, any>
  documentContentId?: string
  hiddenAt?: any
  icon?: string
  id: string
  initiative?: Record<string, any>
  issue?: Record<string, any>
  lastAppliedTemplate?: Record<string, any>
  owner?: Record<string, any>
  project?: Record<string, any>
  release?: Record<string, any>
  slugId: string
  sortOrder: number
  summary?: string
  team?: Record<string, any>
  title: string
  trashed?: boolean
  updatedAt: any
  updatedBy?: Record<string, any>
  url: string
}

export interface DocumentUpdateData {
  id: string
  archivedAt?: any
  color?: string
  content?: string
  contentState?: string
  createdAt?: any
  creator?: Record<string, any>
  cycle?: Record<string, any>
  documentContentId?: string
  hiddenAt?: any
  icon?: string
  initiative?: Record<string, any>
  issue?: Record<string, any>
  lastAppliedTemplate?: Record<string, any>
  owner?: Record<string, any>
  project?: Record<string, any>
  release?: Record<string, any>
  slugId?: string
  sortOrder?: number
  summary?: string
  team?: Record<string, any>
  title?: string
  trashed?: boolean
  updatedAt?: any
  updatedBy?: Record<string, any>
  url?: string

  // Selects a custom action instead of the plain update:
  //   'unarchive'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface DocumentRemoveMatch {
  id: string
}

export interface DocumentSearchResult {
  archivedAt?: any
  color?: string
  content?: string
  contentState?: string
  createdAt: any
  creator?: Record<string, any>
  cycle?: Record<string, any>
  documentContentId?: string
  hiddenAt?: any
  icon?: string
  id: string
  initiative?: Record<string, any>
  issue?: Record<string, any>
  lastAppliedTemplate?: Record<string, any>
  metadata: any
  owner?: Record<string, any>
  project?: Record<string, any>
  release?: Record<string, any>
  slugId: string
  sortOrder: number
  summary?: string
  team?: Record<string, any>
  title: string
  trashed?: boolean
  updatedAt: any
  updatedBy?: Record<string, any>
  url: string
}

export interface DocumentSearchResultListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  include_comment?: boolean
  last?: number
  order_by?: any
  team_id?: string
  term: string
}

export interface EmailIntakeAddress {
  address: string
  archivedAt?: any
  createdAt: any
  creator?: Record<string, any>
  customerRequestsEnabled: boolean
  enabled: boolean
  forwardingEmailAddress?: string
  id: string
  issueCanceledAutoReply?: string
  issueCanceledAutoReplyEnabled: boolean
  issueCompletedAutoReply?: string
  issueCompletedAutoReplyEnabled: boolean
  issueCreatedAutoReply?: string
  issueCreatedAutoReplyEnabled: boolean
  lastUsedAt?: any
  organization?: Record<string, any>
  reopenOnReply: boolean
  repliesEnabled: boolean
  senderName?: string
  sesDomainIdentity?: Record<string, any>
  team?: Record<string, any>
  template?: Record<string, any>
  type: string
  updatedAt: any
  useUserNamesInReplies: boolean
}

export interface EmailIntakeAddressLoadMatch {
  id: string
}

export interface EmailIntakeAddressCreateData {
  address: string
  archivedAt?: any
  createdAt: any
  creator?: Record<string, any>
  customerRequestsEnabled: boolean
  enabled: boolean
  forwardingEmailAddress?: string
  id: string
  issueCanceledAutoReply?: string
  issueCanceledAutoReplyEnabled: boolean
  issueCompletedAutoReply?: string
  issueCompletedAutoReplyEnabled: boolean
  issueCreatedAutoReply?: string
  issueCreatedAutoReplyEnabled: boolean
  lastUsedAt?: any
  organization?: Record<string, any>
  reopenOnReply: boolean
  repliesEnabled: boolean
  senderName?: string
  sesDomainIdentity?: Record<string, any>
  team?: Record<string, any>
  template?: Record<string, any>
  type: string
  updatedAt: any
  useUserNamesInReplies: boolean
}

export interface EmailIntakeAddressUpdateData {
  id: string
  address?: string
  archivedAt?: any
  createdAt?: any
  creator?: Record<string, any>
  customerRequestsEnabled?: boolean
  enabled?: boolean
  forwardingEmailAddress?: string
  issueCanceledAutoReply?: string
  issueCanceledAutoReplyEnabled?: boolean
  issueCompletedAutoReply?: string
  issueCompletedAutoReplyEnabled?: boolean
  issueCreatedAutoReply?: string
  issueCreatedAutoReplyEnabled?: boolean
  lastUsedAt?: any
  organization?: Record<string, any>
  reopenOnReply?: boolean
  repliesEnabled?: boolean
  senderName?: string
  sesDomainIdentity?: Record<string, any>
  team?: Record<string, any>
  template?: Record<string, any>
  type?: string
  updatedAt?: any
  useUserNamesInReplies?: boolean

  // Selects a custom action instead of the plain update:
  //   'rotate'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface EmailIntakeAddressRemoveMatch {
  id: string
}

export interface EmailUserAccountAuthChallengeResponse {
  authType: string
  success: boolean
}

export interface EmailUserAccountAuthChallengeResponseCreateData {
  authType: string
  success: boolean

  // Selects a custom action instead of the plain create:
  //   'email_user_account_auth_challenge'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Emoji {
  archivedAt?: any
  createdAt: any
  creator?: Record<string, any>
  id: string
  name: string
  organization?: Record<string, any>
  source: string
  updatedAt: any
  url: string
}

export interface EmojiLoadMatch {
  id: string
}

export interface EmojiListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface EmojiCreateData {
  archivedAt?: any
  createdAt: any
  creator?: Record<string, any>
  id: string
  name: string
  organization?: Record<string, any>
  source: string
  updatedAt: any
  url: string
}

export interface EmojiRemoveMatch {
  id: string
}

export interface EntityExternalLink {
  archivedAt?: any
  createdAt: any
  creator?: Record<string, any>
  id: string
  initiative?: Record<string, any>
  label: string
  project?: Record<string, any>
  sortOrder: number
  updatedAt: any
  url: string
}

export interface EntityExternalLinkLoadMatch {
  id: string
}

export interface EntityExternalLinkCreateData {
  archivedAt?: any
  createdAt: any
  creator?: Record<string, any>
  id: string
  initiative?: Record<string, any>
  label: string
  project?: Record<string, any>
  sortOrder: number
  updatedAt: any
  url: string
}

export interface EntityExternalLinkUpdateData {
  id: string
  archivedAt?: any
  createdAt?: any
  creator?: Record<string, any>
  initiative?: Record<string, any>
  label?: string
  project?: Record<string, any>
  sortOrder?: number
  updatedAt?: any
  url?: string
}

export interface EntityExternalLinkRemoveMatch {
  id: string
}

export interface ExternalUser {
  archivedAt?: any
  avatarUrl?: string
  createdAt: any
  displayName: string
  email?: string
  id: string
  lastSeen?: any
  name: string
  organization?: Record<string, any>
  updatedAt: any
}

export interface ExternalUserLoadMatch {
  id: string
}

export interface ExternalUserListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface Favorite {
  aiConversation?: Record<string, any>
  archivedAt?: any
  color?: string
  createdAt: any
  customView?: Record<string, any>
  customer?: Record<string, any>
  cycle?: Record<string, any>
  dashboard?: Record<string, any>
  detail?: string
  document?: Record<string, any>
  facet?: Record<string, any>
  folderName?: string
  icon?: string
  id: string
  initiative?: Record<string, any>
  initiativeLabel?: Record<string, any>
  initiativeTab?: string
  issue?: Record<string, any>
  label?: Record<string, any>
  liveFolderDefinition?: any
  liveFolderPreset?: string
  owner?: Record<string, any>
  parent?: Record<string, any>
  pipelineTab?: string
  predefinedViewTeam?: Record<string, any>
  predefinedViewType?: string
  project?: Record<string, any>
  projectLabel?: Record<string, any>
  projectTab?: string
  projectTeam?: Record<string, any>
  pullRequest?: Record<string, any>
  release?: Record<string, any>
  releaseNote?: Record<string, any>
  releasePipeline?: Record<string, any>
  sortOrder: number
  team?: Record<string, any>
  title: string
  type: string
  updatedAt: any
  url?: string
  user?: Record<string, any>
  workflowDefinition?: Record<string, any>
}

export interface FavoriteLoadMatch {
  id: string
}

export interface FavoriteListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface FavoriteCreateData {
  aiConversation?: Record<string, any>
  archivedAt?: any
  color?: string
  createdAt: any
  customView?: Record<string, any>
  customer?: Record<string, any>
  cycle?: Record<string, any>
  dashboard?: Record<string, any>
  detail?: string
  document?: Record<string, any>
  facet?: Record<string, any>
  folderName?: string
  icon?: string
  id: string
  initiative?: Record<string, any>
  initiativeLabel?: Record<string, any>
  initiativeTab?: string
  issue?: Record<string, any>
  label?: Record<string, any>
  liveFolderDefinition?: any
  liveFolderPreset?: string
  owner?: Record<string, any>
  parent?: Record<string, any>
  pipelineTab?: string
  predefinedViewTeam?: Record<string, any>
  predefinedViewType?: string
  project?: Record<string, any>
  projectLabel?: Record<string, any>
  projectTab?: string
  projectTeam?: Record<string, any>
  pullRequest?: Record<string, any>
  release?: Record<string, any>
  releaseNote?: Record<string, any>
  releasePipeline?: Record<string, any>
  sortOrder: number
  team?: Record<string, any>
  title: string
  type: string
  updatedAt: any
  url?: string
  user?: Record<string, any>
  workflowDefinition?: Record<string, any>
}

export interface FavoriteUpdateData {
  id: string
  aiConversation?: Record<string, any>
  archivedAt?: any
  color?: string
  createdAt?: any
  customView?: Record<string, any>
  customer?: Record<string, any>
  cycle?: Record<string, any>
  dashboard?: Record<string, any>
  detail?: string
  document?: Record<string, any>
  facet?: Record<string, any>
  folderName?: string
  icon?: string
  initiative?: Record<string, any>
  initiativeLabel?: Record<string, any>
  initiativeTab?: string
  issue?: Record<string, any>
  label?: Record<string, any>
  liveFolderDefinition?: any
  liveFolderPreset?: string
  owner?: Record<string, any>
  parent?: Record<string, any>
  pipelineTab?: string
  predefinedViewTeam?: Record<string, any>
  predefinedViewType?: string
  project?: Record<string, any>
  projectLabel?: Record<string, any>
  projectTab?: string
  projectTeam?: Record<string, any>
  pullRequest?: Record<string, any>
  release?: Record<string, any>
  releaseNote?: Record<string, any>
  releasePipeline?: Record<string, any>
  sortOrder?: number
  team?: Record<string, any>
  title?: string
  type?: string
  updatedAt?: any
  url?: string
  user?: Record<string, any>
  workflowDefinition?: Record<string, any>
}

export interface FavoriteRemoveMatch {
  id: string
}

export interface GitAutomationState {
  archivedAt?: any
  createdAt: any
  event: string
  id: string
  state?: Record<string, any>
  targetBranch?: Record<string, any>
  team?: Record<string, any>
  updatedAt: any
}

export interface GitAutomationStateCreateData {
  archivedAt?: any
  createdAt: any
  event: string
  id: string
  state?: Record<string, any>
  targetBranch?: Record<string, any>
  team?: Record<string, any>
  updatedAt: any
}

export interface GitAutomationStateUpdateData {
  id: string
  archivedAt?: any
  createdAt?: any
  event?: string
  state?: Record<string, any>
  targetBranch?: Record<string, any>
  team?: Record<string, any>
  updatedAt?: any
}

export interface GitAutomationStateRemoveMatch {
  id: string
}

export interface GitAutomationTargetBranch {
  archivedAt?: any
  branchPattern: string
  createdAt: any
  id: string
  isRegex: boolean
  team?: Record<string, any>
  updatedAt: any
}

export interface GitAutomationTargetBranchCreateData {
  archivedAt?: any
  branchPattern: string
  createdAt: any
  id: string
  isRegex: boolean
  team?: Record<string, any>
  updatedAt: any
}

export interface GitAutomationTargetBranchUpdateData {
  id: string
  archivedAt?: any
  branchPattern?: string
  createdAt?: any
  isRegex?: boolean
  team?: Record<string, any>
  updatedAt?: any
}

export interface GitAutomationTargetBranchRemoveMatch {
  id: string
}

export interface GitHubIntegrationConnectDetail {
  lostRepositoryNames?: string
}

export interface GitHubIntegrationConnectDetailCreateData {
  code?: string
  redirect_uri?: string
  github_url?: string
  organization_name?: string
  access_token?: string
  expires_at?: string
  gitlab_url?: string
  readonly?: boolean
  validation_project_path?: string
  lostRepositoryNames?: string

  // Selects a custom action instead of the plain create:
  //   'integration_asks_connect_channel' | 'integration_git_hub_enterprise_server_connect' | 'integration_github_commit_create' | 'integration_gitlab_connect' | 'integration_jira_fetch_project_status' | 'integration_slack_org_initiative_updates_post' | 'integration_slack_org_project_updates_post'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface GitHubIntegrationConnectDetailUpdateData {
  code?: string
  project_id?: string
  redirect_uri?: string
  service?: string
  custom_view_id?: string
  initiative_id?: string
  should_use_v2_auth?: boolean
  team_id?: string
  integration_id?: string
  lostRepositoryNames?: string

  // Selects a custom action instead of the plain update:
  //   'integration_gitlab_test_connection' | 'integration_slack_custom_view_notification' | 'integration_slack_initiative_post' | 'integration_slack_post' | 'integration_slack_project_post'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Initiative {
  archivedAt?: any
  canceledAt?: any
  color?: string
  completedAt?: any
  content?: string
  createdAt: any
  creator?: Record<string, any>
  description?: string
  documentContent?: Record<string, any>
  frequencyResolution: string
  health?: string
  healthUpdatedAt?: any
  icon?: string
  id: string
  identifier?: string
  integrationsSettings?: Record<string, any>
  labelIds: string
  lastUpdate?: Record<string, any>
  leadTeam?: Record<string, any>
  name: string
  organization?: Record<string, any>
  owner?: Record<string, any>
  parentInitiative?: Record<string, any>
  previousIdentifiers: string
  priority: number
  prioritySortOrder: number
  slugId: string
  sortOrder: number
  startedAt?: any
  status: string
  targetDate?: any
  targetDateResolution?: string
  trashed?: boolean
  updateReminderFrequency?: number
  updateReminderFrequencyInWeeks?: number
  updateRemindersDay?: string
  updateRemindersHour?: number
  updatedAt: any
  url: string
  visibility: string
}

export interface InitiativeLoadMatch {
  id: string
}

export interface InitiativeListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface InitiativeCreateData {
  archivedAt?: any
  canceledAt?: any
  color?: string
  completedAt?: any
  content?: string
  createdAt: any
  creator?: Record<string, any>
  description?: string
  documentContent?: Record<string, any>
  frequencyResolution: string
  health?: string
  healthUpdatedAt?: any
  icon?: string
  id: string
  identifier?: string
  integrationsSettings?: Record<string, any>
  labelIds: string
  lastUpdate?: Record<string, any>
  leadTeam?: Record<string, any>
  name: string
  organization?: Record<string, any>
  owner?: Record<string, any>
  parentInitiative?: Record<string, any>
  previousIdentifiers: string
  priority: number
  prioritySortOrder: number
  slugId: string
  sortOrder: number
  startedAt?: any
  status: string
  targetDate?: any
  targetDateResolution?: string
  trashed?: boolean
  updateReminderFrequency?: number
  updateReminderFrequencyInWeeks?: number
  updateRemindersDay?: string
  updateRemindersHour?: number
  updatedAt: any
  url: string
  visibility: string
}

export interface InitiativeUpdateData {
  id: string
  archivedAt?: any
  canceledAt?: any
  color?: string
  completedAt?: any
  content?: string
  createdAt?: any
  creator?: Record<string, any>
  description?: string
  documentContent?: Record<string, any>
  frequencyResolution?: string
  health?: string
  healthUpdatedAt?: any
  icon?: string
  identifier?: string
  integrationsSettings?: Record<string, any>
  labelIds?: string
  lastUpdate?: Record<string, any>
  leadTeam?: Record<string, any>
  name?: string
  organization?: Record<string, any>
  owner?: Record<string, any>
  parentInitiative?: Record<string, any>
  previousIdentifiers?: string
  priority?: number
  prioritySortOrder?: number
  slugId?: string
  sortOrder?: number
  startedAt?: any
  status?: string
  targetDate?: any
  targetDateResolution?: string
  trashed?: boolean
  updateReminderFrequency?: number
  updateReminderFrequencyInWeeks?: number
  updateRemindersDay?: string
  updateRemindersHour?: number
  updatedAt?: any
  url?: string
  visibility?: string

  // Selects a custom action instead of the plain update:
  //   'add_label' | 'archive' | 'lead_team_update' | 'remove_label' | 'unarchive'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface InitiativeRemoveMatch {
  id: string
}

export interface InitiativeLabel {
  archivedAt?: any
  color: string
  createdAt: any
  creator?: Record<string, any>
  description?: string
  id: string
  isGroup: boolean
  lastAppliedAt?: any
  name: string
  organization?: Record<string, any>
  parent?: Record<string, any>
  retiredAt?: any
  retiredBy?: Record<string, any>
  updatedAt: any
}

export interface InitiativeLabelLoadMatch {
  id: string
}

export interface InitiativeLabelListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface InitiativeLabelCreateData {
  archivedAt?: any
  color: string
  createdAt: any
  creator?: Record<string, any>
  description?: string
  id: string
  isGroup: boolean
  lastAppliedAt?: any
  name: string
  organization?: Record<string, any>
  parent?: Record<string, any>
  retiredAt?: any
  retiredBy?: Record<string, any>
  updatedAt: any
}

export interface InitiativeLabelUpdateData {
  id: string
  archivedAt?: any
  color?: string
  createdAt?: any
  creator?: Record<string, any>
  description?: string
  isGroup?: boolean
  lastAppliedAt?: any
  name?: string
  organization?: Record<string, any>
  parent?: Record<string, any>
  retiredAt?: any
  retiredBy?: Record<string, any>
  updatedAt?: any

  // Selects a custom action instead of the plain update:
  //   'restore' | 'retire'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface InitiativeLabelRemoveMatch {
  id: string
}

export interface InitiativeLeadTeamChangeImpact {
  affectedDescendantCount: number
  id?: string
  visibilityMayChange: boolean
}

export interface InitiativeLeadTeamChangeImpactLoadMatch {
  id: string
  lead_team_id?: string
}

export interface InitiativeRelation {
  archivedAt?: any
  createdAt: any
  id: string
  initiative?: Record<string, any>
  relatedInitiative?: Record<string, any>
  sortOrder: number
  updatedAt: any
  user?: Record<string, any>
}

export interface InitiativeRelationLoadMatch {
  id: string
}

export interface InitiativeRelationListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface InitiativeRelationCreateData {
  archivedAt?: any
  createdAt: any
  id: string
  initiative?: Record<string, any>
  relatedInitiative?: Record<string, any>
  sortOrder: number
  updatedAt: any
  user?: Record<string, any>
}

export interface InitiativeRelationUpdateData {
  id: string
  archivedAt?: any
  createdAt?: any
  initiative?: Record<string, any>
  relatedInitiative?: Record<string, any>
  sortOrder?: number
  updatedAt?: any
  user?: Record<string, any>
}

export interface InitiativeRelationRemoveMatch {
  id: string
}

export interface InitiativeToProject {
  archivedAt?: any
  createdAt: any
  id: string
  initiative?: Record<string, any>
  project?: Record<string, any>
  sortOrder: string
  updatedAt: any
}

export interface InitiativeToProjectLoadMatch {
  id: string
}

export interface InitiativeToProjectListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface InitiativeToProjectCreateData {
  archivedAt?: any
  createdAt: any
  id: string
  initiative?: Record<string, any>
  project?: Record<string, any>
  sortOrder: string
  updatedAt: any
}

export interface InitiativeToProjectUpdateData {
  id: string
  archivedAt?: any
  createdAt?: any
  initiative?: Record<string, any>
  project?: Record<string, any>
  sortOrder?: string
  updatedAt?: any
}

export interface InitiativeToProjectRemoveMatch {
  id: string
}

export interface InitiativeUpdate {
  archivedAt?: any
  body: string
  bodyData: string
  commentCount: number
  createdAt: any
  diff?: any
  diffMarkdown?: string
  editedAt?: any
  health: string
  id: string
  infoSnapshot?: any
  initiative?: Record<string, any>
  isDiffHidden: boolean
  isStale: boolean
  reactionData: any
  slugId: string
  updatedAt: any
  url: string
  user?: Record<string, any>
}

export interface InitiativeUpdateLoadMatch {
  id: string
}

export interface InitiativeUpdateListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface InitiativeUpdateCreateData {
  archivedAt?: any
  body: string
  bodyData: string
  commentCount: number
  createdAt: any
  diff?: any
  diffMarkdown?: string
  editedAt?: any
  health: string
  id: string
  infoSnapshot?: any
  initiative?: Record<string, any>
  isDiffHidden: boolean
  isStale: boolean
  reactionData: any
  slugId: string
  updatedAt: any
  url: string
  user?: Record<string, any>
}

export interface InitiativeUpdateUpdateData {
  id: string
  archivedAt?: any
  body?: string
  bodyData?: string
  commentCount?: number
  createdAt?: any
  diff?: any
  diffMarkdown?: string
  editedAt?: any
  health?: string
  infoSnapshot?: any
  initiative?: Record<string, any>
  isDiffHidden?: boolean
  isStale?: boolean
  reactionData?: any
  slugId?: string
  updatedAt?: any
  url?: string
  user?: Record<string, any>

  // Selects a custom action instead of the plain update:
  //   'archive' | 'unarchive'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Integration {
  archivedAt?: any
  createdAt: any
  creator?: Record<string, any>
  id: string
  organization?: Record<string, any>
  service: string
  team?: Record<string, any>
  updatedAt: any
}

export interface IntegrationLoadMatch {
  id: string
}

export interface IntegrationListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface IntegrationCreateData {
  code?: string
  code_verifier?: string
  redirect_uri?: string
  subdomain?: string
  environment?: string
  project_key?: string
  domain_url?: string
  requested_scope?: string
  should_use_v2_auth?: boolean
  code_access?: boolean
  enterprise_url?: string
  mcp_server_definition_id?: string
  server_url?: string
  team_id?: string
  workflow_definition_draft_id?: string
  workflow_definition_id?: string
  api_key?: string
  access_token?: string
  bot_user_role?: string
  custom_api_url?: string
  scope?: string
  archivedAt?: any
  createdAt: any
  creator?: Record<string, any>
  id: string
  organization?: Record<string, any>
  service: string
  team?: Record<string, any>
  updatedAt: any

  // Selects a custom action instead of the plain create:
  //   'airbyte_integration_connect' | 'customer_data_attributes_refresh' | 'discord' | 'figma' | 'front' | 'git_hub_personal' | 'gong' | 'google_calendar_personal_connect' | 'google_sheet' | 'intercom' | 'intercom_delete' | 'intercom_settings_update' | 'jira_integration_connect' | 'jira_personal' | 'jira_update' | 'launch_darkly_connect' | 'launch_darkly_personal_connect' | 'loom' | 'mcp_server_connect' | 'mcp_server_personal_connect' | 'microsoft_personal_connect' | 'microsoft_team' | 'opsgenie_connect' | 'opsgenie_refresh_schedule_mapping' | 'pager_duty_connect' | 'pager_duty_refresh_schedule_mapping' | 'salesforce' | 'slack' | 'slack_ask' | 'slack_import_emoji' | 'slack_personal' | 'zendesk'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface IntegrationUpdateData {
  id: string
  archivedAt?: any
  createdAt?: any
  creator?: Record<string, any>
  organization?: Record<string, any>
  service?: string
  team?: Record<string, any>
  updatedAt?: any

  // Selects a custom action instead of the plain update:
  //   'archive' | 'datadog_connect' | 'github_connect' | 'github_import_connect' | 'github_import_refresh' | 'microsoft_teams_project_post' | 'refresh_google_sheets_data' | 'salesforce_metadata_refresh' | 'sentry_connect' | 'settings_update' | 'slack_workflow_access_update' | 'update_integration_slack_scope'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface IntegrationRemoveMatch {
  id: string
  skip_installation_deletion?: boolean
}

export interface IntegrationTemplate {
  archivedAt?: any
  createdAt: any
  foreignEntityId?: string
  id: string
  integration?: Record<string, any>
  template?: Record<string, any>
  updatedAt: any
}

export interface IntegrationTemplateLoadMatch {
  id: string
}

export interface IntegrationTemplateListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface IntegrationTemplateCreateData {
  archivedAt?: any
  createdAt: any
  foreignEntityId?: string
  id: string
  integration?: Record<string, any>
  template?: Record<string, any>
  updatedAt: any
}

export interface IntegrationTemplateRemoveMatch {
  id: string
}

export interface IntegrationsSetting {
  archivedAt?: any
  contextViewType?: string
  createdAt: any
  id: string
  initiative?: Record<string, any>
  microsoftTeamsProjectUpdateCreated?: boolean
  project?: Record<string, any>
  slackInitiativeUpdateCreated?: boolean
  slackIssueAddedToTriage?: boolean
  slackIssueAddedToView?: boolean
  slackIssueNewComment?: boolean
  slackIssueSlaBreached?: boolean
  slackIssueSlaHighRisk?: boolean
  slackIssueStatusChangedAll?: boolean
  slackIssueStatusChangedDone?: boolean
  slackProjectUpdateCreated?: boolean
  slackProjectUpdateCreatedToTeam?: boolean
  slackProjectUpdateCreatedToWorkspace?: boolean
  team?: Record<string, any>
  updatedAt: any
}

export interface IntegrationsSettingLoadMatch {
  id: string
}

export interface IntegrationsSettingCreateData {
  archivedAt?: any
  contextViewType?: string
  createdAt: any
  id: string
  initiative?: Record<string, any>
  microsoftTeamsProjectUpdateCreated?: boolean
  project?: Record<string, any>
  slackInitiativeUpdateCreated?: boolean
  slackIssueAddedToTriage?: boolean
  slackIssueAddedToView?: boolean
  slackIssueNewComment?: boolean
  slackIssueSlaBreached?: boolean
  slackIssueSlaHighRisk?: boolean
  slackIssueStatusChangedAll?: boolean
  slackIssueStatusChangedDone?: boolean
  slackProjectUpdateCreated?: boolean
  slackProjectUpdateCreatedToTeam?: boolean
  slackProjectUpdateCreatedToWorkspace?: boolean
  team?: Record<string, any>
  updatedAt: any
}

export interface IntegrationsSettingUpdateData {
  id: string
  archivedAt?: any
  contextViewType?: string
  createdAt?: any
  initiative?: Record<string, any>
  microsoftTeamsProjectUpdateCreated?: boolean
  project?: Record<string, any>
  slackInitiativeUpdateCreated?: boolean
  slackIssueAddedToTriage?: boolean
  slackIssueAddedToView?: boolean
  slackIssueNewComment?: boolean
  slackIssueSlaBreached?: boolean
  slackIssueSlaHighRisk?: boolean
  slackIssueStatusChangedAll?: boolean
  slackIssueStatusChangedDone?: boolean
  slackProjectUpdateCreated?: boolean
  slackProjectUpdateCreatedToTeam?: boolean
  slackProjectUpdateCreatedToWorkspace?: boolean
  team?: Record<string, any>
  updatedAt?: any
}

export interface Issue {
  activitySummary?: any
  addedToCycleAt?: any
  addedToProjectAt?: any
  addedToTeamAt?: any
  archivedAt?: any
  asksExternalUserRequester?: Record<string, any>
  asksRequester?: Record<string, any>
  assignee?: Record<string, any>
  autoArchivedAt?: any
  autoClosedAt?: any
  botActor?: Record<string, any>
  branchName: string
  canceledAt?: any
  completedAt?: any
  createdAt: any
  creator?: Record<string, any>
  customerTicketCount: number
  cycle?: Record<string, any>
  delegate?: Record<string, any>
  description?: string
  descriptionState?: string
  documentContent?: Record<string, any>
  dueDate?: any
  estimate?: number
  externalUserCreator?: Record<string, any>
  favorite?: Record<string, any>
  id: string
  identifier: string
  inheritsSharedAccess: boolean
  integrationSourceType?: string
  labelIds: string
  lastAppliedTemplate?: Record<string, any>
  number: number
  parent?: Record<string, any>
  previousIdentifiers: string
  priority: number
  priorityLabel: string
  prioritySortOrder: number
  project?: Record<string, any>
  projectMilestone?: Record<string, any>
  reactionData: any
  recurringIssueTemplate?: Record<string, any>
  slaBreachesAt?: any
  slaHighRiskAt?: any
  slaMediumRiskAt?: any
  slaStartedAt?: any
  slaType?: string
  snoozedBy?: Record<string, any>
  snoozedUntilAt?: any
  sortOrder: number
  sourceComment?: Record<string, any>
  startedAt?: any
  startedTriageAt?: any
  state?: Record<string, any>
  subIssueSortOrder?: number
  suggestionsGeneratedAt?: any
  summary?: Record<string, any>
  team?: Record<string, any>
  title: string
  trashed?: boolean
  triagedAt?: any
  trusted?: boolean
  updatedAt: any
  url: string
}

export interface IssueLoadMatch {
  branch_name?: string
  id?: string
}

export interface IssueListMatch {
  after?: string
  before?: string
  file_key?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
  query?: string
}

export interface IssueCreateData {
  activitySummary?: any
  addedToCycleAt?: any
  addedToProjectAt?: any
  addedToTeamAt?: any
  archivedAt?: any
  asksExternalUserRequester?: Record<string, any>
  asksRequester?: Record<string, any>
  assignee?: Record<string, any>
  autoArchivedAt?: any
  autoClosedAt?: any
  botActor?: Record<string, any>
  branchName: string
  canceledAt?: any
  completedAt?: any
  createdAt: any
  creator?: Record<string, any>
  customerTicketCount: number
  cycle?: Record<string, any>
  delegate?: Record<string, any>
  description?: string
  descriptionState?: string
  documentContent?: Record<string, any>
  dueDate?: any
  estimate?: number
  externalUserCreator?: Record<string, any>
  favorite?: Record<string, any>
  id: string
  identifier: string
  inheritsSharedAccess: boolean
  integrationSourceType?: string
  labelIds: string
  lastAppliedTemplate?: Record<string, any>
  number: number
  parent?: Record<string, any>
  previousIdentifiers: string
  priority: number
  priorityLabel: string
  prioritySortOrder: number
  project?: Record<string, any>
  projectMilestone?: Record<string, any>
  reactionData: any
  recurringIssueTemplate?: Record<string, any>
  slaBreachesAt?: any
  slaHighRiskAt?: any
  slaMediumRiskAt?: any
  slaStartedAt?: any
  slaType?: string
  snoozedBy?: Record<string, any>
  snoozedUntilAt?: any
  sortOrder: number
  sourceComment?: Record<string, any>
  startedAt?: any
  startedTriageAt?: any
  state?: Record<string, any>
  subIssueSortOrder?: number
  suggestionsGeneratedAt?: any
  summary?: Record<string, any>
  team?: Record<string, any>
  title: string
  trashed?: boolean
  triagedAt?: any
  trusted?: boolean
  updatedAt: any
  url: string
}

export interface IssueUpdateData {
  id: string
  activitySummary?: any
  addedToCycleAt?: any
  addedToProjectAt?: any
  addedToTeamAt?: any
  archivedAt?: any
  asksExternalUserRequester?: Record<string, any>
  asksRequester?: Record<string, any>
  assignee?: Record<string, any>
  autoArchivedAt?: any
  autoClosedAt?: any
  botActor?: Record<string, any>
  branchName?: string
  canceledAt?: any
  completedAt?: any
  createdAt?: any
  creator?: Record<string, any>
  customerTicketCount?: number
  cycle?: Record<string, any>
  delegate?: Record<string, any>
  description?: string
  descriptionState?: string
  documentContent?: Record<string, any>
  dueDate?: any
  estimate?: number
  externalUserCreator?: Record<string, any>
  favorite?: Record<string, any>
  identifier?: string
  inheritsSharedAccess?: boolean
  integrationSourceType?: string
  labelIds?: string
  lastAppliedTemplate?: Record<string, any>
  number?: number
  parent?: Record<string, any>
  previousIdentifiers?: string
  priority?: number
  priorityLabel?: string
  prioritySortOrder?: number
  project?: Record<string, any>
  projectMilestone?: Record<string, any>
  reactionData?: any
  recurringIssueTemplate?: Record<string, any>
  slaBreachesAt?: any
  slaHighRiskAt?: any
  slaMediumRiskAt?: any
  slaStartedAt?: any
  slaType?: string
  snoozedBy?: Record<string, any>
  snoozedUntilAt?: any
  sortOrder?: number
  sourceComment?: Record<string, any>
  startedAt?: any
  startedTriageAt?: any
  state?: Record<string, any>
  subIssueSortOrder?: number
  suggestionsGeneratedAt?: any
  summary?: Record<string, any>
  team?: Record<string, any>
  title?: string
  trashed?: boolean
  triagedAt?: any
  trusted?: boolean
  updatedAt?: any
  url?: string

  // Selects a custom action instead of the plain update:
  //   'add_label' | 'archive' | 'description_update_from_front' | 'external_sync_disable' | 'reminder' | 'remove_label' | 'share' | 'subscribe' | 'unarchive' | 'unshare' | 'unsubscribe'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface IssueRemoveMatch {
  id: string
  permanently_delete?: boolean
}

export interface IssueImport {
  archivedAt?: any
  createdAt: any
  creatorId?: string
  csvFileUrl?: string
  displayName: string
  error?: string
  errorMetadata?: any
  id: string
  mapping?: any
  progress?: number
  service: string
  serviceMetadata?: any
  status: string
  teamName?: string
  updatedAt: any
}

export interface IssueImportCreateData {
  id?: string
  include_closed_issue?: boolean
  instant_process?: boolean
  jira_email?: string
  jira_hostname?: string
  jira_project?: string
  jira_token?: string
  jql?: string
  team_id?: string
  team_name?: string
  asana_team_name?: string
  asana_token?: string
  clubhouse_group_name?: string
  clubhouse_token?: string
  csv_url?: string
  github_label?: string
  github_repo_id?: number
  archivedAt?: any
  createdAt: any
  creatorId?: string
  csvFileUrl?: string
  displayName: string
  error?: string
  errorMetadata?: any
  mapping?: any
  progress?: number
  service: string
  serviceMetadata?: any
  status: string
  teamName?: string
  updatedAt: any

  // Selects a custom action instead of the plain create:
  //   'create_asana' | 'create_clubhouse' | 'create_csv_jira' | 'create_github' | 'create_jira'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface IssueImportUpdateData {
  id: string
  archivedAt?: any
  createdAt?: any
  creatorId?: string
  csvFileUrl?: string
  displayName?: string
  error?: string
  errorMetadata?: any
  mapping?: any
  progress?: number
  service?: string
  serviceMetadata?: any
  status?: string
  teamName?: string
  updatedAt?: any

  // Selects a custom action instead of the plain update:
  //   'create_linear_v2' | 'process'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface IssueImportRemoveMatch {
  issue_import_id: string
}

export interface IssueLabel {
  archivedAt?: any
  color: string
  createdAt: any
  creator?: Record<string, any>
  description?: string
  groupType?: string
  id: string
  inheritedFrom?: Record<string, any>
  isGroup: boolean
  lastAppliedAt?: any
  name: string
  parent?: Record<string, any>
  retiredAt?: any
  retiredBy?: Record<string, any>
  team?: Record<string, any>
  updatedAt: any
}

export interface IssueLabelLoadMatch {
  id: string
}

export interface IssueLabelListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface IssueLabelCreateData {
  replace_team_label?: boolean
  archivedAt?: any
  color: string
  createdAt: any
  creator?: Record<string, any>
  description?: string
  groupType?: string
  id: string
  inheritedFrom?: Record<string, any>
  isGroup: boolean
  lastAppliedAt?: any
  name: string
  parent?: Record<string, any>
  retiredAt?: any
  retiredBy?: Record<string, any>
  team?: Record<string, any>
  updatedAt: any
}

export interface IssueLabelUpdateData {
  id: string
  replace_team_label?: boolean
  archivedAt?: any
  color?: string
  createdAt?: any
  creator?: Record<string, any>
  description?: string
  groupType?: string
  inheritedFrom?: Record<string, any>
  isGroup?: boolean
  lastAppliedAt?: any
  name?: string
  parent?: Record<string, any>
  retiredAt?: any
  retiredBy?: Record<string, any>
  team?: Record<string, any>
  updatedAt?: any

  // Selects a custom action instead of the plain update:
  //   'restore' | 'retire'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface IssueLabelRemoveMatch {
  id: string
}

export interface IssuePriorityValue {
  label: string
  priority: number
}

export interface IssuePriorityValueListMatch {
  label?: string
  priority?: number
}

export interface IssueRelation {
  archivedAt?: any
  createdAt: any
  id: string
  issue?: Record<string, any>
  relatedIssue?: Record<string, any>
  type: string
  updatedAt: any
}

export interface IssueRelationLoadMatch {
  id: string
}

export interface IssueRelationListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface IssueRelationCreateData {
  override_created_at?: any
  archivedAt?: any
  createdAt: any
  id: string
  issue?: Record<string, any>
  relatedIssue?: Record<string, any>
  type: string
  updatedAt: any
}

export interface IssueRelationUpdateData {
  id: string
  archivedAt?: any
  createdAt?: any
  issue?: Record<string, any>
  relatedIssue?: Record<string, any>
  type?: string
  updatedAt?: any
}

export interface IssueRelationRemoveMatch {
  id: string
}

export interface IssueSearchResult {
  activitySummary?: any
  addedToCycleAt?: any
  addedToProjectAt?: any
  addedToTeamAt?: any
  archivedAt?: any
  asksExternalUserRequester?: Record<string, any>
  asksRequester?: Record<string, any>
  assignee?: Record<string, any>
  autoArchivedAt?: any
  autoClosedAt?: any
  botActor?: Record<string, any>
  branchName: string
  canceledAt?: any
  completedAt?: any
  createdAt: any
  creator?: Record<string, any>
  customerTicketCount: number
  cycle?: Record<string, any>
  delegate?: Record<string, any>
  description?: string
  descriptionState?: string
  documentContent?: Record<string, any>
  dueDate?: any
  estimate?: number
  externalUserCreator?: Record<string, any>
  favorite?: Record<string, any>
  id: string
  identifier: string
  inheritsSharedAccess: boolean
  integrationSourceType?: string
  labelIds: string
  lastAppliedTemplate?: Record<string, any>
  metadata: any
  number: number
  parent?: Record<string, any>
  previousIdentifiers: string
  priority: number
  priorityLabel: string
  prioritySortOrder: number
  project?: Record<string, any>
  projectMilestone?: Record<string, any>
  reactionData: any
  recurringIssueTemplate?: Record<string, any>
  slaBreachesAt?: any
  slaHighRiskAt?: any
  slaMediumRiskAt?: any
  slaStartedAt?: any
  slaType?: string
  snoozedBy?: Record<string, any>
  snoozedUntilAt?: any
  sortOrder: number
  sourceComment?: Record<string, any>
  startedAt?: any
  startedTriageAt?: any
  state?: Record<string, any>
  subIssueSortOrder?: number
  suggestionsGeneratedAt?: any
  summary?: Record<string, any>
  team?: Record<string, any>
  title: string
  trashed?: boolean
  triagedAt?: any
  trusted?: boolean
  updatedAt: any
  url: string
}

export interface IssueSearchResultListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  include_comment?: boolean
  last?: number
  order_by?: any
  team_id?: string
  term: string
}

export interface IssueToRelease {
  archivedAt?: any
  createdAt: any
  id: string
  issue?: Record<string, any>
  release?: Record<string, any>
  updatedAt: any
}

export interface IssueToReleaseLoadMatch {
  id: string
}

export interface IssueToReleaseListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface IssueToReleaseCreateData {
  archivedAt?: any
  createdAt: any
  id: string
  issue?: Record<string, any>
  release?: Record<string, any>
  updatedAt: any
}

export interface IssueToReleaseRemoveMatch {
  id: string
}

export interface LogoutResponse {
  success: boolean
}

export interface LogoutResponseCreateData {
  reason?: string
  success: boolean

  // Selects a custom action instead of the plain create:
  //   'logout' | 'logout_all_session' | 'logout_other_session'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface LogoutResponseUpdateData {
  session_id: string
  success?: boolean

  // Selects a custom action instead of the plain update:
  //   'logout_session'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Notification {
  actor?: Record<string, any>
  actorAvatarColor: string
  actorAvatarUrl?: string
  actorInactive: boolean
  actorInitials?: string
  archivedAt?: any
  botActor?: Record<string, any>
  category: string
  createdAt: any
  emailedAt?: any
  externalUserActor?: Record<string, any>
  groupingKey: string
  groupingPriority: number
  id: string
  inboxUrl: string
  initiativeUpdateHealth?: string
  isLinearActor: boolean
  issueStatusType?: string
  projectUpdateHealth?: string
  readAt?: any
  snoozedUntilAt?: any
  subtitle: string
  title: string
  type: string
  unsnoozedAt?: any
  updatedAt: any
  url: string
  user?: Record<string, any>
}

export interface NotificationLoadMatch {
  id: string
}

export interface NotificationListMatch {
  after?: string
  first?: number
  unread_only?: boolean
  before?: string
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface NotificationSubscription {
  active: boolean
  archivedAt?: any
  contextViewType?: string
  createdAt: any
  customView?: Record<string, any>
  customer?: Record<string, any>
  cycle?: Record<string, any>
  id: string
  initiative?: Record<string, any>
  label?: Record<string, any>
  project?: Record<string, any>
  subscriber?: Record<string, any>
  team?: Record<string, any>
  updatedAt: any
  user?: Record<string, any>
  userContextViewType?: string
}

export interface NotificationSubscriptionLoadMatch {
  id: string
}

export interface NotificationSubscriptionListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface OAuthApplication {
  clientId: string
  createdAt: any
  description?: string
  developer: string
  developerUrl: string
  distribution: string
  grantTypes: string
  id: string
  imageUrl?: string
  name: string
  redirectUris: string
  updatedAt: any
  webhookEnabled: boolean
  webhookResourceTypes: string
  webhookUrl?: string
}

export interface OAuthApplicationLoadMatch {
  id: string
}

export interface OAuthApplicationListMatch {
  clientId?: string
  createdAt?: any
  description?: string
  developer?: string
  developerUrl?: string
  distribution?: string
  grantTypes?: string
  id?: string
  imageUrl?: string
  name?: string
  redirectUris?: string
  updatedAt?: any
  webhookEnabled?: boolean
  webhookResourceTypes?: string
  webhookUrl?: string
}

export interface OAuthApplicationCreateData {
  clientId: string
  createdAt: any
  description?: string
  developer: string
  developerUrl: string
  distribution: string
  grantTypes: string
  id: string
  imageUrl?: string
  name: string
  redirectUris: string
  updatedAt: any
  webhookEnabled: boolean
  webhookResourceTypes: string
  webhookUrl?: string
}

export interface OAuthApplicationUpdateData {
  id: string
  clientId?: string
  createdAt?: any
  description?: string
  developer?: string
  developerUrl?: string
  distribution?: string
  grantTypes?: string
  imageUrl?: string
  name?: string
  redirectUris?: string
  updatedAt?: any
  webhookEnabled?: boolean
  webhookResourceTypes?: string
  webhookUrl?: string
}

export interface Organization {
  agentAutomationEnabled: boolean
  aiAddonEnabled: boolean
  aiDiscussionSummariesEnabled: boolean
  aiProviderConfiguration?: any
  aiTelemetryEnabled: boolean
  aiThreadSummariesEnabled: boolean
  allowedFileUploadContentTypes?: string
  archivedAt?: any
  authSettings: any
  codeIntelligenceEnabled: boolean
  codeIntelligenceRepository?: string
  codingAgentEnabled: boolean
  codingAgentSettings: any
  createdAt: any
  createdIssueCount: number
  customerCount: number
  customersConfiguration: any
  customersEnabled: boolean
  defaultFeedSummarySchedule?: string
  defaultHomeView?: string
  defaultHomeViewTargetId?: string
  deletionRequestedAt?: any
  feedEnabled: boolean
  fiscalYearStartMonth: number
  generatedUpdatesEnabled: boolean
  gitBranchFormat?: string
  gitLinkbackDescriptionsEnabled: boolean
  gitLinkbackMessagesEnabled: boolean
  gitPublicLinkbackMessagesEnabled: boolean
  hipaaComplianceEnabled: boolean
  id: string
  initiativeUpdateReminderFrequencyInWeeks?: number
  initiativeUpdateRemindersDay: string
  initiativeUpdateRemindersHour: number
  linearAgentEnabled: boolean
  linearAgentSettings: any
  logoUrl?: string
  name: string
  periodUploadVolume: number
  previousUrlKeys: string
  projectUpdateReminderFrequencyInWeeks?: number
  projectUpdateRemindersDay: string
  projectUpdateRemindersHour: number
  pullRequestIssueMode: string
  pullRequestTourEnabled: boolean
  releaseChannel: string
  releasesEnabled: boolean
  restrictAgentInvocationToMembers?: boolean
  roadmapEnabled: boolean
  samlEnabled: boolean
  samlSettings?: any
  scimEnabled: boolean
  scimSettings?: any
  securitySettings: any
  slackAutoCreateProjectChannel: boolean
  slackProjectChannelIntegration?: Record<string, any>
  slackProjectChannelPrefix: string
  slackProjectChannelsEnabled: boolean
  subscription?: Record<string, any>
  themeSettings?: any
  trialEndsAt?: any
  trialStartsAt?: any
  updatedAt: any
  urlKey: string
  userCount: number
  workingDays: number
}

export interface OrganizationLoadMatch {
  agentAutomationEnabled?: boolean
  aiAddonEnabled?: boolean
  aiDiscussionSummariesEnabled?: boolean
  aiProviderConfiguration?: any
  aiTelemetryEnabled?: boolean
  aiThreadSummariesEnabled?: boolean
  allowedFileUploadContentTypes?: string
  archivedAt?: any
  authSettings?: any
  codeIntelligenceEnabled?: boolean
  codeIntelligenceRepository?: string
  codingAgentEnabled?: boolean
  codingAgentSettings?: any
  createdAt?: any
  createdIssueCount?: number
  customerCount?: number
  customersConfiguration?: any
  customersEnabled?: boolean
  defaultFeedSummarySchedule?: string
  defaultHomeView?: string
  defaultHomeViewTargetId?: string
  deletionRequestedAt?: any
  feedEnabled?: boolean
  fiscalYearStartMonth?: number
  generatedUpdatesEnabled?: boolean
  gitBranchFormat?: string
  gitLinkbackDescriptionsEnabled?: boolean
  gitLinkbackMessagesEnabled?: boolean
  gitPublicLinkbackMessagesEnabled?: boolean
  hipaaComplianceEnabled?: boolean
  id: string
  initiativeUpdateReminderFrequencyInWeeks?: number
  initiativeUpdateRemindersDay?: string
  initiativeUpdateRemindersHour?: number
  linearAgentEnabled?: boolean
  linearAgentSettings?: any
  logoUrl?: string
  name?: string
  periodUploadVolume?: number
  previousUrlKeys?: string
  projectUpdateReminderFrequencyInWeeks?: number
  projectUpdateRemindersDay?: string
  projectUpdateRemindersHour?: number
  pullRequestIssueMode?: string
  pullRequestTourEnabled?: boolean
  releaseChannel?: string
  releasesEnabled?: boolean
  restrictAgentInvocationToMembers?: boolean
  roadmapEnabled?: boolean
  samlEnabled?: boolean
  samlSettings?: any
  scimEnabled?: boolean
  scimSettings?: any
  securitySettings?: any
  slackAutoCreateProjectChannel?: boolean
  slackProjectChannelIntegration?: Record<string, any>
  slackProjectChannelPrefix?: string
  slackProjectChannelsEnabled?: boolean
  subscription?: Record<string, any>
  themeSettings?: any
  trialEndsAt?: any
  trialStartsAt?: any
  updatedAt?: any
  urlKey?: string
  userCount?: number
  workingDays?: number
}

export interface OrganizationUpdateData {
  agentAutomationEnabled?: boolean
  aiAddonEnabled?: boolean
  aiDiscussionSummariesEnabled?: boolean
  aiProviderConfiguration?: any
  aiTelemetryEnabled?: boolean
  aiThreadSummariesEnabled?: boolean
  allowedFileUploadContentTypes?: string
  archivedAt?: any
  authSettings?: any
  codeIntelligenceEnabled?: boolean
  codeIntelligenceRepository?: string
  codingAgentEnabled?: boolean
  codingAgentSettings?: any
  createdAt?: any
  createdIssueCount?: number
  customerCount?: number
  customersConfiguration?: any
  customersEnabled?: boolean
  defaultFeedSummarySchedule?: string
  defaultHomeView?: string
  defaultHomeViewTargetId?: string
  deletionRequestedAt?: any
  feedEnabled?: boolean
  fiscalYearStartMonth?: number
  generatedUpdatesEnabled?: boolean
  gitBranchFormat?: string
  gitLinkbackDescriptionsEnabled?: boolean
  gitLinkbackMessagesEnabled?: boolean
  gitPublicLinkbackMessagesEnabled?: boolean
  hipaaComplianceEnabled?: boolean
  id?: string
  initiativeUpdateReminderFrequencyInWeeks?: number
  initiativeUpdateRemindersDay?: string
  initiativeUpdateRemindersHour?: number
  linearAgentEnabled?: boolean
  linearAgentSettings?: any
  logoUrl?: string
  name?: string
  periodUploadVolume?: number
  previousUrlKeys?: string
  projectUpdateReminderFrequencyInWeeks?: number
  projectUpdateRemindersDay?: string
  projectUpdateRemindersHour?: number
  pullRequestIssueMode?: string
  pullRequestTourEnabled?: boolean
  releaseChannel?: string
  releasesEnabled?: boolean
  restrictAgentInvocationToMembers?: boolean
  roadmapEnabled?: boolean
  samlEnabled?: boolean
  samlSettings?: any
  scimEnabled?: boolean
  scimSettings?: any
  securitySettings?: any
  slackAutoCreateProjectChannel?: boolean
  slackProjectChannelIntegration?: Record<string, any>
  slackProjectChannelPrefix?: string
  slackProjectChannelsEnabled?: boolean
  subscription?: Record<string, any>
  themeSettings?: any
  trialEndsAt?: any
  trialStartsAt?: any
  updatedAt?: any
  urlKey?: string
  userCount?: number
  workingDays?: number
}

export interface OrganizationRemoveMatch {
  agentAutomationEnabled?: boolean
  aiAddonEnabled?: boolean
  aiDiscussionSummariesEnabled?: boolean
  aiProviderConfiguration?: any
  aiTelemetryEnabled?: boolean
  aiThreadSummariesEnabled?: boolean
  allowedFileUploadContentTypes?: string
  archivedAt?: any
  authSettings?: any
  codeIntelligenceEnabled?: boolean
  codeIntelligenceRepository?: string
  codingAgentEnabled?: boolean
  codingAgentSettings?: any
  createdAt?: any
  createdIssueCount?: number
  customerCount?: number
  customersConfiguration?: any
  customersEnabled?: boolean
  defaultFeedSummarySchedule?: string
  defaultHomeView?: string
  defaultHomeViewTargetId?: string
  deletionRequestedAt?: any
  feedEnabled?: boolean
  fiscalYearStartMonth?: number
  generatedUpdatesEnabled?: boolean
  gitBranchFormat?: string
  gitLinkbackDescriptionsEnabled?: boolean
  gitLinkbackMessagesEnabled?: boolean
  gitPublicLinkbackMessagesEnabled?: boolean
  hipaaComplianceEnabled?: boolean
  id: string
  initiativeUpdateReminderFrequencyInWeeks?: number
  initiativeUpdateRemindersDay?: string
  initiativeUpdateRemindersHour?: number
  linearAgentEnabled?: boolean
  linearAgentSettings?: any
  logoUrl?: string
  name?: string
  periodUploadVolume?: number
  previousUrlKeys?: string
  projectUpdateReminderFrequencyInWeeks?: number
  projectUpdateRemindersDay?: string
  projectUpdateRemindersHour?: number
  pullRequestIssueMode?: string
  pullRequestTourEnabled?: boolean
  releaseChannel?: string
  releasesEnabled?: boolean
  restrictAgentInvocationToMembers?: boolean
  roadmapEnabled?: boolean
  samlEnabled?: boolean
  samlSettings?: any
  scimEnabled?: boolean
  scimSettings?: any
  securitySettings?: any
  slackAutoCreateProjectChannel?: boolean
  slackProjectChannelIntegration?: Record<string, any>
  slackProjectChannelPrefix?: string
  slackProjectChannelsEnabled?: boolean
  subscription?: Record<string, any>
  themeSettings?: any
  trialEndsAt?: any
  trialStartsAt?: any
  updatedAt?: any
  urlKey?: string
  userCount?: number
  workingDays?: number
}

export interface OrganizationDomain {
  archivedAt?: any
  authType: string
  claimed?: boolean
  createdAt: any
  creator?: Record<string, any>
  disableOrganizationCreation?: boolean
  id: string
  identityProvider?: Record<string, any>
  name: string
  updatedAt: any
  verificationEmail?: string
  verified: boolean
}

export interface OrganizationDomainCreateData {
  trigger_email_verification?: boolean
  archivedAt?: any
  authType: string
  claimed?: boolean
  createdAt: any
  creator?: Record<string, any>
  disableOrganizationCreation?: boolean
  id: string
  identityProvider?: Record<string, any>
  name: string
  updatedAt: any
  verificationEmail?: string
  verified: boolean

  // Selects a custom action instead of the plain create:
  //   'verify'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface OrganizationDomainUpdateData {
  id: string
  archivedAt?: any
  authType?: string
  claimed?: boolean
  createdAt?: any
  creator?: Record<string, any>
  disableOrganizationCreation?: boolean
  identityProvider?: Record<string, any>
  name?: string
  updatedAt?: any
  verificationEmail?: string
  verified?: boolean
}

export interface OrganizationDomainRemoveMatch {
  id: string
}

export interface OrganizationInvite {
  acceptedAt?: any
  archivedAt?: any
  createdAt: any
  email: string
  expiresAt?: any
  external: boolean
  id: string
  invitee?: Record<string, any>
  inviter?: Record<string, any>
  metadata?: any
  organization?: Record<string, any>
  role: string
  updatedAt: any
}

export interface OrganizationInviteLoadMatch {
  id: string
}

export interface OrganizationInviteListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface OrganizationInviteCreateData {
  acceptedAt?: any
  archivedAt?: any
  createdAt: any
  email: string
  expiresAt?: any
  external: boolean
  id: string
  invitee?: Record<string, any>
  inviter?: Record<string, any>
  metadata?: any
  organization?: Record<string, any>
  role: string
  updatedAt: any
}

export interface OrganizationInviteUpdateData {
  id: string
  acceptedAt?: any
  archivedAt?: any
  createdAt?: any
  email?: string
  expiresAt?: any
  external?: boolean
  invitee?: Record<string, any>
  inviter?: Record<string, any>
  metadata?: any
  organization?: Record<string, any>
  role?: string
  updatedAt?: any
}

export interface OrganizationInviteRemoveMatch {
  id: string
}

export interface OrganizationMeta {
  allowedAuthServices: string
  region: string
}

export interface OrganizationMetaLoadMatch {
  url_key: string
}

export interface PasskeyLoginStartResponse {
  options: any
  success: boolean
}

export interface PasskeyLoginStartResponseUpdateData {
  auth_id: string
  options?: any
  success?: boolean

  // Selects a custom action instead of the plain update:
  //   'passkey_login_start'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Project {
  archivedAt?: any
  autoArchivedAt?: any
  canceledAt?: any
  color: string
  completedAt?: any
  completedIssueCountHistory: number
  completedScopeHistory: number
  content?: string
  contentState?: string
  convertedFromIssue?: Record<string, any>
  createdAt: any
  creator?: Record<string, any>
  currentProgress: any
  description: string
  documentContent?: Record<string, any>
  favorite?: Record<string, any>
  frequencyResolution: string
  health?: string
  healthUpdatedAt?: any
  icon?: string
  id: string
  identifier?: string
  inProgressScopeHistory: number
  integrationsSettings?: Record<string, any>
  issueCountHistory: number
  labelIds: string
  lastAppliedTemplate?: Record<string, any>
  lastUpdate?: Record<string, any>
  lead?: Record<string, any>
  leadTeam?: Record<string, any>
  microsoftTeamsChannelId?: string
  name: string
  previousIdentifiers: string
  priority: number
  priorityLabel: string
  prioritySortOrder: number
  progress: number
  progressHistory: any
  projectUpdateRemindersPausedUntilAt?: any
  resourceCount: number
  scope: number
  scopeHistory: number
  slackChannelId?: string
  slugId: string
  sortOrder: number
  startDate?: any
  startDateResolution?: string
  startedAt?: any
  status?: Record<string, any>
  targetDate?: any
  targetDateResolution?: string
  trashed?: boolean
  updateReminderFrequency?: number
  updateReminderFrequencyInWeeks?: number
  updateRemindersDay?: string
  updateRemindersHour?: number
  updatedAt: any
  url: string
}

export interface ProjectLoadMatch {
  id: string
}

export interface ProjectListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface ProjectCreateData {
  ai_conversation_id?: string
  project_draft_id?: string
  slack_channel_name?: string
  archivedAt?: any
  autoArchivedAt?: any
  canceledAt?: any
  color: string
  completedAt?: any
  completedIssueCountHistory: number
  completedScopeHistory: number
  content?: string
  contentState?: string
  convertedFromIssue?: Record<string, any>
  createdAt: any
  creator?: Record<string, any>
  currentProgress: any
  description: string
  documentContent?: Record<string, any>
  favorite?: Record<string, any>
  frequencyResolution: string
  health?: string
  healthUpdatedAt?: any
  icon?: string
  id: string
  identifier?: string
  inProgressScopeHistory: number
  integrationsSettings?: Record<string, any>
  issueCountHistory: number
  labelIds: string
  lastAppliedTemplate?: Record<string, any>
  lastUpdate?: Record<string, any>
  lead?: Record<string, any>
  leadTeam?: Record<string, any>
  microsoftTeamsChannelId?: string
  name: string
  previousIdentifiers: string
  priority: number
  priorityLabel: string
  prioritySortOrder: number
  progress: number
  progressHistory: any
  projectUpdateRemindersPausedUntilAt?: any
  resourceCount: number
  scope: number
  scopeHistory: number
  slackChannelId?: string
  slugId: string
  sortOrder: number
  startDate?: any
  startDateResolution?: string
  startedAt?: any
  status?: Record<string, any>
  targetDate?: any
  targetDateResolution?: string
  trashed?: boolean
  updateReminderFrequency?: number
  updateReminderFrequencyInWeeks?: number
  updateRemindersDay?: string
  updateRemindersHour?: number
  updatedAt: any
  url: string
}

export interface ProjectUpdateData {
  id: string
  archivedAt?: any
  autoArchivedAt?: any
  canceledAt?: any
  color?: string
  completedAt?: any
  completedIssueCountHistory?: number
  completedScopeHistory?: number
  content?: string
  contentState?: string
  convertedFromIssue?: Record<string, any>
  createdAt?: any
  creator?: Record<string, any>
  currentProgress?: any
  description?: string
  documentContent?: Record<string, any>
  favorite?: Record<string, any>
  frequencyResolution?: string
  health?: string
  healthUpdatedAt?: any
  icon?: string
  identifier?: string
  inProgressScopeHistory?: number
  integrationsSettings?: Record<string, any>
  issueCountHistory?: number
  labelIds?: string
  lastAppliedTemplate?: Record<string, any>
  lastUpdate?: Record<string, any>
  lead?: Record<string, any>
  leadTeam?: Record<string, any>
  microsoftTeamsChannelId?: string
  name?: string
  previousIdentifiers?: string
  priority?: number
  priorityLabel?: string
  prioritySortOrder?: number
  progress?: number
  progressHistory?: any
  projectUpdateRemindersPausedUntilAt?: any
  resourceCount?: number
  scope?: number
  scopeHistory?: number
  slackChannelId?: string
  slugId?: string
  sortOrder?: number
  startDate?: any
  startDateResolution?: string
  startedAt?: any
  status?: Record<string, any>
  targetDate?: any
  targetDateResolution?: string
  trashed?: boolean
  updateReminderFrequency?: number
  updateReminderFrequencyInWeeks?: number
  updateRemindersDay?: string
  updateRemindersHour?: number
  updatedAt?: any
  url?: string

  // Selects a custom action instead of the plain update:
  //   'add_label' | 'archive' | 'create_slack_channel' | 'dismiss_slack_channel_creation_failure' | 'external_sync_disable' | 'remove_label' | 'unarchive'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ProjectRemoveMatch {
  id: string
}

export interface ProjectLabel {
  archivedAt?: any
  color: string
  createdAt: any
  creator?: Record<string, any>
  description?: string
  id: string
  inheritedFrom?: Record<string, any>
  isGroup: boolean
  lastAppliedAt?: any
  name: string
  organization?: Record<string, any>
  parent?: Record<string, any>
  retiredAt?: any
  retiredBy?: Record<string, any>
  team?: Record<string, any>
  updatedAt: any
}

export interface ProjectLabelLoadMatch {
  id: string
}

export interface ProjectLabelListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface ProjectLabelCreateData {
  replace_team_label?: boolean
  archivedAt?: any
  color: string
  createdAt: any
  creator?: Record<string, any>
  description?: string
  id: string
  inheritedFrom?: Record<string, any>
  isGroup: boolean
  lastAppliedAt?: any
  name: string
  organization?: Record<string, any>
  parent?: Record<string, any>
  retiredAt?: any
  retiredBy?: Record<string, any>
  team?: Record<string, any>
  updatedAt: any
}

export interface ProjectLabelUpdateData {
  id: string
  replace_team_label?: boolean
  archivedAt?: any
  color?: string
  createdAt?: any
  creator?: Record<string, any>
  description?: string
  inheritedFrom?: Record<string, any>
  isGroup?: boolean
  lastAppliedAt?: any
  name?: string
  organization?: Record<string, any>
  parent?: Record<string, any>
  retiredAt?: any
  retiredBy?: Record<string, any>
  team?: Record<string, any>
  updatedAt?: any

  // Selects a custom action instead of the plain update:
  //   'restore' | 'retire'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ProjectLabelRemoveMatch {
  id: string
}

export interface ProjectMilestone {
  archivedAt?: any
  createdAt: any
  currentProgress: any
  description?: string
  descriptionState?: string
  documentContent?: Record<string, any>
  id: string
  name: string
  progress: number
  progressHistory: any
  project?: Record<string, any>
  sortOrder: number
  status: string
  targetDate?: any
  updatedAt: any
}

export interface ProjectMilestoneLoadMatch {
  id: string
}

export interface ProjectMilestoneListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface ProjectMilestoneCreateData {
  archivedAt?: any
  createdAt: any
  currentProgress: any
  description?: string
  descriptionState?: string
  documentContent?: Record<string, any>
  id: string
  name: string
  progress: number
  progressHistory: any
  project?: Record<string, any>
  sortOrder: number
  status: string
  targetDate?: any
  updatedAt: any
}

export interface ProjectMilestoneUpdateData {
  id: string
  archivedAt?: any
  createdAt?: any
  currentProgress?: any
  description?: string
  descriptionState?: string
  documentContent?: Record<string, any>
  name?: string
  progress?: number
  progressHistory?: any
  project?: Record<string, any>
  sortOrder?: number
  status?: string
  targetDate?: any
  updatedAt?: any
}

export interface ProjectMilestoneRemoveMatch {
  id: string
}

export interface ProjectMilestoneMoveProjectTeam {
  id?: string
  projectId: string
  teamIds: string
}

export interface ProjectMilestoneMoveProjectTeamUpdateData {
  id: string
  projectId?: string
  teamIds?: string

  // Selects a custom action instead of the plain update:
  //   'project_milestone_move'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ProjectRelation {
  anchorType: string
  archivedAt?: any
  createdAt: any
  id: string
  project?: Record<string, any>
  projectMilestone?: Record<string, any>
  relatedAnchorType: string
  relatedProject?: Record<string, any>
  relatedProjectMilestone?: Record<string, any>
  type: string
  updatedAt: any
  user?: Record<string, any>
}

export interface ProjectRelationLoadMatch {
  id: string
}

export interface ProjectRelationListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface ProjectRelationCreateData {
  anchorType: string
  archivedAt?: any
  createdAt: any
  id: string
  project?: Record<string, any>
  projectMilestone?: Record<string, any>
  relatedAnchorType: string
  relatedProject?: Record<string, any>
  relatedProjectMilestone?: Record<string, any>
  type: string
  updatedAt: any
  user?: Record<string, any>
}

export interface ProjectRelationUpdateData {
  id: string
  anchorType?: string
  archivedAt?: any
  createdAt?: any
  project?: Record<string, any>
  projectMilestone?: Record<string, any>
  relatedAnchorType?: string
  relatedProject?: Record<string, any>
  relatedProjectMilestone?: Record<string, any>
  type?: string
  updatedAt?: any
  user?: Record<string, any>
}

export interface ProjectRelationRemoveMatch {
  id: string
}

export interface ProjectSearchResult {
  archivedAt?: any
  autoArchivedAt?: any
  canceledAt?: any
  color: string
  completedAt?: any
  completedIssueCountHistory: number
  completedScopeHistory: number
  content?: string
  contentState?: string
  convertedFromIssue?: Record<string, any>
  createdAt: any
  creator?: Record<string, any>
  currentProgress: any
  description: string
  documentContent?: Record<string, any>
  favorite?: Record<string, any>
  frequencyResolution: string
  health?: string
  healthUpdatedAt?: any
  icon?: string
  id: string
  identifier?: string
  inProgressScopeHistory: number
  integrationsSettings?: Record<string, any>
  issueCountHistory: number
  labelIds: string
  lastAppliedTemplate?: Record<string, any>
  lastUpdate?: Record<string, any>
  lead?: Record<string, any>
  leadTeam?: Record<string, any>
  metadata: any
  microsoftTeamsChannelId?: string
  name: string
  previousIdentifiers: string
  priority: number
  priorityLabel: string
  prioritySortOrder: number
  progress: number
  progressHistory: any
  projectUpdateRemindersPausedUntilAt?: any
  resourceCount: number
  scope: number
  scopeHistory: number
  slackChannelId?: string
  slugId: string
  sortOrder: number
  startDate?: any
  startDateResolution?: string
  startedAt?: any
  status?: Record<string, any>
  targetDate?: any
  targetDateResolution?: string
  trashed?: boolean
  updateReminderFrequency?: number
  updateReminderFrequencyInWeeks?: number
  updateRemindersDay?: string
  updateRemindersHour?: number
  updatedAt: any
  url: string
}

export interface ProjectSearchResultListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  include_comment?: boolean
  last?: number
  order_by?: any
  team_id?: string
  term: string
}

export interface ProjectStatus {
  archivedAt?: any
  color: string
  createdAt: any
  description?: string
  id: string
  indefinite: boolean
  inheritedFrom?: Record<string, any>
  name: string
  position: number
  team?: Record<string, any>
  type: string
  updatedAt: any
}

export interface ProjectStatusLoadMatch {
  id: string
}

export interface ProjectStatusListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface ProjectStatusCreateData {
  archivedAt?: any
  color: string
  createdAt: any
  description?: string
  id: string
  indefinite: boolean
  inheritedFrom?: Record<string, any>
  name: string
  position: number
  team?: Record<string, any>
  type: string
  updatedAt: any
}

export interface ProjectStatusUpdateData {
  id: string
  archivedAt?: any
  color?: string
  createdAt?: any
  description?: string
  indefinite?: boolean
  inheritedFrom?: Record<string, any>
  name?: string
  position?: number
  team?: Record<string, any>
  type?: string
  updatedAt?: any

  // Selects a custom action instead of the plain update:
  //   'archive' | 'unarchive'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ProjectUpdate {
  archivedAt?: any
  body: string
  bodyData: string
  commentCount: number
  createdAt: any
  diff?: any
  diffMarkdown?: string
  editedAt?: any
  health: string
  id: string
  infoSnapshot?: any
  isDiffHidden: boolean
  isStale: boolean
  project?: Record<string, any>
  reactionData: any
  shortSummary?: string
  slugId: string
  updatedAt: any
  url: string
  user?: Record<string, any>
}

export interface ProjectUpdateLoadMatch {
  id: string
  project_id?: string
}

export interface ProjectUpdateListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface ProjectUpdateCreateData {
  archivedAt?: any
  body: string
  bodyData: string
  commentCount: number
  createdAt: any
  diff?: any
  diffMarkdown?: string
  editedAt?: any
  health: string
  id: string
  infoSnapshot?: any
  isDiffHidden: boolean
  isStale: boolean
  project?: Record<string, any>
  reactionData: any
  shortSummary?: string
  slugId: string
  updatedAt: any
  url: string
  user?: Record<string, any>
}

export interface ProjectUpdateUpdateData {
  id: string
  archivedAt?: any
  body?: string
  bodyData?: string
  commentCount?: number
  createdAt?: any
  diff?: any
  diffMarkdown?: string
  editedAt?: any
  health?: string
  infoSnapshot?: any
  isDiffHidden?: boolean
  isStale?: boolean
  project?: Record<string, any>
  reactionData?: any
  shortSummary?: string
  slugId?: string
  updatedAt?: any
  url?: string
  user?: Record<string, any>

  // Selects a custom action instead of the plain update:
  //   'archive' | 'unarchive'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ProjectUpdateRemoveMatch {
  id: string
}

export interface PushSubscription {
  archivedAt?: any
  createdAt: any
  id: string
  updatedAt: any
}

export interface PushSubscriptionCreateData {
  archivedAt?: any
  createdAt: any
  id: string
  updatedAt: any
}

export interface PushSubscriptionRemoveMatch {
  id: string
}

export interface Reaction {
  archivedAt?: any
  comment?: Record<string, any>
  createdAt: any
  emoji: string
  externalUser?: Record<string, any>
  id: string
  initiativeUpdate?: Record<string, any>
  issue?: Record<string, any>
  post?: Record<string, any>
  projectUpdate?: Record<string, any>
  updatedAt: any
  user?: Record<string, any>
}

export interface ReactionCreateData {
  archivedAt?: any
  comment?: Record<string, any>
  createdAt: any
  emoji: string
  externalUser?: Record<string, any>
  id: string
  initiativeUpdate?: Record<string, any>
  issue?: Record<string, any>
  post?: Record<string, any>
  projectUpdate?: Record<string, any>
  updatedAt: any
  user?: Record<string, any>
}

export interface ReactionRemoveMatch {
  id: string
}

export interface Release {
  archivedAt?: any
  autoArchivedAt?: any
  canceledAt?: any
  commitSha?: string
  completedAt?: any
  createdAt: any
  creator?: Record<string, any>
  currentProgress: any
  description?: string
  id: string
  issueCount: number
  name: string
  pipeline?: Record<string, any>
  progressHistory: any
  releaseNote?: Record<string, any>
  slugId: string
  stage?: Record<string, any>
  startDate?: any
  startedAt?: any
  targetDate?: any
  trashed?: boolean
  updatedAt: any
  url: string
  version?: string
}

export interface ReleaseLoadMatch {
  id: string
}

export interface ReleaseListMatch {
  first?: number
  term?: string
  after?: string
  before?: string
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface ReleaseCreateData {
  archivedAt?: any
  autoArchivedAt?: any
  canceledAt?: any
  commitSha?: string
  completedAt?: any
  createdAt: any
  creator?: Record<string, any>
  currentProgress: any
  description?: string
  id: string
  issueCount: number
  name: string
  pipeline?: Record<string, any>
  progressHistory: any
  releaseNote?: Record<string, any>
  slugId: string
  stage?: Record<string, any>
  startDate?: any
  startedAt?: any
  targetDate?: any
  trashed?: boolean
  updatedAt: any
  url: string
  version?: string

  // Selects a custom action instead of the plain create:
  //   'complete' | 'sync' | 'update_by_pipeline'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ReleaseUpdateData {
  id: string
  archivedAt?: any
  autoArchivedAt?: any
  canceledAt?: any
  commitSha?: string
  completedAt?: any
  createdAt?: any
  creator?: Record<string, any>
  currentProgress?: any
  description?: string
  issueCount?: number
  name?: string
  pipeline?: Record<string, any>
  progressHistory?: any
  releaseNote?: Record<string, any>
  slugId?: string
  stage?: Record<string, any>
  startDate?: any
  startedAt?: any
  targetDate?: any
  trashed?: boolean
  updatedAt?: any
  url?: string
  version?: string

  // Selects a custom action instead of the plain update:
  //   'archive' | 'unarchive'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ReleaseRemoveMatch {
  id: string
}

export interface ReleaseNote {
  archivedAt?: any
  createdAt: any
  documentContent?: Record<string, any>
  firstRelease?: Record<string, any>
  generationStatus?: string
  id: string
  lastRelease?: Record<string, any>
  pipeline?: Record<string, any>
  releaseCount: number
  slugId: string
  title?: string
  updatedAt: any
  url: string
}

export interface ReleaseNoteLoadMatch {
  id: string
}

export interface ReleaseNoteListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface ReleaseNoteCreateData {
  archivedAt?: any
  createdAt: any
  documentContent?: Record<string, any>
  firstRelease?: Record<string, any>
  generationStatus?: string
  id: string
  lastRelease?: Record<string, any>
  pipeline?: Record<string, any>
  releaseCount: number
  slugId: string
  title?: string
  updatedAt: any
  url: string
}

export interface ReleaseNoteUpdateData {
  id: string
  archivedAt?: any
  createdAt?: any
  documentContent?: Record<string, any>
  firstRelease?: Record<string, any>
  generationStatus?: string
  lastRelease?: Record<string, any>
  pipeline?: Record<string, any>
  releaseCount?: number
  slugId?: string
  title?: string
  updatedAt?: any
  url?: string
}

export interface ReleaseNoteRemoveMatch {
  id: string
}

export interface ReleasePipeline {
  approximateReleaseCount: number
  archivedAt?: any
  autoGenerateReleaseNotesOnCompletion: boolean
  createdAt: any
  id: string
  includePathPatterns: string
  isProduction: boolean
  latestReleaseNote?: Record<string, any>
  name: string
  releaseNoteTemplate?: Record<string, any>
  rolloverIssuesOnCompletion: boolean
  slugId: string
  trashed?: boolean
  type: string
  updatedAt: any
  url: string
}

export interface ReleasePipelineLoadMatch {
  id: string
}

export interface ReleasePipelineListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface ReleasePipelineCreateData {
  approximateReleaseCount: number
  archivedAt?: any
  autoGenerateReleaseNotesOnCompletion: boolean
  createdAt: any
  id: string
  includePathPatterns: string
  isProduction: boolean
  latestReleaseNote?: Record<string, any>
  name: string
  releaseNoteTemplate?: Record<string, any>
  rolloverIssuesOnCompletion: boolean
  slugId: string
  trashed?: boolean
  type: string
  updatedAt: any
  url: string
}

export interface ReleasePipelineUpdateData {
  id: string
  approximateReleaseCount?: number
  archivedAt?: any
  autoGenerateReleaseNotesOnCompletion?: boolean
  createdAt?: any
  includePathPatterns?: string
  isProduction?: boolean
  latestReleaseNote?: Record<string, any>
  name?: string
  releaseNoteTemplate?: Record<string, any>
  rolloverIssuesOnCompletion?: boolean
  slugId?: string
  trashed?: boolean
  type?: string
  updatedAt?: any
  url?: string

  // Selects a custom action instead of the plain update:
  //   'archive' | 'unarchive'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ReleasePipelineRemoveMatch {
  id: string
}

export interface ReleaseStage {
  archivedAt?: any
  color: string
  createdAt: any
  frozen: boolean
  id: string
  name: string
  pipeline?: Record<string, any>
  position: number
  type: string
  updatedAt: any
}

export interface ReleaseStageLoadMatch {
  id: string
}

export interface ReleaseStageListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface ReleaseStageCreateData {
  archivedAt?: any
  color: string
  createdAt: any
  frozen: boolean
  id: string
  name: string
  pipeline?: Record<string, any>
  position: number
  type: string
  updatedAt: any
}

export interface ReleaseStageUpdateData {
  id: string
  archivedAt?: any
  color?: string
  createdAt?: any
  frozen?: boolean
  name?: string
  pipeline?: Record<string, any>
  position?: number
  type?: string
  updatedAt?: any

  // Selects a custom action instead of the plain update:
  //   'archive' | 'unarchive'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Roadmap {
  archivedAt?: any
  color?: string
  createdAt: any
  creator?: Record<string, any>
  description?: string
  id: string
  name: string
  organization?: Record<string, any>
  owner?: Record<string, any>
  slugId: string
  sortOrder: number
  updatedAt: any
  url: string
}

export interface RoadmapLoadMatch {
  id: string
}

export interface RoadmapListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface RoadmapCreateData {
  archivedAt?: any
  color?: string
  createdAt: any
  creator?: Record<string, any>
  description?: string
  id: string
  name: string
  organization?: Record<string, any>
  owner?: Record<string, any>
  slugId: string
  sortOrder: number
  updatedAt: any
  url: string
}

export interface RoadmapUpdateData {
  id: string
  archivedAt?: any
  color?: string
  createdAt?: any
  creator?: Record<string, any>
  description?: string
  name?: string
  organization?: Record<string, any>
  owner?: Record<string, any>
  slugId?: string
  sortOrder?: number
  updatedAt?: any
  url?: string

  // Selects a custom action instead of the plain update:
  //   'archive' | 'unarchive'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface RoadmapRemoveMatch {
  id: string
}

export interface RoadmapToProject {
  archivedAt?: any
  createdAt: any
  id: string
  project?: Record<string, any>
  roadmap?: Record<string, any>
  sortOrder: string
  updatedAt: any
}

export interface RoadmapToProjectLoadMatch {
  id: string
}

export interface RoadmapToProjectListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface RoadmapToProjectCreateData {
  archivedAt?: any
  createdAt: any
  id: string
  project?: Record<string, any>
  roadmap?: Record<string, any>
  sortOrder: string
  updatedAt: any
}

export interface RoadmapToProjectUpdateData {
  id: string
  archivedAt?: any
  createdAt?: any
  project?: Record<string, any>
  roadmap?: Record<string, any>
  sortOrder?: string
  updatedAt?: any
}

export interface RoadmapToProjectRemoveMatch {
  id: string
}

export interface SlaConfiguration {
  conditions: any
  id: string
  name: string
  removesSla: boolean
  sla?: number
  slaType?: string
  startMode?: string
}

export interface SlaConfigurationListMatch {
  team_id: string
}

export interface SsoUrlFromEmailResponse {
  samlSsoUrl: string
  success: boolean
}

export interface SsoUrlFromEmailResponseLoadMatch {
  email: string
  is_desktop?: boolean
  type: any
}

export interface Team {
  activeCycle?: Record<string, any>
  aiDiscussionSummariesEnabled: boolean
  aiThreadSummariesEnabled: boolean
  allMembersCanJoin?: boolean
  archivedAt?: any
  autoArchivePeriod: number
  autoCloseChildIssues?: boolean
  autoCloseParentIssues?: boolean
  autoClosePeriod?: number
  autoCloseStateId?: string
  color?: string
  createdAt: any
  currentProgress: any
  cycleCalenderUrl: string
  cycleCooldownTime: number
  cycleDuration: number
  cycleIssueAutoAssignCompleted: boolean
  cycleIssueAutoAssignStarted: boolean
  cycleLockToActive: boolean
  cycleStartDay: number
  cyclesEnabled: boolean
  defaultIssueEstimate: number
  defaultIssueState?: Record<string, any>
  defaultProjectTemplate?: Record<string, any>
  defaultTemplateForMembers?: Record<string, any>
  defaultTemplateForNonMembers?: Record<string, any>
  description?: string
  displayName: string
  groupIssueHistory: boolean
  icon?: string
  id: string
  inheritIssueEstimation: boolean
  inheritProjectStatuses: boolean
  inheritSlackAutoCreateProjectChannel: boolean
  inheritWorkflowStatuses: boolean
  initiativesEnabled: boolean
  integrationsSettings?: Record<string, any>
  issueCount: number
  issueEstimationAllowZero: boolean
  issueEstimationExtended: boolean
  issueEstimationType: string
  joinByDefault?: boolean
  key: string
  ledInitiativeCount: number
  name: string
  organization?: Record<string, any>
  parent?: Record<string, any>
  progressHistory: any
  requirePriorityToLeaveTriage: boolean
  restrictedBy?: Record<string, any>
  restrictedById?: string
  retiredAt?: any
  scimGroupName?: string
  scimManaged: boolean
  securitySettings: any
  setIssueSortOrderOnStateChange: string
  slackAutoCreateProjectChannel?: boolean
  timezone: string
  triageEnabled: boolean
  triageIssueState?: Record<string, any>
  triageResponsibility?: Record<string, any>
  upcomingCycleCount: number
  updatedAt: any
  visibility: string
}

export interface TeamLoadMatch {
  id: string
}

export interface TeamListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface TeamCreateData {
  copy_settings_from_team_id?: string
  activeCycle?: Record<string, any>
  aiDiscussionSummariesEnabled: boolean
  aiThreadSummariesEnabled: boolean
  allMembersCanJoin?: boolean
  archivedAt?: any
  autoArchivePeriod: number
  autoCloseChildIssues?: boolean
  autoCloseParentIssues?: boolean
  autoClosePeriod?: number
  autoCloseStateId?: string
  color?: string
  createdAt: any
  currentProgress: any
  cycleCalenderUrl: string
  cycleCooldownTime: number
  cycleDuration: number
  cycleIssueAutoAssignCompleted: boolean
  cycleIssueAutoAssignStarted: boolean
  cycleLockToActive: boolean
  cycleStartDay: number
  cyclesEnabled: boolean
  defaultIssueEstimate: number
  defaultIssueState?: Record<string, any>
  defaultProjectTemplate?: Record<string, any>
  defaultTemplateForMembers?: Record<string, any>
  defaultTemplateForNonMembers?: Record<string, any>
  description?: string
  displayName: string
  groupIssueHistory: boolean
  icon?: string
  id: string
  inheritIssueEstimation: boolean
  inheritProjectStatuses: boolean
  inheritSlackAutoCreateProjectChannel: boolean
  inheritWorkflowStatuses: boolean
  initiativesEnabled: boolean
  integrationsSettings?: Record<string, any>
  issueCount: number
  issueEstimationAllowZero: boolean
  issueEstimationExtended: boolean
  issueEstimationType: string
  joinByDefault?: boolean
  key: string
  ledInitiativeCount: number
  name: string
  organization?: Record<string, any>
  parent?: Record<string, any>
  progressHistory: any
  requirePriorityToLeaveTriage: boolean
  restrictedBy?: Record<string, any>
  restrictedById?: string
  retiredAt?: any
  scimGroupName?: string
  scimManaged: boolean
  securitySettings: any
  setIssueSortOrderOnStateChange: string
  slackAutoCreateProjectChannel?: boolean
  timezone: string
  triageEnabled: boolean
  triageIssueState?: Record<string, any>
  triageResponsibility?: Record<string, any>
  upcomingCycleCount: number
  updatedAt: any
  visibility: string
}

export interface TeamUpdateData {
  id: string
  activeCycle?: Record<string, any>
  aiDiscussionSummariesEnabled?: boolean
  aiThreadSummariesEnabled?: boolean
  allMembersCanJoin?: boolean
  archivedAt?: any
  autoArchivePeriod?: number
  autoCloseChildIssues?: boolean
  autoCloseParentIssues?: boolean
  autoClosePeriod?: number
  autoCloseStateId?: string
  color?: string
  createdAt?: any
  currentProgress?: any
  cycleCalenderUrl?: string
  cycleCooldownTime?: number
  cycleDuration?: number
  cycleIssueAutoAssignCompleted?: boolean
  cycleIssueAutoAssignStarted?: boolean
  cycleLockToActive?: boolean
  cycleStartDay?: number
  cyclesEnabled?: boolean
  defaultIssueEstimate?: number
  defaultIssueState?: Record<string, any>
  defaultProjectTemplate?: Record<string, any>
  defaultTemplateForMembers?: Record<string, any>
  defaultTemplateForNonMembers?: Record<string, any>
  description?: string
  displayName?: string
  groupIssueHistory?: boolean
  icon?: string
  inheritIssueEstimation?: boolean
  inheritProjectStatuses?: boolean
  inheritSlackAutoCreateProjectChannel?: boolean
  inheritWorkflowStatuses?: boolean
  initiativesEnabled?: boolean
  integrationsSettings?: Record<string, any>
  issueCount?: number
  issueEstimationAllowZero?: boolean
  issueEstimationExtended?: boolean
  issueEstimationType?: string
  joinByDefault?: boolean
  key?: string
  ledInitiativeCount?: number
  name?: string
  organization?: Record<string, any>
  parent?: Record<string, any>
  progressHistory?: any
  requirePriorityToLeaveTriage?: boolean
  restrictedBy?: Record<string, any>
  restrictedById?: string
  retiredAt?: any
  scimGroupName?: string
  scimManaged?: boolean
  securitySettings?: any
  setIssueSortOrderOnStateChange?: string
  slackAutoCreateProjectChannel?: boolean
  timezone?: string
  triageEnabled?: boolean
  triageIssueState?: Record<string, any>
  triageResponsibility?: Record<string, any>
  upcomingCycleCount?: number
  updatedAt?: any
  visibility?: string

  // Selects a custom action instead of the plain update:
  //   'cycles_delete' | 'unarchive'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface TeamRemoveMatch {
  id: string
}

export interface TeamMembership {
  archivedAt?: any
  createdAt: any
  id: string
  owner: boolean
  sortOrder: number
  team?: Record<string, any>
  updatedAt: any
  user?: Record<string, any>
}

export interface TeamMembershipLoadMatch {
  id: string
}

export interface TeamMembershipListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface TeamMembershipCreateData {
  archivedAt?: any
  createdAt: any
  id: string
  owner: boolean
  sortOrder: number
  team?: Record<string, any>
  updatedAt: any
  user?: Record<string, any>
}

export interface TeamMembershipUpdateData {
  id: string
  archivedAt?: any
  createdAt?: any
  owner?: boolean
  sortOrder?: number
  team?: Record<string, any>
  updatedAt?: any
  user?: Record<string, any>
}

export interface TeamMembershipRemoveMatch {
  also_leave_parent_team?: boolean
  id: string
}

export interface Template {
  archivedAt?: any
  color?: string
  content?: string
  createdAt: any
  creator?: Record<string, any>
  description?: string
  hasFormFields: boolean
  icon?: string
  id: string
  inheritedFrom?: Record<string, any>
  lastAppliedAt?: any
  lastUpdatedBy?: Record<string, any>
  name: string
  organization?: Record<string, any>
  pipeline?: Record<string, any>
  sortOrder: number
  team?: Record<string, any>
  templateData: any
  type: string
  updatedAt: any
}

export interface TemplateLoadMatch {
  id: string
}

export interface TemplateListMatch {
  integration_type?: string
  first?: number
  include_archived?: boolean
}

export interface TemplateCreateData {
  archivedAt?: any
  color?: string
  content?: string
  createdAt: any
  creator?: Record<string, any>
  description?: string
  hasFormFields: boolean
  icon?: string
  id: string
  inheritedFrom?: Record<string, any>
  lastAppliedAt?: any
  lastUpdatedBy?: Record<string, any>
  name: string
  organization?: Record<string, any>
  pipeline?: Record<string, any>
  sortOrder: number
  team?: Record<string, any>
  templateData: any
  type: string
  updatedAt: any
}

export interface TemplateUpdateData {
  id: string
  archivedAt?: any
  color?: string
  content?: string
  createdAt?: any
  creator?: Record<string, any>
  description?: string
  hasFormFields?: boolean
  icon?: string
  inheritedFrom?: Record<string, any>
  lastAppliedAt?: any
  lastUpdatedBy?: Record<string, any>
  name?: string
  organization?: Record<string, any>
  pipeline?: Record<string, any>
  sortOrder?: number
  team?: Record<string, any>
  templateData?: any
  type?: string
  updatedAt?: any
}

export interface TemplateRemoveMatch {
  id: string
}

export interface TimeSchedule {
  archivedAt?: any
  createdAt: any
  externalId?: string
  externalUrl?: string
  id: string
  integration?: Record<string, any>
  name: string
  organization?: Record<string, any>
  updatedAt: any
}

export interface TimeScheduleLoadMatch {
  id: string
}

export interface TimeScheduleListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface TimeScheduleCreateData {
  archivedAt?: any
  createdAt: any
  externalId?: string
  externalUrl?: string
  id: string
  integration?: Record<string, any>
  name: string
  organization?: Record<string, any>
  updatedAt: any
}

export interface TimeScheduleUpdateData {
  external_id?: string
  id?: string
  archivedAt?: any
  createdAt?: any
  externalId?: string
  externalUrl?: string
  integration?: Record<string, any>
  name?: string
  organization?: Record<string, any>
  updatedAt?: any

  // Selects a custom action instead of the plain update:
  //   'refresh_integration_schedule'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface TimeScheduleRemoveMatch {
  id: string
}

export interface TriageResponsibility {
  action: string
  archivedAt?: any
  createdAt: any
  currentUser?: Record<string, any>
  id: string
  team?: Record<string, any>
  timeSchedule?: Record<string, any>
  updatedAt: any
}

export interface TriageResponsibilityLoadMatch {
  id: string
}

export interface TriageResponsibilityListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface TriageResponsibilityCreateData {
  action: string
  archivedAt?: any
  createdAt: any
  currentUser?: Record<string, any>
  id: string
  team?: Record<string, any>
  timeSchedule?: Record<string, any>
  updatedAt: any
}

export interface TriageResponsibilityUpdateData {
  id: string
  action?: string
  archivedAt?: any
  createdAt?: any
  currentUser?: Record<string, any>
  team?: Record<string, any>
  timeSchedule?: Record<string, any>
  updatedAt?: any
}

export interface TriageResponsibilityRemoveMatch {
  id: string
}

export interface UploadFile {
  assetUrl: string
  contentType: string
  filename: string
  metaData?: any
  size: number
  uploadUrl: string
}

export interface UploadFileCreateData {
  content_type: string
  filename: string
  make_public?: boolean
  meta_data?: any
  size: number
  assetUrl: string
  contentType: string
  metaData?: any
  uploadUrl: string

  // Selects a custom action instead of the plain create:
  //   'file_upload' | 'import_file_upload'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface UsageAlert {
  archivedAt?: any
  createdAt: any
  id: string
  metadata: any
  resolvedAt?: any
  type: string
  updatedAt: any
}

export interface UsageAlertLoadMatch {
  id: string
}

export interface UsageAlertListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface User {
  active: boolean
  admin: boolean
  app: boolean
  archivedAt?: any
  avatarBackgroundColor: string
  avatarUrl?: string
  calendarHash?: string
  canAccessAnyPublicTeam: boolean
  createdAt: any
  createdIssueCount: number
  description?: string
  disableReason?: string
  displayName: string
  email: string
  gitHubUserId?: string
  guest: boolean
  hasGitHubCodeAccess: boolean
  id: string
  identityProvider?: Record<string, any>
  initials: string
  isAssignable: boolean
  isMe: boolean
  isMentionable: boolean
  lastSeen?: any
  name: string
  organization?: Record<string, any>
  owner: boolean
  statusEmoji?: string
  statusLabel?: string
  statusUntilAt?: any
  supportsAgentSessions: boolean
  timezone?: string
  title?: string
  updatedAt: any
  url: string
}

export interface UserLoadMatch {
  id?: string
}

export interface UserListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  include_disabled?: boolean
  last?: number
  order_by?: any
}

export interface UserCreateData {
  code?: string
  redirect_uri?: string
  service?: string
  active: boolean
  admin: boolean
  app: boolean
  archivedAt?: any
  avatarBackgroundColor: string
  avatarUrl?: string
  calendarHash?: string
  canAccessAnyPublicTeam: boolean
  createdAt: any
  createdIssueCount: number
  description?: string
  disableReason?: string
  displayName: string
  email: string
  gitHubUserId?: string
  guest: boolean
  hasGitHubCodeAccess: boolean
  id: string
  identityProvider?: Record<string, any>
  initials: string
  isAssignable: boolean
  isMe: boolean
  isMentionable: boolean
  lastSeen?: any
  name: string
  organization?: Record<string, any>
  owner: boolean
  statusEmoji?: string
  statusLabel?: string
  statusUntilAt?: any
  supportsAgentSessions: boolean
  timezone?: string
  title?: string
  updatedAt: any
  url: string

  // Selects a custom action instead of the plain create:
  //   'discord_connect' | 'external_user_disconnect'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface UserUpdateData {
  id: string
  active?: boolean
  admin?: boolean
  app?: boolean
  archivedAt?: any
  avatarBackgroundColor?: string
  avatarUrl?: string
  calendarHash?: string
  canAccessAnyPublicTeam?: boolean
  createdAt?: any
  createdIssueCount?: number
  description?: string
  disableReason?: string
  displayName?: string
  email?: string
  gitHubUserId?: string
  guest?: boolean
  hasGitHubCodeAccess?: boolean
  identityProvider?: Record<string, any>
  initials?: string
  isAssignable?: boolean
  isMe?: boolean
  isMentionable?: boolean
  lastSeen?: any
  name?: string
  organization?: Record<string, any>
  owner?: boolean
  statusEmoji?: string
  statusLabel?: string
  statusUntilAt?: any
  supportsAgentSessions?: boolean
  timezone?: string
  title?: string
  updatedAt?: any
  url?: string
}

export interface UserSetting {
  archivedAt?: any
  autoAssignToSelf: boolean
  calendarHash?: string
  createdAt: any
  feedLastSeenTime?: any
  feedSummarySchedule?: string
  id: string
  pullRequestMergeStrategyPreference?: string
  showFullUserNames: boolean
  subscribedToChangelog: boolean
  subscribedToDPA: boolean
  subscribedToInviteAccepted: boolean
  subscribedToPrivacyLegalUpdates: boolean
  updatedAt: any
  user?: Record<string, any>
}

export interface UserSettingLoadMatch {
  archivedAt?: any
  autoAssignToSelf?: boolean
  calendarHash?: string
  createdAt?: any
  feedLastSeenTime?: any
  feedSummarySchedule?: string
  id: string
  pullRequestMergeStrategyPreference?: string
  showFullUserNames?: boolean
  subscribedToChangelog?: boolean
  subscribedToDPA?: boolean
  subscribedToInviteAccepted?: boolean
  subscribedToPrivacyLegalUpdates?: boolean
  updatedAt?: any
  user?: Record<string, any>
}

export interface UserSettingCreateData {
  category: any
  channel: any
  subscribe: boolean
  archivedAt?: any
  autoAssignToSelf: boolean
  calendarHash?: string
  createdAt: any
  feedLastSeenTime?: any
  feedSummarySchedule?: string
  id: string
  pullRequestMergeStrategyPreference?: string
  showFullUserNames: boolean
  subscribedToChangelog: boolean
  subscribedToDPA: boolean
  subscribedToInviteAccepted: boolean
  subscribedToPrivacyLegalUpdates: boolean
  updatedAt: any
  user?: Record<string, any>

  // Selects a custom action instead of the plain create:
  //   'notification_category_channel_subscription_update'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface UserSettingUpdateData {
  id: string
  archivedAt?: any
  autoAssignToSelf?: boolean
  calendarHash?: string
  createdAt?: any
  feedLastSeenTime?: any
  feedSummarySchedule?: string
  pullRequestMergeStrategyPreference?: string
  showFullUserNames?: boolean
  subscribedToChangelog?: boolean
  subscribedToDPA?: boolean
  subscribedToInviteAccepted?: boolean
  subscribedToPrivacyLegalUpdates?: boolean
  updatedAt?: any
  user?: Record<string, any>
}

export interface ViewPreference {
  archivedAt?: any
  createdAt: any
  id: string
  type: string
  updatedAt: any
  viewType: string
}

export interface ViewPreferenceLoadMatch {
  view_type: any
}

export interface ViewPreferenceCreateData {
  archivedAt?: any
  createdAt: any
  id: string
  type: string
  updatedAt: any
  viewType: string
}

export interface ViewPreferenceUpdateData {
  id: string
  archivedAt?: any
  createdAt?: any
  type?: string
  updatedAt?: any
  viewType?: string
}

export interface ViewPreferenceRemoveMatch {
  id: string
}

export interface Webhook {
  allPublicTeams: boolean
  archivedAt?: any
  createdAt: any
  creator?: Record<string, any>
  enabled: boolean
  id: string
  label?: string
  resourceTypes: string
  secret?: string
  team?: Record<string, any>
  teamIds?: string
  updatedAt: any
  url?: string
}

export interface WebhookLoadMatch {
  id: string
}

export interface WebhookListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface WebhookCreateData {
  allPublicTeams: boolean
  archivedAt?: any
  createdAt: any
  creator?: Record<string, any>
  enabled: boolean
  id: string
  label?: string
  resourceTypes: string
  secret?: string
  team?: Record<string, any>
  teamIds?: string
  updatedAt: any
  url?: string
}

export interface WebhookUpdateData {
  id: string
  allPublicTeams?: boolean
  archivedAt?: any
  createdAt?: any
  creator?: Record<string, any>
  enabled?: boolean
  label?: string
  resourceTypes?: string
  secret?: string
  team?: Record<string, any>
  teamIds?: string
  updatedAt?: any
  url?: string
}

export interface WebhookRemoveMatch {
  id: string
}

export interface WebhookFailureEvent {
  createdAt: any
  executionId: string
  httpStatus?: number
  id: string
  responseOrError?: string
  url: string
  webhook?: Record<string, any>
}

export interface WebhookFailureEventListMatch {
  oauth_client_id?: string
  webhook_id?: string
}

export interface WorkflowState {
  archivedAt?: any
  color: string
  createdAt: any
  description?: string
  id: string
  inheritedFrom?: Record<string, any>
  name: string
  position: number
  team?: Record<string, any>
  type: string
  updatedAt: any
}

export interface WorkflowStateLoadMatch {
  id: string
}

export interface WorkflowStateListMatch {
  after?: string
  before?: string
  first?: number
  include_archived?: boolean
  last?: number
  order_by?: any
}

export interface WorkflowStateCreateData {
  archivedAt?: any
  color: string
  createdAt: any
  description?: string
  id: string
  inheritedFrom?: Record<string, any>
  name: string
  position: number
  team?: Record<string, any>
  type: string
  updatedAt: any
}

export interface WorkflowStateUpdateData {
  id: string
  archivedAt?: any
  color?: string
  createdAt?: any
  description?: string
  inheritedFrom?: Record<string, any>
  name?: string
  position?: number
  team?: Record<string, any>
  type?: string
  updatedAt?: any

  // Selects a custom action instead of the plain update:
  //   'archive'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

