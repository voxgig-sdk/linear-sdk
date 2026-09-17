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
(0, node_test_1.describe)('EmojiEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.Emoji();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['create', 'list', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'emoji.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "archivedAt", "req": false, "short": "The time at which the entity was archived.", "type": "`$ANY`", "index$": 0 }, { "active": true, "name": "createdAt", "req": true, "short": "The time at which the entity was created.", "type": "`$ANY`", "index$": 1 }, { "active": true, "name": "creator", "req": false, "short": "The user who created the emoji.", "type": "`$OBJECT`", "index$": 2 }, { "active": true, "name": "id", "req": true, "short": "The unique identifier of the entity.", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "name", "req": true, "short": "The unique name of the custom emoji within the workspace.", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "organization", "req": false, "short": "The workspace that the emoji belongs to.", "type": "`$OBJECT`", "index$": 5 }, { "active": true, "name": "source", "req": true, "short": "The source of the emoji, indicating how it was created (e.g., uploaded by a user or imported).", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "updatedAt", "req": true, "short": "The last time at which the entity was meaningfully updated.", "type": "`$ANY`", "index$": 7 }, { "active": true, "name": "url", "req": true, "short": "The URL of the uploaded image for this custom emoji.", "type": "`$STRING`", "index$": 8 }], "id": { "field": "id", "name": "id" }, "name": "emoji", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": {}, "contract": { "id": "POST emojiCreate", "json": "{\"field\":{\"args\":[{\"gqltype\":\"EmojiCreateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"EmojiCreateInput\"}],\"deprecated\":false,\"desc\":\"Creates a custom emoji.\",\"gqltype\":\"EmojiPayload!\",\"list\":false,\"name\":\"emojiCreate\",\"reqd\":true,\"type\":\"EmojiPayload\"},\"invocation\":{\"doc\":\"mutation EmojiCreate($input: EmojiCreateInput!) { emojiCreate(input: $input) { emoji { ...EmojiFields } success } } fragment EmojiFields on Emoji { archivedAt createdAt creator { id } id name organization { id } source updatedAt url }\",\"field\":\"emojiCreate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"\",\"gqltype\":\"EmojiCreateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"EmojiCreateInput\":{\"desc\":\"Input for creating a new custom emoji.\",\"fields\":{\"id\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier in UUID v4 format. If none is provided, the backend will generate one.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"id\",\"reqd\":false,\"type\":\"String\"},\"name\":{\"args\":[],\"deprecated\":false,\"desc\":\"The name of the custom emoji.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"name\",\"reqd\":true,\"type\":\"String\"},\"url\":{\"args\":[],\"deprecated\":false,\"desc\":\"The URL for the emoji.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"url\",\"reqd\":true,\"type\":\"String\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"EmojiCreateInput\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "mutation EmojiCreate($input: EmojiCreateInput!) { emojiCreate(input: $input) { emoji { ...EmojiFields } success } } fragment EmojiFields on Emoji { archivedAt createdAt creator { id } id name organization { id } source updatedAt url }", "field": "emojiCreate", "optype": "mutation", "vars": [{ "from": "", "gqltype": "EmojiCreateInput!", "name": "input" }] }, "kind": "graphql", "method": "POST", "orig": "emojiCreate", "segments": [], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.data.emojiCreate.emoji`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "after", "orig": "after", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "before", "orig": "before", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "kind": "param", "name": "first", "orig": "first", "reqd": false, "type": "`$INTEGER`", "index$": 2 }, { "active": true, "kind": "param", "name": "include_archived", "orig": "include_archived", "reqd": false, "type": "`$BOOLEAN`", "index$": 3 }, { "active": true, "kind": "param", "name": "last", "orig": "last", "reqd": false, "type": "`$INTEGER`", "index$": 4 }, { "active": true, "kind": "param", "name": "order_by", "orig": "order_by", "reqd": false, "type": "`$ANY`", "index$": 5 }] }, "contract": { "id": "POST emojis", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String\",\"name\":\"after\",\"reqd\":false,\"type\":\"String\"},{\"gqltype\":\"String\",\"name\":\"before\",\"reqd\":false,\"type\":\"String\"},{\"gqltype\":\"EmojiFilter\",\"name\":\"filter\",\"reqd\":false,\"type\":\"EmojiFilter\"},{\"gqltype\":\"Int\",\"name\":\"first\",\"reqd\":false,\"type\":\"Int\"},{\"gqltype\":\"Boolean\",\"name\":\"includeArchived\",\"reqd\":false,\"type\":\"Boolean\"},{\"gqltype\":\"Int\",\"name\":\"last\",\"reqd\":false,\"type\":\"Int\"},{\"gqltype\":\"PaginationOrderBy\",\"name\":\"orderBy\",\"reqd\":false,\"type\":\"PaginationOrderBy\"},{\"gqltype\":\"[EmojiSortInput!]\",\"name\":\"sort\",\"reqd\":false,\"type\":\"EmojiSortInput\"}],\"deprecated\":false,\"desc\":\"All custom emojis in the workspace.\",\"gqltype\":\"EmojiConnection!\",\"list\":false,\"name\":\"emojis\",\"reqd\":true,\"type\":\"EmojiConnection\"},\"invocation\":{\"doc\":\"query EmojiList($after: String, $before: String, $filter: EmojiFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy, $sort: [EmojiSortInput!]) { emojis(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy, sort: $sort) { nodes { ...EmojiFields } pageInfo { endCursor hasNextPage } } } fragment EmojiFields on Emoji { archivedAt createdAt creator { id } id name organization { id } source updatedAt url }\",\"field\":\"emojis\",\"optype\":\"query\",\"page\":{\"cursor\":\"pageInfo.endCursor\",\"more\":\"pageInfo.hasNextPage\",\"nodes\":\"nodes\",\"style\":\"relay\"},\"vars\":[{\"from\":\"after\",\"gqltype\":\"String\",\"name\":\"after\"},{\"from\":\"before\",\"gqltype\":\"String\",\"name\":\"before\"},{\"from\":\"filter\",\"gqltype\":\"EmojiFilter\",\"name\":\"filter\"},{\"from\":\"first\",\"gqltype\":\"Int\",\"name\":\"first\"},{\"from\":\"includeArchived\",\"gqltype\":\"Boolean\",\"name\":\"includeArchived\"},{\"from\":\"last\",\"gqltype\":\"Int\",\"name\":\"last\"},{\"from\":\"orderBy\",\"gqltype\":\"PaginationOrderBy\",\"name\":\"orderBy\"},{\"from\":\"sort\",\"gqltype\":\"[EmojiSortInput!]\",\"name\":\"sort\"}]},\"protocol\":\"graphql\",\"types\":{\"Boolean\":{\"desc\":\"The `Boolean` scalar type represents `true` or `false`.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Boolean\"},\"DateComparator\":{\"desc\":\"Comparator for dates.\",\"fields\":{\"eq\":{\"args\":[],\"deprecated\":false,\"desc\":\"Equals constraint.\",\"gqltype\":\"DateTimeOrDuration\",\"list\":false,\"name\":\"eq\",\"reqd\":false,\"type\":\"DateTimeOrDuration\"},\"gt\":{\"args\":[],\"deprecated\":false,\"desc\":\"Greater-than constraint. Matches any values that are greater than the given value.\",\"gqltype\":\"DateTimeOrDuration\",\"list\":false,\"name\":\"gt\",\"reqd\":false,\"type\":\"DateTimeOrDuration\"},\"gte\":{\"args\":[],\"deprecated\":false,\"desc\":\"Greater-than-or-equal constraint. Matches any values that are greater than or equal to the given value.\",\"gqltype\":\"DateTimeOrDuration\",\"list\":false,\"name\":\"gte\",\"reqd\":false,\"type\":\"DateTimeOrDuration\"},\"in\":{\"args\":[],\"deprecated\":false,\"desc\":\"In-array constraint.\",\"gqltype\":\"[DateTimeOrDuration!]\",\"list\":true,\"name\":\"in\",\"reqd\":false,\"type\":\"DateTimeOrDuration\"},\"lt\":{\"args\":[],\"deprecated\":false,\"desc\":\"Less-than constraint. Matches any values that are less than the given value.\",\"gqltype\":\"DateTimeOrDuration\",\"list\":false,\"name\":\"lt\",\"reqd\":false,\"type\":\"DateTimeOrDuration\"},\"lte\":{\"args\":[],\"deprecated\":false,\"desc\":\"Less-than-or-equal constraint. Matches any values that are less than or equal to the given value.\",\"gqltype\":\"DateTimeOrDuration\",\"list\":false,\"name\":\"lte\",\"reqd\":false,\"type\":\"DateTimeOrDuration\"},\"neq\":{\"args\":[],\"deprecated\":false,\"desc\":\"Not-equals constraint.\",\"gqltype\":\"DateTimeOrDuration\",\"list\":false,\"name\":\"neq\",\"reqd\":false,\"type\":\"DateTimeOrDuration\"},\"nin\":{\"args\":[],\"deprecated\":false,\"desc\":\"Not-in-array constraint.\",\"gqltype\":\"[DateTimeOrDuration!]\",\"list\":true,\"name\":\"nin\",\"reqd\":false,\"type\":\"DateTimeOrDuration\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"DateComparator\"},\"DateTimeOrDuration\":{\"desc\":\"Represents a date and time in ISO 8601 format. Accepts shortcuts like `2021` to represent midnight Fri Jan 01 2021. Also accepts ISO 8601 durations strings which are added to the current date to create the represented date (e.g '-P2W1D' represents the date that was two weeks and 1 day ago)\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"DateTimeOrDuration\"},\"EmojiCreatedAtSort\":{\"desc\":\"Emoji creation date sorting options.\",\"fields\":{\"nulls\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether nulls should be sorted first or last\",\"gqltype\":\"PaginationNulls\",\"list\":false,\"name\":\"nulls\",\"reqd\":false,\"type\":\"PaginationNulls\"},\"order\":{\"args\":[],\"deprecated\":false,\"desc\":\"The order for the individual sort\",\"gqltype\":\"PaginationSortOrder\",\"list\":false,\"name\":\"order\",\"reqd\":false,\"type\":\"PaginationSortOrder\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"EmojiCreatedAtSort\"},\"EmojiFilter\":{\"desc\":\"Custom emoji filtering options.\",\"fields\":{\"and\":{\"args\":[],\"deprecated\":false,\"desc\":\"Compound filters, all of which need to be matched by the emoji.\",\"gqltype\":\"[EmojiFilter!]\",\"list\":true,\"name\":\"and\",\"reqd\":false,\"type\":\"EmojiFilter\"},\"createdAt\":{\"args\":[],\"deprecated\":false,\"desc\":\"Comparator for the created at date.\",\"gqltype\":\"DateComparator\",\"list\":false,\"name\":\"createdAt\",\"reqd\":false,\"type\":\"DateComparator\"},\"id\":{\"args\":[],\"deprecated\":false,\"desc\":\"Comparator for the identifier.\",\"gqltype\":\"IDComparator\",\"list\":false,\"name\":\"id\",\"reqd\":false,\"type\":\"IDComparator\"},\"name\":{\"args\":[],\"deprecated\":false,\"desc\":\"Comparator for the emoji name.\",\"gqltype\":\"StringComparator\",\"list\":false,\"name\":\"name\",\"reqd\":false,\"type\":\"StringComparator\"},\"or\":{\"args\":[],\"deprecated\":false,\"desc\":\"Compound filters, one of which needs to be matched by the emoji.\",\"gqltype\":\"[EmojiFilter!]\",\"list\":true,\"name\":\"or\",\"reqd\":false,\"type\":\"EmojiFilter\"},\"updatedAt\":{\"args\":[],\"deprecated\":false,\"desc\":\"Comparator for the updated at date.\",\"gqltype\":\"DateComparator\",\"list\":false,\"name\":\"updatedAt\",\"reqd\":false,\"type\":\"DateComparator\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"EmojiFilter\"},\"EmojiSortInput\":{\"desc\":\"Custom emoji sorting options.\",\"fields\":{\"createdAt\":{\"args\":[],\"deprecated\":false,\"desc\":\"Sort by emoji creation date.\",\"gqltype\":\"EmojiCreatedAtSort\",\"list\":false,\"name\":\"createdAt\",\"reqd\":false,\"type\":\"EmojiCreatedAtSort\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"EmojiSortInput\"},\"ID\":{\"desc\":\"The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `\\\"4\\\"`) or integer (such as `4`) input value will be accepted as an ID.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"ID\"},\"IDComparator\":{\"desc\":\"Comparator for identifiers.\",\"fields\":{\"eq\":{\"args\":[],\"deprecated\":false,\"desc\":\"Equals constraint.\",\"gqltype\":\"ID\",\"list\":false,\"name\":\"eq\",\"reqd\":false,\"type\":\"ID\"},\"in\":{\"args\":[],\"deprecated\":false,\"desc\":\"In-array constraint.\",\"gqltype\":\"[ID!]\",\"list\":true,\"name\":\"in\",\"reqd\":false,\"type\":\"ID\"},\"neq\":{\"args\":[],\"deprecated\":false,\"desc\":\"Not-equals constraint.\",\"gqltype\":\"ID\",\"list\":false,\"name\":\"neq\",\"reqd\":false,\"type\":\"ID\"},\"nin\":{\"args\":[],\"deprecated\":false,\"desc\":\"Not-in-array constraint.\",\"gqltype\":\"[ID!]\",\"list\":true,\"name\":\"nin\",\"reqd\":false,\"type\":\"ID\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"IDComparator\"},\"Int\":{\"desc\":\"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Int\"},\"PaginationNulls\":{\"desc\":\"How to treat NULL values, whether they should appear first or last\",\"fields\":{},\"kind\":\"ENUM\",\"name\":\"PaginationNulls\",\"values\":[\"first\",\"last\"]},\"PaginationOrderBy\":{\"desc\":\"By which field should the pagination order by\",\"fields\":{},\"kind\":\"ENUM\",\"name\":\"PaginationOrderBy\",\"values\":[\"createdAt\",\"updatedAt\"]},\"PaginationSortOrder\":{\"desc\":\"Whether to sort in ascending or descending order\",\"fields\":{},\"kind\":\"ENUM\",\"name\":\"PaginationSortOrder\",\"values\":[\"Ascending\",\"Descending\"]},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"},\"StringComparator\":{\"desc\":\"Comparator for strings.\",\"fields\":{\"contains\":{\"args\":[],\"deprecated\":false,\"desc\":\"Contains constraint. Matches any values that contain the given string.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"contains\",\"reqd\":false,\"type\":\"String\"},\"containsIgnoreCase\":{\"args\":[],\"deprecated\":false,\"desc\":\"Contains case insensitive constraint. Matches any values that contain the given string case insensitive.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"containsIgnoreCase\",\"reqd\":false,\"type\":\"String\"},\"containsIgnoreCaseAndAccent\":{\"args\":[],\"deprecated\":false,\"desc\":\"Contains case and accent insensitive constraint. Matches any values that contain the given string case and accent insensitive.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"containsIgnoreCaseAndAccent\",\"reqd\":false,\"type\":\"String\"},\"endsWith\":{\"args\":[],\"deprecated\":false,\"desc\":\"Ends with constraint. Matches any values that end with the given string.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"endsWith\",\"reqd\":false,\"type\":\"String\"},\"eq\":{\"args\":[],\"deprecated\":false,\"desc\":\"Equals constraint.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"eq\",\"reqd\":false,\"type\":\"String\"},\"eqIgnoreCase\":{\"args\":[],\"deprecated\":false,\"desc\":\"Equals case insensitive. Matches any values that matches the given string case insensitive.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"eqIgnoreCase\",\"reqd\":false,\"type\":\"String\"},\"in\":{\"args\":[],\"deprecated\":false,\"desc\":\"In-array constraint.\",\"gqltype\":\"[String!]\",\"list\":true,\"name\":\"in\",\"reqd\":false,\"type\":\"String\"},\"neq\":{\"args\":[],\"deprecated\":false,\"desc\":\"Not-equals constraint.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"neq\",\"reqd\":false,\"type\":\"String\"},\"neqIgnoreCase\":{\"args\":[],\"deprecated\":false,\"desc\":\"Not-equals case insensitive. Matches any values that don't match the given string case insensitive.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"neqIgnoreCase\",\"reqd\":false,\"type\":\"String\"},\"nin\":{\"args\":[],\"deprecated\":false,\"desc\":\"Not-in-array constraint.\",\"gqltype\":\"[String!]\",\"list\":true,\"name\":\"nin\",\"reqd\":false,\"type\":\"String\"},\"notContains\":{\"args\":[],\"deprecated\":false,\"desc\":\"Doesn't contain constraint. Matches any values that don't contain the given string.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"notContains\",\"reqd\":false,\"type\":\"String\"},\"notContainsIgnoreCase\":{\"args\":[],\"deprecated\":false,\"desc\":\"Doesn't contain case insensitive constraint. Matches any values that don't contain the given string case insensitive.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"notContainsIgnoreCase\",\"reqd\":false,\"type\":\"String\"},\"notEndsWith\":{\"args\":[],\"deprecated\":false,\"desc\":\"Doesn't end with constraint. Matches any values that don't end with the given string.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"notEndsWith\",\"reqd\":false,\"type\":\"String\"},\"notStartsWith\":{\"args\":[],\"deprecated\":false,\"desc\":\"Doesn't start with constraint. Matches any values that don't start with the given string.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"notStartsWith\",\"reqd\":false,\"type\":\"String\"},\"startsWith\":{\"args\":[],\"deprecated\":false,\"desc\":\"Starts with constraint. Matches any values that start with the given string.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"startsWith\",\"reqd\":false,\"type\":\"String\"},\"startsWithIgnoreCase\":{\"args\":[],\"deprecated\":false,\"desc\":\"Starts with case insensitive constraint. Matches any values that start with the given string.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"startsWithIgnoreCase\",\"reqd\":false,\"type\":\"String\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"StringComparator\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "query EmojiList($after: String, $before: String, $filter: EmojiFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy, $sort: [EmojiSortInput!]) { emojis(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy, sort: $sort) { nodes { ...EmojiFields } pageInfo { endCursor hasNextPage } } } fragment EmojiFields on Emoji { archivedAt createdAt creator { id } id name organization { id } source updatedAt url }", "field": "emojis", "optype": "query", "page": { "cursor": "pageInfo.endCursor", "more": "pageInfo.hasNextPage", "nodes": "nodes", "style": "relay" }, "vars": [{ "from": "after", "gqltype": "String", "name": "after" }, { "from": "before", "gqltype": "String", "name": "before" }, { "from": "filter", "gqltype": "EmojiFilter", "name": "filter" }, { "from": "first", "gqltype": "Int", "name": "first" }, { "from": "includeArchived", "gqltype": "Boolean", "name": "includeArchived" }, { "from": "last", "gqltype": "Int", "name": "last" }, { "from": "orderBy", "gqltype": "PaginationOrderBy", "name": "orderBy" }, { "from": "sort", "gqltype": "[EmojiSortInput!]", "name": "sort" }] }, "kind": "graphql", "method": "POST", "orig": "emojis", "segments": [], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.data.emojis.nodes`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST emoji", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"A specific custom emoji by ID or name.\",\"gqltype\":\"Emoji!\",\"list\":false,\"name\":\"emoji\",\"reqd\":true,\"type\":\"Emoji\"},\"invocation\":{\"doc\":\"query EmojiLoad($id: String!) { emoji(id: $id) { ...EmojiFields } } fragment EmojiFields on Emoji { archivedAt createdAt creator { id } id name organization { id } source updatedAt url }\",\"field\":\"emoji\",\"optype\":\"query\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "query EmojiLoad($id: String!) { emoji(id: $id) { ...EmojiFields } } fragment EmojiFields on Emoji { archivedAt createdAt creator { id } id name organization { id } source updatedAt url }", "field": "emoji", "optype": "query", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "kind": "graphql", "method": "POST", "orig": "emoji", "segments": [], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.data.emoji`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST emojiDelete", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"Deletes an emoji.\",\"gqltype\":\"DeletePayload!\",\"list\":false,\"name\":\"emojiDelete\",\"reqd\":true,\"type\":\"DeletePayload\"},\"invocation\":{\"doc\":\"mutation EmojiRemove($id: String!) { emojiDelete(id: $id) { entityId lastSyncId success } }\",\"field\":\"emojiDelete\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "mutation EmojiRemove($id: String!) { emojiDelete(id: $id) { entityId lastSyncId success } }", "field": "emojiDelete", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "kind": "graphql", "method": "POST", "orig": "emojiDelete", "segments": [], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.data.emojiDelete`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [] }, "key$": "emoji", "name__orig": "emoji", "Name": "Emoji", "name_": "emoji", "name-": "emoji", "NAME": "EMOJI", "index$": 24 }, { "active": true, "entity": "emoji", "key$": "BasicEmojiFlow", "kind": "basic", "name": "BasicEmojiFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "emoji_ref01" }, "match": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": {}, "match": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "emoji_ref01" } }], "index$": 1 }, { "active": true, "data": {}, "input": { "ref": "emoji_ref01", "srcdatavar": "emoji_ref01_data", "suffix": "_dt0" }, "match": { "id": "emoji01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-emoji_ref01" } }], "index$": 2 }, { "active": true, "data": {}, "input": { "ref": "emoji_ref01", "suffix": "_rm0" }, "match": { "id": "emoji01" }, "op": "remove", "spec": [], "valid": [], "index$": 3 }, { "active": true, "data": {}, "input": { "suffix": "_rt0" }, "match": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemNotExists", "def": { "ref": "emoji_ref01" } }], "index$": 4 }] }, 'Emoji');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const emoji_ref01_ent = client.Emoji();
        let emoji_ref01_data = setup.data.new.emoji['emoji_ref01'];
        emoji_ref01_data['after'] = setup.idmap['after01'];
        emoji_ref01_data['before'] = setup.idmap['before01'];
        emoji_ref01_data['first'] = setup.idmap['first01'];
        emoji_ref01_data['include_archived'] = setup.idmap['include_archived01'];
        emoji_ref01_data['last'] = setup.idmap['last01'];
        emoji_ref01_data['order_by'] = setup.idmap['order_by01'];
        emoji_ref01_data = (await emoji_ref01_ent.create(emoji_ref01_data)).data();
        (0, node_assert_1.default)(null != emoji_ref01_data.id);
        // LIST
        const emoji_ref01_match = {};
        emoji_ref01_match['after'] = setup.idmap['after01'];
        emoji_ref01_match['before'] = setup.idmap['before01'];
        emoji_ref01_match['first'] = setup.idmap['first01'];
        emoji_ref01_match['include_archived'] = setup.idmap['include_archived01'];
        emoji_ref01_match['last'] = setup.idmap['last01'];
        emoji_ref01_match['order_by'] = setup.idmap['order_by01'];
        const emoji_ref01_list = (await emoji_ref01_ent.list(emoji_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(emoji_ref01_list, { id: emoji_ref01_data.id })));
        // LOAD
        const emoji_ref01_match_dt0 = {};
        emoji_ref01_match_dt0.id = emoji_ref01_data.id;
        const emoji_ref01_data_dt0 = (await emoji_ref01_ent.load(emoji_ref01_match_dt0)).data();
        (0, node_assert_1.default)(emoji_ref01_data_dt0.id === emoji_ref01_data.id);
        // REMOVE
        const emoji_ref01_match_rm0 = { id: emoji_ref01_data.id };
        await emoji_ref01_ent.remove(emoji_ref01_match_rm0);
        // LIST
        const emoji_ref01_match_rt0 = {};
        emoji_ref01_match_rt0['after'] = setup.idmap['after01'];
        emoji_ref01_match_rt0['before'] = setup.idmap['before01'];
        emoji_ref01_match_rt0['first'] = setup.idmap['first01'];
        emoji_ref01_match_rt0['include_archived'] = setup.idmap['include_archived01'];
        emoji_ref01_match_rt0['last'] = setup.idmap['last01'];
        emoji_ref01_match_rt0['order_by'] = setup.idmap['order_by01'];
        const emoji_ref01_list_rt0 = (await emoji_ref01_ent.list(emoji_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(emoji_ref01_list_rt0, { id: emoji_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/emoji/EmojiTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['emoji01', 'emoji02', 'emoji03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_EMOJI_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_EMOJI_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_EMOJI_ENTID'];
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
//# sourceMappingURL=EmojiEntity.test.js.map