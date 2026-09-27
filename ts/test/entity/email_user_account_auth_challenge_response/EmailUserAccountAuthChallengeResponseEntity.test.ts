

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


describe('EmailUserAccountAuthChallengeResponseEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.EmailUserAccountAuthChallengeResponse()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'email_user_account_auth_challenge_response.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"authType":{"a":true,"h":"Auth Type","n":"authType","r":true,"sh":"Supported challenge for this user account.","t":"`$STRING`","key$":"authType","index$":0},"success":{"a":true,"h":"Success","n":"success","r":true,"sh":"Whether the operation was successful.","t":"`$BOOLEAN`","key$":"success","index$":1}},"name":"email_user_account_auth_challenge_response","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST emailUserAccountAuthChallenge","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation EmailUserAccountAuthChallengeResponseCreateEmailUserAccountAuthChallenge($input: EmailUserAccountAuthChallengeInput!) { emailUserAccountAuthChallenge(input: $input) { ...EmailUserAccountAuthChallengeResponseFields } } fragment EmailUserAccountAuthChallengeResponseFields on EmailUserAccountAuthChallengeResponse { authType success }","field":"emailUserAccountAuthChallenge","optype":"mutation","vars":[{"from":"","gqltype":"EmailUserAccountAuthChallengeInput!","name":"input"}]},"k":"graphql","m":"POST","o":"emailUserAccountAuthChallenge","q":{"$action":"email_user_account_auth_challenge"},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.emailUserAccountAuthChallenge`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"email_user_account_auth_challenge_response","name__orig":"email_user_account_auth_challenge_response","Name":"EmailUserAccountAuthChallengeResponse","name_":"email_user_account_auth_challenge_response","name-":"email-user-account-auth-challenge-response","NAME":"EMAIL_USER_ACCOUNT_AUTH_CHALLENGE_RESPONSE","index$":23}, {"active":true,"entity":"email_user_account_auth_challenge_response","key$":"BasicEmailUserAccountAuthChallengeResponseFlow","kind":"basic","name":"BasicEmailUserAccountAuthChallengeResponseFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"email_user_account_auth_challenge_response_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'EmailUserAccountAuthChallengeResponse', {"POST emailUserAccountAuthChallenge":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const email_user_account_auth_challenge_response_ref01_ent = client.EmailUserAccountAuthChallengeResponse()
    let email_user_account_auth_challenge_response_ref01_data = setup.data.new.email_user_account_auth_challenge_response['email_user_account_auth_challenge_response_ref01']

    email_user_account_auth_challenge_response_ref01_data = (await email_user_account_auth_challenge_response_ref01_ent.create(email_user_account_auth_challenge_response_ref01_data)).data()
    assert(null != email_user_account_auth_challenge_response_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/email_user_account_auth_challenge_response/EmailUserAccountAuthChallengeResponseTestData.json')

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
    ['email_user_account_auth_challenge_response01','email_user_account_auth_challenge_response02','email_user_account_auth_challenge_response03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_EMAIL_USER_ACCOUNT_AUTH_CHALLENGE_RESPONSE_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_EMAIL_USER_ACCOUNT_AUTH_CHALLENGE_RESPONSE_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_EMAIL_USER_ACCOUNT_AUTH_CHALLENGE_RESPONSE_ENTID']
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
  
