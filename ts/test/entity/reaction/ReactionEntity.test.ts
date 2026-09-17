

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"archivedAt","req":false,"short":"The time at which the entity was archived.","type":"`$ANY`","index$":0},{"active":true,"name":"comment","req":false,"short":"The comment that the reaction is associated with.","type":"`$OBJECT`","index$":1},{"active":true,"name":"createdAt","req":true,"short":"The time at which the entity was created.","type":"`$ANY`","index$":2},{"active":true,"name":"emoji","req":true,"short":"The name of the emoji used for this reaction.","type":"`$STRING`","index$":3},{"active":true,"name":"externalUser","req":false,"short":"The external user that created the reaction through an integration.","type":"`$OBJECT`","index$":4},{"active":true,"name":"id","req":true,"short":"The unique identifier of the entity.","type":"`$STRING`","index$":5},{"active":true,"name":"initiativeUpdate","req":false,"short":"The initiative update that the reaction is associated with.","type":"`$OBJECT`","index$":6},{"active":true,"name":"issue","req":false,"short":"The issue that the reaction is associated with.","type":"`$OBJECT`","index$":7},{"active":true,"name":"post","req":false,"short":"The post that the reaction is associated with.","type":"`$OBJECT`","index$":8},{"active":true,"name":"projectUpdate","req":false,"short":"The project update that the reaction is associated with.","type":"`$OBJECT`","index$":9},{"active":true,"name":"updatedAt","req":true,"short":"The last time at which the entity was meaningfully updated.","type":"`$ANY`","index$":10},{"active":true,"name":"user","req":false,"short":"The workspace user that created the reaction.","type":"`$OBJECT`","index$":11}],"id":{"field":"id","name":"id"},"name":"reaction","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST reactionCreate","json":"{\"field\":{\"args\":[{\"gqltype\":\"ReactionCreateInput!\",\"name\":\"input\",\"reqd\":true,\"type\":\"ReactionCreateInput\"}],\"deprecated\":false,\"desc\":\"Creates a new reaction.\",\"gqltype\":\"ReactionPayload!\",\"list\":false,\"name\":\"reactionCreate\",\"reqd\":true,\"type\":\"ReactionPayload\"},\"invocation\":{\"doc\":\"mutation ReactionCreate($input: ReactionCreateInput!) { reactionCreate(input: $input) { reaction { ...ReactionFields } success } } fragment ReactionFields on Reaction { archivedAt comment { id } createdAt emoji externalUser { id } id initiativeUpdate { id } issue { id } post { id } projectUpdate { id } updatedAt user { id } }\",\"field\":\"reactionCreate\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"\",\"gqltype\":\"ReactionCreateInput!\",\"name\":\"input\"}]},\"protocol\":\"graphql\",\"types\":{\"ReactionCreateInput\":{\"desc\":\"Input for creating a new reaction.\",\"fields\":{\"commentId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The comment to associate the reaction with.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"commentId\",\"reqd\":false,\"type\":\"String\"},\"emoji\":{\"args\":[],\"deprecated\":false,\"desc\":\"The emoji the user reacted with.\",\"gqltype\":\"String!\",\"list\":false,\"name\":\"emoji\",\"reqd\":true,\"type\":\"String\"},\"id\":{\"args\":[],\"deprecated\":false,\"desc\":\"The identifier in UUID v4 format. If none is provided, the backend will generate one.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"id\",\"reqd\":false,\"type\":\"String\"},\"initiativeUpdateId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The update to associate the reaction with.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"initiativeUpdateId\",\"reqd\":false,\"type\":\"String\"},\"issueId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The issue to associate the reaction with. Can be a UUID or issue identifier (e.g., 'LIN-123').\",\"gqltype\":\"String\",\"list\":false,\"name\":\"issueId\",\"reqd\":false,\"type\":\"String\"},\"postId\":{\"args\":[],\"deprecated\":false,\"desc\":\"[Internal] The post to associate the reaction with.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"postId\",\"reqd\":false,\"type\":\"String\"},\"projectUpdateId\":{\"args\":[],\"deprecated\":false,\"desc\":\"The project update to associate the reaction with.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"projectUpdateId\",\"reqd\":false,\"type\":\"String\"},\"pullRequestCommentId\":{\"args\":[],\"deprecated\":false,\"desc\":\"[Internal] The pull request comment to associate the reaction with.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"pullRequestCommentId\",\"reqd\":false,\"type\":\"String\"},\"pullRequestId\":{\"args\":[],\"deprecated\":false,\"desc\":\"[Internal] The pull request to associate the reaction with.\",\"gqltype\":\"String\",\"list\":false,\"name\":\"pullRequestId\",\"reqd\":false,\"type\":\"String\"}},\"kind\":\"INPUT_OBJECT\",\"name\":\"ReactionCreateInput\"},\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation ReactionCreate($input: ReactionCreateInput!) { reactionCreate(input: $input) { reaction { ...ReactionFields } success } } fragment ReactionFields on Reaction { archivedAt comment { id } createdAt emoji externalUser { id } id initiativeUpdate { id } issue { id } post { id } projectUpdate { id } updatedAt user { id } }","field":"reactionCreate","optype":"mutation","vars":[{"from":"","gqltype":"ReactionCreateInput!","name":"input"}]},"kind":"graphql","method":"POST","orig":"reactionCreate","segments":[],"select":{},"transform":{"req":"`reqdata`","res":"`body.data.reactionCreate.reaction`"},"index$":0}],"key$":"create"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST reactionDelete","json":"{\"field\":{\"args\":[{\"gqltype\":\"String!\",\"name\":\"id\",\"reqd\":true,\"type\":\"String\"}],\"deprecated\":false,\"desc\":\"Deletes a reaction.\",\"gqltype\":\"DeletePayload!\",\"list\":false,\"name\":\"reactionDelete\",\"reqd\":true,\"type\":\"DeletePayload\"},\"invocation\":{\"doc\":\"mutation ReactionRemove($id: String!) { reactionDelete(id: $id) { entityId lastSyncId success } }\",\"field\":\"reactionDelete\",\"optype\":\"mutation\",\"vars\":[{\"from\":\"id\",\"gqltype\":\"String!\",\"name\":\"id\"}]},\"protocol\":\"graphql\",\"types\":{\"String\":{\"desc\":\"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.\",\"fields\":{},\"kind\":\"SCALAR\",\"name\":\"String\"}},\"typesScope\":\"inputs\"}","source":"graphql","version":1},"graphql":{"doc":"mutation ReactionRemove($id: String!) { reactionDelete(id: $id) { entityId lastSyncId success } }","field":"reactionDelete","optype":"mutation","vars":[{"from":"id","gqltype":"String!","name":"id"}]},"kind":"graphql","method":"POST","orig":"reactionDelete","segments":[],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data.reactionDelete`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"reaction","name__orig":"reaction","Name":"Reaction","name_":"reaction","name-":"reaction","NAME":"REACTION","index$":65}, {"active":true,"entity":"reaction","key$":"BasicReactionFlow","kind":"basic","name":"BasicReactionFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"reaction_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"reaction_ref01","suffix":"_rm0"},"match":{"id":"reaction01"},"op":"remove","spec":[],"valid":[],"index$":1}]}, 'Reaction')
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
  
