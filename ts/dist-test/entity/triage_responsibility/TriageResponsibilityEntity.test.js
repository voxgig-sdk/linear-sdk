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
(0, node_test_1.describe)('TriageResponsibilityEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.TriageResponsibility();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'triage_responsibility.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "action", "req": true, "short": "The action to take when an issue is added to triage.", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "archivedAt", "req": false, "short": "The time at which the entity was archived.", "type": "`$ANY`", "index$": 1 }, { "active": true, "name": "createdAt", "req": true, "short": "The time at which the entity was created.", "type": "`$ANY`", "index$": 2 }, { "active": true, "name": "currentUser", "req": false, "short": "The user currently responsible for triage.", "type": "`$OBJECT`", "index$": 3 }, { "active": true, "name": "id", "req": true, "short": "The unique identifier of the entity.", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "team", "req": false, "short": "The team to which the triage responsibility belongs to.", "type": "`$OBJECT`", "index$": 5 }, { "active": true, "name": "timeSchedule", "req": false, "short": "The time schedule used for scheduling.", "type": "`$OBJECT`", "index$": 6 }, { "active": true, "name": "updatedAt", "req": true, "short": "The last time at which the entity was meaningfully updated.", "type": "`$ANY`", "index$": 7 }], "id": { "field": "id", "name": "id" }, "name": "triage_responsibility", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": {}, "contract": { "id": "POST triageResponsibilityCreate", "json": "{\"field\":{\"args\":[{\"gqltype\":\"TriageResponsibilityCreateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"TriageResponsibilityCreateInput\"}],\"deprecated\":false,\"desc\":\"Creates a new triage responsibility.\",\"gqltype\":\"TriageResponsibilityPayload!\",\"list\":false,\"name\":\"triageResponsibilityCreate\",\"reqd\":true,\"type\":\"TriageResponsibilityPayload\"},\"invocation\":{\"doc\":\"mutation TriageResponsibilityCreate($input: TriageResponsibilityCreateInput!) { triageResponsibilityCreate(input: $input) { triageResponsibility { ...TriageResponsibilityFields } success } } fragment TriageResponsibilityFields on TriageResponsibility { action archivedAt createdAt currentUser { id } id team { id } timeSchedule { id } updatedAt }\",\"field\":\"triageResponsibilityCreate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"\",\"gqltype\":\"TriageResponsibilityCreateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"Int\":{\"desc\":\"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Int\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"},\"TriageResponsibilityCreateInput\":{\"desc\":\"Input for creating a new triage responsibility.\",\"fields\":{\"action\":{\"args\":[],\"deprecated\":false,\"desc\":\"The action to take when an issue is added to triage.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"action\",\"reqd\":true,\"type\":\"String\"},\"id\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier in UUID v4 format. If none is provided, the backend will generate one.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"id\",\"reqd\":false,\"type\":\"String\"},\"manualSelection\":{\"args\":[],\"deprecated\":false,\"desc\":\"The manual selection of users responsible for triage.\",\"gqltype\":\"TriageResponsibilityManualSelectionInput\",\"list\":false,\"name\":\"manualSelection\",\"reqd\":false,\"type\":\"TriageResponsibilityManualSelectionInput\"},\"teamId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the team associated with the triage responsibility.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"teamId\",\"reqd\":true,\"type\":\"String\"},\"timeScheduleId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the time schedule used for scheduling triage responsibility\",\"gqltype\":\"String\",\"list\":false,\"name\":\"timeScheduleId\",\"reqd\":false,\"type\":\"String\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"TriageResponsibilityCreateInput\"},\"TriageResponsibilityManualSelectionInput\":{\"desc\":\"Manual triage responsibility using a set of users.\",\"fields\":{\"assignmentIndex\":{\"args\":[],\"deprecated\":false,\"desc\":\"[Internal] The index of the current userId used for the assign action when having more than one user.\",\"gqltype\":\"Int\",\"list\":false,\"name\":\"assignmentIndex\",\"reqd\":false,\"type\":\"Int\"},\"userIds\":{\"args\":[],\"deprecated\":false,\"desc\":\"The set of users responsible for triage.\",\"gqltype\":\"[String!]!\",\"list\":true,\"name\":\"userIds\",\"reqd\":true,\"type\":\"String\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"TriageResponsibilityManualSelectionInput\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "mutation TriageResponsibilityCreate($input: TriageResponsibilityCreateInput!) { triageResponsibilityCreate(input: $input) { triageResponsibility { ...TriageResponsibilityFields } success } } fragment TriageResponsibilityFields on TriageResponsibility { action archivedAt createdAt currentUser { id } id team { id } timeSchedule { id } updatedAt }", "field": "triageResponsibilityCreate", "optype": "mutation", "vars": [{ "from": "", "gqltype": "TriageResponsibilityCreateInput!", "name": "input" }] }, "kind": "graphql", "method": "POST", "orig": "triageResponsibilityCreate", "segments": [], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.data.triageResponsibilityCreate.triageResponsibility`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "after", "orig": "after", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "before", "orig": "before", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "kind": "param", "name": "first", "orig": "first", "reqd": false, "type": "`$INTEGER`", "index$": 2 }, { "active": true, "kind": "param", "name": "include_archived", "orig": "include_archived", "reqd": false, "type": "`$BOOLEAN`", "index$": 3 }, { "active": true, "kind": "param", "name": "last", "orig": "last", "reqd": false, "type": "`$INTEGER`", "index$": 4 }, { "active": true, "kind": "param", "name": "order_by", "orig": "order_by", "reqd": false, "type": "`$ANY`", "index$": 5 }] }, "contract": { "id": "POST triageResponsibilities", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String\",\"name\":\"after\",\"reqd\":false,\"type\":\"String\"},{\"gqltype\":\"String\",\"name\":\"before\",\"reqd\":false,\"type\":\"String\"},{\"gqltype\":\"Int\",\"name\":\"first\",\"reqd\":false,\"type\":\"Int\"},{\"gqltype\":\"Boolean\",\"name\":\"includeArchived\",\"reqd\":false,\"type\":\"Boolean\"},{\"gqltype\":\"Int\",\"name\":\"last\",\"reqd\":false,\"type\":\"Int\"},{\"gqltype\":\"PaginationOrderBy\",\"name\":\"orderBy\",\"reqd\":false,\"type\":\"PaginationOrderBy\"}],\"deprecated\":false,\"desc\":\"All triage responsibilities.\",\"gqltype\":\"TriageResponsibilityConnection!\",\"list\":false,\"name\":\"triageResponsibilities\",\"reqd\":true,\"type\":\"TriageResponsibilityConnection\"},\"invocation\":{\"doc\":\"query TriageResponsibilityList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { triageResponsibilities(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...TriageResponsibilityFields } pageInfo { endCursor hasNextPage } } } fragment TriageResponsibilityFields on TriageResponsibility { action archivedAt createdAt currentUser { id } id team { id } timeSchedule { id } updatedAt }\",\"field\":\"triageResponsibilities\",\"optype\":\"query\",\"page\":{\"cursor\":\"pageInfo.endCursor\",\"more\":\"pageInfo.hasNextPage\",\"nodes\":\"nodes\",\"style\":\"relay\"},\"vars\":[{\"from\":\"after\",\"gqltype\":\"String\",\"name\":\"after\"},{\"from\":\"before\",\"gqltype\":\"String\",\"name\":\"before\"},{\"from\":\"first\",\"gqltype\":\"Int\",\"name\":\"first\"},{\"from\":\"includeArchived\",\"gqltype\":\"Boolean\",\"name\":\"includeArchived\"},{\"from\":\"last\",\"gqltype\":\"Int\",\"name\":\"last\"},{\"from\":\"orderBy\",\"gqltype\":\"PaginationOrderBy\",\"name\":\"orderBy\"}]},\"protocol\":\"graphql\",\"types\":{\"Boolean\":{\"desc\":\"The `Boolean` scalar type represents `true` or `false`.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Boolean\"},\"Int\":{\"desc\":\"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Int\"},\"PaginationOrderBy\":{\"desc\":\"By which field should the pagination order by\",\"fields\":{},\"kind\":\"ENUM\",\"name\":\"PaginationOrderBy\",\"values\":[\"createdAt\",\"updatedAt\"]},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "query TriageResponsibilityList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { triageResponsibilities(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...TriageResponsibilityFields } pageInfo { endCursor hasNextPage } } } fragment TriageResponsibilityFields on TriageResponsibility { action archivedAt createdAt currentUser { id } id team { id } timeSchedule { id } updatedAt }", "field": "triageResponsibilities", "optype": "query", "page": { "cursor": "pageInfo.endCursor", "more": "pageInfo.hasNextPage", "nodes": "nodes", "style": "relay" }, "vars": [{ "from": "after", "gqltype": "String", "name": "after" }, { "from": "before", "gqltype": "String", "name": "before" }, { "from": "first", "gqltype": "Int", "name": "first" }, { "from": "includeArchived", "gqltype": "Boolean", "name": "includeArchived" }, { "from": "last", "gqltype": "Int", "name": "last" }, { "from": "orderBy", "gqltype": "PaginationOrderBy", "name": "orderBy" }] }, "kind": "graphql", "method": "POST", "orig": "triageResponsibilities", "segments": [], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.data.triageResponsibilities.nodes`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST triageResponsibility", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"A specific triage responsibility.\",\"gqltype\":\"TriageResponsibility!\",\"list\":false,\"name\":\"triageResponsibility\",\"reqd\":true,\"type\":\"TriageResponsibility\"},\"invocation\":{\"doc\":\"query TriageResponsibilityLoad($id: String!) { triageResponsibility(id: $id) { ...TriageResponsibilityFields } } fragment TriageResponsibilityFields on TriageResponsibility { action archivedAt createdAt currentUser { id } id team { id } timeSchedule { id } updatedAt }\",\"field\":\"triageResponsibility\",\"optype\":\"query\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "query TriageResponsibilityLoad($id: String!) { triageResponsibility(id: $id) { ...TriageResponsibilityFields } } fragment TriageResponsibilityFields on TriageResponsibility { action archivedAt createdAt currentUser { id } id team { id } timeSchedule { id } updatedAt }", "field": "triageResponsibility", "optype": "query", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "kind": "graphql", "method": "POST", "orig": "triageResponsibility", "segments": [], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.data.triageResponsibility`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST triageResponsibilityDelete", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"Deletes a triage responsibility.\",\"gqltype\":\"DeletePayload!\",\"list\":false,\"name\":\"triageResponsibilityDelete\",\"reqd\":true,\"type\":\"DeletePayload\"},\"invocation\":{\"doc\":\"mutation TriageResponsibilityRemove($id: String!) { triageResponsibilityDelete(id: $id) { entityId lastSyncId success } }\",\"field\":\"triageResponsibilityDelete\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "mutation TriageResponsibilityRemove($id: String!) { triageResponsibilityDelete(id: $id) { entityId lastSyncId success } }", "field": "triageResponsibilityDelete", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "kind": "graphql", "method": "POST", "orig": "triageResponsibilityDelete", "segments": [], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.data.triageResponsibilityDelete`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST triageResponsibilityUpdate", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"},{\"gqltype\":\"TriageResponsibilityUpdateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"TriageResponsibilityUpdateInput\"}],\"deprecated\":false,\"desc\":\"Updates an existing triage responsibility.\",\"gqltype\":\"TriageResponsibilityPayload!\",\"list\":false,\"name\":\"triageResponsibilityUpdate\",\"reqd\":true,\"type\":\"TriageResponsibilityPayload\"},\"invocation\":{\"doc\":\"mutation TriageResponsibilityUpdate($id: String!, $input: TriageResponsibilityUpdateInput!) { triageResponsibilityUpdate(id: $id, input: $input) { triageResponsibility { ...TriageResponsibilityFields } success } } fragment TriageResponsibilityFields on TriageResponsibility { action archivedAt createdAt currentUser { id } id team { id } timeSchedule { id } updatedAt }\",\"field\":\"triageResponsibilityUpdate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"},{\"from\":\"\",\"gqltype\":\"TriageResponsibilityUpdateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"Int\":{\"desc\":\"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Int\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"},\"TriageResponsibilityManualSelectionInput\":{\"desc\":\"Manual triage responsibility using a set of users.\",\"fields\":{\"assignmentIndex\":{\"args\":[],\"deprecated\":false,\"desc\":\"[Internal] The index of the current userId used for the assign action when having more than one user.\",\"gqltype\":\"Int\",\"list\":false,\"name\":\"assignmentIndex\",\"reqd\":false,\"type\":\"Int\"},\"userIds\":{\"args\":[],\"deprecated\":false,\"desc\":\"The set of users responsible for triage.\",\"gqltype\":\"[String!]!\",\"list\":true,\"name\":\"userIds\",\"reqd\":true,\"type\":\"String\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"TriageResponsibilityManualSelectionInput\"},\"TriageResponsibilityUpdateInput\":{\"desc\":\"Input for updating an existing triage responsibility.\",\"fields\":{\"action\":{\"args\":[],\"deprecated\":false,\"desc\":\"The action to take when an issue is added to triage.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"action\",\"reqd\":false,\"type\":\"String\"},\"manualSelection\":{\"args\":[],\"deprecated\":false,\"desc\":\"The manual selection of users responsible for triage.\",\"gqltype\":\"TriageResponsibilityManualSelectionInput\",\"list\":false,\"name\":\"manualSelection\",\"reqd\":false,\"type\":\"TriageResponsibilityManualSelectionInput\"},\"timeScheduleId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the time schedule used for scheduling triage responsibility.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"timeScheduleId\",\"reqd\":false,\"type\":\"String\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"TriageResponsibilityUpdateInput\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "mutation TriageResponsibilityUpdate($id: String!, $input: TriageResponsibilityUpdateInput!) { triageResponsibilityUpdate(id: $id, input: $input) { triageResponsibility { ...TriageResponsibilityFields } success } } fragment TriageResponsibilityFields on TriageResponsibility { action archivedAt createdAt currentUser { id } id team { id } timeSchedule { id } updatedAt }", "field": "triageResponsibilityUpdate", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }, { "from": "", "gqltype": "TriageResponsibilityUpdateInput!", "name": "input" }] }, "kind": "graphql", "method": "POST", "orig": "triageResponsibilityUpdate", "segments": [], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.data.triageResponsibilityUpdate.triageResponsibility`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "triage_responsibility", "name__orig": "triage_responsibility", "Name": "TriageResponsibility", "name_": "triage_responsibility", "name-": "triage-responsibility", "NAME": "TRIAGE_RESPONSIBILITY", "index$": 78 }, { "active": true, "entity": "triage_responsibility", "key$": "BasicTriageResponsibilityFlow", "kind": "basic", "name": "BasicTriageResponsibilityFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "triage_responsibility_ref01" }, "match": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": {}, "match": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "triage_responsibility_ref01" } }], "index$": 1 }, { "active": true, "data": {}, "input": { "ref": "triage_responsibility_ref01", "srcdatavar": "triage_responsibility_ref01_data", "suffix": "_up0", "textfield": "action" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-triage_responsibility_ref01" } }], "valid": [], "index$": 2 }, { "active": true, "data": {}, "input": { "ref": "triage_responsibility_ref01", "srcdatavar": "triage_responsibility_ref01_data", "suffix": "_dt0" }, "match": { "id": "triage_responsibility01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-triage_responsibility_ref01" } }], "index$": 3 }, { "active": true, "data": {}, "input": { "ref": "triage_responsibility_ref01", "suffix": "_rm0" }, "match": { "id": "triage_responsibility01" }, "op": "remove", "spec": [], "valid": [], "index$": 4 }, { "active": true, "data": {}, "input": { "suffix": "_rt0" }, "match": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemNotExists", "def": { "ref": "triage_responsibility_ref01" } }], "index$": 5 }] }, 'TriageResponsibility');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const triage_responsibility_ref01_ent = client.TriageResponsibility();
        let triage_responsibility_ref01_data = setup.data.new.triage_responsibility['triage_responsibility_ref01'];
        triage_responsibility_ref01_data['after'] = setup.idmap['after01'];
        triage_responsibility_ref01_data['before'] = setup.idmap['before01'];
        triage_responsibility_ref01_data['first'] = setup.idmap['first01'];
        triage_responsibility_ref01_data['include_archived'] = setup.idmap['include_archived01'];
        triage_responsibility_ref01_data['last'] = setup.idmap['last01'];
        triage_responsibility_ref01_data['order_by'] = setup.idmap['order_by01'];
        triage_responsibility_ref01_data = (await triage_responsibility_ref01_ent.create(triage_responsibility_ref01_data)).data();
        (0, node_assert_1.default)(null != triage_responsibility_ref01_data.id);
        // LIST
        const triage_responsibility_ref01_match = {};
        triage_responsibility_ref01_match['after'] = setup.idmap['after01'];
        triage_responsibility_ref01_match['before'] = setup.idmap['before01'];
        triage_responsibility_ref01_match['first'] = setup.idmap['first01'];
        triage_responsibility_ref01_match['include_archived'] = setup.idmap['include_archived01'];
        triage_responsibility_ref01_match['last'] = setup.idmap['last01'];
        triage_responsibility_ref01_match['order_by'] = setup.idmap['order_by01'];
        const triage_responsibility_ref01_list = (await triage_responsibility_ref01_ent.list(triage_responsibility_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(triage_responsibility_ref01_list, { id: triage_responsibility_ref01_data.id })));
        // UPDATE
        const triage_responsibility_ref01_data_up0 = {};
        triage_responsibility_ref01_data_up0.id = triage_responsibility_ref01_data.id;
        const triage_responsibility_ref01_markdef_up0 = { name: 'action', value: 'Mark01-triage_responsibility_ref01_' + setup.now };
        triage_responsibility_ref01_data_up0[triage_responsibility_ref01_markdef_up0.name] = triage_responsibility_ref01_markdef_up0.value;
        const triage_responsibility_ref01_resdata_up0 = (await triage_responsibility_ref01_ent.update(triage_responsibility_ref01_data_up0)).data();
        (0, node_assert_1.default)(triage_responsibility_ref01_resdata_up0.id === triage_responsibility_ref01_data_up0.id);
        (0, node_assert_1.default)(triage_responsibility_ref01_resdata_up0[triage_responsibility_ref01_markdef_up0.name] === triage_responsibility_ref01_markdef_up0.value);
        // LOAD
        const triage_responsibility_ref01_match_dt0 = {};
        triage_responsibility_ref01_match_dt0.id = triage_responsibility_ref01_data.id;
        const triage_responsibility_ref01_data_dt0 = (await triage_responsibility_ref01_ent.load(triage_responsibility_ref01_match_dt0)).data();
        (0, node_assert_1.default)(triage_responsibility_ref01_data_dt0.id === triage_responsibility_ref01_data.id);
        // REMOVE
        const triage_responsibility_ref01_match_rm0 = { id: triage_responsibility_ref01_data.id };
        await triage_responsibility_ref01_ent.remove(triage_responsibility_ref01_match_rm0);
        // LIST
        const triage_responsibility_ref01_match_rt0 = {};
        triage_responsibility_ref01_match_rt0['after'] = setup.idmap['after01'];
        triage_responsibility_ref01_match_rt0['before'] = setup.idmap['before01'];
        triage_responsibility_ref01_match_rt0['first'] = setup.idmap['first01'];
        triage_responsibility_ref01_match_rt0['include_archived'] = setup.idmap['include_archived01'];
        triage_responsibility_ref01_match_rt0['last'] = setup.idmap['last01'];
        triage_responsibility_ref01_match_rt0['order_by'] = setup.idmap['order_by01'];
        const triage_responsibility_ref01_list_rt0 = (await triage_responsibility_ref01_ent.list(triage_responsibility_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(triage_responsibility_ref01_list_rt0, { id: triage_responsibility_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/triage_responsibility/TriageResponsibilityTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['triage_responsibility01', 'triage_responsibility02', 'triage_responsibility03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_TRIAGE_RESPONSIBILITY_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_TRIAGE_RESPONSIBILITY_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_TRIAGE_RESPONSIBILITY_ENTID'];
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
//# sourceMappingURL=TriageResponsibilityEntity.test.js.map