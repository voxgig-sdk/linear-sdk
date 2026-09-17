# linear

The linear API.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 87 entities and 464 HTTP routes. There are 7 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [AccessKeyRelease](docs/api/access_key_release.html)

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `archivedAt`: The time at which the release was archived.
- `commitSha`: The Git commit SHA associated with the release.
- `completedAt`: The time at which the release was completed.
- `createdAt`: The time at which the release was created.
- `id`: The unique identifier of the release.

### [AccessKeyReleasePipeline](docs/api/access_key_release_pipeline.html)

SDK operations: `load`.

Key fields to recognise:

- `id`: The unique identifier of the release pipeline.
- `includePathPatterns`: Glob patterns used to filter commits by changed file path.

### [AgentActivity](docs/api/agent_activity.html)

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `agentSession`: The agent session this activity belongs to.
- `archivedAt`: The time at which the entity was archived.
- `contextualMetadata`: [Internal] Metadata about user-provided contextual information for this agent activity.
- `createdAt`: The time at which the entity was created.
- `ephemeral`: Whether the activity is ephemeral, and should disappear after the next agent activity.

### [AgentSession](docs/api/agent_session.html)

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `appUser`: The agent user that is associated with this agent session.
- `archivedAt`: The time at which the entity was archived.
- `codingHarnessModelLabel`: [Internal] Compact display label for the coding harness model used by this session, derived from the latest associated sandbox.
- `comment`: The comment this agent session is associated with.
- `context`: The entity contexts this session is related to, such as issues or projects referenced in direct chat sessions.

### [AgentSkill](docs/api/agent_skill.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `body`: The skill instructions in markdown format.
- `color`: The skill&#39;s color.
- `createdAt`: The time at which the entity was created.
- `creator`: The user who created the skill.

### [Application](docs/api/application.html)

SDK operations: `load`.

Key fields to recognise:

- `clientId`: OAuth application&#39;s client ID.
- `description`: Information about the application.
- `developer`: Name of the developer.
- `developerUrl`: URL of the developer&#39;s website, homepage, or documentation.
- `id`: OAuth application&#39;s ID.

### [Attachment](docs/api/attachment.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `bodyData`: The body data of the attachment, if any.
- `createdAt`: The time at which the entity was created.
- `creator`: The creator of the attachment.
- `externalUserCreator`: The non-Linear user who created the attachment.

### [AuditEntry](docs/api/audit_entry.html)

SDK operations: `list`.

Key fields to recognise:

- `actor`: The user that caused the audit entry to be created.
- `actorId`: The ID of the user that caused the audit entry to be created.
- `archivedAt`: The time at which the entity was archived.
- `countryCode`: The ISO 3166-1 alpha-2 country code derived from the request IP address.
- `createdAt`: The time at which the entity was created.

### [AuditEntryType](docs/api/audit_entry_type.html)

SDK operations: `list`.

Key fields to recognise:

- `description`: Description of the audit entry type.
- `type`: The audit entry type.

### [AuthResolverResponse](docs/api/auth_resolver_response.html)

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `allowDomainAccess`: Should the signup flow allow access for the domain.
- `email`: Email for the authenticated account.
- `id`: User account ID.
- `lastUsedOrganizationId`: ID of the organization last accessed by the user.
- `service`: The authentication service used for the current session (for example, google, email, saml).

### [AuthenticationSessionResponse](docs/api/authentication_session_response.html)

SDK operations: `list`.

Key fields to recognise:

- `browserType`: Used web browser.
- `client`: Client used for the session
- `countryCodes`: Country codes of all seen locations.
- `createdAt`: The time at which the entity was created.
- `detailedName`: Detailed name of the session including version information, derived from the user agent.

### [Comment](docs/api/comment.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `agentSession`: Agent session associated with this comment.
- `archivedAt`: The time at which the entity was archived.
- `body`: The comment content in markdown format.
- `bodyData`: [Internal] The comment content as a ProseMirror document.
- `botActor`: The bot that created the comment.

### [CreateOrJoinOrganizationResponse](docs/api/create_or_join_organization_response.html)

SDK operations: `create`, `update`.

Key fields to recognise:

- `organization`: The workspace that was created or joined.
- `user`: The user who created or joined the workspace.

### [CustomView](docs/api/custom_view.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `color`: The hex color code of the custom view icon.
- `createdAt`: The time at which the entity was created.
- `creator`: The user who originally created the custom view.
- `description`: The description of the custom view.

### [Customer](docs/api/customer.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `approximateNeedCount`: The approximate number of distinct requests associated with this customer, deduplicated per issue or project.
- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `domains`: The email domains associated with this customer (for example, &#39;acme.com&#39;).
- `externalIds`: Identifiers for this customer in external systems (for example, CRM IDs from Intercom, Salesforce, or HubSpot).

### [CustomerNeed](docs/api/customer_need.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `attachment`: The issue attachment linked to this need.
- `body`: The body content of the need in Markdown format.
- `bodyData`: [Internal] The body content of the need as a Prosemirror document JSON string.
- `comment`: An optional comment providing additional context for this need.

### [CustomerStatus](docs/api/customer_status.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `color`: The color of the status indicator in the UI, as a HEX string (for example, &#39;#ff0000&#39;).
- `createdAt`: The time at which the entity was created.
- `description`: An optional description explaining what this status represents in the customer lifecycle.
- `displayName`: The user-facing display name of the status shown in the UI.

### [CustomerTier](docs/api/customer_tier.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `color`: The color of the tier indicator in the UI, as a HEX string (for example, &#39;#ff0000&#39;).
- `createdAt`: The time at which the entity was created.
- `description`: An optional description explaining what this tier represents and its intended use for customer segmentation.
- `displayName`: The user-facing display name of the tier shown in the UI.

### [Cycle](docs/api/cycle.html)

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `autoArchivedAt`: The time at which the cycle was automatically archived by the auto-pruning process.
- `completedAt`: The completion time of the cycle.
- `completedIssueCountHistory`: The number of completed issues in the cycle after each day.
- `completedScopeHistory`: The number of completed estimation points after each day.

### [Diff](docs/api/diff.html)

SDK operations: `load`.

Key fields to recognise:

- `additions`: [Internal] The total number of added lines across the diff.
- `agentSession`: The agent session the diff belongs to.
- `archivedAt`: The time at which the entity was archived.
- `contentHash`: [Internal] The opaque content hash identifying the diff&#39;s content in code.storage.
- `createdAt`: The time at which the entity was created.

### [Document](docs/api/document.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `color`: The hex color of the document icon.
- `content`: The document&#39;s content in markdown format.
- `contentState`: [Internal] The document&#39;s content as a base64-encoded Yjs state update.
- `createdAt`: The time at which the entity was created.

### [DocumentSearchResult](docs/api/document_search_result.html)

SDK operations: `list`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `color`: The hex color of the document icon.
- `content`: The document&#39;s content in markdown format.
- `contentState`: [Internal] The document&#39;s content as a base64-encoded Yjs state update.
- `createdAt`: The time at which the entity was created.

### [EmailIntakeAddress](docs/api/email_intake_address.html)

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `address`: The unique local part (before the @) of the intake email address, used to route incoming emails to the correct intake handler.
- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `creator`: The user who created the email intake address.
- `customerRequestsEnabled`: Whether issues created from emails sent to this address are automatically converted into customer requests, linking the sender as a customer contact.

### [EmailUserAccountAuthChallengeResponse](docs/api/email_user_account_auth_challenge_response.html)

SDK operations: `create`.

Key fields to recognise:

- `authType`: Supported challenge for this user account.
- `success`: Whether the operation was successful.

### [Emoji](docs/api/emoji.html)

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `creator`: The user who created the emoji.
- `id`: The unique identifier of the entity.
- `name`: The unique name of the custom emoji within the workspace.

### [EntityExternalLink](docs/api/entity_external_link.html)

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `creator`: The user who created the link.
- `id`: The unique identifier of the entity.
- `initiative`: The initiative that the link is associated with.

### [ExternalUser](docs/api/external_user.html)

SDK operations: `list`, `load`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `avatarUrl`: A URL to the external user&#39;s avatar image.
- `createdAt`: The time at which the entity was created.
- `displayName`: The external user&#39;s display name.
- `email`: The external user&#39;s email address.

### [Favorite](docs/api/favorite.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `aiConversation`: [INTERNAL] The favorited Agent conversation.
- `archivedAt`: The time at which the entity was archived.
- `color`: [Internal] Returns the color of the favorite&#39;s icon.
- `createdAt`: The time at which the entity was created.
- `customView`: The favorited custom view.

### [GitAutomationState](docs/api/git_automation_state.html)

SDK operations: `create`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `event`: The Git event that triggers this automation rule (for example, branch created, PR opened for review, or PR merged).
- `id`: The unique identifier of the entity.
- `state`: The workflow state that linked issues will be transitioned to when the Git event fires.

### [GitAutomationTargetBranch](docs/api/git_automation_target_branch.html)

SDK operations: `create`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `branchPattern`: The branch name or pattern to match against pull request target branches.
- `createdAt`: The time at which the entity was created.
- `id`: The unique identifier of the entity.
- `isRegex`: Whether the branch pattern should be interpreted as a regular expression.

### [GitHubIntegrationConnectDetail](docs/api/git_hub_integration_connect_detail.html)

SDK operations: `create`, `update`.

Key fields to recognise:

- `lostRepositoryNames`: Full names (&#39;owner/repo&#39;) of repositories whose existing GitHub Issues sync mappings would become inaccessible if the new GitHub App installation replaces the existing one.

### [Initiative](docs/api/initiative.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `canceledAt`: [Internal] The time at which the initiative was moved into Canceled status.
- `color`: The initiative&#39;s color.
- `completedAt`: The time at which the initiative was moved into Completed status.
- `content`: The initiative&#39;s content in markdown format.

### [InitiativeLabel](docs/api/initiative_label.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `color`: The label&#39;s color as a HEX string (for example, &#39;#EB5757&#39;).
- `createdAt`: The time at which the entity was created.
- `creator`: The user who created the label.
- `description`: The label&#39;s description.

### [InitiativeLeadTeamChangeImpact](docs/api/initiative_lead_team_change_impact.html)

SDK operations: `load`.

Key fields to recognise:

- `affectedDescendantCount`: The number of editable matching sub-initiatives whose lead team would change if the update is applied to descendants.
- `visibilityMayChange`: Whether the changed initiatives may gain or lose access restrictions because the current or next lead team is not public.

### [InitiativeRelation](docs/api/initiative_relation.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `id`: The unique identifier of the entity.
- `initiative`: The parent initiative in this hierarchical relation.
- `relatedInitiative`: The child initiative in this hierarchical relation.

### [InitiativeToProject](docs/api/initiative_to_project.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `id`: The unique identifier of the entity.
- `initiative`: The initiative that the project is associated with.
- `project`: The project that the initiative is associated with.

### [InitiativeUpdate](docs/api/initiative_update.html)

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `body`: The update content in markdown format.
- `bodyData`: [Internal] The content of the update as a Prosemirror document.
- `commentCount`: Number of comments associated with the initiative update.
- `createdAt`: The time at which the entity was created.

### [Integration](docs/api/integration.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `creator`: The user that added the integration.
- `id`: The unique identifier of the entity.
- `organization`: The workspace that the integration is associated with.

### [IntegrationTemplate](docs/api/integration_template.html)

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `foreignEntityId`: The identifier of the foreign entity in the external service that this template is scoped to.
- `id`: The unique identifier of the entity.
- `integration`: The integration that the template is associated with.

### [IntegrationsSetting](docs/api/integrations_setting.html)

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `contextViewType`: The type of view to which the integration settings context is associated with.
- `createdAt`: The time at which the entity was created.
- `id`: The unique identifier of the entity.
- `initiative`: Initiative which those settings apply to.

### [Issue](docs/api/issue.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `activitySummary`: [Internal] The activity summary information for this issue.
- `addedToCycleAt`: The time at which the issue was added to a cycle.
- `addedToProjectAt`: The time at which the issue was added to a project.
- `addedToTeamAt`: The time at which the issue was added to a team.
- `archivedAt`: The time at which the entity was archived.

### [IssueImport](docs/api/issue_import.html)

SDK operations: `create`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `creatorId`: Identifier of the user who started the import job.
- `csvFileUrl`: File URL for the uploaded CSV for the import, if there is one.
- `displayName`: The display name of the import service.

### [IssueLabel](docs/api/issue_label.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `color`: The label&#39;s color as a HEX string (for example, &#39;#EB5757&#39;).
- `createdAt`: The time at which the entity was created.
- `creator`: The user who created the label.
- `description`: The label&#39;s description.

### [IssuePriorityValue](docs/api/issue_priority_value.html)

SDK operations: `list`.

Key fields to recognise:

- `label`: Priority&#39;s label.
- `priority`: Priority&#39;s number value.

### [IssueRelation](docs/api/issue_relation.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `id`: The unique identifier of the entity.
- `issue`: The source issue whose relationship is being described.
- `relatedIssue`: The target issue that the source issue is related to.

### [IssueSearchResult](docs/api/issue_search_result.html)

SDK operations: `list`.

Key fields to recognise:

- `activitySummary`: [Internal] The activity summary information for this issue.
- `addedToCycleAt`: The time at which the issue was added to a cycle.
- `addedToProjectAt`: The time at which the issue was added to a project.
- `addedToTeamAt`: The time at which the issue was added to a team.
- `archivedAt`: The time at which the entity was archived.

### [IssueToRelease](docs/api/issue_to_release.html)

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `id`: The unique identifier of the entity.
- `issue`: The issue that is linked to the release.
- `release`: The release that the issue is linked to.

### [LogoutResponse](docs/api/logout_response.html)

SDK operations: `create`, `update`.

Key fields to recognise:

- `success`: Whether the operation was successful.

### [Notification](docs/api/notification.html)

SDK operations: `list`, `load`.

Key fields to recognise:

- `actor`: The user that caused the notification.
- `actorAvatarColor`: [Internal] Notification actor initials if avatar is not available.
- `actorAvatarUrl`: [Internal] Notification avatar URL.
- `actorInactive`: [Internal] Whether the notification&#39;s user actor is deactivated in the workspace.
- `actorInitials`: [Internal] Notification actor initials if avatar is not available.

### [NotificationSubscription](docs/api/notification_subscription.html)

SDK operations: `list`, `load`.

Key fields to recognise:

- `active`: Whether the subscription is active.
- `archivedAt`: The time at which the entity was archived.
- `contextViewType`: The type of contextual view (for example, active issues, backlog) that further scopes a team notification subscription.
- `createdAt`: The time at which the entity was created.
- `customView`: The custom view that this notification subscription is scoped to.

### [OAuthApplication](docs/api/o_auth_application.html)

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `clientId`: The client ID used during OAuth authorization flows.
- `createdAt`: The time at which the OAuth application was created.
- `description`: User-facing description of the OAuth application.
- `developer`: Name of the developer or company that built the OAuth application.
- `developerUrl`: URL of the developer&#39;s website, homepage, or documentation.

### [Organization](docs/api/organization.html)

SDK operations: `load`, `remove`, `update`.

Key fields to recognise:

- `agentAutomationEnabled`: [INTERNAL] Whether the workspace has enabled agent automation.
- `aiAddonEnabled`: [INTERNAL] Whether the workspace has enabled the AI add-on (which at this point only includes triage suggestions).
- `aiDiscussionSummariesEnabled`: Whether the workspace has enabled AI discussion summaries for issues.
- `aiProviderConfiguration`: [INTERNAL] Configure per-modality AI host providers and model families.
- `aiTelemetryEnabled`: [INTERNAL] Whether the workspace has opted in to AI telemetry.

### [OrganizationDomain](docs/api/organization_domain.html)

SDK operations: `create`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `authType`: The authentication type this domain is used for.
- `claimed`: Whether the domain was claimed by the workspace through DNS TXT record verification.
- `createdAt`: The time at which the entity was created.
- `creator`: The user who added the domain.

### [OrganizationInvite](docs/api/organization_invite.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `acceptedAt`: The time at which the invite was accepted by the invitee.
- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `email`: The email address of the person being invited to the workspace.
- `expiresAt`: The time at which the invite will expire and can no longer be accepted.

### [OrganizationMeta](docs/api/organization_meta.html)

SDK operations: `load`.

Key fields to recognise:

- `allowedAuthServices`: Allowed authentication providers, empty array means all are allowed.
- `region`: The region the workspace is hosted in.

### [PasskeyLoginStartResponse](docs/api/passkey_login_start_response.html)

SDK operations: `update`.

Key fields to recognise:

- `options`: The passkey authentication options to pass to the WebAuthn API.
- `success`: Whether the operation was successful.

### [Project](docs/api/project.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `autoArchivedAt`: The time at which the project was automatically archived by the auto-pruning process.
- `canceledAt`: The time at which the project was moved into a canceled status.
- `color`: The project&#39;s color as a HEX string.
- `completedAt`: The time at which the project was moved into a completed status.

### [ProjectLabel](docs/api/project_label.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `color`: The label&#39;s color as a HEX string (for example, &#39;#EB5757&#39;).
- `createdAt`: The time at which the entity was created.
- `creator`: The user who created the label.
- `description`: The label&#39;s description.

### [ProjectMilestone](docs/api/project_milestone.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `currentProgress`: [Internal] The current progress of the milestone, broken down by issue status category.
- `description`: The project milestone&#39;s description in markdown format.
- `descriptionState`: [Internal] The project milestone&#39;s description as YJS state.

### [ProjectMilestoneMoveProjectTeam](docs/api/project_milestone_move_project_team.html)

SDK operations: `update`.

Key fields to recognise:

- `projectId`: The project id
- `teamIds`: The team ids for the project

### [ProjectRelation](docs/api/project_relation.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `anchorType`: The type of anchor on the source project end of the relation, indicating whether it is anchored to the project itself or a specific milestone.
- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `id`: The unique identifier of the entity.
- `project`: The source project in the dependency relation.

### [ProjectSearchResult](docs/api/project_search_result.html)

SDK operations: `list`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `autoArchivedAt`: The time at which the project was automatically archived by the auto-pruning process.
- `canceledAt`: The time at which the project was moved into a canceled status.
- `color`: The project&#39;s color as a HEX string.
- `completedAt`: The time at which the project was moved into a completed status.

### [ProjectStatus](docs/api/project_status.html)

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `color`: The color of the status as a HEX string, used for display in the UI.
- `createdAt`: The time at which the entity was created.
- `description`: Description of the status.
- `id`: The unique identifier of the entity.

### [ProjectUpdate](docs/api/project_update.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `body`: The update content in markdown format.
- `bodyData`: [Internal] The content of the update as a Prosemirror document.
- `commentCount`: Number of comments associated with the project update.
- `createdAt`: The time at which the entity was created.

### [PushSubscription](docs/api/push_subscription.html)

SDK operations: `create`, `remove`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `id`: The unique identifier of the entity.
- `updatedAt`: The last time at which the entity was meaningfully updated.

### [Reaction](docs/api/reaction.html)

SDK operations: `create`, `remove`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `comment`: The comment that the reaction is associated with.
- `createdAt`: The time at which the entity was created.
- `emoji`: The name of the emoji used for this reaction.
- `externalUser`: The external user that created the reaction through an integration.

### [Release](docs/api/release.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `autoArchivedAt`: The time at which the release was automatically archived by the auto pruning process.
- `canceledAt`: The time at which the release was canceled.
- `commitSha`: The Git commit SHA associated with this release.
- `completedAt`: The time at which the release was completed.

### [ReleaseNote](docs/api/release_note.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `documentContent`: Document content backing the release note body.
- `firstRelease`: The earliest release covered by this note.
- `generationStatus`: Generation status when these release notes are being auto-generated: `pending` while the LLM call is running, `completed` once it lands.

### [ReleasePipeline](docs/api/release_pipeline.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `approximateReleaseCount`: The approximate number of non-archived releases in this pipeline.
- `archivedAt`: The time at which the entity was archived.
- `autoGenerateReleaseNotesOnCompletion`: Whether to automatically generate a release note when a release is completed.
- `createdAt`: The time at which the entity was created.
- `id`: The unique identifier of the entity.

### [ReleaseStage](docs/api/release_stage.html)

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `color`: The display color of the stage as a HEX string (for example, &#39;#0f783c&#39;), used for visual representation in the UI.
- `createdAt`: The time at which the entity was created.
- `frozen`: Whether this stage is frozen.
- `id`: The unique identifier of the entity.

### [Roadmap](docs/api/roadmap.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `color`: The roadmap&#39;s color.
- `createdAt`: The time at which the entity was created.
- `creator`: The user who created the roadmap.
- `description`: The description of the roadmap.

### [RoadmapToProject](docs/api/roadmap_to_project.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `id`: The unique identifier of the entity.
- `project`: The project that the roadmap is associated with.
- `roadmap`: The roadmap that the project is associated with.

### [SlaConfiguration](docs/api/sla_configuration.html)

SDK operations: `list`.

Key fields to recognise:

- `conditions`: The workflow conditions that determine when this SLA rule applies.
- `id`: The identifier of the SLA rule.
- `name`: The name of the SLA rule.
- `removesSla`: Whether the rule removes an SLA instead of setting one.
- `sla`: The SLA value configured by the rule, expressed in milliseconds or business days depending on the day-count type.

### [SsoUrlFromEmailResponse](docs/api/sso_url_from_email_response.html)

SDK operations: `load`.

Key fields to recognise:

- `samlSsoUrl`: SAML SSO sign-in URL.
- `success`: Whether the operation was successful.

### [Team](docs/api/team.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `activeCycle`: Team&#39;s currently active cycle.
- `aiDiscussionSummariesEnabled`: Whether to enable AI discussion summaries for issues in this team.
- `aiThreadSummariesEnabled`: Whether to enable resolved thread AI summaries.
- `allMembersCanJoin`: Whether all members in the workspace can join the team.
- `archivedAt`: The time at which the entity was archived.

### [TeamMembership](docs/api/team_membership.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `id`: The unique identifier of the entity.
- `owner`: Whether the user is an owner of the team.
- `sortOrder`: The sort order of this team in the user&#39;s personal team list.

### [Template](docs/api/template.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `color`: The hex color of the template icon.
- `content`: The template&#39;s content in markdown format: the body it pre-fills on the entity it creates.
- `createdAt`: The time at which the entity was created.
- `creator`: The user who created the template.

### [TimeSchedule](docs/api/time_schedule.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `externalId`: The identifier of the external schedule.
- `externalUrl`: The URL to the external schedule.
- `id`: The unique identifier of the entity.

### [TriageResponsibility](docs/api/triage_responsibility.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `action`: The action to take when an issue is added to triage.
- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `currentUser`: The user currently responsible for triage.
- `id`: The unique identifier of the entity.

### [UploadFile](docs/api/upload_file.html)

SDK operations: `create`.

Key fields to recognise:

- `assetUrl`: The permanent asset URL where the file will be accessible after upload.
- `contentType`: The content type.
- `filename`: The filename.
- `metaData`: Optional metadata associated with the upload, such as the related issue or comment ID.
- `size`: The size of the uploaded file.

### [UsageAlert](docs/api/usage_alert.html)

SDK operations: `list`, `load`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `id`: The unique identifier of the entity.
- `metadata`: Type-specific snapshot captured when the alert was triggered, keyed by the alert type, for example the credit balance and threshold for a lowBalance alert.
- `resolvedAt`: The time when the usage alert was resolved or archived.

### [User](docs/api/user.html)

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `active`: Whether the user account is active or disabled (suspended).
- `admin`: Whether the user is a workspace administrator.
- `app`: Whether the user is an app.
- `archivedAt`: The time at which the entity was archived.
- `avatarBackgroundColor`: The background color of the avatar for users without set avatar.

### [UserSetting](docs/api/user_setting.html)

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `autoAssignToSelf`: Whether to auto-assign newly created issues to the current user by default.
- `calendarHash`: A unique hash for the user, used to construct secure calendar subscription URLs.
- `createdAt`: The time at which the entity was created.
- `feedLastSeenTime`: The user&#39;s last seen time for the pulse feed.

### [ViewPreference](docs/api/view_preference.html)

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `id`: The unique identifier of the entity.
- `type`: The type of view preferences: &quot;organization&quot; for workspace-wide defaults or &quot;user&quot; for personal overrides.
- `updatedAt`: The last time at which the entity was meaningfully updated.

### [Webhook](docs/api/webhook.html)

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `allPublicTeams`: Whether the webhook receives events from all public (non-private) teams in the organization, including teams created after the webhook was set up.
- `archivedAt`: The time at which the entity was archived.
- `createdAt`: The time at which the entity was created.
- `creator`: The user who created the webhook.
- `enabled`: Whether the webhook is enabled.

### [WebhookFailureEvent](docs/api/webhook_failure_event.html)

SDK operations: `list`.

Key fields to recognise:

- `createdAt`: The time at which the entity was created.
- `executionId`: A stable identifier for the webhook delivery attempt.
- `httpStatus`: The HTTP status code returned by the webhook recipient.
- `id`: The unique identifier of the entity.
- `responseOrError`: The HTTP response body returned by the recipient, or the error message if the request failed before receiving a response.

### [WorkflowState](docs/api/workflow_state.html)

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
| [AccessKeyRelease](docs/api/access_key_release.html) | `create` | `POST releaseCompleteByAccessKey` | See reference |
| [AccessKeyRelease](docs/api/access_key_release.html) | `create` | `POST releaseSyncByAccessKey` | See reference |
| [AccessKeyRelease](docs/api/access_key_release.html) | `create` | `POST releaseUpdateByPipelineByAccessKey` | See reference |
| [AccessKeyRelease](docs/api/access_key_release.html) | `list` | `POST recentReleasesByAccessKey` | See reference |
| [AccessKeyRelease](docs/api/access_key_release.html) | `load` | `POST latestReleaseByAccessKey` | See reference |
| [AccessKeyReleasePipeline](docs/api/access_key_release_pipeline.html) | `load` | `POST releasePipelineByAccessKey` | See reference |
| [AgentActivity](docs/api/agent_activity.html) | `create` | `POST agentActivityCreate` | See reference |
| [AgentActivity](docs/api/agent_activity.html) | `create` | `POST agentActivityCreatePrompt` | See reference |
| [AgentActivity](docs/api/agent_activity.html) | `list` | `POST agentActivities` | See reference |
| [AgentActivity](docs/api/agent_activity.html) | `load` | `POST agentActivity` | See reference |
| [AgentActivity](docs/api/agent_activity.html) | `update` | `POST agentActivityDeleteQueued` | See reference |
| [AgentActivity](docs/api/agent_activity.html) | `update` | `POST agentActivitySendQueued` | See reference |
| [AgentSession](docs/api/agent_session.html) | `create` | `POST agentSessionCreate` | See reference |
| [AgentSession](docs/api/agent_session.html) | `create` | `POST agentSessionCreateOnComment` | See reference |
| [AgentSession](docs/api/agent_session.html) | `create` | `POST agentSessionCreateOnIssue` | See reference |
| [AgentSession](docs/api/agent_session.html) | `list` | `POST agentSessions` | See reference |
| [AgentSession](docs/api/agent_session.html) | `load` | `POST agentSession` | See reference |
| [AgentSession](docs/api/agent_session.html) | `update` | `POST agentSessionRestartWithDefaultModel` | See reference |
| [AgentSession](docs/api/agent_session.html) | `update` | `POST agentSessionUpdate` | See reference |
| [AgentSession](docs/api/agent_session.html) | `update` | `POST agentSessionUpdateExternalUrl` | See reference |
| [AgentSkill](docs/api/agent_skill.html) | `create` | `POST agentSkillCreate` | See reference |
| [AgentSkill](docs/api/agent_skill.html) | `list` | `POST agentSkills` | See reference |
| [AgentSkill](docs/api/agent_skill.html) | `load` | `POST agentSkill` | See reference |
| [AgentSkill](docs/api/agent_skill.html) | `remove` | `POST agentSkillDelete` | See reference |
| [AgentSkill](docs/api/agent_skill.html) | `update` | `POST agentSkillUpdate` | See reference |
| [Application](docs/api/application.html) | `load` | `POST applicationInfo` | See reference |
| [Attachment](docs/api/attachment.html) | `create` | `POST attachmentCreate` | See reference |
| [Attachment](docs/api/attachment.html) | `list` | `POST attachmentsForURL` | See reference |
| [Attachment](docs/api/attachment.html) | `list` | `POST attachments` | See reference |
| [Attachment](docs/api/attachment.html) | `load` | `POST attachment` | See reference |
| [Attachment](docs/api/attachment.html) | `remove` | `POST attachmentDelete` | See reference |
| [Attachment](docs/api/attachment.html) | `update` | `POST attachmentLinkDiscord` | See reference |
| [Attachment](docs/api/attachment.html) | `update` | `POST attachmentLinkGitLabMR` | See reference |
| [Attachment](docs/api/attachment.html) | `update` | `POST attachmentLinkFront` | See reference |
| [Attachment](docs/api/attachment.html) | `update` | `POST attachmentLinkGitHubIssue` | See reference |
| [Attachment](docs/api/attachment.html) | `update` | `POST attachmentLinkGitHubPR` | See reference |
| [Attachment](docs/api/attachment.html) | `update` | `POST attachmentLinkIntercom` | See reference |
| [Attachment](docs/api/attachment.html) | `update` | `POST attachmentLinkJiraIssue` | See reference |
| [Attachment](docs/api/attachment.html) | `update` | `POST attachmentLinkSalesforce` | See reference |
| [Attachment](docs/api/attachment.html) | `update` | `POST attachmentLinkSlack` | See reference |
| [Attachment](docs/api/attachment.html) | `update` | `POST attachmentLinkURL` | See reference |
| [Attachment](docs/api/attachment.html) | `update` | `POST attachmentLinkZendesk` | See reference |
| [Attachment](docs/api/attachment.html) | `update` | `POST attachmentSyncToSlack` | See reference |
| [Attachment](docs/api/attachment.html) | `update` | `POST attachmentUpdate` | See reference |
| [AuditEntry](docs/api/audit_entry.html) | `list` | `POST auditEntries` | See reference |
| [AuditEntryType](docs/api/audit_entry_type.html) | `list` | `POST auditEntryTypes` | See reference |
| [AuthResolverResponse](docs/api/auth_resolver_response.html) | `create` | `POST emailTokenUserAccountAuth` | See reference |
| [AuthResolverResponse](docs/api/auth_resolver_response.html) | `create` | `POST googleUserAccountAuth` | See reference |
| [AuthResolverResponse](docs/api/auth_resolver_response.html) | `create` | `POST samlTokenUserAccountAuth` | See reference |
| [AuthResolverResponse](docs/api/auth_resolver_response.html) | `load` | `POST availableUsers` | See reference |
| [AuthResolverResponse](docs/api/auth_resolver_response.html) | `update` | `POST passkeyLoginFinish` | See reference |
| [AuthenticationSessionResponse](docs/api/authentication_session_response.html) | `list` | `POST userSessions` | See reference |
| [AuthenticationSessionResponse](docs/api/authentication_session_response.html) | `list` | `POST authenticationSessions` | See reference |
| [Comment](docs/api/comment.html) | `create` | `POST commentCreate` | See reference |
| [Comment](docs/api/comment.html) | `list` | `POST comments` | See reference |
| [Comment](docs/api/comment.html) | `load` | `POST comment` | See reference |
| [Comment](docs/api/comment.html) | `remove` | `POST commentDelete` | See reference |
| [Comment](docs/api/comment.html) | `update` | `POST commentResolve` | See reference |
| [Comment](docs/api/comment.html) | `update` | `POST commentUnresolve` | See reference |
| [Comment](docs/api/comment.html) | `update` | `POST commentUpdate` | See reference |
| [CreateOrJoinOrganizationResponse](docs/api/create_or_join_organization_response.html) | `create` | `POST createOrganizationFromOnboarding` | See reference |
| [CreateOrJoinOrganizationResponse](docs/api/create_or_join_organization_response.html) | `create` | `POST joinOrganizationFromOnboarding` | See reference |
| [CreateOrJoinOrganizationResponse](docs/api/create_or_join_organization_response.html) | `update` | `POST leaveOrganization` | See reference |
| [CustomView](docs/api/custom_view.html) | `create` | `POST customViewCreate` | See reference |
| [CustomView](docs/api/custom_view.html) | `list` | `POST customViews` | See reference |
| [CustomView](docs/api/custom_view.html) | `load` | `POST customView` | See reference |
| [CustomView](docs/api/custom_view.html) | `remove` | `POST customViewDelete` | See reference |
| [CustomView](docs/api/custom_view.html) | `update` | `POST customViewUpdate` | See reference |
| [Customer](docs/api/customer.html) | `create` | `POST customerCreate` | See reference |
| [Customer](docs/api/customer.html) | `create` | `POST customerUpsert` | See reference |
| [Customer](docs/api/customer.html) | `list` | `POST customers` | See reference |
| [Customer](docs/api/customer.html) | `load` | `POST customer` | See reference |
| [Customer](docs/api/customer.html) | `remove` | `POST customerDelete` | See reference |
| [Customer](docs/api/customer.html) | `update` | `POST customerMerge` | See reference |
| [Customer](docs/api/customer.html) | `update` | `POST customerUnsync` | See reference |
| [Customer](docs/api/customer.html) | `update` | `POST customerUpdate` | See reference |
| [CustomerNeed](docs/api/customer_need.html) | `create` | `POST customerNeedCreate` | See reference |
| [CustomerNeed](docs/api/customer_need.html) | `create` | `POST customerNeedCreateFromAttachment` | See reference |
| [CustomerNeed](docs/api/customer_need.html) | `list` | `POST customerNeeds` | See reference |
| [CustomerNeed](docs/api/customer_need.html) | `load` | `POST customerNeed` | See reference |
| [CustomerNeed](docs/api/customer_need.html) | `remove` | `POST customerNeedDelete` | See reference |
| [CustomerNeed](docs/api/customer_need.html) | `update` | `POST customerNeedArchive` | See reference |
| [CustomerNeed](docs/api/customer_need.html) | `update` | `POST customerNeedUnarchive` | See reference |
| [CustomerNeed](docs/api/customer_need.html) | `update` | `POST customerNeedUpdate` | See reference |
| [CustomerStatus](docs/api/customer_status.html) | `create` | `POST customerStatusCreate` | See reference |
| [CustomerStatus](docs/api/customer_status.html) | `list` | `POST customerStatuses` | See reference |
| [CustomerStatus](docs/api/customer_status.html) | `load` | `POST customerStatus` | See reference |
| [CustomerStatus](docs/api/customer_status.html) | `remove` | `POST customerStatusDelete` | See reference |
| [CustomerStatus](docs/api/customer_status.html) | `update` | `POST customerStatusUpdate` | See reference |
| [CustomerTier](docs/api/customer_tier.html) | `create` | `POST customerTierCreate` | See reference |
| [CustomerTier](docs/api/customer_tier.html) | `list` | `POST customerTiers` | See reference |
| [CustomerTier](docs/api/customer_tier.html) | `load` | `POST customerTier` | See reference |
| [CustomerTier](docs/api/customer_tier.html) | `remove` | `POST customerTierDelete` | See reference |
| [CustomerTier](docs/api/customer_tier.html) | `update` | `POST customerTierUpdate` | See reference |
| [Cycle](docs/api/cycle.html) | `create` | `POST cycleCreate` | See reference |
| [Cycle](docs/api/cycle.html) | `create` | `POST cycleShiftAll` | See reference |
| [Cycle](docs/api/cycle.html) | `list` | `POST cycles` | See reference |
| [Cycle](docs/api/cycle.html) | `load` | `POST cycle` | See reference |
| [Cycle](docs/api/cycle.html) | `update` | `POST cycleArchive` | See reference |
| [Cycle](docs/api/cycle.html) | `update` | `POST cycleStartUpcomingCycleToday` | See reference |
| [Cycle](docs/api/cycle.html) | `update` | `POST cycleUpdate` | See reference |
| [Diff](docs/api/diff.html) | `load` | `POST diff` | See reference |
| [Document](docs/api/document.html) | `create` | `POST documentCreate` | See reference |
| [Document](docs/api/document.html) | `list` | `POST documents` | See reference |
| [Document](docs/api/document.html) | `load` | `POST document` | See reference |
| [Document](docs/api/document.html) | `remove` | `POST documentDelete` | See reference |
| [Document](docs/api/document.html) | `update` | `POST documentUnarchive` | See reference |
| [Document](docs/api/document.html) | `update` | `POST documentUpdate` | See reference |
| [DocumentSearchResult](docs/api/document_search_result.html) | `list` | `POST searchDocuments` | See reference |
| [EmailIntakeAddress](docs/api/email_intake_address.html) | `create` | `POST emailIntakeAddressCreate` | See reference |
| [EmailIntakeAddress](docs/api/email_intake_address.html) | `load` | `POST emailIntakeAddress` | See reference |
| [EmailIntakeAddress](docs/api/email_intake_address.html) | `remove` | `POST emailIntakeAddressDelete` | See reference |
| [EmailIntakeAddress](docs/api/email_intake_address.html) | `update` | `POST emailIntakeAddressRotate` | See reference |
| [EmailIntakeAddress](docs/api/email_intake_address.html) | `update` | `POST emailIntakeAddressUpdate` | See reference |
| [EmailUserAccountAuthChallengeResponse](docs/api/email_user_account_auth_challenge_response.html) | `create` | `POST emailUserAccountAuthChallenge` | See reference |
| [Emoji](docs/api/emoji.html) | `create` | `POST emojiCreate` | See reference |
| [Emoji](docs/api/emoji.html) | `list` | `POST emojis` | See reference |
| [Emoji](docs/api/emoji.html) | `load` | `POST emoji` | See reference |
| [Emoji](docs/api/emoji.html) | `remove` | `POST emojiDelete` | See reference |
| [EntityExternalLink](docs/api/entity_external_link.html) | `create` | `POST entityExternalLinkCreate` | See reference |
| [EntityExternalLink](docs/api/entity_external_link.html) | `load` | `POST entityExternalLink` | See reference |
| [EntityExternalLink](docs/api/entity_external_link.html) | `remove` | `POST entityExternalLinkDelete` | See reference |
| [EntityExternalLink](docs/api/entity_external_link.html) | `update` | `POST entityExternalLinkUpdate` | See reference |
| [ExternalUser](docs/api/external_user.html) | `list` | `POST externalUsers` | See reference |
| [ExternalUser](docs/api/external_user.html) | `load` | `POST externalUser` | See reference |
| [Favorite](docs/api/favorite.html) | `create` | `POST favoriteCreate` | See reference |
| [Favorite](docs/api/favorite.html) | `list` | `POST favorites` | See reference |
| [Favorite](docs/api/favorite.html) | `load` | `POST favorite` | See reference |
| [Favorite](docs/api/favorite.html) | `remove` | `POST favoriteDelete` | See reference |
| [Favorite](docs/api/favorite.html) | `update` | `POST favoriteUpdate` | See reference |
| [GitAutomationState](docs/api/git_automation_state.html) | `create` | `POST gitAutomationStateCreate` | See reference |
| [GitAutomationState](docs/api/git_automation_state.html) | `remove` | `POST gitAutomationStateDelete` | See reference |
| [GitAutomationState](docs/api/git_automation_state.html) | `update` | `POST gitAutomationStateUpdate` | See reference |
| [GitAutomationTargetBranch](docs/api/git_automation_target_branch.html) | `create` | `POST gitAutomationTargetBranchCreate` | See reference |
| [GitAutomationTargetBranch](docs/api/git_automation_target_branch.html) | `remove` | `POST gitAutomationTargetBranchDelete` | See reference |
| [GitAutomationTargetBranch](docs/api/git_automation_target_branch.html) | `update` | `POST gitAutomationTargetBranchUpdate` | See reference |
| [GitHubIntegrationConnectDetail](docs/api/git_hub_integration_connect_detail.html) | `create` | `POST integrationAsksConnectChannel` | See reference |
| [GitHubIntegrationConnectDetail](docs/api/git_hub_integration_connect_detail.html) | `create` | `POST integrationGitHubEnterpriseServerConnect` | See reference |
| [GitHubIntegrationConnectDetail](docs/api/git_hub_integration_connect_detail.html) | `create` | `POST integrationGitlabConnect` | See reference |
| [GitHubIntegrationConnectDetail](docs/api/git_hub_integration_connect_detail.html) | `create` | `POST integrationSlackOrgInitiativeUpdatesPost` | See reference |
| [GitHubIntegrationConnectDetail](docs/api/git_hub_integration_connect_detail.html) | `create` | `POST integrationSlackOrgProjectUpdatesPost` | See reference |
| [GitHubIntegrationConnectDetail](docs/api/git_hub_integration_connect_detail.html) | `create` | `POST integrationGithubCommitCreate` | See reference |
| [GitHubIntegrationConnectDetail](docs/api/git_hub_integration_connect_detail.html) | `create` | `POST integrationJiraFetchProjectStatuses` | See reference |
| [GitHubIntegrationConnectDetail](docs/api/git_hub_integration_connect_detail.html) | `update` | `POST integrationSlackProjectPost` | See reference |
| [GitHubIntegrationConnectDetail](docs/api/git_hub_integration_connect_detail.html) | `update` | `POST integrationSlackCustomViewNotifications` | See reference |
| [GitHubIntegrationConnectDetail](docs/api/git_hub_integration_connect_detail.html) | `update` | `POST integrationSlackInitiativePost` | See reference |
| [GitHubIntegrationConnectDetail](docs/api/git_hub_integration_connect_detail.html) | `update` | `POST integrationSlackPost` | See reference |
| [GitHubIntegrationConnectDetail](docs/api/git_hub_integration_connect_detail.html) | `update` | `POST integrationGitlabTestConnection` | See reference |
| [Initiative](docs/api/initiative.html) | `create` | `POST initiativeCreate` | See reference |
| [Initiative](docs/api/initiative.html) | `list` | `POST initiatives` | See reference |
| [Initiative](docs/api/initiative.html) | `load` | `POST initiative` | See reference |
| [Initiative](docs/api/initiative.html) | `remove` | `POST initiativeDelete` | See reference |
| [Initiative](docs/api/initiative.html) | `update` | `POST initiativeAddLabel` | See reference |
| [Initiative](docs/api/initiative.html) | `update` | `POST initiativeRemoveLabel` | See reference |
| [Initiative](docs/api/initiative.html) | `update` | `POST initiativeArchive` | See reference |
| [Initiative](docs/api/initiative.html) | `update` | `POST initiativeLeadTeamUpdate` | See reference |
| [Initiative](docs/api/initiative.html) | `update` | `POST initiativeUnarchive` | See reference |
| [Initiative](docs/api/initiative.html) | `update` | `POST initiativeUpdate` | See reference |
| [InitiativeLabel](docs/api/initiative_label.html) | `create` | `POST initiativeLabelCreate` | See reference |
| [InitiativeLabel](docs/api/initiative_label.html) | `list` | `POST initiativeLabels` | See reference |
| [InitiativeLabel](docs/api/initiative_label.html) | `load` | `POST initiativeLabel` | See reference |
| [InitiativeLabel](docs/api/initiative_label.html) | `remove` | `POST initiativeLabelDelete` | See reference |
| [InitiativeLabel](docs/api/initiative_label.html) | `update` | `POST initiativeLabelRestore` | See reference |
| [InitiativeLabel](docs/api/initiative_label.html) | `update` | `POST initiativeLabelRetire` | See reference |
| [InitiativeLabel](docs/api/initiative_label.html) | `update` | `POST initiativeLabelUpdate` | See reference |
| [InitiativeLeadTeamChangeImpact](docs/api/initiative_lead_team_change_impact.html) | `load` | `POST initiativeLeadTeamChangeImpact` | See reference |
| [InitiativeRelation](docs/api/initiative_relation.html) | `create` | `POST initiativeRelationCreate` | See reference |
| [InitiativeRelation](docs/api/initiative_relation.html) | `list` | `POST initiativeRelations` | See reference |
| [InitiativeRelation](docs/api/initiative_relation.html) | `load` | `POST initiativeRelation` | See reference |
| [InitiativeRelation](docs/api/initiative_relation.html) | `remove` | `POST initiativeRelationDelete` | See reference |
| [InitiativeRelation](docs/api/initiative_relation.html) | `update` | `POST initiativeRelationUpdate` | See reference |
| [InitiativeToProject](docs/api/initiative_to_project.html) | `create` | `POST initiativeToProjectCreate` | See reference |
| [InitiativeToProject](docs/api/initiative_to_project.html) | `list` | `POST initiativeToProjects` | See reference |
| [InitiativeToProject](docs/api/initiative_to_project.html) | `load` | `POST initiativeToProject` | See reference |
| [InitiativeToProject](docs/api/initiative_to_project.html) | `remove` | `POST initiativeToProjectDelete` | See reference |
| [InitiativeToProject](docs/api/initiative_to_project.html) | `update` | `POST initiativeToProjectUpdate` | See reference |
| [InitiativeUpdate](docs/api/initiative_update.html) | `create` | `POST initiativeUpdateCreate` | See reference |
| [InitiativeUpdate](docs/api/initiative_update.html) | `list` | `POST initiativeUpdates` | See reference |
| [InitiativeUpdate](docs/api/initiative_update.html) | `load` | `POST initiativeUpdate` | See reference |
| [InitiativeUpdate](docs/api/initiative_update.html) | `update` | `POST initiativeUpdateArchive` | See reference |
| [InitiativeUpdate](docs/api/initiative_update.html) | `update` | `POST initiativeUpdateUnarchive` | See reference |
| [InitiativeUpdate](docs/api/initiative_update.html) | `update` | `POST initiativeUpdateUpdate` | See reference |
| [Integration](docs/api/integration.html) | `create` | `POST integrationSalesforce` | See reference |
| [Integration](docs/api/integration.html) | `create` | `POST integrationLaunchDarklyConnect` | See reference |
| [Integration](docs/api/integration.html) | `create` | `POST integrationDiscord` | See reference |
| [Integration](docs/api/integration.html) | `create` | `POST integrationFigma` | See reference |
| [Integration](docs/api/integration.html) | `create` | `POST integrationFront` | See reference |
| [Integration](docs/api/integration.html) | `create` | `POST integrationGong` | See reference |
| [Integration](docs/api/integration.html) | `create` | `POST integrationIntercom` | See reference |
| [Integration](docs/api/integration.html) | `create` | `POST integrationMicrosoftPersonalConnect` | See reference |
| [Integration](docs/api/integration.html) | `create` | `POST integrationMicrosoftTeams` | See reference |
| [Integration](docs/api/integration.html) | `create` | `POST integrationPagerDutyConnect` | See reference |
| [Integration](docs/api/integration.html) | `create` | `POST integrationSlack` | See reference |
| [Integration](docs/api/integration.html) | `create` | `POST integrationSlackAsks` | See reference |
| [Integration](docs/api/integration.html) | `create` | `POST integrationSlackImportEmojis` | See reference |
| [Integration](docs/api/integration.html) | `create` | `POST integrationSlackPersonal` | See reference |
| [Integration](docs/api/integration.html) | `create` | `POST integrationGitHubPersonal` | See reference |
| [Integration](docs/api/integration.html) | `create` | `POST integrationGoogleCalendarPersonalConnect` | See reference |
| [Integration](docs/api/integration.html) | `create` | `POST integrationGoogleSheets` | See reference |
| [Integration](docs/api/integration.html) | `create` | `POST integrationLaunchDarklyPersonalConnect` | See reference |
| [Integration](docs/api/integration.html) | `create` | `POST integrationMcpServerConnect` | See reference |
| [Integration](docs/api/integration.html) | `create` | `POST integrationMcpServerPersonalConnect` | See reference |
| [Integration](docs/api/integration.html) | `create` | `POST integrationOpsgenieConnect` | See reference |
| [Integration](docs/api/integration.html) | `create` | `POST integrationZendesk` | See reference |
| [Integration](docs/api/integration.html) | `create` | `POST airbyteIntegrationConnect` | See reference |
| [Integration](docs/api/integration.html) | `create` | `POST integrationCustomerDataAttributesRefresh` | See reference |
| [Integration](docs/api/integration.html) | `create` | `POST integrationIntercomDelete` | See reference |
| [Integration](docs/api/integration.html) | `create` | `POST integrationIntercomSettingsUpdate` | See reference |
| [Integration](docs/api/integration.html) | `create` | `POST jiraIntegrationConnect` | See reference |
| [Integration](docs/api/integration.html) | `create` | `POST integrationJiraPersonal` | See reference |
| [Integration](docs/api/integration.html) | `create` | `POST integrationJiraUpdate` | See reference |
| [Integration](docs/api/integration.html) | `create` | `POST integrationLoom` | See reference |
| [Integration](docs/api/integration.html) | `create` | `POST integrationOpsgenieRefreshScheduleMappings` | See reference |
| [Integration](docs/api/integration.html) | `create` | `POST integrationPagerDutyRefreshScheduleMappings` | See reference |
| [Integration](docs/api/integration.html) | `list` | `POST integrations` | See reference |
| [Integration](docs/api/integration.html) | `load` | `POST integration` | See reference |
| [Integration](docs/api/integration.html) | `remove` | `POST integrationDelete` | See reference |
| [Integration](docs/api/integration.html) | `update` | `POST integrationMicrosoftTeamsProjectPost` | See reference |
| [Integration](docs/api/integration.html) | `update` | `POST integrationDatadogConnect` | See reference |
| [Integration](docs/api/integration.html) | `update` | `POST integrationSentryConnect` | See reference |
| [Integration](docs/api/integration.html) | `update` | `POST updateIntegrationSlackScopes` | See reference |
| [Integration](docs/api/integration.html) | `update` | `POST integrationGithubConnect` | See reference |
| [Integration](docs/api/integration.html) | `update` | `POST integrationGithubImportConnect` | See reference |
| [Integration](docs/api/integration.html) | `update` | `POST integrationSlackWorkflowAccessUpdate` | See reference |
| [Integration](docs/api/integration.html) | `update` | `POST integrationArchive` | See reference |
| [Integration](docs/api/integration.html) | `update` | `POST integrationGithubImportRefresh` | See reference |
| [Integration](docs/api/integration.html) | `update` | `POST refreshGoogleSheetsData` | See reference |
| [Integration](docs/api/integration.html) | `update` | `POST integrationSalesforceMetadataRefresh` | See reference |
| [Integration](docs/api/integration.html) | `update` | `POST integrationSettingsUpdate` | See reference |
| [Integration](docs/api/integration.html) | `update` | `POST integrationUpdate` | See reference |
| [IntegrationTemplate](docs/api/integration_template.html) | `create` | `POST integrationTemplateCreate` | See reference |
| [IntegrationTemplate](docs/api/integration_template.html) | `list` | `POST integrationTemplates` | See reference |
| [IntegrationTemplate](docs/api/integration_template.html) | `load` | `POST integrationTemplate` | See reference |
| [IntegrationTemplate](docs/api/integration_template.html) | `remove` | `POST integrationTemplateDelete` | See reference |
| [IntegrationsSetting](docs/api/integrations_setting.html) | `create` | `POST integrationsSettingsCreate` | See reference |
| [IntegrationsSetting](docs/api/integrations_setting.html) | `load` | `POST integrationsSettings` | See reference |
| [IntegrationsSetting](docs/api/integrations_setting.html) | `update` | `POST integrationsSettingsUpdate` | See reference |
| [Issue](docs/api/issue.html) | `create` | `POST issueCreate` | See reference |
| [Issue](docs/api/issue.html) | `list` | `POST issueFigmaFileKeySearch` | See reference |
| [Issue](docs/api/issue.html) | `list` | `POST issueSearch` | See reference |
| [Issue](docs/api/issue.html) | `list` | `POST issues` | See reference |
| [Issue](docs/api/issue.html) | `load` | `POST issueVcsBranchSearch` | See reference |
| [Issue](docs/api/issue.html) | `load` | `POST attachmentIssue` | See reference |
| [Issue](docs/api/issue.html) | `load` | `POST issue` | See reference |
| [Issue](docs/api/issue.html) | `remove` | `POST issueDelete` | See reference |
| [Issue](docs/api/issue.html) | `update` | `POST issueAddLabel` | See reference |
| [Issue](docs/api/issue.html) | `update` | `POST issueDescriptionUpdateFromFront` | See reference |
| [Issue](docs/api/issue.html) | `update` | `POST issueReminder` | See reference |
| [Issue](docs/api/issue.html) | `update` | `POST issueRemoveLabel` | See reference |
| [Issue](docs/api/issue.html) | `update` | `POST issueShare` | See reference |
| [Issue](docs/api/issue.html) | `update` | `POST issueUnshare` | See reference |
| [Issue](docs/api/issue.html) | `update` | `POST issueArchive` | See reference |
| [Issue](docs/api/issue.html) | `update` | `POST issueExternalSyncDisable` | See reference |
| [Issue](docs/api/issue.html) | `update` | `POST issueSubscribe` | See reference |
| [Issue](docs/api/issue.html) | `update` | `POST issueUnarchive` | See reference |
| [Issue](docs/api/issue.html) | `update` | `POST issueUnsubscribe` | See reference |
| [Issue](docs/api/issue.html) | `update` | `POST issueUpdate` | See reference |
| [IssueImport](docs/api/issue_import.html) | `create` | `POST issueImportCreateJira` | See reference |
| [IssueImport](docs/api/issue_import.html) | `create` | `POST issueImportCreateAsana` | See reference |
| [IssueImport](docs/api/issue_import.html) | `create` | `POST issueImportCreateClubhouse` | See reference |
| [IssueImport](docs/api/issue_import.html) | `create` | `POST issueImportCreateCSVJira` | See reference |
| [IssueImport](docs/api/issue_import.html) | `create` | `POST issueImportCreateGithub` | See reference |
| [IssueImport](docs/api/issue_import.html) | `remove` | `POST issueImportDelete` | See reference |
| [IssueImport](docs/api/issue_import.html) | `update` | `POST issueImportProcess` | See reference |
| [IssueImport](docs/api/issue_import.html) | `update` | `POST issueImportUpdate` | See reference |
| [IssueImport](docs/api/issue_import.html) | `update` | `POST issueImportCreateLinearV2` | See reference |
| [IssueLabel](docs/api/issue_label.html) | `create` | `POST issueLabelCreate` | See reference |
| [IssueLabel](docs/api/issue_label.html) | `list` | `POST issueLabels` | See reference |
| [IssueLabel](docs/api/issue_label.html) | `load` | `POST issueLabel` | See reference |
| [IssueLabel](docs/api/issue_label.html) | `remove` | `POST issueLabelDelete` | See reference |
| [IssueLabel](docs/api/issue_label.html) | `update` | `POST issueLabelRestore` | See reference |
| [IssueLabel](docs/api/issue_label.html) | `update` | `POST issueLabelRetire` | See reference |
| [IssueLabel](docs/api/issue_label.html) | `update` | `POST issueLabelUpdate` | See reference |
| [IssuePriorityValue](docs/api/issue_priority_value.html) | `list` | `POST issuePriorityValues` | See reference |
| [IssueRelation](docs/api/issue_relation.html) | `create` | `POST issueRelationCreate` | See reference |
| [IssueRelation](docs/api/issue_relation.html) | `list` | `POST issueRelations` | See reference |
| [IssueRelation](docs/api/issue_relation.html) | `load` | `POST issueRelation` | See reference |
| [IssueRelation](docs/api/issue_relation.html) | `remove` | `POST issueRelationDelete` | See reference |
| [IssueRelation](docs/api/issue_relation.html) | `update` | `POST issueRelationUpdate` | See reference |
| [IssueSearchResult](docs/api/issue_search_result.html) | `list` | `POST searchIssues` | See reference |
| [IssueToRelease](docs/api/issue_to_release.html) | `create` | `POST issueToReleaseCreate` | See reference |
| [IssueToRelease](docs/api/issue_to_release.html) | `list` | `POST issueToReleases` | See reference |
| [IssueToRelease](docs/api/issue_to_release.html) | `load` | `POST issueToRelease` | See reference |
| [IssueToRelease](docs/api/issue_to_release.html) | `remove` | `POST issueToReleaseDelete` | See reference |
| [LogoutResponse](docs/api/logout_response.html) | `create` | `POST logout` | See reference |
| [LogoutResponse](docs/api/logout_response.html) | `create` | `POST logoutAllSessions` | See reference |
| [LogoutResponse](docs/api/logout_response.html) | `create` | `POST logoutOtherSessions` | See reference |
| [LogoutResponse](docs/api/logout_response.html) | `update` | `POST logoutSession` | See reference |
| [Notification](docs/api/notification.html) | `list` | `POST inboxNotifications` | See reference |
| [Notification](docs/api/notification.html) | `list` | `POST notifications` | See reference |
| [Notification](docs/api/notification.html) | `load` | `POST notification` | See reference |
| [NotificationSubscription](docs/api/notification_subscription.html) | `list` | `POST notificationSubscriptions` | See reference |
| [NotificationSubscription](docs/api/notification_subscription.html) | `load` | `POST notificationSubscription` | See reference |
| [OAuthApplication](docs/api/o_auth_application.html) | `create` | `POST oauthApplicationCreate` | See reference |
| [OAuthApplication](docs/api/o_auth_application.html) | `list` | `POST oauthApplications` | See reference |
| [OAuthApplication](docs/api/o_auth_application.html) | `load` | `POST oauthApplication` | See reference |
| [OAuthApplication](docs/api/o_auth_application.html) | `update` | `POST oauthApplicationUpdate` | See reference |
| [Organization](docs/api/organization.html) | `load` | `POST organization` | See reference |
| [Organization](docs/api/organization.html) | `remove` | `POST organizationDelete` | See reference |
| [Organization](docs/api/organization.html) | `update` | `POST organizationUpdate` | See reference |
| [OrganizationDomain](docs/api/organization_domain.html) | `create` | `POST organizationDomainCreate` | See reference |
| [OrganizationDomain](docs/api/organization_domain.html) | `create` | `POST organizationDomainVerify` | See reference |
| [OrganizationDomain](docs/api/organization_domain.html) | `remove` | `POST organizationDomainDelete` | See reference |
| [OrganizationDomain](docs/api/organization_domain.html) | `update` | `POST organizationDomainUpdate` | See reference |
| [OrganizationInvite](docs/api/organization_invite.html) | `create` | `POST organizationInviteCreate` | See reference |
| [OrganizationInvite](docs/api/organization_invite.html) | `list` | `POST organizationInvites` | See reference |
| [OrganizationInvite](docs/api/organization_invite.html) | `load` | `POST organizationInvite` | See reference |
| [OrganizationInvite](docs/api/organization_invite.html) | `remove` | `POST organizationInviteDelete` | See reference |
| [OrganizationInvite](docs/api/organization_invite.html) | `update` | `POST organizationInviteUpdate` | See reference |
| [OrganizationMeta](docs/api/organization_meta.html) | `load` | `POST organizationMeta` | See reference |
| [PasskeyLoginStartResponse](docs/api/passkey_login_start_response.html) | `update` | `POST passkeyLoginStart` | See reference |
| [Project](docs/api/project.html) | `create` | `POST projectCreate` | See reference |
| [Project](docs/api/project.html) | `list` | `POST projects` | See reference |
| [Project](docs/api/project.html) | `load` | `POST project` | See reference |
| [Project](docs/api/project.html) | `remove` | `POST projectDelete` | See reference |
| [Project](docs/api/project.html) | `update` | `POST projectAddLabel` | See reference |
| [Project](docs/api/project.html) | `update` | `POST projectCreateSlackChannel` | See reference |
| [Project](docs/api/project.html) | `update` | `POST projectExternalSyncDisable` | See reference |
| [Project](docs/api/project.html) | `update` | `POST projectRemoveLabel` | See reference |
| [Project](docs/api/project.html) | `update` | `POST projectArchive` | See reference |
| [Project](docs/api/project.html) | `update` | `POST projectDismissSlackChannelCreationFailure` | See reference |
| [Project](docs/api/project.html) | `update` | `POST projectUnarchive` | See reference |
| [Project](docs/api/project.html) | `update` | `POST projectUpdate` | See reference |
| [ProjectLabel](docs/api/project_label.html) | `create` | `POST projectLabelCreate` | See reference |
| [ProjectLabel](docs/api/project_label.html) | `list` | `POST projectLabels` | See reference |
| [ProjectLabel](docs/api/project_label.html) | `load` | `POST projectLabel` | See reference |
| [ProjectLabel](docs/api/project_label.html) | `remove` | `POST projectLabelDelete` | See reference |
| [ProjectLabel](docs/api/project_label.html) | `update` | `POST projectLabelRestore` | See reference |
| [ProjectLabel](docs/api/project_label.html) | `update` | `POST projectLabelRetire` | See reference |
| [ProjectLabel](docs/api/project_label.html) | `update` | `POST projectLabelUpdate` | See reference |
| [ProjectMilestone](docs/api/project_milestone.html) | `create` | `POST projectMilestoneCreate` | See reference |
| [ProjectMilestone](docs/api/project_milestone.html) | `list` | `POST projectMilestones` | See reference |
| [ProjectMilestone](docs/api/project_milestone.html) | `load` | `POST projectMilestone` | See reference |
| [ProjectMilestone](docs/api/project_milestone.html) | `remove` | `POST projectMilestoneDelete` | See reference |
| [ProjectMilestone](docs/api/project_milestone.html) | `update` | `POST projectMilestoneUpdate` | See reference |
| [ProjectMilestoneMoveProjectTeam](docs/api/project_milestone_move_project_team.html) | `update` | `POST projectMilestoneMove` | See reference |
| [ProjectRelation](docs/api/project_relation.html) | `create` | `POST projectRelationCreate` | See reference |
| [ProjectRelation](docs/api/project_relation.html) | `list` | `POST projectRelations` | See reference |
| [ProjectRelation](docs/api/project_relation.html) | `load` | `POST projectRelation` | See reference |
| [ProjectRelation](docs/api/project_relation.html) | `remove` | `POST projectRelationDelete` | See reference |
| [ProjectRelation](docs/api/project_relation.html) | `update` | `POST projectRelationUpdate` | See reference |
| [ProjectSearchResult](docs/api/project_search_result.html) | `list` | `POST searchProjects` | See reference |
| [ProjectStatus](docs/api/project_status.html) | `create` | `POST projectStatusCreate` | See reference |
| [ProjectStatus](docs/api/project_status.html) | `list` | `POST projectStatuses` | See reference |
| [ProjectStatus](docs/api/project_status.html) | `load` | `POST projectStatus` | See reference |
| [ProjectStatus](docs/api/project_status.html) | `update` | `POST projectStatusArchive` | See reference |
| [ProjectStatus](docs/api/project_status.html) | `update` | `POST projectStatusUnarchive` | See reference |
| [ProjectStatus](docs/api/project_status.html) | `update` | `POST projectStatusUpdate` | See reference |
| [ProjectUpdate](docs/api/project_update.html) | `create` | `POST projectUpdateCreate` | See reference |
| [ProjectUpdate](docs/api/project_update.html) | `list` | `POST projectUpdates` | See reference |
| [ProjectUpdate](docs/api/project_update.html) | `load` | `POST projectUpdate` | See reference |
| [ProjectUpdate](docs/api/project_update.html) | `remove` | `POST projectUpdateDelete` | See reference |
| [ProjectUpdate](docs/api/project_update.html) | `update` | `POST projectUpdateArchive` | See reference |
| [ProjectUpdate](docs/api/project_update.html) | `update` | `POST projectUpdateUnarchive` | See reference |
| [ProjectUpdate](docs/api/project_update.html) | `update` | `POST projectUpdateUpdate` | See reference |
| [PushSubscription](docs/api/push_subscription.html) | `create` | `POST pushSubscriptionCreate` | See reference |
| [PushSubscription](docs/api/push_subscription.html) | `remove` | `POST pushSubscriptionDelete` | See reference |
| [Reaction](docs/api/reaction.html) | `create` | `POST reactionCreate` | See reference |
| [Reaction](docs/api/reaction.html) | `remove` | `POST reactionDelete` | See reference |
| [Release](docs/api/release.html) | `create` | `POST releaseComplete` | See reference |
| [Release](docs/api/release.html) | `create` | `POST releaseCreate` | See reference |
| [Release](docs/api/release.html) | `create` | `POST releaseSync` | See reference |
| [Release](docs/api/release.html) | `create` | `POST releaseUpdateByPipeline` | See reference |
| [Release](docs/api/release.html) | `list` | `POST releaseSearch` | See reference |
| [Release](docs/api/release.html) | `list` | `POST releases` | See reference |
| [Release](docs/api/release.html) | `load` | `POST release` | See reference |
| [Release](docs/api/release.html) | `remove` | `POST releaseDelete` | See reference |
| [Release](docs/api/release.html) | `update` | `POST releaseArchive` | See reference |
| [Release](docs/api/release.html) | `update` | `POST releaseUnarchive` | See reference |
| [Release](docs/api/release.html) | `update` | `POST releaseUpdate` | See reference |
| [ReleaseNote](docs/api/release_note.html) | `create` | `POST releaseNoteCreate` | See reference |
| [ReleaseNote](docs/api/release_note.html) | `list` | `POST releaseNotes` | See reference |
| [ReleaseNote](docs/api/release_note.html) | `load` | `POST releaseNote` | See reference |
| [ReleaseNote](docs/api/release_note.html) | `remove` | `POST releaseNoteDelete` | See reference |
| [ReleaseNote](docs/api/release_note.html) | `update` | `POST releaseNoteUpdate` | See reference |
| [ReleasePipeline](docs/api/release_pipeline.html) | `create` | `POST releasePipelineCreate` | See reference |
| [ReleasePipeline](docs/api/release_pipeline.html) | `list` | `POST releasePipelines` | See reference |
| [ReleasePipeline](docs/api/release_pipeline.html) | `load` | `POST releasePipeline` | See reference |
| [ReleasePipeline](docs/api/release_pipeline.html) | `remove` | `POST releasePipelineDelete` | See reference |
| [ReleasePipeline](docs/api/release_pipeline.html) | `update` | `POST releasePipelineArchive` | See reference |
| [ReleasePipeline](docs/api/release_pipeline.html) | `update` | `POST releasePipelineUnarchive` | See reference |
| [ReleasePipeline](docs/api/release_pipeline.html) | `update` | `POST releasePipelineUpdate` | See reference |
| [ReleaseStage](docs/api/release_stage.html) | `create` | `POST releaseStageCreate` | See reference |
| [ReleaseStage](docs/api/release_stage.html) | `list` | `POST releaseStages` | See reference |
| [ReleaseStage](docs/api/release_stage.html) | `load` | `POST releaseStage` | See reference |
| [ReleaseStage](docs/api/release_stage.html) | `update` | `POST releaseStageArchive` | See reference |
| [ReleaseStage](docs/api/release_stage.html) | `update` | `POST releaseStageUnarchive` | See reference |
| [ReleaseStage](docs/api/release_stage.html) | `update` | `POST releaseStageUpdate` | See reference |
| [Roadmap](docs/api/roadmap.html) | `create` | `POST roadmapCreate` | See reference |
| [Roadmap](docs/api/roadmap.html) | `list` | `POST roadmaps` | See reference |
| [Roadmap](docs/api/roadmap.html) | `load` | `POST roadmap` | See reference |
| [Roadmap](docs/api/roadmap.html) | `remove` | `POST roadmapDelete` | See reference |
| [Roadmap](docs/api/roadmap.html) | `update` | `POST roadmapArchive` | See reference |
| [Roadmap](docs/api/roadmap.html) | `update` | `POST roadmapUnarchive` | See reference |
| [Roadmap](docs/api/roadmap.html) | `update` | `POST roadmapUpdate` | See reference |
| [RoadmapToProject](docs/api/roadmap_to_project.html) | `create` | `POST roadmapToProjectCreate` | See reference |
| [RoadmapToProject](docs/api/roadmap_to_project.html) | `list` | `POST roadmapToProjects` | See reference |
| [RoadmapToProject](docs/api/roadmap_to_project.html) | `load` | `POST roadmapToProject` | See reference |
| [RoadmapToProject](docs/api/roadmap_to_project.html) | `remove` | `POST roadmapToProjectDelete` | See reference |
| [RoadmapToProject](docs/api/roadmap_to_project.html) | `update` | `POST roadmapToProjectUpdate` | See reference |
| [SlaConfiguration](docs/api/sla_configuration.html) | `list` | `POST slaConfigurations` | See reference |
| [SsoUrlFromEmailResponse](docs/api/sso_url_from_email_response.html) | `load` | `POST ssoUrlFromEmail` | See reference |
| [Team](docs/api/team.html) | `create` | `POST teamCreate` | See reference |
| [Team](docs/api/team.html) | `list` | `POST administrableTeams` | See reference |
| [Team](docs/api/team.html) | `list` | `POST archivedTeams` | See reference |
| [Team](docs/api/team.html) | `list` | `POST teams` | See reference |
| [Team](docs/api/team.html) | `load` | `POST team` | See reference |
| [Team](docs/api/team.html) | `remove` | `POST teamDelete` | See reference |
| [Team](docs/api/team.html) | `update` | `POST teamCyclesDelete` | See reference |
| [Team](docs/api/team.html) | `update` | `POST teamUnarchive` | See reference |
| [Team](docs/api/team.html) | `update` | `POST teamUpdate` | See reference |
| [TeamMembership](docs/api/team_membership.html) | `create` | `POST teamMembershipCreate` | See reference |
| [TeamMembership](docs/api/team_membership.html) | `list` | `POST teamMemberships` | See reference |
| [TeamMembership](docs/api/team_membership.html) | `load` | `POST teamMembership` | See reference |
| [TeamMembership](docs/api/team_membership.html) | `remove` | `POST teamMembershipDelete` | See reference |
| [TeamMembership](docs/api/team_membership.html) | `update` | `POST teamMembershipUpdate` | See reference |
| [Template](docs/api/template.html) | `create` | `POST templateCreate` | See reference |
| [Template](docs/api/template.html) | `list` | `POST templatesForIntegration` | See reference |
| [Template](docs/api/template.html) | `list` | `POST templateSearch` | See reference |
| [Template](docs/api/template.html) | `list` | `POST templates` | See reference |
| [Template](docs/api/template.html) | `load` | `POST template` | See reference |
| [Template](docs/api/template.html) | `remove` | `POST templateDelete` | See reference |
| [Template](docs/api/template.html) | `update` | `POST templateUpdate` | See reference |
| [TimeSchedule](docs/api/time_schedule.html) | `create` | `POST timeScheduleCreate` | See reference |
| [TimeSchedule](docs/api/time_schedule.html) | `list` | `POST timeSchedules` | See reference |
| [TimeSchedule](docs/api/time_schedule.html) | `load` | `POST timeSchedule` | See reference |
| [TimeSchedule](docs/api/time_schedule.html) | `remove` | `POST timeScheduleDelete` | See reference |
| [TimeSchedule](docs/api/time_schedule.html) | `update` | `POST timeScheduleUpsertExternal` | See reference |
| [TimeSchedule](docs/api/time_schedule.html) | `update` | `POST timeScheduleRefreshIntegrationSchedule` | See reference |
| [TimeSchedule](docs/api/time_schedule.html) | `update` | `POST timeScheduleUpdate` | See reference |
| [TriageResponsibility](docs/api/triage_responsibility.html) | `create` | `POST triageResponsibilityCreate` | See reference |
| [TriageResponsibility](docs/api/triage_responsibility.html) | `list` | `POST triageResponsibilities` | See reference |
| [TriageResponsibility](docs/api/triage_responsibility.html) | `load` | `POST triageResponsibility` | See reference |
| [TriageResponsibility](docs/api/triage_responsibility.html) | `remove` | `POST triageResponsibilityDelete` | See reference |
| [TriageResponsibility](docs/api/triage_responsibility.html) | `update` | `POST triageResponsibilityUpdate` | See reference |
| [UploadFile](docs/api/upload_file.html) | `create` | `POST fileUpload` | See reference |
| [UploadFile](docs/api/upload_file.html) | `create` | `POST importFileUpload` | See reference |
| [UsageAlert](docs/api/usage_alert.html) | `list` | `POST usageAlerts` | See reference |
| [UsageAlert](docs/api/usage_alert.html) | `load` | `POST usageAlert` | See reference |
| [User](docs/api/user.html) | `create` | `POST userDiscordConnect` | See reference |
| [User](docs/api/user.html) | `create` | `POST userExternalUserDisconnect` | See reference |
| [User](docs/api/user.html) | `list` | `POST users` | See reference |
| [User](docs/api/user.html) | `load` | `POST user` | See reference |
| [User](docs/api/user.html) | `load` | `POST viewer` | See reference |
| [User](docs/api/user.html) | `update` | `POST userUpdate` | See reference |
| [UserSetting](docs/api/user_setting.html) | `create` | `POST notificationCategoryChannelSubscriptionUpdate` | See reference |
| [UserSetting](docs/api/user_setting.html) | `load` | `POST userSettings` | See reference |
| [UserSetting](docs/api/user_setting.html) | `update` | `POST userSettingsUpdate` | See reference |
| [ViewPreference](docs/api/view_preference.html) | `create` | `POST viewPreferencesCreate` | See reference |
| [ViewPreference](docs/api/view_preference.html) | `load` | `POST userViewPreferences` | See reference |
| [ViewPreference](docs/api/view_preference.html) | `remove` | `POST viewPreferencesDelete` | See reference |
| [ViewPreference](docs/api/view_preference.html) | `update` | `POST viewPreferencesUpdate` | See reference |
| [Webhook](docs/api/webhook.html) | `create` | `POST webhookCreate` | See reference |
| [Webhook](docs/api/webhook.html) | `list` | `POST webhooks` | See reference |
| [Webhook](docs/api/webhook.html) | `load` | `POST webhook` | See reference |
| [Webhook](docs/api/webhook.html) | `remove` | `POST webhookDelete` | See reference |
| [Webhook](docs/api/webhook.html) | `update` | `POST webhookUpdate` | See reference |
| [WebhookFailureEvent](docs/api/webhook_failure_event.html) | `list` | `POST failuresForOauthWebhooks` | See reference |
| [WebhookFailureEvent](docs/api/webhook_failure_event.html) | `list` | `POST auditLogWebhookFailureEvents` | See reference |
| [WorkflowState](docs/api/workflow_state.html) | `create` | `POST workflowStateCreate` | See reference |
| [WorkflowState](docs/api/workflow_state.html) | `list` | `POST workflowStates` | See reference |
| [WorkflowState](docs/api/workflow_state.html) | `load` | `POST workflowState` | See reference |
| [WorkflowState](docs/api/workflow_state.html) | `update` | `POST workflowStateArchive` | See reference |
| [WorkflowState](docs/api/workflow_state.html) | `update` | `POST workflowStateUpdate` | See reference |

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
| [C](docs/sdks/c.html) | `c/` | Build from source |
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [Ruby](docs/sdks/rb.html) | `rb/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### [Go CLI](docs/tools/go-cli.html)

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### [Go MCP server](docs/tools/go-mcp.html)

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `linear_list`: List records for an entity. Supported entities: `access_key_release`, `agent_activity`, `agent_session`, `agent_skill`, `attachment`, `audit_entry`, `audit_entry_type`, `authentication_session_response`, `comment`, `custom_view`, `customer`, `customer_need`, `customer_status`, `customer_tier`, `cycle`, `document`, `document_search_result`, `emoji`, `external_user`, `favorite`, `initiative`, `initiative_label`, `initiative_relation`, `initiative_to_project`, `initiative_update`, `integration`, `integration_template`, `issue`, `issue_label`, `issue_priority_value`, `issue_relation`, `issue_search_result`, `issue_to_release`, `notification`, `notification_subscription`, `o_auth_application`, `organization_invite`, `project`, `project_label`, `project_milestone`, `project_relation`, `project_search_result`, `project_status`, `project_update`, `release`, `release_note`, `release_pipeline`, `release_stage`, `roadmap`, `roadmap_to_project`, `sla_configuration`, `team`, `team_membership`, `template`, `time_schedule`, `triage_responsibility`, `usage_alert`, `user`, `webhook`, `webhook_failure_event`, `workflow_state`.
- `linear_load`: Load one record for an entity. Supported entities: `access_key_release`, `access_key_release_pipeline`, `agent_activity`, `agent_session`, `agent_skill`, `application`, `attachment`, `auth_resolver_response`, `comment`, `custom_view`, `customer`, `customer_need`, `customer_status`, `customer_tier`, `cycle`, `diff`, `document`, `email_intake_address`, `emoji`, `entity_external_link`, `external_user`, `favorite`, `initiative`, `initiative_label`, `initiative_lead_team_change_impact`, `initiative_relation`, `initiative_to_project`, `initiative_update`, `integration`, `integration_template`, `integrations_setting`, `issue`, `issue_label`, `issue_relation`, `issue_to_release`, `notification`, `notification_subscription`, `o_auth_application`, `organization`, `organization_invite`, `organization_meta`, `project`, `project_label`, `project_milestone`, `project_relation`, `project_status`, `project_update`, `release`, `release_note`, `release_pipeline`, `release_stage`, `roadmap`, `roadmap_to_project`, `sso_url_from_email_response`, `team`, `team_membership`, `template`, `time_schedule`, `triage_responsibility`, `usage_alert`, `user`, `user_setting`, `view_preference`, `webhook`, `workflow_state`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`debug`](docs/features/debug.html): Request/response capture ring buffer for debugging
- [`idempotency`](docs/features/idempotency.html): Idempotency keys for safe retries of mutating operations
- [`metrics`](docs/features/metrics.html): Statistics capture: per-operation counters and latency
- [`paging`](docs/features/paging.html): Pagination signals for list operations
- [`ratelimit`](docs/features/ratelimit.html): Client-side rate limiting via a token bucket
- [`retry`](docs/features/retry.html): Automatic retry of transient failures with exponential backoff
- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server
- [`timeout`](docs/features/timeout.html): Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

