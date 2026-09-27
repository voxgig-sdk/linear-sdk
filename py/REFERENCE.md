# Linear Python SDK Reference

Complete API reference for the Linear Python SDK.


## LinearSDK

### Constructor

```python
from linear_sdk import LinearSDK

client = LinearSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `LinearSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = LinearSDK.test()
```


### Instance Methods

#### `AccessKeyRelease(data=None)`

Create a new `AccessKeyReleaseEntity` instance. Pass `None` for no initial data.

#### `AccessKeyReleasePipeline(data=None)`

Create a new `AccessKeyReleasePipelineEntity` instance. Pass `None` for no initial data.

#### `AgentActivity(data=None)`

Create a new `AgentActivityEntity` instance. Pass `None` for no initial data.

#### `AgentSession(data=None)`

Create a new `AgentSessionEntity` instance. Pass `None` for no initial data.

#### `AgentSkill(data=None)`

Create a new `AgentSkillEntity` instance. Pass `None` for no initial data.

#### `Application(data=None)`

Create a new `ApplicationEntity` instance. Pass `None` for no initial data.

#### `Attachment(data=None)`

Create a new `AttachmentEntity` instance. Pass `None` for no initial data.

#### `AuditEntry(data=None)`

Create a new `AuditEntryEntity` instance. Pass `None` for no initial data.

#### `AuditEntryType(data=None)`

Create a new `AuditEntryTypeEntity` instance. Pass `None` for no initial data.

#### `AuthResolverResponse(data=None)`

Create a new `AuthResolverResponseEntity` instance. Pass `None` for no initial data.

#### `AuthenticationSessionResponse(data=None)`

Create a new `AuthenticationSessionResponseEntity` instance. Pass `None` for no initial data.

#### `Comment(data=None)`

Create a new `CommentEntity` instance. Pass `None` for no initial data.

#### `CreateOrJoinOrganizationResponse(data=None)`

Create a new `CreateOrJoinOrganizationResponseEntity` instance. Pass `None` for no initial data.

#### `CustomView(data=None)`

Create a new `CustomViewEntity` instance. Pass `None` for no initial data.

#### `Customer(data=None)`

Create a new `CustomerEntity` instance. Pass `None` for no initial data.

#### `CustomerNeed(data=None)`

Create a new `CustomerNeedEntity` instance. Pass `None` for no initial data.

#### `CustomerStatus(data=None)`

Create a new `CustomerStatusEntity` instance. Pass `None` for no initial data.

#### `CustomerTier(data=None)`

Create a new `CustomerTierEntity` instance. Pass `None` for no initial data.

#### `Cycle(data=None)`

Create a new `CycleEntity` instance. Pass `None` for no initial data.

#### `Diff(data=None)`

Create a new `DiffEntity` instance. Pass `None` for no initial data.

#### `Document(data=None)`

Create a new `DocumentEntity` instance. Pass `None` for no initial data.

#### `DocumentSearchResult(data=None)`

Create a new `DocumentSearchResultEntity` instance. Pass `None` for no initial data.

#### `EmailIntakeAddress(data=None)`

Create a new `EmailIntakeAddressEntity` instance. Pass `None` for no initial data.

#### `EmailUserAccountAuthChallengeResponse(data=None)`

Create a new `EmailUserAccountAuthChallengeResponseEntity` instance. Pass `None` for no initial data.

#### `Emoji(data=None)`

Create a new `EmojiEntity` instance. Pass `None` for no initial data.

#### `EntityExternalLink(data=None)`

Create a new `EntityExternalLinkEntity` instance. Pass `None` for no initial data.

#### `ExternalUser(data=None)`

Create a new `ExternalUserEntity` instance. Pass `None` for no initial data.

#### `Favorite(data=None)`

Create a new `FavoriteEntity` instance. Pass `None` for no initial data.

#### `GitAutomationState(data=None)`

Create a new `GitAutomationStateEntity` instance. Pass `None` for no initial data.

#### `GitAutomationTargetBranch(data=None)`

Create a new `GitAutomationTargetBranchEntity` instance. Pass `None` for no initial data.

#### `GitHubIntegrationConnectDetail(data=None)`

Create a new `GitHubIntegrationConnectDetailEntity` instance. Pass `None` for no initial data.

#### `Initiative(data=None)`

Create a new `InitiativeEntity` instance. Pass `None` for no initial data.

#### `InitiativeLabel(data=None)`

Create a new `InitiativeLabelEntity` instance. Pass `None` for no initial data.

#### `InitiativeLeadTeamChangeImpact(data=None)`

Create a new `InitiativeLeadTeamChangeImpactEntity` instance. Pass `None` for no initial data.

#### `InitiativeRelation(data=None)`

Create a new `InitiativeRelationEntity` instance. Pass `None` for no initial data.

#### `InitiativeToProject(data=None)`

Create a new `InitiativeToProjectEntity` instance. Pass `None` for no initial data.

#### `InitiativeUpdate(data=None)`

Create a new `InitiativeUpdateEntity` instance. Pass `None` for no initial data.

#### `Integration(data=None)`

Create a new `IntegrationEntity` instance. Pass `None` for no initial data.

#### `IntegrationTemplate(data=None)`

Create a new `IntegrationTemplateEntity` instance. Pass `None` for no initial data.

#### `IntegrationsSetting(data=None)`

Create a new `IntegrationsSettingEntity` instance. Pass `None` for no initial data.

#### `Issue(data=None)`

Create a new `IssueEntity` instance. Pass `None` for no initial data.

#### `IssueImport(data=None)`

Create a new `IssueImportEntity` instance. Pass `None` for no initial data.

#### `IssueLabel(data=None)`

Create a new `IssueLabelEntity` instance. Pass `None` for no initial data.

#### `IssuePriorityValue(data=None)`

Create a new `IssuePriorityValueEntity` instance. Pass `None` for no initial data.

#### `IssueRelation(data=None)`

Create a new `IssueRelationEntity` instance. Pass `None` for no initial data.

#### `IssueSearchResult(data=None)`

Create a new `IssueSearchResultEntity` instance. Pass `None` for no initial data.

#### `IssueToRelease(data=None)`

Create a new `IssueToReleaseEntity` instance. Pass `None` for no initial data.

#### `LogoutResponse(data=None)`

Create a new `LogoutResponseEntity` instance. Pass `None` for no initial data.

#### `Notification(data=None)`

Create a new `NotificationEntity` instance. Pass `None` for no initial data.

#### `NotificationSubscription(data=None)`

Create a new `NotificationSubscriptionEntity` instance. Pass `None` for no initial data.

#### `OAuthApplication(data=None)`

Create a new `OAuthApplicationEntity` instance. Pass `None` for no initial data.

#### `Organization(data=None)`

Create a new `OrganizationEntity` instance. Pass `None` for no initial data.

#### `OrganizationDomain(data=None)`

Create a new `OrganizationDomainEntity` instance. Pass `None` for no initial data.

#### `OrganizationInvite(data=None)`

Create a new `OrganizationInviteEntity` instance. Pass `None` for no initial data.

#### `OrganizationMeta(data=None)`

Create a new `OrganizationMetaEntity` instance. Pass `None` for no initial data.

#### `PasskeyLoginStartResponse(data=None)`

Create a new `PasskeyLoginStartResponseEntity` instance. Pass `None` for no initial data.

#### `Project(data=None)`

Create a new `ProjectEntity` instance. Pass `None` for no initial data.

#### `ProjectLabel(data=None)`

Create a new `ProjectLabelEntity` instance. Pass `None` for no initial data.

#### `ProjectMilestone(data=None)`

Create a new `ProjectMilestoneEntity` instance. Pass `None` for no initial data.

#### `ProjectMilestoneMoveProjectTeam(data=None)`

Create a new `ProjectMilestoneMoveProjectTeamEntity` instance. Pass `None` for no initial data.

#### `ProjectRelation(data=None)`

Create a new `ProjectRelationEntity` instance. Pass `None` for no initial data.

#### `ProjectSearchResult(data=None)`

Create a new `ProjectSearchResultEntity` instance. Pass `None` for no initial data.

#### `ProjectStatus(data=None)`

Create a new `ProjectStatusEntity` instance. Pass `None` for no initial data.

#### `ProjectUpdate(data=None)`

Create a new `ProjectUpdateEntity` instance. Pass `None` for no initial data.

#### `PushSubscription(data=None)`

Create a new `PushSubscriptionEntity` instance. Pass `None` for no initial data.

#### `Reaction(data=None)`

Create a new `ReactionEntity` instance. Pass `None` for no initial data.

#### `Release(data=None)`

Create a new `ReleaseEntity` instance. Pass `None` for no initial data.

#### `ReleaseNote(data=None)`

Create a new `ReleaseNoteEntity` instance. Pass `None` for no initial data.

#### `ReleasePipeline(data=None)`

Create a new `ReleasePipelineEntity` instance. Pass `None` for no initial data.

#### `ReleaseStage(data=None)`

Create a new `ReleaseStageEntity` instance. Pass `None` for no initial data.

#### `Roadmap(data=None)`

Create a new `RoadmapEntity` instance. Pass `None` for no initial data.

#### `RoadmapToProject(data=None)`

Create a new `RoadmapToProjectEntity` instance. Pass `None` for no initial data.

#### `SlaConfiguration(data=None)`

Create a new `SlaConfigurationEntity` instance. Pass `None` for no initial data.

#### `SsoUrlFromEmailResponse(data=None)`

Create a new `SsoUrlFromEmailResponseEntity` instance. Pass `None` for no initial data.

#### `Team(data=None)`

Create a new `TeamEntity` instance. Pass `None` for no initial data.

#### `TeamMembership(data=None)`

Create a new `TeamMembershipEntity` instance. Pass `None` for no initial data.

#### `Template(data=None)`

Create a new `TemplateEntity` instance. Pass `None` for no initial data.

#### `TimeSchedule(data=None)`

Create a new `TimeScheduleEntity` instance. Pass `None` for no initial data.

#### `TriageResponsibility(data=None)`

Create a new `TriageResponsibilityEntity` instance. Pass `None` for no initial data.

#### `UploadFile(data=None)`

Create a new `UploadFileEntity` instance. Pass `None` for no initial data.

#### `UsageAlert(data=None)`

Create a new `UsageAlertEntity` instance. Pass `None` for no initial data.

#### `User(data=None)`

Create a new `UserEntity` instance. Pass `None` for no initial data.

#### `UserSetting(data=None)`

Create a new `UserSettingEntity` instance. Pass `None` for no initial data.

#### `ViewPreference(data=None)`

Create a new `ViewPreferenceEntity` instance. Pass `None` for no initial data.

#### `Webhook(data=None)`

Create a new `WebhookEntity` instance. Pass `None` for no initial data.

#### `WebhookFailureEvent(data=None)`

Create a new `WebhookFailureEventEntity` instance. Pass `None` for no initial data.

#### `WorkflowState(data=None)`

Create a new `WorkflowStateEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## AccessKeyReleaseEntity

```python
access_key_release = client.AccessKeyRelease()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the release was archived. |
| `commitSha` | `str` | No | The Git commit SHA associated with the release. |
| `completedAt` | `Any` | No | The time at which the release was completed. |
| `createdAt` | `Any` | Yes | The time at which the release was created. |
| `id` | `str` | Yes | The unique identifier of the release. |
| `name` | `str` | Yes | The name of the release. |
| `url` | `str` | Yes | The URL to the release page in the Linear app. |
| `version` | `str` | No | The version identifier for this release. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AccessKeyRelease().create({
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "name": "example_name",  # str
    "url": "example_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AccessKeyRelease().list()
for access_key_release in results:
    print(access_key_release)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AccessKeyRelease().load({"id": "access_key_release_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AccessKeyReleaseEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AccessKeyReleasePipelineEntity

```python
access_key_release_pipeline = client.AccessKeyReleasePipeline()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | Yes | The unique identifier of the release pipeline. |
| `includePathPatterns` | `str` | Yes | Glob patterns used to filter commits by changed file path. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AccessKeyReleasePipeline().load({"id": "access_key_release_pipeline_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AccessKeyReleasePipelineEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AgentActivityEntity

```python
agent_activity = client.AgentActivity()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentSession` | `dict` | No | The agent session this activity belongs to. |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `contextualMetadata` | `Any` | No | [Internal] Metadata about user-provided contextual information for this agent activity. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `ephemeral` | `bool` | Yes | Whether the activity is ephemeral, and should disappear after the next agent activity. |
| `executionSkippedReason` | `str` | No | [Internal] The reason this activity was persisted without being sent to the agent runtime. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `queued` | `bool` | Yes | [Internal] Whether this activity is queued for later processing. |
| `sentAt` | `Any` | No | [Internal] The time at which the prompt actually entered the conversation. |
| `signal` | `str` | No | An optional modifier that provides additional instructions on how the activity should be interpreted. |
| `signalMetadata` | `Any` | No | Metadata about this agent activity's signal. |
| `sourceComment` | `dict` | No | The source comment this activity is linked to. |
| `sourceMetadata` | `Any` | No | Metadata about the external source that created this agent activity. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `dict` | No | The user who created this agent activity. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AgentActivity().create({
    "createdAt": "example_createdAt",  # Any
    "ephemeral": True,  # bool
    "id": "example_id",  # str
    "queued": True,  # bool
    "updatedAt": "example_updatedAt",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AgentActivity().list()
for agent_activity in results:
    print(agent_activity)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AgentActivity().load({"id": "agent_activity_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.AgentActivity().update({
    "id": "agent_activity_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentActivityEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AgentSessionEntity

```python
agent_session = client.AgentSession()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `appUser` | `dict` | No | The agent user that is associated with this agent session. |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `codingHarnessModelLabel` | `str` | No | [Internal] Compact display label for the coding harness model used by this session, derived from the latest associated sandbox. |
| `comment` | `dict` | No | The comment this agent session is associated with. |
| `context` | `Any` | Yes | The entity contexts this session is related to, such as issues or projects referenced in direct chat sessions. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `creator` | `dict` | No | The human user responsible for the agent session. |
| `dismissedAt` | `Any` | No | The time a user dismissed this agent session. |
| `dismissedBy` | `dict` | No | The user who dismissed the agent session. |
| `endedAt` | `Any` | No | The time the agent session completed. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `issue` | `dict` | No | The issue this agent session is associated with. |
| `modelSelection` | `Any` | No | [Internal] How Adaptive selected the model route used by this coding session. |
| `plan` | `Any` | No | A dynamically updated plan describing the agent's execution strategy, including steps to be taken and their current status. |
| `pullRequest` | `dict` | No | The pull request this agent session is anchored to, when started from a pull request. |
| `slugId` | `str` | Yes | The agent session's unique URL slug. |
| `sourceComment` | `dict` | No | The comment that this agent session was spawned from, if from a different thread. |
| `sourceMetadata` | `Any` | No | Metadata about the external source that created this agent session. |
| `startedAt` | `Any` | No | The time the agent session transitioned to active status and began work. |
| `status` | `str` | Yes | The current status of the agent session, such as pending, active, awaiting input, complete, error, or stale. |
| `summary` | `str` | No | The session title, generated automatically or set by the owning OAuth application. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `str` | No | The URL to the agent session page in the Linear app. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AgentSession().create({
    "context": "example_context",  # Any
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "slugId": "example_slugId",  # str
    "status": "example_status",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AgentSession().list()
for agent_session in results:
    print(agent_session)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AgentSession().load({"id": "agent_session_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.AgentSession().update({
    "id": "agent_session_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentSessionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AgentSkillEntity

```python
agent_skill = client.AgentSkill()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `body` | `str` | Yes | The skill instructions in markdown format. |
| `color` | `str` | No | The skill's color. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `creator` | `dict` | No | The user who created the skill. |
| `description` | `str` | No | The skill's description. |
| `icon` | `str` | No | The icon of the skill. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `inheritedFrom` | `dict` | No | The parent-team skill this skill was inherited from. |
| `lastUpdatedBy` | `dict` | No | The user who last updated the skill. |
| `lastUsedAt` | `Any` | No | The time the skill was last used by anyone in the workspace. |
| `owner` | `dict` | No | The user who owns the skill. |
| `recentUsageCount` | `float` | Yes | The number of times the skill was used by anyone in the workspace in the last 30 days. |
| `shared` | `bool` | Yes | Whether the skill is shared with everyone in the workspace. |
| `slugId` | `str` | Yes | The skill's unique URL slug. |
| `teamId` | `str` | No | The identifier of the team this skill is shared with. |
| `title` | `str` | Yes | The skill's title. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AgentSkill().create({
    "body": "example_body",  # str
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "recentUsageCount": 1,  # float
    "shared": True,  # bool
    "slugId": "example_slugId",  # str
    "title": "example_title",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AgentSkill().list()
for agent_skill in results:
    print(agent_skill)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AgentSkill().load({"id": "agent_skill_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.AgentSkill().remove({"id": "agent_skill_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.AgentSkill().update({
    "id": "agent_skill_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentSkillEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApplicationEntity

```python
application = client.Application()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `clientId` | `str` | Yes | OAuth application's client ID. |
| `description` | `str` | No | Information about the application. |
| `developer` | `str` | Yes | Name of the developer. |
| `developerUrl` | `str` | Yes | URL of the developer's website, homepage, or documentation. |
| `id` | `str` | Yes | OAuth application's ID. |
| `imageUrl` | `str` | No | Image of the application. |
| `name` | `str` | Yes | Application name. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Application().load({"client_id": "client_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApplicationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AttachmentEntity

```python
attachment = client.Attachment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `bodyData` | `str` | No | The body data of the attachment, if any. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `creator` | `dict` | No | The creator of the attachment. |
| `externalUserCreator` | `dict` | No | The non-Linear user who created the attachment. |
| `groupBySource` | `bool` | Yes | Whether attachments from the same source application should be visually grouped together in the Linear issue detail view. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `issue` | `dict` | No | The issue this attachment belongs to. |
| `metadata` | `Any` | Yes | Integration-specific metadata for this attachment. |
| `originalIssue` | `dict` | No | The issue this attachment was originally created on. |
| `source` | `Any` | No | Information about the source which created the attachment. |
| `sourceType` | `str` | No | The source type of the attachment, derived from the source metadata. |
| `subtitle` | `str` | No | Content for the subtitle line in the Linear attachment widget. |
| `title` | `str` | Yes | Content for the title line in the Linear attachment widget. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `str` | Yes | The URL of the external resource this attachment links to. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Attachment().create({
    "createdAt": "example_createdAt",  # Any
    "groupBySource": True,  # bool
    "id": "example_id",  # str
    "metadata": "example_metadata",  # Any
    "title": "example_title",  # str
    "updatedAt": "example_updatedAt",  # Any
    "url": "example_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Attachment().list()
for attachment in results:
    print(attachment)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Attachment().load({"id": "attachment_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Attachment().remove({"id": "attachment_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Attachment().update({
    "id": "attachment_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AttachmentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AuditEntryEntity

```python
audit_entry = client.AuditEntry()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `dict` | No | The user that caused the audit entry to be created. |
| `actorId` | `str` | No | The ID of the user that caused the audit entry to be created. |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `countryCode` | `str` | No | The ISO 3166-1 alpha-2 country code derived from the request IP address. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `ip` | `str` | No | The IP address of the actor at the time the audited action was performed. |
| `metadata` | `Any` | No | Additional metadata related to the audit entry. |
| `organization` | `dict` | No | The workspace the audit log belongs to. |
| `requestInformation` | `Any` | No | Additional information related to the request which performed the action. |
| `type` | `str` | Yes | The type of audited action (e.g., user authentication, permission change, data export, setting modification). |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AuditEntry().list()
for audit_entry in results:
    print(audit_entry)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AuditEntryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AuditEntryTypeEntity

```python
audit_entry_type = client.AuditEntryType()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | Yes | Description of the audit entry type. |
| `type` | `str` | Yes | The audit entry type. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AuditEntryType().list()
for audit_entry_type in results:
    print(audit_entry_type)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AuditEntryTypeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AuthResolverResponseEntity

```python
auth_resolver_response = client.AuthResolverResponse()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowDomainAccess` | `bool` | No | Should the signup flow allow access for the domain. |
| `email` | `str` | Yes | Email for the authenticated account. |
| `id` | `str` | Yes | User account ID. |
| `lastUsedOrganizationId` | `str` | No | ID of the organization last accessed by the user. |
| `service` | `str` | No | The authentication service used for the current session (e.g., google, email, saml). |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AuthResolverResponse().create({
    "email": "example_email",  # str
    "id": "example_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AuthResolverResponse().load({"id": "auth_resolver_response_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.AuthResolverResponse().update({
    "id": "auth_resolver_response_id",
    "auth_id": "auth_id",
    "response": "response",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AuthResolverResponseEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AuthenticationSessionResponseEntity

```python
authentication_session_response = client.AuthenticationSessionResponse()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `browserType` | `str` | No | Used web browser. |
| `client` | `str` | No | Client used for the session |
| `countryCodes` | `str` | Yes | Country codes of all seen locations. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `detailedName` | `str` | Yes | Detailed name of the session including version information, derived from the user agent. |
| `id` | `str` | Yes |  |
| `ip` | `str` | No | IP address. |
| `isCurrentSession` | `bool` | Yes | Whether this session is the one used to make the current API request. |
| `lastActiveAt` | `Any` | No | When was the session last seen |
| `location` | `str` | No | Human readable location |
| `locationCity` | `str` | No | Location city name. |
| `locationCountry` | `str` | No | Location country name. |
| `locationCountryCode` | `str` | No | Location country code. |
| `locationRegionCode` | `str` | No | Location region code. |
| `name` | `str` | Yes | Name of the session, derived from the client and operating system |
| `operatingSystem` | `str` | No | Operating system used for the session |
| `service` | `str` | No | Service used for logging in. |
| `type` | `str` | Yes | Type of application used to authenticate. |
| `updatedAt` | `Any` | Yes | Date when the session was last updated. |
| `userAgent` | `str` | No | Session's user-agent. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AuthenticationSessionResponse().list()
for authentication_session_response in results:
    print(authentication_session_response)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AuthenticationSessionResponseEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CommentEntity

```python
comment = client.Comment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentSession` | `dict` | No | Agent session associated with this comment. |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `body` | `str` | Yes | The comment content in markdown format. |
| `bodyData` | `str` | Yes | [Internal] The comment content as a ProseMirror document. |
| `botActor` | `dict` | No | The bot that created the comment. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `documentContent` | `dict` | No | The document content that the comment is associated with. |
| `documentContentId` | `str` | No | The ID of the document content that the comment is associated with. |
| `editedAt` | `Any` | No | The time the comment was last edited by its author. |
| `externalThread` | `dict` | No | The external thread that the comment is synced with. |
| `externalUser` | `dict` | No | The external user who wrote the comment, when the comment was created through an integration such as Slack or Intercom. |
| `hideInLinear` | `bool` | Yes | [Internal] Whether the comment should be hidden from Linear clients. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `initiative` | `dict` | No | The initiative that the comment is associated with. |
| `initiativeId` | `str` | No | The ID of the initiative that the comment is associated with. |
| `initiativeUpdate` | `dict` | No | The initiative update that the comment is associated with. |
| `initiativeUpdateId` | `str` | No | The ID of the initiative update that the comment is associated with. |
| `isArtificialAgentSessionRoot` | `bool` | Yes | [Internal] Whether the comment is an artificial placeholder for an agent session thread created without a comment mention. |
| `issue` | `dict` | No | The issue that the comment is associated with. |
| `issueId` | `str` | No | The ID of the issue that the comment is associated with. |
| `onBehalfOf` | `dict` | No | [Internal] The user on whose behalf the comment was created, e.g. |
| `parent` | `dict` | No | The parent comment under which the current comment is nested. |
| `parentId` | `str` | No | The ID of the parent comment under which the current comment is nested. |
| `post` | `dict` | No | The post that the comment is associated with. |
| `project` | `dict` | No | The project that the comment is associated with. |
| `projectId` | `str` | No | The ID of the project that the comment is associated with. |
| `projectUpdate` | `dict` | No | The project update that the comment is associated with. |
| `projectUpdateId` | `str` | No | The ID of the project update that the comment is associated with. |
| `quotedText` | `str` | No | The text that this comment references, used for inline comments on documents or issue descriptions. |
| `reactionData` | `Any` | Yes | Emoji reaction summary for this comment, grouped by emoji type. |
| `resolvedAt` | `Any` | No | The time when the comment thread was resolved. |
| `resolvingComment` | `dict` | No | The child comment that resolved this thread. |
| `resolvingCommentId` | `str` | No | The ID of the child comment that resolved this thread. |
| `resolvingUser` | `dict` | No | The user that resolved the comment thread. |
| `threadSummary` | `Any` | No | [Internal] An AI-generated summary of the comment thread. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `str` | Yes | Comment's URL. |
| `user` | `dict` | No | The user who wrote the comment. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Comment().create({
    "body": "example_body",  # str
    "bodyData": "example_bodyData",  # str
    "createdAt": "example_createdAt",  # Any
    "hideInLinear": True,  # bool
    "id": "example_id",  # str
    "isArtificialAgentSessionRoot": True,  # bool
    "reactionData": "example_reactionData",  # Any
    "updatedAt": "example_updatedAt",  # Any
    "url": "example_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Comment().list()
for comment in results:
    print(comment)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Comment().load({"id": "comment_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Comment().remove({"id": "comment_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Comment().update({
    "id": "comment_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CommentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CreateOrJoinOrganizationResponseEntity

```python
create_or_join_organization_response = client.CreateOrJoinOrganizationResponse()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `organization` | `dict` | No | The workspace that was created or joined. |
| `user` | `dict` | No | The user who created or joined the workspace. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CreateOrJoinOrganizationResponse().create({
})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.CreateOrJoinOrganizationResponse().update({
    "organization_id": "organization_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateOrJoinOrganizationResponseEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomViewEntity

```python
custom_view = client.CustomView()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `color` | `str` | No | The hex color code of the custom view icon. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `creator` | `dict` | No | The user who originally created the custom view. |
| `description` | `str` | No | The description of the custom view. |
| `facet` | `dict` | No | [INTERNAL] The facet that links this custom view to its parent entity (project, initiative, team page, etc.). |
| `feedItemFilterData` | `Any` | No | The filter applied to feed items in the custom view. |
| `filterData` | `Any` | Yes | The structured filter applied to issues in the custom view. |
| `icon` | `str` | No | The icon of the custom view. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `initiativeFilterData` | `Any` | No | The filter applied to initiatives in the custom view. |
| `modelName` | `str` | Yes | The entity type this view displays. |
| `name` | `str` | Yes | The name of the custom view, displayed in the sidebar and navigation. |
| `organization` | `dict` | No | The workspace of the custom view. |
| `organizationViewPreferences` | `dict` | No | The workspace-level default view preferences for this custom view, if any have been set. |
| `owner` | `dict` | No | The user who owns the custom view. |
| `projectFilterData` | `Any` | No | The filter applied to projects in the custom view. |
| `shared` | `bool` | Yes | Whether the custom view is shared with everyone in the organization. |
| `slugId` | `str` | Yes | The custom view's unique URL slug, used to construct human-readable URLs. |
| `team` | `dict` | No | The team that the custom view is scoped to. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |
| `updatedBy` | `dict` | No | The user who last updated the custom view. |
| `userViewPreferences` | `dict` | No | The current user's personal view preferences for this custom view, if they have set any. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CustomView().create({
    "createdAt": "example_createdAt",  # Any
    "filterData": "example_filterData",  # Any
    "id": "example_id",  # str
    "modelName": "example_modelName",  # str
    "name": "example_name",  # str
    "shared": True,  # bool
    "slugId": "example_slugId",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CustomView().list()
for custom_view in results:
    print(custom_view)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CustomView().load({"id": "custom_view_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.CustomView().remove({"id": "custom_view_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.CustomView().update({
    "id": "custom_view_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomViewEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomerEntity

```python
customer = client.Customer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approximateNeedCount` | `float` | Yes | The approximate number of distinct requests associated with this customer, deduplicated per issue or project. |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `domains` | `str` | Yes | The email domains associated with this customer (e.g., 'acme.com'). |
| `externalIds` | `str` | Yes | Identifiers for this customer in external systems (e.g., CRM IDs from Intercom, Salesforce, or HubSpot). |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `integration` | `dict` | No | The integration that manages this customer's data (e.g., Intercom, Salesforce). |
| `logoUrl` | `str` | No | URL of the customer's logo image. |
| `mainSourceId` | `str` | No | The primary external source ID when a customer has data from multiple external systems. |
| `name` | `str` | Yes | The display name of the customer organization. |
| `owner` | `dict` | No | The workspace member assigned as the owner of this customer. |
| `revenue` | `int` | No | The annual revenue generated by this customer. |
| `size` | `float` | No | The number of employees or seats at the customer organization. |
| `slackChannelId` | `str` | No | The ID of the Slack channel linked to this customer for communication. |
| `slugId` | `str` | Yes | A unique, human-readable URL slug for the customer. |
| `status` | `dict` | No | The current lifecycle status of the customer. |
| `tier` | `dict` | No | The tier or segment assigned to this customer for prioritization (e.g., Enterprise, Pro, Free). |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `str` | Yes | The URL of the customer's page in the Linear application. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Customer().create({
    "approximateNeedCount": 1,  # float
    "createdAt": "example_createdAt",  # Any
    "domains": "example_domains",  # str
    "externalIds": "example_externalIds",  # str
    "id": "example_id",  # str
    "name": "example_name",  # str
    "slugId": "example_slugId",  # str
    "updatedAt": "example_updatedAt",  # Any
    "url": "example_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Customer().list()
for customer in results:
    print(customer)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Customer().load({"id": "customer_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Customer().remove({"id": "customer_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Customer().update({
    "id": "customer_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomerNeedEntity

```python
customer_need = client.CustomerNeed()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `attachment` | `dict` | No | The issue attachment linked to this need. |
| `body` | `str` | No | The body content of the need in Markdown format. |
| `bodyData` | `str` | No | [Internal] The body content of the need as a Prosemirror document JSON string. |
| `comment` | `dict` | No | An optional comment providing additional context for this need. |
| `content` | `str` | No | The effective Markdown content shown for this customer need. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `creator` | `dict` | No | The user who manually created this customer need. |
| `customer` | `dict` | No | The customer organization this need belongs to. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `issue` | `dict` | No | The issue this need is linked to. |
| `originalIssue` | `dict` | No | The issue this customer need was originally created on, before being moved to a different issue or project. |
| `priority` | `float` | Yes | Whether the customer need is important or not. |
| `project` | `dict` | No | The project this need is linked to. |
| `projectAttachment` | `dict` | No | The project attachment linked to this need. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `str` | No | The URL of the source attachment linked to this need, if any. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CustomerNeed().create({
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "priority": 1,  # float
    "updatedAt": "example_updatedAt",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CustomerNeed().list()
for customer_need in results:
    print(customer_need)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CustomerNeed().load({"id": "customer_need_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.CustomerNeed().remove({"id": "customer_need_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.CustomerNeed().update({
    "id": "customer_need_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomerNeedEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomerStatusEntity

```python
customer_status = client.CustomerStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `color` | `str` | Yes | The color of the status indicator in the UI, as a HEX string (e.g., '#ff0000'). |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `description` | `str` | No | An optional description explaining what this status represents in the customer lifecycle. |
| `displayName` | `str` | Yes | The user-facing display name of the status shown in the UI. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `name` | `str` | Yes | The internal name of the status. |
| `position` | `float` | Yes | The sort position of the status in the workspace's customer lifecycle flow. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CustomerStatus().create({
    "color": "example_color",  # str
    "createdAt": "example_createdAt",  # Any
    "displayName": "example_displayName",  # str
    "id": "example_id",  # str
    "name": "example_name",  # str
    "position": 1,  # float
    "updatedAt": "example_updatedAt",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CustomerStatus().list()
for customer_status in results:
    print(customer_status)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CustomerStatus().load({"id": "customer_status_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.CustomerStatus().remove({"id": "customer_status_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.CustomerStatus().update({
    "id": "customer_status_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomerStatusEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomerTierEntity

```python
customer_tier = client.CustomerTier()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `color` | `str` | Yes | The color of the tier indicator in the UI, as a HEX string (e.g., '#ff0000'). |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `description` | `str` | No | An optional description explaining what this tier represents and its intended use for customer segmentation. |
| `displayName` | `str` | Yes | The user-facing display name of the tier shown in the UI. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `name` | `str` | Yes | The internal name of the tier. |
| `position` | `float` | Yes | The sort position of the tier in the workspace's customer tier ordering. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CustomerTier().create({
    "color": "example_color",  # str
    "createdAt": "example_createdAt",  # Any
    "displayName": "example_displayName",  # str
    "id": "example_id",  # str
    "name": "example_name",  # str
    "position": 1,  # float
    "updatedAt": "example_updatedAt",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CustomerTier().list()
for customer_tier in results:
    print(customer_tier)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CustomerTier().load({"id": "customer_tier_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.CustomerTier().remove({"id": "customer_tier_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.CustomerTier().update({
    "id": "customer_tier_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomerTierEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CycleEntity

```python
cycle = client.Cycle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `autoArchivedAt` | `Any` | No | The time at which the cycle was automatically archived by the auto-pruning process. |
| `completedAt` | `Any` | No | The completion time of the cycle. |
| `completedIssueCountHistory` | `float` | Yes | The number of completed issues in the cycle after each day. |
| `completedScopeHistory` | `float` | Yes | The number of completed estimation points after each day. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `currentProgress` | `Any` | Yes | [Internal] The current progress snapshot of the cycle, broken down by issue status categories. |
| `description` | `str` | No | The description of the cycle. |
| `endsAt` | `Any` | Yes | The end date and time of the cycle. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `inProgressScopeHistory` | `float` | Yes | The number of in-progress estimation points after each day. |
| `inheritedFrom` | `dict` | No | The parent cycle this cycle was inherited from. |
| `isActive` | `bool` | Yes | Whether the cycle is currently active. |
| `isFuture` | `bool` | Yes | Whether the cycle has not yet started. |
| `isNext` | `bool` | Yes | Whether this cycle is the next upcoming (not yet started) cycle for the team. |
| `isPast` | `bool` | Yes | Whether the cycle's end date has passed. |
| `isPrevious` | `bool` | Yes | Whether this cycle is the most recently completed cycle for the team. |
| `issueCountHistory` | `float` | Yes | The total number of issues in the cycle after each day. |
| `name` | `str` | No | The custom name of the cycle. |
| `number` | `float` | Yes | The auto-incrementing number of the cycle, unique within its team. |
| `progress` | `float` | Yes | The overall progress of the cycle as a number between 0 and 1. |
| `progressHistory` | `Any` | Yes | [Internal] The detailed progress history of the cycle, including per-status breakdowns over time. |
| `scopeHistory` | `float` | Yes | The total number of estimation points (scope) in the cycle after each day. |
| `startsAt` | `Any` | Yes | The start date and time of the cycle. |
| `team` | `dict` | No | The team that the cycle belongs to. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Cycle().create({
    "completedIssueCountHistory": 1,  # float
    "completedScopeHistory": 1,  # float
    "createdAt": "example_createdAt",  # Any
    "currentProgress": "example_currentProgress",  # Any
    "endsAt": "example_endsAt",  # Any
    "id": "example_id",  # str
    "inProgressScopeHistory": 1,  # float
    "isActive": True,  # bool
    "isFuture": True,  # bool
    "isNext": True,  # bool
    "isPast": True,  # bool
    "isPrevious": True,  # bool
    "issueCountHistory": 1,  # float
    "number": 1,  # float
    "progress": 1,  # float
    "progressHistory": "example_progressHistory",  # Any
    "scopeHistory": 1,  # float
    "startsAt": "example_startsAt",  # Any
    "updatedAt": "example_updatedAt",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Cycle().list()
for cycle in results:
    print(cycle)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Cycle().load({"id": "cycle_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Cycle().update({
    "id": "cycle_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CycleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DiffEntity

```python
diff = client.Diff()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additions` | `float` | Yes | [Internal] The total number of added lines across the diff. |
| `agentSession` | `dict` | No | The agent session the diff belongs to. |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `contentHash` | `str` | Yes | [Internal] The opaque content hash identifying the diff's content in code.storage. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `creator` | `dict` | No | The user responsible for the diff. |
| `deletions` | `float` | Yes | [Internal] The total number of deleted lines across the diff. |
| `fileCount` | `float` | Yes | [Internal] The number of changed files in the diff. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `organization` | `dict` | No | The workspace the diff belongs to. |
| `pullRequest` | `dict` | No | The pull request the diff was promoted to when opened for review. |
| `slugId` | `str` | Yes | [Internal] The diff's unique URL slug. |
| `truncated` | `bool` | Yes | [Internal] Whether oversized files were omitted when the diff was computed. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Diff().load({"id": "diff_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DiffEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DocumentEntity

```python
document = client.Document()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `color` | `str` | No | The hex color of the document icon. |
| `content` | `str` | No | The document's content in markdown format. |
| `contentState` | `str` | No | [Internal] The document's content as a base64-encoded Yjs state update. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `creator` | `dict` | No | The user who created the document. |
| `cycle` | `dict` | No | [Internal] The cycle that the document is associated with. |
| `documentContentId` | `str` | No | The ID of the document content associated with the document. |
| `hiddenAt` | `Any` | No | The time at which the document was hidden from the default view. |
| `icon` | `str` | No | The icon of the document, either a decorative icon type or an emoji string. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `initiative` | `dict` | No | The initiative that the document is associated with. |
| `issue` | `dict` | No | The issue that the document is associated with. |
| `lastAppliedTemplate` | `dict` | No | The last template that was applied to this document. |
| `owner` | `dict` | No | The owner of the document. |
| `project` | `dict` | No | The project that the document is associated with. |
| `release` | `dict` | No | The release that the document is associated with. |
| `slugId` | `str` | Yes | The document's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `float` | Yes | The sort order of the document in its parent entity's resources list. |
| `summary` | `str` | No | [Internal] A one-sentence AI-generated summary of the document content. |
| `team` | `dict` | No | [Internal] The team that the document is associated with. |
| `title` | `str` | Yes | The title of the document. |
| `trashed` | `bool` | No | A flag that indicates whether the document is in the trash bin. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |
| `updatedBy` | `dict` | No | The user who last updated the document. |
| `url` | `str` | Yes | The canonical url for the document. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Document().create({
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "slugId": "example_slugId",  # str
    "sortOrder": 1,  # float
    "title": "example_title",  # str
    "updatedAt": "example_updatedAt",  # Any
    "url": "example_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Document().list()
for document in results:
    print(document)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Document().load({"id": "document_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Document().remove({"id": "document_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Document().update({
    "id": "document_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DocumentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DocumentSearchResultEntity

```python
document_search_result = client.DocumentSearchResult()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `color` | `str` | No | The hex color of the document icon. |
| `content` | `str` | No | The document's content in markdown format. |
| `contentState` | `str` | No | [Internal] The document's content as a base64-encoded Yjs state update. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `creator` | `dict` | No | The user who created the document. |
| `cycle` | `dict` | No | [Internal] The cycle that the document is associated with. |
| `documentContentId` | `str` | No | The ID of the document content associated with the document. |
| `hiddenAt` | `Any` | No | The time at which the document was hidden from the default view. |
| `icon` | `str` | No | The icon of the document, either a decorative icon type or an emoji string. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `initiative` | `dict` | No | The initiative that the document is associated with. |
| `issue` | `dict` | No | The issue that the document is associated with. |
| `lastAppliedTemplate` | `dict` | No | The last template that was applied to this document. |
| `metadata` | `Any` | Yes | Metadata related to search result. |
| `owner` | `dict` | No | The owner of the document. |
| `project` | `dict` | No | The project that the document is associated with. |
| `release` | `dict` | No | The release that the document is associated with. |
| `slugId` | `str` | Yes | The document's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `float` | Yes | The sort order of the document in its parent entity's resources list. |
| `summary` | `str` | No | [Internal] A one-sentence AI-generated summary of the document content. |
| `team` | `dict` | No | [Internal] The team that the document is associated with. |
| `title` | `str` | Yes | The title of the document. |
| `trashed` | `bool` | No | A flag that indicates whether the document is in the trash bin. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |
| `updatedBy` | `dict` | No | The user who last updated the document. |
| `url` | `str` | Yes | The canonical url for the document. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DocumentSearchResult().list({"term": "example"})
for document_search_result in results:
    print(document_search_result)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DocumentSearchResultEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EmailIntakeAddressEntity

```python
email_intake_address = client.EmailIntakeAddress()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `str` | Yes | The unique local part (before the @) of the intake email address, used to route incoming emails to the correct intake handler. |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `creator` | `dict` | No | The user who created the email intake address. |
| `customerRequestsEnabled` | `bool` | Yes | Whether issues created from emails sent to this address are automatically converted into customer requests, linking the sender as a customer contact. |
| `enabled` | `bool` | Yes | Whether the email address is enabled. |
| `forwardingEmailAddress` | `str` | No | The email address used to forward emails to the intake address. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `issueCanceledAutoReply` | `str` | No | The auto-reply message for issue canceled. |
| `issueCanceledAutoReplyEnabled` | `bool` | Yes | Whether the auto-reply for issue canceled is enabled. |
| `issueCompletedAutoReply` | `str` | No | The auto-reply message for issue completed. |
| `issueCompletedAutoReplyEnabled` | `bool` | Yes | Whether the auto-reply for issue completed is enabled. |
| `issueCreatedAutoReply` | `str` | No | The auto-reply message for issue created. |
| `issueCreatedAutoReplyEnabled` | `bool` | Yes | Whether the auto-reply for issue created is enabled. |
| `lastUsedAt` | `Any` | No | The last time an inbound email was successfully ingested for this address. |
| `organization` | `dict` | No | The workspace that the email address is associated with. |
| `reopenOnReply` | `bool` | Yes | Whether to reopen completed or canceled issues when a substantive email reply is received. |
| `repliesEnabled` | `bool` | Yes | Whether email replies are enabled. |
| `senderName` | `str` | No | The name to be used for outgoing emails. |
| `sesDomainIdentity` | `dict` | No | The SES domain identity that the email address is associated with. |
| `team` | `dict` | No | The team that the email address is associated with. |
| `template` | `dict` | No | The template that the email address is associated with. |
| `type` | `str` | Yes | The type of the email address. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |
| `useUserNamesInReplies` | `bool` | Yes | Whether the commenter's name is included in the email replies. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.EmailIntakeAddress().create({
    "address": "example_address",  # str
    "createdAt": "example_createdAt",  # Any
    "customerRequestsEnabled": True,  # bool
    "enabled": True,  # bool
    "id": "example_id",  # str
    "issueCanceledAutoReplyEnabled": True,  # bool
    "issueCompletedAutoReplyEnabled": True,  # bool
    "issueCreatedAutoReplyEnabled": True,  # bool
    "reopenOnReply": True,  # bool
    "repliesEnabled": True,  # bool
    "type": "example_type",  # str
    "updatedAt": "example_updatedAt",  # Any
    "useUserNamesInReplies": True,  # bool
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.EmailIntakeAddress().load({"id": "email_intake_address_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.EmailIntakeAddress().remove({"id": "email_intake_address_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.EmailIntakeAddress().update({
    "id": "email_intake_address_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmailIntakeAddressEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EmailUserAccountAuthChallengeResponseEntity

```python
email_user_account_auth_challenge_response = client.EmailUserAccountAuthChallengeResponse()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authType` | `str` | Yes | Supported challenge for this user account. |
| `success` | `bool` | Yes | Whether the operation was successful. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.EmailUserAccountAuthChallengeResponse().create({
    "authType": "example_authType",  # str
    "success": True,  # bool
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmailUserAccountAuthChallengeResponseEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EmojiEntity

```python
emoji = client.Emoji()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `creator` | `dict` | No | The user who created the emoji. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `name` | `str` | Yes | The unique name of the custom emoji within the workspace. |
| `organization` | `dict` | No | The workspace that the emoji belongs to. |
| `source` | `str` | Yes | The source of the emoji, indicating how it was created (e.g., uploaded by a user or imported). |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `str` | Yes | The URL of the uploaded image for this custom emoji. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Emoji().create({
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "name": "example_name",  # str
    "source": "example_source",  # str
    "updatedAt": "example_updatedAt",  # Any
    "url": "example_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Emoji().list()
for emoji in results:
    print(emoji)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Emoji().load({"id": "emoji_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Emoji().remove({"id": "emoji_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmojiEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EntityExternalLinkEntity

```python
entity_external_link = client.EntityExternalLink()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `creator` | `dict` | No | The user who created the link. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `initiative` | `dict` | No | The initiative that the link is associated with. |
| `label` | `str` | Yes | The link's label. |
| `project` | `dict` | No | The project that the link is associated with. |
| `sortOrder` | `float` | Yes | The sort order of this link within the parent entity's resources list. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `str` | Yes | The link's URL. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.EntityExternalLink().create({
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "label": "example_label",  # str
    "sortOrder": 1,  # float
    "updatedAt": "example_updatedAt",  # Any
    "url": "example_url",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.EntityExternalLink().load({"id": "entity_external_link_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.EntityExternalLink().remove({"id": "entity_external_link_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.EntityExternalLink().update({
    "id": "entity_external_link_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EntityExternalLinkEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ExternalUserEntity

```python
external_user = client.ExternalUser()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `avatarUrl` | `str` | No | A URL to the external user's avatar image. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `displayName` | `str` | Yes | The external user's display name. |
| `email` | `str` | No | The external user's email address. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `lastSeen` | `Any` | No | The last time the external user was seen interacting with Linear through their external service. |
| `name` | `str` | Yes | The external user's full name. |
| `organization` | `dict` | No | The workspace that the external user belongs to. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ExternalUser().list()
for external_user in results:
    print(external_user)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ExternalUser().load({"id": "external_user_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ExternalUserEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FavoriteEntity

```python
favorite = client.Favorite()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aiConversation` | `dict` | No | [INTERNAL] The favorited Agent conversation. |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `color` | `str` | No | [Internal] Returns the color of the favorite's icon. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `customView` | `dict` | No | The favorited custom view. |
| `customer` | `dict` | No | The favorited customer. |
| `cycle` | `dict` | No | The favorited cycle. |
| `dashboard` | `dict` | No | The favorited dashboard. |
| `detail` | `str` | No | [Internal] Detail text for favorite's `title` (e.g. |
| `document` | `dict` | No | The favorited document. |
| `facet` | `dict` | No | [INTERNAL] The favorited facet. |
| `folderName` | `str` | No | The name of the folder. |
| `icon` | `str` | No | [Internal] Name of the favorite's icon. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `initiative` | `dict` | No | The favorited initiative. |
| `initiativeLabel` | `dict` | No | [INTERNAL] The favorited initiative label. |
| `initiativeTab` | `str` | No | The targeted tab of the initiative. |
| `issue` | `dict` | No | The favorited issue. |
| `label` | `dict` | No | The favorited label. |
| `liveFolderDefinition` | `Any` | No | The versioned lazy root and filter represented by this live favorite folder. |
| `liveFolderPreset` | `str` | No | The predefined live folder represented by this favorite. |
| `owner` | `dict` | No | The user who owns this favorite. |
| `parent` | `dict` | No | The parent folder of the favorite. |
| `pipelineTab` | `str` | No | The targeted tab of the release pipeline. |
| `predefinedViewTeam` | `dict` | No | The team of the favorited predefined view. |
| `predefinedViewType` | `str` | No | The type of favorited predefined view (e.g., 'allIssues', 'activeCycle', 'backlog', 'triage'). |
| `project` | `dict` | No | The favorited project. |
| `projectLabel` | `dict` | No | The favorited project label. |
| `projectTab` | `str` | No | The targeted tab of the project. |
| `projectTeam` | `dict` | No | [DEPRECATED] The favorited team of the project. |
| `pullRequest` | `dict` | No | The favorited pull request. |
| `release` | `dict` | No | The favorited release. |
| `releaseNote` | `dict` | No | The favorited release note. |
| `releasePipeline` | `dict` | No | The favorited release pipeline. |
| `sortOrder` | `float` | Yes | The position of this item in the user's favorites list. |
| `team` | `dict` | No | The favorited team. |
| `title` | `str` | Yes | [Internal] Favorite's title text (name of the favorite'd object or folder). |
| `type` | `str` | Yes | The type of entity this favorite references, such as 'issue', 'project', 'cycle', 'customView', 'document', 'folder', etc. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `str` | No | URL of the favorited entity. |
| `user` | `dict` | No | The favorited user. |
| `workflowDefinition` | `dict` | No | The favorited loop. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Favorite().create({
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "sortOrder": 1,  # float
    "title": "example_title",  # str
    "type": "example_type",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Favorite().list()
for favorite in results:
    print(favorite)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Favorite().load({"id": "favorite_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Favorite().remove({"id": "favorite_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Favorite().update({
    "id": "favorite_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FavoriteEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GitAutomationStateEntity

```python
git_automation_state = client.GitAutomationState()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `event` | `str` | Yes | The Git event that triggers this automation rule (e.g., branch created, PR opened for review, or PR merged). |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `state` | `dict` | No | The workflow state that linked issues will be transitioned to when the Git event fires. |
| `targetBranch` | `dict` | No | The target branch that this automation rule applies to. |
| `team` | `dict` | No | The team that this automation rule belongs to. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.GitAutomationState().create({
    "createdAt": "example_createdAt",  # Any
    "event": "example_event",  # str
    "id": "example_id",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.GitAutomationState().remove({"id": "id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.GitAutomationState().update({
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GitAutomationStateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GitAutomationTargetBranchEntity

```python
git_automation_target_branch = client.GitAutomationTargetBranch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `branchPattern` | `str` | Yes | The branch name or pattern to match against pull request target branches. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `isRegex` | `bool` | Yes | Whether the branch pattern should be interpreted as a regular expression. |
| `team` | `dict` | No | The team that this target branch definition belongs to. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.GitAutomationTargetBranch().create({
    "branchPattern": "example_branchPattern",  # str
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "isRegex": True,  # bool
    "updatedAt": "example_updatedAt",  # Any
})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.GitAutomationTargetBranch().remove({"id": "id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.GitAutomationTargetBranch().update({
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GitAutomationTargetBranchEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GitHubIntegrationConnectDetailEntity

```python
git_hub_integration_connect_detail = client.GitHubIntegrationConnectDetail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `lostRepositoryNames` | `str` | No | Full names ('owner/repo') of repositories whose existing GitHub Issues sync mappings would become inaccessible if the new GitHub App installation replaces the existing one. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.GitHubIntegrationConnectDetail().create({
})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.GitHubIntegrationConnectDetail().update({
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GitHubIntegrationConnectDetailEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## InitiativeEntity

```python
initiative = client.Initiative()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `canceledAt` | `Any` | No | [Internal] The time at which the initiative was moved into Canceled status. |
| `color` | `str` | No | The initiative's color. |
| `completedAt` | `Any` | No | The time at which the initiative was moved into Completed status. |
| `content` | `str` | No | The initiative's content in markdown format. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `creator` | `dict` | No | The user who created the initiative. |
| `description` | `str` | No | The description of the initiative. |
| `documentContent` | `dict` | No | The content of the initiative description. |
| `frequencyResolution` | `str` | Yes | The resolution of the reminder frequency. |
| `health` | `str` | No | The overall health of the initiative, derived from the most recent initiative update. |
| `healthUpdatedAt` | `Any` | No | The time at which the initiative health was last updated, typically when a new initiative update is posted. |
| `icon` | `str` | No | The icon of the initiative. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `identifier` | `str` | No | [Internal] The human-readable identifier of the initiative. |
| `integrationsSettings` | `dict` | No | Settings for all integrations associated with that initiative. |
| `labelIds` | `str` | Yes | The IDs of the initiative labels associated with this initiative. |
| `lastUpdate` | `dict` | No | The most recent status update posted for this initiative. |
| `leadTeam` | `dict` | No | The team that leads the initiative. |
| `name` | `str` | Yes | The name of the initiative. |
| `organization` | `dict` | No | The workspace of the initiative. |
| `owner` | `dict` | No | The user who owns the initiative. |
| `parentInitiative` | `dict` | No | Parent initiative associated with the initiative. |
| `previousIdentifiers` | `str` | Yes | [Internal] Identifiers (default and custom) that this initiative has previously held. |
| `priority` | `int` | Yes | The priority of the initiative. |
| `prioritySortOrder` | `float` | Yes | The sort order of the initiative within the workspace when ordered by priority. |
| `slugId` | `str` | Yes | The initiative's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `float` | Yes | The sort order of the initiative within the workspace. |
| `startedAt` | `Any` | No | The time at which the initiative was moved into Active status. |
| `status` | `str` | Yes | The lifecycle status of the initiative. |
| `targetDate` | `Any` | No | The estimated completion date of the initiative. |
| `targetDateResolution` | `str` | No | The resolution of the initiative's estimated completion date, indicating whether it refers to a specific day, week, month, quarter, or year. |
| `trashed` | `bool` | No | A flag that indicates whether the initiative is in the trash bin. |
| `updateReminderFrequency` | `float` | No | The frequency at which to prompt for updates. |
| `updateReminderFrequencyInWeeks` | `float` | No | The n-weekly frequency at which to prompt for updates. |
| `updateRemindersDay` | `str` | No | The day at which to prompt for updates. |
| `updateRemindersHour` | `float` | No | The hour at which to prompt for updates. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `str` | Yes | Initiative URL. |
| `visibility` | `str` | Yes | The visibility of the initiative, derived from its lead team. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Initiative().create({
    "createdAt": "example_createdAt",  # Any
    "frequencyResolution": "example_frequencyResolution",  # str
    "id": "example_id",  # str
    "labelIds": "example_labelIds",  # str
    "name": "example_name",  # str
    "previousIdentifiers": "example_previousIdentifiers",  # str
    "priority": 1,  # int
    "prioritySortOrder": 1,  # float
    "slugId": "example_slugId",  # str
    "sortOrder": 1,  # float
    "status": "example_status",  # str
    "updatedAt": "example_updatedAt",  # Any
    "url": "example_url",  # str
    "visibility": "example_visibility",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Initiative().list()
for initiative in results:
    print(initiative)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Initiative().load({"id": "initiative_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Initiative().remove({"id": "initiative_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Initiative().update({
    "id": "initiative_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InitiativeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## InitiativeLabelEntity

```python
initiative_label = client.InitiativeLabel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `color` | `str` | Yes | The label's color as a HEX string (e.g., '#EB5757'). |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `creator` | `dict` | No | The user who created the label. |
| `description` | `str` | No | The label's description. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `isGroup` | `bool` | Yes | Whether the label is a group. |
| `lastAppliedAt` | `Any` | No | The date when the label was last applied to an issue, project, or initiative. |
| `name` | `str` | Yes | The label's name. |
| `organization` | `dict` | No | The workspace that the initiative label belongs to. |
| `parent` | `dict` | No | The parent label group. |
| `retiredAt` | `Any` | No | [Internal] When the label was retired. |
| `retiredBy` | `dict` | No | The user who retired the label. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.InitiativeLabel().create({
    "color": "example_color",  # str
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "isGroup": True,  # bool
    "name": "example_name",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.InitiativeLabel().list()
for initiative_label in results:
    print(initiative_label)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.InitiativeLabel().load({"id": "initiative_label_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.InitiativeLabel().remove({"id": "initiative_label_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.InitiativeLabel().update({
    "id": "initiative_label_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InitiativeLabelEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## InitiativeLeadTeamChangeImpactEntity

```python
initiative_lead_team_change_impact = client.InitiativeLeadTeamChangeImpact()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `affectedDescendantCount` | `int` | Yes | The number of editable matching sub-initiatives whose lead team would change if the update is applied to descendants. |
| `id` | `str` | No |  |
| `visibilityMayChange` | `bool` | Yes | Whether the changed initiatives may gain or lose access restrictions because the current or next lead team is not public. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.InitiativeLeadTeamChangeImpact().load({"id": "initiative_lead_team_change_impact_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InitiativeLeadTeamChangeImpactEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## InitiativeRelationEntity

```python
initiative_relation = client.InitiativeRelation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `initiative` | `dict` | No | The parent initiative in this hierarchical relation. |
| `relatedInitiative` | `dict` | No | The child initiative in this hierarchical relation. |
| `sortOrder` | `float` | Yes | The sort order of the child initiative within its parent initiative. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `dict` | No | The user who last created or modified the relation. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.InitiativeRelation().create({
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "sortOrder": 1,  # float
    "updatedAt": "example_updatedAt",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.InitiativeRelation().list()
for initiative_relation in results:
    print(initiative_relation)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.InitiativeRelation().load({"id": "initiative_relation_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.InitiativeRelation().remove({"id": "initiative_relation_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.InitiativeRelation().update({
    "id": "initiative_relation_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InitiativeRelationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## InitiativeToProjectEntity

```python
initiative_to_project = client.InitiativeToProject()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `initiative` | `dict` | No | The initiative that the project is associated with. |
| `project` | `dict` | No | The project that the initiative is associated with. |
| `sortOrder` | `str` | Yes | The sort order of the project within its parent initiative. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.InitiativeToProject().create({
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "sortOrder": "example_sortOrder",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.InitiativeToProject().list()
for initiative_to_project in results:
    print(initiative_to_project)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.InitiativeToProject().load({"id": "initiative_to_project_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.InitiativeToProject().remove({"id": "initiative_to_project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.InitiativeToProject().update({
    "id": "initiative_to_project_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InitiativeToProjectEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## InitiativeUpdateEntity

```python
initiative_update = client.InitiativeUpdate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `body` | `str` | Yes | The update content in markdown format. |
| `bodyData` | `str` | Yes | [Internal] The content of the update as a Prosemirror document. |
| `commentCount` | `int` | Yes | Number of comments associated with the initiative update. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `diff` | `Any` | No | The diff between the current update and the previous one. |
| `diffMarkdown` | `str` | No | The diff between the current update and the previous one, formatted as markdown. |
| `editedAt` | `Any` | No | The time the update was edited. |
| `health` | `str` | Yes | The health of the initiative at the time this update was posted. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `infoSnapshot` | `Any` | No | [Internal] A snapshot of initiative properties at the time the update was posted, including project statuses, sub-initiative health, and target dates. |
| `initiative` | `dict` | No | The initiative that this status update was posted to. |
| `isDiffHidden` | `bool` | Yes | Whether the diff between this update and the previous one should be hidden in the UI. |
| `isStale` | `bool` | Yes | Whether the initiative update is stale. |
| `reactionData` | `Any` | Yes | Emoji reaction summary, grouped by emoji type. |
| `slugId` | `str` | Yes | The update's unique URL slug. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `str` | Yes | The URL to the initiative update. |
| `user` | `dict` | No | The user who wrote the update. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.InitiativeUpdate().create({
    "body": "example_body",  # str
    "bodyData": "example_bodyData",  # str
    "commentCount": 1,  # int
    "createdAt": "example_createdAt",  # Any
    "health": "example_health",  # str
    "id": "example_id",  # str
    "isDiffHidden": True,  # bool
    "isStale": True,  # bool
    "reactionData": "example_reactionData",  # Any
    "slugId": "example_slugId",  # str
    "updatedAt": "example_updatedAt",  # Any
    "url": "example_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.InitiativeUpdate().list()
for initiative_update in results:
    print(initiative_update)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.InitiativeUpdate().load({"id": "initiative_update_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.InitiativeUpdate().update({
    "id": "initiative_update_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InitiativeUpdateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IntegrationEntity

```python
integration = client.Integration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `creator` | `dict` | No | The user that added the integration. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `organization` | `dict` | No | The workspace that the integration is associated with. |
| `service` | `str` | Yes | The integration's type, identifying which external service this integration connects to (e.g., 'slack', 'github', 'jira', 'figma'). |
| `team` | `dict` | No | The team that the integration is associated with. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Integration().create({
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "service": "example_service",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Integration().list()
for integration in results:
    print(integration)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Integration().load({"id": "integration_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Integration().remove({"id": "integration_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Integration().update({
    "id": "integration_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IntegrationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IntegrationTemplateEntity

```python
integration_template = client.IntegrationTemplate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `foreignEntityId` | `str` | No | The identifier of the foreign entity in the external service that this template is scoped to. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `integration` | `dict` | No | The integration that the template is associated with. |
| `template` | `dict` | No | The template that the integration is associated with. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.IntegrationTemplate().create({
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.IntegrationTemplate().list()
for integration_template in results:
    print(integration_template)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.IntegrationTemplate().load({"id": "integration_template_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.IntegrationTemplate().remove({"id": "integration_template_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IntegrationTemplateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IntegrationsSettingEntity

```python
integrations_setting = client.IntegrationsSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `contextViewType` | `str` | No | The type of view to which the integration settings context is associated with. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `initiative` | `dict` | No | Initiative which those settings apply to. |
| `microsoftTeamsProjectUpdateCreated` | `bool` | No | Whether to send a Microsoft Teams message when a project update is created. |
| `project` | `dict` | No | Project which those settings apply to. |
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
| `team` | `dict` | No | Team which those settings apply to. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.IntegrationsSetting().create({
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.IntegrationsSetting().load({"id": "integrations_setting_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.IntegrationsSetting().update({
    "id": "integrations_setting_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IntegrationsSettingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IssueEntity

```python
issue = client.Issue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activitySummary` | `Any` | No | [Internal] The activity summary information for this issue. |
| `addedToCycleAt` | `Any` | No | The time at which the issue was added to a cycle. |
| `addedToProjectAt` | `Any` | No | The time at which the issue was added to a project. |
| `addedToTeamAt` | `Any` | No | The time at which the issue was added to a team. |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `asksExternalUserRequester` | `dict` | No | The external user who requested creation of the Asks issue on behalf of the creator. |
| `asksRequester` | `dict` | No | The internal user who requested creation of the Asks issue on behalf of the creator. |
| `assignee` | `dict` | No | The user to whom the issue is assigned. |
| `autoArchivedAt` | `Any` | No | The time at which the issue was automatically archived by the auto pruning process. |
| `autoClosedAt` | `Any` | No | The time at which the issue was automatically closed by the auto pruning process. |
| `botActor` | `dict` | No | The bot that created the issue, if applicable. |
| `branchName` | `str` | Yes | Suggested branch name for the issue. |
| `canceledAt` | `Any` | No | The time at which the issue was moved into canceled state. |
| `completedAt` | `Any` | No | The time at which the issue was moved into completed state. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `creator` | `dict` | No | The user who created the issue. |
| `customerTicketCount` | `int` | Yes | Returns the number of Attachment resources which are created by customer support ticketing systems (e.g. |
| `cycle` | `dict` | No | The cycle that the issue is associated with. |
| `delegate` | `dict` | No | The agent user that is delegated to work on this issue. |
| `description` | `str` | No | The issue's description in markdown format. |
| `descriptionState` | `str` | No | [Internal] The issue's description content as YJS state. |
| `documentContent` | `dict` | No | [ALPHA] The document content representing this issue description. |
| `dueDate` | `Any` | No | The date at which the issue is due. |
| `estimate` | `float` | No | The estimate of the complexity of the issue. |
| `externalUserCreator` | `dict` | No | The external user who created the issue. |
| `favorite` | `dict` | No | The users favorite associated with this issue. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `identifier` | `str` | Yes | Issue's human readable identifier (e.g. |
| `inheritsSharedAccess` | `bool` | Yes | Whether this issue inherits shared access from its parent issue. |
| `integrationSourceType` | `str` | No | Integration type that created this issue, if applicable. |
| `labelIds` | `str` | Yes | Identifiers of the labels associated with this issue. |
| `lastAppliedTemplate` | `dict` | No | The last template that was applied to this issue. |
| `number` | `float` | Yes | The issue's unique number, scoped to the issue's team. |
| `parent` | `dict` | No | The parent of the issue. |
| `previousIdentifiers` | `str` | Yes | Previous identifiers of the issue if it has been moved between teams. |
| `priority` | `float` | Yes | The priority of the issue. |
| `priorityLabel` | `str` | Yes | Label for the priority. |
| `prioritySortOrder` | `float` | Yes | The order of the item in relation to other items in the workspace, when ordered by priority. |
| `project` | `dict` | No | The project that the issue is associated with. |
| `projectMilestone` | `dict` | No | The project milestone that the issue is associated with. |
| `reactionData` | `Any` | Yes | Emoji reaction summary for the issue, grouped by emoji type. |
| `recurringIssueTemplate` | `dict` | No | The recurring issue template that created this issue. |
| `slaBreachesAt` | `Any` | No | The time at which the issue's SLA will breach. |
| `slaHighRiskAt` | `Any` | No | The time at which the issue's SLA will enter high risk state. |
| `slaMediumRiskAt` | `Any` | No | The time at which the issue's SLA will enter medium risk state. |
| `slaStartedAt` | `Any` | No | The time at which the issue's SLA began. |
| `slaType` | `str` | No | The type of SLA set on the issue. |
| `snoozedBy` | `dict` | No | The user who snoozed the issue. |
| `snoozedUntilAt` | `Any` | No | The time until an issue will be snoozed in Triage view. |
| `sortOrder` | `float` | Yes | The order of the item in relation to other items in the organization. |
| `sourceComment` | `dict` | No | The comment that this issue was created from, when an issue is created from an existing comment. |
| `startedAt` | `Any` | No | The time at which the issue was moved into started state. |
| `startedTriageAt` | `Any` | No | The time at which the issue entered triage. |
| `state` | `dict` | No | The workflow state (issue status) that the issue is currently in. |
| `subIssueSortOrder` | `float` | No | The order of the item in the sub-issue list. |
| `suggestionsGeneratedAt` | `Any` | No | [Internal] The time at which the most recent suggestions for this issue were generated. |
| `summary` | `dict` | No | [Internal] AI-generated activity summary for this issue. |
| `team` | `dict` | No | The team that the issue belongs to. |
| `title` | `str` | Yes | The issue's title. |
| `trashed` | `bool` | No | A flag that indicates whether the issue is in the trash bin. |
| `triagedAt` | `Any` | No | The time at which the issue left triage. |
| `trusted` | `bool` | No | [Internal] Whether this issue has been explicitly marked as trusted. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `str` | Yes | Issue URL. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Issue().create({
    "branchName": "example_branchName",  # str
    "createdAt": "example_createdAt",  # Any
    "customerTicketCount": 1,  # int
    "id": "example_id",  # str
    "identifier": "example_identifier",  # str
    "inheritsSharedAccess": True,  # bool
    "labelIds": "example_labelIds",  # str
    "number": 1,  # float
    "previousIdentifiers": "example_previousIdentifiers",  # str
    "priority": 1,  # float
    "priorityLabel": "example_priorityLabel",  # str
    "prioritySortOrder": 1,  # float
    "reactionData": "example_reactionData",  # Any
    "sortOrder": 1,  # float
    "title": "example_title",  # str
    "updatedAt": "example_updatedAt",  # Any
    "url": "example_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Issue().list()
for issue in results:
    print(issue)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Issue().load({"id": "issue_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Issue().remove({"id": "issue_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Issue().update({
    "id": "issue_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IssueEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IssueImportEntity

```python
issue_import = client.IssueImport()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `creatorId` | `str` | No | Identifier of the user who started the import job. |
| `csvFileUrl` | `str` | No | File URL for the uploaded CSV for the import, if there is one. |
| `displayName` | `str` | Yes | The display name of the import service. |
| `error` | `str` | No | User readable error message, if one has occurred during the import. |
| `errorMetadata` | `Any` | No | Error code and metadata, if one has occurred during the import. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `mapping` | `Any` | No | The data mapping configuration for the import job. |
| `progress` | `float` | No | Current step progress as a percentage (0-100). |
| `service` | `str` | Yes | The external service from which data is being imported (e.g., jira, asana, github, shortcut, linear). |
| `serviceMetadata` | `Any` | No | Metadata related to import service. |
| `status` | `str` | Yes | The current status of the import job, indicating its position in the import lifecycle (e.g., not started, in progress, complete, error). |
| `teamName` | `str` | No | The name of the new team to be created for the import, when the import is configured to create a new team rather than importing into an existing one. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.IssueImport().create({
    "createdAt": "example_createdAt",  # Any
    "displayName": "example_displayName",  # str
    "service": "example_service",  # str
    "status": "example_status",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.IssueImport().remove({"issue_import_id": "issue_import_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.IssueImport().update({
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IssueImportEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IssueLabelEntity

```python
issue_label = client.IssueLabel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `color` | `str` | Yes | The label's color as a HEX string (e.g., '#EB5757'). |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `creator` | `dict` | No | The user who created the label. |
| `description` | `str` | No | The label's description. |
| `groupType` | `str` | No | The selection mode of this label group. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `inheritedFrom` | `dict` | No | The original workspace or parent-team label that this label was inherited from. |
| `isGroup` | `bool` | Yes | Whether the label is a group. |
| `lastAppliedAt` | `Any` | No | The date when the label was last applied to an issue, project, or initiative. |
| `name` | `str` | Yes | The label's name. |
| `parent` | `dict` | No | The parent label. |
| `retiredAt` | `Any` | No | [Internal] When the label was retired. |
| `retiredBy` | `dict` | No | The user who retired the label. |
| `team` | `dict` | No | The team that the label is scoped to. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.IssueLabel().create({
    "color": "example_color",  # str
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "isGroup": True,  # bool
    "name": "example_name",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.IssueLabel().list()
for issue_label in results:
    print(issue_label)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.IssueLabel().load({"id": "issue_label_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.IssueLabel().remove({"id": "issue_label_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.IssueLabel().update({
    "id": "issue_label_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IssueLabelEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IssuePriorityValueEntity

```python
issue_priority_value = client.IssuePriorityValue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `str` | Yes | Priority's label. |
| `priority` | `int` | Yes | Priority's number value. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.IssuePriorityValue().list()
for issue_priority_value in results:
    print(issue_priority_value)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IssuePriorityValueEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IssueRelationEntity

```python
issue_relation = client.IssueRelation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `issue` | `dict` | No | The source issue whose relationship is being described. |
| `relatedIssue` | `dict` | No | The target issue that the source issue is related to. |
| `type` | `str` | Yes | The type of relationship between the source issue and the related issue. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.IssueRelation().create({
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "type": "example_type",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.IssueRelation().list()
for issue_relation in results:
    print(issue_relation)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.IssueRelation().load({"id": "issue_relation_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.IssueRelation().remove({"id": "issue_relation_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.IssueRelation().update({
    "id": "issue_relation_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IssueRelationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IssueSearchResultEntity

```python
issue_search_result = client.IssueSearchResult()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activitySummary` | `Any` | No | [Internal] The activity summary information for this issue. |
| `addedToCycleAt` | `Any` | No | The time at which the issue was added to a cycle. |
| `addedToProjectAt` | `Any` | No | The time at which the issue was added to a project. |
| `addedToTeamAt` | `Any` | No | The time at which the issue was added to a team. |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `asksExternalUserRequester` | `dict` | No | The external user who requested creation of the Asks issue on behalf of the creator. |
| `asksRequester` | `dict` | No | The internal user who requested creation of the Asks issue on behalf of the creator. |
| `assignee` | `dict` | No | The user to whom the issue is assigned. |
| `autoArchivedAt` | `Any` | No | The time at which the issue was automatically archived by the auto pruning process. |
| `autoClosedAt` | `Any` | No | The time at which the issue was automatically closed by the auto pruning process. |
| `botActor` | `dict` | No | The bot that created the issue, if applicable. |
| `branchName` | `str` | Yes | Suggested branch name for the issue. |
| `canceledAt` | `Any` | No | The time at which the issue was moved into canceled state. |
| `completedAt` | `Any` | No | The time at which the issue was moved into completed state. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `creator` | `dict` | No | The user who created the issue. |
| `customerTicketCount` | `int` | Yes | Returns the number of Attachment resources which are created by customer support ticketing systems (e.g. |
| `cycle` | `dict` | No | The cycle that the issue is associated with. |
| `delegate` | `dict` | No | The agent user that is delegated to work on this issue. |
| `description` | `str` | No | The issue's description in markdown format. |
| `descriptionState` | `str` | No | [Internal] The issue's description content as YJS state. |
| `documentContent` | `dict` | No | [ALPHA] The document content representing this issue description. |
| `dueDate` | `Any` | No | The date at which the issue is due. |
| `estimate` | `float` | No | The estimate of the complexity of the issue. |
| `externalUserCreator` | `dict` | No | The external user who created the issue. |
| `favorite` | `dict` | No | The users favorite associated with this issue. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `identifier` | `str` | Yes | Issue's human readable identifier (e.g. |
| `inheritsSharedAccess` | `bool` | Yes | Whether this issue inherits shared access from its parent issue. |
| `integrationSourceType` | `str` | No | Integration type that created this issue, if applicable. |
| `labelIds` | `str` | Yes | Identifiers of the labels associated with this issue. |
| `lastAppliedTemplate` | `dict` | No | The last template that was applied to this issue. |
| `metadata` | `Any` | Yes | Metadata related to search result. |
| `number` | `float` | Yes | The issue's unique number, scoped to the issue's team. |
| `parent` | `dict` | No | The parent of the issue. |
| `previousIdentifiers` | `str` | Yes | Previous identifiers of the issue if it has been moved between teams. |
| `priority` | `float` | Yes | The priority of the issue. |
| `priorityLabel` | `str` | Yes | Label for the priority. |
| `prioritySortOrder` | `float` | Yes | The order of the item in relation to other items in the workspace, when ordered by priority. |
| `project` | `dict` | No | The project that the issue is associated with. |
| `projectMilestone` | `dict` | No | The project milestone that the issue is associated with. |
| `reactionData` | `Any` | Yes | Emoji reaction summary for the issue, grouped by emoji type. |
| `recurringIssueTemplate` | `dict` | No | The recurring issue template that created this issue. |
| `slaBreachesAt` | `Any` | No | The time at which the issue's SLA will breach. |
| `slaHighRiskAt` | `Any` | No | The time at which the issue's SLA will enter high risk state. |
| `slaMediumRiskAt` | `Any` | No | The time at which the issue's SLA will enter medium risk state. |
| `slaStartedAt` | `Any` | No | The time at which the issue's SLA began. |
| `slaType` | `str` | No | The type of SLA set on the issue. |
| `snoozedBy` | `dict` | No | The user who snoozed the issue. |
| `snoozedUntilAt` | `Any` | No | The time until an issue will be snoozed in Triage view. |
| `sortOrder` | `float` | Yes | The order of the item in relation to other items in the organization. |
| `sourceComment` | `dict` | No | The comment that this issue was created from, when an issue is created from an existing comment. |
| `startedAt` | `Any` | No | The time at which the issue was moved into started state. |
| `startedTriageAt` | `Any` | No | The time at which the issue entered triage. |
| `state` | `dict` | No | The workflow state (issue status) that the issue is currently in. |
| `subIssueSortOrder` | `float` | No | The order of the item in the sub-issue list. |
| `suggestionsGeneratedAt` | `Any` | No | [Internal] The time at which the most recent suggestions for this issue were generated. |
| `summary` | `dict` | No | [Internal] AI-generated activity summary for this issue. |
| `team` | `dict` | No | The team that the issue belongs to. |
| `title` | `str` | Yes | The issue's title. |
| `trashed` | `bool` | No | A flag that indicates whether the issue is in the trash bin. |
| `triagedAt` | `Any` | No | The time at which the issue left triage. |
| `trusted` | `bool` | No | [Internal] Whether this issue has been explicitly marked as trusted. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `str` | Yes | Issue URL. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.IssueSearchResult().list({"term": "example"})
for issue_search_result in results:
    print(issue_search_result)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IssueSearchResultEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IssueToReleaseEntity

```python
issue_to_release = client.IssueToRelease()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `issue` | `dict` | No | The issue that is linked to the release. |
| `release` | `dict` | No | The release that the issue is linked to. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.IssueToRelease().create({
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.IssueToRelease().list()
for issue_to_release in results:
    print(issue_to_release)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.IssueToRelease().load({"id": "issue_to_release_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.IssueToRelease().remove({"id": "issue_to_release_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IssueToReleaseEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LogoutResponseEntity

```python
logout_response = client.LogoutResponse()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `bool` | Yes | Whether the operation was successful. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.LogoutResponse().create({
    "success": True,  # bool
})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.LogoutResponse().update({
    "session_id": "session_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogoutResponseEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NotificationEntity

```python
notification = client.Notification()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `dict` | No | The user that caused the notification. |
| `actorAvatarColor` | `str` | Yes | [Internal] Notification actor initials if avatar is not available. |
| `actorAvatarUrl` | `str` | No | [Internal] Notification avatar URL. |
| `actorInactive` | `bool` | Yes | [Internal] Whether the notification's user actor is deactivated in the workspace. |
| `actorInitials` | `str` | No | [Internal] Notification actor initials if avatar is not available. |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `botActor` | `dict` | No | The bot that caused the notification. |
| `category` | `str` | Yes | The category of the notification. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `emailedAt` | `Any` | No | The time at which an email reminder for this notification was sent to the user. |
| `externalUserActor` | `dict` | No | The external user that caused the notification. |
| `groupingKey` | `str` | Yes | [Internal] Notifications with the same grouping key will be grouped together in the UI. |
| `groupingPriority` | `float` | Yes | [Internal] Priority of the notification with the same grouping key. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `inboxUrl` | `str` | Yes | [Internal] Inbox URL for the notification. |
| `initiativeUpdateHealth` | `str` | No | [Internal] Initiative update health for new updates. |
| `isLinearActor` | `bool` | Yes | [Internal] If notification actor was Linear. |
| `issueStatusType` | `str` | No | [Internal] Issue's status type for issue notifications. |
| `projectUpdateHealth` | `str` | No | [Internal] Project update health for new updates. |
| `readAt` | `Any` | No | The time at which the user marked the notification as read. |
| `snoozedUntilAt` | `Any` | No | The time until which a notification is snoozed. |
| `subtitle` | `str` | Yes | [Internal] Notification subtitle. |
| `title` | `str` | Yes | [Internal] Notification title. |
| `type` | `str` | Yes | Notification type. |
| `unsnoozedAt` | `Any` | No | The time at which a notification was unsnoozed. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `str` | Yes | [Internal] URL to the target of the notification. |
| `user` | `dict` | No | The recipient user of this notification. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Notification().list()
for notification in results:
    print(notification)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Notification().load({"id": "notification_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NotificationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NotificationSubscriptionEntity

```python
notification_subscription = client.NotificationSubscription()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Whether the subscription is active. |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `contextViewType` | `str` | No | The type of contextual view (e.g., active issues, backlog) that further scopes a team notification subscription. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `customView` | `dict` | No | The custom view that this notification subscription is scoped to. |
| `customer` | `dict` | No | The customer that this notification subscription is scoped to. |
| `cycle` | `dict` | No | The cycle that this notification subscription is scoped to. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `initiative` | `dict` | No | The initiative that this notification subscription is scoped to. |
| `label` | `dict` | No | The issue label that this notification subscription is scoped to. |
| `project` | `dict` | No | The project that this notification subscription is scoped to. |
| `subscriber` | `dict` | No | The user who will receive notifications from this subscription. |
| `team` | `dict` | No | The team that this notification subscription is scoped to. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `dict` | No | The user that this notification subscription is scoped to, for user-specific view subscriptions. |
| `userContextViewType` | `str` | No | The type of user-specific view that further scopes a user notification subscription. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.NotificationSubscription().list()
for notification_subscription in results:
    print(notification_subscription)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.NotificationSubscription().load({"id": "notification_subscription_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NotificationSubscriptionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OAuthApplicationEntity

```python
o_auth_application = client.OAuthApplication()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `clientId` | `str` | Yes | The client ID used during OAuth authorization flows. |
| `createdAt` | `Any` | Yes | The time at which the OAuth application was created. |
| `description` | `str` | No | User-facing description of the OAuth application. |
| `developer` | `str` | Yes | Name of the developer or company that built the OAuth application. |
| `developerUrl` | `str` | Yes | URL of the developer's website, homepage, or documentation. |
| `distribution` | `str` | Yes | Distribution setting for the OAuth application. |
| `grantTypes` | `str` | Yes | OAuth grant types supported by this application. |
| `id` | `str` | Yes | The unique identifier of the OAuth application. |
| `imageUrl` | `str` | No | URL of the OAuth application's icon. |
| `name` | `str` | Yes | The human-readable name of the OAuth application. |
| `redirectUris` | `str` | Yes | Allowed redirect URIs for OAuth authorization flows. |
| `updatedAt` | `Any` | Yes | The time at which the OAuth application was last updated. |
| `webhookEnabled` | `bool` | Yes | Whether webhook delivery is enabled for this OAuth application. |
| `webhookResourceTypes` | `str` | Yes | Resource types the OAuth application's webhooks subscribe to. |
| `webhookUrl` | `str` | No | Webhook URL used for delivering webhook payloads. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.OAuthApplication().create({
    "clientId": "example_clientId",  # str
    "createdAt": "example_createdAt",  # Any
    "developer": "example_developer",  # str
    "developerUrl": "example_developerUrl",  # str
    "distribution": "example_distribution",  # str
    "grantTypes": "example_grantTypes",  # str
    "id": "example_id",  # str
    "name": "example_name",  # str
    "redirectUris": "example_redirectUris",  # str
    "updatedAt": "example_updatedAt",  # Any
    "webhookEnabled": True,  # bool
    "webhookResourceTypes": "example_webhookResourceTypes",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.OAuthApplication().list()
for o_auth_application in results:
    print(o_auth_application)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.OAuthApplication().load({"id": "o_auth_application_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.OAuthApplication().update({
    "id": "o_auth_application_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OAuthApplicationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrganizationEntity

```python
organization = client.Organization()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentAutomationEnabled` | `bool` | Yes | [INTERNAL] Whether the workspace has enabled agent automation. |
| `aiAddonEnabled` | `bool` | Yes | [INTERNAL] Whether the workspace has enabled the AI add-on (which at this point only includes triage suggestions). |
| `aiDiscussionSummariesEnabled` | `bool` | Yes | Whether the workspace has enabled AI discussion summaries for issues. |
| `aiProviderConfiguration` | `Any` | No | [INTERNAL] Configure per-modality AI host providers and model families. |
| `aiTelemetryEnabled` | `bool` | Yes | [INTERNAL] Whether the workspace has opted in to AI telemetry. |
| `aiThreadSummariesEnabled` | `bool` | Yes | Whether the workspace has enabled resolved thread AI summaries. |
| `allowedFileUploadContentTypes` | `str` | No | Allowed file upload content types |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `authSettings` | `Any` | Yes | Authentication settings for the workspace, including allowed auth providers, bypass rules, and organization visibility during signup. |
| `codeIntelligenceEnabled` | `bool` | Yes | [INTERNAL] Whether code intelligence is enabled for the workspace. |
| `codeIntelligenceRepository` | `str` | No | [INTERNAL] GitHub repository in owner/repo format for code intelligence. |
| `codingAgentEnabled` | `bool` | Yes | [INTERNAL] Whether the workspace has enabled Coding Sessions. |
| `codingAgentSettings` | `Any` | Yes | [Internal] Settings for Coding Sessions features. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `createdIssueCount` | `int` | Yes | Approximate total number of issues created in the workspace, including archived ones. |
| `customerCount` | `int` | Yes | The number of active (non-archived) customers tracked in the workspace. |
| `customersConfiguration` | `Any` | Yes | Configuration settings for the Customers feature, including revenue currency and other customer tracking preferences. |
| `customersEnabled` | `bool` | Yes | Whether the Customers feature is enabled and accessible for the workspace based on the current plan. |
| `defaultFeedSummarySchedule` | `str` | No | Default schedule for how often feed summaries are generated. |
| `defaultHomeView` | `str` | No | The default home view for members of the workspace who have not chosen their own default. |
| `defaultHomeViewTargetId` | `str` | No | The id of the specific initiative, project, view, dashboard, or page tab used as the default home view. |
| `deletionRequestedAt` | `Any` | No | The time at which deletion of the workspace was requested. |
| `feedEnabled` | `bool` | Yes | Whether the activity feed feature is enabled for the workspace. |
| `fiscalYearStartMonth` | `float` | Yes | The zero-indexed month at which the fiscal year starts (0 = January, 11 = December). |
| `generatedUpdatesEnabled` | `bool` | Yes | [INTERNAL] Whether the workspace has enabled generated updates. |
| `gitBranchFormat` | `str` | No | The template format for Git branch names created from issues. |
| `gitLinkbackDescriptionsEnabled` | `bool` | Yes | Whether issue descriptions should be included in the Git integration linkback messages posted to pull requests. |
| `gitLinkbackMessagesEnabled` | `bool` | Yes | Whether the Git integration linkback messages should be posted as comments on pull requests in private repositories. |
| `gitPublicLinkbackMessagesEnabled` | `bool` | Yes | Whether the Git integration linkback messages should be posted as comments on pull requests in public repositories. |
| `hipaaComplianceEnabled` | `bool` | Yes | Whether HIPAA compliance is enabled for the workspace. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `initiativeUpdateReminderFrequencyInWeeks` | `float` | No | The frequency in weeks at which to prompt for initiative updates. |
| `initiativeUpdateRemindersDay` | `str` | Yes | The day of the week on which initiative update reminders are sent. |
| `initiativeUpdateRemindersHour` | `float` | Yes | The hour of the day (0-23) at which initiative update reminders are sent. |
| `linearAgentEnabled` | `bool` | Yes | [Internal] Whether the workspace has enabled Linear Agent. |
| `linearAgentSettings` | `Any` | Yes | [Internal] Settings for Linear Agent features. |
| `logoUrl` | `str` | No | The URL of the workspace's logo image. |
| `name` | `str` | Yes | The workspace's name. |
| `periodUploadVolume` | `float` | Yes | Rolling 30-day total file upload volume for the workspace, measured in megabytes. |
| `previousUrlKeys` | `str` | Yes | Previously used URL keys for the workspace. |
| `projectUpdateReminderFrequencyInWeeks` | `float` | No | The frequency in weeks at which to prompt for project updates. |
| `projectUpdateRemindersDay` | `str` | Yes | The day of the week on which project update reminders are sent. |
| `projectUpdateRemindersHour` | `float` | Yes | The hour of the day (0-23) at which project update reminders are sent. |
| `pullRequestIssueMode` | `str` | Yes | How Linear suggests and links issues for pull requests that have none linked: 'off', 'suggest', or 'autoOnMerge'. |
| `pullRequestTourEnabled` | `bool` | Yes | Whether the workspace generates AI Pull Request guides for new pull requests. |
| `releaseChannel` | `str` | Yes | The feature release channel the workspace belongs to, which controls access to pre-release features. |
| `releasesEnabled` | `bool` | Yes | Whether release management is enabled for the workspace. |
| `restrictAgentInvocationToMembers` | `bool` | No | [Internal] Whether agent invocation is restricted to full workspace members. |
| `roadmapEnabled` | `bool` | Yes | Whether the roadmap feature is enabled for the workspace. |
| `samlEnabled` | `bool` | Yes | Whether SAML-based single sign-on authentication is enabled for the workspace. |
| `samlSettings` | `Any` | No | [INTERNAL] SAML settings. |
| `scimEnabled` | `bool` | Yes | Whether SCIM provisioning is enabled for the workspace, allowing automated user and team management from an identity provider. |
| `scimSettings` | `Any` | No | [INTERNAL] SCIM settings. |
| `securitySettings` | `Any` | Yes | Security settings for the workspace, including role-based restrictions for invitations, team creation, label management, and other sensitive operations. |
| `slackAutoCreateProjectChannel` | `bool` | Yes | [Internal] Whether to automatically create a Slack channel when a new project is created. |
| `slackProjectChannelIntegration` | `dict` | No | The Slack integration used for auto-creating project channels. |
| `slackProjectChannelPrefix` | `str` | Yes | The prefix used for auto-created Slack project channels. |
| `slackProjectChannelsEnabled` | `bool` | Yes | [Internal] Whether the Slack project channels feature is enabled for the workspace. |
| `subscription` | `dict` | No | The workspace's subscription to a paid plan. |
| `themeSettings` | `Any` | No | [ALPHA] Theme settings for the workspace. |
| `trialEndsAt` | `Any` | No | The time at which the current plan trial will end. |
| `trialStartsAt` | `Any` | No | The time at which the current plan trial started. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |
| `urlKey` | `str` | Yes | The workspace's unique URL key, used in URLs to identify the workspace. |
| `userCount` | `int` | Yes | The number of active (non-deactivated) users in the workspace. |
| `workingDays` | `float` | Yes | [Internal] The list of working days. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Organization().load({"id": "organization_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Organization().remove({"id": "organization_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Organization().update({
    "id": "organization_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrganizationDomainEntity

```python
organization_domain = client.OrganizationDomain()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `authType` | `str` | Yes | The authentication type this domain is used for. |
| `claimed` | `bool` | No | Whether the domain was claimed by the workspace through DNS TXT record verification. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `creator` | `dict` | No | The user who added the domain. |
| `disableOrganizationCreation` | `bool` | No | Whether users with email addresses from this domain are prevented from creating new workspaces. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `identityProvider` | `dict` | No | The identity provider the domain belongs to. |
| `name` | `str` | Yes | The domain name (e.g., 'example.com'). |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |
| `verificationEmail` | `str` | No | The email address used to verify this domain. |
| `verified` | `bool` | Yes | Whether the domain has been verified via email verification. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.OrganizationDomain().create({
    "authType": "example_authType",  # str
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "name": "example_name",  # str
    "updatedAt": "example_updatedAt",  # Any
    "verified": True,  # bool
})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.OrganizationDomain().remove({"id": "id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.OrganizationDomain().update({
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationDomainEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrganizationInviteEntity

```python
organization_invite = client.OrganizationInvite()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acceptedAt` | `Any` | No | The time at which the invite was accepted by the invitee. |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `email` | `str` | Yes | The email address of the person being invited to the workspace. |
| `expiresAt` | `Any` | No | The time at which the invite will expire and can no longer be accepted. |
| `external` | `bool` | Yes | Whether the invite was sent to an email address outside the workspace's verified domains. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `invitee` | `dict` | No | The user who has accepted the invite. |
| `inviter` | `dict` | No | The user who created the invitation. |
| `metadata` | `Any` | No | Extra metadata associated with the invite. |
| `organization` | `dict` | No | The workspace that the invite is associated with. |
| `role` | `str` | Yes | The workspace role (admin, member, guest, or owner) that the invitee will receive upon accepting the invite. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.OrganizationInvite().create({
    "createdAt": "example_createdAt",  # Any
    "email": "example_email",  # str
    "external": True,  # bool
    "id": "example_id",  # str
    "role": "example_role",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.OrganizationInvite().list()
for organization_invite in results:
    print(organization_invite)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.OrganizationInvite().load({"id": "organization_invite_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.OrganizationInvite().remove({"id": "organization_invite_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.OrganizationInvite().update({
    "id": "organization_invite_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationInviteEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrganizationMetaEntity

```python
organization_meta = client.OrganizationMeta()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowedAuthServices` | `str` | Yes | Allowed authentication providers, empty array means all are allowed. |
| `region` | `str` | Yes | The region the workspace is hosted in. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.OrganizationMeta().load({"url_key": "url_key"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationMetaEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PasskeyLoginStartResponseEntity

```python
passkey_login_start_response = client.PasskeyLoginStartResponse()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `options` | `Any` | Yes | The passkey authentication options to pass to the WebAuthn API. |
| `success` | `bool` | Yes | Whether the operation was successful. |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.PasskeyLoginStartResponse().update({
    "auth_id": "auth_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PasskeyLoginStartResponseEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectEntity

```python
project = client.Project()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `autoArchivedAt` | `Any` | No | The time at which the project was automatically archived by the auto-pruning process. |
| `canceledAt` | `Any` | No | The time at which the project was moved into a canceled status. |
| `color` | `str` | Yes | The project's color as a HEX string. |
| `completedAt` | `Any` | No | The time at which the project was moved into a completed status. |
| `completedIssueCountHistory` | `float` | Yes | The number of completed issues in the project at the end of each week since project creation. |
| `completedScopeHistory` | `float` | Yes | The number of completed estimation points at the end of each week since project creation. |
| `content` | `str` | No | The project's content in markdown format. |
| `contentState` | `str` | No | [Internal] The project's content as YJS state. |
| `convertedFromIssue` | `dict` | No | The issue that was converted into this project. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `creator` | `dict` | No | The user who created the project. |
| `currentProgress` | `Any` | Yes | [INTERNAL] The current progress of the project, broken down by issue status category. |
| `description` | `str` | Yes | The short description of the project. |
| `documentContent` | `dict` | No | The content of the project description. |
| `favorite` | `dict` | No | The user's favorite associated with this project. |
| `frequencyResolution` | `str` | Yes | The resolution of the reminder frequency. |
| `health` | `str` | No | The overall health of the project, derived from the most recent project update. |
| `healthUpdatedAt` | `Any` | No | The time at which the project health was last updated, typically when a new project update is posted. |
| `icon` | `str` | No | The icon of the project. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `identifier` | `str` | No | [Internal] The human-readable identifier of the project. |
| `inProgressScopeHistory` | `float` | Yes | The number of in-progress estimation points at the end of each week since project creation. |
| `integrationsSettings` | `dict` | No | Settings for all integrations associated with that project. |
| `issueCountHistory` | `float` | Yes | The total number of issues in the project at the end of each week since project creation. |
| `labelIds` | `str` | Yes | The IDs of the project labels associated with this project. |
| `lastAppliedTemplate` | `dict` | No | The last template that was applied to this project. |
| `lastUpdate` | `dict` | No | The most recent status update posted for this project. |
| `lead` | `dict` | No | The user who leads the project. |
| `leadTeam` | `dict` | No | [Internal] The team that leads the project. |
| `microsoftTeamsChannelId` | `str` | No | The ID of the Microsoft Teams channel connected to the project, if any. |
| `name` | `str` | Yes | The name of the project. |
| `previousIdentifiers` | `str` | Yes | [Internal] Identifiers (default and custom) that this project has previously held. |
| `priority` | `int` | Yes | The priority of the project. |
| `priorityLabel` | `str` | Yes | The priority of the project as a label. |
| `prioritySortOrder` | `float` | Yes | The sort order for the project within the workspace when ordered by priority. |
| `progress` | `float` | Yes | The overall progress of the project. |
| `progressHistory` | `Any` | Yes | [INTERNAL] The progress history of the project, tracking issue completion over time. |
| `projectUpdateRemindersPausedUntilAt` | `Any` | No | The time until which project update reminders are paused. |
| `resourceCount` | `int` | Yes | The number of resources associated with the project, including documents, external links, and attachments. |
| `scope` | `float` | Yes | The overall scope (total estimate points) of the project. |
| `scopeHistory` | `float` | Yes | The total scope (estimation points) of the project at the end of each week since project creation. |
| `slackChannelId` | `str` | No | The ID of the Slack channel connected to the project, if any. |
| `slugId` | `str` | Yes | The project's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `float` | Yes | The sort order for the project within the workspace. |
| `startDate` | `Any` | No | The estimated start date of the project. |
| `startDateResolution` | `str` | No | The resolution of the project's start date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `startedAt` | `Any` | No | The time at which the project was moved into a started status. |
| `status` | `dict` | No | The current project status. |
| `targetDate` | `Any` | No | The estimated completion date of the project. |
| `targetDateResolution` | `str` | No | The resolution of the project's estimated completion date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `trashed` | `bool` | No | A flag that indicates whether the project is in the trash bin. |
| `updateReminderFrequency` | `float` | No | The frequency at which to prompt for updates. |
| `updateReminderFrequencyInWeeks` | `float` | No | The n-weekly frequency at which to prompt for updates. |
| `updateRemindersDay` | `str` | No | The day at which to prompt for updates. |
| `updateRemindersHour` | `float` | No | The hour at which to prompt for updates. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `str` | Yes | Project URL. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Project().create({
    "color": "example_color",  # str
    "completedIssueCountHistory": 1,  # float
    "completedScopeHistory": 1,  # float
    "createdAt": "example_createdAt",  # Any
    "currentProgress": "example_currentProgress",  # Any
    "description": "example_description",  # str
    "frequencyResolution": "example_frequencyResolution",  # str
    "id": "example_id",  # str
    "inProgressScopeHistory": 1,  # float
    "issueCountHistory": 1,  # float
    "labelIds": "example_labelIds",  # str
    "name": "example_name",  # str
    "previousIdentifiers": "example_previousIdentifiers",  # str
    "priority": 1,  # int
    "priorityLabel": "example_priorityLabel",  # str
    "prioritySortOrder": 1,  # float
    "progress": 1,  # float
    "progressHistory": "example_progressHistory",  # Any
    "resourceCount": 1,  # int
    "scope": 1,  # float
    "scopeHistory": 1,  # float
    "slugId": "example_slugId",  # str
    "sortOrder": 1,  # float
    "updatedAt": "example_updatedAt",  # Any
    "url": "example_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Project().list()
for project in results:
    print(project)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Project().load({"id": "project_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Project().remove({"id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Project().update({
    "id": "project_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectLabelEntity

```python
project_label = client.ProjectLabel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `color` | `str` | Yes | The label's color as a HEX string (e.g., '#EB5757'). |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `creator` | `dict` | No | The user who created the label. |
| `description` | `str` | No | The label's description. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `inheritedFrom` | `dict` | No | [Internal] The original workspace or parent-team label that this label was inherited from. |
| `isGroup` | `bool` | Yes | Whether the label is a group. |
| `lastAppliedAt` | `Any` | No | The date when the label was last applied to an issue, project, or initiative. |
| `name` | `str` | Yes | The label's name. |
| `organization` | `dict` | No | The workspace that the project label belongs to. |
| `parent` | `dict` | No | The parent label group. |
| `retiredAt` | `Any` | No | [Internal] When the label was retired. |
| `retiredBy` | `dict` | No | The user who retired the label. |
| `team` | `dict` | No | [Internal] The team that the label is scoped to. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ProjectLabel().create({
    "color": "example_color",  # str
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "isGroup": True,  # bool
    "name": "example_name",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ProjectLabel().list()
for project_label in results:
    print(project_label)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ProjectLabel().load({"id": "project_label_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ProjectLabel().remove({"id": "project_label_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ProjectLabel().update({
    "id": "project_label_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectLabelEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectMilestoneEntity

```python
project_milestone = client.ProjectMilestone()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `currentProgress` | `Any` | Yes | [Internal] The current progress of the milestone, broken down by issue status category. |
| `description` | `str` | No | The project milestone's description in markdown format. |
| `descriptionState` | `str` | No | [Internal] The project milestone's description as YJS state. |
| `documentContent` | `dict` | No | The rich-text content of the milestone description. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `name` | `str` | Yes | The name of the project milestone. |
| `progress` | `float` | Yes | The progress % of the project milestone. |
| `progressHistory` | `Any` | Yes | [Internal] The progress history of the milestone, tracking issue completion over time. |
| `project` | `dict` | No | The project that this milestone belongs to. |
| `sortOrder` | `float` | Yes | The order of the milestone in relation to other milestones within a project. |
| `status` | `str` | Yes | The status of the project milestone. |
| `targetDate` | `Any` | No | The planned completion date of the milestone. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ProjectMilestone().create({
    "createdAt": "example_createdAt",  # Any
    "currentProgress": "example_currentProgress",  # Any
    "id": "example_id",  # str
    "name": "example_name",  # str
    "progress": 1,  # float
    "progressHistory": "example_progressHistory",  # Any
    "sortOrder": 1,  # float
    "status": "example_status",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ProjectMilestone().list()
for project_milestone in results:
    print(project_milestone)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ProjectMilestone().load({"id": "project_milestone_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ProjectMilestone().remove({"id": "project_milestone_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ProjectMilestone().update({
    "id": "project_milestone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectMilestoneEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectMilestoneMoveProjectTeamEntity

```python
project_milestone_move_project_team = client.ProjectMilestoneMoveProjectTeam()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `projectId` | `str` | Yes | The project id |
| `teamIds` | `str` | Yes | The team ids for the project |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ProjectMilestoneMoveProjectTeam().update({
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectMilestoneMoveProjectTeamEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectRelationEntity

```python
project_relation = client.ProjectRelation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `anchorType` | `str` | Yes | The type of anchor on the source project end of the relation, indicating whether it is anchored to the project itself or a specific milestone. |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `project` | `dict` | No | The source project in the dependency relation. |
| `projectMilestone` | `dict` | No | The specific milestone within the source project that the relation is anchored to. |
| `relatedAnchorType` | `str` | Yes | The type of anchor on the target project end of the relation, indicating whether it is anchored to the project itself or a specific milestone. |
| `relatedProject` | `dict` | No | The target project in the dependency relation. |
| `relatedProjectMilestone` | `dict` | No | The specific milestone within the target project that the relation is anchored to. |
| `type` | `str` | Yes | The type of dependency relationship from the project to the related project (e.g., blocks). |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `dict` | No | The user who last created or modified the relation. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ProjectRelation().create({
    "anchorType": "example_anchorType",  # str
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "relatedAnchorType": "example_relatedAnchorType",  # str
    "type": "example_type",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ProjectRelation().list()
for project_relation in results:
    print(project_relation)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ProjectRelation().load({"id": "project_relation_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ProjectRelation().remove({"id": "project_relation_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ProjectRelation().update({
    "id": "project_relation_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectRelationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectSearchResultEntity

```python
project_search_result = client.ProjectSearchResult()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `autoArchivedAt` | `Any` | No | The time at which the project was automatically archived by the auto-pruning process. |
| `canceledAt` | `Any` | No | The time at which the project was moved into a canceled status. |
| `color` | `str` | Yes | The project's color as a HEX string. |
| `completedAt` | `Any` | No | The time at which the project was moved into a completed status. |
| `completedIssueCountHistory` | `float` | Yes | The number of completed issues in the project at the end of each week since project creation. |
| `completedScopeHistory` | `float` | Yes | The number of completed estimation points at the end of each week since project creation. |
| `content` | `str` | No | The project's content in markdown format. |
| `contentState` | `str` | No | [Internal] The project's content as YJS state. |
| `convertedFromIssue` | `dict` | No | The issue that was converted into this project. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `creator` | `dict` | No | The user who created the project. |
| `currentProgress` | `Any` | Yes | [INTERNAL] The current progress of the project, broken down by issue status category. |
| `description` | `str` | Yes | The short description of the project. |
| `documentContent` | `dict` | No | The content of the project description. |
| `favorite` | `dict` | No | The user's favorite associated with this project. |
| `frequencyResolution` | `str` | Yes | The resolution of the reminder frequency. |
| `health` | `str` | No | The overall health of the project, derived from the most recent project update. |
| `healthUpdatedAt` | `Any` | No | The time at which the project health was last updated, typically when a new project update is posted. |
| `icon` | `str` | No | The icon of the project. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `identifier` | `str` | No | [Internal] The human-readable identifier of the project. |
| `inProgressScopeHistory` | `float` | Yes | The number of in-progress estimation points at the end of each week since project creation. |
| `integrationsSettings` | `dict` | No | Settings for all integrations associated with that project. |
| `issueCountHistory` | `float` | Yes | The total number of issues in the project at the end of each week since project creation. |
| `labelIds` | `str` | Yes | The IDs of the project labels associated with this project. |
| `lastAppliedTemplate` | `dict` | No | The last template that was applied to this project. |
| `lastUpdate` | `dict` | No | The most recent status update posted for this project. |
| `lead` | `dict` | No | The user who leads the project. |
| `leadTeam` | `dict` | No | [Internal] The team that leads the project. |
| `metadata` | `Any` | Yes | Metadata related to search result. |
| `microsoftTeamsChannelId` | `str` | No | The ID of the Microsoft Teams channel connected to the project, if any. |
| `name` | `str` | Yes | The name of the project. |
| `previousIdentifiers` | `str` | Yes | [Internal] Identifiers (default and custom) that this project has previously held. |
| `priority` | `int` | Yes | The priority of the project. |
| `priorityLabel` | `str` | Yes | The priority of the project as a label. |
| `prioritySortOrder` | `float` | Yes | The sort order for the project within the workspace when ordered by priority. |
| `progress` | `float` | Yes | The overall progress of the project. |
| `progressHistory` | `Any` | Yes | [INTERNAL] The progress history of the project, tracking issue completion over time. |
| `projectUpdateRemindersPausedUntilAt` | `Any` | No | The time until which project update reminders are paused. |
| `resourceCount` | `int` | Yes | The number of resources associated with the project, including documents, external links, and attachments. |
| `scope` | `float` | Yes | The overall scope (total estimate points) of the project. |
| `scopeHistory` | `float` | Yes | The total scope (estimation points) of the project at the end of each week since project creation. |
| `slackChannelId` | `str` | No | The ID of the Slack channel connected to the project, if any. |
| `slugId` | `str` | Yes | The project's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `float` | Yes | The sort order for the project within the workspace. |
| `startDate` | `Any` | No | The estimated start date of the project. |
| `startDateResolution` | `str` | No | The resolution of the project's start date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `startedAt` | `Any` | No | The time at which the project was moved into a started status. |
| `status` | `dict` | No | The current project status. |
| `targetDate` | `Any` | No | The estimated completion date of the project. |
| `targetDateResolution` | `str` | No | The resolution of the project's estimated completion date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `trashed` | `bool` | No | A flag that indicates whether the project is in the trash bin. |
| `updateReminderFrequency` | `float` | No | The frequency at which to prompt for updates. |
| `updateReminderFrequencyInWeeks` | `float` | No | The n-weekly frequency at which to prompt for updates. |
| `updateRemindersDay` | `str` | No | The day at which to prompt for updates. |
| `updateRemindersHour` | `float` | No | The hour at which to prompt for updates. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `str` | Yes | Project URL. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ProjectSearchResult().list({"term": "example"})
for project_search_result in results:
    print(project_search_result)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectSearchResultEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectStatusEntity

```python
project_status = client.ProjectStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `color` | `str` | Yes | The color of the status as a HEX string, used for display in the UI. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `description` | `str` | No | Description of the status. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `indefinite` | `bool` | Yes | Whether a project can remain in this status indefinitely. |
| `inheritedFrom` | `dict` | No | [Internal] The original workspace or parent-team status that this status was inherited from. |
| `name` | `str` | Yes | The name of the status. |
| `position` | `float` | Yes | The position of the status within its type group in the workspace's project flow. |
| `team` | `dict` | No | [Internal] The team that the status is scoped to. |
| `type` | `str` | Yes | The category type of the project status (e.g., backlog, planned, started, paused, completed, canceled). |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ProjectStatus().create({
    "color": "example_color",  # str
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "indefinite": True,  # bool
    "name": "example_name",  # str
    "position": 1,  # float
    "type": "example_type",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ProjectStatus().list()
for project_status in results:
    print(project_status)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ProjectStatus().load({"id": "project_status_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ProjectStatus().update({
    "id": "project_status_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectStatusEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectUpdateEntity

```python
project_update = client.ProjectUpdate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `body` | `str` | Yes | The update content in markdown format. |
| `bodyData` | `str` | Yes | [Internal] The content of the update as a Prosemirror document. |
| `commentCount` | `int` | Yes | Number of comments associated with the project update. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `diff` | `Any` | No | The diff between the current update and the previous one. |
| `diffMarkdown` | `str` | No | The diff between the current update and the previous one, formatted as markdown. |
| `editedAt` | `Any` | No | The time the update was edited. |
| `health` | `str` | Yes | The health of the project at the time this update was posted. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `infoSnapshot` | `Any` | No | [Internal] A snapshot of project properties at the time the update was posted, including team, milestone, and issue statistics. |
| `isDiffHidden` | `bool` | Yes | Whether the diff between this update and the previous one should be hidden in the UI. |
| `isStale` | `bool` | Yes | Whether the project update is stale. |
| `project` | `dict` | No | The project that this status update was posted to. |
| `reactionData` | `Any` | Yes | Emoji reaction summary, grouped by emoji type. |
| `shortSummary` | `str` | No | A short AI-generated summary of the project update. |
| `slugId` | `str` | Yes | The update's unique URL slug. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `str` | Yes | The URL to the project update. |
| `user` | `dict` | No | The user who wrote the update. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ProjectUpdate().create({
    "body": "example_body",  # str
    "bodyData": "example_bodyData",  # str
    "commentCount": 1,  # int
    "createdAt": "example_createdAt",  # Any
    "health": "example_health",  # str
    "id": "example_id",  # str
    "isDiffHidden": True,  # bool
    "isStale": True,  # bool
    "reactionData": "example_reactionData",  # Any
    "slugId": "example_slugId",  # str
    "updatedAt": "example_updatedAt",  # Any
    "url": "example_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ProjectUpdate().list()
for project_update in results:
    print(project_update)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ProjectUpdate().load({"id": "project_update_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ProjectUpdate().remove({"id": "project_update_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ProjectUpdate().update({
    "id": "project_update_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectUpdateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PushSubscriptionEntity

```python
push_subscription = client.PushSubscription()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PushSubscription().create({
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.PushSubscription().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PushSubscriptionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReactionEntity

```python
reaction = client.Reaction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `comment` | `dict` | No | The comment that the reaction is associated with. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `emoji` | `str` | Yes | The name of the emoji used for this reaction. |
| `externalUser` | `dict` | No | The external user that created the reaction through an integration. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `initiativeUpdate` | `dict` | No | The initiative update that the reaction is associated with. |
| `issue` | `dict` | No | The issue that the reaction is associated with. |
| `post` | `dict` | No | The post that the reaction is associated with. |
| `projectUpdate` | `dict` | No | The project update that the reaction is associated with. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `dict` | No | The workspace user that created the reaction. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Reaction().create({
    "createdAt": "example_createdAt",  # Any
    "emoji": "example_emoji",  # str
    "id": "example_id",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Reaction().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReactionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReleaseEntity

```python
release = client.Release()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `autoArchivedAt` | `Any` | No | The time at which the release was automatically archived by the auto pruning process. |
| `canceledAt` | `Any` | No | The time at which the release was canceled. |
| `commitSha` | `str` | No | The Git commit SHA associated with this release. |
| `completedAt` | `Any` | No | The time at which the release was completed. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `creator` | `dict` | No | The user who created the release. |
| `currentProgress` | `Any` | Yes | The current progress summary for the release, including counts of issues by workflow state type (e.g., completed, in progress, unstarted). |
| `description` | `str` | No | The description of the release in plain text or markdown. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `issueCount` | `int` | Yes | Number of issues associated with the release. |
| `name` | `str` | Yes | The name of the release. |
| `pipeline` | `dict` | No | The release pipeline that this release belongs to. |
| `progressHistory` | `Any` | Yes | The historical progress snapshots for the release, tracking how issue completion has evolved over time. |
| `releaseNote` | `dict` | No | [Internal] The primary release note covering this release. |
| `slugId` | `str` | Yes | The release's unique URL slug, used to construct human-readable URLs for the release. |
| `stage` | `dict` | No | The current stage of the release within its pipeline (e.g., Planned, In Progress, Completed, Canceled). |
| `startDate` | `Any` | No | The estimated start date of the release. |
| `startedAt` | `Any` | No | The time at which the release first entered a started stage. |
| `targetDate` | `Any` | No | The estimated completion date of the release. |
| `trashed` | `bool` | No | A flag that indicates whether the release is in the trash bin. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `str` | Yes | The URL to the release page in the Linear app. |
| `version` | `str` | No | The version identifier for this release (e.g., 'v1.2.3' or a short commit hash). |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Release().create({
    "createdAt": "example_createdAt",  # Any
    "currentProgress": "example_currentProgress",  # Any
    "id": "example_id",  # str
    "issueCount": 1,  # int
    "name": "example_name",  # str
    "progressHistory": "example_progressHistory",  # Any
    "slugId": "example_slugId",  # str
    "updatedAt": "example_updatedAt",  # Any
    "url": "example_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Release().list()
for release in results:
    print(release)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Release().load({"id": "release_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Release().remove({"id": "release_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Release().update({
    "id": "release_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReleaseEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReleaseNoteEntity

```python
release_note = client.ReleaseNote()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `documentContent` | `dict` | No | Document content backing the release note body. |
| `firstRelease` | `dict` | No | The earliest release covered by this note. |
| `generationStatus` | `str` | No | Generation status when these release notes are being auto-generated: `pending` while the LLM call is running, `completed` once it lands. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `lastRelease` | `dict` | No | The most recent release covered by this note. |
| `pipeline` | `dict` | No | The release pipeline that this note belongs to. |
| `releaseCount` | `int` | Yes | The number of releases covered by this note. |
| `slugId` | `str` | Yes | The release note's unique URL slug, used to construct human-readable URLs for the note. |
| `title` | `str` | No | User-supplied title for the release note. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `str` | Yes | The URL to the release note page in the Linear app. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ReleaseNote().create({
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "releaseCount": 1,  # int
    "slugId": "example_slugId",  # str
    "updatedAt": "example_updatedAt",  # Any
    "url": "example_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ReleaseNote().list()
for release_note in results:
    print(release_note)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ReleaseNote().load({"id": "release_note_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ReleaseNote().remove({"id": "release_note_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ReleaseNote().update({
    "id": "release_note_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReleaseNoteEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReleasePipelineEntity

```python
release_pipeline = client.ReleasePipeline()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approximateReleaseCount` | `int` | Yes | The approximate number of non-archived releases in this pipeline. |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `autoGenerateReleaseNotesOnCompletion` | `bool` | Yes | Whether to automatically generate a release note when a release is completed. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `includePathPatterns` | `str` | Yes | Glob patterns to filter commits by file path. |
| `isProduction` | `bool` | Yes | Whether this pipeline targets a production environment. |
| `latestReleaseNote` | `dict` | No | The release note in this pipeline whose covered range ends with the most recent release. |
| `name` | `str` | Yes | The name of the pipeline. |
| `releaseNoteTemplate` | `dict` | No | The document template used to define the release notes format for this pipeline. |
| `rolloverIssuesOnCompletion` | `bool` | Yes | Whether completing a scheduled release moves its open issues to the next release. |
| `slugId` | `str` | Yes | The pipeline's unique slug identifier, used in URLs and for lookup by human-readable identifier instead of UUID. |
| `trashed` | `bool` | No | A flag that indicates whether the pipeline is in the trash bin. |
| `type` | `str` | Yes | The type of the pipeline, which determines how releases are created and managed. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `str` | Yes | The URL to the release pipeline's releases list in the Linear app. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ReleasePipeline().create({
    "approximateReleaseCount": 1,  # int
    "autoGenerateReleaseNotesOnCompletion": True,  # bool
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "includePathPatterns": "example_includePathPatterns",  # str
    "isProduction": True,  # bool
    "name": "example_name",  # str
    "rolloverIssuesOnCompletion": True,  # bool
    "slugId": "example_slugId",  # str
    "type": "example_type",  # str
    "updatedAt": "example_updatedAt",  # Any
    "url": "example_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ReleasePipeline().list()
for release_pipeline in results:
    print(release_pipeline)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ReleasePipeline().load({"id": "release_pipeline_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ReleasePipeline().remove({"id": "release_pipeline_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ReleasePipeline().update({
    "id": "release_pipeline_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReleasePipelineEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReleaseStageEntity

```python
release_stage = client.ReleaseStage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `color` | `str` | Yes | The display color of the stage as a HEX string (e.g., '#0f783c'), used for visual representation in the UI. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `frozen` | `bool` | Yes | Whether this stage is frozen. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `name` | `str` | Yes | The name of the stage. |
| `pipeline` | `dict` | No | The release pipeline that this stage belongs to. |
| `position` | `float` | Yes | The position of the stage within its pipeline, used for ordering stages in the UI. |
| `type` | `str` | Yes | The lifecycle type of the stage (planned, started, completed, or canceled). |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ReleaseStage().create({
    "color": "example_color",  # str
    "createdAt": "example_createdAt",  # Any
    "frozen": True,  # bool
    "id": "example_id",  # str
    "name": "example_name",  # str
    "position": 1,  # float
    "type": "example_type",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ReleaseStage().list()
for release_stage in results:
    print(release_stage)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ReleaseStage().load({"id": "release_stage_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ReleaseStage().update({
    "id": "release_stage_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReleaseStageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RoadmapEntity

```python
roadmap = client.Roadmap()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `color` | `str` | No | The roadmap's color. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `creator` | `dict` | No | The user who created the roadmap. |
| `description` | `str` | No | The description of the roadmap. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `name` | `str` | Yes | The name of the roadmap. |
| `organization` | `dict` | No | The workspace of the roadmap. |
| `owner` | `dict` | No | The user who owns the roadmap. |
| `slugId` | `str` | Yes | The roadmap's unique URL slug. |
| `sortOrder` | `float` | Yes | The sort order of the roadmap within the workspace. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `str` | Yes | The canonical url for the roadmap. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Roadmap().create({
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "name": "example_name",  # str
    "slugId": "example_slugId",  # str
    "sortOrder": 1,  # float
    "updatedAt": "example_updatedAt",  # Any
    "url": "example_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Roadmap().list()
for roadmap in results:
    print(roadmap)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Roadmap().load({"id": "roadmap_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Roadmap().remove({"id": "roadmap_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Roadmap().update({
    "id": "roadmap_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RoadmapEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RoadmapToProjectEntity

```python
roadmap_to_project = client.RoadmapToProject()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `project` | `dict` | No | The project that the roadmap is associated with. |
| `roadmap` | `dict` | No | The roadmap that the project is associated with. |
| `sortOrder` | `str` | Yes | The sort order of the project within the roadmap. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.RoadmapToProject().create({
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "sortOrder": "example_sortOrder",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.RoadmapToProject().list()
for roadmap_to_project in results:
    print(roadmap_to_project)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.RoadmapToProject().load({"id": "roadmap_to_project_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.RoadmapToProject().remove({"id": "roadmap_to_project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.RoadmapToProject().update({
    "id": "roadmap_to_project_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RoadmapToProjectEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SlaConfigurationEntity

```python
sla_configuration = client.SlaConfiguration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conditions` | `Any` | Yes | The workflow conditions that determine when this SLA rule applies. |
| `id` | `str` | Yes | The identifier of the SLA rule. |
| `name` | `str` | Yes | The name of the SLA rule. |
| `removesSla` | `bool` | Yes | Whether the rule removes an SLA instead of setting one. |
| `sla` | `float` | No | The SLA value configured by the rule, expressed in milliseconds or business days depending on the day-count type. |
| `slaType` | `str` | No | The SLA type used when the rule sets an SLA. |
| `startMode` | `str` | No | When SLA timing begins. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SlaConfiguration().list({"team_id": "example"})
for sla_configuration in results:
    print(sla_configuration)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SlaConfigurationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SsoUrlFromEmailResponseEntity

```python
sso_url_from_email_response = client.SsoUrlFromEmailResponse()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `samlSsoUrl` | `str` | Yes | SAML SSO sign-in URL. |
| `success` | `bool` | Yes | Whether the operation was successful. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.SsoUrlFromEmailResponse().load({"email": "email", "type": "type"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SsoUrlFromEmailResponseEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TeamEntity

```python
team = client.Team()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeCycle` | `dict` | No | Team's currently active cycle. |
| `aiDiscussionSummariesEnabled` | `bool` | Yes | Whether to enable AI discussion summaries for issues in this team. |
| `aiThreadSummariesEnabled` | `bool` | Yes | Whether to enable resolved thread AI summaries. |
| `allMembersCanJoin` | `bool` | No | Whether all members in the workspace can join the team. |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `autoArchivePeriod` | `float` | Yes | Period after which automatically closed, completed, and duplicate issues are automatically archived in months. |
| `autoCloseChildIssues` | `bool` | No | Whether child issues should automatically close when their parent issue is closed |
| `autoCloseParentIssues` | `bool` | No | Whether parent issues should automatically close when all child issues are closed |
| `autoClosePeriod` | `float` | No | Period after which issues are automatically closed in months. |
| `autoCloseStateId` | `str` | No | The canceled workflow state which auto closed issues will be set to. |
| `color` | `str` | No | The team's color. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `currentProgress` | `Any` | Yes | [Internal] The current progress of the team. |
| `cycleCalenderUrl` | `str` | Yes | Calendar feed URL (iCal) for cycles. |
| `cycleCooldownTime` | `float` | Yes | The cooldown time after each cycle in weeks. |
| `cycleDuration` | `float` | Yes | The duration of each cycle in weeks. |
| `cycleIssueAutoAssignCompleted` | `bool` | Yes | Auto assign completed issues to current cycle. |
| `cycleIssueAutoAssignStarted` | `bool` | Yes | Auto assign started issues to current cycle. |
| `cycleLockToActive` | `bool` | Yes | Auto assign issues to current cycle if in active status. |
| `cycleStartDay` | `float` | Yes | The day of the week that a new cycle starts (0 = Sunday, 1 = Monday, ..., 6 = Saturday). |
| `cyclesEnabled` | `bool` | Yes | Whether the team uses cycles for sprint-style issue management. |
| `defaultIssueEstimate` | `float` | Yes | What to use as a default estimate for unestimated issues. |
| `defaultIssueState` | `dict` | No | The default workflow state into which issues are set when they are opened by team members. |
| `defaultProjectTemplate` | `dict` | No | The default template to use for new projects created for the team. |
| `defaultTemplateForMembers` | `dict` | No | The default template to use for new issues created by members of the team. |
| `defaultTemplateForNonMembers` | `dict` | No | The default template to use for new issues created by non-members of the team. |
| `description` | `str` | No | The team's description. |
| `displayName` | `str` | Yes | The name of the team including its parent team name if it has one. |
| `groupIssueHistory` | `bool` | Yes | Whether to group recent issue history entries. |
| `icon` | `str` | No | The icon of the team. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `inheritIssueEstimation` | `bool` | Yes | Whether the team should inherit its estimation settings from its parent. |
| `inheritProjectStatuses` | `bool` | Yes | [Internal] Whether the team should inherit its project statuses from its parent team, or from the workspace when it has no parent. |
| `inheritSlackAutoCreateProjectChannel` | `bool` | Yes | [Internal] Whether the team should inherit its Slack auto-create project channel setting from its parent. |
| `inheritWorkflowStatuses` | `bool` | Yes | Whether the team should inherit its workflow statuses from its parent. |
| `initiativesEnabled` | `bool` | Yes | Whether team initiatives are enabled and shown in the team's sidebar. |
| `integrationsSettings` | `dict` | No | Settings for all integrations associated with that team. |
| `issueCount` | `int` | Yes | The total number of issues in the team. |
| `issueEstimationAllowZero` | `bool` | Yes | Whether to allow zeros in issues estimates. |
| `issueEstimationExtended` | `bool` | Yes | Whether to add additional points to the estimate scale. |
| `issueEstimationType` | `str` | Yes | The issue estimation type to use. |
| `joinByDefault` | `bool` | No | [Internal] Whether new users should join this team by default. |
| `key` | `str` | Yes | The team's unique key, used as a prefix in issue identifiers (e.g., 'ENG' in 'ENG-123') and in URLs. |
| `ledInitiativeCount` | `int` | Yes | The number of initiatives led by this team that would be deleted along with it. |
| `name` | `str` | Yes | The team's name. |
| `organization` | `dict` | No | The workspace that the team belongs to. |
| `parent` | `dict` | No | The team's parent team. |
| `progressHistory` | `Any` | Yes | [Internal] The progress history of the team. |
| `requirePriorityToLeaveTriage` | `bool` | Yes | Whether an issue needs to have a priority set before leaving triage. |
| `restrictedBy` | `dict` | No | [Internal] For restricted teams, the enclosing private team that forms the visibility boundary. |
| `restrictedById` | `str` | No | [Internal] The identifier of the enclosing private team that forms the visibility boundary for restricted teams. |
| `retiredAt` | `Any` | No | The time at which the team was retired. |
| `scimGroupName` | `str` | No | The SCIM group name for the team. |
| `scimManaged` | `bool` | Yes | Whether the team is managed by a SCIM integration. |
| `securitySettings` | `Any` | Yes | Security settings for the team, including role-based restrictions for issue sharing, label management, member management, template management, and agent skills. |
| `setIssueSortOrderOnStateChange` | `str` | Yes | Where to move issues when changing state. |
| `slackAutoCreateProjectChannel` | `bool` | No | [Internal] Whether to automatically create a Slack channel when a new project is created in this team. |
| `timezone` | `str` | Yes | The timezone of the team. |
| `triageEnabled` | `bool` | Yes | Whether triage mode is enabled for the team. |
| `triageIssueState` | `dict` | No | The workflow state into which issues are set when they are opened by non-team members or integrations if triage is enabled. |
| `triageResponsibility` | `dict` | No | Team's triage responsibility. |
| `upcomingCycleCount` | `float` | Yes | How many upcoming cycles to create. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |
| `visibility` | `str` | Yes | The visibility of the team. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Team().create({
    "aiDiscussionSummariesEnabled": True,  # bool
    "aiThreadSummariesEnabled": True,  # bool
    "autoArchivePeriod": 1,  # float
    "createdAt": "example_createdAt",  # Any
    "currentProgress": "example_currentProgress",  # Any
    "cycleCalenderUrl": "example_cycleCalenderUrl",  # str
    "cycleCooldownTime": 1,  # float
    "cycleDuration": 1,  # float
    "cycleIssueAutoAssignCompleted": True,  # bool
    "cycleIssueAutoAssignStarted": True,  # bool
    "cycleLockToActive": True,  # bool
    "cycleStartDay": 1,  # float
    "cyclesEnabled": True,  # bool
    "defaultIssueEstimate": 1,  # float
    "displayName": "example_displayName",  # str
    "groupIssueHistory": True,  # bool
    "id": "example_id",  # str
    "inheritIssueEstimation": True,  # bool
    "inheritProjectStatuses": True,  # bool
    "inheritSlackAutoCreateProjectChannel": True,  # bool
    "inheritWorkflowStatuses": True,  # bool
    "initiativesEnabled": True,  # bool
    "issueCount": 1,  # int
    "issueEstimationAllowZero": True,  # bool
    "issueEstimationExtended": True,  # bool
    "issueEstimationType": "example_issueEstimationType",  # str
    "key": "example_key",  # str
    "ledInitiativeCount": 1,  # int
    "name": "example_name",  # str
    "progressHistory": "example_progressHistory",  # Any
    "requirePriorityToLeaveTriage": True,  # bool
    "scimManaged": True,  # bool
    "securitySettings": "example_securitySettings",  # Any
    "setIssueSortOrderOnStateChange": "example_setIssueSortOrderOnStateChange",  # str
    "timezone": "example_timezone",  # str
    "triageEnabled": True,  # bool
    "upcomingCycleCount": 1,  # float
    "updatedAt": "example_updatedAt",  # Any
    "visibility": "example_visibility",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Team().list()
for team in results:
    print(team)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Team().load({"id": "team_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Team().remove({"id": "team_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Team().update({
    "id": "team_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TeamMembershipEntity

```python
team_membership = client.TeamMembership()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `owner` | `bool` | Yes | Whether the user is an owner of the team. |
| `sortOrder` | `float` | Yes | The sort order of this team in the user's personal team list. |
| `team` | `dict` | No | The team that the membership is associated with. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `dict` | No | The user that the membership is associated with. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TeamMembership().create({
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "owner": True,  # bool
    "sortOrder": 1,  # float
    "updatedAt": "example_updatedAt",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TeamMembership().list()
for team_membership in results:
    print(team_membership)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TeamMembership().load({"id": "team_membership_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.TeamMembership().remove({"id": "team_membership_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TeamMembership().update({
    "id": "team_membership_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamMembershipEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TemplateEntity

```python
template = client.Template()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `color` | `str` | No | The hex color of the template icon. |
| `content` | `str` | No | The template's content in markdown format: the body it pre-fills on the entity it creates. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `creator` | `dict` | No | The user who created the template. |
| `description` | `str` | No | A description of what the template is used for. |
| `hasFormFields` | `bool` | Yes | [Internal] Whether the template has form fields |
| `icon` | `str` | No | The icon of the template, either a decorative icon type or an emoji string. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `inheritedFrom` | `dict` | No | The parent team template this template was inherited from. |
| `lastAppliedAt` | `Any` | No | The date when the template was last applied to create or update an entity. |
| `lastUpdatedBy` | `dict` | No | The user who last updated the template. |
| `name` | `str` | Yes | The name of the template. |
| `organization` | `dict` | No | The workspace that owns this template. |
| `pipeline` | `dict` | No | The release pipeline this template is bound to. |
| `sortOrder` | `float` | Yes | The sort order of the template within the templates list. |
| `team` | `dict` | No | The team that the template is associated with. |
| `templateData` | `Any` | Yes | The template data as a JSON-encoded string containing the pre-filled attributes for the entity type (e.g., issue fields, project configuration, or document content). |
| `type` | `str` | Yes | The entity type this template is for, such as 'issue', 'project', or 'document'. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Template().create({
    "createdAt": "example_createdAt",  # Any
    "hasFormFields": True,  # bool
    "id": "example_id",  # str
    "name": "example_name",  # str
    "sortOrder": 1,  # float
    "templateData": "example_templateData",  # Any
    "type": "example_type",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Template().list()
for template in results:
    print(template)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Template().load({"id": "template_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Template().remove({"id": "template_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Template().update({
    "id": "template_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TemplateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TimeScheduleEntity

```python
time_schedule = client.TimeSchedule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `externalId` | `str` | No | The identifier of the external schedule. |
| `externalUrl` | `str` | No | The URL to the external schedule. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `integration` | `dict` | No | The identifier of the Linear integration populating the schedule. |
| `name` | `str` | Yes | The name of the schedule. |
| `organization` | `dict` | No | The workspace of the schedule. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TimeSchedule().create({
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "name": "example_name",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TimeSchedule().list()
for time_schedule in results:
    print(time_schedule)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TimeSchedule().load({"id": "time_schedule_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.TimeSchedule().remove({"id": "time_schedule_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TimeSchedule().update({
    "id": "time_schedule_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TimeScheduleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TriageResponsibilityEntity

```python
triage_responsibility = client.TriageResponsibility()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `str` | Yes | The action to take when an issue is added to triage. |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `currentUser` | `dict` | No | The user currently responsible for triage. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `team` | `dict` | No | The team to which the triage responsibility belongs to. |
| `timeSchedule` | `dict` | No | The time schedule used for scheduling. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TriageResponsibility().create({
    "action": "example_action",  # str
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TriageResponsibility().list()
for triage_responsibility in results:
    print(triage_responsibility)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TriageResponsibility().load({"id": "triage_responsibility_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.TriageResponsibility().remove({"id": "triage_responsibility_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TriageResponsibility().update({
    "id": "triage_responsibility_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TriageResponsibilityEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UploadFileEntity

```python
upload_file = client.UploadFile()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assetUrl` | `str` | Yes | The permanent asset URL where the file will be accessible after upload. |
| `contentType` | `str` | Yes | The content type. |
| `filename` | `str` | Yes | The filename. |
| `metaData` | `Any` | No | Optional metadata associated with the upload, such as the related issue or comment ID. |
| `size` | `int` | Yes | The size of the uploaded file. |
| `uploadUrl` | `str` | Yes | The pre-signed URL to which the file should be uploaded via a PUT request. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.UploadFile().create({
    "content_type": "example_content_type",  # str
    "filename": "example_filename",  # str
    "size": 1,  # int
    "assetUrl": "example_assetUrl",  # str
    "contentType": "example_contentType",  # str
    "uploadUrl": "example_uploadUrl",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UploadFileEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UsageAlertEntity

```python
usage_alert = client.UsageAlert()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `metadata` | `Any` | Yes | Type-specific snapshot captured when the alert was triggered, keyed by the alert type — for example the credit balance and threshold for a lowBalance alert. |
| `resolvedAt` | `Any` | No | The time when the usage alert was resolved or archived. |
| `type` | `str` | Yes | The kind of usage alert that was triggered. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.UsageAlert().list()
for usage_alert in results:
    print(usage_alert)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.UsageAlert().load({"id": "usage_alert_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UsageAlertEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UserEntity

```python
user = client.User()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Whether the user account is active or disabled (suspended). |
| `admin` | `bool` | Yes | Whether the user is a workspace administrator. |
| `app` | `bool` | Yes | Whether the user is an app. |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `avatarBackgroundColor` | `str` | Yes | The background color of the avatar for users without set avatar. |
| `avatarUrl` | `str` | No | An URL to the user's avatar image. |
| `calendarHash` | `str` | No | [DEPRECATED] Hash for the user to be used in calendar URLs. |
| `canAccessAnyPublicTeam` | `bool` | Yes | Whether this user can access any public team in the workspace. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `createdIssueCount` | `int` | Yes | Number of issues created. |
| `description` | `str` | No | A short description of the user, such as their title or a brief bio. |
| `disableReason` | `str` | No | The reason why the user account is disabled. |
| `displayName` | `str` | Yes | The user's display (nick) name. |
| `email` | `str` | Yes | The user's email address. |
| `gitHubUserId` | `str` | No | The user's GitHub user ID. |
| `guest` | `bool` | Yes | Whether the user is a guest in the workspace and limited to accessing a subset of teams. |
| `hasGitHubCodeAccess` | `bool` | Yes | [Internal] Whether this user can access GitHub source code through Linear. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `identityProvider` | `dict` | No | [INTERNAL] Identity provider the user is managed by. |
| `initials` | `str` | Yes | The initials of the user. |
| `isAssignable` | `bool` | Yes | Whether the user can be assigned to issues. |
| `isMe` | `bool` | Yes | Whether the user is the currently authenticated user. |
| `isMentionable` | `bool` | Yes | Whether the user is mentionable. |
| `lastSeen` | `Any` | No | The last time the user was seen online. |
| `name` | `str` | Yes | The user's full name. |
| `organization` | `dict` | No | The workspace that the user belongs to. |
| `owner` | `bool` | Yes | Whether the user is a workspace owner, which is the highest permission level. |
| `statusEmoji` | `str` | No | The emoji representing the user's current status. |
| `statusLabel` | `str` | No | The text label of the user's current status. |
| `statusUntilAt` | `Any` | No | The date and time at which the user's current status should be automatically cleared. |
| `supportsAgentSessions` | `bool` | Yes | Whether this agent user supports agent sessions. |
| `timezone` | `str` | No | The local timezone of the user. |
| `title` | `str` | No | The user's job title. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `str` | Yes | User's profile URL. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.User().create({
    "active": True,  # bool
    "admin": True,  # bool
    "app": True,  # bool
    "avatarBackgroundColor": "example_avatarBackgroundColor",  # str
    "canAccessAnyPublicTeam": True,  # bool
    "createdAt": "example_createdAt",  # Any
    "createdIssueCount": 1,  # int
    "displayName": "example_displayName",  # str
    "email": "example_email",  # str
    "guest": True,  # bool
    "hasGitHubCodeAccess": True,  # bool
    "id": "example_id",  # str
    "initials": "example_initials",  # str
    "isAssignable": True,  # bool
    "isMe": True,  # bool
    "isMentionable": True,  # bool
    "name": "example_name",  # str
    "owner": True,  # bool
    "supportsAgentSessions": True,  # bool
    "updatedAt": "example_updatedAt",  # Any
    "url": "example_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.User().list()
for user in results:
    print(user)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.User().load({"id": "user_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.User().update({
    "id": "user_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UserSettingEntity

```python
user_setting = client.UserSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `autoAssignToSelf` | `bool` | Yes | Whether to auto-assign newly created issues to the current user by default. |
| `calendarHash` | `str` | No | A unique hash for the user, used to construct secure calendar subscription URLs. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `feedLastSeenTime` | `Any` | No | The user's last seen time for the pulse feed. |
| `feedSummarySchedule` | `str` | No | The user's preferred schedule for receiving feed summary digests. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `pullRequestMergeStrategyPreference` | `str` | No | [Internal] The user's preferred merge method for pull requests. |
| `showFullUserNames` | `bool` | Yes | Whether to show full user names instead of display names. |
| `subscribedToChangelog` | `bool` | Yes | Whether this user is subscribed to receive changelog emails about Linear product updates. |
| `subscribedToDPA` | `bool` | Yes | Whether this user is subscribed to receive Data Processing Agreement (DPA) related emails. |
| `subscribedToInviteAccepted` | `bool` | Yes | Whether this user is subscribed to receive email notifications when their workspace invitations are accepted. |
| `subscribedToPrivacyLegalUpdates` | `bool` | Yes | Whether this user is subscribed to receive emails about privacy policy and legal updates. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `dict` | No | The user that these settings belong to. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.UserSetting().create({
    "category": "example_category",  # Any
    "channel": "example_channel",  # Any
    "subscribe": True,  # bool
    "autoAssignToSelf": True,  # bool
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "showFullUserNames": True,  # bool
    "subscribedToChangelog": True,  # bool
    "subscribedToDPA": True,  # bool
    "subscribedToInviteAccepted": True,  # bool
    "subscribedToPrivacyLegalUpdates": True,  # bool
    "updatedAt": "example_updatedAt",  # Any
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.UserSetting().load({"id": "user_setting_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.UserSetting().update({
    "id": "user_setting_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserSettingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ViewPreferenceEntity

```python
view_preference = client.ViewPreference()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `type` | `str` | Yes | The type of view preferences: "organization" for workspace-wide defaults or "user" for personal overrides. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |
| `viewType` | `str` | Yes | The type of view these preferences apply to, such as board, cycle, project, customView, myIssues, etc. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ViewPreference().create({
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "type": "example_type",  # str
    "updatedAt": "example_updatedAt",  # Any
    "viewType": "example_viewType",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ViewPreference().load({"view_type": "view_type"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ViewPreference().remove({"id": "id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ViewPreference().update({
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ViewPreferenceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WebhookEntity

```python
webhook = client.Webhook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allPublicTeams` | `bool` | Yes | Whether the webhook receives events from all public (non-private) teams in the organization, including teams created after the webhook was set up. |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `creator` | `dict` | No | The user who created the webhook. |
| `enabled` | `bool` | Yes | Whether the webhook is enabled. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `label` | `str` | No | A human-readable label for the webhook, used for identification in the UI. |
| `resourceTypes` | `str` | Yes | The resource types this webhook is subscribed to (e.g., 'Issue', 'Comment', 'Project', 'Cycle'). |
| `secret` | `str` | No | A secret token used to sign webhook payloads with HMAC-SHA256, allowing the recipient to verify that the payload originated from Linear and was not tampered with. |
| `team` | `dict` | No | The single team that the webhook is scoped to. |
| `teamIds` | `str` | No | [INTERNAL] An array of team IDs that the webhook is subscribed to. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `str` | No | The destination URL where webhook payloads will be sent via HTTP POST. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Webhook().create({
    "allPublicTeams": True,  # bool
    "createdAt": "example_createdAt",  # Any
    "enabled": True,  # bool
    "id": "example_id",  # str
    "resourceTypes": "example_resourceTypes",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Webhook().list()
for webhook in results:
    print(webhook)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Webhook().load({"id": "webhook_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Webhook().remove({"id": "webhook_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Webhook().update({
    "id": "webhook_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhookEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WebhookFailureEventEntity

```python
webhook_failure_event = client.WebhookFailureEvent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `executionId` | `str` | Yes | A stable identifier for the webhook delivery attempt. |
| `httpStatus` | `float` | No | The HTTP status code returned by the webhook recipient. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `responseOrError` | `str` | No | The HTTP response body returned by the recipient, or the error message if the request failed before receiving a response. |
| `url` | `str` | Yes | The URL that the webhook was trying to push to. |
| `webhook` | `dict` | No | The webhook that this failure event is associated with. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.WebhookFailureEvent().list()
for webhook_failure_event in results:
    print(webhook_failure_event)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhookFailureEventEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkflowStateEntity

```python
workflow_state = client.WorkflowState()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `Any` | No | The time at which the entity was archived. |
| `color` | `str` | Yes | The state's UI color as a HEX string. |
| `createdAt` | `Any` | Yes | The time at which the entity was created. |
| `description` | `str` | No | Description of the state. |
| `id` | `str` | Yes | The unique identifier of the entity. |
| `inheritedFrom` | `dict` | No | The parent team's workflow state that this state was inherited from. |
| `name` | `str` | Yes | The state's human-readable name (e.g., 'In Progress', 'Done', 'Backlog'). |
| `position` | `float` | Yes | The position of the state in the team's workflow. |
| `team` | `dict` | No | The team that this workflow state belongs to. |
| `type` | `str` | Yes | The type of the state. |
| `updatedAt` | `Any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.WorkflowState().create({
    "color": "example_color",  # str
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "name": "example_name",  # str
    "position": 1,  # float
    "type": "example_type",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.WorkflowState().list()
for workflow_state in results:
    print(workflow_state)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.WorkflowState().load({"id": "workflow_state_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.WorkflowState().update({
    "id": "workflow_state_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkflowStateEntity` instance with the same options.

#### `get_name() -> str`

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

```python
client = LinearSDK({
    "feature": {
        "debug": {"active": True},
        "idempotency": {"active": True},
        "metrics": {"active": True},
        "paging": {"active": True},
        "ratelimit": {"active": True},
        "retry": {"active": True},
        "test": {"active": True},
        "timeout": {"active": True},
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

