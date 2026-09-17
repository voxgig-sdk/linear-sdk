# Linear C SDK



The C SDK for the Linear API — an entity-oriented client following idiomatic C conventions (explicit structs, function-pointer vtables, and a trailing `PNError**` out-param for errors).

The SDK exposes the API as capitalised, semantic **Entities** — for example `linear_access_key_release(client, NULL)` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
C has no central package registry — a release is the git tag
(`c/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/linear-sdk/releases)). Build from a
source checkout with the bundled `Makefile`; the voxgig struct library is
vendored under `utility/struct`, so there are no external dependencies to
fetch:

```bash
cd c && make          # builds libsdk.a
cd c && make test     # builds + runs the test binaries
```

Link your program against `libsdk.a` and include `core/api.h`:

```bash
cc -I c/core -I c/utility/struct \
   myapp.c c/libsdk.a -lm -o myapp
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```c
#include "core/api.h"

LinearSDK* client = linear_sdk_new(cmap(1,
    "apikey", v_str(getenv("LINEAR_APIKEY"))));
PNError* err = NULL;
```

### 2. List accesskeyrelease records

`list()` returns a List of records and sets `*err` on failure — check
`err` after the call.

```c
Entity* access_key_release = linear_access_key_release(client, NULL);
voxgig_value* access_key_releases = access_key_release->vt->list(access_key_release, NULL, NULL, &err);
if (err) {
    fprintf(stderr, "list failed: %s\n", err->msg);
} else {
    for (size_t i = 0; i < (size_t)voxgig_size(access_key_releases); i++) {
        printf("%s\n", voxgig_to_json(voxgig_getelem(access_key_releases, v_int(i), NULL)));
    }
}
```

### 3. Load an accesskeyrelease

`load()` returns the bare record and sets `*err` on failure.

```c
voxgig_value* access_key_release_rec = access_key_release->vt->load(access_key_release, cmap(1, "id", v_str("example_id")), NULL, &err);
if (err) {
    fprintf(stderr, "load failed: %s\n", err->msg);
} else {
    printf("%s\n", voxgig_to_json(access_key_release_rec));
}
```

### 4. Create, update, and remove

```c
// Create — returns the bare created record
voxgig_value* created = access_key_release->vt->create(access_key_release, cmap(4, "createdAt", v_str("example_createdAt"), "id", v_str("example_id"), "name", v_str("example_name"), "url", v_str("example_url")), NULL, &err);

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

For endpoints not covered by entity operations:

```c
PNError* err = NULL;
voxgig_value* result = sdk_direct(client, cmap(3,
    "path", v_str("/api/resource/{id}"),
    "method", v_str("GET"),
    "params", cmap(1, "id", v_str("example"))), &err);

if (voxgig_as_bool(getp(result, "ok"))) {
    printf("%lld\n", (long long)to_int(getp(result, "status")));  // 200
    printf("%s\n", voxgig_to_json(getp(result, "data")));         // response body
} else {
    // A non-2xx response carries status + data (the error body); a
    // transport-level failure carries err instead. Only one is present.
    printf("%s\n", voxgig_to_json(getp(result, "err")));
}
```

`sdk_direct()` never sets `*err` for a non-2xx response — it always returns
a result map you branch on via `getp(result, "ok")`.

### Prepare a request without sending it

```c
PNError* err = NULL;
voxgig_value* fetchdef = sdk_prepare(client, cmap(3,
    "path", v_str("/api/resource/{id}"),
    "method", v_str("DELETE"),
    "params", cmap(1, "id", v_str("example"))), &err);

printf("%s\n", get_str(fetchdef, "url"));
printf("%s\n", get_str(fetchdef, "method"));
printf("%s\n", voxgig_to_json(getp(fetchdef, "headers")));
```

### Use test mode

Create a mock client for unit testing — no server required:

```c
LinearSDK* client = test_sdk(NULL, NULL);
PNError* err = NULL;

// Entity ops return the bare record and set *err on failure.
Entity* agent_activity = linear_agent_activity(client, NULL);
voxgig_value* agent_activity_rec = agent_activity->vt->list(agent_activity, NULL, NULL, &err);
// agent_activity_rec contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function (the same shape the test
transport uses):

```c
static voxgig_value* mock_fetch(void* ud, voxgig_value* args) {
    (void)ud; (void)args;
    return cmap(4,
        "status", v_num(200),
        "statusText", v_str("OK"),
        "headers", v_map(),
        "json", json_thunk(cmap(1, "id", v_str("mock01"))));
}

LinearSDK* client = linear_sdk_new(cmap(2,
    "base", v_str("http://localhost:8080"),
    "system", cmap(1, "fetch", vfn(mock_fetch, NULL))));
```

### Point at a different server

Override the base URL to reach a local or staging server:

```c
LinearSDK* client = linear_sdk_new(cmap(1,
    "base", v_str("http://localhost:8080")));
```

### Run live tests

Create a `.env.local` file at the project root:

```
LINEAR_TEST_LIVE=TRUE
LINEAR_APIKEY=<your-key>
```

Then run:

```bash
cd c && make test
```


## Reference

### LinearSDK

```c
#include "core/api.h"

LinearSDK* client = linear_sdk_new(options);
```

Creates a new SDK client. `options` is a `voxgig_value*` map (`NULL` for
none) carrying any of the following keys:

| Option | Value type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `map` | Feature activation flags. |
| `system` | `map` | System overrides (e.g. a custom `fetch`). |

### test_sdk

```c
LinearSDK* client = test_sdk(testopts, sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be
`NULL`.

### LinearSDK functions

| Function | Signature | Description |
| --- | --- | --- |
| `sdk_prepare` | `(LinearSDK*, fetchargs, PNError**) -> voxgig_value*` | Build an HTTP request definition without sending. |
| `sdk_direct` | `(LinearSDK*, fetchargs, PNError**) -> voxgig_value*` | Build and send an HTTP request. Returns a result map (branch on `ok`). |
| `linear_access_key_release` | `(LinearSDK*, entopts) -> Entity*` | Create an AccessKeyRelease entity instance. |
| `linear_access_key_release_pipeline` | `(LinearSDK*, entopts) -> Entity*` | Create an AccessKeyReleasePipeline entity instance. |
| `linear_agent_activity` | `(LinearSDK*, entopts) -> Entity*` | Create an AgentActivity entity instance. |
| `linear_agent_session` | `(LinearSDK*, entopts) -> Entity*` | Create an AgentSession entity instance. |
| `linear_agent_skill` | `(LinearSDK*, entopts) -> Entity*` | Create an AgentSkill entity instance. |
| `linear_application` | `(LinearSDK*, entopts) -> Entity*` | Create an Application entity instance. |
| `linear_attachment` | `(LinearSDK*, entopts) -> Entity*` | Create an Attachment entity instance. |
| `linear_audit_entry` | `(LinearSDK*, entopts) -> Entity*` | Create an AuditEntry entity instance. |
| `linear_audit_entry_type` | `(LinearSDK*, entopts) -> Entity*` | Create an AuditEntryType entity instance. |
| `linear_auth_resolver_response` | `(LinearSDK*, entopts) -> Entity*` | Create an AuthResolverResponse entity instance. |
| `linear_authentication_session_response` | `(LinearSDK*, entopts) -> Entity*` | Create an AuthenticationSessionResponse entity instance. |
| `linear_comment` | `(LinearSDK*, entopts) -> Entity*` | Create a Comment entity instance. |
| `linear_create_or_join_organization_response` | `(LinearSDK*, entopts) -> Entity*` | Create a CreateOrJoinOrganizationResponse entity instance. |
| `linear_custom_view` | `(LinearSDK*, entopts) -> Entity*` | Create a CustomView entity instance. |
| `linear_customer` | `(LinearSDK*, entopts) -> Entity*` | Create a Customer entity instance. |
| `linear_customer_need` | `(LinearSDK*, entopts) -> Entity*` | Create a CustomerNeed entity instance. |
| `linear_customer_status` | `(LinearSDK*, entopts) -> Entity*` | Create a CustomerStatus entity instance. |
| `linear_customer_tier` | `(LinearSDK*, entopts) -> Entity*` | Create a CustomerTier entity instance. |
| `linear_cycle` | `(LinearSDK*, entopts) -> Entity*` | Create a Cycle entity instance. |
| `linear_diff` | `(LinearSDK*, entopts) -> Entity*` | Create a Diff entity instance. |
| `linear_document` | `(LinearSDK*, entopts) -> Entity*` | Create a Document entity instance. |
| `linear_document_search_result` | `(LinearSDK*, entopts) -> Entity*` | Create a DocumentSearchResult entity instance. |
| `linear_email_intake_address` | `(LinearSDK*, entopts) -> Entity*` | Create an EmailIntakeAddress entity instance. |
| `linear_email_user_account_auth_challenge_response` | `(LinearSDK*, entopts) -> Entity*` | Create an EmailUserAccountAuthChallengeResponse entity instance. |
| `linear_emoji` | `(LinearSDK*, entopts) -> Entity*` | Create an Emoji entity instance. |
| `linear_entity_external_link` | `(LinearSDK*, entopts) -> Entity*` | Create an EntityExternalLink entity instance. |
| `linear_external_user` | `(LinearSDK*, entopts) -> Entity*` | Create an ExternalUser entity instance. |
| `linear_favorite` | `(LinearSDK*, entopts) -> Entity*` | Create a Favorite entity instance. |
| `linear_git_automation_state` | `(LinearSDK*, entopts) -> Entity*` | Create a GitAutomationState entity instance. |
| `linear_git_automation_target_branch` | `(LinearSDK*, entopts) -> Entity*` | Create a GitAutomationTargetBranch entity instance. |
| `linear_git_hub_integration_connect_detail` | `(LinearSDK*, entopts) -> Entity*` | Create a GitHubIntegrationConnectDetail entity instance. |
| `linear_initiative` | `(LinearSDK*, entopts) -> Entity*` | Create an Initiative entity instance. |
| `linear_initiative_label` | `(LinearSDK*, entopts) -> Entity*` | Create an InitiativeLabel entity instance. |
| `linear_initiative_lead_team_change_impact` | `(LinearSDK*, entopts) -> Entity*` | Create an InitiativeLeadTeamChangeImpact entity instance. |
| `linear_initiative_relation` | `(LinearSDK*, entopts) -> Entity*` | Create an InitiativeRelation entity instance. |
| `linear_initiative_to_project` | `(LinearSDK*, entopts) -> Entity*` | Create an InitiativeToProject entity instance. |
| `linear_initiative_update` | `(LinearSDK*, entopts) -> Entity*` | Create an InitiativeUpdate entity instance. |
| `linear_integration` | `(LinearSDK*, entopts) -> Entity*` | Create an Integration entity instance. |
| `linear_integration_template` | `(LinearSDK*, entopts) -> Entity*` | Create an IntegrationTemplate entity instance. |
| `linear_integrations_setting` | `(LinearSDK*, entopts) -> Entity*` | Create an IntegrationsSetting entity instance. |
| `linear_issue` | `(LinearSDK*, entopts) -> Entity*` | Create an Issue entity instance. |
| `linear_issue_import` | `(LinearSDK*, entopts) -> Entity*` | Create an IssueImport entity instance. |
| `linear_issue_label` | `(LinearSDK*, entopts) -> Entity*` | Create an IssueLabel entity instance. |
| `linear_issue_priority_value` | `(LinearSDK*, entopts) -> Entity*` | Create an IssuePriorityValue entity instance. |
| `linear_issue_relation` | `(LinearSDK*, entopts) -> Entity*` | Create an IssueRelation entity instance. |
| `linear_issue_search_result` | `(LinearSDK*, entopts) -> Entity*` | Create an IssueSearchResult entity instance. |
| `linear_issue_to_release` | `(LinearSDK*, entopts) -> Entity*` | Create an IssueToRelease entity instance. |
| `linear_logout_response` | `(LinearSDK*, entopts) -> Entity*` | Create a LogoutResponse entity instance. |
| `linear_notification` | `(LinearSDK*, entopts) -> Entity*` | Create a Notification entity instance. |
| `linear_notification_subscription` | `(LinearSDK*, entopts) -> Entity*` | Create a NotificationSubscription entity instance. |
| `linear_o_auth_application` | `(LinearSDK*, entopts) -> Entity*` | Create an OAuthApplication entity instance. |
| `linear_organization` | `(LinearSDK*, entopts) -> Entity*` | Create an Organization entity instance. |
| `linear_organization_domain` | `(LinearSDK*, entopts) -> Entity*` | Create an OrganizationDomain entity instance. |
| `linear_organization_invite` | `(LinearSDK*, entopts) -> Entity*` | Create an OrganizationInvite entity instance. |
| `linear_organization_meta` | `(LinearSDK*, entopts) -> Entity*` | Create an OrganizationMeta entity instance. |
| `linear_passkey_login_start_response` | `(LinearSDK*, entopts) -> Entity*` | Create a PasskeyLoginStartResponse entity instance. |
| `linear_project` | `(LinearSDK*, entopts) -> Entity*` | Create a Project entity instance. |
| `linear_project_label` | `(LinearSDK*, entopts) -> Entity*` | Create a ProjectLabel entity instance. |
| `linear_project_milestone` | `(LinearSDK*, entopts) -> Entity*` | Create a ProjectMilestone entity instance. |
| `linear_project_milestone_move_project_team` | `(LinearSDK*, entopts) -> Entity*` | Create a ProjectMilestoneMoveProjectTeam entity instance. |
| `linear_project_relation` | `(LinearSDK*, entopts) -> Entity*` | Create a ProjectRelation entity instance. |
| `linear_project_search_result` | `(LinearSDK*, entopts) -> Entity*` | Create a ProjectSearchResult entity instance. |
| `linear_project_status` | `(LinearSDK*, entopts) -> Entity*` | Create a ProjectStatus entity instance. |
| `linear_project_update` | `(LinearSDK*, entopts) -> Entity*` | Create a ProjectUpdate entity instance. |
| `linear_push_subscription` | `(LinearSDK*, entopts) -> Entity*` | Create a PushSubscription entity instance. |
| `linear_reaction` | `(LinearSDK*, entopts) -> Entity*` | Create a Reaction entity instance. |
| `linear_release` | `(LinearSDK*, entopts) -> Entity*` | Create a Release entity instance. |
| `linear_release_note` | `(LinearSDK*, entopts) -> Entity*` | Create a ReleaseNote entity instance. |
| `linear_release_pipeline` | `(LinearSDK*, entopts) -> Entity*` | Create a ReleasePipeline entity instance. |
| `linear_release_stage` | `(LinearSDK*, entopts) -> Entity*` | Create a ReleaseStage entity instance. |
| `linear_roadmap` | `(LinearSDK*, entopts) -> Entity*` | Create a Roadmap entity instance. |
| `linear_roadmap_to_project` | `(LinearSDK*, entopts) -> Entity*` | Create a RoadmapToProject entity instance. |
| `linear_sla_configuration` | `(LinearSDK*, entopts) -> Entity*` | Create a SlaConfiguration entity instance. |
| `linear_sso_url_from_email_response` | `(LinearSDK*, entopts) -> Entity*` | Create a SsoUrlFromEmailResponse entity instance. |
| `linear_team` | `(LinearSDK*, entopts) -> Entity*` | Create a Team entity instance. |
| `linear_team_membership` | `(LinearSDK*, entopts) -> Entity*` | Create a TeamMembership entity instance. |
| `linear_template` | `(LinearSDK*, entopts) -> Entity*` | Create a Template entity instance. |
| `linear_time_schedule` | `(LinearSDK*, entopts) -> Entity*` | Create a TimeSchedule entity instance. |
| `linear_triage_responsibility` | `(LinearSDK*, entopts) -> Entity*` | Create a TriageResponsibility entity instance. |
| `linear_upload_file` | `(LinearSDK*, entopts) -> Entity*` | Create an UploadFile entity instance. |
| `linear_usage_alert` | `(LinearSDK*, entopts) -> Entity*` | Create an UsageAlert entity instance. |
| `linear_user` | `(LinearSDK*, entopts) -> Entity*` | Create an User entity instance. |
| `linear_user_setting` | `(LinearSDK*, entopts) -> Entity*` | Create an UserSetting entity instance. |
| `linear_view_preference` | `(LinearSDK*, entopts) -> Entity*` | Create a ViewPreference entity instance. |
| `linear_webhook` | `(LinearSDK*, entopts) -> Entity*` | Create a Webhook entity instance. |
| `linear_webhook_failure_event` | `(LinearSDK*, entopts) -> Entity*` | Create a WebhookFailureEvent entity instance. |
| `linear_workflow_state` | `(LinearSDK*, entopts) -> Entity*` | Create a WorkflowState entity instance. |

### Entity interface (vtable)

All entities share the same `EntityVT` vtable, reached via `e->vt->...`.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(Entity*, reqmatch, ctrl, PNError**) -> voxgig_value*` | Load a single entity by match criteria. |
| `list` | `(Entity*, reqmatch, ctrl, PNError**) -> voxgig_value*` | List entities matching the criteria (a List). |
| `create` | `(Entity*, reqdata, ctrl, PNError**) -> voxgig_value*` | Create a new entity. |
| `update` | `(Entity*, reqdata, ctrl, PNError**) -> voxgig_value*` | Update an existing entity. |
| `remove` | `(Entity*, reqmatch, ctrl, PNError**) -> voxgig_value*` | Remove an entity. |
| `data` | `(Entity*, args) -> voxgig_value*` | Get entity data (pass a map to set). |
| `matchv` | `(Entity*, args) -> voxgig_value*` | Get entity match criteria (pass a map to set). |
| `make` | `(Entity*) -> Entity*` | Create a new instance with the same options. |
| `get_name` | `(Entity*) -> const char*` | Return the entity name. |

### Result shape

Entity operations return the bare result data (a `voxgig_value` map for
single-entity ops, a List for `list`) and set `*err` to a `PNError*` on
failure. Always initialise `PNError* err = NULL;` and check it after the
call.

The `sdk_direct()` escape hatch never sets `*err` for a non-2xx response —
it returns a result map you branch on via `getp(result, "ok")`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `number` | HTTP status code. |
| `headers` | `map` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `false` and `err` carries the error value.

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

Create an instance: `Entity* access_key_release = linear_access_key_release(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the release was archived. |
| `commitSha` | `char*` | The Git commit SHA associated with the release. |
| `completedAt` | `voxgig_value*` | The time at which the release was completed. |
| `createdAt` | `voxgig_value*` | The time at which the release was created. |
| `id` | `char*` | The unique identifier of the release. |
| `name` | `char*` | The name of the release. |
| `url` | `char*` | The URL to the release page in the Linear app. |
| `version` | `char*` | The version identifier for this release. |

#### Example: Load

```c
Entity* access_key_release = linear_access_key_release(client, NULL);
voxgig_value* access_key_release_rec = access_key_release->vt->load(access_key_release, cmap(1, "id", v_str("access_key_release_id")), NULL, &err);
```

#### Example: List

```c
Entity* access_key_release = linear_access_key_release(client, NULL);
voxgig_value* access_key_releases = access_key_release->vt->list(access_key_release, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* access_key_release = linear_access_key_release(client, NULL);
voxgig_value* access_key_release_rec = access_key_release->vt->create(access_key_release, cmap(4,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "name", v_str("example_name"),  // char*
    "url", v_str("example_url"))  // char*
, NULL, &err);
```


### AccessKeyReleasePipeline

Create an instance: `Entity* access_key_release_pipeline = linear_access_key_release_pipeline(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `char*` | The unique identifier of the release pipeline. |
| `includePathPatterns` | `char*` | Glob patterns used to filter commits by changed file path. |

#### Example: Load

```c
Entity* access_key_release_pipeline = linear_access_key_release_pipeline(client, NULL);
voxgig_value* access_key_release_pipeline_rec = access_key_release_pipeline->vt->load(access_key_release_pipeline, cmap(1, "id", v_str("access_key_release_pipeline_id")), NULL, &err);
```


### AgentActivity

Create an instance: `Entity* agent_activity = linear_agent_activity(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agentSession` | `voxgig_value* (map)` | The agent session this activity belongs to. |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `contextualMetadata` | `voxgig_value*` | [Internal] Metadata about user-provided contextual information for this agent activity. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `ephemeral` | `bool` | Whether the activity is ephemeral, and should disappear after the next agent activity. |
| `executionSkippedReason` | `char*` | [Internal] The reason this activity was persisted without being sent to the agent runtime. |
| `id` | `char*` | The unique identifier of the entity. |
| `queued` | `bool` | [Internal] Whether this activity is queued for later processing. |
| `sentAt` | `voxgig_value*` | [Internal] The time at which the prompt actually entered the conversation. |
| `signal` | `char*` | An optional modifier that provides additional instructions on how the activity should be interpreted. |
| `signalMetadata` | `voxgig_value*` | Metadata about this agent activity's signal. |
| `sourceComment` | `voxgig_value* (map)` | The source comment this activity is linked to. |
| `sourceMetadata` | `voxgig_value*` | Metadata about the external source that created this agent activity. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |
| `user` | `voxgig_value* (map)` | The user who created this agent activity. |

#### Example: Load

```c
Entity* agent_activity = linear_agent_activity(client, NULL);
voxgig_value* agent_activity_rec = agent_activity->vt->load(agent_activity, cmap(1, "id", v_str("agent_activity_id")), NULL, &err);
```

#### Example: List

```c
Entity* agent_activity = linear_agent_activity(client, NULL);
voxgig_value* agent_activitys = agent_activity->vt->list(agent_activity, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* agent_activity = linear_agent_activity(client, NULL);
voxgig_value* agent_activity_rec = agent_activity->vt->create(agent_activity, cmap(5,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "ephemeral", v_bool(true),  // bool
    "id", v_str("example_id"),  // char*
    "queued", v_bool(true),  // bool
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```


### AgentSession

Create an instance: `Entity* agent_session = linear_agent_session(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `appUser` | `voxgig_value* (map)` | The agent user that is associated with this agent session. |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `codingHarnessModelLabel` | `char*` | [Internal] Compact display label for the coding harness model used by this session, derived from the latest associated sandbox. |
| `comment` | `voxgig_value* (map)` | The comment this agent session is associated with. |
| `context` | `voxgig_value*` | The entity contexts this session is related to, such as issues or projects referenced in direct chat sessions. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | The human user responsible for the agent session. |
| `dismissedAt` | `voxgig_value*` | The time a user dismissed this agent session. |
| `dismissedBy` | `voxgig_value* (map)` | The user who dismissed the agent session. |
| `endedAt` | `voxgig_value*` | The time the agent session completed. |
| `id` | `char*` | The unique identifier of the entity. |
| `issue` | `voxgig_value* (map)` | The issue this agent session is associated with. |
| `modelSelection` | `voxgig_value*` | [Internal] How Adaptive selected the model route used by this coding session. |
| `plan` | `voxgig_value*` | A dynamically updated plan describing the agent's execution strategy, including steps to be taken and their current status. |
| `pullRequest` | `voxgig_value* (map)` | The pull request this agent session is anchored to, when started from a pull request. |
| `slugId` | `char*` | The agent session's unique URL slug. |
| `sourceComment` | `voxgig_value* (map)` | The comment that this agent session was spawned from, if from a different thread. |
| `sourceMetadata` | `voxgig_value*` | Metadata about the external source that created this agent session. |
| `startedAt` | `voxgig_value*` | The time the agent session transitioned to active status and began work. |
| `status` | `char*` | The current status of the agent session, such as pending, active, awaiting input, complete, error, or stale. |
| `summary` | `char*` | The session title, generated automatically or set by the owning OAuth application. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | The URL to the agent session page in the Linear app. |

#### Example: Load

```c
Entity* agent_session = linear_agent_session(client, NULL);
voxgig_value* agent_session_rec = agent_session->vt->load(agent_session, cmap(1, "id", v_str("agent_session_id")), NULL, &err);
```

#### Example: List

```c
Entity* agent_session = linear_agent_session(client, NULL);
voxgig_value* agent_sessions = agent_session->vt->list(agent_session, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* agent_session = linear_agent_session(client, NULL);
voxgig_value* agent_session_rec = agent_session->vt->create(agent_session, cmap(6,
    "context", v_str("example_context"),  // voxgig_value*
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "slugId", v_str("example_slugId"),  // char*
    "status", v_str("example_status"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```


### AgentSkill

Create an instance: `Entity* agent_skill = linear_agent_skill(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `body` | `char*` | The skill instructions in markdown format. |
| `color` | `char*` | The skill's color. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | The user who created the skill. |
| `description` | `char*` | The skill's description. |
| `icon` | `char*` | The icon of the skill. |
| `id` | `char*` | The unique identifier of the entity. |
| `inheritedFrom` | `voxgig_value* (map)` | The parent-team skill this skill was inherited from. |
| `lastUpdatedBy` | `voxgig_value* (map)` | The user who last updated the skill. |
| `lastUsedAt` | `voxgig_value*` | The time the skill was last used by anyone in the workspace. |
| `owner` | `voxgig_value* (map)` | The user who owns the skill. |
| `recentUsageCount` | `double` | The number of times the skill was used by anyone in the workspace in the last 30 days. |
| `shared` | `bool` | Whether the skill is shared with everyone in the workspace. |
| `slugId` | `char*` | The skill's unique URL slug. |
| `teamId` | `char*` | The identifier of the team this skill is shared with. |
| `title` | `char*` | The skill's title. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```c
Entity* agent_skill = linear_agent_skill(client, NULL);
voxgig_value* agent_skill_rec = agent_skill->vt->load(agent_skill, cmap(1, "id", v_str("agent_skill_id")), NULL, &err);
```

#### Example: List

```c
Entity* agent_skill = linear_agent_skill(client, NULL);
voxgig_value* agent_skills = agent_skill->vt->list(agent_skill, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* agent_skill = linear_agent_skill(client, NULL);
voxgig_value* agent_skill_rec = agent_skill->vt->create(agent_skill, cmap(8,
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


### Application

Create an instance: `Entity* application = linear_application(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `clientId` | `char*` | OAuth application's client ID. |
| `description` | `char*` | Information about the application. |
| `developer` | `char*` | Name of the developer. |
| `developerUrl` | `char*` | URL of the developer's website, homepage, or documentation. |
| `id` | `char*` | OAuth application's ID. |
| `imageUrl` | `char*` | Image of the application. |
| `name` | `char*` | Application name. |

#### Example: Load

```c
Entity* application = linear_application(client, NULL);
voxgig_value* application_rec = application->vt->load(application, cmap(1, "client_id", v_str("client_id")), NULL, &err);
```


### Attachment

Create an instance: `Entity* attachment = linear_attachment(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `bodyData` | `char*` | The body data of the attachment, if any. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | The creator of the attachment. |
| `externalUserCreator` | `voxgig_value* (map)` | The non-Linear user who created the attachment. |
| `groupBySource` | `bool` | Whether attachments from the same source application should be visually grouped together in the Linear issue detail view. |
| `id` | `char*` | The unique identifier of the entity. |
| `issue` | `voxgig_value* (map)` | The issue this attachment belongs to. |
| `metadata` | `voxgig_value*` | Integration-specific metadata for this attachment. |
| `originalIssue` | `voxgig_value* (map)` | The issue this attachment was originally created on. |
| `source` | `voxgig_value*` | Information about the source which created the attachment. |
| `sourceType` | `char*` | The source type of the attachment, derived from the source metadata. |
| `subtitle` | `char*` | Content for the subtitle line in the Linear attachment widget. |
| `title` | `char*` | Content for the title line in the Linear attachment widget. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | The URL of the external resource this attachment links to. |

#### Example: Load

```c
Entity* attachment = linear_attachment(client, NULL);
voxgig_value* attachment_rec = attachment->vt->load(attachment, cmap(1, "id", v_str("attachment_id")), NULL, &err);
```

#### Example: List

```c
Entity* attachment = linear_attachment(client, NULL);
voxgig_value* attachments = attachment->vt->list(attachment, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* attachment = linear_attachment(client, NULL);
voxgig_value* attachment_rec = attachment->vt->create(attachment, cmap(7,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "groupBySource", v_bool(true),  // bool
    "id", v_str("example_id"),  // char*
    "metadata", v_str("example_metadata"),  // voxgig_value*
    "title", v_str("example_title"),  // char*
    "updatedAt", v_str("example_updatedAt"),  // voxgig_value*
    "url", v_str("example_url"))  // char*
, NULL, &err);
```


### AuditEntry

Create an instance: `Entity* audit_entry = linear_audit_entry(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `voxgig_value* (map)` | The user that caused the audit entry to be created. |
| `actorId` | `char*` | The ID of the user that caused the audit entry to be created. |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `countryCode` | `char*` | The ISO 3166-1 alpha-2 country code derived from the request IP address. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `id` | `char*` | The unique identifier of the entity. |
| `ip` | `char*` | The IP address of the actor at the time the audited action was performed. |
| `metadata` | `voxgig_value*` | Additional metadata related to the audit entry. |
| `organization` | `voxgig_value* (map)` | The workspace the audit log belongs to. |
| `requestInformation` | `voxgig_value*` | Additional information related to the request which performed the action. |
| `type` | `char*` | The type of audited action (e.g., user authentication, permission change, data export, setting modification). |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |

#### Example: List

```c
Entity* audit_entry = linear_audit_entry(client, NULL);
voxgig_value* audit_entrys = audit_entry->vt->list(audit_entry, NULL, NULL, &err);
```


### AuditEntryType

Create an instance: `Entity* audit_entry_type = linear_audit_entry_type(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `char*` | Description of the audit entry type. |
| `type` | `char*` | The audit entry type. |

#### Example: List

```c
Entity* audit_entry_type = linear_audit_entry_type(client, NULL);
voxgig_value* audit_entry_types = audit_entry_type->vt->list(audit_entry_type, NULL, NULL, &err);
```


### AuthResolverResponse

Create an instance: `Entity* auth_resolver_response = linear_auth_resolver_response(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowDomainAccess` | `bool` | Should the signup flow allow access for the domain. |
| `email` | `char*` | Email for the authenticated account. |
| `id` | `char*` | User account ID. |
| `lastUsedOrganizationId` | `char*` | ID of the organization last accessed by the user. |
| `service` | `char*` | The authentication service used for the current session (e.g., google, email, saml). |

#### Example: Load

```c
Entity* auth_resolver_response = linear_auth_resolver_response(client, NULL);
voxgig_value* auth_resolver_response_rec = auth_resolver_response->vt->load(auth_resolver_response, cmap(1, "id", v_str("auth_resolver_response_id")), NULL, &err);
```

#### Example: Create

```c
Entity* auth_resolver_response = linear_auth_resolver_response(client, NULL);
voxgig_value* auth_resolver_response_rec = auth_resolver_response->vt->create(auth_resolver_response, cmap(2,
    "email", v_str("example_email"),  // char*
    "id", v_str("example_id"))  // char*
, NULL, &err);
```


### AuthenticationSessionResponse

Create an instance: `Entity* authentication_session_response = linear_authentication_session_response(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `browserType` | `char*` | Used web browser. |
| `client` | `char*` | Client used for the session |
| `countryCodes` | `char*` | Country codes of all seen locations. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `detailedName` | `char*` | Detailed name of the session including version information, derived from the user agent. |
| `id` | `char*` |  |
| `ip` | `char*` | IP address. |
| `isCurrentSession` | `bool` | Whether this session is the one used to make the current API request. |
| `lastActiveAt` | `voxgig_value*` | When was the session last seen |
| `location` | `char*` | Human readable location |
| `locationCity` | `char*` | Location city name. |
| `locationCountry` | `char*` | Location country name. |
| `locationCountryCode` | `char*` | Location country code. |
| `locationRegionCode` | `char*` | Location region code. |
| `name` | `char*` | Name of the session, derived from the client and operating system |
| `operatingSystem` | `char*` | Operating system used for the session |
| `service` | `char*` | Service used for logging in. |
| `type` | `char*` | Type of application used to authenticate. |
| `updatedAt` | `voxgig_value*` | Date when the session was last updated. |
| `userAgent` | `char*` | Session's user-agent. |

#### Example: List

```c
Entity* authentication_session_response = linear_authentication_session_response(client, NULL);
voxgig_value* authentication_session_responses = authentication_session_response->vt->list(authentication_session_response, NULL, NULL, &err);
```


### Comment

Create an instance: `Entity* comment = linear_comment(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agentSession` | `voxgig_value* (map)` | Agent session associated with this comment. |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `body` | `char*` | The comment content in markdown format. |
| `bodyData` | `char*` | [Internal] The comment content as a ProseMirror document. |
| `botActor` | `voxgig_value* (map)` | The bot that created the comment. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `documentContent` | `voxgig_value* (map)` | The document content that the comment is associated with. |
| `documentContentId` | `char*` | The ID of the document content that the comment is associated with. |
| `editedAt` | `voxgig_value*` | The time the comment was last edited by its author. |
| `externalThread` | `voxgig_value* (map)` | The external thread that the comment is synced with. |
| `externalUser` | `voxgig_value* (map)` | The external user who wrote the comment, when the comment was created through an integration such as Slack or Intercom. |
| `hideInLinear` | `bool` | [Internal] Whether the comment should be hidden from Linear clients. |
| `id` | `char*` | The unique identifier of the entity. |
| `initiative` | `voxgig_value* (map)` | The initiative that the comment is associated with. |
| `initiativeId` | `char*` | The ID of the initiative that the comment is associated with. |
| `initiativeUpdate` | `voxgig_value* (map)` | The initiative update that the comment is associated with. |
| `initiativeUpdateId` | `char*` | The ID of the initiative update that the comment is associated with. |
| `isArtificialAgentSessionRoot` | `bool` | [Internal] Whether the comment is an artificial placeholder for an agent session thread created without a comment mention. |
| `issue` | `voxgig_value* (map)` | The issue that the comment is associated with. |
| `issueId` | `char*` | The ID of the issue that the comment is associated with. |
| `onBehalfOf` | `voxgig_value* (map)` | [Internal] The user on whose behalf the comment was created, e.g. |
| `parent` | `voxgig_value* (map)` | The parent comment under which the current comment is nested. |
| `parentId` | `char*` | The ID of the parent comment under which the current comment is nested. |
| `post` | `voxgig_value* (map)` | The post that the comment is associated with. |
| `project` | `voxgig_value* (map)` | The project that the comment is associated with. |
| `projectId` | `char*` | The ID of the project that the comment is associated with. |
| `projectUpdate` | `voxgig_value* (map)` | The project update that the comment is associated with. |
| `projectUpdateId` | `char*` | The ID of the project update that the comment is associated with. |
| `quotedText` | `char*` | The text that this comment references, used for inline comments on documents or issue descriptions. |
| `reactionData` | `voxgig_value*` | Emoji reaction summary for this comment, grouped by emoji type. |
| `resolvedAt` | `voxgig_value*` | The time when the comment thread was resolved. |
| `resolvingComment` | `voxgig_value* (map)` | The child comment that resolved this thread. |
| `resolvingCommentId` | `char*` | The ID of the child comment that resolved this thread. |
| `resolvingUser` | `voxgig_value* (map)` | The user that resolved the comment thread. |
| `threadSummary` | `voxgig_value*` | [Internal] An AI-generated summary of the comment thread. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | Comment's URL. |
| `user` | `voxgig_value* (map)` | The user who wrote the comment. |

#### Example: Load

```c
Entity* comment = linear_comment(client, NULL);
voxgig_value* comment_rec = comment->vt->load(comment, cmap(1, "id", v_str("comment_id")), NULL, &err);
```

#### Example: List

```c
Entity* comment = linear_comment(client, NULL);
voxgig_value* comments = comment->vt->list(comment, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* comment = linear_comment(client, NULL);
voxgig_value* comment_rec = comment->vt->create(comment, cmap(9,
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


### CreateOrJoinOrganizationResponse

Create an instance: `Entity* create_or_join_organization_response = linear_create_or_join_organization_response(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `organization` | `voxgig_value* (map)` | The workspace that was created or joined. |
| `user` | `voxgig_value* (map)` | The user who created or joined the workspace. |

#### Example: Create

```c
Entity* create_or_join_organization_response = linear_create_or_join_organization_response(client, NULL);
voxgig_value* create_or_join_organization_response_rec = create_or_join_organization_response->vt->create(create_or_join_organization_response, NULL, NULL, &err);
```


### CustomView

Create an instance: `Entity* custom_view = linear_custom_view(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `color` | `char*` | The hex color code of the custom view icon. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | The user who originally created the custom view. |
| `description` | `char*` | The description of the custom view. |
| `facet` | `voxgig_value* (map)` | [INTERNAL] The facet that links this custom view to its parent entity (project, initiative, team page, etc.). |
| `feedItemFilterData` | `voxgig_value*` | The filter applied to feed items in the custom view. |
| `filterData` | `voxgig_value*` | The structured filter applied to issues in the custom view. |
| `icon` | `char*` | The icon of the custom view. |
| `id` | `char*` | The unique identifier of the entity. |
| `initiativeFilterData` | `voxgig_value*` | The filter applied to initiatives in the custom view. |
| `modelName` | `char*` | The entity type this view displays. |
| `name` | `char*` | The name of the custom view, displayed in the sidebar and navigation. |
| `organization` | `voxgig_value* (map)` | The workspace of the custom view. |
| `organizationViewPreferences` | `voxgig_value* (map)` | The workspace-level default view preferences for this custom view, if any have been set. |
| `owner` | `voxgig_value* (map)` | The user who owns the custom view. |
| `projectFilterData` | `voxgig_value*` | The filter applied to projects in the custom view. |
| `shared` | `bool` | Whether the custom view is shared with everyone in the organization. |
| `slugId` | `char*` | The custom view's unique URL slug, used to construct human-readable URLs. |
| `team` | `voxgig_value* (map)` | The team that the custom view is scoped to. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |
| `updatedBy` | `voxgig_value* (map)` | The user who last updated the custom view. |
| `userViewPreferences` | `voxgig_value* (map)` | The current user's personal view preferences for this custom view, if they have set any. |

#### Example: Load

```c
Entity* custom_view = linear_custom_view(client, NULL);
voxgig_value* custom_view_rec = custom_view->vt->load(custom_view, cmap(1, "id", v_str("custom_view_id")), NULL, &err);
```

#### Example: List

```c
Entity* custom_view = linear_custom_view(client, NULL);
voxgig_value* custom_views = custom_view->vt->list(custom_view, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* custom_view = linear_custom_view(client, NULL);
voxgig_value* custom_view_rec = custom_view->vt->create(custom_view, cmap(8,
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


### Customer

Create an instance: `Entity* customer = linear_customer(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approximateNeedCount` | `double` | The approximate number of distinct requests associated with this customer, deduplicated per issue or project. |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `domains` | `char*` | The email domains associated with this customer (e.g., 'acme.com'). |
| `externalIds` | `char*` | Identifiers for this customer in external systems (e.g., CRM IDs from Intercom, Salesforce, or HubSpot). |
| `id` | `char*` | The unique identifier of the entity. |
| `integration` | `voxgig_value* (map)` | The integration that manages this customer's data (e.g., Intercom, Salesforce). |
| `logoUrl` | `char*` | URL of the customer's logo image. |
| `mainSourceId` | `char*` | The primary external source ID when a customer has data from multiple external systems. |
| `name` | `char*` | The display name of the customer organization. |
| `owner` | `voxgig_value* (map)` | The workspace member assigned as the owner of this customer. |
| `revenue` | `int64_t` | The annual revenue generated by this customer. |
| `size` | `double` | The number of employees or seats at the customer organization. |
| `slackChannelId` | `char*` | The ID of the Slack channel linked to this customer for communication. |
| `slugId` | `char*` | A unique, human-readable URL slug for the customer. |
| `status` | `voxgig_value* (map)` | The current lifecycle status of the customer. |
| `tier` | `voxgig_value* (map)` | The tier or segment assigned to this customer for prioritization (e.g., Enterprise, Pro, Free). |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | The URL of the customer's page in the Linear application. |

#### Example: Load

```c
Entity* customer = linear_customer(client, NULL);
voxgig_value* customer_rec = customer->vt->load(customer, cmap(1, "id", v_str("customer_id")), NULL, &err);
```

#### Example: List

```c
Entity* customer = linear_customer(client, NULL);
voxgig_value* customers = customer->vt->list(customer, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* customer = linear_customer(client, NULL);
voxgig_value* customer_rec = customer->vt->create(customer, cmap(9,
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


### CustomerNeed

Create an instance: `Entity* customer_need = linear_customer_need(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `attachment` | `voxgig_value* (map)` | The issue attachment linked to this need. |
| `body` | `char*` | The body content of the need in Markdown format. |
| `bodyData` | `char*` | [Internal] The body content of the need as a Prosemirror document JSON string. |
| `comment` | `voxgig_value* (map)` | An optional comment providing additional context for this need. |
| `content` | `char*` | The effective Markdown content shown for this customer need. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | The user who manually created this customer need. |
| `customer` | `voxgig_value* (map)` | The customer organization this need belongs to. |
| `id` | `char*` | The unique identifier of the entity. |
| `issue` | `voxgig_value* (map)` | The issue this need is linked to. |
| `originalIssue` | `voxgig_value* (map)` | The issue this customer need was originally created on, before being moved to a different issue or project. |
| `priority` | `double` | Whether the customer need is important or not. |
| `project` | `voxgig_value* (map)` | The project this need is linked to. |
| `projectAttachment` | `voxgig_value* (map)` | The project attachment linked to this need. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | The URL of the source attachment linked to this need, if any. |

#### Example: Load

```c
Entity* customer_need = linear_customer_need(client, NULL);
voxgig_value* customer_need_rec = customer_need->vt->load(customer_need, cmap(1, "id", v_str("customer_need_id")), NULL, &err);
```

#### Example: List

```c
Entity* customer_need = linear_customer_need(client, NULL);
voxgig_value* customer_needs = customer_need->vt->list(customer_need, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* customer_need = linear_customer_need(client, NULL);
voxgig_value* customer_need_rec = customer_need->vt->create(customer_need, cmap(4,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "priority", v_num(1),  // double
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```


### CustomerStatus

Create an instance: `Entity* customer_status = linear_customer_status(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `color` | `char*` | The color of the status indicator in the UI, as a HEX string (e.g., '#ff0000'). |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `description` | `char*` | An optional description explaining what this status represents in the customer lifecycle. |
| `displayName` | `char*` | The user-facing display name of the status shown in the UI. |
| `id` | `char*` | The unique identifier of the entity. |
| `name` | `char*` | The internal name of the status. |
| `position` | `double` | The sort position of the status in the workspace's customer lifecycle flow. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```c
Entity* customer_status = linear_customer_status(client, NULL);
voxgig_value* customer_status_rec = customer_status->vt->load(customer_status, cmap(1, "id", v_str("customer_status_id")), NULL, &err);
```

#### Example: List

```c
Entity* customer_status = linear_customer_status(client, NULL);
voxgig_value* customer_statuss = customer_status->vt->list(customer_status, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* customer_status = linear_customer_status(client, NULL);
voxgig_value* customer_status_rec = customer_status->vt->create(customer_status, cmap(7,
    "color", v_str("example_color"),  // char*
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "displayName", v_str("example_displayName"),  // char*
    "id", v_str("example_id"),  // char*
    "name", v_str("example_name"),  // char*
    "position", v_num(1),  // double
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```


### CustomerTier

Create an instance: `Entity* customer_tier = linear_customer_tier(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `color` | `char*` | The color of the tier indicator in the UI, as a HEX string (e.g., '#ff0000'). |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `description` | `char*` | An optional description explaining what this tier represents and its intended use for customer segmentation. |
| `displayName` | `char*` | The user-facing display name of the tier shown in the UI. |
| `id` | `char*` | The unique identifier of the entity. |
| `name` | `char*` | The internal name of the tier. |
| `position` | `double` | The sort position of the tier in the workspace's customer tier ordering. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```c
Entity* customer_tier = linear_customer_tier(client, NULL);
voxgig_value* customer_tier_rec = customer_tier->vt->load(customer_tier, cmap(1, "id", v_str("customer_tier_id")), NULL, &err);
```

#### Example: List

```c
Entity* customer_tier = linear_customer_tier(client, NULL);
voxgig_value* customer_tiers = customer_tier->vt->list(customer_tier, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* customer_tier = linear_customer_tier(client, NULL);
voxgig_value* customer_tier_rec = customer_tier->vt->create(customer_tier, cmap(7,
    "color", v_str("example_color"),  // char*
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "displayName", v_str("example_displayName"),  // char*
    "id", v_str("example_id"),  // char*
    "name", v_str("example_name"),  // char*
    "position", v_num(1),  // double
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```


### Cycle

Create an instance: `Entity* cycle = linear_cycle(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `autoArchivedAt` | `voxgig_value*` | The time at which the cycle was automatically archived by the auto-pruning process. |
| `completedAt` | `voxgig_value*` | The completion time of the cycle. |
| `completedIssueCountHistory` | `double` | The number of completed issues in the cycle after each day. |
| `completedScopeHistory` | `double` | The number of completed estimation points after each day. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `currentProgress` | `voxgig_value*` | [Internal] The current progress snapshot of the cycle, broken down by issue status categories. |
| `description` | `char*` | The description of the cycle. |
| `endsAt` | `voxgig_value*` | The end date and time of the cycle. |
| `id` | `char*` | The unique identifier of the entity. |
| `inProgressScopeHistory` | `double` | The number of in-progress estimation points after each day. |
| `inheritedFrom` | `voxgig_value* (map)` | The parent cycle this cycle was inherited from. |
| `isActive` | `bool` | Whether the cycle is currently active. |
| `isFuture` | `bool` | Whether the cycle has not yet started. |
| `isNext` | `bool` | Whether this cycle is the next upcoming (not yet started) cycle for the team. |
| `isPast` | `bool` | Whether the cycle's end date has passed. |
| `isPrevious` | `bool` | Whether this cycle is the most recently completed cycle for the team. |
| `issueCountHistory` | `double` | The total number of issues in the cycle after each day. |
| `name` | `char*` | The custom name of the cycle. |
| `number` | `double` | The auto-incrementing number of the cycle, unique within its team. |
| `progress` | `double` | The overall progress of the cycle as a number between 0 and 1. |
| `progressHistory` | `voxgig_value*` | [Internal] The detailed progress history of the cycle, including per-status breakdowns over time. |
| `scopeHistory` | `double` | The total number of estimation points (scope) in the cycle after each day. |
| `startsAt` | `voxgig_value*` | The start date and time of the cycle. |
| `team` | `voxgig_value* (map)` | The team that the cycle belongs to. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```c
Entity* cycle = linear_cycle(client, NULL);
voxgig_value* cycle_rec = cycle->vt->load(cycle, cmap(1, "id", v_str("cycle_id")), NULL, &err);
```

#### Example: List

```c
Entity* cycle = linear_cycle(client, NULL);
voxgig_value* cycles = cycle->vt->list(cycle, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* cycle = linear_cycle(client, NULL);
voxgig_value* cycle_rec = cycle->vt->create(cycle, cmap(19,
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


### Diff

Create an instance: `Entity* diff = linear_diff(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additions` | `double` | [Internal] The total number of added lines across the diff. |
| `agentSession` | `voxgig_value* (map)` | The agent session the diff belongs to. |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `contentHash` | `char*` | [Internal] The opaque content hash identifying the diff's content in code.storage. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | The user responsible for the diff. |
| `deletions` | `double` | [Internal] The total number of deleted lines across the diff. |
| `fileCount` | `double` | [Internal] The number of changed files in the diff. |
| `id` | `char*` | The unique identifier of the entity. |
| `organization` | `voxgig_value* (map)` | The workspace the diff belongs to. |
| `pullRequest` | `voxgig_value* (map)` | The pull request the diff was promoted to when opened for review. |
| `slugId` | `char*` | [Internal] The diff's unique URL slug. |
| `truncated` | `bool` | [Internal] Whether oversized files were omitted when the diff was computed. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```c
Entity* diff = linear_diff(client, NULL);
voxgig_value* diff_rec = diff->vt->load(diff, cmap(1, "id", v_str("diff_id")), NULL, &err);
```


### Document

Create an instance: `Entity* document = linear_document(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `color` | `char*` | The hex color of the document icon. |
| `content` | `char*` | The document's content in markdown format. |
| `contentState` | `char*` | [Internal] The document's content as a base64-encoded Yjs state update. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | The user who created the document. |
| `cycle` | `voxgig_value* (map)` | [Internal] The cycle that the document is associated with. |
| `documentContentId` | `char*` | The ID of the document content associated with the document. |
| `hiddenAt` | `voxgig_value*` | The time at which the document was hidden from the default view. |
| `icon` | `char*` | The icon of the document, either a decorative icon type or an emoji string. |
| `id` | `char*` | The unique identifier of the entity. |
| `initiative` | `voxgig_value* (map)` | The initiative that the document is associated with. |
| `issue` | `voxgig_value* (map)` | The issue that the document is associated with. |
| `lastAppliedTemplate` | `voxgig_value* (map)` | The last template that was applied to this document. |
| `owner` | `voxgig_value* (map)` | The owner of the document. |
| `project` | `voxgig_value* (map)` | The project that the document is associated with. |
| `release` | `voxgig_value* (map)` | The release that the document is associated with. |
| `slugId` | `char*` | The document's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `double` | The sort order of the document in its parent entity's resources list. |
| `summary` | `char*` | [Internal] A one-sentence AI-generated summary of the document content. |
| `team` | `voxgig_value* (map)` | [Internal] The team that the document is associated with. |
| `title` | `char*` | The title of the document. |
| `trashed` | `bool` | A flag that indicates whether the document is in the trash bin. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |
| `updatedBy` | `voxgig_value* (map)` | The user who last updated the document. |
| `url` | `char*` | The canonical url for the document. |

#### Example: Load

```c
Entity* document = linear_document(client, NULL);
voxgig_value* document_rec = document->vt->load(document, cmap(1, "id", v_str("document_id")), NULL, &err);
```

#### Example: List

```c
Entity* document = linear_document(client, NULL);
voxgig_value* documents = document->vt->list(document, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* document = linear_document(client, NULL);
voxgig_value* document_rec = document->vt->create(document, cmap(7,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "slugId", v_str("example_slugId"),  // char*
    "sortOrder", v_num(1),  // double
    "title", v_str("example_title"),  // char*
    "updatedAt", v_str("example_updatedAt"),  // voxgig_value*
    "url", v_str("example_url"))  // char*
, NULL, &err);
```


### DocumentSearchResult

Create an instance: `Entity* document_search_result = linear_document_search_result(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `color` | `char*` | The hex color of the document icon. |
| `content` | `char*` | The document's content in markdown format. |
| `contentState` | `char*` | [Internal] The document's content as a base64-encoded Yjs state update. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | The user who created the document. |
| `cycle` | `voxgig_value* (map)` | [Internal] The cycle that the document is associated with. |
| `documentContentId` | `char*` | The ID of the document content associated with the document. |
| `hiddenAt` | `voxgig_value*` | The time at which the document was hidden from the default view. |
| `icon` | `char*` | The icon of the document, either a decorative icon type or an emoji string. |
| `id` | `char*` | The unique identifier of the entity. |
| `initiative` | `voxgig_value* (map)` | The initiative that the document is associated with. |
| `issue` | `voxgig_value* (map)` | The issue that the document is associated with. |
| `lastAppliedTemplate` | `voxgig_value* (map)` | The last template that was applied to this document. |
| `metadata` | `voxgig_value*` | Metadata related to search result. |
| `owner` | `voxgig_value* (map)` | The owner of the document. |
| `project` | `voxgig_value* (map)` | The project that the document is associated with. |
| `release` | `voxgig_value* (map)` | The release that the document is associated with. |
| `slugId` | `char*` | The document's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `double` | The sort order of the document in its parent entity's resources list. |
| `summary` | `char*` | [Internal] A one-sentence AI-generated summary of the document content. |
| `team` | `voxgig_value* (map)` | [Internal] The team that the document is associated with. |
| `title` | `char*` | The title of the document. |
| `trashed` | `bool` | A flag that indicates whether the document is in the trash bin. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |
| `updatedBy` | `voxgig_value* (map)` | The user who last updated the document. |
| `url` | `char*` | The canonical url for the document. |

#### Example: List

```c
Entity* document_search_result = linear_document_search_result(client, NULL);
voxgig_value* document_search_results = document_search_result->vt->list(document_search_result, NULL, NULL, &err);
```


### EmailIntakeAddress

Create an instance: `Entity* email_intake_address = linear_email_intake_address(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `char*` | The unique local part (before the @) of the intake email address, used to route incoming emails to the correct intake handler. |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | The user who created the email intake address. |
| `customerRequestsEnabled` | `bool` | Whether issues created from emails sent to this address are automatically converted into customer requests, linking the sender as a customer contact. |
| `enabled` | `bool` | Whether the email address is enabled. |
| `forwardingEmailAddress` | `char*` | The email address used to forward emails to the intake address. |
| `id` | `char*` | The unique identifier of the entity. |
| `issueCanceledAutoReply` | `char*` | The auto-reply message for issue canceled. |
| `issueCanceledAutoReplyEnabled` | `bool` | Whether the auto-reply for issue canceled is enabled. |
| `issueCompletedAutoReply` | `char*` | The auto-reply message for issue completed. |
| `issueCompletedAutoReplyEnabled` | `bool` | Whether the auto-reply for issue completed is enabled. |
| `issueCreatedAutoReply` | `char*` | The auto-reply message for issue created. |
| `issueCreatedAutoReplyEnabled` | `bool` | Whether the auto-reply for issue created is enabled. |
| `lastUsedAt` | `voxgig_value*` | The last time an inbound email was successfully ingested for this address. |
| `organization` | `voxgig_value* (map)` | The workspace that the email address is associated with. |
| `reopenOnReply` | `bool` | Whether to reopen completed or canceled issues when a substantive email reply is received. |
| `repliesEnabled` | `bool` | Whether email replies are enabled. |
| `senderName` | `char*` | The name to be used for outgoing emails. |
| `sesDomainIdentity` | `voxgig_value* (map)` | The SES domain identity that the email address is associated with. |
| `team` | `voxgig_value* (map)` | The team that the email address is associated with. |
| `template` | `voxgig_value* (map)` | The template that the email address is associated with. |
| `type` | `char*` | The type of the email address. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |
| `useUserNamesInReplies` | `bool` | Whether the commenter's name is included in the email replies. |

#### Example: Load

```c
Entity* email_intake_address = linear_email_intake_address(client, NULL);
voxgig_value* email_intake_address_rec = email_intake_address->vt->load(email_intake_address, cmap(1, "id", v_str("email_intake_address_id")), NULL, &err);
```

#### Example: Create

```c
Entity* email_intake_address = linear_email_intake_address(client, NULL);
voxgig_value* email_intake_address_rec = email_intake_address->vt->create(email_intake_address, cmap(13,
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


### EmailUserAccountAuthChallengeResponse

Create an instance: `Entity* email_user_account_auth_challenge_response = linear_email_user_account_auth_challenge_response(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authType` | `char*` | Supported challenge for this user account. |
| `success` | `bool` | Whether the operation was successful. |

#### Example: Create

```c
Entity* email_user_account_auth_challenge_response = linear_email_user_account_auth_challenge_response(client, NULL);
voxgig_value* email_user_account_auth_challenge_response_rec = email_user_account_auth_challenge_response->vt->create(email_user_account_auth_challenge_response, cmap(2,
    "authType", v_str("example_authType"),  // char*
    "success", v_bool(true))  // bool
, NULL, &err);
```


### Emoji

Create an instance: `Entity* emoji = linear_emoji(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | The user who created the emoji. |
| `id` | `char*` | The unique identifier of the entity. |
| `name` | `char*` | The unique name of the custom emoji within the workspace. |
| `organization` | `voxgig_value* (map)` | The workspace that the emoji belongs to. |
| `source` | `char*` | The source of the emoji, indicating how it was created (e.g., uploaded by a user or imported). |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | The URL of the uploaded image for this custom emoji. |

#### Example: Load

```c
Entity* emoji = linear_emoji(client, NULL);
voxgig_value* emoji_rec = emoji->vt->load(emoji, cmap(1, "id", v_str("emoji_id")), NULL, &err);
```

#### Example: List

```c
Entity* emoji = linear_emoji(client, NULL);
voxgig_value* emojis = emoji->vt->list(emoji, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* emoji = linear_emoji(client, NULL);
voxgig_value* emoji_rec = emoji->vt->create(emoji, cmap(6,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "name", v_str("example_name"),  // char*
    "source", v_str("example_source"),  // char*
    "updatedAt", v_str("example_updatedAt"),  // voxgig_value*
    "url", v_str("example_url"))  // char*
, NULL, &err);
```


### EntityExternalLink

Create an instance: `Entity* entity_external_link = linear_entity_external_link(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | The user who created the link. |
| `id` | `char*` | The unique identifier of the entity. |
| `initiative` | `voxgig_value* (map)` | The initiative that the link is associated with. |
| `label` | `char*` | The link's label. |
| `project` | `voxgig_value* (map)` | The project that the link is associated with. |
| `sortOrder` | `double` | The sort order of this link within the parent entity's resources list. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | The link's URL. |

#### Example: Load

```c
Entity* entity_external_link = linear_entity_external_link(client, NULL);
voxgig_value* entity_external_link_rec = entity_external_link->vt->load(entity_external_link, cmap(1, "id", v_str("entity_external_link_id")), NULL, &err);
```

#### Example: Create

```c
Entity* entity_external_link = linear_entity_external_link(client, NULL);
voxgig_value* entity_external_link_rec = entity_external_link->vt->create(entity_external_link, cmap(6,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "label", v_str("example_label"),  // char*
    "sortOrder", v_num(1),  // double
    "updatedAt", v_str("example_updatedAt"),  // voxgig_value*
    "url", v_str("example_url"))  // char*
, NULL, &err);
```


### ExternalUser

Create an instance: `Entity* external_user = linear_external_user(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `avatarUrl` | `char*` | A URL to the external user's avatar image. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `displayName` | `char*` | The external user's display name. |
| `email` | `char*` | The external user's email address. |
| `id` | `char*` | The unique identifier of the entity. |
| `lastSeen` | `voxgig_value*` | The last time the external user was seen interacting with Linear through their external service. |
| `name` | `char*` | The external user's full name. |
| `organization` | `voxgig_value* (map)` | The workspace that the external user belongs to. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```c
Entity* external_user = linear_external_user(client, NULL);
voxgig_value* external_user_rec = external_user->vt->load(external_user, cmap(1, "id", v_str("external_user_id")), NULL, &err);
```

#### Example: List

```c
Entity* external_user = linear_external_user(client, NULL);
voxgig_value* external_users = external_user->vt->list(external_user, NULL, NULL, &err);
```


### Favorite

Create an instance: `Entity* favorite = linear_favorite(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aiConversation` | `voxgig_value* (map)` | [INTERNAL] The favorited Agent conversation. |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `color` | `char*` | [Internal] Returns the color of the favorite's icon. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `customView` | `voxgig_value* (map)` | The favorited custom view. |
| `customer` | `voxgig_value* (map)` | The favorited customer. |
| `cycle` | `voxgig_value* (map)` | The favorited cycle. |
| `dashboard` | `voxgig_value* (map)` | The favorited dashboard. |
| `detail` | `char*` | [Internal] Detail text for favorite's `title` (e.g. |
| `document` | `voxgig_value* (map)` | The favorited document. |
| `facet` | `voxgig_value* (map)` | [INTERNAL] The favorited facet. |
| `folderName` | `char*` | The name of the folder. |
| `icon` | `char*` | [Internal] Name of the favorite's icon. |
| `id` | `char*` | The unique identifier of the entity. |
| `initiative` | `voxgig_value* (map)` | The favorited initiative. |
| `initiativeLabel` | `voxgig_value* (map)` | [INTERNAL] The favorited initiative label. |
| `initiativeTab` | `char*` | The targeted tab of the initiative. |
| `issue` | `voxgig_value* (map)` | The favorited issue. |
| `label` | `voxgig_value* (map)` | The favorited label. |
| `liveFolderDefinition` | `voxgig_value*` | The versioned lazy root and filter represented by this live favorite folder. |
| `liveFolderPreset` | `char*` | The predefined live folder represented by this favorite. |
| `owner` | `voxgig_value* (map)` | The user who owns this favorite. |
| `parent` | `voxgig_value* (map)` | The parent folder of the favorite. |
| `pipelineTab` | `char*` | The targeted tab of the release pipeline. |
| `predefinedViewTeam` | `voxgig_value* (map)` | The team of the favorited predefined view. |
| `predefinedViewType` | `char*` | The type of favorited predefined view (e.g., 'allIssues', 'activeCycle', 'backlog', 'triage'). |
| `project` | `voxgig_value* (map)` | The favorited project. |
| `projectLabel` | `voxgig_value* (map)` | The favorited project label. |
| `projectTab` | `char*` | The targeted tab of the project. |
| `projectTeam` | `voxgig_value* (map)` | [DEPRECATED] The favorited team of the project. |
| `pullRequest` | `voxgig_value* (map)` | The favorited pull request. |
| `release` | `voxgig_value* (map)` | The favorited release. |
| `releaseNote` | `voxgig_value* (map)` | The favorited release note. |
| `releasePipeline` | `voxgig_value* (map)` | The favorited release pipeline. |
| `sortOrder` | `double` | The position of this item in the user's favorites list. |
| `team` | `voxgig_value* (map)` | The favorited team. |
| `title` | `char*` | [Internal] Favorite's title text (name of the favorite'd object or folder). |
| `type` | `char*` | The type of entity this favorite references, such as 'issue', 'project', 'cycle', 'customView', 'document', 'folder', etc. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | URL of the favorited entity. |
| `user` | `voxgig_value* (map)` | The favorited user. |
| `workflowDefinition` | `voxgig_value* (map)` | The favorited loop. |

#### Example: Load

```c
Entity* favorite = linear_favorite(client, NULL);
voxgig_value* favorite_rec = favorite->vt->load(favorite, cmap(1, "id", v_str("favorite_id")), NULL, &err);
```

#### Example: List

```c
Entity* favorite = linear_favorite(client, NULL);
voxgig_value* favorites = favorite->vt->list(favorite, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* favorite = linear_favorite(client, NULL);
voxgig_value* favorite_rec = favorite->vt->create(favorite, cmap(6,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "sortOrder", v_num(1),  // double
    "title", v_str("example_title"),  // char*
    "type", v_str("example_type"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```


### GitAutomationState

Create an instance: `Entity* git_automation_state = linear_git_automation_state(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `event` | `char*` | The Git event that triggers this automation rule (e.g., branch created, PR opened for review, or PR merged). |
| `id` | `char*` | The unique identifier of the entity. |
| `state` | `voxgig_value* (map)` | The workflow state that linked issues will be transitioned to when the Git event fires. |
| `targetBranch` | `voxgig_value* (map)` | The target branch that this automation rule applies to. |
| `team` | `voxgig_value* (map)` | The team that this automation rule belongs to. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |

#### Example: Create

```c
Entity* git_automation_state = linear_git_automation_state(client, NULL);
voxgig_value* git_automation_state_rec = git_automation_state->vt->create(git_automation_state, cmap(4,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "event", v_str("example_event"),  // char*
    "id", v_str("example_id"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```


### GitAutomationTargetBranch

Create an instance: `Entity* git_automation_target_branch = linear_git_automation_target_branch(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `branchPattern` | `char*` | The branch name or pattern to match against pull request target branches. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `id` | `char*` | The unique identifier of the entity. |
| `isRegex` | `bool` | Whether the branch pattern should be interpreted as a regular expression. |
| `team` | `voxgig_value* (map)` | The team that this target branch definition belongs to. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |

#### Example: Create

```c
Entity* git_automation_target_branch = linear_git_automation_target_branch(client, NULL);
voxgig_value* git_automation_target_branch_rec = git_automation_target_branch->vt->create(git_automation_target_branch, cmap(5,
    "branchPattern", v_str("example_branchPattern"),  // char*
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "isRegex", v_bool(true),  // bool
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```


### GitHubIntegrationConnectDetail

Create an instance: `Entity* git_hub_integration_connect_detail = linear_git_hub_integration_connect_detail(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `lostRepositoryNames` | `char*` | Full names ('owner/repo') of repositories whose existing GitHub Issues sync mappings would become inaccessible if the new GitHub App installation replaces the existing one. |

#### Example: Create

```c
Entity* git_hub_integration_connect_detail = linear_git_hub_integration_connect_detail(client, NULL);
voxgig_value* git_hub_integration_connect_detail_rec = git_hub_integration_connect_detail->vt->create(git_hub_integration_connect_detail, NULL, NULL, &err);
```


### Initiative

Create an instance: `Entity* initiative = linear_initiative(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `canceledAt` | `voxgig_value*` | [Internal] The time at which the initiative was moved into Canceled status. |
| `color` | `char*` | The initiative's color. |
| `completedAt` | `voxgig_value*` | The time at which the initiative was moved into Completed status. |
| `content` | `char*` | The initiative's content in markdown format. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | The user who created the initiative. |
| `description` | `char*` | The description of the initiative. |
| `documentContent` | `voxgig_value* (map)` | The content of the initiative description. |
| `frequencyResolution` | `char*` | The resolution of the reminder frequency. |
| `health` | `char*` | The overall health of the initiative, derived from the most recent initiative update. |
| `healthUpdatedAt` | `voxgig_value*` | The time at which the initiative health was last updated, typically when a new initiative update is posted. |
| `icon` | `char*` | The icon of the initiative. |
| `id` | `char*` | The unique identifier of the entity. |
| `identifier` | `char*` | [Internal] The human-readable identifier of the initiative. |
| `integrationsSettings` | `voxgig_value* (map)` | Settings for all integrations associated with that initiative. |
| `labelIds` | `char*` | The IDs of the initiative labels associated with this initiative. |
| `lastUpdate` | `voxgig_value* (map)` | The most recent status update posted for this initiative. |
| `leadTeam` | `voxgig_value* (map)` | The team that leads the initiative. |
| `name` | `char*` | The name of the initiative. |
| `organization` | `voxgig_value* (map)` | The workspace of the initiative. |
| `owner` | `voxgig_value* (map)` | The user who owns the initiative. |
| `parentInitiative` | `voxgig_value* (map)` | Parent initiative associated with the initiative. |
| `previousIdentifiers` | `char*` | [Internal] Identifiers (default and custom) that this initiative has previously held. |
| `priority` | `int64_t` | The priority of the initiative. |
| `prioritySortOrder` | `double` | The sort order of the initiative within the workspace when ordered by priority. |
| `slugId` | `char*` | The initiative's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `double` | The sort order of the initiative within the workspace. |
| `startedAt` | `voxgig_value*` | The time at which the initiative was moved into Active status. |
| `status` | `char*` | The lifecycle status of the initiative. |
| `targetDate` | `voxgig_value*` | The estimated completion date of the initiative. |
| `targetDateResolution` | `char*` | The resolution of the initiative's estimated completion date, indicating whether it refers to a specific day, week, month, quarter, or year. |
| `trashed` | `bool` | A flag that indicates whether the initiative is in the trash bin. |
| `updateReminderFrequency` | `double` | The frequency at which to prompt for updates. |
| `updateReminderFrequencyInWeeks` | `double` | The n-weekly frequency at which to prompt for updates. |
| `updateRemindersDay` | `char*` | The day at which to prompt for updates. |
| `updateRemindersHour` | `double` | The hour at which to prompt for updates. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | Initiative URL. |
| `visibility` | `char*` | The visibility of the initiative, derived from its lead team. |

#### Example: Load

```c
Entity* initiative = linear_initiative(client, NULL);
voxgig_value* initiative_rec = initiative->vt->load(initiative, cmap(1, "id", v_str("initiative_id")), NULL, &err);
```

#### Example: List

```c
Entity* initiative = linear_initiative(client, NULL);
voxgig_value* initiatives = initiative->vt->list(initiative, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* initiative = linear_initiative(client, NULL);
voxgig_value* initiative_rec = initiative->vt->create(initiative, cmap(14,
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


### InitiativeLabel

Create an instance: `Entity* initiative_label = linear_initiative_label(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `color` | `char*` | The label's color as a HEX string (e.g., '#EB5757'). |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | The user who created the label. |
| `description` | `char*` | The label's description. |
| `id` | `char*` | The unique identifier of the entity. |
| `isGroup` | `bool` | Whether the label is a group. |
| `lastAppliedAt` | `voxgig_value*` | The date when the label was last applied to an issue, project, or initiative. |
| `name` | `char*` | The label's name. |
| `organization` | `voxgig_value* (map)` | The workspace that the initiative label belongs to. |
| `parent` | `voxgig_value* (map)` | The parent label group. |
| `retiredAt` | `voxgig_value*` | [Internal] When the label was retired. |
| `retiredBy` | `voxgig_value* (map)` | The user who retired the label. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```c
Entity* initiative_label = linear_initiative_label(client, NULL);
voxgig_value* initiative_label_rec = initiative_label->vt->load(initiative_label, cmap(1, "id", v_str("initiative_label_id")), NULL, &err);
```

#### Example: List

```c
Entity* initiative_label = linear_initiative_label(client, NULL);
voxgig_value* initiative_labels = initiative_label->vt->list(initiative_label, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* initiative_label = linear_initiative_label(client, NULL);
voxgig_value* initiative_label_rec = initiative_label->vt->create(initiative_label, cmap(6,
    "color", v_str("example_color"),  // char*
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "isGroup", v_bool(true),  // bool
    "name", v_str("example_name"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```


### InitiativeLeadTeamChangeImpact

Create an instance: `Entity* initiative_lead_team_change_impact = linear_initiative_lead_team_change_impact(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `affectedDescendantCount` | `int64_t` | The number of editable matching sub-initiatives whose lead team would change if the update is applied to descendants. |
| `id` | `char*` |  |
| `visibilityMayChange` | `bool` | Whether the changed initiatives may gain or lose access restrictions because the current or next lead team is not public. |

#### Example: Load

```c
Entity* initiative_lead_team_change_impact = linear_initiative_lead_team_change_impact(client, NULL);
voxgig_value* initiative_lead_team_change_impact_rec = initiative_lead_team_change_impact->vt->load(initiative_lead_team_change_impact, cmap(1, "id", v_str("initiative_lead_team_change_impact_id")), NULL, &err);
```


### InitiativeRelation

Create an instance: `Entity* initiative_relation = linear_initiative_relation(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `id` | `char*` | The unique identifier of the entity. |
| `initiative` | `voxgig_value* (map)` | The parent initiative in this hierarchical relation. |
| `relatedInitiative` | `voxgig_value* (map)` | The child initiative in this hierarchical relation. |
| `sortOrder` | `double` | The sort order of the child initiative within its parent initiative. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |
| `user` | `voxgig_value* (map)` | The user who last created or modified the relation. |

#### Example: Load

```c
Entity* initiative_relation = linear_initiative_relation(client, NULL);
voxgig_value* initiative_relation_rec = initiative_relation->vt->load(initiative_relation, cmap(1, "id", v_str("initiative_relation_id")), NULL, &err);
```

#### Example: List

```c
Entity* initiative_relation = linear_initiative_relation(client, NULL);
voxgig_value* initiative_relations = initiative_relation->vt->list(initiative_relation, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* initiative_relation = linear_initiative_relation(client, NULL);
voxgig_value* initiative_relation_rec = initiative_relation->vt->create(initiative_relation, cmap(4,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "sortOrder", v_num(1),  // double
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```


### InitiativeToProject

Create an instance: `Entity* initiative_to_project = linear_initiative_to_project(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `id` | `char*` | The unique identifier of the entity. |
| `initiative` | `voxgig_value* (map)` | The initiative that the project is associated with. |
| `project` | `voxgig_value* (map)` | The project that the initiative is associated with. |
| `sortOrder` | `char*` | The sort order of the project within its parent initiative. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```c
Entity* initiative_to_project = linear_initiative_to_project(client, NULL);
voxgig_value* initiative_to_project_rec = initiative_to_project->vt->load(initiative_to_project, cmap(1, "id", v_str("initiative_to_project_id")), NULL, &err);
```

#### Example: List

```c
Entity* initiative_to_project = linear_initiative_to_project(client, NULL);
voxgig_value* initiative_to_projects = initiative_to_project->vt->list(initiative_to_project, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* initiative_to_project = linear_initiative_to_project(client, NULL);
voxgig_value* initiative_to_project_rec = initiative_to_project->vt->create(initiative_to_project, cmap(4,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "sortOrder", v_str("example_sortOrder"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```


### InitiativeUpdate

Create an instance: `Entity* initiative_update = linear_initiative_update(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `body` | `char*` | The update content in markdown format. |
| `bodyData` | `char*` | [Internal] The content of the update as a Prosemirror document. |
| `commentCount` | `int64_t` | Number of comments associated with the initiative update. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `diff` | `voxgig_value*` | The diff between the current update and the previous one. |
| `diffMarkdown` | `char*` | The diff between the current update and the previous one, formatted as markdown. |
| `editedAt` | `voxgig_value*` | The time the update was edited. |
| `health` | `char*` | The health of the initiative at the time this update was posted. |
| `id` | `char*` | The unique identifier of the entity. |
| `infoSnapshot` | `voxgig_value*` | [Internal] A snapshot of initiative properties at the time the update was posted, including project statuses, sub-initiative health, and target dates. |
| `initiative` | `voxgig_value* (map)` | The initiative that this status update was posted to. |
| `isDiffHidden` | `bool` | Whether the diff between this update and the previous one should be hidden in the UI. |
| `isStale` | `bool` | Whether the initiative update is stale. |
| `reactionData` | `voxgig_value*` | Emoji reaction summary, grouped by emoji type. |
| `slugId` | `char*` | The update's unique URL slug. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | The URL to the initiative update. |
| `user` | `voxgig_value* (map)` | The user who wrote the update. |

#### Example: Load

```c
Entity* initiative_update = linear_initiative_update(client, NULL);
voxgig_value* initiative_update_rec = initiative_update->vt->load(initiative_update, cmap(1, "id", v_str("initiative_update_id")), NULL, &err);
```

#### Example: List

```c
Entity* initiative_update = linear_initiative_update(client, NULL);
voxgig_value* initiative_updates = initiative_update->vt->list(initiative_update, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* initiative_update = linear_initiative_update(client, NULL);
voxgig_value* initiative_update_rec = initiative_update->vt->create(initiative_update, cmap(12,
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


### Integration

Create an instance: `Entity* integration = linear_integration(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | The user that added the integration. |
| `id` | `char*` | The unique identifier of the entity. |
| `organization` | `voxgig_value* (map)` | The workspace that the integration is associated with. |
| `service` | `char*` | The integration's type, identifying which external service this integration connects to (e.g., 'slack', 'github', 'jira', 'figma'). |
| `team` | `voxgig_value* (map)` | The team that the integration is associated with. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```c
Entity* integration = linear_integration(client, NULL);
voxgig_value* integration_rec = integration->vt->load(integration, cmap(1, "id", v_str("integration_id")), NULL, &err);
```

#### Example: List

```c
Entity* integration = linear_integration(client, NULL);
voxgig_value* integrations = integration->vt->list(integration, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* integration = linear_integration(client, NULL);
voxgig_value* integration_rec = integration->vt->create(integration, cmap(4,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "service", v_str("example_service"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```


### IntegrationTemplate

Create an instance: `Entity* integration_template = linear_integration_template(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `foreignEntityId` | `char*` | The identifier of the foreign entity in the external service that this template is scoped to. |
| `id` | `char*` | The unique identifier of the entity. |
| `integration` | `voxgig_value* (map)` | The integration that the template is associated with. |
| `template` | `voxgig_value* (map)` | The template that the integration is associated with. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```c
Entity* integration_template = linear_integration_template(client, NULL);
voxgig_value* integration_template_rec = integration_template->vt->load(integration_template, cmap(1, "id", v_str("integration_template_id")), NULL, &err);
```

#### Example: List

```c
Entity* integration_template = linear_integration_template(client, NULL);
voxgig_value* integration_templates = integration_template->vt->list(integration_template, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* integration_template = linear_integration_template(client, NULL);
voxgig_value* integration_template_rec = integration_template->vt->create(integration_template, cmap(3,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```


### IntegrationsSetting

Create an instance: `Entity* integrations_setting = linear_integrations_setting(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `contextViewType` | `char*` | The type of view to which the integration settings context is associated with. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `id` | `char*` | The unique identifier of the entity. |
| `initiative` | `voxgig_value* (map)` | Initiative which those settings apply to. |
| `microsoftTeamsProjectUpdateCreated` | `bool` | Whether to send a Microsoft Teams message when a project update is created. |
| `project` | `voxgig_value* (map)` | Project which those settings apply to. |
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
| `team` | `voxgig_value* (map)` | Team which those settings apply to. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```c
Entity* integrations_setting = linear_integrations_setting(client, NULL);
voxgig_value* integrations_setting_rec = integrations_setting->vt->load(integrations_setting, cmap(1, "id", v_str("integrations_setting_id")), NULL, &err);
```

#### Example: Create

```c
Entity* integrations_setting = linear_integrations_setting(client, NULL);
voxgig_value* integrations_setting_rec = integrations_setting->vt->create(integrations_setting, cmap(3,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```


### Issue

Create an instance: `Entity* issue = linear_issue(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activitySummary` | `voxgig_value*` | [Internal] The activity summary information for this issue. |
| `addedToCycleAt` | `voxgig_value*` | The time at which the issue was added to a cycle. |
| `addedToProjectAt` | `voxgig_value*` | The time at which the issue was added to a project. |
| `addedToTeamAt` | `voxgig_value*` | The time at which the issue was added to a team. |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `asksExternalUserRequester` | `voxgig_value* (map)` | The external user who requested creation of the Asks issue on behalf of the creator. |
| `asksRequester` | `voxgig_value* (map)` | The internal user who requested creation of the Asks issue on behalf of the creator. |
| `assignee` | `voxgig_value* (map)` | The user to whom the issue is assigned. |
| `autoArchivedAt` | `voxgig_value*` | The time at which the issue was automatically archived by the auto pruning process. |
| `autoClosedAt` | `voxgig_value*` | The time at which the issue was automatically closed by the auto pruning process. |
| `botActor` | `voxgig_value* (map)` | The bot that created the issue, if applicable. |
| `branchName` | `char*` | Suggested branch name for the issue. |
| `canceledAt` | `voxgig_value*` | The time at which the issue was moved into canceled state. |
| `completedAt` | `voxgig_value*` | The time at which the issue was moved into completed state. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | The user who created the issue. |
| `customerTicketCount` | `int64_t` | Returns the number of Attachment resources which are created by customer support ticketing systems (e.g. |
| `cycle` | `voxgig_value* (map)` | The cycle that the issue is associated with. |
| `delegate` | `voxgig_value* (map)` | The agent user that is delegated to work on this issue. |
| `description` | `char*` | The issue's description in markdown format. |
| `descriptionState` | `char*` | [Internal] The issue's description content as YJS state. |
| `documentContent` | `voxgig_value* (map)` | [ALPHA] The document content representing this issue description. |
| `dueDate` | `voxgig_value*` | The date at which the issue is due. |
| `estimate` | `double` | The estimate of the complexity of the issue. |
| `externalUserCreator` | `voxgig_value* (map)` | The external user who created the issue. |
| `favorite` | `voxgig_value* (map)` | The users favorite associated with this issue. |
| `id` | `char*` | The unique identifier of the entity. |
| `identifier` | `char*` | Issue's human readable identifier (e.g. |
| `inheritsSharedAccess` | `bool` | Whether this issue inherits shared access from its parent issue. |
| `integrationSourceType` | `char*` | Integration type that created this issue, if applicable. |
| `labelIds` | `char*` | Identifiers of the labels associated with this issue. |
| `lastAppliedTemplate` | `voxgig_value* (map)` | The last template that was applied to this issue. |
| `number` | `double` | The issue's unique number, scoped to the issue's team. |
| `parent` | `voxgig_value* (map)` | The parent of the issue. |
| `previousIdentifiers` | `char*` | Previous identifiers of the issue if it has been moved between teams. |
| `priority` | `double` | The priority of the issue. |
| `priorityLabel` | `char*` | Label for the priority. |
| `prioritySortOrder` | `double` | The order of the item in relation to other items in the workspace, when ordered by priority. |
| `project` | `voxgig_value* (map)` | The project that the issue is associated with. |
| `projectMilestone` | `voxgig_value* (map)` | The project milestone that the issue is associated with. |
| `reactionData` | `voxgig_value*` | Emoji reaction summary for the issue, grouped by emoji type. |
| `recurringIssueTemplate` | `voxgig_value* (map)` | The recurring issue template that created this issue. |
| `slaBreachesAt` | `voxgig_value*` | The time at which the issue's SLA will breach. |
| `slaHighRiskAt` | `voxgig_value*` | The time at which the issue's SLA will enter high risk state. |
| `slaMediumRiskAt` | `voxgig_value*` | The time at which the issue's SLA will enter medium risk state. |
| `slaStartedAt` | `voxgig_value*` | The time at which the issue's SLA began. |
| `slaType` | `char*` | The type of SLA set on the issue. |
| `snoozedBy` | `voxgig_value* (map)` | The user who snoozed the issue. |
| `snoozedUntilAt` | `voxgig_value*` | The time until an issue will be snoozed in Triage view. |
| `sortOrder` | `double` | The order of the item in relation to other items in the organization. |
| `sourceComment` | `voxgig_value* (map)` | The comment that this issue was created from, when an issue is created from an existing comment. |
| `startedAt` | `voxgig_value*` | The time at which the issue was moved into started state. |
| `startedTriageAt` | `voxgig_value*` | The time at which the issue entered triage. |
| `state` | `voxgig_value* (map)` | The workflow state (issue status) that the issue is currently in. |
| `subIssueSortOrder` | `double` | The order of the item in the sub-issue list. |
| `suggestionsGeneratedAt` | `voxgig_value*` | [Internal] The time at which the most recent suggestions for this issue were generated. |
| `summary` | `voxgig_value* (map)` | [Internal] AI-generated activity summary for this issue. |
| `team` | `voxgig_value* (map)` | The team that the issue belongs to. |
| `title` | `char*` | The issue's title. |
| `trashed` | `bool` | A flag that indicates whether the issue is in the trash bin. |
| `triagedAt` | `voxgig_value*` | The time at which the issue left triage. |
| `trusted` | `bool` | [Internal] Whether this issue has been explicitly marked as trusted. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | Issue URL. |

#### Example: Load

```c
Entity* issue = linear_issue(client, NULL);
voxgig_value* issue_rec = issue->vt->load(issue, cmap(1, "id", v_str("issue_id")), NULL, &err);
```

#### Example: List

```c
Entity* issue = linear_issue(client, NULL);
voxgig_value* issues = issue->vt->list(issue, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* issue = linear_issue(client, NULL);
voxgig_value* issue_rec = issue->vt->create(issue, cmap(17,
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


### IssueImport

Create an instance: `Entity* issue_import = linear_issue_import(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `creatorId` | `char*` | Identifier of the user who started the import job. |
| `csvFileUrl` | `char*` | File URL for the uploaded CSV for the import, if there is one. |
| `displayName` | `char*` | The display name of the import service. |
| `error` | `char*` | User readable error message, if one has occurred during the import. |
| `errorMetadata` | `voxgig_value*` | Error code and metadata, if one has occurred during the import. |
| `id` | `char*` | The unique identifier of the entity. |
| `mapping` | `voxgig_value*` | The data mapping configuration for the import job. |
| `progress` | `double` | Current step progress as a percentage (0-100). |
| `service` | `char*` | The external service from which data is being imported (e.g., jira, asana, github, shortcut, linear). |
| `serviceMetadata` | `voxgig_value*` | Metadata related to import service. |
| `status` | `char*` | The current status of the import job, indicating its position in the import lifecycle (e.g., not started, in progress, complete, error). |
| `teamName` | `char*` | The name of the new team to be created for the import, when the import is configured to create a new team rather than importing into an existing one. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |

#### Example: Create

```c
Entity* issue_import = linear_issue_import(client, NULL);
voxgig_value* issue_import_rec = issue_import->vt->create(issue_import, cmap(5,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "displayName", v_str("example_displayName"),  // char*
    "service", v_str("example_service"),  // char*
    "status", v_str("example_status"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```


### IssueLabel

Create an instance: `Entity* issue_label = linear_issue_label(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `color` | `char*` | The label's color as a HEX string (e.g., '#EB5757'). |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | The user who created the label. |
| `description` | `char*` | The label's description. |
| `groupType` | `char*` | The selection mode of this label group. |
| `id` | `char*` | The unique identifier of the entity. |
| `inheritedFrom` | `voxgig_value* (map)` | The original workspace or parent-team label that this label was inherited from. |
| `isGroup` | `bool` | Whether the label is a group. |
| `lastAppliedAt` | `voxgig_value*` | The date when the label was last applied to an issue, project, or initiative. |
| `name` | `char*` | The label's name. |
| `parent` | `voxgig_value* (map)` | The parent label. |
| `retiredAt` | `voxgig_value*` | [Internal] When the label was retired. |
| `retiredBy` | `voxgig_value* (map)` | The user who retired the label. |
| `team` | `voxgig_value* (map)` | The team that the label is scoped to. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```c
Entity* issue_label = linear_issue_label(client, NULL);
voxgig_value* issue_label_rec = issue_label->vt->load(issue_label, cmap(1, "id", v_str("issue_label_id")), NULL, &err);
```

#### Example: List

```c
Entity* issue_label = linear_issue_label(client, NULL);
voxgig_value* issue_labels = issue_label->vt->list(issue_label, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* issue_label = linear_issue_label(client, NULL);
voxgig_value* issue_label_rec = issue_label->vt->create(issue_label, cmap(6,
    "color", v_str("example_color"),  // char*
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "isGroup", v_bool(true),  // bool
    "name", v_str("example_name"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```


### IssuePriorityValue

Create an instance: `Entity* issue_priority_value = linear_issue_priority_value(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `label` | `char*` | Priority's label. |
| `priority` | `int64_t` | Priority's number value. |

#### Example: List

```c
Entity* issue_priority_value = linear_issue_priority_value(client, NULL);
voxgig_value* issue_priority_values = issue_priority_value->vt->list(issue_priority_value, NULL, NULL, &err);
```


### IssueRelation

Create an instance: `Entity* issue_relation = linear_issue_relation(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `id` | `char*` | The unique identifier of the entity. |
| `issue` | `voxgig_value* (map)` | The source issue whose relationship is being described. |
| `relatedIssue` | `voxgig_value* (map)` | The target issue that the source issue is related to. |
| `type` | `char*` | The type of relationship between the source issue and the related issue. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```c
Entity* issue_relation = linear_issue_relation(client, NULL);
voxgig_value* issue_relation_rec = issue_relation->vt->load(issue_relation, cmap(1, "id", v_str("issue_relation_id")), NULL, &err);
```

#### Example: List

```c
Entity* issue_relation = linear_issue_relation(client, NULL);
voxgig_value* issue_relations = issue_relation->vt->list(issue_relation, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* issue_relation = linear_issue_relation(client, NULL);
voxgig_value* issue_relation_rec = issue_relation->vt->create(issue_relation, cmap(4,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "type", v_str("example_type"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```


### IssueSearchResult

Create an instance: `Entity* issue_search_result = linear_issue_search_result(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activitySummary` | `voxgig_value*` | [Internal] The activity summary information for this issue. |
| `addedToCycleAt` | `voxgig_value*` | The time at which the issue was added to a cycle. |
| `addedToProjectAt` | `voxgig_value*` | The time at which the issue was added to a project. |
| `addedToTeamAt` | `voxgig_value*` | The time at which the issue was added to a team. |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `asksExternalUserRequester` | `voxgig_value* (map)` | The external user who requested creation of the Asks issue on behalf of the creator. |
| `asksRequester` | `voxgig_value* (map)` | The internal user who requested creation of the Asks issue on behalf of the creator. |
| `assignee` | `voxgig_value* (map)` | The user to whom the issue is assigned. |
| `autoArchivedAt` | `voxgig_value*` | The time at which the issue was automatically archived by the auto pruning process. |
| `autoClosedAt` | `voxgig_value*` | The time at which the issue was automatically closed by the auto pruning process. |
| `botActor` | `voxgig_value* (map)` | The bot that created the issue, if applicable. |
| `branchName` | `char*` | Suggested branch name for the issue. |
| `canceledAt` | `voxgig_value*` | The time at which the issue was moved into canceled state. |
| `completedAt` | `voxgig_value*` | The time at which the issue was moved into completed state. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | The user who created the issue. |
| `customerTicketCount` | `int64_t` | Returns the number of Attachment resources which are created by customer support ticketing systems (e.g. |
| `cycle` | `voxgig_value* (map)` | The cycle that the issue is associated with. |
| `delegate` | `voxgig_value* (map)` | The agent user that is delegated to work on this issue. |
| `description` | `char*` | The issue's description in markdown format. |
| `descriptionState` | `char*` | [Internal] The issue's description content as YJS state. |
| `documentContent` | `voxgig_value* (map)` | [ALPHA] The document content representing this issue description. |
| `dueDate` | `voxgig_value*` | The date at which the issue is due. |
| `estimate` | `double` | The estimate of the complexity of the issue. |
| `externalUserCreator` | `voxgig_value* (map)` | The external user who created the issue. |
| `favorite` | `voxgig_value* (map)` | The users favorite associated with this issue. |
| `id` | `char*` | The unique identifier of the entity. |
| `identifier` | `char*` | Issue's human readable identifier (e.g. |
| `inheritsSharedAccess` | `bool` | Whether this issue inherits shared access from its parent issue. |
| `integrationSourceType` | `char*` | Integration type that created this issue, if applicable. |
| `labelIds` | `char*` | Identifiers of the labels associated with this issue. |
| `lastAppliedTemplate` | `voxgig_value* (map)` | The last template that was applied to this issue. |
| `metadata` | `voxgig_value*` | Metadata related to search result. |
| `number` | `double` | The issue's unique number, scoped to the issue's team. |
| `parent` | `voxgig_value* (map)` | The parent of the issue. |
| `previousIdentifiers` | `char*` | Previous identifiers of the issue if it has been moved between teams. |
| `priority` | `double` | The priority of the issue. |
| `priorityLabel` | `char*` | Label for the priority. |
| `prioritySortOrder` | `double` | The order of the item in relation to other items in the workspace, when ordered by priority. |
| `project` | `voxgig_value* (map)` | The project that the issue is associated with. |
| `projectMilestone` | `voxgig_value* (map)` | The project milestone that the issue is associated with. |
| `reactionData` | `voxgig_value*` | Emoji reaction summary for the issue, grouped by emoji type. |
| `recurringIssueTemplate` | `voxgig_value* (map)` | The recurring issue template that created this issue. |
| `slaBreachesAt` | `voxgig_value*` | The time at which the issue's SLA will breach. |
| `slaHighRiskAt` | `voxgig_value*` | The time at which the issue's SLA will enter high risk state. |
| `slaMediumRiskAt` | `voxgig_value*` | The time at which the issue's SLA will enter medium risk state. |
| `slaStartedAt` | `voxgig_value*` | The time at which the issue's SLA began. |
| `slaType` | `char*` | The type of SLA set on the issue. |
| `snoozedBy` | `voxgig_value* (map)` | The user who snoozed the issue. |
| `snoozedUntilAt` | `voxgig_value*` | The time until an issue will be snoozed in Triage view. |
| `sortOrder` | `double` | The order of the item in relation to other items in the organization. |
| `sourceComment` | `voxgig_value* (map)` | The comment that this issue was created from, when an issue is created from an existing comment. |
| `startedAt` | `voxgig_value*` | The time at which the issue was moved into started state. |
| `startedTriageAt` | `voxgig_value*` | The time at which the issue entered triage. |
| `state` | `voxgig_value* (map)` | The workflow state (issue status) that the issue is currently in. |
| `subIssueSortOrder` | `double` | The order of the item in the sub-issue list. |
| `suggestionsGeneratedAt` | `voxgig_value*` | [Internal] The time at which the most recent suggestions for this issue were generated. |
| `summary` | `voxgig_value* (map)` | [Internal] AI-generated activity summary for this issue. |
| `team` | `voxgig_value* (map)` | The team that the issue belongs to. |
| `title` | `char*` | The issue's title. |
| `trashed` | `bool` | A flag that indicates whether the issue is in the trash bin. |
| `triagedAt` | `voxgig_value*` | The time at which the issue left triage. |
| `trusted` | `bool` | [Internal] Whether this issue has been explicitly marked as trusted. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | Issue URL. |

#### Example: List

```c
Entity* issue_search_result = linear_issue_search_result(client, NULL);
voxgig_value* issue_search_results = issue_search_result->vt->list(issue_search_result, NULL, NULL, &err);
```


### IssueToRelease

Create an instance: `Entity* issue_to_release = linear_issue_to_release(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `id` | `char*` | The unique identifier of the entity. |
| `issue` | `voxgig_value* (map)` | The issue that is linked to the release. |
| `release` | `voxgig_value* (map)` | The release that the issue is linked to. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```c
Entity* issue_to_release = linear_issue_to_release(client, NULL);
voxgig_value* issue_to_release_rec = issue_to_release->vt->load(issue_to_release, cmap(1, "id", v_str("issue_to_release_id")), NULL, &err);
```

#### Example: List

```c
Entity* issue_to_release = linear_issue_to_release(client, NULL);
voxgig_value* issue_to_releases = issue_to_release->vt->list(issue_to_release, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* issue_to_release = linear_issue_to_release(client, NULL);
voxgig_value* issue_to_release_rec = issue_to_release->vt->create(issue_to_release, cmap(3,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```


### LogoutResponse

Create an instance: `Entity* logout_response = linear_logout_response(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `success` | `bool` | Whether the operation was successful. |

#### Example: Create

```c
Entity* logout_response = linear_logout_response(client, NULL);
voxgig_value* logout_response_rec = logout_response->vt->create(logout_response, cmap(1,
    "success", v_bool(true))  // bool
, NULL, &err);
```


### Notification

Create an instance: `Entity* notification = linear_notification(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `voxgig_value* (map)` | The user that caused the notification. |
| `actorAvatarColor` | `char*` | [Internal] Notification actor initials if avatar is not available. |
| `actorAvatarUrl` | `char*` | [Internal] Notification avatar URL. |
| `actorInactive` | `bool` | [Internal] Whether the notification's user actor is deactivated in the workspace. |
| `actorInitials` | `char*` | [Internal] Notification actor initials if avatar is not available. |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `botActor` | `voxgig_value* (map)` | The bot that caused the notification. |
| `category` | `char*` | The category of the notification. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `emailedAt` | `voxgig_value*` | The time at which an email reminder for this notification was sent to the user. |
| `externalUserActor` | `voxgig_value* (map)` | The external user that caused the notification. |
| `groupingKey` | `char*` | [Internal] Notifications with the same grouping key will be grouped together in the UI. |
| `groupingPriority` | `double` | [Internal] Priority of the notification with the same grouping key. |
| `id` | `char*` | The unique identifier of the entity. |
| `inboxUrl` | `char*` | [Internal] Inbox URL for the notification. |
| `initiativeUpdateHealth` | `char*` | [Internal] Initiative update health for new updates. |
| `isLinearActor` | `bool` | [Internal] If notification actor was Linear. |
| `issueStatusType` | `char*` | [Internal] Issue's status type for issue notifications. |
| `projectUpdateHealth` | `char*` | [Internal] Project update health for new updates. |
| `readAt` | `voxgig_value*` | The time at which the user marked the notification as read. |
| `snoozedUntilAt` | `voxgig_value*` | The time until which a notification is snoozed. |
| `subtitle` | `char*` | [Internal] Notification subtitle. |
| `title` | `char*` | [Internal] Notification title. |
| `type` | `char*` | Notification type. |
| `unsnoozedAt` | `voxgig_value*` | The time at which a notification was unsnoozed. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | [Internal] URL to the target of the notification. |
| `user` | `voxgig_value* (map)` | The recipient user of this notification. |

#### Example: Load

```c
Entity* notification = linear_notification(client, NULL);
voxgig_value* notification_rec = notification->vt->load(notification, cmap(1, "id", v_str("notification_id")), NULL, &err);
```

#### Example: List

```c
Entity* notification = linear_notification(client, NULL);
voxgig_value* notifications = notification->vt->list(notification, NULL, NULL, &err);
```


### NotificationSubscription

Create an instance: `Entity* notification_subscription = linear_notification_subscription(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | Whether the subscription is active. |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `contextViewType` | `char*` | The type of contextual view (e.g., active issues, backlog) that further scopes a team notification subscription. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `customView` | `voxgig_value* (map)` | The custom view that this notification subscription is scoped to. |
| `customer` | `voxgig_value* (map)` | The customer that this notification subscription is scoped to. |
| `cycle` | `voxgig_value* (map)` | The cycle that this notification subscription is scoped to. |
| `id` | `char*` | The unique identifier of the entity. |
| `initiative` | `voxgig_value* (map)` | The initiative that this notification subscription is scoped to. |
| `label` | `voxgig_value* (map)` | The issue label that this notification subscription is scoped to. |
| `project` | `voxgig_value* (map)` | The project that this notification subscription is scoped to. |
| `subscriber` | `voxgig_value* (map)` | The user who will receive notifications from this subscription. |
| `team` | `voxgig_value* (map)` | The team that this notification subscription is scoped to. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |
| `user` | `voxgig_value* (map)` | The user that this notification subscription is scoped to, for user-specific view subscriptions. |
| `userContextViewType` | `char*` | The type of user-specific view that further scopes a user notification subscription. |

#### Example: Load

```c
Entity* notification_subscription = linear_notification_subscription(client, NULL);
voxgig_value* notification_subscription_rec = notification_subscription->vt->load(notification_subscription, cmap(1, "id", v_str("notification_subscription_id")), NULL, &err);
```

#### Example: List

```c
Entity* notification_subscription = linear_notification_subscription(client, NULL);
voxgig_value* notification_subscriptions = notification_subscription->vt->list(notification_subscription, NULL, NULL, &err);
```


### OAuthApplication

Create an instance: `Entity* o_auth_application = linear_o_auth_application(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `clientId` | `char*` | The client ID used during OAuth authorization flows. |
| `createdAt` | `voxgig_value*` | The time at which the OAuth application was created. |
| `description` | `char*` | User-facing description of the OAuth application. |
| `developer` | `char*` | Name of the developer or company that built the OAuth application. |
| `developerUrl` | `char*` | URL of the developer's website, homepage, or documentation. |
| `distribution` | `char*` | Distribution setting for the OAuth application. |
| `grantTypes` | `char*` | OAuth grant types supported by this application. |
| `id` | `char*` | The unique identifier of the OAuth application. |
| `imageUrl` | `char*` | URL of the OAuth application's icon. |
| `name` | `char*` | The human-readable name of the OAuth application. |
| `redirectUris` | `char*` | Allowed redirect URIs for OAuth authorization flows. |
| `updatedAt` | `voxgig_value*` | The time at which the OAuth application was last updated. |
| `webhookEnabled` | `bool` | Whether webhook delivery is enabled for this OAuth application. |
| `webhookResourceTypes` | `char*` | Resource types the OAuth application's webhooks subscribe to. |
| `webhookUrl` | `char*` | Webhook URL used for delivering webhook payloads. |

#### Example: Load

```c
Entity* o_auth_application = linear_o_auth_application(client, NULL);
voxgig_value* o_auth_application_rec = o_auth_application->vt->load(o_auth_application, cmap(1, "id", v_str("o_auth_application_id")), NULL, &err);
```

#### Example: List

```c
Entity* o_auth_application = linear_o_auth_application(client, NULL);
voxgig_value* o_auth_applications = o_auth_application->vt->list(o_auth_application, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* o_auth_application = linear_o_auth_application(client, NULL);
voxgig_value* o_auth_application_rec = o_auth_application->vt->create(o_auth_application, cmap(12,
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


### Organization

Create an instance: `Entity* organization = linear_organization(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agentAutomationEnabled` | `bool` | [INTERNAL] Whether the workspace has enabled agent automation. |
| `aiAddonEnabled` | `bool` | [INTERNAL] Whether the workspace has enabled the AI add-on (which at this point only includes triage suggestions). |
| `aiDiscussionSummariesEnabled` | `bool` | Whether the workspace has enabled AI discussion summaries for issues. |
| `aiProviderConfiguration` | `voxgig_value*` | [INTERNAL] Configure per-modality AI host providers and model families. |
| `aiTelemetryEnabled` | `bool` | [INTERNAL] Whether the workspace has opted in to AI telemetry. |
| `aiThreadSummariesEnabled` | `bool` | Whether the workspace has enabled resolved thread AI summaries. |
| `allowedFileUploadContentTypes` | `char*` | Allowed file upload content types |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `authSettings` | `voxgig_value*` | Authentication settings for the workspace, including allowed auth providers, bypass rules, and organization visibility during signup. |
| `codeIntelligenceEnabled` | `bool` | [INTERNAL] Whether code intelligence is enabled for the workspace. |
| `codeIntelligenceRepository` | `char*` | [INTERNAL] GitHub repository in owner/repo format for code intelligence. |
| `codingAgentEnabled` | `bool` | [INTERNAL] Whether the workspace has enabled Coding Sessions. |
| `codingAgentSettings` | `voxgig_value*` | [Internal] Settings for Coding Sessions features. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `createdIssueCount` | `int64_t` | Approximate total number of issues created in the workspace, including archived ones. |
| `customerCount` | `int64_t` | The number of active (non-archived) customers tracked in the workspace. |
| `customersConfiguration` | `voxgig_value*` | Configuration settings for the Customers feature, including revenue currency and other customer tracking preferences. |
| `customersEnabled` | `bool` | Whether the Customers feature is enabled and accessible for the workspace based on the current plan. |
| `defaultFeedSummarySchedule` | `char*` | Default schedule for how often feed summaries are generated. |
| `defaultHomeView` | `char*` | The default home view for members of the workspace who have not chosen their own default. |
| `defaultHomeViewTargetId` | `char*` | The id of the specific initiative, project, view, dashboard, or page tab used as the default home view. |
| `deletionRequestedAt` | `voxgig_value*` | The time at which deletion of the workspace was requested. |
| `feedEnabled` | `bool` | Whether the activity feed feature is enabled for the workspace. |
| `fiscalYearStartMonth` | `double` | The zero-indexed month at which the fiscal year starts (0 = January, 11 = December). |
| `generatedUpdatesEnabled` | `bool` | [INTERNAL] Whether the workspace has enabled generated updates. |
| `gitBranchFormat` | `char*` | The template format for Git branch names created from issues. |
| `gitLinkbackDescriptionsEnabled` | `bool` | Whether issue descriptions should be included in the Git integration linkback messages posted to pull requests. |
| `gitLinkbackMessagesEnabled` | `bool` | Whether the Git integration linkback messages should be posted as comments on pull requests in private repositories. |
| `gitPublicLinkbackMessagesEnabled` | `bool` | Whether the Git integration linkback messages should be posted as comments on pull requests in public repositories. |
| `hipaaComplianceEnabled` | `bool` | Whether HIPAA compliance is enabled for the workspace. |
| `id` | `char*` | The unique identifier of the entity. |
| `initiativeUpdateReminderFrequencyInWeeks` | `double` | The frequency in weeks at which to prompt for initiative updates. |
| `initiativeUpdateRemindersDay` | `char*` | The day of the week on which initiative update reminders are sent. |
| `initiativeUpdateRemindersHour` | `double` | The hour of the day (0-23) at which initiative update reminders are sent. |
| `linearAgentEnabled` | `bool` | [Internal] Whether the workspace has enabled Linear Agent. |
| `linearAgentSettings` | `voxgig_value*` | [Internal] Settings for Linear Agent features. |
| `logoUrl` | `char*` | The URL of the workspace's logo image. |
| `name` | `char*` | The workspace's name. |
| `periodUploadVolume` | `double` | Rolling 30-day total file upload volume for the workspace, measured in megabytes. |
| `previousUrlKeys` | `char*` | Previously used URL keys for the workspace. |
| `projectUpdateReminderFrequencyInWeeks` | `double` | The frequency in weeks at which to prompt for project updates. |
| `projectUpdateRemindersDay` | `char*` | The day of the week on which project update reminders are sent. |
| `projectUpdateRemindersHour` | `double` | The hour of the day (0-23) at which project update reminders are sent. |
| `pullRequestIssueMode` | `char*` | How Linear suggests and links issues for pull requests that have none linked: 'off', 'suggest', or 'autoOnMerge'. |
| `pullRequestTourEnabled` | `bool` | Whether the workspace generates AI Pull Request guides for new pull requests. |
| `releaseChannel` | `char*` | The feature release channel the workspace belongs to, which controls access to pre-release features. |
| `releasesEnabled` | `bool` | Whether release management is enabled for the workspace. |
| `restrictAgentInvocationToMembers` | `bool` | [Internal] Whether agent invocation is restricted to full workspace members. |
| `roadmapEnabled` | `bool` | Whether the roadmap feature is enabled for the workspace. |
| `samlEnabled` | `bool` | Whether SAML-based single sign-on authentication is enabled for the workspace. |
| `samlSettings` | `voxgig_value*` | [INTERNAL] SAML settings. |
| `scimEnabled` | `bool` | Whether SCIM provisioning is enabled for the workspace, allowing automated user and team management from an identity provider. |
| `scimSettings` | `voxgig_value*` | [INTERNAL] SCIM settings. |
| `securitySettings` | `voxgig_value*` | Security settings for the workspace, including role-based restrictions for invitations, team creation, label management, and other sensitive operations. |
| `slackAutoCreateProjectChannel` | `bool` | [Internal] Whether to automatically create a Slack channel when a new project is created. |
| `slackProjectChannelIntegration` | `voxgig_value* (map)` | The Slack integration used for auto-creating project channels. |
| `slackProjectChannelPrefix` | `char*` | The prefix used for auto-created Slack project channels. |
| `slackProjectChannelsEnabled` | `bool` | [Internal] Whether the Slack project channels feature is enabled for the workspace. |
| `subscription` | `voxgig_value* (map)` | The workspace's subscription to a paid plan. |
| `themeSettings` | `voxgig_value*` | [ALPHA] Theme settings for the workspace. |
| `trialEndsAt` | `voxgig_value*` | The time at which the current plan trial will end. |
| `trialStartsAt` | `voxgig_value*` | The time at which the current plan trial started. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |
| `urlKey` | `char*` | The workspace's unique URL key, used in URLs to identify the workspace. |
| `userCount` | `int64_t` | The number of active (non-deactivated) users in the workspace. |
| `workingDays` | `double` | [Internal] The list of working days. |

#### Example: Load

```c
Entity* organization = linear_organization(client, NULL);
voxgig_value* organization_rec = organization->vt->load(organization, cmap(1, "id", v_str("organization_id")), NULL, &err);
```


### OrganizationDomain

Create an instance: `Entity* organization_domain = linear_organization_domain(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `authType` | `char*` | The authentication type this domain is used for. |
| `claimed` | `bool` | Whether the domain was claimed by the workspace through DNS TXT record verification. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | The user who added the domain. |
| `disableOrganizationCreation` | `bool` | Whether users with email addresses from this domain are prevented from creating new workspaces. |
| `id` | `char*` | The unique identifier of the entity. |
| `identityProvider` | `voxgig_value* (map)` | The identity provider the domain belongs to. |
| `name` | `char*` | The domain name (e.g., 'example.com'). |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |
| `verificationEmail` | `char*` | The email address used to verify this domain. |
| `verified` | `bool` | Whether the domain has been verified via email verification. |

#### Example: Create

```c
Entity* organization_domain = linear_organization_domain(client, NULL);
voxgig_value* organization_domain_rec = organization_domain->vt->create(organization_domain, cmap(6,
    "authType", v_str("example_authType"),  // char*
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "name", v_str("example_name"),  // char*
    "updatedAt", v_str("example_updatedAt"),  // voxgig_value*
    "verified", v_bool(true))  // bool
, NULL, &err);
```


### OrganizationInvite

Create an instance: `Entity* organization_invite = linear_organization_invite(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `acceptedAt` | `voxgig_value*` | The time at which the invite was accepted by the invitee. |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `email` | `char*` | The email address of the person being invited to the workspace. |
| `expiresAt` | `voxgig_value*` | The time at which the invite will expire and can no longer be accepted. |
| `external` | `bool` | Whether the invite was sent to an email address outside the workspace's verified domains. |
| `id` | `char*` | The unique identifier of the entity. |
| `invitee` | `voxgig_value* (map)` | The user who has accepted the invite. |
| `inviter` | `voxgig_value* (map)` | The user who created the invitation. |
| `metadata` | `voxgig_value*` | Extra metadata associated with the invite. |
| `organization` | `voxgig_value* (map)` | The workspace that the invite is associated with. |
| `role` | `char*` | The workspace role (admin, member, guest, or owner) that the invitee will receive upon accepting the invite. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```c
Entity* organization_invite = linear_organization_invite(client, NULL);
voxgig_value* organization_invite_rec = organization_invite->vt->load(organization_invite, cmap(1, "id", v_str("organization_invite_id")), NULL, &err);
```

#### Example: List

```c
Entity* organization_invite = linear_organization_invite(client, NULL);
voxgig_value* organization_invites = organization_invite->vt->list(organization_invite, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* organization_invite = linear_organization_invite(client, NULL);
voxgig_value* organization_invite_rec = organization_invite->vt->create(organization_invite, cmap(6,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "email", v_str("example_email"),  // char*
    "external", v_bool(true),  // bool
    "id", v_str("example_id"),  // char*
    "role", v_str("example_role"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```


### OrganizationMeta

Create an instance: `Entity* organization_meta = linear_organization_meta(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowedAuthServices` | `char*` | Allowed authentication providers, empty array means all are allowed. |
| `region` | `char*` | The region the workspace is hosted in. |

#### Example: Load

```c
Entity* organization_meta = linear_organization_meta(client, NULL);
voxgig_value* organization_meta_rec = organization_meta->vt->load(organization_meta, cmap(1, "url_key", v_str("url_key")), NULL, &err);
```


### PasskeyLoginStartResponse

Create an instance: `Entity* passkey_login_start_response = linear_passkey_login_start_response(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `options` | `voxgig_value*` | The passkey authentication options to pass to the WebAuthn API. |
| `success` | `bool` | Whether the operation was successful. |


### Project

Create an instance: `Entity* project = linear_project(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `autoArchivedAt` | `voxgig_value*` | The time at which the project was automatically archived by the auto-pruning process. |
| `canceledAt` | `voxgig_value*` | The time at which the project was moved into a canceled status. |
| `color` | `char*` | The project's color as a HEX string. |
| `completedAt` | `voxgig_value*` | The time at which the project was moved into a completed status. |
| `completedIssueCountHistory` | `double` | The number of completed issues in the project at the end of each week since project creation. |
| `completedScopeHistory` | `double` | The number of completed estimation points at the end of each week since project creation. |
| `content` | `char*` | The project's content in markdown format. |
| `contentState` | `char*` | [Internal] The project's content as YJS state. |
| `convertedFromIssue` | `voxgig_value* (map)` | The issue that was converted into this project. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | The user who created the project. |
| `currentProgress` | `voxgig_value*` | [INTERNAL] The current progress of the project, broken down by issue status category. |
| `description` | `char*` | The short description of the project. |
| `documentContent` | `voxgig_value* (map)` | The content of the project description. |
| `favorite` | `voxgig_value* (map)` | The user's favorite associated with this project. |
| `frequencyResolution` | `char*` | The resolution of the reminder frequency. |
| `health` | `char*` | The overall health of the project, derived from the most recent project update. |
| `healthUpdatedAt` | `voxgig_value*` | The time at which the project health was last updated, typically when a new project update is posted. |
| `icon` | `char*` | The icon of the project. |
| `id` | `char*` | The unique identifier of the entity. |
| `identifier` | `char*` | [Internal] The human-readable identifier of the project. |
| `inProgressScopeHistory` | `double` | The number of in-progress estimation points at the end of each week since project creation. |
| `integrationsSettings` | `voxgig_value* (map)` | Settings for all integrations associated with that project. |
| `issueCountHistory` | `double` | The total number of issues in the project at the end of each week since project creation. |
| `labelIds` | `char*` | The IDs of the project labels associated with this project. |
| `lastAppliedTemplate` | `voxgig_value* (map)` | The last template that was applied to this project. |
| `lastUpdate` | `voxgig_value* (map)` | The most recent status update posted for this project. |
| `lead` | `voxgig_value* (map)` | The user who leads the project. |
| `leadTeam` | `voxgig_value* (map)` | [Internal] The team that leads the project. |
| `microsoftTeamsChannelId` | `char*` | The ID of the Microsoft Teams channel connected to the project, if any. |
| `name` | `char*` | The name of the project. |
| `previousIdentifiers` | `char*` | [Internal] Identifiers (default and custom) that this project has previously held. |
| `priority` | `int64_t` | The priority of the project. |
| `priorityLabel` | `char*` | The priority of the project as a label. |
| `prioritySortOrder` | `double` | The sort order for the project within the workspace when ordered by priority. |
| `progress` | `double` | The overall progress of the project. |
| `progressHistory` | `voxgig_value*` | [INTERNAL] The progress history of the project, tracking issue completion over time. |
| `projectUpdateRemindersPausedUntilAt` | `voxgig_value*` | The time until which project update reminders are paused. |
| `resourceCount` | `int64_t` | The number of resources associated with the project, including documents, external links, and attachments. |
| `scope` | `double` | The overall scope (total estimate points) of the project. |
| `scopeHistory` | `double` | The total scope (estimation points) of the project at the end of each week since project creation. |
| `slackChannelId` | `char*` | The ID of the Slack channel connected to the project, if any. |
| `slugId` | `char*` | The project's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `double` | The sort order for the project within the workspace. |
| `startDate` | `voxgig_value*` | The estimated start date of the project. |
| `startDateResolution` | `char*` | The resolution of the project's start date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `startedAt` | `voxgig_value*` | The time at which the project was moved into a started status. |
| `status` | `voxgig_value* (map)` | The current project status. |
| `targetDate` | `voxgig_value*` | The estimated completion date of the project. |
| `targetDateResolution` | `char*` | The resolution of the project's estimated completion date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `trashed` | `bool` | A flag that indicates whether the project is in the trash bin. |
| `updateReminderFrequency` | `double` | The frequency at which to prompt for updates. |
| `updateReminderFrequencyInWeeks` | `double` | The n-weekly frequency at which to prompt for updates. |
| `updateRemindersDay` | `char*` | The day at which to prompt for updates. |
| `updateRemindersHour` | `double` | The hour at which to prompt for updates. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | Project URL. |

#### Example: Load

```c
Entity* project = linear_project(client, NULL);
voxgig_value* project_rec = project->vt->load(project, cmap(1, "id", v_str("project_id")), NULL, &err);
```

#### Example: List

```c
Entity* project = linear_project(client, NULL);
voxgig_value* projects = project->vt->list(project, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* project = linear_project(client, NULL);
voxgig_value* project_rec = project->vt->create(project, cmap(25,
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


### ProjectLabel

Create an instance: `Entity* project_label = linear_project_label(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `color` | `char*` | The label's color as a HEX string (e.g., '#EB5757'). |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | The user who created the label. |
| `description` | `char*` | The label's description. |
| `id` | `char*` | The unique identifier of the entity. |
| `inheritedFrom` | `voxgig_value* (map)` | [Internal] The original workspace or parent-team label that this label was inherited from. |
| `isGroup` | `bool` | Whether the label is a group. |
| `lastAppliedAt` | `voxgig_value*` | The date when the label was last applied to an issue, project, or initiative. |
| `name` | `char*` | The label's name. |
| `organization` | `voxgig_value* (map)` | The workspace that the project label belongs to. |
| `parent` | `voxgig_value* (map)` | The parent label group. |
| `retiredAt` | `voxgig_value*` | [Internal] When the label was retired. |
| `retiredBy` | `voxgig_value* (map)` | The user who retired the label. |
| `team` | `voxgig_value* (map)` | [Internal] The team that the label is scoped to. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```c
Entity* project_label = linear_project_label(client, NULL);
voxgig_value* project_label_rec = project_label->vt->load(project_label, cmap(1, "id", v_str("project_label_id")), NULL, &err);
```

#### Example: List

```c
Entity* project_label = linear_project_label(client, NULL);
voxgig_value* project_labels = project_label->vt->list(project_label, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* project_label = linear_project_label(client, NULL);
voxgig_value* project_label_rec = project_label->vt->create(project_label, cmap(6,
    "color", v_str("example_color"),  // char*
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "isGroup", v_bool(true),  // bool
    "name", v_str("example_name"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```


### ProjectMilestone

Create an instance: `Entity* project_milestone = linear_project_milestone(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `currentProgress` | `voxgig_value*` | [Internal] The current progress of the milestone, broken down by issue status category. |
| `description` | `char*` | The project milestone's description in markdown format. |
| `descriptionState` | `char*` | [Internal] The project milestone's description as YJS state. |
| `documentContent` | `voxgig_value* (map)` | The rich-text content of the milestone description. |
| `id` | `char*` | The unique identifier of the entity. |
| `name` | `char*` | The name of the project milestone. |
| `progress` | `double` | The progress % of the project milestone. |
| `progressHistory` | `voxgig_value*` | [Internal] The progress history of the milestone, tracking issue completion over time. |
| `project` | `voxgig_value* (map)` | The project that this milestone belongs to. |
| `sortOrder` | `double` | The order of the milestone in relation to other milestones within a project. |
| `status` | `char*` | The status of the project milestone. |
| `targetDate` | `voxgig_value*` | The planned completion date of the milestone. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```c
Entity* project_milestone = linear_project_milestone(client, NULL);
voxgig_value* project_milestone_rec = project_milestone->vt->load(project_milestone, cmap(1, "id", v_str("project_milestone_id")), NULL, &err);
```

#### Example: List

```c
Entity* project_milestone = linear_project_milestone(client, NULL);
voxgig_value* project_milestones = project_milestone->vt->list(project_milestone, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* project_milestone = linear_project_milestone(client, NULL);
voxgig_value* project_milestone_rec = project_milestone->vt->create(project_milestone, cmap(9,
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


### ProjectMilestoneMoveProjectTeam

Create an instance: `Entity* project_milestone_move_project_team = linear_project_milestone_move_project_team(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `char*` |  |
| `projectId` | `char*` | The project id |
| `teamIds` | `char*` | The team ids for the project |


### ProjectRelation

Create an instance: `Entity* project_relation = linear_project_relation(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `anchorType` | `char*` | The type of anchor on the source project end of the relation, indicating whether it is anchored to the project itself or a specific milestone. |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `id` | `char*` | The unique identifier of the entity. |
| `project` | `voxgig_value* (map)` | The source project in the dependency relation. |
| `projectMilestone` | `voxgig_value* (map)` | The specific milestone within the source project that the relation is anchored to. |
| `relatedAnchorType` | `char*` | The type of anchor on the target project end of the relation, indicating whether it is anchored to the project itself or a specific milestone. |
| `relatedProject` | `voxgig_value* (map)` | The target project in the dependency relation. |
| `relatedProjectMilestone` | `voxgig_value* (map)` | The specific milestone within the target project that the relation is anchored to. |
| `type` | `char*` | The type of dependency relationship from the project to the related project (e.g., blocks). |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |
| `user` | `voxgig_value* (map)` | The user who last created or modified the relation. |

#### Example: Load

```c
Entity* project_relation = linear_project_relation(client, NULL);
voxgig_value* project_relation_rec = project_relation->vt->load(project_relation, cmap(1, "id", v_str("project_relation_id")), NULL, &err);
```

#### Example: List

```c
Entity* project_relation = linear_project_relation(client, NULL);
voxgig_value* project_relations = project_relation->vt->list(project_relation, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* project_relation = linear_project_relation(client, NULL);
voxgig_value* project_relation_rec = project_relation->vt->create(project_relation, cmap(6,
    "anchorType", v_str("example_anchorType"),  // char*
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "relatedAnchorType", v_str("example_relatedAnchorType"),  // char*
    "type", v_str("example_type"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```


### ProjectSearchResult

Create an instance: `Entity* project_search_result = linear_project_search_result(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `autoArchivedAt` | `voxgig_value*` | The time at which the project was automatically archived by the auto-pruning process. |
| `canceledAt` | `voxgig_value*` | The time at which the project was moved into a canceled status. |
| `color` | `char*` | The project's color as a HEX string. |
| `completedAt` | `voxgig_value*` | The time at which the project was moved into a completed status. |
| `completedIssueCountHistory` | `double` | The number of completed issues in the project at the end of each week since project creation. |
| `completedScopeHistory` | `double` | The number of completed estimation points at the end of each week since project creation. |
| `content` | `char*` | The project's content in markdown format. |
| `contentState` | `char*` | [Internal] The project's content as YJS state. |
| `convertedFromIssue` | `voxgig_value* (map)` | The issue that was converted into this project. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | The user who created the project. |
| `currentProgress` | `voxgig_value*` | [INTERNAL] The current progress of the project, broken down by issue status category. |
| `description` | `char*` | The short description of the project. |
| `documentContent` | `voxgig_value* (map)` | The content of the project description. |
| `favorite` | `voxgig_value* (map)` | The user's favorite associated with this project. |
| `frequencyResolution` | `char*` | The resolution of the reminder frequency. |
| `health` | `char*` | The overall health of the project, derived from the most recent project update. |
| `healthUpdatedAt` | `voxgig_value*` | The time at which the project health was last updated, typically when a new project update is posted. |
| `icon` | `char*` | The icon of the project. |
| `id` | `char*` | The unique identifier of the entity. |
| `identifier` | `char*` | [Internal] The human-readable identifier of the project. |
| `inProgressScopeHistory` | `double` | The number of in-progress estimation points at the end of each week since project creation. |
| `integrationsSettings` | `voxgig_value* (map)` | Settings for all integrations associated with that project. |
| `issueCountHistory` | `double` | The total number of issues in the project at the end of each week since project creation. |
| `labelIds` | `char*` | The IDs of the project labels associated with this project. |
| `lastAppliedTemplate` | `voxgig_value* (map)` | The last template that was applied to this project. |
| `lastUpdate` | `voxgig_value* (map)` | The most recent status update posted for this project. |
| `lead` | `voxgig_value* (map)` | The user who leads the project. |
| `leadTeam` | `voxgig_value* (map)` | [Internal] The team that leads the project. |
| `metadata` | `voxgig_value*` | Metadata related to search result. |
| `microsoftTeamsChannelId` | `char*` | The ID of the Microsoft Teams channel connected to the project, if any. |
| `name` | `char*` | The name of the project. |
| `previousIdentifiers` | `char*` | [Internal] Identifiers (default and custom) that this project has previously held. |
| `priority` | `int64_t` | The priority of the project. |
| `priorityLabel` | `char*` | The priority of the project as a label. |
| `prioritySortOrder` | `double` | The sort order for the project within the workspace when ordered by priority. |
| `progress` | `double` | The overall progress of the project. |
| `progressHistory` | `voxgig_value*` | [INTERNAL] The progress history of the project, tracking issue completion over time. |
| `projectUpdateRemindersPausedUntilAt` | `voxgig_value*` | The time until which project update reminders are paused. |
| `resourceCount` | `int64_t` | The number of resources associated with the project, including documents, external links, and attachments. |
| `scope` | `double` | The overall scope (total estimate points) of the project. |
| `scopeHistory` | `double` | The total scope (estimation points) of the project at the end of each week since project creation. |
| `slackChannelId` | `char*` | The ID of the Slack channel connected to the project, if any. |
| `slugId` | `char*` | The project's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `double` | The sort order for the project within the workspace. |
| `startDate` | `voxgig_value*` | The estimated start date of the project. |
| `startDateResolution` | `char*` | The resolution of the project's start date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `startedAt` | `voxgig_value*` | The time at which the project was moved into a started status. |
| `status` | `voxgig_value* (map)` | The current project status. |
| `targetDate` | `voxgig_value*` | The estimated completion date of the project. |
| `targetDateResolution` | `char*` | The resolution of the project's estimated completion date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `trashed` | `bool` | A flag that indicates whether the project is in the trash bin. |
| `updateReminderFrequency` | `double` | The frequency at which to prompt for updates. |
| `updateReminderFrequencyInWeeks` | `double` | The n-weekly frequency at which to prompt for updates. |
| `updateRemindersDay` | `char*` | The day at which to prompt for updates. |
| `updateRemindersHour` | `double` | The hour at which to prompt for updates. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | Project URL. |

#### Example: List

```c
Entity* project_search_result = linear_project_search_result(client, NULL);
voxgig_value* project_search_results = project_search_result->vt->list(project_search_result, NULL, NULL, &err);
```


### ProjectStatus

Create an instance: `Entity* project_status = linear_project_status(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `color` | `char*` | The color of the status as a HEX string, used for display in the UI. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `description` | `char*` | Description of the status. |
| `id` | `char*` | The unique identifier of the entity. |
| `indefinite` | `bool` | Whether a project can remain in this status indefinitely. |
| `inheritedFrom` | `voxgig_value* (map)` | [Internal] The original workspace or parent-team status that this status was inherited from. |
| `name` | `char*` | The name of the status. |
| `position` | `double` | The position of the status within its type group in the workspace's project flow. |
| `team` | `voxgig_value* (map)` | [Internal] The team that the status is scoped to. |
| `type` | `char*` | The category type of the project status (e.g., backlog, planned, started, paused, completed, canceled). |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```c
Entity* project_status = linear_project_status(client, NULL);
voxgig_value* project_status_rec = project_status->vt->load(project_status, cmap(1, "id", v_str("project_status_id")), NULL, &err);
```

#### Example: List

```c
Entity* project_status = linear_project_status(client, NULL);
voxgig_value* project_statuss = project_status->vt->list(project_status, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* project_status = linear_project_status(client, NULL);
voxgig_value* project_status_rec = project_status->vt->create(project_status, cmap(8,
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


### ProjectUpdate

Create an instance: `Entity* project_update = linear_project_update(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `body` | `char*` | The update content in markdown format. |
| `bodyData` | `char*` | [Internal] The content of the update as a Prosemirror document. |
| `commentCount` | `int64_t` | Number of comments associated with the project update. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `diff` | `voxgig_value*` | The diff between the current update and the previous one. |
| `diffMarkdown` | `char*` | The diff between the current update and the previous one, formatted as markdown. |
| `editedAt` | `voxgig_value*` | The time the update was edited. |
| `health` | `char*` | The health of the project at the time this update was posted. |
| `id` | `char*` | The unique identifier of the entity. |
| `infoSnapshot` | `voxgig_value*` | [Internal] A snapshot of project properties at the time the update was posted, including team, milestone, and issue statistics. |
| `isDiffHidden` | `bool` | Whether the diff between this update and the previous one should be hidden in the UI. |
| `isStale` | `bool` | Whether the project update is stale. |
| `project` | `voxgig_value* (map)` | The project that this status update was posted to. |
| `reactionData` | `voxgig_value*` | Emoji reaction summary, grouped by emoji type. |
| `shortSummary` | `char*` | A short AI-generated summary of the project update. |
| `slugId` | `char*` | The update's unique URL slug. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | The URL to the project update. |
| `user` | `voxgig_value* (map)` | The user who wrote the update. |

#### Example: Load

```c
Entity* project_update = linear_project_update(client, NULL);
voxgig_value* project_update_rec = project_update->vt->load(project_update, cmap(1, "id", v_str("project_update_id")), NULL, &err);
```

#### Example: List

```c
Entity* project_update = linear_project_update(client, NULL);
voxgig_value* project_updates = project_update->vt->list(project_update, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* project_update = linear_project_update(client, NULL);
voxgig_value* project_update_rec = project_update->vt->create(project_update, cmap(12,
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


### PushSubscription

Create an instance: `Entity* push_subscription = linear_push_subscription(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `id` | `char*` | The unique identifier of the entity. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |

#### Example: Create

```c
Entity* push_subscription = linear_push_subscription(client, NULL);
voxgig_value* push_subscription_rec = push_subscription->vt->create(push_subscription, cmap(3,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```


### Reaction

Create an instance: `Entity* reaction = linear_reaction(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `comment` | `voxgig_value* (map)` | The comment that the reaction is associated with. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `emoji` | `char*` | The name of the emoji used for this reaction. |
| `externalUser` | `voxgig_value* (map)` | The external user that created the reaction through an integration. |
| `id` | `char*` | The unique identifier of the entity. |
| `initiativeUpdate` | `voxgig_value* (map)` | The initiative update that the reaction is associated with. |
| `issue` | `voxgig_value* (map)` | The issue that the reaction is associated with. |
| `post` | `voxgig_value* (map)` | The post that the reaction is associated with. |
| `projectUpdate` | `voxgig_value* (map)` | The project update that the reaction is associated with. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |
| `user` | `voxgig_value* (map)` | The workspace user that created the reaction. |

#### Example: Create

```c
Entity* reaction = linear_reaction(client, NULL);
voxgig_value* reaction_rec = reaction->vt->create(reaction, cmap(4,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "emoji", v_str("example_emoji"),  // char*
    "id", v_str("example_id"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```


### Release

Create an instance: `Entity* release = linear_release(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `autoArchivedAt` | `voxgig_value*` | The time at which the release was automatically archived by the auto pruning process. |
| `canceledAt` | `voxgig_value*` | The time at which the release was canceled. |
| `commitSha` | `char*` | The Git commit SHA associated with this release. |
| `completedAt` | `voxgig_value*` | The time at which the release was completed. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | The user who created the release. |
| `currentProgress` | `voxgig_value*` | The current progress summary for the release, including counts of issues by workflow state type (e.g., completed, in progress, unstarted). |
| `description` | `char*` | The description of the release in plain text or markdown. |
| `id` | `char*` | The unique identifier of the entity. |
| `issueCount` | `int64_t` | Number of issues associated with the release. |
| `name` | `char*` | The name of the release. |
| `pipeline` | `voxgig_value* (map)` | The release pipeline that this release belongs to. |
| `progressHistory` | `voxgig_value*` | The historical progress snapshots for the release, tracking how issue completion has evolved over time. |
| `releaseNote` | `voxgig_value* (map)` | [Internal] The primary release note covering this release. |
| `slugId` | `char*` | The release's unique URL slug, used to construct human-readable URLs for the release. |
| `stage` | `voxgig_value* (map)` | The current stage of the release within its pipeline (e.g., Planned, In Progress, Completed, Canceled). |
| `startDate` | `voxgig_value*` | The estimated start date of the release. |
| `startedAt` | `voxgig_value*` | The time at which the release first entered a started stage. |
| `targetDate` | `voxgig_value*` | The estimated completion date of the release. |
| `trashed` | `bool` | A flag that indicates whether the release is in the trash bin. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | The URL to the release page in the Linear app. |
| `version` | `char*` | The version identifier for this release (e.g., 'v1.2.3' or a short commit hash). |

#### Example: Load

```c
Entity* release = linear_release(client, NULL);
voxgig_value* release_rec = release->vt->load(release, cmap(1, "id", v_str("release_id")), NULL, &err);
```

#### Example: List

```c
Entity* release = linear_release(client, NULL);
voxgig_value* releases = release->vt->list(release, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* release = linear_release(client, NULL);
voxgig_value* release_rec = release->vt->create(release, cmap(9,
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


### ReleaseNote

Create an instance: `Entity* release_note = linear_release_note(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `documentContent` | `voxgig_value* (map)` | Document content backing the release note body. |
| `firstRelease` | `voxgig_value* (map)` | The earliest release covered by this note. |
| `generationStatus` | `char*` | Generation status when these release notes are being auto-generated: `pending` while the LLM call is running, `completed` once it lands. |
| `id` | `char*` | The unique identifier of the entity. |
| `lastRelease` | `voxgig_value* (map)` | The most recent release covered by this note. |
| `pipeline` | `voxgig_value* (map)` | The release pipeline that this note belongs to. |
| `releaseCount` | `int64_t` | The number of releases covered by this note. |
| `slugId` | `char*` | The release note's unique URL slug, used to construct human-readable URLs for the note. |
| `title` | `char*` | User-supplied title for the release note. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | The URL to the release note page in the Linear app. |

#### Example: Load

```c
Entity* release_note = linear_release_note(client, NULL);
voxgig_value* release_note_rec = release_note->vt->load(release_note, cmap(1, "id", v_str("release_note_id")), NULL, &err);
```

#### Example: List

```c
Entity* release_note = linear_release_note(client, NULL);
voxgig_value* release_notes = release_note->vt->list(release_note, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* release_note = linear_release_note(client, NULL);
voxgig_value* release_note_rec = release_note->vt->create(release_note, cmap(6,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "releaseCount", v_num(1),  // int64_t
    "slugId", v_str("example_slugId"),  // char*
    "updatedAt", v_str("example_updatedAt"),  // voxgig_value*
    "url", v_str("example_url"))  // char*
, NULL, &err);
```


### ReleasePipeline

Create an instance: `Entity* release_pipeline = linear_release_pipeline(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approximateReleaseCount` | `int64_t` | The approximate number of non-archived releases in this pipeline. |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `autoGenerateReleaseNotesOnCompletion` | `bool` | Whether to automatically generate a release note when a release is completed. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `id` | `char*` | The unique identifier of the entity. |
| `includePathPatterns` | `char*` | Glob patterns to filter commits by file path. |
| `isProduction` | `bool` | Whether this pipeline targets a production environment. |
| `latestReleaseNote` | `voxgig_value* (map)` | The release note in this pipeline whose covered range ends with the most recent release. |
| `name` | `char*` | The name of the pipeline. |
| `releaseNoteTemplate` | `voxgig_value* (map)` | The document template used to define the release notes format for this pipeline. |
| `rolloverIssuesOnCompletion` | `bool` | Whether completing a scheduled release moves its open issues to the next release. |
| `slugId` | `char*` | The pipeline's unique slug identifier, used in URLs and for lookup by human-readable identifier instead of UUID. |
| `trashed` | `bool` | A flag that indicates whether the pipeline is in the trash bin. |
| `type` | `char*` | The type of the pipeline, which determines how releases are created and managed. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | The URL to the release pipeline's releases list in the Linear app. |

#### Example: Load

```c
Entity* release_pipeline = linear_release_pipeline(client, NULL);
voxgig_value* release_pipeline_rec = release_pipeline->vt->load(release_pipeline, cmap(1, "id", v_str("release_pipeline_id")), NULL, &err);
```

#### Example: List

```c
Entity* release_pipeline = linear_release_pipeline(client, NULL);
voxgig_value* release_pipelines = release_pipeline->vt->list(release_pipeline, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* release_pipeline = linear_release_pipeline(client, NULL);
voxgig_value* release_pipeline_rec = release_pipeline->vt->create(release_pipeline, cmap(12,
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


### ReleaseStage

Create an instance: `Entity* release_stage = linear_release_stage(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `color` | `char*` | The display color of the stage as a HEX string (e.g., '#0f783c'), used for visual representation in the UI. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `frozen` | `bool` | Whether this stage is frozen. |
| `id` | `char*` | The unique identifier of the entity. |
| `name` | `char*` | The name of the stage. |
| `pipeline` | `voxgig_value* (map)` | The release pipeline that this stage belongs to. |
| `position` | `double` | The position of the stage within its pipeline, used for ordering stages in the UI. |
| `type` | `char*` | The lifecycle type of the stage (planned, started, completed, or canceled). |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```c
Entity* release_stage = linear_release_stage(client, NULL);
voxgig_value* release_stage_rec = release_stage->vt->load(release_stage, cmap(1, "id", v_str("release_stage_id")), NULL, &err);
```

#### Example: List

```c
Entity* release_stage = linear_release_stage(client, NULL);
voxgig_value* release_stages = release_stage->vt->list(release_stage, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* release_stage = linear_release_stage(client, NULL);
voxgig_value* release_stage_rec = release_stage->vt->create(release_stage, cmap(8,
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


### Roadmap

Create an instance: `Entity* roadmap = linear_roadmap(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `color` | `char*` | The roadmap's color. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | The user who created the roadmap. |
| `description` | `char*` | The description of the roadmap. |
| `id` | `char*` | The unique identifier of the entity. |
| `name` | `char*` | The name of the roadmap. |
| `organization` | `voxgig_value* (map)` | The workspace of the roadmap. |
| `owner` | `voxgig_value* (map)` | The user who owns the roadmap. |
| `slugId` | `char*` | The roadmap's unique URL slug. |
| `sortOrder` | `double` | The sort order of the roadmap within the workspace. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | The canonical url for the roadmap. |

#### Example: Load

```c
Entity* roadmap = linear_roadmap(client, NULL);
voxgig_value* roadmap_rec = roadmap->vt->load(roadmap, cmap(1, "id", v_str("roadmap_id")), NULL, &err);
```

#### Example: List

```c
Entity* roadmap = linear_roadmap(client, NULL);
voxgig_value* roadmaps = roadmap->vt->list(roadmap, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* roadmap = linear_roadmap(client, NULL);
voxgig_value* roadmap_rec = roadmap->vt->create(roadmap, cmap(7,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "name", v_str("example_name"),  // char*
    "slugId", v_str("example_slugId"),  // char*
    "sortOrder", v_num(1),  // double
    "updatedAt", v_str("example_updatedAt"),  // voxgig_value*
    "url", v_str("example_url"))  // char*
, NULL, &err);
```


### RoadmapToProject

Create an instance: `Entity* roadmap_to_project = linear_roadmap_to_project(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `id` | `char*` | The unique identifier of the entity. |
| `project` | `voxgig_value* (map)` | The project that the roadmap is associated with. |
| `roadmap` | `voxgig_value* (map)` | The roadmap that the project is associated with. |
| `sortOrder` | `char*` | The sort order of the project within the roadmap. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```c
Entity* roadmap_to_project = linear_roadmap_to_project(client, NULL);
voxgig_value* roadmap_to_project_rec = roadmap_to_project->vt->load(roadmap_to_project, cmap(1, "id", v_str("roadmap_to_project_id")), NULL, &err);
```

#### Example: List

```c
Entity* roadmap_to_project = linear_roadmap_to_project(client, NULL);
voxgig_value* roadmap_to_projects = roadmap_to_project->vt->list(roadmap_to_project, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* roadmap_to_project = linear_roadmap_to_project(client, NULL);
voxgig_value* roadmap_to_project_rec = roadmap_to_project->vt->create(roadmap_to_project, cmap(4,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "sortOrder", v_str("example_sortOrder"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```


### SlaConfiguration

Create an instance: `Entity* sla_configuration = linear_sla_configuration(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conditions` | `voxgig_value*` | The workflow conditions that determine when this SLA rule applies. |
| `id` | `char*` | The identifier of the SLA rule. |
| `name` | `char*` | The name of the SLA rule. |
| `removesSla` | `bool` | Whether the rule removes an SLA instead of setting one. |
| `sla` | `double` | The SLA value configured by the rule, expressed in milliseconds or business days depending on the day-count type. |
| `slaType` | `char*` | The SLA type used when the rule sets an SLA. |
| `startMode` | `char*` | When SLA timing begins. |

#### Example: List

```c
Entity* sla_configuration = linear_sla_configuration(client, NULL);
voxgig_value* sla_configurations = sla_configuration->vt->list(sla_configuration, NULL, NULL, &err);
```


### SsoUrlFromEmailResponse

Create an instance: `Entity* sso_url_from_email_response = linear_sso_url_from_email_response(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `samlSsoUrl` | `char*` | SAML SSO sign-in URL. |
| `success` | `bool` | Whether the operation was successful. |

#### Example: Load

```c
Entity* sso_url_from_email_response = linear_sso_url_from_email_response(client, NULL);
voxgig_value* sso_url_from_email_response_rec = sso_url_from_email_response->vt->load(sso_url_from_email_response, cmap(2, "email", v_str("email"), "type", v_str("type")), NULL, &err);
```


### Team

Create an instance: `Entity* team = linear_team(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activeCycle` | `voxgig_value* (map)` | Team's currently active cycle. |
| `aiDiscussionSummariesEnabled` | `bool` | Whether to enable AI discussion summaries for issues in this team. |
| `aiThreadSummariesEnabled` | `bool` | Whether to enable resolved thread AI summaries. |
| `allMembersCanJoin` | `bool` | Whether all members in the workspace can join the team. |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `autoArchivePeriod` | `double` | Period after which automatically closed, completed, and duplicate issues are automatically archived in months. |
| `autoCloseChildIssues` | `bool` | Whether child issues should automatically close when their parent issue is closed |
| `autoCloseParentIssues` | `bool` | Whether parent issues should automatically close when all child issues are closed |
| `autoClosePeriod` | `double` | Period after which issues are automatically closed in months. |
| `autoCloseStateId` | `char*` | The canceled workflow state which auto closed issues will be set to. |
| `color` | `char*` | The team's color. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `currentProgress` | `voxgig_value*` | [Internal] The current progress of the team. |
| `cycleCalenderUrl` | `char*` | Calendar feed URL (iCal) for cycles. |
| `cycleCooldownTime` | `double` | The cooldown time after each cycle in weeks. |
| `cycleDuration` | `double` | The duration of each cycle in weeks. |
| `cycleIssueAutoAssignCompleted` | `bool` | Auto assign completed issues to current cycle. |
| `cycleIssueAutoAssignStarted` | `bool` | Auto assign started issues to current cycle. |
| `cycleLockToActive` | `bool` | Auto assign issues to current cycle if in active status. |
| `cycleStartDay` | `double` | The day of the week that a new cycle starts (0 = Sunday, 1 = Monday, ..., 6 = Saturday). |
| `cyclesEnabled` | `bool` | Whether the team uses cycles for sprint-style issue management. |
| `defaultIssueEstimate` | `double` | What to use as a default estimate for unestimated issues. |
| `defaultIssueState` | `voxgig_value* (map)` | The default workflow state into which issues are set when they are opened by team members. |
| `defaultProjectTemplate` | `voxgig_value* (map)` | The default template to use for new projects created for the team. |
| `defaultTemplateForMembers` | `voxgig_value* (map)` | The default template to use for new issues created by members of the team. |
| `defaultTemplateForNonMembers` | `voxgig_value* (map)` | The default template to use for new issues created by non-members of the team. |
| `description` | `char*` | The team's description. |
| `displayName` | `char*` | The name of the team including its parent team name if it has one. |
| `groupIssueHistory` | `bool` | Whether to group recent issue history entries. |
| `icon` | `char*` | The icon of the team. |
| `id` | `char*` | The unique identifier of the entity. |
| `inheritIssueEstimation` | `bool` | Whether the team should inherit its estimation settings from its parent. |
| `inheritProjectStatuses` | `bool` | [Internal] Whether the team should inherit its project statuses from its parent team, or from the workspace when it has no parent. |
| `inheritSlackAutoCreateProjectChannel` | `bool` | [Internal] Whether the team should inherit its Slack auto-create project channel setting from its parent. |
| `inheritWorkflowStatuses` | `bool` | Whether the team should inherit its workflow statuses from its parent. |
| `initiativesEnabled` | `bool` | Whether team initiatives are enabled and shown in the team's sidebar. |
| `integrationsSettings` | `voxgig_value* (map)` | Settings for all integrations associated with that team. |
| `issueCount` | `int64_t` | The total number of issues in the team. |
| `issueEstimationAllowZero` | `bool` | Whether to allow zeros in issues estimates. |
| `issueEstimationExtended` | `bool` | Whether to add additional points to the estimate scale. |
| `issueEstimationType` | `char*` | The issue estimation type to use. |
| `joinByDefault` | `bool` | [Internal] Whether new users should join this team by default. |
| `key` | `char*` | The team's unique key, used as a prefix in issue identifiers (e.g., 'ENG' in 'ENG-123') and in URLs. |
| `ledInitiativeCount` | `int64_t` | The number of initiatives led by this team that would be deleted along with it. |
| `name` | `char*` | The team's name. |
| `organization` | `voxgig_value* (map)` | The workspace that the team belongs to. |
| `parent` | `voxgig_value* (map)` | The team's parent team. |
| `progressHistory` | `voxgig_value*` | [Internal] The progress history of the team. |
| `requirePriorityToLeaveTriage` | `bool` | Whether an issue needs to have a priority set before leaving triage. |
| `restrictedBy` | `voxgig_value* (map)` | [Internal] For restricted teams, the enclosing private team that forms the visibility boundary. |
| `restrictedById` | `char*` | [Internal] The identifier of the enclosing private team that forms the visibility boundary for restricted teams. |
| `retiredAt` | `voxgig_value*` | The time at which the team was retired. |
| `scimGroupName` | `char*` | The SCIM group name for the team. |
| `scimManaged` | `bool` | Whether the team is managed by a SCIM integration. |
| `securitySettings` | `voxgig_value*` | Security settings for the team, including role-based restrictions for issue sharing, label management, member management, template management, and agent skills. |
| `setIssueSortOrderOnStateChange` | `char*` | Where to move issues when changing state. |
| `slackAutoCreateProjectChannel` | `bool` | [Internal] Whether to automatically create a Slack channel when a new project is created in this team. |
| `timezone` | `char*` | The timezone of the team. |
| `triageEnabled` | `bool` | Whether triage mode is enabled for the team. |
| `triageIssueState` | `voxgig_value* (map)` | The workflow state into which issues are set when they are opened by non-team members or integrations if triage is enabled. |
| `triageResponsibility` | `voxgig_value* (map)` | Team's triage responsibility. |
| `upcomingCycleCount` | `double` | How many upcoming cycles to create. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |
| `visibility` | `char*` | The visibility of the team. |

#### Example: Load

```c
Entity* team = linear_team(client, NULL);
voxgig_value* team_rec = team->vt->load(team, cmap(1, "id", v_str("team_id")), NULL, &err);
```

#### Example: List

```c
Entity* team = linear_team(client, NULL);
voxgig_value* teams = team->vt->list(team, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* team = linear_team(client, NULL);
voxgig_value* team_rec = team->vt->create(team, cmap(39,
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


### TeamMembership

Create an instance: `Entity* team_membership = linear_team_membership(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `id` | `char*` | The unique identifier of the entity. |
| `owner` | `bool` | Whether the user is an owner of the team. |
| `sortOrder` | `double` | The sort order of this team in the user's personal team list. |
| `team` | `voxgig_value* (map)` | The team that the membership is associated with. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |
| `user` | `voxgig_value* (map)` | The user that the membership is associated with. |

#### Example: Load

```c
Entity* team_membership = linear_team_membership(client, NULL);
voxgig_value* team_membership_rec = team_membership->vt->load(team_membership, cmap(1, "id", v_str("team_membership_id")), NULL, &err);
```

#### Example: List

```c
Entity* team_membership = linear_team_membership(client, NULL);
voxgig_value* team_memberships = team_membership->vt->list(team_membership, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* team_membership = linear_team_membership(client, NULL);
voxgig_value* team_membership_rec = team_membership->vt->create(team_membership, cmap(5,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "owner", v_bool(true),  // bool
    "sortOrder", v_num(1),  // double
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```


### Template

Create an instance: `Entity* template = linear_template(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `color` | `char*` | The hex color of the template icon. |
| `content` | `char*` | The template's content in markdown format: the body it pre-fills on the entity it creates. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | The user who created the template. |
| `description` | `char*` | A description of what the template is used for. |
| `hasFormFields` | `bool` | [Internal] Whether the template has form fields |
| `icon` | `char*` | The icon of the template, either a decorative icon type or an emoji string. |
| `id` | `char*` | The unique identifier of the entity. |
| `inheritedFrom` | `voxgig_value* (map)` | The parent team template this template was inherited from. |
| `lastAppliedAt` | `voxgig_value*` | The date when the template was last applied to create or update an entity. |
| `lastUpdatedBy` | `voxgig_value* (map)` | The user who last updated the template. |
| `name` | `char*` | The name of the template. |
| `organization` | `voxgig_value* (map)` | The workspace that owns this template. |
| `pipeline` | `voxgig_value* (map)` | The release pipeline this template is bound to. |
| `sortOrder` | `double` | The sort order of the template within the templates list. |
| `team` | `voxgig_value* (map)` | The team that the template is associated with. |
| `templateData` | `voxgig_value*` | The template data as a JSON-encoded string containing the pre-filled attributes for the entity type (e.g., issue fields, project configuration, or document content). |
| `type` | `char*` | The entity type this template is for, such as 'issue', 'project', or 'document'. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```c
Entity* template = linear_template(client, NULL);
voxgig_value* template_rec = template->vt->load(template, cmap(1, "id", v_str("template_id")), NULL, &err);
```

#### Example: List

```c
Entity* template = linear_template(client, NULL);
voxgig_value* templates = template->vt->list(template, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* template = linear_template(client, NULL);
voxgig_value* template_rec = template->vt->create(template, cmap(8,
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


### TimeSchedule

Create an instance: `Entity* time_schedule = linear_time_schedule(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `externalId` | `char*` | The identifier of the external schedule. |
| `externalUrl` | `char*` | The URL to the external schedule. |
| `id` | `char*` | The unique identifier of the entity. |
| `integration` | `voxgig_value* (map)` | The identifier of the Linear integration populating the schedule. |
| `name` | `char*` | The name of the schedule. |
| `organization` | `voxgig_value* (map)` | The workspace of the schedule. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```c
Entity* time_schedule = linear_time_schedule(client, NULL);
voxgig_value* time_schedule_rec = time_schedule->vt->load(time_schedule, cmap(1, "id", v_str("time_schedule_id")), NULL, &err);
```

#### Example: List

```c
Entity* time_schedule = linear_time_schedule(client, NULL);
voxgig_value* time_schedules = time_schedule->vt->list(time_schedule, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* time_schedule = linear_time_schedule(client, NULL);
voxgig_value* time_schedule_rec = time_schedule->vt->create(time_schedule, cmap(4,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "name", v_str("example_name"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```


### TriageResponsibility

Create an instance: `Entity* triage_responsibility = linear_triage_responsibility(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `char*` | The action to take when an issue is added to triage. |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `currentUser` | `voxgig_value* (map)` | The user currently responsible for triage. |
| `id` | `char*` | The unique identifier of the entity. |
| `team` | `voxgig_value* (map)` | The team to which the triage responsibility belongs to. |
| `timeSchedule` | `voxgig_value* (map)` | The time schedule used for scheduling. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```c
Entity* triage_responsibility = linear_triage_responsibility(client, NULL);
voxgig_value* triage_responsibility_rec = triage_responsibility->vt->load(triage_responsibility, cmap(1, "id", v_str("triage_responsibility_id")), NULL, &err);
```

#### Example: List

```c
Entity* triage_responsibility = linear_triage_responsibility(client, NULL);
voxgig_value* triage_responsibilitys = triage_responsibility->vt->list(triage_responsibility, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* triage_responsibility = linear_triage_responsibility(client, NULL);
voxgig_value* triage_responsibility_rec = triage_responsibility->vt->create(triage_responsibility, cmap(4,
    "action", v_str("example_action"),  // char*
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```


### UploadFile

Create an instance: `Entity* upload_file = linear_upload_file(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assetUrl` | `char*` | The permanent asset URL where the file will be accessible after upload. |
| `contentType` | `char*` | The content type. |
| `filename` | `char*` | The filename. |
| `metaData` | `voxgig_value*` | Optional metadata associated with the upload, such as the related issue or comment ID. |
| `size` | `int64_t` | The size of the uploaded file. |
| `uploadUrl` | `char*` | The pre-signed URL to which the file should be uploaded via a PUT request. |

#### Example: Create

```c
Entity* upload_file = linear_upload_file(client, NULL);
voxgig_value* upload_file_rec = upload_file->vt->create(upload_file, cmap(6,
    "content_type", v_str("example_content_type"),  // char*
    "filename", v_str("example_filename"),  // char*
    "size", v_num(1),  // int64_t
    "assetUrl", v_str("example_assetUrl"),  // char*
    "contentType", v_str("example_contentType"),  // char*
    "uploadUrl", v_str("example_uploadUrl"))  // char*
, NULL, &err);
```


### UsageAlert

Create an instance: `Entity* usage_alert = linear_usage_alert(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `id` | `char*` | The unique identifier of the entity. |
| `metadata` | `voxgig_value*` | Type-specific snapshot captured when the alert was triggered, keyed by the alert type — for example the credit balance and threshold for a lowBalance alert. |
| `resolvedAt` | `voxgig_value*` | The time when the usage alert was resolved or archived. |
| `type` | `char*` | The kind of usage alert that was triggered. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```c
Entity* usage_alert = linear_usage_alert(client, NULL);
voxgig_value* usage_alert_rec = usage_alert->vt->load(usage_alert, cmap(1, "id", v_str("usage_alert_id")), NULL, &err);
```

#### Example: List

```c
Entity* usage_alert = linear_usage_alert(client, NULL);
voxgig_value* usage_alerts = usage_alert->vt->list(usage_alert, NULL, NULL, &err);
```


### User

Create an instance: `Entity* user = linear_user(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | Whether the user account is active or disabled (suspended). |
| `admin` | `bool` | Whether the user is a workspace administrator. |
| `app` | `bool` | Whether the user is an app. |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `avatarBackgroundColor` | `char*` | The background color of the avatar for users without set avatar. |
| `avatarUrl` | `char*` | An URL to the user's avatar image. |
| `calendarHash` | `char*` | [DEPRECATED] Hash for the user to be used in calendar URLs. |
| `canAccessAnyPublicTeam` | `bool` | Whether this user can access any public team in the workspace. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `createdIssueCount` | `int64_t` | Number of issues created. |
| `description` | `char*` | A short description of the user, such as their title or a brief bio. |
| `disableReason` | `char*` | The reason why the user account is disabled. |
| `displayName` | `char*` | The user's display (nick) name. |
| `email` | `char*` | The user's email address. |
| `gitHubUserId` | `char*` | The user's GitHub user ID. |
| `guest` | `bool` | Whether the user is a guest in the workspace and limited to accessing a subset of teams. |
| `hasGitHubCodeAccess` | `bool` | [Internal] Whether this user can access GitHub source code through Linear. |
| `id` | `char*` | The unique identifier of the entity. |
| `identityProvider` | `voxgig_value* (map)` | [INTERNAL] Identity provider the user is managed by. |
| `initials` | `char*` | The initials of the user. |
| `isAssignable` | `bool` | Whether the user can be assigned to issues. |
| `isMe` | `bool` | Whether the user is the currently authenticated user. |
| `isMentionable` | `bool` | Whether the user is mentionable. |
| `lastSeen` | `voxgig_value*` | The last time the user was seen online. |
| `name` | `char*` | The user's full name. |
| `organization` | `voxgig_value* (map)` | The workspace that the user belongs to. |
| `owner` | `bool` | Whether the user is a workspace owner, which is the highest permission level. |
| `statusEmoji` | `char*` | The emoji representing the user's current status. |
| `statusLabel` | `char*` | The text label of the user's current status. |
| `statusUntilAt` | `voxgig_value*` | The date and time at which the user's current status should be automatically cleared. |
| `supportsAgentSessions` | `bool` | Whether this agent user supports agent sessions. |
| `timezone` | `char*` | The local timezone of the user. |
| `title` | `char*` | The user's job title. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | User's profile URL. |

#### Example: Load

```c
Entity* user = linear_user(client, NULL);
voxgig_value* user_rec = user->vt->load(user, cmap(1, "id", v_str("user_id")), NULL, &err);
```

#### Example: List

```c
Entity* user = linear_user(client, NULL);
voxgig_value* users = user->vt->list(user, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* user = linear_user(client, NULL);
voxgig_value* user_rec = user->vt->create(user, cmap(21,
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


### UserSetting

Create an instance: `Entity* user_setting = linear_user_setting(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `autoAssignToSelf` | `bool` | Whether to auto-assign newly created issues to the current user by default. |
| `calendarHash` | `char*` | A unique hash for the user, used to construct secure calendar subscription URLs. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `feedLastSeenTime` | `voxgig_value*` | The user's last seen time for the pulse feed. |
| `feedSummarySchedule` | `char*` | The user's preferred schedule for receiving feed summary digests. |
| `id` | `char*` | The unique identifier of the entity. |
| `pullRequestMergeStrategyPreference` | `char*` | [Internal] The user's preferred merge method for pull requests. |
| `showFullUserNames` | `bool` | Whether to show full user names instead of display names. |
| `subscribedToChangelog` | `bool` | Whether this user is subscribed to receive changelog emails about Linear product updates. |
| `subscribedToDPA` | `bool` | Whether this user is subscribed to receive Data Processing Agreement (DPA) related emails. |
| `subscribedToInviteAccepted` | `bool` | Whether this user is subscribed to receive email notifications when their workspace invitations are accepted. |
| `subscribedToPrivacyLegalUpdates` | `bool` | Whether this user is subscribed to receive emails about privacy policy and legal updates. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |
| `user` | `voxgig_value* (map)` | The user that these settings belong to. |

#### Example: Load

```c
Entity* user_setting = linear_user_setting(client, NULL);
voxgig_value* user_setting_rec = user_setting->vt->load(user_setting, cmap(1, "id", v_str("user_setting_id")), NULL, &err);
```

#### Example: Create

```c
Entity* user_setting = linear_user_setting(client, NULL);
voxgig_value* user_setting_rec = user_setting->vt->create(user_setting, cmap(12,
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


### ViewPreference

Create an instance: `Entity* view_preference = linear_view_preference(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `id` | `char*` | The unique identifier of the entity. |
| `type` | `char*` | The type of view preferences: "organization" for workspace-wide defaults or "user" for personal overrides. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |
| `viewType` | `char*` | The type of view these preferences apply to, such as board, cycle, project, customView, myIssues, etc. |

#### Example: Load

```c
Entity* view_preference = linear_view_preference(client, NULL);
voxgig_value* view_preference_rec = view_preference->vt->load(view_preference, cmap(1, "view_type", v_str("view_type")), NULL, &err);
```

#### Example: Create

```c
Entity* view_preference = linear_view_preference(client, NULL);
voxgig_value* view_preference_rec = view_preference->vt->create(view_preference, cmap(5,
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "type", v_str("example_type"),  // char*
    "updatedAt", v_str("example_updatedAt"),  // voxgig_value*
    "viewType", v_str("example_viewType"))  // char*
, NULL, &err);
```


### Webhook

Create an instance: `Entity* webhook = linear_webhook(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->remove(e, reqmatch, ctrl, &err)` | Remove the matching entity. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allPublicTeams` | `bool` | Whether the webhook receives events from all public (non-private) teams in the organization, including teams created after the webhook was set up. |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `creator` | `voxgig_value* (map)` | The user who created the webhook. |
| `enabled` | `bool` | Whether the webhook is enabled. |
| `id` | `char*` | The unique identifier of the entity. |
| `label` | `char*` | A human-readable label for the webhook, used for identification in the UI. |
| `resourceTypes` | `char*` | The resource types this webhook is subscribed to (e.g., 'Issue', 'Comment', 'Project', 'Cycle'). |
| `secret` | `char*` | A secret token used to sign webhook payloads with HMAC-SHA256, allowing the recipient to verify that the payload originated from Linear and was not tampered with. |
| `team` | `voxgig_value* (map)` | The single team that the webhook is scoped to. |
| `teamIds` | `char*` | [INTERNAL] An array of team IDs that the webhook is subscribed to. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |
| `url` | `char*` | The destination URL where webhook payloads will be sent via HTTP POST. |

#### Example: Load

```c
Entity* webhook = linear_webhook(client, NULL);
voxgig_value* webhook_rec = webhook->vt->load(webhook, cmap(1, "id", v_str("webhook_id")), NULL, &err);
```

#### Example: List

```c
Entity* webhook = linear_webhook(client, NULL);
voxgig_value* webhooks = webhook->vt->list(webhook, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* webhook = linear_webhook(client, NULL);
voxgig_value* webhook_rec = webhook->vt->create(webhook, cmap(6,
    "allPublicTeams", v_bool(true),  // bool
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "enabled", v_bool(true),  // bool
    "id", v_str("example_id"),  // char*
    "resourceTypes", v_str("example_resourceTypes"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
```


### WebhookFailureEvent

Create an instance: `Entity* webhook_failure_event = linear_webhook_failure_event(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `executionId` | `char*` | A stable identifier for the webhook delivery attempt. |
| `httpStatus` | `double` | The HTTP status code returned by the webhook recipient. |
| `id` | `char*` | The unique identifier of the entity. |
| `responseOrError` | `char*` | The HTTP response body returned by the recipient, or the error message if the request failed before receiving a response. |
| `url` | `char*` | The URL that the webhook was trying to push to. |
| `webhook` | `voxgig_value* (map)` | The webhook that this failure event is associated with. |

#### Example: List

```c
Entity* webhook_failure_event = linear_webhook_failure_event(client, NULL);
voxgig_value* webhook_failure_events = webhook_failure_event->vt->list(webhook_failure_event, NULL, NULL, &err);
```


### WorkflowState

Create an instance: `Entity* workflow_state = linear_workflow_state(client, NULL);`

#### Operations

| Method | Description |
| --- | --- |
| `vt->create(e, reqdata, ctrl, &err)` | Create a new entity with the given data. |
| `vt->list(e, reqmatch, ctrl, &err)` | List entities, optionally matching the given criteria. |
| `vt->load(e, reqmatch, ctrl, &err)` | Load a single entity by match criteria. |
| `vt->update(e, reqdata, ctrl, &err)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `voxgig_value*` | The time at which the entity was archived. |
| `color` | `char*` | The state's UI color as a HEX string. |
| `createdAt` | `voxgig_value*` | The time at which the entity was created. |
| `description` | `char*` | Description of the state. |
| `id` | `char*` | The unique identifier of the entity. |
| `inheritedFrom` | `voxgig_value* (map)` | The parent team's workflow state that this state was inherited from. |
| `name` | `char*` | The state's human-readable name (e.g., 'In Progress', 'Done', 'Backlog'). |
| `position` | `double` | The position of the state in the team's workflow. |
| `team` | `voxgig_value* (map)` | The team that this workflow state belongs to. |
| `type` | `char*` | The type of the state. |
| `updatedAt` | `voxgig_value*` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```c
Entity* workflow_state = linear_workflow_state(client, NULL);
voxgig_value* workflow_state_rec = workflow_state->vt->load(workflow_state, cmap(1, "id", v_str("workflow_state_id")), NULL, &err);
```

#### Example: List

```c
Entity* workflow_state = linear_workflow_state(client, NULL);
voxgig_value* workflow_states = workflow_state->vt->list(workflow_state, NULL, NULL, &err);
```

#### Example: Create

```c
Entity* workflow_state = linear_workflow_state(client, NULL);
voxgig_value* workflow_state_rec = workflow_state->vt->create(workflow_state, cmap(7,
    "color", v_str("example_color"),  // char*
    "createdAt", v_str("example_createdAt"),  // voxgig_value*
    "id", v_str("example_id"),  // char*
    "name", v_str("example_name"),  // char*
    "position", v_num(1),  // double
    "type", v_str("example_type"),  // char*
    "updatedAt", v_str("example_updatedAt"))  // voxgig_value*
, NULL, &err);
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

### Data as `voxgig_value*`

The C SDK uses a single dynamic `voxgig_value*` type throughout rather than
a typed struct per entity. `voxgig_value` is the vendored voxgig struct
port (a JSON-shaped tagged union: string, number, bool, list, map, null,
undef). This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Build request maps with the `cmap` / `clist` / `v_str` / `v_num` /
`v_bool` helper builders, and read fields back with `getp` (or the typed
`get_str` / `get_bool` / `to_int`); use `to_map` to safely coerce a
value to a map.

Memory follows a retain-heavy, never-free discipline — pipeline values are
never released. This is safe (no use-after-free) and leaks are acceptable
for the short-lived SDK and test binaries.

### Error handling

Fallible functions return a `voxgig_value*` (or a struct pointer) and take a
trailing `PNError** err` out-param. On success `*err` is left `NULL`; on
failure `*err` points to a heap `PNError` carrying `code` and `msg`.
Always initialise `PNError* err = NULL;` and branch on it after each call.

### Project structure

```
c/
├── core/          -- Pipeline types, config, client (client.c), api.h + sdk.h
├── entity/        -- Per-entity implementations (one .c each)
├── feature/       -- Built-in features (base, test, log, ...)
├── utility/       -- Utilities + the vendored voxgig struct port (utility/struct)
├── tests/         -- Test binaries (each a standalone main())
└── Makefile       -- Builds libsdk.a and runs every tests/*.c
```

The public entry header is `core/api.h` — it includes `core/sdk.h` (the
umbrella runtime header) and declares each entity's constructor and SDK
accessor. Include it and link against `libsdk.a`.

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
