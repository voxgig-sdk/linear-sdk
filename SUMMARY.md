# linear

The linear API.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 87 entities and 464 HTTP routes. There are 7 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### AccessKeyRelease

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `archivedAt`: The time at which the release was archived.
- `commitSha`: The Git commit SHA associated with the release.
- `completedAt`: The time at which the release was completed.
- `createdAt`: The time at which the release was created.
- `id`: The unique identifier of the release.

### AccessKeyReleasePipeline

SDK operations: `load`.

Key fields to recognise:

- `id`: The unique identifier of the release pipeline.
- `includePathPatterns`: Glob patterns used to filter commits by changed file path.

### AgentActivity

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `agentSession`: The agent session this activity belongs to.
- `archivedAt`: The time at which the entity was archived.
- `contextualMetadata`: [Internal] Metadata about user-provided contextual information for this agent activity.
- `createdAt`: The time at which the entity was created.
- `ephemeral`: Whether the activity is ephemeral, and should disappear after the next agent activity.

### AgentSession

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `appUser`: The agent user that is associated with this agent session.
- `archivedAt`: The time at which the entity was archived.
- `codingHarnessModelLabel`: [Internal] Compact display label for the coding harness model used by this session, derived from the latest associated sandbox.
- `comment`: The comment this agent session is associated with.
- `context`: The entity contexts this session is related to, such as issues or projects referenced in direct chat sessions.

### AgentSkill

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `body`: The skill instructions in markdown format.
- `color`: The skill&#39;s color.
- `createdAt`: The time at which the entity was created.
- `creator`: The user who created the skill.

### Application

SDK operations: `load`.

Key fields to recognise:

- `clientId`: OAuth application&#39;s client ID.
- `description`: Information about the application.
- `developer`: Name of the developer.
- `developerUrl`: URL of the developer&#39;s website, homepage, or documentation.
- `id`: OAuth application&#39;s ID.

### Attachment

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `bodyData`: The body data of the attachment, if any.
- `createdAt`: The time at which the entity was created.
- `creator`: The creator of the attachment.
- `externalUserCreator`: The non-Linear user who created the attachment.

### AuditEntry

SDK operations: `list`.

Key fields to recognise:

- `actor`: The user that caused the audit entry to be created.
- `actorId`: The ID of the user that caused the audit entry to be created.
- `archivedAt`: The time at which the entity was archived.
- `countryCode`: The ISO 3166-1 alpha-2 country code derived from the request IP address.
- `createdAt`: The time at which the entity was created.

### AuditEntryType

SDK operations: `list`.

Key fields to recognise:

- `description`: Description of the audit entry type.
- `type`: The audit entry type.

### AuthResolverResponse

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `allowDomainAccess`: Should the signup flow allow access for the domain.
- `email`: Email for the authenticated account.
- `id`: User account ID.
- `lastUsedOrganizationId`: ID of the organization last accessed by the user.
- `service`: The authentication service used for the current session (for example, google, email, saml).

### AuthenticationSessionResponse

SDK operations: `list`.

Key fields to recognise:

- `browserType`: Used web browser.
- `client`: Client used for the session
- `countryCodes`: Country codes of all seen locations.
- `createdAt`: The time at which the entity was created.
- `detailedName`: Detailed name of the session including version information, derived from the user agent.

### Comment

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `agentSession`: Agent session associated with this comment.
- `archivedAt`: The time at which the entity was archived.
- `body`: The comment content in markdown format.
- `bodyData`: [Internal] The comment content as a ProseMirror document.
- `botActor`: The bot that created the comment.

### CreateOrJoinOrganizationResponse

SDK operations: `create`, `update`.

Key fields to recognise:

- `organization`: The workspace that was created or joined.
- `user`: The user who created or joined the workspace.

### CustomView

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `color`: The hex color code of the custom view icon.
- `createdAt`: The time at which the entity was created.
- `creator`: The user who originally created the custom view.
- `description`: The description of the custom view.

### Customer

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `approximateNeedCount`: The approximate number of distinct requests associated with this customer, deduplicated per issue or project.
- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `domains`: The email domains associated with this customer (for example, &#39;acme.com&#39;).
- `externalIds`: Identifiers for this customer in external systems (for example, CRM IDs from Intercom, Salesforce, or HubSpot).

### CustomerNeed

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `attachment`: The issue attachment linked to this need.
- `body`: The body content of the need in Markdown format.
- `bodyData`: [Internal] The body content of the need as a Prosemirror document JSON string.
- `comment`: An optional comment providing additional context for this need.

### CustomerStatus

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `color`: The color of the status indicator in the UI, as a HEX string (for example, &#39;#ff0000&#39;).
- `createdAt`: The time at which the entity was created.
- `description`: An optional description explaining what this status represents in the customer lifecycle.
- `displayName`: The user-facing display name of the status shown in the UI.

### CustomerTier

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `color`: The color of the tier indicator in the UI, as a HEX string (for example, &#39;#ff0000&#39;).
- `createdAt`: The time at which the entity was created.
- `description`: An optional description explaining what this tier represents and its intended use for customer segmentation.
- `displayName`: The user-facing display name of the tier shown in the UI.

### Cycle

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `autoArchivedAt`: The time at which the cycle was automatically archived by the auto-pruning process.
- `completedAt`: The completion time of the cycle.
- `completedIssueCountHistory`: The number of completed issues in the cycle after each day.
- `completedScopeHistory`: The number of completed estimation points after each day.

### Diff

SDK operations: `load`.

Key fields to recognise:

- `additions`: [Internal] The total number of added lines across the diff.
- `agentSession`: The agent session the diff belongs to.
- `archivedAt`: The time at which the entity was archived.
- `contentHash`: [Internal] The opaque content hash identifying the diff&#39;s content in code.storage.
- `createdAt`: The time at which the entity was created.

### Document

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `color`: The hex color of the document icon.
- `content`: The document&#39;s content in markdown format.
- `contentState`: [Internal] The document&#39;s content as a base64-encoded Yjs state update.
- `createdAt`: The time at which the entity was created.

### DocumentSearchResult

SDK operations: `list`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `color`: The hex color of the document icon.
- `content`: The document&#39;s content in markdown format.
- `contentState`: [Internal] The document&#39;s content as a base64-encoded Yjs state update.
- `createdAt`: The time at which the entity was created.

### EmailIntakeAddress

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `address`: The unique local part (before the @) of the intake email address, used to route incoming emails to the correct intake handler.
- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `creator`: The user who created the email intake address.
- `customerRequestsEnabled`: Whether issues created from emails sent to this address are automatically converted into customer requests, linking the sender as a customer contact.

### EmailUserAccountAuthChallengeResponse

SDK operations: `create`.

Key fields to recognise:

- `authType`: Supported challenge for this user account.
- `success`: Whether the operation was successful.

### Emoji

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `creator`: The user who created the emoji.
- `id`: The unique identifier of the entity.
- `name`: The unique name of the custom emoji within the workspace.

### EntityExternalLink

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `creator`: The user who created the link.
- `id`: The unique identifier of the entity.
- `initiative`: The initiative that the link is associated with.

### ExternalUser

SDK operations: `list`, `load`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `avatarUrl`: A URL to the external user&#39;s avatar image.
- `createdAt`: The time at which the entity was created.
- `displayName`: The external user&#39;s display name.
- `email`: The external user&#39;s email address.

### Favorite

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `aiConversation`: [INTERNAL] The favorited Agent conversation.
- `archivedAt`: The time at which the entity was archived.
- `color`: [Internal] Returns the color of the favorite&#39;s icon.
- `createdAt`: The time at which the entity was created.
- `customView`: The favorited custom view.

### GitAutomationState

SDK operations: `create`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `event`: The Git event that triggers this automation rule (for example, branch created, PR opened for review, or PR merged).
- `id`: The unique identifier of the entity.
- `state`: The workflow state that linked issues will be transitioned to when the Git event fires.

### GitAutomationTargetBranch

SDK operations: `create`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `branchPattern`: The branch name or pattern to match against pull request target branches.
- `createdAt`: The time at which the entity was created.
- `id`: The unique identifier of the entity.
- `isRegex`: Whether the branch pattern should be interpreted as a regular expression.

### GitHubIntegrationConnectDetail

SDK operations: `create`, `update`.

Key fields to recognise:

- `lostRepositoryNames`: Full names (&#39;owner/repo&#39;) of repositories whose existing GitHub Issues sync mappings would become inaccessible if the new GitHub App installation replaces the existing one.

### Initiative

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `canceledAt`: [Internal] The time at which the initiative was moved into Canceled status.
- `color`: The initiative&#39;s color.
- `completedAt`: The time at which the initiative was moved into Completed status.
- `content`: The initiative&#39;s content in markdown format.

### InitiativeLabel

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `color`: The label&#39;s color as a HEX string (for example, &#39;#EB5757&#39;).
- `createdAt`: The time at which the entity was created.
- `creator`: The user who created the label.
- `description`: The label&#39;s description.

### InitiativeLeadTeamChangeImpact

SDK operations: `load`.

Key fields to recognise:

- `affectedDescendantCount`: The number of editable matching sub-initiatives whose lead team would change if the update is applied to descendants.
- `visibilityMayChange`: Whether the changed initiatives may gain or lose access restrictions because the current or next lead team is not public.

### InitiativeRelation

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `id`: The unique identifier of the entity.
- `initiative`: The parent initiative in this hierarchical relation.
- `relatedInitiative`: The child initiative in this hierarchical relation.

### InitiativeToProject

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `id`: The unique identifier of the entity.
- `initiative`: The initiative that the project is associated with.
- `project`: The project that the initiative is associated with.

### InitiativeUpdate

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `body`: The update content in markdown format.
- `bodyData`: [Internal] The content of the update as a Prosemirror document.
- `commentCount`: Number of comments associated with the initiative update.
- `createdAt`: The time at which the entity was created.

### Integration

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `creator`: The user that added the integration.
- `id`: The unique identifier of the entity.
- `organization`: The workspace that the integration is associated with.

### IntegrationTemplate

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `foreignEntityId`: The identifier of the foreign entity in the external service that this template is scoped to.
- `id`: The unique identifier of the entity.
- `integration`: The integration that the template is associated with.

### IntegrationsSetting

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `contextViewType`: The type of view to which the integration settings context is associated with.
- `createdAt`: The time at which the entity was created.
- `id`: The unique identifier of the entity.
- `initiative`: Initiative which those settings apply to.

### Issue

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `activitySummary`: [Internal] The activity summary information for this issue.
- `addedToCycleAt`: The time at which the issue was added to a cycle.
- `addedToProjectAt`: The time at which the issue was added to a project.
- `addedToTeamAt`: The time at which the issue was added to a team.
- `archivedAt`: The time at which the entity was archived.

### IssueImport

SDK operations: `create`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `creatorId`: Identifier of the user who started the import job.
- `csvFileUrl`: File URL for the uploaded CSV for the import, if there is one.
- `displayName`: The display name of the import service.

### IssueLabel

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `color`: The label&#39;s color as a HEX string (for example, &#39;#EB5757&#39;).
- `createdAt`: The time at which the entity was created.
- `creator`: The user who created the label.
- `description`: The label&#39;s description.

### IssuePriorityValue

SDK operations: `list`.

Key fields to recognise:

- `label`: Priority&#39;s label.
- `priority`: Priority&#39;s number value.

### IssueRelation

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `id`: The unique identifier of the entity.
- `issue`: The source issue whose relationship is being described.
- `relatedIssue`: The target issue that the source issue is related to.

### IssueSearchResult

SDK operations: `list`.

Key fields to recognise:

- `activitySummary`: [Internal] The activity summary information for this issue.
- `addedToCycleAt`: The time at which the issue was added to a cycle.
- `addedToProjectAt`: The time at which the issue was added to a project.
- `addedToTeamAt`: The time at which the issue was added to a team.
- `archivedAt`: The time at which the entity was archived.

### IssueToRelease

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `id`: The unique identifier of the entity.
- `issue`: The issue that is linked to the release.
- `release`: The release that the issue is linked to.

### LogoutResponse

SDK operations: `create`, `update`.

Key fields to recognise:

- `success`: Whether the operation was successful.

### Notification

SDK operations: `list`, `load`.

Key fields to recognise:

- `actor`: The user that caused the notification.
- `actorAvatarColor`: [Internal] Notification actor initials if avatar is not available.
- `actorAvatarUrl`: [Internal] Notification avatar URL.
- `actorInactive`: [Internal] Whether the notification&#39;s user actor is deactivated in the workspace.
- `actorInitials`: [Internal] Notification actor initials if avatar is not available.

### NotificationSubscription

SDK operations: `list`, `load`.

Key fields to recognise:

- `active`: Whether the subscription is active.
- `archivedAt`: The time at which the entity was archived.
- `contextViewType`: The type of contextual view (for example, active issues, backlog) that further scopes a team notification subscription.
- `createdAt`: The time at which the entity was created.
- `customView`: The custom view that this notification subscription is scoped to.

### OAuthApplication

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `clientId`: The client ID used during OAuth authorization flows.
- `createdAt`: The time at which the OAuth application was created.
- `description`: User-facing description of the OAuth application.
- `developer`: Name of the developer or company that built the OAuth application.
- `developerUrl`: URL of the developer&#39;s website, homepage, or documentation.

### Organization

SDK operations: `load`, `remove`, `update`.

Key fields to recognise:

- `agentAutomationEnabled`: [INTERNAL] Whether the workspace has enabled agent automation.
- `aiAddonEnabled`: [INTERNAL] Whether the workspace has enabled the AI add-on (which at this point only includes triage suggestions).
- `aiDiscussionSummariesEnabled`: Whether the workspace has enabled AI discussion summaries for issues.
- `aiProviderConfiguration`: [INTERNAL] Configure per-modality AI host providers and model families.
- `aiTelemetryEnabled`: [INTERNAL] Whether the workspace has opted in to AI telemetry.

### OrganizationDomain

SDK operations: `create`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `authType`: The authentication type this domain is used for.
- `claimed`: Whether the domain was claimed by the workspace through DNS TXT record verification.
- `createdAt`: The time at which the entity was created.
- `creator`: The user who added the domain.

### OrganizationInvite

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `acceptedAt`: The time at which the invite was accepted by the invitee.
- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `email`: The email address of the person being invited to the workspace.
- `expiresAt`: The time at which the invite will expire and can no longer be accepted.

### OrganizationMeta

SDK operations: `load`.

Key fields to recognise:

- `allowedAuthServices`: Allowed authentication providers, empty array means all are allowed.
- `region`: The region the workspace is hosted in.

### PasskeyLoginStartResponse

SDK operations: `update`.

Key fields to recognise:

- `options`: The passkey authentication options to pass to the WebAuthn API.
- `success`: Whether the operation was successful.

### Project

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `autoArchivedAt`: The time at which the project was automatically archived by the auto-pruning process.
- `canceledAt`: The time at which the project was moved into a canceled status.
- `color`: The project&#39;s color as a HEX string.
- `completedAt`: The time at which the project was moved into a completed status.

### ProjectLabel

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `color`: The label&#39;s color as a HEX string (for example, &#39;#EB5757&#39;).
- `createdAt`: The time at which the entity was created.
- `creator`: The user who created the label.
- `description`: The label&#39;s description.

### ProjectMilestone

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `currentProgress`: [Internal] The current progress of the milestone, broken down by issue status category.
- `description`: The project milestone&#39;s description in markdown format.
- `descriptionState`: [Internal] The project milestone&#39;s description as YJS state.

### ProjectMilestoneMoveProjectTeam

SDK operations: `update`.

Key fields to recognise:

- `projectId`: The project id
- `teamIds`: The team ids for the project

### ProjectRelation

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `anchorType`: The type of anchor on the source project end of the relation, indicating whether it is anchored to the project itself or a specific milestone.
- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `id`: The unique identifier of the entity.
- `project`: The source project in the dependency relation.

### ProjectSearchResult

SDK operations: `list`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `autoArchivedAt`: The time at which the project was automatically archived by the auto-pruning process.
- `canceledAt`: The time at which the project was moved into a canceled status.
- `color`: The project&#39;s color as a HEX string.
- `completedAt`: The time at which the project was moved into a completed status.

### ProjectStatus

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `color`: The color of the status as a HEX string, used for display in the UI.
- `createdAt`: The time at which the entity was created.
- `description`: Description of the status.
- `id`: The unique identifier of the entity.

### ProjectUpdate

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `body`: The update content in markdown format.
- `bodyData`: [Internal] The content of the update as a Prosemirror document.
- `commentCount`: Number of comments associated with the project update.
- `createdAt`: The time at which the entity was created.

### PushSubscription

SDK operations: `create`, `remove`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `id`: The unique identifier of the entity.
- `updatedAt`: The last time at which the entity was meaningfully updated.

### Reaction

SDK operations: `create`, `remove`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `comment`: The comment that the reaction is associated with.
- `createdAt`: The time at which the entity was created.
- `emoji`: The name of the emoji used for this reaction.
- `externalUser`: The external user that created the reaction through an integration.

### Release

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `autoArchivedAt`: The time at which the release was automatically archived by the auto pruning process.
- `canceledAt`: The time at which the release was canceled.
- `commitSha`: The Git commit SHA associated with this release.
- `completedAt`: The time at which the release was completed.

### ReleaseNote

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `documentContent`: Document content backing the release note body.
- `firstRelease`: The earliest release covered by this note.
- `generationStatus`: Generation status when these release notes are being auto-generated: `pending` while the LLM call is running, `completed` once it lands.

### ReleasePipeline

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `approximateReleaseCount`: The approximate number of non-archived releases in this pipeline.
- `archivedAt`: The time at which the entity was archived.
- `autoGenerateReleaseNotesOnCompletion`: Whether to automatically generate a release note when a release is completed.
- `createdAt`: The time at which the entity was created.
- `id`: The unique identifier of the entity.

### ReleaseStage

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `color`: The display color of the stage as a HEX string (for example, &#39;#0f783c&#39;), used for visual representation in the UI.
- `createdAt`: The time at which the entity was created.
- `frozen`: Whether this stage is frozen.
- `id`: The unique identifier of the entity.

### Roadmap

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `color`: The roadmap&#39;s color.
- `createdAt`: The time at which the entity was created.
- `creator`: The user who created the roadmap.
- `description`: The description of the roadmap.

### RoadmapToProject

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `id`: The unique identifier of the entity.
- `project`: The project that the roadmap is associated with.
- `roadmap`: The roadmap that the project is associated with.

### SlaConfiguration

SDK operations: `list`.

Key fields to recognise:

- `conditions`: The workflow conditions that determine when this SLA rule applies.
- `id`: The identifier of the SLA rule.
- `name`: The name of the SLA rule.
- `removesSla`: Whether the rule removes an SLA instead of setting one.
- `sla`: The SLA value configured by the rule, expressed in milliseconds or business days depending on the day-count type.

### SsoUrlFromEmailResponse

SDK operations: `load`.

Key fields to recognise:

- `samlSsoUrl`: SAML SSO sign-in URL.
- `success`: Whether the operation was successful.

### Team

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `activeCycle`: Team&#39;s currently active cycle.
- `aiDiscussionSummariesEnabled`: Whether to enable AI discussion summaries for issues in this team.
- `aiThreadSummariesEnabled`: Whether to enable resolved thread AI summaries.
- `allMembersCanJoin`: Whether all members in the workspace can join the team.
- `archivedAt`: The time at which the entity was archived.

### TeamMembership

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `id`: The unique identifier of the entity.
- `owner`: Whether the user is an owner of the team.
- `sortOrder`: The sort order of this team in the user&#39;s personal team list.

### Template

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `color`: The hex color of the template icon.
- `content`: The template&#39;s content in markdown format: the body it pre-fills on the entity it creates.
- `createdAt`: The time at which the entity was created.
- `creator`: The user who created the template.

### TimeSchedule

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `externalId`: The identifier of the external schedule.
- `externalUrl`: The URL to the external schedule.
- `id`: The unique identifier of the entity.

### TriageResponsibility

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `action`: The action to take when an issue is added to triage.
- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `currentUser`: The user currently responsible for triage.
- `id`: The unique identifier of the entity.

### UploadFile

SDK operations: `create`.

Key fields to recognise:

- `assetUrl`: The permanent asset URL where the file will be accessible after upload.
- `contentType`: The content type.
- `filename`: The filename.
- `metaData`: Optional metadata associated with the upload, such as the related issue or comment ID.
- `size`: The size of the uploaded file.

### UsageAlert

SDK operations: `list`, `load`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `id`: The unique identifier of the entity.
- `metadata`: Type-specific snapshot captured when the alert was triggered, keyed by the alert type, for example the credit balance and threshold for a lowBalance alert.
- `resolvedAt`: The time when the usage alert was resolved or archived.

### User

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `active`: Whether the user account is active or disabled (suspended).
- `admin`: Whether the user is a workspace administrator.
- `app`: Whether the user is an app.
- `archivedAt`: The time at which the entity was archived.
- `avatarBackgroundColor`: The background color of the avatar for users without set avatar.

### UserSetting

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `autoAssignToSelf`: Whether to auto-assign newly created issues to the current user by default.
- `calendarHash`: A unique hash for the user, used to construct secure calendar subscription URLs.
- `createdAt`: The time at which the entity was created.
- `feedLastSeenTime`: The user&#39;s last seen time for the pulse feed.

### ViewPreference

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `id`: The unique identifier of the entity.
- `type`: The type of view preferences: &quot;organization&quot; for workspace-wide defaults or &quot;user&quot; for personal overrides.
- `updatedAt`: The last time at which the entity was meaningfully updated.

### Webhook

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `allPublicTeams`: Whether the webhook receives events from all public (non-private) teams in the organization, including teams created after the webhook was set up.
- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `creator`: The user who created the webhook.
- `enabled`: Whether the webhook is enabled.

### WebhookFailureEvent

SDK operations: `list`.

Key fields to recognise:

- `createdAt`: The time at which the entity was created.
- `executionId`: A stable identifier for the webhook delivery attempt.
- `httpStatus`: The HTTP status code returned by the webhook recipient.
- `id`: The unique identifier of the entity.
- `responseOrError`: The HTTP response body returned by the recipient, or the error message if the request failed before receiving a response.

### WorkflowState

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `color`: The state&#39;s UI color as a HEX string.
- `createdAt`: The time at which the entity was created.
- `description`: Description of the state.
- `id`: The unique identifier of the entity.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| AccessKeyRelease | `create` | `POST releaseCompleteByAccessKey` | See reference |
| AccessKeyRelease | `create` | `POST releaseSyncByAccessKey` | See reference |
| AccessKeyRelease | `create` | `POST releaseUpdateByPipelineByAccessKey` | See reference |
| AccessKeyRelease | `list` | `POST recentReleasesByAccessKey` | See reference |
| AccessKeyRelease | `load` | `POST latestReleaseByAccessKey` | See reference |
| AccessKeyReleasePipeline | `load` | `POST releasePipelineByAccessKey` | See reference |
| AgentActivity | `create` | `POST agentActivityCreate` | See reference |
| AgentActivity | `create` | `POST agentActivityCreatePrompt` | See reference |
| AgentActivity | `list` | `POST agentActivities` | See reference |
| AgentActivity | `load` | `POST agentActivity` | See reference |
| AgentActivity | `update` | `POST agentActivityDeleteQueued` | See reference |
| AgentActivity | `update` | `POST agentActivitySendQueued` | See reference |
| AgentSession | `create` | `POST agentSessionCreate` | See reference |
| AgentSession | `create` | `POST agentSessionCreateOnComment` | See reference |
| AgentSession | `create` | `POST agentSessionCreateOnIssue` | See reference |
| AgentSession | `list` | `POST agentSessions` | See reference |
| AgentSession | `load` | `POST agentSession` | See reference |
| AgentSession | `update` | `POST agentSessionRestartWithDefaultModel` | See reference |
| AgentSession | `update` | `POST agentSessionUpdate` | See reference |
| AgentSession | `update` | `POST agentSessionUpdateExternalUrl` | See reference |
| AgentSkill | `create` | `POST agentSkillCreate` | See reference |
| AgentSkill | `list` | `POST agentSkills` | See reference |
| AgentSkill | `load` | `POST agentSkill` | See reference |
| AgentSkill | `remove` | `POST agentSkillDelete` | See reference |
| AgentSkill | `update` | `POST agentSkillUpdate` | See reference |
| Application | `load` | `POST applicationInfo` | See reference |
| Attachment | `create` | `POST attachmentCreate` | See reference |
| Attachment | `list` | `POST attachmentsForURL` | See reference |
| Attachment | `list` | `POST attachments` | See reference |
| Attachment | `load` | `POST attachment` | See reference |
| Attachment | `remove` | `POST attachmentDelete` | See reference |
| Attachment | `update` | `POST attachmentLinkDiscord` | See reference |
| Attachment | `update` | `POST attachmentLinkGitLabMR` | See reference |
| Attachment | `update` | `POST attachmentLinkFront` | See reference |
| Attachment | `update` | `POST attachmentLinkGitHubIssue` | See reference |
| Attachment | `update` | `POST attachmentLinkGitHubPR` | See reference |
| Attachment | `update` | `POST attachmentLinkIntercom` | See reference |
| Attachment | `update` | `POST attachmentLinkJiraIssue` | See reference |
| Attachment | `update` | `POST attachmentLinkSalesforce` | See reference |
| Attachment | `update` | `POST attachmentLinkSlack` | See reference |
| Attachment | `update` | `POST attachmentLinkURL` | See reference |
| Attachment | `update` | `POST attachmentLinkZendesk` | See reference |
| Attachment | `update` | `POST attachmentSyncToSlack` | See reference |
| Attachment | `update` | `POST attachmentUpdate` | See reference |
| AuditEntry | `list` | `POST auditEntries` | See reference |
| AuditEntryType | `list` | `POST auditEntryTypes` | See reference |
| AuthResolverResponse | `create` | `POST emailTokenUserAccountAuth` | See reference |
| AuthResolverResponse | `create` | `POST googleUserAccountAuth` | See reference |
| AuthResolverResponse | `create` | `POST samlTokenUserAccountAuth` | See reference |
| AuthResolverResponse | `load` | `POST availableUsers` | See reference |
| AuthResolverResponse | `update` | `POST passkeyLoginFinish` | See reference |
| AuthenticationSessionResponse | `list` | `POST userSessions` | See reference |
| AuthenticationSessionResponse | `list` | `POST authenticationSessions` | See reference |
| Comment | `create` | `POST commentCreate` | See reference |
| Comment | `list` | `POST comments` | See reference |
| Comment | `load` | `POST comment` | See reference |
| Comment | `remove` | `POST commentDelete` | See reference |
| Comment | `update` | `POST commentResolve` | See reference |
| Comment | `update` | `POST commentUnresolve` | See reference |
| Comment | `update` | `POST commentUpdate` | See reference |
| CreateOrJoinOrganizationResponse | `create` | `POST createOrganizationFromOnboarding` | See reference |
| CreateOrJoinOrganizationResponse | `create` | `POST joinOrganizationFromOnboarding` | See reference |
| CreateOrJoinOrganizationResponse | `update` | `POST leaveOrganization` | See reference |
| CustomView | `create` | `POST customViewCreate` | See reference |
| CustomView | `list` | `POST customViews` | See reference |
| CustomView | `load` | `POST customView` | See reference |
| CustomView | `remove` | `POST customViewDelete` | See reference |
| CustomView | `update` | `POST customViewUpdate` | See reference |
| Customer | `create` | `POST customerCreate` | See reference |
| Customer | `create` | `POST customerUpsert` | See reference |
| Customer | `list` | `POST customers` | See reference |
| Customer | `load` | `POST customer` | See reference |
| Customer | `remove` | `POST customerDelete` | See reference |
| Customer | `update` | `POST customerMerge` | See reference |
| Customer | `update` | `POST customerUnsync` | See reference |
| Customer | `update` | `POST customerUpdate` | See reference |
| CustomerNeed | `create` | `POST customerNeedCreate` | See reference |
| CustomerNeed | `create` | `POST customerNeedCreateFromAttachment` | See reference |
| CustomerNeed | `list` | `POST customerNeeds` | See reference |
| CustomerNeed | `load` | `POST customerNeed` | See reference |
| CustomerNeed | `remove` | `POST customerNeedDelete` | See reference |
| CustomerNeed | `update` | `POST customerNeedArchive` | See reference |
| CustomerNeed | `update` | `POST customerNeedUnarchive` | See reference |
| CustomerNeed | `update` | `POST customerNeedUpdate` | See reference |
| CustomerStatus | `create` | `POST customerStatusCreate` | See reference |
| CustomerStatus | `list` | `POST customerStatuses` | See reference |
| CustomerStatus | `load` | `POST customerStatus` | See reference |
| CustomerStatus | `remove` | `POST customerStatusDelete` | See reference |
| CustomerStatus | `update` | `POST customerStatusUpdate` | See reference |
| CustomerTier | `create` | `POST customerTierCreate` | See reference |
| CustomerTier | `list` | `POST customerTiers` | See reference |
| CustomerTier | `load` | `POST customerTier` | See reference |
| CustomerTier | `remove` | `POST customerTierDelete` | See reference |
| CustomerTier | `update` | `POST customerTierUpdate` | See reference |
| Cycle | `create` | `POST cycleCreate` | See reference |
| Cycle | `create` | `POST cycleShiftAll` | See reference |
| Cycle | `list` | `POST cycles` | See reference |
| Cycle | `load` | `POST cycle` | See reference |
| Cycle | `update` | `POST cycleArchive` | See reference |
| Cycle | `update` | `POST cycleStartUpcomingCycleToday` | See reference |
| Cycle | `update` | `POST cycleUpdate` | See reference |
| Diff | `load` | `POST diff` | See reference |
| Document | `create` | `POST documentCreate` | See reference |
| Document | `list` | `POST documents` | See reference |
| Document | `load` | `POST document` | See reference |
| Document | `remove` | `POST documentDelete` | See reference |
| Document | `update` | `POST documentUnarchive` | See reference |
| Document | `update` | `POST documentUpdate` | See reference |
| DocumentSearchResult | `list` | `POST searchDocuments` | See reference |
| EmailIntakeAddress | `create` | `POST emailIntakeAddressCreate` | See reference |
| EmailIntakeAddress | `load` | `POST emailIntakeAddress` | See reference |
| EmailIntakeAddress | `remove` | `POST emailIntakeAddressDelete` | See reference |
| EmailIntakeAddress | `update` | `POST emailIntakeAddressRotate` | See reference |
| EmailIntakeAddress | `update` | `POST emailIntakeAddressUpdate` | See reference |
| EmailUserAccountAuthChallengeResponse | `create` | `POST emailUserAccountAuthChallenge` | See reference |
| Emoji | `create` | `POST emojiCreate` | See reference |
| Emoji | `list` | `POST emojis` | See reference |
| Emoji | `load` | `POST emoji` | See reference |
| Emoji | `remove` | `POST emojiDelete` | See reference |
| EntityExternalLink | `create` | `POST entityExternalLinkCreate` | See reference |
| EntityExternalLink | `load` | `POST entityExternalLink` | See reference |
| EntityExternalLink | `remove` | `POST entityExternalLinkDelete` | See reference |
| EntityExternalLink | `update` | `POST entityExternalLinkUpdate` | See reference |
| ExternalUser | `list` | `POST externalUsers` | See reference |
| ExternalUser | `load` | `POST externalUser` | See reference |
| Favorite | `create` | `POST favoriteCreate` | See reference |
| Favorite | `list` | `POST favorites` | See reference |
| Favorite | `load` | `POST favorite` | See reference |
| Favorite | `remove` | `POST favoriteDelete` | See reference |
| Favorite | `update` | `POST favoriteUpdate` | See reference |
| GitAutomationState | `create` | `POST gitAutomationStateCreate` | See reference |
| GitAutomationState | `remove` | `POST gitAutomationStateDelete` | See reference |
| GitAutomationState | `update` | `POST gitAutomationStateUpdate` | See reference |
| GitAutomationTargetBranch | `create` | `POST gitAutomationTargetBranchCreate` | See reference |
| GitAutomationTargetBranch | `remove` | `POST gitAutomationTargetBranchDelete` | See reference |
| GitAutomationTargetBranch | `update` | `POST gitAutomationTargetBranchUpdate` | See reference |
| GitHubIntegrationConnectDetail | `create` | `POST integrationAsksConnectChannel` | See reference |
| GitHubIntegrationConnectDetail | `create` | `POST integrationGitHubEnterpriseServerConnect` | See reference |
| GitHubIntegrationConnectDetail | `create` | `POST integrationGitlabConnect` | See reference |
| GitHubIntegrationConnectDetail | `create` | `POST integrationSlackOrgInitiativeUpdatesPost` | See reference |
| GitHubIntegrationConnectDetail | `create` | `POST integrationSlackOrgProjectUpdatesPost` | See reference |
| GitHubIntegrationConnectDetail | `create` | `POST integrationGithubCommitCreate` | See reference |
| GitHubIntegrationConnectDetail | `create` | `POST integrationJiraFetchProjectStatuses` | See reference |
| GitHubIntegrationConnectDetail | `update` | `POST integrationSlackProjectPost` | See reference |
| GitHubIntegrationConnectDetail | `update` | `POST integrationSlackCustomViewNotifications` | See reference |
| GitHubIntegrationConnectDetail | `update` | `POST integrationSlackInitiativePost` | See reference |
| GitHubIntegrationConnectDetail | `update` | `POST integrationSlackPost` | See reference |
| GitHubIntegrationConnectDetail | `update` | `POST integrationGitlabTestConnection` | See reference |
| Initiative | `create` | `POST initiativeCreate` | See reference |
| Initiative | `list` | `POST initiatives` | See reference |
| Initiative | `load` | `POST initiative` | See reference |
| Initiative | `remove` | `POST initiativeDelete` | See reference |
| Initiative | `update` | `POST initiativeAddLabel` | See reference |
| Initiative | `update` | `POST initiativeRemoveLabel` | See reference |
| Initiative | `update` | `POST initiativeArchive` | See reference |
| Initiative | `update` | `POST initiativeLeadTeamUpdate` | See reference |
| Initiative | `update` | `POST initiativeUnarchive` | See reference |
| Initiative | `update` | `POST initiativeUpdate` | See reference |
| InitiativeLabel | `create` | `POST initiativeLabelCreate` | See reference |
| InitiativeLabel | `list` | `POST initiativeLabels` | See reference |
| InitiativeLabel | `load` | `POST initiativeLabel` | See reference |
| InitiativeLabel | `remove` | `POST initiativeLabelDelete` | See reference |
| InitiativeLabel | `update` | `POST initiativeLabelRestore` | See reference |
| InitiativeLabel | `update` | `POST initiativeLabelRetire` | See reference |
| InitiativeLabel | `update` | `POST initiativeLabelUpdate` | See reference |
| InitiativeLeadTeamChangeImpact | `load` | `POST initiativeLeadTeamChangeImpact` | See reference |
| InitiativeRelation | `create` | `POST initiativeRelationCreate` | See reference |
| InitiativeRelation | `list` | `POST initiativeRelations` | See reference |
| InitiativeRelation | `load` | `POST initiativeRelation` | See reference |
| InitiativeRelation | `remove` | `POST initiativeRelationDelete` | See reference |
| InitiativeRelation | `update` | `POST initiativeRelationUpdate` | See reference |
| InitiativeToProject | `create` | `POST initiativeToProjectCreate` | See reference |
| InitiativeToProject | `list` | `POST initiativeToProjects` | See reference |
| InitiativeToProject | `load` | `POST initiativeToProject` | See reference |
| InitiativeToProject | `remove` | `POST initiativeToProjectDelete` | See reference |
| InitiativeToProject | `update` | `POST initiativeToProjectUpdate` | See reference |
| InitiativeUpdate | `create` | `POST initiativeUpdateCreate` | See reference |
| InitiativeUpdate | `list` | `POST initiativeUpdates` | See reference |
| InitiativeUpdate | `load` | `POST initiativeUpdate` | See reference |
| InitiativeUpdate | `update` | `POST initiativeUpdateArchive` | See reference |
| InitiativeUpdate | `update` | `POST initiativeUpdateUnarchive` | See reference |
| InitiativeUpdate | `update` | `POST initiativeUpdateUpdate` | See reference |
| Integration | `create` | `POST integrationSalesforce` | See reference |
| Integration | `create` | `POST integrationLaunchDarklyConnect` | See reference |
| Integration | `create` | `POST integrationDiscord` | See reference |
| Integration | `create` | `POST integrationFigma` | See reference |
| Integration | `create` | `POST integrationFront` | See reference |
| Integration | `create` | `POST integrationGong` | See reference |
| Integration | `create` | `POST integrationIntercom` | See reference |
| Integration | `create` | `POST integrationMicrosoftPersonalConnect` | See reference |
| Integration | `create` | `POST integrationMicrosoftTeams` | See reference |
| Integration | `create` | `POST integrationPagerDutyConnect` | See reference |
| Integration | `create` | `POST integrationSlack` | See reference |
| Integration | `create` | `POST integrationSlackAsks` | See reference |
| Integration | `create` | `POST integrationSlackImportEmojis` | See reference |
| Integration | `create` | `POST integrationSlackPersonal` | See reference |
| Integration | `create` | `POST integrationGitHubPersonal` | See reference |
| Integration | `create` | `POST integrationGoogleCalendarPersonalConnect` | See reference |
| Integration | `create` | `POST integrationGoogleSheets` | See reference |
| Integration | `create` | `POST integrationLaunchDarklyPersonalConnect` | See reference |
| Integration | `create` | `POST integrationMcpServerConnect` | See reference |
| Integration | `create` | `POST integrationMcpServerPersonalConnect` | See reference |
| Integration | `create` | `POST integrationOpsgenieConnect` | See reference |
| Integration | `create` | `POST integrationZendesk` | See reference |
| Integration | `create` | `POST airbyteIntegrationConnect` | See reference |
| Integration | `create` | `POST integrationCustomerDataAttributesRefresh` | See reference |
| Integration | `create` | `POST integrationIntercomDelete` | See reference |
| Integration | `create` | `POST integrationIntercomSettingsUpdate` | See reference |
| Integration | `create` | `POST jiraIntegrationConnect` | See reference |
| Integration | `create` | `POST integrationJiraPersonal` | See reference |
| Integration | `create` | `POST integrationJiraUpdate` | See reference |
| Integration | `create` | `POST integrationLoom` | See reference |
| Integration | `create` | `POST integrationOpsgenieRefreshScheduleMappings` | See reference |
| Integration | `create` | `POST integrationPagerDutyRefreshScheduleMappings` | See reference |
| Integration | `list` | `POST integrations` | See reference |
| Integration | `load` | `POST integration` | See reference |
| Integration | `remove` | `POST integrationDelete` | See reference |
| Integration | `update` | `POST integrationMicrosoftTeamsProjectPost` | See reference |
| Integration | `update` | `POST integrationDatadogConnect` | See reference |
| Integration | `update` | `POST integrationSentryConnect` | See reference |
| Integration | `update` | `POST updateIntegrationSlackScopes` | See reference |
| Integration | `update` | `POST integrationGithubConnect` | See reference |
| Integration | `update` | `POST integrationGithubImportConnect` | See reference |
| Integration | `update` | `POST integrationSlackWorkflowAccessUpdate` | See reference |
| Integration | `update` | `POST integrationArchive` | See reference |
| Integration | `update` | `POST integrationGithubImportRefresh` | See reference |
| Integration | `update` | `POST refreshGoogleSheetsData` | See reference |
| Integration | `update` | `POST integrationSalesforceMetadataRefresh` | See reference |
| Integration | `update` | `POST integrationSettingsUpdate` | See reference |
| Integration | `update` | `POST integrationUpdate` | See reference |
| IntegrationTemplate | `create` | `POST integrationTemplateCreate` | See reference |
| IntegrationTemplate | `list` | `POST integrationTemplates` | See reference |
| IntegrationTemplate | `load` | `POST integrationTemplate` | See reference |
| IntegrationTemplate | `remove` | `POST integrationTemplateDelete` | See reference |
| IntegrationsSetting | `create` | `POST integrationsSettingsCreate` | See reference |
| IntegrationsSetting | `load` | `POST integrationsSettings` | See reference |
| IntegrationsSetting | `update` | `POST integrationsSettingsUpdate` | See reference |
| Issue | `create` | `POST issueCreate` | See reference |
| Issue | `list` | `POST issueFigmaFileKeySearch` | See reference |
| Issue | `list` | `POST issueSearch` | See reference |
| Issue | `list` | `POST issues` | See reference |
| Issue | `load` | `POST issueVcsBranchSearch` | See reference |
| Issue | `load` | `POST attachmentIssue` | See reference |
| Issue | `load` | `POST issue` | See reference |
| Issue | `remove` | `POST issueDelete` | See reference |
| Issue | `update` | `POST issueAddLabel` | See reference |
| Issue | `update` | `POST issueDescriptionUpdateFromFront` | See reference |
| Issue | `update` | `POST issueReminder` | See reference |
| Issue | `update` | `POST issueRemoveLabel` | See reference |
| Issue | `update` | `POST issueShare` | See reference |
| Issue | `update` | `POST issueUnshare` | See reference |
| Issue | `update` | `POST issueArchive` | See reference |
| Issue | `update` | `POST issueExternalSyncDisable` | See reference |
| Issue | `update` | `POST issueSubscribe` | See reference |
| Issue | `update` | `POST issueUnarchive` | See reference |
| Issue | `update` | `POST issueUnsubscribe` | See reference |
| Issue | `update` | `POST issueUpdate` | See reference |
| IssueImport | `create` | `POST issueImportCreateJira` | See reference |
| IssueImport | `create` | `POST issueImportCreateAsana` | See reference |
| IssueImport | `create` | `POST issueImportCreateClubhouse` | See reference |
| IssueImport | `create` | `POST issueImportCreateCSVJira` | See reference |
| IssueImport | `create` | `POST issueImportCreateGithub` | See reference |
| IssueImport | `remove` | `POST issueImportDelete` | See reference |
| IssueImport | `update` | `POST issueImportProcess` | See reference |
| IssueImport | `update` | `POST issueImportUpdate` | See reference |
| IssueImport | `update` | `POST issueImportCreateLinearV2` | See reference |
| IssueLabel | `create` | `POST issueLabelCreate` | See reference |
| IssueLabel | `list` | `POST issueLabels` | See reference |
| IssueLabel | `load` | `POST issueLabel` | See reference |
| IssueLabel | `remove` | `POST issueLabelDelete` | See reference |
| IssueLabel | `update` | `POST issueLabelRestore` | See reference |
| IssueLabel | `update` | `POST issueLabelRetire` | See reference |
| IssueLabel | `update` | `POST issueLabelUpdate` | See reference |
| IssuePriorityValue | `list` | `POST issuePriorityValues` | See reference |
| IssueRelation | `create` | `POST issueRelationCreate` | See reference |
| IssueRelation | `list` | `POST issueRelations` | See reference |
| IssueRelation | `load` | `POST issueRelation` | See reference |
| IssueRelation | `remove` | `POST issueRelationDelete` | See reference |
| IssueRelation | `update` | `POST issueRelationUpdate` | See reference |
| IssueSearchResult | `list` | `POST searchIssues` | See reference |
| IssueToRelease | `create` | `POST issueToReleaseCreate` | See reference |
| IssueToRelease | `list` | `POST issueToReleases` | See reference |
| IssueToRelease | `load` | `POST issueToRelease` | See reference |
| IssueToRelease | `remove` | `POST issueToReleaseDelete` | See reference |
| LogoutResponse | `create` | `POST logout` | See reference |
| LogoutResponse | `create` | `POST logoutAllSessions` | See reference |
| LogoutResponse | `create` | `POST logoutOtherSessions` | See reference |
| LogoutResponse | `update` | `POST logoutSession` | See reference |
| Notification | `list` | `POST inboxNotifications` | See reference |
| Notification | `list` | `POST notifications` | See reference |
| Notification | `load` | `POST notification` | See reference |
| NotificationSubscription | `list` | `POST notificationSubscriptions` | See reference |
| NotificationSubscription | `load` | `POST notificationSubscription` | See reference |
| OAuthApplication | `create` | `POST oauthApplicationCreate` | See reference |
| OAuthApplication | `list` | `POST oauthApplications` | See reference |
| OAuthApplication | `load` | `POST oauthApplication` | See reference |
| OAuthApplication | `update` | `POST oauthApplicationUpdate` | See reference |
| Organization | `load` | `POST organization` | See reference |
| Organization | `remove` | `POST organizationDelete` | See reference |
| Organization | `update` | `POST organizationUpdate` | See reference |
| OrganizationDomain | `create` | `POST organizationDomainCreate` | See reference |
| OrganizationDomain | `create` | `POST organizationDomainVerify` | See reference |
| OrganizationDomain | `remove` | `POST organizationDomainDelete` | See reference |
| OrganizationDomain | `update` | `POST organizationDomainUpdate` | See reference |
| OrganizationInvite | `create` | `POST organizationInviteCreate` | See reference |
| OrganizationInvite | `list` | `POST organizationInvites` | See reference |
| OrganizationInvite | `load` | `POST organizationInvite` | See reference |
| OrganizationInvite | `remove` | `POST organizationInviteDelete` | See reference |
| OrganizationInvite | `update` | `POST organizationInviteUpdate` | See reference |
| OrganizationMeta | `load` | `POST organizationMeta` | See reference |
| PasskeyLoginStartResponse | `update` | `POST passkeyLoginStart` | See reference |
| Project | `create` | `POST projectCreate` | See reference |
| Project | `list` | `POST projects` | See reference |
| Project | `load` | `POST project` | See reference |
| Project | `remove` | `POST projectDelete` | See reference |
| Project | `update` | `POST projectAddLabel` | See reference |
| Project | `update` | `POST projectCreateSlackChannel` | See reference |
| Project | `update` | `POST projectExternalSyncDisable` | See reference |
| Project | `update` | `POST projectRemoveLabel` | See reference |
| Project | `update` | `POST projectArchive` | See reference |
| Project | `update` | `POST projectDismissSlackChannelCreationFailure` | See reference |
| Project | `update` | `POST projectUnarchive` | See reference |
| Project | `update` | `POST projectUpdate` | See reference |
| ProjectLabel | `create` | `POST projectLabelCreate` | See reference |
| ProjectLabel | `list` | `POST projectLabels` | See reference |
| ProjectLabel | `load` | `POST projectLabel` | See reference |
| ProjectLabel | `remove` | `POST projectLabelDelete` | See reference |
| ProjectLabel | `update` | `POST projectLabelRestore` | See reference |
| ProjectLabel | `update` | `POST projectLabelRetire` | See reference |
| ProjectLabel | `update` | `POST projectLabelUpdate` | See reference |
| ProjectMilestone | `create` | `POST projectMilestoneCreate` | See reference |
| ProjectMilestone | `list` | `POST projectMilestones` | See reference |
| ProjectMilestone | `load` | `POST projectMilestone` | See reference |
| ProjectMilestone | `remove` | `POST projectMilestoneDelete` | See reference |
| ProjectMilestone | `update` | `POST projectMilestoneUpdate` | See reference |
| ProjectMilestoneMoveProjectTeam | `update` | `POST projectMilestoneMove` | See reference |
| ProjectRelation | `create` | `POST projectRelationCreate` | See reference |
| ProjectRelation | `list` | `POST projectRelations` | See reference |
| ProjectRelation | `load` | `POST projectRelation` | See reference |
| ProjectRelation | `remove` | `POST projectRelationDelete` | See reference |
| ProjectRelation | `update` | `POST projectRelationUpdate` | See reference |
| ProjectSearchResult | `list` | `POST searchProjects` | See reference |
| ProjectStatus | `create` | `POST projectStatusCreate` | See reference |
| ProjectStatus | `list` | `POST projectStatuses` | See reference |
| ProjectStatus | `load` | `POST projectStatus` | See reference |
| ProjectStatus | `update` | `POST projectStatusArchive` | See reference |
| ProjectStatus | `update` | `POST projectStatusUnarchive` | See reference |
| ProjectStatus | `update` | `POST projectStatusUpdate` | See reference |
| ProjectUpdate | `create` | `POST projectUpdateCreate` | See reference |
| ProjectUpdate | `list` | `POST projectUpdates` | See reference |
| ProjectUpdate | `load` | `POST projectUpdate` | See reference |
| ProjectUpdate | `remove` | `POST projectUpdateDelete` | See reference |
| ProjectUpdate | `update` | `POST projectUpdateArchive` | See reference |
| ProjectUpdate | `update` | `POST projectUpdateUnarchive` | See reference |
| ProjectUpdate | `update` | `POST projectUpdateUpdate` | See reference |
| PushSubscription | `create` | `POST pushSubscriptionCreate` | See reference |
| PushSubscription | `remove` | `POST pushSubscriptionDelete` | See reference |
| Reaction | `create` | `POST reactionCreate` | See reference |
| Reaction | `remove` | `POST reactionDelete` | See reference |
| Release | `create` | `POST releaseComplete` | See reference |
| Release | `create` | `POST releaseCreate` | See reference |
| Release | `create` | `POST releaseSync` | See reference |
| Release | `create` | `POST releaseUpdateByPipeline` | See reference |
| Release | `list` | `POST releaseSearch` | See reference |
| Release | `list` | `POST releases` | See reference |
| Release | `load` | `POST release` | See reference |
| Release | `remove` | `POST releaseDelete` | See reference |
| Release | `update` | `POST releaseArchive` | See reference |
| Release | `update` | `POST releaseUnarchive` | See reference |
| Release | `update` | `POST releaseUpdate` | See reference |
| ReleaseNote | `create` | `POST releaseNoteCreate` | See reference |
| ReleaseNote | `list` | `POST releaseNotes` | See reference |
| ReleaseNote | `load` | `POST releaseNote` | See reference |
| ReleaseNote | `remove` | `POST releaseNoteDelete` | See reference |
| ReleaseNote | `update` | `POST releaseNoteUpdate` | See reference |
| ReleasePipeline | `create` | `POST releasePipelineCreate` | See reference |
| ReleasePipeline | `list` | `POST releasePipelines` | See reference |
| ReleasePipeline | `load` | `POST releasePipeline` | See reference |
| ReleasePipeline | `remove` | `POST releasePipelineDelete` | See reference |
| ReleasePipeline | `update` | `POST releasePipelineArchive` | See reference |
| ReleasePipeline | `update` | `POST releasePipelineUnarchive` | See reference |
| ReleasePipeline | `update` | `POST releasePipelineUpdate` | See reference |
| ReleaseStage | `create` | `POST releaseStageCreate` | See reference |
| ReleaseStage | `list` | `POST releaseStages` | See reference |
| ReleaseStage | `load` | `POST releaseStage` | See reference |
| ReleaseStage | `update` | `POST releaseStageArchive` | See reference |
| ReleaseStage | `update` | `POST releaseStageUnarchive` | See reference |
| ReleaseStage | `update` | `POST releaseStageUpdate` | See reference |
| Roadmap | `create` | `POST roadmapCreate` | See reference |
| Roadmap | `list` | `POST roadmaps` | See reference |
| Roadmap | `load` | `POST roadmap` | See reference |
| Roadmap | `remove` | `POST roadmapDelete` | See reference |
| Roadmap | `update` | `POST roadmapArchive` | See reference |
| Roadmap | `update` | `POST roadmapUnarchive` | See reference |
| Roadmap | `update` | `POST roadmapUpdate` | See reference |
| RoadmapToProject | `create` | `POST roadmapToProjectCreate` | See reference |
| RoadmapToProject | `list` | `POST roadmapToProjects` | See reference |
| RoadmapToProject | `load` | `POST roadmapToProject` | See reference |
| RoadmapToProject | `remove` | `POST roadmapToProjectDelete` | See reference |
| RoadmapToProject | `update` | `POST roadmapToProjectUpdate` | See reference |
| SlaConfiguration | `list` | `POST slaConfigurations` | See reference |
| SsoUrlFromEmailResponse | `load` | `POST ssoUrlFromEmail` | See reference |
| Team | `create` | `POST teamCreate` | See reference |
| Team | `list` | `POST administrableTeams` | See reference |
| Team | `list` | `POST archivedTeams` | See reference |
| Team | `list` | `POST teams` | See reference |
| Team | `load` | `POST team` | See reference |
| Team | `remove` | `POST teamDelete` | See reference |
| Team | `update` | `POST teamCyclesDelete` | See reference |
| Team | `update` | `POST teamUnarchive` | See reference |
| Team | `update` | `POST teamUpdate` | See reference |
| TeamMembership | `create` | `POST teamMembershipCreate` | See reference |
| TeamMembership | `list` | `POST teamMemberships` | See reference |
| TeamMembership | `load` | `POST teamMembership` | See reference |
| TeamMembership | `remove` | `POST teamMembershipDelete` | See reference |
| TeamMembership | `update` | `POST teamMembershipUpdate` | See reference |
| Template | `create` | `POST templateCreate` | See reference |
| Template | `list` | `POST templatesForIntegration` | See reference |
| Template | `list` | `POST templateSearch` | See reference |
| Template | `list` | `POST templates` | See reference |
| Template | `load` | `POST template` | See reference |
| Template | `remove` | `POST templateDelete` | See reference |
| Template | `update` | `POST templateUpdate` | See reference |
| TimeSchedule | `create` | `POST timeScheduleCreate` | See reference |
| TimeSchedule | `list` | `POST timeSchedules` | See reference |
| TimeSchedule | `load` | `POST timeSchedule` | See reference |
| TimeSchedule | `remove` | `POST timeScheduleDelete` | See reference |
| TimeSchedule | `update` | `POST timeScheduleUpsertExternal` | See reference |
| TimeSchedule | `update` | `POST timeScheduleRefreshIntegrationSchedule` | See reference |
| TimeSchedule | `update` | `POST timeScheduleUpdate` | See reference |
| TriageResponsibility | `create` | `POST triageResponsibilityCreate` | See reference |
| TriageResponsibility | `list` | `POST triageResponsibilities` | See reference |
| TriageResponsibility | `load` | `POST triageResponsibility` | See reference |
| TriageResponsibility | `remove` | `POST triageResponsibilityDelete` | See reference |
| TriageResponsibility | `update` | `POST triageResponsibilityUpdate` | See reference |
| UploadFile | `create` | `POST fileUpload` | See reference |
| UploadFile | `create` | `POST importFileUpload` | See reference |
| UsageAlert | `list` | `POST usageAlerts` | See reference |
| UsageAlert | `load` | `POST usageAlert` | See reference |
| User | `create` | `POST userDiscordConnect` | See reference |
| User | `create` | `POST userExternalUserDisconnect` | See reference |
| User | `list` | `POST users` | See reference |
| User | `load` | `POST user` | See reference |
| User | `load` | `POST viewer` | See reference |
| User | `update` | `POST userUpdate` | See reference |
| UserSetting | `create` | `POST notificationCategoryChannelSubscriptionUpdate` | See reference |
| UserSetting | `load` | `POST userSettings` | See reference |
| UserSetting | `update` | `POST userSettingsUpdate` | See reference |
| ViewPreference | `create` | `POST viewPreferencesCreate` | See reference |
| ViewPreference | `load` | `POST userViewPreferences` | See reference |
| ViewPreference | `remove` | `POST viewPreferencesDelete` | See reference |
| ViewPreference | `update` | `POST viewPreferencesUpdate` | See reference |
| Webhook | `create` | `POST webhookCreate` | See reference |
| Webhook | `list` | `POST webhooks` | See reference |
| Webhook | `load` | `POST webhook` | See reference |
| Webhook | `remove` | `POST webhookDelete` | See reference |
| Webhook | `update` | `POST webhookUpdate` | See reference |
| WebhookFailureEvent | `list` | `POST failuresForOauthWebhooks` | See reference |
| WebhookFailureEvent | `list` | `POST auditLogWebhookFailureEvents` | See reference |
| WorkflowState | `create` | `POST workflowStateCreate` | See reference |
| WorkflowState | `list` | `POST workflowStates` | See reference |
| WorkflowState | `load` | `POST workflowState` | See reference |
| WorkflowState | `update` | `POST workflowStateArchive` | See reference |
| WorkflowState | `update` | `POST workflowStateUpdate` | See reference |

## Connect to the API

- API server: `https://api.linear.app/graphql`

The default credential is sent in the `Authorization` header.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| C | `c/` | Build from source |
| Golang | `go/` | Build from source |
| Lua | `lua/` | Build from source |
| PHP | `php/` | Build from source |
| Python | `py/` | Build from source |
| Ruby | `rb/` | Build from source |
| TypeScript | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### Go CLI

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### Go MCP server

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `linear_list`: List records for an entity. Supported entities: `access_key_release`, `agent_activity`, `agent_session`, `agent_skill`, `attachment`, `audit_entry`, `audit_entry_type`, `authentication_session_response`, `comment`, `custom_view`, `customer`, `customer_need`, `customer_status`, `customer_tier`, `cycle`, `document`, `document_search_result`, `emoji`, `external_user`, `favorite`, `initiative`, `initiative_label`, `initiative_relation`, `initiative_to_project`, `initiative_update`, `integration`, `integration_template`, `issue`, `issue_label`, `issue_priority_value`, `issue_relation`, `issue_search_result`, `issue_to_release`, `notification`, `notification_subscription`, `o_auth_application`, `organization_invite`, `project`, `project_label`, `project_milestone`, `project_relation`, `project_search_result`, `project_status`, `project_update`, `release`, `release_note`, `release_pipeline`, `release_stage`, `roadmap`, `roadmap_to_project`, `sla_configuration`, `team`, `team_membership`, `template`, `time_schedule`, `triage_responsibility`, `usage_alert`, `user`, `webhook`, `webhook_failure_event`, `workflow_state`.
- `linear_load`: Load one record for an entity. Supported entities: `access_key_release`, `access_key_release_pipeline`, `agent_activity`, `agent_session`, `agent_skill`, `application`, `attachment`, `auth_resolver_response`, `comment`, `custom_view`, `customer`, `customer_need`, `customer_status`, `customer_tier`, `cycle`, `diff`, `document`, `email_intake_address`, `emoji`, `entity_external_link`, `external_user`, `favorite`, `initiative`, `initiative_label`, `initiative_lead_team_change_impact`, `initiative_relation`, `initiative_to_project`, `initiative_update`, `integration`, `integration_template`, `integrations_setting`, `issue`, `issue_label`, `issue_relation`, `issue_to_release`, `notification`, `notification_subscription`, `o_auth_application`, `organization`, `organization_invite`, `organization_meta`, `project`, `project_label`, `project_milestone`, `project_relation`, `project_status`, `project_update`, `release`, `release_note`, `release_pipeline`, `release_stage`, `roadmap`, `roadmap_to_project`, `sso_url_from_email_response`, `team`, `team_membership`, `template`, `time_schedule`, `triage_responsibility`, `usage_alert`, `user`, `user_setting`, `view_preference`, `webhook`, `workflow_state`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- `debug`: Request/response capture ring buffer for debugging
- `idempotency`: Idempotency keys for safe retries of mutating operations
- `metrics`: Statistics capture: per-operation counters and latency
- `paging`: Pagination signals for list operations
- `ratelimit`: Client-side rate limiting via a token bucket
- `retry`: Automatic retry of transient failures with exponential backoff
- `station`: Station control surface binding for outbound integrations
- `test`: In-memory mock transport for testing without a live server
- `timeout`: Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the first-call guide for the setup sequence.
- Read the authentication guide before using protected routes.
- Use the API reference for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

