

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


describe('ProjectMilestoneEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.ProjectMilestone()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'project_milestone.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archivedAt":{"a":true,"h":"Archived At","n":"archivedAt","r":false,"sh":"The time at which the entity was archived.","t":"`$ANY`","key$":"archivedAt","index$":0},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"The time at which the entity was created.","t":"`$ANY`","key$":"createdAt","index$":1},"currentProgress":{"a":true,"h":"Current Progress","n":"currentProgress","r":true,"sh":"[Internal] The current progress of the milestone, broken down by issue status category.","t":"`$ANY`","key$":"currentProgress","index$":2},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"The project milestone's description in markdown format.","t":"`$STRING`","key$":"description","index$":3},"descriptionState":{"a":true,"h":"Description State","n":"descriptionState","r":false,"sh":"[Internal] The project milestone's description as YJS state.","t":"`$STRING`","key$":"descriptionState","index$":4},"documentContent":{"a":true,"h":"Document Content","n":"documentContent","r":false,"sh":"The rich-text content of the milestone description.","t":"`$OBJECT`","key$":"documentContent","index$":5},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier of the entity.","t":"`$STRING`","key$":"id","index$":6},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The name of the project milestone.","t":"`$STRING`","key$":"name","index$":7},"progress":{"a":true,"h":"Progress","n":"progress","r":true,"sh":"The progress % of the project milestone.","t":"`$NUMBER`","key$":"progress","index$":8},"progressHistory":{"a":true,"h":"Progress History","n":"progressHistory","r":true,"sh":"[Internal] The progress history of the milestone, tracking issue completion over time.","t":"`$ANY`","key$":"progressHistory","index$":9},"project":{"a":true,"h":"Project","n":"project","r":false,"sh":"The project that this milestone belongs to.","t":"`$OBJECT`","key$":"project","index$":10},"sortOrder":{"a":true,"h":"Sort Order","n":"sortOrder","r":true,"sh":"The order of the milestone in relation to other milestones within a project.","t":"`$NUMBER`","key$":"sortOrder","index$":11},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"The status of the project milestone.","t":"`$STRING`","key$":"status","index$":12},"targetDate":{"a":true,"h":"Target Date","n":"targetDate","r":false,"sh":"The planned completion date of the milestone.","t":"`$ANY`","key$":"targetDate","index$":13},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"The last time at which the entity was meaningfully updated.","t":"`$ANY`","key$":"updatedAt","index$":14}},"id":{"field":"id","name":"id"},"name":"project_milestone","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST projectMilestoneCreate","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation ProjectMilestoneCreate($input: ProjectMilestoneCreateInput!) { projectMilestoneCreate(input: $input) { projectMilestone { ...ProjectMilestoneFields } success } } fragment ProjectMilestoneFields on ProjectMilestone { archivedAt createdAt currentProgress description descriptionState documentContent { id } id name progress progressHistory project { id } sortOrder status targetDate updatedAt }","field":"projectMilestoneCreate","optype":"mutation","vars":[{"from":"","gqltype":"ProjectMilestoneCreateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"projectMilestoneCreate","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.projectMilestoneCreate.projectMilestone`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"POST projectMilestones","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"first","or":"first","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"param","n":"include_archived","or":"include_archived","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"k":"param","n":"last","or":"last","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"param","n":"order_by","or":"order_by","r":false,"t":"`$ANY`","index$":5}]},"gq":{"doc":"query ProjectMilestoneList($after: String, $before: String, $filter: ProjectMilestoneFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { projectMilestones(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...ProjectMilestoneFields } pageInfo { endCursor hasNextPage } } } fragment ProjectMilestoneFields on ProjectMilestone { archivedAt createdAt currentProgress description descriptionState documentContent { id } id name progress progressHistory project { id } sortOrder status targetDate updatedAt }","field":"projectMilestones","optype":"query","page":{"cursor":"pageInfo.endCursor","more":"pageInfo.hasNextPage","nodes":"nodes","style":"relay"},"vars":[{"from":"after","gqltype":"String","name":"after"},{"from":"before","gqltype":"String","name":"before"},{"from":"","gqltype":"ProjectMilestoneFilter","name":"filter"},{"from":"first","gqltype":"Int","name":"first"},{"from":"includeArchived","gqltype":"Boolean","name":"includeArchived"},{"from":"last","gqltype":"Int","name":"last"},{"from":"orderBy","gqltype":"PaginationOrderBy","name":"orderBy"}]},"k":"graphql","m":"POST","o":"projectMilestones","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.projectMilestones.nodes`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"POST projectMilestone","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"query ProjectMilestoneLoad($id: String!) { projectMilestone(id: $id) { ...ProjectMilestoneFields } } fragment ProjectMilestoneFields on ProjectMilestone { archivedAt createdAt currentProgress description descriptionState documentContent { id } id name progress progressHistory project { id } sortOrder status targetDate updatedAt }","field":"projectMilestone","optype":"query","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"projectMilestone","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.projectMilestone`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"POST projectMilestoneDelete","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation ProjectMilestoneRemove($id: String!) { projectMilestoneDelete(id: $id) { entityId lastSyncId success } }","field":"projectMilestoneDelete","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"projectMilestoneDelete","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.projectMilestoneDelete`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"POST projectMilestoneUpdate","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation ProjectMilestoneUpdate($id: String!, $input: ProjectMilestoneUpdateInput!) { projectMilestoneUpdate(id: $id, input: $input) { projectMilestone { ...ProjectMilestoneFields } success } } fragment ProjectMilestoneFields on ProjectMilestone { archivedAt createdAt currentProgress description descriptionState documentContent { id } id name progress progressHistory project { id } sortOrder status targetDate updatedAt }","field":"projectMilestoneUpdate","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"","gqltype":"ProjectMilestoneUpdateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"projectMilestoneUpdate","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.projectMilestoneUpdate.projectMilestone`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"project_milestone","name__orig":"project_milestone","Name":"ProjectMilestone","name_":"project_milestone","name-":"project-milestone","NAME":"PROJECT_MILESTONE","index$":58}, {"active":true,"entity":"project_milestone","key$":"BasicProjectMilestoneFlow","kind":"basic","name":"BasicProjectMilestoneFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"project_milestone_ref01"},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"project_milestone_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"project_milestone_ref01","srcdatavar":"project_milestone_ref01_data","suffix":"_up0","textfield":"description"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-project_milestone_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"project_milestone_ref01","srcdatavar":"project_milestone_ref01_data","suffix":"_dt0"},"m":{"id":"project_milestone01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-project_milestone_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"project_milestone_ref01","suffix":"_rm0"},"m":{"id":"project_milestone01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"project_milestone_ref01"}}],"index$":5}]}, 'ProjectMilestone', {"POST projectMilestoneCreate":{"protocol":"graphql"},"POST projectMilestones":{"protocol":"graphql"},"POST projectMilestone":{"protocol":"graphql"},"POST projectMilestoneDelete":{"protocol":"graphql"},"POST projectMilestoneUpdate":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const project_milestone_ref01_ent = client.ProjectMilestone()
    let project_milestone_ref01_data = setup.data.new.project_milestone['project_milestone_ref01']
    project_milestone_ref01_data['after'] = setup.idmap['after01']
    project_milestone_ref01_data['before'] = setup.idmap['before01']
    project_milestone_ref01_data['first'] = setup.idmap['first01']
    project_milestone_ref01_data['include_archived'] = setup.idmap['include_archived01']
    project_milestone_ref01_data['last'] = setup.idmap['last01']
    project_milestone_ref01_data['order_by'] = setup.idmap['order_by01']

    project_milestone_ref01_data = (await project_milestone_ref01_ent.create(project_milestone_ref01_data)).data()
    assert(null != project_milestone_ref01_data.id)


    // LIST
    const project_milestone_ref01_match: any = {}
    project_milestone_ref01_match['after'] = setup.idmap['after01']
    project_milestone_ref01_match['before'] = setup.idmap['before01']
    project_milestone_ref01_match['first'] = setup.idmap['first01']
    project_milestone_ref01_match['include_archived'] = setup.idmap['include_archived01']
    project_milestone_ref01_match['last'] = setup.idmap['last01']
    project_milestone_ref01_match['order_by'] = setup.idmap['order_by01']

    const project_milestone_ref01_list = (await project_milestone_ref01_ent.list(project_milestone_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(project_milestone_ref01_list, { id: project_milestone_ref01_data.id })))


    // UPDATE
    const project_milestone_ref01_data_up0: any = {}
    project_milestone_ref01_data_up0.id = project_milestone_ref01_data.id

    const project_milestone_ref01_markdef_up0 = { name: 'description', value: 'Mark01-project_milestone_ref01_' + setup.now }
    ;(project_milestone_ref01_data_up0 as any)[project_milestone_ref01_markdef_up0.name] = project_milestone_ref01_markdef_up0.value

    const project_milestone_ref01_resdata_up0 = (await project_milestone_ref01_ent.update(project_milestone_ref01_data_up0)).data()
    assert(project_milestone_ref01_resdata_up0.id === project_milestone_ref01_data_up0.id)

    assert((project_milestone_ref01_resdata_up0 as any)[project_milestone_ref01_markdef_up0.name] === project_milestone_ref01_markdef_up0.value)


    // LOAD
    const project_milestone_ref01_match_dt0: any = {}
    project_milestone_ref01_match_dt0.id = project_milestone_ref01_data.id
    const project_milestone_ref01_data_dt0 = (await project_milestone_ref01_ent.load(project_milestone_ref01_match_dt0)).data()
    assert(project_milestone_ref01_data_dt0.id === project_milestone_ref01_data.id)


    // REMOVE
    const project_milestone_ref01_match_rm0: any = { id: project_milestone_ref01_data.id }
    await project_milestone_ref01_ent.remove(project_milestone_ref01_match_rm0)
  

    // LIST
    const project_milestone_ref01_match_rt0: any = {}
    project_milestone_ref01_match_rt0['after'] = setup.idmap['after01']
    project_milestone_ref01_match_rt0['before'] = setup.idmap['before01']
    project_milestone_ref01_match_rt0['first'] = setup.idmap['first01']
    project_milestone_ref01_match_rt0['include_archived'] = setup.idmap['include_archived01']
    project_milestone_ref01_match_rt0['last'] = setup.idmap['last01']
    project_milestone_ref01_match_rt0['order_by'] = setup.idmap['order_by01']

    const project_milestone_ref01_list_rt0 = (await project_milestone_ref01_ent.list(project_milestone_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(project_milestone_ref01_list_rt0, { id: project_milestone_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/project_milestone/ProjectMilestoneTestData.json')

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
    ['project_milestone01','project_milestone02','project_milestone03','after01','before01','first01','include_archived01','last01','order_by01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_PROJECT_MILESTONE_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_PROJECT_MILESTONE_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_PROJECT_MILESTONE_ENTID']
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
  
