"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('WebhookFailureEventEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.WebhookFailureEvent();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'webhook_failure_event.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "createdAt", "req": true, "short": "The time at which the entity was created.", "type": "`$ANY`", "index$": 0 }, { "active": true, "name": "executionId", "req": true, "short": "A stable identifier for the webhook delivery attempt.", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "httpStatus", "req": false, "short": "The HTTP status code returned by the webhook recipient.", "type": "`$NUMBER`", "index$": 2 }, { "active": true, "name": "id", "req": true, "short": "The unique identifier of the entity.", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "responseOrError", "req": false, "short": "The HTTP response body returned by the recipient, or the error message if the request failed before receiving a response.", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "url", "req": true, "short": "The URL that the webhook was trying to push to.", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "webhook", "req": false, "short": "The webhook that this failure event is associated with.", "type": "`$OBJECT`", "index$": 6 }], "id": { "field": "id", "name": "id" }, "name": "webhook_failure_event", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "oauth_client_id", "orig": "oauth_client_id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST failuresForOauthWebhooks", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"oauthClientId\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"[INTERNAL] Webhook failure events for webhooks that belong to an OAuth application. (last 50)\",\"gqltype\":\"[WebhookFailureEvent!]!\",\"list\":true,\"name\":\"failuresForOauthWebhooks\",\"reqd\":true,\"type\":\"WebhookFailureEvent\"},\"invocation\":{\"doc\":\"query WebhookFailureEventList($oauthClientId: String!) { failuresForOauthWebhooks(oauthClientId: $oauthClientId) { ...WebhookFailureEventFields } } fragment WebhookFailureEventFields on WebhookFailureEvent { createdAt executionId httpStatus id responseOrError url webhook { id } }\",\"field\":\"failuresForOauthWebhooks\",\"optype\":\"query\",\"vars\":[{\"from\":\"oauthClientId\",\"gqltype\":\"String!\",\"name\":\"oauthClientId\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "query WebhookFailureEventList($oauthClientId: String!) { failuresForOauthWebhooks(oauthClientId: $oauthClientId) { ...WebhookFailureEventFields } } fragment WebhookFailureEventFields on WebhookFailureEvent { createdAt executionId httpStatus id responseOrError url webhook { id } }", "field": "failuresForOauthWebhooks", "optype": "query", "vars": [{ "from": "oauthClientId", "gqltype": "String!", "name": "oauthClientId" }] }, "kind": "graphql", "method": "POST", "orig": "failuresForOauthWebhooks", "segments": [], "select": { "exist": ["oauth_client_id"] }, "transform": { "req": "`reqdata`", "res": "`body.data.failuresForOauthWebhooks`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "webhook_id", "orig": "webhook_id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST auditLogWebhookFailureEvents", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"webhookId\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"[INTERNAL] Failure events for an audit log webhook (last 50).\",\"gqltype\":\"[WebhookFailureEvent!]!\",\"list\":true,\"name\":\"auditLogWebhookFailureEvents\",\"reqd\":true,\"type\":\"WebhookFailureEvent\"},\"invocation\":{\"doc\":\"query WebhookFailureEventList($webhookId: String!) { auditLogWebhookFailureEvents(webhookId: $webhookId) { ...WebhookFailureEventFields } } fragment WebhookFailureEventFields on WebhookFailureEvent { createdAt executionId httpStatus id responseOrError url webhook { id } }\",\"field\":\"auditLogWebhookFailureEvents\",\"optype\":\"query\",\"vars\":[{\"from\":\"webhookId\",\"gqltype\":\"String!\",\"name\":\"webhookId\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "query WebhookFailureEventList($webhookId: String!) { auditLogWebhookFailureEvents(webhookId: $webhookId) { ...WebhookFailureEventFields } } fragment WebhookFailureEventFields on WebhookFailureEvent { createdAt executionId httpStatus id responseOrError url webhook { id } }", "field": "auditLogWebhookFailureEvents", "optype": "query", "vars": [{ "from": "webhookId", "gqltype": "String!", "name": "webhookId" }] }, "kind": "graphql", "method": "POST", "orig": "auditLogWebhookFailureEvents", "segments": [], "select": { "exist": ["webhook_id"] }, "transform": { "req": "`reqdata`", "res": "`body.data.auditLogWebhookFailureEvents`" }, "index$": 1 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "webhook_failure_event", "name__orig": "webhook_failure_event", "Name": "WebhookFailureEvent", "name_": "webhook_failure_event", "name-": "webhook-failure-event", "NAME": "WEBHOOK_FAILURE_EVENT", "index$": 85 }, { "active": true, "entity": "webhook_failure_event", "key$": "BasicWebhookFailureEventFlow", "kind": "basic", "name": "BasicWebhookFailureEventFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": { "webhook_id": "webhook01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "webhook_failure_event_ref01" } }], "index$": 0 }] }, 'WebhookFailureEvent');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let webhook_failure_event_ref01_data = Object.values(setup.data.existing.webhook_failure_event)[0];
        // LIST
        const webhook_failure_event_ref01_ent = client.WebhookFailureEvent();
        const webhook_failure_event_ref01_match = {};
        webhook_failure_event_ref01_match['webhook_id'] = setup.idmap['webhook01'];
        const webhook_failure_event_ref01_list = (await webhook_failure_event_ref01_ent.list(webhook_failure_event_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/webhook_failure_event/WebhookFailureEventTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['webhook_failure_event01', 'webhook_failure_event02', 'webhook_failure_event03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_WEBHOOK_FAILURE_EVENT_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_WEBHOOK_FAILURE_EVENT_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_WEBHOOK_FAILURE_EVENT_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.LinearSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.LINEAR_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.LINEAR_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=WebhookFailureEventEntity.test.js.map