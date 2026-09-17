

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


describe('AccessKeyReleasePipelineEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.AccessKeyReleasePipeline()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'access_key_release_pipeline.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":true,"short":"The unique identifier of the release pipeline.","type":"`$STRING`","index$":0},{"active":true,"name":"includePathPatterns","req":true,"short":"Glob patterns used to filter commits by changed file path.","type":"`$STRING`","index$":1}],"id":{"field":"id","name":"id"},"name":"access_key_release_pipeline","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{},"contract":{"id":"POST releasePipelineByAccessKey","json":"{\"field\":{\"args\":[],\"deprecated\":false,\"desc\":\"Returns the release pipeline associated with the access key.\",\"gqltype\":\"AccessKeyReleasePipeline!\",\"list\":false,\"name\":\"releasePipelineByAccessKey\",\"reqd\":true,\"type\":\"AccessKeyReleasePipeline\"},\"invocation\":{\"doc\":\"query AccessKeyReleasePipelineLoad { releasePipelineByAccessKey { ...AccessKeyReleasePipelineFields } } fragment AccessKeyReleasePipelineFields on AccessKeyReleasePipeline { id includePathPatterns }\",\"field\":\"releasePipelineByAccessKey\",\"optype\":\"query\",\"vars\":[]},\"protocol\":\"graphql\",\"types\":{},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"query AccessKeyReleasePipelineLoad { releasePipelineByAccessKey { ...AccessKeyReleasePipelineFields } } fragment AccessKeyReleasePipelineFields on AccessKeyReleasePipeline { id includePathPatterns }","field":"releasePipelineByAccessKey","optype":"query","vars":[]},"kind":"graphql","method":"POST","orig":"releasePipelineByAccessKey","segments":[],"select":{},"transform":{"req":"`reqdata`","res":"`body.data.releasePipelineByAccessKey`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"access_key_release_pipeline","name__orig":"access_key_release_pipeline","Name":"AccessKeyReleasePipeline","name_":"access_key_release_pipeline","name-":"access-key-release-pipeline","NAME":"ACCESS_KEY_RELEASE_PIPELINE","index$":1}, {"active":true,"entity":"access_key_release_pipeline","key$":"BasicAccessKeyReleasePipelineFlow","kind":"basic","name":"BasicAccessKeyReleasePipelineFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"access_key_release_pipeline_ref01","srcdatavar":"access_key_release_pipeline_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-access_key_release_pipeline_ref01"}}],"index$":0}]}, 'AccessKeyReleasePipeline')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let access_key_release_pipeline_ref01_data = Object.values(setup.data.existing.access_key_release_pipeline)[0] as any

    // LOAD
    const access_key_release_pipeline_ref01_ent = client.AccessKeyReleasePipeline()
    const access_key_release_pipeline_ref01_match_dt0: any = {}
    access_key_release_pipeline_ref01_match_dt0.id = access_key_release_pipeline_ref01_data.id
    const access_key_release_pipeline_ref01_data_dt0 = (await access_key_release_pipeline_ref01_ent.load(access_key_release_pipeline_ref01_match_dt0)).data()
    assert(access_key_release_pipeline_ref01_data_dt0.id === access_key_release_pipeline_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/access_key_release_pipeline/AccessKeyReleasePipelineTestData.json')

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
    ['access_key_release_pipeline01','access_key_release_pipeline02','access_key_release_pipeline03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_ACCESS_KEY_RELEASE_PIPELINE_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_ACCESS_KEY_RELEASE_PIPELINE_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_ACCESS_KEY_RELEASE_PIPELINE_ENTID']
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
  
