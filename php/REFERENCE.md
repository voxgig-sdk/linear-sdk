# Linear PHP SDK Reference

Complete API reference for the Linear PHP SDK.


## LinearSDK

### Constructor

```php
require_once __DIR__ . '/linear_sdk.php';

$client = new LinearSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `LinearSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = LinearSDK::test();
```


### Instance Methods

#### `AccessKeyRelease($data = null)`

Create a new `AccessKeyReleaseEntity` instance. Pass `null` for no initial data.

#### `AccessKeyReleasePipeline($data = null)`

Create a new `AccessKeyReleasePipelineEntity` instance. Pass `null` for no initial data.

#### `AgentActivity($data = null)`

Create a new `AgentActivityEntity` instance. Pass `null` for no initial data.

#### `AgentSession($data = null)`

Create a new `AgentSessionEntity` instance. Pass `null` for no initial data.

#### `AgentSkill($data = null)`

Create a new `AgentSkillEntity` instance. Pass `null` for no initial data.

#### `Application($data = null)`

Create a new `ApplicationEntity` instance. Pass `null` for no initial data.

#### `Attachment($data = null)`

Create a new `AttachmentEntity` instance. Pass `null` for no initial data.

#### `AuditEntry($data = null)`

Create a new `AuditEntryEntity` instance. Pass `null` for no initial data.

#### `AuditEntryType($data = null)`

Create a new `AuditEntryTypeEntity` instance. Pass `null` for no initial data.

#### `AuthResolverResponse($data = null)`

Create a new `AuthResolverResponseEntity` instance. Pass `null` for no initial data.

#### `AuthenticationSessionResponse($data = null)`

Create a new `AuthenticationSessionResponseEntity` instance. Pass `null` for no initial data.

#### `Comment($data = null)`

Create a new `CommentEntity` instance. Pass `null` for no initial data.

#### `CreateOrJoinOrganizationResponse($data = null)`

Create a new `CreateOrJoinOrganizationResponseEntity` instance. Pass `null` for no initial data.

#### `CustomView($data = null)`

Create a new `CustomViewEntity` instance. Pass `null` for no initial data.

#### `Customer($data = null)`

Create a new `CustomerEntity` instance. Pass `null` for no initial data.

#### `CustomerNeed($data = null)`

Create a new `CustomerNeedEntity` instance. Pass `null` for no initial data.

#### `CustomerStatus($data = null)`

Create a new `CustomerStatusEntity` instance. Pass `null` for no initial data.

#### `CustomerTier($data = null)`

Create a new `CustomerTierEntity` instance. Pass `null` for no initial data.

#### `Cycle($data = null)`

Create a new `CycleEntity` instance. Pass `null` for no initial data.

#### `Diff($data = null)`

Create a new `DiffEntity` instance. Pass `null` for no initial data.

#### `Document($data = null)`

Create a new `DocumentEntity` instance. Pass `null` for no initial data.

#### `DocumentSearchResult($data = null)`

Create a new `DocumentSearchResultEntity` instance. Pass `null` for no initial data.

#### `EmailIntakeAddress($data = null)`

Create a new `EmailIntakeAddressEntity` instance. Pass `null` for no initial data.

#### `EmailUserAccountAuthChallengeResponse($data = null)`

Create a new `EmailUserAccountAuthChallengeResponseEntity` instance. Pass `null` for no initial data.

#### `Emoji($data = null)`

Create a new `EmojiEntity` instance. Pass `null` for no initial data.

#### `EntityExternalLink($data = null)`

Create a new `EntityExternalLinkEntity` instance. Pass `null` for no initial data.

#### `ExternalUser($data = null)`

Create a new `ExternalUserEntity` instance. Pass `null` for no initial data.

#### `Favorite($data = null)`

Create a new `FavoriteEntity` instance. Pass `null` for no initial data.

#### `GitAutomationState($data = null)`

Create a new `GitAutomationStateEntity` instance. Pass `null` for no initial data.

#### `GitAutomationTargetBranch($data = null)`

Create a new `GitAutomationTargetBranchEntity` instance. Pass `null` for no initial data.

#### `GitHubIntegrationConnectDetail($data = null)`

Create a new `GitHubIntegrationConnectDetailEntity` instance. Pass `null` for no initial data.

#### `Initiative($data = null)`

Create a new `InitiativeEntity` instance. Pass `null` for no initial data.

#### `InitiativeLabel($data = null)`

Create a new `InitiativeLabelEntity` instance. Pass `null` for no initial data.

#### `InitiativeLeadTeamChangeImpact($data = null)`

Create a new `InitiativeLeadTeamChangeImpactEntity` instance. Pass `null` for no initial data.

#### `InitiativeRelation($data = null)`

Create a new `InitiativeRelationEntity` instance. Pass `null` for no initial data.

#### `InitiativeToProject($data = null)`

Create a new `InitiativeToProjectEntity` instance. Pass `null` for no initial data.

#### `InitiativeUpdate($data = null)`

Create a new `InitiativeUpdateEntity` instance. Pass `null` for no initial data.

#### `Integration($data = null)`

Create a new `IntegrationEntity` instance. Pass `null` for no initial data.

#### `IntegrationTemplate($data = null)`

Create a new `IntegrationTemplateEntity` instance. Pass `null` for no initial data.

#### `IntegrationsSetting($data = null)`

Create a new `IntegrationsSettingEntity` instance. Pass `null` for no initial data.

#### `Issue($data = null)`

Create a new `IssueEntity` instance. Pass `null` for no initial data.

#### `IssueImport($data = null)`

Create a new `IssueImportEntity` instance. Pass `null` for no initial data.

#### `IssueLabel($data = null)`

Create a new `IssueLabelEntity` instance. Pass `null` for no initial data.

#### `IssuePriorityValue($data = null)`

Create a new `IssuePriorityValueEntity` instance. Pass `null` for no initial data.

#### `IssueRelation($data = null)`

Create a new `IssueRelationEntity` instance. Pass `null` for no initial data.

#### `IssueSearchResult($data = null)`

Create a new `IssueSearchResultEntity` instance. Pass `null` for no initial data.

#### `IssueToRelease($data = null)`

Create a new `IssueToReleaseEntity` instance. Pass `null` for no initial data.

#### `LogoutResponse($data = null)`

Create a new `LogoutResponseEntity` instance. Pass `null` for no initial data.

#### `Notification($data = null)`

Create a new `NotificationEntity` instance. Pass `null` for no initial data.

#### `NotificationSubscription($data = null)`

Create a new `NotificationSubscriptionEntity` instance. Pass `null` for no initial data.

#### `OAuthApplication($data = null)`

Create a new `OAuthApplicationEntity` instance. Pass `null` for no initial data.

#### `Organization($data = null)`

Create a new `OrganizationEntity` instance. Pass `null` for no initial data.

#### `OrganizationDomain($data = null)`

Create a new `OrganizationDomainEntity` instance. Pass `null` for no initial data.

#### `OrganizationInvite($data = null)`

Create a new `OrganizationInviteEntity` instance. Pass `null` for no initial data.

#### `OrganizationMeta($data = null)`

Create a new `OrganizationMetaEntity` instance. Pass `null` for no initial data.

#### `PasskeyLoginStartResponse($data = null)`

Create a new `PasskeyLoginStartResponseEntity` instance. Pass `null` for no initial data.

#### `Project($data = null)`

Create a new `ProjectEntity` instance. Pass `null` for no initial data.

#### `ProjectLabel($data = null)`

Create a new `ProjectLabelEntity` instance. Pass `null` for no initial data.

#### `ProjectMilestone($data = null)`

Create a new `ProjectMilestoneEntity` instance. Pass `null` for no initial data.

#### `ProjectMilestoneMoveProjectTeam($data = null)`

Create a new `ProjectMilestoneMoveProjectTeamEntity` instance. Pass `null` for no initial data.

#### `ProjectRelation($data = null)`

Create a new `ProjectRelationEntity` instance. Pass `null` for no initial data.

#### `ProjectSearchResult($data = null)`

Create a new `ProjectSearchResultEntity` instance. Pass `null` for no initial data.

#### `ProjectStatus($data = null)`

Create a new `ProjectStatusEntity` instance. Pass `null` for no initial data.

#### `ProjectUpdate($data = null)`

Create a new `ProjectUpdateEntity` instance. Pass `null` for no initial data.

#### `PushSubscription($data = null)`

Create a new `PushSubscriptionEntity` instance. Pass `null` for no initial data.

#### `Reaction($data = null)`

Create a new `ReactionEntity` instance. Pass `null` for no initial data.

#### `Release($data = null)`

Create a new `ReleaseEntity` instance. Pass `null` for no initial data.

#### `ReleaseNote($data = null)`

Create a new `ReleaseNoteEntity` instance. Pass `null` for no initial data.

#### `ReleasePipeline($data = null)`

Create a new `ReleasePipelineEntity` instance. Pass `null` for no initial data.

#### `ReleaseStage($data = null)`

Create a new `ReleaseStageEntity` instance. Pass `null` for no initial data.

#### `Roadmap($data = null)`

Create a new `RoadmapEntity` instance. Pass `null` for no initial data.

#### `RoadmapToProject($data = null)`

Create a new `RoadmapToProjectEntity` instance. Pass `null` for no initial data.

#### `SlaConfiguration($data = null)`

Create a new `SlaConfigurationEntity` instance. Pass `null` for no initial data.

#### `SsoUrlFromEmailResponse($data = null)`

Create a new `SsoUrlFromEmailResponseEntity` instance. Pass `null` for no initial data.

#### `Team($data = null)`

Create a new `TeamEntity` instance. Pass `null` for no initial data.

#### `TeamMembership($data = null)`

Create a new `TeamMembershipEntity` instance. Pass `null` for no initial data.

#### `Template($data = null)`

Create a new `TemplateEntity` instance. Pass `null` for no initial data.

#### `TimeSchedule($data = null)`

Create a new `TimeScheduleEntity` instance. Pass `null` for no initial data.

#### `TriageResponsibility($data = null)`

Create a new `TriageResponsibilityEntity` instance. Pass `null` for no initial data.

#### `UploadFile($data = null)`

Create a new `UploadFileEntity` instance. Pass `null` for no initial data.

#### `UsageAlert($data = null)`

Create a new `UsageAlertEntity` instance. Pass `null` for no initial data.

#### `User($data = null)`

Create a new `UserEntity` instance. Pass `null` for no initial data.

#### `UserSetting($data = null)`

Create a new `UserSettingEntity` instance. Pass `null` for no initial data.

#### `ViewPreference($data = null)`

Create a new `ViewPreferenceEntity` instance. Pass `null` for no initial data.

#### `Webhook($data = null)`

Create a new `WebhookEntity` instance. Pass `null` for no initial data.

#### `WebhookFailureEvent($data = null)`

Create a new `WebhookFailureEventEntity` instance. Pass `null` for no initial data.

#### `WorkflowState($data = null)`

Create a new `WorkflowStateEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): LinearUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## AccessKeyReleaseEntity

```php
$access_key_release = $client->AccessKeyRelease();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the release was archived. |
| `commitSha` | `string` | No | The Git commit SHA associated with the release. |
| `completedAt` | `mixed` | No | The time at which the release was completed. |
| `createdAt` | `mixed` | Yes | The time at which the release was created. |
| `id` | `string` | Yes | The unique identifier of the release. |
| `name` | `string` | Yes | The name of the release. |
| `url` | `string` | Yes | The URL to the release page in the Linear app. |
| `version` | `string` | No | The version identifier for this release. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AccessKeyRelease()->create([
  "createdAt" => null, // mixed
  "id" => null, // string
  "name" => null, // string
  "url" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AccessKeyRelease()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AccessKeyRelease()->load(["id" => "access_key_release_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AccessKeyReleaseEntity`

Create a new `AccessKeyReleaseEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AccessKeyReleasePipelineEntity

```php
$access_key_release_pipeline = $client->AccessKeyReleasePipeline();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The unique identifier of the release pipeline. |
| `includePathPatterns` | `string` | Yes | Glob patterns used to filter commits by changed file path. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AccessKeyReleasePipeline()->load(["id" => "access_key_release_pipeline_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AccessKeyReleasePipelineEntity`

Create a new `AccessKeyReleasePipelineEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AgentActivityEntity

```php
$agent_activity = $client->AgentActivity();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentSession` | `array` | No | The agent session this activity belongs to. |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `contextualMetadata` | `mixed` | No | [Internal] Metadata about user-provided contextual information for this agent activity. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `ephemeral` | `bool` | Yes | Whether the activity is ephemeral, and should disappear after the next agent activity. |
| `executionSkippedReason` | `string` | No | [Internal] The reason this activity was persisted without being sent to the agent runtime. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `queued` | `bool` | Yes | [Internal] Whether this activity is queued for later processing. |
| `sentAt` | `mixed` | No | [Internal] The time at which the prompt actually entered the conversation. |
| `signal` | `string` | No | An optional modifier that provides additional instructions on how the activity should be interpreted. |
| `signalMetadata` | `mixed` | No | Metadata about this agent activity's signal. |
| `sourceComment` | `array` | No | The source comment this activity is linked to. |
| `sourceMetadata` | `mixed` | No | Metadata about the external source that created this agent activity. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `array` | No | The user who created this agent activity. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AgentActivity()->create([
  "createdAt" => null, // mixed
  "ephemeral" => null, // bool
  "id" => null, // string
  "queued" => null, // bool
  "updatedAt" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AgentActivity()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AgentActivity()->load(["id" => "agent_activity_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->AgentActivity()->update([
  "id" => "agent_activity_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AgentActivityEntity`

Create a new `AgentActivityEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AgentSessionEntity

```php
$agent_session = $client->AgentSession();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `appUser` | `array` | No | The agent user that is associated with this agent session. |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `codingHarnessModelLabel` | `string` | No | [Internal] Compact display label for the coding harness model used by this session, derived from the latest associated sandbox. |
| `comment` | `array` | No | The comment this agent session is associated with. |
| `context` | `mixed` | Yes | The entity contexts this session is related to, such as issues or projects referenced in direct chat sessions. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `creator` | `array` | No | The human user responsible for the agent session. |
| `dismissedAt` | `mixed` | No | The time a user dismissed this agent session. |
| `dismissedBy` | `array` | No | The user who dismissed the agent session. |
| `endedAt` | `mixed` | No | The time the agent session completed. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `issue` | `array` | No | The issue this agent session is associated with. |
| `modelSelection` | `mixed` | No | [Internal] How Adaptive selected the model route used by this coding session. |
| `plan` | `mixed` | No | A dynamically updated plan describing the agent's execution strategy, including steps to be taken and their current status. |
| `pullRequest` | `array` | No | The pull request this agent session is anchored to, when started from a pull request. |
| `slugId` | `string` | Yes | The agent session's unique URL slug. |
| `sourceComment` | `array` | No | The comment that this agent session was spawned from, if from a different thread. |
| `sourceMetadata` | `mixed` | No | Metadata about the external source that created this agent session. |
| `startedAt` | `mixed` | No | The time the agent session transitioned to active status and began work. |
| `status` | `string` | Yes | The current status of the agent session, such as pending, active, awaiting input, complete, error, or stale. |
| `summary` | `string` | No | The session title, generated automatically or set by the owning OAuth application. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | No | The URL to the agent session page in the Linear app. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AgentSession()->create([
  "context" => null, // mixed
  "createdAt" => null, // mixed
  "id" => null, // string
  "slugId" => null, // string
  "status" => null, // string
  "updatedAt" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AgentSession()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AgentSession()->load(["id" => "agent_session_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->AgentSession()->update([
  "id" => "agent_session_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AgentSessionEntity`

Create a new `AgentSessionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AgentSkillEntity

```php
$agent_skill = $client->AgentSkill();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `body` | `string` | Yes | The skill instructions in markdown format. |
| `color` | `string` | No | The skill's color. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `creator` | `array` | No | The user who created the skill. |
| `description` | `string` | No | The skill's description. |
| `icon` | `string` | No | The icon of the skill. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `inheritedFrom` | `array` | No | The parent-team skill this skill was inherited from. |
| `lastUpdatedBy` | `array` | No | The user who last updated the skill. |
| `lastUsedAt` | `mixed` | No | The time the skill was last used by anyone in the workspace. |
| `owner` | `array` | No | The user who owns the skill. |
| `recentUsageCount` | `float` | Yes | The number of times the skill was used by anyone in the workspace in the last 30 days. |
| `shared` | `bool` | Yes | Whether the skill is shared with everyone in the workspace. |
| `slugId` | `string` | Yes | The skill's unique URL slug. |
| `teamId` | `string` | No | The identifier of the team this skill is shared with. |
| `title` | `string` | Yes | The skill's title. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AgentSkill()->create([
  "body" => null, // string
  "createdAt" => null, // mixed
  "id" => null, // string
  "recentUsageCount" => null, // float
  "shared" => null, // bool
  "slugId" => null, // string
  "title" => null, // string
  "updatedAt" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AgentSkill()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AgentSkill()->load(["id" => "agent_skill_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->AgentSkill()->remove(["id" => "agent_skill_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->AgentSkill()->update([
  "id" => "agent_skill_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AgentSkillEntity`

Create a new `AgentSkillEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApplicationEntity

```php
$application = $client->Application();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `clientId` | `string` | Yes | OAuth application's client ID. |
| `description` | `string` | No | Information about the application. |
| `developer` | `string` | Yes | Name of the developer. |
| `developerUrl` | `string` | Yes | URL of the developer's website, homepage, or documentation. |
| `id` | `string` | Yes | OAuth application's ID. |
| `imageUrl` | `string` | No | Image of the application. |
| `name` | `string` | Yes | Application name. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Application()->load(["client_id" => "client_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApplicationEntity`

Create a new `ApplicationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AttachmentEntity

```php
$attachment = $client->Attachment();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `bodyData` | `string` | No | The body data of the attachment, if any. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `creator` | `array` | No | The creator of the attachment. |
| `externalUserCreator` | `array` | No | The non-Linear user who created the attachment. |
| `groupBySource` | `bool` | Yes | Whether attachments from the same source application should be visually grouped together in the Linear issue detail view. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `issue` | `array` | No | The issue this attachment belongs to. |
| `metadata` | `mixed` | Yes | Integration-specific metadata for this attachment. |
| `originalIssue` | `array` | No | The issue this attachment was originally created on. |
| `source` | `mixed` | No | Information about the source which created the attachment. |
| `sourceType` | `string` | No | The source type of the attachment, derived from the source metadata. |
| `subtitle` | `string` | No | Content for the subtitle line in the Linear attachment widget. |
| `title` | `string` | Yes | Content for the title line in the Linear attachment widget. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | The URL of the external resource this attachment links to. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Attachment()->create([
  "createdAt" => null, // mixed
  "groupBySource" => null, // bool
  "id" => null, // string
  "metadata" => null, // mixed
  "title" => null, // string
  "updatedAt" => null, // mixed
  "url" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Attachment()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Attachment()->load(["id" => "attachment_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Attachment()->remove(["id" => "attachment_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Attachment()->update([
  "id" => "attachment_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AttachmentEntity`

Create a new `AttachmentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AuditEntryEntity

```php
$audit_entry = $client->AuditEntry();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `array` | No | The user that caused the audit entry to be created. |
| `actorId` | `string` | No | The ID of the user that caused the audit entry to be created. |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `countryCode` | `string` | No | The ISO 3166-1 alpha-2 country code derived from the request IP address. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `ip` | `string` | No | The IP address of the actor at the time the audited action was performed. |
| `metadata` | `mixed` | No | Additional metadata related to the audit entry. |
| `organization` | `array` | No | The workspace the audit log belongs to. |
| `requestInformation` | `mixed` | No | Additional information related to the request which performed the action. |
| `type` | `string` | Yes | The type of audited action (e.g., user authentication, permission change, data export, setting modification). |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AuditEntry()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AuditEntryEntity`

Create a new `AuditEntryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AuditEntryTypeEntity

```php
$audit_entry_type = $client->AuditEntryType();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | Yes | Description of the audit entry type. |
| `type` | `string` | Yes | The audit entry type. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AuditEntryType()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AuditEntryTypeEntity`

Create a new `AuditEntryTypeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AuthResolverResponseEntity

```php
$auth_resolver_response = $client->AuthResolverResponse();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowDomainAccess` | `bool` | No | Should the signup flow allow access for the domain. |
| `email` | `string` | Yes | Email for the authenticated account. |
| `id` | `string` | Yes | User account ID. |
| `lastUsedOrganizationId` | `string` | No | ID of the organization last accessed by the user. |
| `service` | `string` | No | The authentication service used for the current session (e.g., google, email, saml). |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AuthResolverResponse()->create([
  "email" => null, // string
  "id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AuthResolverResponse()->load(["id" => "auth_resolver_response_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->AuthResolverResponse()->update([
  "id" => "auth_resolver_response_id",
  "auth_id" => "auth_id",
  "response" => "response",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AuthResolverResponseEntity`

Create a new `AuthResolverResponseEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AuthenticationSessionResponseEntity

```php
$authentication_session_response = $client->AuthenticationSessionResponse();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `browserType` | `string` | No | Used web browser. |
| `client` | `string` | No | Client used for the session |
| `countryCodes` | `string` | Yes | Country codes of all seen locations. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `detailedName` | `string` | Yes | Detailed name of the session including version information, derived from the user agent. |
| `id` | `string` | Yes |  |
| `ip` | `string` | No | IP address. |
| `isCurrentSession` | `bool` | Yes | Whether this session is the one used to make the current API request. |
| `lastActiveAt` | `mixed` | No | When was the session last seen |
| `location` | `string` | No | Human readable location |
| `locationCity` | `string` | No | Location city name. |
| `locationCountry` | `string` | No | Location country name. |
| `locationCountryCode` | `string` | No | Location country code. |
| `locationRegionCode` | `string` | No | Location region code. |
| `name` | `string` | Yes | Name of the session, derived from the client and operating system |
| `operatingSystem` | `string` | No | Operating system used for the session |
| `service` | `string` | No | Service used for logging in. |
| `type` | `string` | Yes | Type of application used to authenticate. |
| `updatedAt` | `mixed` | Yes | Date when the session was last updated. |
| `userAgent` | `string` | No | Session's user-agent. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AuthenticationSessionResponse()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AuthenticationSessionResponseEntity`

Create a new `AuthenticationSessionResponseEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CommentEntity

```php
$comment = $client->Comment();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentSession` | `array` | No | Agent session associated with this comment. |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `body` | `string` | Yes | The comment content in markdown format. |
| `bodyData` | `string` | Yes | [Internal] The comment content as a ProseMirror document. |
| `botActor` | `array` | No | The bot that created the comment. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `documentContent` | `array` | No | The document content that the comment is associated with. |
| `documentContentId` | `string` | No | The ID of the document content that the comment is associated with. |
| `editedAt` | `mixed` | No | The time the comment was last edited by its author. |
| `externalThread` | `array` | No | The external thread that the comment is synced with. |
| `externalUser` | `array` | No | The external user who wrote the comment, when the comment was created through an integration such as Slack or Intercom. |
| `hideInLinear` | `bool` | Yes | [Internal] Whether the comment should be hidden from Linear clients. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiative` | `array` | No | The initiative that the comment is associated with. |
| `initiativeId` | `string` | No | The ID of the initiative that the comment is associated with. |
| `initiativeUpdate` | `array` | No | The initiative update that the comment is associated with. |
| `initiativeUpdateId` | `string` | No | The ID of the initiative update that the comment is associated with. |
| `isArtificialAgentSessionRoot` | `bool` | Yes | [Internal] Whether the comment is an artificial placeholder for an agent session thread created without a comment mention. |
| `issue` | `array` | No | The issue that the comment is associated with. |
| `issueId` | `string` | No | The ID of the issue that the comment is associated with. |
| `onBehalfOf` | `array` | No | [Internal] The user on whose behalf the comment was created, e.g. |
| `parent` | `array` | No | The parent comment under which the current comment is nested. |
| `parentId` | `string` | No | The ID of the parent comment under which the current comment is nested. |
| `post` | `array` | No | The post that the comment is associated with. |
| `project` | `array` | No | The project that the comment is associated with. |
| `projectId` | `string` | No | The ID of the project that the comment is associated with. |
| `projectUpdate` | `array` | No | The project update that the comment is associated with. |
| `projectUpdateId` | `string` | No | The ID of the project update that the comment is associated with. |
| `quotedText` | `string` | No | The text that this comment references, used for inline comments on documents or issue descriptions. |
| `reactionData` | `mixed` | Yes | Emoji reaction summary for this comment, grouped by emoji type. |
| `resolvedAt` | `mixed` | No | The time when the comment thread was resolved. |
| `resolvingComment` | `array` | No | The child comment that resolved this thread. |
| `resolvingCommentId` | `string` | No | The ID of the child comment that resolved this thread. |
| `resolvingUser` | `array` | No | The user that resolved the comment thread. |
| `threadSummary` | `mixed` | No | [Internal] An AI-generated summary of the comment thread. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | Comment's URL. |
| `user` | `array` | No | The user who wrote the comment. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Comment()->create([
  "body" => null, // string
  "bodyData" => null, // string
  "createdAt" => null, // mixed
  "hideInLinear" => null, // bool
  "id" => null, // string
  "isArtificialAgentSessionRoot" => null, // bool
  "reactionData" => null, // mixed
  "updatedAt" => null, // mixed
  "url" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Comment()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Comment()->load(["id" => "comment_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Comment()->remove(["id" => "comment_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Comment()->update([
  "id" => "comment_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CommentEntity`

Create a new `CommentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CreateOrJoinOrganizationResponseEntity

```php
$create_or_join_organization_response = $client->CreateOrJoinOrganizationResponse();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `organization` | `array` | No | The workspace that was created or joined. |
| `user` | `array` | No | The user who created or joined the workspace. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CreateOrJoinOrganizationResponse()->create([
]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->CreateOrJoinOrganizationResponse()->update([
  "organization_id" => "organization_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CreateOrJoinOrganizationResponseEntity`

Create a new `CreateOrJoinOrganizationResponseEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomViewEntity

```php
$custom_view = $client->CustomView();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `color` | `string` | No | The hex color code of the custom view icon. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `creator` | `array` | No | The user who originally created the custom view. |
| `description` | `string` | No | The description of the custom view. |
| `facet` | `array` | No | [INTERNAL] The facet that links this custom view to its parent entity (project, initiative, team page, etc.). |
| `feedItemFilterData` | `mixed` | No | The filter applied to feed items in the custom view. |
| `filterData` | `mixed` | Yes | The structured filter applied to issues in the custom view. |
| `icon` | `string` | No | The icon of the custom view. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiativeFilterData` | `mixed` | No | The filter applied to initiatives in the custom view. |
| `modelName` | `string` | Yes | The entity type this view displays. |
| `name` | `string` | Yes | The name of the custom view, displayed in the sidebar and navigation. |
| `organization` | `array` | No | The workspace of the custom view. |
| `organizationViewPreferences` | `array` | No | The workspace-level default view preferences for this custom view, if any have been set. |
| `owner` | `array` | No | The user who owns the custom view. |
| `projectFilterData` | `mixed` | No | The filter applied to projects in the custom view. |
| `shared` | `bool` | Yes | Whether the custom view is shared with everyone in the organization. |
| `slugId` | `string` | Yes | The custom view's unique URL slug, used to construct human-readable URLs. |
| `team` | `array` | No | The team that the custom view is scoped to. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |
| `updatedBy` | `array` | No | The user who last updated the custom view. |
| `userViewPreferences` | `array` | No | The current user's personal view preferences for this custom view, if they have set any. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CustomView()->create([
  "createdAt" => null, // mixed
  "filterData" => null, // mixed
  "id" => null, // string
  "modelName" => null, // string
  "name" => null, // string
  "shared" => null, // bool
  "slugId" => null, // string
  "updatedAt" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CustomView()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CustomView()->load(["id" => "custom_view_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->CustomView()->remove(["id" => "custom_view_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->CustomView()->update([
  "id" => "custom_view_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomViewEntity`

Create a new `CustomViewEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomerEntity

```php
$customer = $client->Customer();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approximateNeedCount` | `float` | Yes | The approximate number of distinct requests associated with this customer, deduplicated per issue or project. |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `domains` | `string` | Yes | The email domains associated with this customer (e.g., 'acme.com'). |
| `externalIds` | `string` | Yes | Identifiers for this customer in external systems (e.g., CRM IDs from Intercom, Salesforce, or HubSpot). |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `integration` | `array` | No | The integration that manages this customer's data (e.g., Intercom, Salesforce). |
| `logoUrl` | `string` | No | URL of the customer's logo image. |
| `mainSourceId` | `string` | No | The primary external source ID when a customer has data from multiple external systems. |
| `name` | `string` | Yes | The display name of the customer organization. |
| `owner` | `array` | No | The workspace member assigned as the owner of this customer. |
| `revenue` | `int` | No | The annual revenue generated by this customer. |
| `size` | `float` | No | The number of employees or seats at the customer organization. |
| `slackChannelId` | `string` | No | The ID of the Slack channel linked to this customer for communication. |
| `slugId` | `string` | Yes | A unique, human-readable URL slug for the customer. |
| `status` | `array` | No | The current lifecycle status of the customer. |
| `tier` | `array` | No | The tier or segment assigned to this customer for prioritization (e.g., Enterprise, Pro, Free). |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | The URL of the customer's page in the Linear application. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Customer()->create([
  "approximateNeedCount" => null, // float
  "createdAt" => null, // mixed
  "domains" => null, // string
  "externalIds" => null, // string
  "id" => null, // string
  "name" => null, // string
  "slugId" => null, // string
  "updatedAt" => null, // mixed
  "url" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Customer()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Customer()->load(["id" => "customer_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Customer()->remove(["id" => "customer_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Customer()->update([
  "id" => "customer_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomerEntity`

Create a new `CustomerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomerNeedEntity

```php
$customer_need = $client->CustomerNeed();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `attachment` | `array` | No | The issue attachment linked to this need. |
| `body` | `string` | No | The body content of the need in Markdown format. |
| `bodyData` | `string` | No | [Internal] The body content of the need as a Prosemirror document JSON string. |
| `comment` | `array` | No | An optional comment providing additional context for this need. |
| `content` | `string` | No | The effective Markdown content shown for this customer need. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `creator` | `array` | No | The user who manually created this customer need. |
| `customer` | `array` | No | The customer organization this need belongs to. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `issue` | `array` | No | The issue this need is linked to. |
| `originalIssue` | `array` | No | The issue this customer need was originally created on, before being moved to a different issue or project. |
| `priority` | `float` | Yes | Whether the customer need is important or not. |
| `project` | `array` | No | The project this need is linked to. |
| `projectAttachment` | `array` | No | The project attachment linked to this need. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | No | The URL of the source attachment linked to this need, if any. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CustomerNeed()->create([
  "createdAt" => null, // mixed
  "id" => null, // string
  "priority" => null, // float
  "updatedAt" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CustomerNeed()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CustomerNeed()->load(["id" => "customer_need_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->CustomerNeed()->remove(["id" => "customer_need_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->CustomerNeed()->update([
  "id" => "customer_need_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomerNeedEntity`

Create a new `CustomerNeedEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomerStatusEntity

```php
$customer_status = $client->CustomerStatus();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `color` | `string` | Yes | The color of the status indicator in the UI, as a HEX string (e.g., '#ff0000'). |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `description` | `string` | No | An optional description explaining what this status represents in the customer lifecycle. |
| `displayName` | `string` | Yes | The user-facing display name of the status shown in the UI. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `name` | `string` | Yes | The internal name of the status. |
| `position` | `float` | Yes | The sort position of the status in the workspace's customer lifecycle flow. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CustomerStatus()->create([
  "color" => null, // string
  "createdAt" => null, // mixed
  "displayName" => null, // string
  "id" => null, // string
  "name" => null, // string
  "position" => null, // float
  "updatedAt" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CustomerStatus()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CustomerStatus()->load(["id" => "customer_status_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->CustomerStatus()->remove(["id" => "customer_status_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->CustomerStatus()->update([
  "id" => "customer_status_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomerStatusEntity`

Create a new `CustomerStatusEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomerTierEntity

```php
$customer_tier = $client->CustomerTier();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `color` | `string` | Yes | The color of the tier indicator in the UI, as a HEX string (e.g., '#ff0000'). |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `description` | `string` | No | An optional description explaining what this tier represents and its intended use for customer segmentation. |
| `displayName` | `string` | Yes | The user-facing display name of the tier shown in the UI. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `name` | `string` | Yes | The internal name of the tier. |
| `position` | `float` | Yes | The sort position of the tier in the workspace's customer tier ordering. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CustomerTier()->create([
  "color" => null, // string
  "createdAt" => null, // mixed
  "displayName" => null, // string
  "id" => null, // string
  "name" => null, // string
  "position" => null, // float
  "updatedAt" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CustomerTier()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CustomerTier()->load(["id" => "customer_tier_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->CustomerTier()->remove(["id" => "customer_tier_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->CustomerTier()->update([
  "id" => "customer_tier_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomerTierEntity`

Create a new `CustomerTierEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CycleEntity

```php
$cycle = $client->Cycle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `autoArchivedAt` | `mixed` | No | The time at which the cycle was automatically archived by the auto-pruning process. |
| `completedAt` | `mixed` | No | The completion time of the cycle. |
| `completedIssueCountHistory` | `float` | Yes | The number of completed issues in the cycle after each day. |
| `completedScopeHistory` | `float` | Yes | The number of completed estimation points after each day. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `currentProgress` | `mixed` | Yes | [Internal] The current progress snapshot of the cycle, broken down by issue status categories. |
| `description` | `string` | No | The description of the cycle. |
| `endsAt` | `mixed` | Yes | The end date and time of the cycle. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `inProgressScopeHistory` | `float` | Yes | The number of in-progress estimation points after each day. |
| `inheritedFrom` | `array` | No | The parent cycle this cycle was inherited from. |
| `isActive` | `bool` | Yes | Whether the cycle is currently active. |
| `isFuture` | `bool` | Yes | Whether the cycle has not yet started. |
| `isNext` | `bool` | Yes | Whether this cycle is the next upcoming (not yet started) cycle for the team. |
| `isPast` | `bool` | Yes | Whether the cycle's end date has passed. |
| `isPrevious` | `bool` | Yes | Whether this cycle is the most recently completed cycle for the team. |
| `issueCountHistory` | `float` | Yes | The total number of issues in the cycle after each day. |
| `name` | `string` | No | The custom name of the cycle. |
| `number` | `float` | Yes | The auto-incrementing number of the cycle, unique within its team. |
| `progress` | `float` | Yes | The overall progress of the cycle as a number between 0 and 1. |
| `progressHistory` | `mixed` | Yes | [Internal] The detailed progress history of the cycle, including per-status breakdowns over time. |
| `scopeHistory` | `float` | Yes | The total number of estimation points (scope) in the cycle after each day. |
| `startsAt` | `mixed` | Yes | The start date and time of the cycle. |
| `team` | `array` | No | The team that the cycle belongs to. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Cycle()->create([
  "completedIssueCountHistory" => null, // float
  "completedScopeHistory" => null, // float
  "createdAt" => null, // mixed
  "currentProgress" => null, // mixed
  "endsAt" => null, // mixed
  "id" => null, // string
  "inProgressScopeHistory" => null, // float
  "isActive" => null, // bool
  "isFuture" => null, // bool
  "isNext" => null, // bool
  "isPast" => null, // bool
  "isPrevious" => null, // bool
  "issueCountHistory" => null, // float
  "number" => null, // float
  "progress" => null, // float
  "progressHistory" => null, // mixed
  "scopeHistory" => null, // float
  "startsAt" => null, // mixed
  "updatedAt" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Cycle()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Cycle()->load(["id" => "cycle_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Cycle()->update([
  "id" => "cycle_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CycleEntity`

Create a new `CycleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DiffEntity

```php
$diff = $client->Diff();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additions` | `float` | Yes | [Internal] The total number of added lines across the diff. |
| `agentSession` | `array` | No | The agent session the diff belongs to. |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `contentHash` | `string` | Yes | [Internal] The opaque content hash identifying the diff's content in code.storage. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `creator` | `array` | No | The user responsible for the diff. |
| `deletions` | `float` | Yes | [Internal] The total number of deleted lines across the diff. |
| `fileCount` | `float` | Yes | [Internal] The number of changed files in the diff. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `organization` | `array` | No | The workspace the diff belongs to. |
| `pullRequest` | `array` | No | The pull request the diff was promoted to when opened for review. |
| `slugId` | `string` | Yes | [Internal] The diff's unique URL slug. |
| `truncated` | `bool` | Yes | [Internal] Whether oversized files were omitted when the diff was computed. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Diff()->load(["id" => "diff_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DiffEntity`

Create a new `DiffEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DocumentEntity

```php
$document = $client->Document();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `color` | `string` | No | The hex color of the document icon. |
| `content` | `string` | No | The document's content in markdown format. |
| `contentState` | `string` | No | [Internal] The document's content as a base64-encoded Yjs state update. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `creator` | `array` | No | The user who created the document. |
| `cycle` | `array` | No | [Internal] The cycle that the document is associated with. |
| `documentContentId` | `string` | No | The ID of the document content associated with the document. |
| `hiddenAt` | `mixed` | No | The time at which the document was hidden from the default view. |
| `icon` | `string` | No | The icon of the document, either a decorative icon type or an emoji string. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiative` | `array` | No | The initiative that the document is associated with. |
| `issue` | `array` | No | The issue that the document is associated with. |
| `lastAppliedTemplate` | `array` | No | The last template that was applied to this document. |
| `owner` | `array` | No | The owner of the document. |
| `project` | `array` | No | The project that the document is associated with. |
| `release` | `array` | No | The release that the document is associated with. |
| `slugId` | `string` | Yes | The document's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `float` | Yes | The sort order of the document in its parent entity's resources list. |
| `summary` | `string` | No | [Internal] A one-sentence AI-generated summary of the document content. |
| `team` | `array` | No | [Internal] The team that the document is associated with. |
| `title` | `string` | Yes | The title of the document. |
| `trashed` | `bool` | No | A flag that indicates whether the document is in the trash bin. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |
| `updatedBy` | `array` | No | The user who last updated the document. |
| `url` | `string` | Yes | The canonical url for the document. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Document()->create([
  "createdAt" => null, // mixed
  "id" => null, // string
  "slugId" => null, // string
  "sortOrder" => null, // float
  "title" => null, // string
  "updatedAt" => null, // mixed
  "url" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Document()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Document()->load(["id" => "document_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Document()->remove(["id" => "document_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Document()->update([
  "id" => "document_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DocumentEntity`

Create a new `DocumentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DocumentSearchResultEntity

```php
$document_search_result = $client->DocumentSearchResult();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `color` | `string` | No | The hex color of the document icon. |
| `content` | `string` | No | The document's content in markdown format. |
| `contentState` | `string` | No | [Internal] The document's content as a base64-encoded Yjs state update. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `creator` | `array` | No | The user who created the document. |
| `cycle` | `array` | No | [Internal] The cycle that the document is associated with. |
| `documentContentId` | `string` | No | The ID of the document content associated with the document. |
| `hiddenAt` | `mixed` | No | The time at which the document was hidden from the default view. |
| `icon` | `string` | No | The icon of the document, either a decorative icon type or an emoji string. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiative` | `array` | No | The initiative that the document is associated with. |
| `issue` | `array` | No | The issue that the document is associated with. |
| `lastAppliedTemplate` | `array` | No | The last template that was applied to this document. |
| `metadata` | `mixed` | Yes | Metadata related to search result. |
| `owner` | `array` | No | The owner of the document. |
| `project` | `array` | No | The project that the document is associated with. |
| `release` | `array` | No | The release that the document is associated with. |
| `slugId` | `string` | Yes | The document's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `float` | Yes | The sort order of the document in its parent entity's resources list. |
| `summary` | `string` | No | [Internal] A one-sentence AI-generated summary of the document content. |
| `team` | `array` | No | [Internal] The team that the document is associated with. |
| `title` | `string` | Yes | The title of the document. |
| `trashed` | `bool` | No | A flag that indicates whether the document is in the trash bin. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |
| `updatedBy` | `array` | No | The user who last updated the document. |
| `url` | `string` | Yes | The canonical url for the document. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DocumentSearchResult()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DocumentSearchResultEntity`

Create a new `DocumentSearchResultEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EmailIntakeAddressEntity

```php
$email_intake_address = $client->EmailIntakeAddress();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `string` | Yes | The unique local part (before the @) of the intake email address, used to route incoming emails to the correct intake handler. |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `creator` | `array` | No | The user who created the email intake address. |
| `customerRequestsEnabled` | `bool` | Yes | Whether issues created from emails sent to this address are automatically converted into customer requests, linking the sender as a customer contact. |
| `enabled` | `bool` | Yes | Whether the email address is enabled. |
| `forwardingEmailAddress` | `string` | No | The email address used to forward emails to the intake address. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `issueCanceledAutoReply` | `string` | No | The auto-reply message for issue canceled. |
| `issueCanceledAutoReplyEnabled` | `bool` | Yes | Whether the auto-reply for issue canceled is enabled. |
| `issueCompletedAutoReply` | `string` | No | The auto-reply message for issue completed. |
| `issueCompletedAutoReplyEnabled` | `bool` | Yes | Whether the auto-reply for issue completed is enabled. |
| `issueCreatedAutoReply` | `string` | No | The auto-reply message for issue created. |
| `issueCreatedAutoReplyEnabled` | `bool` | Yes | Whether the auto-reply for issue created is enabled. |
| `lastUsedAt` | `mixed` | No | The last time an inbound email was successfully ingested for this address. |
| `organization` | `array` | No | The workspace that the email address is associated with. |
| `reopenOnReply` | `bool` | Yes | Whether to reopen completed or canceled issues when a substantive email reply is received. |
| `repliesEnabled` | `bool` | Yes | Whether email replies are enabled. |
| `senderName` | `string` | No | The name to be used for outgoing emails. |
| `sesDomainIdentity` | `array` | No | The SES domain identity that the email address is associated with. |
| `team` | `array` | No | The team that the email address is associated with. |
| `template` | `array` | No | The template that the email address is associated with. |
| `type` | `string` | Yes | The type of the email address. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |
| `useUserNamesInReplies` | `bool` | Yes | Whether the commenter's name is included in the email replies. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->EmailIntakeAddress()->create([
  "address" => null, // string
  "createdAt" => null, // mixed
  "customerRequestsEnabled" => null, // bool
  "enabled" => null, // bool
  "id" => null, // string
  "issueCanceledAutoReplyEnabled" => null, // bool
  "issueCompletedAutoReplyEnabled" => null, // bool
  "issueCreatedAutoReplyEnabled" => null, // bool
  "reopenOnReply" => null, // bool
  "repliesEnabled" => null, // bool
  "type" => null, // string
  "updatedAt" => null, // mixed
  "useUserNamesInReplies" => null, // bool
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->EmailIntakeAddress()->load(["id" => "email_intake_address_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->EmailIntakeAddress()->remove(["id" => "email_intake_address_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->EmailIntakeAddress()->update([
  "id" => "email_intake_address_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EmailIntakeAddressEntity`

Create a new `EmailIntakeAddressEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EmailUserAccountAuthChallengeResponseEntity

```php
$email_user_account_auth_challenge_response = $client->EmailUserAccountAuthChallengeResponse();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authType` | `string` | Yes | Supported challenge for this user account. |
| `success` | `bool` | Yes | Whether the operation was successful. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->EmailUserAccountAuthChallengeResponse()->create([
  "authType" => null, // string
  "success" => null, // bool
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EmailUserAccountAuthChallengeResponseEntity`

Create a new `EmailUserAccountAuthChallengeResponseEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EmojiEntity

```php
$emoji = $client->Emoji();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `creator` | `array` | No | The user who created the emoji. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `name` | `string` | Yes | The unique name of the custom emoji within the workspace. |
| `organization` | `array` | No | The workspace that the emoji belongs to. |
| `source` | `string` | Yes | The source of the emoji, indicating how it was created (e.g., uploaded by a user or imported). |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | The URL of the uploaded image for this custom emoji. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Emoji()->create([
  "createdAt" => null, // mixed
  "id" => null, // string
  "name" => null, // string
  "source" => null, // string
  "updatedAt" => null, // mixed
  "url" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Emoji()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Emoji()->load(["id" => "emoji_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Emoji()->remove(["id" => "emoji_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EmojiEntity`

Create a new `EmojiEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EntityExternalLinkEntity

```php
$entity_external_link = $client->EntityExternalLink();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `creator` | `array` | No | The user who created the link. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiative` | `array` | No | The initiative that the link is associated with. |
| `label` | `string` | Yes | The link's label. |
| `project` | `array` | No | The project that the link is associated with. |
| `sortOrder` | `float` | Yes | The sort order of this link within the parent entity's resources list. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | The link's URL. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->EntityExternalLink()->create([
  "createdAt" => null, // mixed
  "id" => null, // string
  "label" => null, // string
  "sortOrder" => null, // float
  "updatedAt" => null, // mixed
  "url" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->EntityExternalLink()->load(["id" => "entity_external_link_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->EntityExternalLink()->remove(["id" => "entity_external_link_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->EntityExternalLink()->update([
  "id" => "entity_external_link_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EntityExternalLinkEntity`

Create a new `EntityExternalLinkEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ExternalUserEntity

```php
$external_user = $client->ExternalUser();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `avatarUrl` | `string` | No | A URL to the external user's avatar image. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `displayName` | `string` | Yes | The external user's display name. |
| `email` | `string` | No | The external user's email address. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `lastSeen` | `mixed` | No | The last time the external user was seen interacting with Linear through their external service. |
| `name` | `string` | Yes | The external user's full name. |
| `organization` | `array` | No | The workspace that the external user belongs to. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ExternalUser()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ExternalUser()->load(["id" => "external_user_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ExternalUserEntity`

Create a new `ExternalUserEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FavoriteEntity

```php
$favorite = $client->Favorite();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aiConversation` | `array` | No | [INTERNAL] The favorited Agent conversation. |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `color` | `string` | No | [Internal] Returns the color of the favorite's icon. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `customView` | `array` | No | The favorited custom view. |
| `customer` | `array` | No | The favorited customer. |
| `cycle` | `array` | No | The favorited cycle. |
| `dashboard` | `array` | No | The favorited dashboard. |
| `detail` | `string` | No | [Internal] Detail text for favorite's `title` (e.g. |
| `document` | `array` | No | The favorited document. |
| `facet` | `array` | No | [INTERNAL] The favorited facet. |
| `folderName` | `string` | No | The name of the folder. |
| `icon` | `string` | No | [Internal] Name of the favorite's icon. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiative` | `array` | No | The favorited initiative. |
| `initiativeLabel` | `array` | No | [INTERNAL] The favorited initiative label. |
| `initiativeTab` | `string` | No | The targeted tab of the initiative. |
| `issue` | `array` | No | The favorited issue. |
| `label` | `array` | No | The favorited label. |
| `liveFolderDefinition` | `mixed` | No | The versioned lazy root and filter represented by this live favorite folder. |
| `liveFolderPreset` | `string` | No | The predefined live folder represented by this favorite. |
| `owner` | `array` | No | The user who owns this favorite. |
| `parent` | `array` | No | The parent folder of the favorite. |
| `pipelineTab` | `string` | No | The targeted tab of the release pipeline. |
| `predefinedViewTeam` | `array` | No | The team of the favorited predefined view. |
| `predefinedViewType` | `string` | No | The type of favorited predefined view (e.g., 'allIssues', 'activeCycle', 'backlog', 'triage'). |
| `project` | `array` | No | The favorited project. |
| `projectLabel` | `array` | No | The favorited project label. |
| `projectTab` | `string` | No | The targeted tab of the project. |
| `projectTeam` | `array` | No | [DEPRECATED] The favorited team of the project. |
| `pullRequest` | `array` | No | The favorited pull request. |
| `release` | `array` | No | The favorited release. |
| `releaseNote` | `array` | No | The favorited release note. |
| `releasePipeline` | `array` | No | The favorited release pipeline. |
| `sortOrder` | `float` | Yes | The position of this item in the user's favorites list. |
| `team` | `array` | No | The favorited team. |
| `title` | `string` | Yes | [Internal] Favorite's title text (name of the favorite'd object or folder). |
| `type` | `string` | Yes | The type of entity this favorite references, such as 'issue', 'project', 'cycle', 'customView', 'document', 'folder', etc. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | No | URL of the favorited entity. |
| `user` | `array` | No | The favorited user. |
| `workflowDefinition` | `array` | No | The favorited loop. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Favorite()->create([
  "createdAt" => null, // mixed
  "id" => null, // string
  "sortOrder" => null, // float
  "title" => null, // string
  "type" => null, // string
  "updatedAt" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Favorite()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Favorite()->load(["id" => "favorite_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Favorite()->remove(["id" => "favorite_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Favorite()->update([
  "id" => "favorite_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FavoriteEntity`

Create a new `FavoriteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GitAutomationStateEntity

```php
$git_automation_state = $client->GitAutomationState();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `event` | `string` | Yes | The Git event that triggers this automation rule (e.g., branch created, PR opened for review, or PR merged). |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `state` | `array` | No | The workflow state that linked issues will be transitioned to when the Git event fires. |
| `targetBranch` | `array` | No | The target branch that this automation rule applies to. |
| `team` | `array` | No | The team that this automation rule belongs to. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->GitAutomationState()->create([
  "createdAt" => null, // mixed
  "event" => null, // string
  "id" => null, // string
  "updatedAt" => null, // mixed
]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->GitAutomationState()->remove(["id" => "id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->GitAutomationState()->update([
  "id" => "id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GitAutomationStateEntity`

Create a new `GitAutomationStateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GitAutomationTargetBranchEntity

```php
$git_automation_target_branch = $client->GitAutomationTargetBranch();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `branchPattern` | `string` | Yes | The branch name or pattern to match against pull request target branches. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `isRegex` | `bool` | Yes | Whether the branch pattern should be interpreted as a regular expression. |
| `team` | `array` | No | The team that this target branch definition belongs to. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->GitAutomationTargetBranch()->create([
  "branchPattern" => null, // string
  "createdAt" => null, // mixed
  "id" => null, // string
  "isRegex" => null, // bool
  "updatedAt" => null, // mixed
]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->GitAutomationTargetBranch()->remove(["id" => "id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->GitAutomationTargetBranch()->update([
  "id" => "id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GitAutomationTargetBranchEntity`

Create a new `GitAutomationTargetBranchEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GitHubIntegrationConnectDetailEntity

```php
$git_hub_integration_connect_detail = $client->GitHubIntegrationConnectDetail();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `lostRepositoryNames` | `string` | No | Full names ('owner/repo') of repositories whose existing GitHub Issues sync mappings would become inaccessible if the new GitHub App installation replaces the existing one. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->GitHubIntegrationConnectDetail()->create([
]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->GitHubIntegrationConnectDetail()->update([
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GitHubIntegrationConnectDetailEntity`

Create a new `GitHubIntegrationConnectDetailEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## InitiativeEntity

```php
$initiative = $client->Initiative();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `canceledAt` | `mixed` | No | [Internal] The time at which the initiative was moved into Canceled status. |
| `color` | `string` | No | The initiative's color. |
| `completedAt` | `mixed` | No | The time at which the initiative was moved into Completed status. |
| `content` | `string` | No | The initiative's content in markdown format. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `creator` | `array` | No | The user who created the initiative. |
| `description` | `string` | No | The description of the initiative. |
| `documentContent` | `array` | No | The content of the initiative description. |
| `frequencyResolution` | `string` | Yes | The resolution of the reminder frequency. |
| `health` | `string` | No | The overall health of the initiative, derived from the most recent initiative update. |
| `healthUpdatedAt` | `mixed` | No | The time at which the initiative health was last updated, typically when a new initiative update is posted. |
| `icon` | `string` | No | The icon of the initiative. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `identifier` | `string` | No | [Internal] The human-readable identifier of the initiative. |
| `integrationsSettings` | `array` | No | Settings for all integrations associated with that initiative. |
| `labelIds` | `string` | Yes | The IDs of the initiative labels associated with this initiative. |
| `lastUpdate` | `array` | No | The most recent status update posted for this initiative. |
| `leadTeam` | `array` | No | The team that leads the initiative. |
| `name` | `string` | Yes | The name of the initiative. |
| `organization` | `array` | No | The workspace of the initiative. |
| `owner` | `array` | No | The user who owns the initiative. |
| `parentInitiative` | `array` | No | Parent initiative associated with the initiative. |
| `previousIdentifiers` | `string` | Yes | [Internal] Identifiers (default and custom) that this initiative has previously held. |
| `priority` | `int` | Yes | The priority of the initiative. |
| `prioritySortOrder` | `float` | Yes | The sort order of the initiative within the workspace when ordered by priority. |
| `slugId` | `string` | Yes | The initiative's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `float` | Yes | The sort order of the initiative within the workspace. |
| `startedAt` | `mixed` | No | The time at which the initiative was moved into Active status. |
| `status` | `string` | Yes | The lifecycle status of the initiative. |
| `targetDate` | `mixed` | No | The estimated completion date of the initiative. |
| `targetDateResolution` | `string` | No | The resolution of the initiative's estimated completion date, indicating whether it refers to a specific day, week, month, quarter, or year. |
| `trashed` | `bool` | No | A flag that indicates whether the initiative is in the trash bin. |
| `updateReminderFrequency` | `float` | No | The frequency at which to prompt for updates. |
| `updateReminderFrequencyInWeeks` | `float` | No | The n-weekly frequency at which to prompt for updates. |
| `updateRemindersDay` | `string` | No | The day at which to prompt for updates. |
| `updateRemindersHour` | `float` | No | The hour at which to prompt for updates. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | Initiative URL. |
| `visibility` | `string` | Yes | The visibility of the initiative, derived from its lead team. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Initiative()->create([
  "createdAt" => null, // mixed
  "frequencyResolution" => null, // string
  "id" => null, // string
  "labelIds" => null, // string
  "name" => null, // string
  "previousIdentifiers" => null, // string
  "priority" => null, // int
  "prioritySortOrder" => null, // float
  "slugId" => null, // string
  "sortOrder" => null, // float
  "status" => null, // string
  "updatedAt" => null, // mixed
  "url" => null, // string
  "visibility" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Initiative()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Initiative()->load(["id" => "initiative_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Initiative()->remove(["id" => "initiative_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Initiative()->update([
  "id" => "initiative_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): InitiativeEntity`

Create a new `InitiativeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## InitiativeLabelEntity

```php
$initiative_label = $client->InitiativeLabel();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `color` | `string` | Yes | The label's color as a HEX string (e.g., '#EB5757'). |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `creator` | `array` | No | The user who created the label. |
| `description` | `string` | No | The label's description. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `isGroup` | `bool` | Yes | Whether the label is a group. |
| `lastAppliedAt` | `mixed` | No | The date when the label was last applied to an issue, project, or initiative. |
| `name` | `string` | Yes | The label's name. |
| `organization` | `array` | No | The workspace that the initiative label belongs to. |
| `parent` | `array` | No | The parent label group. |
| `retiredAt` | `mixed` | No | [Internal] When the label was retired. |
| `retiredBy` | `array` | No | The user who retired the label. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->InitiativeLabel()->create([
  "color" => null, // string
  "createdAt" => null, // mixed
  "id" => null, // string
  "isGroup" => null, // bool
  "name" => null, // string
  "updatedAt" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->InitiativeLabel()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->InitiativeLabel()->load(["id" => "initiative_label_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->InitiativeLabel()->remove(["id" => "initiative_label_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->InitiativeLabel()->update([
  "id" => "initiative_label_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): InitiativeLabelEntity`

Create a new `InitiativeLabelEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## InitiativeLeadTeamChangeImpactEntity

```php
$initiative_lead_team_change_impact = $client->InitiativeLeadTeamChangeImpact();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `affectedDescendantCount` | `int` | Yes | The number of editable matching sub-initiatives whose lead team would change if the update is applied to descendants. |
| `id` | `string` | No |  |
| `visibilityMayChange` | `bool` | Yes | Whether the changed initiatives may gain or lose access restrictions because the current or next lead team is not public. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->InitiativeLeadTeamChangeImpact()->load(["id" => "initiative_lead_team_change_impact_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): InitiativeLeadTeamChangeImpactEntity`

Create a new `InitiativeLeadTeamChangeImpactEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## InitiativeRelationEntity

```php
$initiative_relation = $client->InitiativeRelation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiative` | `array` | No | The parent initiative in this hierarchical relation. |
| `relatedInitiative` | `array` | No | The child initiative in this hierarchical relation. |
| `sortOrder` | `float` | Yes | The sort order of the child initiative within its parent initiative. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `array` | No | The user who last created or modified the relation. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->InitiativeRelation()->create([
  "createdAt" => null, // mixed
  "id" => null, // string
  "sortOrder" => null, // float
  "updatedAt" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->InitiativeRelation()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->InitiativeRelation()->load(["id" => "initiative_relation_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->InitiativeRelation()->remove(["id" => "initiative_relation_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->InitiativeRelation()->update([
  "id" => "initiative_relation_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): InitiativeRelationEntity`

Create a new `InitiativeRelationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## InitiativeToProjectEntity

```php
$initiative_to_project = $client->InitiativeToProject();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiative` | `array` | No | The initiative that the project is associated with. |
| `project` | `array` | No | The project that the initiative is associated with. |
| `sortOrder` | `string` | Yes | The sort order of the project within its parent initiative. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->InitiativeToProject()->create([
  "createdAt" => null, // mixed
  "id" => null, // string
  "sortOrder" => null, // string
  "updatedAt" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->InitiativeToProject()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->InitiativeToProject()->load(["id" => "initiative_to_project_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->InitiativeToProject()->remove(["id" => "initiative_to_project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->InitiativeToProject()->update([
  "id" => "initiative_to_project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): InitiativeToProjectEntity`

Create a new `InitiativeToProjectEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## InitiativeUpdateEntity

```php
$initiative_update = $client->InitiativeUpdate();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `body` | `string` | Yes | The update content in markdown format. |
| `bodyData` | `string` | Yes | [Internal] The content of the update as a Prosemirror document. |
| `commentCount` | `int` | Yes | Number of comments associated with the initiative update. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `diff` | `mixed` | No | The diff between the current update and the previous one. |
| `diffMarkdown` | `string` | No | The diff between the current update and the previous one, formatted as markdown. |
| `editedAt` | `mixed` | No | The time the update was edited. |
| `health` | `string` | Yes | The health of the initiative at the time this update was posted. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `infoSnapshot` | `mixed` | No | [Internal] A snapshot of initiative properties at the time the update was posted, including project statuses, sub-initiative health, and target dates. |
| `initiative` | `array` | No | The initiative that this status update was posted to. |
| `isDiffHidden` | `bool` | Yes | Whether the diff between this update and the previous one should be hidden in the UI. |
| `isStale` | `bool` | Yes | Whether the initiative update is stale. |
| `reactionData` | `mixed` | Yes | Emoji reaction summary, grouped by emoji type. |
| `slugId` | `string` | Yes | The update's unique URL slug. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | The URL to the initiative update. |
| `user` | `array` | No | The user who wrote the update. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->InitiativeUpdate()->create([
  "body" => null, // string
  "bodyData" => null, // string
  "commentCount" => null, // int
  "createdAt" => null, // mixed
  "health" => null, // string
  "id" => null, // string
  "isDiffHidden" => null, // bool
  "isStale" => null, // bool
  "reactionData" => null, // mixed
  "slugId" => null, // string
  "updatedAt" => null, // mixed
  "url" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->InitiativeUpdate()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->InitiativeUpdate()->load(["id" => "initiative_update_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->InitiativeUpdate()->update([
  "id" => "initiative_update_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): InitiativeUpdateEntity`

Create a new `InitiativeUpdateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IntegrationEntity

```php
$integration = $client->Integration();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `creator` | `array` | No | The user that added the integration. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `organization` | `array` | No | The workspace that the integration is associated with. |
| `service` | `string` | Yes | The integration's type, identifying which external service this integration connects to (e.g., 'slack', 'github', 'jira', 'figma'). |
| `team` | `array` | No | The team that the integration is associated with. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Integration()->create([
  "createdAt" => null, // mixed
  "id" => null, // string
  "service" => null, // string
  "updatedAt" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Integration()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Integration()->load(["id" => "integration_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Integration()->remove(["id" => "integration_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Integration()->update([
  "id" => "integration_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IntegrationEntity`

Create a new `IntegrationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IntegrationTemplateEntity

```php
$integration_template = $client->IntegrationTemplate();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `foreignEntityId` | `string` | No | The identifier of the foreign entity in the external service that this template is scoped to. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `integration` | `array` | No | The integration that the template is associated with. |
| `template` | `array` | No | The template that the integration is associated with. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->IntegrationTemplate()->create([
  "createdAt" => null, // mixed
  "id" => null, // string
  "updatedAt" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->IntegrationTemplate()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->IntegrationTemplate()->load(["id" => "integration_template_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->IntegrationTemplate()->remove(["id" => "integration_template_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IntegrationTemplateEntity`

Create a new `IntegrationTemplateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IntegrationsSettingEntity

```php
$integrations_setting = $client->IntegrationsSetting();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `contextViewType` | `string` | No | The type of view to which the integration settings context is associated with. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiative` | `array` | No | Initiative which those settings apply to. |
| `microsoftTeamsProjectUpdateCreated` | `bool` | No | Whether to send a Microsoft Teams message when a project update is created. |
| `project` | `array` | No | Project which those settings apply to. |
| `slackInitiativeUpdateCreated` | `bool` | No | Whether to send a Slack message when an initiative update is created. |
| `slackIssueAddedToTriage` | `bool` | No | Whether to send a Slack message when a new issue is added to triage. |
| `slackIssueAddedToView` | `bool` | No | Whether to send a Slack message when an issue is added to the custom view. |
| `slackIssueNewComment` | `bool` | No | Whether to send a Slack message when a comment is created on any of the project or team's issues. |
| `slackIssueSlaBreached` | `bool` | No | Whether to send a Slack message when an SLA is breached. |
| `slackIssueSlaHighRisk` | `bool` | No | Whether to send a Slack message when an SLA is at high risk. |
| `slackIssueStatusChangedAll` | `bool` | No | Whether to send a Slack message when any of the project or team's issues has a change in status. |
| `slackIssueStatusChangedDone` | `bool` | No | Whether to send a Slack message when any of the project or team's issues change to completed or canceled. |
| `slackProjectUpdateCreated` | `bool` | No | Whether to send a Slack message when a project update is created. |
| `slackProjectUpdateCreatedToTeam` | `bool` | No | Whether to send a new project update to team Slack channels. |
| `slackProjectUpdateCreatedToWorkspace` | `bool` | No | Whether to send a new project update to workspace Slack channel. |
| `team` | `array` | No | Team which those settings apply to. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->IntegrationsSetting()->create([
  "createdAt" => null, // mixed
  "id" => null, // string
  "updatedAt" => null, // mixed
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->IntegrationsSetting()->load(["id" => "integrations_setting_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->IntegrationsSetting()->update([
  "id" => "integrations_setting_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IntegrationsSettingEntity`

Create a new `IntegrationsSettingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IssueEntity

```php
$issue = $client->Issue();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activitySummary` | `mixed` | No | [Internal] The activity summary information for this issue. |
| `addedToCycleAt` | `mixed` | No | The time at which the issue was added to a cycle. |
| `addedToProjectAt` | `mixed` | No | The time at which the issue was added to a project. |
| `addedToTeamAt` | `mixed` | No | The time at which the issue was added to a team. |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `asksExternalUserRequester` | `array` | No | The external user who requested creation of the Asks issue on behalf of the creator. |
| `asksRequester` | `array` | No | The internal user who requested creation of the Asks issue on behalf of the creator. |
| `assignee` | `array` | No | The user to whom the issue is assigned. |
| `autoArchivedAt` | `mixed` | No | The time at which the issue was automatically archived by the auto pruning process. |
| `autoClosedAt` | `mixed` | No | The time at which the issue was automatically closed by the auto pruning process. |
| `botActor` | `array` | No | The bot that created the issue, if applicable. |
| `branchName` | `string` | Yes | Suggested branch name for the issue. |
| `canceledAt` | `mixed` | No | The time at which the issue was moved into canceled state. |
| `completedAt` | `mixed` | No | The time at which the issue was moved into completed state. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `creator` | `array` | No | The user who created the issue. |
| `customerTicketCount` | `int` | Yes | Returns the number of Attachment resources which are created by customer support ticketing systems (e.g. |
| `cycle` | `array` | No | The cycle that the issue is associated with. |
| `delegate` | `array` | No | The agent user that is delegated to work on this issue. |
| `description` | `string` | No | The issue's description in markdown format. |
| `descriptionState` | `string` | No | [Internal] The issue's description content as YJS state. |
| `documentContent` | `array` | No | [ALPHA] The document content representing this issue description. |
| `dueDate` | `mixed` | No | The date at which the issue is due. |
| `estimate` | `float` | No | The estimate of the complexity of the issue. |
| `externalUserCreator` | `array` | No | The external user who created the issue. |
| `favorite` | `array` | No | The users favorite associated with this issue. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `identifier` | `string` | Yes | Issue's human readable identifier (e.g. |
| `inheritsSharedAccess` | `bool` | Yes | Whether this issue inherits shared access from its parent issue. |
| `integrationSourceType` | `string` | No | Integration type that created this issue, if applicable. |
| `labelIds` | `string` | Yes | Identifiers of the labels associated with this issue. |
| `lastAppliedTemplate` | `array` | No | The last template that was applied to this issue. |
| `number` | `float` | Yes | The issue's unique number, scoped to the issue's team. |
| `parent` | `array` | No | The parent of the issue. |
| `previousIdentifiers` | `string` | Yes | Previous identifiers of the issue if it has been moved between teams. |
| `priority` | `float` | Yes | The priority of the issue. |
| `priorityLabel` | `string` | Yes | Label for the priority. |
| `prioritySortOrder` | `float` | Yes | The order of the item in relation to other items in the workspace, when ordered by priority. |
| `project` | `array` | No | The project that the issue is associated with. |
| `projectMilestone` | `array` | No | The project milestone that the issue is associated with. |
| `reactionData` | `mixed` | Yes | Emoji reaction summary for the issue, grouped by emoji type. |
| `recurringIssueTemplate` | `array` | No | The recurring issue template that created this issue. |
| `slaBreachesAt` | `mixed` | No | The time at which the issue's SLA will breach. |
| `slaHighRiskAt` | `mixed` | No | The time at which the issue's SLA will enter high risk state. |
| `slaMediumRiskAt` | `mixed` | No | The time at which the issue's SLA will enter medium risk state. |
| `slaStartedAt` | `mixed` | No | The time at which the issue's SLA began. |
| `slaType` | `string` | No | The type of SLA set on the issue. |
| `snoozedBy` | `array` | No | The user who snoozed the issue. |
| `snoozedUntilAt` | `mixed` | No | The time until an issue will be snoozed in Triage view. |
| `sortOrder` | `float` | Yes | The order of the item in relation to other items in the organization. |
| `sourceComment` | `array` | No | The comment that this issue was created from, when an issue is created from an existing comment. |
| `startedAt` | `mixed` | No | The time at which the issue was moved into started state. |
| `startedTriageAt` | `mixed` | No | The time at which the issue entered triage. |
| `state` | `array` | No | The workflow state (issue status) that the issue is currently in. |
| `subIssueSortOrder` | `float` | No | The order of the item in the sub-issue list. |
| `suggestionsGeneratedAt` | `mixed` | No | [Internal] The time at which the most recent suggestions for this issue were generated. |
| `summary` | `array` | No | [Internal] AI-generated activity summary for this issue. |
| `team` | `array` | No | The team that the issue belongs to. |
| `title` | `string` | Yes | The issue's title. |
| `trashed` | `bool` | No | A flag that indicates whether the issue is in the trash bin. |
| `triagedAt` | `mixed` | No | The time at which the issue left triage. |
| `trusted` | `bool` | No | [Internal] Whether this issue has been explicitly marked as trusted. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | Issue URL. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Issue()->create([
  "branchName" => null, // string
  "createdAt" => null, // mixed
  "customerTicketCount" => null, // int
  "id" => null, // string
  "identifier" => null, // string
  "inheritsSharedAccess" => null, // bool
  "labelIds" => null, // string
  "number" => null, // float
  "previousIdentifiers" => null, // string
  "priority" => null, // float
  "priorityLabel" => null, // string
  "prioritySortOrder" => null, // float
  "reactionData" => null, // mixed
  "sortOrder" => null, // float
  "title" => null, // string
  "updatedAt" => null, // mixed
  "url" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Issue()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Issue()->load(["id" => "issue_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Issue()->remove(["id" => "issue_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Issue()->update([
  "id" => "issue_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IssueEntity`

Create a new `IssueEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IssueImportEntity

```php
$issue_import = $client->IssueImport();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `creatorId` | `string` | No | Identifier of the user who started the import job. |
| `csvFileUrl` | `string` | No | File URL for the uploaded CSV for the import, if there is one. |
| `displayName` | `string` | Yes | The display name of the import service. |
| `error` | `string` | No | User readable error message, if one has occurred during the import. |
| `errorMetadata` | `mixed` | No | Error code and metadata, if one has occurred during the import. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `mapping` | `mixed` | No | The data mapping configuration for the import job. |
| `progress` | `float` | No | Current step progress as a percentage (0-100). |
| `service` | `string` | Yes | The external service from which data is being imported (e.g., jira, asana, github, shortcut, linear). |
| `serviceMetadata` | `mixed` | No | Metadata related to import service. |
| `status` | `string` | Yes | The current status of the import job, indicating its position in the import lifecycle (e.g., not started, in progress, complete, error). |
| `teamName` | `string` | No | The name of the new team to be created for the import, when the import is configured to create a new team rather than importing into an existing one. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->IssueImport()->create([
  "createdAt" => null, // mixed
  "displayName" => null, // string
  "service" => null, // string
  "status" => null, // string
  "updatedAt" => null, // mixed
]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->IssueImport()->remove(["issue_import_id" => "issue_import_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->IssueImport()->update([
  "id" => "id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IssueImportEntity`

Create a new `IssueImportEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IssueLabelEntity

```php
$issue_label = $client->IssueLabel();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `color` | `string` | Yes | The label's color as a HEX string (e.g., '#EB5757'). |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `creator` | `array` | No | The user who created the label. |
| `description` | `string` | No | The label's description. |
| `groupType` | `string` | No | The selection mode of this label group. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `inheritedFrom` | `array` | No | The original workspace or parent-team label that this label was inherited from. |
| `isGroup` | `bool` | Yes | Whether the label is a group. |
| `lastAppliedAt` | `mixed` | No | The date when the label was last applied to an issue, project, or initiative. |
| `name` | `string` | Yes | The label's name. |
| `parent` | `array` | No | The parent label. |
| `retiredAt` | `mixed` | No | [Internal] When the label was retired. |
| `retiredBy` | `array` | No | The user who retired the label. |
| `team` | `array` | No | The team that the label is scoped to. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->IssueLabel()->create([
  "color" => null, // string
  "createdAt" => null, // mixed
  "id" => null, // string
  "isGroup" => null, // bool
  "name" => null, // string
  "updatedAt" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->IssueLabel()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->IssueLabel()->load(["id" => "issue_label_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->IssueLabel()->remove(["id" => "issue_label_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->IssueLabel()->update([
  "id" => "issue_label_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IssueLabelEntity`

Create a new `IssueLabelEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IssuePriorityValueEntity

```php
$issue_priority_value = $client->IssuePriorityValue();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `string` | Yes | Priority's label. |
| `priority` | `int` | Yes | Priority's number value. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->IssuePriorityValue()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IssuePriorityValueEntity`

Create a new `IssuePriorityValueEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IssueRelationEntity

```php
$issue_relation = $client->IssueRelation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `issue` | `array` | No | The source issue whose relationship is being described. |
| `relatedIssue` | `array` | No | The target issue that the source issue is related to. |
| `type` | `string` | Yes | The type of relationship between the source issue and the related issue. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->IssueRelation()->create([
  "createdAt" => null, // mixed
  "id" => null, // string
  "type" => null, // string
  "updatedAt" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->IssueRelation()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->IssueRelation()->load(["id" => "issue_relation_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->IssueRelation()->remove(["id" => "issue_relation_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->IssueRelation()->update([
  "id" => "issue_relation_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IssueRelationEntity`

Create a new `IssueRelationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IssueSearchResultEntity

```php
$issue_search_result = $client->IssueSearchResult();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activitySummary` | `mixed` | No | [Internal] The activity summary information for this issue. |
| `addedToCycleAt` | `mixed` | No | The time at which the issue was added to a cycle. |
| `addedToProjectAt` | `mixed` | No | The time at which the issue was added to a project. |
| `addedToTeamAt` | `mixed` | No | The time at which the issue was added to a team. |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `asksExternalUserRequester` | `array` | No | The external user who requested creation of the Asks issue on behalf of the creator. |
| `asksRequester` | `array` | No | The internal user who requested creation of the Asks issue on behalf of the creator. |
| `assignee` | `array` | No | The user to whom the issue is assigned. |
| `autoArchivedAt` | `mixed` | No | The time at which the issue was automatically archived by the auto pruning process. |
| `autoClosedAt` | `mixed` | No | The time at which the issue was automatically closed by the auto pruning process. |
| `botActor` | `array` | No | The bot that created the issue, if applicable. |
| `branchName` | `string` | Yes | Suggested branch name for the issue. |
| `canceledAt` | `mixed` | No | The time at which the issue was moved into canceled state. |
| `completedAt` | `mixed` | No | The time at which the issue was moved into completed state. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `creator` | `array` | No | The user who created the issue. |
| `customerTicketCount` | `int` | Yes | Returns the number of Attachment resources which are created by customer support ticketing systems (e.g. |
| `cycle` | `array` | No | The cycle that the issue is associated with. |
| `delegate` | `array` | No | The agent user that is delegated to work on this issue. |
| `description` | `string` | No | The issue's description in markdown format. |
| `descriptionState` | `string` | No | [Internal] The issue's description content as YJS state. |
| `documentContent` | `array` | No | [ALPHA] The document content representing this issue description. |
| `dueDate` | `mixed` | No | The date at which the issue is due. |
| `estimate` | `float` | No | The estimate of the complexity of the issue. |
| `externalUserCreator` | `array` | No | The external user who created the issue. |
| `favorite` | `array` | No | The users favorite associated with this issue. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `identifier` | `string` | Yes | Issue's human readable identifier (e.g. |
| `inheritsSharedAccess` | `bool` | Yes | Whether this issue inherits shared access from its parent issue. |
| `integrationSourceType` | `string` | No | Integration type that created this issue, if applicable. |
| `labelIds` | `string` | Yes | Identifiers of the labels associated with this issue. |
| `lastAppliedTemplate` | `array` | No | The last template that was applied to this issue. |
| `metadata` | `mixed` | Yes | Metadata related to search result. |
| `number` | `float` | Yes | The issue's unique number, scoped to the issue's team. |
| `parent` | `array` | No | The parent of the issue. |
| `previousIdentifiers` | `string` | Yes | Previous identifiers of the issue if it has been moved between teams. |
| `priority` | `float` | Yes | The priority of the issue. |
| `priorityLabel` | `string` | Yes | Label for the priority. |
| `prioritySortOrder` | `float` | Yes | The order of the item in relation to other items in the workspace, when ordered by priority. |
| `project` | `array` | No | The project that the issue is associated with. |
| `projectMilestone` | `array` | No | The project milestone that the issue is associated with. |
| `reactionData` | `mixed` | Yes | Emoji reaction summary for the issue, grouped by emoji type. |
| `recurringIssueTemplate` | `array` | No | The recurring issue template that created this issue. |
| `slaBreachesAt` | `mixed` | No | The time at which the issue's SLA will breach. |
| `slaHighRiskAt` | `mixed` | No | The time at which the issue's SLA will enter high risk state. |
| `slaMediumRiskAt` | `mixed` | No | The time at which the issue's SLA will enter medium risk state. |
| `slaStartedAt` | `mixed` | No | The time at which the issue's SLA began. |
| `slaType` | `string` | No | The type of SLA set on the issue. |
| `snoozedBy` | `array` | No | The user who snoozed the issue. |
| `snoozedUntilAt` | `mixed` | No | The time until an issue will be snoozed in Triage view. |
| `sortOrder` | `float` | Yes | The order of the item in relation to other items in the organization. |
| `sourceComment` | `array` | No | The comment that this issue was created from, when an issue is created from an existing comment. |
| `startedAt` | `mixed` | No | The time at which the issue was moved into started state. |
| `startedTriageAt` | `mixed` | No | The time at which the issue entered triage. |
| `state` | `array` | No | The workflow state (issue status) that the issue is currently in. |
| `subIssueSortOrder` | `float` | No | The order of the item in the sub-issue list. |
| `suggestionsGeneratedAt` | `mixed` | No | [Internal] The time at which the most recent suggestions for this issue were generated. |
| `summary` | `array` | No | [Internal] AI-generated activity summary for this issue. |
| `team` | `array` | No | The team that the issue belongs to. |
| `title` | `string` | Yes | The issue's title. |
| `trashed` | `bool` | No | A flag that indicates whether the issue is in the trash bin. |
| `triagedAt` | `mixed` | No | The time at which the issue left triage. |
| `trusted` | `bool` | No | [Internal] Whether this issue has been explicitly marked as trusted. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | Issue URL. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->IssueSearchResult()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IssueSearchResultEntity`

Create a new `IssueSearchResultEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IssueToReleaseEntity

```php
$issue_to_release = $client->IssueToRelease();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `issue` | `array` | No | The issue that is linked to the release. |
| `release` | `array` | No | The release that the issue is linked to. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->IssueToRelease()->create([
  "createdAt" => null, // mixed
  "id" => null, // string
  "updatedAt" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->IssueToRelease()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->IssueToRelease()->load(["id" => "issue_to_release_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->IssueToRelease()->remove(["id" => "issue_to_release_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IssueToReleaseEntity`

Create a new `IssueToReleaseEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LogoutResponseEntity

```php
$logout_response = $client->LogoutResponse();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `bool` | Yes | Whether the operation was successful. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->LogoutResponse()->create([
  "success" => null, // bool
]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->LogoutResponse()->update([
  "session_id" => "session_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LogoutResponseEntity`

Create a new `LogoutResponseEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NotificationEntity

```php
$notification = $client->Notification();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `array` | No | The user that caused the notification. |
| `actorAvatarColor` | `string` | Yes | [Internal] Notification actor initials if avatar is not available. |
| `actorAvatarUrl` | `string` | No | [Internal] Notification avatar URL. |
| `actorInactive` | `bool` | Yes | [Internal] Whether the notification's user actor is deactivated in the workspace. |
| `actorInitials` | `string` | No | [Internal] Notification actor initials if avatar is not available. |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `botActor` | `array` | No | The bot that caused the notification. |
| `category` | `string` | Yes | The category of the notification. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `emailedAt` | `mixed` | No | The time at which an email reminder for this notification was sent to the user. |
| `externalUserActor` | `array` | No | The external user that caused the notification. |
| `groupingKey` | `string` | Yes | [Internal] Notifications with the same grouping key will be grouped together in the UI. |
| `groupingPriority` | `float` | Yes | [Internal] Priority of the notification with the same grouping key. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `inboxUrl` | `string` | Yes | [Internal] Inbox URL for the notification. |
| `initiativeUpdateHealth` | `string` | No | [Internal] Initiative update health for new updates. |
| `isLinearActor` | `bool` | Yes | [Internal] If notification actor was Linear. |
| `issueStatusType` | `string` | No | [Internal] Issue's status type for issue notifications. |
| `projectUpdateHealth` | `string` | No | [Internal] Project update health for new updates. |
| `readAt` | `mixed` | No | The time at which the user marked the notification as read. |
| `snoozedUntilAt` | `mixed` | No | The time until which a notification is snoozed. |
| `subtitle` | `string` | Yes | [Internal] Notification subtitle. |
| `title` | `string` | Yes | [Internal] Notification title. |
| `type` | `string` | Yes | Notification type. |
| `unsnoozedAt` | `mixed` | No | The time at which a notification was unsnoozed. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | [Internal] URL to the target of the notification. |
| `user` | `array` | No | The recipient user of this notification. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Notification()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Notification()->load(["id" => "notification_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NotificationEntity`

Create a new `NotificationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NotificationSubscriptionEntity

```php
$notification_subscription = $client->NotificationSubscription();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Whether the subscription is active. |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `contextViewType` | `string` | No | The type of contextual view (e.g., active issues, backlog) that further scopes a team notification subscription. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `customView` | `array` | No | The custom view that this notification subscription is scoped to. |
| `customer` | `array` | No | The customer that this notification subscription is scoped to. |
| `cycle` | `array` | No | The cycle that this notification subscription is scoped to. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiative` | `array` | No | The initiative that this notification subscription is scoped to. |
| `label` | `array` | No | The issue label that this notification subscription is scoped to. |
| `project` | `array` | No | The project that this notification subscription is scoped to. |
| `subscriber` | `array` | No | The user who will receive notifications from this subscription. |
| `team` | `array` | No | The team that this notification subscription is scoped to. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `array` | No | The user that this notification subscription is scoped to, for user-specific view subscriptions. |
| `userContextViewType` | `string` | No | The type of user-specific view that further scopes a user notification subscription. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->NotificationSubscription()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->NotificationSubscription()->load(["id" => "notification_subscription_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NotificationSubscriptionEntity`

Create a new `NotificationSubscriptionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OAuthApplicationEntity

```php
$o_auth_application = $client->OAuthApplication();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `clientId` | `string` | Yes | The client ID used during OAuth authorization flows. |
| `createdAt` | `mixed` | Yes | The time at which the OAuth application was created. |
| `description` | `string` | No | User-facing description of the OAuth application. |
| `developer` | `string` | Yes | Name of the developer or company that built the OAuth application. |
| `developerUrl` | `string` | Yes | URL of the developer's website, homepage, or documentation. |
| `distribution` | `string` | Yes | Distribution setting for the OAuth application. |
| `grantTypes` | `string` | Yes | OAuth grant types supported by this application. |
| `id` | `string` | Yes | The unique identifier of the OAuth application. |
| `imageUrl` | `string` | No | URL of the OAuth application's icon. |
| `name` | `string` | Yes | The human-readable name of the OAuth application. |
| `redirectUris` | `string` | Yes | Allowed redirect URIs for OAuth authorization flows. |
| `updatedAt` | `mixed` | Yes | The time at which the OAuth application was last updated. |
| `webhookEnabled` | `bool` | Yes | Whether webhook delivery is enabled for this OAuth application. |
| `webhookResourceTypes` | `string` | Yes | Resource types the OAuth application's webhooks subscribe to. |
| `webhookUrl` | `string` | No | Webhook URL used for delivering webhook payloads. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->OAuthApplication()->create([
  "clientId" => null, // string
  "createdAt" => null, // mixed
  "developer" => null, // string
  "developerUrl" => null, // string
  "distribution" => null, // string
  "grantTypes" => null, // string
  "id" => null, // string
  "name" => null, // string
  "redirectUris" => null, // string
  "updatedAt" => null, // mixed
  "webhookEnabled" => null, // bool
  "webhookResourceTypes" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->OAuthApplication()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->OAuthApplication()->load(["id" => "o_auth_application_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->OAuthApplication()->update([
  "id" => "o_auth_application_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OAuthApplicationEntity`

Create a new `OAuthApplicationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrganizationEntity

```php
$organization = $client->Organization();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentAutomationEnabled` | `bool` | Yes | [INTERNAL] Whether the workspace has enabled agent automation. |
| `aiAddonEnabled` | `bool` | Yes | [INTERNAL] Whether the workspace has enabled the AI add-on (which at this point only includes triage suggestions). |
| `aiDiscussionSummariesEnabled` | `bool` | Yes | Whether the workspace has enabled AI discussion summaries for issues. |
| `aiProviderConfiguration` | `mixed` | No | [INTERNAL] Configure per-modality AI host providers and model families. |
| `aiTelemetryEnabled` | `bool` | Yes | [INTERNAL] Whether the workspace has opted in to AI telemetry. |
| `aiThreadSummariesEnabled` | `bool` | Yes | Whether the workspace has enabled resolved thread AI summaries. |
| `allowedFileUploadContentTypes` | `string` | No | Allowed file upload content types |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `authSettings` | `mixed` | Yes | Authentication settings for the workspace, including allowed auth providers, bypass rules, and organization visibility during signup. |
| `codeIntelligenceEnabled` | `bool` | Yes | [INTERNAL] Whether code intelligence is enabled for the workspace. |
| `codeIntelligenceRepository` | `string` | No | [INTERNAL] GitHub repository in owner/repo format for code intelligence. |
| `codingAgentEnabled` | `bool` | Yes | [INTERNAL] Whether the workspace has enabled Coding Sessions. |
| `codingAgentSettings` | `mixed` | Yes | [Internal] Settings for Coding Sessions features. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `createdIssueCount` | `int` | Yes | Approximate total number of issues created in the workspace, including archived ones. |
| `customerCount` | `int` | Yes | The number of active (non-archived) customers tracked in the workspace. |
| `customersConfiguration` | `mixed` | Yes | Configuration settings for the Customers feature, including revenue currency and other customer tracking preferences. |
| `customersEnabled` | `bool` | Yes | Whether the Customers feature is enabled and accessible for the workspace based on the current plan. |
| `defaultFeedSummarySchedule` | `string` | No | Default schedule for how often feed summaries are generated. |
| `defaultHomeView` | `string` | No | The default home view for members of the workspace who have not chosen their own default. |
| `defaultHomeViewTargetId` | `string` | No | The id of the specific initiative, project, view, dashboard, or page tab used as the default home view. |
| `deletionRequestedAt` | `mixed` | No | The time at which deletion of the workspace was requested. |
| `feedEnabled` | `bool` | Yes | Whether the activity feed feature is enabled for the workspace. |
| `fiscalYearStartMonth` | `float` | Yes | The zero-indexed month at which the fiscal year starts (0 = January, 11 = December). |
| `generatedUpdatesEnabled` | `bool` | Yes | [INTERNAL] Whether the workspace has enabled generated updates. |
| `gitBranchFormat` | `string` | No | The template format for Git branch names created from issues. |
| `gitLinkbackDescriptionsEnabled` | `bool` | Yes | Whether issue descriptions should be included in the Git integration linkback messages posted to pull requests. |
| `gitLinkbackMessagesEnabled` | `bool` | Yes | Whether the Git integration linkback messages should be posted as comments on pull requests in private repositories. |
| `gitPublicLinkbackMessagesEnabled` | `bool` | Yes | Whether the Git integration linkback messages should be posted as comments on pull requests in public repositories. |
| `hipaaComplianceEnabled` | `bool` | Yes | Whether HIPAA compliance is enabled for the workspace. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiativeUpdateReminderFrequencyInWeeks` | `float` | No | The frequency in weeks at which to prompt for initiative updates. |
| `initiativeUpdateRemindersDay` | `string` | Yes | The day of the week on which initiative update reminders are sent. |
| `initiativeUpdateRemindersHour` | `float` | Yes | The hour of the day (0-23) at which initiative update reminders are sent. |
| `linearAgentEnabled` | `bool` | Yes | [Internal] Whether the workspace has enabled Linear Agent. |
| `linearAgentSettings` | `mixed` | Yes | [Internal] Settings for Linear Agent features. |
| `logoUrl` | `string` | No | The URL of the workspace's logo image. |
| `name` | `string` | Yes | The workspace's name. |
| `periodUploadVolume` | `float` | Yes | Rolling 30-day total file upload volume for the workspace, measured in megabytes. |
| `previousUrlKeys` | `string` | Yes | Previously used URL keys for the workspace. |
| `projectUpdateReminderFrequencyInWeeks` | `float` | No | The frequency in weeks at which to prompt for project updates. |
| `projectUpdateRemindersDay` | `string` | Yes | The day of the week on which project update reminders are sent. |
| `projectUpdateRemindersHour` | `float` | Yes | The hour of the day (0-23) at which project update reminders are sent. |
| `pullRequestIssueMode` | `string` | Yes | How Linear suggests and links issues for pull requests that have none linked: 'off', 'suggest', or 'autoOnMerge'. |
| `pullRequestTourEnabled` | `bool` | Yes | Whether the workspace generates AI Pull Request guides for new pull requests. |
| `releaseChannel` | `string` | Yes | The feature release channel the workspace belongs to, which controls access to pre-release features. |
| `releasesEnabled` | `bool` | Yes | Whether release management is enabled for the workspace. |
| `restrictAgentInvocationToMembers` | `bool` | No | [Internal] Whether agent invocation is restricted to full workspace members. |
| `roadmapEnabled` | `bool` | Yes | Whether the roadmap feature is enabled for the workspace. |
| `samlEnabled` | `bool` | Yes | Whether SAML-based single sign-on authentication is enabled for the workspace. |
| `samlSettings` | `mixed` | No | [INTERNAL] SAML settings. |
| `scimEnabled` | `bool` | Yes | Whether SCIM provisioning is enabled for the workspace, allowing automated user and team management from an identity provider. |
| `scimSettings` | `mixed` | No | [INTERNAL] SCIM settings. |
| `securitySettings` | `mixed` | Yes | Security settings for the workspace, including role-based restrictions for invitations, team creation, label management, and other sensitive operations. |
| `slackAutoCreateProjectChannel` | `bool` | Yes | [Internal] Whether to automatically create a Slack channel when a new project is created. |
| `slackProjectChannelIntegration` | `array` | No | The Slack integration used for auto-creating project channels. |
| `slackProjectChannelPrefix` | `string` | Yes | The prefix used for auto-created Slack project channels. |
| `slackProjectChannelsEnabled` | `bool` | Yes | [Internal] Whether the Slack project channels feature is enabled for the workspace. |
| `subscription` | `array` | No | The workspace's subscription to a paid plan. |
| `themeSettings` | `mixed` | No | [ALPHA] Theme settings for the workspace. |
| `trialEndsAt` | `mixed` | No | The time at which the current plan trial will end. |
| `trialStartsAt` | `mixed` | No | The time at which the current plan trial started. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |
| `urlKey` | `string` | Yes | The workspace's unique URL key, used in URLs to identify the workspace. |
| `userCount` | `int` | Yes | The number of active (non-deactivated) users in the workspace. |
| `workingDays` | `float` | Yes | [Internal] The list of working days. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Organization()->load(["id" => "organization_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Organization()->remove(["id" => "organization_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Organization()->update([
  "id" => "organization_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrganizationEntity`

Create a new `OrganizationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrganizationDomainEntity

```php
$organization_domain = $client->OrganizationDomain();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `authType` | `string` | Yes | The authentication type this domain is used for. |
| `claimed` | `bool` | No | Whether the domain was claimed by the workspace through DNS TXT record verification. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `creator` | `array` | No | The user who added the domain. |
| `disableOrganizationCreation` | `bool` | No | Whether users with email addresses from this domain are prevented from creating new workspaces. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `identityProvider` | `array` | No | The identity provider the domain belongs to. |
| `name` | `string` | Yes | The domain name (e.g., 'example.com'). |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |
| `verificationEmail` | `string` | No | The email address used to verify this domain. |
| `verified` | `bool` | Yes | Whether the domain has been verified via email verification. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->OrganizationDomain()->create([
  "authType" => null, // string
  "createdAt" => null, // mixed
  "id" => null, // string
  "name" => null, // string
  "updatedAt" => null, // mixed
  "verified" => null, // bool
]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->OrganizationDomain()->remove(["id" => "id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->OrganizationDomain()->update([
  "id" => "id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrganizationDomainEntity`

Create a new `OrganizationDomainEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrganizationInviteEntity

```php
$organization_invite = $client->OrganizationInvite();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acceptedAt` | `mixed` | No | The time at which the invite was accepted by the invitee. |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `email` | `string` | Yes | The email address of the person being invited to the workspace. |
| `expiresAt` | `mixed` | No | The time at which the invite will expire and can no longer be accepted. |
| `external` | `bool` | Yes | Whether the invite was sent to an email address outside the workspace's verified domains. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `invitee` | `array` | No | The user who has accepted the invite. |
| `inviter` | `array` | No | The user who created the invitation. |
| `metadata` | `mixed` | No | Extra metadata associated with the invite. |
| `organization` | `array` | No | The workspace that the invite is associated with. |
| `role` | `string` | Yes | The workspace role (admin, member, guest, or owner) that the invitee will receive upon accepting the invite. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->OrganizationInvite()->create([
  "createdAt" => null, // mixed
  "email" => null, // string
  "external" => null, // bool
  "id" => null, // string
  "role" => null, // string
  "updatedAt" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->OrganizationInvite()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->OrganizationInvite()->load(["id" => "organization_invite_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->OrganizationInvite()->remove(["id" => "organization_invite_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->OrganizationInvite()->update([
  "id" => "organization_invite_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrganizationInviteEntity`

Create a new `OrganizationInviteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrganizationMetaEntity

```php
$organization_meta = $client->OrganizationMeta();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowedAuthServices` | `string` | Yes | Allowed authentication providers, empty array means all are allowed. |
| `region` | `string` | Yes | The region the workspace is hosted in. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->OrganizationMeta()->load(["url_key" => "url_key"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrganizationMetaEntity`

Create a new `OrganizationMetaEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PasskeyLoginStartResponseEntity

```php
$passkey_login_start_response = $client->PasskeyLoginStartResponse();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `options` | `mixed` | Yes | The passkey authentication options to pass to the WebAuthn API. |
| `success` | `bool` | Yes | Whether the operation was successful. |

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->PasskeyLoginStartResponse()->update([
  "auth_id" => "auth_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PasskeyLoginStartResponseEntity`

Create a new `PasskeyLoginStartResponseEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectEntity

```php
$project = $client->Project();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `autoArchivedAt` | `mixed` | No | The time at which the project was automatically archived by the auto-pruning process. |
| `canceledAt` | `mixed` | No | The time at which the project was moved into a canceled status. |
| `color` | `string` | Yes | The project's color as a HEX string. |
| `completedAt` | `mixed` | No | The time at which the project was moved into a completed status. |
| `completedIssueCountHistory` | `float` | Yes | The number of completed issues in the project at the end of each week since project creation. |
| `completedScopeHistory` | `float` | Yes | The number of completed estimation points at the end of each week since project creation. |
| `content` | `string` | No | The project's content in markdown format. |
| `contentState` | `string` | No | [Internal] The project's content as YJS state. |
| `convertedFromIssue` | `array` | No | The issue that was converted into this project. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `creator` | `array` | No | The user who created the project. |
| `currentProgress` | `mixed` | Yes | [INTERNAL] The current progress of the project, broken down by issue status category. |
| `description` | `string` | Yes | The short description of the project. |
| `documentContent` | `array` | No | The content of the project description. |
| `favorite` | `array` | No | The user's favorite associated with this project. |
| `frequencyResolution` | `string` | Yes | The resolution of the reminder frequency. |
| `health` | `string` | No | The overall health of the project, derived from the most recent project update. |
| `healthUpdatedAt` | `mixed` | No | The time at which the project health was last updated, typically when a new project update is posted. |
| `icon` | `string` | No | The icon of the project. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `identifier` | `string` | No | [Internal] The human-readable identifier of the project. |
| `inProgressScopeHistory` | `float` | Yes | The number of in-progress estimation points at the end of each week since project creation. |
| `integrationsSettings` | `array` | No | Settings for all integrations associated with that project. |
| `issueCountHistory` | `float` | Yes | The total number of issues in the project at the end of each week since project creation. |
| `labelIds` | `string` | Yes | The IDs of the project labels associated with this project. |
| `lastAppliedTemplate` | `array` | No | The last template that was applied to this project. |
| `lastUpdate` | `array` | No | The most recent status update posted for this project. |
| `lead` | `array` | No | The user who leads the project. |
| `leadTeam` | `array` | No | [Internal] The team that leads the project. |
| `microsoftTeamsChannelId` | `string` | No | The ID of the Microsoft Teams channel connected to the project, if any. |
| `name` | `string` | Yes | The name of the project. |
| `previousIdentifiers` | `string` | Yes | [Internal] Identifiers (default and custom) that this project has previously held. |
| `priority` | `int` | Yes | The priority of the project. |
| `priorityLabel` | `string` | Yes | The priority of the project as a label. |
| `prioritySortOrder` | `float` | Yes | The sort order for the project within the workspace when ordered by priority. |
| `progress` | `float` | Yes | The overall progress of the project. |
| `progressHistory` | `mixed` | Yes | [INTERNAL] The progress history of the project, tracking issue completion over time. |
| `projectUpdateRemindersPausedUntilAt` | `mixed` | No | The time until which project update reminders are paused. |
| `resourceCount` | `int` | Yes | The number of resources associated with the project, including documents, external links, and attachments. |
| `scope` | `float` | Yes | The overall scope (total estimate points) of the project. |
| `scopeHistory` | `float` | Yes | The total scope (estimation points) of the project at the end of each week since project creation. |
| `slackChannelId` | `string` | No | The ID of the Slack channel connected to the project, if any. |
| `slugId` | `string` | Yes | The project's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `float` | Yes | The sort order for the project within the workspace. |
| `startDate` | `mixed` | No | The estimated start date of the project. |
| `startDateResolution` | `string` | No | The resolution of the project's start date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `startedAt` | `mixed` | No | The time at which the project was moved into a started status. |
| `status` | `array` | No | The current project status. |
| `targetDate` | `mixed` | No | The estimated completion date of the project. |
| `targetDateResolution` | `string` | No | The resolution of the project's estimated completion date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `trashed` | `bool` | No | A flag that indicates whether the project is in the trash bin. |
| `updateReminderFrequency` | `float` | No | The frequency at which to prompt for updates. |
| `updateReminderFrequencyInWeeks` | `float` | No | The n-weekly frequency at which to prompt for updates. |
| `updateRemindersDay` | `string` | No | The day at which to prompt for updates. |
| `updateRemindersHour` | `float` | No | The hour at which to prompt for updates. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | Project URL. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Project()->create([
  "color" => null, // string
  "completedIssueCountHistory" => null, // float
  "completedScopeHistory" => null, // float
  "createdAt" => null, // mixed
  "currentProgress" => null, // mixed
  "description" => null, // string
  "frequencyResolution" => null, // string
  "id" => null, // string
  "inProgressScopeHistory" => null, // float
  "issueCountHistory" => null, // float
  "labelIds" => null, // string
  "name" => null, // string
  "previousIdentifiers" => null, // string
  "priority" => null, // int
  "priorityLabel" => null, // string
  "prioritySortOrder" => null, // float
  "progress" => null, // float
  "progressHistory" => null, // mixed
  "resourceCount" => null, // int
  "scope" => null, // float
  "scopeHistory" => null, // float
  "slugId" => null, // string
  "sortOrder" => null, // float
  "updatedAt" => null, // mixed
  "url" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Project()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Project()->load(["id" => "project_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Project()->remove(["id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Project()->update([
  "id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectEntity`

Create a new `ProjectEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectLabelEntity

```php
$project_label = $client->ProjectLabel();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `color` | `string` | Yes | The label's color as a HEX string (e.g., '#EB5757'). |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `creator` | `array` | No | The user who created the label. |
| `description` | `string` | No | The label's description. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `inheritedFrom` | `array` | No | [Internal] The original workspace or parent-team label that this label was inherited from. |
| `isGroup` | `bool` | Yes | Whether the label is a group. |
| `lastAppliedAt` | `mixed` | No | The date when the label was last applied to an issue, project, or initiative. |
| `name` | `string` | Yes | The label's name. |
| `organization` | `array` | No | The workspace that the project label belongs to. |
| `parent` | `array` | No | The parent label group. |
| `retiredAt` | `mixed` | No | [Internal] When the label was retired. |
| `retiredBy` | `array` | No | The user who retired the label. |
| `team` | `array` | No | [Internal] The team that the label is scoped to. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ProjectLabel()->create([
  "color" => null, // string
  "createdAt" => null, // mixed
  "id" => null, // string
  "isGroup" => null, // bool
  "name" => null, // string
  "updatedAt" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ProjectLabel()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ProjectLabel()->load(["id" => "project_label_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ProjectLabel()->remove(["id" => "project_label_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ProjectLabel()->update([
  "id" => "project_label_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectLabelEntity`

Create a new `ProjectLabelEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectMilestoneEntity

```php
$project_milestone = $client->ProjectMilestone();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `currentProgress` | `mixed` | Yes | [Internal] The current progress of the milestone, broken down by issue status category. |
| `description` | `string` | No | The project milestone's description in markdown format. |
| `descriptionState` | `string` | No | [Internal] The project milestone's description as YJS state. |
| `documentContent` | `array` | No | The rich-text content of the milestone description. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `name` | `string` | Yes | The name of the project milestone. |
| `progress` | `float` | Yes | The progress % of the project milestone. |
| `progressHistory` | `mixed` | Yes | [Internal] The progress history of the milestone, tracking issue completion over time. |
| `project` | `array` | No | The project that this milestone belongs to. |
| `sortOrder` | `float` | Yes | The order of the milestone in relation to other milestones within a project. |
| `status` | `string` | Yes | The status of the project milestone. |
| `targetDate` | `mixed` | No | The planned completion date of the milestone. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ProjectMilestone()->create([
  "createdAt" => null, // mixed
  "currentProgress" => null, // mixed
  "id" => null, // string
  "name" => null, // string
  "progress" => null, // float
  "progressHistory" => null, // mixed
  "sortOrder" => null, // float
  "status" => null, // string
  "updatedAt" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ProjectMilestone()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ProjectMilestone()->load(["id" => "project_milestone_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ProjectMilestone()->remove(["id" => "project_milestone_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ProjectMilestone()->update([
  "id" => "project_milestone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectMilestoneEntity`

Create a new `ProjectMilestoneEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectMilestoneMoveProjectTeamEntity

```php
$project_milestone_move_project_team = $client->ProjectMilestoneMoveProjectTeam();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `projectId` | `string` | Yes | The project id |
| `teamIds` | `string` | Yes | The team ids for the project |

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ProjectMilestoneMoveProjectTeam()->update([
  "id" => "id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectMilestoneMoveProjectTeamEntity`

Create a new `ProjectMilestoneMoveProjectTeamEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectRelationEntity

```php
$project_relation = $client->ProjectRelation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `anchorType` | `string` | Yes | The type of anchor on the source project end of the relation, indicating whether it is anchored to the project itself or a specific milestone. |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `project` | `array` | No | The source project in the dependency relation. |
| `projectMilestone` | `array` | No | The specific milestone within the source project that the relation is anchored to. |
| `relatedAnchorType` | `string` | Yes | The type of anchor on the target project end of the relation, indicating whether it is anchored to the project itself or a specific milestone. |
| `relatedProject` | `array` | No | The target project in the dependency relation. |
| `relatedProjectMilestone` | `array` | No | The specific milestone within the target project that the relation is anchored to. |
| `type` | `string` | Yes | The type of dependency relationship from the project to the related project (e.g., blocks). |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `array` | No | The user who last created or modified the relation. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ProjectRelation()->create([
  "anchorType" => null, // string
  "createdAt" => null, // mixed
  "id" => null, // string
  "relatedAnchorType" => null, // string
  "type" => null, // string
  "updatedAt" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ProjectRelation()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ProjectRelation()->load(["id" => "project_relation_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ProjectRelation()->remove(["id" => "project_relation_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ProjectRelation()->update([
  "id" => "project_relation_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectRelationEntity`

Create a new `ProjectRelationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectSearchResultEntity

```php
$project_search_result = $client->ProjectSearchResult();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `autoArchivedAt` | `mixed` | No | The time at which the project was automatically archived by the auto-pruning process. |
| `canceledAt` | `mixed` | No | The time at which the project was moved into a canceled status. |
| `color` | `string` | Yes | The project's color as a HEX string. |
| `completedAt` | `mixed` | No | The time at which the project was moved into a completed status. |
| `completedIssueCountHistory` | `float` | Yes | The number of completed issues in the project at the end of each week since project creation. |
| `completedScopeHistory` | `float` | Yes | The number of completed estimation points at the end of each week since project creation. |
| `content` | `string` | No | The project's content in markdown format. |
| `contentState` | `string` | No | [Internal] The project's content as YJS state. |
| `convertedFromIssue` | `array` | No | The issue that was converted into this project. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `creator` | `array` | No | The user who created the project. |
| `currentProgress` | `mixed` | Yes | [INTERNAL] The current progress of the project, broken down by issue status category. |
| `description` | `string` | Yes | The short description of the project. |
| `documentContent` | `array` | No | The content of the project description. |
| `favorite` | `array` | No | The user's favorite associated with this project. |
| `frequencyResolution` | `string` | Yes | The resolution of the reminder frequency. |
| `health` | `string` | No | The overall health of the project, derived from the most recent project update. |
| `healthUpdatedAt` | `mixed` | No | The time at which the project health was last updated, typically when a new project update is posted. |
| `icon` | `string` | No | The icon of the project. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `identifier` | `string` | No | [Internal] The human-readable identifier of the project. |
| `inProgressScopeHistory` | `float` | Yes | The number of in-progress estimation points at the end of each week since project creation. |
| `integrationsSettings` | `array` | No | Settings for all integrations associated with that project. |
| `issueCountHistory` | `float` | Yes | The total number of issues in the project at the end of each week since project creation. |
| `labelIds` | `string` | Yes | The IDs of the project labels associated with this project. |
| `lastAppliedTemplate` | `array` | No | The last template that was applied to this project. |
| `lastUpdate` | `array` | No | The most recent status update posted for this project. |
| `lead` | `array` | No | The user who leads the project. |
| `leadTeam` | `array` | No | [Internal] The team that leads the project. |
| `metadata` | `mixed` | Yes | Metadata related to search result. |
| `microsoftTeamsChannelId` | `string` | No | The ID of the Microsoft Teams channel connected to the project, if any. |
| `name` | `string` | Yes | The name of the project. |
| `previousIdentifiers` | `string` | Yes | [Internal] Identifiers (default and custom) that this project has previously held. |
| `priority` | `int` | Yes | The priority of the project. |
| `priorityLabel` | `string` | Yes | The priority of the project as a label. |
| `prioritySortOrder` | `float` | Yes | The sort order for the project within the workspace when ordered by priority. |
| `progress` | `float` | Yes | The overall progress of the project. |
| `progressHistory` | `mixed` | Yes | [INTERNAL] The progress history of the project, tracking issue completion over time. |
| `projectUpdateRemindersPausedUntilAt` | `mixed` | No | The time until which project update reminders are paused. |
| `resourceCount` | `int` | Yes | The number of resources associated with the project, including documents, external links, and attachments. |
| `scope` | `float` | Yes | The overall scope (total estimate points) of the project. |
| `scopeHistory` | `float` | Yes | The total scope (estimation points) of the project at the end of each week since project creation. |
| `slackChannelId` | `string` | No | The ID of the Slack channel connected to the project, if any. |
| `slugId` | `string` | Yes | The project's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `float` | Yes | The sort order for the project within the workspace. |
| `startDate` | `mixed` | No | The estimated start date of the project. |
| `startDateResolution` | `string` | No | The resolution of the project's start date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `startedAt` | `mixed` | No | The time at which the project was moved into a started status. |
| `status` | `array` | No | The current project status. |
| `targetDate` | `mixed` | No | The estimated completion date of the project. |
| `targetDateResolution` | `string` | No | The resolution of the project's estimated completion date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `trashed` | `bool` | No | A flag that indicates whether the project is in the trash bin. |
| `updateReminderFrequency` | `float` | No | The frequency at which to prompt for updates. |
| `updateReminderFrequencyInWeeks` | `float` | No | The n-weekly frequency at which to prompt for updates. |
| `updateRemindersDay` | `string` | No | The day at which to prompt for updates. |
| `updateRemindersHour` | `float` | No | The hour at which to prompt for updates. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | Project URL. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ProjectSearchResult()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectSearchResultEntity`

Create a new `ProjectSearchResultEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectStatusEntity

```php
$project_status = $client->ProjectStatus();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `color` | `string` | Yes | The color of the status as a HEX string, used for display in the UI. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `description` | `string` | No | Description of the status. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `indefinite` | `bool` | Yes | Whether a project can remain in this status indefinitely. |
| `inheritedFrom` | `array` | No | [Internal] The original workspace or parent-team status that this status was inherited from. |
| `name` | `string` | Yes | The name of the status. |
| `position` | `float` | Yes | The position of the status within its type group in the workspace's project flow. |
| `team` | `array` | No | [Internal] The team that the status is scoped to. |
| `type` | `string` | Yes | The category type of the project status (e.g., backlog, planned, started, paused, completed, canceled). |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ProjectStatus()->create([
  "color" => null, // string
  "createdAt" => null, // mixed
  "id" => null, // string
  "indefinite" => null, // bool
  "name" => null, // string
  "position" => null, // float
  "type" => null, // string
  "updatedAt" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ProjectStatus()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ProjectStatus()->load(["id" => "project_status_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ProjectStatus()->update([
  "id" => "project_status_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectStatusEntity`

Create a new `ProjectStatusEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectUpdateEntity

```php
$project_update = $client->ProjectUpdate();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `body` | `string` | Yes | The update content in markdown format. |
| `bodyData` | `string` | Yes | [Internal] The content of the update as a Prosemirror document. |
| `commentCount` | `int` | Yes | Number of comments associated with the project update. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `diff` | `mixed` | No | The diff between the current update and the previous one. |
| `diffMarkdown` | `string` | No | The diff between the current update and the previous one, formatted as markdown. |
| `editedAt` | `mixed` | No | The time the update was edited. |
| `health` | `string` | Yes | The health of the project at the time this update was posted. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `infoSnapshot` | `mixed` | No | [Internal] A snapshot of project properties at the time the update was posted, including team, milestone, and issue statistics. |
| `isDiffHidden` | `bool` | Yes | Whether the diff between this update and the previous one should be hidden in the UI. |
| `isStale` | `bool` | Yes | Whether the project update is stale. |
| `project` | `array` | No | The project that this status update was posted to. |
| `reactionData` | `mixed` | Yes | Emoji reaction summary, grouped by emoji type. |
| `shortSummary` | `string` | No | A short AI-generated summary of the project update. |
| `slugId` | `string` | Yes | The update's unique URL slug. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | The URL to the project update. |
| `user` | `array` | No | The user who wrote the update. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ProjectUpdate()->create([
  "body" => null, // string
  "bodyData" => null, // string
  "commentCount" => null, // int
  "createdAt" => null, // mixed
  "health" => null, // string
  "id" => null, // string
  "isDiffHidden" => null, // bool
  "isStale" => null, // bool
  "reactionData" => null, // mixed
  "slugId" => null, // string
  "updatedAt" => null, // mixed
  "url" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ProjectUpdate()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ProjectUpdate()->load(["id" => "project_update_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ProjectUpdate()->remove(["id" => "project_update_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ProjectUpdate()->update([
  "id" => "project_update_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectUpdateEntity`

Create a new `ProjectUpdateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PushSubscriptionEntity

```php
$push_subscription = $client->PushSubscription();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PushSubscription()->create([
  "createdAt" => null, // mixed
  "id" => null, // string
  "updatedAt" => null, // mixed
]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->PushSubscription()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PushSubscriptionEntity`

Create a new `PushSubscriptionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReactionEntity

```php
$reaction = $client->Reaction();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `comment` | `array` | No | The comment that the reaction is associated with. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `emoji` | `string` | Yes | The name of the emoji used for this reaction. |
| `externalUser` | `array` | No | The external user that created the reaction through an integration. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiativeUpdate` | `array` | No | The initiative update that the reaction is associated with. |
| `issue` | `array` | No | The issue that the reaction is associated with. |
| `post` | `array` | No | The post that the reaction is associated with. |
| `projectUpdate` | `array` | No | The project update that the reaction is associated with. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `array` | No | The workspace user that created the reaction. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Reaction()->create([
  "createdAt" => null, // mixed
  "emoji" => null, // string
  "id" => null, // string
  "updatedAt" => null, // mixed
]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Reaction()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReactionEntity`

Create a new `ReactionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReleaseEntity

```php
$release = $client->Release();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `autoArchivedAt` | `mixed` | No | The time at which the release was automatically archived by the auto pruning process. |
| `canceledAt` | `mixed` | No | The time at which the release was canceled. |
| `commitSha` | `string` | No | The Git commit SHA associated with this release. |
| `completedAt` | `mixed` | No | The time at which the release was completed. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `creator` | `array` | No | The user who created the release. |
| `currentProgress` | `mixed` | Yes | The current progress summary for the release, including counts of issues by workflow state type (e.g., completed, in progress, unstarted). |
| `description` | `string` | No | The description of the release in plain text or markdown. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `issueCount` | `int` | Yes | Number of issues associated with the release. |
| `name` | `string` | Yes | The name of the release. |
| `pipeline` | `array` | No | The release pipeline that this release belongs to. |
| `progressHistory` | `mixed` | Yes | The historical progress snapshots for the release, tracking how issue completion has evolved over time. |
| `releaseNote` | `array` | No | [Internal] The primary release note covering this release. |
| `slugId` | `string` | Yes | The release's unique URL slug, used to construct human-readable URLs for the release. |
| `stage` | `array` | No | The current stage of the release within its pipeline (e.g., Planned, In Progress, Completed, Canceled). |
| `startDate` | `mixed` | No | The estimated start date of the release. |
| `startedAt` | `mixed` | No | The time at which the release first entered a started stage. |
| `targetDate` | `mixed` | No | The estimated completion date of the release. |
| `trashed` | `bool` | No | A flag that indicates whether the release is in the trash bin. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | The URL to the release page in the Linear app. |
| `version` | `string` | No | The version identifier for this release (e.g., 'v1.2.3' or a short commit hash). |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Release()->create([
  "createdAt" => null, // mixed
  "currentProgress" => null, // mixed
  "id" => null, // string
  "issueCount" => null, // int
  "name" => null, // string
  "progressHistory" => null, // mixed
  "slugId" => null, // string
  "updatedAt" => null, // mixed
  "url" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Release()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Release()->load(["id" => "release_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Release()->remove(["id" => "release_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Release()->update([
  "id" => "release_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReleaseEntity`

Create a new `ReleaseEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReleaseNoteEntity

```php
$release_note = $client->ReleaseNote();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `documentContent` | `array` | No | Document content backing the release note body. |
| `firstRelease` | `array` | No | The earliest release covered by this note. |
| `generationStatus` | `string` | No | Generation status when these release notes are being auto-generated: `pending` while the LLM call is running, `completed` once it lands. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `lastRelease` | `array` | No | The most recent release covered by this note. |
| `pipeline` | `array` | No | The release pipeline that this note belongs to. |
| `releaseCount` | `int` | Yes | The number of releases covered by this note. |
| `slugId` | `string` | Yes | The release note's unique URL slug, used to construct human-readable URLs for the note. |
| `title` | `string` | No | User-supplied title for the release note. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | The URL to the release note page in the Linear app. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ReleaseNote()->create([
  "createdAt" => null, // mixed
  "id" => null, // string
  "releaseCount" => null, // int
  "slugId" => null, // string
  "updatedAt" => null, // mixed
  "url" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ReleaseNote()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ReleaseNote()->load(["id" => "release_note_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ReleaseNote()->remove(["id" => "release_note_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ReleaseNote()->update([
  "id" => "release_note_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReleaseNoteEntity`

Create a new `ReleaseNoteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReleasePipelineEntity

```php
$release_pipeline = $client->ReleasePipeline();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approximateReleaseCount` | `int` | Yes | The approximate number of non-archived releases in this pipeline. |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `autoGenerateReleaseNotesOnCompletion` | `bool` | Yes | Whether to automatically generate a release note when a release is completed. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `includePathPatterns` | `string` | Yes | Glob patterns to filter commits by file path. |
| `isProduction` | `bool` | Yes | Whether this pipeline targets a production environment. |
| `latestReleaseNote` | `array` | No | The release note in this pipeline whose covered range ends with the most recent release. |
| `name` | `string` | Yes | The name of the pipeline. |
| `releaseNoteTemplate` | `array` | No | The document template used to define the release notes format for this pipeline. |
| `rolloverIssuesOnCompletion` | `bool` | Yes | Whether completing a scheduled release moves its open issues to the next release. |
| `slugId` | `string` | Yes | The pipeline's unique slug identifier, used in URLs and for lookup by human-readable identifier instead of UUID. |
| `trashed` | `bool` | No | A flag that indicates whether the pipeline is in the trash bin. |
| `type` | `string` | Yes | The type of the pipeline, which determines how releases are created and managed. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | The URL to the release pipeline's releases list in the Linear app. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ReleasePipeline()->create([
  "approximateReleaseCount" => null, // int
  "autoGenerateReleaseNotesOnCompletion" => null, // bool
  "createdAt" => null, // mixed
  "id" => null, // string
  "includePathPatterns" => null, // string
  "isProduction" => null, // bool
  "name" => null, // string
  "rolloverIssuesOnCompletion" => null, // bool
  "slugId" => null, // string
  "type" => null, // string
  "updatedAt" => null, // mixed
  "url" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ReleasePipeline()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ReleasePipeline()->load(["id" => "release_pipeline_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ReleasePipeline()->remove(["id" => "release_pipeline_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ReleasePipeline()->update([
  "id" => "release_pipeline_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReleasePipelineEntity`

Create a new `ReleasePipelineEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReleaseStageEntity

```php
$release_stage = $client->ReleaseStage();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `color` | `string` | Yes | The display color of the stage as a HEX string (e.g., '#0f783c'), used for visual representation in the UI. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `frozen` | `bool` | Yes | Whether this stage is frozen. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `name` | `string` | Yes | The name of the stage. |
| `pipeline` | `array` | No | The release pipeline that this stage belongs to. |
| `position` | `float` | Yes | The position of the stage within its pipeline, used for ordering stages in the UI. |
| `type` | `string` | Yes | The lifecycle type of the stage (planned, started, completed, or canceled). |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ReleaseStage()->create([
  "color" => null, // string
  "createdAt" => null, // mixed
  "frozen" => null, // bool
  "id" => null, // string
  "name" => null, // string
  "position" => null, // float
  "type" => null, // string
  "updatedAt" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ReleaseStage()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ReleaseStage()->load(["id" => "release_stage_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ReleaseStage()->update([
  "id" => "release_stage_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReleaseStageEntity`

Create a new `ReleaseStageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RoadmapEntity

```php
$roadmap = $client->Roadmap();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `color` | `string` | No | The roadmap's color. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `creator` | `array` | No | The user who created the roadmap. |
| `description` | `string` | No | The description of the roadmap. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `name` | `string` | Yes | The name of the roadmap. |
| `organization` | `array` | No | The workspace of the roadmap. |
| `owner` | `array` | No | The user who owns the roadmap. |
| `slugId` | `string` | Yes | The roadmap's unique URL slug. |
| `sortOrder` | `float` | Yes | The sort order of the roadmap within the workspace. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | The canonical url for the roadmap. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Roadmap()->create([
  "createdAt" => null, // mixed
  "id" => null, // string
  "name" => null, // string
  "slugId" => null, // string
  "sortOrder" => null, // float
  "updatedAt" => null, // mixed
  "url" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Roadmap()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Roadmap()->load(["id" => "roadmap_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Roadmap()->remove(["id" => "roadmap_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Roadmap()->update([
  "id" => "roadmap_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RoadmapEntity`

Create a new `RoadmapEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RoadmapToProjectEntity

```php
$roadmap_to_project = $client->RoadmapToProject();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `project` | `array` | No | The project that the roadmap is associated with. |
| `roadmap` | `array` | No | The roadmap that the project is associated with. |
| `sortOrder` | `string` | Yes | The sort order of the project within the roadmap. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->RoadmapToProject()->create([
  "createdAt" => null, // mixed
  "id" => null, // string
  "sortOrder" => null, // string
  "updatedAt" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->RoadmapToProject()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->RoadmapToProject()->load(["id" => "roadmap_to_project_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->RoadmapToProject()->remove(["id" => "roadmap_to_project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->RoadmapToProject()->update([
  "id" => "roadmap_to_project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RoadmapToProjectEntity`

Create a new `RoadmapToProjectEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SlaConfigurationEntity

```php
$sla_configuration = $client->SlaConfiguration();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conditions` | `mixed` | Yes | The workflow conditions that determine when this SLA rule applies. |
| `id` | `string` | Yes | The identifier of the SLA rule. |
| `name` | `string` | Yes | The name of the SLA rule. |
| `removesSla` | `bool` | Yes | Whether the rule removes an SLA instead of setting one. |
| `sla` | `float` | No | The SLA value configured by the rule, expressed in milliseconds or business days depending on the day-count type. |
| `slaType` | `string` | No | The SLA type used when the rule sets an SLA. |
| `startMode` | `string` | No | When SLA timing begins. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SlaConfiguration()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SlaConfigurationEntity`

Create a new `SlaConfigurationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SsoUrlFromEmailResponseEntity

```php
$sso_url_from_email_response = $client->SsoUrlFromEmailResponse();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `samlSsoUrl` | `string` | Yes | SAML SSO sign-in URL. |
| `success` | `bool` | Yes | Whether the operation was successful. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->SsoUrlFromEmailResponse()->load(["email" => "email", "type" => "type"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SsoUrlFromEmailResponseEntity`

Create a new `SsoUrlFromEmailResponseEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TeamEntity

```php
$team = $client->Team();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeCycle` | `array` | No | Team's currently active cycle. |
| `aiDiscussionSummariesEnabled` | `bool` | Yes | Whether to enable AI discussion summaries for issues in this team. |
| `aiThreadSummariesEnabled` | `bool` | Yes | Whether to enable resolved thread AI summaries. |
| `allMembersCanJoin` | `bool` | No | Whether all members in the workspace can join the team. |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `autoArchivePeriod` | `float` | Yes | Period after which automatically closed, completed, and duplicate issues are automatically archived in months. |
| `autoCloseChildIssues` | `bool` | No | Whether child issues should automatically close when their parent issue is closed |
| `autoCloseParentIssues` | `bool` | No | Whether parent issues should automatically close when all child issues are closed |
| `autoClosePeriod` | `float` | No | Period after which issues are automatically closed in months. |
| `autoCloseStateId` | `string` | No | The canceled workflow state which auto closed issues will be set to. |
| `color` | `string` | No | The team's color. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `currentProgress` | `mixed` | Yes | [Internal] The current progress of the team. |
| `cycleCalenderUrl` | `string` | Yes | Calendar feed URL (iCal) for cycles. |
| `cycleCooldownTime` | `float` | Yes | The cooldown time after each cycle in weeks. |
| `cycleDuration` | `float` | Yes | The duration of each cycle in weeks. |
| `cycleIssueAutoAssignCompleted` | `bool` | Yes | Auto assign completed issues to current cycle. |
| `cycleIssueAutoAssignStarted` | `bool` | Yes | Auto assign started issues to current cycle. |
| `cycleLockToActive` | `bool` | Yes | Auto assign issues to current cycle if in active status. |
| `cycleStartDay` | `float` | Yes | The day of the week that a new cycle starts (0 = Sunday, 1 = Monday, ..., 6 = Saturday). |
| `cyclesEnabled` | `bool` | Yes | Whether the team uses cycles for sprint-style issue management. |
| `defaultIssueEstimate` | `float` | Yes | What to use as a default estimate for unestimated issues. |
| `defaultIssueState` | `array` | No | The default workflow state into which issues are set when they are opened by team members. |
| `defaultProjectTemplate` | `array` | No | The default template to use for new projects created for the team. |
| `defaultTemplateForMembers` | `array` | No | The default template to use for new issues created by members of the team. |
| `defaultTemplateForNonMembers` | `array` | No | The default template to use for new issues created by non-members of the team. |
| `description` | `string` | No | The team's description. |
| `displayName` | `string` | Yes | The name of the team including its parent team name if it has one. |
| `groupIssueHistory` | `bool` | Yes | Whether to group recent issue history entries. |
| `icon` | `string` | No | The icon of the team. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `inheritIssueEstimation` | `bool` | Yes | Whether the team should inherit its estimation settings from its parent. |
| `inheritProjectStatuses` | `bool` | Yes | [Internal] Whether the team should inherit its project statuses from its parent team, or from the workspace when it has no parent. |
| `inheritSlackAutoCreateProjectChannel` | `bool` | Yes | [Internal] Whether the team should inherit its Slack auto-create project channel setting from its parent. |
| `inheritWorkflowStatuses` | `bool` | Yes | Whether the team should inherit its workflow statuses from its parent. |
| `initiativesEnabled` | `bool` | Yes | Whether team initiatives are enabled and shown in the team's sidebar. |
| `integrationsSettings` | `array` | No | Settings for all integrations associated with that team. |
| `issueCount` | `int` | Yes | The total number of issues in the team. |
| `issueEstimationAllowZero` | `bool` | Yes | Whether to allow zeros in issues estimates. |
| `issueEstimationExtended` | `bool` | Yes | Whether to add additional points to the estimate scale. |
| `issueEstimationType` | `string` | Yes | The issue estimation type to use. |
| `joinByDefault` | `bool` | No | [Internal] Whether new users should join this team by default. |
| `key` | `string` | Yes | The team's unique key, used as a prefix in issue identifiers (e.g., 'ENG' in 'ENG-123') and in URLs. |
| `ledInitiativeCount` | `int` | Yes | The number of initiatives led by this team that would be deleted along with it. |
| `name` | `string` | Yes | The team's name. |
| `organization` | `array` | No | The workspace that the team belongs to. |
| `parent` | `array` | No | The team's parent team. |
| `progressHistory` | `mixed` | Yes | [Internal] The progress history of the team. |
| `requirePriorityToLeaveTriage` | `bool` | Yes | Whether an issue needs to have a priority set before leaving triage. |
| `restrictedBy` | `array` | No | [Internal] For restricted teams, the enclosing private team that forms the visibility boundary. |
| `restrictedById` | `string` | No | [Internal] The identifier of the enclosing private team that forms the visibility boundary for restricted teams. |
| `retiredAt` | `mixed` | No | The time at which the team was retired. |
| `scimGroupName` | `string` | No | The SCIM group name for the team. |
| `scimManaged` | `bool` | Yes | Whether the team is managed by a SCIM integration. |
| `securitySettings` | `mixed` | Yes | Security settings for the team, including role-based restrictions for issue sharing, label management, member management, template management, and agent skills. |
| `setIssueSortOrderOnStateChange` | `string` | Yes | Where to move issues when changing state. |
| `slackAutoCreateProjectChannel` | `bool` | No | [Internal] Whether to automatically create a Slack channel when a new project is created in this team. |
| `timezone` | `string` | Yes | The timezone of the team. |
| `triageEnabled` | `bool` | Yes | Whether triage mode is enabled for the team. |
| `triageIssueState` | `array` | No | The workflow state into which issues are set when they are opened by non-team members or integrations if triage is enabled. |
| `triageResponsibility` | `array` | No | Team's triage responsibility. |
| `upcomingCycleCount` | `float` | Yes | How many upcoming cycles to create. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |
| `visibility` | `string` | Yes | The visibility of the team. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Team()->create([
  "aiDiscussionSummariesEnabled" => null, // bool
  "aiThreadSummariesEnabled" => null, // bool
  "autoArchivePeriod" => null, // float
  "createdAt" => null, // mixed
  "currentProgress" => null, // mixed
  "cycleCalenderUrl" => null, // string
  "cycleCooldownTime" => null, // float
  "cycleDuration" => null, // float
  "cycleIssueAutoAssignCompleted" => null, // bool
  "cycleIssueAutoAssignStarted" => null, // bool
  "cycleLockToActive" => null, // bool
  "cycleStartDay" => null, // float
  "cyclesEnabled" => null, // bool
  "defaultIssueEstimate" => null, // float
  "displayName" => null, // string
  "groupIssueHistory" => null, // bool
  "id" => null, // string
  "inheritIssueEstimation" => null, // bool
  "inheritProjectStatuses" => null, // bool
  "inheritSlackAutoCreateProjectChannel" => null, // bool
  "inheritWorkflowStatuses" => null, // bool
  "initiativesEnabled" => null, // bool
  "issueCount" => null, // int
  "issueEstimationAllowZero" => null, // bool
  "issueEstimationExtended" => null, // bool
  "issueEstimationType" => null, // string
  "key" => null, // string
  "ledInitiativeCount" => null, // int
  "name" => null, // string
  "progressHistory" => null, // mixed
  "requirePriorityToLeaveTriage" => null, // bool
  "scimManaged" => null, // bool
  "securitySettings" => null, // mixed
  "setIssueSortOrderOnStateChange" => null, // string
  "timezone" => null, // string
  "triageEnabled" => null, // bool
  "upcomingCycleCount" => null, // float
  "updatedAt" => null, // mixed
  "visibility" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Team()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Team()->load(["id" => "team_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Team()->remove(["id" => "team_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Team()->update([
  "id" => "team_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TeamEntity`

Create a new `TeamEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TeamMembershipEntity

```php
$team_membership = $client->TeamMembership();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `owner` | `bool` | Yes | Whether the user is an owner of the team. |
| `sortOrder` | `float` | Yes | The sort order of this team in the user's personal team list. |
| `team` | `array` | No | The team that the membership is associated with. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `array` | No | The user that the membership is associated with. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TeamMembership()->create([
  "createdAt" => null, // mixed
  "id" => null, // string
  "owner" => null, // bool
  "sortOrder" => null, // float
  "updatedAt" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TeamMembership()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TeamMembership()->load(["id" => "team_membership_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->TeamMembership()->remove(["id" => "team_membership_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TeamMembership()->update([
  "id" => "team_membership_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TeamMembershipEntity`

Create a new `TeamMembershipEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TemplateEntity

```php
$template = $client->Template();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `color` | `string` | No | The hex color of the template icon. |
| `content` | `string` | No | The template's content in markdown format: the body it pre-fills on the entity it creates. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `creator` | `array` | No | The user who created the template. |
| `description` | `string` | No | A description of what the template is used for. |
| `hasFormFields` | `bool` | Yes | [Internal] Whether the template has form fields |
| `icon` | `string` | No | The icon of the template, either a decorative icon type or an emoji string. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `inheritedFrom` | `array` | No | The parent team template this template was inherited from. |
| `lastAppliedAt` | `mixed` | No | The date when the template was last applied to create or update an entity. |
| `lastUpdatedBy` | `array` | No | The user who last updated the template. |
| `name` | `string` | Yes | The name of the template. |
| `organization` | `array` | No | The workspace that owns this template. |
| `pipeline` | `array` | No | The release pipeline this template is bound to. |
| `sortOrder` | `float` | Yes | The sort order of the template within the templates list. |
| `team` | `array` | No | The team that the template is associated with. |
| `templateData` | `mixed` | Yes | The template data as a JSON-encoded string containing the pre-filled attributes for the entity type (e.g., issue fields, project configuration, or document content). |
| `type` | `string` | Yes | The entity type this template is for, such as 'issue', 'project', or 'document'. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Template()->create([
  "createdAt" => null, // mixed
  "hasFormFields" => null, // bool
  "id" => null, // string
  "name" => null, // string
  "sortOrder" => null, // float
  "templateData" => null, // mixed
  "type" => null, // string
  "updatedAt" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Template()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Template()->load(["id" => "template_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Template()->remove(["id" => "template_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Template()->update([
  "id" => "template_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TemplateEntity`

Create a new `TemplateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TimeScheduleEntity

```php
$time_schedule = $client->TimeSchedule();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `externalId` | `string` | No | The identifier of the external schedule. |
| `externalUrl` | `string` | No | The URL to the external schedule. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `integration` | `array` | No | The identifier of the Linear integration populating the schedule. |
| `name` | `string` | Yes | The name of the schedule. |
| `organization` | `array` | No | The workspace of the schedule. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TimeSchedule()->create([
  "createdAt" => null, // mixed
  "id" => null, // string
  "name" => null, // string
  "updatedAt" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TimeSchedule()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TimeSchedule()->load(["id" => "time_schedule_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->TimeSchedule()->remove(["id" => "time_schedule_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TimeSchedule()->update([
  "id" => "time_schedule_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TimeScheduleEntity`

Create a new `TimeScheduleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TriageResponsibilityEntity

```php
$triage_responsibility = $client->TriageResponsibility();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes | The action to take when an issue is added to triage. |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `currentUser` | `array` | No | The user currently responsible for triage. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `team` | `array` | No | The team to which the triage responsibility belongs to. |
| `timeSchedule` | `array` | No | The time schedule used for scheduling. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TriageResponsibility()->create([
  "action" => null, // string
  "createdAt" => null, // mixed
  "id" => null, // string
  "updatedAt" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TriageResponsibility()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TriageResponsibility()->load(["id" => "triage_responsibility_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->TriageResponsibility()->remove(["id" => "triage_responsibility_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TriageResponsibility()->update([
  "id" => "triage_responsibility_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TriageResponsibilityEntity`

Create a new `TriageResponsibilityEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UploadFileEntity

```php
$upload_file = $client->UploadFile();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assetUrl` | `string` | Yes | The permanent asset URL where the file will be accessible after upload. |
| `contentType` | `string` | Yes | The content type. |
| `filename` | `string` | Yes | The filename. |
| `metaData` | `mixed` | No | Optional metadata associated with the upload, such as the related issue or comment ID. |
| `size` | `int` | Yes | The size of the uploaded file. |
| `uploadUrl` | `string` | Yes | The pre-signed URL to which the file should be uploaded via a PUT request. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->UploadFile()->create([
  "content_type" => null, // string
  "filename" => null, // string
  "size" => null, // int
  "assetUrl" => null, // string
  "contentType" => null, // string
  "uploadUrl" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UploadFileEntity`

Create a new `UploadFileEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UsageAlertEntity

```php
$usage_alert = $client->UsageAlert();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `metadata` | `mixed` | Yes | Type-specific snapshot captured when the alert was triggered, keyed by the alert type — for example the credit balance and threshold for a lowBalance alert. |
| `resolvedAt` | `mixed` | No | The time when the usage alert was resolved or archived. |
| `type` | `string` | Yes | The kind of usage alert that was triggered. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->UsageAlert()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->UsageAlert()->load(["id" => "usage_alert_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UsageAlertEntity`

Create a new `UsageAlertEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UserEntity

```php
$user = $client->User();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Whether the user account is active or disabled (suspended). |
| `admin` | `bool` | Yes | Whether the user is a workspace administrator. |
| `app` | `bool` | Yes | Whether the user is an app. |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `avatarBackgroundColor` | `string` | Yes | The background color of the avatar for users without set avatar. |
| `avatarUrl` | `string` | No | An URL to the user's avatar image. |
| `calendarHash` | `string` | No | [DEPRECATED] Hash for the user to be used in calendar URLs. |
| `canAccessAnyPublicTeam` | `bool` | Yes | Whether this user can access any public team in the workspace. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `createdIssueCount` | `int` | Yes | Number of issues created. |
| `description` | `string` | No | A short description of the user, such as their title or a brief bio. |
| `disableReason` | `string` | No | The reason why the user account is disabled. |
| `displayName` | `string` | Yes | The user's display (nick) name. |
| `email` | `string` | Yes | The user's email address. |
| `gitHubUserId` | `string` | No | The user's GitHub user ID. |
| `guest` | `bool` | Yes | Whether the user is a guest in the workspace and limited to accessing a subset of teams. |
| `hasGitHubCodeAccess` | `bool` | Yes | [Internal] Whether this user can access GitHub source code through Linear. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `identityProvider` | `array` | No | [INTERNAL] Identity provider the user is managed by. |
| `initials` | `string` | Yes | The initials of the user. |
| `isAssignable` | `bool` | Yes | Whether the user can be assigned to issues. |
| `isMe` | `bool` | Yes | Whether the user is the currently authenticated user. |
| `isMentionable` | `bool` | Yes | Whether the user is mentionable. |
| `lastSeen` | `mixed` | No | The last time the user was seen online. |
| `name` | `string` | Yes | The user's full name. |
| `organization` | `array` | No | The workspace that the user belongs to. |
| `owner` | `bool` | Yes | Whether the user is a workspace owner, which is the highest permission level. |
| `statusEmoji` | `string` | No | The emoji representing the user's current status. |
| `statusLabel` | `string` | No | The text label of the user's current status. |
| `statusUntilAt` | `mixed` | No | The date and time at which the user's current status should be automatically cleared. |
| `supportsAgentSessions` | `bool` | Yes | Whether this agent user supports agent sessions. |
| `timezone` | `string` | No | The local timezone of the user. |
| `title` | `string` | No | The user's job title. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | User's profile URL. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->User()->create([
  "active" => null, // bool
  "admin" => null, // bool
  "app" => null, // bool
  "avatarBackgroundColor" => null, // string
  "canAccessAnyPublicTeam" => null, // bool
  "createdAt" => null, // mixed
  "createdIssueCount" => null, // int
  "displayName" => null, // string
  "email" => null, // string
  "guest" => null, // bool
  "hasGitHubCodeAccess" => null, // bool
  "id" => null, // string
  "initials" => null, // string
  "isAssignable" => null, // bool
  "isMe" => null, // bool
  "isMentionable" => null, // bool
  "name" => null, // string
  "owner" => null, // bool
  "supportsAgentSessions" => null, // bool
  "updatedAt" => null, // mixed
  "url" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->User()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->User()->load(["id" => "user_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->User()->update([
  "id" => "user_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UserEntity`

Create a new `UserEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UserSettingEntity

```php
$user_setting = $client->UserSetting();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `autoAssignToSelf` | `bool` | Yes | Whether to auto-assign newly created issues to the current user by default. |
| `calendarHash` | `string` | No | A unique hash for the user, used to construct secure calendar subscription URLs. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `feedLastSeenTime` | `mixed` | No | The user's last seen time for the pulse feed. |
| `feedSummarySchedule` | `string` | No | The user's preferred schedule for receiving feed summary digests. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `pullRequestMergeStrategyPreference` | `string` | No | [Internal] The user's preferred merge method for pull requests. |
| `showFullUserNames` | `bool` | Yes | Whether to show full user names instead of display names. |
| `subscribedToChangelog` | `bool` | Yes | Whether this user is subscribed to receive changelog emails about Linear product updates. |
| `subscribedToDPA` | `bool` | Yes | Whether this user is subscribed to receive Data Processing Agreement (DPA) related emails. |
| `subscribedToInviteAccepted` | `bool` | Yes | Whether this user is subscribed to receive email notifications when their workspace invitations are accepted. |
| `subscribedToPrivacyLegalUpdates` | `bool` | Yes | Whether this user is subscribed to receive emails about privacy policy and legal updates. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `array` | No | The user that these settings belong to. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->UserSetting()->create([
  "category" => null, // mixed
  "channel" => null, // mixed
  "subscribe" => null, // bool
  "autoAssignToSelf" => null, // bool
  "createdAt" => null, // mixed
  "id" => null, // string
  "showFullUserNames" => null, // bool
  "subscribedToChangelog" => null, // bool
  "subscribedToDPA" => null, // bool
  "subscribedToInviteAccepted" => null, // bool
  "subscribedToPrivacyLegalUpdates" => null, // bool
  "updatedAt" => null, // mixed
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->UserSetting()->load(["id" => "user_setting_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->UserSetting()->update([
  "id" => "user_setting_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UserSettingEntity`

Create a new `UserSettingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ViewPreferenceEntity

```php
$view_preference = $client->ViewPreference();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `type` | `string` | Yes | The type of view preferences: "organization" for workspace-wide defaults or "user" for personal overrides. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |
| `viewType` | `string` | Yes | The type of view these preferences apply to, such as board, cycle, project, customView, myIssues, etc. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ViewPreference()->create([
  "createdAt" => null, // mixed
  "id" => null, // string
  "type" => null, // string
  "updatedAt" => null, // mixed
  "viewType" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ViewPreference()->load(["view_type" => "view_type"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ViewPreference()->remove(["id" => "id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ViewPreference()->update([
  "id" => "id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ViewPreferenceEntity`

Create a new `ViewPreferenceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WebhookEntity

```php
$webhook = $client->Webhook();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allPublicTeams` | `bool` | Yes | Whether the webhook receives events from all public (non-private) teams in the organization, including teams created after the webhook was set up. |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `creator` | `array` | No | The user who created the webhook. |
| `enabled` | `bool` | Yes | Whether the webhook is enabled. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `label` | `string` | No | A human-readable label for the webhook, used for identification in the UI. |
| `resourceTypes` | `string` | Yes | The resource types this webhook is subscribed to (e.g., 'Issue', 'Comment', 'Project', 'Cycle'). |
| `secret` | `string` | No | A secret token used to sign webhook payloads with HMAC-SHA256, allowing the recipient to verify that the payload originated from Linear and was not tampered with. |
| `team` | `array` | No | The single team that the webhook is scoped to. |
| `teamIds` | `string` | No | [INTERNAL] An array of team IDs that the webhook is subscribed to. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | No | The destination URL where webhook payloads will be sent via HTTP POST. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Webhook()->create([
  "allPublicTeams" => null, // bool
  "createdAt" => null, // mixed
  "enabled" => null, // bool
  "id" => null, // string
  "resourceTypes" => null, // string
  "updatedAt" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Webhook()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Webhook()->load(["id" => "webhook_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Webhook()->remove(["id" => "webhook_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Webhook()->update([
  "id" => "webhook_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WebhookEntity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WebhookFailureEventEntity

```php
$webhook_failure_event = $client->WebhookFailureEvent();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `executionId` | `string` | Yes | A stable identifier for the webhook delivery attempt. |
| `httpStatus` | `float` | No | The HTTP status code returned by the webhook recipient. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `responseOrError` | `string` | No | The HTTP response body returned by the recipient, or the error message if the request failed before receiving a response. |
| `url` | `string` | Yes | The URL that the webhook was trying to push to. |
| `webhook` | `array` | No | The webhook that this failure event is associated with. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->WebhookFailureEvent()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WebhookFailureEventEntity`

Create a new `WebhookFailureEventEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkflowStateEntity

```php
$workflow_state = $client->WorkflowState();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `mixed` | No | The time at which the entity was archived. |
| `color` | `string` | Yes | The state's UI color as a HEX string. |
| `createdAt` | `mixed` | Yes | The time at which the entity was created. |
| `description` | `string` | No | Description of the state. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `inheritedFrom` | `array` | No | The parent team's workflow state that this state was inherited from. |
| `name` | `string` | Yes | The state's human-readable name (e.g., 'In Progress', 'Done', 'Backlog'). |
| `position` | `float` | Yes | The position of the state in the team's workflow. |
| `team` | `array` | No | The team that this workflow state belongs to. |
| `type` | `string` | Yes | The type of the state. |
| `updatedAt` | `mixed` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->WorkflowState()->create([
  "color" => null, // string
  "createdAt" => null, // mixed
  "id" => null, // string
  "name" => null, // string
  "position" => null, // float
  "type" => null, // string
  "updatedAt" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->WorkflowState()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->WorkflowState()->load(["id" => "workflow_state_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->WorkflowState()->update([
  "id" => "workflow_state_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkflowStateEntity`

Create a new `WorkflowStateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `debug` | 0.0.1 | Debug capture |
| `idempotency` | 0.0.1 | Idempotency |
| `metrics` | 0.0.1 | Metrics |
| `paging` | 0.0.1 | Paging |
| `ratelimit` | 0.0.1 | Rate limiting |
| `retry` | 0.0.1 | Retry |
| `test` | 0.0.1 | Test transport |
| `timeout` | 0.0.1 | Timeout |


Features are activated via the `feature` option:

```php
$client = new LinearSDK([
  "feature" => [
    "debug" => ["active" => true],
    "idempotency" => ["active" => true],
    "metrics" => ["active" => true],
    "paging" => ["active" => true],
    "ratelimit" => ["active" => true],
    "retry" => ["active" => true],
    "test" => ["active" => true],
    "timeout" => ["active" => true],
  ],
]);
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`debug`, `idempotency`, `metrics`, `paging`, `test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `debug`

Debug capture.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

| Option | Type |
|---|---|
| `now` | function |
| `onEntry` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.debug.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `idempotency`

Idempotency.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

| Option | Type |
|---|---|
| `keygen` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.idempotency.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `metrics`

Metrics.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `now` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.metrics.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `paging`

Paging.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

| Option | Type |
|---|---|
| `limit` | number |
| `ops` | list |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.paging.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `ratelimit`

Rate limiting.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Retry.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Timeout.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

