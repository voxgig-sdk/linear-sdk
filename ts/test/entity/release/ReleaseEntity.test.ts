

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


describe('ReleaseEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.Release()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'release.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archivedAt":{"a":true,"h":"Archived At","n":"archivedAt","r":false,"sh":"The time at which the entity was archived.","t":"`$ANY`","key$":"archivedAt","index$":0},"autoArchivedAt":{"a":true,"h":"Auto Archived At","n":"autoArchivedAt","r":false,"sh":"The time at which the release was automatically archived by the auto pruning process.","t":"`$ANY`","key$":"autoArchivedAt","index$":1},"canceledAt":{"a":true,"h":"Canceled At","n":"canceledAt","r":false,"sh":"The time at which the release was canceled.","t":"`$ANY`","key$":"canceledAt","index$":2},"commitSha":{"a":true,"h":"Commit Sha","n":"commitSha","r":false,"sh":"The Git commit SHA associated with this release.","t":"`$STRING`","key$":"commitSha","index$":3},"completedAt":{"a":true,"h":"Completed At","n":"completedAt","r":false,"sh":"The time at which the release was completed.","t":"`$ANY`","key$":"completedAt","index$":4},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"The time at which the entity was created.","t":"`$ANY`","key$":"createdAt","index$":5},"creator":{"a":true,"h":"Creator","n":"creator","r":false,"sh":"The user who created the release.","t":"`$OBJECT`","key$":"creator","index$":6},"currentProgress":{"a":true,"h":"Current Progress","n":"currentProgress","r":true,"sh":"The current progress summary for the release, including counts of issues by workflow state type (e.g., completed, in progress, unstarted).","t":"`$ANY`","key$":"currentProgress","index$":7},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"The description of the release in plain text or markdown.","t":"`$STRING`","key$":"description","index$":8},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier of the entity.","t":"`$STRING`","key$":"id","index$":9},"issueCount":{"a":true,"h":"Issue Count","n":"issueCount","r":true,"sh":"Number of issues associated with the release.","t":"`$INTEGER`","key$":"issueCount","index$":10},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The name of the release.","t":"`$STRING`","key$":"name","index$":11},"pipeline":{"a":true,"h":"Pipeline","n":"pipeline","r":false,"sh":"The release pipeline that this release belongs to.","t":"`$OBJECT`","key$":"pipeline","index$":12},"progressHistory":{"a":true,"h":"Progress History","n":"progressHistory","r":true,"sh":"The historical progress snapshots for the release, tracking how issue completion has evolved over time.","t":"`$ANY`","key$":"progressHistory","index$":13},"releaseNote":{"a":true,"h":"Release Note","n":"releaseNote","r":false,"sh":"[Internal] The primary release note covering this release.","t":"`$OBJECT`","key$":"releaseNote","index$":14},"slugId":{"a":true,"h":"Slug Id","n":"slugId","r":true,"sh":"The release's unique URL slug, used to construct human-readable URLs for the release.","t":"`$STRING`","key$":"slugId","index$":15},"stage":{"a":true,"h":"Stage","n":"stage","r":false,"sh":"The current stage of the release within its pipeline (e.g., Planned, In Progress, Completed, Canceled).","t":"`$OBJECT`","key$":"stage","index$":16},"startDate":{"a":true,"h":"Start Date","n":"startDate","r":false,"sh":"The estimated start date of the release.","t":"`$ANY`","key$":"startDate","index$":17},"startedAt":{"a":true,"h":"Started At","n":"startedAt","r":false,"sh":"The time at which the release first entered a started stage.","t":"`$ANY`","key$":"startedAt","index$":18},"targetDate":{"a":true,"h":"Target Date","n":"targetDate","r":false,"sh":"The estimated completion date of the release.","t":"`$ANY`","key$":"targetDate","index$":19},"trashed":{"a":true,"h":"Trashed","n":"trashed","r":false,"sh":"A flag that indicates whether the release is in the trash bin.","t":"`$BOOLEAN`","key$":"trashed","index$":20},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"The last time at which the entity was meaningfully updated.","t":"`$ANY`","key$":"updatedAt","index$":21},"url":{"a":true,"h":"Url","n":"url","r":true,"sh":"The URL to the release page in the Linear app.","t":"`$STRING`","key$":"url","index$":22},"version":{"a":true,"h":"Version","n":"version","r":false,"sh":"The version identifier for this release (e.g., 'v1.2.3' or a short commit hash).","t":"`$STRING`","key$":"version","index$":23}},"id":{"field":"id","name":"id"},"name":"release","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST releaseComplete","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation ReleaseCreateComplete($input: ReleaseCompleteInput!) { releaseComplete(input: $input) { release { ...ReleaseFields } success } } fragment ReleaseFields on Release { archivedAt autoArchivedAt canceledAt commitSha completedAt createdAt creator { id } currentProgress description id issueCount name pipeline { id } progressHistory releaseNote { id } slugId stage { id } startDate startedAt targetDate trashed updatedAt url version }","field":"releaseComplete","optype":"mutation","vars":[{"from":"","gqltype":"ReleaseCompleteInput!","name":"input"}]},"k":"graphql","m":"POST","o":"releaseComplete","q":{"$action":"complete"},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.releaseComplete.release`"},"index$":0},{"a":true,"co":{"id":"POST releaseCreate","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation ReleaseCreate($input: ReleaseCreateInput!) { releaseCreate(input: $input) { release { ...ReleaseFields } success } } fragment ReleaseFields on Release { archivedAt autoArchivedAt canceledAt commitSha completedAt createdAt creator { id } currentProgress description id issueCount name pipeline { id } progressHistory releaseNote { id } slugId stage { id } startDate startedAt targetDate trashed updatedAt url version }","field":"releaseCreate","optype":"mutation","vars":[{"from":"","gqltype":"ReleaseCreateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"releaseCreate","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.releaseCreate.release`"},"index$":1},{"a":true,"co":{"id":"POST releaseSync","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation ReleaseCreateSync($input: ReleaseSyncInput!) { releaseSync(input: $input) { release { ...ReleaseFields } success } } fragment ReleaseFields on Release { archivedAt autoArchivedAt canceledAt commitSha completedAt createdAt creator { id } currentProgress description id issueCount name pipeline { id } progressHistory releaseNote { id } slugId stage { id } startDate startedAt targetDate trashed updatedAt url version }","field":"releaseSync","optype":"mutation","vars":[{"from":"","gqltype":"ReleaseSyncInput!","name":"input"}]},"k":"graphql","m":"POST","o":"releaseSync","q":{"$action":"sync"},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.releaseSync.release`"},"index$":2},{"a":true,"co":{"id":"POST releaseUpdateByPipeline","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation ReleaseCreateUpdateByPipeline($input: ReleaseUpdateByPipelineInput!) { releaseUpdateByPipeline(input: $input) { release { ...ReleaseFields } success } } fragment ReleaseFields on Release { archivedAt autoArchivedAt canceledAt commitSha completedAt createdAt creator { id } currentProgress description id issueCount name pipeline { id } progressHistory releaseNote { id } slugId stage { id } startDate startedAt targetDate trashed updatedAt url version }","field":"releaseUpdateByPipeline","optype":"mutation","vars":[{"from":"","gqltype":"ReleaseUpdateByPipelineInput!","name":"input"}]},"k":"graphql","m":"POST","o":"releaseUpdateByPipeline","q":{"$action":"update_by_pipeline"},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.releaseUpdateByPipeline.release`"},"index$":3}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"POST releaseSearch","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"first","or":"first","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"param","n":"term","or":"term","r":false,"t":"`$STRING`","index$":1}]},"gq":{"doc":"query ReleaseList($filter: ReleaseFilter, $first: Int, $term: String) { releaseSearch(filter: $filter, first: $first, term: $term) { ...ReleaseFields } } fragment ReleaseFields on Release { archivedAt autoArchivedAt canceledAt commitSha completedAt createdAt creator { id } currentProgress description id issueCount name pipeline { id } progressHistory releaseNote { id } slugId stage { id } startDate startedAt targetDate trashed updatedAt url version }","field":"releaseSearch","optype":"query","vars":[{"from":"","gqltype":"ReleaseFilter","name":"filter"},{"from":"first","gqltype":"Int","name":"first"},{"from":"term","gqltype":"String","name":"term"}]},"k":"graphql","m":"POST","o":"releaseSearch","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.releaseSearch`"},"index$":0},{"a":true,"co":{"id":"POST releases","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"first","or":"first","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"param","n":"include_archived","or":"include_archived","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"k":"param","n":"last","or":"last","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"param","n":"order_by","or":"order_by","r":false,"t":"`$ANY`","index$":5}]},"gq":{"doc":"query ReleaseList($after: String, $before: String, $filter: ReleaseFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy, $sort: [ReleaseSortInput!]) { releases(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy, sort: $sort) { nodes { ...ReleaseFields } pageInfo { endCursor hasNextPage } } } fragment ReleaseFields on Release { archivedAt autoArchivedAt canceledAt commitSha completedAt createdAt creator { id } currentProgress description id issueCount name pipeline { id } progressHistory releaseNote { id } slugId stage { id } startDate startedAt targetDate trashed updatedAt url version }","field":"releases","optype":"query","page":{"cursor":"pageInfo.endCursor","more":"pageInfo.hasNextPage","nodes":"nodes","style":"relay"},"vars":[{"from":"after","gqltype":"String","name":"after"},{"from":"before","gqltype":"String","name":"before"},{"from":"filter","gqltype":"ReleaseFilter","name":"filter"},{"from":"first","gqltype":"Int","name":"first"},{"from":"includeArchived","gqltype":"Boolean","name":"includeArchived"},{"from":"last","gqltype":"Int","name":"last"},{"from":"orderBy","gqltype":"PaginationOrderBy","name":"orderBy"},{"from":"sort","gqltype":"[ReleaseSortInput!]","name":"sort"}]},"k":"graphql","m":"POST","o":"releases","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.releases.nodes`"},"index$":1}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"POST release","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"query ReleaseLoad($id: String!) { release(id: $id) { ...ReleaseFields } } fragment ReleaseFields on Release { archivedAt autoArchivedAt canceledAt commitSha completedAt createdAt creator { id } currentProgress description id issueCount name pipeline { id } progressHistory releaseNote { id } slugId stage { id } startDate startedAt targetDate trashed updatedAt url version }","field":"release","optype":"query","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"release","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.release`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"POST releaseDelete","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation ReleaseRemove($id: String!) { releaseDelete(id: $id) { entity { ...ReleaseFields } success } } fragment ReleaseFields on Release { archivedAt autoArchivedAt canceledAt commitSha completedAt createdAt creator { id } currentProgress description id issueCount name pipeline { id } progressHistory releaseNote { id } slugId stage { id } startDate startedAt targetDate trashed updatedAt url version }","field":"releaseDelete","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"releaseDelete","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.releaseDelete.entity`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"POST releaseArchive","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation ReleaseUpdateArchive($id: String!) { releaseArchive(id: $id) { entity { ...ReleaseFields } success } } fragment ReleaseFields on Release { archivedAt autoArchivedAt canceledAt commitSha completedAt createdAt creator { id } currentProgress description id issueCount name pipeline { id } progressHistory releaseNote { id } slugId stage { id } startDate startedAt targetDate trashed updatedAt url version }","field":"releaseArchive","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"releaseArchive","q":{"$action":"archive","exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.releaseArchive.entity`"},"index$":0},{"a":true,"co":{"id":"POST releaseUnarchive","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation ReleaseUpdateUnarchive($id: String!) { releaseUnarchive(id: $id) { entity { ...ReleaseFields } success } } fragment ReleaseFields on Release { archivedAt autoArchivedAt canceledAt commitSha completedAt createdAt creator { id } currentProgress description id issueCount name pipeline { id } progressHistory releaseNote { id } slugId stage { id } startDate startedAt targetDate trashed updatedAt url version }","field":"releaseUnarchive","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"releaseUnarchive","q":{"$action":"unarchive","exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.releaseUnarchive.entity`"},"index$":1},{"a":true,"co":{"id":"POST releaseUpdate","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation ReleaseUpdate($id: String!, $input: ReleaseUpdateInput!) { releaseUpdate(id: $id, input: $input) { release { ...ReleaseFields } success } } fragment ReleaseFields on Release { archivedAt autoArchivedAt canceledAt commitSha completedAt createdAt creator { id } currentProgress description id issueCount name pipeline { id } progressHistory releaseNote { id } slugId stage { id } startDate startedAt targetDate trashed updatedAt url version }","field":"releaseUpdate","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"","gqltype":"ReleaseUpdateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"releaseUpdate","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.releaseUpdate.release`"},"index$":2}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"release","name__orig":"release","Name":"Release","name_":"release","name-":"release","NAME":"RELEASE","index$":66}, {"active":true,"entity":"release","key$":"BasicReleaseFlow","kind":"basic","name":"BasicReleaseFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"release_ref01"},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01","term":"term01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"release_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"release_ref01","srcdatavar":"release_ref01_data","suffix":"_up0","textfield":"commitSha"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-release_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"release_ref01","srcdatavar":"release_ref01_data","suffix":"_dt0"},"m":{"id":"release01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-release_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"release_ref01","suffix":"_rm0"},"m":{"id":"release01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"release_ref01"}}],"index$":5}]}, 'Release', {"POST releaseComplete":{"protocol":"graphql"},"POST releaseCreate":{"protocol":"graphql"},"POST releaseSync":{"protocol":"graphql"},"POST releaseUpdateByPipeline":{"protocol":"graphql"},"POST releaseSearch":{"protocol":"graphql"},"POST releases":{"protocol":"graphql"},"POST release":{"protocol":"graphql"},"POST releaseDelete":{"protocol":"graphql"},"POST releaseArchive":{"protocol":"graphql"},"POST releaseUnarchive":{"protocol":"graphql"},"POST releaseUpdate":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const release_ref01_ent = client.Release()
    let release_ref01_data = setup.data.new.release['release_ref01']
    release_ref01_data['after'] = setup.idmap['after01']
    release_ref01_data['before'] = setup.idmap['before01']
    release_ref01_data['first'] = setup.idmap['first01']
    release_ref01_data['include_archived'] = setup.idmap['include_archived01']
    release_ref01_data['last'] = setup.idmap['last01']
    release_ref01_data['order_by'] = setup.idmap['order_by01']
    release_ref01_data['term'] = setup.idmap['term01']

    release_ref01_data = (await release_ref01_ent.create(release_ref01_data)).data()
    assert(null != release_ref01_data.id)


    // LIST
    const release_ref01_match: any = {}
    release_ref01_match['after'] = setup.idmap['after01']
    release_ref01_match['before'] = setup.idmap['before01']
    release_ref01_match['first'] = setup.idmap['first01']
    release_ref01_match['include_archived'] = setup.idmap['include_archived01']
    release_ref01_match['last'] = setup.idmap['last01']
    release_ref01_match['order_by'] = setup.idmap['order_by01']

    const release_ref01_list = (await release_ref01_ent.list(release_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(release_ref01_list, { id: release_ref01_data.id })))


    // UPDATE
    const release_ref01_data_up0: any = {}
    release_ref01_data_up0.id = release_ref01_data.id

    const release_ref01_markdef_up0 = { name: 'commitSha', value: 'Mark01-release_ref01_' + setup.now }
    ;(release_ref01_data_up0 as any)[release_ref01_markdef_up0.name] = release_ref01_markdef_up0.value

    const release_ref01_resdata_up0 = (await release_ref01_ent.update(release_ref01_data_up0)).data()
    assert(release_ref01_resdata_up0.id === release_ref01_data_up0.id)

    assert((release_ref01_resdata_up0 as any)[release_ref01_markdef_up0.name] === release_ref01_markdef_up0.value)


    // LOAD
    const release_ref01_match_dt0: any = {}
    release_ref01_match_dt0.id = release_ref01_data.id
    const release_ref01_data_dt0 = (await release_ref01_ent.load(release_ref01_match_dt0)).data()
    assert(release_ref01_data_dt0.id === release_ref01_data.id)


    // REMOVE
    const release_ref01_match_rm0: any = { id: release_ref01_data.id }
    await release_ref01_ent.remove(release_ref01_match_rm0)
  

    // LIST
    const release_ref01_match_rt0: any = {}
    release_ref01_match_rt0['after'] = setup.idmap['after01']
    release_ref01_match_rt0['before'] = setup.idmap['before01']
    release_ref01_match_rt0['first'] = setup.idmap['first01']
    release_ref01_match_rt0['include_archived'] = setup.idmap['include_archived01']
    release_ref01_match_rt0['last'] = setup.idmap['last01']
    release_ref01_match_rt0['order_by'] = setup.idmap['order_by01']

    const release_ref01_list_rt0 = (await release_ref01_ent.list(release_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(release_ref01_list_rt0, { id: release_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/release/ReleaseTestData.json')

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
    ['release01','release02','release03','after01','before01','first01','include_archived01','last01','order_by01','term01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_RELEASE_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_RELEASE_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_RELEASE_ENTID']
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
  
