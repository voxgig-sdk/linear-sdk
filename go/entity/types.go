// Typed models for the Linear SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/linear-sdk/go/core"
)

// AccessKeyRelease is the typed data model for the access_key_release entity.
type AccessKeyRelease struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CommitSha *string `json:"commitSha,omitempty"`
	CompletedAt *any `json:"completedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Id string `json:"id"`
	Name string `json:"name"`
	Url string `json:"url"`
	Version *string `json:"version,omitempty"`
}

// AccessKeyReleaseLoadMatch is the typed request payload for AccessKeyRelease.LoadTyped.
type AccessKeyReleaseLoadMatch struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CommitSha *string `json:"commitSha,omitempty"`
	CompletedAt *any `json:"completedAt,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Id string `json:"id"`
	Name *string `json:"name,omitempty"`
	Url *string `json:"url,omitempty"`
	Version *string `json:"version,omitempty"`
}

// AccessKeyReleaseListMatch is the typed request payload for AccessKeyRelease.ListTyped.
type AccessKeyReleaseListMatch struct {
	Limit *int `json:"limit,omitempty"`
}

// AccessKeyReleaseCreateData is the typed request payload for AccessKeyRelease.CreateTyped.
type AccessKeyReleaseCreateData struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CommitSha *string `json:"commitSha,omitempty"`
	CompletedAt *any `json:"completedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Id string `json:"id"`
	Name string `json:"name"`
	Url string `json:"url"`
	Version *string `json:"version,omitempty"`
}

// AccessKeyReleasePipeline is the typed data model for the access_key_release_pipeline entity.
type AccessKeyReleasePipeline struct {
	Id string `json:"id"`
	IncludePathPatterns string `json:"includePathPatterns"`
}

// AccessKeyReleasePipelineLoadMatch is the typed request payload for AccessKeyReleasePipeline.LoadTyped.
type AccessKeyReleasePipelineLoadMatch struct {
	Id string `json:"id"`
	IncludePathPatterns *string `json:"includePathPatterns,omitempty"`
}

// AgentActivity is the typed data model for the agent_activity entity.
type AgentActivity struct {
	AgentSession *map[string]any `json:"agentSession,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	ContextualMetadata *any `json:"contextualMetadata,omitempty"`
	CreatedAt any `json:"createdAt"`
	Ephemeral bool `json:"ephemeral"`
	ExecutionSkippedReason *string `json:"executionSkippedReason,omitempty"`
	Id string `json:"id"`
	Queued bool `json:"queued"`
	SentAt *any `json:"sentAt,omitempty"`
	Signal *string `json:"signal,omitempty"`
	SignalMetadata *any `json:"signalMetadata,omitempty"`
	SourceComment *map[string]any `json:"sourceComment,omitempty"`
	SourceMetadata *any `json:"sourceMetadata,omitempty"`
	UpdatedAt any `json:"updatedAt"`
	User *map[string]any `json:"user,omitempty"`
}

// AgentActivityLoadMatch is the typed request payload for AgentActivity.LoadTyped.
type AgentActivityLoadMatch struct {
	Id string `json:"id"`
}

// AgentActivityListMatch is the typed request payload for AgentActivity.ListTyped.
type AgentActivityListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// AgentActivityCreateData is the typed request payload for AgentActivity.CreateTyped.
type AgentActivityCreateData struct {
	AgentSession *map[string]any `json:"agentSession,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	ContextualMetadata *any `json:"contextualMetadata,omitempty"`
	CreatedAt any `json:"createdAt"`
	Ephemeral bool `json:"ephemeral"`
	ExecutionSkippedReason *string `json:"executionSkippedReason,omitempty"`
	Id string `json:"id"`
	Queued bool `json:"queued"`
	SentAt *any `json:"sentAt,omitempty"`
	Signal *string `json:"signal,omitempty"`
	SignalMetadata *any `json:"signalMetadata,omitempty"`
	SourceComment *map[string]any `json:"sourceComment,omitempty"`
	SourceMetadata *any `json:"sourceMetadata,omitempty"`
	UpdatedAt any `json:"updatedAt"`
	User *map[string]any `json:"user,omitempty"`
}

// AgentActivityUpdateData is the typed request payload for AgentActivity.UpdateTyped.
type AgentActivityUpdateData struct {
	Id string `json:"id"`
	AgentSession *map[string]any `json:"agentSession,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	ContextualMetadata *any `json:"contextualMetadata,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Ephemeral *bool `json:"ephemeral,omitempty"`
	ExecutionSkippedReason *string `json:"executionSkippedReason,omitempty"`
	Queued *bool `json:"queued,omitempty"`
	SentAt *any `json:"sentAt,omitempty"`
	Signal *string `json:"signal,omitempty"`
	SignalMetadata *any `json:"signalMetadata,omitempty"`
	SourceComment *map[string]any `json:"sourceComment,omitempty"`
	SourceMetadata *any `json:"sourceMetadata,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
	User *map[string]any `json:"user,omitempty"`
}

// AgentSession is the typed data model for the agent_session entity.
type AgentSession struct {
	AppUser *map[string]any `json:"appUser,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CodingHarnessModelLabel *string `json:"codingHarnessModelLabel,omitempty"`
	Comment *map[string]any `json:"comment,omitempty"`
	Context any `json:"context"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	DismissedAt *any `json:"dismissedAt,omitempty"`
	DismissedBy *map[string]any `json:"dismissedBy,omitempty"`
	EndedAt *any `json:"endedAt,omitempty"`
	Id string `json:"id"`
	Issue *map[string]any `json:"issue,omitempty"`
	ModelSelection *any `json:"modelSelection,omitempty"`
	Plan *any `json:"plan,omitempty"`
	PullRequest *map[string]any `json:"pullRequest,omitempty"`
	SlugId string `json:"slugId"`
	SourceComment *map[string]any `json:"sourceComment,omitempty"`
	SourceMetadata *any `json:"sourceMetadata,omitempty"`
	StartedAt *any `json:"startedAt,omitempty"`
	Status string `json:"status"`
	Summary *string `json:"summary,omitempty"`
	UpdatedAt any `json:"updatedAt"`
	Url *string `json:"url,omitempty"`
}

// AgentSessionLoadMatch is the typed request payload for AgentSession.LoadTyped.
type AgentSessionLoadMatch struct {
	Id string `json:"id"`
}

// AgentSessionListMatch is the typed request payload for AgentSession.ListTyped.
type AgentSessionListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// AgentSessionCreateData is the typed request payload for AgentSession.CreateTyped.
type AgentSessionCreateData struct {
	PullRequestId *string `json:"pull_request_id,omitempty"`
	AppUser *map[string]any `json:"appUser,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CodingHarnessModelLabel *string `json:"codingHarnessModelLabel,omitempty"`
	Comment *map[string]any `json:"comment,omitempty"`
	Context any `json:"context"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	DismissedAt *any `json:"dismissedAt,omitempty"`
	DismissedBy *map[string]any `json:"dismissedBy,omitempty"`
	EndedAt *any `json:"endedAt,omitempty"`
	Id string `json:"id"`
	Issue *map[string]any `json:"issue,omitempty"`
	ModelSelection *any `json:"modelSelection,omitempty"`
	Plan *any `json:"plan,omitempty"`
	PullRequest *map[string]any `json:"pullRequest,omitempty"`
	SlugId string `json:"slugId"`
	SourceComment *map[string]any `json:"sourceComment,omitempty"`
	SourceMetadata *any `json:"sourceMetadata,omitempty"`
	StartedAt *any `json:"startedAt,omitempty"`
	Status string `json:"status"`
	Summary *string `json:"summary,omitempty"`
	UpdatedAt any `json:"updatedAt"`
	Url *string `json:"url,omitempty"`
}

// AgentSessionUpdateData is the typed request payload for AgentSession.UpdateTyped.
type AgentSessionUpdateData struct {
	Id string `json:"id"`
	AppUser *map[string]any `json:"appUser,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CodingHarnessModelLabel *string `json:"codingHarnessModelLabel,omitempty"`
	Comment *map[string]any `json:"comment,omitempty"`
	Context *any `json:"context,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Creator *map[string]any `json:"creator,omitempty"`
	DismissedAt *any `json:"dismissedAt,omitempty"`
	DismissedBy *map[string]any `json:"dismissedBy,omitempty"`
	EndedAt *any `json:"endedAt,omitempty"`
	Issue *map[string]any `json:"issue,omitempty"`
	ModelSelection *any `json:"modelSelection,omitempty"`
	Plan *any `json:"plan,omitempty"`
	PullRequest *map[string]any `json:"pullRequest,omitempty"`
	SlugId *string `json:"slugId,omitempty"`
	SourceComment *map[string]any `json:"sourceComment,omitempty"`
	SourceMetadata *any `json:"sourceMetadata,omitempty"`
	StartedAt *any `json:"startedAt,omitempty"`
	Status *string `json:"status,omitempty"`
	Summary *string `json:"summary,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
	Url *string `json:"url,omitempty"`
}

// AgentSkill is the typed data model for the agent_skill entity.
type AgentSkill struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Body string `json:"body"`
	Color *string `json:"color,omitempty"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	Description *string `json:"description,omitempty"`
	Icon *string `json:"icon,omitempty"`
	Id string `json:"id"`
	InheritedFrom *map[string]any `json:"inheritedFrom,omitempty"`
	LastUpdatedBy *map[string]any `json:"lastUpdatedBy,omitempty"`
	LastUsedAt *any `json:"lastUsedAt,omitempty"`
	Owner *map[string]any `json:"owner,omitempty"`
	RecentUsageCount float64 `json:"recentUsageCount"`
	Shared bool `json:"shared"`
	SlugId string `json:"slugId"`
	TeamId *string `json:"teamId,omitempty"`
	Title string `json:"title"`
	UpdatedAt any `json:"updatedAt"`
}

// AgentSkillLoadMatch is the typed request payload for AgentSkill.LoadTyped.
type AgentSkillLoadMatch struct {
	Id string `json:"id"`
}

// AgentSkillListMatch is the typed request payload for AgentSkill.ListTyped.
type AgentSkillListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// AgentSkillCreateData is the typed request payload for AgentSkill.CreateTyped.
type AgentSkillCreateData struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Body string `json:"body"`
	Color *string `json:"color,omitempty"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	Description *string `json:"description,omitempty"`
	Icon *string `json:"icon,omitempty"`
	Id string `json:"id"`
	InheritedFrom *map[string]any `json:"inheritedFrom,omitempty"`
	LastUpdatedBy *map[string]any `json:"lastUpdatedBy,omitempty"`
	LastUsedAt *any `json:"lastUsedAt,omitempty"`
	Owner *map[string]any `json:"owner,omitempty"`
	RecentUsageCount float64 `json:"recentUsageCount"`
	Shared bool `json:"shared"`
	SlugId string `json:"slugId"`
	TeamId *string `json:"teamId,omitempty"`
	Title string `json:"title"`
	UpdatedAt any `json:"updatedAt"`
}

// AgentSkillUpdateData is the typed request payload for AgentSkill.UpdateTyped.
type AgentSkillUpdateData struct {
	Id string `json:"id"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Body *string `json:"body,omitempty"`
	Color *string `json:"color,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Creator *map[string]any `json:"creator,omitempty"`
	Description *string `json:"description,omitempty"`
	Icon *string `json:"icon,omitempty"`
	InheritedFrom *map[string]any `json:"inheritedFrom,omitempty"`
	LastUpdatedBy *map[string]any `json:"lastUpdatedBy,omitempty"`
	LastUsedAt *any `json:"lastUsedAt,omitempty"`
	Owner *map[string]any `json:"owner,omitempty"`
	RecentUsageCount *float64 `json:"recentUsageCount,omitempty"`
	Shared *bool `json:"shared,omitempty"`
	SlugId *string `json:"slugId,omitempty"`
	TeamId *string `json:"teamId,omitempty"`
	Title *string `json:"title,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
}

// AgentSkillRemoveMatch is the typed request payload for AgentSkill.RemoveTyped.
type AgentSkillRemoveMatch struct {
	Id string `json:"id"`
}

// Application is the typed data model for the application entity.
type Application struct {
	ClientId string `json:"clientId"`
	Description *string `json:"description,omitempty"`
	Developer string `json:"developer"`
	DeveloperUrl string `json:"developerUrl"`
	Id string `json:"id"`
	ImageUrl *string `json:"imageUrl,omitempty"`
	Name string `json:"name"`
}

// ApplicationLoadMatch is the typed request payload for Application.LoadTyped.
type ApplicationLoadMatch struct {
	ClientId string `json:"client_id"`
}

// Attachment is the typed data model for the attachment entity.
type Attachment struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	BodyData *string `json:"bodyData,omitempty"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	ExternalUserCreator *map[string]any `json:"externalUserCreator,omitempty"`
	GroupBySource bool `json:"groupBySource"`
	Id string `json:"id"`
	Issue *map[string]any `json:"issue,omitempty"`
	Metadata any `json:"metadata"`
	OriginalIssue *map[string]any `json:"originalIssue,omitempty"`
	Source *any `json:"source,omitempty"`
	SourceType *string `json:"sourceType,omitempty"`
	Subtitle *string `json:"subtitle,omitempty"`
	Title string `json:"title"`
	UpdatedAt any `json:"updatedAt"`
	Url string `json:"url"`
}

// AttachmentLoadMatch is the typed request payload for Attachment.LoadTyped.
type AttachmentLoadMatch struct {
	Id string `json:"id"`
}

// AttachmentListMatch is the typed request payload for Attachment.ListTyped.
type AttachmentListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
	Url *string `json:"url,omitempty"`
}

// AttachmentCreateData is the typed request payload for Attachment.CreateTyped.
type AttachmentCreateData struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	BodyData *string `json:"bodyData,omitempty"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	ExternalUserCreator *map[string]any `json:"externalUserCreator,omitempty"`
	GroupBySource bool `json:"groupBySource"`
	Id string `json:"id"`
	Issue *map[string]any `json:"issue,omitempty"`
	Metadata any `json:"metadata"`
	OriginalIssue *map[string]any `json:"originalIssue,omitempty"`
	Source *any `json:"source,omitempty"`
	SourceType *string `json:"sourceType,omitempty"`
	Subtitle *string `json:"subtitle,omitempty"`
	Title string `json:"title"`
	UpdatedAt any `json:"updatedAt"`
	Url string `json:"url"`
}

// AttachmentUpdateData is the typed request payload for Attachment.UpdateTyped.
type AttachmentUpdateData struct {
	Id string `json:"id"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	BodyData *string `json:"bodyData,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Creator *map[string]any `json:"creator,omitempty"`
	ExternalUserCreator *map[string]any `json:"externalUserCreator,omitempty"`
	GroupBySource *bool `json:"groupBySource,omitempty"`
	Issue *map[string]any `json:"issue,omitempty"`
	Metadata *any `json:"metadata,omitempty"`
	OriginalIssue *map[string]any `json:"originalIssue,omitempty"`
	Source *any `json:"source,omitempty"`
	SourceType *string `json:"sourceType,omitempty"`
	Subtitle *string `json:"subtitle,omitempty"`
	Title *string `json:"title,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
	Url *string `json:"url,omitempty"`
}

// AttachmentRemoveMatch is the typed request payload for Attachment.RemoveTyped.
type AttachmentRemoveMatch struct {
	Id string `json:"id"`
}

// AuditEntry is the typed data model for the audit_entry entity.
type AuditEntry struct {
	Actor *map[string]any `json:"actor,omitempty"`
	ActorId *string `json:"actorId,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CountryCode *string `json:"countryCode,omitempty"`
	CreatedAt any `json:"createdAt"`
	Id string `json:"id"`
	Ip *string `json:"ip,omitempty"`
	Metadata *any `json:"metadata,omitempty"`
	Organization *map[string]any `json:"organization,omitempty"`
	RequestInformation *any `json:"requestInformation,omitempty"`
	Type string `json:"type"`
	UpdatedAt any `json:"updatedAt"`
}

// AuditEntryListMatch is the typed request payload for AuditEntry.ListTyped.
type AuditEntryListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// AuditEntryType is the typed data model for the audit_entry_type entity.
type AuditEntryType struct {
	Description string `json:"description"`
	Type string `json:"type"`
}

// AuditEntryTypeListMatch is the typed request payload for AuditEntryType.ListTyped.
type AuditEntryTypeListMatch struct {
	Description *string `json:"description,omitempty"`
	Type *string `json:"type,omitempty"`
}

// AuthResolverResponse is the typed data model for the auth_resolver_response entity.
type AuthResolverResponse struct {
	AllowDomainAccess *bool `json:"allowDomainAccess,omitempty"`
	Email string `json:"email"`
	Id string `json:"id"`
	LastUsedOrganizationId *string `json:"lastUsedOrganizationId,omitempty"`
	Service *string `json:"service,omitempty"`
}

// AuthResolverResponseLoadMatch is the typed request payload for AuthResolverResponse.LoadTyped.
type AuthResolverResponseLoadMatch struct {
	AllowDomainAccess *bool `json:"allowDomainAccess,omitempty"`
	Email *string `json:"email,omitempty"`
	Id string `json:"id"`
	LastUsedOrganizationId *string `json:"lastUsedOrganizationId,omitempty"`
	Service *string `json:"service,omitempty"`
}

// AuthResolverResponseCreateData is the typed request payload for AuthResolverResponse.CreateTyped.
type AuthResolverResponseCreateData struct {
	AllowDomainAccess *bool `json:"allowDomainAccess,omitempty"`
	Email string `json:"email"`
	Id string `json:"id"`
	LastUsedOrganizationId *string `json:"lastUsedOrganizationId,omitempty"`
	Service *string `json:"service,omitempty"`
}

// AuthResolverResponseUpdateData is the typed request payload for AuthResolverResponse.UpdateTyped.
type AuthResolverResponseUpdateData struct {
	AuthId string `json:"auth_id"`
	Response any `json:"response"`
	AllowDomainAccess *bool `json:"allowDomainAccess,omitempty"`
	Email *string `json:"email,omitempty"`
	Id *string `json:"id,omitempty"`
	LastUsedOrganizationId *string `json:"lastUsedOrganizationId,omitempty"`
	Service *string `json:"service,omitempty"`
}

// AuthenticationSessionResponse is the typed data model for the authentication_session_response entity.
type AuthenticationSessionResponse struct {
	BrowserType *string `json:"browserType,omitempty"`
	Client *string `json:"client,omitempty"`
	CountryCodes string `json:"countryCodes"`
	CreatedAt any `json:"createdAt"`
	DetailedName string `json:"detailedName"`
	Id string `json:"id"`
	Ip *string `json:"ip,omitempty"`
	IsCurrentSession bool `json:"isCurrentSession"`
	LastActiveAt *any `json:"lastActiveAt,omitempty"`
	Location *string `json:"location,omitempty"`
	LocationCity *string `json:"locationCity,omitempty"`
	LocationCountry *string `json:"locationCountry,omitempty"`
	LocationCountryCode *string `json:"locationCountryCode,omitempty"`
	LocationRegionCode *string `json:"locationRegionCode,omitempty"`
	Name string `json:"name"`
	OperatingSystem *string `json:"operatingSystem,omitempty"`
	Service *string `json:"service,omitempty"`
	Type string `json:"type"`
	UpdatedAt any `json:"updatedAt"`
	UserAgent *string `json:"userAgent,omitempty"`
}

// AuthenticationSessionResponseListMatch is the typed request payload for AuthenticationSessionResponse.ListTyped.
type AuthenticationSessionResponseListMatch struct {
	Id *string `json:"id,omitempty"`
}

// Comment is the typed data model for the comment entity.
type Comment struct {
	AgentSession *map[string]any `json:"agentSession,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Body string `json:"body"`
	BodyData string `json:"bodyData"`
	BotActor *map[string]any `json:"botActor,omitempty"`
	CreatedAt any `json:"createdAt"`
	DocumentContent *map[string]any `json:"documentContent,omitempty"`
	DocumentContentId *string `json:"documentContentId,omitempty"`
	EditedAt *any `json:"editedAt,omitempty"`
	ExternalThread *map[string]any `json:"externalThread,omitempty"`
	ExternalUser *map[string]any `json:"externalUser,omitempty"`
	HideInLinear bool `json:"hideInLinear"`
	Id string `json:"id"`
	Initiative *map[string]any `json:"initiative,omitempty"`
	InitiativeId *string `json:"initiativeId,omitempty"`
	InitiativeUpdate *map[string]any `json:"initiativeUpdate,omitempty"`
	InitiativeUpdateId *string `json:"initiativeUpdateId,omitempty"`
	IsArtificialAgentSessionRoot bool `json:"isArtificialAgentSessionRoot"`
	Issue *map[string]any `json:"issue,omitempty"`
	IssueId *string `json:"issueId,omitempty"`
	OnBehalfOf *map[string]any `json:"onBehalfOf,omitempty"`
	Parent *map[string]any `json:"parent,omitempty"`
	ParentId *string `json:"parentId,omitempty"`
	Post *map[string]any `json:"post,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	ProjectId *string `json:"projectId,omitempty"`
	ProjectUpdate *map[string]any `json:"projectUpdate,omitempty"`
	ProjectUpdateId *string `json:"projectUpdateId,omitempty"`
	QuotedText *string `json:"quotedText,omitempty"`
	ReactionData any `json:"reactionData"`
	ResolvedAt *any `json:"resolvedAt,omitempty"`
	ResolvingComment *map[string]any `json:"resolvingComment,omitempty"`
	ResolvingCommentId *string `json:"resolvingCommentId,omitempty"`
	ResolvingUser *map[string]any `json:"resolvingUser,omitempty"`
	ThreadSummary *any `json:"threadSummary,omitempty"`
	UpdatedAt any `json:"updatedAt"`
	Url string `json:"url"`
	User *map[string]any `json:"user,omitempty"`
}

// CommentLoadMatch is the typed request payload for Comment.LoadTyped.
type CommentLoadMatch struct {
	Hash *string `json:"hash,omitempty"`
	Id *string `json:"id,omitempty"`
}

// CommentListMatch is the typed request payload for Comment.ListTyped.
type CommentListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// CommentCreateData is the typed request payload for Comment.CreateTyped.
type CommentCreateData struct {
	AgentSession *map[string]any `json:"agentSession,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Body string `json:"body"`
	BodyData string `json:"bodyData"`
	BotActor *map[string]any `json:"botActor,omitempty"`
	CreatedAt any `json:"createdAt"`
	DocumentContent *map[string]any `json:"documentContent,omitempty"`
	DocumentContentId *string `json:"documentContentId,omitempty"`
	EditedAt *any `json:"editedAt,omitempty"`
	ExternalThread *map[string]any `json:"externalThread,omitempty"`
	ExternalUser *map[string]any `json:"externalUser,omitempty"`
	HideInLinear bool `json:"hideInLinear"`
	Id string `json:"id"`
	Initiative *map[string]any `json:"initiative,omitempty"`
	InitiativeId *string `json:"initiativeId,omitempty"`
	InitiativeUpdate *map[string]any `json:"initiativeUpdate,omitempty"`
	InitiativeUpdateId *string `json:"initiativeUpdateId,omitempty"`
	IsArtificialAgentSessionRoot bool `json:"isArtificialAgentSessionRoot"`
	Issue *map[string]any `json:"issue,omitempty"`
	IssueId *string `json:"issueId,omitempty"`
	OnBehalfOf *map[string]any `json:"onBehalfOf,omitempty"`
	Parent *map[string]any `json:"parent,omitempty"`
	ParentId *string `json:"parentId,omitempty"`
	Post *map[string]any `json:"post,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	ProjectId *string `json:"projectId,omitempty"`
	ProjectUpdate *map[string]any `json:"projectUpdate,omitempty"`
	ProjectUpdateId *string `json:"projectUpdateId,omitempty"`
	QuotedText *string `json:"quotedText,omitempty"`
	ReactionData any `json:"reactionData"`
	ResolvedAt *any `json:"resolvedAt,omitempty"`
	ResolvingComment *map[string]any `json:"resolvingComment,omitempty"`
	ResolvingCommentId *string `json:"resolvingCommentId,omitempty"`
	ResolvingUser *map[string]any `json:"resolvingUser,omitempty"`
	ThreadSummary *any `json:"threadSummary,omitempty"`
	UpdatedAt any `json:"updatedAt"`
	Url string `json:"url"`
	User *map[string]any `json:"user,omitempty"`
}

// CommentUpdateData is the typed request payload for Comment.UpdateTyped.
type CommentUpdateData struct {
	Id string `json:"id"`
	SkipEditedAt *bool `json:"skip_edited_at,omitempty"`
	AgentSession *map[string]any `json:"agentSession,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Body *string `json:"body,omitempty"`
	BodyData *string `json:"bodyData,omitempty"`
	BotActor *map[string]any `json:"botActor,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	DocumentContent *map[string]any `json:"documentContent,omitempty"`
	DocumentContentId *string `json:"documentContentId,omitempty"`
	EditedAt *any `json:"editedAt,omitempty"`
	ExternalThread *map[string]any `json:"externalThread,omitempty"`
	ExternalUser *map[string]any `json:"externalUser,omitempty"`
	HideInLinear *bool `json:"hideInLinear,omitempty"`
	Initiative *map[string]any `json:"initiative,omitempty"`
	InitiativeId *string `json:"initiativeId,omitempty"`
	InitiativeUpdate *map[string]any `json:"initiativeUpdate,omitempty"`
	InitiativeUpdateId *string `json:"initiativeUpdateId,omitempty"`
	IsArtificialAgentSessionRoot *bool `json:"isArtificialAgentSessionRoot,omitempty"`
	Issue *map[string]any `json:"issue,omitempty"`
	IssueId *string `json:"issueId,omitempty"`
	OnBehalfOf *map[string]any `json:"onBehalfOf,omitempty"`
	Parent *map[string]any `json:"parent,omitempty"`
	ParentId *string `json:"parentId,omitempty"`
	Post *map[string]any `json:"post,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	ProjectId *string `json:"projectId,omitempty"`
	ProjectUpdate *map[string]any `json:"projectUpdate,omitempty"`
	ProjectUpdateId *string `json:"projectUpdateId,omitempty"`
	QuotedText *string `json:"quotedText,omitempty"`
	ReactionData *any `json:"reactionData,omitempty"`
	ResolvedAt *any `json:"resolvedAt,omitempty"`
	ResolvingComment *map[string]any `json:"resolvingComment,omitempty"`
	ResolvingCommentId *string `json:"resolvingCommentId,omitempty"`
	ResolvingUser *map[string]any `json:"resolvingUser,omitempty"`
	ThreadSummary *any `json:"threadSummary,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
	Url *string `json:"url,omitempty"`
	User *map[string]any `json:"user,omitempty"`
}

// CommentRemoveMatch is the typed request payload for Comment.RemoveTyped.
type CommentRemoveMatch struct {
	Id string `json:"id"`
}

// CreateOrJoinOrganizationResponse is the typed data model for the create_or_join_organization_response entity.
type CreateOrJoinOrganizationResponse struct {
	Organization *map[string]any `json:"organization,omitempty"`
	User *map[string]any `json:"user,omitempty"`
}

// CreateOrJoinOrganizationResponseCreateData is the typed request payload for CreateOrJoinOrganizationResponse.CreateTyped.
type CreateOrJoinOrganizationResponseCreateData struct {
	PartnerOfferToken *string `json:"partner_offer_token,omitempty"`
	SessionId *string `json:"session_id,omitempty"`
	Organization *map[string]any `json:"organization,omitempty"`
	User *map[string]any `json:"user,omitempty"`
}

// CreateOrJoinOrganizationResponseUpdateData is the typed request payload for CreateOrJoinOrganizationResponse.UpdateTyped.
type CreateOrJoinOrganizationResponseUpdateData struct {
	OrganizationId string `json:"organization_id"`
	Organization *map[string]any `json:"organization,omitempty"`
	User *map[string]any `json:"user,omitempty"`
}

// CustomView is the typed data model for the custom_view entity.
type CustomView struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Color *string `json:"color,omitempty"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	Description *string `json:"description,omitempty"`
	Facet *map[string]any `json:"facet,omitempty"`
	FeedItemFilterData *any `json:"feedItemFilterData,omitempty"`
	FilterData any `json:"filterData"`
	Icon *string `json:"icon,omitempty"`
	Id string `json:"id"`
	InitiativeFilterData *any `json:"initiativeFilterData,omitempty"`
	ModelName string `json:"modelName"`
	Name string `json:"name"`
	Organization *map[string]any `json:"organization,omitempty"`
	OrganizationViewPreferences *map[string]any `json:"organizationViewPreferences,omitempty"`
	Owner *map[string]any `json:"owner,omitempty"`
	ProjectFilterData *any `json:"projectFilterData,omitempty"`
	Shared bool `json:"shared"`
	SlugId string `json:"slugId"`
	Team *map[string]any `json:"team,omitempty"`
	UpdatedAt any `json:"updatedAt"`
	UpdatedBy *map[string]any `json:"updatedBy,omitempty"`
	UserViewPreferences *map[string]any `json:"userViewPreferences,omitempty"`
}

// CustomViewLoadMatch is the typed request payload for CustomView.LoadTyped.
type CustomViewLoadMatch struct {
	Id string `json:"id"`
}

// CustomViewListMatch is the typed request payload for CustomView.ListTyped.
type CustomViewListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// CustomViewCreateData is the typed request payload for CustomView.CreateTyped.
type CustomViewCreateData struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Color *string `json:"color,omitempty"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	Description *string `json:"description,omitempty"`
	Facet *map[string]any `json:"facet,omitempty"`
	FeedItemFilterData *any `json:"feedItemFilterData,omitempty"`
	FilterData any `json:"filterData"`
	Icon *string `json:"icon,omitempty"`
	Id string `json:"id"`
	InitiativeFilterData *any `json:"initiativeFilterData,omitempty"`
	ModelName string `json:"modelName"`
	Name string `json:"name"`
	Organization *map[string]any `json:"organization,omitempty"`
	OrganizationViewPreferences *map[string]any `json:"organizationViewPreferences,omitempty"`
	Owner *map[string]any `json:"owner,omitempty"`
	ProjectFilterData *any `json:"projectFilterData,omitempty"`
	Shared bool `json:"shared"`
	SlugId string `json:"slugId"`
	Team *map[string]any `json:"team,omitempty"`
	UpdatedAt any `json:"updatedAt"`
	UpdatedBy *map[string]any `json:"updatedBy,omitempty"`
	UserViewPreferences *map[string]any `json:"userViewPreferences,omitempty"`
}

// CustomViewUpdateData is the typed request payload for CustomView.UpdateTyped.
type CustomViewUpdateData struct {
	Id string `json:"id"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Color *string `json:"color,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Creator *map[string]any `json:"creator,omitempty"`
	Description *string `json:"description,omitempty"`
	Facet *map[string]any `json:"facet,omitempty"`
	FeedItemFilterData *any `json:"feedItemFilterData,omitempty"`
	FilterData *any `json:"filterData,omitempty"`
	Icon *string `json:"icon,omitempty"`
	InitiativeFilterData *any `json:"initiativeFilterData,omitempty"`
	ModelName *string `json:"modelName,omitempty"`
	Name *string `json:"name,omitempty"`
	Organization *map[string]any `json:"organization,omitempty"`
	OrganizationViewPreferences *map[string]any `json:"organizationViewPreferences,omitempty"`
	Owner *map[string]any `json:"owner,omitempty"`
	ProjectFilterData *any `json:"projectFilterData,omitempty"`
	Shared *bool `json:"shared,omitempty"`
	SlugId *string `json:"slugId,omitempty"`
	Team *map[string]any `json:"team,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
	UpdatedBy *map[string]any `json:"updatedBy,omitempty"`
	UserViewPreferences *map[string]any `json:"userViewPreferences,omitempty"`
}

// CustomViewRemoveMatch is the typed request payload for CustomView.RemoveTyped.
type CustomViewRemoveMatch struct {
	Id string `json:"id"`
}

// Customer is the typed data model for the customer entity.
type Customer struct {
	ApproximateNeedCount float64 `json:"approximateNeedCount"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Domains string `json:"domains"`
	ExternalIds string `json:"externalIds"`
	Id string `json:"id"`
	Integration *map[string]any `json:"integration,omitempty"`
	LogoUrl *string `json:"logoUrl,omitempty"`
	MainSourceId *string `json:"mainSourceId,omitempty"`
	Name string `json:"name"`
	Owner *map[string]any `json:"owner,omitempty"`
	Revenue *int `json:"revenue,omitempty"`
	Size *float64 `json:"size,omitempty"`
	SlackChannelId *string `json:"slackChannelId,omitempty"`
	SlugId string `json:"slugId"`
	Status *map[string]any `json:"status,omitempty"`
	Tier *map[string]any `json:"tier,omitempty"`
	UpdatedAt any `json:"updatedAt"`
	Url string `json:"url"`
}

// CustomerLoadMatch is the typed request payload for Customer.LoadTyped.
type CustomerLoadMatch struct {
	Id string `json:"id"`
}

// CustomerListMatch is the typed request payload for Customer.ListTyped.
type CustomerListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// CustomerCreateData is the typed request payload for Customer.CreateTyped.
type CustomerCreateData struct {
	ApproximateNeedCount float64 `json:"approximateNeedCount"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Domains string `json:"domains"`
	ExternalIds string `json:"externalIds"`
	Id string `json:"id"`
	Integration *map[string]any `json:"integration,omitempty"`
	LogoUrl *string `json:"logoUrl,omitempty"`
	MainSourceId *string `json:"mainSourceId,omitempty"`
	Name string `json:"name"`
	Owner *map[string]any `json:"owner,omitempty"`
	Revenue *int `json:"revenue,omitempty"`
	Size *float64 `json:"size,omitempty"`
	SlackChannelId *string `json:"slackChannelId,omitempty"`
	SlugId string `json:"slugId"`
	Status *map[string]any `json:"status,omitempty"`
	Tier *map[string]any `json:"tier,omitempty"`
	UpdatedAt any `json:"updatedAt"`
	Url string `json:"url"`
}

// CustomerUpdateData is the typed request payload for Customer.UpdateTyped.
type CustomerUpdateData struct {
	Id string `json:"id"`
	ApproximateNeedCount *float64 `json:"approximateNeedCount,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Domains *string `json:"domains,omitempty"`
	ExternalIds *string `json:"externalIds,omitempty"`
	Integration *map[string]any `json:"integration,omitempty"`
	LogoUrl *string `json:"logoUrl,omitempty"`
	MainSourceId *string `json:"mainSourceId,omitempty"`
	Name *string `json:"name,omitempty"`
	Owner *map[string]any `json:"owner,omitempty"`
	Revenue *int `json:"revenue,omitempty"`
	Size *float64 `json:"size,omitempty"`
	SlackChannelId *string `json:"slackChannelId,omitempty"`
	SlugId *string `json:"slugId,omitempty"`
	Status *map[string]any `json:"status,omitempty"`
	Tier *map[string]any `json:"tier,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
	Url *string `json:"url,omitempty"`
}

// CustomerRemoveMatch is the typed request payload for Customer.RemoveTyped.
type CustomerRemoveMatch struct {
	Id string `json:"id"`
}

// CustomerNeed is the typed data model for the customer_need entity.
type CustomerNeed struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Attachment *map[string]any `json:"attachment,omitempty"`
	Body *string `json:"body,omitempty"`
	BodyData *string `json:"bodyData,omitempty"`
	Comment *map[string]any `json:"comment,omitempty"`
	Content *string `json:"content,omitempty"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	Customer *map[string]any `json:"customer,omitempty"`
	Id string `json:"id"`
	Issue *map[string]any `json:"issue,omitempty"`
	OriginalIssue *map[string]any `json:"originalIssue,omitempty"`
	Priority float64 `json:"priority"`
	Project *map[string]any `json:"project,omitempty"`
	ProjectAttachment *map[string]any `json:"projectAttachment,omitempty"`
	UpdatedAt any `json:"updatedAt"`
	Url *string `json:"url,omitempty"`
}

// CustomerNeedLoadMatch is the typed request payload for CustomerNeed.LoadTyped.
type CustomerNeedLoadMatch struct {
	Hash *string `json:"hash,omitempty"`
	Id *string `json:"id,omitempty"`
}

// CustomerNeedListMatch is the typed request payload for CustomerNeed.ListTyped.
type CustomerNeedListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// CustomerNeedCreateData is the typed request payload for CustomerNeed.CreateTyped.
type CustomerNeedCreateData struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Attachment *map[string]any `json:"attachment,omitempty"`
	Body *string `json:"body,omitempty"`
	BodyData *string `json:"bodyData,omitempty"`
	Comment *map[string]any `json:"comment,omitempty"`
	Content *string `json:"content,omitempty"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	Customer *map[string]any `json:"customer,omitempty"`
	Id string `json:"id"`
	Issue *map[string]any `json:"issue,omitempty"`
	OriginalIssue *map[string]any `json:"originalIssue,omitempty"`
	Priority float64 `json:"priority"`
	Project *map[string]any `json:"project,omitempty"`
	ProjectAttachment *map[string]any `json:"projectAttachment,omitempty"`
	UpdatedAt any `json:"updatedAt"`
	Url *string `json:"url,omitempty"`
}

// CustomerNeedUpdateData is the typed request payload for CustomerNeed.UpdateTyped.
type CustomerNeedUpdateData struct {
	ClearAttachment *bool `json:"clear_attachment,omitempty"`
	Id string `json:"id"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Attachment *map[string]any `json:"attachment,omitempty"`
	Body *string `json:"body,omitempty"`
	BodyData *string `json:"bodyData,omitempty"`
	Comment *map[string]any `json:"comment,omitempty"`
	Content *string `json:"content,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Creator *map[string]any `json:"creator,omitempty"`
	Customer *map[string]any `json:"customer,omitempty"`
	Issue *map[string]any `json:"issue,omitempty"`
	OriginalIssue *map[string]any `json:"originalIssue,omitempty"`
	Priority *float64 `json:"priority,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	ProjectAttachment *map[string]any `json:"projectAttachment,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
	Url *string `json:"url,omitempty"`
}

// CustomerNeedRemoveMatch is the typed request payload for CustomerNeed.RemoveTyped.
type CustomerNeedRemoveMatch struct {
	Id string `json:"id"`
	KeepAttachment *bool `json:"keep_attachment,omitempty"`
}

// CustomerStatus is the typed data model for the customer_status entity.
type CustomerStatus struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Color string `json:"color"`
	CreatedAt any `json:"createdAt"`
	Description *string `json:"description,omitempty"`
	DisplayName string `json:"displayName"`
	Id string `json:"id"`
	Name string `json:"name"`
	Position float64 `json:"position"`
	UpdatedAt any `json:"updatedAt"`
}

// CustomerStatusLoadMatch is the typed request payload for CustomerStatus.LoadTyped.
type CustomerStatusLoadMatch struct {
	Id string `json:"id"`
}

// CustomerStatusListMatch is the typed request payload for CustomerStatus.ListTyped.
type CustomerStatusListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// CustomerStatusCreateData is the typed request payload for CustomerStatus.CreateTyped.
type CustomerStatusCreateData struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Color string `json:"color"`
	CreatedAt any `json:"createdAt"`
	Description *string `json:"description,omitempty"`
	DisplayName string `json:"displayName"`
	Id string `json:"id"`
	Name string `json:"name"`
	Position float64 `json:"position"`
	UpdatedAt any `json:"updatedAt"`
}

// CustomerStatusUpdateData is the typed request payload for CustomerStatus.UpdateTyped.
type CustomerStatusUpdateData struct {
	Id string `json:"id"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Color *string `json:"color,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Description *string `json:"description,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	Name *string `json:"name,omitempty"`
	Position *float64 `json:"position,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
}

// CustomerStatusRemoveMatch is the typed request payload for CustomerStatus.RemoveTyped.
type CustomerStatusRemoveMatch struct {
	Id string `json:"id"`
}

// CustomerTier is the typed data model for the customer_tier entity.
type CustomerTier struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Color string `json:"color"`
	CreatedAt any `json:"createdAt"`
	Description *string `json:"description,omitempty"`
	DisplayName string `json:"displayName"`
	Id string `json:"id"`
	Name string `json:"name"`
	Position float64 `json:"position"`
	UpdatedAt any `json:"updatedAt"`
}

// CustomerTierLoadMatch is the typed request payload for CustomerTier.LoadTyped.
type CustomerTierLoadMatch struct {
	Id string `json:"id"`
}

// CustomerTierListMatch is the typed request payload for CustomerTier.ListTyped.
type CustomerTierListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// CustomerTierCreateData is the typed request payload for CustomerTier.CreateTyped.
type CustomerTierCreateData struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Color string `json:"color"`
	CreatedAt any `json:"createdAt"`
	Description *string `json:"description,omitempty"`
	DisplayName string `json:"displayName"`
	Id string `json:"id"`
	Name string `json:"name"`
	Position float64 `json:"position"`
	UpdatedAt any `json:"updatedAt"`
}

// CustomerTierUpdateData is the typed request payload for CustomerTier.UpdateTyped.
type CustomerTierUpdateData struct {
	Id string `json:"id"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Color *string `json:"color,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Description *string `json:"description,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	Name *string `json:"name,omitempty"`
	Position *float64 `json:"position,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
}

// CustomerTierRemoveMatch is the typed request payload for CustomerTier.RemoveTyped.
type CustomerTierRemoveMatch struct {
	Id string `json:"id"`
}

// Cycle is the typed data model for the cycle entity.
type Cycle struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	AutoArchivedAt *any `json:"autoArchivedAt,omitempty"`
	CompletedAt *any `json:"completedAt,omitempty"`
	CompletedIssueCountHistory float64 `json:"completedIssueCountHistory"`
	CompletedScopeHistory float64 `json:"completedScopeHistory"`
	CreatedAt any `json:"createdAt"`
	CurrentProgress any `json:"currentProgress"`
	Description *string `json:"description,omitempty"`
	EndsAt any `json:"endsAt"`
	Id string `json:"id"`
	InProgressScopeHistory float64 `json:"inProgressScopeHistory"`
	InheritedFrom *map[string]any `json:"inheritedFrom,omitempty"`
	IsActive bool `json:"isActive"`
	IsFuture bool `json:"isFuture"`
	IsNext bool `json:"isNext"`
	IsPast bool `json:"isPast"`
	IsPrevious bool `json:"isPrevious"`
	IssueCountHistory float64 `json:"issueCountHistory"`
	Name *string `json:"name,omitempty"`
	Number float64 `json:"number"`
	Progress float64 `json:"progress"`
	ProgressHistory any `json:"progressHistory"`
	ScopeHistory float64 `json:"scopeHistory"`
	StartsAt any `json:"startsAt"`
	Team *map[string]any `json:"team,omitempty"`
	UpdatedAt any `json:"updatedAt"`
}

// CycleLoadMatch is the typed request payload for Cycle.LoadTyped.
type CycleLoadMatch struct {
	Id string `json:"id"`
}

// CycleListMatch is the typed request payload for Cycle.ListTyped.
type CycleListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// CycleCreateData is the typed request payload for Cycle.CreateTyped.
type CycleCreateData struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	AutoArchivedAt *any `json:"autoArchivedAt,omitempty"`
	CompletedAt *any `json:"completedAt,omitempty"`
	CompletedIssueCountHistory float64 `json:"completedIssueCountHistory"`
	CompletedScopeHistory float64 `json:"completedScopeHistory"`
	CreatedAt any `json:"createdAt"`
	CurrentProgress any `json:"currentProgress"`
	Description *string `json:"description,omitempty"`
	EndsAt any `json:"endsAt"`
	Id string `json:"id"`
	InProgressScopeHistory float64 `json:"inProgressScopeHistory"`
	InheritedFrom *map[string]any `json:"inheritedFrom,omitempty"`
	IsActive bool `json:"isActive"`
	IsFuture bool `json:"isFuture"`
	IsNext bool `json:"isNext"`
	IsPast bool `json:"isPast"`
	IsPrevious bool `json:"isPrevious"`
	IssueCountHistory float64 `json:"issueCountHistory"`
	Name *string `json:"name,omitempty"`
	Number float64 `json:"number"`
	Progress float64 `json:"progress"`
	ProgressHistory any `json:"progressHistory"`
	ScopeHistory float64 `json:"scopeHistory"`
	StartsAt any `json:"startsAt"`
	Team *map[string]any `json:"team,omitempty"`
	UpdatedAt any `json:"updatedAt"`
}

// CycleUpdateData is the typed request payload for Cycle.UpdateTyped.
type CycleUpdateData struct {
	Id string `json:"id"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	AutoArchivedAt *any `json:"autoArchivedAt,omitempty"`
	CompletedAt *any `json:"completedAt,omitempty"`
	CompletedIssueCountHistory *float64 `json:"completedIssueCountHistory,omitempty"`
	CompletedScopeHistory *float64 `json:"completedScopeHistory,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	CurrentProgress *any `json:"currentProgress,omitempty"`
	Description *string `json:"description,omitempty"`
	EndsAt *any `json:"endsAt,omitempty"`
	InProgressScopeHistory *float64 `json:"inProgressScopeHistory,omitempty"`
	InheritedFrom *map[string]any `json:"inheritedFrom,omitempty"`
	IsActive *bool `json:"isActive,omitempty"`
	IsFuture *bool `json:"isFuture,omitempty"`
	IsNext *bool `json:"isNext,omitempty"`
	IsPast *bool `json:"isPast,omitempty"`
	IsPrevious *bool `json:"isPrevious,omitempty"`
	IssueCountHistory *float64 `json:"issueCountHistory,omitempty"`
	Name *string `json:"name,omitempty"`
	Number *float64 `json:"number,omitempty"`
	Progress *float64 `json:"progress,omitempty"`
	ProgressHistory *any `json:"progressHistory,omitempty"`
	ScopeHistory *float64 `json:"scopeHistory,omitempty"`
	StartsAt *any `json:"startsAt,omitempty"`
	Team *map[string]any `json:"team,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
}

// Diff is the typed data model for the diff entity.
type Diff struct {
	Additions float64 `json:"additions"`
	AgentSession *map[string]any `json:"agentSession,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	ContentHash string `json:"contentHash"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	Deletions float64 `json:"deletions"`
	FileCount float64 `json:"fileCount"`
	Id string `json:"id"`
	Organization *map[string]any `json:"organization,omitempty"`
	PullRequest *map[string]any `json:"pullRequest,omitempty"`
	SlugId string `json:"slugId"`
	Truncated bool `json:"truncated"`
	UpdatedAt any `json:"updatedAt"`
}

// DiffLoadMatch is the typed request payload for Diff.LoadTyped.
type DiffLoadMatch struct {
	Id string `json:"id"`
}

// Document is the typed data model for the document entity.
type Document struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Color *string `json:"color,omitempty"`
	Content *string `json:"content,omitempty"`
	ContentState *string `json:"contentState,omitempty"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	Cycle *map[string]any `json:"cycle,omitempty"`
	DocumentContentId *string `json:"documentContentId,omitempty"`
	HiddenAt *any `json:"hiddenAt,omitempty"`
	Icon *string `json:"icon,omitempty"`
	Id string `json:"id"`
	Initiative *map[string]any `json:"initiative,omitempty"`
	Issue *map[string]any `json:"issue,omitempty"`
	LastAppliedTemplate *map[string]any `json:"lastAppliedTemplate,omitempty"`
	Owner *map[string]any `json:"owner,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	Release *map[string]any `json:"release,omitempty"`
	SlugId string `json:"slugId"`
	SortOrder float64 `json:"sortOrder"`
	Summary *string `json:"summary,omitempty"`
	Team *map[string]any `json:"team,omitempty"`
	Title string `json:"title"`
	Trashed *bool `json:"trashed,omitempty"`
	UpdatedAt any `json:"updatedAt"`
	UpdatedBy *map[string]any `json:"updatedBy,omitempty"`
	Url string `json:"url"`
}

// DocumentLoadMatch is the typed request payload for Document.LoadTyped.
type DocumentLoadMatch struct {
	Id string `json:"id"`
}

// DocumentListMatch is the typed request payload for Document.ListTyped.
type DocumentListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// DocumentCreateData is the typed request payload for Document.CreateTyped.
type DocumentCreateData struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Color *string `json:"color,omitempty"`
	Content *string `json:"content,omitempty"`
	ContentState *string `json:"contentState,omitempty"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	Cycle *map[string]any `json:"cycle,omitempty"`
	DocumentContentId *string `json:"documentContentId,omitempty"`
	HiddenAt *any `json:"hiddenAt,omitempty"`
	Icon *string `json:"icon,omitempty"`
	Id string `json:"id"`
	Initiative *map[string]any `json:"initiative,omitempty"`
	Issue *map[string]any `json:"issue,omitempty"`
	LastAppliedTemplate *map[string]any `json:"lastAppliedTemplate,omitempty"`
	Owner *map[string]any `json:"owner,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	Release *map[string]any `json:"release,omitempty"`
	SlugId string `json:"slugId"`
	SortOrder float64 `json:"sortOrder"`
	Summary *string `json:"summary,omitempty"`
	Team *map[string]any `json:"team,omitempty"`
	Title string `json:"title"`
	Trashed *bool `json:"trashed,omitempty"`
	UpdatedAt any `json:"updatedAt"`
	UpdatedBy *map[string]any `json:"updatedBy,omitempty"`
	Url string `json:"url"`
}

// DocumentUpdateData is the typed request payload for Document.UpdateTyped.
type DocumentUpdateData struct {
	Id string `json:"id"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Color *string `json:"color,omitempty"`
	Content *string `json:"content,omitempty"`
	ContentState *string `json:"contentState,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Creator *map[string]any `json:"creator,omitempty"`
	Cycle *map[string]any `json:"cycle,omitempty"`
	DocumentContentId *string `json:"documentContentId,omitempty"`
	HiddenAt *any `json:"hiddenAt,omitempty"`
	Icon *string `json:"icon,omitempty"`
	Initiative *map[string]any `json:"initiative,omitempty"`
	Issue *map[string]any `json:"issue,omitempty"`
	LastAppliedTemplate *map[string]any `json:"lastAppliedTemplate,omitempty"`
	Owner *map[string]any `json:"owner,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	Release *map[string]any `json:"release,omitempty"`
	SlugId *string `json:"slugId,omitempty"`
	SortOrder *float64 `json:"sortOrder,omitempty"`
	Summary *string `json:"summary,omitempty"`
	Team *map[string]any `json:"team,omitempty"`
	Title *string `json:"title,omitempty"`
	Trashed *bool `json:"trashed,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
	UpdatedBy *map[string]any `json:"updatedBy,omitempty"`
	Url *string `json:"url,omitempty"`
}

// DocumentRemoveMatch is the typed request payload for Document.RemoveTyped.
type DocumentRemoveMatch struct {
	Id string `json:"id"`
}

// DocumentSearchResult is the typed data model for the document_search_result entity.
type DocumentSearchResult struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Color *string `json:"color,omitempty"`
	Content *string `json:"content,omitempty"`
	ContentState *string `json:"contentState,omitempty"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	Cycle *map[string]any `json:"cycle,omitempty"`
	DocumentContentId *string `json:"documentContentId,omitempty"`
	HiddenAt *any `json:"hiddenAt,omitempty"`
	Icon *string `json:"icon,omitempty"`
	Id string `json:"id"`
	Initiative *map[string]any `json:"initiative,omitempty"`
	Issue *map[string]any `json:"issue,omitempty"`
	LastAppliedTemplate *map[string]any `json:"lastAppliedTemplate,omitempty"`
	Metadata any `json:"metadata"`
	Owner *map[string]any `json:"owner,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	Release *map[string]any `json:"release,omitempty"`
	SlugId string `json:"slugId"`
	SortOrder float64 `json:"sortOrder"`
	Summary *string `json:"summary,omitempty"`
	Team *map[string]any `json:"team,omitempty"`
	Title string `json:"title"`
	Trashed *bool `json:"trashed,omitempty"`
	UpdatedAt any `json:"updatedAt"`
	UpdatedBy *map[string]any `json:"updatedBy,omitempty"`
	Url string `json:"url"`
}

// DocumentSearchResultListMatch is the typed request payload for DocumentSearchResult.ListTyped.
type DocumentSearchResultListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	IncludeComment *bool `json:"include_comment,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Term string `json:"term"`
}

// EmailIntakeAddress is the typed data model for the email_intake_address entity.
type EmailIntakeAddress struct {
	Address string `json:"address"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	CustomerRequestsEnabled bool `json:"customerRequestsEnabled"`
	Enabled bool `json:"enabled"`
	ForwardingEmailAddress *string `json:"forwardingEmailAddress,omitempty"`
	Id string `json:"id"`
	IssueCanceledAutoReply *string `json:"issueCanceledAutoReply,omitempty"`
	IssueCanceledAutoReplyEnabled bool `json:"issueCanceledAutoReplyEnabled"`
	IssueCompletedAutoReply *string `json:"issueCompletedAutoReply,omitempty"`
	IssueCompletedAutoReplyEnabled bool `json:"issueCompletedAutoReplyEnabled"`
	IssueCreatedAutoReply *string `json:"issueCreatedAutoReply,omitempty"`
	IssueCreatedAutoReplyEnabled bool `json:"issueCreatedAutoReplyEnabled"`
	LastUsedAt *any `json:"lastUsedAt,omitempty"`
	Organization *map[string]any `json:"organization,omitempty"`
	ReopenOnReply bool `json:"reopenOnReply"`
	RepliesEnabled bool `json:"repliesEnabled"`
	SenderName *string `json:"senderName,omitempty"`
	SesDomainIdentity *map[string]any `json:"sesDomainIdentity,omitempty"`
	Team *map[string]any `json:"team,omitempty"`
	Template *map[string]any `json:"template,omitempty"`
	Type string `json:"type"`
	UpdatedAt any `json:"updatedAt"`
	UseUserNamesInReplies bool `json:"useUserNamesInReplies"`
}

// EmailIntakeAddressLoadMatch is the typed request payload for EmailIntakeAddress.LoadTyped.
type EmailIntakeAddressLoadMatch struct {
	Id string `json:"id"`
}

// EmailIntakeAddressCreateData is the typed request payload for EmailIntakeAddress.CreateTyped.
type EmailIntakeAddressCreateData struct {
	Address string `json:"address"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	CustomerRequestsEnabled bool `json:"customerRequestsEnabled"`
	Enabled bool `json:"enabled"`
	ForwardingEmailAddress *string `json:"forwardingEmailAddress,omitempty"`
	Id string `json:"id"`
	IssueCanceledAutoReply *string `json:"issueCanceledAutoReply,omitempty"`
	IssueCanceledAutoReplyEnabled bool `json:"issueCanceledAutoReplyEnabled"`
	IssueCompletedAutoReply *string `json:"issueCompletedAutoReply,omitempty"`
	IssueCompletedAutoReplyEnabled bool `json:"issueCompletedAutoReplyEnabled"`
	IssueCreatedAutoReply *string `json:"issueCreatedAutoReply,omitempty"`
	IssueCreatedAutoReplyEnabled bool `json:"issueCreatedAutoReplyEnabled"`
	LastUsedAt *any `json:"lastUsedAt,omitempty"`
	Organization *map[string]any `json:"organization,omitempty"`
	ReopenOnReply bool `json:"reopenOnReply"`
	RepliesEnabled bool `json:"repliesEnabled"`
	SenderName *string `json:"senderName,omitempty"`
	SesDomainIdentity *map[string]any `json:"sesDomainIdentity,omitempty"`
	Team *map[string]any `json:"team,omitempty"`
	Template *map[string]any `json:"template,omitempty"`
	Type string `json:"type"`
	UpdatedAt any `json:"updatedAt"`
	UseUserNamesInReplies bool `json:"useUserNamesInReplies"`
}

// EmailIntakeAddressUpdateData is the typed request payload for EmailIntakeAddress.UpdateTyped.
type EmailIntakeAddressUpdateData struct {
	Id string `json:"id"`
	Address *string `json:"address,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Creator *map[string]any `json:"creator,omitempty"`
	CustomerRequestsEnabled *bool `json:"customerRequestsEnabled,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	ForwardingEmailAddress *string `json:"forwardingEmailAddress,omitempty"`
	IssueCanceledAutoReply *string `json:"issueCanceledAutoReply,omitempty"`
	IssueCanceledAutoReplyEnabled *bool `json:"issueCanceledAutoReplyEnabled,omitempty"`
	IssueCompletedAutoReply *string `json:"issueCompletedAutoReply,omitempty"`
	IssueCompletedAutoReplyEnabled *bool `json:"issueCompletedAutoReplyEnabled,omitempty"`
	IssueCreatedAutoReply *string `json:"issueCreatedAutoReply,omitempty"`
	IssueCreatedAutoReplyEnabled *bool `json:"issueCreatedAutoReplyEnabled,omitempty"`
	LastUsedAt *any `json:"lastUsedAt,omitempty"`
	Organization *map[string]any `json:"organization,omitempty"`
	ReopenOnReply *bool `json:"reopenOnReply,omitempty"`
	RepliesEnabled *bool `json:"repliesEnabled,omitempty"`
	SenderName *string `json:"senderName,omitempty"`
	SesDomainIdentity *map[string]any `json:"sesDomainIdentity,omitempty"`
	Team *map[string]any `json:"team,omitempty"`
	Template *map[string]any `json:"template,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
	UseUserNamesInReplies *bool `json:"useUserNamesInReplies,omitempty"`
}

// EmailIntakeAddressRemoveMatch is the typed request payload for EmailIntakeAddress.RemoveTyped.
type EmailIntakeAddressRemoveMatch struct {
	Id string `json:"id"`
}

// EmailUserAccountAuthChallengeResponse is the typed data model for the email_user_account_auth_challenge_response entity.
type EmailUserAccountAuthChallengeResponse struct {
	AuthType string `json:"authType"`
	Success bool `json:"success"`
}

// EmailUserAccountAuthChallengeResponseCreateData is the typed request payload for EmailUserAccountAuthChallengeResponse.CreateTyped.
type EmailUserAccountAuthChallengeResponseCreateData struct {
	AuthType string `json:"authType"`
	Success bool `json:"success"`
}

// Emoji is the typed data model for the emoji entity.
type Emoji struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	Id string `json:"id"`
	Name string `json:"name"`
	Organization *map[string]any `json:"organization,omitempty"`
	Source string `json:"source"`
	UpdatedAt any `json:"updatedAt"`
	Url string `json:"url"`
}

// EmojiLoadMatch is the typed request payload for Emoji.LoadTyped.
type EmojiLoadMatch struct {
	Id string `json:"id"`
}

// EmojiListMatch is the typed request payload for Emoji.ListTyped.
type EmojiListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// EmojiCreateData is the typed request payload for Emoji.CreateTyped.
type EmojiCreateData struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	Id string `json:"id"`
	Name string `json:"name"`
	Organization *map[string]any `json:"organization,omitempty"`
	Source string `json:"source"`
	UpdatedAt any `json:"updatedAt"`
	Url string `json:"url"`
}

// EmojiRemoveMatch is the typed request payload for Emoji.RemoveTyped.
type EmojiRemoveMatch struct {
	Id string `json:"id"`
}

// EntityExternalLink is the typed data model for the entity_external_link entity.
type EntityExternalLink struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	Id string `json:"id"`
	Initiative *map[string]any `json:"initiative,omitempty"`
	Label string `json:"label"`
	Project *map[string]any `json:"project,omitempty"`
	SortOrder float64 `json:"sortOrder"`
	UpdatedAt any `json:"updatedAt"`
	Url string `json:"url"`
}

// EntityExternalLinkLoadMatch is the typed request payload for EntityExternalLink.LoadTyped.
type EntityExternalLinkLoadMatch struct {
	Id string `json:"id"`
}

// EntityExternalLinkCreateData is the typed request payload for EntityExternalLink.CreateTyped.
type EntityExternalLinkCreateData struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	Id string `json:"id"`
	Initiative *map[string]any `json:"initiative,omitempty"`
	Label string `json:"label"`
	Project *map[string]any `json:"project,omitempty"`
	SortOrder float64 `json:"sortOrder"`
	UpdatedAt any `json:"updatedAt"`
	Url string `json:"url"`
}

// EntityExternalLinkUpdateData is the typed request payload for EntityExternalLink.UpdateTyped.
type EntityExternalLinkUpdateData struct {
	Id string `json:"id"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Creator *map[string]any `json:"creator,omitempty"`
	Initiative *map[string]any `json:"initiative,omitempty"`
	Label *string `json:"label,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	SortOrder *float64 `json:"sortOrder,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
	Url *string `json:"url,omitempty"`
}

// EntityExternalLinkRemoveMatch is the typed request payload for EntityExternalLink.RemoveTyped.
type EntityExternalLinkRemoveMatch struct {
	Id string `json:"id"`
}

// ExternalUser is the typed data model for the external_user entity.
type ExternalUser struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	AvatarUrl *string `json:"avatarUrl,omitempty"`
	CreatedAt any `json:"createdAt"`
	DisplayName string `json:"displayName"`
	Email *string `json:"email,omitempty"`
	Id string `json:"id"`
	LastSeen *any `json:"lastSeen,omitempty"`
	Name string `json:"name"`
	Organization *map[string]any `json:"organization,omitempty"`
	UpdatedAt any `json:"updatedAt"`
}

// ExternalUserLoadMatch is the typed request payload for ExternalUser.LoadTyped.
type ExternalUserLoadMatch struct {
	Id string `json:"id"`
}

// ExternalUserListMatch is the typed request payload for ExternalUser.ListTyped.
type ExternalUserListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// Favorite is the typed data model for the favorite entity.
type Favorite struct {
	AiConversation *map[string]any `json:"aiConversation,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Color *string `json:"color,omitempty"`
	CreatedAt any `json:"createdAt"`
	CustomView *map[string]any `json:"customView,omitempty"`
	Customer *map[string]any `json:"customer,omitempty"`
	Cycle *map[string]any `json:"cycle,omitempty"`
	Dashboard *map[string]any `json:"dashboard,omitempty"`
	Detail *string `json:"detail,omitempty"`
	Document *map[string]any `json:"document,omitempty"`
	Facet *map[string]any `json:"facet,omitempty"`
	FolderName *string `json:"folderName,omitempty"`
	Icon *string `json:"icon,omitempty"`
	Id string `json:"id"`
	Initiative *map[string]any `json:"initiative,omitempty"`
	InitiativeLabel *map[string]any `json:"initiativeLabel,omitempty"`
	InitiativeTab *string `json:"initiativeTab,omitempty"`
	Issue *map[string]any `json:"issue,omitempty"`
	Label *map[string]any `json:"label,omitempty"`
	LiveFolderDefinition *any `json:"liveFolderDefinition,omitempty"`
	LiveFolderPreset *string `json:"liveFolderPreset,omitempty"`
	Owner *map[string]any `json:"owner,omitempty"`
	Parent *map[string]any `json:"parent,omitempty"`
	PipelineTab *string `json:"pipelineTab,omitempty"`
	PredefinedViewTeam *map[string]any `json:"predefinedViewTeam,omitempty"`
	PredefinedViewType *string `json:"predefinedViewType,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	ProjectLabel *map[string]any `json:"projectLabel,omitempty"`
	ProjectTab *string `json:"projectTab,omitempty"`
	ProjectTeam *map[string]any `json:"projectTeam,omitempty"`
	PullRequest *map[string]any `json:"pullRequest,omitempty"`
	Release *map[string]any `json:"release,omitempty"`
	ReleaseNote *map[string]any `json:"releaseNote,omitempty"`
	ReleasePipeline *map[string]any `json:"releasePipeline,omitempty"`
	SortOrder float64 `json:"sortOrder"`
	Team *map[string]any `json:"team,omitempty"`
	Title string `json:"title"`
	Type string `json:"type"`
	UpdatedAt any `json:"updatedAt"`
	Url *string `json:"url,omitempty"`
	User *map[string]any `json:"user,omitempty"`
	WorkflowDefinition *map[string]any `json:"workflowDefinition,omitempty"`
}

// FavoriteLoadMatch is the typed request payload for Favorite.LoadTyped.
type FavoriteLoadMatch struct {
	Id string `json:"id"`
}

// FavoriteListMatch is the typed request payload for Favorite.ListTyped.
type FavoriteListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// FavoriteCreateData is the typed request payload for Favorite.CreateTyped.
type FavoriteCreateData struct {
	AiConversation *map[string]any `json:"aiConversation,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Color *string `json:"color,omitempty"`
	CreatedAt any `json:"createdAt"`
	CustomView *map[string]any `json:"customView,omitempty"`
	Customer *map[string]any `json:"customer,omitempty"`
	Cycle *map[string]any `json:"cycle,omitempty"`
	Dashboard *map[string]any `json:"dashboard,omitempty"`
	Detail *string `json:"detail,omitempty"`
	Document *map[string]any `json:"document,omitempty"`
	Facet *map[string]any `json:"facet,omitempty"`
	FolderName *string `json:"folderName,omitempty"`
	Icon *string `json:"icon,omitempty"`
	Id string `json:"id"`
	Initiative *map[string]any `json:"initiative,omitempty"`
	InitiativeLabel *map[string]any `json:"initiativeLabel,omitempty"`
	InitiativeTab *string `json:"initiativeTab,omitempty"`
	Issue *map[string]any `json:"issue,omitempty"`
	Label *map[string]any `json:"label,omitempty"`
	LiveFolderDefinition *any `json:"liveFolderDefinition,omitempty"`
	LiveFolderPreset *string `json:"liveFolderPreset,omitempty"`
	Owner *map[string]any `json:"owner,omitempty"`
	Parent *map[string]any `json:"parent,omitempty"`
	PipelineTab *string `json:"pipelineTab,omitempty"`
	PredefinedViewTeam *map[string]any `json:"predefinedViewTeam,omitempty"`
	PredefinedViewType *string `json:"predefinedViewType,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	ProjectLabel *map[string]any `json:"projectLabel,omitempty"`
	ProjectTab *string `json:"projectTab,omitempty"`
	ProjectTeam *map[string]any `json:"projectTeam,omitempty"`
	PullRequest *map[string]any `json:"pullRequest,omitempty"`
	Release *map[string]any `json:"release,omitempty"`
	ReleaseNote *map[string]any `json:"releaseNote,omitempty"`
	ReleasePipeline *map[string]any `json:"releasePipeline,omitempty"`
	SortOrder float64 `json:"sortOrder"`
	Team *map[string]any `json:"team,omitempty"`
	Title string `json:"title"`
	Type string `json:"type"`
	UpdatedAt any `json:"updatedAt"`
	Url *string `json:"url,omitempty"`
	User *map[string]any `json:"user,omitempty"`
	WorkflowDefinition *map[string]any `json:"workflowDefinition,omitempty"`
}

// FavoriteUpdateData is the typed request payload for Favorite.UpdateTyped.
type FavoriteUpdateData struct {
	Id string `json:"id"`
	AiConversation *map[string]any `json:"aiConversation,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Color *string `json:"color,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	CustomView *map[string]any `json:"customView,omitempty"`
	Customer *map[string]any `json:"customer,omitempty"`
	Cycle *map[string]any `json:"cycle,omitempty"`
	Dashboard *map[string]any `json:"dashboard,omitempty"`
	Detail *string `json:"detail,omitempty"`
	Document *map[string]any `json:"document,omitempty"`
	Facet *map[string]any `json:"facet,omitempty"`
	FolderName *string `json:"folderName,omitempty"`
	Icon *string `json:"icon,omitempty"`
	Initiative *map[string]any `json:"initiative,omitempty"`
	InitiativeLabel *map[string]any `json:"initiativeLabel,omitempty"`
	InitiativeTab *string `json:"initiativeTab,omitempty"`
	Issue *map[string]any `json:"issue,omitempty"`
	Label *map[string]any `json:"label,omitempty"`
	LiveFolderDefinition *any `json:"liveFolderDefinition,omitempty"`
	LiveFolderPreset *string `json:"liveFolderPreset,omitempty"`
	Owner *map[string]any `json:"owner,omitempty"`
	Parent *map[string]any `json:"parent,omitempty"`
	PipelineTab *string `json:"pipelineTab,omitempty"`
	PredefinedViewTeam *map[string]any `json:"predefinedViewTeam,omitempty"`
	PredefinedViewType *string `json:"predefinedViewType,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	ProjectLabel *map[string]any `json:"projectLabel,omitempty"`
	ProjectTab *string `json:"projectTab,omitempty"`
	ProjectTeam *map[string]any `json:"projectTeam,omitempty"`
	PullRequest *map[string]any `json:"pullRequest,omitempty"`
	Release *map[string]any `json:"release,omitempty"`
	ReleaseNote *map[string]any `json:"releaseNote,omitempty"`
	ReleasePipeline *map[string]any `json:"releasePipeline,omitempty"`
	SortOrder *float64 `json:"sortOrder,omitempty"`
	Team *map[string]any `json:"team,omitempty"`
	Title *string `json:"title,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
	Url *string `json:"url,omitempty"`
	User *map[string]any `json:"user,omitempty"`
	WorkflowDefinition *map[string]any `json:"workflowDefinition,omitempty"`
}

// FavoriteRemoveMatch is the typed request payload for Favorite.RemoveTyped.
type FavoriteRemoveMatch struct {
	Id string `json:"id"`
}

// GitAutomationState is the typed data model for the git_automation_state entity.
type GitAutomationState struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Event string `json:"event"`
	Id string `json:"id"`
	State *map[string]any `json:"state,omitempty"`
	TargetBranch *map[string]any `json:"targetBranch,omitempty"`
	Team *map[string]any `json:"team,omitempty"`
	UpdatedAt any `json:"updatedAt"`
}

// GitAutomationStateCreateData is the typed request payload for GitAutomationState.CreateTyped.
type GitAutomationStateCreateData struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Event string `json:"event"`
	Id string `json:"id"`
	State *map[string]any `json:"state,omitempty"`
	TargetBranch *map[string]any `json:"targetBranch,omitempty"`
	Team *map[string]any `json:"team,omitempty"`
	UpdatedAt any `json:"updatedAt"`
}

// GitAutomationStateUpdateData is the typed request payload for GitAutomationState.UpdateTyped.
type GitAutomationStateUpdateData struct {
	Id string `json:"id"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Event *string `json:"event,omitempty"`
	State *map[string]any `json:"state,omitempty"`
	TargetBranch *map[string]any `json:"targetBranch,omitempty"`
	Team *map[string]any `json:"team,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
}

// GitAutomationStateRemoveMatch is the typed request payload for GitAutomationState.RemoveTyped.
type GitAutomationStateRemoveMatch struct {
	Id string `json:"id"`
}

// GitAutomationTargetBranch is the typed data model for the git_automation_target_branch entity.
type GitAutomationTargetBranch struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	BranchPattern string `json:"branchPattern"`
	CreatedAt any `json:"createdAt"`
	Id string `json:"id"`
	IsRegex bool `json:"isRegex"`
	Team *map[string]any `json:"team,omitempty"`
	UpdatedAt any `json:"updatedAt"`
}

// GitAutomationTargetBranchCreateData is the typed request payload for GitAutomationTargetBranch.CreateTyped.
type GitAutomationTargetBranchCreateData struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	BranchPattern string `json:"branchPattern"`
	CreatedAt any `json:"createdAt"`
	Id string `json:"id"`
	IsRegex bool `json:"isRegex"`
	Team *map[string]any `json:"team,omitempty"`
	UpdatedAt any `json:"updatedAt"`
}

// GitAutomationTargetBranchUpdateData is the typed request payload for GitAutomationTargetBranch.UpdateTyped.
type GitAutomationTargetBranchUpdateData struct {
	Id string `json:"id"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	BranchPattern *string `json:"branchPattern,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	IsRegex *bool `json:"isRegex,omitempty"`
	Team *map[string]any `json:"team,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
}

// GitAutomationTargetBranchRemoveMatch is the typed request payload for GitAutomationTargetBranch.RemoveTyped.
type GitAutomationTargetBranchRemoveMatch struct {
	Id string `json:"id"`
}

// GitHubIntegrationConnectDetail is the typed data model for the git_hub_integration_connect_detail entity.
type GitHubIntegrationConnectDetail struct {
	LostRepositoryNames *string `json:"lostRepositoryNames,omitempty"`
}

// GitHubIntegrationConnectDetailCreateData is the typed request payload for GitHubIntegrationConnectDetail.CreateTyped.
type GitHubIntegrationConnectDetailCreateData struct {
	Code *string `json:"code,omitempty"`
	RedirectUri *string `json:"redirect_uri,omitempty"`
	GithubUrl *string `json:"github_url,omitempty"`
	OrganizationName *string `json:"organization_name,omitempty"`
	AccessToken *string `json:"access_token,omitempty"`
	ExpiresAt *string `json:"expires_at,omitempty"`
	GitlabUrl *string `json:"gitlab_url,omitempty"`
	Readonly *bool `json:"readonly,omitempty"`
	ValidationProjectPath *string `json:"validation_project_path,omitempty"`
	LostRepositoryNames *string `json:"lostRepositoryNames,omitempty"`
}

// GitHubIntegrationConnectDetailUpdateData is the typed request payload for GitHubIntegrationConnectDetail.UpdateTyped.
type GitHubIntegrationConnectDetailUpdateData struct {
	Code *string `json:"code,omitempty"`
	ProjectId *string `json:"project_id,omitempty"`
	RedirectUri *string `json:"redirect_uri,omitempty"`
	Service *string `json:"service,omitempty"`
	CustomViewId *string `json:"custom_view_id,omitempty"`
	InitiativeId *string `json:"initiative_id,omitempty"`
	ShouldUseV2Auth *bool `json:"should_use_v2_auth,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	IntegrationId *string `json:"integration_id,omitempty"`
	LostRepositoryNames *string `json:"lostRepositoryNames,omitempty"`
}

// Initiative is the typed data model for the initiative entity.
type Initiative struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CanceledAt *any `json:"canceledAt,omitempty"`
	Color *string `json:"color,omitempty"`
	CompletedAt *any `json:"completedAt,omitempty"`
	Content *string `json:"content,omitempty"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	Description *string `json:"description,omitempty"`
	DocumentContent *map[string]any `json:"documentContent,omitempty"`
	FrequencyResolution string `json:"frequencyResolution"`
	Health *string `json:"health,omitempty"`
	HealthUpdatedAt *any `json:"healthUpdatedAt,omitempty"`
	Icon *string `json:"icon,omitempty"`
	Id string `json:"id"`
	Identifier *string `json:"identifier,omitempty"`
	IntegrationsSettings *map[string]any `json:"integrationsSettings,omitempty"`
	LabelIds string `json:"labelIds"`
	LastUpdate *map[string]any `json:"lastUpdate,omitempty"`
	LeadTeam *map[string]any `json:"leadTeam,omitempty"`
	Name string `json:"name"`
	Organization *map[string]any `json:"organization,omitempty"`
	Owner *map[string]any `json:"owner,omitempty"`
	ParentInitiative *map[string]any `json:"parentInitiative,omitempty"`
	PreviousIdentifiers string `json:"previousIdentifiers"`
	Priority int `json:"priority"`
	PrioritySortOrder float64 `json:"prioritySortOrder"`
	SlugId string `json:"slugId"`
	SortOrder float64 `json:"sortOrder"`
	StartedAt *any `json:"startedAt,omitempty"`
	Status string `json:"status"`
	TargetDate *any `json:"targetDate,omitempty"`
	TargetDateResolution *string `json:"targetDateResolution,omitempty"`
	Trashed *bool `json:"trashed,omitempty"`
	UpdateReminderFrequency *float64 `json:"updateReminderFrequency,omitempty"`
	UpdateReminderFrequencyInWeeks *float64 `json:"updateReminderFrequencyInWeeks,omitempty"`
	UpdateRemindersDay *string `json:"updateRemindersDay,omitempty"`
	UpdateRemindersHour *float64 `json:"updateRemindersHour,omitempty"`
	UpdatedAt any `json:"updatedAt"`
	Url string `json:"url"`
	Visibility string `json:"visibility"`
}

// InitiativeLoadMatch is the typed request payload for Initiative.LoadTyped.
type InitiativeLoadMatch struct {
	Id string `json:"id"`
}

// InitiativeListMatch is the typed request payload for Initiative.ListTyped.
type InitiativeListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// InitiativeCreateData is the typed request payload for Initiative.CreateTyped.
type InitiativeCreateData struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CanceledAt *any `json:"canceledAt,omitempty"`
	Color *string `json:"color,omitempty"`
	CompletedAt *any `json:"completedAt,omitempty"`
	Content *string `json:"content,omitempty"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	Description *string `json:"description,omitempty"`
	DocumentContent *map[string]any `json:"documentContent,omitempty"`
	FrequencyResolution string `json:"frequencyResolution"`
	Health *string `json:"health,omitempty"`
	HealthUpdatedAt *any `json:"healthUpdatedAt,omitempty"`
	Icon *string `json:"icon,omitempty"`
	Id string `json:"id"`
	Identifier *string `json:"identifier,omitempty"`
	IntegrationsSettings *map[string]any `json:"integrationsSettings,omitempty"`
	LabelIds string `json:"labelIds"`
	LastUpdate *map[string]any `json:"lastUpdate,omitempty"`
	LeadTeam *map[string]any `json:"leadTeam,omitempty"`
	Name string `json:"name"`
	Organization *map[string]any `json:"organization,omitempty"`
	Owner *map[string]any `json:"owner,omitempty"`
	ParentInitiative *map[string]any `json:"parentInitiative,omitempty"`
	PreviousIdentifiers string `json:"previousIdentifiers"`
	Priority int `json:"priority"`
	PrioritySortOrder float64 `json:"prioritySortOrder"`
	SlugId string `json:"slugId"`
	SortOrder float64 `json:"sortOrder"`
	StartedAt *any `json:"startedAt,omitempty"`
	Status string `json:"status"`
	TargetDate *any `json:"targetDate,omitempty"`
	TargetDateResolution *string `json:"targetDateResolution,omitempty"`
	Trashed *bool `json:"trashed,omitempty"`
	UpdateReminderFrequency *float64 `json:"updateReminderFrequency,omitempty"`
	UpdateReminderFrequencyInWeeks *float64 `json:"updateReminderFrequencyInWeeks,omitempty"`
	UpdateRemindersDay *string `json:"updateRemindersDay,omitempty"`
	UpdateRemindersHour *float64 `json:"updateRemindersHour,omitempty"`
	UpdatedAt any `json:"updatedAt"`
	Url string `json:"url"`
	Visibility string `json:"visibility"`
}

// InitiativeUpdateData is the typed request payload for Initiative.UpdateTyped.
type InitiativeUpdateData struct {
	Id string `json:"id"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CanceledAt *any `json:"canceledAt,omitempty"`
	Color *string `json:"color,omitempty"`
	CompletedAt *any `json:"completedAt,omitempty"`
	Content *string `json:"content,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Creator *map[string]any `json:"creator,omitempty"`
	Description *string `json:"description,omitempty"`
	DocumentContent *map[string]any `json:"documentContent,omitempty"`
	FrequencyResolution *string `json:"frequencyResolution,omitempty"`
	Health *string `json:"health,omitempty"`
	HealthUpdatedAt *any `json:"healthUpdatedAt,omitempty"`
	Icon *string `json:"icon,omitempty"`
	Identifier *string `json:"identifier,omitempty"`
	IntegrationsSettings *map[string]any `json:"integrationsSettings,omitempty"`
	LabelIds *string `json:"labelIds,omitempty"`
	LastUpdate *map[string]any `json:"lastUpdate,omitempty"`
	LeadTeam *map[string]any `json:"leadTeam,omitempty"`
	Name *string `json:"name,omitempty"`
	Organization *map[string]any `json:"organization,omitempty"`
	Owner *map[string]any `json:"owner,omitempty"`
	ParentInitiative *map[string]any `json:"parentInitiative,omitempty"`
	PreviousIdentifiers *string `json:"previousIdentifiers,omitempty"`
	Priority *int `json:"priority,omitempty"`
	PrioritySortOrder *float64 `json:"prioritySortOrder,omitempty"`
	SlugId *string `json:"slugId,omitempty"`
	SortOrder *float64 `json:"sortOrder,omitempty"`
	StartedAt *any `json:"startedAt,omitempty"`
	Status *string `json:"status,omitempty"`
	TargetDate *any `json:"targetDate,omitempty"`
	TargetDateResolution *string `json:"targetDateResolution,omitempty"`
	Trashed *bool `json:"trashed,omitempty"`
	UpdateReminderFrequency *float64 `json:"updateReminderFrequency,omitempty"`
	UpdateReminderFrequencyInWeeks *float64 `json:"updateReminderFrequencyInWeeks,omitempty"`
	UpdateRemindersDay *string `json:"updateRemindersDay,omitempty"`
	UpdateRemindersHour *float64 `json:"updateRemindersHour,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
	Url *string `json:"url,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
}

// InitiativeRemoveMatch is the typed request payload for Initiative.RemoveTyped.
type InitiativeRemoveMatch struct {
	Id string `json:"id"`
}

// InitiativeLabel is the typed data model for the initiative_label entity.
type InitiativeLabel struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Color string `json:"color"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	Description *string `json:"description,omitempty"`
	Id string `json:"id"`
	IsGroup bool `json:"isGroup"`
	LastAppliedAt *any `json:"lastAppliedAt,omitempty"`
	Name string `json:"name"`
	Organization *map[string]any `json:"organization,omitempty"`
	Parent *map[string]any `json:"parent,omitempty"`
	RetiredAt *any `json:"retiredAt,omitempty"`
	RetiredBy *map[string]any `json:"retiredBy,omitempty"`
	UpdatedAt any `json:"updatedAt"`
}

// InitiativeLabelLoadMatch is the typed request payload for InitiativeLabel.LoadTyped.
type InitiativeLabelLoadMatch struct {
	Id string `json:"id"`
}

// InitiativeLabelListMatch is the typed request payload for InitiativeLabel.ListTyped.
type InitiativeLabelListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// InitiativeLabelCreateData is the typed request payload for InitiativeLabel.CreateTyped.
type InitiativeLabelCreateData struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Color string `json:"color"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	Description *string `json:"description,omitempty"`
	Id string `json:"id"`
	IsGroup bool `json:"isGroup"`
	LastAppliedAt *any `json:"lastAppliedAt,omitempty"`
	Name string `json:"name"`
	Organization *map[string]any `json:"organization,omitempty"`
	Parent *map[string]any `json:"parent,omitempty"`
	RetiredAt *any `json:"retiredAt,omitempty"`
	RetiredBy *map[string]any `json:"retiredBy,omitempty"`
	UpdatedAt any `json:"updatedAt"`
}

// InitiativeLabelUpdateData is the typed request payload for InitiativeLabel.UpdateTyped.
type InitiativeLabelUpdateData struct {
	Id string `json:"id"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Color *string `json:"color,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Creator *map[string]any `json:"creator,omitempty"`
	Description *string `json:"description,omitempty"`
	IsGroup *bool `json:"isGroup,omitempty"`
	LastAppliedAt *any `json:"lastAppliedAt,omitempty"`
	Name *string `json:"name,omitempty"`
	Organization *map[string]any `json:"organization,omitempty"`
	Parent *map[string]any `json:"parent,omitempty"`
	RetiredAt *any `json:"retiredAt,omitempty"`
	RetiredBy *map[string]any `json:"retiredBy,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
}

// InitiativeLabelRemoveMatch is the typed request payload for InitiativeLabel.RemoveTyped.
type InitiativeLabelRemoveMatch struct {
	Id string `json:"id"`
}

// InitiativeLeadTeamChangeImpact is the typed data model for the initiative_lead_team_change_impact entity.
type InitiativeLeadTeamChangeImpact struct {
	AffectedDescendantCount int `json:"affectedDescendantCount"`
	Id *string `json:"id,omitempty"`
	VisibilityMayChange bool `json:"visibilityMayChange"`
}

// InitiativeLeadTeamChangeImpactLoadMatch is the typed request payload for InitiativeLeadTeamChangeImpact.LoadTyped.
type InitiativeLeadTeamChangeImpactLoadMatch struct {
	Id string `json:"id"`
	LeadTeamId *string `json:"lead_team_id,omitempty"`
}

// InitiativeRelation is the typed data model for the initiative_relation entity.
type InitiativeRelation struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Id string `json:"id"`
	Initiative *map[string]any `json:"initiative,omitempty"`
	RelatedInitiative *map[string]any `json:"relatedInitiative,omitempty"`
	SortOrder float64 `json:"sortOrder"`
	UpdatedAt any `json:"updatedAt"`
	User *map[string]any `json:"user,omitempty"`
}

// InitiativeRelationLoadMatch is the typed request payload for InitiativeRelation.LoadTyped.
type InitiativeRelationLoadMatch struct {
	Id string `json:"id"`
}

// InitiativeRelationListMatch is the typed request payload for InitiativeRelation.ListTyped.
type InitiativeRelationListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// InitiativeRelationCreateData is the typed request payload for InitiativeRelation.CreateTyped.
type InitiativeRelationCreateData struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Id string `json:"id"`
	Initiative *map[string]any `json:"initiative,omitempty"`
	RelatedInitiative *map[string]any `json:"relatedInitiative,omitempty"`
	SortOrder float64 `json:"sortOrder"`
	UpdatedAt any `json:"updatedAt"`
	User *map[string]any `json:"user,omitempty"`
}

// InitiativeRelationUpdateData is the typed request payload for InitiativeRelation.UpdateTyped.
type InitiativeRelationUpdateData struct {
	Id string `json:"id"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Initiative *map[string]any `json:"initiative,omitempty"`
	RelatedInitiative *map[string]any `json:"relatedInitiative,omitempty"`
	SortOrder *float64 `json:"sortOrder,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
	User *map[string]any `json:"user,omitempty"`
}

// InitiativeRelationRemoveMatch is the typed request payload for InitiativeRelation.RemoveTyped.
type InitiativeRelationRemoveMatch struct {
	Id string `json:"id"`
}

// InitiativeToProject is the typed data model for the initiative_to_project entity.
type InitiativeToProject struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Id string `json:"id"`
	Initiative *map[string]any `json:"initiative,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	SortOrder string `json:"sortOrder"`
	UpdatedAt any `json:"updatedAt"`
}

// InitiativeToProjectLoadMatch is the typed request payload for InitiativeToProject.LoadTyped.
type InitiativeToProjectLoadMatch struct {
	Id string `json:"id"`
}

// InitiativeToProjectListMatch is the typed request payload for InitiativeToProject.ListTyped.
type InitiativeToProjectListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// InitiativeToProjectCreateData is the typed request payload for InitiativeToProject.CreateTyped.
type InitiativeToProjectCreateData struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Id string `json:"id"`
	Initiative *map[string]any `json:"initiative,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	SortOrder string `json:"sortOrder"`
	UpdatedAt any `json:"updatedAt"`
}

// InitiativeToProjectUpdateData is the typed request payload for InitiativeToProject.UpdateTyped.
type InitiativeToProjectUpdateData struct {
	Id string `json:"id"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Initiative *map[string]any `json:"initiative,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	SortOrder *string `json:"sortOrder,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
}

// InitiativeToProjectRemoveMatch is the typed request payload for InitiativeToProject.RemoveTyped.
type InitiativeToProjectRemoveMatch struct {
	Id string `json:"id"`
}

// InitiativeUpdate is the typed data model for the initiative_update entity.
type InitiativeUpdate struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Body string `json:"body"`
	BodyData string `json:"bodyData"`
	CommentCount int `json:"commentCount"`
	CreatedAt any `json:"createdAt"`
	Diff *any `json:"diff,omitempty"`
	DiffMarkdown *string `json:"diffMarkdown,omitempty"`
	EditedAt *any `json:"editedAt,omitempty"`
	Health string `json:"health"`
	Id string `json:"id"`
	InfoSnapshot *any `json:"infoSnapshot,omitempty"`
	Initiative *map[string]any `json:"initiative,omitempty"`
	IsDiffHidden bool `json:"isDiffHidden"`
	IsStale bool `json:"isStale"`
	ReactionData any `json:"reactionData"`
	SlugId string `json:"slugId"`
	UpdatedAt any `json:"updatedAt"`
	Url string `json:"url"`
	User *map[string]any `json:"user,omitempty"`
}

// InitiativeUpdateLoadMatch is the typed request payload for InitiativeUpdate.LoadTyped.
type InitiativeUpdateLoadMatch struct {
	Id string `json:"id"`
}

// InitiativeUpdateListMatch is the typed request payload for InitiativeUpdate.ListTyped.
type InitiativeUpdateListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// InitiativeUpdateCreateData is the typed request payload for InitiativeUpdate.CreateTyped.
type InitiativeUpdateCreateData struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Body string `json:"body"`
	BodyData string `json:"bodyData"`
	CommentCount int `json:"commentCount"`
	CreatedAt any `json:"createdAt"`
	Diff *any `json:"diff,omitempty"`
	DiffMarkdown *string `json:"diffMarkdown,omitempty"`
	EditedAt *any `json:"editedAt,omitempty"`
	Health string `json:"health"`
	Id string `json:"id"`
	InfoSnapshot *any `json:"infoSnapshot,omitempty"`
	Initiative *map[string]any `json:"initiative,omitempty"`
	IsDiffHidden bool `json:"isDiffHidden"`
	IsStale bool `json:"isStale"`
	ReactionData any `json:"reactionData"`
	SlugId string `json:"slugId"`
	UpdatedAt any `json:"updatedAt"`
	Url string `json:"url"`
	User *map[string]any `json:"user,omitempty"`
}

// InitiativeUpdateUpdateData is the typed request payload for InitiativeUpdate.UpdateTyped.
type InitiativeUpdateUpdateData struct {
	Id string `json:"id"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Body *string `json:"body,omitempty"`
	BodyData *string `json:"bodyData,omitempty"`
	CommentCount *int `json:"commentCount,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Diff *any `json:"diff,omitempty"`
	DiffMarkdown *string `json:"diffMarkdown,omitempty"`
	EditedAt *any `json:"editedAt,omitempty"`
	Health *string `json:"health,omitempty"`
	InfoSnapshot *any `json:"infoSnapshot,omitempty"`
	Initiative *map[string]any `json:"initiative,omitempty"`
	IsDiffHidden *bool `json:"isDiffHidden,omitempty"`
	IsStale *bool `json:"isStale,omitempty"`
	ReactionData *any `json:"reactionData,omitempty"`
	SlugId *string `json:"slugId,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
	Url *string `json:"url,omitempty"`
	User *map[string]any `json:"user,omitempty"`
}

// Integration is the typed data model for the integration entity.
type Integration struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	Id string `json:"id"`
	Organization *map[string]any `json:"organization,omitempty"`
	Service string `json:"service"`
	Team *map[string]any `json:"team,omitempty"`
	UpdatedAt any `json:"updatedAt"`
}

// IntegrationLoadMatch is the typed request payload for Integration.LoadTyped.
type IntegrationLoadMatch struct {
	Id string `json:"id"`
}

// IntegrationListMatch is the typed request payload for Integration.ListTyped.
type IntegrationListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// IntegrationCreateData is the typed request payload for Integration.CreateTyped.
type IntegrationCreateData struct {
	Code *string `json:"code,omitempty"`
	CodeVerifier *string `json:"code_verifier,omitempty"`
	RedirectUri *string `json:"redirect_uri,omitempty"`
	Subdomain *string `json:"subdomain,omitempty"`
	Environment *string `json:"environment,omitempty"`
	ProjectKey *string `json:"project_key,omitempty"`
	DomainUrl *string `json:"domain_url,omitempty"`
	RequestedScope *string `json:"requested_scope,omitempty"`
	ShouldUseV2Auth *bool `json:"should_use_v2_auth,omitempty"`
	CodeAccess *bool `json:"code_access,omitempty"`
	EnterpriseUrl *string `json:"enterprise_url,omitempty"`
	McpServerDefinitionId *string `json:"mcp_server_definition_id,omitempty"`
	ServerUrl *string `json:"server_url,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	WorkflowDefinitionDraftId *string `json:"workflow_definition_draft_id,omitempty"`
	WorkflowDefinitionId *string `json:"workflow_definition_id,omitempty"`
	ApiKey *string `json:"api_key,omitempty"`
	AccessToken *string `json:"access_token,omitempty"`
	BotUserRole *string `json:"bot_user_role,omitempty"`
	CustomApiUrl *string `json:"custom_api_url,omitempty"`
	Scope *string `json:"scope,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	Id string `json:"id"`
	Organization *map[string]any `json:"organization,omitempty"`
	Service string `json:"service"`
	Team *map[string]any `json:"team,omitempty"`
	UpdatedAt any `json:"updatedAt"`
}

// IntegrationUpdateData is the typed request payload for Integration.UpdateTyped.
type IntegrationUpdateData struct {
	Id string `json:"id"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Creator *map[string]any `json:"creator,omitempty"`
	Organization *map[string]any `json:"organization,omitempty"`
	Service *string `json:"service,omitempty"`
	Team *map[string]any `json:"team,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
}

// IntegrationRemoveMatch is the typed request payload for Integration.RemoveTyped.
type IntegrationRemoveMatch struct {
	Id string `json:"id"`
	SkipInstallationDeletion *bool `json:"skip_installation_deletion,omitempty"`
}

// IntegrationTemplate is the typed data model for the integration_template entity.
type IntegrationTemplate struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	ForeignEntityId *string `json:"foreignEntityId,omitempty"`
	Id string `json:"id"`
	Integration *map[string]any `json:"integration,omitempty"`
	Template *map[string]any `json:"template,omitempty"`
	UpdatedAt any `json:"updatedAt"`
}

// IntegrationTemplateLoadMatch is the typed request payload for IntegrationTemplate.LoadTyped.
type IntegrationTemplateLoadMatch struct {
	Id string `json:"id"`
}

// IntegrationTemplateListMatch is the typed request payload for IntegrationTemplate.ListTyped.
type IntegrationTemplateListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// IntegrationTemplateCreateData is the typed request payload for IntegrationTemplate.CreateTyped.
type IntegrationTemplateCreateData struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	ForeignEntityId *string `json:"foreignEntityId,omitempty"`
	Id string `json:"id"`
	Integration *map[string]any `json:"integration,omitempty"`
	Template *map[string]any `json:"template,omitempty"`
	UpdatedAt any `json:"updatedAt"`
}

// IntegrationTemplateRemoveMatch is the typed request payload for IntegrationTemplate.RemoveTyped.
type IntegrationTemplateRemoveMatch struct {
	Id string `json:"id"`
}

// IntegrationsSetting is the typed data model for the integrations_setting entity.
type IntegrationsSetting struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	ContextViewType *string `json:"contextViewType,omitempty"`
	CreatedAt any `json:"createdAt"`
	Id string `json:"id"`
	Initiative *map[string]any `json:"initiative,omitempty"`
	MicrosoftTeamsProjectUpdateCreated *bool `json:"microsoftTeamsProjectUpdateCreated,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	SlackInitiativeUpdateCreated *bool `json:"slackInitiativeUpdateCreated,omitempty"`
	SlackIssueAddedToTriage *bool `json:"slackIssueAddedToTriage,omitempty"`
	SlackIssueAddedToView *bool `json:"slackIssueAddedToView,omitempty"`
	SlackIssueNewComment *bool `json:"slackIssueNewComment,omitempty"`
	SlackIssueSlaBreached *bool `json:"slackIssueSlaBreached,omitempty"`
	SlackIssueSlaHighRisk *bool `json:"slackIssueSlaHighRisk,omitempty"`
	SlackIssueStatusChangedAll *bool `json:"slackIssueStatusChangedAll,omitempty"`
	SlackIssueStatusChangedDone *bool `json:"slackIssueStatusChangedDone,omitempty"`
	SlackProjectUpdateCreated *bool `json:"slackProjectUpdateCreated,omitempty"`
	SlackProjectUpdateCreatedToTeam *bool `json:"slackProjectUpdateCreatedToTeam,omitempty"`
	SlackProjectUpdateCreatedToWorkspace *bool `json:"slackProjectUpdateCreatedToWorkspace,omitempty"`
	Team *map[string]any `json:"team,omitempty"`
	UpdatedAt any `json:"updatedAt"`
}

// IntegrationsSettingLoadMatch is the typed request payload for IntegrationsSetting.LoadTyped.
type IntegrationsSettingLoadMatch struct {
	Id string `json:"id"`
}

// IntegrationsSettingCreateData is the typed request payload for IntegrationsSetting.CreateTyped.
type IntegrationsSettingCreateData struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	ContextViewType *string `json:"contextViewType,omitempty"`
	CreatedAt any `json:"createdAt"`
	Id string `json:"id"`
	Initiative *map[string]any `json:"initiative,omitempty"`
	MicrosoftTeamsProjectUpdateCreated *bool `json:"microsoftTeamsProjectUpdateCreated,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	SlackInitiativeUpdateCreated *bool `json:"slackInitiativeUpdateCreated,omitempty"`
	SlackIssueAddedToTriage *bool `json:"slackIssueAddedToTriage,omitempty"`
	SlackIssueAddedToView *bool `json:"slackIssueAddedToView,omitempty"`
	SlackIssueNewComment *bool `json:"slackIssueNewComment,omitempty"`
	SlackIssueSlaBreached *bool `json:"slackIssueSlaBreached,omitempty"`
	SlackIssueSlaHighRisk *bool `json:"slackIssueSlaHighRisk,omitempty"`
	SlackIssueStatusChangedAll *bool `json:"slackIssueStatusChangedAll,omitempty"`
	SlackIssueStatusChangedDone *bool `json:"slackIssueStatusChangedDone,omitempty"`
	SlackProjectUpdateCreated *bool `json:"slackProjectUpdateCreated,omitempty"`
	SlackProjectUpdateCreatedToTeam *bool `json:"slackProjectUpdateCreatedToTeam,omitempty"`
	SlackProjectUpdateCreatedToWorkspace *bool `json:"slackProjectUpdateCreatedToWorkspace,omitempty"`
	Team *map[string]any `json:"team,omitempty"`
	UpdatedAt any `json:"updatedAt"`
}

// IntegrationsSettingUpdateData is the typed request payload for IntegrationsSetting.UpdateTyped.
type IntegrationsSettingUpdateData struct {
	Id string `json:"id"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	ContextViewType *string `json:"contextViewType,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Initiative *map[string]any `json:"initiative,omitempty"`
	MicrosoftTeamsProjectUpdateCreated *bool `json:"microsoftTeamsProjectUpdateCreated,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	SlackInitiativeUpdateCreated *bool `json:"slackInitiativeUpdateCreated,omitempty"`
	SlackIssueAddedToTriage *bool `json:"slackIssueAddedToTriage,omitempty"`
	SlackIssueAddedToView *bool `json:"slackIssueAddedToView,omitempty"`
	SlackIssueNewComment *bool `json:"slackIssueNewComment,omitempty"`
	SlackIssueSlaBreached *bool `json:"slackIssueSlaBreached,omitempty"`
	SlackIssueSlaHighRisk *bool `json:"slackIssueSlaHighRisk,omitempty"`
	SlackIssueStatusChangedAll *bool `json:"slackIssueStatusChangedAll,omitempty"`
	SlackIssueStatusChangedDone *bool `json:"slackIssueStatusChangedDone,omitempty"`
	SlackProjectUpdateCreated *bool `json:"slackProjectUpdateCreated,omitempty"`
	SlackProjectUpdateCreatedToTeam *bool `json:"slackProjectUpdateCreatedToTeam,omitempty"`
	SlackProjectUpdateCreatedToWorkspace *bool `json:"slackProjectUpdateCreatedToWorkspace,omitempty"`
	Team *map[string]any `json:"team,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
}

// Issue is the typed data model for the issue entity.
type Issue struct {
	ActivitySummary *any `json:"activitySummary,omitempty"`
	AddedToCycleAt *any `json:"addedToCycleAt,omitempty"`
	AddedToProjectAt *any `json:"addedToProjectAt,omitempty"`
	AddedToTeamAt *any `json:"addedToTeamAt,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	AsksExternalUserRequester *map[string]any `json:"asksExternalUserRequester,omitempty"`
	AsksRequester *map[string]any `json:"asksRequester,omitempty"`
	Assignee *map[string]any `json:"assignee,omitempty"`
	AutoArchivedAt *any `json:"autoArchivedAt,omitempty"`
	AutoClosedAt *any `json:"autoClosedAt,omitempty"`
	BotActor *map[string]any `json:"botActor,omitempty"`
	BranchName string `json:"branchName"`
	CanceledAt *any `json:"canceledAt,omitempty"`
	CompletedAt *any `json:"completedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	CustomerTicketCount int `json:"customerTicketCount"`
	Cycle *map[string]any `json:"cycle,omitempty"`
	Delegate *map[string]any `json:"delegate,omitempty"`
	Description *string `json:"description,omitempty"`
	DescriptionState *string `json:"descriptionState,omitempty"`
	DocumentContent *map[string]any `json:"documentContent,omitempty"`
	DueDate *any `json:"dueDate,omitempty"`
	Estimate *float64 `json:"estimate,omitempty"`
	ExternalUserCreator *map[string]any `json:"externalUserCreator,omitempty"`
	Favorite *map[string]any `json:"favorite,omitempty"`
	Id string `json:"id"`
	Identifier string `json:"identifier"`
	InheritsSharedAccess bool `json:"inheritsSharedAccess"`
	IntegrationSourceType *string `json:"integrationSourceType,omitempty"`
	LabelIds string `json:"labelIds"`
	LastAppliedTemplate *map[string]any `json:"lastAppliedTemplate,omitempty"`
	Number float64 `json:"number"`
	Parent *map[string]any `json:"parent,omitempty"`
	PreviousIdentifiers string `json:"previousIdentifiers"`
	Priority float64 `json:"priority"`
	PriorityLabel string `json:"priorityLabel"`
	PrioritySortOrder float64 `json:"prioritySortOrder"`
	Project *map[string]any `json:"project,omitempty"`
	ProjectMilestone *map[string]any `json:"projectMilestone,omitempty"`
	ReactionData any `json:"reactionData"`
	RecurringIssueTemplate *map[string]any `json:"recurringIssueTemplate,omitempty"`
	SlaBreachesAt *any `json:"slaBreachesAt,omitempty"`
	SlaHighRiskAt *any `json:"slaHighRiskAt,omitempty"`
	SlaMediumRiskAt *any `json:"slaMediumRiskAt,omitempty"`
	SlaStartedAt *any `json:"slaStartedAt,omitempty"`
	SlaType *string `json:"slaType,omitempty"`
	SnoozedBy *map[string]any `json:"snoozedBy,omitempty"`
	SnoozedUntilAt *any `json:"snoozedUntilAt,omitempty"`
	SortOrder float64 `json:"sortOrder"`
	SourceComment *map[string]any `json:"sourceComment,omitempty"`
	StartedAt *any `json:"startedAt,omitempty"`
	StartedTriageAt *any `json:"startedTriageAt,omitempty"`
	State *map[string]any `json:"state,omitempty"`
	SubIssueSortOrder *float64 `json:"subIssueSortOrder,omitempty"`
	SuggestionsGeneratedAt *any `json:"suggestionsGeneratedAt,omitempty"`
	Summary *map[string]any `json:"summary,omitempty"`
	Team *map[string]any `json:"team,omitempty"`
	Title string `json:"title"`
	Trashed *bool `json:"trashed,omitempty"`
	TriagedAt *any `json:"triagedAt,omitempty"`
	Trusted *bool `json:"trusted,omitempty"`
	UpdatedAt any `json:"updatedAt"`
	Url string `json:"url"`
}

// IssueLoadMatch is the typed request payload for Issue.LoadTyped.
type IssueLoadMatch struct {
	BranchName *string `json:"branch_name,omitempty"`
	Id *string `json:"id,omitempty"`
}

// IssueListMatch is the typed request payload for Issue.ListTyped.
type IssueListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	FileKey *string `json:"file_key,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
	Query *string `json:"query,omitempty"`
}

// IssueCreateData is the typed request payload for Issue.CreateTyped.
type IssueCreateData struct {
	ActivitySummary *any `json:"activitySummary,omitempty"`
	AddedToCycleAt *any `json:"addedToCycleAt,omitempty"`
	AddedToProjectAt *any `json:"addedToProjectAt,omitempty"`
	AddedToTeamAt *any `json:"addedToTeamAt,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	AsksExternalUserRequester *map[string]any `json:"asksExternalUserRequester,omitempty"`
	AsksRequester *map[string]any `json:"asksRequester,omitempty"`
	Assignee *map[string]any `json:"assignee,omitempty"`
	AutoArchivedAt *any `json:"autoArchivedAt,omitempty"`
	AutoClosedAt *any `json:"autoClosedAt,omitempty"`
	BotActor *map[string]any `json:"botActor,omitempty"`
	BranchName string `json:"branchName"`
	CanceledAt *any `json:"canceledAt,omitempty"`
	CompletedAt *any `json:"completedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	CustomerTicketCount int `json:"customerTicketCount"`
	Cycle *map[string]any `json:"cycle,omitempty"`
	Delegate *map[string]any `json:"delegate,omitempty"`
	Description *string `json:"description,omitempty"`
	DescriptionState *string `json:"descriptionState,omitempty"`
	DocumentContent *map[string]any `json:"documentContent,omitempty"`
	DueDate *any `json:"dueDate,omitempty"`
	Estimate *float64 `json:"estimate,omitempty"`
	ExternalUserCreator *map[string]any `json:"externalUserCreator,omitempty"`
	Favorite *map[string]any `json:"favorite,omitempty"`
	Id string `json:"id"`
	Identifier string `json:"identifier"`
	InheritsSharedAccess bool `json:"inheritsSharedAccess"`
	IntegrationSourceType *string `json:"integrationSourceType,omitempty"`
	LabelIds string `json:"labelIds"`
	LastAppliedTemplate *map[string]any `json:"lastAppliedTemplate,omitempty"`
	Number float64 `json:"number"`
	Parent *map[string]any `json:"parent,omitempty"`
	PreviousIdentifiers string `json:"previousIdentifiers"`
	Priority float64 `json:"priority"`
	PriorityLabel string `json:"priorityLabel"`
	PrioritySortOrder float64 `json:"prioritySortOrder"`
	Project *map[string]any `json:"project,omitempty"`
	ProjectMilestone *map[string]any `json:"projectMilestone,omitempty"`
	ReactionData any `json:"reactionData"`
	RecurringIssueTemplate *map[string]any `json:"recurringIssueTemplate,omitempty"`
	SlaBreachesAt *any `json:"slaBreachesAt,omitempty"`
	SlaHighRiskAt *any `json:"slaHighRiskAt,omitempty"`
	SlaMediumRiskAt *any `json:"slaMediumRiskAt,omitempty"`
	SlaStartedAt *any `json:"slaStartedAt,omitempty"`
	SlaType *string `json:"slaType,omitempty"`
	SnoozedBy *map[string]any `json:"snoozedBy,omitempty"`
	SnoozedUntilAt *any `json:"snoozedUntilAt,omitempty"`
	SortOrder float64 `json:"sortOrder"`
	SourceComment *map[string]any `json:"sourceComment,omitempty"`
	StartedAt *any `json:"startedAt,omitempty"`
	StartedTriageAt *any `json:"startedTriageAt,omitempty"`
	State *map[string]any `json:"state,omitempty"`
	SubIssueSortOrder *float64 `json:"subIssueSortOrder,omitempty"`
	SuggestionsGeneratedAt *any `json:"suggestionsGeneratedAt,omitempty"`
	Summary *map[string]any `json:"summary,omitempty"`
	Team *map[string]any `json:"team,omitempty"`
	Title string `json:"title"`
	Trashed *bool `json:"trashed,omitempty"`
	TriagedAt *any `json:"triagedAt,omitempty"`
	Trusted *bool `json:"trusted,omitempty"`
	UpdatedAt any `json:"updatedAt"`
	Url string `json:"url"`
}

// IssueUpdateData is the typed request payload for Issue.UpdateTyped.
type IssueUpdateData struct {
	Id string `json:"id"`
	ActivitySummary *any `json:"activitySummary,omitempty"`
	AddedToCycleAt *any `json:"addedToCycleAt,omitempty"`
	AddedToProjectAt *any `json:"addedToProjectAt,omitempty"`
	AddedToTeamAt *any `json:"addedToTeamAt,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	AsksExternalUserRequester *map[string]any `json:"asksExternalUserRequester,omitempty"`
	AsksRequester *map[string]any `json:"asksRequester,omitempty"`
	Assignee *map[string]any `json:"assignee,omitempty"`
	AutoArchivedAt *any `json:"autoArchivedAt,omitempty"`
	AutoClosedAt *any `json:"autoClosedAt,omitempty"`
	BotActor *map[string]any `json:"botActor,omitempty"`
	BranchName *string `json:"branchName,omitempty"`
	CanceledAt *any `json:"canceledAt,omitempty"`
	CompletedAt *any `json:"completedAt,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Creator *map[string]any `json:"creator,omitempty"`
	CustomerTicketCount *int `json:"customerTicketCount,omitempty"`
	Cycle *map[string]any `json:"cycle,omitempty"`
	Delegate *map[string]any `json:"delegate,omitempty"`
	Description *string `json:"description,omitempty"`
	DescriptionState *string `json:"descriptionState,omitempty"`
	DocumentContent *map[string]any `json:"documentContent,omitempty"`
	DueDate *any `json:"dueDate,omitempty"`
	Estimate *float64 `json:"estimate,omitempty"`
	ExternalUserCreator *map[string]any `json:"externalUserCreator,omitempty"`
	Favorite *map[string]any `json:"favorite,omitempty"`
	Identifier *string `json:"identifier,omitempty"`
	InheritsSharedAccess *bool `json:"inheritsSharedAccess,omitempty"`
	IntegrationSourceType *string `json:"integrationSourceType,omitempty"`
	LabelIds *string `json:"labelIds,omitempty"`
	LastAppliedTemplate *map[string]any `json:"lastAppliedTemplate,omitempty"`
	Number *float64 `json:"number,omitempty"`
	Parent *map[string]any `json:"parent,omitempty"`
	PreviousIdentifiers *string `json:"previousIdentifiers,omitempty"`
	Priority *float64 `json:"priority,omitempty"`
	PriorityLabel *string `json:"priorityLabel,omitempty"`
	PrioritySortOrder *float64 `json:"prioritySortOrder,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	ProjectMilestone *map[string]any `json:"projectMilestone,omitempty"`
	ReactionData *any `json:"reactionData,omitempty"`
	RecurringIssueTemplate *map[string]any `json:"recurringIssueTemplate,omitempty"`
	SlaBreachesAt *any `json:"slaBreachesAt,omitempty"`
	SlaHighRiskAt *any `json:"slaHighRiskAt,omitempty"`
	SlaMediumRiskAt *any `json:"slaMediumRiskAt,omitempty"`
	SlaStartedAt *any `json:"slaStartedAt,omitempty"`
	SlaType *string `json:"slaType,omitempty"`
	SnoozedBy *map[string]any `json:"snoozedBy,omitempty"`
	SnoozedUntilAt *any `json:"snoozedUntilAt,omitempty"`
	SortOrder *float64 `json:"sortOrder,omitempty"`
	SourceComment *map[string]any `json:"sourceComment,omitempty"`
	StartedAt *any `json:"startedAt,omitempty"`
	StartedTriageAt *any `json:"startedTriageAt,omitempty"`
	State *map[string]any `json:"state,omitempty"`
	SubIssueSortOrder *float64 `json:"subIssueSortOrder,omitempty"`
	SuggestionsGeneratedAt *any `json:"suggestionsGeneratedAt,omitempty"`
	Summary *map[string]any `json:"summary,omitempty"`
	Team *map[string]any `json:"team,omitempty"`
	Title *string `json:"title,omitempty"`
	Trashed *bool `json:"trashed,omitempty"`
	TriagedAt *any `json:"triagedAt,omitempty"`
	Trusted *bool `json:"trusted,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
	Url *string `json:"url,omitempty"`
}

// IssueRemoveMatch is the typed request payload for Issue.RemoveTyped.
type IssueRemoveMatch struct {
	Id string `json:"id"`
	PermanentlyDelete *bool `json:"permanently_delete,omitempty"`
}

// IssueImport is the typed data model for the issue_import entity.
type IssueImport struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	CreatorId *string `json:"creatorId,omitempty"`
	CsvFileUrl *string `json:"csvFileUrl,omitempty"`
	DisplayName string `json:"displayName"`
	Error *string `json:"error,omitempty"`
	ErrorMetadata *any `json:"errorMetadata,omitempty"`
	Id string `json:"id"`
	Mapping *any `json:"mapping,omitempty"`
	Progress *float64 `json:"progress,omitempty"`
	Service string `json:"service"`
	ServiceMetadata *any `json:"serviceMetadata,omitempty"`
	Status string `json:"status"`
	TeamName *string `json:"teamName,omitempty"`
	UpdatedAt any `json:"updatedAt"`
}

// IssueImportCreateData is the typed request payload for IssueImport.CreateTyped.
type IssueImportCreateData struct {
	Id *string `json:"id,omitempty"`
	IncludeClosedIssue *bool `json:"include_closed_issue,omitempty"`
	InstantProcess *bool `json:"instant_process,omitempty"`
	JiraEmail *string `json:"jira_email,omitempty"`
	JiraHostname *string `json:"jira_hostname,omitempty"`
	JiraProject *string `json:"jira_project,omitempty"`
	JiraToken *string `json:"jira_token,omitempty"`
	Jql *string `json:"jql,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	TeamName *string `json:"team_name,omitempty"`
	AsanaTeamName *string `json:"asana_team_name,omitempty"`
	AsanaToken *string `json:"asana_token,omitempty"`
	ClubhouseGroupName *string `json:"clubhouse_group_name,omitempty"`
	ClubhouseToken *string `json:"clubhouse_token,omitempty"`
	CsvUrl *string `json:"csv_url,omitempty"`
	GithubLabel *string `json:"github_label,omitempty"`
	GithubRepoId *int `json:"github_repo_id,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	CreatorId *string `json:"creatorId,omitempty"`
	CsvFileUrl *string `json:"csvFileUrl,omitempty"`
	DisplayName string `json:"displayName"`
	Error *string `json:"error,omitempty"`
	ErrorMetadata *any `json:"errorMetadata,omitempty"`
	Mapping *any `json:"mapping,omitempty"`
	Progress *float64 `json:"progress,omitempty"`
	Service string `json:"service"`
	ServiceMetadata *any `json:"serviceMetadata,omitempty"`
	Status string `json:"status"`
	TeamName2 *string `json:"teamName,omitempty"`
	UpdatedAt any `json:"updatedAt"`
}

// IssueImportUpdateData is the typed request payload for IssueImport.UpdateTyped.
type IssueImportUpdateData struct {
	Id string `json:"id"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	CreatorId *string `json:"creatorId,omitempty"`
	CsvFileUrl *string `json:"csvFileUrl,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	Error *string `json:"error,omitempty"`
	ErrorMetadata *any `json:"errorMetadata,omitempty"`
	Mapping *any `json:"mapping,omitempty"`
	Progress *float64 `json:"progress,omitempty"`
	Service *string `json:"service,omitempty"`
	ServiceMetadata *any `json:"serviceMetadata,omitempty"`
	Status *string `json:"status,omitempty"`
	TeamName *string `json:"teamName,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
}

// IssueImportRemoveMatch is the typed request payload for IssueImport.RemoveTyped.
type IssueImportRemoveMatch struct {
	IssueImportId string `json:"issue_import_id"`
}

// IssueLabel is the typed data model for the issue_label entity.
type IssueLabel struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Color string `json:"color"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	Description *string `json:"description,omitempty"`
	GroupType *string `json:"groupType,omitempty"`
	Id string `json:"id"`
	InheritedFrom *map[string]any `json:"inheritedFrom,omitempty"`
	IsGroup bool `json:"isGroup"`
	LastAppliedAt *any `json:"lastAppliedAt,omitempty"`
	Name string `json:"name"`
	Parent *map[string]any `json:"parent,omitempty"`
	RetiredAt *any `json:"retiredAt,omitempty"`
	RetiredBy *map[string]any `json:"retiredBy,omitempty"`
	Team *map[string]any `json:"team,omitempty"`
	UpdatedAt any `json:"updatedAt"`
}

// IssueLabelLoadMatch is the typed request payload for IssueLabel.LoadTyped.
type IssueLabelLoadMatch struct {
	Id string `json:"id"`
}

// IssueLabelListMatch is the typed request payload for IssueLabel.ListTyped.
type IssueLabelListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// IssueLabelCreateData is the typed request payload for IssueLabel.CreateTyped.
type IssueLabelCreateData struct {
	ReplaceTeamLabel *bool `json:"replace_team_label,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Color string `json:"color"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	Description *string `json:"description,omitempty"`
	GroupType *string `json:"groupType,omitempty"`
	Id string `json:"id"`
	InheritedFrom *map[string]any `json:"inheritedFrom,omitempty"`
	IsGroup bool `json:"isGroup"`
	LastAppliedAt *any `json:"lastAppliedAt,omitempty"`
	Name string `json:"name"`
	Parent *map[string]any `json:"parent,omitempty"`
	RetiredAt *any `json:"retiredAt,omitempty"`
	RetiredBy *map[string]any `json:"retiredBy,omitempty"`
	Team *map[string]any `json:"team,omitempty"`
	UpdatedAt any `json:"updatedAt"`
}

// IssueLabelUpdateData is the typed request payload for IssueLabel.UpdateTyped.
type IssueLabelUpdateData struct {
	Id string `json:"id"`
	ReplaceTeamLabel *bool `json:"replace_team_label,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Color *string `json:"color,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Creator *map[string]any `json:"creator,omitempty"`
	Description *string `json:"description,omitempty"`
	GroupType *string `json:"groupType,omitempty"`
	InheritedFrom *map[string]any `json:"inheritedFrom,omitempty"`
	IsGroup *bool `json:"isGroup,omitempty"`
	LastAppliedAt *any `json:"lastAppliedAt,omitempty"`
	Name *string `json:"name,omitempty"`
	Parent *map[string]any `json:"parent,omitempty"`
	RetiredAt *any `json:"retiredAt,omitempty"`
	RetiredBy *map[string]any `json:"retiredBy,omitempty"`
	Team *map[string]any `json:"team,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
}

// IssueLabelRemoveMatch is the typed request payload for IssueLabel.RemoveTyped.
type IssueLabelRemoveMatch struct {
	Id string `json:"id"`
}

// IssuePriorityValue is the typed data model for the issue_priority_value entity.
type IssuePriorityValue struct {
	Label string `json:"label"`
	Priority int `json:"priority"`
}

// IssuePriorityValueListMatch is the typed request payload for IssuePriorityValue.ListTyped.
type IssuePriorityValueListMatch struct {
	Label *string `json:"label,omitempty"`
	Priority *int `json:"priority,omitempty"`
}

// IssueRelation is the typed data model for the issue_relation entity.
type IssueRelation struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Id string `json:"id"`
	Issue *map[string]any `json:"issue,omitempty"`
	RelatedIssue *map[string]any `json:"relatedIssue,omitempty"`
	Type string `json:"type"`
	UpdatedAt any `json:"updatedAt"`
}

// IssueRelationLoadMatch is the typed request payload for IssueRelation.LoadTyped.
type IssueRelationLoadMatch struct {
	Id string `json:"id"`
}

// IssueRelationListMatch is the typed request payload for IssueRelation.ListTyped.
type IssueRelationListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// IssueRelationCreateData is the typed request payload for IssueRelation.CreateTyped.
type IssueRelationCreateData struct {
	OverrideCreatedAt *any `json:"override_created_at,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Id string `json:"id"`
	Issue *map[string]any `json:"issue,omitempty"`
	RelatedIssue *map[string]any `json:"relatedIssue,omitempty"`
	Type string `json:"type"`
	UpdatedAt any `json:"updatedAt"`
}

// IssueRelationUpdateData is the typed request payload for IssueRelation.UpdateTyped.
type IssueRelationUpdateData struct {
	Id string `json:"id"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Issue *map[string]any `json:"issue,omitempty"`
	RelatedIssue *map[string]any `json:"relatedIssue,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
}

// IssueRelationRemoveMatch is the typed request payload for IssueRelation.RemoveTyped.
type IssueRelationRemoveMatch struct {
	Id string `json:"id"`
}

// IssueSearchResult is the typed data model for the issue_search_result entity.
type IssueSearchResult struct {
	ActivitySummary *any `json:"activitySummary,omitempty"`
	AddedToCycleAt *any `json:"addedToCycleAt,omitempty"`
	AddedToProjectAt *any `json:"addedToProjectAt,omitempty"`
	AddedToTeamAt *any `json:"addedToTeamAt,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	AsksExternalUserRequester *map[string]any `json:"asksExternalUserRequester,omitempty"`
	AsksRequester *map[string]any `json:"asksRequester,omitempty"`
	Assignee *map[string]any `json:"assignee,omitempty"`
	AutoArchivedAt *any `json:"autoArchivedAt,omitempty"`
	AutoClosedAt *any `json:"autoClosedAt,omitempty"`
	BotActor *map[string]any `json:"botActor,omitempty"`
	BranchName string `json:"branchName"`
	CanceledAt *any `json:"canceledAt,omitempty"`
	CompletedAt *any `json:"completedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	CustomerTicketCount int `json:"customerTicketCount"`
	Cycle *map[string]any `json:"cycle,omitempty"`
	Delegate *map[string]any `json:"delegate,omitempty"`
	Description *string `json:"description,omitempty"`
	DescriptionState *string `json:"descriptionState,omitempty"`
	DocumentContent *map[string]any `json:"documentContent,omitempty"`
	DueDate *any `json:"dueDate,omitempty"`
	Estimate *float64 `json:"estimate,omitempty"`
	ExternalUserCreator *map[string]any `json:"externalUserCreator,omitempty"`
	Favorite *map[string]any `json:"favorite,omitempty"`
	Id string `json:"id"`
	Identifier string `json:"identifier"`
	InheritsSharedAccess bool `json:"inheritsSharedAccess"`
	IntegrationSourceType *string `json:"integrationSourceType,omitempty"`
	LabelIds string `json:"labelIds"`
	LastAppliedTemplate *map[string]any `json:"lastAppliedTemplate,omitempty"`
	Metadata any `json:"metadata"`
	Number float64 `json:"number"`
	Parent *map[string]any `json:"parent,omitempty"`
	PreviousIdentifiers string `json:"previousIdentifiers"`
	Priority float64 `json:"priority"`
	PriorityLabel string `json:"priorityLabel"`
	PrioritySortOrder float64 `json:"prioritySortOrder"`
	Project *map[string]any `json:"project,omitempty"`
	ProjectMilestone *map[string]any `json:"projectMilestone,omitempty"`
	ReactionData any `json:"reactionData"`
	RecurringIssueTemplate *map[string]any `json:"recurringIssueTemplate,omitempty"`
	SlaBreachesAt *any `json:"slaBreachesAt,omitempty"`
	SlaHighRiskAt *any `json:"slaHighRiskAt,omitempty"`
	SlaMediumRiskAt *any `json:"slaMediumRiskAt,omitempty"`
	SlaStartedAt *any `json:"slaStartedAt,omitempty"`
	SlaType *string `json:"slaType,omitempty"`
	SnoozedBy *map[string]any `json:"snoozedBy,omitempty"`
	SnoozedUntilAt *any `json:"snoozedUntilAt,omitempty"`
	SortOrder float64 `json:"sortOrder"`
	SourceComment *map[string]any `json:"sourceComment,omitempty"`
	StartedAt *any `json:"startedAt,omitempty"`
	StartedTriageAt *any `json:"startedTriageAt,omitempty"`
	State *map[string]any `json:"state,omitempty"`
	SubIssueSortOrder *float64 `json:"subIssueSortOrder,omitempty"`
	SuggestionsGeneratedAt *any `json:"suggestionsGeneratedAt,omitempty"`
	Summary *map[string]any `json:"summary,omitempty"`
	Team *map[string]any `json:"team,omitempty"`
	Title string `json:"title"`
	Trashed *bool `json:"trashed,omitempty"`
	TriagedAt *any `json:"triagedAt,omitempty"`
	Trusted *bool `json:"trusted,omitempty"`
	UpdatedAt any `json:"updatedAt"`
	Url string `json:"url"`
}

// IssueSearchResultListMatch is the typed request payload for IssueSearchResult.ListTyped.
type IssueSearchResultListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	IncludeComment *bool `json:"include_comment,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Term string `json:"term"`
}

// IssueToRelease is the typed data model for the issue_to_release entity.
type IssueToRelease struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Id string `json:"id"`
	Issue *map[string]any `json:"issue,omitempty"`
	Release *map[string]any `json:"release,omitempty"`
	UpdatedAt any `json:"updatedAt"`
}

// IssueToReleaseLoadMatch is the typed request payload for IssueToRelease.LoadTyped.
type IssueToReleaseLoadMatch struct {
	Id string `json:"id"`
}

// IssueToReleaseListMatch is the typed request payload for IssueToRelease.ListTyped.
type IssueToReleaseListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// IssueToReleaseCreateData is the typed request payload for IssueToRelease.CreateTyped.
type IssueToReleaseCreateData struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Id string `json:"id"`
	Issue *map[string]any `json:"issue,omitempty"`
	Release *map[string]any `json:"release,omitempty"`
	UpdatedAt any `json:"updatedAt"`
}

// IssueToReleaseRemoveMatch is the typed request payload for IssueToRelease.RemoveTyped.
type IssueToReleaseRemoveMatch struct {
	Id string `json:"id"`
}

// LogoutResponse is the typed data model for the logout_response entity.
type LogoutResponse struct {
	Success bool `json:"success"`
}

// LogoutResponseCreateData is the typed request payload for LogoutResponse.CreateTyped.
type LogoutResponseCreateData struct {
	Reason *string `json:"reason,omitempty"`
	Success bool `json:"success"`
}

// LogoutResponseUpdateData is the typed request payload for LogoutResponse.UpdateTyped.
type LogoutResponseUpdateData struct {
	SessionId string `json:"session_id"`
	Success *bool `json:"success,omitempty"`
}

// Notification is the typed data model for the notification entity.
type Notification struct {
	Actor *map[string]any `json:"actor,omitempty"`
	ActorAvatarColor string `json:"actorAvatarColor"`
	ActorAvatarUrl *string `json:"actorAvatarUrl,omitempty"`
	ActorInactive bool `json:"actorInactive"`
	ActorInitials *string `json:"actorInitials,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	BotActor *map[string]any `json:"botActor,omitempty"`
	Category string `json:"category"`
	CreatedAt any `json:"createdAt"`
	EmailedAt *any `json:"emailedAt,omitempty"`
	ExternalUserActor *map[string]any `json:"externalUserActor,omitempty"`
	GroupingKey string `json:"groupingKey"`
	GroupingPriority float64 `json:"groupingPriority"`
	Id string `json:"id"`
	InboxUrl string `json:"inboxUrl"`
	InitiativeUpdateHealth *string `json:"initiativeUpdateHealth,omitempty"`
	IsLinearActor bool `json:"isLinearActor"`
	IssueStatusType *string `json:"issueStatusType,omitempty"`
	ProjectUpdateHealth *string `json:"projectUpdateHealth,omitempty"`
	ReadAt *any `json:"readAt,omitempty"`
	SnoozedUntilAt *any `json:"snoozedUntilAt,omitempty"`
	Subtitle string `json:"subtitle"`
	Title string `json:"title"`
	Type string `json:"type"`
	UnsnoozedAt *any `json:"unsnoozedAt,omitempty"`
	UpdatedAt any `json:"updatedAt"`
	Url string `json:"url"`
	User *map[string]any `json:"user,omitempty"`
}

// NotificationLoadMatch is the typed request payload for Notification.LoadTyped.
type NotificationLoadMatch struct {
	Id string `json:"id"`
}

// NotificationListMatch is the typed request payload for Notification.ListTyped.
type NotificationListMatch struct {
	After *string `json:"after,omitempty"`
	First *int `json:"first,omitempty"`
	UnreadOnly *bool `json:"unread_only,omitempty"`
	Before *string `json:"before,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// NotificationSubscription is the typed data model for the notification_subscription entity.
type NotificationSubscription struct {
	Active bool `json:"active"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	ContextViewType *string `json:"contextViewType,omitempty"`
	CreatedAt any `json:"createdAt"`
	CustomView *map[string]any `json:"customView,omitempty"`
	Customer *map[string]any `json:"customer,omitempty"`
	Cycle *map[string]any `json:"cycle,omitempty"`
	Id string `json:"id"`
	Initiative *map[string]any `json:"initiative,omitempty"`
	Label *map[string]any `json:"label,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	Subscriber *map[string]any `json:"subscriber,omitempty"`
	Team *map[string]any `json:"team,omitempty"`
	UpdatedAt any `json:"updatedAt"`
	User *map[string]any `json:"user,omitempty"`
	UserContextViewType *string `json:"userContextViewType,omitempty"`
}

// NotificationSubscriptionLoadMatch is the typed request payload for NotificationSubscription.LoadTyped.
type NotificationSubscriptionLoadMatch struct {
	Id string `json:"id"`
}

// NotificationSubscriptionListMatch is the typed request payload for NotificationSubscription.ListTyped.
type NotificationSubscriptionListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// OAuthApplication is the typed data model for the o_auth_application entity.
type OAuthApplication struct {
	ClientId string `json:"clientId"`
	CreatedAt any `json:"createdAt"`
	Description *string `json:"description,omitempty"`
	Developer string `json:"developer"`
	DeveloperUrl string `json:"developerUrl"`
	Distribution string `json:"distribution"`
	GrantTypes string `json:"grantTypes"`
	Id string `json:"id"`
	ImageUrl *string `json:"imageUrl,omitempty"`
	Name string `json:"name"`
	RedirectUris string `json:"redirectUris"`
	UpdatedAt any `json:"updatedAt"`
	WebhookEnabled bool `json:"webhookEnabled"`
	WebhookResourceTypes string `json:"webhookResourceTypes"`
	WebhookUrl *string `json:"webhookUrl,omitempty"`
}

// OAuthApplicationLoadMatch is the typed request payload for OAuthApplication.LoadTyped.
type OAuthApplicationLoadMatch struct {
	Id string `json:"id"`
}

// OAuthApplicationListMatch is the typed request payload for OAuthApplication.ListTyped.
type OAuthApplicationListMatch struct {
	ClientId *string `json:"clientId,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Description *string `json:"description,omitempty"`
	Developer *string `json:"developer,omitempty"`
	DeveloperUrl *string `json:"developerUrl,omitempty"`
	Distribution *string `json:"distribution,omitempty"`
	GrantTypes *string `json:"grantTypes,omitempty"`
	Id *string `json:"id,omitempty"`
	ImageUrl *string `json:"imageUrl,omitempty"`
	Name *string `json:"name,omitempty"`
	RedirectUris *string `json:"redirectUris,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
	WebhookEnabled *bool `json:"webhookEnabled,omitempty"`
	WebhookResourceTypes *string `json:"webhookResourceTypes,omitempty"`
	WebhookUrl *string `json:"webhookUrl,omitempty"`
}

// OAuthApplicationCreateData is the typed request payload for OAuthApplication.CreateTyped.
type OAuthApplicationCreateData struct {
	ClientId string `json:"clientId"`
	CreatedAt any `json:"createdAt"`
	Description *string `json:"description,omitempty"`
	Developer string `json:"developer"`
	DeveloperUrl string `json:"developerUrl"`
	Distribution string `json:"distribution"`
	GrantTypes string `json:"grantTypes"`
	Id string `json:"id"`
	ImageUrl *string `json:"imageUrl,omitempty"`
	Name string `json:"name"`
	RedirectUris string `json:"redirectUris"`
	UpdatedAt any `json:"updatedAt"`
	WebhookEnabled bool `json:"webhookEnabled"`
	WebhookResourceTypes string `json:"webhookResourceTypes"`
	WebhookUrl *string `json:"webhookUrl,omitempty"`
}

// OAuthApplicationUpdateData is the typed request payload for OAuthApplication.UpdateTyped.
type OAuthApplicationUpdateData struct {
	Id string `json:"id"`
	ClientId *string `json:"clientId,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Description *string `json:"description,omitempty"`
	Developer *string `json:"developer,omitempty"`
	DeveloperUrl *string `json:"developerUrl,omitempty"`
	Distribution *string `json:"distribution,omitempty"`
	GrantTypes *string `json:"grantTypes,omitempty"`
	ImageUrl *string `json:"imageUrl,omitempty"`
	Name *string `json:"name,omitempty"`
	RedirectUris *string `json:"redirectUris,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
	WebhookEnabled *bool `json:"webhookEnabled,omitempty"`
	WebhookResourceTypes *string `json:"webhookResourceTypes,omitempty"`
	WebhookUrl *string `json:"webhookUrl,omitempty"`
}

// Organization is the typed data model for the organization entity.
type Organization struct {
	AgentAutomationEnabled bool `json:"agentAutomationEnabled"`
	AiAddonEnabled bool `json:"aiAddonEnabled"`
	AiDiscussionSummariesEnabled bool `json:"aiDiscussionSummariesEnabled"`
	AiProviderConfiguration *any `json:"aiProviderConfiguration,omitempty"`
	AiTelemetryEnabled bool `json:"aiTelemetryEnabled"`
	AiThreadSummariesEnabled bool `json:"aiThreadSummariesEnabled"`
	AllowedFileUploadContentTypes *string `json:"allowedFileUploadContentTypes,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	AuthSettings any `json:"authSettings"`
	CodeIntelligenceEnabled bool `json:"codeIntelligenceEnabled"`
	CodeIntelligenceRepository *string `json:"codeIntelligenceRepository,omitempty"`
	CodingAgentEnabled bool `json:"codingAgentEnabled"`
	CodingAgentSettings any `json:"codingAgentSettings"`
	CreatedAt any `json:"createdAt"`
	CreatedIssueCount int `json:"createdIssueCount"`
	CustomerCount int `json:"customerCount"`
	CustomersConfiguration any `json:"customersConfiguration"`
	CustomersEnabled bool `json:"customersEnabled"`
	DefaultFeedSummarySchedule *string `json:"defaultFeedSummarySchedule,omitempty"`
	DefaultHomeView *string `json:"defaultHomeView,omitempty"`
	DefaultHomeViewTargetId *string `json:"defaultHomeViewTargetId,omitempty"`
	DeletionRequestedAt *any `json:"deletionRequestedAt,omitempty"`
	FeedEnabled bool `json:"feedEnabled"`
	FiscalYearStartMonth float64 `json:"fiscalYearStartMonth"`
	GeneratedUpdatesEnabled bool `json:"generatedUpdatesEnabled"`
	GitBranchFormat *string `json:"gitBranchFormat,omitempty"`
	GitLinkbackDescriptionsEnabled bool `json:"gitLinkbackDescriptionsEnabled"`
	GitLinkbackMessagesEnabled bool `json:"gitLinkbackMessagesEnabled"`
	GitPublicLinkbackMessagesEnabled bool `json:"gitPublicLinkbackMessagesEnabled"`
	HipaaComplianceEnabled bool `json:"hipaaComplianceEnabled"`
	Id string `json:"id"`
	InitiativeUpdateReminderFrequencyInWeeks *float64 `json:"initiativeUpdateReminderFrequencyInWeeks,omitempty"`
	InitiativeUpdateRemindersDay string `json:"initiativeUpdateRemindersDay"`
	InitiativeUpdateRemindersHour float64 `json:"initiativeUpdateRemindersHour"`
	LinearAgentEnabled bool `json:"linearAgentEnabled"`
	LinearAgentSettings any `json:"linearAgentSettings"`
	LogoUrl *string `json:"logoUrl,omitempty"`
	Name string `json:"name"`
	PeriodUploadVolume float64 `json:"periodUploadVolume"`
	PreviousUrlKeys string `json:"previousUrlKeys"`
	ProjectUpdateReminderFrequencyInWeeks *float64 `json:"projectUpdateReminderFrequencyInWeeks,omitempty"`
	ProjectUpdateRemindersDay string `json:"projectUpdateRemindersDay"`
	ProjectUpdateRemindersHour float64 `json:"projectUpdateRemindersHour"`
	PullRequestIssueMode string `json:"pullRequestIssueMode"`
	PullRequestTourEnabled bool `json:"pullRequestTourEnabled"`
	ReleaseChannel string `json:"releaseChannel"`
	ReleasesEnabled bool `json:"releasesEnabled"`
	RestrictAgentInvocationToMembers *bool `json:"restrictAgentInvocationToMembers,omitempty"`
	RoadmapEnabled bool `json:"roadmapEnabled"`
	SamlEnabled bool `json:"samlEnabled"`
	SamlSettings *any `json:"samlSettings,omitempty"`
	ScimEnabled bool `json:"scimEnabled"`
	ScimSettings *any `json:"scimSettings,omitempty"`
	SecuritySettings any `json:"securitySettings"`
	SlackAutoCreateProjectChannel bool `json:"slackAutoCreateProjectChannel"`
	SlackProjectChannelIntegration *map[string]any `json:"slackProjectChannelIntegration,omitempty"`
	SlackProjectChannelPrefix string `json:"slackProjectChannelPrefix"`
	SlackProjectChannelsEnabled bool `json:"slackProjectChannelsEnabled"`
	Subscription *map[string]any `json:"subscription,omitempty"`
	ThemeSettings *any `json:"themeSettings,omitempty"`
	TrialEndsAt *any `json:"trialEndsAt,omitempty"`
	TrialStartsAt *any `json:"trialStartsAt,omitempty"`
	UpdatedAt any `json:"updatedAt"`
	UrlKey string `json:"urlKey"`
	UserCount int `json:"userCount"`
	WorkingDays float64 `json:"workingDays"`
}

// OrganizationLoadMatch is the typed request payload for Organization.LoadTyped.
type OrganizationLoadMatch struct {
	AgentAutomationEnabled *bool `json:"agentAutomationEnabled,omitempty"`
	AiAddonEnabled *bool `json:"aiAddonEnabled,omitempty"`
	AiDiscussionSummariesEnabled *bool `json:"aiDiscussionSummariesEnabled,omitempty"`
	AiProviderConfiguration *any `json:"aiProviderConfiguration,omitempty"`
	AiTelemetryEnabled *bool `json:"aiTelemetryEnabled,omitempty"`
	AiThreadSummariesEnabled *bool `json:"aiThreadSummariesEnabled,omitempty"`
	AllowedFileUploadContentTypes *string `json:"allowedFileUploadContentTypes,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	AuthSettings *any `json:"authSettings,omitempty"`
	CodeIntelligenceEnabled *bool `json:"codeIntelligenceEnabled,omitempty"`
	CodeIntelligenceRepository *string `json:"codeIntelligenceRepository,omitempty"`
	CodingAgentEnabled *bool `json:"codingAgentEnabled,omitempty"`
	CodingAgentSettings *any `json:"codingAgentSettings,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	CreatedIssueCount *int `json:"createdIssueCount,omitempty"`
	CustomerCount *int `json:"customerCount,omitempty"`
	CustomersConfiguration *any `json:"customersConfiguration,omitempty"`
	CustomersEnabled *bool `json:"customersEnabled,omitempty"`
	DefaultFeedSummarySchedule *string `json:"defaultFeedSummarySchedule,omitempty"`
	DefaultHomeView *string `json:"defaultHomeView,omitempty"`
	DefaultHomeViewTargetId *string `json:"defaultHomeViewTargetId,omitempty"`
	DeletionRequestedAt *any `json:"deletionRequestedAt,omitempty"`
	FeedEnabled *bool `json:"feedEnabled,omitempty"`
	FiscalYearStartMonth *float64 `json:"fiscalYearStartMonth,omitempty"`
	GeneratedUpdatesEnabled *bool `json:"generatedUpdatesEnabled,omitempty"`
	GitBranchFormat *string `json:"gitBranchFormat,omitempty"`
	GitLinkbackDescriptionsEnabled *bool `json:"gitLinkbackDescriptionsEnabled,omitempty"`
	GitLinkbackMessagesEnabled *bool `json:"gitLinkbackMessagesEnabled,omitempty"`
	GitPublicLinkbackMessagesEnabled *bool `json:"gitPublicLinkbackMessagesEnabled,omitempty"`
	HipaaComplianceEnabled *bool `json:"hipaaComplianceEnabled,omitempty"`
	Id string `json:"id"`
	InitiativeUpdateReminderFrequencyInWeeks *float64 `json:"initiativeUpdateReminderFrequencyInWeeks,omitempty"`
	InitiativeUpdateRemindersDay *string `json:"initiativeUpdateRemindersDay,omitempty"`
	InitiativeUpdateRemindersHour *float64 `json:"initiativeUpdateRemindersHour,omitempty"`
	LinearAgentEnabled *bool `json:"linearAgentEnabled,omitempty"`
	LinearAgentSettings *any `json:"linearAgentSettings,omitempty"`
	LogoUrl *string `json:"logoUrl,omitempty"`
	Name *string `json:"name,omitempty"`
	PeriodUploadVolume *float64 `json:"periodUploadVolume,omitempty"`
	PreviousUrlKeys *string `json:"previousUrlKeys,omitempty"`
	ProjectUpdateReminderFrequencyInWeeks *float64 `json:"projectUpdateReminderFrequencyInWeeks,omitempty"`
	ProjectUpdateRemindersDay *string `json:"projectUpdateRemindersDay,omitempty"`
	ProjectUpdateRemindersHour *float64 `json:"projectUpdateRemindersHour,omitempty"`
	PullRequestIssueMode *string `json:"pullRequestIssueMode,omitempty"`
	PullRequestTourEnabled *bool `json:"pullRequestTourEnabled,omitempty"`
	ReleaseChannel *string `json:"releaseChannel,omitempty"`
	ReleasesEnabled *bool `json:"releasesEnabled,omitempty"`
	RestrictAgentInvocationToMembers *bool `json:"restrictAgentInvocationToMembers,omitempty"`
	RoadmapEnabled *bool `json:"roadmapEnabled,omitempty"`
	SamlEnabled *bool `json:"samlEnabled,omitempty"`
	SamlSettings *any `json:"samlSettings,omitempty"`
	ScimEnabled *bool `json:"scimEnabled,omitempty"`
	ScimSettings *any `json:"scimSettings,omitempty"`
	SecuritySettings *any `json:"securitySettings,omitempty"`
	SlackAutoCreateProjectChannel *bool `json:"slackAutoCreateProjectChannel,omitempty"`
	SlackProjectChannelIntegration *map[string]any `json:"slackProjectChannelIntegration,omitempty"`
	SlackProjectChannelPrefix *string `json:"slackProjectChannelPrefix,omitempty"`
	SlackProjectChannelsEnabled *bool `json:"slackProjectChannelsEnabled,omitempty"`
	Subscription *map[string]any `json:"subscription,omitempty"`
	ThemeSettings *any `json:"themeSettings,omitempty"`
	TrialEndsAt *any `json:"trialEndsAt,omitempty"`
	TrialStartsAt *any `json:"trialStartsAt,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
	UrlKey *string `json:"urlKey,omitempty"`
	UserCount *int `json:"userCount,omitempty"`
	WorkingDays *float64 `json:"workingDays,omitempty"`
}

// OrganizationUpdateData is the typed request payload for Organization.UpdateTyped.
type OrganizationUpdateData struct {
	AgentAutomationEnabled *bool `json:"agentAutomationEnabled,omitempty"`
	AiAddonEnabled *bool `json:"aiAddonEnabled,omitempty"`
	AiDiscussionSummariesEnabled *bool `json:"aiDiscussionSummariesEnabled,omitempty"`
	AiProviderConfiguration *any `json:"aiProviderConfiguration,omitempty"`
	AiTelemetryEnabled *bool `json:"aiTelemetryEnabled,omitempty"`
	AiThreadSummariesEnabled *bool `json:"aiThreadSummariesEnabled,omitempty"`
	AllowedFileUploadContentTypes *string `json:"allowedFileUploadContentTypes,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	AuthSettings *any `json:"authSettings,omitempty"`
	CodeIntelligenceEnabled *bool `json:"codeIntelligenceEnabled,omitempty"`
	CodeIntelligenceRepository *string `json:"codeIntelligenceRepository,omitempty"`
	CodingAgentEnabled *bool `json:"codingAgentEnabled,omitempty"`
	CodingAgentSettings *any `json:"codingAgentSettings,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	CreatedIssueCount *int `json:"createdIssueCount,omitempty"`
	CustomerCount *int `json:"customerCount,omitempty"`
	CustomersConfiguration *any `json:"customersConfiguration,omitempty"`
	CustomersEnabled *bool `json:"customersEnabled,omitempty"`
	DefaultFeedSummarySchedule *string `json:"defaultFeedSummarySchedule,omitempty"`
	DefaultHomeView *string `json:"defaultHomeView,omitempty"`
	DefaultHomeViewTargetId *string `json:"defaultHomeViewTargetId,omitempty"`
	DeletionRequestedAt *any `json:"deletionRequestedAt,omitempty"`
	FeedEnabled *bool `json:"feedEnabled,omitempty"`
	FiscalYearStartMonth *float64 `json:"fiscalYearStartMonth,omitempty"`
	GeneratedUpdatesEnabled *bool `json:"generatedUpdatesEnabled,omitempty"`
	GitBranchFormat *string `json:"gitBranchFormat,omitempty"`
	GitLinkbackDescriptionsEnabled *bool `json:"gitLinkbackDescriptionsEnabled,omitempty"`
	GitLinkbackMessagesEnabled *bool `json:"gitLinkbackMessagesEnabled,omitempty"`
	GitPublicLinkbackMessagesEnabled *bool `json:"gitPublicLinkbackMessagesEnabled,omitempty"`
	HipaaComplianceEnabled *bool `json:"hipaaComplianceEnabled,omitempty"`
	Id *string `json:"id,omitempty"`
	InitiativeUpdateReminderFrequencyInWeeks *float64 `json:"initiativeUpdateReminderFrequencyInWeeks,omitempty"`
	InitiativeUpdateRemindersDay *string `json:"initiativeUpdateRemindersDay,omitempty"`
	InitiativeUpdateRemindersHour *float64 `json:"initiativeUpdateRemindersHour,omitempty"`
	LinearAgentEnabled *bool `json:"linearAgentEnabled,omitempty"`
	LinearAgentSettings *any `json:"linearAgentSettings,omitempty"`
	LogoUrl *string `json:"logoUrl,omitempty"`
	Name *string `json:"name,omitempty"`
	PeriodUploadVolume *float64 `json:"periodUploadVolume,omitempty"`
	PreviousUrlKeys *string `json:"previousUrlKeys,omitempty"`
	ProjectUpdateReminderFrequencyInWeeks *float64 `json:"projectUpdateReminderFrequencyInWeeks,omitempty"`
	ProjectUpdateRemindersDay *string `json:"projectUpdateRemindersDay,omitempty"`
	ProjectUpdateRemindersHour *float64 `json:"projectUpdateRemindersHour,omitempty"`
	PullRequestIssueMode *string `json:"pullRequestIssueMode,omitempty"`
	PullRequestTourEnabled *bool `json:"pullRequestTourEnabled,omitempty"`
	ReleaseChannel *string `json:"releaseChannel,omitempty"`
	ReleasesEnabled *bool `json:"releasesEnabled,omitempty"`
	RestrictAgentInvocationToMembers *bool `json:"restrictAgentInvocationToMembers,omitempty"`
	RoadmapEnabled *bool `json:"roadmapEnabled,omitempty"`
	SamlEnabled *bool `json:"samlEnabled,omitempty"`
	SamlSettings *any `json:"samlSettings,omitempty"`
	ScimEnabled *bool `json:"scimEnabled,omitempty"`
	ScimSettings *any `json:"scimSettings,omitempty"`
	SecuritySettings *any `json:"securitySettings,omitempty"`
	SlackAutoCreateProjectChannel *bool `json:"slackAutoCreateProjectChannel,omitempty"`
	SlackProjectChannelIntegration *map[string]any `json:"slackProjectChannelIntegration,omitempty"`
	SlackProjectChannelPrefix *string `json:"slackProjectChannelPrefix,omitempty"`
	SlackProjectChannelsEnabled *bool `json:"slackProjectChannelsEnabled,omitempty"`
	Subscription *map[string]any `json:"subscription,omitempty"`
	ThemeSettings *any `json:"themeSettings,omitempty"`
	TrialEndsAt *any `json:"trialEndsAt,omitempty"`
	TrialStartsAt *any `json:"trialStartsAt,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
	UrlKey *string `json:"urlKey,omitempty"`
	UserCount *int `json:"userCount,omitempty"`
	WorkingDays *float64 `json:"workingDays,omitempty"`
}

// OrganizationRemoveMatch is the typed request payload for Organization.RemoveTyped.
type OrganizationRemoveMatch struct {
	AgentAutomationEnabled *bool `json:"agentAutomationEnabled,omitempty"`
	AiAddonEnabled *bool `json:"aiAddonEnabled,omitempty"`
	AiDiscussionSummariesEnabled *bool `json:"aiDiscussionSummariesEnabled,omitempty"`
	AiProviderConfiguration *any `json:"aiProviderConfiguration,omitempty"`
	AiTelemetryEnabled *bool `json:"aiTelemetryEnabled,omitempty"`
	AiThreadSummariesEnabled *bool `json:"aiThreadSummariesEnabled,omitempty"`
	AllowedFileUploadContentTypes *string `json:"allowedFileUploadContentTypes,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	AuthSettings *any `json:"authSettings,omitempty"`
	CodeIntelligenceEnabled *bool `json:"codeIntelligenceEnabled,omitempty"`
	CodeIntelligenceRepository *string `json:"codeIntelligenceRepository,omitempty"`
	CodingAgentEnabled *bool `json:"codingAgentEnabled,omitempty"`
	CodingAgentSettings *any `json:"codingAgentSettings,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	CreatedIssueCount *int `json:"createdIssueCount,omitempty"`
	CustomerCount *int `json:"customerCount,omitempty"`
	CustomersConfiguration *any `json:"customersConfiguration,omitempty"`
	CustomersEnabled *bool `json:"customersEnabled,omitempty"`
	DefaultFeedSummarySchedule *string `json:"defaultFeedSummarySchedule,omitempty"`
	DefaultHomeView *string `json:"defaultHomeView,omitempty"`
	DefaultHomeViewTargetId *string `json:"defaultHomeViewTargetId,omitempty"`
	DeletionRequestedAt *any `json:"deletionRequestedAt,omitempty"`
	FeedEnabled *bool `json:"feedEnabled,omitempty"`
	FiscalYearStartMonth *float64 `json:"fiscalYearStartMonth,omitempty"`
	GeneratedUpdatesEnabled *bool `json:"generatedUpdatesEnabled,omitempty"`
	GitBranchFormat *string `json:"gitBranchFormat,omitempty"`
	GitLinkbackDescriptionsEnabled *bool `json:"gitLinkbackDescriptionsEnabled,omitempty"`
	GitLinkbackMessagesEnabled *bool `json:"gitLinkbackMessagesEnabled,omitempty"`
	GitPublicLinkbackMessagesEnabled *bool `json:"gitPublicLinkbackMessagesEnabled,omitempty"`
	HipaaComplianceEnabled *bool `json:"hipaaComplianceEnabled,omitempty"`
	Id string `json:"id"`
	InitiativeUpdateReminderFrequencyInWeeks *float64 `json:"initiativeUpdateReminderFrequencyInWeeks,omitempty"`
	InitiativeUpdateRemindersDay *string `json:"initiativeUpdateRemindersDay,omitempty"`
	InitiativeUpdateRemindersHour *float64 `json:"initiativeUpdateRemindersHour,omitempty"`
	LinearAgentEnabled *bool `json:"linearAgentEnabled,omitempty"`
	LinearAgentSettings *any `json:"linearAgentSettings,omitempty"`
	LogoUrl *string `json:"logoUrl,omitempty"`
	Name *string `json:"name,omitempty"`
	PeriodUploadVolume *float64 `json:"periodUploadVolume,omitempty"`
	PreviousUrlKeys *string `json:"previousUrlKeys,omitempty"`
	ProjectUpdateReminderFrequencyInWeeks *float64 `json:"projectUpdateReminderFrequencyInWeeks,omitempty"`
	ProjectUpdateRemindersDay *string `json:"projectUpdateRemindersDay,omitempty"`
	ProjectUpdateRemindersHour *float64 `json:"projectUpdateRemindersHour,omitempty"`
	PullRequestIssueMode *string `json:"pullRequestIssueMode,omitempty"`
	PullRequestTourEnabled *bool `json:"pullRequestTourEnabled,omitempty"`
	ReleaseChannel *string `json:"releaseChannel,omitempty"`
	ReleasesEnabled *bool `json:"releasesEnabled,omitempty"`
	RestrictAgentInvocationToMembers *bool `json:"restrictAgentInvocationToMembers,omitempty"`
	RoadmapEnabled *bool `json:"roadmapEnabled,omitempty"`
	SamlEnabled *bool `json:"samlEnabled,omitempty"`
	SamlSettings *any `json:"samlSettings,omitempty"`
	ScimEnabled *bool `json:"scimEnabled,omitempty"`
	ScimSettings *any `json:"scimSettings,omitempty"`
	SecuritySettings *any `json:"securitySettings,omitempty"`
	SlackAutoCreateProjectChannel *bool `json:"slackAutoCreateProjectChannel,omitempty"`
	SlackProjectChannelIntegration *map[string]any `json:"slackProjectChannelIntegration,omitempty"`
	SlackProjectChannelPrefix *string `json:"slackProjectChannelPrefix,omitempty"`
	SlackProjectChannelsEnabled *bool `json:"slackProjectChannelsEnabled,omitempty"`
	Subscription *map[string]any `json:"subscription,omitempty"`
	ThemeSettings *any `json:"themeSettings,omitempty"`
	TrialEndsAt *any `json:"trialEndsAt,omitempty"`
	TrialStartsAt *any `json:"trialStartsAt,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
	UrlKey *string `json:"urlKey,omitempty"`
	UserCount *int `json:"userCount,omitempty"`
	WorkingDays *float64 `json:"workingDays,omitempty"`
}

// OrganizationDomain is the typed data model for the organization_domain entity.
type OrganizationDomain struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	AuthType string `json:"authType"`
	Claimed *bool `json:"claimed,omitempty"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	DisableOrganizationCreation *bool `json:"disableOrganizationCreation,omitempty"`
	Id string `json:"id"`
	IdentityProvider *map[string]any `json:"identityProvider,omitempty"`
	Name string `json:"name"`
	UpdatedAt any `json:"updatedAt"`
	VerificationEmail *string `json:"verificationEmail,omitempty"`
	Verified bool `json:"verified"`
}

// OrganizationDomainCreateData is the typed request payload for OrganizationDomain.CreateTyped.
type OrganizationDomainCreateData struct {
	TriggerEmailVerification *bool `json:"trigger_email_verification,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	AuthType string `json:"authType"`
	Claimed *bool `json:"claimed,omitempty"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	DisableOrganizationCreation *bool `json:"disableOrganizationCreation,omitempty"`
	Id string `json:"id"`
	IdentityProvider *map[string]any `json:"identityProvider,omitempty"`
	Name string `json:"name"`
	UpdatedAt any `json:"updatedAt"`
	VerificationEmail *string `json:"verificationEmail,omitempty"`
	Verified bool `json:"verified"`
}

// OrganizationDomainUpdateData is the typed request payload for OrganizationDomain.UpdateTyped.
type OrganizationDomainUpdateData struct {
	Id string `json:"id"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	AuthType *string `json:"authType,omitempty"`
	Claimed *bool `json:"claimed,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Creator *map[string]any `json:"creator,omitempty"`
	DisableOrganizationCreation *bool `json:"disableOrganizationCreation,omitempty"`
	IdentityProvider *map[string]any `json:"identityProvider,omitempty"`
	Name *string `json:"name,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
	VerificationEmail *string `json:"verificationEmail,omitempty"`
	Verified *bool `json:"verified,omitempty"`
}

// OrganizationDomainRemoveMatch is the typed request payload for OrganizationDomain.RemoveTyped.
type OrganizationDomainRemoveMatch struct {
	Id string `json:"id"`
}

// OrganizationInvite is the typed data model for the organization_invite entity.
type OrganizationInvite struct {
	AcceptedAt *any `json:"acceptedAt,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Email string `json:"email"`
	ExpiresAt *any `json:"expiresAt,omitempty"`
	External bool `json:"external"`
	Id string `json:"id"`
	Invitee *map[string]any `json:"invitee,omitempty"`
	Inviter *map[string]any `json:"inviter,omitempty"`
	Metadata *any `json:"metadata,omitempty"`
	Organization *map[string]any `json:"organization,omitempty"`
	Role string `json:"role"`
	UpdatedAt any `json:"updatedAt"`
}

// OrganizationInviteLoadMatch is the typed request payload for OrganizationInvite.LoadTyped.
type OrganizationInviteLoadMatch struct {
	Id string `json:"id"`
}

// OrganizationInviteListMatch is the typed request payload for OrganizationInvite.ListTyped.
type OrganizationInviteListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// OrganizationInviteCreateData is the typed request payload for OrganizationInvite.CreateTyped.
type OrganizationInviteCreateData struct {
	AcceptedAt *any `json:"acceptedAt,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Email string `json:"email"`
	ExpiresAt *any `json:"expiresAt,omitempty"`
	External bool `json:"external"`
	Id string `json:"id"`
	Invitee *map[string]any `json:"invitee,omitempty"`
	Inviter *map[string]any `json:"inviter,omitempty"`
	Metadata *any `json:"metadata,omitempty"`
	Organization *map[string]any `json:"organization,omitempty"`
	Role string `json:"role"`
	UpdatedAt any `json:"updatedAt"`
}

// OrganizationInviteUpdateData is the typed request payload for OrganizationInvite.UpdateTyped.
type OrganizationInviteUpdateData struct {
	Id string `json:"id"`
	AcceptedAt *any `json:"acceptedAt,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Email *string `json:"email,omitempty"`
	ExpiresAt *any `json:"expiresAt,omitempty"`
	External *bool `json:"external,omitempty"`
	Invitee *map[string]any `json:"invitee,omitempty"`
	Inviter *map[string]any `json:"inviter,omitempty"`
	Metadata *any `json:"metadata,omitempty"`
	Organization *map[string]any `json:"organization,omitempty"`
	Role *string `json:"role,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
}

// OrganizationInviteRemoveMatch is the typed request payload for OrganizationInvite.RemoveTyped.
type OrganizationInviteRemoveMatch struct {
	Id string `json:"id"`
}

// OrganizationMeta is the typed data model for the organization_meta entity.
type OrganizationMeta struct {
	AllowedAuthServices string `json:"allowedAuthServices"`
	Region string `json:"region"`
}

// OrganizationMetaLoadMatch is the typed request payload for OrganizationMeta.LoadTyped.
type OrganizationMetaLoadMatch struct {
	UrlKey string `json:"url_key"`
}

// PasskeyLoginStartResponse is the typed data model for the passkey_login_start_response entity.
type PasskeyLoginStartResponse struct {
	Options any `json:"options"`
	Success bool `json:"success"`
}

// PasskeyLoginStartResponseUpdateData is the typed request payload for PasskeyLoginStartResponse.UpdateTyped.
type PasskeyLoginStartResponseUpdateData struct {
	AuthId string `json:"auth_id"`
	Options *any `json:"options,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// Project is the typed data model for the project entity.
type Project struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	AutoArchivedAt *any `json:"autoArchivedAt,omitempty"`
	CanceledAt *any `json:"canceledAt,omitempty"`
	Color string `json:"color"`
	CompletedAt *any `json:"completedAt,omitempty"`
	CompletedIssueCountHistory float64 `json:"completedIssueCountHistory"`
	CompletedScopeHistory float64 `json:"completedScopeHistory"`
	Content *string `json:"content,omitempty"`
	ContentState *string `json:"contentState,omitempty"`
	ConvertedFromIssue *map[string]any `json:"convertedFromIssue,omitempty"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	CurrentProgress any `json:"currentProgress"`
	Description string `json:"description"`
	DocumentContent *map[string]any `json:"documentContent,omitempty"`
	Favorite *map[string]any `json:"favorite,omitempty"`
	FrequencyResolution string `json:"frequencyResolution"`
	Health *string `json:"health,omitempty"`
	HealthUpdatedAt *any `json:"healthUpdatedAt,omitempty"`
	Icon *string `json:"icon,omitempty"`
	Id string `json:"id"`
	Identifier *string `json:"identifier,omitempty"`
	InProgressScopeHistory float64 `json:"inProgressScopeHistory"`
	IntegrationsSettings *map[string]any `json:"integrationsSettings,omitempty"`
	IssueCountHistory float64 `json:"issueCountHistory"`
	LabelIds string `json:"labelIds"`
	LastAppliedTemplate *map[string]any `json:"lastAppliedTemplate,omitempty"`
	LastUpdate *map[string]any `json:"lastUpdate,omitempty"`
	Lead *map[string]any `json:"lead,omitempty"`
	LeadTeam *map[string]any `json:"leadTeam,omitempty"`
	MicrosoftTeamsChannelId *string `json:"microsoftTeamsChannelId,omitempty"`
	Name string `json:"name"`
	PreviousIdentifiers string `json:"previousIdentifiers"`
	Priority int `json:"priority"`
	PriorityLabel string `json:"priorityLabel"`
	PrioritySortOrder float64 `json:"prioritySortOrder"`
	Progress float64 `json:"progress"`
	ProgressHistory any `json:"progressHistory"`
	ProjectUpdateRemindersPausedUntilAt *any `json:"projectUpdateRemindersPausedUntilAt,omitempty"`
	ResourceCount int `json:"resourceCount"`
	Scope float64 `json:"scope"`
	ScopeHistory float64 `json:"scopeHistory"`
	SlackChannelId *string `json:"slackChannelId,omitempty"`
	SlugId string `json:"slugId"`
	SortOrder float64 `json:"sortOrder"`
	StartDate *any `json:"startDate,omitempty"`
	StartDateResolution *string `json:"startDateResolution,omitempty"`
	StartedAt *any `json:"startedAt,omitempty"`
	Status *map[string]any `json:"status,omitempty"`
	TargetDate *any `json:"targetDate,omitempty"`
	TargetDateResolution *string `json:"targetDateResolution,omitempty"`
	Trashed *bool `json:"trashed,omitempty"`
	UpdateReminderFrequency *float64 `json:"updateReminderFrequency,omitempty"`
	UpdateReminderFrequencyInWeeks *float64 `json:"updateReminderFrequencyInWeeks,omitempty"`
	UpdateRemindersDay *string `json:"updateRemindersDay,omitempty"`
	UpdateRemindersHour *float64 `json:"updateRemindersHour,omitempty"`
	UpdatedAt any `json:"updatedAt"`
	Url string `json:"url"`
}

// ProjectLoadMatch is the typed request payload for Project.LoadTyped.
type ProjectLoadMatch struct {
	Id string `json:"id"`
}

// ProjectListMatch is the typed request payload for Project.ListTyped.
type ProjectListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// ProjectCreateData is the typed request payload for Project.CreateTyped.
type ProjectCreateData struct {
	AiConversationId *string `json:"ai_conversation_id,omitempty"`
	ProjectDraftId *string `json:"project_draft_id,omitempty"`
	SlackChannelName *string `json:"slack_channel_name,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	AutoArchivedAt *any `json:"autoArchivedAt,omitempty"`
	CanceledAt *any `json:"canceledAt,omitempty"`
	Color string `json:"color"`
	CompletedAt *any `json:"completedAt,omitempty"`
	CompletedIssueCountHistory float64 `json:"completedIssueCountHistory"`
	CompletedScopeHistory float64 `json:"completedScopeHistory"`
	Content *string `json:"content,omitempty"`
	ContentState *string `json:"contentState,omitempty"`
	ConvertedFromIssue *map[string]any `json:"convertedFromIssue,omitempty"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	CurrentProgress any `json:"currentProgress"`
	Description string `json:"description"`
	DocumentContent *map[string]any `json:"documentContent,omitempty"`
	Favorite *map[string]any `json:"favorite,omitempty"`
	FrequencyResolution string `json:"frequencyResolution"`
	Health *string `json:"health,omitempty"`
	HealthUpdatedAt *any `json:"healthUpdatedAt,omitempty"`
	Icon *string `json:"icon,omitempty"`
	Id string `json:"id"`
	Identifier *string `json:"identifier,omitempty"`
	InProgressScopeHistory float64 `json:"inProgressScopeHistory"`
	IntegrationsSettings *map[string]any `json:"integrationsSettings,omitempty"`
	IssueCountHistory float64 `json:"issueCountHistory"`
	LabelIds string `json:"labelIds"`
	LastAppliedTemplate *map[string]any `json:"lastAppliedTemplate,omitempty"`
	LastUpdate *map[string]any `json:"lastUpdate,omitempty"`
	Lead *map[string]any `json:"lead,omitempty"`
	LeadTeam *map[string]any `json:"leadTeam,omitempty"`
	MicrosoftTeamsChannelId *string `json:"microsoftTeamsChannelId,omitempty"`
	Name string `json:"name"`
	PreviousIdentifiers string `json:"previousIdentifiers"`
	Priority int `json:"priority"`
	PriorityLabel string `json:"priorityLabel"`
	PrioritySortOrder float64 `json:"prioritySortOrder"`
	Progress float64 `json:"progress"`
	ProgressHistory any `json:"progressHistory"`
	ProjectUpdateRemindersPausedUntilAt *any `json:"projectUpdateRemindersPausedUntilAt,omitempty"`
	ResourceCount int `json:"resourceCount"`
	Scope float64 `json:"scope"`
	ScopeHistory float64 `json:"scopeHistory"`
	SlackChannelId *string `json:"slackChannelId,omitempty"`
	SlugId string `json:"slugId"`
	SortOrder float64 `json:"sortOrder"`
	StartDate *any `json:"startDate,omitempty"`
	StartDateResolution *string `json:"startDateResolution,omitempty"`
	StartedAt *any `json:"startedAt,omitempty"`
	Status *map[string]any `json:"status,omitempty"`
	TargetDate *any `json:"targetDate,omitempty"`
	TargetDateResolution *string `json:"targetDateResolution,omitempty"`
	Trashed *bool `json:"trashed,omitempty"`
	UpdateReminderFrequency *float64 `json:"updateReminderFrequency,omitempty"`
	UpdateReminderFrequencyInWeeks *float64 `json:"updateReminderFrequencyInWeeks,omitempty"`
	UpdateRemindersDay *string `json:"updateRemindersDay,omitempty"`
	UpdateRemindersHour *float64 `json:"updateRemindersHour,omitempty"`
	UpdatedAt any `json:"updatedAt"`
	Url string `json:"url"`
}

// ProjectUpdateData is the typed request payload for Project.UpdateTyped.
type ProjectUpdateData struct {
	Id string `json:"id"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	AutoArchivedAt *any `json:"autoArchivedAt,omitempty"`
	CanceledAt *any `json:"canceledAt,omitempty"`
	Color *string `json:"color,omitempty"`
	CompletedAt *any `json:"completedAt,omitempty"`
	CompletedIssueCountHistory *float64 `json:"completedIssueCountHistory,omitempty"`
	CompletedScopeHistory *float64 `json:"completedScopeHistory,omitempty"`
	Content *string `json:"content,omitempty"`
	ContentState *string `json:"contentState,omitempty"`
	ConvertedFromIssue *map[string]any `json:"convertedFromIssue,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Creator *map[string]any `json:"creator,omitempty"`
	CurrentProgress *any `json:"currentProgress,omitempty"`
	Description *string `json:"description,omitempty"`
	DocumentContent *map[string]any `json:"documentContent,omitempty"`
	Favorite *map[string]any `json:"favorite,omitempty"`
	FrequencyResolution *string `json:"frequencyResolution,omitempty"`
	Health *string `json:"health,omitempty"`
	HealthUpdatedAt *any `json:"healthUpdatedAt,omitempty"`
	Icon *string `json:"icon,omitempty"`
	Identifier *string `json:"identifier,omitempty"`
	InProgressScopeHistory *float64 `json:"inProgressScopeHistory,omitempty"`
	IntegrationsSettings *map[string]any `json:"integrationsSettings,omitempty"`
	IssueCountHistory *float64 `json:"issueCountHistory,omitempty"`
	LabelIds *string `json:"labelIds,omitempty"`
	LastAppliedTemplate *map[string]any `json:"lastAppliedTemplate,omitempty"`
	LastUpdate *map[string]any `json:"lastUpdate,omitempty"`
	Lead *map[string]any `json:"lead,omitempty"`
	LeadTeam *map[string]any `json:"leadTeam,omitempty"`
	MicrosoftTeamsChannelId *string `json:"microsoftTeamsChannelId,omitempty"`
	Name *string `json:"name,omitempty"`
	PreviousIdentifiers *string `json:"previousIdentifiers,omitempty"`
	Priority *int `json:"priority,omitempty"`
	PriorityLabel *string `json:"priorityLabel,omitempty"`
	PrioritySortOrder *float64 `json:"prioritySortOrder,omitempty"`
	Progress *float64 `json:"progress,omitempty"`
	ProgressHistory *any `json:"progressHistory,omitempty"`
	ProjectUpdateRemindersPausedUntilAt *any `json:"projectUpdateRemindersPausedUntilAt,omitempty"`
	ResourceCount *int `json:"resourceCount,omitempty"`
	Scope *float64 `json:"scope,omitempty"`
	ScopeHistory *float64 `json:"scopeHistory,omitempty"`
	SlackChannelId *string `json:"slackChannelId,omitempty"`
	SlugId *string `json:"slugId,omitempty"`
	SortOrder *float64 `json:"sortOrder,omitempty"`
	StartDate *any `json:"startDate,omitempty"`
	StartDateResolution *string `json:"startDateResolution,omitempty"`
	StartedAt *any `json:"startedAt,omitempty"`
	Status *map[string]any `json:"status,omitempty"`
	TargetDate *any `json:"targetDate,omitempty"`
	TargetDateResolution *string `json:"targetDateResolution,omitempty"`
	Trashed *bool `json:"trashed,omitempty"`
	UpdateReminderFrequency *float64 `json:"updateReminderFrequency,omitempty"`
	UpdateReminderFrequencyInWeeks *float64 `json:"updateReminderFrequencyInWeeks,omitempty"`
	UpdateRemindersDay *string `json:"updateRemindersDay,omitempty"`
	UpdateRemindersHour *float64 `json:"updateRemindersHour,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
	Url *string `json:"url,omitempty"`
}

// ProjectRemoveMatch is the typed request payload for Project.RemoveTyped.
type ProjectRemoveMatch struct {
	Id string `json:"id"`
}

// ProjectLabel is the typed data model for the project_label entity.
type ProjectLabel struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Color string `json:"color"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	Description *string `json:"description,omitempty"`
	Id string `json:"id"`
	InheritedFrom *map[string]any `json:"inheritedFrom,omitempty"`
	IsGroup bool `json:"isGroup"`
	LastAppliedAt *any `json:"lastAppliedAt,omitempty"`
	Name string `json:"name"`
	Organization *map[string]any `json:"organization,omitempty"`
	Parent *map[string]any `json:"parent,omitempty"`
	RetiredAt *any `json:"retiredAt,omitempty"`
	RetiredBy *map[string]any `json:"retiredBy,omitempty"`
	Team *map[string]any `json:"team,omitempty"`
	UpdatedAt any `json:"updatedAt"`
}

// ProjectLabelLoadMatch is the typed request payload for ProjectLabel.LoadTyped.
type ProjectLabelLoadMatch struct {
	Id string `json:"id"`
}

// ProjectLabelListMatch is the typed request payload for ProjectLabel.ListTyped.
type ProjectLabelListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// ProjectLabelCreateData is the typed request payload for ProjectLabel.CreateTyped.
type ProjectLabelCreateData struct {
	ReplaceTeamLabel *bool `json:"replace_team_label,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Color string `json:"color"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	Description *string `json:"description,omitempty"`
	Id string `json:"id"`
	InheritedFrom *map[string]any `json:"inheritedFrom,omitempty"`
	IsGroup bool `json:"isGroup"`
	LastAppliedAt *any `json:"lastAppliedAt,omitempty"`
	Name string `json:"name"`
	Organization *map[string]any `json:"organization,omitempty"`
	Parent *map[string]any `json:"parent,omitempty"`
	RetiredAt *any `json:"retiredAt,omitempty"`
	RetiredBy *map[string]any `json:"retiredBy,omitempty"`
	Team *map[string]any `json:"team,omitempty"`
	UpdatedAt any `json:"updatedAt"`
}

// ProjectLabelUpdateData is the typed request payload for ProjectLabel.UpdateTyped.
type ProjectLabelUpdateData struct {
	Id string `json:"id"`
	ReplaceTeamLabel *bool `json:"replace_team_label,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Color *string `json:"color,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Creator *map[string]any `json:"creator,omitempty"`
	Description *string `json:"description,omitempty"`
	InheritedFrom *map[string]any `json:"inheritedFrom,omitempty"`
	IsGroup *bool `json:"isGroup,omitempty"`
	LastAppliedAt *any `json:"lastAppliedAt,omitempty"`
	Name *string `json:"name,omitempty"`
	Organization *map[string]any `json:"organization,omitempty"`
	Parent *map[string]any `json:"parent,omitempty"`
	RetiredAt *any `json:"retiredAt,omitempty"`
	RetiredBy *map[string]any `json:"retiredBy,omitempty"`
	Team *map[string]any `json:"team,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
}

// ProjectLabelRemoveMatch is the typed request payload for ProjectLabel.RemoveTyped.
type ProjectLabelRemoveMatch struct {
	Id string `json:"id"`
}

// ProjectMilestone is the typed data model for the project_milestone entity.
type ProjectMilestone struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	CurrentProgress any `json:"currentProgress"`
	Description *string `json:"description,omitempty"`
	DescriptionState *string `json:"descriptionState,omitempty"`
	DocumentContent *map[string]any `json:"documentContent,omitempty"`
	Id string `json:"id"`
	Name string `json:"name"`
	Progress float64 `json:"progress"`
	ProgressHistory any `json:"progressHistory"`
	Project *map[string]any `json:"project,omitempty"`
	SortOrder float64 `json:"sortOrder"`
	Status string `json:"status"`
	TargetDate *any `json:"targetDate,omitempty"`
	UpdatedAt any `json:"updatedAt"`
}

// ProjectMilestoneLoadMatch is the typed request payload for ProjectMilestone.LoadTyped.
type ProjectMilestoneLoadMatch struct {
	Id string `json:"id"`
}

// ProjectMilestoneListMatch is the typed request payload for ProjectMilestone.ListTyped.
type ProjectMilestoneListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// ProjectMilestoneCreateData is the typed request payload for ProjectMilestone.CreateTyped.
type ProjectMilestoneCreateData struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	CurrentProgress any `json:"currentProgress"`
	Description *string `json:"description,omitempty"`
	DescriptionState *string `json:"descriptionState,omitempty"`
	DocumentContent *map[string]any `json:"documentContent,omitempty"`
	Id string `json:"id"`
	Name string `json:"name"`
	Progress float64 `json:"progress"`
	ProgressHistory any `json:"progressHistory"`
	Project *map[string]any `json:"project,omitempty"`
	SortOrder float64 `json:"sortOrder"`
	Status string `json:"status"`
	TargetDate *any `json:"targetDate,omitempty"`
	UpdatedAt any `json:"updatedAt"`
}

// ProjectMilestoneUpdateData is the typed request payload for ProjectMilestone.UpdateTyped.
type ProjectMilestoneUpdateData struct {
	Id string `json:"id"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	CurrentProgress *any `json:"currentProgress,omitempty"`
	Description *string `json:"description,omitempty"`
	DescriptionState *string `json:"descriptionState,omitempty"`
	DocumentContent *map[string]any `json:"documentContent,omitempty"`
	Name *string `json:"name,omitempty"`
	Progress *float64 `json:"progress,omitempty"`
	ProgressHistory *any `json:"progressHistory,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	SortOrder *float64 `json:"sortOrder,omitempty"`
	Status *string `json:"status,omitempty"`
	TargetDate *any `json:"targetDate,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
}

// ProjectMilestoneRemoveMatch is the typed request payload for ProjectMilestone.RemoveTyped.
type ProjectMilestoneRemoveMatch struct {
	Id string `json:"id"`
}

// ProjectMilestoneMoveProjectTeam is the typed data model for the project_milestone_move_project_team entity.
type ProjectMilestoneMoveProjectTeam struct {
	Id *string `json:"id,omitempty"`
	ProjectId string `json:"projectId"`
	TeamIds string `json:"teamIds"`
}

// ProjectMilestoneMoveProjectTeamUpdateData is the typed request payload for ProjectMilestoneMoveProjectTeam.UpdateTyped.
type ProjectMilestoneMoveProjectTeamUpdateData struct {
	Id string `json:"id"`
	ProjectId *string `json:"projectId,omitempty"`
	TeamIds *string `json:"teamIds,omitempty"`
}

// ProjectRelation is the typed data model for the project_relation entity.
type ProjectRelation struct {
	AnchorType string `json:"anchorType"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Id string `json:"id"`
	Project *map[string]any `json:"project,omitempty"`
	ProjectMilestone *map[string]any `json:"projectMilestone,omitempty"`
	RelatedAnchorType string `json:"relatedAnchorType"`
	RelatedProject *map[string]any `json:"relatedProject,omitempty"`
	RelatedProjectMilestone *map[string]any `json:"relatedProjectMilestone,omitempty"`
	Type string `json:"type"`
	UpdatedAt any `json:"updatedAt"`
	User *map[string]any `json:"user,omitempty"`
}

// ProjectRelationLoadMatch is the typed request payload for ProjectRelation.LoadTyped.
type ProjectRelationLoadMatch struct {
	Id string `json:"id"`
}

// ProjectRelationListMatch is the typed request payload for ProjectRelation.ListTyped.
type ProjectRelationListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// ProjectRelationCreateData is the typed request payload for ProjectRelation.CreateTyped.
type ProjectRelationCreateData struct {
	AnchorType string `json:"anchorType"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Id string `json:"id"`
	Project *map[string]any `json:"project,omitempty"`
	ProjectMilestone *map[string]any `json:"projectMilestone,omitempty"`
	RelatedAnchorType string `json:"relatedAnchorType"`
	RelatedProject *map[string]any `json:"relatedProject,omitempty"`
	RelatedProjectMilestone *map[string]any `json:"relatedProjectMilestone,omitempty"`
	Type string `json:"type"`
	UpdatedAt any `json:"updatedAt"`
	User *map[string]any `json:"user,omitempty"`
}

// ProjectRelationUpdateData is the typed request payload for ProjectRelation.UpdateTyped.
type ProjectRelationUpdateData struct {
	Id string `json:"id"`
	AnchorType *string `json:"anchorType,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	ProjectMilestone *map[string]any `json:"projectMilestone,omitempty"`
	RelatedAnchorType *string `json:"relatedAnchorType,omitempty"`
	RelatedProject *map[string]any `json:"relatedProject,omitempty"`
	RelatedProjectMilestone *map[string]any `json:"relatedProjectMilestone,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
	User *map[string]any `json:"user,omitempty"`
}

// ProjectRelationRemoveMatch is the typed request payload for ProjectRelation.RemoveTyped.
type ProjectRelationRemoveMatch struct {
	Id string `json:"id"`
}

// ProjectSearchResult is the typed data model for the project_search_result entity.
type ProjectSearchResult struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	AutoArchivedAt *any `json:"autoArchivedAt,omitempty"`
	CanceledAt *any `json:"canceledAt,omitempty"`
	Color string `json:"color"`
	CompletedAt *any `json:"completedAt,omitempty"`
	CompletedIssueCountHistory float64 `json:"completedIssueCountHistory"`
	CompletedScopeHistory float64 `json:"completedScopeHistory"`
	Content *string `json:"content,omitempty"`
	ContentState *string `json:"contentState,omitempty"`
	ConvertedFromIssue *map[string]any `json:"convertedFromIssue,omitempty"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	CurrentProgress any `json:"currentProgress"`
	Description string `json:"description"`
	DocumentContent *map[string]any `json:"documentContent,omitempty"`
	Favorite *map[string]any `json:"favorite,omitempty"`
	FrequencyResolution string `json:"frequencyResolution"`
	Health *string `json:"health,omitempty"`
	HealthUpdatedAt *any `json:"healthUpdatedAt,omitempty"`
	Icon *string `json:"icon,omitempty"`
	Id string `json:"id"`
	Identifier *string `json:"identifier,omitempty"`
	InProgressScopeHistory float64 `json:"inProgressScopeHistory"`
	IntegrationsSettings *map[string]any `json:"integrationsSettings,omitempty"`
	IssueCountHistory float64 `json:"issueCountHistory"`
	LabelIds string `json:"labelIds"`
	LastAppliedTemplate *map[string]any `json:"lastAppliedTemplate,omitempty"`
	LastUpdate *map[string]any `json:"lastUpdate,omitempty"`
	Lead *map[string]any `json:"lead,omitempty"`
	LeadTeam *map[string]any `json:"leadTeam,omitempty"`
	Metadata any `json:"metadata"`
	MicrosoftTeamsChannelId *string `json:"microsoftTeamsChannelId,omitempty"`
	Name string `json:"name"`
	PreviousIdentifiers string `json:"previousIdentifiers"`
	Priority int `json:"priority"`
	PriorityLabel string `json:"priorityLabel"`
	PrioritySortOrder float64 `json:"prioritySortOrder"`
	Progress float64 `json:"progress"`
	ProgressHistory any `json:"progressHistory"`
	ProjectUpdateRemindersPausedUntilAt *any `json:"projectUpdateRemindersPausedUntilAt,omitempty"`
	ResourceCount int `json:"resourceCount"`
	Scope float64 `json:"scope"`
	ScopeHistory float64 `json:"scopeHistory"`
	SlackChannelId *string `json:"slackChannelId,omitempty"`
	SlugId string `json:"slugId"`
	SortOrder float64 `json:"sortOrder"`
	StartDate *any `json:"startDate,omitempty"`
	StartDateResolution *string `json:"startDateResolution,omitempty"`
	StartedAt *any `json:"startedAt,omitempty"`
	Status *map[string]any `json:"status,omitempty"`
	TargetDate *any `json:"targetDate,omitempty"`
	TargetDateResolution *string `json:"targetDateResolution,omitempty"`
	Trashed *bool `json:"trashed,omitempty"`
	UpdateReminderFrequency *float64 `json:"updateReminderFrequency,omitempty"`
	UpdateReminderFrequencyInWeeks *float64 `json:"updateReminderFrequencyInWeeks,omitempty"`
	UpdateRemindersDay *string `json:"updateRemindersDay,omitempty"`
	UpdateRemindersHour *float64 `json:"updateRemindersHour,omitempty"`
	UpdatedAt any `json:"updatedAt"`
	Url string `json:"url"`
}

// ProjectSearchResultListMatch is the typed request payload for ProjectSearchResult.ListTyped.
type ProjectSearchResultListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	IncludeComment *bool `json:"include_comment,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
	Term string `json:"term"`
}

// ProjectStatus is the typed data model for the project_status entity.
type ProjectStatus struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Color string `json:"color"`
	CreatedAt any `json:"createdAt"`
	Description *string `json:"description,omitempty"`
	Id string `json:"id"`
	Indefinite bool `json:"indefinite"`
	InheritedFrom *map[string]any `json:"inheritedFrom,omitempty"`
	Name string `json:"name"`
	Position float64 `json:"position"`
	Team *map[string]any `json:"team,omitempty"`
	Type string `json:"type"`
	UpdatedAt any `json:"updatedAt"`
}

// ProjectStatusLoadMatch is the typed request payload for ProjectStatus.LoadTyped.
type ProjectStatusLoadMatch struct {
	Id string `json:"id"`
}

// ProjectStatusListMatch is the typed request payload for ProjectStatus.ListTyped.
type ProjectStatusListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// ProjectStatusCreateData is the typed request payload for ProjectStatus.CreateTyped.
type ProjectStatusCreateData struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Color string `json:"color"`
	CreatedAt any `json:"createdAt"`
	Description *string `json:"description,omitempty"`
	Id string `json:"id"`
	Indefinite bool `json:"indefinite"`
	InheritedFrom *map[string]any `json:"inheritedFrom,omitempty"`
	Name string `json:"name"`
	Position float64 `json:"position"`
	Team *map[string]any `json:"team,omitempty"`
	Type string `json:"type"`
	UpdatedAt any `json:"updatedAt"`
}

// ProjectStatusUpdateData is the typed request payload for ProjectStatus.UpdateTyped.
type ProjectStatusUpdateData struct {
	Id string `json:"id"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Color *string `json:"color,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Description *string `json:"description,omitempty"`
	Indefinite *bool `json:"indefinite,omitempty"`
	InheritedFrom *map[string]any `json:"inheritedFrom,omitempty"`
	Name *string `json:"name,omitempty"`
	Position *float64 `json:"position,omitempty"`
	Team *map[string]any `json:"team,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
}

// ProjectUpdate is the typed data model for the project_update entity.
type ProjectUpdate struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Body string `json:"body"`
	BodyData string `json:"bodyData"`
	CommentCount int `json:"commentCount"`
	CreatedAt any `json:"createdAt"`
	Diff *any `json:"diff,omitempty"`
	DiffMarkdown *string `json:"diffMarkdown,omitempty"`
	EditedAt *any `json:"editedAt,omitempty"`
	Health string `json:"health"`
	Id string `json:"id"`
	InfoSnapshot *any `json:"infoSnapshot,omitempty"`
	IsDiffHidden bool `json:"isDiffHidden"`
	IsStale bool `json:"isStale"`
	Project *map[string]any `json:"project,omitempty"`
	ReactionData any `json:"reactionData"`
	ShortSummary *string `json:"shortSummary,omitempty"`
	SlugId string `json:"slugId"`
	UpdatedAt any `json:"updatedAt"`
	Url string `json:"url"`
	User *map[string]any `json:"user,omitempty"`
}

// ProjectUpdateLoadMatch is the typed request payload for ProjectUpdate.LoadTyped.
type ProjectUpdateLoadMatch struct {
	Id string `json:"id"`
	ProjectId *string `json:"project_id,omitempty"`
}

// ProjectUpdateListMatch is the typed request payload for ProjectUpdate.ListTyped.
type ProjectUpdateListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// ProjectUpdateCreateData is the typed request payload for ProjectUpdate.CreateTyped.
type ProjectUpdateCreateData struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Body string `json:"body"`
	BodyData string `json:"bodyData"`
	CommentCount int `json:"commentCount"`
	CreatedAt any `json:"createdAt"`
	Diff *any `json:"diff,omitempty"`
	DiffMarkdown *string `json:"diffMarkdown,omitempty"`
	EditedAt *any `json:"editedAt,omitempty"`
	Health string `json:"health"`
	Id string `json:"id"`
	InfoSnapshot *any `json:"infoSnapshot,omitempty"`
	IsDiffHidden bool `json:"isDiffHidden"`
	IsStale bool `json:"isStale"`
	Project *map[string]any `json:"project,omitempty"`
	ReactionData any `json:"reactionData"`
	ShortSummary *string `json:"shortSummary,omitempty"`
	SlugId string `json:"slugId"`
	UpdatedAt any `json:"updatedAt"`
	Url string `json:"url"`
	User *map[string]any `json:"user,omitempty"`
}

// ProjectUpdateUpdateData is the typed request payload for ProjectUpdate.UpdateTyped.
type ProjectUpdateUpdateData struct {
	Id string `json:"id"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Body *string `json:"body,omitempty"`
	BodyData *string `json:"bodyData,omitempty"`
	CommentCount *int `json:"commentCount,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Diff *any `json:"diff,omitempty"`
	DiffMarkdown *string `json:"diffMarkdown,omitempty"`
	EditedAt *any `json:"editedAt,omitempty"`
	Health *string `json:"health,omitempty"`
	InfoSnapshot *any `json:"infoSnapshot,omitempty"`
	IsDiffHidden *bool `json:"isDiffHidden,omitempty"`
	IsStale *bool `json:"isStale,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	ReactionData *any `json:"reactionData,omitempty"`
	ShortSummary *string `json:"shortSummary,omitempty"`
	SlugId *string `json:"slugId,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
	Url *string `json:"url,omitempty"`
	User *map[string]any `json:"user,omitempty"`
}

// ProjectUpdateRemoveMatch is the typed request payload for ProjectUpdate.RemoveTyped.
type ProjectUpdateRemoveMatch struct {
	Id string `json:"id"`
}

// PushSubscription is the typed data model for the push_subscription entity.
type PushSubscription struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Id string `json:"id"`
	UpdatedAt any `json:"updatedAt"`
}

// PushSubscriptionCreateData is the typed request payload for PushSubscription.CreateTyped.
type PushSubscriptionCreateData struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Id string `json:"id"`
	UpdatedAt any `json:"updatedAt"`
}

// PushSubscriptionRemoveMatch is the typed request payload for PushSubscription.RemoveTyped.
type PushSubscriptionRemoveMatch struct {
	Id string `json:"id"`
}

// Reaction is the typed data model for the reaction entity.
type Reaction struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Comment *map[string]any `json:"comment,omitempty"`
	CreatedAt any `json:"createdAt"`
	Emoji string `json:"emoji"`
	ExternalUser *map[string]any `json:"externalUser,omitempty"`
	Id string `json:"id"`
	InitiativeUpdate *map[string]any `json:"initiativeUpdate,omitempty"`
	Issue *map[string]any `json:"issue,omitempty"`
	Post *map[string]any `json:"post,omitempty"`
	ProjectUpdate *map[string]any `json:"projectUpdate,omitempty"`
	UpdatedAt any `json:"updatedAt"`
	User *map[string]any `json:"user,omitempty"`
}

// ReactionCreateData is the typed request payload for Reaction.CreateTyped.
type ReactionCreateData struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Comment *map[string]any `json:"comment,omitempty"`
	CreatedAt any `json:"createdAt"`
	Emoji string `json:"emoji"`
	ExternalUser *map[string]any `json:"externalUser,omitempty"`
	Id string `json:"id"`
	InitiativeUpdate *map[string]any `json:"initiativeUpdate,omitempty"`
	Issue *map[string]any `json:"issue,omitempty"`
	Post *map[string]any `json:"post,omitempty"`
	ProjectUpdate *map[string]any `json:"projectUpdate,omitempty"`
	UpdatedAt any `json:"updatedAt"`
	User *map[string]any `json:"user,omitempty"`
}

// ReactionRemoveMatch is the typed request payload for Reaction.RemoveTyped.
type ReactionRemoveMatch struct {
	Id string `json:"id"`
}

// Release is the typed data model for the release entity.
type Release struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	AutoArchivedAt *any `json:"autoArchivedAt,omitempty"`
	CanceledAt *any `json:"canceledAt,omitempty"`
	CommitSha *string `json:"commitSha,omitempty"`
	CompletedAt *any `json:"completedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	CurrentProgress any `json:"currentProgress"`
	Description *string `json:"description,omitempty"`
	Id string `json:"id"`
	IssueCount int `json:"issueCount"`
	Name string `json:"name"`
	Pipeline *map[string]any `json:"pipeline,omitempty"`
	ProgressHistory any `json:"progressHistory"`
	ReleaseNote *map[string]any `json:"releaseNote,omitempty"`
	SlugId string `json:"slugId"`
	Stage *map[string]any `json:"stage,omitempty"`
	StartDate *any `json:"startDate,omitempty"`
	StartedAt *any `json:"startedAt,omitempty"`
	TargetDate *any `json:"targetDate,omitempty"`
	Trashed *bool `json:"trashed,omitempty"`
	UpdatedAt any `json:"updatedAt"`
	Url string `json:"url"`
	Version *string `json:"version,omitempty"`
}

// ReleaseLoadMatch is the typed request payload for Release.LoadTyped.
type ReleaseLoadMatch struct {
	Id string `json:"id"`
}

// ReleaseListMatch is the typed request payload for Release.ListTyped.
type ReleaseListMatch struct {
	First *int `json:"first,omitempty"`
	Term *string `json:"term,omitempty"`
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// ReleaseCreateData is the typed request payload for Release.CreateTyped.
type ReleaseCreateData struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	AutoArchivedAt *any `json:"autoArchivedAt,omitempty"`
	CanceledAt *any `json:"canceledAt,omitempty"`
	CommitSha *string `json:"commitSha,omitempty"`
	CompletedAt *any `json:"completedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	CurrentProgress any `json:"currentProgress"`
	Description *string `json:"description,omitempty"`
	Id string `json:"id"`
	IssueCount int `json:"issueCount"`
	Name string `json:"name"`
	Pipeline *map[string]any `json:"pipeline,omitempty"`
	ProgressHistory any `json:"progressHistory"`
	ReleaseNote *map[string]any `json:"releaseNote,omitempty"`
	SlugId string `json:"slugId"`
	Stage *map[string]any `json:"stage,omitempty"`
	StartDate *any `json:"startDate,omitempty"`
	StartedAt *any `json:"startedAt,omitempty"`
	TargetDate *any `json:"targetDate,omitempty"`
	Trashed *bool `json:"trashed,omitempty"`
	UpdatedAt any `json:"updatedAt"`
	Url string `json:"url"`
	Version *string `json:"version,omitempty"`
}

// ReleaseUpdateData is the typed request payload for Release.UpdateTyped.
type ReleaseUpdateData struct {
	Id string `json:"id"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	AutoArchivedAt *any `json:"autoArchivedAt,omitempty"`
	CanceledAt *any `json:"canceledAt,omitempty"`
	CommitSha *string `json:"commitSha,omitempty"`
	CompletedAt *any `json:"completedAt,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Creator *map[string]any `json:"creator,omitempty"`
	CurrentProgress *any `json:"currentProgress,omitempty"`
	Description *string `json:"description,omitempty"`
	IssueCount *int `json:"issueCount,omitempty"`
	Name *string `json:"name,omitempty"`
	Pipeline *map[string]any `json:"pipeline,omitempty"`
	ProgressHistory *any `json:"progressHistory,omitempty"`
	ReleaseNote *map[string]any `json:"releaseNote,omitempty"`
	SlugId *string `json:"slugId,omitempty"`
	Stage *map[string]any `json:"stage,omitempty"`
	StartDate *any `json:"startDate,omitempty"`
	StartedAt *any `json:"startedAt,omitempty"`
	TargetDate *any `json:"targetDate,omitempty"`
	Trashed *bool `json:"trashed,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
	Url *string `json:"url,omitempty"`
	Version *string `json:"version,omitempty"`
}

// ReleaseRemoveMatch is the typed request payload for Release.RemoveTyped.
type ReleaseRemoveMatch struct {
	Id string `json:"id"`
}

// ReleaseNote is the typed data model for the release_note entity.
type ReleaseNote struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	DocumentContent *map[string]any `json:"documentContent,omitempty"`
	FirstRelease *map[string]any `json:"firstRelease,omitempty"`
	GenerationStatus *string `json:"generationStatus,omitempty"`
	Id string `json:"id"`
	LastRelease *map[string]any `json:"lastRelease,omitempty"`
	Pipeline *map[string]any `json:"pipeline,omitempty"`
	ReleaseCount int `json:"releaseCount"`
	SlugId string `json:"slugId"`
	Title *string `json:"title,omitempty"`
	UpdatedAt any `json:"updatedAt"`
	Url string `json:"url"`
}

// ReleaseNoteLoadMatch is the typed request payload for ReleaseNote.LoadTyped.
type ReleaseNoteLoadMatch struct {
	Id string `json:"id"`
}

// ReleaseNoteListMatch is the typed request payload for ReleaseNote.ListTyped.
type ReleaseNoteListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// ReleaseNoteCreateData is the typed request payload for ReleaseNote.CreateTyped.
type ReleaseNoteCreateData struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	DocumentContent *map[string]any `json:"documentContent,omitempty"`
	FirstRelease *map[string]any `json:"firstRelease,omitempty"`
	GenerationStatus *string `json:"generationStatus,omitempty"`
	Id string `json:"id"`
	LastRelease *map[string]any `json:"lastRelease,omitempty"`
	Pipeline *map[string]any `json:"pipeline,omitempty"`
	ReleaseCount int `json:"releaseCount"`
	SlugId string `json:"slugId"`
	Title *string `json:"title,omitempty"`
	UpdatedAt any `json:"updatedAt"`
	Url string `json:"url"`
}

// ReleaseNoteUpdateData is the typed request payload for ReleaseNote.UpdateTyped.
type ReleaseNoteUpdateData struct {
	Id string `json:"id"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	DocumentContent *map[string]any `json:"documentContent,omitempty"`
	FirstRelease *map[string]any `json:"firstRelease,omitempty"`
	GenerationStatus *string `json:"generationStatus,omitempty"`
	LastRelease *map[string]any `json:"lastRelease,omitempty"`
	Pipeline *map[string]any `json:"pipeline,omitempty"`
	ReleaseCount *int `json:"releaseCount,omitempty"`
	SlugId *string `json:"slugId,omitempty"`
	Title *string `json:"title,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
	Url *string `json:"url,omitempty"`
}

// ReleaseNoteRemoveMatch is the typed request payload for ReleaseNote.RemoveTyped.
type ReleaseNoteRemoveMatch struct {
	Id string `json:"id"`
}

// ReleasePipeline is the typed data model for the release_pipeline entity.
type ReleasePipeline struct {
	ApproximateReleaseCount int `json:"approximateReleaseCount"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	AutoGenerateReleaseNotesOnCompletion bool `json:"autoGenerateReleaseNotesOnCompletion"`
	CreatedAt any `json:"createdAt"`
	Id string `json:"id"`
	IncludePathPatterns string `json:"includePathPatterns"`
	IsProduction bool `json:"isProduction"`
	LatestReleaseNote *map[string]any `json:"latestReleaseNote,omitempty"`
	Name string `json:"name"`
	ReleaseNoteTemplate *map[string]any `json:"releaseNoteTemplate,omitempty"`
	RolloverIssuesOnCompletion bool `json:"rolloverIssuesOnCompletion"`
	SlugId string `json:"slugId"`
	Trashed *bool `json:"trashed,omitempty"`
	Type string `json:"type"`
	UpdatedAt any `json:"updatedAt"`
	Url string `json:"url"`
}

// ReleasePipelineLoadMatch is the typed request payload for ReleasePipeline.LoadTyped.
type ReleasePipelineLoadMatch struct {
	Id string `json:"id"`
}

// ReleasePipelineListMatch is the typed request payload for ReleasePipeline.ListTyped.
type ReleasePipelineListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// ReleasePipelineCreateData is the typed request payload for ReleasePipeline.CreateTyped.
type ReleasePipelineCreateData struct {
	ApproximateReleaseCount int `json:"approximateReleaseCount"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	AutoGenerateReleaseNotesOnCompletion bool `json:"autoGenerateReleaseNotesOnCompletion"`
	CreatedAt any `json:"createdAt"`
	Id string `json:"id"`
	IncludePathPatterns string `json:"includePathPatterns"`
	IsProduction bool `json:"isProduction"`
	LatestReleaseNote *map[string]any `json:"latestReleaseNote,omitempty"`
	Name string `json:"name"`
	ReleaseNoteTemplate *map[string]any `json:"releaseNoteTemplate,omitempty"`
	RolloverIssuesOnCompletion bool `json:"rolloverIssuesOnCompletion"`
	SlugId string `json:"slugId"`
	Trashed *bool `json:"trashed,omitempty"`
	Type string `json:"type"`
	UpdatedAt any `json:"updatedAt"`
	Url string `json:"url"`
}

// ReleasePipelineUpdateData is the typed request payload for ReleasePipeline.UpdateTyped.
type ReleasePipelineUpdateData struct {
	Id string `json:"id"`
	ApproximateReleaseCount *int `json:"approximateReleaseCount,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	AutoGenerateReleaseNotesOnCompletion *bool `json:"autoGenerateReleaseNotesOnCompletion,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	IncludePathPatterns *string `json:"includePathPatterns,omitempty"`
	IsProduction *bool `json:"isProduction,omitempty"`
	LatestReleaseNote *map[string]any `json:"latestReleaseNote,omitempty"`
	Name *string `json:"name,omitempty"`
	ReleaseNoteTemplate *map[string]any `json:"releaseNoteTemplate,omitempty"`
	RolloverIssuesOnCompletion *bool `json:"rolloverIssuesOnCompletion,omitempty"`
	SlugId *string `json:"slugId,omitempty"`
	Trashed *bool `json:"trashed,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
	Url *string `json:"url,omitempty"`
}

// ReleasePipelineRemoveMatch is the typed request payload for ReleasePipeline.RemoveTyped.
type ReleasePipelineRemoveMatch struct {
	Id string `json:"id"`
}

// ReleaseStage is the typed data model for the release_stage entity.
type ReleaseStage struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Color string `json:"color"`
	CreatedAt any `json:"createdAt"`
	Frozen bool `json:"frozen"`
	Id string `json:"id"`
	Name string `json:"name"`
	Pipeline *map[string]any `json:"pipeline,omitempty"`
	Position float64 `json:"position"`
	Type string `json:"type"`
	UpdatedAt any `json:"updatedAt"`
}

// ReleaseStageLoadMatch is the typed request payload for ReleaseStage.LoadTyped.
type ReleaseStageLoadMatch struct {
	Id string `json:"id"`
}

// ReleaseStageListMatch is the typed request payload for ReleaseStage.ListTyped.
type ReleaseStageListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// ReleaseStageCreateData is the typed request payload for ReleaseStage.CreateTyped.
type ReleaseStageCreateData struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Color string `json:"color"`
	CreatedAt any `json:"createdAt"`
	Frozen bool `json:"frozen"`
	Id string `json:"id"`
	Name string `json:"name"`
	Pipeline *map[string]any `json:"pipeline,omitempty"`
	Position float64 `json:"position"`
	Type string `json:"type"`
	UpdatedAt any `json:"updatedAt"`
}

// ReleaseStageUpdateData is the typed request payload for ReleaseStage.UpdateTyped.
type ReleaseStageUpdateData struct {
	Id string `json:"id"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Color *string `json:"color,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Frozen *bool `json:"frozen,omitempty"`
	Name *string `json:"name,omitempty"`
	Pipeline *map[string]any `json:"pipeline,omitempty"`
	Position *float64 `json:"position,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
}

// Roadmap is the typed data model for the roadmap entity.
type Roadmap struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Color *string `json:"color,omitempty"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	Description *string `json:"description,omitempty"`
	Id string `json:"id"`
	Name string `json:"name"`
	Organization *map[string]any `json:"organization,omitempty"`
	Owner *map[string]any `json:"owner,omitempty"`
	SlugId string `json:"slugId"`
	SortOrder float64 `json:"sortOrder"`
	UpdatedAt any `json:"updatedAt"`
	Url string `json:"url"`
}

// RoadmapLoadMatch is the typed request payload for Roadmap.LoadTyped.
type RoadmapLoadMatch struct {
	Id string `json:"id"`
}

// RoadmapListMatch is the typed request payload for Roadmap.ListTyped.
type RoadmapListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// RoadmapCreateData is the typed request payload for Roadmap.CreateTyped.
type RoadmapCreateData struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Color *string `json:"color,omitempty"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	Description *string `json:"description,omitempty"`
	Id string `json:"id"`
	Name string `json:"name"`
	Organization *map[string]any `json:"organization,omitempty"`
	Owner *map[string]any `json:"owner,omitempty"`
	SlugId string `json:"slugId"`
	SortOrder float64 `json:"sortOrder"`
	UpdatedAt any `json:"updatedAt"`
	Url string `json:"url"`
}

// RoadmapUpdateData is the typed request payload for Roadmap.UpdateTyped.
type RoadmapUpdateData struct {
	Id string `json:"id"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Color *string `json:"color,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Creator *map[string]any `json:"creator,omitempty"`
	Description *string `json:"description,omitempty"`
	Name *string `json:"name,omitempty"`
	Organization *map[string]any `json:"organization,omitempty"`
	Owner *map[string]any `json:"owner,omitempty"`
	SlugId *string `json:"slugId,omitempty"`
	SortOrder *float64 `json:"sortOrder,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
	Url *string `json:"url,omitempty"`
}

// RoadmapRemoveMatch is the typed request payload for Roadmap.RemoveTyped.
type RoadmapRemoveMatch struct {
	Id string `json:"id"`
}

// RoadmapToProject is the typed data model for the roadmap_to_project entity.
type RoadmapToProject struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Id string `json:"id"`
	Project *map[string]any `json:"project,omitempty"`
	Roadmap *map[string]any `json:"roadmap,omitempty"`
	SortOrder string `json:"sortOrder"`
	UpdatedAt any `json:"updatedAt"`
}

// RoadmapToProjectLoadMatch is the typed request payload for RoadmapToProject.LoadTyped.
type RoadmapToProjectLoadMatch struct {
	Id string `json:"id"`
}

// RoadmapToProjectListMatch is the typed request payload for RoadmapToProject.ListTyped.
type RoadmapToProjectListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// RoadmapToProjectCreateData is the typed request payload for RoadmapToProject.CreateTyped.
type RoadmapToProjectCreateData struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Id string `json:"id"`
	Project *map[string]any `json:"project,omitempty"`
	Roadmap *map[string]any `json:"roadmap,omitempty"`
	SortOrder string `json:"sortOrder"`
	UpdatedAt any `json:"updatedAt"`
}

// RoadmapToProjectUpdateData is the typed request payload for RoadmapToProject.UpdateTyped.
type RoadmapToProjectUpdateData struct {
	Id string `json:"id"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	Roadmap *map[string]any `json:"roadmap,omitempty"`
	SortOrder *string `json:"sortOrder,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
}

// RoadmapToProjectRemoveMatch is the typed request payload for RoadmapToProject.RemoveTyped.
type RoadmapToProjectRemoveMatch struct {
	Id string `json:"id"`
}

// SlaConfiguration is the typed data model for the sla_configuration entity.
type SlaConfiguration struct {
	Conditions any `json:"conditions"`
	Id string `json:"id"`
	Name string `json:"name"`
	RemovesSla bool `json:"removesSla"`
	Sla *float64 `json:"sla,omitempty"`
	SlaType *string `json:"slaType,omitempty"`
	StartMode *string `json:"startMode,omitempty"`
}

// SlaConfigurationListMatch is the typed request payload for SlaConfiguration.ListTyped.
type SlaConfigurationListMatch struct {
	TeamId string `json:"team_id"`
}

// SsoUrlFromEmailResponse is the typed data model for the sso_url_from_email_response entity.
type SsoUrlFromEmailResponse struct {
	SamlSsoUrl string `json:"samlSsoUrl"`
	Success bool `json:"success"`
}

// SsoUrlFromEmailResponseLoadMatch is the typed request payload for SsoUrlFromEmailResponse.LoadTyped.
type SsoUrlFromEmailResponseLoadMatch struct {
	Email string `json:"email"`
	IsDesktop *bool `json:"is_desktop,omitempty"`
	Type any `json:"type"`
}

// Team is the typed data model for the team entity.
type Team struct {
	ActiveCycle *map[string]any `json:"activeCycle,omitempty"`
	AiDiscussionSummariesEnabled bool `json:"aiDiscussionSummariesEnabled"`
	AiThreadSummariesEnabled bool `json:"aiThreadSummariesEnabled"`
	AllMembersCanJoin *bool `json:"allMembersCanJoin,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	AutoArchivePeriod float64 `json:"autoArchivePeriod"`
	AutoCloseChildIssues *bool `json:"autoCloseChildIssues,omitempty"`
	AutoCloseParentIssues *bool `json:"autoCloseParentIssues,omitempty"`
	AutoClosePeriod *float64 `json:"autoClosePeriod,omitempty"`
	AutoCloseStateId *string `json:"autoCloseStateId,omitempty"`
	Color *string `json:"color,omitempty"`
	CreatedAt any `json:"createdAt"`
	CurrentProgress any `json:"currentProgress"`
	CycleCalenderUrl string `json:"cycleCalenderUrl"`
	CycleCooldownTime float64 `json:"cycleCooldownTime"`
	CycleDuration float64 `json:"cycleDuration"`
	CycleIssueAutoAssignCompleted bool `json:"cycleIssueAutoAssignCompleted"`
	CycleIssueAutoAssignStarted bool `json:"cycleIssueAutoAssignStarted"`
	CycleLockToActive bool `json:"cycleLockToActive"`
	CycleStartDay float64 `json:"cycleStartDay"`
	CyclesEnabled bool `json:"cyclesEnabled"`
	DefaultIssueEstimate float64 `json:"defaultIssueEstimate"`
	DefaultIssueState *map[string]any `json:"defaultIssueState,omitempty"`
	DefaultProjectTemplate *map[string]any `json:"defaultProjectTemplate,omitempty"`
	DefaultTemplateForMembers *map[string]any `json:"defaultTemplateForMembers,omitempty"`
	DefaultTemplateForNonMembers *map[string]any `json:"defaultTemplateForNonMembers,omitempty"`
	Description *string `json:"description,omitempty"`
	DisplayName string `json:"displayName"`
	GroupIssueHistory bool `json:"groupIssueHistory"`
	Icon *string `json:"icon,omitempty"`
	Id string `json:"id"`
	InheritIssueEstimation bool `json:"inheritIssueEstimation"`
	InheritProjectStatuses bool `json:"inheritProjectStatuses"`
	InheritSlackAutoCreateProjectChannel bool `json:"inheritSlackAutoCreateProjectChannel"`
	InheritWorkflowStatuses bool `json:"inheritWorkflowStatuses"`
	InitiativesEnabled bool `json:"initiativesEnabled"`
	IntegrationsSettings *map[string]any `json:"integrationsSettings,omitempty"`
	IssueCount int `json:"issueCount"`
	IssueEstimationAllowZero bool `json:"issueEstimationAllowZero"`
	IssueEstimationExtended bool `json:"issueEstimationExtended"`
	IssueEstimationType string `json:"issueEstimationType"`
	JoinByDefault *bool `json:"joinByDefault,omitempty"`
	Key string `json:"key"`
	LedInitiativeCount int `json:"ledInitiativeCount"`
	Name string `json:"name"`
	Organization *map[string]any `json:"organization,omitempty"`
	Parent *map[string]any `json:"parent,omitempty"`
	ProgressHistory any `json:"progressHistory"`
	RequirePriorityToLeaveTriage bool `json:"requirePriorityToLeaveTriage"`
	RestrictedBy *map[string]any `json:"restrictedBy,omitempty"`
	RestrictedById *string `json:"restrictedById,omitempty"`
	RetiredAt *any `json:"retiredAt,omitempty"`
	ScimGroupName *string `json:"scimGroupName,omitempty"`
	ScimManaged bool `json:"scimManaged"`
	SecuritySettings any `json:"securitySettings"`
	SetIssueSortOrderOnStateChange string `json:"setIssueSortOrderOnStateChange"`
	SlackAutoCreateProjectChannel *bool `json:"slackAutoCreateProjectChannel,omitempty"`
	Timezone string `json:"timezone"`
	TriageEnabled bool `json:"triageEnabled"`
	TriageIssueState *map[string]any `json:"triageIssueState,omitempty"`
	TriageResponsibility *map[string]any `json:"triageResponsibility,omitempty"`
	UpcomingCycleCount float64 `json:"upcomingCycleCount"`
	UpdatedAt any `json:"updatedAt"`
	Visibility string `json:"visibility"`
}

// TeamLoadMatch is the typed request payload for Team.LoadTyped.
type TeamLoadMatch struct {
	Id string `json:"id"`
}

// TeamListMatch is the typed request payload for Team.ListTyped.
type TeamListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// TeamCreateData is the typed request payload for Team.CreateTyped.
type TeamCreateData struct {
	CopySettingsFromTeamId *string `json:"copy_settings_from_team_id,omitempty"`
	ActiveCycle *map[string]any `json:"activeCycle,omitempty"`
	AiDiscussionSummariesEnabled bool `json:"aiDiscussionSummariesEnabled"`
	AiThreadSummariesEnabled bool `json:"aiThreadSummariesEnabled"`
	AllMembersCanJoin *bool `json:"allMembersCanJoin,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	AutoArchivePeriod float64 `json:"autoArchivePeriod"`
	AutoCloseChildIssues *bool `json:"autoCloseChildIssues,omitempty"`
	AutoCloseParentIssues *bool `json:"autoCloseParentIssues,omitempty"`
	AutoClosePeriod *float64 `json:"autoClosePeriod,omitempty"`
	AutoCloseStateId *string `json:"autoCloseStateId,omitempty"`
	Color *string `json:"color,omitempty"`
	CreatedAt any `json:"createdAt"`
	CurrentProgress any `json:"currentProgress"`
	CycleCalenderUrl string `json:"cycleCalenderUrl"`
	CycleCooldownTime float64 `json:"cycleCooldownTime"`
	CycleDuration float64 `json:"cycleDuration"`
	CycleIssueAutoAssignCompleted bool `json:"cycleIssueAutoAssignCompleted"`
	CycleIssueAutoAssignStarted bool `json:"cycleIssueAutoAssignStarted"`
	CycleLockToActive bool `json:"cycleLockToActive"`
	CycleStartDay float64 `json:"cycleStartDay"`
	CyclesEnabled bool `json:"cyclesEnabled"`
	DefaultIssueEstimate float64 `json:"defaultIssueEstimate"`
	DefaultIssueState *map[string]any `json:"defaultIssueState,omitempty"`
	DefaultProjectTemplate *map[string]any `json:"defaultProjectTemplate,omitempty"`
	DefaultTemplateForMembers *map[string]any `json:"defaultTemplateForMembers,omitempty"`
	DefaultTemplateForNonMembers *map[string]any `json:"defaultTemplateForNonMembers,omitempty"`
	Description *string `json:"description,omitempty"`
	DisplayName string `json:"displayName"`
	GroupIssueHistory bool `json:"groupIssueHistory"`
	Icon *string `json:"icon,omitempty"`
	Id string `json:"id"`
	InheritIssueEstimation bool `json:"inheritIssueEstimation"`
	InheritProjectStatuses bool `json:"inheritProjectStatuses"`
	InheritSlackAutoCreateProjectChannel bool `json:"inheritSlackAutoCreateProjectChannel"`
	InheritWorkflowStatuses bool `json:"inheritWorkflowStatuses"`
	InitiativesEnabled bool `json:"initiativesEnabled"`
	IntegrationsSettings *map[string]any `json:"integrationsSettings,omitempty"`
	IssueCount int `json:"issueCount"`
	IssueEstimationAllowZero bool `json:"issueEstimationAllowZero"`
	IssueEstimationExtended bool `json:"issueEstimationExtended"`
	IssueEstimationType string `json:"issueEstimationType"`
	JoinByDefault *bool `json:"joinByDefault,omitempty"`
	Key string `json:"key"`
	LedInitiativeCount int `json:"ledInitiativeCount"`
	Name string `json:"name"`
	Organization *map[string]any `json:"organization,omitempty"`
	Parent *map[string]any `json:"parent,omitempty"`
	ProgressHistory any `json:"progressHistory"`
	RequirePriorityToLeaveTriage bool `json:"requirePriorityToLeaveTriage"`
	RestrictedBy *map[string]any `json:"restrictedBy,omitempty"`
	RestrictedById *string `json:"restrictedById,omitempty"`
	RetiredAt *any `json:"retiredAt,omitempty"`
	ScimGroupName *string `json:"scimGroupName,omitempty"`
	ScimManaged bool `json:"scimManaged"`
	SecuritySettings any `json:"securitySettings"`
	SetIssueSortOrderOnStateChange string `json:"setIssueSortOrderOnStateChange"`
	SlackAutoCreateProjectChannel *bool `json:"slackAutoCreateProjectChannel,omitempty"`
	Timezone string `json:"timezone"`
	TriageEnabled bool `json:"triageEnabled"`
	TriageIssueState *map[string]any `json:"triageIssueState,omitempty"`
	TriageResponsibility *map[string]any `json:"triageResponsibility,omitempty"`
	UpcomingCycleCount float64 `json:"upcomingCycleCount"`
	UpdatedAt any `json:"updatedAt"`
	Visibility string `json:"visibility"`
}

// TeamUpdateData is the typed request payload for Team.UpdateTyped.
type TeamUpdateData struct {
	Id string `json:"id"`
	ActiveCycle *map[string]any `json:"activeCycle,omitempty"`
	AiDiscussionSummariesEnabled *bool `json:"aiDiscussionSummariesEnabled,omitempty"`
	AiThreadSummariesEnabled *bool `json:"aiThreadSummariesEnabled,omitempty"`
	AllMembersCanJoin *bool `json:"allMembersCanJoin,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	AutoArchivePeriod *float64 `json:"autoArchivePeriod,omitempty"`
	AutoCloseChildIssues *bool `json:"autoCloseChildIssues,omitempty"`
	AutoCloseParentIssues *bool `json:"autoCloseParentIssues,omitempty"`
	AutoClosePeriod *float64 `json:"autoClosePeriod,omitempty"`
	AutoCloseStateId *string `json:"autoCloseStateId,omitempty"`
	Color *string `json:"color,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	CurrentProgress *any `json:"currentProgress,omitempty"`
	CycleCalenderUrl *string `json:"cycleCalenderUrl,omitempty"`
	CycleCooldownTime *float64 `json:"cycleCooldownTime,omitempty"`
	CycleDuration *float64 `json:"cycleDuration,omitempty"`
	CycleIssueAutoAssignCompleted *bool `json:"cycleIssueAutoAssignCompleted,omitempty"`
	CycleIssueAutoAssignStarted *bool `json:"cycleIssueAutoAssignStarted,omitempty"`
	CycleLockToActive *bool `json:"cycleLockToActive,omitempty"`
	CycleStartDay *float64 `json:"cycleStartDay,omitempty"`
	CyclesEnabled *bool `json:"cyclesEnabled,omitempty"`
	DefaultIssueEstimate *float64 `json:"defaultIssueEstimate,omitempty"`
	DefaultIssueState *map[string]any `json:"defaultIssueState,omitempty"`
	DefaultProjectTemplate *map[string]any `json:"defaultProjectTemplate,omitempty"`
	DefaultTemplateForMembers *map[string]any `json:"defaultTemplateForMembers,omitempty"`
	DefaultTemplateForNonMembers *map[string]any `json:"defaultTemplateForNonMembers,omitempty"`
	Description *string `json:"description,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	GroupIssueHistory *bool `json:"groupIssueHistory,omitempty"`
	Icon *string `json:"icon,omitempty"`
	InheritIssueEstimation *bool `json:"inheritIssueEstimation,omitempty"`
	InheritProjectStatuses *bool `json:"inheritProjectStatuses,omitempty"`
	InheritSlackAutoCreateProjectChannel *bool `json:"inheritSlackAutoCreateProjectChannel,omitempty"`
	InheritWorkflowStatuses *bool `json:"inheritWorkflowStatuses,omitempty"`
	InitiativesEnabled *bool `json:"initiativesEnabled,omitempty"`
	IntegrationsSettings *map[string]any `json:"integrationsSettings,omitempty"`
	IssueCount *int `json:"issueCount,omitempty"`
	IssueEstimationAllowZero *bool `json:"issueEstimationAllowZero,omitempty"`
	IssueEstimationExtended *bool `json:"issueEstimationExtended,omitempty"`
	IssueEstimationType *string `json:"issueEstimationType,omitempty"`
	JoinByDefault *bool `json:"joinByDefault,omitempty"`
	Key *string `json:"key,omitempty"`
	LedInitiativeCount *int `json:"ledInitiativeCount,omitempty"`
	Name *string `json:"name,omitempty"`
	Organization *map[string]any `json:"organization,omitempty"`
	Parent *map[string]any `json:"parent,omitempty"`
	ProgressHistory *any `json:"progressHistory,omitempty"`
	RequirePriorityToLeaveTriage *bool `json:"requirePriorityToLeaveTriage,omitempty"`
	RestrictedBy *map[string]any `json:"restrictedBy,omitempty"`
	RestrictedById *string `json:"restrictedById,omitempty"`
	RetiredAt *any `json:"retiredAt,omitempty"`
	ScimGroupName *string `json:"scimGroupName,omitempty"`
	ScimManaged *bool `json:"scimManaged,omitempty"`
	SecuritySettings *any `json:"securitySettings,omitempty"`
	SetIssueSortOrderOnStateChange *string `json:"setIssueSortOrderOnStateChange,omitempty"`
	SlackAutoCreateProjectChannel *bool `json:"slackAutoCreateProjectChannel,omitempty"`
	Timezone *string `json:"timezone,omitempty"`
	TriageEnabled *bool `json:"triageEnabled,omitempty"`
	TriageIssueState *map[string]any `json:"triageIssueState,omitempty"`
	TriageResponsibility *map[string]any `json:"triageResponsibility,omitempty"`
	UpcomingCycleCount *float64 `json:"upcomingCycleCount,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
}

// TeamRemoveMatch is the typed request payload for Team.RemoveTyped.
type TeamRemoveMatch struct {
	Id string `json:"id"`
}

// TeamMembership is the typed data model for the team_membership entity.
type TeamMembership struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Id string `json:"id"`
	Owner bool `json:"owner"`
	SortOrder float64 `json:"sortOrder"`
	Team *map[string]any `json:"team,omitempty"`
	UpdatedAt any `json:"updatedAt"`
	User *map[string]any `json:"user,omitempty"`
}

// TeamMembershipLoadMatch is the typed request payload for TeamMembership.LoadTyped.
type TeamMembershipLoadMatch struct {
	Id string `json:"id"`
}

// TeamMembershipListMatch is the typed request payload for TeamMembership.ListTyped.
type TeamMembershipListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// TeamMembershipCreateData is the typed request payload for TeamMembership.CreateTyped.
type TeamMembershipCreateData struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Id string `json:"id"`
	Owner bool `json:"owner"`
	SortOrder float64 `json:"sortOrder"`
	Team *map[string]any `json:"team,omitempty"`
	UpdatedAt any `json:"updatedAt"`
	User *map[string]any `json:"user,omitempty"`
}

// TeamMembershipUpdateData is the typed request payload for TeamMembership.UpdateTyped.
type TeamMembershipUpdateData struct {
	Id string `json:"id"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Owner *bool `json:"owner,omitempty"`
	SortOrder *float64 `json:"sortOrder,omitempty"`
	Team *map[string]any `json:"team,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
	User *map[string]any `json:"user,omitempty"`
}

// TeamMembershipRemoveMatch is the typed request payload for TeamMembership.RemoveTyped.
type TeamMembershipRemoveMatch struct {
	AlsoLeaveParentTeam *bool `json:"also_leave_parent_team,omitempty"`
	Id string `json:"id"`
}

// Template is the typed data model for the template entity.
type Template struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Color *string `json:"color,omitempty"`
	Content *string `json:"content,omitempty"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	Description *string `json:"description,omitempty"`
	HasFormFields bool `json:"hasFormFields"`
	Icon *string `json:"icon,omitempty"`
	Id string `json:"id"`
	InheritedFrom *map[string]any `json:"inheritedFrom,omitempty"`
	LastAppliedAt *any `json:"lastAppliedAt,omitempty"`
	LastUpdatedBy *map[string]any `json:"lastUpdatedBy,omitempty"`
	Name string `json:"name"`
	Organization *map[string]any `json:"organization,omitempty"`
	Pipeline *map[string]any `json:"pipeline,omitempty"`
	SortOrder float64 `json:"sortOrder"`
	Team *map[string]any `json:"team,omitempty"`
	TemplateData any `json:"templateData"`
	Type string `json:"type"`
	UpdatedAt any `json:"updatedAt"`
}

// TemplateLoadMatch is the typed request payload for Template.LoadTyped.
type TemplateLoadMatch struct {
	Id string `json:"id"`
}

// TemplateListMatch is the typed request payload for Template.ListTyped.
type TemplateListMatch struct {
	IntegrationType *string `json:"integration_type,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
}

// TemplateCreateData is the typed request payload for Template.CreateTyped.
type TemplateCreateData struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Color *string `json:"color,omitempty"`
	Content *string `json:"content,omitempty"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	Description *string `json:"description,omitempty"`
	HasFormFields bool `json:"hasFormFields"`
	Icon *string `json:"icon,omitempty"`
	Id string `json:"id"`
	InheritedFrom *map[string]any `json:"inheritedFrom,omitempty"`
	LastAppliedAt *any `json:"lastAppliedAt,omitempty"`
	LastUpdatedBy *map[string]any `json:"lastUpdatedBy,omitempty"`
	Name string `json:"name"`
	Organization *map[string]any `json:"organization,omitempty"`
	Pipeline *map[string]any `json:"pipeline,omitempty"`
	SortOrder float64 `json:"sortOrder"`
	Team *map[string]any `json:"team,omitempty"`
	TemplateData any `json:"templateData"`
	Type string `json:"type"`
	UpdatedAt any `json:"updatedAt"`
}

// TemplateUpdateData is the typed request payload for Template.UpdateTyped.
type TemplateUpdateData struct {
	Id string `json:"id"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Color *string `json:"color,omitempty"`
	Content *string `json:"content,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Creator *map[string]any `json:"creator,omitempty"`
	Description *string `json:"description,omitempty"`
	HasFormFields *bool `json:"hasFormFields,omitempty"`
	Icon *string `json:"icon,omitempty"`
	InheritedFrom *map[string]any `json:"inheritedFrom,omitempty"`
	LastAppliedAt *any `json:"lastAppliedAt,omitempty"`
	LastUpdatedBy *map[string]any `json:"lastUpdatedBy,omitempty"`
	Name *string `json:"name,omitempty"`
	Organization *map[string]any `json:"organization,omitempty"`
	Pipeline *map[string]any `json:"pipeline,omitempty"`
	SortOrder *float64 `json:"sortOrder,omitempty"`
	Team *map[string]any `json:"team,omitempty"`
	TemplateData *any `json:"templateData,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
}

// TemplateRemoveMatch is the typed request payload for Template.RemoveTyped.
type TemplateRemoveMatch struct {
	Id string `json:"id"`
}

// TimeSchedule is the typed data model for the time_schedule entity.
type TimeSchedule struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	ExternalId *string `json:"externalId,omitempty"`
	ExternalUrl *string `json:"externalUrl,omitempty"`
	Id string `json:"id"`
	Integration *map[string]any `json:"integration,omitempty"`
	Name string `json:"name"`
	Organization *map[string]any `json:"organization,omitempty"`
	UpdatedAt any `json:"updatedAt"`
}

// TimeScheduleLoadMatch is the typed request payload for TimeSchedule.LoadTyped.
type TimeScheduleLoadMatch struct {
	Id string `json:"id"`
}

// TimeScheduleListMatch is the typed request payload for TimeSchedule.ListTyped.
type TimeScheduleListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// TimeScheduleCreateData is the typed request payload for TimeSchedule.CreateTyped.
type TimeScheduleCreateData struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	ExternalId *string `json:"externalId,omitempty"`
	ExternalUrl *string `json:"externalUrl,omitempty"`
	Id string `json:"id"`
	Integration *map[string]any `json:"integration,omitempty"`
	Name string `json:"name"`
	Organization *map[string]any `json:"organization,omitempty"`
	UpdatedAt any `json:"updatedAt"`
}

// TimeScheduleUpdateData is the typed request payload for TimeSchedule.UpdateTyped.
type TimeScheduleUpdateData struct {
	ExternalId *string `json:"external_id,omitempty"`
	Id *string `json:"id,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	ExternalId2 *string `json:"externalId,omitempty"`
	ExternalUrl *string `json:"externalUrl,omitempty"`
	Integration *map[string]any `json:"integration,omitempty"`
	Name *string `json:"name,omitempty"`
	Organization *map[string]any `json:"organization,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
}

// TimeScheduleRemoveMatch is the typed request payload for TimeSchedule.RemoveTyped.
type TimeScheduleRemoveMatch struct {
	Id string `json:"id"`
}

// TriageResponsibility is the typed data model for the triage_responsibility entity.
type TriageResponsibility struct {
	Action string `json:"action"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	CurrentUser *map[string]any `json:"currentUser,omitempty"`
	Id string `json:"id"`
	Team *map[string]any `json:"team,omitempty"`
	TimeSchedule *map[string]any `json:"timeSchedule,omitempty"`
	UpdatedAt any `json:"updatedAt"`
}

// TriageResponsibilityLoadMatch is the typed request payload for TriageResponsibility.LoadTyped.
type TriageResponsibilityLoadMatch struct {
	Id string `json:"id"`
}

// TriageResponsibilityListMatch is the typed request payload for TriageResponsibility.ListTyped.
type TriageResponsibilityListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// TriageResponsibilityCreateData is the typed request payload for TriageResponsibility.CreateTyped.
type TriageResponsibilityCreateData struct {
	Action string `json:"action"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	CurrentUser *map[string]any `json:"currentUser,omitempty"`
	Id string `json:"id"`
	Team *map[string]any `json:"team,omitempty"`
	TimeSchedule *map[string]any `json:"timeSchedule,omitempty"`
	UpdatedAt any `json:"updatedAt"`
}

// TriageResponsibilityUpdateData is the typed request payload for TriageResponsibility.UpdateTyped.
type TriageResponsibilityUpdateData struct {
	Id string `json:"id"`
	Action *string `json:"action,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	CurrentUser *map[string]any `json:"currentUser,omitempty"`
	Team *map[string]any `json:"team,omitempty"`
	TimeSchedule *map[string]any `json:"timeSchedule,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
}

// TriageResponsibilityRemoveMatch is the typed request payload for TriageResponsibility.RemoveTyped.
type TriageResponsibilityRemoveMatch struct {
	Id string `json:"id"`
}

// UploadFile is the typed data model for the upload_file entity.
type UploadFile struct {
	AssetUrl string `json:"assetUrl"`
	ContentType string `json:"contentType"`
	Filename string `json:"filename"`
	MetaData *any `json:"metaData,omitempty"`
	Size int `json:"size"`
	UploadUrl string `json:"uploadUrl"`
}

// UploadFileCreateData is the typed request payload for UploadFile.CreateTyped.
type UploadFileCreateData struct {
	ContentType string `json:"content_type"`
	Filename string `json:"filename"`
	MakePublic *bool `json:"make_public,omitempty"`
	MetaData *any `json:"meta_data,omitempty"`
	Size int `json:"size"`
	AssetUrl string `json:"assetUrl"`
	ContentType2 string `json:"contentType"`
	MetaData2 *any `json:"metaData,omitempty"`
	UploadUrl string `json:"uploadUrl"`
}

// UsageAlert is the typed data model for the usage_alert entity.
type UsageAlert struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Id string `json:"id"`
	Metadata any `json:"metadata"`
	ResolvedAt *any `json:"resolvedAt,omitempty"`
	Type string `json:"type"`
	UpdatedAt any `json:"updatedAt"`
}

// UsageAlertLoadMatch is the typed request payload for UsageAlert.LoadTyped.
type UsageAlertLoadMatch struct {
	Id string `json:"id"`
}

// UsageAlertListMatch is the typed request payload for UsageAlert.ListTyped.
type UsageAlertListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// User is the typed data model for the user entity.
type User struct {
	Active bool `json:"active"`
	Admin bool `json:"admin"`
	App bool `json:"app"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	AvatarBackgroundColor string `json:"avatarBackgroundColor"`
	AvatarUrl *string `json:"avatarUrl,omitempty"`
	CalendarHash *string `json:"calendarHash,omitempty"`
	CanAccessAnyPublicTeam bool `json:"canAccessAnyPublicTeam"`
	CreatedAt any `json:"createdAt"`
	CreatedIssueCount int `json:"createdIssueCount"`
	Description *string `json:"description,omitempty"`
	DisableReason *string `json:"disableReason,omitempty"`
	DisplayName string `json:"displayName"`
	Email string `json:"email"`
	GitHubUserId *string `json:"gitHubUserId,omitempty"`
	Guest bool `json:"guest"`
	HasGitHubCodeAccess bool `json:"hasGitHubCodeAccess"`
	Id string `json:"id"`
	IdentityProvider *map[string]any `json:"identityProvider,omitempty"`
	Initials string `json:"initials"`
	IsAssignable bool `json:"isAssignable"`
	IsMe bool `json:"isMe"`
	IsMentionable bool `json:"isMentionable"`
	LastSeen *any `json:"lastSeen,omitempty"`
	Name string `json:"name"`
	Organization *map[string]any `json:"organization,omitempty"`
	Owner bool `json:"owner"`
	StatusEmoji *string `json:"statusEmoji,omitempty"`
	StatusLabel *string `json:"statusLabel,omitempty"`
	StatusUntilAt *any `json:"statusUntilAt,omitempty"`
	SupportsAgentSessions bool `json:"supportsAgentSessions"`
	Timezone *string `json:"timezone,omitempty"`
	Title *string `json:"title,omitempty"`
	UpdatedAt any `json:"updatedAt"`
	Url string `json:"url"`
}

// UserLoadMatch is the typed request payload for User.LoadTyped.
type UserLoadMatch struct {
	Id *string `json:"id,omitempty"`
}

// UserListMatch is the typed request payload for User.ListTyped.
type UserListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	IncludeDisabled *bool `json:"include_disabled,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// UserCreateData is the typed request payload for User.CreateTyped.
type UserCreateData struct {
	Code *string `json:"code,omitempty"`
	RedirectUri *string `json:"redirect_uri,omitempty"`
	Service *string `json:"service,omitempty"`
	Active bool `json:"active"`
	Admin bool `json:"admin"`
	App bool `json:"app"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	AvatarBackgroundColor string `json:"avatarBackgroundColor"`
	AvatarUrl *string `json:"avatarUrl,omitempty"`
	CalendarHash *string `json:"calendarHash,omitempty"`
	CanAccessAnyPublicTeam bool `json:"canAccessAnyPublicTeam"`
	CreatedAt any `json:"createdAt"`
	CreatedIssueCount int `json:"createdIssueCount"`
	Description *string `json:"description,omitempty"`
	DisableReason *string `json:"disableReason,omitempty"`
	DisplayName string `json:"displayName"`
	Email string `json:"email"`
	GitHubUserId *string `json:"gitHubUserId,omitempty"`
	Guest bool `json:"guest"`
	HasGitHubCodeAccess bool `json:"hasGitHubCodeAccess"`
	Id string `json:"id"`
	IdentityProvider *map[string]any `json:"identityProvider,omitempty"`
	Initials string `json:"initials"`
	IsAssignable bool `json:"isAssignable"`
	IsMe bool `json:"isMe"`
	IsMentionable bool `json:"isMentionable"`
	LastSeen *any `json:"lastSeen,omitempty"`
	Name string `json:"name"`
	Organization *map[string]any `json:"organization,omitempty"`
	Owner bool `json:"owner"`
	StatusEmoji *string `json:"statusEmoji,omitempty"`
	StatusLabel *string `json:"statusLabel,omitempty"`
	StatusUntilAt *any `json:"statusUntilAt,omitempty"`
	SupportsAgentSessions bool `json:"supportsAgentSessions"`
	Timezone *string `json:"timezone,omitempty"`
	Title *string `json:"title,omitempty"`
	UpdatedAt any `json:"updatedAt"`
	Url string `json:"url"`
}

// UserUpdateData is the typed request payload for User.UpdateTyped.
type UserUpdateData struct {
	Id string `json:"id"`
	Active *bool `json:"active,omitempty"`
	Admin *bool `json:"admin,omitempty"`
	App *bool `json:"app,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	AvatarBackgroundColor *string `json:"avatarBackgroundColor,omitempty"`
	AvatarUrl *string `json:"avatarUrl,omitempty"`
	CalendarHash *string `json:"calendarHash,omitempty"`
	CanAccessAnyPublicTeam *bool `json:"canAccessAnyPublicTeam,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	CreatedIssueCount *int `json:"createdIssueCount,omitempty"`
	Description *string `json:"description,omitempty"`
	DisableReason *string `json:"disableReason,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	Email *string `json:"email,omitempty"`
	GitHubUserId *string `json:"gitHubUserId,omitempty"`
	Guest *bool `json:"guest,omitempty"`
	HasGitHubCodeAccess *bool `json:"hasGitHubCodeAccess,omitempty"`
	IdentityProvider *map[string]any `json:"identityProvider,omitempty"`
	Initials *string `json:"initials,omitempty"`
	IsAssignable *bool `json:"isAssignable,omitempty"`
	IsMe *bool `json:"isMe,omitempty"`
	IsMentionable *bool `json:"isMentionable,omitempty"`
	LastSeen *any `json:"lastSeen,omitempty"`
	Name *string `json:"name,omitempty"`
	Organization *map[string]any `json:"organization,omitempty"`
	Owner *bool `json:"owner,omitempty"`
	StatusEmoji *string `json:"statusEmoji,omitempty"`
	StatusLabel *string `json:"statusLabel,omitempty"`
	StatusUntilAt *any `json:"statusUntilAt,omitempty"`
	SupportsAgentSessions *bool `json:"supportsAgentSessions,omitempty"`
	Timezone *string `json:"timezone,omitempty"`
	Title *string `json:"title,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
	Url *string `json:"url,omitempty"`
}

// UserSetting is the typed data model for the user_setting entity.
type UserSetting struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	AutoAssignToSelf bool `json:"autoAssignToSelf"`
	CalendarHash *string `json:"calendarHash,omitempty"`
	CreatedAt any `json:"createdAt"`
	FeedLastSeenTime *any `json:"feedLastSeenTime,omitempty"`
	FeedSummarySchedule *string `json:"feedSummarySchedule,omitempty"`
	Id string `json:"id"`
	PullRequestMergeStrategyPreference *string `json:"pullRequestMergeStrategyPreference,omitempty"`
	ShowFullUserNames bool `json:"showFullUserNames"`
	SubscribedToChangelog bool `json:"subscribedToChangelog"`
	SubscribedToDPA bool `json:"subscribedToDPA"`
	SubscribedToInviteAccepted bool `json:"subscribedToInviteAccepted"`
	SubscribedToPrivacyLegalUpdates bool `json:"subscribedToPrivacyLegalUpdates"`
	UpdatedAt any `json:"updatedAt"`
	User *map[string]any `json:"user,omitempty"`
}

// UserSettingLoadMatch is the typed request payload for UserSetting.LoadTyped.
type UserSettingLoadMatch struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	AutoAssignToSelf *bool `json:"autoAssignToSelf,omitempty"`
	CalendarHash *string `json:"calendarHash,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	FeedLastSeenTime *any `json:"feedLastSeenTime,omitempty"`
	FeedSummarySchedule *string `json:"feedSummarySchedule,omitempty"`
	Id string `json:"id"`
	PullRequestMergeStrategyPreference *string `json:"pullRequestMergeStrategyPreference,omitempty"`
	ShowFullUserNames *bool `json:"showFullUserNames,omitempty"`
	SubscribedToChangelog *bool `json:"subscribedToChangelog,omitempty"`
	SubscribedToDPA *bool `json:"subscribedToDPA,omitempty"`
	SubscribedToInviteAccepted *bool `json:"subscribedToInviteAccepted,omitempty"`
	SubscribedToPrivacyLegalUpdates *bool `json:"subscribedToPrivacyLegalUpdates,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
	User *map[string]any `json:"user,omitempty"`
}

// UserSettingCreateData is the typed request payload for UserSetting.CreateTyped.
type UserSettingCreateData struct {
	Category any `json:"category"`
	Channel any `json:"channel"`
	Subscribe bool `json:"subscribe"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	AutoAssignToSelf bool `json:"autoAssignToSelf"`
	CalendarHash *string `json:"calendarHash,omitempty"`
	CreatedAt any `json:"createdAt"`
	FeedLastSeenTime *any `json:"feedLastSeenTime,omitempty"`
	FeedSummarySchedule *string `json:"feedSummarySchedule,omitempty"`
	Id string `json:"id"`
	PullRequestMergeStrategyPreference *string `json:"pullRequestMergeStrategyPreference,omitempty"`
	ShowFullUserNames bool `json:"showFullUserNames"`
	SubscribedToChangelog bool `json:"subscribedToChangelog"`
	SubscribedToDPA bool `json:"subscribedToDPA"`
	SubscribedToInviteAccepted bool `json:"subscribedToInviteAccepted"`
	SubscribedToPrivacyLegalUpdates bool `json:"subscribedToPrivacyLegalUpdates"`
	UpdatedAt any `json:"updatedAt"`
	User *map[string]any `json:"user,omitempty"`
}

// UserSettingUpdateData is the typed request payload for UserSetting.UpdateTyped.
type UserSettingUpdateData struct {
	Id string `json:"id"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	AutoAssignToSelf *bool `json:"autoAssignToSelf,omitempty"`
	CalendarHash *string `json:"calendarHash,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	FeedLastSeenTime *any `json:"feedLastSeenTime,omitempty"`
	FeedSummarySchedule *string `json:"feedSummarySchedule,omitempty"`
	PullRequestMergeStrategyPreference *string `json:"pullRequestMergeStrategyPreference,omitempty"`
	ShowFullUserNames *bool `json:"showFullUserNames,omitempty"`
	SubscribedToChangelog *bool `json:"subscribedToChangelog,omitempty"`
	SubscribedToDPA *bool `json:"subscribedToDPA,omitempty"`
	SubscribedToInviteAccepted *bool `json:"subscribedToInviteAccepted,omitempty"`
	SubscribedToPrivacyLegalUpdates *bool `json:"subscribedToPrivacyLegalUpdates,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
	User *map[string]any `json:"user,omitempty"`
}

// ViewPreference is the typed data model for the view_preference entity.
type ViewPreference struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Id string `json:"id"`
	Type string `json:"type"`
	UpdatedAt any `json:"updatedAt"`
	ViewType string `json:"viewType"`
}

// ViewPreferenceLoadMatch is the typed request payload for ViewPreference.LoadTyped.
type ViewPreferenceLoadMatch struct {
	ViewType any `json:"view_type"`
}

// ViewPreferenceCreateData is the typed request payload for ViewPreference.CreateTyped.
type ViewPreferenceCreateData struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Id string `json:"id"`
	Type string `json:"type"`
	UpdatedAt any `json:"updatedAt"`
	ViewType string `json:"viewType"`
}

// ViewPreferenceUpdateData is the typed request payload for ViewPreference.UpdateTyped.
type ViewPreferenceUpdateData struct {
	Id string `json:"id"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
	ViewType *string `json:"viewType,omitempty"`
}

// ViewPreferenceRemoveMatch is the typed request payload for ViewPreference.RemoveTyped.
type ViewPreferenceRemoveMatch struct {
	Id string `json:"id"`
}

// Webhook is the typed data model for the webhook entity.
type Webhook struct {
	AllPublicTeams bool `json:"allPublicTeams"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	Enabled bool `json:"enabled"`
	Id string `json:"id"`
	Label *string `json:"label,omitempty"`
	ResourceTypes string `json:"resourceTypes"`
	Secret *string `json:"secret,omitempty"`
	Team *map[string]any `json:"team,omitempty"`
	TeamIds *string `json:"teamIds,omitempty"`
	UpdatedAt any `json:"updatedAt"`
	Url *string `json:"url,omitempty"`
}

// WebhookLoadMatch is the typed request payload for Webhook.LoadTyped.
type WebhookLoadMatch struct {
	Id string `json:"id"`
}

// WebhookListMatch is the typed request payload for Webhook.ListTyped.
type WebhookListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// WebhookCreateData is the typed request payload for Webhook.CreateTyped.
type WebhookCreateData struct {
	AllPublicTeams bool `json:"allPublicTeams"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt any `json:"createdAt"`
	Creator *map[string]any `json:"creator,omitempty"`
	Enabled bool `json:"enabled"`
	Id string `json:"id"`
	Label *string `json:"label,omitempty"`
	ResourceTypes string `json:"resourceTypes"`
	Secret *string `json:"secret,omitempty"`
	Team *map[string]any `json:"team,omitempty"`
	TeamIds *string `json:"teamIds,omitempty"`
	UpdatedAt any `json:"updatedAt"`
	Url *string `json:"url,omitempty"`
}

// WebhookUpdateData is the typed request payload for Webhook.UpdateTyped.
type WebhookUpdateData struct {
	Id string `json:"id"`
	AllPublicTeams *bool `json:"allPublicTeams,omitempty"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Creator *map[string]any `json:"creator,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Label *string `json:"label,omitempty"`
	ResourceTypes *string `json:"resourceTypes,omitempty"`
	Secret *string `json:"secret,omitempty"`
	Team *map[string]any `json:"team,omitempty"`
	TeamIds *string `json:"teamIds,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
	Url *string `json:"url,omitempty"`
}

// WebhookRemoveMatch is the typed request payload for Webhook.RemoveTyped.
type WebhookRemoveMatch struct {
	Id string `json:"id"`
}

// WebhookFailureEvent is the typed data model for the webhook_failure_event entity.
type WebhookFailureEvent struct {
	CreatedAt any `json:"createdAt"`
	ExecutionId string `json:"executionId"`
	HttpStatus *float64 `json:"httpStatus,omitempty"`
	Id string `json:"id"`
	ResponseOrError *string `json:"responseOrError,omitempty"`
	Url string `json:"url"`
	Webhook *map[string]any `json:"webhook,omitempty"`
}

// WebhookFailureEventListMatch is the typed request payload for WebhookFailureEvent.ListTyped.
type WebhookFailureEventListMatch struct {
	OauthClientId *string `json:"oauth_client_id,omitempty"`
	WebhookId *string `json:"webhook_id,omitempty"`
}

// WorkflowState is the typed data model for the workflow_state entity.
type WorkflowState struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Color string `json:"color"`
	CreatedAt any `json:"createdAt"`
	Description *string `json:"description,omitempty"`
	Id string `json:"id"`
	InheritedFrom *map[string]any `json:"inheritedFrom,omitempty"`
	Name string `json:"name"`
	Position float64 `json:"position"`
	Team *map[string]any `json:"team,omitempty"`
	Type string `json:"type"`
	UpdatedAt any `json:"updatedAt"`
}

// WorkflowStateLoadMatch is the typed request payload for WorkflowState.LoadTyped.
type WorkflowStateLoadMatch struct {
	Id string `json:"id"`
}

// WorkflowStateListMatch is the typed request payload for WorkflowState.ListTyped.
type WorkflowStateListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	First *int `json:"first,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Last *int `json:"last,omitempty"`
	OrderBy *any `json:"order_by,omitempty"`
}

// WorkflowStateCreateData is the typed request payload for WorkflowState.CreateTyped.
type WorkflowStateCreateData struct {
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Color string `json:"color"`
	CreatedAt any `json:"createdAt"`
	Description *string `json:"description,omitempty"`
	Id string `json:"id"`
	InheritedFrom *map[string]any `json:"inheritedFrom,omitempty"`
	Name string `json:"name"`
	Position float64 `json:"position"`
	Team *map[string]any `json:"team,omitempty"`
	Type string `json:"type"`
	UpdatedAt any `json:"updatedAt"`
}

// WorkflowStateUpdateData is the typed request payload for WorkflowState.UpdateTyped.
type WorkflowStateUpdateData struct {
	Id string `json:"id"`
	ArchivedAt *any `json:"archivedAt,omitempty"`
	Color *string `json:"color,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	Description *string `json:"description,omitempty"`
	InheritedFrom *map[string]any `json:"inheritedFrom,omitempty"`
	Name *string `json:"name,omitempty"`
	Position *float64 `json:"position,omitempty"`
	Team *map[string]any `json:"team,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
