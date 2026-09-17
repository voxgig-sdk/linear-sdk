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
(0, node_test_1.describe)('CustomerStatusEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.CustomerStatus();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'customer_status.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "archivedAt", "req": false, "short": "The time at which the entity was archived.", "type": "`$ANY`", "index$": 0 }, { "active": true, "name": "color", "req": true, "short": "The color of the status indicator in the UI, as a HEX string (e.g., '#ff0000').", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "createdAt", "req": true, "short": "The time at which the entity was created.", "type": "`$ANY`", "index$": 2 }, { "active": true, "name": "description", "req": false, "short": "An optional description explaining what this status represents in the customer lifecycle.", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "displayName", "req": true, "short": "The user-facing display name of the status shown in the UI.", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "id", "req": true, "short": "The unique identifier of the entity.", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "name", "req": true, "short": "The internal name of the status.", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "position", "req": true, "short": "The sort position of the status in the workspace's customer lifecycle flow.", "type": "`$NUMBER`", "index$": 7 }, { "active": true, "name": "updatedAt", "req": true, "short": "The last time at which the entity was meaningfully updated.", "type": "`$ANY`", "index$": 8 }], "id": { "field": "id", "name": "id" }, "name": "customer_status", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": {}, "contract": { "id": "POST customerStatusCreate", "json": "{\"field\":{\"args\":[{\"gqltype\":\"CustomerStatusCreateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"CustomerStatusCreateInput\"}],\"deprecated\":false,\"desc\":\"Creates a new customer status.\",\"gqltype\":\"CustomerStatusPayload!\",\"list\":false,\"name\":\"customerStatusCreate\",\"reqd\":true,\"type\":\"CustomerStatusPayload\"},\"invocation\":{\"doc\":\"mutation CustomerStatusCreate($input: CustomerStatusCreateInput!) { customerStatusCreate(input: $input) { status { ...CustomerStatusFields } success } } fragment CustomerStatusFields on CustomerStatus { archivedAt color createdAt description displayName id name position updatedAt }\",\"field\":\"customerStatusCreate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"\",\"gqltype\":\"CustomerStatusCreateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"CustomerStatusCreateInput\":{\"desc\":\"Input for creating a customer status in the workspace's customer lifecycle flow.\",\"fields\":{\"color\":{\"args\":[],\"deprecated\":false,\"desc\":\"The color of the status indicator in the UI, as a HEX string (e.g., '#ff0000').\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"color\",\"reqd\":true,\"type\":\"String\"},\"description\":{\"args\":[],\"deprecated\":false,\"desc\":\"An optional description explaining what this status represents.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"description\",\"reqd\":false,\"type\":\"String\"},\"displayName\":{\"args\":[],\"deprecated\":false,\"desc\":\"The user-facing display name of the status. At least one of name or displayName must be provided.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"displayName\",\"reqd\":false,\"type\":\"String\"},\"id\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier in UUID v4 format. If none is provided, the backend will generate one.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"id\",\"reqd\":false,\"type\":\"String\"},\"name\":{\"args\":[],\"deprecated\":false,\"desc\":\"The internal name of the status. At least one of name or displayName must be provided.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"name\",\"reqd\":false,\"type\":\"String\"},\"position\":{\"args\":[],\"deprecated\":false,\"desc\":\"The sort position of the status in the workspace's customer lifecycle flow. If omitted or colliding, a position is automatically assigned at the end.\",\"gqltype\":\"Float\",\"list\":false,\"name\":\"position\",\"reqd\":false,\"type\":\"Float\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"CustomerStatusCreateInput\"},\"Float\":{\"desc\":\"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Float\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "mutation CustomerStatusCreate($input: CustomerStatusCreateInput!) { customerStatusCreate(input: $input) { status { ...CustomerStatusFields } success } } fragment CustomerStatusFields on CustomerStatus { archivedAt color createdAt description displayName id name position updatedAt }", "field": "customerStatusCreate", "optype": "mutation", "vars": [{ "from": "", "gqltype": "CustomerStatusCreateInput!", "name": "input" }] }, "kind": "graphql", "method": "POST", "orig": "customerStatusCreate", "segments": [], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.data.customerStatusCreate.status`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "after", "orig": "after", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "before", "orig": "before", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "kind": "param", "name": "first", "orig": "first", "reqd": false, "type": "`$INTEGER`", "index$": 2 }, { "active": true, "kind": "param", "name": "include_archived", "orig": "include_archived", "reqd": false, "type": "`$BOOLEAN`", "index$": 3 }, { "active": true, "kind": "param", "name": "last", "orig": "last", "reqd": false, "type": "`$INTEGER`", "index$": 4 }, { "active": true, "kind": "param", "name": "order_by", "orig": "order_by", "reqd": false, "type": "`$ANY`", "index$": 5 }] }, "contract": { "id": "POST customerStatuses", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String\",\"name\":\"after\",\"reqd\":false,\"type\":\"String\"},{\"gqltype\":\"String\",\"name\":\"before\",\"reqd\":false,\"type\":\"String\"},{\"gqltype\":\"Int\",\"name\":\"first\",\"reqd\":false,\"type\":\"Int\"},{\"gqltype\":\"Boolean\",\"name\":\"includeArchived\",\"reqd\":false,\"type\":\"Boolean\"},{\"gqltype\":\"Int\",\"name\":\"last\",\"reqd\":false,\"type\":\"Int\"},{\"gqltype\":\"PaginationOrderBy\",\"name\":\"orderBy\",\"reqd\":false,\"type\":\"PaginationOrderBy\"}],\"deprecated\":false,\"desc\":\"All customer statuses defined in the workspace.\",\"gqltype\":\"CustomerStatusConnection!\",\"list\":false,\"name\":\"customerStatuses\",\"reqd\":true,\"type\":\"CustomerStatusConnection\"},\"invocation\":{\"doc\":\"query CustomerStatusList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { customerStatuses(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...CustomerStatusFields } pageInfo { endCursor hasNextPage } } } fragment CustomerStatusFields on CustomerStatus { archivedAt color createdAt description displayName id name position updatedAt }\",\"field\":\"customerStatuses\",\"optype\":\"query\",\"page\":{\"cursor\":\"pageInfo.endCursor\",\"more\":\"pageInfo.hasNextPage\",\"nodes\":\"nodes\",\"style\":\"relay\"},\"vars\":[{\"from\":\"after\",\"gqltype\":\"String\",\"name\":\"after\"},{\"from\":\"before\",\"gqltype\":\"String\",\"name\":\"before\"},{\"from\":\"first\",\"gqltype\":\"Int\",\"name\":\"first\"},{\"from\":\"includeArchived\",\"gqltype\":\"Boolean\",\"name\":\"includeArchived\"},{\"from\":\"last\",\"gqltype\":\"Int\",\"name\":\"last\"},{\"from\":\"orderBy\",\"gqltype\":\"PaginationOrderBy\",\"name\":\"orderBy\"}]},\"protocol\":\"graphql\",\"types\":{\"Boolean\":{\"desc\":\"The `Boolean` scalar type represents `true` or `false`.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Boolean\"},\"Int\":{\"desc\":\"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Int\"},\"PaginationOrderBy\":{\"desc\":\"By which field should the pagination order by\",\"fields\":{},\"kind\":\"ENUM\",\"name\":\"PaginationOrderBy\",\"values\":[\"createdAt\",\"updatedAt\"]},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "query CustomerStatusList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { customerStatuses(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...CustomerStatusFields } pageInfo { endCursor hasNextPage } } } fragment CustomerStatusFields on CustomerStatus { archivedAt color createdAt description displayName id name position updatedAt }", "field": "customerStatuses", "optype": "query", "page": { "cursor": "pageInfo.endCursor", "more": "pageInfo.hasNextPage", "nodes": "nodes", "style": "relay" }, "vars": [{ "from": "after", "gqltype": "String", "name": "after" }, { "from": "before", "gqltype": "String", "name": "before" }, { "from": "first", "gqltype": "Int", "name": "first" }, { "from": "includeArchived", "gqltype": "Boolean", "name": "includeArchived" }, { "from": "last", "gqltype": "Int", "name": "last" }, { "from": "orderBy", "gqltype": "PaginationOrderBy", "name": "orderBy" }] }, "kind": "graphql", "method": "POST", "orig": "customerStatuses", "segments": [], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.data.customerStatuses.nodes`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST customerStatus", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"One specific customer status.\",\"gqltype\":\"CustomerStatus!\",\"list\":false,\"name\":\"customerStatus\",\"reqd\":true,\"type\":\"CustomerStatus\"},\"invocation\":{\"doc\":\"query CustomerStatusLoad($id: String!) { customerStatus(id: $id) { ...CustomerStatusFields } } fragment CustomerStatusFields on CustomerStatus { archivedAt color createdAt description displayName id name position updatedAt }\",\"field\":\"customerStatus\",\"optype\":\"query\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "query CustomerStatusLoad($id: String!) { customerStatus(id: $id) { ...CustomerStatusFields } } fragment CustomerStatusFields on CustomerStatus { archivedAt color createdAt description displayName id name position updatedAt }", "field": "customerStatus", "optype": "query", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "kind": "graphql", "method": "POST", "orig": "customerStatus", "segments": [], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.data.customerStatus`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST customerStatusDelete", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"Deletes a customer status. Cannot delete the last remaining status in a workspace, and the status must not be in use by any customers.\",\"gqltype\":\"DeletePayload!\",\"list\":false,\"name\":\"customerStatusDelete\",\"reqd\":true,\"type\":\"DeletePayload\"},\"invocation\":{\"doc\":\"mutation CustomerStatusRemove($id: String!) { customerStatusDelete(id: $id) { entityId lastSyncId success } }\",\"field\":\"customerStatusDelete\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "mutation CustomerStatusRemove($id: String!) { customerStatusDelete(id: $id) { entityId lastSyncId success } }", "field": "customerStatusDelete", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "kind": "graphql", "method": "POST", "orig": "customerStatusDelete", "segments": [], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.data.customerStatusDelete`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST customerStatusUpdate", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"},{\"gqltype\":\"CustomerStatusUpdateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"CustomerStatusUpdateInput\"}],\"deprecated\":false,\"desc\":\"Updates a customer status.\",\"gqltype\":\"CustomerStatusPayload!\",\"list\":false,\"name\":\"customerStatusUpdate\",\"reqd\":true,\"type\":\"CustomerStatusPayload\"},\"invocation\":{\"doc\":\"mutation CustomerStatusUpdate($id: String!, $input: CustomerStatusUpdateInput!) { customerStatusUpdate(id: $id, input: $input) { status { ...CustomerStatusFields } success } } fragment CustomerStatusFields on CustomerStatus { archivedAt color createdAt description displayName id name position updatedAt }\",\"field\":\"customerStatusUpdate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"},{\"from\":\"\",\"gqltype\":\"CustomerStatusUpdateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"CustomerStatusUpdateInput\":{\"desc\":\"Input for updating an existing customer status.\",\"fields\":{\"color\":{\"args\":[],\"deprecated\":false,\"desc\":\"The updated color of the status indicator in the UI, as a HEX string.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"color\",\"reqd\":false,\"type\":\"String\"},\"description\":{\"args\":[],\"deprecated\":false,\"desc\":\"The updated description of the status.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"description\",\"reqd\":false,\"type\":\"String\"},\"displayName\":{\"args\":[],\"deprecated\":false,\"desc\":\"The updated user-facing display name of the status.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"displayName\",\"reqd\":false,\"type\":\"String\"},\"name\":{\"args\":[],\"deprecated\":false,\"desc\":\"The updated internal name of the status.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"name\",\"reqd\":false,\"type\":\"String\"},\"position\":{\"args\":[],\"deprecated\":false,\"desc\":\"The updated sort position of the status in the workspace's customer lifecycle flow.\",\"gqltype\":\"Float\",\"list\":false,\"name\":\"position\",\"reqd\":false,\"type\":\"Float\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"CustomerStatusUpdateInput\"},\"Float\":{\"desc\":\"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Float\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "mutation CustomerStatusUpdate($id: String!, $input: CustomerStatusUpdateInput!) { customerStatusUpdate(id: $id, input: $input) { status { ...CustomerStatusFields } success } } fragment CustomerStatusFields on CustomerStatus { archivedAt color createdAt description displayName id name position updatedAt }", "field": "customerStatusUpdate", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }, { "from": "", "gqltype": "CustomerStatusUpdateInput!", "name": "input" }] }, "kind": "graphql", "method": "POST", "orig": "customerStatusUpdate", "segments": [], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.data.customerStatusUpdate.status`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "customer_status", "name__orig": "customer_status", "Name": "CustomerStatus", "name_": "customer_status", "name-": "customer-status", "NAME": "CUSTOMER_STATUS", "index$": 16 }, { "active": true, "entity": "customer_status", "key$": "BasicCustomerStatusFlow", "kind": "basic", "name": "BasicCustomerStatusFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "customer_status_ref01" }, "match": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": {}, "match": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "customer_status_ref01" } }], "index$": 1 }, { "active": true, "data": {}, "input": { "ref": "customer_status_ref01", "srcdatavar": "customer_status_ref01_data", "suffix": "_up0", "textfield": "color" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-customer_status_ref01" } }], "valid": [], "index$": 2 }, { "active": true, "data": {}, "input": { "ref": "customer_status_ref01", "srcdatavar": "customer_status_ref01_data", "suffix": "_dt0" }, "match": { "id": "customer_status01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-customer_status_ref01" } }], "index$": 3 }, { "active": true, "data": {}, "input": { "ref": "customer_status_ref01", "suffix": "_rm0" }, "match": { "id": "customer_status01" }, "op": "remove", "spec": [], "valid": [], "index$": 4 }, { "active": true, "data": {}, "input": { "suffix": "_rt0" }, "match": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemNotExists", "def": { "ref": "customer_status_ref01" } }], "index$": 5 }] }, 'CustomerStatus');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const customer_status_ref01_ent = client.CustomerStatus();
        let customer_status_ref01_data = setup.data.new.customer_status['customer_status_ref01'];
        customer_status_ref01_data['after'] = setup.idmap['after01'];
        customer_status_ref01_data['before'] = setup.idmap['before01'];
        customer_status_ref01_data['first'] = setup.idmap['first01'];
        customer_status_ref01_data['include_archived'] = setup.idmap['include_archived01'];
        customer_status_ref01_data['last'] = setup.idmap['last01'];
        customer_status_ref01_data['order_by'] = setup.idmap['order_by01'];
        customer_status_ref01_data = (await customer_status_ref01_ent.create(customer_status_ref01_data)).data();
        (0, node_assert_1.default)(null != customer_status_ref01_data.id);
        // LIST
        const customer_status_ref01_match = {};
        customer_status_ref01_match['after'] = setup.idmap['after01'];
        customer_status_ref01_match['before'] = setup.idmap['before01'];
        customer_status_ref01_match['first'] = setup.idmap['first01'];
        customer_status_ref01_match['include_archived'] = setup.idmap['include_archived01'];
        customer_status_ref01_match['last'] = setup.idmap['last01'];
        customer_status_ref01_match['order_by'] = setup.idmap['order_by01'];
        const customer_status_ref01_list = (await customer_status_ref01_ent.list(customer_status_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(customer_status_ref01_list, { id: customer_status_ref01_data.id })));
        // UPDATE
        const customer_status_ref01_data_up0 = {};
        customer_status_ref01_data_up0.id = customer_status_ref01_data.id;
        const customer_status_ref01_markdef_up0 = { name: 'color', value: 'Mark01-customer_status_ref01_' + setup.now };
        customer_status_ref01_data_up0[customer_status_ref01_markdef_up0.name] = customer_status_ref01_markdef_up0.value;
        const customer_status_ref01_resdata_up0 = (await customer_status_ref01_ent.update(customer_status_ref01_data_up0)).data();
        (0, node_assert_1.default)(customer_status_ref01_resdata_up0.id === customer_status_ref01_data_up0.id);
        (0, node_assert_1.default)(customer_status_ref01_resdata_up0[customer_status_ref01_markdef_up0.name] === customer_status_ref01_markdef_up0.value);
        // LOAD
        const customer_status_ref01_match_dt0 = {};
        customer_status_ref01_match_dt0.id = customer_status_ref01_data.id;
        const customer_status_ref01_data_dt0 = (await customer_status_ref01_ent.load(customer_status_ref01_match_dt0)).data();
        (0, node_assert_1.default)(customer_status_ref01_data_dt0.id === customer_status_ref01_data.id);
        // REMOVE
        const customer_status_ref01_match_rm0 = { id: customer_status_ref01_data.id };
        await customer_status_ref01_ent.remove(customer_status_ref01_match_rm0);
        // LIST
        const customer_status_ref01_match_rt0 = {};
        customer_status_ref01_match_rt0['after'] = setup.idmap['after01'];
        customer_status_ref01_match_rt0['before'] = setup.idmap['before01'];
        customer_status_ref01_match_rt0['first'] = setup.idmap['first01'];
        customer_status_ref01_match_rt0['include_archived'] = setup.idmap['include_archived01'];
        customer_status_ref01_match_rt0['last'] = setup.idmap['last01'];
        customer_status_ref01_match_rt0['order_by'] = setup.idmap['order_by01'];
        const customer_status_ref01_list_rt0 = (await customer_status_ref01_ent.list(customer_status_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(customer_status_ref01_list_rt0, { id: customer_status_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/customer_status/CustomerStatusTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['customer_status01', 'customer_status02', 'customer_status03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_CUSTOMER_STATUS_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_CUSTOMER_STATUS_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_CUSTOMER_STATUS_ENTID'];
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
//# sourceMappingURL=CustomerStatusEntity.test.js.map