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
(0, node_test_1.describe)('UserEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.User();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'user.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "active": { "a": true, "h": "Active", "n": "active", "r": true, "sh": "Whether the user account is active or disabled (suspended).", "t": "`$BOOLEAN`", "key$": "active", "index$": 0 }, "admin": { "a": true, "h": "Admin", "n": "admin", "r": true, "sh": "Whether the user is a workspace administrator.", "t": "`$BOOLEAN`", "key$": "admin", "index$": 1 }, "app": { "a": true, "h": "App", "n": "app", "r": true, "sh": "Whether the user is an app.", "t": "`$BOOLEAN`", "key$": "app", "index$": 2 }, "archivedAt": { "a": true, "h": "Archived At", "n": "archivedAt", "r": false, "sh": "The time at which the entity was archived.", "t": "`$ANY`", "key$": "archivedAt", "index$": 3 }, "avatarBackgroundColor": { "a": true, "h": "Avatar Background Color", "n": "avatarBackgroundColor", "r": true, "sh": "The background color of the avatar for users without set avatar.", "t": "`$STRING`", "key$": "avatarBackgroundColor", "index$": 4 }, "avatarUrl": { "a": true, "h": "Avatar Url", "n": "avatarUrl", "r": false, "sh": "An URL to the user's avatar image.", "t": "`$STRING`", "key$": "avatarUrl", "index$": 5 }, "calendarHash": { "a": true, "h": "Calendar Hash", "n": "calendarHash", "r": false, "sh": "[DEPRECATED] Hash for the user to be used in calendar URLs.", "t": "`$STRING`", "key$": "calendarHash", "index$": 6 }, "canAccessAnyPublicTeam": { "a": true, "h": "Can Access Any Public Team", "n": "canAccessAnyPublicTeam", "r": true, "sh": "Whether this user can access any public team in the workspace.", "t": "`$BOOLEAN`", "key$": "canAccessAnyPublicTeam", "index$": 7 }, "createdAt": { "a": true, "h": "Created At", "n": "createdAt", "r": true, "sh": "The time at which the entity was created.", "t": "`$ANY`", "key$": "createdAt", "index$": 8 }, "createdIssueCount": { "a": true, "h": "Created Issue Count", "n": "createdIssueCount", "r": true, "sh": "Number of issues created.", "t": "`$INTEGER`", "key$": "createdIssueCount", "index$": 9 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "A short description of the user, such as their title or a brief bio.", "t": "`$STRING`", "key$": "description", "index$": 10 }, "disableReason": { "a": true, "h": "Disable Reason", "n": "disableReason", "r": false, "sh": "The reason why the user account is disabled.", "t": "`$STRING`", "key$": "disableReason", "index$": 11 }, "displayName": { "a": true, "h": "Display Name", "n": "displayName", "r": true, "sh": "The user's display (nick) name.", "t": "`$STRING`", "key$": "displayName", "index$": 12 }, "email": { "a": true, "h": "Email", "n": "email", "r": true, "sh": "The user's email address.", "t": "`$STRING`", "key$": "email", "index$": 13 }, "gitHubUserId": { "a": true, "h": "Git Hub User Id", "n": "gitHubUserId", "r": false, "sh": "The user's GitHub user ID.", "t": "`$STRING`", "key$": "gitHubUserId", "index$": 14 }, "guest": { "a": true, "h": "Guest", "n": "guest", "r": true, "sh": "Whether the user is a guest in the workspace and limited to accessing a subset of teams.", "t": "`$BOOLEAN`", "key$": "guest", "index$": 15 }, "hasGitHubCodeAccess": { "a": true, "h": "Has Git Hub Code Access", "n": "hasGitHubCodeAccess", "r": true, "sh": "[Internal] Whether this user can access GitHub source code through Linear.", "t": "`$BOOLEAN`", "key$": "hasGitHubCodeAccess", "index$": 16 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The unique identifier of the entity.", "t": "`$STRING`", "key$": "id", "index$": 17 }, "identityProvider": { "a": true, "h": "Identity Provider", "n": "identityProvider", "r": false, "sh": "[INTERNAL] Identity provider the user is managed by.", "t": "`$OBJECT`", "key$": "identityProvider", "index$": 18 }, "initials": { "a": true, "h": "Initials", "n": "initials", "r": true, "sh": "The initials of the user.", "t": "`$STRING`", "key$": "initials", "index$": 19 }, "isAssignable": { "a": true, "h": "Is Assignable", "n": "isAssignable", "r": true, "sh": "Whether the user can be assigned to issues.", "t": "`$BOOLEAN`", "key$": "isAssignable", "index$": 20 }, "isMe": { "a": true, "h": "Is Me", "n": "isMe", "r": true, "sh": "Whether the user is the currently authenticated user.", "t": "`$BOOLEAN`", "key$": "isMe", "index$": 21 }, "isMentionable": { "a": true, "h": "Is Mentionable", "n": "isMentionable", "r": true, "sh": "Whether the user is mentionable.", "t": "`$BOOLEAN`", "key$": "isMentionable", "index$": 22 }, "lastSeen": { "a": true, "h": "Last Seen", "n": "lastSeen", "r": false, "sh": "The last time the user was seen online.", "t": "`$ANY`", "key$": "lastSeen", "index$": 23 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "The user's full name.", "t": "`$STRING`", "key$": "name", "index$": 24 }, "organization": { "a": true, "h": "Organization", "n": "organization", "r": false, "sh": "The workspace that the user belongs to.", "t": "`$OBJECT`", "key$": "organization", "index$": 25 }, "owner": { "a": true, "h": "Owner", "n": "owner", "r": true, "sh": "Whether the user is a workspace owner, which is the highest permission level.", "t": "`$BOOLEAN`", "key$": "owner", "index$": 26 }, "statusEmoji": { "a": true, "h": "Status Emoji", "n": "statusEmoji", "r": false, "sh": "The emoji representing the user's current status.", "t": "`$STRING`", "key$": "statusEmoji", "index$": 27 }, "statusLabel": { "a": true, "h": "Status Label", "n": "statusLabel", "r": false, "sh": "The text label of the user's current status.", "t": "`$STRING`", "key$": "statusLabel", "index$": 28 }, "statusUntilAt": { "a": true, "h": "Status Until At", "n": "statusUntilAt", "r": false, "sh": "The date and time at which the user's current status should be automatically cleared.", "t": "`$ANY`", "key$": "statusUntilAt", "index$": 29 }, "supportsAgentSessions": { "a": true, "h": "Supports Agent Sessions", "n": "supportsAgentSessions", "r": true, "sh": "Whether this agent user supports agent sessions.", "t": "`$BOOLEAN`", "key$": "supportsAgentSessions", "index$": 30 }, "timezone": { "a": true, "h": "Timezone", "n": "timezone", "r": false, "sh": "The local timezone of the user.", "t": "`$STRING`", "key$": "timezone", "index$": 31 }, "title": { "a": true, "h": "Title", "n": "title", "r": false, "sh": "The user's job title.", "t": "`$STRING`", "key$": "title", "index$": 32 }, "updatedAt": { "a": true, "h": "Updated At", "n": "updatedAt", "r": true, "sh": "The last time at which the entity was meaningfully updated.", "t": "`$ANY`", "key$": "updatedAt", "index$": 33 }, "url": { "a": true, "h": "Url", "n": "url", "r": true, "sh": "User's profile URL.", "t": "`$STRING`", "key$": "url", "index$": 34 } }, "id": { "field": "id", "name": "id" }, "name": "user", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST userDiscordConnect", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "code", "or": "code", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "redirect_uri", "or": "redirect_uri", "r": true, "t": "`$STRING`", "index$": 1 }] }, "gq": { "doc": "mutation UserCreateDiscordConnect($code: String!, $redirectUri: String!) { userDiscordConnect(code: $code, redirectUri: $redirectUri) { user { ...UserFields } success } } fragment UserFields on User { active admin app archivedAt avatarBackgroundColor avatarUrl calendarHash canAccessAnyPublicTeam createdAt createdIssueCount description disableReason displayName email gitHubUserId guest hasGitHubCodeAccess id identityProvider { id } initials isAssignable isMe isMentionable lastSeen name organization { id } owner statusEmoji statusLabel statusUntilAt supportsAgentSessions timezone title updatedAt url }", "field": "userDiscordConnect", "optype": "mutation", "vars": [{ "from": "code", "gqltype": "String!", "name": "code" }, { "from": "redirectUri", "gqltype": "String!", "name": "redirectUri" }] }, "k": "graphql", "m": "POST", "o": "userDiscordConnect", "q": { "$action": "discord_connect", "exist": ["code", "redirect_uri"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.userDiscordConnect.user`" }, "index$": 0 }, { "a": true, "co": { "id": "POST userExternalUserDisconnect", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "service", "or": "service", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation UserCreateExternalUserDisconnect($service: String!) { userExternalUserDisconnect(service: $service) { user { ...UserFields } success } } fragment UserFields on User { active admin app archivedAt avatarBackgroundColor avatarUrl calendarHash canAccessAnyPublicTeam createdAt createdIssueCount description disableReason displayName email gitHubUserId guest hasGitHubCodeAccess id identityProvider { id } initials isAssignable isMe isMentionable lastSeen name organization { id } owner statusEmoji statusLabel statusUntilAt supportsAgentSessions timezone title updatedAt url }", "field": "userExternalUserDisconnect", "optype": "mutation", "vars": [{ "from": "service", "gqltype": "String!", "name": "service" }] }, "k": "graphql", "m": "POST", "o": "userExternalUserDisconnect", "q": { "$action": "external_user_disconnect", "exist": ["service"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.userExternalUserDisconnect.user`" }, "index$": 1 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "POST users", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "before", "or": "before", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "first", "or": "first", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "param", "n": "include_archived", "or": "include_archived", "r": false, "t": "`$BOOLEAN`", "index$": 3 }, { "a": true, "k": "param", "n": "include_disabled", "or": "include_disabled", "r": false, "t": "`$BOOLEAN`", "index$": 4 }, { "a": true, "k": "param", "n": "last", "or": "last", "r": false, "t": "`$INTEGER`", "index$": 5 }, { "a": true, "k": "param", "n": "order_by", "or": "order_by", "r": false, "t": "`$ANY`", "index$": 6 }] }, "gq": { "doc": "query UserList($after: String, $before: String, $filter: UserFilter, $first: Int, $includeArchived: Boolean, $includeDisabled: Boolean, $last: Int, $orderBy: PaginationOrderBy, $sort: [UserSortInput!]) { users(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, includeDisabled: $includeDisabled, last: $last, orderBy: $orderBy, sort: $sort) { nodes { ...UserFields } pageInfo { endCursor hasNextPage } } } fragment UserFields on User { active admin app archivedAt avatarBackgroundColor avatarUrl calendarHash canAccessAnyPublicTeam createdAt createdIssueCount description disableReason displayName email gitHubUserId guest hasGitHubCodeAccess id identityProvider { id } initials isAssignable isMe isMentionable lastSeen name organization { id } owner statusEmoji statusLabel statusUntilAt supportsAgentSessions timezone title updatedAt url }", "field": "users", "optype": "query", "page": { "cursor": "pageInfo.endCursor", "more": "pageInfo.hasNextPage", "nodes": "nodes", "style": "relay" }, "vars": [{ "from": "after", "gqltype": "String", "name": "after" }, { "from": "before", "gqltype": "String", "name": "before" }, { "from": "filter", "gqltype": "UserFilter", "name": "filter" }, { "from": "first", "gqltype": "Int", "name": "first" }, { "from": "includeArchived", "gqltype": "Boolean", "name": "includeArchived" }, { "from": "includeDisabled", "gqltype": "Boolean", "name": "includeDisabled" }, { "from": "last", "gqltype": "Int", "name": "last" }, { "from": "orderBy", "gqltype": "PaginationOrderBy", "name": "orderBy" }, { "from": "sort", "gqltype": "[UserSortInput!]", "name": "sort" }] }, "k": "graphql", "m": "POST", "o": "users", "q": {}, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.users.nodes`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "POST user", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "query UserLoad($id: String!) { user(id: $id) { ...UserFields } } fragment UserFields on User { active admin app archivedAt avatarBackgroundColor avatarUrl calendarHash canAccessAnyPublicTeam createdAt createdIssueCount description disableReason displayName email gitHubUserId guest hasGitHubCodeAccess id identityProvider { id } initials isAssignable isMe isMentionable lastSeen name organization { id } owner statusEmoji statusLabel statusUntilAt supportsAgentSessions timezone title updatedAt url }", "field": "user", "optype": "query", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "user", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.user`" }, "index$": 0 }, { "a": true, "co": { "id": "POST viewer", "source": "graphql", "version": 2 }, "g": {}, "gq": { "doc": "query UserLoad { viewer { ...UserFields } } fragment UserFields on User { active admin app archivedAt avatarBackgroundColor avatarUrl calendarHash canAccessAnyPublicTeam createdAt createdIssueCount description disableReason displayName email gitHubUserId guest hasGitHubCodeAccess id identityProvider { id } initials isAssignable isMe isMentionable lastSeen name organization { id } owner statusEmoji statusLabel statusUntilAt supportsAgentSessions timezone title updatedAt url }", "field": "viewer", "optype": "query", "vars": [] }, "k": "graphql", "m": "POST", "o": "viewer", "q": {}, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.viewer`" }, "index$": 1 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "POST userUpdate", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation UserUpdate($id: String!, $input: UserUpdateInput!) { userUpdate(id: $id, input: $input) { user { ...UserFields } success } } fragment UserFields on User { active admin app archivedAt avatarBackgroundColor avatarUrl calendarHash canAccessAnyPublicTeam createdAt createdIssueCount description disableReason displayName email gitHubUserId guest hasGitHubCodeAccess id identityProvider { id } initials isAssignable isMe isMentionable lastSeen name organization { id } owner statusEmoji statusLabel statusUntilAt supportsAgentSessions timezone title updatedAt url }", "field": "userUpdate", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }, { "from": "", "gqltype": "UserUpdateInput!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "userUpdate", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.userUpdate.user`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "user", "name__orig": "user", "Name": "User", "name_": "user", "name-": "user", "NAME": "USER", "index$": 81 }, { "active": true, "entity": "user", "key$": "BasicUserFlow", "kind": "basic", "name": "BasicUserFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "user_ref01" }, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "include_disabled": "include_disabled01", "last": "last01", "order_by": "order_by01", "service": "service01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "include_disabled": "include_disabled01", "last": "last01", "order_by": "order_by01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "user_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "user_ref01", "srcdatavar": "user_ref01_data", "suffix": "_up0", "textfield": "avatarBackgroundColor" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-user_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "user_ref01", "srcdatavar": "user_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-user_ref01" } }], "index$": 3 }] }, 'User', { "POST userDiscordConnect": { "protocol": "graphql" }, "POST userExternalUserDisconnect": { "protocol": "graphql" }, "POST users": { "protocol": "graphql" }, "POST user": { "protocol": "graphql" }, "POST viewer": { "protocol": "graphql" }, "POST userUpdate": { "protocol": "graphql" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const user_ref01_ent = client.User();
        let user_ref01_data = setup.data.new.user['user_ref01'];
        user_ref01_data['after'] = setup.idmap['after01'];
        user_ref01_data['before'] = setup.idmap['before01'];
        user_ref01_data['first'] = setup.idmap['first01'];
        user_ref01_data['include_archived'] = setup.idmap['include_archived01'];
        user_ref01_data['include_disabled'] = setup.idmap['include_disabled01'];
        user_ref01_data['last'] = setup.idmap['last01'];
        user_ref01_data['order_by'] = setup.idmap['order_by01'];
        user_ref01_data['service'] = setup.idmap['service01'];
        user_ref01_data = (await user_ref01_ent.create(user_ref01_data)).data();
        (0, node_assert_1.default)(null != user_ref01_data.id);
        // LIST
        const user_ref01_match = {};
        user_ref01_match['after'] = setup.idmap['after01'];
        user_ref01_match['before'] = setup.idmap['before01'];
        user_ref01_match['first'] = setup.idmap['first01'];
        user_ref01_match['include_archived'] = setup.idmap['include_archived01'];
        user_ref01_match['include_disabled'] = setup.idmap['include_disabled01'];
        user_ref01_match['last'] = setup.idmap['last01'];
        user_ref01_match['order_by'] = setup.idmap['order_by01'];
        const user_ref01_list = (await user_ref01_ent.list(user_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(user_ref01_list, { id: user_ref01_data.id })));
        // UPDATE
        const user_ref01_data_up0 = {};
        user_ref01_data_up0.id = user_ref01_data.id;
        const user_ref01_markdef_up0 = { name: 'avatarBackgroundColor', value: 'Mark01-user_ref01_' + setup.now };
        user_ref01_data_up0[user_ref01_markdef_up0.name] = user_ref01_markdef_up0.value;
        const user_ref01_resdata_up0 = (await user_ref01_ent.update(user_ref01_data_up0)).data();
        (0, node_assert_1.default)(user_ref01_resdata_up0.id === user_ref01_data_up0.id);
        (0, node_assert_1.default)(user_ref01_resdata_up0[user_ref01_markdef_up0.name] === user_ref01_markdef_up0.value);
        // LOAD
        const user_ref01_match_dt0 = {};
        user_ref01_match_dt0.id = user_ref01_data.id;
        const user_ref01_data_dt0 = (await user_ref01_ent.load(user_ref01_match_dt0)).data();
        (0, node_assert_1.default)(user_ref01_data_dt0.id === user_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/user/UserTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['user01', 'user02', 'user03', 'after01', 'before01', 'first01', 'include_archived01', 'include_disabled01', 'last01', 'order_by01', 'service01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_USER_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_USER_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_USER_ENTID'];
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
//# sourceMappingURL=UserEntity.test.js.map