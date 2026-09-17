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
(0, node_test_1.describe)('SsoUrlFromEmailResponseEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.SsoUrlFromEmailResponse();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'sso_url_from_email_response.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "samlSsoUrl", "req": true, "short": "SAML SSO sign-in URL.", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "success", "req": true, "short": "Whether the operation was successful.", "type": "`$BOOLEAN`", "index$": 1 }], "name": "sso_url_from_email_response", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "email", "orig": "email", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "is_desktop", "orig": "is_desktop", "reqd": false, "type": "`$BOOLEAN`", "index$": 1 }, { "active": true, "kind": "param", "name": "type", "orig": "type", "reqd": true, "type": "`$ANY`", "index$": 2 }] }, "contract": { "id": "POST ssoUrlFromEmail", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"email\",\"reqd\":true,\"type\":\"String\"},{\"gqltype\":\"Boolean\",\"name\":\"isDesktop\",\"reqd\":false,\"type\":\"Boolean\"},{\"gqltype\":\"IdentityProviderType!\",\"name\":\"type\",\"reqd\":true,\"type\":\"IdentityProviderType\"}],\"deprecated\":false,\"desc\":\"Fetch SSO login URL for the email provided.\",\"gqltype\":\"SsoUrlFromEmailResponse!\",\"list\":false,\"name\":\"ssoUrlFromEmail\",\"reqd\":true,\"type\":\"SsoUrlFromEmailResponse\"},\"invocation\":{\"doc\":\"query SsoUrlFromEmailResponseLoad($email: String!, $isDesktop: Boolean, $type: IdentityProviderType!) { ssoUrlFromEmail(email: $email, isDesktop: $isDesktop, type: $type) { ...SsoUrlFromEmailResponseFields } } fragment SsoUrlFromEmailResponseFields on SsoUrlFromEmailResponse { samlSsoUrl success }\",\"field\":\"ssoUrlFromEmail\",\"optype\":\"query\",\"vars\":[{\"from\":\"email\",\"gqltype\":\"String!\",\"name\":\"email\"},{\"from\":\"isDesktop\",\"gqltype\":\"Boolean\",\"name\":\"isDesktop\"},{\"from\":\"type\",\"gqltype\":\"IdentityProviderType!\",\"name\":\"type\"}]},\"protocol\":\"graphql\",\"types\":{\"Boolean\":{\"desc\":\"The `Boolean` scalar type represents `true` or `false`.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Boolean\"},\"IdentityProviderType\":{\"desc\":\"The type of identity provider.\",\"fields\":{},\"kind\":\"ENUM\",\"name\":\"IdentityProviderType\",\"values\":[\"general\",\"webForms\"]},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "query SsoUrlFromEmailResponseLoad($email: String!, $isDesktop: Boolean, $type: IdentityProviderType!) { ssoUrlFromEmail(email: $email, isDesktop: $isDesktop, type: $type) { ...SsoUrlFromEmailResponseFields } } fragment SsoUrlFromEmailResponseFields on SsoUrlFromEmailResponse { samlSsoUrl success }", "field": "ssoUrlFromEmail", "optype": "query", "vars": [{ "from": "email", "gqltype": "String!", "name": "email" }, { "from": "isDesktop", "gqltype": "Boolean", "name": "isDesktop" }, { "from": "type", "gqltype": "IdentityProviderType!", "name": "type" }] }, "kind": "graphql", "method": "POST", "orig": "ssoUrlFromEmail", "segments": [], "select": { "exist": ["email", "type"] }, "transform": { "req": "`reqdata`", "res": "`body.data.ssoUrlFromEmail`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "sso_url_from_email_response", "name__orig": "sso_url_from_email_response", "Name": "SsoUrlFromEmailResponse", "name_": "sso_url_from_email_response", "name-": "sso-url-from-email-response", "NAME": "SSO_URL_FROM_EMAIL_RESPONSE", "index$": 73 }, { "active": true, "entity": "sso_url_from_email_response", "key$": "BasicSsoUrlFromEmailResponseFlow", "kind": "basic", "name": "BasicSsoUrlFromEmailResponseFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "sso_url_from_email_response_ref01", "srcdatavar": "sso_url_from_email_response_ref01_data", "suffix": "_dt0" }, "match": { "email": "email01", "is_desktop": "is_desktop01", "type": "type01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-sso_url_from_email_response_ref01" } }], "index$": 0 }] }, 'SsoUrlFromEmailResponse');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let sso_url_from_email_response_ref01_data = Object.values(setup.data.existing.sso_url_from_email_response)[0];
        // LOAD: skipped — no entity id field and load requires path params.
        // Entity-var is declared here so later flow steps still compile.
        const sso_url_from_email_response_ref01_ent = client.SsoUrlFromEmailResponse();
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/sso_url_from_email_response/SsoUrlFromEmailResponseTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['sso_url_from_email_response01', 'sso_url_from_email_response02', 'sso_url_from_email_response03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_SSO_URL_FROM_EMAIL_RESPONSE_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_SSO_URL_FROM_EMAIL_RESPONSE_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_SSO_URL_FROM_EMAIL_RESPONSE_ENTID'];
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
//# sourceMappingURL=SsoUrlFromEmailResponseEntity.test.js.map