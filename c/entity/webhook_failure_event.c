// WebhookFailureEvent entity client (generated — mirrors the rust Entity fragment).

#include "api.h"

#include <stdlib.h>
#include <string.h>

typedef struct webhook_failure_event_entity {
  Entity base;            // vtable pointer (first member)
  char* name;
  LinearSDK* client;
  Utility* utility;
  voxgig_value* entopts;
  voxgig_value* data;     // Map
  voxgig_value* mtch;     // Map
  Context* entctx;
  // Set once a successful `remove` resolves on this instance.
  bool deleted;
} webhook_failure_event_entity;

typedef void (*webhook_failure_event_postdone_fn)(webhook_failure_event_entity* self, Context* ctx);

// Forward declarations.
static const EntityVT webhook_failure_event_VT;
static const char* webhook_failure_event_get_name(Entity* e);
static Entity* webhook_failure_event_make(Entity* e);
static voxgig_value* webhook_failure_event_data(Entity* e, voxgig_value* args);
static voxgig_value* webhook_failure_event_matchv(Entity* e, voxgig_value* args);
// Ops resolve to the ENTITY (`list` to a NULL-terminated array of them).
static Entity* webhook_failure_event_load(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err);
static Entity** webhook_failure_event_list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err);
static Entity* webhook_failure_event_create(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err);
static Entity* webhook_failure_event_update(Entity* e, voxgig_value* reqdata, voxgig_value* ctrl, PNError** err);
static Entity* webhook_failure_event_remove(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err);
static void webhook_failure_event_mark_deleted(Entity* e);
static bool webhook_failure_event_deleted(Entity* e);

static Context* webhook_failure_event_ent_ctx(webhook_failure_event_entity* self) {
  return self->entctx;
}

Entity* webhook_failure_event_entity_new(LinearSDK* client, voxgig_value* entopts) {
  entopts = voxgig_is_map(entopts) ? entopts : voxgig_new_map();

  bool act;
  if (!get_bool(entopts, "active", &act)) {
    setp(entopts, "active", v_bool(true));
  } else if (act != false) {
    setp(entopts, "active", v_bool(true));
  }

  webhook_failure_event_entity* self = (webhook_failure_event_entity*)calloc(1, sizeof(webhook_failure_event_entity));
  self->base.vt = &webhook_failure_event_VT;
  self->name = strdup("webhook_failure_event");
  self->client = client;
  self->utility = sdk_get_utility(client);
  self->entopts = entopts;
  self->data = voxgig_new_map();
  self->mtch = voxgig_new_map();
  self->entctx = NULL;

  CtxSpec cs;
  memset(&cs, 0, sizeof(cs));
  cs.entity = (Entity*)self;
  cs.entopts = entopts;
  Context* entctx = make_context_util(cs, sdk_get_root_ctx(client));

  feature_hook_util(entctx, "PostConstructEntity");

  self->entctx = entctx;
  return (Entity*)self;
}

// Pipeline: make_point -> make_spec -> make_request -> make_response ->
// make_result -> post_done -> done. Feature hooks fire between stages.
static voxgig_value* webhook_failure_event_run_op(webhook_failure_event_entity* self, Context* ctx,
                                    webhook_failure_event_postdone_fn post_done, PNError** err) {
  Utility* utility = self->utility;
  (void)utility;
  PNError* e = NULL;

  feature_hook_util(ctx, "PrePoint");
  voxgig_value* point = make_point_util(ctx, &e);
  if (e) return make_error_util(ctx, e, err);
  ctx_out_set_point_val(ctx, point);

  feature_hook_util(ctx, "PreSpec");
  Spec* spec = make_spec_util(ctx, &e);
  if (e) return make_error_util(ctx, e, err);
  ctx->out_spec = spec;

  feature_hook_util(ctx, "PreRequest");
  Response* resp = make_request_util(ctx, &e);
  if (e) return make_error_util(ctx, e, err);
  ctx->out_request = resp;

  feature_hook_util(ctx, "PreResponse");
  Response* resp2 = make_response_util(ctx, &e);
  if (e) return make_error_util(ctx, e, err);
  ctx->out_response = resp2;

  feature_hook_util(ctx, "PreResult");
  SdkResult* result = make_result_util(ctx, &e);
  if (e) return make_error_util(ctx, e, err);
  ctx->out_result = result;

  feature_hook_util(ctx, "PreDone");
  post_done(self, ctx);

  return done_util(ctx, err);
}

// Streaming operation. Runs `action` through the full pipeline and returns a
// List of the result items, so the `streaming` feature's incremental output
// is reachable from a generated entity (a normal op call materialises the
// whole result). This runtime is synchronous and C has no lazy iterators, so
// the returned value is a List cursor the caller walks (voxgig_as_list).
// `callopts` parameterises the call:
//   - inbound (download): the items/chunks the streaming feature produces when
//     active, else the materialised items;
//   - outbound (upload): a `body` in `callopts` is attached to the request
//     (reqdata `body$`) so the transport can stream a payload;
//   - `ctrl` (pipeline control) threads pipeline options.
voxgig_value* webhook_failure_event_stream(Entity* e, const char* action, voxgig_value* args,
                             voxgig_value* callopts, PNError** err) {
  webhook_failure_event_entity* self = (webhook_failure_event_entity*)e;
  *err = NULL;

  voxgig_value* stream_opts = voxgig_is_map(callopts) ? callopts : voxgig_new_map();

  voxgig_value* ctrl = to_map(getp(stream_opts, "ctrl"));
  if (!voxgig_is_map(ctrl)) ctrl = voxgig_new_map();
  setp(ctrl, "stream", v_share(stream_opts));

  voxgig_value* reqmatch = to_map(args);
  if (!voxgig_is_map(reqmatch)) reqmatch = voxgig_new_map();

  CtxSpec cs;
  memset(&cs, 0, sizeof(cs));
  cs.opname = action;
  cs.ctrl = ctrl;
  cs.mtch = self->mtch;
  cs.data = self->data;
  cs.reqmatch = reqmatch;
  Context* ctx = make_context_util(cs, webhook_failure_event_ent_ctx(self));

  // Outbound: attach a caller `body` so the transport can stream a payload.
  voxgig_value* body = getp(stream_opts, "body");
  if (!v_is_noval(body) && !v_is_null(body)) {
    voxgig_value* reqdata = voxgig_is_map(ctx->reqdata) ? ctx->reqdata : voxgig_new_map();
    setp(reqdata, "body$", v_share(body));
    ctx->reqdata = reqdata;
  }

  PNError* pe = NULL;

  feature_hook_util(ctx, "PrePoint");
  voxgig_value* point = make_point_util(ctx, &pe);
  if (pe) { *err = pe; return NULL; }
  ctx_out_set_point_val(ctx, point);

  feature_hook_util(ctx, "PreSpec");
  Spec* spec = make_spec_util(ctx, &pe);
  if (pe) { *err = pe; return NULL; }
  ctx->out_spec = spec;

  feature_hook_util(ctx, "PreRequest");
  Response* resp = make_request_util(ctx, &pe);
  if (pe) { *err = pe; return NULL; }
  ctx->out_request = resp;

  feature_hook_util(ctx, "PreResponse");
  Response* resp2 = make_response_util(ctx, &pe);
  if (pe) { *err = pe; return NULL; }
  ctx->out_response = resp2;

  feature_hook_util(ctx, "PreResult");
  SdkResult* result = make_result_util(ctx, &pe);
  if (pe) { *err = pe; return NULL; }
  ctx->out_result = result;

  feature_hook_util(ctx, "PreDone");

  // Inbound: prefer the streaming feature's incremental producer; else fall
  // back to the materialised items so `stream` always yields.
  SdkResult* res = ctx->result;
  if (res && res->stream) {
    return res->stream(res->stream_ud);
  }

  voxgig_value* data = done_util(ctx, err);
  if (*err) return NULL;

  voxgig_value* out = voxgig_new_list();
  if (voxgig_is_list(data)) {
    voxgig_list* l = voxgig_as_list(data);
    for (size_t i = 0; i < l->len; i++) {
      voxgig_list_push(voxgig_as_list(out), voxgig_retain(l->items[i]));
    }
  } else if (!v_is_noval(data) && !v_is_null(data)) {
    voxgig_list_push(voxgig_as_list(out), voxgig_retain(data));
  }
  return out;
}

static const char* webhook_failure_event_get_name(Entity* e) {
  return ((webhook_failure_event_entity*)e)->name;
}

static Entity* webhook_failure_event_make(Entity* e) {
  webhook_failure_event_entity* self = (webhook_failure_event_entity*)e;
  voxgig_value* opts = voxgig_new_map();
  if (voxgig_is_map(self->entopts)) {
    voxgig_map* m = voxgig_as_map(self->entopts);
    for (size_t i = 0; i < m->len; i++) {
      setp(opts, m->entries[i].key, voxgig_retain(m->entries[i].value));
    }
  }
  return webhook_failure_event_entity_new(self->client, opts);
}

static voxgig_value* webhook_failure_event_data(Entity* e, voxgig_value* args) {
  webhook_failure_event_entity* self = (webhook_failure_event_entity*)e;
  if (args && !v_is_noval(args) && !v_is_null(args)) {
    voxgig_value* cloned = to_map(voxgig_clone(args));
    self->data = voxgig_is_map(cloned) ? cloned : voxgig_new_map();
    feature_hook_util(webhook_failure_event_ent_ctx(self), "SetData");
  }
  feature_hook_util(webhook_failure_event_ent_ctx(self), "GetData");
  return voxgig_clone(self->data);
}

static voxgig_value* webhook_failure_event_matchv(Entity* e, voxgig_value* args) {
  webhook_failure_event_entity* self = (webhook_failure_event_entity*)e;
  if (args && !v_is_noval(args) && !v_is_null(args)) {
    voxgig_value* cloned = to_map(voxgig_clone(args));
    self->mtch = voxgig_is_map(cloned) ? cloned : voxgig_new_map();
    feature_hook_util(webhook_failure_event_ent_ctx(self), "SetMatch");
  }
  feature_hook_util(webhook_failure_event_ent_ctx(self), "GetMatch");
  return voxgig_clone(self->mtch);
}

static Entity* webhook_failure_event_load(Entity* e, voxgig_value* reqarg, voxgig_value* ctrl, PNError** err) {
  (void)e; (void)reqarg; (void)ctrl;
  *err = unsupported_op("load", "webhook_failure_event");
  return NULL;
}


static void webhook_failure_event_list_postdone(webhook_failure_event_entity* self, Context* ctx) {
  SdkResult* result = ctx->result;
  if (result) {
    voxgig_value* resmatch = result->resmatch;
    if (voxgig_is_map(resmatch)) self->mtch = resmatch;
  }
}

static Entity** webhook_failure_event_list(Entity* e, voxgig_value* reqmatch, voxgig_value* ctrl, PNError** err) {
  webhook_failure_event_entity* self = (webhook_failure_event_entity*)e;
  CtxSpec cs;
  memset(&cs, 0, sizeof(cs));
  cs.opname = "list";
  cs.ctrl = ctrl;
  cs.mtch = self->mtch;
  cs.data = self->data;
  cs.reqmatch = reqmatch;
  Context* ctx = make_context_util(cs, webhook_failure_event_ent_ctx(self));
  voxgig_value* out = webhook_failure_event_run_op(self, ctx, webhook_failure_event_list_postdone, err);
  if (*err) return NULL;

  // `list` resolves to one ENTITY per record. make_result cannot build them
  // here - it works in voxgig_value, which has no slot for an entity - so the
  // op does, mirroring what the dynamic targets get from make_result. The
  // array is NULL-terminated.
  size_t n = voxgig_is_list(out) ? voxgig_as_list(out)->len : 0;
  Entity** items = (Entity**)calloc(n + 1, sizeof(Entity*));
  for (size_t i = 0; i < n; i++) {
    voxgig_value* entry = voxgig_as_list(out)->items[i];
    Entity* ent = e->vt->make(e);
    if (voxgig_is_map(entry)) ent->vt->data(ent, entry);
    items[i] = ent;
  }
  items[n] = NULL;

  return items;
}


static Entity* webhook_failure_event_create(Entity* e, voxgig_value* reqarg, voxgig_value* ctrl, PNError** err) {
  (void)e; (void)reqarg; (void)ctrl;
  *err = unsupported_op("create", "webhook_failure_event");
  return NULL;
}

static Entity* webhook_failure_event_update(Entity* e, voxgig_value* reqarg, voxgig_value* ctrl, PNError** err) {
  (void)e; (void)reqarg; (void)ctrl;
  *err = unsupported_op("update", "webhook_failure_event");
  return NULL;
}

static Entity* webhook_failure_event_remove(Entity* e, voxgig_value* reqarg, voxgig_value* ctrl, PNError** err) {
  (void)e; (void)reqarg; (void)ctrl;
  *err = unsupported_op("remove", "webhook_failure_event");
  return NULL;
}

// `remove` resolves to the entity, marked. The instance KEEPS the data it
// held - a caller can still read what was deleted - but it is no longer a
// live record.
static void webhook_failure_event_mark_deleted(Entity* e) {
  ((webhook_failure_event_entity*)e)->deleted = true;
}

static bool webhook_failure_event_deleted(Entity* e) {
  return ((webhook_failure_event_entity*)e)->deleted;
}

static const EntityVT webhook_failure_event_VT = {
  webhook_failure_event_get_name,
  webhook_failure_event_make,
  webhook_failure_event_data,
  webhook_failure_event_matchv,
  webhook_failure_event_mark_deleted,
  webhook_failure_event_deleted,
  webhook_failure_event_load,
  webhook_failure_event_list,
  webhook_failure_event_create,
  webhook_failure_event_update,
  webhook_failure_event_remove,
};
