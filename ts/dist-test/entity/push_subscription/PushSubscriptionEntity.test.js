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
(0, node_test_1.describe)('PushSubscriptionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.PushSubscription();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['create', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'push_subscription.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "archivedAt", "req": false, "short": "The time at which the entity was archived.", "type": "`$ANY`", "index$": 0 }, { "active": true, "name": "createdAt", "req": true, "short": "The time at which the entity was created.", "type": "`$ANY`", "index$": 1 }, { "active": true, "name": "id", "req": true, "short": "The unique identifier of the entity.", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "updatedAt", "req": true, "short": "The last time at which the entity was meaningfully updated.", "type": "`$ANY`", "index$": 3 }], "id": { "field": "id", "name": "id" }, "name": "push_subscription", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": {}, "contract": { "id": "POST pushSubscriptionCreate", "json": "{\"field\":{\"args\":[{\"gqltype\":\"PushSubscriptionCreateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"PushSubscriptionCreateInput\"}],\"deprecated\":false,\"desc\":\"Creates a push subscription for the authenticated user's current device or browser. If a subscription already exists for the same session, the old one is replaced.\",\"gqltype\":\"PushSubscriptionPayload!\",\"list\":false,\"name\":\"pushSubscriptionCreate\",\"reqd\":true,\"type\":\"PushSubscriptionPayload\"},\"invocation\":{\"doc\":\"mutation PushSubscriptionCreate($input: PushSubscriptionCreateInput!) { pushSubscriptionCreate(input: $input) { entity { ...PushSubscriptionFields } success } } fragment PushSubscriptionFields on PushSubscription { archivedAt createdAt id updatedAt }\",\"field\":\"pushSubscriptionCreate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"\",\"gqltype\":\"PushSubscriptionCreateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"PushSubscriptionCreateInput\":{\"desc\":\"Input for creating a push subscription to receive push notifications on a device or browser.\",\"fields\":{\"data\":{\"args\":[],\"deprecated\":false,\"desc\":\"The push subscription data in stringified JSON format. For web subscriptions, this must contain keys, endpoint, and expirationTime fields per the Web Push API specification. For mobile subscriptions, this contains the device token.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"data\",\"reqd\":true,\"type\":\"String\"},\"id\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier in UUID v4 format. If none is provided, the backend will generate one.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"id\",\"reqd\":false,\"type\":\"String\"},\"type\":{\"args\":[],\"deprecated\":false,\"desc\":\"The type of push subscription: 'web' for browser-based Web Push API, 'apple' for Apple Push Notification service (or 'appleDevelopment' for sandbox), or 'firebase' for Firebase Cloud Messaging (Android).\",\"gqltype\":\"PushSubscriptionType\",\"list\":false,\"name\":\"type\",\"reqd\":false,\"type\":\"PushSubscriptionType\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"PushSubscriptionCreateInput\"},\"PushSubscriptionType\":{\"desc\":\"The different push subscription types.\",\"fields\":{},\"kind\":\"ENUM\",\"name\":\"PushSubscriptionType\",\"values\":[\"apple\",\"appleDevelopment\",\"firebase\",\"web\"]},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "mutation PushSubscriptionCreate($input: PushSubscriptionCreateInput!) { pushSubscriptionCreate(input: $input) { entity { ...PushSubscriptionFields } success } } fragment PushSubscriptionFields on PushSubscription { archivedAt createdAt id updatedAt }", "field": "pushSubscriptionCreate", "optype": "mutation", "vars": [{ "from": "", "gqltype": "PushSubscriptionCreateInput!", "name": "input" }] }, "kind": "graphql", "method": "POST", "orig": "pushSubscriptionCreate", "segments": [], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.data.pushSubscriptionCreate.entity`" }, "index$": 0 }], "key$": "create" }, "remove": { "input": "data", "name": "remove", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST pushSubscriptionDelete", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"Deletes a push subscription, unregistering the device from receiving push notifications.\",\"gqltype\":\"PushSubscriptionPayload!\",\"list\":false,\"name\":\"pushSubscriptionDelete\",\"reqd\":true,\"type\":\"PushSubscriptionPayload\"},\"invocation\":{\"doc\":\"mutation PushSubscriptionRemove($id: String!) { pushSubscriptionDelete(id: $id) { entity { ...PushSubscriptionFields } success } } fragment PushSubscriptionFields on PushSubscription { archivedAt createdAt id updatedAt }\",\"field\":\"pushSubscriptionDelete\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "mutation PushSubscriptionRemove($id: String!) { pushSubscriptionDelete(id: $id) { entity { ...PushSubscriptionFields } success } } fragment PushSubscriptionFields on PushSubscription { archivedAt createdAt id updatedAt }", "field": "pushSubscriptionDelete", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "kind": "graphql", "method": "POST", "orig": "pushSubscriptionDelete", "segments": [], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.data.pushSubscriptionDelete.entity`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [] }, "key$": "push_subscription", "name__orig": "push_subscription", "Name": "PushSubscription", "name_": "push_subscription", "name-": "push-subscription", "NAME": "PUSH_SUBSCRIPTION", "index$": 64 }, { "active": true, "entity": "push_subscription", "key$": "BasicPushSubscriptionFlow", "kind": "basic", "name": "BasicPushSubscriptionFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "push_subscription_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "push_subscription_ref01", "suffix": "_rm0" }, "match": { "id": "push_subscription01" }, "op": "remove", "spec": [], "valid": [], "index$": 1 }] }, 'PushSubscription');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const push_subscription_ref01_ent = client.PushSubscription();
        let push_subscription_ref01_data = setup.data.new.push_subscription['push_subscription_ref01'];
        push_subscription_ref01_data = (await push_subscription_ref01_ent.create(push_subscription_ref01_data)).data();
        (0, node_assert_1.default)(null != push_subscription_ref01_data.id);
        // REMOVE
        const push_subscription_ref01_match_rm0 = { id: push_subscription_ref01_data.id };
        await push_subscription_ref01_ent.remove(push_subscription_ref01_match_rm0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/push_subscription/PushSubscriptionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['push_subscription01', 'push_subscription02', 'push_subscription03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_PUSH_SUBSCRIPTION_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_PUSH_SUBSCRIPTION_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_PUSH_SUBSCRIPTION_ENTID'];
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
//# sourceMappingURL=PushSubscriptionEntity.test.js.map