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
(0, node_test_1.describe)('DocumentEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.Document();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'document.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "archivedAt": { "a": true, "h": "Archived At", "n": "archivedAt", "r": false, "sh": "The time at which the entity was archived.", "t": "`$ANY`", "key$": "archivedAt", "index$": 0 }, "color": { "a": true, "h": "Color", "n": "color", "r": false, "sh": "The hex color of the document icon.", "t": "`$STRING`", "key$": "color", "index$": 1 }, "content": { "a": true, "h": "Content", "n": "content", "r": false, "sh": "The document's content in markdown format.", "t": "`$STRING`", "key$": "content", "index$": 2 }, "contentState": { "a": true, "h": "Content State", "n": "contentState", "r": false, "sh": "[Internal] The document's content as a base64-encoded Yjs state update.", "t": "`$STRING`", "key$": "contentState", "index$": 3 }, "createdAt": { "a": true, "h": "Created At", "n": "createdAt", "r": true, "sh": "The time at which the entity was created.", "t": "`$ANY`", "key$": "createdAt", "index$": 4 }, "creator": { "a": true, "h": "Creator", "n": "creator", "r": false, "sh": "The user who created the document.", "t": "`$OBJECT`", "key$": "creator", "index$": 5 }, "cycle": { "a": true, "h": "Cycle", "n": "cycle", "r": false, "sh": "[Internal] The cycle that the document is associated with.", "t": "`$OBJECT`", "key$": "cycle", "index$": 6 }, "documentContentId": { "a": true, "h": "Document Content Id", "n": "documentContentId", "r": false, "sh": "The ID of the document content associated with the document.", "t": "`$STRING`", "key$": "documentContentId", "index$": 7 }, "hiddenAt": { "a": true, "h": "Hidden At", "n": "hiddenAt", "r": false, "sh": "The time at which the document was hidden from the default view.", "t": "`$ANY`", "key$": "hiddenAt", "index$": 8 }, "icon": { "a": true, "h": "Icon", "n": "icon", "r": false, "sh": "The icon of the document, either a decorative icon type or an emoji string.", "t": "`$STRING`", "key$": "icon", "index$": 9 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The unique identifier of the entity.", "t": "`$STRING`", "key$": "id", "index$": 10 }, "initiative": { "a": true, "h": "Initiative", "n": "initiative", "r": false, "sh": "The initiative that the document is associated with.", "t": "`$OBJECT`", "key$": "initiative", "index$": 11 }, "issue": { "a": true, "h": "Issue", "n": "issue", "r": false, "sh": "The issue that the document is associated with.", "t": "`$OBJECT`", "key$": "issue", "index$": 12 }, "lastAppliedTemplate": { "a": true, "h": "Last Applied Template", "n": "lastAppliedTemplate", "r": false, "sh": "The last template that was applied to this document.", "t": "`$OBJECT`", "key$": "lastAppliedTemplate", "index$": 13 }, "owner": { "a": true, "h": "Owner", "n": "owner", "r": false, "sh": "The owner of the document.", "t": "`$OBJECT`", "key$": "owner", "index$": 14 }, "project": { "a": true, "h": "Project", "n": "project", "r": false, "sh": "The project that the document is associated with.", "t": "`$OBJECT`", "key$": "project", "index$": 15 }, "release": { "a": true, "h": "Release", "n": "release", "r": false, "sh": "The release that the document is associated with.", "t": "`$OBJECT`", "key$": "release", "index$": 16 }, "slugId": { "a": true, "h": "Slug Id", "n": "slugId", "r": true, "sh": "The document's unique URL slug, used to construct human-readable URLs.", "t": "`$STRING`", "key$": "slugId", "index$": 17 }, "sortOrder": { "a": true, "h": "Sort Order", "n": "sortOrder", "r": true, "sh": "The sort order of the document in its parent entity's resources list.", "t": "`$NUMBER`", "key$": "sortOrder", "index$": 18 }, "summary": { "a": true, "h": "Summary", "n": "summary", "r": false, "sh": "[Internal] A one-sentence AI-generated summary of the document content.", "t": "`$STRING`", "key$": "summary", "index$": 19 }, "team": { "a": true, "h": "Team", "n": "team", "r": false, "sh": "[Internal] The team that the document is associated with.", "t": "`$OBJECT`", "key$": "team", "index$": 20 }, "title": { "a": true, "h": "Title", "n": "title", "r": true, "sh": "The title of the document.", "t": "`$STRING`", "key$": "title", "index$": 21 }, "trashed": { "a": true, "h": "Trashed", "n": "trashed", "r": false, "sh": "A flag that indicates whether the document is in the trash bin.", "t": "`$BOOLEAN`", "key$": "trashed", "index$": 22 }, "updatedAt": { "a": true, "h": "Updated At", "n": "updatedAt", "r": true, "sh": "The last time at which the entity was meaningfully updated.", "t": "`$ANY`", "key$": "updatedAt", "index$": 23 }, "updatedBy": { "a": true, "h": "Updated By", "n": "updatedBy", "r": false, "sh": "The user who last updated the document.", "t": "`$OBJECT`", "key$": "updatedBy", "index$": 24 }, "url": { "a": true, "h": "Url", "n": "url", "r": true, "sh": "The canonical url for the document.", "t": "`$STRING`", "key$": "url", "index$": 25 } }, "id": { "field": "id", "name": "id" }, "name": "document", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST documentCreate", "source": "graphql", "version": 2 }, "g": {}, "gq": { "doc": "mutation DocumentCreate($input: DocumentCreateInput!) { documentCreate(input: $input) { document { ...DocumentFields } success } } fragment DocumentFields on Document { archivedAt color content contentState createdAt creator { id } cycle { id } documentContentId hiddenAt icon id initiative { id } issue { id } lastAppliedTemplate { id } owner { id } project { id } release { id } slugId sortOrder summary team { id } title trashed updatedAt updatedBy { id } url }", "field": "documentCreate", "optype": "mutation", "vars": [{ "from": "", "gqltype": "DocumentCreateInput!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "documentCreate", "q": {}, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.documentCreate.document`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "POST documents", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "before", "or": "before", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "first", "or": "first", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "param", "n": "include_archived", "or": "include_archived", "r": false, "t": "`$BOOLEAN`", "index$": 3 }, { "a": true, "k": "param", "n": "last", "or": "last", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "param", "n": "order_by", "or": "order_by", "r": false, "t": "`$ANY`", "index$": 5 }] }, "gq": { "doc": "query DocumentList($after: String, $before: String, $filter: DocumentFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy, $sort: [DocumentSortInput!]) { documents(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy, sort: $sort) { nodes { ...DocumentFields } pageInfo { endCursor hasNextPage } } } fragment DocumentFields on Document { archivedAt color content contentState createdAt creator { id } cycle { id } documentContentId hiddenAt icon id initiative { id } issue { id } lastAppliedTemplate { id } owner { id } project { id } release { id } slugId sortOrder summary team { id } title trashed updatedAt updatedBy { id } url }", "field": "documents", "optype": "query", "page": { "cursor": "pageInfo.endCursor", "more": "pageInfo.hasNextPage", "nodes": "nodes", "style": "relay" }, "vars": [{ "from": "after", "gqltype": "String", "name": "after" }, { "from": "before", "gqltype": "String", "name": "before" }, { "from": "filter", "gqltype": "DocumentFilter", "name": "filter" }, { "from": "first", "gqltype": "Int", "name": "first" }, { "from": "includeArchived", "gqltype": "Boolean", "name": "includeArchived" }, { "from": "last", "gqltype": "Int", "name": "last" }, { "from": "orderBy", "gqltype": "PaginationOrderBy", "name": "orderBy" }, { "from": "sort", "gqltype": "[DocumentSortInput!]", "name": "sort" }] }, "k": "graphql", "m": "POST", "o": "documents", "q": {}, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.documents.nodes`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "POST document", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "query DocumentLoad($id: String!) { document(id: $id) { ...DocumentFields } } fragment DocumentFields on Document { archivedAt color content contentState createdAt creator { id } cycle { id } documentContentId hiddenAt icon id initiative { id } issue { id } lastAppliedTemplate { id } owner { id } project { id } release { id } slugId sortOrder summary team { id } title trashed updatedAt updatedBy { id } url }", "field": "document", "optype": "query", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "document", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.document`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "POST documentDelete", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation DocumentRemove($id: String!) { documentDelete(id: $id) { entity { ...DocumentFields } success } } fragment DocumentFields on Document { archivedAt color content contentState createdAt creator { id } cycle { id } documentContentId hiddenAt icon id initiative { id } issue { id } lastAppliedTemplate { id } owner { id } project { id } release { id } slugId sortOrder summary team { id } title trashed updatedAt updatedBy { id } url }", "field": "documentDelete", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "documentDelete", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.documentDelete.entity`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "POST documentUnarchive", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation DocumentUpdateUnarchive($id: String!) { documentUnarchive(id: $id) { entity { ...DocumentFields } success } } fragment DocumentFields on Document { archivedAt color content contentState createdAt creator { id } cycle { id } documentContentId hiddenAt icon id initiative { id } issue { id } lastAppliedTemplate { id } owner { id } project { id } release { id } slugId sortOrder summary team { id } title trashed updatedAt updatedBy { id } url }", "field": "documentUnarchive", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "documentUnarchive", "q": { "$action": "unarchive", "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.documentUnarchive.entity`" }, "index$": 0 }, { "a": true, "co": { "id": "POST documentUpdate", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation DocumentUpdate($id: String!, $input: DocumentUpdateInput!) { documentUpdate(id: $id, input: $input) { document { ...DocumentFields } success } } fragment DocumentFields on Document { archivedAt color content contentState createdAt creator { id } cycle { id } documentContentId hiddenAt icon id initiative { id } issue { id } lastAppliedTemplate { id } owner { id } project { id } release { id } slugId sortOrder summary team { id } title trashed updatedAt updatedBy { id } url }", "field": "documentUpdate", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }, { "from": "", "gqltype": "DocumentUpdateInput!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "documentUpdate", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.documentUpdate.document`" }, "index$": 1 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "document", "name__orig": "document", "Name": "Document", "name_": "document", "name-": "document", "NAME": "DOCUMENT", "index$": 20 }, { "active": true, "entity": "document", "key$": "BasicDocumentFlow", "kind": "basic", "name": "BasicDocumentFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "document_ref01" }, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "document_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "document_ref01", "srcdatavar": "document_ref01_data", "suffix": "_up0", "textfield": "color" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-document_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "document_ref01", "srcdatavar": "document_ref01_data", "suffix": "_dt0" }, "m": { "id": "document01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-document_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "document_ref01", "suffix": "_rm0" }, "m": { "id": "document01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "document_ref01" } }], "index$": 5 }] }, 'Document', { "POST documentCreate": { "protocol": "graphql" }, "POST documents": { "protocol": "graphql" }, "POST document": { "protocol": "graphql" }, "POST documentDelete": { "protocol": "graphql" }, "POST documentUnarchive": { "protocol": "graphql" }, "POST documentUpdate": { "protocol": "graphql" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const document_ref01_ent = client.Document();
        let document_ref01_data = setup.data.new.document['document_ref01'];
        document_ref01_data['after'] = setup.idmap['after01'];
        document_ref01_data['before'] = setup.idmap['before01'];
        document_ref01_data['first'] = setup.idmap['first01'];
        document_ref01_data['include_archived'] = setup.idmap['include_archived01'];
        document_ref01_data['last'] = setup.idmap['last01'];
        document_ref01_data['order_by'] = setup.idmap['order_by01'];
        document_ref01_data = (await document_ref01_ent.create(document_ref01_data)).data();
        (0, node_assert_1.default)(null != document_ref01_data.id);
        // LIST
        const document_ref01_match = {};
        document_ref01_match['after'] = setup.idmap['after01'];
        document_ref01_match['before'] = setup.idmap['before01'];
        document_ref01_match['first'] = setup.idmap['first01'];
        document_ref01_match['include_archived'] = setup.idmap['include_archived01'];
        document_ref01_match['last'] = setup.idmap['last01'];
        document_ref01_match['order_by'] = setup.idmap['order_by01'];
        const document_ref01_list = (await document_ref01_ent.list(document_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(document_ref01_list, { id: document_ref01_data.id })));
        // UPDATE
        const document_ref01_data_up0 = {};
        document_ref01_data_up0.id = document_ref01_data.id;
        const document_ref01_markdef_up0 = { name: 'color', value: 'Mark01-document_ref01_' + setup.now };
        document_ref01_data_up0[document_ref01_markdef_up0.name] = document_ref01_markdef_up0.value;
        const document_ref01_resdata_up0 = (await document_ref01_ent.update(document_ref01_data_up0)).data();
        (0, node_assert_1.default)(document_ref01_resdata_up0.id === document_ref01_data_up0.id);
        (0, node_assert_1.default)(document_ref01_resdata_up0[document_ref01_markdef_up0.name] === document_ref01_markdef_up0.value);
        // LOAD
        const document_ref01_match_dt0 = {};
        document_ref01_match_dt0.id = document_ref01_data.id;
        const document_ref01_data_dt0 = (await document_ref01_ent.load(document_ref01_match_dt0)).data();
        (0, node_assert_1.default)(document_ref01_data_dt0.id === document_ref01_data.id);
        // REMOVE
        const document_ref01_match_rm0 = { id: document_ref01_data.id };
        await document_ref01_ent.remove(document_ref01_match_rm0);
        // LIST
        const document_ref01_match_rt0 = {};
        document_ref01_match_rt0['after'] = setup.idmap['after01'];
        document_ref01_match_rt0['before'] = setup.idmap['before01'];
        document_ref01_match_rt0['first'] = setup.idmap['first01'];
        document_ref01_match_rt0['include_archived'] = setup.idmap['include_archived01'];
        document_ref01_match_rt0['last'] = setup.idmap['last01'];
        document_ref01_match_rt0['order_by'] = setup.idmap['order_by01'];
        const document_ref01_list_rt0 = (await document_ref01_ent.list(document_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(document_ref01_list_rt0, { id: document_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/document/DocumentTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['document01', 'document02', 'document03', 'after01', 'before01', 'first01', 'include_archived01', 'last01', 'order_by01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_DOCUMENT_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_DOCUMENT_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_DOCUMENT_ENTID'];
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
//# sourceMappingURL=DocumentEntity.test.js.map