

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


describe('WebhookFailureEventEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.WebhookFailureEvent()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'webhook_failure_event.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"createdAt","req":true,"short":"The time at which the entity was created.","type":"`$ANY`","index$":0},{"active":true,"name":"executionId","req":true,"short":"A stable identifier for the webhook delivery attempt.","type":"`$STRING`","index$":1},{"active":true,"name":"httpStatus","req":false,"short":"The HTTP status code returned by the webhook recipient.","type":"`$NUMBER`","index$":2},{"active":true,"name":"id","req":true,"short":"The unique identifier of the entity.","type":"`$STRING`","index$":3},{"active":true,"name":"responseOrError","req":false,"short":"The HTTP response body returned by the recipient, or the error message if the request failed before receiving a response.","type":"`$STRING`","index$":4},{"active":true,"name":"url","req":true,"short":"The URL that the webhook was trying to push to.","type":"`$STRING`","index$":5},{"active":true,"name":"webhook","req":false,"short":"The webhook that this failure event is associated with.","type":"`$OBJECT`","index$":6}],"id":{"field":"id","name":"id"},"name":"webhook_failure_event","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"oauth_client_id","orig":"oauth_client_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST failuresForOauthWebhooks","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"oauthClientId\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"[INTERNAL] Webhook failure events for webhooks that belong to an OAuth application. (last 50)\",\"gqltype\":\"[WebhookFailureEvent!]!\",\"list\":true,\"name\":\"failuresForOauthWebhooks\",\"reqd\":true,\"type\":\"WebhookFailureEvent\"},\"invocation\":{\"doc\":\"query WebhookFailureEventList($oauthClientId: String!) { failuresForOauthWebhooks(oauthClientId: $oauthClientId) { ...WebhookFailureEventFields } } fragment WebhookFailureEventFields on WebhookFailureEvent { createdAt executionId httpStatus id responseOrError url webhook { id } }\",\"field\":\"failuresForOauthWebhooks\",\"optype\":\"query\",\"vars\":[{\"from\":\"oauthClientId\",\"gqltype\":\"String!\",\"name\":\"oauthClientId\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"query WebhookFailureEventList($oauthClientId: String!) { failuresForOauthWebhooks(oauthClientId: $oauthClientId) { ...WebhookFailureEventFields } } fragment WebhookFailureEventFields on WebhookFailureEvent { createdAt executionId httpStatus id responseOrError url webhook { id } }","field":"failuresForOauthWebhooks","optype":"query","vars":[{"from":"oauthClientId","gqltype":"String!","name":"oauthClientId"}]},"kind":"graphql","method":"POST","orig":"failuresForOauthWebhooks","segments":[],"select":{"exist":["oauth_client_id"]},"transform":{"req":"`reqdata`","res":"`body.data.failuresForOauthWebhooks`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"webhook_id","orig":"webhook_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST auditLogWebhookFailureEvents","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"webhookId\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"[INTERNAL] Failure events for an audit log webhook (last 50).\",\"gqltype\":\"[WebhookFailureEvent!]!\",\"list\":true,\"name\":\"auditLogWebhookFailureEvents\",\"reqd\":true,\"type\":\"WebhookFailureEvent\"},\"invocation\":{\"doc\":\"query WebhookFailureEventList($webhookId: String!) { auditLogWebhookFailureEvents(webhookId: $webhookId) { ...WebhookFailureEventFields } } fragment WebhookFailureEventFields on WebhookFailureEvent { createdAt executionId httpStatus id responseOrError url webhook { id } }\",\"field\":\"auditLogWebhookFailureEvents\",\"optype\":\"query\",\"vars\":[{\"from\":\"webhookId\",\"gqltype\":\"String!\",\"name\":\"webhookId\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"query WebhookFailureEventList($webhookId: String!) { auditLogWebhookFailureEvents(webhookId: $webhookId) { ...WebhookFailureEventFields } } fragment WebhookFailureEventFields on WebhookFailureEvent { createdAt executionId httpStatus id responseOrError url webhook { id } }","field":"auditLogWebhookFailureEvents","optype":"query","vars":[{"from":"webhookId","gqltype":"String!","name":"webhookId"}]},"kind":"graphql","method":"POST","orig":"auditLogWebhookFailureEvents","segments":[],"select":{"exist":["webhook_id"]},"transform":{"req":"`reqdata`","res":"`body.data.auditLogWebhookFailureEvents`"},"index$":1}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"webhook_failure_event","name__orig":"webhook_failure_event","Name":"WebhookFailureEvent","name_":"webhook_failure_event","name-":"webhook-failure-event","NAME":"WEBHOOK_FAILURE_EVENT","index$":85}, {"active":true,"entity":"webhook_failure_event","key$":"BasicWebhookFailureEventFlow","kind":"basic","name":"BasicWebhookFailureEventFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"webhook_id":"webhook01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"webhook_failure_event_ref01"}}],"index$":0}]}, 'WebhookFailureEvent')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let webhook_failure_event_ref01_data = Object.values(setup.data.existing.webhook_failure_event)[0] as any

    // LIST
    const webhook_failure_event_ref01_ent = client.WebhookFailureEvent()
    const webhook_failure_event_ref01_match: any = {}
    webhook_failure_event_ref01_match['webhook_id'] = setup.idmap['webhook01']

    const webhook_failure_event_ref01_list = (await webhook_failure_event_ref01_ent.list(webhook_failure_event_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/webhook_failure_event/WebhookFailureEventTestData.json')

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
    ['webhook_failure_event01','webhook_failure_event02','webhook_failure_event03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_WEBHOOK_FAILURE_EVENT_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_WEBHOOK_FAILURE_EVENT_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_WEBHOOK_FAILURE_EVENT_ENTID']
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
  
