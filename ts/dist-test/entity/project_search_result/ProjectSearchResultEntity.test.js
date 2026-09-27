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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "archivedAt": { "a": true, "h": "Archived At", "n": "archivedAt", "r": false, "sh": "The time at which the entity was archived.", "t": "`$ANY`", "key$": "archivedAt", "index$": 0 }, "autoArchivedAt": { "a": true, "h": "Auto Archived At", "n": "autoArchivedAt", "r": false, "sh": "The time at which the project was automatically archived by the auto-pruning process.", "t": "`$ANY`", "key$": "autoArchivedAt", "index$": 1 }, "canceledAt": { "a": true, "h": "Canceled At", "n": "canceledAt", "r": false, "sh": "The time at which the project was moved into a canceled status.", "t": "`$ANY`", "key$": "canceledAt", "index$": 2 }, "color": { "a": true, "h": "Color", "n": "color", "r": true, "sh": "The project's color as a HEX string.", "t": "`$STRING`", "key$": "color", "index$": 3 }, "completedAt": { "a": true, "h": "Completed At", "n": "completedAt", "r": false, "sh": "The time at which the project was moved into a completed status.", "t": "`$ANY`", "key$": "completedAt", "index$": 4 }, "completedIssueCountHistory": { "a": true, "h": "Completed Issue Count History", "n": "completedIssueCountHistory", "r": true, "sh": "The number of completed issues in the project at the end of each week since project creation.", "t": "`$NUMBER`", "key$": "completedIssueCountHistory", "index$": 5 }, "completedScopeHistory": { "a": true, "h": "Completed Scope History", "n": "completedScopeHistory", "r": true, "sh": "The number of completed estimation points at the end of each week since project creation.", "t": "`$NUMBER`", "key$": "completedScopeHistory", "index$": 6 }, "content": { "a": true, "h": "Content", "n": "content", "r": false, "sh": "The project's content in markdown format.", "t": "`$STRING`", "key$": "content", "index$": 7 }, "contentState": { "a": true, "h": "Content State", "n": "contentState", "r": false, "sh": "[Internal] The project's content as YJS state.", "t": "`$STRING`", "key$": "contentState", "index$": 8 }, "convertedFromIssue": { "a": true, "h": "Converted From Issue", "n": "convertedFromIssue", "r": false, "sh": "The issue that was converted into this project.", "t": "`$OBJECT`", "key$": "convertedFromIssue", "index$": 9 }, "createdAt": { "a": true, "h": "Created At", "n": "createdAt", "r": true, "sh": "The time at which the entity was created.", "t": "`$ANY`", "key$": "createdAt", "index$": 10 }, "creator": { "a": true, "h": "Creator", "n": "creator", "r": false, "sh": "The user who created the project.", "t": "`$OBJECT`", "key$": "creator", "index$": 11 }, "currentProgress": { "a": true, "h": "Current Progress", "n": "currentProgress", "r": true, "sh": "[INTERNAL] The current progress of the project, broken down by issue status category.", "t": "`$ANY`", "key$": "currentProgress", "index$": 12 }, "description": { "a": true, "h": "Description", "n": "description", "r": true, "sh": "The short description of the project.", "t": "`$STRING`", "key$": "description", "index$": 13 }, "documentContent": { "a": true, "h": "Document Content", "n": "documentContent", "r": false, "sh": "The content of the project description.", "t": "`$OBJECT`", "key$": "documentContent", "index$": 14 }, "favorite": { "a": true, "h": "Favorite", "n": "favorite", "r": false, "sh": "The user's favorite associated with this project.", "t": "`$OBJECT`", "key$": "favorite", "index$": 15 }, "frequencyResolution": { "a": true, "h": "Frequency Resolution", "n": "frequencyResolution", "r": true, "sh": "The resolution of the reminder frequency.", "t": "`$STRING`", "key$": "frequencyResolution", "index$": 16 }, "health": { "a": true, "h": "Health", "n": "health", "r": false, "sh": "The overall health of the project, derived from the most recent project update.", "t": "`$STRING`", "key$": "health", "index$": 17 }, "healthUpdatedAt": { "a": true, "h": "Health Updated At", "n": "healthUpdatedAt", "r": false, "sh": "The time at which the project health was last updated, typically when a new project update is posted.", "t": "`$ANY`", "key$": "healthUpdatedAt", "index$": 18 }, "icon": { "a": true, "h": "Icon", "n": "icon", "r": false, "sh": "The icon of the project.", "t": "`$STRING`", "key$": "icon", "index$": 19 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The unique identifier of the entity.", "t": "`$STRING`", "key$": "id", "index$": 20 }, "identifier": { "a": true, "h": "Identifier", "n": "identifier", "r": false, "sh": "[Internal] The human-readable identifier of the project.", "t": "`$STRING`", "key$": "identifier", "index$": 21 }, "inProgressScopeHistory": { "a": true, "h": "In Progress Scope History", "n": "inProgressScopeHistory", "r": true, "sh": "The number of in-progress estimation points at the end of each week since project creation.", "t": "`$NUMBER`", "key$": "inProgressScopeHistory", "index$": 22 }, "integrationsSettings": { "a": true, "h": "Integrations Settings", "n": "integrationsSettings", "r": false, "sh": "Settings for all integrations associated with that project.", "t": "`$OBJECT`", "key$": "integrationsSettings", "index$": 23 }, "issueCountHistory": { "a": true, "h": "Issue Count History", "n": "issueCountHistory", "r": true, "sh": "The total number of issues in the project at the end of each week since project creation.", "t": "`$NUMBER`", "key$": "issueCountHistory", "index$": 24 }, "labelIds": { "a": true, "h": "Label Ids", "n": "labelIds", "r": true, "sh": "The IDs of the project labels associated with this project.", "t": "`$STRING`", "key$": "labelIds", "index$": 25 }, "lastAppliedTemplate": { "a": true, "h": "Last Applied Template", "n": "lastAppliedTemplate", "r": false, "sh": "The last template that was applied to this project.", "t": "`$OBJECT`", "key$": "lastAppliedTemplate", "index$": 26 }, "lastUpdate": { "a": true, "h": "Last Update", "n": "lastUpdate", "r": false, "sh": "The most recent status update posted for this project.", "t": "`$OBJECT`", "key$": "lastUpdate", "index$": 27 }, "lead": { "a": true, "h": "Lead", "n": "lead", "r": false, "sh": "The user who leads the project.", "t": "`$OBJECT`", "key$": "lead", "index$": 28 }, "leadTeam": { "a": true, "h": "Lead Team", "n": "leadTeam", "r": false, "sh": "[Internal] The team that leads the project.", "t": "`$OBJECT`", "key$": "leadTeam", "index$": 29 }, "metadata": { "a": true, "h": "Metadata", "n": "metadata", "r": true, "sh": "Metadata related to search result.", "t": "`$ANY`", "key$": "metadata", "index$": 30 }, "microsoftTeamsChannelId": { "a": true, "h": "Microsoft Teams Channel Id", "n": "microsoftTeamsChannelId", "r": false, "sh": "The ID of the Microsoft Teams channel connected to the project, if any.", "t": "`$STRING`", "key$": "microsoftTeamsChannelId", "index$": 31 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "The name of the project.", "t": "`$STRING`", "key$": "name", "index$": 32 }, "previousIdentifiers": { "a": true, "h": "Previous Identifiers", "n": "previousIdentifiers", "r": true, "sh": "[Internal] Identifiers (default and custom) that this project has previously held.", "t": "`$STRING`", "key$": "previousIdentifiers", "index$": 33 }, "priority": { "a": true, "h": "Priority", "n": "priority", "r": true, "sh": "The priority of the project.", "t": "`$INTEGER`", "key$": "priority", "index$": 34 }, "priorityLabel": { "a": true, "h": "Priority Label", "n": "priorityLabel", "r": true, "sh": "The priority of the project as a label.", "t": "`$STRING`", "key$": "priorityLabel", "index$": 35 }, "prioritySortOrder": { "a": true, "h": "Priority Sort Order", "n": "prioritySortOrder", "r": true, "sh": "The sort order for the project within the workspace when ordered by priority.", "t": "`$NUMBER`", "key$": "prioritySortOrder", "index$": 36 }, "progress": { "a": true, "h": "Progress", "n": "progress", "r": true, "sh": "The overall progress of the project.", "t": "`$NUMBER`", "key$": "progress", "index$": 37 }, "progressHistory": { "a": true, "h": "Progress History", "n": "progressHistory", "r": true, "sh": "[INTERNAL] The progress history of the project, tracking issue completion over time.", "t": "`$ANY`", "key$": "progressHistory", "index$": 38 }, "projectUpdateRemindersPausedUntilAt": { "a": true, "h": "Project Update Reminders Paused Until At", "n": "projectUpdateRemindersPausedUntilAt", "r": false, "sh": "The time until which project update reminders are paused.", "t": "`$ANY`", "key$": "projectUpdateRemindersPausedUntilAt", "index$": 39 }, "resourceCount": { "a": true, "h": "Resource Count", "n": "resourceCount", "r": true, "sh": "The number of resources associated with the project, including documents, external links, and attachments.", "t": "`$INTEGER`", "key$": "resourceCount", "index$": 40 }, "scope": { "a": true, "h": "Scope", "n": "scope", "r": true, "sh": "The overall scope (total estimate points) of the project.", "t": "`$NUMBER`", "key$": "scope", "index$": 41 }, "scopeHistory": { "a": true, "h": "Scope History", "n": "scopeHistory", "r": true, "sh": "The total scope (estimation points) of the project at the end of each week since project creation.", "t": "`$NUMBER`", "key$": "scopeHistory", "index$": 42 }, "slackChannelId": { "a": true, "h": "Slack Channel Id", "n": "slackChannelId", "r": false, "sh": "The ID of the Slack channel connected to the project, if any.", "t": "`$STRING`", "key$": "slackChannelId", "index$": 43 }, "slugId": { "a": true, "h": "Slug Id", "n": "slugId", "r": true, "sh": "The project's unique URL slug, used to construct human-readable URLs.", "t": "`$STRING`", "key$": "slugId", "index$": 44 }, "sortOrder": { "a": true, "h": "Sort Order", "n": "sortOrder", "r": true, "sh": "The sort order for the project within the workspace.", "t": "`$NUMBER`", "key$": "sortOrder", "index$": 45 }, "startDate": { "a": true, "h": "Start Date", "n": "startDate", "r": false, "sh": "The estimated start date of the project.", "t": "`$ANY`", "key$": "startDate", "index$": 46 }, "startDateResolution": { "a": true, "h": "Start Date Resolution", "n": "startDateResolution", "r": false, "sh": "The resolution of the project's start date, indicating whether it refers to a specific month, quarter, half-year, or year.", "t": "`$STRING`", "key$": "startDateResolution", "index$": 47 }, "startedAt": { "a": true, "h": "Started At", "n": "startedAt", "r": false, "sh": "The time at which the project was moved into a started status.", "t": "`$ANY`", "key$": "startedAt", "index$": 48 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "sh": "The current project status.", "t": "`$OBJECT`", "key$": "status", "index$": 49 }, "targetDate": { "a": true, "h": "Target Date", "n": "targetDate", "r": false, "sh": "The estimated completion date of the project.", "t": "`$ANY`", "key$": "targetDate", "index$": 50 }, "targetDateResolution": { "a": true, "h": "Target Date Resolution", "n": "targetDateResolution", "r": false, "sh": "The resolution of the project's estimated completion date, indicating whether it refers to a specific month, quarter, half-year, or year.", "t": "`$STRING`", "key$": "targetDateResolution", "index$": 51 }, "trashed": { "a": true, "h": "Trashed", "n": "trashed", "r": false, "sh": "A flag that indicates whether the project is in the trash bin.", "t": "`$BOOLEAN`", "key$": "trashed", "index$": 52 }, "updateReminderFrequency": { "a": true, "h": "Update Reminder Frequency", "n": "updateReminderFrequency", "r": false, "sh": "The frequency at which to prompt for updates.", "t": "`$NUMBER`", "key$": "updateReminderFrequency", "index$": 53 }, "updateReminderFrequencyInWeeks": { "a": true, "h": "Update Reminder Frequency In Weeks", "n": "updateReminderFrequencyInWeeks", "r": false, "sh": "The n-weekly frequency at which to prompt for updates.", "t": "`$NUMBER`", "key$": "updateReminderFrequencyInWeeks", "index$": 54 }, "updateRemindersDay": { "a": true, "h": "Update Reminders Day", "n": "updateRemindersDay", "r": false, "sh": "The day at which to prompt for updates.", "t": "`$STRING`", "key$": "updateRemindersDay", "index$": 55 }, "updateRemindersHour": { "a": true, "h": "Update Reminders Hour", "n": "updateRemindersHour", "r": false, "sh": "The hour at which to prompt for updates.", "t": "`$NUMBER`", "key$": "updateRemindersHour", "index$": 56 }, "updatedAt": { "a": true, "h": "Updated At", "n": "updatedAt", "r": true, "sh": "The last time at which the entity was meaningfully updated.", "t": "`$ANY`", "key$": "updatedAt", "index$": 57 }, "url": { "a": true, "h": "Url", "n": "url", "r": true, "sh": "Project URL.", "t": "`$STRING`", "key$": "url", "index$": 58 } }, "id": { "field": "id", "name": "id" }, "name": "project_search_result", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "POST searchProjects", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "before", "or": "before", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "first", "or": "first", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "param", "n": "include_archived", "or": "include_archived", "r": false, "t": "`$BOOLEAN`", "index$": 3 }, { "a": true, "k": "param", "n": "include_comment", "or": "include_comment", "r": false, "t": "`$BOOLEAN`", "index$": 4 }, { "a": true, "k": "param", "n": "last", "or": "last", "r": false, "t": "`$INTEGER`", "index$": 5 }, { "a": true, "k": "param", "n": "order_by", "or": "order_by", "r": false, "t": "`$ANY`", "index$": 6 }, { "a": true, "k": "param", "n": "team_id", "or": "team_id", "r": false, "t": "`$STRING`", "index$": 7 }, { "a": true, "k": "param", "n": "term", "or": "term", "r": true, "t": "`$STRING`", "index$": 8 }] }, "gq": { "doc": "query ProjectSearchResultList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $includeComments: Boolean, $last: Int, $orderBy: PaginationOrderBy, $teamId: String, $term: String!) { searchProjects(after: $after, before: $before, first: $first, includeArchived: $includeArchived, includeComments: $includeComments, last: $last, orderBy: $orderBy, teamId: $teamId, term: $term) { nodes { ...ProjectSearchResultFields } pageInfo { endCursor hasNextPage } } } fragment ProjectSearchResultFields on ProjectSearchResult { archivedAt autoArchivedAt canceledAt color completedAt completedIssueCountHistory completedScopeHistory content contentState convertedFromIssue { id } createdAt creator { id } currentProgress description documentContent { id } favorite { id } frequencyResolution health healthUpdatedAt icon id identifier inProgressScopeHistory integrationsSettings { id } issueCountHistory labelIds lastAppliedTemplate { id } lastUpdate { id } lead { id } leadTeam { id } metadata microsoftTeamsChannelId name previousIdentifiers priority priorityLabel prioritySortOrder progress progressHistory projectUpdateRemindersPausedUntilAt resourceCount scope scopeHistory slackChannelId slugId sortOrder startDate startDateResolution startedAt status { id } targetDate targetDateResolution trashed updateReminderFrequency updateReminderFrequencyInWeeks updateRemindersDay updateRemindersHour updatedAt url }", "field": "searchProjects", "optype": "query", "page": { "cursor": "pageInfo.endCursor", "more": "pageInfo.hasNextPage", "nodes": "nodes", "style": "relay" }, "vars": [{ "from": "after", "gqltype": "String", "name": "after" }, { "from": "before", "gqltype": "String", "name": "before" }, { "from": "first", "gqltype": "Int", "name": "first" }, { "from": "includeArchived", "gqltype": "Boolean", "name": "includeArchived" }, { "from": "includeComments", "gqltype": "Boolean", "name": "includeComments" }, { "from": "last", "gqltype": "Int", "name": "last" }, { "from": "orderBy", "gqltype": "PaginationOrderBy", "name": "orderBy" }, { "from": "teamId", "gqltype": "String", "name": "teamId" }, { "from": "term", "gqltype": "String!", "name": "term" }] }, "k": "graphql", "m": "POST", "o": "searchProjects", "q": { "exist": ["term"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.searchProjects.nodes`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "project_search_result", "name__orig": "project_search_result", "Name": "ProjectSearchResult", "name_": "project_search_result", "name-": "project-search-result", "NAME": "PROJECT_SEARCH_RESULT", "index$": 61 }, { "active": true, "entity": "project_search_result", "key$": "BasicProjectSearchResultFlow", "kind": "basic", "name": "BasicProjectSearchResultFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "include_comment": "include_comment01", "last": "last01", "order_by": "order_by01", "team_id": "team01", "term": "term01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "project_search_result_ref01" } }], "index$": 0 }] }, 'ProjectSearchResult', { "POST searchProjects": { "protocol": "graphql" } });
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
    let idmap = transform(['project_search_result01', 'project_search_result02', 'project_search_result03', 'after01', 'before01', 'first01', 'include_archived01', 'include_comment01', 'last01', 'order_by01', 'team01', 'term01'], {
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