# Typed models for the Linear SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class AccessKeyReleaseRequired(TypedDict):
    createdAt: Any
    id: str
    name: str
    url: str


class AccessKeyRelease(AccessKeyReleaseRequired, total=False):
    archivedAt: Any
    commitSha: str
    completedAt: Any
    version: str


class AccessKeyReleaseLoadMatchRequired(TypedDict):
    id: str


class AccessKeyReleaseLoadMatch(AccessKeyReleaseLoadMatchRequired, total=False):
    archivedAt: Any
    commitSha: str
    completedAt: Any
    createdAt: Any
    name: str
    url: str
    version: str


class AccessKeyReleaseListMatch(TypedDict, total=False):
    limit: int


class AccessKeyReleaseCreateDataRequired(TypedDict):
    createdAt: Any
    id: str
    name: str
    url: str


class AccessKeyReleaseCreateData(AccessKeyReleaseCreateDataRequired, total=False):
    archivedAt: Any
    commitSha: str
    completedAt: Any
    version: str


class AccessKeyReleasePipeline(TypedDict):
    id: str
    includePathPatterns: str


class AccessKeyReleasePipelineLoadMatchRequired(TypedDict):
    id: str


class AccessKeyReleasePipelineLoadMatch(AccessKeyReleasePipelineLoadMatchRequired, total=False):
    includePathPatterns: str


class AgentActivityRequired(TypedDict):
    createdAt: Any
    ephemeral: bool
    id: str
    queued: bool
    updatedAt: Any


class AgentActivity(AgentActivityRequired, total=False):
    agentSession: dict
    archivedAt: Any
    contextualMetadata: Any
    executionSkippedReason: str
    sentAt: Any
    signal: str
    signalMetadata: Any
    sourceComment: dict
    sourceMetadata: Any
    user: dict


class AgentActivityLoadMatch(TypedDict):
    id: str


class AgentActivityListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class AgentActivityCreateDataRequired(TypedDict):
    createdAt: Any
    ephemeral: bool
    id: str
    queued: bool
    updatedAt: Any


class AgentActivityCreateData(AgentActivityCreateDataRequired, total=False):
    agentSession: dict
    archivedAt: Any
    contextualMetadata: Any
    executionSkippedReason: str
    sentAt: Any
    signal: str
    signalMetadata: Any
    sourceComment: dict
    sourceMetadata: Any
    user: dict


class AgentActivityUpdateDataRequired(TypedDict):
    id: str


class AgentActivityUpdateData(AgentActivityUpdateDataRequired, total=False):
    agentSession: dict
    archivedAt: Any
    contextualMetadata: Any
    createdAt: Any
    ephemeral: bool
    executionSkippedReason: str
    queued: bool
    sentAt: Any
    signal: str
    signalMetadata: Any
    sourceComment: dict
    sourceMetadata: Any
    updatedAt: Any
    user: dict


class AgentSessionRequired(TypedDict):
    context: Any
    createdAt: Any
    id: str
    slugId: str
    status: str
    updatedAt: Any


class AgentSession(AgentSessionRequired, total=False):
    appUser: dict
    archivedAt: Any
    codingHarnessModelLabel: str
    comment: dict
    creator: dict
    dismissedAt: Any
    dismissedBy: dict
    endedAt: Any
    issue: dict
    modelSelection: Any
    plan: Any
    pullRequest: dict
    sourceComment: dict
    sourceMetadata: Any
    startedAt: Any
    summary: str
    url: str


class AgentSessionLoadMatch(TypedDict):
    id: str


class AgentSessionListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class AgentSessionCreateDataRequired(TypedDict):
    context: Any
    createdAt: Any
    id: str
    slugId: str
    status: str
    updatedAt: Any


class AgentSessionCreateData(AgentSessionCreateDataRequired, total=False):
    pull_request_id: str
    appUser: dict
    archivedAt: Any
    codingHarnessModelLabel: str
    comment: dict
    creator: dict
    dismissedAt: Any
    dismissedBy: dict
    endedAt: Any
    issue: dict
    modelSelection: Any
    plan: Any
    pullRequest: dict
    sourceComment: dict
    sourceMetadata: Any
    startedAt: Any
    summary: str
    url: str


class AgentSessionUpdateDataRequired(TypedDict):
    id: str


class AgentSessionUpdateData(AgentSessionUpdateDataRequired, total=False):
    appUser: dict
    archivedAt: Any
    codingHarnessModelLabel: str
    comment: dict
    context: Any
    createdAt: Any
    creator: dict
    dismissedAt: Any
    dismissedBy: dict
    endedAt: Any
    issue: dict
    modelSelection: Any
    plan: Any
    pullRequest: dict
    slugId: str
    sourceComment: dict
    sourceMetadata: Any
    startedAt: Any
    status: str
    summary: str
    updatedAt: Any
    url: str


class AgentSkillRequired(TypedDict):
    body: str
    createdAt: Any
    id: str
    recentUsageCount: float
    shared: bool
    slugId: str
    title: str
    updatedAt: Any


class AgentSkill(AgentSkillRequired, total=False):
    archivedAt: Any
    color: str
    creator: dict
    description: str
    icon: str
    inheritedFrom: dict
    lastUpdatedBy: dict
    lastUsedAt: Any
    owner: dict
    teamId: str


class AgentSkillLoadMatch(TypedDict):
    id: str


class AgentSkillListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class AgentSkillCreateDataRequired(TypedDict):
    body: str
    createdAt: Any
    id: str
    recentUsageCount: float
    shared: bool
    slugId: str
    title: str
    updatedAt: Any


class AgentSkillCreateData(AgentSkillCreateDataRequired, total=False):
    archivedAt: Any
    color: str
    creator: dict
    description: str
    icon: str
    inheritedFrom: dict
    lastUpdatedBy: dict
    lastUsedAt: Any
    owner: dict
    teamId: str


class AgentSkillUpdateDataRequired(TypedDict):
    id: str


class AgentSkillUpdateData(AgentSkillUpdateDataRequired, total=False):
    archivedAt: Any
    body: str
    color: str
    createdAt: Any
    creator: dict
    description: str
    icon: str
    inheritedFrom: dict
    lastUpdatedBy: dict
    lastUsedAt: Any
    owner: dict
    recentUsageCount: float
    shared: bool
    slugId: str
    teamId: str
    title: str
    updatedAt: Any


class AgentSkillRemoveMatch(TypedDict):
    id: str


class ApplicationRequired(TypedDict):
    clientId: str
    developer: str
    developerUrl: str
    id: str
    name: str


class Application(ApplicationRequired, total=False):
    description: str
    imageUrl: str


class ApplicationLoadMatch(TypedDict):
    client_id: str


class AttachmentRequired(TypedDict):
    createdAt: Any
    groupBySource: bool
    id: str
    metadata: Any
    title: str
    updatedAt: Any
    url: str


class Attachment(AttachmentRequired, total=False):
    archivedAt: Any
    bodyData: str
    creator: dict
    externalUserCreator: dict
    issue: dict
    originalIssue: dict
    source: Any
    sourceType: str
    subtitle: str


class AttachmentLoadMatch(TypedDict):
    id: str


class AttachmentListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any
    url: str


class AttachmentCreateDataRequired(TypedDict):
    createdAt: Any
    groupBySource: bool
    id: str
    metadata: Any
    title: str
    updatedAt: Any
    url: str


class AttachmentCreateData(AttachmentCreateDataRequired, total=False):
    archivedAt: Any
    bodyData: str
    creator: dict
    externalUserCreator: dict
    issue: dict
    originalIssue: dict
    source: Any
    sourceType: str
    subtitle: str


class AttachmentUpdateDataRequired(TypedDict):
    id: str


class AttachmentUpdateData(AttachmentUpdateDataRequired, total=False):
    archivedAt: Any
    bodyData: str
    createdAt: Any
    creator: dict
    externalUserCreator: dict
    groupBySource: bool
    issue: dict
    metadata: Any
    originalIssue: dict
    source: Any
    sourceType: str
    subtitle: str
    title: str
    updatedAt: Any
    url: str


class AttachmentRemoveMatch(TypedDict):
    id: str


class AuditEntryRequired(TypedDict):
    createdAt: Any
    id: str
    type: str
    updatedAt: Any


class AuditEntry(AuditEntryRequired, total=False):
    actor: dict
    actorId: str
    archivedAt: Any
    countryCode: str
    ip: str
    metadata: Any
    organization: dict
    requestInformation: Any


class AuditEntryListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class AuditEntryType(TypedDict):
    description: str
    type: str


class AuditEntryTypeListMatch(TypedDict, total=False):
    description: str
    type: str


class AuthResolverResponseRequired(TypedDict):
    email: str
    id: str


class AuthResolverResponse(AuthResolverResponseRequired, total=False):
    allowDomainAccess: bool
    lastUsedOrganizationId: str
    service: str


class AuthResolverResponseLoadMatchRequired(TypedDict):
    id: str


class AuthResolverResponseLoadMatch(AuthResolverResponseLoadMatchRequired, total=False):
    allowDomainAccess: bool
    email: str
    lastUsedOrganizationId: str
    service: str


class AuthResolverResponseCreateDataRequired(TypedDict):
    email: str
    id: str


class AuthResolverResponseCreateData(AuthResolverResponseCreateDataRequired, total=False):
    allowDomainAccess: bool
    lastUsedOrganizationId: str
    service: str


class AuthResolverResponseUpdateDataRequired(TypedDict):
    auth_id: str
    response: Any


class AuthResolverResponseUpdateData(AuthResolverResponseUpdateDataRequired, total=False):
    allowDomainAccess: bool
    email: str
    id: str
    lastUsedOrganizationId: str
    service: str


class AuthenticationSessionResponseRequired(TypedDict):
    countryCodes: str
    createdAt: Any
    detailedName: str
    id: str
    isCurrentSession: bool
    name: str
    type: str
    updatedAt: Any


class AuthenticationSessionResponse(AuthenticationSessionResponseRequired, total=False):
    browserType: str
    client: str
    ip: str
    lastActiveAt: Any
    location: str
    locationCity: str
    locationCountry: str
    locationCountryCode: str
    locationRegionCode: str
    operatingSystem: str
    service: str
    userAgent: str


class AuthenticationSessionResponseListMatch(TypedDict, total=False):
    id: str


class CommentRequired(TypedDict):
    body: str
    bodyData: str
    createdAt: Any
    hideInLinear: bool
    id: str
    isArtificialAgentSessionRoot: bool
    reactionData: Any
    updatedAt: Any
    url: str


class Comment(CommentRequired, total=False):
    agentSession: dict
    archivedAt: Any
    botActor: dict
    documentContent: dict
    documentContentId: str
    editedAt: Any
    externalThread: dict
    externalUser: dict
    initiative: dict
    initiativeId: str
    initiativeUpdate: dict
    initiativeUpdateId: str
    issue: dict
    issueId: str
    onBehalfOf: dict
    parent: dict
    parentId: str
    post: dict
    project: dict
    projectId: str
    projectUpdate: dict
    projectUpdateId: str
    quotedText: str
    resolvedAt: Any
    resolvingComment: dict
    resolvingCommentId: str
    resolvingUser: dict
    threadSummary: Any
    user: dict


class CommentLoadMatch(TypedDict, total=False):
    hash: str
    id: str


class CommentListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class CommentCreateDataRequired(TypedDict):
    body: str
    bodyData: str
    createdAt: Any
    hideInLinear: bool
    id: str
    isArtificialAgentSessionRoot: bool
    reactionData: Any
    updatedAt: Any
    url: str


class CommentCreateData(CommentCreateDataRequired, total=False):
    agentSession: dict
    archivedAt: Any
    botActor: dict
    documentContent: dict
    documentContentId: str
    editedAt: Any
    externalThread: dict
    externalUser: dict
    initiative: dict
    initiativeId: str
    initiativeUpdate: dict
    initiativeUpdateId: str
    issue: dict
    issueId: str
    onBehalfOf: dict
    parent: dict
    parentId: str
    post: dict
    project: dict
    projectId: str
    projectUpdate: dict
    projectUpdateId: str
    quotedText: str
    resolvedAt: Any
    resolvingComment: dict
    resolvingCommentId: str
    resolvingUser: dict
    threadSummary: Any
    user: dict


class CommentUpdateDataRequired(TypedDict):
    id: str


class CommentUpdateData(CommentUpdateDataRequired, total=False):
    skip_edited_at: bool
    agentSession: dict
    archivedAt: Any
    body: str
    bodyData: str
    botActor: dict
    createdAt: Any
    documentContent: dict
    documentContentId: str
    editedAt: Any
    externalThread: dict
    externalUser: dict
    hideInLinear: bool
    initiative: dict
    initiativeId: str
    initiativeUpdate: dict
    initiativeUpdateId: str
    isArtificialAgentSessionRoot: bool
    issue: dict
    issueId: str
    onBehalfOf: dict
    parent: dict
    parentId: str
    post: dict
    project: dict
    projectId: str
    projectUpdate: dict
    projectUpdateId: str
    quotedText: str
    reactionData: Any
    resolvedAt: Any
    resolvingComment: dict
    resolvingCommentId: str
    resolvingUser: dict
    threadSummary: Any
    updatedAt: Any
    url: str
    user: dict


class CommentRemoveMatch(TypedDict):
    id: str


class CreateOrJoinOrganizationResponse(TypedDict, total=False):
    organization: dict
    user: dict


class CreateOrJoinOrganizationResponseCreateData(TypedDict, total=False):
    partner_offer_token: str
    session_id: str
    organization: dict
    user: dict


class CreateOrJoinOrganizationResponseUpdateDataRequired(TypedDict):
    organization_id: str


class CreateOrJoinOrganizationResponseUpdateData(CreateOrJoinOrganizationResponseUpdateDataRequired, total=False):
    organization: dict
    user: dict


class CustomViewRequired(TypedDict):
    createdAt: Any
    filterData: Any
    id: str
    modelName: str
    name: str
    shared: bool
    slugId: str
    updatedAt: Any


class CustomView(CustomViewRequired, total=False):
    archivedAt: Any
    color: str
    creator: dict
    description: str
    facet: dict
    feedItemFilterData: Any
    icon: str
    initiativeFilterData: Any
    organization: dict
    organizationViewPreferences: dict
    owner: dict
    projectFilterData: Any
    team: dict
    updatedBy: dict
    userViewPreferences: dict


class CustomViewLoadMatch(TypedDict):
    id: str


class CustomViewListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class CustomViewCreateDataRequired(TypedDict):
    createdAt: Any
    filterData: Any
    id: str
    modelName: str
    name: str
    shared: bool
    slugId: str
    updatedAt: Any


class CustomViewCreateData(CustomViewCreateDataRequired, total=False):
    archivedAt: Any
    color: str
    creator: dict
    description: str
    facet: dict
    feedItemFilterData: Any
    icon: str
    initiativeFilterData: Any
    organization: dict
    organizationViewPreferences: dict
    owner: dict
    projectFilterData: Any
    team: dict
    updatedBy: dict
    userViewPreferences: dict


class CustomViewUpdateDataRequired(TypedDict):
    id: str


class CustomViewUpdateData(CustomViewUpdateDataRequired, total=False):
    archivedAt: Any
    color: str
    createdAt: Any
    creator: dict
    description: str
    facet: dict
    feedItemFilterData: Any
    filterData: Any
    icon: str
    initiativeFilterData: Any
    modelName: str
    name: str
    organization: dict
    organizationViewPreferences: dict
    owner: dict
    projectFilterData: Any
    shared: bool
    slugId: str
    team: dict
    updatedAt: Any
    updatedBy: dict
    userViewPreferences: dict


class CustomViewRemoveMatch(TypedDict):
    id: str


class CustomerRequired(TypedDict):
    approximateNeedCount: float
    createdAt: Any
    domains: str
    externalIds: str
    id: str
    name: str
    slugId: str
    updatedAt: Any
    url: str


class Customer(CustomerRequired, total=False):
    archivedAt: Any
    integration: dict
    logoUrl: str
    mainSourceId: str
    owner: dict
    revenue: int
    size: float
    slackChannelId: str
    status: dict
    tier: dict


class CustomerLoadMatch(TypedDict):
    id: str


class CustomerListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class CustomerCreateDataRequired(TypedDict):
    approximateNeedCount: float
    createdAt: Any
    domains: str
    externalIds: str
    id: str
    name: str
    slugId: str
    updatedAt: Any
    url: str


class CustomerCreateData(CustomerCreateDataRequired, total=False):
    archivedAt: Any
    integration: dict
    logoUrl: str
    mainSourceId: str
    owner: dict
    revenue: int
    size: float
    slackChannelId: str
    status: dict
    tier: dict


class CustomerUpdateDataRequired(TypedDict):
    id: str


class CustomerUpdateData(CustomerUpdateDataRequired, total=False):
    approximateNeedCount: float
    archivedAt: Any
    createdAt: Any
    domains: str
    externalIds: str
    integration: dict
    logoUrl: str
    mainSourceId: str
    name: str
    owner: dict
    revenue: int
    size: float
    slackChannelId: str
    slugId: str
    status: dict
    tier: dict
    updatedAt: Any
    url: str


class CustomerRemoveMatch(TypedDict):
    id: str


class CustomerNeedRequired(TypedDict):
    createdAt: Any
    id: str
    priority: float
    updatedAt: Any


class CustomerNeed(CustomerNeedRequired, total=False):
    archivedAt: Any
    attachment: dict
    body: str
    bodyData: str
    comment: dict
    content: str
    creator: dict
    customer: dict
    issue: dict
    originalIssue: dict
    project: dict
    projectAttachment: dict
    url: str


class CustomerNeedLoadMatch(TypedDict, total=False):
    hash: str
    id: str


class CustomerNeedListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class CustomerNeedCreateDataRequired(TypedDict):
    createdAt: Any
    id: str
    priority: float
    updatedAt: Any


class CustomerNeedCreateData(CustomerNeedCreateDataRequired, total=False):
    archivedAt: Any
    attachment: dict
    body: str
    bodyData: str
    comment: dict
    content: str
    creator: dict
    customer: dict
    issue: dict
    originalIssue: dict
    project: dict
    projectAttachment: dict
    url: str


class CustomerNeedUpdateDataRequired(TypedDict):
    id: str


class CustomerNeedUpdateData(CustomerNeedUpdateDataRequired, total=False):
    clear_attachment: bool
    archivedAt: Any
    attachment: dict
    body: str
    bodyData: str
    comment: dict
    content: str
    createdAt: Any
    creator: dict
    customer: dict
    issue: dict
    originalIssue: dict
    priority: float
    project: dict
    projectAttachment: dict
    updatedAt: Any
    url: str


class CustomerNeedRemoveMatchRequired(TypedDict):
    id: str


class CustomerNeedRemoveMatch(CustomerNeedRemoveMatchRequired, total=False):
    keep_attachment: bool


class CustomerStatusRequired(TypedDict):
    color: str
    createdAt: Any
    displayName: str
    id: str
    name: str
    position: float
    updatedAt: Any


class CustomerStatus(CustomerStatusRequired, total=False):
    archivedAt: Any
    description: str


class CustomerStatusLoadMatch(TypedDict):
    id: str


class CustomerStatusListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class CustomerStatusCreateDataRequired(TypedDict):
    color: str
    createdAt: Any
    displayName: str
    id: str
    name: str
    position: float
    updatedAt: Any


class CustomerStatusCreateData(CustomerStatusCreateDataRequired, total=False):
    archivedAt: Any
    description: str


class CustomerStatusUpdateDataRequired(TypedDict):
    id: str


class CustomerStatusUpdateData(CustomerStatusUpdateDataRequired, total=False):
    archivedAt: Any
    color: str
    createdAt: Any
    description: str
    displayName: str
    name: str
    position: float
    updatedAt: Any


class CustomerStatusRemoveMatch(TypedDict):
    id: str


class CustomerTierRequired(TypedDict):
    color: str
    createdAt: Any
    displayName: str
    id: str
    name: str
    position: float
    updatedAt: Any


class CustomerTier(CustomerTierRequired, total=False):
    archivedAt: Any
    description: str


class CustomerTierLoadMatch(TypedDict):
    id: str


class CustomerTierListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class CustomerTierCreateDataRequired(TypedDict):
    color: str
    createdAt: Any
    displayName: str
    id: str
    name: str
    position: float
    updatedAt: Any


class CustomerTierCreateData(CustomerTierCreateDataRequired, total=False):
    archivedAt: Any
    description: str


class CustomerTierUpdateDataRequired(TypedDict):
    id: str


class CustomerTierUpdateData(CustomerTierUpdateDataRequired, total=False):
    archivedAt: Any
    color: str
    createdAt: Any
    description: str
    displayName: str
    name: str
    position: float
    updatedAt: Any


class CustomerTierRemoveMatch(TypedDict):
    id: str


class CycleRequired(TypedDict):
    completedIssueCountHistory: float
    completedScopeHistory: float
    createdAt: Any
    currentProgress: Any
    endsAt: Any
    id: str
    inProgressScopeHistory: float
    isActive: bool
    isFuture: bool
    isNext: bool
    isPast: bool
    isPrevious: bool
    issueCountHistory: float
    number: float
    progress: float
    progressHistory: Any
    scopeHistory: float
    startsAt: Any
    updatedAt: Any


class Cycle(CycleRequired, total=False):
    archivedAt: Any
    autoArchivedAt: Any
    completedAt: Any
    description: str
    inheritedFrom: dict
    name: str
    team: dict


class CycleLoadMatch(TypedDict):
    id: str


class CycleListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class CycleCreateDataRequired(TypedDict):
    completedIssueCountHistory: float
    completedScopeHistory: float
    createdAt: Any
    currentProgress: Any
    endsAt: Any
    id: str
    inProgressScopeHistory: float
    isActive: bool
    isFuture: bool
    isNext: bool
    isPast: bool
    isPrevious: bool
    issueCountHistory: float
    number: float
    progress: float
    progressHistory: Any
    scopeHistory: float
    startsAt: Any
    updatedAt: Any


class CycleCreateData(CycleCreateDataRequired, total=False):
    archivedAt: Any
    autoArchivedAt: Any
    completedAt: Any
    description: str
    inheritedFrom: dict
    name: str
    team: dict


class CycleUpdateDataRequired(TypedDict):
    id: str


class CycleUpdateData(CycleUpdateDataRequired, total=False):
    archivedAt: Any
    autoArchivedAt: Any
    completedAt: Any
    completedIssueCountHistory: float
    completedScopeHistory: float
    createdAt: Any
    currentProgress: Any
    description: str
    endsAt: Any
    inProgressScopeHistory: float
    inheritedFrom: dict
    isActive: bool
    isFuture: bool
    isNext: bool
    isPast: bool
    isPrevious: bool
    issueCountHistory: float
    name: str
    number: float
    progress: float
    progressHistory: Any
    scopeHistory: float
    startsAt: Any
    team: dict
    updatedAt: Any


class DiffRequired(TypedDict):
    additions: float
    contentHash: str
    createdAt: Any
    deletions: float
    fileCount: float
    id: str
    slugId: str
    truncated: bool
    updatedAt: Any


class Diff(DiffRequired, total=False):
    agentSession: dict
    archivedAt: Any
    creator: dict
    organization: dict
    pullRequest: dict


class DiffLoadMatch(TypedDict):
    id: str


class DocumentRequired(TypedDict):
    createdAt: Any
    id: str
    slugId: str
    sortOrder: float
    title: str
    updatedAt: Any
    url: str


class Document(DocumentRequired, total=False):
    archivedAt: Any
    color: str
    content: str
    contentState: str
    creator: dict
    cycle: dict
    documentContentId: str
    hiddenAt: Any
    icon: str
    initiative: dict
    issue: dict
    lastAppliedTemplate: dict
    owner: dict
    project: dict
    release: dict
    summary: str
    team: dict
    trashed: bool
    updatedBy: dict


class DocumentLoadMatch(TypedDict):
    id: str


class DocumentListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class DocumentCreateDataRequired(TypedDict):
    createdAt: Any
    id: str
    slugId: str
    sortOrder: float
    title: str
    updatedAt: Any
    url: str


class DocumentCreateData(DocumentCreateDataRequired, total=False):
    archivedAt: Any
    color: str
    content: str
    contentState: str
    creator: dict
    cycle: dict
    documentContentId: str
    hiddenAt: Any
    icon: str
    initiative: dict
    issue: dict
    lastAppliedTemplate: dict
    owner: dict
    project: dict
    release: dict
    summary: str
    team: dict
    trashed: bool
    updatedBy: dict


class DocumentUpdateDataRequired(TypedDict):
    id: str


class DocumentUpdateData(DocumentUpdateDataRequired, total=False):
    archivedAt: Any
    color: str
    content: str
    contentState: str
    createdAt: Any
    creator: dict
    cycle: dict
    documentContentId: str
    hiddenAt: Any
    icon: str
    initiative: dict
    issue: dict
    lastAppliedTemplate: dict
    owner: dict
    project: dict
    release: dict
    slugId: str
    sortOrder: float
    summary: str
    team: dict
    title: str
    trashed: bool
    updatedAt: Any
    updatedBy: dict
    url: str


class DocumentRemoveMatch(TypedDict):
    id: str


class DocumentSearchResultRequired(TypedDict):
    createdAt: Any
    id: str
    metadata: Any
    slugId: str
    sortOrder: float
    title: str
    updatedAt: Any
    url: str


class DocumentSearchResult(DocumentSearchResultRequired, total=False):
    archivedAt: Any
    color: str
    content: str
    contentState: str
    creator: dict
    cycle: dict
    documentContentId: str
    hiddenAt: Any
    icon: str
    initiative: dict
    issue: dict
    lastAppliedTemplate: dict
    owner: dict
    project: dict
    release: dict
    summary: str
    team: dict
    trashed: bool
    updatedBy: dict


class DocumentSearchResultListMatchRequired(TypedDict):
    term: str


class DocumentSearchResultListMatch(DocumentSearchResultListMatchRequired, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    include_comment: bool
    last: int
    order_by: Any
    team_id: str


class EmailIntakeAddressRequired(TypedDict):
    address: str
    createdAt: Any
    customerRequestsEnabled: bool
    enabled: bool
    id: str
    issueCanceledAutoReplyEnabled: bool
    issueCompletedAutoReplyEnabled: bool
    issueCreatedAutoReplyEnabled: bool
    reopenOnReply: bool
    repliesEnabled: bool
    type: str
    updatedAt: Any
    useUserNamesInReplies: bool


class EmailIntakeAddress(EmailIntakeAddressRequired, total=False):
    archivedAt: Any
    creator: dict
    forwardingEmailAddress: str
    issueCanceledAutoReply: str
    issueCompletedAutoReply: str
    issueCreatedAutoReply: str
    lastUsedAt: Any
    organization: dict
    senderName: str
    sesDomainIdentity: dict
    team: dict
    template: dict


class EmailIntakeAddressLoadMatch(TypedDict):
    id: str


class EmailIntakeAddressCreateDataRequired(TypedDict):
    address: str
    createdAt: Any
    customerRequestsEnabled: bool
    enabled: bool
    id: str
    issueCanceledAutoReplyEnabled: bool
    issueCompletedAutoReplyEnabled: bool
    issueCreatedAutoReplyEnabled: bool
    reopenOnReply: bool
    repliesEnabled: bool
    type: str
    updatedAt: Any
    useUserNamesInReplies: bool


class EmailIntakeAddressCreateData(EmailIntakeAddressCreateDataRequired, total=False):
    archivedAt: Any
    creator: dict
    forwardingEmailAddress: str
    issueCanceledAutoReply: str
    issueCompletedAutoReply: str
    issueCreatedAutoReply: str
    lastUsedAt: Any
    organization: dict
    senderName: str
    sesDomainIdentity: dict
    team: dict
    template: dict


class EmailIntakeAddressUpdateDataRequired(TypedDict):
    id: str


class EmailIntakeAddressUpdateData(EmailIntakeAddressUpdateDataRequired, total=False):
    address: str
    archivedAt: Any
    createdAt: Any
    creator: dict
    customerRequestsEnabled: bool
    enabled: bool
    forwardingEmailAddress: str
    issueCanceledAutoReply: str
    issueCanceledAutoReplyEnabled: bool
    issueCompletedAutoReply: str
    issueCompletedAutoReplyEnabled: bool
    issueCreatedAutoReply: str
    issueCreatedAutoReplyEnabled: bool
    lastUsedAt: Any
    organization: dict
    reopenOnReply: bool
    repliesEnabled: bool
    senderName: str
    sesDomainIdentity: dict
    team: dict
    template: dict
    type: str
    updatedAt: Any
    useUserNamesInReplies: bool


class EmailIntakeAddressRemoveMatch(TypedDict):
    id: str


class EmailUserAccountAuthChallengeResponse(TypedDict):
    authType: str
    success: bool


class EmailUserAccountAuthChallengeResponseCreateData(TypedDict):
    authType: str
    success: bool


class EmojiRequired(TypedDict):
    createdAt: Any
    id: str
    name: str
    source: str
    updatedAt: Any
    url: str


class Emoji(EmojiRequired, total=False):
    archivedAt: Any
    creator: dict
    organization: dict


class EmojiLoadMatch(TypedDict):
    id: str


class EmojiListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class EmojiCreateDataRequired(TypedDict):
    createdAt: Any
    id: str
    name: str
    source: str
    updatedAt: Any
    url: str


class EmojiCreateData(EmojiCreateDataRequired, total=False):
    archivedAt: Any
    creator: dict
    organization: dict


class EmojiRemoveMatch(TypedDict):
    id: str


class EntityExternalLinkRequired(TypedDict):
    createdAt: Any
    id: str
    label: str
    sortOrder: float
    updatedAt: Any
    url: str


class EntityExternalLink(EntityExternalLinkRequired, total=False):
    archivedAt: Any
    creator: dict
    initiative: dict
    project: dict


class EntityExternalLinkLoadMatch(TypedDict):
    id: str


class EntityExternalLinkCreateDataRequired(TypedDict):
    createdAt: Any
    id: str
    label: str
    sortOrder: float
    updatedAt: Any
    url: str


class EntityExternalLinkCreateData(EntityExternalLinkCreateDataRequired, total=False):
    archivedAt: Any
    creator: dict
    initiative: dict
    project: dict


class EntityExternalLinkUpdateDataRequired(TypedDict):
    id: str


class EntityExternalLinkUpdateData(EntityExternalLinkUpdateDataRequired, total=False):
    archivedAt: Any
    createdAt: Any
    creator: dict
    initiative: dict
    label: str
    project: dict
    sortOrder: float
    updatedAt: Any
    url: str


class EntityExternalLinkRemoveMatch(TypedDict):
    id: str


class ExternalUserRequired(TypedDict):
    createdAt: Any
    displayName: str
    id: str
    name: str
    updatedAt: Any


class ExternalUser(ExternalUserRequired, total=False):
    archivedAt: Any
    avatarUrl: str
    email: str
    lastSeen: Any
    organization: dict


class ExternalUserLoadMatch(TypedDict):
    id: str


class ExternalUserListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class FavoriteRequired(TypedDict):
    createdAt: Any
    id: str
    sortOrder: float
    title: str
    type: str
    updatedAt: Any


class Favorite(FavoriteRequired, total=False):
    aiConversation: dict
    archivedAt: Any
    color: str
    customView: dict
    customer: dict
    cycle: dict
    dashboard: dict
    detail: str
    document: dict
    facet: dict
    folderName: str
    icon: str
    initiative: dict
    initiativeLabel: dict
    initiativeTab: str
    issue: dict
    label: dict
    liveFolderDefinition: Any
    liveFolderPreset: str
    owner: dict
    parent: dict
    pipelineTab: str
    predefinedViewTeam: dict
    predefinedViewType: str
    project: dict
    projectLabel: dict
    projectTab: str
    projectTeam: dict
    pullRequest: dict
    release: dict
    releaseNote: dict
    releasePipeline: dict
    team: dict
    url: str
    user: dict
    workflowDefinition: dict


class FavoriteLoadMatch(TypedDict):
    id: str


class FavoriteListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class FavoriteCreateDataRequired(TypedDict):
    createdAt: Any
    id: str
    sortOrder: float
    title: str
    type: str
    updatedAt: Any


class FavoriteCreateData(FavoriteCreateDataRequired, total=False):
    aiConversation: dict
    archivedAt: Any
    color: str
    customView: dict
    customer: dict
    cycle: dict
    dashboard: dict
    detail: str
    document: dict
    facet: dict
    folderName: str
    icon: str
    initiative: dict
    initiativeLabel: dict
    initiativeTab: str
    issue: dict
    label: dict
    liveFolderDefinition: Any
    liveFolderPreset: str
    owner: dict
    parent: dict
    pipelineTab: str
    predefinedViewTeam: dict
    predefinedViewType: str
    project: dict
    projectLabel: dict
    projectTab: str
    projectTeam: dict
    pullRequest: dict
    release: dict
    releaseNote: dict
    releasePipeline: dict
    team: dict
    url: str
    user: dict
    workflowDefinition: dict


class FavoriteUpdateDataRequired(TypedDict):
    id: str


class FavoriteUpdateData(FavoriteUpdateDataRequired, total=False):
    aiConversation: dict
    archivedAt: Any
    color: str
    createdAt: Any
    customView: dict
    customer: dict
    cycle: dict
    dashboard: dict
    detail: str
    document: dict
    facet: dict
    folderName: str
    icon: str
    initiative: dict
    initiativeLabel: dict
    initiativeTab: str
    issue: dict
    label: dict
    liveFolderDefinition: Any
    liveFolderPreset: str
    owner: dict
    parent: dict
    pipelineTab: str
    predefinedViewTeam: dict
    predefinedViewType: str
    project: dict
    projectLabel: dict
    projectTab: str
    projectTeam: dict
    pullRequest: dict
    release: dict
    releaseNote: dict
    releasePipeline: dict
    sortOrder: float
    team: dict
    title: str
    type: str
    updatedAt: Any
    url: str
    user: dict
    workflowDefinition: dict


class FavoriteRemoveMatch(TypedDict):
    id: str


class GitAutomationStateRequired(TypedDict):
    createdAt: Any
    event: str
    id: str
    updatedAt: Any


class GitAutomationState(GitAutomationStateRequired, total=False):
    archivedAt: Any
    state: dict
    targetBranch: dict
    team: dict


class GitAutomationStateCreateDataRequired(TypedDict):
    createdAt: Any
    event: str
    id: str
    updatedAt: Any


class GitAutomationStateCreateData(GitAutomationStateCreateDataRequired, total=False):
    archivedAt: Any
    state: dict
    targetBranch: dict
    team: dict


class GitAutomationStateUpdateDataRequired(TypedDict):
    id: str


class GitAutomationStateUpdateData(GitAutomationStateUpdateDataRequired, total=False):
    archivedAt: Any
    createdAt: Any
    event: str
    state: dict
    targetBranch: dict
    team: dict
    updatedAt: Any


class GitAutomationStateRemoveMatch(TypedDict):
    id: str


class GitAutomationTargetBranchRequired(TypedDict):
    branchPattern: str
    createdAt: Any
    id: str
    isRegex: bool
    updatedAt: Any


class GitAutomationTargetBranch(GitAutomationTargetBranchRequired, total=False):
    archivedAt: Any
    team: dict


class GitAutomationTargetBranchCreateDataRequired(TypedDict):
    branchPattern: str
    createdAt: Any
    id: str
    isRegex: bool
    updatedAt: Any


class GitAutomationTargetBranchCreateData(GitAutomationTargetBranchCreateDataRequired, total=False):
    archivedAt: Any
    team: dict


class GitAutomationTargetBranchUpdateDataRequired(TypedDict):
    id: str


class GitAutomationTargetBranchUpdateData(GitAutomationTargetBranchUpdateDataRequired, total=False):
    archivedAt: Any
    branchPattern: str
    createdAt: Any
    isRegex: bool
    team: dict
    updatedAt: Any


class GitAutomationTargetBranchRemoveMatch(TypedDict):
    id: str


class GitHubIntegrationConnectDetail(TypedDict, total=False):
    lostRepositoryNames: str


class GitHubIntegrationConnectDetailCreateData(TypedDict, total=False):
    code: str
    redirect_uri: str
    github_url: str
    organization_name: str
    access_token: str
    expires_at: str
    gitlab_url: str
    readonly: bool
    validation_project_path: str
    lostRepositoryNames: str


class GitHubIntegrationConnectDetailUpdateData(TypedDict, total=False):
    code: str
    project_id: str
    redirect_uri: str
    service: str
    custom_view_id: str
    initiative_id: str
    should_use_v2_auth: bool
    team_id: str
    integration_id: str
    lostRepositoryNames: str


class InitiativeRequired(TypedDict):
    createdAt: Any
    frequencyResolution: str
    id: str
    labelIds: str
    name: str
    previousIdentifiers: str
    priority: int
    prioritySortOrder: float
    slugId: str
    sortOrder: float
    status: str
    updatedAt: Any
    url: str
    visibility: str


class Initiative(InitiativeRequired, total=False):
    archivedAt: Any
    canceledAt: Any
    color: str
    completedAt: Any
    content: str
    creator: dict
    description: str
    documentContent: dict
    health: str
    healthUpdatedAt: Any
    icon: str
    identifier: str
    integrationsSettings: dict
    lastUpdate: dict
    leadTeam: dict
    organization: dict
    owner: dict
    parentInitiative: dict
    startedAt: Any
    targetDate: Any
    targetDateResolution: str
    trashed: bool
    updateReminderFrequency: float
    updateReminderFrequencyInWeeks: float
    updateRemindersDay: str
    updateRemindersHour: float


class InitiativeLoadMatch(TypedDict):
    id: str


class InitiativeListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class InitiativeCreateDataRequired(TypedDict):
    createdAt: Any
    frequencyResolution: str
    id: str
    labelIds: str
    name: str
    previousIdentifiers: str
    priority: int
    prioritySortOrder: float
    slugId: str
    sortOrder: float
    status: str
    updatedAt: Any
    url: str
    visibility: str


class InitiativeCreateData(InitiativeCreateDataRequired, total=False):
    archivedAt: Any
    canceledAt: Any
    color: str
    completedAt: Any
    content: str
    creator: dict
    description: str
    documentContent: dict
    health: str
    healthUpdatedAt: Any
    icon: str
    identifier: str
    integrationsSettings: dict
    lastUpdate: dict
    leadTeam: dict
    organization: dict
    owner: dict
    parentInitiative: dict
    startedAt: Any
    targetDate: Any
    targetDateResolution: str
    trashed: bool
    updateReminderFrequency: float
    updateReminderFrequencyInWeeks: float
    updateRemindersDay: str
    updateRemindersHour: float


class InitiativeUpdateDataRequired(TypedDict):
    id: str


class InitiativeUpdateData(InitiativeUpdateDataRequired, total=False):
    archivedAt: Any
    canceledAt: Any
    color: str
    completedAt: Any
    content: str
    createdAt: Any
    creator: dict
    description: str
    documentContent: dict
    frequencyResolution: str
    health: str
    healthUpdatedAt: Any
    icon: str
    identifier: str
    integrationsSettings: dict
    labelIds: str
    lastUpdate: dict
    leadTeam: dict
    name: str
    organization: dict
    owner: dict
    parentInitiative: dict
    previousIdentifiers: str
    priority: int
    prioritySortOrder: float
    slugId: str
    sortOrder: float
    startedAt: Any
    status: str
    targetDate: Any
    targetDateResolution: str
    trashed: bool
    updateReminderFrequency: float
    updateReminderFrequencyInWeeks: float
    updateRemindersDay: str
    updateRemindersHour: float
    updatedAt: Any
    url: str
    visibility: str


class InitiativeRemoveMatch(TypedDict):
    id: str


class InitiativeLabelRequired(TypedDict):
    color: str
    createdAt: Any
    id: str
    isGroup: bool
    name: str
    updatedAt: Any


class InitiativeLabel(InitiativeLabelRequired, total=False):
    archivedAt: Any
    creator: dict
    description: str
    lastAppliedAt: Any
    organization: dict
    parent: dict
    retiredAt: Any
    retiredBy: dict


class InitiativeLabelLoadMatch(TypedDict):
    id: str


class InitiativeLabelListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class InitiativeLabelCreateDataRequired(TypedDict):
    color: str
    createdAt: Any
    id: str
    isGroup: bool
    name: str
    updatedAt: Any


class InitiativeLabelCreateData(InitiativeLabelCreateDataRequired, total=False):
    archivedAt: Any
    creator: dict
    description: str
    lastAppliedAt: Any
    organization: dict
    parent: dict
    retiredAt: Any
    retiredBy: dict


class InitiativeLabelUpdateDataRequired(TypedDict):
    id: str


class InitiativeLabelUpdateData(InitiativeLabelUpdateDataRequired, total=False):
    archivedAt: Any
    color: str
    createdAt: Any
    creator: dict
    description: str
    isGroup: bool
    lastAppliedAt: Any
    name: str
    organization: dict
    parent: dict
    retiredAt: Any
    retiredBy: dict
    updatedAt: Any


class InitiativeLabelRemoveMatch(TypedDict):
    id: str


class InitiativeLeadTeamChangeImpactRequired(TypedDict):
    affectedDescendantCount: int
    visibilityMayChange: bool


class InitiativeLeadTeamChangeImpact(InitiativeLeadTeamChangeImpactRequired, total=False):
    id: str


class InitiativeLeadTeamChangeImpactLoadMatchRequired(TypedDict):
    id: str


class InitiativeLeadTeamChangeImpactLoadMatch(InitiativeLeadTeamChangeImpactLoadMatchRequired, total=False):
    lead_team_id: str


class InitiativeRelationRequired(TypedDict):
    createdAt: Any
    id: str
    sortOrder: float
    updatedAt: Any


class InitiativeRelation(InitiativeRelationRequired, total=False):
    archivedAt: Any
    initiative: dict
    relatedInitiative: dict
    user: dict


class InitiativeRelationLoadMatch(TypedDict):
    id: str


class InitiativeRelationListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class InitiativeRelationCreateDataRequired(TypedDict):
    createdAt: Any
    id: str
    sortOrder: float
    updatedAt: Any


class InitiativeRelationCreateData(InitiativeRelationCreateDataRequired, total=False):
    archivedAt: Any
    initiative: dict
    relatedInitiative: dict
    user: dict


class InitiativeRelationUpdateDataRequired(TypedDict):
    id: str


class InitiativeRelationUpdateData(InitiativeRelationUpdateDataRequired, total=False):
    archivedAt: Any
    createdAt: Any
    initiative: dict
    relatedInitiative: dict
    sortOrder: float
    updatedAt: Any
    user: dict


class InitiativeRelationRemoveMatch(TypedDict):
    id: str


class InitiativeToProjectRequired(TypedDict):
    createdAt: Any
    id: str
    sortOrder: str
    updatedAt: Any


class InitiativeToProject(InitiativeToProjectRequired, total=False):
    archivedAt: Any
    initiative: dict
    project: dict


class InitiativeToProjectLoadMatch(TypedDict):
    id: str


class InitiativeToProjectListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class InitiativeToProjectCreateDataRequired(TypedDict):
    createdAt: Any
    id: str
    sortOrder: str
    updatedAt: Any


class InitiativeToProjectCreateData(InitiativeToProjectCreateDataRequired, total=False):
    archivedAt: Any
    initiative: dict
    project: dict


class InitiativeToProjectUpdateDataRequired(TypedDict):
    id: str


class InitiativeToProjectUpdateData(InitiativeToProjectUpdateDataRequired, total=False):
    archivedAt: Any
    createdAt: Any
    initiative: dict
    project: dict
    sortOrder: str
    updatedAt: Any


class InitiativeToProjectRemoveMatch(TypedDict):
    id: str


class InitiativeUpdateRequired(TypedDict):
    body: str
    bodyData: str
    commentCount: int
    createdAt: Any
    health: str
    id: str
    isDiffHidden: bool
    isStale: bool
    reactionData: Any
    slugId: str
    updatedAt: Any
    url: str


class InitiativeUpdate(InitiativeUpdateRequired, total=False):
    archivedAt: Any
    diff: Any
    diffMarkdown: str
    editedAt: Any
    infoSnapshot: Any
    initiative: dict
    user: dict


class InitiativeUpdateLoadMatch(TypedDict):
    id: str


class InitiativeUpdateListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class InitiativeUpdateCreateDataRequired(TypedDict):
    body: str
    bodyData: str
    commentCount: int
    createdAt: Any
    health: str
    id: str
    isDiffHidden: bool
    isStale: bool
    reactionData: Any
    slugId: str
    updatedAt: Any
    url: str


class InitiativeUpdateCreateData(InitiativeUpdateCreateDataRequired, total=False):
    archivedAt: Any
    diff: Any
    diffMarkdown: str
    editedAt: Any
    infoSnapshot: Any
    initiative: dict
    user: dict


class InitiativeUpdateUpdateDataRequired(TypedDict):
    id: str


class InitiativeUpdateUpdateData(InitiativeUpdateUpdateDataRequired, total=False):
    archivedAt: Any
    body: str
    bodyData: str
    commentCount: int
    createdAt: Any
    diff: Any
    diffMarkdown: str
    editedAt: Any
    health: str
    infoSnapshot: Any
    initiative: dict
    isDiffHidden: bool
    isStale: bool
    reactionData: Any
    slugId: str
    updatedAt: Any
    url: str
    user: dict


class IntegrationRequired(TypedDict):
    createdAt: Any
    id: str
    service: str
    updatedAt: Any


class Integration(IntegrationRequired, total=False):
    archivedAt: Any
    creator: dict
    organization: dict
    team: dict


class IntegrationLoadMatch(TypedDict):
    id: str


class IntegrationListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class IntegrationCreateDataRequired(TypedDict):
    createdAt: Any
    id: str
    service: str
    updatedAt: Any


class IntegrationCreateData(IntegrationCreateDataRequired, total=False):
    code: str
    code_verifier: str
    redirect_uri: str
    subdomain: str
    environment: str
    project_key: str
    domain_url: str
    requested_scope: str
    should_use_v2_auth: bool
    code_access: bool
    enterprise_url: str
    mcp_server_definition_id: str
    server_url: str
    team_id: str
    workflow_definition_draft_id: str
    workflow_definition_id: str
    api_key: str
    access_token: str
    bot_user_role: str
    custom_api_url: str
    scope: str
    archivedAt: Any
    creator: dict
    organization: dict
    team: dict


class IntegrationUpdateDataRequired(TypedDict):
    id: str


class IntegrationUpdateData(IntegrationUpdateDataRequired, total=False):
    archivedAt: Any
    createdAt: Any
    creator: dict
    organization: dict
    service: str
    team: dict
    updatedAt: Any


class IntegrationRemoveMatchRequired(TypedDict):
    id: str


class IntegrationRemoveMatch(IntegrationRemoveMatchRequired, total=False):
    skip_installation_deletion: bool


class IntegrationTemplateRequired(TypedDict):
    createdAt: Any
    id: str
    updatedAt: Any


class IntegrationTemplate(IntegrationTemplateRequired, total=False):
    archivedAt: Any
    foreignEntityId: str
    integration: dict
    template: dict


class IntegrationTemplateLoadMatch(TypedDict):
    id: str


class IntegrationTemplateListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class IntegrationTemplateCreateDataRequired(TypedDict):
    createdAt: Any
    id: str
    updatedAt: Any


class IntegrationTemplateCreateData(IntegrationTemplateCreateDataRequired, total=False):
    archivedAt: Any
    foreignEntityId: str
    integration: dict
    template: dict


class IntegrationTemplateRemoveMatch(TypedDict):
    id: str


class IntegrationsSettingRequired(TypedDict):
    createdAt: Any
    id: str
    updatedAt: Any


class IntegrationsSetting(IntegrationsSettingRequired, total=False):
    archivedAt: Any
    contextViewType: str
    initiative: dict
    microsoftTeamsProjectUpdateCreated: bool
    project: dict
    slackInitiativeUpdateCreated: bool
    slackIssueAddedToTriage: bool
    slackIssueAddedToView: bool
    slackIssueNewComment: bool
    slackIssueSlaBreached: bool
    slackIssueSlaHighRisk: bool
    slackIssueStatusChangedAll: bool
    slackIssueStatusChangedDone: bool
    slackProjectUpdateCreated: bool
    slackProjectUpdateCreatedToTeam: bool
    slackProjectUpdateCreatedToWorkspace: bool
    team: dict


class IntegrationsSettingLoadMatch(TypedDict):
    id: str


class IntegrationsSettingCreateDataRequired(TypedDict):
    createdAt: Any
    id: str
    updatedAt: Any


class IntegrationsSettingCreateData(IntegrationsSettingCreateDataRequired, total=False):
    archivedAt: Any
    contextViewType: str
    initiative: dict
    microsoftTeamsProjectUpdateCreated: bool
    project: dict
    slackInitiativeUpdateCreated: bool
    slackIssueAddedToTriage: bool
    slackIssueAddedToView: bool
    slackIssueNewComment: bool
    slackIssueSlaBreached: bool
    slackIssueSlaHighRisk: bool
    slackIssueStatusChangedAll: bool
    slackIssueStatusChangedDone: bool
    slackProjectUpdateCreated: bool
    slackProjectUpdateCreatedToTeam: bool
    slackProjectUpdateCreatedToWorkspace: bool
    team: dict


class IntegrationsSettingUpdateDataRequired(TypedDict):
    id: str


class IntegrationsSettingUpdateData(IntegrationsSettingUpdateDataRequired, total=False):
    archivedAt: Any
    contextViewType: str
    createdAt: Any
    initiative: dict
    microsoftTeamsProjectUpdateCreated: bool
    project: dict
    slackInitiativeUpdateCreated: bool
    slackIssueAddedToTriage: bool
    slackIssueAddedToView: bool
    slackIssueNewComment: bool
    slackIssueSlaBreached: bool
    slackIssueSlaHighRisk: bool
    slackIssueStatusChangedAll: bool
    slackIssueStatusChangedDone: bool
    slackProjectUpdateCreated: bool
    slackProjectUpdateCreatedToTeam: bool
    slackProjectUpdateCreatedToWorkspace: bool
    team: dict
    updatedAt: Any


class IssueRequired(TypedDict):
    branchName: str
    createdAt: Any
    customerTicketCount: int
    id: str
    identifier: str
    inheritsSharedAccess: bool
    labelIds: str
    number: float
    previousIdentifiers: str
    priority: float
    priorityLabel: str
    prioritySortOrder: float
    reactionData: Any
    sortOrder: float
    title: str
    updatedAt: Any
    url: str


class Issue(IssueRequired, total=False):
    activitySummary: Any
    addedToCycleAt: Any
    addedToProjectAt: Any
    addedToTeamAt: Any
    archivedAt: Any
    asksExternalUserRequester: dict
    asksRequester: dict
    assignee: dict
    autoArchivedAt: Any
    autoClosedAt: Any
    botActor: dict
    canceledAt: Any
    completedAt: Any
    creator: dict
    cycle: dict
    delegate: dict
    description: str
    descriptionState: str
    documentContent: dict
    dueDate: Any
    estimate: float
    externalUserCreator: dict
    favorite: dict
    integrationSourceType: str
    lastAppliedTemplate: dict
    parent: dict
    project: dict
    projectMilestone: dict
    recurringIssueTemplate: dict
    slaBreachesAt: Any
    slaHighRiskAt: Any
    slaMediumRiskAt: Any
    slaStartedAt: Any
    slaType: str
    snoozedBy: dict
    snoozedUntilAt: Any
    sourceComment: dict
    startedAt: Any
    startedTriageAt: Any
    state: dict
    subIssueSortOrder: float
    suggestionsGeneratedAt: Any
    summary: dict
    team: dict
    trashed: bool
    triagedAt: Any
    trusted: bool


class IssueLoadMatch(TypedDict, total=False):
    branch_name: str
    id: str


class IssueListMatch(TypedDict, total=False):
    after: str
    before: str
    file_key: str
    first: int
    include_archived: bool
    last: int
    order_by: Any
    query: str


class IssueCreateDataRequired(TypedDict):
    branchName: str
    createdAt: Any
    customerTicketCount: int
    id: str
    identifier: str
    inheritsSharedAccess: bool
    labelIds: str
    number: float
    previousIdentifiers: str
    priority: float
    priorityLabel: str
    prioritySortOrder: float
    reactionData: Any
    sortOrder: float
    title: str
    updatedAt: Any
    url: str


class IssueCreateData(IssueCreateDataRequired, total=False):
    activitySummary: Any
    addedToCycleAt: Any
    addedToProjectAt: Any
    addedToTeamAt: Any
    archivedAt: Any
    asksExternalUserRequester: dict
    asksRequester: dict
    assignee: dict
    autoArchivedAt: Any
    autoClosedAt: Any
    botActor: dict
    canceledAt: Any
    completedAt: Any
    creator: dict
    cycle: dict
    delegate: dict
    description: str
    descriptionState: str
    documentContent: dict
    dueDate: Any
    estimate: float
    externalUserCreator: dict
    favorite: dict
    integrationSourceType: str
    lastAppliedTemplate: dict
    parent: dict
    project: dict
    projectMilestone: dict
    recurringIssueTemplate: dict
    slaBreachesAt: Any
    slaHighRiskAt: Any
    slaMediumRiskAt: Any
    slaStartedAt: Any
    slaType: str
    snoozedBy: dict
    snoozedUntilAt: Any
    sourceComment: dict
    startedAt: Any
    startedTriageAt: Any
    state: dict
    subIssueSortOrder: float
    suggestionsGeneratedAt: Any
    summary: dict
    team: dict
    trashed: bool
    triagedAt: Any
    trusted: bool


class IssueUpdateDataRequired(TypedDict):
    id: str


class IssueUpdateData(IssueUpdateDataRequired, total=False):
    activitySummary: Any
    addedToCycleAt: Any
    addedToProjectAt: Any
    addedToTeamAt: Any
    archivedAt: Any
    asksExternalUserRequester: dict
    asksRequester: dict
    assignee: dict
    autoArchivedAt: Any
    autoClosedAt: Any
    botActor: dict
    branchName: str
    canceledAt: Any
    completedAt: Any
    createdAt: Any
    creator: dict
    customerTicketCount: int
    cycle: dict
    delegate: dict
    description: str
    descriptionState: str
    documentContent: dict
    dueDate: Any
    estimate: float
    externalUserCreator: dict
    favorite: dict
    identifier: str
    inheritsSharedAccess: bool
    integrationSourceType: str
    labelIds: str
    lastAppliedTemplate: dict
    number: float
    parent: dict
    previousIdentifiers: str
    priority: float
    priorityLabel: str
    prioritySortOrder: float
    project: dict
    projectMilestone: dict
    reactionData: Any
    recurringIssueTemplate: dict
    slaBreachesAt: Any
    slaHighRiskAt: Any
    slaMediumRiskAt: Any
    slaStartedAt: Any
    slaType: str
    snoozedBy: dict
    snoozedUntilAt: Any
    sortOrder: float
    sourceComment: dict
    startedAt: Any
    startedTriageAt: Any
    state: dict
    subIssueSortOrder: float
    suggestionsGeneratedAt: Any
    summary: dict
    team: dict
    title: str
    trashed: bool
    triagedAt: Any
    trusted: bool
    updatedAt: Any
    url: str


class IssueRemoveMatchRequired(TypedDict):
    id: str


class IssueRemoveMatch(IssueRemoveMatchRequired, total=False):
    permanently_delete: bool


class IssueImportRequired(TypedDict):
    createdAt: Any
    displayName: str
    id: str
    service: str
    status: str
    updatedAt: Any


class IssueImport(IssueImportRequired, total=False):
    archivedAt: Any
    creatorId: str
    csvFileUrl: str
    error: str
    errorMetadata: Any
    mapping: Any
    progress: float
    serviceMetadata: Any
    teamName: str


class IssueImportCreateDataRequired(TypedDict):
    createdAt: Any
    displayName: str
    service: str
    status: str
    updatedAt: Any


class IssueImportCreateData(IssueImportCreateDataRequired, total=False):
    id: str
    include_closed_issue: bool
    instant_process: bool
    jira_email: str
    jira_hostname: str
    jira_project: str
    jira_token: str
    jql: str
    team_id: str
    team_name: str
    asana_team_name: str
    asana_token: str
    clubhouse_group_name: str
    clubhouse_token: str
    csv_url: str
    github_label: str
    github_repo_id: int
    archivedAt: Any
    creatorId: str
    csvFileUrl: str
    error: str
    errorMetadata: Any
    mapping: Any
    progress: float
    serviceMetadata: Any
    teamName: str


class IssueImportUpdateDataRequired(TypedDict):
    id: str


class IssueImportUpdateData(IssueImportUpdateDataRequired, total=False):
    archivedAt: Any
    createdAt: Any
    creatorId: str
    csvFileUrl: str
    displayName: str
    error: str
    errorMetadata: Any
    mapping: Any
    progress: float
    service: str
    serviceMetadata: Any
    status: str
    teamName: str
    updatedAt: Any


class IssueImportRemoveMatch(TypedDict):
    issue_import_id: str


class IssueLabelRequired(TypedDict):
    color: str
    createdAt: Any
    id: str
    isGroup: bool
    name: str
    updatedAt: Any


class IssueLabel(IssueLabelRequired, total=False):
    archivedAt: Any
    creator: dict
    description: str
    groupType: str
    inheritedFrom: dict
    lastAppliedAt: Any
    parent: dict
    retiredAt: Any
    retiredBy: dict
    team: dict


class IssueLabelLoadMatch(TypedDict):
    id: str


class IssueLabelListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class IssueLabelCreateDataRequired(TypedDict):
    color: str
    createdAt: Any
    id: str
    isGroup: bool
    name: str
    updatedAt: Any


class IssueLabelCreateData(IssueLabelCreateDataRequired, total=False):
    replace_team_label: bool
    archivedAt: Any
    creator: dict
    description: str
    groupType: str
    inheritedFrom: dict
    lastAppliedAt: Any
    parent: dict
    retiredAt: Any
    retiredBy: dict
    team: dict


class IssueLabelUpdateDataRequired(TypedDict):
    id: str


class IssueLabelUpdateData(IssueLabelUpdateDataRequired, total=False):
    replace_team_label: bool
    archivedAt: Any
    color: str
    createdAt: Any
    creator: dict
    description: str
    groupType: str
    inheritedFrom: dict
    isGroup: bool
    lastAppliedAt: Any
    name: str
    parent: dict
    retiredAt: Any
    retiredBy: dict
    team: dict
    updatedAt: Any


class IssueLabelRemoveMatch(TypedDict):
    id: str


class IssuePriorityValue(TypedDict):
    label: str
    priority: int


class IssuePriorityValueListMatch(TypedDict, total=False):
    label: str
    priority: int


class IssueRelationRequired(TypedDict):
    createdAt: Any
    id: str
    type: str
    updatedAt: Any


class IssueRelation(IssueRelationRequired, total=False):
    archivedAt: Any
    issue: dict
    relatedIssue: dict


class IssueRelationLoadMatch(TypedDict):
    id: str


class IssueRelationListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class IssueRelationCreateDataRequired(TypedDict):
    createdAt: Any
    id: str
    type: str
    updatedAt: Any


class IssueRelationCreateData(IssueRelationCreateDataRequired, total=False):
    override_created_at: Any
    archivedAt: Any
    issue: dict
    relatedIssue: dict


class IssueRelationUpdateDataRequired(TypedDict):
    id: str


class IssueRelationUpdateData(IssueRelationUpdateDataRequired, total=False):
    archivedAt: Any
    createdAt: Any
    issue: dict
    relatedIssue: dict
    type: str
    updatedAt: Any


class IssueRelationRemoveMatch(TypedDict):
    id: str


class IssueSearchResultRequired(TypedDict):
    branchName: str
    createdAt: Any
    customerTicketCount: int
    id: str
    identifier: str
    inheritsSharedAccess: bool
    labelIds: str
    metadata: Any
    number: float
    previousIdentifiers: str
    priority: float
    priorityLabel: str
    prioritySortOrder: float
    reactionData: Any
    sortOrder: float
    title: str
    updatedAt: Any
    url: str


class IssueSearchResult(IssueSearchResultRequired, total=False):
    activitySummary: Any
    addedToCycleAt: Any
    addedToProjectAt: Any
    addedToTeamAt: Any
    archivedAt: Any
    asksExternalUserRequester: dict
    asksRequester: dict
    assignee: dict
    autoArchivedAt: Any
    autoClosedAt: Any
    botActor: dict
    canceledAt: Any
    completedAt: Any
    creator: dict
    cycle: dict
    delegate: dict
    description: str
    descriptionState: str
    documentContent: dict
    dueDate: Any
    estimate: float
    externalUserCreator: dict
    favorite: dict
    integrationSourceType: str
    lastAppliedTemplate: dict
    parent: dict
    project: dict
    projectMilestone: dict
    recurringIssueTemplate: dict
    slaBreachesAt: Any
    slaHighRiskAt: Any
    slaMediumRiskAt: Any
    slaStartedAt: Any
    slaType: str
    snoozedBy: dict
    snoozedUntilAt: Any
    sourceComment: dict
    startedAt: Any
    startedTriageAt: Any
    state: dict
    subIssueSortOrder: float
    suggestionsGeneratedAt: Any
    summary: dict
    team: dict
    trashed: bool
    triagedAt: Any
    trusted: bool


class IssueSearchResultListMatchRequired(TypedDict):
    term: str


class IssueSearchResultListMatch(IssueSearchResultListMatchRequired, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    include_comment: bool
    last: int
    order_by: Any
    team_id: str


class IssueToReleaseRequired(TypedDict):
    createdAt: Any
    id: str
    updatedAt: Any


class IssueToRelease(IssueToReleaseRequired, total=False):
    archivedAt: Any
    issue: dict
    release: dict


class IssueToReleaseLoadMatch(TypedDict):
    id: str


class IssueToReleaseListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class IssueToReleaseCreateDataRequired(TypedDict):
    createdAt: Any
    id: str
    updatedAt: Any


class IssueToReleaseCreateData(IssueToReleaseCreateDataRequired, total=False):
    archivedAt: Any
    issue: dict
    release: dict


class IssueToReleaseRemoveMatch(TypedDict):
    id: str


class LogoutResponse(TypedDict):
    success: bool


class LogoutResponseCreateDataRequired(TypedDict):
    success: bool


class LogoutResponseCreateData(LogoutResponseCreateDataRequired, total=False):
    reason: str


class LogoutResponseUpdateDataRequired(TypedDict):
    session_id: str


class LogoutResponseUpdateData(LogoutResponseUpdateDataRequired, total=False):
    success: bool


class NotificationRequired(TypedDict):
    actorAvatarColor: str
    actorInactive: bool
    category: str
    createdAt: Any
    groupingKey: str
    groupingPriority: float
    id: str
    inboxUrl: str
    isLinearActor: bool
    subtitle: str
    title: str
    type: str
    updatedAt: Any
    url: str


class Notification(NotificationRequired, total=False):
    actor: dict
    actorAvatarUrl: str
    actorInitials: str
    archivedAt: Any
    botActor: dict
    emailedAt: Any
    externalUserActor: dict
    initiativeUpdateHealth: str
    issueStatusType: str
    projectUpdateHealth: str
    readAt: Any
    snoozedUntilAt: Any
    unsnoozedAt: Any
    user: dict


class NotificationLoadMatch(TypedDict):
    id: str


class NotificationListMatch(TypedDict, total=False):
    after: str
    first: int
    unread_only: bool
    before: str
    include_archived: bool
    last: int
    order_by: Any


class NotificationSubscriptionRequired(TypedDict):
    active: bool
    createdAt: Any
    id: str
    updatedAt: Any


class NotificationSubscription(NotificationSubscriptionRequired, total=False):
    archivedAt: Any
    contextViewType: str
    customView: dict
    customer: dict
    cycle: dict
    initiative: dict
    label: dict
    project: dict
    subscriber: dict
    team: dict
    user: dict
    userContextViewType: str


class NotificationSubscriptionLoadMatch(TypedDict):
    id: str


class NotificationSubscriptionListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class OAuthApplicationRequired(TypedDict):
    clientId: str
    createdAt: Any
    developer: str
    developerUrl: str
    distribution: str
    grantTypes: str
    id: str
    name: str
    redirectUris: str
    updatedAt: Any
    webhookEnabled: bool
    webhookResourceTypes: str


class OAuthApplication(OAuthApplicationRequired, total=False):
    description: str
    imageUrl: str
    webhookUrl: str


class OAuthApplicationLoadMatch(TypedDict):
    id: str


class OAuthApplicationListMatch(TypedDict, total=False):
    clientId: str
    createdAt: Any
    description: str
    developer: str
    developerUrl: str
    distribution: str
    grantTypes: str
    id: str
    imageUrl: str
    name: str
    redirectUris: str
    updatedAt: Any
    webhookEnabled: bool
    webhookResourceTypes: str
    webhookUrl: str


class OAuthApplicationCreateDataRequired(TypedDict):
    clientId: str
    createdAt: Any
    developer: str
    developerUrl: str
    distribution: str
    grantTypes: str
    id: str
    name: str
    redirectUris: str
    updatedAt: Any
    webhookEnabled: bool
    webhookResourceTypes: str


class OAuthApplicationCreateData(OAuthApplicationCreateDataRequired, total=False):
    description: str
    imageUrl: str
    webhookUrl: str


class OAuthApplicationUpdateDataRequired(TypedDict):
    id: str


class OAuthApplicationUpdateData(OAuthApplicationUpdateDataRequired, total=False):
    clientId: str
    createdAt: Any
    description: str
    developer: str
    developerUrl: str
    distribution: str
    grantTypes: str
    imageUrl: str
    name: str
    redirectUris: str
    updatedAt: Any
    webhookEnabled: bool
    webhookResourceTypes: str
    webhookUrl: str


class OrganizationRequired(TypedDict):
    agentAutomationEnabled: bool
    aiAddonEnabled: bool
    aiDiscussionSummariesEnabled: bool
    aiTelemetryEnabled: bool
    aiThreadSummariesEnabled: bool
    authSettings: Any
    codeIntelligenceEnabled: bool
    codingAgentEnabled: bool
    codingAgentSettings: Any
    createdAt: Any
    createdIssueCount: int
    customerCount: int
    customersConfiguration: Any
    customersEnabled: bool
    feedEnabled: bool
    fiscalYearStartMonth: float
    generatedUpdatesEnabled: bool
    gitLinkbackDescriptionsEnabled: bool
    gitLinkbackMessagesEnabled: bool
    gitPublicLinkbackMessagesEnabled: bool
    hipaaComplianceEnabled: bool
    id: str
    initiativeUpdateRemindersDay: str
    initiativeUpdateRemindersHour: float
    linearAgentEnabled: bool
    linearAgentSettings: Any
    name: str
    periodUploadVolume: float
    previousUrlKeys: str
    projectUpdateRemindersDay: str
    projectUpdateRemindersHour: float
    pullRequestIssueMode: str
    pullRequestTourEnabled: bool
    releaseChannel: str
    releasesEnabled: bool
    roadmapEnabled: bool
    samlEnabled: bool
    scimEnabled: bool
    securitySettings: Any
    slackAutoCreateProjectChannel: bool
    slackProjectChannelPrefix: str
    slackProjectChannelsEnabled: bool
    updatedAt: Any
    urlKey: str
    userCount: int
    workingDays: float


class Organization(OrganizationRequired, total=False):
    aiProviderConfiguration: Any
    allowedFileUploadContentTypes: str
    archivedAt: Any
    codeIntelligenceRepository: str
    defaultFeedSummarySchedule: str
    defaultHomeView: str
    defaultHomeViewTargetId: str
    deletionRequestedAt: Any
    gitBranchFormat: str
    initiativeUpdateReminderFrequencyInWeeks: float
    logoUrl: str
    projectUpdateReminderFrequencyInWeeks: float
    restrictAgentInvocationToMembers: bool
    samlSettings: Any
    scimSettings: Any
    slackProjectChannelIntegration: dict
    subscription: dict
    themeSettings: Any
    trialEndsAt: Any
    trialStartsAt: Any


class OrganizationLoadMatchRequired(TypedDict):
    id: str


class OrganizationLoadMatch(OrganizationLoadMatchRequired, total=False):
    agentAutomationEnabled: bool
    aiAddonEnabled: bool
    aiDiscussionSummariesEnabled: bool
    aiProviderConfiguration: Any
    aiTelemetryEnabled: bool
    aiThreadSummariesEnabled: bool
    allowedFileUploadContentTypes: str
    archivedAt: Any
    authSettings: Any
    codeIntelligenceEnabled: bool
    codeIntelligenceRepository: str
    codingAgentEnabled: bool
    codingAgentSettings: Any
    createdAt: Any
    createdIssueCount: int
    customerCount: int
    customersConfiguration: Any
    customersEnabled: bool
    defaultFeedSummarySchedule: str
    defaultHomeView: str
    defaultHomeViewTargetId: str
    deletionRequestedAt: Any
    feedEnabled: bool
    fiscalYearStartMonth: float
    generatedUpdatesEnabled: bool
    gitBranchFormat: str
    gitLinkbackDescriptionsEnabled: bool
    gitLinkbackMessagesEnabled: bool
    gitPublicLinkbackMessagesEnabled: bool
    hipaaComplianceEnabled: bool
    initiativeUpdateReminderFrequencyInWeeks: float
    initiativeUpdateRemindersDay: str
    initiativeUpdateRemindersHour: float
    linearAgentEnabled: bool
    linearAgentSettings: Any
    logoUrl: str
    name: str
    periodUploadVolume: float
    previousUrlKeys: str
    projectUpdateReminderFrequencyInWeeks: float
    projectUpdateRemindersDay: str
    projectUpdateRemindersHour: float
    pullRequestIssueMode: str
    pullRequestTourEnabled: bool
    releaseChannel: str
    releasesEnabled: bool
    restrictAgentInvocationToMembers: bool
    roadmapEnabled: bool
    samlEnabled: bool
    samlSettings: Any
    scimEnabled: bool
    scimSettings: Any
    securitySettings: Any
    slackAutoCreateProjectChannel: bool
    slackProjectChannelIntegration: dict
    slackProjectChannelPrefix: str
    slackProjectChannelsEnabled: bool
    subscription: dict
    themeSettings: Any
    trialEndsAt: Any
    trialStartsAt: Any
    updatedAt: Any
    urlKey: str
    userCount: int
    workingDays: float


class OrganizationUpdateData(TypedDict, total=False):
    agentAutomationEnabled: bool
    aiAddonEnabled: bool
    aiDiscussionSummariesEnabled: bool
    aiProviderConfiguration: Any
    aiTelemetryEnabled: bool
    aiThreadSummariesEnabled: bool
    allowedFileUploadContentTypes: str
    archivedAt: Any
    authSettings: Any
    codeIntelligenceEnabled: bool
    codeIntelligenceRepository: str
    codingAgentEnabled: bool
    codingAgentSettings: Any
    createdAt: Any
    createdIssueCount: int
    customerCount: int
    customersConfiguration: Any
    customersEnabled: bool
    defaultFeedSummarySchedule: str
    defaultHomeView: str
    defaultHomeViewTargetId: str
    deletionRequestedAt: Any
    feedEnabled: bool
    fiscalYearStartMonth: float
    generatedUpdatesEnabled: bool
    gitBranchFormat: str
    gitLinkbackDescriptionsEnabled: bool
    gitLinkbackMessagesEnabled: bool
    gitPublicLinkbackMessagesEnabled: bool
    hipaaComplianceEnabled: bool
    id: str
    initiativeUpdateReminderFrequencyInWeeks: float
    initiativeUpdateRemindersDay: str
    initiativeUpdateRemindersHour: float
    linearAgentEnabled: bool
    linearAgentSettings: Any
    logoUrl: str
    name: str
    periodUploadVolume: float
    previousUrlKeys: str
    projectUpdateReminderFrequencyInWeeks: float
    projectUpdateRemindersDay: str
    projectUpdateRemindersHour: float
    pullRequestIssueMode: str
    pullRequestTourEnabled: bool
    releaseChannel: str
    releasesEnabled: bool
    restrictAgentInvocationToMembers: bool
    roadmapEnabled: bool
    samlEnabled: bool
    samlSettings: Any
    scimEnabled: bool
    scimSettings: Any
    securitySettings: Any
    slackAutoCreateProjectChannel: bool
    slackProjectChannelIntegration: dict
    slackProjectChannelPrefix: str
    slackProjectChannelsEnabled: bool
    subscription: dict
    themeSettings: Any
    trialEndsAt: Any
    trialStartsAt: Any
    updatedAt: Any
    urlKey: str
    userCount: int
    workingDays: float


class OrganizationRemoveMatchRequired(TypedDict):
    id: str


class OrganizationRemoveMatch(OrganizationRemoveMatchRequired, total=False):
    agentAutomationEnabled: bool
    aiAddonEnabled: bool
    aiDiscussionSummariesEnabled: bool
    aiProviderConfiguration: Any
    aiTelemetryEnabled: bool
    aiThreadSummariesEnabled: bool
    allowedFileUploadContentTypes: str
    archivedAt: Any
    authSettings: Any
    codeIntelligenceEnabled: bool
    codeIntelligenceRepository: str
    codingAgentEnabled: bool
    codingAgentSettings: Any
    createdAt: Any
    createdIssueCount: int
    customerCount: int
    customersConfiguration: Any
    customersEnabled: bool
    defaultFeedSummarySchedule: str
    defaultHomeView: str
    defaultHomeViewTargetId: str
    deletionRequestedAt: Any
    feedEnabled: bool
    fiscalYearStartMonth: float
    generatedUpdatesEnabled: bool
    gitBranchFormat: str
    gitLinkbackDescriptionsEnabled: bool
    gitLinkbackMessagesEnabled: bool
    gitPublicLinkbackMessagesEnabled: bool
    hipaaComplianceEnabled: bool
    initiativeUpdateReminderFrequencyInWeeks: float
    initiativeUpdateRemindersDay: str
    initiativeUpdateRemindersHour: float
    linearAgentEnabled: bool
    linearAgentSettings: Any
    logoUrl: str
    name: str
    periodUploadVolume: float
    previousUrlKeys: str
    projectUpdateReminderFrequencyInWeeks: float
    projectUpdateRemindersDay: str
    projectUpdateRemindersHour: float
    pullRequestIssueMode: str
    pullRequestTourEnabled: bool
    releaseChannel: str
    releasesEnabled: bool
    restrictAgentInvocationToMembers: bool
    roadmapEnabled: bool
    samlEnabled: bool
    samlSettings: Any
    scimEnabled: bool
    scimSettings: Any
    securitySettings: Any
    slackAutoCreateProjectChannel: bool
    slackProjectChannelIntegration: dict
    slackProjectChannelPrefix: str
    slackProjectChannelsEnabled: bool
    subscription: dict
    themeSettings: Any
    trialEndsAt: Any
    trialStartsAt: Any
    updatedAt: Any
    urlKey: str
    userCount: int
    workingDays: float


class OrganizationDomainRequired(TypedDict):
    authType: str
    createdAt: Any
    id: str
    name: str
    updatedAt: Any
    verified: bool


class OrganizationDomain(OrganizationDomainRequired, total=False):
    archivedAt: Any
    claimed: bool
    creator: dict
    disableOrganizationCreation: bool
    identityProvider: dict
    verificationEmail: str


class OrganizationDomainCreateDataRequired(TypedDict):
    authType: str
    createdAt: Any
    id: str
    name: str
    updatedAt: Any
    verified: bool


class OrganizationDomainCreateData(OrganizationDomainCreateDataRequired, total=False):
    trigger_email_verification: bool
    archivedAt: Any
    claimed: bool
    creator: dict
    disableOrganizationCreation: bool
    identityProvider: dict
    verificationEmail: str


class OrganizationDomainUpdateDataRequired(TypedDict):
    id: str


class OrganizationDomainUpdateData(OrganizationDomainUpdateDataRequired, total=False):
    archivedAt: Any
    authType: str
    claimed: bool
    createdAt: Any
    creator: dict
    disableOrganizationCreation: bool
    identityProvider: dict
    name: str
    updatedAt: Any
    verificationEmail: str
    verified: bool


class OrganizationDomainRemoveMatch(TypedDict):
    id: str


class OrganizationInviteRequired(TypedDict):
    createdAt: Any
    email: str
    external: bool
    id: str
    role: str
    updatedAt: Any


class OrganizationInvite(OrganizationInviteRequired, total=False):
    acceptedAt: Any
    archivedAt: Any
    expiresAt: Any
    invitee: dict
    inviter: dict
    metadata: Any
    organization: dict


class OrganizationInviteLoadMatch(TypedDict):
    id: str


class OrganizationInviteListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class OrganizationInviteCreateDataRequired(TypedDict):
    createdAt: Any
    email: str
    external: bool
    id: str
    role: str
    updatedAt: Any


class OrganizationInviteCreateData(OrganizationInviteCreateDataRequired, total=False):
    acceptedAt: Any
    archivedAt: Any
    expiresAt: Any
    invitee: dict
    inviter: dict
    metadata: Any
    organization: dict


class OrganizationInviteUpdateDataRequired(TypedDict):
    id: str


class OrganizationInviteUpdateData(OrganizationInviteUpdateDataRequired, total=False):
    acceptedAt: Any
    archivedAt: Any
    createdAt: Any
    email: str
    expiresAt: Any
    external: bool
    invitee: dict
    inviter: dict
    metadata: Any
    organization: dict
    role: str
    updatedAt: Any


class OrganizationInviteRemoveMatch(TypedDict):
    id: str


class OrganizationMeta(TypedDict):
    allowedAuthServices: str
    region: str


class OrganizationMetaLoadMatch(TypedDict):
    url_key: str


class PasskeyLoginStartResponse(TypedDict):
    options: Any
    success: bool


class PasskeyLoginStartResponseUpdateDataRequired(TypedDict):
    auth_id: str


class PasskeyLoginStartResponseUpdateData(PasskeyLoginStartResponseUpdateDataRequired, total=False):
    options: Any
    success: bool


class ProjectRequired(TypedDict):
    color: str
    completedIssueCountHistory: float
    completedScopeHistory: float
    createdAt: Any
    currentProgress: Any
    description: str
    frequencyResolution: str
    id: str
    inProgressScopeHistory: float
    issueCountHistory: float
    labelIds: str
    name: str
    previousIdentifiers: str
    priority: int
    priorityLabel: str
    prioritySortOrder: float
    progress: float
    progressHistory: Any
    resourceCount: int
    scope: float
    scopeHistory: float
    slugId: str
    sortOrder: float
    updatedAt: Any
    url: str


class Project(ProjectRequired, total=False):
    archivedAt: Any
    autoArchivedAt: Any
    canceledAt: Any
    completedAt: Any
    content: str
    contentState: str
    convertedFromIssue: dict
    creator: dict
    documentContent: dict
    favorite: dict
    health: str
    healthUpdatedAt: Any
    icon: str
    identifier: str
    integrationsSettings: dict
    lastAppliedTemplate: dict
    lastUpdate: dict
    lead: dict
    leadTeam: dict
    microsoftTeamsChannelId: str
    projectUpdateRemindersPausedUntilAt: Any
    slackChannelId: str
    startDate: Any
    startDateResolution: str
    startedAt: Any
    status: dict
    targetDate: Any
    targetDateResolution: str
    trashed: bool
    updateReminderFrequency: float
    updateReminderFrequencyInWeeks: float
    updateRemindersDay: str
    updateRemindersHour: float


class ProjectLoadMatch(TypedDict):
    id: str


class ProjectListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class ProjectCreateDataRequired(TypedDict):
    color: str
    completedIssueCountHistory: float
    completedScopeHistory: float
    createdAt: Any
    currentProgress: Any
    description: str
    frequencyResolution: str
    id: str
    inProgressScopeHistory: float
    issueCountHistory: float
    labelIds: str
    name: str
    previousIdentifiers: str
    priority: int
    priorityLabel: str
    prioritySortOrder: float
    progress: float
    progressHistory: Any
    resourceCount: int
    scope: float
    scopeHistory: float
    slugId: str
    sortOrder: float
    updatedAt: Any
    url: str


class ProjectCreateData(ProjectCreateDataRequired, total=False):
    ai_conversation_id: str
    project_draft_id: str
    slack_channel_name: str
    archivedAt: Any
    autoArchivedAt: Any
    canceledAt: Any
    completedAt: Any
    content: str
    contentState: str
    convertedFromIssue: dict
    creator: dict
    documentContent: dict
    favorite: dict
    health: str
    healthUpdatedAt: Any
    icon: str
    identifier: str
    integrationsSettings: dict
    lastAppliedTemplate: dict
    lastUpdate: dict
    lead: dict
    leadTeam: dict
    microsoftTeamsChannelId: str
    projectUpdateRemindersPausedUntilAt: Any
    slackChannelId: str
    startDate: Any
    startDateResolution: str
    startedAt: Any
    status: dict
    targetDate: Any
    targetDateResolution: str
    trashed: bool
    updateReminderFrequency: float
    updateReminderFrequencyInWeeks: float
    updateRemindersDay: str
    updateRemindersHour: float


class ProjectUpdateDataRequired(TypedDict):
    id: str


class ProjectUpdateData(ProjectUpdateDataRequired, total=False):
    archivedAt: Any
    autoArchivedAt: Any
    canceledAt: Any
    color: str
    completedAt: Any
    completedIssueCountHistory: float
    completedScopeHistory: float
    content: str
    contentState: str
    convertedFromIssue: dict
    createdAt: Any
    creator: dict
    currentProgress: Any
    description: str
    documentContent: dict
    favorite: dict
    frequencyResolution: str
    health: str
    healthUpdatedAt: Any
    icon: str
    identifier: str
    inProgressScopeHistory: float
    integrationsSettings: dict
    issueCountHistory: float
    labelIds: str
    lastAppliedTemplate: dict
    lastUpdate: dict
    lead: dict
    leadTeam: dict
    microsoftTeamsChannelId: str
    name: str
    previousIdentifiers: str
    priority: int
    priorityLabel: str
    prioritySortOrder: float
    progress: float
    progressHistory: Any
    projectUpdateRemindersPausedUntilAt: Any
    resourceCount: int
    scope: float
    scopeHistory: float
    slackChannelId: str
    slugId: str
    sortOrder: float
    startDate: Any
    startDateResolution: str
    startedAt: Any
    status: dict
    targetDate: Any
    targetDateResolution: str
    trashed: bool
    updateReminderFrequency: float
    updateReminderFrequencyInWeeks: float
    updateRemindersDay: str
    updateRemindersHour: float
    updatedAt: Any
    url: str


class ProjectRemoveMatch(TypedDict):
    id: str


class ProjectLabelRequired(TypedDict):
    color: str
    createdAt: Any
    id: str
    isGroup: bool
    name: str
    updatedAt: Any


class ProjectLabel(ProjectLabelRequired, total=False):
    archivedAt: Any
    creator: dict
    description: str
    inheritedFrom: dict
    lastAppliedAt: Any
    organization: dict
    parent: dict
    retiredAt: Any
    retiredBy: dict
    team: dict


class ProjectLabelLoadMatch(TypedDict):
    id: str


class ProjectLabelListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class ProjectLabelCreateDataRequired(TypedDict):
    color: str
    createdAt: Any
    id: str
    isGroup: bool
    name: str
    updatedAt: Any


class ProjectLabelCreateData(ProjectLabelCreateDataRequired, total=False):
    replace_team_label: bool
    archivedAt: Any
    creator: dict
    description: str
    inheritedFrom: dict
    lastAppliedAt: Any
    organization: dict
    parent: dict
    retiredAt: Any
    retiredBy: dict
    team: dict


class ProjectLabelUpdateDataRequired(TypedDict):
    id: str


class ProjectLabelUpdateData(ProjectLabelUpdateDataRequired, total=False):
    replace_team_label: bool
    archivedAt: Any
    color: str
    createdAt: Any
    creator: dict
    description: str
    inheritedFrom: dict
    isGroup: bool
    lastAppliedAt: Any
    name: str
    organization: dict
    parent: dict
    retiredAt: Any
    retiredBy: dict
    team: dict
    updatedAt: Any


class ProjectLabelRemoveMatch(TypedDict):
    id: str


class ProjectMilestoneRequired(TypedDict):
    createdAt: Any
    currentProgress: Any
    id: str
    name: str
    progress: float
    progressHistory: Any
    sortOrder: float
    status: str
    updatedAt: Any


class ProjectMilestone(ProjectMilestoneRequired, total=False):
    archivedAt: Any
    description: str
    descriptionState: str
    documentContent: dict
    project: dict
    targetDate: Any


class ProjectMilestoneLoadMatch(TypedDict):
    id: str


class ProjectMilestoneListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class ProjectMilestoneCreateDataRequired(TypedDict):
    createdAt: Any
    currentProgress: Any
    id: str
    name: str
    progress: float
    progressHistory: Any
    sortOrder: float
    status: str
    updatedAt: Any


class ProjectMilestoneCreateData(ProjectMilestoneCreateDataRequired, total=False):
    archivedAt: Any
    description: str
    descriptionState: str
    documentContent: dict
    project: dict
    targetDate: Any


class ProjectMilestoneUpdateDataRequired(TypedDict):
    id: str


class ProjectMilestoneUpdateData(ProjectMilestoneUpdateDataRequired, total=False):
    archivedAt: Any
    createdAt: Any
    currentProgress: Any
    description: str
    descriptionState: str
    documentContent: dict
    name: str
    progress: float
    progressHistory: Any
    project: dict
    sortOrder: float
    status: str
    targetDate: Any
    updatedAt: Any


class ProjectMilestoneRemoveMatch(TypedDict):
    id: str


class ProjectMilestoneMoveProjectTeamRequired(TypedDict):
    projectId: str
    teamIds: str


class ProjectMilestoneMoveProjectTeam(ProjectMilestoneMoveProjectTeamRequired, total=False):
    id: str


class ProjectMilestoneMoveProjectTeamUpdateDataRequired(TypedDict):
    id: str


class ProjectMilestoneMoveProjectTeamUpdateData(ProjectMilestoneMoveProjectTeamUpdateDataRequired, total=False):
    projectId: str
    teamIds: str


class ProjectRelationRequired(TypedDict):
    anchorType: str
    createdAt: Any
    id: str
    relatedAnchorType: str
    type: str
    updatedAt: Any


class ProjectRelation(ProjectRelationRequired, total=False):
    archivedAt: Any
    project: dict
    projectMilestone: dict
    relatedProject: dict
    relatedProjectMilestone: dict
    user: dict


class ProjectRelationLoadMatch(TypedDict):
    id: str


class ProjectRelationListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class ProjectRelationCreateDataRequired(TypedDict):
    anchorType: str
    createdAt: Any
    id: str
    relatedAnchorType: str
    type: str
    updatedAt: Any


class ProjectRelationCreateData(ProjectRelationCreateDataRequired, total=False):
    archivedAt: Any
    project: dict
    projectMilestone: dict
    relatedProject: dict
    relatedProjectMilestone: dict
    user: dict


class ProjectRelationUpdateDataRequired(TypedDict):
    id: str


class ProjectRelationUpdateData(ProjectRelationUpdateDataRequired, total=False):
    anchorType: str
    archivedAt: Any
    createdAt: Any
    project: dict
    projectMilestone: dict
    relatedAnchorType: str
    relatedProject: dict
    relatedProjectMilestone: dict
    type: str
    updatedAt: Any
    user: dict


class ProjectRelationRemoveMatch(TypedDict):
    id: str


class ProjectSearchResultRequired(TypedDict):
    color: str
    completedIssueCountHistory: float
    completedScopeHistory: float
    createdAt: Any
    currentProgress: Any
    description: str
    frequencyResolution: str
    id: str
    inProgressScopeHistory: float
    issueCountHistory: float
    labelIds: str
    metadata: Any
    name: str
    previousIdentifiers: str
    priority: int
    priorityLabel: str
    prioritySortOrder: float
    progress: float
    progressHistory: Any
    resourceCount: int
    scope: float
    scopeHistory: float
    slugId: str
    sortOrder: float
    updatedAt: Any
    url: str


class ProjectSearchResult(ProjectSearchResultRequired, total=False):
    archivedAt: Any
    autoArchivedAt: Any
    canceledAt: Any
    completedAt: Any
    content: str
    contentState: str
    convertedFromIssue: dict
    creator: dict
    documentContent: dict
    favorite: dict
    health: str
    healthUpdatedAt: Any
    icon: str
    identifier: str
    integrationsSettings: dict
    lastAppliedTemplate: dict
    lastUpdate: dict
    lead: dict
    leadTeam: dict
    microsoftTeamsChannelId: str
    projectUpdateRemindersPausedUntilAt: Any
    slackChannelId: str
    startDate: Any
    startDateResolution: str
    startedAt: Any
    status: dict
    targetDate: Any
    targetDateResolution: str
    trashed: bool
    updateReminderFrequency: float
    updateReminderFrequencyInWeeks: float
    updateRemindersDay: str
    updateRemindersHour: float


class ProjectSearchResultListMatchRequired(TypedDict):
    term: str


class ProjectSearchResultListMatch(ProjectSearchResultListMatchRequired, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    include_comment: bool
    last: int
    order_by: Any
    team_id: str


class ProjectStatusRequired(TypedDict):
    color: str
    createdAt: Any
    id: str
    indefinite: bool
    name: str
    position: float
    type: str
    updatedAt: Any


class ProjectStatus(ProjectStatusRequired, total=False):
    archivedAt: Any
    description: str
    inheritedFrom: dict
    team: dict


class ProjectStatusLoadMatch(TypedDict):
    id: str


class ProjectStatusListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class ProjectStatusCreateDataRequired(TypedDict):
    color: str
    createdAt: Any
    id: str
    indefinite: bool
    name: str
    position: float
    type: str
    updatedAt: Any


class ProjectStatusCreateData(ProjectStatusCreateDataRequired, total=False):
    archivedAt: Any
    description: str
    inheritedFrom: dict
    team: dict


class ProjectStatusUpdateDataRequired(TypedDict):
    id: str


class ProjectStatusUpdateData(ProjectStatusUpdateDataRequired, total=False):
    archivedAt: Any
    color: str
    createdAt: Any
    description: str
    indefinite: bool
    inheritedFrom: dict
    name: str
    position: float
    team: dict
    type: str
    updatedAt: Any


class ProjectUpdateRequired(TypedDict):
    body: str
    bodyData: str
    commentCount: int
    createdAt: Any
    health: str
    id: str
    isDiffHidden: bool
    isStale: bool
    reactionData: Any
    slugId: str
    updatedAt: Any
    url: str


class ProjectUpdate(ProjectUpdateRequired, total=False):
    archivedAt: Any
    diff: Any
    diffMarkdown: str
    editedAt: Any
    infoSnapshot: Any
    project: dict
    shortSummary: str
    user: dict


class ProjectUpdateLoadMatchRequired(TypedDict):
    id: str


class ProjectUpdateLoadMatch(ProjectUpdateLoadMatchRequired, total=False):
    project_id: str


class ProjectUpdateListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class ProjectUpdateCreateDataRequired(TypedDict):
    body: str
    bodyData: str
    commentCount: int
    createdAt: Any
    health: str
    id: str
    isDiffHidden: bool
    isStale: bool
    reactionData: Any
    slugId: str
    updatedAt: Any
    url: str


class ProjectUpdateCreateData(ProjectUpdateCreateDataRequired, total=False):
    archivedAt: Any
    diff: Any
    diffMarkdown: str
    editedAt: Any
    infoSnapshot: Any
    project: dict
    shortSummary: str
    user: dict


class ProjectUpdateUpdateDataRequired(TypedDict):
    id: str


class ProjectUpdateUpdateData(ProjectUpdateUpdateDataRequired, total=False):
    archivedAt: Any
    body: str
    bodyData: str
    commentCount: int
    createdAt: Any
    diff: Any
    diffMarkdown: str
    editedAt: Any
    health: str
    infoSnapshot: Any
    isDiffHidden: bool
    isStale: bool
    project: dict
    reactionData: Any
    shortSummary: str
    slugId: str
    updatedAt: Any
    url: str
    user: dict


class ProjectUpdateRemoveMatch(TypedDict):
    id: str


class PushSubscriptionRequired(TypedDict):
    createdAt: Any
    id: str
    updatedAt: Any


class PushSubscription(PushSubscriptionRequired, total=False):
    archivedAt: Any


class PushSubscriptionCreateDataRequired(TypedDict):
    createdAt: Any
    id: str
    updatedAt: Any


class PushSubscriptionCreateData(PushSubscriptionCreateDataRequired, total=False):
    archivedAt: Any


class PushSubscriptionRemoveMatch(TypedDict):
    id: str


class ReactionRequired(TypedDict):
    createdAt: Any
    emoji: str
    id: str
    updatedAt: Any


class Reaction(ReactionRequired, total=False):
    archivedAt: Any
    comment: dict
    externalUser: dict
    initiativeUpdate: dict
    issue: dict
    post: dict
    projectUpdate: dict
    user: dict


class ReactionCreateDataRequired(TypedDict):
    createdAt: Any
    emoji: str
    id: str
    updatedAt: Any


class ReactionCreateData(ReactionCreateDataRequired, total=False):
    archivedAt: Any
    comment: dict
    externalUser: dict
    initiativeUpdate: dict
    issue: dict
    post: dict
    projectUpdate: dict
    user: dict


class ReactionRemoveMatch(TypedDict):
    id: str


class ReleaseRequired(TypedDict):
    createdAt: Any
    currentProgress: Any
    id: str
    issueCount: int
    name: str
    progressHistory: Any
    slugId: str
    updatedAt: Any
    url: str


class Release(ReleaseRequired, total=False):
    archivedAt: Any
    autoArchivedAt: Any
    canceledAt: Any
    commitSha: str
    completedAt: Any
    creator: dict
    description: str
    pipeline: dict
    releaseNote: dict
    stage: dict
    startDate: Any
    startedAt: Any
    targetDate: Any
    trashed: bool
    version: str


class ReleaseLoadMatch(TypedDict):
    id: str


class ReleaseListMatch(TypedDict, total=False):
    first: int
    term: str
    after: str
    before: str
    include_archived: bool
    last: int
    order_by: Any


class ReleaseCreateDataRequired(TypedDict):
    createdAt: Any
    currentProgress: Any
    id: str
    issueCount: int
    name: str
    progressHistory: Any
    slugId: str
    updatedAt: Any
    url: str


class ReleaseCreateData(ReleaseCreateDataRequired, total=False):
    archivedAt: Any
    autoArchivedAt: Any
    canceledAt: Any
    commitSha: str
    completedAt: Any
    creator: dict
    description: str
    pipeline: dict
    releaseNote: dict
    stage: dict
    startDate: Any
    startedAt: Any
    targetDate: Any
    trashed: bool
    version: str


class ReleaseUpdateDataRequired(TypedDict):
    id: str


class ReleaseUpdateData(ReleaseUpdateDataRequired, total=False):
    archivedAt: Any
    autoArchivedAt: Any
    canceledAt: Any
    commitSha: str
    completedAt: Any
    createdAt: Any
    creator: dict
    currentProgress: Any
    description: str
    issueCount: int
    name: str
    pipeline: dict
    progressHistory: Any
    releaseNote: dict
    slugId: str
    stage: dict
    startDate: Any
    startedAt: Any
    targetDate: Any
    trashed: bool
    updatedAt: Any
    url: str
    version: str


class ReleaseRemoveMatch(TypedDict):
    id: str


class ReleaseNoteRequired(TypedDict):
    createdAt: Any
    id: str
    releaseCount: int
    slugId: str
    updatedAt: Any
    url: str


class ReleaseNote(ReleaseNoteRequired, total=False):
    archivedAt: Any
    documentContent: dict
    firstRelease: dict
    generationStatus: str
    lastRelease: dict
    pipeline: dict
    title: str


class ReleaseNoteLoadMatch(TypedDict):
    id: str


class ReleaseNoteListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class ReleaseNoteCreateDataRequired(TypedDict):
    createdAt: Any
    id: str
    releaseCount: int
    slugId: str
    updatedAt: Any
    url: str


class ReleaseNoteCreateData(ReleaseNoteCreateDataRequired, total=False):
    archivedAt: Any
    documentContent: dict
    firstRelease: dict
    generationStatus: str
    lastRelease: dict
    pipeline: dict
    title: str


class ReleaseNoteUpdateDataRequired(TypedDict):
    id: str


class ReleaseNoteUpdateData(ReleaseNoteUpdateDataRequired, total=False):
    archivedAt: Any
    createdAt: Any
    documentContent: dict
    firstRelease: dict
    generationStatus: str
    lastRelease: dict
    pipeline: dict
    releaseCount: int
    slugId: str
    title: str
    updatedAt: Any
    url: str


class ReleaseNoteRemoveMatch(TypedDict):
    id: str


class ReleasePipelineRequired(TypedDict):
    approximateReleaseCount: int
    autoGenerateReleaseNotesOnCompletion: bool
    createdAt: Any
    id: str
    includePathPatterns: str
    isProduction: bool
    name: str
    rolloverIssuesOnCompletion: bool
    slugId: str
    type: str
    updatedAt: Any
    url: str


class ReleasePipeline(ReleasePipelineRequired, total=False):
    archivedAt: Any
    latestReleaseNote: dict
    releaseNoteTemplate: dict
    trashed: bool


class ReleasePipelineLoadMatch(TypedDict):
    id: str


class ReleasePipelineListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class ReleasePipelineCreateDataRequired(TypedDict):
    approximateReleaseCount: int
    autoGenerateReleaseNotesOnCompletion: bool
    createdAt: Any
    id: str
    includePathPatterns: str
    isProduction: bool
    name: str
    rolloverIssuesOnCompletion: bool
    slugId: str
    type: str
    updatedAt: Any
    url: str


class ReleasePipelineCreateData(ReleasePipelineCreateDataRequired, total=False):
    archivedAt: Any
    latestReleaseNote: dict
    releaseNoteTemplate: dict
    trashed: bool


class ReleasePipelineUpdateDataRequired(TypedDict):
    id: str


class ReleasePipelineUpdateData(ReleasePipelineUpdateDataRequired, total=False):
    approximateReleaseCount: int
    archivedAt: Any
    autoGenerateReleaseNotesOnCompletion: bool
    createdAt: Any
    includePathPatterns: str
    isProduction: bool
    latestReleaseNote: dict
    name: str
    releaseNoteTemplate: dict
    rolloverIssuesOnCompletion: bool
    slugId: str
    trashed: bool
    type: str
    updatedAt: Any
    url: str


class ReleasePipelineRemoveMatch(TypedDict):
    id: str


class ReleaseStageRequired(TypedDict):
    color: str
    createdAt: Any
    frozen: bool
    id: str
    name: str
    position: float
    type: str
    updatedAt: Any


class ReleaseStage(ReleaseStageRequired, total=False):
    archivedAt: Any
    pipeline: dict


class ReleaseStageLoadMatch(TypedDict):
    id: str


class ReleaseStageListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class ReleaseStageCreateDataRequired(TypedDict):
    color: str
    createdAt: Any
    frozen: bool
    id: str
    name: str
    position: float
    type: str
    updatedAt: Any


class ReleaseStageCreateData(ReleaseStageCreateDataRequired, total=False):
    archivedAt: Any
    pipeline: dict


class ReleaseStageUpdateDataRequired(TypedDict):
    id: str


class ReleaseStageUpdateData(ReleaseStageUpdateDataRequired, total=False):
    archivedAt: Any
    color: str
    createdAt: Any
    frozen: bool
    name: str
    pipeline: dict
    position: float
    type: str
    updatedAt: Any


class RoadmapRequired(TypedDict):
    createdAt: Any
    id: str
    name: str
    slugId: str
    sortOrder: float
    updatedAt: Any
    url: str


class Roadmap(RoadmapRequired, total=False):
    archivedAt: Any
    color: str
    creator: dict
    description: str
    organization: dict
    owner: dict


class RoadmapLoadMatch(TypedDict):
    id: str


class RoadmapListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class RoadmapCreateDataRequired(TypedDict):
    createdAt: Any
    id: str
    name: str
    slugId: str
    sortOrder: float
    updatedAt: Any
    url: str


class RoadmapCreateData(RoadmapCreateDataRequired, total=False):
    archivedAt: Any
    color: str
    creator: dict
    description: str
    organization: dict
    owner: dict


class RoadmapUpdateDataRequired(TypedDict):
    id: str


class RoadmapUpdateData(RoadmapUpdateDataRequired, total=False):
    archivedAt: Any
    color: str
    createdAt: Any
    creator: dict
    description: str
    name: str
    organization: dict
    owner: dict
    slugId: str
    sortOrder: float
    updatedAt: Any
    url: str


class RoadmapRemoveMatch(TypedDict):
    id: str


class RoadmapToProjectRequired(TypedDict):
    createdAt: Any
    id: str
    sortOrder: str
    updatedAt: Any


class RoadmapToProject(RoadmapToProjectRequired, total=False):
    archivedAt: Any
    project: dict
    roadmap: dict


class RoadmapToProjectLoadMatch(TypedDict):
    id: str


class RoadmapToProjectListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class RoadmapToProjectCreateDataRequired(TypedDict):
    createdAt: Any
    id: str
    sortOrder: str
    updatedAt: Any


class RoadmapToProjectCreateData(RoadmapToProjectCreateDataRequired, total=False):
    archivedAt: Any
    project: dict
    roadmap: dict


class RoadmapToProjectUpdateDataRequired(TypedDict):
    id: str


class RoadmapToProjectUpdateData(RoadmapToProjectUpdateDataRequired, total=False):
    archivedAt: Any
    createdAt: Any
    project: dict
    roadmap: dict
    sortOrder: str
    updatedAt: Any


class RoadmapToProjectRemoveMatch(TypedDict):
    id: str


class SlaConfigurationRequired(TypedDict):
    conditions: Any
    id: str
    name: str
    removesSla: bool


class SlaConfiguration(SlaConfigurationRequired, total=False):
    sla: float
    slaType: str
    startMode: str


class SlaConfigurationListMatch(TypedDict):
    team_id: str


class SsoUrlFromEmailResponse(TypedDict):
    samlSsoUrl: str
    success: bool


class SsoUrlFromEmailResponseLoadMatchRequired(TypedDict):
    email: str
    type: Any


class SsoUrlFromEmailResponseLoadMatch(SsoUrlFromEmailResponseLoadMatchRequired, total=False):
    is_desktop: bool


class TeamRequired(TypedDict):
    aiDiscussionSummariesEnabled: bool
    aiThreadSummariesEnabled: bool
    autoArchivePeriod: float
    createdAt: Any
    currentProgress: Any
    cycleCalenderUrl: str
    cycleCooldownTime: float
    cycleDuration: float
    cycleIssueAutoAssignCompleted: bool
    cycleIssueAutoAssignStarted: bool
    cycleLockToActive: bool
    cycleStartDay: float
    cyclesEnabled: bool
    defaultIssueEstimate: float
    displayName: str
    groupIssueHistory: bool
    id: str
    inheritIssueEstimation: bool
    inheritProjectStatuses: bool
    inheritSlackAutoCreateProjectChannel: bool
    inheritWorkflowStatuses: bool
    initiativesEnabled: bool
    issueCount: int
    issueEstimationAllowZero: bool
    issueEstimationExtended: bool
    issueEstimationType: str
    key: str
    ledInitiativeCount: int
    name: str
    progressHistory: Any
    requirePriorityToLeaveTriage: bool
    scimManaged: bool
    securitySettings: Any
    setIssueSortOrderOnStateChange: str
    timezone: str
    triageEnabled: bool
    upcomingCycleCount: float
    updatedAt: Any
    visibility: str


class Team(TeamRequired, total=False):
    activeCycle: dict
    allMembersCanJoin: bool
    archivedAt: Any
    autoCloseChildIssues: bool
    autoCloseParentIssues: bool
    autoClosePeriod: float
    autoCloseStateId: str
    color: str
    defaultIssueState: dict
    defaultProjectTemplate: dict
    defaultTemplateForMembers: dict
    defaultTemplateForNonMembers: dict
    description: str
    icon: str
    integrationsSettings: dict
    joinByDefault: bool
    organization: dict
    parent: dict
    restrictedBy: dict
    restrictedById: str
    retiredAt: Any
    scimGroupName: str
    slackAutoCreateProjectChannel: bool
    triageIssueState: dict
    triageResponsibility: dict


class TeamLoadMatch(TypedDict):
    id: str


class TeamListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class TeamCreateDataRequired(TypedDict):
    aiDiscussionSummariesEnabled: bool
    aiThreadSummariesEnabled: bool
    autoArchivePeriod: float
    createdAt: Any
    currentProgress: Any
    cycleCalenderUrl: str
    cycleCooldownTime: float
    cycleDuration: float
    cycleIssueAutoAssignCompleted: bool
    cycleIssueAutoAssignStarted: bool
    cycleLockToActive: bool
    cycleStartDay: float
    cyclesEnabled: bool
    defaultIssueEstimate: float
    displayName: str
    groupIssueHistory: bool
    id: str
    inheritIssueEstimation: bool
    inheritProjectStatuses: bool
    inheritSlackAutoCreateProjectChannel: bool
    inheritWorkflowStatuses: bool
    initiativesEnabled: bool
    issueCount: int
    issueEstimationAllowZero: bool
    issueEstimationExtended: bool
    issueEstimationType: str
    key: str
    ledInitiativeCount: int
    name: str
    progressHistory: Any
    requirePriorityToLeaveTriage: bool
    scimManaged: bool
    securitySettings: Any
    setIssueSortOrderOnStateChange: str
    timezone: str
    triageEnabled: bool
    upcomingCycleCount: float
    updatedAt: Any
    visibility: str


class TeamCreateData(TeamCreateDataRequired, total=False):
    copy_settings_from_team_id: str
    activeCycle: dict
    allMembersCanJoin: bool
    archivedAt: Any
    autoCloseChildIssues: bool
    autoCloseParentIssues: bool
    autoClosePeriod: float
    autoCloseStateId: str
    color: str
    defaultIssueState: dict
    defaultProjectTemplate: dict
    defaultTemplateForMembers: dict
    defaultTemplateForNonMembers: dict
    description: str
    icon: str
    integrationsSettings: dict
    joinByDefault: bool
    organization: dict
    parent: dict
    restrictedBy: dict
    restrictedById: str
    retiredAt: Any
    scimGroupName: str
    slackAutoCreateProjectChannel: bool
    triageIssueState: dict
    triageResponsibility: dict


class TeamUpdateDataRequired(TypedDict):
    id: str


class TeamUpdateData(TeamUpdateDataRequired, total=False):
    activeCycle: dict
    aiDiscussionSummariesEnabled: bool
    aiThreadSummariesEnabled: bool
    allMembersCanJoin: bool
    archivedAt: Any
    autoArchivePeriod: float
    autoCloseChildIssues: bool
    autoCloseParentIssues: bool
    autoClosePeriod: float
    autoCloseStateId: str
    color: str
    createdAt: Any
    currentProgress: Any
    cycleCalenderUrl: str
    cycleCooldownTime: float
    cycleDuration: float
    cycleIssueAutoAssignCompleted: bool
    cycleIssueAutoAssignStarted: bool
    cycleLockToActive: bool
    cycleStartDay: float
    cyclesEnabled: bool
    defaultIssueEstimate: float
    defaultIssueState: dict
    defaultProjectTemplate: dict
    defaultTemplateForMembers: dict
    defaultTemplateForNonMembers: dict
    description: str
    displayName: str
    groupIssueHistory: bool
    icon: str
    inheritIssueEstimation: bool
    inheritProjectStatuses: bool
    inheritSlackAutoCreateProjectChannel: bool
    inheritWorkflowStatuses: bool
    initiativesEnabled: bool
    integrationsSettings: dict
    issueCount: int
    issueEstimationAllowZero: bool
    issueEstimationExtended: bool
    issueEstimationType: str
    joinByDefault: bool
    key: str
    ledInitiativeCount: int
    name: str
    organization: dict
    parent: dict
    progressHistory: Any
    requirePriorityToLeaveTriage: bool
    restrictedBy: dict
    restrictedById: str
    retiredAt: Any
    scimGroupName: str
    scimManaged: bool
    securitySettings: Any
    setIssueSortOrderOnStateChange: str
    slackAutoCreateProjectChannel: bool
    timezone: str
    triageEnabled: bool
    triageIssueState: dict
    triageResponsibility: dict
    upcomingCycleCount: float
    updatedAt: Any
    visibility: str


class TeamRemoveMatch(TypedDict):
    id: str


class TeamMembershipRequired(TypedDict):
    createdAt: Any
    id: str
    owner: bool
    sortOrder: float
    updatedAt: Any


class TeamMembership(TeamMembershipRequired, total=False):
    archivedAt: Any
    team: dict
    user: dict


class TeamMembershipLoadMatch(TypedDict):
    id: str


class TeamMembershipListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class TeamMembershipCreateDataRequired(TypedDict):
    createdAt: Any
    id: str
    owner: bool
    sortOrder: float
    updatedAt: Any


class TeamMembershipCreateData(TeamMembershipCreateDataRequired, total=False):
    archivedAt: Any
    team: dict
    user: dict


class TeamMembershipUpdateDataRequired(TypedDict):
    id: str


class TeamMembershipUpdateData(TeamMembershipUpdateDataRequired, total=False):
    archivedAt: Any
    createdAt: Any
    owner: bool
    sortOrder: float
    team: dict
    updatedAt: Any
    user: dict


class TeamMembershipRemoveMatchRequired(TypedDict):
    id: str


class TeamMembershipRemoveMatch(TeamMembershipRemoveMatchRequired, total=False):
    also_leave_parent_team: bool


class TemplateRequired(TypedDict):
    createdAt: Any
    hasFormFields: bool
    id: str
    name: str
    sortOrder: float
    templateData: Any
    type: str
    updatedAt: Any


class Template(TemplateRequired, total=False):
    archivedAt: Any
    color: str
    content: str
    creator: dict
    description: str
    icon: str
    inheritedFrom: dict
    lastAppliedAt: Any
    lastUpdatedBy: dict
    organization: dict
    pipeline: dict
    team: dict


class TemplateLoadMatch(TypedDict):
    id: str


class TemplateListMatch(TypedDict, total=False):
    integration_type: str
    first: int
    include_archived: bool


class TemplateCreateDataRequired(TypedDict):
    createdAt: Any
    hasFormFields: bool
    id: str
    name: str
    sortOrder: float
    templateData: Any
    type: str
    updatedAt: Any


class TemplateCreateData(TemplateCreateDataRequired, total=False):
    archivedAt: Any
    color: str
    content: str
    creator: dict
    description: str
    icon: str
    inheritedFrom: dict
    lastAppliedAt: Any
    lastUpdatedBy: dict
    organization: dict
    pipeline: dict
    team: dict


class TemplateUpdateDataRequired(TypedDict):
    id: str


class TemplateUpdateData(TemplateUpdateDataRequired, total=False):
    archivedAt: Any
    color: str
    content: str
    createdAt: Any
    creator: dict
    description: str
    hasFormFields: bool
    icon: str
    inheritedFrom: dict
    lastAppliedAt: Any
    lastUpdatedBy: dict
    name: str
    organization: dict
    pipeline: dict
    sortOrder: float
    team: dict
    templateData: Any
    type: str
    updatedAt: Any


class TemplateRemoveMatch(TypedDict):
    id: str


class TimeScheduleRequired(TypedDict):
    createdAt: Any
    id: str
    name: str
    updatedAt: Any


class TimeSchedule(TimeScheduleRequired, total=False):
    archivedAt: Any
    externalId: str
    externalUrl: str
    integration: dict
    organization: dict


class TimeScheduleLoadMatch(TypedDict):
    id: str


class TimeScheduleListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class TimeScheduleCreateDataRequired(TypedDict):
    createdAt: Any
    id: str
    name: str
    updatedAt: Any


class TimeScheduleCreateData(TimeScheduleCreateDataRequired, total=False):
    archivedAt: Any
    externalId: str
    externalUrl: str
    integration: dict
    organization: dict


class TimeScheduleUpdateData(TypedDict, total=False):
    external_id: str
    id: str
    archivedAt: Any
    createdAt: Any
    externalId: str
    externalUrl: str
    integration: dict
    name: str
    organization: dict
    updatedAt: Any


class TimeScheduleRemoveMatch(TypedDict):
    id: str


class TriageResponsibilityRequired(TypedDict):
    action: str
    createdAt: Any
    id: str
    updatedAt: Any


class TriageResponsibility(TriageResponsibilityRequired, total=False):
    archivedAt: Any
    currentUser: dict
    team: dict
    timeSchedule: dict


class TriageResponsibilityLoadMatch(TypedDict):
    id: str


class TriageResponsibilityListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class TriageResponsibilityCreateDataRequired(TypedDict):
    action: str
    createdAt: Any
    id: str
    updatedAt: Any


class TriageResponsibilityCreateData(TriageResponsibilityCreateDataRequired, total=False):
    archivedAt: Any
    currentUser: dict
    team: dict
    timeSchedule: dict


class TriageResponsibilityUpdateDataRequired(TypedDict):
    id: str


class TriageResponsibilityUpdateData(TriageResponsibilityUpdateDataRequired, total=False):
    action: str
    archivedAt: Any
    createdAt: Any
    currentUser: dict
    team: dict
    timeSchedule: dict
    updatedAt: Any


class TriageResponsibilityRemoveMatch(TypedDict):
    id: str


class UploadFileRequired(TypedDict):
    assetUrl: str
    contentType: str
    filename: str
    size: int
    uploadUrl: str


class UploadFile(UploadFileRequired, total=False):
    metaData: Any


class UploadFileCreateDataRequired(TypedDict):
    content_type: str
    filename: str
    size: int
    assetUrl: str
    contentType: str
    uploadUrl: str


class UploadFileCreateData(UploadFileCreateDataRequired, total=False):
    make_public: bool
    meta_data: Any
    metaData: Any


class UsageAlertRequired(TypedDict):
    createdAt: Any
    id: str
    metadata: Any
    type: str
    updatedAt: Any


class UsageAlert(UsageAlertRequired, total=False):
    archivedAt: Any
    resolvedAt: Any


class UsageAlertLoadMatch(TypedDict):
    id: str


class UsageAlertListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class UserRequired(TypedDict):
    active: bool
    admin: bool
    app: bool
    avatarBackgroundColor: str
    canAccessAnyPublicTeam: bool
    createdAt: Any
    createdIssueCount: int
    displayName: str
    email: str
    guest: bool
    hasGitHubCodeAccess: bool
    id: str
    initials: str
    isAssignable: bool
    isMe: bool
    isMentionable: bool
    name: str
    owner: bool
    supportsAgentSessions: bool
    updatedAt: Any
    url: str


class User(UserRequired, total=False):
    archivedAt: Any
    avatarUrl: str
    calendarHash: str
    description: str
    disableReason: str
    gitHubUserId: str
    identityProvider: dict
    lastSeen: Any
    organization: dict
    statusEmoji: str
    statusLabel: str
    statusUntilAt: Any
    timezone: str
    title: str


class UserLoadMatch(TypedDict, total=False):
    id: str


class UserListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    include_disabled: bool
    last: int
    order_by: Any


class UserCreateDataRequired(TypedDict):
    active: bool
    admin: bool
    app: bool
    avatarBackgroundColor: str
    canAccessAnyPublicTeam: bool
    createdAt: Any
    createdIssueCount: int
    displayName: str
    email: str
    guest: bool
    hasGitHubCodeAccess: bool
    id: str
    initials: str
    isAssignable: bool
    isMe: bool
    isMentionable: bool
    name: str
    owner: bool
    supportsAgentSessions: bool
    updatedAt: Any
    url: str


class UserCreateData(UserCreateDataRequired, total=False):
    code: str
    redirect_uri: str
    service: str
    archivedAt: Any
    avatarUrl: str
    calendarHash: str
    description: str
    disableReason: str
    gitHubUserId: str
    identityProvider: dict
    lastSeen: Any
    organization: dict
    statusEmoji: str
    statusLabel: str
    statusUntilAt: Any
    timezone: str
    title: str


class UserUpdateDataRequired(TypedDict):
    id: str


class UserUpdateData(UserUpdateDataRequired, total=False):
    active: bool
    admin: bool
    app: bool
    archivedAt: Any
    avatarBackgroundColor: str
    avatarUrl: str
    calendarHash: str
    canAccessAnyPublicTeam: bool
    createdAt: Any
    createdIssueCount: int
    description: str
    disableReason: str
    displayName: str
    email: str
    gitHubUserId: str
    guest: bool
    hasGitHubCodeAccess: bool
    identityProvider: dict
    initials: str
    isAssignable: bool
    isMe: bool
    isMentionable: bool
    lastSeen: Any
    name: str
    organization: dict
    owner: bool
    statusEmoji: str
    statusLabel: str
    statusUntilAt: Any
    supportsAgentSessions: bool
    timezone: str
    title: str
    updatedAt: Any
    url: str


class UserSettingRequired(TypedDict):
    autoAssignToSelf: bool
    createdAt: Any
    id: str
    showFullUserNames: bool
    subscribedToChangelog: bool
    subscribedToDPA: bool
    subscribedToInviteAccepted: bool
    subscribedToPrivacyLegalUpdates: bool
    updatedAt: Any


class UserSetting(UserSettingRequired, total=False):
    archivedAt: Any
    calendarHash: str
    feedLastSeenTime: Any
    feedSummarySchedule: str
    pullRequestMergeStrategyPreference: str
    user: dict


class UserSettingLoadMatchRequired(TypedDict):
    id: str


class UserSettingLoadMatch(UserSettingLoadMatchRequired, total=False):
    archivedAt: Any
    autoAssignToSelf: bool
    calendarHash: str
    createdAt: Any
    feedLastSeenTime: Any
    feedSummarySchedule: str
    pullRequestMergeStrategyPreference: str
    showFullUserNames: bool
    subscribedToChangelog: bool
    subscribedToDPA: bool
    subscribedToInviteAccepted: bool
    subscribedToPrivacyLegalUpdates: bool
    updatedAt: Any
    user: dict


class UserSettingCreateDataRequired(TypedDict):
    category: Any
    channel: Any
    subscribe: bool
    autoAssignToSelf: bool
    createdAt: Any
    id: str
    showFullUserNames: bool
    subscribedToChangelog: bool
    subscribedToDPA: bool
    subscribedToInviteAccepted: bool
    subscribedToPrivacyLegalUpdates: bool
    updatedAt: Any


class UserSettingCreateData(UserSettingCreateDataRequired, total=False):
    archivedAt: Any
    calendarHash: str
    feedLastSeenTime: Any
    feedSummarySchedule: str
    pullRequestMergeStrategyPreference: str
    user: dict


class UserSettingUpdateDataRequired(TypedDict):
    id: str


class UserSettingUpdateData(UserSettingUpdateDataRequired, total=False):
    archivedAt: Any
    autoAssignToSelf: bool
    calendarHash: str
    createdAt: Any
    feedLastSeenTime: Any
    feedSummarySchedule: str
    pullRequestMergeStrategyPreference: str
    showFullUserNames: bool
    subscribedToChangelog: bool
    subscribedToDPA: bool
    subscribedToInviteAccepted: bool
    subscribedToPrivacyLegalUpdates: bool
    updatedAt: Any
    user: dict


class ViewPreferenceRequired(TypedDict):
    createdAt: Any
    id: str
    type: str
    updatedAt: Any
    viewType: str


class ViewPreference(ViewPreferenceRequired, total=False):
    archivedAt: Any


class ViewPreferenceLoadMatch(TypedDict):
    view_type: Any


class ViewPreferenceCreateDataRequired(TypedDict):
    createdAt: Any
    id: str
    type: str
    updatedAt: Any
    viewType: str


class ViewPreferenceCreateData(ViewPreferenceCreateDataRequired, total=False):
    archivedAt: Any


class ViewPreferenceUpdateDataRequired(TypedDict):
    id: str


class ViewPreferenceUpdateData(ViewPreferenceUpdateDataRequired, total=False):
    archivedAt: Any
    createdAt: Any
    type: str
    updatedAt: Any
    viewType: str


class ViewPreferenceRemoveMatch(TypedDict):
    id: str


class WebhookRequired(TypedDict):
    allPublicTeams: bool
    createdAt: Any
    enabled: bool
    id: str
    resourceTypes: str
    updatedAt: Any


class Webhook(WebhookRequired, total=False):
    archivedAt: Any
    creator: dict
    label: str
    secret: str
    team: dict
    teamIds: str
    url: str


class WebhookLoadMatch(TypedDict):
    id: str


class WebhookListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class WebhookCreateDataRequired(TypedDict):
    allPublicTeams: bool
    createdAt: Any
    enabled: bool
    id: str
    resourceTypes: str
    updatedAt: Any


class WebhookCreateData(WebhookCreateDataRequired, total=False):
    archivedAt: Any
    creator: dict
    label: str
    secret: str
    team: dict
    teamIds: str
    url: str


class WebhookUpdateDataRequired(TypedDict):
    id: str


class WebhookUpdateData(WebhookUpdateDataRequired, total=False):
    allPublicTeams: bool
    archivedAt: Any
    createdAt: Any
    creator: dict
    enabled: bool
    label: str
    resourceTypes: str
    secret: str
    team: dict
    teamIds: str
    updatedAt: Any
    url: str


class WebhookRemoveMatch(TypedDict):
    id: str


class WebhookFailureEventRequired(TypedDict):
    createdAt: Any
    executionId: str
    id: str
    url: str


class WebhookFailureEvent(WebhookFailureEventRequired, total=False):
    httpStatus: float
    responseOrError: str
    webhook: dict


class WebhookFailureEventListMatch(TypedDict, total=False):
    oauth_client_id: str
    webhook_id: str


class WorkflowStateRequired(TypedDict):
    color: str
    createdAt: Any
    id: str
    name: str
    position: float
    type: str
    updatedAt: Any


class WorkflowState(WorkflowStateRequired, total=False):
    archivedAt: Any
    description: str
    inheritedFrom: dict
    team: dict


class WorkflowStateLoadMatch(TypedDict):
    id: str


class WorkflowStateListMatch(TypedDict, total=False):
    after: str
    before: str
    first: int
    include_archived: bool
    last: int
    order_by: Any


class WorkflowStateCreateDataRequired(TypedDict):
    color: str
    createdAt: Any
    id: str
    name: str
    position: float
    type: str
    updatedAt: Any


class WorkflowStateCreateData(WorkflowStateCreateDataRequired, total=False):
    archivedAt: Any
    description: str
    inheritedFrom: dict
    team: dict


class WorkflowStateUpdateDataRequired(TypedDict):
    id: str


class WorkflowStateUpdateData(WorkflowStateUpdateDataRequired, total=False):
    archivedAt: Any
    color: str
    createdAt: Any
    description: str
    inheritedFrom: dict
    name: str
    position: float
    team: dict
    type: str
    updatedAt: Any
