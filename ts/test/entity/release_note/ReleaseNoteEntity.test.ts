

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


describe('ReleaseNoteEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.ReleaseNote()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'release_note.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archivedAt":{"a":true,"h":"Archived At","n":"archivedAt","r":false,"sh":"The time at which the entity was archived.","t":"`$ANY`","key$":"archivedAt","index$":0},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"The time at which the entity was created.","t":"`$ANY`","key$":"createdAt","index$":1},"documentContent":{"a":true,"h":"Document Content","n":"documentContent","r":false,"sh":"Document content backing the release note body.","t":"`$OBJECT`","key$":"documentContent","index$":2},"firstRelease":{"a":true,"h":"First Release","n":"firstRelease","r":false,"sh":"The earliest release covered by this note.","t":"`$OBJECT`","key$":"firstRelease","index$":3},"generationStatus":{"a":true,"h":"Generation Status","n":"generationStatus","r":false,"sh":"Generation status when these release notes are being auto-generated: `pending` while the LLM call is running, `completed` once it lands.","t":"`$STRING`","key$":"generationStatus","index$":4},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier of the entity.","t":"`$STRING`","key$":"id","index$":5},"lastRelease":{"a":true,"h":"Last Release","n":"lastRelease","r":false,"sh":"The most recent release covered by this note.","t":"`$OBJECT`","key$":"lastRelease","index$":6},"pipeline":{"a":true,"h":"Pipeline","n":"pipeline","r":false,"sh":"The release pipeline that this note belongs to.","t":"`$OBJECT`","key$":"pipeline","index$":7},"releaseCount":{"a":true,"h":"Release Count","n":"releaseCount","r":true,"sh":"The number of releases covered by this note.","t":"`$INTEGER`","key$":"releaseCount","index$":8},"slugId":{"a":true,"h":"Slug Id","n":"slugId","r":true,"sh":"The release note's unique URL slug, used to construct human-readable URLs for the note.","t":"`$STRING`","key$":"slugId","index$":9},"title":{"a":true,"h":"Title","n":"title","r":false,"sh":"User-supplied title for the release note.","t":"`$STRING`","key$":"title","index$":10},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"The last time at which the entity was meaningfully updated.","t":"`$ANY`","key$":"updatedAt","index$":11},"url":{"a":true,"h":"Url","n":"url","r":true,"sh":"The URL to the release note page in the Linear app.","t":"`$STRING`","key$":"url","index$":12}},"id":{"field":"id","name":"id"},"name":"release_note","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST releaseNoteCreate","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation ReleaseNoteCreate($input: ReleaseNoteCreateInput!) { releaseNoteCreate(input: $input) { releaseNote { ...ReleaseNoteFields } success } } fragment ReleaseNoteFields on ReleaseNote { archivedAt createdAt documentContent { id } firstRelease { id } generationStatus id lastRelease { id } pipeline { id } releaseCount slugId title updatedAt url }","field":"releaseNoteCreate","optype":"mutation","vars":[{"from":"","gqltype":"ReleaseNoteCreateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"releaseNoteCreate","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.releaseNoteCreate.releaseNote`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"POST releaseNotes","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"first","or":"first","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"param","n":"include_archived","or":"include_archived","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"k":"param","n":"last","or":"last","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"param","n":"order_by","or":"order_by","r":false,"t":"`$ANY`","index$":5}]},"gq":{"doc":"query ReleaseNoteList($after: String, $before: String, $filter: ReleaseNoteFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { releaseNotes(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...ReleaseNoteFields } pageInfo { endCursor hasNextPage } } } fragment ReleaseNoteFields on ReleaseNote { archivedAt createdAt documentContent { id } firstRelease { id } generationStatus id lastRelease { id } pipeline { id } releaseCount slugId title updatedAt url }","field":"releaseNotes","optype":"query","page":{"cursor":"pageInfo.endCursor","more":"pageInfo.hasNextPage","nodes":"nodes","style":"relay"},"vars":[{"from":"after","gqltype":"String","name":"after"},{"from":"before","gqltype":"String","name":"before"},{"from":"","gqltype":"ReleaseNoteFilter","name":"filter"},{"from":"first","gqltype":"Int","name":"first"},{"from":"includeArchived","gqltype":"Boolean","name":"includeArchived"},{"from":"last","gqltype":"Int","name":"last"},{"from":"orderBy","gqltype":"PaginationOrderBy","name":"orderBy"}]},"k":"graphql","m":"POST","o":"releaseNotes","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.releaseNotes.nodes`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"POST releaseNote","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"query ReleaseNoteLoad($id: String!) { releaseNote(id: $id) { ...ReleaseNoteFields } } fragment ReleaseNoteFields on ReleaseNote { archivedAt createdAt documentContent { id } firstRelease { id } generationStatus id lastRelease { id } pipeline { id } releaseCount slugId title updatedAt url }","field":"releaseNote","optype":"query","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"releaseNote","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.releaseNote`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"POST releaseNoteDelete","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation ReleaseNoteRemove($id: String!) { releaseNoteDelete(id: $id) { entityId lastSyncId success } }","field":"releaseNoteDelete","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"releaseNoteDelete","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.releaseNoteDelete`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"POST releaseNoteUpdate","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation ReleaseNoteUpdate($id: String!, $input: ReleaseNoteUpdateInput!) { releaseNoteUpdate(id: $id, input: $input) { releaseNote { ...ReleaseNoteFields } success } } fragment ReleaseNoteFields on ReleaseNote { archivedAt createdAt documentContent { id } firstRelease { id } generationStatus id lastRelease { id } pipeline { id } releaseCount slugId title updatedAt url }","field":"releaseNoteUpdate","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"","gqltype":"ReleaseNoteUpdateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"releaseNoteUpdate","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.releaseNoteUpdate.releaseNote`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"release_note","name__orig":"release_note","Name":"ReleaseNote","name_":"release_note","name-":"release-note","NAME":"RELEASE_NOTE","index$":67}, {"active":true,"entity":"release_note","key$":"BasicReleaseNoteFlow","kind":"basic","name":"BasicReleaseNoteFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"release_note_ref01"},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"release_note_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"release_note_ref01","srcdatavar":"release_note_ref01_data","suffix":"_up0","textfield":"generationStatus"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-release_note_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"release_note_ref01","srcdatavar":"release_note_ref01_data","suffix":"_dt0"},"m":{"id":"release_note01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-release_note_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"release_note_ref01","suffix":"_rm0"},"m":{"id":"release_note01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"release_note_ref01"}}],"index$":5}]}, 'ReleaseNote', {"POST releaseNoteCreate":{"protocol":"graphql"},"POST releaseNotes":{"protocol":"graphql"},"POST releaseNote":{"protocol":"graphql"},"POST releaseNoteDelete":{"protocol":"graphql"},"POST releaseNoteUpdate":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const release_note_ref01_ent = client.ReleaseNote()
    let release_note_ref01_data = setup.data.new.release_note['release_note_ref01']
    release_note_ref01_data['after'] = setup.idmap['after01']
    release_note_ref01_data['before'] = setup.idmap['before01']
    release_note_ref01_data['first'] = setup.idmap['first01']
    release_note_ref01_data['include_archived'] = setup.idmap['include_archived01']
    release_note_ref01_data['last'] = setup.idmap['last01']
    release_note_ref01_data['order_by'] = setup.idmap['order_by01']

    release_note_ref01_data = (await release_note_ref01_ent.create(release_note_ref01_data)).data()
    assert(null != release_note_ref01_data.id)


    // LIST
    const release_note_ref01_match: any = {}
    release_note_ref01_match['after'] = setup.idmap['after01']
    release_note_ref01_match['before'] = setup.idmap['before01']
    release_note_ref01_match['first'] = setup.idmap['first01']
    release_note_ref01_match['include_archived'] = setup.idmap['include_archived01']
    release_note_ref01_match['last'] = setup.idmap['last01']
    release_note_ref01_match['order_by'] = setup.idmap['order_by01']

    const release_note_ref01_list = (await release_note_ref01_ent.list(release_note_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(release_note_ref01_list, { id: release_note_ref01_data.id })))


    // UPDATE
    const release_note_ref01_data_up0: any = {}
    release_note_ref01_data_up0.id = release_note_ref01_data.id

    const release_note_ref01_markdef_up0 = { name: 'generationStatus', value: 'Mark01-release_note_ref01_' + setup.now }
    ;(release_note_ref01_data_up0 as any)[release_note_ref01_markdef_up0.name] = release_note_ref01_markdef_up0.value

    const release_note_ref01_resdata_up0 = (await release_note_ref01_ent.update(release_note_ref01_data_up0)).data()
    assert(release_note_ref01_resdata_up0.id === release_note_ref01_data_up0.id)

    assert((release_note_ref01_resdata_up0 as any)[release_note_ref01_markdef_up0.name] === release_note_ref01_markdef_up0.value)


    // LOAD
    const release_note_ref01_match_dt0: any = {}
    release_note_ref01_match_dt0.id = release_note_ref01_data.id
    const release_note_ref01_data_dt0 = (await release_note_ref01_ent.load(release_note_ref01_match_dt0)).data()
    assert(release_note_ref01_data_dt0.id === release_note_ref01_data.id)


    // REMOVE
    const release_note_ref01_match_rm0: any = { id: release_note_ref01_data.id }
    await release_note_ref01_ent.remove(release_note_ref01_match_rm0)
  

    // LIST
    const release_note_ref01_match_rt0: any = {}
    release_note_ref01_match_rt0['after'] = setup.idmap['after01']
    release_note_ref01_match_rt0['before'] = setup.idmap['before01']
    release_note_ref01_match_rt0['first'] = setup.idmap['first01']
    release_note_ref01_match_rt0['include_archived'] = setup.idmap['include_archived01']
    release_note_ref01_match_rt0['last'] = setup.idmap['last01']
    release_note_ref01_match_rt0['order_by'] = setup.idmap['order_by01']

    const release_note_ref01_list_rt0 = (await release_note_ref01_ent.list(release_note_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(release_note_ref01_list_rt0, { id: release_note_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/release_note/ReleaseNoteTestData.json')

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
    ['release_note01','release_note02','release_note03','after01','before01','first01','include_archived01','last01','order_by01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_RELEASE_NOTE_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_RELEASE_NOTE_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_RELEASE_NOTE_ENTID']
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
  
