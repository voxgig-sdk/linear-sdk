

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"authType","req":true,"short":"Supported challenge for this user account.","type":"`$STRING`","index$":0},{"active":true,"name":"success","req":true,"short":"Whether the operation was successful.","type":"`$BOOLEAN`","index$":1}],"name":"email_user_account_auth_challenge_response","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST emailUserAccountAuthChallenge","json":"{\"field\":{\"args\":[{\"gqltype\":\"EmailUserAccountAuthChallengeInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"EmailUserAccountAuthChallengeInput\"}],\"deprecated\":false,\"desc\":\"Finds or creates a new user account by email and sends an email with token.\",\"gqltype\":\"EmailUserAccountAuthChallengeResponse!\",\"list\":false,\"name\":\"emailUserAccountAuthChallenge\",\"reqd\":true,\"type\":\"EmailUserAccountAuthChallengeResponse\"},\"invocation\":{\"doc\":\"mutation EmailUserAccountAuthChallengeResponseCreateEmailUserAccountAuthChallenge($input: EmailUserAccountAuthChallengeInput!) { emailUserAccountAuthChallenge(input: $input) { ...EmailUserAccountAuthChallengeResponseFields } } fragment EmailUserAccountAuthChallengeResponseFields on EmailUserAccountAuthChallengeResponse { authType success }\",\"field\":\"emailUserAccountAuthChallenge\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"\",\"gqltype\":\"EmailUserAccountAuthChallengeInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"Boolean\":{\"desc\":\"The `Boolean` scalar type represents `true` or `false`.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Boolean\"},\"EmailUserAccountAuthChallengeInput\":{\"fields\":{\"challengeResponse\":{\"args\":[],\"deprecated\":false,\"desc\":\"Response from the login challenge.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"challengeResponse\",\"reqd\":false,\"type\":\"String\"},\"clientAuthCode\":{\"args\":[],\"deprecated\":false,\"desc\":\"Auth code for the client initiating the sequence.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"clientAuthCode\",\"reqd\":false,\"type\":\"String\"},\"email\":{\"args\":[],\"deprecated\":false,\"desc\":\"The email for which to generate the magic login code.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"email\",\"reqd\":true,\"type\":\"String\"},\"inviteLink\":{\"args\":[],\"deprecated\":false,\"desc\":\"The workspace invite link to associate with this authentication.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"inviteLink\",\"reqd\":false,\"type\":\"String\"},\"isDesktop\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether the login was requested from the desktop app.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"isDesktop\",\"reqd\":false,\"type\":\"Boolean\"},\"loginCodeOnly\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether to only return the login code. This is used by mobile apps to skip showing the login link.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"loginCodeOnly\",\"reqd\":false,\"type\":\"Boolean\"},\"sessionId\":{\"args\":[],\"deprecated\":false,\"desc\":\"PostHog session ID for attribution tracking.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"sessionId\",\"reqd\":false,\"type\":\"String\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"EmailUserAccountAuthChallengeInput\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation EmailUserAccountAuthChallengeResponseCreateEmailUserAccountAuthChallenge($input: EmailUserAccountAuthChallengeInput!) { emailUserAccountAuthChallenge(input: $input) { ...EmailUserAccountAuthChallengeResponseFields } } fragment EmailUserAccountAuthChallengeResponseFields on EmailUserAccountAuthChallengeResponse { authType success }","field":"emailUserAccountAuthChallenge","optype":"mutation","vars":[{"from":"","gqltype":"EmailUserAccountAuthChallengeInput!","name":"input"}]},"kind":"graphql","method":"POST","orig":"emailUserAccountAuthChallenge","segments":[],"select":{"$action":"email_user_account_auth_challenge"},"transform":{"req":"`reqdata`","res":"`body.data.emailUserAccountAuthChallenge`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"email_user_account_auth_challenge_response","name__orig":"email_user_account_auth_challenge_response","Name":"EmailUserAccountAuthChallengeResponse","name_":"email_user_account_auth_challenge_response","name-":"email-user-account-auth-challenge-response","NAME":"EMAIL_USER_ACCOUNT_AUTH_CHALLENGE_RESPONSE","index$":23}, {"active":true,"entity":"email_user_account_auth_challenge_response","key$":"BasicEmailUserAccountAuthChallengeResponseFlow","kind":"basic","name":"BasicEmailUserAccountAuthChallengeResponseFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"email_user_account_auth_challenge_response_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'EmailUserAccountAuthChallengeResponse')
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
  
