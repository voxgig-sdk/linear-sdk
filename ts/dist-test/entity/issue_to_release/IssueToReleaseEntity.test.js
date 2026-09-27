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
(0, node_test_1.describe)('IssueToReleaseEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.IssueToRelease();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['create', 'list', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'issue_to_release.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "archivedAt": { "a": true, "h": "Archived At", "n": "archivedAt", "r": false, "sh": "The time at which the entity was archived.", "t": "`$ANY`", "key$": "archivedAt", "index$": 0 }, "createdAt": { "a": true, "h": "Created At", "n": "createdAt", "r": true, "sh": "The time at which the entity was created.", "t": "`$ANY`", "key$": "createdAt", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The unique identifier of the entity.", "t": "`$STRING`", "key$": "id", "index$": 2 }, "issue": { "a": true, "h": "Issue", "n": "issue", "r": false, "sh": "The issue that is linked to the release.", "t": "`$OBJECT`", "key$": "issue", "index$": 3 }, "release": { "a": true, "h": "Release", "n": "release", "r": false, "sh": "The release that the issue is linked to.", "t": "`$OBJECT`", "key$": "release", "index$": 4 }, "updatedAt": { "a": true, "h": "Updated At", "n": "updatedAt", "r": true, "sh": "The last time at which the entity was meaningfully updated.", "t": "`$ANY`", "key$": "updatedAt", "index$": 5 } }, "id": { "field": "id", "name": "id" }, "name": "issue_to_release", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST issueToReleaseCreate", "source": "graphql", "version": 2 }, "g": {}, "gq": { "doc": "mutation IssueToReleaseCreate($input: IssueToReleaseCreateInput!) { issueToReleaseCreate(input: $input) { issueToRelease { ...IssueToReleaseFields } success } } fragment IssueToReleaseFields on IssueToRelease { archivedAt createdAt id issue { id } release { id } updatedAt }", "field": "issueToReleaseCreate", "optype": "mutation", "vars": [{ "from": "", "gqltype": "IssueToReleaseCreateInput!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "issueToReleaseCreate", "q": {}, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.issueToReleaseCreate.issueToRelease`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "POST issueToReleases", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "before", "or": "before", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "first", "or": "first", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "param", "n": "include_archived", "or": "include_archived", "r": false, "t": "`$BOOLEAN`", "index$": 3 }, { "a": true, "k": "param", "n": "last", "or": "last", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "param", "n": "order_by", "or": "order_by", "r": false, "t": "`$ANY`", "index$": 5 }] }, "gq": { "doc": "query IssueToReleaseList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { issueToReleases(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...IssueToReleaseFields } pageInfo { endCursor hasNextPage } } } fragment IssueToReleaseFields on IssueToRelease { archivedAt createdAt id issue { id } release { id } updatedAt }", "field": "issueToReleases", "optype": "query", "page": { "cursor": "pageInfo.endCursor", "more": "pageInfo.hasNextPage", "nodes": "nodes", "style": "relay" }, "vars": [{ "from": "after", "gqltype": "String", "name": "after" }, { "from": "before", "gqltype": "String", "name": "before" }, { "from": "first", "gqltype": "Int", "name": "first" }, { "from": "includeArchived", "gqltype": "Boolean", "name": "includeArchived" }, { "from": "last", "gqltype": "Int", "name": "last" }, { "from": "orderBy", "gqltype": "PaginationOrderBy", "name": "orderBy" }] }, "k": "graphql", "m": "POST", "o": "issueToReleases", "q": {}, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.issueToReleases.nodes`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "POST issueToRelease", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "query IssueToReleaseLoad($id: String!) { issueToRelease(id: $id) { ...IssueToReleaseFields } } fragment IssueToReleaseFields on IssueToRelease { archivedAt createdAt id issue { id } release { id } updatedAt }", "field": "issueToRelease", "optype": "query", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "issueToRelease", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.issueToRelease`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "POST issueToReleaseDelete", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation IssueToReleaseRemove($id: String!) { issueToReleaseDelete(id: $id) { entityId lastSyncId success } }", "field": "issueToReleaseDelete", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "issueToReleaseDelete", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.issueToReleaseDelete`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [] }, "key$": "issue_to_release", "name__orig": "issue_to_release", "Name": "IssueToRelease", "name_": "issue_to_release", "name-": "issue-to-release", "NAME": "ISSUE_TO_RELEASE", "index$": 46 }, { "active": true, "entity": "issue_to_release", "key$": "BasicIssueToReleaseFlow", "kind": "basic", "name": "BasicIssueToReleaseFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "issue_to_release_ref01" }, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "issue_to_release_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "issue_to_release_ref01", "srcdatavar": "issue_to_release_ref01_data", "suffix": "_dt0" }, "m": { "id": "issue_to_release01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-issue_to_release_ref01" } }], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "issue_to_release_ref01", "suffix": "_rm0" }, "m": { "id": "issue_to_release01" }, "o": "remove", "s": [], "v": [], "index$": 3 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "issue_to_release_ref01" } }], "index$": 4 }] }, 'IssueToRelease', { "POST issueToReleaseCreate": { "protocol": "graphql" }, "POST issueToReleases": { "protocol": "graphql" }, "POST issueToRelease": { "protocol": "graphql" }, "POST issueToReleaseDelete": { "protocol": "graphql" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const issue_to_release_ref01_ent = client.IssueToRelease();
        let issue_to_release_ref01_data = setup.data.new.issue_to_release['issue_to_release_ref01'];
        issue_to_release_ref01_data['after'] = setup.idmap['after01'];
        issue_to_release_ref01_data['before'] = setup.idmap['before01'];
        issue_to_release_ref01_data['first'] = setup.idmap['first01'];
        issue_to_release_ref01_data['include_archived'] = setup.idmap['include_archived01'];
        issue_to_release_ref01_data['last'] = setup.idmap['last01'];
        issue_to_release_ref01_data['order_by'] = setup.idmap['order_by01'];
        issue_to_release_ref01_data = (await issue_to_release_ref01_ent.create(issue_to_release_ref01_data)).data();
        (0, node_assert_1.default)(null != issue_to_release_ref01_data.id);
        // LIST
        const issue_to_release_ref01_match = {};
        issue_to_release_ref01_match['after'] = setup.idmap['after01'];
        issue_to_release_ref01_match['before'] = setup.idmap['before01'];
        issue_to_release_ref01_match['first'] = setup.idmap['first01'];
        issue_to_release_ref01_match['include_archived'] = setup.idmap['include_archived01'];
        issue_to_release_ref01_match['last'] = setup.idmap['last01'];
        issue_to_release_ref01_match['order_by'] = setup.idmap['order_by01'];
        const issue_to_release_ref01_list = (await issue_to_release_ref01_ent.list(issue_to_release_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(issue_to_release_ref01_list, { id: issue_to_release_ref01_data.id })));
        // LOAD
        const issue_to_release_ref01_match_dt0 = {};
        issue_to_release_ref01_match_dt0.id = issue_to_release_ref01_data.id;
        const issue_to_release_ref01_data_dt0 = (await issue_to_release_ref01_ent.load(issue_to_release_ref01_match_dt0)).data();
        (0, node_assert_1.default)(issue_to_release_ref01_data_dt0.id === issue_to_release_ref01_data.id);
        // REMOVE
        const issue_to_release_ref01_match_rm0 = { id: issue_to_release_ref01_data.id };
        await issue_to_release_ref01_ent.remove(issue_to_release_ref01_match_rm0);
        // LIST
        const issue_to_release_ref01_match_rt0 = {};
        issue_to_release_ref01_match_rt0['after'] = setup.idmap['after01'];
        issue_to_release_ref01_match_rt0['before'] = setup.idmap['before01'];
        issue_to_release_ref01_match_rt0['first'] = setup.idmap['first01'];
        issue_to_release_ref01_match_rt0['include_archived'] = setup.idmap['include_archived01'];
        issue_to_release_ref01_match_rt0['last'] = setup.idmap['last01'];
        issue_to_release_ref01_match_rt0['order_by'] = setup.idmap['order_by01'];
        const issue_to_release_ref01_list_rt0 = (await issue_to_release_ref01_ent.list(issue_to_release_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(issue_to_release_ref01_list_rt0, { id: issue_to_release_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/issue_to_release/IssueToReleaseTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['issue_to_release01', 'issue_to_release02', 'issue_to_release03', 'after01', 'before01', 'first01', 'include_archived01', 'last01', 'order_by01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_ISSUE_TO_RELEASE_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_ISSUE_TO_RELEASE_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_ISSUE_TO_RELEASE_ENTID'];
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
//# sourceMappingURL=IssueToReleaseEntity.test.js.map