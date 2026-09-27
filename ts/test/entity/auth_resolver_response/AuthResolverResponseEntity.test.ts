

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


describe('AuthResolverResponseEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.AuthResolverResponse()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'auth_resolver_response.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"allowDomainAccess":{"a":true,"h":"Allow Domain Access","n":"allowDomainAccess","r":false,"sh":"Should the signup flow allow access for the domain.","t":"`$BOOLEAN`","key$":"allowDomainAccess","index$":0},"email":{"a":true,"h":"Email","n":"email","r":true,"sh":"Email for the authenticated account.","t":"`$STRING`","key$":"email","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"User account ID.","t":"`$STRING`","key$":"id","index$":2},"lastUsedOrganizationId":{"a":true,"h":"Last Used Organization Id","n":"lastUsedOrganizationId","r":false,"sh":"ID of the organization last accessed by the user.","t":"`$STRING`","key$":"lastUsedOrganizationId","index$":3},"service":{"a":true,"h":"Service","n":"service","r":false,"sh":"The authentication service used for the current session (e.g., google, email, saml).","t":"`$STRING`","key$":"service","index$":4}},"id":{"field":"id","name":"id"},"name":"auth_resolver_response","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST emailTokenUserAccountAuth","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation AuthResolverResponseCreateEmailTokenUserAccountAuth($input: TokenUserAccountAuthInput!) { emailTokenUserAccountAuth(input: $input) { ...AuthResolverResponseFields } } fragment AuthResolverResponseFields on AuthResolverResponse { allowDomainAccess email id lastUsedOrganizationId service }","field":"emailTokenUserAccountAuth","optype":"mutation","vars":[{"from":"","gqltype":"TokenUserAccountAuthInput!","name":"input"}]},"k":"graphql","m":"POST","o":"emailTokenUserAccountAuth","q":{"$action":"email_token_user_account_auth"},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.emailTokenUserAccountAuth`"},"index$":0},{"a":true,"co":{"id":"POST googleUserAccountAuth","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation AuthResolverResponseCreateGoogleUserAccountAuth($input: GoogleUserAccountAuthInput!) { googleUserAccountAuth(input: $input) { ...AuthResolverResponseFields } } fragment AuthResolverResponseFields on AuthResolverResponse { allowDomainAccess email id lastUsedOrganizationId service }","field":"googleUserAccountAuth","optype":"mutation","vars":[{"from":"","gqltype":"GoogleUserAccountAuthInput!","name":"input"}]},"k":"graphql","m":"POST","o":"googleUserAccountAuth","q":{"$action":"google_user_account_auth"},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.googleUserAccountAuth`"},"index$":1},{"a":true,"co":{"id":"POST samlTokenUserAccountAuth","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation AuthResolverResponseCreateSamlTokenUserAccountAuth($input: TokenUserAccountAuthInput!) { samlTokenUserAccountAuth(input: $input) { ...AuthResolverResponseFields } } fragment AuthResolverResponseFields on AuthResolverResponse { allowDomainAccess email id lastUsedOrganizationId service }","field":"samlTokenUserAccountAuth","optype":"mutation","vars":[{"from":"","gqltype":"TokenUserAccountAuthInput!","name":"input"}]},"k":"graphql","m":"POST","o":"samlTokenUserAccountAuth","q":{"$action":"saml_token_user_account_auth"},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.samlTokenUserAccountAuth`"},"index$":2}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"POST availableUsers","source":"graphql","version":2},"g":{},"gq":{"doc":"query AuthResolverResponseLoad { availableUsers { ...AuthResolverResponseFields } } fragment AuthResolverResponseFields on AuthResolverResponse { allowDomainAccess email id lastUsedOrganizationId service }","field":"availableUsers","optype":"query","vars":[]},"k":"graphql","m":"POST","o":"availableUsers","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.availableUsers`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"POST passkeyLoginFinish","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"auth_id","or":"auth_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"response","or":"response","r":true,"t":"`$ANY`","index$":1}]},"gq":{"doc":"mutation AuthResolverResponseUpdatePasskeyLoginFinish($authId: String!, $response: JSONObject!) { passkeyLoginFinish(authId: $authId, response: $response) { ...AuthResolverResponseFields } } fragment AuthResolverResponseFields on AuthResolverResponse { allowDomainAccess email id lastUsedOrganizationId service }","field":"passkeyLoginFinish","optype":"mutation","vars":[{"from":"authId","gqltype":"String!","name":"authId"},{"from":"response","gqltype":"JSONObject!","name":"response"}]},"k":"graphql","m":"POST","o":"passkeyLoginFinish","q":{"$action":"passkey_login_finish","exist":["auth_id","response"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.passkeyLoginFinish`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"auth_resolver_response","name__orig":"auth_resolver_response","Name":"AuthResolverResponse","name_":"auth_resolver_response","name-":"auth-resolver-response","NAME":"AUTH_RESOLVER_RESPONSE","index$":9}, {"active":true,"entity":"auth_resolver_response","key$":"BasicAuthResolverResponseFlow","kind":"basic","name":"BasicAuthResolverResponseFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"auth_resolver_response_ref01"},"m":{"auth_id":"auth01","response":"response01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{"auth_id":"auth01","response":"response01"},"i":{"ref":"auth_resolver_response_ref01","srcdatavar":"auth_resolver_response_ref01_data","suffix":"_up0","textfield":"email"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-auth_resolver_response_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"auth_resolver_response_ref01","srcdatavar":"auth_resolver_response_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-auth_resolver_response_ref01"}}],"index$":2}]}, 'AuthResolverResponse', {"POST emailTokenUserAccountAuth":{"protocol":"graphql"},"POST googleUserAccountAuth":{"protocol":"graphql"},"POST samlTokenUserAccountAuth":{"protocol":"graphql"},"POST availableUsers":{"protocol":"graphql"},"POST passkeyLoginFinish":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const auth_resolver_response_ref01_ent = client.AuthResolverResponse()
    let auth_resolver_response_ref01_data = setup.data.new.auth_resolver_response['auth_resolver_response_ref01']
    auth_resolver_response_ref01_data['auth_id'] = setup.idmap['auth01']
    auth_resolver_response_ref01_data['response'] = setup.idmap['response01']

    auth_resolver_response_ref01_data = (await auth_resolver_response_ref01_ent.create(auth_resolver_response_ref01_data)).data()
    assert(null != auth_resolver_response_ref01_data.id)


    // UPDATE
    const auth_resolver_response_ref01_data_up0: any = {}
    auth_resolver_response_ref01_data_up0.id = auth_resolver_response_ref01_data.id
    auth_resolver_response_ref01_data_up0 ['auth_id'] = setup.idmap['auth_id']
    auth_resolver_response_ref01_data_up0 ['response'] = setup.idmap['response']

    const auth_resolver_response_ref01_markdef_up0 = { name: 'email', value: 'Mark01-auth_resolver_response_ref01_' + setup.now }
    ;(auth_resolver_response_ref01_data_up0 as any)[auth_resolver_response_ref01_markdef_up0.name] = auth_resolver_response_ref01_markdef_up0.value

    const auth_resolver_response_ref01_resdata_up0 = (await auth_resolver_response_ref01_ent.update(auth_resolver_response_ref01_data_up0)).data()
    assert(auth_resolver_response_ref01_resdata_up0.id === auth_resolver_response_ref01_data_up0.id)

    assert((auth_resolver_response_ref01_resdata_up0 as any)[auth_resolver_response_ref01_markdef_up0.name] === auth_resolver_response_ref01_markdef_up0.value)


    // LOAD
    const auth_resolver_response_ref01_match_dt0: any = {}
    auth_resolver_response_ref01_match_dt0.id = auth_resolver_response_ref01_data.id
    const auth_resolver_response_ref01_data_dt0 = (await auth_resolver_response_ref01_ent.load(auth_resolver_response_ref01_match_dt0)).data()
    assert(auth_resolver_response_ref01_data_dt0.id === auth_resolver_response_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/auth_resolver_response/AuthResolverResponseTestData.json')

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
    ['auth_resolver_response01','auth_resolver_response02','auth_resolver_response03','auth01','response01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_AUTH_RESOLVER_RESPONSE_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_AUTH_RESOLVER_RESPONSE_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_AUTH_RESOLVER_RESPONSE_ENTID']
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
  
