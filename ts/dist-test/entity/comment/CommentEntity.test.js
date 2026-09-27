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
(0, node_test_1.describe)('CommentEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.Comment();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'comment.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "agentSession": { "a": true, "h": "Agent Session", "n": "agentSession", "r": false, "sh": "Agent session associated with this comment.", "t": "`$OBJECT`", "key$": "agentSession", "index$": 0 }, "archivedAt": { "a": true, "h": "Archived At", "n": "archivedAt", "r": false, "sh": "The time at which the entity was archived.", "t": "`$ANY`", "key$": "archivedAt", "index$": 1 }, "body": { "a": true, "h": "Body", "n": "body", "r": true, "sh": "The comment content in markdown format.", "t": "`$STRING`", "key$": "body", "index$": 2 }, "bodyData": { "a": true, "h": "Body Data", "n": "bodyData", "r": true, "sh": "[Internal] The comment content as a ProseMirror document.", "t": "`$STRING`", "key$": "bodyData", "index$": 3 }, "botActor": { "a": true, "h": "Bot Actor", "n": "botActor", "r": false, "sh": "The bot that created the comment.", "t": "`$OBJECT`", "key$": "botActor", "index$": 4 }, "createdAt": { "a": true, "h": "Created At", "n": "createdAt", "r": true, "sh": "The time at which the entity was created.", "t": "`$ANY`", "key$": "createdAt", "index$": 5 }, "documentContent": { "a": true, "h": "Document Content", "n": "documentContent", "r": false, "sh": "The document content that the comment is associated with.", "t": "`$OBJECT`", "key$": "documentContent", "index$": 6 }, "documentContentId": { "a": true, "h": "Document Content Id", "n": "documentContentId", "r": false, "sh": "The ID of the document content that the comment is associated with.", "t": "`$STRING`", "key$": "documentContentId", "index$": 7 }, "editedAt": { "a": true, "h": "Edited At", "n": "editedAt", "r": false, "sh": "The time the comment was last edited by its author.", "t": "`$ANY`", "key$": "editedAt", "index$": 8 }, "externalThread": { "a": true, "h": "External Thread", "n": "externalThread", "r": false, "sh": "The external thread that the comment is synced with.", "t": "`$OBJECT`", "key$": "externalThread", "index$": 9 }, "externalUser": { "a": true, "h": "External User", "n": "externalUser", "r": false, "sh": "The external user who wrote the comment, when the comment was created through an integration such as Slack or Intercom.", "t": "`$OBJECT`", "key$": "externalUser", "index$": 10 }, "hideInLinear": { "a": true, "h": "Hide In Linear", "n": "hideInLinear", "r": true, "sh": "[Internal] Whether the comment should be hidden from Linear clients.", "t": "`$BOOLEAN`", "key$": "hideInLinear", "index$": 11 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The unique identifier of the entity.", "t": "`$STRING`", "key$": "id", "index$": 12 }, "initiative": { "a": true, "h": "Initiative", "n": "initiative", "r": false, "sh": "The initiative that the comment is associated with.", "t": "`$OBJECT`", "key$": "initiative", "index$": 13 }, "initiativeId": { "a": true, "h": "Initiative Id", "n": "initiativeId", "r": false, "sh": "The ID of the initiative that the comment is associated with.", "t": "`$STRING`", "key$": "initiativeId", "index$": 14 }, "initiativeUpdate": { "a": true, "h": "Initiative Update", "n": "initiativeUpdate", "r": false, "sh": "The initiative update that the comment is associated with.", "t": "`$OBJECT`", "key$": "initiativeUpdate", "index$": 15 }, "initiativeUpdateId": { "a": true, "h": "Initiative Update Id", "n": "initiativeUpdateId", "r": false, "sh": "The ID of the initiative update that the comment is associated with.", "t": "`$STRING`", "key$": "initiativeUpdateId", "index$": 16 }, "isArtificialAgentSessionRoot": { "a": true, "h": "Is Artificial Agent Session Root", "n": "isArtificialAgentSessionRoot", "r": true, "sh": "[Internal] Whether the comment is an artificial placeholder for an agent session thread created without a comment mention.", "t": "`$BOOLEAN`", "key$": "isArtificialAgentSessionRoot", "index$": 17 }, "issue": { "a": true, "h": "Issue", "n": "issue", "r": false, "sh": "The issue that the comment is associated with.", "t": "`$OBJECT`", "key$": "issue", "index$": 18 }, "issueId": { "a": true, "h": "Issue Id", "n": "issueId", "r": false, "sh": "The ID of the issue that the comment is associated with.", "t": "`$STRING`", "key$": "issueId", "index$": 19 }, "onBehalfOf": { "a": true, "h": "On Behalf Of", "n": "onBehalfOf", "r": false, "sh": "[Internal] The user on whose behalf the comment was created, e.g.", "t": "`$OBJECT`", "key$": "onBehalfOf", "index$": 20 }, "parent": { "a": true, "h": "Parent", "n": "parent", "r": false, "sh": "The parent comment under which the current comment is nested.", "t": "`$OBJECT`", "key$": "parent", "index$": 21 }, "parentId": { "a": true, "h": "Parent Id", "n": "parentId", "r": false, "sh": "The ID of the parent comment under which the current comment is nested.", "t": "`$STRING`", "key$": "parentId", "index$": 22 }, "post": { "a": true, "h": "Post", "n": "post", "r": false, "sh": "The post that the comment is associated with.", "t": "`$OBJECT`", "key$": "post", "index$": 23 }, "project": { "a": true, "h": "Project", "n": "project", "r": false, "sh": "The project that the comment is associated with.", "t": "`$OBJECT`", "key$": "project", "index$": 24 }, "projectId": { "a": true, "h": "Project Id", "n": "projectId", "r": false, "sh": "The ID of the project that the comment is associated with.", "t": "`$STRING`", "key$": "projectId", "index$": 25 }, "projectUpdate": { "a": true, "h": "Project Update", "n": "projectUpdate", "r": false, "sh": "The project update that the comment is associated with.", "t": "`$OBJECT`", "key$": "projectUpdate", "index$": 26 }, "projectUpdateId": { "a": true, "h": "Project Update Id", "n": "projectUpdateId", "r": false, "sh": "The ID of the project update that the comment is associated with.", "t": "`$STRING`", "key$": "projectUpdateId", "index$": 27 }, "quotedText": { "a": true, "h": "Quoted Text", "n": "quotedText", "r": false, "sh": "The text that this comment references, used for inline comments on documents or issue descriptions.", "t": "`$STRING`", "key$": "quotedText", "index$": 28 }, "reactionData": { "a": true, "h": "Reaction Data", "n": "reactionData", "r": true, "sh": "Emoji reaction summary for this comment, grouped by emoji type.", "t": "`$ANY`", "key$": "reactionData", "index$": 29 }, "resolvedAt": { "a": true, "h": "Resolved At", "n": "resolvedAt", "r": false, "sh": "The time when the comment thread was resolved.", "t": "`$ANY`", "key$": "resolvedAt", "index$": 30 }, "resolvingComment": { "a": true, "h": "Resolving Comment", "n": "resolvingComment", "r": false, "sh": "The child comment that resolved this thread.", "t": "`$OBJECT`", "key$": "resolvingComment", "index$": 31 }, "resolvingCommentId": { "a": true, "h": "Resolving Comment Id", "n": "resolvingCommentId", "r": false, "sh": "The ID of the child comment that resolved this thread.", "t": "`$STRING`", "key$": "resolvingCommentId", "index$": 32 }, "resolvingUser": { "a": true, "h": "Resolving User", "n": "resolvingUser", "r": false, "sh": "The user that resolved the comment thread.", "t": "`$OBJECT`", "key$": "resolvingUser", "index$": 33 }, "threadSummary": { "a": true, "h": "Thread Summary", "n": "threadSummary", "r": false, "sh": "[Internal] An AI-generated summary of the comment thread.", "t": "`$ANY`", "key$": "threadSummary", "index$": 34 }, "updatedAt": { "a": true, "h": "Updated At", "n": "updatedAt", "r": true, "sh": "The last time at which the entity was meaningfully updated.", "t": "`$ANY`", "key$": "updatedAt", "index$": 35 }, "url": { "a": true, "h": "Url", "n": "url", "r": true, "sh": "Comment's URL.", "t": "`$STRING`", "key$": "url", "index$": 36 }, "user": { "a": true, "h": "User", "n": "user", "r": false, "sh": "The user who wrote the comment.", "t": "`$OBJECT`", "key$": "user", "index$": 37 } }, "id": { "field": "id", "name": "id" }, "name": "comment", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST commentCreate", "source": "graphql", "version": 2 }, "g": {}, "gq": { "doc": "mutation CommentCreate($input: CommentCreateInput!) { commentCreate(input: $input) { comment { ...CommentFields } success } } fragment CommentFields on Comment { agentSession { id } archivedAt body bodyData botActor { id } createdAt documentContent { id } documentContentId editedAt externalThread { id } externalUser { id } hideInLinear id initiative { id } initiativeId initiativeUpdate { id } initiativeUpdateId isArtificialAgentSessionRoot issue { id } issueId onBehalfOf { id } parent { id } parentId post { id } project { id } projectId projectUpdate { id } projectUpdateId quotedText reactionData resolvedAt resolvingComment { id } resolvingCommentId resolvingUser { id } threadSummary updatedAt url user { id } }", "field": "commentCreate", "optype": "mutation", "vars": [{ "from": "", "gqltype": "CommentCreateInput!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "commentCreate", "q": {}, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.commentCreate.comment`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "POST comments", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "before", "or": "before", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "first", "or": "first", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "param", "n": "include_archived", "or": "include_archived", "r": false, "t": "`$BOOLEAN`", "index$": 3 }, { "a": true, "k": "param", "n": "last", "or": "last", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "param", "n": "order_by", "or": "order_by", "r": false, "t": "`$ANY`", "index$": 5 }] }, "gq": { "doc": "query CommentList($after: String, $before: String, $filter: CommentFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { comments(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...CommentFields } pageInfo { endCursor hasNextPage } } } fragment CommentFields on Comment { agentSession { id } archivedAt body bodyData botActor { id } createdAt documentContent { id } documentContentId editedAt externalThread { id } externalUser { id } hideInLinear id initiative { id } initiativeId initiativeUpdate { id } initiativeUpdateId isArtificialAgentSessionRoot issue { id } issueId onBehalfOf { id } parent { id } parentId post { id } project { id } projectId projectUpdate { id } projectUpdateId quotedText reactionData resolvedAt resolvingComment { id } resolvingCommentId resolvingUser { id } threadSummary updatedAt url user { id } }", "field": "comments", "optype": "query", "page": { "cursor": "pageInfo.endCursor", "more": "pageInfo.hasNextPage", "nodes": "nodes", "style": "relay" }, "vars": [{ "from": "after", "gqltype": "String", "name": "after" }, { "from": "before", "gqltype": "String", "name": "before" }, { "from": "", "gqltype": "CommentFilter", "name": "filter" }, { "from": "first", "gqltype": "Int", "name": "first" }, { "from": "includeArchived", "gqltype": "Boolean", "name": "includeArchived" }, { "from": "last", "gqltype": "Int", "name": "last" }, { "from": "orderBy", "gqltype": "PaginationOrderBy", "name": "orderBy" }] }, "k": "graphql", "m": "POST", "o": "comments", "q": {}, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.comments.nodes`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "POST comment", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "hash", "or": "hash", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "id", "r": false, "t": "`$STRING`", "index$": 1 }] }, "gq": { "doc": "query CommentLoad($hash: String, $id: String) { comment(hash: $hash, id: $id) { ...CommentFields } } fragment CommentFields on Comment { agentSession { id } archivedAt body bodyData botActor { id } createdAt documentContent { id } documentContentId editedAt externalThread { id } externalUser { id } hideInLinear id initiative { id } initiativeId initiativeUpdate { id } initiativeUpdateId isArtificialAgentSessionRoot issue { id } issueId onBehalfOf { id } parent { id } parentId post { id } project { id } projectId projectUpdate { id } projectUpdateId quotedText reactionData resolvedAt resolvingComment { id } resolvingCommentId resolvingUser { id } threadSummary updatedAt url user { id } }", "field": "comment", "optype": "query", "vars": [{ "from": "hash", "gqltype": "String", "name": "hash" }, { "from": "id", "gqltype": "String", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "comment", "q": {}, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.comment`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "POST commentDelete", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation CommentRemove($id: String!) { commentDelete(id: $id) { entityId lastSyncId success } }", "field": "commentDelete", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "commentDelete", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.commentDelete`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "POST commentResolve", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "resolving_comment_id", "or": "resolving_comment_id", "r": false, "t": "`$STRING`", "index$": 1 }] }, "gq": { "doc": "mutation CommentUpdateResolve($id: String!, $resolvingCommentId: String) { commentResolve(id: $id, resolvingCommentId: $resolvingCommentId) { comment { ...CommentFields } success } } fragment CommentFields on Comment { agentSession { id } archivedAt body bodyData botActor { id } createdAt documentContent { id } documentContentId editedAt externalThread { id } externalUser { id } hideInLinear id initiative { id } initiativeId initiativeUpdate { id } initiativeUpdateId isArtificialAgentSessionRoot issue { id } issueId onBehalfOf { id } parent { id } parentId post { id } project { id } projectId projectUpdate { id } projectUpdateId quotedText reactionData resolvedAt resolvingComment { id } resolvingCommentId resolvingUser { id } threadSummary updatedAt url user { id } }", "field": "commentResolve", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }, { "from": "resolvingCommentId", "gqltype": "String", "name": "resolvingCommentId" }] }, "k": "graphql", "m": "POST", "o": "commentResolve", "q": { "$action": "resolve", "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.commentResolve.comment`" }, "index$": 0 }, { "a": true, "co": { "id": "POST commentUnresolve", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation CommentUpdateUnresolve($id: String!) { commentUnresolve(id: $id) { comment { ...CommentFields } success } } fragment CommentFields on Comment { agentSession { id } archivedAt body bodyData botActor { id } createdAt documentContent { id } documentContentId editedAt externalThread { id } externalUser { id } hideInLinear id initiative { id } initiativeId initiativeUpdate { id } initiativeUpdateId isArtificialAgentSessionRoot issue { id } issueId onBehalfOf { id } parent { id } parentId post { id } project { id } projectId projectUpdate { id } projectUpdateId quotedText reactionData resolvedAt resolvingComment { id } resolvingCommentId resolvingUser { id } threadSummary updatedAt url user { id } }", "field": "commentUnresolve", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "commentUnresolve", "q": { "$action": "unresolve", "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.commentUnresolve.comment`" }, "index$": 1 }, { "a": true, "co": { "id": "POST commentUpdate", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "skip_edited_at", "or": "skip_edited_at", "r": false, "t": "`$BOOLEAN`", "index$": 1 }] }, "gq": { "doc": "mutation CommentUpdate($id: String!, $input: CommentUpdateInput!, $skipEditedAt: Boolean) { commentUpdate(id: $id, input: $input, skipEditedAt: $skipEditedAt) { comment { ...CommentFields } success } } fragment CommentFields on Comment { agentSession { id } archivedAt body bodyData botActor { id } createdAt documentContent { id } documentContentId editedAt externalThread { id } externalUser { id } hideInLinear id initiative { id } initiativeId initiativeUpdate { id } initiativeUpdateId isArtificialAgentSessionRoot issue { id } issueId onBehalfOf { id } parent { id } parentId post { id } project { id } projectId projectUpdate { id } projectUpdateId quotedText reactionData resolvedAt resolvingComment { id } resolvingCommentId resolvingUser { id } threadSummary updatedAt url user { id } }", "field": "commentUpdate", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }, { "from": "", "gqltype": "CommentUpdateInput!", "name": "input" }, { "from": "skipEditedAt", "gqltype": "Boolean", "name": "skipEditedAt" }] }, "k": "graphql", "m": "POST", "o": "commentUpdate", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.commentUpdate.comment`" }, "index$": 2 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "comment", "name__orig": "comment", "Name": "Comment", "name_": "comment", "name-": "comment", "NAME": "COMMENT", "index$": 11 }, { "active": true, "entity": "comment", "key$": "BasicCommentFlow", "kind": "basic", "name": "BasicCommentFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "comment_ref01" }, "m": { "after": "after01", "before": "before01", "first": "first01", "hash": "hash01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01", "resolving_comment_id": "resolving_comment01", "skip_edited_at": "skip_edited_at01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "comment_ref01" } }], "index$": 1 }, { "a": true, "d": { "skip_edited_at": "skip_edited_at01" }, "i": { "ref": "comment_ref01", "srcdatavar": "comment_ref01_data", "suffix": "_up0", "textfield": "body" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-comment_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "comment_ref01", "srcdatavar": "comment_ref01_data", "suffix": "_dt0" }, "m": { "hash": "hash01", "id": "comment01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-comment_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "comment_ref01", "suffix": "_rm0" }, "m": { "id": "comment01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "comment_ref01" } }], "index$": 5 }] }, 'Comment', { "POST commentCreate": { "protocol": "graphql" }, "POST comments": { "protocol": "graphql" }, "POST comment": { "protocol": "graphql" }, "POST commentDelete": { "protocol": "graphql" }, "POST commentResolve": { "protocol": "graphql" }, "POST commentUnresolve": { "protocol": "graphql" }, "POST commentUpdate": { "protocol": "graphql" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const comment_ref01_ent = client.Comment();
        let comment_ref01_data = setup.data.new.comment['comment_ref01'];
        comment_ref01_data['after'] = setup.idmap['after01'];
        comment_ref01_data['before'] = setup.idmap['before01'];
        comment_ref01_data['first'] = setup.idmap['first01'];
        comment_ref01_data['hash'] = setup.idmap['hash01'];
        comment_ref01_data['include_archived'] = setup.idmap['include_archived01'];
        comment_ref01_data['last'] = setup.idmap['last01'];
        comment_ref01_data['order_by'] = setup.idmap['order_by01'];
        comment_ref01_data['resolving_comment_id'] = setup.idmap['resolving_comment01'];
        comment_ref01_data['skip_edited_at'] = setup.idmap['skip_edited_at01'];
        comment_ref01_data = (await comment_ref01_ent.create(comment_ref01_data)).data();
        (0, node_assert_1.default)(null != comment_ref01_data.id);
        // LIST
        const comment_ref01_match = {};
        comment_ref01_match['after'] = setup.idmap['after01'];
        comment_ref01_match['before'] = setup.idmap['before01'];
        comment_ref01_match['first'] = setup.idmap['first01'];
        comment_ref01_match['include_archived'] = setup.idmap['include_archived01'];
        comment_ref01_match['last'] = setup.idmap['last01'];
        comment_ref01_match['order_by'] = setup.idmap['order_by01'];
        const comment_ref01_list = (await comment_ref01_ent.list(comment_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(comment_ref01_list, { id: comment_ref01_data.id })));
        // UPDATE
        const comment_ref01_data_up0 = {};
        comment_ref01_data_up0.id = comment_ref01_data.id;
        comment_ref01_data_up0['skip_edited_at'] = setup.idmap['skip_edited_at'];
        const comment_ref01_markdef_up0 = { name: 'body', value: 'Mark01-comment_ref01_' + setup.now };
        comment_ref01_data_up0[comment_ref01_markdef_up0.name] = comment_ref01_markdef_up0.value;
        const comment_ref01_resdata_up0 = (await comment_ref01_ent.update(comment_ref01_data_up0)).data();
        (0, node_assert_1.default)(comment_ref01_resdata_up0.id === comment_ref01_data_up0.id);
        (0, node_assert_1.default)(comment_ref01_resdata_up0[comment_ref01_markdef_up0.name] === comment_ref01_markdef_up0.value);
        // LOAD
        const comment_ref01_match_dt0 = {};
        comment_ref01_match_dt0.id = comment_ref01_data.id;
        const comment_ref01_data_dt0 = (await comment_ref01_ent.load(comment_ref01_match_dt0)).data();
        (0, node_assert_1.default)(comment_ref01_data_dt0.id === comment_ref01_data.id);
        // REMOVE
        const comment_ref01_match_rm0 = { id: comment_ref01_data.id };
        await comment_ref01_ent.remove(comment_ref01_match_rm0);
        // LIST
        const comment_ref01_match_rt0 = {};
        comment_ref01_match_rt0['after'] = setup.idmap['after01'];
        comment_ref01_match_rt0['before'] = setup.idmap['before01'];
        comment_ref01_match_rt0['first'] = setup.idmap['first01'];
        comment_ref01_match_rt0['include_archived'] = setup.idmap['include_archived01'];
        comment_ref01_match_rt0['last'] = setup.idmap['last01'];
        comment_ref01_match_rt0['order_by'] = setup.idmap['order_by01'];
        const comment_ref01_list_rt0 = (await comment_ref01_ent.list(comment_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(comment_ref01_list_rt0, { id: comment_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/comment/CommentTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['comment01', 'comment02', 'comment03', 'after01', 'before01', 'first01', 'hash01', 'include_archived01', 'last01', 'order_by01', 'resolving_comment01', 'skip_edited_at01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_COMMENT_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_COMMENT_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_COMMENT_ENTID'];
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
//# sourceMappingURL=CommentEntity.test.js.map