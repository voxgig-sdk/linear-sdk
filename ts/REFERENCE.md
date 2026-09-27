# Linear TypeScript SDK Reference

Complete API reference for the Linear TypeScript SDK.


## LinearSDK

### Constructor

```ts
new LinearSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `LinearSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = LinearSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `LinearSDK` instance in test mode.


### Instance Methods

#### `AccessKeyRelease(data?: object)`

Create a new `AccessKeyRelease` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AccessKeyReleaseEntity` instance.

#### `AccessKeyReleasePipeline(data?: object)`

Create a new `AccessKeyReleasePipeline` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AccessKeyReleasePipelineEntity` instance.

#### `AgentActivity(data?: object)`

Create a new `AgentActivity` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentActivityEntity` instance.

#### `AgentSession(data?: object)`

Create a new `AgentSession` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentSessionEntity` instance.

#### `AgentSkill(data?: object)`

Create a new `AgentSkill` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentSkillEntity` instance.

#### `Application(data?: object)`

Create a new `Application` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApplicationEntity` instance.

#### `Attachment(data?: object)`

Create a new `Attachment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AttachmentEntity` instance.

#### `AuditEntry(data?: object)`

Create a new `AuditEntry` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AuditEntryEntity` instance.

#### `AuditEntryType(data?: object)`

Create a new `AuditEntryType` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AuditEntryTypeEntity` instance.

#### `AuthResolverResponse(data?: object)`

Create a new `AuthResolverResponse` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AuthResolverResponseEntity` instance.

#### `AuthenticationSessionResponse(data?: object)`

Create a new `AuthenticationSessionResponse` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AuthenticationSessionResponseEntity` instance.

#### `Comment(data?: object)`

Create a new `Comment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CommentEntity` instance.

#### `CreateOrJoinOrganizationResponse(data?: object)`

Create a new `CreateOrJoinOrganizationResponse` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreateOrJoinOrganizationResponseEntity` instance.

#### `CustomView(data?: object)`

Create a new `CustomView` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomViewEntity` instance.

#### `Customer(data?: object)`

Create a new `Customer` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomerEntity` instance.

#### `CustomerNeed(data?: object)`

Create a new `CustomerNeed` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomerNeedEntity` instance.

#### `CustomerStatus(data?: object)`

Create a new `CustomerStatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomerStatusEntity` instance.

#### `CustomerTier(data?: object)`

Create a new `CustomerTier` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomerTierEntity` instance.

#### `Cycle(data?: object)`

Create a new `Cycle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CycleEntity` instance.

#### `Diff(data?: object)`

Create a new `Diff` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DiffEntity` instance.

#### `Document(data?: object)`

Create a new `Document` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DocumentEntity` instance.

#### `DocumentSearchResult(data?: object)`

Create a new `DocumentSearchResult` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DocumentSearchResultEntity` instance.

#### `EmailIntakeAddress(data?: object)`

Create a new `EmailIntakeAddress` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EmailIntakeAddressEntity` instance.

#### `EmailUserAccountAuthChallengeResponse(data?: object)`

Create a new `EmailUserAccountAuthChallengeResponse` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EmailUserAccountAuthChallengeResponseEntity` instance.

#### `Emoji(data?: object)`

Create a new `Emoji` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EmojiEntity` instance.

#### `EntityExternalLink(data?: object)`

Create a new `EntityExternalLink` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EntityExternalLinkEntity` instance.

#### `ExternalUser(data?: object)`

Create a new `ExternalUser` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ExternalUserEntity` instance.

#### `Favorite(data?: object)`

Create a new `Favorite` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FavoriteEntity` instance.

#### `GitAutomationState(data?: object)`

Create a new `GitAutomationState` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GitAutomationStateEntity` instance.

#### `GitAutomationTargetBranch(data?: object)`

Create a new `GitAutomationTargetBranch` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GitAutomationTargetBranchEntity` instance.

#### `GitHubIntegrationConnectDetail(data?: object)`

Create a new `GitHubIntegrationConnectDetail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GitHubIntegrationConnectDetailEntity` instance.

#### `Initiative(data?: object)`

Create a new `Initiative` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `InitiativeEntity` instance.

#### `InitiativeLabel(data?: object)`

Create a new `InitiativeLabel` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `InitiativeLabelEntity` instance.

#### `InitiativeLeadTeamChangeImpact(data?: object)`

Create a new `InitiativeLeadTeamChangeImpact` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `InitiativeLeadTeamChangeImpactEntity` instance.

#### `InitiativeRelation(data?: object)`

Create a new `InitiativeRelation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `InitiativeRelationEntity` instance.

#### `InitiativeToProject(data?: object)`

Create a new `InitiativeToProject` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `InitiativeToProjectEntity` instance.

#### `InitiativeUpdate(data?: object)`

Create a new `InitiativeUpdate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `InitiativeUpdateEntity` instance.

#### `Integration(data?: object)`

Create a new `Integration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IntegrationEntity` instance.

#### `IntegrationTemplate(data?: object)`

Create a new `IntegrationTemplate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IntegrationTemplateEntity` instance.

#### `IntegrationsSetting(data?: object)`

Create a new `IntegrationsSetting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IntegrationsSettingEntity` instance.

#### `Issue(data?: object)`

Create a new `Issue` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IssueEntity` instance.

#### `IssueImport(data?: object)`

Create a new `IssueImport` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IssueImportEntity` instance.

#### `IssueLabel(data?: object)`

Create a new `IssueLabel` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IssueLabelEntity` instance.

#### `IssuePriorityValue(data?: object)`

Create a new `IssuePriorityValue` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IssuePriorityValueEntity` instance.

#### `IssueRelation(data?: object)`

Create a new `IssueRelation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IssueRelationEntity` instance.

#### `IssueSearchResult(data?: object)`

Create a new `IssueSearchResult` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IssueSearchResultEntity` instance.

#### `IssueToRelease(data?: object)`

Create a new `IssueToRelease` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IssueToReleaseEntity` instance.

#### `LogoutResponse(data?: object)`

Create a new `LogoutResponse` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LogoutResponseEntity` instance.

#### `Notification(data?: object)`

Create a new `Notification` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NotificationEntity` instance.

#### `NotificationSubscription(data?: object)`

Create a new `NotificationSubscription` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NotificationSubscriptionEntity` instance.

#### `OAuthApplication(data?: object)`

Create a new `OAuthApplication` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OAuthApplicationEntity` instance.

#### `Organization(data?: object)`

Create a new `Organization` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrganizationEntity` instance.

#### `OrganizationDomain(data?: object)`

Create a new `OrganizationDomain` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrganizationDomainEntity` instance.

#### `OrganizationInvite(data?: object)`

Create a new `OrganizationInvite` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrganizationInviteEntity` instance.

#### `OrganizationMeta(data?: object)`

Create a new `OrganizationMeta` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrganizationMetaEntity` instance.

#### `PasskeyLoginStartResponse(data?: object)`

Create a new `PasskeyLoginStartResponse` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PasskeyLoginStartResponseEntity` instance.

#### `Project(data?: object)`

Create a new `Project` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectEntity` instance.

#### `ProjectLabel(data?: object)`

Create a new `ProjectLabel` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectLabelEntity` instance.

#### `ProjectMilestone(data?: object)`

Create a new `ProjectMilestone` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectMilestoneEntity` instance.

#### `ProjectMilestoneMoveProjectTeam(data?: object)`

Create a new `ProjectMilestoneMoveProjectTeam` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectMilestoneMoveProjectTeamEntity` instance.

#### `ProjectRelation(data?: object)`

Create a new `ProjectRelation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectRelationEntity` instance.

#### `ProjectSearchResult(data?: object)`

Create a new `ProjectSearchResult` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectSearchResultEntity` instance.

#### `ProjectStatus(data?: object)`

Create a new `ProjectStatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectStatusEntity` instance.

#### `ProjectUpdate(data?: object)`

Create a new `ProjectUpdate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectUpdateEntity` instance.

#### `PushSubscription(data?: object)`

Create a new `PushSubscription` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PushSubscriptionEntity` instance.

#### `Reaction(data?: object)`

Create a new `Reaction` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReactionEntity` instance.

#### `Release(data?: object)`

Create a new `Release` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReleaseEntity` instance.

#### `ReleaseNote(data?: object)`

Create a new `ReleaseNote` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReleaseNoteEntity` instance.

#### `ReleasePipeline(data?: object)`

Create a new `ReleasePipeline` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReleasePipelineEntity` instance.

#### `ReleaseStage(data?: object)`

Create a new `ReleaseStage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReleaseStageEntity` instance.

#### `Roadmap(data?: object)`

Create a new `Roadmap` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RoadmapEntity` instance.

#### `RoadmapToProject(data?: object)`

Create a new `RoadmapToProject` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RoadmapToProjectEntity` instance.

#### `SlaConfiguration(data?: object)`

Create a new `SlaConfiguration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SlaConfigurationEntity` instance.

#### `SsoUrlFromEmailResponse(data?: object)`

Create a new `SsoUrlFromEmailResponse` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SsoUrlFromEmailResponseEntity` instance.

#### `Team(data?: object)`

Create a new `Team` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamEntity` instance.

#### `TeamMembership(data?: object)`

Create a new `TeamMembership` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamMembershipEntity` instance.

#### `Template(data?: object)`

Create a new `Template` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TemplateEntity` instance.

#### `TimeSchedule(data?: object)`

Create a new `TimeSchedule` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TimeScheduleEntity` instance.

#### `TriageResponsibility(data?: object)`

Create a new `TriageResponsibility` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TriageResponsibilityEntity` instance.

#### `UploadFile(data?: object)`

Create a new `UploadFile` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UploadFileEntity` instance.

#### `UsageAlert(data?: object)`

Create a new `UsageAlert` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UsageAlertEntity` instance.

#### `User(data?: object)`

Create a new `User` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserEntity` instance.

#### `UserSetting(data?: object)`

Create a new `UserSetting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserSettingEntity` instance.

#### `ViewPreference(data?: object)`

Create a new `ViewPreference` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ViewPreferenceEntity` instance.

#### `Webhook(data?: object)`

Create a new `Webhook` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WebhookEntity` instance.

#### `WebhookFailureEvent(data?: object)`

Create a new `WebhookFailureEvent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WebhookFailureEventEntity` instance.

#### `WorkflowState(data?: object)`

Create a new `WorkflowState` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkflowStateEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `LinearSDK.test()`.

**Returns:** `LinearSDK` instance in test mode.


---

## AccessKeyReleaseEntity

```ts
const access_key_release = client.AccessKeyRelease()
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `release_complete_by_access_key` | `releaseCompleteByAccessKey` | `client.AccessKeyRelease().create({ $action: 'release_complete_by_access_key', ... })` |
| `release_sync_by_access_key` | `releaseSyncByAccessKey` | `client.AccessKeyRelease().create({ $action: 'release_sync_by_access_key', ... })` |
| `release_update_by_pipeline_by_access_key` | `releaseUpdateByPipelineByAccessKey` | `client.AccessKeyRelease().create({ $action: 'release_update_by_pipeline_by_access_key', ... })` |

An action returns that action's OWN response, which is not necessarily a
AccessKeyRelease record — check the API definition for its shape.

```ts
const result = await client.AccessKeyRelease().create({
  $action: 'release_complete_by_access_key',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AccessKeyRelease().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  name: 'example_name',
  url: 'example_url',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AccessKeyRelease().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AccessKeyRelease().load({ id: 'access_key_release_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AccessKeyReleaseEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AccessKeyReleasePipelineEntity

```ts
const access_key_release_pipeline = client.AccessKeyReleasePipeline()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The unique identifier of the release pipeline. |
| `includePathPatterns` | `string` | Yes | Glob patterns used to filter commits by changed file path. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AccessKeyReleasePipeline().load({ id: 'access_key_release_pipeline_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AccessKeyReleasePipelineEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AgentActivityEntity

```ts
const agent_activity = client.AgentActivity()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentSession` | `Record<string, any>` | No | The agent session this activity belongs to. |
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
| `sourceComment` | `Record<string, any>` | No | The source comment this activity is linked to. |
| `sourceMetadata` | `any` | No | Metadata about the external source that created this agent activity. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `Record<string, any>` | No | The user who created this agent activity. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `create_prompt` | `agentActivityCreatePrompt` | `client.AgentActivity().create({ $action: 'create_prompt', ... })` |
| `delete_queued` | `agentActivityDeleteQueued` | `client.AgentActivity().update({ $action: 'delete_queued', ... })` |
| `send_queued` | `agentActivitySendQueued` | `client.AgentActivity().update({ $action: 'send_queued', ... })` |

An action returns that action's OWN response, which is not necessarily a
AgentActivity record — check the API definition for its shape.

```ts
const result = await client.AgentActivity().create({
  $action: 'create_prompt',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AgentActivity().create({
  createdAt: 'example_createdAt',
  ephemeral: true,
  id: 'example_id',
  queued: true,
  updatedAt: 'example_updatedAt',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AgentActivity().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AgentActivity().load({ id: 'agent_activity_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AgentActivity().update({
  id: 'agent_activity_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentActivityEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AgentSessionEntity

```ts
const agent_session = client.AgentSession()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `appUser` | `Record<string, any>` | No | The agent user that is associated with this agent session. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `codingHarnessModelLabel` | `string` | No | [Internal] Compact display label for the coding harness model used by this session, derived from the latest associated sandbox. |
| `comment` | `Record<string, any>` | No | The comment this agent session is associated with. |
| `context` | `any` | Yes | The entity contexts this session is related to, such as issues or projects referenced in direct chat sessions. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `Record<string, any>` | No | The human user responsible for the agent session. |
| `dismissedAt` | `any` | No | The time a user dismissed this agent session. |
| `dismissedBy` | `Record<string, any>` | No | The user who dismissed the agent session. |
| `endedAt` | `any` | No | The time the agent session completed. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `issue` | `Record<string, any>` | No | The issue this agent session is associated with. |
| `modelSelection` | `any` | No | [Internal] How Adaptive selected the model route used by this coding session. |
| `plan` | `any` | No | A dynamically updated plan describing the agent's execution strategy, including steps to be taken and their current status. |
| `pullRequest` | `Record<string, any>` | No | The pull request this agent session is anchored to, when started from a pull request. |
| `slugId` | `string` | Yes | The agent session's unique URL slug. |
| `sourceComment` | `Record<string, any>` | No | The comment that this agent session was spawned from, if from a different thread. |
| `sourceMetadata` | `any` | No | Metadata about the external source that created this agent session. |
| `startedAt` | `any` | No | The time the agent session transitioned to active status and began work. |
| `status` | `string` | Yes | The current status of the agent session, such as pending, active, awaiting input, complete, error, or stale. |
| `summary` | `string` | No | The session title, generated automatically or set by the owning OAuth application. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | No | The URL to the agent session page in the Linear app. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `create_on_comment` | `agentSessionCreateOnComment` | `client.AgentSession().create({ $action: 'create_on_comment', ... })` |
| `create_on_issue` | `agentSessionCreateOnIssue` | `client.AgentSession().create({ $action: 'create_on_issue', ... })` |
| `restart_with_default_model` | `agentSessionRestartWithDefaultModel` | `client.AgentSession().update({ $action: 'restart_with_default_model', ... })` |
| `update_external_url` | `agentSessionUpdateExternalUrl` | `client.AgentSession().update({ $action: 'update_external_url', ... })` |

An action returns that action's OWN response, which is not necessarily a
AgentSession record — check the API definition for its shape.

```ts
const result = await client.AgentSession().create({
  $action: 'create_on_comment',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AgentSession().create({
  context: 'example_context',
  createdAt: 'example_createdAt',
  id: 'example_id',
  slugId: 'example_slugId',
  status: 'example_status',
  updatedAt: 'example_updatedAt',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AgentSession().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AgentSession().load({ id: 'agent_session_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AgentSession().update({
  id: 'agent_session_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentSessionEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AgentSkillEntity

```ts
const agent_skill = client.AgentSkill()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `body` | `string` | Yes | The skill instructions in markdown format. |
| `color` | `string` | No | The skill's color. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `Record<string, any>` | No | The user who created the skill. |
| `description` | `string` | No | The skill's description. |
| `icon` | `string` | No | The icon of the skill. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `inheritedFrom` | `Record<string, any>` | No | The parent-team skill this skill was inherited from. |
| `lastUpdatedBy` | `Record<string, any>` | No | The user who last updated the skill. |
| `lastUsedAt` | `any` | No | The time the skill was last used by anyone in the workspace. |
| `owner` | `Record<string, any>` | No | The user who owns the skill. |
| `recentUsageCount` | `number` | Yes | The number of times the skill was used by anyone in the workspace in the last 30 days. |
| `shared` | `boolean` | Yes | Whether the skill is shared with everyone in the workspace. |
| `slugId` | `string` | Yes | The skill's unique URL slug. |
| `teamId` | `string` | No | The identifier of the team this skill is shared with. |
| `title` | `string` | Yes | The skill's title. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AgentSkill().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AgentSkill().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AgentSkill().load({ id: 'agent_skill_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.AgentSkill().remove({ id: 'agent_skill_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AgentSkill().update({
  id: 'agent_skill_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentSkillEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApplicationEntity

```ts
const application = client.Application()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Application().load({ client_id: 'client_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApplicationEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AttachmentEntity

```ts
const attachment = client.Attachment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `bodyData` | `string` | No | The body data of the attachment, if any. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `Record<string, any>` | No | The creator of the attachment. |
| `externalUserCreator` | `Record<string, any>` | No | The non-Linear user who created the attachment. |
| `groupBySource` | `boolean` | Yes | Whether attachments from the same source application should be visually grouped together in the Linear issue detail view. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `issue` | `Record<string, any>` | No | The issue this attachment belongs to. |
| `metadata` | `any` | Yes | Integration-specific metadata for this attachment. |
| `originalIssue` | `Record<string, any>` | No | The issue this attachment was originally created on. |
| `source` | `any` | No | Information about the source which created the attachment. |
| `sourceType` | `string` | No | The source type of the attachment, derived from the source metadata. |
| `subtitle` | `string` | No | Content for the subtitle line in the Linear attachment widget. |
| `title` | `string` | Yes | Content for the title line in the Linear attachment widget. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | The URL of the external resource this attachment links to. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `link_discord` | `attachmentLinkDiscord` | `client.Attachment().update({ $action: 'link_discord', ... })` |
| `link_front` | `attachmentLinkFront` | `client.Attachment().update({ $action: 'link_front', ... })` |
| `link_git_hub_issue` | `attachmentLinkGitHubIssue` | `client.Attachment().update({ $action: 'link_git_hub_issue', ... })` |
| `link_git_hub_pr` | `attachmentLinkGitHubPR` | `client.Attachment().update({ $action: 'link_git_hub_pr', ... })` |
| `link_git_lab_mr` | `attachmentLinkGitLabMR` | `client.Attachment().update({ $action: 'link_git_lab_mr', ... })` |
| `link_intercom` | `attachmentLinkIntercom` | `client.Attachment().update({ $action: 'link_intercom', ... })` |
| `link_jira_issue` | `attachmentLinkJiraIssue` | `client.Attachment().update({ $action: 'link_jira_issue', ... })` |
| `link_salesforce` | `attachmentLinkSalesforce` | `client.Attachment().update({ $action: 'link_salesforce', ... })` |
| `link_slack` | `attachmentLinkSlack` | `client.Attachment().update({ $action: 'link_slack', ... })` |
| `link_url` | `attachmentLinkURL` | `client.Attachment().update({ $action: 'link_url', ... })` |
| `link_zendesk` | `attachmentLinkZendesk` | `client.Attachment().update({ $action: 'link_zendesk', ... })` |
| `sync_to_slack` | `attachmentSyncToSlack` | `client.Attachment().update({ $action: 'sync_to_slack', ... })` |

An action returns that action's OWN response, which is not necessarily a
Attachment record — check the API definition for its shape.

```ts
const result = await client.Attachment().update({
  $action: 'link_discord',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Attachment().create({
  createdAt: 'example_createdAt',
  groupBySource: true,
  id: 'example_id',
  metadata: 'example_metadata',
  title: 'example_title',
  updatedAt: 'example_updatedAt',
  url: 'example_url',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Attachment().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Attachment().load({ id: 'attachment_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Attachment().remove({ id: 'attachment_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Attachment().update({
  id: 'attachment_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AttachmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AuditEntryEntity

```ts
const audit_entry = client.AuditEntry()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `Record<string, any>` | No | The user that caused the audit entry to be created. |
| `actorId` | `string` | No | The ID of the user that caused the audit entry to be created. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `countryCode` | `string` | No | The ISO 3166-1 alpha-2 country code derived from the request IP address. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `ip` | `string` | No | The IP address of the actor at the time the audited action was performed. |
| `metadata` | `any` | No | Additional metadata related to the audit entry. |
| `organization` | `Record<string, any>` | No | The workspace the audit log belongs to. |
| `requestInformation` | `any` | No | Additional information related to the request which performed the action. |
| `type` | `string` | Yes | The type of audited action (e.g., user authentication, permission change, data export, setting modification). |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AuditEntry().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AuditEntryEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AuditEntryTypeEntity

```ts
const audit_entry_type = client.AuditEntryType()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | Yes | Description of the audit entry type. |
| `type` | `string` | Yes | The audit entry type. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AuditEntryType().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AuditEntryTypeEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AuthResolverResponseEntity

```ts
const auth_resolver_response = client.AuthResolverResponse()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowDomainAccess` | `boolean` | No | Should the signup flow allow access for the domain. |
| `email` | `string` | Yes | Email for the authenticated account. |
| `id` | `string` | Yes | User account ID. |
| `lastUsedOrganizationId` | `string` | No | ID of the organization last accessed by the user. |
| `service` | `string` | No | The authentication service used for the current session (e.g., google, email, saml). |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `email_token_user_account_auth` | `emailTokenUserAccountAuth` | `client.AuthResolverResponse().create({ $action: 'email_token_user_account_auth', ... })` |
| `google_user_account_auth` | `googleUserAccountAuth` | `client.AuthResolverResponse().create({ $action: 'google_user_account_auth', ... })` |
| `saml_token_user_account_auth` | `samlTokenUserAccountAuth` | `client.AuthResolverResponse().create({ $action: 'saml_token_user_account_auth', ... })` |
| `passkey_login_finish` | `passkeyLoginFinish` | `client.AuthResolverResponse().update({ $action: 'passkey_login_finish', ... })` |

An action returns that action's OWN response, which is not necessarily a
AuthResolverResponse record — check the API definition for its shape.

```ts
const result = await client.AuthResolverResponse().create({
  $action: 'email_token_user_account_auth',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AuthResolverResponse().create({
  email: 'example_email',
  id: 'example_id',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AuthResolverResponse().load({ id: 'auth_resolver_response_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AuthResolverResponse().update({
  id: 'auth_resolver_response_id',
  auth_id: 'auth_id',
  response: 'response',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AuthResolverResponseEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AuthenticationSessionResponseEntity

```ts
const authentication_session_response = client.AuthenticationSessionResponse()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AuthenticationSessionResponse().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AuthenticationSessionResponseEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CommentEntity

```ts
const comment = client.Comment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentSession` | `Record<string, any>` | No | Agent session associated with this comment. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `body` | `string` | Yes | The comment content in markdown format. |
| `bodyData` | `string` | Yes | [Internal] The comment content as a ProseMirror document. |
| `botActor` | `Record<string, any>` | No | The bot that created the comment. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `documentContent` | `Record<string, any>` | No | The document content that the comment is associated with. |
| `documentContentId` | `string` | No | The ID of the document content that the comment is associated with. |
| `editedAt` | `any` | No | The time the comment was last edited by its author. |
| `externalThread` | `Record<string, any>` | No | The external thread that the comment is synced with. |
| `externalUser` | `Record<string, any>` | No | The external user who wrote the comment, when the comment was created through an integration such as Slack or Intercom. |
| `hideInLinear` | `boolean` | Yes | [Internal] Whether the comment should be hidden from Linear clients. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiative` | `Record<string, any>` | No | The initiative that the comment is associated with. |
| `initiativeId` | `string` | No | The ID of the initiative that the comment is associated with. |
| `initiativeUpdate` | `Record<string, any>` | No | The initiative update that the comment is associated with. |
| `initiativeUpdateId` | `string` | No | The ID of the initiative update that the comment is associated with. |
| `isArtificialAgentSessionRoot` | `boolean` | Yes | [Internal] Whether the comment is an artificial placeholder for an agent session thread created without a comment mention. |
| `issue` | `Record<string, any>` | No | The issue that the comment is associated with. |
| `issueId` | `string` | No | The ID of the issue that the comment is associated with. |
| `onBehalfOf` | `Record<string, any>` | No | [Internal] The user on whose behalf the comment was created, e.g. |
| `parent` | `Record<string, any>` | No | The parent comment under which the current comment is nested. |
| `parentId` | `string` | No | The ID of the parent comment under which the current comment is nested. |
| `post` | `Record<string, any>` | No | The post that the comment is associated with. |
| `project` | `Record<string, any>` | No | The project that the comment is associated with. |
| `projectId` | `string` | No | The ID of the project that the comment is associated with. |
| `projectUpdate` | `Record<string, any>` | No | The project update that the comment is associated with. |
| `projectUpdateId` | `string` | No | The ID of the project update that the comment is associated with. |
| `quotedText` | `string` | No | The text that this comment references, used for inline comments on documents or issue descriptions. |
| `reactionData` | `any` | Yes | Emoji reaction summary for this comment, grouped by emoji type. |
| `resolvedAt` | `any` | No | The time when the comment thread was resolved. |
| `resolvingComment` | `Record<string, any>` | No | The child comment that resolved this thread. |
| `resolvingCommentId` | `string` | No | The ID of the child comment that resolved this thread. |
| `resolvingUser` | `Record<string, any>` | No | The user that resolved the comment thread. |
| `threadSummary` | `any` | No | [Internal] An AI-generated summary of the comment thread. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | Comment's URL. |
| `user` | `Record<string, any>` | No | The user who wrote the comment. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `resolve` | `commentResolve` | `client.Comment().update({ $action: 'resolve', ... })` |
| `unresolve` | `commentUnresolve` | `client.Comment().update({ $action: 'unresolve', ... })` |

An action returns that action's OWN response, which is not necessarily a
Comment record — check the API definition for its shape.

```ts
const result = await client.Comment().update({
  $action: 'resolve',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Comment().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Comment().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Comment().load({ id: 'comment_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Comment().remove({ id: 'comment_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Comment().update({
  id: 'comment_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CommentEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreateOrJoinOrganizationResponseEntity

```ts
const create_or_join_organization_response = client.CreateOrJoinOrganizationResponse()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `organization` | `Record<string, any>` | No | The workspace that was created or joined. |
| `user` | `Record<string, any>` | No | The user who created or joined the workspace. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `create_organization_from_onboarding` | `createOrganizationFromOnboarding` | `client.CreateOrJoinOrganizationResponse().create({ $action: 'create_organization_from_onboarding', ... })` |
| `join_organization_from_onboarding` | `joinOrganizationFromOnboarding` | `client.CreateOrJoinOrganizationResponse().create({ $action: 'join_organization_from_onboarding', ... })` |
| `leave_organization` | `leaveOrganization` | `client.CreateOrJoinOrganizationResponse().update({ $action: 'leave_organization', ... })` |

An action returns that action's OWN response, which is not necessarily a
CreateOrJoinOrganizationResponse record — check the API definition for its shape.

```ts
const result = await client.CreateOrJoinOrganizationResponse().create({
  $action: 'create_organization_from_onboarding',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CreateOrJoinOrganizationResponse().create({
})
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.CreateOrJoinOrganizationResponse().update({
  organization_id: 'organization_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreateOrJoinOrganizationResponseEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomViewEntity

```ts
const custom_view = client.CustomView()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `color` | `string` | No | The hex color code of the custom view icon. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `Record<string, any>` | No | The user who originally created the custom view. |
| `description` | `string` | No | The description of the custom view. |
| `facet` | `Record<string, any>` | No | [INTERNAL] The facet that links this custom view to its parent entity (project, initiative, team page, etc.). |
| `feedItemFilterData` | `any` | No | The filter applied to feed items in the custom view. |
| `filterData` | `any` | Yes | The structured filter applied to issues in the custom view. |
| `icon` | `string` | No | The icon of the custom view. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiativeFilterData` | `any` | No | The filter applied to initiatives in the custom view. |
| `modelName` | `string` | Yes | The entity type this view displays. |
| `name` | `string` | Yes | The name of the custom view, displayed in the sidebar and navigation. |
| `organization` | `Record<string, any>` | No | The workspace of the custom view. |
| `organizationViewPreferences` | `Record<string, any>` | No | The workspace-level default view preferences for this custom view, if any have been set. |
| `owner` | `Record<string, any>` | No | The user who owns the custom view. |
| `projectFilterData` | `any` | No | The filter applied to projects in the custom view. |
| `shared` | `boolean` | Yes | Whether the custom view is shared with everyone in the organization. |
| `slugId` | `string` | Yes | The custom view's unique URL slug, used to construct human-readable URLs. |
| `team` | `Record<string, any>` | No | The team that the custom view is scoped to. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `updatedBy` | `Record<string, any>` | No | The user who last updated the custom view. |
| `userViewPreferences` | `Record<string, any>` | No | The current user's personal view preferences for this custom view, if they have set any. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CustomView().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CustomView().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CustomView().load({ id: 'custom_view_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.CustomView().remove({ id: 'custom_view_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.CustomView().update({
  id: 'custom_view_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomViewEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomerEntity

```ts
const customer = client.Customer()
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
| `integration` | `Record<string, any>` | No | The integration that manages this customer's data (e.g., Intercom, Salesforce). |
| `logoUrl` | `string` | No | URL of the customer's logo image. |
| `mainSourceId` | `string` | No | The primary external source ID when a customer has data from multiple external systems. |
| `name` | `string` | Yes | The display name of the customer organization. |
| `owner` | `Record<string, any>` | No | The workspace member assigned as the owner of this customer. |
| `revenue` | `number` | No | The annual revenue generated by this customer. |
| `size` | `number` | No | The number of employees or seats at the customer organization. |
| `slackChannelId` | `string` | No | The ID of the Slack channel linked to this customer for communication. |
| `slugId` | `string` | Yes | A unique, human-readable URL slug for the customer. |
| `status` | `Record<string, any>` | No | The current lifecycle status of the customer. |
| `tier` | `Record<string, any>` | No | The tier or segment assigned to this customer for prioritization (e.g., Enterprise, Pro, Free). |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | The URL of the customer's page in the Linear application. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `upsert` | `customerUpsert` | `client.Customer().create({ $action: 'upsert', ... })` |
| `merge` | `customerMerge` | `client.Customer().update({ $action: 'merge', ... })` |
| `unsync` | `customerUnsync` | `client.Customer().update({ $action: 'unsync', ... })` |

An action returns that action's OWN response, which is not necessarily a
Customer record — check the API definition for its shape.

```ts
const result = await client.Customer().create({
  $action: 'upsert',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Customer().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Customer().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Customer().load({ id: 'customer_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Customer().remove({ id: 'customer_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Customer().update({
  id: 'customer_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomerEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomerNeedEntity

```ts
const customer_need = client.CustomerNeed()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `attachment` | `Record<string, any>` | No | The issue attachment linked to this need. |
| `body` | `string` | No | The body content of the need in Markdown format. |
| `bodyData` | `string` | No | [Internal] The body content of the need as a Prosemirror document JSON string. |
| `comment` | `Record<string, any>` | No | An optional comment providing additional context for this need. |
| `content` | `string` | No | The effective Markdown content shown for this customer need. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `Record<string, any>` | No | The user who manually created this customer need. |
| `customer` | `Record<string, any>` | No | The customer organization this need belongs to. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `issue` | `Record<string, any>` | No | The issue this need is linked to. |
| `originalIssue` | `Record<string, any>` | No | The issue this customer need was originally created on, before being moved to a different issue or project. |
| `priority` | `number` | Yes | Whether the customer need is important or not. |
| `project` | `Record<string, any>` | No | The project this need is linked to. |
| `projectAttachment` | `Record<string, any>` | No | The project attachment linked to this need. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | No | The URL of the source attachment linked to this need, if any. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `create_from_attachment` | `customerNeedCreateFromAttachment` | `client.CustomerNeed().create({ $action: 'create_from_attachment', ... })` |
| `archive` | `customerNeedArchive` | `client.CustomerNeed().update({ $action: 'archive', ... })` |
| `unarchive` | `customerNeedUnarchive` | `client.CustomerNeed().update({ $action: 'unarchive', ... })` |

An action returns that action's OWN response, which is not necessarily a
CustomerNeed record — check the API definition for its shape.

```ts
const result = await client.CustomerNeed().create({
  $action: 'create_from_attachment',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CustomerNeed().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  priority: 1,
  updatedAt: 'example_updatedAt',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CustomerNeed().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CustomerNeed().load({ id: 'customer_need_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.CustomerNeed().remove({ id: 'customer_need_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.CustomerNeed().update({
  id: 'customer_need_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomerNeedEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomerStatusEntity

```ts
const customer_status = client.CustomerStatus()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CustomerStatus().create({
  color: 'example_color',
  createdAt: 'example_createdAt',
  displayName: 'example_displayName',
  id: 'example_id',
  name: 'example_name',
  position: 1,
  updatedAt: 'example_updatedAt',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CustomerStatus().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CustomerStatus().load({ id: 'customer_status_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.CustomerStatus().remove({ id: 'customer_status_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.CustomerStatus().update({
  id: 'customer_status_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomerStatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomerTierEntity

```ts
const customer_tier = client.CustomerTier()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CustomerTier().create({
  color: 'example_color',
  createdAt: 'example_createdAt',
  displayName: 'example_displayName',
  id: 'example_id',
  name: 'example_name',
  position: 1,
  updatedAt: 'example_updatedAt',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CustomerTier().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CustomerTier().load({ id: 'customer_tier_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.CustomerTier().remove({ id: 'customer_tier_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.CustomerTier().update({
  id: 'customer_tier_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomerTierEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CycleEntity

```ts
const cycle = client.Cycle()
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
| `inheritedFrom` | `Record<string, any>` | No | The parent cycle this cycle was inherited from. |
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
| `team` | `Record<string, any>` | No | The team that the cycle belongs to. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `shift_all` | `cycleShiftAll` | `client.Cycle().create({ $action: 'shift_all', ... })` |
| `archive` | `cycleArchive` | `client.Cycle().update({ $action: 'archive', ... })` |
| `start_upcoming_cycle_today` | `cycleStartUpcomingCycleToday` | `client.Cycle().update({ $action: 'start_upcoming_cycle_today', ... })` |

An action returns that action's OWN response, which is not necessarily a
Cycle record — check the API definition for its shape.

```ts
const result = await client.Cycle().create({
  $action: 'shift_all',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Cycle().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Cycle().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Cycle().load({ id: 'cycle_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Cycle().update({
  id: 'cycle_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CycleEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DiffEntity

```ts
const diff = client.Diff()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additions` | `number` | Yes | [Internal] The total number of added lines across the diff. |
| `agentSession` | `Record<string, any>` | No | The agent session the diff belongs to. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `contentHash` | `string` | Yes | [Internal] The opaque content hash identifying the diff's content in code.storage. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `Record<string, any>` | No | The user responsible for the diff. |
| `deletions` | `number` | Yes | [Internal] The total number of deleted lines across the diff. |
| `fileCount` | `number` | Yes | [Internal] The number of changed files in the diff. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `organization` | `Record<string, any>` | No | The workspace the diff belongs to. |
| `pullRequest` | `Record<string, any>` | No | The pull request the diff was promoted to when opened for review. |
| `slugId` | `string` | Yes | [Internal] The diff's unique URL slug. |
| `truncated` | `boolean` | Yes | [Internal] Whether oversized files were omitted when the diff was computed. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Diff().load({ id: 'diff_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DiffEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DocumentEntity

```ts
const document = client.Document()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `color` | `string` | No | The hex color of the document icon. |
| `content` | `string` | No | The document's content in markdown format. |
| `contentState` | `string` | No | [Internal] The document's content as a base64-encoded Yjs state update. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `Record<string, any>` | No | The user who created the document. |
| `cycle` | `Record<string, any>` | No | [Internal] The cycle that the document is associated with. |
| `documentContentId` | `string` | No | The ID of the document content associated with the document. |
| `hiddenAt` | `any` | No | The time at which the document was hidden from the default view. |
| `icon` | `string` | No | The icon of the document, either a decorative icon type or an emoji string. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiative` | `Record<string, any>` | No | The initiative that the document is associated with. |
| `issue` | `Record<string, any>` | No | The issue that the document is associated with. |
| `lastAppliedTemplate` | `Record<string, any>` | No | The last template that was applied to this document. |
| `owner` | `Record<string, any>` | No | The owner of the document. |
| `project` | `Record<string, any>` | No | The project that the document is associated with. |
| `release` | `Record<string, any>` | No | The release that the document is associated with. |
| `slugId` | `string` | Yes | The document's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `number` | Yes | The sort order of the document in its parent entity's resources list. |
| `summary` | `string` | No | [Internal] A one-sentence AI-generated summary of the document content. |
| `team` | `Record<string, any>` | No | [Internal] The team that the document is associated with. |
| `title` | `string` | Yes | The title of the document. |
| `trashed` | `boolean` | No | A flag that indicates whether the document is in the trash bin. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `updatedBy` | `Record<string, any>` | No | The user who last updated the document. |
| `url` | `string` | Yes | The canonical url for the document. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `unarchive` | `documentUnarchive` | `client.Document().update({ $action: 'unarchive', ... })` |

An action returns that action's OWN response, which is not necessarily a
Document record — check the API definition for its shape.

```ts
const result = await client.Document().update({
  $action: 'unarchive',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Document().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  slugId: 'example_slugId',
  sortOrder: 1,
  title: 'example_title',
  updatedAt: 'example_updatedAt',
  url: 'example_url',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Document().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Document().load({ id: 'document_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Document().remove({ id: 'document_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Document().update({
  id: 'document_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DocumentEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DocumentSearchResultEntity

```ts
const document_search_result = client.DocumentSearchResult()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `color` | `string` | No | The hex color of the document icon. |
| `content` | `string` | No | The document's content in markdown format. |
| `contentState` | `string` | No | [Internal] The document's content as a base64-encoded Yjs state update. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `Record<string, any>` | No | The user who created the document. |
| `cycle` | `Record<string, any>` | No | [Internal] The cycle that the document is associated with. |
| `documentContentId` | `string` | No | The ID of the document content associated with the document. |
| `hiddenAt` | `any` | No | The time at which the document was hidden from the default view. |
| `icon` | `string` | No | The icon of the document, either a decorative icon type or an emoji string. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiative` | `Record<string, any>` | No | The initiative that the document is associated with. |
| `issue` | `Record<string, any>` | No | The issue that the document is associated with. |
| `lastAppliedTemplate` | `Record<string, any>` | No | The last template that was applied to this document. |
| `metadata` | `any` | Yes | Metadata related to search result. |
| `owner` | `Record<string, any>` | No | The owner of the document. |
| `project` | `Record<string, any>` | No | The project that the document is associated with. |
| `release` | `Record<string, any>` | No | The release that the document is associated with. |
| `slugId` | `string` | Yes | The document's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `number` | Yes | The sort order of the document in its parent entity's resources list. |
| `summary` | `string` | No | [Internal] A one-sentence AI-generated summary of the document content. |
| `team` | `Record<string, any>` | No | [Internal] The team that the document is associated with. |
| `title` | `string` | Yes | The title of the document. |
| `trashed` | `boolean` | No | A flag that indicates whether the document is in the trash bin. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `updatedBy` | `Record<string, any>` | No | The user who last updated the document. |
| `url` | `string` | Yes | The canonical url for the document. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DocumentSearchResult().list({ term: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DocumentSearchResultEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EmailIntakeAddressEntity

```ts
const email_intake_address = client.EmailIntakeAddress()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `string` | Yes | The unique local part (before the @) of the intake email address, used to route incoming emails to the correct intake handler. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `Record<string, any>` | No | The user who created the email intake address. |
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
| `organization` | `Record<string, any>` | No | The workspace that the email address is associated with. |
| `reopenOnReply` | `boolean` | Yes | Whether to reopen completed or canceled issues when a substantive email reply is received. |
| `repliesEnabled` | `boolean` | Yes | Whether email replies are enabled. |
| `senderName` | `string` | No | The name to be used for outgoing emails. |
| `sesDomainIdentity` | `Record<string, any>` | No | The SES domain identity that the email address is associated with. |
| `team` | `Record<string, any>` | No | The team that the email address is associated with. |
| `template` | `Record<string, any>` | No | The template that the email address is associated with. |
| `type` | `string` | Yes | The type of the email address. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `useUserNamesInReplies` | `boolean` | Yes | Whether the commenter's name is included in the email replies. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `rotate` | `emailIntakeAddressRotate` | `client.EmailIntakeAddress().update({ $action: 'rotate', ... })` |

An action returns that action's OWN response, which is not necessarily a
EmailIntakeAddress record — check the API definition for its shape.

```ts
const result = await client.EmailIntakeAddress().update({
  $action: 'rotate',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.EmailIntakeAddress().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.EmailIntakeAddress().load({ id: 'email_intake_address_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.EmailIntakeAddress().remove({ id: 'email_intake_address_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.EmailIntakeAddress().update({
  id: 'email_intake_address_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EmailIntakeAddressEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EmailUserAccountAuthChallengeResponseEntity

```ts
const email_user_account_auth_challenge_response = client.EmailUserAccountAuthChallengeResponse()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authType` | `string` | Yes | Supported challenge for this user account. |
| `success` | `boolean` | Yes | Whether the operation was successful. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `email_user_account_auth_challenge` | `emailUserAccountAuthChallenge` | `client.EmailUserAccountAuthChallengeResponse().create({ $action: 'email_user_account_auth_challenge', ... })` |

An action returns that action's OWN response, which is not necessarily a
EmailUserAccountAuthChallengeResponse record — check the API definition for its shape.

```ts
const result = await client.EmailUserAccountAuthChallengeResponse().create({
  $action: 'email_user_account_auth_challenge',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.EmailUserAccountAuthChallengeResponse().create({
  authType: 'example_authType',
  success: true,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EmailUserAccountAuthChallengeResponseEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EmojiEntity

```ts
const emoji = client.Emoji()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `Record<string, any>` | No | The user who created the emoji. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `name` | `string` | Yes | The unique name of the custom emoji within the workspace. |
| `organization` | `Record<string, any>` | No | The workspace that the emoji belongs to. |
| `source` | `string` | Yes | The source of the emoji, indicating how it was created (e.g., uploaded by a user or imported). |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | The URL of the uploaded image for this custom emoji. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Emoji().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  name: 'example_name',
  source: 'example_source',
  updatedAt: 'example_updatedAt',
  url: 'example_url',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Emoji().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Emoji().load({ id: 'emoji_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Emoji().remove({ id: 'emoji_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EmojiEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EntityExternalLinkEntity

```ts
const entity_external_link = client.EntityExternalLink()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `Record<string, any>` | No | The user who created the link. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiative` | `Record<string, any>` | No | The initiative that the link is associated with. |
| `label` | `string` | Yes | The link's label. |
| `project` | `Record<string, any>` | No | The project that the link is associated with. |
| `sortOrder` | `number` | Yes | The sort order of this link within the parent entity's resources list. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | The link's URL. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.EntityExternalLink().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  label: 'example_label',
  sortOrder: 1,
  updatedAt: 'example_updatedAt',
  url: 'example_url',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.EntityExternalLink().load({ id: 'entity_external_link_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.EntityExternalLink().remove({ id: 'entity_external_link_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.EntityExternalLink().update({
  id: 'entity_external_link_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EntityExternalLinkEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ExternalUserEntity

```ts
const external_user = client.ExternalUser()
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
| `organization` | `Record<string, any>` | No | The workspace that the external user belongs to. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ExternalUser().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ExternalUser().load({ id: 'external_user_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ExternalUserEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FavoriteEntity

```ts
const favorite = client.Favorite()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aiConversation` | `Record<string, any>` | No | [INTERNAL] The favorited Agent conversation. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `color` | `string` | No | [Internal] Returns the color of the favorite's icon. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `customView` | `Record<string, any>` | No | The favorited custom view. |
| `customer` | `Record<string, any>` | No | The favorited customer. |
| `cycle` | `Record<string, any>` | No | The favorited cycle. |
| `dashboard` | `Record<string, any>` | No | The favorited dashboard. |
| `detail` | `string` | No | [Internal] Detail text for favorite's `title` (e.g. |
| `document` | `Record<string, any>` | No | The favorited document. |
| `facet` | `Record<string, any>` | No | [INTERNAL] The favorited facet. |
| `folderName` | `string` | No | The name of the folder. |
| `icon` | `string` | No | [Internal] Name of the favorite's icon. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiative` | `Record<string, any>` | No | The favorited initiative. |
| `initiativeLabel` | `Record<string, any>` | No | [INTERNAL] The favorited initiative label. |
| `initiativeTab` | `string` | No | The targeted tab of the initiative. |
| `issue` | `Record<string, any>` | No | The favorited issue. |
| `label` | `Record<string, any>` | No | The favorited label. |
| `liveFolderDefinition` | `any` | No | The versioned lazy root and filter represented by this live favorite folder. |
| `liveFolderPreset` | `string` | No | The predefined live folder represented by this favorite. |
| `owner` | `Record<string, any>` | No | The user who owns this favorite. |
| `parent` | `Record<string, any>` | No | The parent folder of the favorite. |
| `pipelineTab` | `string` | No | The targeted tab of the release pipeline. |
| `predefinedViewTeam` | `Record<string, any>` | No | The team of the favorited predefined view. |
| `predefinedViewType` | `string` | No | The type of favorited predefined view (e.g., 'allIssues', 'activeCycle', 'backlog', 'triage'). |
| `project` | `Record<string, any>` | No | The favorited project. |
| `projectLabel` | `Record<string, any>` | No | The favorited project label. |
| `projectTab` | `string` | No | The targeted tab of the project. |
| `projectTeam` | `Record<string, any>` | No | [DEPRECATED] The favorited team of the project. |
| `pullRequest` | `Record<string, any>` | No | The favorited pull request. |
| `release` | `Record<string, any>` | No | The favorited release. |
| `releaseNote` | `Record<string, any>` | No | The favorited release note. |
| `releasePipeline` | `Record<string, any>` | No | The favorited release pipeline. |
| `sortOrder` | `number` | Yes | The position of this item in the user's favorites list. |
| `team` | `Record<string, any>` | No | The favorited team. |
| `title` | `string` | Yes | [Internal] Favorite's title text (name of the favorite'd object or folder). |
| `type` | `string` | Yes | The type of entity this favorite references, such as 'issue', 'project', 'cycle', 'customView', 'document', 'folder', etc. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | No | URL of the favorited entity. |
| `user` | `Record<string, any>` | No | The favorited user. |
| `workflowDefinition` | `Record<string, any>` | No | The favorited loop. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Favorite().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  sortOrder: 1,
  title: 'example_title',
  type: 'example_type',
  updatedAt: 'example_updatedAt',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Favorite().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Favorite().load({ id: 'favorite_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Favorite().remove({ id: 'favorite_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Favorite().update({
  id: 'favorite_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FavoriteEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GitAutomationStateEntity

```ts
const git_automation_state = client.GitAutomationState()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `event` | `string` | Yes | The Git event that triggers this automation rule (e.g., branch created, PR opened for review, or PR merged). |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `state` | `Record<string, any>` | No | The workflow state that linked issues will be transitioned to when the Git event fires. |
| `targetBranch` | `Record<string, any>` | No | The target branch that this automation rule applies to. |
| `team` | `Record<string, any>` | No | The team that this automation rule belongs to. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.GitAutomationState().create({
  createdAt: 'example_createdAt',
  event: 'example_event',
  id: 'example_id',
  updatedAt: 'example_updatedAt',
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.GitAutomationState().remove({ id: 'id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.GitAutomationState().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GitAutomationStateEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GitAutomationTargetBranchEntity

```ts
const git_automation_target_branch = client.GitAutomationTargetBranch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `branchPattern` | `string` | Yes | The branch name or pattern to match against pull request target branches. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `isRegex` | `boolean` | Yes | Whether the branch pattern should be interpreted as a regular expression. |
| `team` | `Record<string, any>` | No | The team that this target branch definition belongs to. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.GitAutomationTargetBranch().create({
  branchPattern: 'example_branchPattern',
  createdAt: 'example_createdAt',
  id: 'example_id',
  isRegex: true,
  updatedAt: 'example_updatedAt',
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.GitAutomationTargetBranch().remove({ id: 'id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.GitAutomationTargetBranch().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GitAutomationTargetBranchEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GitHubIntegrationConnectDetailEntity

```ts
const git_hub_integration_connect_detail = client.GitHubIntegrationConnectDetail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `lostRepositoryNames` | `string` | No | Full names ('owner/repo') of repositories whose existing GitHub Issues sync mappings would become inaccessible if the new GitHub App installation replaces the existing one. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `integration_asks_connect_channel` | `integrationAsksConnectChannel` | `client.GitHubIntegrationConnectDetail().create({ $action: 'integration_asks_connect_channel', ... })` |
| `integration_git_hub_enterprise_server_connect` | `integrationGitHubEnterpriseServerConnect` | `client.GitHubIntegrationConnectDetail().create({ $action: 'integration_git_hub_enterprise_server_connect', ... })` |
| `integration_github_commit_create` | `integrationGithubCommitCreate` | `client.GitHubIntegrationConnectDetail().create({ $action: 'integration_github_commit_create', ... })` |
| `integration_gitlab_connect` | `integrationGitlabConnect` | `client.GitHubIntegrationConnectDetail().create({ $action: 'integration_gitlab_connect', ... })` |
| `integration_jira_fetch_project_status` | `integrationJiraFetchProjectStatuses` | `client.GitHubIntegrationConnectDetail().create({ $action: 'integration_jira_fetch_project_status', ... })` |
| `integration_slack_org_initiative_updates_post` | `integrationSlackOrgInitiativeUpdatesPost` | `client.GitHubIntegrationConnectDetail().create({ $action: 'integration_slack_org_initiative_updates_post', ... })` |
| `integration_slack_org_project_updates_post` | `integrationSlackOrgProjectUpdatesPost` | `client.GitHubIntegrationConnectDetail().create({ $action: 'integration_slack_org_project_updates_post', ... })` |
| `integration_gitlab_test_connection` | `integrationGitlabTestConnection` | `client.GitHubIntegrationConnectDetail().update({ $action: 'integration_gitlab_test_connection', ... })` |
| `integration_slack_custom_view_notification` | `integrationSlackCustomViewNotifications` | `client.GitHubIntegrationConnectDetail().update({ $action: 'integration_slack_custom_view_notification', ... })` |
| `integration_slack_initiative_post` | `integrationSlackInitiativePost` | `client.GitHubIntegrationConnectDetail().update({ $action: 'integration_slack_initiative_post', ... })` |
| `integration_slack_post` | `integrationSlackPost` | `client.GitHubIntegrationConnectDetail().update({ $action: 'integration_slack_post', ... })` |
| `integration_slack_project_post` | `integrationSlackProjectPost` | `client.GitHubIntegrationConnectDetail().update({ $action: 'integration_slack_project_post', ... })` |

An action returns that action's OWN response, which is not necessarily a
GitHubIntegrationConnectDetail record — check the API definition for its shape.

```ts
const result = await client.GitHubIntegrationConnectDetail().create({
  $action: 'integration_asks_connect_channel',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.GitHubIntegrationConnectDetail().create({
})
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.GitHubIntegrationConnectDetail().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GitHubIntegrationConnectDetailEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## InitiativeEntity

```ts
const initiative = client.Initiative()
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
| `creator` | `Record<string, any>` | No | The user who created the initiative. |
| `description` | `string` | No | The description of the initiative. |
| `documentContent` | `Record<string, any>` | No | The content of the initiative description. |
| `frequencyResolution` | `string` | Yes | The resolution of the reminder frequency. |
| `health` | `string` | No | The overall health of the initiative, derived from the most recent initiative update. |
| `healthUpdatedAt` | `any` | No | The time at which the initiative health was last updated, typically when a new initiative update is posted. |
| `icon` | `string` | No | The icon of the initiative. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `identifier` | `string` | No | [Internal] The human-readable identifier of the initiative. |
| `integrationsSettings` | `Record<string, any>` | No | Settings for all integrations associated with that initiative. |
| `labelIds` | `string` | Yes | The IDs of the initiative labels associated with this initiative. |
| `lastUpdate` | `Record<string, any>` | No | The most recent status update posted for this initiative. |
| `leadTeam` | `Record<string, any>` | No | The team that leads the initiative. |
| `name` | `string` | Yes | The name of the initiative. |
| `organization` | `Record<string, any>` | No | The workspace of the initiative. |
| `owner` | `Record<string, any>` | No | The user who owns the initiative. |
| `parentInitiative` | `Record<string, any>` | No | Parent initiative associated with the initiative. |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `add_label` | `initiativeAddLabel` | `client.Initiative().update({ $action: 'add_label', ... })` |
| `archive` | `initiativeArchive` | `client.Initiative().update({ $action: 'archive', ... })` |
| `lead_team_update` | `initiativeLeadTeamUpdate` | `client.Initiative().update({ $action: 'lead_team_update', ... })` |
| `remove_label` | `initiativeRemoveLabel` | `client.Initiative().update({ $action: 'remove_label', ... })` |
| `unarchive` | `initiativeUnarchive` | `client.Initiative().update({ $action: 'unarchive', ... })` |

An action returns that action's OWN response, which is not necessarily a
Initiative record — check the API definition for its shape.

```ts
const result = await client.Initiative().update({
  $action: 'add_label',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Initiative().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Initiative().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Initiative().load({ id: 'initiative_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Initiative().remove({ id: 'initiative_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Initiative().update({
  id: 'initiative_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `InitiativeEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## InitiativeLabelEntity

```ts
const initiative_label = client.InitiativeLabel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `color` | `string` | Yes | The label's color as a HEX string (e.g., '#EB5757'). |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `Record<string, any>` | No | The user who created the label. |
| `description` | `string` | No | The label's description. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `isGroup` | `boolean` | Yes | Whether the label is a group. |
| `lastAppliedAt` | `any` | No | The date when the label was last applied to an issue, project, or initiative. |
| `name` | `string` | Yes | The label's name. |
| `organization` | `Record<string, any>` | No | The workspace that the initiative label belongs to. |
| `parent` | `Record<string, any>` | No | The parent label group. |
| `retiredAt` | `any` | No | [Internal] When the label was retired. |
| `retiredBy` | `Record<string, any>` | No | The user who retired the label. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `restore` | `initiativeLabelRestore` | `client.InitiativeLabel().update({ $action: 'restore', ... })` |
| `retire` | `initiativeLabelRetire` | `client.InitiativeLabel().update({ $action: 'retire', ... })` |

An action returns that action's OWN response, which is not necessarily a
InitiativeLabel record — check the API definition for its shape.

```ts
const result = await client.InitiativeLabel().update({
  $action: 'restore',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.InitiativeLabel().create({
  color: 'example_color',
  createdAt: 'example_createdAt',
  id: 'example_id',
  isGroup: true,
  name: 'example_name',
  updatedAt: 'example_updatedAt',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.InitiativeLabel().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.InitiativeLabel().load({ id: 'initiative_label_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.InitiativeLabel().remove({ id: 'initiative_label_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.InitiativeLabel().update({
  id: 'initiative_label_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `InitiativeLabelEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## InitiativeLeadTeamChangeImpactEntity

```ts
const initiative_lead_team_change_impact = client.InitiativeLeadTeamChangeImpact()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `affectedDescendantCount` | `number` | Yes | The number of editable matching sub-initiatives whose lead team would change if the update is applied to descendants. |
| `id` | `string` | No |  |
| `visibilityMayChange` | `boolean` | Yes | Whether the changed initiatives may gain or lose access restrictions because the current or next lead team is not public. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.InitiativeLeadTeamChangeImpact().load({ id: 'initiative_lead_team_change_impact_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `InitiativeLeadTeamChangeImpactEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## InitiativeRelationEntity

```ts
const initiative_relation = client.InitiativeRelation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiative` | `Record<string, any>` | No | The parent initiative in this hierarchical relation. |
| `relatedInitiative` | `Record<string, any>` | No | The child initiative in this hierarchical relation. |
| `sortOrder` | `number` | Yes | The sort order of the child initiative within its parent initiative. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `Record<string, any>` | No | The user who last created or modified the relation. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.InitiativeRelation().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  sortOrder: 1,
  updatedAt: 'example_updatedAt',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.InitiativeRelation().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.InitiativeRelation().load({ id: 'initiative_relation_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.InitiativeRelation().remove({ id: 'initiative_relation_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.InitiativeRelation().update({
  id: 'initiative_relation_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `InitiativeRelationEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## InitiativeToProjectEntity

```ts
const initiative_to_project = client.InitiativeToProject()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiative` | `Record<string, any>` | No | The initiative that the project is associated with. |
| `project` | `Record<string, any>` | No | The project that the initiative is associated with. |
| `sortOrder` | `string` | Yes | The sort order of the project within its parent initiative. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.InitiativeToProject().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  sortOrder: 'example_sortOrder',
  updatedAt: 'example_updatedAt',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.InitiativeToProject().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.InitiativeToProject().load({ id: 'initiative_to_project_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.InitiativeToProject().remove({ id: 'initiative_to_project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.InitiativeToProject().update({
  id: 'initiative_to_project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `InitiativeToProjectEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## InitiativeUpdateEntity

```ts
const initiative_update = client.InitiativeUpdate()
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
| `initiative` | `Record<string, any>` | No | The initiative that this status update was posted to. |
| `isDiffHidden` | `boolean` | Yes | Whether the diff between this update and the previous one should be hidden in the UI. |
| `isStale` | `boolean` | Yes | Whether the initiative update is stale. |
| `reactionData` | `any` | Yes | Emoji reaction summary, grouped by emoji type. |
| `slugId` | `string` | Yes | The update's unique URL slug. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | The URL to the initiative update. |
| `user` | `Record<string, any>` | No | The user who wrote the update. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `archive` | `initiativeUpdateArchive` | `client.InitiativeUpdate().update({ $action: 'archive', ... })` |
| `unarchive` | `initiativeUpdateUnarchive` | `client.InitiativeUpdate().update({ $action: 'unarchive', ... })` |

An action returns that action's OWN response, which is not necessarily a
InitiativeUpdate record — check the API definition for its shape.

```ts
const result = await client.InitiativeUpdate().update({
  $action: 'archive',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.InitiativeUpdate().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.InitiativeUpdate().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.InitiativeUpdate().load({ id: 'initiative_update_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.InitiativeUpdate().update({
  id: 'initiative_update_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `InitiativeUpdateEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IntegrationEntity

```ts
const integration = client.Integration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `Record<string, any>` | No | The user that added the integration. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `organization` | `Record<string, any>` | No | The workspace that the integration is associated with. |
| `service` | `string` | Yes | The integration's type, identifying which external service this integration connects to (e.g., 'slack', 'github', 'jira', 'figma'). |
| `team` | `Record<string, any>` | No | The team that the integration is associated with. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `airbyte_integration_connect` | `airbyteIntegrationConnect` | `client.Integration().create({ $action: 'airbyte_integration_connect', ... })` |
| `customer_data_attributes_refresh` | `integrationCustomerDataAttributesRefresh` | `client.Integration().create({ $action: 'customer_data_attributes_refresh', ... })` |
| `discord` | `integrationDiscord` | `client.Integration().create({ $action: 'discord', ... })` |
| `figma` | `integrationFigma` | `client.Integration().create({ $action: 'figma', ... })` |
| `front` | `integrationFront` | `client.Integration().create({ $action: 'front', ... })` |
| `git_hub_personal` | `integrationGitHubPersonal` | `client.Integration().create({ $action: 'git_hub_personal', ... })` |
| `gong` | `integrationGong` | `client.Integration().create({ $action: 'gong', ... })` |
| `google_calendar_personal_connect` | `integrationGoogleCalendarPersonalConnect` | `client.Integration().create({ $action: 'google_calendar_personal_connect', ... })` |
| `google_sheet` | `integrationGoogleSheets` | `client.Integration().create({ $action: 'google_sheet', ... })` |
| `intercom` | `integrationIntercom` | `client.Integration().create({ $action: 'intercom', ... })` |
| `intercom_delete` | `integrationIntercomDelete` | `client.Integration().create({ $action: 'intercom_delete', ... })` |
| `intercom_settings_update` | `integrationIntercomSettingsUpdate` | `client.Integration().create({ $action: 'intercom_settings_update', ... })` |
| `jira_integration_connect` | `jiraIntegrationConnect` | `client.Integration().create({ $action: 'jira_integration_connect', ... })` |
| `jira_personal` | `integrationJiraPersonal` | `client.Integration().create({ $action: 'jira_personal', ... })` |
| `jira_update` | `integrationJiraUpdate` | `client.Integration().create({ $action: 'jira_update', ... })` |
| `launch_darkly_connect` | `integrationLaunchDarklyConnect` | `client.Integration().create({ $action: 'launch_darkly_connect', ... })` |
| `launch_darkly_personal_connect` | `integrationLaunchDarklyPersonalConnect` | `client.Integration().create({ $action: 'launch_darkly_personal_connect', ... })` |
| `loom` | `integrationLoom` | `client.Integration().create({ $action: 'loom', ... })` |
| `mcp_server_connect` | `integrationMcpServerConnect` | `client.Integration().create({ $action: 'mcp_server_connect', ... })` |
| `mcp_server_personal_connect` | `integrationMcpServerPersonalConnect` | `client.Integration().create({ $action: 'mcp_server_personal_connect', ... })` |
| `microsoft_personal_connect` | `integrationMicrosoftPersonalConnect` | `client.Integration().create({ $action: 'microsoft_personal_connect', ... })` |
| `microsoft_team` | `integrationMicrosoftTeams` | `client.Integration().create({ $action: 'microsoft_team', ... })` |
| `opsgenie_connect` | `integrationOpsgenieConnect` | `client.Integration().create({ $action: 'opsgenie_connect', ... })` |
| `opsgenie_refresh_schedule_mapping` | `integrationOpsgenieRefreshScheduleMappings` | `client.Integration().create({ $action: 'opsgenie_refresh_schedule_mapping', ... })` |
| `pager_duty_connect` | `integrationPagerDutyConnect` | `client.Integration().create({ $action: 'pager_duty_connect', ... })` |
| `pager_duty_refresh_schedule_mapping` | `integrationPagerDutyRefreshScheduleMappings` | `client.Integration().create({ $action: 'pager_duty_refresh_schedule_mapping', ... })` |
| `salesforce` | `integrationSalesforce` | `client.Integration().create({ $action: 'salesforce', ... })` |
| `slack` | `integrationSlack` | `client.Integration().create({ $action: 'slack', ... })` |
| `slack_ask` | `integrationSlackAsks` | `client.Integration().create({ $action: 'slack_ask', ... })` |
| `slack_import_emoji` | `integrationSlackImportEmojis` | `client.Integration().create({ $action: 'slack_import_emoji', ... })` |
| `slack_personal` | `integrationSlackPersonal` | `client.Integration().create({ $action: 'slack_personal', ... })` |
| `zendesk` | `integrationZendesk` | `client.Integration().create({ $action: 'zendesk', ... })` |
| `archive` | `integrationArchive` | `client.Integration().update({ $action: 'archive', ... })` |
| `datadog_connect` | `integrationDatadogConnect` | `client.Integration().update({ $action: 'datadog_connect', ... })` |
| `github_connect` | `integrationGithubConnect` | `client.Integration().update({ $action: 'github_connect', ... })` |
| `github_import_connect` | `integrationGithubImportConnect` | `client.Integration().update({ $action: 'github_import_connect', ... })` |
| `github_import_refresh` | `integrationGithubImportRefresh` | `client.Integration().update({ $action: 'github_import_refresh', ... })` |
| `microsoft_teams_project_post` | `integrationMicrosoftTeamsProjectPost` | `client.Integration().update({ $action: 'microsoft_teams_project_post', ... })` |
| `refresh_google_sheets_data` | `refreshGoogleSheetsData` | `client.Integration().update({ $action: 'refresh_google_sheets_data', ... })` |
| `salesforce_metadata_refresh` | `integrationSalesforceMetadataRefresh` | `client.Integration().update({ $action: 'salesforce_metadata_refresh', ... })` |
| `sentry_connect` | `integrationSentryConnect` | `client.Integration().update({ $action: 'sentry_connect', ... })` |
| `settings_update` | `integrationSettingsUpdate` | `client.Integration().update({ $action: 'settings_update', ... })` |
| `slack_workflow_access_update` | `integrationSlackWorkflowAccessUpdate` | `client.Integration().update({ $action: 'slack_workflow_access_update', ... })` |
| `update_integration_slack_scope` | `updateIntegrationSlackScopes` | `client.Integration().update({ $action: 'update_integration_slack_scope', ... })` |

An action returns that action's OWN response, which is not necessarily a
Integration record — check the API definition for its shape.

```ts
const result = await client.Integration().create({
  $action: 'airbyte_integration_connect',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Integration().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  service: 'example_service',
  updatedAt: 'example_updatedAt',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Integration().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Integration().load({ id: 'integration_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Integration().remove({ id: 'integration_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Integration().update({
  id: 'integration_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IntegrationEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IntegrationTemplateEntity

```ts
const integration_template = client.IntegrationTemplate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `foreignEntityId` | `string` | No | The identifier of the foreign entity in the external service that this template is scoped to. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `integration` | `Record<string, any>` | No | The integration that the template is associated with. |
| `template` | `Record<string, any>` | No | The template that the integration is associated with. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.IntegrationTemplate().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  updatedAt: 'example_updatedAt',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.IntegrationTemplate().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.IntegrationTemplate().load({ id: 'integration_template_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.IntegrationTemplate().remove({ id: 'integration_template_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IntegrationTemplateEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IntegrationsSettingEntity

```ts
const integrations_setting = client.IntegrationsSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `contextViewType` | `string` | No | The type of view to which the integration settings context is associated with. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiative` | `Record<string, any>` | No | Initiative which those settings apply to. |
| `microsoftTeamsProjectUpdateCreated` | `boolean` | No | Whether to send a Microsoft Teams message when a project update is created. |
| `project` | `Record<string, any>` | No | Project which those settings apply to. |
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
| `team` | `Record<string, any>` | No | Team which those settings apply to. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.IntegrationsSetting().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  updatedAt: 'example_updatedAt',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.IntegrationsSetting().load({ id: 'integrations_setting_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.IntegrationsSetting().update({
  id: 'integrations_setting_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IntegrationsSettingEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IssueEntity

```ts
const issue = client.Issue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activitySummary` | `any` | No | [Internal] The activity summary information for this issue. |
| `addedToCycleAt` | `any` | No | The time at which the issue was added to a cycle. |
| `addedToProjectAt` | `any` | No | The time at which the issue was added to a project. |
| `addedToTeamAt` | `any` | No | The time at which the issue was added to a team. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `asksExternalUserRequester` | `Record<string, any>` | No | The external user who requested creation of the Asks issue on behalf of the creator. |
| `asksRequester` | `Record<string, any>` | No | The internal user who requested creation of the Asks issue on behalf of the creator. |
| `assignee` | `Record<string, any>` | No | The user to whom the issue is assigned. |
| `autoArchivedAt` | `any` | No | The time at which the issue was automatically archived by the auto pruning process. |
| `autoClosedAt` | `any` | No | The time at which the issue was automatically closed by the auto pruning process. |
| `botActor` | `Record<string, any>` | No | The bot that created the issue, if applicable. |
| `branchName` | `string` | Yes | Suggested branch name for the issue. |
| `canceledAt` | `any` | No | The time at which the issue was moved into canceled state. |
| `completedAt` | `any` | No | The time at which the issue was moved into completed state. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `Record<string, any>` | No | The user who created the issue. |
| `customerTicketCount` | `number` | Yes | Returns the number of Attachment resources which are created by customer support ticketing systems (e.g. |
| `cycle` | `Record<string, any>` | No | The cycle that the issue is associated with. |
| `delegate` | `Record<string, any>` | No | The agent user that is delegated to work on this issue. |
| `description` | `string` | No | The issue's description in markdown format. |
| `descriptionState` | `string` | No | [Internal] The issue's description content as YJS state. |
| `documentContent` | `Record<string, any>` | No | [ALPHA] The document content representing this issue description. |
| `dueDate` | `any` | No | The date at which the issue is due. |
| `estimate` | `number` | No | The estimate of the complexity of the issue. |
| `externalUserCreator` | `Record<string, any>` | No | The external user who created the issue. |
| `favorite` | `Record<string, any>` | No | The users favorite associated with this issue. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `identifier` | `string` | Yes | Issue's human readable identifier (e.g. |
| `inheritsSharedAccess` | `boolean` | Yes | Whether this issue inherits shared access from its parent issue. |
| `integrationSourceType` | `string` | No | Integration type that created this issue, if applicable. |
| `labelIds` | `string` | Yes | Identifiers of the labels associated with this issue. |
| `lastAppliedTemplate` | `Record<string, any>` | No | The last template that was applied to this issue. |
| `number` | `number` | Yes | The issue's unique number, scoped to the issue's team. |
| `parent` | `Record<string, any>` | No | The parent of the issue. |
| `previousIdentifiers` | `string` | Yes | Previous identifiers of the issue if it has been moved between teams. |
| `priority` | `number` | Yes | The priority of the issue. |
| `priorityLabel` | `string` | Yes | Label for the priority. |
| `prioritySortOrder` | `number` | Yes | The order of the item in relation to other items in the workspace, when ordered by priority. |
| `project` | `Record<string, any>` | No | The project that the issue is associated with. |
| `projectMilestone` | `Record<string, any>` | No | The project milestone that the issue is associated with. |
| `reactionData` | `any` | Yes | Emoji reaction summary for the issue, grouped by emoji type. |
| `recurringIssueTemplate` | `Record<string, any>` | No | The recurring issue template that created this issue. |
| `slaBreachesAt` | `any` | No | The time at which the issue's SLA will breach. |
| `slaHighRiskAt` | `any` | No | The time at which the issue's SLA will enter high risk state. |
| `slaMediumRiskAt` | `any` | No | The time at which the issue's SLA will enter medium risk state. |
| `slaStartedAt` | `any` | No | The time at which the issue's SLA began. |
| `slaType` | `string` | No | The type of SLA set on the issue. |
| `snoozedBy` | `Record<string, any>` | No | The user who snoozed the issue. |
| `snoozedUntilAt` | `any` | No | The time until an issue will be snoozed in Triage view. |
| `sortOrder` | `number` | Yes | The order of the item in relation to other items in the organization. |
| `sourceComment` | `Record<string, any>` | No | The comment that this issue was created from, when an issue is created from an existing comment. |
| `startedAt` | `any` | No | The time at which the issue was moved into started state. |
| `startedTriageAt` | `any` | No | The time at which the issue entered triage. |
| `state` | `Record<string, any>` | No | The workflow state (issue status) that the issue is currently in. |
| `subIssueSortOrder` | `number` | No | The order of the item in the sub-issue list. |
| `suggestionsGeneratedAt` | `any` | No | [Internal] The time at which the most recent suggestions for this issue were generated. |
| `summary` | `Record<string, any>` | No | [Internal] AI-generated activity summary for this issue. |
| `team` | `Record<string, any>` | No | The team that the issue belongs to. |
| `title` | `string` | Yes | The issue's title. |
| `trashed` | `boolean` | No | A flag that indicates whether the issue is in the trash bin. |
| `triagedAt` | `any` | No | The time at which the issue left triage. |
| `trusted` | `boolean` | No | [Internal] Whether this issue has been explicitly marked as trusted. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | Issue URL. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `add_label` | `issueAddLabel` | `client.Issue().update({ $action: 'add_label', ... })` |
| `archive` | `issueArchive` | `client.Issue().update({ $action: 'archive', ... })` |
| `description_update_from_front` | `issueDescriptionUpdateFromFront` | `client.Issue().update({ $action: 'description_update_from_front', ... })` |
| `external_sync_disable` | `issueExternalSyncDisable` | `client.Issue().update({ $action: 'external_sync_disable', ... })` |
| `reminder` | `issueReminder` | `client.Issue().update({ $action: 'reminder', ... })` |
| `remove_label` | `issueRemoveLabel` | `client.Issue().update({ $action: 'remove_label', ... })` |
| `share` | `issueShare` | `client.Issue().update({ $action: 'share', ... })` |
| `subscribe` | `issueSubscribe` | `client.Issue().update({ $action: 'subscribe', ... })` |
| `unarchive` | `issueUnarchive` | `client.Issue().update({ $action: 'unarchive', ... })` |
| `unshare` | `issueUnshare` | `client.Issue().update({ $action: 'unshare', ... })` |
| `unsubscribe` | `issueUnsubscribe` | `client.Issue().update({ $action: 'unsubscribe', ... })` |

An action returns that action's OWN response, which is not necessarily a
Issue record — check the API definition for its shape.

```ts
const result = await client.Issue().update({
  $action: 'add_label',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Issue().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Issue().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Issue().load({ id: 'issue_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Issue().remove({ id: 'issue_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Issue().update({
  id: 'issue_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IssueEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IssueImportEntity

```ts
const issue_import = client.IssueImport()
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `create_asana` | `issueImportCreateAsana` | `client.IssueImport().create({ $action: 'create_asana', ... })` |
| `create_clubhouse` | `issueImportCreateClubhouse` | `client.IssueImport().create({ $action: 'create_clubhouse', ... })` |
| `create_csv_jira` | `issueImportCreateCSVJira` | `client.IssueImport().create({ $action: 'create_csv_jira', ... })` |
| `create_github` | `issueImportCreateGithub` | `client.IssueImport().create({ $action: 'create_github', ... })` |
| `create_jira` | `issueImportCreateJira` | `client.IssueImport().create({ $action: 'create_jira', ... })` |
| `create_linear_v2` | `issueImportCreateLinearV2` | `client.IssueImport().update({ $action: 'create_linear_v2', ... })` |
| `process` | `issueImportProcess` | `client.IssueImport().update({ $action: 'process', ... })` |

An action returns that action's OWN response, which is not necessarily a
IssueImport record — check the API definition for its shape.

```ts
const result = await client.IssueImport().create({
  $action: 'create_asana',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.IssueImport().create({
  createdAt: 'example_createdAt',
  displayName: 'example_displayName',
  service: 'example_service',
  status: 'example_status',
  updatedAt: 'example_updatedAt',
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.IssueImport().remove({ issue_import_id: 'issue_import_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.IssueImport().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IssueImportEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IssueLabelEntity

```ts
const issue_label = client.IssueLabel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `color` | `string` | Yes | The label's color as a HEX string (e.g., '#EB5757'). |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `Record<string, any>` | No | The user who created the label. |
| `description` | `string` | No | The label's description. |
| `groupType` | `string` | No | The selection mode of this label group. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `inheritedFrom` | `Record<string, any>` | No | The original workspace or parent-team label that this label was inherited from. |
| `isGroup` | `boolean` | Yes | Whether the label is a group. |
| `lastAppliedAt` | `any` | No | The date when the label was last applied to an issue, project, or initiative. |
| `name` | `string` | Yes | The label's name. |
| `parent` | `Record<string, any>` | No | The parent label. |
| `retiredAt` | `any` | No | [Internal] When the label was retired. |
| `retiredBy` | `Record<string, any>` | No | The user who retired the label. |
| `team` | `Record<string, any>` | No | The team that the label is scoped to. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `restore` | `issueLabelRestore` | `client.IssueLabel().update({ $action: 'restore', ... })` |
| `retire` | `issueLabelRetire` | `client.IssueLabel().update({ $action: 'retire', ... })` |

An action returns that action's OWN response, which is not necessarily a
IssueLabel record — check the API definition for its shape.

```ts
const result = await client.IssueLabel().update({
  $action: 'restore',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.IssueLabel().create({
  color: 'example_color',
  createdAt: 'example_createdAt',
  id: 'example_id',
  isGroup: true,
  name: 'example_name',
  updatedAt: 'example_updatedAt',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.IssueLabel().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.IssueLabel().load({ id: 'issue_label_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.IssueLabel().remove({ id: 'issue_label_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.IssueLabel().update({
  id: 'issue_label_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IssueLabelEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IssuePriorityValueEntity

```ts
const issue_priority_value = client.IssuePriorityValue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `string` | Yes | Priority's label. |
| `priority` | `number` | Yes | Priority's number value. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.IssuePriorityValue().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IssuePriorityValueEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IssueRelationEntity

```ts
const issue_relation = client.IssueRelation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `issue` | `Record<string, any>` | No | The source issue whose relationship is being described. |
| `relatedIssue` | `Record<string, any>` | No | The target issue that the source issue is related to. |
| `type` | `string` | Yes | The type of relationship between the source issue and the related issue. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.IssueRelation().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  type: 'example_type',
  updatedAt: 'example_updatedAt',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.IssueRelation().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.IssueRelation().load({ id: 'issue_relation_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.IssueRelation().remove({ id: 'issue_relation_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.IssueRelation().update({
  id: 'issue_relation_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IssueRelationEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IssueSearchResultEntity

```ts
const issue_search_result = client.IssueSearchResult()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activitySummary` | `any` | No | [Internal] The activity summary information for this issue. |
| `addedToCycleAt` | `any` | No | The time at which the issue was added to a cycle. |
| `addedToProjectAt` | `any` | No | The time at which the issue was added to a project. |
| `addedToTeamAt` | `any` | No | The time at which the issue was added to a team. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `asksExternalUserRequester` | `Record<string, any>` | No | The external user who requested creation of the Asks issue on behalf of the creator. |
| `asksRequester` | `Record<string, any>` | No | The internal user who requested creation of the Asks issue on behalf of the creator. |
| `assignee` | `Record<string, any>` | No | The user to whom the issue is assigned. |
| `autoArchivedAt` | `any` | No | The time at which the issue was automatically archived by the auto pruning process. |
| `autoClosedAt` | `any` | No | The time at which the issue was automatically closed by the auto pruning process. |
| `botActor` | `Record<string, any>` | No | The bot that created the issue, if applicable. |
| `branchName` | `string` | Yes | Suggested branch name for the issue. |
| `canceledAt` | `any` | No | The time at which the issue was moved into canceled state. |
| `completedAt` | `any` | No | The time at which the issue was moved into completed state. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `Record<string, any>` | No | The user who created the issue. |
| `customerTicketCount` | `number` | Yes | Returns the number of Attachment resources which are created by customer support ticketing systems (e.g. |
| `cycle` | `Record<string, any>` | No | The cycle that the issue is associated with. |
| `delegate` | `Record<string, any>` | No | The agent user that is delegated to work on this issue. |
| `description` | `string` | No | The issue's description in markdown format. |
| `descriptionState` | `string` | No | [Internal] The issue's description content as YJS state. |
| `documentContent` | `Record<string, any>` | No | [ALPHA] The document content representing this issue description. |
| `dueDate` | `any` | No | The date at which the issue is due. |
| `estimate` | `number` | No | The estimate of the complexity of the issue. |
| `externalUserCreator` | `Record<string, any>` | No | The external user who created the issue. |
| `favorite` | `Record<string, any>` | No | The users favorite associated with this issue. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `identifier` | `string` | Yes | Issue's human readable identifier (e.g. |
| `inheritsSharedAccess` | `boolean` | Yes | Whether this issue inherits shared access from its parent issue. |
| `integrationSourceType` | `string` | No | Integration type that created this issue, if applicable. |
| `labelIds` | `string` | Yes | Identifiers of the labels associated with this issue. |
| `lastAppliedTemplate` | `Record<string, any>` | No | The last template that was applied to this issue. |
| `metadata` | `any` | Yes | Metadata related to search result. |
| `number` | `number` | Yes | The issue's unique number, scoped to the issue's team. |
| `parent` | `Record<string, any>` | No | The parent of the issue. |
| `previousIdentifiers` | `string` | Yes | Previous identifiers of the issue if it has been moved between teams. |
| `priority` | `number` | Yes | The priority of the issue. |
| `priorityLabel` | `string` | Yes | Label for the priority. |
| `prioritySortOrder` | `number` | Yes | The order of the item in relation to other items in the workspace, when ordered by priority. |
| `project` | `Record<string, any>` | No | The project that the issue is associated with. |
| `projectMilestone` | `Record<string, any>` | No | The project milestone that the issue is associated with. |
| `reactionData` | `any` | Yes | Emoji reaction summary for the issue, grouped by emoji type. |
| `recurringIssueTemplate` | `Record<string, any>` | No | The recurring issue template that created this issue. |
| `slaBreachesAt` | `any` | No | The time at which the issue's SLA will breach. |
| `slaHighRiskAt` | `any` | No | The time at which the issue's SLA will enter high risk state. |
| `slaMediumRiskAt` | `any` | No | The time at which the issue's SLA will enter medium risk state. |
| `slaStartedAt` | `any` | No | The time at which the issue's SLA began. |
| `slaType` | `string` | No | The type of SLA set on the issue. |
| `snoozedBy` | `Record<string, any>` | No | The user who snoozed the issue. |
| `snoozedUntilAt` | `any` | No | The time until an issue will be snoozed in Triage view. |
| `sortOrder` | `number` | Yes | The order of the item in relation to other items in the organization. |
| `sourceComment` | `Record<string, any>` | No | The comment that this issue was created from, when an issue is created from an existing comment. |
| `startedAt` | `any` | No | The time at which the issue was moved into started state. |
| `startedTriageAt` | `any` | No | The time at which the issue entered triage. |
| `state` | `Record<string, any>` | No | The workflow state (issue status) that the issue is currently in. |
| `subIssueSortOrder` | `number` | No | The order of the item in the sub-issue list. |
| `suggestionsGeneratedAt` | `any` | No | [Internal] The time at which the most recent suggestions for this issue were generated. |
| `summary` | `Record<string, any>` | No | [Internal] AI-generated activity summary for this issue. |
| `team` | `Record<string, any>` | No | The team that the issue belongs to. |
| `title` | `string` | Yes | The issue's title. |
| `trashed` | `boolean` | No | A flag that indicates whether the issue is in the trash bin. |
| `triagedAt` | `any` | No | The time at which the issue left triage. |
| `trusted` | `boolean` | No | [Internal] Whether this issue has been explicitly marked as trusted. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | Issue URL. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.IssueSearchResult().list({ term: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IssueSearchResultEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IssueToReleaseEntity

```ts
const issue_to_release = client.IssueToRelease()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `issue` | `Record<string, any>` | No | The issue that is linked to the release. |
| `release` | `Record<string, any>` | No | The release that the issue is linked to. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.IssueToRelease().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  updatedAt: 'example_updatedAt',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.IssueToRelease().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.IssueToRelease().load({ id: 'issue_to_release_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.IssueToRelease().remove({ id: 'issue_to_release_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IssueToReleaseEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LogoutResponseEntity

```ts
const logout_response = client.LogoutResponse()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Whether the operation was successful. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `logout` | `logout` | `client.LogoutResponse().create({ $action: 'logout', ... })` |
| `logout_all_session` | `logoutAllSessions` | `client.LogoutResponse().create({ $action: 'logout_all_session', ... })` |
| `logout_other_session` | `logoutOtherSessions` | `client.LogoutResponse().create({ $action: 'logout_other_session', ... })` |
| `logout_session` | `logoutSession` | `client.LogoutResponse().update({ $action: 'logout_session', ... })` |

An action returns that action's OWN response, which is not necessarily a
LogoutResponse record — check the API definition for its shape.

```ts
const result = await client.LogoutResponse().create({
  $action: 'logout',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.LogoutResponse().create({
  success: true,
})
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.LogoutResponse().update({
  session_id: 'session_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LogoutResponseEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NotificationEntity

```ts
const notification = client.Notification()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `Record<string, any>` | No | The user that caused the notification. |
| `actorAvatarColor` | `string` | Yes | [Internal] Notification actor initials if avatar is not available. |
| `actorAvatarUrl` | `string` | No | [Internal] Notification avatar URL. |
| `actorInactive` | `boolean` | Yes | [Internal] Whether the notification's user actor is deactivated in the workspace. |
| `actorInitials` | `string` | No | [Internal] Notification actor initials if avatar is not available. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `botActor` | `Record<string, any>` | No | The bot that caused the notification. |
| `category` | `string` | Yes | The category of the notification. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `emailedAt` | `any` | No | The time at which an email reminder for this notification was sent to the user. |
| `externalUserActor` | `Record<string, any>` | No | The external user that caused the notification. |
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
| `user` | `Record<string, any>` | No | The recipient user of this notification. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Notification().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Notification().load({ id: 'notification_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NotificationEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NotificationSubscriptionEntity

```ts
const notification_subscription = client.NotificationSubscription()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes | Whether the subscription is active. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `contextViewType` | `string` | No | The type of contextual view (e.g., active issues, backlog) that further scopes a team notification subscription. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `customView` | `Record<string, any>` | No | The custom view that this notification subscription is scoped to. |
| `customer` | `Record<string, any>` | No | The customer that this notification subscription is scoped to. |
| `cycle` | `Record<string, any>` | No | The cycle that this notification subscription is scoped to. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiative` | `Record<string, any>` | No | The initiative that this notification subscription is scoped to. |
| `label` | `Record<string, any>` | No | The issue label that this notification subscription is scoped to. |
| `project` | `Record<string, any>` | No | The project that this notification subscription is scoped to. |
| `subscriber` | `Record<string, any>` | No | The user who will receive notifications from this subscription. |
| `team` | `Record<string, any>` | No | The team that this notification subscription is scoped to. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `Record<string, any>` | No | The user that this notification subscription is scoped to, for user-specific view subscriptions. |
| `userContextViewType` | `string` | No | The type of user-specific view that further scopes a user notification subscription. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.NotificationSubscription().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.NotificationSubscription().load({ id: 'notification_subscription_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NotificationSubscriptionEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OAuthApplicationEntity

```ts
const o_auth_application = client.OAuthApplication()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.OAuthApplication().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OAuthApplication().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.OAuthApplication().load({ id: 'o_auth_application_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.OAuthApplication().update({
  id: 'o_auth_application_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OAuthApplicationEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrganizationEntity

```ts
const organization = client.Organization()
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
| `slackProjectChannelIntegration` | `Record<string, any>` | No | The Slack integration used for auto-creating project channels. |
| `slackProjectChannelPrefix` | `string` | Yes | The prefix used for auto-created Slack project channels. |
| `slackProjectChannelsEnabled` | `boolean` | Yes | [Internal] Whether the Slack project channels feature is enabled for the workspace. |
| `subscription` | `Record<string, any>` | No | The workspace's subscription to a paid plan. |
| `themeSettings` | `any` | No | [ALPHA] Theme settings for the workspace. |
| `trialEndsAt` | `any` | No | The time at which the current plan trial will end. |
| `trialStartsAt` | `any` | No | The time at which the current plan trial started. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `urlKey` | `string` | Yes | The workspace's unique URL key, used in URLs to identify the workspace. |
| `userCount` | `number` | Yes | The number of active (non-deactivated) users in the workspace. |
| `workingDays` | `number` | Yes | [Internal] The list of working days. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Organization().load({ id: 'organization_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Organization().remove({ id: 'organization_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Organization().update({
  id: 'organization_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrganizationEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrganizationDomainEntity

```ts
const organization_domain = client.OrganizationDomain()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `authType` | `string` | Yes | The authentication type this domain is used for. |
| `claimed` | `boolean` | No | Whether the domain was claimed by the workspace through DNS TXT record verification. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `Record<string, any>` | No | The user who added the domain. |
| `disableOrganizationCreation` | `boolean` | No | Whether users with email addresses from this domain are prevented from creating new workspaces. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `identityProvider` | `Record<string, any>` | No | The identity provider the domain belongs to. |
| `name` | `string` | Yes | The domain name (e.g., 'example.com'). |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `verificationEmail` | `string` | No | The email address used to verify this domain. |
| `verified` | `boolean` | Yes | Whether the domain has been verified via email verification. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `verify` | `organizationDomainVerify` | `client.OrganizationDomain().create({ $action: 'verify', ... })` |

An action returns that action's OWN response, which is not necessarily a
OrganizationDomain record — check the API definition for its shape.

```ts
const result = await client.OrganizationDomain().create({
  $action: 'verify',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.OrganizationDomain().create({
  authType: 'example_authType',
  createdAt: 'example_createdAt',
  id: 'example_id',
  name: 'example_name',
  updatedAt: 'example_updatedAt',
  verified: true,
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.OrganizationDomain().remove({ id: 'id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.OrganizationDomain().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrganizationDomainEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrganizationInviteEntity

```ts
const organization_invite = client.OrganizationInvite()
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
| `invitee` | `Record<string, any>` | No | The user who has accepted the invite. |
| `inviter` | `Record<string, any>` | No | The user who created the invitation. |
| `metadata` | `any` | No | Extra metadata associated with the invite. |
| `organization` | `Record<string, any>` | No | The workspace that the invite is associated with. |
| `role` | `string` | Yes | The workspace role (admin, member, guest, or owner) that the invitee will receive upon accepting the invite. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.OrganizationInvite().create({
  createdAt: 'example_createdAt',
  email: 'example_email',
  external: true,
  id: 'example_id',
  role: 'example_role',
  updatedAt: 'example_updatedAt',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OrganizationInvite().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.OrganizationInvite().load({ id: 'organization_invite_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.OrganizationInvite().remove({ id: 'organization_invite_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.OrganizationInvite().update({
  id: 'organization_invite_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrganizationInviteEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrganizationMetaEntity

```ts
const organization_meta = client.OrganizationMeta()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowedAuthServices` | `string` | Yes | Allowed authentication providers, empty array means all are allowed. |
| `region` | `string` | Yes | The region the workspace is hosted in. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.OrganizationMeta().load({ url_key: 'url_key' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrganizationMetaEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PasskeyLoginStartResponseEntity

```ts
const passkey_login_start_response = client.PasskeyLoginStartResponse()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `options` | `any` | Yes | The passkey authentication options to pass to the WebAuthn API. |
| `success` | `boolean` | Yes | Whether the operation was successful. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `passkey_login_start` | `passkeyLoginStart` | `client.PasskeyLoginStartResponse().update({ $action: 'passkey_login_start', ... })` |

An action returns that action's OWN response, which is not necessarily a
PasskeyLoginStartResponse record — check the API definition for its shape.

```ts
const result = await client.PasskeyLoginStartResponse().update({
  $action: 'passkey_login_start',
  /* ...the action's own arguments */
})
```

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.PasskeyLoginStartResponse().update({
  auth_id: 'auth_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PasskeyLoginStartResponseEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectEntity

```ts
const project = client.Project()
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
| `convertedFromIssue` | `Record<string, any>` | No | The issue that was converted into this project. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `Record<string, any>` | No | The user who created the project. |
| `currentProgress` | `any` | Yes | [INTERNAL] The current progress of the project, broken down by issue status category. |
| `description` | `string` | Yes | The short description of the project. |
| `documentContent` | `Record<string, any>` | No | The content of the project description. |
| `favorite` | `Record<string, any>` | No | The user's favorite associated with this project. |
| `frequencyResolution` | `string` | Yes | The resolution of the reminder frequency. |
| `health` | `string` | No | The overall health of the project, derived from the most recent project update. |
| `healthUpdatedAt` | `any` | No | The time at which the project health was last updated, typically when a new project update is posted. |
| `icon` | `string` | No | The icon of the project. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `identifier` | `string` | No | [Internal] The human-readable identifier of the project. |
| `inProgressScopeHistory` | `number` | Yes | The number of in-progress estimation points at the end of each week since project creation. |
| `integrationsSettings` | `Record<string, any>` | No | Settings for all integrations associated with that project. |
| `issueCountHistory` | `number` | Yes | The total number of issues in the project at the end of each week since project creation. |
| `labelIds` | `string` | Yes | The IDs of the project labels associated with this project. |
| `lastAppliedTemplate` | `Record<string, any>` | No | The last template that was applied to this project. |
| `lastUpdate` | `Record<string, any>` | No | The most recent status update posted for this project. |
| `lead` | `Record<string, any>` | No | The user who leads the project. |
| `leadTeam` | `Record<string, any>` | No | [Internal] The team that leads the project. |
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
| `status` | `Record<string, any>` | No | The current project status. |
| `targetDate` | `any` | No | The estimated completion date of the project. |
| `targetDateResolution` | `string` | No | The resolution of the project's estimated completion date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `trashed` | `boolean` | No | A flag that indicates whether the project is in the trash bin. |
| `updateReminderFrequency` | `number` | No | The frequency at which to prompt for updates. |
| `updateReminderFrequencyInWeeks` | `number` | No | The n-weekly frequency at which to prompt for updates. |
| `updateRemindersDay` | `string` | No | The day at which to prompt for updates. |
| `updateRemindersHour` | `number` | No | The hour at which to prompt for updates. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | Project URL. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `add_label` | `projectAddLabel` | `client.Project().update({ $action: 'add_label', ... })` |
| `archive` | `projectArchive` | `client.Project().update({ $action: 'archive', ... })` |
| `create_slack_channel` | `projectCreateSlackChannel` | `client.Project().update({ $action: 'create_slack_channel', ... })` |
| `dismiss_slack_channel_creation_failure` | `projectDismissSlackChannelCreationFailure` | `client.Project().update({ $action: 'dismiss_slack_channel_creation_failure', ... })` |
| `external_sync_disable` | `projectExternalSyncDisable` | `client.Project().update({ $action: 'external_sync_disable', ... })` |
| `remove_label` | `projectRemoveLabel` | `client.Project().update({ $action: 'remove_label', ... })` |
| `unarchive` | `projectUnarchive` | `client.Project().update({ $action: 'unarchive', ... })` |

An action returns that action's OWN response, which is not necessarily a
Project record — check the API definition for its shape.

```ts
const result = await client.Project().update({
  $action: 'add_label',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Project().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Project().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Project().load({ id: 'project_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Project().remove({ id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Project().update({
  id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectLabelEntity

```ts
const project_label = client.ProjectLabel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `color` | `string` | Yes | The label's color as a HEX string (e.g., '#EB5757'). |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `Record<string, any>` | No | The user who created the label. |
| `description` | `string` | No | The label's description. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `inheritedFrom` | `Record<string, any>` | No | [Internal] The original workspace or parent-team label that this label was inherited from. |
| `isGroup` | `boolean` | Yes | Whether the label is a group. |
| `lastAppliedAt` | `any` | No | The date when the label was last applied to an issue, project, or initiative. |
| `name` | `string` | Yes | The label's name. |
| `organization` | `Record<string, any>` | No | The workspace that the project label belongs to. |
| `parent` | `Record<string, any>` | No | The parent label group. |
| `retiredAt` | `any` | No | [Internal] When the label was retired. |
| `retiredBy` | `Record<string, any>` | No | The user who retired the label. |
| `team` | `Record<string, any>` | No | [Internal] The team that the label is scoped to. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `restore` | `projectLabelRestore` | `client.ProjectLabel().update({ $action: 'restore', ... })` |
| `retire` | `projectLabelRetire` | `client.ProjectLabel().update({ $action: 'retire', ... })` |

An action returns that action's OWN response, which is not necessarily a
ProjectLabel record — check the API definition for its shape.

```ts
const result = await client.ProjectLabel().update({
  $action: 'restore',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ProjectLabel().create({
  color: 'example_color',
  createdAt: 'example_createdAt',
  id: 'example_id',
  isGroup: true,
  name: 'example_name',
  updatedAt: 'example_updatedAt',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ProjectLabel().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ProjectLabel().load({ id: 'project_label_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ProjectLabel().remove({ id: 'project_label_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ProjectLabel().update({
  id: 'project_label_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectLabelEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectMilestoneEntity

```ts
const project_milestone = client.ProjectMilestone()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `currentProgress` | `any` | Yes | [Internal] The current progress of the milestone, broken down by issue status category. |
| `description` | `string` | No | The project milestone's description in markdown format. |
| `descriptionState` | `string` | No | [Internal] The project milestone's description as YJS state. |
| `documentContent` | `Record<string, any>` | No | The rich-text content of the milestone description. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `name` | `string` | Yes | The name of the project milestone. |
| `progress` | `number` | Yes | The progress % of the project milestone. |
| `progressHistory` | `any` | Yes | [Internal] The progress history of the milestone, tracking issue completion over time. |
| `project` | `Record<string, any>` | No | The project that this milestone belongs to. |
| `sortOrder` | `number` | Yes | The order of the milestone in relation to other milestones within a project. |
| `status` | `string` | Yes | The status of the project milestone. |
| `targetDate` | `any` | No | The planned completion date of the milestone. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ProjectMilestone().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ProjectMilestone().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ProjectMilestone().load({ id: 'project_milestone_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ProjectMilestone().remove({ id: 'project_milestone_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ProjectMilestone().update({
  id: 'project_milestone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectMilestoneEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectMilestoneMoveProjectTeamEntity

```ts
const project_milestone_move_project_team = client.ProjectMilestoneMoveProjectTeam()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `projectId` | `string` | Yes | The project id |
| `teamIds` | `string` | Yes | The team ids for the project |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `project_milestone_move` | `projectMilestoneMove` | `client.ProjectMilestoneMoveProjectTeam().update({ $action: 'project_milestone_move', ... })` |

An action returns that action's OWN response, which is not necessarily a
ProjectMilestoneMoveProjectTeam record — check the API definition for its shape.

```ts
const result = await client.ProjectMilestoneMoveProjectTeam().update({
  $action: 'project_milestone_move',
  /* ...the action's own arguments */
})
```

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ProjectMilestoneMoveProjectTeam().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectMilestoneMoveProjectTeamEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectRelationEntity

```ts
const project_relation = client.ProjectRelation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `anchorType` | `string` | Yes | The type of anchor on the source project end of the relation, indicating whether it is anchored to the project itself or a specific milestone. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `project` | `Record<string, any>` | No | The source project in the dependency relation. |
| `projectMilestone` | `Record<string, any>` | No | The specific milestone within the source project that the relation is anchored to. |
| `relatedAnchorType` | `string` | Yes | The type of anchor on the target project end of the relation, indicating whether it is anchored to the project itself or a specific milestone. |
| `relatedProject` | `Record<string, any>` | No | The target project in the dependency relation. |
| `relatedProjectMilestone` | `Record<string, any>` | No | The specific milestone within the target project that the relation is anchored to. |
| `type` | `string` | Yes | The type of dependency relationship from the project to the related project (e.g., blocks). |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `Record<string, any>` | No | The user who last created or modified the relation. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ProjectRelation().create({
  anchorType: 'example_anchorType',
  createdAt: 'example_createdAt',
  id: 'example_id',
  relatedAnchorType: 'example_relatedAnchorType',
  type: 'example_type',
  updatedAt: 'example_updatedAt',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ProjectRelation().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ProjectRelation().load({ id: 'project_relation_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ProjectRelation().remove({ id: 'project_relation_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ProjectRelation().update({
  id: 'project_relation_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectRelationEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectSearchResultEntity

```ts
const project_search_result = client.ProjectSearchResult()
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
| `convertedFromIssue` | `Record<string, any>` | No | The issue that was converted into this project. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `Record<string, any>` | No | The user who created the project. |
| `currentProgress` | `any` | Yes | [INTERNAL] The current progress of the project, broken down by issue status category. |
| `description` | `string` | Yes | The short description of the project. |
| `documentContent` | `Record<string, any>` | No | The content of the project description. |
| `favorite` | `Record<string, any>` | No | The user's favorite associated with this project. |
| `frequencyResolution` | `string` | Yes | The resolution of the reminder frequency. |
| `health` | `string` | No | The overall health of the project, derived from the most recent project update. |
| `healthUpdatedAt` | `any` | No | The time at which the project health was last updated, typically when a new project update is posted. |
| `icon` | `string` | No | The icon of the project. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `identifier` | `string` | No | [Internal] The human-readable identifier of the project. |
| `inProgressScopeHistory` | `number` | Yes | The number of in-progress estimation points at the end of each week since project creation. |
| `integrationsSettings` | `Record<string, any>` | No | Settings for all integrations associated with that project. |
| `issueCountHistory` | `number` | Yes | The total number of issues in the project at the end of each week since project creation. |
| `labelIds` | `string` | Yes | The IDs of the project labels associated with this project. |
| `lastAppliedTemplate` | `Record<string, any>` | No | The last template that was applied to this project. |
| `lastUpdate` | `Record<string, any>` | No | The most recent status update posted for this project. |
| `lead` | `Record<string, any>` | No | The user who leads the project. |
| `leadTeam` | `Record<string, any>` | No | [Internal] The team that leads the project. |
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
| `status` | `Record<string, any>` | No | The current project status. |
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ProjectSearchResult().list({ term: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectSearchResultEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectStatusEntity

```ts
const project_status = client.ProjectStatus()
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
| `inheritedFrom` | `Record<string, any>` | No | [Internal] The original workspace or parent-team status that this status was inherited from. |
| `name` | `string` | Yes | The name of the status. |
| `position` | `number` | Yes | The position of the status within its type group in the workspace's project flow. |
| `team` | `Record<string, any>` | No | [Internal] The team that the status is scoped to. |
| `type` | `string` | Yes | The category type of the project status (e.g., backlog, planned, started, paused, completed, canceled). |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `archive` | `projectStatusArchive` | `client.ProjectStatus().update({ $action: 'archive', ... })` |
| `unarchive` | `projectStatusUnarchive` | `client.ProjectStatus().update({ $action: 'unarchive', ... })` |

An action returns that action's OWN response, which is not necessarily a
ProjectStatus record — check the API definition for its shape.

```ts
const result = await client.ProjectStatus().update({
  $action: 'archive',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ProjectStatus().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ProjectStatus().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ProjectStatus().load({ id: 'project_status_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ProjectStatus().update({
  id: 'project_status_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectStatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectUpdateEntity

```ts
const project_update = client.ProjectUpdate()
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
| `project` | `Record<string, any>` | No | The project that this status update was posted to. |
| `reactionData` | `any` | Yes | Emoji reaction summary, grouped by emoji type. |
| `shortSummary` | `string` | No | A short AI-generated summary of the project update. |
| `slugId` | `string` | Yes | The update's unique URL slug. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | The URL to the project update. |
| `user` | `Record<string, any>` | No | The user who wrote the update. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `archive` | `projectUpdateArchive` | `client.ProjectUpdate().update({ $action: 'archive', ... })` |
| `unarchive` | `projectUpdateUnarchive` | `client.ProjectUpdate().update({ $action: 'unarchive', ... })` |

An action returns that action's OWN response, which is not necessarily a
ProjectUpdate record — check the API definition for its shape.

```ts
const result = await client.ProjectUpdate().update({
  $action: 'archive',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ProjectUpdate().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ProjectUpdate().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ProjectUpdate().load({ id: 'project_update_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ProjectUpdate().remove({ id: 'project_update_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ProjectUpdate().update({
  id: 'project_update_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectUpdateEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PushSubscriptionEntity

```ts
const push_subscription = client.PushSubscription()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PushSubscription().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  updatedAt: 'example_updatedAt',
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.PushSubscription().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PushSubscriptionEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReactionEntity

```ts
const reaction = client.Reaction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `comment` | `Record<string, any>` | No | The comment that the reaction is associated with. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `emoji` | `string` | Yes | The name of the emoji used for this reaction. |
| `externalUser` | `Record<string, any>` | No | The external user that created the reaction through an integration. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `initiativeUpdate` | `Record<string, any>` | No | The initiative update that the reaction is associated with. |
| `issue` | `Record<string, any>` | No | The issue that the reaction is associated with. |
| `post` | `Record<string, any>` | No | The post that the reaction is associated with. |
| `projectUpdate` | `Record<string, any>` | No | The project update that the reaction is associated with. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `Record<string, any>` | No | The workspace user that created the reaction. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Reaction().create({
  createdAt: 'example_createdAt',
  emoji: 'example_emoji',
  id: 'example_id',
  updatedAt: 'example_updatedAt',
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Reaction().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReactionEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReleaseEntity

```ts
const release = client.Release()
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
| `creator` | `Record<string, any>` | No | The user who created the release. |
| `currentProgress` | `any` | Yes | The current progress summary for the release, including counts of issues by workflow state type (e.g., completed, in progress, unstarted). |
| `description` | `string` | No | The description of the release in plain text or markdown. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `issueCount` | `number` | Yes | Number of issues associated with the release. |
| `name` | `string` | Yes | The name of the release. |
| `pipeline` | `Record<string, any>` | No | The release pipeline that this release belongs to. |
| `progressHistory` | `any` | Yes | The historical progress snapshots for the release, tracking how issue completion has evolved over time. |
| `releaseNote` | `Record<string, any>` | No | [Internal] The primary release note covering this release. |
| `slugId` | `string` | Yes | The release's unique URL slug, used to construct human-readable URLs for the release. |
| `stage` | `Record<string, any>` | No | The current stage of the release within its pipeline (e.g., Planned, In Progress, Completed, Canceled). |
| `startDate` | `any` | No | The estimated start date of the release. |
| `startedAt` | `any` | No | The time at which the release first entered a started stage. |
| `targetDate` | `any` | No | The estimated completion date of the release. |
| `trashed` | `boolean` | No | A flag that indicates whether the release is in the trash bin. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | The URL to the release page in the Linear app. |
| `version` | `string` | No | The version identifier for this release (e.g., 'v1.2.3' or a short commit hash). |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `complete` | `releaseComplete` | `client.Release().create({ $action: 'complete', ... })` |
| `sync` | `releaseSync` | `client.Release().create({ $action: 'sync', ... })` |
| `update_by_pipeline` | `releaseUpdateByPipeline` | `client.Release().create({ $action: 'update_by_pipeline', ... })` |
| `archive` | `releaseArchive` | `client.Release().update({ $action: 'archive', ... })` |
| `unarchive` | `releaseUnarchive` | `client.Release().update({ $action: 'unarchive', ... })` |

An action returns that action's OWN response, which is not necessarily a
Release record — check the API definition for its shape.

```ts
const result = await client.Release().create({
  $action: 'complete',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Release().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Release().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Release().load({ id: 'release_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Release().remove({ id: 'release_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Release().update({
  id: 'release_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReleaseEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReleaseNoteEntity

```ts
const release_note = client.ReleaseNote()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `documentContent` | `Record<string, any>` | No | Document content backing the release note body. |
| `firstRelease` | `Record<string, any>` | No | The earliest release covered by this note. |
| `generationStatus` | `string` | No | Generation status when these release notes are being auto-generated: `pending` while the LLM call is running, `completed` once it lands. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `lastRelease` | `Record<string, any>` | No | The most recent release covered by this note. |
| `pipeline` | `Record<string, any>` | No | The release pipeline that this note belongs to. |
| `releaseCount` | `number` | Yes | The number of releases covered by this note. |
| `slugId` | `string` | Yes | The release note's unique URL slug, used to construct human-readable URLs for the note. |
| `title` | `string` | No | User-supplied title for the release note. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | The URL to the release note page in the Linear app. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ReleaseNote().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  releaseCount: 1,
  slugId: 'example_slugId',
  updatedAt: 'example_updatedAt',
  url: 'example_url',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ReleaseNote().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ReleaseNote().load({ id: 'release_note_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ReleaseNote().remove({ id: 'release_note_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ReleaseNote().update({
  id: 'release_note_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReleaseNoteEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReleasePipelineEntity

```ts
const release_pipeline = client.ReleasePipeline()
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
| `latestReleaseNote` | `Record<string, any>` | No | The release note in this pipeline whose covered range ends with the most recent release. |
| `name` | `string` | Yes | The name of the pipeline. |
| `releaseNoteTemplate` | `Record<string, any>` | No | The document template used to define the release notes format for this pipeline. |
| `rolloverIssuesOnCompletion` | `boolean` | Yes | Whether completing a scheduled release moves its open issues to the next release. |
| `slugId` | `string` | Yes | The pipeline's unique slug identifier, used in URLs and for lookup by human-readable identifier instead of UUID. |
| `trashed` | `boolean` | No | A flag that indicates whether the pipeline is in the trash bin. |
| `type` | `string` | Yes | The type of the pipeline, which determines how releases are created and managed. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | The URL to the release pipeline's releases list in the Linear app. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `archive` | `releasePipelineArchive` | `client.ReleasePipeline().update({ $action: 'archive', ... })` |
| `unarchive` | `releasePipelineUnarchive` | `client.ReleasePipeline().update({ $action: 'unarchive', ... })` |

An action returns that action's OWN response, which is not necessarily a
ReleasePipeline record — check the API definition for its shape.

```ts
const result = await client.ReleasePipeline().update({
  $action: 'archive',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ReleasePipeline().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ReleasePipeline().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ReleasePipeline().load({ id: 'release_pipeline_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ReleasePipeline().remove({ id: 'release_pipeline_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ReleasePipeline().update({
  id: 'release_pipeline_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReleasePipelineEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReleaseStageEntity

```ts
const release_stage = client.ReleaseStage()
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
| `pipeline` | `Record<string, any>` | No | The release pipeline that this stage belongs to. |
| `position` | `number` | Yes | The position of the stage within its pipeline, used for ordering stages in the UI. |
| `type` | `string` | Yes | The lifecycle type of the stage (planned, started, completed, or canceled). |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `archive` | `releaseStageArchive` | `client.ReleaseStage().update({ $action: 'archive', ... })` |
| `unarchive` | `releaseStageUnarchive` | `client.ReleaseStage().update({ $action: 'unarchive', ... })` |

An action returns that action's OWN response, which is not necessarily a
ReleaseStage record — check the API definition for its shape.

```ts
const result = await client.ReleaseStage().update({
  $action: 'archive',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ReleaseStage().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ReleaseStage().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ReleaseStage().load({ id: 'release_stage_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ReleaseStage().update({
  id: 'release_stage_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReleaseStageEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RoadmapEntity

```ts
const roadmap = client.Roadmap()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `color` | `string` | No | The roadmap's color. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `Record<string, any>` | No | The user who created the roadmap. |
| `description` | `string` | No | The description of the roadmap. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `name` | `string` | Yes | The name of the roadmap. |
| `organization` | `Record<string, any>` | No | The workspace of the roadmap. |
| `owner` | `Record<string, any>` | No | The user who owns the roadmap. |
| `slugId` | `string` | Yes | The roadmap's unique URL slug. |
| `sortOrder` | `number` | Yes | The sort order of the roadmap within the workspace. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | The canonical url for the roadmap. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `archive` | `roadmapArchive` | `client.Roadmap().update({ $action: 'archive', ... })` |
| `unarchive` | `roadmapUnarchive` | `client.Roadmap().update({ $action: 'unarchive', ... })` |

An action returns that action's OWN response, which is not necessarily a
Roadmap record — check the API definition for its shape.

```ts
const result = await client.Roadmap().update({
  $action: 'archive',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Roadmap().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  name: 'example_name',
  slugId: 'example_slugId',
  sortOrder: 1,
  updatedAt: 'example_updatedAt',
  url: 'example_url',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Roadmap().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Roadmap().load({ id: 'roadmap_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Roadmap().remove({ id: 'roadmap_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Roadmap().update({
  id: 'roadmap_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RoadmapEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RoadmapToProjectEntity

```ts
const roadmap_to_project = client.RoadmapToProject()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `project` | `Record<string, any>` | No | The project that the roadmap is associated with. |
| `roadmap` | `Record<string, any>` | No | The roadmap that the project is associated with. |
| `sortOrder` | `string` | Yes | The sort order of the project within the roadmap. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.RoadmapToProject().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  sortOrder: 'example_sortOrder',
  updatedAt: 'example_updatedAt',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.RoadmapToProject().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RoadmapToProject().load({ id: 'roadmap_to_project_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.RoadmapToProject().remove({ id: 'roadmap_to_project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.RoadmapToProject().update({
  id: 'roadmap_to_project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RoadmapToProjectEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SlaConfigurationEntity

```ts
const sla_configuration = client.SlaConfiguration()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SlaConfiguration().list({ team_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SlaConfigurationEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SsoUrlFromEmailResponseEntity

```ts
const sso_url_from_email_response = client.SsoUrlFromEmailResponse()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `samlSsoUrl` | `string` | Yes | SAML SSO sign-in URL. |
| `success` | `boolean` | Yes | Whether the operation was successful. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.SsoUrlFromEmailResponse().load({ email: 'email', type: 'type' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SsoUrlFromEmailResponseEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TeamEntity

```ts
const team = client.Team()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeCycle` | `Record<string, any>` | No | Team's currently active cycle. |
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
| `defaultIssueState` | `Record<string, any>` | No | The default workflow state into which issues are set when they are opened by team members. |
| `defaultProjectTemplate` | `Record<string, any>` | No | The default template to use for new projects created for the team. |
| `defaultTemplateForMembers` | `Record<string, any>` | No | The default template to use for new issues created by members of the team. |
| `defaultTemplateForNonMembers` | `Record<string, any>` | No | The default template to use for new issues created by non-members of the team. |
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
| `integrationsSettings` | `Record<string, any>` | No | Settings for all integrations associated with that team. |
| `issueCount` | `number` | Yes | The total number of issues in the team. |
| `issueEstimationAllowZero` | `boolean` | Yes | Whether to allow zeros in issues estimates. |
| `issueEstimationExtended` | `boolean` | Yes | Whether to add additional points to the estimate scale. |
| `issueEstimationType` | `string` | Yes | The issue estimation type to use. |
| `joinByDefault` | `boolean` | No | [Internal] Whether new users should join this team by default. |
| `key` | `string` | Yes | The team's unique key, used as a prefix in issue identifiers (e.g., 'ENG' in 'ENG-123') and in URLs. |
| `ledInitiativeCount` | `number` | Yes | The number of initiatives led by this team that would be deleted along with it. |
| `name` | `string` | Yes | The team's name. |
| `organization` | `Record<string, any>` | No | The workspace that the team belongs to. |
| `parent` | `Record<string, any>` | No | The team's parent team. |
| `progressHistory` | `any` | Yes | [Internal] The progress history of the team. |
| `requirePriorityToLeaveTriage` | `boolean` | Yes | Whether an issue needs to have a priority set before leaving triage. |
| `restrictedBy` | `Record<string, any>` | No | [Internal] For restricted teams, the enclosing private team that forms the visibility boundary. |
| `restrictedById` | `string` | No | [Internal] The identifier of the enclosing private team that forms the visibility boundary for restricted teams. |
| `retiredAt` | `any` | No | The time at which the team was retired. |
| `scimGroupName` | `string` | No | The SCIM group name for the team. |
| `scimManaged` | `boolean` | Yes | Whether the team is managed by a SCIM integration. |
| `securitySettings` | `any` | Yes | Security settings for the team, including role-based restrictions for issue sharing, label management, member management, template management, and agent skills. |
| `setIssueSortOrderOnStateChange` | `string` | Yes | Where to move issues when changing state. |
| `slackAutoCreateProjectChannel` | `boolean` | No | [Internal] Whether to automatically create a Slack channel when a new project is created in this team. |
| `timezone` | `string` | Yes | The timezone of the team. |
| `triageEnabled` | `boolean` | Yes | Whether triage mode is enabled for the team. |
| `triageIssueState` | `Record<string, any>` | No | The workflow state into which issues are set when they are opened by non-team members or integrations if triage is enabled. |
| `triageResponsibility` | `Record<string, any>` | No | Team's triage responsibility. |
| `upcomingCycleCount` | `number` | Yes | How many upcoming cycles to create. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `visibility` | `string` | Yes | The visibility of the team. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `cycles_delete` | `teamCyclesDelete` | `client.Team().update({ $action: 'cycles_delete', ... })` |
| `unarchive` | `teamUnarchive` | `client.Team().update({ $action: 'unarchive', ... })` |

An action returns that action's OWN response, which is not necessarily a
Team record — check the API definition for its shape.

```ts
const result = await client.Team().update({
  $action: 'cycles_delete',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Team().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Team().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Team().load({ id: 'team_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Team().remove({ id: 'team_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Team().update({
  id: 'team_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TeamEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TeamMembershipEntity

```ts
const team_membership = client.TeamMembership()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `owner` | `boolean` | Yes | Whether the user is an owner of the team. |
| `sortOrder` | `number` | Yes | The sort order of this team in the user's personal team list. |
| `team` | `Record<string, any>` | No | The team that the membership is associated with. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `Record<string, any>` | No | The user that the membership is associated with. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TeamMembership().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  owner: true,
  sortOrder: 1,
  updatedAt: 'example_updatedAt',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TeamMembership().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TeamMembership().load({ id: 'team_membership_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.TeamMembership().remove({ id: 'team_membership_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TeamMembership().update({
  id: 'team_membership_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TeamMembershipEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TemplateEntity

```ts
const template = client.Template()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `color` | `string` | No | The hex color of the template icon. |
| `content` | `string` | No | The template's content in markdown format: the body it pre-fills on the entity it creates. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `Record<string, any>` | No | The user who created the template. |
| `description` | `string` | No | A description of what the template is used for. |
| `hasFormFields` | `boolean` | Yes | [Internal] Whether the template has form fields |
| `icon` | `string` | No | The icon of the template, either a decorative icon type or an emoji string. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `inheritedFrom` | `Record<string, any>` | No | The parent team template this template was inherited from. |
| `lastAppliedAt` | `any` | No | The date when the template was last applied to create or update an entity. |
| `lastUpdatedBy` | `Record<string, any>` | No | The user who last updated the template. |
| `name` | `string` | Yes | The name of the template. |
| `organization` | `Record<string, any>` | No | The workspace that owns this template. |
| `pipeline` | `Record<string, any>` | No | The release pipeline this template is bound to. |
| `sortOrder` | `number` | Yes | The sort order of the template within the templates list. |
| `team` | `Record<string, any>` | No | The team that the template is associated with. |
| `templateData` | `any` | Yes | The template data as a JSON-encoded string containing the pre-filled attributes for the entity type (e.g., issue fields, project configuration, or document content). |
| `type` | `string` | Yes | The entity type this template is for, such as 'issue', 'project', or 'document'. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Template().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Template().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Template().load({ id: 'template_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Template().remove({ id: 'template_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Template().update({
  id: 'template_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TemplateEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TimeScheduleEntity

```ts
const time_schedule = client.TimeSchedule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `externalId` | `string` | No | The identifier of the external schedule. |
| `externalUrl` | `string` | No | The URL to the external schedule. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `integration` | `Record<string, any>` | No | The identifier of the Linear integration populating the schedule. |
| `name` | `string` | Yes | The name of the schedule. |
| `organization` | `Record<string, any>` | No | The workspace of the schedule. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `refresh_integration_schedule` | `timeScheduleRefreshIntegrationSchedule` | `client.TimeSchedule().update({ $action: 'refresh_integration_schedule', ... })` |

An action returns that action's OWN response, which is not necessarily a
TimeSchedule record — check the API definition for its shape.

```ts
const result = await client.TimeSchedule().update({
  $action: 'refresh_integration_schedule',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TimeSchedule().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  name: 'example_name',
  updatedAt: 'example_updatedAt',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TimeSchedule().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TimeSchedule().load({ id: 'time_schedule_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.TimeSchedule().remove({ id: 'time_schedule_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TimeSchedule().update({
  id: 'time_schedule_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TimeScheduleEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TriageResponsibilityEntity

```ts
const triage_responsibility = client.TriageResponsibility()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes | The action to take when an issue is added to triage. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `currentUser` | `Record<string, any>` | No | The user currently responsible for triage. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `team` | `Record<string, any>` | No | The team to which the triage responsibility belongs to. |
| `timeSchedule` | `Record<string, any>` | No | The time schedule used for scheduling. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TriageResponsibility().create({
  action: 'example_action',
  createdAt: 'example_createdAt',
  id: 'example_id',
  updatedAt: 'example_updatedAt',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TriageResponsibility().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TriageResponsibility().load({ id: 'triage_responsibility_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.TriageResponsibility().remove({ id: 'triage_responsibility_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TriageResponsibility().update({
  id: 'triage_responsibility_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TriageResponsibilityEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UploadFileEntity

```ts
const upload_file = client.UploadFile()
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `file_upload` | `fileUpload` | `client.UploadFile().create({ $action: 'file_upload', ... })` |
| `import_file_upload` | `importFileUpload` | `client.UploadFile().create({ $action: 'import_file_upload', ... })` |

An action returns that action's OWN response, which is not necessarily a
UploadFile record — check the API definition for its shape.

```ts
const result = await client.UploadFile().create({
  $action: 'file_upload',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.UploadFile().create({
  content_type: 'example_content_type',
  filename: 'example_filename',
  size: 1,
  assetUrl: 'example_assetUrl',
  contentType: 'example_contentType',
  uploadUrl: 'example_uploadUrl',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UploadFileEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UsageAlertEntity

```ts
const usage_alert = client.UsageAlert()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.UsageAlert().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.UsageAlert().load({ id: 'usage_alert_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UsageAlertEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserEntity

```ts
const user = client.User()
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
| `identityProvider` | `Record<string, any>` | No | [INTERNAL] Identity provider the user is managed by. |
| `initials` | `string` | Yes | The initials of the user. |
| `isAssignable` | `boolean` | Yes | Whether the user can be assigned to issues. |
| `isMe` | `boolean` | Yes | Whether the user is the currently authenticated user. |
| `isMentionable` | `boolean` | Yes | Whether the user is mentionable. |
| `lastSeen` | `any` | No | The last time the user was seen online. |
| `name` | `string` | Yes | The user's full name. |
| `organization` | `Record<string, any>` | No | The workspace that the user belongs to. |
| `owner` | `boolean` | Yes | Whether the user is a workspace owner, which is the highest permission level. |
| `statusEmoji` | `string` | No | The emoji representing the user's current status. |
| `statusLabel` | `string` | No | The text label of the user's current status. |
| `statusUntilAt` | `any` | No | The date and time at which the user's current status should be automatically cleared. |
| `supportsAgentSessions` | `boolean` | Yes | Whether this agent user supports agent sessions. |
| `timezone` | `string` | No | The local timezone of the user. |
| `title` | `string` | No | The user's job title. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Yes | User's profile URL. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `discord_connect` | `userDiscordConnect` | `client.User().create({ $action: 'discord_connect', ... })` |
| `external_user_disconnect` | `userExternalUserDisconnect` | `client.User().create({ $action: 'external_user_disconnect', ... })` |

An action returns that action's OWN response, which is not necessarily a
User record — check the API definition for its shape.

```ts
const result = await client.User().create({
  $action: 'discord_connect',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.User().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.User().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.User().load({ id: 'user_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.User().update({
  id: 'user_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserSettingEntity

```ts
const user_setting = client.UserSetting()
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
| `user` | `Record<string, any>` | No | The user that these settings belong to. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `notification_category_channel_subscription_update` | `notificationCategoryChannelSubscriptionUpdate` | `client.UserSetting().create({ $action: 'notification_category_channel_subscription_update', ... })` |

An action returns that action's OWN response, which is not necessarily a
UserSetting record — check the API definition for its shape.

```ts
const result = await client.UserSetting().create({
  $action: 'notification_category_channel_subscription_update',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.UserSetting().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.UserSetting().load({ id: 'user_setting_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.UserSetting().update({
  id: 'user_setting_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserSettingEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ViewPreferenceEntity

```ts
const view_preference = client.ViewPreference()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ViewPreference().create({
  createdAt: 'example_createdAt',
  id: 'example_id',
  type: 'example_type',
  updatedAt: 'example_updatedAt',
  viewType: 'example_viewType',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ViewPreference().load({ view_type: 'view_type' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ViewPreference().remove({ id: 'id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ViewPreference().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ViewPreferenceEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WebhookEntity

```ts
const webhook = client.Webhook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allPublicTeams` | `boolean` | Yes | Whether the webhook receives events from all public (non-private) teams in the organization, including teams created after the webhook was set up. |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `creator` | `Record<string, any>` | No | The user who created the webhook. |
| `enabled` | `boolean` | Yes | Whether the webhook is enabled. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `label` | `string` | No | A human-readable label for the webhook, used for identification in the UI. |
| `resourceTypes` | `string` | Yes | The resource types this webhook is subscribed to (e.g., 'Issue', 'Comment', 'Project', 'Cycle'). |
| `secret` | `string` | No | A secret token used to sign webhook payloads with HMAC-SHA256, allowing the recipient to verify that the payload originated from Linear and was not tampered with. |
| `team` | `Record<string, any>` | No | The single team that the webhook is scoped to. |
| `teamIds` | `string` | No | [INTERNAL] An array of team IDs that the webhook is subscribed to. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `string` | No | The destination URL where webhook payloads will be sent via HTTP POST. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Webhook().create({
  allPublicTeams: true,
  createdAt: 'example_createdAt',
  enabled: true,
  id: 'example_id',
  resourceTypes: 'example_resourceTypes',
  updatedAt: 'example_updatedAt',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Webhook().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Webhook().load({ id: 'webhook_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Webhook().remove({ id: 'webhook_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Webhook().update({
  id: 'webhook_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WebhookEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WebhookFailureEventEntity

```ts
const webhook_failure_event = client.WebhookFailureEvent()
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
| `webhook` | `Record<string, any>` | No | The webhook that this failure event is associated with. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.WebhookFailureEvent().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WebhookFailureEventEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkflowStateEntity

```ts
const workflow_state = client.WorkflowState()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `any` | No | The time at which the entity was archived. |
| `color` | `string` | Yes | The state's UI color as a HEX string. |
| `createdAt` | `any` | Yes | The time at which the entity was created. |
| `description` | `string` | No | Description of the state. |
| `id` | `string` | Yes | The unique identifier of the entity. |
| `inheritedFrom` | `Record<string, any>` | No | The parent team's workflow state that this state was inherited from. |
| `name` | `string` | Yes | The state's human-readable name (e.g., 'In Progress', 'Done', 'Backlog'). |
| `position` | `number` | Yes | The position of the state in the team's workflow. |
| `team` | `Record<string, any>` | No | The team that this workflow state belongs to. |
| `type` | `string` | Yes | The type of the state. |
| `updatedAt` | `any` | Yes | The last time at which the entity was meaningfully updated. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `archive` | `workflowStateArchive` | `client.WorkflowState().update({ $action: 'archive', ... })` |

An action returns that action's OWN response, which is not necessarily a
WorkflowState record — check the API definition for its shape.

```ts
const result = await client.WorkflowState().update({
  $action: 'archive',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.WorkflowState().create({
  color: 'example_color',
  createdAt: 'example_createdAt',
  id: 'example_id',
  name: 'example_name',
  position: 1,
  type: 'example_type',
  updatedAt: 'example_updatedAt',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.WorkflowState().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.WorkflowState().load({ id: 'workflow_state_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.WorkflowState().update({
  id: 'workflow_state_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkflowStateEntity` instance with the same client and
options.

#### `client()`

Return the parent `LinearSDK` instance.

#### `entopts()`

Return a copy of the entity options.


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

```ts
const client = new LinearSDK({
  feature: {
    debug: { active: true },
    idempotency: { active: true },
    metrics: { active: true },
    paging: { active: true },
    ratelimit: { active: true },
    retry: { active: true },
    test: { active: true },
    timeout: { active: true },
  }
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

