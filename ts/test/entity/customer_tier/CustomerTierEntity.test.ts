

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


describe('CustomerTierEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.CustomerTier()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'customer_tier.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archivedAt":{"a":true,"h":"Archived At","n":"archivedAt","r":false,"sh":"The time at which the entity was archived.","t":"`$ANY`","key$":"archivedAt","index$":0},"color":{"a":true,"h":"Color","n":"color","r":true,"sh":"The color of the tier indicator in the UI, as a HEX string (e.g., '#ff0000').","t":"`$STRING`","key$":"color","index$":1},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"The time at which the entity was created.","t":"`$ANY`","key$":"createdAt","index$":2},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"An optional description explaining what this tier represents and its intended use for customer segmentation.","t":"`$STRING`","key$":"description","index$":3},"displayName":{"a":true,"h":"Display Name","n":"displayName","r":true,"sh":"The user-facing display name of the tier shown in the UI.","t":"`$STRING`","key$":"displayName","index$":4},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier of the entity.","t":"`$STRING`","key$":"id","index$":5},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The internal name of the tier.","t":"`$STRING`","key$":"name","index$":6},"position":{"a":true,"h":"Position","n":"position","r":true,"sh":"The sort position of the tier in the workspace's customer tier ordering.","t":"`$NUMBER`","key$":"position","index$":7},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"The last time at which the entity was meaningfully updated.","t":"`$ANY`","key$":"updatedAt","index$":8}},"id":{"field":"id","name":"id"},"name":"customer_tier","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST customerTierCreate","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation CustomerTierCreate($input: CustomerTierCreateInput!) { customerTierCreate(input: $input) { tier { ...CustomerTierFields } success } } fragment CustomerTierFields on CustomerTier { archivedAt color createdAt description displayName id name position updatedAt }","field":"customerTierCreate","optype":"mutation","vars":[{"from":"","gqltype":"CustomerTierCreateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"customerTierCreate","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.customerTierCreate.tier`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"POST customerTiers","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"first","or":"first","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"param","n":"include_archived","or":"include_archived","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"k":"param","n":"last","or":"last","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"param","n":"order_by","or":"order_by","r":false,"t":"`$ANY`","index$":5}]},"gq":{"doc":"query CustomerTierList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { customerTiers(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...CustomerTierFields } pageInfo { endCursor hasNextPage } } } fragment CustomerTierFields on CustomerTier { archivedAt color createdAt description displayName id name position updatedAt }","field":"customerTiers","optype":"query","page":{"cursor":"pageInfo.endCursor","more":"pageInfo.hasNextPage","nodes":"nodes","style":"relay"},"vars":[{"from":"after","gqltype":"String","name":"after"},{"from":"before","gqltype":"String","name":"before"},{"from":"first","gqltype":"Int","name":"first"},{"from":"includeArchived","gqltype":"Boolean","name":"includeArchived"},{"from":"last","gqltype":"Int","name":"last"},{"from":"orderBy","gqltype":"PaginationOrderBy","name":"orderBy"}]},"k":"graphql","m":"POST","o":"customerTiers","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.customerTiers.nodes`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"POST customerTier","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"query CustomerTierLoad($id: String!) { customerTier(id: $id) { ...CustomerTierFields } } fragment CustomerTierFields on CustomerTier { archivedAt color createdAt description displayName id name position updatedAt }","field":"customerTier","optype":"query","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"customerTier","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.customerTier`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"POST customerTierDelete","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation CustomerTierRemove($id: String!) { customerTierDelete(id: $id) { entityId lastSyncId success } }","field":"customerTierDelete","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"customerTierDelete","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.customerTierDelete`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"POST customerTierUpdate","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation CustomerTierUpdate($id: String!, $input: CustomerTierUpdateInput!) { customerTierUpdate(id: $id, input: $input) { tier { ...CustomerTierFields } success } } fragment CustomerTierFields on CustomerTier { archivedAt color createdAt description displayName id name position updatedAt }","field":"customerTierUpdate","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"","gqltype":"CustomerTierUpdateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"customerTierUpdate","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.customerTierUpdate.tier`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"customer_tier","name__orig":"customer_tier","Name":"CustomerTier","name_":"customer_tier","name-":"customer-tier","NAME":"CUSTOMER_TIER","index$":17}, {"active":true,"entity":"customer_tier","key$":"BasicCustomerTierFlow","kind":"basic","name":"BasicCustomerTierFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"customer_tier_ref01"},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"customer_tier_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"customer_tier_ref01","srcdatavar":"customer_tier_ref01_data","suffix":"_up0","textfield":"color"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-customer_tier_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"customer_tier_ref01","srcdatavar":"customer_tier_ref01_data","suffix":"_dt0"},"m":{"id":"customer_tier01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-customer_tier_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"customer_tier_ref01","suffix":"_rm0"},"m":{"id":"customer_tier01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"customer_tier_ref01"}}],"index$":5}]}, 'CustomerTier', {"POST customerTierCreate":{"protocol":"graphql"},"POST customerTiers":{"protocol":"graphql"},"POST customerTier":{"protocol":"graphql"},"POST customerTierDelete":{"protocol":"graphql"},"POST customerTierUpdate":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const customer_tier_ref01_ent = client.CustomerTier()
    let customer_tier_ref01_data = setup.data.new.customer_tier['customer_tier_ref01']
    customer_tier_ref01_data['after'] = setup.idmap['after01']
    customer_tier_ref01_data['before'] = setup.idmap['before01']
    customer_tier_ref01_data['first'] = setup.idmap['first01']
    customer_tier_ref01_data['include_archived'] = setup.idmap['include_archived01']
    customer_tier_ref01_data['last'] = setup.idmap['last01']
    customer_tier_ref01_data['order_by'] = setup.idmap['order_by01']

    customer_tier_ref01_data = (await customer_tier_ref01_ent.create(customer_tier_ref01_data)).data()
    assert(null != customer_tier_ref01_data.id)


    // LIST
    const customer_tier_ref01_match: any = {}
    customer_tier_ref01_match['after'] = setup.idmap['after01']
    customer_tier_ref01_match['before'] = setup.idmap['before01']
    customer_tier_ref01_match['first'] = setup.idmap['first01']
    customer_tier_ref01_match['include_archived'] = setup.idmap['include_archived01']
    customer_tier_ref01_match['last'] = setup.idmap['last01']
    customer_tier_ref01_match['order_by'] = setup.idmap['order_by01']

    const customer_tier_ref01_list = (await customer_tier_ref01_ent.list(customer_tier_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(customer_tier_ref01_list, { id: customer_tier_ref01_data.id })))


    // UPDATE
    const customer_tier_ref01_data_up0: any = {}
    customer_tier_ref01_data_up0.id = customer_tier_ref01_data.id

    const customer_tier_ref01_markdef_up0 = { name: 'color', value: 'Mark01-customer_tier_ref01_' + setup.now }
    ;(customer_tier_ref01_data_up0 as any)[customer_tier_ref01_markdef_up0.name] = customer_tier_ref01_markdef_up0.value

    const customer_tier_ref01_resdata_up0 = (await customer_tier_ref01_ent.update(customer_tier_ref01_data_up0)).data()
    assert(customer_tier_ref01_resdata_up0.id === customer_tier_ref01_data_up0.id)

    assert((customer_tier_ref01_resdata_up0 as any)[customer_tier_ref01_markdef_up0.name] === customer_tier_ref01_markdef_up0.value)


    // LOAD
    const customer_tier_ref01_match_dt0: any = {}
    customer_tier_ref01_match_dt0.id = customer_tier_ref01_data.id
    const customer_tier_ref01_data_dt0 = (await customer_tier_ref01_ent.load(customer_tier_ref01_match_dt0)).data()
    assert(customer_tier_ref01_data_dt0.id === customer_tier_ref01_data.id)


    // REMOVE
    const customer_tier_ref01_match_rm0: any = { id: customer_tier_ref01_data.id }
    await customer_tier_ref01_ent.remove(customer_tier_ref01_match_rm0)
  

    // LIST
    const customer_tier_ref01_match_rt0: any = {}
    customer_tier_ref01_match_rt0['after'] = setup.idmap['after01']
    customer_tier_ref01_match_rt0['before'] = setup.idmap['before01']
    customer_tier_ref01_match_rt0['first'] = setup.idmap['first01']
    customer_tier_ref01_match_rt0['include_archived'] = setup.idmap['include_archived01']
    customer_tier_ref01_match_rt0['last'] = setup.idmap['last01']
    customer_tier_ref01_match_rt0['order_by'] = setup.idmap['order_by01']

    const customer_tier_ref01_list_rt0 = (await customer_tier_ref01_ent.list(customer_tier_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(customer_tier_ref01_list_rt0, { id: customer_tier_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/customer_tier/CustomerTierTestData.json')

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
    ['customer_tier01','customer_tier02','customer_tier03','after01','before01','first01','include_archived01','last01','order_by01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_CUSTOMER_TIER_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_CUSTOMER_TIER_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_CUSTOMER_TIER_ENTID']
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
  
