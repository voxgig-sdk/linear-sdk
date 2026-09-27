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
(0, node_test_1.describe)('NotificationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.Notification();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'notification.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "actor": { "a": true, "h": "Actor", "n": "actor", "r": false, "sh": "The user that caused the notification.", "t": "`$OBJECT`", "key$": "actor", "index$": 0 }, "actorAvatarColor": { "a": true, "h": "Actor Avatar Color", "n": "actorAvatarColor", "r": true, "sh": "[Internal] Notification actor initials if avatar is not available.", "t": "`$STRING`", "key$": "actorAvatarColor", "index$": 1 }, "actorAvatarUrl": { "a": true, "h": "Actor Avatar Url", "n": "actorAvatarUrl", "r": false, "sh": "[Internal] Notification avatar URL.", "t": "`$STRING`", "key$": "actorAvatarUrl", "index$": 2 }, "actorInactive": { "a": true, "h": "Actor Inactive", "n": "actorInactive", "r": true, "sh": "[Internal] Whether the notification's user actor is deactivated in the workspace.", "t": "`$BOOLEAN`", "key$": "actorInactive", "index$": 3 }, "actorInitials": { "a": true, "h": "Actor Initials", "n": "actorInitials", "r": false, "sh": "[Internal] Notification actor initials if avatar is not available.", "t": "`$STRING`", "key$": "actorInitials", "index$": 4 }, "archivedAt": { "a": true, "h": "Archived At", "n": "archivedAt", "r": false, "sh": "The time at which the entity was archived.", "t": "`$ANY`", "key$": "archivedAt", "index$": 5 }, "botActor": { "a": true, "h": "Bot Actor", "n": "botActor", "r": false, "sh": "The bot that caused the notification.", "t": "`$OBJECT`", "key$": "botActor", "index$": 6 }, "category": { "a": true, "h": "Category", "n": "category", "r": true, "sh": "The category of the notification.", "t": "`$STRING`", "key$": "category", "index$": 7 }, "createdAt": { "a": true, "h": "Created At", "n": "createdAt", "r": true, "sh": "The time at which the entity was created.", "t": "`$ANY`", "key$": "createdAt", "index$": 8 }, "emailedAt": { "a": true, "h": "Emailed At", "n": "emailedAt", "r": false, "sh": "The time at which an email reminder for this notification was sent to the user.", "t": "`$ANY`", "key$": "emailedAt", "index$": 9 }, "externalUserActor": { "a": true, "h": "External User Actor", "n": "externalUserActor", "r": false, "sh": "The external user that caused the notification.", "t": "`$OBJECT`", "key$": "externalUserActor", "index$": 10 }, "groupingKey": { "a": true, "h": "Grouping Key", "n": "groupingKey", "r": true, "sh": "[Internal] Notifications with the same grouping key will be grouped together in the UI.", "t": "`$STRING`", "key$": "groupingKey", "index$": 11 }, "groupingPriority": { "a": true, "h": "Grouping Priority", "n": "groupingPriority", "r": true, "sh": "[Internal] Priority of the notification with the same grouping key.", "t": "`$NUMBER`", "key$": "groupingPriority", "index$": 12 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The unique identifier of the entity.", "t": "`$STRING`", "key$": "id", "index$": 13 }, "inboxUrl": { "a": true, "h": "Inbox Url", "n": "inboxUrl", "r": true, "sh": "[Internal] Inbox URL for the notification.", "t": "`$STRING`", "key$": "inboxUrl", "index$": 14 }, "initiativeUpdateHealth": { "a": true, "h": "Initiative Update Health", "n": "initiativeUpdateHealth", "r": false, "sh": "[Internal] Initiative update health for new updates.", "t": "`$STRING`", "key$": "initiativeUpdateHealth", "index$": 15 }, "isLinearActor": { "a": true, "h": "Is Linear Actor", "n": "isLinearActor", "r": true, "sh": "[Internal] If notification actor was Linear.", "t": "`$BOOLEAN`", "key$": "isLinearActor", "index$": 16 }, "issueStatusType": { "a": true, "h": "Issue Status Type", "n": "issueStatusType", "r": false, "sh": "[Internal] Issue's status type for issue notifications.", "t": "`$STRING`", "key$": "issueStatusType", "index$": 17 }, "projectUpdateHealth": { "a": true, "h": "Project Update Health", "n": "projectUpdateHealth", "r": false, "sh": "[Internal] Project update health for new updates.", "t": "`$STRING`", "key$": "projectUpdateHealth", "index$": 18 }, "readAt": { "a": true, "h": "Read At", "n": "readAt", "r": false, "sh": "The time at which the user marked the notification as read.", "t": "`$ANY`", "key$": "readAt", "index$": 19 }, "snoozedUntilAt": { "a": true, "h": "Snoozed Until At", "n": "snoozedUntilAt", "r": false, "sh": "The time until which a notification is snoozed.", "t": "`$ANY`", "key$": "snoozedUntilAt", "index$": 20 }, "subtitle": { "a": true, "h": "Subtitle", "n": "subtitle", "r": true, "sh": "[Internal] Notification subtitle.", "t": "`$STRING`", "key$": "subtitle", "index$": 21 }, "title": { "a": true, "h": "Title", "n": "title", "r": true, "sh": "[Internal] Notification title.", "t": "`$STRING`", "key$": "title", "index$": 22 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "sh": "Notification type.", "t": "`$STRING`", "key$": "type", "index$": 23 }, "unsnoozedAt": { "a": true, "h": "Unsnoozed At", "n": "unsnoozedAt", "r": false, "sh": "The time at which a notification was unsnoozed.", "t": "`$ANY`", "key$": "unsnoozedAt", "index$": 24 }, "updatedAt": { "a": true, "h": "Updated At", "n": "updatedAt", "r": true, "sh": "The last time at which the entity was meaningfully updated.", "t": "`$ANY`", "key$": "updatedAt", "index$": 25 }, "url": { "a": true, "h": "Url", "n": "url", "r": true, "sh": "[Internal] URL to the target of the notification.", "t": "`$STRING`", "key$": "url", "index$": 26 }, "user": { "a": true, "h": "User", "n": "user", "r": false, "sh": "The recipient user of this notification.", "t": "`$OBJECT`", "key$": "user", "index$": 27 } }, "id": { "field": "id", "name": "id" }, "name": "notification", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "POST inboxNotifications", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "first", "or": "first", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "param", "n": "unread_only", "or": "unread_only", "r": false, "t": "`$BOOLEAN`", "index$": 2 }] }, "gq": { "doc": "query NotificationList($after: String, $first: Int, $unreadOnly: Boolean) { inboxNotifications(after: $after, first: $first, unreadOnly: $unreadOnly) { nodes { ...NotificationFields } pageInfo { endCursor hasNextPage } } } fragment NotificationFields on Notification { actor { id } actorAvatarColor actorAvatarUrl actorInactive actorInitials archivedAt botActor { id } category createdAt emailedAt externalUserActor { id } groupingKey groupingPriority id inboxUrl initiativeUpdateHealth isLinearActor issueStatusType projectUpdateHealth readAt snoozedUntilAt subtitle title type unsnoozedAt updatedAt url user { id } }", "field": "inboxNotifications", "optype": "query", "page": { "cursor": "pageInfo.endCursor", "more": "pageInfo.hasNextPage", "nodes": "nodes", "style": "relay" }, "vars": [{ "from": "after", "gqltype": "String", "name": "after" }, { "from": "first", "gqltype": "Int", "name": "first" }, { "from": "unreadOnly", "gqltype": "Boolean", "name": "unreadOnly" }] }, "k": "graphql", "m": "POST", "o": "inboxNotifications", "q": {}, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.inboxNotifications.nodes`" }, "index$": 0 }, { "a": true, "co": { "id": "POST notifications", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "before", "or": "before", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "first", "or": "first", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "param", "n": "include_archived", "or": "include_archived", "r": false, "t": "`$BOOLEAN`", "index$": 3 }, { "a": true, "k": "param", "n": "last", "or": "last", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "param", "n": "order_by", "or": "order_by", "r": false, "t": "`$ANY`", "index$": 5 }] }, "gq": { "doc": "query NotificationList($after: String, $before: String, $filter: NotificationFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { notifications(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...NotificationFields } pageInfo { endCursor hasNextPage } } } fragment NotificationFields on Notification { actor { id } actorAvatarColor actorAvatarUrl actorInactive actorInitials archivedAt botActor { id } category createdAt emailedAt externalUserActor { id } groupingKey groupingPriority id inboxUrl initiativeUpdateHealth isLinearActor issueStatusType projectUpdateHealth readAt snoozedUntilAt subtitle title type unsnoozedAt updatedAt url user { id } }", "field": "notifications", "optype": "query", "page": { "cursor": "pageInfo.endCursor", "more": "pageInfo.hasNextPage", "nodes": "nodes", "style": "relay" }, "vars": [{ "from": "after", "gqltype": "String", "name": "after" }, { "from": "before", "gqltype": "String", "name": "before" }, { "from": "", "gqltype": "NotificationFilter", "name": "filter" }, { "from": "first", "gqltype": "Int", "name": "first" }, { "from": "includeArchived", "gqltype": "Boolean", "name": "includeArchived" }, { "from": "last", "gqltype": "Int", "name": "last" }, { "from": "orderBy", "gqltype": "PaginationOrderBy", "name": "orderBy" }] }, "k": "graphql", "m": "POST", "o": "notifications", "q": {}, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.notifications.nodes`" }, "index$": 1 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "POST notification", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "query NotificationLoad($id: String!) { notification(id: $id) { ...NotificationFields } } fragment NotificationFields on Notification { actor { id } actorAvatarColor actorAvatarUrl actorInactive actorInitials archivedAt botActor { id } category createdAt emailedAt externalUserActor { id } groupingKey groupingPriority id inboxUrl initiativeUpdateHealth isLinearActor issueStatusType projectUpdateHealth readAt snoozedUntilAt subtitle title type unsnoozedAt updatedAt url user { id } }", "field": "notification", "optype": "query", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "notification", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.notification`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "notification", "name__orig": "notification", "Name": "Notification", "name_": "notification", "name-": "notification", "NAME": "NOTIFICATION", "index$": 48 }, { "active": true, "entity": "notification", "key$": "BasicNotificationFlow", "kind": "basic", "name": "BasicNotificationFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "notification_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "notification_ref01", "srcdatavar": "notification_ref01_data", "suffix": "_dt0" }, "m": { "id": "notification01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-notification_ref01" } }], "index$": 1 }] }, 'Notification', { "POST inboxNotifications": { "protocol": "graphql" }, "POST notifications": { "protocol": "graphql" }, "POST notification": { "protocol": "graphql" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let notification_ref01_data = Object.values(setup.data.existing.notification)[0];
        // LIST
        const notification_ref01_ent = client.Notification();
        const notification_ref01_match = {};
        notification_ref01_match['after'] = setup.idmap['after01'];
        notification_ref01_match['before'] = setup.idmap['before01'];
        notification_ref01_match['first'] = setup.idmap['first01'];
        notification_ref01_match['include_archived'] = setup.idmap['include_archived01'];
        notification_ref01_match['last'] = setup.idmap['last01'];
        notification_ref01_match['order_by'] = setup.idmap['order_by01'];
        const notification_ref01_list = (await notification_ref01_ent.list(notification_ref01_match)).map((e) => e.data());
        // LOAD
        const notification_ref01_match_dt0 = {};
        notification_ref01_match_dt0.id = notification_ref01_data.id;
        const notification_ref01_data_dt0 = (await notification_ref01_ent.load(notification_ref01_match_dt0)).data();
        (0, node_assert_1.default)(notification_ref01_data_dt0.id === notification_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/notification/NotificationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['notification01', 'notification02', 'notification03', 'after01', 'before01', 'first01', 'include_archived01', 'last01', 'order_by01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_NOTIFICATION_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_NOTIFICATION_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_NOTIFICATION_ENTID'];
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
//# sourceMappingURL=NotificationEntity.test.js.map