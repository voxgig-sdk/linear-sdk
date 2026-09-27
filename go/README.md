# Linear Golang SDK



The Golang SDK for the Linear API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.AccessKeyRelease(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `c`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/linear-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/linear-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/linear-sdk/go=../linear-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/linear-sdk/go"
)

func main() {
    client := sdk.NewLinearSDK(map[string]any{
        "apikey": os.Getenv("LINEAR_APIKEY"),
    })

    // List accessKeyRelease records — the value is the array of records itself.
    accessKeyReleases, err := client.AccessKeyRelease(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range accessKeyReleases.([]any) {
        fmt.Println(item)
    }

    // Load a single accessKeyRelease — the value is the loaded record.
    accessKeyRelease, err := client.AccessKeyRelease(nil).Load(map[string]any{"id": "example_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(accessKeyRelease)

    // Create a accessKeyRelease.
    created, err := client.AccessKeyRelease(nil).Create(map[string]any{"createdAt": "example_createdAt", "id": "example_id", "name": "example_name", "url": "example_url"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(created)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
agentactivitys, err := client.AgentActivity(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = agentactivitys
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

agentActivity, err := client.AgentActivity(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(agentActivity) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewLinearSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewLinearSDK

```go
func NewLinearSDK(options map[string]any) *LinearSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *LinearSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### LinearSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `AccessKeyRelease` | `(data map[string]any) LinearEntity` | Create an AccessKeyRelease entity instance. |
| `AccessKeyReleasePipeline` | `(data map[string]any) LinearEntity` | Create an AccessKeyReleasePipeline entity instance. |
| `AgentActivity` | `(data map[string]any) LinearEntity` | Create an AgentActivity entity instance. |
| `AgentSession` | `(data map[string]any) LinearEntity` | Create an AgentSession entity instance. |
| `AgentSkill` | `(data map[string]any) LinearEntity` | Create an AgentSkill entity instance. |
| `Application` | `(data map[string]any) LinearEntity` | Create an Application entity instance. |
| `Attachment` | `(data map[string]any) LinearEntity` | Create an Attachment entity instance. |
| `AuditEntry` | `(data map[string]any) LinearEntity` | Create an AuditEntry entity instance. |
| `AuditEntryType` | `(data map[string]any) LinearEntity` | Create an AuditEntryType entity instance. |
| `AuthResolverResponse` | `(data map[string]any) LinearEntity` | Create an AuthResolverResponse entity instance. |
| `AuthenticationSessionResponse` | `(data map[string]any) LinearEntity` | Create an AuthenticationSessionResponse entity instance. |
| `Comment` | `(data map[string]any) LinearEntity` | Create a Comment entity instance. |
| `CreateOrJoinOrganizationResponse` | `(data map[string]any) LinearEntity` | Create a CreateOrJoinOrganizationResponse entity instance. |
| `CustomView` | `(data map[string]any) LinearEntity` | Create a CustomView entity instance. |
| `Customer` | `(data map[string]any) LinearEntity` | Create a Customer entity instance. |
| `CustomerNeed` | `(data map[string]any) LinearEntity` | Create a CustomerNeed entity instance. |
| `CustomerStatus` | `(data map[string]any) LinearEntity` | Create a CustomerStatus entity instance. |
| `CustomerTier` | `(data map[string]any) LinearEntity` | Create a CustomerTier entity instance. |
| `Cycle` | `(data map[string]any) LinearEntity` | Create a Cycle entity instance. |
| `Diff` | `(data map[string]any) LinearEntity` | Create a Diff entity instance. |
| `Document` | `(data map[string]any) LinearEntity` | Create a Document entity instance. |
| `DocumentSearchResult` | `(data map[string]any) LinearEntity` | Create a DocumentSearchResult entity instance. |
| `EmailIntakeAddress` | `(data map[string]any) LinearEntity` | Create an EmailIntakeAddress entity instance. |
| `EmailUserAccountAuthChallengeResponse` | `(data map[string]any) LinearEntity` | Create an EmailUserAccountAuthChallengeResponse entity instance. |
| `Emoji` | `(data map[string]any) LinearEntity` | Create an Emoji entity instance. |
| `EntityExternalLink` | `(data map[string]any) LinearEntity` | Create an EntityExternalLink entity instance. |
| `ExternalUser` | `(data map[string]any) LinearEntity` | Create an ExternalUser entity instance. |
| `Favorite` | `(data map[string]any) LinearEntity` | Create a Favorite entity instance. |
| `GitAutomationState` | `(data map[string]any) LinearEntity` | Create a GitAutomationState entity instance. |
| `GitAutomationTargetBranch` | `(data map[string]any) LinearEntity` | Create a GitAutomationTargetBranch entity instance. |
| `GitHubIntegrationConnectDetail` | `(data map[string]any) LinearEntity` | Create a GitHubIntegrationConnectDetail entity instance. |
| `Initiative` | `(data map[string]any) LinearEntity` | Create an Initiative entity instance. |
| `InitiativeLabel` | `(data map[string]any) LinearEntity` | Create an InitiativeLabel entity instance. |
| `InitiativeLeadTeamChangeImpact` | `(data map[string]any) LinearEntity` | Create an InitiativeLeadTeamChangeImpact entity instance. |
| `InitiativeRelation` | `(data map[string]any) LinearEntity` | Create an InitiativeRelation entity instance. |
| `InitiativeToProject` | `(data map[string]any) LinearEntity` | Create an InitiativeToProject entity instance. |
| `InitiativeUpdate` | `(data map[string]any) LinearEntity` | Create an InitiativeUpdate entity instance. |
| `Integration` | `(data map[string]any) LinearEntity` | Create an Integration entity instance. |
| `IntegrationTemplate` | `(data map[string]any) LinearEntity` | Create an IntegrationTemplate entity instance. |
| `IntegrationsSetting` | `(data map[string]any) LinearEntity` | Create an IntegrationsSetting entity instance. |
| `Issue` | `(data map[string]any) LinearEntity` | Create an Issue entity instance. |
| `IssueImport` | `(data map[string]any) LinearEntity` | Create an IssueImport entity instance. |
| `IssueLabel` | `(data map[string]any) LinearEntity` | Create an IssueLabel entity instance. |
| `IssuePriorityValue` | `(data map[string]any) LinearEntity` | Create an IssuePriorityValue entity instance. |
| `IssueRelation` | `(data map[string]any) LinearEntity` | Create an IssueRelation entity instance. |
| `IssueSearchResult` | `(data map[string]any) LinearEntity` | Create an IssueSearchResult entity instance. |
| `IssueToRelease` | `(data map[string]any) LinearEntity` | Create an IssueToRelease entity instance. |
| `LogoutResponse` | `(data map[string]any) LinearEntity` | Create a LogoutResponse entity instance. |
| `Notification` | `(data map[string]any) LinearEntity` | Create a Notification entity instance. |
| `NotificationSubscription` | `(data map[string]any) LinearEntity` | Create a NotificationSubscription entity instance. |
| `OAuthApplication` | `(data map[string]any) LinearEntity` | Create an OAuthApplication entity instance. |
| `Organization` | `(data map[string]any) LinearEntity` | Create an Organization entity instance. |
| `OrganizationDomain` | `(data map[string]any) LinearEntity` | Create an OrganizationDomain entity instance. |
| `OrganizationInvite` | `(data map[string]any) LinearEntity` | Create an OrganizationInvite entity instance. |
| `OrganizationMeta` | `(data map[string]any) LinearEntity` | Create an OrganizationMeta entity instance. |
| `PasskeyLoginStartResponse` | `(data map[string]any) LinearEntity` | Create a PasskeyLoginStartResponse entity instance. |
| `Project` | `(data map[string]any) LinearEntity` | Create a Project entity instance. |
| `ProjectLabel` | `(data map[string]any) LinearEntity` | Create a ProjectLabel entity instance. |
| `ProjectMilestone` | `(data map[string]any) LinearEntity` | Create a ProjectMilestone entity instance. |
| `ProjectMilestoneMoveProjectTeam` | `(data map[string]any) LinearEntity` | Create a ProjectMilestoneMoveProjectTeam entity instance. |
| `ProjectRelation` | `(data map[string]any) LinearEntity` | Create a ProjectRelation entity instance. |
| `ProjectSearchResult` | `(data map[string]any) LinearEntity` | Create a ProjectSearchResult entity instance. |
| `ProjectStatus` | `(data map[string]any) LinearEntity` | Create a ProjectStatus entity instance. |
| `ProjectUpdate` | `(data map[string]any) LinearEntity` | Create a ProjectUpdate entity instance. |
| `PushSubscription` | `(data map[string]any) LinearEntity` | Create a PushSubscription entity instance. |
| `Reaction` | `(data map[string]any) LinearEntity` | Create a Reaction entity instance. |
| `Release` | `(data map[string]any) LinearEntity` | Create a Release entity instance. |
| `ReleaseNote` | `(data map[string]any) LinearEntity` | Create a ReleaseNote entity instance. |
| `ReleasePipeline` | `(data map[string]any) LinearEntity` | Create a ReleasePipeline entity instance. |
| `ReleaseStage` | `(data map[string]any) LinearEntity` | Create a ReleaseStage entity instance. |
| `Roadmap` | `(data map[string]any) LinearEntity` | Create a Roadmap entity instance. |
| `RoadmapToProject` | `(data map[string]any) LinearEntity` | Create a RoadmapToProject entity instance. |
| `SlaConfiguration` | `(data map[string]any) LinearEntity` | Create a SlaConfiguration entity instance. |
| `SsoUrlFromEmailResponse` | `(data map[string]any) LinearEntity` | Create a SsoUrlFromEmailResponse entity instance. |
| `Team` | `(data map[string]any) LinearEntity` | Create a Team entity instance. |
| `TeamMembership` | `(data map[string]any) LinearEntity` | Create a TeamMembership entity instance. |
| `Template` | `(data map[string]any) LinearEntity` | Create a Template entity instance. |
| `TimeSchedule` | `(data map[string]any) LinearEntity` | Create a TimeSchedule entity instance. |
| `TriageResponsibility` | `(data map[string]any) LinearEntity` | Create a TriageResponsibility entity instance. |
| `UploadFile` | `(data map[string]any) LinearEntity` | Create an UploadFile entity instance. |
| `UsageAlert` | `(data map[string]any) LinearEntity` | Create an UsageAlert entity instance. |
| `User` | `(data map[string]any) LinearEntity` | Create an User entity instance. |
| `UserSetting` | `(data map[string]any) LinearEntity` | Create an UserSetting entity instance. |
| `ViewPreference` | `(data map[string]any) LinearEntity` | Create a ViewPreference entity instance. |
| `Webhook` | `(data map[string]any) LinearEntity` | Create a Webhook entity instance. |
| `WebhookFailureEvent` | `(data map[string]any) LinearEntity` | Create a WebhookFailureEvent entity instance. |
| `WorkflowState` | `(data map[string]any) LinearEntity` | Create a WorkflowState entity instance. |

### Entity interface (LinearEntity)

All entities implement the `LinearEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    accessKeyRelease, err := client.AccessKeyRelease(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // accessKeyRelease is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### AccessKeyRelease

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the release was archived. |
| `"commitSha"` | The Git commit SHA associated with the release. |
| `"completedAt"` | The time at which the release was completed. |
| `"createdAt"` | The time at which the release was created. |
| `"id"` | The unique identifier of the release. |
| `"name"` | The name of the release. |
| `"url"` | The URL to the release page in the Linear app. |
| `"version"` | The version identifier for this release. |

Operations: Create, List, Load.

API path: `releaseCompleteByAccessKey`

#### AccessKeyReleasePipeline

| Field | Description |
| --- | --- |
| `"id"` | The unique identifier of the release pipeline. |
| `"includePathPatterns"` | Glob patterns used to filter commits by changed file path. |

Operations: Load.

API path: `releasePipelineByAccessKey`

#### AgentActivity

| Field | Description |
| --- | --- |
| `"agentSession"` | The agent session this activity belongs to. |
| `"archivedAt"` | The time at which the entity was archived. |
| `"contextualMetadata"` | [Internal] Metadata about user-provided contextual information for this agent activity. |
| `"createdAt"` | The time at which the entity was created. |
| `"ephemeral"` | Whether the activity is ephemeral, and should disappear after the next agent activity. |
| `"executionSkippedReason"` | [Internal] The reason this activity was persisted without being sent to the agent runtime. |
| `"id"` | The unique identifier of the entity. |
| `"queued"` | [Internal] Whether this activity is queued for later processing. |
| `"sentAt"` | [Internal] The time at which the prompt actually entered the conversation. |
| `"signal"` | An optional modifier that provides additional instructions on how the activity should be interpreted. |
| `"signalMetadata"` | Metadata about this agent activity's signal. |
| `"sourceComment"` | The source comment this activity is linked to. |
| `"sourceMetadata"` | Metadata about the external source that created this agent activity. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |
| `"user"` | The user who created this agent activity. |

Operations: Create, List, Load, Update.

API path: `agentActivityCreate`

#### AgentSession

| Field | Description |
| --- | --- |
| `"appUser"` | The agent user that is associated with this agent session. |
| `"archivedAt"` | The time at which the entity was archived. |
| `"codingHarnessModelLabel"` | [Internal] Compact display label for the coding harness model used by this session, derived from the latest associated sandbox. |
| `"comment"` | The comment this agent session is associated with. |
| `"context"` | The entity contexts this session is related to, such as issues or projects referenced in direct chat sessions. |
| `"createdAt"` | The time at which the entity was created. |
| `"creator"` | The human user responsible for the agent session. |
| `"dismissedAt"` | The time a user dismissed this agent session. |
| `"dismissedBy"` | The user who dismissed the agent session. |
| `"endedAt"` | The time the agent session completed. |
| `"id"` | The unique identifier of the entity. |
| `"issue"` | The issue this agent session is associated with. |
| `"modelSelection"` | [Internal] How Adaptive selected the model route used by this coding session. |
| `"plan"` | A dynamically updated plan describing the agent's execution strategy, including steps to be taken and their current status. |
| `"pullRequest"` | The pull request this agent session is anchored to, when started from a pull request. |
| `"slugId"` | The agent session's unique URL slug. |
| `"sourceComment"` | The comment that this agent session was spawned from, if from a different thread. |
| `"sourceMetadata"` | Metadata about the external source that created this agent session. |
| `"startedAt"` | The time the agent session transitioned to active status and began work. |
| `"status"` | The current status of the agent session, such as pending, active, awaiting input, complete, error, or stale. |
| `"summary"` | The session title, generated automatically or set by the owning OAuth application. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |
| `"url"` | The URL to the agent session page in the Linear app. |

Operations: Create, List, Load, Update.

API path: `agentSessionCreate`

#### AgentSkill

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"body"` | The skill instructions in markdown format. |
| `"color"` | The skill's color. |
| `"createdAt"` | The time at which the entity was created. |
| `"creator"` | The user who created the skill. |
| `"description"` | The skill's description. |
| `"icon"` | The icon of the skill. |
| `"id"` | The unique identifier of the entity. |
| `"inheritedFrom"` | The parent-team skill this skill was inherited from. |
| `"lastUpdatedBy"` | The user who last updated the skill. |
| `"lastUsedAt"` | The time the skill was last used by anyone in the workspace. |
| `"owner"` | The user who owns the skill. |
| `"recentUsageCount"` | The number of times the skill was used by anyone in the workspace in the last 30 days. |
| `"shared"` | Whether the skill is shared with everyone in the workspace. |
| `"slugId"` | The skill's unique URL slug. |
| `"teamId"` | The identifier of the team this skill is shared with. |
| `"title"` | The skill's title. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Remove, Update.

API path: `agentSkillCreate`

#### Application

| Field | Description |
| --- | --- |
| `"clientId"` | OAuth application's client ID. |
| `"description"` | Information about the application. |
| `"developer"` | Name of the developer. |
| `"developerUrl"` | URL of the developer's website, homepage, or documentation. |
| `"id"` | OAuth application's ID. |
| `"imageUrl"` | Image of the application. |
| `"name"` | Application name. |

Operations: Load.

API path: `applicationInfo`

#### Attachment

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"bodyData"` | The body data of the attachment, if any. |
| `"createdAt"` | The time at which the entity was created. |
| `"creator"` | The creator of the attachment. |
| `"externalUserCreator"` | The non-Linear user who created the attachment. |
| `"groupBySource"` | Whether attachments from the same source application should be visually grouped together in the Linear issue detail view. |
| `"id"` | The unique identifier of the entity. |
| `"issue"` | The issue this attachment belongs to. |
| `"metadata"` | Integration-specific metadata for this attachment. |
| `"originalIssue"` | The issue this attachment was originally created on. |
| `"source"` | Information about the source which created the attachment. |
| `"sourceType"` | The source type of the attachment, derived from the source metadata. |
| `"subtitle"` | Content for the subtitle line in the Linear attachment widget. |
| `"title"` | Content for the title line in the Linear attachment widget. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |
| `"url"` | The URL of the external resource this attachment links to. |

Operations: Create, List, Load, Remove, Update.

API path: `attachmentCreate`

#### AuditEntry

| Field | Description |
| --- | --- |
| `"actor"` | The user that caused the audit entry to be created. |
| `"actorId"` | The ID of the user that caused the audit entry to be created. |
| `"archivedAt"` | The time at which the entity was archived. |
| `"countryCode"` | The ISO 3166-1 alpha-2 country code derived from the request IP address. |
| `"createdAt"` | The time at which the entity was created. |
| `"id"` | The unique identifier of the entity. |
| `"ip"` | The IP address of the actor at the time the audited action was performed. |
| `"metadata"` | Additional metadata related to the audit entry. |
| `"organization"` | The workspace the audit log belongs to. |
| `"requestInformation"` | Additional information related to the request which performed the action. |
| `"type"` | The type of audited action (e.g., user authentication, permission change, data export, setting modification). |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |

Operations: List.

API path: `auditEntries`

#### AuditEntryType

| Field | Description |
| --- | --- |
| `"description"` | Description of the audit entry type. |
| `"type"` | The audit entry type. |

Operations: List.

API path: `auditEntryTypes`

#### AuthResolverResponse

| Field | Description |
| --- | --- |
| `"allowDomainAccess"` | Should the signup flow allow access for the domain. |
| `"email"` | Email for the authenticated account. |
| `"id"` | User account ID. |
| `"lastUsedOrganizationId"` | ID of the organization last accessed by the user. |
| `"service"` | The authentication service used for the current session (e.g., google, email, saml). |

Operations: Create, Load, Update.

API path: `emailTokenUserAccountAuth`

#### AuthenticationSessionResponse

| Field | Description |
| --- | --- |
| `"browserType"` | Used web browser. |
| `"client"` | Client used for the session |
| `"countryCodes"` | Country codes of all seen locations. |
| `"createdAt"` | The time at which the entity was created. |
| `"detailedName"` | Detailed name of the session including version information, derived from the user agent. |
| `"id"` |  |
| `"ip"` | IP address. |
| `"isCurrentSession"` | Whether this session is the one used to make the current API request. |
| `"lastActiveAt"` | When was the session last seen |
| `"location"` | Human readable location |
| `"locationCity"` | Location city name. |
| `"locationCountry"` | Location country name. |
| `"locationCountryCode"` | Location country code. |
| `"locationRegionCode"` | Location region code. |
| `"name"` | Name of the session, derived from the client and operating system |
| `"operatingSystem"` | Operating system used for the session |
| `"service"` | Service used for logging in. |
| `"type"` | Type of application used to authenticate. |
| `"updatedAt"` | Date when the session was last updated. |
| `"userAgent"` | Session's user-agent. |

Operations: List.

API path: `userSessions`

#### Comment

| Field | Description |
| --- | --- |
| `"agentSession"` | Agent session associated with this comment. |
| `"archivedAt"` | The time at which the entity was archived. |
| `"body"` | The comment content in markdown format. |
| `"bodyData"` | [Internal] The comment content as a ProseMirror document. |
| `"botActor"` | The bot that created the comment. |
| `"createdAt"` | The time at which the entity was created. |
| `"documentContent"` | The document content that the comment is associated with. |
| `"documentContentId"` | The ID of the document content that the comment is associated with. |
| `"editedAt"` | The time the comment was last edited by its author. |
| `"externalThread"` | The external thread that the comment is synced with. |
| `"externalUser"` | The external user who wrote the comment, when the comment was created through an integration such as Slack or Intercom. |
| `"hideInLinear"` | [Internal] Whether the comment should be hidden from Linear clients. |
| `"id"` | The unique identifier of the entity. |
| `"initiative"` | The initiative that the comment is associated with. |
| `"initiativeId"` | The ID of the initiative that the comment is associated with. |
| `"initiativeUpdate"` | The initiative update that the comment is associated with. |
| `"initiativeUpdateId"` | The ID of the initiative update that the comment is associated with. |
| `"isArtificialAgentSessionRoot"` | [Internal] Whether the comment is an artificial placeholder for an agent session thread created without a comment mention. |
| `"issue"` | The issue that the comment is associated with. |
| `"issueId"` | The ID of the issue that the comment is associated with. |
| `"onBehalfOf"` | [Internal] The user on whose behalf the comment was created, e.g. |
| `"parent"` | The parent comment under which the current comment is nested. |
| `"parentId"` | The ID of the parent comment under which the current comment is nested. |
| `"post"` | The post that the comment is associated with. |
| `"project"` | The project that the comment is associated with. |
| `"projectId"` | The ID of the project that the comment is associated with. |
| `"projectUpdate"` | The project update that the comment is associated with. |
| `"projectUpdateId"` | The ID of the project update that the comment is associated with. |
| `"quotedText"` | The text that this comment references, used for inline comments on documents or issue descriptions. |
| `"reactionData"` | Emoji reaction summary for this comment, grouped by emoji type. |
| `"resolvedAt"` | The time when the comment thread was resolved. |
| `"resolvingComment"` | The child comment that resolved this thread. |
| `"resolvingCommentId"` | The ID of the child comment that resolved this thread. |
| `"resolvingUser"` | The user that resolved the comment thread. |
| `"threadSummary"` | [Internal] An AI-generated summary of the comment thread. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |
| `"url"` | Comment's URL. |
| `"user"` | The user who wrote the comment. |

Operations: Create, List, Load, Remove, Update.

API path: `commentCreate`

#### CreateOrJoinOrganizationResponse

| Field | Description |
| --- | --- |
| `"organization"` | The workspace that was created or joined. |
| `"user"` | The user who created or joined the workspace. |

Operations: Create, Update.

API path: `createOrganizationFromOnboarding`

#### CustomView

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"color"` | The hex color code of the custom view icon. |
| `"createdAt"` | The time at which the entity was created. |
| `"creator"` | The user who originally created the custom view. |
| `"description"` | The description of the custom view. |
| `"facet"` | [INTERNAL] The facet that links this custom view to its parent entity (project, initiative, team page, etc.). |
| `"feedItemFilterData"` | The filter applied to feed items in the custom view. |
| `"filterData"` | The structured filter applied to issues in the custom view. |
| `"icon"` | The icon of the custom view. |
| `"id"` | The unique identifier of the entity. |
| `"initiativeFilterData"` | The filter applied to initiatives in the custom view. |
| `"modelName"` | The entity type this view displays. |
| `"name"` | The name of the custom view, displayed in the sidebar and navigation. |
| `"organization"` | The workspace of the custom view. |
| `"organizationViewPreferences"` | The workspace-level default view preferences for this custom view, if any have been set. |
| `"owner"` | The user who owns the custom view. |
| `"projectFilterData"` | The filter applied to projects in the custom view. |
| `"shared"` | Whether the custom view is shared with everyone in the organization. |
| `"slugId"` | The custom view's unique URL slug, used to construct human-readable URLs. |
| `"team"` | The team that the custom view is scoped to. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |
| `"updatedBy"` | The user who last updated the custom view. |
| `"userViewPreferences"` | The current user's personal view preferences for this custom view, if they have set any. |

Operations: Create, List, Load, Remove, Update.

API path: `customViewCreate`

#### Customer

| Field | Description |
| --- | --- |
| `"approximateNeedCount"` | The approximate number of distinct requests associated with this customer, deduplicated per issue or project. |
| `"archivedAt"` | The time at which the entity was archived. |
| `"createdAt"` | The time at which the entity was created. |
| `"domains"` | The email domains associated with this customer (e.g., 'acme.com'). |
| `"externalIds"` | Identifiers for this customer in external systems (e.g., CRM IDs from Intercom, Salesforce, or HubSpot). |
| `"id"` | The unique identifier of the entity. |
| `"integration"` | The integration that manages this customer's data (e.g., Intercom, Salesforce). |
| `"logoUrl"` | URL of the customer's logo image. |
| `"mainSourceId"` | The primary external source ID when a customer has data from multiple external systems. |
| `"name"` | The display name of the customer organization. |
| `"owner"` | The workspace member assigned as the owner of this customer. |
| `"revenue"` | The annual revenue generated by this customer. |
| `"size"` | The number of employees or seats at the customer organization. |
| `"slackChannelId"` | The ID of the Slack channel linked to this customer for communication. |
| `"slugId"` | A unique, human-readable URL slug for the customer. |
| `"status"` | The current lifecycle status of the customer. |
| `"tier"` | The tier or segment assigned to this customer for prioritization (e.g., Enterprise, Pro, Free). |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |
| `"url"` | The URL of the customer's page in the Linear application. |

Operations: Create, List, Load, Remove, Update.

API path: `customerCreate`

#### CustomerNeed

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"attachment"` | The issue attachment linked to this need. |
| `"body"` | The body content of the need in Markdown format. |
| `"bodyData"` | [Internal] The body content of the need as a Prosemirror document JSON string. |
| `"comment"` | An optional comment providing additional context for this need. |
| `"content"` | The effective Markdown content shown for this customer need. |
| `"createdAt"` | The time at which the entity was created. |
| `"creator"` | The user who manually created this customer need. |
| `"customer"` | The customer organization this need belongs to. |
| `"id"` | The unique identifier of the entity. |
| `"issue"` | The issue this need is linked to. |
| `"originalIssue"` | The issue this customer need was originally created on, before being moved to a different issue or project. |
| `"priority"` | Whether the customer need is important or not. |
| `"project"` | The project this need is linked to. |
| `"projectAttachment"` | The project attachment linked to this need. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |
| `"url"` | The URL of the source attachment linked to this need, if any. |

Operations: Create, List, Load, Remove, Update.

API path: `customerNeedCreate`

#### CustomerStatus

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"color"` | The color of the status indicator in the UI, as a HEX string (e.g., '#ff0000'). |
| `"createdAt"` | The time at which the entity was created. |
| `"description"` | An optional description explaining what this status represents in the customer lifecycle. |
| `"displayName"` | The user-facing display name of the status shown in the UI. |
| `"id"` | The unique identifier of the entity. |
| `"name"` | The internal name of the status. |
| `"position"` | The sort position of the status in the workspace's customer lifecycle flow. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Remove, Update.

API path: `customerStatusCreate`

#### CustomerTier

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"color"` | The color of the tier indicator in the UI, as a HEX string (e.g., '#ff0000'). |
| `"createdAt"` | The time at which the entity was created. |
| `"description"` | An optional description explaining what this tier represents and its intended use for customer segmentation. |
| `"displayName"` | The user-facing display name of the tier shown in the UI. |
| `"id"` | The unique identifier of the entity. |
| `"name"` | The internal name of the tier. |
| `"position"` | The sort position of the tier in the workspace's customer tier ordering. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Remove, Update.

API path: `customerTierCreate`

#### Cycle

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"autoArchivedAt"` | The time at which the cycle was automatically archived by the auto-pruning process. |
| `"completedAt"` | The completion time of the cycle. |
| `"completedIssueCountHistory"` | The number of completed issues in the cycle after each day. |
| `"completedScopeHistory"` | The number of completed estimation points after each day. |
| `"createdAt"` | The time at which the entity was created. |
| `"currentProgress"` | [Internal] The current progress snapshot of the cycle, broken down by issue status categories. |
| `"description"` | The description of the cycle. |
| `"endsAt"` | The end date and time of the cycle. |
| `"id"` | The unique identifier of the entity. |
| `"inProgressScopeHistory"` | The number of in-progress estimation points after each day. |
| `"inheritedFrom"` | The parent cycle this cycle was inherited from. |
| `"isActive"` | Whether the cycle is currently active. |
| `"isFuture"` | Whether the cycle has not yet started. |
| `"isNext"` | Whether this cycle is the next upcoming (not yet started) cycle for the team. |
| `"isPast"` | Whether the cycle's end date has passed. |
| `"isPrevious"` | Whether this cycle is the most recently completed cycle for the team. |
| `"issueCountHistory"` | The total number of issues in the cycle after each day. |
| `"name"` | The custom name of the cycle. |
| `"number"` | The auto-incrementing number of the cycle, unique within its team. |
| `"progress"` | The overall progress of the cycle as a number between 0 and 1. |
| `"progressHistory"` | [Internal] The detailed progress history of the cycle, including per-status breakdowns over time. |
| `"scopeHistory"` | The total number of estimation points (scope) in the cycle after each day. |
| `"startsAt"` | The start date and time of the cycle. |
| `"team"` | The team that the cycle belongs to. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Update.

API path: `cycleCreate`

#### Diff

| Field | Description |
| --- | --- |
| `"additions"` | [Internal] The total number of added lines across the diff. |
| `"agentSession"` | The agent session the diff belongs to. |
| `"archivedAt"` | The time at which the entity was archived. |
| `"contentHash"` | [Internal] The opaque content hash identifying the diff's content in code.storage. |
| `"createdAt"` | The time at which the entity was created. |
| `"creator"` | The user responsible for the diff. |
| `"deletions"` | [Internal] The total number of deleted lines across the diff. |
| `"fileCount"` | [Internal] The number of changed files in the diff. |
| `"id"` | The unique identifier of the entity. |
| `"organization"` | The workspace the diff belongs to. |
| `"pullRequest"` | The pull request the diff was promoted to when opened for review. |
| `"slugId"` | [Internal] The diff's unique URL slug. |
| `"truncated"` | [Internal] Whether oversized files were omitted when the diff was computed. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |

Operations: Load.

API path: `diff`

#### Document

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"color"` | The hex color of the document icon. |
| `"content"` | The document's content in markdown format. |
| `"contentState"` | [Internal] The document's content as a base64-encoded Yjs state update. |
| `"createdAt"` | The time at which the entity was created. |
| `"creator"` | The user who created the document. |
| `"cycle"` | [Internal] The cycle that the document is associated with. |
| `"documentContentId"` | The ID of the document content associated with the document. |
| `"hiddenAt"` | The time at which the document was hidden from the default view. |
| `"icon"` | The icon of the document, either a decorative icon type or an emoji string. |
| `"id"` | The unique identifier of the entity. |
| `"initiative"` | The initiative that the document is associated with. |
| `"issue"` | The issue that the document is associated with. |
| `"lastAppliedTemplate"` | The last template that was applied to this document. |
| `"owner"` | The owner of the document. |
| `"project"` | The project that the document is associated with. |
| `"release"` | The release that the document is associated with. |
| `"slugId"` | The document's unique URL slug, used to construct human-readable URLs. |
| `"sortOrder"` | The sort order of the document in its parent entity's resources list. |
| `"summary"` | [Internal] A one-sentence AI-generated summary of the document content. |
| `"team"` | [Internal] The team that the document is associated with. |
| `"title"` | The title of the document. |
| `"trashed"` | A flag that indicates whether the document is in the trash bin. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |
| `"updatedBy"` | The user who last updated the document. |
| `"url"` | The canonical url for the document. |

Operations: Create, List, Load, Remove, Update.

API path: `documentCreate`

#### DocumentSearchResult

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"color"` | The hex color of the document icon. |
| `"content"` | The document's content in markdown format. |
| `"contentState"` | [Internal] The document's content as a base64-encoded Yjs state update. |
| `"createdAt"` | The time at which the entity was created. |
| `"creator"` | The user who created the document. |
| `"cycle"` | [Internal] The cycle that the document is associated with. |
| `"documentContentId"` | The ID of the document content associated with the document. |
| `"hiddenAt"` | The time at which the document was hidden from the default view. |
| `"icon"` | The icon of the document, either a decorative icon type or an emoji string. |
| `"id"` | The unique identifier of the entity. |
| `"initiative"` | The initiative that the document is associated with. |
| `"issue"` | The issue that the document is associated with. |
| `"lastAppliedTemplate"` | The last template that was applied to this document. |
| `"metadata"` | Metadata related to search result. |
| `"owner"` | The owner of the document. |
| `"project"` | The project that the document is associated with. |
| `"release"` | The release that the document is associated with. |
| `"slugId"` | The document's unique URL slug, used to construct human-readable URLs. |
| `"sortOrder"` | The sort order of the document in its parent entity's resources list. |
| `"summary"` | [Internal] A one-sentence AI-generated summary of the document content. |
| `"team"` | [Internal] The team that the document is associated with. |
| `"title"` | The title of the document. |
| `"trashed"` | A flag that indicates whether the document is in the trash bin. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |
| `"updatedBy"` | The user who last updated the document. |
| `"url"` | The canonical url for the document. |

Operations: List.

API path: `searchDocuments`

#### EmailIntakeAddress

| Field | Description |
| --- | --- |
| `"address"` | The unique local part (before the @) of the intake email address, used to route incoming emails to the correct intake handler. |
| `"archivedAt"` | The time at which the entity was archived. |
| `"createdAt"` | The time at which the entity was created. |
| `"creator"` | The user who created the email intake address. |
| `"customerRequestsEnabled"` | Whether issues created from emails sent to this address are automatically converted into customer requests, linking the sender as a customer contact. |
| `"enabled"` | Whether the email address is enabled. |
| `"forwardingEmailAddress"` | The email address used to forward emails to the intake address. |
| `"id"` | The unique identifier of the entity. |
| `"issueCanceledAutoReply"` | The auto-reply message for issue canceled. |
| `"issueCanceledAutoReplyEnabled"` | Whether the auto-reply for issue canceled is enabled. |
| `"issueCompletedAutoReply"` | The auto-reply message for issue completed. |
| `"issueCompletedAutoReplyEnabled"` | Whether the auto-reply for issue completed is enabled. |
| `"issueCreatedAutoReply"` | The auto-reply message for issue created. |
| `"issueCreatedAutoReplyEnabled"` | Whether the auto-reply for issue created is enabled. |
| `"lastUsedAt"` | The last time an inbound email was successfully ingested for this address. |
| `"organization"` | The workspace that the email address is associated with. |
| `"reopenOnReply"` | Whether to reopen completed or canceled issues when a substantive email reply is received. |
| `"repliesEnabled"` | Whether email replies are enabled. |
| `"senderName"` | The name to be used for outgoing emails. |
| `"sesDomainIdentity"` | The SES domain identity that the email address is associated with. |
| `"team"` | The team that the email address is associated with. |
| `"template"` | The template that the email address is associated with. |
| `"type"` | The type of the email address. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |
| `"useUserNamesInReplies"` | Whether the commenter's name is included in the email replies. |

Operations: Create, Load, Remove, Update.

API path: `emailIntakeAddressCreate`

#### EmailUserAccountAuthChallengeResponse

| Field | Description |
| --- | --- |
| `"authType"` | Supported challenge for this user account. |
| `"success"` | Whether the operation was successful. |

Operations: Create.

API path: `emailUserAccountAuthChallenge`

#### Emoji

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"createdAt"` | The time at which the entity was created. |
| `"creator"` | The user who created the emoji. |
| `"id"` | The unique identifier of the entity. |
| `"name"` | The unique name of the custom emoji within the workspace. |
| `"organization"` | The workspace that the emoji belongs to. |
| `"source"` | The source of the emoji, indicating how it was created (e.g., uploaded by a user or imported). |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |
| `"url"` | The URL of the uploaded image for this custom emoji. |

Operations: Create, List, Load, Remove.

API path: `emojiCreate`

#### EntityExternalLink

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"createdAt"` | The time at which the entity was created. |
| `"creator"` | The user who created the link. |
| `"id"` | The unique identifier of the entity. |
| `"initiative"` | The initiative that the link is associated with. |
| `"label"` | The link's label. |
| `"project"` | The project that the link is associated with. |
| `"sortOrder"` | The sort order of this link within the parent entity's resources list. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |
| `"url"` | The link's URL. |

Operations: Create, Load, Remove, Update.

API path: `entityExternalLinkCreate`

#### ExternalUser

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"avatarUrl"` | A URL to the external user's avatar image. |
| `"createdAt"` | The time at which the entity was created. |
| `"displayName"` | The external user's display name. |
| `"email"` | The external user's email address. |
| `"id"` | The unique identifier of the entity. |
| `"lastSeen"` | The last time the external user was seen interacting with Linear through their external service. |
| `"name"` | The external user's full name. |
| `"organization"` | The workspace that the external user belongs to. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |

Operations: List, Load.

API path: `externalUsers`

#### Favorite

| Field | Description |
| --- | --- |
| `"aiConversation"` | [INTERNAL] The favorited Agent conversation. |
| `"archivedAt"` | The time at which the entity was archived. |
| `"color"` | [Internal] Returns the color of the favorite's icon. |
| `"createdAt"` | The time at which the entity was created. |
| `"customView"` | The favorited custom view. |
| `"customer"` | The favorited customer. |
| `"cycle"` | The favorited cycle. |
| `"dashboard"` | The favorited dashboard. |
| `"detail"` | [Internal] Detail text for favorite's `title` (e.g. |
| `"document"` | The favorited document. |
| `"facet"` | [INTERNAL] The favorited facet. |
| `"folderName"` | The name of the folder. |
| `"icon"` | [Internal] Name of the favorite's icon. |
| `"id"` | The unique identifier of the entity. |
| `"initiative"` | The favorited initiative. |
| `"initiativeLabel"` | [INTERNAL] The favorited initiative label. |
| `"initiativeTab"` | The targeted tab of the initiative. |
| `"issue"` | The favorited issue. |
| `"label"` | The favorited label. |
| `"liveFolderDefinition"` | The versioned lazy root and filter represented by this live favorite folder. |
| `"liveFolderPreset"` | The predefined live folder represented by this favorite. |
| `"owner"` | The user who owns this favorite. |
| `"parent"` | The parent folder of the favorite. |
| `"pipelineTab"` | The targeted tab of the release pipeline. |
| `"predefinedViewTeam"` | The team of the favorited predefined view. |
| `"predefinedViewType"` | The type of favorited predefined view (e.g., 'allIssues', 'activeCycle', 'backlog', 'triage'). |
| `"project"` | The favorited project. |
| `"projectLabel"` | The favorited project label. |
| `"projectTab"` | The targeted tab of the project. |
| `"projectTeam"` | [DEPRECATED] The favorited team of the project. |
| `"pullRequest"` | The favorited pull request. |
| `"release"` | The favorited release. |
| `"releaseNote"` | The favorited release note. |
| `"releasePipeline"` | The favorited release pipeline. |
| `"sortOrder"` | The position of this item in the user's favorites list. |
| `"team"` | The favorited team. |
| `"title"` | [Internal] Favorite's title text (name of the favorite'd object or folder). |
| `"type"` | The type of entity this favorite references, such as 'issue', 'project', 'cycle', 'customView', 'document', 'folder', etc. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |
| `"url"` | URL of the favorited entity. |
| `"user"` | The favorited user. |
| `"workflowDefinition"` | The favorited loop. |

Operations: Create, List, Load, Remove, Update.

API path: `favoriteCreate`

#### GitAutomationState

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"createdAt"` | The time at which the entity was created. |
| `"event"` | The Git event that triggers this automation rule (e.g., branch created, PR opened for review, or PR merged). |
| `"id"` | The unique identifier of the entity. |
| `"state"` | The workflow state that linked issues will be transitioned to when the Git event fires. |
| `"targetBranch"` | The target branch that this automation rule applies to. |
| `"team"` | The team that this automation rule belongs to. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |

Operations: Create, Remove, Update.

API path: `gitAutomationStateCreate`

#### GitAutomationTargetBranch

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"branchPattern"` | The branch name or pattern to match against pull request target branches. |
| `"createdAt"` | The time at which the entity was created. |
| `"id"` | The unique identifier of the entity. |
| `"isRegex"` | Whether the branch pattern should be interpreted as a regular expression. |
| `"team"` | The team that this target branch definition belongs to. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |

Operations: Create, Remove, Update.

API path: `gitAutomationTargetBranchCreate`

#### GitHubIntegrationConnectDetail

| Field | Description |
| --- | --- |
| `"lostRepositoryNames"` | Full names ('owner/repo') of repositories whose existing GitHub Issues sync mappings would become inaccessible if the new GitHub App installation replaces the existing one. |

Operations: Create, Update.

API path: `integrationAsksConnectChannel`

#### Initiative

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"canceledAt"` | [Internal] The time at which the initiative was moved into Canceled status. |
| `"color"` | The initiative's color. |
| `"completedAt"` | The time at which the initiative was moved into Completed status. |
| `"content"` | The initiative's content in markdown format. |
| `"createdAt"` | The time at which the entity was created. |
| `"creator"` | The user who created the initiative. |
| `"description"` | The description of the initiative. |
| `"documentContent"` | The content of the initiative description. |
| `"frequencyResolution"` | The resolution of the reminder frequency. |
| `"health"` | The overall health of the initiative, derived from the most recent initiative update. |
| `"healthUpdatedAt"` | The time at which the initiative health was last updated, typically when a new initiative update is posted. |
| `"icon"` | The icon of the initiative. |
| `"id"` | The unique identifier of the entity. |
| `"identifier"` | [Internal] The human-readable identifier of the initiative. |
| `"integrationsSettings"` | Settings for all integrations associated with that initiative. |
| `"labelIds"` | The IDs of the initiative labels associated with this initiative. |
| `"lastUpdate"` | The most recent status update posted for this initiative. |
| `"leadTeam"` | The team that leads the initiative. |
| `"name"` | The name of the initiative. |
| `"organization"` | The workspace of the initiative. |
| `"owner"` | The user who owns the initiative. |
| `"parentInitiative"` | Parent initiative associated with the initiative. |
| `"previousIdentifiers"` | [Internal] Identifiers (default and custom) that this initiative has previously held. |
| `"priority"` | The priority of the initiative. |
| `"prioritySortOrder"` | The sort order of the initiative within the workspace when ordered by priority. |
| `"slugId"` | The initiative's unique URL slug, used to construct human-readable URLs. |
| `"sortOrder"` | The sort order of the initiative within the workspace. |
| `"startedAt"` | The time at which the initiative was moved into Active status. |
| `"status"` | The lifecycle status of the initiative. |
| `"targetDate"` | The estimated completion date of the initiative. |
| `"targetDateResolution"` | The resolution of the initiative's estimated completion date, indicating whether it refers to a specific day, week, month, quarter, or year. |
| `"trashed"` | A flag that indicates whether the initiative is in the trash bin. |
| `"updateReminderFrequency"` | The frequency at which to prompt for updates. |
| `"updateReminderFrequencyInWeeks"` | The n-weekly frequency at which to prompt for updates. |
| `"updateRemindersDay"` | The day at which to prompt for updates. |
| `"updateRemindersHour"` | The hour at which to prompt for updates. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |
| `"url"` | Initiative URL. |
| `"visibility"` | The visibility of the initiative, derived from its lead team. |

Operations: Create, List, Load, Remove, Update.

API path: `initiativeCreate`

#### InitiativeLabel

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"color"` | The label's color as a HEX string (e.g., '#EB5757'). |
| `"createdAt"` | The time at which the entity was created. |
| `"creator"` | The user who created the label. |
| `"description"` | The label's description. |
| `"id"` | The unique identifier of the entity. |
| `"isGroup"` | Whether the label is a group. |
| `"lastAppliedAt"` | The date when the label was last applied to an issue, project, or initiative. |
| `"name"` | The label's name. |
| `"organization"` | The workspace that the initiative label belongs to. |
| `"parent"` | The parent label group. |
| `"retiredAt"` | [Internal] When the label was retired. |
| `"retiredBy"` | The user who retired the label. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Remove, Update.

API path: `initiativeLabelCreate`

#### InitiativeLeadTeamChangeImpact

| Field | Description |
| --- | --- |
| `"affectedDescendantCount"` | The number of editable matching sub-initiatives whose lead team would change if the update is applied to descendants. |
| `"id"` |  |
| `"visibilityMayChange"` | Whether the changed initiatives may gain or lose access restrictions because the current or next lead team is not public. |

Operations: Load.

API path: `initiativeLeadTeamChangeImpact`

#### InitiativeRelation

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"createdAt"` | The time at which the entity was created. |
| `"id"` | The unique identifier of the entity. |
| `"initiative"` | The parent initiative in this hierarchical relation. |
| `"relatedInitiative"` | The child initiative in this hierarchical relation. |
| `"sortOrder"` | The sort order of the child initiative within its parent initiative. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |
| `"user"` | The user who last created or modified the relation. |

Operations: Create, List, Load, Remove, Update.

API path: `initiativeRelationCreate`

#### InitiativeToProject

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"createdAt"` | The time at which the entity was created. |
| `"id"` | The unique identifier of the entity. |
| `"initiative"` | The initiative that the project is associated with. |
| `"project"` | The project that the initiative is associated with. |
| `"sortOrder"` | The sort order of the project within its parent initiative. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Remove, Update.

API path: `initiativeToProjectCreate`

#### InitiativeUpdate

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"body"` | The update content in markdown format. |
| `"bodyData"` | [Internal] The content of the update as a Prosemirror document. |
| `"commentCount"` | Number of comments associated with the initiative update. |
| `"createdAt"` | The time at which the entity was created. |
| `"diff"` | The diff between the current update and the previous one. |
| `"diffMarkdown"` | The diff between the current update and the previous one, formatted as markdown. |
| `"editedAt"` | The time the update was edited. |
| `"health"` | The health of the initiative at the time this update was posted. |
| `"id"` | The unique identifier of the entity. |
| `"infoSnapshot"` | [Internal] A snapshot of initiative properties at the time the update was posted, including project statuses, sub-initiative health, and target dates. |
| `"initiative"` | The initiative that this status update was posted to. |
| `"isDiffHidden"` | Whether the diff between this update and the previous one should be hidden in the UI. |
| `"isStale"` | Whether the initiative update is stale. |
| `"reactionData"` | Emoji reaction summary, grouped by emoji type. |
| `"slugId"` | The update's unique URL slug. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |
| `"url"` | The URL to the initiative update. |
| `"user"` | The user who wrote the update. |

Operations: Create, List, Load, Update.

API path: `initiativeUpdateCreate`

#### Integration

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"createdAt"` | The time at which the entity was created. |
| `"creator"` | The user that added the integration. |
| `"id"` | The unique identifier of the entity. |
| `"organization"` | The workspace that the integration is associated with. |
| `"service"` | The integration's type, identifying which external service this integration connects to (e.g., 'slack', 'github', 'jira', 'figma'). |
| `"team"` | The team that the integration is associated with. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Remove, Update.

API path: `integrationSalesforce`

#### IntegrationTemplate

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"createdAt"` | The time at which the entity was created. |
| `"foreignEntityId"` | The identifier of the foreign entity in the external service that this template is scoped to. |
| `"id"` | The unique identifier of the entity. |
| `"integration"` | The integration that the template is associated with. |
| `"template"` | The template that the integration is associated with. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Remove.

API path: `integrationTemplateCreate`

#### IntegrationsSetting

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"contextViewType"` | The type of view to which the integration settings context is associated with. |
| `"createdAt"` | The time at which the entity was created. |
| `"id"` | The unique identifier of the entity. |
| `"initiative"` | Initiative which those settings apply to. |
| `"microsoftTeamsProjectUpdateCreated"` | Whether to send a Microsoft Teams message when a project update is created. |
| `"project"` | Project which those settings apply to. |
| `"slackInitiativeUpdateCreated"` | Whether to send a Slack message when an initiative update is created. |
| `"slackIssueAddedToTriage"` | Whether to send a Slack message when a new issue is added to triage. |
| `"slackIssueAddedToView"` | Whether to send a Slack message when an issue is added to the custom view. |
| `"slackIssueNewComment"` | Whether to send a Slack message when a comment is created on any of the project or team's issues. |
| `"slackIssueSlaBreached"` | Whether to send a Slack message when an SLA is breached. |
| `"slackIssueSlaHighRisk"` | Whether to send a Slack message when an SLA is at high risk. |
| `"slackIssueStatusChangedAll"` | Whether to send a Slack message when any of the project or team's issues has a change in status. |
| `"slackIssueStatusChangedDone"` | Whether to send a Slack message when any of the project or team's issues change to completed or canceled. |
| `"slackProjectUpdateCreated"` | Whether to send a Slack message when a project update is created. |
| `"slackProjectUpdateCreatedToTeam"` | Whether to send a new project update to team Slack channels. |
| `"slackProjectUpdateCreatedToWorkspace"` | Whether to send a new project update to workspace Slack channel. |
| `"team"` | Team which those settings apply to. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |

Operations: Create, Load, Update.

API path: `integrationsSettingsCreate`

#### Issue

| Field | Description |
| --- | --- |
| `"activitySummary"` | [Internal] The activity summary information for this issue. |
| `"addedToCycleAt"` | The time at which the issue was added to a cycle. |
| `"addedToProjectAt"` | The time at which the issue was added to a project. |
| `"addedToTeamAt"` | The time at which the issue was added to a team. |
| `"archivedAt"` | The time at which the entity was archived. |
| `"asksExternalUserRequester"` | The external user who requested creation of the Asks issue on behalf of the creator. |
| `"asksRequester"` | The internal user who requested creation of the Asks issue on behalf of the creator. |
| `"assignee"` | The user to whom the issue is assigned. |
| `"autoArchivedAt"` | The time at which the issue was automatically archived by the auto pruning process. |
| `"autoClosedAt"` | The time at which the issue was automatically closed by the auto pruning process. |
| `"botActor"` | The bot that created the issue, if applicable. |
| `"branchName"` | Suggested branch name for the issue. |
| `"canceledAt"` | The time at which the issue was moved into canceled state. |
| `"completedAt"` | The time at which the issue was moved into completed state. |
| `"createdAt"` | The time at which the entity was created. |
| `"creator"` | The user who created the issue. |
| `"customerTicketCount"` | Returns the number of Attachment resources which are created by customer support ticketing systems (e.g. |
| `"cycle"` | The cycle that the issue is associated with. |
| `"delegate"` | The agent user that is delegated to work on this issue. |
| `"description"` | The issue's description in markdown format. |
| `"descriptionState"` | [Internal] The issue's description content as YJS state. |
| `"documentContent"` | [ALPHA] The document content representing this issue description. |
| `"dueDate"` | The date at which the issue is due. |
| `"estimate"` | The estimate of the complexity of the issue. |
| `"externalUserCreator"` | The external user who created the issue. |
| `"favorite"` | The users favorite associated with this issue. |
| `"id"` | The unique identifier of the entity. |
| `"identifier"` | Issue's human readable identifier (e.g. |
| `"inheritsSharedAccess"` | Whether this issue inherits shared access from its parent issue. |
| `"integrationSourceType"` | Integration type that created this issue, if applicable. |
| `"labelIds"` | Identifiers of the labels associated with this issue. |
| `"lastAppliedTemplate"` | The last template that was applied to this issue. |
| `"number"` | The issue's unique number, scoped to the issue's team. |
| `"parent"` | The parent of the issue. |
| `"previousIdentifiers"` | Previous identifiers of the issue if it has been moved between teams. |
| `"priority"` | The priority of the issue. |
| `"priorityLabel"` | Label for the priority. |
| `"prioritySortOrder"` | The order of the item in relation to other items in the workspace, when ordered by priority. |
| `"project"` | The project that the issue is associated with. |
| `"projectMilestone"` | The project milestone that the issue is associated with. |
| `"reactionData"` | Emoji reaction summary for the issue, grouped by emoji type. |
| `"recurringIssueTemplate"` | The recurring issue template that created this issue. |
| `"slaBreachesAt"` | The time at which the issue's SLA will breach. |
| `"slaHighRiskAt"` | The time at which the issue's SLA will enter high risk state. |
| `"slaMediumRiskAt"` | The time at which the issue's SLA will enter medium risk state. |
| `"slaStartedAt"` | The time at which the issue's SLA began. |
| `"slaType"` | The type of SLA set on the issue. |
| `"snoozedBy"` | The user who snoozed the issue. |
| `"snoozedUntilAt"` | The time until an issue will be snoozed in Triage view. |
| `"sortOrder"` | The order of the item in relation to other items in the organization. |
| `"sourceComment"` | The comment that this issue was created from, when an issue is created from an existing comment. |
| `"startedAt"` | The time at which the issue was moved into started state. |
| `"startedTriageAt"` | The time at which the issue entered triage. |
| `"state"` | The workflow state (issue status) that the issue is currently in. |
| `"subIssueSortOrder"` | The order of the item in the sub-issue list. |
| `"suggestionsGeneratedAt"` | [Internal] The time at which the most recent suggestions for this issue were generated. |
| `"summary"` | [Internal] AI-generated activity summary for this issue. |
| `"team"` | The team that the issue belongs to. |
| `"title"` | The issue's title. |
| `"trashed"` | A flag that indicates whether the issue is in the trash bin. |
| `"triagedAt"` | The time at which the issue left triage. |
| `"trusted"` | [Internal] Whether this issue has been explicitly marked as trusted. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |
| `"url"` | Issue URL. |

Operations: Create, List, Load, Remove, Update.

API path: `issueCreate`

#### IssueImport

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"createdAt"` | The time at which the entity was created. |
| `"creatorId"` | Identifier of the user who started the import job. |
| `"csvFileUrl"` | File URL for the uploaded CSV for the import, if there is one. |
| `"displayName"` | The display name of the import service. |
| `"error"` | User readable error message, if one has occurred during the import. |
| `"errorMetadata"` | Error code and metadata, if one has occurred during the import. |
| `"id"` | The unique identifier of the entity. |
| `"mapping"` | The data mapping configuration for the import job. |
| `"progress"` | Current step progress as a percentage (0-100). |
| `"service"` | The external service from which data is being imported (e.g., jira, asana, github, shortcut, linear). |
| `"serviceMetadata"` | Metadata related to import service. |
| `"status"` | The current status of the import job, indicating its position in the import lifecycle (e.g., not started, in progress, complete, error). |
| `"teamName"` | The name of the new team to be created for the import, when the import is configured to create a new team rather than importing into an existing one. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |

Operations: Create, Remove, Update.

API path: `issueImportCreateJira`

#### IssueLabel

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"color"` | The label's color as a HEX string (e.g., '#EB5757'). |
| `"createdAt"` | The time at which the entity was created. |
| `"creator"` | The user who created the label. |
| `"description"` | The label's description. |
| `"groupType"` | The selection mode of this label group. |
| `"id"` | The unique identifier of the entity. |
| `"inheritedFrom"` | The original workspace or parent-team label that this label was inherited from. |
| `"isGroup"` | Whether the label is a group. |
| `"lastAppliedAt"` | The date when the label was last applied to an issue, project, or initiative. |
| `"name"` | The label's name. |
| `"parent"` | The parent label. |
| `"retiredAt"` | [Internal] When the label was retired. |
| `"retiredBy"` | The user who retired the label. |
| `"team"` | The team that the label is scoped to. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Remove, Update.

API path: `issueLabelCreate`

#### IssuePriorityValue

| Field | Description |
| --- | --- |
| `"label"` | Priority's label. |
| `"priority"` | Priority's number value. |

Operations: List.

API path: `issuePriorityValues`

#### IssueRelation

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"createdAt"` | The time at which the entity was created. |
| `"id"` | The unique identifier of the entity. |
| `"issue"` | The source issue whose relationship is being described. |
| `"relatedIssue"` | The target issue that the source issue is related to. |
| `"type"` | The type of relationship between the source issue and the related issue. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Remove, Update.

API path: `issueRelationCreate`

#### IssueSearchResult

| Field | Description |
| --- | --- |
| `"activitySummary"` | [Internal] The activity summary information for this issue. |
| `"addedToCycleAt"` | The time at which the issue was added to a cycle. |
| `"addedToProjectAt"` | The time at which the issue was added to a project. |
| `"addedToTeamAt"` | The time at which the issue was added to a team. |
| `"archivedAt"` | The time at which the entity was archived. |
| `"asksExternalUserRequester"` | The external user who requested creation of the Asks issue on behalf of the creator. |
| `"asksRequester"` | The internal user who requested creation of the Asks issue on behalf of the creator. |
| `"assignee"` | The user to whom the issue is assigned. |
| `"autoArchivedAt"` | The time at which the issue was automatically archived by the auto pruning process. |
| `"autoClosedAt"` | The time at which the issue was automatically closed by the auto pruning process. |
| `"botActor"` | The bot that created the issue, if applicable. |
| `"branchName"` | Suggested branch name for the issue. |
| `"canceledAt"` | The time at which the issue was moved into canceled state. |
| `"completedAt"` | The time at which the issue was moved into completed state. |
| `"createdAt"` | The time at which the entity was created. |
| `"creator"` | The user who created the issue. |
| `"customerTicketCount"` | Returns the number of Attachment resources which are created by customer support ticketing systems (e.g. |
| `"cycle"` | The cycle that the issue is associated with. |
| `"delegate"` | The agent user that is delegated to work on this issue. |
| `"description"` | The issue's description in markdown format. |
| `"descriptionState"` | [Internal] The issue's description content as YJS state. |
| `"documentContent"` | [ALPHA] The document content representing this issue description. |
| `"dueDate"` | The date at which the issue is due. |
| `"estimate"` | The estimate of the complexity of the issue. |
| `"externalUserCreator"` | The external user who created the issue. |
| `"favorite"` | The users favorite associated with this issue. |
| `"id"` | The unique identifier of the entity. |
| `"identifier"` | Issue's human readable identifier (e.g. |
| `"inheritsSharedAccess"` | Whether this issue inherits shared access from its parent issue. |
| `"integrationSourceType"` | Integration type that created this issue, if applicable. |
| `"labelIds"` | Identifiers of the labels associated with this issue. |
| `"lastAppliedTemplate"` | The last template that was applied to this issue. |
| `"metadata"` | Metadata related to search result. |
| `"number"` | The issue's unique number, scoped to the issue's team. |
| `"parent"` | The parent of the issue. |
| `"previousIdentifiers"` | Previous identifiers of the issue if it has been moved between teams. |
| `"priority"` | The priority of the issue. |
| `"priorityLabel"` | Label for the priority. |
| `"prioritySortOrder"` | The order of the item in relation to other items in the workspace, when ordered by priority. |
| `"project"` | The project that the issue is associated with. |
| `"projectMilestone"` | The project milestone that the issue is associated with. |
| `"reactionData"` | Emoji reaction summary for the issue, grouped by emoji type. |
| `"recurringIssueTemplate"` | The recurring issue template that created this issue. |
| `"slaBreachesAt"` | The time at which the issue's SLA will breach. |
| `"slaHighRiskAt"` | The time at which the issue's SLA will enter high risk state. |
| `"slaMediumRiskAt"` | The time at which the issue's SLA will enter medium risk state. |
| `"slaStartedAt"` | The time at which the issue's SLA began. |
| `"slaType"` | The type of SLA set on the issue. |
| `"snoozedBy"` | The user who snoozed the issue. |
| `"snoozedUntilAt"` | The time until an issue will be snoozed in Triage view. |
| `"sortOrder"` | The order of the item in relation to other items in the organization. |
| `"sourceComment"` | The comment that this issue was created from, when an issue is created from an existing comment. |
| `"startedAt"` | The time at which the issue was moved into started state. |
| `"startedTriageAt"` | The time at which the issue entered triage. |
| `"state"` | The workflow state (issue status) that the issue is currently in. |
| `"subIssueSortOrder"` | The order of the item in the sub-issue list. |
| `"suggestionsGeneratedAt"` | [Internal] The time at which the most recent suggestions for this issue were generated. |
| `"summary"` | [Internal] AI-generated activity summary for this issue. |
| `"team"` | The team that the issue belongs to. |
| `"title"` | The issue's title. |
| `"trashed"` | A flag that indicates whether the issue is in the trash bin. |
| `"triagedAt"` | The time at which the issue left triage. |
| `"trusted"` | [Internal] Whether this issue has been explicitly marked as trusted. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |
| `"url"` | Issue URL. |

Operations: List.

API path: `searchIssues`

#### IssueToRelease

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"createdAt"` | The time at which the entity was created. |
| `"id"` | The unique identifier of the entity. |
| `"issue"` | The issue that is linked to the release. |
| `"release"` | The release that the issue is linked to. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Remove.

API path: `issueToReleaseCreate`

#### LogoutResponse

| Field | Description |
| --- | --- |
| `"success"` | Whether the operation was successful. |

Operations: Create, Update.

API path: `logout`

#### Notification

| Field | Description |
| --- | --- |
| `"actor"` | The user that caused the notification. |
| `"actorAvatarColor"` | [Internal] Notification actor initials if avatar is not available. |
| `"actorAvatarUrl"` | [Internal] Notification avatar URL. |
| `"actorInactive"` | [Internal] Whether the notification's user actor is deactivated in the workspace. |
| `"actorInitials"` | [Internal] Notification actor initials if avatar is not available. |
| `"archivedAt"` | The time at which the entity was archived. |
| `"botActor"` | The bot that caused the notification. |
| `"category"` | The category of the notification. |
| `"createdAt"` | The time at which the entity was created. |
| `"emailedAt"` | The time at which an email reminder for this notification was sent to the user. |
| `"externalUserActor"` | The external user that caused the notification. |
| `"groupingKey"` | [Internal] Notifications with the same grouping key will be grouped together in the UI. |
| `"groupingPriority"` | [Internal] Priority of the notification with the same grouping key. |
| `"id"` | The unique identifier of the entity. |
| `"inboxUrl"` | [Internal] Inbox URL for the notification. |
| `"initiativeUpdateHealth"` | [Internal] Initiative update health for new updates. |
| `"isLinearActor"` | [Internal] If notification actor was Linear. |
| `"issueStatusType"` | [Internal] Issue's status type for issue notifications. |
| `"projectUpdateHealth"` | [Internal] Project update health for new updates. |
| `"readAt"` | The time at which the user marked the notification as read. |
| `"snoozedUntilAt"` | The time until which a notification is snoozed. |
| `"subtitle"` | [Internal] Notification subtitle. |
| `"title"` | [Internal] Notification title. |
| `"type"` | Notification type. |
| `"unsnoozedAt"` | The time at which a notification was unsnoozed. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |
| `"url"` | [Internal] URL to the target of the notification. |
| `"user"` | The recipient user of this notification. |

Operations: List, Load.

API path: `inboxNotifications`

#### NotificationSubscription

| Field | Description |
| --- | --- |
| `"active"` | Whether the subscription is active. |
| `"archivedAt"` | The time at which the entity was archived. |
| `"contextViewType"` | The type of contextual view (e.g., active issues, backlog) that further scopes a team notification subscription. |
| `"createdAt"` | The time at which the entity was created. |
| `"customView"` | The custom view that this notification subscription is scoped to. |
| `"customer"` | The customer that this notification subscription is scoped to. |
| `"cycle"` | The cycle that this notification subscription is scoped to. |
| `"id"` | The unique identifier of the entity. |
| `"initiative"` | The initiative that this notification subscription is scoped to. |
| `"label"` | The issue label that this notification subscription is scoped to. |
| `"project"` | The project that this notification subscription is scoped to. |
| `"subscriber"` | The user who will receive notifications from this subscription. |
| `"team"` | The team that this notification subscription is scoped to. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |
| `"user"` | The user that this notification subscription is scoped to, for user-specific view subscriptions. |
| `"userContextViewType"` | The type of user-specific view that further scopes a user notification subscription. |

Operations: List, Load.

API path: `notificationSubscriptions`

#### OAuthApplication

| Field | Description |
| --- | --- |
| `"clientId"` | The client ID used during OAuth authorization flows. |
| `"createdAt"` | The time at which the OAuth application was created. |
| `"description"` | User-facing description of the OAuth application. |
| `"developer"` | Name of the developer or company that built the OAuth application. |
| `"developerUrl"` | URL of the developer's website, homepage, or documentation. |
| `"distribution"` | Distribution setting for the OAuth application. |
| `"grantTypes"` | OAuth grant types supported by this application. |
| `"id"` | The unique identifier of the OAuth application. |
| `"imageUrl"` | URL of the OAuth application's icon. |
| `"name"` | The human-readable name of the OAuth application. |
| `"redirectUris"` | Allowed redirect URIs for OAuth authorization flows. |
| `"updatedAt"` | The time at which the OAuth application was last updated. |
| `"webhookEnabled"` | Whether webhook delivery is enabled for this OAuth application. |
| `"webhookResourceTypes"` | Resource types the OAuth application's webhooks subscribe to. |
| `"webhookUrl"` | Webhook URL used for delivering webhook payloads. |

Operations: Create, List, Load, Update.

API path: `oauthApplicationCreate`

#### Organization

| Field | Description |
| --- | --- |
| `"agentAutomationEnabled"` | [INTERNAL] Whether the workspace has enabled agent automation. |
| `"aiAddonEnabled"` | [INTERNAL] Whether the workspace has enabled the AI add-on (which at this point only includes triage suggestions). |
| `"aiDiscussionSummariesEnabled"` | Whether the workspace has enabled AI discussion summaries for issues. |
| `"aiProviderConfiguration"` | [INTERNAL] Configure per-modality AI host providers and model families. |
| `"aiTelemetryEnabled"` | [INTERNAL] Whether the workspace has opted in to AI telemetry. |
| `"aiThreadSummariesEnabled"` | Whether the workspace has enabled resolved thread AI summaries. |
| `"allowedFileUploadContentTypes"` | Allowed file upload content types |
| `"archivedAt"` | The time at which the entity was archived. |
| `"authSettings"` | Authentication settings for the workspace, including allowed auth providers, bypass rules, and organization visibility during signup. |
| `"codeIntelligenceEnabled"` | [INTERNAL] Whether code intelligence is enabled for the workspace. |
| `"codeIntelligenceRepository"` | [INTERNAL] GitHub repository in owner/repo format for code intelligence. |
| `"codingAgentEnabled"` | [INTERNAL] Whether the workspace has enabled Coding Sessions. |
| `"codingAgentSettings"` | [Internal] Settings for Coding Sessions features. |
| `"createdAt"` | The time at which the entity was created. |
| `"createdIssueCount"` | Approximate total number of issues created in the workspace, including archived ones. |
| `"customerCount"` | The number of active (non-archived) customers tracked in the workspace. |
| `"customersConfiguration"` | Configuration settings for the Customers feature, including revenue currency and other customer tracking preferences. |
| `"customersEnabled"` | Whether the Customers feature is enabled and accessible for the workspace based on the current plan. |
| `"defaultFeedSummarySchedule"` | Default schedule for how often feed summaries are generated. |
| `"defaultHomeView"` | The default home view for members of the workspace who have not chosen their own default. |
| `"defaultHomeViewTargetId"` | The id of the specific initiative, project, view, dashboard, or page tab used as the default home view. |
| `"deletionRequestedAt"` | The time at which deletion of the workspace was requested. |
| `"feedEnabled"` | Whether the activity feed feature is enabled for the workspace. |
| `"fiscalYearStartMonth"` | The zero-indexed month at which the fiscal year starts (0 = January, 11 = December). |
| `"generatedUpdatesEnabled"` | [INTERNAL] Whether the workspace has enabled generated updates. |
| `"gitBranchFormat"` | The template format for Git branch names created from issues. |
| `"gitLinkbackDescriptionsEnabled"` | Whether issue descriptions should be included in the Git integration linkback messages posted to pull requests. |
| `"gitLinkbackMessagesEnabled"` | Whether the Git integration linkback messages should be posted as comments on pull requests in private repositories. |
| `"gitPublicLinkbackMessagesEnabled"` | Whether the Git integration linkback messages should be posted as comments on pull requests in public repositories. |
| `"hipaaComplianceEnabled"` | Whether HIPAA compliance is enabled for the workspace. |
| `"id"` | The unique identifier of the entity. |
| `"initiativeUpdateReminderFrequencyInWeeks"` | The frequency in weeks at which to prompt for initiative updates. |
| `"initiativeUpdateRemindersDay"` | The day of the week on which initiative update reminders are sent. |
| `"initiativeUpdateRemindersHour"` | The hour of the day (0-23) at which initiative update reminders are sent. |
| `"linearAgentEnabled"` | [Internal] Whether the workspace has enabled Linear Agent. |
| `"linearAgentSettings"` | [Internal] Settings for Linear Agent features. |
| `"logoUrl"` | The URL of the workspace's logo image. |
| `"name"` | The workspace's name. |
| `"periodUploadVolume"` | Rolling 30-day total file upload volume for the workspace, measured in megabytes. |
| `"previousUrlKeys"` | Previously used URL keys for the workspace. |
| `"projectUpdateReminderFrequencyInWeeks"` | The frequency in weeks at which to prompt for project updates. |
| `"projectUpdateRemindersDay"` | The day of the week on which project update reminders are sent. |
| `"projectUpdateRemindersHour"` | The hour of the day (0-23) at which project update reminders are sent. |
| `"pullRequestIssueMode"` | How Linear suggests and links issues for pull requests that have none linked: 'off', 'suggest', or 'autoOnMerge'. |
| `"pullRequestTourEnabled"` | Whether the workspace generates AI Pull Request guides for new pull requests. |
| `"releaseChannel"` | The feature release channel the workspace belongs to, which controls access to pre-release features. |
| `"releasesEnabled"` | Whether release management is enabled for the workspace. |
| `"restrictAgentInvocationToMembers"` | [Internal] Whether agent invocation is restricted to full workspace members. |
| `"roadmapEnabled"` | Whether the roadmap feature is enabled for the workspace. |
| `"samlEnabled"` | Whether SAML-based single sign-on authentication is enabled for the workspace. |
| `"samlSettings"` | [INTERNAL] SAML settings. |
| `"scimEnabled"` | Whether SCIM provisioning is enabled for the workspace, allowing automated user and team management from an identity provider. |
| `"scimSettings"` | [INTERNAL] SCIM settings. |
| `"securitySettings"` | Security settings for the workspace, including role-based restrictions for invitations, team creation, label management, and other sensitive operations. |
| `"slackAutoCreateProjectChannel"` | [Internal] Whether to automatically create a Slack channel when a new project is created. |
| `"slackProjectChannelIntegration"` | The Slack integration used for auto-creating project channels. |
| `"slackProjectChannelPrefix"` | The prefix used for auto-created Slack project channels. |
| `"slackProjectChannelsEnabled"` | [Internal] Whether the Slack project channels feature is enabled for the workspace. |
| `"subscription"` | The workspace's subscription to a paid plan. |
| `"themeSettings"` | [ALPHA] Theme settings for the workspace. |
| `"trialEndsAt"` | The time at which the current plan trial will end. |
| `"trialStartsAt"` | The time at which the current plan trial started. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |
| `"urlKey"` | The workspace's unique URL key, used in URLs to identify the workspace. |
| `"userCount"` | The number of active (non-deactivated) users in the workspace. |
| `"workingDays"` | [Internal] The list of working days. |

Operations: Load, Remove, Update.

API path: `organization`

#### OrganizationDomain

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"authType"` | The authentication type this domain is used for. |
| `"claimed"` | Whether the domain was claimed by the workspace through DNS TXT record verification. |
| `"createdAt"` | The time at which the entity was created. |
| `"creator"` | The user who added the domain. |
| `"disableOrganizationCreation"` | Whether users with email addresses from this domain are prevented from creating new workspaces. |
| `"id"` | The unique identifier of the entity. |
| `"identityProvider"` | The identity provider the domain belongs to. |
| `"name"` | The domain name (e.g., 'example.com'). |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |
| `"verificationEmail"` | The email address used to verify this domain. |
| `"verified"` | Whether the domain has been verified via email verification. |

Operations: Create, Remove, Update.

API path: `organizationDomainCreate`

#### OrganizationInvite

| Field | Description |
| --- | --- |
| `"acceptedAt"` | The time at which the invite was accepted by the invitee. |
| `"archivedAt"` | The time at which the entity was archived. |
| `"createdAt"` | The time at which the entity was created. |
| `"email"` | The email address of the person being invited to the workspace. |
| `"expiresAt"` | The time at which the invite will expire and can no longer be accepted. |
| `"external"` | Whether the invite was sent to an email address outside the workspace's verified domains. |
| `"id"` | The unique identifier of the entity. |
| `"invitee"` | The user who has accepted the invite. |
| `"inviter"` | The user who created the invitation. |
| `"metadata"` | Extra metadata associated with the invite. |
| `"organization"` | The workspace that the invite is associated with. |
| `"role"` | The workspace role (admin, member, guest, or owner) that the invitee will receive upon accepting the invite. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Remove, Update.

API path: `organizationInviteCreate`

#### OrganizationMeta

| Field | Description |
| --- | --- |
| `"allowedAuthServices"` | Allowed authentication providers, empty array means all are allowed. |
| `"region"` | The region the workspace is hosted in. |

Operations: Load.

API path: `organizationMeta`

#### PasskeyLoginStartResponse

| Field | Description |
| --- | --- |
| `"options"` | The passkey authentication options to pass to the WebAuthn API. |
| `"success"` | Whether the operation was successful. |

Operations: Update.

API path: `passkeyLoginStart`

#### Project

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"autoArchivedAt"` | The time at which the project was automatically archived by the auto-pruning process. |
| `"canceledAt"` | The time at which the project was moved into a canceled status. |
| `"color"` | The project's color as a HEX string. |
| `"completedAt"` | The time at which the project was moved into a completed status. |
| `"completedIssueCountHistory"` | The number of completed issues in the project at the end of each week since project creation. |
| `"completedScopeHistory"` | The number of completed estimation points at the end of each week since project creation. |
| `"content"` | The project's content in markdown format. |
| `"contentState"` | [Internal] The project's content as YJS state. |
| `"convertedFromIssue"` | The issue that was converted into this project. |
| `"createdAt"` | The time at which the entity was created. |
| `"creator"` | The user who created the project. |
| `"currentProgress"` | [INTERNAL] The current progress of the project, broken down by issue status category. |
| `"description"` | The short description of the project. |
| `"documentContent"` | The content of the project description. |
| `"favorite"` | The user's favorite associated with this project. |
| `"frequencyResolution"` | The resolution of the reminder frequency. |
| `"health"` | The overall health of the project, derived from the most recent project update. |
| `"healthUpdatedAt"` | The time at which the project health was last updated, typically when a new project update is posted. |
| `"icon"` | The icon of the project. |
| `"id"` | The unique identifier of the entity. |
| `"identifier"` | [Internal] The human-readable identifier of the project. |
| `"inProgressScopeHistory"` | The number of in-progress estimation points at the end of each week since project creation. |
| `"integrationsSettings"` | Settings for all integrations associated with that project. |
| `"issueCountHistory"` | The total number of issues in the project at the end of each week since project creation. |
| `"labelIds"` | The IDs of the project labels associated with this project. |
| `"lastAppliedTemplate"` | The last template that was applied to this project. |
| `"lastUpdate"` | The most recent status update posted for this project. |
| `"lead"` | The user who leads the project. |
| `"leadTeam"` | [Internal] The team that leads the project. |
| `"microsoftTeamsChannelId"` | The ID of the Microsoft Teams channel connected to the project, if any. |
| `"name"` | The name of the project. |
| `"previousIdentifiers"` | [Internal] Identifiers (default and custom) that this project has previously held. |
| `"priority"` | The priority of the project. |
| `"priorityLabel"` | The priority of the project as a label. |
| `"prioritySortOrder"` | The sort order for the project within the workspace when ordered by priority. |
| `"progress"` | The overall progress of the project. |
| `"progressHistory"` | [INTERNAL] The progress history of the project, tracking issue completion over time. |
| `"projectUpdateRemindersPausedUntilAt"` | The time until which project update reminders are paused. |
| `"resourceCount"` | The number of resources associated with the project, including documents, external links, and attachments. |
| `"scope"` | The overall scope (total estimate points) of the project. |
| `"scopeHistory"` | The total scope (estimation points) of the project at the end of each week since project creation. |
| `"slackChannelId"` | The ID of the Slack channel connected to the project, if any. |
| `"slugId"` | The project's unique URL slug, used to construct human-readable URLs. |
| `"sortOrder"` | The sort order for the project within the workspace. |
| `"startDate"` | The estimated start date of the project. |
| `"startDateResolution"` | The resolution of the project's start date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `"startedAt"` | The time at which the project was moved into a started status. |
| `"status"` | The current project status. |
| `"targetDate"` | The estimated completion date of the project. |
| `"targetDateResolution"` | The resolution of the project's estimated completion date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `"trashed"` | A flag that indicates whether the project is in the trash bin. |
| `"updateReminderFrequency"` | The frequency at which to prompt for updates. |
| `"updateReminderFrequencyInWeeks"` | The n-weekly frequency at which to prompt for updates. |
| `"updateRemindersDay"` | The day at which to prompt for updates. |
| `"updateRemindersHour"` | The hour at which to prompt for updates. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |
| `"url"` | Project URL. |

Operations: Create, List, Load, Remove, Update.

API path: `projectCreate`

#### ProjectLabel

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"color"` | The label's color as a HEX string (e.g., '#EB5757'). |
| `"createdAt"` | The time at which the entity was created. |
| `"creator"` | The user who created the label. |
| `"description"` | The label's description. |
| `"id"` | The unique identifier of the entity. |
| `"inheritedFrom"` | [Internal] The original workspace or parent-team label that this label was inherited from. |
| `"isGroup"` | Whether the label is a group. |
| `"lastAppliedAt"` | The date when the label was last applied to an issue, project, or initiative. |
| `"name"` | The label's name. |
| `"organization"` | The workspace that the project label belongs to. |
| `"parent"` | The parent label group. |
| `"retiredAt"` | [Internal] When the label was retired. |
| `"retiredBy"` | The user who retired the label. |
| `"team"` | [Internal] The team that the label is scoped to. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Remove, Update.

API path: `projectLabelCreate`

#### ProjectMilestone

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"createdAt"` | The time at which the entity was created. |
| `"currentProgress"` | [Internal] The current progress of the milestone, broken down by issue status category. |
| `"description"` | The project milestone's description in markdown format. |
| `"descriptionState"` | [Internal] The project milestone's description as YJS state. |
| `"documentContent"` | The rich-text content of the milestone description. |
| `"id"` | The unique identifier of the entity. |
| `"name"` | The name of the project milestone. |
| `"progress"` | The progress % of the project milestone. |
| `"progressHistory"` | [Internal] The progress history of the milestone, tracking issue completion over time. |
| `"project"` | The project that this milestone belongs to. |
| `"sortOrder"` | The order of the milestone in relation to other milestones within a project. |
| `"status"` | The status of the project milestone. |
| `"targetDate"` | The planned completion date of the milestone. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Remove, Update.

API path: `projectMilestoneCreate`

#### ProjectMilestoneMoveProjectTeam

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"projectId"` | The project id |
| `"teamIds"` | The team ids for the project |

Operations: Update.

API path: `projectMilestoneMove`

#### ProjectRelation

| Field | Description |
| --- | --- |
| `"anchorType"` | The type of anchor on the source project end of the relation, indicating whether it is anchored to the project itself or a specific milestone. |
| `"archivedAt"` | The time at which the entity was archived. |
| `"createdAt"` | The time at which the entity was created. |
| `"id"` | The unique identifier of the entity. |
| `"project"` | The source project in the dependency relation. |
| `"projectMilestone"` | The specific milestone within the source project that the relation is anchored to. |
| `"relatedAnchorType"` | The type of anchor on the target project end of the relation, indicating whether it is anchored to the project itself or a specific milestone. |
| `"relatedProject"` | The target project in the dependency relation. |
| `"relatedProjectMilestone"` | The specific milestone within the target project that the relation is anchored to. |
| `"type"` | The type of dependency relationship from the project to the related project (e.g., blocks). |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |
| `"user"` | The user who last created or modified the relation. |

Operations: Create, List, Load, Remove, Update.

API path: `projectRelationCreate`

#### ProjectSearchResult

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"autoArchivedAt"` | The time at which the project was automatically archived by the auto-pruning process. |
| `"canceledAt"` | The time at which the project was moved into a canceled status. |
| `"color"` | The project's color as a HEX string. |
| `"completedAt"` | The time at which the project was moved into a completed status. |
| `"completedIssueCountHistory"` | The number of completed issues in the project at the end of each week since project creation. |
| `"completedScopeHistory"` | The number of completed estimation points at the end of each week since project creation. |
| `"content"` | The project's content in markdown format. |
| `"contentState"` | [Internal] The project's content as YJS state. |
| `"convertedFromIssue"` | The issue that was converted into this project. |
| `"createdAt"` | The time at which the entity was created. |
| `"creator"` | The user who created the project. |
| `"currentProgress"` | [INTERNAL] The current progress of the project, broken down by issue status category. |
| `"description"` | The short description of the project. |
| `"documentContent"` | The content of the project description. |
| `"favorite"` | The user's favorite associated with this project. |
| `"frequencyResolution"` | The resolution of the reminder frequency. |
| `"health"` | The overall health of the project, derived from the most recent project update. |
| `"healthUpdatedAt"` | The time at which the project health was last updated, typically when a new project update is posted. |
| `"icon"` | The icon of the project. |
| `"id"` | The unique identifier of the entity. |
| `"identifier"` | [Internal] The human-readable identifier of the project. |
| `"inProgressScopeHistory"` | The number of in-progress estimation points at the end of each week since project creation. |
| `"integrationsSettings"` | Settings for all integrations associated with that project. |
| `"issueCountHistory"` | The total number of issues in the project at the end of each week since project creation. |
| `"labelIds"` | The IDs of the project labels associated with this project. |
| `"lastAppliedTemplate"` | The last template that was applied to this project. |
| `"lastUpdate"` | The most recent status update posted for this project. |
| `"lead"` | The user who leads the project. |
| `"leadTeam"` | [Internal] The team that leads the project. |
| `"metadata"` | Metadata related to search result. |
| `"microsoftTeamsChannelId"` | The ID of the Microsoft Teams channel connected to the project, if any. |
| `"name"` | The name of the project. |
| `"previousIdentifiers"` | [Internal] Identifiers (default and custom) that this project has previously held. |
| `"priority"` | The priority of the project. |
| `"priorityLabel"` | The priority of the project as a label. |
| `"prioritySortOrder"` | The sort order for the project within the workspace when ordered by priority. |
| `"progress"` | The overall progress of the project. |
| `"progressHistory"` | [INTERNAL] The progress history of the project, tracking issue completion over time. |
| `"projectUpdateRemindersPausedUntilAt"` | The time until which project update reminders are paused. |
| `"resourceCount"` | The number of resources associated with the project, including documents, external links, and attachments. |
| `"scope"` | The overall scope (total estimate points) of the project. |
| `"scopeHistory"` | The total scope (estimation points) of the project at the end of each week since project creation. |
| `"slackChannelId"` | The ID of the Slack channel connected to the project, if any. |
| `"slugId"` | The project's unique URL slug, used to construct human-readable URLs. |
| `"sortOrder"` | The sort order for the project within the workspace. |
| `"startDate"` | The estimated start date of the project. |
| `"startDateResolution"` | The resolution of the project's start date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `"startedAt"` | The time at which the project was moved into a started status. |
| `"status"` | The current project status. |
| `"targetDate"` | The estimated completion date of the project. |
| `"targetDateResolution"` | The resolution of the project's estimated completion date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `"trashed"` | A flag that indicates whether the project is in the trash bin. |
| `"updateReminderFrequency"` | The frequency at which to prompt for updates. |
| `"updateReminderFrequencyInWeeks"` | The n-weekly frequency at which to prompt for updates. |
| `"updateRemindersDay"` | The day at which to prompt for updates. |
| `"updateRemindersHour"` | The hour at which to prompt for updates. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |
| `"url"` | Project URL. |

Operations: List.

API path: `searchProjects`

#### ProjectStatus

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"color"` | The color of the status as a HEX string, used for display in the UI. |
| `"createdAt"` | The time at which the entity was created. |
| `"description"` | Description of the status. |
| `"id"` | The unique identifier of the entity. |
| `"indefinite"` | Whether a project can remain in this status indefinitely. |
| `"inheritedFrom"` | [Internal] The original workspace or parent-team status that this status was inherited from. |
| `"name"` | The name of the status. |
| `"position"` | The position of the status within its type group in the workspace's project flow. |
| `"team"` | [Internal] The team that the status is scoped to. |
| `"type"` | The category type of the project status (e.g., backlog, planned, started, paused, completed, canceled). |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Update.

API path: `projectStatusCreate`

#### ProjectUpdate

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"body"` | The update content in markdown format. |
| `"bodyData"` | [Internal] The content of the update as a Prosemirror document. |
| `"commentCount"` | Number of comments associated with the project update. |
| `"createdAt"` | The time at which the entity was created. |
| `"diff"` | The diff between the current update and the previous one. |
| `"diffMarkdown"` | The diff between the current update and the previous one, formatted as markdown. |
| `"editedAt"` | The time the update was edited. |
| `"health"` | The health of the project at the time this update was posted. |
| `"id"` | The unique identifier of the entity. |
| `"infoSnapshot"` | [Internal] A snapshot of project properties at the time the update was posted, including team, milestone, and issue statistics. |
| `"isDiffHidden"` | Whether the diff between this update and the previous one should be hidden in the UI. |
| `"isStale"` | Whether the project update is stale. |
| `"project"` | The project that this status update was posted to. |
| `"reactionData"` | Emoji reaction summary, grouped by emoji type. |
| `"shortSummary"` | A short AI-generated summary of the project update. |
| `"slugId"` | The update's unique URL slug. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |
| `"url"` | The URL to the project update. |
| `"user"` | The user who wrote the update. |

Operations: Create, List, Load, Remove, Update.

API path: `projectUpdateCreate`

#### PushSubscription

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"createdAt"` | The time at which the entity was created. |
| `"id"` | The unique identifier of the entity. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |

Operations: Create, Remove.

API path: `pushSubscriptionCreate`

#### Reaction

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"comment"` | The comment that the reaction is associated with. |
| `"createdAt"` | The time at which the entity was created. |
| `"emoji"` | The name of the emoji used for this reaction. |
| `"externalUser"` | The external user that created the reaction through an integration. |
| `"id"` | The unique identifier of the entity. |
| `"initiativeUpdate"` | The initiative update that the reaction is associated with. |
| `"issue"` | The issue that the reaction is associated with. |
| `"post"` | The post that the reaction is associated with. |
| `"projectUpdate"` | The project update that the reaction is associated with. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |
| `"user"` | The workspace user that created the reaction. |

Operations: Create, Remove.

API path: `reactionCreate`

#### Release

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"autoArchivedAt"` | The time at which the release was automatically archived by the auto pruning process. |
| `"canceledAt"` | The time at which the release was canceled. |
| `"commitSha"` | The Git commit SHA associated with this release. |
| `"completedAt"` | The time at which the release was completed. |
| `"createdAt"` | The time at which the entity was created. |
| `"creator"` | The user who created the release. |
| `"currentProgress"` | The current progress summary for the release, including counts of issues by workflow state type (e.g., completed, in progress, unstarted). |
| `"description"` | The description of the release in plain text or markdown. |
| `"id"` | The unique identifier of the entity. |
| `"issueCount"` | Number of issues associated with the release. |
| `"name"` | The name of the release. |
| `"pipeline"` | The release pipeline that this release belongs to. |
| `"progressHistory"` | The historical progress snapshots for the release, tracking how issue completion has evolved over time. |
| `"releaseNote"` | [Internal] The primary release note covering this release. |
| `"slugId"` | The release's unique URL slug, used to construct human-readable URLs for the release. |
| `"stage"` | The current stage of the release within its pipeline (e.g., Planned, In Progress, Completed, Canceled). |
| `"startDate"` | The estimated start date of the release. |
| `"startedAt"` | The time at which the release first entered a started stage. |
| `"targetDate"` | The estimated completion date of the release. |
| `"trashed"` | A flag that indicates whether the release is in the trash bin. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |
| `"url"` | The URL to the release page in the Linear app. |
| `"version"` | The version identifier for this release (e.g., 'v1.2.3' or a short commit hash). |

Operations: Create, List, Load, Remove, Update.

API path: `releaseComplete`

#### ReleaseNote

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"createdAt"` | The time at which the entity was created. |
| `"documentContent"` | Document content backing the release note body. |
| `"firstRelease"` | The earliest release covered by this note. |
| `"generationStatus"` | Generation status when these release notes are being auto-generated: `pending` while the LLM call is running, `completed` once it lands. |
| `"id"` | The unique identifier of the entity. |
| `"lastRelease"` | The most recent release covered by this note. |
| `"pipeline"` | The release pipeline that this note belongs to. |
| `"releaseCount"` | The number of releases covered by this note. |
| `"slugId"` | The release note's unique URL slug, used to construct human-readable URLs for the note. |
| `"title"` | User-supplied title for the release note. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |
| `"url"` | The URL to the release note page in the Linear app. |

Operations: Create, List, Load, Remove, Update.

API path: `releaseNoteCreate`

#### ReleasePipeline

| Field | Description |
| --- | --- |
| `"approximateReleaseCount"` | The approximate number of non-archived releases in this pipeline. |
| `"archivedAt"` | The time at which the entity was archived. |
| `"autoGenerateReleaseNotesOnCompletion"` | Whether to automatically generate a release note when a release is completed. |
| `"createdAt"` | The time at which the entity was created. |
| `"id"` | The unique identifier of the entity. |
| `"includePathPatterns"` | Glob patterns to filter commits by file path. |
| `"isProduction"` | Whether this pipeline targets a production environment. |
| `"latestReleaseNote"` | The release note in this pipeline whose covered range ends with the most recent release. |
| `"name"` | The name of the pipeline. |
| `"releaseNoteTemplate"` | The document template used to define the release notes format for this pipeline. |
| `"rolloverIssuesOnCompletion"` | Whether completing a scheduled release moves its open issues to the next release. |
| `"slugId"` | The pipeline's unique slug identifier, used in URLs and for lookup by human-readable identifier instead of UUID. |
| `"trashed"` | A flag that indicates whether the pipeline is in the trash bin. |
| `"type"` | The type of the pipeline, which determines how releases are created and managed. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |
| `"url"` | The URL to the release pipeline's releases list in the Linear app. |

Operations: Create, List, Load, Remove, Update.

API path: `releasePipelineCreate`

#### ReleaseStage

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"color"` | The display color of the stage as a HEX string (e.g., '#0f783c'), used for visual representation in the UI. |
| `"createdAt"` | The time at which the entity was created. |
| `"frozen"` | Whether this stage is frozen. |
| `"id"` | The unique identifier of the entity. |
| `"name"` | The name of the stage. |
| `"pipeline"` | The release pipeline that this stage belongs to. |
| `"position"` | The position of the stage within its pipeline, used for ordering stages in the UI. |
| `"type"` | The lifecycle type of the stage (planned, started, completed, or canceled). |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Update.

API path: `releaseStageCreate`

#### Roadmap

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"color"` | The roadmap's color. |
| `"createdAt"` | The time at which the entity was created. |
| `"creator"` | The user who created the roadmap. |
| `"description"` | The description of the roadmap. |
| `"id"` | The unique identifier of the entity. |
| `"name"` | The name of the roadmap. |
| `"organization"` | The workspace of the roadmap. |
| `"owner"` | The user who owns the roadmap. |
| `"slugId"` | The roadmap's unique URL slug. |
| `"sortOrder"` | The sort order of the roadmap within the workspace. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |
| `"url"` | The canonical url for the roadmap. |

Operations: Create, List, Load, Remove, Update.

API path: `roadmapCreate`

#### RoadmapToProject

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"createdAt"` | The time at which the entity was created. |
| `"id"` | The unique identifier of the entity. |
| `"project"` | The project that the roadmap is associated with. |
| `"roadmap"` | The roadmap that the project is associated with. |
| `"sortOrder"` | The sort order of the project within the roadmap. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Remove, Update.

API path: `roadmapToProjectCreate`

#### SlaConfiguration

| Field | Description |
| --- | --- |
| `"conditions"` | The workflow conditions that determine when this SLA rule applies. |
| `"id"` | The identifier of the SLA rule. |
| `"name"` | The name of the SLA rule. |
| `"removesSla"` | Whether the rule removes an SLA instead of setting one. |
| `"sla"` | The SLA value configured by the rule, expressed in milliseconds or business days depending on the day-count type. |
| `"slaType"` | The SLA type used when the rule sets an SLA. |
| `"startMode"` | When SLA timing begins. |

Operations: List.

API path: `slaConfigurations`

#### SsoUrlFromEmailResponse

| Field | Description |
| --- | --- |
| `"samlSsoUrl"` | SAML SSO sign-in URL. |
| `"success"` | Whether the operation was successful. |

Operations: Load.

API path: `ssoUrlFromEmail`

#### Team

| Field | Description |
| --- | --- |
| `"activeCycle"` | Team's currently active cycle. |
| `"aiDiscussionSummariesEnabled"` | Whether to enable AI discussion summaries for issues in this team. |
| `"aiThreadSummariesEnabled"` | Whether to enable resolved thread AI summaries. |
| `"allMembersCanJoin"` | Whether all members in the workspace can join the team. |
| `"archivedAt"` | The time at which the entity was archived. |
| `"autoArchivePeriod"` | Period after which automatically closed, completed, and duplicate issues are automatically archived in months. |
| `"autoCloseChildIssues"` | Whether child issues should automatically close when their parent issue is closed |
| `"autoCloseParentIssues"` | Whether parent issues should automatically close when all child issues are closed |
| `"autoClosePeriod"` | Period after which issues are automatically closed in months. |
| `"autoCloseStateId"` | The canceled workflow state which auto closed issues will be set to. |
| `"color"` | The team's color. |
| `"createdAt"` | The time at which the entity was created. |
| `"currentProgress"` | [Internal] The current progress of the team. |
| `"cycleCalenderUrl"` | Calendar feed URL (iCal) for cycles. |
| `"cycleCooldownTime"` | The cooldown time after each cycle in weeks. |
| `"cycleDuration"` | The duration of each cycle in weeks. |
| `"cycleIssueAutoAssignCompleted"` | Auto assign completed issues to current cycle. |
| `"cycleIssueAutoAssignStarted"` | Auto assign started issues to current cycle. |
| `"cycleLockToActive"` | Auto assign issues to current cycle if in active status. |
| `"cycleStartDay"` | The day of the week that a new cycle starts (0 = Sunday, 1 = Monday, ..., 6 = Saturday). |
| `"cyclesEnabled"` | Whether the team uses cycles for sprint-style issue management. |
| `"defaultIssueEstimate"` | What to use as a default estimate for unestimated issues. |
| `"defaultIssueState"` | The default workflow state into which issues are set when they are opened by team members. |
| `"defaultProjectTemplate"` | The default template to use for new projects created for the team. |
| `"defaultTemplateForMembers"` | The default template to use for new issues created by members of the team. |
| `"defaultTemplateForNonMembers"` | The default template to use for new issues created by non-members of the team. |
| `"description"` | The team's description. |
| `"displayName"` | The name of the team including its parent team name if it has one. |
| `"groupIssueHistory"` | Whether to group recent issue history entries. |
| `"icon"` | The icon of the team. |
| `"id"` | The unique identifier of the entity. |
| `"inheritIssueEstimation"` | Whether the team should inherit its estimation settings from its parent. |
| `"inheritProjectStatuses"` | [Internal] Whether the team should inherit its project statuses from its parent team, or from the workspace when it has no parent. |
| `"inheritSlackAutoCreateProjectChannel"` | [Internal] Whether the team should inherit its Slack auto-create project channel setting from its parent. |
| `"inheritWorkflowStatuses"` | Whether the team should inherit its workflow statuses from its parent. |
| `"initiativesEnabled"` | Whether team initiatives are enabled and shown in the team's sidebar. |
| `"integrationsSettings"` | Settings for all integrations associated with that team. |
| `"issueCount"` | The total number of issues in the team. |
| `"issueEstimationAllowZero"` | Whether to allow zeros in issues estimates. |
| `"issueEstimationExtended"` | Whether to add additional points to the estimate scale. |
| `"issueEstimationType"` | The issue estimation type to use. |
| `"joinByDefault"` | [Internal] Whether new users should join this team by default. |
| `"key"` | The team's unique key, used as a prefix in issue identifiers (e.g., 'ENG' in 'ENG-123') and in URLs. |
| `"ledInitiativeCount"` | The number of initiatives led by this team that would be deleted along with it. |
| `"name"` | The team's name. |
| `"organization"` | The workspace that the team belongs to. |
| `"parent"` | The team's parent team. |
| `"progressHistory"` | [Internal] The progress history of the team. |
| `"requirePriorityToLeaveTriage"` | Whether an issue needs to have a priority set before leaving triage. |
| `"restrictedBy"` | [Internal] For restricted teams, the enclosing private team that forms the visibility boundary. |
| `"restrictedById"` | [Internal] The identifier of the enclosing private team that forms the visibility boundary for restricted teams. |
| `"retiredAt"` | The time at which the team was retired. |
| `"scimGroupName"` | The SCIM group name for the team. |
| `"scimManaged"` | Whether the team is managed by a SCIM integration. |
| `"securitySettings"` | Security settings for the team, including role-based restrictions for issue sharing, label management, member management, template management, and agent skills. |
| `"setIssueSortOrderOnStateChange"` | Where to move issues when changing state. |
| `"slackAutoCreateProjectChannel"` | [Internal] Whether to automatically create a Slack channel when a new project is created in this team. |
| `"timezone"` | The timezone of the team. |
| `"triageEnabled"` | Whether triage mode is enabled for the team. |
| `"triageIssueState"` | The workflow state into which issues are set when they are opened by non-team members or integrations if triage is enabled. |
| `"triageResponsibility"` | Team's triage responsibility. |
| `"upcomingCycleCount"` | How many upcoming cycles to create. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |
| `"visibility"` | The visibility of the team. |

Operations: Create, List, Load, Remove, Update.

API path: `teamCreate`

#### TeamMembership

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"createdAt"` | The time at which the entity was created. |
| `"id"` | The unique identifier of the entity. |
| `"owner"` | Whether the user is an owner of the team. |
| `"sortOrder"` | The sort order of this team in the user's personal team list. |
| `"team"` | The team that the membership is associated with. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |
| `"user"` | The user that the membership is associated with. |

Operations: Create, List, Load, Remove, Update.

API path: `teamMembershipCreate`

#### Template

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"color"` | The hex color of the template icon. |
| `"content"` | The template's content in markdown format: the body it pre-fills on the entity it creates. |
| `"createdAt"` | The time at which the entity was created. |
| `"creator"` | The user who created the template. |
| `"description"` | A description of what the template is used for. |
| `"hasFormFields"` | [Internal] Whether the template has form fields |
| `"icon"` | The icon of the template, either a decorative icon type or an emoji string. |
| `"id"` | The unique identifier of the entity. |
| `"inheritedFrom"` | The parent team template this template was inherited from. |
| `"lastAppliedAt"` | The date when the template was last applied to create or update an entity. |
| `"lastUpdatedBy"` | The user who last updated the template. |
| `"name"` | The name of the template. |
| `"organization"` | The workspace that owns this template. |
| `"pipeline"` | The release pipeline this template is bound to. |
| `"sortOrder"` | The sort order of the template within the templates list. |
| `"team"` | The team that the template is associated with. |
| `"templateData"` | The template data as a JSON-encoded string containing the pre-filled attributes for the entity type (e.g., issue fields, project configuration, or document content). |
| `"type"` | The entity type this template is for, such as 'issue', 'project', or 'document'. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Remove, Update.

API path: `templateCreate`

#### TimeSchedule

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"createdAt"` | The time at which the entity was created. |
| `"externalId"` | The identifier of the external schedule. |
| `"externalUrl"` | The URL to the external schedule. |
| `"id"` | The unique identifier of the entity. |
| `"integration"` | The identifier of the Linear integration populating the schedule. |
| `"name"` | The name of the schedule. |
| `"organization"` | The workspace of the schedule. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Remove, Update.

API path: `timeScheduleCreate`

#### TriageResponsibility

| Field | Description |
| --- | --- |
| `"action"` | The action to take when an issue is added to triage. |
| `"archivedAt"` | The time at which the entity was archived. |
| `"createdAt"` | The time at which the entity was created. |
| `"currentUser"` | The user currently responsible for triage. |
| `"id"` | The unique identifier of the entity. |
| `"team"` | The team to which the triage responsibility belongs to. |
| `"timeSchedule"` | The time schedule used for scheduling. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Remove, Update.

API path: `triageResponsibilityCreate`

#### UploadFile

| Field | Description |
| --- | --- |
| `"assetUrl"` | The permanent asset URL where the file will be accessible after upload. |
| `"contentType"` | The content type. |
| `"filename"` | The filename. |
| `"metaData"` | Optional metadata associated with the upload, such as the related issue or comment ID. |
| `"size"` | The size of the uploaded file. |
| `"uploadUrl"` | The pre-signed URL to which the file should be uploaded via a PUT request. |

Operations: Create.

API path: `fileUpload`

#### UsageAlert

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"createdAt"` | The time at which the entity was created. |
| `"id"` | The unique identifier of the entity. |
| `"metadata"` | Type-specific snapshot captured when the alert was triggered, keyed by the alert type — for example the credit balance and threshold for a lowBalance alert. |
| `"resolvedAt"` | The time when the usage alert was resolved or archived. |
| `"type"` | The kind of usage alert that was triggered. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |

Operations: List, Load.

API path: `usageAlerts`

#### User

| Field | Description |
| --- | --- |
| `"active"` | Whether the user account is active or disabled (suspended). |
| `"admin"` | Whether the user is a workspace administrator. |
| `"app"` | Whether the user is an app. |
| `"archivedAt"` | The time at which the entity was archived. |
| `"avatarBackgroundColor"` | The background color of the avatar for users without set avatar. |
| `"avatarUrl"` | An URL to the user's avatar image. |
| `"calendarHash"` | [DEPRECATED] Hash for the user to be used in calendar URLs. |
| `"canAccessAnyPublicTeam"` | Whether this user can access any public team in the workspace. |
| `"createdAt"` | The time at which the entity was created. |
| `"createdIssueCount"` | Number of issues created. |
| `"description"` | A short description of the user, such as their title or a brief bio. |
| `"disableReason"` | The reason why the user account is disabled. |
| `"displayName"` | The user's display (nick) name. |
| `"email"` | The user's email address. |
| `"gitHubUserId"` | The user's GitHub user ID. |
| `"guest"` | Whether the user is a guest in the workspace and limited to accessing a subset of teams. |
| `"hasGitHubCodeAccess"` | [Internal] Whether this user can access GitHub source code through Linear. |
| `"id"` | The unique identifier of the entity. |
| `"identityProvider"` | [INTERNAL] Identity provider the user is managed by. |
| `"initials"` | The initials of the user. |
| `"isAssignable"` | Whether the user can be assigned to issues. |
| `"isMe"` | Whether the user is the currently authenticated user. |
| `"isMentionable"` | Whether the user is mentionable. |
| `"lastSeen"` | The last time the user was seen online. |
| `"name"` | The user's full name. |
| `"organization"` | The workspace that the user belongs to. |
| `"owner"` | Whether the user is a workspace owner, which is the highest permission level. |
| `"statusEmoji"` | The emoji representing the user's current status. |
| `"statusLabel"` | The text label of the user's current status. |
| `"statusUntilAt"` | The date and time at which the user's current status should be automatically cleared. |
| `"supportsAgentSessions"` | Whether this agent user supports agent sessions. |
| `"timezone"` | The local timezone of the user. |
| `"title"` | The user's job title. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |
| `"url"` | User's profile URL. |

Operations: Create, List, Load, Update.

API path: `userDiscordConnect`

#### UserSetting

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"autoAssignToSelf"` | Whether to auto-assign newly created issues to the current user by default. |
| `"calendarHash"` | A unique hash for the user, used to construct secure calendar subscription URLs. |
| `"createdAt"` | The time at which the entity was created. |
| `"feedLastSeenTime"` | The user's last seen time for the pulse feed. |
| `"feedSummarySchedule"` | The user's preferred schedule for receiving feed summary digests. |
| `"id"` | The unique identifier of the entity. |
| `"pullRequestMergeStrategyPreference"` | [Internal] The user's preferred merge method for pull requests. |
| `"showFullUserNames"` | Whether to show full user names instead of display names. |
| `"subscribedToChangelog"` | Whether this user is subscribed to receive changelog emails about Linear product updates. |
| `"subscribedToDPA"` | Whether this user is subscribed to receive Data Processing Agreement (DPA) related emails. |
| `"subscribedToInviteAccepted"` | Whether this user is subscribed to receive email notifications when their workspace invitations are accepted. |
| `"subscribedToPrivacyLegalUpdates"` | Whether this user is subscribed to receive emails about privacy policy and legal updates. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |
| `"user"` | The user that these settings belong to. |

Operations: Create, Load, Update.

API path: `notificationCategoryChannelSubscriptionUpdate`

#### ViewPreference

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"createdAt"` | The time at which the entity was created. |
| `"id"` | The unique identifier of the entity. |
| `"type"` | The type of view preferences: "organization" for workspace-wide defaults or "user" for personal overrides. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |
| `"viewType"` | The type of view these preferences apply to, such as board, cycle, project, customView, myIssues, etc. |

Operations: Create, Load, Remove, Update.

API path: `viewPreferencesCreate`

#### Webhook

| Field | Description |
| --- | --- |
| `"allPublicTeams"` | Whether the webhook receives events from all public (non-private) teams in the organization, including teams created after the webhook was set up. |
| `"archivedAt"` | The time at which the entity was archived. |
| `"createdAt"` | The time at which the entity was created. |
| `"creator"` | The user who created the webhook. |
| `"enabled"` | Whether the webhook is enabled. |
| `"id"` | The unique identifier of the entity. |
| `"label"` | A human-readable label for the webhook, used for identification in the UI. |
| `"resourceTypes"` | The resource types this webhook is subscribed to (e.g., 'Issue', 'Comment', 'Project', 'Cycle'). |
| `"secret"` | A secret token used to sign webhook payloads with HMAC-SHA256, allowing the recipient to verify that the payload originated from Linear and was not tampered with. |
| `"team"` | The single team that the webhook is scoped to. |
| `"teamIds"` | [INTERNAL] An array of team IDs that the webhook is subscribed to. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |
| `"url"` | The destination URL where webhook payloads will be sent via HTTP POST. |

Operations: Create, List, Load, Remove, Update.

API path: `webhookCreate`

#### WebhookFailureEvent

| Field | Description |
| --- | --- |
| `"createdAt"` | The time at which the entity was created. |
| `"executionId"` | A stable identifier for the webhook delivery attempt. |
| `"httpStatus"` | The HTTP status code returned by the webhook recipient. |
| `"id"` | The unique identifier of the entity. |
| `"responseOrError"` | The HTTP response body returned by the recipient, or the error message if the request failed before receiving a response. |
| `"url"` | The URL that the webhook was trying to push to. |
| `"webhook"` | The webhook that this failure event is associated with. |

Operations: List.

API path: `failuresForOauthWebhooks`

#### WorkflowState

| Field | Description |
| --- | --- |
| `"archivedAt"` | The time at which the entity was archived. |
| `"color"` | The state's UI color as a HEX string. |
| `"createdAt"` | The time at which the entity was created. |
| `"description"` | Description of the state. |
| `"id"` | The unique identifier of the entity. |
| `"inheritedFrom"` | The parent team's workflow state that this state was inherited from. |
| `"name"` | The state's human-readable name (e.g., 'In Progress', 'Done', 'Backlog'). |
| `"position"` | The position of the state in the team's workflow. |
| `"team"` | The team that this workflow state belongs to. |
| `"type"` | The type of the state. |
| `"updatedAt"` | The last time at which the entity was meaningfully updated. |

Operations: Create, List, Load, Update.

API path: `workflowStateCreate`



## Entities


### AccessKeyRelease

Create an instance: `accessKeyRelease := client.AccessKeyRelease(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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

```go
accessKeyRelease, err := client.AccessKeyRelease(nil).Load(map[string]any{"id": "access_key_release_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(accessKeyRelease) // the loaded record
```

#### Example: List

```go
accessKeyReleases, err := client.AccessKeyRelease(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(accessKeyReleases) // the array of records
```

#### Example: Create

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


### AccessKeyReleasePipeline

Create an instance: `accessKeyReleasePipeline := client.AccessKeyReleasePipeline(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | The unique identifier of the release pipeline. |
| `includePathPatterns` | `string` | Glob patterns used to filter commits by changed file path. |

#### Example: Load

```go
accessKeyReleasePipeline, err := client.AccessKeyReleasePipeline(nil).Load(map[string]any{"id": "access_key_release_pipeline_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(accessKeyReleasePipeline) // the loaded record
```


### AgentActivity

Create an instance: `agentActivity := client.AgentActivity(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agentSession` | `map[string]any` | The agent session this activity belongs to. |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `contextualMetadata` | `any` | [Internal] Metadata about user-provided contextual information for this agent activity. |
| `createdAt` | `any` | The time at which the entity was created. |
| `ephemeral` | `bool` | Whether the activity is ephemeral, and should disappear after the next agent activity. |
| `executionSkippedReason` | `string` | [Internal] The reason this activity was persisted without being sent to the agent runtime. |
| `id` | `string` | The unique identifier of the entity. |
| `queued` | `bool` | [Internal] Whether this activity is queued for later processing. |
| `sentAt` | `any` | [Internal] The time at which the prompt actually entered the conversation. |
| `signal` | `string` | An optional modifier that provides additional instructions on how the activity should be interpreted. |
| `signalMetadata` | `any` | Metadata about this agent activity's signal. |
| `sourceComment` | `map[string]any` | The source comment this activity is linked to. |
| `sourceMetadata` | `any` | Metadata about the external source that created this agent activity. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `user` | `map[string]any` | The user who created this agent activity. |

#### Example: Load

```go
agentActivity, err := client.AgentActivity(nil).Load(map[string]any{"id": "agent_activity_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(agentActivity) // the loaded record
```

#### Example: List

```go
agentActivitys, err := client.AgentActivity(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(agentActivitys) // the array of records
```

#### Example: Create

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


### AgentSession

Create an instance: `agentSession := client.AgentSession(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `appUser` | `map[string]any` | The agent user that is associated with this agent session. |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `codingHarnessModelLabel` | `string` | [Internal] Compact display label for the coding harness model used by this session, derived from the latest associated sandbox. |
| `comment` | `map[string]any` | The comment this agent session is associated with. |
| `context` | `any` | The entity contexts this session is related to, such as issues or projects referenced in direct chat sessions. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `map[string]any` | The human user responsible for the agent session. |
| `dismissedAt` | `any` | The time a user dismissed this agent session. |
| `dismissedBy` | `map[string]any` | The user who dismissed the agent session. |
| `endedAt` | `any` | The time the agent session completed. |
| `id` | `string` | The unique identifier of the entity. |
| `issue` | `map[string]any` | The issue this agent session is associated with. |
| `modelSelection` | `any` | [Internal] How Adaptive selected the model route used by this coding session. |
| `plan` | `any` | A dynamically updated plan describing the agent's execution strategy, including steps to be taken and their current status. |
| `pullRequest` | `map[string]any` | The pull request this agent session is anchored to, when started from a pull request. |
| `slugId` | `string` | The agent session's unique URL slug. |
| `sourceComment` | `map[string]any` | The comment that this agent session was spawned from, if from a different thread. |
| `sourceMetadata` | `any` | Metadata about the external source that created this agent session. |
| `startedAt` | `any` | The time the agent session transitioned to active status and began work. |
| `status` | `string` | The current status of the agent session, such as pending, active, awaiting input, complete, error, or stale. |
| `summary` | `string` | The session title, generated automatically or set by the owning OAuth application. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | The URL to the agent session page in the Linear app. |

#### Example: Load

```go
agentSession, err := client.AgentSession(nil).Load(map[string]any{"id": "agent_session_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(agentSession) // the loaded record
```

#### Example: List

```go
agentSessions, err := client.AgentSession(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(agentSessions) // the array of records
```

#### Example: Create

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


### AgentSkill

Create an instance: `agentSkill := client.AgentSkill(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `body` | `string` | The skill instructions in markdown format. |
| `color` | `string` | The skill's color. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `map[string]any` | The user who created the skill. |
| `description` | `string` | The skill's description. |
| `icon` | `string` | The icon of the skill. |
| `id` | `string` | The unique identifier of the entity. |
| `inheritedFrom` | `map[string]any` | The parent-team skill this skill was inherited from. |
| `lastUpdatedBy` | `map[string]any` | The user who last updated the skill. |
| `lastUsedAt` | `any` | The time the skill was last used by anyone in the workspace. |
| `owner` | `map[string]any` | The user who owns the skill. |
| `recentUsageCount` | `float64` | The number of times the skill was used by anyone in the workspace in the last 30 days. |
| `shared` | `bool` | Whether the skill is shared with everyone in the workspace. |
| `slugId` | `string` | The skill's unique URL slug. |
| `teamId` | `string` | The identifier of the team this skill is shared with. |
| `title` | `string` | The skill's title. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```go
agentSkill, err := client.AgentSkill(nil).Load(map[string]any{"id": "agent_skill_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(agentSkill) // the loaded record
```

#### Example: List

```go
agentSkills, err := client.AgentSkill(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(agentSkills) // the array of records
```

#### Example: Create

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


### Application

Create an instance: `application := client.Application(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

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

```go
application, err := client.Application(nil).Load(map[string]any{"client_id": "client_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(application) // the loaded record
```


### Attachment

Create an instance: `attachment := client.Attachment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `bodyData` | `string` | The body data of the attachment, if any. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `map[string]any` | The creator of the attachment. |
| `externalUserCreator` | `map[string]any` | The non-Linear user who created the attachment. |
| `groupBySource` | `bool` | Whether attachments from the same source application should be visually grouped together in the Linear issue detail view. |
| `id` | `string` | The unique identifier of the entity. |
| `issue` | `map[string]any` | The issue this attachment belongs to. |
| `metadata` | `any` | Integration-specific metadata for this attachment. |
| `originalIssue` | `map[string]any` | The issue this attachment was originally created on. |
| `source` | `any` | Information about the source which created the attachment. |
| `sourceType` | `string` | The source type of the attachment, derived from the source metadata. |
| `subtitle` | `string` | Content for the subtitle line in the Linear attachment widget. |
| `title` | `string` | Content for the title line in the Linear attachment widget. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | The URL of the external resource this attachment links to. |

#### Example: Load

```go
attachment, err := client.Attachment(nil).Load(map[string]any{"id": "attachment_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(attachment) // the loaded record
```

#### Example: List

```go
attachments, err := client.Attachment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(attachments) // the array of records
```

#### Example: Create

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


### AuditEntry

Create an instance: `auditEntry := client.AuditEntry(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `map[string]any` | The user that caused the audit entry to be created. |
| `actorId` | `string` | The ID of the user that caused the audit entry to be created. |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `countryCode` | `string` | The ISO 3166-1 alpha-2 country code derived from the request IP address. |
| `createdAt` | `any` | The time at which the entity was created. |
| `id` | `string` | The unique identifier of the entity. |
| `ip` | `string` | The IP address of the actor at the time the audited action was performed. |
| `metadata` | `any` | Additional metadata related to the audit entry. |
| `organization` | `map[string]any` | The workspace the audit log belongs to. |
| `requestInformation` | `any` | Additional information related to the request which performed the action. |
| `type` | `string` | The type of audited action (e.g., user authentication, permission change, data export, setting modification). |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: List

```go
auditEntrys, err := client.AuditEntry(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(auditEntrys) // the array of records
```


### AuditEntryType

Create an instance: `auditEntryType := client.AuditEntryType(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | Description of the audit entry type. |
| `type` | `string` | The audit entry type. |

#### Example: List

```go
auditEntryTypes, err := client.AuditEntryType(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(auditEntryTypes) // the array of records
```


### AuthResolverResponse

Create an instance: `authResolverResponse := client.AuthResolverResponse(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowDomainAccess` | `bool` | Should the signup flow allow access for the domain. |
| `email` | `string` | Email for the authenticated account. |
| `id` | `string` | User account ID. |
| `lastUsedOrganizationId` | `string` | ID of the organization last accessed by the user. |
| `service` | `string` | The authentication service used for the current session (e.g., google, email, saml). |

#### Example: Load

```go
authResolverResponse, err := client.AuthResolverResponse(nil).Load(map[string]any{"id": "auth_resolver_response_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(authResolverResponse) // the loaded record
```

#### Example: Create

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


### AuthenticationSessionResponse

Create an instance: `authenticationSessionResponse := client.AuthenticationSessionResponse(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

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
| `isCurrentSession` | `bool` | Whether this session is the one used to make the current API request. |
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

```go
authenticationSessionResponses, err := client.AuthenticationSessionResponse(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(authenticationSessionResponses) // the array of records
```


### Comment

Create an instance: `comment := client.Comment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agentSession` | `map[string]any` | Agent session associated with this comment. |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `body` | `string` | The comment content in markdown format. |
| `bodyData` | `string` | [Internal] The comment content as a ProseMirror document. |
| `botActor` | `map[string]any` | The bot that created the comment. |
| `createdAt` | `any` | The time at which the entity was created. |
| `documentContent` | `map[string]any` | The document content that the comment is associated with. |
| `documentContentId` | `string` | The ID of the document content that the comment is associated with. |
| `editedAt` | `any` | The time the comment was last edited by its author. |
| `externalThread` | `map[string]any` | The external thread that the comment is synced with. |
| `externalUser` | `map[string]any` | The external user who wrote the comment, when the comment was created through an integration such as Slack or Intercom. |
| `hideInLinear` | `bool` | [Internal] Whether the comment should be hidden from Linear clients. |
| `id` | `string` | The unique identifier of the entity. |
| `initiative` | `map[string]any` | The initiative that the comment is associated with. |
| `initiativeId` | `string` | The ID of the initiative that the comment is associated with. |
| `initiativeUpdate` | `map[string]any` | The initiative update that the comment is associated with. |
| `initiativeUpdateId` | `string` | The ID of the initiative update that the comment is associated with. |
| `isArtificialAgentSessionRoot` | `bool` | [Internal] Whether the comment is an artificial placeholder for an agent session thread created without a comment mention. |
| `issue` | `map[string]any` | The issue that the comment is associated with. |
| `issueId` | `string` | The ID of the issue that the comment is associated with. |
| `onBehalfOf` | `map[string]any` | [Internal] The user on whose behalf the comment was created, e.g. |
| `parent` | `map[string]any` | The parent comment under which the current comment is nested. |
| `parentId` | `string` | The ID of the parent comment under which the current comment is nested. |
| `post` | `map[string]any` | The post that the comment is associated with. |
| `project` | `map[string]any` | The project that the comment is associated with. |
| `projectId` | `string` | The ID of the project that the comment is associated with. |
| `projectUpdate` | `map[string]any` | The project update that the comment is associated with. |
| `projectUpdateId` | `string` | The ID of the project update that the comment is associated with. |
| `quotedText` | `string` | The text that this comment references, used for inline comments on documents or issue descriptions. |
| `reactionData` | `any` | Emoji reaction summary for this comment, grouped by emoji type. |
| `resolvedAt` | `any` | The time when the comment thread was resolved. |
| `resolvingComment` | `map[string]any` | The child comment that resolved this thread. |
| `resolvingCommentId` | `string` | The ID of the child comment that resolved this thread. |
| `resolvingUser` | `map[string]any` | The user that resolved the comment thread. |
| `threadSummary` | `any` | [Internal] An AI-generated summary of the comment thread. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Comment's URL. |
| `user` | `map[string]any` | The user who wrote the comment. |

#### Example: Load

```go
comment, err := client.Comment(nil).Load(map[string]any{"id": "comment_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(comment) // the loaded record
```

#### Example: List

```go
comments, err := client.Comment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(comments) // the array of records
```

#### Example: Create

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


### CreateOrJoinOrganizationResponse

Create an instance: `createOrJoinOrganizationResponse := client.CreateOrJoinOrganizationResponse(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `organization` | `map[string]any` | The workspace that was created or joined. |
| `user` | `map[string]any` | The user who created or joined the workspace. |

#### Example: Create

```go
result, err := client.CreateOrJoinOrganizationResponse(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### CustomView

Create an instance: `customView := client.CustomView(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `color` | `string` | The hex color code of the custom view icon. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `map[string]any` | The user who originally created the custom view. |
| `description` | `string` | The description of the custom view. |
| `facet` | `map[string]any` | [INTERNAL] The facet that links this custom view to its parent entity (project, initiative, team page, etc.). |
| `feedItemFilterData` | `any` | The filter applied to feed items in the custom view. |
| `filterData` | `any` | The structured filter applied to issues in the custom view. |
| `icon` | `string` | The icon of the custom view. |
| `id` | `string` | The unique identifier of the entity. |
| `initiativeFilterData` | `any` | The filter applied to initiatives in the custom view. |
| `modelName` | `string` | The entity type this view displays. |
| `name` | `string` | The name of the custom view, displayed in the sidebar and navigation. |
| `organization` | `map[string]any` | The workspace of the custom view. |
| `organizationViewPreferences` | `map[string]any` | The workspace-level default view preferences for this custom view, if any have been set. |
| `owner` | `map[string]any` | The user who owns the custom view. |
| `projectFilterData` | `any` | The filter applied to projects in the custom view. |
| `shared` | `bool` | Whether the custom view is shared with everyone in the organization. |
| `slugId` | `string` | The custom view's unique URL slug, used to construct human-readable URLs. |
| `team` | `map[string]any` | The team that the custom view is scoped to. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `updatedBy` | `map[string]any` | The user who last updated the custom view. |
| `userViewPreferences` | `map[string]any` | The current user's personal view preferences for this custom view, if they have set any. |

#### Example: Load

```go
customView, err := client.CustomView(nil).Load(map[string]any{"id": "custom_view_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(customView) // the loaded record
```

#### Example: List

```go
customViews, err := client.CustomView(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(customViews) // the array of records
```

#### Example: Create

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


### Customer

Create an instance: `customer := client.Customer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approximateNeedCount` | `float64` | The approximate number of distinct requests associated with this customer, deduplicated per issue or project. |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `domains` | `string` | The email domains associated with this customer (e.g., 'acme.com'). |
| `externalIds` | `string` | Identifiers for this customer in external systems (e.g., CRM IDs from Intercom, Salesforce, or HubSpot). |
| `id` | `string` | The unique identifier of the entity. |
| `integration` | `map[string]any` | The integration that manages this customer's data (e.g., Intercom, Salesforce). |
| `logoUrl` | `string` | URL of the customer's logo image. |
| `mainSourceId` | `string` | The primary external source ID when a customer has data from multiple external systems. |
| `name` | `string` | The display name of the customer organization. |
| `owner` | `map[string]any` | The workspace member assigned as the owner of this customer. |
| `revenue` | `int` | The annual revenue generated by this customer. |
| `size` | `float64` | The number of employees or seats at the customer organization. |
| `slackChannelId` | `string` | The ID of the Slack channel linked to this customer for communication. |
| `slugId` | `string` | A unique, human-readable URL slug for the customer. |
| `status` | `map[string]any` | The current lifecycle status of the customer. |
| `tier` | `map[string]any` | The tier or segment assigned to this customer for prioritization (e.g., Enterprise, Pro, Free). |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | The URL of the customer's page in the Linear application. |

#### Example: Load

```go
customer, err := client.Customer(nil).Load(map[string]any{"id": "customer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(customer) // the loaded record
```

#### Example: List

```go
customers, err := client.Customer(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(customers) // the array of records
```

#### Example: Create

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


### CustomerNeed

Create an instance: `customerNeed := client.CustomerNeed(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `attachment` | `map[string]any` | The issue attachment linked to this need. |
| `body` | `string` | The body content of the need in Markdown format. |
| `bodyData` | `string` | [Internal] The body content of the need as a Prosemirror document JSON string. |
| `comment` | `map[string]any` | An optional comment providing additional context for this need. |
| `content` | `string` | The effective Markdown content shown for this customer need. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `map[string]any` | The user who manually created this customer need. |
| `customer` | `map[string]any` | The customer organization this need belongs to. |
| `id` | `string` | The unique identifier of the entity. |
| `issue` | `map[string]any` | The issue this need is linked to. |
| `originalIssue` | `map[string]any` | The issue this customer need was originally created on, before being moved to a different issue or project. |
| `priority` | `float64` | Whether the customer need is important or not. |
| `project` | `map[string]any` | The project this need is linked to. |
| `projectAttachment` | `map[string]any` | The project attachment linked to this need. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | The URL of the source attachment linked to this need, if any. |

#### Example: Load

```go
customerNeed, err := client.CustomerNeed(nil).Load(map[string]any{"id": "customer_need_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(customerNeed) // the loaded record
```

#### Example: List

```go
customerNeeds, err := client.CustomerNeed(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(customerNeeds) // the array of records
```

#### Example: Create

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


### CustomerStatus

Create an instance: `customerStatus := client.CustomerStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

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
| `position` | `float64` | The sort position of the status in the workspace's customer lifecycle flow. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```go
customerStatus, err := client.CustomerStatus(nil).Load(map[string]any{"id": "customer_status_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(customerStatus) // the loaded record
```

#### Example: List

```go
customerStatuss, err := client.CustomerStatus(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(customerStatuss) // the array of records
```

#### Example: Create

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


### CustomerTier

Create an instance: `customerTier := client.CustomerTier(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

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
| `position` | `float64` | The sort position of the tier in the workspace's customer tier ordering. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```go
customerTier, err := client.CustomerTier(nil).Load(map[string]any{"id": "customer_tier_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(customerTier) // the loaded record
```

#### Example: List

```go
customerTiers, err := client.CustomerTier(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(customerTiers) // the array of records
```

#### Example: Create

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


### Cycle

Create an instance: `cycle := client.Cycle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `autoArchivedAt` | `any` | The time at which the cycle was automatically archived by the auto-pruning process. |
| `completedAt` | `any` | The completion time of the cycle. |
| `completedIssueCountHistory` | `float64` | The number of completed issues in the cycle after each day. |
| `completedScopeHistory` | `float64` | The number of completed estimation points after each day. |
| `createdAt` | `any` | The time at which the entity was created. |
| `currentProgress` | `any` | [Internal] The current progress snapshot of the cycle, broken down by issue status categories. |
| `description` | `string` | The description of the cycle. |
| `endsAt` | `any` | The end date and time of the cycle. |
| `id` | `string` | The unique identifier of the entity. |
| `inProgressScopeHistory` | `float64` | The number of in-progress estimation points after each day. |
| `inheritedFrom` | `map[string]any` | The parent cycle this cycle was inherited from. |
| `isActive` | `bool` | Whether the cycle is currently active. |
| `isFuture` | `bool` | Whether the cycle has not yet started. |
| `isNext` | `bool` | Whether this cycle is the next upcoming (not yet started) cycle for the team. |
| `isPast` | `bool` | Whether the cycle's end date has passed. |
| `isPrevious` | `bool` | Whether this cycle is the most recently completed cycle for the team. |
| `issueCountHistory` | `float64` | The total number of issues in the cycle after each day. |
| `name` | `string` | The custom name of the cycle. |
| `number` | `float64` | The auto-incrementing number of the cycle, unique within its team. |
| `progress` | `float64` | The overall progress of the cycle as a number between 0 and 1. |
| `progressHistory` | `any` | [Internal] The detailed progress history of the cycle, including per-status breakdowns over time. |
| `scopeHistory` | `float64` | The total number of estimation points (scope) in the cycle after each day. |
| `startsAt` | `any` | The start date and time of the cycle. |
| `team` | `map[string]any` | The team that the cycle belongs to. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```go
cycle, err := client.Cycle(nil).Load(map[string]any{"id": "cycle_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(cycle) // the loaded record
```

#### Example: List

```go
cycles, err := client.Cycle(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(cycles) // the array of records
```

#### Example: Create

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


### Diff

Create an instance: `diff := client.Diff(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additions` | `float64` | [Internal] The total number of added lines across the diff. |
| `agentSession` | `map[string]any` | The agent session the diff belongs to. |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `contentHash` | `string` | [Internal] The opaque content hash identifying the diff's content in code.storage. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `map[string]any` | The user responsible for the diff. |
| `deletions` | `float64` | [Internal] The total number of deleted lines across the diff. |
| `fileCount` | `float64` | [Internal] The number of changed files in the diff. |
| `id` | `string` | The unique identifier of the entity. |
| `organization` | `map[string]any` | The workspace the diff belongs to. |
| `pullRequest` | `map[string]any` | The pull request the diff was promoted to when opened for review. |
| `slugId` | `string` | [Internal] The diff's unique URL slug. |
| `truncated` | `bool` | [Internal] Whether oversized files were omitted when the diff was computed. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```go
diff, err := client.Diff(nil).Load(map[string]any{"id": "diff_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(diff) // the loaded record
```


### Document

Create an instance: `document := client.Document(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `color` | `string` | The hex color of the document icon. |
| `content` | `string` | The document's content in markdown format. |
| `contentState` | `string` | [Internal] The document's content as a base64-encoded Yjs state update. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `map[string]any` | The user who created the document. |
| `cycle` | `map[string]any` | [Internal] The cycle that the document is associated with. |
| `documentContentId` | `string` | The ID of the document content associated with the document. |
| `hiddenAt` | `any` | The time at which the document was hidden from the default view. |
| `icon` | `string` | The icon of the document, either a decorative icon type or an emoji string. |
| `id` | `string` | The unique identifier of the entity. |
| `initiative` | `map[string]any` | The initiative that the document is associated with. |
| `issue` | `map[string]any` | The issue that the document is associated with. |
| `lastAppliedTemplate` | `map[string]any` | The last template that was applied to this document. |
| `owner` | `map[string]any` | The owner of the document. |
| `project` | `map[string]any` | The project that the document is associated with. |
| `release` | `map[string]any` | The release that the document is associated with. |
| `slugId` | `string` | The document's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `float64` | The sort order of the document in its parent entity's resources list. |
| `summary` | `string` | [Internal] A one-sentence AI-generated summary of the document content. |
| `team` | `map[string]any` | [Internal] The team that the document is associated with. |
| `title` | `string` | The title of the document. |
| `trashed` | `bool` | A flag that indicates whether the document is in the trash bin. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `updatedBy` | `map[string]any` | The user who last updated the document. |
| `url` | `string` | The canonical url for the document. |

#### Example: Load

```go
document, err := client.Document(nil).Load(map[string]any{"id": "document_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(document) // the loaded record
```

#### Example: List

```go
documents, err := client.Document(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(documents) // the array of records
```

#### Example: Create

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


### DocumentSearchResult

Create an instance: `documentSearchResult := client.DocumentSearchResult(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `color` | `string` | The hex color of the document icon. |
| `content` | `string` | The document's content in markdown format. |
| `contentState` | `string` | [Internal] The document's content as a base64-encoded Yjs state update. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `map[string]any` | The user who created the document. |
| `cycle` | `map[string]any` | [Internal] The cycle that the document is associated with. |
| `documentContentId` | `string` | The ID of the document content associated with the document. |
| `hiddenAt` | `any` | The time at which the document was hidden from the default view. |
| `icon` | `string` | The icon of the document, either a decorative icon type or an emoji string. |
| `id` | `string` | The unique identifier of the entity. |
| `initiative` | `map[string]any` | The initiative that the document is associated with. |
| `issue` | `map[string]any` | The issue that the document is associated with. |
| `lastAppliedTemplate` | `map[string]any` | The last template that was applied to this document. |
| `metadata` | `any` | Metadata related to search result. |
| `owner` | `map[string]any` | The owner of the document. |
| `project` | `map[string]any` | The project that the document is associated with. |
| `release` | `map[string]any` | The release that the document is associated with. |
| `slugId` | `string` | The document's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `float64` | The sort order of the document in its parent entity's resources list. |
| `summary` | `string` | [Internal] A one-sentence AI-generated summary of the document content. |
| `team` | `map[string]any` | [Internal] The team that the document is associated with. |
| `title` | `string` | The title of the document. |
| `trashed` | `bool` | A flag that indicates whether the document is in the trash bin. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `updatedBy` | `map[string]any` | The user who last updated the document. |
| `url` | `string` | The canonical url for the document. |

#### Example: List

```go
documentSearchResults, err := client.DocumentSearchResult(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(documentSearchResults) // the array of records
```


### EmailIntakeAddress

Create an instance: `emailIntakeAddress := client.EmailIntakeAddress(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `string` | The unique local part (before the @) of the intake email address, used to route incoming emails to the correct intake handler. |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `map[string]any` | The user who created the email intake address. |
| `customerRequestsEnabled` | `bool` | Whether issues created from emails sent to this address are automatically converted into customer requests, linking the sender as a customer contact. |
| `enabled` | `bool` | Whether the email address is enabled. |
| `forwardingEmailAddress` | `string` | The email address used to forward emails to the intake address. |
| `id` | `string` | The unique identifier of the entity. |
| `issueCanceledAutoReply` | `string` | The auto-reply message for issue canceled. |
| `issueCanceledAutoReplyEnabled` | `bool` | Whether the auto-reply for issue canceled is enabled. |
| `issueCompletedAutoReply` | `string` | The auto-reply message for issue completed. |
| `issueCompletedAutoReplyEnabled` | `bool` | Whether the auto-reply for issue completed is enabled. |
| `issueCreatedAutoReply` | `string` | The auto-reply message for issue created. |
| `issueCreatedAutoReplyEnabled` | `bool` | Whether the auto-reply for issue created is enabled. |
| `lastUsedAt` | `any` | The last time an inbound email was successfully ingested for this address. |
| `organization` | `map[string]any` | The workspace that the email address is associated with. |
| `reopenOnReply` | `bool` | Whether to reopen completed or canceled issues when a substantive email reply is received. |
| `repliesEnabled` | `bool` | Whether email replies are enabled. |
| `senderName` | `string` | The name to be used for outgoing emails. |
| `sesDomainIdentity` | `map[string]any` | The SES domain identity that the email address is associated with. |
| `team` | `map[string]any` | The team that the email address is associated with. |
| `template` | `map[string]any` | The template that the email address is associated with. |
| `type` | `string` | The type of the email address. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `useUserNamesInReplies` | `bool` | Whether the commenter's name is included in the email replies. |

#### Example: Load

```go
emailIntakeAddress, err := client.EmailIntakeAddress(nil).Load(map[string]any{"id": "email_intake_address_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(emailIntakeAddress) // the loaded record
```

#### Example: Create

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


### EmailUserAccountAuthChallengeResponse

Create an instance: `emailUserAccountAuthChallengeResponse := client.EmailUserAccountAuthChallengeResponse(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authType` | `string` | Supported challenge for this user account. |
| `success` | `bool` | Whether the operation was successful. |

#### Example: Create

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


### Emoji

Create an instance: `emoji := client.Emoji(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `map[string]any` | The user who created the emoji. |
| `id` | `string` | The unique identifier of the entity. |
| `name` | `string` | The unique name of the custom emoji within the workspace. |
| `organization` | `map[string]any` | The workspace that the emoji belongs to. |
| `source` | `string` | The source of the emoji, indicating how it was created (e.g., uploaded by a user or imported). |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | The URL of the uploaded image for this custom emoji. |

#### Example: Load

```go
emoji, err := client.Emoji(nil).Load(map[string]any{"id": "emoji_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(emoji) // the loaded record
```

#### Example: List

```go
emojis, err := client.Emoji(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(emojis) // the array of records
```

#### Example: Create

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


### EntityExternalLink

Create an instance: `entityExternalLink := client.EntityExternalLink(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `map[string]any` | The user who created the link. |
| `id` | `string` | The unique identifier of the entity. |
| `initiative` | `map[string]any` | The initiative that the link is associated with. |
| `label` | `string` | The link's label. |
| `project` | `map[string]any` | The project that the link is associated with. |
| `sortOrder` | `float64` | The sort order of this link within the parent entity's resources list. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | The link's URL. |

#### Example: Load

```go
entityExternalLink, err := client.EntityExternalLink(nil).Load(map[string]any{"id": "entity_external_link_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(entityExternalLink) // the loaded record
```

#### Example: Create

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


### ExternalUser

Create an instance: `externalUser := client.ExternalUser(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

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
| `organization` | `map[string]any` | The workspace that the external user belongs to. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```go
externalUser, err := client.ExternalUser(nil).Load(map[string]any{"id": "external_user_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(externalUser) // the loaded record
```

#### Example: List

```go
externalUsers, err := client.ExternalUser(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(externalUsers) // the array of records
```


### Favorite

Create an instance: `favorite := client.Favorite(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aiConversation` | `map[string]any` | [INTERNAL] The favorited Agent conversation. |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `color` | `string` | [Internal] Returns the color of the favorite's icon. |
| `createdAt` | `any` | The time at which the entity was created. |
| `customView` | `map[string]any` | The favorited custom view. |
| `customer` | `map[string]any` | The favorited customer. |
| `cycle` | `map[string]any` | The favorited cycle. |
| `dashboard` | `map[string]any` | The favorited dashboard. |
| `detail` | `string` | [Internal] Detail text for favorite's `title` (e.g. |
| `document` | `map[string]any` | The favorited document. |
| `facet` | `map[string]any` | [INTERNAL] The favorited facet. |
| `folderName` | `string` | The name of the folder. |
| `icon` | `string` | [Internal] Name of the favorite's icon. |
| `id` | `string` | The unique identifier of the entity. |
| `initiative` | `map[string]any` | The favorited initiative. |
| `initiativeLabel` | `map[string]any` | [INTERNAL] The favorited initiative label. |
| `initiativeTab` | `string` | The targeted tab of the initiative. |
| `issue` | `map[string]any` | The favorited issue. |
| `label` | `map[string]any` | The favorited label. |
| `liveFolderDefinition` | `any` | The versioned lazy root and filter represented by this live favorite folder. |
| `liveFolderPreset` | `string` | The predefined live folder represented by this favorite. |
| `owner` | `map[string]any` | The user who owns this favorite. |
| `parent` | `map[string]any` | The parent folder of the favorite. |
| `pipelineTab` | `string` | The targeted tab of the release pipeline. |
| `predefinedViewTeam` | `map[string]any` | The team of the favorited predefined view. |
| `predefinedViewType` | `string` | The type of favorited predefined view (e.g., 'allIssues', 'activeCycle', 'backlog', 'triage'). |
| `project` | `map[string]any` | The favorited project. |
| `projectLabel` | `map[string]any` | The favorited project label. |
| `projectTab` | `string` | The targeted tab of the project. |
| `projectTeam` | `map[string]any` | [DEPRECATED] The favorited team of the project. |
| `pullRequest` | `map[string]any` | The favorited pull request. |
| `release` | `map[string]any` | The favorited release. |
| `releaseNote` | `map[string]any` | The favorited release note. |
| `releasePipeline` | `map[string]any` | The favorited release pipeline. |
| `sortOrder` | `float64` | The position of this item in the user's favorites list. |
| `team` | `map[string]any` | The favorited team. |
| `title` | `string` | [Internal] Favorite's title text (name of the favorite'd object or folder). |
| `type` | `string` | The type of entity this favorite references, such as 'issue', 'project', 'cycle', 'customView', 'document', 'folder', etc. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | URL of the favorited entity. |
| `user` | `map[string]any` | The favorited user. |
| `workflowDefinition` | `map[string]any` | The favorited loop. |

#### Example: Load

```go
favorite, err := client.Favorite(nil).Load(map[string]any{"id": "favorite_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(favorite) // the loaded record
```

#### Example: List

```go
favorites, err := client.Favorite(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(favorites) // the array of records
```

#### Example: Create

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


### GitAutomationState

Create an instance: `gitAutomationState := client.GitAutomationState(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `event` | `string` | The Git event that triggers this automation rule (e.g., branch created, PR opened for review, or PR merged). |
| `id` | `string` | The unique identifier of the entity. |
| `state` | `map[string]any` | The workflow state that linked issues will be transitioned to when the Git event fires. |
| `targetBranch` | `map[string]any` | The target branch that this automation rule applies to. |
| `team` | `map[string]any` | The team that this automation rule belongs to. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Create

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


### GitAutomationTargetBranch

Create an instance: `gitAutomationTargetBranch := client.GitAutomationTargetBranch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `branchPattern` | `string` | The branch name or pattern to match against pull request target branches. |
| `createdAt` | `any` | The time at which the entity was created. |
| `id` | `string` | The unique identifier of the entity. |
| `isRegex` | `bool` | Whether the branch pattern should be interpreted as a regular expression. |
| `team` | `map[string]any` | The team that this target branch definition belongs to. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Create

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


### GitHubIntegrationConnectDetail

Create an instance: `gitHubIntegrationConnectDetail := client.GitHubIntegrationConnectDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `lostRepositoryNames` | `string` | Full names ('owner/repo') of repositories whose existing GitHub Issues sync mappings would become inaccessible if the new GitHub App installation replaces the existing one. |

#### Example: Create

```go
result, err := client.GitHubIntegrationConnectDetail(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Initiative

Create an instance: `initiative := client.Initiative(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `canceledAt` | `any` | [Internal] The time at which the initiative was moved into Canceled status. |
| `color` | `string` | The initiative's color. |
| `completedAt` | `any` | The time at which the initiative was moved into Completed status. |
| `content` | `string` | The initiative's content in markdown format. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `map[string]any` | The user who created the initiative. |
| `description` | `string` | The description of the initiative. |
| `documentContent` | `map[string]any` | The content of the initiative description. |
| `frequencyResolution` | `string` | The resolution of the reminder frequency. |
| `health` | `string` | The overall health of the initiative, derived from the most recent initiative update. |
| `healthUpdatedAt` | `any` | The time at which the initiative health was last updated, typically when a new initiative update is posted. |
| `icon` | `string` | The icon of the initiative. |
| `id` | `string` | The unique identifier of the entity. |
| `identifier` | `string` | [Internal] The human-readable identifier of the initiative. |
| `integrationsSettings` | `map[string]any` | Settings for all integrations associated with that initiative. |
| `labelIds` | `string` | The IDs of the initiative labels associated with this initiative. |
| `lastUpdate` | `map[string]any` | The most recent status update posted for this initiative. |
| `leadTeam` | `map[string]any` | The team that leads the initiative. |
| `name` | `string` | The name of the initiative. |
| `organization` | `map[string]any` | The workspace of the initiative. |
| `owner` | `map[string]any` | The user who owns the initiative. |
| `parentInitiative` | `map[string]any` | Parent initiative associated with the initiative. |
| `previousIdentifiers` | `string` | [Internal] Identifiers (default and custom) that this initiative has previously held. |
| `priority` | `int` | The priority of the initiative. |
| `prioritySortOrder` | `float64` | The sort order of the initiative within the workspace when ordered by priority. |
| `slugId` | `string` | The initiative's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `float64` | The sort order of the initiative within the workspace. |
| `startedAt` | `any` | The time at which the initiative was moved into Active status. |
| `status` | `string` | The lifecycle status of the initiative. |
| `targetDate` | `any` | The estimated completion date of the initiative. |
| `targetDateResolution` | `string` | The resolution of the initiative's estimated completion date, indicating whether it refers to a specific day, week, month, quarter, or year. |
| `trashed` | `bool` | A flag that indicates whether the initiative is in the trash bin. |
| `updateReminderFrequency` | `float64` | The frequency at which to prompt for updates. |
| `updateReminderFrequencyInWeeks` | `float64` | The n-weekly frequency at which to prompt for updates. |
| `updateRemindersDay` | `string` | The day at which to prompt for updates. |
| `updateRemindersHour` | `float64` | The hour at which to prompt for updates. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Initiative URL. |
| `visibility` | `string` | The visibility of the initiative, derived from its lead team. |

#### Example: Load

```go
initiative, err := client.Initiative(nil).Load(map[string]any{"id": "initiative_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(initiative) // the loaded record
```

#### Example: List

```go
initiatives, err := client.Initiative(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(initiatives) // the array of records
```

#### Example: Create

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


### InitiativeLabel

Create an instance: `initiativeLabel := client.InitiativeLabel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `color` | `string` | The label's color as a HEX string (e.g., '#EB5757'). |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `map[string]any` | The user who created the label. |
| `description` | `string` | The label's description. |
| `id` | `string` | The unique identifier of the entity. |
| `isGroup` | `bool` | Whether the label is a group. |
| `lastAppliedAt` | `any` | The date when the label was last applied to an issue, project, or initiative. |
| `name` | `string` | The label's name. |
| `organization` | `map[string]any` | The workspace that the initiative label belongs to. |
| `parent` | `map[string]any` | The parent label group. |
| `retiredAt` | `any` | [Internal] When the label was retired. |
| `retiredBy` | `map[string]any` | The user who retired the label. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```go
initiativeLabel, err := client.InitiativeLabel(nil).Load(map[string]any{"id": "initiative_label_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(initiativeLabel) // the loaded record
```

#### Example: List

```go
initiativeLabels, err := client.InitiativeLabel(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(initiativeLabels) // the array of records
```

#### Example: Create

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


### InitiativeLeadTeamChangeImpact

Create an instance: `initiativeLeadTeamChangeImpact := client.InitiativeLeadTeamChangeImpact(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `affectedDescendantCount` | `int` | The number of editable matching sub-initiatives whose lead team would change if the update is applied to descendants. |
| `id` | `string` |  |
| `visibilityMayChange` | `bool` | Whether the changed initiatives may gain or lose access restrictions because the current or next lead team is not public. |

#### Example: Load

```go
initiativeLeadTeamChangeImpact, err := client.InitiativeLeadTeamChangeImpact(nil).Load(map[string]any{"id": "initiative_lead_team_change_impact_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(initiativeLeadTeamChangeImpact) // the loaded record
```


### InitiativeRelation

Create an instance: `initiativeRelation := client.InitiativeRelation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `id` | `string` | The unique identifier of the entity. |
| `initiative` | `map[string]any` | The parent initiative in this hierarchical relation. |
| `relatedInitiative` | `map[string]any` | The child initiative in this hierarchical relation. |
| `sortOrder` | `float64` | The sort order of the child initiative within its parent initiative. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `user` | `map[string]any` | The user who last created or modified the relation. |

#### Example: Load

```go
initiativeRelation, err := client.InitiativeRelation(nil).Load(map[string]any{"id": "initiative_relation_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(initiativeRelation) // the loaded record
```

#### Example: List

```go
initiativeRelations, err := client.InitiativeRelation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(initiativeRelations) // the array of records
```

#### Example: Create

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


### InitiativeToProject

Create an instance: `initiativeToProject := client.InitiativeToProject(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `id` | `string` | The unique identifier of the entity. |
| `initiative` | `map[string]any` | The initiative that the project is associated with. |
| `project` | `map[string]any` | The project that the initiative is associated with. |
| `sortOrder` | `string` | The sort order of the project within its parent initiative. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```go
initiativeToProject, err := client.InitiativeToProject(nil).Load(map[string]any{"id": "initiative_to_project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(initiativeToProject) // the loaded record
```

#### Example: List

```go
initiativeToProjects, err := client.InitiativeToProject(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(initiativeToProjects) // the array of records
```

#### Example: Create

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


### InitiativeUpdate

Create an instance: `initiativeUpdate := client.InitiativeUpdate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `body` | `string` | The update content in markdown format. |
| `bodyData` | `string` | [Internal] The content of the update as a Prosemirror document. |
| `commentCount` | `int` | Number of comments associated with the initiative update. |
| `createdAt` | `any` | The time at which the entity was created. |
| `diff` | `any` | The diff between the current update and the previous one. |
| `diffMarkdown` | `string` | The diff between the current update and the previous one, formatted as markdown. |
| `editedAt` | `any` | The time the update was edited. |
| `health` | `string` | The health of the initiative at the time this update was posted. |
| `id` | `string` | The unique identifier of the entity. |
| `infoSnapshot` | `any` | [Internal] A snapshot of initiative properties at the time the update was posted, including project statuses, sub-initiative health, and target dates. |
| `initiative` | `map[string]any` | The initiative that this status update was posted to. |
| `isDiffHidden` | `bool` | Whether the diff between this update and the previous one should be hidden in the UI. |
| `isStale` | `bool` | Whether the initiative update is stale. |
| `reactionData` | `any` | Emoji reaction summary, grouped by emoji type. |
| `slugId` | `string` | The update's unique URL slug. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | The URL to the initiative update. |
| `user` | `map[string]any` | The user who wrote the update. |

#### Example: Load

```go
initiativeUpdate, err := client.InitiativeUpdate(nil).Load(map[string]any{"id": "initiative_update_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(initiativeUpdate) // the loaded record
```

#### Example: List

```go
initiativeUpdates, err := client.InitiativeUpdate(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(initiativeUpdates) // the array of records
```

#### Example: Create

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


### Integration

Create an instance: `integration := client.Integration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `map[string]any` | The user that added the integration. |
| `id` | `string` | The unique identifier of the entity. |
| `organization` | `map[string]any` | The workspace that the integration is associated with. |
| `service` | `string` | The integration's type, identifying which external service this integration connects to (e.g., 'slack', 'github', 'jira', 'figma'). |
| `team` | `map[string]any` | The team that the integration is associated with. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```go
integration, err := client.Integration(nil).Load(map[string]any{"id": "integration_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(integration) // the loaded record
```

#### Example: List

```go
integrations, err := client.Integration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(integrations) // the array of records
```

#### Example: Create

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


### IntegrationTemplate

Create an instance: `integrationTemplate := client.IntegrationTemplate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `foreignEntityId` | `string` | The identifier of the foreign entity in the external service that this template is scoped to. |
| `id` | `string` | The unique identifier of the entity. |
| `integration` | `map[string]any` | The integration that the template is associated with. |
| `template` | `map[string]any` | The template that the integration is associated with. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```go
integrationTemplate, err := client.IntegrationTemplate(nil).Load(map[string]any{"id": "integration_template_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(integrationTemplate) // the loaded record
```

#### Example: List

```go
integrationTemplates, err := client.IntegrationTemplate(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(integrationTemplates) // the array of records
```

#### Example: Create

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


### IntegrationsSetting

Create an instance: `integrationsSetting := client.IntegrationsSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `contextViewType` | `string` | The type of view to which the integration settings context is associated with. |
| `createdAt` | `any` | The time at which the entity was created. |
| `id` | `string` | The unique identifier of the entity. |
| `initiative` | `map[string]any` | Initiative which those settings apply to. |
| `microsoftTeamsProjectUpdateCreated` | `bool` | Whether to send a Microsoft Teams message when a project update is created. |
| `project` | `map[string]any` | Project which those settings apply to. |
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
| `team` | `map[string]any` | Team which those settings apply to. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```go
integrationsSetting, err := client.IntegrationsSetting(nil).Load(map[string]any{"id": "integrations_setting_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(integrationsSetting) // the loaded record
```

#### Example: Create

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


### Issue

Create an instance: `issue := client.Issue(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activitySummary` | `any` | [Internal] The activity summary information for this issue. |
| `addedToCycleAt` | `any` | The time at which the issue was added to a cycle. |
| `addedToProjectAt` | `any` | The time at which the issue was added to a project. |
| `addedToTeamAt` | `any` | The time at which the issue was added to a team. |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `asksExternalUserRequester` | `map[string]any` | The external user who requested creation of the Asks issue on behalf of the creator. |
| `asksRequester` | `map[string]any` | The internal user who requested creation of the Asks issue on behalf of the creator. |
| `assignee` | `map[string]any` | The user to whom the issue is assigned. |
| `autoArchivedAt` | `any` | The time at which the issue was automatically archived by the auto pruning process. |
| `autoClosedAt` | `any` | The time at which the issue was automatically closed by the auto pruning process. |
| `botActor` | `map[string]any` | The bot that created the issue, if applicable. |
| `branchName` | `string` | Suggested branch name for the issue. |
| `canceledAt` | `any` | The time at which the issue was moved into canceled state. |
| `completedAt` | `any` | The time at which the issue was moved into completed state. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `map[string]any` | The user who created the issue. |
| `customerTicketCount` | `int` | Returns the number of Attachment resources which are created by customer support ticketing systems (e.g. |
| `cycle` | `map[string]any` | The cycle that the issue is associated with. |
| `delegate` | `map[string]any` | The agent user that is delegated to work on this issue. |
| `description` | `string` | The issue's description in markdown format. |
| `descriptionState` | `string` | [Internal] The issue's description content as YJS state. |
| `documentContent` | `map[string]any` | [ALPHA] The document content representing this issue description. |
| `dueDate` | `any` | The date at which the issue is due. |
| `estimate` | `float64` | The estimate of the complexity of the issue. |
| `externalUserCreator` | `map[string]any` | The external user who created the issue. |
| `favorite` | `map[string]any` | The users favorite associated with this issue. |
| `id` | `string` | The unique identifier of the entity. |
| `identifier` | `string` | Issue's human readable identifier (e.g. |
| `inheritsSharedAccess` | `bool` | Whether this issue inherits shared access from its parent issue. |
| `integrationSourceType` | `string` | Integration type that created this issue, if applicable. |
| `labelIds` | `string` | Identifiers of the labels associated with this issue. |
| `lastAppliedTemplate` | `map[string]any` | The last template that was applied to this issue. |
| `number` | `float64` | The issue's unique number, scoped to the issue's team. |
| `parent` | `map[string]any` | The parent of the issue. |
| `previousIdentifiers` | `string` | Previous identifiers of the issue if it has been moved between teams. |
| `priority` | `float64` | The priority of the issue. |
| `priorityLabel` | `string` | Label for the priority. |
| `prioritySortOrder` | `float64` | The order of the item in relation to other items in the workspace, when ordered by priority. |
| `project` | `map[string]any` | The project that the issue is associated with. |
| `projectMilestone` | `map[string]any` | The project milestone that the issue is associated with. |
| `reactionData` | `any` | Emoji reaction summary for the issue, grouped by emoji type. |
| `recurringIssueTemplate` | `map[string]any` | The recurring issue template that created this issue. |
| `slaBreachesAt` | `any` | The time at which the issue's SLA will breach. |
| `slaHighRiskAt` | `any` | The time at which the issue's SLA will enter high risk state. |
| `slaMediumRiskAt` | `any` | The time at which the issue's SLA will enter medium risk state. |
| `slaStartedAt` | `any` | The time at which the issue's SLA began. |
| `slaType` | `string` | The type of SLA set on the issue. |
| `snoozedBy` | `map[string]any` | The user who snoozed the issue. |
| `snoozedUntilAt` | `any` | The time until an issue will be snoozed in Triage view. |
| `sortOrder` | `float64` | The order of the item in relation to other items in the organization. |
| `sourceComment` | `map[string]any` | The comment that this issue was created from, when an issue is created from an existing comment. |
| `startedAt` | `any` | The time at which the issue was moved into started state. |
| `startedTriageAt` | `any` | The time at which the issue entered triage. |
| `state` | `map[string]any` | The workflow state (issue status) that the issue is currently in. |
| `subIssueSortOrder` | `float64` | The order of the item in the sub-issue list. |
| `suggestionsGeneratedAt` | `any` | [Internal] The time at which the most recent suggestions for this issue were generated. |
| `summary` | `map[string]any` | [Internal] AI-generated activity summary for this issue. |
| `team` | `map[string]any` | The team that the issue belongs to. |
| `title` | `string` | The issue's title. |
| `trashed` | `bool` | A flag that indicates whether the issue is in the trash bin. |
| `triagedAt` | `any` | The time at which the issue left triage. |
| `trusted` | `bool` | [Internal] Whether this issue has been explicitly marked as trusted. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Issue URL. |

#### Example: Load

```go
issue, err := client.Issue(nil).Load(map[string]any{"id": "issue_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(issue) // the loaded record
```

#### Example: List

```go
issues, err := client.Issue(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(issues) // the array of records
```

#### Example: Create

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


### IssueImport

Create an instance: `issueImport := client.IssueImport(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

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
| `progress` | `float64` | Current step progress as a percentage (0-100). |
| `service` | `string` | The external service from which data is being imported (e.g., jira, asana, github, shortcut, linear). |
| `serviceMetadata` | `any` | Metadata related to import service. |
| `status` | `string` | The current status of the import job, indicating its position in the import lifecycle (e.g., not started, in progress, complete, error). |
| `teamName` | `string` | The name of the new team to be created for the import, when the import is configured to create a new team rather than importing into an existing one. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Create

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


### IssueLabel

Create an instance: `issueLabel := client.IssueLabel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `color` | `string` | The label's color as a HEX string (e.g., '#EB5757'). |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `map[string]any` | The user who created the label. |
| `description` | `string` | The label's description. |
| `groupType` | `string` | The selection mode of this label group. |
| `id` | `string` | The unique identifier of the entity. |
| `inheritedFrom` | `map[string]any` | The original workspace or parent-team label that this label was inherited from. |
| `isGroup` | `bool` | Whether the label is a group. |
| `lastAppliedAt` | `any` | The date when the label was last applied to an issue, project, or initiative. |
| `name` | `string` | The label's name. |
| `parent` | `map[string]any` | The parent label. |
| `retiredAt` | `any` | [Internal] When the label was retired. |
| `retiredBy` | `map[string]any` | The user who retired the label. |
| `team` | `map[string]any` | The team that the label is scoped to. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```go
issueLabel, err := client.IssueLabel(nil).Load(map[string]any{"id": "issue_label_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(issueLabel) // the loaded record
```

#### Example: List

```go
issueLabels, err := client.IssueLabel(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(issueLabels) // the array of records
```

#### Example: Create

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


### IssuePriorityValue

Create an instance: `issuePriorityValue := client.IssuePriorityValue(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `label` | `string` | Priority's label. |
| `priority` | `int` | Priority's number value. |

#### Example: List

```go
issuePriorityValues, err := client.IssuePriorityValue(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(issuePriorityValues) // the array of records
```


### IssueRelation

Create an instance: `issueRelation := client.IssueRelation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `id` | `string` | The unique identifier of the entity. |
| `issue` | `map[string]any` | The source issue whose relationship is being described. |
| `relatedIssue` | `map[string]any` | The target issue that the source issue is related to. |
| `type` | `string` | The type of relationship between the source issue and the related issue. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```go
issueRelation, err := client.IssueRelation(nil).Load(map[string]any{"id": "issue_relation_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(issueRelation) // the loaded record
```

#### Example: List

```go
issueRelations, err := client.IssueRelation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(issueRelations) // the array of records
```

#### Example: Create

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


### IssueSearchResult

Create an instance: `issueSearchResult := client.IssueSearchResult(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activitySummary` | `any` | [Internal] The activity summary information for this issue. |
| `addedToCycleAt` | `any` | The time at which the issue was added to a cycle. |
| `addedToProjectAt` | `any` | The time at which the issue was added to a project. |
| `addedToTeamAt` | `any` | The time at which the issue was added to a team. |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `asksExternalUserRequester` | `map[string]any` | The external user who requested creation of the Asks issue on behalf of the creator. |
| `asksRequester` | `map[string]any` | The internal user who requested creation of the Asks issue on behalf of the creator. |
| `assignee` | `map[string]any` | The user to whom the issue is assigned. |
| `autoArchivedAt` | `any` | The time at which the issue was automatically archived by the auto pruning process. |
| `autoClosedAt` | `any` | The time at which the issue was automatically closed by the auto pruning process. |
| `botActor` | `map[string]any` | The bot that created the issue, if applicable. |
| `branchName` | `string` | Suggested branch name for the issue. |
| `canceledAt` | `any` | The time at which the issue was moved into canceled state. |
| `completedAt` | `any` | The time at which the issue was moved into completed state. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `map[string]any` | The user who created the issue. |
| `customerTicketCount` | `int` | Returns the number of Attachment resources which are created by customer support ticketing systems (e.g. |
| `cycle` | `map[string]any` | The cycle that the issue is associated with. |
| `delegate` | `map[string]any` | The agent user that is delegated to work on this issue. |
| `description` | `string` | The issue's description in markdown format. |
| `descriptionState` | `string` | [Internal] The issue's description content as YJS state. |
| `documentContent` | `map[string]any` | [ALPHA] The document content representing this issue description. |
| `dueDate` | `any` | The date at which the issue is due. |
| `estimate` | `float64` | The estimate of the complexity of the issue. |
| `externalUserCreator` | `map[string]any` | The external user who created the issue. |
| `favorite` | `map[string]any` | The users favorite associated with this issue. |
| `id` | `string` | The unique identifier of the entity. |
| `identifier` | `string` | Issue's human readable identifier (e.g. |
| `inheritsSharedAccess` | `bool` | Whether this issue inherits shared access from its parent issue. |
| `integrationSourceType` | `string` | Integration type that created this issue, if applicable. |
| `labelIds` | `string` | Identifiers of the labels associated with this issue. |
| `lastAppliedTemplate` | `map[string]any` | The last template that was applied to this issue. |
| `metadata` | `any` | Metadata related to search result. |
| `number` | `float64` | The issue's unique number, scoped to the issue's team. |
| `parent` | `map[string]any` | The parent of the issue. |
| `previousIdentifiers` | `string` | Previous identifiers of the issue if it has been moved between teams. |
| `priority` | `float64` | The priority of the issue. |
| `priorityLabel` | `string` | Label for the priority. |
| `prioritySortOrder` | `float64` | The order of the item in relation to other items in the workspace, when ordered by priority. |
| `project` | `map[string]any` | The project that the issue is associated with. |
| `projectMilestone` | `map[string]any` | The project milestone that the issue is associated with. |
| `reactionData` | `any` | Emoji reaction summary for the issue, grouped by emoji type. |
| `recurringIssueTemplate` | `map[string]any` | The recurring issue template that created this issue. |
| `slaBreachesAt` | `any` | The time at which the issue's SLA will breach. |
| `slaHighRiskAt` | `any` | The time at which the issue's SLA will enter high risk state. |
| `slaMediumRiskAt` | `any` | The time at which the issue's SLA will enter medium risk state. |
| `slaStartedAt` | `any` | The time at which the issue's SLA began. |
| `slaType` | `string` | The type of SLA set on the issue. |
| `snoozedBy` | `map[string]any` | The user who snoozed the issue. |
| `snoozedUntilAt` | `any` | The time until an issue will be snoozed in Triage view. |
| `sortOrder` | `float64` | The order of the item in relation to other items in the organization. |
| `sourceComment` | `map[string]any` | The comment that this issue was created from, when an issue is created from an existing comment. |
| `startedAt` | `any` | The time at which the issue was moved into started state. |
| `startedTriageAt` | `any` | The time at which the issue entered triage. |
| `state` | `map[string]any` | The workflow state (issue status) that the issue is currently in. |
| `subIssueSortOrder` | `float64` | The order of the item in the sub-issue list. |
| `suggestionsGeneratedAt` | `any` | [Internal] The time at which the most recent suggestions for this issue were generated. |
| `summary` | `map[string]any` | [Internal] AI-generated activity summary for this issue. |
| `team` | `map[string]any` | The team that the issue belongs to. |
| `title` | `string` | The issue's title. |
| `trashed` | `bool` | A flag that indicates whether the issue is in the trash bin. |
| `triagedAt` | `any` | The time at which the issue left triage. |
| `trusted` | `bool` | [Internal] Whether this issue has been explicitly marked as trusted. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Issue URL. |

#### Example: List

```go
issueSearchResults, err := client.IssueSearchResult(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(issueSearchResults) // the array of records
```


### IssueToRelease

Create an instance: `issueToRelease := client.IssueToRelease(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `id` | `string` | The unique identifier of the entity. |
| `issue` | `map[string]any` | The issue that is linked to the release. |
| `release` | `map[string]any` | The release that the issue is linked to. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```go
issueToRelease, err := client.IssueToRelease(nil).Load(map[string]any{"id": "issue_to_release_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(issueToRelease) // the loaded record
```

#### Example: List

```go
issueToReleases, err := client.IssueToRelease(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(issueToReleases) // the array of records
```

#### Example: Create

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


### LogoutResponse

Create an instance: `logoutResponse := client.LogoutResponse(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `success` | `bool` | Whether the operation was successful. |

#### Example: Create

```go
result, err := client.LogoutResponse(nil).Create(map[string]any{
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Notification

Create an instance: `notification := client.Notification(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `map[string]any` | The user that caused the notification. |
| `actorAvatarColor` | `string` | [Internal] Notification actor initials if avatar is not available. |
| `actorAvatarUrl` | `string` | [Internal] Notification avatar URL. |
| `actorInactive` | `bool` | [Internal] Whether the notification's user actor is deactivated in the workspace. |
| `actorInitials` | `string` | [Internal] Notification actor initials if avatar is not available. |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `botActor` | `map[string]any` | The bot that caused the notification. |
| `category` | `string` | The category of the notification. |
| `createdAt` | `any` | The time at which the entity was created. |
| `emailedAt` | `any` | The time at which an email reminder for this notification was sent to the user. |
| `externalUserActor` | `map[string]any` | The external user that caused the notification. |
| `groupingKey` | `string` | [Internal] Notifications with the same grouping key will be grouped together in the UI. |
| `groupingPriority` | `float64` | [Internal] Priority of the notification with the same grouping key. |
| `id` | `string` | The unique identifier of the entity. |
| `inboxUrl` | `string` | [Internal] Inbox URL for the notification. |
| `initiativeUpdateHealth` | `string` | [Internal] Initiative update health for new updates. |
| `isLinearActor` | `bool` | [Internal] If notification actor was Linear. |
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
| `user` | `map[string]any` | The recipient user of this notification. |

#### Example: Load

```go
notification, err := client.Notification(nil).Load(map[string]any{"id": "notification_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(notification) // the loaded record
```

#### Example: List

```go
notifications, err := client.Notification(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(notifications) // the array of records
```


### NotificationSubscription

Create an instance: `notificationSubscription := client.NotificationSubscription(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | Whether the subscription is active. |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `contextViewType` | `string` | The type of contextual view (e.g., active issues, backlog) that further scopes a team notification subscription. |
| `createdAt` | `any` | The time at which the entity was created. |
| `customView` | `map[string]any` | The custom view that this notification subscription is scoped to. |
| `customer` | `map[string]any` | The customer that this notification subscription is scoped to. |
| `cycle` | `map[string]any` | The cycle that this notification subscription is scoped to. |
| `id` | `string` | The unique identifier of the entity. |
| `initiative` | `map[string]any` | The initiative that this notification subscription is scoped to. |
| `label` | `map[string]any` | The issue label that this notification subscription is scoped to. |
| `project` | `map[string]any` | The project that this notification subscription is scoped to. |
| `subscriber` | `map[string]any` | The user who will receive notifications from this subscription. |
| `team` | `map[string]any` | The team that this notification subscription is scoped to. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `user` | `map[string]any` | The user that this notification subscription is scoped to, for user-specific view subscriptions. |
| `userContextViewType` | `string` | The type of user-specific view that further scopes a user notification subscription. |

#### Example: Load

```go
notificationSubscription, err := client.NotificationSubscription(nil).Load(map[string]any{"id": "notification_subscription_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(notificationSubscription) // the loaded record
```

#### Example: List

```go
notificationSubscriptions, err := client.NotificationSubscription(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(notificationSubscriptions) // the array of records
```


### OAuthApplication

Create an instance: `oAuthApplication := client.OAuthApplication(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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
| `webhookEnabled` | `bool` | Whether webhook delivery is enabled for this OAuth application. |
| `webhookResourceTypes` | `string` | Resource types the OAuth application's webhooks subscribe to. |
| `webhookUrl` | `string` | Webhook URL used for delivering webhook payloads. |

#### Example: Load

```go
oAuthApplication, err := client.OAuthApplication(nil).Load(map[string]any{"id": "o_auth_application_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(oAuthApplication) // the loaded record
```

#### Example: List

```go
oAuthApplications, err := client.OAuthApplication(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(oAuthApplications) // the array of records
```

#### Example: Create

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


### Organization

Create an instance: `organization := client.Organization(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agentAutomationEnabled` | `bool` | [INTERNAL] Whether the workspace has enabled agent automation. |
| `aiAddonEnabled` | `bool` | [INTERNAL] Whether the workspace has enabled the AI add-on (which at this point only includes triage suggestions). |
| `aiDiscussionSummariesEnabled` | `bool` | Whether the workspace has enabled AI discussion summaries for issues. |
| `aiProviderConfiguration` | `any` | [INTERNAL] Configure per-modality AI host providers and model families. |
| `aiTelemetryEnabled` | `bool` | [INTERNAL] Whether the workspace has opted in to AI telemetry. |
| `aiThreadSummariesEnabled` | `bool` | Whether the workspace has enabled resolved thread AI summaries. |
| `allowedFileUploadContentTypes` | `string` | Allowed file upload content types |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `authSettings` | `any` | Authentication settings for the workspace, including allowed auth providers, bypass rules, and organization visibility during signup. |
| `codeIntelligenceEnabled` | `bool` | [INTERNAL] Whether code intelligence is enabled for the workspace. |
| `codeIntelligenceRepository` | `string` | [INTERNAL] GitHub repository in owner/repo format for code intelligence. |
| `codingAgentEnabled` | `bool` | [INTERNAL] Whether the workspace has enabled Coding Sessions. |
| `codingAgentSettings` | `any` | [Internal] Settings for Coding Sessions features. |
| `createdAt` | `any` | The time at which the entity was created. |
| `createdIssueCount` | `int` | Approximate total number of issues created in the workspace, including archived ones. |
| `customerCount` | `int` | The number of active (non-archived) customers tracked in the workspace. |
| `customersConfiguration` | `any` | Configuration settings for the Customers feature, including revenue currency and other customer tracking preferences. |
| `customersEnabled` | `bool` | Whether the Customers feature is enabled and accessible for the workspace based on the current plan. |
| `defaultFeedSummarySchedule` | `string` | Default schedule for how often feed summaries are generated. |
| `defaultHomeView` | `string` | The default home view for members of the workspace who have not chosen their own default. |
| `defaultHomeViewTargetId` | `string` | The id of the specific initiative, project, view, dashboard, or page tab used as the default home view. |
| `deletionRequestedAt` | `any` | The time at which deletion of the workspace was requested. |
| `feedEnabled` | `bool` | Whether the activity feed feature is enabled for the workspace. |
| `fiscalYearStartMonth` | `float64` | The zero-indexed month at which the fiscal year starts (0 = January, 11 = December). |
| `generatedUpdatesEnabled` | `bool` | [INTERNAL] Whether the workspace has enabled generated updates. |
| `gitBranchFormat` | `string` | The template format for Git branch names created from issues. |
| `gitLinkbackDescriptionsEnabled` | `bool` | Whether issue descriptions should be included in the Git integration linkback messages posted to pull requests. |
| `gitLinkbackMessagesEnabled` | `bool` | Whether the Git integration linkback messages should be posted as comments on pull requests in private repositories. |
| `gitPublicLinkbackMessagesEnabled` | `bool` | Whether the Git integration linkback messages should be posted as comments on pull requests in public repositories. |
| `hipaaComplianceEnabled` | `bool` | Whether HIPAA compliance is enabled for the workspace. |
| `id` | `string` | The unique identifier of the entity. |
| `initiativeUpdateReminderFrequencyInWeeks` | `float64` | The frequency in weeks at which to prompt for initiative updates. |
| `initiativeUpdateRemindersDay` | `string` | The day of the week on which initiative update reminders are sent. |
| `initiativeUpdateRemindersHour` | `float64` | The hour of the day (0-23) at which initiative update reminders are sent. |
| `linearAgentEnabled` | `bool` | [Internal] Whether the workspace has enabled Linear Agent. |
| `linearAgentSettings` | `any` | [Internal] Settings for Linear Agent features. |
| `logoUrl` | `string` | The URL of the workspace's logo image. |
| `name` | `string` | The workspace's name. |
| `periodUploadVolume` | `float64` | Rolling 30-day total file upload volume for the workspace, measured in megabytes. |
| `previousUrlKeys` | `string` | Previously used URL keys for the workspace. |
| `projectUpdateReminderFrequencyInWeeks` | `float64` | The frequency in weeks at which to prompt for project updates. |
| `projectUpdateRemindersDay` | `string` | The day of the week on which project update reminders are sent. |
| `projectUpdateRemindersHour` | `float64` | The hour of the day (0-23) at which project update reminders are sent. |
| `pullRequestIssueMode` | `string` | How Linear suggests and links issues for pull requests that have none linked: 'off', 'suggest', or 'autoOnMerge'. |
| `pullRequestTourEnabled` | `bool` | Whether the workspace generates AI Pull Request guides for new pull requests. |
| `releaseChannel` | `string` | The feature release channel the workspace belongs to, which controls access to pre-release features. |
| `releasesEnabled` | `bool` | Whether release management is enabled for the workspace. |
| `restrictAgentInvocationToMembers` | `bool` | [Internal] Whether agent invocation is restricted to full workspace members. |
| `roadmapEnabled` | `bool` | Whether the roadmap feature is enabled for the workspace. |
| `samlEnabled` | `bool` | Whether SAML-based single sign-on authentication is enabled for the workspace. |
| `samlSettings` | `any` | [INTERNAL] SAML settings. |
| `scimEnabled` | `bool` | Whether SCIM provisioning is enabled for the workspace, allowing automated user and team management from an identity provider. |
| `scimSettings` | `any` | [INTERNAL] SCIM settings. |
| `securitySettings` | `any` | Security settings for the workspace, including role-based restrictions for invitations, team creation, label management, and other sensitive operations. |
| `slackAutoCreateProjectChannel` | `bool` | [Internal] Whether to automatically create a Slack channel when a new project is created. |
| `slackProjectChannelIntegration` | `map[string]any` | The Slack integration used for auto-creating project channels. |
| `slackProjectChannelPrefix` | `string` | The prefix used for auto-created Slack project channels. |
| `slackProjectChannelsEnabled` | `bool` | [Internal] Whether the Slack project channels feature is enabled for the workspace. |
| `subscription` | `map[string]any` | The workspace's subscription to a paid plan. |
| `themeSettings` | `any` | [ALPHA] Theme settings for the workspace. |
| `trialEndsAt` | `any` | The time at which the current plan trial will end. |
| `trialStartsAt` | `any` | The time at which the current plan trial started. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `urlKey` | `string` | The workspace's unique URL key, used in URLs to identify the workspace. |
| `userCount` | `int` | The number of active (non-deactivated) users in the workspace. |
| `workingDays` | `float64` | [Internal] The list of working days. |

#### Example: Load

```go
organization, err := client.Organization(nil).Load(map[string]any{"id": "organization_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(organization) // the loaded record
```


### OrganizationDomain

Create an instance: `organizationDomain := client.OrganizationDomain(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `authType` | `string` | The authentication type this domain is used for. |
| `claimed` | `bool` | Whether the domain was claimed by the workspace through DNS TXT record verification. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `map[string]any` | The user who added the domain. |
| `disableOrganizationCreation` | `bool` | Whether users with email addresses from this domain are prevented from creating new workspaces. |
| `id` | `string` | The unique identifier of the entity. |
| `identityProvider` | `map[string]any` | The identity provider the domain belongs to. |
| `name` | `string` | The domain name (e.g., 'example.com'). |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `verificationEmail` | `string` | The email address used to verify this domain. |
| `verified` | `bool` | Whether the domain has been verified via email verification. |

#### Example: Create

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


### OrganizationInvite

Create an instance: `organizationInvite := client.OrganizationInvite(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `acceptedAt` | `any` | The time at which the invite was accepted by the invitee. |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `email` | `string` | The email address of the person being invited to the workspace. |
| `expiresAt` | `any` | The time at which the invite will expire and can no longer be accepted. |
| `external` | `bool` | Whether the invite was sent to an email address outside the workspace's verified domains. |
| `id` | `string` | The unique identifier of the entity. |
| `invitee` | `map[string]any` | The user who has accepted the invite. |
| `inviter` | `map[string]any` | The user who created the invitation. |
| `metadata` | `any` | Extra metadata associated with the invite. |
| `organization` | `map[string]any` | The workspace that the invite is associated with. |
| `role` | `string` | The workspace role (admin, member, guest, or owner) that the invitee will receive upon accepting the invite. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```go
organizationInvite, err := client.OrganizationInvite(nil).Load(map[string]any{"id": "organization_invite_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(organizationInvite) // the loaded record
```

#### Example: List

```go
organizationInvites, err := client.OrganizationInvite(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(organizationInvites) // the array of records
```

#### Example: Create

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


### OrganizationMeta

Create an instance: `organizationMeta := client.OrganizationMeta(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowedAuthServices` | `string` | Allowed authentication providers, empty array means all are allowed. |
| `region` | `string` | The region the workspace is hosted in. |

#### Example: Load

```go
organizationMeta, err := client.OrganizationMeta(nil).Load(map[string]any{"url_key": "url_key"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(organizationMeta) // the loaded record
```


### PasskeyLoginStartResponse

Create an instance: `passkeyLoginStartResponse := client.PasskeyLoginStartResponse(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `options` | `any` | The passkey authentication options to pass to the WebAuthn API. |
| `success` | `bool` | Whether the operation was successful. |


### Project

Create an instance: `project := client.Project(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `autoArchivedAt` | `any` | The time at which the project was automatically archived by the auto-pruning process. |
| `canceledAt` | `any` | The time at which the project was moved into a canceled status. |
| `color` | `string` | The project's color as a HEX string. |
| `completedAt` | `any` | The time at which the project was moved into a completed status. |
| `completedIssueCountHistory` | `float64` | The number of completed issues in the project at the end of each week since project creation. |
| `completedScopeHistory` | `float64` | The number of completed estimation points at the end of each week since project creation. |
| `content` | `string` | The project's content in markdown format. |
| `contentState` | `string` | [Internal] The project's content as YJS state. |
| `convertedFromIssue` | `map[string]any` | The issue that was converted into this project. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `map[string]any` | The user who created the project. |
| `currentProgress` | `any` | [INTERNAL] The current progress of the project, broken down by issue status category. |
| `description` | `string` | The short description of the project. |
| `documentContent` | `map[string]any` | The content of the project description. |
| `favorite` | `map[string]any` | The user's favorite associated with this project. |
| `frequencyResolution` | `string` | The resolution of the reminder frequency. |
| `health` | `string` | The overall health of the project, derived from the most recent project update. |
| `healthUpdatedAt` | `any` | The time at which the project health was last updated, typically when a new project update is posted. |
| `icon` | `string` | The icon of the project. |
| `id` | `string` | The unique identifier of the entity. |
| `identifier` | `string` | [Internal] The human-readable identifier of the project. |
| `inProgressScopeHistory` | `float64` | The number of in-progress estimation points at the end of each week since project creation. |
| `integrationsSettings` | `map[string]any` | Settings for all integrations associated with that project. |
| `issueCountHistory` | `float64` | The total number of issues in the project at the end of each week since project creation. |
| `labelIds` | `string` | The IDs of the project labels associated with this project. |
| `lastAppliedTemplate` | `map[string]any` | The last template that was applied to this project. |
| `lastUpdate` | `map[string]any` | The most recent status update posted for this project. |
| `lead` | `map[string]any` | The user who leads the project. |
| `leadTeam` | `map[string]any` | [Internal] The team that leads the project. |
| `microsoftTeamsChannelId` | `string` | The ID of the Microsoft Teams channel connected to the project, if any. |
| `name` | `string` | The name of the project. |
| `previousIdentifiers` | `string` | [Internal] Identifiers (default and custom) that this project has previously held. |
| `priority` | `int` | The priority of the project. |
| `priorityLabel` | `string` | The priority of the project as a label. |
| `prioritySortOrder` | `float64` | The sort order for the project within the workspace when ordered by priority. |
| `progress` | `float64` | The overall progress of the project. |
| `progressHistory` | `any` | [INTERNAL] The progress history of the project, tracking issue completion over time. |
| `projectUpdateRemindersPausedUntilAt` | `any` | The time until which project update reminders are paused. |
| `resourceCount` | `int` | The number of resources associated with the project, including documents, external links, and attachments. |
| `scope` | `float64` | The overall scope (total estimate points) of the project. |
| `scopeHistory` | `float64` | The total scope (estimation points) of the project at the end of each week since project creation. |
| `slackChannelId` | `string` | The ID of the Slack channel connected to the project, if any. |
| `slugId` | `string` | The project's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `float64` | The sort order for the project within the workspace. |
| `startDate` | `any` | The estimated start date of the project. |
| `startDateResolution` | `string` | The resolution of the project's start date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `startedAt` | `any` | The time at which the project was moved into a started status. |
| `status` | `map[string]any` | The current project status. |
| `targetDate` | `any` | The estimated completion date of the project. |
| `targetDateResolution` | `string` | The resolution of the project's estimated completion date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `trashed` | `bool` | A flag that indicates whether the project is in the trash bin. |
| `updateReminderFrequency` | `float64` | The frequency at which to prompt for updates. |
| `updateReminderFrequencyInWeeks` | `float64` | The n-weekly frequency at which to prompt for updates. |
| `updateRemindersDay` | `string` | The day at which to prompt for updates. |
| `updateRemindersHour` | `float64` | The hour at which to prompt for updates. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Project URL. |

#### Example: Load

```go
project, err := client.Project(nil).Load(map[string]any{"id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(project) // the loaded record
```

#### Example: List

```go
projects, err := client.Project(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(projects) // the array of records
```

#### Example: Create

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


### ProjectLabel

Create an instance: `projectLabel := client.ProjectLabel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `color` | `string` | The label's color as a HEX string (e.g., '#EB5757'). |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `map[string]any` | The user who created the label. |
| `description` | `string` | The label's description. |
| `id` | `string` | The unique identifier of the entity. |
| `inheritedFrom` | `map[string]any` | [Internal] The original workspace or parent-team label that this label was inherited from. |
| `isGroup` | `bool` | Whether the label is a group. |
| `lastAppliedAt` | `any` | The date when the label was last applied to an issue, project, or initiative. |
| `name` | `string` | The label's name. |
| `organization` | `map[string]any` | The workspace that the project label belongs to. |
| `parent` | `map[string]any` | The parent label group. |
| `retiredAt` | `any` | [Internal] When the label was retired. |
| `retiredBy` | `map[string]any` | The user who retired the label. |
| `team` | `map[string]any` | [Internal] The team that the label is scoped to. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```go
projectLabel, err := client.ProjectLabel(nil).Load(map[string]any{"id": "project_label_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(projectLabel) // the loaded record
```

#### Example: List

```go
projectLabels, err := client.ProjectLabel(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(projectLabels) // the array of records
```

#### Example: Create

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


### ProjectMilestone

Create an instance: `projectMilestone := client.ProjectMilestone(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `currentProgress` | `any` | [Internal] The current progress of the milestone, broken down by issue status category. |
| `description` | `string` | The project milestone's description in markdown format. |
| `descriptionState` | `string` | [Internal] The project milestone's description as YJS state. |
| `documentContent` | `map[string]any` | The rich-text content of the milestone description. |
| `id` | `string` | The unique identifier of the entity. |
| `name` | `string` | The name of the project milestone. |
| `progress` | `float64` | The progress % of the project milestone. |
| `progressHistory` | `any` | [Internal] The progress history of the milestone, tracking issue completion over time. |
| `project` | `map[string]any` | The project that this milestone belongs to. |
| `sortOrder` | `float64` | The order of the milestone in relation to other milestones within a project. |
| `status` | `string` | The status of the project milestone. |
| `targetDate` | `any` | The planned completion date of the milestone. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```go
projectMilestone, err := client.ProjectMilestone(nil).Load(map[string]any{"id": "project_milestone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(projectMilestone) // the loaded record
```

#### Example: List

```go
projectMilestones, err := client.ProjectMilestone(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(projectMilestones) // the array of records
```

#### Example: Create

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


### ProjectMilestoneMoveProjectTeam

Create an instance: `projectMilestoneMoveProjectTeam := client.ProjectMilestoneMoveProjectTeam(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `projectId` | `string` | The project id |
| `teamIds` | `string` | The team ids for the project |


### ProjectRelation

Create an instance: `projectRelation := client.ProjectRelation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `anchorType` | `string` | The type of anchor on the source project end of the relation, indicating whether it is anchored to the project itself or a specific milestone. |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `id` | `string` | The unique identifier of the entity. |
| `project` | `map[string]any` | The source project in the dependency relation. |
| `projectMilestone` | `map[string]any` | The specific milestone within the source project that the relation is anchored to. |
| `relatedAnchorType` | `string` | The type of anchor on the target project end of the relation, indicating whether it is anchored to the project itself or a specific milestone. |
| `relatedProject` | `map[string]any` | The target project in the dependency relation. |
| `relatedProjectMilestone` | `map[string]any` | The specific milestone within the target project that the relation is anchored to. |
| `type` | `string` | The type of dependency relationship from the project to the related project (e.g., blocks). |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `user` | `map[string]any` | The user who last created or modified the relation. |

#### Example: Load

```go
projectRelation, err := client.ProjectRelation(nil).Load(map[string]any{"id": "project_relation_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(projectRelation) // the loaded record
```

#### Example: List

```go
projectRelations, err := client.ProjectRelation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(projectRelations) // the array of records
```

#### Example: Create

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


### ProjectSearchResult

Create an instance: `projectSearchResult := client.ProjectSearchResult(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `autoArchivedAt` | `any` | The time at which the project was automatically archived by the auto-pruning process. |
| `canceledAt` | `any` | The time at which the project was moved into a canceled status. |
| `color` | `string` | The project's color as a HEX string. |
| `completedAt` | `any` | The time at which the project was moved into a completed status. |
| `completedIssueCountHistory` | `float64` | The number of completed issues in the project at the end of each week since project creation. |
| `completedScopeHistory` | `float64` | The number of completed estimation points at the end of each week since project creation. |
| `content` | `string` | The project's content in markdown format. |
| `contentState` | `string` | [Internal] The project's content as YJS state. |
| `convertedFromIssue` | `map[string]any` | The issue that was converted into this project. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `map[string]any` | The user who created the project. |
| `currentProgress` | `any` | [INTERNAL] The current progress of the project, broken down by issue status category. |
| `description` | `string` | The short description of the project. |
| `documentContent` | `map[string]any` | The content of the project description. |
| `favorite` | `map[string]any` | The user's favorite associated with this project. |
| `frequencyResolution` | `string` | The resolution of the reminder frequency. |
| `health` | `string` | The overall health of the project, derived from the most recent project update. |
| `healthUpdatedAt` | `any` | The time at which the project health was last updated, typically when a new project update is posted. |
| `icon` | `string` | The icon of the project. |
| `id` | `string` | The unique identifier of the entity. |
| `identifier` | `string` | [Internal] The human-readable identifier of the project. |
| `inProgressScopeHistory` | `float64` | The number of in-progress estimation points at the end of each week since project creation. |
| `integrationsSettings` | `map[string]any` | Settings for all integrations associated with that project. |
| `issueCountHistory` | `float64` | The total number of issues in the project at the end of each week since project creation. |
| `labelIds` | `string` | The IDs of the project labels associated with this project. |
| `lastAppliedTemplate` | `map[string]any` | The last template that was applied to this project. |
| `lastUpdate` | `map[string]any` | The most recent status update posted for this project. |
| `lead` | `map[string]any` | The user who leads the project. |
| `leadTeam` | `map[string]any` | [Internal] The team that leads the project. |
| `metadata` | `any` | Metadata related to search result. |
| `microsoftTeamsChannelId` | `string` | The ID of the Microsoft Teams channel connected to the project, if any. |
| `name` | `string` | The name of the project. |
| `previousIdentifiers` | `string` | [Internal] Identifiers (default and custom) that this project has previously held. |
| `priority` | `int` | The priority of the project. |
| `priorityLabel` | `string` | The priority of the project as a label. |
| `prioritySortOrder` | `float64` | The sort order for the project within the workspace when ordered by priority. |
| `progress` | `float64` | The overall progress of the project. |
| `progressHistory` | `any` | [INTERNAL] The progress history of the project, tracking issue completion over time. |
| `projectUpdateRemindersPausedUntilAt` | `any` | The time until which project update reminders are paused. |
| `resourceCount` | `int` | The number of resources associated with the project, including documents, external links, and attachments. |
| `scope` | `float64` | The overall scope (total estimate points) of the project. |
| `scopeHistory` | `float64` | The total scope (estimation points) of the project at the end of each week since project creation. |
| `slackChannelId` | `string` | The ID of the Slack channel connected to the project, if any. |
| `slugId` | `string` | The project's unique URL slug, used to construct human-readable URLs. |
| `sortOrder` | `float64` | The sort order for the project within the workspace. |
| `startDate` | `any` | The estimated start date of the project. |
| `startDateResolution` | `string` | The resolution of the project's start date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `startedAt` | `any` | The time at which the project was moved into a started status. |
| `status` | `map[string]any` | The current project status. |
| `targetDate` | `any` | The estimated completion date of the project. |
| `targetDateResolution` | `string` | The resolution of the project's estimated completion date, indicating whether it refers to a specific month, quarter, half-year, or year. |
| `trashed` | `bool` | A flag that indicates whether the project is in the trash bin. |
| `updateReminderFrequency` | `float64` | The frequency at which to prompt for updates. |
| `updateReminderFrequencyInWeeks` | `float64` | The n-weekly frequency at which to prompt for updates. |
| `updateRemindersDay` | `string` | The day at which to prompt for updates. |
| `updateRemindersHour` | `float64` | The hour at which to prompt for updates. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | Project URL. |

#### Example: List

```go
projectSearchResults, err := client.ProjectSearchResult(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(projectSearchResults) // the array of records
```


### ProjectStatus

Create an instance: `projectStatus := client.ProjectStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `color` | `string` | The color of the status as a HEX string, used for display in the UI. |
| `createdAt` | `any` | The time at which the entity was created. |
| `description` | `string` | Description of the status. |
| `id` | `string` | The unique identifier of the entity. |
| `indefinite` | `bool` | Whether a project can remain in this status indefinitely. |
| `inheritedFrom` | `map[string]any` | [Internal] The original workspace or parent-team status that this status was inherited from. |
| `name` | `string` | The name of the status. |
| `position` | `float64` | The position of the status within its type group in the workspace's project flow. |
| `team` | `map[string]any` | [Internal] The team that the status is scoped to. |
| `type` | `string` | The category type of the project status (e.g., backlog, planned, started, paused, completed, canceled). |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```go
projectStatus, err := client.ProjectStatus(nil).Load(map[string]any{"id": "project_status_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(projectStatus) // the loaded record
```

#### Example: List

```go
projectStatuss, err := client.ProjectStatus(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(projectStatuss) // the array of records
```

#### Example: Create

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


### ProjectUpdate

Create an instance: `projectUpdate := client.ProjectUpdate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `body` | `string` | The update content in markdown format. |
| `bodyData` | `string` | [Internal] The content of the update as a Prosemirror document. |
| `commentCount` | `int` | Number of comments associated with the project update. |
| `createdAt` | `any` | The time at which the entity was created. |
| `diff` | `any` | The diff between the current update and the previous one. |
| `diffMarkdown` | `string` | The diff between the current update and the previous one, formatted as markdown. |
| `editedAt` | `any` | The time the update was edited. |
| `health` | `string` | The health of the project at the time this update was posted. |
| `id` | `string` | The unique identifier of the entity. |
| `infoSnapshot` | `any` | [Internal] A snapshot of project properties at the time the update was posted, including team, milestone, and issue statistics. |
| `isDiffHidden` | `bool` | Whether the diff between this update and the previous one should be hidden in the UI. |
| `isStale` | `bool` | Whether the project update is stale. |
| `project` | `map[string]any` | The project that this status update was posted to. |
| `reactionData` | `any` | Emoji reaction summary, grouped by emoji type. |
| `shortSummary` | `string` | A short AI-generated summary of the project update. |
| `slugId` | `string` | The update's unique URL slug. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | The URL to the project update. |
| `user` | `map[string]any` | The user who wrote the update. |

#### Example: Load

```go
projectUpdate, err := client.ProjectUpdate(nil).Load(map[string]any{"id": "project_update_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(projectUpdate) // the loaded record
```

#### Example: List

```go
projectUpdates, err := client.ProjectUpdate(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(projectUpdates) // the array of records
```

#### Example: Create

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


### PushSubscription

Create an instance: `pushSubscription := client.PushSubscription(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `id` | `string` | The unique identifier of the entity. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Create

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


### Reaction

Create an instance: `reaction := client.Reaction(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `comment` | `map[string]any` | The comment that the reaction is associated with. |
| `createdAt` | `any` | The time at which the entity was created. |
| `emoji` | `string` | The name of the emoji used for this reaction. |
| `externalUser` | `map[string]any` | The external user that created the reaction through an integration. |
| `id` | `string` | The unique identifier of the entity. |
| `initiativeUpdate` | `map[string]any` | The initiative update that the reaction is associated with. |
| `issue` | `map[string]any` | The issue that the reaction is associated with. |
| `post` | `map[string]any` | The post that the reaction is associated with. |
| `projectUpdate` | `map[string]any` | The project update that the reaction is associated with. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `user` | `map[string]any` | The workspace user that created the reaction. |

#### Example: Create

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


### Release

Create an instance: `release := client.Release(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `autoArchivedAt` | `any` | The time at which the release was automatically archived by the auto pruning process. |
| `canceledAt` | `any` | The time at which the release was canceled. |
| `commitSha` | `string` | The Git commit SHA associated with this release. |
| `completedAt` | `any` | The time at which the release was completed. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `map[string]any` | The user who created the release. |
| `currentProgress` | `any` | The current progress summary for the release, including counts of issues by workflow state type (e.g., completed, in progress, unstarted). |
| `description` | `string` | The description of the release in plain text or markdown. |
| `id` | `string` | The unique identifier of the entity. |
| `issueCount` | `int` | Number of issues associated with the release. |
| `name` | `string` | The name of the release. |
| `pipeline` | `map[string]any` | The release pipeline that this release belongs to. |
| `progressHistory` | `any` | The historical progress snapshots for the release, tracking how issue completion has evolved over time. |
| `releaseNote` | `map[string]any` | [Internal] The primary release note covering this release. |
| `slugId` | `string` | The release's unique URL slug, used to construct human-readable URLs for the release. |
| `stage` | `map[string]any` | The current stage of the release within its pipeline (e.g., Planned, In Progress, Completed, Canceled). |
| `startDate` | `any` | The estimated start date of the release. |
| `startedAt` | `any` | The time at which the release first entered a started stage. |
| `targetDate` | `any` | The estimated completion date of the release. |
| `trashed` | `bool` | A flag that indicates whether the release is in the trash bin. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | The URL to the release page in the Linear app. |
| `version` | `string` | The version identifier for this release (e.g., 'v1.2.3' or a short commit hash). |

#### Example: Load

```go
release, err := client.Release(nil).Load(map[string]any{"id": "release_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(release) // the loaded record
```

#### Example: List

```go
releases, err := client.Release(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(releases) // the array of records
```

#### Example: Create

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


### ReleaseNote

Create an instance: `releaseNote := client.ReleaseNote(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `documentContent` | `map[string]any` | Document content backing the release note body. |
| `firstRelease` | `map[string]any` | The earliest release covered by this note. |
| `generationStatus` | `string` | Generation status when these release notes are being auto-generated: `pending` while the LLM call is running, `completed` once it lands. |
| `id` | `string` | The unique identifier of the entity. |
| `lastRelease` | `map[string]any` | The most recent release covered by this note. |
| `pipeline` | `map[string]any` | The release pipeline that this note belongs to. |
| `releaseCount` | `int` | The number of releases covered by this note. |
| `slugId` | `string` | The release note's unique URL slug, used to construct human-readable URLs for the note. |
| `title` | `string` | User-supplied title for the release note. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | The URL to the release note page in the Linear app. |

#### Example: Load

```go
releaseNote, err := client.ReleaseNote(nil).Load(map[string]any{"id": "release_note_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(releaseNote) // the loaded record
```

#### Example: List

```go
releaseNotes, err := client.ReleaseNote(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(releaseNotes) // the array of records
```

#### Example: Create

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


### ReleasePipeline

Create an instance: `releasePipeline := client.ReleasePipeline(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approximateReleaseCount` | `int` | The approximate number of non-archived releases in this pipeline. |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `autoGenerateReleaseNotesOnCompletion` | `bool` | Whether to automatically generate a release note when a release is completed. |
| `createdAt` | `any` | The time at which the entity was created. |
| `id` | `string` | The unique identifier of the entity. |
| `includePathPatterns` | `string` | Glob patterns to filter commits by file path. |
| `isProduction` | `bool` | Whether this pipeline targets a production environment. |
| `latestReleaseNote` | `map[string]any` | The release note in this pipeline whose covered range ends with the most recent release. |
| `name` | `string` | The name of the pipeline. |
| `releaseNoteTemplate` | `map[string]any` | The document template used to define the release notes format for this pipeline. |
| `rolloverIssuesOnCompletion` | `bool` | Whether completing a scheduled release moves its open issues to the next release. |
| `slugId` | `string` | The pipeline's unique slug identifier, used in URLs and for lookup by human-readable identifier instead of UUID. |
| `trashed` | `bool` | A flag that indicates whether the pipeline is in the trash bin. |
| `type` | `string` | The type of the pipeline, which determines how releases are created and managed. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | The URL to the release pipeline's releases list in the Linear app. |

#### Example: Load

```go
releasePipeline, err := client.ReleasePipeline(nil).Load(map[string]any{"id": "release_pipeline_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(releasePipeline) // the loaded record
```

#### Example: List

```go
releasePipelines, err := client.ReleasePipeline(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(releasePipelines) // the array of records
```

#### Example: Create

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


### ReleaseStage

Create an instance: `releaseStage := client.ReleaseStage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `color` | `string` | The display color of the stage as a HEX string (e.g., '#0f783c'), used for visual representation in the UI. |
| `createdAt` | `any` | The time at which the entity was created. |
| `frozen` | `bool` | Whether this stage is frozen. |
| `id` | `string` | The unique identifier of the entity. |
| `name` | `string` | The name of the stage. |
| `pipeline` | `map[string]any` | The release pipeline that this stage belongs to. |
| `position` | `float64` | The position of the stage within its pipeline, used for ordering stages in the UI. |
| `type` | `string` | The lifecycle type of the stage (planned, started, completed, or canceled). |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```go
releaseStage, err := client.ReleaseStage(nil).Load(map[string]any{"id": "release_stage_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(releaseStage) // the loaded record
```

#### Example: List

```go
releaseStages, err := client.ReleaseStage(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(releaseStages) // the array of records
```

#### Example: Create

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


### Roadmap

Create an instance: `roadmap := client.Roadmap(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `color` | `string` | The roadmap's color. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `map[string]any` | The user who created the roadmap. |
| `description` | `string` | The description of the roadmap. |
| `id` | `string` | The unique identifier of the entity. |
| `name` | `string` | The name of the roadmap. |
| `organization` | `map[string]any` | The workspace of the roadmap. |
| `owner` | `map[string]any` | The user who owns the roadmap. |
| `slugId` | `string` | The roadmap's unique URL slug. |
| `sortOrder` | `float64` | The sort order of the roadmap within the workspace. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | The canonical url for the roadmap. |

#### Example: Load

```go
roadmap, err := client.Roadmap(nil).Load(map[string]any{"id": "roadmap_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(roadmap) // the loaded record
```

#### Example: List

```go
roadmaps, err := client.Roadmap(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(roadmaps) // the array of records
```

#### Example: Create

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


### RoadmapToProject

Create an instance: `roadmapToProject := client.RoadmapToProject(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `id` | `string` | The unique identifier of the entity. |
| `project` | `map[string]any` | The project that the roadmap is associated with. |
| `roadmap` | `map[string]any` | The roadmap that the project is associated with. |
| `sortOrder` | `string` | The sort order of the project within the roadmap. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```go
roadmapToProject, err := client.RoadmapToProject(nil).Load(map[string]any{"id": "roadmap_to_project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(roadmapToProject) // the loaded record
```

#### Example: List

```go
roadmapToProjects, err := client.RoadmapToProject(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(roadmapToProjects) // the array of records
```

#### Example: Create

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


### SlaConfiguration

Create an instance: `slaConfiguration := client.SlaConfiguration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `conditions` | `any` | The workflow conditions that determine when this SLA rule applies. |
| `id` | `string` | The identifier of the SLA rule. |
| `name` | `string` | The name of the SLA rule. |
| `removesSla` | `bool` | Whether the rule removes an SLA instead of setting one. |
| `sla` | `float64` | The SLA value configured by the rule, expressed in milliseconds or business days depending on the day-count type. |
| `slaType` | `string` | The SLA type used when the rule sets an SLA. |
| `startMode` | `string` | When SLA timing begins. |

#### Example: List

```go
slaConfigurations, err := client.SlaConfiguration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(slaConfigurations) // the array of records
```


### SsoUrlFromEmailResponse

Create an instance: `ssoUrlFromEmailResponse := client.SsoUrlFromEmailResponse(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `samlSsoUrl` | `string` | SAML SSO sign-in URL. |
| `success` | `bool` | Whether the operation was successful. |

#### Example: Load

```go
ssoUrlFromEmailResponse, err := client.SsoUrlFromEmailResponse(nil).Load(map[string]any{"email": "email", "type": "type"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(ssoUrlFromEmailResponse) // the loaded record
```


### Team

Create an instance: `team := client.Team(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activeCycle` | `map[string]any` | Team's currently active cycle. |
| `aiDiscussionSummariesEnabled` | `bool` | Whether to enable AI discussion summaries for issues in this team. |
| `aiThreadSummariesEnabled` | `bool` | Whether to enable resolved thread AI summaries. |
| `allMembersCanJoin` | `bool` | Whether all members in the workspace can join the team. |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `autoArchivePeriod` | `float64` | Period after which automatically closed, completed, and duplicate issues are automatically archived in months. |
| `autoCloseChildIssues` | `bool` | Whether child issues should automatically close when their parent issue is closed |
| `autoCloseParentIssues` | `bool` | Whether parent issues should automatically close when all child issues are closed |
| `autoClosePeriod` | `float64` | Period after which issues are automatically closed in months. |
| `autoCloseStateId` | `string` | The canceled workflow state which auto closed issues will be set to. |
| `color` | `string` | The team's color. |
| `createdAt` | `any` | The time at which the entity was created. |
| `currentProgress` | `any` | [Internal] The current progress of the team. |
| `cycleCalenderUrl` | `string` | Calendar feed URL (iCal) for cycles. |
| `cycleCooldownTime` | `float64` | The cooldown time after each cycle in weeks. |
| `cycleDuration` | `float64` | The duration of each cycle in weeks. |
| `cycleIssueAutoAssignCompleted` | `bool` | Auto assign completed issues to current cycle. |
| `cycleIssueAutoAssignStarted` | `bool` | Auto assign started issues to current cycle. |
| `cycleLockToActive` | `bool` | Auto assign issues to current cycle if in active status. |
| `cycleStartDay` | `float64` | The day of the week that a new cycle starts (0 = Sunday, 1 = Monday, ..., 6 = Saturday). |
| `cyclesEnabled` | `bool` | Whether the team uses cycles for sprint-style issue management. |
| `defaultIssueEstimate` | `float64` | What to use as a default estimate for unestimated issues. |
| `defaultIssueState` | `map[string]any` | The default workflow state into which issues are set when they are opened by team members. |
| `defaultProjectTemplate` | `map[string]any` | The default template to use for new projects created for the team. |
| `defaultTemplateForMembers` | `map[string]any` | The default template to use for new issues created by members of the team. |
| `defaultTemplateForNonMembers` | `map[string]any` | The default template to use for new issues created by non-members of the team. |
| `description` | `string` | The team's description. |
| `displayName` | `string` | The name of the team including its parent team name if it has one. |
| `groupIssueHistory` | `bool` | Whether to group recent issue history entries. |
| `icon` | `string` | The icon of the team. |
| `id` | `string` | The unique identifier of the entity. |
| `inheritIssueEstimation` | `bool` | Whether the team should inherit its estimation settings from its parent. |
| `inheritProjectStatuses` | `bool` | [Internal] Whether the team should inherit its project statuses from its parent team, or from the workspace when it has no parent. |
| `inheritSlackAutoCreateProjectChannel` | `bool` | [Internal] Whether the team should inherit its Slack auto-create project channel setting from its parent. |
| `inheritWorkflowStatuses` | `bool` | Whether the team should inherit its workflow statuses from its parent. |
| `initiativesEnabled` | `bool` | Whether team initiatives are enabled and shown in the team's sidebar. |
| `integrationsSettings` | `map[string]any` | Settings for all integrations associated with that team. |
| `issueCount` | `int` | The total number of issues in the team. |
| `issueEstimationAllowZero` | `bool` | Whether to allow zeros in issues estimates. |
| `issueEstimationExtended` | `bool` | Whether to add additional points to the estimate scale. |
| `issueEstimationType` | `string` | The issue estimation type to use. |
| `joinByDefault` | `bool` | [Internal] Whether new users should join this team by default. |
| `key` | `string` | The team's unique key, used as a prefix in issue identifiers (e.g., 'ENG' in 'ENG-123') and in URLs. |
| `ledInitiativeCount` | `int` | The number of initiatives led by this team that would be deleted along with it. |
| `name` | `string` | The team's name. |
| `organization` | `map[string]any` | The workspace that the team belongs to. |
| `parent` | `map[string]any` | The team's parent team. |
| `progressHistory` | `any` | [Internal] The progress history of the team. |
| `requirePriorityToLeaveTriage` | `bool` | Whether an issue needs to have a priority set before leaving triage. |
| `restrictedBy` | `map[string]any` | [Internal] For restricted teams, the enclosing private team that forms the visibility boundary. |
| `restrictedById` | `string` | [Internal] The identifier of the enclosing private team that forms the visibility boundary for restricted teams. |
| `retiredAt` | `any` | The time at which the team was retired. |
| `scimGroupName` | `string` | The SCIM group name for the team. |
| `scimManaged` | `bool` | Whether the team is managed by a SCIM integration. |
| `securitySettings` | `any` | Security settings for the team, including role-based restrictions for issue sharing, label management, member management, template management, and agent skills. |
| `setIssueSortOrderOnStateChange` | `string` | Where to move issues when changing state. |
| `slackAutoCreateProjectChannel` | `bool` | [Internal] Whether to automatically create a Slack channel when a new project is created in this team. |
| `timezone` | `string` | The timezone of the team. |
| `triageEnabled` | `bool` | Whether triage mode is enabled for the team. |
| `triageIssueState` | `map[string]any` | The workflow state into which issues are set when they are opened by non-team members or integrations if triage is enabled. |
| `triageResponsibility` | `map[string]any` | Team's triage responsibility. |
| `upcomingCycleCount` | `float64` | How many upcoming cycles to create. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `visibility` | `string` | The visibility of the team. |

#### Example: Load

```go
team, err := client.Team(nil).Load(map[string]any{"id": "team_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(team) // the loaded record
```

#### Example: List

```go
teams, err := client.Team(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(teams) // the array of records
```

#### Example: Create

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


### TeamMembership

Create an instance: `teamMembership := client.TeamMembership(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `id` | `string` | The unique identifier of the entity. |
| `owner` | `bool` | Whether the user is an owner of the team. |
| `sortOrder` | `float64` | The sort order of this team in the user's personal team list. |
| `team` | `map[string]any` | The team that the membership is associated with. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `user` | `map[string]any` | The user that the membership is associated with. |

#### Example: Load

```go
teamMembership, err := client.TeamMembership(nil).Load(map[string]any{"id": "team_membership_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(teamMembership) // the loaded record
```

#### Example: List

```go
teamMemberships, err := client.TeamMembership(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(teamMemberships) // the array of records
```

#### Example: Create

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


### Template

Create an instance: `template := client.Template(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `color` | `string` | The hex color of the template icon. |
| `content` | `string` | The template's content in markdown format: the body it pre-fills on the entity it creates. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `map[string]any` | The user who created the template. |
| `description` | `string` | A description of what the template is used for. |
| `hasFormFields` | `bool` | [Internal] Whether the template has form fields |
| `icon` | `string` | The icon of the template, either a decorative icon type or an emoji string. |
| `id` | `string` | The unique identifier of the entity. |
| `inheritedFrom` | `map[string]any` | The parent team template this template was inherited from. |
| `lastAppliedAt` | `any` | The date when the template was last applied to create or update an entity. |
| `lastUpdatedBy` | `map[string]any` | The user who last updated the template. |
| `name` | `string` | The name of the template. |
| `organization` | `map[string]any` | The workspace that owns this template. |
| `pipeline` | `map[string]any` | The release pipeline this template is bound to. |
| `sortOrder` | `float64` | The sort order of the template within the templates list. |
| `team` | `map[string]any` | The team that the template is associated with. |
| `templateData` | `any` | The template data as a JSON-encoded string containing the pre-filled attributes for the entity type (e.g., issue fields, project configuration, or document content). |
| `type` | `string` | The entity type this template is for, such as 'issue', 'project', or 'document'. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```go
template, err := client.Template(nil).Load(map[string]any{"id": "template_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(template) // the loaded record
```

#### Example: List

```go
templates, err := client.Template(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(templates) // the array of records
```

#### Example: Create

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


### TimeSchedule

Create an instance: `timeSchedule := client.TimeSchedule(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `externalId` | `string` | The identifier of the external schedule. |
| `externalUrl` | `string` | The URL to the external schedule. |
| `id` | `string` | The unique identifier of the entity. |
| `integration` | `map[string]any` | The identifier of the Linear integration populating the schedule. |
| `name` | `string` | The name of the schedule. |
| `organization` | `map[string]any` | The workspace of the schedule. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```go
timeSchedule, err := client.TimeSchedule(nil).Load(map[string]any{"id": "time_schedule_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(timeSchedule) // the loaded record
```

#### Example: List

```go
timeSchedules, err := client.TimeSchedule(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(timeSchedules) // the array of records
```

#### Example: Create

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


### TriageResponsibility

Create an instance: `triageResponsibility := client.TriageResponsibility(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `string` | The action to take when an issue is added to triage. |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `currentUser` | `map[string]any` | The user currently responsible for triage. |
| `id` | `string` | The unique identifier of the entity. |
| `team` | `map[string]any` | The team to which the triage responsibility belongs to. |
| `timeSchedule` | `map[string]any` | The time schedule used for scheduling. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```go
triageResponsibility, err := client.TriageResponsibility(nil).Load(map[string]any{"id": "triage_responsibility_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(triageResponsibility) // the loaded record
```

#### Example: List

```go
triageResponsibilitys, err := client.TriageResponsibility(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(triageResponsibilitys) // the array of records
```

#### Example: Create

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


### UploadFile

Create an instance: `uploadFile := client.UploadFile(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assetUrl` | `string` | The permanent asset URL where the file will be accessible after upload. |
| `contentType` | `string` | The content type. |
| `filename` | `string` | The filename. |
| `metaData` | `any` | Optional metadata associated with the upload, such as the related issue or comment ID. |
| `size` | `int` | The size of the uploaded file. |
| `uploadUrl` | `string` | The pre-signed URL to which the file should be uploaded via a PUT request. |

#### Example: Create

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


### UsageAlert

Create an instance: `usageAlert := client.UsageAlert(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

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

```go
usageAlert, err := client.UsageAlert(nil).Load(map[string]any{"id": "usage_alert_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(usageAlert) // the loaded record
```

#### Example: List

```go
usageAlerts, err := client.UsageAlert(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(usageAlerts) // the array of records
```


### User

Create an instance: `user := client.User(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | Whether the user account is active or disabled (suspended). |
| `admin` | `bool` | Whether the user is a workspace administrator. |
| `app` | `bool` | Whether the user is an app. |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `avatarBackgroundColor` | `string` | The background color of the avatar for users without set avatar. |
| `avatarUrl` | `string` | An URL to the user's avatar image. |
| `calendarHash` | `string` | [DEPRECATED] Hash for the user to be used in calendar URLs. |
| `canAccessAnyPublicTeam` | `bool` | Whether this user can access any public team in the workspace. |
| `createdAt` | `any` | The time at which the entity was created. |
| `createdIssueCount` | `int` | Number of issues created. |
| `description` | `string` | A short description of the user, such as their title or a brief bio. |
| `disableReason` | `string` | The reason why the user account is disabled. |
| `displayName` | `string` | The user's display (nick) name. |
| `email` | `string` | The user's email address. |
| `gitHubUserId` | `string` | The user's GitHub user ID. |
| `guest` | `bool` | Whether the user is a guest in the workspace and limited to accessing a subset of teams. |
| `hasGitHubCodeAccess` | `bool` | [Internal] Whether this user can access GitHub source code through Linear. |
| `id` | `string` | The unique identifier of the entity. |
| `identityProvider` | `map[string]any` | [INTERNAL] Identity provider the user is managed by. |
| `initials` | `string` | The initials of the user. |
| `isAssignable` | `bool` | Whether the user can be assigned to issues. |
| `isMe` | `bool` | Whether the user is the currently authenticated user. |
| `isMentionable` | `bool` | Whether the user is mentionable. |
| `lastSeen` | `any` | The last time the user was seen online. |
| `name` | `string` | The user's full name. |
| `organization` | `map[string]any` | The workspace that the user belongs to. |
| `owner` | `bool` | Whether the user is a workspace owner, which is the highest permission level. |
| `statusEmoji` | `string` | The emoji representing the user's current status. |
| `statusLabel` | `string` | The text label of the user's current status. |
| `statusUntilAt` | `any` | The date and time at which the user's current status should be automatically cleared. |
| `supportsAgentSessions` | `bool` | Whether this agent user supports agent sessions. |
| `timezone` | `string` | The local timezone of the user. |
| `title` | `string` | The user's job title. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | User's profile URL. |

#### Example: Load

```go
user, err := client.User(nil).Load(map[string]any{"id": "user_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(user) // the loaded record
```

#### Example: List

```go
users, err := client.User(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(users) // the array of records
```

#### Example: Create

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


### UserSetting

Create an instance: `userSetting := client.UserSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `autoAssignToSelf` | `bool` | Whether to auto-assign newly created issues to the current user by default. |
| `calendarHash` | `string` | A unique hash for the user, used to construct secure calendar subscription URLs. |
| `createdAt` | `any` | The time at which the entity was created. |
| `feedLastSeenTime` | `any` | The user's last seen time for the pulse feed. |
| `feedSummarySchedule` | `string` | The user's preferred schedule for receiving feed summary digests. |
| `id` | `string` | The unique identifier of the entity. |
| `pullRequestMergeStrategyPreference` | `string` | [Internal] The user's preferred merge method for pull requests. |
| `showFullUserNames` | `bool` | Whether to show full user names instead of display names. |
| `subscribedToChangelog` | `bool` | Whether this user is subscribed to receive changelog emails about Linear product updates. |
| `subscribedToDPA` | `bool` | Whether this user is subscribed to receive Data Processing Agreement (DPA) related emails. |
| `subscribedToInviteAccepted` | `bool` | Whether this user is subscribed to receive email notifications when their workspace invitations are accepted. |
| `subscribedToPrivacyLegalUpdates` | `bool` | Whether this user is subscribed to receive emails about privacy policy and legal updates. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `user` | `map[string]any` | The user that these settings belong to. |

#### Example: Load

```go
userSetting, err := client.UserSetting(nil).Load(map[string]any{"id": "user_setting_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(userSetting) // the loaded record
```

#### Example: Create

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


### ViewPreference

Create an instance: `viewPreference := client.ViewPreference(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

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

```go
viewPreference, err := client.ViewPreference(nil).Load(map[string]any{"view_type": "view_type"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(viewPreference) // the loaded record
```

#### Example: Create

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


### Webhook

Create an instance: `webhook := client.Webhook(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allPublicTeams` | `bool` | Whether the webhook receives events from all public (non-private) teams in the organization, including teams created after the webhook was set up. |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `createdAt` | `any` | The time at which the entity was created. |
| `creator` | `map[string]any` | The user who created the webhook. |
| `enabled` | `bool` | Whether the webhook is enabled. |
| `id` | `string` | The unique identifier of the entity. |
| `label` | `string` | A human-readable label for the webhook, used for identification in the UI. |
| `resourceTypes` | `string` | The resource types this webhook is subscribed to (e.g., 'Issue', 'Comment', 'Project', 'Cycle'). |
| `secret` | `string` | A secret token used to sign webhook payloads with HMAC-SHA256, allowing the recipient to verify that the payload originated from Linear and was not tampered with. |
| `team` | `map[string]any` | The single team that the webhook is scoped to. |
| `teamIds` | `string` | [INTERNAL] An array of team IDs that the webhook is subscribed to. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |
| `url` | `string` | The destination URL where webhook payloads will be sent via HTTP POST. |

#### Example: Load

```go
webhook, err := client.Webhook(nil).Load(map[string]any{"id": "webhook_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(webhook) // the loaded record
```

#### Example: List

```go
webhooks, err := client.Webhook(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(webhooks) // the array of records
```

#### Example: Create

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


### WebhookFailureEvent

Create an instance: `webhookFailureEvent := client.WebhookFailureEvent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `any` | The time at which the entity was created. |
| `executionId` | `string` | A stable identifier for the webhook delivery attempt. |
| `httpStatus` | `float64` | The HTTP status code returned by the webhook recipient. |
| `id` | `string` | The unique identifier of the entity. |
| `responseOrError` | `string` | The HTTP response body returned by the recipient, or the error message if the request failed before receiving a response. |
| `url` | `string` | The URL that the webhook was trying to push to. |
| `webhook` | `map[string]any` | The webhook that this failure event is associated with. |

#### Example: List

```go
webhookFailureEvents, err := client.WebhookFailureEvent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(webhookFailureEvents) // the array of records
```


### WorkflowState

Create an instance: `workflowState := client.WorkflowState(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archivedAt` | `any` | The time at which the entity was archived. |
| `color` | `string` | The state's UI color as a HEX string. |
| `createdAt` | `any` | The time at which the entity was created. |
| `description` | `string` | Description of the state. |
| `id` | `string` | The unique identifier of the entity. |
| `inheritedFrom` | `map[string]any` | The parent team's workflow state that this state was inherited from. |
| `name` | `string` | The state's human-readable name (e.g., 'In Progress', 'Done', 'Backlog'). |
| `position` | `float64` | The position of the state in the team's workflow. |
| `team` | `map[string]any` | The team that this workflow state belongs to. |
| `type` | `string` | The type of the state. |
| `updatedAt` | `any` | The last time at which the entity was meaningfully updated. |

#### Example: Load

```go
workflowState, err := client.WorkflowState(nil).Load(map[string]any{"id": "workflow_state_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(workflowState) // the loaded record
```

#### Example: List

```go
workflowStates, err := client.WorkflowState(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(workflowStates) // the array of records
```

#### Example: Create

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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

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

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/linear-sdk/go/
├── linear.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/linear-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
agentactivity := client.AgentActivity(nil)
agentactivity.List(nil, nil)

// agentactivity.Data() now returns the agentactivity data from the last list
// agentactivity.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
