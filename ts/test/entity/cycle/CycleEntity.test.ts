

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


describe('CycleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.Cycle()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'cycle.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archivedAt":{"a":true,"h":"Archived At","n":"archivedAt","r":false,"sh":"The time at which the entity was archived.","t":"`$ANY`","key$":"archivedAt","index$":0},"autoArchivedAt":{"a":true,"h":"Auto Archived At","n":"autoArchivedAt","r":false,"sh":"The time at which the cycle was automatically archived by the auto-pruning process.","t":"`$ANY`","key$":"autoArchivedAt","index$":1},"completedAt":{"a":true,"h":"Completed At","n":"completedAt","r":false,"sh":"The completion time of the cycle.","t":"`$ANY`","key$":"completedAt","index$":2},"completedIssueCountHistory":{"a":true,"h":"Completed Issue Count History","n":"completedIssueCountHistory","r":true,"sh":"The number of completed issues in the cycle after each day.","t":"`$NUMBER`","key$":"completedIssueCountHistory","index$":3},"completedScopeHistory":{"a":true,"h":"Completed Scope History","n":"completedScopeHistory","r":true,"sh":"The number of completed estimation points after each day.","t":"`$NUMBER`","key$":"completedScopeHistory","index$":4},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"The time at which the entity was created.","t":"`$ANY`","key$":"createdAt","index$":5},"currentProgress":{"a":true,"h":"Current Progress","n":"currentProgress","r":true,"sh":"[Internal] The current progress snapshot of the cycle, broken down by issue status categories.","t":"`$ANY`","key$":"currentProgress","index$":6},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"The description of the cycle.","t":"`$STRING`","key$":"description","index$":7},"endsAt":{"a":true,"h":"Ends At","n":"endsAt","r":true,"sh":"The end date and time of the cycle.","t":"`$ANY`","key$":"endsAt","index$":8},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier of the entity.","t":"`$STRING`","key$":"id","index$":9},"inProgressScopeHistory":{"a":true,"h":"In Progress Scope History","n":"inProgressScopeHistory","r":true,"sh":"The number of in-progress estimation points after each day.","t":"`$NUMBER`","key$":"inProgressScopeHistory","index$":10},"inheritedFrom":{"a":true,"h":"Inherited From","n":"inheritedFrom","r":false,"sh":"The parent cycle this cycle was inherited from.","t":"`$OBJECT`","key$":"inheritedFrom","index$":11},"isActive":{"a":true,"h":"Is Active","n":"isActive","r":true,"sh":"Whether the cycle is currently active.","t":"`$BOOLEAN`","key$":"isActive","index$":12},"isFuture":{"a":true,"h":"Is Future","n":"isFuture","r":true,"sh":"Whether the cycle has not yet started.","t":"`$BOOLEAN`","key$":"isFuture","index$":13},"isNext":{"a":true,"h":"Is Next","n":"isNext","r":true,"sh":"Whether this cycle is the next upcoming (not yet started) cycle for the team.","t":"`$BOOLEAN`","key$":"isNext","index$":14},"isPast":{"a":true,"h":"Is Past","n":"isPast","r":true,"sh":"Whether the cycle's end date has passed.","t":"`$BOOLEAN`","key$":"isPast","index$":15},"isPrevious":{"a":true,"h":"Is Previous","n":"isPrevious","r":true,"sh":"Whether this cycle is the most recently completed cycle for the team.","t":"`$BOOLEAN`","key$":"isPrevious","index$":16},"issueCountHistory":{"a":true,"h":"Issue Count History","n":"issueCountHistory","r":true,"sh":"The total number of issues in the cycle after each day.","t":"`$NUMBER`","key$":"issueCountHistory","index$":17},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"The custom name of the cycle.","t":"`$STRING`","key$":"name","index$":18},"number":{"a":true,"h":"Number","n":"number","r":true,"sh":"The auto-incrementing number of the cycle, unique within its team.","t":"`$NUMBER`","key$":"number","index$":19},"progress":{"a":true,"h":"Progress","n":"progress","r":true,"sh":"The overall progress of the cycle as a number between 0 and 1.","t":"`$NUMBER`","key$":"progress","index$":20},"progressHistory":{"a":true,"h":"Progress History","n":"progressHistory","r":true,"sh":"[Internal] The detailed progress history of the cycle, including per-status breakdowns over time.","t":"`$ANY`","key$":"progressHistory","index$":21},"scopeHistory":{"a":true,"h":"Scope History","n":"scopeHistory","r":true,"sh":"The total number of estimation points (scope) in the cycle after each day.","t":"`$NUMBER`","key$":"scopeHistory","index$":22},"startsAt":{"a":true,"h":"Starts At","n":"startsAt","r":true,"sh":"The start date and time of the cycle.","t":"`$ANY`","key$":"startsAt","index$":23},"team":{"a":true,"h":"Team","n":"team","r":false,"sh":"The team that the cycle belongs to.","t":"`$OBJECT`","key$":"team","index$":24},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"The last time at which the entity was meaningfully updated.","t":"`$ANY`","key$":"updatedAt","index$":25}},"id":{"field":"id","name":"id"},"name":"cycle","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST cycleCreate","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation CycleCreate($input: CycleCreateInput!) { cycleCreate(input: $input) { cycle { ...CycleFields } success } } fragment CycleFields on Cycle { archivedAt autoArchivedAt completedAt completedIssueCountHistory completedScopeHistory createdAt currentProgress description endsAt id inProgressScopeHistory inheritedFrom { id } isActive isFuture isNext isPast isPrevious issueCountHistory name number progress progressHistory scopeHistory startsAt team { id } updatedAt }","field":"cycleCreate","optype":"mutation","vars":[{"from":"","gqltype":"CycleCreateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"cycleCreate","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.cycleCreate.cycle`"},"index$":0},{"a":true,"co":{"id":"POST cycleShiftAll","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation CycleCreateShiftAll($input: CycleShiftAllInput!) { cycleShiftAll(input: $input) { cycle { ...CycleFields } success } } fragment CycleFields on Cycle { archivedAt autoArchivedAt completedAt completedIssueCountHistory completedScopeHistory createdAt currentProgress description endsAt id inProgressScopeHistory inheritedFrom { id } isActive isFuture isNext isPast isPrevious issueCountHistory name number progress progressHistory scopeHistory startsAt team { id } updatedAt }","field":"cycleShiftAll","optype":"mutation","vars":[{"from":"","gqltype":"CycleShiftAllInput!","name":"input"}]},"k":"graphql","m":"POST","o":"cycleShiftAll","q":{"$action":"shift_all"},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.cycleShiftAll.cycle`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"POST cycles","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"first","or":"first","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"param","n":"include_archived","or":"include_archived","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"k":"param","n":"last","or":"last","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"param","n":"order_by","or":"order_by","r":false,"t":"`$ANY`","index$":5}]},"gq":{"doc":"query CycleList($after: String, $before: String, $filter: CycleFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { cycles(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...CycleFields } pageInfo { endCursor hasNextPage } } } fragment CycleFields on Cycle { archivedAt autoArchivedAt completedAt completedIssueCountHistory completedScopeHistory createdAt currentProgress description endsAt id inProgressScopeHistory inheritedFrom { id } isActive isFuture isNext isPast isPrevious issueCountHistory name number progress progressHistory scopeHistory startsAt team { id } updatedAt }","field":"cycles","optype":"query","page":{"cursor":"pageInfo.endCursor","more":"pageInfo.hasNextPage","nodes":"nodes","style":"relay"},"vars":[{"from":"after","gqltype":"String","name":"after"},{"from":"before","gqltype":"String","name":"before"},{"from":"","gqltype":"CycleFilter","name":"filter"},{"from":"first","gqltype":"Int","name":"first"},{"from":"includeArchived","gqltype":"Boolean","name":"includeArchived"},{"from":"last","gqltype":"Int","name":"last"},{"from":"orderBy","gqltype":"PaginationOrderBy","name":"orderBy"}]},"k":"graphql","m":"POST","o":"cycles","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.cycles.nodes`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"POST cycle","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"query CycleLoad($id: String!) { cycle(id: $id) { ...CycleFields } } fragment CycleFields on Cycle { archivedAt autoArchivedAt completedAt completedIssueCountHistory completedScopeHistory createdAt currentProgress description endsAt id inProgressScopeHistory inheritedFrom { id } isActive isFuture isNext isPast isPrevious issueCountHistory name number progress progressHistory scopeHistory startsAt team { id } updatedAt }","field":"cycle","optype":"query","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"cycle","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.cycle`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"POST cycleArchive","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation CycleUpdateArchive($id: String!) { cycleArchive(id: $id) { entity { ...CycleFields } success } } fragment CycleFields on Cycle { archivedAt autoArchivedAt completedAt completedIssueCountHistory completedScopeHistory createdAt currentProgress description endsAt id inProgressScopeHistory inheritedFrom { id } isActive isFuture isNext isPast isPrevious issueCountHistory name number progress progressHistory scopeHistory startsAt team { id } updatedAt }","field":"cycleArchive","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"cycleArchive","q":{"$action":"archive","exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.cycleArchive.entity`"},"index$":0},{"a":true,"co":{"id":"POST cycleStartUpcomingCycleToday","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation CycleUpdateStartUpcomingCycleToday($id: String!) { cycleStartUpcomingCycleToday(id: $id) { cycle { ...CycleFields } success } } fragment CycleFields on Cycle { archivedAt autoArchivedAt completedAt completedIssueCountHistory completedScopeHistory createdAt currentProgress description endsAt id inProgressScopeHistory inheritedFrom { id } isActive isFuture isNext isPast isPrevious issueCountHistory name number progress progressHistory scopeHistory startsAt team { id } updatedAt }","field":"cycleStartUpcomingCycleToday","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"cycleStartUpcomingCycleToday","q":{"$action":"start_upcoming_cycle_today","exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.cycleStartUpcomingCycleToday.cycle`"},"index$":1},{"a":true,"co":{"id":"POST cycleUpdate","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation CycleUpdate($id: String!, $input: CycleUpdateInput!) { cycleUpdate(id: $id, input: $input) { cycle { ...CycleFields } success } } fragment CycleFields on Cycle { archivedAt autoArchivedAt completedAt completedIssueCountHistory completedScopeHistory createdAt currentProgress description endsAt id inProgressScopeHistory inheritedFrom { id } isActive isFuture isNext isPast isPrevious issueCountHistory name number progress progressHistory scopeHistory startsAt team { id } updatedAt }","field":"cycleUpdate","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"","gqltype":"CycleUpdateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"cycleUpdate","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.cycleUpdate.cycle`"},"index$":2}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"cycle","name__orig":"cycle","Name":"Cycle","name_":"cycle","name-":"cycle","NAME":"CYCLE","index$":18}, {"active":true,"entity":"cycle","key$":"BasicCycleFlow","kind":"basic","name":"BasicCycleFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"cycle_ref01"},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"cycle_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"cycle_ref01","srcdatavar":"cycle_ref01_data","suffix":"_up0","textfield":"description"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-cycle_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"cycle_ref01","srcdatavar":"cycle_ref01_data","suffix":"_dt0"},"m":{"id":"cycle01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-cycle_ref01"}}],"index$":3}]}, 'Cycle', {"POST cycleCreate":{"protocol":"graphql"},"POST cycleShiftAll":{"protocol":"graphql"},"POST cycles":{"protocol":"graphql"},"POST cycle":{"protocol":"graphql"},"POST cycleArchive":{"protocol":"graphql"},"POST cycleStartUpcomingCycleToday":{"protocol":"graphql"},"POST cycleUpdate":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const cycle_ref01_ent = client.Cycle()
    let cycle_ref01_data = setup.data.new.cycle['cycle_ref01']
    cycle_ref01_data['after'] = setup.idmap['after01']
    cycle_ref01_data['before'] = setup.idmap['before01']
    cycle_ref01_data['first'] = setup.idmap['first01']
    cycle_ref01_data['include_archived'] = setup.idmap['include_archived01']
    cycle_ref01_data['last'] = setup.idmap['last01']
    cycle_ref01_data['order_by'] = setup.idmap['order_by01']

    cycle_ref01_data = (await cycle_ref01_ent.create(cycle_ref01_data)).data()
    assert(null != cycle_ref01_data.id)


    // LIST
    const cycle_ref01_match: any = {}
    cycle_ref01_match['after'] = setup.idmap['after01']
    cycle_ref01_match['before'] = setup.idmap['before01']
    cycle_ref01_match['first'] = setup.idmap['first01']
    cycle_ref01_match['include_archived'] = setup.idmap['include_archived01']
    cycle_ref01_match['last'] = setup.idmap['last01']
    cycle_ref01_match['order_by'] = setup.idmap['order_by01']

    const cycle_ref01_list = (await cycle_ref01_ent.list(cycle_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(cycle_ref01_list, { id: cycle_ref01_data.id })))


    // UPDATE
    const cycle_ref01_data_up0: any = {}
    cycle_ref01_data_up0.id = cycle_ref01_data.id

    const cycle_ref01_markdef_up0 = { name: 'description', value: 'Mark01-cycle_ref01_' + setup.now }
    ;(cycle_ref01_data_up0 as any)[cycle_ref01_markdef_up0.name] = cycle_ref01_markdef_up0.value

    const cycle_ref01_resdata_up0 = (await cycle_ref01_ent.update(cycle_ref01_data_up0)).data()
    assert(cycle_ref01_resdata_up0.id === cycle_ref01_data_up0.id)

    assert((cycle_ref01_resdata_up0 as any)[cycle_ref01_markdef_up0.name] === cycle_ref01_markdef_up0.value)


    // LOAD
    const cycle_ref01_match_dt0: any = {}
    cycle_ref01_match_dt0.id = cycle_ref01_data.id
    const cycle_ref01_data_dt0 = (await cycle_ref01_ent.load(cycle_ref01_match_dt0)).data()
    assert(cycle_ref01_data_dt0.id === cycle_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/cycle/CycleTestData.json')

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
    ['cycle01','cycle02','cycle03','after01','before01','first01','include_archived01','last01','order_by01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_CYCLE_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_CYCLE_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_CYCLE_ENTID']
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
  
