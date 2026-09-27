

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"assetUrl":{"a":true,"h":"Asset Url","n":"assetUrl","r":true,"sh":"The permanent asset URL where the file will be accessible after upload.","t":"`$STRING`","key$":"assetUrl","index$":0},"contentType":{"a":true,"h":"Content Type","n":"contentType","r":true,"sh":"The content type.","t":"`$STRING`","key$":"contentType","index$":1},"filename":{"a":true,"h":"Filename","n":"filename","r":true,"sh":"The filename.","t":"`$STRING`","key$":"filename","index$":2},"metaData":{"a":true,"h":"Meta Data","n":"metaData","r":false,"sh":"Optional metadata associated with the upload, such as the related issue or comment ID.","t":"`$ANY`","key$":"metaData","index$":3},"size":{"a":true,"h":"Size","n":"size","r":true,"sh":"The size of the uploaded file.","t":"`$INTEGER`","key$":"size","index$":4},"uploadUrl":{"a":true,"h":"Upload Url","n":"uploadUrl","r":true,"sh":"The pre-signed URL to which the file should be uploaded via a PUT request.","t":"`$STRING`","key$":"uploadUrl","index$":5}},"name":"upload_file","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST fileUpload","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"content_type","or":"content_type","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"filename","or":"filename","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"make_public","or":"make_public","r":false,"t":"`$BOOLEAN`","index$":2},{"a":true,"k":"param","n":"meta_data","or":"meta_data","r":false,"t":"`$ANY`","index$":3},{"a":true,"k":"param","n":"size","or":"size","r":true,"t":"`$INTEGER`","index$":4}]},"gq":{"doc":"mutation UploadFileCreateFileUpload($contentType: String!, $filename: String!, $makePublic: Boolean, $metaData: JSON, $size: Int!) { fileUpload(contentType: $contentType, filename: $filename, makePublic: $makePublic, metaData: $metaData, size: $size) { uploadFile { ...UploadFileFields } success } } fragment UploadFileFields on UploadFile { assetUrl contentType filename metaData size uploadUrl }","field":"fileUpload","optype":"mutation","vars":[{"from":"contentType","gqltype":"String!","name":"contentType"},{"from":"filename","gqltype":"String!","name":"filename"},{"from":"makePublic","gqltype":"Boolean","name":"makePublic"},{"from":"metaData","gqltype":"JSON","name":"metaData"},{"from":"size","gqltype":"Int!","name":"size"}]},"k":"graphql","m":"POST","o":"fileUpload","q":{"$action":"file_upload","exist":["content_type","filename","size"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.fileUpload.uploadFile`"},"index$":0},{"a":true,"co":{"id":"POST importFileUpload","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"content_type","or":"content_type","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"filename","or":"filename","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"meta_data","or":"meta_data","r":false,"t":"`$ANY`","index$":2},{"a":true,"k":"param","n":"size","or":"size","r":true,"t":"`$INTEGER`","index$":3}]},"gq":{"doc":"mutation UploadFileCreateImportFileUpload($contentType: String!, $filename: String!, $metaData: JSON, $size: Int!) { importFileUpload(contentType: $contentType, filename: $filename, metaData: $metaData, size: $size) { uploadFile { ...UploadFileFields } success } } fragment UploadFileFields on UploadFile { assetUrl contentType filename metaData size uploadUrl }","field":"importFileUpload","optype":"mutation","vars":[{"from":"contentType","gqltype":"String!","name":"contentType"},{"from":"filename","gqltype":"String!","name":"filename"},{"from":"metaData","gqltype":"JSON","name":"metaData"},{"from":"size","gqltype":"Int!","name":"size"}]},"k":"graphql","m":"POST","o":"importFileUpload","q":{"$action":"import_file_upload","exist":["content_type","filename","size"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.importFileUpload.uploadFile`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"upload_file","name__orig":"upload_file","Name":"UploadFile","name_":"upload_file","name-":"upload-file","NAME":"UPLOAD_FILE","index$":79}, {"active":true,"entity":"upload_file","key$":"BasicUploadFileFlow","kind":"basic","name":"BasicUploadFileFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"upload_file_ref01"},"m":{"content_type":"content_type01","filename":"filename01","meta_data":"meta_data01","size":"size01"},"o":"create","s":[],"v":[],"index$":0}]}, 'UploadFile', {"POST fileUpload":{"protocol":"graphql"},"POST importFileUpload":{"protocol":"graphql"}})
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
    ['upload_file01','upload_file02','upload_file03','content_type01','filename01','meta_data01','size01'],
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
  
