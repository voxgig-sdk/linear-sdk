

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


describe('TeamEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.Team()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'team.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"description","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"id","req":true,"type":"`$STRING`","index$":1},{"active":true,"name":"key","req":true,"type":"`$STRING`","index$":2},{"active":true,"name":"name","req":true,"type":"`$STRING`","index$":3}],"id":{"field":"id","name":"id"},"name":"team","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"after","orig":"after","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"first","orig":"first","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"POST teams","json":"{\"field\":{\"args\":[{\"gqltype\":\"Int\",\"name\":\"first\",\"reqd\":false,\"type\":\"Int\"},{\"gqltype\":\"String\",\"name\":\"after\",\"reqd\":false,\"type\":\"String\"}],\"deprecated\":false,\"gqltype\":\"[Team!]!\",\"list\":true,\"name\":\"teams\",\"reqd\":true,\"type\":\"Team\"},\"invocation\":{\"doc\":\"query TeamList($first: Int, $after: String) { teams(first: $first, after: $after) { ...TeamFields } } fragment TeamFields on Team { description id key name }\",\"field\":\"teams\",\"optype\":\"query\",\"vars\":[{\"from\":\"first\",\"gqltype\":\"Int\",\"name\":\"first\"},{\"from\":\"after\",\"gqltype\":\"String\",\"name\":\"after\"}]},\"protocol\":\"graphql\",\"types\":{\"Int\":{\"desc\":\"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Int\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"query TeamList($first: Int, $after: String) { teams(first: $first, after: $after) { ...TeamFields } } fragment TeamFields on Team { description id key name }","field":"teams","optype":"query","vars":[{"from":"first","gqltype":"Int","name":"first"},{"from":"after","gqltype":"String","name":"after"}]},"kind":"graphql","method":"POST","orig":"teams","segments":[],"select":{},"transform":{"req":"`reqdata`","res":"`body.data.teams`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST team","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"gqltype\":\"Team\",\"list\":false,\"name\":\"team\",\"reqd\":false,\"type\":\"Team\"},\"invocation\":{\"doc\":\"query TeamLoad($id: String!) { team(id: $id) { ...TeamFields } } fragment TeamFields on Team { description id key name }\",\"field\":\"team\",\"optype\":\"query\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"query TeamLoad($id: String!) { team(id: $id) { ...TeamFields } } fragment TeamFields on Team { description id key name }","field":"team","optype":"query","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"kind":"graphql","method":"POST","orig":"team","segments":[],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data.team`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"team","name__orig":"team","Name":"Team","name_":"team","name-":"team","NAME":"TEAM","index$":1}, {"active":true,"entity":"team","key$":"BasicTeamFlow","kind":"basic","name":"BasicTeamFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"after":"after01","first":"first01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"team_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"team_ref01","srcdatavar":"team_ref01_data","suffix":"_dt0"},"match":{"id":"team01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-team_ref01"}}],"index$":1}]}, 'Team')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let team_ref01_data = Object.values(setup.data.existing.team)[0] as any

    // LIST
    const team_ref01_ent = client.Team()
    const team_ref01_match: any = {}
    team_ref01_match['after'] = setup.idmap['after01']
    team_ref01_match['first'] = setup.idmap['first01']

    const team_ref01_list = (await team_ref01_ent.list(team_ref01_match)).map((e: any) => e.data())


    // LOAD
    const team_ref01_match_dt0: any = {}
    team_ref01_match_dt0.id = team_ref01_data.id
    const team_ref01_data_dt0 = (await team_ref01_ent.load(team_ref01_match_dt0)).data()
    assert(team_ref01_data_dt0.id === team_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/team/TeamTestData.json')

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
    ['team01','team02','team03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_TEAM_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_TEAM_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_TEAM_ENTID']
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
  
