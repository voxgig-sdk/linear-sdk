# Linear C SDK Reference

Complete API reference for the Linear C SDK.


## LinearSDK

### Constructor

```c
#include "core/api.h"

LinearSDK* client = linear_sdk_new(options);
```

Create a new SDK client instance. `options` is a `voxgig_value*` map
(`NULL` for none).

**Parameters (`options` map keys):**

| Key | Value type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL for API requests. |
| `prefix` | `string` | URL prefix appended after base. |
| `suffix` | `string` | URL suffix appended after path. |
| `headers` | `map` | Custom headers for all requests. |
| `feature` | `map` | Feature configuration. |
| `system` | `map` | System overrides. |


### Test Constructor

#### `LinearSDK* test_sdk(voxgig_value* testopts, voxgig_value* sdkopts)`

Create a test client with mock features active. Both arguments may be
`NULL`.

```c
LinearSDK* client = test_sdk(NULL, NULL);
```


### Entity Accessors

#### `Entity* linear_access_key_release(LinearSDK* client, voxgig_value* entopts)`

Create a new `AccessKeyRelease` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_access_key_release_pipeline(LinearSDK* client, voxgig_value* entopts)`

Create a new `AccessKeyReleasePipeline` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_agent_activity(LinearSDK* client, voxgig_value* entopts)`

Create a new `AgentActivity` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_agent_session(LinearSDK* client, voxgig_value* entopts)`

Create a new `AgentSession` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_agent_skill(LinearSDK* client, voxgig_value* entopts)`

Create a new `AgentSkill` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_application(LinearSDK* client, voxgig_value* entopts)`

Create a new `Application` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_attachment(LinearSDK* client, voxgig_value* entopts)`

Create a new `Attachment` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_audit_entry(LinearSDK* client, voxgig_value* entopts)`

Create a new `AuditEntry` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_audit_entry_type(LinearSDK* client, voxgig_value* entopts)`

Create a new `AuditEntryType` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_auth_resolver_response(LinearSDK* client, voxgig_value* entopts)`

Create a new `AuthResolverResponse` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_authentication_session_response(LinearSDK* client, voxgig_value* entopts)`

Create a new `AuthenticationSessionResponse` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_comment(LinearSDK* client, voxgig_value* entopts)`

Create a new `Comment` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_create_or_join_organization_response(LinearSDK* client, voxgig_value* entopts)`

Create a new `CreateOrJoinOrganizationResponse` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_custom_view(LinearSDK* client, voxgig_value* entopts)`

Create a new `CustomView` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_customer(LinearSDK* client, voxgig_value* entopts)`

Create a new `Customer` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_customer_need(LinearSDK* client, voxgig_value* entopts)`

Create a new `CustomerNeed` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_customer_status(LinearSDK* client, voxgig_value* entopts)`

Create a new `CustomerStatus` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_customer_tier(LinearSDK* client, voxgig_value* entopts)`

Create a new `CustomerTier` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_cycle(LinearSDK* client, voxgig_value* entopts)`

Create a new `Cycle` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_diff(LinearSDK* client, voxgig_value* entopts)`

Create a new `Diff` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_document(LinearSDK* client, voxgig_value* entopts)`

Create a new `Document` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_document_search_result(LinearSDK* client, voxgig_value* entopts)`

Create a new `DocumentSearchResult` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_email_intake_address(LinearSDK* client, voxgig_value* entopts)`

Create a new `EmailIntakeAddress` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_email_user_account_auth_challenge_response(LinearSDK* client, voxgig_value* entopts)`

Create a new `EmailUserAccountAuthChallengeResponse` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_emoji(LinearSDK* client, voxgig_value* entopts)`

Create a new `Emoji` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_entity_external_link(LinearSDK* client, voxgig_value* entopts)`

Create a new `EntityExternalLink` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_external_user(LinearSDK* client, voxgig_value* entopts)`

Create a new `ExternalUser` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_favorite(LinearSDK* client, voxgig_value* entopts)`

Create a new `Favorite` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_git_automation_state(LinearSDK* client, voxgig_value* entopts)`

Create a new `GitAutomationState` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_git_automation_target_branch(LinearSDK* client, voxgig_value* entopts)`

Create a new `GitAutomationTargetBranch` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_git_hub_integration_connect_detail(LinearSDK* client, voxgig_value* entopts)`

Create a new `GitHubIntegrationConnectDetail` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_initiative(LinearSDK* client, voxgig_value* entopts)`

Create a new `Initiative` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_initiative_label(LinearSDK* client, voxgig_value* entopts)`

Create a new `InitiativeLabel` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_initiative_lead_team_change_impact(LinearSDK* client, voxgig_value* entopts)`

Create a new `InitiativeLeadTeamChangeImpact` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_initiative_relation(LinearSDK* client, voxgig_value* entopts)`

Create a new `InitiativeRelation` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_initiative_to_project(LinearSDK* client, voxgig_value* entopts)`

Create a new `InitiativeToProject` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_initiative_update(LinearSDK* client, voxgig_value* entopts)`

Create a new `InitiativeUpdate` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_integration(LinearSDK* client, voxgig_value* entopts)`

Create a new `Integration` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_integration_template(LinearSDK* client, voxgig_value* entopts)`

Create a new `IntegrationTemplate` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_integrations_setting(LinearSDK* client, voxgig_value* entopts)`

Create a new `IntegrationsSetting` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_issue(LinearSDK* client, voxgig_value* entopts)`

Create a new `Issue` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_issue_import(LinearSDK* client, voxgig_value* entopts)`

Create a new `IssueImport` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_issue_label(LinearSDK* client, voxgig_value* entopts)`

Create a new `IssueLabel` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_issue_priority_value(LinearSDK* client, voxgig_value* entopts)`

Create a new `IssuePriorityValue` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_issue_relation(LinearSDK* client, voxgig_value* entopts)`

Create a new `IssueRelation` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_issue_search_result(LinearSDK* client, voxgig_value* entopts)`

Create a new `IssueSearchResult` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_issue_to_release(LinearSDK* client, voxgig_value* entopts)`

Create a new `IssueToRelease` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_logout_response(LinearSDK* client, voxgig_value* entopts)`

Create a new `LogoutResponse` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_notification(LinearSDK* client, voxgig_value* entopts)`

Create a new `Notification` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_notification_subscription(LinearSDK* client, voxgig_value* entopts)`

Create a new `NotificationSubscription` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_o_auth_application(LinearSDK* client, voxgig_value* entopts)`

Create a new `OAuthApplication` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_organization(LinearSDK* client, voxgig_value* entopts)`

Create a new `Organization` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_organization_domain(LinearSDK* client, voxgig_value* entopts)`

Create a new `OrganizationDomain` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_organization_invite(LinearSDK* client, voxgig_value* entopts)`

Create a new `OrganizationInvite` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_organization_meta(LinearSDK* client, voxgig_value* entopts)`

Create a new `OrganizationMeta` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_passkey_login_start_response(LinearSDK* client, voxgig_value* entopts)`

Create a new `PasskeyLoginStartResponse` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_project(LinearSDK* client, voxgig_value* entopts)`

Create a new `Project` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_project_label(LinearSDK* client, voxgig_value* entopts)`

Create a new `ProjectLabel` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_project_milestone(LinearSDK* client, voxgig_value* entopts)`

Create a new `ProjectMilestone` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_project_milestone_move_project_team(LinearSDK* client, voxgig_value* entopts)`

Create a new `ProjectMilestoneMoveProjectTeam` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_project_relation(LinearSDK* client, voxgig_value* entopts)`

Create a new `ProjectRelation` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_project_search_result(LinearSDK* client, voxgig_value* entopts)`

Create a new `ProjectSearchResult` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_project_status(LinearSDK* client, voxgig_value* entopts)`

Create a new `ProjectStatus` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_project_update(LinearSDK* client, voxgig_value* entopts)`

Create a new `ProjectUpdate` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_push_subscription(LinearSDK* client, voxgig_value* entopts)`

Create a new `PushSubscription` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_reaction(LinearSDK* client, voxgig_value* entopts)`

Create a new `Reaction` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_release(LinearSDK* client, voxgig_value* entopts)`

Create a new `Release` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_release_note(LinearSDK* client, voxgig_value* entopts)`

Create a new `ReleaseNote` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_release_pipeline(LinearSDK* client, voxgig_value* entopts)`

Create a new `ReleasePipeline` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_release_stage(LinearSDK* client, voxgig_value* entopts)`

Create a new `ReleaseStage` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_roadmap(LinearSDK* client, voxgig_value* entopts)`

Create a new `Roadmap` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_roadmap_to_project(LinearSDK* client, voxgig_value* entopts)`

Create a new `RoadmapToProject` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_sla_configuration(LinearSDK* client, voxgig_value* entopts)`

Create a new `SlaConfiguration` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_sso_url_from_email_response(LinearSDK* client, voxgig_value* entopts)`

Create a new `SsoUrlFromEmailResponse` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_team(LinearSDK* client, voxgig_value* entopts)`

Create a new `Team` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_team_membership(LinearSDK* client, voxgig_value* entopts)`

Create a new `TeamMembership` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_template(LinearSDK* client, voxgig_value* entopts)`

Create a new `Template` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_time_schedule(LinearSDK* client, voxgig_value* entopts)`

Create a new `TimeSchedule` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_triage_responsibility(LinearSDK* client, voxgig_value* entopts)`

Create a new `TriageResponsibility` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_upload_file(LinearSDK* client, voxgig_value* entopts)`

Create a new `UploadFile` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_usage_alert(LinearSDK* client, voxgig_value* entopts)`

Create a new `UsageAlert` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_user(LinearSDK* client, voxgig_value* entopts)`

Create a new `User` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_user_setting(LinearSDK* client, voxgig_value* entopts)`

Create a new `UserSetting` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_view_preference(LinearSDK* client, voxgig_value* entopts)`

Create a new `ViewPreference` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_webhook(LinearSDK* client, voxgig_value* entopts)`

Create a new `Webhook` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_webhook_failure_event(LinearSDK* client, voxgig_value* entopts)`

Create a new `WebhookFailureEvent` entity instance. Pass `NULL` for no initial
options.

#### `Entity* linear_workflow_state(LinearSDK* client, voxgig_value* entopts)`

Create a new `WorkflowState` entity instance. Pass `NULL` for no initial
options.

#### `voxgig_value* sdk_direct(LinearSDK* client, voxgig_value* fetchargs, PNError** err)`

Make a direct HTTP request to any API endpoint. Returns a result map with
`ok`, `status`, `headers`, and `data` (or `err` on failure). This escape
hatch never sets `*err` for a non-2xx response — branch on
`getp(result, "ok")`.

**Parameters (`fetchargs` map keys):**

| Key | Value type | Description |
| --- | --- | --- |
| `path` | `string` | URL path with optional `{param}` placeholders. |
| `method` | `string` | HTTP method (default: `"GET"`). |
| `params` | `map` | Path parameter values. |
| `query` | `map` | Query string parameters. |
| `headers` | `map` | Request headers (merged with defaults). |
| `body` | `any` | Request body (maps are JSON-serialized). |

#### `voxgig_value* sdk_prepare(LinearSDK* client, voxgig_value* fetchargs, PNError** err)`

Prepare a fetch definition without sending. Returns the fetchdef and sets
`*err` on failure.


---

## AccessKeyRelease

```c
Entity* access_key_release = linear_access_key_release(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the release was archived. |
| `commitSha` | `char*` | No | The Git commit SHA associated with the release. |
| `completedAt` | `voxgig_value*` | No | The time at which the release was completed. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the release was created. |
| `id` | `char*` | Yes | The unique identifier of the release. |
| `name` | `char*` | Yes | The name of the release. |
| `url` | `char*` | Yes | The URL to the release page in the Linear app. |
| `version` | `char*` | No | The version identifier for this release. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* access_key_release = linear_access_key_release(client, NULL);
voxgig_value* result = access_key_release->vt->create(access_key_release, cmap(4,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "name", v_str("example_name"),  // char*
    "url", v_str("example_url"))  // char*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* access_key_release = linear_access_key_release(client, NULL);
voxgig_value* results = access_key_release->vt->list(access_key_release, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* access_key_release = linear_access_key_release(client, NULL);
voxgig_value* result = access_key_release->vt->load(access_key_release, cmap(1, "id", v_str("access_key_release_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `AccessKeyRelease` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## AccessKeyReleasePipeline

```c
Entity* access_key_release_pipeline = linear_access_key_release_pipeline(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `char*` | Yes | The unique identifier of the release pipeline. |
| `includePathPatterns` | `char*` | Yes | Glob patterns used to filter commits by changed file path. |

### Operations

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* access_key_release_pipeline = linear_access_key_release_pipeline(client, NULL);
voxgig_value* result = access_key_release_pipeline->vt->load(access_key_release_pipeline, cmap(1, "id", v_str("access_key_release_pipeline_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `AccessKeyReleasePipeline` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## AgentActivity

```c
Entity* agent_activity = linear_agent_activity(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentSession` | `voxgig_value* (map)` | No | The agent session this activity belongs to. |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `contextualMetadata` | `voxgig_value*` | No | [Internal] Metadata about user-provided contextual information for this agent activity. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `ephemeral` | `bool` | Yes | Whether the activity is ephemeral, and should disappear after the next agent activity. |
| `executionSkippedReason` | `char*` | No | [Internal] The reason this activity was persisted without being sent to the agent runtime. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `queued` | `bool` | Yes | [Internal] Whether this activity is queued for later processing. |
| `sentAt` | `voxgig_value*` | No | [Internal] The time at which the prompt actually entered the conversation. |
| `signal` | `char*` | No | An optional modifier that provides additional instructions on how the activity should be interpreted. |
| `signalMetadata` | `voxgig_value*` | No | Metadata about this agent activity's signal. |
| `sourceComment` | `voxgig_value* (map)` | No | The source comment this activity is linked to. |
| `sourceMetadata` | `voxgig_value*` | No | Metadata about the external source that created this agent activity. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `voxgig_value* (map)` | No | The user who created this agent activity. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* agent_activity = linear_agent_activity(client, NULL);
voxgig_value* result = agent_activity->vt->create(agent_activity, cmap(5,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "ephemeral", v_bool(true),  // bool
    "id", v_str("example_id"),  // char*
    "queued", v_bool(true),  // bool
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* agent_activity = linear_agent_activity(client, NULL);
voxgig_value* results = agent_activity->vt->list(agent_activity, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* agent_activity = linear_agent_activity(client, NULL);
voxgig_value* result = agent_activity->vt->load(agent_activity, cmap(1, "id", v_str("agent_activity_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* agent_activity = linear_agent_activity(client, NULL);
voxgig_value* result = agent_activity->vt->update(agent_activity, cmap(1, "id", v_str("agent_activity_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `AgentActivity` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## AgentSession

```c
Entity* agent_session = linear_agent_session(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `appUser` | `voxgig_value* (map)` | No | The agent user that is associated with this agent session. |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `codingHarnessModelLabel` | `char*` | No | [Internal] Compact display label for the coding harness model used by this session, derived from the latest associated sandbox. |
| `comment` | `voxgig_value* (map)` | No | The comment this agent session is associated with. |
| `context` | `voxgig_value*` | Yes | The entity contexts this session is related to, such as issues or projects referenced in direct chat sessions. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | No | The human user responsible for the agent session. |
| `dismissedAt` | `voxgig_value*` | No | The time a user dismissed this agent session. |
| `dismissedBy` | `voxgig_value* (map)` | No | The user who dismissed the agent session. |
| `endedAt` | `voxgig_value*` | No | The time the agent session completed. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `issue` | `voxgig_value* (map)` | No | The issue this agent session is associated with. |
| `modelSelection` | `voxgig_value*` | No | [Internal] How Adaptive selected the model route used by this coding session. |
| `plan` | `voxgig_value*` | No | A dynamically updated plan describing the agent's execution strategy, including steps to be taken and their current status. |
| `pullRequest` | `voxgig_value* (map)` | No | The pull request this agent session is anchored to, when started from a pull request. |
| `slugId` | `char*` | Yes | The agent session's unique URL slug. |
| `sourceComment` | `voxgig_value* (map)` | No | The comment that this agent session was spawned from, if from a different thread. |
| `sourceMetadata` | `voxgig_value*` | No | Metadata about the external source that created this agent session. |
| `startedAt` | `voxgig_value*` | No | The time the agent session transitioned to active status and began work. |
| `status` | `char*` | Yes | The current status of the agent session, such as pending, active, awaiting input, complete, error, or stale. |
| `summary` | `char*` | No | The session title, generated automatically or set by the owning OAuth application. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | No | The URL to the agent session page in the Linear app. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* agent_session = linear_agent_session(client, NULL);
voxgig_value* result = agent_session->vt->create(agent_session, cmap(6,
    "context", v_str("example_context"),  // voxgig_value*
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "slugId", v_str("example_slugId"),  // char*
    "status", v_str("example_status"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* agent_session = linear_agent_session(client, NULL);
voxgig_value* results = agent_session->vt->list(agent_session, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* agent_session = linear_agent_session(client, NULL);
voxgig_value* result = agent_session->vt->load(agent_session, cmap(1, "id", v_str("agent_session_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* agent_session = linear_agent_session(client, NULL);
voxgig_value* result = agent_session->vt->update(agent_session, cmap(1, "id", v_str("agent_session_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `AgentSession` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## AgentSkill

```c
Entity* agent_skill = linear_agent_skill(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `body` | `char*` | Yes | The skill instructions in markdown format. |
| `color` | `char*` | No | The skill's color. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | No | The user who created the skill. |
| `description` | `char*` | No | The skill's description. |
| `icon` | `char*` | No | The icon of the skill. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `inheritedFrom` | `voxgig_value* (map)` | No | The parent-team skill this skill was inherited from. |
| `lastUpdatedBy` | `voxgig_value* (map)` | No | The user who last updated the skill. |
| `lastUsedAt` | `voxgig_value*` | No | The time the skill was last used by anyone in the workspace. |
| `owner` | `voxgig_value* (map)` | No | The user who owns the skill. |
| `recentUsageCount` | `double` | Yes | The number of times the skill was used by anyone in the workspace in the last 30 days. |
| `shared` | `bool` | Yes | Whether the skill is shared with everyone in the workspace. |
| `slugId` | `char*` | Yes | The skill's unique URL slug. |
| `teamId` | `char*` | No | The identifier of the team this skill is shared with. |
| `title` | `char*` | Yes | The skill's title. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* agent_skill = linear_agent_skill(client, NULL);
voxgig_value* result = agent_skill->vt->create(agent_skill, cmap(8,
    "body", v_str("example_body"),  // char*
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "recentUsageCount", v_num(1),  // double
    "shared", v_bool(true),  // bool
    "slugId", v_str("example_slugId"),  // char*
    "title", v_str("example_title"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* agent_skill = linear_agent_skill(client, NULL);
voxgig_value* results = agent_skill->vt->list(agent_skill, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* agent_skill = linear_agent_skill(client, NULL);
voxgig_value* result = agent_skill->vt->load(agent_skill, cmap(1, "id", v_str("agent_skill_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* agent_skill = linear_agent_skill(client, NULL);
voxgig_value* result = agent_skill->vt->remove(agent_skill, cmap(1, "id", v_str("agent_skill_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* agent_skill = linear_agent_skill(client, NULL);
voxgig_value* result = agent_skill->vt->update(agent_skill, cmap(1, "id", v_str("agent_skill_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `AgentSkill` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## Application

```c
Entity* application = linear_application(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `clientId` | `char*` | Yes | OAuth application's client ID. |
| `description` | `char*` | No | Information about the application. |
| `developer` | `char*` | Yes | Name of the developer. |
| `developerUrl` | `char*` | Yes | URL of the developer's website, homepage, or documentation. |
| `id` | `char*` | Yes | OAuth application's ID. |
| `imageUrl` | `char*` | No | Image of the application. |
| `name` | `char*` | Yes | Application name. |

### Operations

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* application = linear_application(client, NULL);
voxgig_value* result = application->vt->load(application, cmap(1, "client_id", v_str("client_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `Application` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## Attachment

```c
Entity* attachment = linear_attachment(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `bodyData` | `char*` | No | The body data of the attachment, if any. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | No | The creator of the attachment. |
| `externalUserCreator` | `voxgig_value* (map)` | No | The non-Linear user who created the attachment. |
| `groupBySource` | `bool` | Yes | Whether attachments from the same source application should be visually grouped together in the Linear issue detail view. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `issue` | `voxgig_value* (map)` | No | The issue this attachment belongs to. |
| `metadata` | `voxgig_value*` | Yes | Integration-specific metadata for this attachment. |
| `originalIssue` | `voxgig_value* (map)` | No | The issue this attachment was originally created on. |
| `source` | `voxgig_value*` | No | Information about the source which created the attachment. |
| `sourceType` | `char*` | No | The source type of the attachment, derived from the source metadata. |
| `subtitle` | `char*` | No | Content for the subtitle line in the Linear attachment widget. |
| `title` | `char*` | Yes | Content for the title line in the Linear attachment widget. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | Yes | The URL of the external resource this attachment links to. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* attachment = linear_attachment(client, NULL);
voxgig_value* result = attachment->vt->create(attachment, cmap(7,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "groupBySource", v_bool(true),  // bool
    "id", v_str("example_id"),  // char*
    "metadata", v_str("example_metadata"),  // voxgig_value*
    "title", v_str("example_title"),  // char*
    "updatedAt", v_str("example_updatedAt"),  // voxgig_value*
    "url", v_str("example_url"))  // char*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* attachment = linear_attachment(client, NULL);
voxgig_value* results = attachment->vt->list(attachment, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* attachment = linear_attachment(client, NULL);
voxgig_value* result = attachment->vt->load(attachment, cmap(1, "id", v_str("attachment_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* attachment = linear_attachment(client, NULL);
voxgig_value* result = attachment->vt->remove(attachment, cmap(1, "id", v_str("attachment_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* attachment = linear_attachment(client, NULL);
voxgig_value* result = attachment->vt->update(attachment, cmap(1, "id", v_str("attachment_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `Attachment` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## AuditEntry

```c
Entity* audit_entry = linear_audit_entry(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `voxgig_value* (map)` | No | The user that caused the audit entry to be created. |
| `actorId` | `char*` | No | The ID of the user that caused the audit entry to be created. |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `countryCode` | `char*` | No | The ISO 3166-1 alpha-2 country code derived from the request IP address. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `ip` | `char*` | No | The IP address of the actor at the time the audited action was performed. |
| `metadata` | `voxgig_value*` | No | Additional metadata related to the audit entry. |
| `organization` | `voxgig_value* (map)` | No | The workspace the audit log belongs to. |
| `requestInformation` | `voxgig_value*` | No | Additional information related to the request which performed the action. |
| `type` | `char*` | Yes | The type of audited action (e.g., user authentication, permission change, data export, setting modification). |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* audit_entry = linear_audit_entry(client, NULL);
voxgig_value* results = audit_entry->vt->list(audit_entry, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `AuditEntry` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## AuditEntryType

```c
Entity* audit_entry_type = linear_audit_entry_type(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `char*` | Yes | Description of the audit entry type. |
| `type` | `char*` | Yes | The audit entry type. |

### Operations

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* audit_entry_type = linear_audit_entry_type(client, NULL);
voxgig_value* results = audit_entry_type->vt->list(audit_entry_type, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `AuditEntryType` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## AuthResolverResponse

```c
Entity* auth_resolver_response = linear_auth_resolver_response(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowDomainAccess` | `bool` | No | Should the signup flow allow access for the domain. |
| `email` | `char*` | Yes | Email for the authenticated account. |
| `id` | `char*` | Yes | User account ID. |
| `lastUsedOrganizationId` | `char*` | No | ID of the organization last accessed by the user. |
| `service` | `char*` | No | The authentication service used for the current session (e.g., google, email, saml). |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* auth_resolver_response = linear_auth_resolver_response(client, NULL);
voxgig_value* result = auth_resolver_response->vt->create(auth_resolver_response, cmap(2,
    "email", v_str("example_email"),  // char*
    "id", v_str("example_id"))  // char*
, NULL, &err);
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* auth_resolver_response = linear_auth_resolver_response(client, NULL);
voxgig_value* result = auth_resolver_response->vt->load(auth_resolver_response, cmap(1, "id", v_str("auth_resolver_response_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* auth_resolver_response = linear_auth_resolver_response(client, NULL);
voxgig_value* result = auth_resolver_response->vt->update(auth_resolver_response, cmap(3, "id", v_str("auth_resolver_response_id"), "auth_id", v_str("auth_id"), "response", v_str("response")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `AuthResolverResponse` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## AuthenticationSessionResponse

```c
Entity* authentication_session_response = linear_authentication_session_response(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `browserType` | `char*` | No | Used web browser. |
| `client` | `char*` | No | Client used for the session |
| `countryCodes` | `char*` | Yes | Country codes of all seen locations. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `detailedName` | `char*` | Yes | Detailed name of the session including version information, derived from the user agent. |
| `id` | `char*` | Yes |  |
| `ip` | `char*` | No | IP address. |
| `isCurrentSession` | `bool` | Yes | Whether this session is the one used to make the current API request. |
| `lastActiveAt` | `voxgig_value*` | No | When was the session last seen |
| `location` | `char*` | No | Human readable location |
| `locationCity` | `char*` | No | Location city name. |
| `locationCountry` | `char*` | No | Location country name. |
| `locationCountryCode` | `char*` | No | Location country code. |
| `locationRegionCode` | `char*` | No | Location region code. |
| `name` | `char*` | Yes | Name of the session, derived from the client and operating system |
| `operatingSystem` | `char*` | No | Operating system used for the session |
| `service` | `char*` | No | Service used for logging in. |
| `type` | `char*` | Yes | Type of application used to authenticate. |
| `updatedAt` | `voxgig_value*` | Yes | Date when the session was last updated. |
| `userAgent` | `char*` | No | Session's user-agent. |

### Operations

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* authentication_session_response = linear_authentication_session_response(client, NULL);
voxgig_value* results = authentication_session_response->vt->list(authentication_session_response, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `AuthenticationSessionResponse` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## Comment

```c
Entity* comment = linear_comment(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentSession` | `voxgig_value* (map)` | No | Agent session associated with this comment. |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `body` | `char*` | Yes | The comment content in markdown format. |
| `bodyData` | `char*` | Yes | [Internal] The comment content as a ProseMirror document. |
| `botActor` | `voxgig_value* (map)` | No | The bot that created the comment. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `documentContent` | `voxgig_value* (map)` | No | The document content that the comment is associated with. |
| `documentContentId` | `char*` | No | The ID of the document content that the comment is associated with. |
| `editedAt` | `voxgig_value*` | No | The time the comment was last edited by its author. |
| `externalThread` | `voxgig_value* (map)` | No | The external thread that the comment is synced with. |
| `externalUser` | `voxgig_value* (map)` | No | The external user who wrote the comment, when the comment was created through an integration such as Slack or Intercom. |
| `hideInLinear` | `bool` | Yes | [Internal] Whether the comment should be hidden from Linear clients. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `initiative` | `voxgig_value* (map)` | No | The initiative that the comment is associated with. |
| `initiativeId` | `char*` | No | The ID of the initiative that the comment is associated with. |
| `initiativeUpdate` | `voxgig_value* (map)` | No | The initiative update that the comment is associated with. |
| `initiativeUpdateId` | `char*` | No | The ID of the initiative update that the comment is associated with. |
| `isArtificialAgentSessionRoot` | `bool` | Yes | [Internal] Whether the comment is an artificial placeholder for an agent session thread created without a comment mention. |
| `issue` | `voxgig_value* (map)` | No | The issue that the comment is associated with. |
| `issueId` | `char*` | No | The ID of the issue that the comment is associated with. |
| `onBehalfOf` | `voxgig_value* (map)` | No | [Internal] The user on whose behalf the comment was created, e.g. |
| `parent` | `voxgig_value* (map)` | No | The parent comment under which the current comment is nested. |
| `parentId` | `char*` | No | The ID of the parent comment under which the current comment is nested. |
| `post` | `voxgig_value* (map)` | No | The post that the comment is associated with. |
| `project` | `voxgig_value* (map)` | No | The project that the comment is associated with. |
| `projectId` | `char*` | No | The ID of the project that the comment is associated with. |
| `projectUpdate` | `voxgig_value* (map)` | No | The project update that the comment is associated with. |
| `projectUpdateId` | `char*` | No | The ID of the project update that the comment is associated with. |
| `quotedText` | `char*` | No | The text that this comment references, used for inline comments on documents or issue descriptions. |
| `reactionData` | `voxgig_value*` | Yes | Emoji reaction summary for this comment, grouped by emoji type. |
| `resolvedAt` | `voxgig_value*` | No | The time when the comment thread was resolved. |
| `resolvingComment` | `voxgig_value* (map)` | No | The child comment that resolved this thread. |
| `resolvingCommentId` | `char*` | No | The ID of the child comment that resolved this thread. |
| `resolvingUser` | `voxgig_value* (map)` | No | The user that resolved the comment thread. |
| `threadSummary` | `voxgig_value*` | No | [Internal] An AI-generated summary of the comment thread. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | Yes | Comment's URL. |
| `user` | `voxgig_value* (map)` | No | The user who wrote the comment. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* comment = linear_comment(client, NULL);
voxgig_value* result = comment->vt->create(comment, cmap(9,
    "body", v_str("example_body"),  // char*
    "bodyData", v_str("example_bodyData"),  // char*
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "hideInLinear", v_bool(true),  // bool
    "id", v_str("example_id"),  // char*
    "isArtificialAgentSessionRoot", v_bool(true),  // bool
    "reactionData", v_str("example_reactionData"),  // voxgig_value*
    "updatedAt", v_str("example_updatedAt"),  // voxgig_value*
    "url", v_str("example_url"))  // char*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* comment = linear_comment(client, NULL);
voxgig_value* results = comment->vt->list(comment, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* comment = linear_comment(client, NULL);
voxgig_value* result = comment->vt->load(comment, cmap(1, "id", v_str("comment_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* comment = linear_comment(client, NULL);
voxgig_value* result = comment->vt->remove(comment, cmap(1, "id", v_str("comment_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* comment = linear_comment(client, NULL);
voxgig_value* result = comment->vt->update(comment, cmap(1, "id", v_str("comment_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `Comment` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## CreateOrJoinOrganizationResponse

```c
Entity* create_or_join_organization_response = linear_create_or_join_organization_response(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `organization` | `voxgig_value* (map)` | No | The workspace that was created or joined. |
| `user` | `voxgig_value* (map)` | No | The user who created or joined the workspace. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* create_or_join_organization_response = linear_create_or_join_organization_response(client, NULL);
voxgig_value* result = create_or_join_organization_response->vt->create(create_or_join_organization_response, NULL, NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* create_or_join_organization_response = linear_create_or_join_organization_response(client, NULL);
voxgig_value* result = create_or_join_organization_response->vt->update(create_or_join_organization_response, cmap(1, "organization_id", v_str("organization_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `CreateOrJoinOrganizationResponse` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## CustomView

```c
Entity* custom_view = linear_custom_view(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `color` | `char*` | No | The hex color code of the custom view icon. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | No | The user who originally created the custom view. |
| `description` | `char*` | No | The description of the custom view. |
| `facet` | `voxgig_value* (map)` | No | [INTERNAL] The facet that links this custom view to its parent entity (project, initiative, team page, etc.). |
| `feedItemFilterData` | `voxgig_value*` | No | The filter applied to feed items in the custom view. |
| `filterData` | `voxgig_value*` | Yes | The structured filter applied to issues in the custom view. |
| `icon` | `char*` | No | The icon of the custom view. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `initiativeFilterData` | `voxgig_value*` | No | The filter applied to initiatives in the custom view. |
| `modelName` | `char*` | Yes | The entity type this view displays. |
| `name` | `char*` | Yes | The name of the custom view, displayed in the sidebar and navigation. |
| `organization` | `voxgig_value* (map)` | No | The workspace of the custom view. |
| `organizationViewPreferences` | `voxgig_value* (map)` | No | The workspace-level default view preferences for this custom view, if any have been set. |
| `owner` | `voxgig_value* (map)` | No | The user who owns the custom view. |
| `projectFilterData` | `voxgig_value*` | No | The filter applied to projects in the custom view. |
| `shared` | `bool` | Yes | Whether the custom view is shared with everyone in the organization. |
| `slugId` | `char*` | Yes | The custom view's unique URL slug, used to construct human-readable URLs. |
| `team` | `voxgig_value* (map)` | No | The team that the custom view is scoped to. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |
| `updatedBy` | `voxgig_value* (map)` | No | The user who last updated the custom view. |
| `userViewPreferences` | `voxgig_value* (map)` | No | The current user's personal view preferences for this custom view, if they have set any. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* custom_view = linear_custom_view(client, NULL);
voxgig_value* result = custom_view->vt->create(custom_view, cmap(8,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "filterData", v_str("example_filterData"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "modelName", v_str("example_modelName"),  // char*
    "name", v_str("example_name"),  // char*
    "shared", v_bool(true),  // bool
    "slugId", v_str("example_slugId"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* custom_view = linear_custom_view(client, NULL);
voxgig_value* results = custom_view->vt->list(custom_view, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* custom_view = linear_custom_view(client, NULL);
voxgig_value* result = custom_view->vt->load(custom_view, cmap(1, "id", v_str("custom_view_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* custom_view = linear_custom_view(client, NULL);
voxgig_value* result = custom_view->vt->remove(custom_view, cmap(1, "id", v_str("custom_view_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* custom_view = linear_custom_view(client, NULL);
voxgig_value* result = custom_view->vt->update(custom_view, cmap(1, "id", v_str("custom_view_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `CustomView` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## Customer

```c
Entity* customer = linear_customer(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approximateNeedCount` | `double` | Yes | The approximate number of distinct requests associated with this customer, deduplicated per issue or project. |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `domains` | `char*` | Yes | The email domains associated with this customer (e.g., 'acme.com'). |
| `externalIds` | `char*` | Yes | Identifiers for this customer in external systems (e.g., CRM IDs from Intercom, Salesforce, or HubSpot). |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `integration` | `voxgig_value* (map)` | No | The integration that manages this customer's data (e.g., Intercom, Salesforce). |
| `logoUrl` | `char*` | No | URL of the customer's logo image. |
| `mainSourceId` | `char*` | No | The primary external source ID when a customer has data from multiple external systems. |
| `name` | `char*` | Yes | The display name of the customer organization. |
| `owner` | `voxgig_value* (map)` | No | The workspace member assigned as the owner of this customer. |
| `revenue` | `int64_t` | No | The annual revenue generated by this customer. |
| `size` | `double` | No | The number of employees or seats at the customer organization. |
| `slackChannelId` | `char*` | No | The ID of the Slack channel linked to this customer for communication. |
| `slugId` | `char*` | Yes | A unique, human-readable URL slug for the customer. |
| `status` | `voxgig_value* (map)` | No | The current lifecycle status of the customer. |
| `tier` | `voxgig_value* (map)` | No | The tier or segment assigned to this customer for prioritization (e.g., Enterprise, Pro, Free). |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | Yes | The URL of the customer's page in the Linear application. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* customer = linear_customer(client, NULL);
voxgig_value* result = customer->vt->create(customer, cmap(9,
    "approximateNeedCount", v_num(1),  // double
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "domains", v_str("example_domains"),  // char*
    "externalIds", v_str("example_externalIds"),  // char*
    "id", v_str("example_id"),  // char*
    "name", v_str("example_name"),  // char*
    "slugId", v_str("example_slugId"),  // char*
    "updatedAt", v_str("example_updatedAt"),  // voxgig_value*
    "url", v_str("example_url"))  // char*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* customer = linear_customer(client, NULL);
voxgig_value* results = customer->vt->list(customer, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* customer = linear_customer(client, NULL);
voxgig_value* result = customer->vt->load(customer, cmap(1, "id", v_str("customer_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* customer = linear_customer(client, NULL);
voxgig_value* result = customer->vt->remove(customer, cmap(1, "id", v_str("customer_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* customer = linear_customer(client, NULL);
voxgig_value* result = customer->vt->update(customer, cmap(1, "id", v_str("customer_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `Customer` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## CustomerNeed

```c
Entity* customer_need = linear_customer_need(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `attachment` | `voxgig_value* (map)` | No | The issue attachment linked to this need. |
| `body` | `char*` | No | The body content of the need in Markdown format. |
| `bodyData` | `char*` | No | [Internal] The body content of the need as a Prosemirror document JSON string. |
| `comment` | `voxgig_value* (map)` | No | An optional comment providing additional context for this need. |
| `content` | `char*` | No | The effective Markdown content shown for this customer need. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | No | The user who manually created this customer need. |
| `customer` | `voxgig_value* (map)` | No | The customer organization this need belongs to. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `issue` | `voxgig_value* (map)` | No | The issue this need is linked to. |
| `originalIssue` | `voxgig_value* (map)` | No | The issue this customer need was originally created on, before being moved to a different issue or project. |
| `priority` | `double` | Yes | Whether the customer need is important or not. |
| `project` | `voxgig_value* (map)` | No | The project this need is linked to. |
| `projectAttachment` | `voxgig_value* (map)` | No | The project attachment linked to this need. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | No | The URL of the source attachment linked to this need, if any. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* customer_need = linear_customer_need(client, NULL);
voxgig_value* result = customer_need->vt->create(customer_need, cmap(4,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "priority", v_num(1),  // double
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* customer_need = linear_customer_need(client, NULL);
voxgig_value* results = customer_need->vt->list(customer_need, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* customer_need = linear_customer_need(client, NULL);
voxgig_value* result = customer_need->vt->load(customer_need, cmap(1, "id", v_str("customer_need_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* customer_need = linear_customer_need(client, NULL);
voxgig_value* result = customer_need->vt->remove(customer_need, cmap(1, "id", v_str("customer_need_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* customer_need = linear_customer_need(client, NULL);
voxgig_value* result = customer_need->vt->update(customer_need, cmap(1, "id", v_str("customer_need_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `CustomerNeed` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## CustomerStatus

```c
Entity* customer_status = linear_customer_status(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `color` | `char*` | Yes | The color of the status indicator in the UI, as a HEX string (e.g., '#ff0000'). |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `description` | `char*` | No | An optional description explaining what this status represents in the customer lifecycle. |
| `displayName` | `char*` | Yes | The user-facing display name of the status shown in the UI. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `name` | `char*` | Yes | The internal name of the status. |
| `position` | `double` | Yes | The sort position of the status in the workspace's customer lifecycle flow. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* customer_status = linear_customer_status(client, NULL);
voxgig_value* result = customer_status->vt->create(customer_status, cmap(7,
    "color", v_str("example_color"),  // char*
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "displayName", v_str("example_displayName"),  // char*
    "id", v_str("example_id"),  // char*
    "name", v_str("example_name"),  // char*
    "position", v_num(1),  // double
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* customer_status = linear_customer_status(client, NULL);
voxgig_value* results = customer_status->vt->list(customer_status, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* customer_status = linear_customer_status(client, NULL);
voxgig_value* result = customer_status->vt->load(customer_status, cmap(1, "id", v_str("customer_status_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* customer_status = linear_customer_status(client, NULL);
voxgig_value* result = customer_status->vt->remove(customer_status, cmap(1, "id", v_str("customer_status_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* customer_status = linear_customer_status(client, NULL);
voxgig_value* result = customer_status->vt->update(customer_status, cmap(1, "id", v_str("customer_status_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `CustomerStatus` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## CustomerTier

```c
Entity* customer_tier = linear_customer_tier(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `color` | `char*` | Yes | The color of the tier indicator in the UI, as a HEX string (e.g., '#ff0000'). |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `description` | `char*` | No | An optional description explaining what this tier represents and its intended use for customer segmentation. |
| `displayName` | `char*` | Yes | The user-facing display name of the tier shown in the UI. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `name` | `char*` | Yes | The internal name of the tier. |
| `position` | `double` | Yes | The sort position of the tier in the workspace's customer tier ordering. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* customer_tier = linear_customer_tier(client, NULL);
voxgig_value* result = customer_tier->vt->create(customer_tier, cmap(7,
    "color", v_str("example_color"),  // char*
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "displayName", v_str("example_displayName"),  // char*
    "id", v_str("example_id"),  // char*
    "name", v_str("example_name"),  // char*
    "position", v_num(1),  // double
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* customer_tier = linear_customer_tier(client, NULL);
voxgig_value* results = customer_tier->vt->list(customer_tier, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* customer_tier = linear_customer_tier(client, NULL);
voxgig_value* result = customer_tier->vt->load(customer_tier, cmap(1, "id", v_str("customer_tier_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* customer_tier = linear_customer_tier(client, NULL);
voxgig_value* result = customer_tier->vt->remove(customer_tier, cmap(1, "id", v_str("customer_tier_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* customer_tier = linear_customer_tier(client, NULL);
voxgig_value* result = customer_tier->vt->update(customer_tier, cmap(1, "id", v_str("customer_tier_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `CustomerTier` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## Cycle

```c
Entity* cycle = linear_cycle(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `autoArchivedAt` | `voxgig_value*` | No | The time at which the cycle was automatically archived by the auto-pruning process. |
| `completedAt` | `voxgig_value*` | No | The completion time of the cycle. |
| `completedIssueCountHistory` | `double` | Yes | The number of completed issues in the cycle after each day. |
| `completedScopeHistory` | `double` | Yes | The number of completed estimation points after each day. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `currentProgress` | `voxgig_value*` | Yes | [Internal] The current progress snapshot of the cycle, broken down by issue status categories. |
| `description` | `char*` | No | The description of the cycle. |
| `endsAt` | `voxgig_value*` | Yes | The end date and time of the cycle. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `inProgressScopeHistory` | `double` | Yes | The number of in-progress estimation points after each day. |
| `inheritedFrom` | `voxgig_value* (map)` | No | The parent cycle this cycle was inherited from. |
| `isActive` | `bool` | Yes | Whether the cycle is currently active. |
| `isFuture` | `bool` | Yes | Whether the cycle has not yet started. |
| `isNext` | `bool` | Yes | Whether this cycle is the next upcoming (not yet started) cycle for the team. |
| `isPast` | `bool` | Yes | Whether the cycle's end date has passed. |
| `isPrevious` | `bool` | Yes | Whether this cycle is the most recently completed cycle for the team. |
| `issueCountHistory` | `double` | Yes | The total number of issues in the cycle after each day. |
| `name` | `char*` | No | The custom name of the cycle. |
| `number` | `double` | Yes | The auto-incrementing number of the cycle, unique within its team. |
| `progress` | `double` | Yes | The overall progress of the cycle as a number between 0 and 1. |
| `progressHistory` | `voxgig_value*` | Yes | [Internal] The detailed progress history of the cycle, including per-status breakdowns over time. |
| `scopeHistory` | `double` | Yes | The total number of estimation points (scope) in the cycle after each day. |
| `startsAt` | `voxgig_value*` | Yes | The start date and time of the cycle. |
| `team` | `voxgig_value* (map)` | No | The team that the cycle belongs to. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* cycle = linear_cycle(client, NULL);
voxgig_value* result = cycle->vt->create(cycle, cmap(19,
    "completedIssueCountHistory", v_num(1),  // double
    "completedScopeHistory", v_num(1),  // double
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "currentProgress", v_str("example_currentProgress"),  // voxgig_value*
    "endsAt", v_str("example_endsAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "inProgressScopeHistory", v_num(1),  // double
    "isActive", v_bool(true),  // bool
    "isFuture", v_bool(true),  // bool
    "isNext", v_bool(true),  // bool
    "isPast", v_bool(true),  // bool
    "isPrevious", v_bool(true),  // bool
    "issueCountHistory", v_num(1),  // double
    "number", v_num(1),  // double
    "progress", v_num(1),  // double
    "progressHistory", v_str("example_progressHistory"),  // voxgig_value*
    "scopeHistory", v_num(1),  // double
    "startsAt", v_str("example_startsAt"),  // voxgig_value*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* cycle = linear_cycle(client, NULL);
voxgig_value* results = cycle->vt->list(cycle, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* cycle = linear_cycle(client, NULL);
voxgig_value* result = cycle->vt->load(cycle, cmap(1, "id", v_str("cycle_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* cycle = linear_cycle(client, NULL);
voxgig_value* result = cycle->vt->update(cycle, cmap(1, "id", v_str("cycle_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `Cycle` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## Diff

```c
Entity* diff = linear_diff(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additions` | `double` | Yes | [Internal] The total number of added lines across the diff. |
| `agentSession` | `voxgig_value* (map)` | No | The agent session the diff belongs to. |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `contentHash` | `char*` | Yes | [Internal] The opaque content hash identifying the diff's content in code.storage. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | No | The user responsible for the diff. |
| `deletions` | `double` | Yes | [Internal] The total number of deleted lines across the diff. |
| `fileCount` | `double` | Yes | [Internal] The number of changed files in the diff. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `organization` | `voxgig_value* (map)` | No | The workspace the diff belongs to. |
| `pullRequest` | `voxgig_value* (map)` | No | The pull request the diff was promoted to when opened for review. |
| `slugId` | `char*` | Yes | [Internal] The diff's unique URL slug. |
| `truncated` | `bool` | Yes | [Internal] Whether oversized files were omitted when the diff was computed. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* diff = linear_diff(client, NULL);
voxgig_value* result = diff->vt->load(diff, cmap(1, "id", v_str("diff_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `Diff` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## Document

```c
Entity* document = linear_document(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `color` | `char*` | No | The hex color of the document icon. |
| `content` | `char*` | No | The document's content in markdown format. |
| `contentState` | `char*` | No | [Internal] The document's content as a base64-encoded Yjs state update. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | No | The user who created the document. |
| `cycle` | `voxgig_value* (map)` | No | [Internal] The cycle that the document is associated with. |
| `documentContentId` | `char*` | No | The ID of the document content associated with the document. |
| `hiddenAt` | `voxgig_value*` | No | The time at which the document was hidden from the default view. |
| `icon` | `char*` | No | The icon of the document, either a decorative icon type or an emoji string. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `initiative` | `voxgig_value* (map)` | No | The initiative that the document is associated with. |
| `issue` | `voxgig_value* (map)` | No | The issue that the document is associated with. |
| `lastAppliedTemplate` | `voxgig_value* (map)` | No | The last template that was applied to this document. |
| `owner` | `voxgig_value* (map)` | No | The owner of the document. |
| `project` | `voxgig_value* (map)` | No | The project that the document is associated with. |
| `release` | `voxgig_value* (map)` | No | The release that the document is associated with. |
| `slugId` | `char*` | Yes | The document's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `double` | Yes | The sort order of the document in its parent entity's resources list. |
| `summary` | `char*` | No | [Internal] A one-sentence AI-generated summary of the document content. |
| `team` | `voxgig_value* (map)` | No | [Internal] The team that the document is associated with. |
| `title` | `char*` | Yes | The title of the document. |
| `trashed` | `bool` | No | A flag that indicates whether the document is in the trash bin. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |
| `updatedBy` | `voxgig_value* (map)` | No | The user who last updated the document. |
| `url` | `char*` | Yes | The canonical url for the document. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* document = linear_document(client, NULL);
voxgig_value* result = document->vt->create(document, cmap(7,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "slugId", v_str("example_slugId"),  // char*
    "sortOrder", v_num(1),  // double
    "title", v_str("example_title"),  // char*
    "updatedAt", v_str("example_updatedAt"),  // voxgig_value*
    "url", v_str("example_url"))  // char*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* document = linear_document(client, NULL);
voxgig_value* results = document->vt->list(document, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* document = linear_document(client, NULL);
voxgig_value* result = document->vt->load(document, cmap(1, "id", v_str("document_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* document = linear_document(client, NULL);
voxgig_value* result = document->vt->remove(document, cmap(1, "id", v_str("document_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* document = linear_document(client, NULL);
voxgig_value* result = document->vt->update(document, cmap(1, "id", v_str("document_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `Document` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## DocumentSearchResult

```c
Entity* document_search_result = linear_document_search_result(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `color` | `char*` | No | The hex color of the document icon. |
| `content` | `char*` | No | The document's content in markdown format. |
| `contentState` | `char*` | No | [Internal] The document's content as a base64-encoded Yjs state update. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | No | The user who created the document. |
| `cycle` | `voxgig_value* (map)` | No | [Internal] The cycle that the document is associated with. |
| `documentContentId` | `char*` | No | The ID of the document content associated with the document. |
| `hiddenAt` | `voxgig_value*` | No | The time at which the document was hidden from the default view. |
| `icon` | `char*` | No | The icon of the document, either a decorative icon type or an emoji string. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `initiative` | `voxgig_value* (map)` | No | The initiative that the document is associated with. |
| `issue` | `voxgig_value* (map)` | No | The issue that the document is associated with. |
| `lastAppliedTemplate` | `voxgig_value* (map)` | No | The last template that was applied to this document. |
| `metadata` | `voxgig_value*` | Yes | Metadata related to search result. |
| `owner` | `voxgig_value* (map)` | No | The owner of the document. |
| `project` | `voxgig_value* (map)` | No | The project that the document is associated with. |
| `release` | `voxgig_value* (map)` | No | The release that the document is associated with. |
| `slugId` | `char*` | Yes | The document's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `double` | Yes | The sort order of the document in its parent entity's resources list. |
| `summary` | `char*` | No | [Internal] A one-sentence AI-generated summary of the document content. |
| `team` | `voxgig_value* (map)` | No | [Internal] The team that the document is associated with. |
| `title` | `char*` | Yes | The title of the document. |
| `trashed` | `bool` | No | A flag that indicates whether the document is in the trash bin. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |
| `updatedBy` | `voxgig_value* (map)` | No | The user who last updated the document. |
| `url` | `char*` | Yes | The canonical url for the document. |

### Operations

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* document_search_result = linear_document_search_result(client, NULL);
voxgig_value* results = document_search_result->vt->list(document_search_result, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `DocumentSearchResult` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## EmailIntakeAddress

```c
Entity* email_intake_address = linear_email_intake_address(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `char*` | Yes | The unique local part (before the @) of the intake email address, used to route incoming emails to the correct intake handler. |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | No | The user who created the email intake address. |
| `customerRequestsEnabled` | `bool` | Yes | Whether issues created from emails sent to this address are automatically converted into customer requests, linking the sender as a customer contact. |
| `enabled` | `bool` | Yes | Whether the email address is enabled. |
| `forwardingEmailAddress` | `char*` | No | The email address used to forward emails to the intake address. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `issueCanceledAutoReply` | `char*` | No | The auto-reply message for issue canceled. |
| `issueCanceledAutoReplyEnabled` | `bool` | Yes | Whether the auto-reply for issue canceled is enabled. |
| `issueCompletedAutoReply` | `char*` | No | The auto-reply message for issue completed. |
| `issueCompletedAutoReplyEnabled` | `bool` | Yes | Whether the auto-reply for issue completed is enabled. |
| `issueCreatedAutoReply` | `char*` | No | The auto-reply message for issue created. |
| `issueCreatedAutoReplyEnabled` | `bool` | Yes | Whether the auto-reply for issue created is enabled. |
| `lastUsedAt` | `voxgig_value*` | No | The last time an inbound email was successfully ingested for this address. |
| `organization` | `voxgig_value* (map)` | No | The workspace that the email address is associated with. |
| `reopenOnReply` | `bool` | Yes | Whether to reopen completed or canceled issues when a substantive email reply is received. |
| `repliesEnabled` | `bool` | Yes | Whether email replies are enabled. |
| `senderName` | `char*` | No | The name to be used for outgoing emails. |
| `sesDomainIdentity` | `voxgig_value* (map)` | No | The SES domain identity that the email address is associated with. |
| `team` | `voxgig_value* (map)` | No | The team that the email address is associated with. |
| `template` | `voxgig_value* (map)` | No | The template that the email address is associated with. |
| `type` | `char*` | Yes | The type of the email address. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |
| `useUserNamesInReplies` | `bool` | Yes | Whether the commenter's name is included in the email replies. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* email_intake_address = linear_email_intake_address(client, NULL);
voxgig_value* result = email_intake_address->vt->create(email_intake_address, cmap(13,
    "address", v_str("example_address"),  // char*
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "customerRequestsEnabled", v_bool(true),  // bool
    "enabled", v_bool(true),  // bool
    "id", v_str("example_id"),  // char*
    "issueCanceledAutoReplyEnabled", v_bool(true),  // bool
    "issueCompletedAutoReplyEnabled", v_bool(true),  // bool
    "issueCreatedAutoReplyEnabled", v_bool(true),  // bool
    "reopenOnReply", v_bool(true),  // bool
    "repliesEnabled", v_bool(true),  // bool
    "type", v_str("example_type"),  // char*
    "updatedAt", v_str("example_updatedAt"),  // voxgig_value*
    "useUserNamesInReplies", v_bool(true))  // bool
, NULL, &err);
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* email_intake_address = linear_email_intake_address(client, NULL);
voxgig_value* result = email_intake_address->vt->load(email_intake_address, cmap(1, "id", v_str("email_intake_address_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* email_intake_address = linear_email_intake_address(client, NULL);
voxgig_value* result = email_intake_address->vt->remove(email_intake_address, cmap(1, "id", v_str("email_intake_address_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* email_intake_address = linear_email_intake_address(client, NULL);
voxgig_value* result = email_intake_address->vt->update(email_intake_address, cmap(1, "id", v_str("email_intake_address_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `EmailIntakeAddress` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## EmailUserAccountAuthChallengeResponse

```c
Entity* email_user_account_auth_challenge_response = linear_email_user_account_auth_challenge_response(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authType` | `char*` | Yes | Supported challenge for this user account. |
| `success` | `bool` | Yes | Whether the operation was successful. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* email_user_account_auth_challenge_response = linear_email_user_account_auth_challenge_response(client, NULL);
voxgig_value* result = email_user_account_auth_challenge_response->vt->create(email_user_account_auth_challenge_response, cmap(2,
    "authType", v_str("example_authType"),  // char*
    "success", v_bool(true))  // bool
, NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `EmailUserAccountAuthChallengeResponse` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## Emoji

```c
Entity* emoji = linear_emoji(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | No | The user who created the emoji. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `name` | `char*` | Yes | The unique name of the custom emoji within the workspace. |
| `organization` | `voxgig_value* (map)` | No | The workspace that the emoji belongs to. |
| `source` | `char*` | Yes | The source of the emoji, indicating how it was created (e.g., uploaded by a user or imported). |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | Yes | The URL of the uploaded image for this custom emoji. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* emoji = linear_emoji(client, NULL);
voxgig_value* result = emoji->vt->create(emoji, cmap(6,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "name", v_str("example_name"),  // char*
    "source", v_str("example_source"),  // char*
    "updatedAt", v_str("example_updatedAt"),  // voxgig_value*
    "url", v_str("example_url"))  // char*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* emoji = linear_emoji(client, NULL);
voxgig_value* results = emoji->vt->list(emoji, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* emoji = linear_emoji(client, NULL);
voxgig_value* result = emoji->vt->load(emoji, cmap(1, "id", v_str("emoji_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* emoji = linear_emoji(client, NULL);
voxgig_value* result = emoji->vt->remove(emoji, cmap(1, "id", v_str("emoji_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `Emoji` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## EntityExternalLink

```c
Entity* entity_external_link = linear_entity_external_link(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | No | The user who created the link. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `initiative` | `voxgig_value* (map)` | No | The initiative that the link is associated with. |
| `label` | `char*` | Yes | The link's label. |
| `project` | `voxgig_value* (map)` | No | The project that the link is associated with. |
| `sortOrder` | `double` | Yes | The sort order of this link within the parent entity's resources list. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | Yes | The link's URL. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* entity_external_link = linear_entity_external_link(client, NULL);
voxgig_value* result = entity_external_link->vt->create(entity_external_link, cmap(6,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "label", v_str("example_label"),  // char*
    "sortOrder", v_num(1),  // double
    "updatedAt", v_str("example_updatedAt"),  // voxgig_value*
    "url", v_str("example_url"))  // char*
, NULL, &err);
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* entity_external_link = linear_entity_external_link(client, NULL);
voxgig_value* result = entity_external_link->vt->load(entity_external_link, cmap(1, "id", v_str("entity_external_link_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* entity_external_link = linear_entity_external_link(client, NULL);
voxgig_value* result = entity_external_link->vt->remove(entity_external_link, cmap(1, "id", v_str("entity_external_link_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* entity_external_link = linear_entity_external_link(client, NULL);
voxgig_value* result = entity_external_link->vt->update(entity_external_link, cmap(1, "id", v_str("entity_external_link_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `EntityExternalLink` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## ExternalUser

```c
Entity* external_user = linear_external_user(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `avatarUrl` | `char*` | No | A URL to the external user's avatar image. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `displayName` | `char*` | Yes | The external user's display name. |
| `email` | `char*` | No | The external user's email address. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `lastSeen` | `voxgig_value*` | No | The last time the external user was seen interacting with Linear through their external service. |
| `name` | `char*` | Yes | The external user's full name. |
| `organization` | `voxgig_value* (map)` | No | The workspace that the external user belongs to. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* external_user = linear_external_user(client, NULL);
voxgig_value* results = external_user->vt->list(external_user, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* external_user = linear_external_user(client, NULL);
voxgig_value* result = external_user->vt->load(external_user, cmap(1, "id", v_str("external_user_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `ExternalUser` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## Favorite

```c
Entity* favorite = linear_favorite(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aiConversation` | `voxgig_value* (map)` | No | [INTERNAL] The favorited Agent conversation. |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `color` | `char*` | No | [Internal] Returns the color of the favorite's icon. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `customView` | `voxgig_value* (map)` | No | The favorited custom view. |
| `customer` | `voxgig_value* (map)` | No | The favorited customer. |
| `cycle` | `voxgig_value* (map)` | No | The favorited cycle. |
| `dashboard` | `voxgig_value* (map)` | No | The favorited dashboard. |
| `detail` | `char*` | No | [Internal] Detail text for favorite's `title` (e.g. |
| `document` | `voxgig_value* (map)` | No | The favorited document. |
| `facet` | `voxgig_value* (map)` | No | [INTERNAL] The favorited facet. |
| `folderName` | `char*` | No | The name of the folder. |
| `icon` | `char*` | No | [Internal] Name of the favorite's icon. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `initiative` | `voxgig_value* (map)` | No | The favorited initiative. |
| `initiativeLabel` | `voxgig_value* (map)` | No | [INTERNAL] The favorited initiative label. |
| `initiativeTab` | `char*` | No | The targeted tab of the initiative. |
| `issue` | `voxgig_value* (map)` | No | The favorited issue. |
| `label` | `voxgig_value* (map)` | No | The favorited label. |
| `liveFolderDefinition` | `voxgig_value*` | No | The versioned lazy root and filter represented by this live favorite folder. |
| `liveFolderPreset` | `char*` | No | The predefined live folder represented by this favorite. |
| `owner` | `voxgig_value* (map)` | No | The user who owns this favorite. |
| `parent` | `voxgig_value* (map)` | No | The parent folder of the favorite. |
| `pipelineTab` | `char*` | No | The targeted tab of the release pipeline. |
| `predefinedViewTeam` | `voxgig_value* (map)` | No | The team of the favorited predefined view. |
| `predefinedViewType` | `char*` | No | The type of favorited predefined view (e.g., 'allIssues', 'activeCycle', 'backlog', 'triage'). |
| `project` | `voxgig_value* (map)` | No | The favorited project. |
| `projectLabel` | `voxgig_value* (map)` | No | The favorited project label. |
| `projectTab` | `char*` | No | The targeted tab of the project. |
| `projectTeam` | `voxgig_value* (map)` | No | [DEPRECATED] The favorited team of the project. |
| `pullRequest` | `voxgig_value* (map)` | No | The favorited pull request. |
| `release` | `voxgig_value* (map)` | No | The favorited release. |
| `releaseNote` | `voxgig_value* (map)` | No | The favorited release note. |
| `releasePipeline` | `voxgig_value* (map)` | No | The favorited release pipeline. |
| `sortOrder` | `double` | Yes | The position of this item in the user's favorites list. |
| `team` | `voxgig_value* (map)` | No | The favorited team. |
| `title` | `char*` | Yes | [Internal] Favorite's title text (name of the favorite'd object or folder). |
| `type` | `char*` | Yes | The type of entity this favorite references, such as 'issue', 'project', 'cycle', 'customView', 'document', 'folder', etc. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | No | URL of the favorited entity. |
| `user` | `voxgig_value* (map)` | No | The favorited user. |
| `workflowDefinition` | `voxgig_value* (map)` | No | The favorited loop. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* favorite = linear_favorite(client, NULL);
voxgig_value* result = favorite->vt->create(favorite, cmap(6,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "sortOrder", v_num(1),  // double
    "title", v_str("example_title"),  // char*
    "type", v_str("example_type"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* favorite = linear_favorite(client, NULL);
voxgig_value* results = favorite->vt->list(favorite, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* favorite = linear_favorite(client, NULL);
voxgig_value* result = favorite->vt->load(favorite, cmap(1, "id", v_str("favorite_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* favorite = linear_favorite(client, NULL);
voxgig_value* result = favorite->vt->remove(favorite, cmap(1, "id", v_str("favorite_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* favorite = linear_favorite(client, NULL);
voxgig_value* result = favorite->vt->update(favorite, cmap(1, "id", v_str("favorite_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `Favorite` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## GitAutomationState

```c
Entity* git_automation_state = linear_git_automation_state(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `event` | `char*` | Yes | The Git event that triggers this automation rule (e.g., branch created, PR opened for review, or PR merged). |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `state` | `voxgig_value* (map)` | No | The workflow state that linked issues will be transitioned to when the Git event fires. |
| `targetBranch` | `voxgig_value* (map)` | No | The target branch that this automation rule applies to. |
| `team` | `voxgig_value* (map)` | No | The team that this automation rule belongs to. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* git_automation_state = linear_git_automation_state(client, NULL);
voxgig_value* result = git_automation_state->vt->create(git_automation_state, cmap(4,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "event", v_str("example_event"),  // char*
    "id", v_str("example_id"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* git_automation_state = linear_git_automation_state(client, NULL);
voxgig_value* result = git_automation_state->vt->remove(git_automation_state, cmap(1, "id", v_str("id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* git_automation_state = linear_git_automation_state(client, NULL);
voxgig_value* result = git_automation_state->vt->update(git_automation_state, cmap(1, "id", v_str("id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `GitAutomationState` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## GitAutomationTargetBranch

```c
Entity* git_automation_target_branch = linear_git_automation_target_branch(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `branchPattern` | `char*` | Yes | The branch name or pattern to match against pull request target branches. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `isRegex` | `bool` | Yes | Whether the branch pattern should be interpreted as a regular expression. |
| `team` | `voxgig_value* (map)` | No | The team that this target branch definition belongs to. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* git_automation_target_branch = linear_git_automation_target_branch(client, NULL);
voxgig_value* result = git_automation_target_branch->vt->create(git_automation_target_branch, cmap(5,
    "branchPattern", v_str("example_branchPattern"),  // char*
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "isRegex", v_bool(true),  // bool
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* git_automation_target_branch = linear_git_automation_target_branch(client, NULL);
voxgig_value* result = git_automation_target_branch->vt->remove(git_automation_target_branch, cmap(1, "id", v_str("id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* git_automation_target_branch = linear_git_automation_target_branch(client, NULL);
voxgig_value* result = git_automation_target_branch->vt->update(git_automation_target_branch, cmap(1, "id", v_str("id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `GitAutomationTargetBranch` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## GitHubIntegrationConnectDetail

```c
Entity* git_hub_integration_connect_detail = linear_git_hub_integration_connect_detail(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `lostRepositoryNames` | `char*` | No | Full names ('owner/repo') of repositories whose existing GitHub Issues sync mappings would become inaccessible if the new GitHub App installation replaces the existing one. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* git_hub_integration_connect_detail = linear_git_hub_integration_connect_detail(client, NULL);
voxgig_value* result = git_hub_integration_connect_detail->vt->create(git_hub_integration_connect_detail, NULL, NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* git_hub_integration_connect_detail = linear_git_hub_integration_connect_detail(client, NULL);
voxgig_value* result = git_hub_integration_connect_detail->vt->update(git_hub_integration_connect_detail, NULL, NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `GitHubIntegrationConnectDetail` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## Initiative

```c
Entity* initiative = linear_initiative(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `canceledAt` | `voxgig_value*` | No | [Internal] The time at which the initiative was moved into Canceled status. |
| `color` | `char*` | No | The initiative's color. |
| `completedAt` | `voxgig_value*` | No | The time at which the initiative was moved into Completed status. |
| `content` | `char*` | No | The initiative's content in markdown format. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | No | The user who created the initiative. |
| `description` | `char*` | No | The description of the initiative. |
| `documentContent` | `voxgig_value* (map)` | No | The content of the initiative description. |
| `frequencyResolution` | `char*` | Yes | The resolution of the reminder frequency. |
| `health` | `char*` | No | The overall health of the initiative, derived from the most recent initiative update. |
| `healthUpdatedAt` | `voxgig_value*` | No | The time at which the initiative health was last updated, typically when a new initiative update is posted. |
| `icon` | `char*` | No | The icon of the initiative. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `identifier` | `char*` | No | [Internal] The human-readable identifier of the initiative. |
| `integrationsSettings` | `voxgig_value* (map)` | No | Settings for all integrations associated with that initiative. |
| `labelIds` | `char*` | Yes | The IDs of the initiative labels associated with this initiative. |
| `lastUpdate` | `voxgig_value* (map)` | No | The most recent status update posted for this initiative. |
| `leadTeam` | `voxgig_value* (map)` | No | The team that leads the initiative. |
| `name` | `char*` | Yes | The name of the initiative. |
| `organization` | `voxgig_value* (map)` | No | The workspace of the initiative. |
| `owner` | `voxgig_value* (map)` | No | The user who owns the initiative. |
| `parentInitiative` | `voxgig_value* (map)` | No | Parent initiative associated with the initiative. |
| `previousIdentifiers` | `char*` | Yes | [Internal] Identifiers (default and custom) that this initiative has previously held. |
| `priority` | `int64_t` | Yes | The priority of the initiative. |
| `prioritySortOrder` | `double` | Yes | The sort order of the initiative within the workspace when ordered by priority. |
| `slugId` | `char*` | Yes | The initiative's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `double` | Yes | The sort order of the initiative within the workspace. |
| `startedAt` | `voxgig_value*` | No | The time at which the initiative was moved into Active status. |
| `status` | `char*` | Yes | The lifecycle status of the initiative. |
| `targetDate` | `voxgig_value*` | No | The estimated completion date of the initiative. |
| `targetDateResolution` | `char*` | No | The resolution of the initiative's estimated completion date, indicating whether it refers to a specific day, week, month, quarter, or year. |
| `trashed` | `bool` | No | A flag that indicates whether the initiative is in the trash bin. |
| `updateReminderFrequency` | `double` | No | The frequency at which to prompt for updates. |
| `updateReminderFrequencyInWeeks` | `double` | No | The n-weekly frequency at which to prompt for updates. |
| `updateRemindersDay` | `char*` | No | The day at which to prompt for updates. |
| `updateRemindersHour` | `double` | No | The hour at which to prompt for updates. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | Yes | Initiative URL. |
| `visibility` | `char*` | Yes | The visibility of the initiative, derived from its lead team. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* initiative = linear_initiative(client, NULL);
voxgig_value* result = initiative->vt->create(initiative, cmap(14,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "frequencyResolution", v_str("example_frequencyResolution"),  // char*
    "id", v_str("example_id"),  // char*
    "labelIds", v_str("example_labelIds"),  // char*
    "name", v_str("example_name"),  // char*
    "previousIdentifiers", v_str("example_previousIdentifiers"),  // char*
    "priority", v_num(1),  // int64_t
    "prioritySortOrder", v_num(1),  // double
    "slugId", v_str("example_slugId"),  // char*
    "sortOrder", v_num(1),  // double
    "status", v_str("example_status"),  // char*
    "updatedAt", v_str("example_updatedAt"),  // voxgig_value*
    "url", v_str("example_url"),  // char*
    "visibility", v_str("example_visibility"))  // char*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* initiative = linear_initiative(client, NULL);
voxgig_value* results = initiative->vt->list(initiative, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* initiative = linear_initiative(client, NULL);
voxgig_value* result = initiative->vt->load(initiative, cmap(1, "id", v_str("initiative_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* initiative = linear_initiative(client, NULL);
voxgig_value* result = initiative->vt->remove(initiative, cmap(1, "id", v_str("initiative_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* initiative = linear_initiative(client, NULL);
voxgig_value* result = initiative->vt->update(initiative, cmap(1, "id", v_str("initiative_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `Initiative` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## InitiativeLabel

```c
Entity* initiative_label = linear_initiative_label(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `color` | `char*` | Yes | The label's color as a HEX string (e.g., '#EB5757'). |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | No | The user who created the label. |
| `description` | `char*` | No | The label's description. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `isGroup` | `bool` | Yes | Whether the label is a group. |
| `lastAppliedAt` | `voxgig_value*` | No | The date when the label was last applied to an issue, project, or initiative. |
| `name` | `char*` | Yes | The label's name. |
| `organization` | `voxgig_value* (map)` | No | The workspace that the initiative label belongs to. |
| `parent` | `voxgig_value* (map)` | No | The parent label group. |
| `retiredAt` | `voxgig_value*` | No | [Internal] When the label was retired. |
| `retiredBy` | `voxgig_value* (map)` | No | The user who retired the label. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* initiative_label = linear_initiative_label(client, NULL);
voxgig_value* result = initiative_label->vt->create(initiative_label, cmap(6,
    "color", v_str("example_color"),  // char*
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "isGroup", v_bool(true),  // bool
    "name", v_str("example_name"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* initiative_label = linear_initiative_label(client, NULL);
voxgig_value* results = initiative_label->vt->list(initiative_label, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* initiative_label = linear_initiative_label(client, NULL);
voxgig_value* result = initiative_label->vt->load(initiative_label, cmap(1, "id", v_str("initiative_label_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* initiative_label = linear_initiative_label(client, NULL);
voxgig_value* result = initiative_label->vt->remove(initiative_label, cmap(1, "id", v_str("initiative_label_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* initiative_label = linear_initiative_label(client, NULL);
voxgig_value* result = initiative_label->vt->update(initiative_label, cmap(1, "id", v_str("initiative_label_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `InitiativeLabel` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## InitiativeLeadTeamChangeImpact

```c
Entity* initiative_lead_team_change_impact = linear_initiative_lead_team_change_impact(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `affectedDescendantCount` | `int64_t` | Yes | The number of editable matching sub-initiatives whose lead team would change if the update is applied to descendants. |
| `id` | `char*` | No |  |
| `visibilityMayChange` | `bool` | Yes | Whether the changed initiatives may gain or lose access restrictions because the current or next lead team is not public. |

### Operations

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* initiative_lead_team_change_impact = linear_initiative_lead_team_change_impact(client, NULL);
voxgig_value* result = initiative_lead_team_change_impact->vt->load(initiative_lead_team_change_impact, cmap(1, "id", v_str("initiative_lead_team_change_impact_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `InitiativeLeadTeamChangeImpact` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## InitiativeRelation

```c
Entity* initiative_relation = linear_initiative_relation(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `initiative` | `voxgig_value* (map)` | No | The parent initiative in this hierarchical relation. |
| `relatedInitiative` | `voxgig_value* (map)` | No | The child initiative in this hierarchical relation. |
| `sortOrder` | `double` | Yes | The sort order of the child initiative within its parent initiative. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `voxgig_value* (map)` | No | The user who last created or modified the relation. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* initiative_relation = linear_initiative_relation(client, NULL);
voxgig_value* result = initiative_relation->vt->create(initiative_relation, cmap(4,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "sortOrder", v_num(1),  // double
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* initiative_relation = linear_initiative_relation(client, NULL);
voxgig_value* results = initiative_relation->vt->list(initiative_relation, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* initiative_relation = linear_initiative_relation(client, NULL);
voxgig_value* result = initiative_relation->vt->load(initiative_relation, cmap(1, "id", v_str("initiative_relation_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* initiative_relation = linear_initiative_relation(client, NULL);
voxgig_value* result = initiative_relation->vt->remove(initiative_relation, cmap(1, "id", v_str("initiative_relation_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* initiative_relation = linear_initiative_relation(client, NULL);
voxgig_value* result = initiative_relation->vt->update(initiative_relation, cmap(1, "id", v_str("initiative_relation_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `InitiativeRelation` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## InitiativeToProject

```c
Entity* initiative_to_project = linear_initiative_to_project(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `initiative` | `voxgig_value* (map)` | No | The initiative that the project is associated with. |
| `project` | `voxgig_value* (map)` | No | The project that the initiative is associated with. |
| `sortOrder` | `char*` | Yes | The sort order of the project within its parent initiative. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* initiative_to_project = linear_initiative_to_project(client, NULL);
voxgig_value* result = initiative_to_project->vt->create(initiative_to_project, cmap(4,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "sortOrder", v_str("example_sortOrder"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* initiative_to_project = linear_initiative_to_project(client, NULL);
voxgig_value* results = initiative_to_project->vt->list(initiative_to_project, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* initiative_to_project = linear_initiative_to_project(client, NULL);
voxgig_value* result = initiative_to_project->vt->load(initiative_to_project, cmap(1, "id", v_str("initiative_to_project_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* initiative_to_project = linear_initiative_to_project(client, NULL);
voxgig_value* result = initiative_to_project->vt->remove(initiative_to_project, cmap(1, "id", v_str("initiative_to_project_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* initiative_to_project = linear_initiative_to_project(client, NULL);
voxgig_value* result = initiative_to_project->vt->update(initiative_to_project, cmap(1, "id", v_str("initiative_to_project_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `InitiativeToProject` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## InitiativeUpdate

```c
Entity* initiative_update = linear_initiative_update(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `body` | `char*` | Yes | The update content in markdown format. |
| `bodyData` | `char*` | Yes | [Internal] The content of the update as a Prosemirror document. |
| `commentCount` | `int64_t` | Yes | Number of comments associated with the initiative update. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `diff` | `voxgig_value*` | No | The diff between the current update and the previous one. |
| `diffMarkdown` | `char*` | No | The diff between the current update and the previous one, formatted as markdown. |
| `editedAt` | `voxgig_value*` | No | The time the update was edited. |
| `health` | `char*` | Yes | The health of the initiative at the time this update was posted. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `infoSnapshot` | `voxgig_value*` | No | [Internal] A snapshot of initiative properties at the time the update was posted, including project statuses, sub-initiative health, and target dates. |
| `initiative` | `voxgig_value* (map)` | No | The initiative that this status update was posted to. |
| `isDiffHidden` | `bool` | Yes | Whether the diff between this update and the previous one should be hidden in the UI. |
| `isStale` | `bool` | Yes | Whether the initiative update is stale. |
| `reactionData` | `voxgig_value*` | Yes | Emoji reaction summary, grouped by emoji type. |
| `slugId` | `char*` | Yes | The update's unique URL slug. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | Yes | The URL to the initiative update. |
| `user` | `voxgig_value* (map)` | No | The user who wrote the update. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* initiative_update = linear_initiative_update(client, NULL);
voxgig_value* result = initiative_update->vt->create(initiative_update, cmap(12,
    "body", v_str("example_body"),  // char*
    "bodyData", v_str("example_bodyData"),  // char*
    "commentCount", v_num(1),  // int64_t
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "health", v_str("example_health"),  // char*
    "id", v_str("example_id"),  // char*
    "isDiffHidden", v_bool(true),  // bool
    "isStale", v_bool(true),  // bool
    "reactionData", v_str("example_reactionData"),  // voxgig_value*
    "slugId", v_str("example_slugId"),  // char*
    "updatedAt", v_str("example_updatedAt"),  // voxgig_value*
    "url", v_str("example_url"))  // char*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* initiative_update = linear_initiative_update(client, NULL);
voxgig_value* results = initiative_update->vt->list(initiative_update, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* initiative_update = linear_initiative_update(client, NULL);
voxgig_value* result = initiative_update->vt->load(initiative_update, cmap(1, "id", v_str("initiative_update_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* initiative_update = linear_initiative_update(client, NULL);
voxgig_value* result = initiative_update->vt->update(initiative_update, cmap(1, "id", v_str("initiative_update_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `InitiativeUpdate` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## Integration

```c
Entity* integration = linear_integration(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | No | The user that added the integration. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `organization` | `voxgig_value* (map)` | No | The workspace that the integration is associated with. |
| `service` | `char*` | Yes | The integration's type, identifying which external service this integration connects to (e.g., 'slack', 'github', 'jira', 'figma'). |
| `team` | `voxgig_value* (map)` | No | The team that the integration is associated with. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* integration = linear_integration(client, NULL);
voxgig_value* result = integration->vt->create(integration, cmap(4,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "service", v_str("example_service"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* integration = linear_integration(client, NULL);
voxgig_value* results = integration->vt->list(integration, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* integration = linear_integration(client, NULL);
voxgig_value* result = integration->vt->load(integration, cmap(1, "id", v_str("integration_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* integration = linear_integration(client, NULL);
voxgig_value* result = integration->vt->remove(integration, cmap(1, "id", v_str("integration_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* integration = linear_integration(client, NULL);
voxgig_value* result = integration->vt->update(integration, cmap(1, "id", v_str("integration_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `Integration` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## IntegrationTemplate

```c
Entity* integration_template = linear_integration_template(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `foreignEntityId` | `char*` | No | The identifier of the foreign entity in the external service that this template is scoped to. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `integration` | `voxgig_value* (map)` | No | The integration that the template is associated with. |
| `template` | `voxgig_value* (map)` | No | The template that the integration is associated with. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* integration_template = linear_integration_template(client, NULL);
voxgig_value* result = integration_template->vt->create(integration_template, cmap(3,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* integration_template = linear_integration_template(client, NULL);
voxgig_value* results = integration_template->vt->list(integration_template, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* integration_template = linear_integration_template(client, NULL);
voxgig_value* result = integration_template->vt->load(integration_template, cmap(1, "id", v_str("integration_template_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* integration_template = linear_integration_template(client, NULL);
voxgig_value* result = integration_template->vt->remove(integration_template, cmap(1, "id", v_str("integration_template_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `IntegrationTemplate` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## IntegrationsSetting

```c
Entity* integrations_setting = linear_integrations_setting(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `contextViewType` | `char*` | No | The type of view to which the integration settings context is associated with. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `initiative` | `voxgig_value* (map)` | No | Initiative which those settings apply to. |
| `microsoftTeamsProjectUpdateCreated` | `bool` | No | Whether to send a Microsoft Teams message when a project update is created. |
| `project` | `voxgig_value* (map)` | No | Project which those settings apply to. |
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
| `team` | `voxgig_value* (map)` | No | Team which those settings apply to. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* integrations_setting = linear_integrations_setting(client, NULL);
voxgig_value* result = integrations_setting->vt->create(integrations_setting, cmap(3,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* integrations_setting = linear_integrations_setting(client, NULL);
voxgig_value* result = integrations_setting->vt->load(integrations_setting, cmap(1, "id", v_str("integrations_setting_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* integrations_setting = linear_integrations_setting(client, NULL);
voxgig_value* result = integrations_setting->vt->update(integrations_setting, cmap(1, "id", v_str("integrations_setting_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `IntegrationsSetting` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## Issue

```c
Entity* issue = linear_issue(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activitySummary` | `voxgig_value*` | No | [Internal] The activity summary information for this issue. |
| `addedToCycleAt` | `voxgig_value*` | No | The time at which the issue was added to a cycle. |
| `addedToProjectAt` | `voxgig_value*` | No | The time at which the issue was added to a project. |
| `addedToTeamAt` | `voxgig_value*` | No | The time at which the issue was added to a team. |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `asksExternalUserRequester` | `voxgig_value* (map)` | No | The external user who requested creation of the Asks issue on behalf of the creator. |
| `asksRequester` | `voxgig_value* (map)` | No | The internal user who requested creation of the Asks issue on behalf of the creator. |
| `assignee` | `voxgig_value* (map)` | No | The user to whom the issue is assigned. |
| `autoArchivedAt` | `voxgig_value*` | No | The time at which the issue was automatically archived by the auto pruning process. |
| `autoClosedAt` | `voxgig_value*` | No | The time at which the issue was automatically closed by the auto pruning process. |
| `botActor` | `voxgig_value* (map)` | No | The bot that created the issue, if applicable. |
| `branchName` | `char*` | Yes | Suggested branch name for the issue. |
| `canceledAt` | `voxgig_value*` | No | The time at which the issue was moved into canceled state. |
| `completedAt` | `voxgig_value*` | No | The time at which the issue was moved into completed state. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | No | The user who created the issue. |
| `customerTicketCount` | `int64_t` | Yes | Returns the number of Attachment resources which are created by customer support ticketing systems (e.g. |
| `cycle` | `voxgig_value* (map)` | No | The cycle that the issue is associated with. |
| `delegate` | `voxgig_value* (map)` | No | The agent user that is delegated to work on this issue. |
| `description` | `char*` | No | The issue's description in markdown format. |
| `descriptionState` | `char*` | No | [Internal] The issue's description content as YJS state. |
| `documentContent` | `voxgig_value* (map)` | No | [ALPHA] The document content representing this issue description. |
| `dueDate` | `voxgig_value*` | No | The date at which the issue is due. |
| `estimate` | `double` | No | The estimate of the complexity of the issue. |
| `externalUserCreator` | `voxgig_value* (map)` | No | The external user who created the issue. |
| `favorite` | `voxgig_value* (map)` | No | The users favorite associated with this issue. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `identifier` | `char*` | Yes | Issue's human readable identifier (e.g. |
| `inheritsSharedAccess` | `bool` | Yes | Whether this issue inherits shared access from its parent issue. |
| `integrationSourceType` | `char*` | No | Integration type that created this issue, if applicable. |
| `labelIds` | `char*` | Yes | Identifiers of the labels associated with this issue. |
| `lastAppliedTemplate` | `voxgig_value* (map)` | No | The last template that was applied to this issue. |
| `number` | `double` | Yes | The issue's unique number, scoped to the issue's team. |
| `parent` | `voxgig_value* (map)` | No | The parent of the issue. |
| `previousIdentifiers` | `char*` | Yes | Previous identifiers of the issue if it has been moved between teams. |
| `priority` | `double` | Yes | The priority of the issue. |
| `priorityLabel` | `char*` | Yes | Label for the priority. |
| `prioritySortOrder` | `double` | Yes | The order of the item in relation to other items in the workspace, when ordered by priority. |
| `project` | `voxgig_value* (map)` | No | The project that the issue is associated with. |
| `projectMilestone` | `voxgig_value* (map)` | No | The project milestone that the issue is associated with. |
| `reactionData` | `voxgig_value*` | Yes | Emoji reaction summary for the issue, grouped by emoji type. |
| `recurringIssueTemplate` | `voxgig_value* (map)` | No | The recurring issue template that created this issue. |
| `slaBreachesAt` | `voxgig_value*` | No | The time at which the issue's SLA will breach. |
| `slaHighRiskAt` | `voxgig_value*` | No | The time at which the issue's SLA will enter high risk state. |
| `slaMediumRiskAt` | `voxgig_value*` | No | The time at which the issue's SLA will enter medium risk state. |
| `slaStartedAt` | `voxgig_value*` | No | The time at which the issue's SLA began. |
| `slaType` | `char*` | No | The type of SLA set on the issue. |
| `snoozedBy` | `voxgig_value* (map)` | No | The user who snoozed the issue. |
| `snoozedUntilAt` | `voxgig_value*` | No | The time until an issue will be snoozed in Triage view. |
| `sortOrder` | `double` | Yes | The order of the item in relation to other items in the organization. |
| `sourceComment` | `voxgig_value* (map)` | No | The comment that this issue was created from, when an issue is created from an existing comment. |
| `startedAt` | `voxgig_value*` | No | The time at which the issue was moved into started state. |
| `startedTriageAt` | `voxgig_value*` | No | The time at which the issue entered triage. |
| `state` | `voxgig_value* (map)` | No | The workflow state (issue status) that the issue is currently in. |
| `subIssueSortOrder` | `double` | No | The order of the item in the sub-issue list. |
| `suggestionsGeneratedAt` | `voxgig_value*` | No | [Internal] The time at which the most recent suggestions for this issue were generated. |
| `summary` | `voxgig_value* (map)` | No | [Internal] AI-generated activity summary for this issue. |
| `team` | `voxgig_value* (map)` | No | The team that the issue belongs to. |
| `title` | `char*` | Yes | The issue's title. |
| `trashed` | `bool` | No | A flag that indicates whether the issue is in the trash bin. |
| `triagedAt` | `voxgig_value*` | No | The time at which the issue left triage. |
| `trusted` | `bool` | No | [Internal] Whether this issue has been explicitly marked as trusted. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | Yes | Issue URL. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* issue = linear_issue(client, NULL);
voxgig_value* result = issue->vt->create(issue, cmap(17,
    "branchName", v_str("example_branchName"),  // char*
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "customerTicketCount", v_num(1),  // int64_t
    "id", v_str("example_id"),  // char*
    "identifier", v_str("example_identifier"),  // char*
    "inheritsSharedAccess", v_bool(true),  // bool
    "labelIds", v_str("example_labelIds"),  // char*
    "number", v_num(1),  // double
    "previousIdentifiers", v_str("example_previousIdentifiers"),  // char*
    "priority", v_num(1),  // double
    "priorityLabel", v_str("example_priorityLabel"),  // char*
    "prioritySortOrder", v_num(1),  // double
    "reactionData", v_str("example_reactionData"),  // voxgig_value*
    "sortOrder", v_num(1),  // double
    "title", v_str("example_title"),  // char*
    "updatedAt", v_str("example_updatedAt"),  // voxgig_value*
    "url", v_str("example_url"))  // char*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* issue = linear_issue(client, NULL);
voxgig_value* results = issue->vt->list(issue, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* issue = linear_issue(client, NULL);
voxgig_value* result = issue->vt->load(issue, cmap(1, "id", v_str("issue_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* issue = linear_issue(client, NULL);
voxgig_value* result = issue->vt->remove(issue, cmap(1, "id", v_str("issue_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* issue = linear_issue(client, NULL);
voxgig_value* result = issue->vt->update(issue, cmap(1, "id", v_str("issue_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `Issue` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## IssueImport

```c
Entity* issue_import = linear_issue_import(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `creatorId` | `char*` | No | Identifier of the user who started the import job. |
| `csvFileUrl` | `char*` | No | File URL for the uploaded CSV for the import, if there is one. |
| `displayName` | `char*` | Yes | The display name of the import service. |
| `error` | `char*` | No | User readable error message, if one has occurred during the import. |
| `errorMetadata` | `voxgig_value*` | No | Error code and metadata, if one has occurred during the import. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `mapping` | `voxgig_value*` | No | The data mapping configuration for the import job. |
| `progress` | `double` | No | Current step progress as a percentage (0-100). |
| `service` | `char*` | Yes | The external service from which data is being imported (e.g., jira, asana, github, shortcut, linear). |
| `serviceMetadata` | `voxgig_value*` | No | Metadata related to import service. |
| `status` | `char*` | Yes | The current status of the import job, indicating its position in the import lifecycle (e.g., not started, in progress, complete, error). |
| `teamName` | `char*` | No | The name of the new team to be created for the import, when the import is configured to create a new team rather than importing into an existing one. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* issue_import = linear_issue_import(client, NULL);
voxgig_value* result = issue_import->vt->create(issue_import, cmap(5,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "displayName", v_str("example_displayName"),  // char*
    "service", v_str("example_service"),  // char*
    "status", v_str("example_status"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* issue_import = linear_issue_import(client, NULL);
voxgig_value* result = issue_import->vt->remove(issue_import, cmap(1, "issue_import_id", v_str("issue_import_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* issue_import = linear_issue_import(client, NULL);
voxgig_value* result = issue_import->vt->update(issue_import, cmap(1, "id", v_str("id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `IssueImport` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## IssueLabel

```c
Entity* issue_label = linear_issue_label(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `color` | `char*` | Yes | The label's color as a HEX string (e.g., '#EB5757'). |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | No | The user who created the label. |
| `description` | `char*` | No | The label's description. |
| `groupType` | `char*` | No | The selection mode of this label group. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `inheritedFrom` | `voxgig_value* (map)` | No | The original workspace or parent-team label that this label was inherited from. |
| `isGroup` | `bool` | Yes | Whether the label is a group. |
| `lastAppliedAt` | `voxgig_value*` | No | The date when the label was last applied to an issue, project, or initiative. |
| `name` | `char*` | Yes | The label's name. |
| `parent` | `voxgig_value* (map)` | No | The parent label. |
| `retiredAt` | `voxgig_value*` | No | [Internal] When the label was retired. |
| `retiredBy` | `voxgig_value* (map)` | No | The user who retired the label. |
| `team` | `voxgig_value* (map)` | No | The team that the label is scoped to. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* issue_label = linear_issue_label(client, NULL);
voxgig_value* result = issue_label->vt->create(issue_label, cmap(6,
    "color", v_str("example_color"),  // char*
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "isGroup", v_bool(true),  // bool
    "name", v_str("example_name"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* issue_label = linear_issue_label(client, NULL);
voxgig_value* results = issue_label->vt->list(issue_label, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* issue_label = linear_issue_label(client, NULL);
voxgig_value* result = issue_label->vt->load(issue_label, cmap(1, "id", v_str("issue_label_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* issue_label = linear_issue_label(client, NULL);
voxgig_value* result = issue_label->vt->remove(issue_label, cmap(1, "id", v_str("issue_label_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* issue_label = linear_issue_label(client, NULL);
voxgig_value* result = issue_label->vt->update(issue_label, cmap(1, "id", v_str("issue_label_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `IssueLabel` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## IssuePriorityValue

```c
Entity* issue_priority_value = linear_issue_priority_value(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `char*` | Yes | Priority's label. |
| `priority` | `int64_t` | Yes | Priority's number value. |

### Operations

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* issue_priority_value = linear_issue_priority_value(client, NULL);
voxgig_value* results = issue_priority_value->vt->list(issue_priority_value, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `IssuePriorityValue` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## IssueRelation

```c
Entity* issue_relation = linear_issue_relation(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `issue` | `voxgig_value* (map)` | No | The source issue whose relationship is being described. |
| `relatedIssue` | `voxgig_value* (map)` | No | The target issue that the source issue is related to. |
| `type` | `char*` | Yes | The type of relationship between the source issue and the related issue. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* issue_relation = linear_issue_relation(client, NULL);
voxgig_value* result = issue_relation->vt->create(issue_relation, cmap(4,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "type", v_str("example_type"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* issue_relation = linear_issue_relation(client, NULL);
voxgig_value* results = issue_relation->vt->list(issue_relation, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* issue_relation = linear_issue_relation(client, NULL);
voxgig_value* result = issue_relation->vt->load(issue_relation, cmap(1, "id", v_str("issue_relation_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* issue_relation = linear_issue_relation(client, NULL);
voxgig_value* result = issue_relation->vt->remove(issue_relation, cmap(1, "id", v_str("issue_relation_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* issue_relation = linear_issue_relation(client, NULL);
voxgig_value* result = issue_relation->vt->update(issue_relation, cmap(1, "id", v_str("issue_relation_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `IssueRelation` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## IssueSearchResult

```c
Entity* issue_search_result = linear_issue_search_result(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activitySummary` | `voxgig_value*` | No | [Internal] The activity summary information for this issue. |
| `addedToCycleAt` | `voxgig_value*` | No | The time at which the issue was added to a cycle. |
| `addedToProjectAt` | `voxgig_value*` | No | The time at which the issue was added to a project. |
| `addedToTeamAt` | `voxgig_value*` | No | The time at which the issue was added to a team. |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `asksExternalUserRequester` | `voxgig_value* (map)` | No | The external user who requested creation of the Asks issue on behalf of the creator. |
| `asksRequester` | `voxgig_value* (map)` | No | The internal user who requested creation of the Asks issue on behalf of the creator. |
| `assignee` | `voxgig_value* (map)` | No | The user to whom the issue is assigned. |
| `autoArchivedAt` | `voxgig_value*` | No | The time at which the issue was automatically archived by the auto pruning process. |
| `autoClosedAt` | `voxgig_value*` | No | The time at which the issue was automatically closed by the auto pruning process. |
| `botActor` | `voxgig_value* (map)` | No | The bot that created the issue, if applicable. |
| `branchName` | `char*` | Yes | Suggested branch name for the issue. |
| `canceledAt` | `voxgig_value*` | No | The time at which the issue was moved into canceled state. |
| `completedAt` | `voxgig_value*` | No | The time at which the issue was moved into completed state. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | No | The user who created the issue. |
| `customerTicketCount` | `int64_t` | Yes | Returns the number of Attachment resources which are created by customer support ticketing systems (e.g. |
| `cycle` | `voxgig_value* (map)` | No | The cycle that the issue is associated with. |
| `delegate` | `voxgig_value* (map)` | No | The agent user that is delegated to work on this issue. |
| `description` | `char*` | No | The issue's description in markdown format. |
| `descriptionState` | `char*` | No | [Internal] The issue's description content as YJS state. |
| `documentContent` | `voxgig_value* (map)` | No | [ALPHA] The document content representing this issue description. |
| `dueDate` | `voxgig_value*` | No | The date at which the issue is due. |
| `estimate` | `double` | No | The estimate of the complexity of the issue. |
| `externalUserCreator` | `voxgig_value* (map)` | No | The external user who created the issue. |
| `favorite` | `voxgig_value* (map)` | No | The users favorite associated with this issue. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `identifier` | `char*` | Yes | Issue's human readable identifier (e.g. |
| `inheritsSharedAccess` | `bool` | Yes | Whether this issue inherits shared access from its parent issue. |
| `integrationSourceType` | `char*` | No | Integration type that created this issue, if applicable. |
| `labelIds` | `char*` | Yes | Identifiers of the labels associated with this issue. |
| `lastAppliedTemplate` | `voxgig_value* (map)` | No | The last template that was applied to this issue. |
| `metadata` | `voxgig_value*` | Yes | Metadata related to search result. |
| `number` | `double` | Yes | The issue's unique number, scoped to the issue's team. |
| `parent` | `voxgig_value* (map)` | No | The parent of the issue. |
| `previousIdentifiers` | `char*` | Yes | Previous identifiers of the issue if it has been moved between teams. |
| `priority` | `double` | Yes | The priority of the issue. |
| `priorityLabel` | `char*` | Yes | Label for the priority. |
| `prioritySortOrder` | `double` | Yes | The order of the item in relation to other items in the workspace, when ordered by priority. |
| `project` | `voxgig_value* (map)` | No | The project that the issue is associated with. |
| `projectMilestone` | `voxgig_value* (map)` | No | The project milestone that the issue is associated with. |
| `reactionData` | `voxgig_value*` | Yes | Emoji reaction summary for the issue, grouped by emoji type. |
| `recurringIssueTemplate` | `voxgig_value* (map)` | No | The recurring issue template that created this issue. |
| `slaBreachesAt` | `voxgig_value*` | No | The time at which the issue's SLA will breach. |
| `slaHighRiskAt` | `voxgig_value*` | No | The time at which the issue's SLA will enter high risk state. |
| `slaMediumRiskAt` | `voxgig_value*` | No | The time at which the issue's SLA will enter medium risk state. |
| `slaStartedAt` | `voxgig_value*` | No | The time at which the issue's SLA began. |
| `slaType` | `char*` | No | The type of SLA set on the issue. |
| `snoozedBy` | `voxgig_value* (map)` | No | The user who snoozed the issue. |
| `snoozedUntilAt` | `voxgig_value*` | No | The time until an issue will be snoozed in Triage view. |
| `sortOrder` | `double` | Yes | The order of the item in relation to other items in the organization. |
| `sourceComment` | `voxgig_value* (map)` | No | The comment that this issue was created from, when an issue is created from an existing comment. |
| `startedAt` | `voxgig_value*` | No | The time at which the issue was moved into started state. |
| `startedTriageAt` | `voxgig_value*` | No | The time at which the issue entered triage. |
| `state` | `voxgig_value* (map)` | No | The workflow state (issue status) that the issue is currently in. |
| `subIssueSortOrder` | `double` | No | The order of the item in the sub-issue list. |
| `suggestionsGeneratedAt` | `voxgig_value*` | No | [Internal] The time at which the most recent suggestions for this issue were generated. |
| `summary` | `voxgig_value* (map)` | No | [Internal] AI-generated activity summary for this issue. |
| `team` | `voxgig_value* (map)` | No | The team that the issue belongs to. |
| `title` | `char*` | Yes | The issue's title. |
| `trashed` | `bool` | No | A flag that indicates whether the issue is in the trash bin. |
| `triagedAt` | `voxgig_value*` | No | The time at which the issue left triage. |
| `trusted` | `bool` | No | [Internal] Whether this issue has been explicitly marked as trusted. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | Yes | Issue URL. |

### Operations

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* issue_search_result = linear_issue_search_result(client, NULL);
voxgig_value* results = issue_search_result->vt->list(issue_search_result, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `IssueSearchResult` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## IssueToRelease

```c
Entity* issue_to_release = linear_issue_to_release(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `issue` | `voxgig_value* (map)` | No | The issue that is linked to the release. |
| `release` | `voxgig_value* (map)` | No | The release that the issue is linked to. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* issue_to_release = linear_issue_to_release(client, NULL);
voxgig_value* result = issue_to_release->vt->create(issue_to_release, cmap(3,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* issue_to_release = linear_issue_to_release(client, NULL);
voxgig_value* results = issue_to_release->vt->list(issue_to_release, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* issue_to_release = linear_issue_to_release(client, NULL);
voxgig_value* result = issue_to_release->vt->load(issue_to_release, cmap(1, "id", v_str("issue_to_release_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* issue_to_release = linear_issue_to_release(client, NULL);
voxgig_value* result = issue_to_release->vt->remove(issue_to_release, cmap(1, "id", v_str("issue_to_release_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `IssueToRelease` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## LogoutResponse

```c
Entity* logout_response = linear_logout_response(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `bool` | Yes | Whether the operation was successful. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* logout_response = linear_logout_response(client, NULL);
voxgig_value* result = logout_response->vt->create(logout_response, cmap(1,
    "success", v_bool(true))  // bool
, NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* logout_response = linear_logout_response(client, NULL);
voxgig_value* result = logout_response->vt->update(logout_response, cmap(1, "session_id", v_str("session_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `LogoutResponse` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## Notification

```c
Entity* notification = linear_notification(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `voxgig_value* (map)` | No | The user that caused the notification. |
| `actorAvatarColor` | `char*` | Yes | [Internal] Notification actor initials if avatar is not available. |
| `actorAvatarUrl` | `char*` | No | [Internal] Notification avatar URL. |
| `actorInactive` | `bool` | Yes | [Internal] Whether the notification's user actor is deactivated in the workspace. |
| `actorInitials` | `char*` | No | [Internal] Notification actor initials if avatar is not available. |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `botActor` | `voxgig_value* (map)` | No | The bot that caused the notification. |
| `category` | `char*` | Yes | The category of the notification. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `emailedAt` | `voxgig_value*` | No | The time at which an email reminder for this notification was sent to the user. |
| `externalUserActor` | `voxgig_value* (map)` | No | The external user that caused the notification. |
| `groupingKey` | `char*` | Yes | [Internal] Notifications with the same grouping key will be grouped together in the UI. |
| `groupingPriority` | `double` | Yes | [Internal] Priority of the notification with the same grouping key. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `inboxUrl` | `char*` | Yes | [Internal] Inbox URL for the notification. |
| `initiativeUpdateHealth` | `char*` | No | [Internal] Initiative update health for new updates. |
| `isLinearActor` | `bool` | Yes | [Internal] If notification actor was Linear. |
| `issueStatusType` | `char*` | No | [Internal] Issue's status type for issue notifications. |
| `projectUpdateHealth` | `char*` | No | [Internal] Project update health for new updates. |
| `readAt` | `voxgig_value*` | No | The time at which the user marked the notification as read. |
| `snoozedUntilAt` | `voxgig_value*` | No | The time until which a notification is snoozed. |
| `subtitle` | `char*` | Yes | [Internal] Notification subtitle. |
| `title` | `char*` | Yes | [Internal] Notification title. |
| `type` | `char*` | Yes | Notification type. |
| `unsnoozedAt` | `voxgig_value*` | No | The time at which a notification was unsnoozed. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | Yes | [Internal] URL to the target of the notification. |
| `user` | `voxgig_value* (map)` | No | The recipient user of this notification. |

### Operations

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* notification = linear_notification(client, NULL);
voxgig_value* results = notification->vt->list(notification, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* notification = linear_notification(client, NULL);
voxgig_value* result = notification->vt->load(notification, cmap(1, "id", v_str("notification_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `Notification` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## NotificationSubscription

```c
Entity* notification_subscription = linear_notification_subscription(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Whether the subscription is active. |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `contextViewType` | `char*` | No | The type of contextual view (e.g., active issues, backlog) that further scopes a team notification subscription. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `customView` | `voxgig_value* (map)` | No | The custom view that this notification subscription is scoped to. |
| `customer` | `voxgig_value* (map)` | No | The customer that this notification subscription is scoped to. |
| `cycle` | `voxgig_value* (map)` | No | The cycle that this notification subscription is scoped to. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `initiative` | `voxgig_value* (map)` | No | The initiative that this notification subscription is scoped to. |
| `label` | `voxgig_value* (map)` | No | The issue label that this notification subscription is scoped to. |
| `project` | `voxgig_value* (map)` | No | The project that this notification subscription is scoped to. |
| `subscriber` | `voxgig_value* (map)` | No | The user who will receive notifications from this subscription. |
| `team` | `voxgig_value* (map)` | No | The team that this notification subscription is scoped to. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `voxgig_value* (map)` | No | The user that this notification subscription is scoped to, for user-specific view subscriptions. |
| `userContextViewType` | `char*` | No | The type of user-specific view that further scopes a user notification subscription. |

### Operations

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* notification_subscription = linear_notification_subscription(client, NULL);
voxgig_value* results = notification_subscription->vt->list(notification_subscription, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* notification_subscription = linear_notification_subscription(client, NULL);
voxgig_value* result = notification_subscription->vt->load(notification_subscription, cmap(1, "id", v_str("notification_subscription_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `NotificationSubscription` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## OAuthApplication

```c
Entity* o_auth_application = linear_o_auth_application(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `clientId` | `char*` | Yes | The client ID used during OAuth authorization flows. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the OAuth application was created. |
| `description` | `char*` | No | User-facing description of the OAuth application. |
| `developer` | `char*` | Yes | Name of the developer or company that built the OAuth application. |
| `developerUrl` | `char*` | Yes | URL of the developer's website, homepage, or documentation. |
| `distribution` | `char*` | Yes | Distribution setting for the OAuth application. |
| `grantTypes` | `char*` | Yes | OAuth grant types supported by this application. |
| `id` | `char*` | Yes | The unique identifier of the OAuth application. |
| `imageUrl` | `char*` | No | URL of the OAuth application's icon. |
| `name` | `char*` | Yes | The human-readable name of the OAuth application. |
| `redirectUris` | `char*` | Yes | Allowed redirect URIs for OAuth authorization flows. |
| `updatedAt` | `voxgig_value*` | Yes | The time at which the OAuth application was last updated. |
| `webhookEnabled` | `bool` | Yes | Whether webhook delivery is enabled for this OAuth application. |
| `webhookResourceTypes` | `char*` | Yes | Resource types the OAuth application's webhooks subscribe to. |
| `webhookUrl` | `char*` | No | Webhook URL used for delivering webhook payloads. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* o_auth_application = linear_o_auth_application(client, NULL);
voxgig_value* result = o_auth_application->vt->create(o_auth_application, cmap(12,
    "clientId", v_str("example_clientId"),  // char*
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "developer", v_str("example_developer"),  // char*
    "developerUrl", v_str("example_developerUrl"),  // char*
    "distribution", v_str("example_distribution"),  // char*
    "grantTypes", v_str("example_grantTypes"),  // char*
    "id", v_str("example_id"),  // char*
    "name", v_str("example_name"),  // char*
    "redirectUris", v_str("example_redirectUris"),  // char*
    "updatedAt", v_str("example_updatedAt"),  // voxgig_value*
    "webhookEnabled", v_bool(true),  // bool
    "webhookResourceTypes", v_str("example_webhookResourceTypes"))  // char*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* o_auth_application = linear_o_auth_application(client, NULL);
voxgig_value* results = o_auth_application->vt->list(o_auth_application, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* o_auth_application = linear_o_auth_application(client, NULL);
voxgig_value* result = o_auth_application->vt->load(o_auth_application, cmap(1, "id", v_str("o_auth_application_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* o_auth_application = linear_o_auth_application(client, NULL);
voxgig_value* result = o_auth_application->vt->update(o_auth_application, cmap(1, "id", v_str("o_auth_application_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `OAuthApplication` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## Organization

```c
Entity* organization = linear_organization(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agentAutomationEnabled` | `bool` | Yes | [INTERNAL] Whether the workspace has enabled agent automation. |
| `aiAddonEnabled` | `bool` | Yes | [INTERNAL] Whether the workspace has enabled the AI add-on (which at this point only includes triage suggestions). |
| `aiDiscussionSummariesEnabled` | `bool` | Yes | Whether the workspace has enabled AI discussion summaries for issues. |
| `aiProviderConfiguration` | `voxgig_value*` | No | [INTERNAL] Configure per-modality AI host providers and model families. |
| `aiTelemetryEnabled` | `bool` | Yes | [INTERNAL] Whether the workspace has opted in to AI telemetry. |
| `aiThreadSummariesEnabled` | `bool` | Yes | Whether the workspace has enabled resolved thread AI summaries. |
| `allowedFileUploadContentTypes` | `char*` | No | Allowed file upload content types |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `authSettings` | `voxgig_value*` | Yes | Authentication settings for the workspace, including allowed auth providers, bypass rules, and organization visibility during signup. |
| `codeIntelligenceEnabled` | `bool` | Yes | [INTERNAL] Whether code intelligence is enabled for the workspace. |
| `codeIntelligenceRepository` | `char*` | No | [INTERNAL] GitHub repository in owner/repo format for code intelligence. |
| `codingAgentEnabled` | `bool` | Yes | [INTERNAL] Whether the workspace has enabled Coding Sessions. |
| `codingAgentSettings` | `voxgig_value*` | Yes | [Internal] Settings for Coding Sessions features. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `createdIssueCount` | `int64_t` | Yes | Approximate total number of issues created in the workspace, including archived ones. |
| `customerCount` | `int64_t` | Yes | The number of active (non-archived) customers tracked in the workspace. |
| `customersConfiguration` | `voxgig_value*` | Yes | Configuration settings for the Customers feature, including revenue currency and other customer tracking preferences. |
| `customersEnabled` | `bool` | Yes | Whether the Customers feature is enabled and accessible for the workspace based on the current plan. |
| `defaultFeedSummarySchedule` | `char*` | No | Default schedule for how often feed summaries are generated. |
| `defaultHomeView` | `char*` | No | The default home view for members of the workspace who have not chosen their own default. |
| `defaultHomeViewTargetId` | `char*` | No | The id of the specific initiative, project, view, dashboard, or page tab used as the default home view. |
| `deletionRequestedAt` | `voxgig_value*` | No | The time at which deletion of the workspace was requested. |
| `feedEnabled` | `bool` | Yes | Whether the activity feed feature is enabled for the workspace. |
| `fiscalYearStartMonth` | `double` | Yes | The zero-indexed month at which the fiscal year starts (0 = January, 11 = December). |
| `generatedUpdatesEnabled` | `bool` | Yes | [INTERNAL] Whether the workspace has enabled generated updates. |
| `gitBranchFormat` | `char*` | No | The template format for Git branch names created from issues. |
| `gitLinkbackDescriptionsEnabled` | `bool` | Yes | Whether issue descriptions should be included in the Git integration linkback messages posted to pull requests. |
| `gitLinkbackMessagesEnabled` | `bool` | Yes | Whether the Git integration linkback messages should be posted as comments on pull requests in private repositories. |
| `gitPublicLinkbackMessagesEnabled` | `bool` | Yes | Whether the Git integration linkback messages should be posted as comments on pull requests in public repositories. |
| `hipaaComplianceEnabled` | `bool` | Yes | Whether HIPAA compliance is enabled for the workspace. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `initiativeUpdateReminderFrequencyInWeeks` | `double` | No | The frequency in weeks at which to prompt for initiative updates. |
| `initiativeUpdateRemindersDay` | `char*` | Yes | The day of the week on which initiative update reminders are sent. |
| `initiativeUpdateRemindersHour` | `double` | Yes | The hour of the day (0-23) at which initiative update reminders are sent. |
| `linearAgentEnabled` | `bool` | Yes | [Internal] Whether the workspace has enabled Linear Agent. |
| `linearAgentSettings` | `voxgig_value*` | Yes | [Internal] Settings for Linear Agent features. |
| `logoUrl` | `char*` | No | The URL of the workspace's logo image. |
| `name` | `char*` | Yes | The workspace's name. |
| `periodUploadVolume` | `double` | Yes | Rolling 30-day total file upload volume for the workspace, measured in megabytes. |
| `previousUrlKeys` | `char*` | Yes | Previously used URL keys for the workspace. |
| `projectUpdateReminderFrequencyInWeeks` | `double` | No | The frequency in weeks at which to prompt for project updates. |
| `projectUpdateRemindersDay` | `char*` | Yes | The day of the week on which project update reminders are sent. |
| `projectUpdateRemindersHour` | `double` | Yes | The hour of the day (0-23) at which project update reminders are sent. |
| `pullRequestIssueMode` | `char*` | Yes | How Linear suggests and links issues for pull requests that have none linked: 'off', 'suggest', or 'autoOnMerge'. |
| `pullRequestTourEnabled` | `bool` | Yes | Whether the workspace generates AI Pull Request guides for new pull requests. |
| `releaseChannel` | `char*` | Yes | The feature release channel the workspace belongs to, which controls access to pre-release features. |
| `releasesEnabled` | `bool` | Yes | Whether release management is enabled for the workspace. |
| `restrictAgentInvocationToMembers` | `bool` | No | [Internal] Whether agent invocation is restricted to full workspace members. |
| `roadmapEnabled` | `bool` | Yes | Whether the roadmap feature is enabled for the workspace. |
| `samlEnabled` | `bool` | Yes | Whether SAML-based single sign-on authentication is enabled for the workspace. |
| `samlSettings` | `voxgig_value*` | No | [INTERNAL] SAML settings. |
| `scimEnabled` | `bool` | Yes | Whether SCIM provisioning is enabled for the workspace, allowing automated user and team management from an identity provider. |
| `scimSettings` | `voxgig_value*` | No | [INTERNAL] SCIM settings. |
| `securitySettings` | `voxgig_value*` | Yes | Security settings for the workspace, including role-based restrictions for invitations, team creation, label management, and other sensitive operations. |
| `slackAutoCreateProjectChannel` | `bool` | Yes | [Internal] Whether to automatically create a Slack channel when a new project is created. |
| `slackProjectChannelIntegration` | `voxgig_value* (map)` | No | The Slack integration used for auto-creating project channels. |
| `slackProjectChannelPrefix` | `char*` | Yes | The prefix used for auto-created Slack project channels. |
| `slackProjectChannelsEnabled` | `bool` | Yes | [Internal] Whether the Slack project channels feature is enabled for the workspace. |
| `subscription` | `voxgig_value* (map)` | No | The workspace's subscription to a paid plan. |
| `themeSettings` | `voxgig_value*` | No | [ALPHA] Theme settings for the workspace. |
| `trialEndsAt` | `voxgig_value*` | No | The time at which the current plan trial will end. |
| `trialStartsAt` | `voxgig_value*` | No | The time at which the current plan trial started. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |
| `urlKey` | `char*` | Yes | The workspace's unique URL key, used in URLs to identify the workspace. |
| `userCount` | `int64_t` | Yes | The number of active (non-deactivated) users in the workspace. |
| `workingDays` | `double` | Yes | [Internal] The list of working days. |

### Operations

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* organization = linear_organization(client, NULL);
voxgig_value* result = organization->vt->load(organization, cmap(1, "id", v_str("organization_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* organization = linear_organization(client, NULL);
voxgig_value* result = organization->vt->remove(organization, cmap(1, "id", v_str("organization_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* organization = linear_organization(client, NULL);
voxgig_value* result = organization->vt->update(organization, cmap(1, "id", v_str("organization_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `Organization` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## OrganizationDomain

```c
Entity* organization_domain = linear_organization_domain(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `authType` | `char*` | Yes | The authentication type this domain is used for. |
| `claimed` | `bool` | No | Whether the domain was claimed by the workspace through DNS TXT record verification. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | No | The user who added the domain. |
| `disableOrganizationCreation` | `bool` | No | Whether users with email addresses from this domain are prevented from creating new workspaces. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `identityProvider` | `voxgig_value* (map)` | No | The identity provider the domain belongs to. |
| `name` | `char*` | Yes | The domain name (e.g., 'example.com'). |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |
| `verificationEmail` | `char*` | No | The email address used to verify this domain. |
| `verified` | `bool` | Yes | Whether the domain has been verified via email verification. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* organization_domain = linear_organization_domain(client, NULL);
voxgig_value* result = organization_domain->vt->create(organization_domain, cmap(6,
    "authType", v_str("example_authType"),  // char*
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "name", v_str("example_name"),  // char*
    "updatedAt", v_str("example_updatedAt"),  // voxgig_value*
    "verified", v_bool(true))  // bool
, NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* organization_domain = linear_organization_domain(client, NULL);
voxgig_value* result = organization_domain->vt->remove(organization_domain, cmap(1, "id", v_str("id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* organization_domain = linear_organization_domain(client, NULL);
voxgig_value* result = organization_domain->vt->update(organization_domain, cmap(1, "id", v_str("id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `OrganizationDomain` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## OrganizationInvite

```c
Entity* organization_invite = linear_organization_invite(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acceptedAt` | `voxgig_value*` | No | The time at which the invite was accepted by the invitee. |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `email` | `char*` | Yes | The email address of the person being invited to the workspace. |
| `expiresAt` | `voxgig_value*` | No | The time at which the invite will expire and can no longer be accepted. |
| `external` | `bool` | Yes | Whether the invite was sent to an email address outside the workspace's verified domains. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `invitee` | `voxgig_value* (map)` | No | The user who has accepted the invite. |
| `inviter` | `voxgig_value* (map)` | No | The user who created the invitation. |
| `metadata` | `voxgig_value*` | No | Extra metadata associated with the invite. |
| `organization` | `voxgig_value* (map)` | No | The workspace that the invite is associated with. |
| `role` | `char*` | Yes | The workspace role (admin, member, guest, or owner) that the invitee will receive upon accepting the invite. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* organization_invite = linear_organization_invite(client, NULL);
voxgig_value* result = organization_invite->vt->create(organization_invite, cmap(6,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "email", v_str("example_email"),  // char*
    "external", v_bool(true),  // bool
    "id", v_str("example_id"),  // char*
    "role", v_str("example_role"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* organization_invite = linear_organization_invite(client, NULL);
voxgig_value* results = organization_invite->vt->list(organization_invite, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* organization_invite = linear_organization_invite(client, NULL);
voxgig_value* result = organization_invite->vt->load(organization_invite, cmap(1, "id", v_str("organization_invite_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* organization_invite = linear_organization_invite(client, NULL);
voxgig_value* result = organization_invite->vt->remove(organization_invite, cmap(1, "id", v_str("organization_invite_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* organization_invite = linear_organization_invite(client, NULL);
voxgig_value* result = organization_invite->vt->update(organization_invite, cmap(1, "id", v_str("organization_invite_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `OrganizationInvite` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## OrganizationMeta

```c
Entity* organization_meta = linear_organization_meta(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowedAuthServices` | `char*` | Yes | Allowed authentication providers, empty array means all are allowed. |
| `region` | `char*` | Yes | The region the workspace is hosted in. |

### Operations

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* organization_meta = linear_organization_meta(client, NULL);
voxgig_value* result = organization_meta->vt->load(organization_meta, cmap(1, "url_key", v_str("url_key")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `OrganizationMeta` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## PasskeyLoginStartResponse

```c
Entity* passkey_login_start_response = linear_passkey_login_start_response(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `options` | `voxgig_value*` | Yes | The passkey authentication options to pass to the WebAuthn API. |
| `success` | `bool` | Yes | Whether the operation was successful. |

### Operations

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* passkey_login_start_response = linear_passkey_login_start_response(client, NULL);
voxgig_value* result = passkey_login_start_response->vt->update(passkey_login_start_response, cmap(1, "auth_id", v_str("auth_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `PasskeyLoginStartResponse` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## Project

```c
Entity* project = linear_project(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `autoArchivedAt` | `voxgig_value*` | No | The time at which the project was automatically archived by the auto-pruning process. |
| `canceledAt` | `voxgig_value*` | No | The time at which the project was moved into a canceled status. |
| `color` | `char*` | Yes | The project's color as a HEX string. |
| `completedAt` | `voxgig_value*` | No | The time at which the project was moved into a completed status. |
| `completedIssueCountHistory` | `double` | Yes | The number of completed issues in the project at the end of each week since project creation. |
| `completedScopeHistory` | `double` | Yes | The number of completed estimation points at the end of each week since project creation. |
| `content` | `char*` | No | The project's content in markdown format. |
| `contentState` | `char*` | No | [Internal] The project's content as YJS state. |
| `convertedFromIssue` | `voxgig_value* (map)` | No | The issue that was converted into this project. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | No | The user who created the project. |
| `currentProgress` | `voxgig_value*` | Yes | [INTERNAL] The current progress of the project, broken down by issue status category. |
| `description` | `char*` | Yes | The short description of the project. |
| `documentContent` | `voxgig_value* (map)` | No | The content of the project description. |
| `favorite` | `voxgig_value* (map)` | No | The user's favorite associated with this project. |
| `frequencyResolution` | `char*` | Yes | The resolution of the reminder frequency. |
| `health` | `char*` | No | The overall health of the project, derived from the most recent project update. |
| `healthUpdatedAt` | `voxgig_value*` | No | The time at which the project health was last updated, typically when a new project update is posted. |
| `icon` | `char*` | No | The icon of the project. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `identifier` | `char*` | No | [Internal] The human-readable identifier of the project. |
| `inProgressScopeHistory` | `double` | Yes | The number of in-progress estimation points at the end of each week since project creation. |
| `integrationsSettings` | `voxgig_value* (map)` | No | Settings for all integrations associated with that project. |
| `issueCountHistory` | `double` | Yes | The total number of issues in the project at the end of each week since project creation. |
| `labelIds` | `char*` | Yes | The IDs of the project labels associated with this project. |
| `lastAppliedTemplate` | `voxgig_value* (map)` | No | The last template that was applied to this project. |
| `lastUpdate` | `voxgig_value* (map)` | No | The most recent status update posted for this project. |
| `lead` | `voxgig_value* (map)` | No | The user who leads the project. |
| `leadTeam` | `voxgig_value* (map)` | No | [Internal] The team that leads the project. |
| `microsoftTeamsChannelId` | `char*` | No | The ID of the Microsoft Teams channel connected to the project, if any. |
| `name` | `char*` | Yes | The name of the project. |
| `previousIdentifiers` | `char*` | Yes | [Internal] Identifiers (default and custom) that this project has previously held. |
| `priority` | `int64_t` | Yes | The priority of the project. |
| `priorityLabel` | `char*` | Yes | The priority of the project as a label. |
| `prioritySortOrder` | `double` | Yes | The sort order for the project within the workspace when ordered by priority. |
| `progress` | `double` | Yes | The overall progress of the project. |
| `progressHistory` | `voxgig_value*` | Yes | [INTERNAL] The progress history of the project, tracking issue completion over time. |
| `projectUpdateRemindersPausedUntilAt` | `voxgig_value*` | No | The time until which project update reminders are paused. |
| `resourceCount` | `int64_t` | Yes | The number of resources associated with the project, including documents, external links, and attachments. |
| `scope` | `double` | Yes | The overall scope (total estimate points) of the project. |
| `scopeHistory` | `double` | Yes | The total scope (estimation points) of the project at the end of each week since project creation. |
| `slackChannelId` | `char*` | No | The ID of the Slack channel connected to the project, if any. |
| `slugId` | `char*` | Yes | The project's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `double` | Yes | The sort order for the project within the workspace. |
| `startDate` | `voxgig_value*` | No | The estimated start date of the project. |
| `startDateResolution` | `char*` | No | The resolution of the project's start date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `startedAt` | `voxgig_value*` | No | The time at which the project was moved into a started status. |
| `status` | `voxgig_value* (map)` | No | The current project status. |
| `targetDate` | `voxgig_value*` | No | The estimated completion date of the project. |
| `targetDateResolution` | `char*` | No | The resolution of the project's estimated completion date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `trashed` | `bool` | No | A flag that indicates whether the project is in the trash bin. |
| `updateReminderFrequency` | `double` | No | The frequency at which to prompt for updates. |
| `updateReminderFrequencyInWeeks` | `double` | No | The n-weekly frequency at which to prompt for updates. |
| `updateRemindersDay` | `char*` | No | The day at which to prompt for updates. |
| `updateRemindersHour` | `double` | No | The hour at which to prompt for updates. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | Yes | Project URL. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* project = linear_project(client, NULL);
voxgig_value* result = project->vt->create(project, cmap(25,
    "color", v_str("example_color"),  // char*
    "completedIssueCountHistory", v_num(1),  // double
    "completedScopeHistory", v_num(1),  // double
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "currentProgress", v_str("example_currentProgress"),  // voxgig_value*
    "description", v_str("example_description"),  // char*
    "frequencyResolution", v_str("example_frequencyResolution"),  // char*
    "id", v_str("example_id"),  // char*
    "inProgressScopeHistory", v_num(1),  // double
    "issueCountHistory", v_num(1),  // double
    "labelIds", v_str("example_labelIds"),  // char*
    "name", v_str("example_name"),  // char*
    "previousIdentifiers", v_str("example_previousIdentifiers"),  // char*
    "priority", v_num(1),  // int64_t
    "priorityLabel", v_str("example_priorityLabel"),  // char*
    "prioritySortOrder", v_num(1),  // double
    "progress", v_num(1),  // double
    "progressHistory", v_str("example_progressHistory"),  // voxgig_value*
    "resourceCount", v_num(1),  // int64_t
    "scope", v_num(1),  // double
    "scopeHistory", v_num(1),  // double
    "slugId", v_str("example_slugId"),  // char*
    "sortOrder", v_num(1),  // double
    "updatedAt", v_str("example_updatedAt"),  // voxgig_value*
    "url", v_str("example_url"))  // char*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* project = linear_project(client, NULL);
voxgig_value* results = project->vt->list(project, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* project = linear_project(client, NULL);
voxgig_value* result = project->vt->load(project, cmap(1, "id", v_str("project_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* project = linear_project(client, NULL);
voxgig_value* result = project->vt->remove(project, cmap(1, "id", v_str("project_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* project = linear_project(client, NULL);
voxgig_value* result = project->vt->update(project, cmap(1, "id", v_str("project_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `Project` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## ProjectLabel

```c
Entity* project_label = linear_project_label(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `color` | `char*` | Yes | The label's color as a HEX string (e.g., '#EB5757'). |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | No | The user who created the label. |
| `description` | `char*` | No | The label's description. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `inheritedFrom` | `voxgig_value* (map)` | No | [Internal] The original workspace or parent-team label that this label was inherited from. |
| `isGroup` | `bool` | Yes | Whether the label is a group. |
| `lastAppliedAt` | `voxgig_value*` | No | The date when the label was last applied to an issue, project, or initiative. |
| `name` | `char*` | Yes | The label's name. |
| `organization` | `voxgig_value* (map)` | No | The workspace that the project label belongs to. |
| `parent` | `voxgig_value* (map)` | No | The parent label group. |
| `retiredAt` | `voxgig_value*` | No | [Internal] When the label was retired. |
| `retiredBy` | `voxgig_value* (map)` | No | The user who retired the label. |
| `team` | `voxgig_value* (map)` | No | [Internal] The team that the label is scoped to. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* project_label = linear_project_label(client, NULL);
voxgig_value* result = project_label->vt->create(project_label, cmap(6,
    "color", v_str("example_color"),  // char*
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "isGroup", v_bool(true),  // bool
    "name", v_str("example_name"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* project_label = linear_project_label(client, NULL);
voxgig_value* results = project_label->vt->list(project_label, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* project_label = linear_project_label(client, NULL);
voxgig_value* result = project_label->vt->load(project_label, cmap(1, "id", v_str("project_label_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* project_label = linear_project_label(client, NULL);
voxgig_value* result = project_label->vt->remove(project_label, cmap(1, "id", v_str("project_label_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* project_label = linear_project_label(client, NULL);
voxgig_value* result = project_label->vt->update(project_label, cmap(1, "id", v_str("project_label_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `ProjectLabel` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## ProjectMilestone

```c
Entity* project_milestone = linear_project_milestone(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `currentProgress` | `voxgig_value*` | Yes | [Internal] The current progress of the milestone, broken down by issue status category. |
| `description` | `char*` | No | The project milestone's description in markdown format. |
| `descriptionState` | `char*` | No | [Internal] The project milestone's description as YJS state. |
| `documentContent` | `voxgig_value* (map)` | No | The rich-text content of the milestone description. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `name` | `char*` | Yes | The name of the project milestone. |
| `progress` | `double` | Yes | The progress % of the project milestone. |
| `progressHistory` | `voxgig_value*` | Yes | [Internal] The progress history of the milestone, tracking issue completion over time. |
| `project` | `voxgig_value* (map)` | No | The project that this milestone belongs to. |
| `sortOrder` | `double` | Yes | The order of the milestone in relation to other milestones within a project. |
| `status` | `char*` | Yes | The status of the project milestone. |
| `targetDate` | `voxgig_value*` | No | The planned completion date of the milestone. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* project_milestone = linear_project_milestone(client, NULL);
voxgig_value* result = project_milestone->vt->create(project_milestone, cmap(9,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "currentProgress", v_str("example_currentProgress"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "name", v_str("example_name"),  // char*
    "progress", v_num(1),  // double
    "progressHistory", v_str("example_progressHistory"),  // voxgig_value*
    "sortOrder", v_num(1),  // double
    "status", v_str("example_status"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* project_milestone = linear_project_milestone(client, NULL);
voxgig_value* results = project_milestone->vt->list(project_milestone, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* project_milestone = linear_project_milestone(client, NULL);
voxgig_value* result = project_milestone->vt->load(project_milestone, cmap(1, "id", v_str("project_milestone_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* project_milestone = linear_project_milestone(client, NULL);
voxgig_value* result = project_milestone->vt->remove(project_milestone, cmap(1, "id", v_str("project_milestone_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* project_milestone = linear_project_milestone(client, NULL);
voxgig_value* result = project_milestone->vt->update(project_milestone, cmap(1, "id", v_str("project_milestone_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `ProjectMilestone` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## ProjectMilestoneMoveProjectTeam

```c
Entity* project_milestone_move_project_team = linear_project_milestone_move_project_team(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `char*` | No |  |
| `projectId` | `char*` | Yes | The project id |
| `teamIds` | `char*` | Yes | The team ids for the project |

### Operations

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* project_milestone_move_project_team = linear_project_milestone_move_project_team(client, NULL);
voxgig_value* result = project_milestone_move_project_team->vt->update(project_milestone_move_project_team, cmap(1, "id", v_str("id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `ProjectMilestoneMoveProjectTeam` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## ProjectRelation

```c
Entity* project_relation = linear_project_relation(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `anchorType` | `char*` | Yes | The type of anchor on the source project end of the relation, indicating whether it is anchored to the project itself or a specific milestone. |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `project` | `voxgig_value* (map)` | No | The source project in the dependency relation. |
| `projectMilestone` | `voxgig_value* (map)` | No | The specific milestone within the source project that the relation is anchored to. |
| `relatedAnchorType` | `char*` | Yes | The type of anchor on the target project end of the relation, indicating whether it is anchored to the project itself or a specific milestone. |
| `relatedProject` | `voxgig_value* (map)` | No | The target project in the dependency relation. |
| `relatedProjectMilestone` | `voxgig_value* (map)` | No | The specific milestone within the target project that the relation is anchored to. |
| `type` | `char*` | Yes | The type of dependency relationship from the project to the related project (e.g., blocks). |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `voxgig_value* (map)` | No | The user who last created or modified the relation. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* project_relation = linear_project_relation(client, NULL);
voxgig_value* result = project_relation->vt->create(project_relation, cmap(6,
    "anchorType", v_str("example_anchorType"),  // char*
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "relatedAnchorType", v_str("example_relatedAnchorType"),  // char*
    "type", v_str("example_type"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* project_relation = linear_project_relation(client, NULL);
voxgig_value* results = project_relation->vt->list(project_relation, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* project_relation = linear_project_relation(client, NULL);
voxgig_value* result = project_relation->vt->load(project_relation, cmap(1, "id", v_str("project_relation_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* project_relation = linear_project_relation(client, NULL);
voxgig_value* result = project_relation->vt->remove(project_relation, cmap(1, "id", v_str("project_relation_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* project_relation = linear_project_relation(client, NULL);
voxgig_value* result = project_relation->vt->update(project_relation, cmap(1, "id", v_str("project_relation_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `ProjectRelation` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## ProjectSearchResult

```c
Entity* project_search_result = linear_project_search_result(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `autoArchivedAt` | `voxgig_value*` | No | The time at which the project was automatically archived by the auto-pruning process. |
| `canceledAt` | `voxgig_value*` | No | The time at which the project was moved into a canceled status. |
| `color` | `char*` | Yes | The project's color as a HEX string. |
| `completedAt` | `voxgig_value*` | No | The time at which the project was moved into a completed status. |
| `completedIssueCountHistory` | `double` | Yes | The number of completed issues in the project at the end of each week since project creation. |
| `completedScopeHistory` | `double` | Yes | The number of completed estimation points at the end of each week since project creation. |
| `content` | `char*` | No | The project's content in markdown format. |
| `contentState` | `char*` | No | [Internal] The project's content as YJS state. |
| `convertedFromIssue` | `voxgig_value* (map)` | No | The issue that was converted into this project. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | No | The user who created the project. |
| `currentProgress` | `voxgig_value*` | Yes | [INTERNAL] The current progress of the project, broken down by issue status category. |
| `description` | `char*` | Yes | The short description of the project. |
| `documentContent` | `voxgig_value* (map)` | No | The content of the project description. |
| `favorite` | `voxgig_value* (map)` | No | The user's favorite associated with this project. |
| `frequencyResolution` | `char*` | Yes | The resolution of the reminder frequency. |
| `health` | `char*` | No | The overall health of the project, derived from the most recent project update. |
| `healthUpdatedAt` | `voxgig_value*` | No | The time at which the project health was last updated, typically when a new project update is posted. |
| `icon` | `char*` | No | The icon of the project. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `identifier` | `char*` | No | [Internal] The human-readable identifier of the project. |
| `inProgressScopeHistory` | `double` | Yes | The number of in-progress estimation points at the end of each week since project creation. |
| `integrationsSettings` | `voxgig_value* (map)` | No | Settings for all integrations associated with that project. |
| `issueCountHistory` | `double` | Yes | The total number of issues in the project at the end of each week since project creation. |
| `labelIds` | `char*` | Yes | The IDs of the project labels associated with this project. |
| `lastAppliedTemplate` | `voxgig_value* (map)` | No | The last template that was applied to this project. |
| `lastUpdate` | `voxgig_value* (map)` | No | The most recent status update posted for this project. |
| `lead` | `voxgig_value* (map)` | No | The user who leads the project. |
| `leadTeam` | `voxgig_value* (map)` | No | [Internal] The team that leads the project. |
| `metadata` | `voxgig_value*` | Yes | Metadata related to search result. |
| `microsoftTeamsChannelId` | `char*` | No | The ID of the Microsoft Teams channel connected to the project, if any. |
| `name` | `char*` | Yes | The name of the project. |
| `previousIdentifiers` | `char*` | Yes | [Internal] Identifiers (default and custom) that this project has previously held. |
| `priority` | `int64_t` | Yes | The priority of the project. |
| `priorityLabel` | `char*` | Yes | The priority of the project as a label. |
| `prioritySortOrder` | `double` | Yes | The sort order for the project within the workspace when ordered by priority. |
| `progress` | `double` | Yes | The overall progress of the project. |
| `progressHistory` | `voxgig_value*` | Yes | [INTERNAL] The progress history of the project, tracking issue completion over time. |
| `projectUpdateRemindersPausedUntilAt` | `voxgig_value*` | No | The time until which project update reminders are paused. |
| `resourceCount` | `int64_t` | Yes | The number of resources associated with the project, including documents, external links, and attachments. |
| `scope` | `double` | Yes | The overall scope (total estimate points) of the project. |
| `scopeHistory` | `double` | Yes | The total scope (estimation points) of the project at the end of each week since project creation. |
| `slackChannelId` | `char*` | No | The ID of the Slack channel connected to the project, if any. |
| `slugId` | `char*` | Yes | The project's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `double` | Yes | The sort order for the project within the workspace. |
| `startDate` | `voxgig_value*` | No | The estimated start date of the project. |
| `startDateResolution` | `char*` | No | The resolution of the project's start date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `startedAt` | `voxgig_value*` | No | The time at which the project was moved into a started status. |
| `status` | `voxgig_value* (map)` | No | The current project status. |
| `targetDate` | `voxgig_value*` | No | The estimated completion date of the project. |
| `targetDateResolution` | `char*` | No | The resolution of the project's estimated completion date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `trashed` | `bool` | No | A flag that indicates whether the project is in the trash bin. |
| `updateReminderFrequency` | `double` | No | The frequency at which to prompt for updates. |
| `updateReminderFrequencyInWeeks` | `double` | No | The n-weekly frequency at which to prompt for updates. |
| `updateRemindersDay` | `char*` | No | The day at which to prompt for updates. |
| `updateRemindersHour` | `double` | No | The hour at which to prompt for updates. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | Yes | Project URL. |

### Operations

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* project_search_result = linear_project_search_result(client, NULL);
voxgig_value* results = project_search_result->vt->list(project_search_result, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `ProjectSearchResult` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## ProjectStatus

```c
Entity* project_status = linear_project_status(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `color` | `char*` | Yes | The color of the status as a HEX string, used for display in the UI. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `description` | `char*` | No | Description of the status. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `indefinite` | `bool` | Yes | Whether a project can remain in this status indefinitely. |
| `inheritedFrom` | `voxgig_value* (map)` | No | [Internal] The original workspace or parent-team status that this status was inherited from. |
| `name` | `char*` | Yes | The name of the status. |
| `position` | `double` | Yes | The position of the status within its type group in the workspace's project flow. |
| `team` | `voxgig_value* (map)` | No | [Internal] The team that the status is scoped to. |
| `type` | `char*` | Yes | The category type of the project status (e.g., backlog, planned, started, paused, completed, canceled). |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* project_status = linear_project_status(client, NULL);
voxgig_value* result = project_status->vt->create(project_status, cmap(8,
    "color", v_str("example_color"),  // char*
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "indefinite", v_bool(true),  // bool
    "name", v_str("example_name"),  // char*
    "position", v_num(1),  // double
    "type", v_str("example_type"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* project_status = linear_project_status(client, NULL);
voxgig_value* results = project_status->vt->list(project_status, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* project_status = linear_project_status(client, NULL);
voxgig_value* result = project_status->vt->load(project_status, cmap(1, "id", v_str("project_status_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* project_status = linear_project_status(client, NULL);
voxgig_value* result = project_status->vt->update(project_status, cmap(1, "id", v_str("project_status_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `ProjectStatus` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## ProjectUpdate

```c
Entity* project_update = linear_project_update(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `body` | `char*` | Yes | The update content in markdown format. |
| `bodyData` | `char*` | Yes | [Internal] The content of the update as a Prosemirror document. |
| `commentCount` | `int64_t` | Yes | Number of comments associated with the project update. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `diff` | `voxgig_value*` | No | The diff between the current update and the previous one. |
| `diffMarkdown` | `char*` | No | The diff between the current update and the previous one, formatted as markdown. |
| `editedAt` | `voxgig_value*` | No | The time the update was edited. |
| `health` | `char*` | Yes | The health of the project at the time this update was posted. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `infoSnapshot` | `voxgig_value*` | No | [Internal] A snapshot of project properties at the time the update was posted, including team, milestone, and issue statistics. |
| `isDiffHidden` | `bool` | Yes | Whether the diff between this update and the previous one should be hidden in the UI. |
| `isStale` | `bool` | Yes | Whether the project update is stale. |
| `project` | `voxgig_value* (map)` | No | The project that this status update was posted to. |
| `reactionData` | `voxgig_value*` | Yes | Emoji reaction summary, grouped by emoji type. |
| `shortSummary` | `char*` | No | A short AI-generated summary of the project update. |
| `slugId` | `char*` | Yes | The update's unique URL slug. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | Yes | The URL to the project update. |
| `user` | `voxgig_value* (map)` | No | The user who wrote the update. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* project_update = linear_project_update(client, NULL);
voxgig_value* result = project_update->vt->create(project_update, cmap(12,
    "body", v_str("example_body"),  // char*
    "bodyData", v_str("example_bodyData"),  // char*
    "commentCount", v_num(1),  // int64_t
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "health", v_str("example_health"),  // char*
    "id", v_str("example_id"),  // char*
    "isDiffHidden", v_bool(true),  // bool
    "isStale", v_bool(true),  // bool
    "reactionData", v_str("example_reactionData"),  // voxgig_value*
    "slugId", v_str("example_slugId"),  // char*
    "updatedAt", v_str("example_updatedAt"),  // voxgig_value*
    "url", v_str("example_url"))  // char*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* project_update = linear_project_update(client, NULL);
voxgig_value* results = project_update->vt->list(project_update, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* project_update = linear_project_update(client, NULL);
voxgig_value* result = project_update->vt->load(project_update, cmap(1, "id", v_str("project_update_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* project_update = linear_project_update(client, NULL);
voxgig_value* result = project_update->vt->remove(project_update, cmap(1, "id", v_str("project_update_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* project_update = linear_project_update(client, NULL);
voxgig_value* result = project_update->vt->update(project_update, cmap(1, "id", v_str("project_update_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `ProjectUpdate` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## PushSubscription

```c
Entity* push_subscription = linear_push_subscription(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* push_subscription = linear_push_subscription(client, NULL);
voxgig_value* result = push_subscription->vt->create(push_subscription, cmap(3,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* push_subscription = linear_push_subscription(client, NULL);
voxgig_value* result = push_subscription->vt->remove(push_subscription, cmap(1, "id", v_str("id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `PushSubscription` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## Reaction

```c
Entity* reaction = linear_reaction(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `comment` | `voxgig_value* (map)` | No | The comment that the reaction is associated with. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `emoji` | `char*` | Yes | The name of the emoji used for this reaction. |
| `externalUser` | `voxgig_value* (map)` | No | The external user that created the reaction through an integration. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `initiativeUpdate` | `voxgig_value* (map)` | No | The initiative update that the reaction is associated with. |
| `issue` | `voxgig_value* (map)` | No | The issue that the reaction is associated with. |
| `post` | `voxgig_value* (map)` | No | The post that the reaction is associated with. |
| `projectUpdate` | `voxgig_value* (map)` | No | The project update that the reaction is associated with. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `voxgig_value* (map)` | No | The workspace user that created the reaction. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* reaction = linear_reaction(client, NULL);
voxgig_value* result = reaction->vt->create(reaction, cmap(4,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "emoji", v_str("example_emoji"),  // char*
    "id", v_str("example_id"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* reaction = linear_reaction(client, NULL);
voxgig_value* result = reaction->vt->remove(reaction, cmap(1, "id", v_str("id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `Reaction` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## Release

```c
Entity* release = linear_release(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `autoArchivedAt` | `voxgig_value*` | No | The time at which the release was automatically archived by the auto pruning process. |
| `canceledAt` | `voxgig_value*` | No | The time at which the release was canceled. |
| `commitSha` | `char*` | No | The Git commit SHA associated with this release. |
| `completedAt` | `voxgig_value*` | No | The time at which the release was completed. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | No | The user who created the release. |
| `currentProgress` | `voxgig_value*` | Yes | The current progress summary for the release, including counts of issues by workflow state type (e.g., completed, in progress, unstarted). |
| `description` | `char*` | No | The description of the release in plain text or markdown. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `issueCount` | `int64_t` | Yes | Number of issues associated with the release. |
| `name` | `char*` | Yes | The name of the release. |
| `pipeline` | `voxgig_value* (map)` | No | The release pipeline that this release belongs to. |
| `progressHistory` | `voxgig_value*` | Yes | The historical progress snapshots for the release, tracking how issue completion has evolved over time. |
| `releaseNote` | `voxgig_value* (map)` | No | [Internal] The primary release note covering this release. |
| `slugId` | `char*` | Yes | The release's unique URL slug, used to construct human-readable URLs for the release. |
| `stage` | `voxgig_value* (map)` | No | The current stage of the release within its pipeline (e.g., Planned, In Progress, Completed, Canceled). |
| `startDate` | `voxgig_value*` | No | The estimated start date of the release. |
| `startedAt` | `voxgig_value*` | No | The time at which the release first entered a started stage. |
| `targetDate` | `voxgig_value*` | No | The estimated completion date of the release. |
| `trashed` | `bool` | No | A flag that indicates whether the release is in the trash bin. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | Yes | The URL to the release page in the Linear app. |
| `version` | `char*` | No | The version identifier for this release (e.g., 'v1.2.3' or a short commit hash). |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* release = linear_release(client, NULL);
voxgig_value* result = release->vt->create(release, cmap(9,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "currentProgress", v_str("example_currentProgress"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "issueCount", v_num(1),  // int64_t
    "name", v_str("example_name"),  // char*
    "progressHistory", v_str("example_progressHistory"),  // voxgig_value*
    "slugId", v_str("example_slugId"),  // char*
    "updatedAt", v_str("example_updatedAt"),  // voxgig_value*
    "url", v_str("example_url"))  // char*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* release = linear_release(client, NULL);
voxgig_value* results = release->vt->list(release, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* release = linear_release(client, NULL);
voxgig_value* result = release->vt->load(release, cmap(1, "id", v_str("release_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* release = linear_release(client, NULL);
voxgig_value* result = release->vt->remove(release, cmap(1, "id", v_str("release_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* release = linear_release(client, NULL);
voxgig_value* result = release->vt->update(release, cmap(1, "id", v_str("release_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `Release` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## ReleaseNote

```c
Entity* release_note = linear_release_note(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `documentContent` | `voxgig_value* (map)` | No | Document content backing the release note body. |
| `firstRelease` | `voxgig_value* (map)` | No | The earliest release covered by this note. |
| `generationStatus` | `char*` | No | Generation status when these release notes are being auto-generated: `pending` while the LLM call is running, `completed` once it lands. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `lastRelease` | `voxgig_value* (map)` | No | The most recent release covered by this note. |
| `pipeline` | `voxgig_value* (map)` | No | The release pipeline that this note belongs to. |
| `releaseCount` | `int64_t` | Yes | The number of releases covered by this note. |
| `slugId` | `char*` | Yes | The release note's unique URL slug, used to construct human-readable URLs for the note. |
| `title` | `char*` | No | User-supplied title for the release note. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | Yes | The URL to the release note page in the Linear app. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* release_note = linear_release_note(client, NULL);
voxgig_value* result = release_note->vt->create(release_note, cmap(6,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "releaseCount", v_num(1),  // int64_t
    "slugId", v_str("example_slugId"),  // char*
    "updatedAt", v_str("example_updatedAt"),  // voxgig_value*
    "url", v_str("example_url"))  // char*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* release_note = linear_release_note(client, NULL);
voxgig_value* results = release_note->vt->list(release_note, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* release_note = linear_release_note(client, NULL);
voxgig_value* result = release_note->vt->load(release_note, cmap(1, "id", v_str("release_note_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* release_note = linear_release_note(client, NULL);
voxgig_value* result = release_note->vt->remove(release_note, cmap(1, "id", v_str("release_note_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* release_note = linear_release_note(client, NULL);
voxgig_value* result = release_note->vt->update(release_note, cmap(1, "id", v_str("release_note_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `ReleaseNote` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## ReleasePipeline

```c
Entity* release_pipeline = linear_release_pipeline(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approximateReleaseCount` | `int64_t` | Yes | The approximate number of non-archived releases in this pipeline. |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `autoGenerateReleaseNotesOnCompletion` | `bool` | Yes | Whether to automatically generate a release note when a release is completed. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `includePathPatterns` | `char*` | Yes | Glob patterns to filter commits by file path. |
| `isProduction` | `bool` | Yes | Whether this pipeline targets a production environment. |
| `latestReleaseNote` | `voxgig_value* (map)` | No | The release note in this pipeline whose covered range ends with the most recent release. |
| `name` | `char*` | Yes | The name of the pipeline. |
| `releaseNoteTemplate` | `voxgig_value* (map)` | No | The document template used to define the release notes format for this pipeline. |
| `rolloverIssuesOnCompletion` | `bool` | Yes | Whether completing a scheduled release moves its open issues to the next release. |
| `slugId` | `char*` | Yes | The pipeline's unique slug identifier, used in URLs and for lookup by human-readable identifier instead of UUID. |
| `trashed` | `bool` | No | A flag that indicates whether the pipeline is in the trash bin. |
| `type` | `char*` | Yes | The type of the pipeline, which determines how releases are created and managed. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | Yes | The URL to the release pipeline's releases list in the Linear app. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* release_pipeline = linear_release_pipeline(client, NULL);
voxgig_value* result = release_pipeline->vt->create(release_pipeline, cmap(12,
    "approximateReleaseCount", v_num(1),  // int64_t
    "autoGenerateReleaseNotesOnCompletion", v_bool(true),  // bool
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "includePathPatterns", v_str("example_includePathPatterns"),  // char*
    "isProduction", v_bool(true),  // bool
    "name", v_str("example_name"),  // char*
    "rolloverIssuesOnCompletion", v_bool(true),  // bool
    "slugId", v_str("example_slugId"),  // char*
    "type", v_str("example_type"),  // char*
    "updatedAt", v_str("example_updatedAt"),  // voxgig_value*
    "url", v_str("example_url"))  // char*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* release_pipeline = linear_release_pipeline(client, NULL);
voxgig_value* results = release_pipeline->vt->list(release_pipeline, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* release_pipeline = linear_release_pipeline(client, NULL);
voxgig_value* result = release_pipeline->vt->load(release_pipeline, cmap(1, "id", v_str("release_pipeline_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* release_pipeline = linear_release_pipeline(client, NULL);
voxgig_value* result = release_pipeline->vt->remove(release_pipeline, cmap(1, "id", v_str("release_pipeline_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* release_pipeline = linear_release_pipeline(client, NULL);
voxgig_value* result = release_pipeline->vt->update(release_pipeline, cmap(1, "id", v_str("release_pipeline_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `ReleasePipeline` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## ReleaseStage

```c
Entity* release_stage = linear_release_stage(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `color` | `char*` | Yes | The display color of the stage as a HEX string (e.g., '#0f783c'), used for visual representation in the UI. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `frozen` | `bool` | Yes | Whether this stage is frozen. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `name` | `char*` | Yes | The name of the stage. |
| `pipeline` | `voxgig_value* (map)` | No | The release pipeline that this stage belongs to. |
| `position` | `double` | Yes | The position of the stage within its pipeline, used for ordering stages in the UI. |
| `type` | `char*` | Yes | The lifecycle type of the stage (planned, started, completed, or canceled). |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* release_stage = linear_release_stage(client, NULL);
voxgig_value* result = release_stage->vt->create(release_stage, cmap(8,
    "color", v_str("example_color"),  // char*
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "frozen", v_bool(true),  // bool
    "id", v_str("example_id"),  // char*
    "name", v_str("example_name"),  // char*
    "position", v_num(1),  // double
    "type", v_str("example_type"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* release_stage = linear_release_stage(client, NULL);
voxgig_value* results = release_stage->vt->list(release_stage, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* release_stage = linear_release_stage(client, NULL);
voxgig_value* result = release_stage->vt->load(release_stage, cmap(1, "id", v_str("release_stage_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* release_stage = linear_release_stage(client, NULL);
voxgig_value* result = release_stage->vt->update(release_stage, cmap(1, "id", v_str("release_stage_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `ReleaseStage` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## Roadmap

```c
Entity* roadmap = linear_roadmap(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `color` | `char*` | No | The roadmap's color. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | No | The user who created the roadmap. |
| `description` | `char*` | No | The description of the roadmap. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `name` | `char*` | Yes | The name of the roadmap. |
| `organization` | `voxgig_value* (map)` | No | The workspace of the roadmap. |
| `owner` | `voxgig_value* (map)` | No | The user who owns the roadmap. |
| `slugId` | `char*` | Yes | The roadmap's unique URL slug. |
| `sortOrder` | `double` | Yes | The sort order of the roadmap within the workspace. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | Yes | The canonical url for the roadmap. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* roadmap = linear_roadmap(client, NULL);
voxgig_value* result = roadmap->vt->create(roadmap, cmap(7,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "name", v_str("example_name"),  // char*
    "slugId", v_str("example_slugId"),  // char*
    "sortOrder", v_num(1),  // double
    "updatedAt", v_str("example_updatedAt"),  // voxgig_value*
    "url", v_str("example_url"))  // char*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* roadmap = linear_roadmap(client, NULL);
voxgig_value* results = roadmap->vt->list(roadmap, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* roadmap = linear_roadmap(client, NULL);
voxgig_value* result = roadmap->vt->load(roadmap, cmap(1, "id", v_str("roadmap_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* roadmap = linear_roadmap(client, NULL);
voxgig_value* result = roadmap->vt->remove(roadmap, cmap(1, "id", v_str("roadmap_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* roadmap = linear_roadmap(client, NULL);
voxgig_value* result = roadmap->vt->update(roadmap, cmap(1, "id", v_str("roadmap_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `Roadmap` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## RoadmapToProject

```c
Entity* roadmap_to_project = linear_roadmap_to_project(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `project` | `voxgig_value* (map)` | No | The project that the roadmap is associated with. |
| `roadmap` | `voxgig_value* (map)` | No | The roadmap that the project is associated with. |
| `sortOrder` | `char*` | Yes | The sort order of the project within the roadmap. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* roadmap_to_project = linear_roadmap_to_project(client, NULL);
voxgig_value* result = roadmap_to_project->vt->create(roadmap_to_project, cmap(4,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "sortOrder", v_str("example_sortOrder"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* roadmap_to_project = linear_roadmap_to_project(client, NULL);
voxgig_value* results = roadmap_to_project->vt->list(roadmap_to_project, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* roadmap_to_project = linear_roadmap_to_project(client, NULL);
voxgig_value* result = roadmap_to_project->vt->load(roadmap_to_project, cmap(1, "id", v_str("roadmap_to_project_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* roadmap_to_project = linear_roadmap_to_project(client, NULL);
voxgig_value* result = roadmap_to_project->vt->remove(roadmap_to_project, cmap(1, "id", v_str("roadmap_to_project_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* roadmap_to_project = linear_roadmap_to_project(client, NULL);
voxgig_value* result = roadmap_to_project->vt->update(roadmap_to_project, cmap(1, "id", v_str("roadmap_to_project_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `RoadmapToProject` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## SlaConfiguration

```c
Entity* sla_configuration = linear_sla_configuration(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conditions` | `voxgig_value*` | Yes | The workflow conditions that determine when this SLA rule applies. |
| `id` | `char*` | Yes | The identifier of the SLA rule. |
| `name` | `char*` | Yes | The name of the SLA rule. |
| `removesSla` | `bool` | Yes | Whether the rule removes an SLA instead of setting one. |
| `sla` | `double` | No | The SLA value configured by the rule, expressed in milliseconds or business days depending on the day-count type. |
| `slaType` | `char*` | No | The SLA type used when the rule sets an SLA. |
| `startMode` | `char*` | No | When SLA timing begins. |

### Operations

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* sla_configuration = linear_sla_configuration(client, NULL);
voxgig_value* results = sla_configuration->vt->list(sla_configuration, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `SlaConfiguration` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## SsoUrlFromEmailResponse

```c
Entity* sso_url_from_email_response = linear_sso_url_from_email_response(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `samlSsoUrl` | `char*` | Yes | SAML SSO sign-in URL. |
| `success` | `bool` | Yes | Whether the operation was successful. |

### Operations

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* sso_url_from_email_response = linear_sso_url_from_email_response(client, NULL);
voxgig_value* result = sso_url_from_email_response->vt->load(sso_url_from_email_response, cmap(2, "email", v_str("email"), "type", v_str("type")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `SsoUrlFromEmailResponse` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## Team

```c
Entity* team = linear_team(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeCycle` | `voxgig_value* (map)` | No | Team's currently active cycle. |
| `aiDiscussionSummariesEnabled` | `bool` | Yes | Whether to enable AI discussion summaries for issues in this team. |
| `aiThreadSummariesEnabled` | `bool` | Yes | Whether to enable resolved thread AI summaries. |
| `allMembersCanJoin` | `bool` | No | Whether all members in the workspace can join the team. |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `autoArchivePeriod` | `double` | Yes | Period after which automatically closed, completed, and duplicate issues are automatically archived in months. |
| `autoCloseChildIssues` | `bool` | No | Whether child issues should automatically close when their parent issue is closed |
| `autoCloseParentIssues` | `bool` | No | Whether parent issues should automatically close when all child issues are closed |
| `autoClosePeriod` | `double` | No | Period after which issues are automatically closed in months. |
| `autoCloseStateId` | `char*` | No | The canceled workflow state which auto closed issues will be set to. |
| `color` | `char*` | No | The team's color. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `currentProgress` | `voxgig_value*` | Yes | [Internal] The current progress of the team. |
| `cycleCalenderUrl` | `char*` | Yes | Calendar feed URL (iCal) for cycles. |
| `cycleCooldownTime` | `double` | Yes | The cooldown time after each cycle in weeks. |
| `cycleDuration` | `double` | Yes | The duration of each cycle in weeks. |
| `cycleIssueAutoAssignCompleted` | `bool` | Yes | Auto assign completed issues to current cycle. |
| `cycleIssueAutoAssignStarted` | `bool` | Yes | Auto assign started issues to current cycle. |
| `cycleLockToActive` | `bool` | Yes | Auto assign issues to current cycle if in active status. |
| `cycleStartDay` | `double` | Yes | The day of the week that a new cycle starts (0 = Sunday, 1 = Monday, ..., 6 = Saturday). |
| `cyclesEnabled` | `bool` | Yes | Whether the team uses cycles for sprint-style issue management. |
| `defaultIssueEstimate` | `double` | Yes | What to use as a default estimate for unestimated issues. |
| `defaultIssueState` | `voxgig_value* (map)` | No | The default workflow state into which issues are set when they are opened by team members. |
| `defaultProjectTemplate` | `voxgig_value* (map)` | No | The default template to use for new projects created for the team. |
| `defaultTemplateForMembers` | `voxgig_value* (map)` | No | The default template to use for new issues created by members of the team. |
| `defaultTemplateForNonMembers` | `voxgig_value* (map)` | No | The default template to use for new issues created by non-members of the team. |
| `description` | `char*` | No | The team's description. |
| `displayName` | `char*` | Yes | The name of the team including its parent team name if it has one. |
| `groupIssueHistory` | `bool` | Yes | Whether to group recent issue history entries. |
| `icon` | `char*` | No | The icon of the team. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `inheritIssueEstimation` | `bool` | Yes | Whether the team should inherit its estimation settings from its parent. |
| `inheritProjectStatuses` | `bool` | Yes | [Internal] Whether the team should inherit its project statuses from its parent team, or from the workspace when it has no parent. |
| `inheritSlackAutoCreateProjectChannel` | `bool` | Yes | [Internal] Whether the team should inherit its Slack auto-create project channel setting from its parent. |
| `inheritWorkflowStatuses` | `bool` | Yes | Whether the team should inherit its workflow statuses from its parent. |
| `initiativesEnabled` | `bool` | Yes | Whether team initiatives are enabled and shown in the team's sidebar. |
| `integrationsSettings` | `voxgig_value* (map)` | No | Settings for all integrations associated with that team. |
| `issueCount` | `int64_t` | Yes | The total number of issues in the team. |
| `issueEstimationAllowZero` | `bool` | Yes | Whether to allow zeros in issues estimates. |
| `issueEstimationExtended` | `bool` | Yes | Whether to add additional points to the estimate scale. |
| `issueEstimationType` | `char*` | Yes | The issue estimation type to use. |
| `joinByDefault` | `bool` | No | [Internal] Whether new users should join this team by default. |
| `key` | `char*` | Yes | The team's unique key, used as a prefix in issue identifiers (e.g., 'ENG' in 'ENG-123') and in URLs. |
| `ledInitiativeCount` | `int64_t` | Yes | The number of initiatives led by this team that would be deleted along with it. |
| `name` | `char*` | Yes | The team's name. |
| `organization` | `voxgig_value* (map)` | No | The workspace that the team belongs to. |
| `parent` | `voxgig_value* (map)` | No | The team's parent team. |
| `progressHistory` | `voxgig_value*` | Yes | [Internal] The progress history of the team. |
| `requirePriorityToLeaveTriage` | `bool` | Yes | Whether an issue needs to have a priority set before leaving triage. |
| `restrictedBy` | `voxgig_value* (map)` | No | [Internal] For restricted teams, the enclosing private team that forms the visibility boundary. |
| `restrictedById` | `char*` | No | [Internal] The identifier of the enclosing private team that forms the visibility boundary for restricted teams. |
| `retiredAt` | `voxgig_value*` | No | The time at which the team was retired. |
| `scimGroupName` | `char*` | No | The SCIM group name for the team. |
| `scimManaged` | `bool` | Yes | Whether the team is managed by a SCIM integration. |
| `securitySettings` | `voxgig_value*` | Yes | Security settings for the team, including role-based restrictions for issue sharing, label management, member management, template management, and agent skills. |
| `setIssueSortOrderOnStateChange` | `char*` | Yes | Where to move issues when changing state. |
| `slackAutoCreateProjectChannel` | `bool` | No | [Internal] Whether to automatically create a Slack channel when a new project is created in this team. |
| `timezone` | `char*` | Yes | The timezone of the team. |
| `triageEnabled` | `bool` | Yes | Whether triage mode is enabled for the team. |
| `triageIssueState` | `voxgig_value* (map)` | No | The workflow state into which issues are set when they are opened by non-team members or integrations if triage is enabled. |
| `triageResponsibility` | `voxgig_value* (map)` | No | Team's triage responsibility. |
| `upcomingCycleCount` | `double` | Yes | How many upcoming cycles to create. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |
| `visibility` | `char*` | Yes | The visibility of the team. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* team = linear_team(client, NULL);
voxgig_value* result = team->vt->create(team, cmap(39,
    "aiDiscussionSummariesEnabled", v_bool(true),  // bool
    "aiThreadSummariesEnabled", v_bool(true),  // bool
    "autoArchivePeriod", v_num(1),  // double
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "currentProgress", v_str("example_currentProgress"),  // voxgig_value*
    "cycleCalenderUrl", v_str("example_cycleCalenderUrl"),  // char*
    "cycleCooldownTime", v_num(1),  // double
    "cycleDuration", v_num(1),  // double
    "cycleIssueAutoAssignCompleted", v_bool(true),  // bool
    "cycleIssueAutoAssignStarted", v_bool(true),  // bool
    "cycleLockToActive", v_bool(true),  // bool
    "cycleStartDay", v_num(1),  // double
    "cyclesEnabled", v_bool(true),  // bool
    "defaultIssueEstimate", v_num(1),  // double
    "displayName", v_str("example_displayName"),  // char*
    "groupIssueHistory", v_bool(true),  // bool
    "id", v_str("example_id"),  // char*
    "inheritIssueEstimation", v_bool(true),  // bool
    "inheritProjectStatuses", v_bool(true),  // bool
    "inheritSlackAutoCreateProjectChannel", v_bool(true),  // bool
    "inheritWorkflowStatuses", v_bool(true),  // bool
    "initiativesEnabled", v_bool(true),  // bool
    "issueCount", v_num(1),  // int64_t
    "issueEstimationAllowZero", v_bool(true),  // bool
    "issueEstimationExtended", v_bool(true),  // bool
    "issueEstimationType", v_str("example_issueEstimationType"),  // char*
    "key", v_str("example_key"),  // char*
    "ledInitiativeCount", v_num(1),  // int64_t
    "name", v_str("example_name"),  // char*
    "progressHistory", v_str("example_progressHistory"),  // voxgig_value*
    "requirePriorityToLeaveTriage", v_bool(true),  // bool
    "scimManaged", v_bool(true),  // bool
    "securitySettings", v_str("example_securitySettings"),  // voxgig_value*
    "setIssueSortOrderOnStateChange", v_str("example_setIssueSortOrderOnStateChange"),  // char*
    "timezone", v_str("example_timezone"),  // char*
    "triageEnabled", v_bool(true),  // bool
    "upcomingCycleCount", v_num(1),  // double
    "updatedAt", v_str("example_updatedAt"),  // voxgig_value*
    "visibility", v_str("example_visibility"))  // char*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* team = linear_team(client, NULL);
voxgig_value* results = team->vt->list(team, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* team = linear_team(client, NULL);
voxgig_value* result = team->vt->load(team, cmap(1, "id", v_str("team_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* team = linear_team(client, NULL);
voxgig_value* result = team->vt->remove(team, cmap(1, "id", v_str("team_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* team = linear_team(client, NULL);
voxgig_value* result = team->vt->update(team, cmap(1, "id", v_str("team_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `Team` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## TeamMembership

```c
Entity* team_membership = linear_team_membership(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `owner` | `bool` | Yes | Whether the user is an owner of the team. |
| `sortOrder` | `double` | Yes | The sort order of this team in the user's personal team list. |
| `team` | `voxgig_value* (map)` | No | The team that the membership is associated with. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `voxgig_value* (map)` | No | The user that the membership is associated with. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* team_membership = linear_team_membership(client, NULL);
voxgig_value* result = team_membership->vt->create(team_membership, cmap(5,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "owner", v_bool(true),  // bool
    "sortOrder", v_num(1),  // double
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* team_membership = linear_team_membership(client, NULL);
voxgig_value* results = team_membership->vt->list(team_membership, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* team_membership = linear_team_membership(client, NULL);
voxgig_value* result = team_membership->vt->load(team_membership, cmap(1, "id", v_str("team_membership_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* team_membership = linear_team_membership(client, NULL);
voxgig_value* result = team_membership->vt->remove(team_membership, cmap(1, "id", v_str("team_membership_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* team_membership = linear_team_membership(client, NULL);
voxgig_value* result = team_membership->vt->update(team_membership, cmap(1, "id", v_str("team_membership_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `TeamMembership` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## Template

```c
Entity* template = linear_template(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `color` | `char*` | No | The hex color of the template icon. |
| `content` | `char*` | No | The template's content in markdown format: the body it pre-fills on the entity it creates. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | No | The user who created the template. |
| `description` | `char*` | No | A description of what the template is used for. |
| `hasFormFields` | `bool` | Yes | [Internal] Whether the template has form fields |
| `icon` | `char*` | No | The icon of the template, either a decorative icon type or an emoji string. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `inheritedFrom` | `voxgig_value* (map)` | No | The parent team template this template was inherited from. |
| `lastAppliedAt` | `voxgig_value*` | No | The date when the template was last applied to create or update an entity. |
| `lastUpdatedBy` | `voxgig_value* (map)` | No | The user who last updated the template. |
| `name` | `char*` | Yes | The name of the template. |
| `organization` | `voxgig_value* (map)` | No | The workspace that owns this template. |
| `pipeline` | `voxgig_value* (map)` | No | The release pipeline this template is bound to. |
| `sortOrder` | `double` | Yes | The sort order of the template within the templates list. |
| `team` | `voxgig_value* (map)` | No | The team that the template is associated with. |
| `templateData` | `voxgig_value*` | Yes | The template data as a JSON-encoded string containing the pre-filled attributes for the entity type (e.g., issue fields, project configuration, or document content). |
| `type` | `char*` | Yes | The entity type this template is for, such as 'issue', 'project', or 'document'. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* template = linear_template(client, NULL);
voxgig_value* result = template->vt->create(template, cmap(8,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "hasFormFields", v_bool(true),  // bool
    "id", v_str("example_id"),  // char*
    "name", v_str("example_name"),  // char*
    "sortOrder", v_num(1),  // double
    "templateData", v_str("example_templateData"),  // voxgig_value*
    "type", v_str("example_type"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* template = linear_template(client, NULL);
voxgig_value* results = template->vt->list(template, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* template = linear_template(client, NULL);
voxgig_value* result = template->vt->load(template, cmap(1, "id", v_str("template_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* template = linear_template(client, NULL);
voxgig_value* result = template->vt->remove(template, cmap(1, "id", v_str("template_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* template = linear_template(client, NULL);
voxgig_value* result = template->vt->update(template, cmap(1, "id", v_str("template_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `Template` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## TimeSchedule

```c
Entity* time_schedule = linear_time_schedule(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `externalId` | `char*` | No | The identifier of the external schedule. |
| `externalUrl` | `char*` | No | The URL to the external schedule. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `integration` | `voxgig_value* (map)` | No | The identifier of the Linear integration populating the schedule. |
| `name` | `char*` | Yes | The name of the schedule. |
| `organization` | `voxgig_value* (map)` | No | The workspace of the schedule. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* time_schedule = linear_time_schedule(client, NULL);
voxgig_value* result = time_schedule->vt->create(time_schedule, cmap(4,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "name", v_str("example_name"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* time_schedule = linear_time_schedule(client, NULL);
voxgig_value* results = time_schedule->vt->list(time_schedule, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* time_schedule = linear_time_schedule(client, NULL);
voxgig_value* result = time_schedule->vt->load(time_schedule, cmap(1, "id", v_str("time_schedule_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* time_schedule = linear_time_schedule(client, NULL);
voxgig_value* result = time_schedule->vt->remove(time_schedule, cmap(1, "id", v_str("time_schedule_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* time_schedule = linear_time_schedule(client, NULL);
voxgig_value* result = time_schedule->vt->update(time_schedule, cmap(1, "id", v_str("time_schedule_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `TimeSchedule` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## TriageResponsibility

```c
Entity* triage_responsibility = linear_triage_responsibility(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `char*` | Yes | The action to take when an issue is added to triage. |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `currentUser` | `voxgig_value* (map)` | No | The user currently responsible for triage. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `team` | `voxgig_value* (map)` | No | The team to which the triage responsibility belongs to. |
| `timeSchedule` | `voxgig_value* (map)` | No | The time schedule used for scheduling. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* triage_responsibility = linear_triage_responsibility(client, NULL);
voxgig_value* result = triage_responsibility->vt->create(triage_responsibility, cmap(4,
    "action", v_str("example_action"),  // char*
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* triage_responsibility = linear_triage_responsibility(client, NULL);
voxgig_value* results = triage_responsibility->vt->list(triage_responsibility, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* triage_responsibility = linear_triage_responsibility(client, NULL);
voxgig_value* result = triage_responsibility->vt->load(triage_responsibility, cmap(1, "id", v_str("triage_responsibility_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* triage_responsibility = linear_triage_responsibility(client, NULL);
voxgig_value* result = triage_responsibility->vt->remove(triage_responsibility, cmap(1, "id", v_str("triage_responsibility_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* triage_responsibility = linear_triage_responsibility(client, NULL);
voxgig_value* result = triage_responsibility->vt->update(triage_responsibility, cmap(1, "id", v_str("triage_responsibility_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `TriageResponsibility` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## UploadFile

```c
Entity* upload_file = linear_upload_file(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assetUrl` | `char*` | Yes | The permanent asset URL where the file will be accessible after upload. |
| `contentType` | `char*` | Yes | The content type. |
| `filename` | `char*` | Yes | The filename. |
| `metaData` | `voxgig_value*` | No | Optional metadata associated with the upload, such as the related issue or comment ID. |
| `size` | `int64_t` | Yes | The size of the uploaded file. |
| `uploadUrl` | `char*` | Yes | The pre-signed URL to which the file should be uploaded via a PUT request. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* upload_file = linear_upload_file(client, NULL);
voxgig_value* result = upload_file->vt->create(upload_file, cmap(6,
    "content_type", v_str("example_content_type"),  // char*
    "filename", v_str("example_filename"),  // char*
    "size", v_num(1),  // int64_t
    "assetUrl", v_str("example_assetUrl"),  // char*
    "contentType", v_str("example_contentType"),  // char*
    "uploadUrl", v_str("example_uploadUrl"))  // char*
, NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `UploadFile` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## UsageAlert

```c
Entity* usage_alert = linear_usage_alert(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `metadata` | `voxgig_value*` | Yes | Type-specific snapshot captured when the alert was triggered, keyed by the alert type — for example the credit balance and threshold for a lowBalance alert. |
| `resolvedAt` | `voxgig_value*` | No | The time when the usage alert was resolved or archived. |
| `type` | `char*` | Yes | The kind of usage alert that was triggered. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* usage_alert = linear_usage_alert(client, NULL);
voxgig_value* results = usage_alert->vt->list(usage_alert, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* usage_alert = linear_usage_alert(client, NULL);
voxgig_value* result = usage_alert->vt->load(usage_alert, cmap(1, "id", v_str("usage_alert_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `UsageAlert` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## User

```c
Entity* user = linear_user(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Whether the user account is active or disabled (suspended). |
| `admin` | `bool` | Yes | Whether the user is a workspace administrator. |
| `app` | `bool` | Yes | Whether the user is an app. |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `avatarBackgroundColor` | `char*` | Yes | The background color of the avatar for users without set avatar. |
| `avatarUrl` | `char*` | No | An URL to the user's avatar image. |
| `calendarHash` | `char*` | No | [DEPRECATED] Hash for the user to be used in calendar URLs. |
| `canAccessAnyPublicTeam` | `bool` | Yes | Whether this user can access any public team in the workspace. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `createdIssueCount` | `int64_t` | Yes | Number of issues created. |
| `description` | `char*` | No | A short description of the user, such as their title or a brief bio. |
| `disableReason` | `char*` | No | The reason why the user account is disabled. |
| `displayName` | `char*` | Yes | The user's display (nick) name. |
| `email` | `char*` | Yes | The user's email address. |
| `gitHubUserId` | `char*` | No | The user's GitHub user ID. |
| `guest` | `bool` | Yes | Whether the user is a guest in the workspace and limited to accessing a subset of teams. |
| `hasGitHubCodeAccess` | `bool` | Yes | [Internal] Whether this user can access GitHub source code through Linear. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `identityProvider` | `voxgig_value* (map)` | No | [INTERNAL] Identity provider the user is managed by. |
| `initials` | `char*` | Yes | The initials of the user. |
| `isAssignable` | `bool` | Yes | Whether the user can be assigned to issues. |
| `isMe` | `bool` | Yes | Whether the user is the currently authenticated user. |
| `isMentionable` | `bool` | Yes | Whether the user is mentionable. |
| `lastSeen` | `voxgig_value*` | No | The last time the user was seen online. |
| `name` | `char*` | Yes | The user's full name. |
| `organization` | `voxgig_value* (map)` | No | The workspace that the user belongs to. |
| `owner` | `bool` | Yes | Whether the user is a workspace owner, which is the highest permission level. |
| `statusEmoji` | `char*` | No | The emoji representing the user's current status. |
| `statusLabel` | `char*` | No | The text label of the user's current status. |
| `statusUntilAt` | `voxgig_value*` | No | The date and time at which the user's current status should be automatically cleared. |
| `supportsAgentSessions` | `bool` | Yes | Whether this agent user supports agent sessions. |
| `timezone` | `char*` | No | The local timezone of the user. |
| `title` | `char*` | No | The user's job title. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | Yes | User's profile URL. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* user = linear_user(client, NULL);
voxgig_value* result = user->vt->create(user, cmap(21,
    "active", v_bool(true),  // bool
    "admin", v_bool(true),  // bool
    "app", v_bool(true),  // bool
    "avatarBackgroundColor", v_str("example_avatarBackgroundColor"),  // char*
    "canAccessAnyPublicTeam", v_bool(true),  // bool
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "createdIssueCount", v_num(1),  // int64_t
    "displayName", v_str("example_displayName"),  // char*
    "email", v_str("example_email"),  // char*
    "guest", v_bool(true),  // bool
    "hasGitHubCodeAccess", v_bool(true),  // bool
    "id", v_str("example_id"),  // char*
    "initials", v_str("example_initials"),  // char*
    "isAssignable", v_bool(true),  // bool
    "isMe", v_bool(true),  // bool
    "isMentionable", v_bool(true),  // bool
    "name", v_str("example_name"),  // char*
    "owner", v_bool(true),  // bool
    "supportsAgentSessions", v_bool(true),  // bool
    "updatedAt", v_str("example_updatedAt"),  // voxgig_value*
    "url", v_str("example_url"))  // char*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* user = linear_user(client, NULL);
voxgig_value* results = user->vt->list(user, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* user = linear_user(client, NULL);
voxgig_value* result = user->vt->load(user, cmap(1, "id", v_str("user_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* user = linear_user(client, NULL);
voxgig_value* result = user->vt->update(user, cmap(1, "id", v_str("user_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `User` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## UserSetting

```c
Entity* user_setting = linear_user_setting(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `autoAssignToSelf` | `bool` | Yes | Whether to auto-assign newly created issues to the current user by default. |
| `calendarHash` | `char*` | No | A unique hash for the user, used to construct secure calendar subscription URLs. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `feedLastSeenTime` | `voxgig_value*` | No | The user's last seen time for the pulse feed. |
| `feedSummarySchedule` | `char*` | No | The user's preferred schedule for receiving feed summary digests. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `pullRequestMergeStrategyPreference` | `char*` | No | [Internal] The user's preferred merge method for pull requests. |
| `showFullUserNames` | `bool` | Yes | Whether to show full user names instead of display names. |
| `subscribedToChangelog` | `bool` | Yes | Whether this user is subscribed to receive changelog emails about Linear product updates. |
| `subscribedToDPA` | `bool` | Yes | Whether this user is subscribed to receive Data Processing Agreement (DPA) related emails. |
| `subscribedToInviteAccepted` | `bool` | Yes | Whether this user is subscribed to receive email notifications when their workspace invitations are accepted. |
| `subscribedToPrivacyLegalUpdates` | `bool` | Yes | Whether this user is subscribed to receive emails about privacy policy and legal updates. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |
| `user` | `voxgig_value* (map)` | No | The user that these settings belong to. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* user_setting = linear_user_setting(client, NULL);
voxgig_value* result = user_setting->vt->create(user_setting, cmap(12,
    "category", v_str("example_category"),  // voxgig_value*
    "channel", v_str("example_channel"),  // voxgig_value*
    "subscribe", v_bool(true),  // bool
    "autoAssignToSelf", v_bool(true),  // bool
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "showFullUserNames", v_bool(true),  // bool
    "subscribedToChangelog", v_bool(true),  // bool
    "subscribedToDPA", v_bool(true),  // bool
    "subscribedToInviteAccepted", v_bool(true),  // bool
    "subscribedToPrivacyLegalUpdates", v_bool(true),  // bool
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* user_setting = linear_user_setting(client, NULL);
voxgig_value* result = user_setting->vt->load(user_setting, cmap(1, "id", v_str("user_setting_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* user_setting = linear_user_setting(client, NULL);
voxgig_value* result = user_setting->vt->update(user_setting, cmap(1, "id", v_str("user_setting_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `UserSetting` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## ViewPreference

```c
Entity* view_preference = linear_view_preference(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `type` | `char*` | Yes | The type of view preferences: "organization" for workspace-wide defaults or "user" for personal overrides. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |
| `viewType` | `char*` | Yes | The type of view these preferences apply to, such as board, cycle, project, customView, myIssues, etc. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* view_preference = linear_view_preference(client, NULL);
voxgig_value* result = view_preference->vt->create(view_preference, cmap(5,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "type", v_str("example_type"),  // char*
    "updatedAt", v_str("example_updatedAt"),  // voxgig_value*
    "viewType", v_str("example_viewType"))  // char*
, NULL, &err);
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* view_preference = linear_view_preference(client, NULL);
voxgig_value* result = view_preference->vt->load(view_preference, cmap(1, "view_type", v_str("view_type")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* view_preference = linear_view_preference(client, NULL);
voxgig_value* result = view_preference->vt->remove(view_preference, cmap(1, "id", v_str("id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* view_preference = linear_view_preference(client, NULL);
voxgig_value* result = view_preference->vt->update(view_preference, cmap(1, "id", v_str("id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `ViewPreference` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## Webhook

```c
Entity* webhook = linear_webhook(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allPublicTeams` | `bool` | Yes | Whether the webhook receives events from all public (non-private) teams in the organization, including teams created after the webhook was set up. |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | No | The user who created the webhook. |
| `enabled` | `bool` | Yes | Whether the webhook is enabled. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `label` | `char*` | No | A human-readable label for the webhook, used for identification in the UI. |
| `resourceTypes` | `char*` | Yes | The resource types this webhook is subscribed to (e.g., 'Issue', 'Comment', 'Project', 'Cycle'). |
| `secret` | `char*` | No | A secret token used to sign webhook payloads with HMAC-SHA256, allowing the recipient to verify that the payload originated from Linear and was not tampered with. |
| `team` | `voxgig_value* (map)` | No | The single team that the webhook is scoped to. |
| `teamIds` | `char*` | No | [INTERNAL] An array of team IDs that the webhook is subscribed to. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | No | The destination URL where webhook payloads will be sent via HTTP POST. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* webhook = linear_webhook(client, NULL);
voxgig_value* result = webhook->vt->create(webhook, cmap(6,
    "allPublicTeams", v_bool(true),  // bool
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "enabled", v_bool(true),  // bool
    "id", v_str("example_id"),  // char*
    "resourceTypes", v_str("example_resourceTypes"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* webhook = linear_webhook(client, NULL);
voxgig_value* results = webhook->vt->list(webhook, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* webhook = linear_webhook(client, NULL);
voxgig_value* result = webhook->vt->load(webhook, cmap(1, "id", v_str("webhook_id")), NULL, &err);
```

#### `vt->remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Remove the entity matching the given criteria. Sets `*err` on failure.

```c
Entity* webhook = linear_webhook(client, NULL);
voxgig_value* result = webhook->vt->remove(webhook, cmap(1, "id", v_str("webhook_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* webhook = linear_webhook(client, NULL);
voxgig_value* result = webhook->vt->update(webhook, cmap(1, "id", v_str("webhook_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `Webhook` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## WebhookFailureEvent

```c
Entity* webhook_failure_event = linear_webhook_failure_event(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `executionId` | `char*` | Yes | A stable identifier for the webhook delivery attempt. |
| `httpStatus` | `double` | No | The HTTP status code returned by the webhook recipient. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `responseOrError` | `char*` | No | The HTTP response body returned by the recipient, or the error message if the request failed before receiving a response. |
| `url` | `char*` | Yes | The URL that the webhook was trying to push to. |
| `webhook` | `voxgig_value* (map)` | No | The webhook that this failure event is associated with. |

### Operations

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* webhook_failure_event = linear_webhook_failure_event(client, NULL);
voxgig_value* results = webhook_failure_event->vt->list(webhook_failure_event, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `WebhookFailureEvent` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

Return the entity name.


---

## WorkflowState

```c
Entity* workflow_state = linear_workflow_state(client, NULL);
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archivedAt` | `voxgig_value*` | No | The time at which the entity was archived. |
| `color` | `char*` | Yes | The state's UI color as a HEX string. |
| `createdAt` | `voxgig_value*` | Yes | The time at which the entity was created. |
| `description` | `char*` | No | Description of the state. |
| `id` | `char*` | Yes | The unique identifier of the entity. |
| `inheritedFrom` | `voxgig_value* (map)` | No | The parent team's workflow state that this state was inherited from. |
| `name` | `char*` | Yes | The state's human-readable name (e.g., 'In Progress', 'Done', 'Backlog'). |
| `position` | `double` | Yes | The position of the state in the team's workflow. |
| `team` | `voxgig_value* (map)` | No | The team that this workflow state belongs to. |
| `type` | `char*` | Yes | The type of the state. |
| `updatedAt` | `voxgig_value*` | Yes | The last time at which the entity was meaningfully updated. |

### Operations

#### `vt->create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Create a new entity with the given data. Returns the created entity data and sets `*err` on failure.

```c
Entity* workflow_state = linear_workflow_state(client, NULL);
voxgig_value* result = workflow_state->vt->create(workflow_state, cmap(7,
    "color", v_str("example_color"),  // char*
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "name", v_str("example_name"),  // char*
    "position", v_num(1),  // double
    "type", v_str("example_type"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```

#### `vt->list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

List entities matching the given criteria. The match is optional — pass `NULL` to list all records. Returns a List.

```c
Entity* workflow_state = linear_workflow_state(client, NULL);
voxgig_value* results = workflow_state->vt->list(workflow_state, NULL, NULL, &err);
for (size_t i = 0; i < (size_t)voxgig_size(results); i++) {
    printf("%s\n", voxgig_to_json(voxgig_getelem(results, v_int(i), NULL)));
}
```

#### `vt->load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err)`

Load a single entity matching the given criteria. Returns the entity data and sets `*err` on failure.

```c
Entity* workflow_state = linear_workflow_state(client, NULL);
voxgig_value* result = workflow_state->vt->load(workflow_state, cmap(1, "id", v_str("workflow_state_id")), NULL, &err);
```

#### `vt->update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err)`

Update an existing entity. The data must include the entity id. Returns the updated entity data.

```c
Entity* workflow_state = linear_workflow_state(client, NULL);
voxgig_value* result = workflow_state->vt->update(workflow_state, cmap(1, "id", v_str("workflow_state_id")), NULL, &err);
```

### Common Methods

#### `voxgig_value* vt->data(Entity* e, voxgig_value* args)`

Get the entity data. Pass a map to set it.

#### `voxgig_value* vt->matchv(Entity* e, voxgig_value* args)`

Get the entity match criteria. Pass a map to set it.

#### `Entity* vt->make(Entity* e)`

Create a new `WorkflowState` entity instance with the same options.

#### `const char* vt->get_name(Entity* e)`

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

```c
LinearSDK* client = linear_sdk_new(cmap(1,
    "feature", cmap(8,
        "debug", cmap(1, "active", v_bool(true)),
        "idempotency", cmap(1, "active", v_bool(true)),
        "metrics", cmap(1, "active", v_bool(true)),
        "paging", cmap(1, "active", v_bool(true)),
        "ratelimit", cmap(1, "active", v_bool(true)),
        "retry", cmap(1, "active", v_bool(true)),
        "test", cmap(1, "active", v_bool(true)),
        "timeout", cmap(1, "active", v_bool(true)))
));
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

