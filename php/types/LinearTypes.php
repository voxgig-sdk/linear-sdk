<?php
declare(strict_types=1);

// Typed models for the Linear SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** AccessKeyRelease entity data model. */
class AccessKeyRelease
{
    public mixed $archivedAt = null;
    public ?string $commitSha = null;
    public mixed $completedAt = null;
    public mixed $createdAt;
    public string $id;
    public string $name;
    public string $url;
    public ?string $version = null;
}

/** Request payload for AccessKeyRelease#load. */
class AccessKeyReleaseLoadMatch
{
    public mixed $archivedAt = null;
    public ?string $commitSha = null;
    public mixed $completedAt = null;
    public mixed $createdAt = null;
    public string $id;
    public ?string $name = null;
    public ?string $url = null;
    public ?string $version = null;
}

/** Request payload for AccessKeyRelease#list. */
class AccessKeyReleaseListMatch
{
    public ?int $limit = null;
}

/** Request payload for AccessKeyRelease#create. */
class AccessKeyReleaseCreateData
{
    public mixed $archivedAt = null;
    public ?string $commitSha = null;
    public mixed $completedAt = null;
    public mixed $createdAt;
    public string $id;
    public string $name;
    public string $url;
    public ?string $version = null;
}

/** AccessKeyReleasePipeline entity data model. */
class AccessKeyReleasePipeline
{
    public string $id;
    public string $includePathPatterns;
}

/** Request payload for AccessKeyReleasePipeline#load. */
class AccessKeyReleasePipelineLoadMatch
{
    public string $id;
    public ?string $includePathPatterns = null;
}

/** AgentActivity entity data model. */
class AgentActivity
{
    public ?array $agentSession = null;
    public mixed $archivedAt = null;
    public mixed $contextualMetadata = null;
    public mixed $createdAt;
    public bool $ephemeral;
    public ?string $executionSkippedReason = null;
    public string $id;
    public bool $queued;
    public mixed $sentAt = null;
    public ?string $signal = null;
    public mixed $signalMetadata = null;
    public ?array $sourceComment = null;
    public mixed $sourceMetadata = null;
    public mixed $updatedAt;
    public ?array $user = null;
}

/** Request payload for AgentActivity#load. */
class AgentActivityLoadMatch
{
    public string $id;
}

/** Request payload for AgentActivity#list. */
class AgentActivityListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for AgentActivity#create. */
class AgentActivityCreateData
{
    public ?array $agentSession = null;
    public mixed $archivedAt = null;
    public mixed $contextualMetadata = null;
    public mixed $createdAt;
    public bool $ephemeral;
    public ?string $executionSkippedReason = null;
    public string $id;
    public bool $queued;
    public mixed $sentAt = null;
    public ?string $signal = null;
    public mixed $signalMetadata = null;
    public ?array $sourceComment = null;
    public mixed $sourceMetadata = null;
    public mixed $updatedAt;
    public ?array $user = null;
}

/** Request payload for AgentActivity#update. */
class AgentActivityUpdateData
{
    public string $id;
    public ?array $agentSession = null;
    public mixed $archivedAt = null;
    public mixed $contextualMetadata = null;
    public mixed $createdAt = null;
    public ?bool $ephemeral = null;
    public ?string $executionSkippedReason = null;
    public ?bool $queued = null;
    public mixed $sentAt = null;
    public ?string $signal = null;
    public mixed $signalMetadata = null;
    public ?array $sourceComment = null;
    public mixed $sourceMetadata = null;
    public mixed $updatedAt = null;
    public ?array $user = null;
}

/** AgentSession entity data model. */
class AgentSession
{
    public ?array $appUser = null;
    public mixed $archivedAt = null;
    public ?string $codingHarnessModelLabel = null;
    public ?array $comment = null;
    public mixed $context;
    public mixed $createdAt;
    public ?array $creator = null;
    public mixed $dismissedAt = null;
    public ?array $dismissedBy = null;
    public mixed $endedAt = null;
    public string $id;
    public ?array $issue = null;
    public mixed $modelSelection = null;
    public mixed $plan = null;
    public ?array $pullRequest = null;
    public string $slugId;
    public ?array $sourceComment = null;
    public mixed $sourceMetadata = null;
    public mixed $startedAt = null;
    public string $status;
    public ?string $summary = null;
    public mixed $updatedAt;
    public ?string $url = null;
}

/** Request payload for AgentSession#load. */
class AgentSessionLoadMatch
{
    public string $id;
}

/** Request payload for AgentSession#list. */
class AgentSessionListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for AgentSession#create. */
class AgentSessionCreateData
{
    public ?string $pull_request_id = null;
    public ?array $appUser = null;
    public mixed $archivedAt = null;
    public ?string $codingHarnessModelLabel = null;
    public ?array $comment = null;
    public mixed $context;
    public mixed $createdAt;
    public ?array $creator = null;
    public mixed $dismissedAt = null;
    public ?array $dismissedBy = null;
    public mixed $endedAt = null;
    public string $id;
    public ?array $issue = null;
    public mixed $modelSelection = null;
    public mixed $plan = null;
    public ?array $pullRequest = null;
    public string $slugId;
    public ?array $sourceComment = null;
    public mixed $sourceMetadata = null;
    public mixed $startedAt = null;
    public string $status;
    public ?string $summary = null;
    public mixed $updatedAt;
    public ?string $url = null;
}

/** Request payload for AgentSession#update. */
class AgentSessionUpdateData
{
    public string $id;
    public ?array $appUser = null;
    public mixed $archivedAt = null;
    public ?string $codingHarnessModelLabel = null;
    public ?array $comment = null;
    public mixed $context = null;
    public mixed $createdAt = null;
    public ?array $creator = null;
    public mixed $dismissedAt = null;
    public ?array $dismissedBy = null;
    public mixed $endedAt = null;
    public ?array $issue = null;
    public mixed $modelSelection = null;
    public mixed $plan = null;
    public ?array $pullRequest = null;
    public ?string $slugId = null;
    public ?array $sourceComment = null;
    public mixed $sourceMetadata = null;
    public mixed $startedAt = null;
    public ?string $status = null;
    public ?string $summary = null;
    public mixed $updatedAt = null;
    public ?string $url = null;
}

/** AgentSkill entity data model. */
class AgentSkill
{
    public mixed $archivedAt = null;
    public string $body;
    public ?string $color = null;
    public mixed $createdAt;
    public ?array $creator = null;
    public ?string $description = null;
    public ?string $icon = null;
    public string $id;
    public ?array $inheritedFrom = null;
    public ?array $lastUpdatedBy = null;
    public mixed $lastUsedAt = null;
    public ?array $owner = null;
    public float $recentUsageCount;
    public bool $shared;
    public string $slugId;
    public ?string $teamId = null;
    public string $title;
    public mixed $updatedAt;
}

/** Request payload for AgentSkill#load. */
class AgentSkillLoadMatch
{
    public string $id;
}

/** Request payload for AgentSkill#list. */
class AgentSkillListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for AgentSkill#create. */
class AgentSkillCreateData
{
    public mixed $archivedAt = null;
    public string $body;
    public ?string $color = null;
    public mixed $createdAt;
    public ?array $creator = null;
    public ?string $description = null;
    public ?string $icon = null;
    public string $id;
    public ?array $inheritedFrom = null;
    public ?array $lastUpdatedBy = null;
    public mixed $lastUsedAt = null;
    public ?array $owner = null;
    public float $recentUsageCount;
    public bool $shared;
    public string $slugId;
    public ?string $teamId = null;
    public string $title;
    public mixed $updatedAt;
}

/** Request payload for AgentSkill#update. */
class AgentSkillUpdateData
{
    public string $id;
    public mixed $archivedAt = null;
    public ?string $body = null;
    public ?string $color = null;
    public mixed $createdAt = null;
    public ?array $creator = null;
    public ?string $description = null;
    public ?string $icon = null;
    public ?array $inheritedFrom = null;
    public ?array $lastUpdatedBy = null;
    public mixed $lastUsedAt = null;
    public ?array $owner = null;
    public ?float $recentUsageCount = null;
    public ?bool $shared = null;
    public ?string $slugId = null;
    public ?string $teamId = null;
    public ?string $title = null;
    public mixed $updatedAt = null;
}

/** Request payload for AgentSkill#remove. */
class AgentSkillRemoveMatch
{
    public string $id;
}

/** Application entity data model. */
class Application
{
    public string $clientId;
    public ?string $description = null;
    public string $developer;
    public string $developerUrl;
    public string $id;
    public ?string $imageUrl = null;
    public string $name;
}

/** Request payload for Application#load. */
class ApplicationLoadMatch
{
    public string $client_id;
}

/** Attachment entity data model. */
class Attachment
{
    public mixed $archivedAt = null;
    public ?string $bodyData = null;
    public mixed $createdAt;
    public ?array $creator = null;
    public ?array $externalUserCreator = null;
    public bool $groupBySource;
    public string $id;
    public ?array $issue = null;
    public mixed $metadata;
    public ?array $originalIssue = null;
    public mixed $source = null;
    public ?string $sourceType = null;
    public ?string $subtitle = null;
    public string $title;
    public mixed $updatedAt;
    public string $url;
}

/** Request payload for Attachment#load. */
class AttachmentLoadMatch
{
    public string $id;
}

/** Request payload for Attachment#list. */
class AttachmentListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
    public ?string $url = null;
}

/** Request payload for Attachment#create. */
class AttachmentCreateData
{
    public mixed $archivedAt = null;
    public ?string $bodyData = null;
    public mixed $createdAt;
    public ?array $creator = null;
    public ?array $externalUserCreator = null;
    public bool $groupBySource;
    public string $id;
    public ?array $issue = null;
    public mixed $metadata;
    public ?array $originalIssue = null;
    public mixed $source = null;
    public ?string $sourceType = null;
    public ?string $subtitle = null;
    public string $title;
    public mixed $updatedAt;
    public string $url;
}

/** Request payload for Attachment#update. */
class AttachmentUpdateData
{
    public string $id;
    public mixed $archivedAt = null;
    public ?string $bodyData = null;
    public mixed $createdAt = null;
    public ?array $creator = null;
    public ?array $externalUserCreator = null;
    public ?bool $groupBySource = null;
    public ?array $issue = null;
    public mixed $metadata = null;
    public ?array $originalIssue = null;
    public mixed $source = null;
    public ?string $sourceType = null;
    public ?string $subtitle = null;
    public ?string $title = null;
    public mixed $updatedAt = null;
    public ?string $url = null;
}

/** Request payload for Attachment#remove. */
class AttachmentRemoveMatch
{
    public string $id;
}

/** AuditEntry entity data model. */
class AuditEntry
{
    public ?array $actor = null;
    public ?string $actorId = null;
    public mixed $archivedAt = null;
    public ?string $countryCode = null;
    public mixed $createdAt;
    public string $id;
    public ?string $ip = null;
    public mixed $metadata = null;
    public ?array $organization = null;
    public mixed $requestInformation = null;
    public string $type;
    public mixed $updatedAt;
}

/** Request payload for AuditEntry#list. */
class AuditEntryListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** AuditEntryType entity data model. */
class AuditEntryType
{
    public string $description;
    public string $type;
}

/** Request payload for AuditEntryType#list. */
class AuditEntryTypeListMatch
{
    public ?string $description = null;
    public ?string $type = null;
}

/** AuthResolverResponse entity data model. */
class AuthResolverResponse
{
    public ?bool $allowDomainAccess = null;
    public string $email;
    public string $id;
    public ?string $lastUsedOrganizationId = null;
    public ?string $service = null;
}

/** Request payload for AuthResolverResponse#load. */
class AuthResolverResponseLoadMatch
{
    public ?bool $allowDomainAccess = null;
    public ?string $email = null;
    public string $id;
    public ?string $lastUsedOrganizationId = null;
    public ?string $service = null;
}

/** Request payload for AuthResolverResponse#create. */
class AuthResolverResponseCreateData
{
    public ?bool $allowDomainAccess = null;
    public string $email;
    public string $id;
    public ?string $lastUsedOrganizationId = null;
    public ?string $service = null;
}

/** Request payload for AuthResolverResponse#update. */
class AuthResolverResponseUpdateData
{
    public string $auth_id;
    public mixed $response;
    public ?bool $allowDomainAccess = null;
    public ?string $email = null;
    public ?string $id = null;
    public ?string $lastUsedOrganizationId = null;
    public ?string $service = null;
}

/** AuthenticationSessionResponse entity data model. */
class AuthenticationSessionResponse
{
    public ?string $browserType = null;
    public ?string $client = null;
    public string $countryCodes;
    public mixed $createdAt;
    public string $detailedName;
    public string $id;
    public ?string $ip = null;
    public bool $isCurrentSession;
    public mixed $lastActiveAt = null;
    public ?string $location = null;
    public ?string $locationCity = null;
    public ?string $locationCountry = null;
    public ?string $locationCountryCode = null;
    public ?string $locationRegionCode = null;
    public string $name;
    public ?string $operatingSystem = null;
    public ?string $service = null;
    public string $type;
    public mixed $updatedAt;
    public ?string $userAgent = null;
}

/** Request payload for AuthenticationSessionResponse#list. */
class AuthenticationSessionResponseListMatch
{
    public ?string $id = null;
}

/** Comment entity data model. */
class Comment
{
    public ?array $agentSession = null;
    public mixed $archivedAt = null;
    public string $body;
    public string $bodyData;
    public ?array $botActor = null;
    public mixed $createdAt;
    public ?array $documentContent = null;
    public ?string $documentContentId = null;
    public mixed $editedAt = null;
    public ?array $externalThread = null;
    public ?array $externalUser = null;
    public bool $hideInLinear;
    public string $id;
    public ?array $initiative = null;
    public ?string $initiativeId = null;
    public ?array $initiativeUpdate = null;
    public ?string $initiativeUpdateId = null;
    public bool $isArtificialAgentSessionRoot;
    public ?array $issue = null;
    public ?string $issueId = null;
    public ?array $onBehalfOf = null;
    public ?array $parent = null;
    public ?string $parentId = null;
    public ?array $post = null;
    public ?array $project = null;
    public ?string $projectId = null;
    public ?array $projectUpdate = null;
    public ?string $projectUpdateId = null;
    public ?string $quotedText = null;
    public mixed $reactionData;
    public mixed $resolvedAt = null;
    public ?array $resolvingComment = null;
    public ?string $resolvingCommentId = null;
    public ?array $resolvingUser = null;
    public mixed $threadSummary = null;
    public mixed $updatedAt;
    public string $url;
    public ?array $user = null;
}

/** Request payload for Comment#load. */
class CommentLoadMatch
{
    public ?string $hash = null;
    public ?string $id = null;
}

/** Request payload for Comment#list. */
class CommentListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for Comment#create. */
class CommentCreateData
{
    public ?array $agentSession = null;
    public mixed $archivedAt = null;
    public string $body;
    public string $bodyData;
    public ?array $botActor = null;
    public mixed $createdAt;
    public ?array $documentContent = null;
    public ?string $documentContentId = null;
    public mixed $editedAt = null;
    public ?array $externalThread = null;
    public ?array $externalUser = null;
    public bool $hideInLinear;
    public string $id;
    public ?array $initiative = null;
    public ?string $initiativeId = null;
    public ?array $initiativeUpdate = null;
    public ?string $initiativeUpdateId = null;
    public bool $isArtificialAgentSessionRoot;
    public ?array $issue = null;
    public ?string $issueId = null;
    public ?array $onBehalfOf = null;
    public ?array $parent = null;
    public ?string $parentId = null;
    public ?array $post = null;
    public ?array $project = null;
    public ?string $projectId = null;
    public ?array $projectUpdate = null;
    public ?string $projectUpdateId = null;
    public ?string $quotedText = null;
    public mixed $reactionData;
    public mixed $resolvedAt = null;
    public ?array $resolvingComment = null;
    public ?string $resolvingCommentId = null;
    public ?array $resolvingUser = null;
    public mixed $threadSummary = null;
    public mixed $updatedAt;
    public string $url;
    public ?array $user = null;
}

/** Request payload for Comment#update. */
class CommentUpdateData
{
    public string $id;
    public ?bool $skip_edited_at = null;
    public ?array $agentSession = null;
    public mixed $archivedAt = null;
    public ?string $body = null;
    public ?string $bodyData = null;
    public ?array $botActor = null;
    public mixed $createdAt = null;
    public ?array $documentContent = null;
    public ?string $documentContentId = null;
    public mixed $editedAt = null;
    public ?array $externalThread = null;
    public ?array $externalUser = null;
    public ?bool $hideInLinear = null;
    public ?array $initiative = null;
    public ?string $initiativeId = null;
    public ?array $initiativeUpdate = null;
    public ?string $initiativeUpdateId = null;
    public ?bool $isArtificialAgentSessionRoot = null;
    public ?array $issue = null;
    public ?string $issueId = null;
    public ?array $onBehalfOf = null;
    public ?array $parent = null;
    public ?string $parentId = null;
    public ?array $post = null;
    public ?array $project = null;
    public ?string $projectId = null;
    public ?array $projectUpdate = null;
    public ?string $projectUpdateId = null;
    public ?string $quotedText = null;
    public mixed $reactionData = null;
    public mixed $resolvedAt = null;
    public ?array $resolvingComment = null;
    public ?string $resolvingCommentId = null;
    public ?array $resolvingUser = null;
    public mixed $threadSummary = null;
    public mixed $updatedAt = null;
    public ?string $url = null;
    public ?array $user = null;
}

/** Request payload for Comment#remove. */
class CommentRemoveMatch
{
    public string $id;
}

/** CreateOrJoinOrganizationResponse entity data model. */
class CreateOrJoinOrganizationResponse
{
    public ?array $organization = null;
    public ?array $user = null;
}

/** Request payload for CreateOrJoinOrganizationResponse#create. */
class CreateOrJoinOrganizationResponseCreateData
{
    public ?string $partner_offer_token = null;
    public ?string $session_id = null;
    public ?array $organization = null;
    public ?array $user = null;
}

/** Request payload for CreateOrJoinOrganizationResponse#update. */
class CreateOrJoinOrganizationResponseUpdateData
{
    public string $organization_id;
    public ?array $organization = null;
    public ?array $user = null;
}

/** CustomView entity data model. */
class CustomView
{
    public mixed $archivedAt = null;
    public ?string $color = null;
    public mixed $createdAt;
    public ?array $creator = null;
    public ?string $description = null;
    public ?array $facet = null;
    public mixed $feedItemFilterData = null;
    public mixed $filterData;
    public ?string $icon = null;
    public string $id;
    public mixed $initiativeFilterData = null;
    public string $modelName;
    public string $name;
    public ?array $organization = null;
    public ?array $organizationViewPreferences = null;
    public ?array $owner = null;
    public mixed $projectFilterData = null;
    public bool $shared;
    public string $slugId;
    public ?array $team = null;
    public mixed $updatedAt;
    public ?array $updatedBy = null;
    public ?array $userViewPreferences = null;
}

/** Request payload for CustomView#load. */
class CustomViewLoadMatch
{
    public string $id;
}

/** Request payload for CustomView#list. */
class CustomViewListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for CustomView#create. */
class CustomViewCreateData
{
    public mixed $archivedAt = null;
    public ?string $color = null;
    public mixed $createdAt;
    public ?array $creator = null;
    public ?string $description = null;
    public ?array $facet = null;
    public mixed $feedItemFilterData = null;
    public mixed $filterData;
    public ?string $icon = null;
    public string $id;
    public mixed $initiativeFilterData = null;
    public string $modelName;
    public string $name;
    public ?array $organization = null;
    public ?array $organizationViewPreferences = null;
    public ?array $owner = null;
    public mixed $projectFilterData = null;
    public bool $shared;
    public string $slugId;
    public ?array $team = null;
    public mixed $updatedAt;
    public ?array $updatedBy = null;
    public ?array $userViewPreferences = null;
}

/** Request payload for CustomView#update. */
class CustomViewUpdateData
{
    public string $id;
    public mixed $archivedAt = null;
    public ?string $color = null;
    public mixed $createdAt = null;
    public ?array $creator = null;
    public ?string $description = null;
    public ?array $facet = null;
    public mixed $feedItemFilterData = null;
    public mixed $filterData = null;
    public ?string $icon = null;
    public mixed $initiativeFilterData = null;
    public ?string $modelName = null;
    public ?string $name = null;
    public ?array $organization = null;
    public ?array $organizationViewPreferences = null;
    public ?array $owner = null;
    public mixed $projectFilterData = null;
    public ?bool $shared = null;
    public ?string $slugId = null;
    public ?array $team = null;
    public mixed $updatedAt = null;
    public ?array $updatedBy = null;
    public ?array $userViewPreferences = null;
}

/** Request payload for CustomView#remove. */
class CustomViewRemoveMatch
{
    public string $id;
}

/** Customer entity data model. */
class Customer
{
    public float $approximateNeedCount;
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public string $domains;
    public string $externalIds;
    public string $id;
    public ?array $integration = null;
    public ?string $logoUrl = null;
    public ?string $mainSourceId = null;
    public string $name;
    public ?array $owner = null;
    public ?int $revenue = null;
    public ?float $size = null;
    public ?string $slackChannelId = null;
    public string $slugId;
    public ?array $status = null;
    public ?array $tier = null;
    public mixed $updatedAt;
    public string $url;
}

/** Request payload for Customer#load. */
class CustomerLoadMatch
{
    public string $id;
}

/** Request payload for Customer#list. */
class CustomerListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for Customer#create. */
class CustomerCreateData
{
    public float $approximateNeedCount;
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public string $domains;
    public string $externalIds;
    public string $id;
    public ?array $integration = null;
    public ?string $logoUrl = null;
    public ?string $mainSourceId = null;
    public string $name;
    public ?array $owner = null;
    public ?int $revenue = null;
    public ?float $size = null;
    public ?string $slackChannelId = null;
    public string $slugId;
    public ?array $status = null;
    public ?array $tier = null;
    public mixed $updatedAt;
    public string $url;
}

/** Request payload for Customer#update. */
class CustomerUpdateData
{
    public string $id;
    public ?float $approximateNeedCount = null;
    public mixed $archivedAt = null;
    public mixed $createdAt = null;
    public ?string $domains = null;
    public ?string $externalIds = null;
    public ?array $integration = null;
    public ?string $logoUrl = null;
    public ?string $mainSourceId = null;
    public ?string $name = null;
    public ?array $owner = null;
    public ?int $revenue = null;
    public ?float $size = null;
    public ?string $slackChannelId = null;
    public ?string $slugId = null;
    public ?array $status = null;
    public ?array $tier = null;
    public mixed $updatedAt = null;
    public ?string $url = null;
}

/** Request payload for Customer#remove. */
class CustomerRemoveMatch
{
    public string $id;
}

/** CustomerNeed entity data model. */
class CustomerNeed
{
    public mixed $archivedAt = null;
    public ?array $attachment = null;
    public ?string $body = null;
    public ?string $bodyData = null;
    public ?array $comment = null;
    public ?string $content = null;
    public mixed $createdAt;
    public ?array $creator = null;
    public ?array $customer = null;
    public string $id;
    public ?array $issue = null;
    public ?array $originalIssue = null;
    public float $priority;
    public ?array $project = null;
    public ?array $projectAttachment = null;
    public mixed $updatedAt;
    public ?string $url = null;
}

/** Request payload for CustomerNeed#load. */
class CustomerNeedLoadMatch
{
    public ?string $hash = null;
    public ?string $id = null;
}

/** Request payload for CustomerNeed#list. */
class CustomerNeedListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for CustomerNeed#create. */
class CustomerNeedCreateData
{
    public mixed $archivedAt = null;
    public ?array $attachment = null;
    public ?string $body = null;
    public ?string $bodyData = null;
    public ?array $comment = null;
    public ?string $content = null;
    public mixed $createdAt;
    public ?array $creator = null;
    public ?array $customer = null;
    public string $id;
    public ?array $issue = null;
    public ?array $originalIssue = null;
    public float $priority;
    public ?array $project = null;
    public ?array $projectAttachment = null;
    public mixed $updatedAt;
    public ?string $url = null;
}

/** Request payload for CustomerNeed#update. */
class CustomerNeedUpdateData
{
    public ?bool $clear_attachment = null;
    public string $id;
    public mixed $archivedAt = null;
    public ?array $attachment = null;
    public ?string $body = null;
    public ?string $bodyData = null;
    public ?array $comment = null;
    public ?string $content = null;
    public mixed $createdAt = null;
    public ?array $creator = null;
    public ?array $customer = null;
    public ?array $issue = null;
    public ?array $originalIssue = null;
    public ?float $priority = null;
    public ?array $project = null;
    public ?array $projectAttachment = null;
    public mixed $updatedAt = null;
    public ?string $url = null;
}

/** Request payload for CustomerNeed#remove. */
class CustomerNeedRemoveMatch
{
    public string $id;
    public ?bool $keep_attachment = null;
}

/** CustomerStatus entity data model. */
class CustomerStatus
{
    public mixed $archivedAt = null;
    public string $color;
    public mixed $createdAt;
    public ?string $description = null;
    public string $displayName;
    public string $id;
    public string $name;
    public float $position;
    public mixed $updatedAt;
}

/** Request payload for CustomerStatus#load. */
class CustomerStatusLoadMatch
{
    public string $id;
}

/** Request payload for CustomerStatus#list. */
class CustomerStatusListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for CustomerStatus#create. */
class CustomerStatusCreateData
{
    public mixed $archivedAt = null;
    public string $color;
    public mixed $createdAt;
    public ?string $description = null;
    public string $displayName;
    public string $id;
    public string $name;
    public float $position;
    public mixed $updatedAt;
}

/** Request payload for CustomerStatus#update. */
class CustomerStatusUpdateData
{
    public string $id;
    public mixed $archivedAt = null;
    public ?string $color = null;
    public mixed $createdAt = null;
    public ?string $description = null;
    public ?string $displayName = null;
    public ?string $name = null;
    public ?float $position = null;
    public mixed $updatedAt = null;
}

/** Request payload for CustomerStatus#remove. */
class CustomerStatusRemoveMatch
{
    public string $id;
}

/** CustomerTier entity data model. */
class CustomerTier
{
    public mixed $archivedAt = null;
    public string $color;
    public mixed $createdAt;
    public ?string $description = null;
    public string $displayName;
    public string $id;
    public string $name;
    public float $position;
    public mixed $updatedAt;
}

/** Request payload for CustomerTier#load. */
class CustomerTierLoadMatch
{
    public string $id;
}

/** Request payload for CustomerTier#list. */
class CustomerTierListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for CustomerTier#create. */
class CustomerTierCreateData
{
    public mixed $archivedAt = null;
    public string $color;
    public mixed $createdAt;
    public ?string $description = null;
    public string $displayName;
    public string $id;
    public string $name;
    public float $position;
    public mixed $updatedAt;
}

/** Request payload for CustomerTier#update. */
class CustomerTierUpdateData
{
    public string $id;
    public mixed $archivedAt = null;
    public ?string $color = null;
    public mixed $createdAt = null;
    public ?string $description = null;
    public ?string $displayName = null;
    public ?string $name = null;
    public ?float $position = null;
    public mixed $updatedAt = null;
}

/** Request payload for CustomerTier#remove. */
class CustomerTierRemoveMatch
{
    public string $id;
}

/** Cycle entity data model. */
class Cycle
{
    public mixed $archivedAt = null;
    public mixed $autoArchivedAt = null;
    public mixed $completedAt = null;
    public float $completedIssueCountHistory;
    public float $completedScopeHistory;
    public mixed $createdAt;
    public mixed $currentProgress;
    public ?string $description = null;
    public mixed $endsAt;
    public string $id;
    public float $inProgressScopeHistory;
    public ?array $inheritedFrom = null;
    public bool $isActive;
    public bool $isFuture;
    public bool $isNext;
    public bool $isPast;
    public bool $isPrevious;
    public float $issueCountHistory;
    public ?string $name = null;
    public float $number;
    public float $progress;
    public mixed $progressHistory;
    public float $scopeHistory;
    public mixed $startsAt;
    public ?array $team = null;
    public mixed $updatedAt;
}

/** Request payload for Cycle#load. */
class CycleLoadMatch
{
    public string $id;
}

/** Request payload for Cycle#list. */
class CycleListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for Cycle#create. */
class CycleCreateData
{
    public mixed $archivedAt = null;
    public mixed $autoArchivedAt = null;
    public mixed $completedAt = null;
    public float $completedIssueCountHistory;
    public float $completedScopeHistory;
    public mixed $createdAt;
    public mixed $currentProgress;
    public ?string $description = null;
    public mixed $endsAt;
    public string $id;
    public float $inProgressScopeHistory;
    public ?array $inheritedFrom = null;
    public bool $isActive;
    public bool $isFuture;
    public bool $isNext;
    public bool $isPast;
    public bool $isPrevious;
    public float $issueCountHistory;
    public ?string $name = null;
    public float $number;
    public float $progress;
    public mixed $progressHistory;
    public float $scopeHistory;
    public mixed $startsAt;
    public ?array $team = null;
    public mixed $updatedAt;
}

/** Request payload for Cycle#update. */
class CycleUpdateData
{
    public string $id;
    public mixed $archivedAt = null;
    public mixed $autoArchivedAt = null;
    public mixed $completedAt = null;
    public ?float $completedIssueCountHistory = null;
    public ?float $completedScopeHistory = null;
    public mixed $createdAt = null;
    public mixed $currentProgress = null;
    public ?string $description = null;
    public mixed $endsAt = null;
    public ?float $inProgressScopeHistory = null;
    public ?array $inheritedFrom = null;
    public ?bool $isActive = null;
    public ?bool $isFuture = null;
    public ?bool $isNext = null;
    public ?bool $isPast = null;
    public ?bool $isPrevious = null;
    public ?float $issueCountHistory = null;
    public ?string $name = null;
    public ?float $number = null;
    public ?float $progress = null;
    public mixed $progressHistory = null;
    public ?float $scopeHistory = null;
    public mixed $startsAt = null;
    public ?array $team = null;
    public mixed $updatedAt = null;
}

/** Diff entity data model. */
class Diff
{
    public float $additions;
    public ?array $agentSession = null;
    public mixed $archivedAt = null;
    public string $contentHash;
    public mixed $createdAt;
    public ?array $creator = null;
    public float $deletions;
    public float $fileCount;
    public string $id;
    public ?array $organization = null;
    public ?array $pullRequest = null;
    public string $slugId;
    public bool $truncated;
    public mixed $updatedAt;
}

/** Request payload for Diff#load. */
class DiffLoadMatch
{
    public string $id;
}

/** Document entity data model. */
class Document
{
    public mixed $archivedAt = null;
    public ?string $color = null;
    public ?string $content = null;
    public ?string $contentState = null;
    public mixed $createdAt;
    public ?array $creator = null;
    public ?array $cycle = null;
    public ?string $documentContentId = null;
    public mixed $hiddenAt = null;
    public ?string $icon = null;
    public string $id;
    public ?array $initiative = null;
    public ?array $issue = null;
    public ?array $lastAppliedTemplate = null;
    public ?array $owner = null;
    public ?array $project = null;
    public ?array $release = null;
    public string $slugId;
    public float $sortOrder;
    public ?string $summary = null;
    public ?array $team = null;
    public string $title;
    public ?bool $trashed = null;
    public mixed $updatedAt;
    public ?array $updatedBy = null;
    public string $url;
}

/** Request payload for Document#load. */
class DocumentLoadMatch
{
    public string $id;
}

/** Request payload for Document#list. */
class DocumentListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for Document#create. */
class DocumentCreateData
{
    public mixed $archivedAt = null;
    public ?string $color = null;
    public ?string $content = null;
    public ?string $contentState = null;
    public mixed $createdAt;
    public ?array $creator = null;
    public ?array $cycle = null;
    public ?string $documentContentId = null;
    public mixed $hiddenAt = null;
    public ?string $icon = null;
    public string $id;
    public ?array $initiative = null;
    public ?array $issue = null;
    public ?array $lastAppliedTemplate = null;
    public ?array $owner = null;
    public ?array $project = null;
    public ?array $release = null;
    public string $slugId;
    public float $sortOrder;
    public ?string $summary = null;
    public ?array $team = null;
    public string $title;
    public ?bool $trashed = null;
    public mixed $updatedAt;
    public ?array $updatedBy = null;
    public string $url;
}

/** Request payload for Document#update. */
class DocumentUpdateData
{
    public string $id;
    public mixed $archivedAt = null;
    public ?string $color = null;
    public ?string $content = null;
    public ?string $contentState = null;
    public mixed $createdAt = null;
    public ?array $creator = null;
    public ?array $cycle = null;
    public ?string $documentContentId = null;
    public mixed $hiddenAt = null;
    public ?string $icon = null;
    public ?array $initiative = null;
    public ?array $issue = null;
    public ?array $lastAppliedTemplate = null;
    public ?array $owner = null;
    public ?array $project = null;
    public ?array $release = null;
    public ?string $slugId = null;
    public ?float $sortOrder = null;
    public ?string $summary = null;
    public ?array $team = null;
    public ?string $title = null;
    public ?bool $trashed = null;
    public mixed $updatedAt = null;
    public ?array $updatedBy = null;
    public ?string $url = null;
}

/** Request payload for Document#remove. */
class DocumentRemoveMatch
{
    public string $id;
}

/** DocumentSearchResult entity data model. */
class DocumentSearchResult
{
    public mixed $archivedAt = null;
    public ?string $color = null;
    public ?string $content = null;
    public ?string $contentState = null;
    public mixed $createdAt;
    public ?array $creator = null;
    public ?array $cycle = null;
    public ?string $documentContentId = null;
    public mixed $hiddenAt = null;
    public ?string $icon = null;
    public string $id;
    public ?array $initiative = null;
    public ?array $issue = null;
    public ?array $lastAppliedTemplate = null;
    public mixed $metadata;
    public ?array $owner = null;
    public ?array $project = null;
    public ?array $release = null;
    public string $slugId;
    public float $sortOrder;
    public ?string $summary = null;
    public ?array $team = null;
    public string $title;
    public ?bool $trashed = null;
    public mixed $updatedAt;
    public ?array $updatedBy = null;
    public string $url;
}

/** Request payload for DocumentSearchResult#list. */
class DocumentSearchResultListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?bool $include_comment = null;
    public ?int $last = null;
    public mixed $order_by = null;
    public ?string $team_id = null;
    public string $term;
}

/** EmailIntakeAddress entity data model. */
class EmailIntakeAddress
{
    public string $address;
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public ?array $creator = null;
    public bool $customerRequestsEnabled;
    public bool $enabled;
    public ?string $forwardingEmailAddress = null;
    public string $id;
    public ?string $issueCanceledAutoReply = null;
    public bool $issueCanceledAutoReplyEnabled;
    public ?string $issueCompletedAutoReply = null;
    public bool $issueCompletedAutoReplyEnabled;
    public ?string $issueCreatedAutoReply = null;
    public bool $issueCreatedAutoReplyEnabled;
    public mixed $lastUsedAt = null;
    public ?array $organization = null;
    public bool $reopenOnReply;
    public bool $repliesEnabled;
    public ?string $senderName = null;
    public ?array $sesDomainIdentity = null;
    public ?array $team = null;
    public ?array $template = null;
    public string $type;
    public mixed $updatedAt;
    public bool $useUserNamesInReplies;
}

/** Request payload for EmailIntakeAddress#load. */
class EmailIntakeAddressLoadMatch
{
    public string $id;
}

/** Request payload for EmailIntakeAddress#create. */
class EmailIntakeAddressCreateData
{
    public string $address;
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public ?array $creator = null;
    public bool $customerRequestsEnabled;
    public bool $enabled;
    public ?string $forwardingEmailAddress = null;
    public string $id;
    public ?string $issueCanceledAutoReply = null;
    public bool $issueCanceledAutoReplyEnabled;
    public ?string $issueCompletedAutoReply = null;
    public bool $issueCompletedAutoReplyEnabled;
    public ?string $issueCreatedAutoReply = null;
    public bool $issueCreatedAutoReplyEnabled;
    public mixed $lastUsedAt = null;
    public ?array $organization = null;
    public bool $reopenOnReply;
    public bool $repliesEnabled;
    public ?string $senderName = null;
    public ?array $sesDomainIdentity = null;
    public ?array $team = null;
    public ?array $template = null;
    public string $type;
    public mixed $updatedAt;
    public bool $useUserNamesInReplies;
}

/** Request payload for EmailIntakeAddress#update. */
class EmailIntakeAddressUpdateData
{
    public string $id;
    public ?string $address = null;
    public mixed $archivedAt = null;
    public mixed $createdAt = null;
    public ?array $creator = null;
    public ?bool $customerRequestsEnabled = null;
    public ?bool $enabled = null;
    public ?string $forwardingEmailAddress = null;
    public ?string $issueCanceledAutoReply = null;
    public ?bool $issueCanceledAutoReplyEnabled = null;
    public ?string $issueCompletedAutoReply = null;
    public ?bool $issueCompletedAutoReplyEnabled = null;
    public ?string $issueCreatedAutoReply = null;
    public ?bool $issueCreatedAutoReplyEnabled = null;
    public mixed $lastUsedAt = null;
    public ?array $organization = null;
    public ?bool $reopenOnReply = null;
    public ?bool $repliesEnabled = null;
    public ?string $senderName = null;
    public ?array $sesDomainIdentity = null;
    public ?array $team = null;
    public ?array $template = null;
    public ?string $type = null;
    public mixed $updatedAt = null;
    public ?bool $useUserNamesInReplies = null;
}

/** Request payload for EmailIntakeAddress#remove. */
class EmailIntakeAddressRemoveMatch
{
    public string $id;
}

/** EmailUserAccountAuthChallengeResponse entity data model. */
class EmailUserAccountAuthChallengeResponse
{
    public string $authType;
    public bool $success;
}

/** Request payload for EmailUserAccountAuthChallengeResponse#create. */
class EmailUserAccountAuthChallengeResponseCreateData
{
    public string $authType;
    public bool $success;
}

/** Emoji entity data model. */
class Emoji
{
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public ?array $creator = null;
    public string $id;
    public string $name;
    public ?array $organization = null;
    public string $source;
    public mixed $updatedAt;
    public string $url;
}

/** Request payload for Emoji#load. */
class EmojiLoadMatch
{
    public string $id;
}

/** Request payload for Emoji#list. */
class EmojiListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for Emoji#create. */
class EmojiCreateData
{
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public ?array $creator = null;
    public string $id;
    public string $name;
    public ?array $organization = null;
    public string $source;
    public mixed $updatedAt;
    public string $url;
}

/** Request payload for Emoji#remove. */
class EmojiRemoveMatch
{
    public string $id;
}

/** EntityExternalLink entity data model. */
class EntityExternalLink
{
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public ?array $creator = null;
    public string $id;
    public ?array $initiative = null;
    public string $label;
    public ?array $project = null;
    public float $sortOrder;
    public mixed $updatedAt;
    public string $url;
}

/** Request payload for EntityExternalLink#load. */
class EntityExternalLinkLoadMatch
{
    public string $id;
}

/** Request payload for EntityExternalLink#create. */
class EntityExternalLinkCreateData
{
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public ?array $creator = null;
    public string $id;
    public ?array $initiative = null;
    public string $label;
    public ?array $project = null;
    public float $sortOrder;
    public mixed $updatedAt;
    public string $url;
}

/** Request payload for EntityExternalLink#update. */
class EntityExternalLinkUpdateData
{
    public string $id;
    public mixed $archivedAt = null;
    public mixed $createdAt = null;
    public ?array $creator = null;
    public ?array $initiative = null;
    public ?string $label = null;
    public ?array $project = null;
    public ?float $sortOrder = null;
    public mixed $updatedAt = null;
    public ?string $url = null;
}

/** Request payload for EntityExternalLink#remove. */
class EntityExternalLinkRemoveMatch
{
    public string $id;
}

/** ExternalUser entity data model. */
class ExternalUser
{
    public mixed $archivedAt = null;
    public ?string $avatarUrl = null;
    public mixed $createdAt;
    public string $displayName;
    public ?string $email = null;
    public string $id;
    public mixed $lastSeen = null;
    public string $name;
    public ?array $organization = null;
    public mixed $updatedAt;
}

/** Request payload for ExternalUser#load. */
class ExternalUserLoadMatch
{
    public string $id;
}

/** Request payload for ExternalUser#list. */
class ExternalUserListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Favorite entity data model. */
class Favorite
{
    public ?array $aiConversation = null;
    public mixed $archivedAt = null;
    public ?string $color = null;
    public mixed $createdAt;
    public ?array $customView = null;
    public ?array $customer = null;
    public ?array $cycle = null;
    public ?array $dashboard = null;
    public ?string $detail = null;
    public ?array $document = null;
    public ?array $facet = null;
    public ?string $folderName = null;
    public ?string $icon = null;
    public string $id;
    public ?array $initiative = null;
    public ?array $initiativeLabel = null;
    public ?string $initiativeTab = null;
    public ?array $issue = null;
    public ?array $label = null;
    public mixed $liveFolderDefinition = null;
    public ?string $liveFolderPreset = null;
    public ?array $owner = null;
    public ?array $parent = null;
    public ?string $pipelineTab = null;
    public ?array $predefinedViewTeam = null;
    public ?string $predefinedViewType = null;
    public ?array $project = null;
    public ?array $projectLabel = null;
    public ?string $projectTab = null;
    public ?array $projectTeam = null;
    public ?array $pullRequest = null;
    public ?array $release = null;
    public ?array $releaseNote = null;
    public ?array $releasePipeline = null;
    public float $sortOrder;
    public ?array $team = null;
    public string $title;
    public string $type;
    public mixed $updatedAt;
    public ?string $url = null;
    public ?array $user = null;
    public ?array $workflowDefinition = null;
}

/** Request payload for Favorite#load. */
class FavoriteLoadMatch
{
    public string $id;
}

/** Request payload for Favorite#list. */
class FavoriteListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for Favorite#create. */
class FavoriteCreateData
{
    public ?array $aiConversation = null;
    public mixed $archivedAt = null;
    public ?string $color = null;
    public mixed $createdAt;
    public ?array $customView = null;
    public ?array $customer = null;
    public ?array $cycle = null;
    public ?array $dashboard = null;
    public ?string $detail = null;
    public ?array $document = null;
    public ?array $facet = null;
    public ?string $folderName = null;
    public ?string $icon = null;
    public string $id;
    public ?array $initiative = null;
    public ?array $initiativeLabel = null;
    public ?string $initiativeTab = null;
    public ?array $issue = null;
    public ?array $label = null;
    public mixed $liveFolderDefinition = null;
    public ?string $liveFolderPreset = null;
    public ?array $owner = null;
    public ?array $parent = null;
    public ?string $pipelineTab = null;
    public ?array $predefinedViewTeam = null;
    public ?string $predefinedViewType = null;
    public ?array $project = null;
    public ?array $projectLabel = null;
    public ?string $projectTab = null;
    public ?array $projectTeam = null;
    public ?array $pullRequest = null;
    public ?array $release = null;
    public ?array $releaseNote = null;
    public ?array $releasePipeline = null;
    public float $sortOrder;
    public ?array $team = null;
    public string $title;
    public string $type;
    public mixed $updatedAt;
    public ?string $url = null;
    public ?array $user = null;
    public ?array $workflowDefinition = null;
}

/** Request payload for Favorite#update. */
class FavoriteUpdateData
{
    public string $id;
    public ?array $aiConversation = null;
    public mixed $archivedAt = null;
    public ?string $color = null;
    public mixed $createdAt = null;
    public ?array $customView = null;
    public ?array $customer = null;
    public ?array $cycle = null;
    public ?array $dashboard = null;
    public ?string $detail = null;
    public ?array $document = null;
    public ?array $facet = null;
    public ?string $folderName = null;
    public ?string $icon = null;
    public ?array $initiative = null;
    public ?array $initiativeLabel = null;
    public ?string $initiativeTab = null;
    public ?array $issue = null;
    public ?array $label = null;
    public mixed $liveFolderDefinition = null;
    public ?string $liveFolderPreset = null;
    public ?array $owner = null;
    public ?array $parent = null;
    public ?string $pipelineTab = null;
    public ?array $predefinedViewTeam = null;
    public ?string $predefinedViewType = null;
    public ?array $project = null;
    public ?array $projectLabel = null;
    public ?string $projectTab = null;
    public ?array $projectTeam = null;
    public ?array $pullRequest = null;
    public ?array $release = null;
    public ?array $releaseNote = null;
    public ?array $releasePipeline = null;
    public ?float $sortOrder = null;
    public ?array $team = null;
    public ?string $title = null;
    public ?string $type = null;
    public mixed $updatedAt = null;
    public ?string $url = null;
    public ?array $user = null;
    public ?array $workflowDefinition = null;
}

/** Request payload for Favorite#remove. */
class FavoriteRemoveMatch
{
    public string $id;
}

/** GitAutomationState entity data model. */
class GitAutomationState
{
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public string $event;
    public string $id;
    public ?array $state = null;
    public ?array $targetBranch = null;
    public ?array $team = null;
    public mixed $updatedAt;
}

/** Request payload for GitAutomationState#create. */
class GitAutomationStateCreateData
{
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public string $event;
    public string $id;
    public ?array $state = null;
    public ?array $targetBranch = null;
    public ?array $team = null;
    public mixed $updatedAt;
}

/** Request payload for GitAutomationState#update. */
class GitAutomationStateUpdateData
{
    public string $id;
    public mixed $archivedAt = null;
    public mixed $createdAt = null;
    public ?string $event = null;
    public ?array $state = null;
    public ?array $targetBranch = null;
    public ?array $team = null;
    public mixed $updatedAt = null;
}

/** Request payload for GitAutomationState#remove. */
class GitAutomationStateRemoveMatch
{
    public string $id;
}

/** GitAutomationTargetBranch entity data model. */
class GitAutomationTargetBranch
{
    public mixed $archivedAt = null;
    public string $branchPattern;
    public mixed $createdAt;
    public string $id;
    public bool $isRegex;
    public ?array $team = null;
    public mixed $updatedAt;
}

/** Request payload for GitAutomationTargetBranch#create. */
class GitAutomationTargetBranchCreateData
{
    public mixed $archivedAt = null;
    public string $branchPattern;
    public mixed $createdAt;
    public string $id;
    public bool $isRegex;
    public ?array $team = null;
    public mixed $updatedAt;
}

/** Request payload for GitAutomationTargetBranch#update. */
class GitAutomationTargetBranchUpdateData
{
    public string $id;
    public mixed $archivedAt = null;
    public ?string $branchPattern = null;
    public mixed $createdAt = null;
    public ?bool $isRegex = null;
    public ?array $team = null;
    public mixed $updatedAt = null;
}

/** Request payload for GitAutomationTargetBranch#remove. */
class GitAutomationTargetBranchRemoveMatch
{
    public string $id;
}

/** GitHubIntegrationConnectDetail entity data model. */
class GitHubIntegrationConnectDetail
{
    public ?string $lostRepositoryNames = null;
}

/** Request payload for GitHubIntegrationConnectDetail#create. */
class GitHubIntegrationConnectDetailCreateData
{
    public ?string $code = null;
    public ?string $redirect_uri = null;
    public ?string $github_url = null;
    public ?string $organization_name = null;
    public ?string $access_token = null;
    public ?string $expires_at = null;
    public ?string $gitlab_url = null;
    public ?bool $readonly = null;
    public ?string $validation_project_path = null;
    public ?string $lostRepositoryNames = null;
}

/** Request payload for GitHubIntegrationConnectDetail#update. */
class GitHubIntegrationConnectDetailUpdateData
{
    public ?string $code = null;
    public ?string $project_id = null;
    public ?string $redirect_uri = null;
    public ?string $service = null;
    public ?string $custom_view_id = null;
    public ?string $initiative_id = null;
    public ?bool $should_use_v2_auth = null;
    public ?string $team_id = null;
    public ?string $integration_id = null;
    public ?string $lostRepositoryNames = null;
}

/** Initiative entity data model. */
class Initiative
{
    public mixed $archivedAt = null;
    public mixed $canceledAt = null;
    public ?string $color = null;
    public mixed $completedAt = null;
    public ?string $content = null;
    public mixed $createdAt;
    public ?array $creator = null;
    public ?string $description = null;
    public ?array $documentContent = null;
    public string $frequencyResolution;
    public ?string $health = null;
    public mixed $healthUpdatedAt = null;
    public ?string $icon = null;
    public string $id;
    public ?string $identifier = null;
    public ?array $integrationsSettings = null;
    public string $labelIds;
    public ?array $lastUpdate = null;
    public ?array $leadTeam = null;
    public string $name;
    public ?array $organization = null;
    public ?array $owner = null;
    public ?array $parentInitiative = null;
    public string $previousIdentifiers;
    public int $priority;
    public float $prioritySortOrder;
    public string $slugId;
    public float $sortOrder;
    public mixed $startedAt = null;
    public string $status;
    public mixed $targetDate = null;
    public ?string $targetDateResolution = null;
    public ?bool $trashed = null;
    public ?float $updateReminderFrequency = null;
    public ?float $updateReminderFrequencyInWeeks = null;
    public ?string $updateRemindersDay = null;
    public ?float $updateRemindersHour = null;
    public mixed $updatedAt;
    public string $url;
    public string $visibility;
}

/** Request payload for Initiative#load. */
class InitiativeLoadMatch
{
    public string $id;
}

/** Request payload for Initiative#list. */
class InitiativeListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for Initiative#create. */
class InitiativeCreateData
{
    public mixed $archivedAt = null;
    public mixed $canceledAt = null;
    public ?string $color = null;
    public mixed $completedAt = null;
    public ?string $content = null;
    public mixed $createdAt;
    public ?array $creator = null;
    public ?string $description = null;
    public ?array $documentContent = null;
    public string $frequencyResolution;
    public ?string $health = null;
    public mixed $healthUpdatedAt = null;
    public ?string $icon = null;
    public string $id;
    public ?string $identifier = null;
    public ?array $integrationsSettings = null;
    public string $labelIds;
    public ?array $lastUpdate = null;
    public ?array $leadTeam = null;
    public string $name;
    public ?array $organization = null;
    public ?array $owner = null;
    public ?array $parentInitiative = null;
    public string $previousIdentifiers;
    public int $priority;
    public float $prioritySortOrder;
    public string $slugId;
    public float $sortOrder;
    public mixed $startedAt = null;
    public string $status;
    public mixed $targetDate = null;
    public ?string $targetDateResolution = null;
    public ?bool $trashed = null;
    public ?float $updateReminderFrequency = null;
    public ?float $updateReminderFrequencyInWeeks = null;
    public ?string $updateRemindersDay = null;
    public ?float $updateRemindersHour = null;
    public mixed $updatedAt;
    public string $url;
    public string $visibility;
}

/** Request payload for Initiative#update. */
class InitiativeUpdateData
{
    public string $id;
    public mixed $archivedAt = null;
    public mixed $canceledAt = null;
    public ?string $color = null;
    public mixed $completedAt = null;
    public ?string $content = null;
    public mixed $createdAt = null;
    public ?array $creator = null;
    public ?string $description = null;
    public ?array $documentContent = null;
    public ?string $frequencyResolution = null;
    public ?string $health = null;
    public mixed $healthUpdatedAt = null;
    public ?string $icon = null;
    public ?string $identifier = null;
    public ?array $integrationsSettings = null;
    public ?string $labelIds = null;
    public ?array $lastUpdate = null;
    public ?array $leadTeam = null;
    public ?string $name = null;
    public ?array $organization = null;
    public ?array $owner = null;
    public ?array $parentInitiative = null;
    public ?string $previousIdentifiers = null;
    public ?int $priority = null;
    public ?float $prioritySortOrder = null;
    public ?string $slugId = null;
    public ?float $sortOrder = null;
    public mixed $startedAt = null;
    public ?string $status = null;
    public mixed $targetDate = null;
    public ?string $targetDateResolution = null;
    public ?bool $trashed = null;
    public ?float $updateReminderFrequency = null;
    public ?float $updateReminderFrequencyInWeeks = null;
    public ?string $updateRemindersDay = null;
    public ?float $updateRemindersHour = null;
    public mixed $updatedAt = null;
    public ?string $url = null;
    public ?string $visibility = null;
}

/** Request payload for Initiative#remove. */
class InitiativeRemoveMatch
{
    public string $id;
}

/** InitiativeLabel entity data model. */
class InitiativeLabel
{
    public mixed $archivedAt = null;
    public string $color;
    public mixed $createdAt;
    public ?array $creator = null;
    public ?string $description = null;
    public string $id;
    public bool $isGroup;
    public mixed $lastAppliedAt = null;
    public string $name;
    public ?array $organization = null;
    public ?array $parent = null;
    public mixed $retiredAt = null;
    public ?array $retiredBy = null;
    public mixed $updatedAt;
}

/** Request payload for InitiativeLabel#load. */
class InitiativeLabelLoadMatch
{
    public string $id;
}

/** Request payload for InitiativeLabel#list. */
class InitiativeLabelListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for InitiativeLabel#create. */
class InitiativeLabelCreateData
{
    public mixed $archivedAt = null;
    public string $color;
    public mixed $createdAt;
    public ?array $creator = null;
    public ?string $description = null;
    public string $id;
    public bool $isGroup;
    public mixed $lastAppliedAt = null;
    public string $name;
    public ?array $organization = null;
    public ?array $parent = null;
    public mixed $retiredAt = null;
    public ?array $retiredBy = null;
    public mixed $updatedAt;
}

/** Request payload for InitiativeLabel#update. */
class InitiativeLabelUpdateData
{
    public string $id;
    public mixed $archivedAt = null;
    public ?string $color = null;
    public mixed $createdAt = null;
    public ?array $creator = null;
    public ?string $description = null;
    public ?bool $isGroup = null;
    public mixed $lastAppliedAt = null;
    public ?string $name = null;
    public ?array $organization = null;
    public ?array $parent = null;
    public mixed $retiredAt = null;
    public ?array $retiredBy = null;
    public mixed $updatedAt = null;
}

/** Request payload for InitiativeLabel#remove. */
class InitiativeLabelRemoveMatch
{
    public string $id;
}

/** InitiativeLeadTeamChangeImpact entity data model. */
class InitiativeLeadTeamChangeImpact
{
    public int $affectedDescendantCount;
    public ?string $id = null;
    public bool $visibilityMayChange;
}

/** Request payload for InitiativeLeadTeamChangeImpact#load. */
class InitiativeLeadTeamChangeImpactLoadMatch
{
    public string $id;
    public ?string $lead_team_id = null;
}

/** InitiativeRelation entity data model. */
class InitiativeRelation
{
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public string $id;
    public ?array $initiative = null;
    public ?array $relatedInitiative = null;
    public float $sortOrder;
    public mixed $updatedAt;
    public ?array $user = null;
}

/** Request payload for InitiativeRelation#load. */
class InitiativeRelationLoadMatch
{
    public string $id;
}

/** Request payload for InitiativeRelation#list. */
class InitiativeRelationListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for InitiativeRelation#create. */
class InitiativeRelationCreateData
{
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public string $id;
    public ?array $initiative = null;
    public ?array $relatedInitiative = null;
    public float $sortOrder;
    public mixed $updatedAt;
    public ?array $user = null;
}

/** Request payload for InitiativeRelation#update. */
class InitiativeRelationUpdateData
{
    public string $id;
    public mixed $archivedAt = null;
    public mixed $createdAt = null;
    public ?array $initiative = null;
    public ?array $relatedInitiative = null;
    public ?float $sortOrder = null;
    public mixed $updatedAt = null;
    public ?array $user = null;
}

/** Request payload for InitiativeRelation#remove. */
class InitiativeRelationRemoveMatch
{
    public string $id;
}

/** InitiativeToProject entity data model. */
class InitiativeToProject
{
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public string $id;
    public ?array $initiative = null;
    public ?array $project = null;
    public string $sortOrder;
    public mixed $updatedAt;
}

/** Request payload for InitiativeToProject#load. */
class InitiativeToProjectLoadMatch
{
    public string $id;
}

/** Request payload for InitiativeToProject#list. */
class InitiativeToProjectListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for InitiativeToProject#create. */
class InitiativeToProjectCreateData
{
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public string $id;
    public ?array $initiative = null;
    public ?array $project = null;
    public string $sortOrder;
    public mixed $updatedAt;
}

/** Request payload for InitiativeToProject#update. */
class InitiativeToProjectUpdateData
{
    public string $id;
    public mixed $archivedAt = null;
    public mixed $createdAt = null;
    public ?array $initiative = null;
    public ?array $project = null;
    public ?string $sortOrder = null;
    public mixed $updatedAt = null;
}

/** Request payload for InitiativeToProject#remove. */
class InitiativeToProjectRemoveMatch
{
    public string $id;
}

/** InitiativeUpdate entity data model. */
class InitiativeUpdate
{
    public mixed $archivedAt = null;
    public string $body;
    public string $bodyData;
    public int $commentCount;
    public mixed $createdAt;
    public mixed $diff = null;
    public ?string $diffMarkdown = null;
    public mixed $editedAt = null;
    public string $health;
    public string $id;
    public mixed $infoSnapshot = null;
    public ?array $initiative = null;
    public bool $isDiffHidden;
    public bool $isStale;
    public mixed $reactionData;
    public string $slugId;
    public mixed $updatedAt;
    public string $url;
    public ?array $user = null;
}

/** Request payload for InitiativeUpdate#load. */
class InitiativeUpdateLoadMatch
{
    public string $id;
}

/** Request payload for InitiativeUpdate#list. */
class InitiativeUpdateListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for InitiativeUpdate#create. */
class InitiativeUpdateCreateData
{
    public mixed $archivedAt = null;
    public string $body;
    public string $bodyData;
    public int $commentCount;
    public mixed $createdAt;
    public mixed $diff = null;
    public ?string $diffMarkdown = null;
    public mixed $editedAt = null;
    public string $health;
    public string $id;
    public mixed $infoSnapshot = null;
    public ?array $initiative = null;
    public bool $isDiffHidden;
    public bool $isStale;
    public mixed $reactionData;
    public string $slugId;
    public mixed $updatedAt;
    public string $url;
    public ?array $user = null;
}

/** Request payload for InitiativeUpdate#update. */
class InitiativeUpdateUpdateData
{
    public string $id;
    public mixed $archivedAt = null;
    public ?string $body = null;
    public ?string $bodyData = null;
    public ?int $commentCount = null;
    public mixed $createdAt = null;
    public mixed $diff = null;
    public ?string $diffMarkdown = null;
    public mixed $editedAt = null;
    public ?string $health = null;
    public mixed $infoSnapshot = null;
    public ?array $initiative = null;
    public ?bool $isDiffHidden = null;
    public ?bool $isStale = null;
    public mixed $reactionData = null;
    public ?string $slugId = null;
    public mixed $updatedAt = null;
    public ?string $url = null;
    public ?array $user = null;
}

/** Integration entity data model. */
class Integration
{
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public ?array $creator = null;
    public string $id;
    public ?array $organization = null;
    public string $service;
    public ?array $team = null;
    public mixed $updatedAt;
}

/** Request payload for Integration#load. */
class IntegrationLoadMatch
{
    public string $id;
}

/** Request payload for Integration#list. */
class IntegrationListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for Integration#create. */
class IntegrationCreateData
{
    public ?string $code = null;
    public ?string $code_verifier = null;
    public ?string $redirect_uri = null;
    public ?string $subdomain = null;
    public ?string $environment = null;
    public ?string $project_key = null;
    public ?string $domain_url = null;
    public ?string $requested_scope = null;
    public ?bool $should_use_v2_auth = null;
    public ?bool $code_access = null;
    public ?string $enterprise_url = null;
    public ?string $mcp_server_definition_id = null;
    public ?string $server_url = null;
    public ?string $team_id = null;
    public ?string $workflow_definition_draft_id = null;
    public ?string $workflow_definition_id = null;
    public ?string $api_key = null;
    public ?string $access_token = null;
    public ?string $bot_user_role = null;
    public ?string $custom_api_url = null;
    public ?string $scope = null;
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public ?array $creator = null;
    public string $id;
    public ?array $organization = null;
    public string $service;
    public ?array $team = null;
    public mixed $updatedAt;
}

/** Request payload for Integration#update. */
class IntegrationUpdateData
{
    public string $id;
    public mixed $archivedAt = null;
    public mixed $createdAt = null;
    public ?array $creator = null;
    public ?array $organization = null;
    public ?string $service = null;
    public ?array $team = null;
    public mixed $updatedAt = null;
}

/** Request payload for Integration#remove. */
class IntegrationRemoveMatch
{
    public string $id;
    public ?bool $skip_installation_deletion = null;
}

/** IntegrationTemplate entity data model. */
class IntegrationTemplate
{
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public ?string $foreignEntityId = null;
    public string $id;
    public ?array $integration = null;
    public ?array $template = null;
    public mixed $updatedAt;
}

/** Request payload for IntegrationTemplate#load. */
class IntegrationTemplateLoadMatch
{
    public string $id;
}

/** Request payload for IntegrationTemplate#list. */
class IntegrationTemplateListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for IntegrationTemplate#create. */
class IntegrationTemplateCreateData
{
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public ?string $foreignEntityId = null;
    public string $id;
    public ?array $integration = null;
    public ?array $template = null;
    public mixed $updatedAt;
}

/** Request payload for IntegrationTemplate#remove. */
class IntegrationTemplateRemoveMatch
{
    public string $id;
}

/** IntegrationsSetting entity data model. */
class IntegrationsSetting
{
    public mixed $archivedAt = null;
    public ?string $contextViewType = null;
    public mixed $createdAt;
    public string $id;
    public ?array $initiative = null;
    public ?bool $microsoftTeamsProjectUpdateCreated = null;
    public ?array $project = null;
    public ?bool $slackInitiativeUpdateCreated = null;
    public ?bool $slackIssueAddedToTriage = null;
    public ?bool $slackIssueAddedToView = null;
    public ?bool $slackIssueNewComment = null;
    public ?bool $slackIssueSlaBreached = null;
    public ?bool $slackIssueSlaHighRisk = null;
    public ?bool $slackIssueStatusChangedAll = null;
    public ?bool $slackIssueStatusChangedDone = null;
    public ?bool $slackProjectUpdateCreated = null;
    public ?bool $slackProjectUpdateCreatedToTeam = null;
    public ?bool $slackProjectUpdateCreatedToWorkspace = null;
    public ?array $team = null;
    public mixed $updatedAt;
}

/** Request payload for IntegrationsSetting#load. */
class IntegrationsSettingLoadMatch
{
    public string $id;
}

/** Request payload for IntegrationsSetting#create. */
class IntegrationsSettingCreateData
{
    public mixed $archivedAt = null;
    public ?string $contextViewType = null;
    public mixed $createdAt;
    public string $id;
    public ?array $initiative = null;
    public ?bool $microsoftTeamsProjectUpdateCreated = null;
    public ?array $project = null;
    public ?bool $slackInitiativeUpdateCreated = null;
    public ?bool $slackIssueAddedToTriage = null;
    public ?bool $slackIssueAddedToView = null;
    public ?bool $slackIssueNewComment = null;
    public ?bool $slackIssueSlaBreached = null;
    public ?bool $slackIssueSlaHighRisk = null;
    public ?bool $slackIssueStatusChangedAll = null;
    public ?bool $slackIssueStatusChangedDone = null;
    public ?bool $slackProjectUpdateCreated = null;
    public ?bool $slackProjectUpdateCreatedToTeam = null;
    public ?bool $slackProjectUpdateCreatedToWorkspace = null;
    public ?array $team = null;
    public mixed $updatedAt;
}

/** Request payload for IntegrationsSetting#update. */
class IntegrationsSettingUpdateData
{
    public string $id;
    public mixed $archivedAt = null;
    public ?string $contextViewType = null;
    public mixed $createdAt = null;
    public ?array $initiative = null;
    public ?bool $microsoftTeamsProjectUpdateCreated = null;
    public ?array $project = null;
    public ?bool $slackInitiativeUpdateCreated = null;
    public ?bool $slackIssueAddedToTriage = null;
    public ?bool $slackIssueAddedToView = null;
    public ?bool $slackIssueNewComment = null;
    public ?bool $slackIssueSlaBreached = null;
    public ?bool $slackIssueSlaHighRisk = null;
    public ?bool $slackIssueStatusChangedAll = null;
    public ?bool $slackIssueStatusChangedDone = null;
    public ?bool $slackProjectUpdateCreated = null;
    public ?bool $slackProjectUpdateCreatedToTeam = null;
    public ?bool $slackProjectUpdateCreatedToWorkspace = null;
    public ?array $team = null;
    public mixed $updatedAt = null;
}

/** Issue entity data model. */
class Issue
{
    public mixed $activitySummary = null;
    public mixed $addedToCycleAt = null;
    public mixed $addedToProjectAt = null;
    public mixed $addedToTeamAt = null;
    public mixed $archivedAt = null;
    public ?array $asksExternalUserRequester = null;
    public ?array $asksRequester = null;
    public ?array $assignee = null;
    public mixed $autoArchivedAt = null;
    public mixed $autoClosedAt = null;
    public ?array $botActor = null;
    public string $branchName;
    public mixed $canceledAt = null;
    public mixed $completedAt = null;
    public mixed $createdAt;
    public ?array $creator = null;
    public int $customerTicketCount;
    public ?array $cycle = null;
    public ?array $delegate = null;
    public ?string $description = null;
    public ?string $descriptionState = null;
    public ?array $documentContent = null;
    public mixed $dueDate = null;
    public ?float $estimate = null;
    public ?array $externalUserCreator = null;
    public ?array $favorite = null;
    public string $id;
    public string $identifier;
    public bool $inheritsSharedAccess;
    public ?string $integrationSourceType = null;
    public string $labelIds;
    public ?array $lastAppliedTemplate = null;
    public float $number;
    public ?array $parent = null;
    public string $previousIdentifiers;
    public float $priority;
    public string $priorityLabel;
    public float $prioritySortOrder;
    public ?array $project = null;
    public ?array $projectMilestone = null;
    public mixed $reactionData;
    public ?array $recurringIssueTemplate = null;
    public mixed $slaBreachesAt = null;
    public mixed $slaHighRiskAt = null;
    public mixed $slaMediumRiskAt = null;
    public mixed $slaStartedAt = null;
    public ?string $slaType = null;
    public ?array $snoozedBy = null;
    public mixed $snoozedUntilAt = null;
    public float $sortOrder;
    public ?array $sourceComment = null;
    public mixed $startedAt = null;
    public mixed $startedTriageAt = null;
    public ?array $state = null;
    public ?float $subIssueSortOrder = null;
    public mixed $suggestionsGeneratedAt = null;
    public ?array $summary = null;
    public ?array $team = null;
    public string $title;
    public ?bool $trashed = null;
    public mixed $triagedAt = null;
    public ?bool $trusted = null;
    public mixed $updatedAt;
    public string $url;
}

/** Request payload for Issue#load. */
class IssueLoadMatch
{
    public ?string $branch_name = null;
    public ?string $id = null;
}

/** Request payload for Issue#list. */
class IssueListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?string $file_key = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
    public ?string $query = null;
}

/** Request payload for Issue#create. */
class IssueCreateData
{
    public mixed $activitySummary = null;
    public mixed $addedToCycleAt = null;
    public mixed $addedToProjectAt = null;
    public mixed $addedToTeamAt = null;
    public mixed $archivedAt = null;
    public ?array $asksExternalUserRequester = null;
    public ?array $asksRequester = null;
    public ?array $assignee = null;
    public mixed $autoArchivedAt = null;
    public mixed $autoClosedAt = null;
    public ?array $botActor = null;
    public string $branchName;
    public mixed $canceledAt = null;
    public mixed $completedAt = null;
    public mixed $createdAt;
    public ?array $creator = null;
    public int $customerTicketCount;
    public ?array $cycle = null;
    public ?array $delegate = null;
    public ?string $description = null;
    public ?string $descriptionState = null;
    public ?array $documentContent = null;
    public mixed $dueDate = null;
    public ?float $estimate = null;
    public ?array $externalUserCreator = null;
    public ?array $favorite = null;
    public string $id;
    public string $identifier;
    public bool $inheritsSharedAccess;
    public ?string $integrationSourceType = null;
    public string $labelIds;
    public ?array $lastAppliedTemplate = null;
    public float $number;
    public ?array $parent = null;
    public string $previousIdentifiers;
    public float $priority;
    public string $priorityLabel;
    public float $prioritySortOrder;
    public ?array $project = null;
    public ?array $projectMilestone = null;
    public mixed $reactionData;
    public ?array $recurringIssueTemplate = null;
    public mixed $slaBreachesAt = null;
    public mixed $slaHighRiskAt = null;
    public mixed $slaMediumRiskAt = null;
    public mixed $slaStartedAt = null;
    public ?string $slaType = null;
    public ?array $snoozedBy = null;
    public mixed $snoozedUntilAt = null;
    public float $sortOrder;
    public ?array $sourceComment = null;
    public mixed $startedAt = null;
    public mixed $startedTriageAt = null;
    public ?array $state = null;
    public ?float $subIssueSortOrder = null;
    public mixed $suggestionsGeneratedAt = null;
    public ?array $summary = null;
    public ?array $team = null;
    public string $title;
    public ?bool $trashed = null;
    public mixed $triagedAt = null;
    public ?bool $trusted = null;
    public mixed $updatedAt;
    public string $url;
}

/** Request payload for Issue#update. */
class IssueUpdateData
{
    public string $id;
    public mixed $activitySummary = null;
    public mixed $addedToCycleAt = null;
    public mixed $addedToProjectAt = null;
    public mixed $addedToTeamAt = null;
    public mixed $archivedAt = null;
    public ?array $asksExternalUserRequester = null;
    public ?array $asksRequester = null;
    public ?array $assignee = null;
    public mixed $autoArchivedAt = null;
    public mixed $autoClosedAt = null;
    public ?array $botActor = null;
    public ?string $branchName = null;
    public mixed $canceledAt = null;
    public mixed $completedAt = null;
    public mixed $createdAt = null;
    public ?array $creator = null;
    public ?int $customerTicketCount = null;
    public ?array $cycle = null;
    public ?array $delegate = null;
    public ?string $description = null;
    public ?string $descriptionState = null;
    public ?array $documentContent = null;
    public mixed $dueDate = null;
    public ?float $estimate = null;
    public ?array $externalUserCreator = null;
    public ?array $favorite = null;
    public ?string $identifier = null;
    public ?bool $inheritsSharedAccess = null;
    public ?string $integrationSourceType = null;
    public ?string $labelIds = null;
    public ?array $lastAppliedTemplate = null;
    public ?float $number = null;
    public ?array $parent = null;
    public ?string $previousIdentifiers = null;
    public ?float $priority = null;
    public ?string $priorityLabel = null;
    public ?float $prioritySortOrder = null;
    public ?array $project = null;
    public ?array $projectMilestone = null;
    public mixed $reactionData = null;
    public ?array $recurringIssueTemplate = null;
    public mixed $slaBreachesAt = null;
    public mixed $slaHighRiskAt = null;
    public mixed $slaMediumRiskAt = null;
    public mixed $slaStartedAt = null;
    public ?string $slaType = null;
    public ?array $snoozedBy = null;
    public mixed $snoozedUntilAt = null;
    public ?float $sortOrder = null;
    public ?array $sourceComment = null;
    public mixed $startedAt = null;
    public mixed $startedTriageAt = null;
    public ?array $state = null;
    public ?float $subIssueSortOrder = null;
    public mixed $suggestionsGeneratedAt = null;
    public ?array $summary = null;
    public ?array $team = null;
    public ?string $title = null;
    public ?bool $trashed = null;
    public mixed $triagedAt = null;
    public ?bool $trusted = null;
    public mixed $updatedAt = null;
    public ?string $url = null;
}

/** Request payload for Issue#remove. */
class IssueRemoveMatch
{
    public string $id;
    public ?bool $permanently_delete = null;
}

/** IssueImport entity data model. */
class IssueImport
{
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public ?string $creatorId = null;
    public ?string $csvFileUrl = null;
    public string $displayName;
    public ?string $error = null;
    public mixed $errorMetadata = null;
    public string $id;
    public mixed $mapping = null;
    public ?float $progress = null;
    public string $service;
    public mixed $serviceMetadata = null;
    public string $status;
    public ?string $teamName = null;
    public mixed $updatedAt;
}

/** Request payload for IssueImport#create. */
class IssueImportCreateData
{
    public ?string $id = null;
    public ?bool $include_closed_issue = null;
    public ?bool $instant_process = null;
    public ?string $jira_email = null;
    public ?string $jira_hostname = null;
    public ?string $jira_project = null;
    public ?string $jira_token = null;
    public ?string $jql = null;
    public ?string $team_id = null;
    public ?string $team_name = null;
    public ?string $asana_team_name = null;
    public ?string $asana_token = null;
    public ?string $clubhouse_group_name = null;
    public ?string $clubhouse_token = null;
    public ?string $csv_url = null;
    public ?string $github_label = null;
    public ?int $github_repo_id = null;
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public ?string $creatorId = null;
    public ?string $csvFileUrl = null;
    public string $displayName;
    public ?string $error = null;
    public mixed $errorMetadata = null;
    public mixed $mapping = null;
    public ?float $progress = null;
    public string $service;
    public mixed $serviceMetadata = null;
    public string $status;
    public ?string $teamName = null;
    public mixed $updatedAt;
}

/** Request payload for IssueImport#update. */
class IssueImportUpdateData
{
    public string $id;
    public mixed $archivedAt = null;
    public mixed $createdAt = null;
    public ?string $creatorId = null;
    public ?string $csvFileUrl = null;
    public ?string $displayName = null;
    public ?string $error = null;
    public mixed $errorMetadata = null;
    public mixed $mapping = null;
    public ?float $progress = null;
    public ?string $service = null;
    public mixed $serviceMetadata = null;
    public ?string $status = null;
    public ?string $teamName = null;
    public mixed $updatedAt = null;
}

/** Request payload for IssueImport#remove. */
class IssueImportRemoveMatch
{
    public string $issue_import_id;
}

/** IssueLabel entity data model. */
class IssueLabel
{
    public mixed $archivedAt = null;
    public string $color;
    public mixed $createdAt;
    public ?array $creator = null;
    public ?string $description = null;
    public ?string $groupType = null;
    public string $id;
    public ?array $inheritedFrom = null;
    public bool $isGroup;
    public mixed $lastAppliedAt = null;
    public string $name;
    public ?array $parent = null;
    public mixed $retiredAt = null;
    public ?array $retiredBy = null;
    public ?array $team = null;
    public mixed $updatedAt;
}

/** Request payload for IssueLabel#load. */
class IssueLabelLoadMatch
{
    public string $id;
}

/** Request payload for IssueLabel#list. */
class IssueLabelListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for IssueLabel#create. */
class IssueLabelCreateData
{
    public ?bool $replace_team_label = null;
    public mixed $archivedAt = null;
    public string $color;
    public mixed $createdAt;
    public ?array $creator = null;
    public ?string $description = null;
    public ?string $groupType = null;
    public string $id;
    public ?array $inheritedFrom = null;
    public bool $isGroup;
    public mixed $lastAppliedAt = null;
    public string $name;
    public ?array $parent = null;
    public mixed $retiredAt = null;
    public ?array $retiredBy = null;
    public ?array $team = null;
    public mixed $updatedAt;
}

/** Request payload for IssueLabel#update. */
class IssueLabelUpdateData
{
    public string $id;
    public ?bool $replace_team_label = null;
    public mixed $archivedAt = null;
    public ?string $color = null;
    public mixed $createdAt = null;
    public ?array $creator = null;
    public ?string $description = null;
    public ?string $groupType = null;
    public ?array $inheritedFrom = null;
    public ?bool $isGroup = null;
    public mixed $lastAppliedAt = null;
    public ?string $name = null;
    public ?array $parent = null;
    public mixed $retiredAt = null;
    public ?array $retiredBy = null;
    public ?array $team = null;
    public mixed $updatedAt = null;
}

/** Request payload for IssueLabel#remove. */
class IssueLabelRemoveMatch
{
    public string $id;
}

/** IssuePriorityValue entity data model. */
class IssuePriorityValue
{
    public string $label;
    public int $priority;
}

/** Request payload for IssuePriorityValue#list. */
class IssuePriorityValueListMatch
{
    public ?string $label = null;
    public ?int $priority = null;
}

/** IssueRelation entity data model. */
class IssueRelation
{
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public string $id;
    public ?array $issue = null;
    public ?array $relatedIssue = null;
    public string $type;
    public mixed $updatedAt;
}

/** Request payload for IssueRelation#load. */
class IssueRelationLoadMatch
{
    public string $id;
}

/** Request payload for IssueRelation#list. */
class IssueRelationListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for IssueRelation#create. */
class IssueRelationCreateData
{
    public mixed $override_created_at = null;
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public string $id;
    public ?array $issue = null;
    public ?array $relatedIssue = null;
    public string $type;
    public mixed $updatedAt;
}

/** Request payload for IssueRelation#update. */
class IssueRelationUpdateData
{
    public string $id;
    public mixed $archivedAt = null;
    public mixed $createdAt = null;
    public ?array $issue = null;
    public ?array $relatedIssue = null;
    public ?string $type = null;
    public mixed $updatedAt = null;
}

/** Request payload for IssueRelation#remove. */
class IssueRelationRemoveMatch
{
    public string $id;
}

/** IssueSearchResult entity data model. */
class IssueSearchResult
{
    public mixed $activitySummary = null;
    public mixed $addedToCycleAt = null;
    public mixed $addedToProjectAt = null;
    public mixed $addedToTeamAt = null;
    public mixed $archivedAt = null;
    public ?array $asksExternalUserRequester = null;
    public ?array $asksRequester = null;
    public ?array $assignee = null;
    public mixed $autoArchivedAt = null;
    public mixed $autoClosedAt = null;
    public ?array $botActor = null;
    public string $branchName;
    public mixed $canceledAt = null;
    public mixed $completedAt = null;
    public mixed $createdAt;
    public ?array $creator = null;
    public int $customerTicketCount;
    public ?array $cycle = null;
    public ?array $delegate = null;
    public ?string $description = null;
    public ?string $descriptionState = null;
    public ?array $documentContent = null;
    public mixed $dueDate = null;
    public ?float $estimate = null;
    public ?array $externalUserCreator = null;
    public ?array $favorite = null;
    public string $id;
    public string $identifier;
    public bool $inheritsSharedAccess;
    public ?string $integrationSourceType = null;
    public string $labelIds;
    public ?array $lastAppliedTemplate = null;
    public mixed $metadata;
    public float $number;
    public ?array $parent = null;
    public string $previousIdentifiers;
    public float $priority;
    public string $priorityLabel;
    public float $prioritySortOrder;
    public ?array $project = null;
    public ?array $projectMilestone = null;
    public mixed $reactionData;
    public ?array $recurringIssueTemplate = null;
    public mixed $slaBreachesAt = null;
    public mixed $slaHighRiskAt = null;
    public mixed $slaMediumRiskAt = null;
    public mixed $slaStartedAt = null;
    public ?string $slaType = null;
    public ?array $snoozedBy = null;
    public mixed $snoozedUntilAt = null;
    public float $sortOrder;
    public ?array $sourceComment = null;
    public mixed $startedAt = null;
    public mixed $startedTriageAt = null;
    public ?array $state = null;
    public ?float $subIssueSortOrder = null;
    public mixed $suggestionsGeneratedAt = null;
    public ?array $summary = null;
    public ?array $team = null;
    public string $title;
    public ?bool $trashed = null;
    public mixed $triagedAt = null;
    public ?bool $trusted = null;
    public mixed $updatedAt;
    public string $url;
}

/** Request payload for IssueSearchResult#list. */
class IssueSearchResultListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?bool $include_comment = null;
    public ?int $last = null;
    public mixed $order_by = null;
    public ?string $team_id = null;
    public string $term;
}

/** IssueToRelease entity data model. */
class IssueToRelease
{
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public string $id;
    public ?array $issue = null;
    public ?array $release = null;
    public mixed $updatedAt;
}

/** Request payload for IssueToRelease#load. */
class IssueToReleaseLoadMatch
{
    public string $id;
}

/** Request payload for IssueToRelease#list. */
class IssueToReleaseListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for IssueToRelease#create. */
class IssueToReleaseCreateData
{
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public string $id;
    public ?array $issue = null;
    public ?array $release = null;
    public mixed $updatedAt;
}

/** Request payload for IssueToRelease#remove. */
class IssueToReleaseRemoveMatch
{
    public string $id;
}

/** LogoutResponse entity data model. */
class LogoutResponse
{
    public bool $success;
}

/** Request payload for LogoutResponse#create. */
class LogoutResponseCreateData
{
    public ?string $reason = null;
    public bool $success;
}

/** Request payload for LogoutResponse#update. */
class LogoutResponseUpdateData
{
    public string $session_id;
    public ?bool $success = null;
}

/** Notification entity data model. */
class Notification
{
    public ?array $actor = null;
    public string $actorAvatarColor;
    public ?string $actorAvatarUrl = null;
    public bool $actorInactive;
    public ?string $actorInitials = null;
    public mixed $archivedAt = null;
    public ?array $botActor = null;
    public string $category;
    public mixed $createdAt;
    public mixed $emailedAt = null;
    public ?array $externalUserActor = null;
    public string $groupingKey;
    public float $groupingPriority;
    public string $id;
    public string $inboxUrl;
    public ?string $initiativeUpdateHealth = null;
    public bool $isLinearActor;
    public ?string $issueStatusType = null;
    public ?string $projectUpdateHealth = null;
    public mixed $readAt = null;
    public mixed $snoozedUntilAt = null;
    public string $subtitle;
    public string $title;
    public string $type;
    public mixed $unsnoozedAt = null;
    public mixed $updatedAt;
    public string $url;
    public ?array $user = null;
}

/** Request payload for Notification#load. */
class NotificationLoadMatch
{
    public string $id;
}

/** Request payload for Notification#list. */
class NotificationListMatch
{
    public ?string $after = null;
    public ?int $first = null;
    public ?bool $unread_only = null;
    public ?string $before = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** NotificationSubscription entity data model. */
class NotificationSubscription
{
    public bool $active;
    public mixed $archivedAt = null;
    public ?string $contextViewType = null;
    public mixed $createdAt;
    public ?array $customView = null;
    public ?array $customer = null;
    public ?array $cycle = null;
    public string $id;
    public ?array $initiative = null;
    public ?array $label = null;
    public ?array $project = null;
    public ?array $subscriber = null;
    public ?array $team = null;
    public mixed $updatedAt;
    public ?array $user = null;
    public ?string $userContextViewType = null;
}

/** Request payload for NotificationSubscription#load. */
class NotificationSubscriptionLoadMatch
{
    public string $id;
}

/** Request payload for NotificationSubscription#list. */
class NotificationSubscriptionListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** OAuthApplication entity data model. */
class OAuthApplication
{
    public string $clientId;
    public mixed $createdAt;
    public ?string $description = null;
    public string $developer;
    public string $developerUrl;
    public string $distribution;
    public string $grantTypes;
    public string $id;
    public ?string $imageUrl = null;
    public string $name;
    public string $redirectUris;
    public mixed $updatedAt;
    public bool $webhookEnabled;
    public string $webhookResourceTypes;
    public ?string $webhookUrl = null;
}

/** Request payload for OAuthApplication#load. */
class OAuthApplicationLoadMatch
{
    public string $id;
}

/** Request payload for OAuthApplication#list. */
class OAuthApplicationListMatch
{
    public ?string $clientId = null;
    public mixed $createdAt = null;
    public ?string $description = null;
    public ?string $developer = null;
    public ?string $developerUrl = null;
    public ?string $distribution = null;
    public ?string $grantTypes = null;
    public ?string $id = null;
    public ?string $imageUrl = null;
    public ?string $name = null;
    public ?string $redirectUris = null;
    public mixed $updatedAt = null;
    public ?bool $webhookEnabled = null;
    public ?string $webhookResourceTypes = null;
    public ?string $webhookUrl = null;
}

/** Request payload for OAuthApplication#create. */
class OAuthApplicationCreateData
{
    public string $clientId;
    public mixed $createdAt;
    public ?string $description = null;
    public string $developer;
    public string $developerUrl;
    public string $distribution;
    public string $grantTypes;
    public string $id;
    public ?string $imageUrl = null;
    public string $name;
    public string $redirectUris;
    public mixed $updatedAt;
    public bool $webhookEnabled;
    public string $webhookResourceTypes;
    public ?string $webhookUrl = null;
}

/** Request payload for OAuthApplication#update. */
class OAuthApplicationUpdateData
{
    public string $id;
    public ?string $clientId = null;
    public mixed $createdAt = null;
    public ?string $description = null;
    public ?string $developer = null;
    public ?string $developerUrl = null;
    public ?string $distribution = null;
    public ?string $grantTypes = null;
    public ?string $imageUrl = null;
    public ?string $name = null;
    public ?string $redirectUris = null;
    public mixed $updatedAt = null;
    public ?bool $webhookEnabled = null;
    public ?string $webhookResourceTypes = null;
    public ?string $webhookUrl = null;
}

/** Organization entity data model. */
class Organization
{
    public bool $agentAutomationEnabled;
    public bool $aiAddonEnabled;
    public bool $aiDiscussionSummariesEnabled;
    public mixed $aiProviderConfiguration = null;
    public bool $aiTelemetryEnabled;
    public bool $aiThreadSummariesEnabled;
    public ?string $allowedFileUploadContentTypes = null;
    public mixed $archivedAt = null;
    public mixed $authSettings;
    public bool $codeIntelligenceEnabled;
    public ?string $codeIntelligenceRepository = null;
    public bool $codingAgentEnabled;
    public mixed $codingAgentSettings;
    public mixed $createdAt;
    public int $createdIssueCount;
    public int $customerCount;
    public mixed $customersConfiguration;
    public bool $customersEnabled;
    public ?string $defaultFeedSummarySchedule = null;
    public ?string $defaultHomeView = null;
    public ?string $defaultHomeViewTargetId = null;
    public mixed $deletionRequestedAt = null;
    public bool $feedEnabled;
    public float $fiscalYearStartMonth;
    public bool $generatedUpdatesEnabled;
    public ?string $gitBranchFormat = null;
    public bool $gitLinkbackDescriptionsEnabled;
    public bool $gitLinkbackMessagesEnabled;
    public bool $gitPublicLinkbackMessagesEnabled;
    public bool $hipaaComplianceEnabled;
    public string $id;
    public ?float $initiativeUpdateReminderFrequencyInWeeks = null;
    public string $initiativeUpdateRemindersDay;
    public float $initiativeUpdateRemindersHour;
    public bool $linearAgentEnabled;
    public mixed $linearAgentSettings;
    public ?string $logoUrl = null;
    public string $name;
    public float $periodUploadVolume;
    public string $previousUrlKeys;
    public ?float $projectUpdateReminderFrequencyInWeeks = null;
    public string $projectUpdateRemindersDay;
    public float $projectUpdateRemindersHour;
    public string $pullRequestIssueMode;
    public bool $pullRequestTourEnabled;
    public string $releaseChannel;
    public bool $releasesEnabled;
    public ?bool $restrictAgentInvocationToMembers = null;
    public bool $roadmapEnabled;
    public bool $samlEnabled;
    public mixed $samlSettings = null;
    public bool $scimEnabled;
    public mixed $scimSettings = null;
    public mixed $securitySettings;
    public bool $slackAutoCreateProjectChannel;
    public ?array $slackProjectChannelIntegration = null;
    public string $slackProjectChannelPrefix;
    public bool $slackProjectChannelsEnabled;
    public ?array $subscription = null;
    public mixed $themeSettings = null;
    public mixed $trialEndsAt = null;
    public mixed $trialStartsAt = null;
    public mixed $updatedAt;
    public string $urlKey;
    public int $userCount;
    public float $workingDays;
}

/** Request payload for Organization#load. */
class OrganizationLoadMatch
{
    public ?bool $agentAutomationEnabled = null;
    public ?bool $aiAddonEnabled = null;
    public ?bool $aiDiscussionSummariesEnabled = null;
    public mixed $aiProviderConfiguration = null;
    public ?bool $aiTelemetryEnabled = null;
    public ?bool $aiThreadSummariesEnabled = null;
    public ?string $allowedFileUploadContentTypes = null;
    public mixed $archivedAt = null;
    public mixed $authSettings = null;
    public ?bool $codeIntelligenceEnabled = null;
    public ?string $codeIntelligenceRepository = null;
    public ?bool $codingAgentEnabled = null;
    public mixed $codingAgentSettings = null;
    public mixed $createdAt = null;
    public ?int $createdIssueCount = null;
    public ?int $customerCount = null;
    public mixed $customersConfiguration = null;
    public ?bool $customersEnabled = null;
    public ?string $defaultFeedSummarySchedule = null;
    public ?string $defaultHomeView = null;
    public ?string $defaultHomeViewTargetId = null;
    public mixed $deletionRequestedAt = null;
    public ?bool $feedEnabled = null;
    public ?float $fiscalYearStartMonth = null;
    public ?bool $generatedUpdatesEnabled = null;
    public ?string $gitBranchFormat = null;
    public ?bool $gitLinkbackDescriptionsEnabled = null;
    public ?bool $gitLinkbackMessagesEnabled = null;
    public ?bool $gitPublicLinkbackMessagesEnabled = null;
    public ?bool $hipaaComplianceEnabled = null;
    public string $id;
    public ?float $initiativeUpdateReminderFrequencyInWeeks = null;
    public ?string $initiativeUpdateRemindersDay = null;
    public ?float $initiativeUpdateRemindersHour = null;
    public ?bool $linearAgentEnabled = null;
    public mixed $linearAgentSettings = null;
    public ?string $logoUrl = null;
    public ?string $name = null;
    public ?float $periodUploadVolume = null;
    public ?string $previousUrlKeys = null;
    public ?float $projectUpdateReminderFrequencyInWeeks = null;
    public ?string $projectUpdateRemindersDay = null;
    public ?float $projectUpdateRemindersHour = null;
    public ?string $pullRequestIssueMode = null;
    public ?bool $pullRequestTourEnabled = null;
    public ?string $releaseChannel = null;
    public ?bool $releasesEnabled = null;
    public ?bool $restrictAgentInvocationToMembers = null;
    public ?bool $roadmapEnabled = null;
    public ?bool $samlEnabled = null;
    public mixed $samlSettings = null;
    public ?bool $scimEnabled = null;
    public mixed $scimSettings = null;
    public mixed $securitySettings = null;
    public ?bool $slackAutoCreateProjectChannel = null;
    public ?array $slackProjectChannelIntegration = null;
    public ?string $slackProjectChannelPrefix = null;
    public ?bool $slackProjectChannelsEnabled = null;
    public ?array $subscription = null;
    public mixed $themeSettings = null;
    public mixed $trialEndsAt = null;
    public mixed $trialStartsAt = null;
    public mixed $updatedAt = null;
    public ?string $urlKey = null;
    public ?int $userCount = null;
    public ?float $workingDays = null;
}

/** Request payload for Organization#update. */
class OrganizationUpdateData
{
    public ?bool $agentAutomationEnabled = null;
    public ?bool $aiAddonEnabled = null;
    public ?bool $aiDiscussionSummariesEnabled = null;
    public mixed $aiProviderConfiguration = null;
    public ?bool $aiTelemetryEnabled = null;
    public ?bool $aiThreadSummariesEnabled = null;
    public ?string $allowedFileUploadContentTypes = null;
    public mixed $archivedAt = null;
    public mixed $authSettings = null;
    public ?bool $codeIntelligenceEnabled = null;
    public ?string $codeIntelligenceRepository = null;
    public ?bool $codingAgentEnabled = null;
    public mixed $codingAgentSettings = null;
    public mixed $createdAt = null;
    public ?int $createdIssueCount = null;
    public ?int $customerCount = null;
    public mixed $customersConfiguration = null;
    public ?bool $customersEnabled = null;
    public ?string $defaultFeedSummarySchedule = null;
    public ?string $defaultHomeView = null;
    public ?string $defaultHomeViewTargetId = null;
    public mixed $deletionRequestedAt = null;
    public ?bool $feedEnabled = null;
    public ?float $fiscalYearStartMonth = null;
    public ?bool $generatedUpdatesEnabled = null;
    public ?string $gitBranchFormat = null;
    public ?bool $gitLinkbackDescriptionsEnabled = null;
    public ?bool $gitLinkbackMessagesEnabled = null;
    public ?bool $gitPublicLinkbackMessagesEnabled = null;
    public ?bool $hipaaComplianceEnabled = null;
    public ?string $id = null;
    public ?float $initiativeUpdateReminderFrequencyInWeeks = null;
    public ?string $initiativeUpdateRemindersDay = null;
    public ?float $initiativeUpdateRemindersHour = null;
    public ?bool $linearAgentEnabled = null;
    public mixed $linearAgentSettings = null;
    public ?string $logoUrl = null;
    public ?string $name = null;
    public ?float $periodUploadVolume = null;
    public ?string $previousUrlKeys = null;
    public ?float $projectUpdateReminderFrequencyInWeeks = null;
    public ?string $projectUpdateRemindersDay = null;
    public ?float $projectUpdateRemindersHour = null;
    public ?string $pullRequestIssueMode = null;
    public ?bool $pullRequestTourEnabled = null;
    public ?string $releaseChannel = null;
    public ?bool $releasesEnabled = null;
    public ?bool $restrictAgentInvocationToMembers = null;
    public ?bool $roadmapEnabled = null;
    public ?bool $samlEnabled = null;
    public mixed $samlSettings = null;
    public ?bool $scimEnabled = null;
    public mixed $scimSettings = null;
    public mixed $securitySettings = null;
    public ?bool $slackAutoCreateProjectChannel = null;
    public ?array $slackProjectChannelIntegration = null;
    public ?string $slackProjectChannelPrefix = null;
    public ?bool $slackProjectChannelsEnabled = null;
    public ?array $subscription = null;
    public mixed $themeSettings = null;
    public mixed $trialEndsAt = null;
    public mixed $trialStartsAt = null;
    public mixed $updatedAt = null;
    public ?string $urlKey = null;
    public ?int $userCount = null;
    public ?float $workingDays = null;
}

/** Request payload for Organization#remove. */
class OrganizationRemoveMatch
{
    public ?bool $agentAutomationEnabled = null;
    public ?bool $aiAddonEnabled = null;
    public ?bool $aiDiscussionSummariesEnabled = null;
    public mixed $aiProviderConfiguration = null;
    public ?bool $aiTelemetryEnabled = null;
    public ?bool $aiThreadSummariesEnabled = null;
    public ?string $allowedFileUploadContentTypes = null;
    public mixed $archivedAt = null;
    public mixed $authSettings = null;
    public ?bool $codeIntelligenceEnabled = null;
    public ?string $codeIntelligenceRepository = null;
    public ?bool $codingAgentEnabled = null;
    public mixed $codingAgentSettings = null;
    public mixed $createdAt = null;
    public ?int $createdIssueCount = null;
    public ?int $customerCount = null;
    public mixed $customersConfiguration = null;
    public ?bool $customersEnabled = null;
    public ?string $defaultFeedSummarySchedule = null;
    public ?string $defaultHomeView = null;
    public ?string $defaultHomeViewTargetId = null;
    public mixed $deletionRequestedAt = null;
    public ?bool $feedEnabled = null;
    public ?float $fiscalYearStartMonth = null;
    public ?bool $generatedUpdatesEnabled = null;
    public ?string $gitBranchFormat = null;
    public ?bool $gitLinkbackDescriptionsEnabled = null;
    public ?bool $gitLinkbackMessagesEnabled = null;
    public ?bool $gitPublicLinkbackMessagesEnabled = null;
    public ?bool $hipaaComplianceEnabled = null;
    public string $id;
    public ?float $initiativeUpdateReminderFrequencyInWeeks = null;
    public ?string $initiativeUpdateRemindersDay = null;
    public ?float $initiativeUpdateRemindersHour = null;
    public ?bool $linearAgentEnabled = null;
    public mixed $linearAgentSettings = null;
    public ?string $logoUrl = null;
    public ?string $name = null;
    public ?float $periodUploadVolume = null;
    public ?string $previousUrlKeys = null;
    public ?float $projectUpdateReminderFrequencyInWeeks = null;
    public ?string $projectUpdateRemindersDay = null;
    public ?float $projectUpdateRemindersHour = null;
    public ?string $pullRequestIssueMode = null;
    public ?bool $pullRequestTourEnabled = null;
    public ?string $releaseChannel = null;
    public ?bool $releasesEnabled = null;
    public ?bool $restrictAgentInvocationToMembers = null;
    public ?bool $roadmapEnabled = null;
    public ?bool $samlEnabled = null;
    public mixed $samlSettings = null;
    public ?bool $scimEnabled = null;
    public mixed $scimSettings = null;
    public mixed $securitySettings = null;
    public ?bool $slackAutoCreateProjectChannel = null;
    public ?array $slackProjectChannelIntegration = null;
    public ?string $slackProjectChannelPrefix = null;
    public ?bool $slackProjectChannelsEnabled = null;
    public ?array $subscription = null;
    public mixed $themeSettings = null;
    public mixed $trialEndsAt = null;
    public mixed $trialStartsAt = null;
    public mixed $updatedAt = null;
    public ?string $urlKey = null;
    public ?int $userCount = null;
    public ?float $workingDays = null;
}

/** OrganizationDomain entity data model. */
class OrganizationDomain
{
    public mixed $archivedAt = null;
    public string $authType;
    public ?bool $claimed = null;
    public mixed $createdAt;
    public ?array $creator = null;
    public ?bool $disableOrganizationCreation = null;
    public string $id;
    public ?array $identityProvider = null;
    public string $name;
    public mixed $updatedAt;
    public ?string $verificationEmail = null;
    public bool $verified;
}

/** Request payload for OrganizationDomain#create. */
class OrganizationDomainCreateData
{
    public ?bool $trigger_email_verification = null;
    public mixed $archivedAt = null;
    public string $authType;
    public ?bool $claimed = null;
    public mixed $createdAt;
    public ?array $creator = null;
    public ?bool $disableOrganizationCreation = null;
    public string $id;
    public ?array $identityProvider = null;
    public string $name;
    public mixed $updatedAt;
    public ?string $verificationEmail = null;
    public bool $verified;
}

/** Request payload for OrganizationDomain#update. */
class OrganizationDomainUpdateData
{
    public string $id;
    public mixed $archivedAt = null;
    public ?string $authType = null;
    public ?bool $claimed = null;
    public mixed $createdAt = null;
    public ?array $creator = null;
    public ?bool $disableOrganizationCreation = null;
    public ?array $identityProvider = null;
    public ?string $name = null;
    public mixed $updatedAt = null;
    public ?string $verificationEmail = null;
    public ?bool $verified = null;
}

/** Request payload for OrganizationDomain#remove. */
class OrganizationDomainRemoveMatch
{
    public string $id;
}

/** OrganizationInvite entity data model. */
class OrganizationInvite
{
    public mixed $acceptedAt = null;
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public string $email;
    public mixed $expiresAt = null;
    public bool $external;
    public string $id;
    public ?array $invitee = null;
    public ?array $inviter = null;
    public mixed $metadata = null;
    public ?array $organization = null;
    public string $role;
    public mixed $updatedAt;
}

/** Request payload for OrganizationInvite#load. */
class OrganizationInviteLoadMatch
{
    public string $id;
}

/** Request payload for OrganizationInvite#list. */
class OrganizationInviteListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for OrganizationInvite#create. */
class OrganizationInviteCreateData
{
    public mixed $acceptedAt = null;
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public string $email;
    public mixed $expiresAt = null;
    public bool $external;
    public string $id;
    public ?array $invitee = null;
    public ?array $inviter = null;
    public mixed $metadata = null;
    public ?array $organization = null;
    public string $role;
    public mixed $updatedAt;
}

/** Request payload for OrganizationInvite#update. */
class OrganizationInviteUpdateData
{
    public string $id;
    public mixed $acceptedAt = null;
    public mixed $archivedAt = null;
    public mixed $createdAt = null;
    public ?string $email = null;
    public mixed $expiresAt = null;
    public ?bool $external = null;
    public ?array $invitee = null;
    public ?array $inviter = null;
    public mixed $metadata = null;
    public ?array $organization = null;
    public ?string $role = null;
    public mixed $updatedAt = null;
}

/** Request payload for OrganizationInvite#remove. */
class OrganizationInviteRemoveMatch
{
    public string $id;
}

/** OrganizationMeta entity data model. */
class OrganizationMeta
{
    public string $allowedAuthServices;
    public string $region;
}

/** Request payload for OrganizationMeta#load. */
class OrganizationMetaLoadMatch
{
    public string $url_key;
}

/** PasskeyLoginStartResponse entity data model. */
class PasskeyLoginStartResponse
{
    public mixed $options;
    public bool $success;
}

/** Request payload for PasskeyLoginStartResponse#update. */
class PasskeyLoginStartResponseUpdateData
{
    public string $auth_id;
    public mixed $options = null;
    public ?bool $success = null;
}

/** Project entity data model. */
class Project
{
    public mixed $archivedAt = null;
    public mixed $autoArchivedAt = null;
    public mixed $canceledAt = null;
    public string $color;
    public mixed $completedAt = null;
    public float $completedIssueCountHistory;
    public float $completedScopeHistory;
    public ?string $content = null;
    public ?string $contentState = null;
    public ?array $convertedFromIssue = null;
    public mixed $createdAt;
    public ?array $creator = null;
    public mixed $currentProgress;
    public string $description;
    public ?array $documentContent = null;
    public ?array $favorite = null;
    public string $frequencyResolution;
    public ?string $health = null;
    public mixed $healthUpdatedAt = null;
    public ?string $icon = null;
    public string $id;
    public ?string $identifier = null;
    public float $inProgressScopeHistory;
    public ?array $integrationsSettings = null;
    public float $issueCountHistory;
    public string $labelIds;
    public ?array $lastAppliedTemplate = null;
    public ?array $lastUpdate = null;
    public ?array $lead = null;
    public ?array $leadTeam = null;
    public ?string $microsoftTeamsChannelId = null;
    public string $name;
    public string $previousIdentifiers;
    public int $priority;
    public string $priorityLabel;
    public float $prioritySortOrder;
    public float $progress;
    public mixed $progressHistory;
    public mixed $projectUpdateRemindersPausedUntilAt = null;
    public int $resourceCount;
    public float $scope;
    public float $scopeHistory;
    public ?string $slackChannelId = null;
    public string $slugId;
    public float $sortOrder;
    public mixed $startDate = null;
    public ?string $startDateResolution = null;
    public mixed $startedAt = null;
    public ?array $status = null;
    public mixed $targetDate = null;
    public ?string $targetDateResolution = null;
    public ?bool $trashed = null;
    public ?float $updateReminderFrequency = null;
    public ?float $updateReminderFrequencyInWeeks = null;
    public ?string $updateRemindersDay = null;
    public ?float $updateRemindersHour = null;
    public mixed $updatedAt;
    public string $url;
}

/** Request payload for Project#load. */
class ProjectLoadMatch
{
    public string $id;
}

/** Request payload for Project#list. */
class ProjectListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for Project#create. */
class ProjectCreateData
{
    public ?string $ai_conversation_id = null;
    public ?string $project_draft_id = null;
    public ?string $slack_channel_name = null;
    public mixed $archivedAt = null;
    public mixed $autoArchivedAt = null;
    public mixed $canceledAt = null;
    public string $color;
    public mixed $completedAt = null;
    public float $completedIssueCountHistory;
    public float $completedScopeHistory;
    public ?string $content = null;
    public ?string $contentState = null;
    public ?array $convertedFromIssue = null;
    public mixed $createdAt;
    public ?array $creator = null;
    public mixed $currentProgress;
    public string $description;
    public ?array $documentContent = null;
    public ?array $favorite = null;
    public string $frequencyResolution;
    public ?string $health = null;
    public mixed $healthUpdatedAt = null;
    public ?string $icon = null;
    public string $id;
    public ?string $identifier = null;
    public float $inProgressScopeHistory;
    public ?array $integrationsSettings = null;
    public float $issueCountHistory;
    public string $labelIds;
    public ?array $lastAppliedTemplate = null;
    public ?array $lastUpdate = null;
    public ?array $lead = null;
    public ?array $leadTeam = null;
    public ?string $microsoftTeamsChannelId = null;
    public string $name;
    public string $previousIdentifiers;
    public int $priority;
    public string $priorityLabel;
    public float $prioritySortOrder;
    public float $progress;
    public mixed $progressHistory;
    public mixed $projectUpdateRemindersPausedUntilAt = null;
    public int $resourceCount;
    public float $scope;
    public float $scopeHistory;
    public ?string $slackChannelId = null;
    public string $slugId;
    public float $sortOrder;
    public mixed $startDate = null;
    public ?string $startDateResolution = null;
    public mixed $startedAt = null;
    public ?array $status = null;
    public mixed $targetDate = null;
    public ?string $targetDateResolution = null;
    public ?bool $trashed = null;
    public ?float $updateReminderFrequency = null;
    public ?float $updateReminderFrequencyInWeeks = null;
    public ?string $updateRemindersDay = null;
    public ?float $updateRemindersHour = null;
    public mixed $updatedAt;
    public string $url;
}

/** Request payload for Project#update. */
class ProjectUpdateData
{
    public string $id;
    public mixed $archivedAt = null;
    public mixed $autoArchivedAt = null;
    public mixed $canceledAt = null;
    public ?string $color = null;
    public mixed $completedAt = null;
    public ?float $completedIssueCountHistory = null;
    public ?float $completedScopeHistory = null;
    public ?string $content = null;
    public ?string $contentState = null;
    public ?array $convertedFromIssue = null;
    public mixed $createdAt = null;
    public ?array $creator = null;
    public mixed $currentProgress = null;
    public ?string $description = null;
    public ?array $documentContent = null;
    public ?array $favorite = null;
    public ?string $frequencyResolution = null;
    public ?string $health = null;
    public mixed $healthUpdatedAt = null;
    public ?string $icon = null;
    public ?string $identifier = null;
    public ?float $inProgressScopeHistory = null;
    public ?array $integrationsSettings = null;
    public ?float $issueCountHistory = null;
    public ?string $labelIds = null;
    public ?array $lastAppliedTemplate = null;
    public ?array $lastUpdate = null;
    public ?array $lead = null;
    public ?array $leadTeam = null;
    public ?string $microsoftTeamsChannelId = null;
    public ?string $name = null;
    public ?string $previousIdentifiers = null;
    public ?int $priority = null;
    public ?string $priorityLabel = null;
    public ?float $prioritySortOrder = null;
    public ?float $progress = null;
    public mixed $progressHistory = null;
    public mixed $projectUpdateRemindersPausedUntilAt = null;
    public ?int $resourceCount = null;
    public ?float $scope = null;
    public ?float $scopeHistory = null;
    public ?string $slackChannelId = null;
    public ?string $slugId = null;
    public ?float $sortOrder = null;
    public mixed $startDate = null;
    public ?string $startDateResolution = null;
    public mixed $startedAt = null;
    public ?array $status = null;
    public mixed $targetDate = null;
    public ?string $targetDateResolution = null;
    public ?bool $trashed = null;
    public ?float $updateReminderFrequency = null;
    public ?float $updateReminderFrequencyInWeeks = null;
    public ?string $updateRemindersDay = null;
    public ?float $updateRemindersHour = null;
    public mixed $updatedAt = null;
    public ?string $url = null;
}

/** Request payload for Project#remove. */
class ProjectRemoveMatch
{
    public string $id;
}

/** ProjectLabel entity data model. */
class ProjectLabel
{
    public mixed $archivedAt = null;
    public string $color;
    public mixed $createdAt;
    public ?array $creator = null;
    public ?string $description = null;
    public string $id;
    public ?array $inheritedFrom = null;
    public bool $isGroup;
    public mixed $lastAppliedAt = null;
    public string $name;
    public ?array $organization = null;
    public ?array $parent = null;
    public mixed $retiredAt = null;
    public ?array $retiredBy = null;
    public ?array $team = null;
    public mixed $updatedAt;
}

/** Request payload for ProjectLabel#load. */
class ProjectLabelLoadMatch
{
    public string $id;
}

/** Request payload for ProjectLabel#list. */
class ProjectLabelListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for ProjectLabel#create. */
class ProjectLabelCreateData
{
    public ?bool $replace_team_label = null;
    public mixed $archivedAt = null;
    public string $color;
    public mixed $createdAt;
    public ?array $creator = null;
    public ?string $description = null;
    public string $id;
    public ?array $inheritedFrom = null;
    public bool $isGroup;
    public mixed $lastAppliedAt = null;
    public string $name;
    public ?array $organization = null;
    public ?array $parent = null;
    public mixed $retiredAt = null;
    public ?array $retiredBy = null;
    public ?array $team = null;
    public mixed $updatedAt;
}

/** Request payload for ProjectLabel#update. */
class ProjectLabelUpdateData
{
    public string $id;
    public ?bool $replace_team_label = null;
    public mixed $archivedAt = null;
    public ?string $color = null;
    public mixed $createdAt = null;
    public ?array $creator = null;
    public ?string $description = null;
    public ?array $inheritedFrom = null;
    public ?bool $isGroup = null;
    public mixed $lastAppliedAt = null;
    public ?string $name = null;
    public ?array $organization = null;
    public ?array $parent = null;
    public mixed $retiredAt = null;
    public ?array $retiredBy = null;
    public ?array $team = null;
    public mixed $updatedAt = null;
}

/** Request payload for ProjectLabel#remove. */
class ProjectLabelRemoveMatch
{
    public string $id;
}

/** ProjectMilestone entity data model. */
class ProjectMilestone
{
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public mixed $currentProgress;
    public ?string $description = null;
    public ?string $descriptionState = null;
    public ?array $documentContent = null;
    public string $id;
    public string $name;
    public float $progress;
    public mixed $progressHistory;
    public ?array $project = null;
    public float $sortOrder;
    public string $status;
    public mixed $targetDate = null;
    public mixed $updatedAt;
}

/** Request payload for ProjectMilestone#load. */
class ProjectMilestoneLoadMatch
{
    public string $id;
}

/** Request payload for ProjectMilestone#list. */
class ProjectMilestoneListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for ProjectMilestone#create. */
class ProjectMilestoneCreateData
{
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public mixed $currentProgress;
    public ?string $description = null;
    public ?string $descriptionState = null;
    public ?array $documentContent = null;
    public string $id;
    public string $name;
    public float $progress;
    public mixed $progressHistory;
    public ?array $project = null;
    public float $sortOrder;
    public string $status;
    public mixed $targetDate = null;
    public mixed $updatedAt;
}

/** Request payload for ProjectMilestone#update. */
class ProjectMilestoneUpdateData
{
    public string $id;
    public mixed $archivedAt = null;
    public mixed $createdAt = null;
    public mixed $currentProgress = null;
    public ?string $description = null;
    public ?string $descriptionState = null;
    public ?array $documentContent = null;
    public ?string $name = null;
    public ?float $progress = null;
    public mixed $progressHistory = null;
    public ?array $project = null;
    public ?float $sortOrder = null;
    public ?string $status = null;
    public mixed $targetDate = null;
    public mixed $updatedAt = null;
}

/** Request payload for ProjectMilestone#remove. */
class ProjectMilestoneRemoveMatch
{
    public string $id;
}

/** ProjectMilestoneMoveProjectTeam entity data model. */
class ProjectMilestoneMoveProjectTeam
{
    public ?string $id = null;
    public string $projectId;
    public string $teamIds;
}

/** Request payload for ProjectMilestoneMoveProjectTeam#update. */
class ProjectMilestoneMoveProjectTeamUpdateData
{
    public string $id;
    public ?string $projectId = null;
    public ?string $teamIds = null;
}

/** ProjectRelation entity data model. */
class ProjectRelation
{
    public string $anchorType;
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public string $id;
    public ?array $project = null;
    public ?array $projectMilestone = null;
    public string $relatedAnchorType;
    public ?array $relatedProject = null;
    public ?array $relatedProjectMilestone = null;
    public string $type;
    public mixed $updatedAt;
    public ?array $user = null;
}

/** Request payload for ProjectRelation#load. */
class ProjectRelationLoadMatch
{
    public string $id;
}

/** Request payload for ProjectRelation#list. */
class ProjectRelationListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for ProjectRelation#create. */
class ProjectRelationCreateData
{
    public string $anchorType;
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public string $id;
    public ?array $project = null;
    public ?array $projectMilestone = null;
    public string $relatedAnchorType;
    public ?array $relatedProject = null;
    public ?array $relatedProjectMilestone = null;
    public string $type;
    public mixed $updatedAt;
    public ?array $user = null;
}

/** Request payload for ProjectRelation#update. */
class ProjectRelationUpdateData
{
    public string $id;
    public ?string $anchorType = null;
    public mixed $archivedAt = null;
    public mixed $createdAt = null;
    public ?array $project = null;
    public ?array $projectMilestone = null;
    public ?string $relatedAnchorType = null;
    public ?array $relatedProject = null;
    public ?array $relatedProjectMilestone = null;
    public ?string $type = null;
    public mixed $updatedAt = null;
    public ?array $user = null;
}

/** Request payload for ProjectRelation#remove. */
class ProjectRelationRemoveMatch
{
    public string $id;
}

/** ProjectSearchResult entity data model. */
class ProjectSearchResult
{
    public mixed $archivedAt = null;
    public mixed $autoArchivedAt = null;
    public mixed $canceledAt = null;
    public string $color;
    public mixed $completedAt = null;
    public float $completedIssueCountHistory;
    public float $completedScopeHistory;
    public ?string $content = null;
    public ?string $contentState = null;
    public ?array $convertedFromIssue = null;
    public mixed $createdAt;
    public ?array $creator = null;
    public mixed $currentProgress;
    public string $description;
    public ?array $documentContent = null;
    public ?array $favorite = null;
    public string $frequencyResolution;
    public ?string $health = null;
    public mixed $healthUpdatedAt = null;
    public ?string $icon = null;
    public string $id;
    public ?string $identifier = null;
    public float $inProgressScopeHistory;
    public ?array $integrationsSettings = null;
    public float $issueCountHistory;
    public string $labelIds;
    public ?array $lastAppliedTemplate = null;
    public ?array $lastUpdate = null;
    public ?array $lead = null;
    public ?array $leadTeam = null;
    public mixed $metadata;
    public ?string $microsoftTeamsChannelId = null;
    public string $name;
    public string $previousIdentifiers;
    public int $priority;
    public string $priorityLabel;
    public float $prioritySortOrder;
    public float $progress;
    public mixed $progressHistory;
    public mixed $projectUpdateRemindersPausedUntilAt = null;
    public int $resourceCount;
    public float $scope;
    public float $scopeHistory;
    public ?string $slackChannelId = null;
    public string $slugId;
    public float $sortOrder;
    public mixed $startDate = null;
    public ?string $startDateResolution = null;
    public mixed $startedAt = null;
    public ?array $status = null;
    public mixed $targetDate = null;
    public ?string $targetDateResolution = null;
    public ?bool $trashed = null;
    public ?float $updateReminderFrequency = null;
    public ?float $updateReminderFrequencyInWeeks = null;
    public ?string $updateRemindersDay = null;
    public ?float $updateRemindersHour = null;
    public mixed $updatedAt;
    public string $url;
}

/** Request payload for ProjectSearchResult#list. */
class ProjectSearchResultListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?bool $include_comment = null;
    public ?int $last = null;
    public mixed $order_by = null;
    public ?string $team_id = null;
    public string $term;
}

/** ProjectStatus entity data model. */
class ProjectStatus
{
    public mixed $archivedAt = null;
    public string $color;
    public mixed $createdAt;
    public ?string $description = null;
    public string $id;
    public bool $indefinite;
    public ?array $inheritedFrom = null;
    public string $name;
    public float $position;
    public ?array $team = null;
    public string $type;
    public mixed $updatedAt;
}

/** Request payload for ProjectStatus#load. */
class ProjectStatusLoadMatch
{
    public string $id;
}

/** Request payload for ProjectStatus#list. */
class ProjectStatusListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for ProjectStatus#create. */
class ProjectStatusCreateData
{
    public mixed $archivedAt = null;
    public string $color;
    public mixed $createdAt;
    public ?string $description = null;
    public string $id;
    public bool $indefinite;
    public ?array $inheritedFrom = null;
    public string $name;
    public float $position;
    public ?array $team = null;
    public string $type;
    public mixed $updatedAt;
}

/** Request payload for ProjectStatus#update. */
class ProjectStatusUpdateData
{
    public string $id;
    public mixed $archivedAt = null;
    public ?string $color = null;
    public mixed $createdAt = null;
    public ?string $description = null;
    public ?bool $indefinite = null;
    public ?array $inheritedFrom = null;
    public ?string $name = null;
    public ?float $position = null;
    public ?array $team = null;
    public ?string $type = null;
    public mixed $updatedAt = null;
}

/** ProjectUpdate entity data model. */
class ProjectUpdate
{
    public mixed $archivedAt = null;
    public string $body;
    public string $bodyData;
    public int $commentCount;
    public mixed $createdAt;
    public mixed $diff = null;
    public ?string $diffMarkdown = null;
    public mixed $editedAt = null;
    public string $health;
    public string $id;
    public mixed $infoSnapshot = null;
    public bool $isDiffHidden;
    public bool $isStale;
    public ?array $project = null;
    public mixed $reactionData;
    public ?string $shortSummary = null;
    public string $slugId;
    public mixed $updatedAt;
    public string $url;
    public ?array $user = null;
}

/** Request payload for ProjectUpdate#load. */
class ProjectUpdateLoadMatch
{
    public string $id;
    public ?string $project_id = null;
}

/** Request payload for ProjectUpdate#list. */
class ProjectUpdateListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for ProjectUpdate#create. */
class ProjectUpdateCreateData
{
    public mixed $archivedAt = null;
    public string $body;
    public string $bodyData;
    public int $commentCount;
    public mixed $createdAt;
    public mixed $diff = null;
    public ?string $diffMarkdown = null;
    public mixed $editedAt = null;
    public string $health;
    public string $id;
    public mixed $infoSnapshot = null;
    public bool $isDiffHidden;
    public bool $isStale;
    public ?array $project = null;
    public mixed $reactionData;
    public ?string $shortSummary = null;
    public string $slugId;
    public mixed $updatedAt;
    public string $url;
    public ?array $user = null;
}

/** Request payload for ProjectUpdate#update. */
class ProjectUpdateUpdateData
{
    public string $id;
    public mixed $archivedAt = null;
    public ?string $body = null;
    public ?string $bodyData = null;
    public ?int $commentCount = null;
    public mixed $createdAt = null;
    public mixed $diff = null;
    public ?string $diffMarkdown = null;
    public mixed $editedAt = null;
    public ?string $health = null;
    public mixed $infoSnapshot = null;
    public ?bool $isDiffHidden = null;
    public ?bool $isStale = null;
    public ?array $project = null;
    public mixed $reactionData = null;
    public ?string $shortSummary = null;
    public ?string $slugId = null;
    public mixed $updatedAt = null;
    public ?string $url = null;
    public ?array $user = null;
}

/** Request payload for ProjectUpdate#remove. */
class ProjectUpdateRemoveMatch
{
    public string $id;
}

/** PushSubscription entity data model. */
class PushSubscription
{
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public string $id;
    public mixed $updatedAt;
}

/** Request payload for PushSubscription#create. */
class PushSubscriptionCreateData
{
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public string $id;
    public mixed $updatedAt;
}

/** Request payload for PushSubscription#remove. */
class PushSubscriptionRemoveMatch
{
    public string $id;
}

/** Reaction entity data model. */
class Reaction
{
    public mixed $archivedAt = null;
    public ?array $comment = null;
    public mixed $createdAt;
    public string $emoji;
    public ?array $externalUser = null;
    public string $id;
    public ?array $initiativeUpdate = null;
    public ?array $issue = null;
    public ?array $post = null;
    public ?array $projectUpdate = null;
    public mixed $updatedAt;
    public ?array $user = null;
}

/** Request payload for Reaction#create. */
class ReactionCreateData
{
    public mixed $archivedAt = null;
    public ?array $comment = null;
    public mixed $createdAt;
    public string $emoji;
    public ?array $externalUser = null;
    public string $id;
    public ?array $initiativeUpdate = null;
    public ?array $issue = null;
    public ?array $post = null;
    public ?array $projectUpdate = null;
    public mixed $updatedAt;
    public ?array $user = null;
}

/** Request payload for Reaction#remove. */
class ReactionRemoveMatch
{
    public string $id;
}

/** Release entity data model. */
class Release
{
    public mixed $archivedAt = null;
    public mixed $autoArchivedAt = null;
    public mixed $canceledAt = null;
    public ?string $commitSha = null;
    public mixed $completedAt = null;
    public mixed $createdAt;
    public ?array $creator = null;
    public mixed $currentProgress;
    public ?string $description = null;
    public string $id;
    public int $issueCount;
    public string $name;
    public ?array $pipeline = null;
    public mixed $progressHistory;
    public ?array $releaseNote = null;
    public string $slugId;
    public ?array $stage = null;
    public mixed $startDate = null;
    public mixed $startedAt = null;
    public mixed $targetDate = null;
    public ?bool $trashed = null;
    public mixed $updatedAt;
    public string $url;
    public ?string $version = null;
}

/** Request payload for Release#load. */
class ReleaseLoadMatch
{
    public string $id;
}

/** Request payload for Release#list. */
class ReleaseListMatch
{
    public ?int $first = null;
    public ?string $term = null;
    public ?string $after = null;
    public ?string $before = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for Release#create. */
class ReleaseCreateData
{
    public mixed $archivedAt = null;
    public mixed $autoArchivedAt = null;
    public mixed $canceledAt = null;
    public ?string $commitSha = null;
    public mixed $completedAt = null;
    public mixed $createdAt;
    public ?array $creator = null;
    public mixed $currentProgress;
    public ?string $description = null;
    public string $id;
    public int $issueCount;
    public string $name;
    public ?array $pipeline = null;
    public mixed $progressHistory;
    public ?array $releaseNote = null;
    public string $slugId;
    public ?array $stage = null;
    public mixed $startDate = null;
    public mixed $startedAt = null;
    public mixed $targetDate = null;
    public ?bool $trashed = null;
    public mixed $updatedAt;
    public string $url;
    public ?string $version = null;
}

/** Request payload for Release#update. */
class ReleaseUpdateData
{
    public string $id;
    public mixed $archivedAt = null;
    public mixed $autoArchivedAt = null;
    public mixed $canceledAt = null;
    public ?string $commitSha = null;
    public mixed $completedAt = null;
    public mixed $createdAt = null;
    public ?array $creator = null;
    public mixed $currentProgress = null;
    public ?string $description = null;
    public ?int $issueCount = null;
    public ?string $name = null;
    public ?array $pipeline = null;
    public mixed $progressHistory = null;
    public ?array $releaseNote = null;
    public ?string $slugId = null;
    public ?array $stage = null;
    public mixed $startDate = null;
    public mixed $startedAt = null;
    public mixed $targetDate = null;
    public ?bool $trashed = null;
    public mixed $updatedAt = null;
    public ?string $url = null;
    public ?string $version = null;
}

/** Request payload for Release#remove. */
class ReleaseRemoveMatch
{
    public string $id;
}

/** ReleaseNote entity data model. */
class ReleaseNote
{
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public ?array $documentContent = null;
    public ?array $firstRelease = null;
    public ?string $generationStatus = null;
    public string $id;
    public ?array $lastRelease = null;
    public ?array $pipeline = null;
    public int $releaseCount;
    public string $slugId;
    public ?string $title = null;
    public mixed $updatedAt;
    public string $url;
}

/** Request payload for ReleaseNote#load. */
class ReleaseNoteLoadMatch
{
    public string $id;
}

/** Request payload for ReleaseNote#list. */
class ReleaseNoteListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for ReleaseNote#create. */
class ReleaseNoteCreateData
{
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public ?array $documentContent = null;
    public ?array $firstRelease = null;
    public ?string $generationStatus = null;
    public string $id;
    public ?array $lastRelease = null;
    public ?array $pipeline = null;
    public int $releaseCount;
    public string $slugId;
    public ?string $title = null;
    public mixed $updatedAt;
    public string $url;
}

/** Request payload for ReleaseNote#update. */
class ReleaseNoteUpdateData
{
    public string $id;
    public mixed $archivedAt = null;
    public mixed $createdAt = null;
    public ?array $documentContent = null;
    public ?array $firstRelease = null;
    public ?string $generationStatus = null;
    public ?array $lastRelease = null;
    public ?array $pipeline = null;
    public ?int $releaseCount = null;
    public ?string $slugId = null;
    public ?string $title = null;
    public mixed $updatedAt = null;
    public ?string $url = null;
}

/** Request payload for ReleaseNote#remove. */
class ReleaseNoteRemoveMatch
{
    public string $id;
}

/** ReleasePipeline entity data model. */
class ReleasePipeline
{
    public int $approximateReleaseCount;
    public mixed $archivedAt = null;
    public bool $autoGenerateReleaseNotesOnCompletion;
    public mixed $createdAt;
    public string $id;
    public string $includePathPatterns;
    public bool $isProduction;
    public ?array $latestReleaseNote = null;
    public string $name;
    public ?array $releaseNoteTemplate = null;
    public bool $rolloverIssuesOnCompletion;
    public string $slugId;
    public ?bool $trashed = null;
    public string $type;
    public mixed $updatedAt;
    public string $url;
}

/** Request payload for ReleasePipeline#load. */
class ReleasePipelineLoadMatch
{
    public string $id;
}

/** Request payload for ReleasePipeline#list. */
class ReleasePipelineListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for ReleasePipeline#create. */
class ReleasePipelineCreateData
{
    public int $approximateReleaseCount;
    public mixed $archivedAt = null;
    public bool $autoGenerateReleaseNotesOnCompletion;
    public mixed $createdAt;
    public string $id;
    public string $includePathPatterns;
    public bool $isProduction;
    public ?array $latestReleaseNote = null;
    public string $name;
    public ?array $releaseNoteTemplate = null;
    public bool $rolloverIssuesOnCompletion;
    public string $slugId;
    public ?bool $trashed = null;
    public string $type;
    public mixed $updatedAt;
    public string $url;
}

/** Request payload for ReleasePipeline#update. */
class ReleasePipelineUpdateData
{
    public string $id;
    public ?int $approximateReleaseCount = null;
    public mixed $archivedAt = null;
    public ?bool $autoGenerateReleaseNotesOnCompletion = null;
    public mixed $createdAt = null;
    public ?string $includePathPatterns = null;
    public ?bool $isProduction = null;
    public ?array $latestReleaseNote = null;
    public ?string $name = null;
    public ?array $releaseNoteTemplate = null;
    public ?bool $rolloverIssuesOnCompletion = null;
    public ?string $slugId = null;
    public ?bool $trashed = null;
    public ?string $type = null;
    public mixed $updatedAt = null;
    public ?string $url = null;
}

/** Request payload for ReleasePipeline#remove. */
class ReleasePipelineRemoveMatch
{
    public string $id;
}

/** ReleaseStage entity data model. */
class ReleaseStage
{
    public mixed $archivedAt = null;
    public string $color;
    public mixed $createdAt;
    public bool $frozen;
    public string $id;
    public string $name;
    public ?array $pipeline = null;
    public float $position;
    public string $type;
    public mixed $updatedAt;
}

/** Request payload for ReleaseStage#load. */
class ReleaseStageLoadMatch
{
    public string $id;
}

/** Request payload for ReleaseStage#list. */
class ReleaseStageListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for ReleaseStage#create. */
class ReleaseStageCreateData
{
    public mixed $archivedAt = null;
    public string $color;
    public mixed $createdAt;
    public bool $frozen;
    public string $id;
    public string $name;
    public ?array $pipeline = null;
    public float $position;
    public string $type;
    public mixed $updatedAt;
}

/** Request payload for ReleaseStage#update. */
class ReleaseStageUpdateData
{
    public string $id;
    public mixed $archivedAt = null;
    public ?string $color = null;
    public mixed $createdAt = null;
    public ?bool $frozen = null;
    public ?string $name = null;
    public ?array $pipeline = null;
    public ?float $position = null;
    public ?string $type = null;
    public mixed $updatedAt = null;
}

/** Roadmap entity data model. */
class Roadmap
{
    public mixed $archivedAt = null;
    public ?string $color = null;
    public mixed $createdAt;
    public ?array $creator = null;
    public ?string $description = null;
    public string $id;
    public string $name;
    public ?array $organization = null;
    public ?array $owner = null;
    public string $slugId;
    public float $sortOrder;
    public mixed $updatedAt;
    public string $url;
}

/** Request payload for Roadmap#load. */
class RoadmapLoadMatch
{
    public string $id;
}

/** Request payload for Roadmap#list. */
class RoadmapListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for Roadmap#create. */
class RoadmapCreateData
{
    public mixed $archivedAt = null;
    public ?string $color = null;
    public mixed $createdAt;
    public ?array $creator = null;
    public ?string $description = null;
    public string $id;
    public string $name;
    public ?array $organization = null;
    public ?array $owner = null;
    public string $slugId;
    public float $sortOrder;
    public mixed $updatedAt;
    public string $url;
}

/** Request payload for Roadmap#update. */
class RoadmapUpdateData
{
    public string $id;
    public mixed $archivedAt = null;
    public ?string $color = null;
    public mixed $createdAt = null;
    public ?array $creator = null;
    public ?string $description = null;
    public ?string $name = null;
    public ?array $organization = null;
    public ?array $owner = null;
    public ?string $slugId = null;
    public ?float $sortOrder = null;
    public mixed $updatedAt = null;
    public ?string $url = null;
}

/** Request payload for Roadmap#remove. */
class RoadmapRemoveMatch
{
    public string $id;
}

/** RoadmapToProject entity data model. */
class RoadmapToProject
{
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public string $id;
    public ?array $project = null;
    public ?array $roadmap = null;
    public string $sortOrder;
    public mixed $updatedAt;
}

/** Request payload for RoadmapToProject#load. */
class RoadmapToProjectLoadMatch
{
    public string $id;
}

/** Request payload for RoadmapToProject#list. */
class RoadmapToProjectListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for RoadmapToProject#create. */
class RoadmapToProjectCreateData
{
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public string $id;
    public ?array $project = null;
    public ?array $roadmap = null;
    public string $sortOrder;
    public mixed $updatedAt;
}

/** Request payload for RoadmapToProject#update. */
class RoadmapToProjectUpdateData
{
    public string $id;
    public mixed $archivedAt = null;
    public mixed $createdAt = null;
    public ?array $project = null;
    public ?array $roadmap = null;
    public ?string $sortOrder = null;
    public mixed $updatedAt = null;
}

/** Request payload for RoadmapToProject#remove. */
class RoadmapToProjectRemoveMatch
{
    public string $id;
}

/** SlaConfiguration entity data model. */
class SlaConfiguration
{
    public mixed $conditions;
    public string $id;
    public string $name;
    public bool $removesSla;
    public ?float $sla = null;
    public ?string $slaType = null;
    public ?string $startMode = null;
}

/** Request payload for SlaConfiguration#list. */
class SlaConfigurationListMatch
{
    public string $team_id;
}

/** SsoUrlFromEmailResponse entity data model. */
class SsoUrlFromEmailResponse
{
    public string $samlSsoUrl;
    public bool $success;
}

/** Request payload for SsoUrlFromEmailResponse#load. */
class SsoUrlFromEmailResponseLoadMatch
{
    public string $email;
    public ?bool $is_desktop = null;
    public mixed $type;
}

/** Team entity data model. */
class Team
{
    public ?array $activeCycle = null;
    public bool $aiDiscussionSummariesEnabled;
    public bool $aiThreadSummariesEnabled;
    public ?bool $allMembersCanJoin = null;
    public mixed $archivedAt = null;
    public float $autoArchivePeriod;
    public ?bool $autoCloseChildIssues = null;
    public ?bool $autoCloseParentIssues = null;
    public ?float $autoClosePeriod = null;
    public ?string $autoCloseStateId = null;
    public ?string $color = null;
    public mixed $createdAt;
    public mixed $currentProgress;
    public string $cycleCalenderUrl;
    public float $cycleCooldownTime;
    public float $cycleDuration;
    public bool $cycleIssueAutoAssignCompleted;
    public bool $cycleIssueAutoAssignStarted;
    public bool $cycleLockToActive;
    public float $cycleStartDay;
    public bool $cyclesEnabled;
    public float $defaultIssueEstimate;
    public ?array $defaultIssueState = null;
    public ?array $defaultProjectTemplate = null;
    public ?array $defaultTemplateForMembers = null;
    public ?array $defaultTemplateForNonMembers = null;
    public ?string $description = null;
    public string $displayName;
    public bool $groupIssueHistory;
    public ?string $icon = null;
    public string $id;
    public bool $inheritIssueEstimation;
    public bool $inheritProjectStatuses;
    public bool $inheritSlackAutoCreateProjectChannel;
    public bool $inheritWorkflowStatuses;
    public bool $initiativesEnabled;
    public ?array $integrationsSettings = null;
    public int $issueCount;
    public bool $issueEstimationAllowZero;
    public bool $issueEstimationExtended;
    public string $issueEstimationType;
    public ?bool $joinByDefault = null;
    public string $key;
    public int $ledInitiativeCount;
    public string $name;
    public ?array $organization = null;
    public ?array $parent = null;
    public mixed $progressHistory;
    public bool $requirePriorityToLeaveTriage;
    public ?array $restrictedBy = null;
    public ?string $restrictedById = null;
    public mixed $retiredAt = null;
    public ?string $scimGroupName = null;
    public bool $scimManaged;
    public mixed $securitySettings;
    public string $setIssueSortOrderOnStateChange;
    public ?bool $slackAutoCreateProjectChannel = null;
    public string $timezone;
    public bool $triageEnabled;
    public ?array $triageIssueState = null;
    public ?array $triageResponsibility = null;
    public float $upcomingCycleCount;
    public mixed $updatedAt;
    public string $visibility;
}

/** Request payload for Team#load. */
class TeamLoadMatch
{
    public string $id;
}

/** Request payload for Team#list. */
class TeamListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for Team#create. */
class TeamCreateData
{
    public ?string $copy_settings_from_team_id = null;
    public ?array $activeCycle = null;
    public bool $aiDiscussionSummariesEnabled;
    public bool $aiThreadSummariesEnabled;
    public ?bool $allMembersCanJoin = null;
    public mixed $archivedAt = null;
    public float $autoArchivePeriod;
    public ?bool $autoCloseChildIssues = null;
    public ?bool $autoCloseParentIssues = null;
    public ?float $autoClosePeriod = null;
    public ?string $autoCloseStateId = null;
    public ?string $color = null;
    public mixed $createdAt;
    public mixed $currentProgress;
    public string $cycleCalenderUrl;
    public float $cycleCooldownTime;
    public float $cycleDuration;
    public bool $cycleIssueAutoAssignCompleted;
    public bool $cycleIssueAutoAssignStarted;
    public bool $cycleLockToActive;
    public float $cycleStartDay;
    public bool $cyclesEnabled;
    public float $defaultIssueEstimate;
    public ?array $defaultIssueState = null;
    public ?array $defaultProjectTemplate = null;
    public ?array $defaultTemplateForMembers = null;
    public ?array $defaultTemplateForNonMembers = null;
    public ?string $description = null;
    public string $displayName;
    public bool $groupIssueHistory;
    public ?string $icon = null;
    public string $id;
    public bool $inheritIssueEstimation;
    public bool $inheritProjectStatuses;
    public bool $inheritSlackAutoCreateProjectChannel;
    public bool $inheritWorkflowStatuses;
    public bool $initiativesEnabled;
    public ?array $integrationsSettings = null;
    public int $issueCount;
    public bool $issueEstimationAllowZero;
    public bool $issueEstimationExtended;
    public string $issueEstimationType;
    public ?bool $joinByDefault = null;
    public string $key;
    public int $ledInitiativeCount;
    public string $name;
    public ?array $organization = null;
    public ?array $parent = null;
    public mixed $progressHistory;
    public bool $requirePriorityToLeaveTriage;
    public ?array $restrictedBy = null;
    public ?string $restrictedById = null;
    public mixed $retiredAt = null;
    public ?string $scimGroupName = null;
    public bool $scimManaged;
    public mixed $securitySettings;
    public string $setIssueSortOrderOnStateChange;
    public ?bool $slackAutoCreateProjectChannel = null;
    public string $timezone;
    public bool $triageEnabled;
    public ?array $triageIssueState = null;
    public ?array $triageResponsibility = null;
    public float $upcomingCycleCount;
    public mixed $updatedAt;
    public string $visibility;
}

/** Request payload for Team#update. */
class TeamUpdateData
{
    public string $id;
    public ?array $activeCycle = null;
    public ?bool $aiDiscussionSummariesEnabled = null;
    public ?bool $aiThreadSummariesEnabled = null;
    public ?bool $allMembersCanJoin = null;
    public mixed $archivedAt = null;
    public ?float $autoArchivePeriod = null;
    public ?bool $autoCloseChildIssues = null;
    public ?bool $autoCloseParentIssues = null;
    public ?float $autoClosePeriod = null;
    public ?string $autoCloseStateId = null;
    public ?string $color = null;
    public mixed $createdAt = null;
    public mixed $currentProgress = null;
    public ?string $cycleCalenderUrl = null;
    public ?float $cycleCooldownTime = null;
    public ?float $cycleDuration = null;
    public ?bool $cycleIssueAutoAssignCompleted = null;
    public ?bool $cycleIssueAutoAssignStarted = null;
    public ?bool $cycleLockToActive = null;
    public ?float $cycleStartDay = null;
    public ?bool $cyclesEnabled = null;
    public ?float $defaultIssueEstimate = null;
    public ?array $defaultIssueState = null;
    public ?array $defaultProjectTemplate = null;
    public ?array $defaultTemplateForMembers = null;
    public ?array $defaultTemplateForNonMembers = null;
    public ?string $description = null;
    public ?string $displayName = null;
    public ?bool $groupIssueHistory = null;
    public ?string $icon = null;
    public ?bool $inheritIssueEstimation = null;
    public ?bool $inheritProjectStatuses = null;
    public ?bool $inheritSlackAutoCreateProjectChannel = null;
    public ?bool $inheritWorkflowStatuses = null;
    public ?bool $initiativesEnabled = null;
    public ?array $integrationsSettings = null;
    public ?int $issueCount = null;
    public ?bool $issueEstimationAllowZero = null;
    public ?bool $issueEstimationExtended = null;
    public ?string $issueEstimationType = null;
    public ?bool $joinByDefault = null;
    public ?string $key = null;
    public ?int $ledInitiativeCount = null;
    public ?string $name = null;
    public ?array $organization = null;
    public ?array $parent = null;
    public mixed $progressHistory = null;
    public ?bool $requirePriorityToLeaveTriage = null;
    public ?array $restrictedBy = null;
    public ?string $restrictedById = null;
    public mixed $retiredAt = null;
    public ?string $scimGroupName = null;
    public ?bool $scimManaged = null;
    public mixed $securitySettings = null;
    public ?string $setIssueSortOrderOnStateChange = null;
    public ?bool $slackAutoCreateProjectChannel = null;
    public ?string $timezone = null;
    public ?bool $triageEnabled = null;
    public ?array $triageIssueState = null;
    public ?array $triageResponsibility = null;
    public ?float $upcomingCycleCount = null;
    public mixed $updatedAt = null;
    public ?string $visibility = null;
}

/** Request payload for Team#remove. */
class TeamRemoveMatch
{
    public string $id;
}

/** TeamMembership entity data model. */
class TeamMembership
{
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public string $id;
    public bool $owner;
    public float $sortOrder;
    public ?array $team = null;
    public mixed $updatedAt;
    public ?array $user = null;
}

/** Request payload for TeamMembership#load. */
class TeamMembershipLoadMatch
{
    public string $id;
}

/** Request payload for TeamMembership#list. */
class TeamMembershipListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for TeamMembership#create. */
class TeamMembershipCreateData
{
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public string $id;
    public bool $owner;
    public float $sortOrder;
    public ?array $team = null;
    public mixed $updatedAt;
    public ?array $user = null;
}

/** Request payload for TeamMembership#update. */
class TeamMembershipUpdateData
{
    public string $id;
    public mixed $archivedAt = null;
    public mixed $createdAt = null;
    public ?bool $owner = null;
    public ?float $sortOrder = null;
    public ?array $team = null;
    public mixed $updatedAt = null;
    public ?array $user = null;
}

/** Request payload for TeamMembership#remove. */
class TeamMembershipRemoveMatch
{
    public ?bool $also_leave_parent_team = null;
    public string $id;
}

/** Template entity data model. */
class Template
{
    public mixed $archivedAt = null;
    public ?string $color = null;
    public ?string $content = null;
    public mixed $createdAt;
    public ?array $creator = null;
    public ?string $description = null;
    public bool $hasFormFields;
    public ?string $icon = null;
    public string $id;
    public ?array $inheritedFrom = null;
    public mixed $lastAppliedAt = null;
    public ?array $lastUpdatedBy = null;
    public string $name;
    public ?array $organization = null;
    public ?array $pipeline = null;
    public float $sortOrder;
    public ?array $team = null;
    public mixed $templateData;
    public string $type;
    public mixed $updatedAt;
}

/** Request payload for Template#load. */
class TemplateLoadMatch
{
    public string $id;
}

/** Request payload for Template#list. */
class TemplateListMatch
{
    public ?string $integration_type = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
}

/** Request payload for Template#create. */
class TemplateCreateData
{
    public mixed $archivedAt = null;
    public ?string $color = null;
    public ?string $content = null;
    public mixed $createdAt;
    public ?array $creator = null;
    public ?string $description = null;
    public bool $hasFormFields;
    public ?string $icon = null;
    public string $id;
    public ?array $inheritedFrom = null;
    public mixed $lastAppliedAt = null;
    public ?array $lastUpdatedBy = null;
    public string $name;
    public ?array $organization = null;
    public ?array $pipeline = null;
    public float $sortOrder;
    public ?array $team = null;
    public mixed $templateData;
    public string $type;
    public mixed $updatedAt;
}

/** Request payload for Template#update. */
class TemplateUpdateData
{
    public string $id;
    public mixed $archivedAt = null;
    public ?string $color = null;
    public ?string $content = null;
    public mixed $createdAt = null;
    public ?array $creator = null;
    public ?string $description = null;
    public ?bool $hasFormFields = null;
    public ?string $icon = null;
    public ?array $inheritedFrom = null;
    public mixed $lastAppliedAt = null;
    public ?array $lastUpdatedBy = null;
    public ?string $name = null;
    public ?array $organization = null;
    public ?array $pipeline = null;
    public ?float $sortOrder = null;
    public ?array $team = null;
    public mixed $templateData = null;
    public ?string $type = null;
    public mixed $updatedAt = null;
}

/** Request payload for Template#remove. */
class TemplateRemoveMatch
{
    public string $id;
}

/** TimeSchedule entity data model. */
class TimeSchedule
{
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public ?string $externalId = null;
    public ?string $externalUrl = null;
    public string $id;
    public ?array $integration = null;
    public string $name;
    public ?array $organization = null;
    public mixed $updatedAt;
}

/** Request payload for TimeSchedule#load. */
class TimeScheduleLoadMatch
{
    public string $id;
}

/** Request payload for TimeSchedule#list. */
class TimeScheduleListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for TimeSchedule#create. */
class TimeScheduleCreateData
{
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public ?string $externalId = null;
    public ?string $externalUrl = null;
    public string $id;
    public ?array $integration = null;
    public string $name;
    public ?array $organization = null;
    public mixed $updatedAt;
}

/** Request payload for TimeSchedule#update. */
class TimeScheduleUpdateData
{
    public ?string $external_id = null;
    public ?string $id = null;
    public mixed $archivedAt = null;
    public mixed $createdAt = null;
    public ?string $externalId = null;
    public ?string $externalUrl = null;
    public ?array $integration = null;
    public ?string $name = null;
    public ?array $organization = null;
    public mixed $updatedAt = null;
}

/** Request payload for TimeSchedule#remove. */
class TimeScheduleRemoveMatch
{
    public string $id;
}

/** TriageResponsibility entity data model. */
class TriageResponsibility
{
    public string $action;
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public ?array $currentUser = null;
    public string $id;
    public ?array $team = null;
    public ?array $timeSchedule = null;
    public mixed $updatedAt;
}

/** Request payload for TriageResponsibility#load. */
class TriageResponsibilityLoadMatch
{
    public string $id;
}

/** Request payload for TriageResponsibility#list. */
class TriageResponsibilityListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for TriageResponsibility#create. */
class TriageResponsibilityCreateData
{
    public string $action;
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public ?array $currentUser = null;
    public string $id;
    public ?array $team = null;
    public ?array $timeSchedule = null;
    public mixed $updatedAt;
}

/** Request payload for TriageResponsibility#update. */
class TriageResponsibilityUpdateData
{
    public string $id;
    public ?string $action = null;
    public mixed $archivedAt = null;
    public mixed $createdAt = null;
    public ?array $currentUser = null;
    public ?array $team = null;
    public ?array $timeSchedule = null;
    public mixed $updatedAt = null;
}

/** Request payload for TriageResponsibility#remove. */
class TriageResponsibilityRemoveMatch
{
    public string $id;
}

/** UploadFile entity data model. */
class UploadFile
{
    public string $assetUrl;
    public string $contentType;
    public string $filename;
    public mixed $metaData = null;
    public int $size;
    public string $uploadUrl;
}

/** Request payload for UploadFile#create. */
class UploadFileCreateData
{
    public string $content_type;
    public string $filename;
    public ?bool $make_public = null;
    public mixed $meta_data = null;
    public int $size;
    public string $assetUrl;
    public string $contentType;
    public mixed $metaData = null;
    public string $uploadUrl;
}

/** UsageAlert entity data model. */
class UsageAlert
{
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public string $id;
    public mixed $metadata;
    public mixed $resolvedAt = null;
    public string $type;
    public mixed $updatedAt;
}

/** Request payload for UsageAlert#load. */
class UsageAlertLoadMatch
{
    public string $id;
}

/** Request payload for UsageAlert#list. */
class UsageAlertListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** User entity data model. */
class User
{
    public bool $active;
    public bool $admin;
    public bool $app;
    public mixed $archivedAt = null;
    public string $avatarBackgroundColor;
    public ?string $avatarUrl = null;
    public ?string $calendarHash = null;
    public bool $canAccessAnyPublicTeam;
    public mixed $createdAt;
    public int $createdIssueCount;
    public ?string $description = null;
    public ?string $disableReason = null;
    public string $displayName;
    public string $email;
    public ?string $gitHubUserId = null;
    public bool $guest;
    public bool $hasGitHubCodeAccess;
    public string $id;
    public ?array $identityProvider = null;
    public string $initials;
    public bool $isAssignable;
    public bool $isMe;
    public bool $isMentionable;
    public mixed $lastSeen = null;
    public string $name;
    public ?array $organization = null;
    public bool $owner;
    public ?string $statusEmoji = null;
    public ?string $statusLabel = null;
    public mixed $statusUntilAt = null;
    public bool $supportsAgentSessions;
    public ?string $timezone = null;
    public ?string $title = null;
    public mixed $updatedAt;
    public string $url;
}

/** Request payload for User#load. */
class UserLoadMatch
{
    public ?string $id = null;
}

/** Request payload for User#list. */
class UserListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?bool $include_disabled = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for User#create. */
class UserCreateData
{
    public ?string $code = null;
    public ?string $redirect_uri = null;
    public ?string $service = null;
    public bool $active;
    public bool $admin;
    public bool $app;
    public mixed $archivedAt = null;
    public string $avatarBackgroundColor;
    public ?string $avatarUrl = null;
    public ?string $calendarHash = null;
    public bool $canAccessAnyPublicTeam;
    public mixed $createdAt;
    public int $createdIssueCount;
    public ?string $description = null;
    public ?string $disableReason = null;
    public string $displayName;
    public string $email;
    public ?string $gitHubUserId = null;
    public bool $guest;
    public bool $hasGitHubCodeAccess;
    public string $id;
    public ?array $identityProvider = null;
    public string $initials;
    public bool $isAssignable;
    public bool $isMe;
    public bool $isMentionable;
    public mixed $lastSeen = null;
    public string $name;
    public ?array $organization = null;
    public bool $owner;
    public ?string $statusEmoji = null;
    public ?string $statusLabel = null;
    public mixed $statusUntilAt = null;
    public bool $supportsAgentSessions;
    public ?string $timezone = null;
    public ?string $title = null;
    public mixed $updatedAt;
    public string $url;
}

/** Request payload for User#update. */
class UserUpdateData
{
    public string $id;
    public ?bool $active = null;
    public ?bool $admin = null;
    public ?bool $app = null;
    public mixed $archivedAt = null;
    public ?string $avatarBackgroundColor = null;
    public ?string $avatarUrl = null;
    public ?string $calendarHash = null;
    public ?bool $canAccessAnyPublicTeam = null;
    public mixed $createdAt = null;
    public ?int $createdIssueCount = null;
    public ?string $description = null;
    public ?string $disableReason = null;
    public ?string $displayName = null;
    public ?string $email = null;
    public ?string $gitHubUserId = null;
    public ?bool $guest = null;
    public ?bool $hasGitHubCodeAccess = null;
    public ?array $identityProvider = null;
    public ?string $initials = null;
    public ?bool $isAssignable = null;
    public ?bool $isMe = null;
    public ?bool $isMentionable = null;
    public mixed $lastSeen = null;
    public ?string $name = null;
    public ?array $organization = null;
    public ?bool $owner = null;
    public ?string $statusEmoji = null;
    public ?string $statusLabel = null;
    public mixed $statusUntilAt = null;
    public ?bool $supportsAgentSessions = null;
    public ?string $timezone = null;
    public ?string $title = null;
    public mixed $updatedAt = null;
    public ?string $url = null;
}

/** UserSetting entity data model. */
class UserSetting
{
    public mixed $archivedAt = null;
    public bool $autoAssignToSelf;
    public ?string $calendarHash = null;
    public mixed $createdAt;
    public mixed $feedLastSeenTime = null;
    public ?string $feedSummarySchedule = null;
    public string $id;
    public ?string $pullRequestMergeStrategyPreference = null;
    public bool $showFullUserNames;
    public bool $subscribedToChangelog;
    public bool $subscribedToDPA;
    public bool $subscribedToInviteAccepted;
    public bool $subscribedToPrivacyLegalUpdates;
    public mixed $updatedAt;
    public ?array $user = null;
}

/** Request payload for UserSetting#load. */
class UserSettingLoadMatch
{
    public mixed $archivedAt = null;
    public ?bool $autoAssignToSelf = null;
    public ?string $calendarHash = null;
    public mixed $createdAt = null;
    public mixed $feedLastSeenTime = null;
    public ?string $feedSummarySchedule = null;
    public string $id;
    public ?string $pullRequestMergeStrategyPreference = null;
    public ?bool $showFullUserNames = null;
    public ?bool $subscribedToChangelog = null;
    public ?bool $subscribedToDPA = null;
    public ?bool $subscribedToInviteAccepted = null;
    public ?bool $subscribedToPrivacyLegalUpdates = null;
    public mixed $updatedAt = null;
    public ?array $user = null;
}

/** Request payload for UserSetting#create. */
class UserSettingCreateData
{
    public mixed $category;
    public mixed $channel;
    public bool $subscribe;
    public mixed $archivedAt = null;
    public bool $autoAssignToSelf;
    public ?string $calendarHash = null;
    public mixed $createdAt;
    public mixed $feedLastSeenTime = null;
    public ?string $feedSummarySchedule = null;
    public string $id;
    public ?string $pullRequestMergeStrategyPreference = null;
    public bool $showFullUserNames;
    public bool $subscribedToChangelog;
    public bool $subscribedToDPA;
    public bool $subscribedToInviteAccepted;
    public bool $subscribedToPrivacyLegalUpdates;
    public mixed $updatedAt;
    public ?array $user = null;
}

/** Request payload for UserSetting#update. */
class UserSettingUpdateData
{
    public string $id;
    public mixed $archivedAt = null;
    public ?bool $autoAssignToSelf = null;
    public ?string $calendarHash = null;
    public mixed $createdAt = null;
    public mixed $feedLastSeenTime = null;
    public ?string $feedSummarySchedule = null;
    public ?string $pullRequestMergeStrategyPreference = null;
    public ?bool $showFullUserNames = null;
    public ?bool $subscribedToChangelog = null;
    public ?bool $subscribedToDPA = null;
    public ?bool $subscribedToInviteAccepted = null;
    public ?bool $subscribedToPrivacyLegalUpdates = null;
    public mixed $updatedAt = null;
    public ?array $user = null;
}

/** ViewPreference entity data model. */
class ViewPreference
{
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public string $id;
    public string $type;
    public mixed $updatedAt;
    public string $viewType;
}

/** Request payload for ViewPreference#load. */
class ViewPreferenceLoadMatch
{
    public mixed $view_type;
}

/** Request payload for ViewPreference#create. */
class ViewPreferenceCreateData
{
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public string $id;
    public string $type;
    public mixed $updatedAt;
    public string $viewType;
}

/** Request payload for ViewPreference#update. */
class ViewPreferenceUpdateData
{
    public string $id;
    public mixed $archivedAt = null;
    public mixed $createdAt = null;
    public ?string $type = null;
    public mixed $updatedAt = null;
    public ?string $viewType = null;
}

/** Request payload for ViewPreference#remove. */
class ViewPreferenceRemoveMatch
{
    public string $id;
}

/** Webhook entity data model. */
class Webhook
{
    public bool $allPublicTeams;
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public ?array $creator = null;
    public bool $enabled;
    public string $id;
    public ?string $label = null;
    public string $resourceTypes;
    public ?string $secret = null;
    public ?array $team = null;
    public ?string $teamIds = null;
    public mixed $updatedAt;
    public ?string $url = null;
}

/** Request payload for Webhook#load. */
class WebhookLoadMatch
{
    public string $id;
}

/** Request payload for Webhook#list. */
class WebhookListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for Webhook#create. */
class WebhookCreateData
{
    public bool $allPublicTeams;
    public mixed $archivedAt = null;
    public mixed $createdAt;
    public ?array $creator = null;
    public bool $enabled;
    public string $id;
    public ?string $label = null;
    public string $resourceTypes;
    public ?string $secret = null;
    public ?array $team = null;
    public ?string $teamIds = null;
    public mixed $updatedAt;
    public ?string $url = null;
}

/** Request payload for Webhook#update. */
class WebhookUpdateData
{
    public string $id;
    public ?bool $allPublicTeams = null;
    public mixed $archivedAt = null;
    public mixed $createdAt = null;
    public ?array $creator = null;
    public ?bool $enabled = null;
    public ?string $label = null;
    public ?string $resourceTypes = null;
    public ?string $secret = null;
    public ?array $team = null;
    public ?string $teamIds = null;
    public mixed $updatedAt = null;
    public ?string $url = null;
}

/** Request payload for Webhook#remove. */
class WebhookRemoveMatch
{
    public string $id;
}

/** WebhookFailureEvent entity data model. */
class WebhookFailureEvent
{
    public mixed $createdAt;
    public string $executionId;
    public ?float $httpStatus = null;
    public string $id;
    public ?string $responseOrError = null;
    public string $url;
    public ?array $webhook = null;
}

/** Request payload for WebhookFailureEvent#list. */
class WebhookFailureEventListMatch
{
    public ?string $oauth_client_id = null;
    public ?string $webhook_id = null;
}

/** WorkflowState entity data model. */
class WorkflowState
{
    public mixed $archivedAt = null;
    public string $color;
    public mixed $createdAt;
    public ?string $description = null;
    public string $id;
    public ?array $inheritedFrom = null;
    public string $name;
    public float $position;
    public ?array $team = null;
    public string $type;
    public mixed $updatedAt;
}

/** Request payload for WorkflowState#load. */
class WorkflowStateLoadMatch
{
    public string $id;
}

/** Request payload for WorkflowState#list. */
class WorkflowStateListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?int $first = null;
    public ?bool $include_archived = null;
    public ?int $last = null;
    public mixed $order_by = null;
}

/** Request payload for WorkflowState#create. */
class WorkflowStateCreateData
{
    public mixed $archivedAt = null;
    public string $color;
    public mixed $createdAt;
    public ?string $description = null;
    public string $id;
    public ?array $inheritedFrom = null;
    public string $name;
    public float $position;
    public ?array $team = null;
    public string $type;
    public mixed $updatedAt;
}

/** Request payload for WorkflowState#update. */
class WorkflowStateUpdateData
{
    public string $id;
    public mixed $archivedAt = null;
    public ?string $color = null;
    public mixed $createdAt = null;
    public ?string $description = null;
    public ?array $inheritedFrom = null;
    public ?string $name = null;
    public ?float $position = null;
    public ?array $team = null;
    public ?string $type = null;
    public mixed $updatedAt = null;
}

