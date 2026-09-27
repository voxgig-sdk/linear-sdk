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
(0, node_test_1.describe)('GitAutomationTargetBranchEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.GitAutomationTargetBranch();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['create', 'update', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'git_automation_target_branch.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "archivedAt": { "a": true, "h": "Archived At", "n": "archivedAt", "r": false, "sh": "The time at which the entity was archived.", "t": "`$ANY`", "key$": "archivedAt", "index$": 0 }, "branchPattern": { "a": true, "h": "Branch Pattern", "n": "branchPattern", "r": true, "sh": "The branch name or pattern to match against pull request target branches.", "t": "`$STRING`", "key$": "branchPattern", "index$": 1 }, "createdAt": { "a": true, "h": "Created At", "n": "createdAt", "r": true, "sh": "The time at which the entity was created.", "t": "`$ANY`", "key$": "createdAt", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The unique identifier of the entity.", "t": "`$STRING`", "key$": "id", "index$": 3 }, "isRegex": { "a": true, "h": "Is Regex", "n": "isRegex", "r": true, "sh": "Whether the branch pattern should be interpreted as a regular expression.", "t": "`$BOOLEAN`", "key$": "isRegex", "index$": 4 }, "team": { "a": true, "h": "Team", "n": "team", "r": false, "sh": "The team that this target branch definition belongs to.", "t": "`$OBJECT`", "key$": "team", "index$": 5 }, "updatedAt": { "a": true, "h": "Updated At", "n": "updatedAt", "r": true, "sh": "The last time at which the entity was meaningfully updated.", "t": "`$ANY`", "key$": "updatedAt", "index$": 6 } }, "id": { "field": "id", "name": "id" }, "name": "git_automation_target_branch", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST gitAutomationTargetBranchCreate", "source": "graphql", "version": 2 }, "g": {}, "gq": { "doc": "mutation GitAutomationTargetBranchCreate($input: GitAutomationTargetBranchCreateInput!) { gitAutomationTargetBranchCreate(input: $input) { targetBranch { ...GitAutomationTargetBranchFields } success } } fragment GitAutomationTargetBranchFields on GitAutomationTargetBranch { archivedAt branchPattern createdAt id isRegex team { id } updatedAt }", "field": "gitAutomationTargetBranchCreate", "optype": "mutation", "vars": [{ "from": "", "gqltype": "GitAutomationTargetBranchCreateInput!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "gitAutomationTargetBranchCreate", "q": {}, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.gitAutomationTargetBranchCreate.targetBranch`" }, "index$": 0 }], "key$": "create" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "POST gitAutomationTargetBranchDelete", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation GitAutomationTargetBranchRemove($id: String!) { gitAutomationTargetBranchDelete(id: $id) { entityId lastSyncId success } }", "field": "gitAutomationTargetBranchDelete", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "gitAutomationTargetBranchDelete", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.gitAutomationTargetBranchDelete`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "POST gitAutomationTargetBranchUpdate", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation GitAutomationTargetBranchUpdate($id: String!, $input: GitAutomationTargetBranchUpdateInput!) { gitAutomationTargetBranchUpdate(id: $id, input: $input) { targetBranch { ...GitAutomationTargetBranchFields } success } } fragment GitAutomationTargetBranchFields on GitAutomationTargetBranch { archivedAt branchPattern createdAt id isRegex team { id } updatedAt }", "field": "gitAutomationTargetBranchUpdate", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }, { "from": "", "gqltype": "GitAutomationTargetBranchUpdateInput!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "gitAutomationTargetBranchUpdate", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.gitAutomationTargetBranchUpdate.targetBranch`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "git_automation_target_branch", "name__orig": "git_automation_target_branch", "Name": "GitAutomationTargetBranch", "name_": "git_automation_target_branch", "name-": "git-automation-target-branch", "NAME": "GIT_AUTOMATION_TARGET_BRANCH", "index$": 29 }, { "active": true, "entity": "git_automation_target_branch", "key$": "BasicGitAutomationTargetBranchFlow", "kind": "basic", "name": "BasicGitAutomationTargetBranchFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "git_automation_target_branch_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "git_automation_target_branch_ref01", "srcdatavar": "git_automation_target_branch_ref01_data", "suffix": "_up0", "textfield": "branchPattern" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-git_automation_target_branch_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "git_automation_target_branch_ref01", "suffix": "_rm0" }, "m": { "id": "git_automation_target_branch01" }, "o": "remove", "s": [], "v": [], "index$": 2 }] }, 'GitAutomationTargetBranch', { "POST gitAutomationTargetBranchCreate": { "protocol": "graphql" }, "POST gitAutomationTargetBranchDelete": { "protocol": "graphql" }, "POST gitAutomationTargetBranchUpdate": { "protocol": "graphql" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const git_automation_target_branch_ref01_ent = client.GitAutomationTargetBranch();
        let git_automation_target_branch_ref01_data = setup.data.new.git_automation_target_branch['git_automation_target_branch_ref01'];
        git_automation_target_branch_ref01_data = (await git_automation_target_branch_ref01_ent.create(git_automation_target_branch_ref01_data)).data();
        (0, node_assert_1.default)(null != git_automation_target_branch_ref01_data.id);
        // UPDATE
        const git_automation_target_branch_ref01_data_up0 = {};
        git_automation_target_branch_ref01_data_up0.id = git_automation_target_branch_ref01_data.id;
        const git_automation_target_branch_ref01_markdef_up0 = { name: 'branchPattern', value: 'Mark01-git_automation_target_branch_ref01_' + setup.now };
        git_automation_target_branch_ref01_data_up0[git_automation_target_branch_ref01_markdef_up0.name] = git_automation_target_branch_ref01_markdef_up0.value;
        const git_automation_target_branch_ref01_resdata_up0 = (await git_automation_target_branch_ref01_ent.update(git_automation_target_branch_ref01_data_up0)).data();
        (0, node_assert_1.default)(git_automation_target_branch_ref01_resdata_up0.id === git_automation_target_branch_ref01_data_up0.id);
        (0, node_assert_1.default)(git_automation_target_branch_ref01_resdata_up0[git_automation_target_branch_ref01_markdef_up0.name] === git_automation_target_branch_ref01_markdef_up0.value);
        // REMOVE
        const git_automation_target_branch_ref01_match_rm0 = { id: git_automation_target_branch_ref01_data.id };
        await git_automation_target_branch_ref01_ent.remove(git_automation_target_branch_ref01_match_rm0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/git_automation_target_branch/GitAutomationTargetBranchTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['git_automation_target_branch01', 'git_automation_target_branch02', 'git_automation_target_branch03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_GIT_AUTOMATION_TARGET_BRANCH_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_GIT_AUTOMATION_TARGET_BRANCH_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_GIT_AUTOMATION_TARGET_BRANCH_ENTID'];
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
//# sourceMappingURL=GitAutomationTargetBranchEntity.test.js.map