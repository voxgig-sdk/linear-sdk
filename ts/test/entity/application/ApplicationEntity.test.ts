

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


describe('ApplicationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.Application()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'application.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"clientId","req":true,"short":"OAuth application's client ID.","type":"`$STRING`","index$":0},{"active":true,"name":"description","req":false,"short":"Information about the application.","type":"`$STRING`","index$":1},{"active":true,"name":"developer","req":true,"short":"Name of the developer.","type":"`$STRING`","index$":2},{"active":true,"name":"developerUrl","req":true,"short":"URL of the developer's website, homepage, or documentation.","type":"`$STRING`","index$":3},{"active":true,"name":"id","req":true,"short":"OAuth application's ID.","type":"`$STRING`","index$":4},{"active":true,"name":"imageUrl","req":false,"short":"Image of the application.","type":"`$STRING`","index$":5},{"active":true,"name":"name","req":true,"short":"Application name.","type":"`$STRING`","index$":6}],"id":{"field":"id","name":"id"},"name":"application","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"client_id","orig":"client_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST applicationInfo","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"clientId\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"Retrieves public information about an OAuth application by its client ID. Used during the authorization flow to display application details to the user.\",\"gqltype\":\"Application!\",\"list\":false,\"name\":\"applicationInfo\",\"reqd\":true,\"type\":\"Application\"},\"invocation\":{\"doc\":\"query ApplicationLoad($clientId: String!) { applicationInfo(clientId: $clientId) { ...ApplicationFields } } fragment ApplicationFields on Application { clientId description developer developerUrl id imageUrl name }\",\"field\":\"applicationInfo\",\"optype\":\"query\",\"vars\":[{\"from\":\"clientId\",\"gqltype\":\"String!\",\"name\":\"clientId\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"query ApplicationLoad($clientId: String!) { applicationInfo(clientId: $clientId) { ...ApplicationFields } } fragment ApplicationFields on Application { clientId description developer developerUrl id imageUrl name }","field":"applicationInfo","optype":"query","vars":[{"from":"clientId","gqltype":"String!","name":"clientId"}]},"kind":"graphql","method":"POST","orig":"applicationInfo","segments":[],"select":{"exist":["client_id"]},"transform":{"req":"`reqdata`","res":"`body.data.applicationInfo`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"application","name__orig":"application","Name":"Application","name_":"application","name-":"application","NAME":"APPLICATION","index$":5}, {"active":true,"entity":"application","key$":"BasicApplicationFlow","kind":"basic","name":"BasicApplicationFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"application_ref01","srcdatavar":"application_ref01_data","suffix":"_dt0"},"match":{"client_id":"client01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-application_ref01"}}],"index$":0}]}, 'Application')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let application_ref01_data = Object.values(setup.data.existing.application)[0] as any

    // LOAD
    const application_ref01_ent = client.Application()
    const application_ref01_match_dt0: any = {}
    application_ref01_match_dt0.id = application_ref01_data.id
    const application_ref01_data_dt0 = (await application_ref01_ent.load(application_ref01_match_dt0)).data()
    assert(application_ref01_data_dt0.id === application_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/application/ApplicationTestData.json')

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
    ['application01','application02','application03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_APPLICATION_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_APPLICATION_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_APPLICATION_ENTID']
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
  
