

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


describe('TriageResponsibilityEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.TriageResponsibility()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'triage_responsibility.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"action":{"a":true,"h":"Action","n":"action","r":true,"sh":"The action to take when an issue is added to triage.","t":"`$STRING`","key$":"action","index$":0},"archivedAt":{"a":true,"h":"Archived At","n":"archivedAt","r":false,"sh":"The time at which the entity was archived.","t":"`$ANY`","key$":"archivedAt","index$":1},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"The time at which the entity was created.","t":"`$ANY`","key$":"createdAt","index$":2},"currentUser":{"a":true,"h":"Current User","n":"currentUser","r":false,"sh":"The user currently responsible for triage.","t":"`$OBJECT`","key$":"currentUser","index$":3},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier of the entity.","t":"`$STRING`","key$":"id","index$":4},"team":{"a":true,"h":"Team","n":"team","r":false,"sh":"The team to which the triage responsibility belongs to.","t":"`$OBJECT`","key$":"team","index$":5},"timeSchedule":{"a":true,"h":"Time Schedule","n":"timeSchedule","r":false,"sh":"The time schedule used for scheduling.","t":"`$OBJECT`","key$":"timeSchedule","index$":6},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"The last time at which the entity was meaningfully updated.","t":"`$ANY`","key$":"updatedAt","index$":7}},"id":{"field":"id","name":"id"},"name":"triage_responsibility","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST triageResponsibilityCreate","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation TriageResponsibilityCreate($input: TriageResponsibilityCreateInput!) { triageResponsibilityCreate(input: $input) { triageResponsibility { ...TriageResponsibilityFields } success } } fragment TriageResponsibilityFields on TriageResponsibility { action archivedAt createdAt currentUser { id } id team { id } timeSchedule { id } updatedAt }","field":"triageResponsibilityCreate","optype":"mutation","vars":[{"from":"","gqltype":"TriageResponsibilityCreateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"triageResponsibilityCreate","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.triageResponsibilityCreate.triageResponsibility`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"POST triageResponsibilities","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"first","or":"first","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"param","n":"include_archived","or":"include_archived","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"k":"param","n":"last","or":"last","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"param","n":"order_by","or":"order_by","r":false,"t":"`$ANY`","index$":5}]},"gq":{"doc":"query TriageResponsibilityList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { triageResponsibilities(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...TriageResponsibilityFields } pageInfo { endCursor hasNextPage } } } fragment TriageResponsibilityFields on TriageResponsibility { action archivedAt createdAt currentUser { id } id team { id } timeSchedule { id } updatedAt }","field":"triageResponsibilities","optype":"query","page":{"cursor":"pageInfo.endCursor","more":"pageInfo.hasNextPage","nodes":"nodes","style":"relay"},"vars":[{"from":"after","gqltype":"String","name":"after"},{"from":"before","gqltype":"String","name":"before"},{"from":"first","gqltype":"Int","name":"first"},{"from":"includeArchived","gqltype":"Boolean","name":"includeArchived"},{"from":"last","gqltype":"Int","name":"last"},{"from":"orderBy","gqltype":"PaginationOrderBy","name":"orderBy"}]},"k":"graphql","m":"POST","o":"triageResponsibilities","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.triageResponsibilities.nodes`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"POST triageResponsibility","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"query TriageResponsibilityLoad($id: String!) { triageResponsibility(id: $id) { ...TriageResponsibilityFields } } fragment TriageResponsibilityFields on TriageResponsibility { action archivedAt createdAt currentUser { id } id team { id } timeSchedule { id } updatedAt }","field":"triageResponsibility","optype":"query","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"triageResponsibility","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.triageResponsibility`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"POST triageResponsibilityDelete","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation TriageResponsibilityRemove($id: String!) { triageResponsibilityDelete(id: $id) { entityId lastSyncId success } }","field":"triageResponsibilityDelete","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"triageResponsibilityDelete","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.triageResponsibilityDelete`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"POST triageResponsibilityUpdate","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation TriageResponsibilityUpdate($id: String!, $input: TriageResponsibilityUpdateInput!) { triageResponsibilityUpdate(id: $id, input: $input) { triageResponsibility { ...TriageResponsibilityFields } success } } fragment TriageResponsibilityFields on TriageResponsibility { action archivedAt createdAt currentUser { id } id team { id } timeSchedule { id } updatedAt }","field":"triageResponsibilityUpdate","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"","gqltype":"TriageResponsibilityUpdateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"triageResponsibilityUpdate","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.triageResponsibilityUpdate.triageResponsibility`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"triage_responsibility","name__orig":"triage_responsibility","Name":"TriageResponsibility","name_":"triage_responsibility","name-":"triage-responsibility","NAME":"TRIAGE_RESPONSIBILITY","index$":78}, {"active":true,"entity":"triage_responsibility","key$":"BasicTriageResponsibilityFlow","kind":"basic","name":"BasicTriageResponsibilityFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"triage_responsibility_ref01"},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"triage_responsibility_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"triage_responsibility_ref01","srcdatavar":"triage_responsibility_ref01_data","suffix":"_up0","textfield":"action"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-triage_responsibility_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"triage_responsibility_ref01","srcdatavar":"triage_responsibility_ref01_data","suffix":"_dt0"},"m":{"id":"triage_responsibility01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-triage_responsibility_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"triage_responsibility_ref01","suffix":"_rm0"},"m":{"id":"triage_responsibility01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"triage_responsibility_ref01"}}],"index$":5}]}, 'TriageResponsibility', {"POST triageResponsibilityCreate":{"protocol":"graphql"},"POST triageResponsibilities":{"protocol":"graphql"},"POST triageResponsibility":{"protocol":"graphql"},"POST triageResponsibilityDelete":{"protocol":"graphql"},"POST triageResponsibilityUpdate":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const triage_responsibility_ref01_ent = client.TriageResponsibility()
    let triage_responsibility_ref01_data = setup.data.new.triage_responsibility['triage_responsibility_ref01']
    triage_responsibility_ref01_data['after'] = setup.idmap['after01']
    triage_responsibility_ref01_data['before'] = setup.idmap['before01']
    triage_responsibility_ref01_data['first'] = setup.idmap['first01']
    triage_responsibility_ref01_data['include_archived'] = setup.idmap['include_archived01']
    triage_responsibility_ref01_data['last'] = setup.idmap['last01']
    triage_responsibility_ref01_data['order_by'] = setup.idmap['order_by01']

    triage_responsibility_ref01_data = (await triage_responsibility_ref01_ent.create(triage_responsibility_ref01_data)).data()
    assert(null != triage_responsibility_ref01_data.id)


    // LIST
    const triage_responsibility_ref01_match: any = {}
    triage_responsibility_ref01_match['after'] = setup.idmap['after01']
    triage_responsibility_ref01_match['before'] = setup.idmap['before01']
    triage_responsibility_ref01_match['first'] = setup.idmap['first01']
    triage_responsibility_ref01_match['include_archived'] = setup.idmap['include_archived01']
    triage_responsibility_ref01_match['last'] = setup.idmap['last01']
    triage_responsibility_ref01_match['order_by'] = setup.idmap['order_by01']

    const triage_responsibility_ref01_list = (await triage_responsibility_ref01_ent.list(triage_responsibility_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(triage_responsibility_ref01_list, { id: triage_responsibility_ref01_data.id })))


    // UPDATE
    const triage_responsibility_ref01_data_up0: any = {}
    triage_responsibility_ref01_data_up0.id = triage_responsibility_ref01_data.id

    const triage_responsibility_ref01_markdef_up0 = { name: 'action', value: 'Mark01-triage_responsibility_ref01_' + setup.now }
    ;(triage_responsibility_ref01_data_up0 as any)[triage_responsibility_ref01_markdef_up0.name] = triage_responsibility_ref01_markdef_up0.value

    const triage_responsibility_ref01_resdata_up0 = (await triage_responsibility_ref01_ent.update(triage_responsibility_ref01_data_up0)).data()
    assert(triage_responsibility_ref01_resdata_up0.id === triage_responsibility_ref01_data_up0.id)

    assert((triage_responsibility_ref01_resdata_up0 as any)[triage_responsibility_ref01_markdef_up0.name] === triage_responsibility_ref01_markdef_up0.value)


    // LOAD
    const triage_responsibility_ref01_match_dt0: any = {}
    triage_responsibility_ref01_match_dt0.id = triage_responsibility_ref01_data.id
    const triage_responsibility_ref01_data_dt0 = (await triage_responsibility_ref01_ent.load(triage_responsibility_ref01_match_dt0)).data()
    assert(triage_responsibility_ref01_data_dt0.id === triage_responsibility_ref01_data.id)


    // REMOVE
    const triage_responsibility_ref01_match_rm0: any = { id: triage_responsibility_ref01_data.id }
    await triage_responsibility_ref01_ent.remove(triage_responsibility_ref01_match_rm0)
  

    // LIST
    const triage_responsibility_ref01_match_rt0: any = {}
    triage_responsibility_ref01_match_rt0['after'] = setup.idmap['after01']
    triage_responsibility_ref01_match_rt0['before'] = setup.idmap['before01']
    triage_responsibility_ref01_match_rt0['first'] = setup.idmap['first01']
    triage_responsibility_ref01_match_rt0['include_archived'] = setup.idmap['include_archived01']
    triage_responsibility_ref01_match_rt0['last'] = setup.idmap['last01']
    triage_responsibility_ref01_match_rt0['order_by'] = setup.idmap['order_by01']

    const triage_responsibility_ref01_list_rt0 = (await triage_responsibility_ref01_ent.list(triage_responsibility_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(triage_responsibility_ref01_list_rt0, { id: triage_responsibility_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/triage_responsibility/TriageResponsibilityTestData.json')

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
    ['triage_responsibility01','triage_responsibility02','triage_responsibility03','after01','before01','first01','include_archived01','last01','order_by01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_TRIAGE_RESPONSIBILITY_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_TRIAGE_RESPONSIBILITY_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_TRIAGE_RESPONSIBILITY_ENTID']
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
  
