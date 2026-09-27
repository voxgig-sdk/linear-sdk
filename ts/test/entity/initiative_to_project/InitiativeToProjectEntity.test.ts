

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


describe('InitiativeToProjectEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.InitiativeToProject()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'initiative_to_project.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archivedAt":{"a":true,"h":"Archived At","n":"archivedAt","r":false,"sh":"The time at which the entity was archived.","t":"`$ANY`","key$":"archivedAt","index$":0},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"The time at which the entity was created.","t":"`$ANY`","key$":"createdAt","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier of the entity.","t":"`$STRING`","key$":"id","index$":2},"initiative":{"a":true,"h":"Initiative","n":"initiative","r":false,"sh":"The initiative that the project is associated with.","t":"`$OBJECT`","key$":"initiative","index$":3},"project":{"a":true,"h":"Project","n":"project","r":false,"sh":"The project that the initiative is associated with.","t":"`$OBJECT`","key$":"project","index$":4},"sortOrder":{"a":true,"h":"Sort Order","n":"sortOrder","r":true,"sh":"The sort order of the project within its parent initiative.","t":"`$STRING`","key$":"sortOrder","index$":5},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"The last time at which the entity was meaningfully updated.","t":"`$ANY`","key$":"updatedAt","index$":6}},"id":{"field":"id","name":"id"},"name":"initiative_to_project","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST initiativeToProjectCreate","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation InitiativeToProjectCreate($input: InitiativeToProjectCreateInput!) { initiativeToProjectCreate(input: $input) { initiativeToProject { ...InitiativeToProjectFields } success } } fragment InitiativeToProjectFields on InitiativeToProject { archivedAt createdAt id initiative { id } project { id } sortOrder updatedAt }","field":"initiativeToProjectCreate","optype":"mutation","vars":[{"from":"","gqltype":"InitiativeToProjectCreateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"initiativeToProjectCreate","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.initiativeToProjectCreate.initiativeToProject`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"POST initiativeToProjects","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"first","or":"first","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"param","n":"include_archived","or":"include_archived","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"k":"param","n":"last","or":"last","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"param","n":"order_by","or":"order_by","r":false,"t":"`$ANY`","index$":5}]},"gq":{"doc":"query InitiativeToProjectList($after: String, $before: String, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { initiativeToProjects(after: $after, before: $before, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...InitiativeToProjectFields } pageInfo { endCursor hasNextPage } } } fragment InitiativeToProjectFields on InitiativeToProject { archivedAt createdAt id initiative { id } project { id } sortOrder updatedAt }","field":"initiativeToProjects","optype":"query","page":{"cursor":"pageInfo.endCursor","more":"pageInfo.hasNextPage","nodes":"nodes","style":"relay"},"vars":[{"from":"after","gqltype":"String","name":"after"},{"from":"before","gqltype":"String","name":"before"},{"from":"first","gqltype":"Int","name":"first"},{"from":"includeArchived","gqltype":"Boolean","name":"includeArchived"},{"from":"last","gqltype":"Int","name":"last"},{"from":"orderBy","gqltype":"PaginationOrderBy","name":"orderBy"}]},"k":"graphql","m":"POST","o":"initiativeToProjects","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.initiativeToProjects.nodes`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"POST initiativeToProject","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"query InitiativeToProjectLoad($id: String!) { initiativeToProject(id: $id) { ...InitiativeToProjectFields } } fragment InitiativeToProjectFields on InitiativeToProject { archivedAt createdAt id initiative { id } project { id } sortOrder updatedAt }","field":"initiativeToProject","optype":"query","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"initiativeToProject","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.initiativeToProject`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"POST initiativeToProjectDelete","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation InitiativeToProjectRemove($id: String!) { initiativeToProjectDelete(id: $id) { entityId lastSyncId success } }","field":"initiativeToProjectDelete","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"initiativeToProjectDelete","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.initiativeToProjectDelete`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"POST initiativeToProjectUpdate","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation InitiativeToProjectUpdate($id: String!, $input: InitiativeToProjectUpdateInput!) { initiativeToProjectUpdate(id: $id, input: $input) { initiativeToProject { ...InitiativeToProjectFields } success } } fragment InitiativeToProjectFields on InitiativeToProject { archivedAt createdAt id initiative { id } project { id } sortOrder updatedAt }","field":"initiativeToProjectUpdate","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"","gqltype":"InitiativeToProjectUpdateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"initiativeToProjectUpdate","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.initiativeToProjectUpdate.initiativeToProject`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"initiative_to_project","name__orig":"initiative_to_project","Name":"InitiativeToProject","name_":"initiative_to_project","name-":"initiative-to-project","NAME":"INITIATIVE_TO_PROJECT","index$":35}, {"active":true,"entity":"initiative_to_project","key$":"BasicInitiativeToProjectFlow","kind":"basic","name":"BasicInitiativeToProjectFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"initiative_to_project_ref01"},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"initiative_to_project_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"initiative_to_project_ref01","srcdatavar":"initiative_to_project_ref01_data","suffix":"_up0","textfield":"sortOrder"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-initiative_to_project_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"initiative_to_project_ref01","srcdatavar":"initiative_to_project_ref01_data","suffix":"_dt0"},"m":{"id":"initiative_to_project01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-initiative_to_project_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"initiative_to_project_ref01","suffix":"_rm0"},"m":{"id":"initiative_to_project01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"initiative_to_project_ref01"}}],"index$":5}]}, 'InitiativeToProject', {"POST initiativeToProjectCreate":{"protocol":"graphql"},"POST initiativeToProjects":{"protocol":"graphql"},"POST initiativeToProject":{"protocol":"graphql"},"POST initiativeToProjectDelete":{"protocol":"graphql"},"POST initiativeToProjectUpdate":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const initiative_to_project_ref01_ent = client.InitiativeToProject()
    let initiative_to_project_ref01_data = setup.data.new.initiative_to_project['initiative_to_project_ref01']
    initiative_to_project_ref01_data['after'] = setup.idmap['after01']
    initiative_to_project_ref01_data['before'] = setup.idmap['before01']
    initiative_to_project_ref01_data['first'] = setup.idmap['first01']
    initiative_to_project_ref01_data['include_archived'] = setup.idmap['include_archived01']
    initiative_to_project_ref01_data['last'] = setup.idmap['last01']
    initiative_to_project_ref01_data['order_by'] = setup.idmap['order_by01']

    initiative_to_project_ref01_data = (await initiative_to_project_ref01_ent.create(initiative_to_project_ref01_data)).data()
    assert(null != initiative_to_project_ref01_data.id)


    // LIST
    const initiative_to_project_ref01_match: any = {}
    initiative_to_project_ref01_match['after'] = setup.idmap['after01']
    initiative_to_project_ref01_match['before'] = setup.idmap['before01']
    initiative_to_project_ref01_match['first'] = setup.idmap['first01']
    initiative_to_project_ref01_match['include_archived'] = setup.idmap['include_archived01']
    initiative_to_project_ref01_match['last'] = setup.idmap['last01']
    initiative_to_project_ref01_match['order_by'] = setup.idmap['order_by01']

    const initiative_to_project_ref01_list = (await initiative_to_project_ref01_ent.list(initiative_to_project_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(initiative_to_project_ref01_list, { id: initiative_to_project_ref01_data.id })))


    // UPDATE
    const initiative_to_project_ref01_data_up0: any = {}
    initiative_to_project_ref01_data_up0.id = initiative_to_project_ref01_data.id

    const initiative_to_project_ref01_markdef_up0 = { name: 'sortOrder', value: 'Mark01-initiative_to_project_ref01_' + setup.now }
    ;(initiative_to_project_ref01_data_up0 as any)[initiative_to_project_ref01_markdef_up0.name] = initiative_to_project_ref01_markdef_up0.value

    const initiative_to_project_ref01_resdata_up0 = (await initiative_to_project_ref01_ent.update(initiative_to_project_ref01_data_up0)).data()
    assert(initiative_to_project_ref01_resdata_up0.id === initiative_to_project_ref01_data_up0.id)

    assert((initiative_to_project_ref01_resdata_up0 as any)[initiative_to_project_ref01_markdef_up0.name] === initiative_to_project_ref01_markdef_up0.value)


    // LOAD
    const initiative_to_project_ref01_match_dt0: any = {}
    initiative_to_project_ref01_match_dt0.id = initiative_to_project_ref01_data.id
    const initiative_to_project_ref01_data_dt0 = (await initiative_to_project_ref01_ent.load(initiative_to_project_ref01_match_dt0)).data()
    assert(initiative_to_project_ref01_data_dt0.id === initiative_to_project_ref01_data.id)


    // REMOVE
    const initiative_to_project_ref01_match_rm0: any = { id: initiative_to_project_ref01_data.id }
    await initiative_to_project_ref01_ent.remove(initiative_to_project_ref01_match_rm0)
  

    // LIST
    const initiative_to_project_ref01_match_rt0: any = {}
    initiative_to_project_ref01_match_rt0['after'] = setup.idmap['after01']
    initiative_to_project_ref01_match_rt0['before'] = setup.idmap['before01']
    initiative_to_project_ref01_match_rt0['first'] = setup.idmap['first01']
    initiative_to_project_ref01_match_rt0['include_archived'] = setup.idmap['include_archived01']
    initiative_to_project_ref01_match_rt0['last'] = setup.idmap['last01']
    initiative_to_project_ref01_match_rt0['order_by'] = setup.idmap['order_by01']

    const initiative_to_project_ref01_list_rt0 = (await initiative_to_project_ref01_ent.list(initiative_to_project_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(initiative_to_project_ref01_list_rt0, { id: initiative_to_project_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/initiative_to_project/InitiativeToProjectTestData.json')

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
    ['initiative_to_project01','initiative_to_project02','initiative_to_project03','after01','before01','first01','include_archived01','last01','order_by01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_INITIATIVE_TO_PROJECT_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_INITIATIVE_TO_PROJECT_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_INITIATIVE_TO_PROJECT_ENTID']
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
  
