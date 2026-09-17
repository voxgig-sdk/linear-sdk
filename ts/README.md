# Linear TypeScript SDK



The TypeScript SDK for the Linear API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.AccessKeyRelease()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `c`, `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/linear-sdk/releases](https://github.com/voxgig-sdk/linear-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { LinearSDK } from '@voxgig-sdk/linear'

const client = new LinearSDK({
  apikey: process.env.LINEAR_APIKEY,
})
```

### 2. List accesskeyrelease records

`list()` resolves to an array of AccessKeyRelease ENTITIES — every operation
resolves to entities, not raw records. Iterate them directly, and call
`.data()` on one for the record it holds:

```ts
const accesskeyreleases = await client.AccessKeyRelease().list()

for (const accesskeyrelease of accesskeyreleases) {
  console.log(accesskeyrelease)
}
```

### 3. Load an accesskeyrelease

`load()` returns the entity directly and throws on failure:

```ts
try {
  const accesskeyrelease = await client.AccessKeyRelease().load({ id: 'example_id' })
  console.log(accesskeyrelease)
} catch (err) {
  console.error('load failed:', err)
}
```

### 4. Create, update, and remove

```ts
// Create — returns the created AccessKeyRelease ENTITY (.data() for the record)
const created = await client.AccessKeyRelease().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  name: 'example_name',
  url: 'example_url',
})

```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const agentactivitys = await client.AgentActivity().list()
  console.log(agentactivitys)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = LinearSDK.test()

const agentactivity = await client.AgentActivity().list()
// agentactivity is the entity, populated with mock response data
// — call agentactivity.data() for the record itself
console.log(agentactivity)
```

You can also use the instance method:

```ts
const client = new LinearSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.AgentActivity()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new LinearSDK({
  apikey: '...',
  extend: [logger],
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
cd ts && npm test
```

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


## Reference

### LinearSDK

#### Constructor

```ts
new LinearSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `AccessKeyRelease(data?)` | `AccessKeyReleaseEntity` | Create an AccessKeyRelease entity instance. |
| `AccessKeyReleasePipeline(data?)` | `AccessKeyReleasePipelineEntity` | Create an AccessKeyReleasePipeline entity instance. |
| `AgentActivity(data?)` | `AgentActivityEntity` | Create an AgentActivity entity instance. |
| `AgentSession(data?)` | `AgentSessionEntity` | Create an AgentSession entity instance. |
| `AgentSkill(data?)` | `AgentSkillEntity` | Create an AgentSkill entity instance. |
| `Application(data?)` | `ApplicationEntity` | Create an Application entity instance. |
| `Attachment(data?)` | `AttachmentEntity` | Create an Attachment entity instance. |
| `AuditEntry(data?)` | `AuditEntryEntity` | Create an AuditEntry entity instance. |
| `AuditEntryType(data?)` | `AuditEntryTypeEntity` | Create an AuditEntryType entity instance. |
| `AuthResolverResponse(data?)` | `AuthResolverResponseEntity` | Create an AuthResolverResponse entity instance. |
| `AuthenticationSessionResponse(data?)` | `AuthenticationSessionResponseEntity` | Create an AuthenticationSessionResponse entity instance. |
| `Comment(data?)` | `CommentEntity` | Create a Comment entity instance. |
| `CreateOrJoinOrganizationResponse(data?)` | `CreateOrJoinOrganizationResponseEntity` | Create a CreateOrJoinOrganizationResponse entity instance. |
| `CustomView(data?)` | `CustomViewEntity` | Create a CustomView entity instance. |
| `Customer(data?)` | `CustomerEntity` | Create a Customer entity instance. |
| `CustomerNeed(data?)` | `CustomerNeedEntity` | Create a CustomerNeed entity instance. |
| `CustomerStatus(data?)` | `CustomerStatusEntity` | Create a CustomerStatus entity instance. |
| `CustomerTier(data?)` | `CustomerTierEntity` | Create a CustomerTier entity instance. |
| `Cycle(data?)` | `CycleEntity` | Create a Cycle entity instance. |
| `Diff(data?)` | `DiffEntity` | Create a Diff entity instance. |
| `Document(data?)` | `DocumentEntity` | Create a Document entity instance. |
| `DocumentSearchResult(data?)` | `DocumentSearchResultEntity` | Create a DocumentSearchResult entity instance. |
| `EmailIntakeAddress(data?)` | `EmailIntakeAddressEntity` | Create an EmailIntakeAddress entity instance. |
| `EmailUserAccountAuthChallengeResponse(data?)` | `EmailUserAccountAuthChallengeResponseEntity` | Create an EmailUserAccountAuthChallengeResponse entity instance. |
| `Emoji(data?)` | `EmojiEntity` | Create an Emoji entity instance. |
| `EntityExternalLink(data?)` | `EntityExternalLinkEntity` | Create an EntityExternalLink entity instance. |
| `ExternalUser(data?)` | `ExternalUserEntity` | Create an ExternalUser entity instance. |
| `Favorite(data?)` | `FavoriteEntity` | Create a Favorite entity instance. |
| `GitAutomationState(data?)` | `GitAutomationStateEntity` | Create a GitAutomationState entity instance. |
| `GitAutomationTargetBranch(data?)` | `GitAutomationTargetBranchEntity` | Create a GitAutomationTargetBranch entity instance. |
| `GitHubIntegrationConnectDetail(data?)` | `GitHubIntegrationConnectDetailEntity` | Create a GitHubIntegrationConnectDetail entity instance. |
| `Initiative(data?)` | `InitiativeEntity` | Create an Initiative entity instance. |
| `InitiativeLabel(data?)` | `InitiativeLabelEntity` | Create an InitiativeLabel entity instance. |
| `InitiativeLeadTeamChangeImpact(data?)` | `InitiativeLeadTeamChangeImpactEntity` | Create an InitiativeLeadTeamChangeImpact entity instance. |
| `InitiativeRelation(data?)` | `InitiativeRelationEntity` | Create an InitiativeRelation entity instance. |
| `InitiativeToProject(data?)` | `InitiativeToProjectEntity` | Create an InitiativeToProject entity instance. |
| `InitiativeUpdate(data?)` | `InitiativeUpdateEntity` | Create an InitiativeUpdate entity instance. |
| `Integration(data?)` | `IntegrationEntity` | Create an Integration entity instance. |
| `IntegrationTemplate(data?)` | `IntegrationTemplateEntity` | Create an IntegrationTemplate entity instance. |
| `IntegrationsSetting(data?)` | `IntegrationsSettingEntity` | Create an IntegrationsSetting entity instance. |
| `Issue(data?)` | `IssueEntity` | Create an Issue entity instance. |
| `IssueImport(data?)` | `IssueImportEntity` | Create an IssueImport entity instance. |
| `IssueLabel(data?)` | `IssueLabelEntity` | Create an IssueLabel entity instance. |
| `IssuePriorityValue(data?)` | `IssuePriorityValueEntity` | Create an IssuePriorityValue entity instance. |
| `IssueRelation(data?)` | `IssueRelationEntity` | Create an IssueRelation entity instance. |
| `IssueSearchResult(data?)` | `IssueSearchResultEntity` | Create an IssueSearchResult entity instance. |
| `IssueToRelease(data?)` | `IssueToReleaseEntity` | Create an IssueToRelease entity instance. |
| `LogoutResponse(data?)` | `LogoutResponseEntity` | Create a LogoutResponse entity instance. |
| `Notification(data?)` | `NotificationEntity` | Create a Notification entity instance. |
| `NotificationSubscription(data?)` | `NotificationSubscriptionEntity` | Create a NotificationSubscription entity instance. |
| `OAuthApplication(data?)` | `OAuthApplicationEntity` | Create an OAuthApplication entity instance. |
| `Organization(data?)` | `OrganizationEntity` | Create an Organization entity instance. |
| `OrganizationDomain(data?)` | `OrganizationDomainEntity` | Create an OrganizationDomain entity instance. |
| `OrganizationInvite(data?)` | `OrganizationInviteEntity` | Create an OrganizationInvite entity instance. |
| `OrganizationMeta(data?)` | `OrganizationMetaEntity` | Create an OrganizationMeta entity instance. |
| `PasskeyLoginStartResponse(data?)` | `PasskeyLoginStartResponseEntity` | Create a PasskeyLoginStartResponse entity instance. |
| `Project(data?)` | `ProjectEntity` | Create a Project entity instance. |
| `ProjectLabel(data?)` | `ProjectLabelEntity` | Create a ProjectLabel entity instance. |
| `ProjectMilestone(data?)` | `ProjectMilestoneEntity` | Create a ProjectMilestone entity instance. |
| `ProjectMilestoneMoveProjectTeam(data?)` | `ProjectMilestoneMoveProjectTeamEntity` | Create a ProjectMilestoneMoveProjectTeam entity instance. |
| `ProjectRelation(data?)` | `ProjectRelationEntity` | Create a ProjectRelation entity instance. |
| `ProjectSearchResult(data?)` | `ProjectSearchResultEntity` | Create a ProjectSearchResult entity instance. |
| `ProjectStatus(data?)` | `ProjectStatusEntity` | Create a ProjectStatus entity instance. |
| `ProjectUpdate(data?)` | `ProjectUpdateEntity` | Create a ProjectUpdate entity instance. |
| `PushSubscription(data?)` | `PushSubscriptionEntity` | Create a PushSubscription entity instance. |
| `Reaction(data?)` | `ReactionEntity` | Create a Reaction entity instance. |
| `Release(data?)` | `ReleaseEntity` | Create a Release entity instance. |
| `ReleaseNote(data?)` | `ReleaseNoteEntity` | Create a ReleaseNote entity instance. |
| `ReleasePipeline(data?)` | `ReleasePipelineEntity` | Create a ReleasePipeline entity instance. |
| `ReleaseStage(data?)` | `ReleaseStageEntity` | Create a ReleaseStage entity instance. |
| `Roadmap(data?)` | `RoadmapEntity` | Create a Roadmap entity instance. |
| `RoadmapToProject(data?)` | `RoadmapToProjectEntity` | Create a RoadmapToProject entity instance. |
| `SlaConfiguration(data?)` | `SlaConfigurationEntity` | Create a SlaConfiguration entity instance. |
| `SsoUrlFromEmailResponse(data?)` | `SsoUrlFromEmailResponseEntity` | Create a SsoUrlFromEmailResponse entity instance. |
| `Team(data?)` | `TeamEntity` | Create a Team entity instance. |
| `TeamMembership(data?)` | `TeamMembershipEntity` | Create a TeamMembership entity instance. |
| `Template(data?)` | `TemplateEntity` | Create a Template entity instance. |
| `TimeSchedule(data?)` | `TimeScheduleEntity` | Create a TimeSchedule entity instance. |
| `TriageResponsibility(data?)` | `TriageResponsibilityEntity` | Create a TriageResponsibility entity instance. |
| `UploadFile(data?)` | `UploadFileEntity` | Create an UploadFile entity instance. |
| `UsageAlert(data?)` | `UsageAlertEntity` | Create an UsageAlert entity instance. |
| `User(data?)` | `UserEntity` | Create an User entity instance. |
| `UserSetting(data?)` | `UserSettingEntity` | Create an UserSetting entity instance. |
| `ViewPreference(data?)` | `ViewPreferenceEntity` | Create a ViewPreference entity instance. |
| `Webhook(data?)` | `WebhookEntity` | Create a Webhook entity instance. |
| `WebhookFailureEvent(data?)` | `WebhookFailureEventEntity` | Create a WebhookFailureEvent entity instance. |
| `WorkflowState(data?)` | `WorkflowStateEntity` | Create a WorkflowState entity instance. |
| `tester(testopts?, sdkopts?)` | `LinearSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `LinearSDK.test(testopts?, sdkopts?)` | `LinearSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): LinearSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

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

Operations: create, list, load.

API path: `releaseCompleteByAccessKey`

#### AccessKeyReleasePipeline

| Field | Description |
| --- | --- |
| `id` | The unique identifier of the release pipeline. |
| `includePathPatterns` | Glob patterns used to filter commits by changed file path. |

Operations: load.

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

Operations: create, list, load, update.

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

Operations: create, list, load, update.

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

Operations: create, list, load, remove, update.

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

Operations: load.

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

Operations: create, list, load, remove, update.

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

Operations: list.

API path: `auditEntries`

#### AuditEntryType

| Field | Description |
| --- | --- |
| `description` | Description of the audit entry type. |
| `type` | The audit entry type. |

Operations: list.

API path: `auditEntryTypes`

#### AuthResolverResponse

| Field | Description |
| --- | --- |
| `allowDomainAccess` | Should the signup flow allow access for the domain. |
| `email` | Email for the authenticated account. |
| `id` | User account ID. |
| `lastUsedOrganizationId` | ID of the organization last accessed by the user. |
| `service` | The authentication service used for the current session (e.g., google, email, saml). |

Operations: create, load, update.

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

Operations: list.

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

Operations: create, list, load, remove, update.

API path: `commentCreate`

#### CreateOrJoinOrganizationResponse

| Field | Description |
| --- | --- |
| `organization` | The workspace that was created or joined. |
| `user` | The user who created or joined the workspace. |

Operations: create, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, update.

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

Operations: load.

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

Operations: create, list, load, remove, update.

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

Operations: list.

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

Operations: create, load, remove, update.

API path: `emailIntakeAddressCreate`

#### EmailUserAccountAuthChallengeResponse

| Field | Description |
| --- | --- |
| `authType` | Supported challenge for this user account. |
| `success` | Whether the operation was successful. |

Operations: create.

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

Operations: create, list, load, remove.

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

Operations: create, load, remove, update.

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

Operations: list, load.

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

Operations: create, list, load, remove, update.

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

Operations: create, remove, update.

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

Operations: create, remove, update.

API path: `gitAutomationTargetBranchCreate`

#### GitHubIntegrationConnectDetail

| Field | Description |
| --- | --- |
| `lostRepositoryNames` | Full names ('owner/repo') of repositories whose existing GitHub Issues sync mappings would become inaccessible if the new GitHub App installation replaces the existing one. |

Operations: create, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

API path: `initiativeLabelCreate`

#### InitiativeLeadTeamChangeImpact

| Field | Description |
| --- | --- |
| `affectedDescendantCount` | The number of editable matching sub-initiatives whose lead team would change if the update is applied to descendants. |
| `id` |  |
| `visibilityMayChange` | Whether the changed initiatives may gain or lose access restrictions because the current or next lead team is not public. |

Operations: load.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove.

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

Operations: create, load, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, remove, update.

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

Operations: create, list, load, remove, update.

API path: `issueLabelCreate`

#### IssuePriorityValue

| Field | Description |
| --- | --- |
| `label` | Priority's label. |
| `priority` | Priority's number value. |

Operations: list.

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

Operations: create, list, load, remove, update.

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

Operations: list.

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

Operations: create, list, load, remove.

API path: `issueToReleaseCreate`

#### LogoutResponse

| Field | Description |
| --- | --- |
| `success` | Whether the operation was successful. |

Operations: create, update.

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

Operations: list, load.

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

Operations: list, load.

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

Operations: create, list, load, update.

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

Operations: load, remove, update.

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

Operations: create, remove, update.

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

Operations: create, list, load, remove, update.

API path: `organizationInviteCreate`

#### OrganizationMeta

| Field | Description |
| --- | --- |
| `allowedAuthServices` | Allowed authentication providers, empty array means all are allowed. |
| `region` | The region the workspace is hosted in. |

Operations: load.

API path: `organizationMeta`

#### PasskeyLoginStartResponse

| Field | Description |
| --- | --- |
| `options` | The passkey authentication options to pass to the WebAuthn API. |
| `success` | Whether the operation was successful. |

Operations: update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

API path: `projectMilestoneCreate`

#### ProjectMilestoneMoveProjectTeam

| Field | Description |
| --- | --- |
| `id` |  |
| `projectId` | The project id |
| `teamIds` | The team ids for the project |

Operations: update.

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

Operations: create, list, load, remove, update.

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

Operations: list.

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

Operations: create, list, load, update.

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

Operations: create, list, load, remove, update.

API path: `projectUpdateCreate`

#### PushSubscription

| Field | Description |
| --- | --- |
| `archivedAt` | The time at which the entity was archived. |
| `createdAt` | The time at which the entity was created. |
| `id` | The unique identifier of the entity. |
| `updatedAt` | The last time at which the entity was meaningfully updated. |

Operations: create, remove.

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

Operations: create, remove.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: list.

API path: `slaConfigurations`

#### SsoUrlFromEmailResponse

| Field | Description |
| --- | --- |
| `samlSsoUrl` | SAML SSO sign-in URL. |
| `success` | Whether the operation was successful. |

Operations: load.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create.

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

Operations: list, load.

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

Operations: create, list, load, update.

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

Operations: create, load, update.

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

Operations: create, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: list.

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

Operations: create, list, load, update.

API path: `workflowStateCreate`



## Entities


### AccessKeyRelease

Create an instance: `const access_key_release = client.AccessKeyRelease()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the release was archived. |
| `commitSha` | `string` | The Git commit SHA associated with the release. |
| `completedAt` | `any` | The time at which the release was completed. |
| `createdAt` | `any` | The time at which the release was created. |
| `id` | `string` | The unique identifier of the release. |
| `name` | `string` | The name of the release. |
| `url` | `string` | The URL to the release page in the Linear app. |
| `version` | `string` | The version identifier for this release. |

#### Example: Load

```ts
const access_key_release = await client.AccessKeyRelease().load({ id: 'access_key_release_id' })
```

#### Example: List

```ts
const access_key_releases = await client.AccessKeyRelease().list()
```

#### Example: Create

```ts
const access_key_release = await client.AccessKeyRelease().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  name: 'example_name',
  url: 'example_url',
})
```


### AccessKeyReleasePipeline

Create an instance: `const access_key_release_pipeline = client.AccessKeyReleasePipeline()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | The unique identifier of the release pipeline. |
| `includePathPatterns` | `string` | Glob patterns used to filter commits by changed file path. |

#### Example: Load

```ts
const access_key_release_pipeline = await client.AccessKeyReleasePipeline().load({ id: 'access_key_release_pipeline_id' })
```


### AgentActivity

Create an instance: `const agent_activity = client.AgentActivity()`

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
| `agentSession` | `Record<string, any>` | The agent session this activity belongs to. |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `contextualMetadata` | `any` | [Internal] Metadata about user-provided contextual information for this agent activity. |
| `createdAt` | `any` | The time at which the entity was created. |
| `ephemeral` | `boolean` | Whether the activity is ephemeral, and should disappear after the next agent activity. |
| `executionSkippedReason` | `string` | [Internal] The reason this activity was persisted without being sent to the agent runtime. |
| `id` | `string` | The unique identifier of the entity. |
| `queued` | `boolean` | [Internal] Whether this activity is queued for later processing. |
| `sentAt` | `any` | [Internal] The time at which the prompt actually entered the conversation. |
| `signal` | `string` | An optional modifier that provides additional instructions on how the activity should be interpreted. |
| `signalMetadata` | `any` | Metadata about this agent activity's signal. |
| `sourceComment` | `Record<string, any>` | The source comment this activity is linked to. |
| `sourceMetadata` | `any` | Metadata about the external source that created this agent activity. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `user` | `Record<string, any>` | The user who created this agent activity. |

#### Example: Load

```ts
const agent_activity = await client.AgentActivity().load({ id: 'agent_activity_id' })
```

#### Example: List

```ts
const agent_activitys = await client.AgentActivity().list()
```

#### Example: Create

```ts
const agent_activity = await client.AgentActivity().create({
  createdAt: 'example_createdAt',
  ephemeral: true,
  id: 'example_id',
  queued: true,
  updatedAt: 'example_updatedAt',
})
```


### AgentSession

Create an instance: `const agent_session = client.AgentSession()`

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
| `appUser` | `Record<string, any>` | The agent user that is associated with this agent session. |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `codingHarnessModelLabel` | `string` | [Internal] Compact display label for the coding harness model used by this session, derived from the latest associated sandbox. |
| `comment` | `Record<string, any>` | The comment this agent session is associated with. |
| `context` | `any` | The entity contexts this session is related to, such as issues or projects referenced in direct chat sessions. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `Record<string, any>` | The human user responsible for the agent session. |
| `dismissedAt` | `any` | The time a user dismissed this agent session. |
| `dismissedBy` | `Record<string, any>` | The user who dismissed the agent session. |
| `endedAt` | `any` | The time the agent session completed. |
| `id` | `string` | The unique identifier of the entity. |
| `issue` | `Record<string, any>` | The issue this agent session is associated with. |
| `modelSelection` | `any` | [Internal] How Adaptive selected the model route used by this coding session. |
| `plan` | `any` | A dynamically updated plan describing the agent's execution strategy, including steps to be taken and their current status. |
| `pullRequest` | `Record<string, any>` | The pull request this agent session is anchored to, when started from a pull request. |
| `slugId` | `string` | The agent session's unique URL slug. |
| `sourceComment` | `Record<string, any>` | The comment that this agent session was spawned from, if from a different thread. |
| `sourceMetadata` | `any` | Metadata about the external source that created this agent session. |
| `startedAt` | `any` | The time the agent session transitioned to active status and began work. |
| `status` | `string` | The current status of the agent session, such as pending, active, awaiting input, complete, error, or stale. |
| `summary` | `string` | The session title, generated automatically or set by the owning OAuth application. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | The URL to the agent session page in the Linear app. |

#### Example: Load

```ts
const agent_session = await client.AgentSession().load({ id: 'agent_session_id' })
```

#### Example: List

```ts
const agent_sessions = await client.AgentSession().list()
```

#### Example: Create

```ts
const agent_session = await client.AgentSession().create({
  context: 'example_context',
  createdAt: 'example_createdAt',
  id: 'example_id',
  slugId: 'example_slugId',
  status: 'example_status',
  updatedAt: 'example_updatedAt',
})
```


### AgentSkill

Create an instance: `const agent_skill = client.AgentSkill()`

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
| `archivedAt` | `any` | The time at which the entity was archived. |
| `body` | `string` | The skill instructions in markdown format. |
| `color` | `string` | The skill's color. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `Record<string, any>` | The user who created the skill. |
| `description` | `string` | The skill's description. |
| `icon` | `string` | The icon of the skill. |
| `id` | `string` | The unique identifier of the entity. |
| `inheritedFrom` | `Record<string, any>` | The parent-team skill this skill was inherited from. |
| `lastUpdatedBy` | `Record<string, any>` | The user who last updated the skill. |
| `lastUsedAt` | `any` | The time the skill was last used by anyone in the workspace. |
| `owner` | `Record<string, any>` | The user who owns the skill. |
| `recentUsageCount` | `number` | The number of times the skill was used by anyone in the workspace in the last 30 days. |
| `shared` | `boolean` | Whether the skill is shared with everyone in the workspace. |
| `slugId` | `string` | The skill's unique URL slug. |
| `teamId` | `string` | The identifier of the team this skill is shared with. |
| `title` | `string` | The skill's title. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ts
const agent_skill = await client.AgentSkill().load({ id: 'agent_skill_id' })
```

#### Example: List

```ts
const agent_skills = await client.AgentSkill().list()
```

#### Example: Create

```ts
const agent_skill = await client.AgentSkill().create({
  body: 'example_body',
  createdAt: 'example_createdAt',
  id: 'example_id',
  recentUsageCount: 1,
  shared: true,
  slugId: 'example_slugId',
  title: 'example_title',
  updatedAt: 'example_updatedAt',
})
```


### Application

Create an instance: `const application = client.Application()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `clientId` | `string` | OAuth application's client ID. |
| `description` | `string` | Information about the application. |
| `developer` | `string` | Name of the developer. |
| `developerUrl` | `string` | URL of the developer's website, homepage, or documentation. |
| `id` | `string` | OAuth application's ID. |
| `imageUrl` | `string` | Image of the application. |
| `name` | `string` | Application name. |

#### Example: Load

```ts
const application = await client.Application().load({ client_id: 'client_id' })
```


### Attachment

Create an instance: `const attachment = client.Attachment()`

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
| `archivedAt` | `any` | The time at which the entity was archived. |
| `bodyData` | `string` | The body data of the attachment, if any. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `Record<string, any>` | The creator of the attachment. |
| `externalUserCreator` | `Record<string, any>` | The non-Linear user who created the attachment. |
| `groupBySource` | `boolean` | Whether attachments from the same source application should be visually grouped together in the Linear issue detail view. |
| `id` | `string` | The unique identifier of the entity. |
| `issue` | `Record<string, any>` | The issue this attachment belongs to. |
| `metadata` | `any` | Integration-specific metadata for this attachment. |
| `originalIssue` | `Record<string, any>` | The issue this attachment was originally created on. |
| `source` | `any` | Information about the source which created the attachment. |
| `sourceType` | `string` | The source type of the attachment, derived from the source metadata. |
| `subtitle` | `string` | Content for the subtitle line in the Linear attachment widget. |
| `title` | `string` | Content for the title line in the Linear attachment widget. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | The URL of the external resource this attachment links to. |

#### Example: Load

```ts
const attachment = await client.Attachment().load({ id: 'attachment_id' })
```

#### Example: List

```ts
const attachments = await client.Attachment().list()
```

#### Example: Create

```ts
const attachment = await client.Attachment().create({
  createdAt: 'example_createdAt',
  groupBySource: true,
  id: 'example_id',
  metadata: 'example_metadata',
  title: 'example_title',
  updatedAt: 'example_updatedAt',
  url: 'example_url',
})
```


### AuditEntry

Create an instance: `const audit_entry = client.AuditEntry()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `Record<string, any>` | The user that caused the audit entry to be created. |
| `actorId` | `string` | The ID of the user that caused the audit entry to be created. |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `countryCode` | `string` | The ISO 3166-1 alpha-2 country code derived from the request IP address. |
| `createdAt` | `any` | The time at which the entity was created. |
| `id` | `string` | The unique identifier of the entity. |
| `ip` | `string` | The IP address of the actor at the time the audited action was performed. |
| `metadata` | `any` | Additional metadata related to the audit entry. |
| `organization` | `Record<string, any>` | The workspace the audit log belongs to. |
| `requestInformation` | `any` | Additional information related to the request which performed the action. |
| `type` | `string` | The type of audited action (e.g., user authentication, permission change, data export, setting modification). |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: List

```ts
const audit_entrys = await client.AuditEntry().list()
```


### AuditEntryType

Create an instance: `const audit_entry_type = client.AuditEntryType()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | Description of the audit entry type. |
| `type` | `string` | The audit entry type. |

#### Example: List

```ts
const audit_entry_types = await client.AuditEntryType().list()
```


### AuthResolverResponse

Create an instance: `const auth_resolver_response = client.AuthResolverResponse()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowDomainAccess` | `boolean` | Should the signup flow allow access for the domain. |
| `email` | `string` | Email for the authenticated account. |
| `id` | `string` | User account ID. |
| `lastUsedOrganizationId` | `string` | ID of the organization last accessed by the user. |
| `service` | `string` | The authentication service used for the current session (e.g., google, email, saml). |

#### Example: Load

```ts
const auth_resolver_response = await client.AuthResolverResponse().load({ id: 'auth_resolver_response_id' })
```

#### Example: Create

```ts
const auth_resolver_response = await client.AuthResolverResponse().create({
  email: 'example_email',
  id: 'example_id',
})
```


### AuthenticationSessionResponse

Create an instance: `const authentication_session_response = client.AuthenticationSessionResponse()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `browserType` | `string` | Used web browser. |
| `client` | `string` | Client used for the session |
| `countryCodes` | `string` | Country codes of all seen locations. |
| `createdAt` | `any` | The time at which the entity was created. |
| `detailedName` | `string` | Detailed name of the session including version information, derived from the user agent. |
| `id` | `string` |  |
| `ip` | `string` | IP address. |
| `isCurrentSession` | `boolean` | Whether this session is the one used to make the current API request. |
| `lastActiveAt` | `any` | When was the session last seen |
| `location` | `string` | Human readable location |
| `locationCity` | `string` | Location city name. |
| `locationCountry` | `string` | Location country name. |
| `locationCountryCode` | `string` | Location country code. |
| `locationRegionCode` | `string` | Location region code. |
| `name` | `string` | Name of the session, derived from the client and operating system |
| `operatingSystem` | `string` | Operating system used for the session |
| `service` | `string` | Service used for logging in. |
| `type` | `string` | Type of application used to authenticate. |
| `updatedAt` | `any` | Date when the session was last updated. |
| `userAgent` | `string` | Session's user-agent. |

#### Example: List

```ts
const authentication_session_responses = await client.AuthenticationSessionResponse().list()
```


### Comment

Create an instance: `const comment = client.Comment()`

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
| `agentSession` | `Record<string, any>` | Agent session associated with this comment. |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `body` | `string` | The comment content in markdown format. |
| `bodyData` | `string` | [Internal] The comment content as a ProseMirror document. |
| `botActor` | `Record<string, any>` | The bot that created the comment. |
| `createdAt` | `any` | The time at which the entity was created. |
| `documentContent` | `Record<string, any>` | The document content that the comment is associated with. |
| `documentContentId` | `string` | The ID of the document content that the comment is associated with. |
| `editedAt` | `any` | The time the comment was last edited by its author. |
| `externalThread` | `Record<string, any>` | The external thread that the comment is synced with. |
| `externalUser` | `Record<string, any>` | The external user who wrote the comment, when the comment was created through an integration such as Slack or Intercom. |
| `hideInLinear` | `boolean` | [Internal] Whether the comment should be hidden from Linear clients. |
| `id` | `string` | The unique identifier of the entity. |
| `initiative` | `Record<string, any>` | The initiative that the comment is associated with. |
| `initiativeId` | `string` | The ID of the initiative that the comment is associated with. |
| `initiativeUpdate` | `Record<string, any>` | The initiative update that the comment is associated with. |
| `initiativeUpdateId` | `string` | The ID of the initiative update that the comment is associated with. |
| `isArtificialAgentSessionRoot` | `boolean` | [Internal] Whether the comment is an artificial placeholder for an agent session thread created without a comment mention. |
| `issue` | `Record<string, any>` | The issue that the comment is associated with. |
| `issueId` | `string` | The ID of the issue that the comment is associated with. |
| `onBehalfOf` | `Record<string, any>` | [Internal] The user on whose behalf the comment was created, e.g. |
| `parent` | `Record<string, any>` | The parent comment under which the current comment is nested. |
| `parentId` | `string` | The ID of the parent comment under which the current comment is nested. |
| `post` | `Record<string, any>` | The post that the comment is associated with. |
| `project` | `Record<string, any>` | The project that the comment is associated with. |
| `projectId` | `string` | The ID of the project that the comment is associated with. |
| `projectUpdate` | `Record<string, any>` | The project update that the comment is associated with. |
| `projectUpdateId` | `string` | The ID of the project update that the comment is associated with. |
| `quotedText` | `string` | The text that this comment references, used for inline comments on documents or issue descriptions. |
| `reactionData` | `any` | Emoji reaction summary for this comment, grouped by emoji type. |
| `resolvedAt` | `any` | The time when the comment thread was resolved. |
| `resolvingComment` | `Record<string, any>` | The child comment that resolved this thread. |
| `resolvingCommentId` | `string` | The ID of the child comment that resolved this thread. |
| `resolvingUser` | `Record<string, any>` | The user that resolved the comment thread. |
| `threadSummary` | `any` | [Internal] An AI-generated summary of the comment thread. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Comment's URL. |
| `user` | `Record<string, any>` | The user who wrote the comment. |

#### Example: Load

```ts
const comment = await client.Comment().load({ id: 'comment_id' })
```

#### Example: List

```ts
const comments = await client.Comment().list()
```

#### Example: Create

```ts
const comment = await client.Comment().create({
  body: 'example_body',
  bodyData: 'example_bodyData',
  createdAt: 'example_createdAt',
  hideInLinear: true,
  id: 'example_id',
  isArtificialAgentSessionRoot: true,
  reactionData: 'example_reactionData',
  updatedAt: 'example_updatedAt',
  url: 'example_url',
})
```


### CreateOrJoinOrganizationResponse

Create an instance: `const create_or_join_organization_response = client.CreateOrJoinOrganizationResponse()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `organization` | `Record<string, any>` | The workspace that was created or joined. |
| `user` | `Record<string, any>` | The user who created or joined the workspace. |

#### Example: Create

```ts
const create_or_join_organization_response = await client.CreateOrJoinOrganizationResponse().create({
})
```


### CustomView

Create an instance: `const custom_view = client.CustomView()`

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
| `archivedAt` | `any` | The time at which the entity was archived. |
| `color` | `string` | The hex color code of the custom view icon. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `Record<string, any>` | The user who originally created the custom view. |
| `description` | `string` | The description of the custom view. |
| `facet` | `Record<string, any>` | [INTERNAL] The facet that links this custom view to its parent entity (project, initiative, team page, etc.). |
| `feedItemFilterData` | `any` | The filter applied to feed items in the custom view. |
| `filterData` | `any` | The structured filter applied to issues in the custom view. |
| `icon` | `string` | The icon of the custom view. |
| `id` | `string` | The unique identifier of the entity. |
| `initiativeFilterData` | `any` | The filter applied to initiatives in the custom view. |
| `modelName` | `string` | The entity type this view displays. |
| `name` | `string` | The name of the custom view, displayed in the sidebar and navigation. |
| `organization` | `Record<string, any>` | The workspace of the custom view. |
| `organizationViewPreferences` | `Record<string, any>` | The workspace-level default view preferences for this custom view, if any have been set. |
| `owner` | `Record<string, any>` | The user who owns the custom view. |
| `projectFilterData` | `any` | The filter applied to projects in the custom view. |
| `shared` | `boolean` | Whether the custom view is shared with everyone in the organization. |
| `slugId` | `string` | The custom view's unique URL slug, used to construct human-readable URLs. |
| `team` | `Record<string, any>` | The team that the custom view is scoped to. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `updatedBy` | `Record<string, any>` | The user who last updated the custom view. |
| `userViewPreferences` | `Record<string, any>` | The current user's personal view preferences for this custom view, if they have set any. |

#### Example: Load

```ts
const custom_view = await client.CustomView().load({ id: 'custom_view_id' })
```

#### Example: List

```ts
const custom_views = await client.CustomView().list()
```

#### Example: Create

```ts
const custom_view = await client.CustomView().create({
  createdAt: 'example_createdAt',
  filterData: 'example_filterData',
  id: 'example_id',
  modelName: 'example_modelName',
  name: 'example_name',
  shared: true,
  slugId: 'example_slugId',
  updatedAt: 'example_updatedAt',
})
```


### Customer

Create an instance: `const customer = client.Customer()`

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
| `approximateNeedCount` | `number` | The approximate number of distinct requests associated with this customer, deduplicated per issue or project. |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `domains` | `string` | The email domains associated with this customer (e.g., 'acme.com'). |
| `externalIds` | `string` | Identifiers for this customer in external systems (e.g., CRM IDs from Intercom, Salesforce, or HubSpot). |
| `id` | `string` | The unique identifier of the entity. |
| `integration` | `Record<string, any>` | The integration that manages this customer's data (e.g., Intercom, Salesforce). |
| `logoUrl` | `string` | URL of the customer's logo image. |
| `mainSourceId` | `string` | The primary external source ID when a customer has data from multiple external systems. |
| `name` | `string` | The display name of the customer organization. |
| `owner` | `Record<string, any>` | The workspace member assigned as the owner of this customer. |
| `revenue` | `number` | The annual revenue generated by this customer. |
| `size` | `number` | The number of employees or seats at the customer organization. |
| `slackChannelId` | `string` | The ID of the Slack channel linked to this customer for communication. |
| `slugId` | `string` | A unique, human-readable URL slug for the customer. |
| `status` | `Record<string, any>` | The current lifecycle status of the customer. |
| `tier` | `Record<string, any>` | The tier or segment assigned to this customer for prioritization (e.g., Enterprise, Pro, Free). |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | The URL of the customer's page in the Linear application. |

#### Example: Load

```ts
const customer = await client.Customer().load({ id: 'customer_id' })
```

#### Example: List

```ts
const customers = await client.Customer().list()
```

#### Example: Create

```ts
const customer = await client.Customer().create({
  approximateNeedCount: 1,
  createdAt: 'example_createdAt',
  domains: 'example_domains',
  externalIds: 'example_externalIds',
  id: 'example_id',
  name: 'example_name',
  slugId: 'example_slugId',
  updatedAt: 'example_updatedAt',
  url: 'example_url',
})
```


### CustomerNeed

Create an instance: `const customer_need = client.CustomerNeed()`

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
| `archivedAt` | `any` | The time at which the entity was archived. |
| `attachment` | `Record<string, any>` | The issue attachment linked to this need. |
| `body` | `string` | The body content of the need in Markdown format. |
| `bodyData` | `string` | [Internal] The body content of the need as a Prosemirror document JSON string. |
| `comment` | `Record<string, any>` | An optional comment providing additional context for this need. |
| `content` | `string` | The effective Markdown content shown for this customer need. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `Record<string, any>` | The user who manually created this customer need. |
| `customer` | `Record<string, any>` | The customer organization this need belongs to. |
| `id` | `string` | The unique identifier of the entity. |
| `issue` | `Record<string, any>` | The issue this need is linked to. |
| `originalIssue` | `Record<string, any>` | The issue this customer need was originally created on, before being moved to a different issue or project. |
| `priority` | `number` | Whether the customer need is important or not. |
| `project` | `Record<string, any>` | The project this need is linked to. |
| `projectAttachment` | `Record<string, any>` | The project attachment linked to this need. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | The URL of the source attachment linked to this need, if any. |

#### Example: Load

```ts
const customer_need = await client.CustomerNeed().load({ id: 'customer_need_id' })
```

#### Example: List

```ts
const customer_needs = await client.CustomerNeed().list()
```

#### Example: Create

```ts
const customer_need = await client.CustomerNeed().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  priority: 1,
  updatedAt: 'example_updatedAt',
})
```


### CustomerStatus

Create an instance: `const customer_status = client.CustomerStatus()`

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
| `archivedAt` | `any` | The time at which the entity was archived. |
| `color` | `string` | The color of the status indicator in the UI, as a HEX string (e.g., '#ff0000'). |
| `createdAt` | `any` | The time at which the entity was created. |
| `description` | `string` | An optional description explaining what this status represents in the customer lifecycle. |
| `displayName` | `string` | The user-facing display name of the status shown in the UI. |
| `id` | `string` | The unique identifier of the entity. |
| `name` | `string` | The internal name of the status. |
| `position` | `number` | The sort position of the status in the workspace's customer lifecycle flow. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ts
const customer_status = await client.CustomerStatus().load({ id: 'customer_status_id' })
```

#### Example: List

```ts
const customer_statuss = await client.CustomerStatus().list()
```

#### Example: Create

```ts
const customer_status = await client.CustomerStatus().create({
  color: 'example_color',
  createdAt: 'example_createdAt',
  displayName: 'example_displayName',
  id: 'example_id',
  name: 'example_name',
  position: 1,
  updatedAt: 'example_updatedAt',
})
```


### CustomerTier

Create an instance: `const customer_tier = client.CustomerTier()`

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
| `archivedAt` | `any` | The time at which the entity was archived. |
| `color` | `string` | The color of the tier indicator in the UI, as a HEX string (e.g., '#ff0000'). |
| `createdAt` | `any` | The time at which the entity was created. |
| `description` | `string` | An optional description explaining what this tier represents and its intended use for customer segmentation. |
| `displayName` | `string` | The user-facing display name of the tier shown in the UI. |
| `id` | `string` | The unique identifier of the entity. |
| `name` | `string` | The internal name of the tier. |
| `position` | `number` | The sort position of the tier in the workspace's customer tier ordering. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ts
const customer_tier = await client.CustomerTier().load({ id: 'customer_tier_id' })
```

#### Example: List

```ts
const customer_tiers = await client.CustomerTier().list()
```

#### Example: Create

```ts
const customer_tier = await client.CustomerTier().create({
  color: 'example_color',
  createdAt: 'example_createdAt',
  displayName: 'example_displayName',
  id: 'example_id',
  name: 'example_name',
  position: 1,
  updatedAt: 'example_updatedAt',
})
```


### Cycle

Create an instance: `const cycle = client.Cycle()`

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
| `archivedAt` | `any` | The time at which the entity was archived. |
| `autoArchivedAt` | `any` | The time at which the cycle was automatically archived by the auto-pruning process. |
| `completedAt` | `any` | The completion time of the cycle. |
| `completedIssueCountHistory` | `number` | The number of completed issues in the cycle after each day. |
| `completedScopeHistory` | `number` | The number of completed estimation points after each day. |
| `createdAt` | `any` | The time at which the entity was created. |
| `currentProgress` | `any` | [Internal] The current progress snapshot of the cycle, broken down by issue status categories. |
| `description` | `string` | The description of the cycle. |
| `endsAt` | `any` | The end date and time of the cycle. |
| `id` | `string` | The unique identifier of the entity. |
| `inProgressScopeHistory` | `number` | The number of in-progress estimation points after each day. |
| `inheritedFrom` | `Record<string, any>` | The parent cycle this cycle was inherited from. |
| `isActive` | `boolean` | Whether the cycle is currently active. |
| `isFuture` | `boolean` | Whether the cycle has not yet started. |
| `isNext` | `boolean` | Whether this cycle is the next upcoming (not yet started) cycle for the team. |
| `isPast` | `boolean` | Whether the cycle's end date has passed. |
| `isPrevious` | `boolean` | Whether this cycle is the most recently completed cycle for the team. |
| `issueCountHistory` | `number` | The total number of issues in the cycle after each day. |
| `name` | `string` | The custom name of the cycle. |
| `number` | `number` | The auto-incrementing number of the cycle, unique within its team. |
| `progress` | `number` | The overall progress of the cycle as a number between 0 and 1. |
| `progressHistory` | `any` | [Internal] The detailed progress history of the cycle, including per-status breakdowns over time. |
| `scopeHistory` | `number` | The total number of estimation points (scope) in the cycle after each day. |
| `startsAt` | `any` | The start date and time of the cycle. |
| `team` | `Record<string, any>` | The team that the cycle belongs to. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ts
const cycle = await client.Cycle().load({ id: 'cycle_id' })
```

#### Example: List

```ts
const cycles = await client.Cycle().list()
```

#### Example: Create

```ts
const cycle = await client.Cycle().create({
  completedIssueCountHistory: 1,
  completedScopeHistory: 1,
  createdAt: 'example_createdAt',
  currentProgress: 'example_currentProgress',
  endsAt: 'example_endsAt',
  id: 'example_id',
  inProgressScopeHistory: 1,
  isActive: true,
  isFuture: true,
  isNext: true,
  isPast: true,
  isPrevious: true,
  issueCountHistory: 1,
  number: 1,
  progress: 1,
  progressHistory: 'example_progressHistory',
  scopeHistory: 1,
  startsAt: 'example_startsAt',
  updatedAt: 'example_updatedAt',
})
```


### Diff

Create an instance: `const diff = client.Diff()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additions` | `number` | [Internal] The total number of added lines across the diff. |
| `agentSession` | `Record<string, any>` | The agent session the diff belongs to. |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `contentHash` | `string` | [Internal] The opaque content hash identifying the diff's content in code.storage. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `Record<string, any>` | The user responsible for the diff. |
| `deletions` | `number` | [Internal] The total number of deleted lines across the diff. |
| `fileCount` | `number` | [Internal] The number of changed files in the diff. |
| `id` | `string` | The unique identifier of the entity. |
| `organization` | `Record<string, any>` | The workspace the diff belongs to. |
| `pullRequest` | `Record<string, any>` | The pull request the diff was promoted to when opened for review. |
| `slugId` | `string` | [Internal] The diff's unique URL slug. |
| `truncated` | `boolean` | [Internal] Whether oversized files were omitted when the diff was computed. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ts
const diff = await client.Diff().load({ id: 'diff_id' })
```


### Document

Create an instance: `const document = client.Document()`

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
| `archivedAt` | `any` | The time at which the entity was archived. |
| `color` | `string` | The hex color of the document icon. |
| `content` | `string` | The document's content in markdown format. |
| `contentState` | `string` | [Internal] The document's content as a base64-encoded Yjs state update. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `Record<string, any>` | The user who created the document. |
| `cycle` | `Record<string, any>` | [Internal] The cycle that the document is associated with. |
| `documentContentId` | `string` | The ID of the document content associated with the document. |
| `hiddenAt` | `any` | The time at which the document was hidden from the default view. |
| `icon` | `string` | The icon of the document, either a decorative icon type or an emoji string. |
| `id` | `string` | The unique identifier of the entity. |
| `initiative` | `Record<string, any>` | The initiative that the document is associated with. |
| `issue` | `Record<string, any>` | The issue that the document is associated with. |
| `lastAppliedTemplate` | `Record<string, any>` | The last template that was applied to this document. |
| `owner` | `Record<string, any>` | The owner of the document. |
| `project` | `Record<string, any>` | The project that the document is associated with. |
| `release` | `Record<string, any>` | The release that the document is associated with. |
| `slugId` | `string` | The document's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `number` | The sort order of the document in its parent entity's resources list. |
| `summary` | `string` | [Internal] A one-sentence AI-generated summary of the document content. |
| `team` | `Record<string, any>` | [Internal] The team that the document is associated with. |
| `title` | `string` | The title of the document. |
| `trashed` | `boolean` | A flag that indicates whether the document is in the trash bin. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `updatedBy` | `Record<string, any>` | The user who last updated the document. |
| `url` | `string` | The canonical url for the document. |

#### Example: Load

```ts
const document = await client.Document().load({ id: 'document_id' })
```

#### Example: List

```ts
const documents = await client.Document().list()
```

#### Example: Create

```ts
const document = await client.Document().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  slugId: 'example_slugId',
  sortOrder: 1,
  title: 'example_title',
  updatedAt: 'example_updatedAt',
  url: 'example_url',
})
```


### DocumentSearchResult

Create an instance: `const document_search_result = client.DocumentSearchResult()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `color` | `string` | The hex color of the document icon. |
| `content` | `string` | The document's content in markdown format. |
| `contentState` | `string` | [Internal] The document's content as a base64-encoded Yjs state update. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `Record<string, any>` | The user who created the document. |
| `cycle` | `Record<string, any>` | [Internal] The cycle that the document is associated with. |
| `documentContentId` | `string` | The ID of the document content associated with the document. |
| `hiddenAt` | `any` | The time at which the document was hidden from the default view. |
| `icon` | `string` | The icon of the document, either a decorative icon type or an emoji string. |
| `id` | `string` | The unique identifier of the entity. |
| `initiative` | `Record<string, any>` | The initiative that the document is associated with. |
| `issue` | `Record<string, any>` | The issue that the document is associated with. |
| `lastAppliedTemplate` | `Record<string, any>` | The last template that was applied to this document. |
| `metadata` | `any` | Metadata related to search result. |
| `owner` | `Record<string, any>` | The owner of the document. |
| `project` | `Record<string, any>` | The project that the document is associated with. |
| `release` | `Record<string, any>` | The release that the document is associated with. |
| `slugId` | `string` | The document's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `number` | The sort order of the document in its parent entity's resources list. |
| `summary` | `string` | [Internal] A one-sentence AI-generated summary of the document content. |
| `team` | `Record<string, any>` | [Internal] The team that the document is associated with. |
| `title` | `string` | The title of the document. |
| `trashed` | `boolean` | A flag that indicates whether the document is in the trash bin. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `updatedBy` | `Record<string, any>` | The user who last updated the document. |
| `url` | `string` | The canonical url for the document. |

#### Example: List

```ts
const document_search_results = await client.DocumentSearchResult().list({ term: "example" })
```


### EmailIntakeAddress

Create an instance: `const email_intake_address = client.EmailIntakeAddress()`

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
| `address` | `string` | The unique local part (before the @) of the intake email address, used to route incoming emails to the correct intake handler. |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `Record<string, any>` | The user who created the email intake address. |
| `customerRequestsEnabled` | `boolean` | Whether issues created from emails sent to this address are automatically converted into customer requests, linking the sender as a customer contact. |
| `enabled` | `boolean` | Whether the email address is enabled. |
| `forwardingEmailAddress` | `string` | The email address used to forward emails to the intake address. |
| `id` | `string` | The unique identifier of the entity. |
| `issueCanceledAutoReply` | `string` | The auto-reply message for issue canceled. |
| `issueCanceledAutoReplyEnabled` | `boolean` | Whether the auto-reply for issue canceled is enabled. |
| `issueCompletedAutoReply` | `string` | The auto-reply message for issue completed. |
| `issueCompletedAutoReplyEnabled` | `boolean` | Whether the auto-reply for issue completed is enabled. |
| `issueCreatedAutoReply` | `string` | The auto-reply message for issue created. |
| `issueCreatedAutoReplyEnabled` | `boolean` | Whether the auto-reply for issue created is enabled. |
| `lastUsedAt` | `any` | The last time an inbound email was successfully ingested for this address. |
| `organization` | `Record<string, any>` | The workspace that the email address is associated with. |
| `reopenOnReply` | `boolean` | Whether to reopen completed or canceled issues when a substantive email reply is received. |
| `repliesEnabled` | `boolean` | Whether email replies are enabled. |
| `senderName` | `string` | The name to be used for outgoing emails. |
| `sesDomainIdentity` | `Record<string, any>` | The SES domain identity that the email address is associated with. |
| `team` | `Record<string, any>` | The team that the email address is associated with. |
| `template` | `Record<string, any>` | The template that the email address is associated with. |
| `type` | `string` | The type of the email address. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `useUserNamesInReplies` | `boolean` | Whether the commenter's name is included in the email replies. |

#### Example: Load

```ts
const email_intake_address = await client.EmailIntakeAddress().load({ id: 'email_intake_address_id' })
```

#### Example: Create

```ts
const email_intake_address = await client.EmailIntakeAddress().create({
  address: 'example_address',
  createdAt: 'example_createdAt',
  customerRequestsEnabled: true,
  enabled: true,
  id: 'example_id',
  issueCanceledAutoReplyEnabled: true,
  issueCompletedAutoReplyEnabled: true,
  issueCreatedAutoReplyEnabled: true,
  reopenOnReply: true,
  repliesEnabled: true,
  type: 'example_type',
  updatedAt: 'example_updatedAt',
  useUserNamesInReplies: true,
})
```


### EmailUserAccountAuthChallengeResponse

Create an instance: `const email_user_account_auth_challenge_response = client.EmailUserAccountAuthChallengeResponse()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authType` | `string` | Supported challenge for this user account. |
| `success` | `boolean` | Whether the operation was successful. |

#### Example: Create

```ts
const email_user_account_auth_challenge_response = await client.EmailUserAccountAuthChallengeResponse().create({
  authType: 'example_authType',
  success: true,
})
```


### Emoji

Create an instance: `const emoji = client.Emoji()`

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
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `Record<string, any>` | The user who created the emoji. |
| `id` | `string` | The unique identifier of the entity. |
| `name` | `string` | The unique name of the custom emoji within the workspace. |
| `organization` | `Record<string, any>` | The workspace that the emoji belongs to. |
| `source` | `string` | The source of the emoji, indicating how it was created (e.g., uploaded by a user or imported). |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | The URL of the uploaded image for this custom emoji. |

#### Example: Load

```ts
const emoji = await client.Emoji().load({ id: 'emoji_id' })
```

#### Example: List

```ts
const emojis = await client.Emoji().list()
```

#### Example: Create

```ts
const emoji = await client.Emoji().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  name: 'example_name',
  source: 'example_source',
  updatedAt: 'example_updatedAt',
  url: 'example_url',
})
```


### EntityExternalLink

Create an instance: `const entity_external_link = client.EntityExternalLink()`

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
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `Record<string, any>` | The user who created the link. |
| `id` | `string` | The unique identifier of the entity. |
| `initiative` | `Record<string, any>` | The initiative that the link is associated with. |
| `label` | `string` | The link's label. |
| `project` | `Record<string, any>` | The project that the link is associated with. |
| `sortOrder` | `number` | The sort order of this link within the parent entity's resources list. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | The link's URL. |

#### Example: Load

```ts
const entity_external_link = await client.EntityExternalLink().load({ id: 'entity_external_link_id' })
```

#### Example: Create

```ts
const entity_external_link = await client.EntityExternalLink().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  label: 'example_label',
  sortOrder: 1,
  updatedAt: 'example_updatedAt',
  url: 'example_url',
})
```


### ExternalUser

Create an instance: `const external_user = client.ExternalUser()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `avatarUrl` | `string` | A URL to the external user's avatar image. |
| `createdAt` | `any` | The time at which the entity was created. |
| `displayName` | `string` | The external user's display name. |
| `email` | `string` | The external user's email address. |
| `id` | `string` | The unique identifier of the entity. |
| `lastSeen` | `any` | The last time the external user was seen interacting with Linear through their external service. |
| `name` | `string` | The external user's full name. |
| `organization` | `Record<string, any>` | The workspace that the external user belongs to. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ts
const external_user = await client.ExternalUser().load({ id: 'external_user_id' })
```

#### Example: List

```ts
const external_users = await client.ExternalUser().list()
```


### Favorite

Create an instance: `const favorite = client.Favorite()`

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
| `aiConversation` | `Record<string, any>` | [INTERNAL] The favorited Agent conversation. |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `color` | `string` | [Internal] Returns the color of the favorite's icon. |
| `createdAt` | `any` | The time at which the entity was created. |
| `customView` | `Record<string, any>` | The favorited custom view. |
| `customer` | `Record<string, any>` | The favorited customer. |
| `cycle` | `Record<string, any>` | The favorited cycle. |
| `dashboard` | `Record<string, any>` | The favorited dashboard. |
| `detail` | `string` | [Internal] Detail text for favorite's `title` (e.g. |
| `document` | `Record<string, any>` | The favorited document. |
| `facet` | `Record<string, any>` | [INTERNAL] The favorited facet. |
| `folderName` | `string` | The name of the folder. |
| `icon` | `string` | [Internal] Name of the favorite's icon. |
| `id` | `string` | The unique identifier of the entity. |
| `initiative` | `Record<string, any>` | The favorited initiative. |
| `initiativeLabel` | `Record<string, any>` | [INTERNAL] The favorited initiative label. |
| `initiativeTab` | `string` | The targeted tab of the initiative. |
| `issue` | `Record<string, any>` | The favorited issue. |
| `label` | `Record<string, any>` | The favorited label. |
| `liveFolderDefinition` | `any` | The versioned lazy root and filter represented by this live favorite folder. |
| `liveFolderPreset` | `string` | The predefined live folder represented by this favorite. |
| `owner` | `Record<string, any>` | The user who owns this favorite. |
| `parent` | `Record<string, any>` | The parent folder of the favorite. |
| `pipelineTab` | `string` | The targeted tab of the release pipeline. |
| `predefinedViewTeam` | `Record<string, any>` | The team of the favorited predefined view. |
| `predefinedViewType` | `string` | The type of favorited predefined view (e.g., 'allIssues', 'activeCycle', 'backlog', 'triage'). |
| `project` | `Record<string, any>` | The favorited project. |
| `projectLabel` | `Record<string, any>` | The favorited project label. |
| `projectTab` | `string` | The targeted tab of the project. |
| `projectTeam` | `Record<string, any>` | [DEPRECATED] The favorited team of the project. |
| `pullRequest` | `Record<string, any>` | The favorited pull request. |
| `release` | `Record<string, any>` | The favorited release. |
| `releaseNote` | `Record<string, any>` | The favorited release note. |
| `releasePipeline` | `Record<string, any>` | The favorited release pipeline. |
| `sortOrder` | `number` | The position of this item in the user's favorites list. |
| `team` | `Record<string, any>` | The favorited team. |
| `title` | `string` | [Internal] Favorite's title text (name of the favorite'd object or folder). |
| `type` | `string` | The type of entity this favorite references, such as 'issue', 'project', 'cycle', 'customView', 'document', 'folder', etc. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | URL of the favorited entity. |
| `user` | `Record<string, any>` | The favorited user. |
| `workflowDefinition` | `Record<string, any>` | The favorited loop. |

#### Example: Load

```ts
const favorite = await client.Favorite().load({ id: 'favorite_id' })
```

#### Example: List

```ts
const favorites = await client.Favorite().list()
```

#### Example: Create

```ts
const favorite = await client.Favorite().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  sortOrder: 1,
  title: 'example_title',
  type: 'example_type',
  updatedAt: 'example_updatedAt',
})
```


### GitAutomationState

Create an instance: `const git_automation_state = client.GitAutomationState()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `event` | `string` | The Git event that triggers this automation rule (e.g., branch created, PR opened for review, or PR merged). |
| `id` | `string` | The unique identifier of the entity. |
| `state` | `Record<string, any>` | The workflow state that linked issues will be transitioned to when the Git event fires. |
| `targetBranch` | `Record<string, any>` | The target branch that this automation rule applies to. |
| `team` | `Record<string, any>` | The team that this automation rule belongs to. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Create

```ts
const git_automation_state = await client.GitAutomationState().create({
  createdAt: 'example_createdAt',
  event: 'example_event',
  id: 'example_id',
  updatedAt: 'example_updatedAt',
})
```


### GitAutomationTargetBranch

Create an instance: `const git_automation_target_branch = client.GitAutomationTargetBranch()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `branchPattern` | `string` | The branch name or pattern to match against pull request target branches. |
| `createdAt` | `any` | The time at which the entity was created. |
| `id` | `string` | The unique identifier of the entity. |
| `isRegex` | `boolean` | Whether the branch pattern should be interpreted as a regular expression. |
| `team` | `Record<string, any>` | The team that this target branch definition belongs to. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Create

```ts
const git_automation_target_branch = await client.GitAutomationTargetBranch().create({
  branchPattern: 'example_branchPattern',
  createdAt: 'example_createdAt',
  id: 'example_id',
  isRegex: true,
  updatedAt: 'example_updatedAt',
})
```


### GitHubIntegrationConnectDetail

Create an instance: `const git_hub_integration_connect_detail = client.GitHubIntegrationConnectDetail()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `lostRepositoryNames` | `string` | Full names ('owner/repo') of repositories whose existing GitHub Issues sync mappings would become inaccessible if the new GitHub App installation replaces the existing one. |

#### Example: Create

```ts
const git_hub_integration_connect_detail = await client.GitHubIntegrationConnectDetail().create({
})
```


### Initiative

Create an instance: `const initiative = client.Initiative()`

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
| `archivedAt` | `any` | The time at which the entity was archived. |
| `canceledAt` | `any` | [Internal] The time at which the initiative was moved into Canceled status. |
| `color` | `string` | The initiative's color. |
| `completedAt` | `any` | The time at which the initiative was moved into Completed status. |
| `content` | `string` | The initiative's content in markdown format. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `Record<string, any>` | The user who created the initiative. |
| `description` | `string` | The description of the initiative. |
| `documentContent` | `Record<string, any>` | The content of the initiative description. |
| `frequencyResolution` | `string` | The resolution of the reminder frequency. |
| `health` | `string` | The overall health of the initiative, derived from the most recent initiative update. |
| `healthUpdatedAt` | `any` | The time at which the initiative health was last updated, typically when a new initiative update is posted. |
| `icon` | `string` | The icon of the initiative. |
| `id` | `string` | The unique identifier of the entity. |
| `identifier` | `string` | [Internal] The human-readable identifier of the initiative. |
| `integrationsSettings` | `Record<string, any>` | Settings for all integrations associated with that initiative. |
| `labelIds` | `string` | The IDs of the initiative labels associated with this initiative. |
| `lastUpdate` | `Record<string, any>` | The most recent status update posted for this initiative. |
| `leadTeam` | `Record<string, any>` | The team that leads the initiative. |
| `name` | `string` | The name of the initiative. |
| `organization` | `Record<string, any>` | The workspace of the initiative. |
| `owner` | `Record<string, any>` | The user who owns the initiative. |
| `parentInitiative` | `Record<string, any>` | Parent initiative associated with the initiative. |
| `previousIdentifiers` | `string` | [Internal] Identifiers (default and custom) that this initiative has previously held. |
| `priority` | `number` | The priority of the initiative. |
| `prioritySortOrder` | `number` | The sort order of the initiative within the workspace when ordered by priority. |
| `slugId` | `string` | The initiative's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `number` | The sort order of the initiative within the workspace. |
| `startedAt` | `any` | The time at which the initiative was moved into Active status. |
| `status` | `string` | The lifecycle status of the initiative. |
| `targetDate` | `any` | The estimated completion date of the initiative. |
| `targetDateResolution` | `string` | The resolution of the initiative's estimated completion date, indicating whether it refers to a specific day, week, month, quarter, or year. |
| `trashed` | `boolean` | A flag that indicates whether the initiative is in the trash bin. |
| `updateReminderFrequency` | `number` | The frequency at which to prompt for updates. |
| `updateReminderFrequencyInWeeks` | `number` | The n-weekly frequency at which to prompt for updates. |
| `updateRemindersDay` | `string` | The day at which to prompt for updates. |
| `updateRemindersHour` | `number` | The hour at which to prompt for updates. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Initiative URL. |
| `visibility` | `string` | The visibility of the initiative, derived from its lead team. |

#### Example: Load

```ts
const initiative = await client.Initiative().load({ id: 'initiative_id' })
```

#### Example: List

```ts
const initiatives = await client.Initiative().list()
```

#### Example: Create

```ts
const initiative = await client.Initiative().create({
  createdAt: 'example_createdAt',
  frequencyResolution: 'example_frequencyResolution',
  id: 'example_id',
  labelIds: 'example_labelIds',
  name: 'example_name',
  previousIdentifiers: 'example_previousIdentifiers',
  priority: 1,
  prioritySortOrder: 1,
  slugId: 'example_slugId',
  sortOrder: 1,
  status: 'example_status',
  updatedAt: 'example_updatedAt',
  url: 'example_url',
  visibility: 'example_visibility',
})
```


### InitiativeLabel

Create an instance: `const initiative_label = client.InitiativeLabel()`

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
| `archivedAt` | `any` | The time at which the entity was archived. |
| `color` | `string` | The label's color as a HEX string (e.g., '#EB5757'). |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `Record<string, any>` | The user who created the label. |
| `description` | `string` | The label's description. |
| `id` | `string` | The unique identifier of the entity. |
| `isGroup` | `boolean` | Whether the label is a group. |
| `lastAppliedAt` | `any` | The date when the label was last applied to an issue, project, or initiative. |
| `name` | `string` | The label's name. |
| `organization` | `Record<string, any>` | The workspace that the initiative label belongs to. |
| `parent` | `Record<string, any>` | The parent label group. |
| `retiredAt` | `any` | [Internal] When the label was retired. |
| `retiredBy` | `Record<string, any>` | The user who retired the label. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ts
const initiative_label = await client.InitiativeLabel().load({ id: 'initiative_label_id' })
```

#### Example: List

```ts
const initiative_labels = await client.InitiativeLabel().list()
```

#### Example: Create

```ts
const initiative_label = await client.InitiativeLabel().create({
  color: 'example_color',
  createdAt: 'example_createdAt',
  id: 'example_id',
  isGroup: true,
  name: 'example_name',
  updatedAt: 'example_updatedAt',
})
```


### InitiativeLeadTeamChangeImpact

Create an instance: `const initiative_lead_team_change_impact = client.InitiativeLeadTeamChangeImpact()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `affectedDescendantCount` | `number` | The number of editable matching sub-initiatives whose lead team would change if the update is applied to descendants. |
| `id` | `string` |  |
| `visibilityMayChange` | `boolean` | Whether the changed initiatives may gain or lose access restrictions because the current or next lead team is not public. |

#### Example: Load

```ts
const initiative_lead_team_change_impact = await client.InitiativeLeadTeamChangeImpact().load({ id: 'initiative_lead_team_change_impact_id' })
```


### InitiativeRelation

Create an instance: `const initiative_relation = client.InitiativeRelation()`

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
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `id` | `string` | The unique identifier of the entity. |
| `initiative` | `Record<string, any>` | The parent initiative in this hierarchical relation. |
| `relatedInitiative` | `Record<string, any>` | The child initiative in this hierarchical relation. |
| `sortOrder` | `number` | The sort order of the child initiative within its parent initiative. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `user` | `Record<string, any>` | The user who last created or modified the relation. |

#### Example: Load

```ts
const initiative_relation = await client.InitiativeRelation().load({ id: 'initiative_relation_id' })
```

#### Example: List

```ts
const initiative_relations = await client.InitiativeRelation().list()
```

#### Example: Create

```ts
const initiative_relation = await client.InitiativeRelation().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  sortOrder: 1,
  updatedAt: 'example_updatedAt',
})
```


### InitiativeToProject

Create an instance: `const initiative_to_project = client.InitiativeToProject()`

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
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `id` | `string` | The unique identifier of the entity. |
| `initiative` | `Record<string, any>` | The initiative that the project is associated with. |
| `project` | `Record<string, any>` | The project that the initiative is associated with. |
| `sortOrder` | `string` | The sort order of the project within its parent initiative. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ts
const initiative_to_project = await client.InitiativeToProject().load({ id: 'initiative_to_project_id' })
```

#### Example: List

```ts
const initiative_to_projects = await client.InitiativeToProject().list()
```

#### Example: Create

```ts
const initiative_to_project = await client.InitiativeToProject().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  sortOrder: 'example_sortOrder',
  updatedAt: 'example_updatedAt',
})
```


### InitiativeUpdate

Create an instance: `const initiative_update = client.InitiativeUpdate()`

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
| `archivedAt` | `any` | The time at which the entity was archived. |
| `body` | `string` | The update content in markdown format. |
| `bodyData` | `string` | [Internal] The content of the update as a Prosemirror document. |
| `commentCount` | `number` | Number of comments associated with the initiative update. |
| `createdAt` | `any` | The time at which the entity was created. |
| `diff` | `any` | The diff between the current update and the previous one. |
| `diffMarkdown` | `string` | The diff between the current update and the previous one, formatted as markdown. |
| `editedAt` | `any` | The time the update was edited. |
| `health` | `string` | The health of the initiative at the time this update was posted. |
| `id` | `string` | The unique identifier of the entity. |
| `infoSnapshot` | `any` | [Internal] A snapshot of initiative properties at the time the update was posted, including project statuses, sub-initiative health, and target dates. |
| `initiative` | `Record<string, any>` | The initiative that this status update was posted to. |
| `isDiffHidden` | `boolean` | Whether the diff between this update and the previous one should be hidden in the UI. |
| `isStale` | `boolean` | Whether the initiative update is stale. |
| `reactionData` | `any` | Emoji reaction summary, grouped by emoji type. |
| `slugId` | `string` | The update's unique URL slug. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | The URL to the initiative update. |
| `user` | `Record<string, any>` | The user who wrote the update. |

#### Example: Load

```ts
const initiative_update = await client.InitiativeUpdate().load({ id: 'initiative_update_id' })
```

#### Example: List

```ts
const initiative_updates = await client.InitiativeUpdate().list()
```

#### Example: Create

```ts
const initiative_update = await client.InitiativeUpdate().create({
  body: 'example_body',
  bodyData: 'example_bodyData',
  commentCount: 1,
  createdAt: 'example_createdAt',
  health: 'example_health',
  id: 'example_id',
  isDiffHidden: true,
  isStale: true,
  reactionData: 'example_reactionData',
  slugId: 'example_slugId',
  updatedAt: 'example_updatedAt',
  url: 'example_url',
})
```


### Integration

Create an instance: `const integration = client.Integration()`

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
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `Record<string, any>` | The user that added the integration. |
| `id` | `string` | The unique identifier of the entity. |
| `organization` | `Record<string, any>` | The workspace that the integration is associated with. |
| `service` | `string` | The integration's type, identifying which external service this integration connects to (e.g., 'slack', 'github', 'jira', 'figma'). |
| `team` | `Record<string, any>` | The team that the integration is associated with. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ts
const integration = await client.Integration().load({ id: 'integration_id' })
```

#### Example: List

```ts
const integrations = await client.Integration().list()
```

#### Example: Create

```ts
const integration = await client.Integration().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  service: 'example_service',
  updatedAt: 'example_updatedAt',
})
```


### IntegrationTemplate

Create an instance: `const integration_template = client.IntegrationTemplate()`

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
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `foreignEntityId` | `string` | The identifier of the foreign entity in the external service that this template is scoped to. |
| `id` | `string` | The unique identifier of the entity. |
| `integration` | `Record<string, any>` | The integration that the template is associated with. |
| `template` | `Record<string, any>` | The template that the integration is associated with. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ts
const integration_template = await client.IntegrationTemplate().load({ id: 'integration_template_id' })
```

#### Example: List

```ts
const integration_templates = await client.IntegrationTemplate().list()
```

#### Example: Create

```ts
const integration_template = await client.IntegrationTemplate().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  updatedAt: 'example_updatedAt',
})
```


### IntegrationsSetting

Create an instance: `const integrations_setting = client.IntegrationsSetting()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `contextViewType` | `string` | The type of view to which the integration settings context is associated with. |
| `createdAt` | `any` | The time at which the entity was created. |
| `id` | `string` | The unique identifier of the entity. |
| `initiative` | `Record<string, any>` | Initiative which those settings apply to. |
| `microsoftTeamsProjectUpdateCreated` | `boolean` | Whether to send a Microsoft Teams message when a project update is created. |
| `project` | `Record<string, any>` | Project which those settings apply to. |
| `slackInitiativeUpdateCreated` | `boolean` | Whether to send a Slack message when an initiative update is created. |
| `slackIssueAddedToTriage` | `boolean` | Whether to send a Slack message when a new issue is added to triage. |
| `slackIssueAddedToView` | `boolean` | Whether to send a Slack message when an issue is added to the custom view. |
| `slackIssueNewComment` | `boolean` | Whether to send a Slack message when a comment is created on any of the project or team's issues. |
| `slackIssueSlaBreached` | `boolean` | Whether to send a Slack message when an SLA is breached. |
| `slackIssueSlaHighRisk` | `boolean` | Whether to send a Slack message when an SLA is at high risk. |
| `slackIssueStatusChangedAll` | `boolean` | Whether to send a Slack message when any of the project or team's issues has a change in status. |
| `slackIssueStatusChangedDone` | `boolean` | Whether to send a Slack message when any of the project or team's issues change to completed or canceled. |
| `slackProjectUpdateCreated` | `boolean` | Whether to send a Slack message when a project update is created. |
| `slackProjectUpdateCreatedToTeam` | `boolean` | Whether to send a new project update to team Slack channels. |
| `slackProjectUpdateCreatedToWorkspace` | `boolean` | Whether to send a new project update to workspace Slack channel. |
| `team` | `Record<string, any>` | Team which those settings apply to. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ts
const integrations_setting = await client.IntegrationsSetting().load({ id: 'integrations_setting_id' })
```

#### Example: Create

```ts
const integrations_setting = await client.IntegrationsSetting().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  updatedAt: 'example_updatedAt',
})
```


### Issue

Create an instance: `const issue = client.Issue()`

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
| `activitySummary` | `any` | [Internal] The activity summary information for this issue. |
| `addedToCycleAt` | `any` | The time at which the issue was added to a cycle. |
| `addedToProjectAt` | `any` | The time at which the issue was added to a project. |
| `addedToTeamAt` | `any` | The time at which the issue was added to a team. |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `asksExternalUserRequester` | `Record<string, any>` | The external user who requested creation of the Asks issue on behalf of the creator. |
| `asksRequester` | `Record<string, any>` | The internal user who requested creation of the Asks issue on behalf of the creator. |
| `assignee` | `Record<string, any>` | The user to whom the issue is assigned. |
| `autoArchivedAt` | `any` | The time at which the issue was automatically archived by the auto pruning process. |
| `autoClosedAt` | `any` | The time at which the issue was automatically closed by the auto pruning process. |
| `botActor` | `Record<string, any>` | The bot that created the issue, if applicable. |
| `branchName` | `string` | Suggested branch name for the issue. |
| `canceledAt` | `any` | The time at which the issue was moved into canceled state. |
| `completedAt` | `any` | The time at which the issue was moved into completed state. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `Record<string, any>` | The user who created the issue. |
| `customerTicketCount` | `number` | Returns the number of Attachment resources which are created by customer support ticketing systems (e.g. |
| `cycle` | `Record<string, any>` | The cycle that the issue is associated with. |
| `delegate` | `Record<string, any>` | The agent user that is delegated to work on this issue. |
| `description` | `string` | The issue's description in markdown format. |
| `descriptionState` | `string` | [Internal] The issue's description content as YJS state. |
| `documentContent` | `Record<string, any>` | [ALPHA] The document content representing this issue description. |
| `dueDate` | `any` | The date at which the issue is due. |
| `estimate` | `number` | The estimate of the complexity of the issue. |
| `externalUserCreator` | `Record<string, any>` | The external user who created the issue. |
| `favorite` | `Record<string, any>` | The users favorite associated with this issue. |
| `id` | `string` | The unique identifier of the entity. |
| `identifier` | `string` | Issue's human readable identifier (e.g. |
| `inheritsSharedAccess` | `boolean` | Whether this issue inherits shared access from its parent issue. |
| `integrationSourceType` | `string` | Integration type that created this issue, if applicable. |
| `labelIds` | `string` | Identifiers of the labels associated with this issue. |
| `lastAppliedTemplate` | `Record<string, any>` | The last template that was applied to this issue. |
| `number` | `number` | The issue's unique number, scoped to the issue's team. |
| `parent` | `Record<string, any>` | The parent of the issue. |
| `previousIdentifiers` | `string` | Previous identifiers of the issue if it has been moved between teams. |
| `priority` | `number` | The priority of the issue. |
| `priorityLabel` | `string` | Label for the priority. |
| `prioritySortOrder` | `number` | The order of the item in relation to other items in the workspace, when ordered by priority. |
| `project` | `Record<string, any>` | The project that the issue is associated with. |
| `projectMilestone` | `Record<string, any>` | The project milestone that the issue is associated with. |
| `reactionData` | `any` | Emoji reaction summary for the issue, grouped by emoji type. |
| `recurringIssueTemplate` | `Record<string, any>` | The recurring issue template that created this issue. |
| `slaBreachesAt` | `any` | The time at which the issue's SLA will breach. |
| `slaHighRiskAt` | `any` | The time at which the issue's SLA will enter high risk state. |
| `slaMediumRiskAt` | `any` | The time at which the issue's SLA will enter medium risk state. |
| `slaStartedAt` | `any` | The time at which the issue's SLA began. |
| `slaType` | `string` | The type of SLA set on the issue. |
| `snoozedBy` | `Record<string, any>` | The user who snoozed the issue. |
| `snoozedUntilAt` | `any` | The time until an issue will be snoozed in Triage view. |
| `sortOrder` | `number` | The order of the item in relation to other items in the organization. |
| `sourceComment` | `Record<string, any>` | The comment that this issue was created from, when an issue is created from an existing comment. |
| `startedAt` | `any` | The time at which the issue was moved into started state. |
| `startedTriageAt` | `any` | The time at which the issue entered triage. |
| `state` | `Record<string, any>` | The workflow state (issue status) that the issue is currently in. |
| `subIssueSortOrder` | `number` | The order of the item in the sub-issue list. |
| `suggestionsGeneratedAt` | `any` | [Internal] The time at which the most recent suggestions for this issue were generated. |
| `summary` | `Record<string, any>` | [Internal] AI-generated activity summary for this issue. |
| `team` | `Record<string, any>` | The team that the issue belongs to. |
| `title` | `string` | The issue's title. |
| `trashed` | `boolean` | A flag that indicates whether the issue is in the trash bin. |
| `triagedAt` | `any` | The time at which the issue left triage. |
| `trusted` | `boolean` | [Internal] Whether this issue has been explicitly marked as trusted. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Issue URL. |

#### Example: Load

```ts
const issue = await client.Issue().load({ id: 'issue_id' })
```

#### Example: List

```ts
const issues = await client.Issue().list()
```

#### Example: Create

```ts
const issue = await client.Issue().create({
  branchName: 'example_branchName',
  createdAt: 'example_createdAt',
  customerTicketCount: 1,
  id: 'example_id',
  identifier: 'example_identifier',
  inheritsSharedAccess: true,
  labelIds: 'example_labelIds',
  number: 1,
  previousIdentifiers: 'example_previousIdentifiers',
  priority: 1,
  priorityLabel: 'example_priorityLabel',
  prioritySortOrder: 1,
  reactionData: 'example_reactionData',
  sortOrder: 1,
  title: 'example_title',
  updatedAt: 'example_updatedAt',
  url: 'example_url',
})
```


### IssueImport

Create an instance: `const issue_import = client.IssueImport()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creatorId` | `string` | Identifier of the user who started the import job. |
| `csvFileUrl` | `string` | File URL for the uploaded CSV for the import, if there is one. |
| `displayName` | `string` | The display name of the import service. |
| `error` | `string` | User readable error message, if one has occurred during the import. |
| `errorMetadata` | `any` | Error code and metadata, if one has occurred during the import. |
| `id` | `string` | The unique identifier of the entity. |
| `mapping` | `any` | The data mapping configuration for the import job. |
| `progress` | `number` | Current step progress as a percentage (0-100). |
| `service` | `string` | The external service from which data is being imported (e.g., jira, asana, github, shortcut, linear). |
| `serviceMetadata` | `any` | Metadata related to import service. |
| `status` | `string` | The current status of the import job, indicating its position in the import lifecycle (e.g., not started, in progress, complete, error). |
| `teamName` | `string` | The name of the new team to be created for the import, when the import is configured to create a new team rather than importing into an existing one. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Create

```ts
const issue_import = await client.IssueImport().create({
  createdAt: 'example_createdAt',
  displayName: 'example_displayName',
  service: 'example_service',
  status: 'example_status',
  updatedAt: 'example_updatedAt',
})
```


### IssueLabel

Create an instance: `const issue_label = client.IssueLabel()`

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
| `archivedAt` | `any` | The time at which the entity was archived. |
| `color` | `string` | The label's color as a HEX string (e.g., '#EB5757'). |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `Record<string, any>` | The user who created the label. |
| `description` | `string` | The label's description. |
| `groupType` | `string` | The selection mode of this label group. |
| `id` | `string` | The unique identifier of the entity. |
| `inheritedFrom` | `Record<string, any>` | The original workspace or parent-team label that this label was inherited from. |
| `isGroup` | `boolean` | Whether the label is a group. |
| `lastAppliedAt` | `any` | The date when the label was last applied to an issue, project, or initiative. |
| `name` | `string` | The label's name. |
| `parent` | `Record<string, any>` | The parent label. |
| `retiredAt` | `any` | [Internal] When the label was retired. |
| `retiredBy` | `Record<string, any>` | The user who retired the label. |
| `team` | `Record<string, any>` | The team that the label is scoped to. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ts
const issue_label = await client.IssueLabel().load({ id: 'issue_label_id' })
```

#### Example: List

```ts
const issue_labels = await client.IssueLabel().list()
```

#### Example: Create

```ts
const issue_label = await client.IssueLabel().create({
  color: 'example_color',
  createdAt: 'example_createdAt',
  id: 'example_id',
  isGroup: true,
  name: 'example_name',
  updatedAt: 'example_updatedAt',
})
```


### IssuePriorityValue

Create an instance: `const issue_priority_value = client.IssuePriorityValue()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `label` | `string` | Priority's label. |
| `priority` | `number` | Priority's number value. |

#### Example: List

```ts
const issue_priority_values = await client.IssuePriorityValue().list()
```


### IssueRelation

Create an instance: `const issue_relation = client.IssueRelation()`

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
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `id` | `string` | The unique identifier of the entity. |
| `issue` | `Record<string, any>` | The source issue whose relationship is being described. |
| `relatedIssue` | `Record<string, any>` | The target issue that the source issue is related to. |
| `type` | `string` | The type of relationship between the source issue and the related issue. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ts
const issue_relation = await client.IssueRelation().load({ id: 'issue_relation_id' })
```

#### Example: List

```ts
const issue_relations = await client.IssueRelation().list()
```

#### Example: Create

```ts
const issue_relation = await client.IssueRelation().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  type: 'example_type',
  updatedAt: 'example_updatedAt',
})
```


### IssueSearchResult

Create an instance: `const issue_search_result = client.IssueSearchResult()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activitySummary` | `any` | [Internal] The activity summary information for this issue. |
| `addedToCycleAt` | `any` | The time at which the issue was added to a cycle. |
| `addedToProjectAt` | `any` | The time at which the issue was added to a project. |
| `addedToTeamAt` | `any` | The time at which the issue was added to a team. |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `asksExternalUserRequester` | `Record<string, any>` | The external user who requested creation of the Asks issue on behalf of the creator. |
| `asksRequester` | `Record<string, any>` | The internal user who requested creation of the Asks issue on behalf of the creator. |
| `assignee` | `Record<string, any>` | The user to whom the issue is assigned. |
| `autoArchivedAt` | `any` | The time at which the issue was automatically archived by the auto pruning process. |
| `autoClosedAt` | `any` | The time at which the issue was automatically closed by the auto pruning process. |
| `botActor` | `Record<string, any>` | The bot that created the issue, if applicable. |
| `branchName` | `string` | Suggested branch name for the issue. |
| `canceledAt` | `any` | The time at which the issue was moved into canceled state. |
| `completedAt` | `any` | The time at which the issue was moved into completed state. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `Record<string, any>` | The user who created the issue. |
| `customerTicketCount` | `number` | Returns the number of Attachment resources which are created by customer support ticketing systems (e.g. |
| `cycle` | `Record<string, any>` | The cycle that the issue is associated with. |
| `delegate` | `Record<string, any>` | The agent user that is delegated to work on this issue. |
| `description` | `string` | The issue's description in markdown format. |
| `descriptionState` | `string` | [Internal] The issue's description content as YJS state. |
| `documentContent` | `Record<string, any>` | [ALPHA] The document content representing this issue description. |
| `dueDate` | `any` | The date at which the issue is due. |
| `estimate` | `number` | The estimate of the complexity of the issue. |
| `externalUserCreator` | `Record<string, any>` | The external user who created the issue. |
| `favorite` | `Record<string, any>` | The users favorite associated with this issue. |
| `id` | `string` | The unique identifier of the entity. |
| `identifier` | `string` | Issue's human readable identifier (e.g. |
| `inheritsSharedAccess` | `boolean` | Whether this issue inherits shared access from its parent issue. |
| `integrationSourceType` | `string` | Integration type that created this issue, if applicable. |
| `labelIds` | `string` | Identifiers of the labels associated with this issue. |
| `lastAppliedTemplate` | `Record<string, any>` | The last template that was applied to this issue. |
| `metadata` | `any` | Metadata related to search result. |
| `number` | `number` | The issue's unique number, scoped to the issue's team. |
| `parent` | `Record<string, any>` | The parent of the issue. |
| `previousIdentifiers` | `string` | Previous identifiers of the issue if it has been moved between teams. |
| `priority` | `number` | The priority of the issue. |
| `priorityLabel` | `string` | Label for the priority. |
| `prioritySortOrder` | `number` | The order of the item in relation to other items in the workspace, when ordered by priority. |
| `project` | `Record<string, any>` | The project that the issue is associated with. |
| `projectMilestone` | `Record<string, any>` | The project milestone that the issue is associated with. |
| `reactionData` | `any` | Emoji reaction summary for the issue, grouped by emoji type. |
| `recurringIssueTemplate` | `Record<string, any>` | The recurring issue template that created this issue. |
| `slaBreachesAt` | `any` | The time at which the issue's SLA will breach. |
| `slaHighRiskAt` | `any` | The time at which the issue's SLA will enter high risk state. |
| `slaMediumRiskAt` | `any` | The time at which the issue's SLA will enter medium risk state. |
| `slaStartedAt` | `any` | The time at which the issue's SLA began. |
| `slaType` | `string` | The type of SLA set on the issue. |
| `snoozedBy` | `Record<string, any>` | The user who snoozed the issue. |
| `snoozedUntilAt` | `any` | The time until an issue will be snoozed in Triage view. |
| `sortOrder` | `number` | The order of the item in relation to other items in the organization. |
| `sourceComment` | `Record<string, any>` | The comment that this issue was created from, when an issue is created from an existing comment. |
| `startedAt` | `any` | The time at which the issue was moved into started state. |
| `startedTriageAt` | `any` | The time at which the issue entered triage. |
| `state` | `Record<string, any>` | The workflow state (issue status) that the issue is currently in. |
| `subIssueSortOrder` | `number` | The order of the item in the sub-issue list. |
| `suggestionsGeneratedAt` | `any` | [Internal] The time at which the most recent suggestions for this issue were generated. |
| `summary` | `Record<string, any>` | [Internal] AI-generated activity summary for this issue. |
| `team` | `Record<string, any>` | The team that the issue belongs to. |
| `title` | `string` | The issue's title. |
| `trashed` | `boolean` | A flag that indicates whether the issue is in the trash bin. |
| `triagedAt` | `any` | The time at which the issue left triage. |
| `trusted` | `boolean` | [Internal] Whether this issue has been explicitly marked as trusted. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Issue URL. |

#### Example: List

```ts
const issue_search_results = await client.IssueSearchResult().list({ term: "example" })
```


### IssueToRelease

Create an instance: `const issue_to_release = client.IssueToRelease()`

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
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `id` | `string` | The unique identifier of the entity. |
| `issue` | `Record<string, any>` | The issue that is linked to the release. |
| `release` | `Record<string, any>` | The release that the issue is linked to. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ts
const issue_to_release = await client.IssueToRelease().load({ id: 'issue_to_release_id' })
```

#### Example: List

```ts
const issue_to_releases = await client.IssueToRelease().list()
```

#### Example: Create

```ts
const issue_to_release = await client.IssueToRelease().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  updatedAt: 'example_updatedAt',
})
```


### LogoutResponse

Create an instance: `const logout_response = client.LogoutResponse()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `success` | `boolean` | Whether the operation was successful. |

#### Example: Create

```ts
const logout_response = await client.LogoutResponse().create({
  success: true,
})
```


### Notification

Create an instance: `const notification = client.Notification()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `Record<string, any>` | The user that caused the notification. |
| `actorAvatarColor` | `string` | [Internal] Notification actor initials if avatar is not available. |
| `actorAvatarUrl` | `string` | [Internal] Notification avatar URL. |
| `actorInactive` | `boolean` | [Internal] Whether the notification's user actor is deactivated in the workspace. |
| `actorInitials` | `string` | [Internal] Notification actor initials if avatar is not available. |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `botActor` | `Record<string, any>` | The bot that caused the notification. |
| `category` | `string` | The category of the notification. |
| `createdAt` | `any` | The time at which the entity was created. |
| `emailedAt` | `any` | The time at which an email reminder for this notification was sent to the user. |
| `externalUserActor` | `Record<string, any>` | The external user that caused the notification. |
| `groupingKey` | `string` | [Internal] Notifications with the same grouping key will be grouped together in the UI. |
| `groupingPriority` | `number` | [Internal] Priority of the notification with the same grouping key. |
| `id` | `string` | The unique identifier of the entity. |
| `inboxUrl` | `string` | [Internal] Inbox URL for the notification. |
| `initiativeUpdateHealth` | `string` | [Internal] Initiative update health for new updates. |
| `isLinearActor` | `boolean` | [Internal] If notification actor was Linear. |
| `issueStatusType` | `string` | [Internal] Issue's status type for issue notifications. |
| `projectUpdateHealth` | `string` | [Internal] Project update health for new updates. |
| `readAt` | `any` | The time at which the user marked the notification as read. |
| `snoozedUntilAt` | `any` | The time until which a notification is snoozed. |
| `subtitle` | `string` | [Internal] Notification subtitle. |
| `title` | `string` | [Internal] Notification title. |
| `type` | `string` | Notification type. |
| `unsnoozedAt` | `any` | The time at which a notification was unsnoozed. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | [Internal] URL to the target of the notification. |
| `user` | `Record<string, any>` | The recipient user of this notification. |

#### Example: Load

```ts
const notification = await client.Notification().load({ id: 'notification_id' })
```

#### Example: List

```ts
const notifications = await client.Notification().list()
```


### NotificationSubscription

Create an instance: `const notification_subscription = client.NotificationSubscription()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` | Whether the subscription is active. |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `contextViewType` | `string` | The type of contextual view (e.g., active issues, backlog) that further scopes a team notification subscription. |
| `createdAt` | `any` | The time at which the entity was created. |
| `customView` | `Record<string, any>` | The custom view that this notification subscription is scoped to. |
| `customer` | `Record<string, any>` | The customer that this notification subscription is scoped to. |
| `cycle` | `Record<string, any>` | The cycle that this notification subscription is scoped to. |
| `id` | `string` | The unique identifier of the entity. |
| `initiative` | `Record<string, any>` | The initiative that this notification subscription is scoped to. |
| `label` | `Record<string, any>` | The issue label that this notification subscription is scoped to. |
| `project` | `Record<string, any>` | The project that this notification subscription is scoped to. |
| `subscriber` | `Record<string, any>` | The user who will receive notifications from this subscription. |
| `team` | `Record<string, any>` | The team that this notification subscription is scoped to. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `user` | `Record<string, any>` | The user that this notification subscription is scoped to, for user-specific view subscriptions. |
| `userContextViewType` | `string` | The type of user-specific view that further scopes a user notification subscription. |

#### Example: Load

```ts
const notification_subscription = await client.NotificationSubscription().load({ id: 'notification_subscription_id' })
```

#### Example: List

```ts
const notification_subscriptions = await client.NotificationSubscription().list()
```


### OAuthApplication

Create an instance: `const o_auth_application = client.OAuthApplication()`

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
| `clientId` | `string` | The client ID used during OAuth authorization flows. |
| `createdAt` | `any` | The time at which the OAuth application was created. |
| `description` | `string` | User-facing description of the OAuth application. |
| `developer` | `string` | Name of the developer or company that built the OAuth application. |
| `developerUrl` | `string` | URL of the developer's website, homepage, or documentation. |
| `distribution` | `string` | Distribution setting for the OAuth application. |
| `grantTypes` | `string` | OAuth grant types supported by this application. |
| `id` | `string` | The unique identifier of the OAuth application. |
| `imageUrl` | `string` | URL of the OAuth application's icon. |
| `name` | `string` | The human-readable name of the OAuth application. |
| `redirectUris` | `string` | Allowed redirect URIs for OAuth authorization flows. |
| `updatedAt` | `any` | The time at which the OAuth application was last updated. |
| `webhookEnabled` | `boolean` | Whether webhook delivery is enabled for this OAuth application. |
| `webhookResourceTypes` | `string` | Resource types the OAuth application's webhooks subscribe to. |
| `webhookUrl` | `string` | Webhook URL used for delivering webhook payloads. |

#### Example: Load

```ts
const o_auth_application = await client.OAuthApplication().load({ id: 'o_auth_application_id' })
```

#### Example: List

```ts
const o_auth_applications = await client.OAuthApplication().list()
```

#### Example: Create

```ts
const o_auth_application = await client.OAuthApplication().create({
  clientId: 'example_clientId',
  createdAt: 'example_createdAt',
  developer: 'example_developer',
  developerUrl: 'example_developerUrl',
  distribution: 'example_distribution',
  grantTypes: 'example_grantTypes',
  id: 'example_id',
  name: 'example_name',
  redirectUris: 'example_redirectUris',
  updatedAt: 'example_updatedAt',
  webhookEnabled: true,
  webhookResourceTypes: 'example_webhookResourceTypes',
})
```


### Organization

Create an instance: `const organization = client.Organization()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agentAutomationEnabled` | `boolean` | [INTERNAL] Whether the workspace has enabled agent automation. |
| `aiAddonEnabled` | `boolean` | [INTERNAL] Whether the workspace has enabled the AI add-on (which at this point only includes triage suggestions). |
| `aiDiscussionSummariesEnabled` | `boolean` | Whether the workspace has enabled AI discussion summaries for issues. |
| `aiProviderConfiguration` | `any` | [INTERNAL] Configure per-modality AI host providers and model families. |
| `aiTelemetryEnabled` | `boolean` | [INTERNAL] Whether the workspace has opted in to AI telemetry. |
| `aiThreadSummariesEnabled` | `boolean` | Whether the workspace has enabled resolved thread AI summaries. |
| `allowedFileUploadContentTypes` | `string` | Allowed file upload content types |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `authSettings` | `any` | Authentication settings for the workspace, including allowed auth providers, bypass rules, and organization visibility during signup. |
| `codeIntelligenceEnabled` | `boolean` | [INTERNAL] Whether code intelligence is enabled for the workspace. |
| `codeIntelligenceRepository` | `string` | [INTERNAL] GitHub repository in owner/repo format for code intelligence. |
| `codingAgentEnabled` | `boolean` | [INTERNAL] Whether the workspace has enabled Coding Sessions. |
| `codingAgentSettings` | `any` | [Internal] Settings for Coding Sessions features. |
| `createdAt` | `any` | The time at which the entity was created. |
| `createdIssueCount` | `number` | Approximate total number of issues created in the workspace, including archived ones. |
| `customerCount` | `number` | The number of active (non-archived) customers tracked in the workspace. |
| `customersConfiguration` | `any` | Configuration settings for the Customers feature, including revenue currency and other customer tracking preferences. |
| `customersEnabled` | `boolean` | Whether the Customers feature is enabled and accessible for the workspace based on the current plan. |
| `defaultFeedSummarySchedule` | `string` | Default schedule for how often feed summaries are generated. |
| `defaultHomeView` | `string` | The default home view for members of the workspace who have not chosen their own default. |
| `defaultHomeViewTargetId` | `string` | The id of the specific initiative, project, view, dashboard, or page tab used as the default home view. |
| `deletionRequestedAt` | `any` | The time at which deletion of the workspace was requested. |
| `feedEnabled` | `boolean` | Whether the activity feed feature is enabled for the workspace. |
| `fiscalYearStartMonth` | `number` | The zero-indexed month at which the fiscal year starts (0 = January, 11 = December). |
| `generatedUpdatesEnabled` | `boolean` | [INTERNAL] Whether the workspace has enabled generated updates. |
| `gitBranchFormat` | `string` | The template format for Git branch names created from issues. |
| `gitLinkbackDescriptionsEnabled` | `boolean` | Whether issue descriptions should be included in the Git integration linkback messages posted to pull requests. |
| `gitLinkbackMessagesEnabled` | `boolean` | Whether the Git integration linkback messages should be posted as comments on pull requests in private repositories. |
| `gitPublicLinkbackMessagesEnabled` | `boolean` | Whether the Git integration linkback messages should be posted as comments on pull requests in public repositories. |
| `hipaaComplianceEnabled` | `boolean` | Whether HIPAA compliance is enabled for the workspace. |
| `id` | `string` | The unique identifier of the entity. |
| `initiativeUpdateReminderFrequencyInWeeks` | `number` | The frequency in weeks at which to prompt for initiative updates. |
| `initiativeUpdateRemindersDay` | `string` | The day of the week on which initiative update reminders are sent. |
| `initiativeUpdateRemindersHour` | `number` | The hour of the day (0-23) at which initiative update reminders are sent. |
| `linearAgentEnabled` | `boolean` | [Internal] Whether the workspace has enabled Linear Agent. |
| `linearAgentSettings` | `any` | [Internal] Settings for Linear Agent features. |
| `logoUrl` | `string` | The URL of the workspace's logo image. |
| `name` | `string` | The workspace's name. |
| `periodUploadVolume` | `number` | Rolling 30-day total file upload volume for the workspace, measured in megabytes. |
| `previousUrlKeys` | `string` | Previously used URL keys for the workspace. |
| `projectUpdateReminderFrequencyInWeeks` | `number` | The frequency in weeks at which to prompt for project updates. |
| `projectUpdateRemindersDay` | `string` | The day of the week on which project update reminders are sent. |
| `projectUpdateRemindersHour` | `number` | The hour of the day (0-23) at which project update reminders are sent. |
| `pullRequestIssueMode` | `string` | How Linear suggests and links issues for pull requests that have none linked: 'off', 'suggest', or 'autoOnMerge'. |
| `pullRequestTourEnabled` | `boolean` | Whether the workspace generates AI Pull Request guides for new pull requests. |
| `releaseChannel` | `string` | The feature release channel the workspace belongs to, which controls access to pre-release features. |
| `releasesEnabled` | `boolean` | Whether release management is enabled for the workspace. |
| `restrictAgentInvocationToMembers` | `boolean` | [Internal] Whether agent invocation is restricted to full workspace members. |
| `roadmapEnabled` | `boolean` | Whether the roadmap feature is enabled for the workspace. |
| `samlEnabled` | `boolean` | Whether SAML-based single sign-on authentication is enabled for the workspace. |
| `samlSettings` | `any` | [INTERNAL] SAML settings. |
| `scimEnabled` | `boolean` | Whether SCIM provisioning is enabled for the workspace, allowing automated user and team management from an identity provider. |
| `scimSettings` | `any` | [INTERNAL] SCIM settings. |
| `securitySettings` | `any` | Security settings for the workspace, including role-based restrictions for invitations, team creation, label management, and other sensitive operations. |
| `slackAutoCreateProjectChannel` | `boolean` | [Internal] Whether to automatically create a Slack channel when a new project is created. |
| `slackProjectChannelIntegration` | `Record<string, any>` | The Slack integration used for auto-creating project channels. |
| `slackProjectChannelPrefix` | `string` | The prefix used for auto-created Slack project channels. |
| `slackProjectChannelsEnabled` | `boolean` | [Internal] Whether the Slack project channels feature is enabled for the workspace. |
| `subscription` | `Record<string, any>` | The workspace's subscription to a paid plan. |
| `themeSettings` | `any` | [ALPHA] Theme settings for the workspace. |
| `trialEndsAt` | `any` | The time at which the current plan trial will end. |
| `trialStartsAt` | `any` | The time at which the current plan trial started. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `urlKey` | `string` | The workspace's unique URL key, used in URLs to identify the workspace. |
| `userCount` | `number` | The number of active (non-deactivated) users in the workspace. |
| `workingDays` | `number` | [Internal] The list of working days. |

#### Example: Load

```ts
const organization = await client.Organization().load({ id: 'organization_id' })
```


### OrganizationDomain

Create an instance: `const organization_domain = client.OrganizationDomain()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `authType` | `string` | The authentication type this domain is used for. |
| `claimed` | `boolean` | Whether the domain was claimed by the workspace through DNS TXT record verification. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `Record<string, any>` | The user who added the domain. |
| `disableOrganizationCreation` | `boolean` | Whether users with email addresses from this domain are prevented from creating new workspaces. |
| `id` | `string` | The unique identifier of the entity. |
| `identityProvider` | `Record<string, any>` | The identity provider the domain belongs to. |
| `name` | `string` | The domain name (e.g., 'example.com'). |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `verificationEmail` | `string` | The email address used to verify this domain. |
| `verified` | `boolean` | Whether the domain has been verified via email verification. |

#### Example: Create

```ts
const organization_domain = await client.OrganizationDomain().create({
  authType: 'example_authType',
  createdAt: 'example_createdAt',
  id: 'example_id',
  name: 'example_name',
  updatedAt: 'example_updatedAt',
  verified: true,
})
```


### OrganizationInvite

Create an instance: `const organization_invite = client.OrganizationInvite()`

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
| `acceptedAt` | `any` | The time at which the invite was accepted by the invitee. |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `email` | `string` | The email address of the person being invited to the workspace. |
| `expiresAt` | `any` | The time at which the invite will expire and can no longer be accepted. |
| `external` | `boolean` | Whether the invite was sent to an email address outside the workspace's verified domains. |
| `id` | `string` | The unique identifier of the entity. |
| `invitee` | `Record<string, any>` | The user who has accepted the invite. |
| `inviter` | `Record<string, any>` | The user who created the invitation. |
| `metadata` | `any` | Extra metadata associated with the invite. |
| `organization` | `Record<string, any>` | The workspace that the invite is associated with. |
| `role` | `string` | The workspace role (admin, member, guest, or owner) that the invitee will receive upon accepting the invite. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ts
const organization_invite = await client.OrganizationInvite().load({ id: 'organization_invite_id' })
```

#### Example: List

```ts
const organization_invites = await client.OrganizationInvite().list()
```

#### Example: Create

```ts
const organization_invite = await client.OrganizationInvite().create({
  createdAt: 'example_createdAt',
  email: 'example_email',
  external: true,
  id: 'example_id',
  role: 'example_role',
  updatedAt: 'example_updatedAt',
})
```


### OrganizationMeta

Create an instance: `const organization_meta = client.OrganizationMeta()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowedAuthServices` | `string` | Allowed authentication providers, empty array means all are allowed. |
| `region` | `string` | The region the workspace is hosted in. |

#### Example: Load

```ts
const organization_meta = await client.OrganizationMeta().load({ url_key: 'url_key' })
```


### PasskeyLoginStartResponse

Create an instance: `const passkey_login_start_response = client.PasskeyLoginStartResponse()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `options` | `any` | The passkey authentication options to pass to the WebAuthn API. |
| `success` | `boolean` | Whether the operation was successful. |


### Project

Create an instance: `const project = client.Project()`

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
| `archivedAt` | `any` | The time at which the entity was archived. |
| `autoArchivedAt` | `any` | The time at which the project was automatically archived by the auto-pruning process. |
| `canceledAt` | `any` | The time at which the project was moved into a canceled status. |
| `color` | `string` | The project's color as a HEX string. |
| `completedAt` | `any` | The time at which the project was moved into a completed status. |
| `completedIssueCountHistory` | `number` | The number of completed issues in the project at the end of each week since project creation. |
| `completedScopeHistory` | `number` | The number of completed estimation points at the end of each week since project creation. |
| `content` | `string` | The project's content in markdown format. |
| `contentState` | `string` | [Internal] The project's content as YJS state. |
| `convertedFromIssue` | `Record<string, any>` | The issue that was converted into this project. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `Record<string, any>` | The user who created the project. |
| `currentProgress` | `any` | [INTERNAL] The current progress of the project, broken down by issue status category. |
| `description` | `string` | The short description of the project. |
| `documentContent` | `Record<string, any>` | The content of the project description. |
| `favorite` | `Record<string, any>` | The user's favorite associated with this project. |
| `frequencyResolution` | `string` | The resolution of the reminder frequency. |
| `health` | `string` | The overall health of the project, derived from the most recent project update. |
| `healthUpdatedAt` | `any` | The time at which the project health was last updated, typically when a new project update is posted. |
| `icon` | `string` | The icon of the project. |
| `id` | `string` | The unique identifier of the entity. |
| `identifier` | `string` | [Internal] The human-readable identifier of the project. |
| `inProgressScopeHistory` | `number` | The number of in-progress estimation points at the end of each week since project creation. |
| `integrationsSettings` | `Record<string, any>` | Settings for all integrations associated with that project. |
| `issueCountHistory` | `number` | The total number of issues in the project at the end of each week since project creation. |
| `labelIds` | `string` | The IDs of the project labels associated with this project. |
| `lastAppliedTemplate` | `Record<string, any>` | The last template that was applied to this project. |
| `lastUpdate` | `Record<string, any>` | The most recent status update posted for this project. |
| `lead` | `Record<string, any>` | The user who leads the project. |
| `leadTeam` | `Record<string, any>` | [Internal] The team that leads the project. |
| `microsoftTeamsChannelId` | `string` | The ID of the Microsoft Teams channel connected to the project, if any. |
| `name` | `string` | The name of the project. |
| `previousIdentifiers` | `string` | [Internal] Identifiers (default and custom) that this project has previously held. |
| `priority` | `number` | The priority of the project. |
| `priorityLabel` | `string` | The priority of the project as a label. |
| `prioritySortOrder` | `number` | The sort order for the project within the workspace when ordered by priority. |
| `progress` | `number` | The overall progress of the project. |
| `progressHistory` | `any` | [INTERNAL] The progress history of the project, tracking issue completion over time. |
| `projectUpdateRemindersPausedUntilAt` | `any` | The time until which project update reminders are paused. |
| `resourceCount` | `number` | The number of resources associated with the project, including documents, external links, and attachments. |
| `scope` | `number` | The overall scope (total estimate points) of the project. |
| `scopeHistory` | `number` | The total scope (estimation points) of the project at the end of each week since project creation. |
| `slackChannelId` | `string` | The ID of the Slack channel connected to the project, if any. |
| `slugId` | `string` | The project's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `number` | The sort order for the project within the workspace. |
| `startDate` | `any` | The estimated start date of the project. |
| `startDateResolution` | `string` | The resolution of the project's start date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `startedAt` | `any` | The time at which the project was moved into a started status. |
| `status` | `Record<string, any>` | The current project status. |
| `targetDate` | `any` | The estimated completion date of the project. |
| `targetDateResolution` | `string` | The resolution of the project's estimated completion date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `trashed` | `boolean` | A flag that indicates whether the project is in the trash bin. |
| `updateReminderFrequency` | `number` | The frequency at which to prompt for updates. |
| `updateReminderFrequencyInWeeks` | `number` | The n-weekly frequency at which to prompt for updates. |
| `updateRemindersDay` | `string` | The day at which to prompt for updates. |
| `updateRemindersHour` | `number` | The hour at which to prompt for updates. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Project URL. |

#### Example: Load

```ts
const project = await client.Project().load({ id: 'project_id' })
```

#### Example: List

```ts
const projects = await client.Project().list()
```

#### Example: Create

```ts
const project = await client.Project().create({
  color: 'example_color',
  completedIssueCountHistory: 1,
  completedScopeHistory: 1,
  createdAt: 'example_createdAt',
  currentProgress: 'example_currentProgress',
  description: 'example_description',
  frequencyResolution: 'example_frequencyResolution',
  id: 'example_id',
  inProgressScopeHistory: 1,
  issueCountHistory: 1,
  labelIds: 'example_labelIds',
  name: 'example_name',
  previousIdentifiers: 'example_previousIdentifiers',
  priority: 1,
  priorityLabel: 'example_priorityLabel',
  prioritySortOrder: 1,
  progress: 1,
  progressHistory: 'example_progressHistory',
  resourceCount: 1,
  scope: 1,
  scopeHistory: 1,
  slugId: 'example_slugId',
  sortOrder: 1,
  updatedAt: 'example_updatedAt',
  url: 'example_url',
})
```


### ProjectLabel

Create an instance: `const project_label = client.ProjectLabel()`

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
| `archivedAt` | `any` | The time at which the entity was archived. |
| `color` | `string` | The label's color as a HEX string (e.g., '#EB5757'). |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `Record<string, any>` | The user who created the label. |
| `description` | `string` | The label's description. |
| `id` | `string` | The unique identifier of the entity. |
| `inheritedFrom` | `Record<string, any>` | [Internal] The original workspace or parent-team label that this label was inherited from. |
| `isGroup` | `boolean` | Whether the label is a group. |
| `lastAppliedAt` | `any` | The date when the label was last applied to an issue, project, or initiative. |
| `name` | `string` | The label's name. |
| `organization` | `Record<string, any>` | The workspace that the project label belongs to. |
| `parent` | `Record<string, any>` | The parent label group. |
| `retiredAt` | `any` | [Internal] When the label was retired. |
| `retiredBy` | `Record<string, any>` | The user who retired the label. |
| `team` | `Record<string, any>` | [Internal] The team that the label is scoped to. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ts
const project_label = await client.ProjectLabel().load({ id: 'project_label_id' })
```

#### Example: List

```ts
const project_labels = await client.ProjectLabel().list()
```

#### Example: Create

```ts
const project_label = await client.ProjectLabel().create({
  color: 'example_color',
  createdAt: 'example_createdAt',
  id: 'example_id',
  isGroup: true,
  name: 'example_name',
  updatedAt: 'example_updatedAt',
})
```


### ProjectMilestone

Create an instance: `const project_milestone = client.ProjectMilestone()`

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
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `currentProgress` | `any` | [Internal] The current progress of the milestone, broken down by issue status category. |
| `description` | `string` | The project milestone's description in markdown format. |
| `descriptionState` | `string` | [Internal] The project milestone's description as YJS state. |
| `documentContent` | `Record<string, any>` | The rich-text content of the milestone description. |
| `id` | `string` | The unique identifier of the entity. |
| `name` | `string` | The name of the project milestone. |
| `progress` | `number` | The progress % of the project milestone. |
| `progressHistory` | `any` | [Internal] The progress history of the milestone, tracking issue completion over time. |
| `project` | `Record<string, any>` | The project that this milestone belongs to. |
| `sortOrder` | `number` | The order of the milestone in relation to other milestones within a project. |
| `status` | `string` | The status of the project milestone. |
| `targetDate` | `any` | The planned completion date of the milestone. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ts
const project_milestone = await client.ProjectMilestone().load({ id: 'project_milestone_id' })
```

#### Example: List

```ts
const project_milestones = await client.ProjectMilestone().list()
```

#### Example: Create

```ts
const project_milestone = await client.ProjectMilestone().create({
  createdAt: 'example_createdAt',
  currentProgress: 'example_currentProgress',
  id: 'example_id',
  name: 'example_name',
  progress: 1,
  progressHistory: 'example_progressHistory',
  sortOrder: 1,
  status: 'example_status',
  updatedAt: 'example_updatedAt',
})
```


### ProjectMilestoneMoveProjectTeam

Create an instance: `const project_milestone_move_project_team = client.ProjectMilestoneMoveProjectTeam()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `projectId` | `string` | The project id |
| `teamIds` | `string` | The team ids for the project |


### ProjectRelation

Create an instance: `const project_relation = client.ProjectRelation()`

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
| `anchorType` | `string` | The type of anchor on the source project end of the relation, indicating whether it is anchored to the project itself or a specific milestone. |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `id` | `string` | The unique identifier of the entity. |
| `project` | `Record<string, any>` | The source project in the dependency relation. |
| `projectMilestone` | `Record<string, any>` | The specific milestone within the source project that the relation is anchored to. |
| `relatedAnchorType` | `string` | The type of anchor on the target project end of the relation, indicating whether it is anchored to the project itself or a specific milestone. |
| `relatedProject` | `Record<string, any>` | The target project in the dependency relation. |
| `relatedProjectMilestone` | `Record<string, any>` | The specific milestone within the target project that the relation is anchored to. |
| `type` | `string` | The type of dependency relationship from the project to the related project (e.g., blocks). |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `user` | `Record<string, any>` | The user who last created or modified the relation. |

#### Example: Load

```ts
const project_relation = await client.ProjectRelation().load({ id: 'project_relation_id' })
```

#### Example: List

```ts
const project_relations = await client.ProjectRelation().list()
```

#### Example: Create

```ts
const project_relation = await client.ProjectRelation().create({
  anchorType: 'example_anchorType',
  createdAt: 'example_createdAt',
  id: 'example_id',
  relatedAnchorType: 'example_relatedAnchorType',
  type: 'example_type',
  updatedAt: 'example_updatedAt',
})
```


### ProjectSearchResult

Create an instance: `const project_search_result = client.ProjectSearchResult()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `autoArchivedAt` | `any` | The time at which the project was automatically archived by the auto-pruning process. |
| `canceledAt` | `any` | The time at which the project was moved into a canceled status. |
| `color` | `string` | The project's color as a HEX string. |
| `completedAt` | `any` | The time at which the project was moved into a completed status. |
| `completedIssueCountHistory` | `number` | The number of completed issues in the project at the end of each week since project creation. |
| `completedScopeHistory` | `number` | The number of completed estimation points at the end of each week since project creation. |
| `content` | `string` | The project's content in markdown format. |
| `contentState` | `string` | [Internal] The project's content as YJS state. |
| `convertedFromIssue` | `Record<string, any>` | The issue that was converted into this project. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `Record<string, any>` | The user who created the project. |
| `currentProgress` | `any` | [INTERNAL] The current progress of the project, broken down by issue status category. |
| `description` | `string` | The short description of the project. |
| `documentContent` | `Record<string, any>` | The content of the project description. |
| `favorite` | `Record<string, any>` | The user's favorite associated with this project. |
| `frequencyResolution` | `string` | The resolution of the reminder frequency. |
| `health` | `string` | The overall health of the project, derived from the most recent project update. |
| `healthUpdatedAt` | `any` | The time at which the project health was last updated, typically when a new project update is posted. |
| `icon` | `string` | The icon of the project. |
| `id` | `string` | The unique identifier of the entity. |
| `identifier` | `string` | [Internal] The human-readable identifier of the project. |
| `inProgressScopeHistory` | `number` | The number of in-progress estimation points at the end of each week since project creation. |
| `integrationsSettings` | `Record<string, any>` | Settings for all integrations associated with that project. |
| `issueCountHistory` | `number` | The total number of issues in the project at the end of each week since project creation. |
| `labelIds` | `string` | The IDs of the project labels associated with this project. |
| `lastAppliedTemplate` | `Record<string, any>` | The last template that was applied to this project. |
| `lastUpdate` | `Record<string, any>` | The most recent status update posted for this project. |
| `lead` | `Record<string, any>` | The user who leads the project. |
| `leadTeam` | `Record<string, any>` | [Internal] The team that leads the project. |
| `metadata` | `any` | Metadata related to search result. |
| `microsoftTeamsChannelId` | `string` | The ID of the Microsoft Teams channel connected to the project, if any. |
| `name` | `string` | The name of the project. |
| `previousIdentifiers` | `string` | [Internal] Identifiers (default and custom) that this project has previously held. |
| `priority` | `number` | The priority of the project. |
| `priorityLabel` | `string` | The priority of the project as a label. |
| `prioritySortOrder` | `number` | The sort order for the project within the workspace when ordered by priority. |
| `progress` | `number` | The overall progress of the project. |
| `progressHistory` | `any` | [INTERNAL] The progress history of the project, tracking issue completion over time. |
| `projectUpdateRemindersPausedUntilAt` | `any` | The time until which project update reminders are paused. |
| `resourceCount` | `number` | The number of resources associated with the project, including documents, external links, and attachments. |
| `scope` | `number` | The overall scope (total estimate points) of the project. |
| `scopeHistory` | `number` | The total scope (estimation points) of the project at the end of each week since project creation. |
| `slackChannelId` | `string` | The ID of the Slack channel connected to the project, if any. |
| `slugId` | `string` | The project's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `number` | The sort order for the project within the workspace. |
| `startDate` | `any` | The estimated start date of the project. |
| `startDateResolution` | `string` | The resolution of the project's start date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `startedAt` | `any` | The time at which the project was moved into a started status. |
| `status` | `Record<string, any>` | The current project status. |
| `targetDate` | `any` | The estimated completion date of the project. |
| `targetDateResolution` | `string` | The resolution of the project's estimated completion date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `trashed` | `boolean` | A flag that indicates whether the project is in the trash bin. |
| `updateReminderFrequency` | `number` | The frequency at which to prompt for updates. |
| `updateReminderFrequencyInWeeks` | `number` | The n-weekly frequency at which to prompt for updates. |
| `updateRemindersDay` | `string` | The day at which to prompt for updates. |
| `updateRemindersHour` | `number` | The hour at which to prompt for updates. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Project URL. |

#### Example: List

```ts
const project_search_results = await client.ProjectSearchResult().list({ term: "example" })
```


### ProjectStatus

Create an instance: `const project_status = client.ProjectStatus()`

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
| `archivedAt` | `any` | The time at which the entity was archived. |
| `color` | `string` | The color of the status as a HEX string, used for display in the UI. |
| `createdAt` | `any` | The time at which the entity was created. |
| `description` | `string` | Description of the status. |
| `id` | `string` | The unique identifier of the entity. |
| `indefinite` | `boolean` | Whether a project can remain in this status indefinitely. |
| `inheritedFrom` | `Record<string, any>` | [Internal] The original workspace or parent-team status that this status was inherited from. |
| `name` | `string` | The name of the status. |
| `position` | `number` | The position of the status within its type group in the workspace's project flow. |
| `team` | `Record<string, any>` | [Internal] The team that the status is scoped to. |
| `type` | `string` | The category type of the project status (e.g., backlog, planned, started, paused, completed, canceled). |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ts
const project_status = await client.ProjectStatus().load({ id: 'project_status_id' })
```

#### Example: List

```ts
const project_statuss = await client.ProjectStatus().list()
```

#### Example: Create

```ts
const project_status = await client.ProjectStatus().create({
  color: 'example_color',
  createdAt: 'example_createdAt',
  id: 'example_id',
  indefinite: true,
  name: 'example_name',
  position: 1,
  type: 'example_type',
  updatedAt: 'example_updatedAt',
})
```


### ProjectUpdate

Create an instance: `const project_update = client.ProjectUpdate()`

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
| `archivedAt` | `any` | The time at which the entity was archived. |
| `body` | `string` | The update content in markdown format. |
| `bodyData` | `string` | [Internal] The content of the update as a Prosemirror document. |
| `commentCount` | `number` | Number of comments associated with the project update. |
| `createdAt` | `any` | The time at which the entity was created. |
| `diff` | `any` | The diff between the current update and the previous one. |
| `diffMarkdown` | `string` | The diff between the current update and the previous one, formatted as markdown. |
| `editedAt` | `any` | The time the update was edited. |
| `health` | `string` | The health of the project at the time this update was posted. |
| `id` | `string` | The unique identifier of the entity. |
| `infoSnapshot` | `any` | [Internal] A snapshot of project properties at the time the update was posted, including team, milestone, and issue statistics. |
| `isDiffHidden` | `boolean` | Whether the diff between this update and the previous one should be hidden in the UI. |
| `isStale` | `boolean` | Whether the project update is stale. |
| `project` | `Record<string, any>` | The project that this status update was posted to. |
| `reactionData` | `any` | Emoji reaction summary, grouped by emoji type. |
| `shortSummary` | `string` | A short AI-generated summary of the project update. |
| `slugId` | `string` | The update's unique URL slug. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | The URL to the project update. |
| `user` | `Record<string, any>` | The user who wrote the update. |

#### Example: Load

```ts
const project_update = await client.ProjectUpdate().load({ id: 'project_update_id' })
```

#### Example: List

```ts
const project_updates = await client.ProjectUpdate().list()
```

#### Example: Create

```ts
const project_update = await client.ProjectUpdate().create({
  body: 'example_body',
  bodyData: 'example_bodyData',
  commentCount: 1,
  createdAt: 'example_createdAt',
  health: 'example_health',
  id: 'example_id',
  isDiffHidden: true,
  isStale: true,
  reactionData: 'example_reactionData',
  slugId: 'example_slugId',
  updatedAt: 'example_updatedAt',
  url: 'example_url',
})
```


### PushSubscription

Create an instance: `const push_subscription = client.PushSubscription()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `id` | `string` | The unique identifier of the entity. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Create

```ts
const push_subscription = await client.PushSubscription().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  updatedAt: 'example_updatedAt',
})
```


### Reaction

Create an instance: `const reaction = client.Reaction()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `comment` | `Record<string, any>` | The comment that the reaction is associated with. |
| `createdAt` | `any` | The time at which the entity was created. |
| `emoji` | `string` | The name of the emoji used for this reaction. |
| `externalUser` | `Record<string, any>` | The external user that created the reaction through an integration. |
| `id` | `string` | The unique identifier of the entity. |
| `initiativeUpdate` | `Record<string, any>` | The initiative update that the reaction is associated with. |
| `issue` | `Record<string, any>` | The issue that the reaction is associated with. |
| `post` | `Record<string, any>` | The post that the reaction is associated with. |
| `projectUpdate` | `Record<string, any>` | The project update that the reaction is associated with. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `user` | `Record<string, any>` | The workspace user that created the reaction. |

#### Example: Create

```ts
const reaction = await client.Reaction().create({
  createdAt: 'example_createdAt',
  emoji: 'example_emoji',
  id: 'example_id',
  updatedAt: 'example_updatedAt',
})
```


### Release

Create an instance: `const release = client.Release()`

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
| `archivedAt` | `any` | The time at which the entity was archived. |
| `autoArchivedAt` | `any` | The time at which the release was automatically archived by the auto pruning process. |
| `canceledAt` | `any` | The time at which the release was canceled. |
| `commitSha` | `string` | The Git commit SHA associated with this release. |
| `completedAt` | `any` | The time at which the release was completed. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `Record<string, any>` | The user who created the release. |
| `currentProgress` | `any` | The current progress summary for the release, including counts of issues by workflow state type (e.g., completed, in progress, unstarted). |
| `description` | `string` | The description of the release in plain text or markdown. |
| `id` | `string` | The unique identifier of the entity. |
| `issueCount` | `number` | Number of issues associated with the release. |
| `name` | `string` | The name of the release. |
| `pipeline` | `Record<string, any>` | The release pipeline that this release belongs to. |
| `progressHistory` | `any` | The historical progress snapshots for the release, tracking how issue completion has evolved over time. |
| `releaseNote` | `Record<string, any>` | [Internal] The primary release note covering this release. |
| `slugId` | `string` | The release's unique URL slug, used to construct human-readable URLs for the release. |
| `stage` | `Record<string, any>` | The current stage of the release within its pipeline (e.g., Planned, In Progress, Completed, Canceled). |
| `startDate` | `any` | The estimated start date of the release. |
| `startedAt` | `any` | The time at which the release first entered a started stage. |
| `targetDate` | `any` | The estimated completion date of the release. |
| `trashed` | `boolean` | A flag that indicates whether the release is in the trash bin. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | The URL to the release page in the Linear app. |
| `version` | `string` | The version identifier for this release (e.g., 'v1.2.3' or a short commit hash). |

#### Example: Load

```ts
const release = await client.Release().load({ id: 'release_id' })
```

#### Example: List

```ts
const releases = await client.Release().list()
```

#### Example: Create

```ts
const release = await client.Release().create({
  createdAt: 'example_createdAt',
  currentProgress: 'example_currentProgress',
  id: 'example_id',
  issueCount: 1,
  name: 'example_name',
  progressHistory: 'example_progressHistory',
  slugId: 'example_slugId',
  updatedAt: 'example_updatedAt',
  url: 'example_url',
})
```


### ReleaseNote

Create an instance: `const release_note = client.ReleaseNote()`

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
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `documentContent` | `Record<string, any>` | Document content backing the release note body. |
| `firstRelease` | `Record<string, any>` | The earliest release covered by this note. |
| `generationStatus` | `string` | Generation status when these release notes are being auto-generated: `pending` while the LLM call is running, `completed` once it lands. |
| `id` | `string` | The unique identifier of the entity. |
| `lastRelease` | `Record<string, any>` | The most recent release covered by this note. |
| `pipeline` | `Record<string, any>` | The release pipeline that this note belongs to. |
| `releaseCount` | `number` | The number of releases covered by this note. |
| `slugId` | `string` | The release note's unique URL slug, used to construct human-readable URLs for the note. |
| `title` | `string` | User-supplied title for the release note. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | The URL to the release note page in the Linear app. |

#### Example: Load

```ts
const release_note = await client.ReleaseNote().load({ id: 'release_note_id' })
```

#### Example: List

```ts
const release_notes = await client.ReleaseNote().list()
```

#### Example: Create

```ts
const release_note = await client.ReleaseNote().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  releaseCount: 1,
  slugId: 'example_slugId',
  updatedAt: 'example_updatedAt',
  url: 'example_url',
})
```


### ReleasePipeline

Create an instance: `const release_pipeline = client.ReleasePipeline()`

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
| `approximateReleaseCount` | `number` | The approximate number of non-archived releases in this pipeline. |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `autoGenerateReleaseNotesOnCompletion` | `boolean` | Whether to automatically generate a release note when a release is completed. |
| `createdAt` | `any` | The time at which the entity was created. |
| `id` | `string` | The unique identifier of the entity. |
| `includePathPatterns` | `string` | Glob patterns to filter commits by file path. |
| `isProduction` | `boolean` | Whether this pipeline targets a production environment. |
| `latestReleaseNote` | `Record<string, any>` | The release note in this pipeline whose covered range ends with the most recent release. |
| `name` | `string` | The name of the pipeline. |
| `releaseNoteTemplate` | `Record<string, any>` | The document template used to define the release notes format for this pipeline. |
| `rolloverIssuesOnCompletion` | `boolean` | Whether completing a scheduled release moves its open issues to the next release. |
| `slugId` | `string` | The pipeline's unique slug identifier, used in URLs and for lookup by human-readable identifier instead of UUID. |
| `trashed` | `boolean` | A flag that indicates whether the pipeline is in the trash bin. |
| `type` | `string` | The type of the pipeline, which determines how releases are created and managed. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | The URL to the release pipeline's releases list in the Linear app. |

#### Example: Load

```ts
const release_pipeline = await client.ReleasePipeline().load({ id: 'release_pipeline_id' })
```

#### Example: List

```ts
const release_pipelines = await client.ReleasePipeline().list()
```

#### Example: Create

```ts
const release_pipeline = await client.ReleasePipeline().create({
  approximateReleaseCount: 1,
  autoGenerateReleaseNotesOnCompletion: true,
  createdAt: 'example_createdAt',
  id: 'example_id',
  includePathPatterns: 'example_includePathPatterns',
  isProduction: true,
  name: 'example_name',
  rolloverIssuesOnCompletion: true,
  slugId: 'example_slugId',
  type: 'example_type',
  updatedAt: 'example_updatedAt',
  url: 'example_url',
})
```


### ReleaseStage

Create an instance: `const release_stage = client.ReleaseStage()`

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
| `archivedAt` | `any` | The time at which the entity was archived. |
| `color` | `string` | The display color of the stage as a HEX string (e.g., '#0f783c'), used for visual representation in the UI. |
| `createdAt` | `any` | The time at which the entity was created. |
| `frozen` | `boolean` | Whether this stage is frozen. |
| `id` | `string` | The unique identifier of the entity. |
| `name` | `string` | The name of the stage. |
| `pipeline` | `Record<string, any>` | The release pipeline that this stage belongs to. |
| `position` | `number` | The position of the stage within its pipeline, used for ordering stages in the UI. |
| `type` | `string` | The lifecycle type of the stage (planned, started, completed, or canceled). |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ts
const release_stage = await client.ReleaseStage().load({ id: 'release_stage_id' })
```

#### Example: List

```ts
const release_stages = await client.ReleaseStage().list()
```

#### Example: Create

```ts
const release_stage = await client.ReleaseStage().create({
  color: 'example_color',
  createdAt: 'example_createdAt',
  frozen: true,
  id: 'example_id',
  name: 'example_name',
  position: 1,
  type: 'example_type',
  updatedAt: 'example_updatedAt',
})
```


### Roadmap

Create an instance: `const roadmap = client.Roadmap()`

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
| `archivedAt` | `any` | The time at which the entity was archived. |
| `color` | `string` | The roadmap's color. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `Record<string, any>` | The user who created the roadmap. |
| `description` | `string` | The description of the roadmap. |
| `id` | `string` | The unique identifier of the entity. |
| `name` | `string` | The name of the roadmap. |
| `organization` | `Record<string, any>` | The workspace of the roadmap. |
| `owner` | `Record<string, any>` | The user who owns the roadmap. |
| `slugId` | `string` | The roadmap's unique URL slug. |
| `sortOrder` | `number` | The sort order of the roadmap within the workspace. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | The canonical url for the roadmap. |

#### Example: Load

```ts
const roadmap = await client.Roadmap().load({ id: 'roadmap_id' })
```

#### Example: List

```ts
const roadmaps = await client.Roadmap().list()
```

#### Example: Create

```ts
const roadmap = await client.Roadmap().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  name: 'example_name',
  slugId: 'example_slugId',
  sortOrder: 1,
  updatedAt: 'example_updatedAt',
  url: 'example_url',
})
```


### RoadmapToProject

Create an instance: `const roadmap_to_project = client.RoadmapToProject()`

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
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `id` | `string` | The unique identifier of the entity. |
| `project` | `Record<string, any>` | The project that the roadmap is associated with. |
| `roadmap` | `Record<string, any>` | The roadmap that the project is associated with. |
| `sortOrder` | `string` | The sort order of the project within the roadmap. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ts
const roadmap_to_project = await client.RoadmapToProject().load({ id: 'roadmap_to_project_id' })
```

#### Example: List

```ts
const roadmap_to_projects = await client.RoadmapToProject().list()
```

#### Example: Create

```ts
const roadmap_to_project = await client.RoadmapToProject().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  sortOrder: 'example_sortOrder',
  updatedAt: 'example_updatedAt',
})
```


### SlaConfiguration

Create an instance: `const sla_configuration = client.SlaConfiguration()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conditions` | `any` | The workflow conditions that determine when this SLA rule applies. |
| `id` | `string` | The identifier of the SLA rule. |
| `name` | `string` | The name of the SLA rule. |
| `removesSla` | `boolean` | Whether the rule removes an SLA instead of setting one. |
| `sla` | `number` | The SLA value configured by the rule, expressed in milliseconds or business days depending on the day-count type. |
| `slaType` | `string` | The SLA type used when the rule sets an SLA. |
| `startMode` | `string` | When SLA timing begins. |

#### Example: List

```ts
const sla_configurations = await client.SlaConfiguration().list({ team_id: "example" })
```


### SsoUrlFromEmailResponse

Create an instance: `const sso_url_from_email_response = client.SsoUrlFromEmailResponse()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `samlSsoUrl` | `string` | SAML SSO sign-in URL. |
| `success` | `boolean` | Whether the operation was successful. |

#### Example: Load

```ts
const sso_url_from_email_response = await client.SsoUrlFromEmailResponse().load({ email: 'email', type: 'type' })
```


### Team

Create an instance: `const team = client.Team()`

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
| `activeCycle` | `Record<string, any>` | Team's currently active cycle. |
| `aiDiscussionSummariesEnabled` | `boolean` | Whether to enable AI discussion summaries for issues in this team. |
| `aiThreadSummariesEnabled` | `boolean` | Whether to enable resolved thread AI summaries. |
| `allMembersCanJoin` | `boolean` | Whether all members in the workspace can join the team. |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `autoArchivePeriod` | `number` | Period after which automatically closed, completed, and duplicate issues are automatically archived in months. |
| `autoCloseChildIssues` | `boolean` | Whether child issues should automatically close when their parent issue is closed |
| `autoCloseParentIssues` | `boolean` | Whether parent issues should automatically close when all child issues are closed |
| `autoClosePeriod` | `number` | Period after which issues are automatically closed in months. |
| `autoCloseStateId` | `string` | The canceled workflow state which auto closed issues will be set to. |
| `color` | `string` | The team's color. |
| `createdAt` | `any` | The time at which the entity was created. |
| `currentProgress` | `any` | [Internal] The current progress of the team. |
| `cycleCalenderUrl` | `string` | Calendar feed URL (iCal) for cycles. |
| `cycleCooldownTime` | `number` | The cooldown time after each cycle in weeks. |
| `cycleDuration` | `number` | The duration of each cycle in weeks. |
| `cycleIssueAutoAssignCompleted` | `boolean` | Auto assign completed issues to current cycle. |
| `cycleIssueAutoAssignStarted` | `boolean` | Auto assign started issues to current cycle. |
| `cycleLockToActive` | `boolean` | Auto assign issues to current cycle if in active status. |
| `cycleStartDay` | `number` | The day of the week that a new cycle starts (0 = Sunday, 1 = Monday, ..., 6 = Saturday). |
| `cyclesEnabled` | `boolean` | Whether the team uses cycles for sprint-style issue management. |
| `defaultIssueEstimate` | `number` | What to use as a default estimate for unestimated issues. |
| `defaultIssueState` | `Record<string, any>` | The default workflow state into which issues are set when they are opened by team members. |
| `defaultProjectTemplate` | `Record<string, any>` | The default template to use for new projects created for the team. |
| `defaultTemplateForMembers` | `Record<string, any>` | The default template to use for new issues created by members of the team. |
| `defaultTemplateForNonMembers` | `Record<string, any>` | The default template to use for new issues created by non-members of the team. |
| `description` | `string` | The team's description. |
| `displayName` | `string` | The name of the team including its parent team name if it has one. |
| `groupIssueHistory` | `boolean` | Whether to group recent issue history entries. |
| `icon` | `string` | The icon of the team. |
| `id` | `string` | The unique identifier of the entity. |
| `inheritIssueEstimation` | `boolean` | Whether the team should inherit its estimation settings from its parent. |
| `inheritProjectStatuses` | `boolean` | [Internal] Whether the team should inherit its project statuses from its parent team, or from the workspace when it has no parent. |
| `inheritSlackAutoCreateProjectChannel` | `boolean` | [Internal] Whether the team should inherit its Slack auto-create project channel setting from its parent. |
| `inheritWorkflowStatuses` | `boolean` | Whether the team should inherit its workflow statuses from its parent. |
| `initiativesEnabled` | `boolean` | Whether team initiatives are enabled and shown in the team's sidebar. |
| `integrationsSettings` | `Record<string, any>` | Settings for all integrations associated with that team. |
| `issueCount` | `number` | The total number of issues in the team. |
| `issueEstimationAllowZero` | `boolean` | Whether to allow zeros in issues estimates. |
| `issueEstimationExtended` | `boolean` | Whether to add additional points to the estimate scale. |
| `issueEstimationType` | `string` | The issue estimation type to use. |
| `joinByDefault` | `boolean` | [Internal] Whether new users should join this team by default. |
| `key` | `string` | The team's unique key, used as a prefix in issue identifiers (e.g., 'ENG' in 'ENG-123') and in URLs. |
| `ledInitiativeCount` | `number` | The number of initiatives led by this team that would be deleted along with it. |
| `name` | `string` | The team's name. |
| `organization` | `Record<string, any>` | The workspace that the team belongs to. |
| `parent` | `Record<string, any>` | The team's parent team. |
| `progressHistory` | `any` | [Internal] The progress history of the team. |
| `requirePriorityToLeaveTriage` | `boolean` | Whether an issue needs to have a priority set before leaving triage. |
| `restrictedBy` | `Record<string, any>` | [Internal] For restricted teams, the enclosing private team that forms the visibility boundary. |
| `restrictedById` | `string` | [Internal] The identifier of the enclosing private team that forms the visibility boundary for restricted teams. |
| `retiredAt` | `any` | The time at which the team was retired. |
| `scimGroupName` | `string` | The SCIM group name for the team. |
| `scimManaged` | `boolean` | Whether the team is managed by a SCIM integration. |
| `securitySettings` | `any` | Security settings for the team, including role-based restrictions for issue sharing, label management, member management, template management, and agent skills. |
| `setIssueSortOrderOnStateChange` | `string` | Where to move issues when changing state. |
| `slackAutoCreateProjectChannel` | `boolean` | [Internal] Whether to automatically create a Slack channel when a new project is created in this team. |
| `timezone` | `string` | The timezone of the team. |
| `triageEnabled` | `boolean` | Whether triage mode is enabled for the team. |
| `triageIssueState` | `Record<string, any>` | The workflow state into which issues are set when they are opened by non-team members or integrations if triage is enabled. |
| `triageResponsibility` | `Record<string, any>` | Team's triage responsibility. |
| `upcomingCycleCount` | `number` | How many upcoming cycles to create. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `visibility` | `string` | The visibility of the team. |

#### Example: Load

```ts
const team = await client.Team().load({ id: 'team_id' })
```

#### Example: List

```ts
const teams = await client.Team().list()
```

#### Example: Create

```ts
const team = await client.Team().create({
  aiDiscussionSummariesEnabled: true,
  aiThreadSummariesEnabled: true,
  autoArchivePeriod: 1,
  createdAt: 'example_createdAt',
  currentProgress: 'example_currentProgress',
  cycleCalenderUrl: 'example_cycleCalenderUrl',
  cycleCooldownTime: 1,
  cycleDuration: 1,
  cycleIssueAutoAssignCompleted: true,
  cycleIssueAutoAssignStarted: true,
  cycleLockToActive: true,
  cycleStartDay: 1,
  cyclesEnabled: true,
  defaultIssueEstimate: 1,
  displayName: 'example_displayName',
  groupIssueHistory: true,
  id: 'example_id',
  inheritIssueEstimation: true,
  inheritProjectStatuses: true,
  inheritSlackAutoCreateProjectChannel: true,
  inheritWorkflowStatuses: true,
  initiativesEnabled: true,
  issueCount: 1,
  issueEstimationAllowZero: true,
  issueEstimationExtended: true,
  issueEstimationType: 'example_issueEstimationType',
  key: 'example_key',
  ledInitiativeCount: 1,
  name: 'example_name',
  progressHistory: 'example_progressHistory',
  requirePriorityToLeaveTriage: true,
  scimManaged: true,
  securitySettings: 'example_securitySettings',
  setIssueSortOrderOnStateChange: 'example_setIssueSortOrderOnStateChange',
  timezone: 'example_timezone',
  triageEnabled: true,
  upcomingCycleCount: 1,
  updatedAt: 'example_updatedAt',
  visibility: 'example_visibility',
})
```


### TeamMembership

Create an instance: `const team_membership = client.TeamMembership()`

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
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `id` | `string` | The unique identifier of the entity. |
| `owner` | `boolean` | Whether the user is an owner of the team. |
| `sortOrder` | `number` | The sort order of this team in the user's personal team list. |
| `team` | `Record<string, any>` | The team that the membership is associated with. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `user` | `Record<string, any>` | The user that the membership is associated with. |

#### Example: Load

```ts
const team_membership = await client.TeamMembership().load({ id: 'team_membership_id' })
```

#### Example: List

```ts
const team_memberships = await client.TeamMembership().list()
```

#### Example: Create

```ts
const team_membership = await client.TeamMembership().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  owner: true,
  sortOrder: 1,
  updatedAt: 'example_updatedAt',
})
```


### Template

Create an instance: `const template = client.Template()`

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
| `archivedAt` | `any` | The time at which the entity was archived. |
| `color` | `string` | The hex color of the template icon. |
| `content` | `string` | The template's content in markdown format: the body it pre-fills on the entity it creates. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `Record<string, any>` | The user who created the template. |
| `description` | `string` | A description of what the template is used for. |
| `hasFormFields` | `boolean` | [Internal] Whether the template has form fields |
| `icon` | `string` | The icon of the template, either a decorative icon type or an emoji string. |
| `id` | `string` | The unique identifier of the entity. |
| `inheritedFrom` | `Record<string, any>` | The parent team template this template was inherited from. |
| `lastAppliedAt` | `any` | The date when the template was last applied to create or update an entity. |
| `lastUpdatedBy` | `Record<string, any>` | The user who last updated the template. |
| `name` | `string` | The name of the template. |
| `organization` | `Record<string, any>` | The workspace that owns this template. |
| `pipeline` | `Record<string, any>` | The release pipeline this template is bound to. |
| `sortOrder` | `number` | The sort order of the template within the templates list. |
| `team` | `Record<string, any>` | The team that the template is associated with. |
| `templateData` | `any` | The template data as a JSON-encoded string containing the pre-filled attributes for the entity type (e.g., issue fields, project configuration, or document content). |
| `type` | `string` | The entity type this template is for, such as 'issue', 'project', or 'document'. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ts
const template = await client.Template().load({ id: 'template_id' })
```

#### Example: List

```ts
const templates = await client.Template().list()
```

#### Example: Create

```ts
const template = await client.Template().create({
  createdAt: 'example_createdAt',
  hasFormFields: true,
  id: 'example_id',
  name: 'example_name',
  sortOrder: 1,
  templateData: 'example_templateData',
  type: 'example_type',
  updatedAt: 'example_updatedAt',
})
```


### TimeSchedule

Create an instance: `const time_schedule = client.TimeSchedule()`

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
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `externalId` | `string` | The identifier of the external schedule. |
| `externalUrl` | `string` | The URL to the external schedule. |
| `id` | `string` | The unique identifier of the entity. |
| `integration` | `Record<string, any>` | The identifier of the Linear integration populating the schedule. |
| `name` | `string` | The name of the schedule. |
| `organization` | `Record<string, any>` | The workspace of the schedule. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ts
const time_schedule = await client.TimeSchedule().load({ id: 'time_schedule_id' })
```

#### Example: List

```ts
const time_schedules = await client.TimeSchedule().list()
```

#### Example: Create

```ts
const time_schedule = await client.TimeSchedule().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  name: 'example_name',
  updatedAt: 'example_updatedAt',
})
```


### TriageResponsibility

Create an instance: `const triage_responsibility = client.TriageResponsibility()`

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
| `action` | `string` | The action to take when an issue is added to triage. |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `currentUser` | `Record<string, any>` | The user currently responsible for triage. |
| `id` | `string` | The unique identifier of the entity. |
| `team` | `Record<string, any>` | The team to which the triage responsibility belongs to. |
| `timeSchedule` | `Record<string, any>` | The time schedule used for scheduling. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ts
const triage_responsibility = await client.TriageResponsibility().load({ id: 'triage_responsibility_id' })
```

#### Example: List

```ts
const triage_responsibilitys = await client.TriageResponsibility().list()
```

#### Example: Create

```ts
const triage_responsibility = await client.TriageResponsibility().create({
  action: 'example_action',
  createdAt: 'example_createdAt',
  id: 'example_id',
  updatedAt: 'example_updatedAt',
})
```


### UploadFile

Create an instance: `const upload_file = client.UploadFile()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assetUrl` | `string` | The permanent asset URL where the file will be accessible after upload. |
| `contentType` | `string` | The content type. |
| `filename` | `string` | The filename. |
| `metaData` | `any` | Optional metadata associated with the upload, such as the related issue or comment ID. |
| `size` | `number` | The size of the uploaded file. |
| `uploadUrl` | `string` | The pre-signed URL to which the file should be uploaded via a PUT request. |

#### Example: Create

```ts
const upload_file = await client.UploadFile().create({
  content_type: 'example_content_type',
  filename: 'example_filename',
  size: 1,
  assetUrl: 'example_assetUrl',
  contentType: 'example_contentType',
  uploadUrl: 'example_uploadUrl',
})
```


### UsageAlert

Create an instance: `const usage_alert = client.UsageAlert()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `id` | `string` | The unique identifier of the entity. |
| `metadata` | `any` | Type-specific snapshot captured when the alert was triggered, keyed by the alert type — for example the credit balance and threshold for a lowBalance alert. |
| `resolvedAt` | `any` | The time when the usage alert was resolved or archived. |
| `type` | `string` | The kind of usage alert that was triggered. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ts
const usage_alert = await client.UsageAlert().load({ id: 'usage_alert_id' })
```

#### Example: List

```ts
const usage_alerts = await client.UsageAlert().list()
```


### User

Create an instance: `const user = client.User()`

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
| `active` | `boolean` | Whether the user account is active or disabled (suspended). |
| `admin` | `boolean` | Whether the user is a workspace administrator. |
| `app` | `boolean` | Whether the user is an app. |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `avatarBackgroundColor` | `string` | The background color of the avatar for users without set avatar. |
| `avatarUrl` | `string` | An URL to the user's avatar image. |
| `calendarHash` | `string` | [DEPRECATED] Hash for the user to be used in calendar URLs. |
| `canAccessAnyPublicTeam` | `boolean` | Whether this user can access any public team in the workspace. |
| `createdAt` | `any` | The time at which the entity was created. |
| `createdIssueCount` | `number` | Number of issues created. |
| `description` | `string` | A short description of the user, such as their title or a brief bio. |
| `disableReason` | `string` | The reason why the user account is disabled. |
| `displayName` | `string` | The user's display (nick) name. |
| `email` | `string` | The user's email address. |
| `gitHubUserId` | `string` | The user's GitHub user ID. |
| `guest` | `boolean` | Whether the user is a guest in the workspace and limited to accessing a subset of teams. |
| `hasGitHubCodeAccess` | `boolean` | [Internal] Whether this user can access GitHub source code through Linear. |
| `id` | `string` | The unique identifier of the entity. |
| `identityProvider` | `Record<string, any>` | [INTERNAL] Identity provider the user is managed by. |
| `initials` | `string` | The initials of the user. |
| `isAssignable` | `boolean` | Whether the user can be assigned to issues. |
| `isMe` | `boolean` | Whether the user is the currently authenticated user. |
| `isMentionable` | `boolean` | Whether the user is mentionable. |
| `lastSeen` | `any` | The last time the user was seen online. |
| `name` | `string` | The user's full name. |
| `organization` | `Record<string, any>` | The workspace that the user belongs to. |
| `owner` | `boolean` | Whether the user is a workspace owner, which is the highest permission level. |
| `statusEmoji` | `string` | The emoji representing the user's current status. |
| `statusLabel` | `string` | The text label of the user's current status. |
| `statusUntilAt` | `any` | The date and time at which the user's current status should be automatically cleared. |
| `supportsAgentSessions` | `boolean` | Whether this agent user supports agent sessions. |
| `timezone` | `string` | The local timezone of the user. |
| `title` | `string` | The user's job title. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | User's profile URL. |

#### Example: Load

```ts
const user = await client.User().load({ id: 'user_id' })
```

#### Example: List

```ts
const users = await client.User().list()
```

#### Example: Create

```ts
const user = await client.User().create({
  active: true,
  admin: true,
  app: true,
  avatarBackgroundColor: 'example_avatarBackgroundColor',
  canAccessAnyPublicTeam: true,
  createdAt: 'example_createdAt',
  createdIssueCount: 1,
  displayName: 'example_displayName',
  email: 'example_email',
  guest: true,
  hasGitHubCodeAccess: true,
  id: 'example_id',
  initials: 'example_initials',
  isAssignable: true,
  isMe: true,
  isMentionable: true,
  name: 'example_name',
  owner: true,
  supportsAgentSessions: true,
  updatedAt: 'example_updatedAt',
  url: 'example_url',
})
```


### UserSetting

Create an instance: `const user_setting = client.UserSetting()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `autoAssignToSelf` | `boolean` | Whether to auto-assign newly created issues to the current user by default. |
| `calendarHash` | `string` | A unique hash for the user, used to construct secure calendar subscription URLs. |
| `createdAt` | `any` | The time at which the entity was created. |
| `feedLastSeenTime` | `any` | The user's last seen time for the pulse feed. |
| `feedSummarySchedule` | `string` | The user's preferred schedule for receiving feed summary digests. |
| `id` | `string` | The unique identifier of the entity. |
| `pullRequestMergeStrategyPreference` | `string` | [Internal] The user's preferred merge method for pull requests. |
| `showFullUserNames` | `boolean` | Whether to show full user names instead of display names. |
| `subscribedToChangelog` | `boolean` | Whether this user is subscribed to receive changelog emails about Linear product updates. |
| `subscribedToDPA` | `boolean` | Whether this user is subscribed to receive Data Processing Agreement (DPA) related emails. |
| `subscribedToInviteAccepted` | `boolean` | Whether this user is subscribed to receive email notifications when their workspace invitations are accepted. |
| `subscribedToPrivacyLegalUpdates` | `boolean` | Whether this user is subscribed to receive emails about privacy policy and legal updates. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `user` | `Record<string, any>` | The user that these settings belong to. |

#### Example: Load

```ts
const user_setting = await client.UserSetting().load({ id: 'user_setting_id' })
```

#### Example: Create

```ts
const user_setting = await client.UserSetting().create({
  category: 'example_category',
  channel: 'example_channel',
  subscribe: true,
  autoAssignToSelf: true,
  createdAt: 'example_createdAt',
  id: 'example_id',
  showFullUserNames: true,
  subscribedToChangelog: true,
  subscribedToDPA: true,
  subscribedToInviteAccepted: true,
  subscribedToPrivacyLegalUpdates: true,
  updatedAt: 'example_updatedAt',
})
```


### ViewPreference

Create an instance: `const view_preference = client.ViewPreference()`

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
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `id` | `string` | The unique identifier of the entity. |
| `type` | `string` | The type of view preferences: "organization" for workspace-wide defaults or "user" for personal overrides. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `viewType` | `string` | The type of view these preferences apply to, such as board, cycle, project, customView, myIssues, etc. |

#### Example: Load

```ts
const view_preference = await client.ViewPreference().load({ view_type: 'view_type' })
```

#### Example: Create

```ts
const view_preference = await client.ViewPreference().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  type: 'example_type',
  updatedAt: 'example_updatedAt',
  viewType: 'example_viewType',
})
```


### Webhook

Create an instance: `const webhook = client.Webhook()`

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
| `allPublicTeams` | `boolean` | Whether the webhook receives events from all public (non-private) teams in the organization, including teams created after the webhook was set up. |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `Record<string, any>` | The user who created the webhook. |
| `enabled` | `boolean` | Whether the webhook is enabled. |
| `id` | `string` | The unique identifier of the entity. |
| `label` | `string` | A human-readable label for the webhook, used for identification in the UI. |
| `resourceTypes` | `string` | The resource types this webhook is subscribed to (e.g., 'Issue', 'Comment', 'Project', 'Cycle'). |
| `secret` | `string` | A secret token used to sign webhook payloads with HMAC-SHA256, allowing the recipient to verify that the payload originated from Linear and was not tampered with. |
| `team` | `Record<string, any>` | The single team that the webhook is scoped to. |
| `teamIds` | `string` | [INTERNAL] An array of team IDs that the webhook is subscribed to. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | The destination URL where webhook payloads will be sent via HTTP POST. |

#### Example: Load

```ts
const webhook = await client.Webhook().load({ id: 'webhook_id' })
```

#### Example: List

```ts
const webhooks = await client.Webhook().list()
```

#### Example: Create

```ts
const webhook = await client.Webhook().create({
  allPublicTeams: true,
  createdAt: 'example_createdAt',
  enabled: true,
  id: 'example_id',
  resourceTypes: 'example_resourceTypes',
  updatedAt: 'example_updatedAt',
})
```


### WebhookFailureEvent

Create an instance: `const webhook_failure_event = client.WebhookFailureEvent()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `any` | The time at which the entity was created. |
| `executionId` | `string` | A stable identifier for the webhook delivery attempt. |
| `httpStatus` | `number` | The HTTP status code returned by the webhook recipient. |
| `id` | `string` | The unique identifier of the entity. |
| `responseOrError` | `string` | The HTTP response body returned by the recipient, or the error message if the request failed before receiving a response. |
| `url` | `string` | The URL that the webhook was trying to push to. |
| `webhook` | `Record<string, any>` | The webhook that this failure event is associated with. |

#### Example: List

```ts
const webhook_failure_events = await client.WebhookFailureEvent().list()
```


### WorkflowState

Create an instance: `const workflow_state = client.WorkflowState()`

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
| `archivedAt` | `any` | The time at which the entity was archived. |
| `color` | `string` | The state's UI color as a HEX string. |
| `createdAt` | `any` | The time at which the entity was created. |
| `description` | `string` | Description of the state. |
| `id` | `string` | The unique identifier of the entity. |
| `inheritedFrom` | `Record<string, any>` | The parent team's workflow state that this state was inherited from. |
| `name` | `string` | The state's human-readable name (e.g., 'In Progress', 'Done', 'Backlog'). |
| `position` | `number` | The position of the state in the team's workflow. |
| `team` | `Record<string, any>` | The team that this workflow state belongs to. |
| `type` | `string` | The type of the state. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```ts
const workflow_state = await client.WorkflowState().load({ id: 'workflow_state_id' })
```

#### Example: List

```ts
const workflow_states = await client.WorkflowState().list()
```

#### Example: Create

```ts
const workflow_state = await client.WorkflowState().create({
  color: 'example_color',
  createdAt: 'example_createdAt',
  id: 'example_id',
  name: 'example_name',
  position: 1,
  type: 'example_type',
  updatedAt: 'example_updatedAt',
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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

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

### Module structure

```
linear/
├── src/
│   ├── LinearSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { LinearSDK } from '@voxgig-sdk/linear'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const agentactivity = client.AgentActivity()
await agentactivity.list()

// agentactivity.data() now returns the agentactivity data from the last `list`
// agentactivity.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
