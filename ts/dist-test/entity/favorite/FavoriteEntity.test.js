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
(0, node_test_1.describe)('FavoriteEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.Favorite();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'favorite.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "aiConversation": { "a": true, "h": "Ai Conversation", "n": "aiConversation", "r": false, "sh": "[INTERNAL] The favorited Agent conversation.", "t": "`$OBJECT`", "key$": "aiConversation", "index$": 0 }, "archivedAt": { "a": true, "h": "Archived At", "n": "archivedAt", "r": false, "sh": "The time at which the entity was archived.", "t": "`$ANY`", "key$": "archivedAt", "index$": 1 }, "color": { "a": true, "h": "Color", "n": "color", "r": false, "sh": "[Internal] Returns the color of the favorite's icon.", "t": "`$STRING`", "key$": "color", "index$": 2 }, "createdAt": { "a": true, "h": "Created At", "n": "createdAt", "r": true, "sh": "The time at which the entity was created.", "t": "`$ANY`", "key$": "createdAt", "index$": 3 }, "customView": { "a": true, "h": "Custom View", "n": "customView", "r": false, "sh": "The favorited custom view.", "t": "`$OBJECT`", "key$": "customView", "index$": 4 }, "customer": { "a": true, "h": "Customer", "n": "customer", "r": false, "sh": "The favorited customer.", "t": "`$OBJECT`", "key$": "customer", "index$": 5 }, "cycle": { "a": true, "h": "Cycle", "n": "cycle", "r": false, "sh": "The favorited cycle.", "t": "`$OBJECT`", "key$": "cycle", "index$": 6 }, "dashboard": { "a": true, "h": "Dashboard", "n": "dashboard", "r": false, "sh": "The favorited dashboard.", "t": "`$OBJECT`", "key$": "dashboard", "index$": 7 }, "detail": { "a": true, "h": "Detail", "n": "detail", "r": false, "sh": "[Internal] Detail text for favorite's `title` (e.g.", "t": "`$STRING`", "key$": "detail", "index$": 8 }, "document": { "a": true, "h": "Document", "n": "document", "r": false, "sh": "The favorited document.", "t": "`$OBJECT`", "key$": "document", "index$": 9 }, "facet": { "a": true, "h": "Facet", "n": "facet", "r": false, "sh": "[INTERNAL] The favorited facet.", "t": "`$OBJECT`", "key$": "facet", "index$": 10 }, "folderName": { "a": true, "h": "Folder Name", "n": "folderName", "r": false, "sh": "The name of the folder.", "t": "`$STRING`", "key$": "folderName", "index$": 11 }, "icon": { "a": true, "h": "Icon", "n": "icon", "r": false, "sh": "[Internal] Name of the favorite's icon.", "t": "`$STRING`", "key$": "icon", "index$": 12 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The unique identifier of the entity.", "t": "`$STRING`", "key$": "id", "index$": 13 }, "initiative": { "a": true, "h": "Initiative", "n": "initiative", "r": false, "sh": "The favorited initiative.", "t": "`$OBJECT`", "key$": "initiative", "index$": 14 }, "initiativeLabel": { "a": true, "h": "Initiative Label", "n": "initiativeLabel", "r": false, "sh": "[INTERNAL] The favorited initiative label.", "t": "`$OBJECT`", "key$": "initiativeLabel", "index$": 15 }, "initiativeTab": { "a": true, "h": "Initiative Tab", "n": "initiativeTab", "r": false, "sh": "The targeted tab of the initiative.", "t": "`$STRING`", "key$": "initiativeTab", "index$": 16 }, "issue": { "a": true, "h": "Issue", "n": "issue", "r": false, "sh": "The favorited issue.", "t": "`$OBJECT`", "key$": "issue", "index$": 17 }, "label": { "a": true, "h": "Label", "n": "label", "r": false, "sh": "The favorited label.", "t": "`$OBJECT`", "key$": "label", "index$": 18 }, "liveFolderDefinition": { "a": true, "h": "Live Folder Definition", "n": "liveFolderDefinition", "r": false, "sh": "The versioned lazy root and filter represented by this live favorite folder.", "t": "`$ANY`", "key$": "liveFolderDefinition", "index$": 19 }, "liveFolderPreset": { "a": true, "h": "Live Folder Preset", "n": "liveFolderPreset", "r": false, "sh": "The predefined live folder represented by this favorite.", "t": "`$STRING`", "key$": "liveFolderPreset", "index$": 20 }, "owner": { "a": true, "h": "Owner", "n": "owner", "r": false, "sh": "The user who owns this favorite.", "t": "`$OBJECT`", "key$": "owner", "index$": 21 }, "parent": { "a": true, "h": "Parent", "n": "parent", "r": false, "sh": "The parent folder of the favorite.", "t": "`$OBJECT`", "key$": "parent", "index$": 22 }, "pipelineTab": { "a": true, "h": "Pipeline Tab", "n": "pipelineTab", "r": false, "sh": "The targeted tab of the release pipeline.", "t": "`$STRING`", "key$": "pipelineTab", "index$": 23 }, "predefinedViewTeam": { "a": true, "h": "Predefined View Team", "n": "predefinedViewTeam", "r": false, "sh": "The team of the favorited predefined view.", "t": "`$OBJECT`", "key$": "predefinedViewTeam", "index$": 24 }, "predefinedViewType": { "a": true, "h": "Predefined View Type", "n": "predefinedViewType", "r": false, "sh": "The type of favorited predefined view (e.g., 'allIssues', 'activeCycle', 'backlog', 'triage').", "t": "`$STRING`", "key$": "predefinedViewType", "index$": 25 }, "project": { "a": true, "h": "Project", "n": "project", "r": false, "sh": "The favorited project.", "t": "`$OBJECT`", "key$": "project", "index$": 26 }, "projectLabel": { "a": true, "h": "Project Label", "n": "projectLabel", "r": false, "sh": "The favorited project label.", "t": "`$OBJECT`", "key$": "projectLabel", "index$": 27 }, "projectTab": { "a": true, "h": "Project Tab", "n": "projectTab", "r": false, "sh": "The targeted tab of the project.", "t": "`$STRING`", "key$": "projectTab", "index$": 28 }, "projectTeam": { "a": true, "h": "Project Team", "n": "projectTeam", "r": false, "sh": "[DEPRECATED] The favorited team of the project.", "t": "`$OBJECT`", "key$": "projectTeam", "index$": 29 }, "pullRequest": { "a": true, "h": "Pull Request", "n": "pullRequest", "r": false, "sh": "The favorited pull request.", "t": "`$OBJECT`", "key$": "pullRequest", "index$": 30 }, "release": { "a": true, "h": "Release", "n": "release", "r": false, "sh": "The favorited release.", "t": "`$OBJECT`", "key$": "release", "index$": 31 }, "releaseNote": { "a": true, "h": "Release Note", "n": "releaseNote", "r": false, "sh": "The favorited release note.", "t": "`$OBJECT`", "key$": "releaseNote", "index$": 32 }, "releasePipeline": { "a": true, "h": "Release Pipeline", "n": "releasePipeline", "r": false, "sh": "The favorited release pipeline.", "t": "`$OBJECT`", "key$": "releasePipeline", "index$": 33 }, "sortOrder": { "a": true, "h": "Sort Order", "n": "sortOrder", "r": true, "sh": "The position of this item in the user's favorites list.", "t": "`$NUMBER`", "key$": "sortOrder", "index$": 34 }, "team": { "a": true, "h": "Team", "n": "team", "r": false, "sh": "The favorited team.", "t": "`$OBJECT`", "key$": "team", "index$": 35 }, "title": { "a": true, "h": "Title", "n": "title", "r": true, "sh": "[Internal] Favorite's title text (name of the favorite'd object or folder).", "t": "`$STRING`", "key$": "title", "index$": 36 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "sh": "The type of entity this favorite references, such as 'issue', 'project', 'cycle', 'customView', 'document', 'folder', etc.", "t": "`$STRING`", "key$": "type", "index$": 37 }, "updatedAt": { "a": true, "h": "Updated At", "n": "updatedAt", "r": true, "sh": "The last time at which the entity was meaningfully updated.", "t": "`$ANY`", "key$": "updatedAt", "index$": 38 }, "url": { "a": true, "h": "Url", "n": "url", "r": false, "sh": "URL of the favorited entity.", "t": "`$STRING`", "key$": "url", "index$": 39 }, "user": { "a": true, "h": "User", "n": "user", "r": false, "sh": "The favorited user.", "t": "`$OBJECT`", "key$": "user", "index$": 40 }, "workflowDefinition": { "a": true, "h": "Workflow Definition", "n": "workflowDefinition", "r": false, "sh": "The favorited loop.", "t": "`$OBJECT`", "key$": "workflowDefinition", "index$": 41 } }, "id": { "field": "id", "name": "id" }, "name": "favorite", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST favoriteCreate", "source": "graphql", "version": 2 }, "g": {}, "gq": { "doc": "mutation FavoriteCreate($input: FavoriteCreateInput!) { favoriteCreate(input: $input) { favorite { ...FavoriteFields } success } } fragment FavoriteFields on Favorite { aiConversation { id } archivedAt color createdAt customView { id } customer { id } cycle { id } dashboard { id } detail document { id } facet { id } folderName icon id initiative { id } initiativeLabel { id } initiativeTab issue { id } label { id } liveFolderDefinition liveFolderPreset owner { id } parent { id } pipelineTab predefinedViewTeam { id } predefinedViewType project { id } projectLabel { id } projectTab projectTeam { id } pullRequest { id } release { id } releaseNote { id } releasePipeline { id } sortOrder team { id } title type updatedAt url user { id } workflowDefinition { id } }", "field": "favoriteCreate", "optype": "mutation", "vars": [{ "from": "", "gqltype": "FavoriteCreateInput!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "favoriteCreate", "q": {}, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.favoriteCreate.favorite`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "POST favorites", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "before", "or": "before", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "first", "or": "first", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "param", "n": "include_archived", "or": "include_archived", "r": false, "t": "`$BOOLEAN`", "index$": 3 }, { "a": true, "k": "param", "n": "last", "or": "last", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "param", "n": "order_by", "or": "order_by", "r": false, "t": "`$ANY`", "index$": 5 }] }, "gq": { "doc": "query FavoriteList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { favorites(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...FavoriteFields } pageInfo { endCursor hasNextPage } } } fragment FavoriteFields on Favorite { aiConversation { id } archivedAt color createdAt customView { id } customer { id } cycle { id } dashboard { id } detail document { id } facet { id } folderName icon id initiative { id } initiativeLabel { id } initiativeTab issue { id } label { id } liveFolderDefinition liveFolderPreset owner { id } parent { id } pipelineTab predefinedViewTeam { id } predefinedViewType project { id } projectLabel { id } projectTab projectTeam { id } pullRequest { id } release { id } releaseNote { id } releasePipeline { id } sortOrder team { id } title type updatedAt url user { id } workflowDefinition { id } }", "field": "favorites", "optype": "query", "page": { "cursor": "pageInfo.endCursor", "more": "pageInfo.hasNextPage", "nodes": "nodes", "style": "relay" }, "vars": [{ "from": "after", "gqltype": "String", "name": "after" }, { "from": "before", "gqltype": "String", "name": "before" }, { "from": "first", "gqltype": "Int", "name": "first" }, { "from": "includeArchived", "gqltype": "Boolean", "name": "includeArchived" }, { "from": "last", "gqltype": "Int", "name": "last" }, { "from": "orderBy", "gqltype": "PaginationOrderBy", "name": "orderBy" }] }, "k": "graphql", "m": "POST", "o": "favorites", "q": {}, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.favorites.nodes`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "POST favorite", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "query FavoriteLoad($id: String!) { favorite(id: $id) { ...FavoriteFields } } fragment FavoriteFields on Favorite { aiConversation { id } archivedAt color createdAt customView { id } customer { id } cycle { id } dashboard { id } detail document { id } facet { id } folderName icon id initiative { id } initiativeLabel { id } initiativeTab issue { id } label { id } liveFolderDefinition liveFolderPreset owner { id } parent { id } pipelineTab predefinedViewTeam { id } predefinedViewType project { id } projectLabel { id } projectTab projectTeam { id } pullRequest { id } release { id } releaseNote { id } releasePipeline { id } sortOrder team { id } title type updatedAt url user { id } workflowDefinition { id } }", "field": "favorite", "optype": "query", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "favorite", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.favorite`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "POST favoriteDelete", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation FavoriteRemove($id: String!) { favoriteDelete(id: $id) { entityId lastSyncId success } }", "field": "favoriteDelete", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "favoriteDelete", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.favoriteDelete`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "POST favoriteUpdate", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation FavoriteUpdate($id: String!, $input: FavoriteUpdateInput!) { favoriteUpdate(id: $id, input: $input) { favorite { ...FavoriteFields } success } } fragment FavoriteFields on Favorite { aiConversation { id } archivedAt color createdAt customView { id } customer { id } cycle { id } dashboard { id } detail document { id } facet { id } folderName icon id initiative { id } initiativeLabel { id } initiativeTab issue { id } label { id } liveFolderDefinition liveFolderPreset owner { id } parent { id } pipelineTab predefinedViewTeam { id } predefinedViewType project { id } projectLabel { id } projectTab projectTeam { id } pullRequest { id } release { id } releaseNote { id } releasePipeline { id } sortOrder team { id } title type updatedAt url user { id } workflowDefinition { id } }", "field": "favoriteUpdate", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }, { "from": "", "gqltype": "FavoriteUpdateInput!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "favoriteUpdate", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.favoriteUpdate.favorite`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "favorite", "name__orig": "favorite", "Name": "Favorite", "name_": "favorite", "name-": "favorite", "NAME": "FAVORITE", "index$": 27 }, { "active": true, "entity": "favorite", "key$": "BasicFavoriteFlow", "kind": "basic", "name": "BasicFavoriteFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "favorite_ref01" }, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "favorite_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "favorite_ref01", "srcdatavar": "favorite_ref01_data", "suffix": "_up0", "textfield": "color" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-favorite_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "favorite_ref01", "srcdatavar": "favorite_ref01_data", "suffix": "_dt0" }, "m": { "id": "favorite01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-favorite_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "favorite_ref01", "suffix": "_rm0" }, "m": { "id": "favorite01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "favorite_ref01" } }], "index$": 5 }] }, 'Favorite', { "POST favoriteCreate": { "protocol": "graphql" }, "POST favorites": { "protocol": "graphql" }, "POST favorite": { "protocol": "graphql" }, "POST favoriteDelete": { "protocol": "graphql" }, "POST favoriteUpdate": { "protocol": "graphql" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const favorite_ref01_ent = client.Favorite();
        let favorite_ref01_data = setup.data.new.favorite['favorite_ref01'];
        favorite_ref01_data['after'] = setup.idmap['after01'];
        favorite_ref01_data['before'] = setup.idmap['before01'];
        favorite_ref01_data['first'] = setup.idmap['first01'];
        favorite_ref01_data['include_archived'] = setup.idmap['include_archived01'];
        favorite_ref01_data['last'] = setup.idmap['last01'];
        favorite_ref01_data['order_by'] = setup.idmap['order_by01'];
        favorite_ref01_data = (await favorite_ref01_ent.create(favorite_ref01_data)).data();
        (0, node_assert_1.default)(null != favorite_ref01_data.id);
        // LIST
        const favorite_ref01_match = {};
        favorite_ref01_match['after'] = setup.idmap['after01'];
        favorite_ref01_match['before'] = setup.idmap['before01'];
        favorite_ref01_match['first'] = setup.idmap['first01'];
        favorite_ref01_match['include_archived'] = setup.idmap['include_archived01'];
        favorite_ref01_match['last'] = setup.idmap['last01'];
        favorite_ref01_match['order_by'] = setup.idmap['order_by01'];
        const favorite_ref01_list = (await favorite_ref01_ent.list(favorite_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(favorite_ref01_list, { id: favorite_ref01_data.id })));
        // UPDATE
        const favorite_ref01_data_up0 = {};
        favorite_ref01_data_up0.id = favorite_ref01_data.id;
        const favorite_ref01_markdef_up0 = { name: 'color', value: 'Mark01-favorite_ref01_' + setup.now };
        favorite_ref01_data_up0[favorite_ref01_markdef_up0.name] = favorite_ref01_markdef_up0.value;
        const favorite_ref01_resdata_up0 = (await favorite_ref01_ent.update(favorite_ref01_data_up0)).data();
        (0, node_assert_1.default)(favorite_ref01_resdata_up0.id === favorite_ref01_data_up0.id);
        (0, node_assert_1.default)(favorite_ref01_resdata_up0[favorite_ref01_markdef_up0.name] === favorite_ref01_markdef_up0.value);
        // LOAD
        const favorite_ref01_match_dt0 = {};
        favorite_ref01_match_dt0.id = favorite_ref01_data.id;
        const favorite_ref01_data_dt0 = (await favorite_ref01_ent.load(favorite_ref01_match_dt0)).data();
        (0, node_assert_1.default)(favorite_ref01_data_dt0.id === favorite_ref01_data.id);
        // REMOVE
        const favorite_ref01_match_rm0 = { id: favorite_ref01_data.id };
        await favorite_ref01_ent.remove(favorite_ref01_match_rm0);
        // LIST
        const favorite_ref01_match_rt0 = {};
        favorite_ref01_match_rt0['after'] = setup.idmap['after01'];
        favorite_ref01_match_rt0['before'] = setup.idmap['before01'];
        favorite_ref01_match_rt0['first'] = setup.idmap['first01'];
        favorite_ref01_match_rt0['include_archived'] = setup.idmap['include_archived01'];
        favorite_ref01_match_rt0['last'] = setup.idmap['last01'];
        favorite_ref01_match_rt0['order_by'] = setup.idmap['order_by01'];
        const favorite_ref01_list_rt0 = (await favorite_ref01_ent.list(favorite_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(favorite_ref01_list_rt0, { id: favorite_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/favorite/FavoriteTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['favorite01', 'favorite02', 'favorite03', 'after01', 'before01', 'first01', 'include_archived01', 'last01', 'order_by01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_FAVORITE_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_FAVORITE_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_FAVORITE_ENTID'];
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
//# sourceMappingURL=FavoriteEntity.test.js.map