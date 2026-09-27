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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "active": { "a": true, "h": "Active", "n": "active", "r": true, "sh": "Whether the subscription is active.", "t": "`$BOOLEAN`", "key$": "active", "index$": 0 }, "archivedAt": { "a": true, "h": "Archived At", "n": "archivedAt", "r": false, "sh": "The time at which the entity was archived.", "t": "`$ANY`", "key$": "archivedAt", "index$": 1 }, "contextViewType": { "a": true, "h": "Context View Type", "n": "contextViewType", "r": false, "sh": "The type of contextual view (e.g., active issues, backlog) that further scopes a team notification subscription.", "t": "`$STRING`", "key$": "contextViewType", "index$": 2 }, "createdAt": { "a": true, "h": "Created At", "n": "createdAt", "r": true, "sh": "The time at which the entity was created.", "t": "`$ANY`", "key$": "createdAt", "index$": 3 }, "customView": { "a": true, "h": "Custom View", "n": "customView", "r": false, "sh": "The custom view that this notification subscription is scoped to.", "t": "`$OBJECT`", "key$": "customView", "index$": 4 }, "customer": { "a": true, "h": "Customer", "n": "customer", "r": false, "sh": "The customer that this notification subscription is scoped to.", "t": "`$OBJECT`", "key$": "customer", "index$": 5 }, "cycle": { "a": true, "h": "Cycle", "n": "cycle", "r": false, "sh": "The cycle that this notification subscription is scoped to.", "t": "`$OBJECT`", "key$": "cycle", "index$": 6 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The unique identifier of the entity.", "t": "`$STRING`", "key$": "id", "index$": 7 }, "initiative": { "a": true, "h": "Initiative", "n": "initiative", "r": false, "sh": "The initiative that this notification subscription is scoped to.", "t": "`$OBJECT`", "key$": "initiative", "index$": 8 }, "label": { "a": true, "h": "Label", "n": "label", "r": false, "sh": "The issue label that this notification subscription is scoped to.", "t": "`$OBJECT`", "key$": "label", "index$": 9 }, "project": { "a": true, "h": "Project", "n": "project", "r": false, "sh": "The project that this notification subscription is scoped to.", "t": "`$OBJECT`", "key$": "project", "index$": 10 }, "subscriber": { "a": true, "h": "Subscriber", "n": "subscriber", "r": false, "sh": "The user who will receive notifications from this subscription.", "t": "`$OBJECT`", "key$": "subscriber", "index$": 11 }, "team": { "a": true, "h": "Team", "n": "team", "r": false, "sh": "The team that this notification subscription is scoped to.", "t": "`$OBJECT`", "key$": "team", "index$": 12 }, "updatedAt": { "a": true, "h": "Updated At", "n": "updatedAt", "r": true, "sh": "The last time at which the entity was meaningfully updated.", "t": "`$ANY`", "key$": "updatedAt", "index$": 13 }, "user": { "a": true, "h": "User", "n": "user", "r": false, "sh": "The user that this notification subscription is scoped to, for user-specific view subscriptions.", "t": "`$OBJECT`", "key$": "user", "index$": 14 }, "userContextViewType": { "a": true, "h": "User Context View Type", "n": "userContextViewType", "r": false, "sh": "The type of user-specific view that further scopes a user notification subscription.", "t": "`$STRING`", "key$": "userContextViewType", "index$": 15 } }, "id": { "field": "id", "name": "id" }, "name": "notification_subscription", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "POST notificationSubscriptions", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "before", "or": "before", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "first", "or": "first", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "param", "n": "include_archived", "or": "include_archived", "r": false, "t": "`$BOOLEAN`", "index$": 3 }, { "a": true, "k": "param", "n": "last", "or": "last", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "param", "n": "order_by", "or": "order_by", "r": false, "t": "`$ANY`", "index$": 5 }] }, "gq": { "doc": "query NotificationSubscriptionList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { notificationSubscriptions(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...NotificationSubscriptionFields } pageInfo { endCursor hasNextPage } } } fragment NotificationSubscriptionFields on NotificationSubscription { active archivedAt contextViewType createdAt customView { id } customer { id } cycle { id } id initiative { id } label { id } project { id } subscriber { id } team { id } updatedAt user { id } userContextViewType }", "field": "notificationSubscriptions", "optype": "query", "page": { "cursor": "pageInfo.endCursor", "more": "pageInfo.hasNextPage", "nodes": "nodes", "style": "relay" }, "vars": [{ "from": "after", "gqltype": "String", "name": "after" }, { "from": "before", "gqltype": "String", "name": "before" }, { "from": "first", "gqltype": "Int", "name": "first" }, { "from": "includeArchived", "gqltype": "Boolean", "name": "includeArchived" }, { "from": "last", "gqltype": "Int", "name": "last" }, { "from": "orderBy", "gqltype": "PaginationOrderBy", "name": "orderBy" }] }, "k": "graphql", "m": "POST", "o": "notificationSubscriptions", "q": {}, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.notificationSubscriptions.nodes`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "POST notificationSubscription", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "query NotificationSubscriptionLoad($id: String!) { notificationSubscription(id: $id) { ...NotificationSubscriptionFields } } fragment NotificationSubscriptionFields on NotificationSubscription { active archivedAt contextViewType createdAt customView { id } customer { id } cycle { id } id initiative { id } label { id } project { id } subscriber { id } team { id } updatedAt user { id } userContextViewType }", "field": "notificationSubscription", "optype": "query", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "notificationSubscription", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.notificationSubscription`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "notification_subscription", "name__orig": "notification_subscription", "Name": "NotificationSubscription", "name_": "notification_subscription", "name-": "notification-subscription", "NAME": "NOTIFICATION_SUBSCRIPTION", "index$": 49 }, { "active": true, "entity": "notification_subscription", "key$": "BasicNotificationSubscriptionFlow", "kind": "basic", "name": "BasicNotificationSubscriptionFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "notification_subscription_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "notification_subscription_ref01", "srcdatavar": "notification_subscription_ref01_data", "suffix": "_dt0" }, "m": { "id": "notification_subscription01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-notification_subscription_ref01" } }], "index$": 1 }] }, 'NotificationSubscription', { "POST notificationSubscriptions": { "protocol": "graphql" }, "POST notificationSubscription": { "protocol": "graphql" } });
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
    let idmap = transform(['notification_subscription01', 'notification_subscription02', 'notification_subscription03', 'after01', 'before01', 'first01', 'include_archived01', 'last01', 'order_by01'], {
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