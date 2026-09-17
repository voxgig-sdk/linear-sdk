# Linear Golang SDK Reference

Complete API reference for the Linear Golang SDK.


## LinearSDK

### Constructor

```go
func NewLinearSDK(options map[string]any) *LinearSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *LinearSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *LinearSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `AccessKeyRelease(data map[string]any) LinearEntity`

Create a new `AccessKeyRelease` entity instance. Pass `nil` for no initial data.

#### `AccessKeyReleasePipeline(data map[string]any) LinearEntity`

Create a new `AccessKeyReleasePipeline` entity instance. Pass `nil` for no initial data.

#### `AgentActivity(data map[string]any) LinearEntity`

Create a new `AgentActivity` entity instance. Pass `nil` for no initial data.

#### `AgentSession(data map[string]any) LinearEntity`

Create a new `AgentSession` entity instance. Pass `nil` for no initial data.

#### `AgentSkill(data map[string]any) LinearEntity`

Create a new `AgentSkill` entity instance. Pass `nil` for no initial data.

#### `Application(data map[string]any) LinearEntity`

Create a new `Application` entity instance. Pass `nil` for no initial data.

#### `Attachment(data map[string]any) LinearEntity`

Create a new `Attachment` entity instance. Pass `nil` for no initial data.

#### `AuditEntry(data map[string]any) LinearEntity`

Create a new `AuditEntry` entity instance. Pass `nil` for no initial data.

#### `AuditEntryType(data map[string]any) LinearEntity`

Create a new `AuditEntryType` entity instance. Pass `nil` for no initial data.

#### `AuthResolverResponse(data map[string]any) LinearEntity`

Create a new `AuthResolverResponse` entity instance. Pass `nil` for no initial data.

#### `AuthenticationSessionResponse(data map[string]any) LinearEntity`

Create a new `AuthenticationSessionResponse` entity instance. Pass `nil` for no initial data.

#### `Comment(data map[string]any) LinearEntity`

Create a new `Comment` entity instance. Pass `nil` for no initial data.

#### `CreateOrJoinOrganizationResponse(data map[string]any) LinearEntity`

Create a new `CreateOrJoinOrganizationResponse` entity instance. Pass `nil` for no initial data.

#### `CustomView(data map[string]any) LinearEntity`

Create a new `CustomView` entity instance. Pass `nil` for no initial data.

#### `Customer(data map[string]any) LinearEntity`

Create a new `Customer` entity instance. Pass `nil` for no initial data.

#### `CustomerNeed(data map[string]any) LinearEntity`

Create a new `CustomerNeed` entity instance. Pass `nil` for no initial data.

#### `CustomerStatus(data map[string]any) LinearEntity`

Create a new `CustomerStatus` entity instance. Pass `nil` for no initial data.

#### `CustomerTier(data map[string]any) LinearEntity`

Create a new `CustomerTier` entity instance. Pass `nil` for no initial data.

#### `Cycle(data map[string]any) LinearEntity`

Create a new `Cycle` entity instance. Pass `nil` for no initial data.

#### `Diff(data map[string]any) LinearEntity`

Create a new `Diff` entity instance. Pass `nil` for no initial data.

#### `Document(data map[string]any) LinearEntity`

Create a new `Document` entity instance. Pass `nil` for no initial data.

#### `DocumentSearchResult(data map[string]any) LinearEntity`

Create a new `DocumentSearchResult` entity instance. Pass `nil` for no initial data.

#### `EmailIntakeAddress(data map[string]any) LinearEntity`

Create a new `EmailIntakeAddress` entity instance. Pass `nil` for no initial data.

#### `EmailUserAccountAuthChallengeResponse(data map[string]any) LinearEntity`

Create a new `EmailUserAccountAuthChallengeResponse` entity instance. Pass `nil` for no initial data.

#### `Emoji(data map[string]any) LinearEntity`

Create a new `Emoji` entity instance. Pass `nil` for no initial data.

#### `EntityExternalLink(data map[string]any) LinearEntity`

Create a new `EntityExternalLink` entity instance. Pass `nil` for no initial data.

#### `ExternalUser(data map[string]any) LinearEntity`

Create a new `ExternalUser` entity instance. Pass `nil` for no initial data.

#### `Favorite(data map[string]any) LinearEntity`

Create a new `Favorite` entity instance. Pass `nil` for no initial data.

#### `GitAutomationState(data map[string]any) LinearEntity`

Create a new `GitAutomationState` entity instance. Pass `nil` for no initial data.

#### `GitAutomationTargetBranch(data map[string]any) LinearEntity`

Create a new `GitAutomationTargetBranch` entity instance. Pass `nil` for no initial data.

#### `GitHubIntegrationConnectDetail(data map[string]any) LinearEntity`

Create a new `GitHubIntegrationConnectDetail` entity instance. Pass `nil` for no initial data.

#### `Initiative(data map[string]any) LinearEntity`

Create a new `Initiative` entity instance. Pass `nil` for no initial data.

#### `InitiativeLabel(data map[string]any) LinearEntity`

Create a new `InitiativeLabel` entity instance. Pass `nil` for no initial data.

#### `InitiativeLeadTeamChangeImpact(data map[string]any) LinearEntity`

Create a new `InitiativeLeadTeamChangeImpact` entity instance. Pass `nil` for no initial data.

#### `InitiativeRelation(data map[string]any) LinearEntity`

Create a new `InitiativeRelation` entity instance. Pass `nil` for no initial data.

#### `InitiativeToProject(data map[string]any) LinearEntity`

Create a new `InitiativeToProject` entity instance. Pass `nil` for no initial data.

#### `InitiativeUpdate(data map[string]any) LinearEntity`

Create a new `InitiativeUpdate` entity instance. Pass `nil` for no initial data.

#### `Integration(data map[string]any) LinearEntity`

Create a new `Integration` entity instance. Pass `nil` for no initial data.

#### `IntegrationTemplate(data map[string]any) LinearEntity`

Create a new `IntegrationTemplate` entity instance. Pass `nil` for no initial data.

#### `IntegrationsSetting(data map[string]any) LinearEntity`

Create a new `IntegrationsSetting` entity instance. Pass `nil` for no initial data.

#### `Issue(data map[string]any) LinearEntity`

Create a new `Issue` entity instance. Pass `nil` for no initial data.

#### `IssueImport(data map[string]any) LinearEntity`

Create a new `IssueImport` entity instance. Pass `nil` for no initial data.

#### `IssueLabel(data map[string]any) LinearEntity`

Create a new `IssueLabel` entity instance. Pass `nil` for no initial data.

#### `IssuePriorityValue(data map[string]any) LinearEntity`

Create a new `IssuePriorityValue` entity instance. Pass `nil` for no initial data.

#### `IssueRelation(data map[string]any) LinearEntity`

Create a new `IssueRelation` entity instance. Pass `nil` for no initial data.

#### `IssueSearchResult(data map[string]any) LinearEntity`

Create a new `IssueSearchResult` entity instance. Pass `nil` for no initial data.

#### `IssueToRelease(data map[string]any) LinearEntity`

Create a new `IssueToRelease` entity instance. Pass `nil` for no initial data.

#### `LogoutResponse(data map[string]any) LinearEntity`

Create a new `LogoutResponse` entity instance. Pass `nil` for no initial data.

#### `Notification(data map[string]any) LinearEntity`

Create a new `Notification` entity instance. Pass `nil` for no initial data.

#### `NotificationSubscription(data map[string]any) LinearEntity`

Create a new `NotificationSubscription` entity instance. Pass `nil` for no initial data.

#### `OAuthApplication(data map[string]any) LinearEntity`

Create a new `OAuthApplication` entity instance. Pass `nil` for no initial data.

#### `Organization(data map[string]any) LinearEntity`

Create a new `Organization` entity instance. Pass `nil` for no initial data.

#### `OrganizationDomain(data map[string]any) LinearEntity`

Create a new `OrganizationDomain` entity instance. Pass `nil` for no initial data.

#### `OrganizationInvite(data map[string]any) LinearEntity`

Create a new `OrganizationInvite` entity instance. Pass `nil` for no initial data.

#### `OrganizationMeta(data map[string]any) LinearEntity`

Create a new `OrganizationMeta` entity instance. Pass `nil` for no initial data.

#### `PasskeyLoginStartResponse(data map[string]any) LinearEntity`

Create a new `PasskeyLoginStartResponse` entity instance. Pass `nil` for no initial data.

#### `Project(data map[string]any) LinearEntity`

Create a new `Project` entity instance. Pass `nil` for no initial data.

#### `ProjectLabel(data map[string]any) LinearEntity`

Create a new `ProjectLabel` entity instance. Pass `nil` for no initial data.

#### `ProjectMilestone(data map[string]any) LinearEntity`

Create a new `ProjectMilestone` entity instance. Pass `nil` for no initial data.

#### `ProjectMilestoneMoveProjectTeam(data map[string]any) LinearEntity`

Create a new `ProjectMilestoneMoveProjectTeam` entity instance. Pass `nil` for no initial data.

#### `ProjectRelation(data map[string]any) LinearEntity`

Create a new `ProjectRelation` entity instance. Pass `nil` for no initial data.

#### `ProjectSearchResult(data map[string]any) LinearEntity`

Create a new `ProjectSearchResult` entity instance. Pass `nil` for no initial data.

#### `ProjectStatus(data map[string]any) LinearEntity`

Create a new `ProjectStatus` entity instance. Pass `nil` for no initial data.

#### `ProjectUpdate(data map[string]any) LinearEntity`

Create a new `ProjectUpdate` entity instance. Pass `nil` for no initial data.

#### `PushSubscription(data map[string]any) LinearEntity`

Create a new `PushSubscription` entity instance. Pass `nil` for no initial data.

#### `Reaction(data map[string]any) LinearEntity`

Create a new `Reaction` entity instance. Pass `nil` for no initial data.

#### `Release(data map[string]any) LinearEntity`

Create a new `Release` entity instance. Pass `nil` for no initial data.

#### `ReleaseNote(data map[string]any) LinearEntity`

Create a new `ReleaseNote` entity instance. Pass `nil` for no initial data.

#### `ReleasePipeline(data map[string]any) LinearEntity`

Create a new `ReleasePipeline` entity instance. Pass `nil` for no initial data.

#### `ReleaseStage(data map[string]any) LinearEntity`

Create a new `ReleaseStage` entity instance. Pass `nil` for no initial data.

#### `Roadmap(data map[string]any) LinearEntity`

Create a new `Roadmap` entity instance. Pass `nil` for no initial data.

#### `RoadmapToProject(data map[string]any) LinearEntity`

Create a new `RoadmapToProject` entity instance. Pass `nil` for no initial data.

#### `SlaConfiguration(data map[string]any) LinearEntity`

Create a new `SlaConfiguration` entity instance. Pass `nil` for no initial data.

#### `SsoUrlFromEmailResponse(data map[string]any) LinearEntity`

Create a new `SsoUrlFromEmailResponse` entity instance. Pass `nil` for no initial data.

#### `Team(data map[string]any) LinearEntity`

Create a new `Team` entity instance. Pass `nil` for no initial data.

#### `TeamMembership(data map[string]any) LinearEntity`

Create a new `TeamMembership` entity instance. Pass `nil` for no initial data.

#### `Template(data map[string]any) LinearEntity`

Create a new `Template` entity instance. Pass `nil` for no initial data.

#### `TimeSchedule(data map[string]any) LinearEntity`

Create a new `TimeSchedule` entity instance. Pass `nil` for no initial data.

#### `TriageResponsibility(data map[string]any) LinearEntity`

Create a new `TriageResponsibility` entity instance. Pass `nil` for no initial data.

#### `UploadFile(data map[string]any) LinearEntity`

Create a new `UploadFile` entity instance. Pass `nil` for no initial data.

#### `UsageAlert(data map[string]any) LinearEntity`

Create a new `UsageAlert` entity instance. Pass `nil` for no initial data.

#### `User(data map[string]any) LinearEntity`

Create a new `User` entity instance. Pass `nil` for no initial data.

#### `UserSetting(data map[string]any) LinearEntity`

Create a new `UserSetting` entity instance. Pass `nil` for no initial data.

#### `ViewPreference(data map[string]any) LinearEntity`

Create a new `ViewPreference` entity instance. Pass `nil` for no initial data.

#### `Webhook(data map[string]any) LinearEntity`

Create a new `Webhook` entity instance. Pass `nil` for no initial data.

#### `WebhookFailureEvent(data map[string]any) LinearEntity`

Create a new `WebhookFailureEvent` entity instance. Pass `nil` for no initial data.

#### `WorkflowState(data map[string]any) LinearEntity`

Create a new `WorkflowState` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## AccessKeyReleaseEntity

```go
accessKeyRelease := client.AccessKeyRelease(nil)
fmt.Println(accessKeyRelease.GetName()) // "access_key_release"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AccessKeyRelease(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AccessKeyRelease(nil).Load(map[string]any{"id": "access_key_release_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.AccessKeyRelease(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "id": "example_id",
    "name": "example_name",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AccessKeyReleaseEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AccessKeyReleasePipelineEntity

```go
accessKeyReleasePipeline := client.AccessKeyReleasePipeline(nil)
fmt.Println(accessKeyReleasePipeline.GetName()) // "access_key_release_pipeline"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The unique identifier of the release pipeline. |
| `includePathPatterns` | `string` | Yes | Glob patterns used to filter commits by changed file path. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AccessKeyReleasePipeline(nil).Load(map[string]any{"id": "access_key_release_pipeline_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AccessKeyReleasePipelineEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AgentActivityEntity

```go
agentActivity := client.AgentActivity(nil)
fmt.Println(agentActivity.GetName()) // "agent_activity"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentSession` | `map[string]any` | No | The agent session this activity belongs to. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `contextualMetadata` | `any` | No | [Internal] Metadata about user-provided contextual information for this agent activity. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `ephemeral` | `bool` | Yes | Whether the activity is ephemeral, and should disappear after the next agent activity. |
| `executionSkippedReason` | `string` | No | [Internal] The reason this activity was persisted without being sent to the agent runtime. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `queued` | `bool` | Yes | [Internal] Whether this activity is queued for later processing. |
| `sentAt` | `any` | No | [Internal] The time at which the prompt actually entered the conversation. |
| `signal` | `string` | No | An optional modifier that provides additional instructions on how the activity should be interpreted. |
| `signalMetadata` | `any` | No | Metadata about this agent activity's signal. |
| `sourceComment` | `map[string]any` | No | The source comment this activity is linked to. |
| `sourceMetadata` | `any` | No | Metadata about the external source that created this agent activity. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `map[string]any` | No | The user who created this agent activity. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AgentActivity(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AgentActivity(nil).Load(map[string]any{"id": "agent_activity_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.AgentActivity(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "ephemeral": true,
    "id": "example_id",
    "queued": true,
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AgentActivity(nil).Update(map[string]any{
    "id": "agent_activity_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AgentActivityEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AgentSessionEntity

```go
agentSession := client.AgentSession(nil)
fmt.Println(agentSession.GetName()) // "agent_session"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `appUser` | `map[string]any` | No | The agent user that is associated with this agent session. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `codingHarnessModelLabel` | `string` | No | [Internal] Compact display label for the coding harness model used by this session, derived from the latest associated sandbox. |
| `comment` | `map[string]any` | No | The comment this agent session is associated with. |
| `context` | `any` | Yes | The entity contexts this session is related to, such as issues or projects referenced in direct chat sessions. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `map[string]any` | No | The human user responsible for the agent session. |
| `dismissedAt` | `any` | No | The time a user dismissed this agent session. |
| `dismissedBy` | `map[string]any` | No | The user who dismissed the agent session. |
| `endedAt` | `any` | No | The time the agent session completed. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `issue` | `map[string]any` | No | The issue this agent session is associated with. |
| `modelSelection` | `any` | No | [Internal] How Adaptive selected the model route used by this coding session. |
| `plan` | `any` | No | A dynamically updated plan describing the agent's execution strategy, including steps to be taken and their current status. |
| `pullRequest` | `map[string]any` | No | The pull request this agent session is anchored to, when started from a pull request. |
| `slugId` | `string` | Yes | The agent session's unique URL slug. |
| `sourceComment` | `map[string]any` | No | The comment that this agent session was spawned from, if from a different thread. |
| `sourceMetadata` | `any` | No | Metadata about the external source that created this agent session. |
| `startedAt` | `any` | No | The time the agent session transitioned to active status and began work. |
| `status` | `string` | Yes | The current status of the agent session, such as pending, active, awaiting input, complete, error, or stale. |
| `summary` | `string` | No | The session title, generated automatically or set by the owning OAuth application. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | No | The URL to the agent session page in the Linear app. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AgentSession(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AgentSession(nil).Load(map[string]any{"id": "agent_session_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.AgentSession(nil).Create(map[string]any{
    "context": "example_context",
    "createdAt": "example_createdAt",
    "id": "example_id",
    "slugId": "example_slugId",
    "status": "example_status",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AgentSession(nil).Update(map[string]any{
    "id": "agent_session_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AgentSessionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AgentSkillEntity

```go
agentSkill := client.AgentSkill(nil)
fmt.Println(agentSkill.GetName()) // "agent_skill"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `body` | `string` | Yes | The skill instructions in markdown format. |
| `color` | `string` | No | The skill's color. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `map[string]any` | No | The user who created the skill. |
| `description` | `string` | No | The skill's description. |
| `icon` | `string` | No | The icon of the skill. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `inheritedFrom` | `map[string]any` | No | The parent-team skill this skill was inherited from. |
| `lastUpdatedBy` | `map[string]any` | No | The user who last updated the skill. |
| `lastUsedAt` | `any` | No | The time the skill was last used by anyone in the workspace. |
| `owner` | `map[string]any` | No | The user who owns the skill. |
| `recentUsageCount` | `float64` | Yes | The number of times the skill was used by anyone in the workspace in the last 30 days. |
| `shared` | `bool` | Yes | Whether the skill is shared with everyone in the workspace. |
| `slugId` | `string` | Yes | The skill's unique URL slug. |
| `teamId` | `string` | No | The identifier of the team this skill is shared with. |
| `title` | `string` | Yes | The skill's title. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AgentSkill(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AgentSkill(nil).Load(map[string]any{"id": "agent_skill_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.AgentSkill(nil).Create(map[string]any{
    "body": "example_body",
    "createdAt": "example_createdAt",
    "id": "example_id",
    "recentUsageCount": 1,
    "shared": true,
    "slugId": "example_slugId",
    "title": "example_title",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AgentSkill(nil).Update(map[string]any{
    "id": "agent_skill_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.AgentSkill(nil).Remove(map[string]any{"id": "agent_skill_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AgentSkillEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApplicationEntity

```go
application := client.Application(nil)
fmt.Println(application.GetName()) // "application"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Application(nil).Load(map[string]any{"client_id": "client_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApplicationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AttachmentEntity

```go
attachment := client.Attachment(nil)
fmt.Println(attachment.GetName()) // "attachment"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `bodyData` | `string` | No | The body data of the attachment, if any. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `map[string]any` | No | The creator of the attachment. |
| `externalUserCreator` | `map[string]any` | No | The non-Linear user who created the attachment. |
| `groupBySource` | `bool` | Yes | Whether attachments from the same source application should be visually grouped together in the Linear issue detail view. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `issue` | `map[string]any` | No | The issue this attachment belongs to. |
| `metadata` | `any` | Yes | Integration-specific metadata for this attachment. |
| `originalIssue` | `map[string]any` | No | The issue this attachment was originally created on. |
| `source` | `any` | No | Information about the source which created the attachment. |
| `sourceType` | `string` | No | The source type of the attachment, derived from the source metadata. |
| `subtitle` | `string` | No | Content for the subtitle line in the Linear attachment widget. |
| `title` | `string` | Yes | Content for the title line in the Linear attachment widget. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | The URL of the external resource this attachment links to. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Attachment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Attachment(nil).Load(map[string]any{"id": "attachment_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Attachment(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "groupBySource": true,
    "id": "example_id",
    "metadata": "example_metadata",
    "title": "example_title",
    "updatedAt": "example_updatedAt",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Attachment(nil).Update(map[string]any{
    "id": "attachment_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Attachment(nil).Remove(map[string]any{"id": "attachment_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AttachmentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AuditEntryEntity

```go
auditEntry := client.AuditEntry(nil)
fmt.Println(auditEntry.GetName()) // "audit_entry"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `map[string]any` | No | The user that caused the audit entry to be created. |
| `actorId` | `string` | No | The ID of the user that caused the audit entry to be created. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `countryCode` | `string` | No | The ISO 3166-1 alpha-2 country code derived from the request IP address. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `ip` | `string` | No | The IP address of the actor at the time the audited action was performed. |
| `metadata` | `any` | No | Additional metadata related to the audit entry. |
| `organization` | `map[string]any` | No | The workspace the audit log belongs to. |
| `requestInformation` | `any` | No | Additional information related to the request which performed the action. |
| `type` | `string` | Yes | The type of audited action (e.g., user authentication, permission change, data export, setting modification). |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AuditEntry(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AuditEntryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AuditEntryTypeEntity

```go
auditEntryType := client.AuditEntryType(nil)
fmt.Println(auditEntryType.GetName()) // "audit_entry_type"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | Yes | Description of the audit entry type. |
| `type` | `string` | Yes | The audit entry type. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AuditEntryType(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AuditEntryTypeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AuthResolverResponseEntity

```go
authResolverResponse := client.AuthResolverResponse(nil)
fmt.Println(authResolverResponse.GetName()) // "auth_resolver_response"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AuthResolverResponse(nil).Load(map[string]any{"id": "auth_resolver_response_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.AuthResolverResponse(nil).Create(map[string]any{
    "email": "example_email",
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AuthResolverResponse(nil).Update(map[string]any{
    "id": "auth_resolver_response_id",
    "auth_id": "auth_id",
    "response": "response",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AuthResolverResponseEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AuthenticationSessionResponseEntity

```go
authenticationSessionResponse := client.AuthenticationSessionResponse(nil)
fmt.Println(authenticationSessionResponse.GetName()) // "authentication_session_response"
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
| `isCurrentSession` | `bool` | Yes | Whether this session is the one used to make the current API request. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AuthenticationSessionResponse(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AuthenticationSessionResponseEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CommentEntity

```go
comment := client.Comment(nil)
fmt.Println(comment.GetName()) // "comment"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentSession` | `map[string]any` | No | Agent session associated with this comment. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `body` | `string` | Yes | The comment content in markdown format. |
| `bodyData` | `string` | Yes | [Internal] The comment content as a ProseMirror document. |
| `botActor` | `map[string]any` | No | The bot that created the comment. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `documentContent` | `map[string]any` | No | The document content that the comment is associated with. |
| `documentContentId` | `string` | No | The ID of the document content that the comment is associated with. |
| `editedAt` | `any` | No | The time the comment was last edited by its author. |
| `externalThread` | `map[string]any` | No | The external thread that the comment is synced with. |
| `externalUser` | `map[string]any` | No | The external user who wrote the comment, when the comment was created through an integration such as Slack or Intercom. |
| `hideInLinear` | `bool` | Yes | [Internal] Whether the comment should be hidden from Linear clients. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiative` | `map[string]any` | No | The initiative that the comment is associated with. |
| `initiativeId` | `string` | No | The ID of the initiative that the comment is associated with. |
| `initiativeUpdate` | `map[string]any` | No | The initiative update that the comment is associated with. |
| `initiativeUpdateId` | `string` | No | The ID of the initiative update that the comment is associated with. |
| `isArtificialAgentSessionRoot` | `bool` | Yes | [Internal] Whether the comment is an artificial placeholder for an agent session thread created without a comment mention. |
| `issue` | `map[string]any` | No | The issue that the comment is associated with. |
| `issueId` | `string` | No | The ID of the issue that the comment is associated with. |
| `onBehalfOf` | `map[string]any` | No | [Internal] The user on whose behalf the comment was created, e.g. |
| `parent` | `map[string]any` | No | The parent comment under which the current comment is nested. |
| `parentId` | `string` | No | The ID of the parent comment under which the current comment is nested. |
| `post` | `map[string]any` | No | The post that the comment is associated with. |
| `project` | `map[string]any` | No | The project that the comment is associated with. |
| `projectId` | `string` | No | The ID of the project that the comment is associated with. |
| `projectUpdate` | `map[string]any` | No | The project update that the comment is associated with. |
| `projectUpdateId` | `string` | No | The ID of the project update that the comment is associated with. |
| `quotedText` | `string` | No | The text that this comment references, used for inline comments on documents or issue descriptions. |
| `reactionData` | `any` | Yes | Emoji reaction summary for this comment, grouped by emoji type. |
| `resolvedAt` | `any` | No | The time when the comment thread was resolved. |
| `resolvingComment` | `map[string]any` | No | The child comment that resolved this thread. |
| `resolvingCommentId` | `string` | No | The ID of the child comment that resolved this thread. |
| `resolvingUser` | `map[string]any` | No | The user that resolved the comment thread. |
| `threadSummary` | `any` | No | [Internal] An AI-generated summary of the comment thread. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | Comment's URL. |
| `user` | `map[string]any` | No | The user who wrote the comment. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Comment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Comment(nil).Load(map[string]any{"id": "comment_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Comment(nil).Create(map[string]any{
    "body": "example_body",
    "bodyData": "example_bodyData",
    "createdAt": "example_createdAt",
    "hideInLinear": true,
    "id": "example_id",
    "isArtificialAgentSessionRoot": true,
    "reactionData": "example_reactionData",
    "updatedAt": "example_updatedAt",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Comment(nil).Update(map[string]any{
    "id": "comment_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Comment(nil).Remove(map[string]any{"id": "comment_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CommentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CreateOrJoinOrganizationResponseEntity

```go
createOrJoinOrganizationResponse := client.CreateOrJoinOrganizationResponse(nil)
fmt.Println(createOrJoinOrganizationResponse.GetName()) // "create_or_join_organization_response"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `organization` | `map[string]any` | No | The workspace that was created or joined. |
| `user` | `map[string]any` | No | The user who created or joined the workspace. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.CreateOrJoinOrganizationResponse(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.CreateOrJoinOrganizationResponse(nil).Update(map[string]any{
    "organization_id": "organization_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CreateOrJoinOrganizationResponseEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CustomViewEntity

```go
customView := client.CustomView(nil)
fmt.Println(customView.GetName()) // "custom_view"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `color` | `string` | No | The hex color code of the custom view icon. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `map[string]any` | No | The user who originally created the custom view. |
| `description` | `string` | No | The description of the custom view. |
| `facet` | `map[string]any` | No | [INTERNAL] The facet that links this custom view to its parent entity (project, initiative, team page, etc.). |
| `feedItemFilterData` | `any` | No | The filter applied to feed items in the custom view. |
| `filterData` | `any` | Yes | The structured filter applied to issues in the custom view. |
| `icon` | `string` | No | The icon of the custom view. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiativeFilterData` | `any` | No | The filter applied to initiatives in the custom view. |
| `modelName` | `string` | Yes | The entity type this view displays. |
| `name` | `string` | Yes | The name of the custom view, displayed in the sidebar and navigation. |
| `organization` | `map[string]any` | No | The workspace of the custom view. |
| `organizationViewPreferences` | `map[string]any` | No | The workspace-level default view preferences for this custom view, if any have been set. |
| `owner` | `map[string]any` | No | The user who owns the custom view. |
| `projectFilterData` | `any` | No | The filter applied to projects in the custom view. |
| `shared` | `bool` | Yes | Whether the custom view is shared with everyone in the organization. |
| `slugId` | `string` | Yes | The custom view's unique URL slug, used to construct human-readable URLs. |
| `team` | `map[string]any` | No | The team that the custom view is scoped to. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `updatedBy` | `map[string]any` | No | The user who last updated the custom view. |
| `userViewPreferences` | `map[string]any` | No | The current user's personal view preferences for this custom view, if they have set any. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CustomView(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CustomView(nil).Load(map[string]any{"id": "custom_view_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.CustomView(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "filterData": "example_filterData",
    "id": "example_id",
    "modelName": "example_modelName",
    "name": "example_name",
    "shared": true,
    "slugId": "example_slugId",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.CustomView(nil).Update(map[string]any{
    "id": "custom_view_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.CustomView(nil).Remove(map[string]any{"id": "custom_view_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomViewEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CustomerEntity

```go
customer := client.Customer(nil)
fmt.Println(customer.GetName()) // "customer"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approximateNeedCount` | `float64` | Yes | The approximate number of distinct requests associated with this customer, deduplicated per issue or project. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `domains` | `string` | Yes | The email domains associated with this customer (e.g., 'acme.com'). |
| `externalIds` | `string` | Yes | Identifiers for this customer in external systems (e.g., CRM IDs from Intercom, Salesforce, or HubSpot). |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `integration` | `map[string]any` | No | The integration that manages this customer's data (e.g., Intercom, Salesforce). |
| `logoUrl` | `string` | No | URL of the customer's logo image. |
| `mainSourceId` | `string` | No | The primary external source ID when a customer has data from multiple external systems. |
| `name` | `string` | Yes | The display name of the customer organization. |
| `owner` | `map[string]any` | No | The workspace member assigned as the owner of this customer. |
| `revenue` | `int` | No | The annual revenue generated by this customer. |
| `size` | `float64` | No | The number of employees or seats at the customer organization. |
| `slackChannelId` | `string` | No | The ID of the Slack channel linked to this customer for communication. |
| `slugId` | `string` | Yes | A unique, human-readable URL slug for the customer. |
| `status` | `map[string]any` | No | The current lifecycle status of the customer. |
| `tier` | `map[string]any` | No | The tier or segment assigned to this customer for prioritization (e.g., Enterprise, Pro, Free). |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | The URL of the customer's page in the Linear application. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Customer(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Customer(nil).Load(map[string]any{"id": "customer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Customer(nil).Create(map[string]any{
    "approximateNeedCount": 1,
    "createdAt": "example_createdAt",
    "domains": "example_domains",
    "externalIds": "example_externalIds",
    "id": "example_id",
    "name": "example_name",
    "slugId": "example_slugId",
    "updatedAt": "example_updatedAt",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Customer(nil).Update(map[string]any{
    "id": "customer_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Customer(nil).Remove(map[string]any{"id": "customer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomerEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CustomerNeedEntity

```go
customerNeed := client.CustomerNeed(nil)
fmt.Println(customerNeed.GetName()) // "customer_need"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `attachment` | `map[string]any` | No | The issue attachment linked to this need. |
| `body` | `string` | No | The body content of the need in Markdown format. |
| `bodyData` | `string` | No | [Internal] The body content of the need as a Prosemirror document JSON string. |
| `comment` | `map[string]any` | No | An optional comment providing additional context for this need. |
| `content` | `string` | No | The effective Markdown content shown for this customer need. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `map[string]any` | No | The user who manually created this customer need. |
| `customer` | `map[string]any` | No | The customer organization this need belongs to. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `issue` | `map[string]any` | No | The issue this need is linked to. |
| `originalIssue` | `map[string]any` | No | The issue this customer need was originally created on, before being moved to a different issue or project. |
| `priority` | `float64` | Yes | Whether the customer need is important or not. |
| `project` | `map[string]any` | No | The project this need is linked to. |
| `projectAttachment` | `map[string]any` | No | The project attachment linked to this need. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | No | The URL of the source attachment linked to this need, if any. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CustomerNeed(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CustomerNeed(nil).Load(map[string]any{"id": "customer_need_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.CustomerNeed(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "id": "example_id",
    "priority": 1,
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.CustomerNeed(nil).Update(map[string]any{
    "id": "customer_need_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.CustomerNeed(nil).Remove(map[string]any{"id": "customer_need_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomerNeedEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CustomerStatusEntity

```go
customerStatus := client.CustomerStatus(nil)
fmt.Println(customerStatus.GetName()) // "customer_status"
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
| `position` | `float64` | Yes | The sort position of the status in the workspace's customer lifecycle flow. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CustomerStatus(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CustomerStatus(nil).Load(map[string]any{"id": "customer_status_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.CustomerStatus(nil).Create(map[string]any{
    "color": "example_color",
    "createdAt": "example_createdAt",
    "displayName": "example_displayName",
    "id": "example_id",
    "name": "example_name",
    "position": 1,
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.CustomerStatus(nil).Update(map[string]any{
    "id": "customer_status_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.CustomerStatus(nil).Remove(map[string]any{"id": "customer_status_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomerStatusEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CustomerTierEntity

```go
customerTier := client.CustomerTier(nil)
fmt.Println(customerTier.GetName()) // "customer_tier"
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
| `position` | `float64` | Yes | The sort position of the tier in the workspace's customer tier ordering. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CustomerTier(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CustomerTier(nil).Load(map[string]any{"id": "customer_tier_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.CustomerTier(nil).Create(map[string]any{
    "color": "example_color",
    "createdAt": "example_createdAt",
    "displayName": "example_displayName",
    "id": "example_id",
    "name": "example_name",
    "position": 1,
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.CustomerTier(nil).Update(map[string]any{
    "id": "customer_tier_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.CustomerTier(nil).Remove(map[string]any{"id": "customer_tier_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomerTierEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CycleEntity

```go
cycle := client.Cycle(nil)
fmt.Println(cycle.GetName()) // "cycle"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `autoArchivedAt` | `any` | No | The time at which the cycle was automatically archived by the auto-pruning process. |
| `completedAt` | `any` | No | The completion time of the cycle. |
| `completedIssueCountHistory` | `float64` | Yes | The number of completed issues in the cycle after each day. |
| `completedScopeHistory` | `float64` | Yes | The number of completed estimation points after each day. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `currentProgress` | `any` | Yes | [Internal] The current progress snapshot of the cycle, broken down by issue status categories. |
| `description` | `string` | No | The description of the cycle. |
| `endsAt` | `any` | Yes | The end date and time of the cycle. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `inProgressScopeHistory` | `float64` | Yes | The number of in-progress estimation points after each day. |
| `inheritedFrom` | `map[string]any` | No | The parent cycle this cycle was inherited from. |
| `isActive` | `bool` | Yes | Whether the cycle is currently active. |
| `isFuture` | `bool` | Yes | Whether the cycle has not yet started. |
| `isNext` | `bool` | Yes | Whether this cycle is the next upcoming (not yet started) cycle for the team. |
| `isPast` | `bool` | Yes | Whether the cycle's end date has passed. |
| `isPrevious` | `bool` | Yes | Whether this cycle is the most recently completed cycle for the team. |
| `issueCountHistory` | `float64` | Yes | The total number of issues in the cycle after each day. |
| `name` | `string` | No | The custom name of the cycle. |
| `number` | `float64` | Yes | The auto-incrementing number of the cycle, unique within its team. |
| `progress` | `float64` | Yes | The overall progress of the cycle as a number between 0 and 1. |
| `progressHistory` | `any` | Yes | [Internal] The detailed progress history of the cycle, including per-status breakdowns over time. |
| `scopeHistory` | `float64` | Yes | The total number of estimation points (scope) in the cycle after each day. |
| `startsAt` | `any` | Yes | The start date and time of the cycle. |
| `team` | `map[string]any` | No | The team that the cycle belongs to. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Cycle(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Cycle(nil).Load(map[string]any{"id": "cycle_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Cycle(nil).Create(map[string]any{
    "completedIssueCountHistory": 1,
    "completedScopeHistory": 1,
    "createdAt": "example_createdAt",
    "currentProgress": "example_currentProgress",
    "endsAt": "example_endsAt",
    "id": "example_id",
    "inProgressScopeHistory": 1,
    "isActive": true,
    "isFuture": true,
    "isNext": true,
    "isPast": true,
    "isPrevious": true,
    "issueCountHistory": 1,
    "number": 1,
    "progress": 1,
    "progressHistory": "example_progressHistory",
    "scopeHistory": 1,
    "startsAt": "example_startsAt",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Cycle(nil).Update(map[string]any{
    "id": "cycle_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CycleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DiffEntity

```go
diff := client.Diff(nil)
fmt.Println(diff.GetName()) // "diff"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additions` | `float64` | Yes | [Internal] The total number of added lines across the diff. |
| `agentSession` | `map[string]any` | No | The agent session the diff belongs to. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `contentHash` | `string` | Yes | [Internal] The opaque content hash identifying the diff's content in code.storage. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `map[string]any` | No | The user responsible for the diff. |
| `deletions` | `float64` | Yes | [Internal] The total number of deleted lines across the diff. |
| `fileCount` | `float64` | Yes | [Internal] The number of changed files in the diff. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `organization` | `map[string]any` | No | The workspace the diff belongs to. |
| `pullRequest` | `map[string]any` | No | The pull request the diff was promoted to when opened for review. |
| `slugId` | `string` | Yes | [Internal] The diff's unique URL slug. |
| `truncated` | `bool` | Yes | [Internal] Whether oversized files were omitted when the diff was computed. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Diff(nil).Load(map[string]any{"id": "diff_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DiffEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DocumentEntity

```go
document := client.Document(nil)
fmt.Println(document.GetName()) // "document"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `color` | `string` | No | The hex color of the document icon. |
| `content` | `string` | No | The document's content in markdown format. |
| `contentState` | `string` | No | [Internal] The document's content as a base64-encoded Yjs state update. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `map[string]any` | No | The user who created the document. |
| `cycle` | `map[string]any` | No | [Internal] The cycle that the document is associated with. |
| `documentContentId` | `string` | No | The ID of the document content associated with the document. |
| `hiddenAt` | `any` | No | The time at which the document was hidden from the default view. |
| `icon` | `string` | No | The icon of the document, either a decorative icon type or an emoji string. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiative` | `map[string]any` | No | The initiative that the document is associated with. |
| `issue` | `map[string]any` | No | The issue that the document is associated with. |
| `lastAppliedTemplate` | `map[string]any` | No | The last template that was applied to this document. |
| `owner` | `map[string]any` | No | The owner of the document. |
| `project` | `map[string]any` | No | The project that the document is associated with. |
| `release` | `map[string]any` | No | The release that the document is associated with. |
| `slugId` | `string` | Yes | The document's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `float64` | Yes | The sort order of the document in its parent entity's resources list. |
| `summary` | `string` | No | [Internal] A one-sentence AI-generated summary of the document content. |
| `team` | `map[string]any` | No | [Internal] The team that the document is associated with. |
| `title` | `string` | Yes | The title of the document. |
| `trashed` | `bool` | No | A flag that indicates whether the document is in the trash bin. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `updatedBy` | `map[string]any` | No | The user who last updated the document. |
| `url` | `string` | Yes | The canonical url for the document. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Document(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Document(nil).Load(map[string]any{"id": "document_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Document(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "id": "example_id",
    "slugId": "example_slugId",
    "sortOrder": 1,
    "title": "example_title",
    "updatedAt": "example_updatedAt",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Document(nil).Update(map[string]any{
    "id": "document_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Document(nil).Remove(map[string]any{"id": "document_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DocumentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DocumentSearchResultEntity

```go
documentSearchResult := client.DocumentSearchResult(nil)
fmt.Println(documentSearchResult.GetName()) // "document_search_result"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `color` | `string` | No | The hex color of the document icon. |
| `content` | `string` | No | The document's content in markdown format. |
| `contentState` | `string` | No | [Internal] The document's content as a base64-encoded Yjs state update. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `map[string]any` | No | The user who created the document. |
| `cycle` | `map[string]any` | No | [Internal] The cycle that the document is associated with. |
| `documentContentId` | `string` | No | The ID of the document content associated with the document. |
| `hiddenAt` | `any` | No | The time at which the document was hidden from the default view. |
| `icon` | `string` | No | The icon of the document, either a decorative icon type or an emoji string. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiative` | `map[string]any` | No | The initiative that the document is associated with. |
| `issue` | `map[string]any` | No | The issue that the document is associated with. |
| `lastAppliedTemplate` | `map[string]any` | No | The last template that was applied to this document. |
| `metadata` | `any` | Yes | Metadata related to search result. |
| `owner` | `map[string]any` | No | The owner of the document. |
| `project` | `map[string]any` | No | The project that the document is associated with. |
| `release` | `map[string]any` | No | The release that the document is associated with. |
| `slugId` | `string` | Yes | The document's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `float64` | Yes | The sort order of the document in its parent entity's resources list. |
| `summary` | `string` | No | [Internal] A one-sentence AI-generated summary of the document content. |
| `team` | `map[string]any` | No | [Internal] The team that the document is associated with. |
| `title` | `string` | Yes | The title of the document. |
| `trashed` | `bool` | No | A flag that indicates whether the document is in the trash bin. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `updatedBy` | `map[string]any` | No | The user who last updated the document. |
| `url` | `string` | Yes | The canonical url for the document. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DocumentSearchResult(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DocumentSearchResultEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EmailIntakeAddressEntity

```go
emailIntakeAddress := client.EmailIntakeAddress(nil)
fmt.Println(emailIntakeAddress.GetName()) // "email_intake_address"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `string` | Yes | The unique local part (before the @) of the intake email address, used to route incoming emails to the correct intake handler. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `map[string]any` | No | The user who created the email intake address. |
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
| `lastUsedAt` | `any` | No | The last time an inbound email was successfully ingested for this address. |
| `organization` | `map[string]any` | No | The workspace that the email address is associated with. |
| `reopenOnReply` | `bool` | Yes | Whether to reopen completed or canceled issues when a substantive email reply is received. |
| `repliesEnabled` | `bool` | Yes | Whether email replies are enabled. |
| `senderName` | `string` | No | The name to be used for outgoing emails. |
| `sesDomainIdentity` | `map[string]any` | No | The SES domain identity that the email address is associated with. |
| `team` | `map[string]any` | No | The team that the email address is associated with. |
| `template` | `map[string]any` | No | The template that the email address is associated with. |
| `type` | `string` | Yes | The type of the email address. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `useUserNamesInReplies` | `bool` | Yes | Whether the commenter's name is included in the email replies. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.EmailIntakeAddress(nil).Load(map[string]any{"id": "email_intake_address_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.EmailIntakeAddress(nil).Create(map[string]any{
    "address": "example_address",
    "createdAt": "example_createdAt",
    "customerRequestsEnabled": true,
    "enabled": true,
    "id": "example_id",
    "issueCanceledAutoReplyEnabled": true,
    "issueCompletedAutoReplyEnabled": true,
    "issueCreatedAutoReplyEnabled": true,
    "reopenOnReply": true,
    "repliesEnabled": true,
    "type": "example_type",
    "updatedAt": "example_updatedAt",
    "useUserNamesInReplies": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.EmailIntakeAddress(nil).Update(map[string]any{
    "id": "email_intake_address_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.EmailIntakeAddress(nil).Remove(map[string]any{"id": "email_intake_address_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EmailIntakeAddressEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EmailUserAccountAuthChallengeResponseEntity

```go
emailUserAccountAuthChallengeResponse := client.EmailUserAccountAuthChallengeResponse(nil)
fmt.Println(emailUserAccountAuthChallengeResponse.GetName()) // "email_user_account_auth_challenge_response"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authType` | `string` | Yes | Supported challenge for this user account. |
| `success` | `bool` | Yes | Whether the operation was successful. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.EmailUserAccountAuthChallengeResponse(nil).Create(map[string]any{
    "authType": "example_authType",
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EmailUserAccountAuthChallengeResponseEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EmojiEntity

```go
emoji := client.Emoji(nil)
fmt.Println(emoji.GetName()) // "emoji"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `map[string]any` | No | The user who created the emoji. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `name` | `string` | Yes | The unique name of the custom emoji within the workspace. |
| `organization` | `map[string]any` | No | The workspace that the emoji belongs to. |
| `source` | `string` | Yes | The source of the emoji, indicating how it was created (e.g., uploaded by a user or imported). |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | The URL of the uploaded image for this custom emoji. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Emoji(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Emoji(nil).Load(map[string]any{"id": "emoji_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Emoji(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "id": "example_id",
    "name": "example_name",
    "source": "example_source",
    "updatedAt": "example_updatedAt",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Emoji(nil).Remove(map[string]any{"id": "emoji_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EmojiEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EntityExternalLinkEntity

```go
entityExternalLink := client.EntityExternalLink(nil)
fmt.Println(entityExternalLink.GetName()) // "entity_external_link"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `map[string]any` | No | The user who created the link. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiative` | `map[string]any` | No | The initiative that the link is associated with. |
| `label` | `string` | Yes | The link's label. |
| `project` | `map[string]any` | No | The project that the link is associated with. |
| `sortOrder` | `float64` | Yes | The sort order of this link within the parent entity's resources list. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | The link's URL. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.EntityExternalLink(nil).Load(map[string]any{"id": "entity_external_link_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.EntityExternalLink(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "id": "example_id",
    "label": "example_label",
    "sortOrder": 1,
    "updatedAt": "example_updatedAt",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.EntityExternalLink(nil).Update(map[string]any{
    "id": "entity_external_link_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.EntityExternalLink(nil).Remove(map[string]any{"id": "entity_external_link_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EntityExternalLinkEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ExternalUserEntity

```go
externalUser := client.ExternalUser(nil)
fmt.Println(externalUser.GetName()) // "external_user"
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
| `organization` | `map[string]any` | No | The workspace that the external user belongs to. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ExternalUser(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ExternalUser(nil).Load(map[string]any{"id": "external_user_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ExternalUserEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FavoriteEntity

```go
favorite := client.Favorite(nil)
fmt.Println(favorite.GetName()) // "favorite"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aiConversation` | `map[string]any` | No | [INTERNAL] The favorited Agent conversation. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `color` | `string` | No | [Internal] Returns the color of the favorite's icon. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `customView` | `map[string]any` | No | The favorited custom view. |
| `customer` | `map[string]any` | No | The favorited customer. |
| `cycle` | `map[string]any` | No | The favorited cycle. |
| `dashboard` | `map[string]any` | No | The favorited dashboard. |
| `detail` | `string` | No | [Internal] Detail text for favorite's `title` (e.g. |
| `document` | `map[string]any` | No | The favorited document. |
| `facet` | `map[string]any` | No | [INTERNAL] The favorited facet. |
| `folderName` | `string` | No | The name of the folder. |
| `icon` | `string` | No | [Internal] Name of the favorite's icon. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiative` | `map[string]any` | No | The favorited initiative. |
| `initiativeLabel` | `map[string]any` | No | [INTERNAL] The favorited initiative label. |
| `initiativeTab` | `string` | No | The targeted tab of the initiative. |
| `issue` | `map[string]any` | No | The favorited issue. |
| `label` | `map[string]any` | No | The favorited label. |
| `liveFolderDefinition` | `any` | No | The versioned lazy root and filter represented by this live favorite folder. |
| `liveFolderPreset` | `string` | No | The predefined live folder represented by this favorite. |
| `owner` | `map[string]any` | No | The user who owns this favorite. |
| `parent` | `map[string]any` | No | The parent folder of the favorite. |
| `pipelineTab` | `string` | No | The targeted tab of the release pipeline. |
| `predefinedViewTeam` | `map[string]any` | No | The team of the favorited predefined view. |
| `predefinedViewType` | `string` | No | The type of favorited predefined view (e.g., 'allIssues', 'activeCycle', 'backlog', 'triage'). |
| `project` | `map[string]any` | No | The favorited project. |
| `projectLabel` | `map[string]any` | No | The favorited project label. |
| `projectTab` | `string` | No | The targeted tab of the project. |
| `projectTeam` | `map[string]any` | No | [DEPRECATED] The favorited team of the project. |
| `pullRequest` | `map[string]any` | No | The favorited pull request. |
| `release` | `map[string]any` | No | The favorited release. |
| `releaseNote` | `map[string]any` | No | The favorited release note. |
| `releasePipeline` | `map[string]any` | No | The favorited release pipeline. |
| `sortOrder` | `float64` | Yes | The position of this item in the user's favorites list. |
| `team` | `map[string]any` | No | The favorited team. |
| `title` | `string` | Yes | [Internal] Favorite's title text (name of the favorite'd object or folder). |
| `type` | `string` | Yes | The type of entity this favorite references, such as 'issue', 'project', 'cycle', 'customView', 'document', 'folder', etc. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | No | URL of the favorited entity. |
| `user` | `map[string]any` | No | The favorited user. |
| `workflowDefinition` | `map[string]any` | No | The favorited loop. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Favorite(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Favorite(nil).Load(map[string]any{"id": "favorite_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Favorite(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "id": "example_id",
    "sortOrder": 1,
    "title": "example_title",
    "type": "example_type",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Favorite(nil).Update(map[string]any{
    "id": "favorite_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Favorite(nil).Remove(map[string]any{"id": "favorite_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FavoriteEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GitAutomationStateEntity

```go
gitAutomationState := client.GitAutomationState(nil)
fmt.Println(gitAutomationState.GetName()) // "git_automation_state"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `event` | `string` | Yes | The Git event that triggers this automation rule (e.g., branch created, PR opened for review, or PR merged). |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `state` | `map[string]any` | No | The workflow state that linked issues will be transitioned to when the Git event fires. |
| `targetBranch` | `map[string]any` | No | The target branch that this automation rule applies to. |
| `team` | `map[string]any` | No | The team that this automation rule belongs to. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.GitAutomationState(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "event": "example_event",
    "id": "example_id",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.GitAutomationState(nil).Update(map[string]any{
    "id": "id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.GitAutomationState(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GitAutomationStateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GitAutomationTargetBranchEntity

```go
gitAutomationTargetBranch := client.GitAutomationTargetBranch(nil)
fmt.Println(gitAutomationTargetBranch.GetName()) // "git_automation_target_branch"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `branchPattern` | `string` | Yes | The branch name or pattern to match against pull request target branches. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `isRegex` | `bool` | Yes | Whether the branch pattern should be interpreted as a regular expression. |
| `team` | `map[string]any` | No | The team that this target branch definition belongs to. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.GitAutomationTargetBranch(nil).Create(map[string]any{
    "branchPattern": "example_branchPattern",
    "createdAt": "example_createdAt",
    "id": "example_id",
    "isRegex": true,
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.GitAutomationTargetBranch(nil).Update(map[string]any{
    "id": "id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.GitAutomationTargetBranch(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GitAutomationTargetBranchEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GitHubIntegrationConnectDetailEntity

```go
gitHubIntegrationConnectDetail := client.GitHubIntegrationConnectDetail(nil)
fmt.Println(gitHubIntegrationConnectDetail.GetName()) // "git_hub_integration_connect_detail"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `lostRepositoryNames` | `string` | No | Full names ('owner/repo') of repositories whose existing GitHub Issues sync mappings would become inaccessible if the new GitHub App installation replaces the existing one. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.GitHubIntegrationConnectDetail(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.GitHubIntegrationConnectDetail(nil).Update(map[string]any{
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GitHubIntegrationConnectDetailEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## InitiativeEntity

```go
initiative := client.Initiative(nil)
fmt.Println(initiative.GetName()) // "initiative"
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
| `creator` | `map[string]any` | No | The user who created the initiative. |
| `description` | `string` | No | The description of the initiative. |
| `documentContent` | `map[string]any` | No | The content of the initiative description. |
| `frequencyResolution` | `string` | Yes | The resolution of the reminder frequency. |
| `health` | `string` | No | The overall health of the initiative, derived from the most recent initiative update. |
| `healthUpdatedAt` | `any` | No | The time at which the initiative health was last updated, typically when a new initiative update is posted. |
| `icon` | `string` | No | The icon of the initiative. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `identifier` | `string` | No | [Internal] The human-readable identifier of the initiative. |
| `integrationsSettings` | `map[string]any` | No | Settings for all integrations associated with that initiative. |
| `labelIds` | `string` | Yes | The IDs of the initiative labels associated with this initiative. |
| `lastUpdate` | `map[string]any` | No | The most recent status update posted for this initiative. |
| `leadTeam` | `map[string]any` | No | The team that leads the initiative. |
| `name` | `string` | Yes | The name of the initiative. |
| `organization` | `map[string]any` | No | The workspace of the initiative. |
| `owner` | `map[string]any` | No | The user who owns the initiative. |
| `parentInitiative` | `map[string]any` | No | Parent initiative associated with the initiative. |
| `previousIdentifiers` | `string` | Yes | [Internal] Identifiers (default and custom) that this initiative has previously held. |
| `priority` | `int` | Yes | The priority of the initiative. |
| `prioritySortOrder` | `float64` | Yes | The sort order of the initiative within the workspace when ordered by priority. |
| `slugId` | `string` | Yes | The initiative's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `float64` | Yes | The sort order of the initiative within the workspace. |
| `startedAt` | `any` | No | The time at which the initiative was moved into Active status. |
| `status` | `string` | Yes | The lifecycle status of the initiative. |
| `targetDate` | `any` | No | The estimated completion date of the initiative. |
| `targetDateResolution` | `string` | No | The resolution of the initiative's estimated completion date, indicating whether it refers to a specific day, week, month, quarter, or year. |
| `trashed` | `bool` | No | A flag that indicates whether the initiative is in the trash bin. |
| `updateReminderFrequency` | `float64` | No | The frequency at which to prompt for updates. |
| `updateReminderFrequencyInWeeks` | `float64` | No | The n-weekly frequency at which to prompt for updates. |
| `updateRemindersDay` | `string` | No | The day at which to prompt for updates. |
| `updateRemindersHour` | `float64` | No | The hour at which to prompt for updates. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | Initiative URL. |
| `visibility` | `string` | Yes | The visibility of the initiative, derived from its lead team. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Initiative(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Initiative(nil).Load(map[string]any{"id": "initiative_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Initiative(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "frequencyResolution": "example_frequencyResolution",
    "id": "example_id",
    "labelIds": "example_labelIds",
    "name": "example_name",
    "previousIdentifiers": "example_previousIdentifiers",
    "priority": 1,
    "prioritySortOrder": 1,
    "slugId": "example_slugId",
    "sortOrder": 1,
    "status": "example_status",
    "updatedAt": "example_updatedAt",
    "url": "example_url",
    "visibility": "example_visibility",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Initiative(nil).Update(map[string]any{
    "id": "initiative_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Initiative(nil).Remove(map[string]any{"id": "initiative_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `InitiativeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## InitiativeLabelEntity

```go
initiativeLabel := client.InitiativeLabel(nil)
fmt.Println(initiativeLabel.GetName()) // "initiative_label"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `color` | `string` | Yes | The label's color as a HEX string (e.g., '#EB5757'). |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `map[string]any` | No | The user who created the label. |
| `description` | `string` | No | The label's description. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `isGroup` | `bool` | Yes | Whether the label is a group. |
| `lastAppliedAt` | `any` | No | The date when the label was last applied to an issue, project, or initiative. |
| `name` | `string` | Yes | The label's name. |
| `organization` | `map[string]any` | No | The workspace that the initiative label belongs to. |
| `parent` | `map[string]any` | No | The parent label group. |
| `retiredAt` | `any` | No | [Internal] When the label was retired. |
| `retiredBy` | `map[string]any` | No | The user who retired the label. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.InitiativeLabel(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.InitiativeLabel(nil).Load(map[string]any{"id": "initiative_label_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.InitiativeLabel(nil).Create(map[string]any{
    "color": "example_color",
    "createdAt": "example_createdAt",
    "id": "example_id",
    "isGroup": true,
    "name": "example_name",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.InitiativeLabel(nil).Update(map[string]any{
    "id": "initiative_label_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.InitiativeLabel(nil).Remove(map[string]any{"id": "initiative_label_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `InitiativeLabelEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## InitiativeLeadTeamChangeImpactEntity

```go
initiativeLeadTeamChangeImpact := client.InitiativeLeadTeamChangeImpact(nil)
fmt.Println(initiativeLeadTeamChangeImpact.GetName()) // "initiative_lead_team_change_impact"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `affectedDescendantCount` | `int` | Yes | The number of editable matching sub-initiatives whose lead team would change if the update is applied to descendants. |
| `id` | `string` | No |  |
| `visibilityMayChange` | `bool` | Yes | Whether the changed initiatives may gain or lose access restrictions because the current or next lead team is not public. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.InitiativeLeadTeamChangeImpact(nil).Load(map[string]any{"id": "initiative_lead_team_change_impact_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `InitiativeLeadTeamChangeImpactEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## InitiativeRelationEntity

```go
initiativeRelation := client.InitiativeRelation(nil)
fmt.Println(initiativeRelation.GetName()) // "initiative_relation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiative` | `map[string]any` | No | The parent initiative in this hierarchical relation. |
| `relatedInitiative` | `map[string]any` | No | The child initiative in this hierarchical relation. |
| `sortOrder` | `float64` | Yes | The sort order of the child initiative within its parent initiative. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `map[string]any` | No | The user who last created or modified the relation. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.InitiativeRelation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.InitiativeRelation(nil).Load(map[string]any{"id": "initiative_relation_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.InitiativeRelation(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "id": "example_id",
    "sortOrder": 1,
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.InitiativeRelation(nil).Update(map[string]any{
    "id": "initiative_relation_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.InitiativeRelation(nil).Remove(map[string]any{"id": "initiative_relation_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `InitiativeRelationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## InitiativeToProjectEntity

```go
initiativeToProject := client.InitiativeToProject(nil)
fmt.Println(initiativeToProject.GetName()) // "initiative_to_project"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiative` | `map[string]any` | No | The initiative that the project is associated with. |
| `project` | `map[string]any` | No | The project that the initiative is associated with. |
| `sortOrder` | `string` | Yes | The sort order of the project within its parent initiative. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.InitiativeToProject(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.InitiativeToProject(nil).Load(map[string]any{"id": "initiative_to_project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.InitiativeToProject(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "id": "example_id",
    "sortOrder": "example_sortOrder",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.InitiativeToProject(nil).Update(map[string]any{
    "id": "initiative_to_project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.InitiativeToProject(nil).Remove(map[string]any{"id": "initiative_to_project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `InitiativeToProjectEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## InitiativeUpdateEntity

```go
initiativeUpdate := client.InitiativeUpdate(nil)
fmt.Println(initiativeUpdate.GetName()) // "initiative_update"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `body` | `string` | Yes | The update content in markdown format. |
| `bodyData` | `string` | Yes | [Internal] The content of the update as a Prosemirror document. |
| `commentCount` | `int` | Yes | Number of comments associated with the initiative update. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `diff` | `any` | No | The diff between the current update and the previous one. |
| `diffMarkdown` | `string` | No | The diff between the current update and the previous one, formatted as markdown. |
| `editedAt` | `any` | No | The time the update was edited. |
| `health` | `string` | Yes | The health of the initiative at the time this update was posted. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `infoSnapshot` | `any` | No | [Internal] A snapshot of initiative properties at the time the update was posted, including project statuses, sub-initiative health, and target dates. |
| `initiative` | `map[string]any` | No | The initiative that this status update was posted to. |
| `isDiffHidden` | `bool` | Yes | Whether the diff between this update and the previous one should be hidden in the UI. |
| `isStale` | `bool` | Yes | Whether the initiative update is stale. |
| `reactionData` | `any` | Yes | Emoji reaction summary, grouped by emoji type. |
| `slugId` | `string` | Yes | The update's unique URL slug. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | The URL to the initiative update. |
| `user` | `map[string]any` | No | The user who wrote the update. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.InitiativeUpdate(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.InitiativeUpdate(nil).Load(map[string]any{"id": "initiative_update_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.InitiativeUpdate(nil).Create(map[string]any{
    "body": "example_body",
    "bodyData": "example_bodyData",
    "commentCount": 1,
    "createdAt": "example_createdAt",
    "health": "example_health",
    "id": "example_id",
    "isDiffHidden": true,
    "isStale": true,
    "reactionData": "example_reactionData",
    "slugId": "example_slugId",
    "updatedAt": "example_updatedAt",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.InitiativeUpdate(nil).Update(map[string]any{
    "id": "initiative_update_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `InitiativeUpdateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IntegrationEntity

```go
integration := client.Integration(nil)
fmt.Println(integration.GetName()) // "integration"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `map[string]any` | No | The user that added the integration. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `organization` | `map[string]any` | No | The workspace that the integration is associated with. |
| `service` | `string` | Yes | The integration's type, identifying which external service this integration connects to (e.g., 'slack', 'github', 'jira', 'figma'). |
| `team` | `map[string]any` | No | The team that the integration is associated with. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Integration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Integration(nil).Load(map[string]any{"id": "integration_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Integration(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "id": "example_id",
    "service": "example_service",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Integration(nil).Update(map[string]any{
    "id": "integration_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Integration(nil).Remove(map[string]any{"id": "integration_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IntegrationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IntegrationTemplateEntity

```go
integrationTemplate := client.IntegrationTemplate(nil)
fmt.Println(integrationTemplate.GetName()) // "integration_template"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `foreignEntityId` | `string` | No | The identifier of the foreign entity in the external service that this template is scoped to. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `integration` | `map[string]any` | No | The integration that the template is associated with. |
| `template` | `map[string]any` | No | The template that the integration is associated with. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.IntegrationTemplate(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.IntegrationTemplate(nil).Load(map[string]any{"id": "integration_template_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.IntegrationTemplate(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "id": "example_id",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.IntegrationTemplate(nil).Remove(map[string]any{"id": "integration_template_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IntegrationTemplateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IntegrationsSettingEntity

```go
integrationsSetting := client.IntegrationsSetting(nil)
fmt.Println(integrationsSetting.GetName()) // "integrations_setting"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `contextViewType` | `string` | No | The type of view to which the integration settings context is associated with. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiative` | `map[string]any` | No | Initiative which those settings apply to. |
| `microsoftTeamsProjectUpdateCreated` | `bool` | No | Whether to send a Microsoft Teams message when a project update is created. |
| `project` | `map[string]any` | No | Project which those settings apply to. |
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
| `team` | `map[string]any` | No | Team which those settings apply to. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.IntegrationsSetting(nil).Load(map[string]any{"id": "integrations_setting_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.IntegrationsSetting(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "id": "example_id",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.IntegrationsSetting(nil).Update(map[string]any{
    "id": "integrations_setting_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IntegrationsSettingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IssueEntity

```go
issue := client.Issue(nil)
fmt.Println(issue.GetName()) // "issue"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activitySummary` | `any` | No | [Internal] The activity summary information for this issue. |
| `addedToCycleAt` | `any` | No | The time at which the issue was added to a cycle. |
| `addedToProjectAt` | `any` | No | The time at which the issue was added to a project. |
| `addedToTeamAt` | `any` | No | The time at which the issue was added to a team. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `asksExternalUserRequester` | `map[string]any` | No | The external user who requested creation of the Asks issue on behalf of the creator. |
| `asksRequester` | `map[string]any` | No | The internal user who requested creation of the Asks issue on behalf of the creator. |
| `assignee` | `map[string]any` | No | The user to whom the issue is assigned. |
| `autoArchivedAt` | `any` | No | The time at which the issue was automatically archived by the auto pruning process. |
| `autoClosedAt` | `any` | No | The time at which the issue was automatically closed by the auto pruning process. |
| `botActor` | `map[string]any` | No | The bot that created the issue, if applicable. |
| `branchName` | `string` | Yes | Suggested branch name for the issue. |
| `canceledAt` | `any` | No | The time at which the issue was moved into canceled state. |
| `completedAt` | `any` | No | The time at which the issue was moved into completed state. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `map[string]any` | No | The user who created the issue. |
| `customerTicketCount` | `int` | Yes | Returns the number of Attachment resources which are created by customer support ticketing systems (e.g. |
| `cycle` | `map[string]any` | No | The cycle that the issue is associated with. |
| `delegate` | `map[string]any` | No | The agent user that is delegated to work on this issue. |
| `description` | `string` | No | The issue's description in markdown format. |
| `descriptionState` | `string` | No | [Internal] The issue's description content as YJS state. |
| `documentContent` | `map[string]any` | No | [ALPHA] The document content representing this issue description. |
| `dueDate` | `any` | No | The date at which the issue is due. |
| `estimate` | `float64` | No | The estimate of the complexity of the issue. |
| `externalUserCreator` | `map[string]any` | No | The external user who created the issue. |
| `favorite` | `map[string]any` | No | The users favorite associated with this issue. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `identifier` | `string` | Yes | Issue's human readable identifier (e.g. |
| `inheritsSharedAccess` | `bool` | Yes | Whether this issue inherits shared access from its parent issue. |
| `integrationSourceType` | `string` | No | Integration type that created this issue, if applicable. |
| `labelIds` | `string` | Yes | Identifiers of the labels associated with this issue. |
| `lastAppliedTemplate` | `map[string]any` | No | The last template that was applied to this issue. |
| `number` | `float64` | Yes | The issue's unique number, scoped to the issue's team. |
| `parent` | `map[string]any` | No | The parent of the issue. |
| `previousIdentifiers` | `string` | Yes | Previous identifiers of the issue if it has been moved between teams. |
| `priority` | `float64` | Yes | The priority of the issue. |
| `priorityLabel` | `string` | Yes | Label for the priority. |
| `prioritySortOrder` | `float64` | Yes | The order of the item in relation to other items in the workspace, when ordered by priority. |
| `project` | `map[string]any` | No | The project that the issue is associated with. |
| `projectMilestone` | `map[string]any` | No | The project milestone that the issue is associated with. |
| `reactionData` | `any` | Yes | Emoji reaction summary for the issue, grouped by emoji type. |
| `recurringIssueTemplate` | `map[string]any` | No | The recurring issue template that created this issue. |
| `slaBreachesAt` | `any` | No | The time at which the issue's SLA will breach. |
| `slaHighRiskAt` | `any` | No | The time at which the issue's SLA will enter high risk state. |
| `slaMediumRiskAt` | `any` | No | The time at which the issue's SLA will enter medium risk state. |
| `slaStartedAt` | `any` | No | The time at which the issue's SLA began. |
| `slaType` | `string` | No | The type of SLA set on the issue. |
| `snoozedBy` | `map[string]any` | No | The user who snoozed the issue. |
| `snoozedUntilAt` | `any` | No | The time until an issue will be snoozed in Triage view. |
| `sortOrder` | `float64` | Yes | The order of the item in relation to other items in the organization. |
| `sourceComment` | `map[string]any` | No | The comment that this issue was created from, when an issue is created from an existing comment. |
| `startedAt` | `any` | No | The time at which the issue was moved into started state. |
| `startedTriageAt` | `any` | No | The time at which the issue entered triage. |
| `state` | `map[string]any` | No | The workflow state (issue status) that the issue is currently in. |
| `subIssueSortOrder` | `float64` | No | The order of the item in the sub-issue list. |
| `suggestionsGeneratedAt` | `any` | No | [Internal] The time at which the most recent suggestions for this issue were generated. |
| `summary` | `map[string]any` | No | [Internal] AI-generated activity summary for this issue. |
| `team` | `map[string]any` | No | The team that the issue belongs to. |
| `title` | `string` | Yes | The issue's title. |
| `trashed` | `bool` | No | A flag that indicates whether the issue is in the trash bin. |
| `triagedAt` | `any` | No | The time at which the issue left triage. |
| `trusted` | `bool` | No | [Internal] Whether this issue has been explicitly marked as trusted. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | Issue URL. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Issue(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Issue(nil).Load(map[string]any{"id": "issue_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Issue(nil).Create(map[string]any{
    "branchName": "example_branchName",
    "createdAt": "example_createdAt",
    "customerTicketCount": 1,
    "id": "example_id",
    "identifier": "example_identifier",
    "inheritsSharedAccess": true,
    "labelIds": "example_labelIds",
    "number": 1,
    "previousIdentifiers": "example_previousIdentifiers",
    "priority": 1,
    "priorityLabel": "example_priorityLabel",
    "prioritySortOrder": 1,
    "reactionData": "example_reactionData",
    "sortOrder": 1,
    "title": "example_title",
    "updatedAt": "example_updatedAt",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Issue(nil).Update(map[string]any{
    "id": "issue_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Issue(nil).Remove(map[string]any{"id": "issue_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IssueEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IssueImportEntity

```go
issueImport := client.IssueImport(nil)
fmt.Println(issueImport.GetName()) // "issue_import"
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
| `progress` | `float64` | No | Current step progress as a percentage (0-100). |
| `service` | `string` | Yes | The external service from which data is being imported (e.g., jira, asana, github, shortcut, linear). |
| `serviceMetadata` | `any` | No | Metadata related to import service. |
| `status` | `string` | Yes | The current status of the import job, indicating its position in the import lifecycle (e.g., not started, in progress, complete, error). |
| `teamName` | `string` | No | The name of the new team to be created for the import, when the import is configured to create a new team rather than importing into an existing one. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.IssueImport(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "displayName": "example_displayName",
    "service": "example_service",
    "status": "example_status",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.IssueImport(nil).Update(map[string]any{
    "id": "id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.IssueImport(nil).Remove(map[string]any{"issue_import_id": "issue_import_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IssueImportEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IssueLabelEntity

```go
issueLabel := client.IssueLabel(nil)
fmt.Println(issueLabel.GetName()) // "issue_label"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `color` | `string` | Yes | The label's color as a HEX string (e.g., '#EB5757'). |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `map[string]any` | No | The user who created the label. |
| `description` | `string` | No | The label's description. |
| `groupType` | `string` | No | The selection mode of this label group. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `inheritedFrom` | `map[string]any` | No | The original workspace or parent-team label that this label was inherited from. |
| `isGroup` | `bool` | Yes | Whether the label is a group. |
| `lastAppliedAt` | `any` | No | The date when the label was last applied to an issue, project, or initiative. |
| `name` | `string` | Yes | The label's name. |
| `parent` | `map[string]any` | No | The parent label. |
| `retiredAt` | `any` | No | [Internal] When the label was retired. |
| `retiredBy` | `map[string]any` | No | The user who retired the label. |
| `team` | `map[string]any` | No | The team that the label is scoped to. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.IssueLabel(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.IssueLabel(nil).Load(map[string]any{"id": "issue_label_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.IssueLabel(nil).Create(map[string]any{
    "color": "example_color",
    "createdAt": "example_createdAt",
    "id": "example_id",
    "isGroup": true,
    "name": "example_name",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.IssueLabel(nil).Update(map[string]any{
    "id": "issue_label_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.IssueLabel(nil).Remove(map[string]any{"id": "issue_label_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IssueLabelEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IssuePriorityValueEntity

```go
issuePriorityValue := client.IssuePriorityValue(nil)
fmt.Println(issuePriorityValue.GetName()) // "issue_priority_value"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `string` | Yes | Priority's label. |
| `priority` | `int` | Yes | Priority's number value. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.IssuePriorityValue(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IssuePriorityValueEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IssueRelationEntity

```go
issueRelation := client.IssueRelation(nil)
fmt.Println(issueRelation.GetName()) // "issue_relation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `issue` | `map[string]any` | No | The source issue whose relationship is being described. |
| `relatedIssue` | `map[string]any` | No | The target issue that the source issue is related to. |
| `type` | `string` | Yes | The type of relationship between the source issue and the related issue. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.IssueRelation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.IssueRelation(nil).Load(map[string]any{"id": "issue_relation_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.IssueRelation(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "id": "example_id",
    "type": "example_type",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.IssueRelation(nil).Update(map[string]any{
    "id": "issue_relation_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.IssueRelation(nil).Remove(map[string]any{"id": "issue_relation_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IssueRelationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IssueSearchResultEntity

```go
issueSearchResult := client.IssueSearchResult(nil)
fmt.Println(issueSearchResult.GetName()) // "issue_search_result"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activitySummary` | `any` | No | [Internal] The activity summary information for this issue. |
| `addedToCycleAt` | `any` | No | The time at which the issue was added to a cycle. |
| `addedToProjectAt` | `any` | No | The time at which the issue was added to a project. |
| `addedToTeamAt` | `any` | No | The time at which the issue was added to a team. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `asksExternalUserRequester` | `map[string]any` | No | The external user who requested creation of the Asks issue on behalf of the creator. |
| `asksRequester` | `map[string]any` | No | The internal user who requested creation of the Asks issue on behalf of the creator. |
| `assignee` | `map[string]any` | No | The user to whom the issue is assigned. |
| `autoArchivedAt` | `any` | No | The time at which the issue was automatically archived by the auto pruning process. |
| `autoClosedAt` | `any` | No | The time at which the issue was automatically closed by the auto pruning process. |
| `botActor` | `map[string]any` | No | The bot that created the issue, if applicable. |
| `branchName` | `string` | Yes | Suggested branch name for the issue. |
| `canceledAt` | `any` | No | The time at which the issue was moved into canceled state. |
| `completedAt` | `any` | No | The time at which the issue was moved into completed state. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `map[string]any` | No | The user who created the issue. |
| `customerTicketCount` | `int` | Yes | Returns the number of Attachment resources which are created by customer support ticketing systems (e.g. |
| `cycle` | `map[string]any` | No | The cycle that the issue is associated with. |
| `delegate` | `map[string]any` | No | The agent user that is delegated to work on this issue. |
| `description` | `string` | No | The issue's description in markdown format. |
| `descriptionState` | `string` | No | [Internal] The issue's description content as YJS state. |
| `documentContent` | `map[string]any` | No | [ALPHA] The document content representing this issue description. |
| `dueDate` | `any` | No | The date at which the issue is due. |
| `estimate` | `float64` | No | The estimate of the complexity of the issue. |
| `externalUserCreator` | `map[string]any` | No | The external user who created the issue. |
| `favorite` | `map[string]any` | No | The users favorite associated with this issue. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `identifier` | `string` | Yes | Issue's human readable identifier (e.g. |
| `inheritsSharedAccess` | `bool` | Yes | Whether this issue inherits shared access from its parent issue. |
| `integrationSourceType` | `string` | No | Integration type that created this issue, if applicable. |
| `labelIds` | `string` | Yes | Identifiers of the labels associated with this issue. |
| `lastAppliedTemplate` | `map[string]any` | No | The last template that was applied to this issue. |
| `metadata` | `any` | Yes | Metadata related to search result. |
| `number` | `float64` | Yes | The issue's unique number, scoped to the issue's team. |
| `parent` | `map[string]any` | No | The parent of the issue. |
| `previousIdentifiers` | `string` | Yes | Previous identifiers of the issue if it has been moved between teams. |
| `priority` | `float64` | Yes | The priority of the issue. |
| `priorityLabel` | `string` | Yes | Label for the priority. |
| `prioritySortOrder` | `float64` | Yes | The order of the item in relation to other items in the workspace, when ordered by priority. |
| `project` | `map[string]any` | No | The project that the issue is associated with. |
| `projectMilestone` | `map[string]any` | No | The project milestone that the issue is associated with. |
| `reactionData` | `any` | Yes | Emoji reaction summary for the issue, grouped by emoji type. |
| `recurringIssueTemplate` | `map[string]any` | No | The recurring issue template that created this issue. |
| `slaBreachesAt` | `any` | No | The time at which the issue's SLA will breach. |
| `slaHighRiskAt` | `any` | No | The time at which the issue's SLA will enter high risk state. |
| `slaMediumRiskAt` | `any` | No | The time at which the issue's SLA will enter medium risk state. |
| `slaStartedAt` | `any` | No | The time at which the issue's SLA began. |
| `slaType` | `string` | No | The type of SLA set on the issue. |
| `snoozedBy` | `map[string]any` | No | The user who snoozed the issue. |
| `snoozedUntilAt` | `any` | No | The time until an issue will be snoozed in Triage view. |
| `sortOrder` | `float64` | Yes | The order of the item in relation to other items in the organization. |
| `sourceComment` | `map[string]any` | No | The comment that this issue was created from, when an issue is created from an existing comment. |
| `startedAt` | `any` | No | The time at which the issue was moved into started state. |
| `startedTriageAt` | `any` | No | The time at which the issue entered triage. |
| `state` | `map[string]any` | No | The workflow state (issue status) that the issue is currently in. |
| `subIssueSortOrder` | `float64` | No | The order of the item in the sub-issue list. |
| `suggestionsGeneratedAt` | `any` | No | [Internal] The time at which the most recent suggestions for this issue were generated. |
| `summary` | `map[string]any` | No | [Internal] AI-generated activity summary for this issue. |
| `team` | `map[string]any` | No | The team that the issue belongs to. |
| `title` | `string` | Yes | The issue's title. |
| `trashed` | `bool` | No | A flag that indicates whether the issue is in the trash bin. |
| `triagedAt` | `any` | No | The time at which the issue left triage. |
| `trusted` | `bool` | No | [Internal] Whether this issue has been explicitly marked as trusted. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | Issue URL. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.IssueSearchResult(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IssueSearchResultEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IssueToReleaseEntity

```go
issueToRelease := client.IssueToRelease(nil)
fmt.Println(issueToRelease.GetName()) // "issue_to_release"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `issue` | `map[string]any` | No | The issue that is linked to the release. |
| `release` | `map[string]any` | No | The release that the issue is linked to. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.IssueToRelease(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.IssueToRelease(nil).Load(map[string]any{"id": "issue_to_release_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.IssueToRelease(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "id": "example_id",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.IssueToRelease(nil).Remove(map[string]any{"id": "issue_to_release_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IssueToReleaseEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LogoutResponseEntity

```go
logoutResponse := client.LogoutResponse(nil)
fmt.Println(logoutResponse.GetName()) // "logout_response"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `bool` | Yes | Whether the operation was successful. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.LogoutResponse(nil).Create(map[string]any{
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.LogoutResponse(nil).Update(map[string]any{
    "session_id": "session_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LogoutResponseEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NotificationEntity

```go
notification := client.Notification(nil)
fmt.Println(notification.GetName()) // "notification"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `map[string]any` | No | The user that caused the notification. |
| `actorAvatarColor` | `string` | Yes | [Internal] Notification actor initials if avatar is not available. |
| `actorAvatarUrl` | `string` | No | [Internal] Notification avatar URL. |
| `actorInactive` | `bool` | Yes | [Internal] Whether the notification's user actor is deactivated in the workspace. |
| `actorInitials` | `string` | No | [Internal] Notification actor initials if avatar is not available. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `botActor` | `map[string]any` | No | The bot that caused the notification. |
| `category` | `string` | Yes | The category of the notification. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `emailedAt` | `any` | No | The time at which an email reminder for this notification was sent to the user. |
| `externalUserActor` | `map[string]any` | No | The external user that caused the notification. |
| `groupingKey` | `string` | Yes | [Internal] Notifications with the same grouping key will be grouped together in the UI. |
| `groupingPriority` | `float64` | Yes | [Internal] Priority of the notification with the same grouping key. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `inboxUrl` | `string` | Yes | [Internal] Inbox URL for the notification. |
| `initiativeUpdateHealth` | `string` | No | [Internal] Initiative update health for new updates. |
| `isLinearActor` | `bool` | Yes | [Internal] If notification actor was Linear. |
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
| `user` | `map[string]any` | No | The recipient user of this notification. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Notification(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Notification(nil).Load(map[string]any{"id": "notification_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NotificationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NotificationSubscriptionEntity

```go
notificationSubscription := client.NotificationSubscription(nil)
fmt.Println(notificationSubscription.GetName()) // "notification_subscription"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Whether the subscription is active. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `contextViewType` | `string` | No | The type of contextual view (e.g., active issues, backlog) that further scopes a team notification subscription. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `customView` | `map[string]any` | No | The custom view that this notification subscription is scoped to. |
| `customer` | `map[string]any` | No | The customer that this notification subscription is scoped to. |
| `cycle` | `map[string]any` | No | The cycle that this notification subscription is scoped to. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiative` | `map[string]any` | No | The initiative that this notification subscription is scoped to. |
| `label` | `map[string]any` | No | The issue label that this notification subscription is scoped to. |
| `project` | `map[string]any` | No | The project that this notification subscription is scoped to. |
| `subscriber` | `map[string]any` | No | The user who will receive notifications from this subscription. |
| `team` | `map[string]any` | No | The team that this notification subscription is scoped to. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `map[string]any` | No | The user that this notification subscription is scoped to, for user-specific view subscriptions. |
| `userContextViewType` | `string` | No | The type of user-specific view that further scopes a user notification subscription. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.NotificationSubscription(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.NotificationSubscription(nil).Load(map[string]any{"id": "notification_subscription_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NotificationSubscriptionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OAuthApplicationEntity

```go
oAuthApplication := client.OAuthApplication(nil)
fmt.Println(oAuthApplication.GetName()) // "o_auth_application"
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
| `webhookEnabled` | `bool` | Yes | Whether webhook delivery is enabled for this OAuth application. |
| `webhookResourceTypes` | `string` | Yes | Resource types the OAuth application's webhooks subscribe to. |
| `webhookUrl` | `string` | No | Webhook URL used for delivering webhook payloads. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.OAuthApplication(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.OAuthApplication(nil).Load(map[string]any{"id": "o_auth_application_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.OAuthApplication(nil).Create(map[string]any{
    "clientId": "example_clientId",
    "createdAt": "example_createdAt",
    "developer": "example_developer",
    "developerUrl": "example_developerUrl",
    "distribution": "example_distribution",
    "grantTypes": "example_grantTypes",
    "id": "example_id",
    "name": "example_name",
    "redirectUris": "example_redirectUris",
    "updatedAt": "example_updatedAt",
    "webhookEnabled": true,
    "webhookResourceTypes": "example_webhookResourceTypes",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.OAuthApplication(nil).Update(map[string]any{
    "id": "o_auth_application_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OAuthApplicationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrganizationEntity

```go
organization := client.Organization(nil)
fmt.Println(organization.GetName()) // "organization"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentAutomationEnabled` | `bool` | Yes | [INTERNAL] Whether the workspace has enabled agent automation. |
| `aiAddonEnabled` | `bool` | Yes | [INTERNAL] Whether the workspace has enabled the AI add-on (which at this point only includes triage suggestions). |
| `aiDiscussionSummariesEnabled` | `bool` | Yes | Whether the workspace has enabled AI discussion summaries for issues. |
| `aiProviderConfiguration` | `any` | No | [INTERNAL] Configure per-modality AI host providers and model families. |
| `aiTelemetryEnabled` | `bool` | Yes | [INTERNAL] Whether the workspace has opted in to AI telemetry. |
| `aiThreadSummariesEnabled` | `bool` | Yes | Whether the workspace has enabled resolved thread AI summaries. |
| `allowedFileUploadContentTypes` | `string` | No | Allowed file upload content types |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `authSettings` | `any` | Yes | Authentication settings for the workspace, including allowed auth providers, bypass rules, and organization visibility during signup. |
| `codeIntelligenceEnabled` | `bool` | Yes | [INTERNAL] Whether code intelligence is enabled for the workspace. |
| `codeIntelligenceRepository` | `string` | No | [INTERNAL] GitHub repository in owner/repo format for code intelligence. |
| `codingAgentEnabled` | `bool` | Yes | [INTERNAL] Whether the workspace has enabled Coding Sessions. |
| `codingAgentSettings` | `any` | Yes | [Internal] Settings for Coding Sessions features. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `createdIssueCount` | `int` | Yes | Approximate total number of issues created in the workspace, including archived ones. |
| `customerCount` | `int` | Yes | The number of active (non-archived) customers tracked in the workspace. |
| `customersConfiguration` | `any` | Yes | Configuration settings for the Customers feature, including revenue currency and other customer tracking preferences. |
| `customersEnabled` | `bool` | Yes | Whether the Customers feature is enabled and accessible for the workspace based on the current plan. |
| `defaultFeedSummarySchedule` | `string` | No | Default schedule for how often feed summaries are generated. |
| `defaultHomeView` | `string` | No | The default home view for members of the workspace who have not chosen their own default. |
| `defaultHomeViewTargetId` | `string` | No | The id of the specific initiative, project, view, dashboard, or page tab used as the default home view. |
| `deletionRequestedAt` | `any` | No | The time at which deletion of the workspace was requested. |
| `feedEnabled` | `bool` | Yes | Whether the activity feed feature is enabled for the workspace. |
| `fiscalYearStartMonth` | `float64` | Yes | The zero-indexed month at which the fiscal year starts (0 = January, 11 = December). |
| `generatedUpdatesEnabled` | `bool` | Yes | [INTERNAL] Whether the workspace has enabled generated updates. |
| `gitBranchFormat` | `string` | No | The template format for Git branch names created from issues. |
| `gitLinkbackDescriptionsEnabled` | `bool` | Yes | Whether issue descriptions should be included in the Git integration linkback messages posted to pull requests. |
| `gitLinkbackMessagesEnabled` | `bool` | Yes | Whether the Git integration linkback messages should be posted as comments on pull requests in private repositories. |
| `gitPublicLinkbackMessagesEnabled` | `bool` | Yes | Whether the Git integration linkback messages should be posted as comments on pull requests in public repositories. |
| `hipaaComplianceEnabled` | `bool` | Yes | Whether HIPAA compliance is enabled for the workspace. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiativeUpdateReminderFrequencyInWeeks` | `float64` | No | The frequency in weeks at which to prompt for initiative updates. |
| `initiativeUpdateRemindersDay` | `string` | Yes | The day of the week on which initiative update reminders are sent. |
| `initiativeUpdateRemindersHour` | `float64` | Yes | The hour of the day (0-23) at which initiative update reminders are sent. |
| `linearAgentEnabled` | `bool` | Yes | [Internal] Whether the workspace has enabled Linear Agent. |
| `linearAgentSettings` | `any` | Yes | [Internal] Settings for Linear Agent features. |
| `logoUrl` | `string` | No | The URL of the workspace's logo image. |
| `name` | `string` | Yes | The workspace's name. |
| `periodUploadVolume` | `float64` | Yes | Rolling 30-day total file upload volume for the workspace, measured in megabytes. |
| `previousUrlKeys` | `string` | Yes | Previously used URL keys for the workspace. |
| `projectUpdateReminderFrequencyInWeeks` | `float64` | No | The frequency in weeks at which to prompt for project updates. |
| `projectUpdateRemindersDay` | `string` | Yes | The day of the week on which project update reminders are sent. |
| `projectUpdateRemindersHour` | `float64` | Yes | The hour of the day (0-23) at which project update reminders are sent. |
| `pullRequestIssueMode` | `string` | Yes | How Linear suggests and links issues for pull requests that have none linked: 'off', 'suggest', or 'autoOnMerge'. |
| `pullRequestTourEnabled` | `bool` | Yes | Whether the workspace generates AI Pull Request guides for new pull requests. |
| `releaseChannel` | `string` | Yes | The feature release channel the workspace belongs to, which controls access to pre-release features. |
| `releasesEnabled` | `bool` | Yes | Whether release management is enabled for the workspace. |
| `restrictAgentInvocationToMembers` | `bool` | No | [Internal] Whether agent invocation is restricted to full workspace members. |
| `roadmapEnabled` | `bool` | Yes | Whether the roadmap feature is enabled for the workspace. |
| `samlEnabled` | `bool` | Yes | Whether SAML-based single sign-on authentication is enabled for the workspace. |
| `samlSettings` | `any` | No | [INTERNAL] SAML settings. |
| `scimEnabled` | `bool` | Yes | Whether SCIM provisioning is enabled for the workspace, allowing automated user and team management from an identity provider. |
| `scimSettings` | `any` | No | [INTERNAL] SCIM settings. |
| `securitySettings` | `any` | Yes | Security settings for the workspace, including role-based restrictions for invitations, team creation, label management, and other sensitive operations. |
| `slackAutoCreateProjectChannel` | `bool` | Yes | [Internal] Whether to automatically create a Slack channel when a new project is created. |
| `slackProjectChannelIntegration` | `map[string]any` | No | The Slack integration used for auto-creating project channels. |
| `slackProjectChannelPrefix` | `string` | Yes | The prefix used for auto-created Slack project channels. |
| `slackProjectChannelsEnabled` | `bool` | Yes | [Internal] Whether the Slack project channels feature is enabled for the workspace. |
| `subscription` | `map[string]any` | No | The workspace's subscription to a paid plan. |
| `themeSettings` | `any` | No | [ALPHA] Theme settings for the workspace. |
| `trialEndsAt` | `any` | No | The time at which the current plan trial will end. |
| `trialStartsAt` | `any` | No | The time at which the current plan trial started. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `urlKey` | `string` | Yes | The workspace's unique URL key, used in URLs to identify the workspace. |
| `userCount` | `int` | Yes | The number of active (non-deactivated) users in the workspace. |
| `workingDays` | `float64` | Yes | [Internal] The list of working days. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Organization(nil).Load(map[string]any{"id": "organization_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Organization(nil).Update(map[string]any{
    "id": "organization_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Organization(nil).Remove(map[string]any{"id": "organization_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrganizationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrganizationDomainEntity

```go
organizationDomain := client.OrganizationDomain(nil)
fmt.Println(organizationDomain.GetName()) // "organization_domain"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `authType` | `string` | Yes | The authentication type this domain is used for. |
| `claimed` | `bool` | No | Whether the domain was claimed by the workspace through DNS TXT record verification. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `map[string]any` | No | The user who added the domain. |
| `disableOrganizationCreation` | `bool` | No | Whether users with email addresses from this domain are prevented from creating new workspaces. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `identityProvider` | `map[string]any` | No | The identity provider the domain belongs to. |
| `name` | `string` | Yes | The domain name (e.g., 'example.com'). |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `verificationEmail` | `string` | No | The email address used to verify this domain. |
| `verified` | `bool` | Yes | Whether the domain has been verified via email verification. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.OrganizationDomain(nil).Create(map[string]any{
    "authType": "example_authType",
    "createdAt": "example_createdAt",
    "id": "example_id",
    "name": "example_name",
    "updatedAt": "example_updatedAt",
    "verified": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.OrganizationDomain(nil).Update(map[string]any{
    "id": "id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.OrganizationDomain(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrganizationDomainEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrganizationInviteEntity

```go
organizationInvite := client.OrganizationInvite(nil)
fmt.Println(organizationInvite.GetName()) // "organization_invite"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acceptedAt` | `any` | No | The time at which the invite was accepted by the invitee. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `email` | `string` | Yes | The email address of the person being invited to the workspace. |
| `expiresAt` | `any` | No | The time at which the invite will expire and can no longer be accepted. |
| `external` | `bool` | Yes | Whether the invite was sent to an email address outside the workspace's verified domains. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `invitee` | `map[string]any` | No | The user who has accepted the invite. |
| `inviter` | `map[string]any` | No | The user who created the invitation. |
| `metadata` | `any` | No | Extra metadata associated with the invite. |
| `organization` | `map[string]any` | No | The workspace that the invite is associated with. |
| `role` | `string` | Yes | The workspace role (admin, member, guest, or owner) that the invitee will receive upon accepting the invite. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.OrganizationInvite(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.OrganizationInvite(nil).Load(map[string]any{"id": "organization_invite_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.OrganizationInvite(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "email": "example_email",
    "external": true,
    "id": "example_id",
    "role": "example_role",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.OrganizationInvite(nil).Update(map[string]any{
    "id": "organization_invite_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.OrganizationInvite(nil).Remove(map[string]any{"id": "organization_invite_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrganizationInviteEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrganizationMetaEntity

```go
organizationMeta := client.OrganizationMeta(nil)
fmt.Println(organizationMeta.GetName()) // "organization_meta"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowedAuthServices` | `string` | Yes | Allowed authentication providers, empty array means all are allowed. |
| `region` | `string` | Yes | The region the workspace is hosted in. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.OrganizationMeta(nil).Load(map[string]any{"url_key": "url_key"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrganizationMetaEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PasskeyLoginStartResponseEntity

```go
passkeyLoginStartResponse := client.PasskeyLoginStartResponse(nil)
fmt.Println(passkeyLoginStartResponse.GetName()) // "passkey_login_start_response"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `options` | `any` | Yes | The passkey authentication options to pass to the WebAuthn API. |
| `success` | `bool` | Yes | Whether the operation was successful. |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.PasskeyLoginStartResponse(nil).Update(map[string]any{
    "auth_id": "auth_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PasskeyLoginStartResponseEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectEntity

```go
project := client.Project(nil)
fmt.Println(project.GetName()) // "project"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `autoArchivedAt` | `any` | No | The time at which the project was automatically archived by the auto-pruning process. |
| `canceledAt` | `any` | No | The time at which the project was moved into a canceled status. |
| `color` | `string` | Yes | The project's color as a HEX string. |
| `completedAt` | `any` | No | The time at which the project was moved into a completed status. |
| `completedIssueCountHistory` | `float64` | Yes | The number of completed issues in the project at the end of each week since project creation. |
| `completedScopeHistory` | `float64` | Yes | The number of completed estimation points at the end of each week since project creation. |
| `content` | `string` | No | The project's content in markdown format. |
| `contentState` | `string` | No | [Internal] The project's content as YJS state. |
| `convertedFromIssue` | `map[string]any` | No | The issue that was converted into this project. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `map[string]any` | No | The user who created the project. |
| `currentProgress` | `any` | Yes | [INTERNAL] The current progress of the project, broken down by issue status category. |
| `description` | `string` | Yes | The short description of the project. |
| `documentContent` | `map[string]any` | No | The content of the project description. |
| `favorite` | `map[string]any` | No | The user's favorite associated with this project. |
| `frequencyResolution` | `string` | Yes | The resolution of the reminder frequency. |
| `health` | `string` | No | The overall health of the project, derived from the most recent project update. |
| `healthUpdatedAt` | `any` | No | The time at which the project health was last updated, typically when a new project update is posted. |
| `icon` | `string` | No | The icon of the project. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `identifier` | `string` | No | [Internal] The human-readable identifier of the project. |
| `inProgressScopeHistory` | `float64` | Yes | The number of in-progress estimation points at the end of each week since project creation. |
| `integrationsSettings` | `map[string]any` | No | Settings for all integrations associated with that project. |
| `issueCountHistory` | `float64` | Yes | The total number of issues in the project at the end of each week since project creation. |
| `labelIds` | `string` | Yes | The IDs of the project labels associated with this project. |
| `lastAppliedTemplate` | `map[string]any` | No | The last template that was applied to this project. |
| `lastUpdate` | `map[string]any` | No | The most recent status update posted for this project. |
| `lead` | `map[string]any` | No | The user who leads the project. |
| `leadTeam` | `map[string]any` | No | [Internal] The team that leads the project. |
| `microsoftTeamsChannelId` | `string` | No | The ID of the Microsoft Teams channel connected to the project, if any. |
| `name` | `string` | Yes | The name of the project. |
| `previousIdentifiers` | `string` | Yes | [Internal] Identifiers (default and custom) that this project has previously held. |
| `priority` | `int` | Yes | The priority of the project. |
| `priorityLabel` | `string` | Yes | The priority of the project as a label. |
| `prioritySortOrder` | `float64` | Yes | The sort order for the project within the workspace when ordered by priority. |
| `progress` | `float64` | Yes | The overall progress of the project. |
| `progressHistory` | `any` | Yes | [INTERNAL] The progress history of the project, tracking issue completion over time. |
| `projectUpdateRemindersPausedUntilAt` | `any` | No | The time until which project update reminders are paused. |
| `resourceCount` | `int` | Yes | The number of resources associated with the project, including documents, external links, and attachments. |
| `scope` | `float64` | Yes | The overall scope (total estimate points) of the project. |
| `scopeHistory` | `float64` | Yes | The total scope (estimation points) of the project at the end of each week since project creation. |
| `slackChannelId` | `string` | No | The ID of the Slack channel connected to the project, if any. |
| `slugId` | `string` | Yes | The project's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `float64` | Yes | The sort order for the project within the workspace. |
| `startDate` | `any` | No | The estimated start date of the project. |
| `startDateResolution` | `string` | No | The resolution of the project's start date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `startedAt` | `any` | No | The time at which the project was moved into a started status. |
| `status` | `map[string]any` | No | The current project status. |
| `targetDate` | `any` | No | The estimated completion date of the project. |
| `targetDateResolution` | `string` | No | The resolution of the project's estimated completion date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `trashed` | `bool` | No | A flag that indicates whether the project is in the trash bin. |
| `updateReminderFrequency` | `float64` | No | The frequency at which to prompt for updates. |
| `updateReminderFrequencyInWeeks` | `float64` | No | The n-weekly frequency at which to prompt for updates. |
| `updateRemindersDay` | `string` | No | The day at which to prompt for updates. |
| `updateRemindersHour` | `float64` | No | The hour at which to prompt for updates. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | Project URL. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Project(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Project(nil).Load(map[string]any{"id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Project(nil).Create(map[string]any{
    "color": "example_color",
    "completedIssueCountHistory": 1,
    "completedScopeHistory": 1,
    "createdAt": "example_createdAt",
    "currentProgress": "example_currentProgress",
    "description": "example_description",
    "frequencyResolution": "example_frequencyResolution",
    "id": "example_id",
    "inProgressScopeHistory": 1,
    "issueCountHistory": 1,
    "labelIds": "example_labelIds",
    "name": "example_name",
    "previousIdentifiers": "example_previousIdentifiers",
    "priority": 1,
    "priorityLabel": "example_priorityLabel",
    "prioritySortOrder": 1,
    "progress": 1,
    "progressHistory": "example_progressHistory",
    "resourceCount": 1,
    "scope": 1,
    "scopeHistory": 1,
    "slugId": "example_slugId",
    "sortOrder": 1,
    "updatedAt": "example_updatedAt",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Project(nil).Update(map[string]any{
    "id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Project(nil).Remove(map[string]any{"id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectLabelEntity

```go
projectLabel := client.ProjectLabel(nil)
fmt.Println(projectLabel.GetName()) // "project_label"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `color` | `string` | Yes | The label's color as a HEX string (e.g., '#EB5757'). |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `map[string]any` | No | The user who created the label. |
| `description` | `string` | No | The label's description. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `inheritedFrom` | `map[string]any` | No | [Internal] The original workspace or parent-team label that this label was inherited from. |
| `isGroup` | `bool` | Yes | Whether the label is a group. |
| `lastAppliedAt` | `any` | No | The date when the label was last applied to an issue, project, or initiative. |
| `name` | `string` | Yes | The label's name. |
| `organization` | `map[string]any` | No | The workspace that the project label belongs to. |
| `parent` | `map[string]any` | No | The parent label group. |
| `retiredAt` | `any` | No | [Internal] When the label was retired. |
| `retiredBy` | `map[string]any` | No | The user who retired the label. |
| `team` | `map[string]any` | No | [Internal] The team that the label is scoped to. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ProjectLabel(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ProjectLabel(nil).Load(map[string]any{"id": "project_label_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ProjectLabel(nil).Create(map[string]any{
    "color": "example_color",
    "createdAt": "example_createdAt",
    "id": "example_id",
    "isGroup": true,
    "name": "example_name",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ProjectLabel(nil).Update(map[string]any{
    "id": "project_label_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ProjectLabel(nil).Remove(map[string]any{"id": "project_label_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectLabelEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectMilestoneEntity

```go
projectMilestone := client.ProjectMilestone(nil)
fmt.Println(projectMilestone.GetName()) // "project_milestone"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `currentProgress` | `any` | Yes | [Internal] The current progress of the milestone, broken down by issue status category. |
| `description` | `string` | No | The project milestone's description in markdown format. |
| `descriptionState` | `string` | No | [Internal] The project milestone's description as YJS state. |
| `documentContent` | `map[string]any` | No | The rich-text content of the milestone description. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `name` | `string` | Yes | The name of the project milestone. |
| `progress` | `float64` | Yes | The progress % of the project milestone. |
| `progressHistory` | `any` | Yes | [Internal] The progress history of the milestone, tracking issue completion over time. |
| `project` | `map[string]any` | No | The project that this milestone belongs to. |
| `sortOrder` | `float64` | Yes | The order of the milestone in relation to other milestones within a project. |
| `status` | `string` | Yes | The status of the project milestone. |
| `targetDate` | `any` | No | The planned completion date of the milestone. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ProjectMilestone(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ProjectMilestone(nil).Load(map[string]any{"id": "project_milestone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ProjectMilestone(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "currentProgress": "example_currentProgress",
    "id": "example_id",
    "name": "example_name",
    "progress": 1,
    "progressHistory": "example_progressHistory",
    "sortOrder": 1,
    "status": "example_status",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ProjectMilestone(nil).Update(map[string]any{
    "id": "project_milestone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ProjectMilestone(nil).Remove(map[string]any{"id": "project_milestone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectMilestoneEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectMilestoneMoveProjectTeamEntity

```go
projectMilestoneMoveProjectTeam := client.ProjectMilestoneMoveProjectTeam(nil)
fmt.Println(projectMilestoneMoveProjectTeam.GetName()) // "project_milestone_move_project_team"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `projectId` | `string` | Yes | The project id |
| `teamIds` | `string` | Yes | The team ids for the project |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ProjectMilestoneMoveProjectTeam(nil).Update(map[string]any{
    "id": "id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectMilestoneMoveProjectTeamEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectRelationEntity

```go
projectRelation := client.ProjectRelation(nil)
fmt.Println(projectRelation.GetName()) // "project_relation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `anchorType` | `string` | Yes | The type of anchor on the source project end of the relation, indicating whether it is anchored to the project itself or a specific milestone. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `project` | `map[string]any` | No | The source project in the dependency relation. |
| `projectMilestone` | `map[string]any` | No | The specific milestone within the source project that the relation is anchored to. |
| `relatedAnchorType` | `string` | Yes | The type of anchor on the target project end of the relation, indicating whether it is anchored to the project itself or a specific milestone. |
| `relatedProject` | `map[string]any` | No | The target project in the dependency relation. |
| `relatedProjectMilestone` | `map[string]any` | No | The specific milestone within the target project that the relation is anchored to. |
| `type` | `string` | Yes | The type of dependency relationship from the project to the related project (e.g., blocks). |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `map[string]any` | No | The user who last created or modified the relation. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ProjectRelation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ProjectRelation(nil).Load(map[string]any{"id": "project_relation_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ProjectRelation(nil).Create(map[string]any{
    "anchorType": "example_anchorType",
    "createdAt": "example_createdAt",
    "id": "example_id",
    "relatedAnchorType": "example_relatedAnchorType",
    "type": "example_type",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ProjectRelation(nil).Update(map[string]any{
    "id": "project_relation_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ProjectRelation(nil).Remove(map[string]any{"id": "project_relation_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectRelationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectSearchResultEntity

```go
projectSearchResult := client.ProjectSearchResult(nil)
fmt.Println(projectSearchResult.GetName()) // "project_search_result"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `autoArchivedAt` | `any` | No | The time at which the project was automatically archived by the auto-pruning process. |
| `canceledAt` | `any` | No | The time at which the project was moved into a canceled status. |
| `color` | `string` | Yes | The project's color as a HEX string. |
| `completedAt` | `any` | No | The time at which the project was moved into a completed status. |
| `completedIssueCountHistory` | `float64` | Yes | The number of completed issues in the project at the end of each week since project creation. |
| `completedScopeHistory` | `float64` | Yes | The number of completed estimation points at the end of each week since project creation. |
| `content` | `string` | No | The project's content in markdown format. |
| `contentState` | `string` | No | [Internal] The project's content as YJS state. |
| `convertedFromIssue` | `map[string]any` | No | The issue that was converted into this project. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `map[string]any` | No | The user who created the project. |
| `currentProgress` | `any` | Yes | [INTERNAL] The current progress of the project, broken down by issue status category. |
| `description` | `string` | Yes | The short description of the project. |
| `documentContent` | `map[string]any` | No | The content of the project description. |
| `favorite` | `map[string]any` | No | The user's favorite associated with this project. |
| `frequencyResolution` | `string` | Yes | The resolution of the reminder frequency. |
| `health` | `string` | No | The overall health of the project, derived from the most recent project update. |
| `healthUpdatedAt` | `any` | No | The time at which the project health was last updated, typically when a new project update is posted. |
| `icon` | `string` | No | The icon of the project. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `identifier` | `string` | No | [Internal] The human-readable identifier of the project. |
| `inProgressScopeHistory` | `float64` | Yes | The number of in-progress estimation points at the end of each week since project creation. |
| `integrationsSettings` | `map[string]any` | No | Settings for all integrations associated with that project. |
| `issueCountHistory` | `float64` | Yes | The total number of issues in the project at the end of each week since project creation. |
| `labelIds` | `string` | Yes | The IDs of the project labels associated with this project. |
| `lastAppliedTemplate` | `map[string]any` | No | The last template that was applied to this project. |
| `lastUpdate` | `map[string]any` | No | The most recent status update posted for this project. |
| `lead` | `map[string]any` | No | The user who leads the project. |
| `leadTeam` | `map[string]any` | No | [Internal] The team that leads the project. |
| `metadata` | `any` | Yes | Metadata related to search result. |
| `microsoftTeamsChannelId` | `string` | No | The ID of the Microsoft Teams channel connected to the project, if any. |
| `name` | `string` | Yes | The name of the project. |
| `previousIdentifiers` | `string` | Yes | [Internal] Identifiers (default and custom) that this project has previously held. |
| `priority` | `int` | Yes | The priority of the project. |
| `priorityLabel` | `string` | Yes | The priority of the project as a label. |
| `prioritySortOrder` | `float64` | Yes | The sort order for the project within the workspace when ordered by priority. |
| `progress` | `float64` | Yes | The overall progress of the project. |
| `progressHistory` | `any` | Yes | [INTERNAL] The progress history of the project, tracking issue completion over time. |
| `projectUpdateRemindersPausedUntilAt` | `any` | No | The time until which project update reminders are paused. |
| `resourceCount` | `int` | Yes | The number of resources associated with the project, including documents, external links, and attachments. |
| `scope` | `float64` | Yes | The overall scope (total estimate points) of the project. |
| `scopeHistory` | `float64` | Yes | The total scope (estimation points) of the project at the end of each week since project creation. |
| `slackChannelId` | `string` | No | The ID of the Slack channel connected to the project, if any. |
| `slugId` | `string` | Yes | The project's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `float64` | Yes | The sort order for the project within the workspace. |
| `startDate` | `any` | No | The estimated start date of the project. |
| `startDateResolution` | `string` | No | The resolution of the project's start date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `startedAt` | `any` | No | The time at which the project was moved into a started status. |
| `status` | `map[string]any` | No | The current project status. |
| `targetDate` | `any` | No | The estimated completion date of the project. |
| `targetDateResolution` | `string` | No | The resolution of the project's estimated completion date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `trashed` | `bool` | No | A flag that indicates whether the project is in the trash bin. |
| `updateReminderFrequency` | `float64` | No | The frequency at which to prompt for updates. |
| `updateReminderFrequencyInWeeks` | `float64` | No | The n-weekly frequency at which to prompt for updates. |
| `updateRemindersDay` | `string` | No | The day at which to prompt for updates. |
| `updateRemindersHour` | `float64` | No | The hour at which to prompt for updates. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | Project URL. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ProjectSearchResult(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectSearchResultEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectStatusEntity

```go
projectStatus := client.ProjectStatus(nil)
fmt.Println(projectStatus.GetName()) // "project_status"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `color` | `string` | Yes | The color of the status as a HEX string, used for display in the UI. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `description` | `string` | No | Description of the status. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `indefinite` | `bool` | Yes | Whether a project can remain in this status indefinitely. |
| `inheritedFrom` | `map[string]any` | No | [Internal] The original workspace or parent-team status that this status was inherited from. |
| `name` | `string` | Yes | The name of the status. |
| `position` | `float64` | Yes | The position of the status within its type group in the workspace's project flow. |
| `team` | `map[string]any` | No | [Internal] The team that the status is scoped to. |
| `type` | `string` | Yes | The category type of the project status (e.g., backlog, planned, started, paused, completed, canceled). |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ProjectStatus(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ProjectStatus(nil).Load(map[string]any{"id": "project_status_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ProjectStatus(nil).Create(map[string]any{
    "color": "example_color",
    "createdAt": "example_createdAt",
    "id": "example_id",
    "indefinite": true,
    "name": "example_name",
    "position": 1,
    "type": "example_type",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ProjectStatus(nil).Update(map[string]any{
    "id": "project_status_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectStatusEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectUpdateEntity

```go
projectUpdate := client.ProjectUpdate(nil)
fmt.Println(projectUpdate.GetName()) // "project_update"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `body` | `string` | Yes | The update content in markdown format. |
| `bodyData` | `string` | Yes | [Internal] The content of the update as a Prosemirror document. |
| `commentCount` | `int` | Yes | Number of comments associated with the project update. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `diff` | `any` | No | The diff between the current update and the previous one. |
| `diffMarkdown` | `string` | No | The diff between the current update and the previous one, formatted as markdown. |
| `editedAt` | `any` | No | The time the update was edited. |
| `health` | `string` | Yes | The health of the project at the time this update was posted. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `infoSnapshot` | `any` | No | [Internal] A snapshot of project properties at the time the update was posted, including team, milestone, and issue statistics. |
| `isDiffHidden` | `bool` | Yes | Whether the diff between this update and the previous one should be hidden in the UI. |
| `isStale` | `bool` | Yes | Whether the project update is stale. |
| `project` | `map[string]any` | No | The project that this status update was posted to. |
| `reactionData` | `any` | Yes | Emoji reaction summary, grouped by emoji type. |
| `shortSummary` | `string` | No | A short AI-generated summary of the project update. |
| `slugId` | `string` | Yes | The update's unique URL slug. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | The URL to the project update. |
| `user` | `map[string]any` | No | The user who wrote the update. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ProjectUpdate(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ProjectUpdate(nil).Load(map[string]any{"id": "project_update_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ProjectUpdate(nil).Create(map[string]any{
    "body": "example_body",
    "bodyData": "example_bodyData",
    "commentCount": 1,
    "createdAt": "example_createdAt",
    "health": "example_health",
    "id": "example_id",
    "isDiffHidden": true,
    "isStale": true,
    "reactionData": "example_reactionData",
    "slugId": "example_slugId",
    "updatedAt": "example_updatedAt",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ProjectUpdate(nil).Update(map[string]any{
    "id": "project_update_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ProjectUpdate(nil).Remove(map[string]any{"id": "project_update_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectUpdateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PushSubscriptionEntity

```go
pushSubscription := client.PushSubscription(nil)
fmt.Println(pushSubscription.GetName()) // "push_subscription"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.PushSubscription(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "id": "example_id",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.PushSubscription(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PushSubscriptionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ReactionEntity

```go
reaction := client.Reaction(nil)
fmt.Println(reaction.GetName()) // "reaction"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `comment` | `map[string]any` | No | The comment that the reaction is associated with. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `emoji` | `string` | Yes | The name of the emoji used for this reaction. |
| `externalUser` | `map[string]any` | No | The external user that created the reaction through an integration. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiativeUpdate` | `map[string]any` | No | The initiative update that the reaction is associated with. |
| `issue` | `map[string]any` | No | The issue that the reaction is associated with. |
| `post` | `map[string]any` | No | The post that the reaction is associated with. |
| `projectUpdate` | `map[string]any` | No | The project update that the reaction is associated with. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `map[string]any` | No | The workspace user that created the reaction. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Reaction(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "emoji": "example_emoji",
    "id": "example_id",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Reaction(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReactionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ReleaseEntity

```go
release := client.Release(nil)
fmt.Println(release.GetName()) // "release"
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
| `creator` | `map[string]any` | No | The user who created the release. |
| `currentProgress` | `any` | Yes | The current progress summary for the release, including counts of issues by workflow state type (e.g., completed, in progress, unstarted). |
| `description` | `string` | No | The description of the release in plain text or markdown. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `issueCount` | `int` | Yes | Number of issues associated with the release. |
| `name` | `string` | Yes | The name of the release. |
| `pipeline` | `map[string]any` | No | The release pipeline that this release belongs to. |
| `progressHistory` | `any` | Yes | The historical progress snapshots for the release, tracking how issue completion has evolved over time. |
| `releaseNote` | `map[string]any` | No | [Internal] The primary release note covering this release. |
| `slugId` | `string` | Yes | The release's unique URL slug, used to construct human-readable URLs for the release. |
| `stage` | `map[string]any` | No | The current stage of the release within its pipeline (e.g., Planned, In Progress, Completed, Canceled). |
| `startDate` | `any` | No | The estimated start date of the release. |
| `startedAt` | `any` | No | The time at which the release first entered a started stage. |
| `targetDate` | `any` | No | The estimated completion date of the release. |
| `trashed` | `bool` | No | A flag that indicates whether the release is in the trash bin. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | The URL to the release page in the Linear app. |
| `version` | `string` | No | The version identifier for this release (e.g., 'v1.2.3' or a short commit hash). |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Release(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Release(nil).Load(map[string]any{"id": "release_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Release(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "currentProgress": "example_currentProgress",
    "id": "example_id",
    "issueCount": 1,
    "name": "example_name",
    "progressHistory": "example_progressHistory",
    "slugId": "example_slugId",
    "updatedAt": "example_updatedAt",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Release(nil).Update(map[string]any{
    "id": "release_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Release(nil).Remove(map[string]any{"id": "release_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReleaseEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ReleaseNoteEntity

```go
releaseNote := client.ReleaseNote(nil)
fmt.Println(releaseNote.GetName()) // "release_note"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `documentContent` | `map[string]any` | No | Document content backing the release note body. |
| `firstRelease` | `map[string]any` | No | The earliest release covered by this note. |
| `generationStatus` | `string` | No | Generation status when these release notes are being auto-generated: `pending` while the LLM call is running, `completed` once it lands. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `lastRelease` | `map[string]any` | No | The most recent release covered by this note. |
| `pipeline` | `map[string]any` | No | The release pipeline that this note belongs to. |
| `releaseCount` | `int` | Yes | The number of releases covered by this note. |
| `slugId` | `string` | Yes | The release note's unique URL slug, used to construct human-readable URLs for the note. |
| `title` | `string` | No | User-supplied title for the release note. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | The URL to the release note page in the Linear app. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ReleaseNote(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ReleaseNote(nil).Load(map[string]any{"id": "release_note_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ReleaseNote(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "id": "example_id",
    "releaseCount": 1,
    "slugId": "example_slugId",
    "updatedAt": "example_updatedAt",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ReleaseNote(nil).Update(map[string]any{
    "id": "release_note_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ReleaseNote(nil).Remove(map[string]any{"id": "release_note_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReleaseNoteEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ReleasePipelineEntity

```go
releasePipeline := client.ReleasePipeline(nil)
fmt.Println(releasePipeline.GetName()) // "release_pipeline"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approximateReleaseCount` | `int` | Yes | The approximate number of non-archived releases in this pipeline. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `autoGenerateReleaseNotesOnCompletion` | `bool` | Yes | Whether to automatically generate a release note when a release is completed. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `includePathPatterns` | `string` | Yes | Glob patterns to filter commits by file path. |
| `isProduction` | `bool` | Yes | Whether this pipeline targets a production environment. |
| `latestReleaseNote` | `map[string]any` | No | The release note in this pipeline whose covered range ends with the most recent release. |
| `name` | `string` | Yes | The name of the pipeline. |
| `releaseNoteTemplate` | `map[string]any` | No | The document template used to define the release notes format for this pipeline. |
| `rolloverIssuesOnCompletion` | `bool` | Yes | Whether completing a scheduled release moves its open issues to the next release. |
| `slugId` | `string` | Yes | The pipeline's unique slug identifier, used in URLs and for lookup by human-readable identifier instead of UUID. |
| `trashed` | `bool` | No | A flag that indicates whether the pipeline is in the trash bin. |
| `type` | `string` | Yes | The type of the pipeline, which determines how releases are created and managed. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | The URL to the release pipeline's releases list in the Linear app. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ReleasePipeline(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ReleasePipeline(nil).Load(map[string]any{"id": "release_pipeline_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ReleasePipeline(nil).Create(map[string]any{
    "approximateReleaseCount": 1,
    "autoGenerateReleaseNotesOnCompletion": true,
    "createdAt": "example_createdAt",
    "id": "example_id",
    "includePathPatterns": "example_includePathPatterns",
    "isProduction": true,
    "name": "example_name",
    "rolloverIssuesOnCompletion": true,
    "slugId": "example_slugId",
    "type": "example_type",
    "updatedAt": "example_updatedAt",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ReleasePipeline(nil).Update(map[string]any{
    "id": "release_pipeline_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ReleasePipeline(nil).Remove(map[string]any{"id": "release_pipeline_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReleasePipelineEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ReleaseStageEntity

```go
releaseStage := client.ReleaseStage(nil)
fmt.Println(releaseStage.GetName()) // "release_stage"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `color` | `string` | Yes | The display color of the stage as a HEX string (e.g., '#0f783c'), used for visual representation in the UI. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `frozen` | `bool` | Yes | Whether this stage is frozen. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `name` | `string` | Yes | The name of the stage. |
| `pipeline` | `map[string]any` | No | The release pipeline that this stage belongs to. |
| `position` | `float64` | Yes | The position of the stage within its pipeline, used for ordering stages in the UI. |
| `type` | `string` | Yes | The lifecycle type of the stage (planned, started, completed, or canceled). |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ReleaseStage(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ReleaseStage(nil).Load(map[string]any{"id": "release_stage_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ReleaseStage(nil).Create(map[string]any{
    "color": "example_color",
    "createdAt": "example_createdAt",
    "frozen": true,
    "id": "example_id",
    "name": "example_name",
    "position": 1,
    "type": "example_type",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ReleaseStage(nil).Update(map[string]any{
    "id": "release_stage_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReleaseStageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RoadmapEntity

```go
roadmap := client.Roadmap(nil)
fmt.Println(roadmap.GetName()) // "roadmap"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `color` | `string` | No | The roadmap's color. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `map[string]any` | No | The user who created the roadmap. |
| `description` | `string` | No | The description of the roadmap. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `name` | `string` | Yes | The name of the roadmap. |
| `organization` | `map[string]any` | No | The workspace of the roadmap. |
| `owner` | `map[string]any` | No | The user who owns the roadmap. |
| `slugId` | `string` | Yes | The roadmap's unique URL slug. |
| `sortOrder` | `float64` | Yes | The sort order of the roadmap within the workspace. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | The canonical url for the roadmap. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Roadmap(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Roadmap(nil).Load(map[string]any{"id": "roadmap_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Roadmap(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "id": "example_id",
    "name": "example_name",
    "slugId": "example_slugId",
    "sortOrder": 1,
    "updatedAt": "example_updatedAt",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Roadmap(nil).Update(map[string]any{
    "id": "roadmap_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Roadmap(nil).Remove(map[string]any{"id": "roadmap_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RoadmapEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RoadmapToProjectEntity

```go
roadmapToProject := client.RoadmapToProject(nil)
fmt.Println(roadmapToProject.GetName()) // "roadmap_to_project"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `project` | `map[string]any` | No | The project that the roadmap is associated with. |
| `roadmap` | `map[string]any` | No | The roadmap that the project is associated with. |
| `sortOrder` | `string` | Yes | The sort order of the project within the roadmap. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.RoadmapToProject(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.RoadmapToProject(nil).Load(map[string]any{"id": "roadmap_to_project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.RoadmapToProject(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "id": "example_id",
    "sortOrder": "example_sortOrder",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.RoadmapToProject(nil).Update(map[string]any{
    "id": "roadmap_to_project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.RoadmapToProject(nil).Remove(map[string]any{"id": "roadmap_to_project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RoadmapToProjectEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SlaConfigurationEntity

```go
slaConfiguration := client.SlaConfiguration(nil)
fmt.Println(slaConfiguration.GetName()) // "sla_configuration"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conditions` | `any` | Yes | The workflow conditions that determine when this SLA rule applies. |
| `id` | `string` | Yes | The identifier of the SLA rule. |
| `name` | `string` | Yes | The name of the SLA rule. |
| `removesSla` | `bool` | Yes | Whether the rule removes an SLA instead of setting one. |
| `sla` | `float64` | No | The SLA value configured by the rule, expressed in milliseconds or business days depending on the day-count type. |
| `slaType` | `string` | No | The SLA type used when the rule sets an SLA. |
| `startMode` | `string` | No | When SLA timing begins. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SlaConfiguration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SlaConfigurationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SsoUrlFromEmailResponseEntity

```go
ssoUrlFromEmailResponse := client.SsoUrlFromEmailResponse(nil)
fmt.Println(ssoUrlFromEmailResponse.GetName()) // "sso_url_from_email_response"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `samlSsoUrl` | `string` | Yes | SAML SSO sign-in URL. |
| `success` | `bool` | Yes | Whether the operation was successful. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.SsoUrlFromEmailResponse(nil).Load(map[string]any{"email": "email", "type": "type"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SsoUrlFromEmailResponseEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TeamEntity

```go
team := client.Team(nil)
fmt.Println(team.GetName()) // "team"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeCycle` | `map[string]any` | No | Team's currently active cycle. |
| `aiDiscussionSummariesEnabled` | `bool` | Yes | Whether to enable AI discussion summaries for issues in this team. |
| `aiThreadSummariesEnabled` | `bool` | Yes | Whether to enable resolved thread AI summaries. |
| `allMembersCanJoin` | `bool` | No | Whether all members in the workspace can join the team. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `autoArchivePeriod` | `float64` | Yes | Period after which automatically closed, completed, and duplicate issues are automatically archived in months. |
| `autoCloseChildIssues` | `bool` | No | Whether child issues should automatically close when their parent issue is closed |
| `autoCloseParentIssues` | `bool` | No | Whether parent issues should automatically close when all child issues are closed |
| `autoClosePeriod` | `float64` | No | Period after which issues are automatically closed in months. |
| `autoCloseStateId` | `string` | No | The canceled workflow state which auto closed issues will be set to. |
| `color` | `string` | No | The team's color. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `currentProgress` | `any` | Yes | [Internal] The current progress of the team. |
| `cycleCalenderUrl` | `string` | Yes | Calendar feed URL (iCal) for cycles. |
| `cycleCooldownTime` | `float64` | Yes | The cooldown time after each cycle in weeks. |
| `cycleDuration` | `float64` | Yes | The duration of each cycle in weeks. |
| `cycleIssueAutoAssignCompleted` | `bool` | Yes | Auto assign completed issues to current cycle. |
| `cycleIssueAutoAssignStarted` | `bool` | Yes | Auto assign started issues to current cycle. |
| `cycleLockToActive` | `bool` | Yes | Auto assign issues to current cycle if in active status. |
| `cycleStartDay` | `float64` | Yes | The day of the week that a new cycle starts (0 = Sunday, 1 = Monday, ..., 6 = Saturday). |
| `cyclesEnabled` | `bool` | Yes | Whether the team uses cycles for sprint-style issue management. |
| `defaultIssueEstimate` | `float64` | Yes | What to use as a default estimate for unestimated issues. |
| `defaultIssueState` | `map[string]any` | No | The default workflow state into which issues are set when they are opened by team members. |
| `defaultProjectTemplate` | `map[string]any` | No | The default template to use for new projects created for the team. |
| `defaultTemplateForMembers` | `map[string]any` | No | The default template to use for new issues created by members of the team. |
| `defaultTemplateForNonMembers` | `map[string]any` | No | The default template to use for new issues created by non-members of the team. |
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
| `integrationsSettings` | `map[string]any` | No | Settings for all integrations associated with that team. |
| `issueCount` | `int` | Yes | The total number of issues in the team. |
| `issueEstimationAllowZero` | `bool` | Yes | Whether to allow zeros in issues estimates. |
| `issueEstimationExtended` | `bool` | Yes | Whether to add additional points to the estimate scale. |
| `issueEstimationType` | `string` | Yes | The issue estimation type to use. |
| `joinByDefault` | `bool` | No | [Internal] Whether new users should join this team by default. |
| `key` | `string` | Yes | The team's unique key, used as a prefix in issue identifiers (e.g., 'ENG' in 'ENG-123') and in URLs. |
| `ledInitiativeCount` | `int` | Yes | The number of initiatives led by this team that would be deleted along with it. |
| `name` | `string` | Yes | The team's name. |
| `organization` | `map[string]any` | No | The workspace that the team belongs to. |
| `parent` | `map[string]any` | No | The team's parent team. |
| `progressHistory` | `any` | Yes | [Internal] The progress history of the team. |
| `requirePriorityToLeaveTriage` | `bool` | Yes | Whether an issue needs to have a priority set before leaving triage. |
| `restrictedBy` | `map[string]any` | No | [Internal] For restricted teams, the enclosing private team that forms the visibility boundary. |
| `restrictedById` | `string` | No | [Internal] The identifier of the enclosing private team that forms the visibility boundary for restricted teams. |
| `retiredAt` | `any` | No | The time at which the team was retired. |
| `scimGroupName` | `string` | No | The SCIM group name for the team. |
| `scimManaged` | `bool` | Yes | Whether the team is managed by a SCIM integration. |
| `securitySettings` | `any` | Yes | Security settings for the team, including role-based restrictions for issue sharing, label management, member management, template management, and agent skills. |
| `setIssueSortOrderOnStateChange` | `string` | Yes | Where to move issues when changing state. |
| `slackAutoCreateProjectChannel` | `bool` | No | [Internal] Whether to automatically create a Slack channel when a new project is created in this team. |
| `timezone` | `string` | Yes | The timezone of the team. |
| `triageEnabled` | `bool` | Yes | Whether triage mode is enabled for the team. |
| `triageIssueState` | `map[string]any` | No | The workflow state into which issues are set when they are opened by non-team members or integrations if triage is enabled. |
| `triageResponsibility` | `map[string]any` | No | Team's triage responsibility. |
| `upcomingCycleCount` | `float64` | Yes | How many upcoming cycles to create. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `visibility` | `string` | Yes | The visibility of the team. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Team(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Team(nil).Load(map[string]any{"id": "team_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Team(nil).Create(map[string]any{
    "aiDiscussionSummariesEnabled": true,
    "aiThreadSummariesEnabled": true,
    "autoArchivePeriod": 1,
    "createdAt": "example_createdAt",
    "currentProgress": "example_currentProgress",
    "cycleCalenderUrl": "example_cycleCalenderUrl",
    "cycleCooldownTime": 1,
    "cycleDuration": 1,
    "cycleIssueAutoAssignCompleted": true,
    "cycleIssueAutoAssignStarted": true,
    "cycleLockToActive": true,
    "cycleStartDay": 1,
    "cyclesEnabled": true,
    "defaultIssueEstimate": 1,
    "displayName": "example_displayName",
    "groupIssueHistory": true,
    "id": "example_id",
    "inheritIssueEstimation": true,
    "inheritProjectStatuses": true,
    "inheritSlackAutoCreateProjectChannel": true,
    "inheritWorkflowStatuses": true,
    "initiativesEnabled": true,
    "issueCount": 1,
    "issueEstimationAllowZero": true,
    "issueEstimationExtended": true,
    "issueEstimationType": "example_issueEstimationType",
    "key": "example_key",
    "ledInitiativeCount": 1,
    "name": "example_name",
    "progressHistory": "example_progressHistory",
    "requirePriorityToLeaveTriage": true,
    "scimManaged": true,
    "securitySettings": "example_securitySettings",
    "setIssueSortOrderOnStateChange": "example_setIssueSortOrderOnStateChange",
    "timezone": "example_timezone",
    "triageEnabled": true,
    "upcomingCycleCount": 1,
    "updatedAt": "example_updatedAt",
    "visibility": "example_visibility",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Team(nil).Update(map[string]any{
    "id": "team_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Team(nil).Remove(map[string]any{"id": "team_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TeamEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TeamMembershipEntity

```go
teamMembership := client.TeamMembership(nil)
fmt.Println(teamMembership.GetName()) // "team_membership"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `owner` | `bool` | Yes | Whether the user is an owner of the team. |
| `sortOrder` | `float64` | Yes | The sort order of this team in the user's personal team list. |
| `team` | `map[string]any` | No | The team that the membership is associated with. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `map[string]any` | No | The user that the membership is associated with. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TeamMembership(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TeamMembership(nil).Load(map[string]any{"id": "team_membership_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TeamMembership(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "id": "example_id",
    "owner": true,
    "sortOrder": 1,
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TeamMembership(nil).Update(map[string]any{
    "id": "team_membership_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.TeamMembership(nil).Remove(map[string]any{"id": "team_membership_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TeamMembershipEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TemplateEntity

```go
template := client.Template(nil)
fmt.Println(template.GetName()) // "template"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `color` | `string` | No | The hex color of the template icon. |
| `content` | `string` | No | The template's content in markdown format: the body it pre-fills on the entity it creates. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `map[string]any` | No | The user who created the template. |
| `description` | `string` | No | A description of what the template is used for. |
| `hasFormFields` | `bool` | Yes | [Internal] Whether the template has form fields |
| `icon` | `string` | No | The icon of the template, either a decorative icon type or an emoji string. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `inheritedFrom` | `map[string]any` | No | The parent team template this template was inherited from. |
| `lastAppliedAt` | `any` | No | The date when the template was last applied to create or update an entity. |
| `lastUpdatedBy` | `map[string]any` | No | The user who last updated the template. |
| `name` | `string` | Yes | The name of the template. |
| `organization` | `map[string]any` | No | The workspace that owns this template. |
| `pipeline` | `map[string]any` | No | The release pipeline this template is bound to. |
| `sortOrder` | `float64` | Yes | The sort order of the template within the templates list. |
| `team` | `map[string]any` | No | The team that the template is associated with. |
| `templateData` | `any` | Yes | The template data as a JSON-encoded string containing the pre-filled attributes for the entity type (e.g., issue fields, project configuration, or document content). |
| `type` | `string` | Yes | The entity type this template is for, such as 'issue', 'project', or 'document'. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Template(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Template(nil).Load(map[string]any{"id": "template_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Template(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "hasFormFields": true,
    "id": "example_id",
    "name": "example_name",
    "sortOrder": 1,
    "templateData": "example_templateData",
    "type": "example_type",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Template(nil).Update(map[string]any{
    "id": "template_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Template(nil).Remove(map[string]any{"id": "template_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TemplateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TimeScheduleEntity

```go
timeSchedule := client.TimeSchedule(nil)
fmt.Println(timeSchedule.GetName()) // "time_schedule"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `externalId` | `string` | No | The identifier of the external schedule. |
| `externalUrl` | `string` | No | The URL to the external schedule. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `integration` | `map[string]any` | No | The identifier of the Linear integration populating the schedule. |
| `name` | `string` | Yes | The name of the schedule. |
| `organization` | `map[string]any` | No | The workspace of the schedule. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TimeSchedule(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TimeSchedule(nil).Load(map[string]any{"id": "time_schedule_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TimeSchedule(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "id": "example_id",
    "name": "example_name",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TimeSchedule(nil).Update(map[string]any{
    "id": "time_schedule_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.TimeSchedule(nil).Remove(map[string]any{"id": "time_schedule_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TimeScheduleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TriageResponsibilityEntity

```go
triageResponsibility := client.TriageResponsibility(nil)
fmt.Println(triageResponsibility.GetName()) // "triage_responsibility"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes | The action to take when an issue is added to triage. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `currentUser` | `map[string]any` | No | The user currently responsible for triage. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `team` | `map[string]any` | No | The team to which the triage responsibility belongs to. |
| `timeSchedule` | `map[string]any` | No | The time schedule used for scheduling. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TriageResponsibility(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TriageResponsibility(nil).Load(map[string]any{"id": "triage_responsibility_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TriageResponsibility(nil).Create(map[string]any{
    "action": "example_action",
    "createdAt": "example_createdAt",
    "id": "example_id",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TriageResponsibility(nil).Update(map[string]any{
    "id": "triage_responsibility_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.TriageResponsibility(nil).Remove(map[string]any{"id": "triage_responsibility_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TriageResponsibilityEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UploadFileEntity

```go
uploadFile := client.UploadFile(nil)
fmt.Println(uploadFile.GetName()) // "upload_file"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assetUrl` | `string` | Yes | The permanent asset URL where the file will be accessible after upload. |
| `contentType` | `string` | Yes | The content type. |
| `filename` | `string` | Yes | The filename. |
| `metaData` | `any` | No | Optional metadata associated with the upload, such as the related issue or comment ID. |
| `size` | `int` | Yes | The size of the uploaded file. |
| `uploadUrl` | `string` | Yes | The pre-signed URL to which the file should be uploaded via a PUT request. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.UploadFile(nil).Create(map[string]any{
    "content_type": "example_content_type",
    "filename": "example_filename",
    "size": 1,
    "assetUrl": "example_assetUrl",
    "contentType": "example_contentType",
    "uploadUrl": "example_uploadUrl",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UploadFileEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UsageAlertEntity

```go
usageAlert := client.UsageAlert(nil)
fmt.Println(usageAlert.GetName()) // "usage_alert"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.UsageAlert(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.UsageAlert(nil).Load(map[string]any{"id": "usage_alert_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UsageAlertEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UserEntity

```go
user := client.User(nil)
fmt.Println(user.GetName()) // "user"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Whether the user account is active or disabled (suspended). |
| `admin` | `bool` | Yes | Whether the user is a workspace administrator. |
| `app` | `bool` | Yes | Whether the user is an app. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `avatarBackgroundColor` | `string` | Yes | The background color of the avatar for users without set avatar. |
| `avatarUrl` | `string` | No | An URL to the user's avatar image. |
| `calendarHash` | `string` | No | [DEPRECATED] Hash for the user to be used in calendar URLs. |
| `canAccessAnyPublicTeam` | `bool` | Yes | Whether this user can access any public team in the workspace. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `createdIssueCount` | `int` | Yes | Number of issues created. |
| `description` | `string` | No | A short description of the user, such as their title or a brief bio. |
| `disableReason` | `string` | No | The reason why the user account is disabled. |
| `displayName` | `string` | Yes | The user's display (nick) name. |
| `email` | `string` | Yes | The user's email address. |
| `gitHubUserId` | `string` | No | The user's GitHub user ID. |
| `guest` | `bool` | Yes | Whether the user is a guest in the workspace and limited to accessing a subset of teams. |
| `hasGitHubCodeAccess` | `bool` | Yes | [Internal] Whether this user can access GitHub source code through Linear. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `identityProvider` | `map[string]any` | No | [INTERNAL] Identity provider the user is managed by. |
| `initials` | `string` | Yes | The initials of the user. |
| `isAssignable` | `bool` | Yes | Whether the user can be assigned to issues. |
| `isMe` | `bool` | Yes | Whether the user is the currently authenticated user. |
| `isMentionable` | `bool` | Yes | Whether the user is mentionable. |
| `lastSeen` | `any` | No | The last time the user was seen online. |
| `name` | `string` | Yes | The user's full name. |
| `organization` | `map[string]any` | No | The workspace that the user belongs to. |
| `owner` | `bool` | Yes | Whether the user is a workspace owner, which is the highest permission level. |
| `statusEmoji` | `string` | No | The emoji representing the user's current status. |
| `statusLabel` | `string` | No | The text label of the user's current status. |
| `statusUntilAt` | `any` | No | The date and time at which the user's current status should be automatically cleared. |
| `supportsAgentSessions` | `bool` | Yes | Whether this agent user supports agent sessions. |
| `timezone` | `string` | No | The local timezone of the user. |
| `title` | `string` | No | The user's job title. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | User's profile URL. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.User(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.User(nil).Load(map[string]any{"id": "user_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.User(nil).Create(map[string]any{
    "active": true,
    "admin": true,
    "app": true,
    "avatarBackgroundColor": "example_avatarBackgroundColor",
    "canAccessAnyPublicTeam": true,
    "createdAt": "example_createdAt",
    "createdIssueCount": 1,
    "displayName": "example_displayName",
    "email": "example_email",
    "guest": true,
    "hasGitHubCodeAccess": true,
    "id": "example_id",
    "initials": "example_initials",
    "isAssignable": true,
    "isMe": true,
    "isMentionable": true,
    "name": "example_name",
    "owner": true,
    "supportsAgentSessions": true,
    "updatedAt": "example_updatedAt",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.User(nil).Update(map[string]any{
    "id": "user_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UserEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UserSettingEntity

```go
userSetting := client.UserSetting(nil)
fmt.Println(userSetting.GetName()) // "user_setting"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `autoAssignToSelf` | `bool` | Yes | Whether to auto-assign newly created issues to the current user by default. |
| `calendarHash` | `string` | No | A unique hash for the user, used to construct secure calendar subscription URLs. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `feedLastSeenTime` | `any` | No | The user's last seen time for the pulse feed. |
| `feedSummarySchedule` | `string` | No | The user's preferred schedule for receiving feed summary digests. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `pullRequestMergeStrategyPreference` | `string` | No | [Internal] The user's preferred merge method for pull requests. |
| `showFullUserNames` | `bool` | Yes | Whether to show full user names instead of display names. |
| `subscribedToChangelog` | `bool` | Yes | Whether this user is subscribed to receive changelog emails about Linear product updates. |
| `subscribedToDPA` | `bool` | Yes | Whether this user is subscribed to receive Data Processing Agreement (DPA) related emails. |
| `subscribedToInviteAccepted` | `bool` | Yes | Whether this user is subscribed to receive email notifications when their workspace invitations are accepted. |
| `subscribedToPrivacyLegalUpdates` | `bool` | Yes | Whether this user is subscribed to receive emails about privacy policy and legal updates. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `map[string]any` | No | The user that these settings belong to. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.UserSetting(nil).Load(map[string]any{"id": "user_setting_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.UserSetting(nil).Create(map[string]any{
    "category": "example_category",
    "channel": "example_channel",
    "subscribe": true,
    "autoAssignToSelf": true,
    "createdAt": "example_createdAt",
    "id": "example_id",
    "showFullUserNames": true,
    "subscribedToChangelog": true,
    "subscribedToDPA": true,
    "subscribedToInviteAccepted": true,
    "subscribedToPrivacyLegalUpdates": true,
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.UserSetting(nil).Update(map[string]any{
    "id": "user_setting_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UserSettingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ViewPreferenceEntity

```go
viewPreference := client.ViewPreference(nil)
fmt.Println(viewPreference.GetName()) // "view_preference"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ViewPreference(nil).Load(map[string]any{"view_type": "view_type"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ViewPreference(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "id": "example_id",
    "type": "example_type",
    "updatedAt": "example_updatedAt",
    "viewType": "example_viewType",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ViewPreference(nil).Update(map[string]any{
    "id": "id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ViewPreference(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ViewPreferenceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WebhookEntity

```go
webhook := client.Webhook(nil)
fmt.Println(webhook.GetName()) // "webhook"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allPublicTeams` | `bool` | Yes | Whether the webhook receives events from all public (non-private) teams in the organization, including teams created after the webhook was set up. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `map[string]any` | No | The user who created the webhook. |
| `enabled` | `bool` | Yes | Whether the webhook is enabled. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `label` | `string` | No | A human-readable label for the webhook, used for identification in the UI. |
| `resourceTypes` | `string` | Yes | The resource types this webhook is subscribed to (e.g., 'Issue', 'Comment', 'Project', 'Cycle'). |
| `secret` | `string` | No | A secret token used to sign webhook payloads with HMAC-SHA256, allowing the recipient to verify that the payload originated from Linear and was not tampered with. |
| `team` | `map[string]any` | No | The single team that the webhook is scoped to. |
| `teamIds` | `string` | No | [INTERNAL] An array of team IDs that the webhook is subscribed to. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | No | The destination URL where webhook payloads will be sent via HTTP POST. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Webhook(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Webhook(nil).Load(map[string]any{"id": "webhook_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Webhook(nil).Create(map[string]any{
    "allPublicTeams": true,
    "createdAt": "example_createdAt",
    "enabled": true,
    "id": "example_id",
    "resourceTypes": "example_resourceTypes",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Webhook(nil).Update(map[string]any{
    "id": "webhook_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Webhook(nil).Remove(map[string]any{"id": "webhook_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WebhookFailureEventEntity

```go
webhookFailureEvent := client.WebhookFailureEvent(nil)
fmt.Println(webhookFailureEvent.GetName()) // "webhook_failure_event"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `executionId` | `string` | Yes | A stable identifier for the webhook delivery attempt. |
| `httpStatus` | `float64` | No | The HTTP status code returned by the webhook recipient. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `responseOrError` | `string` | No | The HTTP response body returned by the recipient, or the error message if the request failed before receiving a response. |
| `url` | `string` | Yes | The URL that the webhook was trying to push to. |
| `webhook` | `map[string]any` | No | The webhook that this failure event is associated with. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.WebhookFailureEvent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WebhookFailureEventEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkflowStateEntity

```go
workflowState := client.WorkflowState(nil)
fmt.Println(workflowState.GetName()) // "workflow_state"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `color` | `string` | Yes | The state's UI color as a HEX string. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `description` | `string` | No | Description of the state. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `inheritedFrom` | `map[string]any` | No | The parent team's workflow state that this state was inherited from. |
| `name` | `string` | Yes | The state's human-readable name (e.g., 'In Progress', 'Done', 'Backlog'). |
| `position` | `float64` | Yes | The position of the state in the team's workflow. |
| `team` | `map[string]any` | No | The team that this workflow state belongs to. |
| `type` | `string` | Yes | The type of the state. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.WorkflowState(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.WorkflowState(nil).Load(map[string]any{"id": "workflow_state_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.WorkflowState(nil).Create(map[string]any{
    "color": "example_color",
    "createdAt": "example_createdAt",
    "id": "example_id",
    "name": "example_name",
    "position": 1,
    "type": "example_type",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.WorkflowState(nil).Update(map[string]any{
    "id": "workflow_state_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkflowStateEntity` instance with the same client and
options.

#### `GetName() string`

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

```go
client := sdk.NewLinearSDK(map[string]any{
    "feature": map[string]any{
        "debug": map[string]any{"active": true},
        "idempotency": map[string]any{"active": true},
        "metrics": map[string]any{"active": true},
        "paging": map[string]any{"active": true},
        "ratelimit": map[string]any{"active": true},
        "retry": map[string]any{"active": true},
        "test": map[string]any{"active": true},
        "timeout": map[string]any{"active": true},
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

