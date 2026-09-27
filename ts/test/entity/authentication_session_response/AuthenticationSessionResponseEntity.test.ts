

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


describe('AuthenticationSessionResponseEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.AuthenticationSessionResponse()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'authentication_session_response.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"browserType":{"a":true,"h":"Browser Type","n":"browserType","r":false,"sh":"Used web browser.","t":"`$STRING`","key$":"browserType","index$":0},"client":{"a":true,"h":"Client","n":"client","r":false,"sh":"Client used for the session","t":"`$STRING`","key$":"client","index$":1},"countryCodes":{"a":true,"h":"Country Codes","n":"countryCodes","r":true,"sh":"Country codes of all seen locations.","t":"`$STRING`","key$":"countryCodes","index$":2},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"The time at which the entity was created.","t":"`$ANY`","key$":"createdAt","index$":3},"detailedName":{"a":true,"h":"Detailed Name","n":"detailedName","r":true,"sh":"Detailed name of the session including version information, derived from the user agent.","t":"`$STRING`","key$":"detailedName","index$":4},"id":{"a":true,"h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":5},"ip":{"a":true,"h":"Ip","n":"ip","r":false,"sh":"IP address.","t":"`$STRING`","key$":"ip","index$":6},"isCurrentSession":{"a":true,"h":"Is Current Session","n":"isCurrentSession","r":true,"sh":"Whether this session is the one used to make the current API request.","t":"`$BOOLEAN`","key$":"isCurrentSession","index$":7},"lastActiveAt":{"a":true,"h":"Last Active At","n":"lastActiveAt","r":false,"sh":"When was the session last seen","t":"`$ANY`","key$":"lastActiveAt","index$":8},"location":{"a":true,"h":"Location","n":"location","r":false,"sh":"Human readable location","t":"`$STRING`","key$":"location","index$":9},"locationCity":{"a":true,"h":"Location City","n":"locationCity","r":false,"sh":"Location city name.","t":"`$STRING`","key$":"locationCity","index$":10},"locationCountry":{"a":true,"h":"Location Country","n":"locationCountry","r":false,"sh":"Location country name.","t":"`$STRING`","key$":"locationCountry","index$":11},"locationCountryCode":{"a":true,"h":"Location Country Code","n":"locationCountryCode","r":false,"sh":"Location country code.","t":"`$STRING`","key$":"locationCountryCode","index$":12},"locationRegionCode":{"a":true,"h":"Location Region Code","n":"locationRegionCode","r":false,"sh":"Location region code.","t":"`$STRING`","key$":"locationRegionCode","index$":13},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Name of the session, derived from the client and operating system","t":"`$STRING`","key$":"name","index$":14},"operatingSystem":{"a":true,"h":"Operating System","n":"operatingSystem","r":false,"sh":"Operating system used for the session","t":"`$STRING`","key$":"operatingSystem","index$":15},"service":{"a":true,"h":"Service","n":"service","r":false,"sh":"Service used for logging in.","t":"`$STRING`","key$":"service","index$":16},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"Type of application used to authenticate.","t":"`$STRING`","key$":"type","index$":17},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"Date when the session was last updated.","t":"`$ANY`","key$":"updatedAt","index$":18},"userAgent":{"a":true,"h":"User Agent","n":"userAgent","r":false,"sh":"Session's user-agent.","t":"`$STRING`","key$":"userAgent","index$":19}},"id":{"field":"id","name":"id"},"name":"authentication_session_response","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"POST userSessions","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"query AuthenticationSessionResponseList($id: String!) { userSessions(id: $id) { ...AuthenticationSessionResponseFields } } fragment AuthenticationSessionResponseFields on AuthenticationSessionResponse { browserType client countryCodes createdAt detailedName id ip isCurrentSession lastActiveAt location locationCity locationCountry locationCountryCode locationRegionCode name operatingSystem service type updatedAt userAgent }","field":"userSessions","optype":"query","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"userSessions","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.userSessions`"},"index$":0},{"a":true,"co":{"id":"POST authenticationSessions","source":"graphql","version":2},"g":{},"gq":{"doc":"query AuthenticationSessionResponseList { authenticationSessions { ...AuthenticationSessionResponseFields } } fragment AuthenticationSessionResponseFields on AuthenticationSessionResponse { browserType client countryCodes createdAt detailedName id ip isCurrentSession lastActiveAt location locationCity locationCountry locationCountryCode locationRegionCode name operatingSystem service type updatedAt userAgent }","field":"authenticationSessions","optype":"query","vars":[]},"k":"graphql","m":"POST","o":"authenticationSessions","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.authenticationSessions`"},"index$":1}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"authentication_session_response","name__orig":"authentication_session_response","Name":"AuthenticationSessionResponse","name_":"authentication_session_response","name-":"authentication-session-response","NAME":"AUTHENTICATION_SESSION_RESPONSE","index$":10}, {"active":true,"entity":"authentication_session_response","key$":"BasicAuthenticationSessionResponseFlow","kind":"basic","name":"BasicAuthenticationSessionResponseFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"authentication_session_response_ref01"}}],"index$":0}]}, 'AuthenticationSessionResponse', {"POST userSessions":{"protocol":"graphql"},"POST authenticationSessions":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let authentication_session_response_ref01_data = Object.values(setup.data.existing.authentication_session_response)[0] as any

    // LIST
    const authentication_session_response_ref01_ent = client.AuthenticationSessionResponse()
    const authentication_session_response_ref01_match: any = {}

    const authentication_session_response_ref01_list = (await authentication_session_response_ref01_ent.list(authentication_session_response_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/authentication_session_response/AuthenticationSessionResponseTestData.json')

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
    ['authentication_session_response01','authentication_session_response02','authentication_session_response03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_AUTHENTICATION_SESSION_RESPONSE_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_AUTHENTICATION_SESSION_RESPONSE_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_AUTHENTICATION_SESSION_RESPONSE_ENTID']
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
  
