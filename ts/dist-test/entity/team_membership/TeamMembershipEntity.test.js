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
(0, node_test_1.describe)('TeamMembershipEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.TeamMembership();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'team_membership.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "archivedAt": { "a": true, "h": "Archived At", "n": "archivedAt", "r": false, "sh": "The time at which the entity was archived.", "t": "`$ANY`", "key$": "archivedAt", "index$": 0 }, "createdAt": { "a": true, "h": "Created At", "n": "createdAt", "r": true, "sh": "The time at which the entity was created.", "t": "`$ANY`", "key$": "createdAt", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The unique identifier of the entity.", "t": "`$STRING`", "key$": "id", "index$": 2 }, "owner": { "a": true, "h": "Owner", "n": "owner", "r": true, "sh": "Whether the user is an owner of the team.", "t": "`$BOOLEAN`", "key$": "owner", "index$": 3 }, "sortOrder": { "a": true, "h": "Sort Order", "n": "sortOrder", "r": true, "sh": "The sort order of this team in the user's personal team list.", "t": "`$NUMBER`", "key$": "sortOrder", "index$": 4 }, "team": { "a": true, "h": "Team", "n": "team", "r": false, "sh": "The team that the membership is associated with.", "t": "`$OBJECT`", "key$": "team", "index$": 5 }, "updatedAt": { "a": true, "h": "Updated At", "n": "updatedAt", "r": true, "sh": "The last time at which the entity was meaningfully updated.", "t": "`$ANY`", "key$": "updatedAt", "index$": 6 }, "user": { "a": true, "h": "User", "n": "user", "r": false, "sh": "The user that the membership is associated with.", "t": "`$OBJECT`", "key$": "user", "index$": 7 } }, "id": { "field": "id", "name": "id" }, "name": "team_membership", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST teamMembershipCreate", "source": "graphql", "version": 2 }, "g": {}, "gq": { "doc": "mutation TeamMembershipCreate($input: TeamMembershipCreateInput!) { teamMembershipCreate(input: $input) { teamMembership { ...TeamMembershipFields } success } } fragment TeamMembershipFields on TeamMembership { archivedAt createdAt id owner sortOrder team { id } updatedAt user { id } }", "field": "teamMembershipCreate", "optype": "mutation", "vars": [{ "from": "", "gqltype": "TeamMembershipCreateInput!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "teamMembershipCreate", "q": {}, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.teamMembershipCreate.teamMembership`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "POST teamMemberships", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "before", "or": "before", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "first", "or": "first", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "param", "n": "include_archived", "or": "include_archived", "r": false, "t": "`$BOOLEAN`", "index$": 3 }, { "a": true, "k": "param", "n": "last", "or": "last", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "param", "n": "order_by", "or": "order_by", "r": false, "t": "`$ANY`", "index$": 5 }] }, "gq": { "doc": "query TeamMembershipList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { teamMemberships(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...TeamMembershipFields } pageInfo { endCursor hasNextPage } } } fragment TeamMembershipFields on TeamMembership { archivedAt createdAt id owner sortOrder team { id } updatedAt user { id } }", "field": "teamMemberships", "optype": "query", "page": { "cursor": "pageInfo.endCursor", "more": "pageInfo.hasNextPage", "nodes": "nodes", "style": "relay" }, "vars": [{ "from": "after", "gqltype": "String", "name": "after" }, { "from": "before", "gqltype": "String", "name": "before" }, { "from": "first", "gqltype": "Int", "name": "first" }, { "from": "includeArchived", "gqltype": "Boolean", "name": "includeArchived" }, { "from": "last", "gqltype": "Int", "name": "last" }, { "from": "orderBy", "gqltype": "PaginationOrderBy", "name": "orderBy" }] }, "k": "graphql", "m": "POST", "o": "teamMemberships", "q": {}, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.teamMemberships.nodes`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "POST teamMembership", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "query TeamMembershipLoad($id: String!) { teamMembership(id: $id) { ...TeamMembershipFields } } fragment TeamMembershipFields on TeamMembership { archivedAt createdAt id owner sortOrder team { id } updatedAt user { id } }", "field": "teamMembership", "optype": "query", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "teamMembership", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.teamMembership`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "POST teamMembershipDelete", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "also_leave_parent_team", "or": "also_leave_parent_team", "r": false, "t": "`$BOOLEAN`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "gq": { "doc": "mutation TeamMembershipRemove($alsoLeaveParentTeams: Boolean, $id: String!) { teamMembershipDelete(alsoLeaveParentTeams: $alsoLeaveParentTeams, id: $id) { entityId lastSyncId success } }", "field": "teamMembershipDelete", "optype": "mutation", "vars": [{ "from": "alsoLeaveParentTeams", "gqltype": "Boolean", "name": "alsoLeaveParentTeams" }, { "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "teamMembershipDelete", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.teamMembershipDelete`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "POST teamMembershipUpdate", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation TeamMembershipUpdate($id: String!, $input: TeamMembershipUpdateInput!) { teamMembershipUpdate(id: $id, input: $input) { teamMembership { ...TeamMembershipFields } success } } fragment TeamMembershipFields on TeamMembership { archivedAt createdAt id owner sortOrder team { id } updatedAt user { id } }", "field": "teamMembershipUpdate", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }, { "from": "", "gqltype": "TeamMembershipUpdateInput!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "teamMembershipUpdate", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.teamMembershipUpdate.teamMembership`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "team_membership", "name__orig": "team_membership", "Name": "TeamMembership", "name_": "team_membership", "name-": "team-membership", "NAME": "TEAM_MEMBERSHIP", "index$": 75 }, { "active": true, "entity": "team_membership", "key$": "BasicTeamMembershipFlow", "kind": "basic", "name": "BasicTeamMembershipFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "team_membership_ref01" }, "m": { "after": "after01", "also_leave_parent_team": "also_leave_parent_team01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "team_membership_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "team_membership_ref01", "srcdatavar": "team_membership_ref01_data", "suffix": "_up0" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-team_membership_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "team_membership_ref01", "srcdatavar": "team_membership_ref01_data", "suffix": "_dt0" }, "m": { "id": "team_membership01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-team_membership_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "team_membership_ref01", "suffix": "_rm0" }, "m": { "also_leave_parent_team": "also_leave_parent_team01", "id": "team_membership01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "team_membership_ref01" } }], "index$": 5 }] }, 'TeamMembership', { "POST teamMembershipCreate": { "protocol": "graphql" }, "POST teamMemberships": { "protocol": "graphql" }, "POST teamMembership": { "protocol": "graphql" }, "POST teamMembershipDelete": { "protocol": "graphql" }, "POST teamMembershipUpdate": { "protocol": "graphql" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const team_membership_ref01_ent = client.TeamMembership();
        let team_membership_ref01_data = setup.data.new.team_membership['team_membership_ref01'];
        team_membership_ref01_data['after'] = setup.idmap['after01'];
        team_membership_ref01_data['also_leave_parent_team'] = setup.idmap['also_leave_parent_team01'];
        team_membership_ref01_data['before'] = setup.idmap['before01'];
        team_membership_ref01_data['first'] = setup.idmap['first01'];
        team_membership_ref01_data['include_archived'] = setup.idmap['include_archived01'];
        team_membership_ref01_data['last'] = setup.idmap['last01'];
        team_membership_ref01_data['order_by'] = setup.idmap['order_by01'];
        team_membership_ref01_data = (await team_membership_ref01_ent.create(team_membership_ref01_data)).data();
        (0, node_assert_1.default)(null != team_membership_ref01_data.id);
        // LIST
        const team_membership_ref01_match = {};
        team_membership_ref01_match['after'] = setup.idmap['after01'];
        team_membership_ref01_match['before'] = setup.idmap['before01'];
        team_membership_ref01_match['first'] = setup.idmap['first01'];
        team_membership_ref01_match['include_archived'] = setup.idmap['include_archived01'];
        team_membership_ref01_match['last'] = setup.idmap['last01'];
        team_membership_ref01_match['order_by'] = setup.idmap['order_by01'];
        const team_membership_ref01_list = (await team_membership_ref01_ent.list(team_membership_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(team_membership_ref01_list, { id: team_membership_ref01_data.id })));
        // UPDATE
        const team_membership_ref01_data_up0 = {};
        team_membership_ref01_data_up0.id = team_membership_ref01_data.id;
        const team_membership_ref01_resdata_up0 = (await team_membership_ref01_ent.update(team_membership_ref01_data_up0)).data();
        (0, node_assert_1.default)(team_membership_ref01_resdata_up0.id === team_membership_ref01_data_up0.id);
        // LOAD
        const team_membership_ref01_match_dt0 = {};
        team_membership_ref01_match_dt0.id = team_membership_ref01_data.id;
        const team_membership_ref01_data_dt0 = (await team_membership_ref01_ent.load(team_membership_ref01_match_dt0)).data();
        (0, node_assert_1.default)(team_membership_ref01_data_dt0.id === team_membership_ref01_data.id);
        // REMOVE
        const team_membership_ref01_match_rm0 = { id: team_membership_ref01_data.id };
        await team_membership_ref01_ent.remove(team_membership_ref01_match_rm0);
        // LIST
        const team_membership_ref01_match_rt0 = {};
        team_membership_ref01_match_rt0['after'] = setup.idmap['after01'];
        team_membership_ref01_match_rt0['before'] = setup.idmap['before01'];
        team_membership_ref01_match_rt0['first'] = setup.idmap['first01'];
        team_membership_ref01_match_rt0['include_archived'] = setup.idmap['include_archived01'];
        team_membership_ref01_match_rt0['last'] = setup.idmap['last01'];
        team_membership_ref01_match_rt0['order_by'] = setup.idmap['order_by01'];
        const team_membership_ref01_list_rt0 = (await team_membership_ref01_ent.list(team_membership_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(team_membership_ref01_list_rt0, { id: team_membership_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/team_membership/TeamMembershipTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['team_membership01', 'team_membership02', 'team_membership03', 'after01', 'also_leave_parent_team01', 'before01', 'first01', 'include_archived01', 'last01', 'order_by01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_TEAM_MEMBERSHIP_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_TEAM_MEMBERSHIP_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_TEAM_MEMBERSHIP_ENTID'];
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
//# sourceMappingURL=TeamMembershipEntity.test.js.map