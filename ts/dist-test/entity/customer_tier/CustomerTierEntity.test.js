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
(0, node_test_1.describe)('CustomerTierEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.CustomerTier();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'customer_tier.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "archivedAt", "req": false, "short": "The time at which the entity was archived.", "type": "`$ANY`", "index$": 0 }, { "active": true, "name": "color", "req": true, "short": "The color of the tier indicator in the UI, as a HEX string (e.g., '#ff0000').", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "createdAt", "req": true, "short": "The time at which the entity was created.", "type": "`$ANY`", "index$": 2 }, { "active": true, "name": "description", "req": false, "short": "An optional description explaining what this tier represents and its intended use for customer segmentation.", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "displayName", "req": true, "short": "The user-facing display name of the tier shown in the UI.", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "id", "req": true, "short": "The unique identifier of the entity.", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "name", "req": true, "short": "The internal name of the tier.", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "position", "req": true, "short": "The sort position of the tier in the workspace's customer tier ordering.", "type": "`$NUMBER`", "index$": 7 }, { "active": true, "name": "updatedAt", "req": true, "short": "The last time at which the entity was meaningfully updated.", "type": "`$ANY`", "index$": 8 }], "id": { "field": "id", "name": "id" }, "name": "customer_tier", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": {}, "contract": { "id": "POST customerTierCreate", "json": "{\"field\":{\"args\":[{\"gqltype\":\"CustomerTierCreateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"CustomerTierCreateInput\"}],\"deprecated\":false,\"desc\":\"Creates a new customer tier.\",\"gqltype\":\"CustomerTierPayload!\",\"list\":false,\"name\":\"customerTierCreate\",\"reqd\":true,\"type\":\"CustomerTierPayload\"},\"invocation\":{\"doc\":\"mutation CustomerTierCreate($input: CustomerTierCreateInput!) { customerTierCreate(input: $input) { tier { ...CustomerTierFields } success } } fragment CustomerTierFields on CustomerTier { archivedAt color createdAt description displayName id name position updatedAt }\",\"field\":\"customerTierCreate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"\",\"gqltype\":\"CustomerTierCreateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"CustomerTierCreateInput\":{\"desc\":\"Input for creating a customer tier in the workspace's customer tier ordering.\",\"fields\":{\"color\":{\"args\":[],\"deprecated\":false,\"desc\":\"The color of the tier indicator in the UI, as a HEX string (e.g., '#ff0000').\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"color\",\"reqd\":true,\"type\":\"String\"},\"description\":{\"args\":[],\"deprecated\":false,\"desc\":\"An optional description explaining what this tier represents.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"description\",\"reqd\":false,\"type\":\"String\"},\"displayName\":{\"args\":[],\"deprecated\":false,\"desc\":\"The user-facing display name of the tier. At least one of name or displayName must be provided.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"displayName\",\"reqd\":false,\"type\":\"String\"},\"id\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier in UUID v4 format. If none is provided, the backend will generate one.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"id\",\"reqd\":false,\"type\":\"String\"},\"name\":{\"args\":[],\"deprecated\":false,\"desc\":\"The internal name of the tier. Must be unique within the workspace. At least one of name or displayName must be provided.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"name\",\"reqd\":false,\"type\":\"String\"},\"position\":{\"args\":[],\"deprecated\":false,\"desc\":\"The sort position of the tier in the workspace's customer tier ordering. If omitted or colliding, a position is automatically assigned at the end.\",\"gqltype\":\"Float\",\"list\":false,\"name\":\"position\",\"reqd\":false,\"type\":\"Float\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"CustomerTierCreateInput\"},\"Float\":{\"desc\":\"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Float\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "mutation CustomerTierCreate($input: CustomerTierCreateInput!) { customerTierCreate(input: $input) { tier { ...CustomerTierFields } success } } fragment CustomerTierFields on CustomerTier { archivedAt color createdAt description displayName id name position updatedAt }", "field": "customerTierCreate", "optype": "mutation", "vars": [{ "from": "", "gqltype": "CustomerTierCreateInput!", "name": "input" }] }, "kind": "graphql", "method": "POST", "orig": "customerTierCreate", "segments": [], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.data.customerTierCreate.tier`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "after", "orig": "after", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "before", "orig": "before", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "kind": "param", "name": "first", "orig": "first", "reqd": false, "type": "`$INTEGER`", "index$": 2 }, { "active": true, "kind": "param", "name": "include_archived", "orig": "include_archived", "reqd": false, "type": "`$BOOLEAN`", "index$": 3 }, { "active": true, "kind": "param", "name": "last", "orig": "last", "reqd": false, "type": "`$INTEGER`", "index$": 4 }, { "active": true, "kind": "param", "name": "order_by", "orig": "order_by", "reqd": false, "type": "`$ANY`", "index$": 5 }] }, "contract": { "id": "POST customerTiers", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String\",\"name\":\"after\",\"reqd\":false,\"type\":\"String\"},{\"gqltype\":\"String\",\"name\":\"before\",\"reqd\":false,\"type\":\"String\"},{\"gqltype\":\"Int\",\"name\":\"first\",\"reqd\":false,\"type\":\"Int\"},{\"gqltype\":\"Boolean\",\"name\":\"includeArchived\",\"reqd\":false,\"type\":\"Boolean\"},{\"gqltype\":\"Int\",\"name\":\"last\",\"reqd\":false,\"type\":\"Int\"},{\"gqltype\":\"PaginationOrderBy\",\"name\":\"orderBy\",\"reqd\":false,\"type\":\"PaginationOrderBy\"}],\"deprecated\":false,\"desc\":\"All customer tiers defined in the workspace.\",\"gqltype\":\"CustomerTierConnection!\",\"list\":false,\"name\":\"customerTiers\",\"reqd\":true,\"type\":\"CustomerTierConnection\"},\"invocation\":{\"doc\":\"query CustomerTierList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { customerTiers(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...CustomerTierFields } pageInfo { endCursor hasNextPage } } } fragment CustomerTierFields on CustomerTier { archivedAt color createdAt description displayName id name position updatedAt }\",\"field\":\"customerTiers\",\"optype\":\"query\",\"page\":{\"cursor\":\"pageInfo.endCursor\",\"more\":\"pageInfo.hasNextPage\",\"nodes\":\"nodes\",\"style\":\"relay\"},\"vars\":[{\"from\":\"after\",\"gqltype\":\"String\",\"name\":\"after\"},{\"from\":\"before\",\"gqltype\":\"String\",\"name\":\"before\"},{\"from\":\"first\",\"gqltype\":\"Int\",\"name\":\"first\"},{\"from\":\"includeArchived\",\"gqltype\":\"Boolean\",\"name\":\"includeArchived\"},{\"from\":\"last\",\"gqltype\":\"Int\",\"name\":\"last\"},{\"from\":\"orderBy\",\"gqltype\":\"PaginationOrderBy\",\"name\":\"orderBy\"}]},\"protocol\":\"graphql\",\"types\":{\"Boolean\":{\"desc\":\"The `Boolean` scalar type represents `true` or `false`.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Boolean\"},\"Int\":{\"desc\":\"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Int\"},\"PaginationOrderBy\":{\"desc\":\"By which field should the pagination order by\",\"fields\":{},\"kind\":\"ENUM\",\"name\":\"PaginationOrderBy\",\"values\":[\"createdAt\",\"updatedAt\"]},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "query CustomerTierList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { customerTiers(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...CustomerTierFields } pageInfo { endCursor hasNextPage } } } fragment CustomerTierFields on CustomerTier { archivedAt color createdAt description displayName id name position updatedAt }", "field": "customerTiers", "optype": "query", "page": { "cursor": "pageInfo.endCursor", "more": "pageInfo.hasNextPage", "nodes": "nodes", "style": "relay" }, "vars": [{ "from": "after", "gqltype": "String", "name": "after" }, { "from": "before", "gqltype": "String", "name": "before" }, { "from": "first", "gqltype": "Int", "name": "first" }, { "from": "includeArchived", "gqltype": "Boolean", "name": "includeArchived" }, { "from": "last", "gqltype": "Int", "name": "last" }, { "from": "orderBy", "gqltype": "PaginationOrderBy", "name": "orderBy" }] }, "kind": "graphql", "method": "POST", "orig": "customerTiers", "segments": [], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.data.customerTiers.nodes`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST customerTier", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"One specific customer tier.\",\"gqltype\":\"CustomerTier!\",\"list\":false,\"name\":\"customerTier\",\"reqd\":true,\"type\":\"CustomerTier\"},\"invocation\":{\"doc\":\"query CustomerTierLoad($id: String!) { customerTier(id: $id) { ...CustomerTierFields } } fragment CustomerTierFields on CustomerTier { archivedAt color createdAt description displayName id name position updatedAt }\",\"field\":\"customerTier\",\"optype\":\"query\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "query CustomerTierLoad($id: String!) { customerTier(id: $id) { ...CustomerTierFields } } fragment CustomerTierFields on CustomerTier { archivedAt color createdAt description displayName id name position updatedAt }", "field": "customerTier", "optype": "query", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "kind": "graphql", "method": "POST", "orig": "customerTier", "segments": [], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.data.customerTier`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST customerTierDelete", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"Deletes a customer tier. The tier must not be in use by any customers.\",\"gqltype\":\"DeletePayload!\",\"list\":false,\"name\":\"customerTierDelete\",\"reqd\":true,\"type\":\"DeletePayload\"},\"invocation\":{\"doc\":\"mutation CustomerTierRemove($id: String!) { customerTierDelete(id: $id) { entityId lastSyncId success } }\",\"field\":\"customerTierDelete\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "mutation CustomerTierRemove($id: String!) { customerTierDelete(id: $id) { entityId lastSyncId success } }", "field": "customerTierDelete", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "kind": "graphql", "method": "POST", "orig": "customerTierDelete", "segments": [], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.data.customerTierDelete`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST customerTierUpdate", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"},{\"gqltype\":\"CustomerTierUpdateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"CustomerTierUpdateInput\"}],\"deprecated\":false,\"desc\":\"Updates a customer tier.\",\"gqltype\":\"CustomerTierPayload!\",\"list\":false,\"name\":\"customerTierUpdate\",\"reqd\":true,\"type\":\"CustomerTierPayload\"},\"invocation\":{\"doc\":\"mutation CustomerTierUpdate($id: String!, $input: CustomerTierUpdateInput!) { customerTierUpdate(id: $id, input: $input) { tier { ...CustomerTierFields } success } } fragment CustomerTierFields on CustomerTier { archivedAt color createdAt description displayName id name position updatedAt }\",\"field\":\"customerTierUpdate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"},{\"from\":\"\",\"gqltype\":\"CustomerTierUpdateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"CustomerTierUpdateInput\":{\"desc\":\"Input for updating an existing customer tier.\",\"fields\":{\"color\":{\"args\":[],\"deprecated\":false,\"desc\":\"The updated color of the tier indicator in the UI, as a HEX string.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"color\",\"reqd\":false,\"type\":\"String\"},\"description\":{\"args\":[],\"deprecated\":false,\"desc\":\"The updated description of the tier.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"description\",\"reqd\":false,\"type\":\"String\"},\"displayName\":{\"args\":[],\"deprecated\":false,\"desc\":\"The updated user-facing display name of the tier.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"displayName\",\"reqd\":false,\"type\":\"String\"},\"name\":{\"args\":[],\"deprecated\":false,\"desc\":\"The updated internal name of the tier.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"name\",\"reqd\":false,\"type\":\"String\"},\"position\":{\"args\":[],\"deprecated\":false,\"desc\":\"The updated sort position of the tier in the workspace's customer tier ordering.\",\"gqltype\":\"Float\",\"list\":false,\"name\":\"position\",\"reqd\":false,\"type\":\"Float\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"CustomerTierUpdateInput\"},\"Float\":{\"desc\":\"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Float\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "mutation CustomerTierUpdate($id: String!, $input: CustomerTierUpdateInput!) { customerTierUpdate(id: $id, input: $input) { tier { ...CustomerTierFields } success } } fragment CustomerTierFields on CustomerTier { archivedAt color createdAt description displayName id name position updatedAt }", "field": "customerTierUpdate", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }, { "from": "", "gqltype": "CustomerTierUpdateInput!", "name": "input" }] }, "kind": "graphql", "method": "POST", "orig": "customerTierUpdate", "segments": [], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.data.customerTierUpdate.tier`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "customer_tier", "name__orig": "customer_tier", "Name": "CustomerTier", "name_": "customer_tier", "name-": "customer-tier", "NAME": "CUSTOMER_TIER", "index$": 17 }, { "active": true, "entity": "customer_tier", "key$": "BasicCustomerTierFlow", "kind": "basic", "name": "BasicCustomerTierFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "customer_tier_ref01" }, "match": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": {}, "match": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "customer_tier_ref01" } }], "index$": 1 }, { "active": true, "data": {}, "input": { "ref": "customer_tier_ref01", "srcdatavar": "customer_tier_ref01_data", "suffix": "_up0", "textfield": "color" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-customer_tier_ref01" } }], "valid": [], "index$": 2 }, { "active": true, "data": {}, "input": { "ref": "customer_tier_ref01", "srcdatavar": "customer_tier_ref01_data", "suffix": "_dt0" }, "match": { "id": "customer_tier01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-customer_tier_ref01" } }], "index$": 3 }, { "active": true, "data": {}, "input": { "ref": "customer_tier_ref01", "suffix": "_rm0" }, "match": { "id": "customer_tier01" }, "op": "remove", "spec": [], "valid": [], "index$": 4 }, { "active": true, "data": {}, "input": { "suffix": "_rt0" }, "match": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemNotExists", "def": { "ref": "customer_tier_ref01" } }], "index$": 5 }] }, 'CustomerTier');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const customer_tier_ref01_ent = client.CustomerTier();
        let customer_tier_ref01_data = setup.data.new.customer_tier['customer_tier_ref01'];
        customer_tier_ref01_data['after'] = setup.idmap['after01'];
        customer_tier_ref01_data['before'] = setup.idmap['before01'];
        customer_tier_ref01_data['first'] = setup.idmap['first01'];
        customer_tier_ref01_data['include_archived'] = setup.idmap['include_archived01'];
        customer_tier_ref01_data['last'] = setup.idmap['last01'];
        customer_tier_ref01_data['order_by'] = setup.idmap['order_by01'];
        customer_tier_ref01_data = (await customer_tier_ref01_ent.create(customer_tier_ref01_data)).data();
        (0, node_assert_1.default)(null != customer_tier_ref01_data.id);
        // LIST
        const customer_tier_ref01_match = {};
        customer_tier_ref01_match['after'] = setup.idmap['after01'];
        customer_tier_ref01_match['before'] = setup.idmap['before01'];
        customer_tier_ref01_match['first'] = setup.idmap['first01'];
        customer_tier_ref01_match['include_archived'] = setup.idmap['include_archived01'];
        customer_tier_ref01_match['last'] = setup.idmap['last01'];
        customer_tier_ref01_match['order_by'] = setup.idmap['order_by01'];
        const customer_tier_ref01_list = (await customer_tier_ref01_ent.list(customer_tier_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(customer_tier_ref01_list, { id: customer_tier_ref01_data.id })));
        // UPDATE
        const customer_tier_ref01_data_up0 = {};
        customer_tier_ref01_data_up0.id = customer_tier_ref01_data.id;
        const customer_tier_ref01_markdef_up0 = { name: 'color', value: 'Mark01-customer_tier_ref01_' + setup.now };
        customer_tier_ref01_data_up0[customer_tier_ref01_markdef_up0.name] = customer_tier_ref01_markdef_up0.value;
        const customer_tier_ref01_resdata_up0 = (await customer_tier_ref01_ent.update(customer_tier_ref01_data_up0)).data();
        (0, node_assert_1.default)(customer_tier_ref01_resdata_up0.id === customer_tier_ref01_data_up0.id);
        (0, node_assert_1.default)(customer_tier_ref01_resdata_up0[customer_tier_ref01_markdef_up0.name] === customer_tier_ref01_markdef_up0.value);
        // LOAD
        const customer_tier_ref01_match_dt0 = {};
        customer_tier_ref01_match_dt0.id = customer_tier_ref01_data.id;
        const customer_tier_ref01_data_dt0 = (await customer_tier_ref01_ent.load(customer_tier_ref01_match_dt0)).data();
        (0, node_assert_1.default)(customer_tier_ref01_data_dt0.id === customer_tier_ref01_data.id);
        // REMOVE
        const customer_tier_ref01_match_rm0 = { id: customer_tier_ref01_data.id };
        await customer_tier_ref01_ent.remove(customer_tier_ref01_match_rm0);
        // LIST
        const customer_tier_ref01_match_rt0 = {};
        customer_tier_ref01_match_rt0['after'] = setup.idmap['after01'];
        customer_tier_ref01_match_rt0['before'] = setup.idmap['before01'];
        customer_tier_ref01_match_rt0['first'] = setup.idmap['first01'];
        customer_tier_ref01_match_rt0['include_archived'] = setup.idmap['include_archived01'];
        customer_tier_ref01_match_rt0['last'] = setup.idmap['last01'];
        customer_tier_ref01_match_rt0['order_by'] = setup.idmap['order_by01'];
        const customer_tier_ref01_list_rt0 = (await customer_tier_ref01_ent.list(customer_tier_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(customer_tier_ref01_list_rt0, { id: customer_tier_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/customer_tier/CustomerTierTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['customer_tier01', 'customer_tier02', 'customer_tier03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_CUSTOMER_TIER_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_CUSTOMER_TIER_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_CUSTOMER_TIER_ENTID'];
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
//# sourceMappingURL=CustomerTierEntity.test.js.map