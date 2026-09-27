

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"options":{"a":true,"h":"Options","n":"options","r":true,"sh":"The passkey authentication options to pass to the WebAuthn API.","t":"`$ANY`","key$":"options","index$":0},"success":{"a":true,"h":"Success","n":"success","r":true,"sh":"Whether the operation was successful.","t":"`$BOOLEAN`","key$":"success","index$":1}},"name":"passkey_login_start_response","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"POST passkeyLoginStart","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"auth_id","or":"auth_id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation PasskeyLoginStartResponseUpdatePasskeyLoginStart($authId: String!) { passkeyLoginStart(authId: $authId) { ...PasskeyLoginStartResponseFields } } fragment PasskeyLoginStartResponseFields on PasskeyLoginStartResponse { options success }","field":"passkeyLoginStart","optype":"mutation","vars":[{"from":"authId","gqltype":"String!","name":"authId"}]},"k":"graphql","m":"POST","o":"passkeyLoginStart","q":{"$action":"passkey_login_start","exist":["auth_id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.passkeyLoginStart`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"passkey_login_start_response","name__orig":"passkey_login_start_response","Name":"PasskeyLoginStartResponse","name_":"passkey_login_start_response","name-":"passkey-login-start-response","NAME":"PASSKEY_LOGIN_START_RESPONSE","index$":55}, {"active":true,"entity":"passkey_login_start_response","key$":"BasicPasskeyLoginStartResponseFlow","kind":"basic","name":"BasicPasskeyLoginStartResponseFlow","param":{},"step":[{"a":true,"d":{"auth_id":"auth01"},"i":{"ref":"passkey_login_start_response_ref01","srcdatavar":"passkey_login_start_response_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-passkey_login_start_response_ref01"}}],"v":[],"index$":0}]}, 'PasskeyLoginStartResponse', {"POST passkeyLoginStart":{"protocol":"graphql"}})
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
    ['passkey_login_start_response01','passkey_login_start_response02','passkey_login_start_response03','auth01'],
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
  
