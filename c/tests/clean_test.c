// Generated canary sweep (see TestClean_c): no credential leaves the SDK
// in any form, and the sweep can see one when clean is switched off.

#include "ctest.h"

#include <ctype.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <strings.h>

// Generated: the credential's wire placement is fixed when the SDK is built.
static const bool AUTH_SUPPRESSED = false;
static const char* AUTH_WHERE = "header";
static const char* AUTH_NAME = "authorization";

// The diagnostic features this SDK ships.
static const char* FEATURES[] = { "debug", "metrics", NULL };

static const char* CANARY_APIKEY = "CANARY-APIKEY-k9x2m7q4p1";
static const char* CANARY_SECRET = "CANARY-SECRET-w3e8r5t2y6";
static const char* CANARY_HEADER = "CANARY-HEADER-z1x4c7v0b3";
static const char* CANARY_VALUE = "CANARY-VALUE-n5m8b2v9c4";

static const char* MASK = "[redacted]";

// The sweep's own encoders: a leak of an encoded form must not hide behind
// the SDK's encoder.
static char* b64(const char* in) {
  static const char ALPHABET[] =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  size_t n = strlen(in);
  char* out = (char*)malloc((n + 2) / 3 * 4 + 1);
  size_t o = 0;
  for (size_t i = 0; i < n; i += 3) {
    unsigned int v = (unsigned char)in[i] << 16;
    if (i + 1 < n) v |= (unsigned int)(unsigned char)in[i + 1] << 8;
    if (i + 2 < n) v |= (unsigned int)(unsigned char)in[i + 2];
    out[o++] = ALPHABET[(v >> 18) & 0x3f];
    out[o++] = ALPHABET[(v >> 12) & 0x3f];
    out[o++] = (i + 1 < n) ? ALPHABET[(v >> 6) & 0x3f] : '=';
    out[o++] = (i + 2 < n) ? ALPHABET[v & 0x3f] : '=';
  }
  out[o] = '\0';
  return out;
}

static char* pct(const char* in) {
  size_t n = strlen(in);
  char* out = (char*)malloc(n * 3 + 1);
  size_t o = 0;
  for (size_t i = 0; i < n; i++) {
    unsigned char c = (unsigned char)in[i];
    if (isalnum(c) || strchr("-_.!~*'()", c)) {
      out[o++] = (char)c;
    } else {
      o += (size_t)sprintf(out + o, "%%%02X", c);
    }
  }
  out[o] = '\0';
  return out;
}

// Every form a canary can travel in.
static const char* FORMS[16];
static size_t NFORMS = 0;

static void build_forms(void) {
  const char* canaries[4] = { CANARY_APIKEY, CANARY_SECRET, CANARY_HEADER, CANARY_VALUE };
  for (int i = 0; i < 4; i++) {
    FORMS[NFORMS++] = canaries[i];
    FORMS[NFORMS++] = b64(canaries[i]);
    FORMS[NFORMS++] = pct(canaries[i]);
  }
  char pair[256];
  snprintf(pair, sizeof(pair), "%s:%s", CANARY_APIKEY, CANARY_SECRET);
  FORMS[NFORMS++] = b64(pair);
}

typedef struct {
  const char* name;
  char* text;
} Sink;

static Sink* SINKS = NULL;
static size_t NSINKS = 0;
static size_t CAPSINKS = 0;

static void push(const char* name, char* text) {
  if (NSINKS == CAPSINKS) {
    CAPSINKS = CAPSINKS ? CAPSINKS * 2 : 64;
    SINKS = (Sink*)realloc(SINKS, CAPSINKS * sizeof(Sink));
  }
  SINKS[NSINKS].name = name;
  SINKS[NSINKS].text = text ? text : strdup("");
  NSINKS++;
}

static void push_value(const char* name, voxgig_value* val) {
  push(name, voxgig_jsonify(val, NULL));
  push(name, voxgig_stringify(val, -1));
}

static void push_error(const char* name, PNError* err) {
  push(name, strdup(err->msg ? err->msg : ""));
  push(name, pn_error_str(err));
  push(name, voxgig_jsonify(err->spec, NULL));
  push(name, voxgig_jsonify(err->result, NULL));
}

static voxgig_value* capture_fn(void* ud, voxgig_value* arg) {
  push_value((const char*)ud, arg);
  return v_undef();
}

// Captures the serialised context from inside the pipeline: what a hook
// author would hand to a logger.
typedef struct {
  Feature base;
} CaptureFeature;

static const char* capture_name(Feature* f) { (void)f; return "capture"; }
static bool capture_active(Feature* f) { (void)f; return true; }
static voxgig_value* capture_add_options(Feature* f) { (void)f; return NULL; }
static void capture_init(Feature* f, Context* ctx, voxgig_value* options) {
  (void)f; (void)ctx; (void)options;
}
static void capture_hook(Feature* f, const char* name, Context* ctx) {
  (void)f;
  if (0 == strcmp(name, "PreRequest") || 0 == strcmp(name, "PreResponse") ||
      0 == strcmp(name, "PreUnexpected")) {
    push("ctx", context_str(ctx));
    push_value("ctx", context_to_value(ctx));
  }
}

static const FeatureVT CAPTURE_VT = {
  capture_name, capture_active, capture_add_options, capture_init, capture_hook, NULL,
};

// A feature that fails the operation from inside the pipeline, quoting the
// request it saw. A C hook has no error return, so it fails the result: an
// error make_error receives from a hook, not from the pipeline. For the same
// reason there is no variant failing in PreUnexpected: make_error has built
// and cleaned the error it returns before that hook runs.
static const char* throw_name(Feature* f) { (void)f; return "throwhook"; }
static void throw_hook(Feature* f, const char* name, Context* ctx) {
  (void)f;
  if (0 != strcmp(name, "PreResponse") || !ctx->result) return;
  char* spec = voxgig_jsonify(ctx->spec ? spec_to_value(ctx->spec) : v_undef(), NULL);
  char msg[4096];
  snprintf(msg, sizeof(msg), "hook saw %s", spec ? spec : "");
  ctx->result->err = context_make_error(ctx, "hook", msg);
}

static const FeatureVT THROW_VT = {
  throw_name, capture_active, capture_add_options, capture_init, throw_hook, NULL,
};

// A feature that refuses the operation with the SDK's own error, as rbac
// does, whose code quotes a registered value; it records the error
// PreUnexpected hands a hook.
static const char* deny_name(Feature* f) { (void)f; return "denyhook"; }
static void deny_hook(Feature* f, const char* name, Context* ctx) {
  (void)f;
  if (0 == strcmp(name, "PrePoint")) {
    char code[128];
    snprintf(code, sizeof(code), "denied:%s", CANARY_VALUE);
    ctx_out_set_point_err(ctx, context_make_error(ctx, code, "denied"));
  } else if (0 == strcmp(name, "PreUnexpected") && ctx->ctrl && ctx->ctrl->err) {
    push_error("error", ctx->ctrl->err);
  }
}

static const FeatureVT DENY_VT = {
  deny_name, capture_active, capture_add_options, capture_init, deny_hook, NULL,
};

// A stream that succeeds, so the pipeline's terminal step never runs. A C
// stream producer has no error channel, so no stream fails.
static voxgig_value* streamok_items(void* ud) {
  voxgig_value* data = (voxgig_value*)ud;
  voxgig_value* out = v_list();
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

static const char* streamok_name(Feature* f) { (void)f; return "streamok"; }
static void streamok_hook(Feature* f, const char* name, Context* ctx) {
  (void)f;
  if (0 != strcmp(name, "PreDone") || !ctx->result) return;
  ctx->result->stream = streamok_items;
  ctx->result->stream_ud = v_share(ctx->result->resdata);
}

static const FeatureVT STREAMOK_VT = {
  streamok_name, capture_active, capture_add_options, capture_init, streamok_hook, NULL,
};

enum { SC_OK = 0, SC_NOTFOUND, SC_SERVER, SC_TRANSPORT, SC_NOTJSON, SC_COUNT };
static const char* SC_NAMES[] = { "ok", "notfound", "server", "transport", "notjson" };

static voxgig_value* response(int status, voxgig_value* data, const char* hk, const char* hv) {
  voxgig_value* headers = cmap(1, "content-type", v_str("application/json"));
  if (hk) setp(headers, hk, v_str(hv));
  return cmap(5,
    "status", v_num((double)status),
    "statusText", v_str(status < 400 ? "OK" : "ERR"),
    "headers", headers,
    "body", v_str(voxgig_jsonify(data, NULL)),
    "json", json_thunk(data));
}

static voxgig_value* respond(int sc, const char* url) {
  switch (sc) {
    case SC_OK:
      return response(200, cmap(2, "id", v_str("i1"), "name", v_str("n1")),
                      "x-session-token", "RESP-TOKEN-a1b2c3d4e5");
    case SC_NOTFOUND:
      return response(404, cmap(1, "error", v_str("no such record")), NULL, NULL);
    case SC_SERVER:
      return response(500, cmap(1, "error", v_str("boom")), NULL, NULL);
    case SC_TRANSPORT: {
      char msg[2048];
      snprintf(msg, sizeof(msg), "socket hang up (URL was: \"%s\")", url);
      return cmap(1, "__err__", v_str(msg));
    }
    default:
      return cmap(5,
        "status", v_num(200),
        "statusText", v_str("OK"),
        "headers", v_map(),
        "body", v_str("<html>"),
        "json", json_thunk(v_undef()));
  }
}

// The transport seam: system.fetch is called with [url, fetchdef].
static voxgig_value* transport_fn(void* ud, voxgig_value* args) {
  int sc = (int)(intptr_t)ud;
  const char* url = "";
  if (voxgig_is_list(args) && 0 < voxgig_as_list(args)->len) {
    voxgig_value* u = voxgig_as_list(args)->items[0];
    if (voxgig_is_string(u)) url = voxgig_as_string(u);
  }
  return respond(sc, url);
}

// Offline, as every generated suite is: the test OPTION resolves a required
// server variable to test-<name>, and installs no transport. A construction
// that fails aborts, which no harness can catch, so the option is the guard.
static voxgig_value* offline(voxgig_value* opts) {
  setp(opts, "test", cmap(1, "active", v_bool(true)));
  return opts;
}

static LinearSDK* make_sdk_with(int sc, voxgig_value* cleanopts, Feature* extra,
    voxgig_value* auth) {
  voxgig_value* feature = v_map();
  for (size_t i = 0; FEATURES[i]; i++) {
    const char* name = FEATURES[i];
    voxgig_value* fopts = cmap(1, "active", v_bool(true));
    if (0 == strcmp(name, "log")) setp(fopts, "logger", vfn(capture_fn, (void*)"log"));
    else if (0 == strcmp(name, "debug")) setp(fopts, "onEntry", vfn(capture_fn, (void*)"debug"));
    else if (0 == strcmp(name, "audit")) setp(fopts, "sink", vfn(capture_fn, (void*)"audit"));
    else if (0 == strcmp(name, "telemetry")) setp(fopts, "exporter", vfn(capture_fn, (void*)"telemetry"));
    else if (0 == strcmp(name, "cost")) setp(fopts, "sink", vfn(capture_fn, (void*)"cost"));
    setp(feature, name, fopts);
  }

  voxgig_value* clean = cmap(1, "values", v_str(CANARY_VALUE));
  if (voxgig_is_map(cleanopts)) {
    voxgig_map* m = voxgig_as_map(cleanopts);
    for (size_t i = 0; i < m->len; i++) {
      setp(clean, m->entries[i].key, voxgig_retain(m->entries[i].value));
    }
  }

  voxgig_value* opts = cmap(6,
    "apikey", v_str(CANARY_APIKEY),
    "secret", v_str(CANARY_SECRET),
    "headers", cmap(1, "X-Custom-Token", v_str(CANARY_HEADER)),
    "clean", clean,
    "feature", feature,
    "system", cmap(1, "fetch", vfn(transport_fn, (void*)(intptr_t)sc)));
  if (auth) setp(opts, "auth", auth);
  LinearSDK* sdk = linear_sdk_new(offline(opts));

  // C options are pure data, so the extension feature is added after
  // construction (the `extend` option of the ts client).
  CaptureFeature* cf = (CaptureFeature*)calloc(1, sizeof(CaptureFeature));
  cf->base.vt = &CAPTURE_VT;
  sdk_features_push(sdk, (Feature*)cf);
  if (extra) sdk_features_push(sdk, extra);

  return sdk;
}

static LinearSDK* make_sdk(int sc, voxgig_value* cleanopts, Feature* extra) {
  return make_sdk_with(sc, cleanopts, extra, NULL);
}

// What the operation returned, and the match its entity then holds.
typedef PNError* (*Drive)(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match);
typedef voxgig_value* (*Streamer)(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err);

static PNError* drive_access_key_release_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_access_key_release(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_access_key_release_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_access_key_release(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_access_key_release_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_access_key_release(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_access_key_release_pipeline_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_access_key_release_pipeline(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_agent_activity_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_agent_activity(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_agent_activity_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_agent_activity(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_agent_activity_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_agent_activity(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_agent_activity_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_agent_activity(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_agent_session_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_agent_session(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_agent_session_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_agent_session(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_agent_session_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_agent_session(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_agent_session_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_agent_session(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_agent_skill_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_agent_skill(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_agent_skill_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_agent_skill(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_agent_skill_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_agent_skill(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_agent_skill_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_agent_skill(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_agent_skill_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_agent_skill(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_application_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_application(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_attachment_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_attachment(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_attachment_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_attachment(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_attachment_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_attachment(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_attachment_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_attachment(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_attachment_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_attachment(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_audit_entry_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_audit_entry(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_audit_entry_type_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_audit_entry_type(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_auth_resolver_response_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_auth_resolver_response(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_auth_resolver_response_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_auth_resolver_response(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_auth_resolver_response_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_auth_resolver_response(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_authentication_session_response_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_authentication_session_response(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_comment_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_comment(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_comment_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_comment(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_comment_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_comment(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_comment_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_comment(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_comment_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_comment(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_create_or_join_organization_response_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_create_or_join_organization_response(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_create_or_join_organization_response_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_create_or_join_organization_response(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_custom_view_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_custom_view(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_custom_view_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_custom_view(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_custom_view_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_custom_view(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_custom_view_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_custom_view(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_custom_view_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_custom_view(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_customer_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_customer(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_customer_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_customer(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_customer_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_customer(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_customer_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_customer(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_customer_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_customer(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_customer_need_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_customer_need(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_customer_need_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_customer_need(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_customer_need_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_customer_need(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_customer_need_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_customer_need(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_customer_need_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_customer_need(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_customer_status_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_customer_status(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_customer_status_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_customer_status(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_customer_status_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_customer_status(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_customer_status_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_customer_status(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_customer_status_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_customer_status(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_customer_tier_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_customer_tier(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_customer_tier_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_customer_tier(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_customer_tier_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_customer_tier(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_customer_tier_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_customer_tier(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_customer_tier_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_customer_tier(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_cycle_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_cycle(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_cycle_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_cycle(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_cycle_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_cycle(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_cycle_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_cycle(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_diff_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_diff(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_document_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_document(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_document_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_document(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_document_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_document(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_document_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_document(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_document_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_document(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_document_search_result_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_document_search_result(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_email_intake_address_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_email_intake_address(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_email_intake_address_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_email_intake_address(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_email_intake_address_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_email_intake_address(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_email_intake_address_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_email_intake_address(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_email_user_account_auth_challenge_response_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_email_user_account_auth_challenge_response(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_emoji_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_emoji(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_emoji_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_emoji(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_emoji_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_emoji(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_emoji_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_emoji(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_entity_external_link_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_entity_external_link(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_entity_external_link_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_entity_external_link(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_entity_external_link_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_entity_external_link(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_entity_external_link_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_entity_external_link(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_external_user_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_external_user(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_external_user_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_external_user(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_favorite_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_favorite(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_favorite_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_favorite(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_favorite_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_favorite(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_favorite_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_favorite(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_favorite_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_favorite(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_git_automation_state_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_git_automation_state(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_git_automation_state_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_git_automation_state(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_git_automation_state_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_git_automation_state(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_git_automation_target_branch_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_git_automation_target_branch(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_git_automation_target_branch_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_git_automation_target_branch(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_git_automation_target_branch_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_git_automation_target_branch(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_git_hub_integration_connect_detail_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_git_hub_integration_connect_detail(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_git_hub_integration_connect_detail_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_git_hub_integration_connect_detail(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_initiative_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_initiative(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_initiative_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_initiative(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_initiative_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_initiative(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_initiative_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_initiative(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_initiative_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_initiative(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_initiative_label_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_initiative_label(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_initiative_label_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_initiative_label(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_initiative_label_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_initiative_label(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_initiative_label_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_initiative_label(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_initiative_label_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_initiative_label(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_initiative_lead_team_change_impact_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_initiative_lead_team_change_impact(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_initiative_relation_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_initiative_relation(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_initiative_relation_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_initiative_relation(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_initiative_relation_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_initiative_relation(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_initiative_relation_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_initiative_relation(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_initiative_relation_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_initiative_relation(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_initiative_to_project_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_initiative_to_project(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_initiative_to_project_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_initiative_to_project(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_initiative_to_project_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_initiative_to_project(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_initiative_to_project_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_initiative_to_project(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_initiative_to_project_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_initiative_to_project(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_initiative_update_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_initiative_update(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_initiative_update_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_initiative_update(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_initiative_update_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_initiative_update(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_initiative_update_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_initiative_update(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_integration_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_integration(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_integration_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_integration(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_integration_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_integration(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_integration_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_integration(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_integration_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_integration(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_integration_template_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_integration_template(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_integration_template_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_integration_template(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_integration_template_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_integration_template(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_integration_template_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_integration_template(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_integrations_setting_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_integrations_setting(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_integrations_setting_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_integrations_setting(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_integrations_setting_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_integrations_setting(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_issue_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_issue(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_issue_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_issue(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_issue_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_issue(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_issue_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_issue(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_issue_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_issue(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_issue_import_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_issue_import(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_issue_import_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_issue_import(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_issue_import_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_issue_import(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_issue_label_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_issue_label(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_issue_label_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_issue_label(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_issue_label_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_issue_label(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_issue_label_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_issue_label(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_issue_label_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_issue_label(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_issue_priority_value_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_issue_priority_value(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_issue_relation_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_issue_relation(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_issue_relation_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_issue_relation(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_issue_relation_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_issue_relation(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_issue_relation_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_issue_relation(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_issue_relation_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_issue_relation(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_issue_search_result_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_issue_search_result(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_issue_to_release_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_issue_to_release(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_issue_to_release_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_issue_to_release(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_issue_to_release_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_issue_to_release(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_issue_to_release_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_issue_to_release(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_logout_response_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_logout_response(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_logout_response_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_logout_response(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_notification_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_notification(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_notification_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_notification(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_notification_subscription_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_notification_subscription(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_notification_subscription_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_notification_subscription(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_o_auth_application_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_o_auth_application(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_o_auth_application_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_o_auth_application(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_o_auth_application_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_o_auth_application(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_o_auth_application_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_o_auth_application(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_organization_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_organization(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_organization_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_organization(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_organization_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_organization(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_organization_domain_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_organization_domain(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_organization_domain_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_organization_domain(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_organization_domain_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_organization_domain(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_organization_invite_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_organization_invite(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_organization_invite_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_organization_invite(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_organization_invite_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_organization_invite(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_organization_invite_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_organization_invite(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_organization_invite_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_organization_invite(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_organization_meta_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_organization_meta(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_passkey_login_start_response_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_passkey_login_start_response(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_project_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_project(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_project_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_project(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_project_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_project(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_project_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_project(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_project_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_project(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_project_label_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_project_label(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_project_label_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_project_label(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_project_label_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_project_label(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_project_label_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_project_label(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_project_label_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_project_label(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_project_milestone_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_project_milestone(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_project_milestone_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_project_milestone(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_project_milestone_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_project_milestone(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_project_milestone_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_project_milestone(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_project_milestone_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_project_milestone(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_project_milestone_move_project_team_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_project_milestone_move_project_team(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_project_relation_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_project_relation(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_project_relation_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_project_relation(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_project_relation_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_project_relation(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_project_relation_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_project_relation(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_project_relation_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_project_relation(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_project_search_result_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_project_search_result(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_project_status_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_project_status(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_project_status_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_project_status(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_project_status_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_project_status(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_project_status_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_project_status(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_project_update_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_project_update(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_project_update_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_project_update(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_project_update_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_project_update(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_project_update_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_project_update(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_project_update_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_project_update(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_push_subscription_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_push_subscription(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_push_subscription_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_push_subscription(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_reaction_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_reaction(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_reaction_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_reaction(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_release_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_release(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_release_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_release(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_release_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_release(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_release_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_release(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_release_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_release(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_release_note_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_release_note(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_release_note_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_release_note(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_release_note_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_release_note(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_release_note_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_release_note(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_release_note_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_release_note(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_release_pipeline_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_release_pipeline(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_release_pipeline_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_release_pipeline(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_release_pipeline_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_release_pipeline(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_release_pipeline_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_release_pipeline(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_release_pipeline_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_release_pipeline(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_release_stage_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_release_stage(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_release_stage_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_release_stage(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_release_stage_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_release_stage(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_release_stage_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_release_stage(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_roadmap_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_roadmap(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_roadmap_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_roadmap(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_roadmap_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_roadmap(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_roadmap_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_roadmap(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_roadmap_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_roadmap(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_roadmap_to_project_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_roadmap_to_project(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_roadmap_to_project_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_roadmap_to_project(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_roadmap_to_project_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_roadmap_to_project(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_roadmap_to_project_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_roadmap_to_project(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_roadmap_to_project_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_roadmap_to_project(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_sla_configuration_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_sla_configuration(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_sso_url_from_email_response_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_sso_url_from_email_response(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_team_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_team(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_team_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_team(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_team_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_team(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_team_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_team(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_team_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_team(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_team_membership_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_team_membership(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_team_membership_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_team_membership(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_team_membership_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_team_membership(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_team_membership_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_team_membership(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_team_membership_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_team_membership(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_template_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_template(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_template_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_template(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_template_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_template(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_template_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_template(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_template_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_template(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_time_schedule_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_time_schedule(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_time_schedule_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_time_schedule(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_time_schedule_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_time_schedule(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_time_schedule_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_time_schedule(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_time_schedule_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_time_schedule(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_triage_responsibility_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_triage_responsibility(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_triage_responsibility_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_triage_responsibility(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_triage_responsibility_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_triage_responsibility(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_triage_responsibility_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_triage_responsibility(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_triage_responsibility_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_triage_responsibility(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_upload_file_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_upload_file(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_usage_alert_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_usage_alert(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_usage_alert_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_usage_alert(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_user_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_user(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_user_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_user(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_user_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_user(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_user_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_user(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_user_setting_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_user_setting(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_user_setting_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_user_setting(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_user_setting_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_user_setting(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_view_preference_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_view_preference(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_view_preference_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_view_preference(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_view_preference_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_view_preference(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_view_preference_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_view_preference(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_webhook_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_webhook(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_webhook_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_webhook(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_webhook_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_webhook(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_webhook_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_webhook(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_webhook_remove(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_webhook(sdk, NULL);
  Entity* r = e->vt->remove(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_webhook_failure_event_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_webhook_failure_event(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_workflow_state_list(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_workflow_state(sdk, NULL);
  Entity** items = e->vt->list(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  voxgig_value* list = v_list();
  for (size_t i = 0; items && items[i]; i++) {
    voxgig_list_push(voxgig_as_list(list), items[i]->vt->data(items[i], NULL));
  }
  *out = list;
  return NULL;
}

static PNError* drive_workflow_state_load(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_workflow_state(sdk, NULL);
  Entity* r = e->vt->load(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_workflow_state_create(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_workflow_state(sdk, NULL);
  Entity* r = e->vt->create(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static PNError* drive_workflow_state_update(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* ctrl, voxgig_value** out,
    voxgig_value** match) {
  PNError* err = NULL;
  Entity* e = linear_workflow_state(sdk, NULL);
  Entity* r = e->vt->update(e, mtch, ctrl, &err);
  if (match) *match = e->vt->matchv(e, NULL);
  if (err) return err;
  *out = r ? r->vt->data(r, NULL) : v_undef();
  return NULL;
}

static voxgig_value* drive_access_key_release_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return access_key_release_stream(linear_access_key_release(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_access_key_release_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return access_key_release_stream(linear_access_key_release(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_access_key_release_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return access_key_release_stream(linear_access_key_release(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_access_key_release_pipeline_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return access_key_release_pipeline_stream(linear_access_key_release_pipeline(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_agent_activity_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return agent_activity_stream(linear_agent_activity(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_agent_activity_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return agent_activity_stream(linear_agent_activity(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_agent_activity_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return agent_activity_stream(linear_agent_activity(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_agent_activity_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return agent_activity_stream(linear_agent_activity(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_agent_session_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return agent_session_stream(linear_agent_session(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_agent_session_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return agent_session_stream(linear_agent_session(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_agent_session_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return agent_session_stream(linear_agent_session(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_agent_session_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return agent_session_stream(linear_agent_session(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_agent_skill_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return agent_skill_stream(linear_agent_skill(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_agent_skill_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return agent_skill_stream(linear_agent_skill(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_agent_skill_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return agent_skill_stream(linear_agent_skill(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_agent_skill_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return agent_skill_stream(linear_agent_skill(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_agent_skill_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return agent_skill_stream(linear_agent_skill(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_application_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return application_stream(linear_application(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_attachment_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return attachment_stream(linear_attachment(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_attachment_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return attachment_stream(linear_attachment(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_attachment_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return attachment_stream(linear_attachment(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_attachment_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return attachment_stream(linear_attachment(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_attachment_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return attachment_stream(linear_attachment(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_audit_entry_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return audit_entry_stream(linear_audit_entry(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_audit_entry_type_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return audit_entry_type_stream(linear_audit_entry_type(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_auth_resolver_response_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return auth_resolver_response_stream(linear_auth_resolver_response(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_auth_resolver_response_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return auth_resolver_response_stream(linear_auth_resolver_response(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_auth_resolver_response_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return auth_resolver_response_stream(linear_auth_resolver_response(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_authentication_session_response_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return authentication_session_response_stream(linear_authentication_session_response(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_comment_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return comment_stream(linear_comment(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_comment_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return comment_stream(linear_comment(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_comment_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return comment_stream(linear_comment(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_comment_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return comment_stream(linear_comment(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_comment_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return comment_stream(linear_comment(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_create_or_join_organization_response_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return create_or_join_organization_response_stream(linear_create_or_join_organization_response(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_create_or_join_organization_response_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return create_or_join_organization_response_stream(linear_create_or_join_organization_response(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_custom_view_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return custom_view_stream(linear_custom_view(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_custom_view_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return custom_view_stream(linear_custom_view(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_custom_view_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return custom_view_stream(linear_custom_view(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_custom_view_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return custom_view_stream(linear_custom_view(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_custom_view_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return custom_view_stream(linear_custom_view(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_customer_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return customer_stream(linear_customer(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_customer_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return customer_stream(linear_customer(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_customer_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return customer_stream(linear_customer(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_customer_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return customer_stream(linear_customer(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_customer_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return customer_stream(linear_customer(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_customer_need_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return customer_need_stream(linear_customer_need(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_customer_need_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return customer_need_stream(linear_customer_need(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_customer_need_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return customer_need_stream(linear_customer_need(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_customer_need_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return customer_need_stream(linear_customer_need(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_customer_need_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return customer_need_stream(linear_customer_need(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_customer_status_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return customer_status_stream(linear_customer_status(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_customer_status_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return customer_status_stream(linear_customer_status(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_customer_status_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return customer_status_stream(linear_customer_status(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_customer_status_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return customer_status_stream(linear_customer_status(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_customer_status_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return customer_status_stream(linear_customer_status(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_customer_tier_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return customer_tier_stream(linear_customer_tier(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_customer_tier_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return customer_tier_stream(linear_customer_tier(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_customer_tier_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return customer_tier_stream(linear_customer_tier(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_customer_tier_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return customer_tier_stream(linear_customer_tier(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_customer_tier_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return customer_tier_stream(linear_customer_tier(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_cycle_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return cycle_stream(linear_cycle(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_cycle_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return cycle_stream(linear_cycle(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_cycle_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return cycle_stream(linear_cycle(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_cycle_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return cycle_stream(linear_cycle(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_diff_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return diff_stream(linear_diff(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_document_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return document_stream(linear_document(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_document_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return document_stream(linear_document(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_document_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return document_stream(linear_document(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_document_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return document_stream(linear_document(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_document_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return document_stream(linear_document(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_document_search_result_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return document_search_result_stream(linear_document_search_result(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_email_intake_address_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return email_intake_address_stream(linear_email_intake_address(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_email_intake_address_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return email_intake_address_stream(linear_email_intake_address(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_email_intake_address_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return email_intake_address_stream(linear_email_intake_address(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_email_intake_address_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return email_intake_address_stream(linear_email_intake_address(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_email_user_account_auth_challenge_response_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return email_user_account_auth_challenge_response_stream(linear_email_user_account_auth_challenge_response(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_emoji_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return emoji_stream(linear_emoji(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_emoji_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return emoji_stream(linear_emoji(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_emoji_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return emoji_stream(linear_emoji(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_emoji_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return emoji_stream(linear_emoji(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_entity_external_link_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return entity_external_link_stream(linear_entity_external_link(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_entity_external_link_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return entity_external_link_stream(linear_entity_external_link(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_entity_external_link_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return entity_external_link_stream(linear_entity_external_link(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_entity_external_link_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return entity_external_link_stream(linear_entity_external_link(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_external_user_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return external_user_stream(linear_external_user(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_external_user_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return external_user_stream(linear_external_user(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_favorite_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return favorite_stream(linear_favorite(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_favorite_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return favorite_stream(linear_favorite(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_favorite_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return favorite_stream(linear_favorite(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_favorite_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return favorite_stream(linear_favorite(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_favorite_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return favorite_stream(linear_favorite(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_git_automation_state_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return git_automation_state_stream(linear_git_automation_state(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_git_automation_state_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return git_automation_state_stream(linear_git_automation_state(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_git_automation_state_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return git_automation_state_stream(linear_git_automation_state(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_git_automation_target_branch_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return git_automation_target_branch_stream(linear_git_automation_target_branch(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_git_automation_target_branch_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return git_automation_target_branch_stream(linear_git_automation_target_branch(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_git_automation_target_branch_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return git_automation_target_branch_stream(linear_git_automation_target_branch(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_git_hub_integration_connect_detail_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return git_hub_integration_connect_detail_stream(linear_git_hub_integration_connect_detail(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_git_hub_integration_connect_detail_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return git_hub_integration_connect_detail_stream(linear_git_hub_integration_connect_detail(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_initiative_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return initiative_stream(linear_initiative(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_initiative_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return initiative_stream(linear_initiative(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_initiative_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return initiative_stream(linear_initiative(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_initiative_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return initiative_stream(linear_initiative(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_initiative_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return initiative_stream(linear_initiative(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_initiative_label_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return initiative_label_stream(linear_initiative_label(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_initiative_label_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return initiative_label_stream(linear_initiative_label(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_initiative_label_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return initiative_label_stream(linear_initiative_label(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_initiative_label_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return initiative_label_stream(linear_initiative_label(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_initiative_label_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return initiative_label_stream(linear_initiative_label(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_initiative_lead_team_change_impact_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return initiative_lead_team_change_impact_stream(linear_initiative_lead_team_change_impact(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_initiative_relation_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return initiative_relation_stream(linear_initiative_relation(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_initiative_relation_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return initiative_relation_stream(linear_initiative_relation(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_initiative_relation_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return initiative_relation_stream(linear_initiative_relation(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_initiative_relation_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return initiative_relation_stream(linear_initiative_relation(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_initiative_relation_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return initiative_relation_stream(linear_initiative_relation(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_initiative_to_project_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return initiative_to_project_stream(linear_initiative_to_project(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_initiative_to_project_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return initiative_to_project_stream(linear_initiative_to_project(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_initiative_to_project_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return initiative_to_project_stream(linear_initiative_to_project(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_initiative_to_project_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return initiative_to_project_stream(linear_initiative_to_project(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_initiative_to_project_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return initiative_to_project_stream(linear_initiative_to_project(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_initiative_update_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return initiative_update_stream(linear_initiative_update(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_initiative_update_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return initiative_update_stream(linear_initiative_update(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_initiative_update_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return initiative_update_stream(linear_initiative_update(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_initiative_update_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return initiative_update_stream(linear_initiative_update(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_integration_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return integration_stream(linear_integration(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_integration_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return integration_stream(linear_integration(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_integration_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return integration_stream(linear_integration(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_integration_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return integration_stream(linear_integration(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_integration_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return integration_stream(linear_integration(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_integration_template_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return integration_template_stream(linear_integration_template(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_integration_template_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return integration_template_stream(linear_integration_template(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_integration_template_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return integration_template_stream(linear_integration_template(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_integration_template_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return integration_template_stream(linear_integration_template(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_integrations_setting_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return integrations_setting_stream(linear_integrations_setting(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_integrations_setting_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return integrations_setting_stream(linear_integrations_setting(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_integrations_setting_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return integrations_setting_stream(linear_integrations_setting(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_issue_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return issue_stream(linear_issue(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_issue_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return issue_stream(linear_issue(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_issue_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return issue_stream(linear_issue(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_issue_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return issue_stream(linear_issue(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_issue_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return issue_stream(linear_issue(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_issue_import_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return issue_import_stream(linear_issue_import(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_issue_import_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return issue_import_stream(linear_issue_import(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_issue_import_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return issue_import_stream(linear_issue_import(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_issue_label_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return issue_label_stream(linear_issue_label(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_issue_label_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return issue_label_stream(linear_issue_label(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_issue_label_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return issue_label_stream(linear_issue_label(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_issue_label_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return issue_label_stream(linear_issue_label(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_issue_label_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return issue_label_stream(linear_issue_label(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_issue_priority_value_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return issue_priority_value_stream(linear_issue_priority_value(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_issue_relation_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return issue_relation_stream(linear_issue_relation(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_issue_relation_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return issue_relation_stream(linear_issue_relation(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_issue_relation_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return issue_relation_stream(linear_issue_relation(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_issue_relation_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return issue_relation_stream(linear_issue_relation(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_issue_relation_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return issue_relation_stream(linear_issue_relation(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_issue_search_result_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return issue_search_result_stream(linear_issue_search_result(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_issue_to_release_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return issue_to_release_stream(linear_issue_to_release(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_issue_to_release_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return issue_to_release_stream(linear_issue_to_release(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_issue_to_release_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return issue_to_release_stream(linear_issue_to_release(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_issue_to_release_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return issue_to_release_stream(linear_issue_to_release(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_logout_response_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return logout_response_stream(linear_logout_response(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_logout_response_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return logout_response_stream(linear_logout_response(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_notification_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return notification_stream(linear_notification(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_notification_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return notification_stream(linear_notification(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_notification_subscription_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return notification_subscription_stream(linear_notification_subscription(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_notification_subscription_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return notification_subscription_stream(linear_notification_subscription(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_o_auth_application_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return o_auth_application_stream(linear_o_auth_application(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_o_auth_application_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return o_auth_application_stream(linear_o_auth_application(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_o_auth_application_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return o_auth_application_stream(linear_o_auth_application(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_o_auth_application_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return o_auth_application_stream(linear_o_auth_application(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_organization_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return organization_stream(linear_organization(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_organization_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return organization_stream(linear_organization(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_organization_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return organization_stream(linear_organization(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_organization_domain_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return organization_domain_stream(linear_organization_domain(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_organization_domain_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return organization_domain_stream(linear_organization_domain(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_organization_domain_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return organization_domain_stream(linear_organization_domain(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_organization_invite_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return organization_invite_stream(linear_organization_invite(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_organization_invite_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return organization_invite_stream(linear_organization_invite(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_organization_invite_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return organization_invite_stream(linear_organization_invite(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_organization_invite_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return organization_invite_stream(linear_organization_invite(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_organization_invite_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return organization_invite_stream(linear_organization_invite(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_organization_meta_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return organization_meta_stream(linear_organization_meta(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_passkey_login_start_response_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return passkey_login_start_response_stream(linear_passkey_login_start_response(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_project_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return project_stream(linear_project(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_project_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return project_stream(linear_project(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_project_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return project_stream(linear_project(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_project_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return project_stream(linear_project(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_project_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return project_stream(linear_project(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_project_label_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return project_label_stream(linear_project_label(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_project_label_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return project_label_stream(linear_project_label(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_project_label_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return project_label_stream(linear_project_label(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_project_label_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return project_label_stream(linear_project_label(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_project_label_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return project_label_stream(linear_project_label(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_project_milestone_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return project_milestone_stream(linear_project_milestone(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_project_milestone_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return project_milestone_stream(linear_project_milestone(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_project_milestone_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return project_milestone_stream(linear_project_milestone(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_project_milestone_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return project_milestone_stream(linear_project_milestone(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_project_milestone_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return project_milestone_stream(linear_project_milestone(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_project_milestone_move_project_team_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return project_milestone_move_project_team_stream(linear_project_milestone_move_project_team(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_project_relation_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return project_relation_stream(linear_project_relation(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_project_relation_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return project_relation_stream(linear_project_relation(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_project_relation_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return project_relation_stream(linear_project_relation(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_project_relation_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return project_relation_stream(linear_project_relation(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_project_relation_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return project_relation_stream(linear_project_relation(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_project_search_result_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return project_search_result_stream(linear_project_search_result(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_project_status_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return project_status_stream(linear_project_status(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_project_status_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return project_status_stream(linear_project_status(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_project_status_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return project_status_stream(linear_project_status(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_project_status_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return project_status_stream(linear_project_status(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_project_update_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return project_update_stream(linear_project_update(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_project_update_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return project_update_stream(linear_project_update(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_project_update_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return project_update_stream(linear_project_update(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_project_update_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return project_update_stream(linear_project_update(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_project_update_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return project_update_stream(linear_project_update(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_push_subscription_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return push_subscription_stream(linear_push_subscription(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_push_subscription_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return push_subscription_stream(linear_push_subscription(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_reaction_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return reaction_stream(linear_reaction(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_reaction_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return reaction_stream(linear_reaction(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_release_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return release_stream(linear_release(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_release_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return release_stream(linear_release(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_release_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return release_stream(linear_release(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_release_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return release_stream(linear_release(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_release_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return release_stream(linear_release(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_release_note_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return release_note_stream(linear_release_note(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_release_note_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return release_note_stream(linear_release_note(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_release_note_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return release_note_stream(linear_release_note(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_release_note_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return release_note_stream(linear_release_note(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_release_note_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return release_note_stream(linear_release_note(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_release_pipeline_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return release_pipeline_stream(linear_release_pipeline(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_release_pipeline_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return release_pipeline_stream(linear_release_pipeline(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_release_pipeline_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return release_pipeline_stream(linear_release_pipeline(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_release_pipeline_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return release_pipeline_stream(linear_release_pipeline(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_release_pipeline_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return release_pipeline_stream(linear_release_pipeline(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_release_stage_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return release_stage_stream(linear_release_stage(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_release_stage_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return release_stage_stream(linear_release_stage(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_release_stage_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return release_stage_stream(linear_release_stage(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_release_stage_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return release_stage_stream(linear_release_stage(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_roadmap_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return roadmap_stream(linear_roadmap(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_roadmap_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return roadmap_stream(linear_roadmap(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_roadmap_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return roadmap_stream(linear_roadmap(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_roadmap_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return roadmap_stream(linear_roadmap(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_roadmap_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return roadmap_stream(linear_roadmap(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_roadmap_to_project_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return roadmap_to_project_stream(linear_roadmap_to_project(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_roadmap_to_project_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return roadmap_to_project_stream(linear_roadmap_to_project(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_roadmap_to_project_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return roadmap_to_project_stream(linear_roadmap_to_project(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_roadmap_to_project_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return roadmap_to_project_stream(linear_roadmap_to_project(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_roadmap_to_project_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return roadmap_to_project_stream(linear_roadmap_to_project(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_sla_configuration_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return sla_configuration_stream(linear_sla_configuration(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_sso_url_from_email_response_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return sso_url_from_email_response_stream(linear_sso_url_from_email_response(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_team_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return team_stream(linear_team(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_team_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return team_stream(linear_team(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_team_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return team_stream(linear_team(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_team_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return team_stream(linear_team(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_team_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return team_stream(linear_team(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_team_membership_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return team_membership_stream(linear_team_membership(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_team_membership_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return team_membership_stream(linear_team_membership(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_team_membership_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return team_membership_stream(linear_team_membership(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_team_membership_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return team_membership_stream(linear_team_membership(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_team_membership_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return team_membership_stream(linear_team_membership(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_template_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return template_stream(linear_template(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_template_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return template_stream(linear_template(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_template_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return template_stream(linear_template(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_template_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return template_stream(linear_template(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_template_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return template_stream(linear_template(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_time_schedule_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return time_schedule_stream(linear_time_schedule(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_time_schedule_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return time_schedule_stream(linear_time_schedule(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_time_schedule_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return time_schedule_stream(linear_time_schedule(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_time_schedule_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return time_schedule_stream(linear_time_schedule(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_time_schedule_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return time_schedule_stream(linear_time_schedule(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_triage_responsibility_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return triage_responsibility_stream(linear_triage_responsibility(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_triage_responsibility_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return triage_responsibility_stream(linear_triage_responsibility(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_triage_responsibility_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return triage_responsibility_stream(linear_triage_responsibility(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_triage_responsibility_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return triage_responsibility_stream(linear_triage_responsibility(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_triage_responsibility_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return triage_responsibility_stream(linear_triage_responsibility(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_upload_file_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return upload_file_stream(linear_upload_file(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_usage_alert_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return usage_alert_stream(linear_usage_alert(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_usage_alert_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return usage_alert_stream(linear_usage_alert(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_user_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return user_stream(linear_user(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_user_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return user_stream(linear_user(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_user_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return user_stream(linear_user(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_user_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return user_stream(linear_user(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_user_setting_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return user_setting_stream(linear_user_setting(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_user_setting_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return user_setting_stream(linear_user_setting(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_user_setting_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return user_setting_stream(linear_user_setting(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_view_preference_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return view_preference_stream(linear_view_preference(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_view_preference_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return view_preference_stream(linear_view_preference(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_view_preference_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return view_preference_stream(linear_view_preference(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_view_preference_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return view_preference_stream(linear_view_preference(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_webhook_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return webhook_stream(linear_webhook(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_webhook_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return webhook_stream(linear_webhook(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_webhook_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return webhook_stream(linear_webhook(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_webhook_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return webhook_stream(linear_webhook(sdk, NULL), "update", mtch, callopts, err);
}

static voxgig_value* drive_webhook_remove_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return webhook_stream(linear_webhook(sdk, NULL), "remove", mtch, callopts, err);
}

static voxgig_value* drive_webhook_failure_event_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return webhook_failure_event_stream(linear_webhook_failure_event(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_workflow_state_list_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return workflow_state_stream(linear_workflow_state(sdk, NULL), "list", mtch, callopts, err);
}

static voxgig_value* drive_workflow_state_load_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return workflow_state_stream(linear_workflow_state(sdk, NULL), "load", mtch, callopts, err);
}

static voxgig_value* drive_workflow_state_create_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return workflow_state_stream(linear_workflow_state(sdk, NULL), "create", mtch, callopts, err);
}

static voxgig_value* drive_workflow_state_update_stream(LinearSDK* sdk, voxgig_value* mtch, voxgig_value* callopts, PNError** err) {
  return workflow_state_stream(linear_workflow_state(sdk, NULL), "update", mtch, callopts, err);
}

// Generated: every CRUD operation of every active entity, list and load
// first (they need no body), with the path parameters its points declare.
static const struct { const char* name; Drive fn; Streamer stream; const char* params[16]; } CANDIDATES[] = {
  { "access_key_release.list", drive_access_key_release_list, drive_access_key_release_list_stream, { "limit", NULL } },
  { "access_key_release.load", drive_access_key_release_load, drive_access_key_release_load_stream, { NULL } },
  { "access_key_release.create", drive_access_key_release_create, drive_access_key_release_create_stream, { NULL } },
  { "access_key_release_pipeline.load", drive_access_key_release_pipeline_load, drive_access_key_release_pipeline_load_stream, { NULL } },
  { "agent_activity.list", drive_agent_activity_list, drive_agent_activity_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "agent_activity.load", drive_agent_activity_load, drive_agent_activity_load_stream, { "id", NULL } },
  { "agent_activity.create", drive_agent_activity_create, drive_agent_activity_create_stream, { NULL } },
  { "agent_activity.update", drive_agent_activity_update, drive_agent_activity_update_stream, { "id", NULL } },
  { "agent_session.list", drive_agent_session_list, drive_agent_session_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "agent_session.load", drive_agent_session_load, drive_agent_session_load_stream, { "id", NULL } },
  { "agent_session.create", drive_agent_session_create, drive_agent_session_create_stream, { "pull_request_id", NULL } },
  { "agent_session.update", drive_agent_session_update, drive_agent_session_update_stream, { "id", NULL } },
  { "agent_skill.list", drive_agent_skill_list, drive_agent_skill_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "agent_skill.load", drive_agent_skill_load, drive_agent_skill_load_stream, { "id", NULL } },
  { "agent_skill.create", drive_agent_skill_create, drive_agent_skill_create_stream, { NULL } },
  { "agent_skill.update", drive_agent_skill_update, drive_agent_skill_update_stream, { "id", NULL } },
  { "agent_skill.remove", drive_agent_skill_remove, drive_agent_skill_remove_stream, { "id", NULL } },
  { "application.load", drive_application_load, drive_application_load_stream, { "client_id", NULL } },
  { "attachment.list", drive_attachment_list, drive_attachment_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", "url", NULL } },
  { "attachment.load", drive_attachment_load, drive_attachment_load_stream, { "id", NULL } },
  { "attachment.create", drive_attachment_create, drive_attachment_create_stream, { NULL } },
  { "attachment.update", drive_attachment_update, drive_attachment_update_stream, { "channel_id", "create_as_user", "display_icon_url", "id", "issue_id", "message_id", "title", "url", "number", "project_path_with_namespace", "conversation_id", "link_kind", "part_id", "jira_issue_id", "sync_to_comment_thread", "ticket_id", NULL } },
  { "attachment.remove", drive_attachment_remove, drive_attachment_remove_stream, { "id", NULL } },
  { "audit_entry.list", drive_audit_entry_list, drive_audit_entry_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "audit_entry_type.list", drive_audit_entry_type_list, drive_audit_entry_type_list_stream, { NULL } },
  { "auth_resolver_response.load", drive_auth_resolver_response_load, drive_auth_resolver_response_load_stream, { NULL } },
  { "auth_resolver_response.create", drive_auth_resolver_response_create, drive_auth_resolver_response_create_stream, { NULL } },
  { "auth_resolver_response.update", drive_auth_resolver_response_update, drive_auth_resolver_response_update_stream, { "auth_id", "response", NULL } },
  { "authentication_session_response.list", drive_authentication_session_response_list, drive_authentication_session_response_list_stream, { "id", NULL } },
  { "comment.list", drive_comment_list, drive_comment_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "comment.load", drive_comment_load, drive_comment_load_stream, { "hash", "id", NULL } },
  { "comment.create", drive_comment_create, drive_comment_create_stream, { NULL } },
  { "comment.update", drive_comment_update, drive_comment_update_stream, { "id", "resolving_comment_id", "skip_edited_at", NULL } },
  { "comment.remove", drive_comment_remove, drive_comment_remove_stream, { "id", NULL } },
  { "create_or_join_organization_response.create", drive_create_or_join_organization_response_create, drive_create_or_join_organization_response_create_stream, { "partner_offer_token", "session_id", NULL } },
  { "create_or_join_organization_response.update", drive_create_or_join_organization_response_update, drive_create_or_join_organization_response_update_stream, { "organization_id", NULL } },
  { "custom_view.list", drive_custom_view_list, drive_custom_view_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "custom_view.load", drive_custom_view_load, drive_custom_view_load_stream, { "id", NULL } },
  { "custom_view.create", drive_custom_view_create, drive_custom_view_create_stream, { NULL } },
  { "custom_view.update", drive_custom_view_update, drive_custom_view_update_stream, { "id", NULL } },
  { "custom_view.remove", drive_custom_view_remove, drive_custom_view_remove_stream, { "id", NULL } },
  { "customer.list", drive_customer_list, drive_customer_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "customer.load", drive_customer_load, drive_customer_load_stream, { "id", NULL } },
  { "customer.create", drive_customer_create, drive_customer_create_stream, { NULL } },
  { "customer.update", drive_customer_update, drive_customer_update_stream, { "source_customer_id", "target_customer_id", "id", NULL } },
  { "customer.remove", drive_customer_remove, drive_customer_remove_stream, { "id", NULL } },
  { "customer_need.list", drive_customer_need_list, drive_customer_need_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "customer_need.load", drive_customer_need_load, drive_customer_need_load_stream, { "hash", "id", NULL } },
  { "customer_need.create", drive_customer_need_create, drive_customer_need_create_stream, { NULL } },
  { "customer_need.update", drive_customer_need_update, drive_customer_need_update_stream, { "id", "clear_attachment", NULL } },
  { "customer_need.remove", drive_customer_need_remove, drive_customer_need_remove_stream, { "id", "keep_attachment", NULL } },
  { "customer_status.list", drive_customer_status_list, drive_customer_status_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "customer_status.load", drive_customer_status_load, drive_customer_status_load_stream, { "id", NULL } },
  { "customer_status.create", drive_customer_status_create, drive_customer_status_create_stream, { NULL } },
  { "customer_status.update", drive_customer_status_update, drive_customer_status_update_stream, { "id", NULL } },
  { "customer_status.remove", drive_customer_status_remove, drive_customer_status_remove_stream, { "id", NULL } },
  { "customer_tier.list", drive_customer_tier_list, drive_customer_tier_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "customer_tier.load", drive_customer_tier_load, drive_customer_tier_load_stream, { "id", NULL } },
  { "customer_tier.create", drive_customer_tier_create, drive_customer_tier_create_stream, { NULL } },
  { "customer_tier.update", drive_customer_tier_update, drive_customer_tier_update_stream, { "id", NULL } },
  { "customer_tier.remove", drive_customer_tier_remove, drive_customer_tier_remove_stream, { "id", NULL } },
  { "cycle.list", drive_cycle_list, drive_cycle_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "cycle.load", drive_cycle_load, drive_cycle_load_stream, { "id", NULL } },
  { "cycle.create", drive_cycle_create, drive_cycle_create_stream, { NULL } },
  { "cycle.update", drive_cycle_update, drive_cycle_update_stream, { "id", NULL } },
  { "diff.load", drive_diff_load, drive_diff_load_stream, { "id", NULL } },
  { "document.list", drive_document_list, drive_document_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "document.load", drive_document_load, drive_document_load_stream, { "id", NULL } },
  { "document.create", drive_document_create, drive_document_create_stream, { NULL } },
  { "document.update", drive_document_update, drive_document_update_stream, { "id", NULL } },
  { "document.remove", drive_document_remove, drive_document_remove_stream, { "id", NULL } },
  { "document_search_result.list", drive_document_search_result_list, drive_document_search_result_list_stream, { "after", "before", "first", "include_archived", "include_comment", "last", "order_by", "team_id", "term", NULL } },
  { "email_intake_address.load", drive_email_intake_address_load, drive_email_intake_address_load_stream, { "id", NULL } },
  { "email_intake_address.create", drive_email_intake_address_create, drive_email_intake_address_create_stream, { NULL } },
  { "email_intake_address.update", drive_email_intake_address_update, drive_email_intake_address_update_stream, { "id", NULL } },
  { "email_intake_address.remove", drive_email_intake_address_remove, drive_email_intake_address_remove_stream, { "id", NULL } },
  { "email_user_account_auth_challenge_response.create", drive_email_user_account_auth_challenge_response_create, drive_email_user_account_auth_challenge_response_create_stream, { NULL } },
  { "emoji.list", drive_emoji_list, drive_emoji_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "emoji.load", drive_emoji_load, drive_emoji_load_stream, { "id", NULL } },
  { "emoji.create", drive_emoji_create, drive_emoji_create_stream, { NULL } },
  { "emoji.remove", drive_emoji_remove, drive_emoji_remove_stream, { "id", NULL } },
  { "entity_external_link.load", drive_entity_external_link_load, drive_entity_external_link_load_stream, { "id", NULL } },
  { "entity_external_link.create", drive_entity_external_link_create, drive_entity_external_link_create_stream, { NULL } },
  { "entity_external_link.update", drive_entity_external_link_update, drive_entity_external_link_update_stream, { "id", NULL } },
  { "entity_external_link.remove", drive_entity_external_link_remove, drive_entity_external_link_remove_stream, { "id", NULL } },
  { "external_user.list", drive_external_user_list, drive_external_user_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "external_user.load", drive_external_user_load, drive_external_user_load_stream, { "id", NULL } },
  { "favorite.list", drive_favorite_list, drive_favorite_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "favorite.load", drive_favorite_load, drive_favorite_load_stream, { "id", NULL } },
  { "favorite.create", drive_favorite_create, drive_favorite_create_stream, { NULL } },
  { "favorite.update", drive_favorite_update, drive_favorite_update_stream, { "id", NULL } },
  { "favorite.remove", drive_favorite_remove, drive_favorite_remove_stream, { "id", NULL } },
  { "git_automation_state.create", drive_git_automation_state_create, drive_git_automation_state_create_stream, { NULL } },
  { "git_automation_state.update", drive_git_automation_state_update, drive_git_automation_state_update_stream, { "id", NULL } },
  { "git_automation_state.remove", drive_git_automation_state_remove, drive_git_automation_state_remove_stream, { "id", NULL } },
  { "git_automation_target_branch.create", drive_git_automation_target_branch_create, drive_git_automation_target_branch_create_stream, { NULL } },
  { "git_automation_target_branch.update", drive_git_automation_target_branch_update, drive_git_automation_target_branch_update_stream, { "id", NULL } },
  { "git_automation_target_branch.remove", drive_git_automation_target_branch_remove, drive_git_automation_target_branch_remove_stream, { "id", NULL } },
  { "git_hub_integration_connect_detail.create", drive_git_hub_integration_connect_detail_create, drive_git_hub_integration_connect_detail_create_stream, { "code", "redirect_uri", "github_url", "organization_name", "access_token", "expires_at", "gitlab_url", "readonly", "validation_project_path", NULL } },
  { "git_hub_integration_connect_detail.update", drive_git_hub_integration_connect_detail_update, drive_git_hub_integration_connect_detail_update_stream, { "code", "project_id", "redirect_uri", "service", "custom_view_id", "initiative_id", "should_use_v2_auth", "team_id", "integration_id", NULL } },
  { "initiative.list", drive_initiative_list, drive_initiative_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "initiative.load", drive_initiative_load, drive_initiative_load_stream, { "id", NULL } },
  { "initiative.create", drive_initiative_create, drive_initiative_create_stream, { NULL } },
  { "initiative.update", drive_initiative_update, drive_initiative_update_stream, { "id", "label_id", "lead_team_id", "mode", NULL } },
  { "initiative.remove", drive_initiative_remove, drive_initiative_remove_stream, { "id", NULL } },
  { "initiative_label.list", drive_initiative_label_list, drive_initiative_label_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "initiative_label.load", drive_initiative_label_load, drive_initiative_label_load_stream, { "id", NULL } },
  { "initiative_label.create", drive_initiative_label_create, drive_initiative_label_create_stream, { NULL } },
  { "initiative_label.update", drive_initiative_label_update, drive_initiative_label_update_stream, { "id", NULL } },
  { "initiative_label.remove", drive_initiative_label_remove, drive_initiative_label_remove_stream, { "id", NULL } },
  { "initiative_lead_team_change_impact.load", drive_initiative_lead_team_change_impact_load, drive_initiative_lead_team_change_impact_load_stream, { "id", "lead_team_id", NULL } },
  { "initiative_relation.list", drive_initiative_relation_list, drive_initiative_relation_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "initiative_relation.load", drive_initiative_relation_load, drive_initiative_relation_load_stream, { "id", NULL } },
  { "initiative_relation.create", drive_initiative_relation_create, drive_initiative_relation_create_stream, { NULL } },
  { "initiative_relation.update", drive_initiative_relation_update, drive_initiative_relation_update_stream, { "id", NULL } },
  { "initiative_relation.remove", drive_initiative_relation_remove, drive_initiative_relation_remove_stream, { "id", NULL } },
  { "initiative_to_project.list", drive_initiative_to_project_list, drive_initiative_to_project_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "initiative_to_project.load", drive_initiative_to_project_load, drive_initiative_to_project_load_stream, { "id", NULL } },
  { "initiative_to_project.create", drive_initiative_to_project_create, drive_initiative_to_project_create_stream, { NULL } },
  { "initiative_to_project.update", drive_initiative_to_project_update, drive_initiative_to_project_update_stream, { "id", NULL } },
  { "initiative_to_project.remove", drive_initiative_to_project_remove, drive_initiative_to_project_remove_stream, { "id", NULL } },
  { "initiative_update.list", drive_initiative_update_list, drive_initiative_update_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "initiative_update.load", drive_initiative_update_load, drive_initiative_update_load_stream, { "id", NULL } },
  { "initiative_update.create", drive_initiative_update_create, drive_initiative_update_create_stream, { NULL } },
  { "initiative_update.update", drive_initiative_update_update, drive_initiative_update_update_stream, { "id", NULL } },
  { "integration.list", drive_integration_list, drive_integration_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "integration.load", drive_integration_load, drive_integration_load_stream, { "id", NULL } },
  { "integration.create", drive_integration_create, drive_integration_create_stream, { "code", "code_verifier", "redirect_uri", "subdomain", "environment", "project_key", "domain_url", "requested_scope", "should_use_v2_auth", "code_access", "enterprise_url", "mcp_server_definition_id", "server_url", "team_id", "workflow_definition_draft_id", "workflow_definition_id", "api_key", "access_token", "bot_user_role", "custom_api_url", "scope", NULL } },
  { "integration.update", drive_integration_update, drive_integration_update_stream, { "channel_id", "channel_name", "membership_type", "project_id", "team_id", "team_name", "api_key", "application_key", "environment_id", "site", "code", "installation_id", "organization_slug", "integration_id", "redirect_uri", "requested_scope", "code_access", "confirm_replace", "github_host", "enabled", "id", "type", NULL } },
  { "integration.remove", drive_integration_remove, drive_integration_remove_stream, { "id", "skip_installation_deletion", NULL } },
  { "integration_template.list", drive_integration_template_list, drive_integration_template_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "integration_template.load", drive_integration_template_load, drive_integration_template_load_stream, { "id", NULL } },
  { "integration_template.create", drive_integration_template_create, drive_integration_template_create_stream, { NULL } },
  { "integration_template.remove", drive_integration_template_remove, drive_integration_template_remove_stream, { "id", NULL } },
  { "integrations_setting.load", drive_integrations_setting_load, drive_integrations_setting_load_stream, { "id", NULL } },
  { "integrations_setting.create", drive_integrations_setting_create, drive_integrations_setting_create_stream, { NULL } },
  { "integrations_setting.update", drive_integrations_setting_update, drive_integrations_setting_update_stream, { "id", NULL } },
  { "issue.list", drive_issue_list, drive_issue_list_stream, { "after", "before", "file_key", "first", "include_archived", "last", "order_by", "query", NULL } },
  { "issue.load", drive_issue_load, drive_issue_load_stream, { "branch_name", "id", NULL } },
  { "issue.create", drive_issue_create, drive_issue_create_stream, { NULL } },
  { "issue.update", drive_issue_update, drive_issue_update_stream, { "id", "label_id", "description", "reminder_at", "user_id", "trash", "attachment_id", "user_email", NULL } },
  { "issue.remove", drive_issue_remove, drive_issue_remove_stream, { "id", "permanently_delete", NULL } },
  { "issue_import.create", drive_issue_import_create, drive_issue_import_create_stream, { "id", "include_closed_issue", "instant_process", "jira_email", "jira_hostname", "jira_project", "jira_token", "jql", "team_id", "team_name", "asana_team_name", "asana_token", "clubhouse_group_name", "clubhouse_token", "csv_url", "github_label", "github_repo_id", NULL } },
  { "issue_import.update", drive_issue_import_update, drive_issue_import_update_stream, { "issue_import_id", "mapping", "id", "linear_source_organization_id", NULL } },
  { "issue_import.remove", drive_issue_import_remove, drive_issue_import_remove_stream, { "issue_import_id", NULL } },
  { "issue_label.list", drive_issue_label_list, drive_issue_label_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "issue_label.load", drive_issue_label_load, drive_issue_label_load_stream, { "id", NULL } },
  { "issue_label.create", drive_issue_label_create, drive_issue_label_create_stream, { "replace_team_label", NULL } },
  { "issue_label.update", drive_issue_label_update, drive_issue_label_update_stream, { "id", "replace_team_label", NULL } },
  { "issue_label.remove", drive_issue_label_remove, drive_issue_label_remove_stream, { "id", NULL } },
  { "issue_priority_value.list", drive_issue_priority_value_list, drive_issue_priority_value_list_stream, { NULL } },
  { "issue_relation.list", drive_issue_relation_list, drive_issue_relation_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "issue_relation.load", drive_issue_relation_load, drive_issue_relation_load_stream, { "id", NULL } },
  { "issue_relation.create", drive_issue_relation_create, drive_issue_relation_create_stream, { "override_created_at", NULL } },
  { "issue_relation.update", drive_issue_relation_update, drive_issue_relation_update_stream, { "id", NULL } },
  { "issue_relation.remove", drive_issue_relation_remove, drive_issue_relation_remove_stream, { "id", NULL } },
  { "issue_search_result.list", drive_issue_search_result_list, drive_issue_search_result_list_stream, { "after", "before", "first", "include_archived", "include_comment", "last", "order_by", "team_id", "term", NULL } },
  { "issue_to_release.list", drive_issue_to_release_list, drive_issue_to_release_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "issue_to_release.load", drive_issue_to_release_load, drive_issue_to_release_load_stream, { "id", NULL } },
  { "issue_to_release.create", drive_issue_to_release_create, drive_issue_to_release_create_stream, { NULL } },
  { "issue_to_release.remove", drive_issue_to_release_remove, drive_issue_to_release_remove_stream, { "id", NULL } },
  { "logout_response.create", drive_logout_response_create, drive_logout_response_create_stream, { "reason", NULL } },
  { "logout_response.update", drive_logout_response_update, drive_logout_response_update_stream, { "session_id", NULL } },
  { "notification.list", drive_notification_list, drive_notification_list_stream, { "after", "first", "unread_only", "before", "include_archived", "last", "order_by", NULL } },
  { "notification.load", drive_notification_load, drive_notification_load_stream, { "id", NULL } },
  { "notification_subscription.list", drive_notification_subscription_list, drive_notification_subscription_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "notification_subscription.load", drive_notification_subscription_load, drive_notification_subscription_load_stream, { "id", NULL } },
  { "o_auth_application.list", drive_o_auth_application_list, drive_o_auth_application_list_stream, { NULL } },
  { "o_auth_application.load", drive_o_auth_application_load, drive_o_auth_application_load_stream, { "id", NULL } },
  { "o_auth_application.create", drive_o_auth_application_create, drive_o_auth_application_create_stream, { NULL } },
  { "o_auth_application.update", drive_o_auth_application_update, drive_o_auth_application_update_stream, { "id", NULL } },
  { "organization.load", drive_organization_load, drive_organization_load_stream, { NULL } },
  { "organization.update", drive_organization_update, drive_organization_update_stream, { NULL } },
  { "organization.remove", drive_organization_remove, drive_organization_remove_stream, { NULL } },
  { "organization_domain.create", drive_organization_domain_create, drive_organization_domain_create_stream, { "trigger_email_verification", NULL } },
  { "organization_domain.update", drive_organization_domain_update, drive_organization_domain_update_stream, { "id", NULL } },
  { "organization_domain.remove", drive_organization_domain_remove, drive_organization_domain_remove_stream, { "id", NULL } },
  { "organization_invite.list", drive_organization_invite_list, drive_organization_invite_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "organization_invite.load", drive_organization_invite_load, drive_organization_invite_load_stream, { "id", NULL } },
  { "organization_invite.create", drive_organization_invite_create, drive_organization_invite_create_stream, { NULL } },
  { "organization_invite.update", drive_organization_invite_update, drive_organization_invite_update_stream, { "id", NULL } },
  { "organization_invite.remove", drive_organization_invite_remove, drive_organization_invite_remove_stream, { "id", NULL } },
  { "organization_meta.load", drive_organization_meta_load, drive_organization_meta_load_stream, { "url_key", NULL } },
  { "passkey_login_start_response.update", drive_passkey_login_start_response_update, drive_passkey_login_start_response_update_stream, { "auth_id", NULL } },
  { "project.list", drive_project_list, drive_project_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "project.load", drive_project_load, drive_project_load_stream, { "id", NULL } },
  { "project.create", drive_project_create, drive_project_create_stream, { "ai_conversation_id", "project_draft_id", "slack_channel_name", NULL } },
  { "project.update", drive_project_update, drive_project_update_stream, { "id", "label_id", "integration_id", "slack_channel_name", "project_id", "sync_source", "trash", NULL } },
  { "project.remove", drive_project_remove, drive_project_remove_stream, { "id", NULL } },
  { "project_label.list", drive_project_label_list, drive_project_label_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "project_label.load", drive_project_label_load, drive_project_label_load_stream, { "id", NULL } },
  { "project_label.create", drive_project_label_create, drive_project_label_create_stream, { "replace_team_label", NULL } },
  { "project_label.update", drive_project_label_update, drive_project_label_update_stream, { "id", "replace_team_label", NULL } },
  { "project_label.remove", drive_project_label_remove, drive_project_label_remove_stream, { "id", NULL } },
  { "project_milestone.list", drive_project_milestone_list, drive_project_milestone_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "project_milestone.load", drive_project_milestone_load, drive_project_milestone_load_stream, { "id", NULL } },
  { "project_milestone.create", drive_project_milestone_create, drive_project_milestone_create_stream, { NULL } },
  { "project_milestone.update", drive_project_milestone_update, drive_project_milestone_update_stream, { "id", NULL } },
  { "project_milestone.remove", drive_project_milestone_remove, drive_project_milestone_remove_stream, { "id", NULL } },
  { "project_milestone_move_project_team.update", drive_project_milestone_move_project_team_update, drive_project_milestone_move_project_team_update_stream, { "id", NULL } },
  { "project_relation.list", drive_project_relation_list, drive_project_relation_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "project_relation.load", drive_project_relation_load, drive_project_relation_load_stream, { "id", NULL } },
  { "project_relation.create", drive_project_relation_create, drive_project_relation_create_stream, { NULL } },
  { "project_relation.update", drive_project_relation_update, drive_project_relation_update_stream, { "id", NULL } },
  { "project_relation.remove", drive_project_relation_remove, drive_project_relation_remove_stream, { "id", NULL } },
  { "project_search_result.list", drive_project_search_result_list, drive_project_search_result_list_stream, { "after", "before", "first", "include_archived", "include_comment", "last", "order_by", "team_id", "term", NULL } },
  { "project_status.list", drive_project_status_list, drive_project_status_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "project_status.load", drive_project_status_load, drive_project_status_load_stream, { "id", NULL } },
  { "project_status.create", drive_project_status_create, drive_project_status_create_stream, { NULL } },
  { "project_status.update", drive_project_status_update, drive_project_status_update_stream, { "id", NULL } },
  { "project_update.list", drive_project_update_list, drive_project_update_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "project_update.load", drive_project_update_load, drive_project_update_load_stream, { "id", "project_id", NULL } },
  { "project_update.create", drive_project_update_create, drive_project_update_create_stream, { NULL } },
  { "project_update.update", drive_project_update_update, drive_project_update_update_stream, { "id", NULL } },
  { "project_update.remove", drive_project_update_remove, drive_project_update_remove_stream, { "id", NULL } },
  { "push_subscription.create", drive_push_subscription_create, drive_push_subscription_create_stream, { NULL } },
  { "push_subscription.remove", drive_push_subscription_remove, drive_push_subscription_remove_stream, { "id", NULL } },
  { "reaction.create", drive_reaction_create, drive_reaction_create_stream, { NULL } },
  { "reaction.remove", drive_reaction_remove, drive_reaction_remove_stream, { "id", NULL } },
  { "release.list", drive_release_list, drive_release_list_stream, { "first", "term", "after", "before", "include_archived", "last", "order_by", NULL } },
  { "release.load", drive_release_load, drive_release_load_stream, { "id", NULL } },
  { "release.create", drive_release_create, drive_release_create_stream, { NULL } },
  { "release.update", drive_release_update, drive_release_update_stream, { "id", NULL } },
  { "release.remove", drive_release_remove, drive_release_remove_stream, { "id", NULL } },
  { "release_note.list", drive_release_note_list, drive_release_note_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "release_note.load", drive_release_note_load, drive_release_note_load_stream, { "id", NULL } },
  { "release_note.create", drive_release_note_create, drive_release_note_create_stream, { NULL } },
  { "release_note.update", drive_release_note_update, drive_release_note_update_stream, { "id", NULL } },
  { "release_note.remove", drive_release_note_remove, drive_release_note_remove_stream, { "id", NULL } },
  { "release_pipeline.list", drive_release_pipeline_list, drive_release_pipeline_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "release_pipeline.load", drive_release_pipeline_load, drive_release_pipeline_load_stream, { "id", NULL } },
  { "release_pipeline.create", drive_release_pipeline_create, drive_release_pipeline_create_stream, { NULL } },
  { "release_pipeline.update", drive_release_pipeline_update, drive_release_pipeline_update_stream, { "id", NULL } },
  { "release_pipeline.remove", drive_release_pipeline_remove, drive_release_pipeline_remove_stream, { "id", NULL } },
  { "release_stage.list", drive_release_stage_list, drive_release_stage_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "release_stage.load", drive_release_stage_load, drive_release_stage_load_stream, { "id", NULL } },
  { "release_stage.create", drive_release_stage_create, drive_release_stage_create_stream, { NULL } },
  { "release_stage.update", drive_release_stage_update, drive_release_stage_update_stream, { "id", NULL } },
  { "roadmap.list", drive_roadmap_list, drive_roadmap_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "roadmap.load", drive_roadmap_load, drive_roadmap_load_stream, { "id", NULL } },
  { "roadmap.create", drive_roadmap_create, drive_roadmap_create_stream, { NULL } },
  { "roadmap.update", drive_roadmap_update, drive_roadmap_update_stream, { "id", NULL } },
  { "roadmap.remove", drive_roadmap_remove, drive_roadmap_remove_stream, { "id", NULL } },
  { "roadmap_to_project.list", drive_roadmap_to_project_list, drive_roadmap_to_project_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "roadmap_to_project.load", drive_roadmap_to_project_load, drive_roadmap_to_project_load_stream, { "id", NULL } },
  { "roadmap_to_project.create", drive_roadmap_to_project_create, drive_roadmap_to_project_create_stream, { NULL } },
  { "roadmap_to_project.update", drive_roadmap_to_project_update, drive_roadmap_to_project_update_stream, { "id", NULL } },
  { "roadmap_to_project.remove", drive_roadmap_to_project_remove, drive_roadmap_to_project_remove_stream, { "id", NULL } },
  { "sla_configuration.list", drive_sla_configuration_list, drive_sla_configuration_list_stream, { "team_id", NULL } },
  { "sso_url_from_email_response.load", drive_sso_url_from_email_response_load, drive_sso_url_from_email_response_load_stream, { "email", "is_desktop", "type", NULL } },
  { "team.list", drive_team_list, drive_team_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "team.load", drive_team_load, drive_team_load_stream, { "id", NULL } },
  { "team.create", drive_team_create, drive_team_create_stream, { "copy_settings_from_team_id", NULL } },
  { "team.update", drive_team_update, drive_team_update_stream, { "id", NULL } },
  { "team.remove", drive_team_remove, drive_team_remove_stream, { "id", NULL } },
  { "team_membership.list", drive_team_membership_list, drive_team_membership_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "team_membership.load", drive_team_membership_load, drive_team_membership_load_stream, { "id", NULL } },
  { "team_membership.create", drive_team_membership_create, drive_team_membership_create_stream, { NULL } },
  { "team_membership.update", drive_team_membership_update, drive_team_membership_update_stream, { "id", NULL } },
  { "team_membership.remove", drive_team_membership_remove, drive_team_membership_remove_stream, { "also_leave_parent_team", "id", NULL } },
  { "template.list", drive_template_list, drive_template_list_stream, { "integration_type", "first", "include_archived", NULL } },
  { "template.load", drive_template_load, drive_template_load_stream, { "id", NULL } },
  { "template.create", drive_template_create, drive_template_create_stream, { NULL } },
  { "template.update", drive_template_update, drive_template_update_stream, { "id", NULL } },
  { "template.remove", drive_template_remove, drive_template_remove_stream, { "id", NULL } },
  { "time_schedule.list", drive_time_schedule_list, drive_time_schedule_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "time_schedule.load", drive_time_schedule_load, drive_time_schedule_load_stream, { "id", NULL } },
  { "time_schedule.create", drive_time_schedule_create, drive_time_schedule_create_stream, { NULL } },
  { "time_schedule.update", drive_time_schedule_update, drive_time_schedule_update_stream, { "external_id", "id", NULL } },
  { "time_schedule.remove", drive_time_schedule_remove, drive_time_schedule_remove_stream, { "id", NULL } },
  { "triage_responsibility.list", drive_triage_responsibility_list, drive_triage_responsibility_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "triage_responsibility.load", drive_triage_responsibility_load, drive_triage_responsibility_load_stream, { "id", NULL } },
  { "triage_responsibility.create", drive_triage_responsibility_create, drive_triage_responsibility_create_stream, { NULL } },
  { "triage_responsibility.update", drive_triage_responsibility_update, drive_triage_responsibility_update_stream, { "id", NULL } },
  { "triage_responsibility.remove", drive_triage_responsibility_remove, drive_triage_responsibility_remove_stream, { "id", NULL } },
  { "upload_file.create", drive_upload_file_create, drive_upload_file_create_stream, { "content_type", "filename", "make_public", "meta_data", "size", NULL } },
  { "usage_alert.list", drive_usage_alert_list, drive_usage_alert_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "usage_alert.load", drive_usage_alert_load, drive_usage_alert_load_stream, { "id", NULL } },
  { "user.list", drive_user_list, drive_user_list_stream, { "after", "before", "first", "include_archived", "include_disabled", "last", "order_by", NULL } },
  { "user.load", drive_user_load, drive_user_load_stream, { "id", NULL } },
  { "user.create", drive_user_create, drive_user_create_stream, { "code", "redirect_uri", "service", NULL } },
  { "user.update", drive_user_update, drive_user_update_stream, { "id", NULL } },
  { "user_setting.load", drive_user_setting_load, drive_user_setting_load_stream, { NULL } },
  { "user_setting.create", drive_user_setting_create, drive_user_setting_create_stream, { "category", "channel", "subscribe", NULL } },
  { "user_setting.update", drive_user_setting_update, drive_user_setting_update_stream, { "id", NULL } },
  { "view_preference.load", drive_view_preference_load, drive_view_preference_load_stream, { "view_type", NULL } },
  { "view_preference.create", drive_view_preference_create, drive_view_preference_create_stream, { NULL } },
  { "view_preference.update", drive_view_preference_update, drive_view_preference_update_stream, { "id", NULL } },
  { "view_preference.remove", drive_view_preference_remove, drive_view_preference_remove_stream, { "id", NULL } },
  { "webhook.list", drive_webhook_list, drive_webhook_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "webhook.load", drive_webhook_load, drive_webhook_load_stream, { "id", NULL } },
  { "webhook.create", drive_webhook_create, drive_webhook_create_stream, { NULL } },
  { "webhook.update", drive_webhook_update, drive_webhook_update_stream, { "id", NULL } },
  { "webhook.remove", drive_webhook_remove, drive_webhook_remove_stream, { "id", NULL } },
  { "webhook_failure_event.list", drive_webhook_failure_event_list, drive_webhook_failure_event_list_stream, { "oauth_client_id", "webhook_id", NULL } },
  { "workflow_state.list", drive_workflow_state_list, drive_workflow_state_list_stream, { "after", "before", "first", "include_archived", "last", "order_by", NULL } },
  { "workflow_state.load", drive_workflow_state_load, drive_workflow_state_load_stream, { "id", NULL } },
  { "workflow_state.create", drive_workflow_state_create, drive_workflow_state_create_stream, { NULL } },
  { "workflow_state.update", drive_workflow_state_update, drive_workflow_state_update_stream, { "id", NULL } },
  { NULL, NULL, NULL, { NULL } },
};

typedef struct {
  Drive fn;
  Streamer stream;
  voxgig_value* mtch;
} Target;

// The first operation that completes against a plain 200: with no
// arguments, else with every path parameter its points declare filled in.
static bool usable_op(Target* target) {
  LinearSDK* plain = linear_sdk_new(offline(cmap(2,
    "apikey", v_str(CANARY_APIKEY),
    "system", cmap(1, "fetch", vfn(transport_fn, (void*)(intptr_t)SC_OK)))));
  for (size_t i = 0; CANDIDATES[i].name; i++) {
    voxgig_value* filled = v_map();
    for (size_t p = 0; CANDIDATES[i].params[p]; p++) {
      setp(filled, CANDIDATES[i].params[p], v_str("p1"));
    }
    voxgig_value* tries[2] = { v_map(), filled };
    for (int t = 0; t < 2; t++) {
      voxgig_value* out = NULL;
      PNError* err = CANDIDATES[i].fn(plain, voxgig_clone(tries[t]), NULL, &out, NULL);
      if (!err) {
        target->fn = CANDIDATES[i].fn;
        target->stream = CANDIDATES[i].stream;
        target->mtch = tries[t];
        return true;
      }
    }
  }
  return false;
}

static PNError* drive(LinearSDK* sdk, Target* target, voxgig_value* ctrl) {
  // A caller may keep the record it passed rather than read ctrl.explain.
  voxgig_value* held = ctrl ? getp(ctrl, "explain") : NULL;
  voxgig_value* out = NULL;
  voxgig_value* match = NULL;
  PNError* err = target->fn(sdk, voxgig_clone(target->mtch), ctrl, &out, &match);
  if (err) {
    push_error("error", err);
  } else {
    push_value("result", out ? out : v_undef());
  }
  // Raw, as a caller copying the match into another query reads it.
  push_value("match", match ? match : v_undef());
  voxgig_value* explain = ctrl ? getp(ctrl, "explain") : NULL;
  if (v_is_map(explain)) push_value("explain", explain);
  if (v_is_map(held) && held != explain) push_value("explain:held", held);
  return err;
}

// Header maps keep the caller's spelling; the assertion should not care.
static const char* header(voxgig_value* map, const char* name) {
  if (!voxgig_is_map(map)) return NULL;
  voxgig_map* m = voxgig_as_map(map);
  for (size_t i = 0; i < m->len; i++) {
    if (0 == strcasecmp(m->entries[i].key, name)) {
      voxgig_value* v = m->entries[i].value;
      return voxgig_is_string(v) ? voxgig_as_string(v) : voxgig_stringify(v, -1);
    }
  }
  return NULL;
}

static size_t leaks(const char* text, char* found, size_t cap) {
  size_t n = 0;
  found[0] = '\0';
  for (size_t i = 0; i < NFORMS; i++) {
    if (strstr(text, FORMS[i])) {
      if (n) strncat(found, ", ", cap - strlen(found) - 1);
      strncat(found, FORMS[i], cap - strlen(found) - 1);
      n++;
    }
  }
  return n;
}

static bool ends_with(const char* s, const char* suffix) {
  size_t sl = strlen(s);
  size_t xl = strlen(suffix);
  return sl >= xl && 0 == strcmp(s + sl - xl, suffix);
}

int main(void) {
  build_forms();

  Target target;
  if (!usable_op(&target)) {
    printf("SKIP: no operation of this SDK completes against a plain 200; nothing to sweep\n");
    return 0;
  }
  Target* op = &target;

  PNError* notfound = NULL;
  voxgig_value* explained = NULL;

  for (int sc = 0; sc < SC_COUNT; sc++) {
    for (int variant = 0; variant < 3; variant++) {
      LinearSDK* sdk = make_sdk(sc, NULL, NULL);
      voxgig_value* explain = v_map();
      voxgig_value* ctrl = NULL;
      if (1 == variant) ctrl = cmap(1, "explain", explain);
      if (2 == variant) ctrl = cmap(2, "throw", v_bool(false), "explain", explain);
      PNError* err = drive(sdk, op, ctrl);
      if (SC_NOTFOUND == sc && 0 == variant) notfound = err;
      if (SC_OK == sc && 1 == variant) explained = explain;
      (void)SC_NAMES;
    }
  }

  // A name given at run time replaces the declared one: the match leaves
  // out whichever name prepare_auth placed.
  drive(make_sdk_with(SC_OK, NULL, NULL, cmap(1, "name", v_str("zzcred"))), op, NULL);

  // A credential mistyped as a map. The C validator defaults rather than
  // rejects, so what the constructor produced is swept instead: a string
  // quoting the value, cleaned the way a validation message is.
  LinearSDK* mistyped = linear_sdk_new(offline(cmap(2,
    "apikey", cmap(1, "value", v_str(CANARY_APIKEY)),
    "clean", cmap(1, "values", v_str(CANARY_VALUE)))));
  {
    char quoted[256];
    snprintf(quoted, sizeof(quoted), "apikey: expected string, got {\"value\":\"%s\"}",
             CANARY_APIKEY);
    push("mistyped:quoted", clean_str(sdk_get_root_ctx(mistyped), quoted));
  }

  // An error a feature hook raises, quoting the request, with explain on.
  Feature* thrower = (Feature*)calloc(1, sizeof(CaptureFeature));
  thrower->vt = &THROW_VT;
  PNError* hookerr = drive(make_sdk(SC_OK, NULL, thrower), op, cmap(1, "explain", v_map()));
  CHECK(hookerr != NULL, "the throwing hook should fail the operation");

  // The explain record a stream call is passed is cleaned however the stream
  // ends: from a feature's producer, or materialised by done.
  for (int s = 0; s < 2; s++) {
    const char* name = 0 == s ? "stream-ok" : "stream-plain";
    Feature* extra = NULL;
    if (0 == s) {
      extra = (Feature*)calloc(1, sizeof(CaptureFeature));
      extra->vt = &STREAMOK_VT;
    }
    voxgig_value* explain = v_map();
    PNError* serr = NULL;
    op->stream(make_sdk(SC_OK, NULL, extra), voxgig_clone(op->mtch),
               cmap(1, "ctrl", cmap(1, "explain", explain)), &serr);
    char label[64];
    snprintf(label, sizeof(label), "%s: only a failing stream raises", name);
    CHECK(NULL == serr, label);
    snprintf(label, sizeof(label), "%s: the explain record was not filled", name);
    CHECK(0 < voxgig_as_map(explain)->len, label);
    push_value(0 == s ? "stream-ok:explain" : "stream-plain:explain", explain);
  }

  // A feature's own error keeps its code, which is cleaned like the message:
  // returned, handed to a hook, and cleaned where a step's error skips
  // make_error.
  Feature* denier = (Feature*)calloc(1, sizeof(CaptureFeature));
  denier->vt = &DENY_VT;
  PNError* denied = drive(make_sdk(SC_OK, NULL, denier), op, NULL);
  CHECK(denied != NULL, "the refusing hook should fail the operation");
  char steppedcode[128];
  snprintf(steppedcode, sizeof(steppedcode), "stepped:%s", CANARY_VALUE);
  PNError* stepped = pn_error_new(steppedcode, "stepped");
  clean_error_util(sdk_get_root_ctx(mistyped), stepped);
  push("stepped", pn_error_str(stepped));

  // A client given no clean block at all masks by the schema defaults.
  LinearSDK* bare = linear_sdk_new(offline(cmap(4,
    "apikey", v_str(CANARY_APIKEY),
    "secret", v_str(CANARY_SECRET),
    "headers", cmap(1, "X-Custom-Token", v_str(CANARY_HEADER)),
    "system", cmap(1, "fetch", vfn(transport_fn, (void*)(intptr_t)SC_NOTFOUND)))));
  PNError* barerr = drive(bare, op, NULL);
  CHECK(barerr != NULL, "the 404 scenario must throw without a clean block");

  // The raw path returns its failure rather than an error.
  PNError* directerr = NULL;
  voxgig_value* direct = sdk_direct(make_sdk(SC_TRANSPORT, NULL, NULL),
                                    cmap(1, "path", v_str("raw")), &directerr);
  bool directok = true;
  CHECK(NULL == directerr && get_bool(direct, "ok", &directok) && !directok,
        "a transport failure should fail direct()");
  push_value("direct", direct);

  size_t nleaks = 0;
  char found[4096];
  for (size_t i = 0; i < NSINKS; i++) {
    if (leaks(SINKS[i].text, found, sizeof(found))) {
      fprintf(stderr, "credential leaked through: %s [%s]\n", SINKS[i].name, found);
      nleaks++;
    }
  }

  printf("clean: swept %zu surface(s), %zu leak(s)\n", NSINKS, nleaks);
  CHECK(0 == nleaks, "a credential leaked (see above)");

  // The positive half: the slot the credential travelled in is masked, and
  // an unregistered token in a response header is masked by name.
  CHECK(notfound != NULL, "the 404 scenario must throw");
  if (notfound) {
    CHECK_INT_EQ(to_int(getp(notfound->result, "status")), 404, "the 404 error carries its status");
    voxgig_value* headers = getp(notfound->spec, "headers");
    if (!AUTH_SUPPRESSED) {
      if (0 == strcmp(AUTH_WHERE, "query")) {
        CHECK_STR_EQ(header(getp(notfound->spec, "query"), AUTH_NAME), MASK, "the query credential is masked");
      } else if (0 == strcmp(AUTH_WHERE, "cookie")) {
        const char* cookie = header(headers, "cookie");
        CHECK(cookie && strstr(cookie, MASK), "the cookie credential is masked");
      } else {
        const char* cred = header(headers, AUTH_NAME);
        CHECK(cred && ends_with(cred, MASK), "the header credential is masked");
      }
    }
    CHECK_STR_EQ(header(headers, "x-custom-token"), MASK, "a custom token header is masked by name");
  }

  {
    char want[64];
    snprintf(want, sizeof(want), "denied:%s", MASK);
    CHECK_STR_EQ(denied ? denied->code : NULL, want, "a feature's own error code is masked");
    snprintf(want, sizeof(want), "stepped:%s", MASK);
    CHECK_STR_EQ(stepped->code, want, "clean_error masks the code");
  }
  CHECK_STR_EQ(barerr ? header(getp(barerr->spec, "headers"), "x-custom-token") : NULL, MASK,
               "a client with no clean block masks by the schema defaults");

  CHECK(explained != NULL && voxgig_is_map(getp(explained, "result")),
        "the explain record should carry the result");
  if (explained) {
    CHECK_STR_EQ(header(getp(getp(explained, "result"), "headers"), "x-session-token"), MASK,
                 "a response token header is masked by name");
  }

  // The negative control: with clean switched off the canary MUST show, or
  // the sweep is blind.
  size_t before = NSINKS;
  LinearSDK* raw = make_sdk(SC_NOTFOUND, cmap(1, "active", v_bool(false)), NULL);
  PNError* rawerr = drive(raw, op, NULL);
  CHECK(rawerr != NULL, "the 404 scenario must throw with clean off");
  size_t shown = 0;
  for (size_t i = before; i < NSINKS; i++) {
    if (leaks(SINKS[i].text, found, sizeof(found))) shown++;
  }
  CHECK(0 < shown, "with clean off, nothing showed the canary: the sweep is blind");
  if (rawerr && !AUTH_SUPPRESSED) {
    char* text = voxgig_jsonify(rawerr->spec, NULL);
    char pair[256];
    snprintf(pair, sizeof(pair), "%s:%s", CANARY_APIKEY, CANARY_SECRET);
    char* pairb64 = b64(pair);
    CHECK(strstr(text, CANARY_APIKEY) || strstr(text, pairb64),
          "the raw spec should carry the credential when clean is off");
  }

  // Explaining a failure must not cost it its error.
  {
    voxgig_value* out = NULL;
    PNError* explained = op->fn(make_sdk(SC_NOTFOUND, cmap(1, "active", v_bool(false)), NULL),
                                voxgig_clone(op->mtch), cmap(1, "explain", v_map()), &out, NULL);
    CHECK_STR_EQ(explained ? explained->msg : NULL, rawerr ? rawerr->msg : NULL,
                 "with clean off, explain lost the error");
  }

  // A registered value used as a property name is masked; names that mask
  // alike are all kept.
  LinearSDK* named = linear_sdk_new(offline(cmap(1,
    "clean", cmap(1, "values", v_str("ZZVAL-abc123,ZZVAL-xyz789")))));
  voxgig_value* renamed = clean_util(sdk_get_root_ctx(named), cmap(3,
    "ZZVAL-abc123", v_num(1), "ZZVAL-xyz789", v_num(2), "plain", v_num(3)));
  voxgig_map* rm = voxgig_as_map(renamed);
  CHECK(3 == rm->len, "every masked name is kept");
  if (3 == rm->len) {
    char alt[64];
    snprintf(alt, sizeof(alt), "%s#1", MASK);
    CHECK_STR_EQ(rm->entries[0].key, MASK, "a registered value used as a name is masked");
    CHECK_STR_EQ(rm->entries[1].key, alt, "a colliding masked name takes a counter");
    CHECK_STR_EQ(rm->entries[2].key, "plain", "an ordinary name is kept");
  }

  // The generated config's own clean block is honoured, and left unchanged.
  {
    voxgig_value* config = cmap(1, "options", cmap(1, "clean", cmap(2,
      "keys", v_str("zzsens"), "values", v_str("CONFIG-SEEDED-1"))));
    CtxSpec cs;
    memset(&cs, 0, sizeof(cs));
    cs.options = cmap(1, "clean", cmap(1, "values", v_str("CALLER-SEEDED-2")));
    cs.config = config;
    Context* cctx = make_context_util(cs, NULL);
    cctx->options = make_options_util(cctx);
    char want[128];
    snprintf(want, sizeof(want), "a %s b %s", MASK, MASK);
    CHECK_STR_EQ(clean_str(cctx, "a CONFIG-SEEDED-1 b CALLER-SEEDED-2"), want,
                 "the config's and the caller's values are both masked");
    voxgig_value* out = clean_util(cctx, cmap(2, "my_zzsens", v_str("x"), "other", v_str("y")));
    CHECK_STR_EQ(get_str(out, "my_zzsens"), MASK, "the config's key name is sensitive");
    CHECK_STR_EQ(get_str(out, "other"), "y", "an ordinary name is kept");
    voxgig_value* cfgclean = getpath2(config, "options", "clean");
    CHECK_STR_EQ(get_str(cfgclean, "keys"), "zzsens", "the config's keys are left alone");
    CHECK_STR_EQ(get_str(cfgclean, "values"), "CONFIG-SEEDED-1",
                 "the config's values are left alone");
  }

  // A feature's name is not a field name: a feature called secrets does not
  // make its settings secret, though a sensitive field inside it still is. An
  // entity block, of per-entity settings or seeded records keyed by entity
  // name and id, is not read at all, and nor are rbac's rules, keyed by entity
  // and operation names.
  {
    LinearSDK* featured = linear_sdk_new(offline(cmap(3,
      "apikey", v_str(CANARY_APIKEY),
      "feature", cmap(3,
        "secrets", cmap(3,
          "active", v_bool(false),
          "name", v_str("ZZNAME-feat123"),
          "token", v_str("ZZTOKEN-feat456")),
        "rbac", cmap(2,
          "active", v_bool(false),
          "rules", cmap(1, "zztoken.load", v_str("PLAINRULE-k7j5h3g1"))),
        "test", cmap(2,
          "active", v_bool(false),
          "entity", cmap(1, "zztoken", cmap(1, "ZZTOKEN01",
            cmap(1, "note", v_str("PLAINRECORD-t5r3e1w9")))))),
      "entity", cmap(1, "zztoken", cmap(1, "alias",
        cmap(1, "zzkey", v_str("PLAINALIAS-m2n4b6v8")))))));
    Context* fctx = sdk_get_root_ctx(featured);
    char want[128];
    snprintf(want, sizeof(want), "ZZNAME-feat123 %s", MASK);
    CHECK_STR_EQ(clean_str(fctx, "ZZNAME-feat123 ZZTOKEN-feat456"), want,
                 "only the sensitive field of a feature is registered");
    CHECK_STR_EQ(clean_str(fctx, "record PLAINRECORD-t5r3e1w9"), "record PLAINRECORD-t5r3e1w9",
                 "a record seeded under an entity block is not registered");
    CHECK_STR_EQ(clean_str(fctx, "alias PLAINALIAS-m2n4b6v8"), "alias PLAINALIAS-m2n4b6v8",
                 "an entity's own settings are not registered");
    CHECK_STR_EQ(clean_str(fctx, "rule PLAINRULE-k7j5h3g1"), "rule PLAINRULE-k7j5h3g1",
                 "an rbac rule keyed by entity and operation is not registered");
  }

  TEST_SUMMARY("clean");
}
