

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


describe('ReleaseStageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.ReleaseStage()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'release_stage.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archivedAt":{"a":true,"h":"Archived At","n":"archivedAt","r":false,"sh":"The time at which the entity was archived.","t":"`$ANY`","key$":"archivedAt","index$":0},"color":{"a":true,"h":"Color","n":"color","r":true,"sh":"The display color of the stage as a HEX string (e.g., '#0f783c'), used for visual representation in the UI.","t":"`$STRING`","key$":"color","index$":1},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"The time at which the entity was created.","t":"`$ANY`","key$":"createdAt","index$":2},"frozen":{"a":true,"h":"Frozen","n":"frozen","r":true,"sh":"Whether this stage is frozen.","t":"`$BOOLEAN`","key$":"frozen","index$":3},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier of the entity.","t":"`$STRING`","key$":"id","index$":4},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The name of the stage.","t":"`$STRING`","key$":"name","index$":5},"pipeline":{"a":true,"h":"Pipeline","n":"pipeline","r":false,"sh":"The release pipeline that this stage belongs to.","t":"`$OBJECT`","key$":"pipeline","index$":6},"position":{"a":true,"h":"Position","n":"position","r":true,"sh":"The position of the stage within its pipeline, used for ordering stages in the UI.","t":"`$NUMBER`","key$":"position","index$":7},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"The lifecycle type of the stage (planned, started, completed, or canceled).","t":"`$STRING`","key$":"type","index$":8},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"The last time at which the entity was meaningfully updated.","t":"`$ANY`","key$":"updatedAt","index$":9}},"id":{"field":"id","name":"id"},"name":"release_stage","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST releaseStageCreate","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation ReleaseStageCreate($input: ReleaseStageCreateInput!) { releaseStageCreate(input: $input) { releaseStage { ...ReleaseStageFields } success } } fragment ReleaseStageFields on ReleaseStage { archivedAt color createdAt frozen id name pipeline { id } position type updatedAt }","field":"releaseStageCreate","optype":"mutation","vars":[{"from":"","gqltype":"ReleaseStageCreateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"releaseStageCreate","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.releaseStageCreate.releaseStage`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"POST releaseStages","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"first","or":"first","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"param","n":"include_archived","or":"include_archived","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"k":"param","n":"last","or":"last","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"param","n":"order_by","or":"order_by","r":false,"t":"`$ANY`","index$":5}]},"gq":{"doc":"query ReleaseStageList($after: String, $before: String, $filter: ReleaseStageFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { releaseStages(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...ReleaseStageFields } pageInfo { endCursor hasNextPage } } } fragment ReleaseStageFields on ReleaseStage { archivedAt color createdAt frozen id name pipeline { id } position type updatedAt }","field":"releaseStages","optype":"query","page":{"cursor":"pageInfo.endCursor","more":"pageInfo.hasNextPage","nodes":"nodes","style":"relay"},"vars":[{"from":"after","gqltype":"String","name":"after"},{"from":"before","gqltype":"String","name":"before"},{"from":"","gqltype":"ReleaseStageFilter","name":"filter"},{"from":"first","gqltype":"Int","name":"first"},{"from":"includeArchived","gqltype":"Boolean","name":"includeArchived"},{"from":"last","gqltype":"Int","name":"last"},{"from":"orderBy","gqltype":"PaginationOrderBy","name":"orderBy"}]},"k":"graphql","m":"POST","o":"releaseStages","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.releaseStages.nodes`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"POST releaseStage","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"query ReleaseStageLoad($id: String!) { releaseStage(id: $id) { ...ReleaseStageFields } } fragment ReleaseStageFields on ReleaseStage { archivedAt color createdAt frozen id name pipeline { id } position type updatedAt }","field":"releaseStage","optype":"query","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"releaseStage","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.releaseStage`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"POST releaseStageArchive","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation ReleaseStageUpdateArchive($id: String!) { releaseStageArchive(id: $id) { entity { ...ReleaseStageFields } success } } fragment ReleaseStageFields on ReleaseStage { archivedAt color createdAt frozen id name pipeline { id } position type updatedAt }","field":"releaseStageArchive","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"releaseStageArchive","q":{"$action":"archive","exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.releaseStageArchive.entity`"},"index$":0},{"a":true,"co":{"id":"POST releaseStageUnarchive","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation ReleaseStageUpdateUnarchive($id: String!) { releaseStageUnarchive(id: $id) { entity { ...ReleaseStageFields } success } } fragment ReleaseStageFields on ReleaseStage { archivedAt color createdAt frozen id name pipeline { id } position type updatedAt }","field":"releaseStageUnarchive","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"releaseStageUnarchive","q":{"$action":"unarchive","exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.releaseStageUnarchive.entity`"},"index$":1},{"a":true,"co":{"id":"POST releaseStageUpdate","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation ReleaseStageUpdate($id: String!, $input: ReleaseStageUpdateInput!) { releaseStageUpdate(id: $id, input: $input) { releaseStage { ...ReleaseStageFields } success } } fragment ReleaseStageFields on ReleaseStage { archivedAt color createdAt frozen id name pipeline { id } position type updatedAt }","field":"releaseStageUpdate","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"","gqltype":"ReleaseStageUpdateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"releaseStageUpdate","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.releaseStageUpdate.releaseStage`"},"index$":2}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"release_stage","name__orig":"release_stage","Name":"ReleaseStage","name_":"release_stage","name-":"release-stage","NAME":"RELEASE_STAGE","index$":69}, {"active":true,"entity":"release_stage","key$":"BasicReleaseStageFlow","kind":"basic","name":"BasicReleaseStageFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"release_stage_ref01"},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"release_stage_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"release_stage_ref01","srcdatavar":"release_stage_ref01_data","suffix":"_up0","textfield":"color"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-release_stage_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"release_stage_ref01","srcdatavar":"release_stage_ref01_data","suffix":"_dt0"},"m":{"id":"release_stage01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-release_stage_ref01"}}],"index$":3}]}, 'ReleaseStage', {"POST releaseStageCreate":{"protocol":"graphql"},"POST releaseStages":{"protocol":"graphql"},"POST releaseStage":{"protocol":"graphql"},"POST releaseStageArchive":{"protocol":"graphql"},"POST releaseStageUnarchive":{"protocol":"graphql"},"POST releaseStageUpdate":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const release_stage_ref01_ent = client.ReleaseStage()
    let release_stage_ref01_data = setup.data.new.release_stage['release_stage_ref01']
    release_stage_ref01_data['after'] = setup.idmap['after01']
    release_stage_ref01_data['before'] = setup.idmap['before01']
    release_stage_ref01_data['first'] = setup.idmap['first01']
    release_stage_ref01_data['include_archived'] = setup.idmap['include_archived01']
    release_stage_ref01_data['last'] = setup.idmap['last01']
    release_stage_ref01_data['order_by'] = setup.idmap['order_by01']

    release_stage_ref01_data = (await release_stage_ref01_ent.create(release_stage_ref01_data)).data()
    assert(null != release_stage_ref01_data.id)


    // LIST
    const release_stage_ref01_match: any = {}
    release_stage_ref01_match['after'] = setup.idmap['after01']
    release_stage_ref01_match['before'] = setup.idmap['before01']
    release_stage_ref01_match['first'] = setup.idmap['first01']
    release_stage_ref01_match['include_archived'] = setup.idmap['include_archived01']
    release_stage_ref01_match['last'] = setup.idmap['last01']
    release_stage_ref01_match['order_by'] = setup.idmap['order_by01']

    const release_stage_ref01_list = (await release_stage_ref01_ent.list(release_stage_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(release_stage_ref01_list, { id: release_stage_ref01_data.id })))


    // UPDATE
    const release_stage_ref01_data_up0: any = {}
    release_stage_ref01_data_up0.id = release_stage_ref01_data.id

    const release_stage_ref01_markdef_up0 = { name: 'color', value: 'Mark01-release_stage_ref01_' + setup.now }
    ;(release_stage_ref01_data_up0 as any)[release_stage_ref01_markdef_up0.name] = release_stage_ref01_markdef_up0.value

    const release_stage_ref01_resdata_up0 = (await release_stage_ref01_ent.update(release_stage_ref01_data_up0)).data()
    assert(release_stage_ref01_resdata_up0.id === release_stage_ref01_data_up0.id)

    assert((release_stage_ref01_resdata_up0 as any)[release_stage_ref01_markdef_up0.name] === release_stage_ref01_markdef_up0.value)


    // LOAD
    const release_stage_ref01_match_dt0: any = {}
    release_stage_ref01_match_dt0.id = release_stage_ref01_data.id
    const release_stage_ref01_data_dt0 = (await release_stage_ref01_ent.load(release_stage_ref01_match_dt0)).data()
    assert(release_stage_ref01_data_dt0.id === release_stage_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/release_stage/ReleaseStageTestData.json')

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
    ['release_stage01','release_stage02','release_stage03','after01','before01','first01','include_archived01','last01','order_by01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_RELEASE_STAGE_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_RELEASE_STAGE_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_RELEASE_STAGE_ENTID']
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
  
