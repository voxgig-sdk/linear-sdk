

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


describe('DiffEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.Diff()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'diff.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"additions":{"a":true,"h":"Additions","n":"additions","r":true,"sh":"[Internal] The total number of added lines across the diff.","t":"`$NUMBER`","key$":"additions","index$":0},"agentSession":{"a":true,"h":"Agent Session","n":"agentSession","r":false,"sh":"The agent session the diff belongs to.","t":"`$OBJECT`","key$":"agentSession","index$":1},"archivedAt":{"a":true,"h":"Archived At","n":"archivedAt","r":false,"sh":"The time at which the entity was archived.","t":"`$ANY`","key$":"archivedAt","index$":2},"contentHash":{"a":true,"h":"Content Hash","n":"contentHash","r":true,"sh":"[Internal] The opaque content hash identifying the diff's content in code.storage.","t":"`$STRING`","key$":"contentHash","index$":3},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"The time at which the entity was created.","t":"`$ANY`","key$":"createdAt","index$":4},"creator":{"a":true,"h":"Creator","n":"creator","r":false,"sh":"The user responsible for the diff.","t":"`$OBJECT`","key$":"creator","index$":5},"deletions":{"a":true,"h":"Deletions","n":"deletions","r":true,"sh":"[Internal] The total number of deleted lines across the diff.","t":"`$NUMBER`","key$":"deletions","index$":6},"fileCount":{"a":true,"h":"File Count","n":"fileCount","r":true,"sh":"[Internal] The number of changed files in the diff.","t":"`$NUMBER`","key$":"fileCount","index$":7},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier of the entity.","t":"`$STRING`","key$":"id","index$":8},"organization":{"a":true,"h":"Organization","n":"organization","r":false,"sh":"The workspace the diff belongs to.","t":"`$OBJECT`","key$":"organization","index$":9},"pullRequest":{"a":true,"h":"Pull Request","n":"pullRequest","r":false,"sh":"The pull request the diff was promoted to when opened for review.","t":"`$OBJECT`","key$":"pullRequest","index$":10},"slugId":{"a":true,"h":"Slug Id","n":"slugId","r":true,"sh":"[Internal] The diff's unique URL slug.","t":"`$STRING`","key$":"slugId","index$":11},"truncated":{"a":true,"h":"Truncated","n":"truncated","r":true,"sh":"[Internal] Whether oversized files were omitted when the diff was computed.","t":"`$BOOLEAN`","key$":"truncated","index$":12},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"The last time at which the entity was meaningfully updated.","t":"`$ANY`","key$":"updatedAt","index$":13}},"id":{"field":"id","name":"id"},"name":"diff","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"POST diff","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"query DiffLoad($id: String!) { diff(id: $id) { ...DiffFields } } fragment DiffFields on Diff { additions agentSession { id } archivedAt contentHash createdAt creator { id } deletions fileCount id organization { id } pullRequest { id } slugId truncated updatedAt }","field":"diff","optype":"query","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"diff","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.diff`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"diff","name__orig":"diff","Name":"Diff","name_":"diff","name-":"diff","NAME":"DIFF","index$":19}, {"active":true,"entity":"diff","key$":"BasicDiffFlow","kind":"basic","name":"BasicDiffFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"diff_ref01","srcdatavar":"diff_ref01_data","suffix":"_dt0"},"m":{"id":"diff01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-diff_ref01"}}],"index$":0}]}, 'Diff', {"POST diff":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let diff_ref01_data = Object.values(setup.data.existing.diff)[0] as any

    // LOAD
    const diff_ref01_ent = client.Diff()
    const diff_ref01_match_dt0: any = {}
    diff_ref01_match_dt0.id = diff_ref01_data.id
    const diff_ref01_data_dt0 = (await diff_ref01_ent.load(diff_ref01_match_dt0)).data()
    assert(diff_ref01_data_dt0.id === diff_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/diff/DiffTestData.json')

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
    ['diff01','diff02','diff03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_DIFF_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_DIFF_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_DIFF_ENTID']
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
  
