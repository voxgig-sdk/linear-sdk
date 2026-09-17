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
(0, node_test_1.describe)('NotificationSubscriptionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.NotificationSubscription();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'notification_subscription.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "active", "req": true, "short": "Whether the subscription is active.", "type": "`$BOOLEAN`", "index$": 0 }, { "active": true, "name": "archivedAt", "req": false, "short": "The time at which the entity was archived.", "type": "`$ANY`", "index$": 1 }, { "active": true, "name": "contextViewType", "req": false, "short": "The type of contextual view (e.g., active issues, backlog) that further scopes a team notification subscription.", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "createdAt", "req": true, "short": "The time at which the entity was created.", "type": "`$ANY`", "index$": 3 }, { "active": true, "name": "customView", "req": false, "short": "The custom view that this notification subscription is scoped to.", "type": "`$OBJECT`", "index$": 4 }, { "active": true, "name": "customer", "req": false, "short": "The customer that this notification subscription is scoped to.", "type": "`$OBJECT`", "index$": 5 }, { "active": true, "name": "cycle", "req": false, "short": "The cycle that this notification subscription is scoped to.", "type": "`$OBJECT`", "index$": 6 }, { "active": true, "name": "id", "req": true, "short": "The unique identifier of the entity.", "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "initiative", "req": false, "short": "The initiative that this notification subscription is scoped to.", "type": "`$OBJECT`", "index$": 8 }, { "active": true, "name": "label", "req": false, "short": "The issue label that this notification subscription is scoped to.", "type": "`$OBJECT`", "index$": 9 }, { "active": true, "name": "project", "req": false, "short": "The project that this notification subscription is scoped to.", "type": "`$OBJECT`", "index$": 10 }, { "active": true, "name": "subscriber", "req": false, "short": "The user who will receive notifications from this subscription.", "type": "`$OBJECT`", "index$": 11 }, { "active": true, "name": "team", "req": false, "short": "The team that this notification subscription is scoped to.", "type": "`$OBJECT`", "index$": 12 }, { "active": true, "name": "updatedAt", "req": true, "short": "The last time at which the entity was meaningfully updated.", "type": "`$ANY`", "index$": 13 }, { "active": true, "name": "user", "req": false, "short": "The user that this notification subscription is scoped to, for user-specific view subscriptions.", "type": "`$OBJECT`", "index$": 14 }, { "active": true, "name": "userContextViewType", "req": false, "short": "The type of user-specific view that further scopes a user notification subscription.", "type": "`$STRING`", "index$": 15 }], "id": { "field": "id", "name": "id" }, "name": "notification_subscription", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "after", "orig": "after", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "before", "orig": "before", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "kind": "param", "name": "first", "orig": "first", "reqd": false, "type": "`$INTEGER`", "index$": 2 }, { "active": true, "kind": "param", "name": "include_archived", "orig": "include_archived", "reqd": false, "type": "`$BOOLEAN`", "index$": 3 }, { "active": true, "kind": "param", "name": "last", "orig": "last", "reqd": false, "type": "`$INTEGER`", "index$": 4 }, { "active": true, "kind": "param", "name": "order_by", "orig": "order_by", "reqd": false, "type": "`$ANY`", "index$": 5 }] }, "contract": { "id": "POST notificationSubscriptions", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String\",\"name\":\"after\",\"reqd\":false,\"type\":\"String\"},{\"gqltype\":\"String\",\"name\":\"before\",\"reqd\":false,\"type\":\"String\"},{\"gqltype\":\"Int\",\"name\":\"first\",\"reqd\":false,\"type\":\"Int\"},{\"gqltype\":\"Boolean\",\"name\":\"includeArchived\",\"reqd\":false,\"type\":\"Boolean\"},{\"gqltype\":\"Int\",\"name\":\"last\",\"reqd\":false,\"type\":\"Int\"},{\"gqltype\":\"PaginationOrderBy\",\"name\":\"orderBy\",\"reqd\":false,\"type\":\"PaginationOrderBy\"}],\"deprecated\":false,\"desc\":\"The authenticated user's notification subscriptions. These subscriptions control which notifications the user receives for specific entities such as teams, projects, cycles, labels, custom views, initiatives, customers, and users.\",\"gqltype\":\"NotificationSubscriptionConnection!\",\"list\":false,\"name\":\"notificationSubscriptions\",\"reqd\":true,\"type\":\"NotificationSubscriptionConnection\"},\"invocation\":{\"doc\":\"query NotificationSubscriptionList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { notificationSubscriptions(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...NotificationSubscriptionFields } pageInfo { endCursor hasNextPage } } } fragment NotificationSubscriptionFields on NotificationSubscription { active archivedAt contextViewType createdAt customView { id } customer { id } cycle { id } id initiative { id } label { id } project { id } subscriber { id } team { id } updatedAt user { id } userContextViewType }\",\"field\":\"notificationSubscriptions\",\"optype\":\"query\",\"page\":{\"cursor\":\"pageInfo.endCursor\",\"more\":\"pageInfo.hasNextPage\",\"nodes\":\"nodes\",\"style\":\"relay\"},\"vars\":[{\"from\":\"after\",\"gqltype\":\"String\",\"name\":\"after\"},{\"from\":\"before\",\"gqltype\":\"String\",\"name\":\"before\"},{\"from\":\"first\",\"gqltype\":\"Int\",\"name\":\"first\"},{\"from\":\"includeArchived\",\"gqltype\":\"Boolean\",\"name\":\"includeArchived\"},{\"from\":\"last\",\"gqltype\":\"Int\",\"name\":\"last\"},{\"from\":\"orderBy\",\"gqltype\":\"PaginationOrderBy\",\"name\":\"orderBy\"}]},\"protocol\":\"graphql\",\"types\":{\"Boolean\":{\"desc\":\"The `Boolean` scalar type represents `true` or `false`.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Boolean\"},\"Int\":{\"desc\":\"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Int\"},\"PaginationOrderBy\":{\"desc\":\"By which field should the pagination order by\",\"fields\":{},\"kind\":\"ENUM\",\"name\":\"PaginationOrderBy\",\"values\":[\"createdAt\",\"updatedAt\"]},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "query NotificationSubscriptionList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { notificationSubscriptions(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...NotificationSubscriptionFields } pageInfo { endCursor hasNextPage } } } fragment NotificationSubscriptionFields on NotificationSubscription { active archivedAt contextViewType createdAt customView { id } customer { id } cycle { id } id initiative { id } label { id } project { id } subscriber { id } team { id } updatedAt user { id } userContextViewType }", "field": "notificationSubscriptions", "optype": "query", "page": { "cursor": "pageInfo.endCursor", "more": "pageInfo.hasNextPage", "nodes": "nodes", "style": "relay" }, "vars": [{ "from": "after", "gqltype": "String", "name": "after" }, { "from": "before", "gqltype": "String", "name": "before" }, { "from": "first", "gqltype": "Int", "name": "first" }, { "from": "includeArchived", "gqltype": "Boolean", "name": "includeArchived" }, { "from": "last", "gqltype": "Int", "name": "last" }, { "from": "orderBy", "gqltype": "PaginationOrderBy", "name": "orderBy" }] }, "kind": "graphql", "method": "POST", "orig": "notificationSubscriptions", "segments": [], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.data.notificationSubscriptions.nodes`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST notificationSubscription", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"A specific notification subscription by ID.\",\"gqltype\":\"NotificationSubscription!\",\"list\":false,\"name\":\"notificationSubscription\",\"reqd\":true,\"type\":\"NotificationSubscription\"},\"invocation\":{\"doc\":\"query NotificationSubscriptionLoad($id: String!) { notificationSubscription(id: $id) { ...NotificationSubscriptionFields } } fragment NotificationSubscriptionFields on NotificationSubscription { active archivedAt contextViewType createdAt customView { id } customer { id } cycle { id } id initiative { id } label { id } project { id } subscriber { id } team { id } updatedAt user { id } userContextViewType }\",\"field\":\"notificationSubscription\",\"optype\":\"query\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "query NotificationSubscriptionLoad($id: String!) { notificationSubscription(id: $id) { ...NotificationSubscriptionFields } } fragment NotificationSubscriptionFields on NotificationSubscription { active archivedAt contextViewType createdAt customView { id } customer { id } cycle { id } id initiative { id } label { id } project { id } subscriber { id } team { id } updatedAt user { id } userContextViewType }", "field": "notificationSubscription", "optype": "query", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "kind": "graphql", "method": "POST", "orig": "notificationSubscription", "segments": [], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.data.notificationSubscription`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "notification_subscription", "name__orig": "notification_subscription", "Name": "NotificationSubscription", "name_": "notification_subscription", "name-": "notification-subscription", "NAME": "NOTIFICATION_SUBSCRIPTION", "index$": 49 }, { "active": true, "entity": "notification_subscription", "key$": "BasicNotificationSubscriptionFlow", "kind": "basic", "name": "BasicNotificationSubscriptionFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "notification_subscription_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "notification_subscription_ref01", "srcdatavar": "notification_subscription_ref01_data", "suffix": "_dt0" }, "match": { "id": "notification_subscription01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-notification_subscription_ref01" } }], "index$": 1 }] }, 'NotificationSubscription');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let notification_subscription_ref01_data = Object.values(setup.data.existing.notification_subscription)[0];
        // LIST
        const notification_subscription_ref01_ent = client.NotificationSubscription();
        const notification_subscription_ref01_match = {};
        notification_subscription_ref01_match['after'] = setup.idmap['after01'];
        notification_subscription_ref01_match['before'] = setup.idmap['before01'];
        notification_subscription_ref01_match['first'] = setup.idmap['first01'];
        notification_subscription_ref01_match['include_archived'] = setup.idmap['include_archived01'];
        notification_subscription_ref01_match['last'] = setup.idmap['last01'];
        notification_subscription_ref01_match['order_by'] = setup.idmap['order_by01'];
        const notification_subscription_ref01_list = (await notification_subscription_ref01_ent.list(notification_subscription_ref01_match)).map((e) => e.data());
        // LOAD
        const notification_subscription_ref01_match_dt0 = {};
        notification_subscription_ref01_match_dt0.id = notification_subscription_ref01_data.id;
        const notification_subscription_ref01_data_dt0 = (await notification_subscription_ref01_ent.load(notification_subscription_ref01_match_dt0)).data();
        (0, node_assert_1.default)(notification_subscription_ref01_data_dt0.id === notification_subscription_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/notification_subscription/NotificationSubscriptionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['notification_subscription01', 'notification_subscription02', 'notification_subscription03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_NOTIFICATION_SUBSCRIPTION_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_NOTIFICATION_SUBSCRIPTION_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_NOTIFICATION_SUBSCRIPTION_ENTID'];
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
//# sourceMappingURL=NotificationSubscriptionEntity.test.js.map