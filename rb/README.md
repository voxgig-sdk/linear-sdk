# Linear Ruby SDK



The Ruby SDK for the Linear API — an entity-oriented client using idiomatic Ruby conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.AccessKeyRelease` — with named operations (`list`/`load`/`create`/`update`/`remove`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to RubyGems. Install it from the
GitHub release tag (`rb/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/linear-sdk/releases](https://github.com/voxgig-sdk/linear-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "Linear_sdk"

client = LinearSDK.new({
  "apikey" => ENV["LINEAR_APIKEY"],
})
```

### 2. List accesskeyrelease records

```ruby
begin
  # list returns an Array of AccessKeyRelease records — iterate directly.
  accesskeyreleases = client.AccessKeyRelease.list
  accesskeyreleases.each do |item|
    puts "#{item["id"]} #{item["archivedAt"]}"
  end
rescue => err
  warn "list failed: #{err}"
end
```

### 3. Load an accesskeyrelease

```ruby
begin
  # load returns the ENTITY — call data_get for the AccessKeyRelease record (raises on error).
  accesskeyrelease = client.AccessKeyRelease.load({ "id" => "example_id" })
  puts accesskeyrelease
rescue => err
  warn "load failed: #{err}"
end
```

### 4. Create, update, and remove

```ruby
# create returns the ENTITY — call data_get for the created AccessKeyRelease record.
created = client.AccessKeyRelease.create({ "createdAt" => "example_createdAt", "id" => "example_id", "name" => "example_name", "url" => "example_url" })

```


## Error handling

Entity operations raise on failure, so rescue them:

```ruby
begin
  agentactivitys = client.AgentActivity.list()
rescue => err
  warn "list failed: #{err}"
end
```

`direct` does **not** raise — it returns the result hash. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example_id" },
})

warn "request failed: #{result["err"] || "HTTP #{result["status"]}"}" unless result["ok"]
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
else
  # On an HTTP error status there is no err (only a transport failure sets
  # it), so fall back to the status code.
  warn(result["err"] || "HTTP #{result["status"]}")
end
```

### Prepare a request without sending it

```ruby
begin
  fetchdef = client.prepare({
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => { "id" => "example" },
  })
  puts fetchdef["url"]
  puts fetchdef["method"]
  puts fetchdef["headers"]
rescue => err
  warn "prepare failed: #{err}"
end
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```ruby
client = LinearSDK.test({
  "entity" => { "agentactivity" => { "test01" => { "id" => "test01" } } },
})

# Entity ops return the ENTITY (raises on error);
# call data_get for the mock record.
agentactivity = client.AgentActivity.list()
puts agentactivity
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = LinearSDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
  },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
LINEAR_TEST_LIVE=TRUE
LINEAR_APIKEY=<your-key>
```

Then run:

```bash
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### LinearSDK

```ruby
require_relative "Linear_sdk"
client = LinearSDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `String` | API key for authentication. |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = LinearSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### LinearSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> Hash` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> Hash` | Build and send an HTTP request. Returns a result hash (`result["ok"]`); does not raise. |
| `AccessKeyRelease` | `(data) -> AccessKeyReleaseEntity` | Create an AccessKeyRelease entity instance. |
| `AccessKeyReleasePipeline` | `(data) -> AccessKeyReleasePipelineEntity` | Create an AccessKeyReleasePipeline entity instance. |
| `AgentActivity` | `(data) -> AgentActivityEntity` | Create an AgentActivity entity instance. |
| `AgentSession` | `(data) -> AgentSessionEntity` | Create an AgentSession entity instance. |
| `AgentSkill` | `(data) -> AgentSkillEntity` | Create an AgentSkill entity instance. |
| `Application` | `(data) -> ApplicationEntity` | Create an Application entity instance. |
| `Attachment` | `(data) -> AttachmentEntity` | Create an Attachment entity instance. |
| `AuditEntry` | `(data) -> AuditEntryEntity` | Create an AuditEntry entity instance. |
| `AuditEntryType` | `(data) -> AuditEntryTypeEntity` | Create an AuditEntryType entity instance. |
| `AuthResolverResponse` | `(data) -> AuthResolverResponseEntity` | Create an AuthResolverResponse entity instance. |
| `AuthenticationSessionResponse` | `(data) -> AuthenticationSessionResponseEntity` | Create an AuthenticationSessionResponse entity instance. |
| `Comment` | `(data) -> CommentEntity` | Create a Comment entity instance. |
| `CreateOrJoinOrganizationResponse` | `(data) -> CreateOrJoinOrganizationResponseEntity` | Create a CreateOrJoinOrganizationResponse entity instance. |
| `CustomView` | `(data) -> CustomViewEntity` | Create a CustomView entity instance. |
| `Customer` | `(data) -> CustomerEntity` | Create a Customer entity instance. |
| `CustomerNeed` | `(data) -> CustomerNeedEntity` | Create a CustomerNeed entity instance. |
| `CustomerStatus` | `(data) -> CustomerStatusEntity` | Create a CustomerStatus entity instance. |
| `CustomerTier` | `(data) -> CustomerTierEntity` | Create a CustomerTier entity instance. |
| `Cycle` | `(data) -> CycleEntity` | Create a Cycle entity instance. |
| `Diff` | `(data) -> DiffEntity` | Create a Diff entity instance. |
| `Document` | `(data) -> DocumentEntity` | Create a Document entity instance. |
| `DocumentSearchResult` | `(data) -> DocumentSearchResultEntity` | Create a DocumentSearchResult entity instance. |
| `EmailIntakeAddress` | `(data) -> EmailIntakeAddressEntity` | Create an EmailIntakeAddress entity instance. |
| `EmailUserAccountAuthChallengeResponse` | `(data) -> EmailUserAccountAuthChallengeResponseEntity` | Create an EmailUserAccountAuthChallengeResponse entity instance. |
| `Emoji` | `(data) -> EmojiEntity` | Create an Emoji entity instance. |
| `EntityExternalLink` | `(data) -> EntityExternalLinkEntity` | Create an EntityExternalLink entity instance. |
| `ExternalUser` | `(data) -> ExternalUserEntity` | Create an ExternalUser entity instance. |
| `Favorite` | `(data) -> FavoriteEntity` | Create a Favorite entity instance. |
| `GitAutomationState` | `(data) -> GitAutomationStateEntity` | Create a GitAutomationState entity instance. |
| `GitAutomationTargetBranch` | `(data) -> GitAutomationTargetBranchEntity` | Create a GitAutomationTargetBranch entity instance. |
| `GitHubIntegrationConnectDetail` | `(data) -> GitHubIntegrationConnectDetailEntity` | Create a GitHubIntegrationConnectDetail entity instance. |
| `Initiative` | `(data) -> InitiativeEntity` | Create an Initiative entity instance. |
| `InitiativeLabel` | `(data) -> InitiativeLabelEntity` | Create an InitiativeLabel entity instance. |
| `InitiativeLeadTeamChangeImpact` | `(data) -> InitiativeLeadTeamChangeImpactEntity` | Create an InitiativeLeadTeamChangeImpact entity instance. |
| `InitiativeRelation` | `(data) -> InitiativeRelationEntity` | Create an InitiativeRelation entity instance. |
| `InitiativeToProject` | `(data) -> InitiativeToProjectEntity` | Create an InitiativeToProject entity instance. |
| `InitiativeUpdate` | `(data) -> InitiativeUpdateEntity` | Create an InitiativeUpdate entity instance. |
| `Integration` | `(data) -> IntegrationEntity` | Create an Integration entity instance. |
| `IntegrationTemplate` | `(data) -> IntegrationTemplateEntity` | Create an IntegrationTemplate entity instance. |
| `IntegrationsSetting` | `(data) -> IntegrationsSettingEntity` | Create an IntegrationsSetting entity instance. |
| `Issue` | `(data) -> IssueEntity` | Create an Issue entity instance. |
| `IssueImport` | `(data) -> IssueImportEntity` | Create an IssueImport entity instance. |
| `IssueLabel` | `(data) -> IssueLabelEntity` | Create an IssueLabel entity instance. |
| `IssuePriorityValue` | `(data) -> IssuePriorityValueEntity` | Create an IssuePriorityValue entity instance. |
| `IssueRelation` | `(data) -> IssueRelationEntity` | Create an IssueRelation entity instance. |
| `IssueSearchResult` | `(data) -> IssueSearchResultEntity` | Create an IssueSearchResult entity instance. |
| `IssueToRelease` | `(data) -> IssueToReleaseEntity` | Create an IssueToRelease entity instance. |
| `LogoutResponse` | `(data) -> LogoutResponseEntity` | Create a LogoutResponse entity instance. |
| `Notification` | `(data) -> NotificationEntity` | Create a Notification entity instance. |
| `NotificationSubscription` | `(data) -> NotificationSubscriptionEntity` | Create a NotificationSubscription entity instance. |
| `OAuthApplication` | `(data) -> OAuthApplicationEntity` | Create an OAuthApplication entity instance. |
| `Organization` | `(data) -> OrganizationEntity` | Create an Organization entity instance. |
| `OrganizationDomain` | `(data) -> OrganizationDomainEntity` | Create an OrganizationDomain entity instance. |
| `OrganizationInvite` | `(data) -> OrganizationInviteEntity` | Create an OrganizationInvite entity instance. |
| `OrganizationMeta` | `(data) -> OrganizationMetaEntity` | Create an OrganizationMeta entity instance. |
| `PasskeyLoginStartResponse` | `(data) -> PasskeyLoginStartResponseEntity` | Create a PasskeyLoginStartResponse entity instance. |
| `Project` | `(data) -> ProjectEntity` | Create a Project entity instance. |
| `ProjectLabel` | `(data) -> ProjectLabelEntity` | Create a ProjectLabel entity instance. |
| `ProjectMilestone` | `(data) -> ProjectMilestoneEntity` | Create a ProjectMilestone entity instance. |
| `ProjectMilestoneMoveProjectTeam` | `(data) -> ProjectMilestoneMoveProjectTeamEntity` | Create a ProjectMilestoneMoveProjectTeam entity instance. |
| `ProjectRelation` | `(data) -> ProjectRelationEntity` | Create a ProjectRelation entity instance. |
| `ProjectSearchResult` | `(data) -> ProjectSearchResultEntity` | Create a ProjectSearchResult entity instance. |
| `ProjectStatus` | `(data) -> ProjectStatusEntity` | Create a ProjectStatus entity instance. |
| `ProjectUpdate` | `(data) -> ProjectUpdateEntity` | Create a ProjectUpdate entity instance. |
| `PushSubscription` | `(data) -> PushSubscriptionEntity` | Create a PushSubscription entity instance. |
| `Reaction` | `(data) -> ReactionEntity` | Create a Reaction entity instance. |
| `Release` | `(data) -> ReleaseEntity` | Create a Release entity instance. |
| `ReleaseNote` | `(data) -> ReleaseNoteEntity` | Create a ReleaseNote entity instance. |
| `ReleasePipeline` | `(data) -> ReleasePipelineEntity` | Create a ReleasePipeline entity instance. |
| `ReleaseStage` | `(data) -> ReleaseStageEntity` | Create a ReleaseStage entity instance. |
| `Roadmap` | `(data) -> RoadmapEntity` | Create a Roadmap entity instance. |
| `RoadmapToProject` | `(data) -> RoadmapToProjectEntity` | Create a RoadmapToProject entity instance. |
| `SlaConfiguration` | `(data) -> SlaConfigurationEntity` | Create a SlaConfiguration entity instance. |
| `SsoUrlFromEmailResponse` | `(data) -> SsoUrlFromEmailResponseEntity` | Create a SsoUrlFromEmailResponse entity instance. |
| `Team` | `(data) -> TeamEntity` | Create a Team entity instance. |
| `TeamMembership` | `(data) -> TeamMembershipEntity` | Create a TeamMembership entity instance. |
| `Template` | `(data) -> TemplateEntity` | Create a Template entity instance. |
| `TimeSchedule` | `(data) -> TimeScheduleEntity` | Create a TimeSchedule entity instance. |
| `TriageResponsibility` | `(data) -> TriageResponsibilityEntity` | Create a TriageResponsibility entity instance. |
| `UploadFile` | `(data) -> UploadFileEntity` | Create an UploadFile entity instance. |
| `UsageAlert` | `(data) -> UsageAlertEntity` | Create an UsageAlert entity instance. |
| `User` | `(data) -> UserEntity` | Create an User entity instance. |
| `UserSetting` | `(data) -> UserSettingEntity` | Create an UserSetting entity instance. |
| `ViewPreference` | `(data) -> ViewPreferenceEntity` | Create a ViewPreference entity instance. |
| `Webhook` | `(data) -> WebhookEntity` | Create a Webhook entity instance. |
| `WebhookFailureEvent` | `(data) -> WebhookFailureEventEntity` | Create a WebhookFailureEvent entity instance. |
| `WorkflowState` | `(data) -> WorkflowStateEntity` | Create a WorkflowState entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch = nil, ctrl) -> Array` | List entities matching the criteria (call with no argument to list all). Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return the result data directly. On failure they
raise a `LinearError` (a `StandardError` subclass), so wrap
calls in `begin`/`rescue` where you need to handle errors.

The `direct` escape hatch is the exception: it never raises and instead
returns a result `Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |
| `err` | `Error` | Present when `ok` is `false`. |

### Entities

#### AccessKeyRelease

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the release was archived. |
| `commitSha` | The Git commit SHA associated with the release. |
| `completedAt` | The time at which the release was completed. |
| `createdAt` | The time at which the release was created. |
| `id` | The unique identifier of the release. |
| `name` | The name of the release. |
| `url` | The URL to the release page in the Linear app. |
| `version` | The version identifier for this release. |

Operations: Create, List, Load.

API path: `releaseCompleteByAccessKey`

#### AccessKeyReleasePipeline

| Field | Description |
| --- | --- |
| `id` | The unique identifier of the release pipeline. |
| `includePathPatterns` | Glob patterns used to filter commits by changed file path. |

Operations: Load.

API path: `releasePipelineByAccessKey`

#### AgentActivity

| Field | Description |
| --- | --- |
| `agentSession` | The agent session this activity belongs to. |
| `archivedAt` | The time at which the entity was archived. |
| `contextualMetadata` | [Internal] Metadata about user-provided contextual information for this agent activity. |
| `createdAt` | The time at which the entity was created. |
| `ephemeral` | Whether the activity is ephemeral, and should disappear after the next agent activity. |
| `executionSkippedReason` | [Internal] The reason this activity was persisted without being sent to the agent runtime. |
| `id` | The unique identifier of the entity. |
| `queued` | [Internal] Whether this activity is queued for later processing. |
| `sentAt` | [Internal] The time at which the prompt actually entered the conversation. |
| `signal` | An optional modifier that provides additional instructions on how the activity should be interpreted. |
| `signalMetadata` | Metadata about this agent activity's signal. |
| `sourceComment` | The source comment this activity is linked to. |
| `sourceMetadata` | Metadata about the external source that created this agent activity. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |
| `user` | The user who created this agent activity. |

Operations: Create, List, Load, Update.

API path: `agentActivityCreate`

#### AgentSession

| Field | Description |
| --- | --- |
| `appUser` | The agent user that is associated with this agent session. |
| `archivedAt` | The time at which the entity was archived. |
| `codingHarnessModelLabel` | [Internal] Compact display label for the coding harness model used by this session, derived from the latest associated sandbox. |
| `comment` | The comment this agent session is associated with. |
| `context` | The entity contexts this session is related to, such as issues or projects referenced in direct chat sessions. |
| `createdAt` | The time at which the entity was created. |
| `creator` | The human user responsible for the agent session. |
| `dismissedAt` | The time a user dismissed this agent session. |
| `dismissedBy` | The user who dismissed the agent session. |
| `endedAt` | The time the agent session completed. |
| `id` | The unique identifier of the entity. |
| `issue` | The issue this agent session is associated with. |
| `modelSelection` | [Internal] How Adaptive selected the model route used by this coding session. |
| `plan` | A dynamically updated plan describing the agent's execution strategy, including steps to be taken and their current status. |
| `pullRequest` | The pull request this agent session is anchored to, when started from a pull request. |
| `slugId` | The agent session's unique URL slug. |
| `sourceComment` | The comment that this agent session was spawned from, if from a different thread. |
| `sourceMetadata` | Metadata about the external source that created this agent session. |
| `startedAt` | The time the agent session transitioned to active status and began work. |
| `status` | The current status of the agent session, such as pending, active, awaiting input, complete, error, or stale. |
| `summary` | The session title, generated automatically or set by the owning OAuth application. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |
| `url` | The URL to the agent session page in the Linear app. |

Operations: Create, List, Load, Update.

API path: `agentSessionCreate`

#### AgentSkill

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `body` | The skill instructions in markdown format. |
| `color` | The skill's color. |
| `createdAt` | The time at which the entity was created. |
| `creator` | The user who created the skill. |
| `description` | The skill's description. |
| `icon` | The icon of the skill. |
| `id` | The unique identifier of the entity. |
| `inheritedFrom` | The parent-team skill this skill was inherited from. |
| `lastUpdatedBy` | The user who last updated the skill. |
| `lastUsedAt` | The time the skill was last used by anyone in the workspace. |
| `owner` | The user who owns the skill. |
| `recentUsageCount` | The number of times the skill was used by anyone in the workspace in the last 30 days. |
| `shared` | Whether the skill is shared with everyone in the workspace. |
| `slugId` | The skill's unique URL slug. |
| `teamId` | The identifier of the team this skill is shared with. |
| `title` | The skill's title. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Remove, Update.

API path: `agentSkillCreate`

#### Application

| Field | Description |
| --- | --- |
| `clientId` | OAuth application's client ID. |
| `description` | Information about the application. |
| `developer` | Name of the developer. |
| `developerUrl` | URL of the developer's website, homepage, or documentation. |
| `id` | OAuth application's ID. |
| `imageUrl` | Image of the application. |
| `name` | Application name. |

Operations: Load.

API path: `applicationInfo`

#### Attachment

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `bodyData` | The body data of the attachment, if any. |
| `createdAt` | The time at which the entity was created. |
| `creator` | The creator of the attachment. |
| `externalUserCreator` | The non-Linear user who created the attachment. |
| `groupBySource` | Whether attachments from the same source application should be visually grouped together in the Linear issue detail view. |
| `id` | The unique identifier of the entity. |
| `issue` | The issue this attachment belongs to. |
| `metadata` | Integration-specific metadata for this attachment. |
| `originalIssue` | The issue this attachment was originally created on. |
| `source` | Information about the source which created the attachment. |
| `sourceType` | The source type of the attachment, derived from the source metadata. |
| `subtitle` | Content for the subtitle line in the Linear attachment widget. |
| `title` | Content for the title line in the Linear attachment widget. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |
| `url` | The URL of the external resource this attachment links to. |

Operations: Create, List, Load, Remove, Update.

API path: `attachmentCreate`

#### AuditEntry

| Field | Description |
| --- | --- |
| `actor` | The user that caused the audit entry to be created. |
| `actorId` | The ID of the user that caused the audit entry to be created. |
| `archivedAt` | The time at which the entity was archived. |
| `countryCode` | The ISO 3166-1 alpha-2 country code derived from the request IP address. |
| `createdAt` | The time at which the entity was created. |
| `id` | The unique identifier of the entity. |
| `ip` | The IP address of the actor at the time the audited action was performed. |
| `metadata` | Additional metadata related to the audit entry. |
| `organization` | The workspace the audit log belongs to. |
| `requestInformation` | Additional information related to the request which performed the action. |
| `type` | The type of audited action (e.g., user authentication, permission change, data export, setting modification). |
| `updatedAt` | The last time at which the entity was meaningfully updated. |

Operations: List.

API path: `auditEntries`

#### AuditEntryType

| Field | Description |
| --- | --- |
| `description` | Description of the audit entry type. |
| `type` | The audit entry type. |

Operations: List.

API path: `auditEntryTypes`

#### AuthResolverResponse

| Field | Description |
| --- | --- |
| `allowDomainAccess` | Should the signup flow allow access for the domain. |
| `email` | Email for the authenticated account. |
| `id` | User account ID. |
| `lastUsedOrganizationId` | ID of the organization last accessed by the user. |
| `service` | The authentication service used for the current session (e.g., google, email, saml). |

Operations: Create, Load, Update.

API path: `emailTokenUserAccountAuth`

#### AuthenticationSessionResponse

| Field | Description |
| --- | --- |
| `browserType` | Used web browser. |
| `client` | Client used for the session |
| `countryCodes` | Country codes of all seen locations. |
| `createdAt` | The time at which the entity was created. |
| `detailedName` | Detailed name of the session including version information, derived from the user agent. |
| `id` |  |
| `ip` | IP address. |
| `isCurrentSession` | Whether this session is the one used to make the current API request. |
| `lastActiveAt` | When was the session last seen |
| `location` | Human readable location |
| `locationCity` | Location city name. |
| `locationCountry` | Location country name. |
| `locationCountryCode` | Location country code. |
| `locationRegionCode` | Location region code. |
| `name` | Name of the session, derived from the client and operating system |
| `operatingSystem` | Operating system used for the session |
| `service` | Service used for logging in. |
| `type` | Type of application used to authenticate. |
| `updatedAt` | Date when the session was last updated. |
| `userAgent` | Session's user-agent. |

Operations: List.

API path: `userSessions`

#### Comment

| Field | Description |
| --- | --- |
| `agentSession` | Agent session associated with this comment. |
| `archivedAt` | The time at which the entity was archived. |
| `body` | The comment content in markdown format. |
| `bodyData` | [Internal] The comment content as a ProseMirror document. |
| `botActor` | The bot that created the comment. |
| `createdAt` | The time at which the entity was created. |
| `documentContent` | The document content that the comment is associated with. |
| `documentContentId` | The ID of the document content that the comment is associated with. |
| `editedAt` | The time the comment was last edited by its author. |
| `externalThread` | The external thread that the comment is synced with. |
| `externalUser` | The external user who wrote the comment, when the comment was created through an integration such as Slack or Intercom. |
| `hideInLinear` | [Internal] Whether the comment should be hidden from Linear clients. |
| `id` | The unique identifier of the entity. |
| `initiative` | The initiative that the comment is associated with. |
| `initiativeId` | The ID of the initiative that the comment is associated with. |
| `initiativeUpdate` | The initiative update that the comment is associated with. |
| `initiativeUpdateId` | The ID of the initiative update that the comment is associated with. |
| `isArtificialAgentSessionRoot` | [Internal] Whether the comment is an artificial placeholder for an agent session thread created without a comment mention. |
| `issue` | The issue that the comment is associated with. |
| `issueId` | The ID of the issue that the comment is associated with. |
| `onBehalfOf` | [Internal] The user on whose behalf the comment was created, e.g. |
| `parent` | The parent comment under which the current comment is nested. |
| `parentId` | The ID of the parent comment under which the current comment is nested. |
| `post` | The post that the comment is associated with. |
| `project` | The project that the comment is associated with. |
| `projectId` | The ID of the project that the comment is associated with. |
| `projectUpdate` | The project update that the comment is associated with. |
| `projectUpdateId` | The ID of the project update that the comment is associated with. |
| `quotedText` | The text that this comment references, used for inline comments on documents or issue descriptions. |
| `reactionData` | Emoji reaction summary for this comment, grouped by emoji type. |
| `resolvedAt` | The time when the comment thread was resolved. |
| `resolvingComment` | The child comment that resolved this thread. |
| `resolvingCommentId` | The ID of the child comment that resolved this thread. |
| `resolvingUser` | The user that resolved the comment thread. |
| `threadSummary` | [Internal] An AI-generated summary of the comment thread. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |
| `url` | Comment's URL. |
| `user` | The user who wrote the comment. |

Operations: Create, List, Load, Remove, Update.

API path: `commentCreate`

#### CreateOrJoinOrganizationResponse

| Field | Description |
| --- | --- |
| `organization` | The workspace that was created or joined. |
| `user` | The user who created or joined the workspace. |

Operations: Create, Update.

API path: `createOrganizationFromOnboarding`

#### CustomView

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `color` | The hex color code of the custom view icon. |
| `createdAt` | The time at which the entity was created. |
| `creator` | The user who originally created the custom view. |
| `description` | The description of the custom view. |
| `facet` | [INTERNAL] The facet that links this custom view to its parent entity (project, initiative, team page, etc.). |
| `feedItemFilterData` | The filter applied to feed items in the custom view. |
| `filterData` | The structured filter applied to issues in the custom view. |
| `icon` | The icon of the custom view. |
| `id` | The unique identifier of the entity. |
| `initiativeFilterData` | The filter applied to initiatives in the custom view. |
| `modelName` | The entity type this view displays. |
| `name` | The name of the custom view, displayed in the sidebar and navigation. |
| `organization` | The workspace of the custom view. |
| `organizationViewPreferences` | The workspace-level default view preferences for this custom view, if any have been set. |
| `owner` | The user who owns the custom view. |
| `projectFilterData` | The filter applied to projects in the custom view. |
| `shared` | Whether the custom view is shared with everyone in the organization. |
| `slugId` | The custom view's unique URL slug, used to construct human-readable URLs. |
| `team` | The team that the custom view is scoped to. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |
| `updatedBy` | The user who last updated the custom view. |
| `userViewPreferences` | The current user's personal view preferences for this custom view, if they have set any. |

Operations: Create, List, Load, Remove, Update.

API path: `customViewCreate`

#### Customer

| Field | Description |
| --- | --- |
| `approximateNeedCount` | The approximate number of distinct requests associated with this customer, deduplicated per issue or project. |
| `archivedAt` | The time at which the entity was archived. |
| `createdAt` | The time at which the entity was created. |
| `domains` | The email domains associated with this customer (e.g., 'acme.com'). |
| `externalIds` | Identifiers for this customer in external systems (e.g., CRM IDs from Intercom, Salesforce, or HubSpot). |
| `id` | The unique identifier of the entity. |
| `integration` | The integration that manages this customer's data (e.g., Intercom, Salesforce). |
| `logoUrl` | URL of the customer's logo image. |
| `mainSourceId` | The primary external source ID when a customer has data from multiple external systems. |
| `name` | The display name of the customer organization. |
| `owner` | The workspace member assigned as the owner of this customer. |
| `revenue` | The annual revenue generated by this customer. |
| `size` | The number of employees or seats at the customer organization. |
| `slackChannelId` | The ID of the Slack channel linked to this customer for communication. |
| `slugId` | A unique, human-readable URL slug for the customer. |
| `status` | The current lifecycle status of the customer. |
| `tier` | The tier or segment assigned to this customer for prioritization (e.g., Enterprise, Pro, Free). |
| `updatedAt` | The last time at which the entity was meaningfully updated. |
| `url` | The URL of the customer's page in the Linear application. |

Operations: Create, List, Load, Remove, Update.

API path: `customerCreate`

#### CustomerNeed

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `attachment` | The issue attachment linked to this need. |
| `body` | The body content of the need in Markdown format. |
| `bodyData` | [Internal] The body content of the need as a Prosemirror document JSON string. |
| `comment` | An optional comment providing additional context for this need. |
| `content` | The effective Markdown content shown for this customer need. |
| `createdAt` | The time at which the entity was created. |
| `creator` | The user who manually created this customer need. |
| `customer` | The customer organization this need belongs to. |
| `id` | The unique identifier of the entity. |
| `issue` | The issue this need is linked to. |
| `originalIssue` | The issue this customer need was originally created on, before being moved to a different issue or project. |
| `priority` | Whether the customer need is important or not. |
| `project` | The project this need is linked to. |
| `projectAttachment` | The project attachment linked to this need. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |
| `url` | The URL of the source attachment linked to this need, if any. |

Operations: Create, List, Load, Remove, Update.

API path: `customerNeedCreate`

#### CustomerStatus

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `color` | The color of the status indicator in the UI, as a HEX string (e.g., '#ff0000'). |
| `createdAt` | The time at which the entity was created. |
| `description` | An optional description explaining what this status represents in the customer lifecycle. |
| `displayName` | The user-facing display name of the status shown in the UI. |
| `id` | The unique identifier of the entity. |
| `name` | The internal name of the status. |
| `position` | The sort position of the status in the workspace's customer lifecycle flow. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Remove, Update.

API path: `customerStatusCreate`

#### CustomerTier

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `color` | The color of the tier indicator in the UI, as a HEX string (e.g., '#ff0000'). |
| `createdAt` | The time at which the entity was created. |
| `description` | An optional description explaining what this tier represents and its intended use for customer segmentation. |
| `displayName` | The user-facing display name of the tier shown in the UI. |
| `id` | The unique identifier of the entity. |
| `name` | The internal name of the tier. |
| `position` | The sort position of the tier in the workspace's customer tier ordering. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Remove, Update.

API path: `customerTierCreate`

#### Cycle

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `autoArchivedAt` | The time at which the cycle was automatically archived by the auto-pruning process. |
| `completedAt` | The completion time of the cycle. |
| `completedIssueCountHistory` | The number of completed issues in the cycle after each day. |
| `completedScopeHistory` | The number of completed estimation points after each day. |
| `createdAt` | The time at which the entity was created. |
| `currentProgress` | [Internal] The current progress snapshot of the cycle, broken down by issue status categories. |
| `description` | The description of the cycle. |
| `endsAt` | The end date and time of the cycle. |
| `id` | The unique identifier of the entity. |
| `inProgressScopeHistory` | The number of in-progress estimation points after each day. |
| `inheritedFrom` | The parent cycle this cycle was inherited from. |
| `isActive` | Whether the cycle is currently active. |
| `isFuture` | Whether the cycle has not yet started. |
| `isNext` | Whether this cycle is the next upcoming (not yet started) cycle for the team. |
| `isPast` | Whether the cycle's end date has passed. |
| `isPrevious` | Whether this cycle is the most recently completed cycle for the team. |
| `issueCountHistory` | The total number of issues in the cycle after each day. |
| `name` | The custom name of the cycle. |
| `number` | The auto-incrementing number of the cycle, unique within its team. |
| `progress` | The overall progress of the cycle as a number between 0 and 1. |
| `progressHistory` | [Internal] The detailed progress history of the cycle, including per-status breakdowns over time. |
| `scopeHistory` | The total number of estimation points (scope) in the cycle after each day. |
| `startsAt` | The start date and time of the cycle. |
| `team` | The team that the cycle belongs to. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Update.

API path: `cycleCreate`

#### Diff

| Field | Description |
| --- | --- |
| `additions` | [Internal] The total number of added lines across the diff. |
| `agentSession` | The agent session the diff belongs to. |
| `archivedAt` | The time at which the entity was archived. |
| `contentHash` | [Internal] The opaque content hash identifying the diff's content in code.storage. |
| `createdAt` | The time at which the entity was created. |
| `creator` | The user responsible for the diff. |
| `deletions` | [Internal] The total number of deleted lines across the diff. |
| `fileCount` | [Internal] The number of changed files in the diff. |
| `id` | The unique identifier of the entity. |
| `organization` | The workspace the diff belongs to. |
| `pullRequest` | The pull request the diff was promoted to when opened for review. |
| `slugId` | [Internal] The diff's unique URL slug. |
| `truncated` | [Internal] Whether oversized files were omitted when the diff was computed. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |

Operations: Load.

API path: `diff`

#### Document

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `color` | The hex color of the document icon. |
| `content` | The document's content in markdown format. |
| `contentState` | [Internal] The document's content as a base64-encoded Yjs state update. |
| `createdAt` | The time at which the entity was created. |
| `creator` | The user who created the document. |
| `cycle` | [Internal] The cycle that the document is associated with. |
| `documentContentId` | The ID of the document content associated with the document. |
| `hiddenAt` | The time at which the document was hidden from the default view. |
| `icon` | The icon of the document, either a decorative icon type or an emoji string. |
| `id` | The unique identifier of the entity. |
| `initiative` | The initiative that the document is associated with. |
| `issue` | The issue that the document is associated with. |
| `lastAppliedTemplate` | The last template that was applied to this document. |
| `owner` | The owner of the document. |
| `project` | The project that the document is associated with. |
| `release` | The release that the document is associated with. |
| `slugId` | The document's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | The sort order of the document in its parent entity's resources list. |
| `summary` | [Internal] A one-sentence AI-generated summary of the document content. |
| `team` | [Internal] The team that the document is associated with. |
| `title` | The title of the document. |
| `trashed` | A flag that indicates whether the document is in the trash bin. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |
| `updatedBy` | The user who last updated the document. |
| `url` | The canonical url for the document. |

Operations: Create, List, Load, Remove, Update.

API path: `documentCreate`

#### DocumentSearchResult

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `color` | The hex color of the document icon. |
| `content` | The document's content in markdown format. |
| `contentState` | [Internal] The document's content as a base64-encoded Yjs state update. |
| `createdAt` | The time at which the entity was created. |
| `creator` | The user who created the document. |
| `cycle` | [Internal] The cycle that the document is associated with. |
| `documentContentId` | The ID of the document content associated with the document. |
| `hiddenAt` | The time at which the document was hidden from the default view. |
| `icon` | The icon of the document, either a decorative icon type or an emoji string. |
| `id` | The unique identifier of the entity. |
| `initiative` | The initiative that the document is associated with. |
| `issue` | The issue that the document is associated with. |
| `lastAppliedTemplate` | The last template that was applied to this document. |
| `metadata` | Metadata related to search result. |
| `owner` | The owner of the document. |
| `project` | The project that the document is associated with. |
| `release` | The release that the document is associated with. |
| `slugId` | The document's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | The sort order of the document in its parent entity's resources list. |
| `summary` | [Internal] A one-sentence AI-generated summary of the document content. |
| `team` | [Internal] The team that the document is associated with. |
| `title` | The title of the document. |
| `trashed` | A flag that indicates whether the document is in the trash bin. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |
| `updatedBy` | The user who last updated the document. |
| `url` | The canonical url for the document. |

Operations: List.

API path: `searchDocuments`

#### EmailIntakeAddress

| Field | Description |
| --- | --- |
| `address` | The unique local part (before the @) of the intake email address, used to route incoming emails to the correct intake handler. |
| `archivedAt` | The time at which the entity was archived. |
| `createdAt` | The time at which the entity was created. |
| `creator` | The user who created the email intake address. |
| `customerRequestsEnabled` | Whether issues created from emails sent to this address are automatically converted into customer requests, linking the sender as a customer contact. |
| `enabled` | Whether the email address is enabled. |
| `forwardingEmailAddress` | The email address used to forward emails to the intake address. |
| `id` | The unique identifier of the entity. |
| `issueCanceledAutoReply` | The auto-reply message for issue canceled. |
| `issueCanceledAutoReplyEnabled` | Whether the auto-reply for issue canceled is enabled. |
| `issueCompletedAutoReply` | The auto-reply message for issue completed. |
| `issueCompletedAutoReplyEnabled` | Whether the auto-reply for issue completed is enabled. |
| `issueCreatedAutoReply` | The auto-reply message for issue created. |
| `issueCreatedAutoReplyEnabled` | Whether the auto-reply for issue created is enabled. |
| `lastUsedAt` | The last time an inbound email was successfully ingested for this address. |
| `organization` | The workspace that the email address is associated with. |
| `reopenOnReply` | Whether to reopen completed or canceled issues when a substantive email reply is received. |
| `repliesEnabled` | Whether email replies are enabled. |
| `senderName` | The name to be used for outgoing emails. |
| `sesDomainIdentity` | The SES domain identity that the email address is associated with. |
| `team` | The team that the email address is associated with. |
| `template` | The template that the email address is associated with. |
| `type` | The type of the email address. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |
| `useUserNamesInReplies` | Whether the commenter's name is included in the email replies. |

Operations: Create, Load, Remove, Update.

API path: `emailIntakeAddressCreate`

#### EmailUserAccountAuthChallengeResponse

| Field | Description |
| --- | --- |
| `authType` | Supported challenge for this user account. |
| `success` | Whether the operation was successful. |

Operations: Create.

API path: `emailUserAccountAuthChallenge`

#### Emoji

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `createdAt` | The time at which the entity was created. |
| `creator` | The user who created the emoji. |
| `id` | The unique identifier of the entity. |
| `name` | The unique name of the custom emoji within the workspace. |
| `organization` | The workspace that the emoji belongs to. |
| `source` | The source of the emoji, indicating how it was created (e.g., uploaded by a user or imported). |
| `updatedAt` | The last time at which the entity was meaningfully updated. |
| `url` | The URL of the uploaded image for this custom emoji. |

Operations: Create, List, Load, Remove.

API path: `emojiCreate`

#### EntityExternalLink

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `createdAt` | The time at which the entity was created. |
| `creator` | The user who created the link. |
| `id` | The unique identifier of the entity. |
| `initiative` | The initiative that the link is associated with. |
| `label` | The link's label. |
| `project` | The project that the link is associated with. |
| `sortOrder` | The sort order of this link within the parent entity's resources list. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |
| `url` | The link's URL. |

Operations: Create, Load, Remove, Update.

API path: `entityExternalLinkCreate`

#### ExternalUser

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `avatarUrl` | A URL to the external user's avatar image. |
| `createdAt` | The time at which the entity was created. |
| `displayName` | The external user's display name. |
| `email` | The external user's email address. |
| `id` | The unique identifier of the entity. |
| `lastSeen` | The last time the external user was seen interacting with Linear through their external service. |
| `name` | The external user's full name. |
| `organization` | The workspace that the external user belongs to. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |

Operations: List, Load.

API path: `externalUsers`

#### Favorite

| Field | Description |
| --- | --- |
| `aiConversation` | [INTERNAL] The favorited Agent conversation. |
| `archivedAt` | The time at which the entity was archived. |
| `color` | [Internal] Returns the color of the favorite's icon. |
| `createdAt` | The time at which the entity was created. |
| `customView` | The favorited custom view. |
| `customer` | The favorited customer. |
| `cycle` | The favorited cycle. |
| `dashboard` | The favorited dashboard. |
| `detail` | [Internal] Detail text for favorite's `title` (e.g. |
| `document` | The favorited document. |
| `facet` | [INTERNAL] The favorited facet. |
| `folderName` | The name of the folder. |
| `icon` | [Internal] Name of the favorite's icon. |
| `id` | The unique identifier of the entity. |
| `initiative` | The favorited initiative. |
| `initiativeLabel` | [INTERNAL] The favorited initiative label. |
| `initiativeTab` | The targeted tab of the initiative. |
| `issue` | The favorited issue. |
| `label` | The favorited label. |
| `liveFolderDefinition` | The versioned lazy root and filter represented by this live favorite folder. |
| `liveFolderPreset` | The predefined live folder represented by this favorite. |
| `owner` | The user who owns this favorite. |
| `parent` | The parent folder of the favorite. |
| `pipelineTab` | The targeted tab of the release pipeline. |
| `predefinedViewTeam` | The team of the favorited predefined view. |
| `predefinedViewType` | The type of favorited predefined view (e.g., 'allIssues', 'activeCycle', 'backlog', 'triage'). |
| `project` | The favorited project. |
| `projectLabel` | The favorited project label. |
| `projectTab` | The targeted tab of the project. |
| `projectTeam` | [DEPRECATED] The favorited team of the project. |
| `pullRequest` | The favorited pull request. |
| `release` | The favorited release. |
| `releaseNote` | The favorited release note. |
| `releasePipeline` | The favorited release pipeline. |
| `sortOrder` | The position of this item in the user's favorites list. |
| `team` | The favorited team. |
| `title` | [Internal] Favorite's title text (name of the favorite'd object or folder). |
| `type` | The type of entity this favorite references, such as 'issue', 'project', 'cycle', 'customView', 'document', 'folder', etc. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |
| `url` | URL of the favorited entity. |
| `user` | The favorited user. |
| `workflowDefinition` | The favorited loop. |

Operations: Create, List, Load, Remove, Update.

API path: `favoriteCreate`

#### GitAutomationState

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `createdAt` | The time at which the entity was created. |
| `event` | The Git event that triggers this automation rule (e.g., branch created, PR opened for review, or PR merged). |
| `id` | The unique identifier of the entity. |
| `state` | The workflow state that linked issues will be transitioned to when the Git event fires. |
| `targetBranch` | The target branch that this automation rule applies to. |
| `team` | The team that this automation rule belongs to. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |

Operations: Create, Remove, Update.

API path: `gitAutomationStateCreate`

#### GitAutomationTargetBranch

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `branchPattern` | The branch name or pattern to match against pull request target branches. |
| `createdAt` | The time at which the entity was created. |
| `id` | The unique identifier of the entity. |
| `isRegex` | Whether the branch pattern should be interpreted as a regular expression. |
| `team` | The team that this target branch definition belongs to. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |

Operations: Create, Remove, Update.

API path: `gitAutomationTargetBranchCreate`

#### GitHubIntegrationConnectDetail

| Field | Description |
| --- | --- |
| `lostRepositoryNames` | Full names ('owner/repo') of repositories whose existing GitHub Issues sync mappings would become inaccessible if the new GitHub App installation replaces the existing one. |

Operations: Create, Update.

API path: `integrationAsksConnectChannel`

#### Initiative

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `canceledAt` | [Internal] The time at which the initiative was moved into Canceled status. |
| `color` | The initiative's color. |
| `completedAt` | The time at which the initiative was moved into Completed status. |
| `content` | The initiative's content in markdown format. |
| `createdAt` | The time at which the entity was created. |
| `creator` | The user who created the initiative. |
| `description` | The description of the initiative. |
| `documentContent` | The content of the initiative description. |
| `frequencyResolution` | The resolution of the reminder frequency. |
| `health` | The overall health of the initiative, derived from the most recent initiative update. |
| `healthUpdatedAt` | The time at which the initiative health was last updated, typically when a new initiative update is posted. |
| `icon` | The icon of the initiative. |
| `id` | The unique identifier of the entity. |
| `identifier` | [Internal] The human-readable identifier of the initiative. |
| `integrationsSettings` | Settings for all integrations associated with that initiative. |
| `labelIds` | The IDs of the initiative labels associated with this initiative. |
| `lastUpdate` | The most recent status update posted for this initiative. |
| `leadTeam` | The team that leads the initiative. |
| `name` | The name of the initiative. |
| `organization` | The workspace of the initiative. |
| `owner` | The user who owns the initiative. |
| `parentInitiative` | Parent initiative associated with the initiative. |
| `previousIdentifiers` | [Internal] Identifiers (default and custom) that this initiative has previously held. |
| `priority` | The priority of the initiative. |
| `prioritySortOrder` | The sort order of the initiative within the workspace when ordered by priority. |
| `slugId` | The initiative's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | The sort order of the initiative within the workspace. |
| `startedAt` | The time at which the initiative was moved into Active status. |
| `status` | The lifecycle status of the initiative. |
| `targetDate` | The estimated completion date of the initiative. |
| `targetDateResolution` | The resolution of the initiative's estimated completion date, indicating whether it refers to a specific day, week, month, quarter, or year. |
| `trashed` | A flag that indicates whether the initiative is in the trash bin. |
| `updateReminderFrequency` | The frequency at which to prompt for updates. |
| `updateReminderFrequencyInWeeks` | The n-weekly frequency at which to prompt for updates. |
| `updateRemindersDay` | The day at which to prompt for updates. |
| `updateRemindersHour` | The hour at which to prompt for updates. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |
| `url` | Initiative URL. |
| `visibility` | The visibility of the initiative, derived from its lead team. |

Operations: Create, List, Load, Remove, Update.

API path: `initiativeCreate`

#### InitiativeLabel

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `color` | The label's color as a HEX string (e.g., '#EB5757'). |
| `createdAt` | The time at which the entity was created. |
| `creator` | The user who created the label. |
| `description` | The label's description. |
| `id` | The unique identifier of the entity. |
| `isGroup` | Whether the label is a group. |
| `lastAppliedAt` | The date when the label was last applied to an issue, project, or initiative. |
| `name` | The label's name. |
| `organization` | The workspace that the initiative label belongs to. |
| `parent` | The parent label group. |
| `retiredAt` | [Internal] When the label was retired. |
| `retiredBy` | The user who retired the label. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Remove, Update.

API path: `initiativeLabelCreate`

#### InitiativeLeadTeamChangeImpact

| Field | Description |
| --- | --- |
| `affectedDescendantCount` | The number of editable matching sub-initiatives whose lead team would change if the update is applied to descendants. |
| `id` |  |
| `visibilityMayChange` | Whether the changed initiatives may gain or lose access restrictions because the current or next lead team is not public. |

Operations: Load.

API path: `initiativeLeadTeamChangeImpact`

#### InitiativeRelation

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `createdAt` | The time at which the entity was created. |
| `id` | The unique identifier of the entity. |
| `initiative` | The parent initiative in this hierarchical relation. |
| `relatedInitiative` | The child initiative in this hierarchical relation. |
| `sortOrder` | The sort order of the child initiative within its parent initiative. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |
| `user` | The user who last created or modified the relation. |

Operations: Create, List, Load, Remove, Update.

API path: `initiativeRelationCreate`

#### InitiativeToProject

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `createdAt` | The time at which the entity was created. |
| `id` | The unique identifier of the entity. |
| `initiative` | The initiative that the project is associated with. |
| `project` | The project that the initiative is associated with. |
| `sortOrder` | The sort order of the project within its parent initiative. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Remove, Update.

API path: `initiativeToProjectCreate`

#### InitiativeUpdate

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `body` | The update content in markdown format. |
| `bodyData` | [Internal] The content of the update as a Prosemirror document. |
| `commentCount` | Number of comments associated with the initiative update. |
| `createdAt` | The time at which the entity was created. |
| `diff` | The diff between the current update and the previous one. |
| `diffMarkdown` | The diff between the current update and the previous one, formatted as markdown. |
| `editedAt` | The time the update was edited. |
| `health` | The health of the initiative at the time this update was posted. |
| `id` | The unique identifier of the entity. |
| `infoSnapshot` | [Internal] A snapshot of initiative properties at the time the update was posted, including project statuses, sub-initiative health, and target dates. |
| `initiative` | The initiative that this status update was posted to. |
| `isDiffHidden` | Whether the diff between this update and the previous one should be hidden in the UI. |
| `isStale` | Whether the initiative update is stale. |
| `reactionData` | Emoji reaction summary, grouped by emoji type. |
| `slugId` | The update's unique URL slug. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |
| `url` | The URL to the initiative update. |
| `user` | The user who wrote the update. |

Operations: Create, List, Load, Update.

API path: `initiativeUpdateCreate`

#### Integration

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `createdAt` | The time at which the entity was created. |
| `creator` | The user that added the integration. |
| `id` | The unique identifier of the entity. |
| `organization` | The workspace that the integration is associated with. |
| `service` | The integration's type, identifying which external service this integration connects to (e.g., 'slack', 'github', 'jira', 'figma'). |
| `team` | The team that the integration is associated with. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Remove, Update.

API path: `integrationSalesforce`

#### IntegrationTemplate

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `createdAt` | The time at which the entity was created. |
| `foreignEntityId` | The identifier of the foreign entity in the external service that this template is scoped to. |
| `id` | The unique identifier of the entity. |
| `integration` | The integration that the template is associated with. |
| `template` | The template that the integration is associated with. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Remove.

API path: `integrationTemplateCreate`

#### IntegrationsSetting

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `contextViewType` | The type of view to which the integration settings context is associated with. |
| `createdAt` | The time at which the entity was created. |
| `id` | The unique identifier of the entity. |
| `initiative` | Initiative which those settings apply to. |
| `microsoftTeamsProjectUpdateCreated` | Whether to send a Microsoft Teams message when a project update is created. |
| `project` | Project which those settings apply to. |
| `slackInitiativeUpdateCreated` | Whether to send a Slack message when an initiative update is created. |
| `slackIssueAddedToTriage` | Whether to send a Slack message when a new issue is added to triage. |
| `slackIssueAddedToView` | Whether to send a Slack message when an issue is added to the custom view. |
| `slackIssueNewComment` | Whether to send a Slack message when a comment is created on any of the project or team's issues. |
| `slackIssueSlaBreached` | Whether to send a Slack message when an SLA is breached. |
| `slackIssueSlaHighRisk` | Whether to send a Slack message when an SLA is at high risk. |
| `slackIssueStatusChangedAll` | Whether to send a Slack message when any of the project or team's issues has a change in status. |
| `slackIssueStatusChangedDone` | Whether to send a Slack message when any of the project or team's issues change to completed or canceled. |
| `slackProjectUpdateCreated` | Whether to send a Slack message when a project update is created. |
| `slackProjectUpdateCreatedToTeam` | Whether to send a new project update to team Slack channels. |
| `slackProjectUpdateCreatedToWorkspace` | Whether to send a new project update to workspace Slack channel. |
| `team` | Team which those settings apply to. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |

Operations: Create, Load, Update.

API path: `integrationsSettingsCreate`

#### Issue

| Field | Description |
| --- | --- |
| `activitySummary` | [Internal] The activity summary information for this issue. |
| `addedToCycleAt` | The time at which the issue was added to a cycle. |
| `addedToProjectAt` | The time at which the issue was added to a project. |
| `addedToTeamAt` | The time at which the issue was added to a team. |
| `archivedAt` | The time at which the entity was archived. |
| `asksExternalUserRequester` | The external user who requested creation of the Asks issue on behalf of the creator. |
| `asksRequester` | The internal user who requested creation of the Asks issue on behalf of the creator. |
| `assignee` | The user to whom the issue is assigned. |
| `autoArchivedAt` | The time at which the issue was automatically archived by the auto pruning process. |
| `autoClosedAt` | The time at which the issue was automatically closed by the auto pruning process. |
| `botActor` | The bot that created the issue, if applicable. |
| `branchName` | Suggested branch name for the issue. |
| `canceledAt` | The time at which the issue was moved into canceled state. |
| `completedAt` | The time at which the issue was moved into completed state. |
| `createdAt` | The time at which the entity was created. |
| `creator` | The user who created the issue. |
| `customerTicketCount` | Returns the number of Attachment resources which are created by customer support ticketing systems (e.g. |
| `cycle` | The cycle that the issue is associated with. |
| `delegate` | The agent user that is delegated to work on this issue. |
| `description` | The issue's description in markdown format. |
| `descriptionState` | [Internal] The issue's description content as YJS state. |
| `documentContent` | [ALPHA] The document content representing this issue description. |
| `dueDate` | The date at which the issue is due. |
| `estimate` | The estimate of the complexity of the issue. |
| `externalUserCreator` | The external user who created the issue. |
| `favorite` | The users favorite associated with this issue. |
| `id` | The unique identifier of the entity. |
| `identifier` | Issue's human readable identifier (e.g. |
| `inheritsSharedAccess` | Whether this issue inherits shared access from its parent issue. |
| `integrationSourceType` | Integration type that created this issue, if applicable. |
| `labelIds` | Identifiers of the labels associated with this issue. |
| `lastAppliedTemplate` | The last template that was applied to this issue. |
| `number` | The issue's unique number, scoped to the issue's team. |
| `parent` | The parent of the issue. |
| `previousIdentifiers` | Previous identifiers of the issue if it has been moved between teams. |
| `priority` | The priority of the issue. |
| `priorityLabel` | Label for the priority. |
| `prioritySortOrder` | The order of the item in relation to other items in the workspace, when ordered by priority. |
| `project` | The project that the issue is associated with. |
| `projectMilestone` | The project milestone that the issue is associated with. |
| `reactionData` | Emoji reaction summary for the issue, grouped by emoji type. |
| `recurringIssueTemplate` | The recurring issue template that created this issue. |
| `slaBreachesAt` | The time at which the issue's SLA will breach. |
| `slaHighRiskAt` | The time at which the issue's SLA will enter high risk state. |
| `slaMediumRiskAt` | The time at which the issue's SLA will enter medium risk state. |
| `slaStartedAt` | The time at which the issue's SLA began. |
| `slaType` | The type of SLA set on the issue. |
| `snoozedBy` | The user who snoozed the issue. |
| `snoozedUntilAt` | The time until an issue will be snoozed in Triage view. |
| `sortOrder` | The order of the item in relation to other items in the organization. |
| `sourceComment` | The comment that this issue was created from, when an issue is created from an existing comment. |
| `startedAt` | The time at which the issue was moved into started state. |
| `startedTriageAt` | The time at which the issue entered triage. |
| `state` | The workflow state (issue status) that the issue is currently in. |
| `subIssueSortOrder` | The order of the item in the sub-issue list. |
| `suggestionsGeneratedAt` | [Internal] The time at which the most recent suggestions for this issue were generated. |
| `summary` | [Internal] AI-generated activity summary for this issue. |
| `team` | The team that the issue belongs to. |
| `title` | The issue's title. |
| `trashed` | A flag that indicates whether the issue is in the trash bin. |
| `triagedAt` | The time at which the issue left triage. |
| `trusted` | [Internal] Whether this issue has been explicitly marked as trusted. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |
| `url` | Issue URL. |

Operations: Create, List, Load, Remove, Update.

API path: `issueCreate`

#### IssueImport

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `createdAt` | The time at which the entity was created. |
| `creatorId` | Identifier of the user who started the import job. |
| `csvFileUrl` | File URL for the uploaded CSV for the import, if there is one. |
| `displayName` | The display name of the import service. |
| `error` | User readable error message, if one has occurred during the import. |
| `errorMetadata` | Error code and metadata, if one has occurred during the import. |
| `id` | The unique identifier of the entity. |
| `mapping` | The data mapping configuration for the import job. |
| `progress` | Current step progress as a percentage (0-100). |
| `service` | The external service from which data is being imported (e.g., jira, asana, github, shortcut, linear). |
| `serviceMetadata` | Metadata related to import service. |
| `status` | The current status of the import job, indicating its position in the import lifecycle (e.g., not started, in progress, complete, error). |
| `teamName` | The name of the new team to be created for the import, when the import is configured to create a new team rather than importing into an existing one. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |

Operations: Create, Remove, Update.

API path: `issueImportCreateJira`

#### IssueLabel

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `color` | The label's color as a HEX string (e.g., '#EB5757'). |
| `createdAt` | The time at which the entity was created. |
| `creator` | The user who created the label. |
| `description` | The label's description. |
| `groupType` | The selection mode of this label group. |
| `id` | The unique identifier of the entity. |
| `inheritedFrom` | The original workspace or parent-team label that this label was inherited from. |
| `isGroup` | Whether the label is a group. |
| `lastAppliedAt` | The date when the label was last applied to an issue, project, or initiative. |
| `name` | The label's name. |
| `parent` | The parent label. |
| `retiredAt` | [Internal] When the label was retired. |
| `retiredBy` | The user who retired the label. |
| `team` | The team that the label is scoped to. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Remove, Update.

API path: `issueLabelCreate`

#### IssuePriorityValue

| Field | Description |
| --- | --- |
| `label` | Priority's label. |
| `priority` | Priority's number value. |

Operations: List.

API path: `issuePriorityValues`

#### IssueRelation

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `createdAt` | The time at which the entity was created. |
| `id` | The unique identifier of the entity. |
| `issue` | The source issue whose relationship is being described. |
| `relatedIssue` | The target issue that the source issue is related to. |
| `type` | The type of relationship between the source issue and the related issue. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Remove, Update.

API path: `issueRelationCreate`

#### IssueSearchResult

| Field | Description |
| --- | --- |
| `activitySummary` | [Internal] The activity summary information for this issue. |
| `addedToCycleAt` | The time at which the issue was added to a cycle. |
| `addedToProjectAt` | The time at which the issue was added to a project. |
| `addedToTeamAt` | The time at which the issue was added to a team. |
| `archivedAt` | The time at which the entity was archived. |
| `asksExternalUserRequester` | The external user who requested creation of the Asks issue on behalf of the creator. |
| `asksRequester` | The internal user who requested creation of the Asks issue on behalf of the creator. |
| `assignee` | The user to whom the issue is assigned. |
| `autoArchivedAt` | The time at which the issue was automatically archived by the auto pruning process. |
| `autoClosedAt` | The time at which the issue was automatically closed by the auto pruning process. |
| `botActor` | The bot that created the issue, if applicable. |
| `branchName` | Suggested branch name for the issue. |
| `canceledAt` | The time at which the issue was moved into canceled state. |
| `completedAt` | The time at which the issue was moved into completed state. |
| `createdAt` | The time at which the entity was created. |
| `creator` | The user who created the issue. |
| `customerTicketCount` | Returns the number of Attachment resources which are created by customer support ticketing systems (e.g. |
| `cycle` | The cycle that the issue is associated with. |
| `delegate` | The agent user that is delegated to work on this issue. |
| `description` | The issue's description in markdown format. |
| `descriptionState` | [Internal] The issue's description content as YJS state. |
| `documentContent` | [ALPHA] The document content representing this issue description. |
| `dueDate` | The date at which the issue is due. |
| `estimate` | The estimate of the complexity of the issue. |
| `externalUserCreator` | The external user who created the issue. |
| `favorite` | The users favorite associated with this issue. |
| `id` | The unique identifier of the entity. |
| `identifier` | Issue's human readable identifier (e.g. |
| `inheritsSharedAccess` | Whether this issue inherits shared access from its parent issue. |
| `integrationSourceType` | Integration type that created this issue, if applicable. |
| `labelIds` | Identifiers of the labels associated with this issue. |
| `lastAppliedTemplate` | The last template that was applied to this issue. |
| `metadata` | Metadata related to search result. |
| `number` | The issue's unique number, scoped to the issue's team. |
| `parent` | The parent of the issue. |
| `previousIdentifiers` | Previous identifiers of the issue if it has been moved between teams. |
| `priority` | The priority of the issue. |
| `priorityLabel` | Label for the priority. |
| `prioritySortOrder` | The order of the item in relation to other items in the workspace, when ordered by priority. |
| `project` | The project that the issue is associated with. |
| `projectMilestone` | The project milestone that the issue is associated with. |
| `reactionData` | Emoji reaction summary for the issue, grouped by emoji type. |
| `recurringIssueTemplate` | The recurring issue template that created this issue. |
| `slaBreachesAt` | The time at which the issue's SLA will breach. |
| `slaHighRiskAt` | The time at which the issue's SLA will enter high risk state. |
| `slaMediumRiskAt` | The time at which the issue's SLA will enter medium risk state. |
| `slaStartedAt` | The time at which the issue's SLA began. |
| `slaType` | The type of SLA set on the issue. |
| `snoozedBy` | The user who snoozed the issue. |
| `snoozedUntilAt` | The time until an issue will be snoozed in Triage view. |
| `sortOrder` | The order of the item in relation to other items in the organization. |
| `sourceComment` | The comment that this issue was created from, when an issue is created from an existing comment. |
| `startedAt` | The time at which the issue was moved into started state. |
| `startedTriageAt` | The time at which the issue entered triage. |
| `state` | The workflow state (issue status) that the issue is currently in. |
| `subIssueSortOrder` | The order of the item in the sub-issue list. |
| `suggestionsGeneratedAt` | [Internal] The time at which the most recent suggestions for this issue were generated. |
| `summary` | [Internal] AI-generated activity summary for this issue. |
| `team` | The team that the issue belongs to. |
| `title` | The issue's title. |
| `trashed` | A flag that indicates whether the issue is in the trash bin. |
| `triagedAt` | The time at which the issue left triage. |
| `trusted` | [Internal] Whether this issue has been explicitly marked as trusted. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |
| `url` | Issue URL. |

Operations: List.

API path: `searchIssues`

#### IssueToRelease

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `createdAt` | The time at which the entity was created. |
| `id` | The unique identifier of the entity. |
| `issue` | The issue that is linked to the release. |
| `release` | The release that the issue is linked to. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Remove.

API path: `issueToReleaseCreate`

#### LogoutResponse

| Field | Description |
| --- | --- |
| `success` | Whether the operation was successful. |

Operations: Create, Update.

API path: `logout`

#### Notification

| Field | Description |
| --- | --- |
| `actor` | The user that caused the notification. |
| `actorAvatarColor` | [Internal] Notification actor initials if avatar is not available. |
| `actorAvatarUrl` | [Internal] Notification avatar URL. |
| `actorInactive` | [Internal] Whether the notification's user actor is deactivated in the workspace. |
| `actorInitials` | [Internal] Notification actor initials if avatar is not available. |
| `archivedAt` | The time at which the entity was archived. |
| `botActor` | The bot that caused the notification. |
| `category` | The category of the notification. |
| `createdAt` | The time at which the entity was created. |
| `emailedAt` | The time at which an email reminder for this notification was sent to the user. |
| `externalUserActor` | The external user that caused the notification. |
| `groupingKey` | [Internal] Notifications with the same grouping key will be grouped together in the UI. |
| `groupingPriority` | [Internal] Priority of the notification with the same grouping key. |
| `id` | The unique identifier of the entity. |
| `inboxUrl` | [Internal] Inbox URL for the notification. |
| `initiativeUpdateHealth` | [Internal] Initiative update health for new updates. |
| `isLinearActor` | [Internal] If notification actor was Linear. |
| `issueStatusType` | [Internal] Issue's status type for issue notifications. |
| `projectUpdateHealth` | [Internal] Project update health for new updates. |
| `readAt` | The time at which the user marked the notification as read. |
| `snoozedUntilAt` | The time until which a notification is snoozed. |
| `subtitle` | [Internal] Notification subtitle. |
| `title` | [Internal] Notification title. |
| `type` | Notification type. |
| `unsnoozedAt` | The time at which a notification was unsnoozed. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |
| `url` | [Internal] URL to the target of the notification. |
| `user` | The recipient user of this notification. |

Operations: List, Load.

API path: `inboxNotifications`

#### NotificationSubscription

| Field | Description |
| --- | --- |
| `active` | Whether the subscription is active. |
| `archivedAt` | The time at which the entity was archived. |
| `contextViewType` | The type of contextual view (e.g., active issues, backlog) that further scopes a team notification subscription. |
| `createdAt` | The time at which the entity was created. |
| `customView` | The custom view that this notification subscription is scoped to. |
| `customer` | The customer that this notification subscription is scoped to. |
| `cycle` | The cycle that this notification subscription is scoped to. |
| `id` | The unique identifier of the entity. |
| `initiative` | The initiative that this notification subscription is scoped to. |
| `label` | The issue label that this notification subscription is scoped to. |
| `project` | The project that this notification subscription is scoped to. |
| `subscriber` | The user who will receive notifications from this subscription. |
| `team` | The team that this notification subscription is scoped to. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |
| `user` | The user that this notification subscription is scoped to, for user-specific view subscriptions. |
| `userContextViewType` | The type of user-specific view that further scopes a user notification subscription. |

Operations: List, Load.

API path: `notificationSubscriptions`

#### OAuthApplication

| Field | Description |
| --- | --- |
| `clientId` | The client ID used during OAuth authorization flows. |
| `createdAt` | The time at which the OAuth application was created. |
| `description` | User-facing description of the OAuth application. |
| `developer` | Name of the developer or company that built the OAuth application. |
| `developerUrl` | URL of the developer's website, homepage, or documentation. |
| `distribution` | Distribution setting for the OAuth application. |
| `grantTypes` | OAuth grant types supported by this application. |
| `id` | The unique identifier of the OAuth application. |
| `imageUrl` | URL of the OAuth application's icon. |
| `name` | The human-readable name of the OAuth application. |
| `redirectUris` | Allowed redirect URIs for OAuth authorization flows. |
| `updatedAt` | The time at which the OAuth application was last updated. |
| `webhookEnabled` | Whether webhook delivery is enabled for this OAuth application. |
| `webhookResourceTypes` | Resource types the OAuth application's webhooks subscribe to. |
| `webhookUrl` | Webhook URL used for delivering webhook payloads. |

Operations: Create, List, Load, Update.

API path: `oauthApplicationCreate`

#### Organization

| Field | Description |
| --- | --- |
| `agentAutomationEnabled` | [INTERNAL] Whether the workspace has enabled agent automation. |
| `aiAddonEnabled` | [INTERNAL] Whether the workspace has enabled the AI add-on (which at this point only includes triage suggestions). |
| `aiDiscussionSummariesEnabled` | Whether the workspace has enabled AI discussion summaries for issues. |
| `aiProviderConfiguration` | [INTERNAL] Configure per-modality AI host providers and model families. |
| `aiTelemetryEnabled` | [INTERNAL] Whether the workspace has opted in to AI telemetry. |
| `aiThreadSummariesEnabled` | Whether the workspace has enabled resolved thread AI summaries. |
| `allowedFileUploadContentTypes` | Allowed file upload content types |
| `archivedAt` | The time at which the entity was archived. |
| `authSettings` | Authentication settings for the workspace, including allowed auth providers, bypass rules, and organization visibility during signup. |
| `codeIntelligenceEnabled` | [INTERNAL] Whether code intelligence is enabled for the workspace. |
| `codeIntelligenceRepository` | [INTERNAL] GitHub repository in owner/repo format for code intelligence. |
| `codingAgentEnabled` | [INTERNAL] Whether the workspace has enabled Coding Sessions. |
| `codingAgentSettings` | [Internal] Settings for Coding Sessions features. |
| `createdAt` | The time at which the entity was created. |
| `createdIssueCount` | Approximate total number of issues created in the workspace, including archived ones. |
| `customerCount` | The number of active (non-archived) customers tracked in the workspace. |
| `customersConfiguration` | Configuration settings for the Customers feature, including revenue currency and other customer tracking preferences. |
| `customersEnabled` | Whether the Customers feature is enabled and accessible for the workspace based on the current plan. |
| `defaultFeedSummarySchedule` | Default schedule for how often feed summaries are generated. |
| `defaultHomeView` | The default home view for members of the workspace who have not chosen their own default. |
| `defaultHomeViewTargetId` | The id of the specific initiative, project, view, dashboard, or page tab used as the default home view. |
| `deletionRequestedAt` | The time at which deletion of the workspace was requested. |
| `feedEnabled` | Whether the activity feed feature is enabled for the workspace. |
| `fiscalYearStartMonth` | The zero-indexed month at which the fiscal year starts (0 = January, 11 = December). |
| `generatedUpdatesEnabled` | [INTERNAL] Whether the workspace has enabled generated updates. |
| `gitBranchFormat` | The template format for Git branch names created from issues. |
| `gitLinkbackDescriptionsEnabled` | Whether issue descriptions should be included in the Git integration linkback messages posted to pull requests. |
| `gitLinkbackMessagesEnabled` | Whether the Git integration linkback messages should be posted as comments on pull requests in private repositories. |
| `gitPublicLinkbackMessagesEnabled` | Whether the Git integration linkback messages should be posted as comments on pull requests in public repositories. |
| `hipaaComplianceEnabled` | Whether HIPAA compliance is enabled for the workspace. |
| `id` | The unique identifier of the entity. |
| `initiativeUpdateReminderFrequencyInWeeks` | The frequency in weeks at which to prompt for initiative updates. |
| `initiativeUpdateRemindersDay` | The day of the week on which initiative update reminders are sent. |
| `initiativeUpdateRemindersHour` | The hour of the day (0-23) at which initiative update reminders are sent. |
| `linearAgentEnabled` | [Internal] Whether the workspace has enabled Linear Agent. |
| `linearAgentSettings` | [Internal] Settings for Linear Agent features. |
| `logoUrl` | The URL of the workspace's logo image. |
| `name` | The workspace's name. |
| `periodUploadVolume` | Rolling 30-day total file upload volume for the workspace, measured in megabytes. |
| `previousUrlKeys` | Previously used URL keys for the workspace. |
| `projectUpdateReminderFrequencyInWeeks` | The frequency in weeks at which to prompt for project updates. |
| `projectUpdateRemindersDay` | The day of the week on which project update reminders are sent. |
| `projectUpdateRemindersHour` | The hour of the day (0-23) at which project update reminders are sent. |
| `pullRequestIssueMode` | How Linear suggests and links issues for pull requests that have none linked: 'off', 'suggest', or 'autoOnMerge'. |
| `pullRequestTourEnabled` | Whether the workspace generates AI Pull Request guides for new pull requests. |
| `releaseChannel` | The feature release channel the workspace belongs to, which controls access to pre-release features. |
| `releasesEnabled` | Whether release management is enabled for the workspace. |
| `restrictAgentInvocationToMembers` | [Internal] Whether agent invocation is restricted to full workspace members. |
| `roadmapEnabled` | Whether the roadmap feature is enabled for the workspace. |
| `samlEnabled` | Whether SAML-based single sign-on authentication is enabled for the workspace. |
| `samlSettings` | [INTERNAL] SAML settings. |
| `scimEnabled` | Whether SCIM provisioning is enabled for the workspace, allowing automated user and team management from an identity provider. |
| `scimSettings` | [INTERNAL] SCIM settings. |
| `securitySettings` | Security settings for the workspace, including role-based restrictions for invitations, team creation, label management, and other sensitive operations. |
| `slackAutoCreateProjectChannel` | [Internal] Whether to automatically create a Slack channel when a new project is created. |
| `slackProjectChannelIntegration` | The Slack integration used for auto-creating project channels. |
| `slackProjectChannelPrefix` | The prefix used for auto-created Slack project channels. |
| `slackProjectChannelsEnabled` | [Internal] Whether the Slack project channels feature is enabled for the workspace. |
| `subscription` | The workspace's subscription to a paid plan. |
| `themeSettings` | [ALPHA] Theme settings for the workspace. |
| `trialEndsAt` | The time at which the current plan trial will end. |
| `trialStartsAt` | The time at which the current plan trial started. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |
| `urlKey` | The workspace's unique URL key, used in URLs to identify the workspace. |
| `userCount` | The number of active (non-deactivated) users in the workspace. |
| `workingDays` | [Internal] The list of working days. |

Operations: Load, Remove, Update.

API path: `organization`

#### OrganizationDomain

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `authType` | The authentication type this domain is used for. |
| `claimed` | Whether the domain was claimed by the workspace through DNS TXT record verification. |
| `createdAt` | The time at which the entity was created. |
| `creator` | The user who added the domain. |
| `disableOrganizationCreation` | Whether users with email addresses from this domain are prevented from creating new workspaces. |
| `id` | The unique identifier of the entity. |
| `identityProvider` | The identity provider the domain belongs to. |
| `name` | The domain name (e.g., 'example.com'). |
| `updatedAt` | The last time at which the entity was meaningfully updated. |
| `verificationEmail` | The email address used to verify this domain. |
| `verified` | Whether the domain has been verified via email verification. |

Operations: Create, Remove, Update.

API path: `organizationDomainCreate`

#### OrganizationInvite

| Field | Description |
| --- | --- |
| `acceptedAt` | The time at which the invite was accepted by the invitee. |
| `archivedAt` | The time at which the entity was archived. |
| `createdAt` | The time at which the entity was created. |
| `email` | The email address of the person being invited to the workspace. |
| `expiresAt` | The time at which the invite will expire and can no longer be accepted. |
| `external` | Whether the invite was sent to an email address outside the workspace's verified domains. |
| `id` | The unique identifier of the entity. |
| `invitee` | The user who has accepted the invite. |
| `inviter` | The user who created the invitation. |
| `metadata` | Extra metadata associated with the invite. |
| `organization` | The workspace that the invite is associated with. |
| `role` | The workspace role (admin, member, guest, or owner) that the invitee will receive upon accepting the invite. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Remove, Update.

API path: `organizationInviteCreate`

#### OrganizationMeta

| Field | Description |
| --- | --- |
| `allowedAuthServices` | Allowed authentication providers, empty array means all are allowed. |
| `region` | The region the workspace is hosted in. |

Operations: Load.

API path: `organizationMeta`

#### PasskeyLoginStartResponse

| Field | Description |
| --- | --- |
| `options` | The passkey authentication options to pass to the WebAuthn API. |
| `success` | Whether the operation was successful. |

Operations: Update.

API path: `passkeyLoginStart`

#### Project

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `autoArchivedAt` | The time at which the project was automatically archived by the auto-pruning process. |
| `canceledAt` | The time at which the project was moved into a canceled status. |
| `color` | The project's color as a HEX string. |
| `completedAt` | The time at which the project was moved into a completed status. |
| `completedIssueCountHistory` | The number of completed issues in the project at the end of each week since project creation. |
| `completedScopeHistory` | The number of completed estimation points at the end of each week since project creation. |
| `content` | The project's content in markdown format. |
| `contentState` | [Internal] The project's content as YJS state. |
| `convertedFromIssue` | The issue that was converted into this project. |
| `createdAt` | The time at which the entity was created. |
| `creator` | The user who created the project. |
| `currentProgress` | [INTERNAL] The current progress of the project, broken down by issue status category. |
| `description` | The short description of the project. |
| `documentContent` | The content of the project description. |
| `favorite` | The user's favorite associated with this project. |
| `frequencyResolution` | The resolution of the reminder frequency. |
| `health` | The overall health of the project, derived from the most recent project update. |
| `healthUpdatedAt` | The time at which the project health was last updated, typically when a new project update is posted. |
| `icon` | The icon of the project. |
| `id` | The unique identifier of the entity. |
| `identifier` | [Internal] The human-readable identifier of the project. |
| `inProgressScopeHistory` | The number of in-progress estimation points at the end of each week since project creation. |
| `integrationsSettings` | Settings for all integrations associated with that project. |
| `issueCountHistory` | The total number of issues in the project at the end of each week since project creation. |
| `labelIds` | The IDs of the project labels associated with this project. |
| `lastAppliedTemplate` | The last template that was applied to this project. |
| `lastUpdate` | The most recent status update posted for this project. |
| `lead` | The user who leads the project. |
| `leadTeam` | [Internal] The team that leads the project. |
| `microsoftTeamsChannelId` | The ID of the Microsoft Teams channel connected to the project, if any. |
| `name` | The name of the project. |
| `previousIdentifiers` | [Internal] Identifiers (default and custom) that this project has previously held. |
| `priority` | The priority of the project. |
| `priorityLabel` | The priority of the project as a label. |
| `prioritySortOrder` | The sort order for the project within the workspace when ordered by priority. |
| `progress` | The overall progress of the project. |
| `progressHistory` | [INTERNAL] The progress history of the project, tracking issue completion over time. |
| `projectUpdateRemindersPausedUntilAt` | The time until which project update reminders are paused. |
| `resourceCount` | The number of resources associated with the project, including documents, external links, and attachments. |
| `scope` | The overall scope (total estimate points) of the project. |
| `scopeHistory` | The total scope (estimation points) of the project at the end of each week since project creation. |
| `slackChannelId` | The ID of the Slack channel connected to the project, if any. |
| `slugId` | The project's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | The sort order for the project within the workspace. |
| `startDate` | The estimated start date of the project. |
| `startDateResolution` | The resolution of the project's start date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `startedAt` | The time at which the project was moved into a started status. |
| `status` | The current project status. |
| `targetDate` | The estimated completion date of the project. |
| `targetDateResolution` | The resolution of the project's estimated completion date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `trashed` | A flag that indicates whether the project is in the trash bin. |
| `updateReminderFrequency` | The frequency at which to prompt for updates. |
| `updateReminderFrequencyInWeeks` | The n-weekly frequency at which to prompt for updates. |
| `updateRemindersDay` | The day at which to prompt for updates. |
| `updateRemindersHour` | The hour at which to prompt for updates. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |
| `url` | Project URL. |

Operations: Create, List, Load, Remove, Update.

API path: `projectCreate`

#### ProjectLabel

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `color` | The label's color as a HEX string (e.g., '#EB5757'). |
| `createdAt` | The time at which the entity was created. |
| `creator` | The user who created the label. |
| `description` | The label's description. |
| `id` | The unique identifier of the entity. |
| `inheritedFrom` | [Internal] The original workspace or parent-team label that this label was inherited from. |
| `isGroup` | Whether the label is a group. |
| `lastAppliedAt` | The date when the label was last applied to an issue, project, or initiative. |
| `name` | The label's name. |
| `organization` | The workspace that the project label belongs to. |
| `parent` | The parent label group. |
| `retiredAt` | [Internal] When the label was retired. |
| `retiredBy` | The user who retired the label. |
| `team` | [Internal] The team that the label is scoped to. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Remove, Update.

API path: `projectLabelCreate`

#### ProjectMilestone

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `createdAt` | The time at which the entity was created. |
| `currentProgress` | [Internal] The current progress of the milestone, broken down by issue status category. |
| `description` | The project milestone's description in markdown format. |
| `descriptionState` | [Internal] The project milestone's description as YJS state. |
| `documentContent` | The rich-text content of the milestone description. |
| `id` | The unique identifier of the entity. |
| `name` | The name of the project milestone. |
| `progress` | The progress % of the project milestone. |
| `progressHistory` | [Internal] The progress history of the milestone, tracking issue completion over time. |
| `project` | The project that this milestone belongs to. |
| `sortOrder` | The order of the milestone in relation to other milestones within a project. |
| `status` | The status of the project milestone. |
| `targetDate` | The planned completion date of the milestone. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Remove, Update.

API path: `projectMilestoneCreate`

#### ProjectMilestoneMoveProjectTeam

| Field | Description |
| --- | --- |
| `id` |  |
| `projectId` | The project id |
| `teamIds` | The team ids for the project |

Operations: Update.

API path: `projectMilestoneMove`

#### ProjectRelation

| Field | Description |
| --- | --- |
| `anchorType` | The type of anchor on the source project end of the relation, indicating whether it is anchored to the project itself or a specific milestone. |
| `archivedAt` | The time at which the entity was archived. |
| `createdAt` | The time at which the entity was created. |
| `id` | The unique identifier of the entity. |
| `project` | The source project in the dependency relation. |
| `projectMilestone` | The specific milestone within the source project that the relation is anchored to. |
| `relatedAnchorType` | The type of anchor on the target project end of the relation, indicating whether it is anchored to the project itself or a specific milestone. |
| `relatedProject` | The target project in the dependency relation. |
| `relatedProjectMilestone` | The specific milestone within the target project that the relation is anchored to. |
| `type` | The type of dependency relationship from the project to the related project (e.g., blocks). |
| `updatedAt` | The last time at which the entity was meaningfully updated. |
| `user` | The user who last created or modified the relation. |

Operations: Create, List, Load, Remove, Update.

API path: `projectRelationCreate`

#### ProjectSearchResult

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `autoArchivedAt` | The time at which the project was automatically archived by the auto-pruning process. |
| `canceledAt` | The time at which the project was moved into a canceled status. |
| `color` | The project's color as a HEX string. |
| `completedAt` | The time at which the project was moved into a completed status. |
| `completedIssueCountHistory` | The number of completed issues in the project at the end of each week since project creation. |
| `completedScopeHistory` | The number of completed estimation points at the end of each week since project creation. |
| `content` | The project's content in markdown format. |
| `contentState` | [Internal] The project's content as YJS state. |
| `convertedFromIssue` | The issue that was converted into this project. |
| `createdAt` | The time at which the entity was created. |
| `creator` | The user who created the project. |
| `currentProgress` | [INTERNAL] The current progress of the project, broken down by issue status category. |
| `description` | The short description of the project. |
| `documentContent` | The content of the project description. |
| `favorite` | The user's favorite associated with this project. |
| `frequencyResolution` | The resolution of the reminder frequency. |
| `health` | The overall health of the project, derived from the most recent project update. |
| `healthUpdatedAt` | The time at which the project health was last updated, typically when a new project update is posted. |
| `icon` | The icon of the project. |
| `id` | The unique identifier of the entity. |
| `identifier` | [Internal] The human-readable identifier of the project. |
| `inProgressScopeHistory` | The number of in-progress estimation points at the end of each week since project creation. |
| `integrationsSettings` | Settings for all integrations associated with that project. |
| `issueCountHistory` | The total number of issues in the project at the end of each week since project creation. |
| `labelIds` | The IDs of the project labels associated with this project. |
| `lastAppliedTemplate` | The last template that was applied to this project. |
| `lastUpdate` | The most recent status update posted for this project. |
| `lead` | The user who leads the project. |
| `leadTeam` | [Internal] The team that leads the project. |
| `metadata` | Metadata related to search result. |
| `microsoftTeamsChannelId` | The ID of the Microsoft Teams channel connected to the project, if any. |
| `name` | The name of the project. |
| `previousIdentifiers` | [Internal] Identifiers (default and custom) that this project has previously held. |
| `priority` | The priority of the project. |
| `priorityLabel` | The priority of the project as a label. |
| `prioritySortOrder` | The sort order for the project within the workspace when ordered by priority. |
| `progress` | The overall progress of the project. |
| `progressHistory` | [INTERNAL] The progress history of the project, tracking issue completion over time. |
| `projectUpdateRemindersPausedUntilAt` | The time until which project update reminders are paused. |
| `resourceCount` | The number of resources associated with the project, including documents, external links, and attachments. |
| `scope` | The overall scope (total estimate points) of the project. |
| `scopeHistory` | The total scope (estimation points) of the project at the end of each week since project creation. |
| `slackChannelId` | The ID of the Slack channel connected to the project, if any. |
| `slugId` | The project's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | The sort order for the project within the workspace. |
| `startDate` | The estimated start date of the project. |
| `startDateResolution` | The resolution of the project's start date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `startedAt` | The time at which the project was moved into a started status. |
| `status` | The current project status. |
| `targetDate` | The estimated completion date of the project. |
| `targetDateResolution` | The resolution of the project's estimated completion date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `trashed` | A flag that indicates whether the project is in the trash bin. |
| `updateReminderFrequency` | The frequency at which to prompt for updates. |
| `updateReminderFrequencyInWeeks` | The n-weekly frequency at which to prompt for updates. |
| `updateRemindersDay` | The day at which to prompt for updates. |
| `updateRemindersHour` | The hour at which to prompt for updates. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |
| `url` | Project URL. |

Operations: List.

API path: `searchProjects`

#### ProjectStatus

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `color` | The color of the status as a HEX string, used for display in the UI. |
| `createdAt` | The time at which the entity was created. |
| `description` | Description of the status. |
| `id` | The unique identifier of the entity. |
| `indefinite` | Whether a project can remain in this status indefinitely. |
| `inheritedFrom` | [Internal] The original workspace or parent-team status that this status was inherited from. |
| `name` | The name of the status. |
| `position` | The position of the status within its type group in the workspace's project flow. |
| `team` | [Internal] The team that the status is scoped to. |
| `type` | The category type of the project status (e.g., backlog, planned, started, paused, completed, canceled). |
| `updatedAt` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Update.

API path: `projectStatusCreate`

#### ProjectUpdate

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `body` | The update content in markdown format. |
| `bodyData` | [Internal] The content of the update as a Prosemirror document. |
| `commentCount` | Number of comments associated with the project update. |
| `createdAt` | The time at which the entity was created. |
| `diff` | The diff between the current update and the previous one. |
| `diffMarkdown` | The diff between the current update and the previous one, formatted as markdown. |
| `editedAt` | The time the update was edited. |
| `health` | The health of the project at the time this update was posted. |
| `id` | The unique identifier of the entity. |
| `infoSnapshot` | [Internal] A snapshot of project properties at the time the update was posted, including team, milestone, and issue statistics. |
| `isDiffHidden` | Whether the diff between this update and the previous one should be hidden in the UI. |
| `isStale` | Whether the project update is stale. |
| `project` | The project that this status update was posted to. |
| `reactionData` | Emoji reaction summary, grouped by emoji type. |
| `shortSummary` | A short AI-generated summary of the project update. |
| `slugId` | The update's unique URL slug. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |
| `url` | The URL to the project update. |
| `user` | The user who wrote the update. |

Operations: Create, List, Load, Remove, Update.

API path: `projectUpdateCreate`

#### PushSubscription

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `createdAt` | The time at which the entity was created. |
| `id` | The unique identifier of the entity. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |

Operations: Create, Remove.

API path: `pushSubscriptionCreate`

#### Reaction

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `comment` | The comment that the reaction is associated with. |
| `createdAt` | The time at which the entity was created. |
| `emoji` | The name of the emoji used for this reaction. |
| `externalUser` | The external user that created the reaction through an integration. |
| `id` | The unique identifier of the entity. |
| `initiativeUpdate` | The initiative update that the reaction is associated with. |
| `issue` | The issue that the reaction is associated with. |
| `post` | The post that the reaction is associated with. |
| `projectUpdate` | The project update that the reaction is associated with. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |
| `user` | The workspace user that created the reaction. |

Operations: Create, Remove.

API path: `reactionCreate`

#### Release

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `autoArchivedAt` | The time at which the release was automatically archived by the auto pruning process. |
| `canceledAt` | The time at which the release was canceled. |
| `commitSha` | The Git commit SHA associated with this release. |
| `completedAt` | The time at which the release was completed. |
| `createdAt` | The time at which the entity was created. |
| `creator` | The user who created the release. |
| `currentProgress` | The current progress summary for the release, including counts of issues by workflow state type (e.g., completed, in progress, unstarted). |
| `description` | The description of the release in plain text or markdown. |
| `id` | The unique identifier of the entity. |
| `issueCount` | Number of issues associated with the release. |
| `name` | The name of the release. |
| `pipeline` | The release pipeline that this release belongs to. |
| `progressHistory` | The historical progress snapshots for the release, tracking how issue completion has evolved over time. |
| `releaseNote` | [Internal] The primary release note covering this release. |
| `slugId` | The release's unique URL slug, used to construct human-readable URLs for the release. |
| `stage` | The current stage of the release within its pipeline (e.g., Planned, In Progress, Completed, Canceled). |
| `startDate` | The estimated start date of the release. |
| `startedAt` | The time at which the release first entered a started stage. |
| `targetDate` | The estimated completion date of the release. |
| `trashed` | A flag that indicates whether the release is in the trash bin. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |
| `url` | The URL to the release page in the Linear app. |
| `version` | The version identifier for this release (e.g., 'v1.2.3' or a short commit hash). |

Operations: Create, List, Load, Remove, Update.

API path: `releaseComplete`

#### ReleaseNote

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `createdAt` | The time at which the entity was created. |
| `documentContent` | Document content backing the release note body. |
| `firstRelease` | The earliest release covered by this note. |
| `generationStatus` | Generation status when these release notes are being auto-generated: `pending` while the LLM call is running, `completed` once it lands. |
| `id` | The unique identifier of the entity. |
| `lastRelease` | The most recent release covered by this note. |
| `pipeline` | The release pipeline that this note belongs to. |
| `releaseCount` | The number of releases covered by this note. |
| `slugId` | The release note's unique URL slug, used to construct human-readable URLs for the note. |
| `title` | User-supplied title for the release note. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |
| `url` | The URL to the release note page in the Linear app. |

Operations: Create, List, Load, Remove, Update.

API path: `releaseNoteCreate`

#### ReleasePipeline

| Field | Description |
| --- | --- |
| `approximateReleaseCount` | The approximate number of non-archived releases in this pipeline. |
| `archivedAt` | The time at which the entity was archived. |
| `autoGenerateReleaseNotesOnCompletion` | Whether to automatically generate a release note when a release is completed. |
| `createdAt` | The time at which the entity was created. |
| `id` | The unique identifier of the entity. |
| `includePathPatterns` | Glob patterns to filter commits by file path. |
| `isProduction` | Whether this pipeline targets a production environment. |
| `latestReleaseNote` | The release note in this pipeline whose covered range ends with the most recent release. |
| `name` | The name of the pipeline. |
| `releaseNoteTemplate` | The document template used to define the release notes format for this pipeline. |
| `rolloverIssuesOnCompletion` | Whether completing a scheduled release moves its open issues to the next release. |
| `slugId` | The pipeline's unique slug identifier, used in URLs and for lookup by human-readable identifier instead of UUID. |
| `trashed` | A flag that indicates whether the pipeline is in the trash bin. |
| `type` | The type of the pipeline, which determines how releases are created and managed. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |
| `url` | The URL to the release pipeline's releases list in the Linear app. |

Operations: Create, List, Load, Remove, Update.

API path: `releasePipelineCreate`

#### ReleaseStage

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `color` | The display color of the stage as a HEX string (e.g., '#0f783c'), used for visual representation in the UI. |
| `createdAt` | The time at which the entity was created. |
| `frozen` | Whether this stage is frozen. |
| `id` | The unique identifier of the entity. |
| `name` | The name of the stage. |
| `pipeline` | The release pipeline that this stage belongs to. |
| `position` | The position of the stage within its pipeline, used for ordering stages in the UI. |
| `type` | The lifecycle type of the stage (planned, started, completed, or canceled). |
| `updatedAt` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Update.

API path: `releaseStageCreate`

#### Roadmap

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `color` | The roadmap's color. |
| `createdAt` | The time at which the entity was created. |
| `creator` | The user who created the roadmap. |
| `description` | The description of the roadmap. |
| `id` | The unique identifier of the entity. |
| `name` | The name of the roadmap. |
| `organization` | The workspace of the roadmap. |
| `owner` | The user who owns the roadmap. |
| `slugId` | The roadmap's unique URL slug. |
| `sortOrder` | The sort order of the roadmap within the workspace. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |
| `url` | The canonical url for the roadmap. |

Operations: Create, List, Load, Remove, Update.

API path: `roadmapCreate`

#### RoadmapToProject

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `createdAt` | The time at which the entity was created. |
| `id` | The unique identifier of the entity. |
| `project` | The project that the roadmap is associated with. |
| `roadmap` | The roadmap that the project is associated with. |
| `sortOrder` | The sort order of the project within the roadmap. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Remove, Update.

API path: `roadmapToProjectCreate`

#### SlaConfiguration

| Field | Description |
| --- | --- |
| `conditions` | The workflow conditions that determine when this SLA rule applies. |
| `id` | The identifier of the SLA rule. |
| `name` | The name of the SLA rule. |
| `removesSla` | Whether the rule removes an SLA instead of setting one. |
| `sla` | The SLA value configured by the rule, expressed in milliseconds or business days depending on the day-count type. |
| `slaType` | The SLA type used when the rule sets an SLA. |
| `startMode` | When SLA timing begins. |

Operations: List.

API path: `slaConfigurations`

#### SsoUrlFromEmailResponse

| Field | Description |
| --- | --- |
| `samlSsoUrl` | SAML SSO sign-in URL. |
| `success` | Whether the operation was successful. |

Operations: Load.

API path: `ssoUrlFromEmail`

#### Team

| Field | Description |
| --- | --- |
| `activeCycle` | Team's currently active cycle. |
| `aiDiscussionSummariesEnabled` | Whether to enable AI discussion summaries for issues in this team. |
| `aiThreadSummariesEnabled` | Whether to enable resolved thread AI summaries. |
| `allMembersCanJoin` | Whether all members in the workspace can join the team. |
| `archivedAt` | The time at which the entity was archived. |
| `autoArchivePeriod` | Period after which automatically closed, completed, and duplicate issues are automatically archived in months. |
| `autoCloseChildIssues` | Whether child issues should automatically close when their parent issue is closed |
| `autoCloseParentIssues` | Whether parent issues should automatically close when all child issues are closed |
| `autoClosePeriod` | Period after which issues are automatically closed in months. |
| `autoCloseStateId` | The canceled workflow state which auto closed issues will be set to. |
| `color` | The team's color. |
| `createdAt` | The time at which the entity was created. |
| `currentProgress` | [Internal] The current progress of the team. |
| `cycleCalenderUrl` | Calendar feed URL (iCal) for cycles. |
| `cycleCooldownTime` | The cooldown time after each cycle in weeks. |
| `cycleDuration` | The duration of each cycle in weeks. |
| `cycleIssueAutoAssignCompleted` | Auto assign completed issues to current cycle. |
| `cycleIssueAutoAssignStarted` | Auto assign started issues to current cycle. |
| `cycleLockToActive` | Auto assign issues to current cycle if in active status. |
| `cycleStartDay` | The day of the week that a new cycle starts (0 = Sunday, 1 = Monday, ..., 6 = Saturday). |
| `cyclesEnabled` | Whether the team uses cycles for sprint-style issue management. |
| `defaultIssueEstimate` | What to use as a default estimate for unestimated issues. |
| `defaultIssueState` | The default workflow state into which issues are set when they are opened by team members. |
| `defaultProjectTemplate` | The default template to use for new projects created for the team. |
| `defaultTemplateForMembers` | The default template to use for new issues created by members of the team. |
| `defaultTemplateForNonMembers` | The default template to use for new issues created by non-members of the team. |
| `description` | The team's description. |
| `displayName` | The name of the team including its parent team name if it has one. |
| `groupIssueHistory` | Whether to group recent issue history entries. |
| `icon` | The icon of the team. |
| `id` | The unique identifier of the entity. |
| `inheritIssueEstimation` | Whether the team should inherit its estimation settings from its parent. |
| `inheritProjectStatuses` | [Internal] Whether the team should inherit its project statuses from its parent team, or from the workspace when it has no parent. |
| `inheritSlackAutoCreateProjectChannel` | [Internal] Whether the team should inherit its Slack auto-create project channel setting from its parent. |
| `inheritWorkflowStatuses` | Whether the team should inherit its workflow statuses from its parent. |
| `initiativesEnabled` | Whether team initiatives are enabled and shown in the team's sidebar. |
| `integrationsSettings` | Settings for all integrations associated with that team. |
| `issueCount` | The total number of issues in the team. |
| `issueEstimationAllowZero` | Whether to allow zeros in issues estimates. |
| `issueEstimationExtended` | Whether to add additional points to the estimate scale. |
| `issueEstimationType` | The issue estimation type to use. |
| `joinByDefault` | [Internal] Whether new users should join this team by default. |
| `key` | The team's unique key, used as a prefix in issue identifiers (e.g., 'ENG' in 'ENG-123') and in URLs. |
| `ledInitiativeCount` | The number of initiatives led by this team that would be deleted along with it. |
| `name` | The team's name. |
| `organization` | The workspace that the team belongs to. |
| `parent` | The team's parent team. |
| `progressHistory` | [Internal] The progress history of the team. |
| `requirePriorityToLeaveTriage` | Whether an issue needs to have a priority set before leaving triage. |
| `restrictedBy` | [Internal] For restricted teams, the enclosing private team that forms the visibility boundary. |
| `restrictedById` | [Internal] The identifier of the enclosing private team that forms the visibility boundary for restricted teams. |
| `retiredAt` | The time at which the team was retired. |
| `scimGroupName` | The SCIM group name for the team. |
| `scimManaged` | Whether the team is managed by a SCIM integration. |
| `securitySettings` | Security settings for the team, including role-based restrictions for issue sharing, label management, member management, template management, and agent skills. |
| `setIssueSortOrderOnStateChange` | Where to move issues when changing state. |
| `slackAutoCreateProjectChannel` | [Internal] Whether to automatically create a Slack channel when a new project is created in this team. |
| `timezone` | The timezone of the team. |
| `triageEnabled` | Whether triage mode is enabled for the team. |
| `triageIssueState` | The workflow state into which issues are set when they are opened by non-team members or integrations if triage is enabled. |
| `triageResponsibility` | Team's triage responsibility. |
| `upcomingCycleCount` | How many upcoming cycles to create. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |
| `visibility` | The visibility of the team. |

Operations: Create, List, Load, Remove, Update.

API path: `teamCreate`

#### TeamMembership

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `createdAt` | The time at which the entity was created. |
| `id` | The unique identifier of the entity. |
| `owner` | Whether the user is an owner of the team. |
| `sortOrder` | The sort order of this team in the user's personal team list. |
| `team` | The team that the membership is associated with. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |
| `user` | The user that the membership is associated with. |

Operations: Create, List, Load, Remove, Update.

API path: `teamMembershipCreate`

#### Template

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `color` | The hex color of the template icon. |
| `content` | The template's content in markdown format: the body it pre-fills on the entity it creates. |
| `createdAt` | The time at which the entity was created. |
| `creator` | The user who created the template. |
| `description` | A description of what the template is used for. |
| `hasFormFields` | [Internal] Whether the template has form fields |
| `icon` | The icon of the template, either a decorative icon type or an emoji string. |
| `id` | The unique identifier of the entity. |
| `inheritedFrom` | The parent team template this template was inherited from. |
| `lastAppliedAt` | The date when the template was last applied to create or update an entity. |
| `lastUpdatedBy` | The user who last updated the template. |
| `name` | The name of the template. |
| `organization` | The workspace that owns this template. |
| `pipeline` | The release pipeline this template is bound to. |
| `sortOrder` | The sort order of the template within the templates list. |
| `team` | The team that the template is associated with. |
| `templateData` | The template data as a JSON-encoded string containing the pre-filled attributes for the entity type (e.g., issue fields, project configuration, or document content). |
| `type` | The entity type this template is for, such as 'issue', 'project', or 'document'. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Remove, Update.

API path: `templateCreate`

#### TimeSchedule

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `createdAt` | The time at which the entity was created. |
| `externalId` | The identifier of the external schedule. |
| `externalUrl` | The URL to the external schedule. |
| `id` | The unique identifier of the entity. |
| `integration` | The identifier of the Linear integration populating the schedule. |
| `name` | The name of the schedule. |
| `organization` | The workspace of the schedule. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Remove, Update.

API path: `timeScheduleCreate`

#### TriageResponsibility

| Field | Description |
| --- | --- |
| `action` | The action to take when an issue is added to triage. |
| `archivedAt` | The time at which the entity was archived. |
| `createdAt` | The time at which the entity was created. |
| `currentUser` | The user currently responsible for triage. |
| `id` | The unique identifier of the entity. |
| `team` | The team to which the triage responsibility belongs to. |
| `timeSchedule` | The time schedule used for scheduling. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Remove, Update.

API path: `triageResponsibilityCreate`

#### UploadFile

| Field | Description |
| --- | --- |
| `assetUrl` | The permanent asset URL where the file will be accessible after upload. |
| `contentType` | The content type. |
| `filename` | The filename. |
| `metaData` | Optional metadata associated with the upload, such as the related issue or comment ID. |
| `size` | The size of the uploaded file. |
| `uploadUrl` | The pre-signed URL to which the file should be uploaded via a PUT request. |

Operations: Create.

API path: `fileUpload`

#### UsageAlert

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `createdAt` | The time at which the entity was created. |
| `id` | The unique identifier of the entity. |
| `metadata` | Type-specific snapshot captured when the alert was triggered, keyed by the alert type — for example the credit balance and threshold for a lowBalance alert. |
| `resolvedAt` | The time when the usage alert was resolved or archived. |
| `type` | The kind of usage alert that was triggered. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |

Operations: List, Load.

API path: `usageAlerts`

#### User

| Field | Description |
| --- | --- |
| `active` | Whether the user account is active or disabled (suspended). |
| `admin` | Whether the user is a workspace administrator. |
| `app` | Whether the user is an app. |
| `archivedAt` | The time at which the entity was archived. |
| `avatarBackgroundColor` | The background color of the avatar for users without set avatar. |
| `avatarUrl` | An URL to the user's avatar image. |
| `calendarHash` | [DEPRECATED] Hash for the user to be used in calendar URLs. |
| `canAccessAnyPublicTeam` | Whether this user can access any public team in the workspace. |
| `createdAt` | The time at which the entity was created. |
| `createdIssueCount` | Number of issues created. |
| `description` | A short description of the user, such as their title or a brief bio. |
| `disableReason` | The reason why the user account is disabled. |
| `displayName` | The user's display (nick) name. |
| `email` | The user's email address. |
| `gitHubUserId` | The user's GitHub user ID. |
| `guest` | Whether the user is a guest in the workspace and limited to accessing a subset of teams. |
| `hasGitHubCodeAccess` | [Internal] Whether this user can access GitHub source code through Linear. |
| `id` | The unique identifier of the entity. |
| `identityProvider` | [INTERNAL] Identity provider the user is managed by. |
| `initials` | The initials of the user. |
| `isAssignable` | Whether the user can be assigned to issues. |
| `isMe` | Whether the user is the currently authenticated user. |
| `isMentionable` | Whether the user is mentionable. |
| `lastSeen` | The last time the user was seen online. |
| `name` | The user's full name. |
| `organization` | The workspace that the user belongs to. |
| `owner` | Whether the user is a workspace owner, which is the highest permission level. |
| `statusEmoji` | The emoji representing the user's current status. |
| `statusLabel` | The text label of the user's current status. |
| `statusUntilAt` | The date and time at which the user's current status should be automatically cleared. |
| `supportsAgentSessions` | Whether this agent user supports agent sessions. |
| `timezone` | The local timezone of the user. |
| `title` | The user's job title. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |
| `url` | User's profile URL. |

Operations: Create, List, Load, Update.

API path: `userDiscordConnect`

#### UserSetting

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `autoAssignToSelf` | Whether to auto-assign newly created issues to the current user by default. |
| `calendarHash` | A unique hash for the user, used to construct secure calendar subscription URLs. |
| `createdAt` | The time at which the entity was created. |
| `feedLastSeenTime` | The user's last seen time for the pulse feed. |
| `feedSummarySchedule` | The user's preferred schedule for receiving feed summary digests. |
| `id` | The unique identifier of the entity. |
| `pullRequestMergeStrategyPreference` | [Internal] The user's preferred merge method for pull requests. |
| `showFullUserNames` | Whether to show full user names instead of display names. |
| `subscribedToChangelog` | Whether this user is subscribed to receive changelog emails about Linear product updates. |
| `subscribedToDPA` | Whether this user is subscribed to receive Data Processing Agreement (DPA) related emails. |
| `subscribedToInviteAccepted` | Whether this user is subscribed to receive email notifications when their workspace invitations are accepted. |
| `subscribedToPrivacyLegalUpdates` | Whether this user is subscribed to receive emails about privacy policy and legal updates. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |
| `user` | The user that these settings belong to. |

Operations: Create, Load, Update.

API path: `notificationCategoryChannelSubscriptionUpdate`

#### ViewPreference

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `createdAt` | The time at which the entity was created. |
| `id` | The unique identifier of the entity. |
| `type` | The type of view preferences: "organization" for workspace-wide defaults or "user" for personal overrides. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |
| `viewType` | The type of view these preferences apply to, such as board, cycle, project, customView, myIssues, etc. |

Operations: Create, Load, Remove, Update.

API path: `viewPreferencesCreate`

#### Webhook

| Field | Description |
| --- | --- |
| `allPublicTeams` | Whether the webhook receives events from all public (non-private) teams in the organization, including teams created after the webhook was set up. |
| `archivedAt` | The time at which the entity was archived. |
| `createdAt` | The time at which the entity was created. |
| `creator` | The user who created the webhook. |
| `enabled` | Whether the webhook is enabled. |
| `id` | The unique identifier of the entity. |
| `label` | A human-readable label for the webhook, used for identification in the UI. |
| `resourceTypes` | The resource types this webhook is subscribed to (e.g., 'Issue', 'Comment', 'Project', 'Cycle'). |
| `secret` | A secret token used to sign webhook payloads with HMAC-SHA256, allowing the recipient to verify that the payload originated from Linear and was not tampered with. |
| `team` | The single team that the webhook is scoped to. |
| `teamIds` | [INTERNAL] An array of team IDs that the webhook is subscribed to. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |
| `url` | The destination URL where webhook payloads will be sent via HTTP POST. |

Operations: Create, List, Load, Remove, Update.

API path: `webhookCreate`

#### WebhookFailureEvent

| Field | Description |
| --- | --- |
| `createdAt` | The time at which the entity was created. |
| `executionId` | A stable identifier for the webhook delivery attempt. |
| `httpStatus` | The HTTP status code returned by the webhook recipient. |
| `id` | The unique identifier of the entity. |
| `responseOrError` | The HTTP response body returned by the recipient, or the error message if the request failed before receiving a response. |
| `url` | The URL that the webhook was trying to push to. |
| `webhook` | The webhook that this failure event is associated with. |

Operations: List.

API path: `failuresForOauthWebhooks`

#### WorkflowState

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `color` | The state's UI color as a HEX string. |
| `createdAt` | The time at which the entity was created. |
| `description` | Description of the state. |
| `id` | The unique identifier of the entity. |
| `inheritedFrom` | The parent team's workflow state that this state was inherited from. |
| `name` | The state's human-readable name (e.g., 'In Progress', 'Done', 'Backlog'). |
| `position` | The position of the state in the team's workflow. |
| `team` | The team that this workflow state belongs to. |
| `type` | The type of the state. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Update.

API path: `workflowStateCreate`



## Entities


### AccessKeyRelease

Create an instance: `access_key_release = client.AccessKeyRelease`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the release was archived. |
| `commitSha` | `String` | The Git commit SHA associated with the release. |
| `completedAt` | `Object` | The time at which the release was completed. |
| `createdAt` | `Object` | The time at which the release was created. |
| `id` | `String` | The unique identifier of the release. |
| `name` | `String` | The name of the release. |
| `url` | `String` | The URL to the release page in the Linear app. |
| `version` | `String` | The version identifier for this release. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AccessKeyRelease record (raises on error).
access_key_release = client.AccessKeyRelease.load({ "id" => "access_key_release_id" })
```

#### Example: List

```ruby
# list returns an Array of AccessKeyRelease records (raises on error).
access_key_releases = client.AccessKeyRelease.list
```

#### Example: Create

```ruby
access_key_release = client.AccessKeyRelease.create({
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "name" => "example_name", # String
  "url" => "example_url", # String
})
```


### AccessKeyReleasePipeline

Create an instance: `access_key_release_pipeline = client.AccessKeyReleasePipeline`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` | The unique identifier of the release pipeline. |
| `includePathPatterns` | `String` | Glob patterns used to filter commits by changed file path. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AccessKeyReleasePipeline record (raises on error).
access_key_release_pipeline = client.AccessKeyReleasePipeline.load({ "id" => "access_key_release_pipeline_id" })
```


### AgentActivity

Create an instance: `agent_activity = client.AgentActivity`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agentSession` | `Hash` | The agent session this activity belongs to. |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `contextualMetadata` | `Object` | [Internal] Metadata about user-provided contextual information for this agent activity. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `ephemeral` | `Boolean` | Whether the activity is ephemeral, and should disappear after the next agent activity. |
| `executionSkippedReason` | `String` | [Internal] The reason this activity was persisted without being sent to the agent runtime. |
| `id` | `String` | The unique identifier of the entity. |
| `queued` | `Boolean` | [Internal] Whether this activity is queued for later processing. |
| `sentAt` | `Object` | [Internal] The time at which the prompt actually entered the conversation. |
| `signal` | `String` | An optional modifier that provides additional instructions on how the activity should be interpreted. |
| `signalMetadata` | `Object` | Metadata about this agent activity's signal. |
| `sourceComment` | `Hash` | The source comment this activity is linked to. |
| `sourceMetadata` | `Object` | Metadata about the external source that created this agent activity. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |
| `user` | `Hash` | The user who created this agent activity. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AgentActivity record (raises on error).
agent_activity = client.AgentActivity.load({ "id" => "agent_activity_id" })
```

#### Example: List

```ruby
# list returns an Array of AgentActivity records (raises on error).
agent_activitys = client.AgentActivity.list
```

#### Example: Create

```ruby
agent_activity = client.AgentActivity.create({
  "createdAt" => "example_createdAt", # Object
  "ephemeral" => true, # Boolean
  "id" => "example_id", # String
  "queued" => true, # Boolean
  "updatedAt" => "example_updatedAt", # Object
})
```


### AgentSession

Create an instance: `agent_session = client.AgentSession`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `appUser` | `Hash` | The agent user that is associated with this agent session. |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `codingHarnessModelLabel` | `String` | [Internal] Compact display label for the coding harness model used by this session, derived from the latest associated sandbox. |
| `comment` | `Hash` | The comment this agent session is associated with. |
| `context` | `Object` | The entity contexts this session is related to, such as issues or projects referenced in direct chat sessions. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `creator` | `Hash` | The human user responsible for the agent session. |
| `dismissedAt` | `Object` | The time a user dismissed this agent session. |
| `dismissedBy` | `Hash` | The user who dismissed the agent session. |
| `endedAt` | `Object` | The time the agent session completed. |
| `id` | `String` | The unique identifier of the entity. |
| `issue` | `Hash` | The issue this agent session is associated with. |
| `modelSelection` | `Object` | [Internal] How Adaptive selected the model route used by this coding session. |
| `plan` | `Object` | A dynamically updated plan describing the agent's execution strategy, including steps to be taken and their current status. |
| `pullRequest` | `Hash` | The pull request this agent session is anchored to, when started from a pull request. |
| `slugId` | `String` | The agent session's unique URL slug. |
| `sourceComment` | `Hash` | The comment that this agent session was spawned from, if from a different thread. |
| `sourceMetadata` | `Object` | Metadata about the external source that created this agent session. |
| `startedAt` | `Object` | The time the agent session transitioned to active status and began work. |
| `status` | `String` | The current status of the agent session, such as pending, active, awaiting input, complete, error, or stale. |
| `summary` | `String` | The session title, generated automatically or set by the owning OAuth application. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |
| `url` | `String` | The URL to the agent session page in the Linear app. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AgentSession record (raises on error).
agent_session = client.AgentSession.load({ "id" => "agent_session_id" })
```

#### Example: List

```ruby
# list returns an Array of AgentSession records (raises on error).
agent_sessions = client.AgentSession.list
```

#### Example: Create

```ruby
agent_session = client.AgentSession.create({
  "context" => "example_context", # Object
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "slugId" => "example_slugId", # String
  "status" => "example_status", # String
  "updatedAt" => "example_updatedAt", # Object
})
```


### AgentSkill

Create an instance: `agent_skill = client.AgentSkill`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `body` | `String` | The skill instructions in markdown format. |
| `color` | `String` | The skill's color. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `creator` | `Hash` | The user who created the skill. |
| `description` | `String` | The skill's description. |
| `icon` | `String` | The icon of the skill. |
| `id` | `String` | The unique identifier of the entity. |
| `inheritedFrom` | `Hash` | The parent-team skill this skill was inherited from. |
| `lastUpdatedBy` | `Hash` | The user who last updated the skill. |
| `lastUsedAt` | `Object` | The time the skill was last used by anyone in the workspace. |
| `owner` | `Hash` | The user who owns the skill. |
| `recentUsageCount` | `Float` | The number of times the skill was used by anyone in the workspace in the last 30 days. |
| `shared` | `Boolean` | Whether the skill is shared with everyone in the workspace. |
| `slugId` | `String` | The skill's unique URL slug. |
| `teamId` | `String` | The identifier of the team this skill is shared with. |
| `title` | `String` | The skill's title. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AgentSkill record (raises on error).
agent_skill = client.AgentSkill.load({ "id" => "agent_skill_id" })
```

#### Example: List

```ruby
# list returns an Array of AgentSkill records (raises on error).
agent_skills = client.AgentSkill.list
```

#### Example: Create

```ruby
agent_skill = client.AgentSkill.create({
  "body" => "example_body", # String
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "recentUsageCount" => 1, # Float
  "shared" => true, # Boolean
  "slugId" => "example_slugId", # String
  "title" => "example_title", # String
  "updatedAt" => "example_updatedAt", # Object
})
```


### Application

Create an instance: `application = client.Application`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `clientId` | `String` | OAuth application's client ID. |
| `description` | `String` | Information about the application. |
| `developer` | `String` | Name of the developer. |
| `developerUrl` | `String` | URL of the developer's website, homepage, or documentation. |
| `id` | `String` | OAuth application's ID. |
| `imageUrl` | `String` | Image of the application. |
| `name` | `String` | Application name. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Application record (raises on error).
application = client.Application.load({ "client_id" => "client_id" })
```


### Attachment

Create an instance: `attachment = client.Attachment`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `bodyData` | `String` | The body data of the attachment, if any. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `creator` | `Hash` | The creator of the attachment. |
| `externalUserCreator` | `Hash` | The non-Linear user who created the attachment. |
| `groupBySource` | `Boolean` | Whether attachments from the same source application should be visually grouped together in the Linear issue detail view. |
| `id` | `String` | The unique identifier of the entity. |
| `issue` | `Hash` | The issue this attachment belongs to. |
| `metadata` | `Object` | Integration-specific metadata for this attachment. |
| `originalIssue` | `Hash` | The issue this attachment was originally created on. |
| `source` | `Object` | Information about the source which created the attachment. |
| `sourceType` | `String` | The source type of the attachment, derived from the source metadata. |
| `subtitle` | `String` | Content for the subtitle line in the Linear attachment widget. |
| `title` | `String` | Content for the title line in the Linear attachment widget. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |
| `url` | `String` | The URL of the external resource this attachment links to. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Attachment record (raises on error).
attachment = client.Attachment.load({ "id" => "attachment_id" })
```

#### Example: List

```ruby
# list returns an Array of Attachment records (raises on error).
attachments = client.Attachment.list
```

#### Example: Create

```ruby
attachment = client.Attachment.create({
  "createdAt" => "example_createdAt", # Object
  "groupBySource" => true, # Boolean
  "id" => "example_id", # String
  "metadata" => "example_metadata", # Object
  "title" => "example_title", # String
  "updatedAt" => "example_updatedAt", # Object
  "url" => "example_url", # String
})
```


### AuditEntry

Create an instance: `audit_entry = client.AuditEntry`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `Hash` | The user that caused the audit entry to be created. |
| `actorId` | `String` | The ID of the user that caused the audit entry to be created. |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `countryCode` | `String` | The ISO 3166-1 alpha-2 country code derived from the request IP address. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `id` | `String` | The unique identifier of the entity. |
| `ip` | `String` | The IP address of the actor at the time the audited action was performed. |
| `metadata` | `Object` | Additional metadata related to the audit entry. |
| `organization` | `Hash` | The workspace the audit log belongs to. |
| `requestInformation` | `Object` | Additional information related to the request which performed the action. |
| `type` | `String` | The type of audited action (e.g., user authentication, permission change, data export, setting modification). |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |

#### Example: List

```ruby
# list returns an Array of AuditEntry records (raises on error).
audit_entrys = client.AuditEntry.list
```


### AuditEntryType

Create an instance: `audit_entry_type = client.AuditEntryType`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `String` | Description of the audit entry type. |
| `type` | `String` | The audit entry type. |

#### Example: List

```ruby
# list returns an Array of AuditEntryType records (raises on error).
audit_entry_types = client.AuditEntryType.list
```


### AuthResolverResponse

Create an instance: `auth_resolver_response = client.AuthResolverResponse`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowDomainAccess` | `Boolean` | Should the signup flow allow access for the domain. |
| `email` | `String` | Email for the authenticated account. |
| `id` | `String` | User account ID. |
| `lastUsedOrganizationId` | `String` | ID of the organization last accessed by the user. |
| `service` | `String` | The authentication service used for the current session (e.g., google, email, saml). |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AuthResolverResponse record (raises on error).
auth_resolver_response = client.AuthResolverResponse.load({ "id" => "auth_resolver_response_id" })
```

#### Example: Create

```ruby
auth_resolver_response = client.AuthResolverResponse.create({
  "email" => "example_email", # String
  "id" => "example_id", # String
})
```


### AuthenticationSessionResponse

Create an instance: `authentication_session_response = client.AuthenticationSessionResponse`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `browserType` | `String` | Used web browser. |
| `client` | `String` | Client used for the session |
| `countryCodes` | `String` | Country codes of all seen locations. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `detailedName` | `String` | Detailed name of the session including version information, derived from the user agent. |
| `id` | `String` |  |
| `ip` | `String` | IP address. |
| `isCurrentSession` | `Boolean` | Whether this session is the one used to make the current API request. |
| `lastActiveAt` | `Object` | When was the session last seen |
| `location` | `String` | Human readable location |
| `locationCity` | `String` | Location city name. |
| `locationCountry` | `String` | Location country name. |
| `locationCountryCode` | `String` | Location country code. |
| `locationRegionCode` | `String` | Location region code. |
| `name` | `String` | Name of the session, derived from the client and operating system |
| `operatingSystem` | `String` | Operating system used for the session |
| `service` | `String` | Service used for logging in. |
| `type` | `String` | Type of application used to authenticate. |
| `updatedAt` | `Object` | Date when the session was last updated. |
| `userAgent` | `String` | Session's user-agent. |

#### Example: List

```ruby
# list returns an Array of AuthenticationSessionResponse records (raises on error).
authentication_session_responses = client.AuthenticationSessionResponse.list
```


### Comment

Create an instance: `comment = client.Comment`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agentSession` | `Hash` | Agent session associated with this comment. |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `body` | `String` | The comment content in markdown format. |
| `bodyData` | `String` | [Internal] The comment content as a ProseMirror document. |
| `botActor` | `Hash` | The bot that created the comment. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `documentContent` | `Hash` | The document content that the comment is associated with. |
| `documentContentId` | `String` | The ID of the document content that the comment is associated with. |
| `editedAt` | `Object` | The time the comment was last edited by its author. |
| `externalThread` | `Hash` | The external thread that the comment is synced with. |
| `externalUser` | `Hash` | The external user who wrote the comment, when the comment was created through an integration such as Slack or Intercom. |
| `hideInLinear` | `Boolean` | [Internal] Whether the comment should be hidden from Linear clients. |
| `id` | `String` | The unique identifier of the entity. |
| `initiative` | `Hash` | The initiative that the comment is associated with. |
| `initiativeId` | `String` | The ID of the initiative that the comment is associated with. |
| `initiativeUpdate` | `Hash` | The initiative update that the comment is associated with. |
| `initiativeUpdateId` | `String` | The ID of the initiative update that the comment is associated with. |
| `isArtificialAgentSessionRoot` | `Boolean` | [Internal] Whether the comment is an artificial placeholder for an agent session thread created without a comment mention. |
| `issue` | `Hash` | The issue that the comment is associated with. |
| `issueId` | `String` | The ID of the issue that the comment is associated with. |
| `onBehalfOf` | `Hash` | [Internal] The user on whose behalf the comment was created, e.g. |
| `parent` | `Hash` | The parent comment under which the current comment is nested. |
| `parentId` | `String` | The ID of the parent comment under which the current comment is nested. |
| `post` | `Hash` | The post that the comment is associated with. |
| `project` | `Hash` | The project that the comment is associated with. |
| `projectId` | `String` | The ID of the project that the comment is associated with. |
| `projectUpdate` | `Hash` | The project update that the comment is associated with. |
| `projectUpdateId` | `String` | The ID of the project update that the comment is associated with. |
| `quotedText` | `String` | The text that this comment references, used for inline comments on documents or issue descriptions. |
| `reactionData` | `Object` | Emoji reaction summary for this comment, grouped by emoji type. |
| `resolvedAt` | `Object` | The time when the comment thread was resolved. |
| `resolvingComment` | `Hash` | The child comment that resolved this thread. |
| `resolvingCommentId` | `String` | The ID of the child comment that resolved this thread. |
| `resolvingUser` | `Hash` | The user that resolved the comment thread. |
| `threadSummary` | `Object` | [Internal] An AI-generated summary of the comment thread. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |
| `url` | `String` | Comment's URL. |
| `user` | `Hash` | The user who wrote the comment. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Comment record (raises on error).
comment = client.Comment.load({ "id" => "comment_id" })
```

#### Example: List

```ruby
# list returns an Array of Comment records (raises on error).
comments = client.Comment.list
```

#### Example: Create

```ruby
comment = client.Comment.create({
  "body" => "example_body", # String
  "bodyData" => "example_bodyData", # String
  "createdAt" => "example_createdAt", # Object
  "hideInLinear" => true, # Boolean
  "id" => "example_id", # String
  "isArtificialAgentSessionRoot" => true, # Boolean
  "reactionData" => "example_reactionData", # Object
  "updatedAt" => "example_updatedAt", # Object
  "url" => "example_url", # String
})
```


### CreateOrJoinOrganizationResponse

Create an instance: `create_or_join_organization_response = client.CreateOrJoinOrganizationResponse`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `organization` | `Hash` | The workspace that was created or joined. |
| `user` | `Hash` | The user who created or joined the workspace. |

#### Example: Create

```ruby
create_or_join_organization_response = client.CreateOrJoinOrganizationResponse.create({
})
```


### CustomView

Create an instance: `custom_view = client.CustomView`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `color` | `String` | The hex color code of the custom view icon. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `creator` | `Hash` | The user who originally created the custom view. |
| `description` | `String` | The description of the custom view. |
| `facet` | `Hash` | [INTERNAL] The facet that links this custom view to its parent entity (project, initiative, team page, etc.). |
| `feedItemFilterData` | `Object` | The filter applied to feed items in the custom view. |
| `filterData` | `Object` | The structured filter applied to issues in the custom view. |
| `icon` | `String` | The icon of the custom view. |
| `id` | `String` | The unique identifier of the entity. |
| `initiativeFilterData` | `Object` | The filter applied to initiatives in the custom view. |
| `modelName` | `String` | The entity type this view displays. |
| `name` | `String` | The name of the custom view, displayed in the sidebar and navigation. |
| `organization` | `Hash` | The workspace of the custom view. |
| `organizationViewPreferences` | `Hash` | The workspace-level default view preferences for this custom view, if any have been set. |
| `owner` | `Hash` | The user who owns the custom view. |
| `projectFilterData` | `Object` | The filter applied to projects in the custom view. |
| `shared` | `Boolean` | Whether the custom view is shared with everyone in the organization. |
| `slugId` | `String` | The custom view's unique URL slug, used to construct human-readable URLs. |
| `team` | `Hash` | The team that the custom view is scoped to. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |
| `updatedBy` | `Hash` | The user who last updated the custom view. |
| `userViewPreferences` | `Hash` | The current user's personal view preferences for this custom view, if they have set any. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the CustomView record (raises on error).
custom_view = client.CustomView.load({ "id" => "custom_view_id" })
```

#### Example: List

```ruby
# list returns an Array of CustomView records (raises on error).
custom_views = client.CustomView.list
```

#### Example: Create

```ruby
custom_view = client.CustomView.create({
  "createdAt" => "example_createdAt", # Object
  "filterData" => "example_filterData", # Object
  "id" => "example_id", # String
  "modelName" => "example_modelName", # String
  "name" => "example_name", # String
  "shared" => true, # Boolean
  "slugId" => "example_slugId", # String
  "updatedAt" => "example_updatedAt", # Object
})
```


### Customer

Create an instance: `customer = client.Customer`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approximateNeedCount` | `Float` | The approximate number of distinct requests associated with this customer, deduplicated per issue or project. |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `domains` | `String` | The email domains associated with this customer (e.g., 'acme.com'). |
| `externalIds` | `String` | Identifiers for this customer in external systems (e.g., CRM IDs from Intercom, Salesforce, or HubSpot). |
| `id` | `String` | The unique identifier of the entity. |
| `integration` | `Hash` | The integration that manages this customer's data (e.g., Intercom, Salesforce). |
| `logoUrl` | `String` | URL of the customer's logo image. |
| `mainSourceId` | `String` | The primary external source ID when a customer has data from multiple external systems. |
| `name` | `String` | The display name of the customer organization. |
| `owner` | `Hash` | The workspace member assigned as the owner of this customer. |
| `revenue` | `Integer` | The annual revenue generated by this customer. |
| `size` | `Float` | The number of employees or seats at the customer organization. |
| `slackChannelId` | `String` | The ID of the Slack channel linked to this customer for communication. |
| `slugId` | `String` | A unique, human-readable URL slug for the customer. |
| `status` | `Hash` | The current lifecycle status of the customer. |
| `tier` | `Hash` | The tier or segment assigned to this customer for prioritization (e.g., Enterprise, Pro, Free). |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |
| `url` | `String` | The URL of the customer's page in the Linear application. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Customer record (raises on error).
customer = client.Customer.load({ "id" => "customer_id" })
```

#### Example: List

```ruby
# list returns an Array of Customer records (raises on error).
customers = client.Customer.list
```

#### Example: Create

```ruby
customer = client.Customer.create({
  "approximateNeedCount" => 1, # Float
  "createdAt" => "example_createdAt", # Object
  "domains" => "example_domains", # String
  "externalIds" => "example_externalIds", # String
  "id" => "example_id", # String
  "name" => "example_name", # String
  "slugId" => "example_slugId", # String
  "updatedAt" => "example_updatedAt", # Object
  "url" => "example_url", # String
})
```


### CustomerNeed

Create an instance: `customer_need = client.CustomerNeed`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `attachment` | `Hash` | The issue attachment linked to this need. |
| `body` | `String` | The body content of the need in Markdown format. |
| `bodyData` | `String` | [Internal] The body content of the need as a Prosemirror document JSON string. |
| `comment` | `Hash` | An optional comment providing additional context for this need. |
| `content` | `String` | The effective Markdown content shown for this customer need. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `creator` | `Hash` | The user who manually created this customer need. |
| `customer` | `Hash` | The customer organization this need belongs to. |
| `id` | `String` | The unique identifier of the entity. |
| `issue` | `Hash` | The issue this need is linked to. |
| `originalIssue` | `Hash` | The issue this customer need was originally created on, before being moved to a different issue or project. |
| `priority` | `Float` | Whether the customer need is important or not. |
| `project` | `Hash` | The project this need is linked to. |
| `projectAttachment` | `Hash` | The project attachment linked to this need. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |
| `url` | `String` | The URL of the source attachment linked to this need, if any. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the CustomerNeed record (raises on error).
customer_need = client.CustomerNeed.load({ "id" => "customer_need_id" })
```

#### Example: List

```ruby
# list returns an Array of CustomerNeed records (raises on error).
customer_needs = client.CustomerNeed.list
```

#### Example: Create

```ruby
customer_need = client.CustomerNeed.create({
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "priority" => 1, # Float
  "updatedAt" => "example_updatedAt", # Object
})
```


### CustomerStatus

Create an instance: `customer_status = client.CustomerStatus`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `color` | `String` | The color of the status indicator in the UI, as a HEX string (e.g., '#ff0000'). |
| `createdAt` | `Object` | The time at which the entity was created. |
| `description` | `String` | An optional description explaining what this status represents in the customer lifecycle. |
| `displayName` | `String` | The user-facing display name of the status shown in the UI. |
| `id` | `String` | The unique identifier of the entity. |
| `name` | `String` | The internal name of the status. |
| `position` | `Float` | The sort position of the status in the workspace's customer lifecycle flow. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the CustomerStatus record (raises on error).
customer_status = client.CustomerStatus.load({ "id" => "customer_status_id" })
```

#### Example: List

```ruby
# list returns an Array of CustomerStatus records (raises on error).
customer_statuss = client.CustomerStatus.list
```

#### Example: Create

```ruby
customer_status = client.CustomerStatus.create({
  "color" => "example_color", # String
  "createdAt" => "example_createdAt", # Object
  "displayName" => "example_displayName", # String
  "id" => "example_id", # String
  "name" => "example_name", # String
  "position" => 1, # Float
  "updatedAt" => "example_updatedAt", # Object
})
```


### CustomerTier

Create an instance: `customer_tier = client.CustomerTier`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `color` | `String` | The color of the tier indicator in the UI, as a HEX string (e.g., '#ff0000'). |
| `createdAt` | `Object` | The time at which the entity was created. |
| `description` | `String` | An optional description explaining what this tier represents and its intended use for customer segmentation. |
| `displayName` | `String` | The user-facing display name of the tier shown in the UI. |
| `id` | `String` | The unique identifier of the entity. |
| `name` | `String` | The internal name of the tier. |
| `position` | `Float` | The sort position of the tier in the workspace's customer tier ordering. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the CustomerTier record (raises on error).
customer_tier = client.CustomerTier.load({ "id" => "customer_tier_id" })
```

#### Example: List

```ruby
# list returns an Array of CustomerTier records (raises on error).
customer_tiers = client.CustomerTier.list
```

#### Example: Create

```ruby
customer_tier = client.CustomerTier.create({
  "color" => "example_color", # String
  "createdAt" => "example_createdAt", # Object
  "displayName" => "example_displayName", # String
  "id" => "example_id", # String
  "name" => "example_name", # String
  "position" => 1, # Float
  "updatedAt" => "example_updatedAt", # Object
})
```


### Cycle

Create an instance: `cycle = client.Cycle`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `autoArchivedAt` | `Object` | The time at which the cycle was automatically archived by the auto-pruning process. |
| `completedAt` | `Object` | The completion time of the cycle. |
| `completedIssueCountHistory` | `Float` | The number of completed issues in the cycle after each day. |
| `completedScopeHistory` | `Float` | The number of completed estimation points after each day. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `currentProgress` | `Object` | [Internal] The current progress snapshot of the cycle, broken down by issue status categories. |
| `description` | `String` | The description of the cycle. |
| `endsAt` | `Object` | The end date and time of the cycle. |
| `id` | `String` | The unique identifier of the entity. |
| `inProgressScopeHistory` | `Float` | The number of in-progress estimation points after each day. |
| `inheritedFrom` | `Hash` | The parent cycle this cycle was inherited from. |
| `isActive` | `Boolean` | Whether the cycle is currently active. |
| `isFuture` | `Boolean` | Whether the cycle has not yet started. |
| `isNext` | `Boolean` | Whether this cycle is the next upcoming (not yet started) cycle for the team. |
| `isPast` | `Boolean` | Whether the cycle's end date has passed. |
| `isPrevious` | `Boolean` | Whether this cycle is the most recently completed cycle for the team. |
| `issueCountHistory` | `Float` | The total number of issues in the cycle after each day. |
| `name` | `String` | The custom name of the cycle. |
| `number` | `Float` | The auto-incrementing number of the cycle, unique within its team. |
| `progress` | `Float` | The overall progress of the cycle as a number between 0 and 1. |
| `progressHistory` | `Object` | [Internal] The detailed progress history of the cycle, including per-status breakdowns over time. |
| `scopeHistory` | `Float` | The total number of estimation points (scope) in the cycle after each day. |
| `startsAt` | `Object` | The start date and time of the cycle. |
| `team` | `Hash` | The team that the cycle belongs to. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Cycle record (raises on error).
cycle = client.Cycle.load({ "id" => "cycle_id" })
```

#### Example: List

```ruby
# list returns an Array of Cycle records (raises on error).
cycles = client.Cycle.list
```

#### Example: Create

```ruby
cycle = client.Cycle.create({
  "completedIssueCountHistory" => 1, # Float
  "completedScopeHistory" => 1, # Float
  "createdAt" => "example_createdAt", # Object
  "currentProgress" => "example_currentProgress", # Object
  "endsAt" => "example_endsAt", # Object
  "id" => "example_id", # String
  "inProgressScopeHistory" => 1, # Float
  "isActive" => true, # Boolean
  "isFuture" => true, # Boolean
  "isNext" => true, # Boolean
  "isPast" => true, # Boolean
  "isPrevious" => true, # Boolean
  "issueCountHistory" => 1, # Float
  "number" => 1, # Float
  "progress" => 1, # Float
  "progressHistory" => "example_progressHistory", # Object
  "scopeHistory" => 1, # Float
  "startsAt" => "example_startsAt", # Object
  "updatedAt" => "example_updatedAt", # Object
})
```


### Diff

Create an instance: `diff = client.Diff`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additions` | `Float` | [Internal] The total number of added lines across the diff. |
| `agentSession` | `Hash` | The agent session the diff belongs to. |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `contentHash` | `String` | [Internal] The opaque content hash identifying the diff's content in code.storage. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `creator` | `Hash` | The user responsible for the diff. |
| `deletions` | `Float` | [Internal] The total number of deleted lines across the diff. |
| `fileCount` | `Float` | [Internal] The number of changed files in the diff. |
| `id` | `String` | The unique identifier of the entity. |
| `organization` | `Hash` | The workspace the diff belongs to. |
| `pullRequest` | `Hash` | The pull request the diff was promoted to when opened for review. |
| `slugId` | `String` | [Internal] The diff's unique URL slug. |
| `truncated` | `Boolean` | [Internal] Whether oversized files were omitted when the diff was computed. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Diff record (raises on error).
diff = client.Diff.load({ "id" => "diff_id" })
```


### Document

Create an instance: `document = client.Document`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `color` | `String` | The hex color of the document icon. |
| `content` | `String` | The document's content in markdown format. |
| `contentState` | `String` | [Internal] The document's content as a base64-encoded Yjs state update. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `creator` | `Hash` | The user who created the document. |
| `cycle` | `Hash` | [Internal] The cycle that the document is associated with. |
| `documentContentId` | `String` | The ID of the document content associated with the document. |
| `hiddenAt` | `Object` | The time at which the document was hidden from the default view. |
| `icon` | `String` | The icon of the document, either a decorative icon type or an emoji string. |
| `id` | `String` | The unique identifier of the entity. |
| `initiative` | `Hash` | The initiative that the document is associated with. |
| `issue` | `Hash` | The issue that the document is associated with. |
| `lastAppliedTemplate` | `Hash` | The last template that was applied to this document. |
| `owner` | `Hash` | The owner of the document. |
| `project` | `Hash` | The project that the document is associated with. |
| `release` | `Hash` | The release that the document is associated with. |
| `slugId` | `String` | The document's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `Float` | The sort order of the document in its parent entity's resources list. |
| `summary` | `String` | [Internal] A one-sentence AI-generated summary of the document content. |
| `team` | `Hash` | [Internal] The team that the document is associated with. |
| `title` | `String` | The title of the document. |
| `trashed` | `Boolean` | A flag that indicates whether the document is in the trash bin. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |
| `updatedBy` | `Hash` | The user who last updated the document. |
| `url` | `String` | The canonical url for the document. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Document record (raises on error).
document = client.Document.load({ "id" => "document_id" })
```

#### Example: List

```ruby
# list returns an Array of Document records (raises on error).
documents = client.Document.list
```

#### Example: Create

```ruby
document = client.Document.create({
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "slugId" => "example_slugId", # String
  "sortOrder" => 1, # Float
  "title" => "example_title", # String
  "updatedAt" => "example_updatedAt", # Object
  "url" => "example_url", # String
})
```


### DocumentSearchResult

Create an instance: `document_search_result = client.DocumentSearchResult`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `color` | `String` | The hex color of the document icon. |
| `content` | `String` | The document's content in markdown format. |
| `contentState` | `String` | [Internal] The document's content as a base64-encoded Yjs state update. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `creator` | `Hash` | The user who created the document. |
| `cycle` | `Hash` | [Internal] The cycle that the document is associated with. |
| `documentContentId` | `String` | The ID of the document content associated with the document. |
| `hiddenAt` | `Object` | The time at which the document was hidden from the default view. |
| `icon` | `String` | The icon of the document, either a decorative icon type or an emoji string. |
| `id` | `String` | The unique identifier of the entity. |
| `initiative` | `Hash` | The initiative that the document is associated with. |
| `issue` | `Hash` | The issue that the document is associated with. |
| `lastAppliedTemplate` | `Hash` | The last template that was applied to this document. |
| `metadata` | `Object` | Metadata related to search result. |
| `owner` | `Hash` | The owner of the document. |
| `project` | `Hash` | The project that the document is associated with. |
| `release` | `Hash` | The release that the document is associated with. |
| `slugId` | `String` | The document's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `Float` | The sort order of the document in its parent entity's resources list. |
| `summary` | `String` | [Internal] A one-sentence AI-generated summary of the document content. |
| `team` | `Hash` | [Internal] The team that the document is associated with. |
| `title` | `String` | The title of the document. |
| `trashed` | `Boolean` | A flag that indicates whether the document is in the trash bin. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |
| `updatedBy` | `Hash` | The user who last updated the document. |
| `url` | `String` | The canonical url for the document. |

#### Example: List

```ruby
# list returns an Array of DocumentSearchResult records (raises on error).
document_search_results = client.DocumentSearchResult.list
```


### EmailIntakeAddress

Create an instance: `email_intake_address = client.EmailIntakeAddress`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `String` | The unique local part (before the @) of the intake email address, used to route incoming emails to the correct intake handler. |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `creator` | `Hash` | The user who created the email intake address. |
| `customerRequestsEnabled` | `Boolean` | Whether issues created from emails sent to this address are automatically converted into customer requests, linking the sender as a customer contact. |
| `enabled` | `Boolean` | Whether the email address is enabled. |
| `forwardingEmailAddress` | `String` | The email address used to forward emails to the intake address. |
| `id` | `String` | The unique identifier of the entity. |
| `issueCanceledAutoReply` | `String` | The auto-reply message for issue canceled. |
| `issueCanceledAutoReplyEnabled` | `Boolean` | Whether the auto-reply for issue canceled is enabled. |
| `issueCompletedAutoReply` | `String` | The auto-reply message for issue completed. |
| `issueCompletedAutoReplyEnabled` | `Boolean` | Whether the auto-reply for issue completed is enabled. |
| `issueCreatedAutoReply` | `String` | The auto-reply message for issue created. |
| `issueCreatedAutoReplyEnabled` | `Boolean` | Whether the auto-reply for issue created is enabled. |
| `lastUsedAt` | `Object` | The last time an inbound email was successfully ingested for this address. |
| `organization` | `Hash` | The workspace that the email address is associated with. |
| `reopenOnReply` | `Boolean` | Whether to reopen completed or canceled issues when a substantive email reply is received. |
| `repliesEnabled` | `Boolean` | Whether email replies are enabled. |
| `senderName` | `String` | The name to be used for outgoing emails. |
| `sesDomainIdentity` | `Hash` | The SES domain identity that the email address is associated with. |
| `team` | `Hash` | The team that the email address is associated with. |
| `template` | `Hash` | The template that the email address is associated with. |
| `type` | `String` | The type of the email address. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |
| `useUserNamesInReplies` | `Boolean` | Whether the commenter's name is included in the email replies. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the EmailIntakeAddress record (raises on error).
email_intake_address = client.EmailIntakeAddress.load({ "id" => "email_intake_address_id" })
```

#### Example: Create

```ruby
email_intake_address = client.EmailIntakeAddress.create({
  "address" => "example_address", # String
  "createdAt" => "example_createdAt", # Object
  "customerRequestsEnabled" => true, # Boolean
  "enabled" => true, # Boolean
  "id" => "example_id", # String
  "issueCanceledAutoReplyEnabled" => true, # Boolean
  "issueCompletedAutoReplyEnabled" => true, # Boolean
  "issueCreatedAutoReplyEnabled" => true, # Boolean
  "reopenOnReply" => true, # Boolean
  "repliesEnabled" => true, # Boolean
  "type" => "example_type", # String
  "updatedAt" => "example_updatedAt", # Object
  "useUserNamesInReplies" => true, # Boolean
})
```


### EmailUserAccountAuthChallengeResponse

Create an instance: `email_user_account_auth_challenge_response = client.EmailUserAccountAuthChallengeResponse`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authType` | `String` | Supported challenge for this user account. |
| `success` | `Boolean` | Whether the operation was successful. |

#### Example: Create

```ruby
email_user_account_auth_challenge_response = client.EmailUserAccountAuthChallengeResponse.create({
  "authType" => "example_authType", # String
  "success" => true, # Boolean
})
```


### Emoji

Create an instance: `emoji = client.Emoji`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `creator` | `Hash` | The user who created the emoji. |
| `id` | `String` | The unique identifier of the entity. |
| `name` | `String` | The unique name of the custom emoji within the workspace. |
| `organization` | `Hash` | The workspace that the emoji belongs to. |
| `source` | `String` | The source of the emoji, indicating how it was created (e.g., uploaded by a user or imported). |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |
| `url` | `String` | The URL of the uploaded image for this custom emoji. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Emoji record (raises on error).
emoji = client.Emoji.load({ "id" => "emoji_id" })
```

#### Example: List

```ruby
# list returns an Array of Emoji records (raises on error).
emojis = client.Emoji.list
```

#### Example: Create

```ruby
emoji = client.Emoji.create({
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "name" => "example_name", # String
  "source" => "example_source", # String
  "updatedAt" => "example_updatedAt", # Object
  "url" => "example_url", # String
})
```


### EntityExternalLink

Create an instance: `entity_external_link = client.EntityExternalLink`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `creator` | `Hash` | The user who created the link. |
| `id` | `String` | The unique identifier of the entity. |
| `initiative` | `Hash` | The initiative that the link is associated with. |
| `label` | `String` | The link's label. |
| `project` | `Hash` | The project that the link is associated with. |
| `sortOrder` | `Float` | The sort order of this link within the parent entity's resources list. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |
| `url` | `String` | The link's URL. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the EntityExternalLink record (raises on error).
entity_external_link = client.EntityExternalLink.load({ "id" => "entity_external_link_id" })
```

#### Example: Create

```ruby
entity_external_link = client.EntityExternalLink.create({
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "label" => "example_label", # String
  "sortOrder" => 1, # Float
  "updatedAt" => "example_updatedAt", # Object
  "url" => "example_url", # String
})
```


### ExternalUser

Create an instance: `external_user = client.ExternalUser`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `avatarUrl` | `String` | A URL to the external user's avatar image. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `displayName` | `String` | The external user's display name. |
| `email` | `String` | The external user's email address. |
| `id` | `String` | The unique identifier of the entity. |
| `lastSeen` | `Object` | The last time the external user was seen interacting with Linear through their external service. |
| `name` | `String` | The external user's full name. |
| `organization` | `Hash` | The workspace that the external user belongs to. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ExternalUser record (raises on error).
external_user = client.ExternalUser.load({ "id" => "external_user_id" })
```

#### Example: List

```ruby
# list returns an Array of ExternalUser records (raises on error).
external_users = client.ExternalUser.list
```


### Favorite

Create an instance: `favorite = client.Favorite`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aiConversation` | `Hash` | [INTERNAL] The favorited Agent conversation. |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `color` | `String` | [Internal] Returns the color of the favorite's icon. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `customView` | `Hash` | The favorited custom view. |
| `customer` | `Hash` | The favorited customer. |
| `cycle` | `Hash` | The favorited cycle. |
| `dashboard` | `Hash` | The favorited dashboard. |
| `detail` | `String` | [Internal] Detail text for favorite's `title` (e.g. |
| `document` | `Hash` | The favorited document. |
| `facet` | `Hash` | [INTERNAL] The favorited facet. |
| `folderName` | `String` | The name of the folder. |
| `icon` | `String` | [Internal] Name of the favorite's icon. |
| `id` | `String` | The unique identifier of the entity. |
| `initiative` | `Hash` | The favorited initiative. |
| `initiativeLabel` | `Hash` | [INTERNAL] The favorited initiative label. |
| `initiativeTab` | `String` | The targeted tab of the initiative. |
| `issue` | `Hash` | The favorited issue. |
| `label` | `Hash` | The favorited label. |
| `liveFolderDefinition` | `Object` | The versioned lazy root and filter represented by this live favorite folder. |
| `liveFolderPreset` | `String` | The predefined live folder represented by this favorite. |
| `owner` | `Hash` | The user who owns this favorite. |
| `parent` | `Hash` | The parent folder of the favorite. |
| `pipelineTab` | `String` | The targeted tab of the release pipeline. |
| `predefinedViewTeam` | `Hash` | The team of the favorited predefined view. |
| `predefinedViewType` | `String` | The type of favorited predefined view (e.g., 'allIssues', 'activeCycle', 'backlog', 'triage'). |
| `project` | `Hash` | The favorited project. |
| `projectLabel` | `Hash` | The favorited project label. |
| `projectTab` | `String` | The targeted tab of the project. |
| `projectTeam` | `Hash` | [DEPRECATED] The favorited team of the project. |
| `pullRequest` | `Hash` | The favorited pull request. |
| `release` | `Hash` | The favorited release. |
| `releaseNote` | `Hash` | The favorited release note. |
| `releasePipeline` | `Hash` | The favorited release pipeline. |
| `sortOrder` | `Float` | The position of this item in the user's favorites list. |
| `team` | `Hash` | The favorited team. |
| `title` | `String` | [Internal] Favorite's title text (name of the favorite'd object or folder). |
| `type` | `String` | The type of entity this favorite references, such as 'issue', 'project', 'cycle', 'customView', 'document', 'folder', etc. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |
| `url` | `String` | URL of the favorited entity. |
| `user` | `Hash` | The favorited user. |
| `workflowDefinition` | `Hash` | The favorited loop. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Favorite record (raises on error).
favorite = client.Favorite.load({ "id" => "favorite_id" })
```

#### Example: List

```ruby
# list returns an Array of Favorite records (raises on error).
favorites = client.Favorite.list
```

#### Example: Create

```ruby
favorite = client.Favorite.create({
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "sortOrder" => 1, # Float
  "title" => "example_title", # String
  "type" => "example_type", # String
  "updatedAt" => "example_updatedAt", # Object
})
```


### GitAutomationState

Create an instance: `git_automation_state = client.GitAutomationState`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `event` | `String` | The Git event that triggers this automation rule (e.g., branch created, PR opened for review, or PR merged). |
| `id` | `String` | The unique identifier of the entity. |
| `state` | `Hash` | The workflow state that linked issues will be transitioned to when the Git event fires. |
| `targetBranch` | `Hash` | The target branch that this automation rule applies to. |
| `team` | `Hash` | The team that this automation rule belongs to. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |

#### Example: Create

```ruby
git_automation_state = client.GitAutomationState.create({
  "createdAt" => "example_createdAt", # Object
  "event" => "example_event", # String
  "id" => "example_id", # String
  "updatedAt" => "example_updatedAt", # Object
})
```


### GitAutomationTargetBranch

Create an instance: `git_automation_target_branch = client.GitAutomationTargetBranch`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `branchPattern` | `String` | The branch name or pattern to match against pull request target branches. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `id` | `String` | The unique identifier of the entity. |
| `isRegex` | `Boolean` | Whether the branch pattern should be interpreted as a regular expression. |
| `team` | `Hash` | The team that this target branch definition belongs to. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |

#### Example: Create

```ruby
git_automation_target_branch = client.GitAutomationTargetBranch.create({
  "branchPattern" => "example_branchPattern", # String
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "isRegex" => true, # Boolean
  "updatedAt" => "example_updatedAt", # Object
})
```


### GitHubIntegrationConnectDetail

Create an instance: `git_hub_integration_connect_detail = client.GitHubIntegrationConnectDetail`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `lostRepositoryNames` | `String` | Full names ('owner/repo') of repositories whose existing GitHub Issues sync mappings would become inaccessible if the new GitHub App installation replaces the existing one. |

#### Example: Create

```ruby
git_hub_integration_connect_detail = client.GitHubIntegrationConnectDetail.create({
})
```


### Initiative

Create an instance: `initiative = client.Initiative`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `canceledAt` | `Object` | [Internal] The time at which the initiative was moved into Canceled status. |
| `color` | `String` | The initiative's color. |
| `completedAt` | `Object` | The time at which the initiative was moved into Completed status. |
| `content` | `String` | The initiative's content in markdown format. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `creator` | `Hash` | The user who created the initiative. |
| `description` | `String` | The description of the initiative. |
| `documentContent` | `Hash` | The content of the initiative description. |
| `frequencyResolution` | `String` | The resolution of the reminder frequency. |
| `health` | `String` | The overall health of the initiative, derived from the most recent initiative update. |
| `healthUpdatedAt` | `Object` | The time at which the initiative health was last updated, typically when a new initiative update is posted. |
| `icon` | `String` | The icon of the initiative. |
| `id` | `String` | The unique identifier of the entity. |
| `identifier` | `String` | [Internal] The human-readable identifier of the initiative. |
| `integrationsSettings` | `Hash` | Settings for all integrations associated with that initiative. |
| `labelIds` | `String` | The IDs of the initiative labels associated with this initiative. |
| `lastUpdate` | `Hash` | The most recent status update posted for this initiative. |
| `leadTeam` | `Hash` | The team that leads the initiative. |
| `name` | `String` | The name of the initiative. |
| `organization` | `Hash` | The workspace of the initiative. |
| `owner` | `Hash` | The user who owns the initiative. |
| `parentInitiative` | `Hash` | Parent initiative associated with the initiative. |
| `previousIdentifiers` | `String` | [Internal] Identifiers (default and custom) that this initiative has previously held. |
| `priority` | `Integer` | The priority of the initiative. |
| `prioritySortOrder` | `Float` | The sort order of the initiative within the workspace when ordered by priority. |
| `slugId` | `String` | The initiative's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `Float` | The sort order of the initiative within the workspace. |
| `startedAt` | `Object` | The time at which the initiative was moved into Active status. |
| `status` | `String` | The lifecycle status of the initiative. |
| `targetDate` | `Object` | The estimated completion date of the initiative. |
| `targetDateResolution` | `String` | The resolution of the initiative's estimated completion date, indicating whether it refers to a specific day, week, month, quarter, or year. |
| `trashed` | `Boolean` | A flag that indicates whether the initiative is in the trash bin. |
| `updateReminderFrequency` | `Float` | The frequency at which to prompt for updates. |
| `updateReminderFrequencyInWeeks` | `Float` | The n-weekly frequency at which to prompt for updates. |
| `updateRemindersDay` | `String` | The day at which to prompt for updates. |
| `updateRemindersHour` | `Float` | The hour at which to prompt for updates. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |
| `url` | `String` | Initiative URL. |
| `visibility` | `String` | The visibility of the initiative, derived from its lead team. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Initiative record (raises on error).
initiative = client.Initiative.load({ "id" => "initiative_id" })
```

#### Example: List

```ruby
# list returns an Array of Initiative records (raises on error).
initiatives = client.Initiative.list
```

#### Example: Create

```ruby
initiative = client.Initiative.create({
  "createdAt" => "example_createdAt", # Object
  "frequencyResolution" => "example_frequencyResolution", # String
  "id" => "example_id", # String
  "labelIds" => "example_labelIds", # String
  "name" => "example_name", # String
  "previousIdentifiers" => "example_previousIdentifiers", # String
  "priority" => 1, # Integer
  "prioritySortOrder" => 1, # Float
  "slugId" => "example_slugId", # String
  "sortOrder" => 1, # Float
  "status" => "example_status", # String
  "updatedAt" => "example_updatedAt", # Object
  "url" => "example_url", # String
  "visibility" => "example_visibility", # String
})
```


### InitiativeLabel

Create an instance: `initiative_label = client.InitiativeLabel`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `color` | `String` | The label's color as a HEX string (e.g., '#EB5757'). |
| `createdAt` | `Object` | The time at which the entity was created. |
| `creator` | `Hash` | The user who created the label. |
| `description` | `String` | The label's description. |
| `id` | `String` | The unique identifier of the entity. |
| `isGroup` | `Boolean` | Whether the label is a group. |
| `lastAppliedAt` | `Object` | The date when the label was last applied to an issue, project, or initiative. |
| `name` | `String` | The label's name. |
| `organization` | `Hash` | The workspace that the initiative label belongs to. |
| `parent` | `Hash` | The parent label group. |
| `retiredAt` | `Object` | [Internal] When the label was retired. |
| `retiredBy` | `Hash` | The user who retired the label. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the InitiativeLabel record (raises on error).
initiative_label = client.InitiativeLabel.load({ "id" => "initiative_label_id" })
```

#### Example: List

```ruby
# list returns an Array of InitiativeLabel records (raises on error).
initiative_labels = client.InitiativeLabel.list
```

#### Example: Create

```ruby
initiative_label = client.InitiativeLabel.create({
  "color" => "example_color", # String
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "isGroup" => true, # Boolean
  "name" => "example_name", # String
  "updatedAt" => "example_updatedAt", # Object
})
```


### InitiativeLeadTeamChangeImpact

Create an instance: `initiative_lead_team_change_impact = client.InitiativeLeadTeamChangeImpact`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `affectedDescendantCount` | `Integer` | The number of editable matching sub-initiatives whose lead team would change if the update is applied to descendants. |
| `id` | `String` |  |
| `visibilityMayChange` | `Boolean` | Whether the changed initiatives may gain or lose access restrictions because the current or next lead team is not public. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the InitiativeLeadTeamChangeImpact record (raises on error).
initiative_lead_team_change_impact = client.InitiativeLeadTeamChangeImpact.load({ "id" => "initiative_lead_team_change_impact_id" })
```


### InitiativeRelation

Create an instance: `initiative_relation = client.InitiativeRelation`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `id` | `String` | The unique identifier of the entity. |
| `initiative` | `Hash` | The parent initiative in this hierarchical relation. |
| `relatedInitiative` | `Hash` | The child initiative in this hierarchical relation. |
| `sortOrder` | `Float` | The sort order of the child initiative within its parent initiative. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |
| `user` | `Hash` | The user who last created or modified the relation. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the InitiativeRelation record (raises on error).
initiative_relation = client.InitiativeRelation.load({ "id" => "initiative_relation_id" })
```

#### Example: List

```ruby
# list returns an Array of InitiativeRelation records (raises on error).
initiative_relations = client.InitiativeRelation.list
```

#### Example: Create

```ruby
initiative_relation = client.InitiativeRelation.create({
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "sortOrder" => 1, # Float
  "updatedAt" => "example_updatedAt", # Object
})
```


### InitiativeToProject

Create an instance: `initiative_to_project = client.InitiativeToProject`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `id` | `String` | The unique identifier of the entity. |
| `initiative` | `Hash` | The initiative that the project is associated with. |
| `project` | `Hash` | The project that the initiative is associated with. |
| `sortOrder` | `String` | The sort order of the project within its parent initiative. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the InitiativeToProject record (raises on error).
initiative_to_project = client.InitiativeToProject.load({ "id" => "initiative_to_project_id" })
```

#### Example: List

```ruby
# list returns an Array of InitiativeToProject records (raises on error).
initiative_to_projects = client.InitiativeToProject.list
```

#### Example: Create

```ruby
initiative_to_project = client.InitiativeToProject.create({
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "sortOrder" => "example_sortOrder", # String
  "updatedAt" => "example_updatedAt", # Object
})
```


### InitiativeUpdate

Create an instance: `initiative_update = client.InitiativeUpdate`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `body` | `String` | The update content in markdown format. |
| `bodyData` | `String` | [Internal] The content of the update as a Prosemirror document. |
| `commentCount` | `Integer` | Number of comments associated with the initiative update. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `diff` | `Object` | The diff between the current update and the previous one. |
| `diffMarkdown` | `String` | The diff between the current update and the previous one, formatted as markdown. |
| `editedAt` | `Object` | The time the update was edited. |
| `health` | `String` | The health of the initiative at the time this update was posted. |
| `id` | `String` | The unique identifier of the entity. |
| `infoSnapshot` | `Object` | [Internal] A snapshot of initiative properties at the time the update was posted, including project statuses, sub-initiative health, and target dates. |
| `initiative` | `Hash` | The initiative that this status update was posted to. |
| `isDiffHidden` | `Boolean` | Whether the diff between this update and the previous one should be hidden in the UI. |
| `isStale` | `Boolean` | Whether the initiative update is stale. |
| `reactionData` | `Object` | Emoji reaction summary, grouped by emoji type. |
| `slugId` | `String` | The update's unique URL slug. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |
| `url` | `String` | The URL to the initiative update. |
| `user` | `Hash` | The user who wrote the update. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the InitiativeUpdate record (raises on error).
initiative_update = client.InitiativeUpdate.load({ "id" => "initiative_update_id" })
```

#### Example: List

```ruby
# list returns an Array of InitiativeUpdate records (raises on error).
initiative_updates = client.InitiativeUpdate.list
```

#### Example: Create

```ruby
initiative_update = client.InitiativeUpdate.create({
  "body" => "example_body", # String
  "bodyData" => "example_bodyData", # String
  "commentCount" => 1, # Integer
  "createdAt" => "example_createdAt", # Object
  "health" => "example_health", # String
  "id" => "example_id", # String
  "isDiffHidden" => true, # Boolean
  "isStale" => true, # Boolean
  "reactionData" => "example_reactionData", # Object
  "slugId" => "example_slugId", # String
  "updatedAt" => "example_updatedAt", # Object
  "url" => "example_url", # String
})
```


### Integration

Create an instance: `integration = client.Integration`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `creator` | `Hash` | The user that added the integration. |
| `id` | `String` | The unique identifier of the entity. |
| `organization` | `Hash` | The workspace that the integration is associated with. |
| `service` | `String` | The integration's type, identifying which external service this integration connects to (e.g., 'slack', 'github', 'jira', 'figma'). |
| `team` | `Hash` | The team that the integration is associated with. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Integration record (raises on error).
integration = client.Integration.load({ "id" => "integration_id" })
```

#### Example: List

```ruby
# list returns an Array of Integration records (raises on error).
integrations = client.Integration.list
```

#### Example: Create

```ruby
integration = client.Integration.create({
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "service" => "example_service", # String
  "updatedAt" => "example_updatedAt", # Object
})
```


### IntegrationTemplate

Create an instance: `integration_template = client.IntegrationTemplate`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `foreignEntityId` | `String` | The identifier of the foreign entity in the external service that this template is scoped to. |
| `id` | `String` | The unique identifier of the entity. |
| `integration` | `Hash` | The integration that the template is associated with. |
| `template` | `Hash` | The template that the integration is associated with. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the IntegrationTemplate record (raises on error).
integration_template = client.IntegrationTemplate.load({ "id" => "integration_template_id" })
```

#### Example: List

```ruby
# list returns an Array of IntegrationTemplate records (raises on error).
integration_templates = client.IntegrationTemplate.list
```

#### Example: Create

```ruby
integration_template = client.IntegrationTemplate.create({
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "updatedAt" => "example_updatedAt", # Object
})
```


### IntegrationsSetting

Create an instance: `integrations_setting = client.IntegrationsSetting`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `contextViewType` | `String` | The type of view to which the integration settings context is associated with. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `id` | `String` | The unique identifier of the entity. |
| `initiative` | `Hash` | Initiative which those settings apply to. |
| `microsoftTeamsProjectUpdateCreated` | `Boolean` | Whether to send a Microsoft Teams message when a project update is created. |
| `project` | `Hash` | Project which those settings apply to. |
| `slackInitiativeUpdateCreated` | `Boolean` | Whether to send a Slack message when an initiative update is created. |
| `slackIssueAddedToTriage` | `Boolean` | Whether to send a Slack message when a new issue is added to triage. |
| `slackIssueAddedToView` | `Boolean` | Whether to send a Slack message when an issue is added to the custom view. |
| `slackIssueNewComment` | `Boolean` | Whether to send a Slack message when a comment is created on any of the project or team's issues. |
| `slackIssueSlaBreached` | `Boolean` | Whether to send a Slack message when an SLA is breached. |
| `slackIssueSlaHighRisk` | `Boolean` | Whether to send a Slack message when an SLA is at high risk. |
| `slackIssueStatusChangedAll` | `Boolean` | Whether to send a Slack message when any of the project or team's issues has a change in status. |
| `slackIssueStatusChangedDone` | `Boolean` | Whether to send a Slack message when any of the project or team's issues change to completed or canceled. |
| `slackProjectUpdateCreated` | `Boolean` | Whether to send a Slack message when a project update is created. |
| `slackProjectUpdateCreatedToTeam` | `Boolean` | Whether to send a new project update to team Slack channels. |
| `slackProjectUpdateCreatedToWorkspace` | `Boolean` | Whether to send a new project update to workspace Slack channel. |
| `team` | `Hash` | Team which those settings apply to. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the IntegrationsSetting record (raises on error).
integrations_setting = client.IntegrationsSetting.load({ "id" => "integrations_setting_id" })
```

#### Example: Create

```ruby
integrations_setting = client.IntegrationsSetting.create({
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "updatedAt" => "example_updatedAt", # Object
})
```


### Issue

Create an instance: `issue = client.Issue`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activitySummary` | `Object` | [Internal] The activity summary information for this issue. |
| `addedToCycleAt` | `Object` | The time at which the issue was added to a cycle. |
| `addedToProjectAt` | `Object` | The time at which the issue was added to a project. |
| `addedToTeamAt` | `Object` | The time at which the issue was added to a team. |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `asksExternalUserRequester` | `Hash` | The external user who requested creation of the Asks issue on behalf of the creator. |
| `asksRequester` | `Hash` | The internal user who requested creation of the Asks issue on behalf of the creator. |
| `assignee` | `Hash` | The user to whom the issue is assigned. |
| `autoArchivedAt` | `Object` | The time at which the issue was automatically archived by the auto pruning process. |
| `autoClosedAt` | `Object` | The time at which the issue was automatically closed by the auto pruning process. |
| `botActor` | `Hash` | The bot that created the issue, if applicable. |
| `branchName` | `String` | Suggested branch name for the issue. |
| `canceledAt` | `Object` | The time at which the issue was moved into canceled state. |
| `completedAt` | `Object` | The time at which the issue was moved into completed state. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `creator` | `Hash` | The user who created the issue. |
| `customerTicketCount` | `Integer` | Returns the number of Attachment resources which are created by customer support ticketing systems (e.g. |
| `cycle` | `Hash` | The cycle that the issue is associated with. |
| `delegate` | `Hash` | The agent user that is delegated to work on this issue. |
| `description` | `String` | The issue's description in markdown format. |
| `descriptionState` | `String` | [Internal] The issue's description content as YJS state. |
| `documentContent` | `Hash` | [ALPHA] The document content representing this issue description. |
| `dueDate` | `Object` | The date at which the issue is due. |
| `estimate` | `Float` | The estimate of the complexity of the issue. |
| `externalUserCreator` | `Hash` | The external user who created the issue. |
| `favorite` | `Hash` | The users favorite associated with this issue. |
| `id` | `String` | The unique identifier of the entity. |
| `identifier` | `String` | Issue's human readable identifier (e.g. |
| `inheritsSharedAccess` | `Boolean` | Whether this issue inherits shared access from its parent issue. |
| `integrationSourceType` | `String` | Integration type that created this issue, if applicable. |
| `labelIds` | `String` | Identifiers of the labels associated with this issue. |
| `lastAppliedTemplate` | `Hash` | The last template that was applied to this issue. |
| `number` | `Float` | The issue's unique number, scoped to the issue's team. |
| `parent` | `Hash` | The parent of the issue. |
| `previousIdentifiers` | `String` | Previous identifiers of the issue if it has been moved between teams. |
| `priority` | `Float` | The priority of the issue. |
| `priorityLabel` | `String` | Label for the priority. |
| `prioritySortOrder` | `Float` | The order of the item in relation to other items in the workspace, when ordered by priority. |
| `project` | `Hash` | The project that the issue is associated with. |
| `projectMilestone` | `Hash` | The project milestone that the issue is associated with. |
| `reactionData` | `Object` | Emoji reaction summary for the issue, grouped by emoji type. |
| `recurringIssueTemplate` | `Hash` | The recurring issue template that created this issue. |
| `slaBreachesAt` | `Object` | The time at which the issue's SLA will breach. |
| `slaHighRiskAt` | `Object` | The time at which the issue's SLA will enter high risk state. |
| `slaMediumRiskAt` | `Object` | The time at which the issue's SLA will enter medium risk state. |
| `slaStartedAt` | `Object` | The time at which the issue's SLA began. |
| `slaType` | `String` | The type of SLA set on the issue. |
| `snoozedBy` | `Hash` | The user who snoozed the issue. |
| `snoozedUntilAt` | `Object` | The time until an issue will be snoozed in Triage view. |
| `sortOrder` | `Float` | The order of the item in relation to other items in the organization. |
| `sourceComment` | `Hash` | The comment that this issue was created from, when an issue is created from an existing comment. |
| `startedAt` | `Object` | The time at which the issue was moved into started state. |
| `startedTriageAt` | `Object` | The time at which the issue entered triage. |
| `state` | `Hash` | The workflow state (issue status) that the issue is currently in. |
| `subIssueSortOrder` | `Float` | The order of the item in the sub-issue list. |
| `suggestionsGeneratedAt` | `Object` | [Internal] The time at which the most recent suggestions for this issue were generated. |
| `summary` | `Hash` | [Internal] AI-generated activity summary for this issue. |
| `team` | `Hash` | The team that the issue belongs to. |
| `title` | `String` | The issue's title. |
| `trashed` | `Boolean` | A flag that indicates whether the issue is in the trash bin. |
| `triagedAt` | `Object` | The time at which the issue left triage. |
| `trusted` | `Boolean` | [Internal] Whether this issue has been explicitly marked as trusted. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |
| `url` | `String` | Issue URL. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Issue record (raises on error).
issue = client.Issue.load({ "id" => "issue_id" })
```

#### Example: List

```ruby
# list returns an Array of Issue records (raises on error).
issues = client.Issue.list
```

#### Example: Create

```ruby
issue = client.Issue.create({
  "branchName" => "example_branchName", # String
  "createdAt" => "example_createdAt", # Object
  "customerTicketCount" => 1, # Integer
  "id" => "example_id", # String
  "identifier" => "example_identifier", # String
  "inheritsSharedAccess" => true, # Boolean
  "labelIds" => "example_labelIds", # String
  "number" => 1, # Float
  "previousIdentifiers" => "example_previousIdentifiers", # String
  "priority" => 1, # Float
  "priorityLabel" => "example_priorityLabel", # String
  "prioritySortOrder" => 1, # Float
  "reactionData" => "example_reactionData", # Object
  "sortOrder" => 1, # Float
  "title" => "example_title", # String
  "updatedAt" => "example_updatedAt", # Object
  "url" => "example_url", # String
})
```


### IssueImport

Create an instance: `issue_import = client.IssueImport`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `creatorId` | `String` | Identifier of the user who started the import job. |
| `csvFileUrl` | `String` | File URL for the uploaded CSV for the import, if there is one. |
| `displayName` | `String` | The display name of the import service. |
| `error` | `String` | User readable error message, if one has occurred during the import. |
| `errorMetadata` | `Object` | Error code and metadata, if one has occurred during the import. |
| `id` | `String` | The unique identifier of the entity. |
| `mapping` | `Object` | The data mapping configuration for the import job. |
| `progress` | `Float` | Current step progress as a percentage (0-100). |
| `service` | `String` | The external service from which data is being imported (e.g., jira, asana, github, shortcut, linear). |
| `serviceMetadata` | `Object` | Metadata related to import service. |
| `status` | `String` | The current status of the import job, indicating its position in the import lifecycle (e.g., not started, in progress, complete, error). |
| `teamName` | `String` | The name of the new team to be created for the import, when the import is configured to create a new team rather than importing into an existing one. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |

#### Example: Create

```ruby
issue_import = client.IssueImport.create({
  "createdAt" => "example_createdAt", # Object
  "displayName" => "example_displayName", # String
  "service" => "example_service", # String
  "status" => "example_status", # String
  "updatedAt" => "example_updatedAt", # Object
})
```


### IssueLabel

Create an instance: `issue_label = client.IssueLabel`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `color` | `String` | The label's color as a HEX string (e.g., '#EB5757'). |
| `createdAt` | `Object` | The time at which the entity was created. |
| `creator` | `Hash` | The user who created the label. |
| `description` | `String` | The label's description. |
| `groupType` | `String` | The selection mode of this label group. |
| `id` | `String` | The unique identifier of the entity. |
| `inheritedFrom` | `Hash` | The original workspace or parent-team label that this label was inherited from. |
| `isGroup` | `Boolean` | Whether the label is a group. |
| `lastAppliedAt` | `Object` | The date when the label was last applied to an issue, project, or initiative. |
| `name` | `String` | The label's name. |
| `parent` | `Hash` | The parent label. |
| `retiredAt` | `Object` | [Internal] When the label was retired. |
| `retiredBy` | `Hash` | The user who retired the label. |
| `team` | `Hash` | The team that the label is scoped to. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the IssueLabel record (raises on error).
issue_label = client.IssueLabel.load({ "id" => "issue_label_id" })
```

#### Example: List

```ruby
# list returns an Array of IssueLabel records (raises on error).
issue_labels = client.IssueLabel.list
```

#### Example: Create

```ruby
issue_label = client.IssueLabel.create({
  "color" => "example_color", # String
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "isGroup" => true, # Boolean
  "name" => "example_name", # String
  "updatedAt" => "example_updatedAt", # Object
})
```


### IssuePriorityValue

Create an instance: `issue_priority_value = client.IssuePriorityValue`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `label` | `String` | Priority's label. |
| `priority` | `Integer` | Priority's number value. |

#### Example: List

```ruby
# list returns an Array of IssuePriorityValue records (raises on error).
issue_priority_values = client.IssuePriorityValue.list
```


### IssueRelation

Create an instance: `issue_relation = client.IssueRelation`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `id` | `String` | The unique identifier of the entity. |
| `issue` | `Hash` | The source issue whose relationship is being described. |
| `relatedIssue` | `Hash` | The target issue that the source issue is related to. |
| `type` | `String` | The type of relationship between the source issue and the related issue. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the IssueRelation record (raises on error).
issue_relation = client.IssueRelation.load({ "id" => "issue_relation_id" })
```

#### Example: List

```ruby
# list returns an Array of IssueRelation records (raises on error).
issue_relations = client.IssueRelation.list
```

#### Example: Create

```ruby
issue_relation = client.IssueRelation.create({
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "type" => "example_type", # String
  "updatedAt" => "example_updatedAt", # Object
})
```


### IssueSearchResult

Create an instance: `issue_search_result = client.IssueSearchResult`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activitySummary` | `Object` | [Internal] The activity summary information for this issue. |
| `addedToCycleAt` | `Object` | The time at which the issue was added to a cycle. |
| `addedToProjectAt` | `Object` | The time at which the issue was added to a project. |
| `addedToTeamAt` | `Object` | The time at which the issue was added to a team. |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `asksExternalUserRequester` | `Hash` | The external user who requested creation of the Asks issue on behalf of the creator. |
| `asksRequester` | `Hash` | The internal user who requested creation of the Asks issue on behalf of the creator. |
| `assignee` | `Hash` | The user to whom the issue is assigned. |
| `autoArchivedAt` | `Object` | The time at which the issue was automatically archived by the auto pruning process. |
| `autoClosedAt` | `Object` | The time at which the issue was automatically closed by the auto pruning process. |
| `botActor` | `Hash` | The bot that created the issue, if applicable. |
| `branchName` | `String` | Suggested branch name for the issue. |
| `canceledAt` | `Object` | The time at which the issue was moved into canceled state. |
| `completedAt` | `Object` | The time at which the issue was moved into completed state. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `creator` | `Hash` | The user who created the issue. |
| `customerTicketCount` | `Integer` | Returns the number of Attachment resources which are created by customer support ticketing systems (e.g. |
| `cycle` | `Hash` | The cycle that the issue is associated with. |
| `delegate` | `Hash` | The agent user that is delegated to work on this issue. |
| `description` | `String` | The issue's description in markdown format. |
| `descriptionState` | `String` | [Internal] The issue's description content as YJS state. |
| `documentContent` | `Hash` | [ALPHA] The document content representing this issue description. |
| `dueDate` | `Object` | The date at which the issue is due. |
| `estimate` | `Float` | The estimate of the complexity of the issue. |
| `externalUserCreator` | `Hash` | The external user who created the issue. |
| `favorite` | `Hash` | The users favorite associated with this issue. |
| `id` | `String` | The unique identifier of the entity. |
| `identifier` | `String` | Issue's human readable identifier (e.g. |
| `inheritsSharedAccess` | `Boolean` | Whether this issue inherits shared access from its parent issue. |
| `integrationSourceType` | `String` | Integration type that created this issue, if applicable. |
| `labelIds` | `String` | Identifiers of the labels associated with this issue. |
| `lastAppliedTemplate` | `Hash` | The last template that was applied to this issue. |
| `metadata` | `Object` | Metadata related to search result. |
| `number` | `Float` | The issue's unique number, scoped to the issue's team. |
| `parent` | `Hash` | The parent of the issue. |
| `previousIdentifiers` | `String` | Previous identifiers of the issue if it has been moved between teams. |
| `priority` | `Float` | The priority of the issue. |
| `priorityLabel` | `String` | Label for the priority. |
| `prioritySortOrder` | `Float` | The order of the item in relation to other items in the workspace, when ordered by priority. |
| `project` | `Hash` | The project that the issue is associated with. |
| `projectMilestone` | `Hash` | The project milestone that the issue is associated with. |
| `reactionData` | `Object` | Emoji reaction summary for the issue, grouped by emoji type. |
| `recurringIssueTemplate` | `Hash` | The recurring issue template that created this issue. |
| `slaBreachesAt` | `Object` | The time at which the issue's SLA will breach. |
| `slaHighRiskAt` | `Object` | The time at which the issue's SLA will enter high risk state. |
| `slaMediumRiskAt` | `Object` | The time at which the issue's SLA will enter medium risk state. |
| `slaStartedAt` | `Object` | The time at which the issue's SLA began. |
| `slaType` | `String` | The type of SLA set on the issue. |
| `snoozedBy` | `Hash` | The user who snoozed the issue. |
| `snoozedUntilAt` | `Object` | The time until an issue will be snoozed in Triage view. |
| `sortOrder` | `Float` | The order of the item in relation to other items in the organization. |
| `sourceComment` | `Hash` | The comment that this issue was created from, when an issue is created from an existing comment. |
| `startedAt` | `Object` | The time at which the issue was moved into started state. |
| `startedTriageAt` | `Object` | The time at which the issue entered triage. |
| `state` | `Hash` | The workflow state (issue status) that the issue is currently in. |
| `subIssueSortOrder` | `Float` | The order of the item in the sub-issue list. |
| `suggestionsGeneratedAt` | `Object` | [Internal] The time at which the most recent suggestions for this issue were generated. |
| `summary` | `Hash` | [Internal] AI-generated activity summary for this issue. |
| `team` | `Hash` | The team that the issue belongs to. |
| `title` | `String` | The issue's title. |
| `trashed` | `Boolean` | A flag that indicates whether the issue is in the trash bin. |
| `triagedAt` | `Object` | The time at which the issue left triage. |
| `trusted` | `Boolean` | [Internal] Whether this issue has been explicitly marked as trusted. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |
| `url` | `String` | Issue URL. |

#### Example: List

```ruby
# list returns an Array of IssueSearchResult records (raises on error).
issue_search_results = client.IssueSearchResult.list
```


### IssueToRelease

Create an instance: `issue_to_release = client.IssueToRelease`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `id` | `String` | The unique identifier of the entity. |
| `issue` | `Hash` | The issue that is linked to the release. |
| `release` | `Hash` | The release that the issue is linked to. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the IssueToRelease record (raises on error).
issue_to_release = client.IssueToRelease.load({ "id" => "issue_to_release_id" })
```

#### Example: List

```ruby
# list returns an Array of IssueToRelease records (raises on error).
issue_to_releases = client.IssueToRelease.list
```

#### Example: Create

```ruby
issue_to_release = client.IssueToRelease.create({
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "updatedAt" => "example_updatedAt", # Object
})
```


### LogoutResponse

Create an instance: `logout_response = client.LogoutResponse`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `success` | `Boolean` | Whether the operation was successful. |

#### Example: Create

```ruby
logout_response = client.LogoutResponse.create({
  "success" => true, # Boolean
})
```


### Notification

Create an instance: `notification = client.Notification`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `Hash` | The user that caused the notification. |
| `actorAvatarColor` | `String` | [Internal] Notification actor initials if avatar is not available. |
| `actorAvatarUrl` | `String` | [Internal] Notification avatar URL. |
| `actorInactive` | `Boolean` | [Internal] Whether the notification's user actor is deactivated in the workspace. |
| `actorInitials` | `String` | [Internal] Notification actor initials if avatar is not available. |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `botActor` | `Hash` | The bot that caused the notification. |
| `category` | `String` | The category of the notification. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `emailedAt` | `Object` | The time at which an email reminder for this notification was sent to the user. |
| `externalUserActor` | `Hash` | The external user that caused the notification. |
| `groupingKey` | `String` | [Internal] Notifications with the same grouping key will be grouped together in the UI. |
| `groupingPriority` | `Float` | [Internal] Priority of the notification with the same grouping key. |
| `id` | `String` | The unique identifier of the entity. |
| `inboxUrl` | `String` | [Internal] Inbox URL for the notification. |
| `initiativeUpdateHealth` | `String` | [Internal] Initiative update health for new updates. |
| `isLinearActor` | `Boolean` | [Internal] If notification actor was Linear. |
| `issueStatusType` | `String` | [Internal] Issue's status type for issue notifications. |
| `projectUpdateHealth` | `String` | [Internal] Project update health for new updates. |
| `readAt` | `Object` | The time at which the user marked the notification as read. |
| `snoozedUntilAt` | `Object` | The time until which a notification is snoozed. |
| `subtitle` | `String` | [Internal] Notification subtitle. |
| `title` | `String` | [Internal] Notification title. |
| `type` | `String` | Notification type. |
| `unsnoozedAt` | `Object` | The time at which a notification was unsnoozed. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |
| `url` | `String` | [Internal] URL to the target of the notification. |
| `user` | `Hash` | The recipient user of this notification. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Notification record (raises on error).
notification = client.Notification.load({ "id" => "notification_id" })
```

#### Example: List

```ruby
# list returns an Array of Notification records (raises on error).
notifications = client.Notification.list
```


### NotificationSubscription

Create an instance: `notification_subscription = client.NotificationSubscription`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `Boolean` | Whether the subscription is active. |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `contextViewType` | `String` | The type of contextual view (e.g., active issues, backlog) that further scopes a team notification subscription. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `customView` | `Hash` | The custom view that this notification subscription is scoped to. |
| `customer` | `Hash` | The customer that this notification subscription is scoped to. |
| `cycle` | `Hash` | The cycle that this notification subscription is scoped to. |
| `id` | `String` | The unique identifier of the entity. |
| `initiative` | `Hash` | The initiative that this notification subscription is scoped to. |
| `label` | `Hash` | The issue label that this notification subscription is scoped to. |
| `project` | `Hash` | The project that this notification subscription is scoped to. |
| `subscriber` | `Hash` | The user who will receive notifications from this subscription. |
| `team` | `Hash` | The team that this notification subscription is scoped to. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |
| `user` | `Hash` | The user that this notification subscription is scoped to, for user-specific view subscriptions. |
| `userContextViewType` | `String` | The type of user-specific view that further scopes a user notification subscription. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the NotificationSubscription record (raises on error).
notification_subscription = client.NotificationSubscription.load({ "id" => "notification_subscription_id" })
```

#### Example: List

```ruby
# list returns an Array of NotificationSubscription records (raises on error).
notification_subscriptions = client.NotificationSubscription.list
```


### OAuthApplication

Create an instance: `o_auth_application = client.OAuthApplication`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `clientId` | `String` | The client ID used during OAuth authorization flows. |
| `createdAt` | `Object` | The time at which the OAuth application was created. |
| `description` | `String` | User-facing description of the OAuth application. |
| `developer` | `String` | Name of the developer or company that built the OAuth application. |
| `developerUrl` | `String` | URL of the developer's website, homepage, or documentation. |
| `distribution` | `String` | Distribution setting for the OAuth application. |
| `grantTypes` | `String` | OAuth grant types supported by this application. |
| `id` | `String` | The unique identifier of the OAuth application. |
| `imageUrl` | `String` | URL of the OAuth application's icon. |
| `name` | `String` | The human-readable name of the OAuth application. |
| `redirectUris` | `String` | Allowed redirect URIs for OAuth authorization flows. |
| `updatedAt` | `Object` | The time at which the OAuth application was last updated. |
| `webhookEnabled` | `Boolean` | Whether webhook delivery is enabled for this OAuth application. |
| `webhookResourceTypes` | `String` | Resource types the OAuth application's webhooks subscribe to. |
| `webhookUrl` | `String` | Webhook URL used for delivering webhook payloads. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the OAuthApplication record (raises on error).
o_auth_application = client.OAuthApplication.load({ "id" => "o_auth_application_id" })
```

#### Example: List

```ruby
# list returns an Array of OAuthApplication records (raises on error).
o_auth_applications = client.OAuthApplication.list
```

#### Example: Create

```ruby
o_auth_application = client.OAuthApplication.create({
  "clientId" => "example_clientId", # String
  "createdAt" => "example_createdAt", # Object
  "developer" => "example_developer", # String
  "developerUrl" => "example_developerUrl", # String
  "distribution" => "example_distribution", # String
  "grantTypes" => "example_grantTypes", # String
  "id" => "example_id", # String
  "name" => "example_name", # String
  "redirectUris" => "example_redirectUris", # String
  "updatedAt" => "example_updatedAt", # Object
  "webhookEnabled" => true, # Boolean
  "webhookResourceTypes" => "example_webhookResourceTypes", # String
})
```


### Organization

Create an instance: `organization = client.Organization`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agentAutomationEnabled` | `Boolean` | [INTERNAL] Whether the workspace has enabled agent automation. |
| `aiAddonEnabled` | `Boolean` | [INTERNAL] Whether the workspace has enabled the AI add-on (which at this point only includes triage suggestions). |
| `aiDiscussionSummariesEnabled` | `Boolean` | Whether the workspace has enabled AI discussion summaries for issues. |
| `aiProviderConfiguration` | `Object` | [INTERNAL] Configure per-modality AI host providers and model families. |
| `aiTelemetryEnabled` | `Boolean` | [INTERNAL] Whether the workspace has opted in to AI telemetry. |
| `aiThreadSummariesEnabled` | `Boolean` | Whether the workspace has enabled resolved thread AI summaries. |
| `allowedFileUploadContentTypes` | `String` | Allowed file upload content types |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `authSettings` | `Object` | Authentication settings for the workspace, including allowed auth providers, bypass rules, and organization visibility during signup. |
| `codeIntelligenceEnabled` | `Boolean` | [INTERNAL] Whether code intelligence is enabled for the workspace. |
| `codeIntelligenceRepository` | `String` | [INTERNAL] GitHub repository in owner/repo format for code intelligence. |
| `codingAgentEnabled` | `Boolean` | [INTERNAL] Whether the workspace has enabled Coding Sessions. |
| `codingAgentSettings` | `Object` | [Internal] Settings for Coding Sessions features. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `createdIssueCount` | `Integer` | Approximate total number of issues created in the workspace, including archived ones. |
| `customerCount` | `Integer` | The number of active (non-archived) customers tracked in the workspace. |
| `customersConfiguration` | `Object` | Configuration settings for the Customers feature, including revenue currency and other customer tracking preferences. |
| `customersEnabled` | `Boolean` | Whether the Customers feature is enabled and accessible for the workspace based on the current plan. |
| `defaultFeedSummarySchedule` | `String` | Default schedule for how often feed summaries are generated. |
| `defaultHomeView` | `String` | The default home view for members of the workspace who have not chosen their own default. |
| `defaultHomeViewTargetId` | `String` | The id of the specific initiative, project, view, dashboard, or page tab used as the default home view. |
| `deletionRequestedAt` | `Object` | The time at which deletion of the workspace was requested. |
| `feedEnabled` | `Boolean` | Whether the activity feed feature is enabled for the workspace. |
| `fiscalYearStartMonth` | `Float` | The zero-indexed month at which the fiscal year starts (0 = January, 11 = December). |
| `generatedUpdatesEnabled` | `Boolean` | [INTERNAL] Whether the workspace has enabled generated updates. |
| `gitBranchFormat` | `String` | The template format for Git branch names created from issues. |
| `gitLinkbackDescriptionsEnabled` | `Boolean` | Whether issue descriptions should be included in the Git integration linkback messages posted to pull requests. |
| `gitLinkbackMessagesEnabled` | `Boolean` | Whether the Git integration linkback messages should be posted as comments on pull requests in private repositories. |
| `gitPublicLinkbackMessagesEnabled` | `Boolean` | Whether the Git integration linkback messages should be posted as comments on pull requests in public repositories. |
| `hipaaComplianceEnabled` | `Boolean` | Whether HIPAA compliance is enabled for the workspace. |
| `id` | `String` | The unique identifier of the entity. |
| `initiativeUpdateReminderFrequencyInWeeks` | `Float` | The frequency in weeks at which to prompt for initiative updates. |
| `initiativeUpdateRemindersDay` | `String` | The day of the week on which initiative update reminders are sent. |
| `initiativeUpdateRemindersHour` | `Float` | The hour of the day (0-23) at which initiative update reminders are sent. |
| `linearAgentEnabled` | `Boolean` | [Internal] Whether the workspace has enabled Linear Agent. |
| `linearAgentSettings` | `Object` | [Internal] Settings for Linear Agent features. |
| `logoUrl` | `String` | The URL of the workspace's logo image. |
| `name` | `String` | The workspace's name. |
| `periodUploadVolume` | `Float` | Rolling 30-day total file upload volume for the workspace, measured in megabytes. |
| `previousUrlKeys` | `String` | Previously used URL keys for the workspace. |
| `projectUpdateReminderFrequencyInWeeks` | `Float` | The frequency in weeks at which to prompt for project updates. |
| `projectUpdateRemindersDay` | `String` | The day of the week on which project update reminders are sent. |
| `projectUpdateRemindersHour` | `Float` | The hour of the day (0-23) at which project update reminders are sent. |
| `pullRequestIssueMode` | `String` | How Linear suggests and links issues for pull requests that have none linked: 'off', 'suggest', or 'autoOnMerge'. |
| `pullRequestTourEnabled` | `Boolean` | Whether the workspace generates AI Pull Request guides for new pull requests. |
| `releaseChannel` | `String` | The feature release channel the workspace belongs to, which controls access to pre-release features. |
| `releasesEnabled` | `Boolean` | Whether release management is enabled for the workspace. |
| `restrictAgentInvocationToMembers` | `Boolean` | [Internal] Whether agent invocation is restricted to full workspace members. |
| `roadmapEnabled` | `Boolean` | Whether the roadmap feature is enabled for the workspace. |
| `samlEnabled` | `Boolean` | Whether SAML-based single sign-on authentication is enabled for the workspace. |
| `samlSettings` | `Object` | [INTERNAL] SAML settings. |
| `scimEnabled` | `Boolean` | Whether SCIM provisioning is enabled for the workspace, allowing automated user and team management from an identity provider. |
| `scimSettings` | `Object` | [INTERNAL] SCIM settings. |
| `securitySettings` | `Object` | Security settings for the workspace, including role-based restrictions for invitations, team creation, label management, and other sensitive operations. |
| `slackAutoCreateProjectChannel` | `Boolean` | [Internal] Whether to automatically create a Slack channel when a new project is created. |
| `slackProjectChannelIntegration` | `Hash` | The Slack integration used for auto-creating project channels. |
| `slackProjectChannelPrefix` | `String` | The prefix used for auto-created Slack project channels. |
| `slackProjectChannelsEnabled` | `Boolean` | [Internal] Whether the Slack project channels feature is enabled for the workspace. |
| `subscription` | `Hash` | The workspace's subscription to a paid plan. |
| `themeSettings` | `Object` | [ALPHA] Theme settings for the workspace. |
| `trialEndsAt` | `Object` | The time at which the current plan trial will end. |
| `trialStartsAt` | `Object` | The time at which the current plan trial started. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |
| `urlKey` | `String` | The workspace's unique URL key, used in URLs to identify the workspace. |
| `userCount` | `Integer` | The number of active (non-deactivated) users in the workspace. |
| `workingDays` | `Float` | [Internal] The list of working days. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Organization record (raises on error).
organization = client.Organization.load({ "id" => "organization_id" })
```


### OrganizationDomain

Create an instance: `organization_domain = client.OrganizationDomain`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `authType` | `String` | The authentication type this domain is used for. |
| `claimed` | `Boolean` | Whether the domain was claimed by the workspace through DNS TXT record verification. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `creator` | `Hash` | The user who added the domain. |
| `disableOrganizationCreation` | `Boolean` | Whether users with email addresses from this domain are prevented from creating new workspaces. |
| `id` | `String` | The unique identifier of the entity. |
| `identityProvider` | `Hash` | The identity provider the domain belongs to. |
| `name` | `String` | The domain name (e.g., 'example.com'). |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |
| `verificationEmail` | `String` | The email address used to verify this domain. |
| `verified` | `Boolean` | Whether the domain has been verified via email verification. |

#### Example: Create

```ruby
organization_domain = client.OrganizationDomain.create({
  "authType" => "example_authType", # String
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "name" => "example_name", # String
  "updatedAt" => "example_updatedAt", # Object
  "verified" => true, # Boolean
})
```


### OrganizationInvite

Create an instance: `organization_invite = client.OrganizationInvite`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `acceptedAt` | `Object` | The time at which the invite was accepted by the invitee. |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `email` | `String` | The email address of the person being invited to the workspace. |
| `expiresAt` | `Object` | The time at which the invite will expire and can no longer be accepted. |
| `external` | `Boolean` | Whether the invite was sent to an email address outside the workspace's verified domains. |
| `id` | `String` | The unique identifier of the entity. |
| `invitee` | `Hash` | The user who has accepted the invite. |
| `inviter` | `Hash` | The user who created the invitation. |
| `metadata` | `Object` | Extra metadata associated with the invite. |
| `organization` | `Hash` | The workspace that the invite is associated with. |
| `role` | `String` | The workspace role (admin, member, guest, or owner) that the invitee will receive upon accepting the invite. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the OrganizationInvite record (raises on error).
organization_invite = client.OrganizationInvite.load({ "id" => "organization_invite_id" })
```

#### Example: List

```ruby
# list returns an Array of OrganizationInvite records (raises on error).
organization_invites = client.OrganizationInvite.list
```

#### Example: Create

```ruby
organization_invite = client.OrganizationInvite.create({
  "createdAt" => "example_createdAt", # Object
  "email" => "example_email", # String
  "external" => true, # Boolean
  "id" => "example_id", # String
  "role" => "example_role", # String
  "updatedAt" => "example_updatedAt", # Object
})
```


### OrganizationMeta

Create an instance: `organization_meta = client.OrganizationMeta`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowedAuthServices` | `String` | Allowed authentication providers, empty array means all are allowed. |
| `region` | `String` | The region the workspace is hosted in. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the OrganizationMeta record (raises on error).
organization_meta = client.OrganizationMeta.load({ "url_key" => "url_key" })
```


### PasskeyLoginStartResponse

Create an instance: `passkey_login_start_response = client.PasskeyLoginStartResponse`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `options` | `Object` | The passkey authentication options to pass to the WebAuthn API. |
| `success` | `Boolean` | Whether the operation was successful. |


### Project

Create an instance: `project = client.Project`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `autoArchivedAt` | `Object` | The time at which the project was automatically archived by the auto-pruning process. |
| `canceledAt` | `Object` | The time at which the project was moved into a canceled status. |
| `color` | `String` | The project's color as a HEX string. |
| `completedAt` | `Object` | The time at which the project was moved into a completed status. |
| `completedIssueCountHistory` | `Float` | The number of completed issues in the project at the end of each week since project creation. |
| `completedScopeHistory` | `Float` | The number of completed estimation points at the end of each week since project creation. |
| `content` | `String` | The project's content in markdown format. |
| `contentState` | `String` | [Internal] The project's content as YJS state. |
| `convertedFromIssue` | `Hash` | The issue that was converted into this project. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `creator` | `Hash` | The user who created the project. |
| `currentProgress` | `Object` | [INTERNAL] The current progress of the project, broken down by issue status category. |
| `description` | `String` | The short description of the project. |
| `documentContent` | `Hash` | The content of the project description. |
| `favorite` | `Hash` | The user's favorite associated with this project. |
| `frequencyResolution` | `String` | The resolution of the reminder frequency. |
| `health` | `String` | The overall health of the project, derived from the most recent project update. |
| `healthUpdatedAt` | `Object` | The time at which the project health was last updated, typically when a new project update is posted. |
| `icon` | `String` | The icon of the project. |
| `id` | `String` | The unique identifier of the entity. |
| `identifier` | `String` | [Internal] The human-readable identifier of the project. |
| `inProgressScopeHistory` | `Float` | The number of in-progress estimation points at the end of each week since project creation. |
| `integrationsSettings` | `Hash` | Settings for all integrations associated with that project. |
| `issueCountHistory` | `Float` | The total number of issues in the project at the end of each week since project creation. |
| `labelIds` | `String` | The IDs of the project labels associated with this project. |
| `lastAppliedTemplate` | `Hash` | The last template that was applied to this project. |
| `lastUpdate` | `Hash` | The most recent status update posted for this project. |
| `lead` | `Hash` | The user who leads the project. |
| `leadTeam` | `Hash` | [Internal] The team that leads the project. |
| `microsoftTeamsChannelId` | `String` | The ID of the Microsoft Teams channel connected to the project, if any. |
| `name` | `String` | The name of the project. |
| `previousIdentifiers` | `String` | [Internal] Identifiers (default and custom) that this project has previously held. |
| `priority` | `Integer` | The priority of the project. |
| `priorityLabel` | `String` | The priority of the project as a label. |
| `prioritySortOrder` | `Float` | The sort order for the project within the workspace when ordered by priority. |
| `progress` | `Float` | The overall progress of the project. |
| `progressHistory` | `Object` | [INTERNAL] The progress history of the project, tracking issue completion over time. |
| `projectUpdateRemindersPausedUntilAt` | `Object` | The time until which project update reminders are paused. |
| `resourceCount` | `Integer` | The number of resources associated with the project, including documents, external links, and attachments. |
| `scope` | `Float` | The overall scope (total estimate points) of the project. |
| `scopeHistory` | `Float` | The total scope (estimation points) of the project at the end of each week since project creation. |
| `slackChannelId` | `String` | The ID of the Slack channel connected to the project, if any. |
| `slugId` | `String` | The project's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `Float` | The sort order for the project within the workspace. |
| `startDate` | `Object` | The estimated start date of the project. |
| `startDateResolution` | `String` | The resolution of the project's start date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `startedAt` | `Object` | The time at which the project was moved into a started status. |
| `status` | `Hash` | The current project status. |
| `targetDate` | `Object` | The estimated completion date of the project. |
| `targetDateResolution` | `String` | The resolution of the project's estimated completion date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `trashed` | `Boolean` | A flag that indicates whether the project is in the trash bin. |
| `updateReminderFrequency` | `Float` | The frequency at which to prompt for updates. |
| `updateReminderFrequencyInWeeks` | `Float` | The n-weekly frequency at which to prompt for updates. |
| `updateRemindersDay` | `String` | The day at which to prompt for updates. |
| `updateRemindersHour` | `Float` | The hour at which to prompt for updates. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |
| `url` | `String` | Project URL. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Project record (raises on error).
project = client.Project.load({ "id" => "project_id" })
```

#### Example: List

```ruby
# list returns an Array of Project records (raises on error).
projects = client.Project.list
```

#### Example: Create

```ruby
project = client.Project.create({
  "color" => "example_color", # String
  "completedIssueCountHistory" => 1, # Float
  "completedScopeHistory" => 1, # Float
  "createdAt" => "example_createdAt", # Object
  "currentProgress" => "example_currentProgress", # Object
  "description" => "example_description", # String
  "frequencyResolution" => "example_frequencyResolution", # String
  "id" => "example_id", # String
  "inProgressScopeHistory" => 1, # Float
  "issueCountHistory" => 1, # Float
  "labelIds" => "example_labelIds", # String
  "name" => "example_name", # String
  "previousIdentifiers" => "example_previousIdentifiers", # String
  "priority" => 1, # Integer
  "priorityLabel" => "example_priorityLabel", # String
  "prioritySortOrder" => 1, # Float
  "progress" => 1, # Float
  "progressHistory" => "example_progressHistory", # Object
  "resourceCount" => 1, # Integer
  "scope" => 1, # Float
  "scopeHistory" => 1, # Float
  "slugId" => "example_slugId", # String
  "sortOrder" => 1, # Float
  "updatedAt" => "example_updatedAt", # Object
  "url" => "example_url", # String
})
```


### ProjectLabel

Create an instance: `project_label = client.ProjectLabel`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `color` | `String` | The label's color as a HEX string (e.g., '#EB5757'). |
| `createdAt` | `Object` | The time at which the entity was created. |
| `creator` | `Hash` | The user who created the label. |
| `description` | `String` | The label's description. |
| `id` | `String` | The unique identifier of the entity. |
| `inheritedFrom` | `Hash` | [Internal] The original workspace or parent-team label that this label was inherited from. |
| `isGroup` | `Boolean` | Whether the label is a group. |
| `lastAppliedAt` | `Object` | The date when the label was last applied to an issue, project, or initiative. |
| `name` | `String` | The label's name. |
| `organization` | `Hash` | The workspace that the project label belongs to. |
| `parent` | `Hash` | The parent label group. |
| `retiredAt` | `Object` | [Internal] When the label was retired. |
| `retiredBy` | `Hash` | The user who retired the label. |
| `team` | `Hash` | [Internal] The team that the label is scoped to. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ProjectLabel record (raises on error).
project_label = client.ProjectLabel.load({ "id" => "project_label_id" })
```

#### Example: List

```ruby
# list returns an Array of ProjectLabel records (raises on error).
project_labels = client.ProjectLabel.list
```

#### Example: Create

```ruby
project_label = client.ProjectLabel.create({
  "color" => "example_color", # String
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "isGroup" => true, # Boolean
  "name" => "example_name", # String
  "updatedAt" => "example_updatedAt", # Object
})
```


### ProjectMilestone

Create an instance: `project_milestone = client.ProjectMilestone`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `currentProgress` | `Object` | [Internal] The current progress of the milestone, broken down by issue status category. |
| `description` | `String` | The project milestone's description in markdown format. |
| `descriptionState` | `String` | [Internal] The project milestone's description as YJS state. |
| `documentContent` | `Hash` | The rich-text content of the milestone description. |
| `id` | `String` | The unique identifier of the entity. |
| `name` | `String` | The name of the project milestone. |
| `progress` | `Float` | The progress % of the project milestone. |
| `progressHistory` | `Object` | [Internal] The progress history of the milestone, tracking issue completion over time. |
| `project` | `Hash` | The project that this milestone belongs to. |
| `sortOrder` | `Float` | The order of the milestone in relation to other milestones within a project. |
| `status` | `String` | The status of the project milestone. |
| `targetDate` | `Object` | The planned completion date of the milestone. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ProjectMilestone record (raises on error).
project_milestone = client.ProjectMilestone.load({ "id" => "project_milestone_id" })
```

#### Example: List

```ruby
# list returns an Array of ProjectMilestone records (raises on error).
project_milestones = client.ProjectMilestone.list
```

#### Example: Create

```ruby
project_milestone = client.ProjectMilestone.create({
  "createdAt" => "example_createdAt", # Object
  "currentProgress" => "example_currentProgress", # Object
  "id" => "example_id", # String
  "name" => "example_name", # String
  "progress" => 1, # Float
  "progressHistory" => "example_progressHistory", # Object
  "sortOrder" => 1, # Float
  "status" => "example_status", # String
  "updatedAt" => "example_updatedAt", # Object
})
```


### ProjectMilestoneMoveProjectTeam

Create an instance: `project_milestone_move_project_team = client.ProjectMilestoneMoveProjectTeam`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |
| `projectId` | `String` | The project id |
| `teamIds` | `String` | The team ids for the project |


### ProjectRelation

Create an instance: `project_relation = client.ProjectRelation`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `anchorType` | `String` | The type of anchor on the source project end of the relation, indicating whether it is anchored to the project itself or a specific milestone. |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `id` | `String` | The unique identifier of the entity. |
| `project` | `Hash` | The source project in the dependency relation. |
| `projectMilestone` | `Hash` | The specific milestone within the source project that the relation is anchored to. |
| `relatedAnchorType` | `String` | The type of anchor on the target project end of the relation, indicating whether it is anchored to the project itself or a specific milestone. |
| `relatedProject` | `Hash` | The target project in the dependency relation. |
| `relatedProjectMilestone` | `Hash` | The specific milestone within the target project that the relation is anchored to. |
| `type` | `String` | The type of dependency relationship from the project to the related project (e.g., blocks). |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |
| `user` | `Hash` | The user who last created or modified the relation. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ProjectRelation record (raises on error).
project_relation = client.ProjectRelation.load({ "id" => "project_relation_id" })
```

#### Example: List

```ruby
# list returns an Array of ProjectRelation records (raises on error).
project_relations = client.ProjectRelation.list
```

#### Example: Create

```ruby
project_relation = client.ProjectRelation.create({
  "anchorType" => "example_anchorType", # String
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "relatedAnchorType" => "example_relatedAnchorType", # String
  "type" => "example_type", # String
  "updatedAt" => "example_updatedAt", # Object
})
```


### ProjectSearchResult

Create an instance: `project_search_result = client.ProjectSearchResult`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `autoArchivedAt` | `Object` | The time at which the project was automatically archived by the auto-pruning process. |
| `canceledAt` | `Object` | The time at which the project was moved into a canceled status. |
| `color` | `String` | The project's color as a HEX string. |
| `completedAt` | `Object` | The time at which the project was moved into a completed status. |
| `completedIssueCountHistory` | `Float` | The number of completed issues in the project at the end of each week since project creation. |
| `completedScopeHistory` | `Float` | The number of completed estimation points at the end of each week since project creation. |
| `content` | `String` | The project's content in markdown format. |
| `contentState` | `String` | [Internal] The project's content as YJS state. |
| `convertedFromIssue` | `Hash` | The issue that was converted into this project. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `creator` | `Hash` | The user who created the project. |
| `currentProgress` | `Object` | [INTERNAL] The current progress of the project, broken down by issue status category. |
| `description` | `String` | The short description of the project. |
| `documentContent` | `Hash` | The content of the project description. |
| `favorite` | `Hash` | The user's favorite associated with this project. |
| `frequencyResolution` | `String` | The resolution of the reminder frequency. |
| `health` | `String` | The overall health of the project, derived from the most recent project update. |
| `healthUpdatedAt` | `Object` | The time at which the project health was last updated, typically when a new project update is posted. |
| `icon` | `String` | The icon of the project. |
| `id` | `String` | The unique identifier of the entity. |
| `identifier` | `String` | [Internal] The human-readable identifier of the project. |
| `inProgressScopeHistory` | `Float` | The number of in-progress estimation points at the end of each week since project creation. |
| `integrationsSettings` | `Hash` | Settings for all integrations associated with that project. |
| `issueCountHistory` | `Float` | The total number of issues in the project at the end of each week since project creation. |
| `labelIds` | `String` | The IDs of the project labels associated with this project. |
| `lastAppliedTemplate` | `Hash` | The last template that was applied to this project. |
| `lastUpdate` | `Hash` | The most recent status update posted for this project. |
| `lead` | `Hash` | The user who leads the project. |
| `leadTeam` | `Hash` | [Internal] The team that leads the project. |
| `metadata` | `Object` | Metadata related to search result. |
| `microsoftTeamsChannelId` | `String` | The ID of the Microsoft Teams channel connected to the project, if any. |
| `name` | `String` | The name of the project. |
| `previousIdentifiers` | `String` | [Internal] Identifiers (default and custom) that this project has previously held. |
| `priority` | `Integer` | The priority of the project. |
| `priorityLabel` | `String` | The priority of the project as a label. |
| `prioritySortOrder` | `Float` | The sort order for the project within the workspace when ordered by priority. |
| `progress` | `Float` | The overall progress of the project. |
| `progressHistory` | `Object` | [INTERNAL] The progress history of the project, tracking issue completion over time. |
| `projectUpdateRemindersPausedUntilAt` | `Object` | The time until which project update reminders are paused. |
| `resourceCount` | `Integer` | The number of resources associated with the project, including documents, external links, and attachments. |
| `scope` | `Float` | The overall scope (total estimate points) of the project. |
| `scopeHistory` | `Float` | The total scope (estimation points) of the project at the end of each week since project creation. |
| `slackChannelId` | `String` | The ID of the Slack channel connected to the project, if any. |
| `slugId` | `String` | The project's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `Float` | The sort order for the project within the workspace. |
| `startDate` | `Object` | The estimated start date of the project. |
| `startDateResolution` | `String` | The resolution of the project's start date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `startedAt` | `Object` | The time at which the project was moved into a started status. |
| `status` | `Hash` | The current project status. |
| `targetDate` | `Object` | The estimated completion date of the project. |
| `targetDateResolution` | `String` | The resolution of the project's estimated completion date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `trashed` | `Boolean` | A flag that indicates whether the project is in the trash bin. |
| `updateReminderFrequency` | `Float` | The frequency at which to prompt for updates. |
| `updateReminderFrequencyInWeeks` | `Float` | The n-weekly frequency at which to prompt for updates. |
| `updateRemindersDay` | `String` | The day at which to prompt for updates. |
| `updateRemindersHour` | `Float` | The hour at which to prompt for updates. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |
| `url` | `String` | Project URL. |

#### Example: List

```ruby
# list returns an Array of ProjectSearchResult records (raises on error).
project_search_results = client.ProjectSearchResult.list
```


### ProjectStatus

Create an instance: `project_status = client.ProjectStatus`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `color` | `String` | The color of the status as a HEX string, used for display in the UI. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `description` | `String` | Description of the status. |
| `id` | `String` | The unique identifier of the entity. |
| `indefinite` | `Boolean` | Whether a project can remain in this status indefinitely. |
| `inheritedFrom` | `Hash` | [Internal] The original workspace or parent-team status that this status was inherited from. |
| `name` | `String` | The name of the status. |
| `position` | `Float` | The position of the status within its type group in the workspace's project flow. |
| `team` | `Hash` | [Internal] The team that the status is scoped to. |
| `type` | `String` | The category type of the project status (e.g., backlog, planned, started, paused, completed, canceled). |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ProjectStatus record (raises on error).
project_status = client.ProjectStatus.load({ "id" => "project_status_id" })
```

#### Example: List

```ruby
# list returns an Array of ProjectStatus records (raises on error).
project_statuss = client.ProjectStatus.list
```

#### Example: Create

```ruby
project_status = client.ProjectStatus.create({
  "color" => "example_color", # String
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "indefinite" => true, # Boolean
  "name" => "example_name", # String
  "position" => 1, # Float
  "type" => "example_type", # String
  "updatedAt" => "example_updatedAt", # Object
})
```


### ProjectUpdate

Create an instance: `project_update = client.ProjectUpdate`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `body` | `String` | The update content in markdown format. |
| `bodyData` | `String` | [Internal] The content of the update as a Prosemirror document. |
| `commentCount` | `Integer` | Number of comments associated with the project update. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `diff` | `Object` | The diff between the current update and the previous one. |
| `diffMarkdown` | `String` | The diff between the current update and the previous one, formatted as markdown. |
| `editedAt` | `Object` | The time the update was edited. |
| `health` | `String` | The health of the project at the time this update was posted. |
| `id` | `String` | The unique identifier of the entity. |
| `infoSnapshot` | `Object` | [Internal] A snapshot of project properties at the time the update was posted, including team, milestone, and issue statistics. |
| `isDiffHidden` | `Boolean` | Whether the diff between this update and the previous one should be hidden in the UI. |
| `isStale` | `Boolean` | Whether the project update is stale. |
| `project` | `Hash` | The project that this status update was posted to. |
| `reactionData` | `Object` | Emoji reaction summary, grouped by emoji type. |
| `shortSummary` | `String` | A short AI-generated summary of the project update. |
| `slugId` | `String` | The update's unique URL slug. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |
| `url` | `String` | The URL to the project update. |
| `user` | `Hash` | The user who wrote the update. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ProjectUpdate record (raises on error).
project_update = client.ProjectUpdate.load({ "id" => "project_update_id" })
```

#### Example: List

```ruby
# list returns an Array of ProjectUpdate records (raises on error).
project_updates = client.ProjectUpdate.list
```

#### Example: Create

```ruby
project_update = client.ProjectUpdate.create({
  "body" => "example_body", # String
  "bodyData" => "example_bodyData", # String
  "commentCount" => 1, # Integer
  "createdAt" => "example_createdAt", # Object
  "health" => "example_health", # String
  "id" => "example_id", # String
  "isDiffHidden" => true, # Boolean
  "isStale" => true, # Boolean
  "reactionData" => "example_reactionData", # Object
  "slugId" => "example_slugId", # String
  "updatedAt" => "example_updatedAt", # Object
  "url" => "example_url", # String
})
```


### PushSubscription

Create an instance: `push_subscription = client.PushSubscription`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `id` | `String` | The unique identifier of the entity. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |

#### Example: Create

```ruby
push_subscription = client.PushSubscription.create({
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "updatedAt" => "example_updatedAt", # Object
})
```


### Reaction

Create an instance: `reaction = client.Reaction`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `comment` | `Hash` | The comment that the reaction is associated with. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `emoji` | `String` | The name of the emoji used for this reaction. |
| `externalUser` | `Hash` | The external user that created the reaction through an integration. |
| `id` | `String` | The unique identifier of the entity. |
| `initiativeUpdate` | `Hash` | The initiative update that the reaction is associated with. |
| `issue` | `Hash` | The issue that the reaction is associated with. |
| `post` | `Hash` | The post that the reaction is associated with. |
| `projectUpdate` | `Hash` | The project update that the reaction is associated with. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |
| `user` | `Hash` | The workspace user that created the reaction. |

#### Example: Create

```ruby
reaction = client.Reaction.create({
  "createdAt" => "example_createdAt", # Object
  "emoji" => "example_emoji", # String
  "id" => "example_id", # String
  "updatedAt" => "example_updatedAt", # Object
})
```


### Release

Create an instance: `release = client.Release`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `autoArchivedAt` | `Object` | The time at which the release was automatically archived by the auto pruning process. |
| `canceledAt` | `Object` | The time at which the release was canceled. |
| `commitSha` | `String` | The Git commit SHA associated with this release. |
| `completedAt` | `Object` | The time at which the release was completed. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `creator` | `Hash` | The user who created the release. |
| `currentProgress` | `Object` | The current progress summary for the release, including counts of issues by workflow state type (e.g., completed, in progress, unstarted). |
| `description` | `String` | The description of the release in plain text or markdown. |
| `id` | `String` | The unique identifier of the entity. |
| `issueCount` | `Integer` | Number of issues associated with the release. |
| `name` | `String` | The name of the release. |
| `pipeline` | `Hash` | The release pipeline that this release belongs to. |
| `progressHistory` | `Object` | The historical progress snapshots for the release, tracking how issue completion has evolved over time. |
| `releaseNote` | `Hash` | [Internal] The primary release note covering this release. |
| `slugId` | `String` | The release's unique URL slug, used to construct human-readable URLs for the release. |
| `stage` | `Hash` | The current stage of the release within its pipeline (e.g., Planned, In Progress, Completed, Canceled). |
| `startDate` | `Object` | The estimated start date of the release. |
| `startedAt` | `Object` | The time at which the release first entered a started stage. |
| `targetDate` | `Object` | The estimated completion date of the release. |
| `trashed` | `Boolean` | A flag that indicates whether the release is in the trash bin. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |
| `url` | `String` | The URL to the release page in the Linear app. |
| `version` | `String` | The version identifier for this release (e.g., 'v1.2.3' or a short commit hash). |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Release record (raises on error).
release = client.Release.load({ "id" => "release_id" })
```

#### Example: List

```ruby
# list returns an Array of Release records (raises on error).
releases = client.Release.list
```

#### Example: Create

```ruby
release = client.Release.create({
  "createdAt" => "example_createdAt", # Object
  "currentProgress" => "example_currentProgress", # Object
  "id" => "example_id", # String
  "issueCount" => 1, # Integer
  "name" => "example_name", # String
  "progressHistory" => "example_progressHistory", # Object
  "slugId" => "example_slugId", # String
  "updatedAt" => "example_updatedAt", # Object
  "url" => "example_url", # String
})
```


### ReleaseNote

Create an instance: `release_note = client.ReleaseNote`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `documentContent` | `Hash` | Document content backing the release note body. |
| `firstRelease` | `Hash` | The earliest release covered by this note. |
| `generationStatus` | `String` | Generation status when these release notes are being auto-generated: `pending` while the LLM call is running, `completed` once it lands. |
| `id` | `String` | The unique identifier of the entity. |
| `lastRelease` | `Hash` | The most recent release covered by this note. |
| `pipeline` | `Hash` | The release pipeline that this note belongs to. |
| `releaseCount` | `Integer` | The number of releases covered by this note. |
| `slugId` | `String` | The release note's unique URL slug, used to construct human-readable URLs for the note. |
| `title` | `String` | User-supplied title for the release note. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |
| `url` | `String` | The URL to the release note page in the Linear app. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ReleaseNote record (raises on error).
release_note = client.ReleaseNote.load({ "id" => "release_note_id" })
```

#### Example: List

```ruby
# list returns an Array of ReleaseNote records (raises on error).
release_notes = client.ReleaseNote.list
```

#### Example: Create

```ruby
release_note = client.ReleaseNote.create({
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "releaseCount" => 1, # Integer
  "slugId" => "example_slugId", # String
  "updatedAt" => "example_updatedAt", # Object
  "url" => "example_url", # String
})
```


### ReleasePipeline

Create an instance: `release_pipeline = client.ReleasePipeline`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approximateReleaseCount` | `Integer` | The approximate number of non-archived releases in this pipeline. |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `autoGenerateReleaseNotesOnCompletion` | `Boolean` | Whether to automatically generate a release note when a release is completed. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `id` | `String` | The unique identifier of the entity. |
| `includePathPatterns` | `String` | Glob patterns to filter commits by file path. |
| `isProduction` | `Boolean` | Whether this pipeline targets a production environment. |
| `latestReleaseNote` | `Hash` | The release note in this pipeline whose covered range ends with the most recent release. |
| `name` | `String` | The name of the pipeline. |
| `releaseNoteTemplate` | `Hash` | The document template used to define the release notes format for this pipeline. |
| `rolloverIssuesOnCompletion` | `Boolean` | Whether completing a scheduled release moves its open issues to the next release. |
| `slugId` | `String` | The pipeline's unique slug identifier, used in URLs and for lookup by human-readable identifier instead of UUID. |
| `trashed` | `Boolean` | A flag that indicates whether the pipeline is in the trash bin. |
| `type` | `String` | The type of the pipeline, which determines how releases are created and managed. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |
| `url` | `String` | The URL to the release pipeline's releases list in the Linear app. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ReleasePipeline record (raises on error).
release_pipeline = client.ReleasePipeline.load({ "id" => "release_pipeline_id" })
```

#### Example: List

```ruby
# list returns an Array of ReleasePipeline records (raises on error).
release_pipelines = client.ReleasePipeline.list
```

#### Example: Create

```ruby
release_pipeline = client.ReleasePipeline.create({
  "approximateReleaseCount" => 1, # Integer
  "autoGenerateReleaseNotesOnCompletion" => true, # Boolean
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "includePathPatterns" => "example_includePathPatterns", # String
  "isProduction" => true, # Boolean
  "name" => "example_name", # String
  "rolloverIssuesOnCompletion" => true, # Boolean
  "slugId" => "example_slugId", # String
  "type" => "example_type", # String
  "updatedAt" => "example_updatedAt", # Object
  "url" => "example_url", # String
})
```


### ReleaseStage

Create an instance: `release_stage = client.ReleaseStage`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `color` | `String` | The display color of the stage as a HEX string (e.g., '#0f783c'), used for visual representation in the UI. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `frozen` | `Boolean` | Whether this stage is frozen. |
| `id` | `String` | The unique identifier of the entity. |
| `name` | `String` | The name of the stage. |
| `pipeline` | `Hash` | The release pipeline that this stage belongs to. |
| `position` | `Float` | The position of the stage within its pipeline, used for ordering stages in the UI. |
| `type` | `String` | The lifecycle type of the stage (planned, started, completed, or canceled). |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ReleaseStage record (raises on error).
release_stage = client.ReleaseStage.load({ "id" => "release_stage_id" })
```

#### Example: List

```ruby
# list returns an Array of ReleaseStage records (raises on error).
release_stages = client.ReleaseStage.list
```

#### Example: Create

```ruby
release_stage = client.ReleaseStage.create({
  "color" => "example_color", # String
  "createdAt" => "example_createdAt", # Object
  "frozen" => true, # Boolean
  "id" => "example_id", # String
  "name" => "example_name", # String
  "position" => 1, # Float
  "type" => "example_type", # String
  "updatedAt" => "example_updatedAt", # Object
})
```


### Roadmap

Create an instance: `roadmap = client.Roadmap`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `color` | `String` | The roadmap's color. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `creator` | `Hash` | The user who created the roadmap. |
| `description` | `String` | The description of the roadmap. |
| `id` | `String` | The unique identifier of the entity. |
| `name` | `String` | The name of the roadmap. |
| `organization` | `Hash` | The workspace of the roadmap. |
| `owner` | `Hash` | The user who owns the roadmap. |
| `slugId` | `String` | The roadmap's unique URL slug. |
| `sortOrder` | `Float` | The sort order of the roadmap within the workspace. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |
| `url` | `String` | The canonical url for the roadmap. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Roadmap record (raises on error).
roadmap = client.Roadmap.load({ "id" => "roadmap_id" })
```

#### Example: List

```ruby
# list returns an Array of Roadmap records (raises on error).
roadmaps = client.Roadmap.list
```

#### Example: Create

```ruby
roadmap = client.Roadmap.create({
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "name" => "example_name", # String
  "slugId" => "example_slugId", # String
  "sortOrder" => 1, # Float
  "updatedAt" => "example_updatedAt", # Object
  "url" => "example_url", # String
})
```


### RoadmapToProject

Create an instance: `roadmap_to_project = client.RoadmapToProject`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `id` | `String` | The unique identifier of the entity. |
| `project` | `Hash` | The project that the roadmap is associated with. |
| `roadmap` | `Hash` | The roadmap that the project is associated with. |
| `sortOrder` | `String` | The sort order of the project within the roadmap. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the RoadmapToProject record (raises on error).
roadmap_to_project = client.RoadmapToProject.load({ "id" => "roadmap_to_project_id" })
```

#### Example: List

```ruby
# list returns an Array of RoadmapToProject records (raises on error).
roadmap_to_projects = client.RoadmapToProject.list
```

#### Example: Create

```ruby
roadmap_to_project = client.RoadmapToProject.create({
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "sortOrder" => "example_sortOrder", # String
  "updatedAt" => "example_updatedAt", # Object
})
```


### SlaConfiguration

Create an instance: `sla_configuration = client.SlaConfiguration`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conditions` | `Object` | The workflow conditions that determine when this SLA rule applies. |
| `id` | `String` | The identifier of the SLA rule. |
| `name` | `String` | The name of the SLA rule. |
| `removesSla` | `Boolean` | Whether the rule removes an SLA instead of setting one. |
| `sla` | `Float` | The SLA value configured by the rule, expressed in milliseconds or business days depending on the day-count type. |
| `slaType` | `String` | The SLA type used when the rule sets an SLA. |
| `startMode` | `String` | When SLA timing begins. |

#### Example: List

```ruby
# list returns an Array of SlaConfiguration records (raises on error).
sla_configurations = client.SlaConfiguration.list
```


### SsoUrlFromEmailResponse

Create an instance: `sso_url_from_email_response = client.SsoUrlFromEmailResponse`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `samlSsoUrl` | `String` | SAML SSO sign-in URL. |
| `success` | `Boolean` | Whether the operation was successful. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the SsoUrlFromEmailResponse record (raises on error).
sso_url_from_email_response = client.SsoUrlFromEmailResponse.load({ "email" => "email", "type" => "type" })
```


### Team

Create an instance: `team = client.Team`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activeCycle` | `Hash` | Team's currently active cycle. |
| `aiDiscussionSummariesEnabled` | `Boolean` | Whether to enable AI discussion summaries for issues in this team. |
| `aiThreadSummariesEnabled` | `Boolean` | Whether to enable resolved thread AI summaries. |
| `allMembersCanJoin` | `Boolean` | Whether all members in the workspace can join the team. |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `autoArchivePeriod` | `Float` | Period after which automatically closed, completed, and duplicate issues are automatically archived in months. |
| `autoCloseChildIssues` | `Boolean` | Whether child issues should automatically close when their parent issue is closed |
| `autoCloseParentIssues` | `Boolean` | Whether parent issues should automatically close when all child issues are closed |
| `autoClosePeriod` | `Float` | Period after which issues are automatically closed in months. |
| `autoCloseStateId` | `String` | The canceled workflow state which auto closed issues will be set to. |
| `color` | `String` | The team's color. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `currentProgress` | `Object` | [Internal] The current progress of the team. |
| `cycleCalenderUrl` | `String` | Calendar feed URL (iCal) for cycles. |
| `cycleCooldownTime` | `Float` | The cooldown time after each cycle in weeks. |
| `cycleDuration` | `Float` | The duration of each cycle in weeks. |
| `cycleIssueAutoAssignCompleted` | `Boolean` | Auto assign completed issues to current cycle. |
| `cycleIssueAutoAssignStarted` | `Boolean` | Auto assign started issues to current cycle. |
| `cycleLockToActive` | `Boolean` | Auto assign issues to current cycle if in active status. |
| `cycleStartDay` | `Float` | The day of the week that a new cycle starts (0 = Sunday, 1 = Monday, ..., 6 = Saturday). |
| `cyclesEnabled` | `Boolean` | Whether the team uses cycles for sprint-style issue management. |
| `defaultIssueEstimate` | `Float` | What to use as a default estimate for unestimated issues. |
| `defaultIssueState` | `Hash` | The default workflow state into which issues are set when they are opened by team members. |
| `defaultProjectTemplate` | `Hash` | The default template to use for new projects created for the team. |
| `defaultTemplateForMembers` | `Hash` | The default template to use for new issues created by members of the team. |
| `defaultTemplateForNonMembers` | `Hash` | The default template to use for new issues created by non-members of the team. |
| `description` | `String` | The team's description. |
| `displayName` | `String` | The name of the team including its parent team name if it has one. |
| `groupIssueHistory` | `Boolean` | Whether to group recent issue history entries. |
| `icon` | `String` | The icon of the team. |
| `id` | `String` | The unique identifier of the entity. |
| `inheritIssueEstimation` | `Boolean` | Whether the team should inherit its estimation settings from its parent. |
| `inheritProjectStatuses` | `Boolean` | [Internal] Whether the team should inherit its project statuses from its parent team, or from the workspace when it has no parent. |
| `inheritSlackAutoCreateProjectChannel` | `Boolean` | [Internal] Whether the team should inherit its Slack auto-create project channel setting from its parent. |
| `inheritWorkflowStatuses` | `Boolean` | Whether the team should inherit its workflow statuses from its parent. |
| `initiativesEnabled` | `Boolean` | Whether team initiatives are enabled and shown in the team's sidebar. |
| `integrationsSettings` | `Hash` | Settings for all integrations associated with that team. |
| `issueCount` | `Integer` | The total number of issues in the team. |
| `issueEstimationAllowZero` | `Boolean` | Whether to allow zeros in issues estimates. |
| `issueEstimationExtended` | `Boolean` | Whether to add additional points to the estimate scale. |
| `issueEstimationType` | `String` | The issue estimation type to use. |
| `joinByDefault` | `Boolean` | [Internal] Whether new users should join this team by default. |
| `key` | `String` | The team's unique key, used as a prefix in issue identifiers (e.g., 'ENG' in 'ENG-123') and in URLs. |
| `ledInitiativeCount` | `Integer` | The number of initiatives led by this team that would be deleted along with it. |
| `name` | `String` | The team's name. |
| `organization` | `Hash` | The workspace that the team belongs to. |
| `parent` | `Hash` | The team's parent team. |
| `progressHistory` | `Object` | [Internal] The progress history of the team. |
| `requirePriorityToLeaveTriage` | `Boolean` | Whether an issue needs to have a priority set before leaving triage. |
| `restrictedBy` | `Hash` | [Internal] For restricted teams, the enclosing private team that forms the visibility boundary. |
| `restrictedById` | `String` | [Internal] The identifier of the enclosing private team that forms the visibility boundary for restricted teams. |
| `retiredAt` | `Object` | The time at which the team was retired. |
| `scimGroupName` | `String` | The SCIM group name for the team. |
| `scimManaged` | `Boolean` | Whether the team is managed by a SCIM integration. |
| `securitySettings` | `Object` | Security settings for the team, including role-based restrictions for issue sharing, label management, member management, template management, and agent skills. |
| `setIssueSortOrderOnStateChange` | `String` | Where to move issues when changing state. |
| `slackAutoCreateProjectChannel` | `Boolean` | [Internal] Whether to automatically create a Slack channel when a new project is created in this team. |
| `timezone` | `String` | The timezone of the team. |
| `triageEnabled` | `Boolean` | Whether triage mode is enabled for the team. |
| `triageIssueState` | `Hash` | The workflow state into which issues are set when they are opened by non-team members or integrations if triage is enabled. |
| `triageResponsibility` | `Hash` | Team's triage responsibility. |
| `upcomingCycleCount` | `Float` | How many upcoming cycles to create. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |
| `visibility` | `String` | The visibility of the team. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Team record (raises on error).
team = client.Team.load({ "id" => "team_id" })
```

#### Example: List

```ruby
# list returns an Array of Team records (raises on error).
teams = client.Team.list
```

#### Example: Create

```ruby
team = client.Team.create({
  "aiDiscussionSummariesEnabled" => true, # Boolean
  "aiThreadSummariesEnabled" => true, # Boolean
  "autoArchivePeriod" => 1, # Float
  "createdAt" => "example_createdAt", # Object
  "currentProgress" => "example_currentProgress", # Object
  "cycleCalenderUrl" => "example_cycleCalenderUrl", # String
  "cycleCooldownTime" => 1, # Float
  "cycleDuration" => 1, # Float
  "cycleIssueAutoAssignCompleted" => true, # Boolean
  "cycleIssueAutoAssignStarted" => true, # Boolean
  "cycleLockToActive" => true, # Boolean
  "cycleStartDay" => 1, # Float
  "cyclesEnabled" => true, # Boolean
  "defaultIssueEstimate" => 1, # Float
  "displayName" => "example_displayName", # String
  "groupIssueHistory" => true, # Boolean
  "id" => "example_id", # String
  "inheritIssueEstimation" => true, # Boolean
  "inheritProjectStatuses" => true, # Boolean
  "inheritSlackAutoCreateProjectChannel" => true, # Boolean
  "inheritWorkflowStatuses" => true, # Boolean
  "initiativesEnabled" => true, # Boolean
  "issueCount" => 1, # Integer
  "issueEstimationAllowZero" => true, # Boolean
  "issueEstimationExtended" => true, # Boolean
  "issueEstimationType" => "example_issueEstimationType", # String
  "key" => "example_key", # String
  "ledInitiativeCount" => 1, # Integer
  "name" => "example_name", # String
  "progressHistory" => "example_progressHistory", # Object
  "requirePriorityToLeaveTriage" => true, # Boolean
  "scimManaged" => true, # Boolean
  "securitySettings" => "example_securitySettings", # Object
  "setIssueSortOrderOnStateChange" => "example_setIssueSortOrderOnStateChange", # String
  "timezone" => "example_timezone", # String
  "triageEnabled" => true, # Boolean
  "upcomingCycleCount" => 1, # Float
  "updatedAt" => "example_updatedAt", # Object
  "visibility" => "example_visibility", # String
})
```


### TeamMembership

Create an instance: `team_membership = client.TeamMembership`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `id` | `String` | The unique identifier of the entity. |
| `owner` | `Boolean` | Whether the user is an owner of the team. |
| `sortOrder` | `Float` | The sort order of this team in the user's personal team list. |
| `team` | `Hash` | The team that the membership is associated with. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |
| `user` | `Hash` | The user that the membership is associated with. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the TeamMembership record (raises on error).
team_membership = client.TeamMembership.load({ "id" => "team_membership_id" })
```

#### Example: List

```ruby
# list returns an Array of TeamMembership records (raises on error).
team_memberships = client.TeamMembership.list
```

#### Example: Create

```ruby
team_membership = client.TeamMembership.create({
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "owner" => true, # Boolean
  "sortOrder" => 1, # Float
  "updatedAt" => "example_updatedAt", # Object
})
```


### Template

Create an instance: `template = client.Template`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `color` | `String` | The hex color of the template icon. |
| `content` | `String` | The template's content in markdown format: the body it pre-fills on the entity it creates. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `creator` | `Hash` | The user who created the template. |
| `description` | `String` | A description of what the template is used for. |
| `hasFormFields` | `Boolean` | [Internal] Whether the template has form fields |
| `icon` | `String` | The icon of the template, either a decorative icon type or an emoji string. |
| `id` | `String` | The unique identifier of the entity. |
| `inheritedFrom` | `Hash` | The parent team template this template was inherited from. |
| `lastAppliedAt` | `Object` | The date when the template was last applied to create or update an entity. |
| `lastUpdatedBy` | `Hash` | The user who last updated the template. |
| `name` | `String` | The name of the template. |
| `organization` | `Hash` | The workspace that owns this template. |
| `pipeline` | `Hash` | The release pipeline this template is bound to. |
| `sortOrder` | `Float` | The sort order of the template within the templates list. |
| `team` | `Hash` | The team that the template is associated with. |
| `templateData` | `Object` | The template data as a JSON-encoded string containing the pre-filled attributes for the entity type (e.g., issue fields, project configuration, or document content). |
| `type` | `String` | The entity type this template is for, such as 'issue', 'project', or 'document'. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Template record (raises on error).
template = client.Template.load({ "id" => "template_id" })
```

#### Example: List

```ruby
# list returns an Array of Template records (raises on error).
templates = client.Template.list
```

#### Example: Create

```ruby
template = client.Template.create({
  "createdAt" => "example_createdAt", # Object
  "hasFormFields" => true, # Boolean
  "id" => "example_id", # String
  "name" => "example_name", # String
  "sortOrder" => 1, # Float
  "templateData" => "example_templateData", # Object
  "type" => "example_type", # String
  "updatedAt" => "example_updatedAt", # Object
})
```


### TimeSchedule

Create an instance: `time_schedule = client.TimeSchedule`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `externalId` | `String` | The identifier of the external schedule. |
| `externalUrl` | `String` | The URL to the external schedule. |
| `id` | `String` | The unique identifier of the entity. |
| `integration` | `Hash` | The identifier of the Linear integration populating the schedule. |
| `name` | `String` | The name of the schedule. |
| `organization` | `Hash` | The workspace of the schedule. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the TimeSchedule record (raises on error).
time_schedule = client.TimeSchedule.load({ "id" => "time_schedule_id" })
```

#### Example: List

```ruby
# list returns an Array of TimeSchedule records (raises on error).
time_schedules = client.TimeSchedule.list
```

#### Example: Create

```ruby
time_schedule = client.TimeSchedule.create({
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "name" => "example_name", # String
  "updatedAt" => "example_updatedAt", # Object
})
```


### TriageResponsibility

Create an instance: `triage_responsibility = client.TriageResponsibility`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `String` | The action to take when an issue is added to triage. |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `currentUser` | `Hash` | The user currently responsible for triage. |
| `id` | `String` | The unique identifier of the entity. |
| `team` | `Hash` | The team to which the triage responsibility belongs to. |
| `timeSchedule` | `Hash` | The time schedule used for scheduling. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the TriageResponsibility record (raises on error).
triage_responsibility = client.TriageResponsibility.load({ "id" => "triage_responsibility_id" })
```

#### Example: List

```ruby
# list returns an Array of TriageResponsibility records (raises on error).
triage_responsibilitys = client.TriageResponsibility.list
```

#### Example: Create

```ruby
triage_responsibility = client.TriageResponsibility.create({
  "action" => "example_action", # String
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "updatedAt" => "example_updatedAt", # Object
})
```


### UploadFile

Create an instance: `upload_file = client.UploadFile`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assetUrl` | `String` | The permanent asset URL where the file will be accessible after upload. |
| `contentType` | `String` | The content type. |
| `filename` | `String` | The filename. |
| `metaData` | `Object` | Optional metadata associated with the upload, such as the related issue or comment ID. |
| `size` | `Integer` | The size of the uploaded file. |
| `uploadUrl` | `String` | The pre-signed URL to which the file should be uploaded via a PUT request. |

#### Example: Create

```ruby
upload_file = client.UploadFile.create({
  "content_type" => "example_content_type", # String
  "filename" => "example_filename", # String
  "size" => 1, # Integer
  "assetUrl" => "example_assetUrl", # String
  "contentType" => "example_contentType", # String
  "uploadUrl" => "example_uploadUrl", # String
})
```


### UsageAlert

Create an instance: `usage_alert = client.UsageAlert`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `id` | `String` | The unique identifier of the entity. |
| `metadata` | `Object` | Type-specific snapshot captured when the alert was triggered, keyed by the alert type — for example the credit balance and threshold for a lowBalance alert. |
| `resolvedAt` | `Object` | The time when the usage alert was resolved or archived. |
| `type` | `String` | The kind of usage alert that was triggered. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the UsageAlert record (raises on error).
usage_alert = client.UsageAlert.load({ "id" => "usage_alert_id" })
```

#### Example: List

```ruby
# list returns an Array of UsageAlert records (raises on error).
usage_alerts = client.UsageAlert.list
```


### User

Create an instance: `user = client.User`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `Boolean` | Whether the user account is active or disabled (suspended). |
| `admin` | `Boolean` | Whether the user is a workspace administrator. |
| `app` | `Boolean` | Whether the user is an app. |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `avatarBackgroundColor` | `String` | The background color of the avatar for users without set avatar. |
| `avatarUrl` | `String` | An URL to the user's avatar image. |
| `calendarHash` | `String` | [DEPRECATED] Hash for the user to be used in calendar URLs. |
| `canAccessAnyPublicTeam` | `Boolean` | Whether this user can access any public team in the workspace. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `createdIssueCount` | `Integer` | Number of issues created. |
| `description` | `String` | A short description of the user, such as their title or a brief bio. |
| `disableReason` | `String` | The reason why the user account is disabled. |
| `displayName` | `String` | The user's display (nick) name. |
| `email` | `String` | The user's email address. |
| `gitHubUserId` | `String` | The user's GitHub user ID. |
| `guest` | `Boolean` | Whether the user is a guest in the workspace and limited to accessing a subset of teams. |
| `hasGitHubCodeAccess` | `Boolean` | [Internal] Whether this user can access GitHub source code through Linear. |
| `id` | `String` | The unique identifier of the entity. |
| `identityProvider` | `Hash` | [INTERNAL] Identity provider the user is managed by. |
| `initials` | `String` | The initials of the user. |
| `isAssignable` | `Boolean` | Whether the user can be assigned to issues. |
| `isMe` | `Boolean` | Whether the user is the currently authenticated user. |
| `isMentionable` | `Boolean` | Whether the user is mentionable. |
| `lastSeen` | `Object` | The last time the user was seen online. |
| `name` | `String` | The user's full name. |
| `organization` | `Hash` | The workspace that the user belongs to. |
| `owner` | `Boolean` | Whether the user is a workspace owner, which is the highest permission level. |
| `statusEmoji` | `String` | The emoji representing the user's current status. |
| `statusLabel` | `String` | The text label of the user's current status. |
| `statusUntilAt` | `Object` | The date and time at which the user's current status should be automatically cleared. |
| `supportsAgentSessions` | `Boolean` | Whether this agent user supports agent sessions. |
| `timezone` | `String` | The local timezone of the user. |
| `title` | `String` | The user's job title. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |
| `url` | `String` | User's profile URL. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the User record (raises on error).
user = client.User.load({ "id" => "user_id" })
```

#### Example: List

```ruby
# list returns an Array of User records (raises on error).
users = client.User.list
```

#### Example: Create

```ruby
user = client.User.create({
  "active" => true, # Boolean
  "admin" => true, # Boolean
  "app" => true, # Boolean
  "avatarBackgroundColor" => "example_avatarBackgroundColor", # String
  "canAccessAnyPublicTeam" => true, # Boolean
  "createdAt" => "example_createdAt", # Object
  "createdIssueCount" => 1, # Integer
  "displayName" => "example_displayName", # String
  "email" => "example_email", # String
  "guest" => true, # Boolean
  "hasGitHubCodeAccess" => true, # Boolean
  "id" => "example_id", # String
  "initials" => "example_initials", # String
  "isAssignable" => true, # Boolean
  "isMe" => true, # Boolean
  "isMentionable" => true, # Boolean
  "name" => "example_name", # String
  "owner" => true, # Boolean
  "supportsAgentSessions" => true, # Boolean
  "updatedAt" => "example_updatedAt", # Object
  "url" => "example_url", # String
})
```


### UserSetting

Create an instance: `user_setting = client.UserSetting`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `autoAssignToSelf` | `Boolean` | Whether to auto-assign newly created issues to the current user by default. |
| `calendarHash` | `String` | A unique hash for the user, used to construct secure calendar subscription URLs. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `feedLastSeenTime` | `Object` | The user's last seen time for the pulse feed. |
| `feedSummarySchedule` | `String` | The user's preferred schedule for receiving feed summary digests. |
| `id` | `String` | The unique identifier of the entity. |
| `pullRequestMergeStrategyPreference` | `String` | [Internal] The user's preferred merge method for pull requests. |
| `showFullUserNames` | `Boolean` | Whether to show full user names instead of display names. |
| `subscribedToChangelog` | `Boolean` | Whether this user is subscribed to receive changelog emails about Linear product updates. |
| `subscribedToDPA` | `Boolean` | Whether this user is subscribed to receive Data Processing Agreement (DPA) related emails. |
| `subscribedToInviteAccepted` | `Boolean` | Whether this user is subscribed to receive email notifications when their workspace invitations are accepted. |
| `subscribedToPrivacyLegalUpdates` | `Boolean` | Whether this user is subscribed to receive emails about privacy policy and legal updates. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |
| `user` | `Hash` | The user that these settings belong to. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the UserSetting record (raises on error).
user_setting = client.UserSetting.load({ "id" => "user_setting_id" })
```

#### Example: Create

```ruby
user_setting = client.UserSetting.create({
  "category" => "example_category", # Object
  "channel" => "example_channel", # Object
  "subscribe" => true, # Boolean
  "autoAssignToSelf" => true, # Boolean
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "showFullUserNames" => true, # Boolean
  "subscribedToChangelog" => true, # Boolean
  "subscribedToDPA" => true, # Boolean
  "subscribedToInviteAccepted" => true, # Boolean
  "subscribedToPrivacyLegalUpdates" => true, # Boolean
  "updatedAt" => "example_updatedAt", # Object
})
```


### ViewPreference

Create an instance: `view_preference = client.ViewPreference`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `id` | `String` | The unique identifier of the entity. |
| `type` | `String` | The type of view preferences: "organization" for workspace-wide defaults or "user" for personal overrides. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |
| `viewType` | `String` | The type of view these preferences apply to, such as board, cycle, project, customView, myIssues, etc. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ViewPreference record (raises on error).
view_preference = client.ViewPreference.load({ "view_type" => "view_type" })
```

#### Example: Create

```ruby
view_preference = client.ViewPreference.create({
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "type" => "example_type", # String
  "updatedAt" => "example_updatedAt", # Object
  "viewType" => "example_viewType", # String
})
```


### Webhook

Create an instance: `webhook = client.Webhook`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allPublicTeams` | `Boolean` | Whether the webhook receives events from all public (non-private) teams in the organization, including teams created after the webhook was set up. |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `creator` | `Hash` | The user who created the webhook. |
| `enabled` | `Boolean` | Whether the webhook is enabled. |
| `id` | `String` | The unique identifier of the entity. |
| `label` | `String` | A human-readable label for the webhook, used for identification in the UI. |
| `resourceTypes` | `String` | The resource types this webhook is subscribed to (e.g., 'Issue', 'Comment', 'Project', 'Cycle'). |
| `secret` | `String` | A secret token used to sign webhook payloads with HMAC-SHA256, allowing the recipient to verify that the payload originated from Linear and was not tampered with. |
| `team` | `Hash` | The single team that the webhook is scoped to. |
| `teamIds` | `String` | [INTERNAL] An array of team IDs that the webhook is subscribed to. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |
| `url` | `String` | The destination URL where webhook payloads will be sent via HTTP POST. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Webhook record (raises on error).
webhook = client.Webhook.load({ "id" => "webhook_id" })
```

#### Example: List

```ruby
# list returns an Array of Webhook records (raises on error).
webhooks = client.Webhook.list
```

#### Example: Create

```ruby
webhook = client.Webhook.create({
  "allPublicTeams" => true, # Boolean
  "createdAt" => "example_createdAt", # Object
  "enabled" => true, # Boolean
  "id" => "example_id", # String
  "resourceTypes" => "example_resourceTypes", # String
  "updatedAt" => "example_updatedAt", # Object
})
```


### WebhookFailureEvent

Create an instance: `webhook_failure_event = client.WebhookFailureEvent`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `Object` | The time at which the entity was created. |
| `executionId` | `String` | A stable identifier for the webhook delivery attempt. |
| `httpStatus` | `Float` | The HTTP status code returned by the webhook recipient. |
| `id` | `String` | The unique identifier of the entity. |
| `responseOrError` | `String` | The HTTP response body returned by the recipient, or the error message if the request failed before receiving a response. |
| `url` | `String` | The URL that the webhook was trying to push to. |
| `webhook` | `Hash` | The webhook that this failure event is associated with. |

#### Example: List

```ruby
# list returns an Array of WebhookFailureEvent records (raises on error).
webhook_failure_events = client.WebhookFailureEvent.list
```


### WorkflowState

Create an instance: `workflow_state = client.WorkflowState`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Object` | The time at which the entity was archived. |
| `color` | `String` | The state's UI color as a HEX string. |
| `createdAt` | `Object` | The time at which the entity was created. |
| `description` | `String` | Description of the state. |
| `id` | `String` | The unique identifier of the entity. |
| `inheritedFrom` | `Hash` | The parent team's workflow state that this state was inherited from. |
| `name` | `String` | The state's human-readable name (e.g., 'In Progress', 'Done', 'Backlog'). |
| `position` | `Float` | The position of the state in the team's workflow. |
| `team` | `Hash` | The team that this workflow state belongs to. |
| `type` | `String` | The type of the state. |
| `updatedAt` | `Object` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the WorkflowState record (raises on error).
workflow_state = client.WorkflowState.load({ "id" => "workflow_state_id" })
```

#### Example: List

```ruby
# list returns an Array of WorkflowState records (raises on error).
workflow_states = client.WorkflowState.list
```

#### Example: Create

```ruby
workflow_state = client.WorkflowState.create({
  "color" => "example_color", # String
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "name" => "example_name", # String
  "position" => 1, # Float
  "type" => "example_type", # String
  "updatedAt" => "example_updatedAt", # Object
})
```

## Features

This SDK ships 8 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`debug`](#debug) | Request/response capture ring buffer for debugging |
| [`idempotency`](#idempotency) | Idempotency keys for safe retries of mutating operations |
| [`metrics`](#metrics) | Statistics capture: per-operation counters and latency |
| [`paging`](#paging) | Pagination signals for list operations |
| [`ratelimit`](#ratelimit) | Client-side rate limiting via a token bucket |
| [`retry`](#retry) | Automatic retry of transient failures with exponential backoff |
| [`test`](#test) | In-memory mock transport for testing without a live server |
| [`timeout`](#timeout) | Per-request timeout with transport abort |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### debug

Request/response capture ring buffer for debugging.

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

Set `feature.debug.active` to enable it, then override any of the options above.

### idempotency

Idempotency keys for safe retries of mutating operations.

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

Set `feature.idempotency.active` to enable it, then override any of the options above.

### metrics

Statistics capture: per-operation counters and latency.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.metrics.active` to enable it, then override any of the options above.

### paging

Pagination signals for list operations.

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

Set `feature.paging.active` to enable it, then override any of the options above.

### ratelimit

Client-side rate limiting via a token bucket.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Automatic retry of transient failures with exponential backoff.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Per-request timeout with transport abort.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a Ruby class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **DebugFeature**: Request/response capture ring buffer for debugging
- **IdempotencyFeature**: Idempotency keys for safe retries of mutating operations
- **MetricsFeature**: Statistics capture: per-operation counters and latency
- **PagingFeature**: Pagination signals for list operations
- **RatelimitFeature**: Client-side rate limiting via a token bucket
- **RetryFeature**: Automatic retry of transient failures with exponential backoff
- **TestFeature**: In-memory mock transport for testing without a live server
- **TimeoutFeature**: Per-request timeout with transport abort

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── Linear_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── schema.rb                  -- Generated option + entity specs
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`Linear_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```ruby
agentactivity = client.AgentActivity
agentactivity.list()

# agentactivity.data_get now returns the agentactivity data from the last list
# agentactivity.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
