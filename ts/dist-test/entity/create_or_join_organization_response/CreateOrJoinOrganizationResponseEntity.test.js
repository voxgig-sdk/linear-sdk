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
(0, node_test_1.describe)('CreateOrJoinOrganizationResponseEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.CreateOrJoinOrganizationResponse();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['create', 'update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'create_or_join_organization_response.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "organization", "req": false, "short": "The workspace that was created or joined.", "type": "`$OBJECT`", "index$": 0 }, { "active": true, "name": "user", "req": false, "short": "The user who created or joined the workspace.", "type": "`$OBJECT`", "index$": 1 }], "name": "create_or_join_organization_response", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "partner_offer_token", "orig": "partner_offer_token", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "session_id", "orig": "session_id", "reqd": false, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "POST createOrganizationFromOnboarding", "json": "{\"field\":{\"args\":[{\"gqltype\":\"CreateOrganizationInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"CreateOrganizationInput\"},{\"gqltype\":\"String\",\"name\":\"partnerOfferToken\",\"reqd\":false,\"type\":\"String\"},{\"gqltype\":\"String\",\"name\":\"sessionId\",\"reqd\":false,\"type\":\"String\"},{\"gqltype\":\"OnboardingCustomerSurvey\",\"name\":\"survey\",\"reqd\":false,\"type\":\"OnboardingCustomerSurvey\"}],\"deprecated\":false,\"desc\":\"Creates a new workspace from onboarding.\",\"gqltype\":\"CreateOrJoinOrganizationResponse!\",\"list\":false,\"name\":\"createOrganizationFromOnboarding\",\"reqd\":true,\"type\":\"CreateOrJoinOrganizationResponse\"},\"invocation\":{\"doc\":\"mutation CreateOrJoinOrganizationResponseCreateCreateOrganizationFromOnboarding($input: CreateOrganizationInput!, $partnerOfferToken: String, $sessionId: String, $survey: OnboardingCustomerSurvey) { createOrganizationFromOnboarding(input: $input, partnerOfferToken: $partnerOfferToken, sessionId: $sessionId, survey: $survey) { ...CreateOrJoinOrganizationResponseFields } } fragment CreateOrJoinOrganizationResponseFields on CreateOrJoinOrganizationResponse { organization { id } user { id } }\",\"field\":\"createOrganizationFromOnboarding\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"input\",\"gqltype\":\"CreateOrganizationInput!\",\"name\":\"input\"},{\"from\":\"partnerOfferToken\",\"gqltype\":\"String\",\"name\":\"partnerOfferToken\"},{\"from\":\"sessionId\",\"gqltype\":\"String\",\"name\":\"sessionId\"},{\"from\":\"survey\",\"gqltype\":\"OnboardingCustomerSurvey\",\"name\":\"survey\"}]},\"protocol\":\"graphql\",\"types\":{\"Boolean\":{\"desc\":\"The `Boolean` scalar type represents `true` or `false`.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Boolean\"},\"CreateOrganizationInput\":{\"fields\":{\"domainAccess\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether the organization should allow email domain access.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"domainAccess\",\"reqd\":false,\"type\":\"Boolean\"},\"name\":{\"args\":[],\"deprecated\":false,\"desc\":\"The name of the organization.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"name\",\"reqd\":true,\"type\":\"String\"},\"timezone\":{\"args\":[],\"deprecated\":false,\"desc\":\"The timezone of the organization, passed in by client.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"timezone\",\"reqd\":false,\"type\":\"String\"},\"urlKey\":{\"args\":[],\"deprecated\":false,\"desc\":\"The URL key of the organization.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"urlKey\",\"reqd\":true,\"type\":\"String\"},\"utm\":{\"args\":[],\"deprecated\":false,\"desc\":\"JSON serialized UTM parameters associated with the creation of the workspace.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"utm\",\"reqd\":false,\"type\":\"String\"},\"utmFirstTouch\":{\"args\":[],\"deprecated\":false,\"desc\":\"JSON serialized UTM parameters captured on the user's first visit to the marketing site (first-touch attribution).\",\"gqltype\":\"String\",\"list\":false,\"name\":\"utmFirstTouch\",\"reqd\":false,\"type\":\"String\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"CreateOrganizationInput\"},\"OnboardingCustomerSurvey\":{\"fields\":{\"companyRole\":{\"args\":[],\"deprecated\":false,\"gqltype\":\"String\",\"list\":false,\"name\":\"companyRole\",\"reqd\":false,\"type\":\"String\"},\"companySize\":{\"args\":[],\"deprecated\":false,\"gqltype\":\"String\",\"list\":false,\"name\":\"companySize\",\"reqd\":false,\"type\":\"String\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"OnboardingCustomerSurvey\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "mutation CreateOrJoinOrganizationResponseCreateCreateOrganizationFromOnboarding($input: CreateOrganizationInput!, $partnerOfferToken: String, $sessionId: String, $survey: OnboardingCustomerSurvey) { createOrganizationFromOnboarding(input: $input, partnerOfferToken: $partnerOfferToken, sessionId: $sessionId, survey: $survey) { ...CreateOrJoinOrganizationResponseFields } } fragment CreateOrJoinOrganizationResponseFields on CreateOrJoinOrganizationResponse { organization { id } user { id } }", "field": "createOrganizationFromOnboarding", "optype": "mutation", "vars": [{ "from": "input", "gqltype": "CreateOrganizationInput!", "name": "input" }, { "from": "partnerOfferToken", "gqltype": "String", "name": "partnerOfferToken" }, { "from": "sessionId", "gqltype": "String", "name": "sessionId" }, { "from": "survey", "gqltype": "OnboardingCustomerSurvey", "name": "survey" }] }, "kind": "graphql", "method": "POST", "orig": "createOrganizationFromOnboarding", "segments": [], "select": { "$action": "create_organization_from_onboarding" }, "transform": { "req": "`reqdata`", "res": "`body.data.createOrganizationFromOnboarding`" }, "index$": 0 }, { "active": true, "args": {}, "contract": { "id": "POST joinOrganizationFromOnboarding", "json": "{\"field\":{\"args\":[{\"gqltype\":\"JoinOrganizationInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"JoinOrganizationInput\"}],\"deprecated\":false,\"desc\":\"Join a workspace from onboarding.\",\"gqltype\":\"CreateOrJoinOrganizationResponse!\",\"list\":false,\"name\":\"joinOrganizationFromOnboarding\",\"reqd\":true,\"type\":\"CreateOrJoinOrganizationResponse\"},\"invocation\":{\"doc\":\"mutation CreateOrJoinOrganizationResponseCreateJoinOrganizationFromOnboarding($input: JoinOrganizationInput!) { joinOrganizationFromOnboarding(input: $input) { ...CreateOrJoinOrganizationResponseFields } } fragment CreateOrJoinOrganizationResponseFields on CreateOrJoinOrganizationResponse { organization { id } user { id } }\",\"field\":\"joinOrganizationFromOnboarding\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"\",\"gqltype\":\"JoinOrganizationInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"JoinOrganizationInput\":{\"fields\":{\"inviteLink\":{\"args\":[],\"deprecated\":false,\"desc\":\"An optional invite link for an organization.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"inviteLink\",\"reqd\":false,\"type\":\"String\"},\"organizationId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier of the organization.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"organizationId\",\"reqd\":true,\"type\":\"String\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"JoinOrganizationInput\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "mutation CreateOrJoinOrganizationResponseCreateJoinOrganizationFromOnboarding($input: JoinOrganizationInput!) { joinOrganizationFromOnboarding(input: $input) { ...CreateOrJoinOrganizationResponseFields } } fragment CreateOrJoinOrganizationResponseFields on CreateOrJoinOrganizationResponse { organization { id } user { id } }", "field": "joinOrganizationFromOnboarding", "optype": "mutation", "vars": [{ "from": "", "gqltype": "JoinOrganizationInput!", "name": "input" }] }, "kind": "graphql", "method": "POST", "orig": "joinOrganizationFromOnboarding", "segments": [], "select": { "$action": "join_organization_from_onboarding" }, "transform": { "req": "`reqdata`", "res": "`body.data.joinOrganizationFromOnboarding`" }, "index$": 1 }], "key$": "create" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "organization_id", "orig": "organization_id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST leaveOrganization", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"organizationId\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"Leave a workspace.\",\"gqltype\":\"CreateOrJoinOrganizationResponse!\",\"list\":false,\"name\":\"leaveOrganization\",\"reqd\":true,\"type\":\"CreateOrJoinOrganizationResponse\"},\"invocation\":{\"doc\":\"mutation CreateOrJoinOrganizationResponseUpdateLeaveOrganization($organizationId: String!) { leaveOrganization(organizationId: $organizationId) { ...CreateOrJoinOrganizationResponseFields } } fragment CreateOrJoinOrganizationResponseFields on CreateOrJoinOrganizationResponse { organization { id } user { id } }\",\"field\":\"leaveOrganization\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"organizationId\",\"gqltype\":\"String!\",\"name\":\"organizationId\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "mutation CreateOrJoinOrganizationResponseUpdateLeaveOrganization($organizationId: String!) { leaveOrganization(organizationId: $organizationId) { ...CreateOrJoinOrganizationResponseFields } } fragment CreateOrJoinOrganizationResponseFields on CreateOrJoinOrganizationResponse { organization { id } user { id } }", "field": "leaveOrganization", "optype": "mutation", "vars": [{ "from": "organizationId", "gqltype": "String!", "name": "organizationId" }] }, "kind": "graphql", "method": "POST", "orig": "leaveOrganization", "segments": [], "select": { "$action": "leave_organization", "exist": ["organization_id"] }, "transform": { "req": "`reqdata`", "res": "`body.data.leaveOrganization`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "create_or_join_organization_response", "name__orig": "create_or_join_organization_response", "Name": "CreateOrJoinOrganizationResponse", "name_": "create_or_join_organization_response", "name-": "create-or-join-organization-response", "NAME": "CREATE_OR_JOIN_ORGANIZATION_RESPONSE", "index$": 12 }, { "active": true, "entity": "create_or_join_organization_response", "key$": "BasicCreateOrJoinOrganizationResponseFlow", "kind": "basic", "name": "BasicCreateOrJoinOrganizationResponseFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "create_or_join_organization_response_ref01" }, "match": { "organization_id": "organization01" }, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": { "organization_id": "organization01" }, "input": { "ref": "create_or_join_organization_response_ref01", "srcdatavar": "create_or_join_organization_response_ref01_data", "suffix": "_up0" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-create_or_join_organization_response_ref01" } }], "valid": [], "index$": 1 }] }, 'CreateOrJoinOrganizationResponse');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const create_or_join_organization_response_ref01_ent = client.CreateOrJoinOrganizationResponse();
        let create_or_join_organization_response_ref01_data = setup.data.new.create_or_join_organization_response['create_or_join_organization_response_ref01'];
        create_or_join_organization_response_ref01_data['organization_id'] = setup.idmap['organization01'];
        create_or_join_organization_response_ref01_data = (await create_or_join_organization_response_ref01_ent.create(create_or_join_organization_response_ref01_data)).data();
        (0, node_assert_1.default)(null != create_or_join_organization_response_ref01_data);
        // UPDATE
        const create_or_join_organization_response_ref01_data_up0 = {};
        create_or_join_organization_response_ref01_data_up0['organization_id'] = setup.idmap['organization_id'];
        const create_or_join_organization_response_ref01_resdata_up0 = (await create_or_join_organization_response_ref01_ent.update(create_or_join_organization_response_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != create_or_join_organization_response_ref01_resdata_up0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/create_or_join_organization_response/CreateOrJoinOrganizationResponseTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['create_or_join_organization_response01', 'create_or_join_organization_response02', 'create_or_join_organization_response03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_CREATE_OR_JOIN_ORGANIZATION_RESPONSE_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_CREATE_OR_JOIN_ORGANIZATION_RESPONSE_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_CREATE_OR_JOIN_ORGANIZATION_RESPONSE_ENTID'];
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
//# sourceMappingURL=CreateOrJoinOrganizationResponseEntity.test.js.map