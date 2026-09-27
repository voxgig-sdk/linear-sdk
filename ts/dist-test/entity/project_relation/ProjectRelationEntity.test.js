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
(0, node_test_1.describe)('ProjectRelationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.ProjectRelation();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'project_relation.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "anchorType": { "a": true, "h": "Anchor Type", "n": "anchorType", "r": true, "sh": "The type of anchor on the source project end of the relation, indicating whether it is anchored to the project itself or a specific milestone.", "t": "`$STRING`", "key$": "anchorType", "index$": 0 }, "archivedAt": { "a": true, "h": "Archived At", "n": "archivedAt", "r": false, "sh": "The time at which the entity was archived.", "t": "`$ANY`", "key$": "archivedAt", "index$": 1 }, "createdAt": { "a": true, "h": "Created At", "n": "createdAt", "r": true, "sh": "The time at which the entity was created.", "t": "`$ANY`", "key$": "createdAt", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The unique identifier of the entity.", "t": "`$STRING`", "key$": "id", "index$": 3 }, "project": { "a": true, "h": "Project", "n": "project", "r": false, "sh": "The source project in the dependency relation.", "t": "`$OBJECT`", "key$": "project", "index$": 4 }, "projectMilestone": { "a": true, "h": "Project Milestone", "n": "projectMilestone", "r": false, "sh": "The specific milestone within the source project that the relation is anchored to.", "t": "`$OBJECT`", "key$": "projectMilestone", "index$": 5 }, "relatedAnchorType": { "a": true, "h": "Related Anchor Type", "n": "relatedAnchorType", "r": true, "sh": "The type of anchor on the target project end of the relation, indicating whether it is anchored to the project itself or a specific milestone.", "t": "`$STRING`", "key$": "relatedAnchorType", "index$": 6 }, "relatedProject": { "a": true, "h": "Related Project", "n": "relatedProject", "r": false, "sh": "The target project in the dependency relation.", "t": "`$OBJECT`", "key$": "relatedProject", "index$": 7 }, "relatedProjectMilestone": { "a": true, "h": "Related Project Milestone", "n": "relatedProjectMilestone", "r": false, "sh": "The specific milestone within the target project that the relation is anchored to.", "t": "`$OBJECT`", "key$": "relatedProjectMilestone", "index$": 8 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "sh": "The type of dependency relationship from the project to the related project (e.g., blocks).", "t": "`$STRING`", "key$": "type", "index$": 9 }, "updatedAt": { "a": true, "h": "Updated At", "n": "updatedAt", "r": true, "sh": "The last time at which the entity was meaningfully updated.", "t": "`$ANY`", "key$": "updatedAt", "index$": 10 }, "user": { "a": true, "h": "User", "n": "user", "r": false, "sh": "The user who last created or modified the relation.", "t": "`$OBJECT`", "key$": "user", "index$": 11 } }, "id": { "field": "id", "name": "id" }, "name": "project_relation", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST projectRelationCreate", "source": "graphql", "version": 2 }, "g": {}, "gq": { "doc": "mutation ProjectRelationCreate($input: ProjectRelationCreateInput!) { projectRelationCreate(input: $input) { projectRelation { ...ProjectRelationFields } success } } fragment ProjectRelationFields on ProjectRelation { anchorType archivedAt createdAt id project { id } projectMilestone { id } relatedAnchorType relatedProject { id } relatedProjectMilestone { id } type updatedAt user { id } }", "field": "projectRelationCreate", "optype": "mutation", "vars": [{ "from": "", "gqltype": "ProjectRelationCreateInput!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "projectRelationCreate", "q": {}, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.projectRelationCreate.projectRelation`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "POST projectRelations", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "before", "or": "before", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "first", "or": "first", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "param", "n": "include_archived", "or": "include_archived", "r": false, "t": "`$BOOLEAN`", "index$": 3 }, { "a": true, "k": "param", "n": "last", "or": "last", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "param", "n": "order_by", "or": "order_by", "r": false, "t": "`$ANY`", "index$": 5 }] }, "gq": { "doc": "query ProjectRelationList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { projectRelations(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...ProjectRelationFields } pageInfo { endCursor hasNextPage } } } fragment ProjectRelationFields on ProjectRelation { anchorType archivedAt createdAt id project { id } projectMilestone { id } relatedAnchorType relatedProject { id } relatedProjectMilestone { id } type updatedAt user { id } }", "field": "projectRelations", "optype": "query", "page": { "cursor": "pageInfo.endCursor", "more": "pageInfo.hasNextPage", "nodes": "nodes", "style": "relay" }, "vars": [{ "from": "after", "gqltype": "String", "name": "after" }, { "from": "before", "gqltype": "String", "name": "before" }, { "from": "first", "gqltype": "Int", "name": "first" }, { "from": "includeArchived", "gqltype": "Boolean", "name": "includeArchived" }, { "from": "last", "gqltype": "Int", "name": "last" }, { "from": "orderBy", "gqltype": "PaginationOrderBy", "name": "orderBy" }] }, "k": "graphql", "m": "POST", "o": "projectRelations", "q": {}, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.projectRelations.nodes`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "POST projectRelation", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "query ProjectRelationLoad($id: String!) { projectRelation(id: $id) { ...ProjectRelationFields } } fragment ProjectRelationFields on ProjectRelation { anchorType archivedAt createdAt id project { id } projectMilestone { id } relatedAnchorType relatedProject { id } relatedProjectMilestone { id } type updatedAt user { id } }", "field": "projectRelation", "optype": "query", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "projectRelation", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.projectRelation`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "POST projectRelationDelete", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation ProjectRelationRemove($id: String!) { projectRelationDelete(id: $id) { entityId lastSyncId success } }", "field": "projectRelationDelete", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "projectRelationDelete", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.projectRelationDelete`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "POST projectRelationUpdate", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation ProjectRelationUpdate($id: String!, $input: ProjectRelationUpdateInput!) { projectRelationUpdate(id: $id, input: $input) { projectRelation { ...ProjectRelationFields } success } } fragment ProjectRelationFields on ProjectRelation { anchorType archivedAt createdAt id project { id } projectMilestone { id } relatedAnchorType relatedProject { id } relatedProjectMilestone { id } type updatedAt user { id } }", "field": "projectRelationUpdate", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }, { "from": "", "gqltype": "ProjectRelationUpdateInput!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "projectRelationUpdate", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.projectRelationUpdate.projectRelation`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "project_relation", "name__orig": "project_relation", "Name": "ProjectRelation", "name_": "project_relation", "name-": "project-relation", "NAME": "PROJECT_RELATION", "index$": 60 }, { "active": true, "entity": "project_relation", "key$": "BasicProjectRelationFlow", "kind": "basic", "name": "BasicProjectRelationFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "project_relation_ref01" }, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "project_relation_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "project_relation_ref01", "srcdatavar": "project_relation_ref01_data", "suffix": "_up0", "textfield": "anchorType" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-project_relation_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "project_relation_ref01", "srcdatavar": "project_relation_ref01_data", "suffix": "_dt0" }, "m": { "id": "project_relation01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-project_relation_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "project_relation_ref01", "suffix": "_rm0" }, "m": { "id": "project_relation01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "project_relation_ref01" } }], "index$": 5 }] }, 'ProjectRelation', { "POST projectRelationCreate": { "protocol": "graphql" }, "POST projectRelations": { "protocol": "graphql" }, "POST projectRelation": { "protocol": "graphql" }, "POST projectRelationDelete": { "protocol": "graphql" }, "POST projectRelationUpdate": { "protocol": "graphql" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const project_relation_ref01_ent = client.ProjectRelation();
        let project_relation_ref01_data = setup.data.new.project_relation['project_relation_ref01'];
        project_relation_ref01_data['after'] = setup.idmap['after01'];
        project_relation_ref01_data['before'] = setup.idmap['before01'];
        project_relation_ref01_data['first'] = setup.idmap['first01'];
        project_relation_ref01_data['include_archived'] = setup.idmap['include_archived01'];
        project_relation_ref01_data['last'] = setup.idmap['last01'];
        project_relation_ref01_data['order_by'] = setup.idmap['order_by01'];
        project_relation_ref01_data = (await project_relation_ref01_ent.create(project_relation_ref01_data)).data();
        (0, node_assert_1.default)(null != project_relation_ref01_data.id);
        // LIST
        const project_relation_ref01_match = {};
        project_relation_ref01_match['after'] = setup.idmap['after01'];
        project_relation_ref01_match['before'] = setup.idmap['before01'];
        project_relation_ref01_match['first'] = setup.idmap['first01'];
        project_relation_ref01_match['include_archived'] = setup.idmap['include_archived01'];
        project_relation_ref01_match['last'] = setup.idmap['last01'];
        project_relation_ref01_match['order_by'] = setup.idmap['order_by01'];
        const project_relation_ref01_list = (await project_relation_ref01_ent.list(project_relation_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(project_relation_ref01_list, { id: project_relation_ref01_data.id })));
        // UPDATE
        const project_relation_ref01_data_up0 = {};
        project_relation_ref01_data_up0.id = project_relation_ref01_data.id;
        const project_relation_ref01_markdef_up0 = { name: 'anchorType', value: 'Mark01-project_relation_ref01_' + setup.now };
        project_relation_ref01_data_up0[project_relation_ref01_markdef_up0.name] = project_relation_ref01_markdef_up0.value;
        const project_relation_ref01_resdata_up0 = (await project_relation_ref01_ent.update(project_relation_ref01_data_up0)).data();
        (0, node_assert_1.default)(project_relation_ref01_resdata_up0.id === project_relation_ref01_data_up0.id);
        (0, node_assert_1.default)(project_relation_ref01_resdata_up0[project_relation_ref01_markdef_up0.name] === project_relation_ref01_markdef_up0.value);
        // LOAD
        const project_relation_ref01_match_dt0 = {};
        project_relation_ref01_match_dt0.id = project_relation_ref01_data.id;
        const project_relation_ref01_data_dt0 = (await project_relation_ref01_ent.load(project_relation_ref01_match_dt0)).data();
        (0, node_assert_1.default)(project_relation_ref01_data_dt0.id === project_relation_ref01_data.id);
        // REMOVE
        const project_relation_ref01_match_rm0 = { id: project_relation_ref01_data.id };
        await project_relation_ref01_ent.remove(project_relation_ref01_match_rm0);
        // LIST
        const project_relation_ref01_match_rt0 = {};
        project_relation_ref01_match_rt0['after'] = setup.idmap['after01'];
        project_relation_ref01_match_rt0['before'] = setup.idmap['before01'];
        project_relation_ref01_match_rt0['first'] = setup.idmap['first01'];
        project_relation_ref01_match_rt0['include_archived'] = setup.idmap['include_archived01'];
        project_relation_ref01_match_rt0['last'] = setup.idmap['last01'];
        project_relation_ref01_match_rt0['order_by'] = setup.idmap['order_by01'];
        const project_relation_ref01_list_rt0 = (await project_relation_ref01_ent.list(project_relation_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(project_relation_ref01_list_rt0, { id: project_relation_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/project_relation/ProjectRelationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['project_relation01', 'project_relation02', 'project_relation03', 'after01', 'before01', 'first01', 'include_archived01', 'last01', 'order_by01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_PROJECT_RELATION_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_PROJECT_RELATION_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_PROJECT_RELATION_ENTID'];
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
//# sourceMappingURL=ProjectRelationEntity.test.js.map