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
(0, node_test_1.describe)('InitiativeRelationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.InitiativeRelation();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'initiative_relation.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "archivedAt": { "a": true, "h": "Archived At", "n": "archivedAt", "r": false, "sh": "The time at which the entity was archived.", "t": "`$ANY`", "key$": "archivedAt", "index$": 0 }, "createdAt": { "a": true, "h": "Created At", "n": "createdAt", "r": true, "sh": "The time at which the entity was created.", "t": "`$ANY`", "key$": "createdAt", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The unique identifier of the entity.", "t": "`$STRING`", "key$": "id", "index$": 2 }, "initiative": { "a": true, "h": "Initiative", "n": "initiative", "r": false, "sh": "The parent initiative in this hierarchical relation.", "t": "`$OBJECT`", "key$": "initiative", "index$": 3 }, "relatedInitiative": { "a": true, "h": "Related Initiative", "n": "relatedInitiative", "r": false, "sh": "The child initiative in this hierarchical relation.", "t": "`$OBJECT`", "key$": "relatedInitiative", "index$": 4 }, "sortOrder": { "a": true, "h": "Sort Order", "n": "sortOrder", "r": true, "sh": "The sort order of the child initiative within its parent initiative.", "t": "`$NUMBER`", "key$": "sortOrder", "index$": 5 }, "updatedAt": { "a": true, "h": "Updated At", "n": "updatedAt", "r": true, "sh": "The last time at which the entity was meaningfully updated.", "t": "`$ANY`", "key$": "updatedAt", "index$": 6 }, "user": { "a": true, "h": "User", "n": "user", "r": false, "sh": "The user who last created or modified the relation.", "t": "`$OBJECT`", "key$": "user", "index$": 7 } }, "id": { "field": "id", "name": "id" }, "name": "initiative_relation", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST initiativeRelationCreate", "source": "graphql", "version": 2 }, "g": {}, "gq": { "doc": "mutation InitiativeRelationCreate($input: InitiativeRelationCreateInput!) { initiativeRelationCreate(input: $input) { initiativeRelation { ...InitiativeRelationFields } success } } fragment InitiativeRelationFields on InitiativeRelation { archivedAt createdAt id initiative { id } relatedInitiative { id } sortOrder updatedAt user { id } }", "field": "initiativeRelationCreate", "optype": "mutation", "vars": [{ "from": "", "gqltype": "InitiativeRelationCreateInput!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "initiativeRelationCreate", "q": {}, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.initiativeRelationCreate.initiativeRelation`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "POST initiativeRelations", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "before", "or": "before", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "first", "or": "first", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "param", "n": "include_archived", "or": "include_archived", "r": false, "t": "`$BOOLEAN`", "index$": 3 }, { "a": true, "k": "param", "n": "last", "or": "last", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "param", "n": "order_by", "or": "order_by", "r": false, "t": "`$ANY`", "index$": 5 }] }, "gq": { "doc": "query InitiativeRelationList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { initiativeRelations(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...InitiativeRelationFields } pageInfo { endCursor hasNextPage } } } fragment InitiativeRelationFields on InitiativeRelation { archivedAt createdAt id initiative { id } relatedInitiative { id } sortOrder updatedAt user { id } }", "field": "initiativeRelations", "optype": "query", "page": { "cursor": "pageInfo.endCursor", "more": "pageInfo.hasNextPage", "nodes": "nodes", "style": "relay" }, "vars": [{ "from": "after", "gqltype": "String", "name": "after" }, { "from": "before", "gqltype": "String", "name": "before" }, { "from": "first", "gqltype": "Int", "name": "first" }, { "from": "includeArchived", "gqltype": "Boolean", "name": "includeArchived" }, { "from": "last", "gqltype": "Int", "name": "last" }, { "from": "orderBy", "gqltype": "PaginationOrderBy", "name": "orderBy" }] }, "k": "graphql", "m": "POST", "o": "initiativeRelations", "q": {}, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.initiativeRelations.nodes`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "POST initiativeRelation", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "query InitiativeRelationLoad($id: String!) { initiativeRelation(id: $id) { ...InitiativeRelationFields } } fragment InitiativeRelationFields on InitiativeRelation { archivedAt createdAt id initiative { id } relatedInitiative { id } sortOrder updatedAt user { id } }", "field": "initiativeRelation", "optype": "query", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "initiativeRelation", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.initiativeRelation`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "POST initiativeRelationDelete", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation InitiativeRelationRemove($id: String!) { initiativeRelationDelete(id: $id) { entityId lastSyncId success } }", "field": "initiativeRelationDelete", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "initiativeRelationDelete", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.initiativeRelationDelete`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "POST initiativeRelationUpdate", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation InitiativeRelationUpdate($id: String!, $input: InitiativeRelationUpdateInput!) { initiativeRelationUpdate(id: $id, input: $input) { initiativeRelation { ...InitiativeRelationFields } success } } fragment InitiativeRelationFields on InitiativeRelation { archivedAt createdAt id initiative { id } relatedInitiative { id } sortOrder updatedAt user { id } }", "field": "initiativeRelationUpdate", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }, { "from": "", "gqltype": "InitiativeRelationUpdateInput!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "initiativeRelationUpdate", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.initiativeRelationUpdate.initiativeRelation`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "initiative_relation", "name__orig": "initiative_relation", "Name": "InitiativeRelation", "name_": "initiative_relation", "name-": "initiative-relation", "NAME": "INITIATIVE_RELATION", "index$": 34 }, { "active": true, "entity": "initiative_relation", "key$": "BasicInitiativeRelationFlow", "kind": "basic", "name": "BasicInitiativeRelationFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "initiative_relation_ref01" }, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "initiative_relation_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "initiative_relation_ref01", "srcdatavar": "initiative_relation_ref01_data", "suffix": "_up0" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-initiative_relation_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "initiative_relation_ref01", "srcdatavar": "initiative_relation_ref01_data", "suffix": "_dt0" }, "m": { "id": "initiative_relation01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-initiative_relation_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "initiative_relation_ref01", "suffix": "_rm0" }, "m": { "id": "initiative_relation01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "initiative_relation_ref01" } }], "index$": 5 }] }, 'InitiativeRelation', { "POST initiativeRelationCreate": { "protocol": "graphql" }, "POST initiativeRelations": { "protocol": "graphql" }, "POST initiativeRelation": { "protocol": "graphql" }, "POST initiativeRelationDelete": { "protocol": "graphql" }, "POST initiativeRelationUpdate": { "protocol": "graphql" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const initiative_relation_ref01_ent = client.InitiativeRelation();
        let initiative_relation_ref01_data = setup.data.new.initiative_relation['initiative_relation_ref01'];
        initiative_relation_ref01_data['after'] = setup.idmap['after01'];
        initiative_relation_ref01_data['before'] = setup.idmap['before01'];
        initiative_relation_ref01_data['first'] = setup.idmap['first01'];
        initiative_relation_ref01_data['include_archived'] = setup.idmap['include_archived01'];
        initiative_relation_ref01_data['last'] = setup.idmap['last01'];
        initiative_relation_ref01_data['order_by'] = setup.idmap['order_by01'];
        initiative_relation_ref01_data = (await initiative_relation_ref01_ent.create(initiative_relation_ref01_data)).data();
        (0, node_assert_1.default)(null != initiative_relation_ref01_data.id);
        // LIST
        const initiative_relation_ref01_match = {};
        initiative_relation_ref01_match['after'] = setup.idmap['after01'];
        initiative_relation_ref01_match['before'] = setup.idmap['before01'];
        initiative_relation_ref01_match['first'] = setup.idmap['first01'];
        initiative_relation_ref01_match['include_archived'] = setup.idmap['include_archived01'];
        initiative_relation_ref01_match['last'] = setup.idmap['last01'];
        initiative_relation_ref01_match['order_by'] = setup.idmap['order_by01'];
        const initiative_relation_ref01_list = (await initiative_relation_ref01_ent.list(initiative_relation_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(initiative_relation_ref01_list, { id: initiative_relation_ref01_data.id })));
        // UPDATE
        const initiative_relation_ref01_data_up0 = {};
        initiative_relation_ref01_data_up0.id = initiative_relation_ref01_data.id;
        const initiative_relation_ref01_resdata_up0 = (await initiative_relation_ref01_ent.update(initiative_relation_ref01_data_up0)).data();
        (0, node_assert_1.default)(initiative_relation_ref01_resdata_up0.id === initiative_relation_ref01_data_up0.id);
        // LOAD
        const initiative_relation_ref01_match_dt0 = {};
        initiative_relation_ref01_match_dt0.id = initiative_relation_ref01_data.id;
        const initiative_relation_ref01_data_dt0 = (await initiative_relation_ref01_ent.load(initiative_relation_ref01_match_dt0)).data();
        (0, node_assert_1.default)(initiative_relation_ref01_data_dt0.id === initiative_relation_ref01_data.id);
        // REMOVE
        const initiative_relation_ref01_match_rm0 = { id: initiative_relation_ref01_data.id };
        await initiative_relation_ref01_ent.remove(initiative_relation_ref01_match_rm0);
        // LIST
        const initiative_relation_ref01_match_rt0 = {};
        initiative_relation_ref01_match_rt0['after'] = setup.idmap['after01'];
        initiative_relation_ref01_match_rt0['before'] = setup.idmap['before01'];
        initiative_relation_ref01_match_rt0['first'] = setup.idmap['first01'];
        initiative_relation_ref01_match_rt0['include_archived'] = setup.idmap['include_archived01'];
        initiative_relation_ref01_match_rt0['last'] = setup.idmap['last01'];
        initiative_relation_ref01_match_rt0['order_by'] = setup.idmap['order_by01'];
        const initiative_relation_ref01_list_rt0 = (await initiative_relation_ref01_ent.list(initiative_relation_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(initiative_relation_ref01_list_rt0, { id: initiative_relation_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/initiative_relation/InitiativeRelationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['initiative_relation01', 'initiative_relation02', 'initiative_relation03', 'after01', 'before01', 'first01', 'include_archived01', 'last01', 'order_by01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_INITIATIVE_RELATION_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_INITIATIVE_RELATION_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_INITIATIVE_RELATION_ENTID'];
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
//# sourceMappingURL=InitiativeRelationEntity.test.js.map