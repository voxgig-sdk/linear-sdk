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
(0, node_test_1.describe)('EmailUserAccountAuthChallengeResponseEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.EmailUserAccountAuthChallengeResponse();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'email_user_account_auth_challenge_response.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "authType": { "a": true, "h": "Auth Type", "n": "authType", "r": true, "sh": "Supported challenge for this user account.", "t": "`$STRING`", "key$": "authType", "index$": 0 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "sh": "Whether the operation was successful.", "t": "`$BOOLEAN`", "key$": "success", "index$": 1 } }, "name": "email_user_account_auth_challenge_response", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST emailUserAccountAuthChallenge", "source": "graphql", "version": 2 }, "g": {}, "gq": { "doc": "mutation EmailUserAccountAuthChallengeResponseCreateEmailUserAccountAuthChallenge($input: EmailUserAccountAuthChallengeInput!) { emailUserAccountAuthChallenge(input: $input) { ...EmailUserAccountAuthChallengeResponseFields } } fragment EmailUserAccountAuthChallengeResponseFields on EmailUserAccountAuthChallengeResponse { authType success }", "field": "emailUserAccountAuthChallenge", "optype": "mutation", "vars": [{ "from": "", "gqltype": "EmailUserAccountAuthChallengeInput!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "emailUserAccountAuthChallenge", "q": { "$action": "email_user_account_auth_challenge" }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.emailUserAccountAuthChallenge`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "email_user_account_auth_challenge_response", "name__orig": "email_user_account_auth_challenge_response", "Name": "EmailUserAccountAuthChallengeResponse", "name_": "email_user_account_auth_challenge_response", "name-": "email-user-account-auth-challenge-response", "NAME": "EMAIL_USER_ACCOUNT_AUTH_CHALLENGE_RESPONSE", "index$": 23 }, { "active": true, "entity": "email_user_account_auth_challenge_response", "key$": "BasicEmailUserAccountAuthChallengeResponseFlow", "kind": "basic", "name": "BasicEmailUserAccountAuthChallengeResponseFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "email_user_account_auth_challenge_response_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'EmailUserAccountAuthChallengeResponse', { "POST emailUserAccountAuthChallenge": { "protocol": "graphql" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const email_user_account_auth_challenge_response_ref01_ent = client.EmailUserAccountAuthChallengeResponse();
        let email_user_account_auth_challenge_response_ref01_data = setup.data.new.email_user_account_auth_challenge_response['email_user_account_auth_challenge_response_ref01'];
        email_user_account_auth_challenge_response_ref01_data = (await email_user_account_auth_challenge_response_ref01_ent.create(email_user_account_auth_challenge_response_ref01_data)).data();
        (0, node_assert_1.default)(null != email_user_account_auth_challenge_response_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/email_user_account_auth_challenge_response/EmailUserAccountAuthChallengeResponseTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['email_user_account_auth_challenge_response01', 'email_user_account_auth_challenge_response02', 'email_user_account_auth_challenge_response03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_EMAIL_USER_ACCOUNT_AUTH_CHALLENGE_RESPONSE_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_EMAIL_USER_ACCOUNT_AUTH_CHALLENGE_RESPONSE_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_EMAIL_USER_ACCOUNT_AUTH_CHALLENGE_RESPONSE_ENTID'];
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
//# sourceMappingURL=EmailUserAccountAuthChallengeResponseEntity.test.js.map