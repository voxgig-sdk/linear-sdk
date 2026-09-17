# Linear Ruby SDK Reference

Complete API reference for the Linear Ruby SDK.


## LinearSDK

### Constructor

```ruby
require_relative 'Linear_sdk'

client = LinearSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `LinearSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = LinearSDK.test
```


### Instance Methods

#### `AccessKeyRelease(data = nil)`

Create a new `AccessKeyRelease` entity instance. Pass `nil` for no initial data.

#### `AccessKeyReleasePipeline(data = nil)`

Create a new `AccessKeyReleasePipeline` entity instance. Pass `nil` for no initial data.

#### `AgentActivity(data = nil)`

Create a new `AgentActivity` entity instance. Pass `nil` for no initial data.

#### `AgentSession(data = nil)`

Create a new `AgentSession` entity instance. Pass `nil` for no initial data.

#### `AgentSkill(data = nil)`

Create a new `AgentSkill` entity instance. Pass `nil` for no initial data.

#### `Application(data = nil)`

Create a new `Application` entity instance. Pass `nil` for no initial data.

#### `Attachment(data = nil)`

Create a new `Attachment` entity instance. Pass `nil` for no initial data.

#### `AuditEntry(data = nil)`

Create a new `AuditEntry` entity instance. Pass `nil` for no initial data.

#### `AuditEntryType(data = nil)`

Create a new `AuditEntryType` entity instance. Pass `nil` for no initial data.

#### `AuthResolverResponse(data = nil)`

Create a new `AuthResolverResponse` entity instance. Pass `nil` for no initial data.

#### `AuthenticationSessionResponse(data = nil)`

Create a new `AuthenticationSessionResponse` entity instance. Pass `nil` for no initial data.

#### `Comment(data = nil)`

Create a new `Comment` entity instance. Pass `nil` for no initial data.

#### `CreateOrJoinOrganizationResponse(data = nil)`

Create a new `CreateOrJoinOrganizationResponse` entity instance. Pass `nil` for no initial data.

#### `CustomView(data = nil)`

Create a new `CustomView` entity instance. Pass `nil` for no initial data.

#### `Customer(data = nil)`

Create a new `Customer` entity instance. Pass `nil` for no initial data.

#### `CustomerNeed(data = nil)`

Create a new `CustomerNeed` entity instance. Pass `nil` for no initial data.

#### `CustomerStatus(data = nil)`

Create a new `CustomerStatus` entity instance. Pass `nil` for no initial data.

#### `CustomerTier(data = nil)`

Create a new `CustomerTier` entity instance. Pass `nil` for no initial data.

#### `Cycle(data = nil)`

Create a new `Cycle` entity instance. Pass `nil` for no initial data.

#### `Diff(data = nil)`

Create a new `Diff` entity instance. Pass `nil` for no initial data.

#### `Document(data = nil)`

Create a new `Document` entity instance. Pass `nil` for no initial data.

#### `DocumentSearchResult(data = nil)`

Create a new `DocumentSearchResult` entity instance. Pass `nil` for no initial data.

#### `EmailIntakeAddress(data = nil)`

Create a new `EmailIntakeAddress` entity instance. Pass `nil` for no initial data.

#### `EmailUserAccountAuthChallengeResponse(data = nil)`

Create a new `EmailUserAccountAuthChallengeResponse` entity instance. Pass `nil` for no initial data.

#### `Emoji(data = nil)`

Create a new `Emoji` entity instance. Pass `nil` for no initial data.

#### `EntityExternalLink(data = nil)`

Create a new `EntityExternalLink` entity instance. Pass `nil` for no initial data.

#### `ExternalUser(data = nil)`

Create a new `ExternalUser` entity instance. Pass `nil` for no initial data.

#### `Favorite(data = nil)`

Create a new `Favorite` entity instance. Pass `nil` for no initial data.

#### `GitAutomationState(data = nil)`

Create a new `GitAutomationState` entity instance. Pass `nil` for no initial data.

#### `GitAutomationTargetBranch(data = nil)`

Create a new `GitAutomationTargetBranch` entity instance. Pass `nil` for no initial data.

#### `GitHubIntegrationConnectDetail(data = nil)`

Create a new `GitHubIntegrationConnectDetail` entity instance. Pass `nil` for no initial data.

#### `Initiative(data = nil)`

Create a new `Initiative` entity instance. Pass `nil` for no initial data.

#### `InitiativeLabel(data = nil)`

Create a new `InitiativeLabel` entity instance. Pass `nil` for no initial data.

#### `InitiativeLeadTeamChangeImpact(data = nil)`

Create a new `InitiativeLeadTeamChangeImpact` entity instance. Pass `nil` for no initial data.

#### `InitiativeRelation(data = nil)`

Create a new `InitiativeRelation` entity instance. Pass `nil` for no initial data.

#### `InitiativeToProject(data = nil)`

Create a new `InitiativeToProject` entity instance. Pass `nil` for no initial data.

#### `InitiativeUpdate(data = nil)`

Create a new `InitiativeUpdate` entity instance. Pass `nil` for no initial data.

#### `Integration(data = nil)`

Create a new `Integration` entity instance. Pass `nil` for no initial data.

#### `IntegrationTemplate(data = nil)`

Create a new `IntegrationTemplate` entity instance. Pass `nil` for no initial data.

#### `IntegrationsSetting(data = nil)`

Create a new `IntegrationsSetting` entity instance. Pass `nil` for no initial data.

#### `Issue(data = nil)`

Create a new `Issue` entity instance. Pass `nil` for no initial data.

#### `IssueImport(data = nil)`

Create a new `IssueImport` entity instance. Pass `nil` for no initial data.

#### `IssueLabel(data = nil)`

Create a new `IssueLabel` entity instance. Pass `nil` for no initial data.

#### `IssuePriorityValue(data = nil)`

Create a new `IssuePriorityValue` entity instance. Pass `nil` for no initial data.

#### `IssueRelation(data = nil)`

Create a new `IssueRelation` entity instance. Pass `nil` for no initial data.

#### `IssueSearchResult(data = nil)`

Create a new `IssueSearchResult` entity instance. Pass `nil` for no initial data.

#### `IssueToRelease(data = nil)`

Create a new `IssueToRelease` entity instance. Pass `nil` for no initial data.

#### `LogoutResponse(data = nil)`

Create a new `LogoutResponse` entity instance. Pass `nil` for no initial data.

#### `Notification(data = nil)`

Create a new `Notification` entity instance. Pass `nil` for no initial data.

#### `NotificationSubscription(data = nil)`

Create a new `NotificationSubscription` entity instance. Pass `nil` for no initial data.

#### `OAuthApplication(data = nil)`

Create a new `OAuthApplication` entity instance. Pass `nil` for no initial data.

#### `Organization(data = nil)`

Create a new `Organization` entity instance. Pass `nil` for no initial data.

#### `OrganizationDomain(data = nil)`

Create a new `OrganizationDomain` entity instance. Pass `nil` for no initial data.

#### `OrganizationInvite(data = nil)`

Create a new `OrganizationInvite` entity instance. Pass `nil` for no initial data.

#### `OrganizationMeta(data = nil)`

Create a new `OrganizationMeta` entity instance. Pass `nil` for no initial data.

#### `PasskeyLoginStartResponse(data = nil)`

Create a new `PasskeyLoginStartResponse` entity instance. Pass `nil` for no initial data.

#### `Project(data = nil)`

Create a new `Project` entity instance. Pass `nil` for no initial data.

#### `ProjectLabel(data = nil)`

Create a new `ProjectLabel` entity instance. Pass `nil` for no initial data.

#### `ProjectMilestone(data = nil)`

Create a new `ProjectMilestone` entity instance. Pass `nil` for no initial data.

#### `ProjectMilestoneMoveProjectTeam(data = nil)`

Create a new `ProjectMilestoneMoveProjectTeam` entity instance. Pass `nil` for no initial data.

#### `ProjectRelation(data = nil)`

Create a new `ProjectRelation` entity instance. Pass `nil` for no initial data.

#### `ProjectSearchResult(data = nil)`

Create a new `ProjectSearchResult` entity instance. Pass `nil` for no initial data.

#### `ProjectStatus(data = nil)`

Create a new `ProjectStatus` entity instance. Pass `nil` for no initial data.

#### `ProjectUpdate(data = nil)`

Create a new `ProjectUpdate` entity instance. Pass `nil` for no initial data.

#### `PushSubscription(data = nil)`

Create a new `PushSubscription` entity instance. Pass `nil` for no initial data.

#### `Reaction(data = nil)`

Create a new `Reaction` entity instance. Pass `nil` for no initial data.

#### `Release(data = nil)`

Create a new `Release` entity instance. Pass `nil` for no initial data.

#### `ReleaseNote(data = nil)`

Create a new `ReleaseNote` entity instance. Pass `nil` for no initial data.

#### `ReleasePipeline(data = nil)`

Create a new `ReleasePipeline` entity instance. Pass `nil` for no initial data.

#### `ReleaseStage(data = nil)`

Create a new `ReleaseStage` entity instance. Pass `nil` for no initial data.

#### `Roadmap(data = nil)`

Create a new `Roadmap` entity instance. Pass `nil` for no initial data.

#### `RoadmapToProject(data = nil)`

Create a new `RoadmapToProject` entity instance. Pass `nil` for no initial data.

#### `SlaConfiguration(data = nil)`

Create a new `SlaConfiguration` entity instance. Pass `nil` for no initial data.

#### `SsoUrlFromEmailResponse(data = nil)`

Create a new `SsoUrlFromEmailResponse` entity instance. Pass `nil` for no initial data.

#### `Team(data = nil)`

Create a new `Team` entity instance. Pass `nil` for no initial data.

#### `TeamMembership(data = nil)`

Create a new `TeamMembership` entity instance. Pass `nil` for no initial data.

#### `Template(data = nil)`

Create a new `Template` entity instance. Pass `nil` for no initial data.

#### `TimeSchedule(data = nil)`

Create a new `TimeSchedule` entity instance. Pass `nil` for no initial data.

#### `TriageResponsibility(data = nil)`

Create a new `TriageResponsibility` entity instance. Pass `nil` for no initial data.

#### `UploadFile(data = nil)`

Create a new `UploadFile` entity instance. Pass `nil` for no initial data.

#### `UsageAlert(data = nil)`

Create a new `UsageAlert` entity instance. Pass `nil` for no initial data.

#### `User(data = nil)`

Create a new `User` entity instance. Pass `nil` for no initial data.

#### `UserSetting(data = nil)`

Create a new `UserSetting` entity instance. Pass `nil` for no initial data.

#### `ViewPreference(data = nil)`

Create a new `ViewPreference` entity instance. Pass `nil` for no initial data.

#### `Webhook(data = nil)`

Create a new `Webhook` entity instance. Pass `nil` for no initial data.

#### `WebhookFailureEvent(data = nil)`

Create a new `WebhookFailureEvent` entity instance. Pass `nil` for no initial data.

#### `WorkflowState(data = nil)`

Create a new `WorkflowState` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## AccessKeyReleaseEntity

```ruby
access_key_release = client.AccessKeyRelease
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the release was archived. |
| `commitSha` | `String` | No | The Git commit SHA associated with the release. |
| `completedAt` | `Object` | No | The time at which the release was completed. |
| `createdAt` | `Object` | Yes | The time at which the release was created. |
| `id` | `String` | Yes | The unique identifier of the release. |
| `name` | `String` | Yes | The name of the release. |
| `url` | `String` | Yes | The URL to the release page in the Linear app. |
| `version` | `String` | No | The version identifier for this release. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AccessKeyRelease.create({
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "name" => "example_name", # String
  "url" => "example_url", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.AccessKeyRelease.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.AccessKeyRelease.load({ "id" => "access_key_release_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AccessKeyReleaseEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AccessKeyReleasePipelineEntity

```ruby
access_key_release_pipeline = client.AccessKeyReleasePipeline
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | Yes | The unique identifier of the release pipeline. |
| `includePathPatterns` | `String` | Yes | Glob patterns used to filter commits by changed file path. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.AccessKeyReleasePipeline.load({ "id" => "access_key_release_pipeline_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AccessKeyReleasePipelineEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AgentActivityEntity

```ruby
agent_activity = client.AgentActivity
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentSession` | `Hash` | No | The agent session this activity belongs to. |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `contextualMetadata` | `Object` | No | [Internal] Metadata about user-provided contextual information for this agent activity. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `ephemeral` | `Boolean` | Yes | Whether the activity is ephemeral, and should disappear after the next agent activity. |
| `executionSkippedReason` | `String` | No | [Internal] The reason this activity was persisted without being sent to the agent runtime. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `queued` | `Boolean` | Yes | [Internal] Whether this activity is queued for later processing. |
| `sentAt` | `Object` | No | [Internal] The time at which the prompt actually entered the conversation. |
| `signal` | `String` | No | An optional modifier that provides additional instructions on how the activity should be interpreted. |
| `signalMetadata` | `Object` | No | Metadata about this agent activity's signal. |
| `sourceComment` | `Hash` | No | The source comment this activity is linked to. |
| `sourceMetadata` | `Object` | No | Metadata about the external source that created this agent activity. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `Hash` | No | The user who created this agent activity. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AgentActivity.create({
  "createdAt" => "example_createdAt", # Object
  "ephemeral" => true, # Boolean
  "id" => "example_id", # String
  "queued" => true, # Boolean
  "updatedAt" => "example_updatedAt", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.AgentActivity.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.AgentActivity.load({ "id" => "agent_activity_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.AgentActivity.update({
  "id" => "agent_activity_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AgentActivityEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AgentSessionEntity

```ruby
agent_session = client.AgentSession
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `appUser` | `Hash` | No | The agent user that is associated with this agent session. |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `codingHarnessModelLabel` | `String` | No | [Internal] Compact display label for the coding harness model used by this session, derived from the latest associated sandbox. |
| `comment` | `Hash` | No | The comment this agent session is associated with. |
| `context` | `Object` | Yes | The entity contexts this session is related to, such as issues or projects referenced in direct chat sessions. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `creator` | `Hash` | No | The human user responsible for the agent session. |
| `dismissedAt` | `Object` | No | The time a user dismissed this agent session. |
| `dismissedBy` | `Hash` | No | The user who dismissed the agent session. |
| `endedAt` | `Object` | No | The time the agent session completed. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `issue` | `Hash` | No | The issue this agent session is associated with. |
| `modelSelection` | `Object` | No | [Internal] How Adaptive selected the model route used by this coding session. |
| `plan` | `Object` | No | A dynamically updated plan describing the agent's execution strategy, including steps to be taken and their current status. |
| `pullRequest` | `Hash` | No | The pull request this agent session is anchored to, when started from a pull request. |
| `slugId` | `String` | Yes | The agent session's unique URL slug. |
| `sourceComment` | `Hash` | No | The comment that this agent session was spawned from, if from a different thread. |
| `sourceMetadata` | `Object` | No | Metadata about the external source that created this agent session. |
| `startedAt` | `Object` | No | The time the agent session transitioned to active status and began work. |
| `status` | `String` | Yes | The current status of the agent session, such as pending, active, awaiting input, complete, error, or stale. |
| `summary` | `String` | No | The session title, generated automatically or set by the owning OAuth application. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `String` | No | The URL to the agent session page in the Linear app. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AgentSession.create({
  "context" => "example_context", # Object
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "slugId" => "example_slugId", # String
  "status" => "example_status", # String
  "updatedAt" => "example_updatedAt", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.AgentSession.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.AgentSession.load({ "id" => "agent_session_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.AgentSession.update({
  "id" => "agent_session_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AgentSessionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AgentSkillEntity

```ruby
agent_skill = client.AgentSkill
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `body` | `String` | Yes | The skill instructions in markdown format. |
| `color` | `String` | No | The skill's color. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `creator` | `Hash` | No | The user who created the skill. |
| `description` | `String` | No | The skill's description. |
| `icon` | `String` | No | The icon of the skill. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `inheritedFrom` | `Hash` | No | The parent-team skill this skill was inherited from. |
| `lastUpdatedBy` | `Hash` | No | The user who last updated the skill. |
| `lastUsedAt` | `Object` | No | The time the skill was last used by anyone in the workspace. |
| `owner` | `Hash` | No | The user who owns the skill. |
| `recentUsageCount` | `Float` | Yes | The number of times the skill was used by anyone in the workspace in the last 30 days. |
| `shared` | `Boolean` | Yes | Whether the skill is shared with everyone in the workspace. |
| `slugId` | `String` | Yes | The skill's unique URL slug. |
| `teamId` | `String` | No | The identifier of the team this skill is shared with. |
| `title` | `String` | Yes | The skill's title. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AgentSkill.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.AgentSkill.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.AgentSkill.load({ "id" => "agent_skill_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.AgentSkill.remove({ "id" => "agent_skill_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.AgentSkill.update({
  "id" => "agent_skill_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AgentSkillEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApplicationEntity

```ruby
application = client.Application
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `clientId` | `String` | Yes | OAuth application's client ID. |
| `description` | `String` | No | Information about the application. |
| `developer` | `String` | Yes | Name of the developer. |
| `developerUrl` | `String` | Yes | URL of the developer's website, homepage, or documentation. |
| `id` | `String` | Yes | OAuth application's ID. |
| `imageUrl` | `String` | No | Image of the application. |
| `name` | `String` | Yes | Application name. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Application.load({ "client_id" => "client_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApplicationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AttachmentEntity

```ruby
attachment = client.Attachment
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `bodyData` | `String` | No | The body data of the attachment, if any. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `creator` | `Hash` | No | The creator of the attachment. |
| `externalUserCreator` | `Hash` | No | The non-Linear user who created the attachment. |
| `groupBySource` | `Boolean` | Yes | Whether attachments from the same source application should be visually grouped together in the Linear issue detail view. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `issue` | `Hash` | No | The issue this attachment belongs to. |
| `metadata` | `Object` | Yes | Integration-specific metadata for this attachment. |
| `originalIssue` | `Hash` | No | The issue this attachment was originally created on. |
| `source` | `Object` | No | Information about the source which created the attachment. |
| `sourceType` | `String` | No | The source type of the attachment, derived from the source metadata. |
| `subtitle` | `String` | No | Content for the subtitle line in the Linear attachment widget. |
| `title` | `String` | Yes | Content for the title line in the Linear attachment widget. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `String` | Yes | The URL of the external resource this attachment links to. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Attachment.create({
  "createdAt" => "example_createdAt", # Object
  "groupBySource" => true, # Boolean
  "id" => "example_id", # String
  "metadata" => "example_metadata", # Object
  "title" => "example_title", # String
  "updatedAt" => "example_updatedAt", # Object
  "url" => "example_url", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Attachment.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Attachment.load({ "id" => "attachment_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Attachment.remove({ "id" => "attachment_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Attachment.update({
  "id" => "attachment_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AttachmentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AuditEntryEntity

```ruby
audit_entry = client.AuditEntry
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `Hash` | No | The user that caused the audit entry to be created. |
| `actorId` | `String` | No | The ID of the user that caused the audit entry to be created. |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `countryCode` | `String` | No | The ISO 3166-1 alpha-2 country code derived from the request IP address. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `ip` | `String` | No | The IP address of the actor at the time the audited action was performed. |
| `metadata` | `Object` | No | Additional metadata related to the audit entry. |
| `organization` | `Hash` | No | The workspace the audit log belongs to. |
| `requestInformation` | `Object` | No | Additional information related to the request which performed the action. |
| `type` | `String` | Yes | The type of audited action (e.g., user authentication, permission change, data export, setting modification). |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.AuditEntry.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AuditEntryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AuditEntryTypeEntity

```ruby
audit_entry_type = client.AuditEntryType
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `String` | Yes | Description of the audit entry type. |
| `type` | `String` | Yes | The audit entry type. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.AuditEntryType.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AuditEntryTypeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AuthResolverResponseEntity

```ruby
auth_resolver_response = client.AuthResolverResponse
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowDomainAccess` | `Boolean` | No | Should the signup flow allow access for the domain. |
| `email` | `String` | Yes | Email for the authenticated account. |
| `id` | `String` | Yes | User account ID. |
| `lastUsedOrganizationId` | `String` | No | ID of the organization last accessed by the user. |
| `service` | `String` | No | The authentication service used for the current session (e.g., google, email, saml). |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AuthResolverResponse.create({
  "email" => "example_email", # String
  "id" => "example_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.AuthResolverResponse.load({ "id" => "auth_resolver_response_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.AuthResolverResponse.update({
  "id" => "auth_resolver_response_id",
  "auth_id" => "auth_id",
  "response" => "response",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AuthResolverResponseEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AuthenticationSessionResponseEntity

```ruby
authentication_session_response = client.AuthenticationSessionResponse
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `browserType` | `String` | No | Used web browser. |
| `client` | `String` | No | Client used for the session |
| `countryCodes` | `String` | Yes | Country codes of all seen locations. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `detailedName` | `String` | Yes | Detailed name of the session including version information, derived from the user agent. |
| `id` | `String` | Yes |  |
| `ip` | `String` | No | IP address. |
| `isCurrentSession` | `Boolean` | Yes | Whether this session is the one used to make the current API request. |
| `lastActiveAt` | `Object` | No | When was the session last seen |
| `location` | `String` | No | Human readable location |
| `locationCity` | `String` | No | Location city name. |
| `locationCountry` | `String` | No | Location country name. |
| `locationCountryCode` | `String` | No | Location country code. |
| `locationRegionCode` | `String` | No | Location region code. |
| `name` | `String` | Yes | Name of the session, derived from the client and operating system |
| `operatingSystem` | `String` | No | Operating system used for the session |
| `service` | `String` | No | Service used for logging in. |
| `type` | `String` | Yes | Type of application used to authenticate. |
| `updatedAt` | `Object` | Yes | Date when the session was last updated. |
| `userAgent` | `String` | No | Session's user-agent. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.AuthenticationSessionResponse.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AuthenticationSessionResponseEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CommentEntity

```ruby
comment = client.Comment
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentSession` | `Hash` | No | Agent session associated with this comment. |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `body` | `String` | Yes | The comment content in markdown format. |
| `bodyData` | `String` | Yes | [Internal] The comment content as a ProseMirror document. |
| `botActor` | `Hash` | No | The bot that created the comment. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `documentContent` | `Hash` | No | The document content that the comment is associated with. |
| `documentContentId` | `String` | No | The ID of the document content that the comment is associated with. |
| `editedAt` | `Object` | No | The time the comment was last edited by its author. |
| `externalThread` | `Hash` | No | The external thread that the comment is synced with. |
| `externalUser` | `Hash` | No | The external user who wrote the comment, when the comment was created through an integration such as Slack or Intercom. |
| `hideInLinear` | `Boolean` | Yes | [Internal] Whether the comment should be hidden from Linear clients. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `initiative` | `Hash` | No | The initiative that the comment is associated with. |
| `initiativeId` | `String` | No | The ID of the initiative that the comment is associated with. |
| `initiativeUpdate` | `Hash` | No | The initiative update that the comment is associated with. |
| `initiativeUpdateId` | `String` | No | The ID of the initiative update that the comment is associated with. |
| `isArtificialAgentSessionRoot` | `Boolean` | Yes | [Internal] Whether the comment is an artificial placeholder for an agent session thread created without a comment mention. |
| `issue` | `Hash` | No | The issue that the comment is associated with. |
| `issueId` | `String` | No | The ID of the issue that the comment is associated with. |
| `onBehalfOf` | `Hash` | No | [Internal] The user on whose behalf the comment was created, e.g. |
| `parent` | `Hash` | No | The parent comment under which the current comment is nested. |
| `parentId` | `String` | No | The ID of the parent comment under which the current comment is nested. |
| `post` | `Hash` | No | The post that the comment is associated with. |
| `project` | `Hash` | No | The project that the comment is associated with. |
| `projectId` | `String` | No | The ID of the project that the comment is associated with. |
| `projectUpdate` | `Hash` | No | The project update that the comment is associated with. |
| `projectUpdateId` | `String` | No | The ID of the project update that the comment is associated with. |
| `quotedText` | `String` | No | The text that this comment references, used for inline comments on documents or issue descriptions. |
| `reactionData` | `Object` | Yes | Emoji reaction summary for this comment, grouped by emoji type. |
| `resolvedAt` | `Object` | No | The time when the comment thread was resolved. |
| `resolvingComment` | `Hash` | No | The child comment that resolved this thread. |
| `resolvingCommentId` | `String` | No | The ID of the child comment that resolved this thread. |
| `resolvingUser` | `Hash` | No | The user that resolved the comment thread. |
| `threadSummary` | `Object` | No | [Internal] An AI-generated summary of the comment thread. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `String` | Yes | Comment's URL. |
| `user` | `Hash` | No | The user who wrote the comment. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Comment.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Comment.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Comment.load({ "id" => "comment_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Comment.remove({ "id" => "comment_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Comment.update({
  "id" => "comment_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CommentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CreateOrJoinOrganizationResponseEntity

```ruby
create_or_join_organization_response = client.CreateOrJoinOrganizationResponse
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `organization` | `Hash` | No | The workspace that was created or joined. |
| `user` | `Hash` | No | The user who created or joined the workspace. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.CreateOrJoinOrganizationResponse.create({
})
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.CreateOrJoinOrganizationResponse.update({
  "organization_id" => "organization_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CreateOrJoinOrganizationResponseEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CustomViewEntity

```ruby
custom_view = client.CustomView
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `color` | `String` | No | The hex color code of the custom view icon. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `creator` | `Hash` | No | The user who originally created the custom view. |
| `description` | `String` | No | The description of the custom view. |
| `facet` | `Hash` | No | [INTERNAL] The facet that links this custom view to its parent entity (project, initiative, team page, etc.). |
| `feedItemFilterData` | `Object` | No | The filter applied to feed items in the custom view. |
| `filterData` | `Object` | Yes | The structured filter applied to issues in the custom view. |
| `icon` | `String` | No | The icon of the custom view. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `initiativeFilterData` | `Object` | No | The filter applied to initiatives in the custom view. |
| `modelName` | `String` | Yes | The entity type this view displays. |
| `name` | `String` | Yes | The name of the custom view, displayed in the sidebar and navigation. |
| `organization` | `Hash` | No | The workspace of the custom view. |
| `organizationViewPreferences` | `Hash` | No | The workspace-level default view preferences for this custom view, if any have been set. |
| `owner` | `Hash` | No | The user who owns the custom view. |
| `projectFilterData` | `Object` | No | The filter applied to projects in the custom view. |
| `shared` | `Boolean` | Yes | Whether the custom view is shared with everyone in the organization. |
| `slugId` | `String` | Yes | The custom view's unique URL slug, used to construct human-readable URLs. |
| `team` | `Hash` | No | The team that the custom view is scoped to. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |
| `updatedBy` | `Hash` | No | The user who last updated the custom view. |
| `userViewPreferences` | `Hash` | No | The current user's personal view preferences for this custom view, if they have set any. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.CustomView.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.CustomView.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.CustomView.load({ "id" => "custom_view_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.CustomView.remove({ "id" => "custom_view_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.CustomView.update({
  "id" => "custom_view_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CustomViewEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CustomerEntity

```ruby
customer = client.Customer
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approximateNeedCount` | `Float` | Yes | The approximate number of distinct requests associated with this customer, deduplicated per issue or project. |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `domains` | `String` | Yes | The email domains associated with this customer (e.g., 'acme.com'). |
| `externalIds` | `String` | Yes | Identifiers for this customer in external systems (e.g., CRM IDs from Intercom, Salesforce, or HubSpot). |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `integration` | `Hash` | No | The integration that manages this customer's data (e.g., Intercom, Salesforce). |
| `logoUrl` | `String` | No | URL of the customer's logo image. |
| `mainSourceId` | `String` | No | The primary external source ID when a customer has data from multiple external systems. |
| `name` | `String` | Yes | The display name of the customer organization. |
| `owner` | `Hash` | No | The workspace member assigned as the owner of this customer. |
| `revenue` | `Integer` | No | The annual revenue generated by this customer. |
| `size` | `Float` | No | The number of employees or seats at the customer organization. |
| `slackChannelId` | `String` | No | The ID of the Slack channel linked to this customer for communication. |
| `slugId` | `String` | Yes | A unique, human-readable URL slug for the customer. |
| `status` | `Hash` | No | The current lifecycle status of the customer. |
| `tier` | `Hash` | No | The tier or segment assigned to this customer for prioritization (e.g., Enterprise, Pro, Free). |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `String` | Yes | The URL of the customer's page in the Linear application. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Customer.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Customer.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Customer.load({ "id" => "customer_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Customer.remove({ "id" => "customer_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Customer.update({
  "id" => "customer_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CustomerEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CustomerNeedEntity

```ruby
customer_need = client.CustomerNeed
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `attachment` | `Hash` | No | The issue attachment linked to this need. |
| `body` | `String` | No | The body content of the need in Markdown format. |
| `bodyData` | `String` | No | [Internal] The body content of the need as a Prosemirror document JSON string. |
| `comment` | `Hash` | No | An optional comment providing additional context for this need. |
| `content` | `String` | No | The effective Markdown content shown for this customer need. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `creator` | `Hash` | No | The user who manually created this customer need. |
| `customer` | `Hash` | No | The customer organization this need belongs to. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `issue` | `Hash` | No | The issue this need is linked to. |
| `originalIssue` | `Hash` | No | The issue this customer need was originally created on, before being moved to a different issue or project. |
| `priority` | `Float` | Yes | Whether the customer need is important or not. |
| `project` | `Hash` | No | The project this need is linked to. |
| `projectAttachment` | `Hash` | No | The project attachment linked to this need. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `String` | No | The URL of the source attachment linked to this need, if any. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.CustomerNeed.create({
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "priority" => 1, # Float
  "updatedAt" => "example_updatedAt", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.CustomerNeed.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.CustomerNeed.load({ "id" => "customer_need_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.CustomerNeed.remove({ "id" => "customer_need_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.CustomerNeed.update({
  "id" => "customer_need_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CustomerNeedEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CustomerStatusEntity

```ruby
customer_status = client.CustomerStatus
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `color` | `String` | Yes | The color of the status indicator in the UI, as a HEX string (e.g., '#ff0000'). |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `description` | `String` | No | An optional description explaining what this status represents in the customer lifecycle. |
| `displayName` | `String` | Yes | The user-facing display name of the status shown in the UI. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `name` | `String` | Yes | The internal name of the status. |
| `position` | `Float` | Yes | The sort position of the status in the workspace's customer lifecycle flow. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.CustomerStatus.create({
  "color" => "example_color", # String
  "createdAt" => "example_createdAt", # Object
  "displayName" => "example_displayName", # String
  "id" => "example_id", # String
  "name" => "example_name", # String
  "position" => 1, # Float
  "updatedAt" => "example_updatedAt", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.CustomerStatus.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.CustomerStatus.load({ "id" => "customer_status_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.CustomerStatus.remove({ "id" => "customer_status_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.CustomerStatus.update({
  "id" => "customer_status_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CustomerStatusEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CustomerTierEntity

```ruby
customer_tier = client.CustomerTier
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `color` | `String` | Yes | The color of the tier indicator in the UI, as a HEX string (e.g., '#ff0000'). |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `description` | `String` | No | An optional description explaining what this tier represents and its intended use for customer segmentation. |
| `displayName` | `String` | Yes | The user-facing display name of the tier shown in the UI. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `name` | `String` | Yes | The internal name of the tier. |
| `position` | `Float` | Yes | The sort position of the tier in the workspace's customer tier ordering. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.CustomerTier.create({
  "color" => "example_color", # String
  "createdAt" => "example_createdAt", # Object
  "displayName" => "example_displayName", # String
  "id" => "example_id", # String
  "name" => "example_name", # String
  "position" => 1, # Float
  "updatedAt" => "example_updatedAt", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.CustomerTier.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.CustomerTier.load({ "id" => "customer_tier_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.CustomerTier.remove({ "id" => "customer_tier_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.CustomerTier.update({
  "id" => "customer_tier_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CustomerTierEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CycleEntity

```ruby
cycle = client.Cycle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `autoArchivedAt` | `Object` | No | The time at which the cycle was automatically archived by the auto-pruning process. |
| `completedAt` | `Object` | No | The completion time of the cycle. |
| `completedIssueCountHistory` | `Float` | Yes | The number of completed issues in the cycle after each day. |
| `completedScopeHistory` | `Float` | Yes | The number of completed estimation points after each day. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `currentProgress` | `Object` | Yes | [Internal] The current progress snapshot of the cycle, broken down by issue status categories. |
| `description` | `String` | No | The description of the cycle. |
| `endsAt` | `Object` | Yes | The end date and time of the cycle. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `inProgressScopeHistory` | `Float` | Yes | The number of in-progress estimation points after each day. |
| `inheritedFrom` | `Hash` | No | The parent cycle this cycle was inherited from. |
| `isActive` | `Boolean` | Yes | Whether the cycle is currently active. |
| `isFuture` | `Boolean` | Yes | Whether the cycle has not yet started. |
| `isNext` | `Boolean` | Yes | Whether this cycle is the next upcoming (not yet started) cycle for the team. |
| `isPast` | `Boolean` | Yes | Whether the cycle's end date has passed. |
| `isPrevious` | `Boolean` | Yes | Whether this cycle is the most recently completed cycle for the team. |
| `issueCountHistory` | `Float` | Yes | The total number of issues in the cycle after each day. |
| `name` | `String` | No | The custom name of the cycle. |
| `number` | `Float` | Yes | The auto-incrementing number of the cycle, unique within its team. |
| `progress` | `Float` | Yes | The overall progress of the cycle as a number between 0 and 1. |
| `progressHistory` | `Object` | Yes | [Internal] The detailed progress history of the cycle, including per-status breakdowns over time. |
| `scopeHistory` | `Float` | Yes | The total number of estimation points (scope) in the cycle after each day. |
| `startsAt` | `Object` | Yes | The start date and time of the cycle. |
| `team` | `Hash` | No | The team that the cycle belongs to. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Cycle.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Cycle.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Cycle.load({ "id" => "cycle_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Cycle.update({
  "id" => "cycle_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CycleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DiffEntity

```ruby
diff = client.Diff
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additions` | `Float` | Yes | [Internal] The total number of added lines across the diff. |
| `agentSession` | `Hash` | No | The agent session the diff belongs to. |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `contentHash` | `String` | Yes | [Internal] The opaque content hash identifying the diff's content in code.storage. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `creator` | `Hash` | No | The user responsible for the diff. |
| `deletions` | `Float` | Yes | [Internal] The total number of deleted lines across the diff. |
| `fileCount` | `Float` | Yes | [Internal] The number of changed files in the diff. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `organization` | `Hash` | No | The workspace the diff belongs to. |
| `pullRequest` | `Hash` | No | The pull request the diff was promoted to when opened for review. |
| `slugId` | `String` | Yes | [Internal] The diff's unique URL slug. |
| `truncated` | `Boolean` | Yes | [Internal] Whether oversized files were omitted when the diff was computed. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Diff.load({ "id" => "diff_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DiffEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DocumentEntity

```ruby
document = client.Document
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `color` | `String` | No | The hex color of the document icon. |
| `content` | `String` | No | The document's content in markdown format. |
| `contentState` | `String` | No | [Internal] The document's content as a base64-encoded Yjs state update. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `creator` | `Hash` | No | The user who created the document. |
| `cycle` | `Hash` | No | [Internal] The cycle that the document is associated with. |
| `documentContentId` | `String` | No | The ID of the document content associated with the document. |
| `hiddenAt` | `Object` | No | The time at which the document was hidden from the default view. |
| `icon` | `String` | No | The icon of the document, either a decorative icon type or an emoji string. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `initiative` | `Hash` | No | The initiative that the document is associated with. |
| `issue` | `Hash` | No | The issue that the document is associated with. |
| `lastAppliedTemplate` | `Hash` | No | The last template that was applied to this document. |
| `owner` | `Hash` | No | The owner of the document. |
| `project` | `Hash` | No | The project that the document is associated with. |
| `release` | `Hash` | No | The release that the document is associated with. |
| `slugId` | `String` | Yes | The document's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `Float` | Yes | The sort order of the document in its parent entity's resources list. |
| `summary` | `String` | No | [Internal] A one-sentence AI-generated summary of the document content. |
| `team` | `Hash` | No | [Internal] The team that the document is associated with. |
| `title` | `String` | Yes | The title of the document. |
| `trashed` | `Boolean` | No | A flag that indicates whether the document is in the trash bin. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |
| `updatedBy` | `Hash` | No | The user who last updated the document. |
| `url` | `String` | Yes | The canonical url for the document. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Document.create({
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "slugId" => "example_slugId", # String
  "sortOrder" => 1, # Float
  "title" => "example_title", # String
  "updatedAt" => "example_updatedAt", # Object
  "url" => "example_url", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Document.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Document.load({ "id" => "document_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Document.remove({ "id" => "document_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Document.update({
  "id" => "document_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DocumentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DocumentSearchResultEntity

```ruby
document_search_result = client.DocumentSearchResult
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `color` | `String` | No | The hex color of the document icon. |
| `content` | `String` | No | The document's content in markdown format. |
| `contentState` | `String` | No | [Internal] The document's content as a base64-encoded Yjs state update. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `creator` | `Hash` | No | The user who created the document. |
| `cycle` | `Hash` | No | [Internal] The cycle that the document is associated with. |
| `documentContentId` | `String` | No | The ID of the document content associated with the document. |
| `hiddenAt` | `Object` | No | The time at which the document was hidden from the default view. |
| `icon` | `String` | No | The icon of the document, either a decorative icon type or an emoji string. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `initiative` | `Hash` | No | The initiative that the document is associated with. |
| `issue` | `Hash` | No | The issue that the document is associated with. |
| `lastAppliedTemplate` | `Hash` | No | The last template that was applied to this document. |
| `metadata` | `Object` | Yes | Metadata related to search result. |
| `owner` | `Hash` | No | The owner of the document. |
| `project` | `Hash` | No | The project that the document is associated with. |
| `release` | `Hash` | No | The release that the document is associated with. |
| `slugId` | `String` | Yes | The document's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `Float` | Yes | The sort order of the document in its parent entity's resources list. |
| `summary` | `String` | No | [Internal] A one-sentence AI-generated summary of the document content. |
| `team` | `Hash` | No | [Internal] The team that the document is associated with. |
| `title` | `String` | Yes | The title of the document. |
| `trashed` | `Boolean` | No | A flag that indicates whether the document is in the trash bin. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |
| `updatedBy` | `Hash` | No | The user who last updated the document. |
| `url` | `String` | Yes | The canonical url for the document. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.DocumentSearchResult.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DocumentSearchResultEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EmailIntakeAddressEntity

```ruby
email_intake_address = client.EmailIntakeAddress
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `String` | Yes | The unique local part (before the @) of the intake email address, used to route incoming emails to the correct intake handler. |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `creator` | `Hash` | No | The user who created the email intake address. |
| `customerRequestsEnabled` | `Boolean` | Yes | Whether issues created from emails sent to this address are automatically converted into customer requests, linking the sender as a customer contact. |
| `enabled` | `Boolean` | Yes | Whether the email address is enabled. |
| `forwardingEmailAddress` | `String` | No | The email address used to forward emails to the intake address. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `issueCanceledAutoReply` | `String` | No | The auto-reply message for issue canceled. |
| `issueCanceledAutoReplyEnabled` | `Boolean` | Yes | Whether the auto-reply for issue canceled is enabled. |
| `issueCompletedAutoReply` | `String` | No | The auto-reply message for issue completed. |
| `issueCompletedAutoReplyEnabled` | `Boolean` | Yes | Whether the auto-reply for issue completed is enabled. |
| `issueCreatedAutoReply` | `String` | No | The auto-reply message for issue created. |
| `issueCreatedAutoReplyEnabled` | `Boolean` | Yes | Whether the auto-reply for issue created is enabled. |
| `lastUsedAt` | `Object` | No | The last time an inbound email was successfully ingested for this address. |
| `organization` | `Hash` | No | The workspace that the email address is associated with. |
| `reopenOnReply` | `Boolean` | Yes | Whether to reopen completed or canceled issues when a substantive email reply is received. |
| `repliesEnabled` | `Boolean` | Yes | Whether email replies are enabled. |
| `senderName` | `String` | No | The name to be used for outgoing emails. |
| `sesDomainIdentity` | `Hash` | No | The SES domain identity that the email address is associated with. |
| `team` | `Hash` | No | The team that the email address is associated with. |
| `template` | `Hash` | No | The template that the email address is associated with. |
| `type` | `String` | Yes | The type of the email address. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |
| `useUserNamesInReplies` | `Boolean` | Yes | Whether the commenter's name is included in the email replies. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.EmailIntakeAddress.create({
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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.EmailIntakeAddress.load({ "id" => "email_intake_address_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.EmailIntakeAddress.remove({ "id" => "email_intake_address_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.EmailIntakeAddress.update({
  "id" => "email_intake_address_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EmailIntakeAddressEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EmailUserAccountAuthChallengeResponseEntity

```ruby
email_user_account_auth_challenge_response = client.EmailUserAccountAuthChallengeResponse
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authType` | `String` | Yes | Supported challenge for this user account. |
| `success` | `Boolean` | Yes | Whether the operation was successful. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.EmailUserAccountAuthChallengeResponse.create({
  "authType" => "example_authType", # String
  "success" => true, # Boolean
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EmailUserAccountAuthChallengeResponseEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EmojiEntity

```ruby
emoji = client.Emoji
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `creator` | `Hash` | No | The user who created the emoji. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `name` | `String` | Yes | The unique name of the custom emoji within the workspace. |
| `organization` | `Hash` | No | The workspace that the emoji belongs to. |
| `source` | `String` | Yes | The source of the emoji, indicating how it was created (e.g., uploaded by a user or imported). |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `String` | Yes | The URL of the uploaded image for this custom emoji. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Emoji.create({
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "name" => "example_name", # String
  "source" => "example_source", # String
  "updatedAt" => "example_updatedAt", # Object
  "url" => "example_url", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Emoji.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Emoji.load({ "id" => "emoji_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Emoji.remove({ "id" => "emoji_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EmojiEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EntityExternalLinkEntity

```ruby
entity_external_link = client.EntityExternalLink
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `creator` | `Hash` | No | The user who created the link. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `initiative` | `Hash` | No | The initiative that the link is associated with. |
| `label` | `String` | Yes | The link's label. |
| `project` | `Hash` | No | The project that the link is associated with. |
| `sortOrder` | `Float` | Yes | The sort order of this link within the parent entity's resources list. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `String` | Yes | The link's URL. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.EntityExternalLink.create({
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "label" => "example_label", # String
  "sortOrder" => 1, # Float
  "updatedAt" => "example_updatedAt", # Object
  "url" => "example_url", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.EntityExternalLink.load({ "id" => "entity_external_link_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.EntityExternalLink.remove({ "id" => "entity_external_link_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.EntityExternalLink.update({
  "id" => "entity_external_link_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EntityExternalLinkEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ExternalUserEntity

```ruby
external_user = client.ExternalUser
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `avatarUrl` | `String` | No | A URL to the external user's avatar image. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `displayName` | `String` | Yes | The external user's display name. |
| `email` | `String` | No | The external user's email address. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `lastSeen` | `Object` | No | The last time the external user was seen interacting with Linear through their external service. |
| `name` | `String` | Yes | The external user's full name. |
| `organization` | `Hash` | No | The workspace that the external user belongs to. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ExternalUser.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ExternalUser.load({ "id" => "external_user_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ExternalUserEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## FavoriteEntity

```ruby
favorite = client.Favorite
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aiConversation` | `Hash` | No | [INTERNAL] The favorited Agent conversation. |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `color` | `String` | No | [Internal] Returns the color of the favorite's icon. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `customView` | `Hash` | No | The favorited custom view. |
| `customer` | `Hash` | No | The favorited customer. |
| `cycle` | `Hash` | No | The favorited cycle. |
| `dashboard` | `Hash` | No | The favorited dashboard. |
| `detail` | `String` | No | [Internal] Detail text for favorite's `title` (e.g. |
| `document` | `Hash` | No | The favorited document. |
| `facet` | `Hash` | No | [INTERNAL] The favorited facet. |
| `folderName` | `String` | No | The name of the folder. |
| `icon` | `String` | No | [Internal] Name of the favorite's icon. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `initiative` | `Hash` | No | The favorited initiative. |
| `initiativeLabel` | `Hash` | No | [INTERNAL] The favorited initiative label. |
| `initiativeTab` | `String` | No | The targeted tab of the initiative. |
| `issue` | `Hash` | No | The favorited issue. |
| `label` | `Hash` | No | The favorited label. |
| `liveFolderDefinition` | `Object` | No | The versioned lazy root and filter represented by this live favorite folder. |
| `liveFolderPreset` | `String` | No | The predefined live folder represented by this favorite. |
| `owner` | `Hash` | No | The user who owns this favorite. |
| `parent` | `Hash` | No | The parent folder of the favorite. |
| `pipelineTab` | `String` | No | The targeted tab of the release pipeline. |
| `predefinedViewTeam` | `Hash` | No | The team of the favorited predefined view. |
| `predefinedViewType` | `String` | No | The type of favorited predefined view (e.g., 'allIssues', 'activeCycle', 'backlog', 'triage'). |
| `project` | `Hash` | No | The favorited project. |
| `projectLabel` | `Hash` | No | The favorited project label. |
| `projectTab` | `String` | No | The targeted tab of the project. |
| `projectTeam` | `Hash` | No | [DEPRECATED] The favorited team of the project. |
| `pullRequest` | `Hash` | No | The favorited pull request. |
| `release` | `Hash` | No | The favorited release. |
| `releaseNote` | `Hash` | No | The favorited release note. |
| `releasePipeline` | `Hash` | No | The favorited release pipeline. |
| `sortOrder` | `Float` | Yes | The position of this item in the user's favorites list. |
| `team` | `Hash` | No | The favorited team. |
| `title` | `String` | Yes | [Internal] Favorite's title text (name of the favorite'd object or folder). |
| `type` | `String` | Yes | The type of entity this favorite references, such as 'issue', 'project', 'cycle', 'customView', 'document', 'folder', etc. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `String` | No | URL of the favorited entity. |
| `user` | `Hash` | No | The favorited user. |
| `workflowDefinition` | `Hash` | No | The favorited loop. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Favorite.create({
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "sortOrder" => 1, # Float
  "title" => "example_title", # String
  "type" => "example_type", # String
  "updatedAt" => "example_updatedAt", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Favorite.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Favorite.load({ "id" => "favorite_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Favorite.remove({ "id" => "favorite_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Favorite.update({
  "id" => "favorite_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `FavoriteEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GitAutomationStateEntity

```ruby
git_automation_state = client.GitAutomationState
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `event` | `String` | Yes | The Git event that triggers this automation rule (e.g., branch created, PR opened for review, or PR merged). |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `state` | `Hash` | No | The workflow state that linked issues will be transitioned to when the Git event fires. |
| `targetBranch` | `Hash` | No | The target branch that this automation rule applies to. |
| `team` | `Hash` | No | The team that this automation rule belongs to. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.GitAutomationState.create({
  "createdAt" => "example_createdAt", # Object
  "event" => "example_event", # String
  "id" => "example_id", # String
  "updatedAt" => "example_updatedAt", # Object
})
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.GitAutomationState.remove({ "id" => "id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.GitAutomationState.update({
  "id" => "id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GitAutomationStateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GitAutomationTargetBranchEntity

```ruby
git_automation_target_branch = client.GitAutomationTargetBranch
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `branchPattern` | `String` | Yes | The branch name or pattern to match against pull request target branches. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `isRegex` | `Boolean` | Yes | Whether the branch pattern should be interpreted as a regular expression. |
| `team` | `Hash` | No | The team that this target branch definition belongs to. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.GitAutomationTargetBranch.create({
  "branchPattern" => "example_branchPattern", # String
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "isRegex" => true, # Boolean
  "updatedAt" => "example_updatedAt", # Object
})
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.GitAutomationTargetBranch.remove({ "id" => "id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.GitAutomationTargetBranch.update({
  "id" => "id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GitAutomationTargetBranchEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GitHubIntegrationConnectDetailEntity

```ruby
git_hub_integration_connect_detail = client.GitHubIntegrationConnectDetail
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `lostRepositoryNames` | `String` | No | Full names ('owner/repo') of repositories whose existing GitHub Issues sync mappings would become inaccessible if the new GitHub App installation replaces the existing one. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.GitHubIntegrationConnectDetail.create({
})
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.GitHubIntegrationConnectDetail.update({
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GitHubIntegrationConnectDetailEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## InitiativeEntity

```ruby
initiative = client.Initiative
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `canceledAt` | `Object` | No | [Internal] The time at which the initiative was moved into Canceled status. |
| `color` | `String` | No | The initiative's color. |
| `completedAt` | `Object` | No | The time at which the initiative was moved into Completed status. |
| `content` | `String` | No | The initiative's content in markdown format. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `creator` | `Hash` | No | The user who created the initiative. |
| `description` | `String` | No | The description of the initiative. |
| `documentContent` | `Hash` | No | The content of the initiative description. |
| `frequencyResolution` | `String` | Yes | The resolution of the reminder frequency. |
| `health` | `String` | No | The overall health of the initiative, derived from the most recent initiative update. |
| `healthUpdatedAt` | `Object` | No | The time at which the initiative health was last updated, typically when a new initiative update is posted. |
| `icon` | `String` | No | The icon of the initiative. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `identifier` | `String` | No | [Internal] The human-readable identifier of the initiative. |
| `integrationsSettings` | `Hash` | No | Settings for all integrations associated with that initiative. |
| `labelIds` | `String` | Yes | The IDs of the initiative labels associated with this initiative. |
| `lastUpdate` | `Hash` | No | The most recent status update posted for this initiative. |
| `leadTeam` | `Hash` | No | The team that leads the initiative. |
| `name` | `String` | Yes | The name of the initiative. |
| `organization` | `Hash` | No | The workspace of the initiative. |
| `owner` | `Hash` | No | The user who owns the initiative. |
| `parentInitiative` | `Hash` | No | Parent initiative associated with the initiative. |
| `previousIdentifiers` | `String` | Yes | [Internal] Identifiers (default and custom) that this initiative has previously held. |
| `priority` | `Integer` | Yes | The priority of the initiative. |
| `prioritySortOrder` | `Float` | Yes | The sort order of the initiative within the workspace when ordered by priority. |
| `slugId` | `String` | Yes | The initiative's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `Float` | Yes | The sort order of the initiative within the workspace. |
| `startedAt` | `Object` | No | The time at which the initiative was moved into Active status. |
| `status` | `String` | Yes | The lifecycle status of the initiative. |
| `targetDate` | `Object` | No | The estimated completion date of the initiative. |
| `targetDateResolution` | `String` | No | The resolution of the initiative's estimated completion date, indicating whether it refers to a specific day, week, month, quarter, or year. |
| `trashed` | `Boolean` | No | A flag that indicates whether the initiative is in the trash bin. |
| `updateReminderFrequency` | `Float` | No | The frequency at which to prompt for updates. |
| `updateReminderFrequencyInWeeks` | `Float` | No | The n-weekly frequency at which to prompt for updates. |
| `updateRemindersDay` | `String` | No | The day at which to prompt for updates. |
| `updateRemindersHour` | `Float` | No | The hour at which to prompt for updates. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `String` | Yes | Initiative URL. |
| `visibility` | `String` | Yes | The visibility of the initiative, derived from its lead team. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Initiative.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Initiative.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Initiative.load({ "id" => "initiative_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Initiative.remove({ "id" => "initiative_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Initiative.update({
  "id" => "initiative_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `InitiativeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## InitiativeLabelEntity

```ruby
initiative_label = client.InitiativeLabel
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `color` | `String` | Yes | The label's color as a HEX string (e.g., '#EB5757'). |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `creator` | `Hash` | No | The user who created the label. |
| `description` | `String` | No | The label's description. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `isGroup` | `Boolean` | Yes | Whether the label is a group. |
| `lastAppliedAt` | `Object` | No | The date when the label was last applied to an issue, project, or initiative. |
| `name` | `String` | Yes | The label's name. |
| `organization` | `Hash` | No | The workspace that the initiative label belongs to. |
| `parent` | `Hash` | No | The parent label group. |
| `retiredAt` | `Object` | No | [Internal] When the label was retired. |
| `retiredBy` | `Hash` | No | The user who retired the label. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.InitiativeLabel.create({
  "color" => "example_color", # String
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "isGroup" => true, # Boolean
  "name" => "example_name", # String
  "updatedAt" => "example_updatedAt", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.InitiativeLabel.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.InitiativeLabel.load({ "id" => "initiative_label_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.InitiativeLabel.remove({ "id" => "initiative_label_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.InitiativeLabel.update({
  "id" => "initiative_label_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `InitiativeLabelEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## InitiativeLeadTeamChangeImpactEntity

```ruby
initiative_lead_team_change_impact = client.InitiativeLeadTeamChangeImpact
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `affectedDescendantCount` | `Integer` | Yes | The number of editable matching sub-initiatives whose lead team would change if the update is applied to descendants. |
| `id` | `String` | No |  |
| `visibilityMayChange` | `Boolean` | Yes | Whether the changed initiatives may gain or lose access restrictions because the current or next lead team is not public. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.InitiativeLeadTeamChangeImpact.load({ "id" => "initiative_lead_team_change_impact_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `InitiativeLeadTeamChangeImpactEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## InitiativeRelationEntity

```ruby
initiative_relation = client.InitiativeRelation
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `initiative` | `Hash` | No | The parent initiative in this hierarchical relation. |
| `relatedInitiative` | `Hash` | No | The child initiative in this hierarchical relation. |
| `sortOrder` | `Float` | Yes | The sort order of the child initiative within its parent initiative. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `Hash` | No | The user who last created or modified the relation. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.InitiativeRelation.create({
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "sortOrder" => 1, # Float
  "updatedAt" => "example_updatedAt", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.InitiativeRelation.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.InitiativeRelation.load({ "id" => "initiative_relation_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.InitiativeRelation.remove({ "id" => "initiative_relation_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.InitiativeRelation.update({
  "id" => "initiative_relation_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `InitiativeRelationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## InitiativeToProjectEntity

```ruby
initiative_to_project = client.InitiativeToProject
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `initiative` | `Hash` | No | The initiative that the project is associated with. |
| `project` | `Hash` | No | The project that the initiative is associated with. |
| `sortOrder` | `String` | Yes | The sort order of the project within its parent initiative. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.InitiativeToProject.create({
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "sortOrder" => "example_sortOrder", # String
  "updatedAt" => "example_updatedAt", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.InitiativeToProject.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.InitiativeToProject.load({ "id" => "initiative_to_project_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.InitiativeToProject.remove({ "id" => "initiative_to_project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.InitiativeToProject.update({
  "id" => "initiative_to_project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `InitiativeToProjectEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## InitiativeUpdateEntity

```ruby
initiative_update = client.InitiativeUpdate
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `body` | `String` | Yes | The update content in markdown format. |
| `bodyData` | `String` | Yes | [Internal] The content of the update as a Prosemirror document. |
| `commentCount` | `Integer` | Yes | Number of comments associated with the initiative update. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `diff` | `Object` | No | The diff between the current update and the previous one. |
| `diffMarkdown` | `String` | No | The diff between the current update and the previous one, formatted as markdown. |
| `editedAt` | `Object` | No | The time the update was edited. |
| `health` | `String` | Yes | The health of the initiative at the time this update was posted. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `infoSnapshot` | `Object` | No | [Internal] A snapshot of initiative properties at the time the update was posted, including project statuses, sub-initiative health, and target dates. |
| `initiative` | `Hash` | No | The initiative that this status update was posted to. |
| `isDiffHidden` | `Boolean` | Yes | Whether the diff between this update and the previous one should be hidden in the UI. |
| `isStale` | `Boolean` | Yes | Whether the initiative update is stale. |
| `reactionData` | `Object` | Yes | Emoji reaction summary, grouped by emoji type. |
| `slugId` | `String` | Yes | The update's unique URL slug. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `String` | Yes | The URL to the initiative update. |
| `user` | `Hash` | No | The user who wrote the update. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.InitiativeUpdate.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.InitiativeUpdate.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.InitiativeUpdate.load({ "id" => "initiative_update_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.InitiativeUpdate.update({
  "id" => "initiative_update_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `InitiativeUpdateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IntegrationEntity

```ruby
integration = client.Integration
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `creator` | `Hash` | No | The user that added the integration. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `organization` | `Hash` | No | The workspace that the integration is associated with. |
| `service` | `String` | Yes | The integration's type, identifying which external service this integration connects to (e.g., 'slack', 'github', 'jira', 'figma'). |
| `team` | `Hash` | No | The team that the integration is associated with. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Integration.create({
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "service" => "example_service", # String
  "updatedAt" => "example_updatedAt", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Integration.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Integration.load({ "id" => "integration_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Integration.remove({ "id" => "integration_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Integration.update({
  "id" => "integration_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IntegrationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IntegrationTemplateEntity

```ruby
integration_template = client.IntegrationTemplate
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `foreignEntityId` | `String` | No | The identifier of the foreign entity in the external service that this template is scoped to. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `integration` | `Hash` | No | The integration that the template is associated with. |
| `template` | `Hash` | No | The template that the integration is associated with. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.IntegrationTemplate.create({
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "updatedAt" => "example_updatedAt", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.IntegrationTemplate.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.IntegrationTemplate.load({ "id" => "integration_template_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.IntegrationTemplate.remove({ "id" => "integration_template_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IntegrationTemplateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IntegrationsSettingEntity

```ruby
integrations_setting = client.IntegrationsSetting
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `contextViewType` | `String` | No | The type of view to which the integration settings context is associated with. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `initiative` | `Hash` | No | Initiative which those settings apply to. |
| `microsoftTeamsProjectUpdateCreated` | `Boolean` | No | Whether to send a Microsoft Teams message when a project update is created. |
| `project` | `Hash` | No | Project which those settings apply to. |
| `slackInitiativeUpdateCreated` | `Boolean` | No | Whether to send a Slack message when an initiative update is created. |
| `slackIssueAddedToTriage` | `Boolean` | No | Whether to send a Slack message when a new issue is added to triage. |
| `slackIssueAddedToView` | `Boolean` | No | Whether to send a Slack message when an issue is added to the custom view. |
| `slackIssueNewComment` | `Boolean` | No | Whether to send a Slack message when a comment is created on any of the project or team's issues. |
| `slackIssueSlaBreached` | `Boolean` | No | Whether to send a Slack message when an SLA is breached. |
| `slackIssueSlaHighRisk` | `Boolean` | No | Whether to send a Slack message when an SLA is at high risk. |
| `slackIssueStatusChangedAll` | `Boolean` | No | Whether to send a Slack message when any of the project or team's issues has a change in status. |
| `slackIssueStatusChangedDone` | `Boolean` | No | Whether to send a Slack message when any of the project or team's issues change to completed or canceled. |
| `slackProjectUpdateCreated` | `Boolean` | No | Whether to send a Slack message when a project update is created. |
| `slackProjectUpdateCreatedToTeam` | `Boolean` | No | Whether to send a new project update to team Slack channels. |
| `slackProjectUpdateCreatedToWorkspace` | `Boolean` | No | Whether to send a new project update to workspace Slack channel. |
| `team` | `Hash` | No | Team which those settings apply to. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.IntegrationsSetting.create({
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "updatedAt" => "example_updatedAt", # Object
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.IntegrationsSetting.load({ "id" => "integrations_setting_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.IntegrationsSetting.update({
  "id" => "integrations_setting_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IntegrationsSettingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IssueEntity

```ruby
issue = client.Issue
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activitySummary` | `Object` | No | [Internal] The activity summary information for this issue. |
| `addedToCycleAt` | `Object` | No | The time at which the issue was added to a cycle. |
| `addedToProjectAt` | `Object` | No | The time at which the issue was added to a project. |
| `addedToTeamAt` | `Object` | No | The time at which the issue was added to a team. |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `asksExternalUserRequester` | `Hash` | No | The external user who requested creation of the Asks issue on behalf of the creator. |
| `asksRequester` | `Hash` | No | The internal user who requested creation of the Asks issue on behalf of the creator. |
| `assignee` | `Hash` | No | The user to whom the issue is assigned. |
| `autoArchivedAt` | `Object` | No | The time at which the issue was automatically archived by the auto pruning process. |
| `autoClosedAt` | `Object` | No | The time at which the issue was automatically closed by the auto pruning process. |
| `botActor` | `Hash` | No | The bot that created the issue, if applicable. |
| `branchName` | `String` | Yes | Suggested branch name for the issue. |
| `canceledAt` | `Object` | No | The time at which the issue was moved into canceled state. |
| `completedAt` | `Object` | No | The time at which the issue was moved into completed state. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `creator` | `Hash` | No | The user who created the issue. |
| `customerTicketCount` | `Integer` | Yes | Returns the number of Attachment resources which are created by customer support ticketing systems (e.g. |
| `cycle` | `Hash` | No | The cycle that the issue is associated with. |
| `delegate` | `Hash` | No | The agent user that is delegated to work on this issue. |
| `description` | `String` | No | The issue's description in markdown format. |
| `descriptionState` | `String` | No | [Internal] The issue's description content as YJS state. |
| `documentContent` | `Hash` | No | [ALPHA] The document content representing this issue description. |
| `dueDate` | `Object` | No | The date at which the issue is due. |
| `estimate` | `Float` | No | The estimate of the complexity of the issue. |
| `externalUserCreator` | `Hash` | No | The external user who created the issue. |
| `favorite` | `Hash` | No | The users favorite associated with this issue. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `identifier` | `String` | Yes | Issue's human readable identifier (e.g. |
| `inheritsSharedAccess` | `Boolean` | Yes | Whether this issue inherits shared access from its parent issue. |
| `integrationSourceType` | `String` | No | Integration type that created this issue, if applicable. |
| `labelIds` | `String` | Yes | Identifiers of the labels associated with this issue. |
| `lastAppliedTemplate` | `Hash` | No | The last template that was applied to this issue. |
| `number` | `Float` | Yes | The issue's unique number, scoped to the issue's team. |
| `parent` | `Hash` | No | The parent of the issue. |
| `previousIdentifiers` | `String` | Yes | Previous identifiers of the issue if it has been moved between teams. |
| `priority` | `Float` | Yes | The priority of the issue. |
| `priorityLabel` | `String` | Yes | Label for the priority. |
| `prioritySortOrder` | `Float` | Yes | The order of the item in relation to other items in the workspace, when ordered by priority. |
| `project` | `Hash` | No | The project that the issue is associated with. |
| `projectMilestone` | `Hash` | No | The project milestone that the issue is associated with. |
| `reactionData` | `Object` | Yes | Emoji reaction summary for the issue, grouped by emoji type. |
| `recurringIssueTemplate` | `Hash` | No | The recurring issue template that created this issue. |
| `slaBreachesAt` | `Object` | No | The time at which the issue's SLA will breach. |
| `slaHighRiskAt` | `Object` | No | The time at which the issue's SLA will enter high risk state. |
| `slaMediumRiskAt` | `Object` | No | The time at which the issue's SLA will enter medium risk state. |
| `slaStartedAt` | `Object` | No | The time at which the issue's SLA began. |
| `slaType` | `String` | No | The type of SLA set on the issue. |
| `snoozedBy` | `Hash` | No | The user who snoozed the issue. |
| `snoozedUntilAt` | `Object` | No | The time until an issue will be snoozed in Triage view. |
| `sortOrder` | `Float` | Yes | The order of the item in relation to other items in the organization. |
| `sourceComment` | `Hash` | No | The comment that this issue was created from, when an issue is created from an existing comment. |
| `startedAt` | `Object` | No | The time at which the issue was moved into started state. |
| `startedTriageAt` | `Object` | No | The time at which the issue entered triage. |
| `state` | `Hash` | No | The workflow state (issue status) that the issue is currently in. |
| `subIssueSortOrder` | `Float` | No | The order of the item in the sub-issue list. |
| `suggestionsGeneratedAt` | `Object` | No | [Internal] The time at which the most recent suggestions for this issue were generated. |
| `summary` | `Hash` | No | [Internal] AI-generated activity summary for this issue. |
| `team` | `Hash` | No | The team that the issue belongs to. |
| `title` | `String` | Yes | The issue's title. |
| `trashed` | `Boolean` | No | A flag that indicates whether the issue is in the trash bin. |
| `triagedAt` | `Object` | No | The time at which the issue left triage. |
| `trusted` | `Boolean` | No | [Internal] Whether this issue has been explicitly marked as trusted. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `String` | Yes | Issue URL. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Issue.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Issue.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Issue.load({ "id" => "issue_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Issue.remove({ "id" => "issue_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Issue.update({
  "id" => "issue_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IssueEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IssueImportEntity

```ruby
issue_import = client.IssueImport
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `creatorId` | `String` | No | Identifier of the user who started the import job. |
| `csvFileUrl` | `String` | No | File URL for the uploaded CSV for the import, if there is one. |
| `displayName` | `String` | Yes | The display name of the import service. |
| `error` | `String` | No | User readable error message, if one has occurred during the import. |
| `errorMetadata` | `Object` | No | Error code and metadata, if one has occurred during the import. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `mapping` | `Object` | No | The data mapping configuration for the import job. |
| `progress` | `Float` | No | Current step progress as a percentage (0-100). |
| `service` | `String` | Yes | The external service from which data is being imported (e.g., jira, asana, github, shortcut, linear). |
| `serviceMetadata` | `Object` | No | Metadata related to import service. |
| `status` | `String` | Yes | The current status of the import job, indicating its position in the import lifecycle (e.g., not started, in progress, complete, error). |
| `teamName` | `String` | No | The name of the new team to be created for the import, when the import is configured to create a new team rather than importing into an existing one. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.IssueImport.create({
  "createdAt" => "example_createdAt", # Object
  "displayName" => "example_displayName", # String
  "service" => "example_service", # String
  "status" => "example_status", # String
  "updatedAt" => "example_updatedAt", # Object
})
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.IssueImport.remove({ "issue_import_id" => "issue_import_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.IssueImport.update({
  "id" => "id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IssueImportEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IssueLabelEntity

```ruby
issue_label = client.IssueLabel
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `color` | `String` | Yes | The label's color as a HEX string (e.g., '#EB5757'). |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `creator` | `Hash` | No | The user who created the label. |
| `description` | `String` | No | The label's description. |
| `groupType` | `String` | No | The selection mode of this label group. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `inheritedFrom` | `Hash` | No | The original workspace or parent-team label that this label was inherited from. |
| `isGroup` | `Boolean` | Yes | Whether the label is a group. |
| `lastAppliedAt` | `Object` | No | The date when the label was last applied to an issue, project, or initiative. |
| `name` | `String` | Yes | The label's name. |
| `parent` | `Hash` | No | The parent label. |
| `retiredAt` | `Object` | No | [Internal] When the label was retired. |
| `retiredBy` | `Hash` | No | The user who retired the label. |
| `team` | `Hash` | No | The team that the label is scoped to. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.IssueLabel.create({
  "color" => "example_color", # String
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "isGroup" => true, # Boolean
  "name" => "example_name", # String
  "updatedAt" => "example_updatedAt", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.IssueLabel.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.IssueLabel.load({ "id" => "issue_label_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.IssueLabel.remove({ "id" => "issue_label_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.IssueLabel.update({
  "id" => "issue_label_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IssueLabelEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IssuePriorityValueEntity

```ruby
issue_priority_value = client.IssuePriorityValue
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `String` | Yes | Priority's label. |
| `priority` | `Integer` | Yes | Priority's number value. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.IssuePriorityValue.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IssuePriorityValueEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IssueRelationEntity

```ruby
issue_relation = client.IssueRelation
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `issue` | `Hash` | No | The source issue whose relationship is being described. |
| `relatedIssue` | `Hash` | No | The target issue that the source issue is related to. |
| `type` | `String` | Yes | The type of relationship between the source issue and the related issue. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.IssueRelation.create({
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "type" => "example_type", # String
  "updatedAt" => "example_updatedAt", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.IssueRelation.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.IssueRelation.load({ "id" => "issue_relation_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.IssueRelation.remove({ "id" => "issue_relation_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.IssueRelation.update({
  "id" => "issue_relation_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IssueRelationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IssueSearchResultEntity

```ruby
issue_search_result = client.IssueSearchResult
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activitySummary` | `Object` | No | [Internal] The activity summary information for this issue. |
| `addedToCycleAt` | `Object` | No | The time at which the issue was added to a cycle. |
| `addedToProjectAt` | `Object` | No | The time at which the issue was added to a project. |
| `addedToTeamAt` | `Object` | No | The time at which the issue was added to a team. |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `asksExternalUserRequester` | `Hash` | No | The external user who requested creation of the Asks issue on behalf of the creator. |
| `asksRequester` | `Hash` | No | The internal user who requested creation of the Asks issue on behalf of the creator. |
| `assignee` | `Hash` | No | The user to whom the issue is assigned. |
| `autoArchivedAt` | `Object` | No | The time at which the issue was automatically archived by the auto pruning process. |
| `autoClosedAt` | `Object` | No | The time at which the issue was automatically closed by the auto pruning process. |
| `botActor` | `Hash` | No | The bot that created the issue, if applicable. |
| `branchName` | `String` | Yes | Suggested branch name for the issue. |
| `canceledAt` | `Object` | No | The time at which the issue was moved into canceled state. |
| `completedAt` | `Object` | No | The time at which the issue was moved into completed state. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `creator` | `Hash` | No | The user who created the issue. |
| `customerTicketCount` | `Integer` | Yes | Returns the number of Attachment resources which are created by customer support ticketing systems (e.g. |
| `cycle` | `Hash` | No | The cycle that the issue is associated with. |
| `delegate` | `Hash` | No | The agent user that is delegated to work on this issue. |
| `description` | `String` | No | The issue's description in markdown format. |
| `descriptionState` | `String` | No | [Internal] The issue's description content as YJS state. |
| `documentContent` | `Hash` | No | [ALPHA] The document content representing this issue description. |
| `dueDate` | `Object` | No | The date at which the issue is due. |
| `estimate` | `Float` | No | The estimate of the complexity of the issue. |
| `externalUserCreator` | `Hash` | No | The external user who created the issue. |
| `favorite` | `Hash` | No | The users favorite associated with this issue. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `identifier` | `String` | Yes | Issue's human readable identifier (e.g. |
| `inheritsSharedAccess` | `Boolean` | Yes | Whether this issue inherits shared access from its parent issue. |
| `integrationSourceType` | `String` | No | Integration type that created this issue, if applicable. |
| `labelIds` | `String` | Yes | Identifiers of the labels associated with this issue. |
| `lastAppliedTemplate` | `Hash` | No | The last template that was applied to this issue. |
| `metadata` | `Object` | Yes | Metadata related to search result. |
| `number` | `Float` | Yes | The issue's unique number, scoped to the issue's team. |
| `parent` | `Hash` | No | The parent of the issue. |
| `previousIdentifiers` | `String` | Yes | Previous identifiers of the issue if it has been moved between teams. |
| `priority` | `Float` | Yes | The priority of the issue. |
| `priorityLabel` | `String` | Yes | Label for the priority. |
| `prioritySortOrder` | `Float` | Yes | The order of the item in relation to other items in the workspace, when ordered by priority. |
| `project` | `Hash` | No | The project that the issue is associated with. |
| `projectMilestone` | `Hash` | No | The project milestone that the issue is associated with. |
| `reactionData` | `Object` | Yes | Emoji reaction summary for the issue, grouped by emoji type. |
| `recurringIssueTemplate` | `Hash` | No | The recurring issue template that created this issue. |
| `slaBreachesAt` | `Object` | No | The time at which the issue's SLA will breach. |
| `slaHighRiskAt` | `Object` | No | The time at which the issue's SLA will enter high risk state. |
| `slaMediumRiskAt` | `Object` | No | The time at which the issue's SLA will enter medium risk state. |
| `slaStartedAt` | `Object` | No | The time at which the issue's SLA began. |
| `slaType` | `String` | No | The type of SLA set on the issue. |
| `snoozedBy` | `Hash` | No | The user who snoozed the issue. |
| `snoozedUntilAt` | `Object` | No | The time until an issue will be snoozed in Triage view. |
| `sortOrder` | `Float` | Yes | The order of the item in relation to other items in the organization. |
| `sourceComment` | `Hash` | No | The comment that this issue was created from, when an issue is created from an existing comment. |
| `startedAt` | `Object` | No | The time at which the issue was moved into started state. |
| `startedTriageAt` | `Object` | No | The time at which the issue entered triage. |
| `state` | `Hash` | No | The workflow state (issue status) that the issue is currently in. |
| `subIssueSortOrder` | `Float` | No | The order of the item in the sub-issue list. |
| `suggestionsGeneratedAt` | `Object` | No | [Internal] The time at which the most recent suggestions for this issue were generated. |
| `summary` | `Hash` | No | [Internal] AI-generated activity summary for this issue. |
| `team` | `Hash` | No | The team that the issue belongs to. |
| `title` | `String` | Yes | The issue's title. |
| `trashed` | `Boolean` | No | A flag that indicates whether the issue is in the trash bin. |
| `triagedAt` | `Object` | No | The time at which the issue left triage. |
| `trusted` | `Boolean` | No | [Internal] Whether this issue has been explicitly marked as trusted. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `String` | Yes | Issue URL. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.IssueSearchResult.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IssueSearchResultEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IssueToReleaseEntity

```ruby
issue_to_release = client.IssueToRelease
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `issue` | `Hash` | No | The issue that is linked to the release. |
| `release` | `Hash` | No | The release that the issue is linked to. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.IssueToRelease.create({
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "updatedAt" => "example_updatedAt", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.IssueToRelease.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.IssueToRelease.load({ "id" => "issue_to_release_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.IssueToRelease.remove({ "id" => "issue_to_release_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IssueToReleaseEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LogoutResponseEntity

```ruby
logout_response = client.LogoutResponse
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `Boolean` | Yes | Whether the operation was successful. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.LogoutResponse.create({
  "success" => true, # Boolean
})
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.LogoutResponse.update({
  "session_id" => "session_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LogoutResponseEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## NotificationEntity

```ruby
notification = client.Notification
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `Hash` | No | The user that caused the notification. |
| `actorAvatarColor` | `String` | Yes | [Internal] Notification actor initials if avatar is not available. |
| `actorAvatarUrl` | `String` | No | [Internal] Notification avatar URL. |
| `actorInactive` | `Boolean` | Yes | [Internal] Whether the notification's user actor is deactivated in the workspace. |
| `actorInitials` | `String` | No | [Internal] Notification actor initials if avatar is not available. |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `botActor` | `Hash` | No | The bot that caused the notification. |
| `category` | `String` | Yes | The category of the notification. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `emailedAt` | `Object` | No | The time at which an email reminder for this notification was sent to the user. |
| `externalUserActor` | `Hash` | No | The external user that caused the notification. |
| `groupingKey` | `String` | Yes | [Internal] Notifications with the same grouping key will be grouped together in the UI. |
| `groupingPriority` | `Float` | Yes | [Internal] Priority of the notification with the same grouping key. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `inboxUrl` | `String` | Yes | [Internal] Inbox URL for the notification. |
| `initiativeUpdateHealth` | `String` | No | [Internal] Initiative update health for new updates. |
| `isLinearActor` | `Boolean` | Yes | [Internal] If notification actor was Linear. |
| `issueStatusType` | `String` | No | [Internal] Issue's status type for issue notifications. |
| `projectUpdateHealth` | `String` | No | [Internal] Project update health for new updates. |
| `readAt` | `Object` | No | The time at which the user marked the notification as read. |
| `snoozedUntilAt` | `Object` | No | The time until which a notification is snoozed. |
| `subtitle` | `String` | Yes | [Internal] Notification subtitle. |
| `title` | `String` | Yes | [Internal] Notification title. |
| `type` | `String` | Yes | Notification type. |
| `unsnoozedAt` | `Object` | No | The time at which a notification was unsnoozed. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `String` | Yes | [Internal] URL to the target of the notification. |
| `user` | `Hash` | No | The recipient user of this notification. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Notification.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Notification.load({ "id" => "notification_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `NotificationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## NotificationSubscriptionEntity

```ruby
notification_subscription = client.NotificationSubscription
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `Boolean` | Yes | Whether the subscription is active. |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `contextViewType` | `String` | No | The type of contextual view (e.g., active issues, backlog) that further scopes a team notification subscription. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `customView` | `Hash` | No | The custom view that this notification subscription is scoped to. |
| `customer` | `Hash` | No | The customer that this notification subscription is scoped to. |
| `cycle` | `Hash` | No | The cycle that this notification subscription is scoped to. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `initiative` | `Hash` | No | The initiative that this notification subscription is scoped to. |
| `label` | `Hash` | No | The issue label that this notification subscription is scoped to. |
| `project` | `Hash` | No | The project that this notification subscription is scoped to. |
| `subscriber` | `Hash` | No | The user who will receive notifications from this subscription. |
| `team` | `Hash` | No | The team that this notification subscription is scoped to. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `Hash` | No | The user that this notification subscription is scoped to, for user-specific view subscriptions. |
| `userContextViewType` | `String` | No | The type of user-specific view that further scopes a user notification subscription. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.NotificationSubscription.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.NotificationSubscription.load({ "id" => "notification_subscription_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `NotificationSubscriptionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OAuthApplicationEntity

```ruby
o_auth_application = client.OAuthApplication
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `clientId` | `String` | Yes | The client ID used during OAuth authorization flows. |
| `createdAt` | `Object` | Yes | The time at which the OAuth application was created. |
| `description` | `String` | No | User-facing description of the OAuth application. |
| `developer` | `String` | Yes | Name of the developer or company that built the OAuth application. |
| `developerUrl` | `String` | Yes | URL of the developer's website, homepage, or documentation. |
| `distribution` | `String` | Yes | Distribution setting for the OAuth application. |
| `grantTypes` | `String` | Yes | OAuth grant types supported by this application. |
| `id` | `String` | Yes | The unique identifier of the OAuth application. |
| `imageUrl` | `String` | No | URL of the OAuth application's icon. |
| `name` | `String` | Yes | The human-readable name of the OAuth application. |
| `redirectUris` | `String` | Yes | Allowed redirect URIs for OAuth authorization flows. |
| `updatedAt` | `Object` | Yes | The time at which the OAuth application was last updated. |
| `webhookEnabled` | `Boolean` | Yes | Whether webhook delivery is enabled for this OAuth application. |
| `webhookResourceTypes` | `String` | Yes | Resource types the OAuth application's webhooks subscribe to. |
| `webhookUrl` | `String` | No | Webhook URL used for delivering webhook payloads. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.OAuthApplication.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.OAuthApplication.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.OAuthApplication.load({ "id" => "o_auth_application_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.OAuthApplication.update({
  "id" => "o_auth_application_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OAuthApplicationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OrganizationEntity

```ruby
organization = client.Organization
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentAutomationEnabled` | `Boolean` | Yes | [INTERNAL] Whether the workspace has enabled agent automation. |
| `aiAddonEnabled` | `Boolean` | Yes | [INTERNAL] Whether the workspace has enabled the AI add-on (which at this point only includes triage suggestions). |
| `aiDiscussionSummariesEnabled` | `Boolean` | Yes | Whether the workspace has enabled AI discussion summaries for issues. |
| `aiProviderConfiguration` | `Object` | No | [INTERNAL] Configure per-modality AI host providers and model families. |
| `aiTelemetryEnabled` | `Boolean` | Yes | [INTERNAL] Whether the workspace has opted in to AI telemetry. |
| `aiThreadSummariesEnabled` | `Boolean` | Yes | Whether the workspace has enabled resolved thread AI summaries. |
| `allowedFileUploadContentTypes` | `String` | No | Allowed file upload content types |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `authSettings` | `Object` | Yes | Authentication settings for the workspace, including allowed auth providers, bypass rules, and organization visibility during signup. |
| `codeIntelligenceEnabled` | `Boolean` | Yes | [INTERNAL] Whether code intelligence is enabled for the workspace. |
| `codeIntelligenceRepository` | `String` | No | [INTERNAL] GitHub repository in owner/repo format for code intelligence. |
| `codingAgentEnabled` | `Boolean` | Yes | [INTERNAL] Whether the workspace has enabled Coding Sessions. |
| `codingAgentSettings` | `Object` | Yes | [Internal] Settings for Coding Sessions features. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `createdIssueCount` | `Integer` | Yes | Approximate total number of issues created in the workspace, including archived ones. |
| `customerCount` | `Integer` | Yes | The number of active (non-archived) customers tracked in the workspace. |
| `customersConfiguration` | `Object` | Yes | Configuration settings for the Customers feature, including revenue currency and other customer tracking preferences. |
| `customersEnabled` | `Boolean` | Yes | Whether the Customers feature is enabled and accessible for the workspace based on the current plan. |
| `defaultFeedSummarySchedule` | `String` | No | Default schedule for how often feed summaries are generated. |
| `defaultHomeView` | `String` | No | The default home view for members of the workspace who have not chosen their own default. |
| `defaultHomeViewTargetId` | `String` | No | The id of the specific initiative, project, view, dashboard, or page tab used as the default home view. |
| `deletionRequestedAt` | `Object` | No | The time at which deletion of the workspace was requested. |
| `feedEnabled` | `Boolean` | Yes | Whether the activity feed feature is enabled for the workspace. |
| `fiscalYearStartMonth` | `Float` | Yes | The zero-indexed month at which the fiscal year starts (0 = January, 11 = December). |
| `generatedUpdatesEnabled` | `Boolean` | Yes | [INTERNAL] Whether the workspace has enabled generated updates. |
| `gitBranchFormat` | `String` | No | The template format for Git branch names created from issues. |
| `gitLinkbackDescriptionsEnabled` | `Boolean` | Yes | Whether issue descriptions should be included in the Git integration linkback messages posted to pull requests. |
| `gitLinkbackMessagesEnabled` | `Boolean` | Yes | Whether the Git integration linkback messages should be posted as comments on pull requests in private repositories. |
| `gitPublicLinkbackMessagesEnabled` | `Boolean` | Yes | Whether the Git integration linkback messages should be posted as comments on pull requests in public repositories. |
| `hipaaComplianceEnabled` | `Boolean` | Yes | Whether HIPAA compliance is enabled for the workspace. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `initiativeUpdateReminderFrequencyInWeeks` | `Float` | No | The frequency in weeks at which to prompt for initiative updates. |
| `initiativeUpdateRemindersDay` | `String` | Yes | The day of the week on which initiative update reminders are sent. |
| `initiativeUpdateRemindersHour` | `Float` | Yes | The hour of the day (0-23) at which initiative update reminders are sent. |
| `linearAgentEnabled` | `Boolean` | Yes | [Internal] Whether the workspace has enabled Linear Agent. |
| `linearAgentSettings` | `Object` | Yes | [Internal] Settings for Linear Agent features. |
| `logoUrl` | `String` | No | The URL of the workspace's logo image. |
| `name` | `String` | Yes | The workspace's name. |
| `periodUploadVolume` | `Float` | Yes | Rolling 30-day total file upload volume for the workspace, measured in megabytes. |
| `previousUrlKeys` | `String` | Yes | Previously used URL keys for the workspace. |
| `projectUpdateReminderFrequencyInWeeks` | `Float` | No | The frequency in weeks at which to prompt for project updates. |
| `projectUpdateRemindersDay` | `String` | Yes | The day of the week on which project update reminders are sent. |
| `projectUpdateRemindersHour` | `Float` | Yes | The hour of the day (0-23) at which project update reminders are sent. |
| `pullRequestIssueMode` | `String` | Yes | How Linear suggests and links issues for pull requests that have none linked: 'off', 'suggest', or 'autoOnMerge'. |
| `pullRequestTourEnabled` | `Boolean` | Yes | Whether the workspace generates AI Pull Request guides for new pull requests. |
| `releaseChannel` | `String` | Yes | The feature release channel the workspace belongs to, which controls access to pre-release features. |
| `releasesEnabled` | `Boolean` | Yes | Whether release management is enabled for the workspace. |
| `restrictAgentInvocationToMembers` | `Boolean` | No | [Internal] Whether agent invocation is restricted to full workspace members. |
| `roadmapEnabled` | `Boolean` | Yes | Whether the roadmap feature is enabled for the workspace. |
| `samlEnabled` | `Boolean` | Yes | Whether SAML-based single sign-on authentication is enabled for the workspace. |
| `samlSettings` | `Object` | No | [INTERNAL] SAML settings. |
| `scimEnabled` | `Boolean` | Yes | Whether SCIM provisioning is enabled for the workspace, allowing automated user and team management from an identity provider. |
| `scimSettings` | `Object` | No | [INTERNAL] SCIM settings. |
| `securitySettings` | `Object` | Yes | Security settings for the workspace, including role-based restrictions for invitations, team creation, label management, and other sensitive operations. |
| `slackAutoCreateProjectChannel` | `Boolean` | Yes | [Internal] Whether to automatically create a Slack channel when a new project is created. |
| `slackProjectChannelIntegration` | `Hash` | No | The Slack integration used for auto-creating project channels. |
| `slackProjectChannelPrefix` | `String` | Yes | The prefix used for auto-created Slack project channels. |
| `slackProjectChannelsEnabled` | `Boolean` | Yes | [Internal] Whether the Slack project channels feature is enabled for the workspace. |
| `subscription` | `Hash` | No | The workspace's subscription to a paid plan. |
| `themeSettings` | `Object` | No | [ALPHA] Theme settings for the workspace. |
| `trialEndsAt` | `Object` | No | The time at which the current plan trial will end. |
| `trialStartsAt` | `Object` | No | The time at which the current plan trial started. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |
| `urlKey` | `String` | Yes | The workspace's unique URL key, used in URLs to identify the workspace. |
| `userCount` | `Integer` | Yes | The number of active (non-deactivated) users in the workspace. |
| `workingDays` | `Float` | Yes | [Internal] The list of working days. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Organization.load({ "id" => "organization_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Organization.remove({ "id" => "organization_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Organization.update({
  "id" => "organization_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OrganizationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OrganizationDomainEntity

```ruby
organization_domain = client.OrganizationDomain
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `authType` | `String` | Yes | The authentication type this domain is used for. |
| `claimed` | `Boolean` | No | Whether the domain was claimed by the workspace through DNS TXT record verification. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `creator` | `Hash` | No | The user who added the domain. |
| `disableOrganizationCreation` | `Boolean` | No | Whether users with email addresses from this domain are prevented from creating new workspaces. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `identityProvider` | `Hash` | No | The identity provider the domain belongs to. |
| `name` | `String` | Yes | The domain name (e.g., 'example.com'). |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |
| `verificationEmail` | `String` | No | The email address used to verify this domain. |
| `verified` | `Boolean` | Yes | Whether the domain has been verified via email verification. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.OrganizationDomain.create({
  "authType" => "example_authType", # String
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "name" => "example_name", # String
  "updatedAt" => "example_updatedAt", # Object
  "verified" => true, # Boolean
})
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.OrganizationDomain.remove({ "id" => "id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.OrganizationDomain.update({
  "id" => "id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OrganizationDomainEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OrganizationInviteEntity

```ruby
organization_invite = client.OrganizationInvite
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acceptedAt` | `Object` | No | The time at which the invite was accepted by the invitee. |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `email` | `String` | Yes | The email address of the person being invited to the workspace. |
| `expiresAt` | `Object` | No | The time at which the invite will expire and can no longer be accepted. |
| `external` | `Boolean` | Yes | Whether the invite was sent to an email address outside the workspace's verified domains. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `invitee` | `Hash` | No | The user who has accepted the invite. |
| `inviter` | `Hash` | No | The user who created the invitation. |
| `metadata` | `Object` | No | Extra metadata associated with the invite. |
| `organization` | `Hash` | No | The workspace that the invite is associated with. |
| `role` | `String` | Yes | The workspace role (admin, member, guest, or owner) that the invitee will receive upon accepting the invite. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.OrganizationInvite.create({
  "createdAt" => "example_createdAt", # Object
  "email" => "example_email", # String
  "external" => true, # Boolean
  "id" => "example_id", # String
  "role" => "example_role", # String
  "updatedAt" => "example_updatedAt", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.OrganizationInvite.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.OrganizationInvite.load({ "id" => "organization_invite_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.OrganizationInvite.remove({ "id" => "organization_invite_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.OrganizationInvite.update({
  "id" => "organization_invite_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OrganizationInviteEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OrganizationMetaEntity

```ruby
organization_meta = client.OrganizationMeta
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowedAuthServices` | `String` | Yes | Allowed authentication providers, empty array means all are allowed. |
| `region` | `String` | Yes | The region the workspace is hosted in. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.OrganizationMeta.load({ "url_key" => "url_key" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OrganizationMetaEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PasskeyLoginStartResponseEntity

```ruby
passkey_login_start_response = client.PasskeyLoginStartResponse
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `options` | `Object` | Yes | The passkey authentication options to pass to the WebAuthn API. |
| `success` | `Boolean` | Yes | Whether the operation was successful. |

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.PasskeyLoginStartResponse.update({
  "auth_id" => "auth_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PasskeyLoginStartResponseEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProjectEntity

```ruby
project = client.Project
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `autoArchivedAt` | `Object` | No | The time at which the project was automatically archived by the auto-pruning process. |
| `canceledAt` | `Object` | No | The time at which the project was moved into a canceled status. |
| `color` | `String` | Yes | The project's color as a HEX string. |
| `completedAt` | `Object` | No | The time at which the project was moved into a completed status. |
| `completedIssueCountHistory` | `Float` | Yes | The number of completed issues in the project at the end of each week since project creation. |
| `completedScopeHistory` | `Float` | Yes | The number of completed estimation points at the end of each week since project creation. |
| `content` | `String` | No | The project's content in markdown format. |
| `contentState` | `String` | No | [Internal] The project's content as YJS state. |
| `convertedFromIssue` | `Hash` | No | The issue that was converted into this project. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `creator` | `Hash` | No | The user who created the project. |
| `currentProgress` | `Object` | Yes | [INTERNAL] The current progress of the project, broken down by issue status category. |
| `description` | `String` | Yes | The short description of the project. |
| `documentContent` | `Hash` | No | The content of the project description. |
| `favorite` | `Hash` | No | The user's favorite associated with this project. |
| `frequencyResolution` | `String` | Yes | The resolution of the reminder frequency. |
| `health` | `String` | No | The overall health of the project, derived from the most recent project update. |
| `healthUpdatedAt` | `Object` | No | The time at which the project health was last updated, typically when a new project update is posted. |
| `icon` | `String` | No | The icon of the project. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `identifier` | `String` | No | [Internal] The human-readable identifier of the project. |
| `inProgressScopeHistory` | `Float` | Yes | The number of in-progress estimation points at the end of each week since project creation. |
| `integrationsSettings` | `Hash` | No | Settings for all integrations associated with that project. |
| `issueCountHistory` | `Float` | Yes | The total number of issues in the project at the end of each week since project creation. |
| `labelIds` | `String` | Yes | The IDs of the project labels associated with this project. |
| `lastAppliedTemplate` | `Hash` | No | The last template that was applied to this project. |
| `lastUpdate` | `Hash` | No | The most recent status update posted for this project. |
| `lead` | `Hash` | No | The user who leads the project. |
| `leadTeam` | `Hash` | No | [Internal] The team that leads the project. |
| `microsoftTeamsChannelId` | `String` | No | The ID of the Microsoft Teams channel connected to the project, if any. |
| `name` | `String` | Yes | The name of the project. |
| `previousIdentifiers` | `String` | Yes | [Internal] Identifiers (default and custom) that this project has previously held. |
| `priority` | `Integer` | Yes | The priority of the project. |
| `priorityLabel` | `String` | Yes | The priority of the project as a label. |
| `prioritySortOrder` | `Float` | Yes | The sort order for the project within the workspace when ordered by priority. |
| `progress` | `Float` | Yes | The overall progress of the project. |
| `progressHistory` | `Object` | Yes | [INTERNAL] The progress history of the project, tracking issue completion over time. |
| `projectUpdateRemindersPausedUntilAt` | `Object` | No | The time until which project update reminders are paused. |
| `resourceCount` | `Integer` | Yes | The number of resources associated with the project, including documents, external links, and attachments. |
| `scope` | `Float` | Yes | The overall scope (total estimate points) of the project. |
| `scopeHistory` | `Float` | Yes | The total scope (estimation points) of the project at the end of each week since project creation. |
| `slackChannelId` | `String` | No | The ID of the Slack channel connected to the project, if any. |
| `slugId` | `String` | Yes | The project's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `Float` | Yes | The sort order for the project within the workspace. |
| `startDate` | `Object` | No | The estimated start date of the project. |
| `startDateResolution` | `String` | No | The resolution of the project's start date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `startedAt` | `Object` | No | The time at which the project was moved into a started status. |
| `status` | `Hash` | No | The current project status. |
| `targetDate` | `Object` | No | The estimated completion date of the project. |
| `targetDateResolution` | `String` | No | The resolution of the project's estimated completion date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `trashed` | `Boolean` | No | A flag that indicates whether the project is in the trash bin. |
| `updateReminderFrequency` | `Float` | No | The frequency at which to prompt for updates. |
| `updateReminderFrequencyInWeeks` | `Float` | No | The n-weekly frequency at which to prompt for updates. |
| `updateRemindersDay` | `String` | No | The day at which to prompt for updates. |
| `updateRemindersHour` | `Float` | No | The hour at which to prompt for updates. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `String` | Yes | Project URL. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Project.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Project.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Project.load({ "id" => "project_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Project.remove({ "id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Project.update({
  "id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProjectEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProjectLabelEntity

```ruby
project_label = client.ProjectLabel
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `color` | `String` | Yes | The label's color as a HEX string (e.g., '#EB5757'). |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `creator` | `Hash` | No | The user who created the label. |
| `description` | `String` | No | The label's description. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `inheritedFrom` | `Hash` | No | [Internal] The original workspace or parent-team label that this label was inherited from. |
| `isGroup` | `Boolean` | Yes | Whether the label is a group. |
| `lastAppliedAt` | `Object` | No | The date when the label was last applied to an issue, project, or initiative. |
| `name` | `String` | Yes | The label's name. |
| `organization` | `Hash` | No | The workspace that the project label belongs to. |
| `parent` | `Hash` | No | The parent label group. |
| `retiredAt` | `Object` | No | [Internal] When the label was retired. |
| `retiredBy` | `Hash` | No | The user who retired the label. |
| `team` | `Hash` | No | [Internal] The team that the label is scoped to. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ProjectLabel.create({
  "color" => "example_color", # String
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "isGroup" => true, # Boolean
  "name" => "example_name", # String
  "updatedAt" => "example_updatedAt", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ProjectLabel.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ProjectLabel.load({ "id" => "project_label_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ProjectLabel.remove({ "id" => "project_label_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ProjectLabel.update({
  "id" => "project_label_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProjectLabelEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProjectMilestoneEntity

```ruby
project_milestone = client.ProjectMilestone
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `currentProgress` | `Object` | Yes | [Internal] The current progress of the milestone, broken down by issue status category. |
| `description` | `String` | No | The project milestone's description in markdown format. |
| `descriptionState` | `String` | No | [Internal] The project milestone's description as YJS state. |
| `documentContent` | `Hash` | No | The rich-text content of the milestone description. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `name` | `String` | Yes | The name of the project milestone. |
| `progress` | `Float` | Yes | The progress % of the project milestone. |
| `progressHistory` | `Object` | Yes | [Internal] The progress history of the milestone, tracking issue completion over time. |
| `project` | `Hash` | No | The project that this milestone belongs to. |
| `sortOrder` | `Float` | Yes | The order of the milestone in relation to other milestones within a project. |
| `status` | `String` | Yes | The status of the project milestone. |
| `targetDate` | `Object` | No | The planned completion date of the milestone. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ProjectMilestone.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ProjectMilestone.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ProjectMilestone.load({ "id" => "project_milestone_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ProjectMilestone.remove({ "id" => "project_milestone_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ProjectMilestone.update({
  "id" => "project_milestone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProjectMilestoneEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProjectMilestoneMoveProjectTeamEntity

```ruby
project_milestone_move_project_team = client.ProjectMilestoneMoveProjectTeam
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `projectId` | `String` | Yes | The project id |
| `teamIds` | `String` | Yes | The team ids for the project |

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ProjectMilestoneMoveProjectTeam.update({
  "id" => "id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProjectMilestoneMoveProjectTeamEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProjectRelationEntity

```ruby
project_relation = client.ProjectRelation
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `anchorType` | `String` | Yes | The type of anchor on the source project end of the relation, indicating whether it is anchored to the project itself or a specific milestone. |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `project` | `Hash` | No | The source project in the dependency relation. |
| `projectMilestone` | `Hash` | No | The specific milestone within the source project that the relation is anchored to. |
| `relatedAnchorType` | `String` | Yes | The type of anchor on the target project end of the relation, indicating whether it is anchored to the project itself or a specific milestone. |
| `relatedProject` | `Hash` | No | The target project in the dependency relation. |
| `relatedProjectMilestone` | `Hash` | No | The specific milestone within the target project that the relation is anchored to. |
| `type` | `String` | Yes | The type of dependency relationship from the project to the related project (e.g., blocks). |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `Hash` | No | The user who last created or modified the relation. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ProjectRelation.create({
  "anchorType" => "example_anchorType", # String
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "relatedAnchorType" => "example_relatedAnchorType", # String
  "type" => "example_type", # String
  "updatedAt" => "example_updatedAt", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ProjectRelation.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ProjectRelation.load({ "id" => "project_relation_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ProjectRelation.remove({ "id" => "project_relation_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ProjectRelation.update({
  "id" => "project_relation_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProjectRelationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProjectSearchResultEntity

```ruby
project_search_result = client.ProjectSearchResult
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `autoArchivedAt` | `Object` | No | The time at which the project was automatically archived by the auto-pruning process. |
| `canceledAt` | `Object` | No | The time at which the project was moved into a canceled status. |
| `color` | `String` | Yes | The project's color as a HEX string. |
| `completedAt` | `Object` | No | The time at which the project was moved into a completed status. |
| `completedIssueCountHistory` | `Float` | Yes | The number of completed issues in the project at the end of each week since project creation. |
| `completedScopeHistory` | `Float` | Yes | The number of completed estimation points at the end of each week since project creation. |
| `content` | `String` | No | The project's content in markdown format. |
| `contentState` | `String` | No | [Internal] The project's content as YJS state. |
| `convertedFromIssue` | `Hash` | No | The issue that was converted into this project. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `creator` | `Hash` | No | The user who created the project. |
| `currentProgress` | `Object` | Yes | [INTERNAL] The current progress of the project, broken down by issue status category. |
| `description` | `String` | Yes | The short description of the project. |
| `documentContent` | `Hash` | No | The content of the project description. |
| `favorite` | `Hash` | No | The user's favorite associated with this project. |
| `frequencyResolution` | `String` | Yes | The resolution of the reminder frequency. |
| `health` | `String` | No | The overall health of the project, derived from the most recent project update. |
| `healthUpdatedAt` | `Object` | No | The time at which the project health was last updated, typically when a new project update is posted. |
| `icon` | `String` | No | The icon of the project. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `identifier` | `String` | No | [Internal] The human-readable identifier of the project. |
| `inProgressScopeHistory` | `Float` | Yes | The number of in-progress estimation points at the end of each week since project creation. |
| `integrationsSettings` | `Hash` | No | Settings for all integrations associated with that project. |
| `issueCountHistory` | `Float` | Yes | The total number of issues in the project at the end of each week since project creation. |
| `labelIds` | `String` | Yes | The IDs of the project labels associated with this project. |
| `lastAppliedTemplate` | `Hash` | No | The last template that was applied to this project. |
| `lastUpdate` | `Hash` | No | The most recent status update posted for this project. |
| `lead` | `Hash` | No | The user who leads the project. |
| `leadTeam` | `Hash` | No | [Internal] The team that leads the project. |
| `metadata` | `Object` | Yes | Metadata related to search result. |
| `microsoftTeamsChannelId` | `String` | No | The ID of the Microsoft Teams channel connected to the project, if any. |
| `name` | `String` | Yes | The name of the project. |
| `previousIdentifiers` | `String` | Yes | [Internal] Identifiers (default and custom) that this project has previously held. |
| `priority` | `Integer` | Yes | The priority of the project. |
| `priorityLabel` | `String` | Yes | The priority of the project as a label. |
| `prioritySortOrder` | `Float` | Yes | The sort order for the project within the workspace when ordered by priority. |
| `progress` | `Float` | Yes | The overall progress of the project. |
| `progressHistory` | `Object` | Yes | [INTERNAL] The progress history of the project, tracking issue completion over time. |
| `projectUpdateRemindersPausedUntilAt` | `Object` | No | The time until which project update reminders are paused. |
| `resourceCount` | `Integer` | Yes | The number of resources associated with the project, including documents, external links, and attachments. |
| `scope` | `Float` | Yes | The overall scope (total estimate points) of the project. |
| `scopeHistory` | `Float` | Yes | The total scope (estimation points) of the project at the end of each week since project creation. |
| `slackChannelId` | `String` | No | The ID of the Slack channel connected to the project, if any. |
| `slugId` | `String` | Yes | The project's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `Float` | Yes | The sort order for the project within the workspace. |
| `startDate` | `Object` | No | The estimated start date of the project. |
| `startDateResolution` | `String` | No | The resolution of the project's start date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `startedAt` | `Object` | No | The time at which the project was moved into a started status. |
| `status` | `Hash` | No | The current project status. |
| `targetDate` | `Object` | No | The estimated completion date of the project. |
| `targetDateResolution` | `String` | No | The resolution of the project's estimated completion date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `trashed` | `Boolean` | No | A flag that indicates whether the project is in the trash bin. |
| `updateReminderFrequency` | `Float` | No | The frequency at which to prompt for updates. |
| `updateReminderFrequencyInWeeks` | `Float` | No | The n-weekly frequency at which to prompt for updates. |
| `updateRemindersDay` | `String` | No | The day at which to prompt for updates. |
| `updateRemindersHour` | `Float` | No | The hour at which to prompt for updates. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `String` | Yes | Project URL. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ProjectSearchResult.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProjectSearchResultEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProjectStatusEntity

```ruby
project_status = client.ProjectStatus
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `color` | `String` | Yes | The color of the status as a HEX string, used for display in the UI. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `description` | `String` | No | Description of the status. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `indefinite` | `Boolean` | Yes | Whether a project can remain in this status indefinitely. |
| `inheritedFrom` | `Hash` | No | [Internal] The original workspace or parent-team status that this status was inherited from. |
| `name` | `String` | Yes | The name of the status. |
| `position` | `Float` | Yes | The position of the status within its type group in the workspace's project flow. |
| `team` | `Hash` | No | [Internal] The team that the status is scoped to. |
| `type` | `String` | Yes | The category type of the project status (e.g., backlog, planned, started, paused, completed, canceled). |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ProjectStatus.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ProjectStatus.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ProjectStatus.load({ "id" => "project_status_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ProjectStatus.update({
  "id" => "project_status_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProjectStatusEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProjectUpdateEntity

```ruby
project_update = client.ProjectUpdate
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `body` | `String` | Yes | The update content in markdown format. |
| `bodyData` | `String` | Yes | [Internal] The content of the update as a Prosemirror document. |
| `commentCount` | `Integer` | Yes | Number of comments associated with the project update. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `diff` | `Object` | No | The diff between the current update and the previous one. |
| `diffMarkdown` | `String` | No | The diff between the current update and the previous one, formatted as markdown. |
| `editedAt` | `Object` | No | The time the update was edited. |
| `health` | `String` | Yes | The health of the project at the time this update was posted. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `infoSnapshot` | `Object` | No | [Internal] A snapshot of project properties at the time the update was posted, including team, milestone, and issue statistics. |
| `isDiffHidden` | `Boolean` | Yes | Whether the diff between this update and the previous one should be hidden in the UI. |
| `isStale` | `Boolean` | Yes | Whether the project update is stale. |
| `project` | `Hash` | No | The project that this status update was posted to. |
| `reactionData` | `Object` | Yes | Emoji reaction summary, grouped by emoji type. |
| `shortSummary` | `String` | No | A short AI-generated summary of the project update. |
| `slugId` | `String` | Yes | The update's unique URL slug. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `String` | Yes | The URL to the project update. |
| `user` | `Hash` | No | The user who wrote the update. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ProjectUpdate.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ProjectUpdate.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ProjectUpdate.load({ "id" => "project_update_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ProjectUpdate.remove({ "id" => "project_update_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ProjectUpdate.update({
  "id" => "project_update_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProjectUpdateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PushSubscriptionEntity

```ruby
push_subscription = client.PushSubscription
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.PushSubscription.create({
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "updatedAt" => "example_updatedAt", # Object
})
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.PushSubscription.remove({ "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PushSubscriptionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ReactionEntity

```ruby
reaction = client.Reaction
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `comment` | `Hash` | No | The comment that the reaction is associated with. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `emoji` | `String` | Yes | The name of the emoji used for this reaction. |
| `externalUser` | `Hash` | No | The external user that created the reaction through an integration. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `initiativeUpdate` | `Hash` | No | The initiative update that the reaction is associated with. |
| `issue` | `Hash` | No | The issue that the reaction is associated with. |
| `post` | `Hash` | No | The post that the reaction is associated with. |
| `projectUpdate` | `Hash` | No | The project update that the reaction is associated with. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `Hash` | No | The workspace user that created the reaction. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Reaction.create({
  "createdAt" => "example_createdAt", # Object
  "emoji" => "example_emoji", # String
  "id" => "example_id", # String
  "updatedAt" => "example_updatedAt", # Object
})
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Reaction.remove({ "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ReactionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ReleaseEntity

```ruby
release = client.Release
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `autoArchivedAt` | `Object` | No | The time at which the release was automatically archived by the auto pruning process. |
| `canceledAt` | `Object` | No | The time at which the release was canceled. |
| `commitSha` | `String` | No | The Git commit SHA associated with this release. |
| `completedAt` | `Object` | No | The time at which the release was completed. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `creator` | `Hash` | No | The user who created the release. |
| `currentProgress` | `Object` | Yes | The current progress summary for the release, including counts of issues by workflow state type (e.g., completed, in progress, unstarted). |
| `description` | `String` | No | The description of the release in plain text or markdown. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `issueCount` | `Integer` | Yes | Number of issues associated with the release. |
| `name` | `String` | Yes | The name of the release. |
| `pipeline` | `Hash` | No | The release pipeline that this release belongs to. |
| `progressHistory` | `Object` | Yes | The historical progress snapshots for the release, tracking how issue completion has evolved over time. |
| `releaseNote` | `Hash` | No | [Internal] The primary release note covering this release. |
| `slugId` | `String` | Yes | The release's unique URL slug, used to construct human-readable URLs for the release. |
| `stage` | `Hash` | No | The current stage of the release within its pipeline (e.g., Planned, In Progress, Completed, Canceled). |
| `startDate` | `Object` | No | The estimated start date of the release. |
| `startedAt` | `Object` | No | The time at which the release first entered a started stage. |
| `targetDate` | `Object` | No | The estimated completion date of the release. |
| `trashed` | `Boolean` | No | A flag that indicates whether the release is in the trash bin. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `String` | Yes | The URL to the release page in the Linear app. |
| `version` | `String` | No | The version identifier for this release (e.g., 'v1.2.3' or a short commit hash). |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Release.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Release.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Release.load({ "id" => "release_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Release.remove({ "id" => "release_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Release.update({
  "id" => "release_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ReleaseEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ReleaseNoteEntity

```ruby
release_note = client.ReleaseNote
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `documentContent` | `Hash` | No | Document content backing the release note body. |
| `firstRelease` | `Hash` | No | The earliest release covered by this note. |
| `generationStatus` | `String` | No | Generation status when these release notes are being auto-generated: `pending` while the LLM call is running, `completed` once it lands. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `lastRelease` | `Hash` | No | The most recent release covered by this note. |
| `pipeline` | `Hash` | No | The release pipeline that this note belongs to. |
| `releaseCount` | `Integer` | Yes | The number of releases covered by this note. |
| `slugId` | `String` | Yes | The release note's unique URL slug, used to construct human-readable URLs for the note. |
| `title` | `String` | No | User-supplied title for the release note. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `String` | Yes | The URL to the release note page in the Linear app. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ReleaseNote.create({
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "releaseCount" => 1, # Integer
  "slugId" => "example_slugId", # String
  "updatedAt" => "example_updatedAt", # Object
  "url" => "example_url", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ReleaseNote.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ReleaseNote.load({ "id" => "release_note_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ReleaseNote.remove({ "id" => "release_note_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ReleaseNote.update({
  "id" => "release_note_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ReleaseNoteEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ReleasePipelineEntity

```ruby
release_pipeline = client.ReleasePipeline
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approximateReleaseCount` | `Integer` | Yes | The approximate number of non-archived releases in this pipeline. |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `autoGenerateReleaseNotesOnCompletion` | `Boolean` | Yes | Whether to automatically generate a release note when a release is completed. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `includePathPatterns` | `String` | Yes | Glob patterns to filter commits by file path. |
| `isProduction` | `Boolean` | Yes | Whether this pipeline targets a production environment. |
| `latestReleaseNote` | `Hash` | No | The release note in this pipeline whose covered range ends with the most recent release. |
| `name` | `String` | Yes | The name of the pipeline. |
| `releaseNoteTemplate` | `Hash` | No | The document template used to define the release notes format for this pipeline. |
| `rolloverIssuesOnCompletion` | `Boolean` | Yes | Whether completing a scheduled release moves its open issues to the next release. |
| `slugId` | `String` | Yes | The pipeline's unique slug identifier, used in URLs and for lookup by human-readable identifier instead of UUID. |
| `trashed` | `Boolean` | No | A flag that indicates whether the pipeline is in the trash bin. |
| `type` | `String` | Yes | The type of the pipeline, which determines how releases are created and managed. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `String` | Yes | The URL to the release pipeline's releases list in the Linear app. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ReleasePipeline.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ReleasePipeline.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ReleasePipeline.load({ "id" => "release_pipeline_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ReleasePipeline.remove({ "id" => "release_pipeline_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ReleasePipeline.update({
  "id" => "release_pipeline_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ReleasePipelineEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ReleaseStageEntity

```ruby
release_stage = client.ReleaseStage
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `color` | `String` | Yes | The display color of the stage as a HEX string (e.g., '#0f783c'), used for visual representation in the UI. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `frozen` | `Boolean` | Yes | Whether this stage is frozen. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `name` | `String` | Yes | The name of the stage. |
| `pipeline` | `Hash` | No | The release pipeline that this stage belongs to. |
| `position` | `Float` | Yes | The position of the stage within its pipeline, used for ordering stages in the UI. |
| `type` | `String` | Yes | The lifecycle type of the stage (planned, started, completed, or canceled). |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ReleaseStage.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ReleaseStage.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ReleaseStage.load({ "id" => "release_stage_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ReleaseStage.update({
  "id" => "release_stage_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ReleaseStageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RoadmapEntity

```ruby
roadmap = client.Roadmap
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `color` | `String` | No | The roadmap's color. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `creator` | `Hash` | No | The user who created the roadmap. |
| `description` | `String` | No | The description of the roadmap. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `name` | `String` | Yes | The name of the roadmap. |
| `organization` | `Hash` | No | The workspace of the roadmap. |
| `owner` | `Hash` | No | The user who owns the roadmap. |
| `slugId` | `String` | Yes | The roadmap's unique URL slug. |
| `sortOrder` | `Float` | Yes | The sort order of the roadmap within the workspace. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `String` | Yes | The canonical url for the roadmap. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Roadmap.create({
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "name" => "example_name", # String
  "slugId" => "example_slugId", # String
  "sortOrder" => 1, # Float
  "updatedAt" => "example_updatedAt", # Object
  "url" => "example_url", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Roadmap.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Roadmap.load({ "id" => "roadmap_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Roadmap.remove({ "id" => "roadmap_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Roadmap.update({
  "id" => "roadmap_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RoadmapEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RoadmapToProjectEntity

```ruby
roadmap_to_project = client.RoadmapToProject
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `project` | `Hash` | No | The project that the roadmap is associated with. |
| `roadmap` | `Hash` | No | The roadmap that the project is associated with. |
| `sortOrder` | `String` | Yes | The sort order of the project within the roadmap. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.RoadmapToProject.create({
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "sortOrder" => "example_sortOrder", # String
  "updatedAt" => "example_updatedAt", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.RoadmapToProject.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.RoadmapToProject.load({ "id" => "roadmap_to_project_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.RoadmapToProject.remove({ "id" => "roadmap_to_project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.RoadmapToProject.update({
  "id" => "roadmap_to_project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RoadmapToProjectEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SlaConfigurationEntity

```ruby
sla_configuration = client.SlaConfiguration
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conditions` | `Object` | Yes | The workflow conditions that determine when this SLA rule applies. |
| `id` | `String` | Yes | The identifier of the SLA rule. |
| `name` | `String` | Yes | The name of the SLA rule. |
| `removesSla` | `Boolean` | Yes | Whether the rule removes an SLA instead of setting one. |
| `sla` | `Float` | No | The SLA value configured by the rule, expressed in milliseconds or business days depending on the day-count type. |
| `slaType` | `String` | No | The SLA type used when the rule sets an SLA. |
| `startMode` | `String` | No | When SLA timing begins. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.SlaConfiguration.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SlaConfigurationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SsoUrlFromEmailResponseEntity

```ruby
sso_url_from_email_response = client.SsoUrlFromEmailResponse
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `samlSsoUrl` | `String` | Yes | SAML SSO sign-in URL. |
| `success` | `Boolean` | Yes | Whether the operation was successful. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.SsoUrlFromEmailResponse.load({ "email" => "email", "type" => "type" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SsoUrlFromEmailResponseEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TeamEntity

```ruby
team = client.Team
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeCycle` | `Hash` | No | Team's currently active cycle. |
| `aiDiscussionSummariesEnabled` | `Boolean` | Yes | Whether to enable AI discussion summaries for issues in this team. |
| `aiThreadSummariesEnabled` | `Boolean` | Yes | Whether to enable resolved thread AI summaries. |
| `allMembersCanJoin` | `Boolean` | No | Whether all members in the workspace can join the team. |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `autoArchivePeriod` | `Float` | Yes | Period after which automatically closed, completed, and duplicate issues are automatically archived in months. |
| `autoCloseChildIssues` | `Boolean` | No | Whether child issues should automatically close when their parent issue is closed |
| `autoCloseParentIssues` | `Boolean` | No | Whether parent issues should automatically close when all child issues are closed |
| `autoClosePeriod` | `Float` | No | Period after which issues are automatically closed in months. |
| `autoCloseStateId` | `String` | No | The canceled workflow state which auto closed issues will be set to. |
| `color` | `String` | No | The team's color. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `currentProgress` | `Object` | Yes | [Internal] The current progress of the team. |
| `cycleCalenderUrl` | `String` | Yes | Calendar feed URL (iCal) for cycles. |
| `cycleCooldownTime` | `Float` | Yes | The cooldown time after each cycle in weeks. |
| `cycleDuration` | `Float` | Yes | The duration of each cycle in weeks. |
| `cycleIssueAutoAssignCompleted` | `Boolean` | Yes | Auto assign completed issues to current cycle. |
| `cycleIssueAutoAssignStarted` | `Boolean` | Yes | Auto assign started issues to current cycle. |
| `cycleLockToActive` | `Boolean` | Yes | Auto assign issues to current cycle if in active status. |
| `cycleStartDay` | `Float` | Yes | The day of the week that a new cycle starts (0 = Sunday, 1 = Monday, ..., 6 = Saturday). |
| `cyclesEnabled` | `Boolean` | Yes | Whether the team uses cycles for sprint-style issue management. |
| `defaultIssueEstimate` | `Float` | Yes | What to use as a default estimate for unestimated issues. |
| `defaultIssueState` | `Hash` | No | The default workflow state into which issues are set when they are opened by team members. |
| `defaultProjectTemplate` | `Hash` | No | The default template to use for new projects created for the team. |
| `defaultTemplateForMembers` | `Hash` | No | The default template to use for new issues created by members of the team. |
| `defaultTemplateForNonMembers` | `Hash` | No | The default template to use for new issues created by non-members of the team. |
| `description` | `String` | No | The team's description. |
| `displayName` | `String` | Yes | The name of the team including its parent team name if it has one. |
| `groupIssueHistory` | `Boolean` | Yes | Whether to group recent issue history entries. |
| `icon` | `String` | No | The icon of the team. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `inheritIssueEstimation` | `Boolean` | Yes | Whether the team should inherit its estimation settings from its parent. |
| `inheritProjectStatuses` | `Boolean` | Yes | [Internal] Whether the team should inherit its project statuses from its parent team, or from the workspace when it has no parent. |
| `inheritSlackAutoCreateProjectChannel` | `Boolean` | Yes | [Internal] Whether the team should inherit its Slack auto-create project channel setting from its parent. |
| `inheritWorkflowStatuses` | `Boolean` | Yes | Whether the team should inherit its workflow statuses from its parent. |
| `initiativesEnabled` | `Boolean` | Yes | Whether team initiatives are enabled and shown in the team's sidebar. |
| `integrationsSettings` | `Hash` | No | Settings for all integrations associated with that team. |
| `issueCount` | `Integer` | Yes | The total number of issues in the team. |
| `issueEstimationAllowZero` | `Boolean` | Yes | Whether to allow zeros in issues estimates. |
| `issueEstimationExtended` | `Boolean` | Yes | Whether to add additional points to the estimate scale. |
| `issueEstimationType` | `String` | Yes | The issue estimation type to use. |
| `joinByDefault` | `Boolean` | No | [Internal] Whether new users should join this team by default. |
| `key` | `String` | Yes | The team's unique key, used as a prefix in issue identifiers (e.g., 'ENG' in 'ENG-123') and in URLs. |
| `ledInitiativeCount` | `Integer` | Yes | The number of initiatives led by this team that would be deleted along with it. |
| `name` | `String` | Yes | The team's name. |
| `organization` | `Hash` | No | The workspace that the team belongs to. |
| `parent` | `Hash` | No | The team's parent team. |
| `progressHistory` | `Object` | Yes | [Internal] The progress history of the team. |
| `requirePriorityToLeaveTriage` | `Boolean` | Yes | Whether an issue needs to have a priority set before leaving triage. |
| `restrictedBy` | `Hash` | No | [Internal] For restricted teams, the enclosing private team that forms the visibility boundary. |
| `restrictedById` | `String` | No | [Internal] The identifier of the enclosing private team that forms the visibility boundary for restricted teams. |
| `retiredAt` | `Object` | No | The time at which the team was retired. |
| `scimGroupName` | `String` | No | The SCIM group name for the team. |
| `scimManaged` | `Boolean` | Yes | Whether the team is managed by a SCIM integration. |
| `securitySettings` | `Object` | Yes | Security settings for the team, including role-based restrictions for issue sharing, label management, member management, template management, and agent skills. |
| `setIssueSortOrderOnStateChange` | `String` | Yes | Where to move issues when changing state. |
| `slackAutoCreateProjectChannel` | `Boolean` | No | [Internal] Whether to automatically create a Slack channel when a new project is created in this team. |
| `timezone` | `String` | Yes | The timezone of the team. |
| `triageEnabled` | `Boolean` | Yes | Whether triage mode is enabled for the team. |
| `triageIssueState` | `Hash` | No | The workflow state into which issues are set when they are opened by non-team members or integrations if triage is enabled. |
| `triageResponsibility` | `Hash` | No | Team's triage responsibility. |
| `upcomingCycleCount` | `Float` | Yes | How many upcoming cycles to create. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |
| `visibility` | `String` | Yes | The visibility of the team. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Team.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Team.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Team.load({ "id" => "team_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Team.remove({ "id" => "team_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Team.update({
  "id" => "team_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TeamEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TeamMembershipEntity

```ruby
team_membership = client.TeamMembership
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `owner` | `Boolean` | Yes | Whether the user is an owner of the team. |
| `sortOrder` | `Float` | Yes | The sort order of this team in the user's personal team list. |
| `team` | `Hash` | No | The team that the membership is associated with. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `Hash` | No | The user that the membership is associated with. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.TeamMembership.create({
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "owner" => true, # Boolean
  "sortOrder" => 1, # Float
  "updatedAt" => "example_updatedAt", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TeamMembership.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TeamMembership.load({ "id" => "team_membership_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.TeamMembership.remove({ "id" => "team_membership_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.TeamMembership.update({
  "id" => "team_membership_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TeamMembershipEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TemplateEntity

```ruby
template = client.Template
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `color` | `String` | No | The hex color of the template icon. |
| `content` | `String` | No | The template's content in markdown format: the body it pre-fills on the entity it creates. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `creator` | `Hash` | No | The user who created the template. |
| `description` | `String` | No | A description of what the template is used for. |
| `hasFormFields` | `Boolean` | Yes | [Internal] Whether the template has form fields |
| `icon` | `String` | No | The icon of the template, either a decorative icon type or an emoji string. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `inheritedFrom` | `Hash` | No | The parent team template this template was inherited from. |
| `lastAppliedAt` | `Object` | No | The date when the template was last applied to create or update an entity. |
| `lastUpdatedBy` | `Hash` | No | The user who last updated the template. |
| `name` | `String` | Yes | The name of the template. |
| `organization` | `Hash` | No | The workspace that owns this template. |
| `pipeline` | `Hash` | No | The release pipeline this template is bound to. |
| `sortOrder` | `Float` | Yes | The sort order of the template within the templates list. |
| `team` | `Hash` | No | The team that the template is associated with. |
| `templateData` | `Object` | Yes | The template data as a JSON-encoded string containing the pre-filled attributes for the entity type (e.g., issue fields, project configuration, or document content). |
| `type` | `String` | Yes | The entity type this template is for, such as 'issue', 'project', or 'document'. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Template.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Template.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Template.load({ "id" => "template_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Template.remove({ "id" => "template_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Template.update({
  "id" => "template_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TemplateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TimeScheduleEntity

```ruby
time_schedule = client.TimeSchedule
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `externalId` | `String` | No | The identifier of the external schedule. |
| `externalUrl` | `String` | No | The URL to the external schedule. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `integration` | `Hash` | No | The identifier of the Linear integration populating the schedule. |
| `name` | `String` | Yes | The name of the schedule. |
| `organization` | `Hash` | No | The workspace of the schedule. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.TimeSchedule.create({
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "name" => "example_name", # String
  "updatedAt" => "example_updatedAt", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TimeSchedule.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TimeSchedule.load({ "id" => "time_schedule_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.TimeSchedule.remove({ "id" => "time_schedule_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.TimeSchedule.update({
  "id" => "time_schedule_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TimeScheduleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TriageResponsibilityEntity

```ruby
triage_responsibility = client.TriageResponsibility
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `String` | Yes | The action to take when an issue is added to triage. |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `currentUser` | `Hash` | No | The user currently responsible for triage. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `team` | `Hash` | No | The team to which the triage responsibility belongs to. |
| `timeSchedule` | `Hash` | No | The time schedule used for scheduling. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.TriageResponsibility.create({
  "action" => "example_action", # String
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "updatedAt" => "example_updatedAt", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TriageResponsibility.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TriageResponsibility.load({ "id" => "triage_responsibility_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.TriageResponsibility.remove({ "id" => "triage_responsibility_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.TriageResponsibility.update({
  "id" => "triage_responsibility_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TriageResponsibilityEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UploadFileEntity

```ruby
upload_file = client.UploadFile
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assetUrl` | `String` | Yes | The permanent asset URL where the file will be accessible after upload. |
| `contentType` | `String` | Yes | The content type. |
| `filename` | `String` | Yes | The filename. |
| `metaData` | `Object` | No | Optional metadata associated with the upload, such as the related issue or comment ID. |
| `size` | `Integer` | Yes | The size of the uploaded file. |
| `uploadUrl` | `String` | Yes | The pre-signed URL to which the file should be uploaded via a PUT request. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.UploadFile.create({
  "content_type" => "example_content_type", # String
  "filename" => "example_filename", # String
  "size" => 1, # Integer
  "assetUrl" => "example_assetUrl", # String
  "contentType" => "example_contentType", # String
  "uploadUrl" => "example_uploadUrl", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UploadFileEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UsageAlertEntity

```ruby
usage_alert = client.UsageAlert
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `metadata` | `Object` | Yes | Type-specific snapshot captured when the alert was triggered, keyed by the alert type — for example the credit balance and threshold for a lowBalance alert. |
| `resolvedAt` | `Object` | No | The time when the usage alert was resolved or archived. |
| `type` | `String` | Yes | The kind of usage alert that was triggered. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.UsageAlert.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.UsageAlert.load({ "id" => "usage_alert_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UsageAlertEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UserEntity

```ruby
user = client.User
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `Boolean` | Yes | Whether the user account is active or disabled (suspended). |
| `admin` | `Boolean` | Yes | Whether the user is a workspace administrator. |
| `app` | `Boolean` | Yes | Whether the user is an app. |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `avatarBackgroundColor` | `String` | Yes | The background color of the avatar for users without set avatar. |
| `avatarUrl` | `String` | No | An URL to the user's avatar image. |
| `calendarHash` | `String` | No | [DEPRECATED] Hash for the user to be used in calendar URLs. |
| `canAccessAnyPublicTeam` | `Boolean` | Yes | Whether this user can access any public team in the workspace. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `createdIssueCount` | `Integer` | Yes | Number of issues created. |
| `description` | `String` | No | A short description of the user, such as their title or a brief bio. |
| `disableReason` | `String` | No | The reason why the user account is disabled. |
| `displayName` | `String` | Yes | The user's display (nick) name. |
| `email` | `String` | Yes | The user's email address. |
| `gitHubUserId` | `String` | No | The user's GitHub user ID. |
| `guest` | `Boolean` | Yes | Whether the user is a guest in the workspace and limited to accessing a subset of teams. |
| `hasGitHubCodeAccess` | `Boolean` | Yes | [Internal] Whether this user can access GitHub source code through Linear. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `identityProvider` | `Hash` | No | [INTERNAL] Identity provider the user is managed by. |
| `initials` | `String` | Yes | The initials of the user. |
| `isAssignable` | `Boolean` | Yes | Whether the user can be assigned to issues. |
| `isMe` | `Boolean` | Yes | Whether the user is the currently authenticated user. |
| `isMentionable` | `Boolean` | Yes | Whether the user is mentionable. |
| `lastSeen` | `Object` | No | The last time the user was seen online. |
| `name` | `String` | Yes | The user's full name. |
| `organization` | `Hash` | No | The workspace that the user belongs to. |
| `owner` | `Boolean` | Yes | Whether the user is a workspace owner, which is the highest permission level. |
| `statusEmoji` | `String` | No | The emoji representing the user's current status. |
| `statusLabel` | `String` | No | The text label of the user's current status. |
| `statusUntilAt` | `Object` | No | The date and time at which the user's current status should be automatically cleared. |
| `supportsAgentSessions` | `Boolean` | Yes | Whether this agent user supports agent sessions. |
| `timezone` | `String` | No | The local timezone of the user. |
| `title` | `String` | No | The user's job title. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `String` | Yes | User's profile URL. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.User.create({
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.User.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.User.load({ "id" => "user_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.User.update({
  "id" => "user_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UserEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UserSettingEntity

```ruby
user_setting = client.UserSetting
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `autoAssignToSelf` | `Boolean` | Yes | Whether to auto-assign newly created issues to the current user by default. |
| `calendarHash` | `String` | No | A unique hash for the user, used to construct secure calendar subscription URLs. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `feedLastSeenTime` | `Object` | No | The user's last seen time for the pulse feed. |
| `feedSummarySchedule` | `String` | No | The user's preferred schedule for receiving feed summary digests. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `pullRequestMergeStrategyPreference` | `String` | No | [Internal] The user's preferred merge method for pull requests. |
| `showFullUserNames` | `Boolean` | Yes | Whether to show full user names instead of display names. |
| `subscribedToChangelog` | `Boolean` | Yes | Whether this user is subscribed to receive changelog emails about Linear product updates. |
| `subscribedToDPA` | `Boolean` | Yes | Whether this user is subscribed to receive Data Processing Agreement (DPA) related emails. |
| `subscribedToInviteAccepted` | `Boolean` | Yes | Whether this user is subscribed to receive email notifications when their workspace invitations are accepted. |
| `subscribedToPrivacyLegalUpdates` | `Boolean` | Yes | Whether this user is subscribed to receive emails about privacy policy and legal updates. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `Hash` | No | The user that these settings belong to. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.UserSetting.create({
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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.UserSetting.load({ "id" => "user_setting_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.UserSetting.update({
  "id" => "user_setting_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UserSettingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ViewPreferenceEntity

```ruby
view_preference = client.ViewPreference
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `type` | `String` | Yes | The type of view preferences: "organization" for workspace-wide defaults or "user" for personal overrides. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |
| `viewType` | `String` | Yes | The type of view these preferences apply to, such as board, cycle, project, customView, myIssues, etc. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ViewPreference.create({
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "type" => "example_type", # String
  "updatedAt" => "example_updatedAt", # Object
  "viewType" => "example_viewType", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ViewPreference.load({ "view_type" => "view_type" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ViewPreference.remove({ "id" => "id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ViewPreference.update({
  "id" => "id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ViewPreferenceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WebhookEntity

```ruby
webhook = client.Webhook
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allPublicTeams` | `Boolean` | Yes | Whether the webhook receives events from all public (non-private) teams in the organization, including teams created after the webhook was set up. |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `creator` | `Hash` | No | The user who created the webhook. |
| `enabled` | `Boolean` | Yes | Whether the webhook is enabled. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `label` | `String` | No | A human-readable label for the webhook, used for identification in the UI. |
| `resourceTypes` | `String` | Yes | The resource types this webhook is subscribed to (e.g., 'Issue', 'Comment', 'Project', 'Cycle'). |
| `secret` | `String` | No | A secret token used to sign webhook payloads with HMAC-SHA256, allowing the recipient to verify that the payload originated from Linear and was not tampered with. |
| `team` | `Hash` | No | The single team that the webhook is scoped to. |
| `teamIds` | `String` | No | [INTERNAL] An array of team IDs that the webhook is subscribed to. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `String` | No | The destination URL where webhook payloads will be sent via HTTP POST. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Webhook.create({
  "allPublicTeams" => true, # Boolean
  "createdAt" => "example_createdAt", # Object
  "enabled" => true, # Boolean
  "id" => "example_id", # String
  "resourceTypes" => "example_resourceTypes", # String
  "updatedAt" => "example_updatedAt", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Webhook.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Webhook.load({ "id" => "webhook_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Webhook.remove({ "id" => "webhook_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Webhook.update({
  "id" => "webhook_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WebhookFailureEventEntity

```ruby
webhook_failure_event = client.WebhookFailureEvent
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `executionId` | `String` | Yes | A stable identifier for the webhook delivery attempt. |
| `httpStatus` | `Float` | No | The HTTP status code returned by the webhook recipient. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `responseOrError` | `String` | No | The HTTP response body returned by the recipient, or the error message if the request failed before receiving a response. |
| `url` | `String` | Yes | The URL that the webhook was trying to push to. |
| `webhook` | `Hash` | No | The webhook that this failure event is associated with. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.WebhookFailureEvent.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WebhookFailureEventEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkflowStateEntity

```ruby
workflow_state = client.WorkflowState
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Object` | No | The time at which the entity was archived. |
| `color` | `String` | Yes | The state's UI color as a HEX string. |
| `createdAt` | `Object` | Yes | The time at which the entity was created. |
| `description` | `String` | No | Description of the state. |
| `id` | `String` | Yes | The unique identifier of the entity. |
| `inheritedFrom` | `Hash` | No | The parent team's workflow state that this state was inherited from. |
| `name` | `String` | Yes | The state's human-readable name (e.g., 'In Progress', 'Done', 'Backlog'). |
| `position` | `Float` | Yes | The position of the state in the team's workflow. |
| `team` | `Hash` | No | The team that this workflow state belongs to. |
| `type` | `String` | Yes | The type of the state. |
| `updatedAt` | `Object` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.WorkflowState.create({
  "color" => "example_color", # String
  "createdAt" => "example_createdAt", # Object
  "id" => "example_id", # String
  "name" => "example_name", # String
  "position" => 1, # Float
  "type" => "example_type", # String
  "updatedAt" => "example_updatedAt", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.WorkflowState.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.WorkflowState.load({ "id" => "workflow_state_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.WorkflowState.update({
  "id" => "workflow_state_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkflowStateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `debug` | 0.0.1 | Request/response capture ring buffer for debugging |
| `idempotency` | 0.0.1 | Idempotency keys for safe retries of mutating operations |
| `metrics` | 0.0.1 | Statistics capture: per-operation counters and latency |
| `paging` | 0.0.1 | Pagination signals for list operations |
| `ratelimit` | 0.0.1 | Client-side rate limiting via a token bucket |
| `retry` | 0.0.1 | Automatic retry of transient failures with exponential backoff |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |
| `timeout` | 0.0.1 | Per-request timeout with transport abort |


Features are activated via the `feature` option:

```ruby
client = LinearSDK.new({
  "feature" => {
    "debug" => { "active" => true },
    "idempotency" => { "active" => true },
    "metrics" => { "active" => true },
    "paging" => { "active" => true },
    "ratelimit" => { "active" => true },
    "retry" => { "active" => true },
    "test" => { "active" => true },
    "timeout" => { "active" => true },
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

Request/response capture ring buffer for debugging.

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

Idempotency keys for safe retries of mutating operations.

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

Statistics capture: per-operation counters and latency.

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

Pagination signals for list operations.

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

Client-side rate limiting via a token bucket.

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

Automatic retry of transient failures with exponential backoff.

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

In-memory mock transport for testing without a live server.

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

Per-request timeout with transport abort.

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

