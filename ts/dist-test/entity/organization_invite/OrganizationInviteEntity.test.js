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
(0, node_test_1.describe)('OrganizationInviteEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.OrganizationInvite();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'organization_invite.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "acceptedAt", "req": false, "short": "The time at which the invite was accepted by the invitee.", "type": "`$ANY`", "index$": 0 }, { "active": true, "name": "archivedAt", "req": false, "short": "The time at which the entity was archived.", "type": "`$ANY`", "index$": 1 }, { "active": true, "name": "createdAt", "req": true, "short": "The time at which the entity was created.", "type": "`$ANY`", "index$": 2 }, { "active": true, "name": "email", "req": true, "short": "The email address of the person being invited to the workspace.", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "expiresAt", "req": false, "short": "The time at which the invite will expire and can no longer be accepted.", "type": "`$ANY`", "index$": 4 }, { "active": true, "name": "external", "req": true, "short": "Whether the invite was sent to an email address outside the workspace's verified domains.", "type": "`$BOOLEAN`", "index$": 5 }, { "active": true, "name": "id", "req": true, "short": "The unique identifier of the entity.", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "invitee", "req": false, "short": "The user who has accepted the invite.", "type": "`$OBJECT`", "index$": 7 }, { "active": true, "name": "inviter", "req": false, "short": "The user who created the invitation.", "type": "`$OBJECT`", "index$": 8 }, { "active": true, "name": "metadata", "req": false, "short": "Extra metadata associated with the invite.", "type": "`$ANY`", "index$": 9 }, { "active": true, "name": "organization", "req": false, "short": "The workspace that the invite is associated with.", "type": "`$OBJECT`", "index$": 10 }, { "active": true, "name": "role", "req": true, "short": "The workspace role (admin, member, guest, or owner) that the invitee will receive upon accepting the invite.", "type": "`$STRING`", "index$": 11 }, { "active": true, "name": "updatedAt", "req": true, "short": "The last time at which the entity was meaningfully updated.", "type": "`$ANY`", "index$": 12 }], "id": { "field": "id", "name": "id" }, "name": "organization_invite", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": {}, "contract": { "id": "POST organizationInviteCreate", "json": "{\"field\":{\"args\":[{\"gqltype\":\"OrganizationInviteCreateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"OrganizationInviteCreateInput\"}],\"deprecated\":false,\"desc\":\"Creates a new workspace invite and sends an invitation email to the specified address. The invite includes a role assignment and optional team memberships.\",\"gqltype\":\"OrganizationInvitePayload!\",\"list\":false,\"name\":\"organizationInviteCreate\",\"reqd\":true,\"type\":\"OrganizationInvitePayload\"},\"invocation\":{\"doc\":\"mutation OrganizationInviteCreate($input: OrganizationInviteCreateInput!) { organizationInviteCreate(input: $input) { organizationInvite { ...OrganizationInviteFields } success } } fragment OrganizationInviteFields on OrganizationInvite { acceptedAt archivedAt createdAt email expiresAt external id invitee { id } inviter { id } metadata organization { id } role updatedAt }\",\"field\":\"organizationInviteCreate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"\",\"gqltype\":\"OrganizationInviteCreateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"JSONObject\":{\"desc\":\"The `JSONObject` scalar type represents arbitrary values as *embedded* JSON\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"JSONObject\"},\"OrganizationInviteCreateInput\":{\"fields\":{\"email\":{\"args\":[],\"deprecated\":false,\"desc\":\"The email of the invitee.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"email\",\"reqd\":true,\"type\":\"String\"},\"id\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier in UUID v4 format. If none is provided, the backend will generate one.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"id\",\"reqd\":false,\"type\":\"String\"},\"metadata\":{\"args\":[],\"deprecated\":false,\"desc\":\"[INTERNAL] Optional metadata about the invite.\",\"gqltype\":\"JSONObject\",\"list\":false,\"name\":\"metadata\",\"reqd\":false,\"type\":\"JSONObject\"},\"role\":{\"args\":[],\"deprecated\":false,\"desc\":\"What user role the invite should grant.\",\"gqltype\":\"UserRoleType\",\"list\":false,\"name\":\"role\",\"reqd\":false,\"type\":\"UserRoleType\"},\"teamIds\":{\"args\":[],\"deprecated\":false,\"desc\":\"The teams that the user has been invited to.\",\"gqltype\":\"[String!]\",\"list\":true,\"name\":\"teamIds\",\"reqd\":false,\"type\":\"String\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"OrganizationInviteCreateInput\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"},\"UserRoleType\":{\"desc\":\"The different permission roles available to users in a workspace.\",\"fields\":{},\"kind\":\"ENUM\",\"name\":\"UserRoleType\",\"values\":[\"admin\",\"app\",\"guest\",\"owner\",\"user\"]}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "mutation OrganizationInviteCreate($input: OrganizationInviteCreateInput!) { organizationInviteCreate(input: $input) { organizationInvite { ...OrganizationInviteFields } success } } fragment OrganizationInviteFields on OrganizationInvite { acceptedAt archivedAt createdAt email expiresAt external id invitee { id } inviter { id } metadata organization { id } role updatedAt }", "field": "organizationInviteCreate", "optype": "mutation", "vars": [{ "from": "", "gqltype": "OrganizationInviteCreateInput!", "name": "input" }] }, "kind": "graphql", "method": "POST", "orig": "organizationInviteCreate", "segments": [], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.data.organizationInviteCreate.organizationInvite`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "after", "orig": "after", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "before", "orig": "before", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "kind": "param", "name": "first", "orig": "first", "reqd": false, "type": "`$INTEGER`", "index$": 2 }, { "active": true, "kind": "param", "name": "include_archived", "orig": "include_archived", "reqd": false, "type": "`$BOOLEAN`", "index$": 3 }, { "active": true, "kind": "param", "name": "last", "orig": "last", "reqd": false, "type": "`$INTEGER`", "index$": 4 }, { "active": true, "kind": "param", "name": "order_by", "orig": "order_by", "reqd": false, "type": "`$ANY`", "index$": 5 }] }, "contract": { "id": "POST organizationInvites", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String\",\"name\":\"after\",\"reqd\":false,\"type\":\"String\"},{\"gqltype\":\"String\",\"name\":\"before\",\"reqd\":false,\"type\":\"String\"},{\"gqltype\":\"Int\",\"name\":\"first\",\"reqd\":false,\"type\":\"Int\"},{\"gqltype\":\"Boolean\",\"name\":\"includeArchived\",\"reqd\":false,\"type\":\"Boolean\"},{\"gqltype\":\"Int\",\"name\":\"last\",\"reqd\":false,\"type\":\"Int\"},{\"gqltype\":\"PaginationOrderBy\",\"name\":\"orderBy\",\"reqd\":false,\"type\":\"PaginationOrderBy\"}],\"deprecated\":false,\"desc\":\"All pending and accepted invites for the workspace.\",\"gqltype\":\"OrganizationInviteConnection!\",\"list\":false,\"name\":\"organizationInvites\",\"reqd\":true,\"type\":\"OrganizationInviteConnection\"},\"invocation\":{\"doc\":\"query OrganizationInviteList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { organizationInvites(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...OrganizationInviteFields } pageInfo { endCursor hasNextPage } } } fragment OrganizationInviteFields on OrganizationInvite { acceptedAt archivedAt createdAt email expiresAt external id invitee { id } inviter { id } metadata organization { id } role updatedAt }\",\"field\":\"organizationInvites\",\"optype\":\"query\",\"page\":{\"cursor\":\"pageInfo.endCursor\",\"more\":\"pageInfo.hasNextPage\",\"nodes\":\"nodes\",\"style\":\"relay\"},\"vars\":[{\"from\":\"after\",\"gqltype\":\"String\",\"name\":\"after\"},{\"from\":\"before\",\"gqltype\":\"String\",\"name\":\"before\"},{\"from\":\"first\",\"gqltype\":\"Int\",\"name\":\"first\"},{\"from\":\"includeArchived\",\"gqltype\":\"Boolean\",\"name\":\"includeArchived\"},{\"from\":\"last\",\"gqltype\":\"Int\",\"name\":\"last\"},{\"from\":\"orderBy\",\"gqltype\":\"PaginationOrderBy\",\"name\":\"orderBy\"}]},\"protocol\":\"graphql\",\"types\":{\"Boolean\":{\"desc\":\"The `Boolean` scalar type represents `true` or `false`.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Boolean\"},\"Int\":{\"desc\":\"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Int\"},\"PaginationOrderBy\":{\"desc\":\"By which field should the pagination order by\",\"fields\":{},\"kind\":\"ENUM\",\"name\":\"PaginationOrderBy\",\"values\":[\"createdAt\",\"updatedAt\"]},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "query OrganizationInviteList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { organizationInvites(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...OrganizationInviteFields } pageInfo { endCursor hasNextPage } } } fragment OrganizationInviteFields on OrganizationInvite { acceptedAt archivedAt createdAt email expiresAt external id invitee { id } inviter { id } metadata organization { id } role updatedAt }", "field": "organizationInvites", "optype": "query", "page": { "cursor": "pageInfo.endCursor", "more": "pageInfo.hasNextPage", "nodes": "nodes", "style": "relay" }, "vars": [{ "from": "after", "gqltype": "String", "name": "after" }, { "from": "before", "gqltype": "String", "name": "before" }, { "from": "first", "gqltype": "Int", "name": "first" }, { "from": "includeArchived", "gqltype": "Boolean", "name": "includeArchived" }, { "from": "last", "gqltype": "Int", "name": "last" }, { "from": "orderBy", "gqltype": "PaginationOrderBy", "name": "orderBy" }] }, "kind": "graphql", "method": "POST", "orig": "organizationInvites", "segments": [], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.data.organizationInvites.nodes`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST organizationInvite", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"Fetches a specific workspace invite by its ID.\",\"gqltype\":\"OrganizationInvite!\",\"list\":false,\"name\":\"organizationInvite\",\"reqd\":true,\"type\":\"OrganizationInvite\"},\"invocation\":{\"doc\":\"query OrganizationInviteLoad($id: String!) { organizationInvite(id: $id) { ...OrganizationInviteFields } } fragment OrganizationInviteFields on OrganizationInvite { acceptedAt archivedAt createdAt email expiresAt external id invitee { id } inviter { id } metadata organization { id } role updatedAt }\",\"field\":\"organizationInvite\",\"optype\":\"query\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "query OrganizationInviteLoad($id: String!) { organizationInvite(id: $id) { ...OrganizationInviteFields } } fragment OrganizationInviteFields on OrganizationInvite { acceptedAt archivedAt createdAt email expiresAt external id invitee { id } inviter { id } metadata organization { id } role updatedAt }", "field": "organizationInvite", "optype": "query", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "kind": "graphql", "method": "POST", "orig": "organizationInvite", "segments": [], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.data.organizationInvite`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST organizationInviteDelete", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"Deletes (archives) a workspace invite, preventing it from being accepted.\",\"gqltype\":\"DeletePayload!\",\"list\":false,\"name\":\"organizationInviteDelete\",\"reqd\":true,\"type\":\"DeletePayload\"},\"invocation\":{\"doc\":\"mutation OrganizationInviteRemove($id: String!) { organizationInviteDelete(id: $id) { entityId lastSyncId success } }\",\"field\":\"organizationInviteDelete\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "mutation OrganizationInviteRemove($id: String!) { organizationInviteDelete(id: $id) { entityId lastSyncId success } }", "field": "organizationInviteDelete", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "kind": "graphql", "method": "POST", "orig": "organizationInviteDelete", "segments": [], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.data.organizationInviteDelete`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST organizationInviteUpdate", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"},{\"gqltype\":\"OrganizationInviteUpdateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"OrganizationInviteUpdateInput\"}],\"deprecated\":false,\"desc\":\"Updates an existing workspace invite, such as changing the teams the invitee will be added to.\",\"gqltype\":\"OrganizationInvitePayload!\",\"list\":false,\"name\":\"organizationInviteUpdate\",\"reqd\":true,\"type\":\"OrganizationInvitePayload\"},\"invocation\":{\"doc\":\"mutation OrganizationInviteUpdate($id: String!, $input: OrganizationInviteUpdateInput!) { organizationInviteUpdate(id: $id, input: $input) { organizationInvite { ...OrganizationInviteFields } success } } fragment OrganizationInviteFields on OrganizationInvite { acceptedAt archivedAt createdAt email expiresAt external id invitee { id } inviter { id } metadata organization { id } role updatedAt }\",\"field\":\"organizationInviteUpdate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"},{\"from\":\"\",\"gqltype\":\"OrganizationInviteUpdateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"OrganizationInviteUpdateInput\":{\"fields\":{\"teamIds\":{\"args\":[],\"deprecated\":false,\"desc\":\"The teams that the user has been invited to.\",\"gqltype\":\"[String!]!\",\"list\":true,\"name\":\"teamIds\",\"reqd\":true,\"type\":\"String\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"OrganizationInviteUpdateInput\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "mutation OrganizationInviteUpdate($id: String!, $input: OrganizationInviteUpdateInput!) { organizationInviteUpdate(id: $id, input: $input) { organizationInvite { ...OrganizationInviteFields } success } } fragment OrganizationInviteFields on OrganizationInvite { acceptedAt archivedAt createdAt email expiresAt external id invitee { id } inviter { id } metadata organization { id } role updatedAt }", "field": "organizationInviteUpdate", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }, { "from": "", "gqltype": "OrganizationInviteUpdateInput!", "name": "input" }] }, "kind": "graphql", "method": "POST", "orig": "organizationInviteUpdate", "segments": [], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.data.organizationInviteUpdate.organizationInvite`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "organization_invite", "name__orig": "organization_invite", "Name": "OrganizationInvite", "name_": "organization_invite", "name-": "organization-invite", "NAME": "ORGANIZATION_INVITE", "index$": 53 }, { "active": true, "entity": "organization_invite", "key$": "BasicOrganizationInviteFlow", "kind": "basic", "name": "BasicOrganizationInviteFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "organization_invite_ref01" }, "match": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": {}, "match": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "organization_invite_ref01" } }], "index$": 1 }, { "active": true, "data": {}, "input": { "ref": "organization_invite_ref01", "srcdatavar": "organization_invite_ref01_data", "suffix": "_up0", "textfield": "email" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-organization_invite_ref01" } }], "valid": [], "index$": 2 }, { "active": true, "data": {}, "input": { "ref": "organization_invite_ref01", "srcdatavar": "organization_invite_ref01_data", "suffix": "_dt0" }, "match": { "id": "organization_invite01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-organization_invite_ref01" } }], "index$": 3 }, { "active": true, "data": {}, "input": { "ref": "organization_invite_ref01", "suffix": "_rm0" }, "match": { "id": "organization_invite01" }, "op": "remove", "spec": [], "valid": [], "index$": 4 }, { "active": true, "data": {}, "input": { "suffix": "_rt0" }, "match": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemNotExists", "def": { "ref": "organization_invite_ref01" } }], "index$": 5 }] }, 'OrganizationInvite');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const organization_invite_ref01_ent = client.OrganizationInvite();
        let organization_invite_ref01_data = setup.data.new.organization_invite['organization_invite_ref01'];
        organization_invite_ref01_data['after'] = setup.idmap['after01'];
        organization_invite_ref01_data['before'] = setup.idmap['before01'];
        organization_invite_ref01_data['first'] = setup.idmap['first01'];
        organization_invite_ref01_data['include_archived'] = setup.idmap['include_archived01'];
        organization_invite_ref01_data['last'] = setup.idmap['last01'];
        organization_invite_ref01_data['order_by'] = setup.idmap['order_by01'];
        organization_invite_ref01_data = (await organization_invite_ref01_ent.create(organization_invite_ref01_data)).data();
        (0, node_assert_1.default)(null != organization_invite_ref01_data.id);
        // LIST
        const organization_invite_ref01_match = {};
        organization_invite_ref01_match['after'] = setup.idmap['after01'];
        organization_invite_ref01_match['before'] = setup.idmap['before01'];
        organization_invite_ref01_match['first'] = setup.idmap['first01'];
        organization_invite_ref01_match['include_archived'] = setup.idmap['include_archived01'];
        organization_invite_ref01_match['last'] = setup.idmap['last01'];
        organization_invite_ref01_match['order_by'] = setup.idmap['order_by01'];
        const organization_invite_ref01_list = (await organization_invite_ref01_ent.list(organization_invite_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(organization_invite_ref01_list, { id: organization_invite_ref01_data.id })));
        // UPDATE
        const organization_invite_ref01_data_up0 = {};
        organization_invite_ref01_data_up0.id = organization_invite_ref01_data.id;
        const organization_invite_ref01_markdef_up0 = { name: 'email', value: 'Mark01-organization_invite_ref01_' + setup.now };
        organization_invite_ref01_data_up0[organization_invite_ref01_markdef_up0.name] = organization_invite_ref01_markdef_up0.value;
        const organization_invite_ref01_resdata_up0 = (await organization_invite_ref01_ent.update(organization_invite_ref01_data_up0)).data();
        (0, node_assert_1.default)(organization_invite_ref01_resdata_up0.id === organization_invite_ref01_data_up0.id);
        (0, node_assert_1.default)(organization_invite_ref01_resdata_up0[organization_invite_ref01_markdef_up0.name] === organization_invite_ref01_markdef_up0.value);
        // LOAD
        const organization_invite_ref01_match_dt0 = {};
        organization_invite_ref01_match_dt0.id = organization_invite_ref01_data.id;
        const organization_invite_ref01_data_dt0 = (await organization_invite_ref01_ent.load(organization_invite_ref01_match_dt0)).data();
        (0, node_assert_1.default)(organization_invite_ref01_data_dt0.id === organization_invite_ref01_data.id);
        // REMOVE
        const organization_invite_ref01_match_rm0 = { id: organization_invite_ref01_data.id };
        await organization_invite_ref01_ent.remove(organization_invite_ref01_match_rm0);
        // LIST
        const organization_invite_ref01_match_rt0 = {};
        organization_invite_ref01_match_rt0['after'] = setup.idmap['after01'];
        organization_invite_ref01_match_rt0['before'] = setup.idmap['before01'];
        organization_invite_ref01_match_rt0['first'] = setup.idmap['first01'];
        organization_invite_ref01_match_rt0['include_archived'] = setup.idmap['include_archived01'];
        organization_invite_ref01_match_rt0['last'] = setup.idmap['last01'];
        organization_invite_ref01_match_rt0['order_by'] = setup.idmap['order_by01'];
        const organization_invite_ref01_list_rt0 = (await organization_invite_ref01_ent.list(organization_invite_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(organization_invite_ref01_list_rt0, { id: organization_invite_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/organization_invite/OrganizationInviteTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['organization_invite01', 'organization_invite02', 'organization_invite03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_ORGANIZATION_INVITE_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_ORGANIZATION_INVITE_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_ORGANIZATION_INVITE_ENTID'];
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
//# sourceMappingURL=OrganizationInviteEntity.test.js.map