

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


describe('IntegrationTemplateEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.IntegrationTemplate()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'list', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'integration_template.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archivedAt":{"a":true,"h":"Archived At","n":"archivedAt","r":false,"sh":"The time at which the entity was archived.","t":"`$ANY`","key$":"archivedAt","index$":0},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"The time at which the entity was created.","t":"`$ANY`","key$":"createdAt","index$":1},"foreignEntityId":{"a":true,"h":"Foreign Entity Id","n":"foreignEntityId","r":false,"sh":"The identifier of the foreign entity in the external service that this template is scoped to.","t":"`$STRING`","key$":"foreignEntityId","index$":2},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier of the entity.","t":"`$STRING`","key$":"id","index$":3},"integration":{"a":true,"h":"Integration","n":"integration","r":false,"sh":"The integration that the template is associated with.","t":"`$OBJECT`","key$":"integration","index$":4},"template":{"a":true,"h":"Template","n":"template","r":false,"sh":"The template that the integration is associated with.","t":"`$OBJECT`","key$":"template","index$":5},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"The last time at which the entity was meaningfully updated.","t":"`$ANY`","key$":"updatedAt","index$":6}},"id":{"field":"id","name":"id"},"name":"integration_template","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST integrationTemplateCreate","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation IntegrationTemplateCreate($input: IntegrationTemplateCreateInput!) { integrationTemplateCreate(input: $input) { integrationTemplate { ...IntegrationTemplateFields } success } } fragment IntegrationTemplateFields on IntegrationTemplate { archivedAt createdAt foreignEntityId id integration { id } template { id } updatedAt }","field":"integrationTemplateCreate","optype":"mutation","vars":[{"from":"","gqltype":"IntegrationTemplateCreateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"integrationTemplateCreate","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.integrationTemplateCreate.integrationTemplate`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"POST integrationTemplates","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"first","or":"first","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"param","n":"include_archived","or":"include_archived","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"k":"param","n":"last","or":"last","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"param","n":"order_by","or":"order_by","r":false,"t":"`$ANY`","index$":5}]},"gq":{"doc":"query IntegrationTemplateList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { integrationTemplates(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...IntegrationTemplateFields } pageInfo { endCursor hasNextPage } } } fragment IntegrationTemplateFields on IntegrationTemplate { archivedAt createdAt foreignEntityId id integration { id } template { id } updatedAt }","field":"integrationTemplates","optype":"query","page":{"cursor":"pageInfo.endCursor","more":"pageInfo.hasNextPage","nodes":"nodes","style":"relay"},"vars":[{"from":"after","gqltype":"String","name":"after"},{"from":"before","gqltype":"String","name":"before"},{"from":"first","gqltype":"Int","name":"first"},{"from":"includeArchived","gqltype":"Boolean","name":"includeArchived"},{"from":"last","gqltype":"Int","name":"last"},{"from":"orderBy","gqltype":"PaginationOrderBy","name":"orderBy"}]},"k":"graphql","m":"POST","o":"integrationTemplates","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.integrationTemplates.nodes`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"POST integrationTemplate","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"query IntegrationTemplateLoad($id: String!) { integrationTemplate(id: $id) { ...IntegrationTemplateFields } } fragment IntegrationTemplateFields on IntegrationTemplate { archivedAt createdAt foreignEntityId id integration { id } template { id } updatedAt }","field":"integrationTemplate","optype":"query","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"integrationTemplate","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.integrationTemplate`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"POST integrationTemplateDelete","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation IntegrationTemplateRemove($id: String!) { integrationTemplateDelete(id: $id) { entityId lastSyncId success } }","field":"integrationTemplateDelete","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"integrationTemplateDelete","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.integrationTemplateDelete`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"integration_template","name__orig":"integration_template","Name":"IntegrationTemplate","name_":"integration_template","name-":"integration-template","NAME":"INTEGRATION_TEMPLATE","index$":38}, {"active":true,"entity":"integration_template","key$":"BasicIntegrationTemplateFlow","kind":"basic","name":"BasicIntegrationTemplateFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"integration_template_ref01"},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"integration_template_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"integration_template_ref01","srcdatavar":"integration_template_ref01_data","suffix":"_dt0"},"m":{"id":"integration_template01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-integration_template_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"integration_template_ref01","suffix":"_rm0"},"m":{"id":"integration_template01"},"o":"remove","s":[],"v":[],"index$":3},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"integration_template_ref01"}}],"index$":4}]}, 'IntegrationTemplate', {"POST integrationTemplateCreate":{"protocol":"graphql"},"POST integrationTemplates":{"protocol":"graphql"},"POST integrationTemplate":{"protocol":"graphql"},"POST integrationTemplateDelete":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const integration_template_ref01_ent = client.IntegrationTemplate()
    let integration_template_ref01_data = setup.data.new.integration_template['integration_template_ref01']
    integration_template_ref01_data['after'] = setup.idmap['after01']
    integration_template_ref01_data['before'] = setup.idmap['before01']
    integration_template_ref01_data['first'] = setup.idmap['first01']
    integration_template_ref01_data['include_archived'] = setup.idmap['include_archived01']
    integration_template_ref01_data['last'] = setup.idmap['last01']
    integration_template_ref01_data['order_by'] = setup.idmap['order_by01']

    integration_template_ref01_data = (await integration_template_ref01_ent.create(integration_template_ref01_data)).data()
    assert(null != integration_template_ref01_data.id)


    // LIST
    const integration_template_ref01_match: any = {}
    integration_template_ref01_match['after'] = setup.idmap['after01']
    integration_template_ref01_match['before'] = setup.idmap['before01']
    integration_template_ref01_match['first'] = setup.idmap['first01']
    integration_template_ref01_match['include_archived'] = setup.idmap['include_archived01']
    integration_template_ref01_match['last'] = setup.idmap['last01']
    integration_template_ref01_match['order_by'] = setup.idmap['order_by01']

    const integration_template_ref01_list = (await integration_template_ref01_ent.list(integration_template_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(integration_template_ref01_list, { id: integration_template_ref01_data.id })))


    // LOAD
    const integration_template_ref01_match_dt0: any = {}
    integration_template_ref01_match_dt0.id = integration_template_ref01_data.id
    const integration_template_ref01_data_dt0 = (await integration_template_ref01_ent.load(integration_template_ref01_match_dt0)).data()
    assert(integration_template_ref01_data_dt0.id === integration_template_ref01_data.id)


    // REMOVE
    const integration_template_ref01_match_rm0: any = { id: integration_template_ref01_data.id }
    await integration_template_ref01_ent.remove(integration_template_ref01_match_rm0)
  

    // LIST
    const integration_template_ref01_match_rt0: any = {}
    integration_template_ref01_match_rt0['after'] = setup.idmap['after01']
    integration_template_ref01_match_rt0['before'] = setup.idmap['before01']
    integration_template_ref01_match_rt0['first'] = setup.idmap['first01']
    integration_template_ref01_match_rt0['include_archived'] = setup.idmap['include_archived01']
    integration_template_ref01_match_rt0['last'] = setup.idmap['last01']
    integration_template_ref01_match_rt0['order_by'] = setup.idmap['order_by01']

    const integration_template_ref01_list_rt0 = (await integration_template_ref01_ent.list(integration_template_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(integration_template_ref01_list_rt0, { id: integration_template_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/integration_template/IntegrationTemplateTestData.json')

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
    ['integration_template01','integration_template02','integration_template03','after01','before01','first01','include_archived01','last01','order_by01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_INTEGRATION_TEMPLATE_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_INTEGRATION_TEMPLATE_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_INTEGRATION_TEMPLATE_ENTID']
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
  
