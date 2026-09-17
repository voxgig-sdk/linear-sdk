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
(0, node_test_1.describe)('AuthResolverResponseEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.AuthResolverResponse();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['create', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'auth_resolver_response.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "allowDomainAccess", "req": false, "short": "Should the signup flow allow access for the domain.", "type": "`$BOOLEAN`", "index$": 0 }, { "active": true, "name": "email", "req": true, "short": "Email for the authenticated account.", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "id", "req": true, "short": "User account ID.", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "lastUsedOrganizationId", "req": false, "short": "ID of the organization last accessed by the user.", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "service", "req": false, "short": "The authentication service used for the current session (e.g., google, email, saml).", "type": "`$STRING`", "index$": 4 }], "id": { "field": "id", "name": "id" }, "name": "auth_resolver_response", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": {}, "contract": { "id": "POST emailTokenUserAccountAuth", "json": "{\"field\":{\"args\":[{\"gqltype\":\"TokenUserAccountAuthInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"TokenUserAccountAuthInput\"}],\"deprecated\":false,\"desc\":\"Authenticates a user account via email and authentication token.\",\"gqltype\":\"AuthResolverResponse!\",\"list\":false,\"name\":\"emailTokenUserAccountAuth\",\"reqd\":true,\"type\":\"AuthResolverResponse\"},\"invocation\":{\"doc\":\"mutation AuthResolverResponseCreateEmailTokenUserAccountAuth($input: TokenUserAccountAuthInput!) { emailTokenUserAccountAuth(input: $input) { ...AuthResolverResponseFields } } fragment AuthResolverResponseFields on AuthResolverResponse { allowDomainAccess email id lastUsedOrganizationId service }\",\"field\":\"emailTokenUserAccountAuth\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"\",\"gqltype\":\"TokenUserAccountAuthInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"},\"TokenUserAccountAuthInput\":{\"fields\":{\"clientAuthCode\":{\"args\":[],\"deprecated\":false,\"desc\":\"Auth code for the client initiating the login sequence.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"clientAuthCode\",\"reqd\":false,\"type\":\"String\"},\"email\":{\"args\":[],\"deprecated\":false,\"desc\":\"The email which to login via the magic login code.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"email\",\"reqd\":true,\"type\":\"String\"},\"inviteLink\":{\"args\":[],\"deprecated\":false,\"desc\":\"An optional invite link for a workspace.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"inviteLink\",\"reqd\":false,\"type\":\"String\"},\"timezone\":{\"args\":[],\"deprecated\":false,\"desc\":\"The timezone of the user's browser.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"timezone\",\"reqd\":true,\"type\":\"String\"},\"token\":{\"args\":[],\"deprecated\":false,\"desc\":\"The magic login code.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"token\",\"reqd\":true,\"type\":\"String\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"TokenUserAccountAuthInput\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "mutation AuthResolverResponseCreateEmailTokenUserAccountAuth($input: TokenUserAccountAuthInput!) { emailTokenUserAccountAuth(input: $input) { ...AuthResolverResponseFields } } fragment AuthResolverResponseFields on AuthResolverResponse { allowDomainAccess email id lastUsedOrganizationId service }", "field": "emailTokenUserAccountAuth", "optype": "mutation", "vars": [{ "from": "", "gqltype": "TokenUserAccountAuthInput!", "name": "input" }] }, "kind": "graphql", "method": "POST", "orig": "emailTokenUserAccountAuth", "segments": [], "select": { "$action": "email_token_user_account_auth" }, "transform": { "req": "`reqdata`", "res": "`body.data.emailTokenUserAccountAuth`" }, "index$": 0 }, { "active": true, "args": {}, "contract": { "id": "POST googleUserAccountAuth", "json": "{\"field\":{\"args\":[{\"gqltype\":\"GoogleUserAccountAuthInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"GoogleUserAccountAuthInput\"}],\"deprecated\":false,\"desc\":\"Authenticate user account through Google OAuth. This is the 2nd step of OAuth flow.\",\"gqltype\":\"AuthResolverResponse!\",\"list\":false,\"name\":\"googleUserAccountAuth\",\"reqd\":true,\"type\":\"AuthResolverResponse\"},\"invocation\":{\"doc\":\"mutation AuthResolverResponseCreateGoogleUserAccountAuth($input: GoogleUserAccountAuthInput!) { googleUserAccountAuth(input: $input) { ...AuthResolverResponseFields } } fragment AuthResolverResponseFields on AuthResolverResponse { allowDomainAccess email id lastUsedOrganizationId service }\",\"field\":\"googleUserAccountAuth\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"\",\"gqltype\":\"GoogleUserAccountAuthInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"Boolean\":{\"desc\":\"The `Boolean` scalar type represents `true` or `false`.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Boolean\"},\"GoogleUserAccountAuthInput\":{\"fields\":{\"code\":{\"args\":[],\"deprecated\":false,\"desc\":\"Code returned from Google's OAuth flow.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"code\",\"reqd\":true,\"type\":\"String\"},\"disallowSignup\":{\"args\":[],\"deprecated\":false,\"desc\":\"An optional parameter to disable new user signup and force login. Default: false.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"disallowSignup\",\"reqd\":false,\"type\":\"Boolean\"},\"inviteLink\":{\"args\":[],\"deprecated\":false,\"desc\":\"An optional invite link for a workspace used to populate available workspaces.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"inviteLink\",\"reqd\":false,\"type\":\"String\"},\"redirectUri\":{\"args\":[],\"deprecated\":false,\"desc\":\"The URI to redirect the user to.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"redirectUri\",\"reqd\":false,\"type\":\"String\"},\"sessionId\":{\"args\":[],\"deprecated\":false,\"desc\":\"PostHog session ID for attribution tracking.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"sessionId\",\"reqd\":false,\"type\":\"String\"},\"timezone\":{\"args\":[],\"deprecated\":false,\"desc\":\"The timezone of the user's browser.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"timezone\",\"reqd\":true,\"type\":\"String\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"GoogleUserAccountAuthInput\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "mutation AuthResolverResponseCreateGoogleUserAccountAuth($input: GoogleUserAccountAuthInput!) { googleUserAccountAuth(input: $input) { ...AuthResolverResponseFields } } fragment AuthResolverResponseFields on AuthResolverResponse { allowDomainAccess email id lastUsedOrganizationId service }", "field": "googleUserAccountAuth", "optype": "mutation", "vars": [{ "from": "", "gqltype": "GoogleUserAccountAuthInput!", "name": "input" }] }, "kind": "graphql", "method": "POST", "orig": "googleUserAccountAuth", "segments": [], "select": { "$action": "google_user_account_auth" }, "transform": { "req": "`reqdata`", "res": "`body.data.googleUserAccountAuth`" }, "index$": 1 }, { "active": true, "args": {}, "contract": { "id": "POST samlTokenUserAccountAuth", "json": "{\"field\":{\"args\":[{\"gqltype\":\"TokenUserAccountAuthInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"TokenUserAccountAuthInput\"}],\"deprecated\":false,\"desc\":\"Authenticates a user account via email and authentication token for SAML.\",\"gqltype\":\"AuthResolverResponse!\",\"list\":false,\"name\":\"samlTokenUserAccountAuth\",\"reqd\":true,\"type\":\"AuthResolverResponse\"},\"invocation\":{\"doc\":\"mutation AuthResolverResponseCreateSamlTokenUserAccountAuth($input: TokenUserAccountAuthInput!) { samlTokenUserAccountAuth(input: $input) { ...AuthResolverResponseFields } } fragment AuthResolverResponseFields on AuthResolverResponse { allowDomainAccess email id lastUsedOrganizationId service }\",\"field\":\"samlTokenUserAccountAuth\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"\",\"gqltype\":\"TokenUserAccountAuthInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"},\"TokenUserAccountAuthInput\":{\"fields\":{\"clientAuthCode\":{\"args\":[],\"deprecated\":false,\"desc\":\"Auth code for the client initiating the login sequence.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"clientAuthCode\",\"reqd\":false,\"type\":\"String\"},\"email\":{\"args\":[],\"deprecated\":false,\"desc\":\"The email which to login via the magic login code.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"email\",\"reqd\":true,\"type\":\"String\"},\"inviteLink\":{\"args\":[],\"deprecated\":false,\"desc\":\"An optional invite link for a workspace.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"inviteLink\",\"reqd\":false,\"type\":\"String\"},\"timezone\":{\"args\":[],\"deprecated\":false,\"desc\":\"The timezone of the user's browser.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"timezone\",\"reqd\":true,\"type\":\"String\"},\"token\":{\"args\":[],\"deprecated\":false,\"desc\":\"The magic login code.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"token\",\"reqd\":true,\"type\":\"String\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"TokenUserAccountAuthInput\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "mutation AuthResolverResponseCreateSamlTokenUserAccountAuth($input: TokenUserAccountAuthInput!) { samlTokenUserAccountAuth(input: $input) { ...AuthResolverResponseFields } } fragment AuthResolverResponseFields on AuthResolverResponse { allowDomainAccess email id lastUsedOrganizationId service }", "field": "samlTokenUserAccountAuth", "optype": "mutation", "vars": [{ "from": "", "gqltype": "TokenUserAccountAuthInput!", "name": "input" }] }, "kind": "graphql", "method": "POST", "orig": "samlTokenUserAccountAuth", "segments": [], "select": { "$action": "saml_token_user_account_auth" }, "transform": { "req": "`reqdata`", "res": "`body.data.samlTokenUserAccountAuth`" }, "index$": 2 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": {}, "contract": { "id": "POST availableUsers", "json": "{\"field\":{\"args\":[],\"deprecated\":false,\"desc\":\"Fetch users belonging to this user account.\",\"gqltype\":\"AuthResolverResponse!\",\"list\":false,\"name\":\"availableUsers\",\"reqd\":true,\"type\":\"AuthResolverResponse\"},\"invocation\":{\"doc\":\"query AuthResolverResponseLoad { availableUsers { ...AuthResolverResponseFields } } fragment AuthResolverResponseFields on AuthResolverResponse { allowDomainAccess email id lastUsedOrganizationId service }\",\"field\":\"availableUsers\",\"optype\":\"query\",\"vars\":[]},\"protocol\":\"graphql\",\"types\":{},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "query AuthResolverResponseLoad { availableUsers { ...AuthResolverResponseFields } } fragment AuthResolverResponseFields on AuthResolverResponse { allowDomainAccess email id lastUsedOrganizationId service }", "field": "availableUsers", "optype": "query", "vars": [] }, "kind": "graphql", "method": "POST", "orig": "availableUsers", "segments": [], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.data.availableUsers`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "auth_id", "orig": "auth_id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "response", "orig": "response", "reqd": true, "type": "`$ANY`", "index$": 1 }] }, "contract": { "id": "POST passkeyLoginFinish", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"authId\",\"reqd\":true,\"type\":\"String\"},{\"gqltype\":\"JSONObject!\",\"name\":\"response\",\"reqd\":true,\"type\":\"JSONObject\"}],\"deprecated\":false,\"desc\":\"[INTERNAL] Finish passkey login process.\",\"gqltype\":\"AuthResolverResponse!\",\"list\":false,\"name\":\"passkeyLoginFinish\",\"reqd\":true,\"type\":\"AuthResolverResponse\"},\"invocation\":{\"doc\":\"mutation AuthResolverResponseUpdatePasskeyLoginFinish($authId: String!, $response: JSONObject!) { passkeyLoginFinish(authId: $authId, response: $response) { ...AuthResolverResponseFields } } fragment AuthResolverResponseFields on AuthResolverResponse { allowDomainAccess email id lastUsedOrganizationId service }\",\"field\":\"passkeyLoginFinish\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"authId\",\"gqltype\":\"String!\",\"name\":\"authId\"},{\"from\":\"response\",\"gqltype\":\"JSONObject!\",\"name\":\"response\"}]},\"protocol\":\"graphql\",\"types\":{\"JSONObject\":{\"desc\":\"The `JSONObject` scalar type represents arbitrary values as *embedded* JSON\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"JSONObject\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "mutation AuthResolverResponseUpdatePasskeyLoginFinish($authId: String!, $response: JSONObject!) { passkeyLoginFinish(authId: $authId, response: $response) { ...AuthResolverResponseFields } } fragment AuthResolverResponseFields on AuthResolverResponse { allowDomainAccess email id lastUsedOrganizationId service }", "field": "passkeyLoginFinish", "optype": "mutation", "vars": [{ "from": "authId", "gqltype": "String!", "name": "authId" }, { "from": "response", "gqltype": "JSONObject!", "name": "response" }] }, "kind": "graphql", "method": "POST", "orig": "passkeyLoginFinish", "segments": [], "select": { "$action": "passkey_login_finish", "exist": ["auth_id", "response"] }, "transform": { "req": "`reqdata`", "res": "`body.data.passkeyLoginFinish`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "auth_resolver_response", "name__orig": "auth_resolver_response", "Name": "AuthResolverResponse", "name_": "auth_resolver_response", "name-": "auth-resolver-response", "NAME": "AUTH_RESOLVER_RESPONSE", "index$": 9 }, { "active": true, "entity": "auth_resolver_response", "key$": "BasicAuthResolverResponseFlow", "kind": "basic", "name": "BasicAuthResolverResponseFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "auth_resolver_response_ref01" }, "match": { "auth_id": "auth01", "response": "response01" }, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": { "auth_id": "auth01", "response": "response01" }, "input": { "ref": "auth_resolver_response_ref01", "srcdatavar": "auth_resolver_response_ref01_data", "suffix": "_up0", "textfield": "email" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-auth_resolver_response_ref01" } }], "valid": [], "index$": 1 }, { "active": true, "data": {}, "input": { "ref": "auth_resolver_response_ref01", "srcdatavar": "auth_resolver_response_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-auth_resolver_response_ref01" } }], "index$": 2 }] }, 'AuthResolverResponse');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const auth_resolver_response_ref01_ent = client.AuthResolverResponse();
        let auth_resolver_response_ref01_data = setup.data.new.auth_resolver_response['auth_resolver_response_ref01'];
        auth_resolver_response_ref01_data['auth_id'] = setup.idmap['auth01'];
        auth_resolver_response_ref01_data['response'] = setup.idmap['response01'];
        auth_resolver_response_ref01_data = (await auth_resolver_response_ref01_ent.create(auth_resolver_response_ref01_data)).data();
        (0, node_assert_1.default)(null != auth_resolver_response_ref01_data.id);
        // UPDATE
        const auth_resolver_response_ref01_data_up0 = {};
        auth_resolver_response_ref01_data_up0.id = auth_resolver_response_ref01_data.id;
        auth_resolver_response_ref01_data_up0['auth_id'] = setup.idmap['auth_id'];
        auth_resolver_response_ref01_data_up0['response'] = setup.idmap['response'];
        const auth_resolver_response_ref01_markdef_up0 = { name: 'email', value: 'Mark01-auth_resolver_response_ref01_' + setup.now };
        auth_resolver_response_ref01_data_up0[auth_resolver_response_ref01_markdef_up0.name] = auth_resolver_response_ref01_markdef_up0.value;
        const auth_resolver_response_ref01_resdata_up0 = (await auth_resolver_response_ref01_ent.update(auth_resolver_response_ref01_data_up0)).data();
        (0, node_assert_1.default)(auth_resolver_response_ref01_resdata_up0.id === auth_resolver_response_ref01_data_up0.id);
        (0, node_assert_1.default)(auth_resolver_response_ref01_resdata_up0[auth_resolver_response_ref01_markdef_up0.name] === auth_resolver_response_ref01_markdef_up0.value);
        // LOAD
        const auth_resolver_response_ref01_match_dt0 = {};
        auth_resolver_response_ref01_match_dt0.id = auth_resolver_response_ref01_data.id;
        const auth_resolver_response_ref01_data_dt0 = (await auth_resolver_response_ref01_ent.load(auth_resolver_response_ref01_match_dt0)).data();
        (0, node_assert_1.default)(auth_resolver_response_ref01_data_dt0.id === auth_resolver_response_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/auth_resolver_response/AuthResolverResponseTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['auth_resolver_response01', 'auth_resolver_response02', 'auth_resolver_response03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_AUTH_RESOLVER_RESPONSE_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_AUTH_RESOLVER_RESPONSE_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_AUTH_RESOLVER_RESPONSE_ENTID'];
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
//# sourceMappingURL=AuthResolverResponseEntity.test.js.map