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
(0, node_test_1.describe)('AuthenticationSessionResponseEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.AuthenticationSessionResponse();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'authentication_session_response.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "browserType", "req": false, "short": "Used web browser.", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "client", "req": false, "short": "Client used for the session", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "countryCodes", "req": true, "short": "Country codes of all seen locations.", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "createdAt", "req": true, "short": "The time at which the entity was created.", "type": "`$ANY`", "index$": 3 }, { "active": true, "name": "detailedName", "req": true, "short": "Detailed name of the session including version information, derived from the user agent.", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "id", "req": true, "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "ip", "req": false, "short": "IP address.", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "isCurrentSession", "req": true, "short": "Whether this session is the one used to make the current API request.", "type": "`$BOOLEAN`", "index$": 7 }, { "active": true, "name": "lastActiveAt", "req": false, "short": "When was the session last seen", "type": "`$ANY`", "index$": 8 }, { "active": true, "name": "location", "req": false, "short": "Human readable location", "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "locationCity", "req": false, "short": "Location city name.", "type": "`$STRING`", "index$": 10 }, { "active": true, "name": "locationCountry", "req": false, "short": "Location country name.", "type": "`$STRING`", "index$": 11 }, { "active": true, "name": "locationCountryCode", "req": false, "short": "Location country code.", "type": "`$STRING`", "index$": 12 }, { "active": true, "name": "locationRegionCode", "req": false, "short": "Location region code.", "type": "`$STRING`", "index$": 13 }, { "active": true, "name": "name", "req": true, "short": "Name of the session, derived from the client and operating system", "type": "`$STRING`", "index$": 14 }, { "active": true, "name": "operatingSystem", "req": false, "short": "Operating system used for the session", "type": "`$STRING`", "index$": 15 }, { "active": true, "name": "service", "req": false, "short": "Service used for logging in.", "type": "`$STRING`", "index$": 16 }, { "active": true, "name": "type", "req": true, "short": "Type of application used to authenticate.", "type": "`$STRING`", "index$": 17 }, { "active": true, "name": "updatedAt", "req": true, "short": "Date when the session was last updated.", "type": "`$ANY`", "index$": 18 }, { "active": true, "name": "userAgent", "req": false, "short": "Session's user-agent.", "type": "`$STRING`", "index$": 19 }], "id": { "field": "id", "name": "id" }, "name": "authentication_session_response", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST userSessions", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"Lists all active authentication sessions for a user. Can only be called by a workspace admin or owner.\",\"gqltype\":\"[AuthenticationSessionResponse!]!\",\"list\":true,\"name\":\"userSessions\",\"reqd\":true,\"type\":\"AuthenticationSessionResponse\"},\"invocation\":{\"doc\":\"query AuthenticationSessionResponseList($id: String!) { userSessions(id: $id) { ...AuthenticationSessionResponseFields } } fragment AuthenticationSessionResponseFields on AuthenticationSessionResponse { browserType client countryCodes createdAt detailedName id ip isCurrentSession lastActiveAt location locationCity locationCountry locationCountryCode locationRegionCode name operatingSystem service type updatedAt userAgent }\",\"field\":\"userSessions\",\"optype\":\"query\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "query AuthenticationSessionResponseList($id: String!) { userSessions(id: $id) { ...AuthenticationSessionResponseFields } } fragment AuthenticationSessionResponseFields on AuthenticationSessionResponse { browserType client countryCodes createdAt detailedName id ip isCurrentSession lastActiveAt location locationCity locationCountry locationCountryCode locationRegionCode name operatingSystem service type updatedAt userAgent }", "field": "userSessions", "optype": "query", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "kind": "graphql", "method": "POST", "orig": "userSessions", "segments": [], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.data.userSessions`" }, "index$": 0 }, { "active": true, "args": {}, "contract": { "id": "POST authenticationSessions", "json": "{\"field\":{\"args\":[],\"deprecated\":false,\"desc\":\"User's active sessions.\",\"gqltype\":\"[AuthenticationSessionResponse!]!\",\"list\":true,\"name\":\"authenticationSessions\",\"reqd\":true,\"type\":\"AuthenticationSessionResponse\"},\"invocation\":{\"doc\":\"query AuthenticationSessionResponseList { authenticationSessions { ...AuthenticationSessionResponseFields } } fragment AuthenticationSessionResponseFields on AuthenticationSessionResponse { browserType client countryCodes createdAt detailedName id ip isCurrentSession lastActiveAt location locationCity locationCountry locationCountryCode locationRegionCode name operatingSystem service type updatedAt userAgent }\",\"field\":\"authenticationSessions\",\"optype\":\"query\",\"vars\":[]},\"protocol\":\"graphql\",\"types\":{},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "query AuthenticationSessionResponseList { authenticationSessions { ...AuthenticationSessionResponseFields } } fragment AuthenticationSessionResponseFields on AuthenticationSessionResponse { browserType client countryCodes createdAt detailedName id ip isCurrentSession lastActiveAt location locationCity locationCountry locationCountryCode locationRegionCode name operatingSystem service type updatedAt userAgent }", "field": "authenticationSessions", "optype": "query", "vars": [] }, "kind": "graphql", "method": "POST", "orig": "authenticationSessions", "segments": [], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.data.authenticationSessions`" }, "index$": 1 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "authentication_session_response", "name__orig": "authentication_session_response", "Name": "AuthenticationSessionResponse", "name_": "authentication_session_response", "name-": "authentication-session-response", "NAME": "AUTHENTICATION_SESSION_RESPONSE", "index$": 10 }, { "active": true, "entity": "authentication_session_response", "key$": "BasicAuthenticationSessionResponseFlow", "kind": "basic", "name": "BasicAuthenticationSessionResponseFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "authentication_session_response_ref01" } }], "index$": 0 }] }, 'AuthenticationSessionResponse');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let authentication_session_response_ref01_data = Object.values(setup.data.existing.authentication_session_response)[0];
        // LIST
        const authentication_session_response_ref01_ent = client.AuthenticationSessionResponse();
        const authentication_session_response_ref01_match = {};
        const authentication_session_response_ref01_list = (await authentication_session_response_ref01_ent.list(authentication_session_response_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/authentication_session_response/AuthenticationSessionResponseTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['authentication_session_response01', 'authentication_session_response02', 'authentication_session_response03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_AUTHENTICATION_SESSION_RESPONSE_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_AUTHENTICATION_SESSION_RESPONSE_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_AUTHENTICATION_SESSION_RESPONSE_ENTID'];
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
//# sourceMappingURL=AuthenticationSessionResponseEntity.test.js.map