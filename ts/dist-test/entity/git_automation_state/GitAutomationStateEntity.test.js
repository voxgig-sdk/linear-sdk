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
(0, node_test_1.describe)('GitAutomationStateEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.GitAutomationState();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['create', 'update', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'git_automation_state.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "archivedAt", "req": false, "short": "The time at which the entity was archived.", "type": "`$ANY`", "index$": 0 }, { "active": true, "name": "createdAt", "req": true, "short": "The time at which the entity was created.", "type": "`$ANY`", "index$": 1 }, { "active": true, "name": "event", "req": true, "short": "The Git event that triggers this automation rule (e.g., branch created, PR opened for review, or PR merged).", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "id", "req": true, "short": "The unique identifier of the entity.", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "state", "req": false, "short": "The workflow state that linked issues will be transitioned to when the Git event fires.", "type": "`$OBJECT`", "index$": 4 }, { "active": true, "name": "targetBranch", "req": false, "short": "The target branch that this automation rule applies to.", "type": "`$OBJECT`", "index$": 5 }, { "active": true, "name": "team", "req": false, "short": "The team that this automation rule belongs to.", "type": "`$OBJECT`", "index$": 6 }, { "active": true, "name": "updatedAt", "req": true, "short": "The last time at which the entity was meaningfully updated.", "type": "`$ANY`", "index$": 7 }], "id": { "field": "id", "name": "id" }, "name": "git_automation_state", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": {}, "contract": { "id": "POST gitAutomationStateCreate", "json": "{\"field\":{\"args\":[{\"gqltype\":\"GitAutomationStateCreateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"GitAutomationStateCreateInput\"}],\"deprecated\":false,\"desc\":\"Creates a new Git automation rule that maps a Git event to a workflow state transition for a team.\",\"gqltype\":\"GitAutomationStatePayload!\",\"list\":false,\"name\":\"gitAutomationStateCreate\",\"reqd\":true,\"type\":\"GitAutomationStatePayload\"},\"invocation\":{\"doc\":\"mutation GitAutomationStateCreate($input: GitAutomationStateCreateInput!) { gitAutomationStateCreate(input: $input) { gitAutomationState { ...GitAutomationStateFields } success } } fragment GitAutomationStateFields on GitAutomationState { archivedAt createdAt event id state { id } targetBranch { id } team { id } updatedAt }\",\"field\":\"gitAutomationStateCreate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"\",\"gqltype\":\"GitAutomationStateCreateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"GitAutomationStateCreateInput\":{\"desc\":\"Input for creating a new Git automation rule.\",\"fields\":{\"event\":{\"args\":[],\"deprecated\":false,\"desc\":\"The event that triggers the automation.\",\"gqltype\":\"GitAutomationStates!\",\"list\":false,\"name\":\"event\",\"reqd\":true,\"type\":\"GitAutomationStates\"},\"id\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier in UUID v4 format. If none is provided, the backend will generate one.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"id\",\"reqd\":false,\"type\":\"String\"},\"stateId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The associated workflow state. If null, will override default behaviour and take no action.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"stateId\",\"reqd\":false,\"type\":\"String\"},\"targetBranchId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The associated target branch. If null, all branches are targeted.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"targetBranchId\",\"reqd\":false,\"type\":\"String\"},\"teamId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The team associated with the automation state.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"teamId\",\"reqd\":true,\"type\":\"String\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"GitAutomationStateCreateInput\"},\"GitAutomationStates\":{\"desc\":\"The Git events that can trigger an automation rule. Each value corresponds to a pull/merge request lifecycle event (e.g., branch created, PR opened for review, PR merged).\",\"fields\":{},\"kind\":\"ENUM\",\"name\":\"GitAutomationStates\",\"values\":[\"draft\",\"merge\",\"mergeable\",\"review\",\"start\"]},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "mutation GitAutomationStateCreate($input: GitAutomationStateCreateInput!) { gitAutomationStateCreate(input: $input) { gitAutomationState { ...GitAutomationStateFields } success } } fragment GitAutomationStateFields on GitAutomationState { archivedAt createdAt event id state { id } targetBranch { id } team { id } updatedAt }", "field": "gitAutomationStateCreate", "optype": "mutation", "vars": [{ "from": "", "gqltype": "GitAutomationStateCreateInput!", "name": "input" }] }, "kind": "graphql", "method": "POST", "orig": "gitAutomationStateCreate", "segments": [], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.data.gitAutomationStateCreate.gitAutomationState`" }, "index$": 0 }], "key$": "create" }, "remove": { "input": "data", "name": "remove", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST gitAutomationStateDelete", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"Deletes a Git automation rule.\",\"gqltype\":\"DeletePayload!\",\"list\":false,\"name\":\"gitAutomationStateDelete\",\"reqd\":true,\"type\":\"DeletePayload\"},\"invocation\":{\"doc\":\"mutation GitAutomationStateRemove($id: String!) { gitAutomationStateDelete(id: $id) { entityId lastSyncId success } }\",\"field\":\"gitAutomationStateDelete\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "mutation GitAutomationStateRemove($id: String!) { gitAutomationStateDelete(id: $id) { entityId lastSyncId success } }", "field": "gitAutomationStateDelete", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "kind": "graphql", "method": "POST", "orig": "gitAutomationStateDelete", "segments": [], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.data.gitAutomationStateDelete`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST gitAutomationStateUpdate", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"},{\"gqltype\":\"GitAutomationStateUpdateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"GitAutomationStateUpdateInput\"}],\"deprecated\":false,\"desc\":\"Updates an existing Git automation rule, including its workflow state, target branch, and triggering event.\",\"gqltype\":\"GitAutomationStatePayload!\",\"list\":false,\"name\":\"gitAutomationStateUpdate\",\"reqd\":true,\"type\":\"GitAutomationStatePayload\"},\"invocation\":{\"doc\":\"mutation GitAutomationStateUpdate($id: String!, $input: GitAutomationStateUpdateInput!) { gitAutomationStateUpdate(id: $id, input: $input) { gitAutomationState { ...GitAutomationStateFields } success } } fragment GitAutomationStateFields on GitAutomationState { archivedAt createdAt event id state { id } targetBranch { id } team { id } updatedAt }\",\"field\":\"gitAutomationStateUpdate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"},{\"from\":\"\",\"gqltype\":\"GitAutomationStateUpdateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"GitAutomationStateUpdateInput\":{\"desc\":\"Input for updating an existing Git automation rule.\",\"fields\":{\"event\":{\"args\":[],\"deprecated\":false,\"desc\":\"The event that triggers the automation.\",\"gqltype\":\"GitAutomationStates\",\"list\":false,\"name\":\"event\",\"reqd\":false,\"type\":\"GitAutomationStates\"},\"stateId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The associated workflow state.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"stateId\",\"reqd\":false,\"type\":\"String\"},\"targetBranchId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The associated target branch. If null, all branches are targeted.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"targetBranchId\",\"reqd\":false,\"type\":\"String\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"GitAutomationStateUpdateInput\"},\"GitAutomationStates\":{\"desc\":\"The Git events that can trigger an automation rule. Each value corresponds to a pull/merge request lifecycle event (e.g., branch created, PR opened for review, PR merged).\",\"fields\":{},\"kind\":\"ENUM\",\"name\":\"GitAutomationStates\",\"values\":[\"draft\",\"merge\",\"mergeable\",\"review\",\"start\"]},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "mutation GitAutomationStateUpdate($id: String!, $input: GitAutomationStateUpdateInput!) { gitAutomationStateUpdate(id: $id, input: $input) { gitAutomationState { ...GitAutomationStateFields } success } } fragment GitAutomationStateFields on GitAutomationState { archivedAt createdAt event id state { id } targetBranch { id } team { id } updatedAt }", "field": "gitAutomationStateUpdate", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }, { "from": "", "gqltype": "GitAutomationStateUpdateInput!", "name": "input" }] }, "kind": "graphql", "method": "POST", "orig": "gitAutomationStateUpdate", "segments": [], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.data.gitAutomationStateUpdate.gitAutomationState`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "git_automation_state", "name__orig": "git_automation_state", "Name": "GitAutomationState", "name_": "git_automation_state", "name-": "git-automation-state", "NAME": "GIT_AUTOMATION_STATE", "index$": 28 }, { "active": true, "entity": "git_automation_state", "key$": "BasicGitAutomationStateFlow", "kind": "basic", "name": "BasicGitAutomationStateFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "git_automation_state_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "git_automation_state_ref01", "srcdatavar": "git_automation_state_ref01_data", "suffix": "_up0", "textfield": "event" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-git_automation_state_ref01" } }], "valid": [], "index$": 1 }, { "active": true, "data": {}, "input": { "ref": "git_automation_state_ref01", "suffix": "_rm0" }, "match": { "id": "git_automation_state01" }, "op": "remove", "spec": [], "valid": [], "index$": 2 }] }, 'GitAutomationState');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const git_automation_state_ref01_ent = client.GitAutomationState();
        let git_automation_state_ref01_data = setup.data.new.git_automation_state['git_automation_state_ref01'];
        git_automation_state_ref01_data = (await git_automation_state_ref01_ent.create(git_automation_state_ref01_data)).data();
        (0, node_assert_1.default)(null != git_automation_state_ref01_data.id);
        // UPDATE
        const git_automation_state_ref01_data_up0 = {};
        git_automation_state_ref01_data_up0.id = git_automation_state_ref01_data.id;
        const git_automation_state_ref01_markdef_up0 = { name: 'event', value: 'Mark01-git_automation_state_ref01_' + setup.now };
        git_automation_state_ref01_data_up0[git_automation_state_ref01_markdef_up0.name] = git_automation_state_ref01_markdef_up0.value;
        const git_automation_state_ref01_resdata_up0 = (await git_automation_state_ref01_ent.update(git_automation_state_ref01_data_up0)).data();
        (0, node_assert_1.default)(git_automation_state_ref01_resdata_up0.id === git_automation_state_ref01_data_up0.id);
        (0, node_assert_1.default)(git_automation_state_ref01_resdata_up0[git_automation_state_ref01_markdef_up0.name] === git_automation_state_ref01_markdef_up0.value);
        // REMOVE
        const git_automation_state_ref01_match_rm0 = { id: git_automation_state_ref01_data.id };
        await git_automation_state_ref01_ent.remove(git_automation_state_ref01_match_rm0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/git_automation_state/GitAutomationStateTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['git_automation_state01', 'git_automation_state02', 'git_automation_state03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_GIT_AUTOMATION_STATE_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_GIT_AUTOMATION_STATE_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_GIT_AUTOMATION_STATE_ENTID'];
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
//# sourceMappingURL=GitAutomationStateEntity.test.js.map