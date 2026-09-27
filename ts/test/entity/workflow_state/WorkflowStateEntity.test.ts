

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


describe('WorkflowStateEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.WorkflowState()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'workflow_state.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archivedAt":{"a":true,"h":"Archived At","n":"archivedAt","r":false,"sh":"The time at which the entity was archived.","t":"`$ANY`","key$":"archivedAt","index$":0},"color":{"a":true,"h":"Color","n":"color","r":true,"sh":"The state's UI color as a HEX string.","t":"`$STRING`","key$":"color","index$":1},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"The time at which the entity was created.","t":"`$ANY`","key$":"createdAt","index$":2},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"Description of the state.","t":"`$STRING`","key$":"description","index$":3},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier of the entity.","t":"`$STRING`","key$":"id","index$":4},"inheritedFrom":{"a":true,"h":"Inherited From","n":"inheritedFrom","r":false,"sh":"The parent team's workflow state that this state was inherited from.","t":"`$OBJECT`","key$":"inheritedFrom","index$":5},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The state's human-readable name (e.g., 'In Progress', 'Done', 'Backlog').","t":"`$STRING`","key$":"name","index$":6},"position":{"a":true,"h":"Position","n":"position","r":true,"sh":"The position of the state in the team's workflow.","t":"`$NUMBER`","key$":"position","index$":7},"team":{"a":true,"h":"Team","n":"team","r":false,"sh":"The team that this workflow state belongs to.","t":"`$OBJECT`","key$":"team","index$":8},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"The type of the state.","t":"`$STRING`","key$":"type","index$":9},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"The last time at which the entity was meaningfully updated.","t":"`$ANY`","key$":"updatedAt","index$":10}},"id":{"field":"id","name":"id"},"name":"workflow_state","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST workflowStateCreate","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation WorkflowStateCreate($input: WorkflowStateCreateInput!) { workflowStateCreate(input: $input) { workflowState { ...WorkflowStateFields } success } } fragment WorkflowStateFields on WorkflowState { archivedAt color createdAt description id inheritedFrom { id } name position team { id } type updatedAt }","field":"workflowStateCreate","optype":"mutation","vars":[{"from":"","gqltype":"WorkflowStateCreateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"workflowStateCreate","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.workflowStateCreate.workflowState`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"POST workflowStates","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"first","or":"first","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"param","n":"include_archived","or":"include_archived","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"k":"param","n":"last","or":"last","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"param","n":"order_by","or":"order_by","r":false,"t":"`$ANY`","index$":5}]},"gq":{"doc":"query WorkflowStateList($after: String, $before: String, $filter: WorkflowStateFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { workflowStates(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...WorkflowStateFields } pageInfo { endCursor hasNextPage } } } fragment WorkflowStateFields on WorkflowState { archivedAt color createdAt description id inheritedFrom { id } name position team { id } type updatedAt }","field":"workflowStates","optype":"query","page":{"cursor":"pageInfo.endCursor","more":"pageInfo.hasNextPage","nodes":"nodes","style":"relay"},"vars":[{"from":"after","gqltype":"String","name":"after"},{"from":"before","gqltype":"String","name":"before"},{"from":"","gqltype":"WorkflowStateFilter","name":"filter"},{"from":"first","gqltype":"Int","name":"first"},{"from":"includeArchived","gqltype":"Boolean","name":"includeArchived"},{"from":"last","gqltype":"Int","name":"last"},{"from":"orderBy","gqltype":"PaginationOrderBy","name":"orderBy"}]},"k":"graphql","m":"POST","o":"workflowStates","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.workflowStates.nodes`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"POST workflowState","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"query WorkflowStateLoad($id: String!) { workflowState(id: $id) { ...WorkflowStateFields } } fragment WorkflowStateFields on WorkflowState { archivedAt color createdAt description id inheritedFrom { id } name position team { id } type updatedAt }","field":"workflowState","optype":"query","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"workflowState","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.workflowState`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"POST workflowStateArchive","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation WorkflowStateUpdateArchive($id: String!) { workflowStateArchive(id: $id) { entity { ...WorkflowStateFields } success } } fragment WorkflowStateFields on WorkflowState { archivedAt color createdAt description id inheritedFrom { id } name position team { id } type updatedAt }","field":"workflowStateArchive","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"workflowStateArchive","q":{"$action":"archive","exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.workflowStateArchive.entity`"},"index$":0},{"a":true,"co":{"id":"POST workflowStateUpdate","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation WorkflowStateUpdate($id: String!, $input: WorkflowStateUpdateInput!) { workflowStateUpdate(id: $id, input: $input) { workflowState { ...WorkflowStateFields } success } } fragment WorkflowStateFields on WorkflowState { archivedAt color createdAt description id inheritedFrom { id } name position team { id } type updatedAt }","field":"workflowStateUpdate","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"","gqltype":"WorkflowStateUpdateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"workflowStateUpdate","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.workflowStateUpdate.workflowState`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"workflow_state","name__orig":"workflow_state","Name":"WorkflowState","name_":"workflow_state","name-":"workflow-state","NAME":"WORKFLOW_STATE","index$":86}, {"active":true,"entity":"workflow_state","key$":"BasicWorkflowStateFlow","kind":"basic","name":"BasicWorkflowStateFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"workflow_state_ref01"},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"workflow_state_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"workflow_state_ref01","srcdatavar":"workflow_state_ref01_data","suffix":"_up0","textfield":"color"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-workflow_state_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"workflow_state_ref01","srcdatavar":"workflow_state_ref01_data","suffix":"_dt0"},"m":{"id":"workflow_state01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-workflow_state_ref01"}}],"index$":3}]}, 'WorkflowState', {"POST workflowStateCreate":{"protocol":"graphql"},"POST workflowStates":{"protocol":"graphql"},"POST workflowState":{"protocol":"graphql"},"POST workflowStateArchive":{"protocol":"graphql"},"POST workflowStateUpdate":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const workflow_state_ref01_ent = client.WorkflowState()
    let workflow_state_ref01_data = setup.data.new.workflow_state['workflow_state_ref01']
    workflow_state_ref01_data['after'] = setup.idmap['after01']
    workflow_state_ref01_data['before'] = setup.idmap['before01']
    workflow_state_ref01_data['first'] = setup.idmap['first01']
    workflow_state_ref01_data['include_archived'] = setup.idmap['include_archived01']
    workflow_state_ref01_data['last'] = setup.idmap['last01']
    workflow_state_ref01_data['order_by'] = setup.idmap['order_by01']

    workflow_state_ref01_data = (await workflow_state_ref01_ent.create(workflow_state_ref01_data)).data()
    assert(null != workflow_state_ref01_data.id)


    // LIST
    const workflow_state_ref01_match: any = {}
    workflow_state_ref01_match['after'] = setup.idmap['after01']
    workflow_state_ref01_match['before'] = setup.idmap['before01']
    workflow_state_ref01_match['first'] = setup.idmap['first01']
    workflow_state_ref01_match['include_archived'] = setup.idmap['include_archived01']
    workflow_state_ref01_match['last'] = setup.idmap['last01']
    workflow_state_ref01_match['order_by'] = setup.idmap['order_by01']

    const workflow_state_ref01_list = (await workflow_state_ref01_ent.list(workflow_state_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(workflow_state_ref01_list, { id: workflow_state_ref01_data.id })))


    // UPDATE
    const workflow_state_ref01_data_up0: any = {}
    workflow_state_ref01_data_up0.id = workflow_state_ref01_data.id

    const workflow_state_ref01_markdef_up0 = { name: 'color', value: 'Mark01-workflow_state_ref01_' + setup.now }
    ;(workflow_state_ref01_data_up0 as any)[workflow_state_ref01_markdef_up0.name] = workflow_state_ref01_markdef_up0.value

    const workflow_state_ref01_resdata_up0 = (await workflow_state_ref01_ent.update(workflow_state_ref01_data_up0)).data()
    assert(workflow_state_ref01_resdata_up0.id === workflow_state_ref01_data_up0.id)

    assert((workflow_state_ref01_resdata_up0 as any)[workflow_state_ref01_markdef_up0.name] === workflow_state_ref01_markdef_up0.value)


    // LOAD
    const workflow_state_ref01_match_dt0: any = {}
    workflow_state_ref01_match_dt0.id = workflow_state_ref01_data.id
    const workflow_state_ref01_data_dt0 = (await workflow_state_ref01_ent.load(workflow_state_ref01_match_dt0)).data()
    assert(workflow_state_ref01_data_dt0.id === workflow_state_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/workflow_state/WorkflowStateTestData.json')

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
    ['workflow_state01','workflow_state02','workflow_state03','after01','before01','first01','include_archived01','last01','order_by01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_WORKFLOW_STATE_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_WORKFLOW_STATE_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_WORKFLOW_STATE_ENTID']
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
  
