package voxgiglinearsdk

import (
	"github.com/voxgig-sdk/linear-sdk/go/core"
	"github.com/voxgig-sdk/linear-sdk/go/entity"
	"github.com/voxgig-sdk/linear-sdk/go/feature"
	_ "github.com/voxgig-sdk/linear-sdk/go/utility"
)

// Type aliases preserve external API.
type LinearSDK = core.LinearSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type LinearEntity = core.LinearEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type LinearError = core.LinearError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewDebugFeatureFunc = func() core.Feature {
		return feature.NewDebugFeature()
	}
	core.NewIdempotencyFeatureFunc = func() core.Feature {
		return feature.NewIdempotencyFeature()
	}
	core.NewMetricsFeatureFunc = func() core.Feature {
		return feature.NewMetricsFeature()
	}
	core.NewPagingFeatureFunc = func() core.Feature {
		return feature.NewPagingFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewAccessKeyReleaseEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewAccessKeyReleaseEntity(client, entopts)
	}
	core.NewAccessKeyReleasePipelineEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewAccessKeyReleasePipelineEntity(client, entopts)
	}
	core.NewAgentActivityEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewAgentActivityEntity(client, entopts)
	}
	core.NewAgentSessionEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewAgentSessionEntity(client, entopts)
	}
	core.NewAgentSkillEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewAgentSkillEntity(client, entopts)
	}
	core.NewApplicationEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewApplicationEntity(client, entopts)
	}
	core.NewAttachmentEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewAttachmentEntity(client, entopts)
	}
	core.NewAuditEntryEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewAuditEntryEntity(client, entopts)
	}
	core.NewAuditEntryTypeEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewAuditEntryTypeEntity(client, entopts)
	}
	core.NewAuthResolverResponseEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewAuthResolverResponseEntity(client, entopts)
	}
	core.NewAuthenticationSessionResponseEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewAuthenticationSessionResponseEntity(client, entopts)
	}
	core.NewCommentEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewCommentEntity(client, entopts)
	}
	core.NewCreateOrJoinOrganizationResponseEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewCreateOrJoinOrganizationResponseEntity(client, entopts)
	}
	core.NewCustomViewEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewCustomViewEntity(client, entopts)
	}
	core.NewCustomerEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewCustomerEntity(client, entopts)
	}
	core.NewCustomerNeedEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewCustomerNeedEntity(client, entopts)
	}
	core.NewCustomerStatusEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewCustomerStatusEntity(client, entopts)
	}
	core.NewCustomerTierEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewCustomerTierEntity(client, entopts)
	}
	core.NewCycleEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewCycleEntity(client, entopts)
	}
	core.NewDiffEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewDiffEntity(client, entopts)
	}
	core.NewDocumentEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewDocumentEntity(client, entopts)
	}
	core.NewDocumentSearchResultEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewDocumentSearchResultEntity(client, entopts)
	}
	core.NewEmailIntakeAddressEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewEmailIntakeAddressEntity(client, entopts)
	}
	core.NewEmailUserAccountAuthChallengeResponseEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewEmailUserAccountAuthChallengeResponseEntity(client, entopts)
	}
	core.NewEmojiEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewEmojiEntity(client, entopts)
	}
	core.NewEntityExternalLinkEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewEntityExternalLinkEntity(client, entopts)
	}
	core.NewExternalUserEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewExternalUserEntity(client, entopts)
	}
	core.NewFavoriteEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewFavoriteEntity(client, entopts)
	}
	core.NewGitAutomationStateEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewGitAutomationStateEntity(client, entopts)
	}
	core.NewGitAutomationTargetBranchEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewGitAutomationTargetBranchEntity(client, entopts)
	}
	core.NewGitHubIntegrationConnectDetailEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewGitHubIntegrationConnectDetailEntity(client, entopts)
	}
	core.NewInitiativeEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewInitiativeEntity(client, entopts)
	}
	core.NewInitiativeLabelEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewInitiativeLabelEntity(client, entopts)
	}
	core.NewInitiativeLeadTeamChangeImpactEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewInitiativeLeadTeamChangeImpactEntity(client, entopts)
	}
	core.NewInitiativeRelationEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewInitiativeRelationEntity(client, entopts)
	}
	core.NewInitiativeToProjectEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewInitiativeToProjectEntity(client, entopts)
	}
	core.NewInitiativeUpdateEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewInitiativeUpdateEntity(client, entopts)
	}
	core.NewIntegrationEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewIntegrationEntity(client, entopts)
	}
	core.NewIntegrationTemplateEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewIntegrationTemplateEntity(client, entopts)
	}
	core.NewIntegrationsSettingEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewIntegrationsSettingEntity(client, entopts)
	}
	core.NewIssueEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewIssueEntity(client, entopts)
	}
	core.NewIssueImportEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewIssueImportEntity(client, entopts)
	}
	core.NewIssueLabelEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewIssueLabelEntity(client, entopts)
	}
	core.NewIssuePriorityValueEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewIssuePriorityValueEntity(client, entopts)
	}
	core.NewIssueRelationEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewIssueRelationEntity(client, entopts)
	}
	core.NewIssueSearchResultEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewIssueSearchResultEntity(client, entopts)
	}
	core.NewIssueToReleaseEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewIssueToReleaseEntity(client, entopts)
	}
	core.NewLogoutResponseEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewLogoutResponseEntity(client, entopts)
	}
	core.NewNotificationEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewNotificationEntity(client, entopts)
	}
	core.NewNotificationSubscriptionEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewNotificationSubscriptionEntity(client, entopts)
	}
	core.NewOAuthApplicationEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewOAuthApplicationEntity(client, entopts)
	}
	core.NewOrganizationEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewOrganizationEntity(client, entopts)
	}
	core.NewOrganizationDomainEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewOrganizationDomainEntity(client, entopts)
	}
	core.NewOrganizationInviteEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewOrganizationInviteEntity(client, entopts)
	}
	core.NewOrganizationMetaEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewOrganizationMetaEntity(client, entopts)
	}
	core.NewPasskeyLoginStartResponseEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewPasskeyLoginStartResponseEntity(client, entopts)
	}
	core.NewProjectEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewProjectEntity(client, entopts)
	}
	core.NewProjectLabelEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewProjectLabelEntity(client, entopts)
	}
	core.NewProjectMilestoneEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewProjectMilestoneEntity(client, entopts)
	}
	core.NewProjectMilestoneMoveProjectTeamEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewProjectMilestoneMoveProjectTeamEntity(client, entopts)
	}
	core.NewProjectRelationEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewProjectRelationEntity(client, entopts)
	}
	core.NewProjectSearchResultEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewProjectSearchResultEntity(client, entopts)
	}
	core.NewProjectStatusEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewProjectStatusEntity(client, entopts)
	}
	core.NewProjectUpdateEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewProjectUpdateEntity(client, entopts)
	}
	core.NewPushSubscriptionEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewPushSubscriptionEntity(client, entopts)
	}
	core.NewReactionEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewReactionEntity(client, entopts)
	}
	core.NewReleaseEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewReleaseEntity(client, entopts)
	}
	core.NewReleaseNoteEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewReleaseNoteEntity(client, entopts)
	}
	core.NewReleasePipelineEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewReleasePipelineEntity(client, entopts)
	}
	core.NewReleaseStageEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewReleaseStageEntity(client, entopts)
	}
	core.NewRoadmapEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewRoadmapEntity(client, entopts)
	}
	core.NewRoadmapToProjectEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewRoadmapToProjectEntity(client, entopts)
	}
	core.NewSlaConfigurationEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewSlaConfigurationEntity(client, entopts)
	}
	core.NewSsoUrlFromEmailResponseEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewSsoUrlFromEmailResponseEntity(client, entopts)
	}
	core.NewTeamEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewTeamEntity(client, entopts)
	}
	core.NewTeamMembershipEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewTeamMembershipEntity(client, entopts)
	}
	core.NewTemplateEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewTemplateEntity(client, entopts)
	}
	core.NewTimeScheduleEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewTimeScheduleEntity(client, entopts)
	}
	core.NewTriageResponsibilityEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewTriageResponsibilityEntity(client, entopts)
	}
	core.NewUploadFileEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewUploadFileEntity(client, entopts)
	}
	core.NewUsageAlertEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewUsageAlertEntity(client, entopts)
	}
	core.NewUserEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewUserEntity(client, entopts)
	}
	core.NewUserSettingEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewUserSettingEntity(client, entopts)
	}
	core.NewViewPreferenceEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewViewPreferenceEntity(client, entopts)
	}
	core.NewWebhookEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewWebhookEntity(client, entopts)
	}
	core.NewWebhookFailureEventEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewWebhookFailureEventEntity(client, entopts)
	}
	core.NewWorkflowStateEntityFunc = func(client *core.LinearSDK, entopts map[string]any) core.LinearEntity {
		return entity.NewWorkflowStateEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewLinearSDK = core.NewLinearSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewLinearSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *LinearSDK  { return NewLinearSDK(nil) }
func Test() *LinearSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewDebugFeature = feature.NewDebugFeature
var NewIdempotencyFeature = feature.NewIdempotencyFeature
var NewMetricsFeature = feature.NewMetricsFeature
var NewPagingFeature = feature.NewPagingFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
