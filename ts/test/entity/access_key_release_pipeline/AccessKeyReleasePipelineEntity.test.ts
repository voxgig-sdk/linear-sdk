

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier of the release pipeline.","t":"`$STRING`","key$":"id","index$":0},"includePathPatterns":{"a":true,"h":"Include Path Patterns","n":"includePathPatterns","r":true,"sh":"Glob patterns used to filter commits by changed file path.","t":"`$STRING`","key$":"includePathPatterns","index$":1}},"id":{"field":"id","name":"id"},"name":"access_key_release_pipeline","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"POST releasePipelineByAccessKey","source":"graphql","version":2},"g":{},"gq":{"doc":"query AccessKeyReleasePipelineLoad { releasePipelineByAccessKey { ...AccessKeyReleasePipelineFields } } fragment AccessKeyReleasePipelineFields on AccessKeyReleasePipeline { id includePathPatterns }","field":"releasePipelineByAccessKey","optype":"query","vars":[]},"k":"graphql","m":"POST","o":"releasePipelineByAccessKey","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.releasePipelineByAccessKey`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"access_key_release_pipeline","name__orig":"access_key_release_pipeline","Name":"AccessKeyReleasePipeline","name_":"access_key_release_pipeline","name-":"access-key-release-pipeline","NAME":"ACCESS_KEY_RELEASE_PIPELINE","index$":1}, {"active":true,"entity":"access_key_release_pipeline","key$":"BasicAccessKeyReleasePipelineFlow","kind":"basic","name":"BasicAccessKeyReleasePipelineFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"access_key_release_pipeline_ref01","srcdatavar":"access_key_release_pipeline_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-access_key_release_pipeline_ref01"}}],"index$":0}]}, 'AccessKeyReleasePipeline', {"POST releasePipelineByAccessKey":{"protocol":"graphql"}})
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
  
