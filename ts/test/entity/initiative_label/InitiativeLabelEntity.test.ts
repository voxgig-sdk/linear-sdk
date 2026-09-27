

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


describe('InitiativeLabelEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.InitiativeLabel()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'initiative_label.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archivedAt":{"a":true,"h":"Archived At","n":"archivedAt","r":false,"sh":"The time at which the entity was archived.","t":"`$ANY`","key$":"archivedAt","index$":0},"color":{"a":true,"h":"Color","n":"color","r":true,"sh":"The label's color as a HEX string (e.g., '#EB5757').","t":"`$STRING`","key$":"color","index$":1},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"The time at which the entity was created.","t":"`$ANY`","key$":"createdAt","index$":2},"creator":{"a":true,"h":"Creator","n":"creator","r":false,"sh":"The user who created the label.","t":"`$OBJECT`","key$":"creator","index$":3},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"The label's description.","t":"`$STRING`","key$":"description","index$":4},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier of the entity.","t":"`$STRING`","key$":"id","index$":5},"isGroup":{"a":true,"h":"Is Group","n":"isGroup","r":true,"sh":"Whether the label is a group.","t":"`$BOOLEAN`","key$":"isGroup","index$":6},"lastAppliedAt":{"a":true,"h":"Last Applied At","n":"lastAppliedAt","r":false,"sh":"The date when the label was last applied to an issue, project, or initiative.","t":"`$ANY`","key$":"lastAppliedAt","index$":7},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The label's name.","t":"`$STRING`","key$":"name","index$":8},"organization":{"a":true,"h":"Organization","n":"organization","r":false,"sh":"The workspace that the initiative label belongs to.","t":"`$OBJECT`","key$":"organization","index$":9},"parent":{"a":true,"h":"Parent","n":"parent","r":false,"sh":"The parent label group.","t":"`$OBJECT`","key$":"parent","index$":10},"retiredAt":{"a":true,"h":"Retired At","n":"retiredAt","r":false,"sh":"[Internal] When the label was retired.","t":"`$ANY`","key$":"retiredAt","index$":11},"retiredBy":{"a":true,"h":"Retired By","n":"retiredBy","r":false,"sh":"The user who retired the label.","t":"`$OBJECT`","key$":"retiredBy","index$":12},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"The last time at which the entity was meaningfully updated.","t":"`$ANY`","key$":"updatedAt","index$":13}},"id":{"field":"id","name":"id"},"name":"initiative_label","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST initiativeLabelCreate","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation InitiativeLabelCreate($input: InitiativeLabelCreateInput!) { initiativeLabelCreate(input: $input) { initiativeLabel { ...InitiativeLabelFields } success } } fragment InitiativeLabelFields on InitiativeLabel { archivedAt color createdAt creator { id } description id isGroup lastAppliedAt name organization { id } parent { id } retiredAt retiredBy { id } updatedAt }","field":"initiativeLabelCreate","optype":"mutation","vars":[{"from":"","gqltype":"InitiativeLabelCreateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"initiativeLabelCreate","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.initiativeLabelCreate.initiativeLabel`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"POST initiativeLabels","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"first","or":"first","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"param","n":"include_archived","or":"include_archived","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"k":"param","n":"last","or":"last","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"param","n":"order_by","or":"order_by","r":false,"t":"`$ANY`","index$":5}]},"gq":{"doc":"query InitiativeLabelList($after: String, $before: String, $filter: InitiativeLabelFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { initiativeLabels(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...InitiativeLabelFields } pageInfo { endCursor hasNextPage } } } fragment InitiativeLabelFields on InitiativeLabel { archivedAt color createdAt creator { id } description id isGroup lastAppliedAt name organization { id } parent { id } retiredAt retiredBy { id } updatedAt }","field":"initiativeLabels","optype":"query","page":{"cursor":"pageInfo.endCursor","more":"pageInfo.hasNextPage","nodes":"nodes","style":"relay"},"vars":[{"from":"after","gqltype":"String","name":"after"},{"from":"before","gqltype":"String","name":"before"},{"from":"","gqltype":"InitiativeLabelFilter","name":"filter"},{"from":"first","gqltype":"Int","name":"first"},{"from":"includeArchived","gqltype":"Boolean","name":"includeArchived"},{"from":"last","gqltype":"Int","name":"last"},{"from":"orderBy","gqltype":"PaginationOrderBy","name":"orderBy"}]},"k":"graphql","m":"POST","o":"initiativeLabels","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.initiativeLabels.nodes`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"POST initiativeLabel","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"query InitiativeLabelLoad($id: String!) { initiativeLabel(id: $id) { ...InitiativeLabelFields } } fragment InitiativeLabelFields on InitiativeLabel { archivedAt color createdAt creator { id } description id isGroup lastAppliedAt name organization { id } parent { id } retiredAt retiredBy { id } updatedAt }","field":"initiativeLabel","optype":"query","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"initiativeLabel","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.initiativeLabel`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"POST initiativeLabelDelete","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation InitiativeLabelRemove($id: String!) { initiativeLabelDelete(id: $id) { entityId lastSyncId success } }","field":"initiativeLabelDelete","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"initiativeLabelDelete","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.initiativeLabelDelete`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"POST initiativeLabelRestore","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation InitiativeLabelUpdateRestore($id: String!) { initiativeLabelRestore(id: $id) { initiativeLabel { ...InitiativeLabelFields } success } } fragment InitiativeLabelFields on InitiativeLabel { archivedAt color createdAt creator { id } description id isGroup lastAppliedAt name organization { id } parent { id } retiredAt retiredBy { id } updatedAt }","field":"initiativeLabelRestore","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"initiativeLabelRestore","q":{"$action":"restore","exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.initiativeLabelRestore.initiativeLabel`"},"index$":0},{"a":true,"co":{"id":"POST initiativeLabelRetire","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation InitiativeLabelUpdateRetire($id: String!) { initiativeLabelRetire(id: $id) { initiativeLabel { ...InitiativeLabelFields } success } } fragment InitiativeLabelFields on InitiativeLabel { archivedAt color createdAt creator { id } description id isGroup lastAppliedAt name organization { id } parent { id } retiredAt retiredBy { id } updatedAt }","field":"initiativeLabelRetire","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"initiativeLabelRetire","q":{"$action":"retire","exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.initiativeLabelRetire.initiativeLabel`"},"index$":1},{"a":true,"co":{"id":"POST initiativeLabelUpdate","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation InitiativeLabelUpdate($id: String!, $input: InitiativeLabelUpdateInput!) { initiativeLabelUpdate(id: $id, input: $input) { initiativeLabel { ...InitiativeLabelFields } success } } fragment InitiativeLabelFields on InitiativeLabel { archivedAt color createdAt creator { id } description id isGroup lastAppliedAt name organization { id } parent { id } retiredAt retiredBy { id } updatedAt }","field":"initiativeLabelUpdate","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"","gqltype":"InitiativeLabelUpdateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"initiativeLabelUpdate","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.initiativeLabelUpdate.initiativeLabel`"},"index$":2}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"initiative_label","name__orig":"initiative_label","Name":"InitiativeLabel","name_":"initiative_label","name-":"initiative-label","NAME":"INITIATIVE_LABEL","index$":32}, {"active":true,"entity":"initiative_label","key$":"BasicInitiativeLabelFlow","kind":"basic","name":"BasicInitiativeLabelFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"initiative_label_ref01"},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"initiative_label_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"initiative_label_ref01","srcdatavar":"initiative_label_ref01_data","suffix":"_up0","textfield":"color"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-initiative_label_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"initiative_label_ref01","srcdatavar":"initiative_label_ref01_data","suffix":"_dt0"},"m":{"id":"initiative_label01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-initiative_label_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"initiative_label_ref01","suffix":"_rm0"},"m":{"id":"initiative_label01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"initiative_label_ref01"}}],"index$":5}]}, 'InitiativeLabel', {"POST initiativeLabelCreate":{"protocol":"graphql"},"POST initiativeLabels":{"protocol":"graphql"},"POST initiativeLabel":{"protocol":"graphql"},"POST initiativeLabelDelete":{"protocol":"graphql"},"POST initiativeLabelRestore":{"protocol":"graphql"},"POST initiativeLabelRetire":{"protocol":"graphql"},"POST initiativeLabelUpdate":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const initiative_label_ref01_ent = client.InitiativeLabel()
    let initiative_label_ref01_data = setup.data.new.initiative_label['initiative_label_ref01']
    initiative_label_ref01_data['after'] = setup.idmap['after01']
    initiative_label_ref01_data['before'] = setup.idmap['before01']
    initiative_label_ref01_data['first'] = setup.idmap['first01']
    initiative_label_ref01_data['include_archived'] = setup.idmap['include_archived01']
    initiative_label_ref01_data['last'] = setup.idmap['last01']
    initiative_label_ref01_data['order_by'] = setup.idmap['order_by01']

    initiative_label_ref01_data = (await initiative_label_ref01_ent.create(initiative_label_ref01_data)).data()
    assert(null != initiative_label_ref01_data.id)


    // LIST
    const initiative_label_ref01_match: any = {}
    initiative_label_ref01_match['after'] = setup.idmap['after01']
    initiative_label_ref01_match['before'] = setup.idmap['before01']
    initiative_label_ref01_match['first'] = setup.idmap['first01']
    initiative_label_ref01_match['include_archived'] = setup.idmap['include_archived01']
    initiative_label_ref01_match['last'] = setup.idmap['last01']
    initiative_label_ref01_match['order_by'] = setup.idmap['order_by01']

    const initiative_label_ref01_list = (await initiative_label_ref01_ent.list(initiative_label_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(initiative_label_ref01_list, { id: initiative_label_ref01_data.id })))


    // UPDATE
    const initiative_label_ref01_data_up0: any = {}
    initiative_label_ref01_data_up0.id = initiative_label_ref01_data.id

    const initiative_label_ref01_markdef_up0 = { name: 'color', value: 'Mark01-initiative_label_ref01_' + setup.now }
    ;(initiative_label_ref01_data_up0 as any)[initiative_label_ref01_markdef_up0.name] = initiative_label_ref01_markdef_up0.value

    const initiative_label_ref01_resdata_up0 = (await initiative_label_ref01_ent.update(initiative_label_ref01_data_up0)).data()
    assert(initiative_label_ref01_resdata_up0.id === initiative_label_ref01_data_up0.id)

    assert((initiative_label_ref01_resdata_up0 as any)[initiative_label_ref01_markdef_up0.name] === initiative_label_ref01_markdef_up0.value)


    // LOAD
    const initiative_label_ref01_match_dt0: any = {}
    initiative_label_ref01_match_dt0.id = initiative_label_ref01_data.id
    const initiative_label_ref01_data_dt0 = (await initiative_label_ref01_ent.load(initiative_label_ref01_match_dt0)).data()
    assert(initiative_label_ref01_data_dt0.id === initiative_label_ref01_data.id)


    // REMOVE
    const initiative_label_ref01_match_rm0: any = { id: initiative_label_ref01_data.id }
    await initiative_label_ref01_ent.remove(initiative_label_ref01_match_rm0)
  

    // LIST
    const initiative_label_ref01_match_rt0: any = {}
    initiative_label_ref01_match_rt0['after'] = setup.idmap['after01']
    initiative_label_ref01_match_rt0['before'] = setup.idmap['before01']
    initiative_label_ref01_match_rt0['first'] = setup.idmap['first01']
    initiative_label_ref01_match_rt0['include_archived'] = setup.idmap['include_archived01']
    initiative_label_ref01_match_rt0['last'] = setup.idmap['last01']
    initiative_label_ref01_match_rt0['order_by'] = setup.idmap['order_by01']

    const initiative_label_ref01_list_rt0 = (await initiative_label_ref01_ent.list(initiative_label_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(initiative_label_ref01_list_rt0, { id: initiative_label_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/initiative_label/InitiativeLabelTestData.json')

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
    ['initiative_label01','initiative_label02','initiative_label03','after01','before01','first01','include_archived01','last01','order_by01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_INITIATIVE_LABEL_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_INITIATIVE_LABEL_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_INITIATIVE_LABEL_ENTID']
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
  
