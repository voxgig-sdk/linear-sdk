// Linear SDK public API (generated).

#ifndef LINEAR_API_H
#define LINEAR_API_H

#include "sdk.h"

// AccessKeyRelease entity.
Entity* access_key_release_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_access_key_release(LinearSDK* client, voxgig_value* entopts);
voxgig_value* access_key_release_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// AccessKeyReleasePipeline entity.
Entity* access_key_release_pipeline_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_access_key_release_pipeline(LinearSDK* client, voxgig_value* entopts);
voxgig_value* access_key_release_pipeline_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// AgentActivity entity.
Entity* agent_activity_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_agent_activity(LinearSDK* client, voxgig_value* entopts);
voxgig_value* agent_activity_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// AgentSession entity.
Entity* agent_session_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_agent_session(LinearSDK* client, voxgig_value* entopts);
voxgig_value* agent_session_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// AgentSkill entity.
Entity* agent_skill_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_agent_skill(LinearSDK* client, voxgig_value* entopts);
voxgig_value* agent_skill_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// Application entity.
Entity* application_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_application(LinearSDK* client, voxgig_value* entopts);
voxgig_value* application_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// Attachment entity.
Entity* attachment_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_attachment(LinearSDK* client, voxgig_value* entopts);
voxgig_value* attachment_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// AuditEntry entity.
Entity* audit_entry_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_audit_entry(LinearSDK* client, voxgig_value* entopts);
voxgig_value* audit_entry_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// AuditEntryType entity.
Entity* audit_entry_type_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_audit_entry_type(LinearSDK* client, voxgig_value* entopts);
voxgig_value* audit_entry_type_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// AuthResolverResponse entity.
Entity* auth_resolver_response_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_auth_resolver_response(LinearSDK* client, voxgig_value* entopts);
voxgig_value* auth_resolver_response_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// AuthenticationSessionResponse entity.
Entity* authentication_session_response_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_authentication_session_response(LinearSDK* client, voxgig_value* entopts);
voxgig_value* authentication_session_response_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// Comment entity.
Entity* comment_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_comment(LinearSDK* client, voxgig_value* entopts);
voxgig_value* comment_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// CreateOrJoinOrganizationResponse entity.
Entity* create_or_join_organization_response_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_create_or_join_organization_response(LinearSDK* client, voxgig_value* entopts);
voxgig_value* create_or_join_organization_response_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// CustomView entity.
Entity* custom_view_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_custom_view(LinearSDK* client, voxgig_value* entopts);
voxgig_value* custom_view_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// Customer entity.
Entity* customer_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_customer(LinearSDK* client, voxgig_value* entopts);
voxgig_value* customer_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// CustomerNeed entity.
Entity* customer_need_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_customer_need(LinearSDK* client, voxgig_value* entopts);
voxgig_value* customer_need_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// CustomerStatus entity.
Entity* customer_status_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_customer_status(LinearSDK* client, voxgig_value* entopts);
voxgig_value* customer_status_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// CustomerTier entity.
Entity* customer_tier_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_customer_tier(LinearSDK* client, voxgig_value* entopts);
voxgig_value* customer_tier_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// Cycle entity.
Entity* cycle_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_cycle(LinearSDK* client, voxgig_value* entopts);
voxgig_value* cycle_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// Diff entity.
Entity* diff_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_diff(LinearSDK* client, voxgig_value* entopts);
voxgig_value* diff_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// Document entity.
Entity* document_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_document(LinearSDK* client, voxgig_value* entopts);
voxgig_value* document_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// DocumentSearchResult entity.
Entity* document_search_result_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_document_search_result(LinearSDK* client, voxgig_value* entopts);
voxgig_value* document_search_result_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// EmailIntakeAddress entity.
Entity* email_intake_address_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_email_intake_address(LinearSDK* client, voxgig_value* entopts);
voxgig_value* email_intake_address_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// EmailUserAccountAuthChallengeResponse entity.
Entity* email_user_account_auth_challenge_response_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_email_user_account_auth_challenge_response(LinearSDK* client, voxgig_value* entopts);
voxgig_value* email_user_account_auth_challenge_response_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// Emoji entity.
Entity* emoji_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_emoji(LinearSDK* client, voxgig_value* entopts);
voxgig_value* emoji_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// EntityExternalLink entity.
Entity* entity_external_link_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_entity_external_link(LinearSDK* client, voxgig_value* entopts);
voxgig_value* entity_external_link_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// ExternalUser entity.
Entity* external_user_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_external_user(LinearSDK* client, voxgig_value* entopts);
voxgig_value* external_user_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// Favorite entity.
Entity* favorite_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_favorite(LinearSDK* client, voxgig_value* entopts);
voxgig_value* favorite_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// GitAutomationState entity.
Entity* git_automation_state_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_git_automation_state(LinearSDK* client, voxgig_value* entopts);
voxgig_value* git_automation_state_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// GitAutomationTargetBranch entity.
Entity* git_automation_target_branch_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_git_automation_target_branch(LinearSDK* client, voxgig_value* entopts);
voxgig_value* git_automation_target_branch_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// GitHubIntegrationConnectDetail entity.
Entity* git_hub_integration_connect_detail_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_git_hub_integration_connect_detail(LinearSDK* client, voxgig_value* entopts);
voxgig_value* git_hub_integration_connect_detail_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// Initiative entity.
Entity* initiative_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_initiative(LinearSDK* client, voxgig_value* entopts);
voxgig_value* initiative_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// InitiativeLabel entity.
Entity* initiative_label_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_initiative_label(LinearSDK* client, voxgig_value* entopts);
voxgig_value* initiative_label_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// InitiativeLeadTeamChangeImpact entity.
Entity* initiative_lead_team_change_impact_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_initiative_lead_team_change_impact(LinearSDK* client, voxgig_value* entopts);
voxgig_value* initiative_lead_team_change_impact_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// InitiativeRelation entity.
Entity* initiative_relation_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_initiative_relation(LinearSDK* client, voxgig_value* entopts);
voxgig_value* initiative_relation_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// InitiativeToProject entity.
Entity* initiative_to_project_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_initiative_to_project(LinearSDK* client, voxgig_value* entopts);
voxgig_value* initiative_to_project_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// InitiativeUpdate entity.
Entity* initiative_update_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_initiative_update(LinearSDK* client, voxgig_value* entopts);
voxgig_value* initiative_update_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// Integration entity.
Entity* integration_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_integration(LinearSDK* client, voxgig_value* entopts);
voxgig_value* integration_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// IntegrationTemplate entity.
Entity* integration_template_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_integration_template(LinearSDK* client, voxgig_value* entopts);
voxgig_value* integration_template_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// IntegrationsSetting entity.
Entity* integrations_setting_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_integrations_setting(LinearSDK* client, voxgig_value* entopts);
voxgig_value* integrations_setting_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// Issue entity.
Entity* issue_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_issue(LinearSDK* client, voxgig_value* entopts);
voxgig_value* issue_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// IssueImport entity.
Entity* issue_import_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_issue_import(LinearSDK* client, voxgig_value* entopts);
voxgig_value* issue_import_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// IssueLabel entity.
Entity* issue_label_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_issue_label(LinearSDK* client, voxgig_value* entopts);
voxgig_value* issue_label_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// IssuePriorityValue entity.
Entity* issue_priority_value_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_issue_priority_value(LinearSDK* client, voxgig_value* entopts);
voxgig_value* issue_priority_value_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// IssueRelation entity.
Entity* issue_relation_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_issue_relation(LinearSDK* client, voxgig_value* entopts);
voxgig_value* issue_relation_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// IssueSearchResult entity.
Entity* issue_search_result_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_issue_search_result(LinearSDK* client, voxgig_value* entopts);
voxgig_value* issue_search_result_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// IssueToRelease entity.
Entity* issue_to_release_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_issue_to_release(LinearSDK* client, voxgig_value* entopts);
voxgig_value* issue_to_release_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// LogoutResponse entity.
Entity* logout_response_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_logout_response(LinearSDK* client, voxgig_value* entopts);
voxgig_value* logout_response_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// Notification entity.
Entity* notification_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_notification(LinearSDK* client, voxgig_value* entopts);
voxgig_value* notification_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// NotificationSubscription entity.
Entity* notification_subscription_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_notification_subscription(LinearSDK* client, voxgig_value* entopts);
voxgig_value* notification_subscription_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// OAuthApplication entity.
Entity* o_auth_application_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_o_auth_application(LinearSDK* client, voxgig_value* entopts);
voxgig_value* o_auth_application_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// Organization entity.
Entity* organization_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_organization(LinearSDK* client, voxgig_value* entopts);
voxgig_value* organization_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// OrganizationDomain entity.
Entity* organization_domain_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_organization_domain(LinearSDK* client, voxgig_value* entopts);
voxgig_value* organization_domain_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// OrganizationInvite entity.
Entity* organization_invite_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_organization_invite(LinearSDK* client, voxgig_value* entopts);
voxgig_value* organization_invite_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// OrganizationMeta entity.
Entity* organization_meta_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_organization_meta(LinearSDK* client, voxgig_value* entopts);
voxgig_value* organization_meta_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// PasskeyLoginStartResponse entity.
Entity* passkey_login_start_response_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_passkey_login_start_response(LinearSDK* client, voxgig_value* entopts);
voxgig_value* passkey_login_start_response_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// Project entity.
Entity* project_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_project(LinearSDK* client, voxgig_value* entopts);
voxgig_value* project_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// ProjectLabel entity.
Entity* project_label_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_project_label(LinearSDK* client, voxgig_value* entopts);
voxgig_value* project_label_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// ProjectMilestone entity.
Entity* project_milestone_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_project_milestone(LinearSDK* client, voxgig_value* entopts);
voxgig_value* project_milestone_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// ProjectMilestoneMoveProjectTeam entity.
Entity* project_milestone_move_project_team_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_project_milestone_move_project_team(LinearSDK* client, voxgig_value* entopts);
voxgig_value* project_milestone_move_project_team_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// ProjectRelation entity.
Entity* project_relation_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_project_relation(LinearSDK* client, voxgig_value* entopts);
voxgig_value* project_relation_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// ProjectSearchResult entity.
Entity* project_search_result_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_project_search_result(LinearSDK* client, voxgig_value* entopts);
voxgig_value* project_search_result_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// ProjectStatus entity.
Entity* project_status_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_project_status(LinearSDK* client, voxgig_value* entopts);
voxgig_value* project_status_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// ProjectUpdate entity.
Entity* project_update_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_project_update(LinearSDK* client, voxgig_value* entopts);
voxgig_value* project_update_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// PushSubscription entity.
Entity* push_subscription_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_push_subscription(LinearSDK* client, voxgig_value* entopts);
voxgig_value* push_subscription_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// Reaction entity.
Entity* reaction_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_reaction(LinearSDK* client, voxgig_value* entopts);
voxgig_value* reaction_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// Release entity.
Entity* release_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_release(LinearSDK* client, voxgig_value* entopts);
voxgig_value* release_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// ReleaseNote entity.
Entity* release_note_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_release_note(LinearSDK* client, voxgig_value* entopts);
voxgig_value* release_note_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// ReleasePipeline entity.
Entity* release_pipeline_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_release_pipeline(LinearSDK* client, voxgig_value* entopts);
voxgig_value* release_pipeline_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// ReleaseStage entity.
Entity* release_stage_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_release_stage(LinearSDK* client, voxgig_value* entopts);
voxgig_value* release_stage_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// Roadmap entity.
Entity* roadmap_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_roadmap(LinearSDK* client, voxgig_value* entopts);
voxgig_value* roadmap_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// RoadmapToProject entity.
Entity* roadmap_to_project_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_roadmap_to_project(LinearSDK* client, voxgig_value* entopts);
voxgig_value* roadmap_to_project_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// SlaConfiguration entity.
Entity* sla_configuration_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_sla_configuration(LinearSDK* client, voxgig_value* entopts);
voxgig_value* sla_configuration_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// SsoUrlFromEmailResponse entity.
Entity* sso_url_from_email_response_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_sso_url_from_email_response(LinearSDK* client, voxgig_value* entopts);
voxgig_value* sso_url_from_email_response_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// Team entity.
Entity* team_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_team(LinearSDK* client, voxgig_value* entopts);
voxgig_value* team_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// TeamMembership entity.
Entity* team_membership_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_team_membership(LinearSDK* client, voxgig_value* entopts);
voxgig_value* team_membership_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// Template entity.
Entity* template_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_template(LinearSDK* client, voxgig_value* entopts);
voxgig_value* template_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// TimeSchedule entity.
Entity* time_schedule_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_time_schedule(LinearSDK* client, voxgig_value* entopts);
voxgig_value* time_schedule_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// TriageResponsibility entity.
Entity* triage_responsibility_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_triage_responsibility(LinearSDK* client, voxgig_value* entopts);
voxgig_value* triage_responsibility_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// UploadFile entity.
Entity* upload_file_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_upload_file(LinearSDK* client, voxgig_value* entopts);
voxgig_value* upload_file_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// UsageAlert entity.
Entity* usage_alert_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_usage_alert(LinearSDK* client, voxgig_value* entopts);
voxgig_value* usage_alert_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// User entity.
Entity* user_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_user(LinearSDK* client, voxgig_value* entopts);
voxgig_value* user_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// UserSetting entity.
Entity* user_setting_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_user_setting(LinearSDK* client, voxgig_value* entopts);
voxgig_value* user_setting_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// ViewPreference entity.
Entity* view_preference_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_view_preference(LinearSDK* client, voxgig_value* entopts);
voxgig_value* view_preference_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// Webhook entity.
Entity* webhook_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_webhook(LinearSDK* client, voxgig_value* entopts);
voxgig_value* webhook_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// WebhookFailureEvent entity.
Entity* webhook_failure_event_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_webhook_failure_event(LinearSDK* client, voxgig_value* entopts);
voxgig_value* webhook_failure_event_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);
// WorkflowState entity.
Entity* workflow_state_entity_new(LinearSDK* client, voxgig_value* entopts);
Entity* linear_workflow_state(LinearSDK* client, voxgig_value* entopts);
voxgig_value* workflow_state_stream(Entity* e, const char* action, voxgig_value* args, voxgig_value* callopts, PNError** err);

#endif // LINEAR_API_H
