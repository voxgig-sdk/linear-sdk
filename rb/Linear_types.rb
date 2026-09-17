# frozen_string_literal: true

# Typed models for the Linear SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# AccessKeyRelease entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] commitSha
#   @return [String, nil]
#
# @!attribute [rw] completedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] version
#   @return [String, nil]
AccessKeyRelease = Struct.new(
  :archivedAt,
  :commitSha,
  :completedAt,
  :createdAt,
  :id,
  :name,
  :url,
  :version,
  keyword_init: true
)

# Request payload for AccessKeyRelease#load.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] commitSha
#   @return [String, nil]
#
# @!attribute [rw] completedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
AccessKeyReleaseLoadMatch = Struct.new(
  :archivedAt,
  :commitSha,
  :completedAt,
  :createdAt,
  :id,
  :name,
  :url,
  :version,
  keyword_init: true
)

# Request payload for AccessKeyRelease#list.
#
# @!attribute [rw] limit
#   @return [Integer, nil]
AccessKeyReleaseListMatch = Struct.new(
  :limit,
  keyword_init: true
)

# Request payload for AccessKeyRelease#create.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] commitSha
#   @return [String, nil]
#
# @!attribute [rw] completedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] version
#   @return [String, nil]
AccessKeyReleaseCreateData = Struct.new(
  :archivedAt,
  :commitSha,
  :completedAt,
  :createdAt,
  :id,
  :name,
  :url,
  :version,
  keyword_init: true
)

# AccessKeyReleasePipeline entity data model.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] includePathPatterns
#   @return [String]
AccessKeyReleasePipeline = Struct.new(
  :id,
  :includePathPatterns,
  keyword_init: true
)

# Request payload for AccessKeyReleasePipeline#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] includePathPatterns
#   @return [String, nil]
AccessKeyReleasePipelineLoadMatch = Struct.new(
  :id,
  :includePathPatterns,
  keyword_init: true
)

# AgentActivity entity data model.
#
# @!attribute [rw] agentSession
#   @return [Hash, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] contextualMetadata
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] ephemeral
#   @return [Boolean]
#
# @!attribute [rw] executionSkippedReason
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] queued
#   @return [Boolean]
#
# @!attribute [rw] sentAt
#   @return [Object, nil]
#
# @!attribute [rw] signal
#   @return [String, nil]
#
# @!attribute [rw] signalMetadata
#   @return [Object, nil]
#
# @!attribute [rw] sourceComment
#   @return [Hash, nil]
#
# @!attribute [rw] sourceMetadata
#   @return [Object, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] user
#   @return [Hash, nil]
AgentActivity = Struct.new(
  :agentSession,
  :archivedAt,
  :contextualMetadata,
  :createdAt,
  :ephemeral,
  :executionSkippedReason,
  :id,
  :queued,
  :sentAt,
  :signal,
  :signalMetadata,
  :sourceComment,
  :sourceMetadata,
  :updatedAt,
  :user,
  keyword_init: true
)

# Request payload for AgentActivity#load.
#
# @!attribute [rw] id
#   @return [String]
AgentActivityLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for AgentActivity#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
AgentActivityListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for AgentActivity#create.
#
# @!attribute [rw] agentSession
#   @return [Hash, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] contextualMetadata
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] ephemeral
#   @return [Boolean]
#
# @!attribute [rw] executionSkippedReason
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] queued
#   @return [Boolean]
#
# @!attribute [rw] sentAt
#   @return [Object, nil]
#
# @!attribute [rw] signal
#   @return [String, nil]
#
# @!attribute [rw] signalMetadata
#   @return [Object, nil]
#
# @!attribute [rw] sourceComment
#   @return [Hash, nil]
#
# @!attribute [rw] sourceMetadata
#   @return [Object, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] user
#   @return [Hash, nil]
AgentActivityCreateData = Struct.new(
  :agentSession,
  :archivedAt,
  :contextualMetadata,
  :createdAt,
  :ephemeral,
  :executionSkippedReason,
  :id,
  :queued,
  :sentAt,
  :signal,
  :signalMetadata,
  :sourceComment,
  :sourceMetadata,
  :updatedAt,
  :user,
  keyword_init: true
)

# Request payload for AgentActivity#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] agentSession
#   @return [Hash, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] contextualMetadata
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] ephemeral
#   @return [Boolean, nil]
#
# @!attribute [rw] executionSkippedReason
#   @return [String, nil]
#
# @!attribute [rw] queued
#   @return [Boolean, nil]
#
# @!attribute [rw] sentAt
#   @return [Object, nil]
#
# @!attribute [rw] signal
#   @return [String, nil]
#
# @!attribute [rw] signalMetadata
#   @return [Object, nil]
#
# @!attribute [rw] sourceComment
#   @return [Hash, nil]
#
# @!attribute [rw] sourceMetadata
#   @return [Object, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
AgentActivityUpdateData = Struct.new(
  :id,
  :agentSession,
  :archivedAt,
  :contextualMetadata,
  :createdAt,
  :ephemeral,
  :executionSkippedReason,
  :queued,
  :sentAt,
  :signal,
  :signalMetadata,
  :sourceComment,
  :sourceMetadata,
  :updatedAt,
  :user,
  keyword_init: true
)

# AgentSession entity data model.
#
# @!attribute [rw] appUser
#   @return [Hash, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] codingHarnessModelLabel
#   @return [String, nil]
#
# @!attribute [rw] comment
#   @return [Hash, nil]
#
# @!attribute [rw] context
#   @return [Object]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] dismissedAt
#   @return [Object, nil]
#
# @!attribute [rw] dismissedBy
#   @return [Hash, nil]
#
# @!attribute [rw] endedAt
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] issue
#   @return [Hash, nil]
#
# @!attribute [rw] modelSelection
#   @return [Object, nil]
#
# @!attribute [rw] plan
#   @return [Object, nil]
#
# @!attribute [rw] pullRequest
#   @return [Hash, nil]
#
# @!attribute [rw] slugId
#   @return [String]
#
# @!attribute [rw] sourceComment
#   @return [Hash, nil]
#
# @!attribute [rw] sourceMetadata
#   @return [Object, nil]
#
# @!attribute [rw] startedAt
#   @return [Object, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] summary
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String, nil]
AgentSession = Struct.new(
  :appUser,
  :archivedAt,
  :codingHarnessModelLabel,
  :comment,
  :context,
  :createdAt,
  :creator,
  :dismissedAt,
  :dismissedBy,
  :endedAt,
  :id,
  :issue,
  :modelSelection,
  :plan,
  :pullRequest,
  :slugId,
  :sourceComment,
  :sourceMetadata,
  :startedAt,
  :status,
  :summary,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for AgentSession#load.
#
# @!attribute [rw] id
#   @return [String]
AgentSessionLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for AgentSession#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
AgentSessionListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for AgentSession#create.
#
# @!attribute [rw] pull_request_id
#   @return [String, nil]
#
# @!attribute [rw] appUser
#   @return [Hash, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] codingHarnessModelLabel
#   @return [String, nil]
#
# @!attribute [rw] comment
#   @return [Hash, nil]
#
# @!attribute [rw] context
#   @return [Object]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] dismissedAt
#   @return [Object, nil]
#
# @!attribute [rw] dismissedBy
#   @return [Hash, nil]
#
# @!attribute [rw] endedAt
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] issue
#   @return [Hash, nil]
#
# @!attribute [rw] modelSelection
#   @return [Object, nil]
#
# @!attribute [rw] plan
#   @return [Object, nil]
#
# @!attribute [rw] pullRequest
#   @return [Hash, nil]
#
# @!attribute [rw] slugId
#   @return [String]
#
# @!attribute [rw] sourceComment
#   @return [Hash, nil]
#
# @!attribute [rw] sourceMetadata
#   @return [Object, nil]
#
# @!attribute [rw] startedAt
#   @return [Object, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] summary
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String, nil]
AgentSessionCreateData = Struct.new(
  :pull_request_id,
  :appUser,
  :archivedAt,
  :codingHarnessModelLabel,
  :comment,
  :context,
  :createdAt,
  :creator,
  :dismissedAt,
  :dismissedBy,
  :endedAt,
  :id,
  :issue,
  :modelSelection,
  :plan,
  :pullRequest,
  :slugId,
  :sourceComment,
  :sourceMetadata,
  :startedAt,
  :status,
  :summary,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for AgentSession#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] appUser
#   @return [Hash, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] codingHarnessModelLabel
#   @return [String, nil]
#
# @!attribute [rw] comment
#   @return [Hash, nil]
#
# @!attribute [rw] context
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] dismissedAt
#   @return [Object, nil]
#
# @!attribute [rw] dismissedBy
#   @return [Hash, nil]
#
# @!attribute [rw] endedAt
#   @return [Object, nil]
#
# @!attribute [rw] issue
#   @return [Hash, nil]
#
# @!attribute [rw] modelSelection
#   @return [Object, nil]
#
# @!attribute [rw] plan
#   @return [Object, nil]
#
# @!attribute [rw] pullRequest
#   @return [Hash, nil]
#
# @!attribute [rw] slugId
#   @return [String, nil]
#
# @!attribute [rw] sourceComment
#   @return [Hash, nil]
#
# @!attribute [rw] sourceMetadata
#   @return [Object, nil]
#
# @!attribute [rw] startedAt
#   @return [Object, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] summary
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
AgentSessionUpdateData = Struct.new(
  :id,
  :appUser,
  :archivedAt,
  :codingHarnessModelLabel,
  :comment,
  :context,
  :createdAt,
  :creator,
  :dismissedAt,
  :dismissedBy,
  :endedAt,
  :issue,
  :modelSelection,
  :plan,
  :pullRequest,
  :slugId,
  :sourceComment,
  :sourceMetadata,
  :startedAt,
  :status,
  :summary,
  :updatedAt,
  :url,
  keyword_init: true
)

# AgentSkill entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] body
#   @return [String]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] icon
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] inheritedFrom
#   @return [Hash, nil]
#
# @!attribute [rw] lastUpdatedBy
#   @return [Hash, nil]
#
# @!attribute [rw] lastUsedAt
#   @return [Object, nil]
#
# @!attribute [rw] owner
#   @return [Hash, nil]
#
# @!attribute [rw] recentUsageCount
#   @return [Float]
#
# @!attribute [rw] shared
#   @return [Boolean]
#
# @!attribute [rw] slugId
#   @return [String]
#
# @!attribute [rw] teamId
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
AgentSkill = Struct.new(
  :archivedAt,
  :body,
  :color,
  :createdAt,
  :creator,
  :description,
  :icon,
  :id,
  :inheritedFrom,
  :lastUpdatedBy,
  :lastUsedAt,
  :owner,
  :recentUsageCount,
  :shared,
  :slugId,
  :teamId,
  :title,
  :updatedAt,
  keyword_init: true
)

# Request payload for AgentSkill#load.
#
# @!attribute [rw] id
#   @return [String]
AgentSkillLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for AgentSkill#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
AgentSkillListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for AgentSkill#create.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] body
#   @return [String]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] icon
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] inheritedFrom
#   @return [Hash, nil]
#
# @!attribute [rw] lastUpdatedBy
#   @return [Hash, nil]
#
# @!attribute [rw] lastUsedAt
#   @return [Object, nil]
#
# @!attribute [rw] owner
#   @return [Hash, nil]
#
# @!attribute [rw] recentUsageCount
#   @return [Float]
#
# @!attribute [rw] shared
#   @return [Boolean]
#
# @!attribute [rw] slugId
#   @return [String]
#
# @!attribute [rw] teamId
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
AgentSkillCreateData = Struct.new(
  :archivedAt,
  :body,
  :color,
  :createdAt,
  :creator,
  :description,
  :icon,
  :id,
  :inheritedFrom,
  :lastUpdatedBy,
  :lastUsedAt,
  :owner,
  :recentUsageCount,
  :shared,
  :slugId,
  :teamId,
  :title,
  :updatedAt,
  keyword_init: true
)

# Request payload for AgentSkill#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] body
#   @return [String, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] icon
#   @return [String, nil]
#
# @!attribute [rw] inheritedFrom
#   @return [Hash, nil]
#
# @!attribute [rw] lastUpdatedBy
#   @return [Hash, nil]
#
# @!attribute [rw] lastUsedAt
#   @return [Object, nil]
#
# @!attribute [rw] owner
#   @return [Hash, nil]
#
# @!attribute [rw] recentUsageCount
#   @return [Float, nil]
#
# @!attribute [rw] shared
#   @return [Boolean, nil]
#
# @!attribute [rw] slugId
#   @return [String, nil]
#
# @!attribute [rw] teamId
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
AgentSkillUpdateData = Struct.new(
  :id,
  :archivedAt,
  :body,
  :color,
  :createdAt,
  :creator,
  :description,
  :icon,
  :inheritedFrom,
  :lastUpdatedBy,
  :lastUsedAt,
  :owner,
  :recentUsageCount,
  :shared,
  :slugId,
  :teamId,
  :title,
  :updatedAt,
  keyword_init: true
)

# Request payload for AgentSkill#remove.
#
# @!attribute [rw] id
#   @return [String]
AgentSkillRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Application entity data model.
#
# @!attribute [rw] clientId
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] developer
#   @return [String]
#
# @!attribute [rw] developerUrl
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] imageUrl
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
Application = Struct.new(
  :clientId,
  :description,
  :developer,
  :developerUrl,
  :id,
  :imageUrl,
  :name,
  keyword_init: true
)

# Request payload for Application#load.
#
# @!attribute [rw] client_id
#   @return [String]
ApplicationLoadMatch = Struct.new(
  :client_id,
  keyword_init: true
)

# Attachment entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] bodyData
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] externalUserCreator
#   @return [Hash, nil]
#
# @!attribute [rw] groupBySource
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] issue
#   @return [Hash, nil]
#
# @!attribute [rw] metadata
#   @return [Object]
#
# @!attribute [rw] originalIssue
#   @return [Hash, nil]
#
# @!attribute [rw] source
#   @return [Object, nil]
#
# @!attribute [rw] sourceType
#   @return [String, nil]
#
# @!attribute [rw] subtitle
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String]
Attachment = Struct.new(
  :archivedAt,
  :bodyData,
  :createdAt,
  :creator,
  :externalUserCreator,
  :groupBySource,
  :id,
  :issue,
  :metadata,
  :originalIssue,
  :source,
  :sourceType,
  :subtitle,
  :title,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for Attachment#load.
#
# @!attribute [rw] id
#   @return [String]
AttachmentLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Attachment#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
AttachmentListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  :url,
  keyword_init: true
)

# Request payload for Attachment#create.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] bodyData
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] externalUserCreator
#   @return [Hash, nil]
#
# @!attribute [rw] groupBySource
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] issue
#   @return [Hash, nil]
#
# @!attribute [rw] metadata
#   @return [Object]
#
# @!attribute [rw] originalIssue
#   @return [Hash, nil]
#
# @!attribute [rw] source
#   @return [Object, nil]
#
# @!attribute [rw] sourceType
#   @return [String, nil]
#
# @!attribute [rw] subtitle
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String]
AttachmentCreateData = Struct.new(
  :archivedAt,
  :bodyData,
  :createdAt,
  :creator,
  :externalUserCreator,
  :groupBySource,
  :id,
  :issue,
  :metadata,
  :originalIssue,
  :source,
  :sourceType,
  :subtitle,
  :title,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for Attachment#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] bodyData
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] externalUserCreator
#   @return [Hash, nil]
#
# @!attribute [rw] groupBySource
#   @return [Boolean, nil]
#
# @!attribute [rw] issue
#   @return [Hash, nil]
#
# @!attribute [rw] metadata
#   @return [Object, nil]
#
# @!attribute [rw] originalIssue
#   @return [Hash, nil]
#
# @!attribute [rw] source
#   @return [Object, nil]
#
# @!attribute [rw] sourceType
#   @return [String, nil]
#
# @!attribute [rw] subtitle
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
AttachmentUpdateData = Struct.new(
  :id,
  :archivedAt,
  :bodyData,
  :createdAt,
  :creator,
  :externalUserCreator,
  :groupBySource,
  :issue,
  :metadata,
  :originalIssue,
  :source,
  :sourceType,
  :subtitle,
  :title,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for Attachment#remove.
#
# @!attribute [rw] id
#   @return [String]
AttachmentRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# AuditEntry entity data model.
#
# @!attribute [rw] actor
#   @return [Hash, nil]
#
# @!attribute [rw] actorId
#   @return [String, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] countryCode
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] ip
#   @return [String, nil]
#
# @!attribute [rw] metadata
#   @return [Object, nil]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] requestInformation
#   @return [Object, nil]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
AuditEntry = Struct.new(
  :actor,
  :actorId,
  :archivedAt,
  :countryCode,
  :createdAt,
  :id,
  :ip,
  :metadata,
  :organization,
  :requestInformation,
  :type,
  :updatedAt,
  keyword_init: true
)

# Request payload for AuditEntry#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
AuditEntryListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# AuditEntryType entity data model.
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
AuditEntryType = Struct.new(
  :description,
  :type,
  keyword_init: true
)

# Request payload for AuditEntryType#list.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
AuditEntryTypeListMatch = Struct.new(
  :description,
  :type,
  keyword_init: true
)

# AuthResolverResponse entity data model.
#
# @!attribute [rw] allowDomainAccess
#   @return [Boolean, nil]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] lastUsedOrganizationId
#   @return [String, nil]
#
# @!attribute [rw] service
#   @return [String, nil]
AuthResolverResponse = Struct.new(
  :allowDomainAccess,
  :email,
  :id,
  :lastUsedOrganizationId,
  :service,
  keyword_init: true
)

# Request payload for AuthResolverResponse#load.
#
# @!attribute [rw] allowDomainAccess
#   @return [Boolean, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] lastUsedOrganizationId
#   @return [String, nil]
#
# @!attribute [rw] service
#   @return [String, nil]
AuthResolverResponseLoadMatch = Struct.new(
  :allowDomainAccess,
  :email,
  :id,
  :lastUsedOrganizationId,
  :service,
  keyword_init: true
)

# Request payload for AuthResolverResponse#create.
#
# @!attribute [rw] allowDomainAccess
#   @return [Boolean, nil]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] lastUsedOrganizationId
#   @return [String, nil]
#
# @!attribute [rw] service
#   @return [String, nil]
AuthResolverResponseCreateData = Struct.new(
  :allowDomainAccess,
  :email,
  :id,
  :lastUsedOrganizationId,
  :service,
  keyword_init: true
)

# Request payload for AuthResolverResponse#update.
#
# @!attribute [rw] auth_id
#   @return [String]
#
# @!attribute [rw] response
#   @return [Object]
#
# @!attribute [rw] allowDomainAccess
#   @return [Boolean, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] lastUsedOrganizationId
#   @return [String, nil]
#
# @!attribute [rw] service
#   @return [String, nil]
AuthResolverResponseUpdateData = Struct.new(
  :auth_id,
  :response,
  :allowDomainAccess,
  :email,
  :id,
  :lastUsedOrganizationId,
  :service,
  keyword_init: true
)

# AuthenticationSessionResponse entity data model.
#
# @!attribute [rw] browserType
#   @return [String, nil]
#
# @!attribute [rw] client
#   @return [String, nil]
#
# @!attribute [rw] countryCodes
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] detailedName
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] ip
#   @return [String, nil]
#
# @!attribute [rw] isCurrentSession
#   @return [Boolean]
#
# @!attribute [rw] lastActiveAt
#   @return [Object, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] locationCity
#   @return [String, nil]
#
# @!attribute [rw] locationCountry
#   @return [String, nil]
#
# @!attribute [rw] locationCountryCode
#   @return [String, nil]
#
# @!attribute [rw] locationRegionCode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] operatingSystem
#   @return [String, nil]
#
# @!attribute [rw] service
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] userAgent
#   @return [String, nil]
AuthenticationSessionResponse = Struct.new(
  :browserType,
  :client,
  :countryCodes,
  :createdAt,
  :detailedName,
  :id,
  :ip,
  :isCurrentSession,
  :lastActiveAt,
  :location,
  :locationCity,
  :locationCountry,
  :locationCountryCode,
  :locationRegionCode,
  :name,
  :operatingSystem,
  :service,
  :type,
  :updatedAt,
  :userAgent,
  keyword_init: true
)

# Request payload for AuthenticationSessionResponse#list.
#
# @!attribute [rw] id
#   @return [String, nil]
AuthenticationSessionResponseListMatch = Struct.new(
  :id,
  keyword_init: true
)

# Comment entity data model.
#
# @!attribute [rw] agentSession
#   @return [Hash, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] body
#   @return [String]
#
# @!attribute [rw] bodyData
#   @return [String]
#
# @!attribute [rw] botActor
#   @return [Hash, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] documentContent
#   @return [Hash, nil]
#
# @!attribute [rw] documentContentId
#   @return [String, nil]
#
# @!attribute [rw] editedAt
#   @return [Object, nil]
#
# @!attribute [rw] externalThread
#   @return [Hash, nil]
#
# @!attribute [rw] externalUser
#   @return [Hash, nil]
#
# @!attribute [rw] hideInLinear
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] initiative
#   @return [Hash, nil]
#
# @!attribute [rw] initiativeId
#   @return [String, nil]
#
# @!attribute [rw] initiativeUpdate
#   @return [Hash, nil]
#
# @!attribute [rw] initiativeUpdateId
#   @return [String, nil]
#
# @!attribute [rw] isArtificialAgentSessionRoot
#   @return [Boolean]
#
# @!attribute [rw] issue
#   @return [Hash, nil]
#
# @!attribute [rw] issueId
#   @return [String, nil]
#
# @!attribute [rw] onBehalfOf
#   @return [Hash, nil]
#
# @!attribute [rw] parent
#   @return [Hash, nil]
#
# @!attribute [rw] parentId
#   @return [String, nil]
#
# @!attribute [rw] post
#   @return [Hash, nil]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] projectId
#   @return [String, nil]
#
# @!attribute [rw] projectUpdate
#   @return [Hash, nil]
#
# @!attribute [rw] projectUpdateId
#   @return [String, nil]
#
# @!attribute [rw] quotedText
#   @return [String, nil]
#
# @!attribute [rw] reactionData
#   @return [Object]
#
# @!attribute [rw] resolvedAt
#   @return [Object, nil]
#
# @!attribute [rw] resolvingComment
#   @return [Hash, nil]
#
# @!attribute [rw] resolvingCommentId
#   @return [String, nil]
#
# @!attribute [rw] resolvingUser
#   @return [Hash, nil]
#
# @!attribute [rw] threadSummary
#   @return [Object, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] user
#   @return [Hash, nil]
Comment = Struct.new(
  :agentSession,
  :archivedAt,
  :body,
  :bodyData,
  :botActor,
  :createdAt,
  :documentContent,
  :documentContentId,
  :editedAt,
  :externalThread,
  :externalUser,
  :hideInLinear,
  :id,
  :initiative,
  :initiativeId,
  :initiativeUpdate,
  :initiativeUpdateId,
  :isArtificialAgentSessionRoot,
  :issue,
  :issueId,
  :onBehalfOf,
  :parent,
  :parentId,
  :post,
  :project,
  :projectId,
  :projectUpdate,
  :projectUpdateId,
  :quotedText,
  :reactionData,
  :resolvedAt,
  :resolvingComment,
  :resolvingCommentId,
  :resolvingUser,
  :threadSummary,
  :updatedAt,
  :url,
  :user,
  keyword_init: true
)

# Request payload for Comment#load.
#
# @!attribute [rw] hash
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
CommentLoadMatch = Struct.new(
  :hash,
  :id,
  keyword_init: true
)

# Request payload for Comment#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
CommentListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for Comment#create.
#
# @!attribute [rw] agentSession
#   @return [Hash, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] body
#   @return [String]
#
# @!attribute [rw] bodyData
#   @return [String]
#
# @!attribute [rw] botActor
#   @return [Hash, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] documentContent
#   @return [Hash, nil]
#
# @!attribute [rw] documentContentId
#   @return [String, nil]
#
# @!attribute [rw] editedAt
#   @return [Object, nil]
#
# @!attribute [rw] externalThread
#   @return [Hash, nil]
#
# @!attribute [rw] externalUser
#   @return [Hash, nil]
#
# @!attribute [rw] hideInLinear
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] initiative
#   @return [Hash, nil]
#
# @!attribute [rw] initiativeId
#   @return [String, nil]
#
# @!attribute [rw] initiativeUpdate
#   @return [Hash, nil]
#
# @!attribute [rw] initiativeUpdateId
#   @return [String, nil]
#
# @!attribute [rw] isArtificialAgentSessionRoot
#   @return [Boolean]
#
# @!attribute [rw] issue
#   @return [Hash, nil]
#
# @!attribute [rw] issueId
#   @return [String, nil]
#
# @!attribute [rw] onBehalfOf
#   @return [Hash, nil]
#
# @!attribute [rw] parent
#   @return [Hash, nil]
#
# @!attribute [rw] parentId
#   @return [String, nil]
#
# @!attribute [rw] post
#   @return [Hash, nil]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] projectId
#   @return [String, nil]
#
# @!attribute [rw] projectUpdate
#   @return [Hash, nil]
#
# @!attribute [rw] projectUpdateId
#   @return [String, nil]
#
# @!attribute [rw] quotedText
#   @return [String, nil]
#
# @!attribute [rw] reactionData
#   @return [Object]
#
# @!attribute [rw] resolvedAt
#   @return [Object, nil]
#
# @!attribute [rw] resolvingComment
#   @return [Hash, nil]
#
# @!attribute [rw] resolvingCommentId
#   @return [String, nil]
#
# @!attribute [rw] resolvingUser
#   @return [Hash, nil]
#
# @!attribute [rw] threadSummary
#   @return [Object, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] user
#   @return [Hash, nil]
CommentCreateData = Struct.new(
  :agentSession,
  :archivedAt,
  :body,
  :bodyData,
  :botActor,
  :createdAt,
  :documentContent,
  :documentContentId,
  :editedAt,
  :externalThread,
  :externalUser,
  :hideInLinear,
  :id,
  :initiative,
  :initiativeId,
  :initiativeUpdate,
  :initiativeUpdateId,
  :isArtificialAgentSessionRoot,
  :issue,
  :issueId,
  :onBehalfOf,
  :parent,
  :parentId,
  :post,
  :project,
  :projectId,
  :projectUpdate,
  :projectUpdateId,
  :quotedText,
  :reactionData,
  :resolvedAt,
  :resolvingComment,
  :resolvingCommentId,
  :resolvingUser,
  :threadSummary,
  :updatedAt,
  :url,
  :user,
  keyword_init: true
)

# Request payload for Comment#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] skip_edited_at
#   @return [Boolean, nil]
#
# @!attribute [rw] agentSession
#   @return [Hash, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] body
#   @return [String, nil]
#
# @!attribute [rw] bodyData
#   @return [String, nil]
#
# @!attribute [rw] botActor
#   @return [Hash, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] documentContent
#   @return [Hash, nil]
#
# @!attribute [rw] documentContentId
#   @return [String, nil]
#
# @!attribute [rw] editedAt
#   @return [Object, nil]
#
# @!attribute [rw] externalThread
#   @return [Hash, nil]
#
# @!attribute [rw] externalUser
#   @return [Hash, nil]
#
# @!attribute [rw] hideInLinear
#   @return [Boolean, nil]
#
# @!attribute [rw] initiative
#   @return [Hash, nil]
#
# @!attribute [rw] initiativeId
#   @return [String, nil]
#
# @!attribute [rw] initiativeUpdate
#   @return [Hash, nil]
#
# @!attribute [rw] initiativeUpdateId
#   @return [String, nil]
#
# @!attribute [rw] isArtificialAgentSessionRoot
#   @return [Boolean, nil]
#
# @!attribute [rw] issue
#   @return [Hash, nil]
#
# @!attribute [rw] issueId
#   @return [String, nil]
#
# @!attribute [rw] onBehalfOf
#   @return [Hash, nil]
#
# @!attribute [rw] parent
#   @return [Hash, nil]
#
# @!attribute [rw] parentId
#   @return [String, nil]
#
# @!attribute [rw] post
#   @return [Hash, nil]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] projectId
#   @return [String, nil]
#
# @!attribute [rw] projectUpdate
#   @return [Hash, nil]
#
# @!attribute [rw] projectUpdateId
#   @return [String, nil]
#
# @!attribute [rw] quotedText
#   @return [String, nil]
#
# @!attribute [rw] reactionData
#   @return [Object, nil]
#
# @!attribute [rw] resolvedAt
#   @return [Object, nil]
#
# @!attribute [rw] resolvingComment
#   @return [Hash, nil]
#
# @!attribute [rw] resolvingCommentId
#   @return [String, nil]
#
# @!attribute [rw] resolvingUser
#   @return [Hash, nil]
#
# @!attribute [rw] threadSummary
#   @return [Object, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
CommentUpdateData = Struct.new(
  :id,
  :skip_edited_at,
  :agentSession,
  :archivedAt,
  :body,
  :bodyData,
  :botActor,
  :createdAt,
  :documentContent,
  :documentContentId,
  :editedAt,
  :externalThread,
  :externalUser,
  :hideInLinear,
  :initiative,
  :initiativeId,
  :initiativeUpdate,
  :initiativeUpdateId,
  :isArtificialAgentSessionRoot,
  :issue,
  :issueId,
  :onBehalfOf,
  :parent,
  :parentId,
  :post,
  :project,
  :projectId,
  :projectUpdate,
  :projectUpdateId,
  :quotedText,
  :reactionData,
  :resolvedAt,
  :resolvingComment,
  :resolvingCommentId,
  :resolvingUser,
  :threadSummary,
  :updatedAt,
  :url,
  :user,
  keyword_init: true
)

# Request payload for Comment#remove.
#
# @!attribute [rw] id
#   @return [String]
CommentRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# CreateOrJoinOrganizationResponse entity data model.
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
CreateOrJoinOrganizationResponse = Struct.new(
  :organization,
  :user,
  keyword_init: true
)

# Request payload for CreateOrJoinOrganizationResponse#create.
#
# @!attribute [rw] partner_offer_token
#   @return [String, nil]
#
# @!attribute [rw] session_id
#   @return [String, nil]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
CreateOrJoinOrganizationResponseCreateData = Struct.new(
  :partner_offer_token,
  :session_id,
  :organization,
  :user,
  keyword_init: true
)

# Request payload for CreateOrJoinOrganizationResponse#update.
#
# @!attribute [rw] organization_id
#   @return [String]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
CreateOrJoinOrganizationResponseUpdateData = Struct.new(
  :organization_id,
  :organization,
  :user,
  keyword_init: true
)

# CustomView entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] facet
#   @return [Hash, nil]
#
# @!attribute [rw] feedItemFilterData
#   @return [Object, nil]
#
# @!attribute [rw] filterData
#   @return [Object]
#
# @!attribute [rw] icon
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] initiativeFilterData
#   @return [Object, nil]
#
# @!attribute [rw] modelName
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] organizationViewPreferences
#   @return [Hash, nil]
#
# @!attribute [rw] owner
#   @return [Hash, nil]
#
# @!attribute [rw] projectFilterData
#   @return [Object, nil]
#
# @!attribute [rw] shared
#   @return [Boolean]
#
# @!attribute [rw] slugId
#   @return [String]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] updatedBy
#   @return [Hash, nil]
#
# @!attribute [rw] userViewPreferences
#   @return [Hash, nil]
CustomView = Struct.new(
  :archivedAt,
  :color,
  :createdAt,
  :creator,
  :description,
  :facet,
  :feedItemFilterData,
  :filterData,
  :icon,
  :id,
  :initiativeFilterData,
  :modelName,
  :name,
  :organization,
  :organizationViewPreferences,
  :owner,
  :projectFilterData,
  :shared,
  :slugId,
  :team,
  :updatedAt,
  :updatedBy,
  :userViewPreferences,
  keyword_init: true
)

# Request payload for CustomView#load.
#
# @!attribute [rw] id
#   @return [String]
CustomViewLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for CustomView#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
CustomViewListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for CustomView#create.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] facet
#   @return [Hash, nil]
#
# @!attribute [rw] feedItemFilterData
#   @return [Object, nil]
#
# @!attribute [rw] filterData
#   @return [Object]
#
# @!attribute [rw] icon
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] initiativeFilterData
#   @return [Object, nil]
#
# @!attribute [rw] modelName
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] organizationViewPreferences
#   @return [Hash, nil]
#
# @!attribute [rw] owner
#   @return [Hash, nil]
#
# @!attribute [rw] projectFilterData
#   @return [Object, nil]
#
# @!attribute [rw] shared
#   @return [Boolean]
#
# @!attribute [rw] slugId
#   @return [String]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] updatedBy
#   @return [Hash, nil]
#
# @!attribute [rw] userViewPreferences
#   @return [Hash, nil]
CustomViewCreateData = Struct.new(
  :archivedAt,
  :color,
  :createdAt,
  :creator,
  :description,
  :facet,
  :feedItemFilterData,
  :filterData,
  :icon,
  :id,
  :initiativeFilterData,
  :modelName,
  :name,
  :organization,
  :organizationViewPreferences,
  :owner,
  :projectFilterData,
  :shared,
  :slugId,
  :team,
  :updatedAt,
  :updatedBy,
  :userViewPreferences,
  keyword_init: true
)

# Request payload for CustomView#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] facet
#   @return [Hash, nil]
#
# @!attribute [rw] feedItemFilterData
#   @return [Object, nil]
#
# @!attribute [rw] filterData
#   @return [Object, nil]
#
# @!attribute [rw] icon
#   @return [String, nil]
#
# @!attribute [rw] initiativeFilterData
#   @return [Object, nil]
#
# @!attribute [rw] modelName
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] organizationViewPreferences
#   @return [Hash, nil]
#
# @!attribute [rw] owner
#   @return [Hash, nil]
#
# @!attribute [rw] projectFilterData
#   @return [Object, nil]
#
# @!attribute [rw] shared
#   @return [Boolean, nil]
#
# @!attribute [rw] slugId
#   @return [String, nil]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] updatedBy
#   @return [Hash, nil]
#
# @!attribute [rw] userViewPreferences
#   @return [Hash, nil]
CustomViewUpdateData = Struct.new(
  :id,
  :archivedAt,
  :color,
  :createdAt,
  :creator,
  :description,
  :facet,
  :feedItemFilterData,
  :filterData,
  :icon,
  :initiativeFilterData,
  :modelName,
  :name,
  :organization,
  :organizationViewPreferences,
  :owner,
  :projectFilterData,
  :shared,
  :slugId,
  :team,
  :updatedAt,
  :updatedBy,
  :userViewPreferences,
  keyword_init: true
)

# Request payload for CustomView#remove.
#
# @!attribute [rw] id
#   @return [String]
CustomViewRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Customer entity data model.
#
# @!attribute [rw] approximateNeedCount
#   @return [Float]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] domains
#   @return [String]
#
# @!attribute [rw] externalIds
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] integration
#   @return [Hash, nil]
#
# @!attribute [rw] logoUrl
#   @return [String, nil]
#
# @!attribute [rw] mainSourceId
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] owner
#   @return [Hash, nil]
#
# @!attribute [rw] revenue
#   @return [Integer, nil]
#
# @!attribute [rw] size
#   @return [Float, nil]
#
# @!attribute [rw] slackChannelId
#   @return [String, nil]
#
# @!attribute [rw] slugId
#   @return [String]
#
# @!attribute [rw] status
#   @return [Hash, nil]
#
# @!attribute [rw] tier
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String]
Customer = Struct.new(
  :approximateNeedCount,
  :archivedAt,
  :createdAt,
  :domains,
  :externalIds,
  :id,
  :integration,
  :logoUrl,
  :mainSourceId,
  :name,
  :owner,
  :revenue,
  :size,
  :slackChannelId,
  :slugId,
  :status,
  :tier,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for Customer#load.
#
# @!attribute [rw] id
#   @return [String]
CustomerLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Customer#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
CustomerListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for Customer#create.
#
# @!attribute [rw] approximateNeedCount
#   @return [Float]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] domains
#   @return [String]
#
# @!attribute [rw] externalIds
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] integration
#   @return [Hash, nil]
#
# @!attribute [rw] logoUrl
#   @return [String, nil]
#
# @!attribute [rw] mainSourceId
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] owner
#   @return [Hash, nil]
#
# @!attribute [rw] revenue
#   @return [Integer, nil]
#
# @!attribute [rw] size
#   @return [Float, nil]
#
# @!attribute [rw] slackChannelId
#   @return [String, nil]
#
# @!attribute [rw] slugId
#   @return [String]
#
# @!attribute [rw] status
#   @return [Hash, nil]
#
# @!attribute [rw] tier
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String]
CustomerCreateData = Struct.new(
  :approximateNeedCount,
  :archivedAt,
  :createdAt,
  :domains,
  :externalIds,
  :id,
  :integration,
  :logoUrl,
  :mainSourceId,
  :name,
  :owner,
  :revenue,
  :size,
  :slackChannelId,
  :slugId,
  :status,
  :tier,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for Customer#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] approximateNeedCount
#   @return [Float, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] domains
#   @return [String, nil]
#
# @!attribute [rw] externalIds
#   @return [String, nil]
#
# @!attribute [rw] integration
#   @return [Hash, nil]
#
# @!attribute [rw] logoUrl
#   @return [String, nil]
#
# @!attribute [rw] mainSourceId
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] owner
#   @return [Hash, nil]
#
# @!attribute [rw] revenue
#   @return [Integer, nil]
#
# @!attribute [rw] size
#   @return [Float, nil]
#
# @!attribute [rw] slackChannelId
#   @return [String, nil]
#
# @!attribute [rw] slugId
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [Hash, nil]
#
# @!attribute [rw] tier
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
CustomerUpdateData = Struct.new(
  :id,
  :approximateNeedCount,
  :archivedAt,
  :createdAt,
  :domains,
  :externalIds,
  :integration,
  :logoUrl,
  :mainSourceId,
  :name,
  :owner,
  :revenue,
  :size,
  :slackChannelId,
  :slugId,
  :status,
  :tier,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for Customer#remove.
#
# @!attribute [rw] id
#   @return [String]
CustomerRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# CustomerNeed entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] attachment
#   @return [Hash, nil]
#
# @!attribute [rw] body
#   @return [String, nil]
#
# @!attribute [rw] bodyData
#   @return [String, nil]
#
# @!attribute [rw] comment
#   @return [Hash, nil]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] customer
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] issue
#   @return [Hash, nil]
#
# @!attribute [rw] originalIssue
#   @return [Hash, nil]
#
# @!attribute [rw] priority
#   @return [Float]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] projectAttachment
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String, nil]
CustomerNeed = Struct.new(
  :archivedAt,
  :attachment,
  :body,
  :bodyData,
  :comment,
  :content,
  :createdAt,
  :creator,
  :customer,
  :id,
  :issue,
  :originalIssue,
  :priority,
  :project,
  :projectAttachment,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for CustomerNeed#load.
#
# @!attribute [rw] hash
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
CustomerNeedLoadMatch = Struct.new(
  :hash,
  :id,
  keyword_init: true
)

# Request payload for CustomerNeed#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
CustomerNeedListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for CustomerNeed#create.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] attachment
#   @return [Hash, nil]
#
# @!attribute [rw] body
#   @return [String, nil]
#
# @!attribute [rw] bodyData
#   @return [String, nil]
#
# @!attribute [rw] comment
#   @return [Hash, nil]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] customer
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] issue
#   @return [Hash, nil]
#
# @!attribute [rw] originalIssue
#   @return [Hash, nil]
#
# @!attribute [rw] priority
#   @return [Float]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] projectAttachment
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String, nil]
CustomerNeedCreateData = Struct.new(
  :archivedAt,
  :attachment,
  :body,
  :bodyData,
  :comment,
  :content,
  :createdAt,
  :creator,
  :customer,
  :id,
  :issue,
  :originalIssue,
  :priority,
  :project,
  :projectAttachment,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for CustomerNeed#update.
#
# @!attribute [rw] clear_attachment
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] attachment
#   @return [Hash, nil]
#
# @!attribute [rw] body
#   @return [String, nil]
#
# @!attribute [rw] bodyData
#   @return [String, nil]
#
# @!attribute [rw] comment
#   @return [Hash, nil]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] customer
#   @return [Hash, nil]
#
# @!attribute [rw] issue
#   @return [Hash, nil]
#
# @!attribute [rw] originalIssue
#   @return [Hash, nil]
#
# @!attribute [rw] priority
#   @return [Float, nil]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] projectAttachment
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
CustomerNeedUpdateData = Struct.new(
  :clear_attachment,
  :id,
  :archivedAt,
  :attachment,
  :body,
  :bodyData,
  :comment,
  :content,
  :createdAt,
  :creator,
  :customer,
  :issue,
  :originalIssue,
  :priority,
  :project,
  :projectAttachment,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for CustomerNeed#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] keep_attachment
#   @return [Boolean, nil]
CustomerNeedRemoveMatch = Struct.new(
  :id,
  :keep_attachment,
  keyword_init: true
)

# CustomerStatus entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] displayName
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] position
#   @return [Float]
#
# @!attribute [rw] updatedAt
#   @return [Object]
CustomerStatus = Struct.new(
  :archivedAt,
  :color,
  :createdAt,
  :description,
  :displayName,
  :id,
  :name,
  :position,
  :updatedAt,
  keyword_init: true
)

# Request payload for CustomerStatus#load.
#
# @!attribute [rw] id
#   @return [String]
CustomerStatusLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for CustomerStatus#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
CustomerStatusListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for CustomerStatus#create.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] displayName
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] position
#   @return [Float]
#
# @!attribute [rw] updatedAt
#   @return [Object]
CustomerStatusCreateData = Struct.new(
  :archivedAt,
  :color,
  :createdAt,
  :description,
  :displayName,
  :id,
  :name,
  :position,
  :updatedAt,
  keyword_init: true
)

# Request payload for CustomerStatus#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] displayName
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] position
#   @return [Float, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
CustomerStatusUpdateData = Struct.new(
  :id,
  :archivedAt,
  :color,
  :createdAt,
  :description,
  :displayName,
  :name,
  :position,
  :updatedAt,
  keyword_init: true
)

# Request payload for CustomerStatus#remove.
#
# @!attribute [rw] id
#   @return [String]
CustomerStatusRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# CustomerTier entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] displayName
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] position
#   @return [Float]
#
# @!attribute [rw] updatedAt
#   @return [Object]
CustomerTier = Struct.new(
  :archivedAt,
  :color,
  :createdAt,
  :description,
  :displayName,
  :id,
  :name,
  :position,
  :updatedAt,
  keyword_init: true
)

# Request payload for CustomerTier#load.
#
# @!attribute [rw] id
#   @return [String]
CustomerTierLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for CustomerTier#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
CustomerTierListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for CustomerTier#create.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] displayName
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] position
#   @return [Float]
#
# @!attribute [rw] updatedAt
#   @return [Object]
CustomerTierCreateData = Struct.new(
  :archivedAt,
  :color,
  :createdAt,
  :description,
  :displayName,
  :id,
  :name,
  :position,
  :updatedAt,
  keyword_init: true
)

# Request payload for CustomerTier#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] displayName
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] position
#   @return [Float, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
CustomerTierUpdateData = Struct.new(
  :id,
  :archivedAt,
  :color,
  :createdAt,
  :description,
  :displayName,
  :name,
  :position,
  :updatedAt,
  keyword_init: true
)

# Request payload for CustomerTier#remove.
#
# @!attribute [rw] id
#   @return [String]
CustomerTierRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Cycle entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] autoArchivedAt
#   @return [Object, nil]
#
# @!attribute [rw] completedAt
#   @return [Object, nil]
#
# @!attribute [rw] completedIssueCountHistory
#   @return [Float]
#
# @!attribute [rw] completedScopeHistory
#   @return [Float]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] currentProgress
#   @return [Object]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] endsAt
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] inProgressScopeHistory
#   @return [Float]
#
# @!attribute [rw] inheritedFrom
#   @return [Hash, nil]
#
# @!attribute [rw] isActive
#   @return [Boolean]
#
# @!attribute [rw] isFuture
#   @return [Boolean]
#
# @!attribute [rw] isNext
#   @return [Boolean]
#
# @!attribute [rw] isPast
#   @return [Boolean]
#
# @!attribute [rw] isPrevious
#   @return [Boolean]
#
# @!attribute [rw] issueCountHistory
#   @return [Float]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] number
#   @return [Float]
#
# @!attribute [rw] progress
#   @return [Float]
#
# @!attribute [rw] progressHistory
#   @return [Object]
#
# @!attribute [rw] scopeHistory
#   @return [Float]
#
# @!attribute [rw] startsAt
#   @return [Object]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
Cycle = Struct.new(
  :archivedAt,
  :autoArchivedAt,
  :completedAt,
  :completedIssueCountHistory,
  :completedScopeHistory,
  :createdAt,
  :currentProgress,
  :description,
  :endsAt,
  :id,
  :inProgressScopeHistory,
  :inheritedFrom,
  :isActive,
  :isFuture,
  :isNext,
  :isPast,
  :isPrevious,
  :issueCountHistory,
  :name,
  :number,
  :progress,
  :progressHistory,
  :scopeHistory,
  :startsAt,
  :team,
  :updatedAt,
  keyword_init: true
)

# Request payload for Cycle#load.
#
# @!attribute [rw] id
#   @return [String]
CycleLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Cycle#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
CycleListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for Cycle#create.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] autoArchivedAt
#   @return [Object, nil]
#
# @!attribute [rw] completedAt
#   @return [Object, nil]
#
# @!attribute [rw] completedIssueCountHistory
#   @return [Float]
#
# @!attribute [rw] completedScopeHistory
#   @return [Float]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] currentProgress
#   @return [Object]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] endsAt
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] inProgressScopeHistory
#   @return [Float]
#
# @!attribute [rw] inheritedFrom
#   @return [Hash, nil]
#
# @!attribute [rw] isActive
#   @return [Boolean]
#
# @!attribute [rw] isFuture
#   @return [Boolean]
#
# @!attribute [rw] isNext
#   @return [Boolean]
#
# @!attribute [rw] isPast
#   @return [Boolean]
#
# @!attribute [rw] isPrevious
#   @return [Boolean]
#
# @!attribute [rw] issueCountHistory
#   @return [Float]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] number
#   @return [Float]
#
# @!attribute [rw] progress
#   @return [Float]
#
# @!attribute [rw] progressHistory
#   @return [Object]
#
# @!attribute [rw] scopeHistory
#   @return [Float]
#
# @!attribute [rw] startsAt
#   @return [Object]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
CycleCreateData = Struct.new(
  :archivedAt,
  :autoArchivedAt,
  :completedAt,
  :completedIssueCountHistory,
  :completedScopeHistory,
  :createdAt,
  :currentProgress,
  :description,
  :endsAt,
  :id,
  :inProgressScopeHistory,
  :inheritedFrom,
  :isActive,
  :isFuture,
  :isNext,
  :isPast,
  :isPrevious,
  :issueCountHistory,
  :name,
  :number,
  :progress,
  :progressHistory,
  :scopeHistory,
  :startsAt,
  :team,
  :updatedAt,
  keyword_init: true
)

# Request payload for Cycle#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] autoArchivedAt
#   @return [Object, nil]
#
# @!attribute [rw] completedAt
#   @return [Object, nil]
#
# @!attribute [rw] completedIssueCountHistory
#   @return [Float, nil]
#
# @!attribute [rw] completedScopeHistory
#   @return [Float, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] currentProgress
#   @return [Object, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] endsAt
#   @return [Object, nil]
#
# @!attribute [rw] inProgressScopeHistory
#   @return [Float, nil]
#
# @!attribute [rw] inheritedFrom
#   @return [Hash, nil]
#
# @!attribute [rw] isActive
#   @return [Boolean, nil]
#
# @!attribute [rw] isFuture
#   @return [Boolean, nil]
#
# @!attribute [rw] isNext
#   @return [Boolean, nil]
#
# @!attribute [rw] isPast
#   @return [Boolean, nil]
#
# @!attribute [rw] isPrevious
#   @return [Boolean, nil]
#
# @!attribute [rw] issueCountHistory
#   @return [Float, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] number
#   @return [Float, nil]
#
# @!attribute [rw] progress
#   @return [Float, nil]
#
# @!attribute [rw] progressHistory
#   @return [Object, nil]
#
# @!attribute [rw] scopeHistory
#   @return [Float, nil]
#
# @!attribute [rw] startsAt
#   @return [Object, nil]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
CycleUpdateData = Struct.new(
  :id,
  :archivedAt,
  :autoArchivedAt,
  :completedAt,
  :completedIssueCountHistory,
  :completedScopeHistory,
  :createdAt,
  :currentProgress,
  :description,
  :endsAt,
  :inProgressScopeHistory,
  :inheritedFrom,
  :isActive,
  :isFuture,
  :isNext,
  :isPast,
  :isPrevious,
  :issueCountHistory,
  :name,
  :number,
  :progress,
  :progressHistory,
  :scopeHistory,
  :startsAt,
  :team,
  :updatedAt,
  keyword_init: true
)

# Diff entity data model.
#
# @!attribute [rw] additions
#   @return [Float]
#
# @!attribute [rw] agentSession
#   @return [Hash, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] contentHash
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] deletions
#   @return [Float]
#
# @!attribute [rw] fileCount
#   @return [Float]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] pullRequest
#   @return [Hash, nil]
#
# @!attribute [rw] slugId
#   @return [String]
#
# @!attribute [rw] truncated
#   @return [Boolean]
#
# @!attribute [rw] updatedAt
#   @return [Object]
Diff = Struct.new(
  :additions,
  :agentSession,
  :archivedAt,
  :contentHash,
  :createdAt,
  :creator,
  :deletions,
  :fileCount,
  :id,
  :organization,
  :pullRequest,
  :slugId,
  :truncated,
  :updatedAt,
  keyword_init: true
)

# Request payload for Diff#load.
#
# @!attribute [rw] id
#   @return [String]
DiffLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Document entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] contentState
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] cycle
#   @return [Hash, nil]
#
# @!attribute [rw] documentContentId
#   @return [String, nil]
#
# @!attribute [rw] hiddenAt
#   @return [Object, nil]
#
# @!attribute [rw] icon
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] initiative
#   @return [Hash, nil]
#
# @!attribute [rw] issue
#   @return [Hash, nil]
#
# @!attribute [rw] lastAppliedTemplate
#   @return [Hash, nil]
#
# @!attribute [rw] owner
#   @return [Hash, nil]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] release
#   @return [Hash, nil]
#
# @!attribute [rw] slugId
#   @return [String]
#
# @!attribute [rw] sortOrder
#   @return [Float]
#
# @!attribute [rw] summary
#   @return [String, nil]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] trashed
#   @return [Boolean, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] updatedBy
#   @return [Hash, nil]
#
# @!attribute [rw] url
#   @return [String]
Document = Struct.new(
  :archivedAt,
  :color,
  :content,
  :contentState,
  :createdAt,
  :creator,
  :cycle,
  :documentContentId,
  :hiddenAt,
  :icon,
  :id,
  :initiative,
  :issue,
  :lastAppliedTemplate,
  :owner,
  :project,
  :release,
  :slugId,
  :sortOrder,
  :summary,
  :team,
  :title,
  :trashed,
  :updatedAt,
  :updatedBy,
  :url,
  keyword_init: true
)

# Request payload for Document#load.
#
# @!attribute [rw] id
#   @return [String]
DocumentLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Document#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
DocumentListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for Document#create.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] contentState
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] cycle
#   @return [Hash, nil]
#
# @!attribute [rw] documentContentId
#   @return [String, nil]
#
# @!attribute [rw] hiddenAt
#   @return [Object, nil]
#
# @!attribute [rw] icon
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] initiative
#   @return [Hash, nil]
#
# @!attribute [rw] issue
#   @return [Hash, nil]
#
# @!attribute [rw] lastAppliedTemplate
#   @return [Hash, nil]
#
# @!attribute [rw] owner
#   @return [Hash, nil]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] release
#   @return [Hash, nil]
#
# @!attribute [rw] slugId
#   @return [String]
#
# @!attribute [rw] sortOrder
#   @return [Float]
#
# @!attribute [rw] summary
#   @return [String, nil]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] trashed
#   @return [Boolean, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] updatedBy
#   @return [Hash, nil]
#
# @!attribute [rw] url
#   @return [String]
DocumentCreateData = Struct.new(
  :archivedAt,
  :color,
  :content,
  :contentState,
  :createdAt,
  :creator,
  :cycle,
  :documentContentId,
  :hiddenAt,
  :icon,
  :id,
  :initiative,
  :issue,
  :lastAppliedTemplate,
  :owner,
  :project,
  :release,
  :slugId,
  :sortOrder,
  :summary,
  :team,
  :title,
  :trashed,
  :updatedAt,
  :updatedBy,
  :url,
  keyword_init: true
)

# Request payload for Document#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] contentState
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] cycle
#   @return [Hash, nil]
#
# @!attribute [rw] documentContentId
#   @return [String, nil]
#
# @!attribute [rw] hiddenAt
#   @return [Object, nil]
#
# @!attribute [rw] icon
#   @return [String, nil]
#
# @!attribute [rw] initiative
#   @return [Hash, nil]
#
# @!attribute [rw] issue
#   @return [Hash, nil]
#
# @!attribute [rw] lastAppliedTemplate
#   @return [Hash, nil]
#
# @!attribute [rw] owner
#   @return [Hash, nil]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] release
#   @return [Hash, nil]
#
# @!attribute [rw] slugId
#   @return [String, nil]
#
# @!attribute [rw] sortOrder
#   @return [Float, nil]
#
# @!attribute [rw] summary
#   @return [String, nil]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] trashed
#   @return [Boolean, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] updatedBy
#   @return [Hash, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
DocumentUpdateData = Struct.new(
  :id,
  :archivedAt,
  :color,
  :content,
  :contentState,
  :createdAt,
  :creator,
  :cycle,
  :documentContentId,
  :hiddenAt,
  :icon,
  :initiative,
  :issue,
  :lastAppliedTemplate,
  :owner,
  :project,
  :release,
  :slugId,
  :sortOrder,
  :summary,
  :team,
  :title,
  :trashed,
  :updatedAt,
  :updatedBy,
  :url,
  keyword_init: true
)

# Request payload for Document#remove.
#
# @!attribute [rw] id
#   @return [String]
DocumentRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# DocumentSearchResult entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] contentState
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] cycle
#   @return [Hash, nil]
#
# @!attribute [rw] documentContentId
#   @return [String, nil]
#
# @!attribute [rw] hiddenAt
#   @return [Object, nil]
#
# @!attribute [rw] icon
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] initiative
#   @return [Hash, nil]
#
# @!attribute [rw] issue
#   @return [Hash, nil]
#
# @!attribute [rw] lastAppliedTemplate
#   @return [Hash, nil]
#
# @!attribute [rw] metadata
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Hash, nil]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] release
#   @return [Hash, nil]
#
# @!attribute [rw] slugId
#   @return [String]
#
# @!attribute [rw] sortOrder
#   @return [Float]
#
# @!attribute [rw] summary
#   @return [String, nil]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] trashed
#   @return [Boolean, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] updatedBy
#   @return [Hash, nil]
#
# @!attribute [rw] url
#   @return [String]
DocumentSearchResult = Struct.new(
  :archivedAt,
  :color,
  :content,
  :contentState,
  :createdAt,
  :creator,
  :cycle,
  :documentContentId,
  :hiddenAt,
  :icon,
  :id,
  :initiative,
  :issue,
  :lastAppliedTemplate,
  :metadata,
  :owner,
  :project,
  :release,
  :slugId,
  :sortOrder,
  :summary,
  :team,
  :title,
  :trashed,
  :updatedAt,
  :updatedBy,
  :url,
  keyword_init: true
)

# Request payload for DocumentSearchResult#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] include_comment
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
#
# @!attribute [rw] team_id
#   @return [String, nil]
#
# @!attribute [rw] term
#   @return [String]
DocumentSearchResultListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :include_comment,
  :last,
  :order_by,
  :team_id,
  :term,
  keyword_init: true
)

# EmailIntakeAddress entity data model.
#
# @!attribute [rw] address
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] customerRequestsEnabled
#   @return [Boolean]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] forwardingEmailAddress
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] issueCanceledAutoReply
#   @return [String, nil]
#
# @!attribute [rw] issueCanceledAutoReplyEnabled
#   @return [Boolean]
#
# @!attribute [rw] issueCompletedAutoReply
#   @return [String, nil]
#
# @!attribute [rw] issueCompletedAutoReplyEnabled
#   @return [Boolean]
#
# @!attribute [rw] issueCreatedAutoReply
#   @return [String, nil]
#
# @!attribute [rw] issueCreatedAutoReplyEnabled
#   @return [Boolean]
#
# @!attribute [rw] lastUsedAt
#   @return [Object, nil]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] reopenOnReply
#   @return [Boolean]
#
# @!attribute [rw] repliesEnabled
#   @return [Boolean]
#
# @!attribute [rw] senderName
#   @return [String, nil]
#
# @!attribute [rw] sesDomainIdentity
#   @return [Hash, nil]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] template
#   @return [Hash, nil]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] useUserNamesInReplies
#   @return [Boolean]
EmailIntakeAddress = Struct.new(
  :address,
  :archivedAt,
  :createdAt,
  :creator,
  :customerRequestsEnabled,
  :enabled,
  :forwardingEmailAddress,
  :id,
  :issueCanceledAutoReply,
  :issueCanceledAutoReplyEnabled,
  :issueCompletedAutoReply,
  :issueCompletedAutoReplyEnabled,
  :issueCreatedAutoReply,
  :issueCreatedAutoReplyEnabled,
  :lastUsedAt,
  :organization,
  :reopenOnReply,
  :repliesEnabled,
  :senderName,
  :sesDomainIdentity,
  :team,
  :template,
  :type,
  :updatedAt,
  :useUserNamesInReplies,
  keyword_init: true
)

# Request payload for EmailIntakeAddress#load.
#
# @!attribute [rw] id
#   @return [String]
EmailIntakeAddressLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for EmailIntakeAddress#create.
#
# @!attribute [rw] address
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] customerRequestsEnabled
#   @return [Boolean]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] forwardingEmailAddress
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] issueCanceledAutoReply
#   @return [String, nil]
#
# @!attribute [rw] issueCanceledAutoReplyEnabled
#   @return [Boolean]
#
# @!attribute [rw] issueCompletedAutoReply
#   @return [String, nil]
#
# @!attribute [rw] issueCompletedAutoReplyEnabled
#   @return [Boolean]
#
# @!attribute [rw] issueCreatedAutoReply
#   @return [String, nil]
#
# @!attribute [rw] issueCreatedAutoReplyEnabled
#   @return [Boolean]
#
# @!attribute [rw] lastUsedAt
#   @return [Object, nil]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] reopenOnReply
#   @return [Boolean]
#
# @!attribute [rw] repliesEnabled
#   @return [Boolean]
#
# @!attribute [rw] senderName
#   @return [String, nil]
#
# @!attribute [rw] sesDomainIdentity
#   @return [Hash, nil]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] template
#   @return [Hash, nil]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] useUserNamesInReplies
#   @return [Boolean]
EmailIntakeAddressCreateData = Struct.new(
  :address,
  :archivedAt,
  :createdAt,
  :creator,
  :customerRequestsEnabled,
  :enabled,
  :forwardingEmailAddress,
  :id,
  :issueCanceledAutoReply,
  :issueCanceledAutoReplyEnabled,
  :issueCompletedAutoReply,
  :issueCompletedAutoReplyEnabled,
  :issueCreatedAutoReply,
  :issueCreatedAutoReplyEnabled,
  :lastUsedAt,
  :organization,
  :reopenOnReply,
  :repliesEnabled,
  :senderName,
  :sesDomainIdentity,
  :team,
  :template,
  :type,
  :updatedAt,
  :useUserNamesInReplies,
  keyword_init: true
)

# Request payload for EmailIntakeAddress#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] address
#   @return [String, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] customerRequestsEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] forwardingEmailAddress
#   @return [String, nil]
#
# @!attribute [rw] issueCanceledAutoReply
#   @return [String, nil]
#
# @!attribute [rw] issueCanceledAutoReplyEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] issueCompletedAutoReply
#   @return [String, nil]
#
# @!attribute [rw] issueCompletedAutoReplyEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] issueCreatedAutoReply
#   @return [String, nil]
#
# @!attribute [rw] issueCreatedAutoReplyEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] lastUsedAt
#   @return [Object, nil]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] reopenOnReply
#   @return [Boolean, nil]
#
# @!attribute [rw] repliesEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] senderName
#   @return [String, nil]
#
# @!attribute [rw] sesDomainIdentity
#   @return [Hash, nil]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] template
#   @return [Hash, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] useUserNamesInReplies
#   @return [Boolean, nil]
EmailIntakeAddressUpdateData = Struct.new(
  :id,
  :address,
  :archivedAt,
  :createdAt,
  :creator,
  :customerRequestsEnabled,
  :enabled,
  :forwardingEmailAddress,
  :issueCanceledAutoReply,
  :issueCanceledAutoReplyEnabled,
  :issueCompletedAutoReply,
  :issueCompletedAutoReplyEnabled,
  :issueCreatedAutoReply,
  :issueCreatedAutoReplyEnabled,
  :lastUsedAt,
  :organization,
  :reopenOnReply,
  :repliesEnabled,
  :senderName,
  :sesDomainIdentity,
  :team,
  :template,
  :type,
  :updatedAt,
  :useUserNamesInReplies,
  keyword_init: true
)

# Request payload for EmailIntakeAddress#remove.
#
# @!attribute [rw] id
#   @return [String]
EmailIntakeAddressRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# EmailUserAccountAuthChallengeResponse entity data model.
#
# @!attribute [rw] authType
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
EmailUserAccountAuthChallengeResponse = Struct.new(
  :authType,
  :success,
  keyword_init: true
)

# Request payload for EmailUserAccountAuthChallengeResponse#create.
#
# @!attribute [rw] authType
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
EmailUserAccountAuthChallengeResponseCreateData = Struct.new(
  :authType,
  :success,
  keyword_init: true
)

# Emoji entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] source
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String]
Emoji = Struct.new(
  :archivedAt,
  :createdAt,
  :creator,
  :id,
  :name,
  :organization,
  :source,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for Emoji#load.
#
# @!attribute [rw] id
#   @return [String]
EmojiLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Emoji#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
EmojiListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for Emoji#create.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] source
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String]
EmojiCreateData = Struct.new(
  :archivedAt,
  :createdAt,
  :creator,
  :id,
  :name,
  :organization,
  :source,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for Emoji#remove.
#
# @!attribute [rw] id
#   @return [String]
EmojiRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# EntityExternalLink entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] initiative
#   @return [Hash, nil]
#
# @!attribute [rw] label
#   @return [String]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] sortOrder
#   @return [Float]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String]
EntityExternalLink = Struct.new(
  :archivedAt,
  :createdAt,
  :creator,
  :id,
  :initiative,
  :label,
  :project,
  :sortOrder,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for EntityExternalLink#load.
#
# @!attribute [rw] id
#   @return [String]
EntityExternalLinkLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for EntityExternalLink#create.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] initiative
#   @return [Hash, nil]
#
# @!attribute [rw] label
#   @return [String]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] sortOrder
#   @return [Float]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String]
EntityExternalLinkCreateData = Struct.new(
  :archivedAt,
  :createdAt,
  :creator,
  :id,
  :initiative,
  :label,
  :project,
  :sortOrder,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for EntityExternalLink#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] initiative
#   @return [Hash, nil]
#
# @!attribute [rw] label
#   @return [String, nil]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] sortOrder
#   @return [Float, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
EntityExternalLinkUpdateData = Struct.new(
  :id,
  :archivedAt,
  :createdAt,
  :creator,
  :initiative,
  :label,
  :project,
  :sortOrder,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for EntityExternalLink#remove.
#
# @!attribute [rw] id
#   @return [String]
EntityExternalLinkRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# ExternalUser entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] avatarUrl
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] displayName
#   @return [String]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] lastSeen
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
ExternalUser = Struct.new(
  :archivedAt,
  :avatarUrl,
  :createdAt,
  :displayName,
  :email,
  :id,
  :lastSeen,
  :name,
  :organization,
  :updatedAt,
  keyword_init: true
)

# Request payload for ExternalUser#load.
#
# @!attribute [rw] id
#   @return [String]
ExternalUserLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ExternalUser#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
ExternalUserListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Favorite entity data model.
#
# @!attribute [rw] aiConversation
#   @return [Hash, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] customView
#   @return [Hash, nil]
#
# @!attribute [rw] customer
#   @return [Hash, nil]
#
# @!attribute [rw] cycle
#   @return [Hash, nil]
#
# @!attribute [rw] dashboard
#   @return [Hash, nil]
#
# @!attribute [rw] detail
#   @return [String, nil]
#
# @!attribute [rw] document
#   @return [Hash, nil]
#
# @!attribute [rw] facet
#   @return [Hash, nil]
#
# @!attribute [rw] folderName
#   @return [String, nil]
#
# @!attribute [rw] icon
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] initiative
#   @return [Hash, nil]
#
# @!attribute [rw] initiativeLabel
#   @return [Hash, nil]
#
# @!attribute [rw] initiativeTab
#   @return [String, nil]
#
# @!attribute [rw] issue
#   @return [Hash, nil]
#
# @!attribute [rw] label
#   @return [Hash, nil]
#
# @!attribute [rw] liveFolderDefinition
#   @return [Object, nil]
#
# @!attribute [rw] liveFolderPreset
#   @return [String, nil]
#
# @!attribute [rw] owner
#   @return [Hash, nil]
#
# @!attribute [rw] parent
#   @return [Hash, nil]
#
# @!attribute [rw] pipelineTab
#   @return [String, nil]
#
# @!attribute [rw] predefinedViewTeam
#   @return [Hash, nil]
#
# @!attribute [rw] predefinedViewType
#   @return [String, nil]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] projectLabel
#   @return [Hash, nil]
#
# @!attribute [rw] projectTab
#   @return [String, nil]
#
# @!attribute [rw] projectTeam
#   @return [Hash, nil]
#
# @!attribute [rw] pullRequest
#   @return [Hash, nil]
#
# @!attribute [rw] release
#   @return [Hash, nil]
#
# @!attribute [rw] releaseNote
#   @return [Hash, nil]
#
# @!attribute [rw] releasePipeline
#   @return [Hash, nil]
#
# @!attribute [rw] sortOrder
#   @return [Float]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
#
# @!attribute [rw] workflowDefinition
#   @return [Hash, nil]
Favorite = Struct.new(
  :aiConversation,
  :archivedAt,
  :color,
  :createdAt,
  :customView,
  :customer,
  :cycle,
  :dashboard,
  :detail,
  :document,
  :facet,
  :folderName,
  :icon,
  :id,
  :initiative,
  :initiativeLabel,
  :initiativeTab,
  :issue,
  :label,
  :liveFolderDefinition,
  :liveFolderPreset,
  :owner,
  :parent,
  :pipelineTab,
  :predefinedViewTeam,
  :predefinedViewType,
  :project,
  :projectLabel,
  :projectTab,
  :projectTeam,
  :pullRequest,
  :release,
  :releaseNote,
  :releasePipeline,
  :sortOrder,
  :team,
  :title,
  :type,
  :updatedAt,
  :url,
  :user,
  :workflowDefinition,
  keyword_init: true
)

# Request payload for Favorite#load.
#
# @!attribute [rw] id
#   @return [String]
FavoriteLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Favorite#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
FavoriteListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for Favorite#create.
#
# @!attribute [rw] aiConversation
#   @return [Hash, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] customView
#   @return [Hash, nil]
#
# @!attribute [rw] customer
#   @return [Hash, nil]
#
# @!attribute [rw] cycle
#   @return [Hash, nil]
#
# @!attribute [rw] dashboard
#   @return [Hash, nil]
#
# @!attribute [rw] detail
#   @return [String, nil]
#
# @!attribute [rw] document
#   @return [Hash, nil]
#
# @!attribute [rw] facet
#   @return [Hash, nil]
#
# @!attribute [rw] folderName
#   @return [String, nil]
#
# @!attribute [rw] icon
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] initiative
#   @return [Hash, nil]
#
# @!attribute [rw] initiativeLabel
#   @return [Hash, nil]
#
# @!attribute [rw] initiativeTab
#   @return [String, nil]
#
# @!attribute [rw] issue
#   @return [Hash, nil]
#
# @!attribute [rw] label
#   @return [Hash, nil]
#
# @!attribute [rw] liveFolderDefinition
#   @return [Object, nil]
#
# @!attribute [rw] liveFolderPreset
#   @return [String, nil]
#
# @!attribute [rw] owner
#   @return [Hash, nil]
#
# @!attribute [rw] parent
#   @return [Hash, nil]
#
# @!attribute [rw] pipelineTab
#   @return [String, nil]
#
# @!attribute [rw] predefinedViewTeam
#   @return [Hash, nil]
#
# @!attribute [rw] predefinedViewType
#   @return [String, nil]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] projectLabel
#   @return [Hash, nil]
#
# @!attribute [rw] projectTab
#   @return [String, nil]
#
# @!attribute [rw] projectTeam
#   @return [Hash, nil]
#
# @!attribute [rw] pullRequest
#   @return [Hash, nil]
#
# @!attribute [rw] release
#   @return [Hash, nil]
#
# @!attribute [rw] releaseNote
#   @return [Hash, nil]
#
# @!attribute [rw] releasePipeline
#   @return [Hash, nil]
#
# @!attribute [rw] sortOrder
#   @return [Float]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
#
# @!attribute [rw] workflowDefinition
#   @return [Hash, nil]
FavoriteCreateData = Struct.new(
  :aiConversation,
  :archivedAt,
  :color,
  :createdAt,
  :customView,
  :customer,
  :cycle,
  :dashboard,
  :detail,
  :document,
  :facet,
  :folderName,
  :icon,
  :id,
  :initiative,
  :initiativeLabel,
  :initiativeTab,
  :issue,
  :label,
  :liveFolderDefinition,
  :liveFolderPreset,
  :owner,
  :parent,
  :pipelineTab,
  :predefinedViewTeam,
  :predefinedViewType,
  :project,
  :projectLabel,
  :projectTab,
  :projectTeam,
  :pullRequest,
  :release,
  :releaseNote,
  :releasePipeline,
  :sortOrder,
  :team,
  :title,
  :type,
  :updatedAt,
  :url,
  :user,
  :workflowDefinition,
  keyword_init: true
)

# Request payload for Favorite#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] aiConversation
#   @return [Hash, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] customView
#   @return [Hash, nil]
#
# @!attribute [rw] customer
#   @return [Hash, nil]
#
# @!attribute [rw] cycle
#   @return [Hash, nil]
#
# @!attribute [rw] dashboard
#   @return [Hash, nil]
#
# @!attribute [rw] detail
#   @return [String, nil]
#
# @!attribute [rw] document
#   @return [Hash, nil]
#
# @!attribute [rw] facet
#   @return [Hash, nil]
#
# @!attribute [rw] folderName
#   @return [String, nil]
#
# @!attribute [rw] icon
#   @return [String, nil]
#
# @!attribute [rw] initiative
#   @return [Hash, nil]
#
# @!attribute [rw] initiativeLabel
#   @return [Hash, nil]
#
# @!attribute [rw] initiativeTab
#   @return [String, nil]
#
# @!attribute [rw] issue
#   @return [Hash, nil]
#
# @!attribute [rw] label
#   @return [Hash, nil]
#
# @!attribute [rw] liveFolderDefinition
#   @return [Object, nil]
#
# @!attribute [rw] liveFolderPreset
#   @return [String, nil]
#
# @!attribute [rw] owner
#   @return [Hash, nil]
#
# @!attribute [rw] parent
#   @return [Hash, nil]
#
# @!attribute [rw] pipelineTab
#   @return [String, nil]
#
# @!attribute [rw] predefinedViewTeam
#   @return [Hash, nil]
#
# @!attribute [rw] predefinedViewType
#   @return [String, nil]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] projectLabel
#   @return [Hash, nil]
#
# @!attribute [rw] projectTab
#   @return [String, nil]
#
# @!attribute [rw] projectTeam
#   @return [Hash, nil]
#
# @!attribute [rw] pullRequest
#   @return [Hash, nil]
#
# @!attribute [rw] release
#   @return [Hash, nil]
#
# @!attribute [rw] releaseNote
#   @return [Hash, nil]
#
# @!attribute [rw] releasePipeline
#   @return [Hash, nil]
#
# @!attribute [rw] sortOrder
#   @return [Float, nil]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
#
# @!attribute [rw] workflowDefinition
#   @return [Hash, nil]
FavoriteUpdateData = Struct.new(
  :id,
  :aiConversation,
  :archivedAt,
  :color,
  :createdAt,
  :customView,
  :customer,
  :cycle,
  :dashboard,
  :detail,
  :document,
  :facet,
  :folderName,
  :icon,
  :initiative,
  :initiativeLabel,
  :initiativeTab,
  :issue,
  :label,
  :liveFolderDefinition,
  :liveFolderPreset,
  :owner,
  :parent,
  :pipelineTab,
  :predefinedViewTeam,
  :predefinedViewType,
  :project,
  :projectLabel,
  :projectTab,
  :projectTeam,
  :pullRequest,
  :release,
  :releaseNote,
  :releasePipeline,
  :sortOrder,
  :team,
  :title,
  :type,
  :updatedAt,
  :url,
  :user,
  :workflowDefinition,
  keyword_init: true
)

# Request payload for Favorite#remove.
#
# @!attribute [rw] id
#   @return [String]
FavoriteRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# GitAutomationState entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] event
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] state
#   @return [Hash, nil]
#
# @!attribute [rw] targetBranch
#   @return [Hash, nil]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
GitAutomationState = Struct.new(
  :archivedAt,
  :createdAt,
  :event,
  :id,
  :state,
  :targetBranch,
  :team,
  :updatedAt,
  keyword_init: true
)

# Request payload for GitAutomationState#create.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] event
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] state
#   @return [Hash, nil]
#
# @!attribute [rw] targetBranch
#   @return [Hash, nil]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
GitAutomationStateCreateData = Struct.new(
  :archivedAt,
  :createdAt,
  :event,
  :id,
  :state,
  :targetBranch,
  :team,
  :updatedAt,
  keyword_init: true
)

# Request payload for GitAutomationState#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] event
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [Hash, nil]
#
# @!attribute [rw] targetBranch
#   @return [Hash, nil]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
GitAutomationStateUpdateData = Struct.new(
  :id,
  :archivedAt,
  :createdAt,
  :event,
  :state,
  :targetBranch,
  :team,
  :updatedAt,
  keyword_init: true
)

# Request payload for GitAutomationState#remove.
#
# @!attribute [rw] id
#   @return [String]
GitAutomationStateRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# GitAutomationTargetBranch entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] branchPattern
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] isRegex
#   @return [Boolean]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
GitAutomationTargetBranch = Struct.new(
  :archivedAt,
  :branchPattern,
  :createdAt,
  :id,
  :isRegex,
  :team,
  :updatedAt,
  keyword_init: true
)

# Request payload for GitAutomationTargetBranch#create.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] branchPattern
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] isRegex
#   @return [Boolean]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
GitAutomationTargetBranchCreateData = Struct.new(
  :archivedAt,
  :branchPattern,
  :createdAt,
  :id,
  :isRegex,
  :team,
  :updatedAt,
  keyword_init: true
)

# Request payload for GitAutomationTargetBranch#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] branchPattern
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] isRegex
#   @return [Boolean, nil]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
GitAutomationTargetBranchUpdateData = Struct.new(
  :id,
  :archivedAt,
  :branchPattern,
  :createdAt,
  :isRegex,
  :team,
  :updatedAt,
  keyword_init: true
)

# Request payload for GitAutomationTargetBranch#remove.
#
# @!attribute [rw] id
#   @return [String]
GitAutomationTargetBranchRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# GitHubIntegrationConnectDetail entity data model.
#
# @!attribute [rw] lostRepositoryNames
#   @return [String, nil]
GitHubIntegrationConnectDetail = Struct.new(
  :lostRepositoryNames,
  keyword_init: true
)

# Request payload for GitHubIntegrationConnectDetail#create.
#
# @!attribute [rw] code
#   @return [String, nil]
#
# @!attribute [rw] redirect_uri
#   @return [String, nil]
#
# @!attribute [rw] github_url
#   @return [String, nil]
#
# @!attribute [rw] organization_name
#   @return [String, nil]
#
# @!attribute [rw] access_token
#   @return [String, nil]
#
# @!attribute [rw] expires_at
#   @return [String, nil]
#
# @!attribute [rw] gitlab_url
#   @return [String, nil]
#
# @!attribute [rw] readonly
#   @return [Boolean, nil]
#
# @!attribute [rw] validation_project_path
#   @return [String, nil]
#
# @!attribute [rw] lostRepositoryNames
#   @return [String, nil]
GitHubIntegrationConnectDetailCreateData = Struct.new(
  :code,
  :redirect_uri,
  :github_url,
  :organization_name,
  :access_token,
  :expires_at,
  :gitlab_url,
  :readonly,
  :validation_project_path,
  :lostRepositoryNames,
  keyword_init: true
)

# Request payload for GitHubIntegrationConnectDetail#update.
#
# @!attribute [rw] code
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String, nil]
#
# @!attribute [rw] redirect_uri
#   @return [String, nil]
#
# @!attribute [rw] service
#   @return [String, nil]
#
# @!attribute [rw] custom_view_id
#   @return [String, nil]
#
# @!attribute [rw] initiative_id
#   @return [String, nil]
#
# @!attribute [rw] should_use_v2_auth
#   @return [Boolean, nil]
#
# @!attribute [rw] team_id
#   @return [String, nil]
#
# @!attribute [rw] integration_id
#   @return [String, nil]
#
# @!attribute [rw] lostRepositoryNames
#   @return [String, nil]
GitHubIntegrationConnectDetailUpdateData = Struct.new(
  :code,
  :project_id,
  :redirect_uri,
  :service,
  :custom_view_id,
  :initiative_id,
  :should_use_v2_auth,
  :team_id,
  :integration_id,
  :lostRepositoryNames,
  keyword_init: true
)

# Initiative entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] canceledAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] completedAt
#   @return [Object, nil]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] documentContent
#   @return [Hash, nil]
#
# @!attribute [rw] frequencyResolution
#   @return [String]
#
# @!attribute [rw] health
#   @return [String, nil]
#
# @!attribute [rw] healthUpdatedAt
#   @return [Object, nil]
#
# @!attribute [rw] icon
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [String, nil]
#
# @!attribute [rw] integrationsSettings
#   @return [Hash, nil]
#
# @!attribute [rw] labelIds
#   @return [String]
#
# @!attribute [rw] lastUpdate
#   @return [Hash, nil]
#
# @!attribute [rw] leadTeam
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] owner
#   @return [Hash, nil]
#
# @!attribute [rw] parentInitiative
#   @return [Hash, nil]
#
# @!attribute [rw] previousIdentifiers
#   @return [String]
#
# @!attribute [rw] priority
#   @return [Integer]
#
# @!attribute [rw] prioritySortOrder
#   @return [Float]
#
# @!attribute [rw] slugId
#   @return [String]
#
# @!attribute [rw] sortOrder
#   @return [Float]
#
# @!attribute [rw] startedAt
#   @return [Object, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] targetDate
#   @return [Object, nil]
#
# @!attribute [rw] targetDateResolution
#   @return [String, nil]
#
# @!attribute [rw] trashed
#   @return [Boolean, nil]
#
# @!attribute [rw] updateReminderFrequency
#   @return [Float, nil]
#
# @!attribute [rw] updateReminderFrequencyInWeeks
#   @return [Float, nil]
#
# @!attribute [rw] updateRemindersDay
#   @return [String, nil]
#
# @!attribute [rw] updateRemindersHour
#   @return [Float, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] visibility
#   @return [String]
Initiative = Struct.new(
  :archivedAt,
  :canceledAt,
  :color,
  :completedAt,
  :content,
  :createdAt,
  :creator,
  :description,
  :documentContent,
  :frequencyResolution,
  :health,
  :healthUpdatedAt,
  :icon,
  :id,
  :identifier,
  :integrationsSettings,
  :labelIds,
  :lastUpdate,
  :leadTeam,
  :name,
  :organization,
  :owner,
  :parentInitiative,
  :previousIdentifiers,
  :priority,
  :prioritySortOrder,
  :slugId,
  :sortOrder,
  :startedAt,
  :status,
  :targetDate,
  :targetDateResolution,
  :trashed,
  :updateReminderFrequency,
  :updateReminderFrequencyInWeeks,
  :updateRemindersDay,
  :updateRemindersHour,
  :updatedAt,
  :url,
  :visibility,
  keyword_init: true
)

# Request payload for Initiative#load.
#
# @!attribute [rw] id
#   @return [String]
InitiativeLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Initiative#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
InitiativeListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for Initiative#create.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] canceledAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] completedAt
#   @return [Object, nil]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] documentContent
#   @return [Hash, nil]
#
# @!attribute [rw] frequencyResolution
#   @return [String]
#
# @!attribute [rw] health
#   @return [String, nil]
#
# @!attribute [rw] healthUpdatedAt
#   @return [Object, nil]
#
# @!attribute [rw] icon
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [String, nil]
#
# @!attribute [rw] integrationsSettings
#   @return [Hash, nil]
#
# @!attribute [rw] labelIds
#   @return [String]
#
# @!attribute [rw] lastUpdate
#   @return [Hash, nil]
#
# @!attribute [rw] leadTeam
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] owner
#   @return [Hash, nil]
#
# @!attribute [rw] parentInitiative
#   @return [Hash, nil]
#
# @!attribute [rw] previousIdentifiers
#   @return [String]
#
# @!attribute [rw] priority
#   @return [Integer]
#
# @!attribute [rw] prioritySortOrder
#   @return [Float]
#
# @!attribute [rw] slugId
#   @return [String]
#
# @!attribute [rw] sortOrder
#   @return [Float]
#
# @!attribute [rw] startedAt
#   @return [Object, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] targetDate
#   @return [Object, nil]
#
# @!attribute [rw] targetDateResolution
#   @return [String, nil]
#
# @!attribute [rw] trashed
#   @return [Boolean, nil]
#
# @!attribute [rw] updateReminderFrequency
#   @return [Float, nil]
#
# @!attribute [rw] updateReminderFrequencyInWeeks
#   @return [Float, nil]
#
# @!attribute [rw] updateRemindersDay
#   @return [String, nil]
#
# @!attribute [rw] updateRemindersHour
#   @return [Float, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] visibility
#   @return [String]
InitiativeCreateData = Struct.new(
  :archivedAt,
  :canceledAt,
  :color,
  :completedAt,
  :content,
  :createdAt,
  :creator,
  :description,
  :documentContent,
  :frequencyResolution,
  :health,
  :healthUpdatedAt,
  :icon,
  :id,
  :identifier,
  :integrationsSettings,
  :labelIds,
  :lastUpdate,
  :leadTeam,
  :name,
  :organization,
  :owner,
  :parentInitiative,
  :previousIdentifiers,
  :priority,
  :prioritySortOrder,
  :slugId,
  :sortOrder,
  :startedAt,
  :status,
  :targetDate,
  :targetDateResolution,
  :trashed,
  :updateReminderFrequency,
  :updateReminderFrequencyInWeeks,
  :updateRemindersDay,
  :updateRemindersHour,
  :updatedAt,
  :url,
  :visibility,
  keyword_init: true
)

# Request payload for Initiative#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] canceledAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] completedAt
#   @return [Object, nil]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] documentContent
#   @return [Hash, nil]
#
# @!attribute [rw] frequencyResolution
#   @return [String, nil]
#
# @!attribute [rw] health
#   @return [String, nil]
#
# @!attribute [rw] healthUpdatedAt
#   @return [Object, nil]
#
# @!attribute [rw] icon
#   @return [String, nil]
#
# @!attribute [rw] identifier
#   @return [String, nil]
#
# @!attribute [rw] integrationsSettings
#   @return [Hash, nil]
#
# @!attribute [rw] labelIds
#   @return [String, nil]
#
# @!attribute [rw] lastUpdate
#   @return [Hash, nil]
#
# @!attribute [rw] leadTeam
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] owner
#   @return [Hash, nil]
#
# @!attribute [rw] parentInitiative
#   @return [Hash, nil]
#
# @!attribute [rw] previousIdentifiers
#   @return [String, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] prioritySortOrder
#   @return [Float, nil]
#
# @!attribute [rw] slugId
#   @return [String, nil]
#
# @!attribute [rw] sortOrder
#   @return [Float, nil]
#
# @!attribute [rw] startedAt
#   @return [Object, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] targetDate
#   @return [Object, nil]
#
# @!attribute [rw] targetDateResolution
#   @return [String, nil]
#
# @!attribute [rw] trashed
#   @return [Boolean, nil]
#
# @!attribute [rw] updateReminderFrequency
#   @return [Float, nil]
#
# @!attribute [rw] updateReminderFrequencyInWeeks
#   @return [Float, nil]
#
# @!attribute [rw] updateRemindersDay
#   @return [String, nil]
#
# @!attribute [rw] updateRemindersHour
#   @return [Float, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] visibility
#   @return [String, nil]
InitiativeUpdateData = Struct.new(
  :id,
  :archivedAt,
  :canceledAt,
  :color,
  :completedAt,
  :content,
  :createdAt,
  :creator,
  :description,
  :documentContent,
  :frequencyResolution,
  :health,
  :healthUpdatedAt,
  :icon,
  :identifier,
  :integrationsSettings,
  :labelIds,
  :lastUpdate,
  :leadTeam,
  :name,
  :organization,
  :owner,
  :parentInitiative,
  :previousIdentifiers,
  :priority,
  :prioritySortOrder,
  :slugId,
  :sortOrder,
  :startedAt,
  :status,
  :targetDate,
  :targetDateResolution,
  :trashed,
  :updateReminderFrequency,
  :updateReminderFrequencyInWeeks,
  :updateRemindersDay,
  :updateRemindersHour,
  :updatedAt,
  :url,
  :visibility,
  keyword_init: true
)

# Request payload for Initiative#remove.
#
# @!attribute [rw] id
#   @return [String]
InitiativeRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# InitiativeLabel entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] isGroup
#   @return [Boolean]
#
# @!attribute [rw] lastAppliedAt
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] parent
#   @return [Hash, nil]
#
# @!attribute [rw] retiredAt
#   @return [Object, nil]
#
# @!attribute [rw] retiredBy
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
InitiativeLabel = Struct.new(
  :archivedAt,
  :color,
  :createdAt,
  :creator,
  :description,
  :id,
  :isGroup,
  :lastAppliedAt,
  :name,
  :organization,
  :parent,
  :retiredAt,
  :retiredBy,
  :updatedAt,
  keyword_init: true
)

# Request payload for InitiativeLabel#load.
#
# @!attribute [rw] id
#   @return [String]
InitiativeLabelLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for InitiativeLabel#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
InitiativeLabelListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for InitiativeLabel#create.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] isGroup
#   @return [Boolean]
#
# @!attribute [rw] lastAppliedAt
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] parent
#   @return [Hash, nil]
#
# @!attribute [rw] retiredAt
#   @return [Object, nil]
#
# @!attribute [rw] retiredBy
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
InitiativeLabelCreateData = Struct.new(
  :archivedAt,
  :color,
  :createdAt,
  :creator,
  :description,
  :id,
  :isGroup,
  :lastAppliedAt,
  :name,
  :organization,
  :parent,
  :retiredAt,
  :retiredBy,
  :updatedAt,
  keyword_init: true
)

# Request payload for InitiativeLabel#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] isGroup
#   @return [Boolean, nil]
#
# @!attribute [rw] lastAppliedAt
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] parent
#   @return [Hash, nil]
#
# @!attribute [rw] retiredAt
#   @return [Object, nil]
#
# @!attribute [rw] retiredBy
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
InitiativeLabelUpdateData = Struct.new(
  :id,
  :archivedAt,
  :color,
  :createdAt,
  :creator,
  :description,
  :isGroup,
  :lastAppliedAt,
  :name,
  :organization,
  :parent,
  :retiredAt,
  :retiredBy,
  :updatedAt,
  keyword_init: true
)

# Request payload for InitiativeLabel#remove.
#
# @!attribute [rw] id
#   @return [String]
InitiativeLabelRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# InitiativeLeadTeamChangeImpact entity data model.
#
# @!attribute [rw] affectedDescendantCount
#   @return [Integer]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] visibilityMayChange
#   @return [Boolean]
InitiativeLeadTeamChangeImpact = Struct.new(
  :affectedDescendantCount,
  :id,
  :visibilityMayChange,
  keyword_init: true
)

# Request payload for InitiativeLeadTeamChangeImpact#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] lead_team_id
#   @return [String, nil]
InitiativeLeadTeamChangeImpactLoadMatch = Struct.new(
  :id,
  :lead_team_id,
  keyword_init: true
)

# InitiativeRelation entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] initiative
#   @return [Hash, nil]
#
# @!attribute [rw] relatedInitiative
#   @return [Hash, nil]
#
# @!attribute [rw] sortOrder
#   @return [Float]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] user
#   @return [Hash, nil]
InitiativeRelation = Struct.new(
  :archivedAt,
  :createdAt,
  :id,
  :initiative,
  :relatedInitiative,
  :sortOrder,
  :updatedAt,
  :user,
  keyword_init: true
)

# Request payload for InitiativeRelation#load.
#
# @!attribute [rw] id
#   @return [String]
InitiativeRelationLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for InitiativeRelation#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
InitiativeRelationListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for InitiativeRelation#create.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] initiative
#   @return [Hash, nil]
#
# @!attribute [rw] relatedInitiative
#   @return [Hash, nil]
#
# @!attribute [rw] sortOrder
#   @return [Float]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] user
#   @return [Hash, nil]
InitiativeRelationCreateData = Struct.new(
  :archivedAt,
  :createdAt,
  :id,
  :initiative,
  :relatedInitiative,
  :sortOrder,
  :updatedAt,
  :user,
  keyword_init: true
)

# Request payload for InitiativeRelation#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] initiative
#   @return [Hash, nil]
#
# @!attribute [rw] relatedInitiative
#   @return [Hash, nil]
#
# @!attribute [rw] sortOrder
#   @return [Float, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
InitiativeRelationUpdateData = Struct.new(
  :id,
  :archivedAt,
  :createdAt,
  :initiative,
  :relatedInitiative,
  :sortOrder,
  :updatedAt,
  :user,
  keyword_init: true
)

# Request payload for InitiativeRelation#remove.
#
# @!attribute [rw] id
#   @return [String]
InitiativeRelationRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# InitiativeToProject entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] initiative
#   @return [Hash, nil]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] sortOrder
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
InitiativeToProject = Struct.new(
  :archivedAt,
  :createdAt,
  :id,
  :initiative,
  :project,
  :sortOrder,
  :updatedAt,
  keyword_init: true
)

# Request payload for InitiativeToProject#load.
#
# @!attribute [rw] id
#   @return [String]
InitiativeToProjectLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for InitiativeToProject#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
InitiativeToProjectListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for InitiativeToProject#create.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] initiative
#   @return [Hash, nil]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] sortOrder
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
InitiativeToProjectCreateData = Struct.new(
  :archivedAt,
  :createdAt,
  :id,
  :initiative,
  :project,
  :sortOrder,
  :updatedAt,
  keyword_init: true
)

# Request payload for InitiativeToProject#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] initiative
#   @return [Hash, nil]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] sortOrder
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
InitiativeToProjectUpdateData = Struct.new(
  :id,
  :archivedAt,
  :createdAt,
  :initiative,
  :project,
  :sortOrder,
  :updatedAt,
  keyword_init: true
)

# Request payload for InitiativeToProject#remove.
#
# @!attribute [rw] id
#   @return [String]
InitiativeToProjectRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# InitiativeUpdate entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] body
#   @return [String]
#
# @!attribute [rw] bodyData
#   @return [String]
#
# @!attribute [rw] commentCount
#   @return [Integer]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] diff
#   @return [Object, nil]
#
# @!attribute [rw] diffMarkdown
#   @return [String, nil]
#
# @!attribute [rw] editedAt
#   @return [Object, nil]
#
# @!attribute [rw] health
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] infoSnapshot
#   @return [Object, nil]
#
# @!attribute [rw] initiative
#   @return [Hash, nil]
#
# @!attribute [rw] isDiffHidden
#   @return [Boolean]
#
# @!attribute [rw] isStale
#   @return [Boolean]
#
# @!attribute [rw] reactionData
#   @return [Object]
#
# @!attribute [rw] slugId
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] user
#   @return [Hash, nil]
InitiativeUpdate = Struct.new(
  :archivedAt,
  :body,
  :bodyData,
  :commentCount,
  :createdAt,
  :diff,
  :diffMarkdown,
  :editedAt,
  :health,
  :id,
  :infoSnapshot,
  :initiative,
  :isDiffHidden,
  :isStale,
  :reactionData,
  :slugId,
  :updatedAt,
  :url,
  :user,
  keyword_init: true
)

# Request payload for InitiativeUpdate#load.
#
# @!attribute [rw] id
#   @return [String]
InitiativeUpdateLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for InitiativeUpdate#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
InitiativeUpdateListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for InitiativeUpdate#create.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] body
#   @return [String]
#
# @!attribute [rw] bodyData
#   @return [String]
#
# @!attribute [rw] commentCount
#   @return [Integer]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] diff
#   @return [Object, nil]
#
# @!attribute [rw] diffMarkdown
#   @return [String, nil]
#
# @!attribute [rw] editedAt
#   @return [Object, nil]
#
# @!attribute [rw] health
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] infoSnapshot
#   @return [Object, nil]
#
# @!attribute [rw] initiative
#   @return [Hash, nil]
#
# @!attribute [rw] isDiffHidden
#   @return [Boolean]
#
# @!attribute [rw] isStale
#   @return [Boolean]
#
# @!attribute [rw] reactionData
#   @return [Object]
#
# @!attribute [rw] slugId
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] user
#   @return [Hash, nil]
InitiativeUpdateCreateData = Struct.new(
  :archivedAt,
  :body,
  :bodyData,
  :commentCount,
  :createdAt,
  :diff,
  :diffMarkdown,
  :editedAt,
  :health,
  :id,
  :infoSnapshot,
  :initiative,
  :isDiffHidden,
  :isStale,
  :reactionData,
  :slugId,
  :updatedAt,
  :url,
  :user,
  keyword_init: true
)

# Request payload for InitiativeUpdate#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] body
#   @return [String, nil]
#
# @!attribute [rw] bodyData
#   @return [String, nil]
#
# @!attribute [rw] commentCount
#   @return [Integer, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] diff
#   @return [Object, nil]
#
# @!attribute [rw] diffMarkdown
#   @return [String, nil]
#
# @!attribute [rw] editedAt
#   @return [Object, nil]
#
# @!attribute [rw] health
#   @return [String, nil]
#
# @!attribute [rw] infoSnapshot
#   @return [Object, nil]
#
# @!attribute [rw] initiative
#   @return [Hash, nil]
#
# @!attribute [rw] isDiffHidden
#   @return [Boolean, nil]
#
# @!attribute [rw] isStale
#   @return [Boolean, nil]
#
# @!attribute [rw] reactionData
#   @return [Object, nil]
#
# @!attribute [rw] slugId
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
InitiativeUpdateUpdateData = Struct.new(
  :id,
  :archivedAt,
  :body,
  :bodyData,
  :commentCount,
  :createdAt,
  :diff,
  :diffMarkdown,
  :editedAt,
  :health,
  :infoSnapshot,
  :initiative,
  :isDiffHidden,
  :isStale,
  :reactionData,
  :slugId,
  :updatedAt,
  :url,
  :user,
  keyword_init: true
)

# Integration entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] service
#   @return [String]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
Integration = Struct.new(
  :archivedAt,
  :createdAt,
  :creator,
  :id,
  :organization,
  :service,
  :team,
  :updatedAt,
  keyword_init: true
)

# Request payload for Integration#load.
#
# @!attribute [rw] id
#   @return [String]
IntegrationLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Integration#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
IntegrationListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for Integration#create.
#
# @!attribute [rw] code
#   @return [String, nil]
#
# @!attribute [rw] code_verifier
#   @return [String, nil]
#
# @!attribute [rw] redirect_uri
#   @return [String, nil]
#
# @!attribute [rw] subdomain
#   @return [String, nil]
#
# @!attribute [rw] environment
#   @return [String, nil]
#
# @!attribute [rw] project_key
#   @return [String, nil]
#
# @!attribute [rw] domain_url
#   @return [String, nil]
#
# @!attribute [rw] requested_scope
#   @return [String, nil]
#
# @!attribute [rw] should_use_v2_auth
#   @return [Boolean, nil]
#
# @!attribute [rw] code_access
#   @return [Boolean, nil]
#
# @!attribute [rw] enterprise_url
#   @return [String, nil]
#
# @!attribute [rw] mcp_server_definition_id
#   @return [String, nil]
#
# @!attribute [rw] server_url
#   @return [String, nil]
#
# @!attribute [rw] team_id
#   @return [String, nil]
#
# @!attribute [rw] workflow_definition_draft_id
#   @return [String, nil]
#
# @!attribute [rw] workflow_definition_id
#   @return [String, nil]
#
# @!attribute [rw] api_key
#   @return [String, nil]
#
# @!attribute [rw] access_token
#   @return [String, nil]
#
# @!attribute [rw] bot_user_role
#   @return [String, nil]
#
# @!attribute [rw] custom_api_url
#   @return [String, nil]
#
# @!attribute [rw] scope
#   @return [String, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] service
#   @return [String]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
IntegrationCreateData = Struct.new(
  :code,
  :code_verifier,
  :redirect_uri,
  :subdomain,
  :environment,
  :project_key,
  :domain_url,
  :requested_scope,
  :should_use_v2_auth,
  :code_access,
  :enterprise_url,
  :mcp_server_definition_id,
  :server_url,
  :team_id,
  :workflow_definition_draft_id,
  :workflow_definition_id,
  :api_key,
  :access_token,
  :bot_user_role,
  :custom_api_url,
  :scope,
  :archivedAt,
  :createdAt,
  :creator,
  :id,
  :organization,
  :service,
  :team,
  :updatedAt,
  keyword_init: true
)

# Request payload for Integration#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] service
#   @return [String, nil]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
IntegrationUpdateData = Struct.new(
  :id,
  :archivedAt,
  :createdAt,
  :creator,
  :organization,
  :service,
  :team,
  :updatedAt,
  keyword_init: true
)

# Request payload for Integration#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] skip_installation_deletion
#   @return [Boolean, nil]
IntegrationRemoveMatch = Struct.new(
  :id,
  :skip_installation_deletion,
  keyword_init: true
)

# IntegrationTemplate entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] foreignEntityId
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] integration
#   @return [Hash, nil]
#
# @!attribute [rw] template
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
IntegrationTemplate = Struct.new(
  :archivedAt,
  :createdAt,
  :foreignEntityId,
  :id,
  :integration,
  :template,
  :updatedAt,
  keyword_init: true
)

# Request payload for IntegrationTemplate#load.
#
# @!attribute [rw] id
#   @return [String]
IntegrationTemplateLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for IntegrationTemplate#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
IntegrationTemplateListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for IntegrationTemplate#create.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] foreignEntityId
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] integration
#   @return [Hash, nil]
#
# @!attribute [rw] template
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
IntegrationTemplateCreateData = Struct.new(
  :archivedAt,
  :createdAt,
  :foreignEntityId,
  :id,
  :integration,
  :template,
  :updatedAt,
  keyword_init: true
)

# Request payload for IntegrationTemplate#remove.
#
# @!attribute [rw] id
#   @return [String]
IntegrationTemplateRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# IntegrationsSetting entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] contextViewType
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] initiative
#   @return [Hash, nil]
#
# @!attribute [rw] microsoftTeamsProjectUpdateCreated
#   @return [Boolean, nil]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] slackInitiativeUpdateCreated
#   @return [Boolean, nil]
#
# @!attribute [rw] slackIssueAddedToTriage
#   @return [Boolean, nil]
#
# @!attribute [rw] slackIssueAddedToView
#   @return [Boolean, nil]
#
# @!attribute [rw] slackIssueNewComment
#   @return [Boolean, nil]
#
# @!attribute [rw] slackIssueSlaBreached
#   @return [Boolean, nil]
#
# @!attribute [rw] slackIssueSlaHighRisk
#   @return [Boolean, nil]
#
# @!attribute [rw] slackIssueStatusChangedAll
#   @return [Boolean, nil]
#
# @!attribute [rw] slackIssueStatusChangedDone
#   @return [Boolean, nil]
#
# @!attribute [rw] slackProjectUpdateCreated
#   @return [Boolean, nil]
#
# @!attribute [rw] slackProjectUpdateCreatedToTeam
#   @return [Boolean, nil]
#
# @!attribute [rw] slackProjectUpdateCreatedToWorkspace
#   @return [Boolean, nil]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
IntegrationsSetting = Struct.new(
  :archivedAt,
  :contextViewType,
  :createdAt,
  :id,
  :initiative,
  :microsoftTeamsProjectUpdateCreated,
  :project,
  :slackInitiativeUpdateCreated,
  :slackIssueAddedToTriage,
  :slackIssueAddedToView,
  :slackIssueNewComment,
  :slackIssueSlaBreached,
  :slackIssueSlaHighRisk,
  :slackIssueStatusChangedAll,
  :slackIssueStatusChangedDone,
  :slackProjectUpdateCreated,
  :slackProjectUpdateCreatedToTeam,
  :slackProjectUpdateCreatedToWorkspace,
  :team,
  :updatedAt,
  keyword_init: true
)

# Request payload for IntegrationsSetting#load.
#
# @!attribute [rw] id
#   @return [String]
IntegrationsSettingLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for IntegrationsSetting#create.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] contextViewType
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] initiative
#   @return [Hash, nil]
#
# @!attribute [rw] microsoftTeamsProjectUpdateCreated
#   @return [Boolean, nil]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] slackInitiativeUpdateCreated
#   @return [Boolean, nil]
#
# @!attribute [rw] slackIssueAddedToTriage
#   @return [Boolean, nil]
#
# @!attribute [rw] slackIssueAddedToView
#   @return [Boolean, nil]
#
# @!attribute [rw] slackIssueNewComment
#   @return [Boolean, nil]
#
# @!attribute [rw] slackIssueSlaBreached
#   @return [Boolean, nil]
#
# @!attribute [rw] slackIssueSlaHighRisk
#   @return [Boolean, nil]
#
# @!attribute [rw] slackIssueStatusChangedAll
#   @return [Boolean, nil]
#
# @!attribute [rw] slackIssueStatusChangedDone
#   @return [Boolean, nil]
#
# @!attribute [rw] slackProjectUpdateCreated
#   @return [Boolean, nil]
#
# @!attribute [rw] slackProjectUpdateCreatedToTeam
#   @return [Boolean, nil]
#
# @!attribute [rw] slackProjectUpdateCreatedToWorkspace
#   @return [Boolean, nil]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
IntegrationsSettingCreateData = Struct.new(
  :archivedAt,
  :contextViewType,
  :createdAt,
  :id,
  :initiative,
  :microsoftTeamsProjectUpdateCreated,
  :project,
  :slackInitiativeUpdateCreated,
  :slackIssueAddedToTriage,
  :slackIssueAddedToView,
  :slackIssueNewComment,
  :slackIssueSlaBreached,
  :slackIssueSlaHighRisk,
  :slackIssueStatusChangedAll,
  :slackIssueStatusChangedDone,
  :slackProjectUpdateCreated,
  :slackProjectUpdateCreatedToTeam,
  :slackProjectUpdateCreatedToWorkspace,
  :team,
  :updatedAt,
  keyword_init: true
)

# Request payload for IntegrationsSetting#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] contextViewType
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] initiative
#   @return [Hash, nil]
#
# @!attribute [rw] microsoftTeamsProjectUpdateCreated
#   @return [Boolean, nil]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] slackInitiativeUpdateCreated
#   @return [Boolean, nil]
#
# @!attribute [rw] slackIssueAddedToTriage
#   @return [Boolean, nil]
#
# @!attribute [rw] slackIssueAddedToView
#   @return [Boolean, nil]
#
# @!attribute [rw] slackIssueNewComment
#   @return [Boolean, nil]
#
# @!attribute [rw] slackIssueSlaBreached
#   @return [Boolean, nil]
#
# @!attribute [rw] slackIssueSlaHighRisk
#   @return [Boolean, nil]
#
# @!attribute [rw] slackIssueStatusChangedAll
#   @return [Boolean, nil]
#
# @!attribute [rw] slackIssueStatusChangedDone
#   @return [Boolean, nil]
#
# @!attribute [rw] slackProjectUpdateCreated
#   @return [Boolean, nil]
#
# @!attribute [rw] slackProjectUpdateCreatedToTeam
#   @return [Boolean, nil]
#
# @!attribute [rw] slackProjectUpdateCreatedToWorkspace
#   @return [Boolean, nil]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
IntegrationsSettingUpdateData = Struct.new(
  :id,
  :archivedAt,
  :contextViewType,
  :createdAt,
  :initiative,
  :microsoftTeamsProjectUpdateCreated,
  :project,
  :slackInitiativeUpdateCreated,
  :slackIssueAddedToTriage,
  :slackIssueAddedToView,
  :slackIssueNewComment,
  :slackIssueSlaBreached,
  :slackIssueSlaHighRisk,
  :slackIssueStatusChangedAll,
  :slackIssueStatusChangedDone,
  :slackProjectUpdateCreated,
  :slackProjectUpdateCreatedToTeam,
  :slackProjectUpdateCreatedToWorkspace,
  :team,
  :updatedAt,
  keyword_init: true
)

# Issue entity data model.
#
# @!attribute [rw] activitySummary
#   @return [Object, nil]
#
# @!attribute [rw] addedToCycleAt
#   @return [Object, nil]
#
# @!attribute [rw] addedToProjectAt
#   @return [Object, nil]
#
# @!attribute [rw] addedToTeamAt
#   @return [Object, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] asksExternalUserRequester
#   @return [Hash, nil]
#
# @!attribute [rw] asksRequester
#   @return [Hash, nil]
#
# @!attribute [rw] assignee
#   @return [Hash, nil]
#
# @!attribute [rw] autoArchivedAt
#   @return [Object, nil]
#
# @!attribute [rw] autoClosedAt
#   @return [Object, nil]
#
# @!attribute [rw] botActor
#   @return [Hash, nil]
#
# @!attribute [rw] branchName
#   @return [String]
#
# @!attribute [rw] canceledAt
#   @return [Object, nil]
#
# @!attribute [rw] completedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] customerTicketCount
#   @return [Integer]
#
# @!attribute [rw] cycle
#   @return [Hash, nil]
#
# @!attribute [rw] delegate
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] descriptionState
#   @return [String, nil]
#
# @!attribute [rw] documentContent
#   @return [Hash, nil]
#
# @!attribute [rw] dueDate
#   @return [Object, nil]
#
# @!attribute [rw] estimate
#   @return [Float, nil]
#
# @!attribute [rw] externalUserCreator
#   @return [Hash, nil]
#
# @!attribute [rw] favorite
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [String]
#
# @!attribute [rw] inheritsSharedAccess
#   @return [Boolean]
#
# @!attribute [rw] integrationSourceType
#   @return [String, nil]
#
# @!attribute [rw] labelIds
#   @return [String]
#
# @!attribute [rw] lastAppliedTemplate
#   @return [Hash, nil]
#
# @!attribute [rw] number
#   @return [Float]
#
# @!attribute [rw] parent
#   @return [Hash, nil]
#
# @!attribute [rw] previousIdentifiers
#   @return [String]
#
# @!attribute [rw] priority
#   @return [Float]
#
# @!attribute [rw] priorityLabel
#   @return [String]
#
# @!attribute [rw] prioritySortOrder
#   @return [Float]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] projectMilestone
#   @return [Hash, nil]
#
# @!attribute [rw] reactionData
#   @return [Object]
#
# @!attribute [rw] recurringIssueTemplate
#   @return [Hash, nil]
#
# @!attribute [rw] slaBreachesAt
#   @return [Object, nil]
#
# @!attribute [rw] slaHighRiskAt
#   @return [Object, nil]
#
# @!attribute [rw] slaMediumRiskAt
#   @return [Object, nil]
#
# @!attribute [rw] slaStartedAt
#   @return [Object, nil]
#
# @!attribute [rw] slaType
#   @return [String, nil]
#
# @!attribute [rw] snoozedBy
#   @return [Hash, nil]
#
# @!attribute [rw] snoozedUntilAt
#   @return [Object, nil]
#
# @!attribute [rw] sortOrder
#   @return [Float]
#
# @!attribute [rw] sourceComment
#   @return [Hash, nil]
#
# @!attribute [rw] startedAt
#   @return [Object, nil]
#
# @!attribute [rw] startedTriageAt
#   @return [Object, nil]
#
# @!attribute [rw] state
#   @return [Hash, nil]
#
# @!attribute [rw] subIssueSortOrder
#   @return [Float, nil]
#
# @!attribute [rw] suggestionsGeneratedAt
#   @return [Object, nil]
#
# @!attribute [rw] summary
#   @return [Hash, nil]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] trashed
#   @return [Boolean, nil]
#
# @!attribute [rw] triagedAt
#   @return [Object, nil]
#
# @!attribute [rw] trusted
#   @return [Boolean, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String]
Issue = Struct.new(
  :activitySummary,
  :addedToCycleAt,
  :addedToProjectAt,
  :addedToTeamAt,
  :archivedAt,
  :asksExternalUserRequester,
  :asksRequester,
  :assignee,
  :autoArchivedAt,
  :autoClosedAt,
  :botActor,
  :branchName,
  :canceledAt,
  :completedAt,
  :createdAt,
  :creator,
  :customerTicketCount,
  :cycle,
  :delegate,
  :description,
  :descriptionState,
  :documentContent,
  :dueDate,
  :estimate,
  :externalUserCreator,
  :favorite,
  :id,
  :identifier,
  :inheritsSharedAccess,
  :integrationSourceType,
  :labelIds,
  :lastAppliedTemplate,
  :number,
  :parent,
  :previousIdentifiers,
  :priority,
  :priorityLabel,
  :prioritySortOrder,
  :project,
  :projectMilestone,
  :reactionData,
  :recurringIssueTemplate,
  :slaBreachesAt,
  :slaHighRiskAt,
  :slaMediumRiskAt,
  :slaStartedAt,
  :slaType,
  :snoozedBy,
  :snoozedUntilAt,
  :sortOrder,
  :sourceComment,
  :startedAt,
  :startedTriageAt,
  :state,
  :subIssueSortOrder,
  :suggestionsGeneratedAt,
  :summary,
  :team,
  :title,
  :trashed,
  :triagedAt,
  :trusted,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for Issue#load.
#
# @!attribute [rw] branch_name
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
IssueLoadMatch = Struct.new(
  :branch_name,
  :id,
  keyword_init: true
)

# Request payload for Issue#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] file_key
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
#
# @!attribute [rw] query
#   @return [String, nil]
IssueListMatch = Struct.new(
  :after,
  :before,
  :file_key,
  :first,
  :include_archived,
  :last,
  :order_by,
  :query,
  keyword_init: true
)

# Request payload for Issue#create.
#
# @!attribute [rw] activitySummary
#   @return [Object, nil]
#
# @!attribute [rw] addedToCycleAt
#   @return [Object, nil]
#
# @!attribute [rw] addedToProjectAt
#   @return [Object, nil]
#
# @!attribute [rw] addedToTeamAt
#   @return [Object, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] asksExternalUserRequester
#   @return [Hash, nil]
#
# @!attribute [rw] asksRequester
#   @return [Hash, nil]
#
# @!attribute [rw] assignee
#   @return [Hash, nil]
#
# @!attribute [rw] autoArchivedAt
#   @return [Object, nil]
#
# @!attribute [rw] autoClosedAt
#   @return [Object, nil]
#
# @!attribute [rw] botActor
#   @return [Hash, nil]
#
# @!attribute [rw] branchName
#   @return [String]
#
# @!attribute [rw] canceledAt
#   @return [Object, nil]
#
# @!attribute [rw] completedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] customerTicketCount
#   @return [Integer]
#
# @!attribute [rw] cycle
#   @return [Hash, nil]
#
# @!attribute [rw] delegate
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] descriptionState
#   @return [String, nil]
#
# @!attribute [rw] documentContent
#   @return [Hash, nil]
#
# @!attribute [rw] dueDate
#   @return [Object, nil]
#
# @!attribute [rw] estimate
#   @return [Float, nil]
#
# @!attribute [rw] externalUserCreator
#   @return [Hash, nil]
#
# @!attribute [rw] favorite
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [String]
#
# @!attribute [rw] inheritsSharedAccess
#   @return [Boolean]
#
# @!attribute [rw] integrationSourceType
#   @return [String, nil]
#
# @!attribute [rw] labelIds
#   @return [String]
#
# @!attribute [rw] lastAppliedTemplate
#   @return [Hash, nil]
#
# @!attribute [rw] number
#   @return [Float]
#
# @!attribute [rw] parent
#   @return [Hash, nil]
#
# @!attribute [rw] previousIdentifiers
#   @return [String]
#
# @!attribute [rw] priority
#   @return [Float]
#
# @!attribute [rw] priorityLabel
#   @return [String]
#
# @!attribute [rw] prioritySortOrder
#   @return [Float]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] projectMilestone
#   @return [Hash, nil]
#
# @!attribute [rw] reactionData
#   @return [Object]
#
# @!attribute [rw] recurringIssueTemplate
#   @return [Hash, nil]
#
# @!attribute [rw] slaBreachesAt
#   @return [Object, nil]
#
# @!attribute [rw] slaHighRiskAt
#   @return [Object, nil]
#
# @!attribute [rw] slaMediumRiskAt
#   @return [Object, nil]
#
# @!attribute [rw] slaStartedAt
#   @return [Object, nil]
#
# @!attribute [rw] slaType
#   @return [String, nil]
#
# @!attribute [rw] snoozedBy
#   @return [Hash, nil]
#
# @!attribute [rw] snoozedUntilAt
#   @return [Object, nil]
#
# @!attribute [rw] sortOrder
#   @return [Float]
#
# @!attribute [rw] sourceComment
#   @return [Hash, nil]
#
# @!attribute [rw] startedAt
#   @return [Object, nil]
#
# @!attribute [rw] startedTriageAt
#   @return [Object, nil]
#
# @!attribute [rw] state
#   @return [Hash, nil]
#
# @!attribute [rw] subIssueSortOrder
#   @return [Float, nil]
#
# @!attribute [rw] suggestionsGeneratedAt
#   @return [Object, nil]
#
# @!attribute [rw] summary
#   @return [Hash, nil]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] trashed
#   @return [Boolean, nil]
#
# @!attribute [rw] triagedAt
#   @return [Object, nil]
#
# @!attribute [rw] trusted
#   @return [Boolean, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String]
IssueCreateData = Struct.new(
  :activitySummary,
  :addedToCycleAt,
  :addedToProjectAt,
  :addedToTeamAt,
  :archivedAt,
  :asksExternalUserRequester,
  :asksRequester,
  :assignee,
  :autoArchivedAt,
  :autoClosedAt,
  :botActor,
  :branchName,
  :canceledAt,
  :completedAt,
  :createdAt,
  :creator,
  :customerTicketCount,
  :cycle,
  :delegate,
  :description,
  :descriptionState,
  :documentContent,
  :dueDate,
  :estimate,
  :externalUserCreator,
  :favorite,
  :id,
  :identifier,
  :inheritsSharedAccess,
  :integrationSourceType,
  :labelIds,
  :lastAppliedTemplate,
  :number,
  :parent,
  :previousIdentifiers,
  :priority,
  :priorityLabel,
  :prioritySortOrder,
  :project,
  :projectMilestone,
  :reactionData,
  :recurringIssueTemplate,
  :slaBreachesAt,
  :slaHighRiskAt,
  :slaMediumRiskAt,
  :slaStartedAt,
  :slaType,
  :snoozedBy,
  :snoozedUntilAt,
  :sortOrder,
  :sourceComment,
  :startedAt,
  :startedTriageAt,
  :state,
  :subIssueSortOrder,
  :suggestionsGeneratedAt,
  :summary,
  :team,
  :title,
  :trashed,
  :triagedAt,
  :trusted,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for Issue#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] activitySummary
#   @return [Object, nil]
#
# @!attribute [rw] addedToCycleAt
#   @return [Object, nil]
#
# @!attribute [rw] addedToProjectAt
#   @return [Object, nil]
#
# @!attribute [rw] addedToTeamAt
#   @return [Object, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] asksExternalUserRequester
#   @return [Hash, nil]
#
# @!attribute [rw] asksRequester
#   @return [Hash, nil]
#
# @!attribute [rw] assignee
#   @return [Hash, nil]
#
# @!attribute [rw] autoArchivedAt
#   @return [Object, nil]
#
# @!attribute [rw] autoClosedAt
#   @return [Object, nil]
#
# @!attribute [rw] botActor
#   @return [Hash, nil]
#
# @!attribute [rw] branchName
#   @return [String, nil]
#
# @!attribute [rw] canceledAt
#   @return [Object, nil]
#
# @!attribute [rw] completedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] customerTicketCount
#   @return [Integer, nil]
#
# @!attribute [rw] cycle
#   @return [Hash, nil]
#
# @!attribute [rw] delegate
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] descriptionState
#   @return [String, nil]
#
# @!attribute [rw] documentContent
#   @return [Hash, nil]
#
# @!attribute [rw] dueDate
#   @return [Object, nil]
#
# @!attribute [rw] estimate
#   @return [Float, nil]
#
# @!attribute [rw] externalUserCreator
#   @return [Hash, nil]
#
# @!attribute [rw] favorite
#   @return [Hash, nil]
#
# @!attribute [rw] identifier
#   @return [String, nil]
#
# @!attribute [rw] inheritsSharedAccess
#   @return [Boolean, nil]
#
# @!attribute [rw] integrationSourceType
#   @return [String, nil]
#
# @!attribute [rw] labelIds
#   @return [String, nil]
#
# @!attribute [rw] lastAppliedTemplate
#   @return [Hash, nil]
#
# @!attribute [rw] number
#   @return [Float, nil]
#
# @!attribute [rw] parent
#   @return [Hash, nil]
#
# @!attribute [rw] previousIdentifiers
#   @return [String, nil]
#
# @!attribute [rw] priority
#   @return [Float, nil]
#
# @!attribute [rw] priorityLabel
#   @return [String, nil]
#
# @!attribute [rw] prioritySortOrder
#   @return [Float, nil]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] projectMilestone
#   @return [Hash, nil]
#
# @!attribute [rw] reactionData
#   @return [Object, nil]
#
# @!attribute [rw] recurringIssueTemplate
#   @return [Hash, nil]
#
# @!attribute [rw] slaBreachesAt
#   @return [Object, nil]
#
# @!attribute [rw] slaHighRiskAt
#   @return [Object, nil]
#
# @!attribute [rw] slaMediumRiskAt
#   @return [Object, nil]
#
# @!attribute [rw] slaStartedAt
#   @return [Object, nil]
#
# @!attribute [rw] slaType
#   @return [String, nil]
#
# @!attribute [rw] snoozedBy
#   @return [Hash, nil]
#
# @!attribute [rw] snoozedUntilAt
#   @return [Object, nil]
#
# @!attribute [rw] sortOrder
#   @return [Float, nil]
#
# @!attribute [rw] sourceComment
#   @return [Hash, nil]
#
# @!attribute [rw] startedAt
#   @return [Object, nil]
#
# @!attribute [rw] startedTriageAt
#   @return [Object, nil]
#
# @!attribute [rw] state
#   @return [Hash, nil]
#
# @!attribute [rw] subIssueSortOrder
#   @return [Float, nil]
#
# @!attribute [rw] suggestionsGeneratedAt
#   @return [Object, nil]
#
# @!attribute [rw] summary
#   @return [Hash, nil]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] trashed
#   @return [Boolean, nil]
#
# @!attribute [rw] triagedAt
#   @return [Object, nil]
#
# @!attribute [rw] trusted
#   @return [Boolean, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
IssueUpdateData = Struct.new(
  :id,
  :activitySummary,
  :addedToCycleAt,
  :addedToProjectAt,
  :addedToTeamAt,
  :archivedAt,
  :asksExternalUserRequester,
  :asksRequester,
  :assignee,
  :autoArchivedAt,
  :autoClosedAt,
  :botActor,
  :branchName,
  :canceledAt,
  :completedAt,
  :createdAt,
  :creator,
  :customerTicketCount,
  :cycle,
  :delegate,
  :description,
  :descriptionState,
  :documentContent,
  :dueDate,
  :estimate,
  :externalUserCreator,
  :favorite,
  :identifier,
  :inheritsSharedAccess,
  :integrationSourceType,
  :labelIds,
  :lastAppliedTemplate,
  :number,
  :parent,
  :previousIdentifiers,
  :priority,
  :priorityLabel,
  :prioritySortOrder,
  :project,
  :projectMilestone,
  :reactionData,
  :recurringIssueTemplate,
  :slaBreachesAt,
  :slaHighRiskAt,
  :slaMediumRiskAt,
  :slaStartedAt,
  :slaType,
  :snoozedBy,
  :snoozedUntilAt,
  :sortOrder,
  :sourceComment,
  :startedAt,
  :startedTriageAt,
  :state,
  :subIssueSortOrder,
  :suggestionsGeneratedAt,
  :summary,
  :team,
  :title,
  :trashed,
  :triagedAt,
  :trusted,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for Issue#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] permanently_delete
#   @return [Boolean, nil]
IssueRemoveMatch = Struct.new(
  :id,
  :permanently_delete,
  keyword_init: true
)

# IssueImport entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creatorId
#   @return [String, nil]
#
# @!attribute [rw] csvFileUrl
#   @return [String, nil]
#
# @!attribute [rw] displayName
#   @return [String]
#
# @!attribute [rw] error
#   @return [String, nil]
#
# @!attribute [rw] errorMetadata
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] mapping
#   @return [Object, nil]
#
# @!attribute [rw] progress
#   @return [Float, nil]
#
# @!attribute [rw] service
#   @return [String]
#
# @!attribute [rw] serviceMetadata
#   @return [Object, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] teamName
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
IssueImport = Struct.new(
  :archivedAt,
  :createdAt,
  :creatorId,
  :csvFileUrl,
  :displayName,
  :error,
  :errorMetadata,
  :id,
  :mapping,
  :progress,
  :service,
  :serviceMetadata,
  :status,
  :teamName,
  :updatedAt,
  keyword_init: true
)

# Request payload for IssueImport#create.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] include_closed_issue
#   @return [Boolean, nil]
#
# @!attribute [rw] instant_process
#   @return [Boolean, nil]
#
# @!attribute [rw] jira_email
#   @return [String, nil]
#
# @!attribute [rw] jira_hostname
#   @return [String, nil]
#
# @!attribute [rw] jira_project
#   @return [String, nil]
#
# @!attribute [rw] jira_token
#   @return [String, nil]
#
# @!attribute [rw] jql
#   @return [String, nil]
#
# @!attribute [rw] team_id
#   @return [String, nil]
#
# @!attribute [rw] team_name
#   @return [String, nil]
#
# @!attribute [rw] asana_team_name
#   @return [String, nil]
#
# @!attribute [rw] asana_token
#   @return [String, nil]
#
# @!attribute [rw] clubhouse_group_name
#   @return [String, nil]
#
# @!attribute [rw] clubhouse_token
#   @return [String, nil]
#
# @!attribute [rw] csv_url
#   @return [String, nil]
#
# @!attribute [rw] github_label
#   @return [String, nil]
#
# @!attribute [rw] github_repo_id
#   @return [Integer, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creatorId
#   @return [String, nil]
#
# @!attribute [rw] csvFileUrl
#   @return [String, nil]
#
# @!attribute [rw] displayName
#   @return [String]
#
# @!attribute [rw] error
#   @return [String, nil]
#
# @!attribute [rw] errorMetadata
#   @return [Object, nil]
#
# @!attribute [rw] mapping
#   @return [Object, nil]
#
# @!attribute [rw] progress
#   @return [Float, nil]
#
# @!attribute [rw] service
#   @return [String]
#
# @!attribute [rw] serviceMetadata
#   @return [Object, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] teamName
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
IssueImportCreateData = Struct.new(
  :id,
  :include_closed_issue,
  :instant_process,
  :jira_email,
  :jira_hostname,
  :jira_project,
  :jira_token,
  :jql,
  :team_id,
  :team_name,
  :asana_team_name,
  :asana_token,
  :clubhouse_group_name,
  :clubhouse_token,
  :csv_url,
  :github_label,
  :github_repo_id,
  :archivedAt,
  :createdAt,
  :creatorId,
  :csvFileUrl,
  :displayName,
  :error,
  :errorMetadata,
  :mapping,
  :progress,
  :service,
  :serviceMetadata,
  :status,
  :teamName,
  :updatedAt,
  keyword_init: true
)

# Request payload for IssueImport#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] creatorId
#   @return [String, nil]
#
# @!attribute [rw] csvFileUrl
#   @return [String, nil]
#
# @!attribute [rw] displayName
#   @return [String, nil]
#
# @!attribute [rw] error
#   @return [String, nil]
#
# @!attribute [rw] errorMetadata
#   @return [Object, nil]
#
# @!attribute [rw] mapping
#   @return [Object, nil]
#
# @!attribute [rw] progress
#   @return [Float, nil]
#
# @!attribute [rw] service
#   @return [String, nil]
#
# @!attribute [rw] serviceMetadata
#   @return [Object, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] teamName
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
IssueImportUpdateData = Struct.new(
  :id,
  :archivedAt,
  :createdAt,
  :creatorId,
  :csvFileUrl,
  :displayName,
  :error,
  :errorMetadata,
  :mapping,
  :progress,
  :service,
  :serviceMetadata,
  :status,
  :teamName,
  :updatedAt,
  keyword_init: true
)

# Request payload for IssueImport#remove.
#
# @!attribute [rw] issue_import_id
#   @return [String]
IssueImportRemoveMatch = Struct.new(
  :issue_import_id,
  keyword_init: true
)

# IssueLabel entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] groupType
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] inheritedFrom
#   @return [Hash, nil]
#
# @!attribute [rw] isGroup
#   @return [Boolean]
#
# @!attribute [rw] lastAppliedAt
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] parent
#   @return [Hash, nil]
#
# @!attribute [rw] retiredAt
#   @return [Object, nil]
#
# @!attribute [rw] retiredBy
#   @return [Hash, nil]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
IssueLabel = Struct.new(
  :archivedAt,
  :color,
  :createdAt,
  :creator,
  :description,
  :groupType,
  :id,
  :inheritedFrom,
  :isGroup,
  :lastAppliedAt,
  :name,
  :parent,
  :retiredAt,
  :retiredBy,
  :team,
  :updatedAt,
  keyword_init: true
)

# Request payload for IssueLabel#load.
#
# @!attribute [rw] id
#   @return [String]
IssueLabelLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for IssueLabel#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
IssueLabelListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for IssueLabel#create.
#
# @!attribute [rw] replace_team_label
#   @return [Boolean, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] groupType
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] inheritedFrom
#   @return [Hash, nil]
#
# @!attribute [rw] isGroup
#   @return [Boolean]
#
# @!attribute [rw] lastAppliedAt
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] parent
#   @return [Hash, nil]
#
# @!attribute [rw] retiredAt
#   @return [Object, nil]
#
# @!attribute [rw] retiredBy
#   @return [Hash, nil]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
IssueLabelCreateData = Struct.new(
  :replace_team_label,
  :archivedAt,
  :color,
  :createdAt,
  :creator,
  :description,
  :groupType,
  :id,
  :inheritedFrom,
  :isGroup,
  :lastAppliedAt,
  :name,
  :parent,
  :retiredAt,
  :retiredBy,
  :team,
  :updatedAt,
  keyword_init: true
)

# Request payload for IssueLabel#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] replace_team_label
#   @return [Boolean, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] groupType
#   @return [String, nil]
#
# @!attribute [rw] inheritedFrom
#   @return [Hash, nil]
#
# @!attribute [rw] isGroup
#   @return [Boolean, nil]
#
# @!attribute [rw] lastAppliedAt
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] parent
#   @return [Hash, nil]
#
# @!attribute [rw] retiredAt
#   @return [Object, nil]
#
# @!attribute [rw] retiredBy
#   @return [Hash, nil]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
IssueLabelUpdateData = Struct.new(
  :id,
  :replace_team_label,
  :archivedAt,
  :color,
  :createdAt,
  :creator,
  :description,
  :groupType,
  :inheritedFrom,
  :isGroup,
  :lastAppliedAt,
  :name,
  :parent,
  :retiredAt,
  :retiredBy,
  :team,
  :updatedAt,
  keyword_init: true
)

# Request payload for IssueLabel#remove.
#
# @!attribute [rw] id
#   @return [String]
IssueLabelRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# IssuePriorityValue entity data model.
#
# @!attribute [rw] label
#   @return [String]
#
# @!attribute [rw] priority
#   @return [Integer]
IssuePriorityValue = Struct.new(
  :label,
  :priority,
  keyword_init: true
)

# Request payload for IssuePriorityValue#list.
#
# @!attribute [rw] label
#   @return [String, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
IssuePriorityValueListMatch = Struct.new(
  :label,
  :priority,
  keyword_init: true
)

# IssueRelation entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] issue
#   @return [Hash, nil]
#
# @!attribute [rw] relatedIssue
#   @return [Hash, nil]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
IssueRelation = Struct.new(
  :archivedAt,
  :createdAt,
  :id,
  :issue,
  :relatedIssue,
  :type,
  :updatedAt,
  keyword_init: true
)

# Request payload for IssueRelation#load.
#
# @!attribute [rw] id
#   @return [String]
IssueRelationLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for IssueRelation#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
IssueRelationListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for IssueRelation#create.
#
# @!attribute [rw] override_created_at
#   @return [Object, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] issue
#   @return [Hash, nil]
#
# @!attribute [rw] relatedIssue
#   @return [Hash, nil]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
IssueRelationCreateData = Struct.new(
  :override_created_at,
  :archivedAt,
  :createdAt,
  :id,
  :issue,
  :relatedIssue,
  :type,
  :updatedAt,
  keyword_init: true
)

# Request payload for IssueRelation#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] issue
#   @return [Hash, nil]
#
# @!attribute [rw] relatedIssue
#   @return [Hash, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
IssueRelationUpdateData = Struct.new(
  :id,
  :archivedAt,
  :createdAt,
  :issue,
  :relatedIssue,
  :type,
  :updatedAt,
  keyword_init: true
)

# Request payload for IssueRelation#remove.
#
# @!attribute [rw] id
#   @return [String]
IssueRelationRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# IssueSearchResult entity data model.
#
# @!attribute [rw] activitySummary
#   @return [Object, nil]
#
# @!attribute [rw] addedToCycleAt
#   @return [Object, nil]
#
# @!attribute [rw] addedToProjectAt
#   @return [Object, nil]
#
# @!attribute [rw] addedToTeamAt
#   @return [Object, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] asksExternalUserRequester
#   @return [Hash, nil]
#
# @!attribute [rw] asksRequester
#   @return [Hash, nil]
#
# @!attribute [rw] assignee
#   @return [Hash, nil]
#
# @!attribute [rw] autoArchivedAt
#   @return [Object, nil]
#
# @!attribute [rw] autoClosedAt
#   @return [Object, nil]
#
# @!attribute [rw] botActor
#   @return [Hash, nil]
#
# @!attribute [rw] branchName
#   @return [String]
#
# @!attribute [rw] canceledAt
#   @return [Object, nil]
#
# @!attribute [rw] completedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] customerTicketCount
#   @return [Integer]
#
# @!attribute [rw] cycle
#   @return [Hash, nil]
#
# @!attribute [rw] delegate
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] descriptionState
#   @return [String, nil]
#
# @!attribute [rw] documentContent
#   @return [Hash, nil]
#
# @!attribute [rw] dueDate
#   @return [Object, nil]
#
# @!attribute [rw] estimate
#   @return [Float, nil]
#
# @!attribute [rw] externalUserCreator
#   @return [Hash, nil]
#
# @!attribute [rw] favorite
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [String]
#
# @!attribute [rw] inheritsSharedAccess
#   @return [Boolean]
#
# @!attribute [rw] integrationSourceType
#   @return [String, nil]
#
# @!attribute [rw] labelIds
#   @return [String]
#
# @!attribute [rw] lastAppliedTemplate
#   @return [Hash, nil]
#
# @!attribute [rw] metadata
#   @return [Object]
#
# @!attribute [rw] number
#   @return [Float]
#
# @!attribute [rw] parent
#   @return [Hash, nil]
#
# @!attribute [rw] previousIdentifiers
#   @return [String]
#
# @!attribute [rw] priority
#   @return [Float]
#
# @!attribute [rw] priorityLabel
#   @return [String]
#
# @!attribute [rw] prioritySortOrder
#   @return [Float]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] projectMilestone
#   @return [Hash, nil]
#
# @!attribute [rw] reactionData
#   @return [Object]
#
# @!attribute [rw] recurringIssueTemplate
#   @return [Hash, nil]
#
# @!attribute [rw] slaBreachesAt
#   @return [Object, nil]
#
# @!attribute [rw] slaHighRiskAt
#   @return [Object, nil]
#
# @!attribute [rw] slaMediumRiskAt
#   @return [Object, nil]
#
# @!attribute [rw] slaStartedAt
#   @return [Object, nil]
#
# @!attribute [rw] slaType
#   @return [String, nil]
#
# @!attribute [rw] snoozedBy
#   @return [Hash, nil]
#
# @!attribute [rw] snoozedUntilAt
#   @return [Object, nil]
#
# @!attribute [rw] sortOrder
#   @return [Float]
#
# @!attribute [rw] sourceComment
#   @return [Hash, nil]
#
# @!attribute [rw] startedAt
#   @return [Object, nil]
#
# @!attribute [rw] startedTriageAt
#   @return [Object, nil]
#
# @!attribute [rw] state
#   @return [Hash, nil]
#
# @!attribute [rw] subIssueSortOrder
#   @return [Float, nil]
#
# @!attribute [rw] suggestionsGeneratedAt
#   @return [Object, nil]
#
# @!attribute [rw] summary
#   @return [Hash, nil]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] trashed
#   @return [Boolean, nil]
#
# @!attribute [rw] triagedAt
#   @return [Object, nil]
#
# @!attribute [rw] trusted
#   @return [Boolean, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String]
IssueSearchResult = Struct.new(
  :activitySummary,
  :addedToCycleAt,
  :addedToProjectAt,
  :addedToTeamAt,
  :archivedAt,
  :asksExternalUserRequester,
  :asksRequester,
  :assignee,
  :autoArchivedAt,
  :autoClosedAt,
  :botActor,
  :branchName,
  :canceledAt,
  :completedAt,
  :createdAt,
  :creator,
  :customerTicketCount,
  :cycle,
  :delegate,
  :description,
  :descriptionState,
  :documentContent,
  :dueDate,
  :estimate,
  :externalUserCreator,
  :favorite,
  :id,
  :identifier,
  :inheritsSharedAccess,
  :integrationSourceType,
  :labelIds,
  :lastAppliedTemplate,
  :metadata,
  :number,
  :parent,
  :previousIdentifiers,
  :priority,
  :priorityLabel,
  :prioritySortOrder,
  :project,
  :projectMilestone,
  :reactionData,
  :recurringIssueTemplate,
  :slaBreachesAt,
  :slaHighRiskAt,
  :slaMediumRiskAt,
  :slaStartedAt,
  :slaType,
  :snoozedBy,
  :snoozedUntilAt,
  :sortOrder,
  :sourceComment,
  :startedAt,
  :startedTriageAt,
  :state,
  :subIssueSortOrder,
  :suggestionsGeneratedAt,
  :summary,
  :team,
  :title,
  :trashed,
  :triagedAt,
  :trusted,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for IssueSearchResult#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] include_comment
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
#
# @!attribute [rw] team_id
#   @return [String, nil]
#
# @!attribute [rw] term
#   @return [String]
IssueSearchResultListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :include_comment,
  :last,
  :order_by,
  :team_id,
  :term,
  keyword_init: true
)

# IssueToRelease entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] issue
#   @return [Hash, nil]
#
# @!attribute [rw] release
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
IssueToRelease = Struct.new(
  :archivedAt,
  :createdAt,
  :id,
  :issue,
  :release,
  :updatedAt,
  keyword_init: true
)

# Request payload for IssueToRelease#load.
#
# @!attribute [rw] id
#   @return [String]
IssueToReleaseLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for IssueToRelease#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
IssueToReleaseListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for IssueToRelease#create.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] issue
#   @return [Hash, nil]
#
# @!attribute [rw] release
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
IssueToReleaseCreateData = Struct.new(
  :archivedAt,
  :createdAt,
  :id,
  :issue,
  :release,
  :updatedAt,
  keyword_init: true
)

# Request payload for IssueToRelease#remove.
#
# @!attribute [rw] id
#   @return [String]
IssueToReleaseRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# LogoutResponse entity data model.
#
# @!attribute [rw] success
#   @return [Boolean]
LogoutResponse = Struct.new(
  :success,
  keyword_init: true
)

# Request payload for LogoutResponse#create.
#
# @!attribute [rw] reason
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
LogoutResponseCreateData = Struct.new(
  :reason,
  :success,
  keyword_init: true
)

# Request payload for LogoutResponse#update.
#
# @!attribute [rw] session_id
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
LogoutResponseUpdateData = Struct.new(
  :session_id,
  :success,
  keyword_init: true
)

# Notification entity data model.
#
# @!attribute [rw] actor
#   @return [Hash, nil]
#
# @!attribute [rw] actorAvatarColor
#   @return [String]
#
# @!attribute [rw] actorAvatarUrl
#   @return [String, nil]
#
# @!attribute [rw] actorInactive
#   @return [Boolean]
#
# @!attribute [rw] actorInitials
#   @return [String, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] botActor
#   @return [Hash, nil]
#
# @!attribute [rw] category
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] emailedAt
#   @return [Object, nil]
#
# @!attribute [rw] externalUserActor
#   @return [Hash, nil]
#
# @!attribute [rw] groupingKey
#   @return [String]
#
# @!attribute [rw] groupingPriority
#   @return [Float]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] inboxUrl
#   @return [String]
#
# @!attribute [rw] initiativeUpdateHealth
#   @return [String, nil]
#
# @!attribute [rw] isLinearActor
#   @return [Boolean]
#
# @!attribute [rw] issueStatusType
#   @return [String, nil]
#
# @!attribute [rw] projectUpdateHealth
#   @return [String, nil]
#
# @!attribute [rw] readAt
#   @return [Object, nil]
#
# @!attribute [rw] snoozedUntilAt
#   @return [Object, nil]
#
# @!attribute [rw] subtitle
#   @return [String]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] unsnoozedAt
#   @return [Object, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] user
#   @return [Hash, nil]
Notification = Struct.new(
  :actor,
  :actorAvatarColor,
  :actorAvatarUrl,
  :actorInactive,
  :actorInitials,
  :archivedAt,
  :botActor,
  :category,
  :createdAt,
  :emailedAt,
  :externalUserActor,
  :groupingKey,
  :groupingPriority,
  :id,
  :inboxUrl,
  :initiativeUpdateHealth,
  :isLinearActor,
  :issueStatusType,
  :projectUpdateHealth,
  :readAt,
  :snoozedUntilAt,
  :subtitle,
  :title,
  :type,
  :unsnoozedAt,
  :updatedAt,
  :url,
  :user,
  keyword_init: true
)

# Request payload for Notification#load.
#
# @!attribute [rw] id
#   @return [String]
NotificationLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Notification#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] unread_only
#   @return [Boolean, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
NotificationListMatch = Struct.new(
  :after,
  :first,
  :unread_only,
  :before,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# NotificationSubscription entity data model.
#
# @!attribute [rw] active
#   @return [Boolean]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] contextViewType
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] customView
#   @return [Hash, nil]
#
# @!attribute [rw] customer
#   @return [Hash, nil]
#
# @!attribute [rw] cycle
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] initiative
#   @return [Hash, nil]
#
# @!attribute [rw] label
#   @return [Hash, nil]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] subscriber
#   @return [Hash, nil]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] user
#   @return [Hash, nil]
#
# @!attribute [rw] userContextViewType
#   @return [String, nil]
NotificationSubscription = Struct.new(
  :active,
  :archivedAt,
  :contextViewType,
  :createdAt,
  :customView,
  :customer,
  :cycle,
  :id,
  :initiative,
  :label,
  :project,
  :subscriber,
  :team,
  :updatedAt,
  :user,
  :userContextViewType,
  keyword_init: true
)

# Request payload for NotificationSubscription#load.
#
# @!attribute [rw] id
#   @return [String]
NotificationSubscriptionLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for NotificationSubscription#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
NotificationSubscriptionListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# OAuthApplication entity data model.
#
# @!attribute [rw] clientId
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] developer
#   @return [String]
#
# @!attribute [rw] developerUrl
#   @return [String]
#
# @!attribute [rw] distribution
#   @return [String]
#
# @!attribute [rw] grantTypes
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] imageUrl
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] redirectUris
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] webhookEnabled
#   @return [Boolean]
#
# @!attribute [rw] webhookResourceTypes
#   @return [String]
#
# @!attribute [rw] webhookUrl
#   @return [String, nil]
OAuthApplication = Struct.new(
  :clientId,
  :createdAt,
  :description,
  :developer,
  :developerUrl,
  :distribution,
  :grantTypes,
  :id,
  :imageUrl,
  :name,
  :redirectUris,
  :updatedAt,
  :webhookEnabled,
  :webhookResourceTypes,
  :webhookUrl,
  keyword_init: true
)

# Request payload for OAuthApplication#load.
#
# @!attribute [rw] id
#   @return [String]
OAuthApplicationLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for OAuthApplication#list.
#
# @!attribute [rw] clientId
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] developer
#   @return [String, nil]
#
# @!attribute [rw] developerUrl
#   @return [String, nil]
#
# @!attribute [rw] distribution
#   @return [String, nil]
#
# @!attribute [rw] grantTypes
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] imageUrl
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] redirectUris
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] webhookEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] webhookResourceTypes
#   @return [String, nil]
#
# @!attribute [rw] webhookUrl
#   @return [String, nil]
OAuthApplicationListMatch = Struct.new(
  :clientId,
  :createdAt,
  :description,
  :developer,
  :developerUrl,
  :distribution,
  :grantTypes,
  :id,
  :imageUrl,
  :name,
  :redirectUris,
  :updatedAt,
  :webhookEnabled,
  :webhookResourceTypes,
  :webhookUrl,
  keyword_init: true
)

# Request payload for OAuthApplication#create.
#
# @!attribute [rw] clientId
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] developer
#   @return [String]
#
# @!attribute [rw] developerUrl
#   @return [String]
#
# @!attribute [rw] distribution
#   @return [String]
#
# @!attribute [rw] grantTypes
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] imageUrl
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] redirectUris
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] webhookEnabled
#   @return [Boolean]
#
# @!attribute [rw] webhookResourceTypes
#   @return [String]
#
# @!attribute [rw] webhookUrl
#   @return [String, nil]
OAuthApplicationCreateData = Struct.new(
  :clientId,
  :createdAt,
  :description,
  :developer,
  :developerUrl,
  :distribution,
  :grantTypes,
  :id,
  :imageUrl,
  :name,
  :redirectUris,
  :updatedAt,
  :webhookEnabled,
  :webhookResourceTypes,
  :webhookUrl,
  keyword_init: true
)

# Request payload for OAuthApplication#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] clientId
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] developer
#   @return [String, nil]
#
# @!attribute [rw] developerUrl
#   @return [String, nil]
#
# @!attribute [rw] distribution
#   @return [String, nil]
#
# @!attribute [rw] grantTypes
#   @return [String, nil]
#
# @!attribute [rw] imageUrl
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] redirectUris
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] webhookEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] webhookResourceTypes
#   @return [String, nil]
#
# @!attribute [rw] webhookUrl
#   @return [String, nil]
OAuthApplicationUpdateData = Struct.new(
  :id,
  :clientId,
  :createdAt,
  :description,
  :developer,
  :developerUrl,
  :distribution,
  :grantTypes,
  :imageUrl,
  :name,
  :redirectUris,
  :updatedAt,
  :webhookEnabled,
  :webhookResourceTypes,
  :webhookUrl,
  keyword_init: true
)

# Organization entity data model.
#
# @!attribute [rw] agentAutomationEnabled
#   @return [Boolean]
#
# @!attribute [rw] aiAddonEnabled
#   @return [Boolean]
#
# @!attribute [rw] aiDiscussionSummariesEnabled
#   @return [Boolean]
#
# @!attribute [rw] aiProviderConfiguration
#   @return [Object, nil]
#
# @!attribute [rw] aiTelemetryEnabled
#   @return [Boolean]
#
# @!attribute [rw] aiThreadSummariesEnabled
#   @return [Boolean]
#
# @!attribute [rw] allowedFileUploadContentTypes
#   @return [String, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] authSettings
#   @return [Object]
#
# @!attribute [rw] codeIntelligenceEnabled
#   @return [Boolean]
#
# @!attribute [rw] codeIntelligenceRepository
#   @return [String, nil]
#
# @!attribute [rw] codingAgentEnabled
#   @return [Boolean]
#
# @!attribute [rw] codingAgentSettings
#   @return [Object]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] createdIssueCount
#   @return [Integer]
#
# @!attribute [rw] customerCount
#   @return [Integer]
#
# @!attribute [rw] customersConfiguration
#   @return [Object]
#
# @!attribute [rw] customersEnabled
#   @return [Boolean]
#
# @!attribute [rw] defaultFeedSummarySchedule
#   @return [String, nil]
#
# @!attribute [rw] defaultHomeView
#   @return [String, nil]
#
# @!attribute [rw] defaultHomeViewTargetId
#   @return [String, nil]
#
# @!attribute [rw] deletionRequestedAt
#   @return [Object, nil]
#
# @!attribute [rw] feedEnabled
#   @return [Boolean]
#
# @!attribute [rw] fiscalYearStartMonth
#   @return [Float]
#
# @!attribute [rw] generatedUpdatesEnabled
#   @return [Boolean]
#
# @!attribute [rw] gitBranchFormat
#   @return [String, nil]
#
# @!attribute [rw] gitLinkbackDescriptionsEnabled
#   @return [Boolean]
#
# @!attribute [rw] gitLinkbackMessagesEnabled
#   @return [Boolean]
#
# @!attribute [rw] gitPublicLinkbackMessagesEnabled
#   @return [Boolean]
#
# @!attribute [rw] hipaaComplianceEnabled
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] initiativeUpdateReminderFrequencyInWeeks
#   @return [Float, nil]
#
# @!attribute [rw] initiativeUpdateRemindersDay
#   @return [String]
#
# @!attribute [rw] initiativeUpdateRemindersHour
#   @return [Float]
#
# @!attribute [rw] linearAgentEnabled
#   @return [Boolean]
#
# @!attribute [rw] linearAgentSettings
#   @return [Object]
#
# @!attribute [rw] logoUrl
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] periodUploadVolume
#   @return [Float]
#
# @!attribute [rw] previousUrlKeys
#   @return [String]
#
# @!attribute [rw] projectUpdateReminderFrequencyInWeeks
#   @return [Float, nil]
#
# @!attribute [rw] projectUpdateRemindersDay
#   @return [String]
#
# @!attribute [rw] projectUpdateRemindersHour
#   @return [Float]
#
# @!attribute [rw] pullRequestIssueMode
#   @return [String]
#
# @!attribute [rw] pullRequestTourEnabled
#   @return [Boolean]
#
# @!attribute [rw] releaseChannel
#   @return [String]
#
# @!attribute [rw] releasesEnabled
#   @return [Boolean]
#
# @!attribute [rw] restrictAgentInvocationToMembers
#   @return [Boolean, nil]
#
# @!attribute [rw] roadmapEnabled
#   @return [Boolean]
#
# @!attribute [rw] samlEnabled
#   @return [Boolean]
#
# @!attribute [rw] samlSettings
#   @return [Object, nil]
#
# @!attribute [rw] scimEnabled
#   @return [Boolean]
#
# @!attribute [rw] scimSettings
#   @return [Object, nil]
#
# @!attribute [rw] securitySettings
#   @return [Object]
#
# @!attribute [rw] slackAutoCreateProjectChannel
#   @return [Boolean]
#
# @!attribute [rw] slackProjectChannelIntegration
#   @return [Hash, nil]
#
# @!attribute [rw] slackProjectChannelPrefix
#   @return [String]
#
# @!attribute [rw] slackProjectChannelsEnabled
#   @return [Boolean]
#
# @!attribute [rw] subscription
#   @return [Hash, nil]
#
# @!attribute [rw] themeSettings
#   @return [Object, nil]
#
# @!attribute [rw] trialEndsAt
#   @return [Object, nil]
#
# @!attribute [rw] trialStartsAt
#   @return [Object, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] urlKey
#   @return [String]
#
# @!attribute [rw] userCount
#   @return [Integer]
#
# @!attribute [rw] workingDays
#   @return [Float]
Organization = Struct.new(
  :agentAutomationEnabled,
  :aiAddonEnabled,
  :aiDiscussionSummariesEnabled,
  :aiProviderConfiguration,
  :aiTelemetryEnabled,
  :aiThreadSummariesEnabled,
  :allowedFileUploadContentTypes,
  :archivedAt,
  :authSettings,
  :codeIntelligenceEnabled,
  :codeIntelligenceRepository,
  :codingAgentEnabled,
  :codingAgentSettings,
  :createdAt,
  :createdIssueCount,
  :customerCount,
  :customersConfiguration,
  :customersEnabled,
  :defaultFeedSummarySchedule,
  :defaultHomeView,
  :defaultHomeViewTargetId,
  :deletionRequestedAt,
  :feedEnabled,
  :fiscalYearStartMonth,
  :generatedUpdatesEnabled,
  :gitBranchFormat,
  :gitLinkbackDescriptionsEnabled,
  :gitLinkbackMessagesEnabled,
  :gitPublicLinkbackMessagesEnabled,
  :hipaaComplianceEnabled,
  :id,
  :initiativeUpdateReminderFrequencyInWeeks,
  :initiativeUpdateRemindersDay,
  :initiativeUpdateRemindersHour,
  :linearAgentEnabled,
  :linearAgentSettings,
  :logoUrl,
  :name,
  :periodUploadVolume,
  :previousUrlKeys,
  :projectUpdateReminderFrequencyInWeeks,
  :projectUpdateRemindersDay,
  :projectUpdateRemindersHour,
  :pullRequestIssueMode,
  :pullRequestTourEnabled,
  :releaseChannel,
  :releasesEnabled,
  :restrictAgentInvocationToMembers,
  :roadmapEnabled,
  :samlEnabled,
  :samlSettings,
  :scimEnabled,
  :scimSettings,
  :securitySettings,
  :slackAutoCreateProjectChannel,
  :slackProjectChannelIntegration,
  :slackProjectChannelPrefix,
  :slackProjectChannelsEnabled,
  :subscription,
  :themeSettings,
  :trialEndsAt,
  :trialStartsAt,
  :updatedAt,
  :urlKey,
  :userCount,
  :workingDays,
  keyword_init: true
)

# Request payload for Organization#load.
#
# @!attribute [rw] agentAutomationEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] aiAddonEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] aiDiscussionSummariesEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] aiProviderConfiguration
#   @return [Object, nil]
#
# @!attribute [rw] aiTelemetryEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] aiThreadSummariesEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] allowedFileUploadContentTypes
#   @return [String, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] authSettings
#   @return [Object, nil]
#
# @!attribute [rw] codeIntelligenceEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] codeIntelligenceRepository
#   @return [String, nil]
#
# @!attribute [rw] codingAgentEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] codingAgentSettings
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] createdIssueCount
#   @return [Integer, nil]
#
# @!attribute [rw] customerCount
#   @return [Integer, nil]
#
# @!attribute [rw] customersConfiguration
#   @return [Object, nil]
#
# @!attribute [rw] customersEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] defaultFeedSummarySchedule
#   @return [String, nil]
#
# @!attribute [rw] defaultHomeView
#   @return [String, nil]
#
# @!attribute [rw] defaultHomeViewTargetId
#   @return [String, nil]
#
# @!attribute [rw] deletionRequestedAt
#   @return [Object, nil]
#
# @!attribute [rw] feedEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] fiscalYearStartMonth
#   @return [Float, nil]
#
# @!attribute [rw] generatedUpdatesEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] gitBranchFormat
#   @return [String, nil]
#
# @!attribute [rw] gitLinkbackDescriptionsEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] gitLinkbackMessagesEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] gitPublicLinkbackMessagesEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] hipaaComplianceEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] initiativeUpdateReminderFrequencyInWeeks
#   @return [Float, nil]
#
# @!attribute [rw] initiativeUpdateRemindersDay
#   @return [String, nil]
#
# @!attribute [rw] initiativeUpdateRemindersHour
#   @return [Float, nil]
#
# @!attribute [rw] linearAgentEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] linearAgentSettings
#   @return [Object, nil]
#
# @!attribute [rw] logoUrl
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] periodUploadVolume
#   @return [Float, nil]
#
# @!attribute [rw] previousUrlKeys
#   @return [String, nil]
#
# @!attribute [rw] projectUpdateReminderFrequencyInWeeks
#   @return [Float, nil]
#
# @!attribute [rw] projectUpdateRemindersDay
#   @return [String, nil]
#
# @!attribute [rw] projectUpdateRemindersHour
#   @return [Float, nil]
#
# @!attribute [rw] pullRequestIssueMode
#   @return [String, nil]
#
# @!attribute [rw] pullRequestTourEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] releaseChannel
#   @return [String, nil]
#
# @!attribute [rw] releasesEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] restrictAgentInvocationToMembers
#   @return [Boolean, nil]
#
# @!attribute [rw] roadmapEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] samlEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] samlSettings
#   @return [Object, nil]
#
# @!attribute [rw] scimEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] scimSettings
#   @return [Object, nil]
#
# @!attribute [rw] securitySettings
#   @return [Object, nil]
#
# @!attribute [rw] slackAutoCreateProjectChannel
#   @return [Boolean, nil]
#
# @!attribute [rw] slackProjectChannelIntegration
#   @return [Hash, nil]
#
# @!attribute [rw] slackProjectChannelPrefix
#   @return [String, nil]
#
# @!attribute [rw] slackProjectChannelsEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] subscription
#   @return [Hash, nil]
#
# @!attribute [rw] themeSettings
#   @return [Object, nil]
#
# @!attribute [rw] trialEndsAt
#   @return [Object, nil]
#
# @!attribute [rw] trialStartsAt
#   @return [Object, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] urlKey
#   @return [String, nil]
#
# @!attribute [rw] userCount
#   @return [Integer, nil]
#
# @!attribute [rw] workingDays
#   @return [Float, nil]
OrganizationLoadMatch = Struct.new(
  :agentAutomationEnabled,
  :aiAddonEnabled,
  :aiDiscussionSummariesEnabled,
  :aiProviderConfiguration,
  :aiTelemetryEnabled,
  :aiThreadSummariesEnabled,
  :allowedFileUploadContentTypes,
  :archivedAt,
  :authSettings,
  :codeIntelligenceEnabled,
  :codeIntelligenceRepository,
  :codingAgentEnabled,
  :codingAgentSettings,
  :createdAt,
  :createdIssueCount,
  :customerCount,
  :customersConfiguration,
  :customersEnabled,
  :defaultFeedSummarySchedule,
  :defaultHomeView,
  :defaultHomeViewTargetId,
  :deletionRequestedAt,
  :feedEnabled,
  :fiscalYearStartMonth,
  :generatedUpdatesEnabled,
  :gitBranchFormat,
  :gitLinkbackDescriptionsEnabled,
  :gitLinkbackMessagesEnabled,
  :gitPublicLinkbackMessagesEnabled,
  :hipaaComplianceEnabled,
  :id,
  :initiativeUpdateReminderFrequencyInWeeks,
  :initiativeUpdateRemindersDay,
  :initiativeUpdateRemindersHour,
  :linearAgentEnabled,
  :linearAgentSettings,
  :logoUrl,
  :name,
  :periodUploadVolume,
  :previousUrlKeys,
  :projectUpdateReminderFrequencyInWeeks,
  :projectUpdateRemindersDay,
  :projectUpdateRemindersHour,
  :pullRequestIssueMode,
  :pullRequestTourEnabled,
  :releaseChannel,
  :releasesEnabled,
  :restrictAgentInvocationToMembers,
  :roadmapEnabled,
  :samlEnabled,
  :samlSettings,
  :scimEnabled,
  :scimSettings,
  :securitySettings,
  :slackAutoCreateProjectChannel,
  :slackProjectChannelIntegration,
  :slackProjectChannelPrefix,
  :slackProjectChannelsEnabled,
  :subscription,
  :themeSettings,
  :trialEndsAt,
  :trialStartsAt,
  :updatedAt,
  :urlKey,
  :userCount,
  :workingDays,
  keyword_init: true
)

# Request payload for Organization#update.
#
# @!attribute [rw] agentAutomationEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] aiAddonEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] aiDiscussionSummariesEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] aiProviderConfiguration
#   @return [Object, nil]
#
# @!attribute [rw] aiTelemetryEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] aiThreadSummariesEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] allowedFileUploadContentTypes
#   @return [String, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] authSettings
#   @return [Object, nil]
#
# @!attribute [rw] codeIntelligenceEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] codeIntelligenceRepository
#   @return [String, nil]
#
# @!attribute [rw] codingAgentEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] codingAgentSettings
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] createdIssueCount
#   @return [Integer, nil]
#
# @!attribute [rw] customerCount
#   @return [Integer, nil]
#
# @!attribute [rw] customersConfiguration
#   @return [Object, nil]
#
# @!attribute [rw] customersEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] defaultFeedSummarySchedule
#   @return [String, nil]
#
# @!attribute [rw] defaultHomeView
#   @return [String, nil]
#
# @!attribute [rw] defaultHomeViewTargetId
#   @return [String, nil]
#
# @!attribute [rw] deletionRequestedAt
#   @return [Object, nil]
#
# @!attribute [rw] feedEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] fiscalYearStartMonth
#   @return [Float, nil]
#
# @!attribute [rw] generatedUpdatesEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] gitBranchFormat
#   @return [String, nil]
#
# @!attribute [rw] gitLinkbackDescriptionsEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] gitLinkbackMessagesEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] gitPublicLinkbackMessagesEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] hipaaComplianceEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] initiativeUpdateReminderFrequencyInWeeks
#   @return [Float, nil]
#
# @!attribute [rw] initiativeUpdateRemindersDay
#   @return [String, nil]
#
# @!attribute [rw] initiativeUpdateRemindersHour
#   @return [Float, nil]
#
# @!attribute [rw] linearAgentEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] linearAgentSettings
#   @return [Object, nil]
#
# @!attribute [rw] logoUrl
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] periodUploadVolume
#   @return [Float, nil]
#
# @!attribute [rw] previousUrlKeys
#   @return [String, nil]
#
# @!attribute [rw] projectUpdateReminderFrequencyInWeeks
#   @return [Float, nil]
#
# @!attribute [rw] projectUpdateRemindersDay
#   @return [String, nil]
#
# @!attribute [rw] projectUpdateRemindersHour
#   @return [Float, nil]
#
# @!attribute [rw] pullRequestIssueMode
#   @return [String, nil]
#
# @!attribute [rw] pullRequestTourEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] releaseChannel
#   @return [String, nil]
#
# @!attribute [rw] releasesEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] restrictAgentInvocationToMembers
#   @return [Boolean, nil]
#
# @!attribute [rw] roadmapEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] samlEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] samlSettings
#   @return [Object, nil]
#
# @!attribute [rw] scimEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] scimSettings
#   @return [Object, nil]
#
# @!attribute [rw] securitySettings
#   @return [Object, nil]
#
# @!attribute [rw] slackAutoCreateProjectChannel
#   @return [Boolean, nil]
#
# @!attribute [rw] slackProjectChannelIntegration
#   @return [Hash, nil]
#
# @!attribute [rw] slackProjectChannelPrefix
#   @return [String, nil]
#
# @!attribute [rw] slackProjectChannelsEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] subscription
#   @return [Hash, nil]
#
# @!attribute [rw] themeSettings
#   @return [Object, nil]
#
# @!attribute [rw] trialEndsAt
#   @return [Object, nil]
#
# @!attribute [rw] trialStartsAt
#   @return [Object, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] urlKey
#   @return [String, nil]
#
# @!attribute [rw] userCount
#   @return [Integer, nil]
#
# @!attribute [rw] workingDays
#   @return [Float, nil]
OrganizationUpdateData = Struct.new(
  :agentAutomationEnabled,
  :aiAddonEnabled,
  :aiDiscussionSummariesEnabled,
  :aiProviderConfiguration,
  :aiTelemetryEnabled,
  :aiThreadSummariesEnabled,
  :allowedFileUploadContentTypes,
  :archivedAt,
  :authSettings,
  :codeIntelligenceEnabled,
  :codeIntelligenceRepository,
  :codingAgentEnabled,
  :codingAgentSettings,
  :createdAt,
  :createdIssueCount,
  :customerCount,
  :customersConfiguration,
  :customersEnabled,
  :defaultFeedSummarySchedule,
  :defaultHomeView,
  :defaultHomeViewTargetId,
  :deletionRequestedAt,
  :feedEnabled,
  :fiscalYearStartMonth,
  :generatedUpdatesEnabled,
  :gitBranchFormat,
  :gitLinkbackDescriptionsEnabled,
  :gitLinkbackMessagesEnabled,
  :gitPublicLinkbackMessagesEnabled,
  :hipaaComplianceEnabled,
  :id,
  :initiativeUpdateReminderFrequencyInWeeks,
  :initiativeUpdateRemindersDay,
  :initiativeUpdateRemindersHour,
  :linearAgentEnabled,
  :linearAgentSettings,
  :logoUrl,
  :name,
  :periodUploadVolume,
  :previousUrlKeys,
  :projectUpdateReminderFrequencyInWeeks,
  :projectUpdateRemindersDay,
  :projectUpdateRemindersHour,
  :pullRequestIssueMode,
  :pullRequestTourEnabled,
  :releaseChannel,
  :releasesEnabled,
  :restrictAgentInvocationToMembers,
  :roadmapEnabled,
  :samlEnabled,
  :samlSettings,
  :scimEnabled,
  :scimSettings,
  :securitySettings,
  :slackAutoCreateProjectChannel,
  :slackProjectChannelIntegration,
  :slackProjectChannelPrefix,
  :slackProjectChannelsEnabled,
  :subscription,
  :themeSettings,
  :trialEndsAt,
  :trialStartsAt,
  :updatedAt,
  :urlKey,
  :userCount,
  :workingDays,
  keyword_init: true
)

# Request payload for Organization#remove.
#
# @!attribute [rw] agentAutomationEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] aiAddonEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] aiDiscussionSummariesEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] aiProviderConfiguration
#   @return [Object, nil]
#
# @!attribute [rw] aiTelemetryEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] aiThreadSummariesEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] allowedFileUploadContentTypes
#   @return [String, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] authSettings
#   @return [Object, nil]
#
# @!attribute [rw] codeIntelligenceEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] codeIntelligenceRepository
#   @return [String, nil]
#
# @!attribute [rw] codingAgentEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] codingAgentSettings
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] createdIssueCount
#   @return [Integer, nil]
#
# @!attribute [rw] customerCount
#   @return [Integer, nil]
#
# @!attribute [rw] customersConfiguration
#   @return [Object, nil]
#
# @!attribute [rw] customersEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] defaultFeedSummarySchedule
#   @return [String, nil]
#
# @!attribute [rw] defaultHomeView
#   @return [String, nil]
#
# @!attribute [rw] defaultHomeViewTargetId
#   @return [String, nil]
#
# @!attribute [rw] deletionRequestedAt
#   @return [Object, nil]
#
# @!attribute [rw] feedEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] fiscalYearStartMonth
#   @return [Float, nil]
#
# @!attribute [rw] generatedUpdatesEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] gitBranchFormat
#   @return [String, nil]
#
# @!attribute [rw] gitLinkbackDescriptionsEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] gitLinkbackMessagesEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] gitPublicLinkbackMessagesEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] hipaaComplianceEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] initiativeUpdateReminderFrequencyInWeeks
#   @return [Float, nil]
#
# @!attribute [rw] initiativeUpdateRemindersDay
#   @return [String, nil]
#
# @!attribute [rw] initiativeUpdateRemindersHour
#   @return [Float, nil]
#
# @!attribute [rw] linearAgentEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] linearAgentSettings
#   @return [Object, nil]
#
# @!attribute [rw] logoUrl
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] periodUploadVolume
#   @return [Float, nil]
#
# @!attribute [rw] previousUrlKeys
#   @return [String, nil]
#
# @!attribute [rw] projectUpdateReminderFrequencyInWeeks
#   @return [Float, nil]
#
# @!attribute [rw] projectUpdateRemindersDay
#   @return [String, nil]
#
# @!attribute [rw] projectUpdateRemindersHour
#   @return [Float, nil]
#
# @!attribute [rw] pullRequestIssueMode
#   @return [String, nil]
#
# @!attribute [rw] pullRequestTourEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] releaseChannel
#   @return [String, nil]
#
# @!attribute [rw] releasesEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] restrictAgentInvocationToMembers
#   @return [Boolean, nil]
#
# @!attribute [rw] roadmapEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] samlEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] samlSettings
#   @return [Object, nil]
#
# @!attribute [rw] scimEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] scimSettings
#   @return [Object, nil]
#
# @!attribute [rw] securitySettings
#   @return [Object, nil]
#
# @!attribute [rw] slackAutoCreateProjectChannel
#   @return [Boolean, nil]
#
# @!attribute [rw] slackProjectChannelIntegration
#   @return [Hash, nil]
#
# @!attribute [rw] slackProjectChannelPrefix
#   @return [String, nil]
#
# @!attribute [rw] slackProjectChannelsEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] subscription
#   @return [Hash, nil]
#
# @!attribute [rw] themeSettings
#   @return [Object, nil]
#
# @!attribute [rw] trialEndsAt
#   @return [Object, nil]
#
# @!attribute [rw] trialStartsAt
#   @return [Object, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] urlKey
#   @return [String, nil]
#
# @!attribute [rw] userCount
#   @return [Integer, nil]
#
# @!attribute [rw] workingDays
#   @return [Float, nil]
OrganizationRemoveMatch = Struct.new(
  :agentAutomationEnabled,
  :aiAddonEnabled,
  :aiDiscussionSummariesEnabled,
  :aiProviderConfiguration,
  :aiTelemetryEnabled,
  :aiThreadSummariesEnabled,
  :allowedFileUploadContentTypes,
  :archivedAt,
  :authSettings,
  :codeIntelligenceEnabled,
  :codeIntelligenceRepository,
  :codingAgentEnabled,
  :codingAgentSettings,
  :createdAt,
  :createdIssueCount,
  :customerCount,
  :customersConfiguration,
  :customersEnabled,
  :defaultFeedSummarySchedule,
  :defaultHomeView,
  :defaultHomeViewTargetId,
  :deletionRequestedAt,
  :feedEnabled,
  :fiscalYearStartMonth,
  :generatedUpdatesEnabled,
  :gitBranchFormat,
  :gitLinkbackDescriptionsEnabled,
  :gitLinkbackMessagesEnabled,
  :gitPublicLinkbackMessagesEnabled,
  :hipaaComplianceEnabled,
  :id,
  :initiativeUpdateReminderFrequencyInWeeks,
  :initiativeUpdateRemindersDay,
  :initiativeUpdateRemindersHour,
  :linearAgentEnabled,
  :linearAgentSettings,
  :logoUrl,
  :name,
  :periodUploadVolume,
  :previousUrlKeys,
  :projectUpdateReminderFrequencyInWeeks,
  :projectUpdateRemindersDay,
  :projectUpdateRemindersHour,
  :pullRequestIssueMode,
  :pullRequestTourEnabled,
  :releaseChannel,
  :releasesEnabled,
  :restrictAgentInvocationToMembers,
  :roadmapEnabled,
  :samlEnabled,
  :samlSettings,
  :scimEnabled,
  :scimSettings,
  :securitySettings,
  :slackAutoCreateProjectChannel,
  :slackProjectChannelIntegration,
  :slackProjectChannelPrefix,
  :slackProjectChannelsEnabled,
  :subscription,
  :themeSettings,
  :trialEndsAt,
  :trialStartsAt,
  :updatedAt,
  :urlKey,
  :userCount,
  :workingDays,
  keyword_init: true
)

# OrganizationDomain entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] authType
#   @return [String]
#
# @!attribute [rw] claimed
#   @return [Boolean, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] disableOrganizationCreation
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identityProvider
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] verificationEmail
#   @return [String, nil]
#
# @!attribute [rw] verified
#   @return [Boolean]
OrganizationDomain = Struct.new(
  :archivedAt,
  :authType,
  :claimed,
  :createdAt,
  :creator,
  :disableOrganizationCreation,
  :id,
  :identityProvider,
  :name,
  :updatedAt,
  :verificationEmail,
  :verified,
  keyword_init: true
)

# Request payload for OrganizationDomain#create.
#
# @!attribute [rw] trigger_email_verification
#   @return [Boolean, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] authType
#   @return [String]
#
# @!attribute [rw] claimed
#   @return [Boolean, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] disableOrganizationCreation
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identityProvider
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] verificationEmail
#   @return [String, nil]
#
# @!attribute [rw] verified
#   @return [Boolean]
OrganizationDomainCreateData = Struct.new(
  :trigger_email_verification,
  :archivedAt,
  :authType,
  :claimed,
  :createdAt,
  :creator,
  :disableOrganizationCreation,
  :id,
  :identityProvider,
  :name,
  :updatedAt,
  :verificationEmail,
  :verified,
  keyword_init: true
)

# Request payload for OrganizationDomain#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] authType
#   @return [String, nil]
#
# @!attribute [rw] claimed
#   @return [Boolean, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] disableOrganizationCreation
#   @return [Boolean, nil]
#
# @!attribute [rw] identityProvider
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] verificationEmail
#   @return [String, nil]
#
# @!attribute [rw] verified
#   @return [Boolean, nil]
OrganizationDomainUpdateData = Struct.new(
  :id,
  :archivedAt,
  :authType,
  :claimed,
  :createdAt,
  :creator,
  :disableOrganizationCreation,
  :identityProvider,
  :name,
  :updatedAt,
  :verificationEmail,
  :verified,
  keyword_init: true
)

# Request payload for OrganizationDomain#remove.
#
# @!attribute [rw] id
#   @return [String]
OrganizationDomainRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# OrganizationInvite entity data model.
#
# @!attribute [rw] acceptedAt
#   @return [Object, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] expiresAt
#   @return [Object, nil]
#
# @!attribute [rw] external
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] invitee
#   @return [Hash, nil]
#
# @!attribute [rw] inviter
#   @return [Hash, nil]
#
# @!attribute [rw] metadata
#   @return [Object, nil]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] role
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
OrganizationInvite = Struct.new(
  :acceptedAt,
  :archivedAt,
  :createdAt,
  :email,
  :expiresAt,
  :external,
  :id,
  :invitee,
  :inviter,
  :metadata,
  :organization,
  :role,
  :updatedAt,
  keyword_init: true
)

# Request payload for OrganizationInvite#load.
#
# @!attribute [rw] id
#   @return [String]
OrganizationInviteLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for OrganizationInvite#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
OrganizationInviteListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for OrganizationInvite#create.
#
# @!attribute [rw] acceptedAt
#   @return [Object, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] expiresAt
#   @return [Object, nil]
#
# @!attribute [rw] external
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] invitee
#   @return [Hash, nil]
#
# @!attribute [rw] inviter
#   @return [Hash, nil]
#
# @!attribute [rw] metadata
#   @return [Object, nil]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] role
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
OrganizationInviteCreateData = Struct.new(
  :acceptedAt,
  :archivedAt,
  :createdAt,
  :email,
  :expiresAt,
  :external,
  :id,
  :invitee,
  :inviter,
  :metadata,
  :organization,
  :role,
  :updatedAt,
  keyword_init: true
)

# Request payload for OrganizationInvite#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] acceptedAt
#   @return [Object, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] expiresAt
#   @return [Object, nil]
#
# @!attribute [rw] external
#   @return [Boolean, nil]
#
# @!attribute [rw] invitee
#   @return [Hash, nil]
#
# @!attribute [rw] inviter
#   @return [Hash, nil]
#
# @!attribute [rw] metadata
#   @return [Object, nil]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] role
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
OrganizationInviteUpdateData = Struct.new(
  :id,
  :acceptedAt,
  :archivedAt,
  :createdAt,
  :email,
  :expiresAt,
  :external,
  :invitee,
  :inviter,
  :metadata,
  :organization,
  :role,
  :updatedAt,
  keyword_init: true
)

# Request payload for OrganizationInvite#remove.
#
# @!attribute [rw] id
#   @return [String]
OrganizationInviteRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# OrganizationMeta entity data model.
#
# @!attribute [rw] allowedAuthServices
#   @return [String]
#
# @!attribute [rw] region
#   @return [String]
OrganizationMeta = Struct.new(
  :allowedAuthServices,
  :region,
  keyword_init: true
)

# Request payload for OrganizationMeta#load.
#
# @!attribute [rw] url_key
#   @return [String]
OrganizationMetaLoadMatch = Struct.new(
  :url_key,
  keyword_init: true
)

# PasskeyLoginStartResponse entity data model.
#
# @!attribute [rw] options
#   @return [Object]
#
# @!attribute [rw] success
#   @return [Boolean]
PasskeyLoginStartResponse = Struct.new(
  :options,
  :success,
  keyword_init: true
)

# Request payload for PasskeyLoginStartResponse#update.
#
# @!attribute [rw] auth_id
#   @return [String]
#
# @!attribute [rw] options
#   @return [Object, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
PasskeyLoginStartResponseUpdateData = Struct.new(
  :auth_id,
  :options,
  :success,
  keyword_init: true
)

# Project entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] autoArchivedAt
#   @return [Object, nil]
#
# @!attribute [rw] canceledAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String]
#
# @!attribute [rw] completedAt
#   @return [Object, nil]
#
# @!attribute [rw] completedIssueCountHistory
#   @return [Float]
#
# @!attribute [rw] completedScopeHistory
#   @return [Float]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] contentState
#   @return [String, nil]
#
# @!attribute [rw] convertedFromIssue
#   @return [Hash, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] currentProgress
#   @return [Object]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] documentContent
#   @return [Hash, nil]
#
# @!attribute [rw] favorite
#   @return [Hash, nil]
#
# @!attribute [rw] frequencyResolution
#   @return [String]
#
# @!attribute [rw] health
#   @return [String, nil]
#
# @!attribute [rw] healthUpdatedAt
#   @return [Object, nil]
#
# @!attribute [rw] icon
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [String, nil]
#
# @!attribute [rw] inProgressScopeHistory
#   @return [Float]
#
# @!attribute [rw] integrationsSettings
#   @return [Hash, nil]
#
# @!attribute [rw] issueCountHistory
#   @return [Float]
#
# @!attribute [rw] labelIds
#   @return [String]
#
# @!attribute [rw] lastAppliedTemplate
#   @return [Hash, nil]
#
# @!attribute [rw] lastUpdate
#   @return [Hash, nil]
#
# @!attribute [rw] lead
#   @return [Hash, nil]
#
# @!attribute [rw] leadTeam
#   @return [Hash, nil]
#
# @!attribute [rw] microsoftTeamsChannelId
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] previousIdentifiers
#   @return [String]
#
# @!attribute [rw] priority
#   @return [Integer]
#
# @!attribute [rw] priorityLabel
#   @return [String]
#
# @!attribute [rw] prioritySortOrder
#   @return [Float]
#
# @!attribute [rw] progress
#   @return [Float]
#
# @!attribute [rw] progressHistory
#   @return [Object]
#
# @!attribute [rw] projectUpdateRemindersPausedUntilAt
#   @return [Object, nil]
#
# @!attribute [rw] resourceCount
#   @return [Integer]
#
# @!attribute [rw] scope
#   @return [Float]
#
# @!attribute [rw] scopeHistory
#   @return [Float]
#
# @!attribute [rw] slackChannelId
#   @return [String, nil]
#
# @!attribute [rw] slugId
#   @return [String]
#
# @!attribute [rw] sortOrder
#   @return [Float]
#
# @!attribute [rw] startDate
#   @return [Object, nil]
#
# @!attribute [rw] startDateResolution
#   @return [String, nil]
#
# @!attribute [rw] startedAt
#   @return [Object, nil]
#
# @!attribute [rw] status
#   @return [Hash, nil]
#
# @!attribute [rw] targetDate
#   @return [Object, nil]
#
# @!attribute [rw] targetDateResolution
#   @return [String, nil]
#
# @!attribute [rw] trashed
#   @return [Boolean, nil]
#
# @!attribute [rw] updateReminderFrequency
#   @return [Float, nil]
#
# @!attribute [rw] updateReminderFrequencyInWeeks
#   @return [Float, nil]
#
# @!attribute [rw] updateRemindersDay
#   @return [String, nil]
#
# @!attribute [rw] updateRemindersHour
#   @return [Float, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String]
Project = Struct.new(
  :archivedAt,
  :autoArchivedAt,
  :canceledAt,
  :color,
  :completedAt,
  :completedIssueCountHistory,
  :completedScopeHistory,
  :content,
  :contentState,
  :convertedFromIssue,
  :createdAt,
  :creator,
  :currentProgress,
  :description,
  :documentContent,
  :favorite,
  :frequencyResolution,
  :health,
  :healthUpdatedAt,
  :icon,
  :id,
  :identifier,
  :inProgressScopeHistory,
  :integrationsSettings,
  :issueCountHistory,
  :labelIds,
  :lastAppliedTemplate,
  :lastUpdate,
  :lead,
  :leadTeam,
  :microsoftTeamsChannelId,
  :name,
  :previousIdentifiers,
  :priority,
  :priorityLabel,
  :prioritySortOrder,
  :progress,
  :progressHistory,
  :projectUpdateRemindersPausedUntilAt,
  :resourceCount,
  :scope,
  :scopeHistory,
  :slackChannelId,
  :slugId,
  :sortOrder,
  :startDate,
  :startDateResolution,
  :startedAt,
  :status,
  :targetDate,
  :targetDateResolution,
  :trashed,
  :updateReminderFrequency,
  :updateReminderFrequencyInWeeks,
  :updateRemindersDay,
  :updateRemindersHour,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for Project#load.
#
# @!attribute [rw] id
#   @return [String]
ProjectLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Project#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
ProjectListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for Project#create.
#
# @!attribute [rw] ai_conversation_id
#   @return [String, nil]
#
# @!attribute [rw] project_draft_id
#   @return [String, nil]
#
# @!attribute [rw] slack_channel_name
#   @return [String, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] autoArchivedAt
#   @return [Object, nil]
#
# @!attribute [rw] canceledAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String]
#
# @!attribute [rw] completedAt
#   @return [Object, nil]
#
# @!attribute [rw] completedIssueCountHistory
#   @return [Float]
#
# @!attribute [rw] completedScopeHistory
#   @return [Float]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] contentState
#   @return [String, nil]
#
# @!attribute [rw] convertedFromIssue
#   @return [Hash, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] currentProgress
#   @return [Object]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] documentContent
#   @return [Hash, nil]
#
# @!attribute [rw] favorite
#   @return [Hash, nil]
#
# @!attribute [rw] frequencyResolution
#   @return [String]
#
# @!attribute [rw] health
#   @return [String, nil]
#
# @!attribute [rw] healthUpdatedAt
#   @return [Object, nil]
#
# @!attribute [rw] icon
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [String, nil]
#
# @!attribute [rw] inProgressScopeHistory
#   @return [Float]
#
# @!attribute [rw] integrationsSettings
#   @return [Hash, nil]
#
# @!attribute [rw] issueCountHistory
#   @return [Float]
#
# @!attribute [rw] labelIds
#   @return [String]
#
# @!attribute [rw] lastAppliedTemplate
#   @return [Hash, nil]
#
# @!attribute [rw] lastUpdate
#   @return [Hash, nil]
#
# @!attribute [rw] lead
#   @return [Hash, nil]
#
# @!attribute [rw] leadTeam
#   @return [Hash, nil]
#
# @!attribute [rw] microsoftTeamsChannelId
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] previousIdentifiers
#   @return [String]
#
# @!attribute [rw] priority
#   @return [Integer]
#
# @!attribute [rw] priorityLabel
#   @return [String]
#
# @!attribute [rw] prioritySortOrder
#   @return [Float]
#
# @!attribute [rw] progress
#   @return [Float]
#
# @!attribute [rw] progressHistory
#   @return [Object]
#
# @!attribute [rw] projectUpdateRemindersPausedUntilAt
#   @return [Object, nil]
#
# @!attribute [rw] resourceCount
#   @return [Integer]
#
# @!attribute [rw] scope
#   @return [Float]
#
# @!attribute [rw] scopeHistory
#   @return [Float]
#
# @!attribute [rw] slackChannelId
#   @return [String, nil]
#
# @!attribute [rw] slugId
#   @return [String]
#
# @!attribute [rw] sortOrder
#   @return [Float]
#
# @!attribute [rw] startDate
#   @return [Object, nil]
#
# @!attribute [rw] startDateResolution
#   @return [String, nil]
#
# @!attribute [rw] startedAt
#   @return [Object, nil]
#
# @!attribute [rw] status
#   @return [Hash, nil]
#
# @!attribute [rw] targetDate
#   @return [Object, nil]
#
# @!attribute [rw] targetDateResolution
#   @return [String, nil]
#
# @!attribute [rw] trashed
#   @return [Boolean, nil]
#
# @!attribute [rw] updateReminderFrequency
#   @return [Float, nil]
#
# @!attribute [rw] updateReminderFrequencyInWeeks
#   @return [Float, nil]
#
# @!attribute [rw] updateRemindersDay
#   @return [String, nil]
#
# @!attribute [rw] updateRemindersHour
#   @return [Float, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String]
ProjectCreateData = Struct.new(
  :ai_conversation_id,
  :project_draft_id,
  :slack_channel_name,
  :archivedAt,
  :autoArchivedAt,
  :canceledAt,
  :color,
  :completedAt,
  :completedIssueCountHistory,
  :completedScopeHistory,
  :content,
  :contentState,
  :convertedFromIssue,
  :createdAt,
  :creator,
  :currentProgress,
  :description,
  :documentContent,
  :favorite,
  :frequencyResolution,
  :health,
  :healthUpdatedAt,
  :icon,
  :id,
  :identifier,
  :inProgressScopeHistory,
  :integrationsSettings,
  :issueCountHistory,
  :labelIds,
  :lastAppliedTemplate,
  :lastUpdate,
  :lead,
  :leadTeam,
  :microsoftTeamsChannelId,
  :name,
  :previousIdentifiers,
  :priority,
  :priorityLabel,
  :prioritySortOrder,
  :progress,
  :progressHistory,
  :projectUpdateRemindersPausedUntilAt,
  :resourceCount,
  :scope,
  :scopeHistory,
  :slackChannelId,
  :slugId,
  :sortOrder,
  :startDate,
  :startDateResolution,
  :startedAt,
  :status,
  :targetDate,
  :targetDateResolution,
  :trashed,
  :updateReminderFrequency,
  :updateReminderFrequencyInWeeks,
  :updateRemindersDay,
  :updateRemindersHour,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for Project#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] autoArchivedAt
#   @return [Object, nil]
#
# @!attribute [rw] canceledAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] completedAt
#   @return [Object, nil]
#
# @!attribute [rw] completedIssueCountHistory
#   @return [Float, nil]
#
# @!attribute [rw] completedScopeHistory
#   @return [Float, nil]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] contentState
#   @return [String, nil]
#
# @!attribute [rw] convertedFromIssue
#   @return [Hash, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] currentProgress
#   @return [Object, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] documentContent
#   @return [Hash, nil]
#
# @!attribute [rw] favorite
#   @return [Hash, nil]
#
# @!attribute [rw] frequencyResolution
#   @return [String, nil]
#
# @!attribute [rw] health
#   @return [String, nil]
#
# @!attribute [rw] healthUpdatedAt
#   @return [Object, nil]
#
# @!attribute [rw] icon
#   @return [String, nil]
#
# @!attribute [rw] identifier
#   @return [String, nil]
#
# @!attribute [rw] inProgressScopeHistory
#   @return [Float, nil]
#
# @!attribute [rw] integrationsSettings
#   @return [Hash, nil]
#
# @!attribute [rw] issueCountHistory
#   @return [Float, nil]
#
# @!attribute [rw] labelIds
#   @return [String, nil]
#
# @!attribute [rw] lastAppliedTemplate
#   @return [Hash, nil]
#
# @!attribute [rw] lastUpdate
#   @return [Hash, nil]
#
# @!attribute [rw] lead
#   @return [Hash, nil]
#
# @!attribute [rw] leadTeam
#   @return [Hash, nil]
#
# @!attribute [rw] microsoftTeamsChannelId
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] previousIdentifiers
#   @return [String, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] priorityLabel
#   @return [String, nil]
#
# @!attribute [rw] prioritySortOrder
#   @return [Float, nil]
#
# @!attribute [rw] progress
#   @return [Float, nil]
#
# @!attribute [rw] progressHistory
#   @return [Object, nil]
#
# @!attribute [rw] projectUpdateRemindersPausedUntilAt
#   @return [Object, nil]
#
# @!attribute [rw] resourceCount
#   @return [Integer, nil]
#
# @!attribute [rw] scope
#   @return [Float, nil]
#
# @!attribute [rw] scopeHistory
#   @return [Float, nil]
#
# @!attribute [rw] slackChannelId
#   @return [String, nil]
#
# @!attribute [rw] slugId
#   @return [String, nil]
#
# @!attribute [rw] sortOrder
#   @return [Float, nil]
#
# @!attribute [rw] startDate
#   @return [Object, nil]
#
# @!attribute [rw] startDateResolution
#   @return [String, nil]
#
# @!attribute [rw] startedAt
#   @return [Object, nil]
#
# @!attribute [rw] status
#   @return [Hash, nil]
#
# @!attribute [rw] targetDate
#   @return [Object, nil]
#
# @!attribute [rw] targetDateResolution
#   @return [String, nil]
#
# @!attribute [rw] trashed
#   @return [Boolean, nil]
#
# @!attribute [rw] updateReminderFrequency
#   @return [Float, nil]
#
# @!attribute [rw] updateReminderFrequencyInWeeks
#   @return [Float, nil]
#
# @!attribute [rw] updateRemindersDay
#   @return [String, nil]
#
# @!attribute [rw] updateRemindersHour
#   @return [Float, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
ProjectUpdateData = Struct.new(
  :id,
  :archivedAt,
  :autoArchivedAt,
  :canceledAt,
  :color,
  :completedAt,
  :completedIssueCountHistory,
  :completedScopeHistory,
  :content,
  :contentState,
  :convertedFromIssue,
  :createdAt,
  :creator,
  :currentProgress,
  :description,
  :documentContent,
  :favorite,
  :frequencyResolution,
  :health,
  :healthUpdatedAt,
  :icon,
  :identifier,
  :inProgressScopeHistory,
  :integrationsSettings,
  :issueCountHistory,
  :labelIds,
  :lastAppliedTemplate,
  :lastUpdate,
  :lead,
  :leadTeam,
  :microsoftTeamsChannelId,
  :name,
  :previousIdentifiers,
  :priority,
  :priorityLabel,
  :prioritySortOrder,
  :progress,
  :progressHistory,
  :projectUpdateRemindersPausedUntilAt,
  :resourceCount,
  :scope,
  :scopeHistory,
  :slackChannelId,
  :slugId,
  :sortOrder,
  :startDate,
  :startDateResolution,
  :startedAt,
  :status,
  :targetDate,
  :targetDateResolution,
  :trashed,
  :updateReminderFrequency,
  :updateReminderFrequencyInWeeks,
  :updateRemindersDay,
  :updateRemindersHour,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for Project#remove.
#
# @!attribute [rw] id
#   @return [String]
ProjectRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# ProjectLabel entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] inheritedFrom
#   @return [Hash, nil]
#
# @!attribute [rw] isGroup
#   @return [Boolean]
#
# @!attribute [rw] lastAppliedAt
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] parent
#   @return [Hash, nil]
#
# @!attribute [rw] retiredAt
#   @return [Object, nil]
#
# @!attribute [rw] retiredBy
#   @return [Hash, nil]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
ProjectLabel = Struct.new(
  :archivedAt,
  :color,
  :createdAt,
  :creator,
  :description,
  :id,
  :inheritedFrom,
  :isGroup,
  :lastAppliedAt,
  :name,
  :organization,
  :parent,
  :retiredAt,
  :retiredBy,
  :team,
  :updatedAt,
  keyword_init: true
)

# Request payload for ProjectLabel#load.
#
# @!attribute [rw] id
#   @return [String]
ProjectLabelLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ProjectLabel#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
ProjectLabelListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for ProjectLabel#create.
#
# @!attribute [rw] replace_team_label
#   @return [Boolean, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] inheritedFrom
#   @return [Hash, nil]
#
# @!attribute [rw] isGroup
#   @return [Boolean]
#
# @!attribute [rw] lastAppliedAt
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] parent
#   @return [Hash, nil]
#
# @!attribute [rw] retiredAt
#   @return [Object, nil]
#
# @!attribute [rw] retiredBy
#   @return [Hash, nil]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
ProjectLabelCreateData = Struct.new(
  :replace_team_label,
  :archivedAt,
  :color,
  :createdAt,
  :creator,
  :description,
  :id,
  :inheritedFrom,
  :isGroup,
  :lastAppliedAt,
  :name,
  :organization,
  :parent,
  :retiredAt,
  :retiredBy,
  :team,
  :updatedAt,
  keyword_init: true
)

# Request payload for ProjectLabel#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] replace_team_label
#   @return [Boolean, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] inheritedFrom
#   @return [Hash, nil]
#
# @!attribute [rw] isGroup
#   @return [Boolean, nil]
#
# @!attribute [rw] lastAppliedAt
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] parent
#   @return [Hash, nil]
#
# @!attribute [rw] retiredAt
#   @return [Object, nil]
#
# @!attribute [rw] retiredBy
#   @return [Hash, nil]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
ProjectLabelUpdateData = Struct.new(
  :id,
  :replace_team_label,
  :archivedAt,
  :color,
  :createdAt,
  :creator,
  :description,
  :inheritedFrom,
  :isGroup,
  :lastAppliedAt,
  :name,
  :organization,
  :parent,
  :retiredAt,
  :retiredBy,
  :team,
  :updatedAt,
  keyword_init: true
)

# Request payload for ProjectLabel#remove.
#
# @!attribute [rw] id
#   @return [String]
ProjectLabelRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# ProjectMilestone entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] currentProgress
#   @return [Object]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] descriptionState
#   @return [String, nil]
#
# @!attribute [rw] documentContent
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] progress
#   @return [Float]
#
# @!attribute [rw] progressHistory
#   @return [Object]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] sortOrder
#   @return [Float]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] targetDate
#   @return [Object, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
ProjectMilestone = Struct.new(
  :archivedAt,
  :createdAt,
  :currentProgress,
  :description,
  :descriptionState,
  :documentContent,
  :id,
  :name,
  :progress,
  :progressHistory,
  :project,
  :sortOrder,
  :status,
  :targetDate,
  :updatedAt,
  keyword_init: true
)

# Request payload for ProjectMilestone#load.
#
# @!attribute [rw] id
#   @return [String]
ProjectMilestoneLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ProjectMilestone#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
ProjectMilestoneListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for ProjectMilestone#create.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] currentProgress
#   @return [Object]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] descriptionState
#   @return [String, nil]
#
# @!attribute [rw] documentContent
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] progress
#   @return [Float]
#
# @!attribute [rw] progressHistory
#   @return [Object]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] sortOrder
#   @return [Float]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] targetDate
#   @return [Object, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
ProjectMilestoneCreateData = Struct.new(
  :archivedAt,
  :createdAt,
  :currentProgress,
  :description,
  :descriptionState,
  :documentContent,
  :id,
  :name,
  :progress,
  :progressHistory,
  :project,
  :sortOrder,
  :status,
  :targetDate,
  :updatedAt,
  keyword_init: true
)

# Request payload for ProjectMilestone#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] currentProgress
#   @return [Object, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] descriptionState
#   @return [String, nil]
#
# @!attribute [rw] documentContent
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] progress
#   @return [Float, nil]
#
# @!attribute [rw] progressHistory
#   @return [Object, nil]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] sortOrder
#   @return [Float, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] targetDate
#   @return [Object, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
ProjectMilestoneUpdateData = Struct.new(
  :id,
  :archivedAt,
  :createdAt,
  :currentProgress,
  :description,
  :descriptionState,
  :documentContent,
  :name,
  :progress,
  :progressHistory,
  :project,
  :sortOrder,
  :status,
  :targetDate,
  :updatedAt,
  keyword_init: true
)

# Request payload for ProjectMilestone#remove.
#
# @!attribute [rw] id
#   @return [String]
ProjectMilestoneRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# ProjectMilestoneMoveProjectTeam entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] projectId
#   @return [String]
#
# @!attribute [rw] teamIds
#   @return [String]
ProjectMilestoneMoveProjectTeam = Struct.new(
  :id,
  :projectId,
  :teamIds,
  keyword_init: true
)

# Request payload for ProjectMilestoneMoveProjectTeam#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] projectId
#   @return [String, nil]
#
# @!attribute [rw] teamIds
#   @return [String, nil]
ProjectMilestoneMoveProjectTeamUpdateData = Struct.new(
  :id,
  :projectId,
  :teamIds,
  keyword_init: true
)

# ProjectRelation entity data model.
#
# @!attribute [rw] anchorType
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] projectMilestone
#   @return [Hash, nil]
#
# @!attribute [rw] relatedAnchorType
#   @return [String]
#
# @!attribute [rw] relatedProject
#   @return [Hash, nil]
#
# @!attribute [rw] relatedProjectMilestone
#   @return [Hash, nil]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] user
#   @return [Hash, nil]
ProjectRelation = Struct.new(
  :anchorType,
  :archivedAt,
  :createdAt,
  :id,
  :project,
  :projectMilestone,
  :relatedAnchorType,
  :relatedProject,
  :relatedProjectMilestone,
  :type,
  :updatedAt,
  :user,
  keyword_init: true
)

# Request payload for ProjectRelation#load.
#
# @!attribute [rw] id
#   @return [String]
ProjectRelationLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ProjectRelation#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
ProjectRelationListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for ProjectRelation#create.
#
# @!attribute [rw] anchorType
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] projectMilestone
#   @return [Hash, nil]
#
# @!attribute [rw] relatedAnchorType
#   @return [String]
#
# @!attribute [rw] relatedProject
#   @return [Hash, nil]
#
# @!attribute [rw] relatedProjectMilestone
#   @return [Hash, nil]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] user
#   @return [Hash, nil]
ProjectRelationCreateData = Struct.new(
  :anchorType,
  :archivedAt,
  :createdAt,
  :id,
  :project,
  :projectMilestone,
  :relatedAnchorType,
  :relatedProject,
  :relatedProjectMilestone,
  :type,
  :updatedAt,
  :user,
  keyword_init: true
)

# Request payload for ProjectRelation#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] anchorType
#   @return [String, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] projectMilestone
#   @return [Hash, nil]
#
# @!attribute [rw] relatedAnchorType
#   @return [String, nil]
#
# @!attribute [rw] relatedProject
#   @return [Hash, nil]
#
# @!attribute [rw] relatedProjectMilestone
#   @return [Hash, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
ProjectRelationUpdateData = Struct.new(
  :id,
  :anchorType,
  :archivedAt,
  :createdAt,
  :project,
  :projectMilestone,
  :relatedAnchorType,
  :relatedProject,
  :relatedProjectMilestone,
  :type,
  :updatedAt,
  :user,
  keyword_init: true
)

# Request payload for ProjectRelation#remove.
#
# @!attribute [rw] id
#   @return [String]
ProjectRelationRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# ProjectSearchResult entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] autoArchivedAt
#   @return [Object, nil]
#
# @!attribute [rw] canceledAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String]
#
# @!attribute [rw] completedAt
#   @return [Object, nil]
#
# @!attribute [rw] completedIssueCountHistory
#   @return [Float]
#
# @!attribute [rw] completedScopeHistory
#   @return [Float]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] contentState
#   @return [String, nil]
#
# @!attribute [rw] convertedFromIssue
#   @return [Hash, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] currentProgress
#   @return [Object]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] documentContent
#   @return [Hash, nil]
#
# @!attribute [rw] favorite
#   @return [Hash, nil]
#
# @!attribute [rw] frequencyResolution
#   @return [String]
#
# @!attribute [rw] health
#   @return [String, nil]
#
# @!attribute [rw] healthUpdatedAt
#   @return [Object, nil]
#
# @!attribute [rw] icon
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [String, nil]
#
# @!attribute [rw] inProgressScopeHistory
#   @return [Float]
#
# @!attribute [rw] integrationsSettings
#   @return [Hash, nil]
#
# @!attribute [rw] issueCountHistory
#   @return [Float]
#
# @!attribute [rw] labelIds
#   @return [String]
#
# @!attribute [rw] lastAppliedTemplate
#   @return [Hash, nil]
#
# @!attribute [rw] lastUpdate
#   @return [Hash, nil]
#
# @!attribute [rw] lead
#   @return [Hash, nil]
#
# @!attribute [rw] leadTeam
#   @return [Hash, nil]
#
# @!attribute [rw] metadata
#   @return [Object]
#
# @!attribute [rw] microsoftTeamsChannelId
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] previousIdentifiers
#   @return [String]
#
# @!attribute [rw] priority
#   @return [Integer]
#
# @!attribute [rw] priorityLabel
#   @return [String]
#
# @!attribute [rw] prioritySortOrder
#   @return [Float]
#
# @!attribute [rw] progress
#   @return [Float]
#
# @!attribute [rw] progressHistory
#   @return [Object]
#
# @!attribute [rw] projectUpdateRemindersPausedUntilAt
#   @return [Object, nil]
#
# @!attribute [rw] resourceCount
#   @return [Integer]
#
# @!attribute [rw] scope
#   @return [Float]
#
# @!attribute [rw] scopeHistory
#   @return [Float]
#
# @!attribute [rw] slackChannelId
#   @return [String, nil]
#
# @!attribute [rw] slugId
#   @return [String]
#
# @!attribute [rw] sortOrder
#   @return [Float]
#
# @!attribute [rw] startDate
#   @return [Object, nil]
#
# @!attribute [rw] startDateResolution
#   @return [String, nil]
#
# @!attribute [rw] startedAt
#   @return [Object, nil]
#
# @!attribute [rw] status
#   @return [Hash, nil]
#
# @!attribute [rw] targetDate
#   @return [Object, nil]
#
# @!attribute [rw] targetDateResolution
#   @return [String, nil]
#
# @!attribute [rw] trashed
#   @return [Boolean, nil]
#
# @!attribute [rw] updateReminderFrequency
#   @return [Float, nil]
#
# @!attribute [rw] updateReminderFrequencyInWeeks
#   @return [Float, nil]
#
# @!attribute [rw] updateRemindersDay
#   @return [String, nil]
#
# @!attribute [rw] updateRemindersHour
#   @return [Float, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String]
ProjectSearchResult = Struct.new(
  :archivedAt,
  :autoArchivedAt,
  :canceledAt,
  :color,
  :completedAt,
  :completedIssueCountHistory,
  :completedScopeHistory,
  :content,
  :contentState,
  :convertedFromIssue,
  :createdAt,
  :creator,
  :currentProgress,
  :description,
  :documentContent,
  :favorite,
  :frequencyResolution,
  :health,
  :healthUpdatedAt,
  :icon,
  :id,
  :identifier,
  :inProgressScopeHistory,
  :integrationsSettings,
  :issueCountHistory,
  :labelIds,
  :lastAppliedTemplate,
  :lastUpdate,
  :lead,
  :leadTeam,
  :metadata,
  :microsoftTeamsChannelId,
  :name,
  :previousIdentifiers,
  :priority,
  :priorityLabel,
  :prioritySortOrder,
  :progress,
  :progressHistory,
  :projectUpdateRemindersPausedUntilAt,
  :resourceCount,
  :scope,
  :scopeHistory,
  :slackChannelId,
  :slugId,
  :sortOrder,
  :startDate,
  :startDateResolution,
  :startedAt,
  :status,
  :targetDate,
  :targetDateResolution,
  :trashed,
  :updateReminderFrequency,
  :updateReminderFrequencyInWeeks,
  :updateRemindersDay,
  :updateRemindersHour,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for ProjectSearchResult#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] include_comment
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
#
# @!attribute [rw] team_id
#   @return [String, nil]
#
# @!attribute [rw] term
#   @return [String]
ProjectSearchResultListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :include_comment,
  :last,
  :order_by,
  :team_id,
  :term,
  keyword_init: true
)

# ProjectStatus entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] indefinite
#   @return [Boolean]
#
# @!attribute [rw] inheritedFrom
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] position
#   @return [Float]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
ProjectStatus = Struct.new(
  :archivedAt,
  :color,
  :createdAt,
  :description,
  :id,
  :indefinite,
  :inheritedFrom,
  :name,
  :position,
  :team,
  :type,
  :updatedAt,
  keyword_init: true
)

# Request payload for ProjectStatus#load.
#
# @!attribute [rw] id
#   @return [String]
ProjectStatusLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ProjectStatus#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
ProjectStatusListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for ProjectStatus#create.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] indefinite
#   @return [Boolean]
#
# @!attribute [rw] inheritedFrom
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] position
#   @return [Float]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
ProjectStatusCreateData = Struct.new(
  :archivedAt,
  :color,
  :createdAt,
  :description,
  :id,
  :indefinite,
  :inheritedFrom,
  :name,
  :position,
  :team,
  :type,
  :updatedAt,
  keyword_init: true
)

# Request payload for ProjectStatus#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] indefinite
#   @return [Boolean, nil]
#
# @!attribute [rw] inheritedFrom
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] position
#   @return [Float, nil]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
ProjectStatusUpdateData = Struct.new(
  :id,
  :archivedAt,
  :color,
  :createdAt,
  :description,
  :indefinite,
  :inheritedFrom,
  :name,
  :position,
  :team,
  :type,
  :updatedAt,
  keyword_init: true
)

# ProjectUpdate entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] body
#   @return [String]
#
# @!attribute [rw] bodyData
#   @return [String]
#
# @!attribute [rw] commentCount
#   @return [Integer]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] diff
#   @return [Object, nil]
#
# @!attribute [rw] diffMarkdown
#   @return [String, nil]
#
# @!attribute [rw] editedAt
#   @return [Object, nil]
#
# @!attribute [rw] health
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] infoSnapshot
#   @return [Object, nil]
#
# @!attribute [rw] isDiffHidden
#   @return [Boolean]
#
# @!attribute [rw] isStale
#   @return [Boolean]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] reactionData
#   @return [Object]
#
# @!attribute [rw] shortSummary
#   @return [String, nil]
#
# @!attribute [rw] slugId
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] user
#   @return [Hash, nil]
ProjectUpdate = Struct.new(
  :archivedAt,
  :body,
  :bodyData,
  :commentCount,
  :createdAt,
  :diff,
  :diffMarkdown,
  :editedAt,
  :health,
  :id,
  :infoSnapshot,
  :isDiffHidden,
  :isStale,
  :project,
  :reactionData,
  :shortSummary,
  :slugId,
  :updatedAt,
  :url,
  :user,
  keyword_init: true
)

# Request payload for ProjectUpdate#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String, nil]
ProjectUpdateLoadMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# Request payload for ProjectUpdate#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
ProjectUpdateListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for ProjectUpdate#create.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] body
#   @return [String]
#
# @!attribute [rw] bodyData
#   @return [String]
#
# @!attribute [rw] commentCount
#   @return [Integer]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] diff
#   @return [Object, nil]
#
# @!attribute [rw] diffMarkdown
#   @return [String, nil]
#
# @!attribute [rw] editedAt
#   @return [Object, nil]
#
# @!attribute [rw] health
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] infoSnapshot
#   @return [Object, nil]
#
# @!attribute [rw] isDiffHidden
#   @return [Boolean]
#
# @!attribute [rw] isStale
#   @return [Boolean]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] reactionData
#   @return [Object]
#
# @!attribute [rw] shortSummary
#   @return [String, nil]
#
# @!attribute [rw] slugId
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] user
#   @return [Hash, nil]
ProjectUpdateCreateData = Struct.new(
  :archivedAt,
  :body,
  :bodyData,
  :commentCount,
  :createdAt,
  :diff,
  :diffMarkdown,
  :editedAt,
  :health,
  :id,
  :infoSnapshot,
  :isDiffHidden,
  :isStale,
  :project,
  :reactionData,
  :shortSummary,
  :slugId,
  :updatedAt,
  :url,
  :user,
  keyword_init: true
)

# Request payload for ProjectUpdate#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] body
#   @return [String, nil]
#
# @!attribute [rw] bodyData
#   @return [String, nil]
#
# @!attribute [rw] commentCount
#   @return [Integer, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] diff
#   @return [Object, nil]
#
# @!attribute [rw] diffMarkdown
#   @return [String, nil]
#
# @!attribute [rw] editedAt
#   @return [Object, nil]
#
# @!attribute [rw] health
#   @return [String, nil]
#
# @!attribute [rw] infoSnapshot
#   @return [Object, nil]
#
# @!attribute [rw] isDiffHidden
#   @return [Boolean, nil]
#
# @!attribute [rw] isStale
#   @return [Boolean, nil]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] reactionData
#   @return [Object, nil]
#
# @!attribute [rw] shortSummary
#   @return [String, nil]
#
# @!attribute [rw] slugId
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
ProjectUpdateUpdateData = Struct.new(
  :id,
  :archivedAt,
  :body,
  :bodyData,
  :commentCount,
  :createdAt,
  :diff,
  :diffMarkdown,
  :editedAt,
  :health,
  :infoSnapshot,
  :isDiffHidden,
  :isStale,
  :project,
  :reactionData,
  :shortSummary,
  :slugId,
  :updatedAt,
  :url,
  :user,
  keyword_init: true
)

# Request payload for ProjectUpdate#remove.
#
# @!attribute [rw] id
#   @return [String]
ProjectUpdateRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# PushSubscription entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
PushSubscription = Struct.new(
  :archivedAt,
  :createdAt,
  :id,
  :updatedAt,
  keyword_init: true
)

# Request payload for PushSubscription#create.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
PushSubscriptionCreateData = Struct.new(
  :archivedAt,
  :createdAt,
  :id,
  :updatedAt,
  keyword_init: true
)

# Request payload for PushSubscription#remove.
#
# @!attribute [rw] id
#   @return [String]
PushSubscriptionRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Reaction entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] comment
#   @return [Hash, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] emoji
#   @return [String]
#
# @!attribute [rw] externalUser
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] initiativeUpdate
#   @return [Hash, nil]
#
# @!attribute [rw] issue
#   @return [Hash, nil]
#
# @!attribute [rw] post
#   @return [Hash, nil]
#
# @!attribute [rw] projectUpdate
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] user
#   @return [Hash, nil]
Reaction = Struct.new(
  :archivedAt,
  :comment,
  :createdAt,
  :emoji,
  :externalUser,
  :id,
  :initiativeUpdate,
  :issue,
  :post,
  :projectUpdate,
  :updatedAt,
  :user,
  keyword_init: true
)

# Request payload for Reaction#create.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] comment
#   @return [Hash, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] emoji
#   @return [String]
#
# @!attribute [rw] externalUser
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] initiativeUpdate
#   @return [Hash, nil]
#
# @!attribute [rw] issue
#   @return [Hash, nil]
#
# @!attribute [rw] post
#   @return [Hash, nil]
#
# @!attribute [rw] projectUpdate
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] user
#   @return [Hash, nil]
ReactionCreateData = Struct.new(
  :archivedAt,
  :comment,
  :createdAt,
  :emoji,
  :externalUser,
  :id,
  :initiativeUpdate,
  :issue,
  :post,
  :projectUpdate,
  :updatedAt,
  :user,
  keyword_init: true
)

# Request payload for Reaction#remove.
#
# @!attribute [rw] id
#   @return [String]
ReactionRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Release entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] autoArchivedAt
#   @return [Object, nil]
#
# @!attribute [rw] canceledAt
#   @return [Object, nil]
#
# @!attribute [rw] commitSha
#   @return [String, nil]
#
# @!attribute [rw] completedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] currentProgress
#   @return [Object]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] issueCount
#   @return [Integer]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pipeline
#   @return [Hash, nil]
#
# @!attribute [rw] progressHistory
#   @return [Object]
#
# @!attribute [rw] releaseNote
#   @return [Hash, nil]
#
# @!attribute [rw] slugId
#   @return [String]
#
# @!attribute [rw] stage
#   @return [Hash, nil]
#
# @!attribute [rw] startDate
#   @return [Object, nil]
#
# @!attribute [rw] startedAt
#   @return [Object, nil]
#
# @!attribute [rw] targetDate
#   @return [Object, nil]
#
# @!attribute [rw] trashed
#   @return [Boolean, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] version
#   @return [String, nil]
Release = Struct.new(
  :archivedAt,
  :autoArchivedAt,
  :canceledAt,
  :commitSha,
  :completedAt,
  :createdAt,
  :creator,
  :currentProgress,
  :description,
  :id,
  :issueCount,
  :name,
  :pipeline,
  :progressHistory,
  :releaseNote,
  :slugId,
  :stage,
  :startDate,
  :startedAt,
  :targetDate,
  :trashed,
  :updatedAt,
  :url,
  :version,
  keyword_init: true
)

# Request payload for Release#load.
#
# @!attribute [rw] id
#   @return [String]
ReleaseLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Release#list.
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] term
#   @return [String, nil]
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
ReleaseListMatch = Struct.new(
  :first,
  :term,
  :after,
  :before,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for Release#create.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] autoArchivedAt
#   @return [Object, nil]
#
# @!attribute [rw] canceledAt
#   @return [Object, nil]
#
# @!attribute [rw] commitSha
#   @return [String, nil]
#
# @!attribute [rw] completedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] currentProgress
#   @return [Object]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] issueCount
#   @return [Integer]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pipeline
#   @return [Hash, nil]
#
# @!attribute [rw] progressHistory
#   @return [Object]
#
# @!attribute [rw] releaseNote
#   @return [Hash, nil]
#
# @!attribute [rw] slugId
#   @return [String]
#
# @!attribute [rw] stage
#   @return [Hash, nil]
#
# @!attribute [rw] startDate
#   @return [Object, nil]
#
# @!attribute [rw] startedAt
#   @return [Object, nil]
#
# @!attribute [rw] targetDate
#   @return [Object, nil]
#
# @!attribute [rw] trashed
#   @return [Boolean, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] version
#   @return [String, nil]
ReleaseCreateData = Struct.new(
  :archivedAt,
  :autoArchivedAt,
  :canceledAt,
  :commitSha,
  :completedAt,
  :createdAt,
  :creator,
  :currentProgress,
  :description,
  :id,
  :issueCount,
  :name,
  :pipeline,
  :progressHistory,
  :releaseNote,
  :slugId,
  :stage,
  :startDate,
  :startedAt,
  :targetDate,
  :trashed,
  :updatedAt,
  :url,
  :version,
  keyword_init: true
)

# Request payload for Release#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] autoArchivedAt
#   @return [Object, nil]
#
# @!attribute [rw] canceledAt
#   @return [Object, nil]
#
# @!attribute [rw] commitSha
#   @return [String, nil]
#
# @!attribute [rw] completedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] currentProgress
#   @return [Object, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] issueCount
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] pipeline
#   @return [Hash, nil]
#
# @!attribute [rw] progressHistory
#   @return [Object, nil]
#
# @!attribute [rw] releaseNote
#   @return [Hash, nil]
#
# @!attribute [rw] slugId
#   @return [String, nil]
#
# @!attribute [rw] stage
#   @return [Hash, nil]
#
# @!attribute [rw] startDate
#   @return [Object, nil]
#
# @!attribute [rw] startedAt
#   @return [Object, nil]
#
# @!attribute [rw] targetDate
#   @return [Object, nil]
#
# @!attribute [rw] trashed
#   @return [Boolean, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
ReleaseUpdateData = Struct.new(
  :id,
  :archivedAt,
  :autoArchivedAt,
  :canceledAt,
  :commitSha,
  :completedAt,
  :createdAt,
  :creator,
  :currentProgress,
  :description,
  :issueCount,
  :name,
  :pipeline,
  :progressHistory,
  :releaseNote,
  :slugId,
  :stage,
  :startDate,
  :startedAt,
  :targetDate,
  :trashed,
  :updatedAt,
  :url,
  :version,
  keyword_init: true
)

# Request payload for Release#remove.
#
# @!attribute [rw] id
#   @return [String]
ReleaseRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# ReleaseNote entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] documentContent
#   @return [Hash, nil]
#
# @!attribute [rw] firstRelease
#   @return [Hash, nil]
#
# @!attribute [rw] generationStatus
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] lastRelease
#   @return [Hash, nil]
#
# @!attribute [rw] pipeline
#   @return [Hash, nil]
#
# @!attribute [rw] releaseCount
#   @return [Integer]
#
# @!attribute [rw] slugId
#   @return [String]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String]
ReleaseNote = Struct.new(
  :archivedAt,
  :createdAt,
  :documentContent,
  :firstRelease,
  :generationStatus,
  :id,
  :lastRelease,
  :pipeline,
  :releaseCount,
  :slugId,
  :title,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for ReleaseNote#load.
#
# @!attribute [rw] id
#   @return [String]
ReleaseNoteLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ReleaseNote#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
ReleaseNoteListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for ReleaseNote#create.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] documentContent
#   @return [Hash, nil]
#
# @!attribute [rw] firstRelease
#   @return [Hash, nil]
#
# @!attribute [rw] generationStatus
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] lastRelease
#   @return [Hash, nil]
#
# @!attribute [rw] pipeline
#   @return [Hash, nil]
#
# @!attribute [rw] releaseCount
#   @return [Integer]
#
# @!attribute [rw] slugId
#   @return [String]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String]
ReleaseNoteCreateData = Struct.new(
  :archivedAt,
  :createdAt,
  :documentContent,
  :firstRelease,
  :generationStatus,
  :id,
  :lastRelease,
  :pipeline,
  :releaseCount,
  :slugId,
  :title,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for ReleaseNote#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] documentContent
#   @return [Hash, nil]
#
# @!attribute [rw] firstRelease
#   @return [Hash, nil]
#
# @!attribute [rw] generationStatus
#   @return [String, nil]
#
# @!attribute [rw] lastRelease
#   @return [Hash, nil]
#
# @!attribute [rw] pipeline
#   @return [Hash, nil]
#
# @!attribute [rw] releaseCount
#   @return [Integer, nil]
#
# @!attribute [rw] slugId
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
ReleaseNoteUpdateData = Struct.new(
  :id,
  :archivedAt,
  :createdAt,
  :documentContent,
  :firstRelease,
  :generationStatus,
  :lastRelease,
  :pipeline,
  :releaseCount,
  :slugId,
  :title,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for ReleaseNote#remove.
#
# @!attribute [rw] id
#   @return [String]
ReleaseNoteRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# ReleasePipeline entity data model.
#
# @!attribute [rw] approximateReleaseCount
#   @return [Integer]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] autoGenerateReleaseNotesOnCompletion
#   @return [Boolean]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] includePathPatterns
#   @return [String]
#
# @!attribute [rw] isProduction
#   @return [Boolean]
#
# @!attribute [rw] latestReleaseNote
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] releaseNoteTemplate
#   @return [Hash, nil]
#
# @!attribute [rw] rolloverIssuesOnCompletion
#   @return [Boolean]
#
# @!attribute [rw] slugId
#   @return [String]
#
# @!attribute [rw] trashed
#   @return [Boolean, nil]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String]
ReleasePipeline = Struct.new(
  :approximateReleaseCount,
  :archivedAt,
  :autoGenerateReleaseNotesOnCompletion,
  :createdAt,
  :id,
  :includePathPatterns,
  :isProduction,
  :latestReleaseNote,
  :name,
  :releaseNoteTemplate,
  :rolloverIssuesOnCompletion,
  :slugId,
  :trashed,
  :type,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for ReleasePipeline#load.
#
# @!attribute [rw] id
#   @return [String]
ReleasePipelineLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ReleasePipeline#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
ReleasePipelineListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for ReleasePipeline#create.
#
# @!attribute [rw] approximateReleaseCount
#   @return [Integer]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] autoGenerateReleaseNotesOnCompletion
#   @return [Boolean]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] includePathPatterns
#   @return [String]
#
# @!attribute [rw] isProduction
#   @return [Boolean]
#
# @!attribute [rw] latestReleaseNote
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] releaseNoteTemplate
#   @return [Hash, nil]
#
# @!attribute [rw] rolloverIssuesOnCompletion
#   @return [Boolean]
#
# @!attribute [rw] slugId
#   @return [String]
#
# @!attribute [rw] trashed
#   @return [Boolean, nil]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String]
ReleasePipelineCreateData = Struct.new(
  :approximateReleaseCount,
  :archivedAt,
  :autoGenerateReleaseNotesOnCompletion,
  :createdAt,
  :id,
  :includePathPatterns,
  :isProduction,
  :latestReleaseNote,
  :name,
  :releaseNoteTemplate,
  :rolloverIssuesOnCompletion,
  :slugId,
  :trashed,
  :type,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for ReleasePipeline#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] approximateReleaseCount
#   @return [Integer, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] autoGenerateReleaseNotesOnCompletion
#   @return [Boolean, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] includePathPatterns
#   @return [String, nil]
#
# @!attribute [rw] isProduction
#   @return [Boolean, nil]
#
# @!attribute [rw] latestReleaseNote
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] releaseNoteTemplate
#   @return [Hash, nil]
#
# @!attribute [rw] rolloverIssuesOnCompletion
#   @return [Boolean, nil]
#
# @!attribute [rw] slugId
#   @return [String, nil]
#
# @!attribute [rw] trashed
#   @return [Boolean, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
ReleasePipelineUpdateData = Struct.new(
  :id,
  :approximateReleaseCount,
  :archivedAt,
  :autoGenerateReleaseNotesOnCompletion,
  :createdAt,
  :includePathPatterns,
  :isProduction,
  :latestReleaseNote,
  :name,
  :releaseNoteTemplate,
  :rolloverIssuesOnCompletion,
  :slugId,
  :trashed,
  :type,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for ReleasePipeline#remove.
#
# @!attribute [rw] id
#   @return [String]
ReleasePipelineRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# ReleaseStage entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] frozen
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pipeline
#   @return [Hash, nil]
#
# @!attribute [rw] position
#   @return [Float]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
ReleaseStage = Struct.new(
  :archivedAt,
  :color,
  :createdAt,
  :frozen,
  :id,
  :name,
  :pipeline,
  :position,
  :type,
  :updatedAt,
  keyword_init: true
)

# Request payload for ReleaseStage#load.
#
# @!attribute [rw] id
#   @return [String]
ReleaseStageLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ReleaseStage#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
ReleaseStageListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for ReleaseStage#create.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] frozen
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pipeline
#   @return [Hash, nil]
#
# @!attribute [rw] position
#   @return [Float]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
ReleaseStageCreateData = Struct.new(
  :archivedAt,
  :color,
  :createdAt,
  :frozen,
  :id,
  :name,
  :pipeline,
  :position,
  :type,
  :updatedAt,
  keyword_init: true
)

# Request payload for ReleaseStage#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] frozen
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] pipeline
#   @return [Hash, nil]
#
# @!attribute [rw] position
#   @return [Float, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
ReleaseStageUpdateData = Struct.new(
  :id,
  :archivedAt,
  :color,
  :createdAt,
  :frozen,
  :name,
  :pipeline,
  :position,
  :type,
  :updatedAt,
  keyword_init: true
)

# Roadmap entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] owner
#   @return [Hash, nil]
#
# @!attribute [rw] slugId
#   @return [String]
#
# @!attribute [rw] sortOrder
#   @return [Float]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String]
Roadmap = Struct.new(
  :archivedAt,
  :color,
  :createdAt,
  :creator,
  :description,
  :id,
  :name,
  :organization,
  :owner,
  :slugId,
  :sortOrder,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for Roadmap#load.
#
# @!attribute [rw] id
#   @return [String]
RoadmapLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Roadmap#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
RoadmapListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for Roadmap#create.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] owner
#   @return [Hash, nil]
#
# @!attribute [rw] slugId
#   @return [String]
#
# @!attribute [rw] sortOrder
#   @return [Float]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String]
RoadmapCreateData = Struct.new(
  :archivedAt,
  :color,
  :createdAt,
  :creator,
  :description,
  :id,
  :name,
  :organization,
  :owner,
  :slugId,
  :sortOrder,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for Roadmap#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] owner
#   @return [Hash, nil]
#
# @!attribute [rw] slugId
#   @return [String, nil]
#
# @!attribute [rw] sortOrder
#   @return [Float, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
RoadmapUpdateData = Struct.new(
  :id,
  :archivedAt,
  :color,
  :createdAt,
  :creator,
  :description,
  :name,
  :organization,
  :owner,
  :slugId,
  :sortOrder,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for Roadmap#remove.
#
# @!attribute [rw] id
#   @return [String]
RoadmapRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# RoadmapToProject entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] roadmap
#   @return [Hash, nil]
#
# @!attribute [rw] sortOrder
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
RoadmapToProject = Struct.new(
  :archivedAt,
  :createdAt,
  :id,
  :project,
  :roadmap,
  :sortOrder,
  :updatedAt,
  keyword_init: true
)

# Request payload for RoadmapToProject#load.
#
# @!attribute [rw] id
#   @return [String]
RoadmapToProjectLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for RoadmapToProject#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
RoadmapToProjectListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for RoadmapToProject#create.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] roadmap
#   @return [Hash, nil]
#
# @!attribute [rw] sortOrder
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
RoadmapToProjectCreateData = Struct.new(
  :archivedAt,
  :createdAt,
  :id,
  :project,
  :roadmap,
  :sortOrder,
  :updatedAt,
  keyword_init: true
)

# Request payload for RoadmapToProject#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] roadmap
#   @return [Hash, nil]
#
# @!attribute [rw] sortOrder
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
RoadmapToProjectUpdateData = Struct.new(
  :id,
  :archivedAt,
  :createdAt,
  :project,
  :roadmap,
  :sortOrder,
  :updatedAt,
  keyword_init: true
)

# Request payload for RoadmapToProject#remove.
#
# @!attribute [rw] id
#   @return [String]
RoadmapToProjectRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# SlaConfiguration entity data model.
#
# @!attribute [rw] conditions
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] removesSla
#   @return [Boolean]
#
# @!attribute [rw] sla
#   @return [Float, nil]
#
# @!attribute [rw] slaType
#   @return [String, nil]
#
# @!attribute [rw] startMode
#   @return [String, nil]
SlaConfiguration = Struct.new(
  :conditions,
  :id,
  :name,
  :removesSla,
  :sla,
  :slaType,
  :startMode,
  keyword_init: true
)

# Request payload for SlaConfiguration#list.
#
# @!attribute [rw] team_id
#   @return [String]
SlaConfigurationListMatch = Struct.new(
  :team_id,
  keyword_init: true
)

# SsoUrlFromEmailResponse entity data model.
#
# @!attribute [rw] samlSsoUrl
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
SsoUrlFromEmailResponse = Struct.new(
  :samlSsoUrl,
  :success,
  keyword_init: true
)

# Request payload for SsoUrlFromEmailResponse#load.
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] is_desktop
#   @return [Boolean, nil]
#
# @!attribute [rw] type
#   @return [Object]
SsoUrlFromEmailResponseLoadMatch = Struct.new(
  :email,
  :is_desktop,
  :type,
  keyword_init: true
)

# Team entity data model.
#
# @!attribute [rw] activeCycle
#   @return [Hash, nil]
#
# @!attribute [rw] aiDiscussionSummariesEnabled
#   @return [Boolean]
#
# @!attribute [rw] aiThreadSummariesEnabled
#   @return [Boolean]
#
# @!attribute [rw] allMembersCanJoin
#   @return [Boolean, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] autoArchivePeriod
#   @return [Float]
#
# @!attribute [rw] autoCloseChildIssues
#   @return [Boolean, nil]
#
# @!attribute [rw] autoCloseParentIssues
#   @return [Boolean, nil]
#
# @!attribute [rw] autoClosePeriod
#   @return [Float, nil]
#
# @!attribute [rw] autoCloseStateId
#   @return [String, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] currentProgress
#   @return [Object]
#
# @!attribute [rw] cycleCalenderUrl
#   @return [String]
#
# @!attribute [rw] cycleCooldownTime
#   @return [Float]
#
# @!attribute [rw] cycleDuration
#   @return [Float]
#
# @!attribute [rw] cycleIssueAutoAssignCompleted
#   @return [Boolean]
#
# @!attribute [rw] cycleIssueAutoAssignStarted
#   @return [Boolean]
#
# @!attribute [rw] cycleLockToActive
#   @return [Boolean]
#
# @!attribute [rw] cycleStartDay
#   @return [Float]
#
# @!attribute [rw] cyclesEnabled
#   @return [Boolean]
#
# @!attribute [rw] defaultIssueEstimate
#   @return [Float]
#
# @!attribute [rw] defaultIssueState
#   @return [Hash, nil]
#
# @!attribute [rw] defaultProjectTemplate
#   @return [Hash, nil]
#
# @!attribute [rw] defaultTemplateForMembers
#   @return [Hash, nil]
#
# @!attribute [rw] defaultTemplateForNonMembers
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] displayName
#   @return [String]
#
# @!attribute [rw] groupIssueHistory
#   @return [Boolean]
#
# @!attribute [rw] icon
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] inheritIssueEstimation
#   @return [Boolean]
#
# @!attribute [rw] inheritProjectStatuses
#   @return [Boolean]
#
# @!attribute [rw] inheritSlackAutoCreateProjectChannel
#   @return [Boolean]
#
# @!attribute [rw] inheritWorkflowStatuses
#   @return [Boolean]
#
# @!attribute [rw] initiativesEnabled
#   @return [Boolean]
#
# @!attribute [rw] integrationsSettings
#   @return [Hash, nil]
#
# @!attribute [rw] issueCount
#   @return [Integer]
#
# @!attribute [rw] issueEstimationAllowZero
#   @return [Boolean]
#
# @!attribute [rw] issueEstimationExtended
#   @return [Boolean]
#
# @!attribute [rw] issueEstimationType
#   @return [String]
#
# @!attribute [rw] joinByDefault
#   @return [Boolean, nil]
#
# @!attribute [rw] key
#   @return [String]
#
# @!attribute [rw] ledInitiativeCount
#   @return [Integer]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] parent
#   @return [Hash, nil]
#
# @!attribute [rw] progressHistory
#   @return [Object]
#
# @!attribute [rw] requirePriorityToLeaveTriage
#   @return [Boolean]
#
# @!attribute [rw] restrictedBy
#   @return [Hash, nil]
#
# @!attribute [rw] restrictedById
#   @return [String, nil]
#
# @!attribute [rw] retiredAt
#   @return [Object, nil]
#
# @!attribute [rw] scimGroupName
#   @return [String, nil]
#
# @!attribute [rw] scimManaged
#   @return [Boolean]
#
# @!attribute [rw] securitySettings
#   @return [Object]
#
# @!attribute [rw] setIssueSortOrderOnStateChange
#   @return [String]
#
# @!attribute [rw] slackAutoCreateProjectChannel
#   @return [Boolean, nil]
#
# @!attribute [rw] timezone
#   @return [String]
#
# @!attribute [rw] triageEnabled
#   @return [Boolean]
#
# @!attribute [rw] triageIssueState
#   @return [Hash, nil]
#
# @!attribute [rw] triageResponsibility
#   @return [Hash, nil]
#
# @!attribute [rw] upcomingCycleCount
#   @return [Float]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] visibility
#   @return [String]
Team = Struct.new(
  :activeCycle,
  :aiDiscussionSummariesEnabled,
  :aiThreadSummariesEnabled,
  :allMembersCanJoin,
  :archivedAt,
  :autoArchivePeriod,
  :autoCloseChildIssues,
  :autoCloseParentIssues,
  :autoClosePeriod,
  :autoCloseStateId,
  :color,
  :createdAt,
  :currentProgress,
  :cycleCalenderUrl,
  :cycleCooldownTime,
  :cycleDuration,
  :cycleIssueAutoAssignCompleted,
  :cycleIssueAutoAssignStarted,
  :cycleLockToActive,
  :cycleStartDay,
  :cyclesEnabled,
  :defaultIssueEstimate,
  :defaultIssueState,
  :defaultProjectTemplate,
  :defaultTemplateForMembers,
  :defaultTemplateForNonMembers,
  :description,
  :displayName,
  :groupIssueHistory,
  :icon,
  :id,
  :inheritIssueEstimation,
  :inheritProjectStatuses,
  :inheritSlackAutoCreateProjectChannel,
  :inheritWorkflowStatuses,
  :initiativesEnabled,
  :integrationsSettings,
  :issueCount,
  :issueEstimationAllowZero,
  :issueEstimationExtended,
  :issueEstimationType,
  :joinByDefault,
  :key,
  :ledInitiativeCount,
  :name,
  :organization,
  :parent,
  :progressHistory,
  :requirePriorityToLeaveTriage,
  :restrictedBy,
  :restrictedById,
  :retiredAt,
  :scimGroupName,
  :scimManaged,
  :securitySettings,
  :setIssueSortOrderOnStateChange,
  :slackAutoCreateProjectChannel,
  :timezone,
  :triageEnabled,
  :triageIssueState,
  :triageResponsibility,
  :upcomingCycleCount,
  :updatedAt,
  :visibility,
  keyword_init: true
)

# Request payload for Team#load.
#
# @!attribute [rw] id
#   @return [String]
TeamLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Team#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
TeamListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for Team#create.
#
# @!attribute [rw] copy_settings_from_team_id
#   @return [String, nil]
#
# @!attribute [rw] activeCycle
#   @return [Hash, nil]
#
# @!attribute [rw] aiDiscussionSummariesEnabled
#   @return [Boolean]
#
# @!attribute [rw] aiThreadSummariesEnabled
#   @return [Boolean]
#
# @!attribute [rw] allMembersCanJoin
#   @return [Boolean, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] autoArchivePeriod
#   @return [Float]
#
# @!attribute [rw] autoCloseChildIssues
#   @return [Boolean, nil]
#
# @!attribute [rw] autoCloseParentIssues
#   @return [Boolean, nil]
#
# @!attribute [rw] autoClosePeriod
#   @return [Float, nil]
#
# @!attribute [rw] autoCloseStateId
#   @return [String, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] currentProgress
#   @return [Object]
#
# @!attribute [rw] cycleCalenderUrl
#   @return [String]
#
# @!attribute [rw] cycleCooldownTime
#   @return [Float]
#
# @!attribute [rw] cycleDuration
#   @return [Float]
#
# @!attribute [rw] cycleIssueAutoAssignCompleted
#   @return [Boolean]
#
# @!attribute [rw] cycleIssueAutoAssignStarted
#   @return [Boolean]
#
# @!attribute [rw] cycleLockToActive
#   @return [Boolean]
#
# @!attribute [rw] cycleStartDay
#   @return [Float]
#
# @!attribute [rw] cyclesEnabled
#   @return [Boolean]
#
# @!attribute [rw] defaultIssueEstimate
#   @return [Float]
#
# @!attribute [rw] defaultIssueState
#   @return [Hash, nil]
#
# @!attribute [rw] defaultProjectTemplate
#   @return [Hash, nil]
#
# @!attribute [rw] defaultTemplateForMembers
#   @return [Hash, nil]
#
# @!attribute [rw] defaultTemplateForNonMembers
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] displayName
#   @return [String]
#
# @!attribute [rw] groupIssueHistory
#   @return [Boolean]
#
# @!attribute [rw] icon
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] inheritIssueEstimation
#   @return [Boolean]
#
# @!attribute [rw] inheritProjectStatuses
#   @return [Boolean]
#
# @!attribute [rw] inheritSlackAutoCreateProjectChannel
#   @return [Boolean]
#
# @!attribute [rw] inheritWorkflowStatuses
#   @return [Boolean]
#
# @!attribute [rw] initiativesEnabled
#   @return [Boolean]
#
# @!attribute [rw] integrationsSettings
#   @return [Hash, nil]
#
# @!attribute [rw] issueCount
#   @return [Integer]
#
# @!attribute [rw] issueEstimationAllowZero
#   @return [Boolean]
#
# @!attribute [rw] issueEstimationExtended
#   @return [Boolean]
#
# @!attribute [rw] issueEstimationType
#   @return [String]
#
# @!attribute [rw] joinByDefault
#   @return [Boolean, nil]
#
# @!attribute [rw] key
#   @return [String]
#
# @!attribute [rw] ledInitiativeCount
#   @return [Integer]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] parent
#   @return [Hash, nil]
#
# @!attribute [rw] progressHistory
#   @return [Object]
#
# @!attribute [rw] requirePriorityToLeaveTriage
#   @return [Boolean]
#
# @!attribute [rw] restrictedBy
#   @return [Hash, nil]
#
# @!attribute [rw] restrictedById
#   @return [String, nil]
#
# @!attribute [rw] retiredAt
#   @return [Object, nil]
#
# @!attribute [rw] scimGroupName
#   @return [String, nil]
#
# @!attribute [rw] scimManaged
#   @return [Boolean]
#
# @!attribute [rw] securitySettings
#   @return [Object]
#
# @!attribute [rw] setIssueSortOrderOnStateChange
#   @return [String]
#
# @!attribute [rw] slackAutoCreateProjectChannel
#   @return [Boolean, nil]
#
# @!attribute [rw] timezone
#   @return [String]
#
# @!attribute [rw] triageEnabled
#   @return [Boolean]
#
# @!attribute [rw] triageIssueState
#   @return [Hash, nil]
#
# @!attribute [rw] triageResponsibility
#   @return [Hash, nil]
#
# @!attribute [rw] upcomingCycleCount
#   @return [Float]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] visibility
#   @return [String]
TeamCreateData = Struct.new(
  :copy_settings_from_team_id,
  :activeCycle,
  :aiDiscussionSummariesEnabled,
  :aiThreadSummariesEnabled,
  :allMembersCanJoin,
  :archivedAt,
  :autoArchivePeriod,
  :autoCloseChildIssues,
  :autoCloseParentIssues,
  :autoClosePeriod,
  :autoCloseStateId,
  :color,
  :createdAt,
  :currentProgress,
  :cycleCalenderUrl,
  :cycleCooldownTime,
  :cycleDuration,
  :cycleIssueAutoAssignCompleted,
  :cycleIssueAutoAssignStarted,
  :cycleLockToActive,
  :cycleStartDay,
  :cyclesEnabled,
  :defaultIssueEstimate,
  :defaultIssueState,
  :defaultProjectTemplate,
  :defaultTemplateForMembers,
  :defaultTemplateForNonMembers,
  :description,
  :displayName,
  :groupIssueHistory,
  :icon,
  :id,
  :inheritIssueEstimation,
  :inheritProjectStatuses,
  :inheritSlackAutoCreateProjectChannel,
  :inheritWorkflowStatuses,
  :initiativesEnabled,
  :integrationsSettings,
  :issueCount,
  :issueEstimationAllowZero,
  :issueEstimationExtended,
  :issueEstimationType,
  :joinByDefault,
  :key,
  :ledInitiativeCount,
  :name,
  :organization,
  :parent,
  :progressHistory,
  :requirePriorityToLeaveTriage,
  :restrictedBy,
  :restrictedById,
  :retiredAt,
  :scimGroupName,
  :scimManaged,
  :securitySettings,
  :setIssueSortOrderOnStateChange,
  :slackAutoCreateProjectChannel,
  :timezone,
  :triageEnabled,
  :triageIssueState,
  :triageResponsibility,
  :upcomingCycleCount,
  :updatedAt,
  :visibility,
  keyword_init: true
)

# Request payload for Team#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] activeCycle
#   @return [Hash, nil]
#
# @!attribute [rw] aiDiscussionSummariesEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] aiThreadSummariesEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] allMembersCanJoin
#   @return [Boolean, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] autoArchivePeriod
#   @return [Float, nil]
#
# @!attribute [rw] autoCloseChildIssues
#   @return [Boolean, nil]
#
# @!attribute [rw] autoCloseParentIssues
#   @return [Boolean, nil]
#
# @!attribute [rw] autoClosePeriod
#   @return [Float, nil]
#
# @!attribute [rw] autoCloseStateId
#   @return [String, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] currentProgress
#   @return [Object, nil]
#
# @!attribute [rw] cycleCalenderUrl
#   @return [String, nil]
#
# @!attribute [rw] cycleCooldownTime
#   @return [Float, nil]
#
# @!attribute [rw] cycleDuration
#   @return [Float, nil]
#
# @!attribute [rw] cycleIssueAutoAssignCompleted
#   @return [Boolean, nil]
#
# @!attribute [rw] cycleIssueAutoAssignStarted
#   @return [Boolean, nil]
#
# @!attribute [rw] cycleLockToActive
#   @return [Boolean, nil]
#
# @!attribute [rw] cycleStartDay
#   @return [Float, nil]
#
# @!attribute [rw] cyclesEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] defaultIssueEstimate
#   @return [Float, nil]
#
# @!attribute [rw] defaultIssueState
#   @return [Hash, nil]
#
# @!attribute [rw] defaultProjectTemplate
#   @return [Hash, nil]
#
# @!attribute [rw] defaultTemplateForMembers
#   @return [Hash, nil]
#
# @!attribute [rw] defaultTemplateForNonMembers
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] displayName
#   @return [String, nil]
#
# @!attribute [rw] groupIssueHistory
#   @return [Boolean, nil]
#
# @!attribute [rw] icon
#   @return [String, nil]
#
# @!attribute [rw] inheritIssueEstimation
#   @return [Boolean, nil]
#
# @!attribute [rw] inheritProjectStatuses
#   @return [Boolean, nil]
#
# @!attribute [rw] inheritSlackAutoCreateProjectChannel
#   @return [Boolean, nil]
#
# @!attribute [rw] inheritWorkflowStatuses
#   @return [Boolean, nil]
#
# @!attribute [rw] initiativesEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] integrationsSettings
#   @return [Hash, nil]
#
# @!attribute [rw] issueCount
#   @return [Integer, nil]
#
# @!attribute [rw] issueEstimationAllowZero
#   @return [Boolean, nil]
#
# @!attribute [rw] issueEstimationExtended
#   @return [Boolean, nil]
#
# @!attribute [rw] issueEstimationType
#   @return [String, nil]
#
# @!attribute [rw] joinByDefault
#   @return [Boolean, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] ledInitiativeCount
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] parent
#   @return [Hash, nil]
#
# @!attribute [rw] progressHistory
#   @return [Object, nil]
#
# @!attribute [rw] requirePriorityToLeaveTriage
#   @return [Boolean, nil]
#
# @!attribute [rw] restrictedBy
#   @return [Hash, nil]
#
# @!attribute [rw] restrictedById
#   @return [String, nil]
#
# @!attribute [rw] retiredAt
#   @return [Object, nil]
#
# @!attribute [rw] scimGroupName
#   @return [String, nil]
#
# @!attribute [rw] scimManaged
#   @return [Boolean, nil]
#
# @!attribute [rw] securitySettings
#   @return [Object, nil]
#
# @!attribute [rw] setIssueSortOrderOnStateChange
#   @return [String, nil]
#
# @!attribute [rw] slackAutoCreateProjectChannel
#   @return [Boolean, nil]
#
# @!attribute [rw] timezone
#   @return [String, nil]
#
# @!attribute [rw] triageEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] triageIssueState
#   @return [Hash, nil]
#
# @!attribute [rw] triageResponsibility
#   @return [Hash, nil]
#
# @!attribute [rw] upcomingCycleCount
#   @return [Float, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] visibility
#   @return [String, nil]
TeamUpdateData = Struct.new(
  :id,
  :activeCycle,
  :aiDiscussionSummariesEnabled,
  :aiThreadSummariesEnabled,
  :allMembersCanJoin,
  :archivedAt,
  :autoArchivePeriod,
  :autoCloseChildIssues,
  :autoCloseParentIssues,
  :autoClosePeriod,
  :autoCloseStateId,
  :color,
  :createdAt,
  :currentProgress,
  :cycleCalenderUrl,
  :cycleCooldownTime,
  :cycleDuration,
  :cycleIssueAutoAssignCompleted,
  :cycleIssueAutoAssignStarted,
  :cycleLockToActive,
  :cycleStartDay,
  :cyclesEnabled,
  :defaultIssueEstimate,
  :defaultIssueState,
  :defaultProjectTemplate,
  :defaultTemplateForMembers,
  :defaultTemplateForNonMembers,
  :description,
  :displayName,
  :groupIssueHistory,
  :icon,
  :inheritIssueEstimation,
  :inheritProjectStatuses,
  :inheritSlackAutoCreateProjectChannel,
  :inheritWorkflowStatuses,
  :initiativesEnabled,
  :integrationsSettings,
  :issueCount,
  :issueEstimationAllowZero,
  :issueEstimationExtended,
  :issueEstimationType,
  :joinByDefault,
  :key,
  :ledInitiativeCount,
  :name,
  :organization,
  :parent,
  :progressHistory,
  :requirePriorityToLeaveTriage,
  :restrictedBy,
  :restrictedById,
  :retiredAt,
  :scimGroupName,
  :scimManaged,
  :securitySettings,
  :setIssueSortOrderOnStateChange,
  :slackAutoCreateProjectChannel,
  :timezone,
  :triageEnabled,
  :triageIssueState,
  :triageResponsibility,
  :upcomingCycleCount,
  :updatedAt,
  :visibility,
  keyword_init: true
)

# Request payload for Team#remove.
#
# @!attribute [rw] id
#   @return [String]
TeamRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# TeamMembership entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] owner
#   @return [Boolean]
#
# @!attribute [rw] sortOrder
#   @return [Float]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] user
#   @return [Hash, nil]
TeamMembership = Struct.new(
  :archivedAt,
  :createdAt,
  :id,
  :owner,
  :sortOrder,
  :team,
  :updatedAt,
  :user,
  keyword_init: true
)

# Request payload for TeamMembership#load.
#
# @!attribute [rw] id
#   @return [String]
TeamMembershipLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for TeamMembership#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
TeamMembershipListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for TeamMembership#create.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] owner
#   @return [Boolean]
#
# @!attribute [rw] sortOrder
#   @return [Float]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] user
#   @return [Hash, nil]
TeamMembershipCreateData = Struct.new(
  :archivedAt,
  :createdAt,
  :id,
  :owner,
  :sortOrder,
  :team,
  :updatedAt,
  :user,
  keyword_init: true
)

# Request payload for TeamMembership#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] owner
#   @return [Boolean, nil]
#
# @!attribute [rw] sortOrder
#   @return [Float, nil]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
TeamMembershipUpdateData = Struct.new(
  :id,
  :archivedAt,
  :createdAt,
  :owner,
  :sortOrder,
  :team,
  :updatedAt,
  :user,
  keyword_init: true
)

# Request payload for TeamMembership#remove.
#
# @!attribute [rw] also_leave_parent_team
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String]
TeamMembershipRemoveMatch = Struct.new(
  :also_leave_parent_team,
  :id,
  keyword_init: true
)

# Template entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] hasFormFields
#   @return [Boolean]
#
# @!attribute [rw] icon
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] inheritedFrom
#   @return [Hash, nil]
#
# @!attribute [rw] lastAppliedAt
#   @return [Object, nil]
#
# @!attribute [rw] lastUpdatedBy
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] pipeline
#   @return [Hash, nil]
#
# @!attribute [rw] sortOrder
#   @return [Float]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] templateData
#   @return [Object]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
Template = Struct.new(
  :archivedAt,
  :color,
  :content,
  :createdAt,
  :creator,
  :description,
  :hasFormFields,
  :icon,
  :id,
  :inheritedFrom,
  :lastAppliedAt,
  :lastUpdatedBy,
  :name,
  :organization,
  :pipeline,
  :sortOrder,
  :team,
  :templateData,
  :type,
  :updatedAt,
  keyword_init: true
)

# Request payload for Template#load.
#
# @!attribute [rw] id
#   @return [String]
TemplateLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Template#list.
#
# @!attribute [rw] integration_type
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
TemplateListMatch = Struct.new(
  :integration_type,
  :first,
  :include_archived,
  keyword_init: true
)

# Request payload for Template#create.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] hasFormFields
#   @return [Boolean]
#
# @!attribute [rw] icon
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] inheritedFrom
#   @return [Hash, nil]
#
# @!attribute [rw] lastAppliedAt
#   @return [Object, nil]
#
# @!attribute [rw] lastUpdatedBy
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] pipeline
#   @return [Hash, nil]
#
# @!attribute [rw] sortOrder
#   @return [Float]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] templateData
#   @return [Object]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
TemplateCreateData = Struct.new(
  :archivedAt,
  :color,
  :content,
  :createdAt,
  :creator,
  :description,
  :hasFormFields,
  :icon,
  :id,
  :inheritedFrom,
  :lastAppliedAt,
  :lastUpdatedBy,
  :name,
  :organization,
  :pipeline,
  :sortOrder,
  :team,
  :templateData,
  :type,
  :updatedAt,
  keyword_init: true
)

# Request payload for Template#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] hasFormFields
#   @return [Boolean, nil]
#
# @!attribute [rw] icon
#   @return [String, nil]
#
# @!attribute [rw] inheritedFrom
#   @return [Hash, nil]
#
# @!attribute [rw] lastAppliedAt
#   @return [Object, nil]
#
# @!attribute [rw] lastUpdatedBy
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] pipeline
#   @return [Hash, nil]
#
# @!attribute [rw] sortOrder
#   @return [Float, nil]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] templateData
#   @return [Object, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
TemplateUpdateData = Struct.new(
  :id,
  :archivedAt,
  :color,
  :content,
  :createdAt,
  :creator,
  :description,
  :hasFormFields,
  :icon,
  :inheritedFrom,
  :lastAppliedAt,
  :lastUpdatedBy,
  :name,
  :organization,
  :pipeline,
  :sortOrder,
  :team,
  :templateData,
  :type,
  :updatedAt,
  keyword_init: true
)

# Request payload for Template#remove.
#
# @!attribute [rw] id
#   @return [String]
TemplateRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# TimeSchedule entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] externalId
#   @return [String, nil]
#
# @!attribute [rw] externalUrl
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] integration
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
TimeSchedule = Struct.new(
  :archivedAt,
  :createdAt,
  :externalId,
  :externalUrl,
  :id,
  :integration,
  :name,
  :organization,
  :updatedAt,
  keyword_init: true
)

# Request payload for TimeSchedule#load.
#
# @!attribute [rw] id
#   @return [String]
TimeScheduleLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for TimeSchedule#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
TimeScheduleListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for TimeSchedule#create.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] externalId
#   @return [String, nil]
#
# @!attribute [rw] externalUrl
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] integration
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
TimeScheduleCreateData = Struct.new(
  :archivedAt,
  :createdAt,
  :externalId,
  :externalUrl,
  :id,
  :integration,
  :name,
  :organization,
  :updatedAt,
  keyword_init: true
)

# Request payload for TimeSchedule#update.
#
# @!attribute [rw] external_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] externalId
#   @return [String, nil]
#
# @!attribute [rw] externalUrl
#   @return [String, nil]
#
# @!attribute [rw] integration
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
TimeScheduleUpdateData = Struct.new(
  :external_id,
  :id,
  :archivedAt,
  :createdAt,
  :externalId,
  :externalUrl,
  :integration,
  :name,
  :organization,
  :updatedAt,
  keyword_init: true
)

# Request payload for TimeSchedule#remove.
#
# @!attribute [rw] id
#   @return [String]
TimeScheduleRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# TriageResponsibility entity data model.
#
# @!attribute [rw] action
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] currentUser
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] timeSchedule
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
TriageResponsibility = Struct.new(
  :action,
  :archivedAt,
  :createdAt,
  :currentUser,
  :id,
  :team,
  :timeSchedule,
  :updatedAt,
  keyword_init: true
)

# Request payload for TriageResponsibility#load.
#
# @!attribute [rw] id
#   @return [String]
TriageResponsibilityLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for TriageResponsibility#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
TriageResponsibilityListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for TriageResponsibility#create.
#
# @!attribute [rw] action
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] currentUser
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] timeSchedule
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
TriageResponsibilityCreateData = Struct.new(
  :action,
  :archivedAt,
  :createdAt,
  :currentUser,
  :id,
  :team,
  :timeSchedule,
  :updatedAt,
  keyword_init: true
)

# Request payload for TriageResponsibility#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] action
#   @return [String, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] currentUser
#   @return [Hash, nil]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] timeSchedule
#   @return [Hash, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
TriageResponsibilityUpdateData = Struct.new(
  :id,
  :action,
  :archivedAt,
  :createdAt,
  :currentUser,
  :team,
  :timeSchedule,
  :updatedAt,
  keyword_init: true
)

# Request payload for TriageResponsibility#remove.
#
# @!attribute [rw] id
#   @return [String]
TriageResponsibilityRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# UploadFile entity data model.
#
# @!attribute [rw] assetUrl
#   @return [String]
#
# @!attribute [rw] contentType
#   @return [String]
#
# @!attribute [rw] filename
#   @return [String]
#
# @!attribute [rw] metaData
#   @return [Object, nil]
#
# @!attribute [rw] size
#   @return [Integer]
#
# @!attribute [rw] uploadUrl
#   @return [String]
UploadFile = Struct.new(
  :assetUrl,
  :contentType,
  :filename,
  :metaData,
  :size,
  :uploadUrl,
  keyword_init: true
)

# Request payload for UploadFile#create.
#
# @!attribute [rw] content_type
#   @return [String]
#
# @!attribute [rw] filename
#   @return [String]
#
# @!attribute [rw] make_public
#   @return [Boolean, nil]
#
# @!attribute [rw] meta_data
#   @return [Object, nil]
#
# @!attribute [rw] size
#   @return [Integer]
#
# @!attribute [rw] assetUrl
#   @return [String]
#
# @!attribute [rw] contentType
#   @return [String]
#
# @!attribute [rw] metaData
#   @return [Object, nil]
#
# @!attribute [rw] uploadUrl
#   @return [String]
UploadFileCreateData = Struct.new(
  :content_type,
  :filename,
  :make_public,
  :meta_data,
  :size,
  :assetUrl,
  :contentType,
  :metaData,
  :uploadUrl,
  keyword_init: true
)

# UsageAlert entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] metadata
#   @return [Object]
#
# @!attribute [rw] resolvedAt
#   @return [Object, nil]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
UsageAlert = Struct.new(
  :archivedAt,
  :createdAt,
  :id,
  :metadata,
  :resolvedAt,
  :type,
  :updatedAt,
  keyword_init: true
)

# Request payload for UsageAlert#load.
#
# @!attribute [rw] id
#   @return [String]
UsageAlertLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for UsageAlert#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
UsageAlertListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# User entity data model.
#
# @!attribute [rw] active
#   @return [Boolean]
#
# @!attribute [rw] admin
#   @return [Boolean]
#
# @!attribute [rw] app
#   @return [Boolean]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] avatarBackgroundColor
#   @return [String]
#
# @!attribute [rw] avatarUrl
#   @return [String, nil]
#
# @!attribute [rw] calendarHash
#   @return [String, nil]
#
# @!attribute [rw] canAccessAnyPublicTeam
#   @return [Boolean]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] createdIssueCount
#   @return [Integer]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] disableReason
#   @return [String, nil]
#
# @!attribute [rw] displayName
#   @return [String]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] gitHubUserId
#   @return [String, nil]
#
# @!attribute [rw] guest
#   @return [Boolean]
#
# @!attribute [rw] hasGitHubCodeAccess
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identityProvider
#   @return [Hash, nil]
#
# @!attribute [rw] initials
#   @return [String]
#
# @!attribute [rw] isAssignable
#   @return [Boolean]
#
# @!attribute [rw] isMe
#   @return [Boolean]
#
# @!attribute [rw] isMentionable
#   @return [Boolean]
#
# @!attribute [rw] lastSeen
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] owner
#   @return [Boolean]
#
# @!attribute [rw] statusEmoji
#   @return [String, nil]
#
# @!attribute [rw] statusLabel
#   @return [String, nil]
#
# @!attribute [rw] statusUntilAt
#   @return [Object, nil]
#
# @!attribute [rw] supportsAgentSessions
#   @return [Boolean]
#
# @!attribute [rw] timezone
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String]
User = Struct.new(
  :active,
  :admin,
  :app,
  :archivedAt,
  :avatarBackgroundColor,
  :avatarUrl,
  :calendarHash,
  :canAccessAnyPublicTeam,
  :createdAt,
  :createdIssueCount,
  :description,
  :disableReason,
  :displayName,
  :email,
  :gitHubUserId,
  :guest,
  :hasGitHubCodeAccess,
  :id,
  :identityProvider,
  :initials,
  :isAssignable,
  :isMe,
  :isMentionable,
  :lastSeen,
  :name,
  :organization,
  :owner,
  :statusEmoji,
  :statusLabel,
  :statusUntilAt,
  :supportsAgentSessions,
  :timezone,
  :title,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for User#load.
#
# @!attribute [rw] id
#   @return [String, nil]
UserLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for User#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] include_disabled
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
UserListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :include_disabled,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for User#create.
#
# @!attribute [rw] code
#   @return [String, nil]
#
# @!attribute [rw] redirect_uri
#   @return [String, nil]
#
# @!attribute [rw] service
#   @return [String, nil]
#
# @!attribute [rw] active
#   @return [Boolean]
#
# @!attribute [rw] admin
#   @return [Boolean]
#
# @!attribute [rw] app
#   @return [Boolean]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] avatarBackgroundColor
#   @return [String]
#
# @!attribute [rw] avatarUrl
#   @return [String, nil]
#
# @!attribute [rw] calendarHash
#   @return [String, nil]
#
# @!attribute [rw] canAccessAnyPublicTeam
#   @return [Boolean]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] createdIssueCount
#   @return [Integer]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] disableReason
#   @return [String, nil]
#
# @!attribute [rw] displayName
#   @return [String]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] gitHubUserId
#   @return [String, nil]
#
# @!attribute [rw] guest
#   @return [Boolean]
#
# @!attribute [rw] hasGitHubCodeAccess
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identityProvider
#   @return [Hash, nil]
#
# @!attribute [rw] initials
#   @return [String]
#
# @!attribute [rw] isAssignable
#   @return [Boolean]
#
# @!attribute [rw] isMe
#   @return [Boolean]
#
# @!attribute [rw] isMentionable
#   @return [Boolean]
#
# @!attribute [rw] lastSeen
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] owner
#   @return [Boolean]
#
# @!attribute [rw] statusEmoji
#   @return [String, nil]
#
# @!attribute [rw] statusLabel
#   @return [String, nil]
#
# @!attribute [rw] statusUntilAt
#   @return [Object, nil]
#
# @!attribute [rw] supportsAgentSessions
#   @return [Boolean]
#
# @!attribute [rw] timezone
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String]
UserCreateData = Struct.new(
  :code,
  :redirect_uri,
  :service,
  :active,
  :admin,
  :app,
  :archivedAt,
  :avatarBackgroundColor,
  :avatarUrl,
  :calendarHash,
  :canAccessAnyPublicTeam,
  :createdAt,
  :createdIssueCount,
  :description,
  :disableReason,
  :displayName,
  :email,
  :gitHubUserId,
  :guest,
  :hasGitHubCodeAccess,
  :id,
  :identityProvider,
  :initials,
  :isAssignable,
  :isMe,
  :isMentionable,
  :lastSeen,
  :name,
  :organization,
  :owner,
  :statusEmoji,
  :statusLabel,
  :statusUntilAt,
  :supportsAgentSessions,
  :timezone,
  :title,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for User#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] admin
#   @return [Boolean, nil]
#
# @!attribute [rw] app
#   @return [Boolean, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] avatarBackgroundColor
#   @return [String, nil]
#
# @!attribute [rw] avatarUrl
#   @return [String, nil]
#
# @!attribute [rw] calendarHash
#   @return [String, nil]
#
# @!attribute [rw] canAccessAnyPublicTeam
#   @return [Boolean, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] createdIssueCount
#   @return [Integer, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] disableReason
#   @return [String, nil]
#
# @!attribute [rw] displayName
#   @return [String, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] gitHubUserId
#   @return [String, nil]
#
# @!attribute [rw] guest
#   @return [Boolean, nil]
#
# @!attribute [rw] hasGitHubCodeAccess
#   @return [Boolean, nil]
#
# @!attribute [rw] identityProvider
#   @return [Hash, nil]
#
# @!attribute [rw] initials
#   @return [String, nil]
#
# @!attribute [rw] isAssignable
#   @return [Boolean, nil]
#
# @!attribute [rw] isMe
#   @return [Boolean, nil]
#
# @!attribute [rw] isMentionable
#   @return [Boolean, nil]
#
# @!attribute [rw] lastSeen
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] organization
#   @return [Hash, nil]
#
# @!attribute [rw] owner
#   @return [Boolean, nil]
#
# @!attribute [rw] statusEmoji
#   @return [String, nil]
#
# @!attribute [rw] statusLabel
#   @return [String, nil]
#
# @!attribute [rw] statusUntilAt
#   @return [Object, nil]
#
# @!attribute [rw] supportsAgentSessions
#   @return [Boolean, nil]
#
# @!attribute [rw] timezone
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
UserUpdateData = Struct.new(
  :id,
  :active,
  :admin,
  :app,
  :archivedAt,
  :avatarBackgroundColor,
  :avatarUrl,
  :calendarHash,
  :canAccessAnyPublicTeam,
  :createdAt,
  :createdIssueCount,
  :description,
  :disableReason,
  :displayName,
  :email,
  :gitHubUserId,
  :guest,
  :hasGitHubCodeAccess,
  :identityProvider,
  :initials,
  :isAssignable,
  :isMe,
  :isMentionable,
  :lastSeen,
  :name,
  :organization,
  :owner,
  :statusEmoji,
  :statusLabel,
  :statusUntilAt,
  :supportsAgentSessions,
  :timezone,
  :title,
  :updatedAt,
  :url,
  keyword_init: true
)

# UserSetting entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] autoAssignToSelf
#   @return [Boolean]
#
# @!attribute [rw] calendarHash
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] feedLastSeenTime
#   @return [Object, nil]
#
# @!attribute [rw] feedSummarySchedule
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] pullRequestMergeStrategyPreference
#   @return [String, nil]
#
# @!attribute [rw] showFullUserNames
#   @return [Boolean]
#
# @!attribute [rw] subscribedToChangelog
#   @return [Boolean]
#
# @!attribute [rw] subscribedToDPA
#   @return [Boolean]
#
# @!attribute [rw] subscribedToInviteAccepted
#   @return [Boolean]
#
# @!attribute [rw] subscribedToPrivacyLegalUpdates
#   @return [Boolean]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] user
#   @return [Hash, nil]
UserSetting = Struct.new(
  :archivedAt,
  :autoAssignToSelf,
  :calendarHash,
  :createdAt,
  :feedLastSeenTime,
  :feedSummarySchedule,
  :id,
  :pullRequestMergeStrategyPreference,
  :showFullUserNames,
  :subscribedToChangelog,
  :subscribedToDPA,
  :subscribedToInviteAccepted,
  :subscribedToPrivacyLegalUpdates,
  :updatedAt,
  :user,
  keyword_init: true
)

# Request payload for UserSetting#load.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] autoAssignToSelf
#   @return [Boolean, nil]
#
# @!attribute [rw] calendarHash
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] feedLastSeenTime
#   @return [Object, nil]
#
# @!attribute [rw] feedSummarySchedule
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] pullRequestMergeStrategyPreference
#   @return [String, nil]
#
# @!attribute [rw] showFullUserNames
#   @return [Boolean, nil]
#
# @!attribute [rw] subscribedToChangelog
#   @return [Boolean, nil]
#
# @!attribute [rw] subscribedToDPA
#   @return [Boolean, nil]
#
# @!attribute [rw] subscribedToInviteAccepted
#   @return [Boolean, nil]
#
# @!attribute [rw] subscribedToPrivacyLegalUpdates
#   @return [Boolean, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
UserSettingLoadMatch = Struct.new(
  :archivedAt,
  :autoAssignToSelf,
  :calendarHash,
  :createdAt,
  :feedLastSeenTime,
  :feedSummarySchedule,
  :id,
  :pullRequestMergeStrategyPreference,
  :showFullUserNames,
  :subscribedToChangelog,
  :subscribedToDPA,
  :subscribedToInviteAccepted,
  :subscribedToPrivacyLegalUpdates,
  :updatedAt,
  :user,
  keyword_init: true
)

# Request payload for UserSetting#create.
#
# @!attribute [rw] category
#   @return [Object]
#
# @!attribute [rw] channel
#   @return [Object]
#
# @!attribute [rw] subscribe
#   @return [Boolean]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] autoAssignToSelf
#   @return [Boolean]
#
# @!attribute [rw] calendarHash
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] feedLastSeenTime
#   @return [Object, nil]
#
# @!attribute [rw] feedSummarySchedule
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] pullRequestMergeStrategyPreference
#   @return [String, nil]
#
# @!attribute [rw] showFullUserNames
#   @return [Boolean]
#
# @!attribute [rw] subscribedToChangelog
#   @return [Boolean]
#
# @!attribute [rw] subscribedToDPA
#   @return [Boolean]
#
# @!attribute [rw] subscribedToInviteAccepted
#   @return [Boolean]
#
# @!attribute [rw] subscribedToPrivacyLegalUpdates
#   @return [Boolean]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] user
#   @return [Hash, nil]
UserSettingCreateData = Struct.new(
  :category,
  :channel,
  :subscribe,
  :archivedAt,
  :autoAssignToSelf,
  :calendarHash,
  :createdAt,
  :feedLastSeenTime,
  :feedSummarySchedule,
  :id,
  :pullRequestMergeStrategyPreference,
  :showFullUserNames,
  :subscribedToChangelog,
  :subscribedToDPA,
  :subscribedToInviteAccepted,
  :subscribedToPrivacyLegalUpdates,
  :updatedAt,
  :user,
  keyword_init: true
)

# Request payload for UserSetting#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] autoAssignToSelf
#   @return [Boolean, nil]
#
# @!attribute [rw] calendarHash
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] feedLastSeenTime
#   @return [Object, nil]
#
# @!attribute [rw] feedSummarySchedule
#   @return [String, nil]
#
# @!attribute [rw] pullRequestMergeStrategyPreference
#   @return [String, nil]
#
# @!attribute [rw] showFullUserNames
#   @return [Boolean, nil]
#
# @!attribute [rw] subscribedToChangelog
#   @return [Boolean, nil]
#
# @!attribute [rw] subscribedToDPA
#   @return [Boolean, nil]
#
# @!attribute [rw] subscribedToInviteAccepted
#   @return [Boolean, nil]
#
# @!attribute [rw] subscribedToPrivacyLegalUpdates
#   @return [Boolean, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
UserSettingUpdateData = Struct.new(
  :id,
  :archivedAt,
  :autoAssignToSelf,
  :calendarHash,
  :createdAt,
  :feedLastSeenTime,
  :feedSummarySchedule,
  :pullRequestMergeStrategyPreference,
  :showFullUserNames,
  :subscribedToChangelog,
  :subscribedToDPA,
  :subscribedToInviteAccepted,
  :subscribedToPrivacyLegalUpdates,
  :updatedAt,
  :user,
  keyword_init: true
)

# ViewPreference entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] viewType
#   @return [String]
ViewPreference = Struct.new(
  :archivedAt,
  :createdAt,
  :id,
  :type,
  :updatedAt,
  :viewType,
  keyword_init: true
)

# Request payload for ViewPreference#load.
#
# @!attribute [rw] view_type
#   @return [Object]
ViewPreferenceLoadMatch = Struct.new(
  :view_type,
  keyword_init: true
)

# Request payload for ViewPreference#create.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] viewType
#   @return [String]
ViewPreferenceCreateData = Struct.new(
  :archivedAt,
  :createdAt,
  :id,
  :type,
  :updatedAt,
  :viewType,
  keyword_init: true
)

# Request payload for ViewPreference#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] viewType
#   @return [String, nil]
ViewPreferenceUpdateData = Struct.new(
  :id,
  :archivedAt,
  :createdAt,
  :type,
  :updatedAt,
  :viewType,
  keyword_init: true
)

# Request payload for ViewPreference#remove.
#
# @!attribute [rw] id
#   @return [String]
ViewPreferenceRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Webhook entity data model.
#
# @!attribute [rw] allPublicTeams
#   @return [Boolean]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] label
#   @return [String, nil]
#
# @!attribute [rw] resourceTypes
#   @return [String]
#
# @!attribute [rw] secret
#   @return [String, nil]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] teamIds
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String, nil]
Webhook = Struct.new(
  :allPublicTeams,
  :archivedAt,
  :createdAt,
  :creator,
  :enabled,
  :id,
  :label,
  :resourceTypes,
  :secret,
  :team,
  :teamIds,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for Webhook#load.
#
# @!attribute [rw] id
#   @return [String]
WebhookLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Webhook#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
WebhookListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for Webhook#create.
#
# @!attribute [rw] allPublicTeams
#   @return [Boolean]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] label
#   @return [String, nil]
#
# @!attribute [rw] resourceTypes
#   @return [String]
#
# @!attribute [rw] secret
#   @return [String, nil]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] teamIds
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String, nil]
WebhookCreateData = Struct.new(
  :allPublicTeams,
  :archivedAt,
  :createdAt,
  :creator,
  :enabled,
  :id,
  :label,
  :resourceTypes,
  :secret,
  :team,
  :teamIds,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for Webhook#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] allPublicTeams
#   @return [Boolean, nil]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] label
#   @return [String, nil]
#
# @!attribute [rw] resourceTypes
#   @return [String, nil]
#
# @!attribute [rw] secret
#   @return [String, nil]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] teamIds
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
WebhookUpdateData = Struct.new(
  :id,
  :allPublicTeams,
  :archivedAt,
  :createdAt,
  :creator,
  :enabled,
  :label,
  :resourceTypes,
  :secret,
  :team,
  :teamIds,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for Webhook#remove.
#
# @!attribute [rw] id
#   @return [String]
WebhookRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# WebhookFailureEvent entity data model.
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] executionId
#   @return [String]
#
# @!attribute [rw] httpStatus
#   @return [Float, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] responseOrError
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] webhook
#   @return [Hash, nil]
WebhookFailureEvent = Struct.new(
  :createdAt,
  :executionId,
  :httpStatus,
  :id,
  :responseOrError,
  :url,
  :webhook,
  keyword_init: true
)

# Request payload for WebhookFailureEvent#list.
#
# @!attribute [rw] oauth_client_id
#   @return [String, nil]
#
# @!attribute [rw] webhook_id
#   @return [String, nil]
WebhookFailureEventListMatch = Struct.new(
  :oauth_client_id,
  :webhook_id,
  keyword_init: true
)

# WorkflowState entity data model.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] inheritedFrom
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] position
#   @return [Float]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
WorkflowState = Struct.new(
  :archivedAt,
  :color,
  :createdAt,
  :description,
  :id,
  :inheritedFrom,
  :name,
  :position,
  :team,
  :type,
  :updatedAt,
  keyword_init: true
)

# Request payload for WorkflowState#load.
#
# @!attribute [rw] id
#   @return [String]
WorkflowStateLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for WorkflowState#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] before
#   @return [String, nil]
#
# @!attribute [rw] first
#   @return [Integer, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] last
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [Object, nil]
WorkflowStateListMatch = Struct.new(
  :after,
  :before,
  :first,
  :include_archived,
  :last,
  :order_by,
  keyword_init: true
)

# Request payload for WorkflowState#create.
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] inheritedFrom
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] position
#   @return [Float]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [Object]
WorkflowStateCreateData = Struct.new(
  :archivedAt,
  :color,
  :createdAt,
  :description,
  :id,
  :inheritedFrom,
  :name,
  :position,
  :team,
  :type,
  :updatedAt,
  keyword_init: true
)

# Request payload for WorkflowState#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] archivedAt
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] inheritedFrom
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] position
#   @return [Float, nil]
#
# @!attribute [rw] team
#   @return [Hash, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
WorkflowStateUpdateData = Struct.new(
  :id,
  :archivedAt,
  :color,
  :createdAt,
  :description,
  :inheritedFrom,
  :name,
  :position,
  :team,
  :type,
  :updatedAt,
  keyword_init: true
)

