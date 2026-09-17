

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


describe('WebhookEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.Webhook()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'webhook.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"allPublicTeams","req":true,"short":"Whether the webhook receives events from all public (non-private) teams in the organization, including teams created after the webhook was set up.","type":"`$BOOLEAN`","index$":0},{"active":true,"name":"archivedAt","req":false,"short":"The time at which the entity was archived.","type":"`$ANY`","index$":1},{"active":true,"name":"createdAt","req":true,"short":"The time at which the entity was created.","type":"`$ANY`","index$":2},{"active":true,"name":"creator","req":false,"short":"The user who created the webhook.","type":"`$OBJECT`","index$":3},{"active":true,"name":"enabled","req":true,"short":"Whether the webhook is enabled.","type":"`$BOOLEAN`","index$":4},{"active":true,"name":"id","req":true,"short":"The unique identifier of the entity.","type":"`$STRING`","index$":5},{"active":true,"name":"label","req":false,"short":"A human-readable label for the webhook, used for identification in the UI.","type":"`$STRING`","index$":6},{"active":true,"name":"resourceTypes","req":true,"short":"The resource types this webhook is subscribed to (e.g., 'Issue', 'Comment', 'Project', 'Cycle').","type":"`$STRING`","index$":7},{"active":true,"name":"secret","req":false,"short":"A secret token used to sign webhook payloads with HMAC-SHA256, allowing the recipient to verify that the payload originated from Linear and was not tampered with.","type":"`$STRING`","index$":8},{"active":true,"name":"team","req":false,"short":"The single team that the webhook is scoped to.","type":"`$OBJECT`","index$":9},{"active":true,"name":"teamIds","req":false,"short":"[INTERNAL] An array of team IDs that the webhook is subscribed to.","type":"`$STRING`","index$":10},{"active":true,"name":"updatedAt","req":true,"short":"The last time at which the entity was meaningfully updated.","type":"`$ANY`","index$":11},{"active":true,"name":"url","req":false,"short":"The destination URL where webhook payloads will be sent via HTTP POST.","type":"`$STRING`","index$":12}],"id":{"field":"id","name":"id"},"name":"webhook","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST webhookCreate","json":"{\"field\":{\"args\":[{\"gqltype\":\"WebhookCreateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"WebhookCreateInput\"}],\"deprecated\":false,\"desc\":\"Creates a new webhook subscription for the workspace. Requires specifying a URL, resource types to subscribe to, and either a specific team or all public teams.\",\"gqltype\":\"WebhookPayload!\",\"list\":false,\"name\":\"webhookCreate\",\"reqd\":true,\"type\":\"WebhookPayload\"},\"invocation\":{\"doc\":\"mutation WebhookCreate($input: WebhookCreateInput!) { webhookCreate(input: $input) { webhook { ...WebhookFields } success } } fragment WebhookFields on Webhook { allPublicTeams archivedAt createdAt creator { id } enabled id label resourceTypes secret team { id } teamIds updatedAt url }\",\"field\":\"webhookCreate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"\",\"gqltype\":\"WebhookCreateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"Boolean\":{\"desc\":\"The `Boolean` scalar type represents `true` or `false`.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Boolean\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"},\"WebhookCreateInput\":{\"desc\":\"Input for creating a new webhook.\",\"fields\":{\"allPublicTeams\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether this webhook is enabled for all public teams.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"allPublicTeams\",\"reqd\":false,\"type\":\"Boolean\"},\"enabled\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether this webhook is enabled.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"enabled\",\"reqd\":false,\"type\":\"Boolean\"},\"id\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier in UUID v4 format. If none is provided, the backend will generate one.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"id\",\"reqd\":false,\"type\":\"String\"},\"label\":{\"args\":[],\"deprecated\":false,\"desc\":\"Label for the webhook.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"label\",\"reqd\":false,\"type\":\"String\"},\"resourceTypes\":{\"args\":[],\"deprecated\":false,\"desc\":\"List of resources the webhook should subscribe to.\",\"gqltype\":\"[String!]!\",\"list\":true,\"name\":\"resourceTypes\",\"reqd\":true,\"type\":\"String\"},\"secret\":{\"args\":[],\"deprecated\":false,\"desc\":\"A secret token used to sign the webhook payload.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"secret\",\"reqd\":false,\"type\":\"String\"},\"teamId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier or key of the team associated with the Webhook.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"teamId\",\"reqd\":false,\"type\":\"String\"},\"url\":{\"args\":[],\"deprecated\":false,\"desc\":\"The URL that will be called on data changes.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"url\",\"reqd\":true,\"type\":\"String\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"WebhookCreateInput\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation WebhookCreate($input: WebhookCreateInput!) { webhookCreate(input: $input) { webhook { ...WebhookFields } success } } fragment WebhookFields on Webhook { allPublicTeams archivedAt createdAt creator { id } enabled id label resourceTypes secret team { id } teamIds updatedAt url }","field":"webhookCreate","optype":"mutation","vars":[{"from":"","gqltype":"WebhookCreateInput!","name":"input"}]},"kind":"graphql","method":"POST","orig":"webhookCreate","segments":[],"select":{},"transform":{"req":"`reqdata`","res":"`body.data.webhookCreate.webhook`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"after","orig":"after","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"before","orig":"before","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"param","name":"first","orig":"first","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"kind":"param","name":"include_archived","orig":"include_archived","reqd":false,"type":"`$BOOLEAN`","index$":3},{"active":true,"kind":"param","name":"last","orig":"last","reqd":false,"type":"`$INTEGER`","index$":4},{"active":true,"kind":"param","name":"order_by","orig":"order_by","reqd":false,"type":"`$ANY`","index$":5}]},"contract":{"id":"POST webhooks","json":"{\"field\":{\"args\":[{\"gqltype\":\"String\",\"name\":\"after\",\"reqd\":false,\"type\":\"String\"},{\"gqltype\":\"String\",\"name\":\"before\",\"reqd\":false,\"type\":\"String\"},{\"gqltype\":\"Int\",\"name\":\"first\",\"reqd\":false,\"type\":\"Int\"},{\"gqltype\":\"Boolean\",\"name\":\"includeArchived\",\"reqd\":false,\"type\":\"Boolean\"},{\"gqltype\":\"Int\",\"name\":\"last\",\"reqd\":false,\"type\":\"Int\"},{\"gqltype\":\"PaginationOrderBy\",\"name\":\"orderBy\",\"reqd\":false,\"type\":\"PaginationOrderBy\"}],\"deprecated\":false,\"desc\":\"All webhooks for the current workspace.\",\"gqltype\":\"WebhookConnection!\",\"list\":false,\"name\":\"webhooks\",\"reqd\":true,\"type\":\"WebhookConnection\"},\"invocation\":{\"doc\":\"query WebhookList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { webhooks(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...WebhookFields } pageInfo { endCursor hasNextPage } } } fragment WebhookFields on Webhook { allPublicTeams archivedAt createdAt creator { id } enabled id label resourceTypes secret team { id } teamIds updatedAt url }\",\"field\":\"webhooks\",\"optype\":\"query\",\"page\":{\"cursor\":\"pageInfo.endCursor\",\"more\":\"pageInfo.hasNextPage\",\"nodes\":\"nodes\",\"style\":\"relay\"},\"vars\":[{\"from\":\"after\",\"gqltype\":\"String\",\"name\":\"after\"},{\"from\":\"before\",\"gqltype\":\"String\",\"name\":\"before\"},{\"from\":\"first\",\"gqltype\":\"Int\",\"name\":\"first\"},{\"from\":\"includeArchived\",\"gqltype\":\"Boolean\",\"name\":\"includeArchived\"},{\"from\":\"last\",\"gqltype\":\"Int\",\"name\":\"last\"},{\"from\":\"orderBy\",\"gqltype\":\"PaginationOrderBy\",\"name\":\"orderBy\"}]},\"protocol\":\"graphql\",\"types\":{\"Boolean\":{\"desc\":\"The `Boolean` scalar type represents `true` or `false`.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Boolean\"},\"Int\":{\"desc\":\"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Int\"},\"PaginationOrderBy\":{\"desc\":\"By which field should the pagination order by\",\"fields\":{},\"kind\":\"ENUM\",\"name\":\"PaginationOrderBy\",\"values\":[\"createdAt\",\"updatedAt\"]},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"query WebhookList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { webhooks(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...WebhookFields } pageInfo { endCursor hasNextPage } } } fragment WebhookFields on Webhook { allPublicTeams archivedAt createdAt creator { id } enabled id label resourceTypes secret team { id } teamIds updatedAt url }","field":"webhooks","optype":"query","page":{"cursor":"pageInfo.endCursor","more":"pageInfo.hasNextPage","nodes":"nodes","style":"relay"},"vars":[{"from":"after","gqltype":"String","name":"after"},{"from":"before","gqltype":"String","name":"before"},{"from":"first","gqltype":"Int","name":"first"},{"from":"includeArchived","gqltype":"Boolean","name":"includeArchived"},{"from":"last","gqltype":"Int","name":"last"},{"from":"orderBy","gqltype":"PaginationOrderBy","name":"orderBy"}]},"kind":"graphql","method":"POST","orig":"webhooks","segments":[],"select":{},"transform":{"req":"`reqdata`","res":"`body.data.webhooks.nodes`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST webhook","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"Retrieves a single webhook by its identifier.\",\"gqltype\":\"Webhook!\",\"list\":false,\"name\":\"webhook\",\"reqd\":true,\"type\":\"Webhook\"},\"invocation\":{\"doc\":\"query WebhookLoad($id: String!) { webhook(id: $id) { ...WebhookFields } } fragment WebhookFields on Webhook { allPublicTeams archivedAt createdAt creator { id } enabled id label resourceTypes secret team { id } teamIds updatedAt url }\",\"field\":\"webhook\",\"optype\":\"query\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"query WebhookLoad($id: String!) { webhook(id: $id) { ...WebhookFields } } fragment WebhookFields on Webhook { allPublicTeams archivedAt createdAt creator { id } enabled id label resourceTypes secret team { id } teamIds updatedAt url }","field":"webhook","optype":"query","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"kind":"graphql","method":"POST","orig":"webhook","segments":[],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data.webhook`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST webhookDelete","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"Deletes a Webhook.\",\"gqltype\":\"DeletePayload!\",\"list\":false,\"name\":\"webhookDelete\",\"reqd\":true,\"type\":\"DeletePayload\"},\"invocation\":{\"doc\":\"mutation WebhookRemove($id: String!) { webhookDelete(id: $id) { entityId lastSyncId success } }\",\"field\":\"webhookDelete\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation WebhookRemove($id: String!) { webhookDelete(id: $id) { entityId lastSyncId success } }","field":"webhookDelete","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"kind":"graphql","method":"POST","orig":"webhookDelete","segments":[],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data.webhookDelete`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST webhookUpdate","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"},{\"gqltype\":\"WebhookUpdateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"WebhookUpdateInput\"}],\"deprecated\":false,\"desc\":\"Updates an existing Webhook.\",\"gqltype\":\"WebhookPayload!\",\"list\":false,\"name\":\"webhookUpdate\",\"reqd\":true,\"type\":\"WebhookPayload\"},\"invocation\":{\"doc\":\"mutation WebhookUpdate($id: String!, $input: WebhookUpdateInput!) { webhookUpdate(id: $id, input: $input) { webhook { ...WebhookFields } success } } fragment WebhookFields on Webhook { allPublicTeams archivedAt createdAt creator { id } enabled id label resourceTypes secret team { id } teamIds updatedAt url }\",\"field\":\"webhookUpdate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"},{\"from\":\"\",\"gqltype\":\"WebhookUpdateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"Boolean\":{\"desc\":\"The `Boolean` scalar type represents `true` or `false`.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"Boolean\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"},\"WebhookUpdateInput\":{\"desc\":\"Input for updating an existing webhook.\",\"fields\":{\"enabled\":{\"args\":[],\"deprecated\":false,\"desc\":\"Whether this webhook is enabled.\",\"gqltype\":\"Boolean\",\"list\":false,\"name\":\"enabled\",\"reqd\":false,\"type\":\"Boolean\"},\"label\":{\"args\":[],\"deprecated\":false,\"desc\":\"Label for the webhook.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"label\",\"reqd\":false,\"type\":\"String\"},\"resourceTypes\":{\"args\":[],\"deprecated\":false,\"desc\":\"List of resources the webhook should subscribe to.\",\"gqltype\":\"[String!]\",\"list\":true,\"name\":\"resourceTypes\",\"reqd\":false,\"type\":\"String\"},\"secret\":{\"args\":[],\"deprecated\":false,\"desc\":\"A secret token used to sign the webhook payload.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"secret\",\"reqd\":false,\"type\":\"String\"},\"url\":{\"args\":[],\"deprecated\":false,\"desc\":\"The URL that will be called on data changes.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"url\",\"reqd\":false,\"type\":\"String\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"WebhookUpdateInput\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation WebhookUpdate($id: String!, $input: WebhookUpdateInput!) { webhookUpdate(id: $id, input: $input) { webhook { ...WebhookFields } success } } fragment WebhookFields on Webhook { allPublicTeams archivedAt createdAt creator { id } enabled id label resourceTypes secret team { id } teamIds updatedAt url }","field":"webhookUpdate","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"","gqltype":"WebhookUpdateInput!","name":"input"}]},"kind":"graphql","method":"POST","orig":"webhookUpdate","segments":[],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data.webhookUpdate.webhook`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"webhook","name__orig":"webhook","Name":"Webhook","name_":"webhook","name-":"webhook","NAME":"WEBHOOK","index$":84}, {"active":true,"entity":"webhook","key$":"BasicWebhookFlow","kind":"basic","name":"BasicWebhookFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"webhook_ref01"},"match":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"webhook_ref01"}}],"index$":1},{"active":true,"data":{},"input":{"ref":"webhook_ref01","srcdatavar":"webhook_ref01_data","suffix":"_up0","textfield":"label"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-webhook_ref01"}}],"valid":[],"index$":2},{"active":true,"data":{},"input":{"ref":"webhook_ref01","srcdatavar":"webhook_ref01_data","suffix":"_dt0"},"match":{"id":"webhook01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-webhook_ref01"}}],"index$":3},{"active":true,"data":{},"input":{"ref":"webhook_ref01","suffix":"_rm0"},"match":{"id":"webhook01"},"op":"remove","spec":[],"valid":[],"index$":4},{"active":true,"data":{},"input":{"suffix":"_rt0"},"match":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"op":"list","spec":[],"valid":[{"apply":"ItemNotExists","def":{"ref":"webhook_ref01"}}],"index$":5}]}, 'Webhook')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const webhook_ref01_ent = client.Webhook()
    let webhook_ref01_data = setup.data.new.webhook['webhook_ref01']
    webhook_ref01_data['after'] = setup.idmap['after01']
    webhook_ref01_data['before'] = setup.idmap['before01']
    webhook_ref01_data['first'] = setup.idmap['first01']
    webhook_ref01_data['include_archived'] = setup.idmap['include_archived01']
    webhook_ref01_data['last'] = setup.idmap['last01']
    webhook_ref01_data['order_by'] = setup.idmap['order_by01']

    webhook_ref01_data = (await webhook_ref01_ent.create(webhook_ref01_data)).data()
    assert(null != webhook_ref01_data.id)


    // LIST
    const webhook_ref01_match: any = {}
    webhook_ref01_match['after'] = setup.idmap['after01']
    webhook_ref01_match['before'] = setup.idmap['before01']
    webhook_ref01_match['first'] = setup.idmap['first01']
    webhook_ref01_match['include_archived'] = setup.idmap['include_archived01']
    webhook_ref01_match['last'] = setup.idmap['last01']
    webhook_ref01_match['order_by'] = setup.idmap['order_by01']

    const webhook_ref01_list = (await webhook_ref01_ent.list(webhook_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(webhook_ref01_list, { id: webhook_ref01_data.id })))


    // UPDATE
    const webhook_ref01_data_up0: any = {}
    webhook_ref01_data_up0.id = webhook_ref01_data.id

    const webhook_ref01_markdef_up0 = { name: 'label', value: 'Mark01-webhook_ref01_' + setup.now }
    ;(webhook_ref01_data_up0 as any)[webhook_ref01_markdef_up0.name] = webhook_ref01_markdef_up0.value

    const webhook_ref01_resdata_up0 = (await webhook_ref01_ent.update(webhook_ref01_data_up0)).data()
    assert(webhook_ref01_resdata_up0.id === webhook_ref01_data_up0.id)

    assert((webhook_ref01_resdata_up0 as any)[webhook_ref01_markdef_up0.name] === webhook_ref01_markdef_up0.value)


    // LOAD
    const webhook_ref01_match_dt0: any = {}
    webhook_ref01_match_dt0.id = webhook_ref01_data.id
    const webhook_ref01_data_dt0 = (await webhook_ref01_ent.load(webhook_ref01_match_dt0)).data()
    assert(webhook_ref01_data_dt0.id === webhook_ref01_data.id)


    // REMOVE
    const webhook_ref01_match_rm0: any = { id: webhook_ref01_data.id }
    await webhook_ref01_ent.remove(webhook_ref01_match_rm0)
  

    // LIST
    const webhook_ref01_match_rt0: any = {}
    webhook_ref01_match_rt0['after'] = setup.idmap['after01']
    webhook_ref01_match_rt0['before'] = setup.idmap['before01']
    webhook_ref01_match_rt0['first'] = setup.idmap['first01']
    webhook_ref01_match_rt0['include_archived'] = setup.idmap['include_archived01']
    webhook_ref01_match_rt0['last'] = setup.idmap['last01']
    webhook_ref01_match_rt0['order_by'] = setup.idmap['order_by01']

    const webhook_ref01_list_rt0 = (await webhook_ref01_ent.list(webhook_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(webhook_ref01_list_rt0, { id: webhook_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/webhook/WebhookTestData.json')

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
    ['webhook01','webhook02','webhook03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_WEBHOOK_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_WEBHOOK_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_WEBHOOK_ENTID']
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
  
