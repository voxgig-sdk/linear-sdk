

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archivedAt":{"a":true,"h":"Archived At","n":"archivedAt","r":false,"sh":"The time at which the entity was archived.","t":"`$ANY`","key$":"archivedAt","index$":0},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"The time at which the entity was created.","t":"`$ANY`","key$":"createdAt","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier of the entity.","t":"`$STRING`","key$":"id","index$":2},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"The last time at which the entity was meaningfully updated.","t":"`$ANY`","key$":"updatedAt","index$":3}},"id":{"field":"id","name":"id"},"name":"push_subscription","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST pushSubscriptionCreate","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation PushSubscriptionCreate($input: PushSubscriptionCreateInput!) { pushSubscriptionCreate(input: $input) { entity { ...PushSubscriptionFields } success } } fragment PushSubscriptionFields on PushSubscription { archivedAt createdAt id updatedAt }","field":"pushSubscriptionCreate","optype":"mutation","vars":[{"from":"","gqltype":"PushSubscriptionCreateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"pushSubscriptionCreate","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.pushSubscriptionCreate.entity`"},"index$":0}],"key$":"create"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"POST pushSubscriptionDelete","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation PushSubscriptionRemove($id: String!) { pushSubscriptionDelete(id: $id) { entity { ...PushSubscriptionFields } success } } fragment PushSubscriptionFields on PushSubscription { archivedAt createdAt id updatedAt }","field":"pushSubscriptionDelete","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"pushSubscriptionDelete","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.pushSubscriptionDelete.entity`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"push_subscription","name__orig":"push_subscription","Name":"PushSubscription","name_":"push_subscription","name-":"push-subscription","NAME":"PUSH_SUBSCRIPTION","index$":64}, {"active":true,"entity":"push_subscription","key$":"BasicPushSubscriptionFlow","kind":"basic","name":"BasicPushSubscriptionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"push_subscription_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"push_subscription_ref01","suffix":"_rm0"},"m":{"id":"push_subscription01"},"o":"remove","s":[],"v":[],"index$":1}]}, 'PushSubscription', {"POST pushSubscriptionCreate":{"protocol":"graphql"},"POST pushSubscriptionDelete":{"protocol":"graphql"}})
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
  
