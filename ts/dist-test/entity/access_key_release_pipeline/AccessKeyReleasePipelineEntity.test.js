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
(0, node_test_1.describe)('AccessKeyReleasePipelineEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.AccessKeyReleasePipeline();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'access_key_release_pipeline.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "id", "req": true, "short": "The unique identifier of the release pipeline.", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "includePathPatterns", "req": true, "short": "Glob patterns used to filter commits by changed file path.", "type": "`$STRING`", "index$": 1 }], "id": { "field": "id", "name": "id" }, "name": "access_key_release_pipeline", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": {}, "contract": { "id": "POST releasePipelineByAccessKey", "json": "{\"field\":{\"args\":[],\"deprecated\":false,\"desc\":\"Returns the release pipeline associated with the access key.\",\"gqltype\":\"AccessKeyReleasePipeline!\",\"list\":false,\"name\":\"releasePipelineByAccessKey\",\"reqd\":true,\"type\":\"AccessKeyReleasePipeline\"},\"invocation\":{\"doc\":\"query AccessKeyReleasePipelineLoad { releasePipelineByAccessKey { ...AccessKeyReleasePipelineFields } } fragment AccessKeyReleasePipelineFields on AccessKeyReleasePipeline { id includePathPatterns }\",\"field\":\"releasePipelineByAccessKey\",\"optype\":\"query\",\"vars\":[]},\"protocol\":\"graphql\",\"types\":{},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "query AccessKeyReleasePipelineLoad { releasePipelineByAccessKey { ...AccessKeyReleasePipelineFields } } fragment AccessKeyReleasePipelineFields on AccessKeyReleasePipeline { id includePathPatterns }", "field": "releasePipelineByAccessKey", "optype": "query", "vars": [] }, "kind": "graphql", "method": "POST", "orig": "releasePipelineByAccessKey", "segments": [], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.data.releasePipelineByAccessKey`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "access_key_release_pipeline", "name__orig": "access_key_release_pipeline", "Name": "AccessKeyReleasePipeline", "name_": "access_key_release_pipeline", "name-": "access-key-release-pipeline", "NAME": "ACCESS_KEY_RELEASE_PIPELINE", "index$": 1 }, { "active": true, "entity": "access_key_release_pipeline", "key$": "BasicAccessKeyReleasePipelineFlow", "kind": "basic", "name": "BasicAccessKeyReleasePipelineFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "access_key_release_pipeline_ref01", "srcdatavar": "access_key_release_pipeline_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-access_key_release_pipeline_ref01" } }], "index$": 0 }] }, 'AccessKeyReleasePipeline');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let access_key_release_pipeline_ref01_data = Object.values(setup.data.existing.access_key_release_pipeline)[0];
        // LOAD
        const access_key_release_pipeline_ref01_ent = client.AccessKeyReleasePipeline();
        const access_key_release_pipeline_ref01_match_dt0 = {};
        access_key_release_pipeline_ref01_match_dt0.id = access_key_release_pipeline_ref01_data.id;
        const access_key_release_pipeline_ref01_data_dt0 = (await access_key_release_pipeline_ref01_ent.load(access_key_release_pipeline_ref01_match_dt0)).data();
        (0, node_assert_1.default)(access_key_release_pipeline_ref01_data_dt0.id === access_key_release_pipeline_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/access_key_release_pipeline/AccessKeyReleasePipelineTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['access_key_release_pipeline01', 'access_key_release_pipeline02', 'access_key_release_pipeline03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_ACCESS_KEY_RELEASE_PIPELINE_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_ACCESS_KEY_RELEASE_PIPELINE_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_ACCESS_KEY_RELEASE_PIPELINE_ENTID'];
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
//# sourceMappingURL=AccessKeyReleasePipelineEntity.test.js.map