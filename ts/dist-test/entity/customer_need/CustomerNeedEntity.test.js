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
(0, node_test_1.describe)('CustomerNeedEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.CustomerNeed();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'customer_need.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "archivedAt": { "a": true, "h": "Archived At", "n": "archivedAt", "r": false, "sh": "The time at which the entity was archived.", "t": "`$ANY`", "key$": "archivedAt", "index$": 0 }, "attachment": { "a": true, "h": "Attachment", "n": "attachment", "r": false, "sh": "The issue attachment linked to this need.", "t": "`$OBJECT`", "key$": "attachment", "index$": 1 }, "body": { "a": true, "h": "Body", "n": "body", "r": false, "sh": "The body content of the need in Markdown format.", "t": "`$STRING`", "key$": "body", "index$": 2 }, "bodyData": { "a": true, "h": "Body Data", "n": "bodyData", "r": false, "sh": "[Internal] The body content of the need as a Prosemirror document JSON string.", "t": "`$STRING`", "key$": "bodyData", "index$": 3 }, "comment": { "a": true, "h": "Comment", "n": "comment", "r": false, "sh": "An optional comment providing additional context for this need.", "t": "`$OBJECT`", "key$": "comment", "index$": 4 }, "content": { "a": true, "h": "Content", "n": "content", "r": false, "sh": "The effective Markdown content shown for this customer need.", "t": "`$STRING`", "key$": "content", "index$": 5 }, "createdAt": { "a": true, "h": "Created At", "n": "createdAt", "r": true, "sh": "The time at which the entity was created.", "t": "`$ANY`", "key$": "createdAt", "index$": 6 }, "creator": { "a": true, "h": "Creator", "n": "creator", "r": false, "sh": "The user who manually created this customer need.", "t": "`$OBJECT`", "key$": "creator", "index$": 7 }, "customer": { "a": true, "h": "Customer", "n": "customer", "r": false, "sh": "The customer organization this need belongs to.", "t": "`$OBJECT`", "key$": "customer", "index$": 8 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The unique identifier of the entity.", "t": "`$STRING`", "key$": "id", "index$": 9 }, "issue": { "a": true, "h": "Issue", "n": "issue", "r": false, "sh": "The issue this need is linked to.", "t": "`$OBJECT`", "key$": "issue", "index$": 10 }, "originalIssue": { "a": true, "h": "Original Issue", "n": "originalIssue", "r": false, "sh": "The issue this customer need was originally created on, before being moved to a different issue or project.", "t": "`$OBJECT`", "key$": "originalIssue", "index$": 11 }, "priority": { "a": true, "h": "Priority", "n": "priority", "r": true, "sh": "Whether the customer need is important or not.", "t": "`$NUMBER`", "key$": "priority", "index$": 12 }, "project": { "a": true, "h": "Project", "n": "project", "r": false, "sh": "The project this need is linked to.", "t": "`$OBJECT`", "key$": "project", "index$": 13 }, "projectAttachment": { "a": true, "h": "Project Attachment", "n": "projectAttachment", "r": false, "sh": "The project attachment linked to this need.", "t": "`$OBJECT`", "key$": "projectAttachment", "index$": 14 }, "updatedAt": { "a": true, "h": "Updated At", "n": "updatedAt", "r": true, "sh": "The last time at which the entity was meaningfully updated.", "t": "`$ANY`", "key$": "updatedAt", "index$": 15 }, "url": { "a": true, "h": "Url", "n": "url", "r": false, "sh": "The URL of the source attachment linked to this need, if any.", "t": "`$STRING`", "key$": "url", "index$": 16 } }, "id": { "field": "id", "name": "id" }, "name": "customer_need", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST customerNeedCreate", "source": "graphql", "version": 2 }, "g": {}, "gq": { "doc": "mutation CustomerNeedCreate($input: CustomerNeedCreateInput!) { customerNeedCreate(input: $input) { need { ...CustomerNeedFields } success } } fragment CustomerNeedFields on CustomerNeed { archivedAt attachment { id } body bodyData comment { id } content createdAt creator { id } customer { id } id issue { id } originalIssue { id } priority project { id } projectAttachment { id } updatedAt url }", "field": "customerNeedCreate", "optype": "mutation", "vars": [{ "from": "", "gqltype": "CustomerNeedCreateInput!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "customerNeedCreate", "q": {}, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.customerNeedCreate.need`" }, "index$": 0 }, { "a": true, "co": { "id": "POST customerNeedCreateFromAttachment", "source": "graphql", "version": 2 }, "g": {}, "gq": { "doc": "mutation CustomerNeedCreateCreateFromAttachment($input: CustomerNeedCreateFromAttachmentInput!) { customerNeedCreateFromAttachment(input: $input) { need { ...CustomerNeedFields } success } } fragment CustomerNeedFields on CustomerNeed { archivedAt attachment { id } body bodyData comment { id } content createdAt creator { id } customer { id } id issue { id } originalIssue { id } priority project { id } projectAttachment { id } updatedAt url }", "field": "customerNeedCreateFromAttachment", "optype": "mutation", "vars": [{ "from": "", "gqltype": "CustomerNeedCreateFromAttachmentInput!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "customerNeedCreateFromAttachment", "q": { "$action": "create_from_attachment" }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.customerNeedCreateFromAttachment.need`" }, "index$": 1 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "POST customerNeeds", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "before", "or": "before", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "first", "or": "first", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "param", "n": "include_archived", "or": "include_archived", "r": false, "t": "`$BOOLEAN`", "index$": 3 }, { "a": true, "k": "param", "n": "last", "or": "last", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "param", "n": "order_by", "or": "order_by", "r": false, "t": "`$ANY`", "index$": 5 }] }, "gq": { "doc": "query CustomerNeedList($after: String, $before: String, $filter: CustomerNeedFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { customerNeeds(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...CustomerNeedFields } pageInfo { endCursor hasNextPage } } } fragment CustomerNeedFields on CustomerNeed { archivedAt attachment { id } body bodyData comment { id } content createdAt creator { id } customer { id } id issue { id } originalIssue { id } priority project { id } projectAttachment { id } updatedAt url }", "field": "customerNeeds", "optype": "query", "page": { "cursor": "pageInfo.endCursor", "more": "pageInfo.hasNextPage", "nodes": "nodes", "style": "relay" }, "vars": [{ "from": "after", "gqltype": "String", "name": "after" }, { "from": "before", "gqltype": "String", "name": "before" }, { "from": "", "gqltype": "CustomerNeedFilter", "name": "filter" }, { "from": "first", "gqltype": "Int", "name": "first" }, { "from": "includeArchived", "gqltype": "Boolean", "name": "includeArchived" }, { "from": "last", "gqltype": "Int", "name": "last" }, { "from": "orderBy", "gqltype": "PaginationOrderBy", "name": "orderBy" }] }, "k": "graphql", "m": "POST", "o": "customerNeeds", "q": {}, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.customerNeeds.nodes`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "POST customerNeed", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "hash", "or": "hash", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "id", "r": false, "t": "`$STRING`", "index$": 1 }] }, "gq": { "doc": "query CustomerNeedLoad($hash: String, $id: String) { customerNeed(hash: $hash, id: $id) { ...CustomerNeedFields } } fragment CustomerNeedFields on CustomerNeed { archivedAt attachment { id } body bodyData comment { id } content createdAt creator { id } customer { id } id issue { id } originalIssue { id } priority project { id } projectAttachment { id } updatedAt url }", "field": "customerNeed", "optype": "query", "vars": [{ "from": "hash", "gqltype": "String", "name": "hash" }, { "from": "id", "gqltype": "String", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "customerNeed", "q": {}, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.customerNeed`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "POST customerNeedDelete", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "keep_attachment", "or": "keep_attachment", "r": false, "t": "`$BOOLEAN`", "index$": 1 }] }, "gq": { "doc": "mutation CustomerNeedRemove($id: String!, $keepAttachment: Boolean) { customerNeedDelete(id: $id, keepAttachment: $keepAttachment) { entityId lastSyncId success } }", "field": "customerNeedDelete", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }, { "from": "keepAttachment", "gqltype": "Boolean", "name": "keepAttachment" }] }, "k": "graphql", "m": "POST", "o": "customerNeedDelete", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.customerNeedDelete`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "POST customerNeedArchive", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation CustomerNeedUpdateArchive($id: String!) { customerNeedArchive(id: $id) { entity { ...CustomerNeedFields } success } } fragment CustomerNeedFields on CustomerNeed { archivedAt attachment { id } body bodyData comment { id } content createdAt creator { id } customer { id } id issue { id } originalIssue { id } priority project { id } projectAttachment { id } updatedAt url }", "field": "customerNeedArchive", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "customerNeedArchive", "q": { "$action": "archive", "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.customerNeedArchive.entity`" }, "index$": 0 }, { "a": true, "co": { "id": "POST customerNeedUnarchive", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation CustomerNeedUpdateUnarchive($id: String!) { customerNeedUnarchive(id: $id) { entity { ...CustomerNeedFields } success } } fragment CustomerNeedFields on CustomerNeed { archivedAt attachment { id } body bodyData comment { id } content createdAt creator { id } customer { id } id issue { id } originalIssue { id } priority project { id } projectAttachment { id } updatedAt url }", "field": "customerNeedUnarchive", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "customerNeedUnarchive", "q": { "$action": "unarchive", "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.customerNeedUnarchive.entity`" }, "index$": 1 }, { "a": true, "co": { "id": "POST customerNeedUpdate", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "clear_attachment", "or": "clear_attachment", "r": false, "t": "`$BOOLEAN`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "gq": { "doc": "mutation CustomerNeedUpdate($clearAttachment: Boolean, $id: String!, $input: CustomerNeedUpdateInput!) { customerNeedUpdate(clearAttachment: $clearAttachment, id: $id, input: $input) { need { ...CustomerNeedFields } success } } fragment CustomerNeedFields on CustomerNeed { archivedAt attachment { id } body bodyData comment { id } content createdAt creator { id } customer { id } id issue { id } originalIssue { id } priority project { id } projectAttachment { id } updatedAt url }", "field": "customerNeedUpdate", "optype": "mutation", "vars": [{ "from": "clearAttachment", "gqltype": "Boolean", "name": "clearAttachment" }, { "from": "id", "gqltype": "String!", "name": "id" }, { "from": "", "gqltype": "CustomerNeedUpdateInput!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "customerNeedUpdate", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.customerNeedUpdate.need`" }, "index$": 2 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "customer_need", "name__orig": "customer_need", "Name": "CustomerNeed", "name_": "customer_need", "name-": "customer-need", "NAME": "CUSTOMER_NEED", "index$": 15 }, { "active": true, "entity": "customer_need", "key$": "BasicCustomerNeedFlow", "kind": "basic", "name": "BasicCustomerNeedFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "customer_need_ref01" }, "m": { "after": "after01", "before": "before01", "clear_attachment": "clear_attachment01", "first": "first01", "hash": "hash01", "include_archived": "include_archived01", "keep_attachment": "keep_attachment01", "last": "last01", "order_by": "order_by01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "customer_need_ref01" } }], "index$": 1 }, { "a": true, "d": { "clear_attachment": "clear_attachment01" }, "i": { "ref": "customer_need_ref01", "srcdatavar": "customer_need_ref01_data", "suffix": "_up0", "textfield": "body" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-customer_need_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "customer_need_ref01", "srcdatavar": "customer_need_ref01_data", "suffix": "_dt0" }, "m": { "hash": "hash01", "id": "customer_need01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-customer_need_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "customer_need_ref01", "suffix": "_rm0" }, "m": { "id": "customer_need01", "keep_attachment": "keep_attachment01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "customer_need_ref01" } }], "index$": 5 }] }, 'CustomerNeed', { "POST customerNeedCreate": { "protocol": "graphql" }, "POST customerNeedCreateFromAttachment": { "protocol": "graphql" }, "POST customerNeeds": { "protocol": "graphql" }, "POST customerNeed": { "protocol": "graphql" }, "POST customerNeedDelete": { "protocol": "graphql" }, "POST customerNeedArchive": { "protocol": "graphql" }, "POST customerNeedUnarchive": { "protocol": "graphql" }, "POST customerNeedUpdate": { "protocol": "graphql" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const customer_need_ref01_ent = client.CustomerNeed();
        let customer_need_ref01_data = setup.data.new.customer_need['customer_need_ref01'];
        customer_need_ref01_data['after'] = setup.idmap['after01'];
        customer_need_ref01_data['before'] = setup.idmap['before01'];
        customer_need_ref01_data['clear_attachment'] = setup.idmap['clear_attachment01'];
        customer_need_ref01_data['first'] = setup.idmap['first01'];
        customer_need_ref01_data['hash'] = setup.idmap['hash01'];
        customer_need_ref01_data['include_archived'] = setup.idmap['include_archived01'];
        customer_need_ref01_data['keep_attachment'] = setup.idmap['keep_attachment01'];
        customer_need_ref01_data['last'] = setup.idmap['last01'];
        customer_need_ref01_data['order_by'] = setup.idmap['order_by01'];
        customer_need_ref01_data = (await customer_need_ref01_ent.create(customer_need_ref01_data)).data();
        (0, node_assert_1.default)(null != customer_need_ref01_data.id);
        // LIST
        const customer_need_ref01_match = {};
        customer_need_ref01_match['after'] = setup.idmap['after01'];
        customer_need_ref01_match['before'] = setup.idmap['before01'];
        customer_need_ref01_match['first'] = setup.idmap['first01'];
        customer_need_ref01_match['include_archived'] = setup.idmap['include_archived01'];
        customer_need_ref01_match['last'] = setup.idmap['last01'];
        customer_need_ref01_match['order_by'] = setup.idmap['order_by01'];
        const customer_need_ref01_list = (await customer_need_ref01_ent.list(customer_need_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(customer_need_ref01_list, { id: customer_need_ref01_data.id })));
        // UPDATE
        const customer_need_ref01_data_up0 = {};
        customer_need_ref01_data_up0.id = customer_need_ref01_data.id;
        customer_need_ref01_data_up0['clear_attachment'] = setup.idmap['clear_attachment'];
        const customer_need_ref01_markdef_up0 = { name: 'body', value: 'Mark01-customer_need_ref01_' + setup.now };
        customer_need_ref01_data_up0[customer_need_ref01_markdef_up0.name] = customer_need_ref01_markdef_up0.value;
        const customer_need_ref01_resdata_up0 = (await customer_need_ref01_ent.update(customer_need_ref01_data_up0)).data();
        (0, node_assert_1.default)(customer_need_ref01_resdata_up0.id === customer_need_ref01_data_up0.id);
        (0, node_assert_1.default)(customer_need_ref01_resdata_up0[customer_need_ref01_markdef_up0.name] === customer_need_ref01_markdef_up0.value);
        // LOAD
        const customer_need_ref01_match_dt0 = {};
        customer_need_ref01_match_dt0.id = customer_need_ref01_data.id;
        const customer_need_ref01_data_dt0 = (await customer_need_ref01_ent.load(customer_need_ref01_match_dt0)).data();
        (0, node_assert_1.default)(customer_need_ref01_data_dt0.id === customer_need_ref01_data.id);
        // REMOVE
        const customer_need_ref01_match_rm0 = { id: customer_need_ref01_data.id };
        await customer_need_ref01_ent.remove(customer_need_ref01_match_rm0);
        // LIST
        const customer_need_ref01_match_rt0 = {};
        customer_need_ref01_match_rt0['after'] = setup.idmap['after01'];
        customer_need_ref01_match_rt0['before'] = setup.idmap['before01'];
        customer_need_ref01_match_rt0['first'] = setup.idmap['first01'];
        customer_need_ref01_match_rt0['include_archived'] = setup.idmap['include_archived01'];
        customer_need_ref01_match_rt0['last'] = setup.idmap['last01'];
        customer_need_ref01_match_rt0['order_by'] = setup.idmap['order_by01'];
        const customer_need_ref01_list_rt0 = (await customer_need_ref01_ent.list(customer_need_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(customer_need_ref01_list_rt0, { id: customer_need_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/customer_need/CustomerNeedTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['customer_need01', 'customer_need02', 'customer_need03', 'after01', 'before01', 'clear_attachment01', 'first01', 'hash01', 'include_archived01', 'keep_attachment01', 'last01', 'order_by01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_CUSTOMER_NEED_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_CUSTOMER_NEED_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_CUSTOMER_NEED_ENTID'];
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
//# sourceMappingURL=CustomerNeedEntity.test.js.map