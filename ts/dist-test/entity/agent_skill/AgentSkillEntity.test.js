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
(0, node_test_1.describe)('AgentSkillEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.AgentSkill();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'agent_skill.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "archivedAt": { "a": true, "h": "Archived At", "n": "archivedAt", "r": false, "sh": "The time at which the entity was archived.", "t": "`$ANY`", "key$": "archivedAt", "index$": 0 }, "body": { "a": true, "h": "Body", "n": "body", "r": true, "sh": "The skill instructions in markdown format.", "t": "`$STRING`", "key$": "body", "index$": 1 }, "color": { "a": true, "h": "Color", "n": "color", "r": false, "sh": "The skill's color.", "t": "`$STRING`", "key$": "color", "index$": 2 }, "createdAt": { "a": true, "h": "Created At", "n": "createdAt", "r": true, "sh": "The time at which the entity was created.", "t": "`$ANY`", "key$": "createdAt", "index$": 3 }, "creator": { "a": true, "h": "Creator", "n": "creator", "r": false, "sh": "The user who created the skill.", "t": "`$OBJECT`", "key$": "creator", "index$": 4 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "The skill's description.", "t": "`$STRING`", "key$": "description", "index$": 5 }, "icon": { "a": true, "h": "Icon", "n": "icon", "r": false, "sh": "The icon of the skill.", "t": "`$STRING`", "key$": "icon", "index$": 6 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The unique identifier of the entity.", "t": "`$STRING`", "key$": "id", "index$": 7 }, "inheritedFrom": { "a": true, "h": "Inherited From", "n": "inheritedFrom", "r": false, "sh": "The parent-team skill this skill was inherited from.", "t": "`$OBJECT`", "key$": "inheritedFrom", "index$": 8 }, "lastUpdatedBy": { "a": true, "h": "Last Updated By", "n": "lastUpdatedBy", "r": false, "sh": "The user who last updated the skill.", "t": "`$OBJECT`", "key$": "lastUpdatedBy", "index$": 9 }, "lastUsedAt": { "a": true, "h": "Last Used At", "n": "lastUsedAt", "r": false, "sh": "The time the skill was last used by anyone in the workspace.", "t": "`$ANY`", "key$": "lastUsedAt", "index$": 10 }, "owner": { "a": true, "h": "Owner", "n": "owner", "r": false, "sh": "The user who owns the skill.", "t": "`$OBJECT`", "key$": "owner", "index$": 11 }, "recentUsageCount": { "a": true, "h": "Recent Usage Count", "n": "recentUsageCount", "r": true, "sh": "The number of times the skill was used by anyone in the workspace in the last 30 days.", "t": "`$NUMBER`", "key$": "recentUsageCount", "index$": 12 }, "shared": { "a": true, "h": "Shared", "n": "shared", "r": true, "sh": "Whether the skill is shared with everyone in the workspace.", "t": "`$BOOLEAN`", "key$": "shared", "index$": 13 }, "slugId": { "a": true, "h": "Slug Id", "n": "slugId", "r": true, "sh": "The skill's unique URL slug.", "t": "`$STRING`", "key$": "slugId", "index$": 14 }, "teamId": { "a": true, "h": "Team Id", "n": "teamId", "r": false, "sh": "The identifier of the team this skill is shared with.", "t": "`$STRING`", "key$": "teamId", "index$": 15 }, "title": { "a": true, "h": "Title", "n": "title", "r": true, "sh": "The skill's title.", "t": "`$STRING`", "key$": "title", "index$": 16 }, "updatedAt": { "a": true, "h": "Updated At", "n": "updatedAt", "r": true, "sh": "The last time at which the entity was meaningfully updated.", "t": "`$ANY`", "key$": "updatedAt", "index$": 17 } }, "id": { "field": "id", "name": "id" }, "name": "agent_skill", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST agentSkillCreate", "source": "graphql", "version": 2 }, "g": {}, "gq": { "doc": "mutation AgentSkillCreate($input: AgentSkillCreateInput!) { agentSkillCreate(input: $input) { agentSkill { ...AgentSkillFields } success } } fragment AgentSkillFields on AgentSkill { archivedAt body color createdAt creator { id } description icon id inheritedFrom { id } lastUpdatedBy { id } lastUsedAt owner { id } recentUsageCount shared slugId teamId title updatedAt }", "field": "agentSkillCreate", "optype": "mutation", "vars": [{ "from": "", "gqltype": "AgentSkillCreateInput!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "agentSkillCreate", "q": {}, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.agentSkillCreate.agentSkill`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "POST agentSkills", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "before", "or": "before", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "first", "or": "first", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "param", "n": "include_archived", "or": "include_archived", "r": false, "t": "`$BOOLEAN`", "index$": 3 }, { "a": true, "k": "param", "n": "last", "or": "last", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "param", "n": "order_by", "or": "order_by", "r": false, "t": "`$ANY`", "index$": 5 }] }, "gq": { "doc": "query AgentSkillList($after: String, $before: String, $filter: AgentSkillFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { agentSkills(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...AgentSkillFields } pageInfo { endCursor hasNextPage } } } fragment AgentSkillFields on AgentSkill { archivedAt body color createdAt creator { id } description icon id inheritedFrom { id } lastUpdatedBy { id } lastUsedAt owner { id } recentUsageCount shared slugId teamId title updatedAt }", "field": "agentSkills", "optype": "query", "page": { "cursor": "pageInfo.endCursor", "more": "pageInfo.hasNextPage", "nodes": "nodes", "style": "relay" }, "vars": [{ "from": "after", "gqltype": "String", "name": "after" }, { "from": "before", "gqltype": "String", "name": "before" }, { "from": "", "gqltype": "AgentSkillFilter", "name": "filter" }, { "from": "first", "gqltype": "Int", "name": "first" }, { "from": "includeArchived", "gqltype": "Boolean", "name": "includeArchived" }, { "from": "last", "gqltype": "Int", "name": "last" }, { "from": "orderBy", "gqltype": "PaginationOrderBy", "name": "orderBy" }] }, "k": "graphql", "m": "POST", "o": "agentSkills", "q": {}, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.agentSkills.nodes`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "POST agentSkill", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "query AgentSkillLoad($id: String!) { agentSkill(id: $id) { ...AgentSkillFields } } fragment AgentSkillFields on AgentSkill { archivedAt body color createdAt creator { id } description icon id inheritedFrom { id } lastUpdatedBy { id } lastUsedAt owner { id } recentUsageCount shared slugId teamId title updatedAt }", "field": "agentSkill", "optype": "query", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "agentSkill", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.agentSkill`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "POST agentSkillDelete", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation AgentSkillRemove($id: String!) { agentSkillDelete(id: $id) { entityId lastSyncId success } }", "field": "agentSkillDelete", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "agentSkillDelete", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.agentSkillDelete`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "POST agentSkillUpdate", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation AgentSkillUpdate($id: String!, $input: AgentSkillUpdateInput!) { agentSkillUpdate(id: $id, input: $input) { agentSkill { ...AgentSkillFields } success } } fragment AgentSkillFields on AgentSkill { archivedAt body color createdAt creator { id } description icon id inheritedFrom { id } lastUpdatedBy { id } lastUsedAt owner { id } recentUsageCount shared slugId teamId title updatedAt }", "field": "agentSkillUpdate", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }, { "from": "", "gqltype": "AgentSkillUpdateInput!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "agentSkillUpdate", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.agentSkillUpdate.agentSkill`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "agent_skill", "name__orig": "agent_skill", "Name": "AgentSkill", "name_": "agent_skill", "name-": "agent-skill", "NAME": "AGENT_SKILL", "index$": 4 }, { "active": true, "entity": "agent_skill", "key$": "BasicAgentSkillFlow", "kind": "basic", "name": "BasicAgentSkillFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "agent_skill_ref01" }, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "agent_skill_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "agent_skill_ref01", "srcdatavar": "agent_skill_ref01_data", "suffix": "_up0", "textfield": "body" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-agent_skill_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "agent_skill_ref01", "srcdatavar": "agent_skill_ref01_data", "suffix": "_dt0" }, "m": { "id": "agent_skill01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-agent_skill_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "agent_skill_ref01", "suffix": "_rm0" }, "m": { "id": "agent_skill01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "agent_skill_ref01" } }], "index$": 5 }] }, 'AgentSkill', { "POST agentSkillCreate": { "protocol": "graphql" }, "POST agentSkills": { "protocol": "graphql" }, "POST agentSkill": { "protocol": "graphql" }, "POST agentSkillDelete": { "protocol": "graphql" }, "POST agentSkillUpdate": { "protocol": "graphql" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const agent_skill_ref01_ent = client.AgentSkill();
        let agent_skill_ref01_data = setup.data.new.agent_skill['agent_skill_ref01'];
        agent_skill_ref01_data['after'] = setup.idmap['after01'];
        agent_skill_ref01_data['before'] = setup.idmap['before01'];
        agent_skill_ref01_data['first'] = setup.idmap['first01'];
        agent_skill_ref01_data['include_archived'] = setup.idmap['include_archived01'];
        agent_skill_ref01_data['last'] = setup.idmap['last01'];
        agent_skill_ref01_data['order_by'] = setup.idmap['order_by01'];
        agent_skill_ref01_data = (await agent_skill_ref01_ent.create(agent_skill_ref01_data)).data();
        (0, node_assert_1.default)(null != agent_skill_ref01_data.id);
        // LIST
        const agent_skill_ref01_match = {};
        agent_skill_ref01_match['after'] = setup.idmap['after01'];
        agent_skill_ref01_match['before'] = setup.idmap['before01'];
        agent_skill_ref01_match['first'] = setup.idmap['first01'];
        agent_skill_ref01_match['include_archived'] = setup.idmap['include_archived01'];
        agent_skill_ref01_match['last'] = setup.idmap['last01'];
        agent_skill_ref01_match['order_by'] = setup.idmap['order_by01'];
        const agent_skill_ref01_list = (await agent_skill_ref01_ent.list(agent_skill_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(agent_skill_ref01_list, { id: agent_skill_ref01_data.id })));
        // UPDATE
        const agent_skill_ref01_data_up0 = {};
        agent_skill_ref01_data_up0.id = agent_skill_ref01_data.id;
        const agent_skill_ref01_markdef_up0 = { name: 'body', value: 'Mark01-agent_skill_ref01_' + setup.now };
        agent_skill_ref01_data_up0[agent_skill_ref01_markdef_up0.name] = agent_skill_ref01_markdef_up0.value;
        const agent_skill_ref01_resdata_up0 = (await agent_skill_ref01_ent.update(agent_skill_ref01_data_up0)).data();
        (0, node_assert_1.default)(agent_skill_ref01_resdata_up0.id === agent_skill_ref01_data_up0.id);
        (0, node_assert_1.default)(agent_skill_ref01_resdata_up0[agent_skill_ref01_markdef_up0.name] === agent_skill_ref01_markdef_up0.value);
        // LOAD
        const agent_skill_ref01_match_dt0 = {};
        agent_skill_ref01_match_dt0.id = agent_skill_ref01_data.id;
        const agent_skill_ref01_data_dt0 = (await agent_skill_ref01_ent.load(agent_skill_ref01_match_dt0)).data();
        (0, node_assert_1.default)(agent_skill_ref01_data_dt0.id === agent_skill_ref01_data.id);
        // REMOVE
        const agent_skill_ref01_match_rm0 = { id: agent_skill_ref01_data.id };
        await agent_skill_ref01_ent.remove(agent_skill_ref01_match_rm0);
        // LIST
        const agent_skill_ref01_match_rt0 = {};
        agent_skill_ref01_match_rt0['after'] = setup.idmap['after01'];
        agent_skill_ref01_match_rt0['before'] = setup.idmap['before01'];
        agent_skill_ref01_match_rt0['first'] = setup.idmap['first01'];
        agent_skill_ref01_match_rt0['include_archived'] = setup.idmap['include_archived01'];
        agent_skill_ref01_match_rt0['last'] = setup.idmap['last01'];
        agent_skill_ref01_match_rt0['order_by'] = setup.idmap['order_by01'];
        const agent_skill_ref01_list_rt0 = (await agent_skill_ref01_ent.list(agent_skill_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(agent_skill_ref01_list_rt0, { id: agent_skill_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/agent_skill/AgentSkillTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['agent_skill01', 'agent_skill02', 'agent_skill03', 'after01', 'before01', 'first01', 'include_archived01', 'last01', 'order_by01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_AGENT_SKILL_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_AGENT_SKILL_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_AGENT_SKILL_ENTID'];
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
//# sourceMappingURL=AgentSkillEntity.test.js.map