

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


describe('PasskeyLoginStartResponseEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.PasskeyLoginStartResponse()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'passkey_login_start_response.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"options","req":true,"short":"The passkey authentication options to pass to the WebAuthn API.","type":"`$ANY`","index$":0},{"active":true,"name":"success","req":true,"short":"Whether the operation was successful.","type":"`$BOOLEAN`","index$":1}],"name":"passkey_login_start_response","op":{"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"auth_id","orig":"auth_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST passkeyLoginStart","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"authId\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"[INTERNAL] Starts passkey login process.\",\"gqltype\":\"PasskeyLoginStartResponse!\",\"list\":false,\"name\":\"passkeyLoginStart\",\"reqd\":true,\"type\":\"PasskeyLoginStartResponse\"},\"invocation\":{\"doc\":\"mutation PasskeyLoginStartResponseUpdatePasskeyLoginStart($authId: String!) { passkeyLoginStart(authId: $authId) { ...PasskeyLoginStartResponseFields } } fragment PasskeyLoginStartResponseFields on PasskeyLoginStartResponse { options success }\",\"field\":\"passkeyLoginStart\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"authId\",\"gqltype\":\"String!\",\"name\":\"authId\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation PasskeyLoginStartResponseUpdatePasskeyLoginStart($authId: String!) { passkeyLoginStart(authId: $authId) { ...PasskeyLoginStartResponseFields } } fragment PasskeyLoginStartResponseFields on PasskeyLoginStartResponse { options success }","field":"passkeyLoginStart","optype":"mutation","vars":[{"from":"authId","gqltype":"String!","name":"authId"}]},"kind":"graphql","method":"POST","orig":"passkeyLoginStart","segments":[],"select":{"$action":"passkey_login_start","exist":["auth_id"]},"transform":{"req":"`reqdata`","res":"`body.data.passkeyLoginStart`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"passkey_login_start_response","name__orig":"passkey_login_start_response","Name":"PasskeyLoginStartResponse","name_":"passkey_login_start_response","name-":"passkey-login-start-response","NAME":"PASSKEY_LOGIN_START_RESPONSE","index$":55}, {"active":true,"entity":"passkey_login_start_response","key$":"BasicPasskeyLoginStartResponseFlow","kind":"basic","name":"BasicPasskeyLoginStartResponseFlow","param":{},"step":[{"active":true,"data":{"auth_id":"auth01"},"input":{"ref":"passkey_login_start_response_ref01","srcdatavar":"passkey_login_start_response_ref01_data","suffix":"_up0"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-passkey_login_start_response_ref01"}}],"valid":[],"index$":0}]}, 'PasskeyLoginStartResponse')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let passkey_login_start_response_ref01_data = Object.values(setup.data.existing.passkey_login_start_response)[0] as any

    // UPDATE
    const passkey_login_start_response_ref01_ent = client.PasskeyLoginStartResponse()
    const passkey_login_start_response_ref01_data_up0: any = {}
    passkey_login_start_response_ref01_data_up0 ['auth_id'] = setup.idmap['auth_id']

    const passkey_login_start_response_ref01_resdata_up0 = (await passkey_login_start_response_ref01_ent.update(passkey_login_start_response_ref01_data_up0)).data()
    assert(null != passkey_login_start_response_ref01_resdata_up0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/passkey_login_start_response/PasskeyLoginStartResponseTestData.json')

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
    ['passkey_login_start_response01','passkey_login_start_response02','passkey_login_start_response03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_PASSKEY_LOGIN_START_RESPONSE_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_PASSKEY_LOGIN_START_RESPONSE_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_PASSKEY_LOGIN_START_RESPONSE_ENTID']
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
  
