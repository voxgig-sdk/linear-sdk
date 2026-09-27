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
(0, node_test_1.describe)('UserSettingEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.UserSetting();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['create', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'user_setting.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "archivedAt": { "a": true, "h": "Archived At", "n": "archivedAt", "r": false, "sh": "The time at which the entity was archived.", "t": "`$ANY`", "key$": "archivedAt", "index$": 0 }, "autoAssignToSelf": { "a": true, "h": "Auto Assign To Self", "n": "autoAssignToSelf", "r": true, "sh": "Whether to auto-assign newly created issues to the current user by default.", "t": "`$BOOLEAN`", "key$": "autoAssignToSelf", "index$": 1 }, "calendarHash": { "a": true, "h": "Calendar Hash", "n": "calendarHash", "r": false, "sh": "A unique hash for the user, used to construct secure calendar subscription URLs.", "t": "`$STRING`", "key$": "calendarHash", "index$": 2 }, "createdAt": { "a": true, "h": "Created At", "n": "createdAt", "r": true, "sh": "The time at which the entity was created.", "t": "`$ANY`", "key$": "createdAt", "index$": 3 }, "feedLastSeenTime": { "a": true, "h": "Feed Last Seen Time", "n": "feedLastSeenTime", "r": false, "sh": "The user's last seen time for the pulse feed.", "t": "`$ANY`", "key$": "feedLastSeenTime", "index$": 4 }, "feedSummarySchedule": { "a": true, "h": "Feed Summary Schedule", "n": "feedSummarySchedule", "r": false, "sh": "The user's preferred schedule for receiving feed summary digests.", "t": "`$STRING`", "key$": "feedSummarySchedule", "index$": 5 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The unique identifier of the entity.", "t": "`$STRING`", "key$": "id", "index$": 6 }, "pullRequestMergeStrategyPreference": { "a": true, "h": "Pull Request Merge Strategy Preference", "n": "pullRequestMergeStrategyPreference", "r": false, "sh": "[Internal] The user's preferred merge method for pull requests.", "t": "`$STRING`", "key$": "pullRequestMergeStrategyPreference", "index$": 7 }, "showFullUserNames": { "a": true, "h": "Show Full User Names", "n": "showFullUserNames", "r": true, "sh": "Whether to show full user names instead of display names.", "t": "`$BOOLEAN`", "key$": "showFullUserNames", "index$": 8 }, "subscribedToChangelog": { "a": true, "h": "Subscribed To Changelog", "n": "subscribedToChangelog", "r": true, "sh": "Whether this user is subscribed to receive changelog emails about Linear product updates.", "t": "`$BOOLEAN`", "key$": "subscribedToChangelog", "index$": 9 }, "subscribedToDPA": { "a": true, "h": "Subscribed To Dpa", "n": "subscribedToDPA", "r": true, "sh": "Whether this user is subscribed to receive Data Processing Agreement (DPA) related emails.", "t": "`$BOOLEAN`", "key$": "subscribedToDPA", "index$": 10 }, "subscribedToInviteAccepted": { "a": true, "h": "Subscribed To Invite Accepted", "n": "subscribedToInviteAccepted", "r": true, "sh": "Whether this user is subscribed to receive email notifications when their workspace invitations are accepted.", "t": "`$BOOLEAN`", "key$": "subscribedToInviteAccepted", "index$": 11 }, "subscribedToPrivacyLegalUpdates": { "a": true, "h": "Subscribed To Privacy Legal Updates", "n": "subscribedToPrivacyLegalUpdates", "r": true, "sh": "Whether this user is subscribed to receive emails about privacy policy and legal updates.", "t": "`$BOOLEAN`", "key$": "subscribedToPrivacyLegalUpdates", "index$": 12 }, "updatedAt": { "a": true, "h": "Updated At", "n": "updatedAt", "r": true, "sh": "The last time at which the entity was meaningfully updated.", "t": "`$ANY`", "key$": "updatedAt", "index$": 13 }, "user": { "a": true, "h": "User", "n": "user", "r": false, "sh": "The user that these settings belong to.", "t": "`$OBJECT`", "key$": "user", "index$": 14 } }, "id": { "field": "id", "name": "id" }, "name": "user_setting", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST notificationCategoryChannelSubscriptionUpdate", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "category", "or": "category", "r": true, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "param", "n": "channel", "or": "channel", "r": true, "t": "`$ANY`", "index$": 1 }, { "a": true, "k": "param", "n": "subscribe", "or": "subscribe", "r": true, "t": "`$BOOLEAN`", "index$": 2 }] }, "gq": { "doc": "mutation UserSettingCreateNotificationCategoryChannelSubscriptionUpdate($category: NotificationCategory!, $channel: NotificationChannel!, $subscribe: Boolean!) { notificationCategoryChannelSubscriptionUpdate(category: $category, channel: $channel, subscribe: $subscribe) { userSettings { ...UserSettingFields } success } } fragment UserSettingFields on UserSettings { archivedAt autoAssignToSelf calendarHash createdAt feedLastSeenTime feedSummarySchedule id pullRequestMergeStrategyPreference showFullUserNames subscribedToChangelog subscribedToDPA subscribedToInviteAccepted subscribedToPrivacyLegalUpdates updatedAt user { id } }", "field": "notificationCategoryChannelSubscriptionUpdate", "optype": "mutation", "vars": [{ "from": "category", "gqltype": "NotificationCategory!", "name": "category" }, { "from": "channel", "gqltype": "NotificationChannel!", "name": "channel" }, { "from": "subscribe", "gqltype": "Boolean!", "name": "subscribe" }] }, "k": "graphql", "m": "POST", "o": "notificationCategoryChannelSubscriptionUpdate", "q": { "$action": "notification_category_channel_subscription_update", "exist": ["category", "channel", "subscribe"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.notificationCategoryChannelSubscriptionUpdate.userSettings`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "POST userSettings", "source": "graphql", "version": 2 }, "g": {}, "gq": { "doc": "query UserSettingLoad { userSettings { ...UserSettingFields } } fragment UserSettingFields on UserSettings { archivedAt autoAssignToSelf calendarHash createdAt feedLastSeenTime feedSummarySchedule id pullRequestMergeStrategyPreference showFullUserNames subscribedToChangelog subscribedToDPA subscribedToInviteAccepted subscribedToPrivacyLegalUpdates updatedAt user { id } }", "field": "userSettings", "optype": "query", "vars": [] }, "k": "graphql", "m": "POST", "o": "userSettings", "q": {}, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.userSettings`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "POST userSettingsUpdate", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation UserSettingUpdate($id: String!, $input: UserSettingsUpdateInput!) { userSettingsUpdate(id: $id, input: $input) { userSettings { ...UserSettingFields } success } } fragment UserSettingFields on UserSettings { archivedAt autoAssignToSelf calendarHash createdAt feedLastSeenTime feedSummarySchedule id pullRequestMergeStrategyPreference showFullUserNames subscribedToChangelog subscribedToDPA subscribedToInviteAccepted subscribedToPrivacyLegalUpdates updatedAt user { id } }", "field": "userSettingsUpdate", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }, { "from": "", "gqltype": "UserSettingsUpdateInput!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "userSettingsUpdate", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.userSettingsUpdate.userSettings`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "user_setting", "name__orig": "user_setting", "Name": "UserSetting", "name_": "user_setting", "name-": "user-setting", "NAME": "USER_SETTING", "index$": 82 }, { "active": true, "entity": "user_setting", "key$": "BasicUserSettingFlow", "kind": "basic", "name": "BasicUserSettingFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "user_setting_ref01" }, "m": { "category": "category01", "channel": "channel01", "subscribe": "subscribe01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "user_setting_ref01", "srcdatavar": "user_setting_ref01_data", "suffix": "_up0", "textfield": "calendarHash" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-user_setting_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "user_setting_ref01", "srcdatavar": "user_setting_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-user_setting_ref01" } }], "index$": 2 }] }, 'UserSetting', { "POST notificationCategoryChannelSubscriptionUpdate": { "protocol": "graphql" }, "POST userSettings": { "protocol": "graphql" }, "POST userSettingsUpdate": { "protocol": "graphql" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const user_setting_ref01_ent = client.UserSetting();
        let user_setting_ref01_data = setup.data.new.user_setting['user_setting_ref01'];
        user_setting_ref01_data['category'] = setup.idmap['category01'];
        user_setting_ref01_data['channel'] = setup.idmap['channel01'];
        user_setting_ref01_data['subscribe'] = setup.idmap['subscribe01'];
        user_setting_ref01_data = (await user_setting_ref01_ent.create(user_setting_ref01_data)).data();
        (0, node_assert_1.default)(null != user_setting_ref01_data.id);
        // UPDATE
        const user_setting_ref01_data_up0 = {};
        user_setting_ref01_data_up0.id = user_setting_ref01_data.id;
        const user_setting_ref01_markdef_up0 = { name: 'calendarHash', value: 'Mark01-user_setting_ref01_' + setup.now };
        user_setting_ref01_data_up0[user_setting_ref01_markdef_up0.name] = user_setting_ref01_markdef_up0.value;
        const user_setting_ref01_resdata_up0 = (await user_setting_ref01_ent.update(user_setting_ref01_data_up0)).data();
        (0, node_assert_1.default)(user_setting_ref01_resdata_up0.id === user_setting_ref01_data_up0.id);
        (0, node_assert_1.default)(user_setting_ref01_resdata_up0[user_setting_ref01_markdef_up0.name] === user_setting_ref01_markdef_up0.value);
        // LOAD
        const user_setting_ref01_match_dt0 = {};
        user_setting_ref01_match_dt0.id = user_setting_ref01_data.id;
        const user_setting_ref01_data_dt0 = (await user_setting_ref01_ent.load(user_setting_ref01_match_dt0)).data();
        (0, node_assert_1.default)(user_setting_ref01_data_dt0.id === user_setting_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/user_setting/UserSettingTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['user_setting01', 'user_setting02', 'user_setting03', 'category01', 'channel01', 'subscribe01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_USER_SETTING_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_USER_SETTING_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_USER_SETTING_ENTID'];
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
//# sourceMappingURL=UserSettingEntity.test.js.map