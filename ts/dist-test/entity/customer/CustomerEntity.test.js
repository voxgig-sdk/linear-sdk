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
(0, node_test_1.describe)('CustomerEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.Customer();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'customer.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "approximateNeedCount": { "a": true, "h": "Approximate Need Count", "n": "approximateNeedCount", "r": true, "sh": "The approximate number of distinct requests associated with this customer, deduplicated per issue or project.", "t": "`$NUMBER`", "key$": "approximateNeedCount", "index$": 0 }, "archivedAt": { "a": true, "h": "Archived At", "n": "archivedAt", "r": false, "sh": "The time at which the entity was archived.", "t": "`$ANY`", "key$": "archivedAt", "index$": 1 }, "createdAt": { "a": true, "h": "Created At", "n": "createdAt", "r": true, "sh": "The time at which the entity was created.", "t": "`$ANY`", "key$": "createdAt", "index$": 2 }, "domains": { "a": true, "h": "Domains", "n": "domains", "r": true, "sh": "The email domains associated with this customer (e.g., 'acme.com').", "t": "`$STRING`", "key$": "domains", "index$": 3 }, "externalIds": { "a": true, "h": "External Ids", "n": "externalIds", "r": true, "sh": "Identifiers for this customer in external systems (e.g., CRM IDs from Intercom, Salesforce, or HubSpot).", "t": "`$STRING`", "key$": "externalIds", "index$": 4 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The unique identifier of the entity.", "t": "`$STRING`", "key$": "id", "index$": 5 }, "integration": { "a": true, "h": "Integration", "n": "integration", "r": false, "sh": "The integration that manages this customer's data (e.g., Intercom, Salesforce).", "t": "`$OBJECT`", "key$": "integration", "index$": 6 }, "logoUrl": { "a": true, "h": "Logo Url", "n": "logoUrl", "r": false, "sh": "URL of the customer's logo image.", "t": "`$STRING`", "key$": "logoUrl", "index$": 7 }, "mainSourceId": { "a": true, "h": "Main Source Id", "n": "mainSourceId", "r": false, "sh": "The primary external source ID when a customer has data from multiple external systems.", "t": "`$STRING`", "key$": "mainSourceId", "index$": 8 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "The display name of the customer organization.", "t": "`$STRING`", "key$": "name", "index$": 9 }, "owner": { "a": true, "h": "Owner", "n": "owner", "r": false, "sh": "The workspace member assigned as the owner of this customer.", "t": "`$OBJECT`", "key$": "owner", "index$": 10 }, "revenue": { "a": true, "h": "Revenue", "n": "revenue", "r": false, "sh": "The annual revenue generated by this customer.", "t": "`$INTEGER`", "key$": "revenue", "index$": 11 }, "size": { "a": true, "h": "Size", "n": "size", "r": false, "sh": "The number of employees or seats at the customer organization.", "t": "`$NUMBER`", "key$": "size", "index$": 12 }, "slackChannelId": { "a": true, "h": "Slack Channel Id", "n": "slackChannelId", "r": false, "sh": "The ID of the Slack channel linked to this customer for communication.", "t": "`$STRING`", "key$": "slackChannelId", "index$": 13 }, "slugId": { "a": true, "h": "Slug Id", "n": "slugId", "r": true, "sh": "A unique, human-readable URL slug for the customer.", "t": "`$STRING`", "key$": "slugId", "index$": 14 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "sh": "The current lifecycle status of the customer.", "t": "`$OBJECT`", "key$": "status", "index$": 15 }, "tier": { "a": true, "h": "Tier", "n": "tier", "r": false, "sh": "The tier or segment assigned to this customer for prioritization (e.g., Enterprise, Pro, Free).", "t": "`$OBJECT`", "key$": "tier", "index$": 16 }, "updatedAt": { "a": true, "h": "Updated At", "n": "updatedAt", "r": true, "sh": "The last time at which the entity was meaningfully updated.", "t": "`$ANY`", "key$": "updatedAt", "index$": 17 }, "url": { "a": true, "h": "Url", "n": "url", "r": true, "sh": "The URL of the customer's page in the Linear application.", "t": "`$STRING`", "key$": "url", "index$": 18 } }, "id": { "field": "id", "name": "id" }, "name": "customer", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST customerCreate", "source": "graphql", "version": 2 }, "g": {}, "gq": { "doc": "mutation CustomerCreate($input: CustomerCreateInput!) { customerCreate(input: $input) { customer { ...CustomerFields } success } } fragment CustomerFields on Customer { approximateNeedCount archivedAt createdAt domains externalIds id integration { id } logoUrl mainSourceId name owner { id } revenue size slackChannelId slugId status { id } tier { id } updatedAt url }", "field": "customerCreate", "optype": "mutation", "vars": [{ "from": "", "gqltype": "CustomerCreateInput!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "customerCreate", "q": {}, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.customerCreate.customer`" }, "index$": 0 }, { "a": true, "co": { "id": "POST customerUpsert", "source": "graphql", "version": 2 }, "g": {}, "gq": { "doc": "mutation CustomerCreateUpsert($input: CustomerUpsertInput!) { customerUpsert(input: $input) { customer { ...CustomerFields } success } } fragment CustomerFields on Customer { approximateNeedCount archivedAt createdAt domains externalIds id integration { id } logoUrl mainSourceId name owner { id } revenue size slackChannelId slugId status { id } tier { id } updatedAt url }", "field": "customerUpsert", "optype": "mutation", "vars": [{ "from": "", "gqltype": "CustomerUpsertInput!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "customerUpsert", "q": { "$action": "upsert" }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.customerUpsert.customer`" }, "index$": 1 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "POST customers", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "before", "or": "before", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "first", "or": "first", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "param", "n": "include_archived", "or": "include_archived", "r": false, "t": "`$BOOLEAN`", "index$": 3 }, { "a": true, "k": "param", "n": "last", "or": "last", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "param", "n": "order_by", "or": "order_by", "r": false, "t": "`$ANY`", "index$": 5 }] }, "gq": { "doc": "query CustomerList($after: String, $before: String, $filter: CustomerFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy, $sorts: [CustomerSortInput!]) { customers(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy, sorts: $sorts) { nodes { ...CustomerFields } pageInfo { endCursor hasNextPage } } } fragment CustomerFields on Customer { approximateNeedCount archivedAt createdAt domains externalIds id integration { id } logoUrl mainSourceId name owner { id } revenue size slackChannelId slugId status { id } tier { id } updatedAt url }", "field": "customers", "optype": "query", "page": { "cursor": "pageInfo.endCursor", "more": "pageInfo.hasNextPage", "nodes": "nodes", "style": "relay" }, "vars": [{ "from": "after", "gqltype": "String", "name": "after" }, { "from": "before", "gqltype": "String", "name": "before" }, { "from": "filter", "gqltype": "CustomerFilter", "name": "filter" }, { "from": "first", "gqltype": "Int", "name": "first" }, { "from": "includeArchived", "gqltype": "Boolean", "name": "includeArchived" }, { "from": "last", "gqltype": "Int", "name": "last" }, { "from": "orderBy", "gqltype": "PaginationOrderBy", "name": "orderBy" }, { "from": "sorts", "gqltype": "[CustomerSortInput!]", "name": "sorts" }] }, "k": "graphql", "m": "POST", "o": "customers", "q": {}, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.customers.nodes`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "POST customer", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "query CustomerLoad($id: String!) { customer(id: $id) { ...CustomerFields } } fragment CustomerFields on Customer { approximateNeedCount archivedAt createdAt domains externalIds id integration { id } logoUrl mainSourceId name owner { id } revenue size slackChannelId slugId status { id } tier { id } updatedAt url }", "field": "customer", "optype": "query", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "customer", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.customer`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "POST customerDelete", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation CustomerRemove($id: String!) { customerDelete(id: $id) { entityId lastSyncId success } }", "field": "customerDelete", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "customerDelete", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.customerDelete`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "POST customerMerge", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "source_customer_id", "or": "source_customer_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "target_customer_id", "or": "target_customer_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "gq": { "doc": "mutation CustomerUpdateMerge($sourceCustomerId: String!, $targetCustomerId: String!) { customerMerge(sourceCustomerId: $sourceCustomerId, targetCustomerId: $targetCustomerId) { customer { ...CustomerFields } success } } fragment CustomerFields on Customer { approximateNeedCount archivedAt createdAt domains externalIds id integration { id } logoUrl mainSourceId name owner { id } revenue size slackChannelId slugId status { id } tier { id } updatedAt url }", "field": "customerMerge", "optype": "mutation", "vars": [{ "from": "sourceCustomerId", "gqltype": "String!", "name": "sourceCustomerId" }, { "from": "targetCustomerId", "gqltype": "String!", "name": "targetCustomerId" }] }, "k": "graphql", "m": "POST", "o": "customerMerge", "q": { "$action": "merge", "exist": ["source_customer_id", "target_customer_id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.customerMerge.customer`" }, "index$": 0 }, { "a": true, "co": { "id": "POST customerUnsync", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation CustomerUpdateUnsync($id: String!) { customerUnsync(id: $id) { customer { ...CustomerFields } success } } fragment CustomerFields on Customer { approximateNeedCount archivedAt createdAt domains externalIds id integration { id } logoUrl mainSourceId name owner { id } revenue size slackChannelId slugId status { id } tier { id } updatedAt url }", "field": "customerUnsync", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "customerUnsync", "q": { "$action": "unsync", "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.customerUnsync.customer`" }, "index$": 1 }, { "a": true, "co": { "id": "POST customerUpdate", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation CustomerUpdate($id: String!, $input: CustomerUpdateInput!) { customerUpdate(id: $id, input: $input) { customer { ...CustomerFields } success } } fragment CustomerFields on Customer { approximateNeedCount archivedAt createdAt domains externalIds id integration { id } logoUrl mainSourceId name owner { id } revenue size slackChannelId slugId status { id } tier { id } updatedAt url }", "field": "customerUpdate", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }, { "from": "", "gqltype": "CustomerUpdateInput!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "customerUpdate", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.customerUpdate.customer`" }, "index$": 2 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "customer", "name__orig": "customer", "Name": "Customer", "name_": "customer", "name-": "customer", "NAME": "CUSTOMER", "index$": 14 }, { "active": true, "entity": "customer", "key$": "BasicCustomerFlow", "kind": "basic", "name": "BasicCustomerFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "customer_ref01" }, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01", "source_customer_id": "source_customer01", "target_customer_id": "target_customer01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "customer_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "customer_ref01", "srcdatavar": "customer_ref01_data", "suffix": "_up0", "textfield": "domains" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-customer_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "customer_ref01", "srcdatavar": "customer_ref01_data", "suffix": "_dt0" }, "m": { "id": "customer01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-customer_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "customer_ref01", "suffix": "_rm0" }, "m": { "id": "customer01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "customer_ref01" } }], "index$": 5 }] }, 'Customer', { "POST customerCreate": { "protocol": "graphql" }, "POST customerUpsert": { "protocol": "graphql" }, "POST customers": { "protocol": "graphql" }, "POST customer": { "protocol": "graphql" }, "POST customerDelete": { "protocol": "graphql" }, "POST customerMerge": { "protocol": "graphql" }, "POST customerUnsync": { "protocol": "graphql" }, "POST customerUpdate": { "protocol": "graphql" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const customer_ref01_ent = client.Customer();
        let customer_ref01_data = setup.data.new.customer['customer_ref01'];
        customer_ref01_data['after'] = setup.idmap['after01'];
        customer_ref01_data['before'] = setup.idmap['before01'];
        customer_ref01_data['first'] = setup.idmap['first01'];
        customer_ref01_data['include_archived'] = setup.idmap['include_archived01'];
        customer_ref01_data['last'] = setup.idmap['last01'];
        customer_ref01_data['order_by'] = setup.idmap['order_by01'];
        customer_ref01_data['source_customer_id'] = setup.idmap['source_customer01'];
        customer_ref01_data['target_customer_id'] = setup.idmap['target_customer01'];
        customer_ref01_data = (await customer_ref01_ent.create(customer_ref01_data)).data();
        (0, node_assert_1.default)(null != customer_ref01_data.id);
        // LIST
        const customer_ref01_match = {};
        customer_ref01_match['after'] = setup.idmap['after01'];
        customer_ref01_match['before'] = setup.idmap['before01'];
        customer_ref01_match['first'] = setup.idmap['first01'];
        customer_ref01_match['include_archived'] = setup.idmap['include_archived01'];
        customer_ref01_match['last'] = setup.idmap['last01'];
        customer_ref01_match['order_by'] = setup.idmap['order_by01'];
        const customer_ref01_list = (await customer_ref01_ent.list(customer_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(customer_ref01_list, { id: customer_ref01_data.id })));
        // UPDATE
        const customer_ref01_data_up0 = {};
        customer_ref01_data_up0.id = customer_ref01_data.id;
        const customer_ref01_markdef_up0 = { name: 'domains', value: 'Mark01-customer_ref01_' + setup.now };
        customer_ref01_data_up0[customer_ref01_markdef_up0.name] = customer_ref01_markdef_up0.value;
        const customer_ref01_resdata_up0 = (await customer_ref01_ent.update(customer_ref01_data_up0)).data();
        (0, node_assert_1.default)(customer_ref01_resdata_up0.id === customer_ref01_data_up0.id);
        (0, node_assert_1.default)(customer_ref01_resdata_up0[customer_ref01_markdef_up0.name] === customer_ref01_markdef_up0.value);
        // LOAD
        const customer_ref01_match_dt0 = {};
        customer_ref01_match_dt0.id = customer_ref01_data.id;
        const customer_ref01_data_dt0 = (await customer_ref01_ent.load(customer_ref01_match_dt0)).data();
        (0, node_assert_1.default)(customer_ref01_data_dt0.id === customer_ref01_data.id);
        // REMOVE
        const customer_ref01_match_rm0 = { id: customer_ref01_data.id };
        await customer_ref01_ent.remove(customer_ref01_match_rm0);
        // LIST
        const customer_ref01_match_rt0 = {};
        customer_ref01_match_rt0['after'] = setup.idmap['after01'];
        customer_ref01_match_rt0['before'] = setup.idmap['before01'];
        customer_ref01_match_rt0['first'] = setup.idmap['first01'];
        customer_ref01_match_rt0['include_archived'] = setup.idmap['include_archived01'];
        customer_ref01_match_rt0['last'] = setup.idmap['last01'];
        customer_ref01_match_rt0['order_by'] = setup.idmap['order_by01'];
        const customer_ref01_list_rt0 = (await customer_ref01_ent.list(customer_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(customer_ref01_list_rt0, { id: customer_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/customer/CustomerTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['customer01', 'customer02', 'customer03', 'after01', 'before01', 'first01', 'include_archived01', 'last01', 'order_by01', 'source_customer01', 'target_customer01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_CUSTOMER_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_CUSTOMER_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_CUSTOMER_ENTID'];
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
//# sourceMappingURL=CustomerEntity.test.js.map