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
(0, node_test_1.describe)('EntityExternalLinkEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.EntityExternalLink();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['create', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'entity_external_link.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "archivedAt": { "a": true, "h": "Archived At", "n": "archivedAt", "r": false, "sh": "The time at which the entity was archived.", "t": "`$ANY`", "key$": "archivedAt", "index$": 0 }, "createdAt": { "a": true, "h": "Created At", "n": "createdAt", "r": true, "sh": "The time at which the entity was created.", "t": "`$ANY`", "key$": "createdAt", "index$": 1 }, "creator": { "a": true, "h": "Creator", "n": "creator", "r": false, "sh": "The user who created the link.", "t": "`$OBJECT`", "key$": "creator", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The unique identifier of the entity.", "t": "`$STRING`", "key$": "id", "index$": 3 }, "initiative": { "a": true, "h": "Initiative", "n": "initiative", "r": false, "sh": "The initiative that the link is associated with.", "t": "`$OBJECT`", "key$": "initiative", "index$": 4 }, "label": { "a": true, "h": "Label", "n": "label", "r": true, "sh": "The link's label.", "t": "`$STRING`", "key$": "label", "index$": 5 }, "project": { "a": true, "h": "Project", "n": "project", "r": false, "sh": "The project that the link is associated with.", "t": "`$OBJECT`", "key$": "project", "index$": 6 }, "sortOrder": { "a": true, "h": "Sort Order", "n": "sortOrder", "r": true, "sh": "The sort order of this link within the parent entity's resources list.", "t": "`$NUMBER`", "key$": "sortOrder", "index$": 7 }, "updatedAt": { "a": true, "h": "Updated At", "n": "updatedAt", "r": true, "sh": "The last time at which the entity was meaningfully updated.", "t": "`$ANY`", "key$": "updatedAt", "index$": 8 }, "url": { "a": true, "h": "Url", "n": "url", "r": true, "sh": "The link's URL.", "t": "`$STRING`", "key$": "url", "index$": 9 } }, "id": { "field": "id", "name": "id" }, "name": "entity_external_link", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST entityExternalLinkCreate", "source": "graphql", "version": 2 }, "g": {}, "gq": { "doc": "mutation EntityExternalLinkCreate($input: EntityExternalLinkCreateInput!) { entityExternalLinkCreate(input: $input) { entityExternalLink { ...EntityExternalLinkFields } success } } fragment EntityExternalLinkFields on EntityExternalLink { archivedAt createdAt creator { id } id initiative { id } label project { id } sortOrder updatedAt url }", "field": "entityExternalLinkCreate", "optype": "mutation", "vars": [{ "from": "", "gqltype": "EntityExternalLinkCreateInput!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "entityExternalLinkCreate", "q": {}, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.entityExternalLinkCreate.entityExternalLink`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "POST entityExternalLink", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "query EntityExternalLinkLoad($id: String!) { entityExternalLink(id: $id) { ...EntityExternalLinkFields } } fragment EntityExternalLinkFields on EntityExternalLink { archivedAt createdAt creator { id } id initiative { id } label project { id } sortOrder updatedAt url }", "field": "entityExternalLink", "optype": "query", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "entityExternalLink", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.entityExternalLink`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "POST entityExternalLinkDelete", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation EntityExternalLinkRemove($id: String!) { entityExternalLinkDelete(id: $id) { entityId lastSyncId success } }", "field": "entityExternalLinkDelete", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }] }, "k": "graphql", "m": "POST", "o": "entityExternalLinkDelete", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.entityExternalLinkDelete`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "POST entityExternalLinkUpdate", "source": "graphql", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "gq": { "doc": "mutation EntityExternalLinkUpdate($id: String!, $input: EntityExternalLinkUpdateInput!) { entityExternalLinkUpdate(id: $id, input: $input) { entityExternalLink { ...EntityExternalLinkFields } success } } fragment EntityExternalLinkFields on EntityExternalLink { archivedAt createdAt creator { id } id initiative { id } label project { id } sortOrder updatedAt url }", "field": "entityExternalLinkUpdate", "optype": "mutation", "vars": [{ "from": "id", "gqltype": "String!", "name": "id" }, { "from": "", "gqltype": "EntityExternalLinkUpdateInput!", "name": "input" }] }, "k": "graphql", "m": "POST", "o": "entityExternalLinkUpdate", "q": { "exist": ["id"] }, "r": {}, "s": [], "t": { "req": "`reqdata`", "res": "`body.data.entityExternalLinkUpdate.entityExternalLink`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "entity_external_link", "name__orig": "entity_external_link", "Name": "EntityExternalLink", "name_": "entity_external_link", "name-": "entity-external-link", "NAME": "ENTITY_EXTERNAL_LINK", "index$": 25 }, { "active": true, "entity": "entity_external_link", "key$": "BasicEntityExternalLinkFlow", "kind": "basic", "name": "BasicEntityExternalLinkFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "entity_external_link_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "entity_external_link_ref01", "srcdatavar": "entity_external_link_ref01_data", "suffix": "_up0", "textfield": "label" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-entity_external_link_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "entity_external_link_ref01", "srcdatavar": "entity_external_link_ref01_data", "suffix": "_dt0" }, "m": { "id": "entity_external_link01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-entity_external_link_ref01" } }], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "entity_external_link_ref01", "suffix": "_rm0" }, "m": { "id": "entity_external_link01" }, "o": "remove", "s": [], "v": [], "index$": 3 }] }, 'EntityExternalLink', { "POST entityExternalLinkCreate": { "protocol": "graphql" }, "POST entityExternalLink": { "protocol": "graphql" }, "POST entityExternalLinkDelete": { "protocol": "graphql" }, "POST entityExternalLinkUpdate": { "protocol": "graphql" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const entity_external_link_ref01_ent = client.EntityExternalLink();
        let entity_external_link_ref01_data = setup.data.new.entity_external_link['entity_external_link_ref01'];
        entity_external_link_ref01_data = (await entity_external_link_ref01_ent.create(entity_external_link_ref01_data)).data();
        (0, node_assert_1.default)(null != entity_external_link_ref01_data.id);
        // UPDATE
        const entity_external_link_ref01_data_up0 = {};
        entity_external_link_ref01_data_up0.id = entity_external_link_ref01_data.id;
        const entity_external_link_ref01_markdef_up0 = { name: 'label', value: 'Mark01-entity_external_link_ref01_' + setup.now };
        entity_external_link_ref01_data_up0[entity_external_link_ref01_markdef_up0.name] = entity_external_link_ref01_markdef_up0.value;
        const entity_external_link_ref01_resdata_up0 = (await entity_external_link_ref01_ent.update(entity_external_link_ref01_data_up0)).data();
        (0, node_assert_1.default)(entity_external_link_ref01_resdata_up0.id === entity_external_link_ref01_data_up0.id);
        (0, node_assert_1.default)(entity_external_link_ref01_resdata_up0[entity_external_link_ref01_markdef_up0.name] === entity_external_link_ref01_markdef_up0.value);
        // LOAD
        const entity_external_link_ref01_match_dt0 = {};
        entity_external_link_ref01_match_dt0.id = entity_external_link_ref01_data.id;
        const entity_external_link_ref01_data_dt0 = (await entity_external_link_ref01_ent.load(entity_external_link_ref01_match_dt0)).data();
        (0, node_assert_1.default)(entity_external_link_ref01_data_dt0.id === entity_external_link_ref01_data.id);
        // REMOVE
        const entity_external_link_ref01_match_rm0 = { id: entity_external_link_ref01_data.id };
        await entity_external_link_ref01_ent.remove(entity_external_link_ref01_match_rm0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/entity_external_link/EntityExternalLinkTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['entity_external_link01', 'entity_external_link02', 'entity_external_link03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_ENTITY_EXTERNAL_LINK_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_ENTITY_EXTERNAL_LINK_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_ENTITY_EXTERNAL_LINK_ENTID'];
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
//# sourceMappingURL=EntityExternalLinkEntity.test.js.map