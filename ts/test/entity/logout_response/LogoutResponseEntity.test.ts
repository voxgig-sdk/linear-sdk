

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


describe('LogoutResponseEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.LogoutResponse()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'logout_response.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"success","req":true,"short":"Whether the operation was successful.","type":"`$BOOLEAN`","index$":0}],"name":"logout_response","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"reason","orig":"reason","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST logout","json":"{\"field\":{\"args\":[{\"gqltype\":\"String\",\"name\":\"reason\",\"reqd\":false,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"Logout the client.\",\"gqltype\":\"LogoutResponse!\",\"list\":false,\"name\":\"logout\",\"reqd\":true,\"type\":\"LogoutResponse\"},\"invocation\":{\"doc\":\"mutation LogoutResponseCreateLogout($reason: String) { logout(reason: $reason) { ...LogoutResponseFields } } fragment LogoutResponseFields on LogoutResponse { success }\",\"field\":\"logout\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"reason\",\"gqltype\":\"String\",\"name\":\"reason\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation LogoutResponseCreateLogout($reason: String) { logout(reason: $reason) { ...LogoutResponseFields } } fragment LogoutResponseFields on LogoutResponse { success }","field":"logout","optype":"mutation","vars":[{"from":"reason","gqltype":"String","name":"reason"}]},"kind":"graphql","method":"POST","orig":"logout","segments":[],"select":{"$action":"logout"},"transform":{"req":"`reqdata`","res":"`body.data.logout`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"reason","orig":"reason","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST logoutAllSessions","json":"{\"field\":{\"args\":[{\"gqltype\":\"String\",\"name\":\"reason\",\"reqd\":false,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"Logout all of user's sessions including the active one.\",\"gqltype\":\"LogoutResponse!\",\"list\":false,\"name\":\"logoutAllSessions\",\"reqd\":true,\"type\":\"LogoutResponse\"},\"invocation\":{\"doc\":\"mutation LogoutResponseCreateLogoutAllSession($reason: String) { logoutAllSessions(reason: $reason) { ...LogoutResponseFields } } fragment LogoutResponseFields on LogoutResponse { success }\",\"field\":\"logoutAllSessions\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"reason\",\"gqltype\":\"String\",\"name\":\"reason\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation LogoutResponseCreateLogoutAllSession($reason: String) { logoutAllSessions(reason: $reason) { ...LogoutResponseFields } } fragment LogoutResponseFields on LogoutResponse { success }","field":"logoutAllSessions","optype":"mutation","vars":[{"from":"reason","gqltype":"String","name":"reason"}]},"kind":"graphql","method":"POST","orig":"logoutAllSessions","segments":[],"select":{"$action":"logout_all_session"},"transform":{"req":"`reqdata`","res":"`body.data.logoutAllSessions`"},"index$":1},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"reason","orig":"reason","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST logoutOtherSessions","json":"{\"field\":{\"args\":[{\"gqltype\":\"String\",\"name\":\"reason\",\"reqd\":false,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"Logout all of user's sessions excluding the current one.\",\"gqltype\":\"LogoutResponse!\",\"list\":false,\"name\":\"logoutOtherSessions\",\"reqd\":true,\"type\":\"LogoutResponse\"},\"invocation\":{\"doc\":\"mutation LogoutResponseCreateLogoutOtherSession($reason: String) { logoutOtherSessions(reason: $reason) { ...LogoutResponseFields } } fragment LogoutResponseFields on LogoutResponse { success }\",\"field\":\"logoutOtherSessions\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"reason\",\"gqltype\":\"String\",\"name\":\"reason\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation LogoutResponseCreateLogoutOtherSession($reason: String) { logoutOtherSessions(reason: $reason) { ...LogoutResponseFields } } fragment LogoutResponseFields on LogoutResponse { success }","field":"logoutOtherSessions","optype":"mutation","vars":[{"from":"reason","gqltype":"String","name":"reason"}]},"kind":"graphql","method":"POST","orig":"logoutOtherSessions","segments":[],"select":{"$action":"logout_other_session"},"transform":{"req":"`reqdata`","res":"`body.data.logoutOtherSessions`"},"index$":2}],"key$":"create"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"session_id","orig":"session_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST logoutSession","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"sessionId\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"Logout an individual session with its ID.\",\"gqltype\":\"LogoutResponse!\",\"list\":false,\"name\":\"logoutSession\",\"reqd\":true,\"type\":\"LogoutResponse\"},\"invocation\":{\"doc\":\"mutation LogoutResponseUpdateLogoutSession($sessionId: String!) { logoutSession(sessionId: $sessionId) { ...LogoutResponseFields } } fragment LogoutResponseFields on LogoutResponse { success }\",\"field\":\"logoutSession\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"sessionId\",\"gqltype\":\"String!\",\"name\":\"sessionId\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation LogoutResponseUpdateLogoutSession($sessionId: String!) { logoutSession(sessionId: $sessionId) { ...LogoutResponseFields } } fragment LogoutResponseFields on LogoutResponse { success }","field":"logoutSession","optype":"mutation","vars":[{"from":"sessionId","gqltype":"String!","name":"sessionId"}]},"kind":"graphql","method":"POST","orig":"logoutSession","segments":[],"select":{"$action":"logout_session","exist":["session_id"]},"transform":{"req":"`reqdata`","res":"`body.data.logoutSession`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"logout_response","name__orig":"logout_response","Name":"LogoutResponse","name_":"logout_response","name-":"logout-response","NAME":"LOGOUT_RESPONSE","index$":47}, {"active":true,"entity":"logout_response","key$":"BasicLogoutResponseFlow","kind":"basic","name":"BasicLogoutResponseFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"logout_response_ref01"},"match":{"reason":"reason01","session_id":"session01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{"session_id":"session01"},"input":{"ref":"logout_response_ref01","srcdatavar":"logout_response_ref01_data","suffix":"_up0"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-logout_response_ref01"}}],"valid":[],"index$":1}]}, 'LogoutResponse')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const logout_response_ref01_ent = client.LogoutResponse()
    let logout_response_ref01_data = setup.data.new.logout_response['logout_response_ref01']
    logout_response_ref01_data['reason'] = setup.idmap['reason01']
    logout_response_ref01_data['session_id'] = setup.idmap['session01']

    logout_response_ref01_data = (await logout_response_ref01_ent.create(logout_response_ref01_data)).data()
    assert(null != logout_response_ref01_data)


    // UPDATE
    const logout_response_ref01_data_up0: any = {}
    logout_response_ref01_data_up0 ['session_id'] = setup.idmap['session_id']

    const logout_response_ref01_resdata_up0 = (await logout_response_ref01_ent.update(logout_response_ref01_data_up0)).data()
    assert(null != logout_response_ref01_resdata_up0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/logout_response/LogoutResponseTestData.json')

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
    ['logout_response01','logout_response02','logout_response03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_LOGOUT_RESPONSE_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_LOGOUT_RESPONSE_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_LOGOUT_RESPONSE_ENTID']
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
  
