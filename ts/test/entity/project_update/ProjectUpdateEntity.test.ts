

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


describe('ProjectUpdateEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.ProjectUpdate()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'project_update.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archivedAt":{"a":true,"h":"Archived At","n":"archivedAt","r":false,"sh":"The time at which the entity was archived.","t":"`$ANY`","key$":"archivedAt","index$":0},"body":{"a":true,"h":"Body","n":"body","r":true,"sh":"The update content in markdown format.","t":"`$STRING`","key$":"body","index$":1},"bodyData":{"a":true,"h":"Body Data","n":"bodyData","r":true,"sh":"[Internal] The content of the update as a Prosemirror document.","t":"`$STRING`","key$":"bodyData","index$":2},"commentCount":{"a":true,"h":"Comment Count","n":"commentCount","r":true,"sh":"Number of comments associated with the project update.","t":"`$INTEGER`","key$":"commentCount","index$":3},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"The time at which the entity was created.","t":"`$ANY`","key$":"createdAt","index$":4},"diff":{"a":true,"h":"Diff","n":"diff","r":false,"sh":"The diff between the current update and the previous one.","t":"`$ANY`","key$":"diff","index$":5},"diffMarkdown":{"a":true,"h":"Diff Markdown","n":"diffMarkdown","r":false,"sh":"The diff between the current update and the previous one, formatted as markdown.","t":"`$STRING`","key$":"diffMarkdown","index$":6},"editedAt":{"a":true,"h":"Edited At","n":"editedAt","r":false,"sh":"The time the update was edited.","t":"`$ANY`","key$":"editedAt","index$":7},"health":{"a":true,"h":"Health","n":"health","r":true,"sh":"The health of the project at the time this update was posted.","t":"`$STRING`","key$":"health","index$":8},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier of the entity.","t":"`$STRING`","key$":"id","index$":9},"infoSnapshot":{"a":true,"h":"Info Snapshot","n":"infoSnapshot","r":false,"sh":"[Internal] A snapshot of project properties at the time the update was posted, including team, milestone, and issue statistics.","t":"`$ANY`","key$":"infoSnapshot","index$":10},"isDiffHidden":{"a":true,"h":"Is Diff Hidden","n":"isDiffHidden","r":true,"sh":"Whether the diff between this update and the previous one should be hidden in the UI.","t":"`$BOOLEAN`","key$":"isDiffHidden","index$":11},"isStale":{"a":true,"h":"Is Stale","n":"isStale","r":true,"sh":"Whether the project update is stale.","t":"`$BOOLEAN`","key$":"isStale","index$":12},"project":{"a":true,"h":"Project","n":"project","r":false,"sh":"The project that this status update was posted to.","t":"`$OBJECT`","key$":"project","index$":13},"reactionData":{"a":true,"h":"Reaction Data","n":"reactionData","r":true,"sh":"Emoji reaction summary, grouped by emoji type.","t":"`$ANY`","key$":"reactionData","index$":14},"shortSummary":{"a":true,"h":"Short Summary","n":"shortSummary","r":false,"sh":"A short AI-generated summary of the project update.","t":"`$STRING`","key$":"shortSummary","index$":15},"slugId":{"a":true,"h":"Slug Id","n":"slugId","r":true,"sh":"The update's unique URL slug.","t":"`$STRING`","key$":"slugId","index$":16},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"The last time at which the entity was meaningfully updated.","t":"`$ANY`","key$":"updatedAt","index$":17},"url":{"a":true,"h":"Url","n":"url","r":true,"sh":"The URL to the project update.","t":"`$STRING`","key$":"url","index$":18},"user":{"a":true,"h":"User","n":"user","r":false,"sh":"The user who wrote the update.","t":"`$OBJECT`","key$":"user","index$":19}},"id":{"field":"id","name":"id"},"name":"project_update","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST projectUpdateCreate","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation ProjectUpdateCreate($input: ProjectUpdateCreateInput!) { projectUpdateCreate(input: $input) { projectUpdate { ...ProjectUpdateFields } success } } fragment ProjectUpdateFields on ProjectUpdate { archivedAt body bodyData commentCount createdAt diff diffMarkdown editedAt health id infoSnapshot isDiffHidden isStale project { id } reactionData shortSummary slugId updatedAt url user { id } }","field":"projectUpdateCreate","optype":"mutation","vars":[{"from":"","gqltype":"ProjectUpdateCreateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"projectUpdateCreate","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.projectUpdateCreate.projectUpdate`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"POST projectUpdates","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"first","or":"first","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"param","n":"include_archived","or":"include_archived","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"k":"param","n":"last","or":"last","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"param","n":"order_by","or":"order_by","r":false,"t":"`$ANY`","index$":5}]},"gq":{"doc":"query ProjectUpdateList($after: String, $before: String, $filter: ProjectUpdateFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { projectUpdates(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...ProjectUpdateFields } pageInfo { endCursor hasNextPage } } } fragment ProjectUpdateFields on ProjectUpdate { archivedAt body bodyData commentCount createdAt diff diffMarkdown editedAt health id infoSnapshot isDiffHidden isStale project { id } reactionData shortSummary slugId updatedAt url user { id } }","field":"projectUpdates","optype":"query","page":{"cursor":"pageInfo.endCursor","more":"pageInfo.hasNextPage","nodes":"nodes","style":"relay"},"vars":[{"from":"after","gqltype":"String","name":"after"},{"from":"before","gqltype":"String","name":"before"},{"from":"","gqltype":"ProjectUpdateFilter","name":"filter"},{"from":"first","gqltype":"Int","name":"first"},{"from":"includeArchived","gqltype":"Boolean","name":"includeArchived"},{"from":"last","gqltype":"Int","name":"last"},{"from":"orderBy","gqltype":"PaginationOrderBy","name":"orderBy"}]},"k":"graphql","m":"POST","o":"projectUpdates","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.projectUpdates.nodes`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"POST projectUpdate","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"project_id","r":false,"t":"`$STRING`","index$":1}]},"gq":{"doc":"query ProjectUpdateLoad($id: String!, $projectId: String) { projectUpdate(id: $id, projectId: $projectId) { ...ProjectUpdateFields } } fragment ProjectUpdateFields on ProjectUpdate { archivedAt body bodyData commentCount createdAt diff diffMarkdown editedAt health id infoSnapshot isDiffHidden isStale project { id } reactionData shortSummary slugId updatedAt url user { id } }","field":"projectUpdate","optype":"query","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"projectId","gqltype":"String","name":"projectId"}]},"k":"graphql","m":"POST","o":"projectUpdate","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.projectUpdate`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"POST projectUpdateDelete","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation ProjectUpdateRemove($id: String!) { projectUpdateDelete(id: $id) { entityId lastSyncId success } }","field":"projectUpdateDelete","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"projectUpdateDelete","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.projectUpdateDelete`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"POST projectUpdateArchive","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation ProjectUpdateUpdateArchive($id: String!) { projectUpdateArchive(id: $id) { entity { ...ProjectUpdateFields } success } } fragment ProjectUpdateFields on ProjectUpdate { archivedAt body bodyData commentCount createdAt diff diffMarkdown editedAt health id infoSnapshot isDiffHidden isStale project { id } reactionData shortSummary slugId updatedAt url user { id } }","field":"projectUpdateArchive","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"projectUpdateArchive","q":{"$action":"archive","exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.projectUpdateArchive.entity`"},"index$":0},{"a":true,"co":{"id":"POST projectUpdateUnarchive","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation ProjectUpdateUpdateUnarchive($id: String!) { projectUpdateUnarchive(id: $id) { entity { ...ProjectUpdateFields } success } } fragment ProjectUpdateFields on ProjectUpdate { archivedAt body bodyData commentCount createdAt diff diffMarkdown editedAt health id infoSnapshot isDiffHidden isStale project { id } reactionData shortSummary slugId updatedAt url user { id } }","field":"projectUpdateUnarchive","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"projectUpdateUnarchive","q":{"$action":"unarchive","exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.projectUpdateUnarchive.entity`"},"index$":1},{"a":true,"co":{"id":"POST projectUpdateUpdate","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation ProjectUpdateUpdate($id: String!, $input: ProjectUpdateUpdateInput!) { projectUpdateUpdate(id: $id, input: $input) { projectUpdate { ...ProjectUpdateFields } success } } fragment ProjectUpdateFields on ProjectUpdate { archivedAt body bodyData commentCount createdAt diff diffMarkdown editedAt health id infoSnapshot isDiffHidden isStale project { id } reactionData shortSummary slugId updatedAt url user { id } }","field":"projectUpdateUpdate","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"","gqltype":"ProjectUpdateUpdateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"projectUpdateUpdate","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.projectUpdateUpdate.projectUpdate`"},"index$":2}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"project_update","name__orig":"project_update","Name":"ProjectUpdate","name_":"project_update","name-":"project-update","NAME":"PROJECT_UPDATE","index$":63}, {"active":true,"entity":"project_update","key$":"BasicProjectUpdateFlow","kind":"basic","name":"BasicProjectUpdateFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"project_update_ref01"},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01","project_id":"project01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"project_update_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"project_update_ref01","srcdatavar":"project_update_ref01_data","suffix":"_up0","textfield":"body"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-project_update_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"project_update_ref01","srcdatavar":"project_update_ref01_data","suffix":"_dt0"},"m":{"id":"project_update01","project_id":"project01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-project_update_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"project_update_ref01","suffix":"_rm0"},"m":{"id":"project_update01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"project_update_ref01"}}],"index$":5}]}, 'ProjectUpdate', {"POST projectUpdateCreate":{"protocol":"graphql"},"POST projectUpdates":{"protocol":"graphql"},"POST projectUpdate":{"protocol":"graphql"},"POST projectUpdateDelete":{"protocol":"graphql"},"POST projectUpdateArchive":{"protocol":"graphql"},"POST projectUpdateUnarchive":{"protocol":"graphql"},"POST projectUpdateUpdate":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const project_update_ref01_ent = client.ProjectUpdate()
    let project_update_ref01_data = setup.data.new.project_update['project_update_ref01']
    project_update_ref01_data['after'] = setup.idmap['after01']
    project_update_ref01_data['before'] = setup.idmap['before01']
    project_update_ref01_data['first'] = setup.idmap['first01']
    project_update_ref01_data['include_archived'] = setup.idmap['include_archived01']
    project_update_ref01_data['last'] = setup.idmap['last01']
    project_update_ref01_data['order_by'] = setup.idmap['order_by01']
    project_update_ref01_data['project_id'] = setup.idmap['project01']

    project_update_ref01_data = (await project_update_ref01_ent.create(project_update_ref01_data)).data()
    assert(null != project_update_ref01_data.id)


    // LIST
    const project_update_ref01_match: any = {}
    project_update_ref01_match['after'] = setup.idmap['after01']
    project_update_ref01_match['before'] = setup.idmap['before01']
    project_update_ref01_match['first'] = setup.idmap['first01']
    project_update_ref01_match['include_archived'] = setup.idmap['include_archived01']
    project_update_ref01_match['last'] = setup.idmap['last01']
    project_update_ref01_match['order_by'] = setup.idmap['order_by01']

    const project_update_ref01_list = (await project_update_ref01_ent.list(project_update_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(project_update_ref01_list, { id: project_update_ref01_data.id })))


    // UPDATE
    const project_update_ref01_data_up0: any = {}
    project_update_ref01_data_up0.id = project_update_ref01_data.id

    const project_update_ref01_markdef_up0 = { name: 'body', value: 'Mark01-project_update_ref01_' + setup.now }
    ;(project_update_ref01_data_up0 as any)[project_update_ref01_markdef_up0.name] = project_update_ref01_markdef_up0.value

    const project_update_ref01_resdata_up0 = (await project_update_ref01_ent.update(project_update_ref01_data_up0)).data()
    assert(project_update_ref01_resdata_up0.id === project_update_ref01_data_up0.id)

    assert((project_update_ref01_resdata_up0 as any)[project_update_ref01_markdef_up0.name] === project_update_ref01_markdef_up0.value)


    // LOAD
    const project_update_ref01_match_dt0: any = {}
    project_update_ref01_match_dt0.id = project_update_ref01_data.id
    const project_update_ref01_data_dt0 = (await project_update_ref01_ent.load(project_update_ref01_match_dt0)).data()
    assert(project_update_ref01_data_dt0.id === project_update_ref01_data.id)


    // REMOVE
    const project_update_ref01_match_rm0: any = { id: project_update_ref01_data.id }
    await project_update_ref01_ent.remove(project_update_ref01_match_rm0)
  

    // LIST
    const project_update_ref01_match_rt0: any = {}
    project_update_ref01_match_rt0['after'] = setup.idmap['after01']
    project_update_ref01_match_rt0['before'] = setup.idmap['before01']
    project_update_ref01_match_rt0['first'] = setup.idmap['first01']
    project_update_ref01_match_rt0['include_archived'] = setup.idmap['include_archived01']
    project_update_ref01_match_rt0['last'] = setup.idmap['last01']
    project_update_ref01_match_rt0['order_by'] = setup.idmap['order_by01']

    const project_update_ref01_list_rt0 = (await project_update_ref01_ent.list(project_update_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(project_update_ref01_list_rt0, { id: project_update_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/project_update/ProjectUpdateTestData.json')

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
    ['project_update01','project_update02','project_update03','after01','before01','first01','include_archived01','last01','order_by01','project01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_PROJECT_UPDATE_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_PROJECT_UPDATE_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_PROJECT_UPDATE_ENTID']
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
  
