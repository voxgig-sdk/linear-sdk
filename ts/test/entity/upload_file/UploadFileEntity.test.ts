

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { LinearSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('UploadFileEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.UploadFile()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'upload_file.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"assetUrl","req":true,"short":"The permanent asset URL where the file will be accessible after upload.","type":"`$STRING`","index$":0},{"active":true,"name":"contentType","req":true,"short":"The content type.","type":"`$STRING`","index$":1},{"active":true,"name":"filename","req":true,"short":"The filename.","type":"`$STRING`","index$":2},{"active":true,"name":"metaData","req":false,"short":"Optional metadata associated with the upload, such as the related issue or comment ID.","type":"`$ANY`","index$":3},{"active":true,"name":"size","req":true,"short":"The size of the uploaded file.","type":"`$INTEGER`","index$":4},{"active":true,"name":"uploadUrl","req":true,"short":"The pre-signed URL to which the file should be uploaded via a PUT request.","type":"`$STRING`","index$":5}],"name":"upload_file","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"content_type","orig":"content_type","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"filename","orig":"filename","reqd":true,"type":"`$STRING`","index$":1},{"active":true,"kind":"param","name":"make_public","orig":"make_public","reqd":false,"type":"`$BOOLEAN`","index$":2},{"active":true,"kind":"param","name":"meta_data","orig":"meta_data","reqd":false,"type":"`$ANY`","index$":3},{"active":true,"kind":"param","name":"size","orig":"size","reqd":true,"type":"`$INTEGER`","index$":4}]},"contract":{"id":"POST fileUpload","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"contentType\",\"reqd\":true,\"type\":\"String\"},{\"gqltype\":\"String!\",\"name\":\"filename\",\"reqd\":true,\"type\":\"String\"},{\"gqltype\":\"Boolean\",\"name\":\"makePublic\",\"reqd\":false,\"type\":\"Boolean\"},{\"gqltype\":\"JSON\",\"name\":\"metaData\",\"reqd\":false,\"type\":\"JSON\"},{\"gqltype\":\"Int!\",\"name\":\"size\",\"reqd\":true,\"type\":\"Int\"}],\"deprecated\":false,\"desc\":\"XHR request payload to upload an images, video and other attachments directly to Linear's cloud storage.\",\"gqltype\":\"UploadPayload!\",\"list\":false,\"name\":\"fileUpload\",\"reqd\":true,\"type\":\"UploadPayload\"},\"invocation\":{\"doc\":\"mutation UploadFileCreateFileUpload($contentType: String!, $filename: String!, $makePublic: Boolean, $metaData: JSON, $size: Int!) { fileUpload(contentType: $contentType, filename: $filename, makePublic: $makePublic, metaData: $metaData, size: $size) { uploadFile { ...UploadFileFields } success } } fragment UploadFileFields on UploadFile { assetUrl contentType filename metaData size uploadUrl }\",\"field\":\"fileUpload\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"contentType\",\"gqltype\":\"String!\",\"name\":\"contentType\"},{\"from\":\"filename\",\"gqltype\":\"String!\",\"name\":\"filename\"},{\"from\":\"makePublic\",\"gqltype\":\"Boolean\",\"name\":\"makePublic\"},{\"from\":\"metaData\",\"gqltype\":\"JSON\",\"name\":\"metaData\"},{\"from\":\"size\",\"gqltype\":\"Int!\",\"name\":\"size\"}]},\"protocol\":\"graphql\",\"types\":{\"Boolean\":{\"desc\":\"The `Boolean` scalar type represents `true` or `false`.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Boolean\"},\"Int\":{\"desc\":\"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Int\"},\"JSON\":{\"desc\":\"The `JSON` scalar type represents arbitrary values as *stringified* JSON\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"JSON\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation UploadFileCreateFileUpload($contentType: String!, $filename: String!, $makePublic: Boolean, $metaData: JSON, $size: Int!) { fileUpload(contentType: $contentType, filename: $filename, makePublic: $makePublic, metaData: $metaData, size: $size) { uploadFile { ...UploadFileFields } success } } fragment UploadFileFields on UploadFile { assetUrl contentType filename metaData size uploadUrl }","field":"fileUpload","optype":"mutation","vars":[{"from":"contentType","gqltype":"String!","name":"contentType"},{"from":"filename","gqltype":"String!","name":"filename"},{"from":"makePublic","gqltype":"Boolean","name":"makePublic"},{"from":"metaData","gqltype":"JSON","name":"metaData"},{"from":"size","gqltype":"Int!","name":"size"}]},"kind":"graphql","method":"POST","orig":"fileUpload","segments":[],"select":{"$action":"file_upload","exist":["content_type","filename","size"]},"transform":{"req":"`reqdata`","res":"`body.data.fileUpload.uploadFile`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"content_type","orig":"content_type","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"filename","orig":"filename","reqd":true,"type":"`$STRING`","index$":1},{"active":true,"kind":"param","name":"meta_data","orig":"meta_data","reqd":false,"type":"`$ANY`","index$":2},{"active":true,"kind":"param","name":"size","orig":"size","reqd":true,"type":"`$INTEGER`","index$":3}]},"contract":{"id":"POST importFileUpload","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"contentType\",\"reqd\":true,\"type\":\"String\"},{\"gqltype\":\"String!\",\"name\":\"filename\",\"reqd\":true,\"type\":\"String\"},{\"gqltype\":\"JSON\",\"name\":\"metaData\",\"reqd\":false,\"type\":\"JSON\"},{\"gqltype\":\"Int!\",\"name\":\"size\",\"reqd\":true,\"type\":\"Int\"}],\"deprecated\":false,\"desc\":\"XHR request payload to upload a file for import, directly to Linear's cloud storage.\",\"gqltype\":\"UploadPayload!\",\"list\":false,\"name\":\"importFileUpload\",\"reqd\":true,\"type\":\"UploadPayload\"},\"invocation\":{\"doc\":\"mutation UploadFileCreateImportFileUpload($contentType: String!, $filename: String!, $metaData: JSON, $size: Int!) { importFileUpload(contentType: $contentType, filename: $filename, metaData: $metaData, size: $size) { uploadFile { ...UploadFileFields } success } } fragment UploadFileFields on UploadFile { assetUrl contentType filename metaData size uploadUrl }\",\"field\":\"importFileUpload\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"contentType\",\"gqltype\":\"String!\",\"name\":\"contentType\"},{\"from\":\"filename\",\"gqltype\":\"String!\",\"name\":\"filename\"},{\"from\":\"metaData\",\"gqltype\":\"JSON\",\"name\":\"metaData\"},{\"from\":\"size\",\"gqltype\":\"Int!\",\"name\":\"size\"}]},\"protocol\":\"graphql\",\"types\":{\"Int\":{\"desc\":\"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Int\"},\"JSON\":{\"desc\":\"The `JSON` scalar type represents arbitrary values as *stringified* JSON\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"JSON\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation UploadFileCreateImportFileUpload($contentType: String!, $filename: String!, $metaData: JSON, $size: Int!) { importFileUpload(contentType: $contentType, filename: $filename, metaData: $metaData, size: $size) { uploadFile { ...UploadFileFields } success } } fragment UploadFileFields on UploadFile { assetUrl contentType filename metaData size uploadUrl }","field":"importFileUpload","optype":"mutation","vars":[{"from":"contentType","gqltype":"String!","name":"contentType"},{"from":"filename","gqltype":"String!","name":"filename"},{"from":"metaData","gqltype":"JSON","name":"metaData"},{"from":"size","gqltype":"Int!","name":"size"}]},"kind":"graphql","method":"POST","orig":"importFileUpload","segments":[],"select":{"$action":"import_file_upload","exist":["content_type","filename","size"]},"transform":{"req":"`reqdata`","res":"`body.data.importFileUpload.uploadFile`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"upload_file","name__orig":"upload_file","Name":"UploadFile","name_":"upload_file","name-":"upload-file","NAME":"UPLOAD_FILE","index$":79}, {"active":true,"entity":"upload_file","key$":"BasicUploadFileFlow","kind":"basic","name":"BasicUploadFileFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"upload_file_ref01"},"match":{"content_type":"content_type01","filename":"filename01","meta_data":"meta_data01","size":"size01"},"op":"create","spec":[],"valid":[],"index$":0}]}, 'UploadFile')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const upload_file_ref01_ent = client.UploadFile()
    let upload_file_ref01_data = setup.data.new.upload_file['upload_file_ref01']
    upload_file_ref01_data['content_type'] = setup.idmap['content_type01']
    upload_file_ref01_data['filename'] = setup.idmap['filename01']
    upload_file_ref01_data['meta_data'] = setup.idmap['meta_data01']
    upload_file_ref01_data['size'] = setup.idmap['size01']

    upload_file_ref01_data = (await upload_file_ref01_ent.create(upload_file_ref01_data)).data()
    assert(null != upload_file_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/upload_file/UploadFileTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = LinearSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['upload_file01','upload_file02','upload_file03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_UPLOAD_FILE_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_UPLOAD_FILE_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_UPLOAD_FILE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new LinearSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
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
    ]))
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
  }

  return setup
}
  
