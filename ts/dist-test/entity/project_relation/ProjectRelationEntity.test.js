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
(0, node_test_1.describe)('ProjectRelationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.ProjectRelation();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'project_relation.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "anchorType", "req": true, "short": "The type of anchor on the source project end of the relation, indicating whether it is anchored to the project itself or a specific milestone.", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "archivedAt", "req": false, "short": "The time at which the entity was archived.", "type": "`$ANY`", "index$": 1 }, { "active": true, "name": "createdAt", "req": true, "short": "The time at which the entity was created.", "type": "`$ANY`", "index$": 2 }, { "active": true, "name": "id", "req": true, "short": "The unique identifier of the entity.", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "project", "req": false, "short": "The source project in the dependency relation.", "type": "`$OBJECT`", "index$": 4 }, { "active": true, "name": "projectMilestone", "req": false, "short": "The specific milestone within the source project that the relation is anchored to.", "type": "`$OBJECT`", "index$": 5 }, { "active": true, "name": "relatedAnchorType", "req": true, "short": "The type of anchor on the target project end of the relation, indicating whether it is anchored to the project itself or a specific milestone.", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "relatedProject", "req": false, "short": "The target project in the dependency relation.", "type": "`$OBJECT`", "index$": 7 }, { "active": true, "name": "relatedProjectMilestone", "req": false, "short": "The specific milestone within the target project that the relation is anchored to.", "type": "`$OBJECT`", "index$": 8 }, { "active": true, "name": "type", "req": true, "short": "The type of dependency relationship from the project to the related project (e.g., blocks).", "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "updatedAt", "req": true, "short": "The last time at which the entity was meaningfully updated.", "type": "`$ANY`", "index$": 10 }, { "active": true, "name": "user", "req": false, "short": "The user who last created or modified the relation.", "type": "`$OBJECT`", "index$": 11 }], "id": { "field": "id", "name": "id" }, "name": "project_relation", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": {}, "contract": { "id": "POST projectRelationCreate", "json": "{\"field\":{\"args\":[{\"gqltype\":\"ProjectRelationCreateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"ProjectRelationCreateInput\"}],\"deprecated\":false,\"desc\":\"Creates a new project relation.\",\"gqltype\":\"ProjectRelationPayload!\",\"list\":false,\"name\":\"projectRelationCreate\",\"reqd\":true,\"type\":\"ProjectRelationPayload\"},\"invocation\":{\"doc\":\"mutation ProjectRelationCreate($input: ProjectRelationCreateInput!) { projectRelationCreate(input: $input) { projectRelation { ...ProjectRelationFields } success } } fragment ProjectRelationFields on ProjectRelation { anchorType archivedAt createdAt id project { id } projectMilestone { id } relatedAnchorType relatedProject { id } relatedProjectMilestone { id } type updatedAt user { id } }\",\"field\":\"projectRelationCreate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"\",\"gqltype\":\"ProjectRelationCreateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"ProjectRelationCreateInput\":{\"desc\":\"Input for creating a new project relation.\",\"fields\":{\"anchorType\":{\"args\":[],\"deprecated\":false,\"desc\":\"The type of the anchor for the project.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"anchorType\",\"reqd\":true,\"type\":\"String\"},\"id\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier in UUID v4 format. If none is provided, the backend will generate one.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"id\",\"reqd\":false,\"type\":\"String\"},\"projectId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the project that is related to another project.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"projectId\",\"reqd\":true,\"type\":\"String\"},\"projectMilestoneId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the project milestone.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"projectMilestoneId\",\"reqd\":false,\"type\":\"String\"},\"relatedAnchorType\":{\"args\":[],\"deprecated\":false,\"desc\":\"The type of the anchor for the related project.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"relatedAnchorType\",\"reqd\":true,\"type\":\"String\"},\"relatedProjectId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the related project.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"relatedProjectId\",\"reqd\":true,\"type\":\"String\"},\"relatedProjectMilestoneId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the related project milestone.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"relatedProjectMilestoneId\",\"reqd\":false,\"type\":\"String\"},\"type\":{\"args\":[],\"deprecated\":false,\"desc\":\"The type of relation of the project to the related project.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"type\",\"reqd\":true,\"type\":\"String\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"ProjectRelationCreateInput\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "mutation ProjectRelationCreate($input: ProjectRelationCreateInput!) { projectRelationCreate(input: $input) { projectRelation { ...ProjectRelationFields } success } } fragment ProjectRelationFields on ProjectRelation { anchorType archivedAt createdAt id project { id } projectMilestone { id } relatedAnchorType relatedProject { id } relatedProjectMilestone { id } type updatedAt user { id } }", "field": "projectRelationCreate", "optype": "mutation", "vars": [{ "from": "", "gqltype": "ProjectRelationCreateInput!", "name": "input" }] }, "kind": "graphql", "method": "POST", "orig": "projectRelationCreate", "segments": [], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.data.projectRelationCreate.projectRelation`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "after", "orig": "after", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "before", "orig": "before", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "kind": "param", "name": "first", "orig": "first", "reqd": false, "type": "`$INTEGER`", "index$": 2 }, { "active": true, "kind": "param", "name": "include_archived", "orig": "include_archived", "reqd": false, "type": "`$BOOLEAN`", "index$": 3 }, { "active": true, "kind": "param", "name": "last", "orig": "last", "reqd": false, "type": "`$INTEGER`", "index$": 4 }, { "active": true, "kind": "param", "name": "order_by", "orig": "order_by", "reqd": false, "type": "`$ANY`", "index$": 5 }] }, "contract": { "id": "POST projectRelations", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String\",\"name\":\"after\",\"reqd\":false,\"type\":\"String\"},{\"gqltype\":\"String\",\"name\":\"before\",\"reqd\":false,\"type\":\"String\"},{\"gqltype\":\"Int\",\"name\":\"first\",\"reqd\":false,\"type\":\"Int\"},{\"gqltype\":\"Boolean\",\"name\":\"includeArchived\",\"reqd\":false,\"type\":\"Boolean\"},{\"gqltype\":\"Int\",\"name\":\"last\",\"reqd\":false,\"type\":\"Int\"},{\"gqltype\":\"PaginationOrderBy\",\"name\":\"orderBy\",\"reqd\":false,\"type\":\"PaginationOrderBy\"}],\"deprecated\":false,\"desc\":\"Returns all project dependency relations in the workspace.\",\"gqltype\":\"ProjectRelationConnection!\",\"list\":false,\"name\":\"projectRelations\",\"reqd\":true,\"type\":\"ProjectRelationConnection\"},\"invocation\":{\"doc\":\"query ProjectRelationList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { projectRelations(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...ProjectRelationFields } pageInfo { endCursor hasNextPage } } } fragment ProjectRelationFields on ProjectRelation { anchorType archivedAt createdAt id project { id } projectMilestone { id } relatedAnchorType relatedProject { id } relatedProjectMilestone { id } type updatedAt user { id } }\",\"field\":\"projectRelations\",\"optype\":\"query\",\"page\":{\"cursor\":\"pageInfo.endCursor\",\"more\":\"pageInfo.hasNextPage\",\"nodes\":\"nodes\",\"style\":\"relay\"},\"vars\":[{\"from\":\"after\",\"gqltype\":\"String\",\"name\":\"after\"},{\"from\":\"before\",\"gqltype\":\"String\",\"name\":\"before\"},{\"from\":\"first\",\"gqltype\":\"Int\",\"name\":\"first\"},{\"from\":\"includeArchived\",\"gqltype\":\"Boolean\",\"name\":\"includeArchived\"},{\"from\":\"last\",\"gqltype\":\"Int\",\"name\":\"last\"},{\"from\":\"orderBy\",\"gqltype\":\"PaginationOrderBy\",\"name\":\"orderBy\"}]},\"protocol\":\"graphql\",\"types\":{\"Boolean\":{\"desc\":\"The `Boolean` scalar type represents `true` or `false`.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Boolean\"},\"Int\":{\"desc\":\"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Int\"},\"PaginationOrderBy\":{\"desc\":\"By which field should the pagination order by\",\"fields\":{},\"kind\":\"ENUM\",\"name\":\"PaginationOrderBy\",\"values\":[\"createdAt\",\"updatedAt\"]},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "query ProjectRelationList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { projectRelations(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...ProjectRelationFields } pageInfo { endCursor hasNextPage } } } fragment ProjectRelationFields on ProjectRelation { anchorType archivedAt createdAt id project { id } projectMilestone { id } relatedAnchorType relatedProject { id } relatedProjectMilestone { id } type updatedAt user { id } }", "field": "projectRelations", "optype": "query", "page": { "cursor": "pageInfo.endCursor", "more": "pageInfo.hasNextPage", "nodes": "nodes", "style": "relay" }, "vars": [{ "from": "after", "gqltype": "String", "name": "after" }, { "from": "before", "gqltype": "String", "name": "before" }, { "from": "first", "gqltype": "Int", "name": "first" }, { "from": "includeArchived", "gqltype": "Boolean", "name": "includeArchived" }, { "from": "last", "gqltype": "Int", "name": "last" }, { "from": "orderBy", "gqltype": "PaginationOrderBy", "name": "orderBy" }] }, "kind": "graphql", "method": "POST", "orig": "projectRelations", "segments": [], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.data.projectRelations.nodes`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST projectRelation", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"Returns a single project relation by its identifier.\",\"gqltype\":\"ProjectRelation!\",\"list\":false,\"name\":\"projectRelation\",\"reqd\":true,\"type\":\"ProjectRelation\"},\"invocation\":{\"doc\":\"query ProjectRelationLoad($id: String!) { projectRelation(id: $id) { ...ProjectRelationFields } } fragment ProjectRelationFields on ProjectRelation { anchorType archivedAt createdAt id project { id } projectMilestone { id } relatedAnchorType relatedProject { id } relatedProjectMilestone { id } type updatedAt user { id } }\",\"field\":\"projectRelation\",\"optype\":\"query\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "query ProjectRelationLoad($id: String!) { projectRelation(id: $id) { ...ProjectRelationFields } } fragment ProjectRelationFields on ProjectRelation { anchorType archivedAt createdAt id project { id } projectMilestone { id } relatedAnchorType relatedProject { id } relatedProjectMilestone { id } type updatedAt user { id } }", "field": "projectRelation", "optype": "query", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "kind": "graphql", "method": "POST", "orig": "projectRelation", "segments": [], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.data.projectRelation`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST projectRelationDelete", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"Deletes a project relation.\",\"gqltype\":\"DeletePayload!\",\"list\":false,\"name\":\"projectRelationDelete\",\"reqd\":true,\"type\":\"DeletePayload\"},\"invocation\":{\"doc\":\"mutation ProjectRelationRemove($id: String!) { projectRelationDelete(id: $id) { entityId lastSyncId success } }\",\"field\":\"projectRelationDelete\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "mutation ProjectRelationRemove($id: String!) { projectRelationDelete(id: $id) { entityId lastSyncId success } }", "field": "projectRelationDelete", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "kind": "graphql", "method": "POST", "orig": "projectRelationDelete", "segments": [], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.data.projectRelationDelete`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST projectRelationUpdate", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"},{\"gqltype\":\"ProjectRelationUpdateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"ProjectRelationUpdateInput\"}],\"deprecated\":false,\"desc\":\"Updates a project relation.\",\"gqltype\":\"ProjectRelationPayload!\",\"list\":false,\"name\":\"projectRelationUpdate\",\"reqd\":true,\"type\":\"ProjectRelationPayload\"},\"invocation\":{\"doc\":\"mutation ProjectRelationUpdate($id: String!, $input: ProjectRelationUpdateInput!) { projectRelationUpdate(id: $id, input: $input) { projectRelation { ...ProjectRelationFields } success } } fragment ProjectRelationFields on ProjectRelation { anchorType archivedAt createdAt id project { id } projectMilestone { id } relatedAnchorType relatedProject { id } relatedProjectMilestone { id } type updatedAt user { id } }\",\"field\":\"projectRelationUpdate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"},{\"from\":\"\",\"gqltype\":\"ProjectRelationUpdateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"ProjectRelationUpdateInput\":{\"desc\":\"Input for updating an existing project relation.\",\"fields\":{\"anchorType\":{\"args\":[],\"deprecated\":false,\"desc\":\"The type of the anchor for the project.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"anchorType\",\"reqd\":false,\"type\":\"String\"},\"projectId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the project that is related to another project.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"projectId\",\"reqd\":false,\"type\":\"String\"},\"projectMilestoneId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the project milestone.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"projectMilestoneId\",\"reqd\":false,\"type\":\"String\"},\"relatedAnchorType\":{\"args\":[],\"deprecated\":false,\"desc\":\"The type of the anchor for the related project.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"relatedAnchorType\",\"reqd\":false,\"type\":\"String\"},\"relatedProjectId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the related project.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"relatedProjectId\",\"reqd\":false,\"type\":\"String\"},\"relatedProjectMilestoneId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the related project milestone.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"relatedProjectMilestoneId\",\"reqd\":false,\"type\":\"String\"},\"type\":{\"args\":[],\"deprecated\":false,\"desc\":\"The type of relation of the project to the related project.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"type\",\"reqd\":false,\"type\":\"String\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"ProjectRelationUpdateInput\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "mutation ProjectRelationUpdate($id: String!, $input: ProjectRelationUpdateInput!) { projectRelationUpdate(id: $id, input: $input) { projectRelation { ...ProjectRelationFields } success } } fragment ProjectRelationFields on ProjectRelation { anchorType archivedAt createdAt id project { id } projectMilestone { id } relatedAnchorType relatedProject { id } relatedProjectMilestone { id } type updatedAt user { id } }", "field": "projectRelationUpdate", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }, { "from": "", "gqltype": "ProjectRelationUpdateInput!", "name": "input" }] }, "kind": "graphql", "method": "POST", "orig": "projectRelationUpdate", "segments": [], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.data.projectRelationUpdate.projectRelation`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "project_relation", "name__orig": "project_relation", "Name": "ProjectRelation", "name_": "project_relation", "name-": "project-relation", "NAME": "PROJECT_RELATION", "index$": 60 }, { "active": true, "entity": "project_relation", "key$": "BasicProjectRelationFlow", "kind": "basic", "name": "BasicProjectRelationFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "project_relation_ref01" }, "match": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": {}, "match": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "project_relation_ref01" } }], "index$": 1 }, { "active": true, "data": {}, "input": { "ref": "project_relation_ref01", "srcdatavar": "project_relation_ref01_data", "suffix": "_up0", "textfield": "anchorType" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-project_relation_ref01" } }], "valid": [], "index$": 2 }, { "active": true, "data": {}, "input": { "ref": "project_relation_ref01", "srcdatavar": "project_relation_ref01_data", "suffix": "_dt0" }, "match": { "id": "project_relation01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-project_relation_ref01" } }], "index$": 3 }, { "active": true, "data": {}, "input": { "ref": "project_relation_ref01", "suffix": "_rm0" }, "match": { "id": "project_relation01" }, "op": "remove", "spec": [], "valid": [], "index$": 4 }, { "active": true, "data": {}, "input": { "suffix": "_rt0" }, "match": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemNotExists", "def": { "ref": "project_relation_ref01" } }], "index$": 5 }] }, 'ProjectRelation');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const project_relation_ref01_ent = client.ProjectRelation();
        let project_relation_ref01_data = setup.data.new.project_relation['project_relation_ref01'];
        project_relation_ref01_data['after'] = setup.idmap['after01'];
        project_relation_ref01_data['before'] = setup.idmap['before01'];
        project_relation_ref01_data['first'] = setup.idmap['first01'];
        project_relation_ref01_data['include_archived'] = setup.idmap['include_archived01'];
        project_relation_ref01_data['last'] = setup.idmap['last01'];
        project_relation_ref01_data['order_by'] = setup.idmap['order_by01'];
        project_relation_ref01_data = (await project_relation_ref01_ent.create(project_relation_ref01_data)).data();
        (0, node_assert_1.default)(null != project_relation_ref01_data.id);
        // LIST
        const project_relation_ref01_match = {};
        project_relation_ref01_match['after'] = setup.idmap['after01'];
        project_relation_ref01_match['before'] = setup.idmap['before01'];
        project_relation_ref01_match['first'] = setup.idmap['first01'];
        project_relation_ref01_match['include_archived'] = setup.idmap['include_archived01'];
        project_relation_ref01_match['last'] = setup.idmap['last01'];
        project_relation_ref01_match['order_by'] = setup.idmap['order_by01'];
        const project_relation_ref01_list = (await project_relation_ref01_ent.list(project_relation_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(project_relation_ref01_list, { id: project_relation_ref01_data.id })));
        // UPDATE
        const project_relation_ref01_data_up0 = {};
        project_relation_ref01_data_up0.id = project_relation_ref01_data.id;
        const project_relation_ref01_markdef_up0 = { name: 'anchorType', value: 'Mark01-project_relation_ref01_' + setup.now };
        project_relation_ref01_data_up0[project_relation_ref01_markdef_up0.name] = project_relation_ref01_markdef_up0.value;
        const project_relation_ref01_resdata_up0 = (await project_relation_ref01_ent.update(project_relation_ref01_data_up0)).data();
        (0, node_assert_1.default)(project_relation_ref01_resdata_up0.id === project_relation_ref01_data_up0.id);
        (0, node_assert_1.default)(project_relation_ref01_resdata_up0[project_relation_ref01_markdef_up0.name] === project_relation_ref01_markdef_up0.value);
        // LOAD
        const project_relation_ref01_match_dt0 = {};
        project_relation_ref01_match_dt0.id = project_relation_ref01_data.id;
        const project_relation_ref01_data_dt0 = (await project_relation_ref01_ent.load(project_relation_ref01_match_dt0)).data();
        (0, node_assert_1.default)(project_relation_ref01_data_dt0.id === project_relation_ref01_data.id);
        // REMOVE
        const project_relation_ref01_match_rm0 = { id: project_relation_ref01_data.id };
        await project_relation_ref01_ent.remove(project_relation_ref01_match_rm0);
        // LIST
        const project_relation_ref01_match_rt0 = {};
        project_relation_ref01_match_rt0['after'] = setup.idmap['after01'];
        project_relation_ref01_match_rt0['before'] = setup.idmap['before01'];
        project_relation_ref01_match_rt0['first'] = setup.idmap['first01'];
        project_relation_ref01_match_rt0['include_archived'] = setup.idmap['include_archived01'];
        project_relation_ref01_match_rt0['last'] = setup.idmap['last01'];
        project_relation_ref01_match_rt0['order_by'] = setup.idmap['order_by01'];
        const project_relation_ref01_list_rt0 = (await project_relation_ref01_ent.list(project_relation_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(project_relation_ref01_list_rt0, { id: project_relation_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/project_relation/ProjectRelationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['project_relation01', 'project_relation02', 'project_relation03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_PROJECT_RELATION_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_PROJECT_RELATION_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_PROJECT_RELATION_ENTID'];
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
//# sourceMappingURL=ProjectRelationEntity.test.js.map