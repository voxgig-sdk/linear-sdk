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
(0, node_test_1.describe)('GitHubIntegrationConnectDetailEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.GitHubIntegrationConnectDetail();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['create', 'update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'git_hub_integration_connect_detail.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "lostRepositoryNames": { "a": true, "h": "Lost Repository Names", "n": "lostRepositoryNames", "r": false, "sh": "Full names ('owner/repo') of repositories whose existing GitHub Issues sync mappings would become inaccessible if the new GitHub App installation replaces the existing one.", "t": "`$STRING`", "key$": "lostRepositoryNames", "index$": 0 } }, "name": "git_hub_integration_connect_detail", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST integrationAsksConnectChannel", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "code", "or": "code", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "redirect_uri", "or": "redirect_uri", "r": true, "t": "`$STRING`", "index$": 1 }] }, "gq": { "doc": "mutation GitHubIntegrationConnectDetailCreateIntegrationAsksConnectChannel($code: String!, $redirectUri: String!) { integrationAsksConnectChannel(code: $code, redirectUri: $redirectUri) { gitHub { ...GitHubIntegrationConnectDetailFields } success } } fragment GitHubIntegrationConnectDetailFields on GitHubIntegrationConnectDetails { lostRepositoryNames }", "field": "integrationAsksConnectChannel", "optype": "mutation", "vars": [{ "from": "code", "gqltype": "String!", "name": "code" }, { "from": "redirectUri", "gqltype": "String!", "name": "redirectUri" }] }, "k": "graphql", "m": "POST", "o": "integrationAsksConnectChannel", "q": { "$action": "integration_asks_connect_channel", "exist": ["code", "redirect_uri"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.integrationAsksConnectChannel.gitHub`" }, "index$": 0 }, { "a": true, "co": { "id": "POST integrationGitHubEnterpriseServerConnect", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "github_url", "or": "github_url", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "organization_name", "or": "organization_name", "r": true, "t": "`$STRING`", "index$": 1 }] }, "gq": { "doc": "mutation GitHubIntegrationConnectDetailCreateIntegrationGitHubEnterpriseServerConnect($githubUrl: String!, $organizationName: String!) { integrationGitHubEnterpriseServerConnect(githubUrl: $githubUrl, organizationName: $organizationName) { gitHub { ...GitHubIntegrationConnectDetailFields } success } } fragment GitHubIntegrationConnectDetailFields on GitHubIntegrationConnectDetails { lostRepositoryNames }", "field": "integrationGitHubEnterpriseServerConnect", "optype": "mutation", "vars": [{ "from": "githubUrl", "gqltype": "String!", "name": "githubUrl" }, { "from": "organizationName", "gqltype": "String!", "name": "organizationName" }] }, "k": "graphql", "m": "POST", "o": "integrationGitHubEnterpriseServerConnect", "q": { "$action": "integration_git_hub_enterprise_server_connect", "exist": ["github_url", "organization_name"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.integrationGitHubEnterpriseServerConnect.gitHub`" }, "index$": 1 }, { "a": true, "co": { "id": "POST integrationGitlabConnect", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "access_token", "or": "access_token", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "expires_at", "or": "expires_at", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "gitlab_url", "or": "gitlab_url", "r": true, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "param", "n": "readonly", "or": "readonly", "r": false, "t": "`$BOOLEAN`", "index$": 3 }, { "a": true, "k": "param", "n": "validation_project_path", "or": "validation_project_path", "r": false, "t": "`$STRING`", "index$": 4 }] }, "gq": { "doc": "mutation GitHubIntegrationConnectDetailCreateIntegrationGitlabConnect($accessToken: String!, $expiresAt: String, $gitlabUrl: String!, $readonly: Boolean, $validationProjectPath: String) { integrationGitlabConnect(accessToken: $accessToken, expiresAt: $expiresAt, gitlabUrl: $gitlabUrl, readonly: $readonly, validationProjectPath: $validationProjectPath) { gitHub { ...GitHubIntegrationConnectDetailFields } success } } fragment GitHubIntegrationConnectDetailFields on GitHubIntegrationConnectDetails { lostRepositoryNames }", "field": "integrationGitlabConnect", "optype": "mutation", "vars": [{ "from": "accessToken", "gqltype": "String!", "name": "accessToken" }, { "from": "expiresAt", "gqltype": "String", "name": "expiresAt" }, { "from": "gitlabUrl", "gqltype": "String!", "name": "gitlabUrl" }, { "from": "readonly", "gqltype": "Boolean", "name": "readonly" }, { "from": "validationProjectPath", "gqltype": "String", "name": "validationProjectPath" }] }, "k": "graphql", "m": "POST", "o": "integrationGitlabConnect", "q": { "$action": "integration_gitlab_connect", "exist": ["access_token", "gitlab_url"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.integrationGitlabConnect.gitHub`" }, "index$": 2 }, { "a": true, "co": { "id": "POST integrationSlackOrgInitiativeUpdatesPost", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "code", "or": "code", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "redirect_uri", "or": "redirect_uri", "r": true, "t": "`$STRING`", "index$": 1 }] }, "gq": { "doc": "mutation GitHubIntegrationConnectDetailCreateIntegrationSlackOrgInitiativeUpdatesPost($code: String!, $redirectUri: String!) { integrationSlackOrgInitiativeUpdatesPost(code: $code, redirectUri: $redirectUri) { gitHub { ...GitHubIntegrationConnectDetailFields } success } } fragment GitHubIntegrationConnectDetailFields on GitHubIntegrationConnectDetails { lostRepositoryNames }", "field": "integrationSlackOrgInitiativeUpdatesPost", "optype": "mutation", "vars": [{ "from": "code", "gqltype": "String!", "name": "code" }, { "from": "redirectUri", "gqltype": "String!", "name": "redirectUri" }] }, "k": "graphql", "m": "POST", "o": "integrationSlackOrgInitiativeUpdatesPost", "q": { "$action": "integration_slack_org_initiative_updates_post", "exist": ["code", "redirect_uri"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.integrationSlackOrgInitiativeUpdatesPost.gitHub`" }, "index$": 3 }, { "a": true, "co": { "id": "POST integrationSlackOrgProjectUpdatesPost", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "code", "or": "code", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "redirect_uri", "or": "redirect_uri", "r": true, "t": "`$STRING`", "index$": 1 }] }, "gq": { "doc": "mutation GitHubIntegrationConnectDetailCreateIntegrationSlackOrgProjectUpdatesPost($code: String!, $redirectUri: String!) { integrationSlackOrgProjectUpdatesPost(code: $code, redirectUri: $redirectUri) { gitHub { ...GitHubIntegrationConnectDetailFields } success } } fragment GitHubIntegrationConnectDetailFields on GitHubIntegrationConnectDetails { lostRepositoryNames }", "field": "integrationSlackOrgProjectUpdatesPost", "optype": "mutation", "vars": [{ "from": "code", "gqltype": "String!", "name": "code" }, { "from": "redirectUri", "gqltype": "String!", "name": "redirectUri" }] }, "k": "graphql", "m": "POST", "o": "integrationSlackOrgProjectUpdatesPost", "q": { "$action": "integration_slack_org_project_updates_post", "exist": ["code", "redirect_uri"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.integrationSlackOrgProjectUpdatesPost.gitHub`" }, "index$": 4 }, { "a": true, "co": { "id": "POST integrationGithubCommitCreate", "source": "graphql", "version": 2 }, "g": {}, "gq": { "doc": "mutation GitHubIntegrationConnectDetailCreateIntegrationGithubCommitCreate { integrationGithubCommitCreate { gitHub { ...GitHubIntegrationConnectDetailFields } success } } fragment GitHubIntegrationConnectDetailFields on GitHubIntegrationConnectDetails { lostRepositoryNames }", "field": "integrationGithubCommitCreate", "optype": "mutation", "vars": [] }, "k": "graphql", "m": "POST", "o": "integrationGithubCommitCreate", "q": { "$action": "integration_github_commit_create" }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.integrationGithubCommitCreate.gitHub`" }, "index$": 5 }, { "a": true, "co": { "id": "POST integrationJiraFetchProjectStatuses", "source": "graphql", "version": 2 }, "g": {}, "gq": { "doc": "mutation GitHubIntegrationConnectDetailCreateIntegrationJiraFetchProjectStatus($input: JiraFetchProjectStatusesInput!) { integrationJiraFetchProjectStatuses(input: $input) { gitHub { ...GitHubIntegrationConnectDetailFields } success } } fragment GitHubIntegrationConnectDetailFields on GitHubIntegrationConnectDetails { lostRepositoryNames }", "field": "integrationJiraFetchProjectStatuses", "optype": "mutation", "vars": [{ "from": "", "gqltype": "JiraFetchProjectStatusesInput!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "integrationJiraFetchProjectStatuses", "q": { "$action": "integration_jira_fetch_project_status" }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.integrationJiraFetchProjectStatuses.gitHub`" }, "index$": 6 }], "key$": "create" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "POST integrationSlackProjectPost", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "code", "or": "code", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "redirect_uri", "or": "redirect_uri", "r": true, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "param", "n": "service", "or": "service", "r": true, "t": "`$STRING`", "index$": 3 }] }, "gq": { "doc": "mutation GitHubIntegrationConnectDetailUpdateIntegrationSlackProjectPost($code: String!, $projectId: String!, $redirectUri: String!, $service: String!) { integrationSlackProjectPost(code: $code, projectId: $projectId, redirectUri: $redirectUri, service: $service) { gitHub { ...GitHubIntegrationConnectDetailFields } success } } fragment GitHubIntegrationConnectDetailFields on GitHubIntegrationConnectDetails { lostRepositoryNames }", "field": "integrationSlackProjectPost", "optype": "mutation", "vars": [{ "from": "code", "gqltype": "String!", "name": "code" }, { "from": "projectId", "gqltype": "String!", "name": "projectId" }, { "from": "redirectUri", "gqltype": "String!", "name": "redirectUri" }, { "from": "service", "gqltype": "String!", "name": "service" }] }, "k": "graphql", "m": "POST", "o": "integrationSlackProjectPost", "q": { "$action": "integration_slack_project_post", "exist": ["code", "project_id", "redirect_uri", "service"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.integrationSlackProjectPost.gitHub`" }, "index$": 0 }, { "a": true, "co": { "id": "POST integrationSlackCustomViewNotifications", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "code", "or": "code", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "custom_view_id", "or": "custom_view_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "redirect_uri", "or": "redirect_uri", "r": true, "t": "`$STRING`", "index$": 2 }] }, "gq": { "doc": "mutation GitHubIntegrationConnectDetailUpdateIntegrationSlackCustomViewNotification($code: String!, $customViewId: String!, $redirectUri: String!) { integrationSlackCustomViewNotifications(code: $code, customViewId: $customViewId, redirectUri: $redirectUri) { gitHub { ...GitHubIntegrationConnectDetailFields } success } } fragment GitHubIntegrationConnectDetailFields on GitHubIntegrationConnectDetails { lostRepositoryNames }", "field": "integrationSlackCustomViewNotifications", "optype": "mutation", "vars": [{ "from": "code", "gqltype": "String!", "name": "code" }, { "from": "customViewId", "gqltype": "String!", "name": "customViewId" }, { "from": "redirectUri", "gqltype": "String!", "name": "redirectUri" }] }, "k": "graphql", "m": "POST", "o": "integrationSlackCustomViewNotifications", "q": { "$action": "integration_slack_custom_view_notification", "exist": ["code", "custom_view_id", "redirect_uri"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.integrationSlackCustomViewNotifications.gitHub`" }, "index$": 1 }, { "a": true, "co": { "id": "POST integrationSlackInitiativePost", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "code", "or": "code", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "initiative_id", "or": "initiative_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "redirect_uri", "or": "redirect_uri", "r": true, "t": "`$STRING`", "index$": 2 }] }, "gq": { "doc": "mutation GitHubIntegrationConnectDetailUpdateIntegrationSlackInitiativePost($code: String!, $initiativeId: String!, $redirectUri: String!) { integrationSlackInitiativePost(code: $code, initiativeId: $initiativeId, redirectUri: $redirectUri) { gitHub { ...GitHubIntegrationConnectDetailFields } success } } fragment GitHubIntegrationConnectDetailFields on GitHubIntegrationConnectDetails { lostRepositoryNames }", "field": "integrationSlackInitiativePost", "optype": "mutation", "vars": [{ "from": "code", "gqltype": "String!", "name": "code" }, { "from": "initiativeId", "gqltype": "String!", "name": "initiativeId" }, { "from": "redirectUri", "gqltype": "String!", "name": "redirectUri" }] }, "k": "graphql", "m": "POST", "o": "integrationSlackInitiativePost", "q": { "$action": "integration_slack_initiative_post", "exist": ["code", "initiative_id", "redirect_uri"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.integrationSlackInitiativePost.gitHub`" }, "index$": 2 }, { "a": true, "co": { "id": "POST integrationSlackPost", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "code", "or": "code", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "redirect_uri", "or": "redirect_uri", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "should_use_v2_auth", "or": "should_use_v2_auth", "r": false, "t": "`$BOOLEAN`", "index$": 2 }, { "a": true, "k": "param", "n": "team_id", "or": "team_id", "r": true, "t": "`$STRING`", "index$": 3 }] }, "gq": { "doc": "mutation GitHubIntegrationConnectDetailUpdateIntegrationSlackPost($code: String!, $redirectUri: String!, $shouldUseV2Auth: Boolean, $teamId: String!) { integrationSlackPost(code: $code, redirectUri: $redirectUri, shouldUseV2Auth: $shouldUseV2Auth, teamId: $teamId) { gitHub { ...GitHubIntegrationConnectDetailFields } success } } fragment GitHubIntegrationConnectDetailFields on GitHubIntegrationConnectDetails { lostRepositoryNames }", "field": "integrationSlackPost", "optype": "mutation", "vars": [{ "from": "code", "gqltype": "String!", "name": "code" }, { "from": "redirectUri", "gqltype": "String!", "name": "redirectUri" }, { "from": "shouldUseV2Auth", "gqltype": "Boolean", "name": "shouldUseV2Auth" }, { "from": "teamId", "gqltype": "String!", "name": "teamId" }] }, "k": "graphql", "m": "POST", "o": "integrationSlackPost", "q": { "$action": "integration_slack_post", "exist": ["code", "redirect_uri", "team_id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.integrationSlackPost.gitHub`" }, "index$": 3 }, { "a": true, "co": { "id": "POST integrationGitlabTestConnection", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "integration_id", "or": "integration_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation GitHubIntegrationConnectDetailUpdateIntegrationGitlabTestConnection($integrationId: String!) { integrationGitlabTestConnection(integrationId: $integrationId) { gitHub { ...GitHubIntegrationConnectDetailFields } success } } fragment GitHubIntegrationConnectDetailFields on GitHubIntegrationConnectDetails { lostRepositoryNames }", "field": "integrationGitlabTestConnection", "optype": "mutation", "vars": [{ "from": "integrationId", "gqltype": "String!", "name": "integrationId" }] }, "k": "graphql", "m": "POST", "o": "integrationGitlabTestConnection", "q": { "$action": "integration_gitlab_test_connection", "exist": ["integration_id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.integrationGitlabTestConnection.gitHub`" }, "index$": 4 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "git_hub_integration_connect_detail", "name__orig": "git_hub_integration_connect_detail", "Name": "GitHubIntegrationConnectDetail", "name_": "git_hub_integration_connect_detail", "name-": "git-hub-integration-connect-detail", "NAME": "GIT_HUB_INTEGRATION_CONNECT_DETAIL", "index$": 30 }, { "active": true, "entity": "git_hub_integration_connect_detail", "key$": "BasicGitHubIntegrationConnectDetailFlow", "kind": "basic", "name": "BasicGitHubIntegrationConnectDetailFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "git_hub_integration_connect_detail_ref01" }, "m": { "code": "code01", "custom_view_id": "custom_view01", "initiative_id": "initiative01", "integration_id": "integration01", "project_id": "project01", "redirect_uri": "redirect_uri01", "service": "service01", "should_use_v2_auth": "should_use_v2_auth01", "team_id": "team01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": { "integration_id": "integration01" }, "i": { "ref": "git_hub_integration_connect_detail_ref01", "srcdatavar": "git_hub_integration_connect_detail_ref01_data", "suffix": "_up0", "textfield": "lostRepositoryNames" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-git_hub_integration_connect_detail_ref01" } }], "v": [], "index$": 1 }] }, 'GitHubIntegrationConnectDetail', { "POST integrationAsksConnectChannel": { "protocol": "graphql" }, "POST integrationGitHubEnterpriseServerConnect": { "protocol": "graphql" }, "POST integrationGitlabConnect": { "protocol": "graphql" }, "POST integrationSlackOrgInitiativeUpdatesPost": { "protocol": "graphql" }, "POST integrationSlackOrgProjectUpdatesPost": { "protocol": "graphql" }, "POST integrationGithubCommitCreate": { "protocol": "graphql" }, "POST integrationJiraFetchProjectStatuses": { "protocol": "graphql" }, "POST integrationSlackProjectPost": { "protocol": "graphql" }, "POST integrationSlackCustomViewNotifications": { "protocol": "graphql" }, "POST integrationSlackInitiativePost": { "protocol": "graphql" }, "POST integrationSlackPost": { "protocol": "graphql" }, "POST integrationGitlabTestConnection": { "protocol": "graphql" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const git_hub_integration_connect_detail_ref01_ent = client.GitHubIntegrationConnectDetail();
        let git_hub_integration_connect_detail_ref01_data = setup.data.new.git_hub_integration_connect_detail['git_hub_integration_connect_detail_ref01'];
        git_hub_integration_connect_detail_ref01_data['code'] = setup.idmap['code01'];
        git_hub_integration_connect_detail_ref01_data['custom_view_id'] = setup.idmap['custom_view01'];
        git_hub_integration_connect_detail_ref01_data['initiative_id'] = setup.idmap['initiative01'];
        git_hub_integration_connect_detail_ref01_data['integration_id'] = setup.idmap['integration01'];
        git_hub_integration_connect_detail_ref01_data['project_id'] = setup.idmap['project01'];
        git_hub_integration_connect_detail_ref01_data['redirect_uri'] = setup.idmap['redirect_uri01'];
        git_hub_integration_connect_detail_ref01_data['service'] = setup.idmap['service01'];
        git_hub_integration_connect_detail_ref01_data['should_use_v2_auth'] = setup.idmap['should_use_v2_auth01'];
        git_hub_integration_connect_detail_ref01_data['team_id'] = setup.idmap['team01'];
        git_hub_integration_connect_detail_ref01_data = (await git_hub_integration_connect_detail_ref01_ent.create(git_hub_integration_connect_detail_ref01_data)).data();
        (0, node_assert_1.default)(null != git_hub_integration_connect_detail_ref01_data);
        // UPDATE
        const git_hub_integration_connect_detail_ref01_data_up0 = {};
        git_hub_integration_connect_detail_ref01_data_up0['integration_id'] = setup.idmap['integration_id'];
        const git_hub_integration_connect_detail_ref01_markdef_up0 = { name: 'lostRepositoryNames', value: 'Mark01-git_hub_integration_connect_detail_ref01_' + setup.now };
        git_hub_integration_connect_detail_ref01_data_up0[git_hub_integration_connect_detail_ref01_markdef_up0.name] = git_hub_integration_connect_detail_ref01_markdef_up0.value;
        const git_hub_integration_connect_detail_ref01_resdata_up0 = (await git_hub_integration_connect_detail_ref01_ent.update(git_hub_integration_connect_detail_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != git_hub_integration_connect_detail_ref01_resdata_up0);
        (0, node_assert_1.default)(git_hub_integration_connect_detail_ref01_resdata_up0[git_hub_integration_connect_detail_ref01_markdef_up0.name] === git_hub_integration_connect_detail_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/git_hub_integration_connect_detail/GitHubIntegrationConnectDetailTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['git_hub_integration_connect_detail01', 'git_hub_integration_connect_detail02', 'git_hub_integration_connect_detail03', 'code01', 'custom_view01', 'initiative01', 'integration01', 'project01', 'redirect_uri01', 'service01', 'should_use_v2_auth01', 'team01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_GIT_HUB_INTEGRATION_CONNECT_DETAIL_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_GIT_HUB_INTEGRATION_CONNECT_DETAIL_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_GIT_HUB_INTEGRATION_CONNECT_DETAIL_ENTID'];
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
//# sourceMappingURL=GitHubIntegrationConnectDetailEntity.test.js.map