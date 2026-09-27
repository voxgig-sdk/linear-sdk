

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


describe('ProjectStatusEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.ProjectStatus()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'project_status.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archivedAt":{"a":true,"h":"Archived At","n":"archivedAt","r":false,"sh":"The time at which the entity was archived.","t":"`$ANY`","key$":"archivedAt","index$":0},"color":{"a":true,"h":"Color","n":"color","r":true,"sh":"The color of the status as a HEX string, used for display in the UI.","t":"`$STRING`","key$":"color","index$":1},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"The time at which the entity was created.","t":"`$ANY`","key$":"createdAt","index$":2},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"Description of the status.","t":"`$STRING`","key$":"description","index$":3},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier of the entity.","t":"`$STRING`","key$":"id","index$":4},"indefinite":{"a":true,"h":"Indefinite","n":"indefinite","r":true,"sh":"Whether a project can remain in this status indefinitely.","t":"`$BOOLEAN`","key$":"indefinite","index$":5},"inheritedFrom":{"a":true,"h":"Inherited From","n":"inheritedFrom","r":false,"sh":"[Internal] The original workspace or parent-team status that this status was inherited from.","t":"`$OBJECT`","key$":"inheritedFrom","index$":6},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The name of the status.","t":"`$STRING`","key$":"name","index$":7},"position":{"a":true,"h":"Position","n":"position","r":true,"sh":"The position of the status within its type group in the workspace's project flow.","t":"`$NUMBER`","key$":"position","index$":8},"team":{"a":true,"h":"Team","n":"team","r":false,"sh":"[Internal] The team that the status is scoped to.","t":"`$OBJECT`","key$":"team","index$":9},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"The category type of the project status (e.g., backlog, planned, started, paused, completed, canceled).","t":"`$STRING`","key$":"type","index$":10},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"The last time at which the entity was meaningfully updated.","t":"`$ANY`","key$":"updatedAt","index$":11}},"id":{"field":"id","name":"id"},"name":"project_status","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST projectStatusCreate","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation ProjectStatusCreate($input: ProjectStatusCreateInput!) { projectStatusCreate(input: $input) { status { ...ProjectStatusFields } success } } fragment ProjectStatusFields on ProjectStatus { archivedAt color createdAt description id indefinite inheritedFrom { id } name position team { id } type updatedAt }","field":"projectStatusCreate","optype":"mutation","vars":[{"from":"","gqltype":"ProjectStatusCreateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"projectStatusCreate","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.projectStatusCreate.status`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"POST projectStatuses","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"first","or":"first","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"param","n":"include_archived","or":"include_archived","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"k":"param","n":"last","or":"last","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"param","n":"order_by","or":"order_by","r":false,"t":"`$ANY`","index$":5}]},"gq":{"doc":"query ProjectStatusList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { projectStatuses(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...ProjectStatusFields } pageInfo { endCursor hasNextPage } } } fragment ProjectStatusFields on ProjectStatus { archivedAt color createdAt description id indefinite inheritedFrom { id } name position team { id } type updatedAt }","field":"projectStatuses","optype":"query","page":{"cursor":"pageInfo.endCursor","more":"pageInfo.hasNextPage","nodes":"nodes","style":"relay"},"vars":[{"from":"after","gqltype":"String","name":"after"},{"from":"before","gqltype":"String","name":"before"},{"from":"first","gqltype":"Int","name":"first"},{"from":"includeArchived","gqltype":"Boolean","name":"includeArchived"},{"from":"last","gqltype":"Int","name":"last"},{"from":"orderBy","gqltype":"PaginationOrderBy","name":"orderBy"}]},"k":"graphql","m":"POST","o":"projectStatuses","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.projectStatuses.nodes`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"POST projectStatus","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"query ProjectStatusLoad($id: String!) { projectStatus(id: $id) { ...ProjectStatusFields } } fragment ProjectStatusFields on ProjectStatus { archivedAt color createdAt description id indefinite inheritedFrom { id } name position team { id } type updatedAt }","field":"projectStatus","optype":"query","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"projectStatus","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.projectStatus`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"POST projectStatusArchive","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation ProjectStatusUpdateArchive($id: String!) { projectStatusArchive(id: $id) { entity { ...ProjectStatusFields } success } } fragment ProjectStatusFields on ProjectStatus { archivedAt color createdAt description id indefinite inheritedFrom { id } name position team { id } type updatedAt }","field":"projectStatusArchive","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"projectStatusArchive","q":{"$action":"archive","exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.projectStatusArchive.entity`"},"index$":0},{"a":true,"co":{"id":"POST projectStatusUnarchive","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation ProjectStatusUpdateUnarchive($id: String!) { projectStatusUnarchive(id: $id) { entity { ...ProjectStatusFields } success } } fragment ProjectStatusFields on ProjectStatus { archivedAt color createdAt description id indefinite inheritedFrom { id } name position team { id } type updatedAt }","field":"projectStatusUnarchive","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"projectStatusUnarchive","q":{"$action":"unarchive","exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.projectStatusUnarchive.entity`"},"index$":1},{"a":true,"co":{"id":"POST projectStatusUpdate","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation ProjectStatusUpdate($id: String!, $input: ProjectStatusUpdateInput!) { projectStatusUpdate(id: $id, input: $input) { status { ...ProjectStatusFields } success } } fragment ProjectStatusFields on ProjectStatus { archivedAt color createdAt description id indefinite inheritedFrom { id } name position team { id } type updatedAt }","field":"projectStatusUpdate","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"","gqltype":"ProjectStatusUpdateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"projectStatusUpdate","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.projectStatusUpdate.status`"},"index$":2}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"project_status","name__orig":"project_status","Name":"ProjectStatus","name_":"project_status","name-":"project-status","NAME":"PROJECT_STATUS","index$":62}, {"active":true,"entity":"project_status","key$":"BasicProjectStatusFlow","kind":"basic","name":"BasicProjectStatusFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"project_status_ref01"},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"project_status_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"project_status_ref01","srcdatavar":"project_status_ref01_data","suffix":"_up0","textfield":"color"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-project_status_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"project_status_ref01","srcdatavar":"project_status_ref01_data","suffix":"_dt0"},"m":{"id":"project_status01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-project_status_ref01"}}],"index$":3}]}, 'ProjectStatus', {"POST projectStatusCreate":{"protocol":"graphql"},"POST projectStatuses":{"protocol":"graphql"},"POST projectStatus":{"protocol":"graphql"},"POST projectStatusArchive":{"protocol":"graphql"},"POST projectStatusUnarchive":{"protocol":"graphql"},"POST projectStatusUpdate":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const project_status_ref01_ent = client.ProjectStatus()
    let project_status_ref01_data = setup.data.new.project_status['project_status_ref01']
    project_status_ref01_data['after'] = setup.idmap['after01']
    project_status_ref01_data['before'] = setup.idmap['before01']
    project_status_ref01_data['first'] = setup.idmap['first01']
    project_status_ref01_data['include_archived'] = setup.idmap['include_archived01']
    project_status_ref01_data['last'] = setup.idmap['last01']
    project_status_ref01_data['order_by'] = setup.idmap['order_by01']

    project_status_ref01_data = (await project_status_ref01_ent.create(project_status_ref01_data)).data()
    assert(null != project_status_ref01_data.id)


    // LIST
    const project_status_ref01_match: any = {}
    project_status_ref01_match['after'] = setup.idmap['after01']
    project_status_ref01_match['before'] = setup.idmap['before01']
    project_status_ref01_match['first'] = setup.idmap['first01']
    project_status_ref01_match['include_archived'] = setup.idmap['include_archived01']
    project_status_ref01_match['last'] = setup.idmap['last01']
    project_status_ref01_match['order_by'] = setup.idmap['order_by01']

    const project_status_ref01_list = (await project_status_ref01_ent.list(project_status_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(project_status_ref01_list, { id: project_status_ref01_data.id })))


    // UPDATE
    const project_status_ref01_data_up0: any = {}
    project_status_ref01_data_up0.id = project_status_ref01_data.id

    const project_status_ref01_markdef_up0 = { name: 'color', value: 'Mark01-project_status_ref01_' + setup.now }
    ;(project_status_ref01_data_up0 as any)[project_status_ref01_markdef_up0.name] = project_status_ref01_markdef_up0.value

    const project_status_ref01_resdata_up0 = (await project_status_ref01_ent.update(project_status_ref01_data_up0)).data()
    assert(project_status_ref01_resdata_up0.id === project_status_ref01_data_up0.id)

    assert((project_status_ref01_resdata_up0 as any)[project_status_ref01_markdef_up0.name] === project_status_ref01_markdef_up0.value)


    // LOAD
    const project_status_ref01_match_dt0: any = {}
    project_status_ref01_match_dt0.id = project_status_ref01_data.id
    const project_status_ref01_data_dt0 = (await project_status_ref01_ent.load(project_status_ref01_match_dt0)).data()
    assert(project_status_ref01_data_dt0.id === project_status_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/project_status/ProjectStatusTestData.json')

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
    ['project_status01','project_status02','project_status03','after01','before01','first01','include_archived01','last01','order_by01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_PROJECT_STATUS_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_PROJECT_STATUS_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_PROJECT_STATUS_ENTID']
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
  
