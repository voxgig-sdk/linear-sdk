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
(0, node_test_1.describe)('IntegrationsSettingEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.IntegrationsSetting();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['create', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'integrations_setting.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "archivedAt", "req": false, "short": "The time at which the entity was archived.", "type": "`$ANY`", "index$": 0 }, { "active": true, "name": "contextViewType", "req": false, "short": "The type of view to which the integration settings context is associated with.", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "createdAt", "req": true, "short": "The time at which the entity was created.", "type": "`$ANY`", "index$": 2 }, { "active": true, "name": "id", "req": true, "short": "The unique identifier of the entity.", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "initiative", "req": false, "short": "Initiative which those settings apply to.", "type": "`$OBJECT`", "index$": 4 }, { "active": true, "name": "microsoftTeamsProjectUpdateCreated", "req": false, "short": "Whether to send a Microsoft Teams message when a project update is created.", "type": "`$BOOLEAN`", "index$": 5 }, { "active": true, "name": "project", "req": false, "short": "Project which those settings apply to.", "type": "`$OBJECT`", "index$": 6 }, { "active": true, "name": "slackInitiativeUpdateCreated", "req": false, "short": "Whether to send a Slack message when an initiative update is created.", "type": "`$BOOLEAN`", "index$": 7 }, { "active": true, "name": "slackIssueAddedToTriage", "req": false, "short": "Whether to send a Slack message when a new issue is added to triage.", "type": "`$BOOLEAN`", "index$": 8 }, { "active": true, "name": "slackIssueAddedToView", "req": false, "short": "Whether to send a Slack message when an issue is added to the custom view.", "type": "`$BOOLEAN`", "index$": 9 }, { "active": true, "name": "slackIssueNewComment", "req": false, "short": "Whether to send a Slack message when a comment is created on any of the project or team's issues.", "type": "`$BOOLEAN`", "index$": 10 }, { "active": true, "name": "slackIssueSlaBreached", "req": false, "short": "Whether to send a Slack message when an SLA is breached.", "type": "`$BOOLEAN`", "index$": 11 }, { "active": true, "name": "slackIssueSlaHighRisk", "req": false, "short": "Whether to send a Slack message when an SLA is at high risk.", "type": "`$BOOLEAN`", "index$": 12 }, { "active": true, "name": "slackIssueStatusChangedAll", "req": false, "short": "Whether to send a Slack message when any of the project or team's issues has a change in status.", "type": "`$BOOLEAN`", "index$": 13 }, { "active": true, "name": "slackIssueStatusChangedDone", "req": false, "short": "Whether to send a Slack message when any of the project or team's issues change to completed or canceled.", "type": "`$BOOLEAN`", "index$": 14 }, { "active": true, "name": "slackProjectUpdateCreated", "req": false, "short": "Whether to send a Slack message when a project update is created.", "type": "`$BOOLEAN`", "index$": 15 }, { "active": true, "name": "slackProjectUpdateCreatedToTeam", "req": false, "short": "Whether to send a new project update to team Slack channels.", "type": "`$BOOLEAN`", "index$": 16 }, { "active": true, "name": "slackProjectUpdateCreatedToWorkspace", "req": false, "short": "Whether to send a new project update to workspace Slack channel.", "type": "`$BOOLEAN`", "index$": 17 }, { "active": true, "name": "team", "req": false, "short": "Team which those settings apply to.", "type": "`$OBJECT`", "index$": 18 }, { "active": true, "name": "updatedAt", "req": true, "short": "The last time at which the entity was meaningfully updated.", "type": "`$ANY`", "index$": 19 }], "id": { "field": "id", "name": "id" }, "name": "integrations_setting", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": {}, "contract": { "id": "POST integrationsSettingsCreate", "json": "{\"field\":{\"args\":[{\"gqltype\":\"IntegrationsSettingsCreateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"IntegrationsSettingsCreateInput\"}],\"deprecated\":false,\"desc\":\"Creates new Slack notification settings for a team, project, initiative, or custom view.\",\"gqltype\":\"IntegrationsSettingsPayload!\",\"list\":false,\"name\":\"integrationsSettingsCreate\",\"reqd\":true,\"type\":\"IntegrationsSettingsPayload\"},\"invocation\":{\"doc\":\"mutation IntegrationsSettingCreate($input: IntegrationsSettingsCreateInput!) { integrationsSettingsCreate(input: $input) { integrationsSettings { ...IntegrationsSettingFields } success } } fragment IntegrationsSettingFields on IntegrationsSettings { archivedAt contextViewType createdAt id initiative { id } microsoftTeamsProjectUpdateCreated project { id } slackInitiativeUpdateCreated slackIssueAddedToTriage slackIssueAddedToView slackIssueNewComment slackIssueSlaBreached slackIssueSlaHighRisk slackIssueStatusChangedAll slackIssueStatusChangedDone slackProjectUpdateCreated slackProjectUpdateCreatedToTeam slackProjectUpdateCreatedToWorkspace team { id } updatedAt }\",\"field\":\"integrationsSettingsCreate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"\",\"gqltype\":\"IntegrationsSettingsCreateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"Boolean\":{\"desc\":\"The `Boolean` scalar type represents `true` or `false`.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Boolean\"},\"ContextViewType\":{\"fields\":{},\"kind\":\"ENUM\",\"name\":\"ContextViewType\",\"values\":[\"activeCycle\",\"activeIssues\",\"backlog\",\"triage\",\"upcomingCycle\"]},\"IntegrationsSettingsCreateInput\":{\"fields\":{\"contextViewType\":{\"args\":[],\"deprecated\":false,\"desc\":\"The type of view to which the integration settings context is associated with.\",\"gqltype\":\"ContextViewType\",\"list\":false,\"name\":\"contextViewType\",\"reqd\":false,\"type\":\"ContextViewType\"},\"customViewId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the custom view to create settings for.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"customViewId\",\"reqd\":false,\"type\":\"String\"},\"id\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier in UUID v4 format. If none is provided, the backend will generate one.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"id\",\"reqd\":false,\"type\":\"String\"},\"initiativeId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the initiative to create settings for.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"initiativeId\",\"reqd\":false,\"type\":\"String\"},\"microsoftTeamsProjectUpdateCreated\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether to send a Microsoft Teams message when a project update is created.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"microsoftTeamsProjectUpdateCreated\",\"reqd\":false,\"type\":\"Boolean\"},\"projectId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the project to create settings for.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"projectId\",\"reqd\":false,\"type\":\"String\"},\"slackInitiativeUpdateCreated\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether to send a Slack message when an initiative update is created.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"slackInitiativeUpdateCreated\",\"reqd\":false,\"type\":\"Boolean\"},\"slackIssueAddedToTriage\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether to send a Slack message when a new issue is added to triage.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"slackIssueAddedToTriage\",\"reqd\":false,\"type\":\"Boolean\"},\"slackIssueAddedToView\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether to send a Slack message when an issue is added to a view.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"slackIssueAddedToView\",\"reqd\":false,\"type\":\"Boolean\"},\"slackIssueCreated\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether to send a Slack message when a new issue is created for the project or the team.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"slackIssueCreated\",\"reqd\":false,\"type\":\"Boolean\"},\"slackIssueNewComment\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether to send a Slack message when a comment is created on any of the project or team's issues.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"slackIssueNewComment\",\"reqd\":false,\"type\":\"Boolean\"},\"slackIssueSlaBreached\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether to receive notification when an SLA has breached on Slack.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"slackIssueSlaBreached\",\"reqd\":false,\"type\":\"Boolean\"},\"slackIssueSlaHighRisk\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether to send a Slack message when an SLA is at high risk.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"slackIssueSlaHighRisk\",\"reqd\":false,\"type\":\"Boolean\"},\"slackIssueStatusChangedAll\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether to send a Slack message when any of the project or team's issues has a change in status.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"slackIssueStatusChangedAll\",\"reqd\":false,\"type\":\"Boolean\"},\"slackIssueStatusChangedDone\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether to send a Slack message when any of the project or team's issues change to completed or canceled.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"slackIssueStatusChangedDone\",\"reqd\":false,\"type\":\"Boolean\"},\"slackProjectUpdateCreated\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether to send a Slack message when a project update is created.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"slackProjectUpdateCreated\",\"reqd\":false,\"type\":\"Boolean\"},\"slackProjectUpdateCreatedToTeam\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether to send a Slack message when a project update is created to team channels.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"slackProjectUpdateCreatedToTeam\",\"reqd\":false,\"type\":\"Boolean\"},\"slackProjectUpdateCreatedToWorkspace\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether to send a Slack message when a project update is created to workspace channel.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"slackProjectUpdateCreatedToWorkspace\",\"reqd\":false,\"type\":\"Boolean\"},\"teamId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the team to create settings for.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"teamId\",\"reqd\":false,\"type\":\"String\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"IntegrationsSettingsCreateInput\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "mutation IntegrationsSettingCreate($input: IntegrationsSettingsCreateInput!) { integrationsSettingsCreate(input: $input) { integrationsSettings { ...IntegrationsSettingFields } success } } fragment IntegrationsSettingFields on IntegrationsSettings { archivedAt contextViewType createdAt id initiative { id } microsoftTeamsProjectUpdateCreated project { id } slackInitiativeUpdateCreated slackIssueAddedToTriage slackIssueAddedToView slackIssueNewComment slackIssueSlaBreached slackIssueSlaHighRisk slackIssueStatusChangedAll slackIssueStatusChangedDone slackProjectUpdateCreated slackProjectUpdateCreatedToTeam slackProjectUpdateCreatedToWorkspace team { id } updatedAt }", "field": "integrationsSettingsCreate", "optype": "mutation", "vars": [{ "from": "", "gqltype": "IntegrationsSettingsCreateInput!", "name": "input" }] }, "kind": "graphql", "method": "POST", "orig": "integrationsSettingsCreate", "segments": [], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.data.integrationsSettingsCreate.integrationsSettings`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST integrationsSettings", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"Retrieves a specific integration settings configuration by its identifier.\",\"gqltype\":\"IntegrationsSettings!\",\"list\":false,\"name\":\"integrationsSettings\",\"reqd\":true,\"type\":\"IntegrationsSettings\"},\"invocation\":{\"doc\":\"query IntegrationsSettingLoad($id: String!) { integrationsSettings(id: $id) { ...IntegrationsSettingFields } } fragment IntegrationsSettingFields on IntegrationsSettings { archivedAt contextViewType createdAt id initiative { id } microsoftTeamsProjectUpdateCreated project { id } slackInitiativeUpdateCreated slackIssueAddedToTriage slackIssueAddedToView slackIssueNewComment slackIssueSlaBreached slackIssueSlaHighRisk slackIssueStatusChangedAll slackIssueStatusChangedDone slackProjectUpdateCreated slackProjectUpdateCreatedToTeam slackProjectUpdateCreatedToWorkspace team { id } updatedAt }\",\"field\":\"integrationsSettings\",\"optype\":\"query\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "query IntegrationsSettingLoad($id: String!) { integrationsSettings(id: $id) { ...IntegrationsSettingFields } } fragment IntegrationsSettingFields on IntegrationsSettings { archivedAt contextViewType createdAt id initiative { id } microsoftTeamsProjectUpdateCreated project { id } slackInitiativeUpdateCreated slackIssueAddedToTriage slackIssueAddedToView slackIssueNewComment slackIssueSlaBreached slackIssueSlaHighRisk slackIssueStatusChangedAll slackIssueStatusChangedDone slackProjectUpdateCreated slackProjectUpdateCreatedToTeam slackProjectUpdateCreatedToWorkspace team { id } updatedAt }", "field": "integrationsSettings", "optype": "query", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "kind": "graphql", "method": "POST", "orig": "integrationsSettings", "segments": [], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.data.integrationsSettings`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST integrationsSettingsUpdate", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"},{\"gqltype\":\"IntegrationsSettingsUpdateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"IntegrationsSettingsUpdateInput\"}],\"deprecated\":false,\"desc\":\"Updates Slack notification settings for a team, project, initiative, or custom view.\",\"gqltype\":\"IntegrationsSettingsPayload!\",\"list\":false,\"name\":\"integrationsSettingsUpdate\",\"reqd\":true,\"type\":\"IntegrationsSettingsPayload\"},\"invocation\":{\"doc\":\"mutation IntegrationsSettingUpdate($id: String!, $input: IntegrationsSettingsUpdateInput!) { integrationsSettingsUpdate(id: $id, input: $input) { integrationsSettings { ...IntegrationsSettingFields } success } } fragment IntegrationsSettingFields on IntegrationsSettings { archivedAt contextViewType createdAt id initiative { id } microsoftTeamsProjectUpdateCreated project { id } slackInitiativeUpdateCreated slackIssueAddedToTriage slackIssueAddedToView slackIssueNewComment slackIssueSlaBreached slackIssueSlaHighRisk slackIssueStatusChangedAll slackIssueStatusChangedDone slackProjectUpdateCreated slackProjectUpdateCreatedToTeam slackProjectUpdateCreatedToWorkspace team { id } updatedAt }\",\"field\":\"integrationsSettingsUpdate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"},{\"from\":\"\",\"gqltype\":\"IntegrationsSettingsUpdateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"Boolean\":{\"desc\":\"The `Boolean` scalar type represents `true` or `false`.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Boolean\"},\"IntegrationsSettingsUpdateInput\":{\"fields\":{\"microsoftTeamsProjectUpdateCreated\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether to send a Microsoft Teams message when a project update is created.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"microsoftTeamsProjectUpdateCreated\",\"reqd\":false,\"type\":\"Boolean\"},\"slackInitiativeUpdateCreated\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether to send a Slack message when an initiative update is created.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"slackInitiativeUpdateCreated\",\"reqd\":false,\"type\":\"Boolean\"},\"slackIssueAddedToTriage\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether to send a Slack message when a new issue is added to triage.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"slackIssueAddedToTriage\",\"reqd\":false,\"type\":\"Boolean\"},\"slackIssueAddedToView\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether to send a Slack message when an issue is added to a view.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"slackIssueAddedToView\",\"reqd\":false,\"type\":\"Boolean\"},\"slackIssueCreated\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether to send a Slack message when a new issue is created for the project or the team.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"slackIssueCreated\",\"reqd\":false,\"type\":\"Boolean\"},\"slackIssueNewComment\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether to send a Slack message when a comment is created on any of the project or team's issues.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"slackIssueNewComment\",\"reqd\":false,\"type\":\"Boolean\"},\"slackIssueSlaBreached\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether to receive notification when an SLA has breached on Slack.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"slackIssueSlaBreached\",\"reqd\":false,\"type\":\"Boolean\"},\"slackIssueSlaHighRisk\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether to send a Slack message when an SLA is at high risk.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"slackIssueSlaHighRisk\",\"reqd\":false,\"type\":\"Boolean\"},\"slackIssueStatusChangedAll\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether to send a Slack message when any of the project or team's issues has a change in status.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"slackIssueStatusChangedAll\",\"reqd\":false,\"type\":\"Boolean\"},\"slackIssueStatusChangedDone\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether to send a Slack message when any of the project or team's issues change to completed or canceled.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"slackIssueStatusChangedDone\",\"reqd\":false,\"type\":\"Boolean\"},\"slackProjectUpdateCreated\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether to send a Slack message when a project update is created.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"slackProjectUpdateCreated\",\"reqd\":false,\"type\":\"Boolean\"},\"slackProjectUpdateCreatedToTeam\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether to send a Slack message when a project update is created to team channels.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"slackProjectUpdateCreatedToTeam\",\"reqd\":false,\"type\":\"Boolean\"},\"slackProjectUpdateCreatedToWorkspace\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether to send a Slack message when a project update is created to workspace channel.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"slackProjectUpdateCreatedToWorkspace\",\"reqd\":false,\"type\":\"Boolean\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"IntegrationsSettingsUpdateInput\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "mutation IntegrationsSettingUpdate($id: String!, $input: IntegrationsSettingsUpdateInput!) { integrationsSettingsUpdate(id: $id, input: $input) { integrationsSettings { ...IntegrationsSettingFields } success } } fragment IntegrationsSettingFields on IntegrationsSettings { archivedAt contextViewType createdAt id initiative { id } microsoftTeamsProjectUpdateCreated project { id } slackInitiativeUpdateCreated slackIssueAddedToTriage slackIssueAddedToView slackIssueNewComment slackIssueSlaBreached slackIssueSlaHighRisk slackIssueStatusChangedAll slackIssueStatusChangedDone slackProjectUpdateCreated slackProjectUpdateCreatedToTeam slackProjectUpdateCreatedToWorkspace team { id } updatedAt }", "field": "integrationsSettingsUpdate", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }, { "from": "", "gqltype": "IntegrationsSettingsUpdateInput!", "name": "input" }] }, "kind": "graphql", "method": "POST", "orig": "integrationsSettingsUpdate", "segments": [], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.data.integrationsSettingsUpdate.integrationsSettings`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "integrations_setting", "name__orig": "integrations_setting", "Name": "IntegrationsSetting", "name_": "integrations_setting", "name-": "integrations-setting", "NAME": "INTEGRATIONS_SETTING", "index$": 39 }, { "active": true, "entity": "integrations_setting", "key$": "BasicIntegrationsSettingFlow", "kind": "basic", "name": "BasicIntegrationsSettingFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "integrations_setting_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "integrations_setting_ref01", "srcdatavar": "integrations_setting_ref01_data", "suffix": "_up0", "textfield": "contextViewType" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-integrations_setting_ref01" } }], "valid": [], "index$": 1 }, { "active": true, "data": {}, "input": { "ref": "integrations_setting_ref01", "srcdatavar": "integrations_setting_ref01_data", "suffix": "_dt0" }, "match": { "id": "integrations_setting01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-integrations_setting_ref01" } }], "index$": 2 }] }, 'IntegrationsSetting');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const integrations_setting_ref01_ent = client.IntegrationsSetting();
        let integrations_setting_ref01_data = setup.data.new.integrations_setting['integrations_setting_ref01'];
        integrations_setting_ref01_data = (await integrations_setting_ref01_ent.create(integrations_setting_ref01_data)).data();
        (0, node_assert_1.default)(null != integrations_setting_ref01_data.id);
        // UPDATE
        const integrations_setting_ref01_data_up0 = {};
        integrations_setting_ref01_data_up0.id = integrations_setting_ref01_data.id;
        const integrations_setting_ref01_markdef_up0 = { name: 'contextViewType', value: 'Mark01-integrations_setting_ref01_' + setup.now };
        integrations_setting_ref01_data_up0[integrations_setting_ref01_markdef_up0.name] = integrations_setting_ref01_markdef_up0.value;
        const integrations_setting_ref01_resdata_up0 = (await integrations_setting_ref01_ent.update(integrations_setting_ref01_data_up0)).data();
        (0, node_assert_1.default)(integrations_setting_ref01_resdata_up0.id === integrations_setting_ref01_data_up0.id);
        (0, node_assert_1.default)(integrations_setting_ref01_resdata_up0[integrations_setting_ref01_markdef_up0.name] === integrations_setting_ref01_markdef_up0.value);
        // LOAD
        const integrations_setting_ref01_match_dt0 = {};
        integrations_setting_ref01_match_dt0.id = integrations_setting_ref01_data.id;
        const integrations_setting_ref01_data_dt0 = (await integrations_setting_ref01_ent.load(integrations_setting_ref01_match_dt0)).data();
        (0, node_assert_1.default)(integrations_setting_ref01_data_dt0.id === integrations_setting_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/integrations_setting/IntegrationsSettingTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['integrations_setting01', 'integrations_setting02', 'integrations_setting03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_INTEGRATIONS_SETTING_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_INTEGRATIONS_SETTING_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_INTEGRATIONS_SETTING_ENTID'];
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
//# sourceMappingURL=IntegrationsSettingEntity.test.js.map