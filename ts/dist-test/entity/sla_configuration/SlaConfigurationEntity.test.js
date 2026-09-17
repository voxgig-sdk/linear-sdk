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
(0, node_test_1.describe)('SlaConfigurationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.SlaConfiguration();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'sla_configuration.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "conditions", "req": true, "short": "The workflow conditions that determine when this SLA rule applies.", "type": "`$ANY`", "index$": 0 }, { "active": true, "name": "id", "req": true, "short": "The identifier of the SLA rule.", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "name", "req": true, "short": "The name of the SLA rule.", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "removesSla", "req": true, "short": "Whether the rule removes an SLA instead of setting one.", "type": "`$BOOLEAN`", "index$": 3 }, { "active": true, "name": "sla", "req": false, "short": "The SLA value configured by the rule, expressed in milliseconds or business days depending on the day-count type.", "type": "`$NUMBER`", "index$": 4 }, { "active": true, "name": "slaType", "req": false, "short": "The SLA type used when the rule sets an SLA.", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "startMode", "req": false, "short": "When SLA timing begins.", "type": "`$STRING`", "index$": 6 }], "id": { "field": "id", "name": "id" }, "name": "sla_configuration", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "team_id", "orig": "team_id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST slaConfigurations", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"teamId\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"Active SLA configurations that can apply to the requested team.\",\"gqltype\":\"[SlaConfiguration!]!\",\"list\":true,\"name\":\"slaConfigurations\",\"reqd\":true,\"type\":\"SlaConfiguration\"},\"invocation\":{\"doc\":\"query SlaConfigurationList($teamId: String!) { slaConfigurations(teamId: $teamId) { ...SlaConfigurationFields } } fragment SlaConfigurationFields on SlaConfiguration { conditions id name removesSla sla slaType startMode }\",\"field\":\"slaConfigurations\",\"optype\":\"query\",\"vars\":[{\"from\":\"teamId\",\"gqltype\":\"String!\",\"name\":\"teamId\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "query SlaConfigurationList($teamId: String!) { slaConfigurations(teamId: $teamId) { ...SlaConfigurationFields } } fragment SlaConfigurationFields on SlaConfiguration { conditions id name removesSla sla slaType startMode }", "field": "slaConfigurations", "optype": "query", "vars": [{ "from": "teamId", "gqltype": "String!", "name": "teamId" }] }, "kind": "graphql", "method": "POST", "orig": "slaConfigurations", "segments": [], "select": { "exist": ["team_id"] }, "transform": { "req": "`reqdata`", "res": "`body.data.slaConfigurations`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "sla_configuration", "name__orig": "sla_configuration", "Name": "SlaConfiguration", "name_": "sla_configuration", "name-": "sla-configuration", "NAME": "SLA_CONFIGURATION", "index$": 72 }, { "active": true, "entity": "sla_configuration", "key$": "BasicSlaConfigurationFlow", "kind": "basic", "name": "BasicSlaConfigurationFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": { "team_id": "team01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "sla_configuration_ref01" } }], "index$": 0 }] }, 'SlaConfiguration');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let sla_configuration_ref01_data = Object.values(setup.data.existing.sla_configuration)[0];
        // LIST
        const sla_configuration_ref01_ent = client.SlaConfiguration();
        const sla_configuration_ref01_match = {};
        sla_configuration_ref01_match['team_id'] = setup.idmap['team01'];
        const sla_configuration_ref01_list = (await sla_configuration_ref01_ent.list(sla_configuration_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/sla_configuration/SlaConfigurationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['sla_configuration01', 'sla_configuration02', 'sla_configuration03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_SLA_CONFIGURATION_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_SLA_CONFIGURATION_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_SLA_CONFIGURATION_ENTID'];
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
//# sourceMappingURL=SlaConfigurationEntity.test.js.map