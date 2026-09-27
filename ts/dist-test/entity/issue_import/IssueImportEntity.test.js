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
(0, node_test_1.describe)('IssueImportEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.IssueImport();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['create', 'update', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'issue_import.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "archivedAt": { "a": true, "h": "Archived At", "n": "archivedAt", "r": false, "sh": "The time at which the entity was archived.", "t": "`$ANY`", "key$": "archivedAt", "index$": 0 }, "createdAt": { "a": true, "h": "Created At", "n": "createdAt", "r": true, "sh": "The time at which the entity was created.", "t": "`$ANY`", "key$": "createdAt", "index$": 1 }, "creatorId": { "a": true, "h": "Creator Id", "n": "creatorId", "r": false, "sh": "Identifier of the user who started the import job.", "t": "`$STRING`", "key$": "creatorId", "index$": 2 }, "csvFileUrl": { "a": true, "h": "Csv File Url", "n": "csvFileUrl", "r": false, "sh": "File URL for the uploaded CSV for the import, if there is one.", "t": "`$STRING`", "key$": "csvFileUrl", "index$": 3 }, "displayName": { "a": true, "h": "Display Name", "n": "displayName", "r": true, "sh": "The display name of the import service.", "t": "`$STRING`", "key$": "displayName", "index$": 4 }, "error": { "a": true, "h": "Error", "n": "error", "r": false, "sh": "User readable error message, if one has occurred during the import.", "t": "`$STRING`", "key$": "error", "index$": 5 }, "errorMetadata": { "a": true, "h": "Error Metadata", "n": "errorMetadata", "r": false, "sh": "Error code and metadata, if one has occurred during the import.", "t": "`$ANY`", "key$": "errorMetadata", "index$": 6 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The unique identifier of the entity.", "t": "`$STRING`", "key$": "id", "index$": 7 }, "mapping": { "a": true, "h": "Mapping", "n": "mapping", "r": false, "sh": "The data mapping configuration for the import job.", "t": "`$ANY`", "key$": "mapping", "index$": 8 }, "progress": { "a": true, "h": "Progress", "n": "progress", "r": false, "sh": "Current step progress as a percentage (0-100).", "t": "`$NUMBER`", "key$": "progress", "index$": 9 }, "service": { "a": true, "h": "Service", "n": "service", "r": true, "sh": "The external service from which data is being imported (e.g., jira, asana, github, shortcut, linear).", "t": "`$STRING`", "key$": "service", "index$": 10 }, "serviceMetadata": { "a": true, "h": "Service Metadata", "n": "serviceMetadata", "r": false, "sh": "Metadata related to import service.", "t": "`$ANY`", "key$": "serviceMetadata", "index$": 11 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "sh": "The current status of the import job, indicating its position in the import lifecycle (e.g., not started, in progress, complete, error).", "t": "`$STRING`", "key$": "status", "index$": 12 }, "teamName": { "a": true, "h": "Team Name", "n": "teamName", "r": false, "sh": "The name of the new team to be created for the import, when the import is configured to create a new team rather than importing into an existing one.", "t": "`$STRING`", "key$": "teamName", "index$": 13 }, "updatedAt": { "a": true, "h": "Updated At", "n": "updatedAt", "r": true, "sh": "The last time at which the entity was meaningfully updated.", "t": "`$ANY`", "key$": "updatedAt", "index$": 14 } }, "id": { "field": "id", "name": "id" }, "name": "issue_import", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST issueImportCreateJira", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "include_closed_issue", "or": "include_closed_issue", "r": false, "t": "`$BOOLEAN`", "index$": 1 }, { "a": true, "k": "param", "n": "instant_process", "or": "instant_process", "r": false, "t": "`$BOOLEAN`", "index$": 2 }, { "a": true, "k": "param", "n": "jira_email", "or": "jira_email", "r": true, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "param", "n": "jira_hostname", "or": "jira_hostname", "r": true, "t": "`$STRING`", "index$": 4 }, { "a": true, "k": "param", "n": "jira_project", "or": "jira_project", "r": true, "t": "`$STRING`", "index$": 5 }, { "a": true, "k": "param", "n": "jira_token", "or": "jira_token", "r": true, "t": "`$STRING`", "index$": 6 }, { "a": true, "k": "param", "n": "jql", "or": "jql", "r": false, "t": "`$STRING`", "index$": 7 }, { "a": true, "k": "param", "n": "team_id", "or": "team_id", "r": false, "t": "`$STRING`", "index$": 8 }, { "a": true, "k": "param", "n": "team_name", "or": "team_name", "r": false, "t": "`$STRING`", "index$": 9 }] }, "gq": { "doc": "mutation IssueImportCreateCreateJira($id: String, $includeClosedIssues: Boolean, $instantProcess: Boolean, $jiraEmail: String!, $jiraHostname: String!, $jiraProject: String!, $jiraToken: String!, $jql: String, $teamId: String, $teamName: String) { issueImportCreateJira(id: $id, includeClosedIssues: $includeClosedIssues, instantProcess: $instantProcess, jiraEmail: $jiraEmail, jiraHostname: $jiraHostname, jiraProject: $jiraProject, jiraToken: $jiraToken, jql: $jql, teamId: $teamId, teamName: $teamName) { issueImport { ...IssueImportFields } success } } fragment IssueImportFields on IssueImport { archivedAt createdAt creatorId csvFileUrl displayName error errorMetadata id mapping progress service serviceMetadata status teamName updatedAt }", "field": "issueImportCreateJira", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String", "name": "id" }, { "from": "includeClosedIssues", "gqltype": "Boolean", "name": "includeClosedIssues" }, { "from": "instantProcess", "gqltype": "Boolean", "name": "instantProcess" }, { "from": "jiraEmail", "gqltype": "String!", "name": "jiraEmail" }, { "from": "jiraHostname", "gqltype": "String!", "name": "jiraHostname" }, { "from": "jiraProject", "gqltype": "String!", "name": "jiraProject" }, { "from": "jiraToken", "gqltype": "String!", "name": "jiraToken" }, { "from": "jql", "gqltype": "String", "name": "jql" }, { "from": "teamId", "gqltype": "String", "name": "teamId" }, { "from": "teamName", "gqltype": "String", "name": "teamName" }] }, "k": "graphql", "m": "POST", "o": "issueImportCreateJira", "q": { "$action": "create_jira", "exist": ["jira_email", "jira_hostname", "jira_project", "jira_token"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.issueImportCreateJira.issueImport`" }, "index$": 0 }, { "a": true, "co": { "id": "POST issueImportCreateAsana", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "asana_team_name", "or": "asana_team_name", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "asana_token", "or": "asana_token", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "id", "or": "id", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "param", "n": "include_closed_issue", "or": "include_closed_issue", "r": false, "t": "`$BOOLEAN`", "index$": 3 }, { "a": true, "k": "param", "n": "instant_process", "or": "instant_process", "r": false, "t": "`$BOOLEAN`", "index$": 4 }, { "a": true, "k": "param", "n": "team_id", "or": "team_id", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "k": "param", "n": "team_name", "or": "team_name", "r": false, "t": "`$STRING`", "index$": 6 }] }, "gq": { "doc": "mutation IssueImportCreateCreateAsana($asanaTeamName: String!, $asanaToken: String!, $id: String, $includeClosedIssues: Boolean, $instantProcess: Boolean, $teamId: String, $teamName: String) { issueImportCreateAsana(asanaTeamName: $asanaTeamName, asanaToken: $asanaToken, id: $id, includeClosedIssues: $includeClosedIssues, instantProcess: $instantProcess, teamId: $teamId, teamName: $teamName) { issueImport { ...IssueImportFields } success } } fragment IssueImportFields on IssueImport { archivedAt createdAt creatorId csvFileUrl displayName error errorMetadata id mapping progress service serviceMetadata status teamName updatedAt }", "field": "issueImportCreateAsana", "optype": "mutation", "vars": [{ "from": "asanaTeamName", "gqltype": "String!", "name": "asanaTeamName" }, { "from": "asanaToken", "gqltype": "String!", "name": "asanaToken" }, { "from": "id", "gqltype": "String", "name": "id" }, { "from": "includeClosedIssues", "gqltype": "Boolean", "name": "includeClosedIssues" }, { "from": "instantProcess", "gqltype": "Boolean", "name": "instantProcess" }, { "from": "teamId", "gqltype": "String", "name": "teamId" }, { "from": "teamName", "gqltype": "String", "name": "teamName" }] }, "k": "graphql", "m": "POST", "o": "issueImportCreateAsana", "q": { "$action": "create_asana", "exist": ["asana_team_name", "asana_token"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.issueImportCreateAsana.issueImport`" }, "index$": 1 }, { "a": true, "co": { "id": "POST issueImportCreateClubhouse", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "clubhouse_group_name", "or": "clubhouse_group_name", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "clubhouse_token", "or": "clubhouse_token", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "id", "or": "id", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "param", "n": "include_closed_issue", "or": "include_closed_issue", "r": false, "t": "`$BOOLEAN`", "index$": 3 }, { "a": true, "k": "param", "n": "instant_process", "or": "instant_process", "r": false, "t": "`$BOOLEAN`", "index$": 4 }, { "a": true, "k": "param", "n": "team_id", "or": "team_id", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "k": "param", "n": "team_name", "or": "team_name", "r": false, "t": "`$STRING`", "index$": 6 }] }, "gq": { "doc": "mutation IssueImportCreateCreateClubhouse($clubhouseGroupName: String!, $clubhouseToken: String!, $id: String, $includeClosedIssues: Boolean, $instantProcess: Boolean, $teamId: String, $teamName: String) { issueImportCreateClubhouse(clubhouseGroupName: $clubhouseGroupName, clubhouseToken: $clubhouseToken, id: $id, includeClosedIssues: $includeClosedIssues, instantProcess: $instantProcess, teamId: $teamId, teamName: $teamName) { issueImport { ...IssueImportFields } success } } fragment IssueImportFields on IssueImport { archivedAt createdAt creatorId csvFileUrl displayName error errorMetadata id mapping progress service serviceMetadata status teamName updatedAt }", "field": "issueImportCreateClubhouse", "optype": "mutation", "vars": [{ "from": "clubhouseGroupName", "gqltype": "String!", "name": "clubhouseGroupName" }, { "from": "clubhouseToken", "gqltype": "String!", "name": "clubhouseToken" }, { "from": "id", "gqltype": "String", "name": "id" }, { "from": "includeClosedIssues", "gqltype": "Boolean", "name": "includeClosedIssues" }, { "from": "instantProcess", "gqltype": "Boolean", "name": "instantProcess" }, { "from": "teamId", "gqltype": "String", "name": "teamId" }, { "from": "teamName", "gqltype": "String", "name": "teamName" }] }, "k": "graphql", "m": "POST", "o": "issueImportCreateClubhouse", "q": { "$action": "create_clubhouse", "exist": ["clubhouse_group_name", "clubhouse_token"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.issueImportCreateClubhouse.issueImport`" }, "index$": 2 }, { "a": true, "co": { "id": "POST issueImportCreateCSVJira", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "csv_url", "or": "csv_url", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "jira_email", "or": "jira_email", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "jira_hostname", "or": "jira_hostname", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "param", "n": "jira_token", "or": "jira_token", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "param", "n": "team_id", "or": "team_id", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "k": "param", "n": "team_name", "or": "team_name", "r": false, "t": "`$STRING`", "index$": 5 }] }, "gq": { "doc": "mutation IssueImportCreateCreateCsvJira($csvUrl: String!, $jiraEmail: String, $jiraHostname: String, $jiraToken: String, $teamId: String, $teamName: String) { issueImportCreateCSVJira(csvUrl: $csvUrl, jiraEmail: $jiraEmail, jiraHostname: $jiraHostname, jiraToken: $jiraToken, teamId: $teamId, teamName: $teamName) { issueImport { ...IssueImportFields } success } } fragment IssueImportFields on IssueImport { archivedAt createdAt creatorId csvFileUrl displayName error errorMetadata id mapping progress service serviceMetadata status teamName updatedAt }", "field": "issueImportCreateCSVJira", "optype": "mutation", "vars": [{ "from": "csvUrl", "gqltype": "String!", "name": "csvUrl" }, { "from": "jiraEmail", "gqltype": "String", "name": "jiraEmail" }, { "from": "jiraHostname", "gqltype": "String", "name": "jiraHostname" }, { "from": "jiraToken", "gqltype": "String", "name": "jiraToken" }, { "from": "teamId", "gqltype": "String", "name": "teamId" }, { "from": "teamName", "gqltype": "String", "name": "teamName" }] }, "k": "graphql", "m": "POST", "o": "issueImportCreateCSVJira", "q": { "$action": "create_csv_jira", "exist": ["csv_url"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.issueImportCreateCSVJira.issueImport`" }, "index$": 3 }, { "a": true, "co": { "id": "POST issueImportCreateGithub", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "github_label", "or": "github_label", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "github_repo_id", "or": "github_repo_id", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "param", "n": "include_closed_issue", "or": "include_closed_issue", "r": false, "t": "`$BOOLEAN`", "index$": 2 }, { "a": true, "k": "param", "n": "instant_process", "or": "instant_process", "r": false, "t": "`$BOOLEAN`", "index$": 3 }, { "a": true, "k": "param", "n": "team_id", "or": "team_id", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "k": "param", "n": "team_name", "or": "team_name", "r": false, "t": "`$STRING`", "index$": 5 }] }, "gq": { "doc": "mutation IssueImportCreateCreateGithub($githubLabels: [String!], $githubRepoIds: [Int!], $includeClosedIssues: Boolean, $instantProcess: Boolean, $teamId: String, $teamName: String) { issueImportCreateGithub(githubLabels: $githubLabels, githubRepoIds: $githubRepoIds, includeClosedIssues: $includeClosedIssues, instantProcess: $instantProcess, teamId: $teamId, teamName: $teamName) { issueImport { ...IssueImportFields } success } } fragment IssueImportFields on IssueImport { archivedAt createdAt creatorId csvFileUrl displayName error errorMetadata id mapping progress service serviceMetadata status teamName updatedAt }", "field": "issueImportCreateGithub", "optype": "mutation", "vars": [{ "from": "githubLabels", "gqltype": "[String!]", "name": "githubLabels" }, { "from": "githubRepoIds", "gqltype": "[Int!]", "name": "githubRepoIds" }, { "from": "includeClosedIssues", "gqltype": "Boolean", "name": "includeClosedIssues" }, { "from": "instantProcess", "gqltype": "Boolean", "name": "instantProcess" }, { "from": "teamId", "gqltype": "String", "name": "teamId" }, { "from": "teamName", "gqltype": "String", "name": "teamName" }] }, "k": "graphql", "m": "POST", "o": "issueImportCreateGithub", "q": { "$action": "create_github" }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.issueImportCreateGithub.issueImport`" }, "index$": 4 }], "key$": "create" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "POST issueImportDelete", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "issue_import_id", "or": "issue_import_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation IssueImportRemove($issueImportId: String!) { issueImportDelete(issueImportId: $issueImportId) { issueImport { ...IssueImportFields } success } } fragment IssueImportFields on IssueImport { archivedAt createdAt creatorId csvFileUrl displayName error errorMetadata id mapping progress service serviceMetadata status teamName updatedAt }", "field": "issueImportDelete", "optype": "mutation", "vars": [{ "from": "issueImportId", "gqltype": "String!", "name": "issueImportId" }] }, "k": "graphql", "m": "POST", "o": "issueImportDelete", "q": { "exist": ["issue_import_id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.issueImportDelete.issueImport`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "POST issueImportProcess", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "issue_import_id", "or": "issue_import_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "mapping", "or": "mapping", "r": true, "t": "`$ANY`", "index$": 1 }] }, "gq": { "doc": "mutation IssueImportUpdateProcess($issueImportId: String!, $mapping: JSONObject!) { issueImportProcess(issueImportId: $issueImportId, mapping: $mapping) { issueImport { ...IssueImportFields } success } } fragment IssueImportFields on IssueImport { archivedAt createdAt creatorId csvFileUrl displayName error errorMetadata id mapping progress service serviceMetadata status teamName updatedAt }", "field": "issueImportProcess", "optype": "mutation", "vars": [{ "from": "issueImportId", "gqltype": "String!", "name": "issueImportId" }, { "from": "mapping", "gqltype": "JSONObject!", "name": "mapping" }] }, "k": "graphql", "m": "POST", "o": "issueImportProcess", "q": { "$action": "process", "exist": ["issue_import_id", "mapping"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.issueImportProcess.issueImport`" }, "index$": 0 }, { "a": true, "co": { "id": "POST issueImportUpdate", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation IssueImportUpdate($id: String!, $input: IssueImportUpdateInput!) { issueImportUpdate(id: $id, input: $input) { issueImport { ...IssueImportFields } success } } fragment IssueImportFields on IssueImport { archivedAt createdAt creatorId csvFileUrl displayName error errorMetadata id mapping progress service serviceMetadata status teamName updatedAt }", "field": "issueImportUpdate", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }, { "from": "", "gqltype": "IssueImportUpdateInput!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "issueImportUpdate", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.issueImportUpdate.issueImport`" }, "index$": 1 }, { "a": true, "co": { "id": "POST issueImportCreateLinearV2", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "linear_source_organization_id", "or": "linear_source_organization_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "gq": { "doc": "mutation IssueImportUpdateCreateLinearV2($id: String, $linearSourceOrganizationId: String!) { issueImportCreateLinearV2(id: $id, linearSourceOrganizationId: $linearSourceOrganizationId) { issueImport { ...IssueImportFields } success } } fragment IssueImportFields on IssueImport { archivedAt createdAt creatorId csvFileUrl displayName error errorMetadata id mapping progress service serviceMetadata status teamName updatedAt }", "field": "issueImportCreateLinearV2", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String", "name": "id" }, { "from": "linearSourceOrganizationId", "gqltype": "String!", "name": "linearSourceOrganizationId" }] }, "k": "graphql", "m": "POST", "o": "issueImportCreateLinearV2", "q": { "$action": "create_linear_v2", "exist": ["linear_source_organization_id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.issueImportCreateLinearV2.issueImport`" }, "index$": 2 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "issue_import", "name__orig": "issue_import", "Name": "IssueImport", "name_": "issue_import", "name-": "issue-import", "NAME": "ISSUE_IMPORT", "index$": 41 }, { "active": true, "entity": "issue_import", "key$": "BasicIssueImportFlow", "kind": "basic", "name": "BasicIssueImportFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "issue_import_ref01" }, "m": { "github_label": "github_label01", "github_repo_id": "github_repo01", "include_closed_issue": "include_closed_issue01", "instant_process": "instant_process01", "issue_import_id": "issue_import01", "linear_source_organization_id": "linear_source_organization01", "mapping": "mapping01", "team_id": "team01", "team_name": "team_name01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": { "linear_source_organization_id": "linear_source_organization01" }, "i": { "ref": "issue_import_ref01", "srcdatavar": "issue_import_ref01_data", "suffix": "_up0", "textfield": "creatorId" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-issue_import_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "issue_import_ref01", "suffix": "_rm0" }, "m": { "issue_import_id": "issue_import01" }, "o": "remove", "s": [], "v": [], "index$": 2 }] }, 'IssueImport', { "POST issueImportCreateJira": { "protocol": "graphql" }, "POST issueImportCreateAsana": { "protocol": "graphql" }, "POST issueImportCreateClubhouse": { "protocol": "graphql" }, "POST issueImportCreateCSVJira": { "protocol": "graphql" }, "POST issueImportCreateGithub": { "protocol": "graphql" }, "POST issueImportDelete": { "protocol": "graphql" }, "POST issueImportProcess": { "protocol": "graphql" }, "POST issueImportUpdate": { "protocol": "graphql" }, "POST issueImportCreateLinearV2": { "protocol": "graphql" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const issue_import_ref01_ent = client.IssueImport();
        let issue_import_ref01_data = setup.data.new.issue_import['issue_import_ref01'];
        issue_import_ref01_data['github_label'] = setup.idmap['github_label01'];
        issue_import_ref01_data['github_repo_id'] = setup.idmap['github_repo01'];
        issue_import_ref01_data['include_closed_issue'] = setup.idmap['include_closed_issue01'];
        issue_import_ref01_data['instant_process'] = setup.idmap['instant_process01'];
        issue_import_ref01_data['issue_import_id'] = setup.idmap['issue_import01'];
        issue_import_ref01_data['linear_source_organization_id'] = setup.idmap['linear_source_organization01'];
        issue_import_ref01_data['mapping'] = setup.idmap['mapping01'];
        issue_import_ref01_data['team_id'] = setup.idmap['team01'];
        issue_import_ref01_data['team_name'] = setup.idmap['team_name01'];
        issue_import_ref01_data = (await issue_import_ref01_ent.create(issue_import_ref01_data)).data();
        (0, node_assert_1.default)(null != issue_import_ref01_data.id);
        // UPDATE
        const issue_import_ref01_data_up0 = {};
        issue_import_ref01_data_up0.id = issue_import_ref01_data.id;
        issue_import_ref01_data_up0['linear_source_organization_id'] = setup.idmap['linear_source_organization_id'];
        const issue_import_ref01_markdef_up0 = { name: 'creatorId', value: 'Mark01-issue_import_ref01_' + setup.now };
        issue_import_ref01_data_up0[issue_import_ref01_markdef_up0.name] = issue_import_ref01_markdef_up0.value;
        const issue_import_ref01_resdata_up0 = (await issue_import_ref01_ent.update(issue_import_ref01_data_up0)).data();
        (0, node_assert_1.default)(issue_import_ref01_resdata_up0.id === issue_import_ref01_data_up0.id);
        (0, node_assert_1.default)(issue_import_ref01_resdata_up0[issue_import_ref01_markdef_up0.name] === issue_import_ref01_markdef_up0.value);
        // REMOVE
        const issue_import_ref01_match_rm0 = { id: issue_import_ref01_data.id };
        await issue_import_ref01_ent.remove(issue_import_ref01_match_rm0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/issue_import/IssueImportTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['issue_import01', 'issue_import02', 'issue_import03', 'github_label01', 'github_repo01', 'include_closed_issue01', 'instant_process01', 'linear_source_organization01', 'mapping01', 'team01', 'team_name01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_ISSUE_IMPORT_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_ISSUE_IMPORT_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_ISSUE_IMPORT_ENTID'];
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
//# sourceMappingURL=IssueImportEntity.test.js.map