

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


describe('PushSubscriptionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.PushSubscription()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'push_subscription.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"archivedAt","req":false,"short":"The time at which the entity was archived.","type":"`$ANY`","index$":0},{"active":true,"name":"createdAt","req":true,"short":"The time at which the entity was created.","type":"`$ANY`","index$":1},{"active":true,"name":"id","req":true,"short":"The unique identifier of the entity.","type":"`$STRING`","index$":2},{"active":true,"name":"updatedAt","req":true,"short":"The last time at which the entity was meaningfully updated.","type":"`$ANY`","index$":3}],"id":{"field":"id","name":"id"},"name":"push_subscription","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST pushSubscriptionCreate","json":"{\"field\":{\"args\":[{\"gqltype\":\"PushSubscriptionCreateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"PushSubscriptionCreateInput\"}],\"deprecated\":false,\"desc\":\"Creates a push subscription for the authenticated user's current device or browser. If a subscription already exists for the same session, the old one is replaced.\",\"gqltype\":\"PushSubscriptionPayload!\",\"list\":false,\"name\":\"pushSubscriptionCreate\",\"reqd\":true,\"type\":\"PushSubscriptionPayload\"},\"invocation\":{\"doc\":\"mutation PushSubscriptionCreate($input: PushSubscriptionCreateInput!) { pushSubscriptionCreate(input: $input) { entity { ...PushSubscriptionFields } success } } fragment PushSubscriptionFields on PushSubscription { archivedAt createdAt id updatedAt }\",\"field\":\"pushSubscriptionCreate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"\",\"gqltype\":\"PushSubscriptionCreateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"PushSubscriptionCreateInput\":{\"desc\":\"Input for creating a push subscription to receive push notifications on a device or browser.\",\"fields\":{\"data\":{\"args\":[],\"deprecated\":false,\"desc\":\"The push subscription data in stringified JSON format. For web subscriptions, this must contain keys, endpoint, and expirationTime fields per the Web Push API specification. For mobile subscriptions, this contains the device token.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"data\",\"reqd\":true,\"type\":\"String\"},\"id\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier in UUID v4 format. If none is provided, the backend will generate one.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"id\",\"reqd\":false,\"type\":\"String\"},\"type\":{\"args\":[],\"deprecated\":false,\"desc\":\"The type of push subscription: 'web' for browser-based Web Push API, 'apple' for Apple Push Notification service (or 'appleDevelopment' for sandbox), or 'firebase' for Firebase Cloud Messaging (Android).\",\"gqltype\":\"PushSubscriptionType\",\"list\":false,\"name\":\"type\",\"reqd\":false,\"type\":\"PushSubscriptionType\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"PushSubscriptionCreateInput\"},\"PushSubscriptionType\":{\"desc\":\"The different push subscription types.\",\"fields\":{},\"kind\":\"ENUM\",\"name\":\"PushSubscriptionType\",\"values\":[\"apple\",\"appleDevelopment\",\"firebase\",\"web\"]},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation PushSubscriptionCreate($input: PushSubscriptionCreateInput!) { pushSubscriptionCreate(input: $input) { entity { ...PushSubscriptionFields } success } } fragment PushSubscriptionFields on PushSubscription { archivedAt createdAt id updatedAt }","field":"pushSubscriptionCreate","optype":"mutation","vars":[{"from":"","gqltype":"PushSubscriptionCreateInput!","name":"input"}]},"kind":"graphql","method":"POST","orig":"pushSubscriptionCreate","segments":[],"select":{},"transform":{"req":"`reqdata`","res":"`body.data.pushSubscriptionCreate.entity`"},"index$":0}],"key$":"create"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST pushSubscriptionDelete","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"Deletes a push subscription, unregistering the device from receiving push notifications.\",\"gqltype\":\"PushSubscriptionPayload!\",\"list\":false,\"name\":\"pushSubscriptionDelete\",\"reqd\":true,\"type\":\"PushSubscriptionPayload\"},\"invocation\":{\"doc\":\"mutation PushSubscriptionRemove($id: String!) { pushSubscriptionDelete(id: $id) { entity { ...PushSubscriptionFields } success } } fragment PushSubscriptionFields on PushSubscription { archivedAt createdAt id updatedAt }\",\"field\":\"pushSubscriptionDelete\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation PushSubscriptionRemove($id: String!) { pushSubscriptionDelete(id: $id) { entity { ...PushSubscriptionFields } success } } fragment PushSubscriptionFields on PushSubscription { archivedAt createdAt id updatedAt }","field":"pushSubscriptionDelete","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"kind":"graphql","method":"POST","orig":"pushSubscriptionDelete","segments":[],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data.pushSubscriptionDelete.entity`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"push_subscription","name__orig":"push_subscription","Name":"PushSubscription","name_":"push_subscription","name-":"push-subscription","NAME":"PUSH_SUBSCRIPTION","index$":64}, {"active":true,"entity":"push_subscription","key$":"BasicPushSubscriptionFlow","kind":"basic","name":"BasicPushSubscriptionFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"push_subscription_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"push_subscription_ref01","suffix":"_rm0"},"match":{"id":"push_subscription01"},"op":"remove","spec":[],"valid":[],"index$":1}]}, 'PushSubscription')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const push_subscription_ref01_ent = client.PushSubscription()
    let push_subscription_ref01_data = setup.data.new.push_subscription['push_subscription_ref01']

    push_subscription_ref01_data = (await push_subscription_ref01_ent.create(push_subscription_ref01_data)).data()
    assert(null != push_subscription_ref01_data.id)


    // REMOVE
    const push_subscription_ref01_match_rm0: any = { id: push_subscription_ref01_data.id }
    await push_subscription_ref01_ent.remove(push_subscription_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/push_subscription/PushSubscriptionTestData.json')

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
    ['push_subscription01','push_subscription02','push_subscription03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_PUSH_SUBSCRIPTION_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_PUSH_SUBSCRIPTION_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_PUSH_SUBSCRIPTION_ENTID']
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
  
