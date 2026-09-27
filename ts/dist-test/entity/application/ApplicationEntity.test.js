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
(0, node_test_1.describe)('ApplicationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.Application();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'application.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "clientId": { "a": true, "h": "Client Id", "n": "clientId", "r": true, "sh": "OAuth application's client ID.", "t": "`$STRING`", "key$": "clientId", "index$": 0 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "Information about the application.", "t": "`$STRING`", "key$": "description", "index$": 1 }, "developer": { "a": true, "h": "Developer", "n": "developer", "r": true, "sh": "Name of the developer.", "t": "`$STRING`", "key$": "developer", "index$": 2 }, "developerUrl": { "a": true, "h": "Developer Url", "n": "developerUrl", "r": true, "sh": "URL of the developer's website, homepage, or documentation.", "t": "`$STRING`", "key$": "developerUrl", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "OAuth application's ID.", "t": "`$STRING`", "key$": "id", "index$": 4 }, "imageUrl": { "a": true, "h": "Image Url", "n": "imageUrl", "r": false, "sh": "Image of the application.", "t": "`$STRING`", "key$": "imageUrl", "index$": 5 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "Application name.", "t": "`$STRING`", "key$": "name", "index$": 6 } }, "id": { "field": "id", "name": "id" }, "name": "application", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "POST applicationInfo", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "client_id", "or": "client_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "query ApplicationLoad($clientId: String!) { applicationInfo(clientId: $clientId) { ...ApplicationFields } } fragment ApplicationFields on Application { clientId description developer developerUrl id imageUrl name }", "field": "applicationInfo", "optype": "query", "vars": [{ "from": "clientId", "gqltype": "String!", "name": "clientId" }] }, "k": "graphql", "m": "POST", "o": "applicationInfo", "q": { "exist": ["client_id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.applicationInfo`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "application", "name__orig": "application", "Name": "Application", "name_": "application", "name-": "application", "NAME": "APPLICATION", "index$": 5 }, { "active": true, "entity": "application", "key$": "BasicApplicationFlow", "kind": "basic", "name": "BasicApplicationFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "application_ref01", "srcdatavar": "application_ref01_data", "suffix": "_dt0" }, "m": { "client_id": "client01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-application_ref01" } }], "index$": 0 }] }, 'Application', { "POST applicationInfo": { "protocol": "graphql" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let application_ref01_data = Object.values(setup.data.existing.application)[0];
        // LOAD
        const application_ref01_ent = client.Application();
        const application_ref01_match_dt0 = {};
        application_ref01_match_dt0.id = application_ref01_data.id;
        const application_ref01_data_dt0 = (await application_ref01_ent.load(application_ref01_match_dt0)).data();
        (0, node_assert_1.default)(application_ref01_data_dt0.id === application_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/application/ApplicationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['application01', 'application02', 'application03', 'client01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_APPLICATION_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_APPLICATION_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_APPLICATION_ENTID'];
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
//# sourceMappingURL=ApplicationEntity.test.js.map