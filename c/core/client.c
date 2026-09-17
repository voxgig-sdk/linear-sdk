// LinearSDK client (generated — mirrors the rust Main fragment).

#include "api.h"

#include <stdio.h>   // snprintf
#include <stdlib.h>
#include <string.h>

LinearSDK* linear_sdk_new(voxgig_value* options) {
  LinearSDK* sdk = (LinearSDK*)calloc(1, sizeof(LinearSDK));
  sdk->mode = strdup("live");
  sdk->options = voxgig_new_undef();
  sdk->utility = utility_new();
  sdk->features = NULL;
  sdk->features_len = 0;
  sdk->features_cap = 0;
  sdk->rootctx = NULL;

  /* The process-wide config (sdkgen rung L2): read-only on the request path,
   * so every client shares one rather than rebuilding it. */
  voxgig_value* config = shared_config();

  CtxSpec cs;
  memset(&cs, 0, sizeof(cs));
  cs.client = sdk;
  cs.utility = sdk->utility;
  cs.config = config;
  cs.options = options ? options : voxgig_new_undef();
  cs.shared = voxgig_new_map();
  Context* rootctx = make_context_util(cs, NULL);

  voxgig_value* opts = make_options_util(rootctx);
  sdk->options = v_share(opts);

  voxgig_value* testactive;
  {
    const char* keys[4] = {"feature", "test", "active", NULL};
    testactive = getpath_c(opts, keys);
  }
  if (voxgig_is_bool(testactive) && voxgig_as_bool(testactive)) {
    free(sdk->mode);
    sdk->mode = strdup("test");
  }

  rootctx->options = v_share(opts);
  sdk->rootctx = rootctx;

  // Add features in the resolved order (make_options puts an explicit list
  // order first, else defaults to test-first). Ordering matters: the `test`
  // feature installs the base mock transport and the transport features
  // (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
  // must be added before them to sit at the base of the transport chain.
  voxgig_value* feature_opts = to_map(getp(opts, "feature"));
  voxgig_value* feature_order = getpath2(opts, "__derived__", "featureorder");
  if (voxgig_is_map(feature_opts) && v_is_list(feature_order)) {
    voxgig_list* order = voxgig_as_list(feature_order);
    for (size_t i = 0; i < order->len; i++) {
      voxgig_value* fname_v = order->items[i];
      if (!v_is_str(fname_v)) continue;
      const char* fname = voxgig_as_string(fname_v);
      voxgig_value* fopts = getp(feature_opts, fname);
      if (voxgig_is_map(fopts)) {
        bool active = false;
        if (get_bool(fopts, "active", &active) && active) {
          feature_add_util(rootctx, make_feature(fname));
        }
      }
    }
  }

  // Initialize features.
  size_t n = sdk->features_len;
  for (size_t i = 0; i < n; i++) {
    feature_init_util(rootctx, sdk->features[i]);
  }

  feature_hook_util(rootctx, "PostConstruct");

  return sdk;
}

voxgig_value* sdk_prepare(LinearSDK* sdk, voxgig_value* fetchargs, PNError** err) {
  *err = NULL;
  Utility* utility = sdk->utility;
  (void)utility;

  fetchargs = voxgig_is_map(fetchargs) ? fetchargs : voxgig_new_map();

  voxgig_value* ctrl = to_map(getp(fetchargs, "ctrl"));
  if (!voxgig_is_map(ctrl)) ctrl = voxgig_new_map();

  CtxSpec cs;
  memset(&cs, 0, sizeof(cs));
  cs.opname = "prepare";
  cs.ctrl = ctrl;
  Context* ctx = make_context_util(cs, sdk_get_root_ctx(sdk));

  voxgig_value* options = v_share(sdk->options);

  const char* path = get_str(fetchargs, "path");
  path = path ? path : "";
  const char* method = get_str(fetchargs, "method");
  if (!method || method[0] == '\0') method = "GET";

  voxgig_value* params = to_map(getp(fetchargs, "params"));
  if (!voxgig_is_map(params)) params = voxgig_new_map();
  voxgig_value* query = to_map(getp(fetchargs, "query"));
  if (!voxgig_is_map(query)) query = voxgig_new_map();

  voxgig_value* headers = prepare_headers_util(ctx);

  voxgig_value* specmap = cmap(10,
    "base", getp(options, "base"),
    "prefix", getp(options, "prefix"),
    "suffix", getp(options, "suffix"),
    "path", v_str(path),
    "method", v_str(method),
    "params", params,
    "query", query,
    "headers", headers,
    "body", getp(fetchargs, "body"),
    "step", v_str("start"));
  Spec* spec = spec_new(specmap);
  ctx->spec = spec;

  // Merge user-provided headers.
  voxgig_value* uh = getp(fetchargs, "headers");
  if (voxgig_is_map(uh)) {
    voxgig_map* m = voxgig_as_map(uh);
    for (size_t i = 0; i < m->len; i++) {
      setp(spec->headers, m->entries[i].key, voxgig_retain(m->entries[i].value));
    }
  }

  prepare_auth_util(ctx, err);
  if (*err) return NULL;

  return make_fetch_def_util(ctx, err);
}

static voxgig_value* err_map(const char* msg) {
  return cmap(2, "ok", v_bool(false), "err", v_str(msg));
}

// Is this raw-access op permitted by the SDK's allow.op option?
static bool sdk_op_allowed(LinearSDK* sdk, const char* op) {
  voxgig_value* allow_op = getpath2(sdk->options, "allow", "op");
  if (!voxgig_is_string(allow_op)) return false;
  return NULL != strstr(voxgig_as_string(allow_op), op);
}

static voxgig_value* sdk_op_denied(LinearSDK* sdk, const char* op) {
  voxgig_value* allow_op = getpath2(sdk->options, "allow", "op");
  const char* allow = voxgig_is_string(allow_op) ? voxgig_as_string(allow_op) : "";
  char msg[512];
  snprintf(msg, sizeof(msg),
    "LinearSDK: %s: operation not allowed by"
    " SDK option allow.op value: \"%s\"", op, allow);
  return err_map(msg);
}

// Ungated request path shared by sdk_direct and sdk_graphql, each of which
// checks its own allow.op token first. Static, rather than a flag on
// fetchargs: a caller-supplied marker would let anyone opt straight back out
// of the gate by passing it.
static voxgig_value* sdk_raw_request(
  LinearSDK* sdk, voxgig_value* fetchargs, PNError** err) {
  *err = NULL;
  Utility* utility = sdk->utility;

  PNError* perr = NULL;
  voxgig_value* fetchdef = sdk_prepare(sdk, fetchargs, &perr);
  if (perr) {
    return err_map(perr->msg);
  }

  voxgig_value* ctrl = to_map(getp(fetchargs, "ctrl"));
  if (!voxgig_is_map(ctrl)) ctrl = voxgig_new_map();

  CtxSpec cs;
  memset(&cs, 0, sizeof(cs));
  cs.opname = "direct";
  cs.ctrl = ctrl;
  Context* ctx = make_context_util(cs, sdk_get_root_ctx(sdk));

  const char* url = get_str(fetchdef, "url");
  url = url ? url : "";
  PNError* ferr = NULL;
  voxgig_value* fetched = utility_fetch(utility, ctx, url, fetchdef, &ferr);
  if (ferr) {
    return err_map(ferr->msg);
  }

  if (v_is_noval(fetched) || v_is_null(fetched)) {
    return err_map("response: undefined");
  }

  if (voxgig_is_map(fetched)) {
    int64_t status = to_int(getp(fetched, "status"));
    voxgig_value* headers = getp(fetched, "headers");

    voxgig_value* cl = getp(headers, "content-length");
    char clbuf[32];
    clbuf[0] = '\0';
    if (voxgig_is_string(cl)) {
      snprintf(clbuf, sizeof(clbuf), "%s", voxgig_as_string(cl));
    } else if (voxgig_is_number(cl)) {
      snprintf(clbuf, sizeof(clbuf), "%lld", (long long)to_int(cl));
    }
    bool no_body = (status == 204 || status == 304 || strcmp(clbuf, "0") == 0);

    voxgig_value* json_data;
    if (no_body) {
      json_data = voxgig_new_undef();
    } else {
      voxgig_value* jf = getp(fetched, "json");
      json_data = voxgig_is_func(jf) ? call_json(jf) : voxgig_new_undef();
    }

    return cmap(4,
      "ok", v_bool(status >= 200 && status < 300),
      "status", v_num((double)status),
      "headers", v_share(headers),
      "data", json_data);
  }

  return err_map("invalid response type");
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
voxgig_value* sdk_direct(LinearSDK* sdk, voxgig_value* fetchargs, PNError** err) {
  *err = NULL;

  if (!sdk_op_allowed(sdk, "direct")) {
    return sdk_op_denied(sdk, "direct");
  }

  return sdk_raw_request(sdk, fetchargs, err);
}

// Raw GraphQL access: the pressure valve that makes the generated surface's
// deliberate omissions (per-call selection sets, typed filter builders,
// batching, subscriptions) livable — the whole schema stays reachable.
//
// Thin wrapper over the same prepare/fetch path sdk_direct uses, with the one
// thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200 as
// a top-level `errors` array, so status alone would report a failed query as
// ok.
//
// NOTE: like sdk_direct, this bypasses the feature pipeline — no retry,
// ratelimit or paging features apply.
voxgig_value* sdk_graphql(LinearSDK* sdk, const char* query,
                          voxgig_value* variables, voxgig_value* ctrl,
                          PNError** err) {
  *err = NULL;

  if (!sdk_op_allowed(sdk, "graphql")) {
    return sdk_op_denied(sdk, "graphql");
  }

  voxgig_value* vars = voxgig_is_map(variables) ? v_share(variables) : voxgig_new_map();
  voxgig_value* ctl = voxgig_is_map(ctrl) ? v_share(ctrl) : voxgig_new_map();

  voxgig_value* fetchargs = cmap(4,
    "method", v_str("POST"),
    "headers", cmap(1, "content-type", v_str(GRAPHQL_CONTENT_TYPE)),
    "body", cmap(2, "query", v_str(query ? query : ""), "variables", vars),
    "ctrl", ctl);

  voxgig_value* res = sdk_raw_request(sdk, fetchargs, err);
  if (*err || !voxgig_is_map(res)) return res;

  // Errors are read BEFORE any status check: a GraphQL parse or validation
  // failure comes back as HTTP 400 carrying the standard { errors: [...] }
  // body, and the raw path represents a non-2xx as ok:false with no err — so
  // returning early on status would discard the server's own diagnostics,
  // which are the only useful part of that response.
  voxgig_value* errors = getp(getp(res, "data"), "errors");

  if (voxgig_is_list(errors) && 0 < voxgig_as_list(errors)->len) {
    voxgig_value* first = voxgig_as_list(errors)->items[0];
    const char* m = get_str(first, "message");
    if (!m || '\0' == m[0]) m = "graphql error";
    char msg[512];
    snprintf(msg, sizeof(msg), "LinearSDK: graphql: %s", m);
    setp(res, "ok", v_bool(false));
    setp(res, "err", v_str(msg));
    setp(res, "graphql", v_share(errors));
  }

  return res;
}


// AccessKeyRelease entity bound to this client.
Entity* linear_access_key_release(LinearSDK* client, voxgig_value* entopts) {
  return access_key_release_entity_new(client, entopts);
}

// AccessKeyReleasePipeline entity bound to this client.
Entity* linear_access_key_release_pipeline(LinearSDK* client, voxgig_value* entopts) {
  return access_key_release_pipeline_entity_new(client, entopts);
}

// AgentActivity entity bound to this client.
Entity* linear_agent_activity(LinearSDK* client, voxgig_value* entopts) {
  return agent_activity_entity_new(client, entopts);
}

// AgentSession entity bound to this client.
Entity* linear_agent_session(LinearSDK* client, voxgig_value* entopts) {
  return agent_session_entity_new(client, entopts);
}

// AgentSkill entity bound to this client.
Entity* linear_agent_skill(LinearSDK* client, voxgig_value* entopts) {
  return agent_skill_entity_new(client, entopts);
}

// Application entity bound to this client.
Entity* linear_application(LinearSDK* client, voxgig_value* entopts) {
  return application_entity_new(client, entopts);
}

// Attachment entity bound to this client.
Entity* linear_attachment(LinearSDK* client, voxgig_value* entopts) {
  return attachment_entity_new(client, entopts);
}

// AuditEntry entity bound to this client.
Entity* linear_audit_entry(LinearSDK* client, voxgig_value* entopts) {
  return audit_entry_entity_new(client, entopts);
}

// AuditEntryType entity bound to this client.
Entity* linear_audit_entry_type(LinearSDK* client, voxgig_value* entopts) {
  return audit_entry_type_entity_new(client, entopts);
}

// AuthResolverResponse entity bound to this client.
Entity* linear_auth_resolver_response(LinearSDK* client, voxgig_value* entopts) {
  return auth_resolver_response_entity_new(client, entopts);
}

// AuthenticationSessionResponse entity bound to this client.
Entity* linear_authentication_session_response(LinearSDK* client, voxgig_value* entopts) {
  return authentication_session_response_entity_new(client, entopts);
}

// Comment entity bound to this client.
Entity* linear_comment(LinearSDK* client, voxgig_value* entopts) {
  return comment_entity_new(client, entopts);
}

// CreateOrJoinOrganizationResponse entity bound to this client.
Entity* linear_create_or_join_organization_response(LinearSDK* client, voxgig_value* entopts) {
  return create_or_join_organization_response_entity_new(client, entopts);
}

// CustomView entity bound to this client.
Entity* linear_custom_view(LinearSDK* client, voxgig_value* entopts) {
  return custom_view_entity_new(client, entopts);
}

// Customer entity bound to this client.
Entity* linear_customer(LinearSDK* client, voxgig_value* entopts) {
  return customer_entity_new(client, entopts);
}

// CustomerNeed entity bound to this client.
Entity* linear_customer_need(LinearSDK* client, voxgig_value* entopts) {
  return customer_need_entity_new(client, entopts);
}

// CustomerStatus entity bound to this client.
Entity* linear_customer_status(LinearSDK* client, voxgig_value* entopts) {
  return customer_status_entity_new(client, entopts);
}

// CustomerTier entity bound to this client.
Entity* linear_customer_tier(LinearSDK* client, voxgig_value* entopts) {
  return customer_tier_entity_new(client, entopts);
}

// Cycle entity bound to this client.
Entity* linear_cycle(LinearSDK* client, voxgig_value* entopts) {
  return cycle_entity_new(client, entopts);
}

// Diff entity bound to this client.
Entity* linear_diff(LinearSDK* client, voxgig_value* entopts) {
  return diff_entity_new(client, entopts);
}

// Document entity bound to this client.
Entity* linear_document(LinearSDK* client, voxgig_value* entopts) {
  return document_entity_new(client, entopts);
}

// DocumentSearchResult entity bound to this client.
Entity* linear_document_search_result(LinearSDK* client, voxgig_value* entopts) {
  return document_search_result_entity_new(client, entopts);
}

// EmailIntakeAddress entity bound to this client.
Entity* linear_email_intake_address(LinearSDK* client, voxgig_value* entopts) {
  return email_intake_address_entity_new(client, entopts);
}

// EmailUserAccountAuthChallengeResponse entity bound to this client.
Entity* linear_email_user_account_auth_challenge_response(LinearSDK* client, voxgig_value* entopts) {
  return email_user_account_auth_challenge_response_entity_new(client, entopts);
}

// Emoji entity bound to this client.
Entity* linear_emoji(LinearSDK* client, voxgig_value* entopts) {
  return emoji_entity_new(client, entopts);
}

// EntityExternalLink entity bound to this client.
Entity* linear_entity_external_link(LinearSDK* client, voxgig_value* entopts) {
  return entity_external_link_entity_new(client, entopts);
}

// ExternalUser entity bound to this client.
Entity* linear_external_user(LinearSDK* client, voxgig_value* entopts) {
  return external_user_entity_new(client, entopts);
}

// Favorite entity bound to this client.
Entity* linear_favorite(LinearSDK* client, voxgig_value* entopts) {
  return favorite_entity_new(client, entopts);
}

// GitAutomationState entity bound to this client.
Entity* linear_git_automation_state(LinearSDK* client, voxgig_value* entopts) {
  return git_automation_state_entity_new(client, entopts);
}

// GitAutomationTargetBranch entity bound to this client.
Entity* linear_git_automation_target_branch(LinearSDK* client, voxgig_value* entopts) {
  return git_automation_target_branch_entity_new(client, entopts);
}

// GitHubIntegrationConnectDetail entity bound to this client.
Entity* linear_git_hub_integration_connect_detail(LinearSDK* client, voxgig_value* entopts) {
  return git_hub_integration_connect_detail_entity_new(client, entopts);
}

// Initiative entity bound to this client.
Entity* linear_initiative(LinearSDK* client, voxgig_value* entopts) {
  return initiative_entity_new(client, entopts);
}

// InitiativeLabel entity bound to this client.
Entity* linear_initiative_label(LinearSDK* client, voxgig_value* entopts) {
  return initiative_label_entity_new(client, entopts);
}

// InitiativeLeadTeamChangeImpact entity bound to this client.
Entity* linear_initiative_lead_team_change_impact(LinearSDK* client, voxgig_value* entopts) {
  return initiative_lead_team_change_impact_entity_new(client, entopts);
}

// InitiativeRelation entity bound to this client.
Entity* linear_initiative_relation(LinearSDK* client, voxgig_value* entopts) {
  return initiative_relation_entity_new(client, entopts);
}

// InitiativeToProject entity bound to this client.
Entity* linear_initiative_to_project(LinearSDK* client, voxgig_value* entopts) {
  return initiative_to_project_entity_new(client, entopts);
}

// InitiativeUpdate entity bound to this client.
Entity* linear_initiative_update(LinearSDK* client, voxgig_value* entopts) {
  return initiative_update_entity_new(client, entopts);
}

// Integration entity bound to this client.
Entity* linear_integration(LinearSDK* client, voxgig_value* entopts) {
  return integration_entity_new(client, entopts);
}

// IntegrationTemplate entity bound to this client.
Entity* linear_integration_template(LinearSDK* client, voxgig_value* entopts) {
  return integration_template_entity_new(client, entopts);
}

// IntegrationsSetting entity bound to this client.
Entity* linear_integrations_setting(LinearSDK* client, voxgig_value* entopts) {
  return integrations_setting_entity_new(client, entopts);
}

// Issue entity bound to this client.
Entity* linear_issue(LinearSDK* client, voxgig_value* entopts) {
  return issue_entity_new(client, entopts);
}

// IssueImport entity bound to this client.
Entity* linear_issue_import(LinearSDK* client, voxgig_value* entopts) {
  return issue_import_entity_new(client, entopts);
}

// IssueLabel entity bound to this client.
Entity* linear_issue_label(LinearSDK* client, voxgig_value* entopts) {
  return issue_label_entity_new(client, entopts);
}

// IssuePriorityValue entity bound to this client.
Entity* linear_issue_priority_value(LinearSDK* client, voxgig_value* entopts) {
  return issue_priority_value_entity_new(client, entopts);
}

// IssueRelation entity bound to this client.
Entity* linear_issue_relation(LinearSDK* client, voxgig_value* entopts) {
  return issue_relation_entity_new(client, entopts);
}

// IssueSearchResult entity bound to this client.
Entity* linear_issue_search_result(LinearSDK* client, voxgig_value* entopts) {
  return issue_search_result_entity_new(client, entopts);
}

// IssueToRelease entity bound to this client.
Entity* linear_issue_to_release(LinearSDK* client, voxgig_value* entopts) {
  return issue_to_release_entity_new(client, entopts);
}

// LogoutResponse entity bound to this client.
Entity* linear_logout_response(LinearSDK* client, voxgig_value* entopts) {
  return logout_response_entity_new(client, entopts);
}

// Notification entity bound to this client.
Entity* linear_notification(LinearSDK* client, voxgig_value* entopts) {
  return notification_entity_new(client, entopts);
}

// NotificationSubscription entity bound to this client.
Entity* linear_notification_subscription(LinearSDK* client, voxgig_value* entopts) {
  return notification_subscription_entity_new(client, entopts);
}

// OAuthApplication entity bound to this client.
Entity* linear_o_auth_application(LinearSDK* client, voxgig_value* entopts) {
  return o_auth_application_entity_new(client, entopts);
}

// Organization entity bound to this client.
Entity* linear_organization(LinearSDK* client, voxgig_value* entopts) {
  return organization_entity_new(client, entopts);
}

// OrganizationDomain entity bound to this client.
Entity* linear_organization_domain(LinearSDK* client, voxgig_value* entopts) {
  return organization_domain_entity_new(client, entopts);
}

// OrganizationInvite entity bound to this client.
Entity* linear_organization_invite(LinearSDK* client, voxgig_value* entopts) {
  return organization_invite_entity_new(client, entopts);
}

// OrganizationMeta entity bound to this client.
Entity* linear_organization_meta(LinearSDK* client, voxgig_value* entopts) {
  return organization_meta_entity_new(client, entopts);
}

// PasskeyLoginStartResponse entity bound to this client.
Entity* linear_passkey_login_start_response(LinearSDK* client, voxgig_value* entopts) {
  return passkey_login_start_response_entity_new(client, entopts);
}

// Project entity bound to this client.
Entity* linear_project(LinearSDK* client, voxgig_value* entopts) {
  return project_entity_new(client, entopts);
}

// ProjectLabel entity bound to this client.
Entity* linear_project_label(LinearSDK* client, voxgig_value* entopts) {
  return project_label_entity_new(client, entopts);
}

// ProjectMilestone entity bound to this client.
Entity* linear_project_milestone(LinearSDK* client, voxgig_value* entopts) {
  return project_milestone_entity_new(client, entopts);
}

// ProjectMilestoneMoveProjectTeam entity bound to this client.
Entity* linear_project_milestone_move_project_team(LinearSDK* client, voxgig_value* entopts) {
  return project_milestone_move_project_team_entity_new(client, entopts);
}

// ProjectRelation entity bound to this client.
Entity* linear_project_relation(LinearSDK* client, voxgig_value* entopts) {
  return project_relation_entity_new(client, entopts);
}

// ProjectSearchResult entity bound to this client.
Entity* linear_project_search_result(LinearSDK* client, voxgig_value* entopts) {
  return project_search_result_entity_new(client, entopts);
}

// ProjectStatus entity bound to this client.
Entity* linear_project_status(LinearSDK* client, voxgig_value* entopts) {
  return project_status_entity_new(client, entopts);
}

// ProjectUpdate entity bound to this client.
Entity* linear_project_update(LinearSDK* client, voxgig_value* entopts) {
  return project_update_entity_new(client, entopts);
}

// PushSubscription entity bound to this client.
Entity* linear_push_subscription(LinearSDK* client, voxgig_value* entopts) {
  return push_subscription_entity_new(client, entopts);
}

// Reaction entity bound to this client.
Entity* linear_reaction(LinearSDK* client, voxgig_value* entopts) {
  return reaction_entity_new(client, entopts);
}

// Release entity bound to this client.
Entity* linear_release(LinearSDK* client, voxgig_value* entopts) {
  return release_entity_new(client, entopts);
}

// ReleaseNote entity bound to this client.
Entity* linear_release_note(LinearSDK* client, voxgig_value* entopts) {
  return release_note_entity_new(client, entopts);
}

// ReleasePipeline entity bound to this client.
Entity* linear_release_pipeline(LinearSDK* client, voxgig_value* entopts) {
  return release_pipeline_entity_new(client, entopts);
}

// ReleaseStage entity bound to this client.
Entity* linear_release_stage(LinearSDK* client, voxgig_value* entopts) {
  return release_stage_entity_new(client, entopts);
}

// Roadmap entity bound to this client.
Entity* linear_roadmap(LinearSDK* client, voxgig_value* entopts) {
  return roadmap_entity_new(client, entopts);
}

// RoadmapToProject entity bound to this client.
Entity* linear_roadmap_to_project(LinearSDK* client, voxgig_value* entopts) {
  return roadmap_to_project_entity_new(client, entopts);
}

// SlaConfiguration entity bound to this client.
Entity* linear_sla_configuration(LinearSDK* client, voxgig_value* entopts) {
  return sla_configuration_entity_new(client, entopts);
}

// SsoUrlFromEmailResponse entity bound to this client.
Entity* linear_sso_url_from_email_response(LinearSDK* client, voxgig_value* entopts) {
  return sso_url_from_email_response_entity_new(client, entopts);
}

// Team entity bound to this client.
Entity* linear_team(LinearSDK* client, voxgig_value* entopts) {
  return team_entity_new(client, entopts);
}

// TeamMembership entity bound to this client.
Entity* linear_team_membership(LinearSDK* client, voxgig_value* entopts) {
  return team_membership_entity_new(client, entopts);
}

// Template entity bound to this client.
Entity* linear_template(LinearSDK* client, voxgig_value* entopts) {
  return template_entity_new(client, entopts);
}

// TimeSchedule entity bound to this client.
Entity* linear_time_schedule(LinearSDK* client, voxgig_value* entopts) {
  return time_schedule_entity_new(client, entopts);
}

// TriageResponsibility entity bound to this client.
Entity* linear_triage_responsibility(LinearSDK* client, voxgig_value* entopts) {
  return triage_responsibility_entity_new(client, entopts);
}

// UploadFile entity bound to this client.
Entity* linear_upload_file(LinearSDK* client, voxgig_value* entopts) {
  return upload_file_entity_new(client, entopts);
}

// UsageAlert entity bound to this client.
Entity* linear_usage_alert(LinearSDK* client, voxgig_value* entopts) {
  return usage_alert_entity_new(client, entopts);
}

// User entity bound to this client.
Entity* linear_user(LinearSDK* client, voxgig_value* entopts) {
  return user_entity_new(client, entopts);
}

// UserSetting entity bound to this client.
Entity* linear_user_setting(LinearSDK* client, voxgig_value* entopts) {
  return user_setting_entity_new(client, entopts);
}

// ViewPreference entity bound to this client.
Entity* linear_view_preference(LinearSDK* client, voxgig_value* entopts) {
  return view_preference_entity_new(client, entopts);
}

// Webhook entity bound to this client.
Entity* linear_webhook(LinearSDK* client, voxgig_value* entopts) {
  return webhook_entity_new(client, entopts);
}

// WebhookFailureEvent entity bound to this client.
Entity* linear_webhook_failure_event(LinearSDK* client, voxgig_value* entopts) {
  return webhook_failure_event_entity_new(client, entopts);
}

// WorkflowState entity bound to this client.
Entity* linear_workflow_state(LinearSDK* client, voxgig_value* entopts) {
  return workflow_state_entity_new(client, entopts);
}


LinearSDK* test_sdk(voxgig_value* testopts, voxgig_value* sdkopts) {
  sdkopts = voxgig_is_map(sdkopts) ? voxgig_clone(sdkopts) : voxgig_new_map();
  testopts = voxgig_is_map(testopts) ? voxgig_clone(testopts) : voxgig_new_map();
  setp(testopts, "active", v_bool(true));

  // set_path mutates sdkopts in place; discard the return (keep the ROOT).
  voxgig_value* path = clist(2, v_str("feature"), v_str("test"));
  voxgig_setpath(sdkopts, path, testopts, NULL);

  LinearSDK* sdk = linear_sdk_new(sdkopts);
  free(sdk->mode);
  sdk->mode = strdup("test");
  return sdk;
}
