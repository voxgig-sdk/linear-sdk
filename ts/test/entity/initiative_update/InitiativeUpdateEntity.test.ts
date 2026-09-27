

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


describe('InitiativeUpdateEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.InitiativeUpdate()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'initiative_update.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archivedAt":{"a":true,"h":"Archived At","n":"archivedAt","r":false,"sh":"The time at which the entity was archived.","t":"`$ANY`","key$":"archivedAt","index$":0},"body":{"a":true,"h":"Body","n":"body","r":true,"sh":"The update content in markdown format.","t":"`$STRING`","key$":"body","index$":1},"bodyData":{"a":true,"h":"Body Data","n":"bodyData","r":true,"sh":"[Internal] The content of the update as a Prosemirror document.","t":"`$STRING`","key$":"bodyData","index$":2},"commentCount":{"a":true,"h":"Comment Count","n":"commentCount","r":true,"sh":"Number of comments associated with the initiative update.","t":"`$INTEGER`","key$":"commentCount","index$":3},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"The time at which the entity was created.","t":"`$ANY`","key$":"createdAt","index$":4},"diff":{"a":true,"h":"Diff","n":"diff","r":false,"sh":"The diff between the current update and the previous one.","t":"`$ANY`","key$":"diff","index$":5},"diffMarkdown":{"a":true,"h":"Diff Markdown","n":"diffMarkdown","r":false,"sh":"The diff between the current update and the previous one, formatted as markdown.","t":"`$STRING`","key$":"diffMarkdown","index$":6},"editedAt":{"a":true,"h":"Edited At","n":"editedAt","r":false,"sh":"The time the update was edited.","t":"`$ANY`","key$":"editedAt","index$":7},"health":{"a":true,"h":"Health","n":"health","r":true,"sh":"The health of the initiative at the time this update was posted.","t":"`$STRING`","key$":"health","index$":8},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier of the entity.","t":"`$STRING`","key$":"id","index$":9},"infoSnapshot":{"a":true,"h":"Info Snapshot","n":"infoSnapshot","r":false,"sh":"[Internal] A snapshot of initiative properties at the time the update was posted, including project statuses, sub-initiative health, and target dates.","t":"`$ANY`","key$":"infoSnapshot","index$":10},"initiative":{"a":true,"h":"Initiative","n":"initiative","r":false,"sh":"The initiative that this status update was posted to.","t":"`$OBJECT`","key$":"initiative","index$":11},"isDiffHidden":{"a":true,"h":"Is Diff Hidden","n":"isDiffHidden","r":true,"sh":"Whether the diff between this update and the previous one should be hidden in the UI.","t":"`$BOOLEAN`","key$":"isDiffHidden","index$":12},"isStale":{"a":true,"h":"Is Stale","n":"isStale","r":true,"sh":"Whether the initiative update is stale.","t":"`$BOOLEAN`","key$":"isStale","index$":13},"reactionData":{"a":true,"h":"Reaction Data","n":"reactionData","r":true,"sh":"Emoji reaction summary, grouped by emoji type.","t":"`$ANY`","key$":"reactionData","index$":14},"slugId":{"a":true,"h":"Slug Id","n":"slugId","r":true,"sh":"The update's unique URL slug.","t":"`$STRING`","key$":"slugId","index$":15},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"The last time at which the entity was meaningfully updated.","t":"`$ANY`","key$":"updatedAt","index$":16},"url":{"a":true,"h":"Url","n":"url","r":true,"sh":"The URL to the initiative update.","t":"`$STRING`","key$":"url","index$":17},"user":{"a":true,"h":"User","n":"user","r":false,"sh":"The user who wrote the update.","t":"`$OBJECT`","key$":"user","index$":18}},"id":{"field":"id","name":"id"},"name":"initiative_update","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST initiativeUpdateCreate","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation InitiativeUpdateCreate($input: InitiativeUpdateCreateInput!) { initiativeUpdateCreate(input: $input) { initiativeUpdate { ...InitiativeUpdateFields } success } } fragment InitiativeUpdateFields on InitiativeUpdate { archivedAt body bodyData commentCount createdAt diff diffMarkdown editedAt health id infoSnapshot initiative { id } isDiffHidden isStale reactionData slugId updatedAt url user { id } }","field":"initiativeUpdateCreate","optype":"mutation","vars":[{"from":"","gqltype":"InitiativeUpdateCreateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"initiativeUpdateCreate","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.initiativeUpdateCreate.initiativeUpdate`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"POST initiativeUpdates","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"first","or":"first","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"param","n":"include_archived","or":"include_archived","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"k":"param","n":"last","or":"last","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"param","n":"order_by","or":"order_by","r":false,"t":"`$ANY`","index$":5}]},"gq":{"doc":"query InitiativeUpdateList($after: String, $before: String, $filter: InitiativeUpdateFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy) { initiativeUpdates(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy) { nodes { ...InitiativeUpdateFields } pageInfo { endCursor hasNextPage } } } fragment InitiativeUpdateFields on InitiativeUpdate { archivedAt body bodyData commentCount createdAt diff diffMarkdown editedAt health id infoSnapshot initiative { id } isDiffHidden isStale reactionData slugId updatedAt url user { id } }","field":"initiativeUpdates","optype":"query","page":{"cursor":"pageInfo.endCursor","more":"pageInfo.hasNextPage","nodes":"nodes","style":"relay"},"vars":[{"from":"after","gqltype":"String","name":"after"},{"from":"before","gqltype":"String","name":"before"},{"from":"","gqltype":"InitiativeUpdateFilter","name":"filter"},{"from":"first","gqltype":"Int","name":"first"},{"from":"includeArchived","gqltype":"Boolean","name":"includeArchived"},{"from":"last","gqltype":"Int","name":"last"},{"from":"orderBy","gqltype":"PaginationOrderBy","name":"orderBy"}]},"k":"graphql","m":"POST","o":"initiativeUpdates","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.initiativeUpdates.nodes`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"POST initiativeUpdate","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"query InitiativeUpdateLoad($id: String!) { initiativeUpdate(id: $id) { ...InitiativeUpdateFields } } fragment InitiativeUpdateFields on InitiativeUpdate { archivedAt body bodyData commentCount createdAt diff diffMarkdown editedAt health id infoSnapshot initiative { id } isDiffHidden isStale reactionData slugId updatedAt url user { id } }","field":"initiativeUpdate","optype":"query","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"initiativeUpdate","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.initiativeUpdate`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"POST initiativeUpdateArchive","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation InitiativeUpdateUpdateArchive($id: String!) { initiativeUpdateArchive(id: $id) { entity { ...InitiativeUpdateFields } success } } fragment InitiativeUpdateFields on InitiativeUpdate { archivedAt body bodyData commentCount createdAt diff diffMarkdown editedAt health id infoSnapshot initiative { id } isDiffHidden isStale reactionData slugId updatedAt url user { id } }","field":"initiativeUpdateArchive","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"initiativeUpdateArchive","q":{"$action":"archive","exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.initiativeUpdateArchive.entity`"},"index$":0},{"a":true,"co":{"id":"POST initiativeUpdateUnarchive","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation InitiativeUpdateUpdateUnarchive($id: String!) { initiativeUpdateUnarchive(id: $id) { entity { ...InitiativeUpdateFields } success } } fragment InitiativeUpdateFields on InitiativeUpdate { archivedAt body bodyData commentCount createdAt diff diffMarkdown editedAt health id infoSnapshot initiative { id } isDiffHidden isStale reactionData slugId updatedAt url user { id } }","field":"initiativeUpdateUnarchive","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"initiativeUpdateUnarchive","q":{"$action":"unarchive","exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.initiativeUpdateUnarchive.entity`"},"index$":1},{"a":true,"co":{"id":"POST initiativeUpdateUpdate","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation InitiativeUpdateUpdate($id: String!, $input: InitiativeUpdateUpdateInput!) { initiativeUpdateUpdate(id: $id, input: $input) { initiativeUpdate { ...InitiativeUpdateFields } success } } fragment InitiativeUpdateFields on InitiativeUpdate { archivedAt body bodyData commentCount createdAt diff diffMarkdown editedAt health id infoSnapshot initiative { id } isDiffHidden isStale reactionData slugId updatedAt url user { id } }","field":"initiativeUpdateUpdate","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"},{"from":"","gqltype":"InitiativeUpdateUpdateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"initiativeUpdateUpdate","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.initiativeUpdateUpdate.initiativeUpdate`"},"index$":2}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"initiative_update","name__orig":"initiative_update","Name":"InitiativeUpdate","name_":"initiative_update","name-":"initiative-update","NAME":"INITIATIVE_UPDATE","index$":36}, {"active":true,"entity":"initiative_update","key$":"BasicInitiativeUpdateFlow","kind":"basic","name":"BasicInitiativeUpdateFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"initiative_update_ref01"},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"initiative_update_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"initiative_update_ref01","srcdatavar":"initiative_update_ref01_data","suffix":"_up0","textfield":"body"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-initiative_update_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"initiative_update_ref01","srcdatavar":"initiative_update_ref01_data","suffix":"_dt0"},"m":{"id":"initiative_update01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-initiative_update_ref01"}}],"index$":3}]}, 'InitiativeUpdate', {"POST initiativeUpdateCreate":{"protocol":"graphql"},"POST initiativeUpdates":{"protocol":"graphql"},"POST initiativeUpdate":{"protocol":"graphql"},"POST initiativeUpdateArchive":{"protocol":"graphql"},"POST initiativeUpdateUnarchive":{"protocol":"graphql"},"POST initiativeUpdateUpdate":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const initiative_update_ref01_ent = client.InitiativeUpdate()
    let initiative_update_ref01_data = setup.data.new.initiative_update['initiative_update_ref01']
    initiative_update_ref01_data['after'] = setup.idmap['after01']
    initiative_update_ref01_data['before'] = setup.idmap['before01']
    initiative_update_ref01_data['first'] = setup.idmap['first01']
    initiative_update_ref01_data['include_archived'] = setup.idmap['include_archived01']
    initiative_update_ref01_data['last'] = setup.idmap['last01']
    initiative_update_ref01_data['order_by'] = setup.idmap['order_by01']

    initiative_update_ref01_data = (await initiative_update_ref01_ent.create(initiative_update_ref01_data)).data()
    assert(null != initiative_update_ref01_data.id)


    // LIST
    const initiative_update_ref01_match: any = {}
    initiative_update_ref01_match['after'] = setup.idmap['after01']
    initiative_update_ref01_match['before'] = setup.idmap['before01']
    initiative_update_ref01_match['first'] = setup.idmap['first01']
    initiative_update_ref01_match['include_archived'] = setup.idmap['include_archived01']
    initiative_update_ref01_match['last'] = setup.idmap['last01']
    initiative_update_ref01_match['order_by'] = setup.idmap['order_by01']

    const initiative_update_ref01_list = (await initiative_update_ref01_ent.list(initiative_update_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(initiative_update_ref01_list, { id: initiative_update_ref01_data.id })))


    // UPDATE
    const initiative_update_ref01_data_up0: any = {}
    initiative_update_ref01_data_up0.id = initiative_update_ref01_data.id

    const initiative_update_ref01_markdef_up0 = { name: 'body', value: 'Mark01-initiative_update_ref01_' + setup.now }
    ;(initiative_update_ref01_data_up0 as any)[initiative_update_ref01_markdef_up0.name] = initiative_update_ref01_markdef_up0.value

    const initiative_update_ref01_resdata_up0 = (await initiative_update_ref01_ent.update(initiative_update_ref01_data_up0)).data()
    assert(initiative_update_ref01_resdata_up0.id === initiative_update_ref01_data_up0.id)

    assert((initiative_update_ref01_resdata_up0 as any)[initiative_update_ref01_markdef_up0.name] === initiative_update_ref01_markdef_up0.value)


    // LOAD
    const initiative_update_ref01_match_dt0: any = {}
    initiative_update_ref01_match_dt0.id = initiative_update_ref01_data.id
    const initiative_update_ref01_data_dt0 = (await initiative_update_ref01_ent.load(initiative_update_ref01_match_dt0)).data()
    assert(initiative_update_ref01_data_dt0.id === initiative_update_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/initiative_update/InitiativeUpdateTestData.json')

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
    ['initiative_update01','initiative_update02','initiative_update03','after01','before01','first01','include_archived01','last01','order_by01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_INITIATIVE_UPDATE_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_INITIATIVE_UPDATE_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_INITIATIVE_UPDATE_ENTID']
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
  
