

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


describe('ReactionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LINEAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('LINEAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LinearSDK.test()
    const ent = testsdk.Reaction()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LINEAR_TEST_LIVE
    for (const op of ['create', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'reaction.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archivedAt":{"a":true,"h":"Archived At","n":"archivedAt","r":false,"sh":"The time at which the entity was archived.","t":"`$ANY`","key$":"archivedAt","index$":0},"comment":{"a":true,"h":"Comment","n":"comment","r":false,"sh":"The comment that the reaction is associated with.","t":"`$OBJECT`","key$":"comment","index$":1},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"sh":"The time at which the entity was created.","t":"`$ANY`","key$":"createdAt","index$":2},"emoji":{"a":true,"h":"Emoji","n":"emoji","r":true,"sh":"The name of the emoji used for this reaction.","t":"`$STRING`","key$":"emoji","index$":3},"externalUser":{"a":true,"h":"External User","n":"externalUser","r":false,"sh":"The external user that created the reaction through an integration.","t":"`$OBJECT`","key$":"externalUser","index$":4},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier of the entity.","t":"`$STRING`","key$":"id","index$":5},"initiativeUpdate":{"a":true,"h":"Initiative Update","n":"initiativeUpdate","r":false,"sh":"The initiative update that the reaction is associated with.","t":"`$OBJECT`","key$":"initiativeUpdate","index$":6},"issue":{"a":true,"h":"Issue","n":"issue","r":false,"sh":"The issue that the reaction is associated with.","t":"`$OBJECT`","key$":"issue","index$":7},"post":{"a":true,"h":"Post","n":"post","r":false,"sh":"The post that the reaction is associated with.","t":"`$OBJECT`","key$":"post","index$":8},"projectUpdate":{"a":true,"h":"Project Update","n":"projectUpdate","r":false,"sh":"The project update that the reaction is associated with.","t":"`$OBJECT`","key$":"projectUpdate","index$":9},"updatedAt":{"a":true,"h":"Updated At","n":"updatedAt","r":true,"sh":"The last time at which the entity was meaningfully updated.","t":"`$ANY`","key$":"updatedAt","index$":10},"user":{"a":true,"h":"User","n":"user","r":false,"sh":"The workspace user that created the reaction.","t":"`$OBJECT`","key$":"user","index$":11}},"id":{"field":"id","name":"id"},"name":"reaction","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST reactionCreate","source":"graphql","version":2},"g":{},"gq":{"doc":"mutation ReactionCreate($input: ReactionCreateInput!) { reactionCreate(input: $input) { reaction { ...ReactionFields } success } } fragment ReactionFields on Reaction { archivedAt comment { id } createdAt emoji externalUser { id } id initiativeUpdate { id } issue { id } post { id } projectUpdate { id } updatedAt user { id } }","field":"reactionCreate","optype":"mutation","vars":[{"from":"","gqltype":"ReactionCreateInput!","name":"input"}]},"k":"graphql","m":"POST","o":"reactionCreate","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.reactionCreate.reaction`"},"index$":0}],"key$":"create"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"POST reactionDelete","source":"graphql","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"gq":{"doc":"mutation ReactionRemove($id: String!) { reactionDelete(id: $id) { entityId lastSyncId success } }","field":"reactionDelete","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"k":"graphql","m":"POST","o":"reactionDelete","q":{"exist":["id"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.data.reactionDelete`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"reaction","name__orig":"reaction","Name":"Reaction","name_":"reaction","name-":"reaction","NAME":"REACTION","index$":65}, {"active":true,"entity":"reaction","key$":"BasicReactionFlow","kind":"basic","name":"BasicReactionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"reaction_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"reaction_ref01","suffix":"_rm0"},"m":{"id":"reaction01"},"o":"remove","s":[],"v":[],"index$":1}]}, 'Reaction', {"POST reactionCreate":{"protocol":"graphql"},"POST reactionDelete":{"protocol":"graphql"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const reaction_ref01_ent = client.Reaction()
    let reaction_ref01_data = setup.data.new.reaction['reaction_ref01']

    reaction_ref01_data = (await reaction_ref01_ent.create(reaction_ref01_data)).data()
    assert(null != reaction_ref01_data.id)


    // REMOVE
    const reaction_ref01_match_rm0: any = { id: reaction_ref01_data.id }
    await reaction_ref01_ent.remove(reaction_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/reaction/ReactionTestData.json')

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
    ['reaction01','reaction02','reaction03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LINEAR_TEST_REACTION_ENTID': idmap,
    'LINEAR_TEST_LIVE': 'FALSE',
    'LINEAR_TEST_EXPLAIN': 'FALSE',
    'LINEAR_APIKEY': '',
  })

  idmap = env['LINEAR_TEST_REACTION_ENTID']

  const live = 'TRUE' === env.LINEAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LINEAR_TEST_REACTION_ENTID']
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
  
