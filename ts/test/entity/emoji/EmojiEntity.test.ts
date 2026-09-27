

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


describe('EmojiEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.Emoji()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'list', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'emoji.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archivedAt":{"a":true,"h":"Archived At","n":"archivedAt","r":false,"sh":"The time at which the entity was archived.","t":"`$ANY`","key$":"archivedAt","index$":0},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"The time at which the entity was created.","t":"`$ANY`","key$":"createdAt","index$":1},"creator":{"a":true,"h":"Creator","n":"creator","r":false,"sh":"The user who created the emoji.","t":"`$OBJECT`","key$":"creator","index$":2},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier of the entity.","t":"`$STRING`","key$":"id","index$":3},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The unique name of the custom emoji within the workspace.","t":"`$STRING`","key$":"name","index$":4},"organization":{"a":true,"h":"Organization","n":"organization","r":false,"sh":"The workspace that the emoji belongs to.","t":"`$OBJECT`","key$":"organization","index$":5},"source":{"a":true,"h":"Source","n":"source","r":true,"sh":"The source of the emoji, indicating how it was created (e.g., uploaded by a user or imported).","t":"`$STRING`","key$":"source","index$":6},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"The last time at which the entity was meaningfully updated.","t":"`$ANY`","key$":"updatedAt","index$":7},"url":{"a":true,"h":"Url","n":"url","r":true,"sh":"The URL of the uploaded image for this custom emoji.","t":"`$STRING`","key$":"url","index$":8}},"id":{"field":"id","name":"id"},"name":"emoji","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST emojiCreate","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation EmojiCreate($input: EmojiCreateInput!) { emojiCreate(input: $input) { emoji { ...EmojiFields } success } } fragment EmojiFields on Emoji { archivedAt createdAt creator { id } id name organization { id } source updatedAt url }","field":"emojiCreate","optype":"mutation","vars":[{"from":"","gqltype":"EmojiCreateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"emojiCreate","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.emojiCreate.emoji`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"POST emojis","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"first","or":"first","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"param","n":"include_archived","or":"include_archived","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"k":"param","n":"last","or":"last","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"param","n":"order_by","or":"order_by","r":false,"t":"`$ANY`","index$":5}]},"gq":{"doc":"query EmojiList($after: String, $before: String, $filter: EmojiFilter, $first: Int, $includeArchived: Boolean, $last: Int, $orderBy: PaginationOrderBy, $sort: [EmojiSortInput!]) { emojis(after: $after, before: $before, filter: $filter, first: $first, includeArchived: $includeArchived, last: $last, orderBy: $orderBy, sort: $sort) { nodes { ...EmojiFields } pageInfo { endCursor hasNextPage } } } fragment EmojiFields on Emoji { archivedAt createdAt creator { id } id name organization { id } source updatedAt url }","field":"emojis","optype":"query","page":{"cursor":"pageInfo.endCursor","more":"pageInfo.hasNextPage","nodes":"nodes","style":"relay"},"vars":[{"from":"after","gqltype":"String","name":"after"},{"from":"before","gqltype":"String","name":"before"},{"from":"filter","gqltype":"EmojiFilter","name":"filter"},{"from":"first","gqltype":"Int","name":"first"},{"from":"includeArchived","gqltype":"Boolean","name":"includeArchived"},{"from":"last","gqltype":"Int","name":"last"},{"from":"orderBy","gqltype":"PaginationOrderBy","name":"orderBy"},{"from":"sort","gqltype":"[EmojiSortInput!]","name":"sort"}]},"k":"graphql","m":"POST","o":"emojis","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.emojis.nodes`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"POST emoji","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"query EmojiLoad($id: String!) { emoji(id: $id) { ...EmojiFields } } fragment EmojiFields on Emoji { archivedAt createdAt creator { id } id name organization { id } source updatedAt url }","field":"emoji","optype":"query","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"emoji","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.emoji`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"POST emojiDelete","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation EmojiRemove($id: String!) { emojiDelete(id: $id) { entityId lastSyncId success } }","field":"emojiDelete","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"emojiDelete","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.emojiDelete`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"emoji","name__orig":"emoji","Name":"Emoji","name_":"emoji","name-":"emoji","NAME":"EMOJI","index$":24}, {"active":true,"entity":"emoji","key$":"BasicEmojiFlow","kind":"basic","name":"BasicEmojiFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"emoji_ref01"},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"emoji_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"emoji_ref01","srcdatavar":"emoji_ref01_data","suffix":"_dt0"},"m":{"id":"emoji01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-emoji_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"emoji_ref01","suffix":"_rm0"},"m":{"id":"emoji01"},"o":"remove","s":[],"v":[],"index$":3},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"after":"after01","before":"before01","first":"first01","include_archived":"include_archived01","last":"last01","order_by":"order_by01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"emoji_ref01"}}],"index$":4}]}, 'Emoji', {"POST emojiCreate":{"protocol":"graphql"},"POST emojis":{"protocol":"graphql"},"POST emoji":{"protocol":"graphql"},"POST emojiDelete":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const emoji_ref01_ent = client.Emoji()
    let emoji_ref01_data = setup.data.new.emoji['emoji_ref01']
    emoji_ref01_data['after'] = setup.idmap['after01']
    emoji_ref01_data['before'] = setup.idmap['before01']
    emoji_ref01_data['first'] = setup.idmap['first01']
    emoji_ref01_data['include_archived'] = setup.idmap['include_archived01']
    emoji_ref01_data['last'] = setup.idmap['last01']
    emoji_ref01_data['order_by'] = setup.idmap['order_by01']

    emoji_ref01_data = (await emoji_ref01_ent.create(emoji_ref01_data)).data()
    assert(null != emoji_ref01_data.id)


    // LIST
    const emoji_ref01_match: any = {}
    emoji_ref01_match['after'] = setup.idmap['after01']
    emoji_ref01_match['before'] = setup.idmap['before01']
    emoji_ref01_match['first'] = setup.idmap['first01']
    emoji_ref01_match['include_archived'] = setup.idmap['include_archived01']
    emoji_ref01_match['last'] = setup.idmap['last01']
    emoji_ref01_match['order_by'] = setup.idmap['order_by01']

    const emoji_ref01_list = (await emoji_ref01_ent.list(emoji_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(emoji_ref01_list, { id: emoji_ref01_data.id })))


    // LOAD
    const emoji_ref01_match_dt0: any = {}
    emoji_ref01_match_dt0.id = emoji_ref01_data.id
    const emoji_ref01_data_dt0 = (await emoji_ref01_ent.load(emoji_ref01_match_dt0)).data()
    assert(emoji_ref01_data_dt0.id === emoji_ref01_data.id)


    // REMOVE
    const emoji_ref01_match_rm0: any = { id: emoji_ref01_data.id }
    await emoji_ref01_ent.remove(emoji_ref01_match_rm0)
  

    // LIST
    const emoji_ref01_match_rt0: any = {}
    emoji_ref01_match_rt0['after'] = setup.idmap['after01']
    emoji_ref01_match_rt0['before'] = setup.idmap['before01']
    emoji_ref01_match_rt0['first'] = setup.idmap['first01']
    emoji_ref01_match_rt0['include_archived'] = setup.idmap['include_archived01']
    emoji_ref01_match_rt0['last'] = setup.idmap['last01']
    emoji_ref01_match_rt0['order_by'] = setup.idmap['order_by01']

    const emoji_ref01_list_rt0 = (await emoji_ref01_ent.list(emoji_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(emoji_ref01_list_rt0, { id: emoji_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/emoji/EmojiTestData.json')

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
    ['emoji01','emoji02','emoji03','after01','before01','first01','include_archived01','last01','order_by01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_EMOJI_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_EMOJI_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_EMOJI_ENTID']
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
  
