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
(0, node_test_1.describe)('AgentSessionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.AgentSession();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'agent_session.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "appUser": { "a": true, "h": "App User", "n": "appUser", "r": false, "sh": "The agent user that is associated with this agent session.", "t": "`$OBJECT`", "key$": "appUser", "index$": 0 }, "archivedAt": { "a": true, "h": "Archived At", "n": "archivedAt", "r": false, "sh": "The time at which the entity was archived.", "t": "`$ANY`", "key$": "archivedAt", "index$": 1 }, "codingHarnessModelLabel": { "a": true, "h": "Coding Harness Model Label", "n": "codingHarnessModelLabel", "r": false, "sh": "[Internal] Compact display label for the coding harness model used by this session, derived from the latest associated sandbox.", "t": "`$STRING`", "key$": "codingHarnessModelLabel", "index$": 2 }, "comment": { "a": true, "h": "Comment", "n": "comment", "r": false, "sh": "The comment this agent session is associated with.", "t": "`$OBJECT`", "key$": "comment", "index$": 3 }, "context": { "a": true, "h": "Context", "n": "context", "r": true, "sh": "The entity contexts this session is related to, such as issues or projects referenced in direct chat sessions.", "t": "`$ANY`", "key$": "context", "index$": 4 }, "createdAt": { "a": true, "h": "Created At", "n": "createdAt", "r": true, "sh": "The time at which the entity was created.", "t": "`$ANY`", "key$": "createdAt", "index$": 5 }, "creator": { "a": true, "h": "Creator", "n": "creator", "r": false, "sh": "The human user responsible for the agent session.", "t": "`$OBJECT`", "key$": "creator", "index$": 6 }, "dismissedAt": { "a": true, "h": "Dismissed At", "n": "dismissedAt", "r": false, "sh": "The time a user dismissed this agent session.", "t": "`$ANY`", "key$": "dismissedAt", "index$": 7 }, "dismissedBy": { "a": true, "h": "Dismissed By", "n": "dismissedBy", "r": false, "sh": "The user who dismissed the agent session.", "t": "`$OBJECT`", "key$": "dismissedBy", "index$": 8 }, "endedAt": { "a": true, "h": "Ended At", "n": "endedAt", "r": false, "sh": "The time the agent session completed.", "t": "`$ANY`", "key$": "endedAt", "index$": 9 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The unique identifier of the entity.", "t": "`$STRING`", "key$": "id", "index$": 10 }, "issue": { "a": true, "h": "Issue", "n": "issue", "r": false, "sh": "The issue this agent session is associated with.", "t": "`$OBJECT`", "key$": "issue", "index$": 11 }, "modelSelection": { "a": true, "h": "Model Selection", "n": "modelSelection", "r": false, "sh": "[Internal] How Adaptive selected the model route used by this coding session.", "t": "`$ANY`", "key$": "modelSelection", "index$": 12 }, "plan": { "a": true, "h": "Plan", "n": "plan", "r": false, "sh": "A dynamically updated plan describing the agent's execution strategy, including steps to be taken and their current status.", "t": "`$ANY`", "key$": "plan", "index$": 13 }, "pullRequest": { "a": true, "h": "Pull Request", "n": "pullRequest", "r": false, "sh": "The pull request this agent session is anchored to, when started from a pull request.", "t": "`$OBJECT`", "key$": "pullRequest", "index$": 14 }, "slugId": { "a": true, "h": "Slug Id", "n": "slugId", "r": true, "sh": "The agent session's unique URL slug.", "t": "`$STRING`", "key$": "slugId", "index$": 15 }, "sourceComment": { "a": true, "h": "Source Comment", "n": "sourceComment", "r": false, "sh": "The comment that this agent session was spawned from, if from a different thread.", "t": "`$OBJECT`", "key$": "sourceComment", "index$": 16 }, "sourceMetadata": { "a": true, "h": "Source Metadata", "n": "sourceMetadata", "r": false, "sh": "Metadata about the external source that created this agent session.", "t": "`$ANY`", "key$": "sourceMetadata", "index$": 17 }, "startedAt": { "a": true, "h": "Started At", "n": "startedAt", "r": false, "sh": "The time the agent session transitioned to active status and began work.", "t": "`$ANY`", "key$": "startedAt", "index$": 18 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "sh": "The current status of the agent session, such as pending, active, awaiting input, complete, error, or stale.", "t": "`$STRING`", "key$": "status", "index$": 19 }, "summary": { "a": true, "h": "Summary", "n": "summary", "r": false, "sh": "The session title, generated automatically or set by the owning OAuth application.", "t": "`$STRING`", "key$": "summary", "index$": 20 }, "updatedAt": { "a": true, "h": "Updated At", "n": "updatedAt", "r": true, "sh": "The last time at which the entity was meaningfully updated.", "t": "`$ANY`", "key$": "updatedAt", "index$": 21 }, "url": { "a": true, "h": "Url", "n": "url", "r": false, "sh": "The URL to the agent session page in the Linear app.", "t": "`$STRING`", "key$": "url", "index$": 22 } }, "id": { "field": "id", "name": "id" }, "name": "agent_session", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST agentSessionCreate", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "pull_request_id", "or": "pull_request_id", "r": false, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation AgentSessionCreate($input: AgentSessionCreateInput!, $pullRequestId: String) { agentSessionCreate(input: $input, pullRequestId: $pullRequestId) { agentSession { ...AgentSessionFields } success } } fragment AgentSessionFields on AgentSession { appUser { id } archivedAt codingHarnessModelLabel comment { id } context createdAt creator { id } dismissedAt dismissedBy { id } endedAt id issue { id } modelSelection plan pullRequest { id } slugId sourceComment { id } sourceMetadata startedAt status summary updatedAt url }", "field": "agentSessionCreate", "optype": "mutation", "vars": [{ "from": "", "gqltype": "AgentSessionCreateInput!", "name": "input" }, { "from": "pullRequestId", "gqltype": "String", "name": "pullRequestId" }] }, "k": "graphql", "m": "POST", "o": "agentSessionCreate", "q": {}, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.agentSessionCreate.agentSession`" }, "index$": 0 }, { "a": true, "co": { "id": "POST agentSessionCreateOnComment", "source": "graphql", "version": 2 }, "g": {}, "gq": { "doc": "mutation AgentSessionCreateCreateOnComment($input: AgentSessionCreateOnComment!) { agentSessionCreateOnComment(input: $input) { agentSession { ...AgentSessionFields } success } } fragment AgentSessionFields on AgentSession { appUser { id } archivedAt codingHarnessModelLabel comment { id } context createdAt creator { id } dismissedAt dismissedBy { id } endedAt id issue { id } modelSelection plan pullRequest { id } slugId sourceComment { id } sourceMetadata startedAt status summary updatedAt url }", "field": "agentSessionCreateOnComment", "optype": "mutation", "vars": [{ "from": "", "gqltype": "AgentSessionCreateOnComment!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "agentSessionCreateOnComment", "q": { "$action": "create_on_comment" }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.agentSessionCreateOnComment.agentSession`" }, "index$": 1 }, { "a": true, "co": { "id": "POST agentSessionCreateOnIssue", "source": "graphql", "version": 2 }, "g": {}, "gq": { "doc": "mutation AgentSessionCreateCreateOnIssue($input: AgentSessionCreateOnIssue!) { agentSessionCreateOnIssue(input: $input) { agentSession { ...AgentSessionFields } success } } fragment AgentSessionFields on AgentSession { appUser { id } archivedAt codingHarnessModelLabel comment { id } context createdAt creator { id } dismissedAt dismissedBy { id } endedAt id issue { id } modelSelection plan pullRequest { id } slugId sourceComment { id } sourceMetadata startedAt status summary updatedAt url }", "field": "agentSessionCreateOnIssue", "optype": "mutation", "vars": [{ "from": "", "gqltype": "AgentSessionCreateOnIssue!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "agentSessionCreateOnIssue", "q": { "$action": "create_on_issue" }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.agentSessionCreateOnIssue.agentSession`" }, "index$": 2 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "POST agentSessions", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "before", "or": "before", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "first", "or": "first", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "param", "n": "include_archived", "or": "include_archived", "r": false, "t": "`$BOOLEAN`", "index$": 3 }, { "a": true, "k": "param", "n": "last", "or": "last", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "param", "n": "order_by", "or": "order_by", "r": false, "t": "`$ANY`", "index$": 5 }] }, "gq": { "doc": "query AgentSessionList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { agentSessions(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...AgentSessionFields } pageInfo { endCursor hasNextPage } } } fragment AgentSessionFields on AgentSession { appUser { id } archivedAt codingHarnessModelLabel comment { id } context createdAt creator { id } dismissedAt dismissedBy { id } endedAt id issue { id } modelSelection plan pullRequest { id } slugId sourceComment { id } sourceMetadata startedAt status summary updatedAt url }", "field": "agentSessions", "optype": "query", "page": { "cursor": "pageInfo.endCursor", "more": "pageInfo.hasNextPage", "nodes": "nodes", "style": "relay" }, "vars": [{ "from": "after", "gqltype": "String", "name": "after" }, { "from": "before", "gqltype": "String", "name": "before" }, { "from": "first", "gqltype": "Int", "name": "first" }, { "from": "includeArchived", "gqltype": "Boolean", "name": "includeArchived" }, { "from": "last", "gqltype": "Int", "name": "last" }, { "from": "orderBy", "gqltype": "PaginationOrderBy", "name": "orderBy" }] }, "k": "graphql", "m": "POST", "o": "agentSessions", "q": {}, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.agentSessions.nodes`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "POST agentSession", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "query AgentSessionLoad($id: String!) { agentSession(id: $id) { ...AgentSessionFields } } fragment AgentSessionFields on AgentSession { appUser { id } archivedAt codingHarnessModelLabel comment { id } context createdAt creator { id } dismissedAt dismissedBy { id } endedAt id issue { id } modelSelection plan pullRequest { id } slugId sourceComment { id } sourceMetadata startedAt status summary updatedAt url }", "field": "agentSession", "optype": "query", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "agentSession", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.agentSession`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "POST agentSessionRestartWithDefaultModel", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation AgentSessionUpdateRestartWithDefaultModel($id: String!) { agentSessionRestartWithDefaultModel(id: $id) { agentSession { ...AgentSessionFields } success } } fragment AgentSessionFields on AgentSession { appUser { id } archivedAt codingHarnessModelLabel comment { id } context createdAt creator { id } dismissedAt dismissedBy { id } endedAt id issue { id } modelSelection plan pullRequest { id } slugId sourceComment { id } sourceMetadata startedAt status summary updatedAt url }", "field": "agentSessionRestartWithDefaultModel", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "agentSessionRestartWithDefaultModel", "q": { "$action": "restart_with_default_model", "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.agentSessionRestartWithDefaultModel.agentSession`" }, "index$": 0 }, { "a": true, "co": { "id": "POST agentSessionUpdate", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation AgentSessionUpdate($id: String!, $input: AgentSessionUpdateInput!) { agentSessionUpdate(id: $id, input: $input) { agentSession { ...AgentSessionFields } success } } fragment AgentSessionFields on AgentSession { appUser { id } archivedAt codingHarnessModelLabel comment { id } context createdAt creator { id } dismissedAt dismissedBy { id } endedAt id issue { id } modelSelection plan pullRequest { id } slugId sourceComment { id } sourceMetadata startedAt status summary updatedAt url }", "field": "agentSessionUpdate", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }, { "from": "", "gqltype": "AgentSessionUpdateInput!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "agentSessionUpdate", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.agentSessionUpdate.agentSession`" }, "index$": 1 }, { "a": true, "co": { "id": "POST agentSessionUpdateExternalUrl", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation AgentSessionUpdateUpdateExternalUrl($id: String!, $input: AgentSessionUpdateExternalUrlInput!) { agentSessionUpdateExternalUrl(id: $id, input: $input) { agentSession { ...AgentSessionFields } success } } fragment AgentSessionFields on AgentSession { appUser { id } archivedAt codingHarnessModelLabel comment { id } context createdAt creator { id } dismissedAt dismissedBy { id } endedAt id issue { id } modelSelection plan pullRequest { id } slugId sourceComment { id } sourceMetadata startedAt status summary updatedAt url }", "field": "agentSessionUpdateExternalUrl", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }, { "from": "", "gqltype": "AgentSessionUpdateExternalUrlInput!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "agentSessionUpdateExternalUrl", "q": { "$action": "update_external_url", "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.agentSessionUpdateExternalUrl.agentSession`" }, "index$": 2 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "agent_session", "name__orig": "agent_session", "Name": "AgentSession", "name_": "agent_session", "name-": "agent-session", "NAME": "AGENT_SESSION", "index$": 3 }, { "active": true, "entity": "agent_session", "key$": "BasicAgentSessionFlow", "kind": "basic", "name": "BasicAgentSessionFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "agent_session_ref01" }, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "after": "after01", "before": "before01", "first": "first01", "include_archived": "include_archived01", "last": "last01", "order_by": "order_by01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "agent_session_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "agent_session_ref01", "srcdatavar": "agent_session_ref01_data", "suffix": "_up0", "textfield": "codingHarnessModelLabel" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-agent_session_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "agent_session_ref01", "srcdatavar": "agent_session_ref01_data", "suffix": "_dt0" }, "m": { "id": "agent_session01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-agent_session_ref01" } }], "index$": 3 }] }, 'AgentSession', { "POST agentSessionCreate": { "protocol": "graphql" }, "POST agentSessionCreateOnComment": { "protocol": "graphql" }, "POST agentSessionCreateOnIssue": { "protocol": "graphql" }, "POST agentSessions": { "protocol": "graphql" }, "POST agentSession": { "protocol": "graphql" }, "POST agentSessionRestartWithDefaultModel": { "protocol": "graphql" }, "POST agentSessionUpdate": { "protocol": "graphql" }, "POST agentSessionUpdateExternalUrl": { "protocol": "graphql" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const agent_session_ref01_ent = client.AgentSession();
        let agent_session_ref01_data = setup.data.new.agent_session['agent_session_ref01'];
        agent_session_ref01_data['after'] = setup.idmap['after01'];
        agent_session_ref01_data['before'] = setup.idmap['before01'];
        agent_session_ref01_data['first'] = setup.idmap['first01'];
        agent_session_ref01_data['include_archived'] = setup.idmap['include_archived01'];
        agent_session_ref01_data['last'] = setup.idmap['last01'];
        agent_session_ref01_data['order_by'] = setup.idmap['order_by01'];
        agent_session_ref01_data = (await agent_session_ref01_ent.create(agent_session_ref01_data)).data();
        (0, node_assert_1.default)(null != agent_session_ref01_data.id);
        // LIST
        const agent_session_ref01_match = {};
        agent_session_ref01_match['after'] = setup.idmap['after01'];
        agent_session_ref01_match['before'] = setup.idmap['before01'];
        agent_session_ref01_match['first'] = setup.idmap['first01'];
        agent_session_ref01_match['include_archived'] = setup.idmap['include_archived01'];
        agent_session_ref01_match['last'] = setup.idmap['last01'];
        agent_session_ref01_match['order_by'] = setup.idmap['order_by01'];
        const agent_session_ref01_list = (await agent_session_ref01_ent.list(agent_session_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(agent_session_ref01_list, { id: agent_session_ref01_data.id })));
        // UPDATE
        const agent_session_ref01_data_up0 = {};
        agent_session_ref01_data_up0.id = agent_session_ref01_data.id;
        const agent_session_ref01_markdef_up0 = { name: 'codingHarnessModelLabel', value: 'Mark01-agent_session_ref01_' + setup.now };
        agent_session_ref01_data_up0[agent_session_ref01_markdef_up0.name] = agent_session_ref01_markdef_up0.value;
        const agent_session_ref01_resdata_up0 = (await agent_session_ref01_ent.update(agent_session_ref01_data_up0)).data();
        (0, node_assert_1.default)(agent_session_ref01_resdata_up0.id === agent_session_ref01_data_up0.id);
        (0, node_assert_1.default)(agent_session_ref01_resdata_up0[agent_session_ref01_markdef_up0.name] === agent_session_ref01_markdef_up0.value);
        // LOAD
        const agent_session_ref01_match_dt0 = {};
        agent_session_ref01_match_dt0.id = agent_session_ref01_data.id;
        const agent_session_ref01_data_dt0 = (await agent_session_ref01_ent.load(agent_session_ref01_match_dt0)).data();
        (0, node_assert_1.default)(agent_session_ref01_data_dt0.id === agent_session_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/agent_session/AgentSessionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['agent_session01', 'agent_session02', 'agent_session03', 'after01', 'before01', 'first01', 'include_archived01', 'last01', 'order_by01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_AGENT_SESSION_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_AGENT_SESSION_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_AGENT_SESSION_ENTID'];
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
//# sourceMappingURL=AgentSessionEntity.test.js.map