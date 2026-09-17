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
(0, node_test_1.describe)('ProjectSearchResultEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.ProjectSearchResult();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'project_search_result.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "archivedAt", "req": false, "short": "The time at which the entity was archived.", "type": "`$ANY`", "index$": 0 }, { "active": true, "name": "autoArchivedAt", "req": false, "short": "The time at which the project was automatically archived by the auto-pruning process.", "type": "`$ANY`", "index$": 1 }, { "active": true, "name": "canceledAt", "req": false, "short": "The time at which the project was moved into a canceled status.", "type": "`$ANY`", "index$": 2 }, { "active": true, "name": "color", "req": true, "short": "The project's color as a HEX string.", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "completedAt", "req": false, "short": "The time at which the project was moved into a completed status.", "type": "`$ANY`", "index$": 4 }, { "active": true, "name": "completedIssueCountHistory", "req": true, "short": "The number of completed issues in the project at the end of each week since project creation.", "type": "`$NUMBER`", "index$": 5 }, { "active": true, "name": "completedScopeHistory", "req": true, "short": "The number of completed estimation points at the end of each week since project creation.", "type": "`$NUMBER`", "index$": 6 }, { "active": true, "name": "content", "req": false, "short": "The project's content in markdown format.", "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "contentState", "req": false, "short": "[Internal] The project's content as YJS state.", "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "convertedFromIssue", "req": false, "short": "The issue that was converted into this project.", "type": "`$OBJECT`", "index$": 9 }, { "active": true, "name": "createdAt", "req": true, "short": "The time at which the entity was created.", "type": "`$ANY`", "index$": 10 }, { "active": true, "name": "creator", "req": false, "short": "The user who created the project.", "type": "`$OBJECT`", "index$": 11 }, { "active": true, "name": "currentProgress", "req": true, "short": "[INTERNAL] The current progress of the project, broken down by issue status category.", "type": "`$ANY`", "index$": 12 }, { "active": true, "name": "description", "req": true, "short": "The short description of the project.", "type": "`$STRING`", "index$": 13 }, { "active": true, "name": "documentContent", "req": false, "short": "The content of the project description.", "type": "`$OBJECT`", "index$": 14 }, { "active": true, "name": "favorite", "req": false, "short": "The user's favorite associated with this project.", "type": "`$OBJECT`", "index$": 15 }, { "active": true, "name": "frequencyResolution", "req": true, "short": "The resolution of the reminder frequency.", "type": "`$STRING`", "index$": 16 }, { "active": true, "name": "health", "req": false, "short": "The overall health of the project, derived from the most recent project update.", "type": "`$STRING`", "index$": 17 }, { "active": true, "name": "healthUpdatedAt", "req": false, "short": "The time at which the project health was last updated, typically when a new project update is posted.", "type": "`$ANY`", "index$": 18 }, { "active": true, "name": "icon", "req": false, "short": "The icon of the project.", "type": "`$STRING`", "index$": 19 }, { "active": true, "name": "id", "req": true, "short": "The unique identifier of the entity.", "type": "`$STRING`", "index$": 20 }, { "active": true, "name": "identifier", "req": false, "short": "[Internal] The human-readable identifier of the project.", "type": "`$STRING`", "index$": 21 }, { "active": true, "name": "inProgressScopeHistory", "req": true, "short": "The number of in-progress estimation points at the end of each week since project creation.", "type": "`$NUMBER`", "index$": 22 }, { "active": true, "name": "integrationsSettings", "req": false, "short": "Settings for all integrations associated with that project.", "type": "`$OBJECT`", "index$": 23 }, { "active": true, "name": "issueCountHistory", "req": true, "short": "The total number of issues in the project at the end of each week since project creation.", "type": "`$NUMBER`", "index$": 24 }, { "active": true, "name": "labelIds", "req": true, "short": "The IDs of the project labels associated with this project.", "type": "`$STRING`", "index$": 25 }, { "active": true, "name": "lastAppliedTemplate", "req": false, "short": "The last template that was applied to this project.", "type": "`$OBJECT`", "index$": 26 }, { "active": true, "name": "lastUpdate", "req": false, "short": "The most recent status update posted for this project.", "type": "`$OBJECT`", "index$": 27 }, { "active": true, "name": "lead", "req": false, "short": "The user who leads the project.", "type": "`$OBJECT`", "index$": 28 }, { "active": true, "name": "leadTeam", "req": false, "short": "[Internal] The team that leads the project.", "type": "`$OBJECT`", "index$": 29 }, { "active": true, "name": "metadata", "req": true, "short": "Metadata related to search result.", "type": "`$ANY`", "index$": 30 }, { "active": true, "name": "microsoftTeamsChannelId", "req": false, "short": "The ID of the Microsoft Teams channel connected to the project, if any.", "type": "`$STRING`", "index$": 31 }, { "active": true, "name": "name", "req": true, "short": "The name of the project.", "type": "`$STRING`", "index$": 32 }, { "active": true, "name": "previousIdentifiers", "req": true, "short": "[Internal] Identifiers (default and custom) that this project has previously held.", "type": "`$STRING`", "index$": 33 }, { "active": true, "name": "priority", "req": true, "short": "The priority of the project.", "type": "`$INTEGER`", "index$": 34 }, { "active": true, "name": "priorityLabel", "req": true, "short": "The priority of the project as a label.", "type": "`$STRING`", "index$": 35 }, { "active": true, "name": "prioritySortOrder", "req": true, "short": "The sort order for the project within the workspace when ordered by priority.", "type": "`$NUMBER`", "index$": 36 }, { "active": true, "name": "progress", "req": true, "short": "The overall progress of the project.", "type": "`$NUMBER`", "index$": 37 }, { "active": true, "name": "progressHistory", "req": true, "short": "[INTERNAL] The progress history of the project, tracking issue completion over time.", "type": "`$ANY`", "index$": 38 }, { "active": true, "name": "projectUpdateRemindersPausedUntilAt", "req": false, "short": "The time until which project update reminders are paused.", "type": "`$ANY`", "index$": 39 }, { "active": true, "name": "resourceCount", "req": true, "short": "The number of resources associated with the project, including documents, external links, and attachments.", "type": "`$INTEGER`", "index$": 40 }, { "active": true, "name": "scope", "req": true, "short": "The overall scope (total estimate points) of the project.", "type": "`$NUMBER`", "index$": 41 }, { "active": true, "name": "scopeHistory", "req": true, "short": "The total scope (estimation points) of the project at the end of each week since project creation.", "type": "`$NUMBER`", "index$": 42 }, { "active": true, "name": "slackChannelId", "req": false, "short": "The ID of the Slack channel connected to the project, if any.", "type": "`$STRING`", "index$": 43 }, { "active": true, "name": "slugId", "req": true, "short": "The project's unique URL slug, used to construct human-readable URLs.", "type": "`$STRING`", "index$": 44 }, { "active": true, "name": "sortOrder", "req": true, "short": "The sort order for the project within the workspace.", "type": "`$NUMBER`", "index$": 45 }, { "active": true, "name": "startDate", "req": false, "short": "The estimated start date of the project.", "type": "`$ANY`", "index$": 46 }, { "active": true, "name": "startDateResolution", "req": false, "short": "The resolution of the project's start date, indicating whether it refers to a specific month, quarter, half-year, or year.", "type": "`$STRING`", "index$": 47 }, { "active": true, "name": "startedAt", "req": false, "short": "The time at which the project was moved into a started status.", "type": "`$ANY`", "index$": 48 }, { "active": true, "name": "status", "req": false, "short": "The current project status.", "type": "`$OBJECT`", "index$": 49 }, { "active": true, "name": "targetDate", "req": false, "short": "The estimated completion date of the project.", "type": "`$ANY`", "index$": 50 }, { "active": true, "name": "targetDateResolution", "req": false, "short": "The resolution of the project's estimated completion date, indicating whether it refers to a specific month, quarter, half-year, or year.", "type": "`$STRING`", "index$": 51 }, { "active": true, "name": "trashed", "req": false, "short": "A flag that indicates whether the project is in the trash bin.", "type": "`$BOOLEAN`", "index$": 52 }, { "active": true, "name": "updateReminderFrequency", "req": false, "short": "The frequency at which to prompt for updates.", "type": "`$NUMBER`", "index$": 53 }, { "active": true, "name": "updateReminderFrequencyInWeeks", "req": false, "short": "The n-weekly frequency at which to prompt for updates.", "type": "`$NUMBER`", "index$": 54 }, { "active": true, "name": "updateRemindersDay", "req": false, "short": "The day at which to prompt for updates.", "type": "`$STRING`", "index$": 55 }, { "active": true, "name": "updateRemindersHour", "req": false, "short": "The hour at which to prompt for updates.", "type": "`$NUMBER`", "index$": 56 }, { "active": true, "name": "updatedAt", "req": true, "short": "The last time at which the entity was meaningfully updated.", "type": "`$ANY`", "index$": 57 }, { "active": true, "name": "url", "req": true, "short": "Project URL.", "type": "`$STRING`", "index$": 58 }], "id": { "field": "id", "name": "id" }, "name": "project_search_result", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "after", "orig": "after", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "before", "orig": "before", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "kind": "param", "name": "first", "orig": "first", "reqd": false, "type": "`$INTEGER`", "index$": 2 }, { "active": true, "kind": "param", "name": "include_archived", "orig": "include_archived", "reqd": false, "type": "`$BOOLEAN`", "index$": 3 }, { "active": true, "kind": "param", "name": "include_comment", "orig": "include_comment", "reqd": false, "type": "`$BOOLEAN`", "index$": 4 }, { "active": true, "kind": "param", "name": "last", "orig": "last", "reqd": false, "type": "`$INTEGER`", "index$": 5 }, { "active": true, "kind": "param", "name": "order_by", "orig": "order_by", "reqd": false, "type": "`$ANY`", "index$": 6 }, { "active": true, "kind": "param", "name": "team_id", "orig": "team_id", "reqd": false, "type": "`$STRING`", "index$": 7 }, { "active": true, "kind": "param", "name": "term", "orig": "term", "reqd": true, "type": "`$STRING`", "index$": 8 }] }, "contract": { "id": "POST searchProjects", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String\",\"name\":\"after\",\"reqd\":false,\"type\":\"String\"},{\"gqltype\":\"String\",\"name\":\"before\",\"reqd\":false,\"type\":\"String\"},{\"gqltype\":\"Int\",\"name\":\"first\",\"reqd\":false,\"type\":\"Int\"},{\"gqltype\":\"Boolean\",\"name\":\"includeArchived\",\"reqd\":false,\"type\":\"Boolean\"},{\"gqltype\":\"Boolean\",\"name\":\"includeComments\",\"reqd\":false,\"type\":\"Boolean\"},{\"gqltype\":\"Int\",\"name\":\"last\",\"reqd\":false,\"type\":\"Int\"},{\"gqltype\":\"PaginationOrderBy\",\"name\":\"orderBy\",\"reqd\":false,\"type\":\"PaginationOrderBy\"},{\"gqltype\":\"String\",\"name\":\"teamId\",\"reqd\":false,\"type\":\"String\"},{\"gqltype\":\"String!\",\"name\":\"term\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"Search projects by text query using full-text and vector search. Results are ranked by relevance unless an orderBy parameter is specified. Rate-limited to 30 requests per minute.\",\"gqltype\":\"ProjectSearchPayload!\",\"list\":false,\"name\":\"searchProjects\",\"reqd\":true,\"type\":\"ProjectSearchPayload\"},\"invocation\":{\"doc\":\"query ProjectSearchResultList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $includeComments: Boolean, $last: Int, $orderBy: PaginationOrderBy, $teamId: String, $term: String!) { searchProjects(after: $after, before: $before, first: $first, includeArchived: $includeArchived, includeComments: $includeComments, last: $last, orderBy: $orderBy, teamId: $teamId, term: $term) { nodes { ...ProjectSearchResultFields } pageInfo { endCursor hasNextPage } } } fragment ProjectSearchResultFields on ProjectSearchResult { archivedAt autoArchivedAt canceledAt color completedAt completedIssueCountHistory completedScopeHistory content contentState convertedFromIssue { id } createdAt creator { id } currentProgress description documentContent { id } favorite { id } frequencyResolution health healthUpdatedAt icon id identifier inProgressScopeHistory integrationsSettings { id } issueCountHistory labelIds lastAppliedTemplate { id } lastUpdate { id } lead { id } leadTeam { id } metadata microsoftTeamsChannelId name previousIdentifiers priority priorityLabel prioritySortOrder progress progressHistory projectUpdateRemindersPausedUntilAt resourceCount scope scopeHistory slackChannelId slugId sortOrder startDate startDateResolution startedAt status { id } targetDate targetDateResolution trashed updateReminderFrequency updateReminderFrequencyInWeeks updateRemindersDay updateRemindersHour updatedAt url }\",\"field\":\"searchProjects\",\"optype\":\"query\",\"page\":{\"cursor\":\"pageInfo.endCursor\",\"more\":\"pageInfo.hasNextPage\",\"nodes\":\"nodes\",\"style\":\"relay\"},\"vars\":[{\"from\":\"after\",\"gqltype\":\"String\",\"name\":\"after\"},{\"from\":\"before\",\"gqltype\":\"String\",\"name\":\"before\"},{\"from\":\"first\",\"gqltype\":\"Int\",\"name\":\"first\"},{\"from\":\"includeArchived\",\"gqltype\":\"Boolean\",\"name\":\"includeArchived\"},{\"from\":\"includeComments\",\"gqltype\":\"Boolean\",\"name\":\"includeComments\"},{\"from\":\"last\",\"gqltype\":\"Int\",\"name\":\"last\"},{\"from\":\"orderBy\",\"gqltype\":\"PaginationOrderBy\",\"name\":\"orderBy\"},{\"from\":\"teamId\",\"gqltype\":\"String\",\"name\":\"teamId\"},{\"from\":\"term\",\"gqltype\":\"String!\",\"name\":\"term\"}]},\"protocol\":\"graphql\",\"types\":{\"Boolean\":{\"desc\":\"The `Boolean` scalar type represents `true` or `false`.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Boolean\"},\"Int\":{\"desc\":\"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Int\"},\"PaginationOrderBy\":{\"desc\":\"By which field should the pagination order by\",\"fields\":{},\"kind\":\"ENUM\",\"name\":\"PaginationOrderBy\",\"values\":[\"createdAt\",\"updatedAt\"]},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "query ProjectSearchResultList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $includeComments: Boolean, $last: Int, $orderBy: PaginationOrderBy, $teamId: String, $term: String!) { searchProjects(after: $after, before: $before, first: $first, includeArchived: $includeArchived, includeComments: $includeComments, last: $last, orderBy: $orderBy, teamId: $teamId, term: $term) { nodes { ...ProjectSearchResultFields } pageInfo { endCursor hasNextPage } } } fragment ProjectSearchResultFields on ProjectSearchResult { archivedAt autoArchivedAt canceledAt color completedAt completedIssueCountHistory completedScopeHistory content contentState convertedFromIssue { id } createdAt creator { id } currentProgress description documentContent { id } favorite { id } frequencyResolution health healthUpdatedAt icon id identifier inProgressScopeHistory integrationsSettings { id } issueCountHistory labelIds lastAppliedTemplate { id } lastUpdate { id } lead { id } leadTeam { id } metadata microsoftTeamsChannelId name previousIdentifiers priority priorityLabel prioritySortOrder progress progressHistory projectUpdateRemindersPausedUntilAt resourceCount scope scopeHistory slackChannelId slugId sortOrder startDate startDateResolution startedAt status { id } targetDate targetDateResolution trashed updateReminderFrequency updateReminderFrequencyInWeeks updateRemindersDay updateRemindersHour updatedAt url }", "field": "searchProjects", "optype": "query", "page": { "cursor": "pageInfo.endCursor", "more": "pageInfo.hasNextPage", "nodes": "nodes", "style": "relay" }, "vars": [{ "from": "after", "gqltype": "String", "name": "after" }, { "from": "before", "gqltype": "String", "name": "before" }, { "from": "first", "gqltype": "Int", "name": "first" }, { "from": "includeArchived", "gqltype": "Boolean", "name": "includeArchived" }, { "from": "includeComments", "gqltype": "Boolean", "name": "includeComments" }, { "from": "last", "gqltype": "Int", "name": "last" }, { "from": "orderBy", "gqltype": "PaginationOrderBy", "name": "orderBy" }, { "from": "teamId", "gqltype": "String", "name": "teamId" }, { "from": "term", "gqltype": "String!", "name": "term" }] }, "kind": "graphql", "method": "POST", "orig": "searchProjects", "segments": [], "select": { "exist": ["term"] }, "transform": { "req": "`reqdata`", "res": "`body.data.searchProjects.nodes`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "project_search_result", "name__orig": "project_search_result", "Name": "ProjectSearchResult", "name_": "project_search_result", "name-": "project-search-result", "NAME": "PROJECT_SEARCH_RESULT", "index$": 61 }, { "active": true, "entity": "project_search_result", "key$": "BasicProjectSearchResultFlow", "kind": "basic", "name": "BasicProjectSearchResultFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "include_comment": "include_comment01", "last": "last01", "order_by": "order_by01", "team_id": "team01", "term": "term01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "project_search_result_ref01" } }], "index$": 0 }] }, 'ProjectSearchResult');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let project_search_result_ref01_data = Object.values(setup.data.existing.project_search_result)[0];
        // LIST
        const project_search_result_ref01_ent = client.ProjectSearchResult();
        const project_search_result_ref01_match = {};
        project_search_result_ref01_match['after'] = setup.idmap['after01'];
        project_search_result_ref01_match['before'] = setup.idmap['before01'];
        project_search_result_ref01_match['first'] = setup.idmap['first01'];
        project_search_result_ref01_match['include_archived'] = setup.idmap['include_archived01'];
        project_search_result_ref01_match['include_comment'] = setup.idmap['include_comment01'];
        project_search_result_ref01_match['last'] = setup.idmap['last01'];
        project_search_result_ref01_match['order_by'] = setup.idmap['order_by01'];
        project_search_result_ref01_match['team_id'] = setup.idmap['team01'];
        project_search_result_ref01_match['term'] = setup.idmap['term01'];
        const project_search_result_ref01_list = (await project_search_result_ref01_ent.list(project_search_result_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/project_search_result/ProjectSearchResultTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['project_search_result01', 'project_search_result02', 'project_search_result03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_PROJECT_SEARCH_RESULT_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_PROJECT_SEARCH_RESULT_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_PROJECT_SEARCH_RESULT_ENTID'];
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
//# sourceMappingURL=ProjectSearchResultEntity.test.js.map