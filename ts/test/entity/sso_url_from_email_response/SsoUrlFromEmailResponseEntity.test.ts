

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


describe('SsoUrlFromEmailResponseEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.SsoUrlFromEmailResponse()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'sso_url_from_email_response.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"samlSsoUrl":{"a":true,"h":"Saml Sso Url","n":"samlSsoUrl","r":true,"sh":"SAML SSO sign-in URL.","t":"`$STRING`","key$":"samlSsoUrl","index$":0},"success":{"a":true,"h":"Success","n":"success","r":true,"sh":"Whether the operation was successful.","t":"`$BOOLEAN`","key$":"success","index$":1}},"name":"sso_url_from_email_response","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"POST ssoUrlFromEmail","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"email","or":"email","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"is_desktop","or":"is_desktop","r":false,"t":"`$BOOLEAN`","index$":1},{"a":true,"k":"param","n":"type","or":"type","r":true,"t":"`$ANY`","index$":2}]},"gq":{"doc":"query SsoUrlFromEmailResponseLoad($email: String!, $isDesktop: Boolean, $type: IdentityProviderType!) { ssoUrlFromEmail(email: $email, isDesktop: $isDesktop, type: $type) { ...SsoUrlFromEmailResponseFields } } fragment SsoUrlFromEmailResponseFields on SsoUrlFromEmailResponse { samlSsoUrl success }","field":"ssoUrlFromEmail","optype":"query","vars":[{"from":"email","gqltype":"String!","name":"email"},{"from":"isDesktop","gqltype":"Boolean","name":"isDesktop"},{"from":"type","gqltype":"IdentityProviderType!","name":"type"}]},"k":"graphql","m":"POST","o":"ssoUrlFromEmail","q":{"exist":["email","type"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.ssoUrlFromEmail`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"sso_url_from_email_response","name__orig":"sso_url_from_email_response","Name":"SsoUrlFromEmailResponse","name_":"sso_url_from_email_response","name-":"sso-url-from-email-response","NAME":"SSO_URL_FROM_EMAIL_RESPONSE","index$":73}, {"active":true,"entity":"sso_url_from_email_response","key$":"BasicSsoUrlFromEmailResponseFlow","kind":"basic","name":"BasicSsoUrlFromEmailResponseFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"sso_url_from_email_response_ref01","srcdatavar":"sso_url_from_email_response_ref01_data","suffix":"_dt0"},"m":{"email":"email01","is_desktop":"is_desktop01","type":"type01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-sso_url_from_email_response_ref01"}}],"index$":0}]}, 'SsoUrlFromEmailResponse', {"POST ssoUrlFromEmail":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let sso_url_from_email_response_ref01_data = Object.values(setup.data.existing.sso_url_from_email_response)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const sso_url_from_email_response_ref01_ent = client.SsoUrlFromEmailResponse()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/sso_url_from_email_response/SsoUrlFromEmailResponseTestData.json')

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
    ['sso_url_from_email_response01','sso_url_from_email_response02','sso_url_from_email_response03','email01','is_desktop01','type01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_SSO_URL_FROM_EMAIL_RESPONSE_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_SSO_URL_FROM_EMAIL_RESPONSE_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_SSO_URL_FROM_EMAIL_RESPONSE_ENTID']
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
  
