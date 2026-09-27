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
(0, node_test_1.describe)('OrganizationDomainEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.OrganizationDomain();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['create', 'update', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'organization_domain.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "archivedAt": { "a": true, "h": "Archived At", "n": "archivedAt", "r": false, "sh": "The time at which the entity was archived.", "t": "`$ANY`", "key$": "archivedAt", "index$": 0 }, "authType": { "a": true, "h": "Auth Type", "n": "authType", "r": true, "sh": "The authentication type this domain is used for.", "t": "`$STRING`", "key$": "authType", "index$": 1 }, "claimed": { "a": true, "h": "Claimed", "n": "claimed", "r": false, "sh": "Whether the domain was claimed by the workspace through DNS TXT record verification.", "t": "`$BOOLEAN`", "key$": "claimed", "index$": 2 }, "createdAt": { "a": true, "h": "Created At", "n": "createdAt", "r": true, "sh": "The time at which the entity was created.", "t": "`$ANY`", "key$": "createdAt", "index$": 3 }, "creator": { "a": true, "h": "Creator", "n": "creator", "r": false, "sh": "The user who added the domain.", "t": "`$OBJECT`", "key$": "creator", "index$": 4 }, "disableOrganizationCreation": { "a": true, "h": "Disable Organization Creation", "n": "disableOrganizationCreation", "r": false, "sh": "Whether users with email addresses from this domain are prevented from creating new workspaces.", "t": "`$BOOLEAN`", "key$": "disableOrganizationCreation", "index$": 5 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The unique identifier of the entity.", "t": "`$STRING`", "key$": "id", "index$": 6 }, "identityProvider": { "a": true, "h": "Identity Provider", "n": "identityProvider", "r": false, "sh": "The identity provider the domain belongs to.", "t": "`$OBJECT`", "key$": "identityProvider", "index$": 7 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "The domain name (e.g., 'example.com').", "t": "`$STRING`", "key$": "name", "index$": 8 }, "updatedAt": { "a": true, "h": "Updated At", "n": "updatedAt", "r": true, "sh": "The last time at which the entity was meaningfully updated.", "t": "`$ANY`", "key$": "updatedAt", "index$": 9 }, "verificationEmail": { "a": true, "h": "Verification Email", "n": "verificationEmail", "r": false, "sh": "The email address used to verify this domain.", "t": "`$STRING`", "key$": "verificationEmail", "index$": 10 }, "verified": { "a": true, "h": "Verified", "n": "verified", "r": true, "sh": "Whether the domain has been verified via email verification.", "t": "`$BOOLEAN`", "key$": "verified", "index$": 11 } }, "id": { "field": "id", "name": "id" }, "name": "organization_domain", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST organizationDomainCreate", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "trigger_email_verification", "or": "trigger_email_verification", "r": false, "t": "`$BOOLEAN`", "index$": 0 }] }, "gq": { "doc": "mutation OrganizationDomainCreate($input: OrganizationDomainCreateInput!, $triggerEmailVerification: Boolean) { organizationDomainCreate(input: $input, triggerEmailVerification: $triggerEmailVerification) { organizationDomain { ...OrganizationDomainFields } success } } fragment OrganizationDomainFields on OrganizationDomain { archivedAt authType claimed createdAt creator { id } disableOrganizationCreation id identityProvider { id } name updatedAt verificationEmail verified }", "field": "organizationDomainCreate", "optype": "mutation", "vars": [{ "from": "", "gqltype": "OrganizationDomainCreateInput!", "name": "input" }, { "from": "triggerEmailVerification", "gqltype": "Boolean", "name": "triggerEmailVerification" }] }, "k": "graphql", "m": "POST", "o": "organizationDomainCreate", "q": {}, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.organizationDomainCreate.organizationDomain`" }, "index$": 0 }, { "a": true, "co": { "id": "POST organizationDomainVerify", "source": "graphql", "version": 2 }, "g": {}, "gq": { "doc": "mutation OrganizationDomainCreateVerify($input: OrganizationDomainVerificationInput!) { organizationDomainVerify(input: $input) { organizationDomain { ...OrganizationDomainFields } success } } fragment OrganizationDomainFields on OrganizationDomain { archivedAt authType claimed createdAt creator { id } disableOrganizationCreation id identityProvider { id } name updatedAt verificationEmail verified }", "field": "organizationDomainVerify", "optype": "mutation", "vars": [{ "from": "", "gqltype": "OrganizationDomainVerificationInput!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "organizationDomainVerify", "q": { "$action": "verify" }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.organizationDomainVerify.organizationDomain`" }, "index$": 1 }], "key$": "create" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "POST organizationDomainDelete", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation OrganizationDomainRemove($id: String!) { organizationDomainDelete(id: $id) { entityId lastSyncId success } }", "field": "organizationDomainDelete", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "organizationDomainDelete", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.organizationDomainDelete`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "POST organizationDomainUpdate", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation OrganizationDomainUpdate($id: String!, $input: OrganizationDomainUpdateInput!) { organizationDomainUpdate(id: $id, input: $input) { organizationDomain { ...OrganizationDomainFields } success } } fragment OrganizationDomainFields on OrganizationDomain { archivedAt authType claimed createdAt creator { id } disableOrganizationCreation id identityProvider { id } name updatedAt verificationEmail verified }", "field": "organizationDomainUpdate", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }, { "from": "", "gqltype": "OrganizationDomainUpdateInput!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "organizationDomainUpdate", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.organizationDomainUpdate.organizationDomain`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "organization_domain", "name__orig": "organization_domain", "Name": "OrganizationDomain", "name_": "organization_domain", "name-": "organization-domain", "NAME": "ORGANIZATION_DOMAIN", "index$": 52 }, { "active": true, "entity": "organization_domain", "key$": "BasicOrganizationDomainFlow", "kind": "basic", "name": "BasicOrganizationDomainFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "organization_domain_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "organization_domain_ref01", "srcdatavar": "organization_domain_ref01_data", "suffix": "_up0", "textfield": "authType" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-organization_domain_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "organization_domain_ref01", "suffix": "_rm0" }, "m": { "id": "organization_domain01" }, "o": "remove", "s": [], "v": [], "index$": 2 }] }, 'OrganizationDomain', { "POST organizationDomainCreate": { "protocol": "graphql" }, "POST organizationDomainVerify": { "protocol": "graphql" }, "POST organizationDomainDelete": { "protocol": "graphql" }, "POST organizationDomainUpdate": { "protocol": "graphql" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const organization_domain_ref01_ent = client.OrganizationDomain();
        let organization_domain_ref01_data = setup.data.new.organization_domain['organization_domain_ref01'];
        organization_domain_ref01_data = (await organization_domain_ref01_ent.create(organization_domain_ref01_data)).data();
        (0, node_assert_1.default)(null != organization_domain_ref01_data.id);
        // UPDATE
        const organization_domain_ref01_data_up0 = {};
        organization_domain_ref01_data_up0.id = organization_domain_ref01_data.id;
        const organization_domain_ref01_markdef_up0 = { name: 'authType', value: 'Mark01-organization_domain_ref01_' + setup.now };
        organization_domain_ref01_data_up0[organization_domain_ref01_markdef_up0.name] = organization_domain_ref01_markdef_up0.value;
        const organization_domain_ref01_resdata_up0 = (await organization_domain_ref01_ent.update(organization_domain_ref01_data_up0)).data();
        (0, node_assert_1.default)(organization_domain_ref01_resdata_up0.id === organization_domain_ref01_data_up0.id);
        (0, node_assert_1.default)(organization_domain_ref01_resdata_up0[organization_domain_ref01_markdef_up0.name] === organization_domain_ref01_markdef_up0.value);
        // REMOVE
        const organization_domain_ref01_match_rm0 = { id: organization_domain_ref01_data.id };
        await organization_domain_ref01_ent.remove(organization_domain_ref01_match_rm0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/organization_domain/OrganizationDomainTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['organization_domain01', 'organization_domain02', 'organization_domain03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_ORGANIZATION_DOMAIN_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_ORGANIZATION_DOMAIN_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_ORGANIZATION_DOMAIN_ENTID'];
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
//# sourceMappingURL=OrganizationDomainEntity.test.js.map