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
(0, node_test_1.describe)('UploadFileEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LINEAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LinearSDK.test();
        const ent = testsdk.UploadFile();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LINEAR_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'upload_file.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "assetUrl", "req": true, "short": "The permanent asset URL where the file will be accessible after upload.", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "contentType", "req": true, "short": "The content type.", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "filename", "req": true, "short": "The filename.", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "metaData", "req": false, "short": "Optional metadata associated with the upload, such as the related issue or comment ID.", "type": "`$ANY`", "index$": 3 }, { "active": true, "name": "size", "req": true, "short": "The size of the uploaded file.", "type": "`$INTEGER`", "index$": 4 }, { "active": true, "name": "uploadUrl", "req": true, "short": "The pre-signed URL to which the file should be uploaded via a PUT request.", "type": "`$STRING`", "index$": 5 }], "name": "upload_file", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "content_type", "orig": "content_type", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "filename", "orig": "filename", "reqd": true, "type": "`$STRING`", "index$": 1 }, { "active": true, "kind": "param", "name": "make_public", "orig": "make_public", "reqd": false, "type": "`$BOOLEAN`", "index$": 2 }, { "active": true, "kind": "param", "name": "meta_data", "orig": "meta_data", "reqd": false, "type": "`$ANY`", "index$": 3 }, { "active": true, "kind": "param", "name": "size", "orig": "size", "reqd": true, "type": "`$INTEGER`", "index$": 4 }] }, "contract": { "id": "POST fileUpload", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"contentType\",\"reqd\":true,\"type\":\"String\"},{\"gqltype\":\"String!\",\"name\":\"filename\",\"reqd\":true,\"type\":\"String\"},{\"gqltype\":\"Boolean\",\"name\":\"makePublic\",\"reqd\":false,\"type\":\"Boolean\"},{\"gqltype\":\"JSON\",\"name\":\"metaData\",\"reqd\":false,\"type\":\"JSON\"},{\"gqltype\":\"Int!\",\"name\":\"size\",\"reqd\":true,\"type\":\"Int\"}],\"deprecated\":false,\"desc\":\"XHR request payload to upload an images, video and other attachments directly to Linear's cloud storage.\",\"gqltype\":\"UploadPayload!\",\"list\":false,\"name\":\"fileUpload\",\"reqd\":true,\"type\":\"UploadPayload\"},\"invocation\":{\"doc\":\"mutation UploadFileCreateFileUpload($contentType: String!, $filename: String!, $makePublic: Boolean, $metaData: JSON, $size: Int!) { fileUpload(contentType: $contentType, filename: $filename, makePublic: $makePublic, metaData: $metaData, size: $size) { uploadFile { ...UploadFileFields } success } } fragment UploadFileFields on UploadFile { assetUrl contentType filename metaData size uploadUrl }\",\"field\":\"fileUpload\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"contentType\",\"gqltype\":\"String!\",\"name\":\"contentType\"},{\"from\":\"filename\",\"gqltype\":\"String!\",\"name\":\"filename\"},{\"from\":\"makePublic\",\"gqltype\":\"Boolean\",\"name\":\"makePublic\"},{\"from\":\"metaData\",\"gqltype\":\"JSON\",\"name\":\"metaData\"},{\"from\":\"size\",\"gqltype\":\"Int!\",\"name\":\"size\"}]},\"protocol\":\"graphql\",\"types\":{\"Boolean\":{\"desc\":\"The `Boolean` scalar type represents `true` or `false`.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Boolean\"},\"Int\":{\"desc\":\"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Int\"},\"JSON\":{\"desc\":\"The `JSON` scalar type represents arbitrary values as *stringified* JSON\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"JSON\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "mutation UploadFileCreateFileUpload($contentType: String!, $filename: String!, $makePublic: Boolean, $metaData: JSON, $size: Int!) { fileUpload(contentType: $contentType, filename: $filename, makePublic: $makePublic, metaData: $metaData, size: $size) { uploadFile { ...UploadFileFields } success } } fragment UploadFileFields on UploadFile { assetUrl contentType filename metaData size uploadUrl }", "field": "fileUpload", "optype": "mutation", "vars": [{ "from": "contentType", "gqltype": "String!", "name": "contentType" }, { "from": "filename", "gqltype": "String!", "name": "filename" }, { "from": "makePublic", "gqltype": "Boolean", "name": "makePublic" }, { "from": "metaData", "gqltype": "JSON", "name": "metaData" }, { "from": "size", "gqltype": "Int!", "name": "size" }] }, "kind": "graphql", "method": "POST", "orig": "fileUpload", "segments": [], "select": { "$action": "file_upload", "exist": ["content_type", "filename", "size"] }, "transform": { "req": "`reqdata`", "res": "`body.data.fileUpload.uploadFile`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "content_type", "orig": "content_type", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "filename", "orig": "filename", "reqd": true, "type": "`$STRING`", "index$": 1 }, { "active": true, "kind": "param", "name": "meta_data", "orig": "meta_data", "reqd": false, "type": "`$ANY`", "index$": 2 }, { "active": true, "kind": "param", "name": "size", "orig": "size", "reqd": true, "type": "`$INTEGER`", "index$": 3 }] }, "contract": { "id": "POST importFileUpload", "json": "{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"contentType\",\"reqd\":true,\"type\":\"String\"},{\"gqltype\":\"String!\",\"name\":\"filename\",\"reqd\":true,\"type\":\"String\"},{\"gqltype\":\"JSON\",\"name\":\"metaData\",\"reqd\":false,\"type\":\"JSON\"},{\"gqltype\":\"Int!\",\"name\":\"size\",\"reqd\":true,\"type\":\"Int\"}],\"deprecated\":false,\"desc\":\"XHR request payload to upload a file for import, directly to Linear's cloud storage.\",\"gqltype\":\"UploadPayload!\",\"list\":false,\"name\":\"importFileUpload\",\"reqd\":true,\"type\":\"UploadPayload\"},\"invocation\":{\"doc\":\"mutation UploadFileCreateImportFileUpload($contentType: String!, $filename: String!, $metaData: JSON, $size: Int!) { importFileUpload(contentType: $contentType, filename: $filename, metaData: $metaData, size: $size) { uploadFile { ...UploadFileFields } success } } fragment UploadFileFields on UploadFile { assetUrl contentType filename metaData size uploadUrl }\",\"field\":\"importFileUpload\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"contentType\",\"gqltype\":\"String!\",\"name\":\"contentType\"},{\"from\":\"filename\",\"gqltype\":\"String!\",\"name\":\"filename\"},{\"from\":\"metaData\",\"gqltype\":\"JSON\",\"name\":\"metaData\"},{\"from\":\"size\",\"gqltype\":\"Int!\",\"name\":\"size\"}]},\"protocol\":\"graphql\",\"types\":{\"Int\":{\"desc\":\"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Int\"},\"JSON\":{\"desc\":\"The `JSON` scalar type represents arbitrary values as *stringified* JSON\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"JSON\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}", "source": "graphql", "version": 1 }, "graphql": { "doc": "mutation UploadFileCreateImportFileUpload($contentType: String!, $filename: String!, $metaData: JSON, $size: Int!) { importFileUpload(contentType: $contentType, filename: $filename, metaData: $metaData, size: $size) { uploadFile { ...UploadFileFields } success } } fragment UploadFileFields on UploadFile { assetUrl contentType filename metaData size uploadUrl }", "field": "importFileUpload", "optype": "mutation", "vars": [{ "from": "contentType", "gqltype": "String!", "name": "contentType" }, { "from": "filename", "gqltype": "String!", "name": "filename" }, { "from": "metaData", "gqltype": "JSON", "name": "metaData" }, { "from": "size", "gqltype": "Int!", "name": "size" }] }, "kind": "graphql", "method": "POST", "orig": "importFileUpload", "segments": [], "select": { "$action": "import_file_upload", "exist": ["content_type", "filename", "size"] }, "transform": { "req": "`reqdata`", "res": "`body.data.importFileUpload.uploadFile`" }, "index$": 1 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "upload_file", "name__orig": "upload_file", "Name": "UploadFile", "name_": "upload_file", "name-": "upload-file", "NAME": "UPLOAD_FILE", "index$": 79 }, { "active": true, "entity": "upload_file", "key$": "BasicUploadFileFlow", "kind": "basic", "name": "BasicUploadFileFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "upload_file_ref01" }, "match": { "content_type": "content_type01", "filename": "filename01", "meta_data": "meta_data01", "size": "size01" }, "op": "create", "spec": [], "valid": [], "index$": 0 }] }, 'UploadFile');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const upload_file_ref01_ent = client.UploadFile();
        let upload_file_ref01_data = setup.data.new.upload_file['upload_file_ref01'];
        upload_file_ref01_data['content_type'] = setup.idmap['content_type01'];
        upload_file_ref01_data['filename'] = setup.idmap['filename01'];
        upload_file_ref01_data['meta_data'] = setup.idmap['meta_data01'];
        upload_file_ref01_data['size'] = setup.idmap['size01'];
        upload_file_ref01_data = (await upload_file_ref01_ent.create(upload_file_ref01_data)).data();
        (0, node_assert_1.default)(null != upload_file_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/upload_file/UploadFileTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LinearSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['upload_file01', 'upload_file02', 'upload_file03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LINEAR_TEST_UPLOAD_FILE_ENTID': idmap,
        'LINEAR_TEST_LIVE': 'FALSE',
        'LINEAR_TEST_EXPLAIN': 'FALSE',
        'LINEAR_APIKEY': '',
    });
    idmap = env['LINEAR_TEST_UPLOAD_FILE_ENTID'];
    const live = 'TRUE' === env.LINEAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LINEAR_TEST_UPLOAD_FILE_ENTID'];
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
//# sourceMappingURL=UploadFileEntity.test.js.map