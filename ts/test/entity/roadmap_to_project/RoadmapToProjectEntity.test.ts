

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


describe('RoadmapToProjectEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.RoadmapToProject()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'roadmap_to_project.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archivedAt":{"a":true,"h":"Archived At","n":"archivedAt","r":false,"sh":"The time at which the entity was archived.","t":"`$ANY`","key$":"archivedAt","index$":0},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"The time at which the entity was created.","t":"`$ANY`","key$":"createdAt","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier of the entity.","t":"`$STRING`","key$":"id","index$":2},"project":{"a":true,"h":"Project","n":"project","r":false,"sh":"The project that the roadmap is associated with.","t":"`$OBJECT`","key$":"project","index$":3},"roadmap":{"a":true,"h":"Roadmap","n":"roadmap","r":false,"sh":"The roadmap that the project is associated with.","t":"`$OBJECT`","key$":"roadmap","index$":4},"sortOrder":{"a":true,"h":"Sort Order","n":"sortOrder","r":true,"sh":"The sort order of the project within the roadmap.","t":"`$STRING`","key$":"sortOrder","index$":5},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"The last time at which the entity was meaningfully updated.","t":"`$ANY`","key$":"updatedAt","index$":6}},"id":{"field":"id","name":"id"},"name":"roadmap_to_project","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST roadmapToProjectCreate","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation RoadmapToProjectCreate($input: RoadmapToProjectCreateInput!) { roadmapToProjectCreate(input: $input) { roadmapToProject { ...RoadmapToProjectFields } success } } fragment RoadmapToProjectFields on RoadmapToProject { archivedAt createdAt id project { id } roadmap { id } sortOrder updatedAt }","field":"roadmapToProjectCreate","optype":"mutation","vars":[{"from":"","gqltype":"RoadmapToProjectCreateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"roadmapToProjectCreate","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.roadmapToProjectCreate.roadmapToProject`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"POST roadmapToProjects","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"first","or":"first","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"param","n":"include_archived","or":"include_archived","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"k":"param","n":"last","or":"last","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"param","n":"order_by","or":"order_by","r":false,"t":"`$ANY`","index$":5}]},"gq":{"doc":"query RoadmapToProjectList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { roadmapToProjects(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...RoadmapToProjectFields } pageInfo { endCursor hasNextPage } } } fragment RoadmapToProjectFields on RoadmapToProject { archivedAt createdAt id project { id } roadmap { id } sortOrder updatedAt }","field":"roadmapToProjects","optype":"query","page":{"cursor":"pageInfo.endCursor","more":"pageInfo.hasNextPage","nodes":"nodes","style":"relay"},"vars":[{"from":"after","gqltype":"String","name":"after"},{"from":"before","gqltype":"String","name":"before"},{"from":"first","gqltype":"Int","name":"first"},{"from":"includeArchived","gqltype":"Boolean","name":"includeArchived"},{"from":"last","gqltype":"Int","name":"last"},{"from":"orderBy","gqltype":"PaginationOrderBy","name":"orderBy"}]},"k":"graphql","m":"POST","o":"roadmapToProjects","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.roadmapToProjects.nodes`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"POST roadmapToProject","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"query RoadmapToProjectLoad($id: String!) { roadmapToProject(id: $id) { ...RoadmapToProjectFields } } fragment RoadmapToProjectFields on RoadmapToProject { archivedAt createdAt id project { id } roadmap { id } sortOrder updatedAt }","field":"roadmapToProject","optype":"query","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"roadmapToProject","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.roadmapToProject`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"POST roadmapToProjectDelete","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation RoadmapToProjectRemove($id: String!) { roadmapToProjectDelete(id: $id) { entityId lastSyncId success } }","field":"roadmapToProjectDelete","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"roadmapToProjectDelete","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.roadmapToProjectDelete`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"POST roadmapToProjectUpdate","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation RoadmapToProjectUpdate($id: String!, $input: RoadmapToProjectUpdateInput!) { roadmapToProjectUpdate(id: $id, input: $input) { roadmapToProject { ...RoadmapToProjectFields } success } } fragment RoadmapToProjectFields on RoadmapToProject { archivedAt createdAt id project { id } roadmap { id } sortOrder updatedAt }","field":"roadmapToProjectUpdate","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"","gqltype":"RoadmapToProjectUpdateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"roadmapToProjectUpdate","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.roadmapToProjectUpdate.roadmapToProject`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"roadmap_to_project","name__orig":"roadmap_to_project","Name":"RoadmapToProject","name_":"roadmap_to_project","name-":"roadmap-to-project","NAME":"ROADMAP_TO_PROJECT","index$":71}, {"active":true,"entity":"roadmap_to_project","key$":"BasicRoadmapToProjectFlow","kind":"basic","name":"BasicRoadmapToProjectFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"roadmap_to_project_ref01"},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"roadmap_to_project_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"roadmap_to_project_ref01","srcdatavar":"roadmap_to_project_ref01_data","suffix":"_up0","textfield":"sortOrder"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-roadmap_to_project_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"roadmap_to_project_ref01","srcdatavar":"roadmap_to_project_ref01_data","suffix":"_dt0"},"m":{"id":"roadmap_to_project01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-roadmap_to_project_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"roadmap_to_project_ref01","suffix":"_rm0"},"m":{"id":"roadmap_to_project01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"roadmap_to_project_ref01"}}],"index$":5}]}, 'RoadmapToProject', {"POST roadmapToProjectCreate":{"protocol":"graphql"},"POST roadmapToProjects":{"protocol":"graphql"},"POST roadmapToProject":{"protocol":"graphql"},"POST roadmapToProjectDelete":{"protocol":"graphql"},"POST roadmapToProjectUpdate":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const roadmap_to_project_ref01_ent = client.RoadmapToProject()
    let roadmap_to_project_ref01_data = setup.data.new.roadmap_to_project['roadmap_to_project_ref01']
    roadmap_to_project_ref01_data['after'] = setup.idmap['after01']
    roadmap_to_project_ref01_data['before'] = setup.idmap['before01']
    roadmap_to_project_ref01_data['first'] = setup.idmap['first01']
    roadmap_to_project_ref01_data['include_archived'] = setup.idmap['include_archived01']
    roadmap_to_project_ref01_data['last'] = setup.idmap['last01']
    roadmap_to_project_ref01_data['order_by'] = setup.idmap['order_by01']

    roadmap_to_project_ref01_data = (await roadmap_to_project_ref01_ent.create(roadmap_to_project_ref01_data)).data()
    assert(null != roadmap_to_project_ref01_data.id)


    // LIST
    const roadmap_to_project_ref01_match: any = {}
    roadmap_to_project_ref01_match['after'] = setup.idmap['after01']
    roadmap_to_project_ref01_match['before'] = setup.idmap['before01']
    roadmap_to_project_ref01_match['first'] = setup.idmap['first01']
    roadmap_to_project_ref01_match['include_archived'] = setup.idmap['include_archived01']
    roadmap_to_project_ref01_match['last'] = setup.idmap['last01']
    roadmap_to_project_ref01_match['order_by'] = setup.idmap['order_by01']

    const roadmap_to_project_ref01_list = (await roadmap_to_project_ref01_ent.list(roadmap_to_project_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(roadmap_to_project_ref01_list, { id: roadmap_to_project_ref01_data.id })))


    // UPDATE
    const roadmap_to_project_ref01_data_up0: any = {}
    roadmap_to_project_ref01_data_up0.id = roadmap_to_project_ref01_data.id

    const roadmap_to_project_ref01_markdef_up0 = { name: 'sortOrder', value: 'Mark01-roadmap_to_project_ref01_' + setup.now }
    ;(roadmap_to_project_ref01_data_up0 as any)[roadmap_to_project_ref01_markdef_up0.name] = roadmap_to_project_ref01_markdef_up0.value

    const roadmap_to_project_ref01_resdata_up0 = (await roadmap_to_project_ref01_ent.update(roadmap_to_project_ref01_data_up0)).data()
    assert(roadmap_to_project_ref01_resdata_up0.id === roadmap_to_project_ref01_data_up0.id)

    assert((roadmap_to_project_ref01_resdata_up0 as any)[roadmap_to_project_ref01_markdef_up0.name] === roadmap_to_project_ref01_markdef_up0.value)


    // LOAD
    const roadmap_to_project_ref01_match_dt0: any = {}
    roadmap_to_project_ref01_match_dt0.id = roadmap_to_project_ref01_data.id
    const roadmap_to_project_ref01_data_dt0 = (await roadmap_to_project_ref01_ent.load(roadmap_to_project_ref01_match_dt0)).data()
    assert(roadmap_to_project_ref01_data_dt0.id === roadmap_to_project_ref01_data.id)


    // REMOVE
    const roadmap_to_project_ref01_match_rm0: any = { id: roadmap_to_project_ref01_data.id }
    await roadmap_to_project_ref01_ent.remove(roadmap_to_project_ref01_match_rm0)
  

    // LIST
    const roadmap_to_project_ref01_match_rt0: any = {}
    roadmap_to_project_ref01_match_rt0['after'] = setup.idmap['after01']
    roadmap_to_project_ref01_match_rt0['before'] = setup.idmap['before01']
    roadmap_to_project_ref01_match_rt0['first'] = setup.idmap['first01']
    roadmap_to_project_ref01_match_rt0['include_archived'] = setup.idmap['include_archived01']
    roadmap_to_project_ref01_match_rt0['last'] = setup.idmap['last01']
    roadmap_to_project_ref01_match_rt0['order_by'] = setup.idmap['order_by01']

    const roadmap_to_project_ref01_list_rt0 = (await roadmap_to_project_ref01_ent.list(roadmap_to_project_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(roadmap_to_project_ref01_list_rt0, { id: roadmap_to_project_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/roadmap_to_project/RoadmapToProjectTestData.json')

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
    ['roadmap_to_project01','roadmap_to_project02','roadmap_to_project03','after01','before01','first01','include_archived01','last01','order_by01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_ROADMAP_TO_PROJECT_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_ROADMAP_TO_PROJECT_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_ROADMAP_TO_PROJECT_ENTID']
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
  
