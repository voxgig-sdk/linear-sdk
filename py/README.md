# Linear Python SDK



The Python SDK for the Linear API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.AccessKeyRelease()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/linear-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from linear_sdk import LinearSDK

client = LinearSDK({
    "apikey": os.environ.get("LINEAR_APIKEY"),
})
```

### 2. List accesskeyrelease records

`list()` returns a `list` of records (each a `dict`) and raises on
error — iterate it directly.

```python
try:
    accesskeyreleases = client.AccessKeyRelease().list()
    for accesskeyrelease in accesskeyreleases:
        print(accesskeyrelease)
except Exception as err:
    print(f"list failed: {err}")
```

### 3. Load an accesskeyrelease

`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    accesskeyrelease = client.AccessKeyRelease().load({"id": "example_id"})
    print(accesskeyrelease)
except Exception as err:
    print(f"load failed: {err}")
```

### 4. Create, update, and remove

```python
# Create — returns the ENTITY (call data_get() for the record)
created = client.AccessKeyRelease().create({"createdAt": "example_createdAt", "id": "example_id", "name": "example_name", "url": "example_url"})

```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    agentactivitys = client.AgentActivity().list()
    print(agentactivitys)
except Exception as err:
    print(f"list failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = LinearSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
agentactivity = client.AgentActivity().list()
# agentactivity contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = LinearSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
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
cd py && pytest test/
```


## Reference

### LinearSDK

```python
from linear_sdk import LinearSDK

client = LinearSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = LinearSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### LinearSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
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
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

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

Create an instance: `access_key_release = client.AccessKeyRelease()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the release was archived. |
| `commitSha` | `str` | The Git commit SHA associated with the release. |
| `completedAt` | `Any` | The time at which the release was completed. |
| `createdAt` | `Any` | The time at which the release was created. |
| `id` | `str` | The unique identifier of the release. |
| `name` | `str` | The name of the release. |
| `url` | `str` | The URL to the release page in the Linear app. |
| `version` | `str` | The version identifier for this release. |

#### Example: Load

```python
access_key_release = client.AccessKeyRelease().load({"id": "access_key_release_id"})
```

#### Example: List

```python
access_key_releases = client.AccessKeyRelease().list()
```

#### Example: Create

```python
access_key_release = client.AccessKeyRelease().create({
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "name": "example_name",  # str
    "url": "example_url",  # str
})
```


### AccessKeyReleasePipeline

Create an instance: `access_key_release_pipeline = client.AccessKeyReleasePipeline()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` | The unique identifier of the release pipeline. |
| `includePathPatterns` | `str` | Glob patterns used to filter commits by changed file path. |

#### Example: Load

```python
access_key_release_pipeline = client.AccessKeyReleasePipeline().load({"id": "access_key_release_pipeline_id"})
```


### AgentActivity

Create an instance: `agent_activity = client.AgentActivity()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agentSession` | `dict` | The agent session this activity belongs to. |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `contextualMetadata` | `Any` | [Internal] Metadata about user-provided contextual information for this agent activity. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `ephemeral` | `bool` | Whether the activity is ephemeral, and should disappear after the next agent activity. |
| `executionSkippedReason` | `str` | [Internal] The reason this activity was persisted without being sent to the agent runtime. |
| `id` | `str` | The unique identifier of the entity. |
| `queued` | `bool` | [Internal] Whether this activity is queued for later processing. |
| `sentAt` | `Any` | [Internal] The time at which the prompt actually entered the conversation. |
| `signal` | `str` | An optional modifier that provides additional instructions on how the activity should be interpreted. |
| `signalMetadata` | `Any` | Metadata about this agent activity's signal. |
| `sourceComment` | `dict` | The source comment this activity is linked to. |
| `sourceMetadata` | `Any` | Metadata about the external source that created this agent activity. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |
| `user` | `dict` | The user who created this agent activity. |

#### Example: Load

```python
agent_activity = client.AgentActivity().load({"id": "agent_activity_id"})
```

#### Example: List

```python
agent_activitys = client.AgentActivity().list()
```

#### Example: Create

```python
agent_activity = client.AgentActivity().create({
    "createdAt": "example_createdAt",  # Any
    "ephemeral": True,  # bool
    "id": "example_id",  # str
    "queued": True,  # bool
    "updatedAt": "example_updatedAt",  # Any
})
```


### AgentSession

Create an instance: `agent_session = client.AgentSession()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `appUser` | `dict` | The agent user that is associated with this agent session. |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `codingHarnessModelLabel` | `str` | [Internal] Compact display label for the coding harness model used by this session, derived from the latest associated sandbox. |
| `comment` | `dict` | The comment this agent session is associated with. |
| `context` | `Any` | The entity contexts this session is related to, such as issues or projects referenced in direct chat sessions. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `creator` | `dict` | The human user responsible for the agent session. |
| `dismissedAt` | `Any` | The time a user dismissed this agent session. |
| `dismissedBy` | `dict` | The user who dismissed the agent session. |
| `endedAt` | `Any` | The time the agent session completed. |
| `id` | `str` | The unique identifier of the entity. |
| `issue` | `dict` | The issue this agent session is associated with. |
| `modelSelection` | `Any` | [Internal] How Adaptive selected the model route used by this coding session. |
| `plan` | `Any` | A dynamically updated plan describing the agent's execution strategy, including steps to be taken and their current status. |
| `pullRequest` | `dict` | The pull request this agent session is anchored to, when started from a pull request. |
| `slugId` | `str` | The agent session's unique URL slug. |
| `sourceComment` | `dict` | The comment that this agent session was spawned from, if from a different thread. |
| `sourceMetadata` | `Any` | Metadata about the external source that created this agent session. |
| `startedAt` | `Any` | The time the agent session transitioned to active status and began work. |
| `status` | `str` | The current status of the agent session, such as pending, active, awaiting input, complete, error, or stale. |
| `summary` | `str` | The session title, generated automatically or set by the owning OAuth application. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |
| `url` | `str` | The URL to the agent session page in the Linear app. |

#### Example: Load

```python
agent_session = client.AgentSession().load({"id": "agent_session_id"})
```

#### Example: List

```python
agent_sessions = client.AgentSession().list()
```

#### Example: Create

```python
agent_session = client.AgentSession().create({
    "context": "example_context",  # Any
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "slugId": "example_slugId",  # str
    "status": "example_status",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```


### AgentSkill

Create an instance: `agent_skill = client.AgentSkill()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `body` | `str` | The skill instructions in markdown format. |
| `color` | `str` | The skill's color. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `creator` | `dict` | The user who created the skill. |
| `description` | `str` | The skill's description. |
| `icon` | `str` | The icon of the skill. |
| `id` | `str` | The unique identifier of the entity. |
| `inheritedFrom` | `dict` | The parent-team skill this skill was inherited from. |
| `lastUpdatedBy` | `dict` | The user who last updated the skill. |
| `lastUsedAt` | `Any` | The time the skill was last used by anyone in the workspace. |
| `owner` | `dict` | The user who owns the skill. |
| `recentUsageCount` | `float` | The number of times the skill was used by anyone in the workspace in the last 30 days. |
| `shared` | `bool` | Whether the skill is shared with everyone in the workspace. |
| `slugId` | `str` | The skill's unique URL slug. |
| `teamId` | `str` | The identifier of the team this skill is shared with. |
| `title` | `str` | The skill's title. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```python
agent_skill = client.AgentSkill().load({"id": "agent_skill_id"})
```

#### Example: List

```python
agent_skills = client.AgentSkill().list()
```

#### Example: Create

```python
agent_skill = client.AgentSkill().create({
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


### Application

Create an instance: `application = client.Application()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `clientId` | `str` | OAuth application's client ID. |
| `description` | `str` | Information about the application. |
| `developer` | `str` | Name of the developer. |
| `developerUrl` | `str` | URL of the developer's website, homepage, or documentation. |
| `id` | `str` | OAuth application's ID. |
| `imageUrl` | `str` | Image of the application. |
| `name` | `str` | Application name. |

#### Example: Load

```python
application = client.Application().load({"client_id": "client_id"})
```


### Attachment

Create an instance: `attachment = client.Attachment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `bodyData` | `str` | The body data of the attachment, if any. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `creator` | `dict` | The creator of the attachment. |
| `externalUserCreator` | `dict` | The non-Linear user who created the attachment. |
| `groupBySource` | `bool` | Whether attachments from the same source application should be visually grouped together in the Linear issue detail view. |
| `id` | `str` | The unique identifier of the entity. |
| `issue` | `dict` | The issue this attachment belongs to. |
| `metadata` | `Any` | Integration-specific metadata for this attachment. |
| `originalIssue` | `dict` | The issue this attachment was originally created on. |
| `source` | `Any` | Information about the source which created the attachment. |
| `sourceType` | `str` | The source type of the attachment, derived from the source metadata. |
| `subtitle` | `str` | Content for the subtitle line in the Linear attachment widget. |
| `title` | `str` | Content for the title line in the Linear attachment widget. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |
| `url` | `str` | The URL of the external resource this attachment links to. |

#### Example: Load

```python
attachment = client.Attachment().load({"id": "attachment_id"})
```

#### Example: List

```python
attachments = client.Attachment().list()
```

#### Example: Create

```python
attachment = client.Attachment().create({
    "createdAt": "example_createdAt",  # Any
    "groupBySource": True,  # bool
    "id": "example_id",  # str
    "metadata": "example_metadata",  # Any
    "title": "example_title",  # str
    "updatedAt": "example_updatedAt",  # Any
    "url": "example_url",  # str
})
```


### AuditEntry

Create an instance: `audit_entry = client.AuditEntry()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `dict` | The user that caused the audit entry to be created. |
| `actorId` | `str` | The ID of the user that caused the audit entry to be created. |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `countryCode` | `str` | The ISO 3166-1 alpha-2 country code derived from the request IP address. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `id` | `str` | The unique identifier of the entity. |
| `ip` | `str` | The IP address of the actor at the time the audited action was performed. |
| `metadata` | `Any` | Additional metadata related to the audit entry. |
| `organization` | `dict` | The workspace the audit log belongs to. |
| `requestInformation` | `Any` | Additional information related to the request which performed the action. |
| `type` | `str` | The type of audited action (e.g., user authentication, permission change, data export, setting modification). |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |

#### Example: List

```python
audit_entrys = client.AuditEntry().list()
```


### AuditEntryType

Create an instance: `audit_entry_type = client.AuditEntryType()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `str` | Description of the audit entry type. |
| `type` | `str` | The audit entry type. |

#### Example: List

```python
audit_entry_types = client.AuditEntryType().list()
```


### AuthResolverResponse

Create an instance: `auth_resolver_response = client.AuthResolverResponse()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowDomainAccess` | `bool` | Should the signup flow allow access for the domain. |
| `email` | `str` | Email for the authenticated account. |
| `id` | `str` | User account ID. |
| `lastUsedOrganizationId` | `str` | ID of the organization last accessed by the user. |
| `service` | `str` | The authentication service used for the current session (e.g., google, email, saml). |

#### Example: Load

```python
auth_resolver_response = client.AuthResolverResponse().load({"id": "auth_resolver_response_id"})
```

#### Example: Create

```python
auth_resolver_response = client.AuthResolverResponse().create({
    "email": "example_email",  # str
    "id": "example_id",  # str
})
```


### AuthenticationSessionResponse

Create an instance: `authentication_session_response = client.AuthenticationSessionResponse()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `browserType` | `str` | Used web browser. |
| `client` | `str` | Client used for the session |
| `countryCodes` | `str` | Country codes of all seen locations. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `detailedName` | `str` | Detailed name of the session including version information, derived from the user agent. |
| `id` | `str` |  |
| `ip` | `str` | IP address. |
| `isCurrentSession` | `bool` | Whether this session is the one used to make the current API request. |
| `lastActiveAt` | `Any` | When was the session last seen |
| `location` | `str` | Human readable location |
| `locationCity` | `str` | Location city name. |
| `locationCountry` | `str` | Location country name. |
| `locationCountryCode` | `str` | Location country code. |
| `locationRegionCode` | `str` | Location region code. |
| `name` | `str` | Name of the session, derived from the client and operating system |
| `operatingSystem` | `str` | Operating system used for the session |
| `service` | `str` | Service used for logging in. |
| `type` | `str` | Type of application used to authenticate. |
| `updatedAt` | `Any` | Date when the session was last updated. |
| `userAgent` | `str` | Session's user-agent. |

#### Example: List

```python
authentication_session_responses = client.AuthenticationSessionResponse().list()
```


### Comment

Create an instance: `comment = client.Comment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agentSession` | `dict` | Agent session associated with this comment. |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `body` | `str` | The comment content in markdown format. |
| `bodyData` | `str` | [Internal] The comment content as a ProseMirror document. |
| `botActor` | `dict` | The bot that created the comment. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `documentContent` | `dict` | The document content that the comment is associated with. |
| `documentContentId` | `str` | The ID of the document content that the comment is associated with. |
| `editedAt` | `Any` | The time the comment was last edited by its author. |
| `externalThread` | `dict` | The external thread that the comment is synced with. |
| `externalUser` | `dict` | The external user who wrote the comment, when the comment was created through an integration such as Slack or Intercom. |
| `hideInLinear` | `bool` | [Internal] Whether the comment should be hidden from Linear clients. |
| `id` | `str` | The unique identifier of the entity. |
| `initiative` | `dict` | The initiative that the comment is associated with. |
| `initiativeId` | `str` | The ID of the initiative that the comment is associated with. |
| `initiativeUpdate` | `dict` | The initiative update that the comment is associated with. |
| `initiativeUpdateId` | `str` | The ID of the initiative update that the comment is associated with. |
| `isArtificialAgentSessionRoot` | `bool` | [Internal] Whether the comment is an artificial placeholder for an agent session thread created without a comment mention. |
| `issue` | `dict` | The issue that the comment is associated with. |
| `issueId` | `str` | The ID of the issue that the comment is associated with. |
| `onBehalfOf` | `dict` | [Internal] The user on whose behalf the comment was created, e.g. |
| `parent` | `dict` | The parent comment under which the current comment is nested. |
| `parentId` | `str` | The ID of the parent comment under which the current comment is nested. |
| `post` | `dict` | The post that the comment is associated with. |
| `project` | `dict` | The project that the comment is associated with. |
| `projectId` | `str` | The ID of the project that the comment is associated with. |
| `projectUpdate` | `dict` | The project update that the comment is associated with. |
| `projectUpdateId` | `str` | The ID of the project update that the comment is associated with. |
| `quotedText` | `str` | The text that this comment references, used for inline comments on documents or issue descriptions. |
| `reactionData` | `Any` | Emoji reaction summary for this comment, grouped by emoji type. |
| `resolvedAt` | `Any` | The time when the comment thread was resolved. |
| `resolvingComment` | `dict` | The child comment that resolved this thread. |
| `resolvingCommentId` | `str` | The ID of the child comment that resolved this thread. |
| `resolvingUser` | `dict` | The user that resolved the comment thread. |
| `threadSummary` | `Any` | [Internal] An AI-generated summary of the comment thread. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |
| `url` | `str` | Comment's URL. |
| `user` | `dict` | The user who wrote the comment. |

#### Example: Load

```python
comment = client.Comment().load({"id": "comment_id"})
```

#### Example: List

```python
comments = client.Comment().list()
```

#### Example: Create

```python
comment = client.Comment().create({
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


### CreateOrJoinOrganizationResponse

Create an instance: `create_or_join_organization_response = client.CreateOrJoinOrganizationResponse()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `organization` | `dict` | The workspace that was created or joined. |
| `user` | `dict` | The user who created or joined the workspace. |

#### Example: Create

```python
create_or_join_organization_response = client.CreateOrJoinOrganizationResponse().create({
})
```


### CustomView

Create an instance: `custom_view = client.CustomView()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `color` | `str` | The hex color code of the custom view icon. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `creator` | `dict` | The user who originally created the custom view. |
| `description` | `str` | The description of the custom view. |
| `facet` | `dict` | [INTERNAL] The facet that links this custom view to its parent entity (project, initiative, team page, etc.). |
| `feedItemFilterData` | `Any` | The filter applied to feed items in the custom view. |
| `filterData` | `Any` | The structured filter applied to issues in the custom view. |
| `icon` | `str` | The icon of the custom view. |
| `id` | `str` | The unique identifier of the entity. |
| `initiativeFilterData` | `Any` | The filter applied to initiatives in the custom view. |
| `modelName` | `str` | The entity type this view displays. |
| `name` | `str` | The name of the custom view, displayed in the sidebar and navigation. |
| `organization` | `dict` | The workspace of the custom view. |
| `organizationViewPreferences` | `dict` | The workspace-level default view preferences for this custom view, if any have been set. |
| `owner` | `dict` | The user who owns the custom view. |
| `projectFilterData` | `Any` | The filter applied to projects in the custom view. |
| `shared` | `bool` | Whether the custom view is shared with everyone in the organization. |
| `slugId` | `str` | The custom view's unique URL slug, used to construct human-readable URLs. |
| `team` | `dict` | The team that the custom view is scoped to. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |
| `updatedBy` | `dict` | The user who last updated the custom view. |
| `userViewPreferences` | `dict` | The current user's personal view preferences for this custom view, if they have set any. |

#### Example: Load

```python
custom_view = client.CustomView().load({"id": "custom_view_id"})
```

#### Example: List

```python
custom_views = client.CustomView().list()
```

#### Example: Create

```python
custom_view = client.CustomView().create({
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


### Customer

Create an instance: `customer = client.Customer()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approximateNeedCount` | `float` | The approximate number of distinct requests associated with this customer, deduplicated per issue or project. |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `domains` | `str` | The email domains associated with this customer (e.g., 'acme.com'). |
| `externalIds` | `str` | Identifiers for this customer in external systems (e.g., CRM IDs from Intercom, Salesforce, or HubSpot). |
| `id` | `str` | The unique identifier of the entity. |
| `integration` | `dict` | The integration that manages this customer's data (e.g., Intercom, Salesforce). |
| `logoUrl` | `str` | URL of the customer's logo image. |
| `mainSourceId` | `str` | The primary external source ID when a customer has data from multiple external systems. |
| `name` | `str` | The display name of the customer organization. |
| `owner` | `dict` | The workspace member assigned as the owner of this customer. |
| `revenue` | `int` | The annual revenue generated by this customer. |
| `size` | `float` | The number of employees or seats at the customer organization. |
| `slackChannelId` | `str` | The ID of the Slack channel linked to this customer for communication. |
| `slugId` | `str` | A unique, human-readable URL slug for the customer. |
| `status` | `dict` | The current lifecycle status of the customer. |
| `tier` | `dict` | The tier or segment assigned to this customer for prioritization (e.g., Enterprise, Pro, Free). |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |
| `url` | `str` | The URL of the customer's page in the Linear application. |

#### Example: Load

```python
customer = client.Customer().load({"id": "customer_id"})
```

#### Example: List

```python
customers = client.Customer().list()
```

#### Example: Create

```python
customer = client.Customer().create({
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


### CustomerNeed

Create an instance: `customer_need = client.CustomerNeed()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `attachment` | `dict` | The issue attachment linked to this need. |
| `body` | `str` | The body content of the need in Markdown format. |
| `bodyData` | `str` | [Internal] The body content of the need as a Prosemirror document JSON string. |
| `comment` | `dict` | An optional comment providing additional context for this need. |
| `content` | `str` | The effective Markdown content shown for this customer need. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `creator` | `dict` | The user who manually created this customer need. |
| `customer` | `dict` | The customer organization this need belongs to. |
| `id` | `str` | The unique identifier of the entity. |
| `issue` | `dict` | The issue this need is linked to. |
| `originalIssue` | `dict` | The issue this customer need was originally created on, before being moved to a different issue or project. |
| `priority` | `float` | Whether the customer need is important or not. |
| `project` | `dict` | The project this need is linked to. |
| `projectAttachment` | `dict` | The project attachment linked to this need. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |
| `url` | `str` | The URL of the source attachment linked to this need, if any. |

#### Example: Load

```python
customer_need = client.CustomerNeed().load({"id": "customer_need_id"})
```

#### Example: List

```python
customer_needs = client.CustomerNeed().list()
```

#### Example: Create

```python
customer_need = client.CustomerNeed().create({
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "priority": 1,  # float
    "updatedAt": "example_updatedAt",  # Any
})
```


### CustomerStatus

Create an instance: `customer_status = client.CustomerStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `color` | `str` | The color of the status indicator in the UI, as a HEX string (e.g., '#ff0000'). |
| `createdAt` | `Any` | The time at which the entity was created. |
| `description` | `str` | An optional description explaining what this status represents in the customer lifecycle. |
| `displayName` | `str` | The user-facing display name of the status shown in the UI. |
| `id` | `str` | The unique identifier of the entity. |
| `name` | `str` | The internal name of the status. |
| `position` | `float` | The sort position of the status in the workspace's customer lifecycle flow. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```python
customer_status = client.CustomerStatus().load({"id": "customer_status_id"})
```

#### Example: List

```python
customer_statuss = client.CustomerStatus().list()
```

#### Example: Create

```python
customer_status = client.CustomerStatus().create({
    "color": "example_color",  # str
    "createdAt": "example_createdAt",  # Any
    "displayName": "example_displayName",  # str
    "id": "example_id",  # str
    "name": "example_name",  # str
    "position": 1,  # float
    "updatedAt": "example_updatedAt",  # Any
})
```


### CustomerTier

Create an instance: `customer_tier = client.CustomerTier()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `color` | `str` | The color of the tier indicator in the UI, as a HEX string (e.g., '#ff0000'). |
| `createdAt` | `Any` | The time at which the entity was created. |
| `description` | `str` | An optional description explaining what this tier represents and its intended use for customer segmentation. |
| `displayName` | `str` | The user-facing display name of the tier shown in the UI. |
| `id` | `str` | The unique identifier of the entity. |
| `name` | `str` | The internal name of the tier. |
| `position` | `float` | The sort position of the tier in the workspace's customer tier ordering. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```python
customer_tier = client.CustomerTier().load({"id": "customer_tier_id"})
```

#### Example: List

```python
customer_tiers = client.CustomerTier().list()
```

#### Example: Create

```python
customer_tier = client.CustomerTier().create({
    "color": "example_color",  # str
    "createdAt": "example_createdAt",  # Any
    "displayName": "example_displayName",  # str
    "id": "example_id",  # str
    "name": "example_name",  # str
    "position": 1,  # float
    "updatedAt": "example_updatedAt",  # Any
})
```


### Cycle

Create an instance: `cycle = client.Cycle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `autoArchivedAt` | `Any` | The time at which the cycle was automatically archived by the auto-pruning process. |
| `completedAt` | `Any` | The completion time of the cycle. |
| `completedIssueCountHistory` | `float` | The number of completed issues in the cycle after each day. |
| `completedScopeHistory` | `float` | The number of completed estimation points after each day. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `currentProgress` | `Any` | [Internal] The current progress snapshot of the cycle, broken down by issue status categories. |
| `description` | `str` | The description of the cycle. |
| `endsAt` | `Any` | The end date and time of the cycle. |
| `id` | `str` | The unique identifier of the entity. |
| `inProgressScopeHistory` | `float` | The number of in-progress estimation points after each day. |
| `inheritedFrom` | `dict` | The parent cycle this cycle was inherited from. |
| `isActive` | `bool` | Whether the cycle is currently active. |
| `isFuture` | `bool` | Whether the cycle has not yet started. |
| `isNext` | `bool` | Whether this cycle is the next upcoming (not yet started) cycle for the team. |
| `isPast` | `bool` | Whether the cycle's end date has passed. |
| `isPrevious` | `bool` | Whether this cycle is the most recently completed cycle for the team. |
| `issueCountHistory` | `float` | The total number of issues in the cycle after each day. |
| `name` | `str` | The custom name of the cycle. |
| `number` | `float` | The auto-incrementing number of the cycle, unique within its team. |
| `progress` | `float` | The overall progress of the cycle as a number between 0 and 1. |
| `progressHistory` | `Any` | [Internal] The detailed progress history of the cycle, including per-status breakdowns over time. |
| `scopeHistory` | `float` | The total number of estimation points (scope) in the cycle after each day. |
| `startsAt` | `Any` | The start date and time of the cycle. |
| `team` | `dict` | The team that the cycle belongs to. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```python
cycle = client.Cycle().load({"id": "cycle_id"})
```

#### Example: List

```python
cycles = client.Cycle().list()
```

#### Example: Create

```python
cycle = client.Cycle().create({
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


### Diff

Create an instance: `diff = client.Diff()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additions` | `float` | [Internal] The total number of added lines across the diff. |
| `agentSession` | `dict` | The agent session the diff belongs to. |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `contentHash` | `str` | [Internal] The opaque content hash identifying the diff's content in code.storage. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `creator` | `dict` | The user responsible for the diff. |
| `deletions` | `float` | [Internal] The total number of deleted lines across the diff. |
| `fileCount` | `float` | [Internal] The number of changed files in the diff. |
| `id` | `str` | The unique identifier of the entity. |
| `organization` | `dict` | The workspace the diff belongs to. |
| `pullRequest` | `dict` | The pull request the diff was promoted to when opened for review. |
| `slugId` | `str` | [Internal] The diff's unique URL slug. |
| `truncated` | `bool` | [Internal] Whether oversized files were omitted when the diff was computed. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```python
diff = client.Diff().load({"id": "diff_id"})
```


### Document

Create an instance: `document = client.Document()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `color` | `str` | The hex color of the document icon. |
| `content` | `str` | The document's content in markdown format. |
| `contentState` | `str` | [Internal] The document's content as a base64-encoded Yjs state update. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `creator` | `dict` | The user who created the document. |
| `cycle` | `dict` | [Internal] The cycle that the document is associated with. |
| `documentContentId` | `str` | The ID of the document content associated with the document. |
| `hiddenAt` | `Any` | The time at which the document was hidden from the default view. |
| `icon` | `str` | The icon of the document, either a decorative icon type or an emoji string. |
| `id` | `str` | The unique identifier of the entity. |
| `initiative` | `dict` | The initiative that the document is associated with. |
| `issue` | `dict` | The issue that the document is associated with. |
| `lastAppliedTemplate` | `dict` | The last template that was applied to this document. |
| `owner` | `dict` | The owner of the document. |
| `project` | `dict` | The project that the document is associated with. |
| `release` | `dict` | The release that the document is associated with. |
| `slugId` | `str` | The document's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `float` | The sort order of the document in its parent entity's resources list. |
| `summary` | `str` | [Internal] A one-sentence AI-generated summary of the document content. |
| `team` | `dict` | [Internal] The team that the document is associated with. |
| `title` | `str` | The title of the document. |
| `trashed` | `bool` | A flag that indicates whether the document is in the trash bin. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |
| `updatedBy` | `dict` | The user who last updated the document. |
| `url` | `str` | The canonical url for the document. |

#### Example: Load

```python
document = client.Document().load({"id": "document_id"})
```

#### Example: List

```python
documents = client.Document().list()
```

#### Example: Create

```python
document = client.Document().create({
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "slugId": "example_slugId",  # str
    "sortOrder": 1,  # float
    "title": "example_title",  # str
    "updatedAt": "example_updatedAt",  # Any
    "url": "example_url",  # str
})
```


### DocumentSearchResult

Create an instance: `document_search_result = client.DocumentSearchResult()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `color` | `str` | The hex color of the document icon. |
| `content` | `str` | The document's content in markdown format. |
| `contentState` | `str` | [Internal] The document's content as a base64-encoded Yjs state update. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `creator` | `dict` | The user who created the document. |
| `cycle` | `dict` | [Internal] The cycle that the document is associated with. |
| `documentContentId` | `str` | The ID of the document content associated with the document. |
| `hiddenAt` | `Any` | The time at which the document was hidden from the default view. |
| `icon` | `str` | The icon of the document, either a decorative icon type or an emoji string. |
| `id` | `str` | The unique identifier of the entity. |
| `initiative` | `dict` | The initiative that the document is associated with. |
| `issue` | `dict` | The issue that the document is associated with. |
| `lastAppliedTemplate` | `dict` | The last template that was applied to this document. |
| `metadata` | `Any` | Metadata related to search result. |
| `owner` | `dict` | The owner of the document. |
| `project` | `dict` | The project that the document is associated with. |
| `release` | `dict` | The release that the document is associated with. |
| `slugId` | `str` | The document's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `float` | The sort order of the document in its parent entity's resources list. |
| `summary` | `str` | [Internal] A one-sentence AI-generated summary of the document content. |
| `team` | `dict` | [Internal] The team that the document is associated with. |
| `title` | `str` | The title of the document. |
| `trashed` | `bool` | A flag that indicates whether the document is in the trash bin. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |
| `updatedBy` | `dict` | The user who last updated the document. |
| `url` | `str` | The canonical url for the document. |

#### Example: List

```python
document_search_results = client.DocumentSearchResult().list({"term": "example"})
```


### EmailIntakeAddress

Create an instance: `email_intake_address = client.EmailIntakeAddress()`

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
| `address` | `str` | The unique local part (before the @) of the intake email address, used to route incoming emails to the correct intake handler. |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `creator` | `dict` | The user who created the email intake address. |
| `customerRequestsEnabled` | `bool` | Whether issues created from emails sent to this address are automatically converted into customer requests, linking the sender as a customer contact. |
| `enabled` | `bool` | Whether the email address is enabled. |
| `forwardingEmailAddress` | `str` | The email address used to forward emails to the intake address. |
| `id` | `str` | The unique identifier of the entity. |
| `issueCanceledAutoReply` | `str` | The auto-reply message for issue canceled. |
| `issueCanceledAutoReplyEnabled` | `bool` | Whether the auto-reply for issue canceled is enabled. |
| `issueCompletedAutoReply` | `str` | The auto-reply message for issue completed. |
| `issueCompletedAutoReplyEnabled` | `bool` | Whether the auto-reply for issue completed is enabled. |
| `issueCreatedAutoReply` | `str` | The auto-reply message for issue created. |
| `issueCreatedAutoReplyEnabled` | `bool` | Whether the auto-reply for issue created is enabled. |
| `lastUsedAt` | `Any` | The last time an inbound email was successfully ingested for this address. |
| `organization` | `dict` | The workspace that the email address is associated with. |
| `reopenOnReply` | `bool` | Whether to reopen completed or canceled issues when a substantive email reply is received. |
| `repliesEnabled` | `bool` | Whether email replies are enabled. |
| `senderName` | `str` | The name to be used for outgoing emails. |
| `sesDomainIdentity` | `dict` | The SES domain identity that the email address is associated with. |
| `team` | `dict` | The team that the email address is associated with. |
| `template` | `dict` | The template that the email address is associated with. |
| `type` | `str` | The type of the email address. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |
| `useUserNamesInReplies` | `bool` | Whether the commenter's name is included in the email replies. |

#### Example: Load

```python
email_intake_address = client.EmailIntakeAddress().load({"id": "email_intake_address_id"})
```

#### Example: Create

```python
email_intake_address = client.EmailIntakeAddress().create({
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


### EmailUserAccountAuthChallengeResponse

Create an instance: `email_user_account_auth_challenge_response = client.EmailUserAccountAuthChallengeResponse()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authType` | `str` | Supported challenge for this user account. |
| `success` | `bool` | Whether the operation was successful. |

#### Example: Create

```python
email_user_account_auth_challenge_response = client.EmailUserAccountAuthChallengeResponse().create({
    "authType": "example_authType",  # str
    "success": True,  # bool
})
```


### Emoji

Create an instance: `emoji = client.Emoji()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `creator` | `dict` | The user who created the emoji. |
| `id` | `str` | The unique identifier of the entity. |
| `name` | `str` | The unique name of the custom emoji within the workspace. |
| `organization` | `dict` | The workspace that the emoji belongs to. |
| `source` | `str` | The source of the emoji, indicating how it was created (e.g., uploaded by a user or imported). |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |
| `url` | `str` | The URL of the uploaded image for this custom emoji. |

#### Example: Load

```python
emoji = client.Emoji().load({"id": "emoji_id"})
```

#### Example: List

```python
emojis = client.Emoji().list()
```

#### Example: Create

```python
emoji = client.Emoji().create({
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "name": "example_name",  # str
    "source": "example_source",  # str
    "updatedAt": "example_updatedAt",  # Any
    "url": "example_url",  # str
})
```


### EntityExternalLink

Create an instance: `entity_external_link = client.EntityExternalLink()`

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
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `creator` | `dict` | The user who created the link. |
| `id` | `str` | The unique identifier of the entity. |
| `initiative` | `dict` | The initiative that the link is associated with. |
| `label` | `str` | The link's label. |
| `project` | `dict` | The project that the link is associated with. |
| `sortOrder` | `float` | The sort order of this link within the parent entity's resources list. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |
| `url` | `str` | The link's URL. |

#### Example: Load

```python
entity_external_link = client.EntityExternalLink().load({"id": "entity_external_link_id"})
```

#### Example: Create

```python
entity_external_link = client.EntityExternalLink().create({
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "label": "example_label",  # str
    "sortOrder": 1,  # float
    "updatedAt": "example_updatedAt",  # Any
    "url": "example_url",  # str
})
```


### ExternalUser

Create an instance: `external_user = client.ExternalUser()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `avatarUrl` | `str` | A URL to the external user's avatar image. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `displayName` | `str` | The external user's display name. |
| `email` | `str` | The external user's email address. |
| `id` | `str` | The unique identifier of the entity. |
| `lastSeen` | `Any` | The last time the external user was seen interacting with Linear through their external service. |
| `name` | `str` | The external user's full name. |
| `organization` | `dict` | The workspace that the external user belongs to. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```python
external_user = client.ExternalUser().load({"id": "external_user_id"})
```

#### Example: List

```python
external_users = client.ExternalUser().list()
```


### Favorite

Create an instance: `favorite = client.Favorite()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aiConversation` | `dict` | [INTERNAL] The favorited Agent conversation. |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `color` | `str` | [Internal] Returns the color of the favorite's icon. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `customView` | `dict` | The favorited custom view. |
| `customer` | `dict` | The favorited customer. |
| `cycle` | `dict` | The favorited cycle. |
| `dashboard` | `dict` | The favorited dashboard. |
| `detail` | `str` | [Internal] Detail text for favorite's `title` (e.g. |
| `document` | `dict` | The favorited document. |
| `facet` | `dict` | [INTERNAL] The favorited facet. |
| `folderName` | `str` | The name of the folder. |
| `icon` | `str` | [Internal] Name of the favorite's icon. |
| `id` | `str` | The unique identifier of the entity. |
| `initiative` | `dict` | The favorited initiative. |
| `initiativeLabel` | `dict` | [INTERNAL] The favorited initiative label. |
| `initiativeTab` | `str` | The targeted tab of the initiative. |
| `issue` | `dict` | The favorited issue. |
| `label` | `dict` | The favorited label. |
| `liveFolderDefinition` | `Any` | The versioned lazy root and filter represented by this live favorite folder. |
| `liveFolderPreset` | `str` | The predefined live folder represented by this favorite. |
| `owner` | `dict` | The user who owns this favorite. |
| `parent` | `dict` | The parent folder of the favorite. |
| `pipelineTab` | `str` | The targeted tab of the release pipeline. |
| `predefinedViewTeam` | `dict` | The team of the favorited predefined view. |
| `predefinedViewType` | `str` | The type of favorited predefined view (e.g., 'allIssues', 'activeCycle', 'backlog', 'triage'). |
| `project` | `dict` | The favorited project. |
| `projectLabel` | `dict` | The favorited project label. |
| `projectTab` | `str` | The targeted tab of the project. |
| `projectTeam` | `dict` | [DEPRECATED] The favorited team of the project. |
| `pullRequest` | `dict` | The favorited pull request. |
| `release` | `dict` | The favorited release. |
| `releaseNote` | `dict` | The favorited release note. |
| `releasePipeline` | `dict` | The favorited release pipeline. |
| `sortOrder` | `float` | The position of this item in the user's favorites list. |
| `team` | `dict` | The favorited team. |
| `title` | `str` | [Internal] Favorite's title text (name of the favorite'd object or folder). |
| `type` | `str` | The type of entity this favorite references, such as 'issue', 'project', 'cycle', 'customView', 'document', 'folder', etc. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |
| `url` | `str` | URL of the favorited entity. |
| `user` | `dict` | The favorited user. |
| `workflowDefinition` | `dict` | The favorited loop. |

#### Example: Load

```python
favorite = client.Favorite().load({"id": "favorite_id"})
```

#### Example: List

```python
favorites = client.Favorite().list()
```

#### Example: Create

```python
favorite = client.Favorite().create({
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "sortOrder": 1,  # float
    "title": "example_title",  # str
    "type": "example_type",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```


### GitAutomationState

Create an instance: `git_automation_state = client.GitAutomationState()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `event` | `str` | The Git event that triggers this automation rule (e.g., branch created, PR opened for review, or PR merged). |
| `id` | `str` | The unique identifier of the entity. |
| `state` | `dict` | The workflow state that linked issues will be transitioned to when the Git event fires. |
| `targetBranch` | `dict` | The target branch that this automation rule applies to. |
| `team` | `dict` | The team that this automation rule belongs to. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |

#### Example: Create

```python
git_automation_state = client.GitAutomationState().create({
    "createdAt": "example_createdAt",  # Any
    "event": "example_event",  # str
    "id": "example_id",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```


### GitAutomationTargetBranch

Create an instance: `git_automation_target_branch = client.GitAutomationTargetBranch()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `branchPattern` | `str` | The branch name or pattern to match against pull request target branches. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `id` | `str` | The unique identifier of the entity. |
| `isRegex` | `bool` | Whether the branch pattern should be interpreted as a regular expression. |
| `team` | `dict` | The team that this target branch definition belongs to. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |

#### Example: Create

```python
git_automation_target_branch = client.GitAutomationTargetBranch().create({
    "branchPattern": "example_branchPattern",  # str
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "isRegex": True,  # bool
    "updatedAt": "example_updatedAt",  # Any
})
```


### GitHubIntegrationConnectDetail

Create an instance: `git_hub_integration_connect_detail = client.GitHubIntegrationConnectDetail()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `lostRepositoryNames` | `str` | Full names ('owner/repo') of repositories whose existing GitHub Issues sync mappings would become inaccessible if the new GitHub App installation replaces the existing one. |

#### Example: Create

```python
git_hub_integration_connect_detail = client.GitHubIntegrationConnectDetail().create({
})
```


### Initiative

Create an instance: `initiative = client.Initiative()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `canceledAt` | `Any` | [Internal] The time at which the initiative was moved into Canceled status. |
| `color` | `str` | The initiative's color. |
| `completedAt` | `Any` | The time at which the initiative was moved into Completed status. |
| `content` | `str` | The initiative's content in markdown format. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `creator` | `dict` | The user who created the initiative. |
| `description` | `str` | The description of the initiative. |
| `documentContent` | `dict` | The content of the initiative description. |
| `frequencyResolution` | `str` | The resolution of the reminder frequency. |
| `health` | `str` | The overall health of the initiative, derived from the most recent initiative update. |
| `healthUpdatedAt` | `Any` | The time at which the initiative health was last updated, typically when a new initiative update is posted. |
| `icon` | `str` | The icon of the initiative. |
| `id` | `str` | The unique identifier of the entity. |
| `identifier` | `str` | [Internal] The human-readable identifier of the initiative. |
| `integrationsSettings` | `dict` | Settings for all integrations associated with that initiative. |
| `labelIds` | `str` | The IDs of the initiative labels associated with this initiative. |
| `lastUpdate` | `dict` | The most recent status update posted for this initiative. |
| `leadTeam` | `dict` | The team that leads the initiative. |
| `name` | `str` | The name of the initiative. |
| `organization` | `dict` | The workspace of the initiative. |
| `owner` | `dict` | The user who owns the initiative. |
| `parentInitiative` | `dict` | Parent initiative associated with the initiative. |
| `previousIdentifiers` | `str` | [Internal] Identifiers (default and custom) that this initiative has previously held. |
| `priority` | `int` | The priority of the initiative. |
| `prioritySortOrder` | `float` | The sort order of the initiative within the workspace when ordered by priority. |
| `slugId` | `str` | The initiative's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `float` | The sort order of the initiative within the workspace. |
| `startedAt` | `Any` | The time at which the initiative was moved into Active status. |
| `status` | `str` | The lifecycle status of the initiative. |
| `targetDate` | `Any` | The estimated completion date of the initiative. |
| `targetDateResolution` | `str` | The resolution of the initiative's estimated completion date, indicating whether it refers to a specific day, week, month, quarter, or year. |
| `trashed` | `bool` | A flag that indicates whether the initiative is in the trash bin. |
| `updateReminderFrequency` | `float` | The frequency at which to prompt for updates. |
| `updateReminderFrequencyInWeeks` | `float` | The n-weekly frequency at which to prompt for updates. |
| `updateRemindersDay` | `str` | The day at which to prompt for updates. |
| `updateRemindersHour` | `float` | The hour at which to prompt for updates. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |
| `url` | `str` | Initiative URL. |
| `visibility` | `str` | The visibility of the initiative, derived from its lead team. |

#### Example: Load

```python
initiative = client.Initiative().load({"id": "initiative_id"})
```

#### Example: List

```python
initiatives = client.Initiative().list()
```

#### Example: Create

```python
initiative = client.Initiative().create({
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


### InitiativeLabel

Create an instance: `initiative_label = client.InitiativeLabel()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `color` | `str` | The label's color as a HEX string (e.g., '#EB5757'). |
| `createdAt` | `Any` | The time at which the entity was created. |
| `creator` | `dict` | The user who created the label. |
| `description` | `str` | The label's description. |
| `id` | `str` | The unique identifier of the entity. |
| `isGroup` | `bool` | Whether the label is a group. |
| `lastAppliedAt` | `Any` | The date when the label was last applied to an issue, project, or initiative. |
| `name` | `str` | The label's name. |
| `organization` | `dict` | The workspace that the initiative label belongs to. |
| `parent` | `dict` | The parent label group. |
| `retiredAt` | `Any` | [Internal] When the label was retired. |
| `retiredBy` | `dict` | The user who retired the label. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```python
initiative_label = client.InitiativeLabel().load({"id": "initiative_label_id"})
```

#### Example: List

```python
initiative_labels = client.InitiativeLabel().list()
```

#### Example: Create

```python
initiative_label = client.InitiativeLabel().create({
    "color": "example_color",  # str
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "isGroup": True,  # bool
    "name": "example_name",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```


### InitiativeLeadTeamChangeImpact

Create an instance: `initiative_lead_team_change_impact = client.InitiativeLeadTeamChangeImpact()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `affectedDescendantCount` | `int` | The number of editable matching sub-initiatives whose lead team would change if the update is applied to descendants. |
| `id` | `str` |  |
| `visibilityMayChange` | `bool` | Whether the changed initiatives may gain or lose access restrictions because the current or next lead team is not public. |

#### Example: Load

```python
initiative_lead_team_change_impact = client.InitiativeLeadTeamChangeImpact().load({"id": "initiative_lead_team_change_impact_id"})
```


### InitiativeRelation

Create an instance: `initiative_relation = client.InitiativeRelation()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `id` | `str` | The unique identifier of the entity. |
| `initiative` | `dict` | The parent initiative in this hierarchical relation. |
| `relatedInitiative` | `dict` | The child initiative in this hierarchical relation. |
| `sortOrder` | `float` | The sort order of the child initiative within its parent initiative. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |
| `user` | `dict` | The user who last created or modified the relation. |

#### Example: Load

```python
initiative_relation = client.InitiativeRelation().load({"id": "initiative_relation_id"})
```

#### Example: List

```python
initiative_relations = client.InitiativeRelation().list()
```

#### Example: Create

```python
initiative_relation = client.InitiativeRelation().create({
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "sortOrder": 1,  # float
    "updatedAt": "example_updatedAt",  # Any
})
```


### InitiativeToProject

Create an instance: `initiative_to_project = client.InitiativeToProject()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `id` | `str` | The unique identifier of the entity. |
| `initiative` | `dict` | The initiative that the project is associated with. |
| `project` | `dict` | The project that the initiative is associated with. |
| `sortOrder` | `str` | The sort order of the project within its parent initiative. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```python
initiative_to_project = client.InitiativeToProject().load({"id": "initiative_to_project_id"})
```

#### Example: List

```python
initiative_to_projects = client.InitiativeToProject().list()
```

#### Example: Create

```python
initiative_to_project = client.InitiativeToProject().create({
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "sortOrder": "example_sortOrder",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```


### InitiativeUpdate

Create an instance: `initiative_update = client.InitiativeUpdate()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `body` | `str` | The update content in markdown format. |
| `bodyData` | `str` | [Internal] The content of the update as a Prosemirror document. |
| `commentCount` | `int` | Number of comments associated with the initiative update. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `diff` | `Any` | The diff between the current update and the previous one. |
| `diffMarkdown` | `str` | The diff between the current update and the previous one, formatted as markdown. |
| `editedAt` | `Any` | The time the update was edited. |
| `health` | `str` | The health of the initiative at the time this update was posted. |
| `id` | `str` | The unique identifier of the entity. |
| `infoSnapshot` | `Any` | [Internal] A snapshot of initiative properties at the time the update was posted, including project statuses, sub-initiative health, and target dates. |
| `initiative` | `dict` | The initiative that this status update was posted to. |
| `isDiffHidden` | `bool` | Whether the diff between this update and the previous one should be hidden in the UI. |
| `isStale` | `bool` | Whether the initiative update is stale. |
| `reactionData` | `Any` | Emoji reaction summary, grouped by emoji type. |
| `slugId` | `str` | The update's unique URL slug. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |
| `url` | `str` | The URL to the initiative update. |
| `user` | `dict` | The user who wrote the update. |

#### Example: Load

```python
initiative_update = client.InitiativeUpdate().load({"id": "initiative_update_id"})
```

#### Example: List

```python
initiative_updates = client.InitiativeUpdate().list()
```

#### Example: Create

```python
initiative_update = client.InitiativeUpdate().create({
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


### Integration

Create an instance: `integration = client.Integration()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `creator` | `dict` | The user that added the integration. |
| `id` | `str` | The unique identifier of the entity. |
| `organization` | `dict` | The workspace that the integration is associated with. |
| `service` | `str` | The integration's type, identifying which external service this integration connects to (e.g., 'slack', 'github', 'jira', 'figma'). |
| `team` | `dict` | The team that the integration is associated with. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```python
integration = client.Integration().load({"id": "integration_id"})
```

#### Example: List

```python
integrations = client.Integration().list()
```

#### Example: Create

```python
integration = client.Integration().create({
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "service": "example_service",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```


### IntegrationTemplate

Create an instance: `integration_template = client.IntegrationTemplate()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `foreignEntityId` | `str` | The identifier of the foreign entity in the external service that this template is scoped to. |
| `id` | `str` | The unique identifier of the entity. |
| `integration` | `dict` | The integration that the template is associated with. |
| `template` | `dict` | The template that the integration is associated with. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```python
integration_template = client.IntegrationTemplate().load({"id": "integration_template_id"})
```

#### Example: List

```python
integration_templates = client.IntegrationTemplate().list()
```

#### Example: Create

```python
integration_template = client.IntegrationTemplate().create({
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```


### IntegrationsSetting

Create an instance: `integrations_setting = client.IntegrationsSetting()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `contextViewType` | `str` | The type of view to which the integration settings context is associated with. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `id` | `str` | The unique identifier of the entity. |
| `initiative` | `dict` | Initiative which those settings apply to. |
| `microsoftTeamsProjectUpdateCreated` | `bool` | Whether to send a Microsoft Teams message when a project update is created. |
| `project` | `dict` | Project which those settings apply to. |
| `slackInitiativeUpdateCreated` | `bool` | Whether to send a Slack message when an initiative update is created. |
| `slackIssueAddedToTriage` | `bool` | Whether to send a Slack message when a new issue is added to triage. |
| `slackIssueAddedToView` | `bool` | Whether to send a Slack message when an issue is added to the custom view. |
| `slackIssueNewComment` | `bool` | Whether to send a Slack message when a comment is created on any of the project or team's issues. |
| `slackIssueSlaBreached` | `bool` | Whether to send a Slack message when an SLA is breached. |
| `slackIssueSlaHighRisk` | `bool` | Whether to send a Slack message when an SLA is at high risk. |
| `slackIssueStatusChangedAll` | `bool` | Whether to send a Slack message when any of the project or team's issues has a change in status. |
| `slackIssueStatusChangedDone` | `bool` | Whether to send a Slack message when any of the project or team's issues change to completed or canceled. |
| `slackProjectUpdateCreated` | `bool` | Whether to send a Slack message when a project update is created. |
| `slackProjectUpdateCreatedToTeam` | `bool` | Whether to send a new project update to team Slack channels. |
| `slackProjectUpdateCreatedToWorkspace` | `bool` | Whether to send a new project update to workspace Slack channel. |
| `team` | `dict` | Team which those settings apply to. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```python
integrations_setting = client.IntegrationsSetting().load({"id": "integrations_setting_id"})
```

#### Example: Create

```python
integrations_setting = client.IntegrationsSetting().create({
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```


### Issue

Create an instance: `issue = client.Issue()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activitySummary` | `Any` | [Internal] The activity summary information for this issue. |
| `addedToCycleAt` | `Any` | The time at which the issue was added to a cycle. |
| `addedToProjectAt` | `Any` | The time at which the issue was added to a project. |
| `addedToTeamAt` | `Any` | The time at which the issue was added to a team. |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `asksExternalUserRequester` | `dict` | The external user who requested creation of the Asks issue on behalf of the creator. |
| `asksRequester` | `dict` | The internal user who requested creation of the Asks issue on behalf of the creator. |
| `assignee` | `dict` | The user to whom the issue is assigned. |
| `autoArchivedAt` | `Any` | The time at which the issue was automatically archived by the auto pruning process. |
| `autoClosedAt` | `Any` | The time at which the issue was automatically closed by the auto pruning process. |
| `botActor` | `dict` | The bot that created the issue, if applicable. |
| `branchName` | `str` | Suggested branch name for the issue. |
| `canceledAt` | `Any` | The time at which the issue was moved into canceled state. |
| `completedAt` | `Any` | The time at which the issue was moved into completed state. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `creator` | `dict` | The user who created the issue. |
| `customerTicketCount` | `int` | Returns the number of Attachment resources which are created by customer support ticketing systems (e.g. |
| `cycle` | `dict` | The cycle that the issue is associated with. |
| `delegate` | `dict` | The agent user that is delegated to work on this issue. |
| `description` | `str` | The issue's description in markdown format. |
| `descriptionState` | `str` | [Internal] The issue's description content as YJS state. |
| `documentContent` | `dict` | [ALPHA] The document content representing this issue description. |
| `dueDate` | `Any` | The date at which the issue is due. |
| `estimate` | `float` | The estimate of the complexity of the issue. |
| `externalUserCreator` | `dict` | The external user who created the issue. |
| `favorite` | `dict` | The users favorite associated with this issue. |
| `id` | `str` | The unique identifier of the entity. |
| `identifier` | `str` | Issue's human readable identifier (e.g. |
| `inheritsSharedAccess` | `bool` | Whether this issue inherits shared access from its parent issue. |
| `integrationSourceType` | `str` | Integration type that created this issue, if applicable. |
| `labelIds` | `str` | Identifiers of the labels associated with this issue. |
| `lastAppliedTemplate` | `dict` | The last template that was applied to this issue. |
| `number` | `float` | The issue's unique number, scoped to the issue's team. |
| `parent` | `dict` | The parent of the issue. |
| `previousIdentifiers` | `str` | Previous identifiers of the issue if it has been moved between teams. |
| `priority` | `float` | The priority of the issue. |
| `priorityLabel` | `str` | Label for the priority. |
| `prioritySortOrder` | `float` | The order of the item in relation to other items in the workspace, when ordered by priority. |
| `project` | `dict` | The project that the issue is associated with. |
| `projectMilestone` | `dict` | The project milestone that the issue is associated with. |
| `reactionData` | `Any` | Emoji reaction summary for the issue, grouped by emoji type. |
| `recurringIssueTemplate` | `dict` | The recurring issue template that created this issue. |
| `slaBreachesAt` | `Any` | The time at which the issue's SLA will breach. |
| `slaHighRiskAt` | `Any` | The time at which the issue's SLA will enter high risk state. |
| `slaMediumRiskAt` | `Any` | The time at which the issue's SLA will enter medium risk state. |
| `slaStartedAt` | `Any` | The time at which the issue's SLA began. |
| `slaType` | `str` | The type of SLA set on the issue. |
| `snoozedBy` | `dict` | The user who snoozed the issue. |
| `snoozedUntilAt` | `Any` | The time until an issue will be snoozed in Triage view. |
| `sortOrder` | `float` | The order of the item in relation to other items in the organization. |
| `sourceComment` | `dict` | The comment that this issue was created from, when an issue is created from an existing comment. |
| `startedAt` | `Any` | The time at which the issue was moved into started state. |
| `startedTriageAt` | `Any` | The time at which the issue entered triage. |
| `state` | `dict` | The workflow state (issue status) that the issue is currently in. |
| `subIssueSortOrder` | `float` | The order of the item in the sub-issue list. |
| `suggestionsGeneratedAt` | `Any` | [Internal] The time at which the most recent suggestions for this issue were generated. |
| `summary` | `dict` | [Internal] AI-generated activity summary for this issue. |
| `team` | `dict` | The team that the issue belongs to. |
| `title` | `str` | The issue's title. |
| `trashed` | `bool` | A flag that indicates whether the issue is in the trash bin. |
| `triagedAt` | `Any` | The time at which the issue left triage. |
| `trusted` | `bool` | [Internal] Whether this issue has been explicitly marked as trusted. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |
| `url` | `str` | Issue URL. |

#### Example: Load

```python
issue = client.Issue().load({"id": "issue_id"})
```

#### Example: List

```python
issues = client.Issue().list()
```

#### Example: Create

```python
issue = client.Issue().create({
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


### IssueImport

Create an instance: `issue_import = client.IssueImport()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `creatorId` | `str` | Identifier of the user who started the import job. |
| `csvFileUrl` | `str` | File URL for the uploaded CSV for the import, if there is one. |
| `displayName` | `str` | The display name of the import service. |
| `error` | `str` | User readable error message, if one has occurred during the import. |
| `errorMetadata` | `Any` | Error code and metadata, if one has occurred during the import. |
| `id` | `str` | The unique identifier of the entity. |
| `mapping` | `Any` | The data mapping configuration for the import job. |
| `progress` | `float` | Current step progress as a percentage (0-100). |
| `service` | `str` | The external service from which data is being imported (e.g., jira, asana, github, shortcut, linear). |
| `serviceMetadata` | `Any` | Metadata related to import service. |
| `status` | `str` | The current status of the import job, indicating its position in the import lifecycle (e.g., not started, in progress, complete, error). |
| `teamName` | `str` | The name of the new team to be created for the import, when the import is configured to create a new team rather than importing into an existing one. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |

#### Example: Create

```python
issue_import = client.IssueImport().create({
    "createdAt": "example_createdAt",  # Any
    "displayName": "example_displayName",  # str
    "service": "example_service",  # str
    "status": "example_status",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```


### IssueLabel

Create an instance: `issue_label = client.IssueLabel()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `color` | `str` | The label's color as a HEX string (e.g., '#EB5757'). |
| `createdAt` | `Any` | The time at which the entity was created. |
| `creator` | `dict` | The user who created the label. |
| `description` | `str` | The label's description. |
| `groupType` | `str` | The selection mode of this label group. |
| `id` | `str` | The unique identifier of the entity. |
| `inheritedFrom` | `dict` | The original workspace or parent-team label that this label was inherited from. |
| `isGroup` | `bool` | Whether the label is a group. |
| `lastAppliedAt` | `Any` | The date when the label was last applied to an issue, project, or initiative. |
| `name` | `str` | The label's name. |
| `parent` | `dict` | The parent label. |
| `retiredAt` | `Any` | [Internal] When the label was retired. |
| `retiredBy` | `dict` | The user who retired the label. |
| `team` | `dict` | The team that the label is scoped to. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```python
issue_label = client.IssueLabel().load({"id": "issue_label_id"})
```

#### Example: List

```python
issue_labels = client.IssueLabel().list()
```

#### Example: Create

```python
issue_label = client.IssueLabel().create({
    "color": "example_color",  # str
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "isGroup": True,  # bool
    "name": "example_name",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```


### IssuePriorityValue

Create an instance: `issue_priority_value = client.IssuePriorityValue()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `label` | `str` | Priority's label. |
| `priority` | `int` | Priority's number value. |

#### Example: List

```python
issue_priority_values = client.IssuePriorityValue().list()
```


### IssueRelation

Create an instance: `issue_relation = client.IssueRelation()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `id` | `str` | The unique identifier of the entity. |
| `issue` | `dict` | The source issue whose relationship is being described. |
| `relatedIssue` | `dict` | The target issue that the source issue is related to. |
| `type` | `str` | The type of relationship between the source issue and the related issue. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```python
issue_relation = client.IssueRelation().load({"id": "issue_relation_id"})
```

#### Example: List

```python
issue_relations = client.IssueRelation().list()
```

#### Example: Create

```python
issue_relation = client.IssueRelation().create({
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "type": "example_type",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```


### IssueSearchResult

Create an instance: `issue_search_result = client.IssueSearchResult()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activitySummary` | `Any` | [Internal] The activity summary information for this issue. |
| `addedToCycleAt` | `Any` | The time at which the issue was added to a cycle. |
| `addedToProjectAt` | `Any` | The time at which the issue was added to a project. |
| `addedToTeamAt` | `Any` | The time at which the issue was added to a team. |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `asksExternalUserRequester` | `dict` | The external user who requested creation of the Asks issue on behalf of the creator. |
| `asksRequester` | `dict` | The internal user who requested creation of the Asks issue on behalf of the creator. |
| `assignee` | `dict` | The user to whom the issue is assigned. |
| `autoArchivedAt` | `Any` | The time at which the issue was automatically archived by the auto pruning process. |
| `autoClosedAt` | `Any` | The time at which the issue was automatically closed by the auto pruning process. |
| `botActor` | `dict` | The bot that created the issue, if applicable. |
| `branchName` | `str` | Suggested branch name for the issue. |
| `canceledAt` | `Any` | The time at which the issue was moved into canceled state. |
| `completedAt` | `Any` | The time at which the issue was moved into completed state. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `creator` | `dict` | The user who created the issue. |
| `customerTicketCount` | `int` | Returns the number of Attachment resources which are created by customer support ticketing systems (e.g. |
| `cycle` | `dict` | The cycle that the issue is associated with. |
| `delegate` | `dict` | The agent user that is delegated to work on this issue. |
| `description` | `str` | The issue's description in markdown format. |
| `descriptionState` | `str` | [Internal] The issue's description content as YJS state. |
| `documentContent` | `dict` | [ALPHA] The document content representing this issue description. |
| `dueDate` | `Any` | The date at which the issue is due. |
| `estimate` | `float` | The estimate of the complexity of the issue. |
| `externalUserCreator` | `dict` | The external user who created the issue. |
| `favorite` | `dict` | The users favorite associated with this issue. |
| `id` | `str` | The unique identifier of the entity. |
| `identifier` | `str` | Issue's human readable identifier (e.g. |
| `inheritsSharedAccess` | `bool` | Whether this issue inherits shared access from its parent issue. |
| `integrationSourceType` | `str` | Integration type that created this issue, if applicable. |
| `labelIds` | `str` | Identifiers of the labels associated with this issue. |
| `lastAppliedTemplate` | `dict` | The last template that was applied to this issue. |
| `metadata` | `Any` | Metadata related to search result. |
| `number` | `float` | The issue's unique number, scoped to the issue's team. |
| `parent` | `dict` | The parent of the issue. |
| `previousIdentifiers` | `str` | Previous identifiers of the issue if it has been moved between teams. |
| `priority` | `float` | The priority of the issue. |
| `priorityLabel` | `str` | Label for the priority. |
| `prioritySortOrder` | `float` | The order of the item in relation to other items in the workspace, when ordered by priority. |
| `project` | `dict` | The project that the issue is associated with. |
| `projectMilestone` | `dict` | The project milestone that the issue is associated with. |
| `reactionData` | `Any` | Emoji reaction summary for the issue, grouped by emoji type. |
| `recurringIssueTemplate` | `dict` | The recurring issue template that created this issue. |
| `slaBreachesAt` | `Any` | The time at which the issue's SLA will breach. |
| `slaHighRiskAt` | `Any` | The time at which the issue's SLA will enter high risk state. |
| `slaMediumRiskAt` | `Any` | The time at which the issue's SLA will enter medium risk state. |
| `slaStartedAt` | `Any` | The time at which the issue's SLA began. |
| `slaType` | `str` | The type of SLA set on the issue. |
| `snoozedBy` | `dict` | The user who snoozed the issue. |
| `snoozedUntilAt` | `Any` | The time until an issue will be snoozed in Triage view. |
| `sortOrder` | `float` | The order of the item in relation to other items in the organization. |
| `sourceComment` | `dict` | The comment that this issue was created from, when an issue is created from an existing comment. |
| `startedAt` | `Any` | The time at which the issue was moved into started state. |
| `startedTriageAt` | `Any` | The time at which the issue entered triage. |
| `state` | `dict` | The workflow state (issue status) that the issue is currently in. |
| `subIssueSortOrder` | `float` | The order of the item in the sub-issue list. |
| `suggestionsGeneratedAt` | `Any` | [Internal] The time at which the most recent suggestions for this issue were generated. |
| `summary` | `dict` | [Internal] AI-generated activity summary for this issue. |
| `team` | `dict` | The team that the issue belongs to. |
| `title` | `str` | The issue's title. |
| `trashed` | `bool` | A flag that indicates whether the issue is in the trash bin. |
| `triagedAt` | `Any` | The time at which the issue left triage. |
| `trusted` | `bool` | [Internal] Whether this issue has been explicitly marked as trusted. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |
| `url` | `str` | Issue URL. |

#### Example: List

```python
issue_search_results = client.IssueSearchResult().list({"term": "example"})
```


### IssueToRelease

Create an instance: `issue_to_release = client.IssueToRelease()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `id` | `str` | The unique identifier of the entity. |
| `issue` | `dict` | The issue that is linked to the release. |
| `release` | `dict` | The release that the issue is linked to. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```python
issue_to_release = client.IssueToRelease().load({"id": "issue_to_release_id"})
```

#### Example: List

```python
issue_to_releases = client.IssueToRelease().list()
```

#### Example: Create

```python
issue_to_release = client.IssueToRelease().create({
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```


### LogoutResponse

Create an instance: `logout_response = client.LogoutResponse()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `success` | `bool` | Whether the operation was successful. |

#### Example: Create

```python
logout_response = client.LogoutResponse().create({
    "success": True,  # bool
})
```


### Notification

Create an instance: `notification = client.Notification()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `dict` | The user that caused the notification. |
| `actorAvatarColor` | `str` | [Internal] Notification actor initials if avatar is not available. |
| `actorAvatarUrl` | `str` | [Internal] Notification avatar URL. |
| `actorInactive` | `bool` | [Internal] Whether the notification's user actor is deactivated in the workspace. |
| `actorInitials` | `str` | [Internal] Notification actor initials if avatar is not available. |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `botActor` | `dict` | The bot that caused the notification. |
| `category` | `str` | The category of the notification. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `emailedAt` | `Any` | The time at which an email reminder for this notification was sent to the user. |
| `externalUserActor` | `dict` | The external user that caused the notification. |
| `groupingKey` | `str` | [Internal] Notifications with the same grouping key will be grouped together in the UI. |
| `groupingPriority` | `float` | [Internal] Priority of the notification with the same grouping key. |
| `id` | `str` | The unique identifier of the entity. |
| `inboxUrl` | `str` | [Internal] Inbox URL for the notification. |
| `initiativeUpdateHealth` | `str` | [Internal] Initiative update health for new updates. |
| `isLinearActor` | `bool` | [Internal] If notification actor was Linear. |
| `issueStatusType` | `str` | [Internal] Issue's status type for issue notifications. |
| `projectUpdateHealth` | `str` | [Internal] Project update health for new updates. |
| `readAt` | `Any` | The time at which the user marked the notification as read. |
| `snoozedUntilAt` | `Any` | The time until which a notification is snoozed. |
| `subtitle` | `str` | [Internal] Notification subtitle. |
| `title` | `str` | [Internal] Notification title. |
| `type` | `str` | Notification type. |
| `unsnoozedAt` | `Any` | The time at which a notification was unsnoozed. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |
| `url` | `str` | [Internal] URL to the target of the notification. |
| `user` | `dict` | The recipient user of this notification. |

#### Example: Load

```python
notification = client.Notification().load({"id": "notification_id"})
```

#### Example: List

```python
notifications = client.Notification().list()
```


### NotificationSubscription

Create an instance: `notification_subscription = client.NotificationSubscription()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | Whether the subscription is active. |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `contextViewType` | `str` | The type of contextual view (e.g., active issues, backlog) that further scopes a team notification subscription. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `customView` | `dict` | The custom view that this notification subscription is scoped to. |
| `customer` | `dict` | The customer that this notification subscription is scoped to. |
| `cycle` | `dict` | The cycle that this notification subscription is scoped to. |
| `id` | `str` | The unique identifier of the entity. |
| `initiative` | `dict` | The initiative that this notification subscription is scoped to. |
| `label` | `dict` | The issue label that this notification subscription is scoped to. |
| `project` | `dict` | The project that this notification subscription is scoped to. |
| `subscriber` | `dict` | The user who will receive notifications from this subscription. |
| `team` | `dict` | The team that this notification subscription is scoped to. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |
| `user` | `dict` | The user that this notification subscription is scoped to, for user-specific view subscriptions. |
| `userContextViewType` | `str` | The type of user-specific view that further scopes a user notification subscription. |

#### Example: Load

```python
notification_subscription = client.NotificationSubscription().load({"id": "notification_subscription_id"})
```

#### Example: List

```python
notification_subscriptions = client.NotificationSubscription().list()
```


### OAuthApplication

Create an instance: `o_auth_application = client.OAuthApplication()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `clientId` | `str` | The client ID used during OAuth authorization flows. |
| `createdAt` | `Any` | The time at which the OAuth application was created. |
| `description` | `str` | User-facing description of the OAuth application. |
| `developer` | `str` | Name of the developer or company that built the OAuth application. |
| `developerUrl` | `str` | URL of the developer's website, homepage, or documentation. |
| `distribution` | `str` | Distribution setting for the OAuth application. |
| `grantTypes` | `str` | OAuth grant types supported by this application. |
| `id` | `str` | The unique identifier of the OAuth application. |
| `imageUrl` | `str` | URL of the OAuth application's icon. |
| `name` | `str` | The human-readable name of the OAuth application. |
| `redirectUris` | `str` | Allowed redirect URIs for OAuth authorization flows. |
| `updatedAt` | `Any` | The time at which the OAuth application was last updated. |
| `webhookEnabled` | `bool` | Whether webhook delivery is enabled for this OAuth application. |
| `webhookResourceTypes` | `str` | Resource types the OAuth application's webhooks subscribe to. |
| `webhookUrl` | `str` | Webhook URL used for delivering webhook payloads. |

#### Example: Load

```python
o_auth_application = client.OAuthApplication().load({"id": "o_auth_application_id"})
```

#### Example: List

```python
o_auth_applications = client.OAuthApplication().list()
```

#### Example: Create

```python
o_auth_application = client.OAuthApplication().create({
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


### Organization

Create an instance: `organization = client.Organization()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agentAutomationEnabled` | `bool` | [INTERNAL] Whether the workspace has enabled agent automation. |
| `aiAddonEnabled` | `bool` | [INTERNAL] Whether the workspace has enabled the AI add-on (which at this point only includes triage suggestions). |
| `aiDiscussionSummariesEnabled` | `bool` | Whether the workspace has enabled AI discussion summaries for issues. |
| `aiProviderConfiguration` | `Any` | [INTERNAL] Configure per-modality AI host providers and model families. |
| `aiTelemetryEnabled` | `bool` | [INTERNAL] Whether the workspace has opted in to AI telemetry. |
| `aiThreadSummariesEnabled` | `bool` | Whether the workspace has enabled resolved thread AI summaries. |
| `allowedFileUploadContentTypes` | `str` | Allowed file upload content types |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `authSettings` | `Any` | Authentication settings for the workspace, including allowed auth providers, bypass rules, and organization visibility during signup. |
| `codeIntelligenceEnabled` | `bool` | [INTERNAL] Whether code intelligence is enabled for the workspace. |
| `codeIntelligenceRepository` | `str` | [INTERNAL] GitHub repository in owner/repo format for code intelligence. |
| `codingAgentEnabled` | `bool` | [INTERNAL] Whether the workspace has enabled Coding Sessions. |
| `codingAgentSettings` | `Any` | [Internal] Settings for Coding Sessions features. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `createdIssueCount` | `int` | Approximate total number of issues created in the workspace, including archived ones. |
| `customerCount` | `int` | The number of active (non-archived) customers tracked in the workspace. |
| `customersConfiguration` | `Any` | Configuration settings for the Customers feature, including revenue currency and other customer tracking preferences. |
| `customersEnabled` | `bool` | Whether the Customers feature is enabled and accessible for the workspace based on the current plan. |
| `defaultFeedSummarySchedule` | `str` | Default schedule for how often feed summaries are generated. |
| `defaultHomeView` | `str` | The default home view for members of the workspace who have not chosen their own default. |
| `defaultHomeViewTargetId` | `str` | The id of the specific initiative, project, view, dashboard, or page tab used as the default home view. |
| `deletionRequestedAt` | `Any` | The time at which deletion of the workspace was requested. |
| `feedEnabled` | `bool` | Whether the activity feed feature is enabled for the workspace. |
| `fiscalYearStartMonth` | `float` | The zero-indexed month at which the fiscal year starts (0 = January, 11 = December). |
| `generatedUpdatesEnabled` | `bool` | [INTERNAL] Whether the workspace has enabled generated updates. |
| `gitBranchFormat` | `str` | The template format for Git branch names created from issues. |
| `gitLinkbackDescriptionsEnabled` | `bool` | Whether issue descriptions should be included in the Git integration linkback messages posted to pull requests. |
| `gitLinkbackMessagesEnabled` | `bool` | Whether the Git integration linkback messages should be posted as comments on pull requests in private repositories. |
| `gitPublicLinkbackMessagesEnabled` | `bool` | Whether the Git integration linkback messages should be posted as comments on pull requests in public repositories. |
| `hipaaComplianceEnabled` | `bool` | Whether HIPAA compliance is enabled for the workspace. |
| `id` | `str` | The unique identifier of the entity. |
| `initiativeUpdateReminderFrequencyInWeeks` | `float` | The frequency in weeks at which to prompt for initiative updates. |
| `initiativeUpdateRemindersDay` | `str` | The day of the week on which initiative update reminders are sent. |
| `initiativeUpdateRemindersHour` | `float` | The hour of the day (0-23) at which initiative update reminders are sent. |
| `linearAgentEnabled` | `bool` | [Internal] Whether the workspace has enabled Linear Agent. |
| `linearAgentSettings` | `Any` | [Internal] Settings for Linear Agent features. |
| `logoUrl` | `str` | The URL of the workspace's logo image. |
| `name` | `str` | The workspace's name. |
| `periodUploadVolume` | `float` | Rolling 30-day total file upload volume for the workspace, measured in megabytes. |
| `previousUrlKeys` | `str` | Previously used URL keys for the workspace. |
| `projectUpdateReminderFrequencyInWeeks` | `float` | The frequency in weeks at which to prompt for project updates. |
| `projectUpdateRemindersDay` | `str` | The day of the week on which project update reminders are sent. |
| `projectUpdateRemindersHour` | `float` | The hour of the day (0-23) at which project update reminders are sent. |
| `pullRequestIssueMode` | `str` | How Linear suggests and links issues for pull requests that have none linked: 'off', 'suggest', or 'autoOnMerge'. |
| `pullRequestTourEnabled` | `bool` | Whether the workspace generates AI Pull Request guides for new pull requests. |
| `releaseChannel` | `str` | The feature release channel the workspace belongs to, which controls access to pre-release features. |
| `releasesEnabled` | `bool` | Whether release management is enabled for the workspace. |
| `restrictAgentInvocationToMembers` | `bool` | [Internal] Whether agent invocation is restricted to full workspace members. |
| `roadmapEnabled` | `bool` | Whether the roadmap feature is enabled for the workspace. |
| `samlEnabled` | `bool` | Whether SAML-based single sign-on authentication is enabled for the workspace. |
| `samlSettings` | `Any` | [INTERNAL] SAML settings. |
| `scimEnabled` | `bool` | Whether SCIM provisioning is enabled for the workspace, allowing automated user and team management from an identity provider. |
| `scimSettings` | `Any` | [INTERNAL] SCIM settings. |
| `securitySettings` | `Any` | Security settings for the workspace, including role-based restrictions for invitations, team creation, label management, and other sensitive operations. |
| `slackAutoCreateProjectChannel` | `bool` | [Internal] Whether to automatically create a Slack channel when a new project is created. |
| `slackProjectChannelIntegration` | `dict` | The Slack integration used for auto-creating project channels. |
| `slackProjectChannelPrefix` | `str` | The prefix used for auto-created Slack project channels. |
| `slackProjectChannelsEnabled` | `bool` | [Internal] Whether the Slack project channels feature is enabled for the workspace. |
| `subscription` | `dict` | The workspace's subscription to a paid plan. |
| `themeSettings` | `Any` | [ALPHA] Theme settings for the workspace. |
| `trialEndsAt` | `Any` | The time at which the current plan trial will end. |
| `trialStartsAt` | `Any` | The time at which the current plan trial started. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |
| `urlKey` | `str` | The workspace's unique URL key, used in URLs to identify the workspace. |
| `userCount` | `int` | The number of active (non-deactivated) users in the workspace. |
| `workingDays` | `float` | [Internal] The list of working days. |

#### Example: Load

```python
organization = client.Organization().load({"id": "organization_id"})
```


### OrganizationDomain

Create an instance: `organization_domain = client.OrganizationDomain()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `authType` | `str` | The authentication type this domain is used for. |
| `claimed` | `bool` | Whether the domain was claimed by the workspace through DNS TXT record verification. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `creator` | `dict` | The user who added the domain. |
| `disableOrganizationCreation` | `bool` | Whether users with email addresses from this domain are prevented from creating new workspaces. |
| `id` | `str` | The unique identifier of the entity. |
| `identityProvider` | `dict` | The identity provider the domain belongs to. |
| `name` | `str` | The domain name (e.g., 'example.com'). |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |
| `verificationEmail` | `str` | The email address used to verify this domain. |
| `verified` | `bool` | Whether the domain has been verified via email verification. |

#### Example: Create

```python
organization_domain = client.OrganizationDomain().create({
    "authType": "example_authType",  # str
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "name": "example_name",  # str
    "updatedAt": "example_updatedAt",  # Any
    "verified": True,  # bool
})
```


### OrganizationInvite

Create an instance: `organization_invite = client.OrganizationInvite()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `acceptedAt` | `Any` | The time at which the invite was accepted by the invitee. |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `email` | `str` | The email address of the person being invited to the workspace. |
| `expiresAt` | `Any` | The time at which the invite will expire and can no longer be accepted. |
| `external` | `bool` | Whether the invite was sent to an email address outside the workspace's verified domains. |
| `id` | `str` | The unique identifier of the entity. |
| `invitee` | `dict` | The user who has accepted the invite. |
| `inviter` | `dict` | The user who created the invitation. |
| `metadata` | `Any` | Extra metadata associated with the invite. |
| `organization` | `dict` | The workspace that the invite is associated with. |
| `role` | `str` | The workspace role (admin, member, guest, or owner) that the invitee will receive upon accepting the invite. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```python
organization_invite = client.OrganizationInvite().load({"id": "organization_invite_id"})
```

#### Example: List

```python
organization_invites = client.OrganizationInvite().list()
```

#### Example: Create

```python
organization_invite = client.OrganizationInvite().create({
    "createdAt": "example_createdAt",  # Any
    "email": "example_email",  # str
    "external": True,  # bool
    "id": "example_id",  # str
    "role": "example_role",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```


### OrganizationMeta

Create an instance: `organization_meta = client.OrganizationMeta()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowedAuthServices` | `str` | Allowed authentication providers, empty array means all are allowed. |
| `region` | `str` | The region the workspace is hosted in. |

#### Example: Load

```python
organization_meta = client.OrganizationMeta().load({"url_key": "url_key"})
```


### PasskeyLoginStartResponse

Create an instance: `passkey_login_start_response = client.PasskeyLoginStartResponse()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `options` | `Any` | The passkey authentication options to pass to the WebAuthn API. |
| `success` | `bool` | Whether the operation was successful. |


### Project

Create an instance: `project = client.Project()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `autoArchivedAt` | `Any` | The time at which the project was automatically archived by the auto-pruning process. |
| `canceledAt` | `Any` | The time at which the project was moved into a canceled status. |
| `color` | `str` | The project's color as a HEX string. |
| `completedAt` | `Any` | The time at which the project was moved into a completed status. |
| `completedIssueCountHistory` | `float` | The number of completed issues in the project at the end of each week since project creation. |
| `completedScopeHistory` | `float` | The number of completed estimation points at the end of each week since project creation. |
| `content` | `str` | The project's content in markdown format. |
| `contentState` | `str` | [Internal] The project's content as YJS state. |
| `convertedFromIssue` | `dict` | The issue that was converted into this project. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `creator` | `dict` | The user who created the project. |
| `currentProgress` | `Any` | [INTERNAL] The current progress of the project, broken down by issue status category. |
| `description` | `str` | The short description of the project. |
| `documentContent` | `dict` | The content of the project description. |
| `favorite` | `dict` | The user's favorite associated with this project. |
| `frequencyResolution` | `str` | The resolution of the reminder frequency. |
| `health` | `str` | The overall health of the project, derived from the most recent project update. |
| `healthUpdatedAt` | `Any` | The time at which the project health was last updated, typically when a new project update is posted. |
| `icon` | `str` | The icon of the project. |
| `id` | `str` | The unique identifier of the entity. |
| `identifier` | `str` | [Internal] The human-readable identifier of the project. |
| `inProgressScopeHistory` | `float` | The number of in-progress estimation points at the end of each week since project creation. |
| `integrationsSettings` | `dict` | Settings for all integrations associated with that project. |
| `issueCountHistory` | `float` | The total number of issues in the project at the end of each week since project creation. |
| `labelIds` | `str` | The IDs of the project labels associated with this project. |
| `lastAppliedTemplate` | `dict` | The last template that was applied to this project. |
| `lastUpdate` | `dict` | The most recent status update posted for this project. |
| `lead` | `dict` | The user who leads the project. |
| `leadTeam` | `dict` | [Internal] The team that leads the project. |
| `microsoftTeamsChannelId` | `str` | The ID of the Microsoft Teams channel connected to the project, if any. |
| `name` | `str` | The name of the project. |
| `previousIdentifiers` | `str` | [Internal] Identifiers (default and custom) that this project has previously held. |
| `priority` | `int` | The priority of the project. |
| `priorityLabel` | `str` | The priority of the project as a label. |
| `prioritySortOrder` | `float` | The sort order for the project within the workspace when ordered by priority. |
| `progress` | `float` | The overall progress of the project. |
| `progressHistory` | `Any` | [INTERNAL] The progress history of the project, tracking issue completion over time. |
| `projectUpdateRemindersPausedUntilAt` | `Any` | The time until which project update reminders are paused. |
| `resourceCount` | `int` | The number of resources associated with the project, including documents, external links, and attachments. |
| `scope` | `float` | The overall scope (total estimate points) of the project. |
| `scopeHistory` | `float` | The total scope (estimation points) of the project at the end of each week since project creation. |
| `slackChannelId` | `str` | The ID of the Slack channel connected to the project, if any. |
| `slugId` | `str` | The project's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `float` | The sort order for the project within the workspace. |
| `startDate` | `Any` | The estimated start date of the project. |
| `startDateResolution` | `str` | The resolution of the project's start date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `startedAt` | `Any` | The time at which the project was moved into a started status. |
| `status` | `dict` | The current project status. |
| `targetDate` | `Any` | The estimated completion date of the project. |
| `targetDateResolution` | `str` | The resolution of the project's estimated completion date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `trashed` | `bool` | A flag that indicates whether the project is in the trash bin. |
| `updateReminderFrequency` | `float` | The frequency at which to prompt for updates. |
| `updateReminderFrequencyInWeeks` | `float` | The n-weekly frequency at which to prompt for updates. |
| `updateRemindersDay` | `str` | The day at which to prompt for updates. |
| `updateRemindersHour` | `float` | The hour at which to prompt for updates. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |
| `url` | `str` | Project URL. |

#### Example: Load

```python
project = client.Project().load({"id": "project_id"})
```

#### Example: List

```python
projects = client.Project().list()
```

#### Example: Create

```python
project = client.Project().create({
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


### ProjectLabel

Create an instance: `project_label = client.ProjectLabel()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `color` | `str` | The label's color as a HEX string (e.g., '#EB5757'). |
| `createdAt` | `Any` | The time at which the entity was created. |
| `creator` | `dict` | The user who created the label. |
| `description` | `str` | The label's description. |
| `id` | `str` | The unique identifier of the entity. |
| `inheritedFrom` | `dict` | [Internal] The original workspace or parent-team label that this label was inherited from. |
| `isGroup` | `bool` | Whether the label is a group. |
| `lastAppliedAt` | `Any` | The date when the label was last applied to an issue, project, or initiative. |
| `name` | `str` | The label's name. |
| `organization` | `dict` | The workspace that the project label belongs to. |
| `parent` | `dict` | The parent label group. |
| `retiredAt` | `Any` | [Internal] When the label was retired. |
| `retiredBy` | `dict` | The user who retired the label. |
| `team` | `dict` | [Internal] The team that the label is scoped to. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```python
project_label = client.ProjectLabel().load({"id": "project_label_id"})
```

#### Example: List

```python
project_labels = client.ProjectLabel().list()
```

#### Example: Create

```python
project_label = client.ProjectLabel().create({
    "color": "example_color",  # str
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "isGroup": True,  # bool
    "name": "example_name",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```


### ProjectMilestone

Create an instance: `project_milestone = client.ProjectMilestone()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `currentProgress` | `Any` | [Internal] The current progress of the milestone, broken down by issue status category. |
| `description` | `str` | The project milestone's description in markdown format. |
| `descriptionState` | `str` | [Internal] The project milestone's description as YJS state. |
| `documentContent` | `dict` | The rich-text content of the milestone description. |
| `id` | `str` | The unique identifier of the entity. |
| `name` | `str` | The name of the project milestone. |
| `progress` | `float` | The progress % of the project milestone. |
| `progressHistory` | `Any` | [Internal] The progress history of the milestone, tracking issue completion over time. |
| `project` | `dict` | The project that this milestone belongs to. |
| `sortOrder` | `float` | The order of the milestone in relation to other milestones within a project. |
| `status` | `str` | The status of the project milestone. |
| `targetDate` | `Any` | The planned completion date of the milestone. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```python
project_milestone = client.ProjectMilestone().load({"id": "project_milestone_id"})
```

#### Example: List

```python
project_milestones = client.ProjectMilestone().list()
```

#### Example: Create

```python
project_milestone = client.ProjectMilestone().create({
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


### ProjectMilestoneMoveProjectTeam

Create an instance: `project_milestone_move_project_team = client.ProjectMilestoneMoveProjectTeam()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `projectId` | `str` | The project id |
| `teamIds` | `str` | The team ids for the project |


### ProjectRelation

Create an instance: `project_relation = client.ProjectRelation()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `anchorType` | `str` | The type of anchor on the source project end of the relation, indicating whether it is anchored to the project itself or a specific milestone. |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `id` | `str` | The unique identifier of the entity. |
| `project` | `dict` | The source project in the dependency relation. |
| `projectMilestone` | `dict` | The specific milestone within the source project that the relation is anchored to. |
| `relatedAnchorType` | `str` | The type of anchor on the target project end of the relation, indicating whether it is anchored to the project itself or a specific milestone. |
| `relatedProject` | `dict` | The target project in the dependency relation. |
| `relatedProjectMilestone` | `dict` | The specific milestone within the target project that the relation is anchored to. |
| `type` | `str` | The type of dependency relationship from the project to the related project (e.g., blocks). |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |
| `user` | `dict` | The user who last created or modified the relation. |

#### Example: Load

```python
project_relation = client.ProjectRelation().load({"id": "project_relation_id"})
```

#### Example: List

```python
project_relations = client.ProjectRelation().list()
```

#### Example: Create

```python
project_relation = client.ProjectRelation().create({
    "anchorType": "example_anchorType",  # str
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "relatedAnchorType": "example_relatedAnchorType",  # str
    "type": "example_type",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```


### ProjectSearchResult

Create an instance: `project_search_result = client.ProjectSearchResult()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `autoArchivedAt` | `Any` | The time at which the project was automatically archived by the auto-pruning process. |
| `canceledAt` | `Any` | The time at which the project was moved into a canceled status. |
| `color` | `str` | The project's color as a HEX string. |
| `completedAt` | `Any` | The time at which the project was moved into a completed status. |
| `completedIssueCountHistory` | `float` | The number of completed issues in the project at the end of each week since project creation. |
| `completedScopeHistory` | `float` | The number of completed estimation points at the end of each week since project creation. |
| `content` | `str` | The project's content in markdown format. |
| `contentState` | `str` | [Internal] The project's content as YJS state. |
| `convertedFromIssue` | `dict` | The issue that was converted into this project. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `creator` | `dict` | The user who created the project. |
| `currentProgress` | `Any` | [INTERNAL] The current progress of the project, broken down by issue status category. |
| `description` | `str` | The short description of the project. |
| `documentContent` | `dict` | The content of the project description. |
| `favorite` | `dict` | The user's favorite associated with this project. |
| `frequencyResolution` | `str` | The resolution of the reminder frequency. |
| `health` | `str` | The overall health of the project, derived from the most recent project update. |
| `healthUpdatedAt` | `Any` | The time at which the project health was last updated, typically when a new project update is posted. |
| `icon` | `str` | The icon of the project. |
| `id` | `str` | The unique identifier of the entity. |
| `identifier` | `str` | [Internal] The human-readable identifier of the project. |
| `inProgressScopeHistory` | `float` | The number of in-progress estimation points at the end of each week since project creation. |
| `integrationsSettings` | `dict` | Settings for all integrations associated with that project. |
| `issueCountHistory` | `float` | The total number of issues in the project at the end of each week since project creation. |
| `labelIds` | `str` | The IDs of the project labels associated with this project. |
| `lastAppliedTemplate` | `dict` | The last template that was applied to this project. |
| `lastUpdate` | `dict` | The most recent status update posted for this project. |
| `lead` | `dict` | The user who leads the project. |
| `leadTeam` | `dict` | [Internal] The team that leads the project. |
| `metadata` | `Any` | Metadata related to search result. |
| `microsoftTeamsChannelId` | `str` | The ID of the Microsoft Teams channel connected to the project, if any. |
| `name` | `str` | The name of the project. |
| `previousIdentifiers` | `str` | [Internal] Identifiers (default and custom) that this project has previously held. |
| `priority` | `int` | The priority of the project. |
| `priorityLabel` | `str` | The priority of the project as a label. |
| `prioritySortOrder` | `float` | The sort order for the project within the workspace when ordered by priority. |
| `progress` | `float` | The overall progress of the project. |
| `progressHistory` | `Any` | [INTERNAL] The progress history of the project, tracking issue completion over time. |
| `projectUpdateRemindersPausedUntilAt` | `Any` | The time until which project update reminders are paused. |
| `resourceCount` | `int` | The number of resources associated with the project, including documents, external links, and attachments. |
| `scope` | `float` | The overall scope (total estimate points) of the project. |
| `scopeHistory` | `float` | The total scope (estimation points) of the project at the end of each week since project creation. |
| `slackChannelId` | `str` | The ID of the Slack channel connected to the project, if any. |
| `slugId` | `str` | The project's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `float` | The sort order for the project within the workspace. |
| `startDate` | `Any` | The estimated start date of the project. |
| `startDateResolution` | `str` | The resolution of the project's start date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `startedAt` | `Any` | The time at which the project was moved into a started status. |
| `status` | `dict` | The current project status. |
| `targetDate` | `Any` | The estimated completion date of the project. |
| `targetDateResolution` | `str` | The resolution of the project's estimated completion date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `trashed` | `bool` | A flag that indicates whether the project is in the trash bin. |
| `updateReminderFrequency` | `float` | The frequency at which to prompt for updates. |
| `updateReminderFrequencyInWeeks` | `float` | The n-weekly frequency at which to prompt for updates. |
| `updateRemindersDay` | `str` | The day at which to prompt for updates. |
| `updateRemindersHour` | `float` | The hour at which to prompt for updates. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |
| `url` | `str` | Project URL. |

#### Example: List

```python
project_search_results = client.ProjectSearchResult().list({"term": "example"})
```


### ProjectStatus

Create an instance: `project_status = client.ProjectStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `color` | `str` | The color of the status as a HEX string, used for display in the UI. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `description` | `str` | Description of the status. |
| `id` | `str` | The unique identifier of the entity. |
| `indefinite` | `bool` | Whether a project can remain in this status indefinitely. |
| `inheritedFrom` | `dict` | [Internal] The original workspace or parent-team status that this status was inherited from. |
| `name` | `str` | The name of the status. |
| `position` | `float` | The position of the status within its type group in the workspace's project flow. |
| `team` | `dict` | [Internal] The team that the status is scoped to. |
| `type` | `str` | The category type of the project status (e.g., backlog, planned, started, paused, completed, canceled). |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```python
project_status = client.ProjectStatus().load({"id": "project_status_id"})
```

#### Example: List

```python
project_statuss = client.ProjectStatus().list()
```

#### Example: Create

```python
project_status = client.ProjectStatus().create({
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


### ProjectUpdate

Create an instance: `project_update = client.ProjectUpdate()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `body` | `str` | The update content in markdown format. |
| `bodyData` | `str` | [Internal] The content of the update as a Prosemirror document. |
| `commentCount` | `int` | Number of comments associated with the project update. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `diff` | `Any` | The diff between the current update and the previous one. |
| `diffMarkdown` | `str` | The diff between the current update and the previous one, formatted as markdown. |
| `editedAt` | `Any` | The time the update was edited. |
| `health` | `str` | The health of the project at the time this update was posted. |
| `id` | `str` | The unique identifier of the entity. |
| `infoSnapshot` | `Any` | [Internal] A snapshot of project properties at the time the update was posted, including team, milestone, and issue statistics. |
| `isDiffHidden` | `bool` | Whether the diff between this update and the previous one should be hidden in the UI. |
| `isStale` | `bool` | Whether the project update is stale. |
| `project` | `dict` | The project that this status update was posted to. |
| `reactionData` | `Any` | Emoji reaction summary, grouped by emoji type. |
| `shortSummary` | `str` | A short AI-generated summary of the project update. |
| `slugId` | `str` | The update's unique URL slug. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |
| `url` | `str` | The URL to the project update. |
| `user` | `dict` | The user who wrote the update. |

#### Example: Load

```python
project_update = client.ProjectUpdate().load({"id": "project_update_id"})
```

#### Example: List

```python
project_updates = client.ProjectUpdate().list()
```

#### Example: Create

```python
project_update = client.ProjectUpdate().create({
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


### PushSubscription

Create an instance: `push_subscription = client.PushSubscription()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `id` | `str` | The unique identifier of the entity. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |

#### Example: Create

```python
push_subscription = client.PushSubscription().create({
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```


### Reaction

Create an instance: `reaction = client.Reaction()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `comment` | `dict` | The comment that the reaction is associated with. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `emoji` | `str` | The name of the emoji used for this reaction. |
| `externalUser` | `dict` | The external user that created the reaction through an integration. |
| `id` | `str` | The unique identifier of the entity. |
| `initiativeUpdate` | `dict` | The initiative update that the reaction is associated with. |
| `issue` | `dict` | The issue that the reaction is associated with. |
| `post` | `dict` | The post that the reaction is associated with. |
| `projectUpdate` | `dict` | The project update that the reaction is associated with. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |
| `user` | `dict` | The workspace user that created the reaction. |

#### Example: Create

```python
reaction = client.Reaction().create({
    "createdAt": "example_createdAt",  # Any
    "emoji": "example_emoji",  # str
    "id": "example_id",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```


### Release

Create an instance: `release = client.Release()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `autoArchivedAt` | `Any` | The time at which the release was automatically archived by the auto pruning process. |
| `canceledAt` | `Any` | The time at which the release was canceled. |
| `commitSha` | `str` | The Git commit SHA associated with this release. |
| `completedAt` | `Any` | The time at which the release was completed. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `creator` | `dict` | The user who created the release. |
| `currentProgress` | `Any` | The current progress summary for the release, including counts of issues by workflow state type (e.g., completed, in progress, unstarted). |
| `description` | `str` | The description of the release in plain text or markdown. |
| `id` | `str` | The unique identifier of the entity. |
| `issueCount` | `int` | Number of issues associated with the release. |
| `name` | `str` | The name of the release. |
| `pipeline` | `dict` | The release pipeline that this release belongs to. |
| `progressHistory` | `Any` | The historical progress snapshots for the release, tracking how issue completion has evolved over time. |
| `releaseNote` | `dict` | [Internal] The primary release note covering this release. |
| `slugId` | `str` | The release's unique URL slug, used to construct human-readable URLs for the release. |
| `stage` | `dict` | The current stage of the release within its pipeline (e.g., Planned, In Progress, Completed, Canceled). |
| `startDate` | `Any` | The estimated start date of the release. |
| `startedAt` | `Any` | The time at which the release first entered a started stage. |
| `targetDate` | `Any` | The estimated completion date of the release. |
| `trashed` | `bool` | A flag that indicates whether the release is in the trash bin. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |
| `url` | `str` | The URL to the release page in the Linear app. |
| `version` | `str` | The version identifier for this release (e.g., 'v1.2.3' or a short commit hash). |

#### Example: Load

```python
release = client.Release().load({"id": "release_id"})
```

#### Example: List

```python
releases = client.Release().list()
```

#### Example: Create

```python
release = client.Release().create({
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


### ReleaseNote

Create an instance: `release_note = client.ReleaseNote()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `documentContent` | `dict` | Document content backing the release note body. |
| `firstRelease` | `dict` | The earliest release covered by this note. |
| `generationStatus` | `str` | Generation status when these release notes are being auto-generated: `pending` while the LLM call is running, `completed` once it lands. |
| `id` | `str` | The unique identifier of the entity. |
| `lastRelease` | `dict` | The most recent release covered by this note. |
| `pipeline` | `dict` | The release pipeline that this note belongs to. |
| `releaseCount` | `int` | The number of releases covered by this note. |
| `slugId` | `str` | The release note's unique URL slug, used to construct human-readable URLs for the note. |
| `title` | `str` | User-supplied title for the release note. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |
| `url` | `str` | The URL to the release note page in the Linear app. |

#### Example: Load

```python
release_note = client.ReleaseNote().load({"id": "release_note_id"})
```

#### Example: List

```python
release_notes = client.ReleaseNote().list()
```

#### Example: Create

```python
release_note = client.ReleaseNote().create({
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "releaseCount": 1,  # int
    "slugId": "example_slugId",  # str
    "updatedAt": "example_updatedAt",  # Any
    "url": "example_url",  # str
})
```


### ReleasePipeline

Create an instance: `release_pipeline = client.ReleasePipeline()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approximateReleaseCount` | `int` | The approximate number of non-archived releases in this pipeline. |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `autoGenerateReleaseNotesOnCompletion` | `bool` | Whether to automatically generate a release note when a release is completed. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `id` | `str` | The unique identifier of the entity. |
| `includePathPatterns` | `str` | Glob patterns to filter commits by file path. |
| `isProduction` | `bool` | Whether this pipeline targets a production environment. |
| `latestReleaseNote` | `dict` | The release note in this pipeline whose covered range ends with the most recent release. |
| `name` | `str` | The name of the pipeline. |
| `releaseNoteTemplate` | `dict` | The document template used to define the release notes format for this pipeline. |
| `rolloverIssuesOnCompletion` | `bool` | Whether completing a scheduled release moves its open issues to the next release. |
| `slugId` | `str` | The pipeline's unique slug identifier, used in URLs and for lookup by human-readable identifier instead of UUID. |
| `trashed` | `bool` | A flag that indicates whether the pipeline is in the trash bin. |
| `type` | `str` | The type of the pipeline, which determines how releases are created and managed. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |
| `url` | `str` | The URL to the release pipeline's releases list in the Linear app. |

#### Example: Load

```python
release_pipeline = client.ReleasePipeline().load({"id": "release_pipeline_id"})
```

#### Example: List

```python
release_pipelines = client.ReleasePipeline().list()
```

#### Example: Create

```python
release_pipeline = client.ReleasePipeline().create({
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


### ReleaseStage

Create an instance: `release_stage = client.ReleaseStage()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `color` | `str` | The display color of the stage as a HEX string (e.g., '#0f783c'), used for visual representation in the UI. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `frozen` | `bool` | Whether this stage is frozen. |
| `id` | `str` | The unique identifier of the entity. |
| `name` | `str` | The name of the stage. |
| `pipeline` | `dict` | The release pipeline that this stage belongs to. |
| `position` | `float` | The position of the stage within its pipeline, used for ordering stages in the UI. |
| `type` | `str` | The lifecycle type of the stage (planned, started, completed, or canceled). |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```python
release_stage = client.ReleaseStage().load({"id": "release_stage_id"})
```

#### Example: List

```python
release_stages = client.ReleaseStage().list()
```

#### Example: Create

```python
release_stage = client.ReleaseStage().create({
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


### Roadmap

Create an instance: `roadmap = client.Roadmap()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `color` | `str` | The roadmap's color. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `creator` | `dict` | The user who created the roadmap. |
| `description` | `str` | The description of the roadmap. |
| `id` | `str` | The unique identifier of the entity. |
| `name` | `str` | The name of the roadmap. |
| `organization` | `dict` | The workspace of the roadmap. |
| `owner` | `dict` | The user who owns the roadmap. |
| `slugId` | `str` | The roadmap's unique URL slug. |
| `sortOrder` | `float` | The sort order of the roadmap within the workspace. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |
| `url` | `str` | The canonical url for the roadmap. |

#### Example: Load

```python
roadmap = client.Roadmap().load({"id": "roadmap_id"})
```

#### Example: List

```python
roadmaps = client.Roadmap().list()
```

#### Example: Create

```python
roadmap = client.Roadmap().create({
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "name": "example_name",  # str
    "slugId": "example_slugId",  # str
    "sortOrder": 1,  # float
    "updatedAt": "example_updatedAt",  # Any
    "url": "example_url",  # str
})
```


### RoadmapToProject

Create an instance: `roadmap_to_project = client.RoadmapToProject()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `id` | `str` | The unique identifier of the entity. |
| `project` | `dict` | The project that the roadmap is associated with. |
| `roadmap` | `dict` | The roadmap that the project is associated with. |
| `sortOrder` | `str` | The sort order of the project within the roadmap. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```python
roadmap_to_project = client.RoadmapToProject().load({"id": "roadmap_to_project_id"})
```

#### Example: List

```python
roadmap_to_projects = client.RoadmapToProject().list()
```

#### Example: Create

```python
roadmap_to_project = client.RoadmapToProject().create({
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "sortOrder": "example_sortOrder",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```


### SlaConfiguration

Create an instance: `sla_configuration = client.SlaConfiguration()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conditions` | `Any` | The workflow conditions that determine when this SLA rule applies. |
| `id` | `str` | The identifier of the SLA rule. |
| `name` | `str` | The name of the SLA rule. |
| `removesSla` | `bool` | Whether the rule removes an SLA instead of setting one. |
| `sla` | `float` | The SLA value configured by the rule, expressed in milliseconds or business days depending on the day-count type. |
| `slaType` | `str` | The SLA type used when the rule sets an SLA. |
| `startMode` | `str` | When SLA timing begins. |

#### Example: List

```python
sla_configurations = client.SlaConfiguration().list({"team_id": "example"})
```


### SsoUrlFromEmailResponse

Create an instance: `sso_url_from_email_response = client.SsoUrlFromEmailResponse()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `samlSsoUrl` | `str` | SAML SSO sign-in URL. |
| `success` | `bool` | Whether the operation was successful. |

#### Example: Load

```python
sso_url_from_email_response = client.SsoUrlFromEmailResponse().load({"email": "email", "type": "type"})
```


### Team

Create an instance: `team = client.Team()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activeCycle` | `dict` | Team's currently active cycle. |
| `aiDiscussionSummariesEnabled` | `bool` | Whether to enable AI discussion summaries for issues in this team. |
| `aiThreadSummariesEnabled` | `bool` | Whether to enable resolved thread AI summaries. |
| `allMembersCanJoin` | `bool` | Whether all members in the workspace can join the team. |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `autoArchivePeriod` | `float` | Period after which automatically closed, completed, and duplicate issues are automatically archived in months. |
| `autoCloseChildIssues` | `bool` | Whether child issues should automatically close when their parent issue is closed |
| `autoCloseParentIssues` | `bool` | Whether parent issues should automatically close when all child issues are closed |
| `autoClosePeriod` | `float` | Period after which issues are automatically closed in months. |
| `autoCloseStateId` | `str` | The canceled workflow state which auto closed issues will be set to. |
| `color` | `str` | The team's color. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `currentProgress` | `Any` | [Internal] The current progress of the team. |
| `cycleCalenderUrl` | `str` | Calendar feed URL (iCal) for cycles. |
| `cycleCooldownTime` | `float` | The cooldown time after each cycle in weeks. |
| `cycleDuration` | `float` | The duration of each cycle in weeks. |
| `cycleIssueAutoAssignCompleted` | `bool` | Auto assign completed issues to current cycle. |
| `cycleIssueAutoAssignStarted` | `bool` | Auto assign started issues to current cycle. |
| `cycleLockToActive` | `bool` | Auto assign issues to current cycle if in active status. |
| `cycleStartDay` | `float` | The day of the week that a new cycle starts (0 = Sunday, 1 = Monday, ..., 6 = Saturday). |
| `cyclesEnabled` | `bool` | Whether the team uses cycles for sprint-style issue management. |
| `defaultIssueEstimate` | `float` | What to use as a default estimate for unestimated issues. |
| `defaultIssueState` | `dict` | The default workflow state into which issues are set when they are opened by team members. |
| `defaultProjectTemplate` | `dict` | The default template to use for new projects created for the team. |
| `defaultTemplateForMembers` | `dict` | The default template to use for new issues created by members of the team. |
| `defaultTemplateForNonMembers` | `dict` | The default template to use for new issues created by non-members of the team. |
| `description` | `str` | The team's description. |
| `displayName` | `str` | The name of the team including its parent team name if it has one. |
| `groupIssueHistory` | `bool` | Whether to group recent issue history entries. |
| `icon` | `str` | The icon of the team. |
| `id` | `str` | The unique identifier of the entity. |
| `inheritIssueEstimation` | `bool` | Whether the team should inherit its estimation settings from its parent. |
| `inheritProjectStatuses` | `bool` | [Internal] Whether the team should inherit its project statuses from its parent team, or from the workspace when it has no parent. |
| `inheritSlackAutoCreateProjectChannel` | `bool` | [Internal] Whether the team should inherit its Slack auto-create project channel setting from its parent. |
| `inheritWorkflowStatuses` | `bool` | Whether the team should inherit its workflow statuses from its parent. |
| `initiativesEnabled` | `bool` | Whether team initiatives are enabled and shown in the team's sidebar. |
| `integrationsSettings` | `dict` | Settings for all integrations associated with that team. |
| `issueCount` | `int` | The total number of issues in the team. |
| `issueEstimationAllowZero` | `bool` | Whether to allow zeros in issues estimates. |
| `issueEstimationExtended` | `bool` | Whether to add additional points to the estimate scale. |
| `issueEstimationType` | `str` | The issue estimation type to use. |
| `joinByDefault` | `bool` | [Internal] Whether new users should join this team by default. |
| `key` | `str` | The team's unique key, used as a prefix in issue identifiers (e.g., 'ENG' in 'ENG-123') and in URLs. |
| `ledInitiativeCount` | `int` | The number of initiatives led by this team that would be deleted along with it. |
| `name` | `str` | The team's name. |
| `organization` | `dict` | The workspace that the team belongs to. |
| `parent` | `dict` | The team's parent team. |
| `progressHistory` | `Any` | [Internal] The progress history of the team. |
| `requirePriorityToLeaveTriage` | `bool` | Whether an issue needs to have a priority set before leaving triage. |
| `restrictedBy` | `dict` | [Internal] For restricted teams, the enclosing private team that forms the visibility boundary. |
| `restrictedById` | `str` | [Internal] The identifier of the enclosing private team that forms the visibility boundary for restricted teams. |
| `retiredAt` | `Any` | The time at which the team was retired. |
| `scimGroupName` | `str` | The SCIM group name for the team. |
| `scimManaged` | `bool` | Whether the team is managed by a SCIM integration. |
| `securitySettings` | `Any` | Security settings for the team, including role-based restrictions for issue sharing, label management, member management, template management, and agent skills. |
| `setIssueSortOrderOnStateChange` | `str` | Where to move issues when changing state. |
| `slackAutoCreateProjectChannel` | `bool` | [Internal] Whether to automatically create a Slack channel when a new project is created in this team. |
| `timezone` | `str` | The timezone of the team. |
| `triageEnabled` | `bool` | Whether triage mode is enabled for the team. |
| `triageIssueState` | `dict` | The workflow state into which issues are set when they are opened by non-team members or integrations if triage is enabled. |
| `triageResponsibility` | `dict` | Team's triage responsibility. |
| `upcomingCycleCount` | `float` | How many upcoming cycles to create. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |
| `visibility` | `str` | The visibility of the team. |

#### Example: Load

```python
team = client.Team().load({"id": "team_id"})
```

#### Example: List

```python
teams = client.Team().list()
```

#### Example: Create

```python
team = client.Team().create({
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


### TeamMembership

Create an instance: `team_membership = client.TeamMembership()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `id` | `str` | The unique identifier of the entity. |
| `owner` | `bool` | Whether the user is an owner of the team. |
| `sortOrder` | `float` | The sort order of this team in the user's personal team list. |
| `team` | `dict` | The team that the membership is associated with. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |
| `user` | `dict` | The user that the membership is associated with. |

#### Example: Load

```python
team_membership = client.TeamMembership().load({"id": "team_membership_id"})
```

#### Example: List

```python
team_memberships = client.TeamMembership().list()
```

#### Example: Create

```python
team_membership = client.TeamMembership().create({
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "owner": True,  # bool
    "sortOrder": 1,  # float
    "updatedAt": "example_updatedAt",  # Any
})
```


### Template

Create an instance: `template = client.Template()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `color` | `str` | The hex color of the template icon. |
| `content` | `str` | The template's content in markdown format: the body it pre-fills on the entity it creates. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `creator` | `dict` | The user who created the template. |
| `description` | `str` | A description of what the template is used for. |
| `hasFormFields` | `bool` | [Internal] Whether the template has form fields |
| `icon` | `str` | The icon of the template, either a decorative icon type or an emoji string. |
| `id` | `str` | The unique identifier of the entity. |
| `inheritedFrom` | `dict` | The parent team template this template was inherited from. |
| `lastAppliedAt` | `Any` | The date when the template was last applied to create or update an entity. |
| `lastUpdatedBy` | `dict` | The user who last updated the template. |
| `name` | `str` | The name of the template. |
| `organization` | `dict` | The workspace that owns this template. |
| `pipeline` | `dict` | The release pipeline this template is bound to. |
| `sortOrder` | `float` | The sort order of the template within the templates list. |
| `team` | `dict` | The team that the template is associated with. |
| `templateData` | `Any` | The template data as a JSON-encoded string containing the pre-filled attributes for the entity type (e.g., issue fields, project configuration, or document content). |
| `type` | `str` | The entity type this template is for, such as 'issue', 'project', or 'document'. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```python
template = client.Template().load({"id": "template_id"})
```

#### Example: List

```python
templates = client.Template().list()
```

#### Example: Create

```python
template = client.Template().create({
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


### TimeSchedule

Create an instance: `time_schedule = client.TimeSchedule()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `externalId` | `str` | The identifier of the external schedule. |
| `externalUrl` | `str` | The URL to the external schedule. |
| `id` | `str` | The unique identifier of the entity. |
| `integration` | `dict` | The identifier of the Linear integration populating the schedule. |
| `name` | `str` | The name of the schedule. |
| `organization` | `dict` | The workspace of the schedule. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```python
time_schedule = client.TimeSchedule().load({"id": "time_schedule_id"})
```

#### Example: List

```python
time_schedules = client.TimeSchedule().list()
```

#### Example: Create

```python
time_schedule = client.TimeSchedule().create({
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "name": "example_name",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```


### TriageResponsibility

Create an instance: `triage_responsibility = client.TriageResponsibility()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `str` | The action to take when an issue is added to triage. |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `currentUser` | `dict` | The user currently responsible for triage. |
| `id` | `str` | The unique identifier of the entity. |
| `team` | `dict` | The team to which the triage responsibility belongs to. |
| `timeSchedule` | `dict` | The time schedule used for scheduling. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```python
triage_responsibility = client.TriageResponsibility().load({"id": "triage_responsibility_id"})
```

#### Example: List

```python
triage_responsibilitys = client.TriageResponsibility().list()
```

#### Example: Create

```python
triage_responsibility = client.TriageResponsibility().create({
    "action": "example_action",  # str
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```


### UploadFile

Create an instance: `upload_file = client.UploadFile()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assetUrl` | `str` | The permanent asset URL where the file will be accessible after upload. |
| `contentType` | `str` | The content type. |
| `filename` | `str` | The filename. |
| `metaData` | `Any` | Optional metadata associated with the upload, such as the related issue or comment ID. |
| `size` | `int` | The size of the uploaded file. |
| `uploadUrl` | `str` | The pre-signed URL to which the file should be uploaded via a PUT request. |

#### Example: Create

```python
upload_file = client.UploadFile().create({
    "content_type": "example_content_type",  # str
    "filename": "example_filename",  # str
    "size": 1,  # int
    "assetUrl": "example_assetUrl",  # str
    "contentType": "example_contentType",  # str
    "uploadUrl": "example_uploadUrl",  # str
})
```


### UsageAlert

Create an instance: `usage_alert = client.UsageAlert()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `id` | `str` | The unique identifier of the entity. |
| `metadata` | `Any` | Type-specific snapshot captured when the alert was triggered, keyed by the alert type — for example the credit balance and threshold for a lowBalance alert. |
| `resolvedAt` | `Any` | The time when the usage alert was resolved or archived. |
| `type` | `str` | The kind of usage alert that was triggered. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```python
usage_alert = client.UsageAlert().load({"id": "usage_alert_id"})
```

#### Example: List

```python
usage_alerts = client.UsageAlert().list()
```


### User

Create an instance: `user = client.User()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | Whether the user account is active or disabled (suspended). |
| `admin` | `bool` | Whether the user is a workspace administrator. |
| `app` | `bool` | Whether the user is an app. |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `avatarBackgroundColor` | `str` | The background color of the avatar for users without set avatar. |
| `avatarUrl` | `str` | An URL to the user's avatar image. |
| `calendarHash` | `str` | [DEPRECATED] Hash for the user to be used in calendar URLs. |
| `canAccessAnyPublicTeam` | `bool` | Whether this user can access any public team in the workspace. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `createdIssueCount` | `int` | Number of issues created. |
| `description` | `str` | A short description of the user, such as their title or a brief bio. |
| `disableReason` | `str` | The reason why the user account is disabled. |
| `displayName` | `str` | The user's display (nick) name. |
| `email` | `str` | The user's email address. |
| `gitHubUserId` | `str` | The user's GitHub user ID. |
| `guest` | `bool` | Whether the user is a guest in the workspace and limited to accessing a subset of teams. |
| `hasGitHubCodeAccess` | `bool` | [Internal] Whether this user can access GitHub source code through Linear. |
| `id` | `str` | The unique identifier of the entity. |
| `identityProvider` | `dict` | [INTERNAL] Identity provider the user is managed by. |
| `initials` | `str` | The initials of the user. |
| `isAssignable` | `bool` | Whether the user can be assigned to issues. |
| `isMe` | `bool` | Whether the user is the currently authenticated user. |
| `isMentionable` | `bool` | Whether the user is mentionable. |
| `lastSeen` | `Any` | The last time the user was seen online. |
| `name` | `str` | The user's full name. |
| `organization` | `dict` | The workspace that the user belongs to. |
| `owner` | `bool` | Whether the user is a workspace owner, which is the highest permission level. |
| `statusEmoji` | `str` | The emoji representing the user's current status. |
| `statusLabel` | `str` | The text label of the user's current status. |
| `statusUntilAt` | `Any` | The date and time at which the user's current status should be automatically cleared. |
| `supportsAgentSessions` | `bool` | Whether this agent user supports agent sessions. |
| `timezone` | `str` | The local timezone of the user. |
| `title` | `str` | The user's job title. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |
| `url` | `str` | User's profile URL. |

#### Example: Load

```python
user = client.User().load({"id": "user_id"})
```

#### Example: List

```python
users = client.User().list()
```

#### Example: Create

```python
user = client.User().create({
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


### UserSetting

Create an instance: `user_setting = client.UserSetting()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `autoAssignToSelf` | `bool` | Whether to auto-assign newly created issues to the current user by default. |
| `calendarHash` | `str` | A unique hash for the user, used to construct secure calendar subscription URLs. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `feedLastSeenTime` | `Any` | The user's last seen time for the pulse feed. |
| `feedSummarySchedule` | `str` | The user's preferred schedule for receiving feed summary digests. |
| `id` | `str` | The unique identifier of the entity. |
| `pullRequestMergeStrategyPreference` | `str` | [Internal] The user's preferred merge method for pull requests. |
| `showFullUserNames` | `bool` | Whether to show full user names instead of display names. |
| `subscribedToChangelog` | `bool` | Whether this user is subscribed to receive changelog emails about Linear product updates. |
| `subscribedToDPA` | `bool` | Whether this user is subscribed to receive Data Processing Agreement (DPA) related emails. |
| `subscribedToInviteAccepted` | `bool` | Whether this user is subscribed to receive email notifications when their workspace invitations are accepted. |
| `subscribedToPrivacyLegalUpdates` | `bool` | Whether this user is subscribed to receive emails about privacy policy and legal updates. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |
| `user` | `dict` | The user that these settings belong to. |

#### Example: Load

```python
user_setting = client.UserSetting().load({"id": "user_setting_id"})
```

#### Example: Create

```python
user_setting = client.UserSetting().create({
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


### ViewPreference

Create an instance: `view_preference = client.ViewPreference()`

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
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `id` | `str` | The unique identifier of the entity. |
| `type` | `str` | The type of view preferences: "organization" for workspace-wide defaults or "user" for personal overrides. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |
| `viewType` | `str` | The type of view these preferences apply to, such as board, cycle, project, customView, myIssues, etc. |

#### Example: Load

```python
view_preference = client.ViewPreference().load({"view_type": "view_type"})
```

#### Example: Create

```python
view_preference = client.ViewPreference().create({
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "type": "example_type",  # str
    "updatedAt": "example_updatedAt",  # Any
    "viewType": "example_viewType",  # str
})
```


### Webhook

Create an instance: `webhook = client.Webhook()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allPublicTeams` | `bool` | Whether the webhook receives events from all public (non-private) teams in the organization, including teams created after the webhook was set up. |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `creator` | `dict` | The user who created the webhook. |
| `enabled` | `bool` | Whether the webhook is enabled. |
| `id` | `str` | The unique identifier of the entity. |
| `label` | `str` | A human-readable label for the webhook, used for identification in the UI. |
| `resourceTypes` | `str` | The resource types this webhook is subscribed to (e.g., 'Issue', 'Comment', 'Project', 'Cycle'). |
| `secret` | `str` | A secret token used to sign webhook payloads with HMAC-SHA256, allowing the recipient to verify that the payload originated from Linear and was not tampered with. |
| `team` | `dict` | The single team that the webhook is scoped to. |
| `teamIds` | `str` | [INTERNAL] An array of team IDs that the webhook is subscribed to. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |
| `url` | `str` | The destination URL where webhook payloads will be sent via HTTP POST. |

#### Example: Load

```python
webhook = client.Webhook().load({"id": "webhook_id"})
```

#### Example: List

```python
webhooks = client.Webhook().list()
```

#### Example: Create

```python
webhook = client.Webhook().create({
    "allPublicTeams": True,  # bool
    "createdAt": "example_createdAt",  # Any
    "enabled": True,  # bool
    "id": "example_id",  # str
    "resourceTypes": "example_resourceTypes",  # str
    "updatedAt": "example_updatedAt",  # Any
})
```


### WebhookFailureEvent

Create an instance: `webhook_failure_event = client.WebhookFailureEvent()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `Any` | The time at which the entity was created. |
| `executionId` | `str` | A stable identifier for the webhook delivery attempt. |
| `httpStatus` | `float` | The HTTP status code returned by the webhook recipient. |
| `id` | `str` | The unique identifier of the entity. |
| `responseOrError` | `str` | The HTTP response body returned by the recipient, or the error message if the request failed before receiving a response. |
| `url` | `str` | The URL that the webhook was trying to push to. |
| `webhook` | `dict` | The webhook that this failure event is associated with. |

#### Example: List

```python
webhook_failure_events = client.WebhookFailureEvent().list()
```


### WorkflowState

Create an instance: `workflow_state = client.WorkflowState()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `Any` | The time at which the entity was archived. |
| `color` | `str` | The state's UI color as a HEX string. |
| `createdAt` | `Any` | The time at which the entity was created. |
| `description` | `str` | Description of the state. |
| `id` | `str` | The unique identifier of the entity. |
| `inheritedFrom` | `dict` | The parent team's workflow state that this state was inherited from. |
| `name` | `str` | The state's human-readable name (e.g., 'In Progress', 'Done', 'Backlog'). |
| `position` | `float` | The position of the state in the team's workflow. |
| `team` | `dict` | The team that this workflow state belongs to. |
| `type` | `str` | The type of the state. |
| `updatedAt` | `Any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```python
workflow_state = client.WorkflowState().load({"id": "workflow_state_id"})
```

#### Example: List

```python
workflow_states = client.WorkflowState().list()
```

#### Example: Create

```python
workflow_state = client.WorkflowState().create({
    "color": "example_color",  # str
    "createdAt": "example_createdAt",  # Any
    "id": "example_id",  # str
    "name": "example_name",  # str
    "position": 1,  # float
    "type": "example_type",  # str
    "updatedAt": "example_updatedAt",  # Any
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
| [`debug`](#debug) | Debug capture |
| [`idempotency`](#idempotency) | Idempotency |
| [`metrics`](#metrics) | Metrics |
| [`paging`](#paging) | Paging |
| [`ratelimit`](#ratelimit) | Rate limiting |
| [`retry`](#retry) | Retry |
| [`test`](#test) | Test transport |
| [`timeout`](#timeout) | Timeout |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### debug

Debug capture.

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

Set `feature.debug.active` to enable it, then override any of the options above.

### idempotency

Idempotency.

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

Set `feature.idempotency.active` to enable it, then override any of the options above.

### metrics

Metrics.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.metrics.active` to enable it, then override any of the options above.

### paging

Paging.

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

Rate limiting.

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

Retry.

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

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Timeout.

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

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **DebugFeature**: Debug capture
- **IdempotencyFeature**: Idempotency
- **MetricsFeature**: Metrics
- **PagingFeature**: Paging
- **RatelimitFeature**: Rate limiting
- **RetryFeature**: Retry
- **TestFeature**: Test transport
- **TimeoutFeature**: Timeout

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── linear_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── schema.py                    -- Generated option + entity specs
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`linear_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```python
agentactivity = client.AgentActivity()
agentactivity.list()

# agentactivity.data_get() now returns the agentactivity data from the last list
# agentactivity.match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
