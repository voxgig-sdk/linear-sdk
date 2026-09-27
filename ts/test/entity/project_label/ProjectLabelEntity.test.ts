

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


describe('ProjectLabelEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.ProjectLabel()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'project_label.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archivedAt":{"a":true,"h":"Archived At","n":"archivedAt","r":false,"sh":"The time at which the entity was archived.","t":"`$ANY`","key$":"archivedAt","index$":0},"color":{"a":true,"h":"Color","n":"color","r":true,"sh":"The label's color as a HEX string (e.g., '#EB5757').","t":"`$STRING`","key$":"color","index$":1},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"The time at which the entity was created.","t":"`$ANY`","key$":"createdAt","index$":2},"creator":{"a":true,"h":"Creator","n":"creator","r":false,"sh":"The user who created the label.","t":"`$OBJECT`","key$":"creator","index$":3},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"The label's description.","t":"`$STRING`","key$":"description","index$":4},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier of the entity.","t":"`$STRING`","key$":"id","index$":5},"inheritedFrom":{"a":true,"h":"Inherited From","n":"inheritedFrom","r":false,"sh":"[Internal] The original workspace or parent-team label that this label was inherited from.","t":"`$OBJECT`","key$":"inheritedFrom","index$":6},"isGroup":{"a":true,"h":"Is Group","n":"isGroup","r":true,"sh":"Whether the label is a group.","t":"`$BOOLEAN`","key$":"isGroup","index$":7},"lastAppliedAt":{"a":true,"h":"Last Applied At","n":"lastAppliedAt","r":false,"sh":"The date when the label was last applied to an issue, project, or initiative.","t":"`$ANY`","key$":"lastAppliedAt","index$":8},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The label's name.","t":"`$STRING`","key$":"name","index$":9},"organization":{"a":true,"h":"Organization","n":"organization","r":false,"sh":"The workspace that the project label belongs to.","t":"`$OBJECT`","key$":"organization","index$":10},"parent":{"a":true,"h":"Parent","n":"parent","r":false,"sh":"The parent label group.","t":"`$OBJECT`","key$":"parent","index$":11},"retiredAt":{"a":true,"h":"Retired At","n":"retiredAt","r":false,"sh":"[Internal] When the label was retired.","t":"`$ANY`","key$":"retiredAt","index$":12},"retiredBy":{"a":true,"h":"Retired By","n":"retiredBy","r":false,"sh":"The user who retired the label.","t":"`$OBJECT`","key$":"retiredBy","index$":13},"team":{"a":true,"h":"Team","n":"team","r":false,"sh":"[Internal] The team that the label is scoped to.","t":"`$OBJECT`","key$":"team","index$":14},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"The last time at which the entity was meaningfully updated.","t":"`$ANY`","key$":"updatedAt","index$":15}},"id":{"field":"id","name":"id"},"name":"project_label","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST projectLabelCreate","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"replace_team_label","or":"replace_team_label","r":false,"t":"`$BOOLEAN`","index$":0}]},"gq":{"doc":"mutation ProjectLabelCreate($input: ProjectLabelCreateInput!, $replaceTeamLabels: Boolean) { projectLabelCreate(input: $input, replaceTeamLabels: $replaceTeamLabels) { projectLabel { ...ProjectLabelFields } success } } fragment ProjectLabelFields on ProjectLabel { archivedAt color createdAt creator { id } description id inheritedFrom { id } isGroup lastAppliedAt name organization { id } parent { id } retiredAt retiredBy { id } team { id } updatedAt }","field":"projectLabelCreate","optype":"mutation","vars":[{"from":"","gqltype":"ProjectLabelCreateInput!","name":"input"},{"from":"replaceTeamLabels","gqltype":"Boolean","name":"replaceTeamLabels"}]},"k":"graphql","m":"POST","o":"projectLabelCreate","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.projectLabelCreate.projectLabel`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"POST projectLabels","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"first","or":"first","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"param","n":"include_archived","or":"include_archived","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"k":"param","n":"last","or":"last","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"param","n":"order_by","or":"order_by","r":false,"t":"`$ANY`","index$":5}]},"gq":{"doc":"query ProjectLabelList($after: String, $before: String, $filter: ProjectLabelFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { projectLabels(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...ProjectLabelFields } pageInfo { endCursor hasNextPage } } } fragment ProjectLabelFields on ProjectLabel { archivedAt color createdAt creator { id } description id inheritedFrom { id } isGroup lastAppliedAt name organization { id } parent { id } retiredAt retiredBy { id } team { id } updatedAt }","field":"projectLabels","optype":"query","page":{"cursor":"pageInfo.endCursor","more":"pageInfo.hasNextPage","nodes":"nodes","style":"relay"},"vars":[{"from":"after","gqltype":"String","name":"after"},{"from":"before","gqltype":"String","name":"before"},{"from":"","gqltype":"ProjectLabelFilter","name":"filter"},{"from":"first","gqltype":"Int","name":"first"},{"from":"includeArchived","gqltype":"Boolean","name":"includeArchived"},{"from":"last","gqltype":"Int","name":"last"},{"from":"orderBy","gqltype":"PaginationOrderBy","name":"orderBy"}]},"k":"graphql","m":"POST","o":"projectLabels","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.projectLabels.nodes`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"POST projectLabel","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"query ProjectLabelLoad($id: String!) { projectLabel(id: $id) { ...ProjectLabelFields } } fragment ProjectLabelFields on ProjectLabel { archivedAt color createdAt creator { id } description id inheritedFrom { id } isGroup lastAppliedAt name organization { id } parent { id } retiredAt retiredBy { id } team { id } updatedAt }","field":"projectLabel","optype":"query","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"projectLabel","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.projectLabel`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"POST projectLabelDelete","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation ProjectLabelRemove($id: String!) { projectLabelDelete(id: $id) { entityId lastSyncId success } }","field":"projectLabelDelete","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"projectLabelDelete","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.projectLabelDelete`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"POST projectLabelRestore","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation ProjectLabelUpdateRestore($id: String!) { projectLabelRestore(id: $id) { projectLabel { ...ProjectLabelFields } success } } fragment ProjectLabelFields on ProjectLabel { archivedAt color createdAt creator { id } description id inheritedFrom { id } isGroup lastAppliedAt name organization { id } parent { id } retiredAt retiredBy { id } team { id } updatedAt }","field":"projectLabelRestore","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"projectLabelRestore","q":{"$action":"restore","exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.projectLabelRestore.projectLabel`"},"index$":0},{"a":true,"co":{"id":"POST projectLabelRetire","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation ProjectLabelUpdateRetire($id: String!) { projectLabelRetire(id: $id) { projectLabel { ...ProjectLabelFields } success } } fragment ProjectLabelFields on ProjectLabel { archivedAt color createdAt creator { id } description id inheritedFrom { id } isGroup lastAppliedAt name organization { id } parent { id } retiredAt retiredBy { id } team { id } updatedAt }","field":"projectLabelRetire","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"projectLabelRetire","q":{"$action":"retire","exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.projectLabelRetire.projectLabel`"},"index$":1},{"a":true,"co":{"id":"POST projectLabelUpdate","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"replace_team_label","or":"replace_team_label","r":false,"t":"`$BOOLEAN`","index$":1}]},"gq":{"doc":"mutation ProjectLabelUpdate($id: String!, $input: ProjectLabelUpdateInput!, $replaceTeamLabels: Boolean) { projectLabelUpdate(id: $id, input: $input, replaceTeamLabels: $replaceTeamLabels) { projectLabel { ...ProjectLabelFields } success } } fragment ProjectLabelFields on ProjectLabel { archivedAt color createdAt creator { id } description id inheritedFrom { id } isGroup lastAppliedAt name organization { id } parent { id } retiredAt retiredBy { id } team { id } updatedAt }","field":"projectLabelUpdate","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"","gqltype":"ProjectLabelUpdateInput!","name":"input"},{"from":"replaceTeamLabels","gqltype":"Boolean","name":"replaceTeamLabels"}]},"k":"graphql","m":"POST","o":"projectLabelUpdate","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.projectLabelUpdate.projectLabel`"},"index$":2}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"project_label","name__orig":"project_label","Name":"ProjectLabel","name_":"project_label","name-":"project-label","NAME":"PROJECT_LABEL","index$":57}, {"active":true,"entity":"project_label","key$":"BasicProjectLabelFlow","kind":"basic","name":"BasicProjectLabelFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"project_label_ref01"},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01","replace_team_label":"replace_team_label01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"project_label_ref01"}}],"index$":1},{"a":true,"d":{"replace_team_label":"replace_team_label01"},"i":{"ref":"project_label_ref01","srcdatavar":"project_label_ref01_data","suffix":"_up0","textfield":"color"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-project_label_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"project_label_ref01","srcdatavar":"project_label_ref01_data","suffix":"_dt0"},"m":{"id":"project_label01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-project_label_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"project_label_ref01","suffix":"_rm0"},"m":{"id":"project_label01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"project_label_ref01"}}],"index$":5}]}, 'ProjectLabel', {"POST projectLabelCreate":{"protocol":"graphql"},"POST projectLabels":{"protocol":"graphql"},"POST projectLabel":{"protocol":"graphql"},"POST projectLabelDelete":{"protocol":"graphql"},"POST projectLabelRestore":{"protocol":"graphql"},"POST projectLabelRetire":{"protocol":"graphql"},"POST projectLabelUpdate":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const project_label_ref01_ent = client.ProjectLabel()
    let project_label_ref01_data = setup.data.new.project_label['project_label_ref01']
    project_label_ref01_data['after'] = setup.idmap['after01']
    project_label_ref01_data['before'] = setup.idmap['before01']
    project_label_ref01_data['first'] = setup.idmap['first01']
    project_label_ref01_data['include_archived'] = setup.idmap['include_archived01']
    project_label_ref01_data['last'] = setup.idmap['last01']
    project_label_ref01_data['order_by'] = setup.idmap['order_by01']
    project_label_ref01_data['replace_team_label'] = setup.idmap['replace_team_label01']

    project_label_ref01_data = (await project_label_ref01_ent.create(project_label_ref01_data)).data()
    assert(null != project_label_ref01_data.id)


    // LIST
    const project_label_ref01_match: any = {}
    project_label_ref01_match['after'] = setup.idmap['after01']
    project_label_ref01_match['before'] = setup.idmap['before01']
    project_label_ref01_match['first'] = setup.idmap['first01']
    project_label_ref01_match['include_archived'] = setup.idmap['include_archived01']
    project_label_ref01_match['last'] = setup.idmap['last01']
    project_label_ref01_match['order_by'] = setup.idmap['order_by01']

    const project_label_ref01_list = (await project_label_ref01_ent.list(project_label_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(project_label_ref01_list, { id: project_label_ref01_data.id })))


    // UPDATE
    const project_label_ref01_data_up0: any = {}
    project_label_ref01_data_up0.id = project_label_ref01_data.id
    project_label_ref01_data_up0 ['replace_team_label'] = setup.idmap['replace_team_label']

    const project_label_ref01_markdef_up0 = { name: 'color', value: 'Mark01-project_label_ref01_' + setup.now }
    ;(project_label_ref01_data_up0 as any)[project_label_ref01_markdef_up0.name] = project_label_ref01_markdef_up0.value

    const project_label_ref01_resdata_up0 = (await project_label_ref01_ent.update(project_label_ref01_data_up0)).data()
    assert(project_label_ref01_resdata_up0.id === project_label_ref01_data_up0.id)

    assert((project_label_ref01_resdata_up0 as any)[project_label_ref01_markdef_up0.name] === project_label_ref01_markdef_up0.value)


    // LOAD
    const project_label_ref01_match_dt0: any = {}
    project_label_ref01_match_dt0.id = project_label_ref01_data.id
    const project_label_ref01_data_dt0 = (await project_label_ref01_ent.load(project_label_ref01_match_dt0)).data()
    assert(project_label_ref01_data_dt0.id === project_label_ref01_data.id)


    // REMOVE
    const project_label_ref01_match_rm0: any = { id: project_label_ref01_data.id }
    await project_label_ref01_ent.remove(project_label_ref01_match_rm0)
  

    // LIST
    const project_label_ref01_match_rt0: any = {}
    project_label_ref01_match_rt0['after'] = setup.idmap['after01']
    project_label_ref01_match_rt0['before'] = setup.idmap['before01']
    project_label_ref01_match_rt0['first'] = setup.idmap['first01']
    project_label_ref01_match_rt0['include_archived'] = setup.idmap['include_archived01']
    project_label_ref01_match_rt0['last'] = setup.idmap['last01']
    project_label_ref01_match_rt0['order_by'] = setup.idmap['order_by01']

    const project_label_ref01_list_rt0 = (await project_label_ref01_ent.list(project_label_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(project_label_ref01_list_rt0, { id: project_label_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/project_label/ProjectLabelTestData.json')

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
    ['project_label01','project_label02','project_label03','after01','before01','first01','include_archived01','last01','order_by01','replace_team_label01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_PROJECT_LABEL_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_PROJECT_LABEL_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_PROJECT_LABEL_ENTID']
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
  
