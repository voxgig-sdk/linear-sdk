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
(0, node_test_1.describe)('OAuthApplicationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.OAuthApplication();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'o_auth_application.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "clientId", "req": true, "short": "The client ID used during OAuth authorization flows.", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "createdAt", "req": true, "short": "The time at which the OAuth application was created.", "type": "`$ANY`", "index$": 1 }, { "active": true, "name": "description", "req": false, "short": "User-facing description of the OAuth application.", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "developer", "req": true, "short": "Name of the developer or company that built the OAuth application.", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "developerUrl", "req": true, "short": "URL of the developer's website, homepage, or documentation.", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "distribution", "req": true, "short": "Distribution setting for the OAuth application.", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "grantTypes", "req": true, "short": "OAuth grant types supported by this application.", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "id", "req": true, "short": "The unique identifier of the OAuth application.", "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "imageUrl", "req": false, "short": "URL of the OAuth application's icon.", "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "name", "req": true, "short": "The human-readable name of the OAuth application.", "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "redirectUris", "req": true, "short": "Allowed redirect URIs for OAuth authorization flows.", "type": "`$STRING`", "index$": 10 }, { "active": true, "name": "updatedAt", "req": true, "short": "The time at which the OAuth application was last updated.", "type": "`$ANY`", "index$": 11 }, { "active": true, "name": "webhookEnabled", "req": true, "short": "Whether webhook delivery is enabled for this OAuth application.", "type": "`$BOOLEAN`", "index$": 12 }, { "active": true, "name": "webhookResourceTypes", "req": true, "short": "Resource types the OAuth application's webhooks subscribe to.", "type": "`$STRING`", "index$": 13 }, { "active": true, "name": "webhookUrl", "req": false, "short": "Webhook URL used for delivering webhook payloads.", "type": "`$STRING`", "index$": 14 }], "id": { "field": "id", "name": "id" }, "name": "o_auth_application", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": {}, "contract": { "id": "POST oauthApplicationCreate", "json": "{\"field\":{\"args\":[{\"gqltype\":\"OAuthApplicationCreateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"OAuthApplicationCreateInput\"}],\"deprecated\":false,\"desc\":\"[ALPHA] Creates an OAuth application owned by the calling OAuth application.\",\"gqltype\":\"OAuthApplicationCreatePayload!\",\"list\":false,\"name\":\"oauthApplicationCreate\",\"reqd\":true,\"type\":\"OAuthApplicationCreatePayload\"},\"invocation\":{\"doc\":\"mutation OAuthApplicationCreate($input: OAuthApplicationCreateInput!) { oauthApplicationCreate(input: $input) { application { ...OAuthApplicationFields } success } } fragment OAuthApplicationFields on OAuthApplication { clientId createdAt description developer developerUrl distribution grantTypes id imageUrl name redirectUris updatedAt webhookEnabled webhookResourceTypes webhookUrl }\",\"field\":\"oauthApplicationCreate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"\",\"gqltype\":\"OAuthApplicationCreateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"OAuthApplicationCreateInput\":{\"desc\":\"Input for creating an OAuth application through the public API.\",\"fields\":{\"description\":{\"args\":[],\"deprecated\":false,\"desc\":\"User-facing description of the OAuth application.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"description\",\"reqd\":false,\"type\":\"String\"},\"developer\":{\"args\":[],\"deprecated\":false,\"desc\":\"Name of the developer or company that built the OAuth application.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"developer\",\"reqd\":true,\"type\":\"String\"},\"developerUrl\":{\"args\":[],\"deprecated\":false,\"desc\":\"URL of the developer's website, homepage, or documentation.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"developerUrl\",\"reqd\":false,\"type\":\"String\"},\"grantTypes\":{\"args\":[],\"deprecated\":false,\"desc\":\"OAuth grant capabilities the app may use. authorization_code is required. Defaults to authorization_code.\",\"gqltype\":\"[OAuthApplicationGrantType!]\",\"list\":true,\"name\":\"grantTypes\",\"reqd\":false,\"type\":\"OAuthApplicationGrantType\"},\"idempotencyKey\":{\"args\":[],\"deprecated\":false,\"desc\":\"Optional client-supplied idempotency key. Reusing the same key with the same managing OAuth application returns the existing OAuth application instead of creating a duplicate. The key does not apply to archived applications.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"idempotencyKey\",\"reqd\":false,\"type\":\"String\"},\"imageUrl\":{\"args\":[],\"deprecated\":false,\"desc\":\"URL of the OAuth application's icon.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"imageUrl\",\"reqd\":false,\"type\":\"String\"},\"name\":{\"args\":[],\"deprecated\":false,\"desc\":\"The OAuth application's name.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"name\",\"reqd\":true,\"type\":\"String\"},\"redirectUris\":{\"args\":[],\"deprecated\":false,\"desc\":\"Allowed redirect URIs for OAuth authorization flows.\",\"gqltype\":\"[String!]!\",\"list\":true,\"name\":\"redirectUris\",\"reqd\":true,\"type\":\"String\"},\"webhookResourceTypes\":{\"args\":[],\"deprecated\":false,\"desc\":\"Resource types the OAuth application's webhooks subscribe to.\",\"gqltype\":\"[WebhookResourceType!]\",\"list\":true,\"name\":\"webhookResourceTypes\",\"reqd\":false,\"type\":\"WebhookResourceType\"},\"webhookUrl\":{\"args\":[],\"deprecated\":false,\"desc\":\"Webhook URL used for delivering webhook payloads.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"webhookUrl\",\"reqd\":false,\"type\":\"String\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"OAuthApplicationCreateInput\"},\"OAuthApplicationGrantType\":{\"desc\":\"OAuth grant type supported by an OAuth application.\",\"fields\":{},\"kind\":\"ENUM\",\"name\":\"OAuthApplicationGrantType\",\"values\":[\"authorization_code\",\"client_credentials\"]},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"},\"WebhookResourceType\":{\"desc\":\"A webhook event stream resource type that an OAuth application can subscribe to.\",\"fields\":{},\"kind\":\"ENUM\",\"name\":\"WebhookResourceType\",\"values\":[\"AgentSessionEvent\",\"AppUserNotification\",\"Attachment\",\"Comment\",\"Customer\",\"CustomerNeed\",\"Cycle\",\"Document\",\"Initiative\",\"InitiativeUpdate\",\"Issue\",\"IssueLabel\",\"IssueSLA\",\"OAuthAuthorization\",\"PermissionChange\",\"Project\",\"ProjectLabel\",\"ProjectUpdate\",\"Reaction\",\"Release\",\"ReleaseNote\",\"User\"]}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "mutation OAuthApplicationCreate($input: OAuthApplicationCreateInput!) { oauthApplicationCreate(input: $input) { application { ...OAuthApplicationFields } success } } fragment OAuthApplicationFields on OAuthApplication { clientId createdAt description developer developerUrl distribution grantTypes id imageUrl name redirectUris updatedAt webhookEnabled webhookResourceTypes webhookUrl }", "field": "oauthApplicationCreate", "optype": "mutation", "vars": [{ "from": "", "gqltype": "OAuthApplicationCreateInput!", "name": "input" }] }, "kind": "graphql", "method": "POST", "orig": "oauthApplicationCreate", "segments": [], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.data.oauthApplicationCreate.application`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": {}, "contract": { "id": "POST oauthApplications", "json": "{\"field\":{\"args\":[],\"deprecated\":false,\"desc\":\"[ALPHA] OAuth applications created by the calling OAuth application through the public API.\",\"gqltype\":\"[OAuthApplication!]!\",\"list\":true,\"name\":\"oauthApplications\",\"reqd\":true,\"type\":\"OAuthApplication\"},\"invocation\":{\"doc\":\"query OAuthApplicationList { oauthApplications { ...OAuthApplicationFields } } fragment OAuthApplicationFields on OAuthApplication { clientId createdAt description developer developerUrl distribution grantTypes id imageUrl name redirectUris updatedAt webhookEnabled webhookResourceTypes webhookUrl }\",\"field\":\"oauthApplications\",\"optype\":\"query\",\"vars\":[]},\"protocol\":\"graphql\",\"types\":{},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "query OAuthApplicationList { oauthApplications { ...OAuthApplicationFields } } fragment OAuthApplicationFields on OAuthApplication { clientId createdAt description developer developerUrl distribution grantTypes id imageUrl name redirectUris updatedAt webhookEnabled webhookResourceTypes webhookUrl }", "field": "oauthApplications", "optype": "query", "vars": [] }, "kind": "graphql", "method": "POST", "orig": "oauthApplications", "segments": [], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.data.oauthApplications`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST oauthApplication", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"[ALPHA] A specific OAuth application created by the calling OAuth application through the public API.\",\"gqltype\":\"OAuthApplication!\",\"list\":false,\"name\":\"oauthApplication\",\"reqd\":true,\"type\":\"OAuthApplication\"},\"invocation\":{\"doc\":\"query OAuthApplicationLoad($id: String!) { oauthApplication(id: $id) { ...OAuthApplicationFields } } fragment OAuthApplicationFields on OAuthApplication { clientId createdAt description developer developerUrl distribution grantTypes id imageUrl name redirectUris updatedAt webhookEnabled webhookResourceTypes webhookUrl }\",\"field\":\"oauthApplication\",\"optype\":\"query\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "query OAuthApplicationLoad($id: String!) { oauthApplication(id: $id) { ...OAuthApplicationFields } } fragment OAuthApplicationFields on OAuthApplication { clientId createdAt description developer developerUrl distribution grantTypes id imageUrl name redirectUris updatedAt webhookEnabled webhookResourceTypes webhookUrl }", "field": "oauthApplication", "optype": "query", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "kind": "graphql", "method": "POST", "orig": "oauthApplication", "segments": [], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.data.oauthApplication`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST oauthApplicationUpdate", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"},{\"gqltype\":\"OAuthApplicationUpdateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"OAuthApplicationUpdateInput\"}],\"deprecated\":false,\"desc\":\"[ALPHA] Updates an OAuth application created by the calling OAuth application.\",\"gqltype\":\"OAuthApplicationPayload!\",\"list\":false,\"name\":\"oauthApplicationUpdate\",\"reqd\":true,\"type\":\"OAuthApplicationPayload\"},\"invocation\":{\"doc\":\"mutation OAuthApplicationUpdate($id: String!, $input: OAuthApplicationUpdateInput!) { oauthApplicationUpdate(id: $id, input: $input) { application { ...OAuthApplicationFields } success } } fragment OAuthApplicationFields on OAuthApplication { clientId createdAt description developer developerUrl distribution grantTypes id imageUrl name redirectUris updatedAt webhookEnabled webhookResourceTypes webhookUrl }\",\"field\":\"oauthApplicationUpdate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"},{\"from\":\"\",\"gqltype\":\"OAuthApplicationUpdateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"Boolean\":{\"desc\":\"The `Boolean` scalar type represents `true` or `false`.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Boolean\"},\"OAuthApplicationGrantType\":{\"desc\":\"OAuth grant type supported by an OAuth application.\",\"fields\":{},\"kind\":\"ENUM\",\"name\":\"OAuthApplicationGrantType\",\"values\":[\"authorization_code\",\"client_credentials\"]},\"OAuthApplicationUpdateInput\":{\"desc\":\"Input for updating an OAuth application through the public API.\",\"fields\":{\"description\":{\"args\":[],\"deprecated\":false,\"desc\":\"User-facing description of the OAuth application.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"description\",\"reqd\":false,\"type\":\"String\"},\"developer\":{\"args\":[],\"deprecated\":false,\"desc\":\"Name of the developer or company that built the OAuth application.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"developer\",\"reqd\":false,\"type\":\"String\"},\"developerUrl\":{\"args\":[],\"deprecated\":false,\"desc\":\"URL of the developer's website, homepage, or documentation.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"developerUrl\",\"reqd\":false,\"type\":\"String\"},\"grantTypes\":{\"args\":[],\"deprecated\":false,\"desc\":\"OAuth grant capabilities the app may use. authorization_code is required. Omit to keep the existing grant types.\",\"gqltype\":\"[OAuthApplicationGrantType!]\",\"list\":true,\"name\":\"grantTypes\",\"reqd\":false,\"type\":\"OAuthApplicationGrantType\"},\"imageUrl\":{\"args\":[],\"deprecated\":false,\"desc\":\"URL of the OAuth application's icon.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"imageUrl\",\"reqd\":false,\"type\":\"String\"},\"name\":{\"args\":[],\"deprecated\":false,\"desc\":\"The OAuth application's name.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"name\",\"reqd\":false,\"type\":\"String\"},\"redirectUris\":{\"args\":[],\"deprecated\":false,\"desc\":\"Allowed redirect URIs for OAuth authorization flows.\",\"gqltype\":\"[String!]\",\"list\":true,\"name\":\"redirectUris\",\"reqd\":false,\"type\":\"String\"},\"webhookEnabled\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether webhook delivery is enabled for this OAuth application.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"webhookEnabled\",\"reqd\":false,\"type\":\"Boolean\"},\"webhookResourceTypes\":{\"args\":[],\"deprecated\":false,\"desc\":\"Resource types the OAuth application's webhooks subscribe to.\",\"gqltype\":\"[WebhookResourceType!]\",\"list\":true,\"name\":\"webhookResourceTypes\",\"reqd\":false,\"type\":\"WebhookResourceType\"},\"webhookUrl\":{\"args\":[],\"deprecated\":false,\"desc\":\"Webhook URL used for delivering webhook payloads.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"webhookUrl\",\"reqd\":false,\"type\":\"String\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"OAuthApplicationUpdateInput\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"},\"WebhookResourceType\":{\"desc\":\"A webhook event stream resource type that an OAuth application can subscribe to.\",\"fields\":{},\"kind\":\"ENUM\",\"name\":\"WebhookResourceType\",\"values\":[\"AgentSessionEvent\",\"AppUserNotification\",\"Attachment\",\"Comment\",\"Customer\",\"CustomerNeed\",\"Cycle\",\"Document\",\"Initiative\",\"InitiativeUpdate\",\"Issue\",\"IssueLabel\",\"IssueSLA\",\"OAuthAuthorization\",\"PermissionChange\",\"Project\",\"ProjectLabel\",\"ProjectUpdate\",\"Reaction\",\"Release\",\"ReleaseNote\",\"User\"]}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "mutation OAuthApplicationUpdate($id: String!, $input: OAuthApplicationUpdateInput!) { oauthApplicationUpdate(id: $id, input: $input) { application { ...OAuthApplicationFields } success } } fragment OAuthApplicationFields on OAuthApplication { clientId createdAt description developer developerUrl distribution grantTypes id imageUrl name redirectUris updatedAt webhookEnabled webhookResourceTypes webhookUrl }", "field": "oauthApplicationUpdate", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }, { "from": "", "gqltype": "OAuthApplicationUpdateInput!", "name": "input" }] }, "kind": "graphql", "method": "POST", "orig": "oauthApplicationUpdate", "segments": [], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.data.oauthApplicationUpdate.application`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "o_auth_application", "name__orig": "o_auth_application", "Name": "OAuthApplication", "name_": "o_auth_application", "name-": "o-auth-application", "NAME": "O_AUTH_APPLICATION", "index$": 50 }, { "active": true, "entity": "o_auth_application", "key$": "BasicOAuthApplicationFlow", "kind": "basic", "name": "BasicOAuthApplicationFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "o_auth_application_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "o_auth_application_ref01" } }], "index$": 1 }, { "active": true, "data": {}, "input": { "ref": "o_auth_application_ref01", "srcdatavar": "o_auth_application_ref01_data", "suffix": "_up0", "textfield": "clientId" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-o_auth_application_ref01" } }], "valid": [], "index$": 2 }, { "active": true, "data": {}, "input": { "ref": "o_auth_application_ref01", "srcdatavar": "o_auth_application_ref01_data", "suffix": "_dt0" }, "match": { "id": "o_auth_application01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-o_auth_application_ref01" } }], "index$": 3 }] }, 'OAuthApplication');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const o_auth_application_ref01_ent = client.OAuthApplication();
        let o_auth_application_ref01_data = setup.data.new.o_auth_application['o_auth_application_ref01'];
        o_auth_application_ref01_data = (await o_auth_application_ref01_ent.create(o_auth_application_ref01_data)).data();
        (0, node_assert_1.default)(null != o_auth_application_ref01_data.id);
        // LIST
        const o_auth_application_ref01_match = {};
        const o_auth_application_ref01_list = (await o_auth_application_ref01_ent.list(o_auth_application_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(o_auth_application_ref01_list, { id: o_auth_application_ref01_data.id })));
        // UPDATE
        const o_auth_application_ref01_data_up0 = {};
        o_auth_application_ref01_data_up0.id = o_auth_application_ref01_data.id;
        const o_auth_application_ref01_markdef_up0 = { name: 'clientId', value: 'Mark01-o_auth_application_ref01_' + setup.now };
        o_auth_application_ref01_data_up0[o_auth_application_ref01_markdef_up0.name] = o_auth_application_ref01_markdef_up0.value;
        const o_auth_application_ref01_resdata_up0 = (await o_auth_application_ref01_ent.update(o_auth_application_ref01_data_up0)).data();
        (0, node_assert_1.default)(o_auth_application_ref01_resdata_up0.id === o_auth_application_ref01_data_up0.id);
        (0, node_assert_1.default)(o_auth_application_ref01_resdata_up0[o_auth_application_ref01_markdef_up0.name] === o_auth_application_ref01_markdef_up0.value);
        // LOAD
        const o_auth_application_ref01_match_dt0 = {};
        o_auth_application_ref01_match_dt0.id = o_auth_application_ref01_data.id;
        const o_auth_application_ref01_data_dt0 = (await o_auth_application_ref01_ent.load(o_auth_application_ref01_match_dt0)).data();
        (0, node_assert_1.default)(o_auth_application_ref01_data_dt0.id === o_auth_application_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/o_auth_application/OAuthApplicationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['o_auth_application01', 'o_auth_application02', 'o_auth_application03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_O_AUTH_APPLICATION_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_O_AUTH_APPLICATION_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_O_AUTH_APPLICATION_ENTID'];
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
//# sourceMappingURL=OAuthApplicationEntity.test.js.map