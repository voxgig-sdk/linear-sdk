# Linear Lua SDK Reference

Complete API reference for the Linear Lua SDK.


## LinearSDK

### Constructor

```lua
local sdk = require("linear_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `AccessKeyRelease(data)`

Create a new `AccessKeyRelease` entity instance. Pass `nil` for no initial data.

#### `AccessKeyReleasePipeline(data)`

Create a new `AccessKeyReleasePipeline` entity instance. Pass `nil` for no initial data.

#### `AgentActivity(data)`

Create a new `AgentActivity` entity instance. Pass `nil` for no initial data.

#### `AgentSession(data)`

Create a new `AgentSession` entity instance. Pass `nil` for no initial data.

#### `AgentSkill(data)`

Create a new `AgentSkill` entity instance. Pass `nil` for no initial data.

#### `Application(data)`

Create a new `Application` entity instance. Pass `nil` for no initial data.

#### `Attachment(data)`

Create a new `Attachment` entity instance. Pass `nil` for no initial data.

#### `AuditEntry(data)`

Create a new `AuditEntry` entity instance. Pass `nil` for no initial data.

#### `AuditEntryType(data)`

Create a new `AuditEntryType` entity instance. Pass `nil` for no initial data.

#### `AuthResolverResponse(data)`

Create a new `AuthResolverResponse` entity instance. Pass `nil` for no initial data.

#### `AuthenticationSessionResponse(data)`

Create a new `AuthenticationSessionResponse` entity instance. Pass `nil` for no initial data.

#### `Comment(data)`

Create a new `Comment` entity instance. Pass `nil` for no initial data.

#### `CreateOrJoinOrganizationResponse(data)`

Create a new `CreateOrJoinOrganizationResponse` entity instance. Pass `nil` for no initial data.

#### `CustomView(data)`

Create a new `CustomView` entity instance. Pass `nil` for no initial data.

#### `Customer(data)`

Create a new `Customer` entity instance. Pass `nil` for no initial data.

#### `CustomerNeed(data)`

Create a new `CustomerNeed` entity instance. Pass `nil` for no initial data.

#### `CustomerStatus(data)`

Create a new `CustomerStatus` entity instance. Pass `nil` for no initial data.

#### `CustomerTier(data)`

Create a new `CustomerTier` entity instance. Pass `nil` for no initial data.

#### `Cycle(data)`

Create a new `Cycle` entity instance. Pass `nil` for no initial data.

#### `Diff(data)`

Create a new `Diff` entity instance. Pass `nil` for no initial data.

#### `Document(data)`

Create a new `Document` entity instance. Pass `nil` for no initial data.

#### `DocumentSearchResult(data)`

Create a new `DocumentSearchResult` entity instance. Pass `nil` for no initial data.

#### `EmailIntakeAddress(data)`

Create a new `EmailIntakeAddress` entity instance. Pass `nil` for no initial data.

#### `EmailUserAccountAuthChallengeResponse(data)`

Create a new `EmailUserAccountAuthChallengeResponse` entity instance. Pass `nil` for no initial data.

#### `Emoji(data)`

Create a new `Emoji` entity instance. Pass `nil` for no initial data.

#### `EntityExternalLink(data)`

Create a new `EntityExternalLink` entity instance. Pass `nil` for no initial data.

#### `ExternalUser(data)`

Create a new `ExternalUser` entity instance. Pass `nil` for no initial data.

#### `Favorite(data)`

Create a new `Favorite` entity instance. Pass `nil` for no initial data.

#### `GitAutomationState(data)`

Create a new `GitAutomationState` entity instance. Pass `nil` for no initial data.

#### `GitAutomationTargetBranch(data)`

Create a new `GitAutomationTargetBranch` entity instance. Pass `nil` for no initial data.

#### `GitHubIntegrationConnectDetail(data)`

Create a new `GitHubIntegrationConnectDetail` entity instance. Pass `nil` for no initial data.

#### `Initiative(data)`

Create a new `Initiative` entity instance. Pass `nil` for no initial data.

#### `InitiativeLabel(data)`

Create a new `InitiativeLabel` entity instance. Pass `nil` for no initial data.

#### `InitiativeLeadTeamChangeImpact(data)`

Create a new `InitiativeLeadTeamChangeImpact` entity instance. Pass `nil` for no initial data.

#### `InitiativeRelation(data)`

Create a new `InitiativeRelation` entity instance. Pass `nil` for no initial data.

#### `InitiativeToProject(data)`

Create a new `InitiativeToProject` entity instance. Pass `nil` for no initial data.

#### `InitiativeUpdate(data)`

Create a new `InitiativeUpdate` entity instance. Pass `nil` for no initial data.

#### `Integration(data)`

Create a new `Integration` entity instance. Pass `nil` for no initial data.

#### `IntegrationTemplate(data)`

Create a new `IntegrationTemplate` entity instance. Pass `nil` for no initial data.

#### `IntegrationsSetting(data)`

Create a new `IntegrationsSetting` entity instance. Pass `nil` for no initial data.

#### `Issue(data)`

Create a new `Issue` entity instance. Pass `nil` for no initial data.

#### `IssueImport(data)`

Create a new `IssueImport` entity instance. Pass `nil` for no initial data.

#### `IssueLabel(data)`

Create a new `IssueLabel` entity instance. Pass `nil` for no initial data.

#### `IssuePriorityValue(data)`

Create a new `IssuePriorityValue` entity instance. Pass `nil` for no initial data.

#### `IssueRelation(data)`

Create a new `IssueRelation` entity instance. Pass `nil` for no initial data.

#### `IssueSearchResult(data)`

Create a new `IssueSearchResult` entity instance. Pass `nil` for no initial data.

#### `IssueToRelease(data)`

Create a new `IssueToRelease` entity instance. Pass `nil` for no initial data.

#### `LogoutResponse(data)`

Create a new `LogoutResponse` entity instance. Pass `nil` for no initial data.

#### `Notification(data)`

Create a new `Notification` entity instance. Pass `nil` for no initial data.

#### `NotificationSubscription(data)`

Create a new `NotificationSubscription` entity instance. Pass `nil` for no initial data.

#### `OAuthApplication(data)`

Create a new `OAuthApplication` entity instance. Pass `nil` for no initial data.

#### `Organization(data)`

Create a new `Organization` entity instance. Pass `nil` for no initial data.

#### `OrganizationDomain(data)`

Create a new `OrganizationDomain` entity instance. Pass `nil` for no initial data.

#### `OrganizationInvite(data)`

Create a new `OrganizationInvite` entity instance. Pass `nil` for no initial data.

#### `OrganizationMeta(data)`

Create a new `OrganizationMeta` entity instance. Pass `nil` for no initial data.

#### `PasskeyLoginStartResponse(data)`

Create a new `PasskeyLoginStartResponse` entity instance. Pass `nil` for no initial data.

#### `Project(data)`

Create a new `Project` entity instance. Pass `nil` for no initial data.

#### `ProjectLabel(data)`

Create a new `ProjectLabel` entity instance. Pass `nil` for no initial data.

#### `ProjectMilestone(data)`

Create a new `ProjectMilestone` entity instance. Pass `nil` for no initial data.

#### `ProjectMilestoneMoveProjectTeam(data)`

Create a new `ProjectMilestoneMoveProjectTeam` entity instance. Pass `nil` for no initial data.

#### `ProjectRelation(data)`

Create a new `ProjectRelation` entity instance. Pass `nil` for no initial data.

#### `ProjectSearchResult(data)`

Create a new `ProjectSearchResult` entity instance. Pass `nil` for no initial data.

#### `ProjectStatus(data)`

Create a new `ProjectStatus` entity instance. Pass `nil` for no initial data.

#### `ProjectUpdate(data)`

Create a new `ProjectUpdate` entity instance. Pass `nil` for no initial data.

#### `PushSubscription(data)`

Create a new `PushSubscription` entity instance. Pass `nil` for no initial data.

#### `Reaction(data)`

Create a new `Reaction` entity instance. Pass `nil` for no initial data.

#### `Release(data)`

Create a new `Release` entity instance. Pass `nil` for no initial data.

#### `ReleaseNote(data)`

Create a new `ReleaseNote` entity instance. Pass `nil` for no initial data.

#### `ReleasePipeline(data)`

Create a new `ReleasePipeline` entity instance. Pass `nil` for no initial data.

#### `ReleaseStage(data)`

Create a new `ReleaseStage` entity instance. Pass `nil` for no initial data.

#### `Roadmap(data)`

Create a new `Roadmap` entity instance. Pass `nil` for no initial data.

#### `RoadmapToProject(data)`

Create a new `RoadmapToProject` entity instance. Pass `nil` for no initial data.

#### `SlaConfiguration(data)`

Create a new `SlaConfiguration` entity instance. Pass `nil` for no initial data.

#### `SsoUrlFromEmailResponse(data)`

Create a new `SsoUrlFromEmailResponse` entity instance. Pass `nil` for no initial data.

#### `Team(data)`

Create a new `Team` entity instance. Pass `nil` for no initial data.

#### `TeamMembership(data)`

Create a new `TeamMembership` entity instance. Pass `nil` for no initial data.

#### `Template(data)`

Create a new `Template` entity instance. Pass `nil` for no initial data.

#### `TimeSchedule(data)`

Create a new `TimeSchedule` entity instance. Pass `nil` for no initial data.

#### `TriageResponsibility(data)`

Create a new `TriageResponsibility` entity instance. Pass `nil` for no initial data.

#### `UploadFile(data)`

Create a new `UploadFile` entity instance. Pass `nil` for no initial data.

#### `UsageAlert(data)`

Create a new `UsageAlert` entity instance. Pass `nil` for no initial data.

#### `User(data)`

Create a new `User` entity instance. Pass `nil` for no initial data.

#### `UserSetting(data)`

Create a new `UserSetting` entity instance. Pass `nil` for no initial data.

#### `ViewPreference(data)`

Create a new `ViewPreference` entity instance. Pass `nil` for no initial data.

#### `Webhook(data)`

Create a new `Webhook` entity instance. Pass `nil` for no initial data.

#### `WebhookFailureEvent(data)`

Create a new `WebhookFailureEvent` entity instance. Pass `nil` for no initial data.

#### `WorkflowState(data)`

Create a new `WorkflowState` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## AccessKeyReleaseEntity

```lua
local access_key_release = client:AccessKeyRelease(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the release was archived. |
| `commitSha` | `string` | No | The Git commit SHA associated with the release. |
| `completedAt` | `any` | No | The time at which the release was completed. |
| `createdAt` | `any` | Yes | The time at which the release was created. |
| `id` | `string` | Yes | The unique identifier of the release. |
| `name` | `string` | Yes | The name of the release. |
| `url` | `string` | Yes | The URL to the release page in the Linear app. |
| `version` | `string` | No | The version identifier for this release. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AccessKeyRelease():create({
  createdAt = --[[ any ]],
  id = --[[ string ]],
  name = --[[ string ]],
  url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AccessKeyRelease():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AccessKeyRelease():load({ id = "access_key_release_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AccessKeyReleaseEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AccessKeyReleasePipelineEntity

```lua
local access_key_release_pipeline = client:AccessKeyReleasePipeline(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The unique identifier of the release pipeline. |
| `includePathPatterns` | `string` | Yes | Glob patterns used to filter commits by changed file path. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AccessKeyReleasePipeline():load({ id = "access_key_release_pipeline_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AccessKeyReleasePipelineEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AgentActivityEntity

```lua
local agent_activity = client:AgentActivity(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentSession` | `table` | No | The agent session this activity belongs to. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `contextualMetadata` | `any` | No | [Internal] Metadata about user-provided contextual information for this agent activity. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `ephemeral` | `boolean` | Yes | Whether the activity is ephemeral, and should disappear after the next agent activity. |
| `executionSkippedReason` | `string` | No | [Internal] The reason this activity was persisted without being sent to the agent runtime. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `queued` | `boolean` | Yes | [Internal] Whether this activity is queued for later processing. |
| `sentAt` | `any` | No | [Internal] The time at which the prompt actually entered the conversation. |
| `signal` | `string` | No | An optional modifier that provides additional instructions on how the activity should be interpreted. |
| `signalMetadata` | `any` | No | Metadata about this agent activity's signal. |
| `sourceComment` | `table` | No | The source comment this activity is linked to. |
| `sourceMetadata` | `any` | No | Metadata about the external source that created this agent activity. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `table` | No | The user who created this agent activity. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AgentActivity():create({
  createdAt = --[[ any ]],
  ephemeral = --[[ boolean ]],
  id = --[[ string ]],
  queued = --[[ boolean ]],
  updatedAt = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AgentActivity():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AgentActivity():load({ id = "agent_activity_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:AgentActivity():update({
  id = "agent_activity_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentActivityEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AgentSessionEntity

```lua
local agent_session = client:AgentSession(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `appUser` | `table` | No | The agent user that is associated with this agent session. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `codingHarnessModelLabel` | `string` | No | [Internal] Compact display label for the coding harness model used by this session, derived from the latest associated sandbox. |
| `comment` | `table` | No | The comment this agent session is associated with. |
| `context` | `any` | Yes | The entity contexts this session is related to, such as issues or projects referenced in direct chat sessions. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `table` | No | The human user responsible for the agent session. |
| `dismissedAt` | `any` | No | The time a user dismissed this agent session. |
| `dismissedBy` | `table` | No | The user who dismissed the agent session. |
| `endedAt` | `any` | No | The time the agent session completed. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `issue` | `table` | No | The issue this agent session is associated with. |
| `modelSelection` | `any` | No | [Internal] How Adaptive selected the model route used by this coding session. |
| `plan` | `any` | No | A dynamically updated plan describing the agent's execution strategy, including steps to be taken and their current status. |
| `pullRequest` | `table` | No | The pull request this agent session is anchored to, when started from a pull request. |
| `slugId` | `string` | Yes | The agent session's unique URL slug. |
| `sourceComment` | `table` | No | The comment that this agent session was spawned from, if from a different thread. |
| `sourceMetadata` | `any` | No | Metadata about the external source that created this agent session. |
| `startedAt` | `any` | No | The time the agent session transitioned to active status and began work. |
| `status` | `string` | Yes | The current status of the agent session, such as pending, active, awaiting input, complete, error, or stale. |
| `summary` | `string` | No | The session title, generated automatically or set by the owning OAuth application. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | No | The URL to the agent session page in the Linear app. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AgentSession():create({
  context = --[[ any ]],
  createdAt = --[[ any ]],
  id = --[[ string ]],
  slugId = --[[ string ]],
  status = --[[ string ]],
  updatedAt = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AgentSession():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AgentSession():load({ id = "agent_session_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:AgentSession():update({
  id = "agent_session_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentSessionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AgentSkillEntity

```lua
local agent_skill = client:AgentSkill(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `body` | `string` | Yes | The skill instructions in markdown format. |
| `color` | `string` | No | The skill's color. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `table` | No | The user who created the skill. |
| `description` | `string` | No | The skill's description. |
| `icon` | `string` | No | The icon of the skill. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `inheritedFrom` | `table` | No | The parent-team skill this skill was inherited from. |
| `lastUpdatedBy` | `table` | No | The user who last updated the skill. |
| `lastUsedAt` | `any` | No | The time the skill was last used by anyone in the workspace. |
| `owner` | `table` | No | The user who owns the skill. |
| `recentUsageCount` | `number` | Yes | The number of times the skill was used by anyone in the workspace in the last 30 days. |
| `shared` | `boolean` | Yes | Whether the skill is shared with everyone in the workspace. |
| `slugId` | `string` | Yes | The skill's unique URL slug. |
| `teamId` | `string` | No | The identifier of the team this skill is shared with. |
| `title` | `string` | Yes | The skill's title. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AgentSkill():create({
  body = --[[ string ]],
  createdAt = --[[ any ]],
  id = --[[ string ]],
  recentUsageCount = --[[ number ]],
  shared = --[[ boolean ]],
  slugId = --[[ string ]],
  title = --[[ string ]],
  updatedAt = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AgentSkill():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AgentSkill():load({ id = "agent_skill_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:AgentSkill():remove({ id = "agent_skill_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:AgentSkill():update({
  id = "agent_skill_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentSkillEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApplicationEntity

```lua
local application = client:Application(nil)
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

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Application():load({ client_id = "client_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApplicationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AttachmentEntity

```lua
local attachment = client:Attachment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `bodyData` | `string` | No | The body data of the attachment, if any. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `table` | No | The creator of the attachment. |
| `externalUserCreator` | `table` | No | The non-Linear user who created the attachment. |
| `groupBySource` | `boolean` | Yes | Whether attachments from the same source application should be visually grouped together in the Linear issue detail view. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `issue` | `table` | No | The issue this attachment belongs to. |
| `metadata` | `any` | Yes | Integration-specific metadata for this attachment. |
| `originalIssue` | `table` | No | The issue this attachment was originally created on. |
| `source` | `any` | No | Information about the source which created the attachment. |
| `sourceType` | `string` | No | The source type of the attachment, derived from the source metadata. |
| `subtitle` | `string` | No | Content for the subtitle line in the Linear attachment widget. |
| `title` | `string` | Yes | Content for the title line in the Linear attachment widget. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | The URL of the external resource this attachment links to. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Attachment():create({
  createdAt = --[[ any ]],
  groupBySource = --[[ boolean ]],
  id = --[[ string ]],
  metadata = --[[ any ]],
  title = --[[ string ]],
  updatedAt = --[[ any ]],
  url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Attachment():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Attachment():load({ id = "attachment_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Attachment():remove({ id = "attachment_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Attachment():update({
  id = "attachment_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AttachmentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AuditEntryEntity

```lua
local audit_entry = client:AuditEntry(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `table` | No | The user that caused the audit entry to be created. |
| `actorId` | `string` | No | The ID of the user that caused the audit entry to be created. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `countryCode` | `string` | No | The ISO 3166-1 alpha-2 country code derived from the request IP address. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `ip` | `string` | No | The IP address of the actor at the time the audited action was performed. |
| `metadata` | `any` | No | Additional metadata related to the audit entry. |
| `organization` | `table` | No | The workspace the audit log belongs to. |
| `requestInformation` | `any` | No | Additional information related to the request which performed the action. |
| `type` | `string` | Yes | The type of audited action (e.g., user authentication, permission change, data export, setting modification). |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AuditEntry():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AuditEntryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AuditEntryTypeEntity

```lua
local audit_entry_type = client:AuditEntryType(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | Yes | Description of the audit entry type. |
| `type` | `string` | Yes | The audit entry type. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AuditEntryType():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AuditEntryTypeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AuthResolverResponseEntity

```lua
local auth_resolver_response = client:AuthResolverResponse(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowDomainAccess` | `boolean` | No | Should the signup flow allow access for the domain. |
| `email` | `string` | Yes | Email for the authenticated account. |
| `id` | `string` | Yes | User account ID. |
| `lastUsedOrganizationId` | `string` | No | ID of the organization last accessed by the user. |
| `service` | `string` | No | The authentication service used for the current session (e.g., google, email, saml). |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AuthResolverResponse():create({
  email = --[[ string ]],
  id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AuthResolverResponse():load({ id = "auth_resolver_response_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:AuthResolverResponse():update({
  id = "auth_resolver_response_id",
  auth_id = "auth_id",
  response = "response",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AuthResolverResponseEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AuthenticationSessionResponseEntity

```lua
local authentication_session_response = client:AuthenticationSessionResponse(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `browserType` | `string` | No | Used web browser. |
| `client` | `string` | No | Client used for the session |
| `countryCodes` | `string` | Yes | Country codes of all seen locations. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `detailedName` | `string` | Yes | Detailed name of the session including version information, derived from the user agent. |
| `id` | `string` | Yes |  |
| `ip` | `string` | No | IP address. |
| `isCurrentSession` | `boolean` | Yes | Whether this session is the one used to make the current API request. |
| `lastActiveAt` | `any` | No | When was the session last seen |
| `location` | `string` | No | Human readable location |
| `locationCity` | `string` | No | Location city name. |
| `locationCountry` | `string` | No | Location country name. |
| `locationCountryCode` | `string` | No | Location country code. |
| `locationRegionCode` | `string` | No | Location region code. |
| `name` | `string` | Yes | Name of the session, derived from the client and operating system |
| `operatingSystem` | `string` | No | Operating system used for the session |
| `service` | `string` | No | Service used for logging in. |
| `type` | `string` | Yes | Type of application used to authenticate. |
| `updatedAt` | `any` | Yes | Date when the session was last updated. |
| `userAgent` | `string` | No | Session's user-agent. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AuthenticationSessionResponse():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AuthenticationSessionResponseEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CommentEntity

```lua
local comment = client:Comment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentSession` | `table` | No | Agent session associated with this comment. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `body` | `string` | Yes | The comment content in markdown format. |
| `bodyData` | `string` | Yes | [Internal] The comment content as a ProseMirror document. |
| `botActor` | `table` | No | The bot that created the comment. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `documentContent` | `table` | No | The document content that the comment is associated with. |
| `documentContentId` | `string` | No | The ID of the document content that the comment is associated with. |
| `editedAt` | `any` | No | The time the comment was last edited by its author. |
| `externalThread` | `table` | No | The external thread that the comment is synced with. |
| `externalUser` | `table` | No | The external user who wrote the comment, when the comment was created through an integration such as Slack or Intercom. |
| `hideInLinear` | `boolean` | Yes | [Internal] Whether the comment should be hidden from Linear clients. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiative` | `table` | No | The initiative that the comment is associated with. |
| `initiativeId` | `string` | No | The ID of the initiative that the comment is associated with. |
| `initiativeUpdate` | `table` | No | The initiative update that the comment is associated with. |
| `initiativeUpdateId` | `string` | No | The ID of the initiative update that the comment is associated with. |
| `isArtificialAgentSessionRoot` | `boolean` | Yes | [Internal] Whether the comment is an artificial placeholder for an agent session thread created without a comment mention. |
| `issue` | `table` | No | The issue that the comment is associated with. |
| `issueId` | `string` | No | The ID of the issue that the comment is associated with. |
| `onBehalfOf` | `table` | No | [Internal] The user on whose behalf the comment was created, e.g. |
| `parent` | `table` | No | The parent comment under which the current comment is nested. |
| `parentId` | `string` | No | The ID of the parent comment under which the current comment is nested. |
| `post` | `table` | No | The post that the comment is associated with. |
| `project` | `table` | No | The project that the comment is associated with. |
| `projectId` | `string` | No | The ID of the project that the comment is associated with. |
| `projectUpdate` | `table` | No | The project update that the comment is associated with. |
| `projectUpdateId` | `string` | No | The ID of the project update that the comment is associated with. |
| `quotedText` | `string` | No | The text that this comment references, used for inline comments on documents or issue descriptions. |
| `reactionData` | `any` | Yes | Emoji reaction summary for this comment, grouped by emoji type. |
| `resolvedAt` | `any` | No | The time when the comment thread was resolved. |
| `resolvingComment` | `table` | No | The child comment that resolved this thread. |
| `resolvingCommentId` | `string` | No | The ID of the child comment that resolved this thread. |
| `resolvingUser` | `table` | No | The user that resolved the comment thread. |
| `threadSummary` | `any` | No | [Internal] An AI-generated summary of the comment thread. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | Comment's URL. |
| `user` | `table` | No | The user who wrote the comment. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Comment():create({
  body = --[[ string ]],
  bodyData = --[[ string ]],
  createdAt = --[[ any ]],
  hideInLinear = --[[ boolean ]],
  id = --[[ string ]],
  isArtificialAgentSessionRoot = --[[ boolean ]],
  reactionData = --[[ any ]],
  updatedAt = --[[ any ]],
  url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Comment():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Comment():load({ id = "comment_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Comment():remove({ id = "comment_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Comment():update({
  id = "comment_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CommentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CreateOrJoinOrganizationResponseEntity

```lua
local create_or_join_organization_response = client:CreateOrJoinOrganizationResponse(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `organization` | `table` | No | The workspace that was created or joined. |
| `user` | `table` | No | The user who created or joined the workspace. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CreateOrJoinOrganizationResponse():create({
})
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:CreateOrJoinOrganizationResponse():update({
  organization_id = "organization_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateOrJoinOrganizationResponseEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomViewEntity

```lua
local custom_view = client:CustomView(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `color` | `string` | No | The hex color code of the custom view icon. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `table` | No | The user who originally created the custom view. |
| `description` | `string` | No | The description of the custom view. |
| `facet` | `table` | No | [INTERNAL] The facet that links this custom view to its parent entity (project, initiative, team page, etc.). |
| `feedItemFilterData` | `any` | No | The filter applied to feed items in the custom view. |
| `filterData` | `any` | Yes | The structured filter applied to issues in the custom view. |
| `icon` | `string` | No | The icon of the custom view. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiativeFilterData` | `any` | No | The filter applied to initiatives in the custom view. |
| `modelName` | `string` | Yes | The entity type this view displays. |
| `name` | `string` | Yes | The name of the custom view, displayed in the sidebar and navigation. |
| `organization` | `table` | No | The workspace of the custom view. |
| `organizationViewPreferences` | `table` | No | The workspace-level default view preferences for this custom view, if any have been set. |
| `owner` | `table` | No | The user who owns the custom view. |
| `projectFilterData` | `any` | No | The filter applied to projects in the custom view. |
| `shared` | `boolean` | Yes | Whether the custom view is shared with everyone in the organization. |
| `slugId` | `string` | Yes | The custom view's unique URL slug, used to construct human-readable URLs. |
| `team` | `table` | No | The team that the custom view is scoped to. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `updatedBy` | `table` | No | The user who last updated the custom view. |
| `userViewPreferences` | `table` | No | The current user's personal view preferences for this custom view, if they have set any. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CustomView():create({
  createdAt = --[[ any ]],
  filterData = --[[ any ]],
  id = --[[ string ]],
  modelName = --[[ string ]],
  name = --[[ string ]],
  shared = --[[ boolean ]],
  slugId = --[[ string ]],
  updatedAt = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CustomView():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CustomView():load({ id = "custom_view_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:CustomView():remove({ id = "custom_view_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:CustomView():update({
  id = "custom_view_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomViewEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomerEntity

```lua
local customer = client:Customer(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approximateNeedCount` | `number` | Yes | The approximate number of distinct requests associated with this customer, deduplicated per issue or project. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `domains` | `string` | Yes | The email domains associated with this customer (e.g., 'acme.com'). |
| `externalIds` | `string` | Yes | Identifiers for this customer in external systems (e.g., CRM IDs from Intercom, Salesforce, or HubSpot). |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `integration` | `table` | No | The integration that manages this customer's data (e.g., Intercom, Salesforce). |
| `logoUrl` | `string` | No | URL of the customer's logo image. |
| `mainSourceId` | `string` | No | The primary external source ID when a customer has data from multiple external systems. |
| `name` | `string` | Yes | The display name of the customer organization. |
| `owner` | `table` | No | The workspace member assigned as the owner of this customer. |
| `revenue` | `number` | No | The annual revenue generated by this customer. |
| `size` | `number` | No | The number of employees or seats at the customer organization. |
| `slackChannelId` | `string` | No | The ID of the Slack channel linked to this customer for communication. |
| `slugId` | `string` | Yes | A unique, human-readable URL slug for the customer. |
| `status` | `table` | No | The current lifecycle status of the customer. |
| `tier` | `table` | No | The tier or segment assigned to this customer for prioritization (e.g., Enterprise, Pro, Free). |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | The URL of the customer's page in the Linear application. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Customer():create({
  approximateNeedCount = --[[ number ]],
  createdAt = --[[ any ]],
  domains = --[[ string ]],
  externalIds = --[[ string ]],
  id = --[[ string ]],
  name = --[[ string ]],
  slugId = --[[ string ]],
  updatedAt = --[[ any ]],
  url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Customer():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Customer():load({ id = "customer_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Customer():remove({ id = "customer_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Customer():update({
  id = "customer_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomerNeedEntity

```lua
local customer_need = client:CustomerNeed(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `attachment` | `table` | No | The issue attachment linked to this need. |
| `body` | `string` | No | The body content of the need in Markdown format. |
| `bodyData` | `string` | No | [Internal] The body content of the need as a Prosemirror document JSON string. |
| `comment` | `table` | No | An optional comment providing additional context for this need. |
| `content` | `string` | No | The effective Markdown content shown for this customer need. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `table` | No | The user who manually created this customer need. |
| `customer` | `table` | No | The customer organization this need belongs to. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `issue` | `table` | No | The issue this need is linked to. |
| `originalIssue` | `table` | No | The issue this customer need was originally created on, before being moved to a different issue or project. |
| `priority` | `number` | Yes | Whether the customer need is important or not. |
| `project` | `table` | No | The project this need is linked to. |
| `projectAttachment` | `table` | No | The project attachment linked to this need. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | No | The URL of the source attachment linked to this need, if any. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CustomerNeed():create({
  createdAt = --[[ any ]],
  id = --[[ string ]],
  priority = --[[ number ]],
  updatedAt = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CustomerNeed():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CustomerNeed():load({ id = "customer_need_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:CustomerNeed():remove({ id = "customer_need_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:CustomerNeed():update({
  id = "customer_need_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomerNeedEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomerStatusEntity

```lua
local customer_status = client:CustomerStatus(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `color` | `string` | Yes | The color of the status indicator in the UI, as a HEX string (e.g., '#ff0000'). |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `description` | `string` | No | An optional description explaining what this status represents in the customer lifecycle. |
| `displayName` | `string` | Yes | The user-facing display name of the status shown in the UI. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `name` | `string` | Yes | The internal name of the status. |
| `position` | `number` | Yes | The sort position of the status in the workspace's customer lifecycle flow. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CustomerStatus():create({
  color = --[[ string ]],
  createdAt = --[[ any ]],
  displayName = --[[ string ]],
  id = --[[ string ]],
  name = --[[ string ]],
  position = --[[ number ]],
  updatedAt = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CustomerStatus():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CustomerStatus():load({ id = "customer_status_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:CustomerStatus():remove({ id = "customer_status_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:CustomerStatus():update({
  id = "customer_status_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomerStatusEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomerTierEntity

```lua
local customer_tier = client:CustomerTier(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `color` | `string` | Yes | The color of the tier indicator in the UI, as a HEX string (e.g., '#ff0000'). |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `description` | `string` | No | An optional description explaining what this tier represents and its intended use for customer segmentation. |
| `displayName` | `string` | Yes | The user-facing display name of the tier shown in the UI. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `name` | `string` | Yes | The internal name of the tier. |
| `position` | `number` | Yes | The sort position of the tier in the workspace's customer tier ordering. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CustomerTier():create({
  color = --[[ string ]],
  createdAt = --[[ any ]],
  displayName = --[[ string ]],
  id = --[[ string ]],
  name = --[[ string ]],
  position = --[[ number ]],
  updatedAt = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CustomerTier():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CustomerTier():load({ id = "customer_tier_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:CustomerTier():remove({ id = "customer_tier_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:CustomerTier():update({
  id = "customer_tier_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomerTierEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CycleEntity

```lua
local cycle = client:Cycle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `autoArchivedAt` | `any` | No | The time at which the cycle was automatically archived by the auto-pruning process. |
| `completedAt` | `any` | No | The completion time of the cycle. |
| `completedIssueCountHistory` | `number` | Yes | The number of completed issues in the cycle after each day. |
| `completedScopeHistory` | `number` | Yes | The number of completed estimation points after each day. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `currentProgress` | `any` | Yes | [Internal] The current progress snapshot of the cycle, broken down by issue status categories. |
| `description` | `string` | No | The description of the cycle. |
| `endsAt` | `any` | Yes | The end date and time of the cycle. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `inProgressScopeHistory` | `number` | Yes | The number of in-progress estimation points after each day. |
| `inheritedFrom` | `table` | No | The parent cycle this cycle was inherited from. |
| `isActive` | `boolean` | Yes | Whether the cycle is currently active. |
| `isFuture` | `boolean` | Yes | Whether the cycle has not yet started. |
| `isNext` | `boolean` | Yes | Whether this cycle is the next upcoming (not yet started) cycle for the team. |
| `isPast` | `boolean` | Yes | Whether the cycle's end date has passed. |
| `isPrevious` | `boolean` | Yes | Whether this cycle is the most recently completed cycle for the team. |
| `issueCountHistory` | `number` | Yes | The total number of issues in the cycle after each day. |
| `name` | `string` | No | The custom name of the cycle. |
| `number` | `number` | Yes | The auto-incrementing number of the cycle, unique within its team. |
| `progress` | `number` | Yes | The overall progress of the cycle as a number between 0 and 1. |
| `progressHistory` | `any` | Yes | [Internal] The detailed progress history of the cycle, including per-status breakdowns over time. |
| `scopeHistory` | `number` | Yes | The total number of estimation points (scope) in the cycle after each day. |
| `startsAt` | `any` | Yes | The start date and time of the cycle. |
| `team` | `table` | No | The team that the cycle belongs to. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Cycle():create({
  completedIssueCountHistory = --[[ number ]],
  completedScopeHistory = --[[ number ]],
  createdAt = --[[ any ]],
  currentProgress = --[[ any ]],
  endsAt = --[[ any ]],
  id = --[[ string ]],
  inProgressScopeHistory = --[[ number ]],
  isActive = --[[ boolean ]],
  isFuture = --[[ boolean ]],
  isNext = --[[ boolean ]],
  isPast = --[[ boolean ]],
  isPrevious = --[[ boolean ]],
  issueCountHistory = --[[ number ]],
  number = --[[ number ]],
  progress = --[[ number ]],
  progressHistory = --[[ any ]],
  scopeHistory = --[[ number ]],
  startsAt = --[[ any ]],
  updatedAt = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Cycle():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Cycle():load({ id = "cycle_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Cycle():update({
  id = "cycle_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CycleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DiffEntity

```lua
local diff = client:Diff(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additions` | `number` | Yes | [Internal] The total number of added lines across the diff. |
| `agentSession` | `table` | No | The agent session the diff belongs to. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `contentHash` | `string` | Yes | [Internal] The opaque content hash identifying the diff's content in code.storage. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `table` | No | The user responsible for the diff. |
| `deletions` | `number` | Yes | [Internal] The total number of deleted lines across the diff. |
| `fileCount` | `number` | Yes | [Internal] The number of changed files in the diff. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `organization` | `table` | No | The workspace the diff belongs to. |
| `pullRequest` | `table` | No | The pull request the diff was promoted to when opened for review. |
| `slugId` | `string` | Yes | [Internal] The diff's unique URL slug. |
| `truncated` | `boolean` | Yes | [Internal] Whether oversized files were omitted when the diff was computed. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Diff():load({ id = "diff_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DiffEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DocumentEntity

```lua
local document = client:Document(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `color` | `string` | No | The hex color of the document icon. |
| `content` | `string` | No | The document's content in markdown format. |
| `contentState` | `string` | No | [Internal] The document's content as a base64-encoded Yjs state update. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `table` | No | The user who created the document. |
| `cycle` | `table` | No | [Internal] The cycle that the document is associated with. |
| `documentContentId` | `string` | No | The ID of the document content associated with the document. |
| `hiddenAt` | `any` | No | The time at which the document was hidden from the default view. |
| `icon` | `string` | No | The icon of the document, either a decorative icon type or an emoji string. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiative` | `table` | No | The initiative that the document is associated with. |
| `issue` | `table` | No | The issue that the document is associated with. |
| `lastAppliedTemplate` | `table` | No | The last template that was applied to this document. |
| `owner` | `table` | No | The owner of the document. |
| `project` | `table` | No | The project that the document is associated with. |
| `release` | `table` | No | The release that the document is associated with. |
| `slugId` | `string` | Yes | The document's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `number` | Yes | The sort order of the document in its parent entity's resources list. |
| `summary` | `string` | No | [Internal] A one-sentence AI-generated summary of the document content. |
| `team` | `table` | No | [Internal] The team that the document is associated with. |
| `title` | `string` | Yes | The title of the document. |
| `trashed` | `boolean` | No | A flag that indicates whether the document is in the trash bin. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `updatedBy` | `table` | No | The user who last updated the document. |
| `url` | `string` | Yes | The canonical url for the document. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Document():create({
  createdAt = --[[ any ]],
  id = --[[ string ]],
  slugId = --[[ string ]],
  sortOrder = --[[ number ]],
  title = --[[ string ]],
  updatedAt = --[[ any ]],
  url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Document():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Document():load({ id = "document_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Document():remove({ id = "document_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Document():update({
  id = "document_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DocumentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DocumentSearchResultEntity

```lua
local document_search_result = client:DocumentSearchResult(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `color` | `string` | No | The hex color of the document icon. |
| `content` | `string` | No | The document's content in markdown format. |
| `contentState` | `string` | No | [Internal] The document's content as a base64-encoded Yjs state update. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `table` | No | The user who created the document. |
| `cycle` | `table` | No | [Internal] The cycle that the document is associated with. |
| `documentContentId` | `string` | No | The ID of the document content associated with the document. |
| `hiddenAt` | `any` | No | The time at which the document was hidden from the default view. |
| `icon` | `string` | No | The icon of the document, either a decorative icon type or an emoji string. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiative` | `table` | No | The initiative that the document is associated with. |
| `issue` | `table` | No | The issue that the document is associated with. |
| `lastAppliedTemplate` | `table` | No | The last template that was applied to this document. |
| `metadata` | `any` | Yes | Metadata related to search result. |
| `owner` | `table` | No | The owner of the document. |
| `project` | `table` | No | The project that the document is associated with. |
| `release` | `table` | No | The release that the document is associated with. |
| `slugId` | `string` | Yes | The document's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `number` | Yes | The sort order of the document in its parent entity's resources list. |
| `summary` | `string` | No | [Internal] A one-sentence AI-generated summary of the document content. |
| `team` | `table` | No | [Internal] The team that the document is associated with. |
| `title` | `string` | Yes | The title of the document. |
| `trashed` | `boolean` | No | A flag that indicates whether the document is in the trash bin. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `updatedBy` | `table` | No | The user who last updated the document. |
| `url` | `string` | Yes | The canonical url for the document. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DocumentSearchResult():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DocumentSearchResultEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EmailIntakeAddressEntity

```lua
local email_intake_address = client:EmailIntakeAddress(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `string` | Yes | The unique local part (before the @) of the intake email address, used to route incoming emails to the correct intake handler. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `table` | No | The user who created the email intake address. |
| `customerRequestsEnabled` | `boolean` | Yes | Whether issues created from emails sent to this address are automatically converted into customer requests, linking the sender as a customer contact. |
| `enabled` | `boolean` | Yes | Whether the email address is enabled. |
| `forwardingEmailAddress` | `string` | No | The email address used to forward emails to the intake address. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `issueCanceledAutoReply` | `string` | No | The auto-reply message for issue canceled. |
| `issueCanceledAutoReplyEnabled` | `boolean` | Yes | Whether the auto-reply for issue canceled is enabled. |
| `issueCompletedAutoReply` | `string` | No | The auto-reply message for issue completed. |
| `issueCompletedAutoReplyEnabled` | `boolean` | Yes | Whether the auto-reply for issue completed is enabled. |
| `issueCreatedAutoReply` | `string` | No | The auto-reply message for issue created. |
| `issueCreatedAutoReplyEnabled` | `boolean` | Yes | Whether the auto-reply for issue created is enabled. |
| `lastUsedAt` | `any` | No | The last time an inbound email was successfully ingested for this address. |
| `organization` | `table` | No | The workspace that the email address is associated with. |
| `reopenOnReply` | `boolean` | Yes | Whether to reopen completed or canceled issues when a substantive email reply is received. |
| `repliesEnabled` | `boolean` | Yes | Whether email replies are enabled. |
| `senderName` | `string` | No | The name to be used for outgoing emails. |
| `sesDomainIdentity` | `table` | No | The SES domain identity that the email address is associated with. |
| `team` | `table` | No | The team that the email address is associated with. |
| `template` | `table` | No | The template that the email address is associated with. |
| `type` | `string` | Yes | The type of the email address. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `useUserNamesInReplies` | `boolean` | Yes | Whether the commenter's name is included in the email replies. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:EmailIntakeAddress():create({
  address = --[[ string ]],
  createdAt = --[[ any ]],
  customerRequestsEnabled = --[[ boolean ]],
  enabled = --[[ boolean ]],
  id = --[[ string ]],
  issueCanceledAutoReplyEnabled = --[[ boolean ]],
  issueCompletedAutoReplyEnabled = --[[ boolean ]],
  issueCreatedAutoReplyEnabled = --[[ boolean ]],
  reopenOnReply = --[[ boolean ]],
  repliesEnabled = --[[ boolean ]],
  type = --[[ string ]],
  updatedAt = --[[ any ]],
  useUserNamesInReplies = --[[ boolean ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:EmailIntakeAddress():load({ id = "email_intake_address_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:EmailIntakeAddress():remove({ id = "email_intake_address_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:EmailIntakeAddress():update({
  id = "email_intake_address_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmailIntakeAddressEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EmailUserAccountAuthChallengeResponseEntity

```lua
local email_user_account_auth_challenge_response = client:EmailUserAccountAuthChallengeResponse(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authType` | `string` | Yes | Supported challenge for this user account. |
| `success` | `boolean` | Yes | Whether the operation was successful. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:EmailUserAccountAuthChallengeResponse():create({
  authType = --[[ string ]],
  success = --[[ boolean ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmailUserAccountAuthChallengeResponseEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EmojiEntity

```lua
local emoji = client:Emoji(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `table` | No | The user who created the emoji. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `name` | `string` | Yes | The unique name of the custom emoji within the workspace. |
| `organization` | `table` | No | The workspace that the emoji belongs to. |
| `source` | `string` | Yes | The source of the emoji, indicating how it was created (e.g., uploaded by a user or imported). |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | The URL of the uploaded image for this custom emoji. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Emoji():create({
  createdAt = --[[ any ]],
  id = --[[ string ]],
  name = --[[ string ]],
  source = --[[ string ]],
  updatedAt = --[[ any ]],
  url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Emoji():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Emoji():load({ id = "emoji_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Emoji():remove({ id = "emoji_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmojiEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EntityExternalLinkEntity

```lua
local entity_external_link = client:EntityExternalLink(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `table` | No | The user who created the link. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiative` | `table` | No | The initiative that the link is associated with. |
| `label` | `string` | Yes | The link's label. |
| `project` | `table` | No | The project that the link is associated with. |
| `sortOrder` | `number` | Yes | The sort order of this link within the parent entity's resources list. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | The link's URL. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:EntityExternalLink():create({
  createdAt = --[[ any ]],
  id = --[[ string ]],
  label = --[[ string ]],
  sortOrder = --[[ number ]],
  updatedAt = --[[ any ]],
  url = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:EntityExternalLink():load({ id = "entity_external_link_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:EntityExternalLink():remove({ id = "entity_external_link_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:EntityExternalLink():update({
  id = "entity_external_link_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EntityExternalLinkEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ExternalUserEntity

```lua
local external_user = client:ExternalUser(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `avatarUrl` | `string` | No | A URL to the external user's avatar image. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `displayName` | `string` | Yes | The external user's display name. |
| `email` | `string` | No | The external user's email address. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `lastSeen` | `any` | No | The last time the external user was seen interacting with Linear through their external service. |
| `name` | `string` | Yes | The external user's full name. |
| `organization` | `table` | No | The workspace that the external user belongs to. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ExternalUser():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ExternalUser():load({ id = "external_user_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ExternalUserEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FavoriteEntity

```lua
local favorite = client:Favorite(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aiConversation` | `table` | No | [INTERNAL] The favorited Agent conversation. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `color` | `string` | No | [Internal] Returns the color of the favorite's icon. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `customView` | `table` | No | The favorited custom view. |
| `customer` | `table` | No | The favorited customer. |
| `cycle` | `table` | No | The favorited cycle. |
| `dashboard` | `table` | No | The favorited dashboard. |
| `detail` | `string` | No | [Internal] Detail text for favorite's `title` (e.g. |
| `document` | `table` | No | The favorited document. |
| `facet` | `table` | No | [INTERNAL] The favorited facet. |
| `folderName` | `string` | No | The name of the folder. |
| `icon` | `string` | No | [Internal] Name of the favorite's icon. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiative` | `table` | No | The favorited initiative. |
| `initiativeLabel` | `table` | No | [INTERNAL] The favorited initiative label. |
| `initiativeTab` | `string` | No | The targeted tab of the initiative. |
| `issue` | `table` | No | The favorited issue. |
| `label` | `table` | No | The favorited label. |
| `liveFolderDefinition` | `any` | No | The versioned lazy root and filter represented by this live favorite folder. |
| `liveFolderPreset` | `string` | No | The predefined live folder represented by this favorite. |
| `owner` | `table` | No | The user who owns this favorite. |
| `parent` | `table` | No | The parent folder of the favorite. |
| `pipelineTab` | `string` | No | The targeted tab of the release pipeline. |
| `predefinedViewTeam` | `table` | No | The team of the favorited predefined view. |
| `predefinedViewType` | `string` | No | The type of favorited predefined view (e.g., 'allIssues', 'activeCycle', 'backlog', 'triage'). |
| `project` | `table` | No | The favorited project. |
| `projectLabel` | `table` | No | The favorited project label. |
| `projectTab` | `string` | No | The targeted tab of the project. |
| `projectTeam` | `table` | No | [DEPRECATED] The favorited team of the project. |
| `pullRequest` | `table` | No | The favorited pull request. |
| `release` | `table` | No | The favorited release. |
| `releaseNote` | `table` | No | The favorited release note. |
| `releasePipeline` | `table` | No | The favorited release pipeline. |
| `sortOrder` | `number` | Yes | The position of this item in the user's favorites list. |
| `team` | `table` | No | The favorited team. |
| `title` | `string` | Yes | [Internal] Favorite's title text (name of the favorite'd object or folder). |
| `type` | `string` | Yes | The type of entity this favorite references, such as 'issue', 'project', 'cycle', 'customView', 'document', 'folder', etc. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | No | URL of the favorited entity. |
| `user` | `table` | No | The favorited user. |
| `workflowDefinition` | `table` | No | The favorited loop. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Favorite():create({
  createdAt = --[[ any ]],
  id = --[[ string ]],
  sortOrder = --[[ number ]],
  title = --[[ string ]],
  type = --[[ string ]],
  updatedAt = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Favorite():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Favorite():load({ id = "favorite_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Favorite():remove({ id = "favorite_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Favorite():update({
  id = "favorite_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FavoriteEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GitAutomationStateEntity

```lua
local git_automation_state = client:GitAutomationState(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `event` | `string` | Yes | The Git event that triggers this automation rule (e.g., branch created, PR opened for review, or PR merged). |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `state` | `table` | No | The workflow state that linked issues will be transitioned to when the Git event fires. |
| `targetBranch` | `table` | No | The target branch that this automation rule applies to. |
| `team` | `table` | No | The team that this automation rule belongs to. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:GitAutomationState():create({
  createdAt = --[[ any ]],
  event = --[[ string ]],
  id = --[[ string ]],
  updatedAt = --[[ any ]],
})
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:GitAutomationState():remove({ id = "id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:GitAutomationState():update({
  id = "id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GitAutomationStateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GitAutomationTargetBranchEntity

```lua
local git_automation_target_branch = client:GitAutomationTargetBranch(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `branchPattern` | `string` | Yes | The branch name or pattern to match against pull request target branches. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `isRegex` | `boolean` | Yes | Whether the branch pattern should be interpreted as a regular expression. |
| `team` | `table` | No | The team that this target branch definition belongs to. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:GitAutomationTargetBranch():create({
  branchPattern = --[[ string ]],
  createdAt = --[[ any ]],
  id = --[[ string ]],
  isRegex = --[[ boolean ]],
  updatedAt = --[[ any ]],
})
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:GitAutomationTargetBranch():remove({ id = "id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:GitAutomationTargetBranch():update({
  id = "id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GitAutomationTargetBranchEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GitHubIntegrationConnectDetailEntity

```lua
local git_hub_integration_connect_detail = client:GitHubIntegrationConnectDetail(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `lostRepositoryNames` | `string` | No | Full names ('owner/repo') of repositories whose existing GitHub Issues sync mappings would become inaccessible if the new GitHub App installation replaces the existing one. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:GitHubIntegrationConnectDetail():create({
})
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:GitHubIntegrationConnectDetail():update({
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GitHubIntegrationConnectDetailEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## InitiativeEntity

```lua
local initiative = client:Initiative(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `canceledAt` | `any` | No | [Internal] The time at which the initiative was moved into Canceled status. |
| `color` | `string` | No | The initiative's color. |
| `completedAt` | `any` | No | The time at which the initiative was moved into Completed status. |
| `content` | `string` | No | The initiative's content in markdown format. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `table` | No | The user who created the initiative. |
| `description` | `string` | No | The description of the initiative. |
| `documentContent` | `table` | No | The content of the initiative description. |
| `frequencyResolution` | `string` | Yes | The resolution of the reminder frequency. |
| `health` | `string` | No | The overall health of the initiative, derived from the most recent initiative update. |
| `healthUpdatedAt` | `any` | No | The time at which the initiative health was last updated, typically when a new initiative update is posted. |
| `icon` | `string` | No | The icon of the initiative. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `identifier` | `string` | No | [Internal] The human-readable identifier of the initiative. |
| `integrationsSettings` | `table` | No | Settings for all integrations associated with that initiative. |
| `labelIds` | `string` | Yes | The IDs of the initiative labels associated with this initiative. |
| `lastUpdate` | `table` | No | The most recent status update posted for this initiative. |
| `leadTeam` | `table` | No | The team that leads the initiative. |
| `name` | `string` | Yes | The name of the initiative. |
| `organization` | `table` | No | The workspace of the initiative. |
| `owner` | `table` | No | The user who owns the initiative. |
| `parentInitiative` | `table` | No | Parent initiative associated with the initiative. |
| `previousIdentifiers` | `string` | Yes | [Internal] Identifiers (default and custom) that this initiative has previously held. |
| `priority` | `number` | Yes | The priority of the initiative. |
| `prioritySortOrder` | `number` | Yes | The sort order of the initiative within the workspace when ordered by priority. |
| `slugId` | `string` | Yes | The initiative's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `number` | Yes | The sort order of the initiative within the workspace. |
| `startedAt` | `any` | No | The time at which the initiative was moved into Active status. |
| `status` | `string` | Yes | The lifecycle status of the initiative. |
| `targetDate` | `any` | No | The estimated completion date of the initiative. |
| `targetDateResolution` | `string` | No | The resolution of the initiative's estimated completion date, indicating whether it refers to a specific day, week, month, quarter, or year. |
| `trashed` | `boolean` | No | A flag that indicates whether the initiative is in the trash bin. |
| `updateReminderFrequency` | `number` | No | The frequency at which to prompt for updates. |
| `updateReminderFrequencyInWeeks` | `number` | No | The n-weekly frequency at which to prompt for updates. |
| `updateRemindersDay` | `string` | No | The day at which to prompt for updates. |
| `updateRemindersHour` | `number` | No | The hour at which to prompt for updates. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | Initiative URL. |
| `visibility` | `string` | Yes | The visibility of the initiative, derived from its lead team. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Initiative():create({
  createdAt = --[[ any ]],
  frequencyResolution = --[[ string ]],
  id = --[[ string ]],
  labelIds = --[[ string ]],
  name = --[[ string ]],
  previousIdentifiers = --[[ string ]],
  priority = --[[ number ]],
  prioritySortOrder = --[[ number ]],
  slugId = --[[ string ]],
  sortOrder = --[[ number ]],
  status = --[[ string ]],
  updatedAt = --[[ any ]],
  url = --[[ string ]],
  visibility = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Initiative():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Initiative():load({ id = "initiative_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Initiative():remove({ id = "initiative_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Initiative():update({
  id = "initiative_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InitiativeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## InitiativeLabelEntity

```lua
local initiative_label = client:InitiativeLabel(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `color` | `string` | Yes | The label's color as a HEX string (e.g., '#EB5757'). |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `table` | No | The user who created the label. |
| `description` | `string` | No | The label's description. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `isGroup` | `boolean` | Yes | Whether the label is a group. |
| `lastAppliedAt` | `any` | No | The date when the label was last applied to an issue, project, or initiative. |
| `name` | `string` | Yes | The label's name. |
| `organization` | `table` | No | The workspace that the initiative label belongs to. |
| `parent` | `table` | No | The parent label group. |
| `retiredAt` | `any` | No | [Internal] When the label was retired. |
| `retiredBy` | `table` | No | The user who retired the label. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:InitiativeLabel():create({
  color = --[[ string ]],
  createdAt = --[[ any ]],
  id = --[[ string ]],
  isGroup = --[[ boolean ]],
  name = --[[ string ]],
  updatedAt = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:InitiativeLabel():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:InitiativeLabel():load({ id = "initiative_label_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:InitiativeLabel():remove({ id = "initiative_label_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:InitiativeLabel():update({
  id = "initiative_label_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InitiativeLabelEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## InitiativeLeadTeamChangeImpactEntity

```lua
local initiative_lead_team_change_impact = client:InitiativeLeadTeamChangeImpact(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `affectedDescendantCount` | `number` | Yes | The number of editable matching sub-initiatives whose lead team would change if the update is applied to descendants. |
| `id` | `string` | No |  |
| `visibilityMayChange` | `boolean` | Yes | Whether the changed initiatives may gain or lose access restrictions because the current or next lead team is not public. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:InitiativeLeadTeamChangeImpact():load({ id = "initiative_lead_team_change_impact_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InitiativeLeadTeamChangeImpactEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## InitiativeRelationEntity

```lua
local initiative_relation = client:InitiativeRelation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiative` | `table` | No | The parent initiative in this hierarchical relation. |
| `relatedInitiative` | `table` | No | The child initiative in this hierarchical relation. |
| `sortOrder` | `number` | Yes | The sort order of the child initiative within its parent initiative. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `table` | No | The user who last created or modified the relation. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:InitiativeRelation():create({
  createdAt = --[[ any ]],
  id = --[[ string ]],
  sortOrder = --[[ number ]],
  updatedAt = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:InitiativeRelation():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:InitiativeRelation():load({ id = "initiative_relation_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:InitiativeRelation():remove({ id = "initiative_relation_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:InitiativeRelation():update({
  id = "initiative_relation_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InitiativeRelationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## InitiativeToProjectEntity

```lua
local initiative_to_project = client:InitiativeToProject(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiative` | `table` | No | The initiative that the project is associated with. |
| `project` | `table` | No | The project that the initiative is associated with. |
| `sortOrder` | `string` | Yes | The sort order of the project within its parent initiative. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:InitiativeToProject():create({
  createdAt = --[[ any ]],
  id = --[[ string ]],
  sortOrder = --[[ string ]],
  updatedAt = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:InitiativeToProject():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:InitiativeToProject():load({ id = "initiative_to_project_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:InitiativeToProject():remove({ id = "initiative_to_project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:InitiativeToProject():update({
  id = "initiative_to_project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InitiativeToProjectEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## InitiativeUpdateEntity

```lua
local initiative_update = client:InitiativeUpdate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `body` | `string` | Yes | The update content in markdown format. |
| `bodyData` | `string` | Yes | [Internal] The content of the update as a Prosemirror document. |
| `commentCount` | `number` | Yes | Number of comments associated with the initiative update. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `diff` | `any` | No | The diff between the current update and the previous one. |
| `diffMarkdown` | `string` | No | The diff between the current update and the previous one, formatted as markdown. |
| `editedAt` | `any` | No | The time the update was edited. |
| `health` | `string` | Yes | The health of the initiative at the time this update was posted. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `infoSnapshot` | `any` | No | [Internal] A snapshot of initiative properties at the time the update was posted, including project statuses, sub-initiative health, and target dates. |
| `initiative` | `table` | No | The initiative that this status update was posted to. |
| `isDiffHidden` | `boolean` | Yes | Whether the diff between this update and the previous one should be hidden in the UI. |
| `isStale` | `boolean` | Yes | Whether the initiative update is stale. |
| `reactionData` | `any` | Yes | Emoji reaction summary, grouped by emoji type. |
| `slugId` | `string` | Yes | The update's unique URL slug. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | The URL to the initiative update. |
| `user` | `table` | No | The user who wrote the update. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:InitiativeUpdate():create({
  body = --[[ string ]],
  bodyData = --[[ string ]],
  commentCount = --[[ number ]],
  createdAt = --[[ any ]],
  health = --[[ string ]],
  id = --[[ string ]],
  isDiffHidden = --[[ boolean ]],
  isStale = --[[ boolean ]],
  reactionData = --[[ any ]],
  slugId = --[[ string ]],
  updatedAt = --[[ any ]],
  url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:InitiativeUpdate():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:InitiativeUpdate():load({ id = "initiative_update_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:InitiativeUpdate():update({
  id = "initiative_update_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InitiativeUpdateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IntegrationEntity

```lua
local integration = client:Integration(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `table` | No | The user that added the integration. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `organization` | `table` | No | The workspace that the integration is associated with. |
| `service` | `string` | Yes | The integration's type, identifying which external service this integration connects to (e.g., 'slack', 'github', 'jira', 'figma'). |
| `team` | `table` | No | The team that the integration is associated with. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Integration():create({
  createdAt = --[[ any ]],
  id = --[[ string ]],
  service = --[[ string ]],
  updatedAt = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Integration():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Integration():load({ id = "integration_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Integration():remove({ id = "integration_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Integration():update({
  id = "integration_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IntegrationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IntegrationTemplateEntity

```lua
local integration_template = client:IntegrationTemplate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `foreignEntityId` | `string` | No | The identifier of the foreign entity in the external service that this template is scoped to. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `integration` | `table` | No | The integration that the template is associated with. |
| `template` | `table` | No | The template that the integration is associated with. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:IntegrationTemplate():create({
  createdAt = --[[ any ]],
  id = --[[ string ]],
  updatedAt = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:IntegrationTemplate():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:IntegrationTemplate():load({ id = "integration_template_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:IntegrationTemplate():remove({ id = "integration_template_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IntegrationTemplateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IntegrationsSettingEntity

```lua
local integrations_setting = client:IntegrationsSetting(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `contextViewType` | `string` | No | The type of view to which the integration settings context is associated with. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiative` | `table` | No | Initiative which those settings apply to. |
| `microsoftTeamsProjectUpdateCreated` | `boolean` | No | Whether to send a Microsoft Teams message when a project update is created. |
| `project` | `table` | No | Project which those settings apply to. |
| `slackInitiativeUpdateCreated` | `boolean` | No | Whether to send a Slack message when an initiative update is created. |
| `slackIssueAddedToTriage` | `boolean` | No | Whether to send a Slack message when a new issue is added to triage. |
| `slackIssueAddedToView` | `boolean` | No | Whether to send a Slack message when an issue is added to the custom view. |
| `slackIssueNewComment` | `boolean` | No | Whether to send a Slack message when a comment is created on any of the project or team's issues. |
| `slackIssueSlaBreached` | `boolean` | No | Whether to send a Slack message when an SLA is breached. |
| `slackIssueSlaHighRisk` | `boolean` | No | Whether to send a Slack message when an SLA is at high risk. |
| `slackIssueStatusChangedAll` | `boolean` | No | Whether to send a Slack message when any of the project or team's issues has a change in status. |
| `slackIssueStatusChangedDone` | `boolean` | No | Whether to send a Slack message when any of the project or team's issues change to completed or canceled. |
| `slackProjectUpdateCreated` | `boolean` | No | Whether to send a Slack message when a project update is created. |
| `slackProjectUpdateCreatedToTeam` | `boolean` | No | Whether to send a new project update to team Slack channels. |
| `slackProjectUpdateCreatedToWorkspace` | `boolean` | No | Whether to send a new project update to workspace Slack channel. |
| `team` | `table` | No | Team which those settings apply to. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:IntegrationsSetting():create({
  createdAt = --[[ any ]],
  id = --[[ string ]],
  updatedAt = --[[ any ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:IntegrationsSetting():load({ id = "integrations_setting_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:IntegrationsSetting():update({
  id = "integrations_setting_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IntegrationsSettingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IssueEntity

```lua
local issue = client:Issue(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activitySummary` | `any` | No | [Internal] The activity summary information for this issue. |
| `addedToCycleAt` | `any` | No | The time at which the issue was added to a cycle. |
| `addedToProjectAt` | `any` | No | The time at which the issue was added to a project. |
| `addedToTeamAt` | `any` | No | The time at which the issue was added to a team. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `asksExternalUserRequester` | `table` | No | The external user who requested creation of the Asks issue on behalf of the creator. |
| `asksRequester` | `table` | No | The internal user who requested creation of the Asks issue on behalf of the creator. |
| `assignee` | `table` | No | The user to whom the issue is assigned. |
| `autoArchivedAt` | `any` | No | The time at which the issue was automatically archived by the auto pruning process. |
| `autoClosedAt` | `any` | No | The time at which the issue was automatically closed by the auto pruning process. |
| `botActor` | `table` | No | The bot that created the issue, if applicable. |
| `branchName` | `string` | Yes | Suggested branch name for the issue. |
| `canceledAt` | `any` | No | The time at which the issue was moved into canceled state. |
| `completedAt` | `any` | No | The time at which the issue was moved into completed state. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `table` | No | The user who created the issue. |
| `customerTicketCount` | `number` | Yes | Returns the number of Attachment resources which are created by customer support ticketing systems (e.g. |
| `cycle` | `table` | No | The cycle that the issue is associated with. |
| `delegate` | `table` | No | The agent user that is delegated to work on this issue. |
| `description` | `string` | No | The issue's description in markdown format. |
| `descriptionState` | `string` | No | [Internal] The issue's description content as YJS state. |
| `documentContent` | `table` | No | [ALPHA] The document content representing this issue description. |
| `dueDate` | `any` | No | The date at which the issue is due. |
| `estimate` | `number` | No | The estimate of the complexity of the issue. |
| `externalUserCreator` | `table` | No | The external user who created the issue. |
| `favorite` | `table` | No | The users favorite associated with this issue. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `identifier` | `string` | Yes | Issue's human readable identifier (e.g. |
| `inheritsSharedAccess` | `boolean` | Yes | Whether this issue inherits shared access from its parent issue. |
| `integrationSourceType` | `string` | No | Integration type that created this issue, if applicable. |
| `labelIds` | `string` | Yes | Identifiers of the labels associated with this issue. |
| `lastAppliedTemplate` | `table` | No | The last template that was applied to this issue. |
| `number` | `number` | Yes | The issue's unique number, scoped to the issue's team. |
| `parent` | `table` | No | The parent of the issue. |
| `previousIdentifiers` | `string` | Yes | Previous identifiers of the issue if it has been moved between teams. |
| `priority` | `number` | Yes | The priority of the issue. |
| `priorityLabel` | `string` | Yes | Label for the priority. |
| `prioritySortOrder` | `number` | Yes | The order of the item in relation to other items in the workspace, when ordered by priority. |
| `project` | `table` | No | The project that the issue is associated with. |
| `projectMilestone` | `table` | No | The project milestone that the issue is associated with. |
| `reactionData` | `any` | Yes | Emoji reaction summary for the issue, grouped by emoji type. |
| `recurringIssueTemplate` | `table` | No | The recurring issue template that created this issue. |
| `slaBreachesAt` | `any` | No | The time at which the issue's SLA will breach. |
| `slaHighRiskAt` | `any` | No | The time at which the issue's SLA will enter high risk state. |
| `slaMediumRiskAt` | `any` | No | The time at which the issue's SLA will enter medium risk state. |
| `slaStartedAt` | `any` | No | The time at which the issue's SLA began. |
| `slaType` | `string` | No | The type of SLA set on the issue. |
| `snoozedBy` | `table` | No | The user who snoozed the issue. |
| `snoozedUntilAt` | `any` | No | The time until an issue will be snoozed in Triage view. |
| `sortOrder` | `number` | Yes | The order of the item in relation to other items in the organization. |
| `sourceComment` | `table` | No | The comment that this issue was created from, when an issue is created from an existing comment. |
| `startedAt` | `any` | No | The time at which the issue was moved into started state. |
| `startedTriageAt` | `any` | No | The time at which the issue entered triage. |
| `state` | `table` | No | The workflow state (issue status) that the issue is currently in. |
| `subIssueSortOrder` | `number` | No | The order of the item in the sub-issue list. |
| `suggestionsGeneratedAt` | `any` | No | [Internal] The time at which the most recent suggestions for this issue were generated. |
| `summary` | `table` | No | [Internal] AI-generated activity summary for this issue. |
| `team` | `table` | No | The team that the issue belongs to. |
| `title` | `string` | Yes | The issue's title. |
| `trashed` | `boolean` | No | A flag that indicates whether the issue is in the trash bin. |
| `triagedAt` | `any` | No | The time at which the issue left triage. |
| `trusted` | `boolean` | No | [Internal] Whether this issue has been explicitly marked as trusted. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | Issue URL. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Issue():create({
  branchName = --[[ string ]],
  createdAt = --[[ any ]],
  customerTicketCount = --[[ number ]],
  id = --[[ string ]],
  identifier = --[[ string ]],
  inheritsSharedAccess = --[[ boolean ]],
  labelIds = --[[ string ]],
  number = --[[ number ]],
  previousIdentifiers = --[[ string ]],
  priority = --[[ number ]],
  priorityLabel = --[[ string ]],
  prioritySortOrder = --[[ number ]],
  reactionData = --[[ any ]],
  sortOrder = --[[ number ]],
  title = --[[ string ]],
  updatedAt = --[[ any ]],
  url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Issue():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Issue():load({ id = "issue_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Issue():remove({ id = "issue_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Issue():update({
  id = "issue_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IssueEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IssueImportEntity

```lua
local issue_import = client:IssueImport(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creatorId` | `string` | No | Identifier of the user who started the import job. |
| `csvFileUrl` | `string` | No | File URL for the uploaded CSV for the import, if there is one. |
| `displayName` | `string` | Yes | The display name of the import service. |
| `error` | `string` | No | User readable error message, if one has occurred during the import. |
| `errorMetadata` | `any` | No | Error code and metadata, if one has occurred during the import. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `mapping` | `any` | No | The data mapping configuration for the import job. |
| `progress` | `number` | No | Current step progress as a percentage (0-100). |
| `service` | `string` | Yes | The external service from which data is being imported (e.g., jira, asana, github, shortcut, linear). |
| `serviceMetadata` | `any` | No | Metadata related to import service. |
| `status` | `string` | Yes | The current status of the import job, indicating its position in the import lifecycle (e.g., not started, in progress, complete, error). |
| `teamName` | `string` | No | The name of the new team to be created for the import, when the import is configured to create a new team rather than importing into an existing one. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:IssueImport():create({
  createdAt = --[[ any ]],
  displayName = --[[ string ]],
  service = --[[ string ]],
  status = --[[ string ]],
  updatedAt = --[[ any ]],
})
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:IssueImport():remove({ issue_import_id = "issue_import_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:IssueImport():update({
  id = "id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IssueImportEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IssueLabelEntity

```lua
local issue_label = client:IssueLabel(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `color` | `string` | Yes | The label's color as a HEX string (e.g., '#EB5757'). |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `table` | No | The user who created the label. |
| `description` | `string` | No | The label's description. |
| `groupType` | `string` | No | The selection mode of this label group. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `inheritedFrom` | `table` | No | The original workspace or parent-team label that this label was inherited from. |
| `isGroup` | `boolean` | Yes | Whether the label is a group. |
| `lastAppliedAt` | `any` | No | The date when the label was last applied to an issue, project, or initiative. |
| `name` | `string` | Yes | The label's name. |
| `parent` | `table` | No | The parent label. |
| `retiredAt` | `any` | No | [Internal] When the label was retired. |
| `retiredBy` | `table` | No | The user who retired the label. |
| `team` | `table` | No | The team that the label is scoped to. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:IssueLabel():create({
  color = --[[ string ]],
  createdAt = --[[ any ]],
  id = --[[ string ]],
  isGroup = --[[ boolean ]],
  name = --[[ string ]],
  updatedAt = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:IssueLabel():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:IssueLabel():load({ id = "issue_label_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:IssueLabel():remove({ id = "issue_label_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:IssueLabel():update({
  id = "issue_label_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IssueLabelEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IssuePriorityValueEntity

```lua
local issue_priority_value = client:IssuePriorityValue(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `string` | Yes | Priority's label. |
| `priority` | `number` | Yes | Priority's number value. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:IssuePriorityValue():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IssuePriorityValueEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IssueRelationEntity

```lua
local issue_relation = client:IssueRelation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `issue` | `table` | No | The source issue whose relationship is being described. |
| `relatedIssue` | `table` | No | The target issue that the source issue is related to. |
| `type` | `string` | Yes | The type of relationship between the source issue and the related issue. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:IssueRelation():create({
  createdAt = --[[ any ]],
  id = --[[ string ]],
  type = --[[ string ]],
  updatedAt = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:IssueRelation():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:IssueRelation():load({ id = "issue_relation_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:IssueRelation():remove({ id = "issue_relation_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:IssueRelation():update({
  id = "issue_relation_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IssueRelationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IssueSearchResultEntity

```lua
local issue_search_result = client:IssueSearchResult(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activitySummary` | `any` | No | [Internal] The activity summary information for this issue. |
| `addedToCycleAt` | `any` | No | The time at which the issue was added to a cycle. |
| `addedToProjectAt` | `any` | No | The time at which the issue was added to a project. |
| `addedToTeamAt` | `any` | No | The time at which the issue was added to a team. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `asksExternalUserRequester` | `table` | No | The external user who requested creation of the Asks issue on behalf of the creator. |
| `asksRequester` | `table` | No | The internal user who requested creation of the Asks issue on behalf of the creator. |
| `assignee` | `table` | No | The user to whom the issue is assigned. |
| `autoArchivedAt` | `any` | No | The time at which the issue was automatically archived by the auto pruning process. |
| `autoClosedAt` | `any` | No | The time at which the issue was automatically closed by the auto pruning process. |
| `botActor` | `table` | No | The bot that created the issue, if applicable. |
| `branchName` | `string` | Yes | Suggested branch name for the issue. |
| `canceledAt` | `any` | No | The time at which the issue was moved into canceled state. |
| `completedAt` | `any` | No | The time at which the issue was moved into completed state. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `table` | No | The user who created the issue. |
| `customerTicketCount` | `number` | Yes | Returns the number of Attachment resources which are created by customer support ticketing systems (e.g. |
| `cycle` | `table` | No | The cycle that the issue is associated with. |
| `delegate` | `table` | No | The agent user that is delegated to work on this issue. |
| `description` | `string` | No | The issue's description in markdown format. |
| `descriptionState` | `string` | No | [Internal] The issue's description content as YJS state. |
| `documentContent` | `table` | No | [ALPHA] The document content representing this issue description. |
| `dueDate` | `any` | No | The date at which the issue is due. |
| `estimate` | `number` | No | The estimate of the complexity of the issue. |
| `externalUserCreator` | `table` | No | The external user who created the issue. |
| `favorite` | `table` | No | The users favorite associated with this issue. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `identifier` | `string` | Yes | Issue's human readable identifier (e.g. |
| `inheritsSharedAccess` | `boolean` | Yes | Whether this issue inherits shared access from its parent issue. |
| `integrationSourceType` | `string` | No | Integration type that created this issue, if applicable. |
| `labelIds` | `string` | Yes | Identifiers of the labels associated with this issue. |
| `lastAppliedTemplate` | `table` | No | The last template that was applied to this issue. |
| `metadata` | `any` | Yes | Metadata related to search result. |
| `number` | `number` | Yes | The issue's unique number, scoped to the issue's team. |
| `parent` | `table` | No | The parent of the issue. |
| `previousIdentifiers` | `string` | Yes | Previous identifiers of the issue if it has been moved between teams. |
| `priority` | `number` | Yes | The priority of the issue. |
| `priorityLabel` | `string` | Yes | Label for the priority. |
| `prioritySortOrder` | `number` | Yes | The order of the item in relation to other items in the workspace, when ordered by priority. |
| `project` | `table` | No | The project that the issue is associated with. |
| `projectMilestone` | `table` | No | The project milestone that the issue is associated with. |
| `reactionData` | `any` | Yes | Emoji reaction summary for the issue, grouped by emoji type. |
| `recurringIssueTemplate` | `table` | No | The recurring issue template that created this issue. |
| `slaBreachesAt` | `any` | No | The time at which the issue's SLA will breach. |
| `slaHighRiskAt` | `any` | No | The time at which the issue's SLA will enter high risk state. |
| `slaMediumRiskAt` | `any` | No | The time at which the issue's SLA will enter medium risk state. |
| `slaStartedAt` | `any` | No | The time at which the issue's SLA began. |
| `slaType` | `string` | No | The type of SLA set on the issue. |
| `snoozedBy` | `table` | No | The user who snoozed the issue. |
| `snoozedUntilAt` | `any` | No | The time until an issue will be snoozed in Triage view. |
| `sortOrder` | `number` | Yes | The order of the item in relation to other items in the organization. |
| `sourceComment` | `table` | No | The comment that this issue was created from, when an issue is created from an existing comment. |
| `startedAt` | `any` | No | The time at which the issue was moved into started state. |
| `startedTriageAt` | `any` | No | The time at which the issue entered triage. |
| `state` | `table` | No | The workflow state (issue status) that the issue is currently in. |
| `subIssueSortOrder` | `number` | No | The order of the item in the sub-issue list. |
| `suggestionsGeneratedAt` | `any` | No | [Internal] The time at which the most recent suggestions for this issue were generated. |
| `summary` | `table` | No | [Internal] AI-generated activity summary for this issue. |
| `team` | `table` | No | The team that the issue belongs to. |
| `title` | `string` | Yes | The issue's title. |
| `trashed` | `boolean` | No | A flag that indicates whether the issue is in the trash bin. |
| `triagedAt` | `any` | No | The time at which the issue left triage. |
| `trusted` | `boolean` | No | [Internal] Whether this issue has been explicitly marked as trusted. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | Issue URL. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:IssueSearchResult():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IssueSearchResultEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IssueToReleaseEntity

```lua
local issue_to_release = client:IssueToRelease(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `issue` | `table` | No | The issue that is linked to the release. |
| `release` | `table` | No | The release that the issue is linked to. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:IssueToRelease():create({
  createdAt = --[[ any ]],
  id = --[[ string ]],
  updatedAt = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:IssueToRelease():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:IssueToRelease():load({ id = "issue_to_release_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:IssueToRelease():remove({ id = "issue_to_release_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IssueToReleaseEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LogoutResponseEntity

```lua
local logout_response = client:LogoutResponse(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Whether the operation was successful. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:LogoutResponse():create({
  success = --[[ boolean ]],
})
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:LogoutResponse():update({
  session_id = "session_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogoutResponseEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NotificationEntity

```lua
local notification = client:Notification(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `table` | No | The user that caused the notification. |
| `actorAvatarColor` | `string` | Yes | [Internal] Notification actor initials if avatar is not available. |
| `actorAvatarUrl` | `string` | No | [Internal] Notification avatar URL. |
| `actorInactive` | `boolean` | Yes | [Internal] Whether the notification's user actor is deactivated in the workspace. |
| `actorInitials` | `string` | No | [Internal] Notification actor initials if avatar is not available. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `botActor` | `table` | No | The bot that caused the notification. |
| `category` | `string` | Yes | The category of the notification. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `emailedAt` | `any` | No | The time at which an email reminder for this notification was sent to the user. |
| `externalUserActor` | `table` | No | The external user that caused the notification. |
| `groupingKey` | `string` | Yes | [Internal] Notifications with the same grouping key will be grouped together in the UI. |
| `groupingPriority` | `number` | Yes | [Internal] Priority of the notification with the same grouping key. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `inboxUrl` | `string` | Yes | [Internal] Inbox URL for the notification. |
| `initiativeUpdateHealth` | `string` | No | [Internal] Initiative update health for new updates. |
| `isLinearActor` | `boolean` | Yes | [Internal] If notification actor was Linear. |
| `issueStatusType` | `string` | No | [Internal] Issue's status type for issue notifications. |
| `projectUpdateHealth` | `string` | No | [Internal] Project update health for new updates. |
| `readAt` | `any` | No | The time at which the user marked the notification as read. |
| `snoozedUntilAt` | `any` | No | The time until which a notification is snoozed. |
| `subtitle` | `string` | Yes | [Internal] Notification subtitle. |
| `title` | `string` | Yes | [Internal] Notification title. |
| `type` | `string` | Yes | Notification type. |
| `unsnoozedAt` | `any` | No | The time at which a notification was unsnoozed. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | [Internal] URL to the target of the notification. |
| `user` | `table` | No | The recipient user of this notification. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Notification():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Notification():load({ id = "notification_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NotificationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NotificationSubscriptionEntity

```lua
local notification_subscription = client:NotificationSubscription(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes | Whether the subscription is active. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `contextViewType` | `string` | No | The type of contextual view (e.g., active issues, backlog) that further scopes a team notification subscription. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `customView` | `table` | No | The custom view that this notification subscription is scoped to. |
| `customer` | `table` | No | The customer that this notification subscription is scoped to. |
| `cycle` | `table` | No | The cycle that this notification subscription is scoped to. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiative` | `table` | No | The initiative that this notification subscription is scoped to. |
| `label` | `table` | No | The issue label that this notification subscription is scoped to. |
| `project` | `table` | No | The project that this notification subscription is scoped to. |
| `subscriber` | `table` | No | The user who will receive notifications from this subscription. |
| `team` | `table` | No | The team that this notification subscription is scoped to. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `table` | No | The user that this notification subscription is scoped to, for user-specific view subscriptions. |
| `userContextViewType` | `string` | No | The type of user-specific view that further scopes a user notification subscription. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:NotificationSubscription():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:NotificationSubscription():load({ id = "notification_subscription_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NotificationSubscriptionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OAuthApplicationEntity

```lua
local o_auth_application = client:OAuthApplication(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `clientId` | `string` | Yes | The client ID used during OAuth authorization flows. |
| `createdAt` | `any` | Yes | The time at which the OAuth application was created. |
| `description` | `string` | No | User-facing description of the OAuth application. |
| `developer` | `string` | Yes | Name of the developer or company that built the OAuth application. |
| `developerUrl` | `string` | Yes | URL of the developer's website, homepage, or documentation. |
| `distribution` | `string` | Yes | Distribution setting for the OAuth application. |
| `grantTypes` | `string` | Yes | OAuth grant types supported by this application. |
| `id` | `string` | Yes | The unique identifier of the OAuth application. |
| `imageUrl` | `string` | No | URL of the OAuth application's icon. |
| `name` | `string` | Yes | The human-readable name of the OAuth application. |
| `redirectUris` | `string` | Yes | Allowed redirect URIs for OAuth authorization flows. |
| `updatedAt` | `any` | Yes | The time at which the OAuth application was last updated. |
| `webhookEnabled` | `boolean` | Yes | Whether webhook delivery is enabled for this OAuth application. |
| `webhookResourceTypes` | `string` | Yes | Resource types the OAuth application's webhooks subscribe to. |
| `webhookUrl` | `string` | No | Webhook URL used for delivering webhook payloads. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:OAuthApplication():create({
  clientId = --[[ string ]],
  createdAt = --[[ any ]],
  developer = --[[ string ]],
  developerUrl = --[[ string ]],
  distribution = --[[ string ]],
  grantTypes = --[[ string ]],
  id = --[[ string ]],
  name = --[[ string ]],
  redirectUris = --[[ string ]],
  updatedAt = --[[ any ]],
  webhookEnabled = --[[ boolean ]],
  webhookResourceTypes = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:OAuthApplication():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:OAuthApplication():load({ id = "o_auth_application_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:OAuthApplication():update({
  id = "o_auth_application_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OAuthApplicationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrganizationEntity

```lua
local organization = client:Organization(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentAutomationEnabled` | `boolean` | Yes | [INTERNAL] Whether the workspace has enabled agent automation. |
| `aiAddonEnabled` | `boolean` | Yes | [INTERNAL] Whether the workspace has enabled the AI add-on (which at this point only includes triage suggestions). |
| `aiDiscussionSummariesEnabled` | `boolean` | Yes | Whether the workspace has enabled AI discussion summaries for issues. |
| `aiProviderConfiguration` | `any` | No | [INTERNAL] Configure per-modality AI host providers and model families. |
| `aiTelemetryEnabled` | `boolean` | Yes | [INTERNAL] Whether the workspace has opted in to AI telemetry. |
| `aiThreadSummariesEnabled` | `boolean` | Yes | Whether the workspace has enabled resolved thread AI summaries. |
| `allowedFileUploadContentTypes` | `string` | No | Allowed file upload content types |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `authSettings` | `any` | Yes | Authentication settings for the workspace, including allowed auth providers, bypass rules, and organization visibility during signup. |
| `codeIntelligenceEnabled` | `boolean` | Yes | [INTERNAL] Whether code intelligence is enabled for the workspace. |
| `codeIntelligenceRepository` | `string` | No | [INTERNAL] GitHub repository in owner/repo format for code intelligence. |
| `codingAgentEnabled` | `boolean` | Yes | [INTERNAL] Whether the workspace has enabled Coding Sessions. |
| `codingAgentSettings` | `any` | Yes | [Internal] Settings for Coding Sessions features. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `createdIssueCount` | `number` | Yes | Approximate total number of issues created in the workspace, including archived ones. |
| `customerCount` | `number` | Yes | The number of active (non-archived) customers tracked in the workspace. |
| `customersConfiguration` | `any` | Yes | Configuration settings for the Customers feature, including revenue currency and other customer tracking preferences. |
| `customersEnabled` | `boolean` | Yes | Whether the Customers feature is enabled and accessible for the workspace based on the current plan. |
| `defaultFeedSummarySchedule` | `string` | No | Default schedule for how often feed summaries are generated. |
| `defaultHomeView` | `string` | No | The default home view for members of the workspace who have not chosen their own default. |
| `defaultHomeViewTargetId` | `string` | No | The id of the specific initiative, project, view, dashboard, or page tab used as the default home view. |
| `deletionRequestedAt` | `any` | No | The time at which deletion of the workspace was requested. |
| `feedEnabled` | `boolean` | Yes | Whether the activity feed feature is enabled for the workspace. |
| `fiscalYearStartMonth` | `number` | Yes | The zero-indexed month at which the fiscal year starts (0 = January, 11 = December). |
| `generatedUpdatesEnabled` | `boolean` | Yes | [INTERNAL] Whether the workspace has enabled generated updates. |
| `gitBranchFormat` | `string` | No | The template format for Git branch names created from issues. |
| `gitLinkbackDescriptionsEnabled` | `boolean` | Yes | Whether issue descriptions should be included in the Git integration linkback messages posted to pull requests. |
| `gitLinkbackMessagesEnabled` | `boolean` | Yes | Whether the Git integration linkback messages should be posted as comments on pull requests in private repositories. |
| `gitPublicLinkbackMessagesEnabled` | `boolean` | Yes | Whether the Git integration linkback messages should be posted as comments on pull requests in public repositories. |
| `hipaaComplianceEnabled` | `boolean` | Yes | Whether HIPAA compliance is enabled for the workspace. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiativeUpdateReminderFrequencyInWeeks` | `number` | No | The frequency in weeks at which to prompt for initiative updates. |
| `initiativeUpdateRemindersDay` | `string` | Yes | The day of the week on which initiative update reminders are sent. |
| `initiativeUpdateRemindersHour` | `number` | Yes | The hour of the day (0-23) at which initiative update reminders are sent. |
| `linearAgentEnabled` | `boolean` | Yes | [Internal] Whether the workspace has enabled Linear Agent. |
| `linearAgentSettings` | `any` | Yes | [Internal] Settings for Linear Agent features. |
| `logoUrl` | `string` | No | The URL of the workspace's logo image. |
| `name` | `string` | Yes | The workspace's name. |
| `periodUploadVolume` | `number` | Yes | Rolling 30-day total file upload volume for the workspace, measured in megabytes. |
| `previousUrlKeys` | `string` | Yes | Previously used URL keys for the workspace. |
| `projectUpdateReminderFrequencyInWeeks` | `number` | No | The frequency in weeks at which to prompt for project updates. |
| `projectUpdateRemindersDay` | `string` | Yes | The day of the week on which project update reminders are sent. |
| `projectUpdateRemindersHour` | `number` | Yes | The hour of the day (0-23) at which project update reminders are sent. |
| `pullRequestIssueMode` | `string` | Yes | How Linear suggests and links issues for pull requests that have none linked: 'off', 'suggest', or 'autoOnMerge'. |
| `pullRequestTourEnabled` | `boolean` | Yes | Whether the workspace generates AI Pull Request guides for new pull requests. |
| `releaseChannel` | `string` | Yes | The feature release channel the workspace belongs to, which controls access to pre-release features. |
| `releasesEnabled` | `boolean` | Yes | Whether release management is enabled for the workspace. |
| `restrictAgentInvocationToMembers` | `boolean` | No | [Internal] Whether agent invocation is restricted to full workspace members. |
| `roadmapEnabled` | `boolean` | Yes | Whether the roadmap feature is enabled for the workspace. |
| `samlEnabled` | `boolean` | Yes | Whether SAML-based single sign-on authentication is enabled for the workspace. |
| `samlSettings` | `any` | No | [INTERNAL] SAML settings. |
| `scimEnabled` | `boolean` | Yes | Whether SCIM provisioning is enabled for the workspace, allowing automated user and team management from an identity provider. |
| `scimSettings` | `any` | No | [INTERNAL] SCIM settings. |
| `securitySettings` | `any` | Yes | Security settings for the workspace, including role-based restrictions for invitations, team creation, label management, and other sensitive operations. |
| `slackAutoCreateProjectChannel` | `boolean` | Yes | [Internal] Whether to automatically create a Slack channel when a new project is created. |
| `slackProjectChannelIntegration` | `table` | No | The Slack integration used for auto-creating project channels. |
| `slackProjectChannelPrefix` | `string` | Yes | The prefix used for auto-created Slack project channels. |
| `slackProjectChannelsEnabled` | `boolean` | Yes | [Internal] Whether the Slack project channels feature is enabled for the workspace. |
| `subscription` | `table` | No | The workspace's subscription to a paid plan. |
| `themeSettings` | `any` | No | [ALPHA] Theme settings for the workspace. |
| `trialEndsAt` | `any` | No | The time at which the current plan trial will end. |
| `trialStartsAt` | `any` | No | The time at which the current plan trial started. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `urlKey` | `string` | Yes | The workspace's unique URL key, used in URLs to identify the workspace. |
| `userCount` | `number` | Yes | The number of active (non-deactivated) users in the workspace. |
| `workingDays` | `number` | Yes | [Internal] The list of working days. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Organization():load({ id = "organization_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Organization():remove({ id = "organization_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Organization():update({
  id = "organization_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrganizationDomainEntity

```lua
local organization_domain = client:OrganizationDomain(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `authType` | `string` | Yes | The authentication type this domain is used for. |
| `claimed` | `boolean` | No | Whether the domain was claimed by the workspace through DNS TXT record verification. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `table` | No | The user who added the domain. |
| `disableOrganizationCreation` | `boolean` | No | Whether users with email addresses from this domain are prevented from creating new workspaces. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `identityProvider` | `table` | No | The identity provider the domain belongs to. |
| `name` | `string` | Yes | The domain name (e.g., 'example.com'). |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `verificationEmail` | `string` | No | The email address used to verify this domain. |
| `verified` | `boolean` | Yes | Whether the domain has been verified via email verification. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:OrganizationDomain():create({
  authType = --[[ string ]],
  createdAt = --[[ any ]],
  id = --[[ string ]],
  name = --[[ string ]],
  updatedAt = --[[ any ]],
  verified = --[[ boolean ]],
})
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:OrganizationDomain():remove({ id = "id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:OrganizationDomain():update({
  id = "id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationDomainEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrganizationInviteEntity

```lua
local organization_invite = client:OrganizationInvite(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acceptedAt` | `any` | No | The time at which the invite was accepted by the invitee. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `email` | `string` | Yes | The email address of the person being invited to the workspace. |
| `expiresAt` | `any` | No | The time at which the invite will expire and can no longer be accepted. |
| `external` | `boolean` | Yes | Whether the invite was sent to an email address outside the workspace's verified domains. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `invitee` | `table` | No | The user who has accepted the invite. |
| `inviter` | `table` | No | The user who created the invitation. |
| `metadata` | `any` | No | Extra metadata associated with the invite. |
| `organization` | `table` | No | The workspace that the invite is associated with. |
| `role` | `string` | Yes | The workspace role (admin, member, guest, or owner) that the invitee will receive upon accepting the invite. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:OrganizationInvite():create({
  createdAt = --[[ any ]],
  email = --[[ string ]],
  external = --[[ boolean ]],
  id = --[[ string ]],
  role = --[[ string ]],
  updatedAt = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:OrganizationInvite():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:OrganizationInvite():load({ id = "organization_invite_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:OrganizationInvite():remove({ id = "organization_invite_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:OrganizationInvite():update({
  id = "organization_invite_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationInviteEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrganizationMetaEntity

```lua
local organization_meta = client:OrganizationMeta(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowedAuthServices` | `string` | Yes | Allowed authentication providers, empty array means all are allowed. |
| `region` | `string` | Yes | The region the workspace is hosted in. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:OrganizationMeta():load({ url_key = "url_key" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationMetaEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PasskeyLoginStartResponseEntity

```lua
local passkey_login_start_response = client:PasskeyLoginStartResponse(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `options` | `any` | Yes | The passkey authentication options to pass to the WebAuthn API. |
| `success` | `boolean` | Yes | Whether the operation was successful. |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:PasskeyLoginStartResponse():update({
  auth_id = "auth_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PasskeyLoginStartResponseEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectEntity

```lua
local project = client:Project(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `autoArchivedAt` | `any` | No | The time at which the project was automatically archived by the auto-pruning process. |
| `canceledAt` | `any` | No | The time at which the project was moved into a canceled status. |
| `color` | `string` | Yes | The project's color as a HEX string. |
| `completedAt` | `any` | No | The time at which the project was moved into a completed status. |
| `completedIssueCountHistory` | `number` | Yes | The number of completed issues in the project at the end of each week since project creation. |
| `completedScopeHistory` | `number` | Yes | The number of completed estimation points at the end of each week since project creation. |
| `content` | `string` | No | The project's content in markdown format. |
| `contentState` | `string` | No | [Internal] The project's content as YJS state. |
| `convertedFromIssue` | `table` | No | The issue that was converted into this project. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `table` | No | The user who created the project. |
| `currentProgress` | `any` | Yes | [INTERNAL] The current progress of the project, broken down by issue status category. |
| `description` | `string` | Yes | The short description of the project. |
| `documentContent` | `table` | No | The content of the project description. |
| `favorite` | `table` | No | The user's favorite associated with this project. |
| `frequencyResolution` | `string` | Yes | The resolution of the reminder frequency. |
| `health` | `string` | No | The overall health of the project, derived from the most recent project update. |
| `healthUpdatedAt` | `any` | No | The time at which the project health was last updated, typically when a new project update is posted. |
| `icon` | `string` | No | The icon of the project. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `identifier` | `string` | No | [Internal] The human-readable identifier of the project. |
| `inProgressScopeHistory` | `number` | Yes | The number of in-progress estimation points at the end of each week since project creation. |
| `integrationsSettings` | `table` | No | Settings for all integrations associated with that project. |
| `issueCountHistory` | `number` | Yes | The total number of issues in the project at the end of each week since project creation. |
| `labelIds` | `string` | Yes | The IDs of the project labels associated with this project. |
| `lastAppliedTemplate` | `table` | No | The last template that was applied to this project. |
| `lastUpdate` | `table` | No | The most recent status update posted for this project. |
| `lead` | `table` | No | The user who leads the project. |
| `leadTeam` | `table` | No | [Internal] The team that leads the project. |
| `microsoftTeamsChannelId` | `string` | No | The ID of the Microsoft Teams channel connected to the project, if any. |
| `name` | `string` | Yes | The name of the project. |
| `previousIdentifiers` | `string` | Yes | [Internal] Identifiers (default and custom) that this project has previously held. |
| `priority` | `number` | Yes | The priority of the project. |
| `priorityLabel` | `string` | Yes | The priority of the project as a label. |
| `prioritySortOrder` | `number` | Yes | The sort order for the project within the workspace when ordered by priority. |
| `progress` | `number` | Yes | The overall progress of the project. |
| `progressHistory` | `any` | Yes | [INTERNAL] The progress history of the project, tracking issue completion over time. |
| `projectUpdateRemindersPausedUntilAt` | `any` | No | The time until which project update reminders are paused. |
| `resourceCount` | `number` | Yes | The number of resources associated with the project, including documents, external links, and attachments. |
| `scope` | `number` | Yes | The overall scope (total estimate points) of the project. |
| `scopeHistory` | `number` | Yes | The total scope (estimation points) of the project at the end of each week since project creation. |
| `slackChannelId` | `string` | No | The ID of the Slack channel connected to the project, if any. |
| `slugId` | `string` | Yes | The project's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `number` | Yes | The sort order for the project within the workspace. |
| `startDate` | `any` | No | The estimated start date of the project. |
| `startDateResolution` | `string` | No | The resolution of the project's start date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `startedAt` | `any` | No | The time at which the project was moved into a started status. |
| `status` | `table` | No | The current project status. |
| `targetDate` | `any` | No | The estimated completion date of the project. |
| `targetDateResolution` | `string` | No | The resolution of the project's estimated completion date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `trashed` | `boolean` | No | A flag that indicates whether the project is in the trash bin. |
| `updateReminderFrequency` | `number` | No | The frequency at which to prompt for updates. |
| `updateReminderFrequencyInWeeks` | `number` | No | The n-weekly frequency at which to prompt for updates. |
| `updateRemindersDay` | `string` | No | The day at which to prompt for updates. |
| `updateRemindersHour` | `number` | No | The hour at which to prompt for updates. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | Project URL. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Project():create({
  color = --[[ string ]],
  completedIssueCountHistory = --[[ number ]],
  completedScopeHistory = --[[ number ]],
  createdAt = --[[ any ]],
  currentProgress = --[[ any ]],
  description = --[[ string ]],
  frequencyResolution = --[[ string ]],
  id = --[[ string ]],
  inProgressScopeHistory = --[[ number ]],
  issueCountHistory = --[[ number ]],
  labelIds = --[[ string ]],
  name = --[[ string ]],
  previousIdentifiers = --[[ string ]],
  priority = --[[ number ]],
  priorityLabel = --[[ string ]],
  prioritySortOrder = --[[ number ]],
  progress = --[[ number ]],
  progressHistory = --[[ any ]],
  resourceCount = --[[ number ]],
  scope = --[[ number ]],
  scopeHistory = --[[ number ]],
  slugId = --[[ string ]],
  sortOrder = --[[ number ]],
  updatedAt = --[[ any ]],
  url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Project():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Project():load({ id = "project_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Project():remove({ id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Project():update({
  id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectLabelEntity

```lua
local project_label = client:ProjectLabel(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `color` | `string` | Yes | The label's color as a HEX string (e.g., '#EB5757'). |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `table` | No | The user who created the label. |
| `description` | `string` | No | The label's description. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `inheritedFrom` | `table` | No | [Internal] The original workspace or parent-team label that this label was inherited from. |
| `isGroup` | `boolean` | Yes | Whether the label is a group. |
| `lastAppliedAt` | `any` | No | The date when the label was last applied to an issue, project, or initiative. |
| `name` | `string` | Yes | The label's name. |
| `organization` | `table` | No | The workspace that the project label belongs to. |
| `parent` | `table` | No | The parent label group. |
| `retiredAt` | `any` | No | [Internal] When the label was retired. |
| `retiredBy` | `table` | No | The user who retired the label. |
| `team` | `table` | No | [Internal] The team that the label is scoped to. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ProjectLabel():create({
  color = --[[ string ]],
  createdAt = --[[ any ]],
  id = --[[ string ]],
  isGroup = --[[ boolean ]],
  name = --[[ string ]],
  updatedAt = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ProjectLabel():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ProjectLabel():load({ id = "project_label_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ProjectLabel():remove({ id = "project_label_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ProjectLabel():update({
  id = "project_label_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectLabelEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectMilestoneEntity

```lua
local project_milestone = client:ProjectMilestone(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `currentProgress` | `any` | Yes | [Internal] The current progress of the milestone, broken down by issue status category. |
| `description` | `string` | No | The project milestone's description in markdown format. |
| `descriptionState` | `string` | No | [Internal] The project milestone's description as YJS state. |
| `documentContent` | `table` | No | The rich-text content of the milestone description. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `name` | `string` | Yes | The name of the project milestone. |
| `progress` | `number` | Yes | The progress % of the project milestone. |
| `progressHistory` | `any` | Yes | [Internal] The progress history of the milestone, tracking issue completion over time. |
| `project` | `table` | No | The project that this milestone belongs to. |
| `sortOrder` | `number` | Yes | The order of the milestone in relation to other milestones within a project. |
| `status` | `string` | Yes | The status of the project milestone. |
| `targetDate` | `any` | No | The planned completion date of the milestone. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ProjectMilestone():create({
  createdAt = --[[ any ]],
  currentProgress = --[[ any ]],
  id = --[[ string ]],
  name = --[[ string ]],
  progress = --[[ number ]],
  progressHistory = --[[ any ]],
  sortOrder = --[[ number ]],
  status = --[[ string ]],
  updatedAt = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ProjectMilestone():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ProjectMilestone():load({ id = "project_milestone_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ProjectMilestone():remove({ id = "project_milestone_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ProjectMilestone():update({
  id = "project_milestone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectMilestoneEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectMilestoneMoveProjectTeamEntity

```lua
local project_milestone_move_project_team = client:ProjectMilestoneMoveProjectTeam(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `projectId` | `string` | Yes | The project id |
| `teamIds` | `string` | Yes | The team ids for the project |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ProjectMilestoneMoveProjectTeam():update({
  id = "id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectMilestoneMoveProjectTeamEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectRelationEntity

```lua
local project_relation = client:ProjectRelation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `anchorType` | `string` | Yes | The type of anchor on the source project end of the relation, indicating whether it is anchored to the project itself or a specific milestone. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `project` | `table` | No | The source project in the dependency relation. |
| `projectMilestone` | `table` | No | The specific milestone within the source project that the relation is anchored to. |
| `relatedAnchorType` | `string` | Yes | The type of anchor on the target project end of the relation, indicating whether it is anchored to the project itself or a specific milestone. |
| `relatedProject` | `table` | No | The target project in the dependency relation. |
| `relatedProjectMilestone` | `table` | No | The specific milestone within the target project that the relation is anchored to. |
| `type` | `string` | Yes | The type of dependency relationship from the project to the related project (e.g., blocks). |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `table` | No | The user who last created or modified the relation. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ProjectRelation():create({
  anchorType = --[[ string ]],
  createdAt = --[[ any ]],
  id = --[[ string ]],
  relatedAnchorType = --[[ string ]],
  type = --[[ string ]],
  updatedAt = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ProjectRelation():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ProjectRelation():load({ id = "project_relation_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ProjectRelation():remove({ id = "project_relation_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ProjectRelation():update({
  id = "project_relation_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectRelationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectSearchResultEntity

```lua
local project_search_result = client:ProjectSearchResult(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `autoArchivedAt` | `any` | No | The time at which the project was automatically archived by the auto-pruning process. |
| `canceledAt` | `any` | No | The time at which the project was moved into a canceled status. |
| `color` | `string` | Yes | The project's color as a HEX string. |
| `completedAt` | `any` | No | The time at which the project was moved into a completed status. |
| `completedIssueCountHistory` | `number` | Yes | The number of completed issues in the project at the end of each week since project creation. |
| `completedScopeHistory` | `number` | Yes | The number of completed estimation points at the end of each week since project creation. |
| `content` | `string` | No | The project's content in markdown format. |
| `contentState` | `string` | No | [Internal] The project's content as YJS state. |
| `convertedFromIssue` | `table` | No | The issue that was converted into this project. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `table` | No | The user who created the project. |
| `currentProgress` | `any` | Yes | [INTERNAL] The current progress of the project, broken down by issue status category. |
| `description` | `string` | Yes | The short description of the project. |
| `documentContent` | `table` | No | The content of the project description. |
| `favorite` | `table` | No | The user's favorite associated with this project. |
| `frequencyResolution` | `string` | Yes | The resolution of the reminder frequency. |
| `health` | `string` | No | The overall health of the project, derived from the most recent project update. |
| `healthUpdatedAt` | `any` | No | The time at which the project health was last updated, typically when a new project update is posted. |
| `icon` | `string` | No | The icon of the project. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `identifier` | `string` | No | [Internal] The human-readable identifier of the project. |
| `inProgressScopeHistory` | `number` | Yes | The number of in-progress estimation points at the end of each week since project creation. |
| `integrationsSettings` | `table` | No | Settings for all integrations associated with that project. |
| `issueCountHistory` | `number` | Yes | The total number of issues in the project at the end of each week since project creation. |
| `labelIds` | `string` | Yes | The IDs of the project labels associated with this project. |
| `lastAppliedTemplate` | `table` | No | The last template that was applied to this project. |
| `lastUpdate` | `table` | No | The most recent status update posted for this project. |
| `lead` | `table` | No | The user who leads the project. |
| `leadTeam` | `table` | No | [Internal] The team that leads the project. |
| `metadata` | `any` | Yes | Metadata related to search result. |
| `microsoftTeamsChannelId` | `string` | No | The ID of the Microsoft Teams channel connected to the project, if any. |
| `name` | `string` | Yes | The name of the project. |
| `previousIdentifiers` | `string` | Yes | [Internal] Identifiers (default and custom) that this project has previously held. |
| `priority` | `number` | Yes | The priority of the project. |
| `priorityLabel` | `string` | Yes | The priority of the project as a label. |
| `prioritySortOrder` | `number` | Yes | The sort order for the project within the workspace when ordered by priority. |
| `progress` | `number` | Yes | The overall progress of the project. |
| `progressHistory` | `any` | Yes | [INTERNAL] The progress history of the project, tracking issue completion over time. |
| `projectUpdateRemindersPausedUntilAt` | `any` | No | The time until which project update reminders are paused. |
| `resourceCount` | `number` | Yes | The number of resources associated with the project, including documents, external links, and attachments. |
| `scope` | `number` | Yes | The overall scope (total estimate points) of the project. |
| `scopeHistory` | `number` | Yes | The total scope (estimation points) of the project at the end of each week since project creation. |
| `slackChannelId` | `string` | No | The ID of the Slack channel connected to the project, if any. |
| `slugId` | `string` | Yes | The project's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `number` | Yes | The sort order for the project within the workspace. |
| `startDate` | `any` | No | The estimated start date of the project. |
| `startDateResolution` | `string` | No | The resolution of the project's start date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `startedAt` | `any` | No | The time at which the project was moved into a started status. |
| `status` | `table` | No | The current project status. |
| `targetDate` | `any` | No | The estimated completion date of the project. |
| `targetDateResolution` | `string` | No | The resolution of the project's estimated completion date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `trashed` | `boolean` | No | A flag that indicates whether the project is in the trash bin. |
| `updateReminderFrequency` | `number` | No | The frequency at which to prompt for updates. |
| `updateReminderFrequencyInWeeks` | `number` | No | The n-weekly frequency at which to prompt for updates. |
| `updateRemindersDay` | `string` | No | The day at which to prompt for updates. |
| `updateRemindersHour` | `number` | No | The hour at which to prompt for updates. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | Project URL. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ProjectSearchResult():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectSearchResultEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectStatusEntity

```lua
local project_status = client:ProjectStatus(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `color` | `string` | Yes | The color of the status as a HEX string, used for display in the UI. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `description` | `string` | No | Description of the status. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `indefinite` | `boolean` | Yes | Whether a project can remain in this status indefinitely. |
| `inheritedFrom` | `table` | No | [Internal] The original workspace or parent-team status that this status was inherited from. |
| `name` | `string` | Yes | The name of the status. |
| `position` | `number` | Yes | The position of the status within its type group in the workspace's project flow. |
| `team` | `table` | No | [Internal] The team that the status is scoped to. |
| `type` | `string` | Yes | The category type of the project status (e.g., backlog, planned, started, paused, completed, canceled). |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ProjectStatus():create({
  color = --[[ string ]],
  createdAt = --[[ any ]],
  id = --[[ string ]],
  indefinite = --[[ boolean ]],
  name = --[[ string ]],
  position = --[[ number ]],
  type = --[[ string ]],
  updatedAt = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ProjectStatus():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ProjectStatus():load({ id = "project_status_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ProjectStatus():update({
  id = "project_status_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectStatusEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectUpdateEntity

```lua
local project_update = client:ProjectUpdate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `body` | `string` | Yes | The update content in markdown format. |
| `bodyData` | `string` | Yes | [Internal] The content of the update as a Prosemirror document. |
| `commentCount` | `number` | Yes | Number of comments associated with the project update. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `diff` | `any` | No | The diff between the current update and the previous one. |
| `diffMarkdown` | `string` | No | The diff between the current update and the previous one, formatted as markdown. |
| `editedAt` | `any` | No | The time the update was edited. |
| `health` | `string` | Yes | The health of the project at the time this update was posted. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `infoSnapshot` | `any` | No | [Internal] A snapshot of project properties at the time the update was posted, including team, milestone, and issue statistics. |
| `isDiffHidden` | `boolean` | Yes | Whether the diff between this update and the previous one should be hidden in the UI. |
| `isStale` | `boolean` | Yes | Whether the project update is stale. |
| `project` | `table` | No | The project that this status update was posted to. |
| `reactionData` | `any` | Yes | Emoji reaction summary, grouped by emoji type. |
| `shortSummary` | `string` | No | A short AI-generated summary of the project update. |
| `slugId` | `string` | Yes | The update's unique URL slug. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | The URL to the project update. |
| `user` | `table` | No | The user who wrote the update. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ProjectUpdate():create({
  body = --[[ string ]],
  bodyData = --[[ string ]],
  commentCount = --[[ number ]],
  createdAt = --[[ any ]],
  health = --[[ string ]],
  id = --[[ string ]],
  isDiffHidden = --[[ boolean ]],
  isStale = --[[ boolean ]],
  reactionData = --[[ any ]],
  slugId = --[[ string ]],
  updatedAt = --[[ any ]],
  url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ProjectUpdate():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ProjectUpdate():load({ id = "project_update_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ProjectUpdate():remove({ id = "project_update_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ProjectUpdate():update({
  id = "project_update_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectUpdateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PushSubscriptionEntity

```lua
local push_subscription = client:PushSubscription(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PushSubscription():create({
  createdAt = --[[ any ]],
  id = --[[ string ]],
  updatedAt = --[[ any ]],
})
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:PushSubscription():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PushSubscriptionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReactionEntity

```lua
local reaction = client:Reaction(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `comment` | `table` | No | The comment that the reaction is associated with. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `emoji` | `string` | Yes | The name of the emoji used for this reaction. |
| `externalUser` | `table` | No | The external user that created the reaction through an integration. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiativeUpdate` | `table` | No | The initiative update that the reaction is associated with. |
| `issue` | `table` | No | The issue that the reaction is associated with. |
| `post` | `table` | No | The post that the reaction is associated with. |
| `projectUpdate` | `table` | No | The project update that the reaction is associated with. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `table` | No | The workspace user that created the reaction. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Reaction():create({
  createdAt = --[[ any ]],
  emoji = --[[ string ]],
  id = --[[ string ]],
  updatedAt = --[[ any ]],
})
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Reaction():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReactionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReleaseEntity

```lua
local release = client:Release(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `autoArchivedAt` | `any` | No | The time at which the release was automatically archived by the auto pruning process. |
| `canceledAt` | `any` | No | The time at which the release was canceled. |
| `commitSha` | `string` | No | The Git commit SHA associated with this release. |
| `completedAt` | `any` | No | The time at which the release was completed. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `table` | No | The user who created the release. |
| `currentProgress` | `any` | Yes | The current progress summary for the release, including counts of issues by workflow state type (e.g., completed, in progress, unstarted). |
| `description` | `string` | No | The description of the release in plain text or markdown. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `issueCount` | `number` | Yes | Number of issues associated with the release. |
| `name` | `string` | Yes | The name of the release. |
| `pipeline` | `table` | No | The release pipeline that this release belongs to. |
| `progressHistory` | `any` | Yes | The historical progress snapshots for the release, tracking how issue completion has evolved over time. |
| `releaseNote` | `table` | No | [Internal] The primary release note covering this release. |
| `slugId` | `string` | Yes | The release's unique URL slug, used to construct human-readable URLs for the release. |
| `stage` | `table` | No | The current stage of the release within its pipeline (e.g., Planned, In Progress, Completed, Canceled). |
| `startDate` | `any` | No | The estimated start date of the release. |
| `startedAt` | `any` | No | The time at which the release first entered a started stage. |
| `targetDate` | `any` | No | The estimated completion date of the release. |
| `trashed` | `boolean` | No | A flag that indicates whether the release is in the trash bin. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | The URL to the release page in the Linear app. |
| `version` | `string` | No | The version identifier for this release (e.g., 'v1.2.3' or a short commit hash). |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Release():create({
  createdAt = --[[ any ]],
  currentProgress = --[[ any ]],
  id = --[[ string ]],
  issueCount = --[[ number ]],
  name = --[[ string ]],
  progressHistory = --[[ any ]],
  slugId = --[[ string ]],
  updatedAt = --[[ any ]],
  url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Release():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Release():load({ id = "release_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Release():remove({ id = "release_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Release():update({
  id = "release_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReleaseEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReleaseNoteEntity

```lua
local release_note = client:ReleaseNote(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `documentContent` | `table` | No | Document content backing the release note body. |
| `firstRelease` | `table` | No | The earliest release covered by this note. |
| `generationStatus` | `string` | No | Generation status when these release notes are being auto-generated: `pending` while the LLM call is running, `completed` once it lands. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `lastRelease` | `table` | No | The most recent release covered by this note. |
| `pipeline` | `table` | No | The release pipeline that this note belongs to. |
| `releaseCount` | `number` | Yes | The number of releases covered by this note. |
| `slugId` | `string` | Yes | The release note's unique URL slug, used to construct human-readable URLs for the note. |
| `title` | `string` | No | User-supplied title for the release note. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | The URL to the release note page in the Linear app. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ReleaseNote():create({
  createdAt = --[[ any ]],
  id = --[[ string ]],
  releaseCount = --[[ number ]],
  slugId = --[[ string ]],
  updatedAt = --[[ any ]],
  url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ReleaseNote():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ReleaseNote():load({ id = "release_note_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ReleaseNote():remove({ id = "release_note_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ReleaseNote():update({
  id = "release_note_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReleaseNoteEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReleasePipelineEntity

```lua
local release_pipeline = client:ReleasePipeline(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approximateReleaseCount` | `number` | Yes | The approximate number of non-archived releases in this pipeline. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `autoGenerateReleaseNotesOnCompletion` | `boolean` | Yes | Whether to automatically generate a release note when a release is completed. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `includePathPatterns` | `string` | Yes | Glob patterns to filter commits by file path. |
| `isProduction` | `boolean` | Yes | Whether this pipeline targets a production environment. |
| `latestReleaseNote` | `table` | No | The release note in this pipeline whose covered range ends with the most recent release. |
| `name` | `string` | Yes | The name of the pipeline. |
| `releaseNoteTemplate` | `table` | No | The document template used to define the release notes format for this pipeline. |
| `rolloverIssuesOnCompletion` | `boolean` | Yes | Whether completing a scheduled release moves its open issues to the next release. |
| `slugId` | `string` | Yes | The pipeline's unique slug identifier, used in URLs and for lookup by human-readable identifier instead of UUID. |
| `trashed` | `boolean` | No | A flag that indicates whether the pipeline is in the trash bin. |
| `type` | `string` | Yes | The type of the pipeline, which determines how releases are created and managed. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | The URL to the release pipeline's releases list in the Linear app. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ReleasePipeline():create({
  approximateReleaseCount = --[[ number ]],
  autoGenerateReleaseNotesOnCompletion = --[[ boolean ]],
  createdAt = --[[ any ]],
  id = --[[ string ]],
  includePathPatterns = --[[ string ]],
  isProduction = --[[ boolean ]],
  name = --[[ string ]],
  rolloverIssuesOnCompletion = --[[ boolean ]],
  slugId = --[[ string ]],
  type = --[[ string ]],
  updatedAt = --[[ any ]],
  url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ReleasePipeline():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ReleasePipeline():load({ id = "release_pipeline_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ReleasePipeline():remove({ id = "release_pipeline_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ReleasePipeline():update({
  id = "release_pipeline_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReleasePipelineEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReleaseStageEntity

```lua
local release_stage = client:ReleaseStage(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `color` | `string` | Yes | The display color of the stage as a HEX string (e.g., '#0f783c'), used for visual representation in the UI. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `frozen` | `boolean` | Yes | Whether this stage is frozen. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `name` | `string` | Yes | The name of the stage. |
| `pipeline` | `table` | No | The release pipeline that this stage belongs to. |
| `position` | `number` | Yes | The position of the stage within its pipeline, used for ordering stages in the UI. |
| `type` | `string` | Yes | The lifecycle type of the stage (planned, started, completed, or canceled). |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ReleaseStage():create({
  color = --[[ string ]],
  createdAt = --[[ any ]],
  frozen = --[[ boolean ]],
  id = --[[ string ]],
  name = --[[ string ]],
  position = --[[ number ]],
  type = --[[ string ]],
  updatedAt = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ReleaseStage():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ReleaseStage():load({ id = "release_stage_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ReleaseStage():update({
  id = "release_stage_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReleaseStageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RoadmapEntity

```lua
local roadmap = client:Roadmap(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `color` | `string` | No | The roadmap's color. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `table` | No | The user who created the roadmap. |
| `description` | `string` | No | The description of the roadmap. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `name` | `string` | Yes | The name of the roadmap. |
| `organization` | `table` | No | The workspace of the roadmap. |
| `owner` | `table` | No | The user who owns the roadmap. |
| `slugId` | `string` | Yes | The roadmap's unique URL slug. |
| `sortOrder` | `number` | Yes | The sort order of the roadmap within the workspace. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | The canonical url for the roadmap. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Roadmap():create({
  createdAt = --[[ any ]],
  id = --[[ string ]],
  name = --[[ string ]],
  slugId = --[[ string ]],
  sortOrder = --[[ number ]],
  updatedAt = --[[ any ]],
  url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Roadmap():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Roadmap():load({ id = "roadmap_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Roadmap():remove({ id = "roadmap_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Roadmap():update({
  id = "roadmap_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RoadmapEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RoadmapToProjectEntity

```lua
local roadmap_to_project = client:RoadmapToProject(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `project` | `table` | No | The project that the roadmap is associated with. |
| `roadmap` | `table` | No | The roadmap that the project is associated with. |
| `sortOrder` | `string` | Yes | The sort order of the project within the roadmap. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:RoadmapToProject():create({
  createdAt = --[[ any ]],
  id = --[[ string ]],
  sortOrder = --[[ string ]],
  updatedAt = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:RoadmapToProject():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:RoadmapToProject():load({ id = "roadmap_to_project_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:RoadmapToProject():remove({ id = "roadmap_to_project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:RoadmapToProject():update({
  id = "roadmap_to_project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RoadmapToProjectEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SlaConfigurationEntity

```lua
local sla_configuration = client:SlaConfiguration(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conditions` | `any` | Yes | The workflow conditions that determine when this SLA rule applies. |
| `id` | `string` | Yes | The identifier of the SLA rule. |
| `name` | `string` | Yes | The name of the SLA rule. |
| `removesSla` | `boolean` | Yes | Whether the rule removes an SLA instead of setting one. |
| `sla` | `number` | No | The SLA value configured by the rule, expressed in milliseconds or business days depending on the day-count type. |
| `slaType` | `string` | No | The SLA type used when the rule sets an SLA. |
| `startMode` | `string` | No | When SLA timing begins. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SlaConfiguration():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SlaConfigurationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SsoUrlFromEmailResponseEntity

```lua
local sso_url_from_email_response = client:SsoUrlFromEmailResponse(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `samlSsoUrl` | `string` | Yes | SAML SSO sign-in URL. |
| `success` | `boolean` | Yes | Whether the operation was successful. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:SsoUrlFromEmailResponse():load({ email = "email", type = "type" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SsoUrlFromEmailResponseEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TeamEntity

```lua
local team = client:Team(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeCycle` | `table` | No | Team's currently active cycle. |
| `aiDiscussionSummariesEnabled` | `boolean` | Yes | Whether to enable AI discussion summaries for issues in this team. |
| `aiThreadSummariesEnabled` | `boolean` | Yes | Whether to enable resolved thread AI summaries. |
| `allMembersCanJoin` | `boolean` | No | Whether all members in the workspace can join the team. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `autoArchivePeriod` | `number` | Yes | Period after which automatically closed, completed, and duplicate issues are automatically archived in months. |
| `autoCloseChildIssues` | `boolean` | No | Whether child issues should automatically close when their parent issue is closed |
| `autoCloseParentIssues` | `boolean` | No | Whether parent issues should automatically close when all child issues are closed |
| `autoClosePeriod` | `number` | No | Period after which issues are automatically closed in months. |
| `autoCloseStateId` | `string` | No | The canceled workflow state which auto closed issues will be set to. |
| `color` | `string` | No | The team's color. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `currentProgress` | `any` | Yes | [Internal] The current progress of the team. |
| `cycleCalenderUrl` | `string` | Yes | Calendar feed URL (iCal) for cycles. |
| `cycleCooldownTime` | `number` | Yes | The cooldown time after each cycle in weeks. |
| `cycleDuration` | `number` | Yes | The duration of each cycle in weeks. |
| `cycleIssueAutoAssignCompleted` | `boolean` | Yes | Auto assign completed issues to current cycle. |
| `cycleIssueAutoAssignStarted` | `boolean` | Yes | Auto assign started issues to current cycle. |
| `cycleLockToActive` | `boolean` | Yes | Auto assign issues to current cycle if in active status. |
| `cycleStartDay` | `number` | Yes | The day of the week that a new cycle starts (0 = Sunday, 1 = Monday, ..., 6 = Saturday). |
| `cyclesEnabled` | `boolean` | Yes | Whether the team uses cycles for sprint-style issue management. |
| `defaultIssueEstimate` | `number` | Yes | What to use as a default estimate for unestimated issues. |
| `defaultIssueState` | `table` | No | The default workflow state into which issues are set when they are opened by team members. |
| `defaultProjectTemplate` | `table` | No | The default template to use for new projects created for the team. |
| `defaultTemplateForMembers` | `table` | No | The default template to use for new issues created by members of the team. |
| `defaultTemplateForNonMembers` | `table` | No | The default template to use for new issues created by non-members of the team. |
| `description` | `string` | No | The team's description. |
| `displayName` | `string` | Yes | The name of the team including its parent team name if it has one. |
| `groupIssueHistory` | `boolean` | Yes | Whether to group recent issue history entries. |
| `icon` | `string` | No | The icon of the team. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `inheritIssueEstimation` | `boolean` | Yes | Whether the team should inherit its estimation settings from its parent. |
| `inheritProjectStatuses` | `boolean` | Yes | [Internal] Whether the team should inherit its project statuses from its parent team, or from the workspace when it has no parent. |
| `inheritSlackAutoCreateProjectChannel` | `boolean` | Yes | [Internal] Whether the team should inherit its Slack auto-create project channel setting from its parent. |
| `inheritWorkflowStatuses` | `boolean` | Yes | Whether the team should inherit its workflow statuses from its parent. |
| `initiativesEnabled` | `boolean` | Yes | Whether team initiatives are enabled and shown in the team's sidebar. |
| `integrationsSettings` | `table` | No | Settings for all integrations associated with that team. |
| `issueCount` | `number` | Yes | The total number of issues in the team. |
| `issueEstimationAllowZero` | `boolean` | Yes | Whether to allow zeros in issues estimates. |
| `issueEstimationExtended` | `boolean` | Yes | Whether to add additional points to the estimate scale. |
| `issueEstimationType` | `string` | Yes | The issue estimation type to use. |
| `joinByDefault` | `boolean` | No | [Internal] Whether new users should join this team by default. |
| `key` | `string` | Yes | The team's unique key, used as a prefix in issue identifiers (e.g., 'ENG' in 'ENG-123') and in URLs. |
| `ledInitiativeCount` | `number` | Yes | The number of initiatives led by this team that would be deleted along with it. |
| `name` | `string` | Yes | The team's name. |
| `organization` | `table` | No | The workspace that the team belongs to. |
| `parent` | `table` | No | The team's parent team. |
| `progressHistory` | `any` | Yes | [Internal] The progress history of the team. |
| `requirePriorityToLeaveTriage` | `boolean` | Yes | Whether an issue needs to have a priority set before leaving triage. |
| `restrictedBy` | `table` | No | [Internal] For restricted teams, the enclosing private team that forms the visibility boundary. |
| `restrictedById` | `string` | No | [Internal] The identifier of the enclosing private team that forms the visibility boundary for restricted teams. |
| `retiredAt` | `any` | No | The time at which the team was retired. |
| `scimGroupName` | `string` | No | The SCIM group name for the team. |
| `scimManaged` | `boolean` | Yes | Whether the team is managed by a SCIM integration. |
| `securitySettings` | `any` | Yes | Security settings for the team, including role-based restrictions for issue sharing, label management, member management, template management, and agent skills. |
| `setIssueSortOrderOnStateChange` | `string` | Yes | Where to move issues when changing state. |
| `slackAutoCreateProjectChannel` | `boolean` | No | [Internal] Whether to automatically create a Slack channel when a new project is created in this team. |
| `timezone` | `string` | Yes | The timezone of the team. |
| `triageEnabled` | `boolean` | Yes | Whether triage mode is enabled for the team. |
| `triageIssueState` | `table` | No | The workflow state into which issues are set when they are opened by non-team members or integrations if triage is enabled. |
| `triageResponsibility` | `table` | No | Team's triage responsibility. |
| `upcomingCycleCount` | `number` | Yes | How many upcoming cycles to create. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `visibility` | `string` | Yes | The visibility of the team. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Team():create({
  aiDiscussionSummariesEnabled = --[[ boolean ]],
  aiThreadSummariesEnabled = --[[ boolean ]],
  autoArchivePeriod = --[[ number ]],
  createdAt = --[[ any ]],
  currentProgress = --[[ any ]],
  cycleCalenderUrl = --[[ string ]],
  cycleCooldownTime = --[[ number ]],
  cycleDuration = --[[ number ]],
  cycleIssueAutoAssignCompleted = --[[ boolean ]],
  cycleIssueAutoAssignStarted = --[[ boolean ]],
  cycleLockToActive = --[[ boolean ]],
  cycleStartDay = --[[ number ]],
  cyclesEnabled = --[[ boolean ]],
  defaultIssueEstimate = --[[ number ]],
  displayName = --[[ string ]],
  groupIssueHistory = --[[ boolean ]],
  id = --[[ string ]],
  inheritIssueEstimation = --[[ boolean ]],
  inheritProjectStatuses = --[[ boolean ]],
  inheritSlackAutoCreateProjectChannel = --[[ boolean ]],
  inheritWorkflowStatuses = --[[ boolean ]],
  initiativesEnabled = --[[ boolean ]],
  issueCount = --[[ number ]],
  issueEstimationAllowZero = --[[ boolean ]],
  issueEstimationExtended = --[[ boolean ]],
  issueEstimationType = --[[ string ]],
  key = --[[ string ]],
  ledInitiativeCount = --[[ number ]],
  name = --[[ string ]],
  progressHistory = --[[ any ]],
  requirePriorityToLeaveTriage = --[[ boolean ]],
  scimManaged = --[[ boolean ]],
  securitySettings = --[[ any ]],
  setIssueSortOrderOnStateChange = --[[ string ]],
  timezone = --[[ string ]],
  triageEnabled = --[[ boolean ]],
  upcomingCycleCount = --[[ number ]],
  updatedAt = --[[ any ]],
  visibility = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Team():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Team():load({ id = "team_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Team():remove({ id = "team_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Team():update({
  id = "team_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TeamMembershipEntity

```lua
local team_membership = client:TeamMembership(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `owner` | `boolean` | Yes | Whether the user is an owner of the team. |
| `sortOrder` | `number` | Yes | The sort order of this team in the user's personal team list. |
| `team` | `table` | No | The team that the membership is associated with. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `table` | No | The user that the membership is associated with. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TeamMembership():create({
  createdAt = --[[ any ]],
  id = --[[ string ]],
  owner = --[[ boolean ]],
  sortOrder = --[[ number ]],
  updatedAt = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TeamMembership():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TeamMembership():load({ id = "team_membership_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:TeamMembership():remove({ id = "team_membership_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TeamMembership():update({
  id = "team_membership_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamMembershipEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TemplateEntity

```lua
local template = client:Template(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `color` | `string` | No | The hex color of the template icon. |
| `content` | `string` | No | The template's content in markdown format: the body it pre-fills on the entity it creates. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `table` | No | The user who created the template. |
| `description` | `string` | No | A description of what the template is used for. |
| `hasFormFields` | `boolean` | Yes | [Internal] Whether the template has form fields |
| `icon` | `string` | No | The icon of the template, either a decorative icon type or an emoji string. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `inheritedFrom` | `table` | No | The parent team template this template was inherited from. |
| `lastAppliedAt` | `any` | No | The date when the template was last applied to create or update an entity. |
| `lastUpdatedBy` | `table` | No | The user who last updated the template. |
| `name` | `string` | Yes | The name of the template. |
| `organization` | `table` | No | The workspace that owns this template. |
| `pipeline` | `table` | No | The release pipeline this template is bound to. |
| `sortOrder` | `number` | Yes | The sort order of the template within the templates list. |
| `team` | `table` | No | The team that the template is associated with. |
| `templateData` | `any` | Yes | The template data as a JSON-encoded string containing the pre-filled attributes for the entity type (e.g., issue fields, project configuration, or document content). |
| `type` | `string` | Yes | The entity type this template is for, such as 'issue', 'project', or 'document'. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Template():create({
  createdAt = --[[ any ]],
  hasFormFields = --[[ boolean ]],
  id = --[[ string ]],
  name = --[[ string ]],
  sortOrder = --[[ number ]],
  templateData = --[[ any ]],
  type = --[[ string ]],
  updatedAt = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Template():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Template():load({ id = "template_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Template():remove({ id = "template_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Template():update({
  id = "template_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TemplateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TimeScheduleEntity

```lua
local time_schedule = client:TimeSchedule(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `externalId` | `string` | No | The identifier of the external schedule. |
| `externalUrl` | `string` | No | The URL to the external schedule. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `integration` | `table` | No | The identifier of the Linear integration populating the schedule. |
| `name` | `string` | Yes | The name of the schedule. |
| `organization` | `table` | No | The workspace of the schedule. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TimeSchedule():create({
  createdAt = --[[ any ]],
  id = --[[ string ]],
  name = --[[ string ]],
  updatedAt = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TimeSchedule():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TimeSchedule():load({ id = "time_schedule_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:TimeSchedule():remove({ id = "time_schedule_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TimeSchedule():update({
  id = "time_schedule_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TimeScheduleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TriageResponsibilityEntity

```lua
local triage_responsibility = client:TriageResponsibility(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes | The action to take when an issue is added to triage. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `currentUser` | `table` | No | The user currently responsible for triage. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `team` | `table` | No | The team to which the triage responsibility belongs to. |
| `timeSchedule` | `table` | No | The time schedule used for scheduling. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TriageResponsibility():create({
  action = --[[ string ]],
  createdAt = --[[ any ]],
  id = --[[ string ]],
  updatedAt = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TriageResponsibility():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TriageResponsibility():load({ id = "triage_responsibility_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:TriageResponsibility():remove({ id = "triage_responsibility_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TriageResponsibility():update({
  id = "triage_responsibility_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TriageResponsibilityEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UploadFileEntity

```lua
local upload_file = client:UploadFile(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assetUrl` | `string` | Yes | The permanent asset URL where the file will be accessible after upload. |
| `contentType` | `string` | Yes | The content type. |
| `filename` | `string` | Yes | The filename. |
| `metaData` | `any` | No | Optional metadata associated with the upload, such as the related issue or comment ID. |
| `size` | `number` | Yes | The size of the uploaded file. |
| `uploadUrl` | `string` | Yes | The pre-signed URL to which the file should be uploaded via a PUT request. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:UploadFile():create({
  content_type = --[[ string ]],
  filename = --[[ string ]],
  size = --[[ number ]],
  assetUrl = --[[ string ]],
  contentType = --[[ string ]],
  uploadUrl = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UploadFileEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UsageAlertEntity

```lua
local usage_alert = client:UsageAlert(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `metadata` | `any` | Yes | Type-specific snapshot captured when the alert was triggered, keyed by the alert type — for example the credit balance and threshold for a lowBalance alert. |
| `resolvedAt` | `any` | No | The time when the usage alert was resolved or archived. |
| `type` | `string` | Yes | The kind of usage alert that was triggered. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:UsageAlert():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:UsageAlert():load({ id = "usage_alert_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UsageAlertEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UserEntity

```lua
local user = client:User(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes | Whether the user account is active or disabled (suspended). |
| `admin` | `boolean` | Yes | Whether the user is a workspace administrator. |
| `app` | `boolean` | Yes | Whether the user is an app. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `avatarBackgroundColor` | `string` | Yes | The background color of the avatar for users without set avatar. |
| `avatarUrl` | `string` | No | An URL to the user's avatar image. |
| `calendarHash` | `string` | No | [DEPRECATED] Hash for the user to be used in calendar URLs. |
| `canAccessAnyPublicTeam` | `boolean` | Yes | Whether this user can access any public team in the workspace. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `createdIssueCount` | `number` | Yes | Number of issues created. |
| `description` | `string` | No | A short description of the user, such as their title or a brief bio. |
| `disableReason` | `string` | No | The reason why the user account is disabled. |
| `displayName` | `string` | Yes | The user's display (nick) name. |
| `email` | `string` | Yes | The user's email address. |
| `gitHubUserId` | `string` | No | The user's GitHub user ID. |
| `guest` | `boolean` | Yes | Whether the user is a guest in the workspace and limited to accessing a subset of teams. |
| `hasGitHubCodeAccess` | `boolean` | Yes | [Internal] Whether this user can access GitHub source code through Linear. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `identityProvider` | `table` | No | [INTERNAL] Identity provider the user is managed by. |
| `initials` | `string` | Yes | The initials of the user. |
| `isAssignable` | `boolean` | Yes | Whether the user can be assigned to issues. |
| `isMe` | `boolean` | Yes | Whether the user is the currently authenticated user. |
| `isMentionable` | `boolean` | Yes | Whether the user is mentionable. |
| `lastSeen` | `any` | No | The last time the user was seen online. |
| `name` | `string` | Yes | The user's full name. |
| `organization` | `table` | No | The workspace that the user belongs to. |
| `owner` | `boolean` | Yes | Whether the user is a workspace owner, which is the highest permission level. |
| `statusEmoji` | `string` | No | The emoji representing the user's current status. |
| `statusLabel` | `string` | No | The text label of the user's current status. |
| `statusUntilAt` | `any` | No | The date and time at which the user's current status should be automatically cleared. |
| `supportsAgentSessions` | `boolean` | Yes | Whether this agent user supports agent sessions. |
| `timezone` | `string` | No | The local timezone of the user. |
| `title` | `string` | No | The user's job title. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | User's profile URL. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:User():create({
  active = --[[ boolean ]],
  admin = --[[ boolean ]],
  app = --[[ boolean ]],
  avatarBackgroundColor = --[[ string ]],
  canAccessAnyPublicTeam = --[[ boolean ]],
  createdAt = --[[ any ]],
  createdIssueCount = --[[ number ]],
  displayName = --[[ string ]],
  email = --[[ string ]],
  guest = --[[ boolean ]],
  hasGitHubCodeAccess = --[[ boolean ]],
  id = --[[ string ]],
  initials = --[[ string ]],
  isAssignable = --[[ boolean ]],
  isMe = --[[ boolean ]],
  isMentionable = --[[ boolean ]],
  name = --[[ string ]],
  owner = --[[ boolean ]],
  supportsAgentSessions = --[[ boolean ]],
  updatedAt = --[[ any ]],
  url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:User():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:User():load({ id = "user_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:User():update({
  id = "user_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UserSettingEntity

```lua
local user_setting = client:UserSetting(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `autoAssignToSelf` | `boolean` | Yes | Whether to auto-assign newly created issues to the current user by default. |
| `calendarHash` | `string` | No | A unique hash for the user, used to construct secure calendar subscription URLs. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `feedLastSeenTime` | `any` | No | The user's last seen time for the pulse feed. |
| `feedSummarySchedule` | `string` | No | The user's preferred schedule for receiving feed summary digests. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `pullRequestMergeStrategyPreference` | `string` | No | [Internal] The user's preferred merge method for pull requests. |
| `showFullUserNames` | `boolean` | Yes | Whether to show full user names instead of display names. |
| `subscribedToChangelog` | `boolean` | Yes | Whether this user is subscribed to receive changelog emails about Linear product updates. |
| `subscribedToDPA` | `boolean` | Yes | Whether this user is subscribed to receive Data Processing Agreement (DPA) related emails. |
| `subscribedToInviteAccepted` | `boolean` | Yes | Whether this user is subscribed to receive email notifications when their workspace invitations are accepted. |
| `subscribedToPrivacyLegalUpdates` | `boolean` | Yes | Whether this user is subscribed to receive emails about privacy policy and legal updates. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `table` | No | The user that these settings belong to. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:UserSetting():create({
  category = --[[ any ]],
  channel = --[[ any ]],
  subscribe = --[[ boolean ]],
  autoAssignToSelf = --[[ boolean ]],
  createdAt = --[[ any ]],
  id = --[[ string ]],
  showFullUserNames = --[[ boolean ]],
  subscribedToChangelog = --[[ boolean ]],
  subscribedToDPA = --[[ boolean ]],
  subscribedToInviteAccepted = --[[ boolean ]],
  subscribedToPrivacyLegalUpdates = --[[ boolean ]],
  updatedAt = --[[ any ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:UserSetting():load({ id = "user_setting_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:UserSetting():update({
  id = "user_setting_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserSettingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ViewPreferenceEntity

```lua
local view_preference = client:ViewPreference(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `type` | `string` | Yes | The type of view preferences: "organization" for workspace-wide defaults or "user" for personal overrides. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `viewType` | `string` | Yes | The type of view these preferences apply to, such as board, cycle, project, customView, myIssues, etc. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ViewPreference():create({
  createdAt = --[[ any ]],
  id = --[[ string ]],
  type = --[[ string ]],
  updatedAt = --[[ any ]],
  viewType = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ViewPreference():load({ view_type = "view_type" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ViewPreference():remove({ id = "id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ViewPreference():update({
  id = "id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ViewPreferenceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WebhookEntity

```lua
local webhook = client:Webhook(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allPublicTeams` | `boolean` | Yes | Whether the webhook receives events from all public (non-private) teams in the organization, including teams created after the webhook was set up. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `table` | No | The user who created the webhook. |
| `enabled` | `boolean` | Yes | Whether the webhook is enabled. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `label` | `string` | No | A human-readable label for the webhook, used for identification in the UI. |
| `resourceTypes` | `string` | Yes | The resource types this webhook is subscribed to (e.g., 'Issue', 'Comment', 'Project', 'Cycle'). |
| `secret` | `string` | No | A secret token used to sign webhook payloads with HMAC-SHA256, allowing the recipient to verify that the payload originated from Linear and was not tampered with. |
| `team` | `table` | No | The single team that the webhook is scoped to. |
| `teamIds` | `string` | No | [INTERNAL] An array of team IDs that the webhook is subscribed to. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | No | The destination URL where webhook payloads will be sent via HTTP POST. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Webhook():create({
  allPublicTeams = --[[ boolean ]],
  createdAt = --[[ any ]],
  enabled = --[[ boolean ]],
  id = --[[ string ]],
  resourceTypes = --[[ string ]],
  updatedAt = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Webhook():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Webhook():load({ id = "webhook_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Webhook():remove({ id = "webhook_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Webhook():update({
  id = "webhook_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WebhookFailureEventEntity

```lua
local webhook_failure_event = client:WebhookFailureEvent(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `executionId` | `string` | Yes | A stable identifier for the webhook delivery attempt. |
| `httpStatus` | `number` | No | The HTTP status code returned by the webhook recipient. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `responseOrError` | `string` | No | The HTTP response body returned by the recipient, or the error message if the request failed before receiving a response. |
| `url` | `string` | Yes | The URL that the webhook was trying to push to. |
| `webhook` | `table` | No | The webhook that this failure event is associated with. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:WebhookFailureEvent():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhookFailureEventEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkflowStateEntity

```lua
local workflow_state = client:WorkflowState(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `color` | `string` | Yes | The state's UI color as a HEX string. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `description` | `string` | No | Description of the state. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `inheritedFrom` | `table` | No | The parent team's workflow state that this state was inherited from. |
| `name` | `string` | Yes | The state's human-readable name (e.g., 'In Progress', 'Done', 'Backlog'). |
| `position` | `number` | Yes | The position of the state in the team's workflow. |
| `team` | `table` | No | The team that this workflow state belongs to. |
| `type` | `string` | Yes | The type of the state. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:WorkflowState():create({
  color = --[[ string ]],
  createdAt = --[[ any ]],
  id = --[[ string ]],
  name = --[[ string ]],
  position = --[[ number ]],
  type = --[[ string ]],
  updatedAt = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:WorkflowState():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:WorkflowState():load({ id = "workflow_state_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:WorkflowState():update({
  id = "workflow_state_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkflowStateEntity` instance with the same client and
options.

#### `get_name() -> string`

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

```lua
local client = sdk.new({
  feature = {
    debug = { active = true },
    idempotency = { active = true },
    metrics = { active = true },
    paging = { active = true },
    ratelimit = { active = true },
    retry = { active = true },
    test = { active = true },
    timeout = { active = true },
  },
})
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

