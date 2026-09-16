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
(0, node_test_1.describe)('IssueEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.Issue();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'issue.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "archivedAt", "req": false, "type": "`$ANY`", "index$": 0 }, { "active": true, "name": "assignee", "req": false, "type": "`$OBJECT`", "index$": 1 }, { "active": true, "name": "branchName", "req": true, "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "canceledAt", "req": false, "type": "`$ANY`", "index$": 3 }, { "active": true, "name": "completedAt", "req": false, "type": "`$ANY`", "index$": 4 }, { "active": true, "name": "createdAt", "req": true, "type": "`$ANY`", "index$": 5 }, { "active": true, "name": "creator", "req": false, "type": "`$OBJECT`", "index$": 6 }, { "active": true, "name": "description", "req": false, "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "dueDate", "req": false, "type": "`$ANY`", "index$": 8 }, { "active": true, "name": "estimate", "req": false, "type": "`$NUMBER`", "index$": 9 }, { "active": true, "name": "id", "req": true, "type": "`$STRING`", "index$": 10 }, { "active": true, "name": "identifier", "req": true, "type": "`$STRING`", "index$": 11 }, { "active": true, "name": "number", "req": true, "type": "`$NUMBER`", "index$": 12 }, { "active": true, "name": "priority", "req": true, "type": "`$NUMBER`", "index$": 13 }, { "active": true, "name": "state", "req": false, "type": "`$OBJECT`", "index$": 14 }, { "active": true, "name": "team", "req": false, "type": "`$OBJECT`", "index$": 15 }, { "active": true, "name": "title", "req": true, "type": "`$STRING`", "index$": 16 }, { "active": true, "name": "updatedAt", "req": true, "type": "`$ANY`", "index$": 17 }, { "active": true, "name": "url", "req": true, "type": "`$STRING`", "index$": 18 }], "id": { "field": "id", "name": "id" }, "name": "issue", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": {}, "contract": { "id": "POST issueCreate", "json": "{\"field\":{\"args\":[{\"gqltype\":\"IssueCreateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"IssueCreateInput\"}],\"deprecated\":false,\"gqltype\":\"IssuePayload!\",\"list\":false,\"name\":\"issueCreate\",\"reqd\":true,\"type\":\"IssuePayload\"},\"invocation\":{\"doc\":\"mutation IssueCreate($input: IssueCreateInput!) { issueCreate(input: $input) { issue { ...IssueFields } success } } fragment IssueFields on Issue { archivedAt assignee { id } branchName canceledAt completedAt createdAt creator { id } description dueDate estimate id identifier number priority state { id } team { id } title updatedAt url }\",\"field\":\"issueCreate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"\",\"gqltype\":\"IssueCreateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"Int\":{\"desc\":\"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Int\"},\"IssueCreateInput\":{\"fields\":{\"assigneeId\":{\"args\":[],\"deprecated\":false,\"gqltype\":\"String\",\"list\":false,\"name\":\"assigneeId\",\"reqd\":false,\"type\":\"String\"},\"description\":{\"args\":[],\"deprecated\":false,\"gqltype\":\"String\",\"list\":false,\"name\":\"description\",\"reqd\":false,\"type\":\"String\"},\"priority\":{\"args\":[],\"deprecated\":false,\"gqltype\":\"Int\",\"list\":false,\"name\":\"priority\",\"reqd\":false,\"type\":\"Int\"},\"stateId\":{\"args\":[],\"deprecated\":false,\"gqltype\":\"String\",\"list\":false,\"name\":\"stateId\",\"reqd\":false,\"type\":\"String\"},\"teamId\":{\"args\":[],\"deprecated\":false,\"gqltype\":\"String!\",\"list\":false,\"name\":\"teamId\",\"reqd\":true,\"type\":\"String\"},\"title\":{\"args\":[],\"deprecated\":false,\"gqltype\":\"String\",\"list\":false,\"name\":\"title\",\"reqd\":false,\"type\":\"String\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"IssueCreateInput\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "mutation IssueCreate($input: IssueCreateInput!) { issueCreate(input: $input) { issue { ...IssueFields } success } } fragment IssueFields on Issue { archivedAt assignee { id } branchName canceledAt completedAt createdAt creator { id } description dueDate estimate id identifier number priority state { id } team { id } title updatedAt url }", "field": "issueCreate", "optype": "mutation", "vars": [{ "from": "", "gqltype": "IssueCreateInput!", "name": "input" }] }, "kind": "graphql", "method": "POST", "orig": "issueCreate", "segments": [], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.data.issueCreate.issue`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "after", "orig": "after", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "first", "orig": "first", "reqd": false, "type": "`$INTEGER`", "index$": 1 }] }, "contract": { "id": "POST issues", "json": "{\"field\":{\"args\":[{\"gqltype\":\"Int\",\"name\":\"first\",\"reqd\":false,\"type\":\"Int\"},{\"gqltype\":\"String\",\"name\":\"after\",\"reqd\":false,\"type\":\"String\"}],\"deprecated\":false,\"gqltype\":\"IssueConnection!\",\"list\":false,\"name\":\"issues\",\"reqd\":true,\"type\":\"IssueConnection\"},\"invocation\":{\"doc\":\"query IssueList($first: Int, $after: String) { issues(first: $first, after: $after) { edges { node { ...IssueFields } } pageInfo { endCursor hasNextPage } } } fragment IssueFields on Issue { archivedAt assignee { id } branchName canceledAt completedAt createdAt creator { id } description dueDate estimate id identifier number priority state { id } team { id } title updatedAt url }\",\"field\":\"issues\",\"optype\":\"query\",\"page\":{\"cursor\":\"pageInfo.endCursor\",\"more\":\"pageInfo.hasNextPage\",\"nodes\":\"edges\",\"style\":\"relay\"},\"vars\":[{\"from\":\"first\",\"gqltype\":\"Int\",\"name\":\"first\"},{\"from\":\"after\",\"gqltype\":\"String\",\"name\":\"after\"}]},\"protocol\":\"graphql\",\"types\":{\"Int\":{\"desc\":\"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Int\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "query IssueList($first: Int, $after: String) { issues(first: $first, after: $after) { edges { node { ...IssueFields } } pageInfo { endCursor hasNextPage } } } fragment IssueFields on Issue { archivedAt assignee { id } branchName canceledAt completedAt createdAt creator { id } description dueDate estimate id identifier number priority state { id } team { id } title updatedAt url }", "field": "issues", "optype": "query", "page": { "cursor": "pageInfo.endCursor", "more": "pageInfo.hasNextPage", "nodes": "edges", "style": "relay" }, "vars": [{ "from": "first", "gqltype": "Int", "name": "first" }, { "from": "after", "gqltype": "String", "name": "after" }] }, "kind": "graphql", "method": "POST", "orig": "issues", "segments": [], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.data.issues.edges`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST issue", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"gqltype\":\"Issue\",\"list\":false,\"name\":\"issue\",\"reqd\":false,\"type\":\"Issue\"},\"invocation\":{\"doc\":\"query IssueLoad($id: String!) { issue(id: $id) { ...IssueFields } } fragment IssueFields on Issue { archivedAt assignee { id } branchName canceledAt completedAt createdAt creator { id } description dueDate estimate id identifier number priority state { id } team { id } title updatedAt url }\",\"field\":\"issue\",\"optype\":\"query\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "query IssueLoad($id: String!) { issue(id: $id) { ...IssueFields } } fragment IssueFields on Issue { archivedAt assignee { id } branchName canceledAt completedAt createdAt creator { id } description dueDate estimate id identifier number priority state { id } team { id } title updatedAt url }", "field": "issue", "optype": "query", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "kind": "graphql", "method": "POST", "orig": "issue", "segments": [], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.data.issue`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST issueUpdate", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"},{\"gqltype\":\"IssueUpdateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"IssueUpdateInput\"}],\"deprecated\":false,\"gqltype\":\"IssuePayload!\",\"list\":false,\"name\":\"issueUpdate\",\"reqd\":true,\"type\":\"IssuePayload\"},\"invocation\":{\"doc\":\"mutation IssueUpdate($id: String!, $input: IssueUpdateInput!) { issueUpdate(id: $id, input: $input) { issue { ...IssueFields } success } } fragment IssueFields on Issue { archivedAt assignee { id } branchName canceledAt completedAt createdAt creator { id } description dueDate estimate id identifier number priority state { id } team { id } title updatedAt url }\",\"field\":\"issueUpdate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"},{\"from\":\"\",\"gqltype\":\"IssueUpdateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"Int\":{\"desc\":\"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Int\"},\"IssueUpdateInput\":{\"fields\":{\"assigneeId\":{\"args\":[],\"deprecated\":false,\"gqltype\":\"String\",\"list\":false,\"name\":\"assigneeId\",\"reqd\":false,\"type\":\"String\"},\"description\":{\"args\":[],\"deprecated\":false,\"gqltype\":\"String\",\"list\":false,\"name\":\"description\",\"reqd\":false,\"type\":\"String\"},\"priority\":{\"args\":[],\"deprecated\":false,\"gqltype\":\"Int\",\"list\":false,\"name\":\"priority\",\"reqd\":false,\"type\":\"Int\"},\"stateId\":{\"args\":[],\"deprecated\":false,\"gqltype\":\"String\",\"list\":false,\"name\":\"stateId\",\"reqd\":false,\"type\":\"String\"},\"teamId\":{\"args\":[],\"deprecated\":false,\"gqltype\":\"String\",\"list\":false,\"name\":\"teamId\",\"reqd\":false,\"type\":\"String\"},\"title\":{\"args\":[],\"deprecated\":false,\"gqltype\":\"String\",\"list\":false,\"name\":\"title\",\"reqd\":false,\"type\":\"String\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"IssueUpdateInput\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "mutation IssueUpdate($id: String!, $input: IssueUpdateInput!) { issueUpdate(id: $id, input: $input) { issue { ...IssueFields } success } } fragment IssueFields on Issue { archivedAt assignee { id } branchName canceledAt completedAt createdAt creator { id } description dueDate estimate id identifier number priority state { id } team { id } title updatedAt url }", "field": "issueUpdate", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }, { "from": "", "gqltype": "IssueUpdateInput!", "name": "input" }] }, "kind": "graphql", "method": "POST", "orig": "issueUpdate", "segments": [], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.data.issueUpdate.issue`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "issue", "name__orig": "issue", "Name": "Issue", "name_": "issue", "name-": "issue", "NAME": "ISSUE", "index$": 0 }, { "active": true, "entity": "issue", "key$": "BasicIssueFlow", "kind": "basic", "name": "BasicIssueFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "issue_ref01" }, "match": { "after": "after01", "first": "first01" }, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": {}, "match": { "after": "after01", "first": "first01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "issue_ref01" } }], "index$": 1 }, { "active": true, "data": {}, "input": { "ref": "issue_ref01", "srcdatavar": "issue_ref01_data", "suffix": "_up0", "textfield": "branchName" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-issue_ref01" } }], "valid": [], "index$": 2 }, { "active": true, "data": {}, "input": { "ref": "issue_ref01", "srcdatavar": "issue_ref01_data", "suffix": "_dt0" }, "match": { "id": "issue01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-issue_ref01" } }], "index$": 3 }] }, 'Issue');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const issue_ref01_ent = client.Issue();
        let issue_ref01_data = setup.data.new.issue['issue_ref01'];
        issue_ref01_data['after'] = setup.idmap['after01'];
        issue_ref01_data['first'] = setup.idmap['first01'];
        issue_ref01_data = (await issue_ref01_ent.create(issue_ref01_data)).data();
        (0, node_assert_1.default)(null != issue_ref01_data.id);
        // LIST
        const issue_ref01_match = {};
        issue_ref01_match['after'] = setup.idmap['after01'];
        issue_ref01_match['first'] = setup.idmap['first01'];
        const issue_ref01_list = (await issue_ref01_ent.list(issue_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(issue_ref01_list, { id: issue_ref01_data.id })));
        // UPDATE
        const issue_ref01_data_up0 = {};
        issue_ref01_data_up0.id = issue_ref01_data.id;
        const issue_ref01_markdef_up0 = { name: 'branchName', value: 'Mark01-issue_ref01_' + setup.now };
        issue_ref01_data_up0[issue_ref01_markdef_up0.name] = issue_ref01_markdef_up0.value;
        const issue_ref01_resdata_up0 = (await issue_ref01_ent.update(issue_ref01_data_up0)).data();
        (0, node_assert_1.default)(issue_ref01_resdata_up0.id === issue_ref01_data_up0.id);
        (0, node_assert_1.default)(issue_ref01_resdata_up0[issue_ref01_markdef_up0.name] === issue_ref01_markdef_up0.value);
        // LOAD
        const issue_ref01_match_dt0 = {};
        issue_ref01_match_dt0.id = issue_ref01_data.id;
        const issue_ref01_data_dt0 = (await issue_ref01_ent.load(issue_ref01_match_dt0)).data();
        (0, node_assert_1.default)(issue_ref01_data_dt0.id === issue_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/issue/IssueTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['issue01', 'issue02', 'issue03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_ISSUE_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_ISSUE_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_ISSUE_ENTID'];
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
//# sourceMappingURL=IssueEntity.test.js.map