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
(0, node_test_1.describe)('IssueLabelEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.IssueLabel();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'issue_label.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "archivedAt": { "a": true, "h": "Archived At", "n": "archivedAt", "r": false, "sh": "The time at which the entity was archived.", "t": "`$ANY`", "key$": "archivedAt", "index$": 0 }, "color": { "a": true, "h": "Color", "n": "color", "r": true, "sh": "The label's color as a HEX string (e.g., '#EB5757').", "t": "`$STRING`", "key$": "color", "index$": 1 }, "createdAt": { "a": true, "h": "Created At", "n": "createdAt", "r": true, "sh": "The time at which the entity was created.", "t": "`$ANY`", "key$": "createdAt", "index$": 2 }, "creator": { "a": true, "h": "Creator", "n": "creator", "r": false, "sh": "The user who created the label.", "t": "`$OBJECT`", "key$": "creator", "index$": 3 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "The label's description.", "t": "`$STRING`", "key$": "description", "index$": 4 }, "groupType": { "a": true, "h": "Group Type", "n": "groupType", "r": false, "sh": "The selection mode of this label group.", "t": "`$STRING`", "key$": "groupType", "index$": 5 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The unique identifier of the entity.", "t": "`$STRING`", "key$": "id", "index$": 6 }, "inheritedFrom": { "a": true, "h": "Inherited From", "n": "inheritedFrom", "r": false, "sh": "The original workspace or parent-team label that this label was inherited from.", "t": "`$OBJECT`", "key$": "inheritedFrom", "index$": 7 }, "isGroup": { "a": true, "h": "Is Group", "n": "isGroup", "r": true, "sh": "Whether the label is a group.", "t": "`$BOOLEAN`", "key$": "isGroup", "index$": 8 }, "lastAppliedAt": { "a": true, "h": "Last Applied At", "n": "lastAppliedAt", "r": false, "sh": "The date when the label was last applied to an issue, project, or initiative.", "t": "`$ANY`", "key$": "lastAppliedAt", "index$": 9 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "The label's name.", "t": "`$STRING`", "key$": "name", "index$": 10 }, "parent": { "a": true, "h": "Parent", "n": "parent", "r": false, "sh": "The parent label.", "t": "`$OBJECT`", "key$": "parent", "index$": 11 }, "retiredAt": { "a": true, "h": "Retired At", "n": "retiredAt", "r": false, "sh": "[Internal] When the label was retired.", "t": "`$ANY`", "key$": "retiredAt", "index$": 12 }, "retiredBy": { "a": true, "h": "Retired By", "n": "retiredBy", "r": false, "sh": "The user who retired the label.", "t": "`$OBJECT`", "key$": "retiredBy", "index$": 13 }, "team": { "a": true, "h": "Team", "n": "team", "r": false, "sh": "The team that the label is scoped to.", "t": "`$OBJECT`", "key$": "team", "index$": 14 }, "updatedAt": { "a": true, "h": "Updated At", "n": "updatedAt", "r": true, "sh": "The last time at which the entity was meaningfully updated.", "t": "`$ANY`", "key$": "updatedAt", "index$": 15 } }, "id": { "field": "id", "name": "id" }, "name": "issue_label", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST issueLabelCreate", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "replace_team_label", "or": "replace_team_label", "r": false, "t": "`$BOOLEAN`", "index$": 0 }] }, "gq": { "doc": "mutation IssueLabelCreate($input: IssueLabelCreateInput!, $replaceTeamLabels: Boolean) { issueLabelCreate(input: $input, replaceTeamLabels: $replaceTeamLabels) { issueLabel { ...IssueLabelFields } success } } fragment IssueLabelFields on IssueLabel { archivedAt color createdAt creator { id } description groupType id inheritedFrom { id } isGroup lastAppliedAt name parent { id } retiredAt retiredBy { id } team { id } updatedAt }", "field": "issueLabelCreate", "optype": "mutation", "vars": [{ "from": "", "gqltype": "IssueLabelCreateInput!", "name": "input" }, { "from": "replaceTeamLabels", "gqltype": "Boolean", "name": "replaceTeamLabels" }] }, "k": "graphql", "m": "POST", "o": "issueLabelCreate", "q": {}, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.issueLabelCreate.issueLabel`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "POST issueLabels", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "before", "or": "before", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "first", "or": "first", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "param", "n": "include_archived", "or": "include_archived", "r": false, "t": "`$BOOLEAN`", "index$": 3 }, { "a": true, "k": "param", "n": "last", "or": "last", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "param", "n": "order_by", "or": "order_by", "r": false, "t": "`$ANY`", "index$": 5 }] }, "gq": { "doc": "query IssueLabelList($after: String, $before: String, $filter: IssueLabelFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { issueLabels(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...IssueLabelFields } pageInfo { endCursor hasNextPage } } } fragment IssueLabelFields on IssueLabel { archivedAt color createdAt creator { id } description groupType id inheritedFrom { id } isGroup lastAppliedAt name parent { id } retiredAt retiredBy { id } team { id } updatedAt }", "field": "issueLabels", "optype": "query", "page": { "cursor": "pageInfo.endCursor", "more": "pageInfo.hasNextPage", "nodes": "nodes", "style": "relay" }, "vars": [{ "from": "after", "gqltype": "String", "name": "after" }, { "from": "before", "gqltype": "String", "name": "before" }, { "from": "", "gqltype": "IssueLabelFilter", "name": "filter" }, { "from": "first", "gqltype": "Int", "name": "first" }, { "from": "includeArchived", "gqltype": "Boolean", "name": "includeArchived" }, { "from": "last", "gqltype": "Int", "name": "last" }, { "from": "orderBy", "gqltype": "PaginationOrderBy", "name": "orderBy" }] }, "k": "graphql", "m": "POST", "o": "issueLabels", "q": {}, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.issueLabels.nodes`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "POST issueLabel", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "query IssueLabelLoad($id: String!) { issueLabel(id: $id) { ...IssueLabelFields } } fragment IssueLabelFields on IssueLabel { archivedAt color createdAt creator { id } description groupType id inheritedFrom { id } isGroup lastAppliedAt name parent { id } retiredAt retiredBy { id } team { id } updatedAt }", "field": "issueLabel", "optype": "query", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "issueLabel", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.issueLabel`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "POST issueLabelDelete", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation IssueLabelRemove($id: String!) { issueLabelDelete(id: $id) { entityId lastSyncId success } }", "field": "issueLabelDelete", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "issueLabelDelete", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.issueLabelDelete`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "POST issueLabelRestore", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation IssueLabelUpdateRestore($id: String!) { issueLabelRestore(id: $id) { issueLabel { ...IssueLabelFields } success } } fragment IssueLabelFields on IssueLabel { archivedAt color createdAt creator { id } description groupType id inheritedFrom { id } isGroup lastAppliedAt name parent { id } retiredAt retiredBy { id } team { id } updatedAt }", "field": "issueLabelRestore", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "issueLabelRestore", "q": { "$action": "restore", "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.issueLabelRestore.issueLabel`" }, "index$": 0 }, { "a": true, "co": { "id": "POST issueLabelRetire", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation IssueLabelUpdateRetire($id: String!) { issueLabelRetire(id: $id) { issueLabel { ...IssueLabelFields } success } } fragment IssueLabelFields on IssueLabel { archivedAt color createdAt creator { id } description groupType id inheritedFrom { id } isGroup lastAppliedAt name parent { id } retiredAt retiredBy { id } team { id } updatedAt }", "field": "issueLabelRetire", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "issueLabelRetire", "q": { "$action": "retire", "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.issueLabelRetire.issueLabel`" }, "index$": 1 }, { "a": true, "co": { "id": "POST issueLabelUpdate", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "replace_team_label", "or": "replace_team_label", "r": false, "t": "`$BOOLEAN`", "index$": 1 }] }, "gq": { "doc": "mutation IssueLabelUpdate($id: String!, $input: IssueLabelUpdateInput!, $replaceTeamLabels: Boolean) { issueLabelUpdate(id: $id, input: $input, replaceTeamLabels: $replaceTeamLabels) { issueLabel { ...IssueLabelFields } success } } fragment IssueLabelFields on IssueLabel { archivedAt color createdAt creator { id } description groupType id inheritedFrom { id } isGroup lastAppliedAt name parent { id } retiredAt retiredBy { id } team { id } updatedAt }", "field": "issueLabelUpdate", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }, { "from": "", "gqltype": "IssueLabelUpdateInput!", "name": "input" }, { "from": "replaceTeamLabels", "gqltype": "Boolean", "name": "replaceTeamLabels" }] }, "k": "graphql", "m": "POST", "o": "issueLabelUpdate", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.issueLabelUpdate.issueLabel`" }, "index$": 2 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "issue_label", "name__orig": "issue_label", "Name": "IssueLabel", "name_": "issue_label", "name-": "issue-label", "NAME": "ISSUE_LABEL", "index$": 42 }, { "active": true, "entity": "issue_label", "key$": "BasicIssueLabelFlow", "kind": "basic", "name": "BasicIssueLabelFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "issue_label_ref01" }, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01", "replace_team_label": "replace_team_label01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "issue_label_ref01" } }], "index$": 1 }, { "a": true, "d": { "replace_team_label": "replace_team_label01" }, "i": { "ref": "issue_label_ref01", "srcdatavar": "issue_label_ref01_data", "suffix": "_up0", "textfield": "color" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-issue_label_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "issue_label_ref01", "srcdatavar": "issue_label_ref01_data", "suffix": "_dt0" }, "m": { "id": "issue_label01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-issue_label_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "issue_label_ref01", "suffix": "_rm0" }, "m": { "id": "issue_label01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "issue_label_ref01" } }], "index$": 5 }] }, 'IssueLabel', { "POST issueLabelCreate": { "protocol": "graphql" }, "POST issueLabels": { "protocol": "graphql" }, "POST issueLabel": { "protocol": "graphql" }, "POST issueLabelDelete": { "protocol": "graphql" }, "POST issueLabelRestore": { "protocol": "graphql" }, "POST issueLabelRetire": { "protocol": "graphql" }, "POST issueLabelUpdate": { "protocol": "graphql" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const issue_label_ref01_ent = client.IssueLabel();
        let issue_label_ref01_data = setup.data.new.issue_label['issue_label_ref01'];
        issue_label_ref01_data['after'] = setup.idmap['after01'];
        issue_label_ref01_data['before'] = setup.idmap['before01'];
        issue_label_ref01_data['first'] = setup.idmap['first01'];
        issue_label_ref01_data['include_archived'] = setup.idmap['include_archived01'];
        issue_label_ref01_data['last'] = setup.idmap['last01'];
        issue_label_ref01_data['order_by'] = setup.idmap['order_by01'];
        issue_label_ref01_data['replace_team_label'] = setup.idmap['replace_team_label01'];
        issue_label_ref01_data = (await issue_label_ref01_ent.create(issue_label_ref01_data)).data();
        (0, node_assert_1.default)(null != issue_label_ref01_data.id);
        // LIST
        const issue_label_ref01_match = {};
        issue_label_ref01_match['after'] = setup.idmap['after01'];
        issue_label_ref01_match['before'] = setup.idmap['before01'];
        issue_label_ref01_match['first'] = setup.idmap['first01'];
        issue_label_ref01_match['include_archived'] = setup.idmap['include_archived01'];
        issue_label_ref01_match['last'] = setup.idmap['last01'];
        issue_label_ref01_match['order_by'] = setup.idmap['order_by01'];
        const issue_label_ref01_list = (await issue_label_ref01_ent.list(issue_label_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(issue_label_ref01_list, { id: issue_label_ref01_data.id })));
        // UPDATE
        const issue_label_ref01_data_up0 = {};
        issue_label_ref01_data_up0.id = issue_label_ref01_data.id;
        issue_label_ref01_data_up0['replace_team_label'] = setup.idmap['replace_team_label'];
        const issue_label_ref01_markdef_up0 = { name: 'color', value: 'Mark01-issue_label_ref01_' + setup.now };
        issue_label_ref01_data_up0[issue_label_ref01_markdef_up0.name] = issue_label_ref01_markdef_up0.value;
        const issue_label_ref01_resdata_up0 = (await issue_label_ref01_ent.update(issue_label_ref01_data_up0)).data();
        (0, node_assert_1.default)(issue_label_ref01_resdata_up0.id === issue_label_ref01_data_up0.id);
        (0, node_assert_1.default)(issue_label_ref01_resdata_up0[issue_label_ref01_markdef_up0.name] === issue_label_ref01_markdef_up0.value);
        // LOAD
        const issue_label_ref01_match_dt0 = {};
        issue_label_ref01_match_dt0.id = issue_label_ref01_data.id;
        const issue_label_ref01_data_dt0 = (await issue_label_ref01_ent.load(issue_label_ref01_match_dt0)).data();
        (0, node_assert_1.default)(issue_label_ref01_data_dt0.id === issue_label_ref01_data.id);
        // REMOVE
        const issue_label_ref01_match_rm0 = { id: issue_label_ref01_data.id };
        await issue_label_ref01_ent.remove(issue_label_ref01_match_rm0);
        // LIST
        const issue_label_ref01_match_rt0 = {};
        issue_label_ref01_match_rt0['after'] = setup.idmap['after01'];
        issue_label_ref01_match_rt0['before'] = setup.idmap['before01'];
        issue_label_ref01_match_rt0['first'] = setup.idmap['first01'];
        issue_label_ref01_match_rt0['include_archived'] = setup.idmap['include_archived01'];
        issue_label_ref01_match_rt0['last'] = setup.idmap['last01'];
        issue_label_ref01_match_rt0['order_by'] = setup.idmap['order_by01'];
        const issue_label_ref01_list_rt0 = (await issue_label_ref01_ent.list(issue_label_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(issue_label_ref01_list_rt0, { id: issue_label_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/issue_label/IssueLabelTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['issue_label01', 'issue_label02', 'issue_label03', 'after01', 'before01', 'first01', 'include_archived01', 'last01', 'order_by01', 'replace_team_label01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_ISSUE_LABEL_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_ISSUE_LABEL_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_ISSUE_LABEL_ENTID'];
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
//# sourceMappingURL=IssueLabelEntity.test.js.map