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
(0, node_test_1.describe)('ReleasePipelineEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.ReleasePipeline();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'release_pipeline.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "approximateReleaseCount": { "a": true, "h": "Approximate Release Count", "n": "approximateReleaseCount", "r": true, "sh": "The approximate number of non-archived releases in this pipeline.", "t": "`$INTEGER`", "key$": "approximateReleaseCount", "index$": 0 }, "archivedAt": { "a": true, "h": "Archived At", "n": "archivedAt", "r": false, "sh": "The time at which the entity was archived.", "t": "`$ANY`", "key$": "archivedAt", "index$": 1 }, "autoGenerateReleaseNotesOnCompletion": { "a": true, "h": "Auto Generate Release Notes On Completion", "n": "autoGenerateReleaseNotesOnCompletion", "r": true, "sh": "Whether to automatically generate a release note when a release is completed.", "t": "`$BOOLEAN`", "key$": "autoGenerateReleaseNotesOnCompletion", "index$": 2 }, "createdAt": { "a": true, "h": "Created At", "n": "createdAt", "r": true, "sh": "The time at which the entity was created.", "t": "`$ANY`", "key$": "createdAt", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The unique identifier of the entity.", "t": "`$STRING`", "key$": "id", "index$": 4 }, "includePathPatterns": { "a": true, "h": "Include Path Patterns", "n": "includePathPatterns", "r": true, "sh": "Glob patterns to filter commits by file path.", "t": "`$STRING`", "key$": "includePathPatterns", "index$": 5 }, "isProduction": { "a": true, "h": "Is Production", "n": "isProduction", "r": true, "sh": "Whether this pipeline targets a production environment.", "t": "`$BOOLEAN`", "key$": "isProduction", "index$": 6 }, "latestReleaseNote": { "a": true, "h": "Latest Release Note", "n": "latestReleaseNote", "r": false, "sh": "The release note in this pipeline whose covered range ends with the most recent release.", "t": "`$OBJECT`", "key$": "latestReleaseNote", "index$": 7 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "The name of the pipeline.", "t": "`$STRING`", "key$": "name", "index$": 8 }, "releaseNoteTemplate": { "a": true, "h": "Release Note Template", "n": "releaseNoteTemplate", "r": false, "sh": "The document template used to define the release notes format for this pipeline.", "t": "`$OBJECT`", "key$": "releaseNoteTemplate", "index$": 9 }, "rolloverIssuesOnCompletion": { "a": true, "h": "Rollover Issues On Completion", "n": "rolloverIssuesOnCompletion", "r": true, "sh": "Whether completing a scheduled release moves its open issues to the next release.", "t": "`$BOOLEAN`", "key$": "rolloverIssuesOnCompletion", "index$": 10 }, "slugId": { "a": true, "h": "Slug Id", "n": "slugId", "r": true, "sh": "The pipeline's unique slug identifier, used in URLs and for lookup by human-readable identifier instead of UUID.", "t": "`$STRING`", "key$": "slugId", "index$": 11 }, "trashed": { "a": true, "h": "Trashed", "n": "trashed", "r": false, "sh": "A flag that indicates whether the pipeline is in the trash bin.", "t": "`$BOOLEAN`", "key$": "trashed", "index$": 12 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "sh": "The type of the pipeline, which determines how releases are created and managed.", "t": "`$STRING`", "key$": "type", "index$": 13 }, "updatedAt": { "a": true, "h": "Updated At", "n": "updatedAt", "r": true, "sh": "The last time at which the entity was meaningfully updated.", "t": "`$ANY`", "key$": "updatedAt", "index$": 14 }, "url": { "a": true, "h": "Url", "n": "url", "r": true, "sh": "The URL to the release pipeline's releases list in the Linear app.", "t": "`$STRING`", "key$": "url", "index$": 15 } }, "id": { "field": "id", "name": "id" }, "name": "release_pipeline", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST releasePipelineCreate", "source": "graphql", "version": 2 }, "g": {}, "gq": { "doc": "mutation ReleasePipelineCreate($input: ReleasePipelineCreateInput!) { releasePipelineCreate(input: $input) { releasePipeline { ...ReleasePipelineFields } success } } fragment ReleasePipelineFields on ReleasePipeline { approximateReleaseCount archivedAt autoGenerateReleaseNotesOnCompletion createdAt id includePathPatterns isProduction latestReleaseNote { id } name releaseNoteTemplate { id } rolloverIssuesOnCompletion slugId trashed type updatedAt url }", "field": "releasePipelineCreate", "optype": "mutation", "vars": [{ "from": "", "gqltype": "ReleasePipelineCreateInput!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "releasePipelineCreate", "q": {}, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.releasePipelineCreate.releasePipeline`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "POST releasePipelines", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "before", "or": "before", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "first", "or": "first", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "param", "n": "include_archived", "or": "include_archived", "r": false, "t": "`$BOOLEAN`", "index$": 3 }, { "a": true, "k": "param", "n": "last", "or": "last", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "param", "n": "order_by", "or": "order_by", "r": false, "t": "`$ANY`", "index$": 5 }] }, "gq": { "doc": "query ReleasePipelineList($after: String, $before: String, $filter: ReleasePipelineFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy, $sort: [ReleasePipelineSortInput!]) { releasePipelines(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy, sort: $sort) { nodes { ...ReleasePipelineFields } pageInfo { endCursor hasNextPage } } } fragment ReleasePipelineFields on ReleasePipeline { approximateReleaseCount archivedAt autoGenerateReleaseNotesOnCompletion createdAt id includePathPatterns isProduction latestReleaseNote { id } name releaseNoteTemplate { id } rolloverIssuesOnCompletion slugId trashed type updatedAt url }", "field": "releasePipelines", "optype": "query", "page": { "cursor": "pageInfo.endCursor", "more": "pageInfo.hasNextPage", "nodes": "nodes", "style": "relay" }, "vars": [{ "from": "after", "gqltype": "String", "name": "after" }, { "from": "before", "gqltype": "String", "name": "before" }, { "from": "filter", "gqltype": "ReleasePipelineFilter", "name": "filter" }, { "from": "first", "gqltype": "Int", "name": "first" }, { "from": "includeArchived", "gqltype": "Boolean", "name": "includeArchived" }, { "from": "last", "gqltype": "Int", "name": "last" }, { "from": "orderBy", "gqltype": "PaginationOrderBy", "name": "orderBy" }, { "from": "sort", "gqltype": "[ReleasePipelineSortInput!]", "name": "sort" }] }, "k": "graphql", "m": "POST", "o": "releasePipelines", "q": {}, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.releasePipelines.nodes`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "POST releasePipeline", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "query ReleasePipelineLoad($id: String!) { releasePipeline(id: $id) { ...ReleasePipelineFields } } fragment ReleasePipelineFields on ReleasePipeline { approximateReleaseCount archivedAt autoGenerateReleaseNotesOnCompletion createdAt id includePathPatterns isProduction latestReleaseNote { id } name releaseNoteTemplate { id } rolloverIssuesOnCompletion slugId trashed type updatedAt url }", "field": "releasePipeline", "optype": "query", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "releasePipeline", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.releasePipeline`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "POST releasePipelineDelete", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation ReleasePipelineRemove($id: String!) { releasePipelineDelete(id: $id) { entity { ...ReleasePipelineFields } success } } fragment ReleasePipelineFields on ReleasePipeline { approximateReleaseCount archivedAt autoGenerateReleaseNotesOnCompletion createdAt id includePathPatterns isProduction latestReleaseNote { id } name releaseNoteTemplate { id } rolloverIssuesOnCompletion slugId trashed type updatedAt url }", "field": "releasePipelineDelete", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "releasePipelineDelete", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.releasePipelineDelete.entity`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "POST releasePipelineArchive", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation ReleasePipelineUpdateArchive($id: String!) { releasePipelineArchive(id: $id) { entity { ...ReleasePipelineFields } success } } fragment ReleasePipelineFields on ReleasePipeline { approximateReleaseCount archivedAt autoGenerateReleaseNotesOnCompletion createdAt id includePathPatterns isProduction latestReleaseNote { id } name releaseNoteTemplate { id } rolloverIssuesOnCompletion slugId trashed type updatedAt url }", "field": "releasePipelineArchive", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "releasePipelineArchive", "q": { "$action": "archive", "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.releasePipelineArchive.entity`" }, "index$": 0 }, { "a": true, "co": { "id": "POST releasePipelineUnarchive", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation ReleasePipelineUpdateUnarchive($id: String!) { releasePipelineUnarchive(id: $id) { entity { ...ReleasePipelineFields } success } } fragment ReleasePipelineFields on ReleasePipeline { approximateReleaseCount archivedAt autoGenerateReleaseNotesOnCompletion createdAt id includePathPatterns isProduction latestReleaseNote { id } name releaseNoteTemplate { id } rolloverIssuesOnCompletion slugId trashed type updatedAt url }", "field": "releasePipelineUnarchive", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "releasePipelineUnarchive", "q": { "$action": "unarchive", "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.releasePipelineUnarchive.entity`" }, "index$": 1 }, { "a": true, "co": { "id": "POST releasePipelineUpdate", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation ReleasePipelineUpdate($id: String!, $input: ReleasePipelineUpdateInput!) { releasePipelineUpdate(id: $id, input: $input) { releasePipeline { ...ReleasePipelineFields } success } } fragment ReleasePipelineFields on ReleasePipeline { approximateReleaseCount archivedAt autoGenerateReleaseNotesOnCompletion createdAt id includePathPatterns isProduction latestReleaseNote { id } name releaseNoteTemplate { id } rolloverIssuesOnCompletion slugId trashed type updatedAt url }", "field": "releasePipelineUpdate", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }, { "from": "", "gqltype": "ReleasePipelineUpdateInput!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "releasePipelineUpdate", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.releasePipelineUpdate.releasePipeline`" }, "index$": 2 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "release_pipeline", "name__orig": "release_pipeline", "Name": "ReleasePipeline", "name_": "release_pipeline", "name-": "release-pipeline", "NAME": "RELEASE_PIPELINE", "index$": 68 }, { "active": true, "entity": "release_pipeline", "key$": "BasicReleasePipelineFlow", "kind": "basic", "name": "BasicReleasePipelineFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "release_pipeline_ref01" }, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "release_pipeline_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "release_pipeline_ref01", "srcdatavar": "release_pipeline_ref01_data", "suffix": "_up0", "textfield": "includePathPatterns" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-release_pipeline_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "release_pipeline_ref01", "srcdatavar": "release_pipeline_ref01_data", "suffix": "_dt0" }, "m": { "id": "release_pipeline01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-release_pipeline_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "release_pipeline_ref01", "suffix": "_rm0" }, "m": { "id": "release_pipeline01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "release_pipeline_ref01" } }], "index$": 5 }] }, 'ReleasePipeline', { "POST releasePipelineCreate": { "protocol": "graphql" }, "POST releasePipelines": { "protocol": "graphql" }, "POST releasePipeline": { "protocol": "graphql" }, "POST releasePipelineDelete": { "protocol": "graphql" }, "POST releasePipelineArchive": { "protocol": "graphql" }, "POST releasePipelineUnarchive": { "protocol": "graphql" }, "POST releasePipelineUpdate": { "protocol": "graphql" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const release_pipeline_ref01_ent = client.ReleasePipeline();
        let release_pipeline_ref01_data = setup.data.new.release_pipeline['release_pipeline_ref01'];
        release_pipeline_ref01_data['after'] = setup.idmap['after01'];
        release_pipeline_ref01_data['before'] = setup.idmap['before01'];
        release_pipeline_ref01_data['first'] = setup.idmap['first01'];
        release_pipeline_ref01_data['include_archived'] = setup.idmap['include_archived01'];
        release_pipeline_ref01_data['last'] = setup.idmap['last01'];
        release_pipeline_ref01_data['order_by'] = setup.idmap['order_by01'];
        release_pipeline_ref01_data = (await release_pipeline_ref01_ent.create(release_pipeline_ref01_data)).data();
        (0, node_assert_1.default)(null != release_pipeline_ref01_data.id);
        // LIST
        const release_pipeline_ref01_match = {};
        release_pipeline_ref01_match['after'] = setup.idmap['after01'];
        release_pipeline_ref01_match['before'] = setup.idmap['before01'];
        release_pipeline_ref01_match['first'] = setup.idmap['first01'];
        release_pipeline_ref01_match['include_archived'] = setup.idmap['include_archived01'];
        release_pipeline_ref01_match['last'] = setup.idmap['last01'];
        release_pipeline_ref01_match['order_by'] = setup.idmap['order_by01'];
        const release_pipeline_ref01_list = (await release_pipeline_ref01_ent.list(release_pipeline_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(release_pipeline_ref01_list, { id: release_pipeline_ref01_data.id })));
        // UPDATE
        const release_pipeline_ref01_data_up0 = {};
        release_pipeline_ref01_data_up0.id = release_pipeline_ref01_data.id;
        const release_pipeline_ref01_markdef_up0 = { name: 'includePathPatterns', value: 'Mark01-release_pipeline_ref01_' + setup.now };
        release_pipeline_ref01_data_up0[release_pipeline_ref01_markdef_up0.name] = release_pipeline_ref01_markdef_up0.value;
        const release_pipeline_ref01_resdata_up0 = (await release_pipeline_ref01_ent.update(release_pipeline_ref01_data_up0)).data();
        (0, node_assert_1.default)(release_pipeline_ref01_resdata_up0.id === release_pipeline_ref01_data_up0.id);
        (0, node_assert_1.default)(release_pipeline_ref01_resdata_up0[release_pipeline_ref01_markdef_up0.name] === release_pipeline_ref01_markdef_up0.value);
        // LOAD
        const release_pipeline_ref01_match_dt0 = {};
        release_pipeline_ref01_match_dt0.id = release_pipeline_ref01_data.id;
        const release_pipeline_ref01_data_dt0 = (await release_pipeline_ref01_ent.load(release_pipeline_ref01_match_dt0)).data();
        (0, node_assert_1.default)(release_pipeline_ref01_data_dt0.id === release_pipeline_ref01_data.id);
        // REMOVE
        const release_pipeline_ref01_match_rm0 = { id: release_pipeline_ref01_data.id };
        await release_pipeline_ref01_ent.remove(release_pipeline_ref01_match_rm0);
        // LIST
        const release_pipeline_ref01_match_rt0 = {};
        release_pipeline_ref01_match_rt0['after'] = setup.idmap['after01'];
        release_pipeline_ref01_match_rt0['before'] = setup.idmap['before01'];
        release_pipeline_ref01_match_rt0['first'] = setup.idmap['first01'];
        release_pipeline_ref01_match_rt0['include_archived'] = setup.idmap['include_archived01'];
        release_pipeline_ref01_match_rt0['last'] = setup.idmap['last01'];
        release_pipeline_ref01_match_rt0['order_by'] = setup.idmap['order_by01'];
        const release_pipeline_ref01_list_rt0 = (await release_pipeline_ref01_ent.list(release_pipeline_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(release_pipeline_ref01_list_rt0, { id: release_pipeline_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/release_pipeline/ReleasePipelineTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['release_pipeline01', 'release_pipeline02', 'release_pipeline03', 'after01', 'before01', 'first01', 'include_archived01', 'last01', 'order_by01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_RELEASE_PIPELINE_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_RELEASE_PIPELINE_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_RELEASE_PIPELINE_ENTID'];
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
//# sourceMappingURL=ReleasePipelineEntity.test.js.map