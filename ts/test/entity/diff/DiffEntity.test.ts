

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"additions","req":true,"short":"[Internal] The total number of added lines across the diff.","type":"`$NUMBER`","index$":0},{"active":true,"name":"agentSession","req":false,"short":"The agent session the diff belongs to.","type":"`$OBJECT`","index$":1},{"active":true,"name":"archivedAt","req":false,"short":"The time at which the entity was archived.","type":"`$ANY`","index$":2},{"active":true,"name":"contentHash","req":true,"short":"[Internal] The opaque content hash identifying the diff's content in code.storage.","type":"`$STRING`","index$":3},{"active":true,"name":"createdAt","req":true,"short":"The time at which the entity was created.","type":"`$ANY`","index$":4},{"active":true,"name":"creator","req":false,"short":"The user responsible for the diff.","type":"`$OBJECT`","index$":5},{"active":true,"name":"deletions","req":true,"short":"[Internal] The total number of deleted lines across the diff.","type":"`$NUMBER`","index$":6},{"active":true,"name":"fileCount","req":true,"short":"[Internal] The number of changed files in the diff.","type":"`$NUMBER`","index$":7},{"active":true,"name":"id","req":true,"short":"The unique identifier of the entity.","type":"`$STRING`","index$":8},{"active":true,"name":"organization","req":false,"short":"The workspace the diff belongs to.","type":"`$OBJECT`","index$":9},{"active":true,"name":"pullRequest","req":false,"short":"The pull request the diff was promoted to when opened for review.","type":"`$OBJECT`","index$":10},{"active":true,"name":"slugId","req":true,"short":"[Internal] The diff's unique URL slug.","type":"`$STRING`","index$":11},{"active":true,"name":"truncated","req":true,"short":"[Internal] Whether oversized files were omitted when the diff was computed.","type":"`$BOOLEAN`","index$":12},{"active":true,"name":"updatedAt","req":true,"short":"The last time at which the entity was meaningfully updated.","type":"`$ANY`","index$":13}],"id":{"field":"id","name":"id"},"name":"diff","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST diff","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"[Internal] A specific diff.\",\"gqltype\":\"Diff!\",\"list\":false,\"name\":\"diff\",\"reqd\":true,\"type\":\"Diff\"},\"invocation\":{\"doc\":\"query DiffLoad($id: String!) { diff(id: $id) { ...DiffFields } } fragment DiffFields on Diff { additions agentSession { id } archivedAt contentHash createdAt creator { id } deletions fileCount id organization { id } pullRequest { id } slugId truncated updatedAt }\",\"field\":\"diff\",\"optype\":\"query\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"query DiffLoad($id: String!) { diff(id: $id) { ...DiffFields } } fragment DiffFields on Diff { additions agentSession { id } archivedAt contentHash createdAt creator { id } deletions fileCount id organization { id } pullRequest { id } slugId truncated updatedAt }","field":"diff","optype":"query","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"kind":"graphql","method":"POST","orig":"diff","segments":[],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data.diff`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"diff","name__orig":"diff","Name":"Diff","name_":"diff","name-":"diff","NAME":"DIFF","index$":19}, {"active":true,"entity":"diff","key$":"BasicDiffFlow","kind":"basic","name":"BasicDiffFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"diff_ref01","srcdatavar":"diff_ref01_data","suffix":"_dt0"},"match":{"id":"diff01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-diff_ref01"}}],"index$":0}]}, 'Diff')
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
  
