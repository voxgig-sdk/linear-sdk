package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewDebugFeatureFunc func() Feature

var NewIdempotencyFeatureFunc func() Feature

var NewMetricsFeatureFunc func() Feature

var NewPagingFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewAccessKeyReleaseEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewAccessKeyReleasePipelineEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewAgentActivityEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewAgentSessionEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewAgentSkillEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewApplicationEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewAttachmentEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewAuditEntryEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewAuditEntryTypeEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewAuthResolverResponseEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewAuthenticationSessionResponseEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewCommentEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewCreateOrJoinOrganizationResponseEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewCustomViewEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewCustomerEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewCustomerNeedEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewCustomerStatusEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewCustomerTierEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewCycleEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewDiffEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewDocumentEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewDocumentSearchResultEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewEmailIntakeAddressEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewEmailUserAccountAuthChallengeResponseEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewEmojiEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewEntityExternalLinkEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewExternalUserEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewFavoriteEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewGitAutomationStateEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewGitAutomationTargetBranchEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewGitHubIntegrationConnectDetailEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewInitiativeEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewInitiativeLabelEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewInitiativeLeadTeamChangeImpactEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewInitiativeRelationEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewInitiativeToProjectEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewInitiativeUpdateEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewIntegrationEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewIntegrationTemplateEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewIntegrationsSettingEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewIssueEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewIssueImportEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewIssueLabelEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewIssuePriorityValueEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewIssueRelationEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewIssueSearchResultEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewIssueToReleaseEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewLogoutResponseEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewNotificationEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewNotificationSubscriptionEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewOAuthApplicationEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewOrganizationEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewOrganizationDomainEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewOrganizationInviteEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewOrganizationMetaEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewPasskeyLoginStartResponseEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewProjectEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewProjectLabelEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewProjectMilestoneEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewProjectMilestoneMoveProjectTeamEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewProjectRelationEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewProjectSearchResultEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewProjectStatusEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewProjectUpdateEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewPushSubscriptionEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewReactionEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewReleaseEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewReleaseNoteEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewReleasePipelineEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewReleaseStageEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewRoadmapEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewRoadmapToProjectEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewSlaConfigurationEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewSsoUrlFromEmailResponseEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewTeamEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewTeamMembershipEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewTemplateEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewTimeScheduleEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewTriageResponsibilityEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewUploadFileEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewUsageAlertEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewUserEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewUserSettingEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewViewPreferenceEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewWebhookEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewWebhookFailureEventEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

var NewWorkflowStateEntityFunc func(client *LinearSDK, entopts map[string]any) LinearEntity

